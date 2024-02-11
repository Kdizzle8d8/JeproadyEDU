<script>
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Popover from "$lib/components/ui/popover";
</script>

<DropdownMenu.Root closeOnItemClick={false}>
  <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>
      <Popover.Root>
        <Popover.Trigger>Add question</Popover.Trigger>
        <Popover.Content>
          <p>This is your popover for adding a new question.</p>
        </Popover.Content>
      </Popover.Root>
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <Popover.Root>
        <Popover.Trigger>Edit</Popover.Trigger>
        <Popover.Content>
          <input type="text" placeholder="Edit here" />
        </Popover.Content>
      </Popover.Root>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
