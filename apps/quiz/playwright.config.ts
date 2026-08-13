import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './src/tests/e2e',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: [
    ['html'],
    ['list'],
    ...(process.env.CI ? [['github'] as any] : [])
  ],

  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: process.env.CI
      ? 'http://localhost:4173'  // Preview build in CI
      : 'http://localhost:5173', // Dev server locally

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Video on failure */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    // CI serves the real production build under its GitHub Pages base path
    // (`/2026-Smart-Quiz/`) via a small static server that mirrors the deployed
    // layout — `serve build -s` would expose the build at root, 404-ing the
    // base-prefixed asset URLs. See scripts/preview-server.mjs. Assumes
    // `npm run build` already ran (the pr-gate builds before E2E).
    command: process.env.CI
      ? 'node scripts/preview-server.mjs'
      : 'npm run dev',
    url: process.env.CI
      ? 'http://127.0.0.1:4173/2026-Smart-Quiz/'
      : 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
