import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('Wave 8 offline contract', () => {
  const layout = readFileSync('src/routes/+layout.svelte', 'utf8');
  const helper = readFileSync('src/lib/utils/pwa.ts', 'utf8');
  const html = readFileSync('src/app.html', 'utf8');

  it('registers the generated service worker from the root layout', () => {
    expect(layout).toMatch(/registerServiceWorker\(\)/);
    expect(helper).toContain('`${base}/sw.js`');
    expect(helper).toContain('scope: `${base}/`');
  });

  it('does not unregister offline support on every startup', () => {
    expect(html).not.toMatch(/getRegistrations|\.unregister\(/);
  });
});
