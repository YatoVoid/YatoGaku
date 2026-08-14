import {fileURLToPath} from 'node:url';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vitest/config';

// Docusaurus provides the @site alias (pointing at the repo root) at
// build/dev time; a standalone Vitest run needs the same alias since
// src/hooks/useProgress.ts imports through it. @docusaurus/Link and
// @docusaurus/useDocusaurusContext are real Docusaurus packages not
// resolvable outside a Docusaurus app at all (unlike @site, which is
// just a path alias); aliased to small local stubs so components that
// import them (e.g. Dashboard) can be transformed and mounted in tests,
// with vi.mock still able to override the stub's behavior per test.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@site': fileURLToPath(new URL('.', import.meta.url)),
      '@docusaurus/Link': fileURLToPath(new URL('./src/test-stubs/docusaurus-link.tsx', import.meta.url)),
      '@docusaurus/useDocusaurusContext': fileURLToPath(new URL('./src/test-stubs/docusaurus-use-context.ts', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
