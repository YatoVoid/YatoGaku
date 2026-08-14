/**
 * SEO Metadata Tests
 * Verify app.html has proper meta tags and manifest.json is configured correctly
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const appHtml = readFileSync(join(__dirname, '../app.html'), 'utf-8');
const manifest = JSON.parse(readFileSync(join(__dirname, '../../static/manifest.json'), 'utf-8'));

describe('SEO Metadata — app.html', () => {
  it('should have default <title> tag', () => {
    expect(appHtml).toMatch(/<title>.*YatoGaku.*<\/title>/);
  });

  it('should have meta description', () => {
    expect(appHtml).toMatch(/<meta\s+name="description"\s+content="[^"]+"/);
  });

  it('should have og:title and og:description', () => {
    expect(appHtml).toMatch(/<meta\s+property="og:title"\s+content="[^"]+"/);
    expect(appHtml).toMatch(/<meta\s+property="og:description"\s+content="[^"]+"/);
  });

  it('should have og:image and og:type', () => {
    expect(appHtml).toMatch(/<meta\s+property="og:image"\s+content="[^"]+"/);
    expect(appHtml).toMatch(/<meta\s+property="og:type"\s+content="website"/);
  });

  it('should have twitter:card and twitter:title', () => {
    expect(appHtml).toMatch(/<meta\s+name="twitter:card"\s+content="summary_large_image"/);
    expect(appHtml).toMatch(/<meta\s+name="twitter:title"\s+content="[^"]+"/);
  });

  it('should have canonical URL', () => {
    expect(appHtml).toMatch(/<link\s+rel="canonical"\s+href="[^"]+"/);
  });

  it('should have lang="en"', () => {
    expect(appHtml).toMatch(/<html\s+lang="en"/);
  });
});

describe('SEO — manifest.json', () => {
  it('start_url should include base path', () => {
    expect(manifest.start_url).toContain('YatoGaku/apps/quiz');
  });

  it('theme_color should be consistent with app.html', () => {
    const themeColorInHtml = appHtml.match(/name="theme-color"\s+content="([^"]+)"/)?.[1];
    expect(manifest.theme_color).toBe(themeColorInHtml);
  });
});
