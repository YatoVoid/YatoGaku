import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {listeningReadingResources} from '@site/src/data/listening-reading';
import type {ListeningReadingResource} from '@site/src/data/listening-reading';
import {useTrackedItem} from '@site/src/hooks/useProgress';
import {isStorageAvailable} from '@site/src/utils/progress';
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

function ResourceCard({
  resource,
  available,
}: {
  resource: ListeningReadingResource;
  available: boolean;
}): ReactNode {
  const {checked, toggle} = useTrackedItem('listening-reading', resource.id);
  return (
    <div className={styles.item}>
      <label className={styles.itemHeader}>
        <input
          type="checkbox"
          checked={checked}
          disabled={!available}
          onChange={(e) => toggle(e.target.checked)}
        />
        <h3>{resource.name}</h3>
      </label>
      <p>{resource.description}</p>
      <p className={styles.meta}>
        {kindLabels[resource.kind] ?? resource.kind} ·{' '}
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </p>
    </div>
  );
}

export default function ListeningReadingIndex(): ReactNode {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    setAvailable(isStorageAvailable());
  }, []);

  const levels = Array.from(new Set(listeningReadingResources.map((r) => r.level)));
  return (
    <div>
      {!available && (
        <p className={styles.unavailable} role="status">
          Progress tracking isn&apos;t available in this browser, so the checkboxes below are disabled.
        </p>
      )}
      {levels.map((level) => (
        <section key={level} className={styles.group}>
          <h2>{levelLabels[level] ?? level}</h2>
          {listeningReadingResources
            .filter((r) => r.level === level)
            .map((resource) => (
              <ResourceCard key={resource.id} resource={resource} available={available} />
            ))}
        </section>
      ))}
    </div>
  );
}
