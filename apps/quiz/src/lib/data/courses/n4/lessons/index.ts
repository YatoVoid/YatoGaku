/**
 * N4 Lessons - Central export for all N4 lesson data
 * Allows tree-shaking and code splitting per lesson
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
import { LESSON_16_DATA } from './lesson-16';
import { LESSON_17_DATA } from './lesson-17';
import { LESSON_18_DATA } from './lesson-18';
import { LESSON_19_DATA } from './lesson-19';
import { LESSON_20_DATA } from './lesson-20';
import { LESSON_21_DATA } from './lesson-21';
import { LESSON_22_DATA } from './lesson-22';
import { LESSON_23_DATA } from './lesson-23';
import { LESSON_24_DATA } from './lesson-24';
import { LESSON_25_DATA } from './lesson-25';

import type { LessonData } from '$lib/types';

// Re-export all lessons
export {
  LESSON_01_DATA,
  LESSON_02_DATA,
  LESSON_03_DATA,
  LESSON_04_DATA,
  LESSON_05_DATA,
  LESSON_06_DATA,
  LESSON_07_DATA,
  LESSON_08_DATA,
  LESSON_09_DATA,
  LESSON_10_DATA,
  LESSON_11_DATA,
  LESSON_12_DATA,
  LESSON_13_DATA,
  LESSON_14_DATA,
  LESSON_15_DATA,
  LESSON_16_DATA,
  LESSON_17_DATA,
  LESSON_18_DATA,
  LESSON_19_DATA,
  LESSON_20_DATA,
  LESSON_21_DATA,
  LESSON_22_DATA,
  LESSON_23_DATA,
  LESSON_24_DATA,
  LESSON_25_DATA
};

/**
 * Get lesson by number
 */
export function getLessonData(lessonNumber: number): LessonData | null {
  const lessons = getAllLessons();
  return lessons.find(lesson => lesson.lessonNumber === lessonNumber) || null;
}

/**
 * Get all lessons as array (use sparingly - loads all data)
 */
export function getAllLessons(): LessonData[] {
  return [
    LESSON_01_DATA,
    LESSON_02_DATA,
    LESSON_03_DATA,
    LESSON_04_DATA,
    LESSON_05_DATA,
    LESSON_06_DATA,
    LESSON_07_DATA,
    LESSON_08_DATA,
    LESSON_09_DATA,
    LESSON_10_DATA,
    LESSON_11_DATA,
    LESSON_12_DATA,
    LESSON_13_DATA,
    LESSON_14_DATA,
    LESSON_15_DATA,
    LESSON_16_DATA,
    LESSON_17_DATA,
    LESSON_18_DATA,
    LESSON_19_DATA,
    LESSON_20_DATA,
    LESSON_21_DATA,
    LESSON_22_DATA,
    LESSON_23_DATA,
    LESSON_24_DATA,
    LESSON_25_DATA
  ];
}

/**
 * Get lesson metadata (lightweight - no vocab/grammar)
 */
export function getLessonMetadata() {
  return getAllLessons().map(lesson => ({
    lessonNumber: lesson.lessonNumber,
    title: lesson.title,
    vocabCount: lesson.vocabulary.length,
    grammarCount: lesson.grammar.length
  }));
}
