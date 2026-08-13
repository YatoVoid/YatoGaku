import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {n5GrammarGroups} from '@site/src/data/n5-grammar';
import type {GrammarPoint} from '@site/src/data/n5-grammar';
import {useTrackedItem} from '@site/src/hooks/useProgress';
import {isStorageAvailable} from '@site/src/utils/progress';
import styles from './styles.module.css';

function GrammarPointCard({point, available}: {point: GrammarPoint; available: boolean}): ReactNode {
  const {checked, toggle} = useTrackedItem('grammar', point.id);
  return (
    <div className={styles.point}>
      <label className={styles.pointHeader}>
        <input
          type="checkbox"
          checked={checked}
          disabled={!available}
          onChange={(e) => toggle(e.target.checked)}
        />
        <h3>{point.title}</h3>
      </label>
      <p>{point.description}</p>
      <p className={styles.links}>
        {point.sources.map((source, i) => (
          <span key={source.url}>
            {i > 0 && ' · '}
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.name}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}

export default function GrammarIndex(): ReactNode {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    setAvailable(isStorageAvailable());
  }, []);

  return (
    <div>
      {!available && (
        <p className={styles.unavailable}>
          Progress tracking isn&apos;t available in this browser, so the checkboxes below are disabled.
        </p>
      )}
      {n5GrammarGroups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h2>{group.title}</h2>
          {group.points.map((point) => (
            <GrammarPointCard key={point.id} point={point} available={available} />
          ))}
        </section>
      ))}
    </div>
  );
}
