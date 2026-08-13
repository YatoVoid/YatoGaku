/**
 * N2 Course Data Integrity Tests
 */
import { describe, it, expect } from 'vitest';

describe('N2 Course', () => {
  it('has valid metadata', async () => {
    const { N2_METADATA } = await import('$lib/data/courses/n2/metadata');
    expect(N2_METADATA.id).toBe('n2');
    expect(N2_METADATA.level).toBe('N2');
    expect(N2_METADATA.lessonCount).toBe(15);
    expect(N2_METADATA.icon).toBeTruthy();
    expect(N2_METADATA.color).toBeTruthy();
  });

  it('has 15 lessons', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n2/lessons');
    const lessons = getAllLessons();
    expect(lessons).toHaveLength(15);
  });

  it('each lesson has sufficient vocab (≥10)', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n2/lessons');
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      expect(lesson.vocabulary.length).toBeGreaterThanOrEqual(10);
    }
  });

  it('each lesson has grammar (≥3)', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n2/lessons');
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      expect(lesson.grammar.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('all vocab items have required fields', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n2/lessons');
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      for (const item of lesson.vocabulary) {
        expect(item.japanese).toBeTruthy();
        expect(item.kana).toBeTruthy();
        expect(item.vietnamese).toBeTruthy();
        expect(item.english).toBeTruthy();
        expect(['main', 'additional', 'kanji', 'supplementary']).toContain(item.type);
      }
    }
  });

  it('all grammar items have required fields', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n2/lessons');
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      for (const gram of lesson.grammar) {
        expect(gram.pattern).toBeTruthy();
        expect(gram.vietnamese).toBeTruthy();
        expect(gram.english).toBeTruthy();
        expect(gram.explanation).toBeTruthy();
        expect(gram.examples.length).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('is registered in course system', async () => {
    const { getCourse } = await import('$lib/data/courses');
    const course = getCourse('n2');
    expect(course).not.toBeNull();
    expect(course?.metadata.id).toBe('n2');
  });

  it('getLessonData returns correct lesson', async () => {
    const { getLessonData } = await import('$lib/data/courses/n2/lessons');
    const lesson = getLessonData(1);
    expect(lesson).not.toBeNull();
    expect(lesson?.lessonNumber).toBe(1);
  });

  it('getLessonMetadata returns all 15', async () => {
    const { getLessonMetadata } = await import('$lib/data/courses/n2/lessons');
    const meta = getLessonMetadata();
    expect(meta).toHaveLength(15);
    for (const m of meta) {
      expect(m.lessonNumber).toBeGreaterThanOrEqual(1);
      expect(m.vocabCount).toBeGreaterThanOrEqual(10);
      expect(m.grammarCount).toBeGreaterThanOrEqual(3);
    }
  });

  it('lesson numbers are sequential 1-15', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n2/lessons');
    const lessons = getAllLessons();
    for (let i = 0; i < 15; i++) {
      expect(lessons[i].lessonNumber).toBe(i + 1);
    }
  });
});
