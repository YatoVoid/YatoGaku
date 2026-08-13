/**
 * Course Registry
 * Central registry for all available courses
 */

import type { Course, CourseId, CourseMetadata } from '$lib/types/course';
import { N5_METADATA } from './n5/metadata';
import { N4_METADATA } from './n4/metadata';
import { N3_METADATA } from './n3/metadata';
import { N2_METADATA } from './n2/metadata';
import { N1_METADATA } from './n1/metadata';
import * as n5Lessons from '../minna/lessons';
import * as n4Lessons from './n4/lessons';
import * as n3Lessons from './n3/lessons';
import * as n2Lessons from './n2/lessons';
import * as n1Lessons from './n1/lessons';

const COURSES: Record<CourseId, Course> = {
  n5: {
    metadata: N5_METADATA,
    getLessonData: n5Lessons.getLessonData,
    getAllLessons: n5Lessons.getAllLessons,
    getLessonMetadata: n5Lessons.getLessonMetadata
  },
  n4: {
    metadata: N4_METADATA,
    getLessonData: n4Lessons.getLessonData,
    getAllLessons: n4Lessons.getAllLessons,
    getLessonMetadata: n4Lessons.getLessonMetadata
  },
  n3: {
    metadata: N3_METADATA,
    getLessonData: n3Lessons.getLessonData,
    getAllLessons: n3Lessons.getAllLessons,
    getLessonMetadata: n3Lessons.getLessonMetadata
  },
  n2: {
    metadata: N2_METADATA,
    getLessonData: n2Lessons.getLessonData,
    getAllLessons: n2Lessons.getAllLessons,
    getLessonMetadata: n2Lessons.getLessonMetadata
  },
  n1: {
    metadata: N1_METADATA,
    getLessonData: n1Lessons.getLessonData,
    getAllLessons: n1Lessons.getAllLessons,
    getLessonMetadata: n1Lessons.getLessonMetadata
  }
};

/**
 * Get a specific course by ID
 */
export function getCourse(courseId: CourseId): Course | null {
  return COURSES[courseId] ?? null;
}

/**
 * Get all available courses
 */
export function getAllCourses(): Course[] {
  return Object.values(COURSES);
}

/**
 * Get metadata for a specific course
 */
export function getCourseMetadata(courseId: CourseId): CourseMetadata | null {
  return COURSES[courseId]?.metadata ?? null;
}

/**
 * Get all course metadata (lightweight)
 */
export function getAllCourseMetadata(): CourseMetadata[] {
  return Object.values(COURSES).map(course => course.metadata);
}
