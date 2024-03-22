<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import type { ModalInstance } from '@svelte.codes/modal-manager';
  import { onMount } from 'svelte';

  export let instance: ModalInstance<any>;
  let q = instance.config.data.activeQ;
</script>

<Dialog.Root id="value-dialog">
  <Dialog.Trigger>Change Value</Dialog.Trigger>
  <Dialog.Content class="max-w-[15rem] font-semibold">
    <Dialog.Header>
      <h2>Change Value</h2>
    </Dialog.Header>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class="flex text-yellow-400 flex-row ">
        $<span class="border-[1px] font-normal dark:border-white border-black border-opacity-15 rounded ml-2 w-full">{$q.value}</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class="bg-blue-800 border-2  border-yellow-400 rounded-md">
        {#each instance.config.data.valList as _, i}
          <DropdownMenu.Item
            class="text-center text-white"
            on:click={() => {
              instance.config.data.updateVal(i);
            }}>{instance.config.data.valList[i]}</DropdownMenu.Item>
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Dialog.Content>
</Dialog.Root>
