// Home page is static content — prerender to crawler-visible HTML at build time.
// See Wave 3 PR 3.1 (SEO prerender). Dynamic/stateful routes stay SPA via fallback.
export const prerender = true;
