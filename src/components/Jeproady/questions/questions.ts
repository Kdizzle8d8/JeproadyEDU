import { writable } from "svelte/store";
import { Question } from "./question";

export let questions = writable<Question[]>([]);