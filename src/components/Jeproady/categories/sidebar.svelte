<script>
  import PlusButton from '../plusButton.svelte';
  import { addCategoryOpen, categories } from './categories';
</script>

<div class="flex flex-col flex-grow h-full w-44">
  <PlusButton props="w-[10rem] h-[2rem]" onClick={addCategoryOpen} content="New Question"></PlusButton>
  <div class="grid grid-cols-1 gap-0 my-5 border-2 border-l-0 rounded-md rounded-l-none dark:border-gray-600 gird-flow-col w-max h-min">
    {#each $categories as category}
      <PlusButton
        props="h-min w-max flex mx-auto my-2 mx-2 mr-4 p-2"
        content={category.title}
        onClick={() => {
          //   makeActiveCat(category);
        }}></PlusButton>
    {/each}
  </div>
</div>
