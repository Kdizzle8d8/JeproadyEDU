<script lang="ts">
  import * as ContextMenu from "$lib/components/ui/context-menu";
  import * as Select from "$lib/components/ui/select";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Popover from "$lib/components/ui/popover";
  import { Category } from "./Category";
  import { Question } from "./Question";
  let categories: Category[] = [{ title: "Dogs", questions: [new Question("stuff")], isActive: false }];
  let tempCatName: string;
  let catNum: number;
  let valRange: number[] = [100, 200, 300, 400, 500];
  let SelectedVal: any;
  let barWidth = "w-[20rem]";
  function PushNClearCats() {
    let tempCat: Category = { title: tempCatName, questions: [], isActive: false };
    for (let cat of categories) {
      if (cat == tempCat) {
        alert("Category already exists!");
        return;
      }
    }
    categories.push(tempCat);
    categories = categories;
    console.log(categories);
    tempCatName = "";
  }
  let tempQ: Question = new Question();
  let tempQCat: Category = new Category("NULL");

  function GetActive(): number {
    for (let cat of categories) {
      if (cat.isActive) {
        console.log("active");
        return categories.indexOf(cat);
      }
    }
    console.log("No active category");
    return -1;
  }
  function MakeActive(cat: Category) {
    for (let cat of categories) {
      cat.isActive = false;
    }
    cat.isActive = true;

    tempQCat.questions = tempQCat.questions;
    console.log(cat);
  }

  function PushNClearQs() {
    tempQ.value = SelectedVal.value;
    tempQCat.questions.push(tempQ);
    tempQCat.questions = tempQCat.questions;

    SelectedVal = null;
    console.log(categories);
    tempQ = new Question();
  }

  let isOpen = false;
</script>

<div class="flex flex-col flex-grow fixed h-[100vh] w-[15rem] order-1 border-r-2">
  <div class="grid w-[95%] grid-flow-col-dense mt-5 ml-5 text-white auto-cols-min h-min">
    <input class="w-[10rem] h-[2.5rem] focus-within:scale-[1.04] transition-all bg-gray-700 border-transparent rounded-md focus-within:outline-none focus-within:border-2 focus-within:border-blue-600 text-center" bind:value={tempCatName} />
    <button class="w-[2.3rem] h-[2.3rem] place-items-center rounded-md ml-2 self-center grid bg-blue-500 text-white font-semibold text-xl active:scale-[.95] duration-75 transition-all" on:click={PushNClearCats}>+</button>
  </div>

  <div class="grid grid-cols-1 gap-0 my-5 border-2 border-l-0 border-gray-600 rounded-md rounded-l-none gird-flow-col w-max h-min">
    {#each categories as cat}
      <ContextMenu.Root closeOnEscape={false}>
        <ContextMenu.Trigger>
          <button
            class="w-min px-4 h-[2.3rem] place-items-center rounded-md ml-2 self-center grid bg-blue-500 text-white font-semibold text-base m-2 active:scale-[.95] duration-75 transition-all"
            on:click={() => {
              MakeActive(cat);
            }}
          >
            {cat.title}
          </button>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>
            <button
              class="w-full h-full"
              on:click={() => {
                MakeActive(cat);
              }}
              on:click={() => {
                isOpen = true;
              }}
            >
              Rename
            </button>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    {/each}
    <Popover.Root
      open={isOpen}
      onOutsideClick={() => {
        isOpen = false;
      }}
    >
      <Popover.Trigger></Popover.Trigger>
      <Popover.Content>
        <label for="CatNameInput" class="grid content-center text-base h-min w-min">Category:</label>
        <input id="CatNameInput" class="flex flex-grow w-full my-auto text-center text-yellow-300 transition-all bg-gray-700 border-transparent rounded-md h-min focus-within:outline-none focus-within:border-2 focus-within:border-yellow-300" bind:value={categories[GetActive()].title} />
      </Popover.Content>
    </Popover.Root>
  </div>
</div>
<div class="flex ml-[15rem] flex-1 flex-col">
  <div class="mt-10 ml-5">
    <h1 class="w-auto text-4xl font-bold h-min">
      Welcome to the first test page of <span class="inline-block text-yellow-300">Jeproady!</span>
    </h1>
    <h2 class="ml-2 text-xl">Just enter your categories below to continue</h2>
  </div>

  {#if GetActive() != -1}
    <div class="flex flex-1">
      <!--qCard-->
      <div class="flex flex-col flex-wrap flex-1 w-full text-white">
        <div class="grid content-center justify-start w-full grid-flow-col gap-2 p-2 text-center grid-row-3 h-min">
          <input class="w-[10rem] h-[2.5rem] transition-all bg-gray-700 rounded-md focus-within:outline-none border-transparent text-yellow-300 focus-within:border-2 focus-within:border-yellow-300 text-center" placeholder="Title" bind:value={tempQ.title} />
          <input class="w-[10rem] h-[2.5rem] focus-within:scale-[1.04] transition-all bg-gray-700 rounded-md focus-within:outline-none border-transparent text-yellow-300 focus-within:border-2 focus-within:border-yellow-300 text-center" placeholder="Question" bind:value={tempQ.answer} />
          <Select.Root bind:selected={SelectedVal}>
            <Select.Trigger class="w-[10rem]">
              <Select.Value placeholder="Price"></Select.Value>
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each valRange as val}
                  <Select.Item value={val}>
                    {"$" + val}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
          </Select.Root>
          <button class="w-[2.3rem] h-[2.3rem] place-items-center rounded-md ml-2 self-center grid bg-yellow-300 text-white font-semibold text-xl active:scale-[.95] duration-75 transition-all" on:click={PushNClearQs}>+</button>
        </div>
      </div>
    </div>
  {/if}
</div>
