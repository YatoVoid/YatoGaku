/**
 * Course Utility Functions
 * Helper functions for course navigation and URL handling
 */

import { base } from '$app/paths';
import type { CourseId } from '$lib/types/course';

/**
 * Build URL for a specific lesson in a course (includes base path)
 */
export function buildLessonUrl(courseId: CourseId, lessonNumber: number): string {
  return `${base}/course/${courseId}/lesson/${lessonNumber}`;
}

/**
 * Build URL for a quiz with course and lesson parameters (includes base path)
 */
export function buildQuizUrl(courseId: CourseId, mode: string, lessonNumber: number, direction?: string): string {
  const params = new URLSearchParams({ course: courseId, lesson: String(lessonNumber) });
  if (direction) params.set('direction', direction);
  return `${base}/quiz/${mode}?${params.toString()}`;
}

/**
 * Build URL for vocabulary page (includes base path)
 */
export function buildVocabularyUrl(courseId: CourseId, lessonNumber: number): string {
  return `${base}/course/${courseId}/lesson/${lessonNumber}/vocabulary`;
}

/**
 * Build URL for grammar page (includes base path)
 */
export function buildGrammarUrl(courseId: CourseId, lessonNumber: number): string {
  return `${base}/course/${courseId}/lesson/${lessonNumber}/grammar`;
}

/**
 * Parse course ID from URL search parameters
 * Defaults to 'n5' if not specified or invalid
 */
export function parseCourseFromUrl(searchParams: URLSearchParams): CourseId {
  const course = searchParams.get('course');
  return (course === 'n5' || course === 'n4' || course === 'n3' || course === 'n2' || course === 'n1') ? course : 'n5';
}

/**
 * Validate if a string is a valid CourseId
 */
export function isValidCourseId(courseId: string): courseId is CourseId {
  return courseId === 'n5' || courseId === 'n4' || courseId === 'n3' || courseId === 'n2' || courseId === 'n1';
}
