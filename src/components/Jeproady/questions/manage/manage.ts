import { writable } from "svelte/store";
import { Question } from "../question";

export const question=writable<Question>(new Question);