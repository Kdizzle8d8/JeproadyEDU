import { writable } from "svelte/store";
import { modalManager } from "../Shared";
import { Category } from "./Category";
import CategoryDialog from "./category-dialog.svelte";

const _categories: Category[] = []

export const categories=writable<Category[]>([]);

export const addCategory = (name: string) => {
    _categories.push(new Category(name))
    categories.set(_categories)
}

export const addCategoryOpen = () => {
	modalManager.open({
		id: "add-category",
		component: CategoryDialog,
	});
};

