<script lang="ts">
  /**
   * JLPT Mock Test Page
   * 30 questions, 30-minute timer, JLPT-style scoring
   */

  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';
  import { generateMockTest, calculateJLPTScore } from '$lib/utils/mockTestUtils';
  import type { MockTestQuestion, JLPTScoreResult } from '$lib/utils/mockTestUtils';
  import { recordStudySession } from '$lib/utils/achievementUtils';
  import { Progress as ProgressBar } from '$lib/components/ui/progress';
  import { Card, CardContent } from '$lib/components/ui/card';
  import UiButton from '$lib/components/ui/button/button.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';

  let selectedLevel = 'n5';
  let started = false;
  let questions: MockTestQuestion[] = [];
  let currentIndex = 0;
  let answers: Record<string, string> = {};
  let selectedOption: string | null = null;
  let answered = false;
  let timeRemaining = 30 * 60;
  let timer: ReturnType<typeof setInterval>;
  let result: JLPTScoreResult | null = null;

  $: currentQ = questions[currentIndex] || null;
  $: isComplete = started && (currentIndex >= questions.length || timeRemaining <= 0);
  $: minutes = Math.floor(timeRemaining / 60);
  $: seconds = timeRemaining % 60;

  function startTest() {
    questions = generateMockTest(selectedLevel);
    if (questions.length === 0) return;
    started = true;
    currentIndex = 0;
    answers = {};
    result = null;
    timeRemaining = 30 * 60;
    timer = setInterval(() => {
      timeRemaining--;
      if (timeRemaining <= 0) { clearInterval(timer); finishTest(); }
    }, 1000);
  }

  function selectOption(option: string) {
    if (answered) return;
    selectedOption = option;
    answered = true;
    answers[currentQ.id] = option;
    setTimeout(() => {
      selectedOption = null;
      answered = false;
      currentIndex++;
      if (currentIndex >= questions.length) finishTest();
    }, 800);
  }

  function finishTest() {
    clearInterval(timer);
    recordStudySession();
    const vocabQs = questions.filter(q => q.section === 'vocab');
    const grammarQs = questions.filter(q => q.section === 'grammar');
    result = calculateJLPTScore({
      vocabCorrect: vocabQs.filter(q => answers[q.id] === q.answer).length,
      vocabTotal: vocabQs.length,
      grammarCorrect: grammarQs.filter(q => answers[q.id] === q.answer).length,
      grammarTotal: grammarQs.length
    });
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!currentQ || answered || isComplete) return;
    const key = event.key;
    if (['1', '2', '3', '4'].includes(key) && currentQ.options) {
      const idx = parseInt(key) - 1;
      if (currentQ.options[idx]) selectOption(currentQ.options[idx]);
    }
  }

  function getOptionClass(option: string): string {
    if (!answered) return '';
    if (option === currentQ?.answer) return 'correct';
    if (option === selectedOption && option !== currentQ?.answer) return 'wrong';
    return 'faded';
  }

  onDestroy(() => { clearInterval(timer); });
</script>

