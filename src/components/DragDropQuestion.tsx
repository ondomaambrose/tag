import type { Question } from "../types";
import { useState } from "react";

export const DragDropQuestion: React.FC<{
  q: Question;
  userAnswer: any;
  onAnswer: (val: any) => void;
}> = ({ q, userAnswer, onAnswer }) => {
  const currentPlacement = userAnswer || {};
  // This useState is now safe
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const availableItems = (q.items || []).filter(
    (item) =>
      !Object.values(currentPlacement).includes(item) || item === selectedItem,
  );

  const handleTargetClick = (target: string) => {
    if (selectedItem) {
      onAnswer({ ...currentPlacement, [target]: selectedItem });
      setSelectedItem(null);
    } else if (currentPlacement[target]) {
      const newPlacement = { ...currentPlacement };
      delete newPlacement[target];
      onAnswer(newPlacement);
    }
  };

  return (
    <div className="space-y-6">
      {/* Item Bank */}
      <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded-lg min-h-20">
        {availableItems.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedItem(selectedItem === item ? null : item)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all ${
              selectedItem === item
                ? "bg-blue-600 text-white ring-2 ring-blue-300"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
        {availableItems.length === 0 && (
          <span className="text-gray-400 text-sm italic">All items placed</span>
        )}
      </div>

      {/* Targets */}
      <div className="grid gap-4 md:grid-cols-3">
        {q.targets?.map((target) => (
          <div
            key={target}
            onClick={() => handleTargetClick(target)}
            className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center min-h- cursor-pointer transition-colors ${
              currentPlacement[target]
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {target}
            </span>
            {currentPlacement[target] ? (
              <span className="px-3 py-1 bg-white border border-blue-200 text-blue-700 rounded-md shadow-sm font-medium">
                {currentPlacement[target]}
              </span>
            ) : (
              <span className="text-gray-400 text-sm">Tap to place item</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
