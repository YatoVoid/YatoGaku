import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('layout spacing tokens', () => {
  const appCss = readFileSync('src/app.css', 'utf8');

  it('defines every semantic spacing token consumed by global layout CSS', () => {
    for (const token of ['xs', 'sm', 'md', 'lg', 'xl', 'touch']) {
      expect(appCss).toMatch(new RegExp(`--spacing-${token}:\\s*[^;]+;`));
    }
  });

  it('keeps shell spacing rules backed by existing tokens', () => {
    const tokenNames = new Set(
      [...appCss.matchAll(/--spacing-[a-z-]+(?=:)/g)].map(([token]) => token)
    );
    const tokenUses = [...appCss.matchAll(/var\((--spacing-[a-z-]+)\)/g)].map(
      ([, token]) => token
    );

    expect(tokenUses).not.toHaveLength(0);
    expect(tokenUses.filter((token) => !tokenNames.has(token))).toEqual([]);
  });

  it('does not reference undefined CSS custom properties', () => {
    const files = collectStyleFiles('src');
    const tokenDefinitions = new Set<string>();
    const tokenUses = new Map<string, Set<string>>();

    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      for (const [, token] of source.matchAll(/(?<![\w-])(--[a-zA-Z0-9-]+)\s*:/g)) {
        tokenDefinitions.add(token);
      }
      for (const [, token] of source.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)) {
        if (!tokenUses.has(token)) tokenUses.set(token, new Set());
        tokenUses.get(token)?.add(file);
      }
    }

    const missing = [...tokenUses.keys()]
      .filter((token) => !tokenDefinitions.has(token))
      .sort()
      .map((token) => ({
        token,
        files: [...(tokenUses.get(token) ?? [])].sort()
      }));

    expect(missing).toEqual([]);
  });
});

function collectStyleFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return collectStyleFiles(fullPath);
    return /\.(css|svelte)$/.test(entry.name) ? [fullPath] : [];
  });
}
