<script lang="ts">
  /**
   * Kanji Quiz Page - Handles all kanji quiz modes (flashcard, mc, typing)
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { getKanjiLessonData, getAllKanjiLessons } from '$lib/data/kanji/lessons';
  import { generateKanjiQuestions, generateKanjiMCOptions } from '$lib/utils/kanjiQuizUtils';
  import type { KanjiQuizQuestion, KanjiQuizDirection } from '$lib/utils/kanjiQuizUtils';
  import type { KanjiItem } from '$lib/types';
  import KanjiFlashCard from '$lib/components/kanji/KanjiFlashCard.svelte';
  import KanjiMultipleChoice from '$lib/components/kanji/KanjiMultipleChoice.svelte';
  import KanjiTypingQuiz from '$lib/components/kanji/KanjiTypingQuiz.svelte';
  import KanjiWritingQuiz from '$lib/components/kanji/KanjiWritingQuiz.svelte';
  import { QuizFrame, QuizSummary } from '$lib/components/quiz';
  import SkeletonCard from '$lib/components/common/SkeletonCard.svelte';
  import { recordKanjiLesson } from '$lib/stores/kanjiProgress';

  $: mode = $page.params.mode as 'flashcard' | 'mc' | 'typing';
  $: lessonId = parseInt($page.params.lesson || '0');
  $: direction = ($page.url.searchParams.get('direction') || 'kanji-vi') as KanjiQuizDirection;

  $: lessonData = lessonId > 0 ? getKanjiLessonData(lessonId) : null;

  let questions: KanjiQuizQuestion[] = [];
  let currentIndex = 0;
  let score = 0;
  let flipped = false;
  let quizStarted = false;
  let mcOptions: string[] = [];

  // All kanji items for MC option generation (pool from all lessons)
  let allKanjiItems: KanjiItem[] = [];
  let progressRecorded = false;

  $: currentQuestion = questions[currentIndex] || null;
  $: isComplete = quizStarted && currentIndex >= questions.length;
  $: progressCurrent = currentIndex + 1;
  $: progressTotal = questions.length;
  $: if (isComplete && !progressRecorded) {
    progressRecorded = true;
    recordKanjiLesson(lessonId, score, questions.length);
  }

  onMount(() => {
    if (!lessonData) {
      goto(`${base}/kanji`);
      return;
    }

    // Gather all kanji for MC option pool
    allKanjiItems = getAllKanjiLessons().flatMap(l => l.kanji);

    // Generate questions
    questions = generateKanjiQuestions(lessonData.kanji, direction);
    quizStarted = true;

    // Generate MC options for first question
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

      // Generate MC options for next question
      if (mode === 'mc' && questions[nextIdx]) {
        mcOptions = generateKanjiMCOptions(questions[nextIdx].answer, allKanjiItems, direction);
      }
    }, 300);
  }

  function restartQuiz() {
    if (!lessonData) return;
    questions = generateKanjiQuestions(lessonData.kanji, direction);
    currentIndex = 0;
    score = 0;
    progressRecorded = false;
    flipped = false;

    if (mode === 'mc' && questions.length > 0) {
      mcOptions = generateKanjiMCOptions(questions[0].answer, allKanjiItems, direction);
    }
  }

  function goBack() {
    goto(`${base}/kanji/${lessonId}`);
  }
</script>

<svelte:head>
  <title>Kanji Quiz - {lessonData?.title || 'Smart Quiz'}</title>
</svelte:head>

{#if isComplete}
  <QuizSummary title="Hoàn thành luyện Kanji" {score} total={questions.length}>
        <button class="ui-button" data-variant="default" on:click={restartQuiz}>
          Làm lại
        </button>
        <button class="ui-button" data-variant="secondary" on:click={goBack}>
          Về bài Kanji
        </button>
  </QuizSummary>
{:else if currentQuestion}
  <QuizFrame title={mode === 'flashcard' ? 'Flashcard Kanji' : mode === 'mc' ? 'Chọn đáp án Kanji' : 'Nhập đáp án Kanji'} context={`Kanji · Bài ${lessonId}`} direction={direction} current={progressCurrent} total={progressTotal} shortcuts={mode === 'mc' ? ['1–4: chọn đáp án', 'F1: nghe'] : mode === 'flashcard' ? ['Space / Enter: lật thẻ', 'F1: nghe'] : ['Enter: trả lời / tiếp tục']}>

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
    {:else if mode === 'writing'}
      {#key currentQuestion.id}
        <KanjiWritingQuiz
          item={currentQuestion.item}
          answer={currentQuestion.answer}
          on:correct={handleCorrect}
          on:wrong={handleWrong}
        />
      {/key}
    {/if}
  </QuizFrame>
{:else}
  <div class="loading">
    <SkeletonCard />
  </div>
{/if}

<style>
  .loading {
    text-align: center;
    padding: 3rem;
    color: var(--color-muted-foreground);
  }
</style>
