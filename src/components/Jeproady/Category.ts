import { Question } from "./Question";

class Category {
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
}

export { Category };
