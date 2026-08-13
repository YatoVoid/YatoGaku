<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { ArrowLeft } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';

  export let href: string | undefined = undefined;
  export let showIcon = true;
  export let text = 'Back';
  export let variant: 'default' | 'overlay' = 'default';

  const HOME_PARENTS = new Set(['lesson', 'lessons', 'course', 'courses', 'quiz', 'results', 'alphabet', 'counters', 'grammar-reference', 'hsk', 'kanji']);
  const SKIP_SEGMENTS = new Set(['lesson', 'grammar-quiz']);

  function getParentPath(fullPathname: string): string {
    const routePath = fullPathname.startsWith(base) && base ? fullPathname.slice(base.length) || '/' : fullPathname;
    const parts = routePath.split('/').filter(Boolean);
    if (parts.length <= 1) return '/';
    if (parts.length === 2 && HOME_PARENTS.has(parts[0])) return '/';
    parts.pop();
    while (parts.length > 0 && SKIP_SEGMENTS.has(parts[parts.length - 1])) parts.pop();
    return parts.length > 0 ? '/' + parts.join('/') : '/';
  }

  function handleBack() {
    const target = href ?? getParentPath($page.url.pathname);
    goto(`${base}${target}`);
  }
</script>

<Button variant="outline" size="sm"
  class={variant === 'overlay' ? 'border-transparent bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25' : ''}
  onclick={handleBack} aria-label="Go back">
  {#if showIcon}<ArrowLeft class="size-4" strokeWidth={2} aria-hidden="true" />{/if}
  {#if text}<span class="back-text">{text}</span>{/if}
</Button>
