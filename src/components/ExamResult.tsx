// src/components/ExamResult.tsx
import React from "react";
import { RotateCcw, ArrowRight, BookOpen } from "lucide-react";
import type { Question } from "../types";
import { Link } from "react-router-dom";

interface ExamResultsProps {
  score: number;
  total: number;
  title: string;
  selectedSegment: { start: number; end: number } | null;
  questions: Question[];
  retakeSegment: () => void;
  takeNextSegment: () => void;
  onReview: () => void; // <--- ADDED PROP
  onCustomize: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  score,
  total,
  title,
  retakeSegment,
  takeNextSegment,
  onReview,
  onCustomize,
}) => {
  const percentage = Math.round((score / total) * 100);
  let gradeColor = "text-red-600";
  let gradeText = "Keep Reading🌚";

  if (percentage >= 80) {
    gradeColor = "text-green-600";
    gradeText = "Excellent!";
  } else if (percentage >= 60) {
    gradeColor = "text-blue-600";
    gradeText = "Good Job";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 mb-8">Assessment Complete</p>

        <div className="relative inline-flex items-center justify-center mb-8">
          <svg className="w-40 h-40 transform -rotate-90">
            <circle
              className="text-gray-100"
              strokeWidth="12"
              stroke="currentColor"
              fill="transparent"
              r="70"
              cx="80"
              cy="80"
            />
            <circle
              className={gradeColor}
              strokeWidth="12"
              strokeDasharray={440}
              strokeDashoffset={440 - (440 * percentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="70"
              cx="80"
              cy="80"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className={`text-4xl font-black ${gradeColor}`}>
              {percentage}%
            </span>
            <span className="text-sm text-gray-400 font-medium">
              {score} / {total}
            </span>
          </div>
        </div>

        <h3 className={`text-2xl font-bold ${gradeColor} mb-8`}>{gradeText}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={onReview}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 col-span-1 sm:col-span-2"
          >
            <BookOpen size={20} />
            Review Answers
          </button>

          <button
            onClick={retakeSegment}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            <RotateCcw size={20} />
            Retake
          </button>

          <button
            onClick={onCustomize}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-100 text-orange-700 border-2 border-orange-200 rounded-xl font-semibold hover:bg-orange-200 transition-all"
          >
            Exam Customization Page
          </button>

          <button
            onClick={takeNextSegment}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg col-span-2"
          >
            Next Section
            <ArrowRight size={20} />
          </button>

          <div className="flex items-center justify-center col-span-1 sm:col-span-2">
            <Link to="/">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 col-span-1 sm:col-span-2">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
