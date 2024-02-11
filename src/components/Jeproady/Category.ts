import { Question } from "./Question";

class Category {
  title: string;
  questions: Question[] = [];
  isActive: boolean = false;
  constructor(title: string) {
    this.title = title;
  }
}

export { Category };
