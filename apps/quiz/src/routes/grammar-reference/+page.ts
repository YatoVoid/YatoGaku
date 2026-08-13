// Grammar reference is static content — prerender to crawler-visible HTML at build time.
// Note: the pattern list is hydrated in onMount, so the prerendered HTML contains the
// page shell + static copy; the searchable list fills in client-side after hydration.
export const prerender = true;
