import { Flag } from "lucide-react";

interface ExamHeaderProps {
  title: string;
  currentIndex: number;
  totalQuestions: number;
  timeLeft: number | null;
  isFlagged: boolean;
  onFlag: () => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  title,
  currentIndex,
  totalQuestions,
  timeLeft,
  isFlagged,
  onFlag,
}) => {
  // Format seconds into MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Determine timer color
  const timerColor =
    timeLeft && timeLeft < 60 ? "text-red-600 animate-pulse" : "text-gray-700";

  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Question <span className="text-gray-900">{currentIndex + 1}</span> of{" "}
          {totalQuestions}
        </p>
      </div>
      <div className="flex gap-3 items-center w-full sm:w-auto">
        {timeLeft !== null && (
          <div
            className={`px-4 py-2 bg-gray-100 rounded-lg font-mono font-bold ${timerColor}`}
          >
            {formatTime(timeLeft)}
          </div>
        )}
        <button
          onClick={onFlag}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            isFlagged
              ? "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <Flag size={16} fill={isFlagged ? "currentColor" : "none"} />
          {isFlagged ? "Flagged" : "Flag"}
        </button>
      </div>
    </div>
  );
};
