import type { Question } from "../questions/question";

export class Category {
  title: string;
  questions: Question[] = [];
  active: boolean = false;
  constructor(title: string) {
    this.title = title;
  }

  isActive = () => {
    return this.active;
  };
  getActiveQuestion = () => {
    return this.questions.find((question) => question.isActive());
  };
  removeQuestion = (question: Question) => {{
    this.questions = this.questions.filter((q) => q !== question);
  }}
  addQuestion = (question: Question) => {
    this.questions.push(question);
  }
}


