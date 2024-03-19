<script lang="ts">
	import { Category } from "./Category";
	import { Question } from "./Question";
	import PlusButton from "./plusButton.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { categories } from "./catStore";
	import { writable } from "svelte/store";
	import QuestionEditor from "./QuestionEditor.svelte";
	import * as ContextMenu from "$lib/components/ui/context-menu/index.js";

	const questions = writable<Question[]>([]);

	$: categories;
	const active = writable<Category>();
	let activeQ: Question;

	let newCat = "";
	function addCategory() {
		$categories = [...$categories, new Category(newCat)];
		console.log($categories);
	}

	function addQuestion(q: Question) {
		$active.questions.push(q);
		console.log($active.questions);
		active.set($active);
	}

	let tempQ = new Question();
	tempQ.value = 100;
	function makeActiveQ(q: Question) {
		activeQ = q;
	}

	function makeActiveCat(cat: Category) {
		if (cat.questions.length > 0) {
			activeQ = cat.questions[0];
		} else {
			activeQ = undefined;
		}
		$active = cat;
	}
	function removeQ(q: Question) {
		let qIndex = $active.questions.indexOf(q);
		$active.questions = $active.questions.filter((question) => question != q);
		active.set($active);
		if (qIndex > 0) {
			activeQ = $active.questions[qIndex];
		} else {
			activeQ = $active.questions[0];
		}
	}
</script>

<div class="flex w-full h-full">
	<div class="flex flex-col flex-grow h-full w-44">
		<Dialog.Root>
			<Dialog.Trigger>
				<PlusButton props="h-min w-15 flex flex-wrap mx-2 mt-4 p-2" content="New Question"></PlusButton>
			</Dialog.Trigger>

			<Dialog.Content class="max-w-[20rem]">
				<form on:submit|preventDefault={addCategory}><input placeholder="Category Name" class="w-[15rem] rounded-md outline-transparent border-transparent text-center h-10" bind:value={newCat} /></form>
			</Dialog.Content>
		</Dialog.Root>
		<div class="grid grid-cols-1 gap-0 my-5 border-2 border-l-0 dark:border-gray-600 rounded-md rounded-l-none gird-flow-col w-max h-min">
			{#each $categories as category}
				<PlusButton
					props="h-min w-max flex mx-auto my-2 mx-2 mr-4 p-2"
					content={category.title}
					onClick={() => {
						makeActiveCat(category);
					}}
				></PlusButton>
			{/each}
		</div>
	</div>
	{#if $active}
		<div class="flex flex-col w-full h-full">
			<header class="flex w-full h-10 border-b-2 dark:border-gray-800">
				<span class="self-center block ml-2 font-semibold text-center">Now Editing: {$active.title}</span>
			</header>
			<span class="flex items-center h-12 mx-4 border-2 border-t-0 dark:border-gray-800 rounded-md rounded-t-none">
				{#each $active.questions as question}
					<ContextMenu.Root>
						<ContextMenu.Trigger>
							<button
								class="px-4 ml-2 text-yellow-300 dark:bg-gray-700 border-2 dark:border-transparent rounded-full hover:dark:border-b-gray-500 hover:border-b-4 w-min h-min"
								on:click={() => {
									makeActiveQ(question);
								}}
							>
								${question.value}
							</button>
						</ContextMenu.Trigger>
						<ContextMenu.Content>
							<ContextMenu.Item>
								<button
									on:click={() => {
										removeQ(question);
									}}>Delete</button
								>
							</ContextMenu.Item>
							<ContextMenu.Item>
								<button>Change Value</button>
							</ContextMenu.Item>
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
									addQuestion(new Question(0, "MCQ"));
								}}
							>
								MCQ
							</DropdownMenu.Item>
							<DropdownMenu.Item
								on:click={() => {
									addQuestion(new Question(0, "FRQ"));
								}}
							>
								FRQ
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</span>
			{#if activeQ}
				<QuestionEditor cardQ={activeQ} cardCat={$active}></QuestionEditor>
			{/if}
		</div>
	{/if}
</div>
