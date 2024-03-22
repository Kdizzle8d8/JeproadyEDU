<script lang="ts">
  import { Question } from './Question';
  import { Textarea } from '$lib/components/ui/textarea';
  import Input from '$lib/components/ui/input/input.svelte';
  import type { Category } from './Category';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { onMount } from 'svelte';

  export let vals: number[];
  export let cardQ: Question;
  export let cardCat: Category;
  export let updateVal: (i: number) => void;

  //eport the component
</script>

{cardQ.typeQ}
<div class="w-full h-full flex flex-1">
  <div class="bg-blue-800 flex flex-1 flex-col w-full h-[70%] self-center m-5 mb-10 rounded-md place-items-center">
    <span class="flex text-white text-2xl mx-auto mb-auto mt-2 font-serif">
      {cardCat.title} for <span class=" pl-2 inline-block text-yellow-400"> $ </span>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class="flex text-yellow-400 flex-col items-center">{cardQ.value}</DropdownMenu.Trigger>
        <DropdownMenu.Content class="bg-blue-800 border-2 border-yellow-400 rounded-md">
          {#each vals as _, i}
            <DropdownMenu.Item
              class="text-center text-white"
              on:click={() => {
                updateVal(i);
              }}>{vals[i]}</DropdownMenu.Item>
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
    {#if cardQ.typeQ === 'FRQ'}
      <div class="w-full h-full grid place-items-center">
        <Textarea bind:value={cardQ.title} class="text-white  h-[90%] w-[90%] text-3xl text-center font-serif " />
      </div>
    {:else}
      <div class="w-full h-full flex justify-center">
        <Textarea bind:value={cardQ.title} class="text-white h-[40%] w-[90%] text-2xl text-center font-serif " />
      </div>
    {/if}
  </div>
  {#if cardQ.typeQ === 'MCQ'}
    <div class="grid grid-rows-12 w-[20%]">
      <Input placeholder="Correct Answer" class="row-start-3 w-[95%] text-yellow-500 text-center rounded-lg border-2" bind:value={cardQ.answer}></Input>
    </div>
  {/if}
</div>
