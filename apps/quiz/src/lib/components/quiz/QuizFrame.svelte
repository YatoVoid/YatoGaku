<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Progress } from '$lib/components/ui/progress';
  import { Keyboard, Volume2 } from 'lucide-svelte';

  interface Props {
    title: string;
    context?: string;
    direction?: string;
    current: number;
    total: number;
    shortcuts?: string[];
    children: Snippet;
  }

  let { title, context, direction, current, total, shortcuts = [], children }: Props = $props();
  let percentage = $derived(total > 0 ? Math.round((current / total) * 100) : 0);
</script>

<section class="quiz-frame" aria-labelledby="quiz-frame-title">
  <header class="quiz-frame-header">
    <div class="quiz-frame-heading">
      {#if context}<p class="quiz-context">{context}</p>{/if}
      <h1 id="quiz-frame-title">{title}</h1>
      {#if direction}<p class="quiz-direction">{direction}</p>{/if}
    </div>
    <span class="quiz-count" aria-label={`Question ${current} of ${total}`}>{current}<span>/{total}</span></span>
  </header>

  <Progress value={current} max={total} label={`Progress ${percentage}%: question ${current} of ${total}`} />

  <div class="quiz-stage">{@render children()}</div>

  {#if shortcuts.length > 0}
    <footer class="shortcut-bar" aria-label="Shortcuts">
      <Keyboard size={16} aria-hidden="true" />
      {#each shortcuts as shortcut}<span>{shortcut}</span>{/each}
      {#if shortcuts.some((item) => item.includes('F1'))}<Volume2 size={16} aria-hidden="true" />{/if}
    </footer>
  {/if}
</section>

<style>
  .quiz-frame { width: min(100% - 2rem, 680px); margin: 0 auto; padding: clamp(1rem, 3vw, 2rem) 0 max(1rem, env(safe-area-inset-bottom)); }
  .quiz-frame-header { display: flex; align-items: flex-end; justify-content: space-between; gap: var(--spacing-md); margin-bottom: var(--spacing-md); }
  .quiz-frame-heading { min-width: 0; }
  .quiz-context { margin: 0 0 3px; color: var(--color-muted-foreground); font-size: .75rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
  h1 { margin: 0; font-size: clamp(1.15rem, 3vw, 1.5rem); line-height: 1.25; }
  .quiz-direction { margin: 4px 0 0; color: var(--color-muted-foreground); font-size: .8rem; }
  .quiz-count { flex: none; color: var(--color-foreground); font-size: 1.25rem; font-variant-numeric: tabular-nums; font-weight: 750; }
  .quiz-count span { color: var(--color-muted-foreground); font-size: .8rem; font-weight: 600; }
  .quiz-stage { min-height: min(520px, calc(100svh - 240px)); padding: clamp(1rem, 4vw, 2rem) 0; }
  .shortcut-bar { min-height: 40px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: var(--spacing-sm); color: var(--color-muted-foreground); border-top: 1px solid var(--color-border); font-size: .75rem; }
  .shortcut-bar span { padding: 2px 7px; background: var(--color-muted); border-radius: var(--radius-control); }
  @media (max-width: 520px) {
    .quiz-frame { width: min(100% - 1.25rem, 680px); }
    .quiz-stage { min-height: calc(100svh - 230px); padding-block: var(--spacing-md); }
    .shortcut-bar { position: sticky; bottom: 0; background: var(--color-background); }
  }
</style>
