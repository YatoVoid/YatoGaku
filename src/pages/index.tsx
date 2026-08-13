import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  // apps/kana and apps/quiz are separately built static apps copied into
  // build/apps/*, not Docusaurus routes. A root-relative link to them
  // fails Docusaurus's broken-link build check, which validates any
  // root-relative path against known routes; a fully-qualified URL is
  // treated as external and skips that check.
  const kanaAppUrl = `${siteConfig.url}${siteConfig.baseUrl}apps/kana/`;
  const quizAppUrl = `${siteConfig.url}${siteConfig.baseUrl}apps/quiz/`;
  const entryPoints = [
    {
      label: 'Grammar',
      description: 'N5 grammar points, linking to Tae Kim, Imabi, and Tofugu.',
      href: '/docs/grammar-n5',
      internal: true,
    },
    {
      label: 'Kana Practice',
      description: 'Hiragana and katakana drilling.',
      href: kanaAppUrl,
      internal: false,
    },
    {
      label: 'Quiz Practice',
      description: 'Kanji, vocabulary, and grammar quizzes with spaced repetition.',
      href: quizAppUrl,
      internal: false,
    },
    {
      label: 'Sources',
      description: 'Which open source projects this site is built on, and why.',
      href: '/docs/sources',
      internal: true,
    },
  ];
  return (
    <Layout
      title={siteConfig.title}
      description="YatoGaku is a Japanese-learning site under construction, built on existing open source tools.">
      <main>
        <div className="container margin-vert--xl">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p>
            YatoGaku is a Japanese-learning site that aggregates existing
            open source learning tools instead of rebuilding them from
            scratch. It is under construction.
          </p>
          <div className={styles.entryGrid}>
            {entryPoints.map((entry) =>
              entry.internal ? (
                <Link key={entry.label} className={styles.entryCard} to={entry.href}>
                  <strong>{entry.label}</strong>
                  <span>{entry.description}</span>
                </Link>
              ) : (
                <a key={entry.label} className={styles.entryCard} href={entry.href}>
                  <strong>{entry.label}</strong>
                  <span>{entry.description}</span>
                </a>
              ),
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