<svelte:head>
  <title>JLPT Mock Test - Smart Quiz</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<PageWorkspace size="md" class="min-h-[70vh]">
  {#if !started}
    <Card class="flex-1 flex flex-col justify-center">
      <CardContent class="py-10 text-center">
        <div class="text-4xl mb-4">📝</div>
        <h1 class="text-2xl font-bold mb-2">JLPT Mock Test</h1>
        <p class="text-muted-foreground mb-6">30 questions · 30 minutes · Vocabulary & Grammar</p>

        <div class="flex gap-3 justify-center mb-6">
          {#each ['n5', 'n4', 'n3'] as lvl}
            <button
              class="px-5 py-3 text-lg font-bold border-2 rounded-xl cursor-pointer transition-colors
                {selectedLevel === lvl ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-card text-foreground hover:border-primary'}"
              on:click={() => selectedLevel = lvl}
            >
              {lvl.toUpperCase()}
            </button>
          {/each}
        </div>

        <UiButton size="lg" onclick={startTest}>Start Test</UiButton>

        <div class="mt-6 text-xs text-muted-foreground">
          <p>Press 1-4 to answer · Auto-advance after each question</p>
        </div>
      </CardContent>
    </Card>

  {:else if isComplete && result}
    <Card>
      <CardContent class="py-8 text-center">
        <h2 class="text-2xl font-bold mb-6">{result.pass ? '🎉 PASSED!' : '📚 Not Yet'}</h2>

        <div class="flex gap-4 justify-center mb-6">
          {#each [
            { label: 'Vocabulary', score: result.vocabPercentage, detail: `${result.vocabScore}/60` },
            { label: 'Grammar', score: result.grammarPercentage, detail: `${result.grammarScore}/60` }
          ] as section}
            <div class="flex flex-col items-center gap-1 px-6 py-4 bg-muted rounded-xl min-w-[120px]">
              <span class="text-[0.7rem] text-muted-foreground font-semibold uppercase">{section.label}</span>
              <span class="text-2xl font-bold text-primary">{section.score}%</span>
              <span class="text-xs text-muted-foreground">{section.detail}</span>
            </div>
          {/each}
        </div>

        <div class="flex items-center justify-center gap-3 mb-4 text-lg">
          <span class="font-semibold">Total</span>
          <span class="text-3xl font-bold text-primary">{result.totalScore}/120</span>
          <span class="text-muted-foreground">{result.totalPercentage}%</span>
        </div>

        <p class="text-sm text-muted-foreground mb-6">
          {#if result.pass}
            You meet the passing criteria for JLPT {selectedLevel.toUpperCase()}!
          {:else}
            Need ≥44% total AND ≥32% each section to pass.
          {/if}
        </p>

        <div class="flex gap-3 justify-center flex-wrap">
          <UiButton onclick={startTest}>Try Again</UiButton>
          <UiButton variant="secondary" onclick={() => window.location.href = `${base}/`}>Home</UiButton>
        </div>
      </CardContent>
    </Card>

  {:else if currentQ}
    <div class="flex items-center gap-3 mb-4">
      <div class="text-base font-bold min-w-[4rem] {timeRemaining < 300 ? 'text-destructive' : 'text-foreground'}" style="font-variant-numeric: tabular-nums">
        {minutes}:{seconds.toString().padStart(2, '0')}
      </div>
      <div class="flex-1">
        <ProgressBar current={currentIndex + 1} total={questions.length} showText={true} />
      </div>
      <span class="text-xs font-semibold px-2 py-1 bg-muted rounded-md whitespace-nowrap">
        {currentQ.section === 'vocab' ? '📚 Vocab' : '📖 Grammar'}
      </span>
    </div>

    <Card class="mb-4">
      <CardContent class="py-6 text-center">
        <div class="text-xs text-muted-foreground mb-2">
          {currentQ.section === 'vocab' ? 'What is the meaning of:' : 'Which meaning matches:'}
        </div>
        <div class="text-xl font-bold" style="font-family: var(--font-japanese)">{currentQ.question}</div>
      </CardContent>
    </Card>

    <div class="flex flex-col gap-2 mb-4">
      {#each currentQ.options as option, idx}
        <button
          class="mc-option {getOptionClass(option)}"
          on:click={() => selectOption(option)}
          disabled={answered}
        >
          <span class="min-w-[1.5rem] font-bold text-primary">{idx + 1}.</span>
          <span class="flex-1">{option}</span>
        </button>
      {/each}
    </div>

    {#if !answered}
      <p class="text-center text-xs text-muted-foreground">Press 1-4 to choose</p>
    {/if}
  {/if}
</PageWorkspace>

<style>
  .mc-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: left;
    background: var(--color-card);
    color: var(--color-foreground);
    border: 2px solid var(--color-border);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }
  .mc-option:hover:not(:disabled):not(.faded) { border-color: var(--color-primary); }
  .mc-option.correct { border-color: var(--color-success); background: color-mix(in srgb, var(--color-success) 10%, var(--color-card)); }
  .mc-option.wrong { border-color: var(--color-destructive); background: color-mix(in srgb, var(--color-destructive) 10%, var(--color-card)); }
  .mc-option.faded { cursor: default; opacity: 0.6; }
  .mc-option.correct.faded { opacity: 1; }
</style>
