import type { Question } from "../types";

interface FlagSidebarProps {
  flaggedQuestions: Record<number, boolean>;
  filteredQuestions: Question[];
  currentIndex: number;
  userAnswers: Record<number, any>;
  setCurrentIndex: (index: number) => void;
}

export const FlagSidebar: React.FC<FlagSidebarProps> = ({
  flaggedQuestions,
  filteredQuestions,
  currentIndex,
  userAnswers,
  setCurrentIndex,
}) => (
  <div className="w-64 bg-white border border-gray-200 p-4 rounded-xl shadow-sm h-fit sticky top-4 max-h-[80vh] overflow-y-auto">
    <h3 className="font-bold text-gray-800 mb-4 px-1">Question Map</h3>
    <div className="grid grid-cols-4 gap-2">
      {filteredQuestions.map((q, idx) => {
        const isFlagged = flaggedQuestions[q.id];
        const isAnswered = userAnswers[q.id] !== undefined;
        const isCurrent = idx === currentIndex;

        let bgClass = "bg-gray-100 text-gray-600 hover:bg-gray-200";
        if (isCurrent) bgClass = "bg-blue-600 text-white ring-2 ring-blue-300";
        else if (isFlagged) bgClass = "bg-yellow-400 text-yellow-900";
        else if (isAnswered)
          bgClass = "bg-green-100 text-green-700 border border-green-200";

        return (
          <button
            key={q.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-10 w-10 text-xs font-bold rounded-lg transition-all ${bgClass}`}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>

    <div className="mt-6 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-500 font-medium">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-600 rounded"></div> Current
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>{" "}
        Answered
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-yellow-400 rounded"></div> Flagged
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-gray-100 rounded"></div> Unanswered
      </div>
    </div>
  </div>
);
