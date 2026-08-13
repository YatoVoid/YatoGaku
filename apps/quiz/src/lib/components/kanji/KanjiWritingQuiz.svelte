<script lang="ts">
  /**
   * Kanji Writing Quiz
   * Show meaning → user draws → show answer → self-rate
   */

  import type { KanjiItem } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import WritingCanvas from './WritingCanvas.svelte';
  import StrokeOrder from './StrokeOrder.svelte';

  export let item: KanjiItem;
  export let answer: string;

  const dispatch = createEventDispatcher();

  let showAnswer = false;
  let canvasRef: WritingCanvas;

  function reveal() {
    showAnswer = true;
    playJapaneseAudio(item.character);
  }

  function handleCorrect() {
    dispatch('correct', { item });
  }

  function handleWrong() {
    dispatch('wrong', { item });
  }
</script>

<div class="writing-quiz">
  <div class="question-card">
    <div class="q-label">Write this kanji:</div>
    <div class="q-meaning">{item.vietnamese} / {item.english}</div>
    <div class="q-hint">{item.strokeCount} stroke{item.strokeCount > 1 ? 's' : ''}</div>
  </div>

  <WritingCanvas bind:this={canvasRef} size={220} character={item.character} />

  {#if !showAnswer}
    <button class="ui-button" data-variant="default" data-size="lg" on:click={reveal}>
      Show Answer
    </button>
  {:else}
    <div class="answer-section">
      <div class="answer-kanji">{item.character}</div>
      <div class="answer-reading">{answer}</div>
      <StrokeOrder character={item.character} size={120} />

      <div class="rate-buttons">
        <button class="ui-button" data-variant="destructive" on:click={handleWrong}>✗ Wrong</button>
        <button class="ui-button" data-variant="success" on:click={handleCorrect}>✓ Correct</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .writing-quiz {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  .question-card {
    text-align: center;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    padding: 1.25rem;
    width: 100%;
  }

  .q-label { font-size: 0.82rem; color: var(--color-muted-foreground); margin-bottom: 0.3rem; }
  .q-meaning { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.3rem; }
  .q-hint { font-size: 0.8rem; color: var(--color-muted-foreground); }

  .answer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .answer-kanji {
    font-family: var(--font-japanese);
    font-size: 4rem;
    font-weight: 700;
  }

  .rate-buttons {
    display: flex;
    gap: 0.75rem;
  }
</style>
