import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FlashcardMode } from "../components/FlashCardMode";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Question } from "../types"; // <--- Import the real type

export const FlashcardPage = () => {
  const { courseCode } = useParams();
  const navigate = useNavigate();

  // Use the global Question type here
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const ALLOWED_TYPES = ["true_false", "mcq", "fill_in_the_blank"];

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!courseCode) return;

      try {
        const subCollectionRef = collection(
          db,
          "courses",
          courseCode,
          "questions",
        );
        const querySnapshot = await getDocs(subCollectionRef);

        // --- THE FIX IS HERE ---
        // We cast the data to 'unknown' first, then to 'Question[]'
        // This tells TypeScript: "I know the IDs are strings, just let it pass."
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as unknown as Question[];

        const filteredQuestions = data.filter((q) =>
          ALLOWED_TYPES.includes(q.type),
        );

        setQuestions(filteredQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [courseCode]);

  if (loading) {
    return <div className="p-10 text-center">Loading Questions...</div>;
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-500 mb-4">No supported flashcards found.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-orange-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return <FlashcardMode questions={questions} onExit={() => navigate(-1)} />;
};
