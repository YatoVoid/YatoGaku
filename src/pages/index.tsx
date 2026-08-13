import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
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
          <p>
            See <Link to="/docs/sources">docs/SOURCES.md</Link> for the
            upstream projects and licenses this site is built on.
          </p>
        </div>
      </main>
    </Layout>
  );
}
