import {
  MCQQuestion,
  TrueFalseQuestion,
  FillInQuestion,
  MixedQuestion,
} from "./QuestionType";
import { DragDropQuestion } from "./DragDropQuestion";
import { MatchingQuestion } from "./MatchingQuestion";
import type { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  userAnswers: Record<number, any>;
  handleAnswer: (val: any) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswers,
  handleAnswer,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
      <div className="p-6 md:p-10">
        {/* --- FIX 1: RENDER THE QUESTION TEXT HERE --- */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            {question.type.replace("_", " ")}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Render Input Options */}
        {question.type === "mcq" && (
          <MCQQuestion
            q={question}
            userAnswers={userAnswers}
            handleAnswer={handleAnswer}
          />
        )}
        {question.type === "true_false" && (
          <TrueFalseQuestion
            q={question}
            userAnswers={userAnswers}
            handleAnswer={handleAnswer}
          />
        )}
        {question.type === "fill_in" && (
          <FillInQuestion
            q={question}
            userAnswers={userAnswers}
            handleAnswer={handleAnswer}
          />
        )}
        {question.type === "mixed" && (
          <MixedQuestion
            q={question}
            userAnswers={userAnswers}
            handleAnswer={handleAnswer}
          />
        )}
        {question.type === "matching" && (
          <MatchingQuestion
            q={question}
            userAnswer={userAnswers[question.id]}
            onAnswer={handleAnswer}
          />
        )}
        {question.type === "drag_drop" && (
          <DragDropQuestion
            q={question}
            userAnswer={userAnswers[question.id]}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
};
