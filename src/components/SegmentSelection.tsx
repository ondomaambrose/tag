import type { Question } from "../types";

interface SegmentSelectionProps {
  questions: Question[];
  timer: number | null;
  setTimer: (t: number | null) => void;
  selectedSegment: { start: number; end: number } | null;
  setSelectedSegment: (seg: { start: number; end: number }) => void;
  startExam: () => void;
}

export const SegmentSelection: React.FC<SegmentSelectionProps> = ({
  questions,
  timer,
  setTimer,
  selectedSegment,
  setSelectedSegment,
  startExam,
}) => {
  const segmentSize = 50;
  const totalQuestions = questions.length;
  const segments = [];
  for (let i = 0; i < totalQuestions; i += segmentSize) {
    segments.push({
      start: i,
      end: Math.min(i + segmentSize - 1, totalQuestions - 1),
    });
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to the Exam
        </h1>
        <p className="text-gray-500">Customize your session below</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block mb-3 font-semibold text-gray-700">
            1. Select Question Block
          </label>
          <div className="grid grid-cols-2 gap-3">
            {segments.map((seg, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSegment(seg)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all border ${
                  selectedSegment?.start === seg.start
                    ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                Questions {seg.start + 1} - {seg.end + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setSelectedSegment({ start: 0, end: totalQuestions - 1 })
              }
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all border col-span-2 ${
                selectedSegment?.end === totalQuestions - 1 &&
                selectedSegment.start === 0
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "bg-white text-green-700 border-green-200 hover:bg-green-50"
              }`}
            >
              Take Full Exam ({totalQuestions} Questions)
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-3 font-semibold text-gray-700">
            2. Set Timer (Minutes)
          </label>
          <input
            type="number"
            min={1}
            placeholder="Unlimited time"
            value={timer || ""}
            onChange={(e) =>
              setTimer(e.target.value ? Number(e.target.value) : null)
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <p className="text-xs text-gray-400 mt-1">
            Leave empty for no time limit
          </p>
        </div>

        <button
          onClick={startExam}
          className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-transform active:scale-[0.98] shadow-lg"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};
