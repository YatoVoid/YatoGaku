<script lang="ts">
  /**
   * Grammar Quiz Page
   * Fill-in-blank and pattern-match quiz modes for grammar items
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { getCourse } from '$lib/data/courses';
  import { generateGrammarQuestions } from '$lib/utils/grammarQuizUtils';
  import type { GrammarQuizQuestion } from '$lib/utils/grammarQuizUtils';
  import type { CourseId } from '$lib/types/course';
  import { QuizFrame, QuizSummary } from '$lib/components/quiz';

  $: courseId = $page.params.courseId as CourseId;
  $: lessonId = parseInt($page.params.id || '0');
  $: mode = $page.params.mode as 'fill-blank' | 'pattern-match' | 'mixed';

  let questions: GrammarQuizQuestion[] = [];
  let currentIndex = 0;
  let score = 0;
  let selectedOption: string | null = null;
  let answered = false;
  let userInput = '';
  let started = false;

  $: currentQ = questions[currentIndex] || null;
  $: isComplete = started && currentIndex >= questions.length;

  onMount(() => {
    const course = getCourse(courseId);
    if (!course) { goto(`${base}/courses`); return; }

    const lessonData = course.getLessonData(lessonId);
    if (!lessonData || lessonData.grammar.length === 0) {
      goto(`${base}/course/${courseId}/lesson/${lessonId}`);
      return;
    }

    questions = generateGrammarQuestions(lessonData.grammar);
    started = true;
  });

  function selectOption(option: string) {
    if (answered) return;
    selectedOption = option;
    answered = true;
    const correct = option === currentQ?.answer;
    if (correct) score++;
  }

  function submitFillBlank() {
    if (answered || !userInput.trim()) return;
    answered = true;
    const correct = userInput.trim() === currentQ?.answer;
    if (correct) score++;
  }

  function advance() {
    selectedOption = null;
    answered = false;
    userInput = '';
    currentIndex++;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (currentQ?.type === 'pattern-match' && !answered) {
      const key = event.key;
      if (['1', '2', '3', '4'].includes(key) && currentQ.options) {
        const idx = parseInt(key) - 1;
        if (currentQ.options[idx]) selectOption(currentQ.options[idx]);
      }
    }
    if (currentQ?.type === 'pattern-match' && answered && event.key === 'Enter') {
      event.preventDefault();
      advance();
    }
    if (currentQ?.type === 'fill-blank' && event.key === 'Enter') {
      event.preventDefault();
      if (!answered) {
        submitFillBlank();
      } else {
        advance();
      }
    }
  }

  function restart() {
    const course = getCourse(courseId);
    const lessonData = course?.getLessonData(lessonId);
    if (lessonData) {
      questions = generateGrammarQuestions(lessonData.grammar);
    }
    currentIndex = 0;
    score = 0;
    answered = false;
    selectedOption = null;
    userInput = '';
  }

  function getOptionClass(option: string): string {
    if (!answered) return 'mc-option';
    if (option === currentQ?.answer) return 'mc-option correct';
    if (option === selectedOption) return 'mc-option wrong';
    return 'mc-option disabled';
  }
</script>

<svelte:head>
  <title>Grammar Quiz - Lesson {lessonId}</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="quiz-page">
{#if isComplete}
    <QuizSummary title="Grammar Practice Complete" {score} total={questions.length}>
        <button class="ui-button" data-variant="default" on:click={restart}>Try Again</button>
        <a href="{base}/course/{courseId}/lesson/{lessonId}" class="ui-button" data-variant="secondary">Back to Lesson</a>
    </QuizSummary>
  {:else if currentQ}
    <QuizFrame title={currentQ.type === 'fill-blank' ? 'Fill in the Grammar' : 'Choose the Grammar'} context={`${courseId.toUpperCase()} · Lesson ${lessonId}`} current={currentIndex + 1} total={questions.length} shortcuts={currentQ.type === 'fill-blank' ? ['Enter: answer / continue'] : ['1-4: choose answer']}>
    <div class="question-card">
      {#if currentQ.type === 'fill-blank'}
        <div class="q-label">Fill in the blank:</div>
        <div class="q-text q-japanese">{currentQ.question}</div>
        {#if currentQ.hint}
          <div class="q-hint">{currentQ.hint}</div>
        {/if}

        <div class="fill-input-wrapper">
          <input
            type="text"
            class="fill-input"
            class:correct={answered && userInput.trim() === currentQ.answer}
            class:wrong={answered && userInput.trim() !== currentQ.answer}
            bind:value={userInput}
            placeholder="Type the missing part..."
            disabled={answered}
            autocomplete="off"
          />
        </div>

        {#if answered}
          <div class="feedback" class:correct={userInput.trim() === currentQ.answer} class:wrong={userInput.trim() !== currentQ.answer}>
            {#if userInput.trim() === currentQ.answer}
              ✓ Correct!
            {:else}
              ✗ Answer: {currentQ.answer}
            {/if}
          </div>
          <button class="ui-button" data-variant="default" on:click={advance}>Next →</button>
        {:else}
          <button class="ui-button" data-variant="default" on:click={submitFillBlank} disabled={!userInput.trim()}>Submit</button>
        {/if}

      {:else}
        <!-- Pattern Match (MC) -->
        <div class="q-label">Which grammar pattern means:</div>
        <div class="q-text">{currentQ.question}</div>
        {#if currentQ.hint}
          <div class="q-hint">{currentQ.hint}</div>
        {/if}

        <div class="mc-options">
          {#each currentQ.options || [] as option, idx}
            <button
              class={getOptionClass(option)}
              on:click={() => selectOption(option)}
              disabled={answered}
            >
              <span class="mc-num">{idx + 1}.</span>
              <span class="mc-text">{option}</span>
            </button>
          {/each}
        </div>

        {#if answered}
          <div class="feedback" class:correct={selectedOption === currentQ.answer} class:wrong={selectedOption !== currentQ.answer} aria-live="polite">
            {selectedOption === currentQ.answer ? 'Correct.' : `Correct answer: ${currentQ.answer}`}
          </div>
          <button class="ui-button" data-variant="default" on:click={advance}>Next question</button>
        {/if}

        {#if !answered}
          <div class="hint-text">Press 1-4 to choose</div>
        {/if}
      {/if}
    </div>

    <!-- Grammar Reference (after answering) -->
    {#if answered && currentQ.grammarItem}
      <div class="grammar-ref">
        <strong>{currentQ.grammarItem.pattern}</strong>
        <p>{currentQ.grammarItem.explanation}</p>
      </div>
    {/if}
    </QuizFrame>
  {/if}
</div>

<style>
  .quiz-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }

  .question-card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-surface);
    text-align: center;
  }

  .q-label {
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    margin-bottom: 0.5rem;
  }

  .q-text {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .q-japanese {
    font-family: var(--font-japanese);
    font-size: 1.4rem;
  }

  .q-hint {
    font-size: 0.85rem;
    color: var(--color-muted-foreground);
    font-style: italic;
    margin-bottom: 1rem;
  }

  /* Fill blank */
  .fill-input-wrapper {
    margin: 1rem 0;
  }

  .fill-input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    font-family: var(--font-japanese);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-background);
    color: var(--color-foreground);
    outline: none;
    text-align: center;
  }

  .fill-input:focus { border-color: var(--color-primary); }
  .fill-input.correct { border-color: var(--color-success); }
  .fill-input.wrong { border-color: var(--color-destructive); }

  /* MC options */
  .mc-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
    text-align: left;
  }

  .mc-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    font-family: var(--font-japanese);
    font-weight: 500;
    background: var(--color-card);
    color: var(--color-foreground);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    cursor: pointer;
    transition: border-color var(--motion-standard), background var(--motion-standard);
  }

  .mc-option:hover:not(:disabled):not(.disabled) { border-color: var(--color-primary); }
  .mc-option.correct { border-color: var(--color-success); background: var(--color-success-subtle); }
  .mc-option.wrong { border-color: var(--color-destructive); background: var(--color-destructive-subtle); }
  .mc-option.disabled { cursor: default; opacity: 0.7; }
  .mc-option.correct.disabled { opacity: 1; }

  .mc-num {
    min-width: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  .hint-text {
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
    text-align: center;
  }

  .feedback {
    padding: 0.6rem;
    border-radius: var(--radius-control);
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .feedback.correct { background: var(--color-success-subtle); color: var(--color-success); }
  .feedback.wrong { background: var(--color-destructive-subtle); color: var(--color-destructive); }

  /* Grammar reference */
  .grammar-ref {
    background: var(--color-background);
    border: 1px dashed var(--color-border);
    border-radius: var(--radius-control);
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .grammar-ref strong {
    font-family: var(--font-japanese);
    color: var(--color-primary);
  }

  .grammar-ref p {
    margin: 0.3rem 0 0;
    color: var(--color-muted-foreground);
  }

</style>
