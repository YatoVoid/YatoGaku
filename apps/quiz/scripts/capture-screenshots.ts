/**
 * Capture screenshots for quality reports.
 *
 * Usage:
 *   npx tsx scripts/capture-screenshots.ts                    → saves to screenshots/latest/
 *   npx tsx scripts/capture-screenshots.ts --label pr-123     → saves to screenshots/pr-123/
 *   npx tsx scripts/capture-screenshots.ts --label before-fix → saves to screenshots/before-fix/
 *   BASE_URL=http://... npx tsx scripts/capture-screenshots.ts --label prod → production capture
 *
 * Auto-detects if dev server is running. Starts one temporarily if needed.
 */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { exec, ChildProcess } from 'child_process';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse --label arg
const labelIdx = process.argv.indexOf('--label');
const label = labelIdx >= 0 ? process.argv[labelIdx + 1] : 'latest';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const SCREENSHOTS_ROOT = path.resolve(__dirname, '../../documents/04-quality/screenshots');
const OUT_DIR = path.join(SCREENSHOTS_ROOT, label);

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'courses', path: '/courses' },
  { name: 'course-detail', path: '/course/n5' },
  { name: 'lesson-menu', path: '/course/n5/lesson/1' },
  { name: 'vocabulary', path: '/course/n5/lesson/1/vocabulary' },
  { name: 'kanji', path: '/kanji' },
  { name: 'hsk', path: '/hsk' },
  { name: 'settings', path: '/settings' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];

const THEMES = ['light', 'dark'] as const;

function checkServer(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const req = http.get(url, () => resolve(true));
    req.on('error', () => resolve(false));
    req.setTimeout(2000, () => { req.destroy(); resolve(false); });
  });
}

async function startDevServer(): Promise<ChildProcess | null> {
  const isProd = BASE_URL.includes('github.io');
  if (isProd) return null;

  const isUp = await checkServer(BASE_URL);
  if (isUp) {
    console.log(`✓ Dev server already running at ${BASE_URL}\n`);
    return null;
  }

  console.log(`⏳ Dev server not running. Starting temporarily...`);
  const svelteDir = path.resolve(__dirname, '..');
  const child = exec(`npx vite dev --port 5173`, { cwd: svelteDir });

  // Wait for server to be ready
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 1000));
    if (await checkServer(BASE_URL)) {
      console.log(`✓ Dev server started at ${BASE_URL}\n`);
      return child;
    }
  }
  console.log(`✗ Failed to start dev server after 20s`);
  child.kill();
  return null;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`📸 Capturing to: ${label}/`);
  console.log(`🔗 Source: ${BASE_URL}`);

  // Also capture to latest/ if using a label
  const alsoLatest = label !== 'latest';
  const LATEST_DIR = path.join(SCREENSHOTS_ROOT, 'latest');
  if (alsoLatest) {
    fs.mkdirSync(LATEST_DIR, { recursive: true });
    console.log(`📸 Also updating: latest/`);
  }

  const devServer = await startDevServer();
  const browser = await chromium.launch();
  const isProd = BASE_URL.includes('github.io');

  for (const theme of THEMES) {
    for (const viewport of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        colorScheme: theme,
      });
      const page = await context.newPage();

      await page.addInitScript((isDark: boolean) => {
        localStorage.setItem('ui-store', JSON.stringify({ darkMode: isDark }));
      }, theme === 'dark');

      for (const p of PAGES) {
        const url = `${BASE_URL}${p.path}`;
        try {
          const waitUntil = isProd ? 'networkidle' : 'domcontentloaded';
          const timeout = isProd ? 30000 : 15000;

          await page.goto(url, { waitUntil, timeout });
          await page.evaluate((isDark: boolean) => {
            localStorage.setItem('ui-store', JSON.stringify({ darkMode: isDark }));
          }, theme === 'dark');
          await page.reload({ waitUntil, timeout });
          await page.waitForTimeout(isProd ? 1500 : 800);

          const filename = `${theme}-${viewport.name}.png`;

          // Save to label folder
          const pageDir = path.join(OUT_DIR, p.name);
          fs.mkdirSync(pageDir, { recursive: true });
          await page.screenshot({ path: path.join(pageDir, filename), fullPage: true });

          // Also save to latest/
          if (alsoLatest) {
            const latestPageDir = path.join(LATEST_DIR, p.name);
            fs.mkdirSync(latestPageDir, { recursive: true });
            await page.screenshot({ path: path.join(latestPageDir, filename), fullPage: true });
          }

          console.log(`  ✓ ${p.name}/${filename}`);
        } catch (e) {
          console.log(`  ✗ ${p.name}/${theme}-${viewport.name}: ${(e as Error).message}`);
        }
      }

      await context.close();
    }
  }

  await browser.close();
  if (devServer) devServer.kill();

  console.log(`\n✅ Screenshots saved to screenshots/${label}/`);
  if (alsoLatest) console.log(`✅ Also updated screenshots/latest/`);
}

main().catch(console.error);
