import Resume from "../models/Resume.js";
import ai from "../config/ai.js";

/* ---------------- COMMON AI ERROR HANDLER ---------------- */

const handleAIError = (error, res, label) => {
  console.error(`${label} error:`, error);

  const message =
    error?.response?.data?.error?.message ||
    error?.error?.message ||
    error.message ||
    "Something went wrong";

  // token / rate limit / quota errors
  if (
    message.toLowerCase().includes("token") ||
    message.toLowerCase().includes("rate") ||
    message.toLowerCase().includes("quota")
  ) {
    return res.status(429).json({
      message,
    });
  }

  return res.status(500).json({
    message,
  });
};

/* ---------------- COMMON AI GENERATOR ---------------- */

const generateAIResponse = async (systemPrompt, userPrompt, json = false) => {
  return await ai.chat.completions.create({
    model: process.env.OPENAI_MODEL,

    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],

    ...(json && {
      response_format: {
        type: "json_object",
      },
    }),

    temperature: 0.4,
    max_tokens: 2000,
  });
};
/* ========================== main controllers ============================== */

/** 1. controller for enhancing a resume's professional summary 
 * @POST : /api/ai/enhance-pro-sum
 */

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent?.trim()) {
      return res.status(400).json({
        message: "Professional summary is required",
      });
    }

    const response = await generateAIResponse(
      `You are an expert resume writer.
Enhance resume professional summaries.

Rules:
- Keep it ATS friendly
- 1-2 sentences
- Professional tone
- Only return plain text`,
      userContent
    );

    return res.status(200).json({
      enhancedContent: response.choices[0].message.content.trim(),
    });
  } catch (error) {
    return handleAIError(error, res, "enhanceProfessionalSummary");
  }
};

/** 2. controller for enhancing a resume's job description
 * @POST : /api/ai/enhance-job-desc 
 */

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent?.trim()) {
      return res.status(400).json({
        message: "Job description is required",
      });
    }

    const response = await generateAIResponse(
      `You are an expert resume writer.

Enhance job descriptions professionally.

Rules:
- ATS friendly
- Use action verbs
- Mention achievements
- Add measurable impact if possible
- Return only plain text`,
      userContent
    );

    return res.status(200).json({
      enhancedContent: response.choices[0].message.content.trim(),
    });
  } catch (error) {
    return handleAIError(error, res, "enhanceJobDescription");
  }
};

/** 3. controller for uploading a resume to the database 
* @POST : /api/ai/upload-resume 
*/
export const uploadResume = async (req, res) => {
  try {
    const userId = req.userId;

    const { resumeText, title } = req.body;

    if (!resumeText?.trim()) {
      return res.status(400).json({
        message: "Resume text is required",
      });
    }

    // avoid token overflow
    const trimmedResumeText = resumeText.slice(0, 12000);

    const systemPrompt = `
You are an expert AI resume parser.

Extract structured information from resumes.

Rules:
- Return ONLY valid JSON
- No markdown
- No explanation
- Missing values should be empty string ""
- Arrays should be []
`;

    const userPrompt = `
Extract resume data from this resume:

${trimmedResumeText}

Return this exact JSON structure:

{
  "professional_summary": "",
  "skills": [],
  "personal_info": {
    "image": "",
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [
    {
      "company": "",
      "position": "",
      "start_date": "",
      "end_date": "",
      "description": "",
      "is_current": false
    }
  ],
  "project": [
    {
      "name": "",
      "type": "",
      "description": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "graduation_date": "",
      "gpa": ""
    }
  ]
}
`;

    const response = await generateAIResponse(
      systemPrompt,
      userPrompt,
      true
    );

    const extractedData = response.choices[0].message.content;

    // debugging
   /*  console.log("AI RESPONSE:");
    console.log(extractedData); */

    let parsedData;

    try {
      parsedData = JSON.parse(extractedData);
    } catch (jsonError) {
      console.error("JSON Parse Error:", jsonError);

      return res.status(500).json({
        message: "Invalid JSON returned from AI",
      });
    }

    const newResume = await Resume.create({
      userId,
      title: title || "Untitled Resume",
      ...parsedData,
    });

    return res.status(201).json({
      message: "Resume uploaded successfully",
      resumeId: newResume._id,
    });
  } catch (error) {
    return handleAIError(error, res, "uploadResume");
  }
};