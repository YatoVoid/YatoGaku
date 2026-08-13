/**
 * Course System Type Definitions
 * Defines the structure for multi-course support
 */

import type { LessonData } from './lesson';

export type CourseId = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';

export interface CourseMetadata {
  id: CourseId;
  title: string;           // "Minna no Nihongo", "N4 Core Lessons"
  description: string;      // Course description for home page
  level: string;           // "N5", "N4"
  lessonCount: number;     // 25
  icon: string;            // "📕", "📗"
  color: string;           // Semantic CSS token for course identity
}

export interface LessonMetadata {
  lessonNumber: number;
  title: string;
  vocabCount: number;
  grammarCount: number;
}

export interface Course {
  metadata: CourseMetadata;
  getLessonData: (lessonNumber: number) => LessonData | null;
  getAllLessons: () => LessonData[];
  getLessonMetadata: () => LessonMetadata[];
}
