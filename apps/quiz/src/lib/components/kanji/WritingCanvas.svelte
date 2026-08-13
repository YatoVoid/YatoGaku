<script lang="ts">
  /**
   * WritingCanvas — Draw kanji on canvas
   * Touch + mouse support, undo, clear
   */

  import { onMount } from 'svelte';

  export let size = 250;
  export let character = '';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let drawing = false;
  let strokes: { x: number; y: number }[][] = [];
  let currentStroke: { x: number; y: number }[] = [];

  function canvasColor(token: string) {
    return getComputedStyle(canvas).getPropertyValue(token).trim();
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = canvasColor('--color-foreground');
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  });

  function getPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: (e as MouseEvent).clientX - rect.left, y: (e as MouseEvent).clientY - rect.top };
  }

  function startDraw(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    drawing = true;
    currentStroke = [getPos(e)];
  }

  function draw(e: MouseEvent | TouchEvent) {
    if (!drawing || !ctx) return;
    e.preventDefault();
    const pos = getPos(e);
    currentStroke.push(pos);
    redraw();
  }

  function endDraw() {
    if (!drawing) return;
    drawing = false;
    if (currentStroke.length > 1) {
      strokes = [...strokes, currentStroke];
    }
    currentStroke = [];
  }

  function redraw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, size, size);
    // Draw grid
    ctx.strokeStyle = canvasColor('--color-border');
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(size / 2, 0); ctx.lineTo(size / 2, size);
    ctx.moveTo(0, size / 2); ctx.lineTo(size, size / 2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Draw strokes
    ctx.strokeStyle = canvasColor('--color-foreground');
    ctx.lineWidth = 4;
    for (const stroke of [...strokes, currentStroke]) {
      if (stroke.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    }
  }

  export function clear() {
    strokes = [];
    currentStroke = [];
    if (ctx) ctx.clearRect(0, 0, size, size);
    redraw();
  }

  function undo() {
    strokes = strokes.slice(0, -1);
    redraw();
  }
</script>

<div class="writing-canvas">
  <canvas
    bind:this={canvas}
    width={size}
    height={size}
    aria-label={character ? `Vùng luyện viết Kanji ${character}` : 'Vùng luyện viết Kanji'}
    aria-describedby="canvas-alternative"
    on:mousedown={startDraw}
    on:mousemove={draw}
    on:mouseup={endDraw}
    on:mouseleave={endDraw}
    on:touchstart={startDraw}
    on:touchmove={draw}
    on:touchend={endDraw}
  ></canvas>
  <p id="canvas-alternative" class="canvas-alternative">
    {#if character}Mẫu cần viết: <strong>{character}</strong>.{/if}
    Canvas là bài luyện tùy chọn; người dùng bàn phím có thể học thứ tự nét trong phần mô tả nét. Đã vẽ {strokes.length} nét.
  </p>
  <div class="canvas-controls">
    <button class="ctrl-btn" on:click={undo} disabled={strokes.length === 0}>Undo</button>
    <button class="ctrl-btn" on:click={clear}>Clear</button>
  </div>
</div>

<style>
  .writing-canvas {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  canvas {
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-card);
    cursor: crosshair;
    touch-action: none;
  }

  .canvas-controls {
    display: flex;
    gap: 0.5rem;
  }

  .canvas-alternative { max-width: 42ch; margin: 0; color: var(--color-muted-foreground); font-size: .75rem; line-height: 1.5; text-align: center; }

  .ctrl-btn {
    min-height: 44px;
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
    font-family: inherit;
    font-weight: 500;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-card);
    color: var(--color-foreground);
    cursor: pointer;
    transition: background 0.15s;
  }

  .ctrl-btn:hover { background: var(--color-border); }
</style>
