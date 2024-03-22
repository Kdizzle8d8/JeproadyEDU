import ValueDialog from "../ValueDialog.svelte";
import { modalManager } from "./Shared";

export const valueDialogOpen = (valList:number[]) => {
	console.log(valList)
	modalManager.open({
		id: "value-dialog",
		component: ValueDialog,
		data:{valList}
	});
};
