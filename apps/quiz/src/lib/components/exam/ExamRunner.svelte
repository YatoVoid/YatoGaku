<script lang="ts">
  /**
   * Exam runner — the exam-taking experience for one paper.
   *
   * Phases: intro -> running -> result.
   * Section-by-section navigation, a countdown timer that auto-submits at 0,
   * an in-app submit confirmation (no native confirm so it stays testable),
   * scoring via computeExamResult, and attempt persistence.
   */
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';
  import type { ExamPaper, ExamResult } from '$lib/types/exam';
  import { clearExamDraft, computeExamResult, getExamDraft, saveAttempt, saveExamDraft, sectionTypeLabel } from '$lib/utils/examUtils';
  import ExamQuestionView from './ExamQuestionView.svelte';
  import ExamResultView from './ExamResultView.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { Progress } from '$lib/components/ui/progress';
  import Button from '$lib/components/ui/button/button.svelte';
  import { Clock, ChevronLeft, ChevronRight } from 'lucide-svelte';

  let { paper }: { paper: ExamPaper } = $props();

  type Phase = 'intro' | 'running' | 'result';

  const totalQuestions = $derived(paper.sections.reduce((n, s) => n + s.questions.length, 0));
  // Global 1-based start number for each section (for "Question N" labels).
  const sectionStart = $derived(
    (() => {
      let offset = 0;
      return paper.sections.map((s) => {
        const start = offset;
        offset += s.questions.length;
        return start;
      });
    })()
  );

  let phase = $state<Phase>('intro');
  let currentSection = $state(0);
  let answers = $state<Record<string, number>>({});
  // Set when the exam starts (see start()); intro shows paper.durationMinutes directly.
  let timeRemaining = $state(0);
  let startedAt = $state(0);
  let result = $state<ExamResult | null>(null);
  let showConfirm = $state(false);
  // Becomes true after client hydration — exposed via data-ready for reliable testing.
  let hydrated = $state(false);
  let resumable = $state(false);
  let timer: ReturnType<typeof setInterval> | undefined;

  const answeredCount = $derived(Object.keys(answers).length);
  const section = $derived(paper.sections[currentSection]);
  const isFirstSection = $derived(currentSection === 0);
  const isLastSection = $derived(currentSection === paper.sections.length - 1);
  const minutes = $derived(Math.floor(timeRemaining / 60));
  const seconds = $derived(timeRemaining % 60);
  const lowTime = $derived(timeRemaining <= 60);

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
  }

  function start() {
    answers = {};
    currentSection = 0;
    result = null;
    showConfirm = false;
    startedAt = Date.now();
    timeRemaining = paper.durationMinutes * 60;
    phase = 'running';
    stopTimer();
    timer = setInterval(() => {
      timeRemaining -= 1;
      if (timeRemaining <= 0) {
        timeRemaining = 0;
        submit();
      }
    }, 1000);
    persistDraft();
  }

  function persistDraft() {
    if (phase !== 'running' || !startedAt) return;
    saveExamDraft({ paperId: paper.id, answers: { ...answers }, currentSection, startedAt, expiresAt: startedAt + paper.durationMinutes * 60_000 });
  }

  function resume() {
    const draft = getExamDraft(paper.id);
    if (!draft) { resumable = false; return; }
    answers = { ...draft.answers };
    currentSection = Math.min(draft.currentSection, paper.sections.length - 1);
    startedAt = draft.startedAt;
    timeRemaining = Math.max(1, Math.ceil((draft.expiresAt - Date.now()) / 1000));
    phase = 'running';
    resumable = false;
    stopTimer();
    timer = setInterval(() => {
      timeRemaining -= 1;
      if (timeRemaining <= 0) { timeRemaining = 0; submit(); }
    }, 1000);
  }

  function selectAnswer(questionId: string, optionIndex: number) {
    answers = { ...answers, [questionId]: optionIndex };
    persistDraft();
  }

  function goPrev() {
    if (!isFirstSection) { currentSection -= 1; persistDraft(); }
  }
  function goNext() {
    if (!isLastSection) { currentSection += 1; persistDraft(); }
  }
  function jumpTo(index: number) {
    currentSection = index;
    persistDraft();
  }

  function requestSubmit() {
    showConfirm = true;
  }
  function cancelSubmit() {
    showConfirm = false;
  }

  function submit() {
    stopTimer();
    const durationSeconds = startedAt ? Math.round((Date.now() - startedAt) / 1000) : undefined;
    const r = computeExamResult(paper, answers, durationSeconds);
    result = r;
    saveAttempt({
      paperId: paper.id,
      level: paper.level,
      startedAt,
      finishedAt: Date.now(),
      answers: { ...answers },
      result: r
    });
    clearExamDraft(paper.id);
    showConfirm = false;
    phase = 'result';
  }

  function retake() {
    stopTimer();
    result = null;
    answers = {};
    currentSection = 0;
    timeRemaining = paper.durationMinutes * 60;
    phase = 'intro';
  }

  onMount(() => {
    hydrated = true;
    resumable = getExamDraft(paper.id) !== null;
  });
  onDestroy(stopTimer);
