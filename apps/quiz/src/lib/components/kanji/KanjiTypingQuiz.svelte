<script lang="ts">
  /**
   * Kanji Typing Quiz Component
   * Shows kanji → type the meaning or reading
   */

  import type { KanjiItem } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { checkAnswer } from '$lib/utils/quizUtils';
  import { Volume2, Check, X, Lightbulb, ArrowRight } from 'lucide-svelte';

  export let item: KanjiItem;
  export let answer: string;

  const dispatch = createEventDispatcher();

  let userInput = '';
  let answered = false;
  let showHint = false;
  let isCorrect = false;
  let inputEl: HTMLInputElement;

  // Reset state when question changes
  let prevAnswer = '';
  $: if (answer !== prevAnswer) {
    prevAnswer = answer;
    userInput = '';
    answered = false;
    showHint = false;
    isCorrect = false;
    setTimeout(() => inputEl?.focus(), 50);
  }

  function submitAnswer() {
    if (answered || !userInput.trim()) return;

    answered = true;
    // Use checkAnswer for romaji normalization (shi/si, chi/ti, etc.)
    isCorrect = checkAnswer(userInput, answer, true);
    playJapaneseAudio(item.character);
  }

  function advance() {
    dispatch(isCorrect ? 'correct' : 'wrong', { item });
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!answered) {
        submitAnswer();
      } else {
        advance();
      }
      return;
    }
    if (event.key === 'F1') {
      event.preventDefault();
      playJapaneseAudio(item.character);
    }
  }

  function toggleHint() {
    showHint = !showHint;
  }

  $: inputClass = answered
    ? isCorrect
      ? 'typing-input correct'
      : 'typing-input wrong'
    : 'typing-input';
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="quiz-question-card">
  <div class="question-label">Type the meaning of this kanji:</div>
  <div class="question-kanji">{item.character}</div>
  <button class="btn-speak btn-speak--fc" on:click={() => playJapaneseAudio(item.character)}>
    <Volume2 size={16} aria-hidden="true" /> Speak (F1)
  </button>
</div>

<div class="typing-input-wrapper">
  <input
    type="text"
    class={inputClass}
    bind:value={userInput}
    bind:this={inputEl}
    placeholder="Type the meaning..."
    disabled={answered}
    autocomplete="off"
  />
</div>

<!-- Hint -->
<div class="hint-wrapper">
  {#if !showHint}
    <button class="btn-hint" on:click={toggleHint}>
      <Lightbulb size={16} aria-hidden="true" /> Show Hint
    </button>
  {:else}
    <div class="hint-content">
      {#if item.onyomi.length > 0}
        <span>音: {item.onyomi.join('、')}</span>
      {/if}
      {#if item.kunyomi.length > 0}
        <span>訓: {item.kunyomi.join('、')}</span>
      {/if}
    </div>
  {/if}
</div>

{#if answered}
  <div class="feedback" class:correct={isCorrect} class:wrong={!isCorrect} aria-live="polite" aria-atomic="true">
    {#if isCorrect}
      <Check size={16} aria-hidden="true" /> Correct!
    {:else}
      <X size={16} aria-hidden="true" /> Wrong! The correct answer is: {answer}
    {/if}
  </div>
  <button class="ui-button" data-variant="default" data-size="lg" on:click={advance}>
    Next Question <ArrowRight size={16} aria-hidden="true" />
  </button>
  <div class="hint-text">Press Enter to continue</div>
{:else}
  <button class="ui-button" data-variant="default" data-size="lg" on:click={submitAnswer} disabled={!userInput.trim()}>
    Submit Answer
  </button>
{/if}

<style>
  .quiz-question-card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    padding: 1.5rem;
    margin-bottom: 1.25rem;
    box-shadow: var(--shadow-surface);
    text-align: center;
  }

  .question-label {
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    margin-bottom: 0.4rem;
  }

  .question-kanji {
    font-family: var(--font-japanese);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .typing-input-wrapper {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .typing-input {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-card);
    color: var(--color-foreground);
    outline: none;
    transition: border-color var(--motion-standard);
  }

  .typing-input:focus {
    border-color: var(--color-primary);
  }

  .typing-input.correct {
    border-color: var(--color-success);
  }

  .typing-input.wrong {
    border-color: var(--color-destructive);
  }

  .hint-wrapper {
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-hint {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: inherit;
    background: transparent;
    color: var(--color-muted-foreground);
    border: 1.5px dashed var(--color-border);
    border-radius: var(--radius-control);
    cursor: pointer;
    transition: all var(--motion-standard);
  }

  .btn-hint:hover {
    background: var(--color-border);
    color: var(--color-foreground);
  }

  .hint-content {
    display: flex;
    gap: 1rem;
    font-family: var(--font-japanese);
    font-size: 0.9rem;
    color: var(--color-primary);
    padding: 0.4rem 0.8rem;
    background: var(--color-background);
    border-radius: var(--radius-control);
  }

  .feedback {
    padding: 0.8rem 1rem;
    border-radius: var(--radius-control);
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
  }

  .feedback.correct {
    background: var(--color-success-subtle);
    color: var(--color-success);
  }

  .feedback.wrong {
    background: var(--color-destructive-subtle);
    color: var(--color-destructive);
  }

  @media (max-width: 600px) {
    .question-kanji {
      font-size: 2.8rem;
    }

    .typing-input {
      font-size: 1rem;
    }
  }
</style>
