// src/types.ts

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

  // --- OPTIONAL FIELDS (Depending on Type) ---

  // Only for MCQ & Mixed-Select
  options?: string[];

  // For MCQ, T/F, Fill-in
  answer?: string | boolean;

  // Legacy support (optional)
  correctAnswer?: string | boolean;

  // Only for Matching
  pairs?: QuestionPair[];

  // Only for Drag & Drop
  items?: string[]; // The draggable items
  targets?: string[]; // The drop zones
  answers?: string[]; // The correct answer key (array)

  // Only for Mixed
  fields?: QuestionField[];
}
