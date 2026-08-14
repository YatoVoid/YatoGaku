<script lang="ts">
  /**
   * Typing Quiz Component
   * Enter to submit → plays audio → Enter again to advance
   */

  import type { VocabItem } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  import VirtualKeyboard from './VirtualKeyboard.svelte';
  import { showVirtualKeyboard, hideVirtualKeyboard, uiStore } from '$lib/stores';
  import { checkAnswer as checkQuizAnswer } from '$lib/utils/quizUtils';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { Volume2, Check, X, Lightbulb, Keyboard, ArrowRight } from 'lucide-svelte';

  export let question: VocabItem;
  export let questionText = '';
  export let answer: string;
  export let isRomaji = false;

  $: displayText = questionText || question.japanese || question.english;

  const dispatch = createEventDispatcher();

  let userInput = '';
  let answered = false;
  let showHint = false;
  let isCorrect = false;
  let inputEl: HTMLInputElement;

  // Reset local state when question changes (new card)
  let prevQuestionText = '';
  $: if (questionText !== prevQuestionText || answer !== prevAnswer) {
    prevQuestionText = questionText;
    prevAnswer = answer;
    userInput = '';
    answered = false;
    showHint = false;
    isCorrect = false;
    // Auto-focus input for next question
    setTimeout(() => inputEl?.focus(), 50);
  }
  let prevAnswer = '';

  function submitAnswer() {
    if (answered || !userInput.trim()) return;

    answered = true;
    isCorrect = checkQuizAnswer(userInput, answer, isRomaji);
    playJapaneseAudio(question.kana || question.japanese);
  }

  function advance() {
    dispatch(isCorrect ? 'correct' : 'wrong', { item: question });
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
      playJapaneseAudio(question.kana || question.japanese);
    }
  }

  function insertChar(char: string) {
    if (!answered) {
      userInput += char;
    }
  }

  function deleteChar() {
    if (!answered && userInput.length > 0) {
      userInput = userInput.slice(0, -1);
    }
  }

  function clearInput() {
    if (!answered) {
      userInput = '';
    }
  }

  function toggleKeyboard() {
    if ($uiStore.showVirtualKeyboard) {
      hideVirtualKeyboard();
    } else {
      showVirtualKeyboard();
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
  <div class="question-label">
    {#if isRomaji}
      Type the romaji reading:
    {:else}
      Type the answer:
    {/if}
  </div>
  <div class="question-text">{displayText}</div>
  {#if !isRomaji && question.english}
    <div class="question-romaji">{question.english}</div>
  {/if}
  <button class="btn-speak btn-speak--fc" on:click={() => playJapaneseAudio(question.kana || question.japanese)}>
    <Volume2 size={16} aria-hidden="true" /> Speak (F1)
  </button>
</div>

<div class="typing-input-wrapper">
  <input
    type="text"
    class={inputClass}
    bind:value={userInput}
    bind:this={inputEl}
    placeholder={isRomaji ? "Type romaji..." : "Type your answer..."}
    disabled={answered}
    autocomplete="off"
  />
  <button class="ui-button" data-variant="secondary" on:click={toggleKeyboard} aria-label="Toggle keyboard">
    <Keyboard size={20} aria-hidden="true" />
  </button>
</div>

<!-- Virtual Keyboard -->
<VirtualKeyboard
  visible={$uiStore.showVirtualKeyboard}
  on:insert={(e) => insertChar(e.detail.char)}
  on:delete={deleteChar}
  on:clear={clearInput}
  on:transform={(e) => {
    if (!answered && userInput.length > 0) {
      const lastChar = userInput.slice(-1);
      const mapped = e.detail.map[lastChar];
      if (mapped) userInput = userInput.slice(0, -1) + mapped;
    }
  }}
/>

<!-- Romaji Hint -->
<div class="romaji-hint-wrapper">
  {#if !showHint}
    <button class="btn-hint" on:click={toggleHint}>
      <Lightbulb size={16} aria-hidden="true" /> Show Romaji Hint
    </button>
  {:else if question.kana}
    <div class="hint-romaji">{question.kana}</div>
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

  .question-text {
    font-family: var(--font-japanese);
    font-size: 1.875rem; /* text-3xl — consistent across all quiz modes */
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  .question-romaji {
    font-size: 0.95rem;
    color: var(--color-muted-foreground);
    font-style: italic;
    margin-top: 0.5rem;
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
    font-family: var(--font-japanese);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-card);
    color: var(--color-foreground);
    outline: none;
    transition: border-color 0.2s ease;
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

  .romaji-hint-wrapper {
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
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-hint:hover {
    background: var(--color-border);
    color: var(--color-foreground);
  }

  .hint-romaji {
    font-size: 0.9rem;
    color: var(--color-primary);
    font-style: italic;
    padding: 0.4rem 0.8rem;
    background: var(--color-background);
    border-radius: 8px;
    letter-spacing: 0.02em;
  }

  .feedback {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
  }

  .feedback.correct {
    background: color-mix(in srgb, var(--color-success) 12%, var(--color-background));
    color: var(--color-success-text);
  }

  .feedback.wrong {
    background: color-mix(in srgb, var(--color-destructive) 12%, var(--color-background));
    color: var(--color-destructive);
  }

  .hint-text {
    text-align: center;
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    .typing-input-wrapper {
      flex-direction: column;
    }

    .typing-input {
      font-size: 1rem;
    }
  }
</style>
