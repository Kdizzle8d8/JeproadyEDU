<script lang="ts">
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import Input from '$lib/components/ui/input/input.svelte';
  import { Textarea } from '$lib/components/ui/textarea';
  import type { Question } from './questions/question';

  export let question: Question;
</script>

{question.typeQ}
<div class="flex flex-1 w-full h-full">
  <div class="bg-blue-800 flex flex-1 flex-col w-full h-[70%] self-center m-5 mb-10 rounded-md place-items-center">
    <span class="flex mx-auto mt-2 mb-auto font-serif text-2xl text-white">
      {question.category.title} for <span class="inline-block pl-2 text-yellow-400"> $ </span>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class="flex flex-col items-center text-yellow-400">{question.value}</DropdownMenu.Trigger>
        <DropdownMenu.Content class="bg-blue-800 border-2 border-yellow-400 rounded-md">
          {#each question.values as val}
            <DropdownMenu.Item
              class="text-center text-white"
              on:click={() => {
                // updateVal(i);
              }}>{val}</DropdownMenu.Item>
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
    {#if question.typeQ === 'FRQ'}
      <div class="grid w-full h-full place-items-center">
        <Textarea bind:value={question.title} class="text-white  h-[90%] w-[90%] text-3xl text-center font-serif " />
      </div>
    {:else}
      <div class="flex justify-center w-full h-full">
        <Textarea bind:value={question.title} class="text-white h-[40%] w-[90%] text-2xl text-center font-serif " />
      </div>
    {/if}
  </div>
  {#if question.typeQ === 'MCQ'}
    <div class="grid grid-rows-12 w-[20%]">
      <Input placeholder="Correct Answer" class="row-start-3 w-[95%] text-yellow-500 text-center rounded-lg border-2" bind:value={question.answer}></Input>
    </div>
  {/if}
</div>