</script>

<div class="runner" data-ready={hydrated}>
  {#if phase === 'intro'}
    <!-- Intro / start screen -->
    <div class="intro">
      <Badge variant="secondary" class="font-bold mb-2">{paper.level}</Badge>
      <h1 class="intro__title">{paper.title}</h1>
      <div class="intro__meta">
        <span>{totalQuestions} questions</span>
        <span aria-hidden="true">·</span>
        <span>{paper.durationMinutes} min</span>
      </div>

      <ul class="intro__sections">
        {#each paper.sections as s, i (i)}
          <li>
            <span class="intro__sec-label">{sectionTypeLabel(s.type)}</span>
            <span class="intro__sec-title" style="font-family: var(--font-japanese)">{s.title}</span>
            <span class="intro__sec-count">{s.questions.length} questions</span>
          </li>
        {/each}
      </ul>

      {#if paper.source?.name}
        <p class="intro__source">
          Source: {[paper.source.name, paper.source.license].filter(Boolean).join(' · ')}
        </p>
      {/if}

      <div class="intro__actions">
        {#if resumable}<Button size="lg" onclick={resume}>Resume in-progress exam</Button>{/if}
        <Button size="lg" onclick={start}>Start exam</Button>
        <a class="intro__back" href="{base}/exams">Back to list</a>
      </div>
      <p class="intro__hint">Submits automatically when time runs out. Need ≥ 60% to pass.</p>
    </div>
  {:else if phase === 'result' && result}
    <ExamResultView {paper} {result} {answers} onretake={retake} />
  {:else}
    <!-- Running -->
    <div class="topbar">
      <div
        class="timer {lowTime ? 'timer--low' : ''}"
        role="timer"
        aria-live="off"
        aria-label="Time remaining"
      >
        <Clock size={16} aria-hidden="true" />
        <span class="timer__value">{minutes}:{seconds.toString().padStart(2, '0')}</span>
      </div>
      <div class="topbar__progress">
        <Progress value={answeredCount} max={totalQuestions} class="h-2" />
        <span class="topbar__count">{answeredCount}/{totalQuestions} answered</span>
      </div>
    </div>

    <!-- Section chips -->
    <div class="chips" role="tablist" aria-label="Exam sections">
      {#each paper.sections as s, i (i)}
        <button
          type="button"
          role="tab"
          aria-selected={i === currentSection}
          class="chip {i === currentSection ? 'chip--active' : ''}"
          onclick={() => jumpTo(i)}
        >
          {sectionTypeLabel(s.type)}
        </button>
      {/each}
    </div>

    <h2 class="section-title" style="font-family: var(--font-japanese)">{section.title}</h2>
    {#if section.instructions}
      <p class="section-instructions">{section.instructions}</p>
    {/if}

    <!-- Reading passages (shown once per section) -->
    {#if section.passages}
      {#each section.passages as psg (psg.id)}
        <div class="passage">
          <p class="passage__text" style="font-family: var(--font-japanese)">{psg.text}</p>
        </div>
      {/each}
    {/if}

    <!-- Questions -->
    <div class="questions">
      {#each section.questions as question, qi (question.id)}
        <ExamQuestionView
          {question}
          number={sectionStart[currentSection] + qi + 1}
          selected={answers[question.id]}
          onselect={(idx) => selectAnswer(question.id, idx)}
        />
      {/each}
    </div>

    <!-- Bottom nav -->
    <div class="nav">
      <Button variant="outline" onclick={goPrev} disabled={isFirstSection}>
        <ChevronLeft size={16} aria-hidden="true" /> Previous section
      </Button>
      {#if isLastSection}
        <Button onclick={requestSubmit}>Submit</Button>
      {:else}
        <Button onclick={goNext}>
          Next section <ChevronRight size={16} aria-hidden="true" />
        </Button>
      {/if}
    </div>

    {#if !isLastSection}
      <button type="button" class="submit-anywhere" onclick={requestSubmit}>
        Submit now
      </button>
    {/if}
  {/if}

  <!-- Submit confirmation -->
  {#if showConfirm}
    <div class="confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <div class="confirm">
        <h3 id="confirm-title" class="confirm__title">Submit exam?</h3>
        <p class="confirm__body">
          You've answered {answeredCount}/{totalQuestions} questions.
          {#if answeredCount < totalQuestions}
            Unanswered questions will be marked incorrect.
          {/if}
        </p>
        <div class="confirm__actions">
          <Button variant="secondary" onclick={cancelSubmit}>Keep going</Button>
          <Button onclick={submit}>Submit</Button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .runner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Intro */
  .intro {
    text-align: center;
    padding: 1.5rem 1rem;
  }
  .intro__title {
    margin: 0.25rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 800;
  }
  .intro__meta {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    font-size: 0.9rem;
    color: var(--color-muted-foreground);
    margin-bottom: 1.25rem;
  }
  .intro__sections {
    list-style: none;
    margin: 0 auto 1.25rem;
    padding: 0;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }
  .intro__sections li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 0.9rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
  }
  .intro__sec-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-primary);
    min-width: 64px;
  }
  .intro__sec-title {
    flex: 1;
    font-size: 0.9rem;
  }
  .intro__sec-count {
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
  }
  .intro__source {
    font-size: 0.75rem;
    color: var(--color-muted-foreground);
    margin-bottom: 1.25rem;
  }
  .intro__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .intro__back {
    font-size: 0.85rem;
    color: var(--color-muted-foreground);
    text-decoration: none;
  }
  .intro__back:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
  .intro__hint {
    margin-top: 1rem;
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
  }

  /* Topbar */
  .topbar {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 0.85rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    position: sticky;
    top: 4rem;
    z-index: 10;
  }
  .timer {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-weight: 700;
    color: var(--color-foreground);
    font-variant-numeric: tabular-nums;
  }
  .timer--low {
    color: var(--color-destructive);
  }
  .timer__value {
    min-width: 3.2rem;
  }
  .topbar__progress {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .topbar__count {
    font-size: 0.72rem;
    color: var(--color-muted-foreground);
  }

  /* Chips */
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .chip {
    padding: 0.35rem 0.85rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-muted-foreground);
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    cursor: pointer;
    transition:
      color 0.15s,
      border-color 0.15s,
      background 0.15s;
  }
  .chip:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  .chip--active {
    color: var(--color-primary-foreground);
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  .section-title {
    margin: 0.25rem 0 0;
    font-size: 1.15rem;
    font-weight: 700;
  }
  .section-instructions {
    margin: 0;
    font-size: 0.85rem;
    color: var(--color-muted-foreground);
  }
  .passage {
    padding: 0.9rem 1rem;
    background: var(--color-muted);
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;
  }
  .passage__text {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.8;
    white-space: pre-line;
  }
  .questions {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  /* Nav */
  .nav {
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
  }
  .submit-anywhere {
    align-self: center;
    background: none;
    border: none;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--color-muted-foreground);
    cursor: pointer;
    text-decoration: underline;
  }
  .submit-anywhere:hover {
    color: var(--color-primary);
  }

  /* Confirm overlay */
  .confirm-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: var(--color-overlay);
  }
  .confirm {
    width: 100%;
    max-width: 360px;
    padding: 1.5rem;
    background: var(--color-card);
    border-radius: var(--radius-surface);
    box-shadow: var(--shadow-lifted);
    text-align: center;
  }
  .confirm__title {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 800;
  }
  .confirm__body {
    margin: 0 0 1.25rem;
    font-size: 0.9rem;
    color: var(--color-muted-foreground);
  }
  .confirm__actions {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
  }
</style>
