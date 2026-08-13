/**
 * Tests for About Page data
 */

import { describe, it, expect } from 'vitest';
import { getProjectInfo, getCommunityLinks } from '$lib/utils/communityUtils';

describe('About / Community', () => {
  it('getProjectInfo returns project description', () => {
    const info = getProjectInfo();
    expect(info.name).toBe('Smart Quiz');
    expect(info.description).toBeTruthy();
    expect(info.version).toBeTruthy();
  });

  it('getCommunityLinks has GitHub links', () => {
    const links = getCommunityLinks();
    expect(links.length).toBeGreaterThanOrEqual(2);
    const github = links.find(l => l.url.includes('github.com'));
    expect(github).toBeDefined();
  });

  it('getCommunityLinks has discussions and issues', () => {
    const links = getCommunityLinks();
    const types = links.map(l => l.type);
    expect(types).toContain('discussions');
    expect(types).toContain('issues');
  });
});
