import { FileText, Sparkles, Eye, Download, LayoutTemplate, SlidersHorizontal } from "lucide-react";
import Title from "./Title";

const features = [
  {
    icon: <Sparkles size={28} />,
    title: "AI Resume Writing",
    desc: "Generate summaries, experience, and skills with smart AI suggestions.",
  },
  {
    icon: <FileText size={28} />,
    title: "ATS-Friendly Templates",
    desc: "Clean, structured templates designed to pass recruiter filters.",
  },
  {
    icon: <Eye size={28} />,
    title: "Live Preview",
    desc: "See your resume update in real-time as you edit.",
  },
  {
    icon: <SlidersHorizontal size={28} />,
    title: "Easy Customization",
    desc: "Adjust fonts, colors, and sections effortlessly.",
  },
  {
    icon: <Download size={28} />,
    title: "One-Click PDF Export",
    desc: "Download your resume instantly in high-quality PDF.",
  },
  {
    icon: <LayoutTemplate size={28} />,
    title: "Pre-built Sections",
    desc: "Start faster with ready-made sections for every need.",
  },
];

const Feature = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-16 lg:px-24 xl:px-40 bg-white">

      {/* Heading */}
      <Title title=' All-in-one resume builder' description='Powerful features and intelligent tools designed to help you create a professional, job-winning resume faster and with confidence.' />

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition hover:border-indigo-500"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-medium mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Feature;