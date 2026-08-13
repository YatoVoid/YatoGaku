/**
 * Progress utilities — mastery calculation and lesson unlocking
 */

import type { ProgressState } from '$lib/types';
import { getCourse } from '$lib/data/courses';
import type { CourseId } from '$lib/types/course';

const MASTERY_THRESHOLD = 70;
const MASTERED_LEVEL = 3;

export function getLessonMastery(state: ProgressState, courseId: string, lessonNumber: number): number {
  const lesson = state.lessons?.[lessonNumber];
  if (!lesson) return 0;
  const items = Object.values(lesson.vocabProgress || {});
  if (items.length === 0) return 0;
  const mastered = items.filter(i => i.masteryLevel >= MASTERED_LEVEL).length;
  return Math.round((mastered / items.length) * 100);
}

export function isLessonUnlocked(_state: ProgressState, _courseId: string, _lessonNumber: number): boolean {
  // All lessons are always unlocked — no gating by mastery
  return true;
}

export function getNextLesson(state: ProgressState, courseId: string): number {
  const course = getCourse(courseId as CourseId);
  if (!course) return 1;
  const total = course.metadata.lessonCount;
  for (let i = 1; i <= total; i++) {
    if (getLessonMastery(state, courseId, i) < MASTERY_THRESHOLD) {
      return i;
    }
  }
  return total;
}

export function getCourseProgress(state: ProgressState, courseId: string): { completed: number; total: number; percentage: number } {
  const course = getCourse(courseId as CourseId);
  if (!course) return { completed: 0, total: 0, percentage: 0 };
  const total = course.metadata.lessonCount;
  let completed = 0;
  for (let i = 1; i <= total; i++) {
    if (getLessonMastery(state, courseId, i) >= MASTERY_THRESHOLD) completed++;
  }
  return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
}
