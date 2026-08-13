/**
 * N5 Course Metadata
 * Minna no Nihongo - Basic Japanese (JLPT N5)
 */

import type { CourseMetadata } from '$lib/types/course';

export const N5_METADATA: CourseMetadata = {
  id: 'n5',
  title: 'Minna no Nihongo',
  description: '25 lessons — Basic Japanese grammar and vocabulary (JLPT N5)',
  level: 'N5',
  lessonCount: 25,
  icon: '📕',
  color: 'var(--color-course-n5)'
};
