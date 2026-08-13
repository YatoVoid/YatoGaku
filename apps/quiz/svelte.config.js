import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      // Use a dedicated SPA-fallback filename (NOT index.html) so the
      // prerendered home page (`/` -> build/index.html) is not overwritten by
      // the neutral fallback shell. postbuild.js copies 200.html -> 404.html
      // for the GitHub Pages SPA deep-link fallback. Netlify/Vercel rewrite
      // unknown routes to /index.html (static files keep filesystem precedence,
      // so prerendered pages still serve directly).
      fallback: '200.html',
      precompress: true,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/YatoGaku/apps/quiz' : ''
    },
    alias: {
      '$lib': './src/lib',
      '$lib/*': './src/lib/*'
    }
  }
};

export default config;
