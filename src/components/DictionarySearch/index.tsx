import {useState} from 'react';
import type {FormEvent, ReactNode} from 'react';
import styles from './styles.module.css';

export default function DictionarySearch(): ReactNode {
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    const url = `https://jisho.org/search/${encodeURIComponent(trimmed)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Japanese or English word"
        aria-label="Dictionary search query"
      />
      <button className="button button--primary" type="submit">
        Search on Jisho
      </button>
    </form>
  );
}
