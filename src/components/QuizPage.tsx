import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this points to your firebase config file
import { ExamKit } from "./ExamKit";
import type { Question } from "../types";
import { Loader2 } from "lucide-react";

export const QuizPage = () => {
  const { courseCode } = useParams<{ courseCode: string }>();
  const navigate = useNavigate();

  // 1. Decode the URL (e.g., "TMC%20211" -> "TMC 211")
  const courseId = decodeURIComponent(courseCode || "");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!courseId) return;

      try {
        // 2. Fetch questions from Firestore: courses / [CourseID] / questions
        const questionsRef = collection(db, "courses", courseId, "questions");
        const snapshot = await getDocs(questionsRef);

        const fetchedQuestions = snapshot.docs.map(
          (doc) => doc.data() as Question,
        );

        // Optional: Sort by ID to keep order consistent
        fetchedQuestions.sort((a, b) => a.id - b.id);

        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [courseId]);

  // 3. Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
        <p>Loading {courseId} Exam...</p>
      </div>
    );
  }

  // 4. Handle Empty Data (Course exists but no questions found)
  if (questions.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">No Questions Found</h2>
        <p className="mt-2 text-gray-500">
          The quiz for <strong>{courseId}</strong> hasn't been uploaded to the
          database yet.
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  // 5. Success: Render ExamKit
  return <ExamKit questions={questions} title={`${courseId} Final Exam`} />;
};
