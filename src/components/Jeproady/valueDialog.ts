import type { Writable } from "svelte/store";
import ValueDialog from "../ValueDialog.svelte";
import type { Question } from "./Question";
import { modalManager } from "./Shared";

export const valueDialogOpen = (valList: number[], updateVal: (i: number) => void, activeQ:Writable<Question>) => {
	console.log(valList);
	modalManager.open({
		id: "value-dialog",
		component: ValueDialog,
		data: { valList, updateVal,activeQ }
	});
};
