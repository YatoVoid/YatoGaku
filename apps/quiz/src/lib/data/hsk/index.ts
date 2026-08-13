/**
 * HSK Vocabulary Index — Multi-level (HSK1-5)
 */

import type { HSKGroup } from '$lib/types/hsk';
import { HSK1_WORDS } from './hsk1';
import { HSK2_WORDS } from './hsk2';
import { HSK3_WORDS } from './hsk3';
import { HSK4_WORDS } from './hsk4';
import { HSK5_A } from './hsk5-a';
import { HSK5_B } from './hsk5-b';
import { HSK5_C } from './hsk5-c';
import { HSK5_D } from './hsk5-d';
import { HSK5_E } from './hsk5-e';

// HSK5 data (backward compatible export)
export const HSK5_DATA: HSKGroup[] = [
  { id: 'a', title: 'A – G', words: HSK5_A },
  { id: 'b', title: 'G – M', words: HSK5_B },
  { id: 'c', title: 'M – S', words: HSK5_C },
  { id: 'd', title: 'S – X', words: HSK5_D },
  { id: 'e', title: 'X – Z', words: HSK5_E },
];

// All levels
const HSK_ALL: Record<number, HSKGroup[]> = {
  1: [{ id: 'hsk1', title: 'HSK 1 — Cơ bản', words: HSK1_WORDS }],
  2: [{ id: 'hsk2', title: 'HSK 2 — Sơ cấp', words: HSK2_WORDS }],
  3: [{ id: 'hsk3', title: 'HSK 3 — Trung cấp', words: HSK3_WORDS }],
  4: [{ id: 'hsk4', title: 'HSK 4 — Trung cao cấp', words: HSK4_WORDS }],
  5: HSK5_DATA,
};

export interface HSKLevelMeta {
  level: number;
  title: string;
  wordCount: number;
  groupCount: number;
}

export function getHSKData(level: number): HSKGroup[] {
  return HSK_ALL[level] || [];
}

export function getAllHSKLevels(): HSKLevelMeta[] {
  return Object.entries(HSK_ALL).map(([level, groups]) => ({
    level: parseInt(level),
    title: groups[0]?.title || `HSK ${level}`,
    wordCount: groups.reduce((s, g) => s + g.words.length, 0),
    groupCount: groups.length,
  }));
}
