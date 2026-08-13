<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { KANGXI_RADICALS, getKanjiByRadical } from '$lib/data/kanji/radicals';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import SearchInput from '$lib/components/common/SearchInput.svelte';
  import UiButton from '$lib/components/ui/button/button.svelte';

  let searchTerm = '';
  let selectedRadical: string | null = null;

  $: query = browser ? ($page.url.searchParams.get('q') || '') : '';
  $: if (query) selectedRadical = query;

  $: filtered = searchTerm
    ? KANGXI_RADICALS.filter(r =>
        r.character.includes(searchTerm) ||
        r.meaningVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.meaningEn.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : KANGXI_RADICALS;

  $: kanjiList = selectedRadical ? getKanjiByRadical(selectedRadical) : [];
</script>

<svelte:head>
  <title>214 Bộ Thủ - Smart Quiz</title>
</svelte:head>

<PageWorkspace size="xl">
  <PageHero
    eyebrow="Kanji building blocks"
    title="214 Bộ Thủ"
    subtitle="Tra cứu Kangxi radicals để nhận diện cấu trúc chữ Hán nhanh hơn trước khi học Kanji theo bài."
    script="japanese"
  />

  <SearchInput bind:value={searchTerm} placeholder="Tìm bộ thủ theo chữ, nghĩa Việt hoặc English..." />

  {#if selectedRadical}
    <section class="grid gap-4 rounded-surface border border-border bg-card p-5" aria-label="Kanji chứa bộ thủ đã chọn">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.12em] text-primary">Đang chọn</p>
          <h2 class="font-japanese text-3xl font-bold text-foreground">{selectedRadical}</h2>
        </div>
        <UiButton variant="secondary" size="sm" onclick={() => selectedRadical = null}>Xem tất cả bộ thủ</UiButton>
      </div>

      <div class="flex flex-wrap gap-2">
        {#each kanjiList as k}
          <span class="font-japanese rounded-control bg-muted px-3 py-2 text-xl font-bold text-foreground">{k}</span>
        {/each}
        {#if kanjiList.length === 0}
          <p class="text-sm text-muted-foreground">Chưa có Kanji trong dữ liệu hiện tại.</p>
        {/if}
      </div>
    </section>
  {/if}

  <section class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" aria-label="Danh sách bộ thủ">
    {#each filtered as r}
      <a
        href="{base}/kanji/radicals/{encodeURIComponent(r.character)}"
        class="grid min-h-32 place-items-center gap-1 rounded-surface border border-border bg-card p-4 text-center text-foreground no-underline transition-[background,border-color,transform] hover:-translate-y-0.5 hover:border-primary hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        class:border-primary={selectedRadical === r.character}
        class:bg-primary-subtle={selectedRadical === r.character}
      >
        <span class="font-japanese text-4xl font-bold leading-none text-primary">{r.character}</span>
        <span class="text-xs font-bold">{r.meaningVi}</span>
        <span class="max-w-full truncate text-[0.7rem] text-muted-foreground">{r.meaningEn}</span>
        <span class="text-[0.65rem] text-muted-foreground">{r.strokeCount} nét</span>
      </a>
    {/each}
  </section>
</PageWorkspace>
