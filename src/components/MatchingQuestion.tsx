import type { Question } from "../types";
import { useMemo } from "react";

export const MatchingQuestion: React.FC<{
  q: Question;
  userAnswer: any;
  onAnswer: (val: any) => void;
}> = ({ q, userAnswer, onAnswer }) => {
  const currentMatches = userAnswer || {};

  // This useMemo is now safe because it belongs to this Component instance
  const shuffledOptions = useMemo(() => {
    return [...(q.pairs || [])]
      .map((p) => p.purpose)
      .sort(() => Math.random() - 0.5);
  }, [q.id, q.pairs]);

  return (
    <div className="space-y-4">
      {q.pairs?.map((pair) => (
        <div
          key={pair.hook}
          className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex-1 font-medium text-gray-700">{pair.hook}</div>
          <div className="text-gray-400 hidden sm:block">→</div>
          <select
            className="flex-1 p-2 border border-gray-300 rounded-md bg-white"
            value={currentMatches[pair.hook] || ""}
            onChange={(e) =>
              onAnswer({ ...currentMatches, [pair.hook]: e.target.value })
            }
          >
            <option value="">Select match...</option>
            {shuffledOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
