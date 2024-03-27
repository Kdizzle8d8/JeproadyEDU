<script lang="ts">
  import { writable } from 'svelte/store';
  import QuestionEditor from '../../QuestionEditor.svelte';
  import type { Category } from '../../categories/Category';
  import { Question } from '../question';
  const valList = [100, 200, 300, 400, 500];
  $: Question;
  const active = writable<Category>();

  // function addQuestion(q: Question) {
  //   if ($active.questions.length > 0) {
  //     valList.indexOf($active.questions[0].value);
  //   }
  //   $active.questions.push(q);
  //   $questions = $active.questions;
  //   console.log($active.questions);
  // }

  // function makeActiveQ(q: Question) {
  //   $activeQ = q;
  //   console.log($activeQ.typeQ);
  // }

  // function makeActiveCat(cat: Category) {
  //   if (cat.questions.length > 0) {
  //     $activeQ = cat.questions[0];
  //   } else {
  //     $activeQ = undefined;
  //   }

  //   $active = cat;
  //   $questions = $active.questions;
  // }
  // function removeQ(q: Question) {
  //   let qIndex = $active.questions.indexOf(q);
  //   $active.questions = $active.questions.filter((question) => question != q);
  //   active.set($active);
  //   if (qIndex > 0) {
  //     $activeQ = $active.questions[qIndex];
  //   } else {
  //     $activeQ = $active.questions[0];
  //   }
  //   $questions = $active.questions;
  // }
  // function updateVal(i: number) {
  //   $activeQ.value = valList[i];
  //   $questions = $active.questions;
  // }
</script>

<div class="flex w-full h-full">
  <div class="flex flex-col w-full h-full">
    <QuestionEditor question={$question}></QuestionEditor>
  </div>
</div>
