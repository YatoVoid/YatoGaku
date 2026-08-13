<script lang="ts">
  import type { Snippet } from 'svelte';
  import { CheckCircle2, RotateCcw, Target } from 'lucide-svelte';

  interface Props {
    title?: string;
    score: number;
    total: number;
    message?: string;
    children: Snippet;
  }

  let { title = 'Hoàn thành phiên học', score, total, message, children }: Props = $props();
  let percentage = $derived(total > 0 ? Math.round((score / total) * 100) : 0);
  let recovery = $derived(message ?? (percentage >= 80
    ? 'Bạn đã nắm khá chắc. Tiếp tục bài kế tiếp khi sẵn sàng.'
    : 'Những câu sai chính là danh sách ôn tập tốt nhất cho lượt tiếp theo.'));
</script>

<section class="quiz-summary" aria-labelledby="summary-title">
  <div class="summary-icon" class:strong={percentage >= 80}>
    {#if percentage >= 80}<CheckCircle2 size={24} aria-hidden="true" />{:else}<Target size={24} aria-hidden="true" />{/if}
  </div>
  <p class="summary-eyebrow">Kết quả phiên học</p>
  <h1 id="summary-title">{title}</h1>
  <div class="score-line"><strong>{percentage}%</strong><span>{score}/{total} câu đúng</span></div>
  <p class="summary-message">{recovery}</p>
  <div class="summary-actions">{@render children()}</div>
  {#if percentage < 80}<p class="retry-note"><RotateCcw size={16} aria-hidden="true" /> Ưu tiên ôn lại câu sai trước khi làm lại toàn bộ.</p>{/if}
</section>

<style>
  .quiz-summary { width: min(100% - 2rem, 620px); margin: clamp(1rem, 5vw, 4rem) auto; padding: clamp(1.5rem, 5vw, 3rem); text-align: center; background: var(--color-card); border: 1px solid var(--color-border); border-radius: var(--radius-surface); }
  .summary-icon { width: 52px; height: 52px; display: grid; place-items: center; margin: 0 auto var(--spacing-md); color: var(--color-warning); background: var(--color-warning-subtle); border-radius: var(--radius-pill); }
  .summary-icon.strong { color: var(--color-success); background: var(--color-success-subtle); }
  .summary-eyebrow { margin: 0 0 4px; color: var(--color-muted-foreground); font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  h1 { margin: 0; font-size: clamp(1.35rem, 4vw, 1.8rem); }
  .score-line { display: grid; gap: 2px; margin: var(--spacing-lg) 0; }
  .score-line strong { color: var(--color-primary); font-size: clamp(2.5rem, 10vw, 4rem); line-height: 1; }
  .score-line span, .summary-message, .retry-note { color: var(--color-muted-foreground); }
  .summary-message { max-width: 48ch; margin: 0 auto var(--spacing-lg); line-height: 1.6; }
  .summary-actions { display: grid; gap: var(--spacing-sm); }
  .retry-note { display: flex; align-items: center; justify-content: center; gap: var(--spacing-xs); margin: var(--spacing-md) 0 0; font-size: .75rem; }
</style>
