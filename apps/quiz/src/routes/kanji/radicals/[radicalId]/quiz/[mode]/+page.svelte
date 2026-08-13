<script lang="ts">
  /**
   * Radical Quiz Page — quiz all kanji sharing a radical
   * Reuses the same pattern as /kanji/[lesson]/quiz/[mode]
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { getKanjiItemsByRadical, getRadicals } from '$lib/data/kanji/radicals';
  import { getAllKanjiLessons } from '$lib/data/kanji/lessons';
  import { KANJI_N3_DATA } from '$lib/data/kanji/kanji-n3';
  import { KANJI_N2_DATA } from '$lib/data/kanji/kanji-n2';
  import { KANJI_N1_DATA } from '$lib/data/kanji/kanji-n1';
  import { generateKanjiQuestions, generateKanjiMCOptions } from '$lib/utils/kanjiQuizUtils';
  import type { KanjiQuizQuestion, KanjiQuizDirection } from '$lib/utils/kanjiQuizUtils';
  import type { KanjiItem } from '$lib/types';
  import KanjiFlashCard from '$lib/components/kanji/KanjiFlashCard.svelte';
  import KanjiMultipleChoice from '$lib/components/kanji/KanjiMultipleChoice.svelte';
  import KanjiTypingQuiz from '$lib/components/kanji/KanjiTypingQuiz.svelte';
  import { QuizFrame, QuizSummary } from '$lib/components/quiz';
  import SkeletonCard from '$lib/components/common/SkeletonCard.svelte';

  $: mode = $page.params.mode as 'flashcard' | 'mc' | 'typing';
  $: radicalId = decodeURIComponent($page.params.radicalId);
  $: direction = ($page.url.searchParams.get('direction') || 'kanji-vi') as KanjiQuizDirection;
  $: radicalInfo = getRadicals(radicalId)[0] ?? null;

  let questions: KanjiQuizQuestion[] = [];
  let currentIndex = 0;
  let score = 0;
  let flipped = false;
  let quizStarted = false;
  let mcOptions: string[] = [];
  let allKanjiItems: KanjiItem[] = [];

  $: currentQuestion = questions[currentIndex] || null;
  $: isComplete = quizStarted && currentIndex >= questions.length;
  $: progressCurrent = currentIndex + 1;
  $: progressTotal = questions.length;

  onMount(() => {
    const kanjiItems = getKanjiItemsByRadical(radicalId);
    if (kanjiItems.length === 0) {
      goto(`${base}/kanji/radicals/${encodeURIComponent(radicalId)}`);
      return;
    }

    // Pool for MC options
    allKanjiItems = [
      ...getAllKanjiLessons().flatMap(l => l.kanji),
      ...KANJI_N3_DATA,
      ...KANJI_N2_DATA,
      ...KANJI_N1_DATA,
    ];

    questions = generateKanjiQuestions(kanjiItems, direction);
    quizStarted = true;

    if (mode === 'mc' && questions.length > 0) {
      mcOptions = generateKanjiMCOptions(questions[0].answer, allKanjiItems, direction);
    }
  });

  function handleCorrect() {
    score++;
    advanceQuestion();
  }

  function handleWrong() {
    advanceQuestion();
  }

  function advanceQuestion() {
    flipped = false;
    const nextIdx = currentIndex + 1;
    setTimeout(() => {
      currentIndex = nextIdx;
      if (mode === 'mc' && questions[nextIdx]) {
        mcOptions = generateKanjiMCOptions(questions[nextIdx].answer, allKanjiItems, direction);
      }
    }, 300);
  }

  function restartQuiz() {
    const kanjiItems = getKanjiItemsByRadical(radicalId);
    questions = generateKanjiQuestions(kanjiItems, direction);
    currentIndex = 0;
    score = 0;
    flipped = false;
    if (mode === 'mc' && questions.length > 0) {
      mcOptions = generateKanjiMCOptions(questions[0].answer, allKanjiItems, direction);
    }
  }

  function goBack() {
    goto(`${base}/kanji/radicals/${encodeURIComponent(radicalId)}`);
  }
</script>

<svelte:head>
  <title>Quiz bộ thủ {radicalId} — Smart Quiz</title>
</svelte:head>

{#if isComplete}
  <QuizSummary title={`Hoàn thành bộ thủ ${radicalId}`} {score} total={questions.length} message={radicalInfo ? `Bộ thủ ${radicalId} · ${radicalInfo.meaningVi}` : undefined}>
        <button class="ui-button" data-variant="default" on:click={restartQuiz}>Thử lại</button>
        <button class="ui-button" data-variant="secondary" on:click={goBack}>Về bộ thủ</button>
  </QuizSummary>
{:else if currentQuestion}
  <QuizFrame title={mode === 'flashcard' ? 'Flashcard bộ thủ' : mode === 'mc' ? 'Chọn đáp án bộ thủ' : 'Nhập đáp án bộ thủ'} context={`Bộ thủ ${radicalId}`} direction={direction} current={progressCurrent} total={progressTotal} shortcuts={mode === 'mc' ? ['1–4: chọn đáp án', 'F1: nghe'] : mode === 'flashcard' ? ['Space / Enter: lật thẻ', 'F1: nghe'] : ['Enter: trả lời / tiếp tục']}>

    {#if mode === 'flashcard'}
      {#key currentQuestion.id}
        <KanjiFlashCard
          item={currentQuestion.item}
          bind:flipped
          on:correct={handleCorrect}
          on:wrong={handleWrong}
        />
      {/key}
    {:else if mode === 'mc'}
      {#key currentQuestion.id}
        <KanjiMultipleChoice
          item={currentQuestion.item}
          options={mcOptions}
          answer={currentQuestion.answer}
          on:correct={handleCorrect}
          on:wrong={handleWrong}
        />
      {/key}
    {:else if mode === 'typing'}
      {#key currentQuestion.id}
        <KanjiTypingQuiz
          item={currentQuestion.item}
          answer={currentQuestion.answer}
          on:correct={handleCorrect}
          on:wrong={handleWrong}
        />
      {/key}
    {/if}
  </QuizFrame>
{:else}
  <div class="loading"><SkeletonCard /></div>
{/if}

<style>
  .loading {
    text-align: center;
    padding: 3rem;
  }
</style>
