<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { modalManager } from '../../../../components/Jeproady/Shared';

  export let id: string;
</script>

<DialogPrimitive.Root
  onOpenChange={(v) => {
    if (!v && id) {
      console.log(id);
      modalManager.close(id);
    }
  }}
  open>
  <slot />
</DialogPrimitive.Root>
