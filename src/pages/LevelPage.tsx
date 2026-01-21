// src/pages/LevelPage.tsx
import { useParams, Link } from "react-router-dom";
import { CourseQuestions } from "../components/CourseQuestions";

export function LevelPage() {
  const { level } = useParams(); // gets '100-level', '200-level', etc.
  const displayLevel = level?.toUpperCase().replace("-", " ") || "";

  return (
    <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-orange-500">{displayLevel}</h1>
      <CourseQuestions />
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition"
      >
        ← Back to Landing Page
      </Link>
    </div>
  );
}
