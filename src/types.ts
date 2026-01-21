export type QuestionType =
  | "mcq"
  | "true_false"
  | "fill_in"
  | "matching"
  | "drag_drop"
  | "mixed";

export interface QuestionField {
  fieldType: "fill_in" | "select";
  placeholder?: string;
  prompt?: string;
  options?: string[];
  answer: string;
}

export interface QuestionPair {
  hook: string;
  purpose: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[]; // For MCQ / Select
  answer?: string | boolean; // For MCQ / T/F / Fill
  pairs?: QuestionPair[]; // For Matching
  items?: string[]; // For DragDrop
  targets?: string[]; // For DragDrop
  answers?: string[]; // For DragDrop (Correct order)
  fields?: QuestionField[]; // For Mixed
}
