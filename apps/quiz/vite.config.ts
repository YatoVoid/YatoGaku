import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Smart Quiz - Japanese & Chinese Learning',
        short_name: 'Smart Quiz',
        description: 'Master Japanese (JLPT) and Chinese (HSK) vocabulary with interactive quizzes',
        theme_color: '#8b4fe6',
        background_color: '#f4f4f8',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split lesson data into separate chunks
          if (id.includes('data/minna/lessons')) {
            return 'lesson-data';
          }
          // Split grammar data into separate chunks
          if (id.includes('data/minna/grammar')) {
            return 'grammar-data';
          }
          // Split HSK data into separate chunks
          if (id.includes('data/hsk')) {
            return 'hsk-data';
          }
          // Split large node_modules into vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    sourcemap: false,
    chunkSizeWarningLimit: 600
  },
  server: {
    port: 5173,
    strictPort: false
  }
});
