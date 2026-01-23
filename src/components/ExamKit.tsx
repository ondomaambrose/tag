import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Question } from "../types";
import { ExamFooter } from "./ExamFooter";
import { QuestionCard } from "./QuestionCard";
import { SegmentSelection } from "./SegmentSelection";
import { ExamResults } from "./ExamResult";
import { FlagSidebar } from "./FlagSidebar";
import { ExamHeader } from "./ExamHeader";
import { ProgressBar } from "./ProgressBar";
import { ExamReview } from "./ExamReview";

interface ExamKitProps {
  questions: Question[];
  title?: string;
  courseCode: string; // <--- ADDED: Required for unique storage key
}

export const ExamKit: React.FC<ExamKitProps> = ({
  questions,
  title = "Leadership Exam",
  courseCode,
}) => {
  // 1. DEFINE STORAGE KEY
  const STORAGE_KEY = `exam_progress_${courseCode}`;

  // 2. HELPER: Load from Storage safely
  const loadState = (key: string, defaultVal: any) => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return defaultVal;
      const parsed = JSON.parse(saved);
      return parsed[key] !== undefined ? parsed[key] : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  };

  // 3. STATE (Initialized from Storage)
  const [examStarted, setExamStarted] = useState<boolean>(() =>
    loadState("examStarted", false),
  );

  const [selectedSegment, setSelectedSegment] = useState<{
    start: number;
    end: number;
  } | null>(() => loadState("selectedSegment", null));

  // Timer State
  const [timer, setTimer] = useState<number | null>(() =>
    loadState("timer", null),
  );
  const [timeLeft, setTimeLeft] = useState<number | null>(() =>
    loadState("timeLeft", null),
  );

  // Exam State
  const [currentIndex, setCurrentIndex] = useState(() =>
    loadState("currentIndex", 0),
  );

  // NOTE: userAnswers and flaggedQuestions use string keys (IDs) now based on previous fixes
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>(() =>
    loadState("userAnswers", {}),
  );

  const [flaggedQuestions, setFlaggedQuestions] = useState<
    Record<string, boolean>
  >(() => loadState("flaggedQuestions", {}));

  const [showResults, setShowResults] = useState(false);

  // Mobile Sidebar State
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Review State
  const [isReviewing, setIsReviewing] = useState(false);

  // Derived State
  const filteredQuestions = selectedSegment
    ? questions.slice(selectedSegment.start, selectedSegment.end + 1)
    : questions;

  const currentQuestion = filteredQuestions[currentIndex];

  // 4. EFFECT: Save Progress on Change
  useEffect(() => {
    // Only save if the exam has actually started
    if (examStarted) {
      const stateToSave = {
        examStarted,
        selectedSegment,
        timer,
        timeLeft,
        currentIndex,
        userAnswers,
        flaggedQuestions,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  }, [
    examStarted,
    selectedSegment,
    timer,
    timeLeft,
    currentIndex,
    userAnswers,
    flaggedQuestions,
    STORAGE_KEY,
  ]);

  // --- Timer Logic ---
  useEffect(() => {
    if (!examStarted || timeLeft === null) return;
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === null) return null;
        if (prevTime <= 1) {
          clearInterval(interval);
          setShowResults(true);
          // Optional: Clear storage here if you want auto-wipe on time up
          // localStorage.removeItem(STORAGE_KEY);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, timeLeft]);

  // --- Handlers ---
  const handleAnswer = (val: any) =>
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));

  const handleFlag = () =>
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));

  const handleSubmitEarly = () => {
    const unansweredCount = filteredQuestions.reduce((count, q) => {
      const ans = userAnswers[q.id];
      let isAnswered = false;
      if (ans === undefined || ans === null || ans === "") {
        isAnswered = false;
      } else if (typeof ans === "object") {
        isAnswered = Object.keys(ans).length > 0;
      } else {
        isAnswered = true;
      }
      return isAnswered ? count : count + 1;
    }, 0);

    let message = "Are you sure you want to submit your exam?";
    if (unansweredCount > 0) {
      message = `You have ${unansweredCount} unanswered question${unansweredCount === 1 ? "" : "s"}. Are you sure you want to finish early?`;
    }

    if (window.confirm(message)) {
      setShowResults(true);
      localStorage.removeItem(STORAGE_KEY); // Clear storage on manual submit
    }
  };

  const calculateScore = () => {
    let score = 0;
    const normalize = (val: any) =>
      String(val || "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

    filteredQuestions.forEach((q) => {
      const uAns = userAnswers[q.id];
      if (uAns === undefined || uAns === null || uAns === "") return;

      if (q.type === "mcq" || q.type === "true_false") {
        if (normalize(uAns) === normalize(q.answer)) score++;
      } else if (q.type === "fill_in") {
        if (normalize(uAns) === normalize(q.answer)) score++;
      } else if (q.type === "matching") {
        if (q.pairs?.every((p) => uAns[p.hook] === p.purpose)) score++;
      } else if (q.type === "drag_drop") {
        if (q.answers?.every((ans, idx) => uAns[q.targets![idx]] === ans))
          score++;
      } else if (q.type === "mixed") {
        if (
          q.fields?.every(
            (field, idx) => normalize(uAns[idx]) === normalize(field.answer),
          )
        )
          score++;
      }
    });
    return score;
  };

  // --- RENDER SECTIONS ---

  if (!examStarted) {
    return (
      <SegmentSelection
        questions={questions}
        timer={timer}
        setTimer={setTimer}
        selectedSegment={selectedSegment}
        setSelectedSegment={setSelectedSegment}
        startExam={() => {
          const segment = selectedSegment || {
            start: 0,
            end: questions.length - 1,
          };
          if (!selectedSegment) setSelectedSegment(segment);
          setExamStarted(true);
          // Only set timeLeft if it wasn't loaded from storage
          if (timer && timeLeft === null) setTimeLeft(timer * 60);
        }}
      />
    );
  }

  if (isReviewing) {
    return (
      <ExamReview
        questions={filteredQuestions}
        userAnswers={userAnswers}
        onExit={() => setIsReviewing(false)}
      />
    );
  }

  if (showResults) {
    return (
      <ExamResults
        score={calculateScore()}
        total={filteredQuestions.length}
        title={title}
        selectedSegment={selectedSegment}
        questions={questions}
        onReview={() => setIsReviewing(true)}
        retakeSegment={() => {
          // Clear Storage
          localStorage.removeItem(STORAGE_KEY);

          setShowResults(false);
          setCurrentIndex(0);
          setUserAnswers({});
          setFlaggedQuestions({});
          if (timer) setTimeLeft(timer * 60);
        }}
        takeNextSegment={() => {
          if (!selectedSegment) return;
          const newStart = selectedSegment.end + 1;
          if (newStart >= questions.length) {
            alert("You have completed all questions!");
            return;
          }

          // Clear Storage before starting new segment
          localStorage.removeItem(STORAGE_KEY);

          const newSeg = {
            start: newStart,
            end: Math.min(newStart + 49, questions.length - 1),
          };
          setSelectedSegment(newSeg);
          setCurrentIndex(0);
          setUserAnswers({});
          setFlaggedQuestions({});
          setShowResults(false);
          if (timer) setTimeLeft(timer * 60);
        }}
      />
    );
  }

  // --- MAIN RENDER ---
  return (
    <div className="max-w-5xl mx-auto mt-4 md:mt-10 p-4 font-sans flex flex-col md:flex-row gap-6 relative">
      {/* 1. DESKTOP SIDEBAR (Hidden on mobile) */}
      <div className="hidden md:block">
        <FlagSidebar
          flaggedQuestions={flaggedQuestions}
          filteredQuestions={filteredQuestions}
          currentIndex={currentIndex}
          userAnswers={userAnswers}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      {/* 2. MOBILE SIDEBAR DRAWER (Visible when toggled) */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />

          {/* Slide-out Panel */}
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl p-4 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800 text-lg">Question Map</h3>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <FlagSidebar
              flaggedQuestions={flaggedQuestions}
              filteredQuestions={filteredQuestions}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              setCurrentIndex={(idx) => {
                setCurrentIndex(idx);
                setIsMobileSidebarOpen(false); // Close drawer on selection
              }}
            />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <ExamHeader
          title={title}
          currentIndex={currentIndex}
          totalQuestions={filteredQuestions.length}
          timeLeft={timeLeft}
          isFlagged={!!flaggedQuestions[currentQuestion.id]}
          onFlag={handleFlag}
        />

        <ProgressBar
          currentIndex={currentIndex}
          totalQuestions={filteredQuestions.length}
        />

        <QuestionCard
          question={currentQuestion}
          userAnswers={userAnswers}
          handleAnswer={handleAnswer}
        />

        <ExamFooter
          currentIndex={currentIndex}
          filteredQuestions={filteredQuestions}
          setCurrentIndex={setCurrentIndex}
          isLastQuestion={currentIndex === filteredQuestions.length - 1}
          handleSubmitEarly={handleSubmitEarly}
        />
      </div>

      {/* 3. MOBILE TOGGLE BUTTON (Floating Action Button) */}
      <button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 hover:scale-105 transition-all flex items-center justify-center"
        aria-label="Open Question Map"
      >
        <Menu size={24} />
      </button>
    </div>
  );
};
