/**
 * Redirect /lessons to /course/n5
 * Maintains backward compatibility with old URLs
 */

import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

// Prerender this legacy redirect so it resolves as a static 301 instead of
// going through the SPA shell. The redirect target (/course/n5) is a dynamic
// route kept as SPA and is covered by the index.html fallback.
export const prerender = true;

export function load() {
  throw redirect(301, `${base}/course/n5`);
}
