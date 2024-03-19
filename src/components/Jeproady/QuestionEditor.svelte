<script lang="ts">
	import { Question } from "./Question";
	import { Textarea } from "$lib/components/ui/textarea";
	import Input from "$lib/components/ui/input/input.svelte";
	import type { Category } from "./Category";

	export let cardQ: Question;
	export let cardCat: Category;
	//export the component
</script>

<div class="w-full h-full flex flex-1">
	<div class="bg-blue-800 flex flex-1 flex-col w-full h-[70%] self-center m-5 mb-10 rounded-md place-items-center">
		<span class="flex text-white text-2xl mx-auto mb-auto mt-2 font-serif">{cardCat.title} for <span class=" pl-2 inline-block text-yellow-400">$</span> <input class=" text-center px-[1px] border-[1px] rounded border-yellow-400 w-[3rem] flexmax-w-16 text-yellow-500 bg-transparent font-serif" bind:value={cardQ.value} /></span>
		<span class="w-full h-full grid place-items-center">
			<Textarea bind:value={cardQ.title} class="text-white  h-[90%] w-[90%] text-3xl text-center font-serif " />
		</span>
	</div>

	<div class="grid grid-rows-12 w-[20%]">
		<Input placeholder="Correct Answer" class="row-start-3 w-[95%] text-yellow-500 text-center rounded-lg border-2" bind:value={cardQ.answer}></Input>
	</div>
</div>
