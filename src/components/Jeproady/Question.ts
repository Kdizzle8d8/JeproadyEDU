class Question {
  title: string = "";
  typeQ: "MCQ" | "TF" | "OE" = "MCQ";
  answer: string = "";
  value: number = 0;

  constructor(title?: string) {
    this.title = title ? title : "";
  }
}

export { Question };
