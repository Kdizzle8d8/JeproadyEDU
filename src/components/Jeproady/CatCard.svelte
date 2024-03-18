<script lang="ts">
  import { Category } from "./Category";
  import PlusButton from "./plusButton.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Question } from "./Question";

  export let cat: any;
  if (cat === undefined) {
    cat = new Category("None");
  }
  let tempQ = new Question();
</script>

<div class="flex flex-col w-full h-full">
  <header class="flex w-full h-10 border-b-2 border-gray-800">
    <span class="self-center block ml-2 font-semibold text-center">Now Editing: {cat.title}</span>
  </header>
  <span class="flex items-center h-12 mx-4 border-2 border-t-0 border-gray-800 rounded-md rounded-t-none">
    {#each cat.questions as question}
      <button class="px-4 ml-2 text-yellow-300 bg-gray-700 border-blue-500 rounded-full hover:border-b-2 w-min h-min" on:click={question.makeActive}>${question.value}</button>
    {/each}
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <PlusButton props="w-max ml-2 px-1 h-[30px] place-self-center inline-block text-center text-2xl rounded-[2px]  font-bold" color="bg-yellow-400"></PlusButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Item
            on:click={() => {
              tempQ.typeQ = "MCQ";
              cat.addQuestion(tempQ);
              cat = [...cat];
            }}
          >
            MCQ
          </DropdownMenu.Item>
          <DropdownMenu.Item
            on:click={() => {
              tempQ.typeQ = "FRQ";
              cat.addQuestion(tempQ);
              cat = [...cat];
            }}
          >
            FRQ
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </span>
</div>
