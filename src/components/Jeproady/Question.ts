class Question {
	title: string = "[INSERT]";
	typeQ: "MCQ" | "FRQ" = "MCQ";
	answer: string = "";
	value: number = 0;
	active: boolean = false;
	isActive = () => {
		return this.active;
	};
	constructor(val?: number, type?: "MCQ" | "FRQ") {
		this.value = val || this.value;
		this.typeQ = type || this.typeQ;
	}
}
export { Question };
