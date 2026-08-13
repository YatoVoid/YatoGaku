/**
 * N1 Course Data Integrity Tests
 */
import { describe, it, expect } from 'vitest';

describe('N1 Course', () => {
  it('has valid metadata', async () => {
    const { N1_METADATA } = await import('$lib/data/courses/n1/metadata');
    expect(N1_METADATA.id).toBe('n1');
    expect(N1_METADATA.level).toBe('N1');
    expect(N1_METADATA.lessonCount).toBe(15);
    expect(N1_METADATA.icon).toBeTruthy();
    expect(N1_METADATA.color).toBeTruthy();
  });

  it('has 15 lessons', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n1/lessons');
    const lessons = getAllLessons();
    expect(lessons).toHaveLength(15);
  });

  it('each lesson has sufficient vocab (≥10)', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n1/lessons');
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      expect(lesson.vocabulary.length).toBeGreaterThanOrEqual(10);
    }
  });

  it('each lesson has grammar (≥3)', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n1/lessons');
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      expect(lesson.grammar.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('all vocab items have required fields', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n1/lessons');
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
    const { getAllLessons } = await import('$lib/data/courses/n1/lessons');
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
    const course = getCourse('n1');
    expect(course).not.toBeNull();
    expect(course?.metadata.id).toBe('n1');
  });

  it('getLessonData returns correct lesson', async () => {
    const { getLessonData } = await import('$lib/data/courses/n1/lessons');
    const lesson = getLessonData(1);
    expect(lesson).not.toBeNull();
    expect(lesson?.lessonNumber).toBe(1);
  });

  it('getLessonMetadata returns all 15', async () => {
    const { getLessonMetadata } = await import('$lib/data/courses/n1/lessons');
    const meta = getLessonMetadata();
    expect(meta).toHaveLength(15);
    for (const m of meta) {
      expect(m.lessonNumber).toBeGreaterThanOrEqual(1);
      expect(m.vocabCount).toBeGreaterThanOrEqual(10);
      expect(m.grammarCount).toBeGreaterThanOrEqual(3);
    }
  });

  it('lesson numbers are sequential 1-15', async () => {
    const { getAllLessons } = await import('$lib/data/courses/n1/lessons');
    const lessons = getAllLessons();
    for (let i = 0; i < 15; i++) {
      expect(lessons[i].lessonNumber).toBe(i + 1);
    }
  });
});
