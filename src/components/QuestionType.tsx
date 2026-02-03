import { ChevronRight } from "lucide-react";
import type { Question } from "../types";
import { useMemo } from "react";
import { shuffleArray } from "../utils/shuffle";

interface SubQuestionProps {
  q: Question; // Sub-components use 'q'
  userAnswers: Record<number, any>;
  handleAnswer: (val: any) => void;
}

export const MCQQuestion = ({
  q,
  userAnswers,
  handleAnswer,
}: SubQuestionProps) => {
  // 1. SHUFFLE OPTIONS HERE
  // We rely on q.id. If the question ID changes, we re-shuffle.
  const randomizedOptions = useMemo(() => {
    return shuffleArray(q.options);
  }, [q.id, q.options]);

  return (
    <div className="space-y-3">
      {/* 2. Map over randomizedOptions instead of q.options */}
      {randomizedOptions.map((opt) => (
        <button
          key={opt}
          onClick={() => handleAnswer(opt)}
          className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-200 group ${
            userAnswers[q.id] === opt
              ? "border-orange-600 bg-orange-50 text-orange-800 font-semibold shadow-inner"
              : "border-gray-100 hover:border-orange-300 hover:bg-white bg-gray-50 text-gray-700"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                userAnswers[q.id] === opt
                  ? "border-orange-600"
                  : "border-gray-400 group-hover:border-orange-400"
              }`}
            >
              {userAnswers[q.id] === opt && (
                <div className="w-2.5 h-2.5 bg-orange-600 rounded-full" />
              )}
            </div>
            <span className="text-lg">{opt}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export const TrueFalseQuestion = ({
  q,
  userAnswers,
  handleAnswer,
}: SubQuestionProps) => (
  <div className="flex flex-col sm:flex-row gap-4">
    {[true, false].map((val) => (
      <button
        key={String(val)}
        onClick={() => handleAnswer(val)}
        className={`flex-1 p-6 rounded-xl border-2 text-lg font-semibold transition-all ${
          userAnswers[q.id] === val
            ? "border-orange-600 bg-orange-50 text-orange-800"
            : "border-gray-100 bg-gray-50 hover:border-orange-300 hover:bg-white text-gray-600"
        }`}
      >
        {val ? "True" : "False"}
      </button>
    ))}
  </div>
);

export const FillInQuestion = ({
  q,
  userAnswers,
  handleAnswer,
}: SubQuestionProps) => (
  <div className="mt-2">
    <input
      type="text"
      placeholder="Type your answer here..."
      value={userAnswers[q.id] || ""}
      onChange={(e) => handleAnswer(e.target.value)}
      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all text-lg"
    />
  </div>
);

export const MixedQuestion = ({
  q,
  userAnswers,
  handleAnswer,
}: SubQuestionProps) => {
  const currentAnswers = userAnswers[q.id] || {};
  const handleFieldChange = (index: number, val: string) => {
    handleAnswer({ ...currentAnswers, [index]: val });
  };

  return (
    <div className="space-y-6">
      {q.fields?.map((field, idx) => (
        <div
          key={idx}
          className="p-5 bg-gray-50 rounded-xl border border-gray-200"
        >
          {field.prompt && (
            <label className="block text-sm font-bold text-gray-700 mb-3">
              {field.prompt}
            </label>
          )}

          {field.placeholder && !field.prompt && (
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {field.placeholder}
            </label>
          )}

          {field.fieldType === "fill_in" ? (
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              value={currentAnswers[idx] || ""}
              onChange={(e) => handleFieldChange(idx, e.target.value)}
            />
          ) : (
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-2 focus:ring-orange-500 outline-none"
                value={currentAnswers[idx] || ""}
                onChange={(e) => handleFieldChange(idx, e.target.value)}
              >
                <option value="">Select option...</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <ChevronRight className="rotate-90" size={16} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
