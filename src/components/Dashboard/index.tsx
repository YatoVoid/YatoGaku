import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {n5GrammarGroups} from '@site/src/data/n5-grammar';
import {n4GrammarGroups} from '@site/src/data/n4-grammar';
import {n3GrammarGroups} from '@site/src/data/n3-grammar';
import {listeningReadingResources} from '@site/src/data/listening-reading';
import {useCategoryProgress} from '@site/src/hooks/useProgress';
import {isStorageAvailable} from '@site/src/utils/progress';
import styles from './styles.module.css';

const allN5GrammarIds = n5GrammarGroups.flatMap((group) => group.points.map((p) => p.id));
const allN4GrammarIds = n4GrammarGroups.flatMap((group) => group.points.map((p) => p.id));
const allN3GrammarIds = n3GrammarGroups.flatMap((group) => group.points.map((p) => p.id));
const allResourceIds = listeningReadingResources.map((r) => r.id);

function ProgressBar({done, total}: {done: number; total: number}): ReactNode {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <div className={styles.barTrack}>
      <div className={styles.barFill} style={{width: `${pct}%`}} />
    </div>
  );
}

export default function Dashboard(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const kanaAppUrl = `${siteConfig.url}${siteConfig.baseUrl}apps/kana/`;
  const quizAppUrl = `${siteConfig.url}${siteConfig.baseUrl}apps/quiz/`;

  const n5Grammar = useCategoryProgress('grammar', allN5GrammarIds);
  const n4Grammar = useCategoryProgress('grammar-n4', allN4GrammarIds);
  const n3Grammar = useCategoryProgress('grammar-n3', allN3GrammarIds);
  const listeningReading = useCategoryProgress('listening-reading', allResourceIds);

  const [available, setAvailable] = useState(false);
  useEffect(() => {
    setAvailable(isStorageAvailable());
  }, []);

  return (
    <div>
      {!available && (
        <p className={styles.unavailable}>
          Progress tracking isn&apos;t available in this browser, so the counts below will always show 0.
        </p>
      )}
      <div className={styles.section}>
        <h2>
          N5 grammar: {n5Grammar.done} / {n5Grammar.total}
        </h2>
        <ProgressBar done={n5Grammar.done} total={n5Grammar.total} />
        <Link to="/docs/grammar-n5">Continue N5 grammar</Link>
      </div>
      <div className={styles.section}>
        <h2>
          N4 grammar: {n4Grammar.done} / {n4Grammar.total}
        </h2>
        <ProgressBar done={n4Grammar.done} total={n4Grammar.total} />
        <Link to="/docs/grammar-n4">Continue N4 grammar</Link>
      </div>
      <div className={styles.section}>
        <h2>
          N3 grammar: {n3Grammar.done} / {n3Grammar.total}
        </h2>
        <ProgressBar done={n3Grammar.done} total={n3Grammar.total} />
        <Link to="/docs/grammar-n3">Continue N3 grammar</Link>
      </div>
      <div className={styles.section}>
        <h2>
          Listening & reading: {listeningReading.done} / {listeningReading.total}
        </h2>
        <ProgressBar done={listeningReading.done} total={listeningReading.total} />
        <Link to="/docs/listening-reading">Continue listening & reading</Link>
      </div>
      <div className={styles.section}>
        <h2>Kana and quiz practice</h2>
        <p>
          Kana Practice and Quiz Practice are separate apps with their own
          built-in progress tracking, not reflected in the counts above.
        </p>
        <p>
          <a href={kanaAppUrl}>Kana Practice</a> · <a href={quizAppUrl}>Quiz Practice</a>
        </p>
      </div>
    </div>
  );
}
