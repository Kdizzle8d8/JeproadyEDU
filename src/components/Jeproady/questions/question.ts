import { Category } from "../categories/Category";

export class Question {
	title: string = "[INSERT]";
	typeQ: "MCQ" | "FRQ" = "MCQ";
	answer: string = "";
	values:number[] = [100, 200, 300, 400, 500];
	value: number = 0;
	active: boolean = false;
    category:Category= new Category("Default");
	isActive = () => {
		return this.active;
	};
	constructor(val?: number, type?: "MCQ" | "FRQ") {
		this.value = val || this.value;
		this.typeQ = type || this.typeQ;
	}
}


