// src/components/ExamKit.tsx
import React, { useState, useEffect } from "react";
import type { Question } from "../types";
import { ExamFooter } from "./ExamFooter";
import { QuestionCard } from "./QuestionCard";
import { SegmentSelection } from "./SegmentSelection";
import { ExamResults } from "./ExamResult";
import { FlagSidebar } from "./FlagSidebar";
import { ExamHeader } from "./ExamHeader";
import { ProgressBar } from "./ProgressBar";

interface ExamKitProps {
  questions: Question[];
  title?: string;
}

export const ExamKit: React.FC<ExamKitProps> = ({
  questions,
  title = "Leadership Exam",
}) => {
  const [examStarted, setExamStarted] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<{
    start: number;
    end: number;
  } | null>(null);

  // Timer State
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Exam State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<
    Record<number, boolean>
  >({});
  const [showResults, setShowResults] = useState(false);

  // --- Filter questions based on segment
  const filteredQuestions = selectedSegment
    ? questions.slice(selectedSegment.start, selectedSegment.end + 1)
    : questions;

  const currentQuestion = filteredQuestions[currentIndex];

  // --- Fixed Timer Logic ---
  useEffect(() => {
    // Only run if exam has started and there is a time limit
    if (!examStarted || timeLeft === null) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        // 1. Guard clause: Handle the null case explicitly
        if (prevTime === null) return null;

        // 2. Handle expiration
        if (prevTime <= 1) {
          clearInterval(interval);
          setShowResults(true); // Auto-submit when time is up
          return 0;
        }

        // 3. Decrement
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examStarted]);

  // --- Handlers ---
  const handleAnswer = (val: any) =>
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));

  const handleFlag = () =>
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));

  const handleSubmitEarly = () => {
    if (window.confirm("Are you sure you want to submit your exam early?")) {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach((q) => {
      const uAns = userAnswers[q.id];
      if (!uAns) return;

      // Normalization helper for string comparisons
      const normalize = (val: any) => String(val).toLowerCase().trim();

      if (q.type === "mcq" || q.type === "true_false" || q.type === "fill_in") {
        if (normalize(uAns) === normalize(q.answer)) score++;
      } else if (q.type === "matching") {
        const allCorrect = q.pairs?.every((p) => uAns[p.hook] === p.purpose);
        if (allCorrect) score++;
      } else if (q.type === "drag_drop") {
        const allCorrect = q.answers?.every(
          (ans, idx) => uAns[q.targets![idx]] === ans,
        );
        if (allCorrect) score++;
      } else if (q.type === "mixed") {
        const allCorrect = q.fields?.every(
          (field, idx) => normalize(uAns[idx]) === normalize(field.answer),
        );
        if (allCorrect) score++;
      }
    });
    return score;
  };

  // --- Pre-exam segment selection
  if (!examStarted) {
    return (
      <SegmentSelection
        questions={questions}
        timer={timer}
        setTimer={setTimer}
        selectedSegment={selectedSegment}
        setSelectedSegment={setSelectedSegment}
        startExam={() => {
          // Default to all questions if none selected
          const segment = selectedSegment || {
            start: 0,
            end: questions.length - 1,
          };
          if (!selectedSegment) setSelectedSegment(segment);

          setExamStarted(true);
          // Initialize timer if set (convert minutes to seconds)
          if (timer) setTimeLeft(timer * 60);
        }}
      />
    );
  }

  // --- Show Results Component
  if (showResults) {
    return (
      <ExamResults
        score={calculateScore()}
        total={filteredQuestions.length}
        title={title}
        selectedSegment={selectedSegment}
        questions={questions}
        retakeSegment={() => {
          setShowResults(false);
          setCurrentIndex(0);
          setUserAnswers({});
          setFlaggedQuestions({});
          // Reset timer if it exists
          if (timer) setTimeLeft(timer * 60);
        }}
        takeNextSegment={() => {
          if (!selectedSegment) return;
          const newStart = selectedSegment.end + 1;
          // Check if we have more questions
          if (newStart >= questions.length) {
            alert("You have completed all questions!");
            return;
          }

          const newSeg = {
            start: newStart,
            end: Math.min(newStart + 49, questions.length - 1), // Assuming 50 batch size
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

  // --- Exam Page Layout
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 font-sans flex flex-col md:flex-row gap-6">
      {/* Sidebar for navigation */}
      <div className="hidden md:block">
        <FlagSidebar
          flaggedQuestions={flaggedQuestions}
          filteredQuestions={filteredQuestions}
          currentIndex={currentIndex}
          userAnswers={userAnswers}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

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
    </div>
  );
};
