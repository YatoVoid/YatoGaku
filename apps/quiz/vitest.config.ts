import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    exclude: [
      'node_modules',
      '.svelte-kit',
      'build',
      'dist',
      '.git',
      '.cache',
      'src/tests/e2e/**'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'json-summary', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'src/lib/data/**', // Generated data files
        '.svelte-kit/**'
      ],
      thresholds: {
        lines: 80,
        functions: 75,
        branches: 60,
        statements: 80
      }
    }
  },
  resolve: {
    alias: {
      '$lib': path.resolve(__dirname, './src/lib'),
      '$app': path.resolve(__dirname, './src/tests/__mocks__/$app')
    }
  }
});
