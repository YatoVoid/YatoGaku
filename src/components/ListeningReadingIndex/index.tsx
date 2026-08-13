import type {ReactNode} from 'react';
import {listeningReadingResources} from '@site/src/data/listening-reading';
import styles from './styles.module.css';

const levelLabels: Record<string, string> = {
  'absolute-beginner': 'Absolute beginner',
  n5: 'N5',
};

const kindLabels: Record<string, string> = {
  listening: 'Listening',
  reading: 'Reading',
  'listening-and-reading': 'Listening & reading',
};

export default function ListeningReadingIndex(): ReactNode {
  const levels = Array.from(new Set(listeningReadingResources.map((r) => r.level)));
  return (
    <div>
      {levels.map((level) => (
        <section key={level} className={styles.group}>
          <h2>{levelLabels[level] ?? level}</h2>
          {listeningReadingResources
            .filter((r) => r.level === level)
            .map((resource) => (
              <div key={resource.id} className={styles.item}>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                <p className={styles.meta}>
                  {kindLabels[resource.kind] ?? resource.kind} ·{' '}
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </p>
              </div>
            ))}
        </section>
      ))}
    </div>
  );
}
