import {fileURLToPath} from 'node:url';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vitest/config';

// Docusaurus provides the @site alias (pointing at the repo root) at
// build/dev time; a standalone Vitest run needs the same alias since
// src/hooks/useProgress.ts imports through it.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@site': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
