import React from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  AlertCircle,
  Type,
  ListChecks,
} from "lucide-react";
import type { Question } from "../types";

interface ExamReviewProps {
  questions: Question[];
  userAnswers: Record<number, any>;
  onExit: () => void;
}

export const ExamReview: React.FC<ExamReviewProps> = ({
  questions,
  userAnswers,
  onExit,
}) => {
  // --- HELPER: Handles Booleans, Strings, and spacing issues ---
  const normalize = (val: any) =>
    String(val ?? "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sticky top-0 bg-black py-4 z-10 border-b border-orange-200 gap-4 p-5">
        <div>
          <h2 className="text-2xl font-bold text-orange-600">Exam Review</h2>
          <p className="text-sm text-gray-500">
            Review your answers and correct solutions
          </p>
        </div>
        <button
          onClick={onExit}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </button>
      </div>

      <div className="space-y-8">
        {questions.map((q, index) => {
          const userAnswerRaw = userAnswers[q.id];
          // Determine if skipped (careful with complex types)
          let isSkipped =
            userAnswerRaw === undefined ||
            userAnswerRaw === null ||
            userAnswerRaw === "";

          if (
            (q.type === "matching" ||
              q.type === "drag_drop" ||
              q.type === "mixed") &&
            (!userAnswerRaw ||
              (typeof userAnswerRaw === "object" &&
                Object.keys(userAnswerRaw).length === 0))
          ) {
            isSkipped = true;
          }

          let isCorrect = false;

          // --- 1. DETERMINE OVERALL CORRECTNESS ---
          if (q.type === "matching") {
            if (userAnswerRaw && q.pairs) {
              isCorrect = q.pairs.every(
                (p) => userAnswerRaw[p.hook] === p.purpose,
              );
            }
          } else if (q.type === "drag_drop") {
            if (userAnswerRaw && q.answers && q.targets) {
              isCorrect = q.answers.every(
                (ans, idx) => userAnswerRaw[q.targets![idx]] === ans,
              );
            }
          } else if (q.type === "mixed") {
            if (userAnswerRaw && q.fields) {
              // Check if EVERY field in the mixed question is correct
              isCorrect = q.fields.every(
                (field, idx) =>
                  normalize(userAnswerRaw[idx]) === normalize(field.answer),
              );
            }
          } else {
            // Standard (MCQ, true_false, Fill)
            const correctVal = String(q.answer);
            isCorrect = normalize(userAnswerRaw) === normalize(correctVal);
          }

          if (isSkipped) isCorrect = false;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-xl shadow-sm border p-6 transition-all ${
                isCorrect ? "border-green-200" : "border-red-200"
              }`}
            >
              {/* Question Header */}
              <div className="flex gap-4 mb-6">
                <span
                  className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                    isCorrect
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {index + 1}
                </span>
                <div className="grow">
                  <h3 className="text-lg font-medium text-gray-900 leading-snug">
                    {q.question}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md border border-green-100">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : isSkipped ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                        <AlertCircle className="w-3.5 h-3.5" /> Skipped
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* --- BODY RENDERER --- */}

              {/* 1. MIXED QUESTIONS (The New Fix) */}
              {q.type === "mixed" && (
                <div className="ml-0 sm:ml-12 space-y-6">
                  {q.fields?.map((field, fIdx) => {
                    const userVal = userAnswerRaw?.[fIdx];
                    const correctVal = field.answer;
                    const isFieldCorrect =
                      normalize(userVal) === normalize(correctVal);

                    return (
                      <div
                        key={fIdx}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <ListChecks size={16} className="text-gray-400" />
                          <span className="text-sm font-bold text-gray-700">
                            {field.fieldType || `Part ${fIdx + 1}`}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* User Input */}
                          <div
                            className={`p-2 rounded border text-sm ${isFieldCorrect ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}
                          >
                            <span className="text-xs uppercase font-bold opacity-60 block mb-1">
                              Your Answer
                            </span>
                            {userVal || (
                              <span className="italic opacity-50">(Empty)</span>
                            )}
                          </div>

                          {/* Correct Input (Only show if wrong) */}
                          {!isFieldCorrect && (
                            <div className="p-2 rounded border bg-blue-50 border-blue-200 text-blue-900 text-sm">
                              <span className="text-xs uppercase font-bold text-blue-600 block mb-1">
                                Correct Answer
                              </span>
                              {correctVal}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 2. MATCHING */}
              {q.type === "matching" && (
                <div className="ml-0 sm:ml-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {!isCorrect && (
                    <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                      <p className="text-xs font-bold text-red-600 uppercase mb-3">
                        Your Matches
                      </p>
                      <div className="space-y-2">
                        {q.pairs?.map((pair, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between text-sm bg-white p-2 rounded border border-red-100"
                          >
                            <span className="font-medium">{pair.hook}</span>
                            <span className="text-red-600 line-through">
                              {userAnswerRaw?.[pair.hook] || "?"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-3">
                      Correct Matches
                    </p>
                    <div className="space-y-2">
                      {q.pairs?.map((pair, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between text-sm bg-white p-2 rounded border border-blue-100"
                        >
                          <span className="font-medium">{pair.hook}</span>
                          <span className="text-blue-600 font-bold">
                            {pair.purpose}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. DRAG & DROP */}
              {q.type === "drag_drop" && (
                <div className="ml-0 sm:ml-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {!isCorrect && (
                    <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                      <p className="text-xs font-bold text-red-600 uppercase mb-3">
                        Your Order
                      </p>
                      {q.targets?.map((t, i) => (
                        <div key={i} className="flex gap-2 text-sm mb-1">
                          <span className="font-mono text-gray-400">
                            {i + 1}.
                          </span>
                          <span className="text-red-600">
                            {userAnswerRaw?.[t] || "(Empty)"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-3">
                      Correct Order
                    </p>
                    {q.answers?.map((a, i) => (
                      <div key={i} className="flex gap-2 text-sm mb-1">
                        <span className="font-mono text-gray-400">
                          {i + 1}.
                        </span>
                        <span className="font-bold text-gray-800">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. FILL IN BLANK */}
              {q.type === "fill_in" && (
                <div className="ml-0 sm:ml-12 space-y-4">
                  <div
                    className={`p-4 rounded-lg border ${isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
                      You Wrote:
                    </p>
                    <div className="flex items-center gap-2 font-mono text-lg text-gray-800">
                      <Type size={18} className="opacity-50" />
                      {isSkipped ? (
                        <span className="text-gray-400 italic">(Nothing)</span>
                      ) : (
                        userAnswerRaw
                      )}
                    </div>
                  </div>
                  {!isCorrect && (
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
                        Correct Answer
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {String(q.answer)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 5. MCQ & TRUE_FALSE */}
              {(q.type === "mcq" || q.type === "true_false") && (
                <div className="space-y-3 ml-0 sm:ml-12">
                  {(() => {
                    let displayOptions = q.options || [];
                    const isTF = q.type === "true_false";

                    if (displayOptions.length === 0 && isTF) {
                      displayOptions = ["True", "False"];
                    }

                    return displayOptions.map((option, optIndex) => {
                      let optionLabel = "";
                      let optionValue = "";

                      if (isTF) {
                        optionValue = option;
                      } else {
                        optionLabel = String.fromCharCode(65 + optIndex);
                        optionValue = optionLabel;
                      }

                      // DOUBLE CHECK (Label vs Text)
                      const userString = normalize(userAnswerRaw);
                      const valString = normalize(optionValue);
                      const textString = normalize(option);

                      const isSelected =
                        userString === valString || userString === textString;

                      const correctString = normalize(String(q.answer));
                      const isTheCorrectAnswer =
                        correctString === valString ||
                        correctString === textString;

                      let styleClass =
                        "border-gray-200 hover:bg-gray-50 text-gray-600";
                      let icon = null;

                      if (isTheCorrectAnswer) {
                        styleClass =
                          "bg-green-50 border-green-500 text-green-900 ring-1 ring-green-500 font-medium";
                        icon = (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        );
                      } else if (isSelected) {
                        styleClass =
                          "bg-red-50 border-red-300 text-red-900 font-medium";
                        icon = <XCircle className="w-5 h-5 text-red-600" />;
                      }

                      return (
                        <div
                          key={optIndex}
                          className={`flex items-start justify-between p-3.5 rounded-lg border text-sm transition-all ${styleClass}`}
                        >
                          <div className="flex items-start gap-3">
                            {optionLabel && (
                              <span className="font-bold opacity-80 mt-0.5">
                                {optionLabel}.
                              </span>
                            )}
                            <span className="leading-relaxed">{option}</span>
                          </div>
                          <div className="ml-3 shrink-0">{icon}</div>
                        </div>
                      );
                    });
                  })()}

                  {/* Explicit Correct Box */}
                  {!isCorrect && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {!isSkipped && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                          <p className="text-xs font-bold text-red-600 uppercase mb-1">
                            You Selected
                          </p>
                          <p className="font-medium text-gray-800">
                            {String(userAnswerRaw)}
                          </p>
                        </div>
                      )}
                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 col-span-2 md:col-span-1 md:col-start-2">
                        <div className="bg-blue-100 p-2 rounded-full h-fit">
                          <CheckCircle2 className="w-4 h-4 text-blue-700" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-blue-600 uppercase mb-1">
                            Correct Answer
                          </p>
                          <p className="font-medium text-gray-800">
                            {q.type === "true_false"
                              ? String(q.answer)
                              : (() => {
                                  const idx =
                                    String(q.answer).charCodeAt(0) - 65;
                                  const text = (q.options || [])[idx];
                                  return text
                                    ? `${q.answer} - ${text}`
                                    : String(q.answer);
                                })()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
