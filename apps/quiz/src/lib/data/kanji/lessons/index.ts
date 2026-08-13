/**
 * Central export for all kanji lesson data
 * Allows tree-shaking and code splitting per lesson
 */

import { KANJI_LESSON_01_DATA } from './kanji-lesson-01';
import { KANJI_LESSON_02_DATA } from './kanji-lesson-02';
import { KANJI_LESSON_03_DATA } from './kanji-lesson-03';
import { KANJI_LESSON_04_DATA } from './kanji-lesson-04';
import { KANJI_LESSON_05_DATA } from './kanji-lesson-05';
import { KANJI_LESSON_06_DATA } from './kanji-lesson-06';
import { KANJI_LESSON_07_DATA } from './kanji-lesson-07';
import { KANJI_LESSON_08_DATA } from './kanji-lesson-08';
import { KANJI_LESSON_09_DATA } from './kanji-lesson-09';
import { KANJI_LESSON_10_DATA } from './kanji-lesson-10';
import { KANJI_LESSON_11_DATA } from './kanji-lesson-11';
import { KANJI_LESSON_12_DATA } from './kanji-lesson-12';
import { KANJI_LESSON_13_DATA } from './kanji-lesson-13';
import { KANJI_LESSON_14_DATA } from './kanji-lesson-14';
import { KANJI_LESSON_15_DATA } from './kanji-lesson-15';
import { KANJI_LESSON_16_DATA } from './kanji-lesson-16';
import { KANJI_LESSON_17_DATA } from './kanji-lesson-17';
import { KANJI_LESSON_18_DATA } from './kanji-lesson-18';
import { KANJI_LESSON_19_DATA } from './kanji-lesson-19';
import { KANJI_LESSON_20_DATA } from './kanji-lesson-20';
import { KANJI_LESSON_21_DATA } from './kanji-lesson-21';
import { KANJI_LESSON_22_DATA } from './kanji-lesson-22';
import { KANJI_LESSON_23_DATA } from './kanji-lesson-23';
import { KANJI_LESSON_24_DATA } from './kanji-lesson-24';
import { KANJI_LESSON_25_DATA } from './kanji-lesson-25';

import type { KanjiLessonData } from '$lib/types';

// Re-export all lessons
export {
  KANJI_LESSON_01_DATA,
  KANJI_LESSON_02_DATA,
  KANJI_LESSON_03_DATA,
  KANJI_LESSON_04_DATA,
  KANJI_LESSON_05_DATA,
  KANJI_LESSON_06_DATA,
  KANJI_LESSON_07_DATA,
  KANJI_LESSON_08_DATA,
  KANJI_LESSON_09_DATA,
  KANJI_LESSON_10_DATA,
  KANJI_LESSON_11_DATA,
  KANJI_LESSON_12_DATA,
  KANJI_LESSON_13_DATA,
  KANJI_LESSON_14_DATA,
  KANJI_LESSON_15_DATA,
  KANJI_LESSON_16_DATA,
  KANJI_LESSON_17_DATA,
  KANJI_LESSON_18_DATA,
  KANJI_LESSON_19_DATA,
  KANJI_LESSON_20_DATA,
  KANJI_LESSON_21_DATA,
  KANJI_LESSON_22_DATA,
  KANJI_LESSON_23_DATA,
  KANJI_LESSON_24_DATA,
  KANJI_LESSON_25_DATA
};

// All available kanji lessons
const ALL_KANJI_LESSONS: KanjiLessonData[] = [
  KANJI_LESSON_01_DATA,
  KANJI_LESSON_02_DATA,
  KANJI_LESSON_03_DATA,
  KANJI_LESSON_04_DATA,
  KANJI_LESSON_05_DATA,
  KANJI_LESSON_06_DATA,
  KANJI_LESSON_07_DATA,
  KANJI_LESSON_08_DATA,
  KANJI_LESSON_09_DATA,
  KANJI_LESSON_10_DATA,
  KANJI_LESSON_11_DATA,
  KANJI_LESSON_12_DATA,
  KANJI_LESSON_13_DATA,
  KANJI_LESSON_14_DATA,
  KANJI_LESSON_15_DATA,
  KANJI_LESSON_16_DATA,
  KANJI_LESSON_17_DATA,
  KANJI_LESSON_18_DATA,
  KANJI_LESSON_19_DATA,
  KANJI_LESSON_20_DATA,
  KANJI_LESSON_21_DATA,
  KANJI_LESSON_22_DATA,
  KANJI_LESSON_23_DATA,
  KANJI_LESSON_24_DATA,
  KANJI_LESSON_25_DATA
];

// Helper function to get kanji lesson by number
export function getKanjiLessonData(lessonNumber: number): KanjiLessonData | null {
  return ALL_KANJI_LESSONS.find(lesson => lesson.lessonNumber === lessonNumber) || null;
}

// Get all kanji lessons as array
export function getAllKanjiLessons(): KanjiLessonData[] {
  return ALL_KANJI_LESSONS;
}

// Get kanji lesson metadata (lightweight - no kanji details)
export function getKanjiLessonMetadata() {
  return ALL_KANJI_LESSONS.map(lesson => ({
    lessonNumber: lesson.lessonNumber,
    title: lesson.title,
    kanjiCount: lesson.kanji.length,
    preview: lesson.kanji.slice(0, 5).map(k => k.character).join(' ')
  }));
}
