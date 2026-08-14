// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import DictionarySearch from './index';

describe('DictionarySearch', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('opens a correctly encoded Jisho search URL when a query is submitted', () => {
    // jsdom's window.open exists as a function but is an unimplemented
    // stub that logs a "Not implemented" warning and returns undefined
    // (verified directly: it does not throw). Spying with a mock
    // implementation both silences that warning and lets the test
    // assert on how the component actually called it.
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<DictionarySearch />);

    const input = screen.getByLabelText('Dictionary search query');
    fireEvent.change(input, {target: {value: '食べる'}});
    fireEvent.click(screen.getByText('Search on Jisho'));

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(
      `https://jisho.org/search/${encodeURIComponent('食べる')}`,
      '_blank',
      'noopener,noreferrer',
    );
  });

  it('URL-encodes special characters in the query', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<DictionarySearch />);

    const input = screen.getByLabelText('Dictionary search query');
    fireEvent.change(input, {target: {value: 'a & b/c'}});
    fireEvent.click(screen.getByText('Search on Jisho'));

    expect(openSpy).toHaveBeenCalledWith(
      'https://jisho.org/search/a%20%26%20b%2Fc',
      '_blank',
      'noopener,noreferrer',
    );
  });

  it('does not open a search for an empty or whitespace-only query', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<DictionarySearch />);

    fireEvent.click(screen.getByText('Search on Jisho'));
    expect(openSpy).not.toHaveBeenCalled();

    const input = screen.getByLabelText('Dictionary search query');
    fireEvent.change(input, {target: {value: '   '}});
    fireEvent.click(screen.getByText('Search on Jisho'));
    expect(openSpy).not.toHaveBeenCalled();
  });
});
