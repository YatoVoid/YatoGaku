import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('Wave 3 shared quiz contract', () => {
  const frame = readFileSync('src/lib/components/quiz/QuizFrame.svelte', 'utf8');
  const summary = readFileSync('src/lib/components/quiz/QuizSummary.svelte', 'utf8');
  const quizRoutes = [
    'src/routes/quiz/[mode]/+page.svelte',
    'src/routes/hsk/[group]/quiz/[mode]/+page.svelte',
    'src/routes/kanji/[lesson]/quiz/[mode]/+page.svelte',
    'src/routes/kanji/radicals/[radicalId]/quiz/[mode]/+page.svelte',
    'src/routes/course/[courseId]/lesson/[id]/grammar-quiz/[mode]/+page.svelte'
  ].map((path) => readFileSync(path, 'utf8'));

  it('defines one progress, direction and shortcut frame', () => {
    expect(frame).toContain('<Progress');
    expect(frame).toContain('quiz-direction');
    expect(frame).toContain('aria-label="Shortcuts"');
  });

  it('defines an actionable shared result vocabulary', () => {
    expect(summary).toContain('Session Results');
    expect(summary).toContain('Review missed questions first');
  });

  it('migrates every learning quiz family to the shared frame', () => {
    for (const route of quizRoutes) {
      expect(route).toContain('QuizFrame');
      expect(route).not.toContain('ProgressBar');
    }
  });
});
