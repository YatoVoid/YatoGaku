/**
 * Central export for conversation pattern data
 */

import { N5_CONVERSATIONS } from './n5-conversations';
import { N4_CONVERSATIONS } from './n4-conversations';
import { N3_CONVERSATIONS } from './n3-conversations';
import { N2_CONVERSATIONS } from './n2-conversations';
import { N1_CONVERSATIONS } from './n1-conversations';
import type { ConversationPattern } from '$lib/types/lesson';

export { N5_CONVERSATIONS, N4_CONVERSATIONS, N3_CONVERSATIONS, N2_CONVERSATIONS, N1_CONVERSATIONS };

const ALL_CONVERSATIONS: Record<string, ConversationPattern[]> = {
  n5: N5_CONVERSATIONS,
  n4: N4_CONVERSATIONS,
  n3: N3_CONVERSATIONS,
  n2: N2_CONVERSATIONS,
  n1: N1_CONVERSATIONS,
};

export function getConversations(level: string): ConversationPattern[] {
  return ALL_CONVERSATIONS[level.toLowerCase()] || [];
}

export function getAllConversations(): ConversationPattern[] {
  return Object.values(ALL_CONVERSATIONS).flat();
}

export function getConversationById(id: string): ConversationPattern | undefined {
  return getAllConversations().find(c => c.id === id);
}
