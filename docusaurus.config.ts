import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// apps/kana and apps/quiz are separately built static apps copied into
// build/apps/*, not Docusaurus routes. Docusaurus's broken-link checker
// validates any root-relative path against known routes regardless of
// whether it's used via `to` or `href`, so a plain '/apps/kana/' link
// fails the build. A fully-qualified URL (scheme + host) is treated as
// external and skips that check, so links to the sub-apps are built from
// this instead of a root-relative path.
const siteUrl = 'https://YatoVoid.github.io';
const siteBaseUrl = '/YatoGaku/';
const kanaAppUrl = `${siteUrl}${siteBaseUrl}apps/kana/`;
const quizAppUrl = `${siteUrl}${siteBaseUrl}apps/quiz/`;

const config: Config = {
  title: 'YatoGaku',
  tagline: 'A Japanese-learning site built on existing open source tools',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: siteBaseUrl,

  // GitHub pages deployment config.
  organizationName: 'YatoVoid',
  projectName: 'YatoGaku',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'YatoGaku',
      logo: {
        alt: 'YatoGaku Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/grammar-n5',
          position: 'left',
          label: 'Grammar',
        },
        {
          href: kanaAppUrl,
          position: 'left',
          label: 'Kana Practice',
        },
        {
          href: quizAppUrl,
          position: 'left',
          label: 'Quiz Practice',
        },
        {
          to: '/docs/listening-reading',
          position: 'left',
          label: 'Listening & Reading',
        },
        {
          to: '/docs/dictionary',
          position: 'left',
          label: 'Dictionary',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Grammar',
              to: '/docs/grammar-n5',
            },
            {
              label: 'Kana Practice',
              href: kanaAppUrl,
            },
            {
              label: 'Quiz Practice',
              href: quizAppUrl,
            },
            {
              label: 'Listening & Reading',
              to: '/docs/listening-reading',
            },
            {
              label: 'Dictionary',
              to: '/docs/dictionary',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Sources',
              to: '/docs/sources',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YatoGaku. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
