// N2 grammar points with links to existing outside explanations.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). No explanation text is rewritten here, only a
// one-line factual description, same rule as the N5/N4/N3 data files.
//
// Wasabi re-checked fresh again this session: still the same expired
// cert (Mar 17 2026) found in key results 2, 7, and 8. Still excluded.
//
// Note: the Imabi page for わけにはいかない is the same page already
// cited for わけではない in N3 (imabi.org covers all three わけ forms,
// わけではない/わけがない/わけにはいかない, on one page). Cited again
// here deliberately, since it genuinely covers this point too, not a
// copy-paste mistake.

import type {GrammarGroup} from './n5-grammar';

export const n2GrammarGroups: GrammarGroup[] = [
  {
    id: 'concession-reasoning',
    title: 'Concession and reasoning',
    points: [
      {
        id: 'nimo-kakawarazu',
        title: 'にもかかわらず (despite, in spite of)',
        description: 'Expresses that something happens despite a stated condition, a more formal "even though".',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/disregard-i/' }],
      },
      {
        id: 'karatoitte',
        title: 'からといって (just because...)',
        description: 'Denies that a stated reason is sufficient grounds for a conclusion, "just because X doesn\'t mean Y".',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/the-particle-%e3%81%8b%e3%82%89-ii/' }],
      },
      {
        id: 'mono-no',
        title: 'ものの (although)',
        description: 'A formal concessive, "although X, still Y", similar in function to のに but more literary.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/combination-particles-with-%e3%82%82%e3%81%ae/' }],
      },
    ],
  },
  {
    id: 'manner-degree',
    title: 'Manner, means, and degree',
    points: [
      {
        id: 'wo-tsuujite',
        title: 'を通して・を通じて (through, via)',
        description: 'Marks a means, channel, or period of time through which something happens.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/through-%e3%82%92%e9%80%9a%e3%81%98%e3%81%a6-%e3%82%92%e9%80%9a%e3%81%97%e3%81%a6/' }],
      },
      {
        id: 'ni-oujite',
        title: 'に応じて (according to, depending on)',
        description: 'Expresses that something changes or is determined in accordance with a varying factor.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/as-change/' }],
      },
      {
        id: 'ue-de',
        title: '上で (in the process of, on the occasion of)',
        description: 'Marks an action taken as a necessary step before, or in the course of, doing something else.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/occasion/' }],
      },
      {
        id: 'compare-contrast',
        title: 'に比べて・に引き換え・にもまして (comparison and contrast)',
        description: 'A set of formal expressions for comparing two things or emphasizing a contrast.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/compare-contrast/' }],
      },
    ],
  },
  {
    id: 'obligation-inevitability',
    title: 'Obligation and inevitability',
    points: [
      {
        id: 'wake-ni-wa-ikanai',
        title: 'わけにはいかない (cannot afford to)',
        description: 'Expresses that something cannot be done due to social, moral, or practical circumstances.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/' }],
      },
      {
        id: 'zaru-wo-enai',
        title: 'ざるを得ない (have no choice but to)',
        description: 'A formal expression for being forced into an action with no real alternative.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/%ef%bd%9e%e3%81%96%e3%82%8b%e3%82%92%e5%be%97%e3%81%aa%e3%81%84-%e3%82%84%e3%82%80%e3%82%92%e5%be%97%e3%81%aa%e3%81%84/' }],
      },
    ],
  },
  {
    id: 'register-and-nuance',
    title: 'Register and nuanced expressions',
    points: [
      {
        id: 'honorific-humble',
        title: 'Honorific and humble speech',
        description: 'The politeness level beyond plain and polite speech: elevating others (honorific) or lowering oneself (humble).',
        sources: [{ name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/honorific' }],
      },
      {
        id: 'advanced-volitional',
        title: 'Advanced volitional (まい, であろう)',
        description: 'Extended uses of the volitional form: negative volitional まい, and formal likelihood expressions.',
        sources: [{ name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/volitional2' }],
      },
      {
        id: 'immediate-events',
        title: 'が早いか・や否や・そばから (immediate sequence)',
        description: 'Expressions for one event happening the instant, or immediately after, another one does.',
        sources: [{ name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/immedate' }],
      },
      {
        id: 'covered-by',
        title: 'だらけ・まみれ・ずくめ (covered by)',
        description: 'Three expressions for being covered in or full of something, physical or abstract.',
        sources: [{ name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/covered' }],
      },
      {
        id: 'other-expressions',
        title: '思いきや・がてら・あげく (unexpected results, doing two things, negative outcome)',
        description: 'Three more nuanced expressions: an unexpected result, doing something while doing something else, and a bad outcome after effort.',
        sources: [{ name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/other' }],
      },
    ],
  },
];
