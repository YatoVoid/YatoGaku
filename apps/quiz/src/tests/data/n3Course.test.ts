/**
 * Tests for N3 Course Data
 * TDD: Write tests first, then implement
 */

import { describe, it, expect } from 'vitest';
import { getCourse, getAllCourses } from '$lib/data/courses';
import { isValidCourseId, parseCourseFromUrl } from '$lib/utils/courseUtils';

describe('N3 Course', () => {
  it('getCourse("n3") returns valid course', () => {
    const course = getCourse('n3' as any);
    expect(course).not.toBeNull();
    expect(course!.metadata.id).toBe('n3');
    expect(course!.metadata.level).toBe('N3');
  });

  it('N3 has at least 15 lessons', () => {
    const course = getCourse('n3' as any);
    expect(course).not.toBeNull();
    const lessons = course!.getAllLessons();
    expect(lessons.length).toBeGreaterThanOrEqual(15);
  });

  it('each N3 lesson has vocabulary and grammar', () => {
    const course = getCourse('n3' as any);
    expect(course).not.toBeNull();
    const lessons = course!.getAllLessons();
    for (const lesson of lessons) {
      expect(lesson.vocabulary.length).toBeGreaterThanOrEqual(10);
      expect(lesson.grammar.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('N3 metadata has correct fields', () => {
    const course = getCourse('n3' as any);
    expect(course).not.toBeNull();
    const meta = course!.metadata;
    expect(meta.title).toBeTruthy();
    expect(meta.description).toBeTruthy();
    expect(meta.lessonCount).toBeGreaterThanOrEqual(15);
    expect(meta.icon).toBeTruthy();
    expect(meta.color).toBeTruthy();
  });

  it('getAllCourses includes N3', () => {
    const courses = getAllCourses();
    const n3 = courses.find(c => c.metadata.id === 'n3' as any);
    expect(n3).toBeDefined();
  });

  it('isValidCourseId recognizes n3', () => {
    expect(isValidCourseId('n3')).toBe(true);
  });

  it('parseCourseFromUrl parses n3', () => {
    const params = new URLSearchParams('course=n3');
    expect(parseCourseFromUrl(params)).toBe('n3');
  });
});
