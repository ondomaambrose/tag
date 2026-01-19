import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    type: "mcq",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    type: "fill",
    question: "The process by which plants make food is called ________.",
    answer: "photosynthesis",
  },
  {
    id: 3,
    type: "select",
    question: "Select the largest planet:",
    options: ["Earth", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    id: 4,
    type: "drag",
    question:
      "Drag the correct term into the box: The powerhouse of the cell is the ________.",
    options: ["Nucleus", "Mitochondria", "Ribosome"],
    answer: "Mitochondria",
  },
];
