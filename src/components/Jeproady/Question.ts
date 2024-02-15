class Question {
	title: string = "";
	typeQ: "MCQ" | "TF" | "OE" = "MCQ";
	answer: string = "";
	value: number = 0;
	active: boolean = false;
	constructor(title?: string) {
		this.title = title ? title : "";
	}
	isActive = () => {
		return this.active;
	};
}

export { Question };
