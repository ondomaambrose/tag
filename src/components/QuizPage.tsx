import { useParams, useNavigate } from "react-router-dom";
import { ExamKit } from "./ExamKit";
import { courseQuestionMap } from "../data/questions";

export const QuizPage = () => {
  const { courseCode } = useParams<{ courseCode: string }>();
  const navigate = useNavigate();

  // 1. Decode the URL (e.g., "TMC%20211" -> "TMC 211")
  const courseId = decodeURIComponent(courseCode || "");

  // 2. Find questions for this specific course
  const questions = courseQuestionMap[courseId];

  // 3. Handle Invalid Course / No Data
  if (!questions) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Course Not Found</h2>
        <p>We couldn't find a quiz for "{courseId}".</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-600 underline"
        >
          Back Home
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">No Questions Yet</h2>
        <p>The quiz for {courseId} hasn't been uploaded yet.</p>
        <button
          onClick={() => navigate("/courses")}
          className="mt-4 text-blue-600 underline"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return <ExamKit questions={questions} title={`${courseId} Final Exam`} />;
};
