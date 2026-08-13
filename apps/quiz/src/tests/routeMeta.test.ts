import { describe, expect, it } from 'vitest';
import { getRouteMeta, stripBase } from '$lib/navigation/routeMeta';

describe('Wave 2 route metadata', () => {
  it('strips the GitHub Pages base path safely', () => {
    expect(stripBase('/2026-Smart-Quiz/course/n5', '/2026-Smart-Quiz')).toBe('/course/n5');
    expect(stripBase('/2026-Smart-Quiz', '/2026-Smart-Quiz')).toBe('/');
  });

  it('provides course context and canonical breadcrumbs', () => {
    const meta = getRouteMeta('/course/n4/lesson/3/vocabulary');
    expect(meta).toMatchObject({ title: 'Từ vựng', courseId: 'n4', lessonId: 3, mode: 'workspace' });
    expect(meta.breadcrumbs.map((item) => item.label)).toEqual(['Trang chủ', 'Khóa học', 'N4', 'Bài 3', 'Từ vựng']);
  });

  it.each(['/quiz/flashcard', '/hsk/group-1/quiz/mc', '/kanji/1/quiz/typing', '/exams/n5-1', '/mock-test'])(
    'uses focused chrome for %s', (path) => expect(getRouteMeta(path).mode).toBe('focus')
  );

  it('maps primary destinations to stable active sections', () => {
    expect(getRouteMeta('/review').section).toBe('review');
    expect(getRouteMeta('/stats').section).toBe('progress');
    expect(getRouteMeta('/settings').section).toBe('settings');
    expect(getRouteMeta('/kanji').section).toBe('learn');
  });

  it('assigns every canonical route family a deliberate title', () => {
    for (const path of [
      '/', '/courses', '/course/n5', '/course/n5/lesson/1', '/course/n5/lesson/1/vocabulary',
      '/course/n5/lesson/1/grammar', '/course/n5/lesson/1/grammar-quiz/mixed', '/quiz/flashcard',
      '/results', '/vocab/n5', '/hsk', '/hsk/group-1', '/hsk/group-1/quiz/mc', '/kanji',
      '/kanji/1', '/kanji/1/reference', '/kanji/1/quiz/typing', '/kanji/radicals',
      '/kanji/radicals/人', '/kanji/radicals/人/quiz/mc', '/review', '/stats', '/settings',
      '/exams', '/exams/n5-1', '/mock-test', '/grammar-reference', '/alphabet', '/conversations',
      '/counters', '/premium', '/about'
    ]) expect(getRouteMeta(path).title, path).not.toBe('Smart Quiz');
  });
});
