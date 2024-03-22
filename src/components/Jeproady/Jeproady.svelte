<script lang="ts">
  import { Category } from './Category';
  import { Question } from './Question';
  import PlusButton from './plusButton.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { writable } from 'svelte/store';
  import QuestionEditor from './QuestionEditor.svelte';
  import * as ContextMenu from '$lib/components/ui/context-menu/index.js';
  import { onMount } from 'svelte';
  import { Value } from 'radix-icons-svelte';
  import ValueDialog from '../ValueDialog.svelte';
  import { valueDialogOpen } from './valueDialog';
  import { addCategoryOpen, categories } from './categories/categories';
  const questions = writable<Question[]>([]);
  const valList = [100, 200, 300, 400, 500];
  $: categories;
  const active = writable<Category>();
  const activeQ = writable<Question>();

  let newCat = '';
  function addCategory() {
    $categories = [...$categories, new Category(newCat)];
    console.log($categories);
  }

  function addQuestion(q: Question) {
    if ($active.questions.length > 0) {
      valList.indexOf($active.questions[0].value);
    }
    $active.questions.push(q);
    $questions = $active.questions;
    console.log($active.questions);
  }

  function makeActiveQ(q: Question) {
    $activeQ = q;
    console.log($activeQ.typeQ);
  }

  function makeActiveCat(cat: Category) {
    if (cat.questions.length > 0) {
      $activeQ = cat.questions[0];
    } else {
      $activeQ = undefined;
    }

    $active = cat;
    $questions = $active.questions;
  }
  function removeQ(q: Question) {
    let qIndex = $active.questions.indexOf(q);
    $active.questions = $active.questions.filter((question) => question != q);
    active.set($active);
    if (qIndex > 0) {
      $activeQ = $active.questions[qIndex];
    } else {
      $activeQ = $active.questions[0];
    }
    $questions = $active.questions;
  }
  function updateVal(i: number) {
    $activeQ.value = valList[i];
    $questions = $active.questions;
  }
</script>

{JSON.stringify($categories)}
<div class="flex w-full h-full">
  <div class="flex flex-col flex-grow h-full w-44">
    <PlusButton props="w-[10rem] h-[2rem]" onClick={addCategoryOpen} content="New Question"></PlusButton>
    <div class="grid grid-cols-1 gap-0 my-5 border-2 border-l-0 dark:border-gray-600 rounded-md rounded-l-none gird-flow-col w-max h-min">
      {#each $categories as category}
        <PlusButton
          props="h-min w-max flex mx-auto my-2 mx-2 mr-4 p-2"
          content={category.title}
          onClick={() => {
            makeActiveCat(category);
          }}></PlusButton>
      {/each}
    </div>
  </div>
  {#if $active}
    <div class="flex flex-col w-full h-full">
      <header class="flex w-full h-10 border-b-2 dark:border-gray-800">
        <span class="self-center block ml-2 font-semibold text-center">Now Editing: {$active.title}</span>
      </header>
      <span class="flex items-center h-12 mx-4 border-2 border-t-0 dark:border-gray-800 rounded-md rounded-t-none">
        {#each $questions as question}
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <button
                class="px-4 ml-2 text-yellow-300 dark:bg-gray-700 border-2 dark:border-transparent rounded-full hover:dark:border-b-gray-500 hover:border-b-4 w-min h-min"
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
      {#if $activeQ}
        <QuestionEditor {updateVal} vals={valList} cardQ={$activeQ} cardCat={$active}></QuestionEditor>
      {/if}
    </div>
  {/if}
</div>
