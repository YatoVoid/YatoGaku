<script lang="ts">
  /**
   * Quiz Page - Handles all quiz modes (flashcard, multiple-choice, typing)
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { getCourse } from '$lib/data/courses';
  import { parseCourseFromUrl } from '$lib/utils/courseUtils';
  import { quizStore, startQuiz, answerCorrect, answerWrong, nextQuestion, isComplete, progress, currentQuestion } from '$lib/stores';
  import { generateQuestions, generateMCOptions } from '$lib/utils/quizUtils';
  import { FlashCard, MultipleChoice, TypingQuiz, QuizFrame } from '$lib/components/quiz';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import type { QuizMode, QuizDirection, CourseId } from '$lib/types';
  import { showToast } from '$lib/stores/toast';

  $: mode = $page.params.mode as QuizMode;
  $: courseId = parseCourseFromUrl($page.url.searchParams);
  $: lessonId = parseInt($page.url.searchParams.get('lesson') || '0');
  $: direction = ($page.url.searchParams.get('direction') || 'ja-vi') as QuizDirection;

  $: course = getCourse(courseId);
  $: lessonData = course?.getLessonData(lessonId) ?? null;
  $: directionLabel = direction === 'ja-vi' ? 'Nhật → Việt' : direction === 'vi-ja' ? 'Việt → Nhật' : direction === 'vi-romaji' ? 'Việt → Romaji' : direction === 'ja-en' ? 'Japanese → English' : direction === 'en-ja' ? 'English → Japanese' : direction === 'ja-romaji' ? 'Nhật → Romaji' : direction;
  $: shortcutLabels = mode === 'flashcard' ? ['Space / Enter: lật thẻ', 'F1: nghe'] : mode === 'multiple-choice' ? ['1–4: chọn đáp án', 'F1: nghe'] : ['Enter: trả lời / tiếp tục', 'F1: nghe'];

  let mcOptions: string[] = [];
  let flipped = false;

  onMount(() => {
    if (!lessonData) {
      goto(`${base}/`);
      return;
    }

    let vocab = lessonData.vocabulary;
    const customRaw = sessionStorage.getItem('smartquiz_custom_vocab');
    if (customRaw) {
      try {
        const parsed = JSON.parse(customRaw);
        if (Array.isArray(parsed) && parsed.length > 0) vocab = parsed;
      } catch {}
      sessionStorage.removeItem('smartquiz_custom_vocab');
    }

    const questions = generateQuestions(vocab, direction);
    startQuiz(mode, direction, courseId, lessonId, questions);
  });

  function handleCorrect(event: CustomEvent) {
    answerCorrect();
    flipped = false;
    setTimeout(() => {
      if ($isComplete) {
        showToast('Quiz complete!', 'success');
        goto(`${base}/results`);
      }
    }, 300);
  }

  function handleWrong(event: CustomEvent) {
    answerWrong();
    flipped = false;
    setTimeout(() => {
      if ($isComplete) {
        showToast('Quiz complete!', 'success');
        goto(`${base}/results`);
      }
    }, 300);
  }

  $: if ($currentQuestion && mode === 'multiple-choice' && lessonData) {
    mcOptions = generateMCOptions(
      $currentQuestion.answer,
      lessonData.vocabulary,
      direction,
      4
    );
  }
</script>

<svelte:head>
  <title>Quiz - {lessonData?.title || 'Smart Quiz'}</title>
</svelte:head>

{#if lessonData && $currentQuestion}
  <QuizFrame title={mode === 'flashcard' ? 'Flashcard' : mode === 'multiple-choice' ? 'Chọn đáp án' : 'Nhập câu trả lời'} context={`${course?.metadata.level ?? courseId.toUpperCase()} · Bài ${lessonId}`} direction={directionLabel} current={$progress.current} total={$progress.total} shortcuts={shortcutLabels}>
    {#if mode === 'flashcard' && 'japanese' in $currentQuestion.item}
      <FlashCard
        item={$currentQuestion.item}
        questionText={$currentQuestion.question}
        answerText={$currentQuestion.answer}
        bind:flipped
        on:correct={handleCorrect}
        on:wrong={handleWrong}
      />
    {:else if mode === 'multiple-choice' && 'japanese' in $currentQuestion.item}
      <MultipleChoice
        question={$currentQuestion.item}
        questionText={$currentQuestion.question}
        options={mcOptions}
        answer={$currentQuestion.answer}
        on:correct={handleCorrect}
        on:wrong={handleWrong}
      />
    {:else if mode === 'typing' && 'japanese' in $currentQuestion.item}
      <TypingQuiz
        question={$currentQuestion.item}
        questionText={$currentQuestion.question}
        answer={$currentQuestion.answer}
        isRomaji={direction === 'ja-romaji' || direction === 'vi-romaji'}
        on:correct={handleCorrect}
        on:wrong={handleWrong}
      />
    {/if}
  </QuizFrame>
{:else}
  <PageWorkspace size="md">
    <Skeleton class="h-2 w-full rounded-full" />
    <Skeleton class="h-64 w-full rounded-lg" />
    <div class="flex gap-2">
      <Skeleton class="h-10 flex-1 rounded-md" />
      <Skeleton class="h-10 flex-1 rounded-md" />
    </div>
  </PageWorkspace>
{/if}
