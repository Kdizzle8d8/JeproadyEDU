<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import type { ModalInstance } from '@svelte.codes/modal-manager';
  import { addCategory } from './categories';
  import { modalManager } from '../Shared';

  export let instance: ModalInstance<void> = null;

  let name: string;

  const create = () => {
    addCategory(name);
    modalManager.close('add-category');
  };
</script>

<Dialog.Root id="add-category">
  <Dialog.Content class="max-w-[20rem]">
    <input
      placeholder="Category Name"
      class="w-[15rem] rounded-md outline-transparent border-transparent text-center h-10"
      bind:value={name}
      on:keydown={(e) => {
        if (e.key === 'Enter') {
          create();
        }
      }} />
    <Dialog.Footer>
      <Button variant="secondary" on:click={create}>Create Category</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
