import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const css = readFileSync('src/app.css', 'utf8');
const svelteSource = readdirSync('src', { recursive: true })
  .filter((file) => String(file).endsWith('.svelte'))
  .map((file) => readFileSync(join('src', String(file)), 'utf8'))
  .join('\n');

describe('Wave 1 design-system contract', () => {
  it('defines the complete semantic token families', () => {
    for (const token of [
      '--color-background', '--color-foreground', '--color-primary', '--color-success',
      '--font-japanese', '--font-chinese', '--spacing-touch', '--radius-control',
      '--radius-surface', '--shadow-lifted', '--z-modal', '--motion-standard',
      '--focus-ring-width'
    ]) expect(css).toContain(token);
  });

  it('defines a dark semantic color ramp', () => {
    const dark = css.match(/\.dark\s*\{([\s\S]*?)\}/)?.[1] ?? '';
    for (const token of ['--color-background', '--color-foreground', '--color-card', '--color-primary', '--color-border', '--color-ring']) {
      expect(dark).toContain(token);
    }
  });

  it('has retired duplicate common primitives', () => {
    for (const file of ['Button', 'Card', 'ProgressBar', 'Skeleton', 'Modal', 'Toast', 'ConfirmDialog']) {
      expect(existsSync(`src/lib/components/common/${file}.svelte`)).toBe(false);
    }
  });

  it('has no legacy button system or decorative entrance motion', () => {
    expect(css).not.toMatch(/\.btn(?:\s|\{|:|\.)/);
    expect(css).not.toContain('@keyframes');
    expect(svelteSource).not.toContain('transition-all');
    expect(svelteSource).not.toContain('class="btn ');
  });

  it('uses the documented Lucide size scale', () => {
    expect(svelteSource).not.toMatch(/size=\{(?:14|18|22)\}/);
  });

  it('keeps install surfaces aligned to the design palette', () => {
    const html = readFileSync('src/app.html', 'utf8');
    const manifest = JSON.parse(readFileSync('static/manifest.json', 'utf8'));
    const theme = html.match(/name="theme-color" content="([^"]+)"/)?.[1];
    expect(theme).toBe('#8b4fe6');
    expect(manifest.theme_color).toBe(theme);
    expect(manifest.background_color).toBe('#f4f4f8');
  });
});
