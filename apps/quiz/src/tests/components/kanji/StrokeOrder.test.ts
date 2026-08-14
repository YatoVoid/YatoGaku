/**
 * Tests for StrokeOrder component
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import StrokeOrder from '$lib/components/kanji/StrokeOrder.svelte';

describe('StrokeOrder', () => {
  it('should render container element', () => {
    const { container } = render(StrokeOrder, { props: { character: '一' } });
    expect(container.querySelector('.stroke-order')).toBeInTheDocument();
  });

  it('should show stroke counter', () => {
    const { container } = render(StrokeOrder, { props: { character: '一' } });
    expect(container.querySelector('.stroke-info')).toBeInTheDocument();
  });

  it('should have Play button with aria-label', () => {
    const { container } = render(StrokeOrder, { props: { character: '一' } });
    expect(container.querySelector('[aria-label="Play stroke order"]')).toBeInTheDocument();
  });

  it('should have speed control with 3 options', () => {
    const { container } = render(StrokeOrder, { props: { character: '一' } });
    const speedBtns = container.querySelectorAll('.speed-btn');
    expect(speedBtns.length).toBe(3);
  });

  it('should have step forward button', () => {
    const { container } = render(StrokeOrder, { props: { character: '一' } });
    expect(container.querySelector('[aria-label="Next stroke"]')).toBeInTheDocument();
  });

  it('should have step back button', () => {
    const { container } = render(StrokeOrder, { props: { character: '一' } });
    expect(container.querySelector('[aria-label="Previous stroke"]')).toBeInTheDocument();
  });

  it('should show fallback for invalid character', () => {
    const { container } = render(StrokeOrder, { props: { character: '🎉' } });
    expect(container.textContent).toMatch(/not available|loading/i);
  });

  it('should accept autoPlay prop', () => {
    const { container } = render(StrokeOrder, { props: { character: '一', autoPlay: true } });
    expect(container.querySelector('.stroke-order')).toBeInTheDocument();
  });

  it('should accept size prop', () => {
    const { container } = render(StrokeOrder, { props: { character: '一', size: 200 } });
    expect(container.querySelector('.stroke-order')).toBeInTheDocument();
  });
});
