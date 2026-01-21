import { CheckCircle, RefreshCcw } from "lucide-react";
import type { Question } from "../types";

interface ExamResultsProps {
  score: number;
  total: number;
  title: string;
  selectedSegment: { start: number; end: number } | null;
  questions: Question[];
  retakeSegment: () => void;
  takeNextSegment: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  score,
  total,
  title,
  selectedSegment,
  questions,
  retakeSegment,
  takeNextSegment,
}) => {
  const percentage = Math.round((score / total) * 100);
  const hasNextSegment =
    selectedSegment && selectedSegment.end < questions.length - 1;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-10 border border-gray-100">
      <div
        className={`${percentage >= 50 ? "bg-green-600" : "bg-red-500"} p-10 text-center text-white`}
      >
        {percentage >= 50 ? (
          <CheckCircle className="w-20 h-20 mx-auto mb-4" />
        ) : (
          <RefreshCcw className="w-20 h-20 mx-auto mb-4" />
        )}
        <h2 className="text-4xl font-bold mb-2">
          {percentage >= 50 ? "Great Job!" : "Keep Practicing"}
        </h2>
        <p className="opacity-90 font-medium">You completed {title}</p>
      </div>

      <div className="p-8">
        <div className="flex justify-center items-end gap-2 mb-6">
          <span className="text-6xl font-bold text-gray-900">{score}</span>
          <span className="text-xl text-gray-400 font-medium mb-2">
            / {total}
          </span>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-4 mb-2 overflow-hidden">
          <div
            className={`${percentage >= 50 ? "bg-green-500" : "bg-red-500"} h-full rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-center text-gray-500 mb-8 font-medium">
          {percentage}% Score
        </p>

        <div className="space-y-3">
          <button
            onClick={retakeSegment}
            className="w-full flex justify-center items-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors font-semibold"
          >
            <RefreshCcw size={20} />
            Retake This Segment
          </button>

          {hasNextSegment && (
            <button
              onClick={takeNextSegment}
              className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all font-bold"
            >
              Start Next Segment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
