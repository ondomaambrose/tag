export type QuestionType = "mcq" | "fill" | "select" | "drag";

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
  answer: string;
}

export type Quotes {
  id: number;
  quote: string;
  author: string;
  forfun: string;
}

export interface MCQQuestion extends BaseQuestion {
  type: "mcq";
  options: string[];
}
export interface FillQuestion extends BaseQuestion {
  type: "fill";
}
export interface SelectQuestion extends BaseQuestion {
  type: "select";
  options: string[];
}
export interface DragDropQuestion extends BaseQuestion {
  type: "drag";
  options: string[];
}

export type Question =
  | MCQQuestion
  | FillQuestion
  | SelectQuestion
  | DragDropQuestion;
