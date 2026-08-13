<script lang="ts">
  import { base } from '$app/paths';
  import { getProjectInfo, getCommunityLinks } from '$lib/utils/communityUtils';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';

  const info = getProjectInfo();
  const links = getCommunityLinks();
</script>

<svelte:head>
  <title>About - Smart Quiz</title>
</svelte:head>

<PageWorkspace size="md">
  <PageHero
    eyebrow={`v${info.version}`}
    title={info.name}
    subtitle={`${info.description} Ứng dụng offline-first: nội dung học và tiến trình cốt lõi nằm trên thiết bị; liên kết cộng đồng là phần trực tuyến tùy chọn.`}
  >
    {#snippet actions()}
      <img src="{base}/logo.svg" alt="Smart Quiz" height="32" />
    {/snippet}
  </PageHero>

  <Card class="mb-3">
    <CardHeader class="pb-2"><CardTitle class="text-sm">Features</CardTitle></CardHeader>
    <CardContent>
      <ul class="list-disc pl-5 text-sm leading-7">
        <li>Japanese JLPT N5-N1: Vocabulary, grammar, kanji with stroke order</li>
        <li>Chinese HSK 1-5: 2200+ words with pinyin + Vietnamese</li>
        <li>Quiz modes: Flashcard, multiple choice, typing, writing</li>
        <li>Spaced repetition (SRS) for long-term memory</li>
        <li>Offline-first: works without internet</li>
        <li>Custom Japanese fonts</li>
        <li>Dark mode + accessibility</li>
      </ul>
    </CardContent>
  </Card>

  <Card class="mb-3">
    <CardHeader class="pb-2"><CardTitle class="text-sm">Community</CardTitle></CardHeader>
    <CardContent>
      <div class="grid grid-cols-2 gap-2.5">
        {#each links as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 p-3 bg-muted rounded-lg border border-border text-sm text-foreground no-underline hover:border-primary transition-colors"
          >
            <span class="text-lg">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        {/each}
      </div>
    </CardContent>
  </Card>

  <Card class="mb-3">
    <CardHeader class="pb-2"><CardTitle class="text-sm">Credits</CardTitle></CardHeader>
    <CardContent>
      <ul class="list-disc pl-5 text-sm leading-7">
        <li><strong>Kanji Data:</strong> KANJIDIC2 (CC BY-SA 4.0), KanjiVG (CC BY-SA 3.0)</li>
        <li><strong>Radical Data:</strong> KRADFILE (EDRDG License)</li>
        <li><strong>Framework:</strong> SvelteKit 2 + TypeScript</li>
        <li><strong>Fonts:</strong> Google Fonts (Noto Sans JP, Noto Serif JP, Zen Maru Gothic)</li>
        <li><strong>Author:</strong> {info.author}</li>
        <li><strong>License:</strong> {info.license}</li>
      </ul>
    </CardContent>
  </Card>

  <a href="{base}/" class="inline-block mt-3 text-primary text-sm no-underline hover:underline">← Back to Home</a>
</PageWorkspace>
