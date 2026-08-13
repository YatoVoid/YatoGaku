<script lang="ts">
  /**
   * HSK Quiz Page — Flashcard, MC, Typing for Chinese vocabulary
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { HSK5_DATA } from '$lib/data/hsk';
  import { generateHSKQuestions, generateHSKMCOptions } from '$lib/utils/hskQuizUtils';
  import type { HSKQuizQuestion, HSKQuizDirection } from '$lib/utils/hskQuizUtils';
  import type { HSKWord } from '$lib/types/hsk';
  import { playChineseAudio } from '$lib/utils/audioUtils';
  import { QuizFrame, QuizSummary } from '$lib/components/quiz';

  $: groupId = $page.params.group;
  $: mode = $page.params.mode as 'flashcard' | 'mc' | 'typing';
  $: direction = ($page.url.searchParams.get('direction') || 'chinese-vi') as HSKQuizDirection;

  let questions: HSKQuizQuestion[] = [];
  let currentIndex = 0;
  let score = 0;
  let flipped = false;
  let answered = false;
  let selectedOption: string | null = null;
  let userInput = '';
  let mcOptions: string[] = [];
  let started = false;
  let allWords: HSKWord[] = [];
  let groupWords: HSKWord[] = [];

  $: currentQ = questions[currentIndex] || null;
  $: isComplete = started && currentIndex >= questions.length;

  onMount(() => {
    const group = HSK5_DATA.find(g => g.id === groupId);
    if (!group) { goto(`${base}/hsk`); return; }

    allWords = HSK5_DATA.flatMap(g => g.words);
    groupWords = group.words;
    questions = generateHSKQuestions(group.words, direction, 10);
    started = true;

    if (mode === 'mc' && questions.length > 0) {
      mcOptions = generateHSKMCOptions(questions[0].answer, allWords, direction);
    }
  });

  function handleCorrect() { score++; advance(); }
  function handleWrong() { advance(); }

  function advance() {
    flipped = false;
    answered = false;
    selectedOption = null;
    userInput = '';
    const next = currentIndex + 1;
    currentIndex = next;
    if (mode === 'mc' && questions[next]) {
      mcOptions = generateHSKMCOptions(questions[next].answer, allWords, direction);
    }
  }

  function toggleFlip() { flipped = !flipped; }

  function selectOption(option: string) {
    if (answered) return;
    selectedOption = option;
    answered = true;
    if (option === currentQ?.answer) score++;
  }

  function submitTyping() {
    if (answered || !userInput.trim()) return;
    answered = true;
    if (userInput.trim().toLowerCase() === currentQ?.answer.toLowerCase()) score++;
    playChineseAudio(currentQ?.item.chinese || '');
  }

  function advanceTyping() { advance(); }

  function restart() {
    questions = generateHSKQuestions(groupWords, direction, 10);
    currentIndex = 0;
    score = 0;
    flipped = false;
    answered = false;
    selectedOption = null;
    userInput = '';
    if (mode === 'mc' && questions[0]) mcOptions = generateHSKMCOptions(questions[0].answer, allWords, direction);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'F1' && currentQ) {
      event.preventDefault();
      playChineseAudio(currentQ.item.chinese);
      return;
    }
    if (mode === 'flashcard' && (event.code === 'Space' || event.code === 'Enter')) {
      event.preventDefault();
      toggleFlip();
    }
    if (mode === 'mc' && !answered && ['1','2','3','4'].includes(event.key)) {
      const idx = parseInt(event.key) - 1;
      if (mcOptions[idx]) selectOption(mcOptions[idx]);
    }
    if (mode === 'mc' && answered && event.key === 'Enter') {
      event.preventDefault();
      advance();
    }
    if (mode === 'typing' && event.key === 'Enter') {
      event.preventDefault();
      if (!answered) submitTyping();
      else advanceTyping();
    }
  }

  function getOptionClass(option: string): string {
    if (!answered) return 'mc-option';
    if (option === currentQ?.answer) return 'mc-option correct';
    if (option === selectedOption) return 'mc-option wrong';
    return 'mc-option disabled';
  }
</script>

<svelte:head>
  <title>HSK Quiz - Smart Quiz</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="quiz-page">
  {#if isComplete}
    <QuizSummary title="Hoàn thành luyện HSK" {score} total={questions.length}>
      <button class="ui-button" data-variant="default" on:click={restart}>Làm lại</button>
      <a href="{base}/hsk/{groupId}" class="ui-button" data-variant="secondary">Về nhóm từ</a>
    </QuizSummary>
  {:else if currentQ}
    <QuizFrame title={mode === 'flashcard' ? 'Flashcard HSK' : mode === 'mc' ? 'Chọn đáp án HSK' : 'Nhập đáp án HSK'} context={`HSK 5 · ${groupId}`} direction={direction} current={currentIndex + 1} total={questions.length} shortcuts={mode === 'mc' ? ['1–4: chọn đáp án', 'F1: nghe'] : mode === 'flashcard' ? ['Space / Enter: lật thẻ', 'F1: nghe'] : ['Enter: trả lời / tiếp tục', 'F1: nghe']}>

    {#if mode === 'flashcard'}
      <div class="flashcard" class:flipped tabindex="0" role="button" aria-label="Flip card" on:click={toggleFlip} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(); } }}>
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <div class="fc-text">{currentQ.question}</div>
            <div class="hint-text">Space to flip · F1 to speak</div>
            <button class="btn-speak btn-speak--fc" on:click|stopPropagation={() => playChineseAudio(currentQ?.item.chinese || '')}>🔊 Speak (F1)</button>
          </div>
          <div class="flashcard-back">
            <div class="fc-answer">{currentQ.answer}</div>
            <div class="fc-pinyin">{currentQ.item.pinyin}</div>
          </div>
        </div>
      </div>
      <div class="nav-btns">
        <button class="ui-button" data-variant="destructive" on:click={handleWrong}>✗ Wrong</button>
        <button class="ui-button" data-variant="success" on:click={handleCorrect}>✓ Correct</button>
      </div>

    {:else if mode === 'mc'}
      <div class="question-card">
        <div class="q-text">{currentQ.question}</div>
        <button class="btn-speak btn-speak--fc" on:click={() => playChineseAudio(currentQ?.item.chinese || '')}>🔊 Speak (F1)</button>
      </div>
      <div class="mc-options">
        {#each mcOptions as opt, i}
          <button class={getOptionClass(opt)} on:click={() => selectOption(opt)} disabled={answered}>
            <span class="mc-num">{i + 1}.</span> {opt}
          </button>
        {/each}
      </div>
      {#if answered}
        <div class="feedback" class:correct={selectedOption === currentQ.answer} class:wrong={selectedOption !== currentQ.answer} aria-live="polite">
          {selectedOption === currentQ.answer ? 'Chính xác.' : `Đáp án đúng: ${currentQ.answer}`}
        </div>
        <button class="ui-button" data-variant="default" on:click={advance}>Câu tiếp theo</button>
      {/if}

    {:else if mode === 'typing'}
      <div class="question-card">
        <div class="q-text">{currentQ.question}</div>
        <button class="btn-speak btn-speak--fc" on:click={() => playChineseAudio(currentQ?.item.chinese || '')}>🔊 Speak (F1)</button>
      </div>
      <input type="text" class="typing-input" bind:value={userInput} placeholder="Type answer..." disabled={answered} autocomplete="off" />
      {#if answered}
        <div class="feedback" class:correct={userInput.trim().toLowerCase() === currentQ.answer.toLowerCase()} class:wrong={userInput.trim().toLowerCase() !== currentQ.answer.toLowerCase()} aria-live="polite">
          {userInput.trim().toLowerCase() === currentQ.answer.toLowerCase() ? '✓ Correct!' : `✗ Answer: ${currentQ.answer}`}
        </div>
        <button class="ui-button" data-variant="default" on:click={advanceTyping}>Next →</button>
      {:else}
        <button class="ui-button" data-variant="default" on:click={submitTyping} disabled={!userInput.trim()}>Submit</button>
      {/if}
    {/if}
    </QuizFrame>
  {/if}
</div>

<style>
  .quiz-page { max-width: 600px; margin: 0 auto; padding: 1rem; }

  .results-card { background: var(--color-card); border: 1px solid var(--color-border); border-radius: var(--radius-surface); padding: 2rem; text-align: center; }
  .score { font-size: 3rem; font-weight: 700; color: var(--color-primary); }
  .pct { font-size: 1.2rem; color: var(--color-muted-foreground); margin-bottom: 1.5rem; }
  .actions { display: flex; gap: 0.75rem; justify-content: center; }

  .question-card { background: var(--color-card); border: 1px solid var(--color-border); border-radius: var(--radius-surface); padding: 1.5rem; margin-bottom: 1rem; text-align: center; }
  .q-text { font-family: var(--font-chinese); font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }

  .flashcard { perspective: 800px; width: 100%; height: 250px; margin: 0 auto 1rem; cursor: pointer; outline: none; }
  .flashcard-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d; }
  .flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }
  .flashcard-front, .flashcard-back { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem; background: var(--color-card); border: 1px solid var(--color-border); border-radius: var(--radius-surface); backface-visibility: hidden; }
  .flashcard-back { transform: rotateY(180deg); }
  .fc-text { font-family: var(--font-chinese); font-size: 2.5rem; font-weight: 700; }
  .fc-answer { font-size: 1.5rem; font-weight: 600; }
  .fc-pinyin { font-size: 1rem; color: var(--color-muted-foreground); margin-top: 0.3rem; }
  .hint-text { font-size: 0.78rem; color: var(--color-muted-foreground); margin-top: 0.5rem; }
  .nav-btns { display: flex; justify-content: center; gap: 0.75rem; }

  .mc-options { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
  .mc-option { display: flex; align-items: center; gap: 0.75rem; width: 100%; padding: 0.8rem 1rem; font-size: 0.95rem; font-family: inherit; font-weight: 500; text-align: left; background: var(--color-card); color: var(--color-foreground); border: 2px solid var(--color-border); border-radius: var(--radius-control); cursor: pointer; transition: border-color 0.15s; }
  .mc-option:hover:not(:disabled) { border-color: var(--color-primary); }
  .mc-option.correct { border-color: var(--color-success); background: var(--color-success-subtle); }
  .mc-option.wrong { border-color: var(--color-destructive); background: var(--color-destructive-subtle); }
  .mc-option.disabled { cursor: default; opacity: 0.7; }
  .mc-num { font-weight: 700; color: var(--color-primary); }

  .typing-input { width: 100%; padding: 0.75rem 1rem; font-size: 1.1rem; border: 2px solid var(--color-border); border-radius: var(--radius-control); background: var(--color-card); color: var(--color-foreground); margin-bottom: 1rem; outline: none; }
  .typing-input:focus { border-color: var(--color-primary); }

  .feedback { padding: 0.6rem; border-radius: var(--radius-control); font-weight: 600; text-align: center; margin-bottom: 0.75rem; }
  .feedback.correct { background: var(--color-success-subtle); color: var(--color-success); }
  .feedback.wrong { background: var(--color-destructive-subtle); color: var(--color-destructive); }
</style>
