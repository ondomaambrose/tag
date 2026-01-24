import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  X,
  Check,
  X as XIcon,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Question } from "../types";

interface FlashcardModeProps {
  questions: Question[];
  onExit: () => void;
  courseCode: string;
  isLoading?: boolean;
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  questions,
  onExit,
  courseCode,
  isLoading = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem(`flashcard_idx_${courseCode}`);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      `flashcard_idx_${courseCode}`,
      currentIndex.toString(),
    );
  }, [currentIndex, courseCode]);

  useEffect(() => {
    setIsFlipped(false);
  }, [currentIndex]);

  // LOADING STATE
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="text-orange-600 mb-4"
        >
          <Loader2 size={48} className="text-orange-600" />
        </motion.div>
        <p className="text-gray-500 font-medium animate-pulse">
          Loading Flashcards...
        </p>
        <button
          onClick={onExit}
          className="mt-8 text-gray-400 hover:text-gray-600 text-sm underline"
        >
          Cancel
        </button>
      </div>
    );
  }

  // --- 2. EMPTY STATE (No Questions) ---
  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="text-gray-500 font-medium mb-4">
          No flashcards found for this course.
        </div>
        <button
          onClick={onExit}
          className="px-6 py-2 bg-white border border-orange-300 rounded-full text-orange-700 shadow-sm hover:bg-gray-50"
        >
          Go Back
        </button>
      </div>
    );
  }

  // MAIN CONTENT
  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const renderAnswerContent = (q: any) => {
    const type = q.type?.toLowerCase() || "unknown";

    switch (type) {
      case "true_false":
        const isTrue = String(q.answer).toLowerCase() === "true";
        return (
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-2xl font-bold shadow-sm ${
                isTrue
                  ? "bg-green-100 text-green-700 border-2 border-green-200"
                  : "bg-red-100 text-red-700 border-2 border-red-200"
              }`}
            >
              {isTrue ? <Check size={32} /> : <XIcon size={32} />}
              {isTrue ? "TRUE" : "FALSE"}
            </div>
            {q.explanation && (
              <p className="text-gray-500 text-center text-sm mt-4 max-w-xs">
                {q.explanation}
              </p>
            )}
          </div>
        );

      case "mcq":
        const optIndex = q.answer ? String(q.answer).charCodeAt(0) - 65 : -1;
        const optText =
          q.options && optIndex >= 0 && q.options[optIndex]
            ? q.options[optIndex]
            : null;

        return (
          <div className="text-center">
            <div className="text-6xl font-black text-orange-600 mb-4 drop-shadow-sm">
              {String(q.answer)}
            </div>
            {optText && (
              <div className="text-xl text-gray-700 font-medium px-6 py-3 bg-orange-50 rounded-xl border border-orange-100">
                {optText}
              </div>
            )}
          </div>
        );

      case "fill_in_the_blank":
      default:
        return (
          <div className="text-center w-full px-4">
            <p className="text-sm font-bold text-gray-400 uppercase mb-3 tracking-widest">
              Correct Answer
            </p>
            <div className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
              {Array.isArray(q.answer) ? q.answer.join(", ") : String(q.answer)}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExit}
          className="flex items-center gap-2 text-gray-600 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:text-gray-900 transition-colors"
        >
          <X size={18} />
          <span className="font-medium">Exit</span>
        </motion.button>
        <div className="text-gray-500 font-mono text-sm bg-white/80 px-3 py-1 rounded-full shadow-sm">
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      {/* --- 3D CARD CONTAINER --- */}
      <div className="relative w-full max-w-2xl aspect-4/3 md:aspect-video perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="relative w-full h-full transform-style-3d shadow-xl rounded-3xl"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {/*  FRONT (Question) */}
              <div
                className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center border-2 border-orange-100"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-xl md:text-3xl font-medium text-center text-gray-800 leading-relaxed">
                  {currentQuestion.question}
                </h3>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute bottom-6 text-gray-400 text-sm flex items-center gap-2"
                >
                  <RotateCw size={14} /> Tap to flip
                </motion.p>
              </div>

              {/* BACK (Answer)  */}
              <div
                className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center border-2 border-orange-100 ring-4 ring-orange-50/30"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="absolute top-6 left-6 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 px-3 py-1 rounded-full">
                  Answer
                </div>
                <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center pt-6">
                  {renderAnswerContent(currentQuestion)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/*  CONTROLS  */}
      <div className="mt-8 flex items-center gap-6 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-4 rounded-full bg-white text-gray-700 shadow-md disabled:opacity-50 disabled:shadow-none"
        >
          <ArrowLeft size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-8 py-3 rounded-xl bg-orange-600 text-white font-bold shadow-lg flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <RotateCw size={18} />
          </motion.div>
          {isFlipped ? "Show Question" : "Show Answer"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="p-4 rounded-full bg-white text-gray-700 shadow-md disabled:opacity-50 disabled:shadow-none"
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
};
