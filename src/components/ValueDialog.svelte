<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import type { ModalInstance } from "@svelte.codes/modal-manager";
	export let instance:ModalInstance<any>;
</script>

<Dialog.Root id="value-dialog">
	<Dialog.Header>
		<h2 class="text-center text-white">Change Value</h2>
	</Dialog.Header>
	<Dialog.Trigger>Change Value</Dialog.Trigger>
	<Dialog.Content>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="flex text-yellow-400 flex-col items-center">$activeQ.value</DropdownMenu.Trigger>
			<DropdownMenu.Content class="bg-blue-800 border-2 border-yellow-400 rounded-md">
				{#each instance.config.data.valList as _, i}
					<DropdownMenu.Item
						class="text-center text-white"
						on:click={() => {
							//updateVal(i);
						}}>{instance.config.data.valList[i]}</DropdownMenu.Item
					>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Dialog.Content>
</Dialog.Root>
