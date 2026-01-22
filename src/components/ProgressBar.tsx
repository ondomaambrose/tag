interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalQuestions,
}) => (
  <div className="w-full bg-gray-100 h-2 rounded-full mb-8 overflow-hidden">
    <div
      className="bg-orange-600 h-full rounded-full transition-all duration-500 ease-out"
      style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
    />
  </div>
);
