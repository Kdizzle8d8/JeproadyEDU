import { writable } from "svelte/store";
import { Category } from "./Category";
import type { Writable } from "stream";
export const categories = writable<Category[]>([]);
