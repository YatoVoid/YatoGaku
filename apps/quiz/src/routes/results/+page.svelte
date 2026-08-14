<script lang="ts">
  /**
   * Results Page
   * Shows quiz results with score ring, stats, retry options
   */

  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { quizStore, startQuiz, resetQuiz } from '$lib/stores';
  import { calculateStats, formatDuration, generateQuestions } from '$lib/utils/quizUtils';
  import { getCourse } from '$lib/data/courses';
  import { showToast } from '$lib/stores/toast';
  import type { CourseId } from '$lib/types/course';
  import { QuizSummary } from '$lib/components/quiz';
  import UiButton from '$lib/components/ui/button/button.svelte';
  import { PenLine, RefreshCw, ArrowLeft, Home, ArrowRight } from 'lucide-svelte';

  // Guard: redirect if no quiz data
  onMount(() => {
    if ($quizStore.questions.length === 0) {
      showToast('No quiz results to show', 'error');
      goto(`${base}/`);
    }
  });

  $: stats = calculateStats($quizStore.score, $quizStore.questions.length);
  $: duration = $quizStore.endTime
    ? formatDuration($quizStore.endTime - $quizStore.startTime)
    : '0:00';
  $: wrongCount = $quizStore.wrongItems.length;
  $: courseId = $quizStore.courseId as CourseId;

  function retryAll() {
    const course = getCourse(courseId);
    const lessonData = course?.getLessonData($quizStore.lessonNumber);
    if (!lessonData) return;
    const questions = generateQuestions(lessonData.vocabulary, $quizStore.direction);
    startQuiz($quizStore.mode, $quizStore.direction, courseId, $quizStore.lessonNumber, questions);
    goto(`${base}/quiz/${$quizStore.mode}?course=${courseId}&lesson=${$quizStore.lessonNumber}&direction=${$quizStore.direction}`);
  }

  function retryWrong() {
    const wrongVocabItems = $quizStore.wrongItems.map(q => q.item);
    if (wrongVocabItems.length === 0) return;
    const questions = generateQuestions(wrongVocabItems as any, $quizStore.direction);
    startQuiz($quizStore.mode, $quizStore.direction, courseId, $quizStore.lessonNumber, questions);
    goto(`${base}/quiz/${$quizStore.mode}?course=${courseId}&lesson=${$quizStore.lessonNumber}&direction=${$quizStore.direction}`);
  }

  function backToLesson() {
    const cid = courseId;
    const lid = $quizStore.lessonNumber;
    resetQuiz();
    goto(`${base}/course/${cid}/lesson/${lid}`);
  }

  function backToHome() {
    resetQuiz();
    goto(`${base}/`);
  }

  function continueLearning() {
    const course = getCourse(courseId);
    const nextLesson = Math.min($quizStore.lessonNumber + 1, course?.metadata.lessonCount ?? $quizStore.lessonNumber);
    resetQuiz();
    goto(`${base}/course/${courseId}/lesson/${nextLesson}`);
  }
</script>

<svelte:head>
  <title>Quiz Results - YatoGaku</title>
</svelte:head>

{#if $quizStore.questions.length > 0}
  <QuizSummary title={stats.percentage >= 80 ? 'You\'ve got this down' : 'A few things to review'} score={stats.correct} total={stats.total} message={`${wrongCount} to review · ${duration} · Grade ${stats.grade}`}>
        {#if wrongCount > 0}
          <UiButton variant="default" size="lg" class="w-full" onclick={retryWrong}>
            <PenLine size={16} aria-hidden="true" /> Review {wrongCount} wrong answers
          </UiButton>
        {/if}
        <UiButton variant="secondary" size="lg" class="w-full" onclick={retryAll}>
          <RefreshCw size={16} aria-hidden="true" /> Retry all
        </UiButton>
        <UiButton variant="default" class="w-full" onclick={continueLearning}>
          Next lesson <ArrowRight size={16} aria-hidden="true" />
        </UiButton>
        <UiButton variant="outline" class="w-full" onclick={backToLesson}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to lesson
        </UiButton>
        <UiButton variant="ghost" class="w-full" onclick={backToHome}>
          <Home size={16} aria-hidden="true" /> Home
        </UiButton>
  </QuizSummary>
{/if}
