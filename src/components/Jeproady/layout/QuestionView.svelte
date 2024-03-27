<script lang="ts">
  import { ContextMenu, DropdownMenu } from 'bits-ui';
  import PlusButton from '../plusButton.svelte';
  import { question } from '../questions/manage/manage';
  import { Question } from '../questions/question';
  import questions from '../questions/questions';
  import { valueDialogOpen } from '../valueDialog';
  import { Category } from './../categories/Category';

  export let category: Category;
  $: questions;
</script>

<header class="flex w-full h-10 border-b-2 dark:border-gray-800">
  <span class="self-center block ml-2 font-semibold text-center">Now Editing: {$question.category.title}</span>
</header>
<span class="flex items-center h-12 mx-4 border-2 border-t-0 rounded-md rounded-t-none dark:border-gray-800">
  {#each $questions as question}
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <button
          class="px-4 ml-2 text-yellow-300 border-2 rounded-full dark:bg-gray-700 dark:border-transparent hover:dark:border-b-gray-500 hover:border-b-4 w-min h-min"
          on:click={() => {
            makeActiveQ(question);
          }}>
          ${question.value}
        </button>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <button
            on:click={() => {
              removeQ(question);
            }}>Delete</button>
        </ContextMenu.Item>
        <ContextMenu.Item on:click={() => valueDialogOpen(valList, updateVal, activeQ)}>Change Value</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  {/each}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <PlusButton props="w-max ml-2 px-1 h-[30px] place-self-center inline-block text-center text-2xl rounded-[2px]  font-bold" color="bg-yellow-400"></PlusButton>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Item
          on:click={() => {
            addQuestion(new Question(0, 'MCQ'));
          }}>
          MCQ
        </DropdownMenu.Item>
        <DropdownMenu.Item
          on:click={() => {
            addQuestion(new Question(0, 'FRQ'));
          }}>
          FRQ
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</span>
