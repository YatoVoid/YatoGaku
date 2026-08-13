import type {ReactNode} from 'react';
import {n5GrammarGroups} from '@site/src/data/n5-grammar';
import styles from './styles.module.css';

export default function GrammarIndex(): ReactNode {
  return (
    <div>
      {n5GrammarGroups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h2>{group.title}</h2>
          {group.points.map((point) => (
            <div key={point.id} className={styles.point}>
              <h3>{point.title}</h3>
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
          ))}
        </section>
      ))}
    </div>
  );
}
