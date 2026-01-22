import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import type { Question } from "../types";

interface ExamFooterProps {
  currentIndex: number;
  filteredQuestions: Question[];
  // inside ExamFooterProps
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  isLastQuestion: boolean;
  handleSubmitEarly: () => void;
}

export const ExamFooter: React.FC<ExamFooterProps> = ({
  currentIndex,
  filteredQuestions,
  setCurrentIndex,
  isLastQuestion,
  handleSubmitEarly,
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4 flex justify-between items-center sticky bottom-4 z-10">
    <button
      onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
      disabled={currentIndex === 0}
      className="flex items-center gap-2 px-5 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all font-medium"
    >
      <ChevronLeft size={20} /> Previous
    </button>

    <div className="flex items-center gap-3">
      {!isLastQuestion && (
        <button
          onClick={handleSubmitEarly}
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors border border-transparent hover:border-red-100"
        >
          Submit
        </button>
      )}

      {isLastQuestion ? (
        <button
          onClick={handleSubmitEarly} // Reusing the submit logic for the finish button
          className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 shadow-lg shadow-green-200 transition-all font-bold hover:translate-y-px"
        >
          Finish Exam
          <CheckCircle size={20} />
        </button>
      ) : (
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              Math.min(filteredQuestions.length - 1, prev + 1),
            )
          }
          className="flex items-center gap-2 px-8 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 shadow-lg shadow-orange-200 transition-all font-bold hover:translate-y-px"
        >
          Next
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  </div>
);
