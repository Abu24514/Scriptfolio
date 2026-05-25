import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
import resumeRouter from "./src/routes/resumeRoutes.js";
import aiRouter from "./src/routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://resume-builder-frontend-5etk.vercel.app/",
    credentials: true,
  })
);

app.use("/api/users", userRouter);
app.use ("/api/resumes" , resumeRouter);
app.use ("/api/ai" , aiRouter);

app.get("/", (req, res) => res.send("Server is Live..."));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
