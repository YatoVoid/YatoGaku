/**
 * N1 Lessons - Central export for all N1 lesson data
 */

import { LESSON_01_DATA } from './lesson-01';
import { LESSON_02_DATA } from './lesson-02';
import { LESSON_03_DATA } from './lesson-03';
import { LESSON_04_DATA } from './lesson-04';
import { LESSON_05_DATA } from './lesson-05';
import { LESSON_06_DATA } from './lesson-06';
import { LESSON_07_DATA } from './lesson-07';
import { LESSON_08_DATA } from './lesson-08';
import { LESSON_09_DATA } from './lesson-09';
import { LESSON_10_DATA } from './lesson-10';
import { LESSON_11_DATA } from './lesson-11';
import { LESSON_12_DATA } from './lesson-12';
import { LESSON_13_DATA } from './lesson-13';
import { LESSON_14_DATA } from './lesson-14';
import { LESSON_15_DATA } from './lesson-15';

import type { LessonData } from '$lib/types';

export {
  LESSON_01_DATA, LESSON_02_DATA, LESSON_03_DATA, LESSON_04_DATA, LESSON_05_DATA,
  LESSON_06_DATA, LESSON_07_DATA, LESSON_08_DATA, LESSON_09_DATA, LESSON_10_DATA,
  LESSON_11_DATA, LESSON_12_DATA, LESSON_13_DATA, LESSON_14_DATA, LESSON_15_DATA
};

export function getLessonData(lessonNumber: number): LessonData | null {
  const lessons = getAllLessons();
  return lessons.find(lesson => lesson.lessonNumber === lessonNumber) || null;
}

export function getAllLessons(): LessonData[] {
  return [
    LESSON_01_DATA, LESSON_02_DATA, LESSON_03_DATA, LESSON_04_DATA, LESSON_05_DATA,
    LESSON_06_DATA, LESSON_07_DATA, LESSON_08_DATA, LESSON_09_DATA, LESSON_10_DATA,
    LESSON_11_DATA, LESSON_12_DATA, LESSON_13_DATA, LESSON_14_DATA, LESSON_15_DATA
  ];
}

export function getLessonMetadata() {
  return getAllLessons().map(lesson => ({
    lessonNumber: lesson.lessonNumber,
    title: lesson.title,
    vocabCount: lesson.vocabulary.length,
    grammarCount: lesson.grammar.length
  }));
}
