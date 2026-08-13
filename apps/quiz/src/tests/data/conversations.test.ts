/**
 * Tests for Conversation Pattern data
 */

import { describe, it, expect } from 'vitest';
import {
  getConversations,
  getAllConversations,
  getConversationById,
  N5_CONVERSATIONS,
  N4_CONVERSATIONS,
  N3_CONVERSATIONS,
  N2_CONVERSATIONS,
  N1_CONVERSATIONS,
} from '$lib/data/conversations';

describe('Conversation Data — counts', () => {
  it('N5 should have 15 patterns', () => {
    expect(N5_CONVERSATIONS.length).toBe(15);
  });

  it('N4 should have 20 patterns', () => {
    expect(N4_CONVERSATIONS.length).toBe(20);
  });

  it('N3 should have 25 patterns', () => {
    expect(N3_CONVERSATIONS.length).toBe(25);
  });

  it('N2 should have 25 patterns', () => {
    expect(N2_CONVERSATIONS.length).toBe(25);
  });

  it('N1 should have 25 patterns', () => {
    expect(N1_CONVERSATIONS.length).toBe(25);
  });

  it('total should be 110 patterns', () => {
    expect(getAllConversations().length).toBe(110);
  });
});

describe('getConversations()', () => {
  it('returns correct data for each level (case-insensitive)', () => {
    expect(getConversations('n5').length).toBe(15);
    expect(getConversations('N5').length).toBe(15);
    expect(getConversations('n4').length).toBe(20);
    expect(getConversations('n3').length).toBe(25);
    expect(getConversations('n2').length).toBe(25);
    expect(getConversations('n1').length).toBe(25);
  });

  it('returns empty array for unknown level', () => {
    expect(getConversations('n6')).toEqual([]);
    expect(getConversations('')).toEqual([]);
  });
});

describe('getConversationById()', () => {
  it('finds a pattern by id', () => {
    const conv = getConversationById('n5-conv-01');
    expect(conv).toBeDefined();
    expect(conv?.id).toBe('n5-conv-01');
  });

  it('returns undefined for unknown id', () => {
    expect(getConversationById('unknown-id')).toBeUndefined();
  });
});

describe('ConversationPattern structure', () => {
  const allConversations = getAllConversations();

  it('each pattern has required fields', () => {
    for (const conv of allConversations) {
      expect(conv.id, `${conv.id} missing id`).toBeTruthy();
      expect(conv.title, `${conv.id} missing title`).toBeTruthy();
      expect(conv.titleJp, `${conv.id} missing titleJp`).toBeTruthy();
      expect(conv.level, `${conv.id} missing level`).toBeTruthy();
      expect(conv.situation, `${conv.id} missing situation`).toBeTruthy();
      expect(Array.isArray(conv.patterns), `${conv.id} patterns not array`).toBe(true);
      expect(Array.isArray(conv.dialogue), `${conv.id} dialogue not array`).toBe(true);
    }
  });

  it('each pattern has at least 1 sentence pattern', () => {
    for (const conv of allConversations) {
      expect(conv.patterns.length, `${conv.id} has no patterns`).toBeGreaterThanOrEqual(1);
    }
  });

  it('each sentence pattern has required fields', () => {
    for (const conv of allConversations) {
      for (const pat of conv.patterns) {
        expect(pat.japanese, `${conv.id} pattern missing japanese`).toBeTruthy();
        expect(pat.kana, `${conv.id} pattern missing kana`).toBeTruthy();
        expect(pat.vietnamese, `${conv.id} pattern missing vietnamese`).toBeTruthy();
        expect(pat.memoryTip, `${conv.id} pattern missing memoryTip`).toBeTruthy();
      }
    }
  });

  it('each dialogue has at least 2 lines', () => {
    for (const conv of allConversations) {
      expect(conv.dialogue.length, `${conv.id} dialogue too short`).toBeGreaterThanOrEqual(2);
    }
  });

  it('each dialogue line has required fields', () => {
    for (const conv of allConversations) {
      for (const line of conv.dialogue) {
        expect(line.speaker, `${conv.id} dialogue line missing speaker`).toBeTruthy();
        expect(line.japanese, `${conv.id} dialogue line missing japanese`).toBeTruthy();
        expect(line.kana, `${conv.id} dialogue line missing kana`).toBeTruthy();
        expect(line.vietnamese, `${conv.id} dialogue line missing vietnamese`).toBeTruthy();
      }
    }
  });

  it('all ids are unique', () => {
    const ids = allConversations.map(c => c.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('level field matches expected format', () => {
    const validLevels = new Set(['N5', 'N4', 'N3', 'N2', 'N1']);
    for (const conv of allConversations) {
      expect(validLevels.has(conv.level), `${conv.id} has invalid level: ${conv.level}`).toBe(true);
    }
  });
});
