/**
 * HSK (Hanyu Shuiping Kaoshi) vocabulary types
 * Chinese proficiency test vocabulary organized by groups
 */

export interface HSKWord {
  chinese: string;
  pinyin: string;
  vietnamese: string;
}

export interface HSKGroup {
  id: string;
  title: string;
  words: HSKWord[];
}

export const HSK_GROUPS: readonly string[] = ['a', 'b', 'c', 'd', 'e'] as const;
export type HSKGroupId = typeof HSK_GROUPS[number];
