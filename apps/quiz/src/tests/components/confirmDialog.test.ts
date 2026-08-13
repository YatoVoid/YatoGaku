/**
 * Tests for ConfirmDialog component logic
 */

import { describe, it, expect } from 'vitest';

describe('AlertDialog', () => {
  it('exports required props interface', async () => {
    // Verify the module exports correctly
    const mod = await import('$lib/components/ui/alert-dialog');
    expect(mod.AlertDialog).toBeDefined();
  });
});

describe('No window.confirm usage', () => {
  it('progress store does not use window.confirm', async () => {
    const fs = await import('fs');
    const content = fs.readFileSync(
      'src/lib/stores/progress.ts',
      'utf-8'
    );
    expect(content).not.toContain('window.confirm');
    expect(content).not.toMatch(/\bconfirm\s*\(/);
  });
});

describe('No hardcoded hex colors in components', () => {
  it('PremiumGate has no hardcoded hex', async () => {
    const fs = await import('fs');
    const content = fs.readFileSync(
      'src/lib/components/common/PremiumGate.svelte',
      'utf-8'
    );
    // Allow hex in CSS var fallbacks like var(--x, #fff) but not standalone
    const styleBlock = content.match(/<style[^>]*>([\s\S]*?)<\/style>/)?.[1] || '';
    const lines = styleBlock.split('\n');
    for (const line of lines) {
      if (line.includes('var(')) continue; // skip CSS var fallbacks
      expect(line).not.toMatch(/:\s*#[0-9a-fA-F]{3,6}\b/);
    }
  });
});
