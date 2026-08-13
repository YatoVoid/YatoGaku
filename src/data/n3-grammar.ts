// N3 grammar points with links to existing outside explanations.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). No explanation text is rewritten here, only a
// one-line factual description, same rule as the N5/N4 data files.
//
// Wasabi re-checked fresh again this session (curl -v against the live
// cert): still expired, same expire date as found in key result 7
// (Mar 17 2026). Still excluded.
//
// One point dropped rather than forced: ものだ (mono da). No working
// Imabi or Tofugu lesson page could be found for it in this session
// (an earlier fetch suggested an Imabi URL, but the page it actually
// points to is about こと, not ものだ; a follow-up search found no
// working Imabi or Tofugu lesson for it either). Left out rather than
// linking to the wrong page.

import type {GrammarGroup} from './n5-grammar';

export const n3GrammarGroups: GrammarGroup[] = [
  {
    id: 'certainty-emphasis',
    title: 'Certainty and emphasis',
    points: [
      {
        id: 'ni-chigainai',
        title: 'に違いない (must be, no doubt)',
        description: 'Expresses strong conviction that something must be true.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/no-doubt-that/' },
        ],
      },
      {
        id: 'wake-de-wa-nai',
        title: 'わけではない (it\'s not that...)',
        description: 'Softly denies a conclusion the listener might otherwise draw, "it\'s not that..."',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/' },
        ],
      },
      {
        id: 'sae',
        title: 'さえ (even)',
        description: 'Attaches to a noun or verb to express an extreme or minimum example, "even".',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/even' },
          { name: 'Imabi', url: 'https://imabi.org/the-particles-%e3%81%95%e3%81%88-%e3%81%99%e3%82%89-%e3%81%a0%e3%81%ab/' },
        ],
      },
      {
        id: 'hasazu-tendency-signs',
        title: 'っぽい・がち (tendencies, showing signs)',
        description: 'Expressions for describing a tendency toward something or visible signs of a state.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/tendency' },
        ],
      },
      {
        id: 'signs-of-something',
        title: '〜そう (showing signs of)',
        description: 'Attaches to a verb/adjective stem to describe visible signs that something is about to happen.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/signs' },
        ],
      },
    ],
  },
  {
    id: 'time-and-manner',
    title: 'Time and manner',
    points: [
      {
        id: 'tsutsu',
        title: '〜つつ (while, even though)',
        description: 'Attaches to a verb stem to mean "while doing" or, in some uses, "even though".',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/simultaneous-action-ii-the-particle-%e3%81%a4%e3%81%a4-vs-%e3%81%aa%e3%81%8c%e3%82%89/' },
        ],
      },
      {
        id: 'time-specific-actions',
        title: '〜たとたん・〜か〜ないかのうちに (time-specific actions)',
        description: 'Expressions for actions happening at a precise moment, "the instant that...".',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/timeactions' },
        ],
      },
      {
        id: 'similarity-hearsay',
        title: '〜らしい・〜みたい (similarity or hearsay)',
        description: 'Expressions for stating something seems to be the case, or was heard secondhand.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/similarity' },
        ],
      },
      {
        id: 'no-change',
        title: '〜まま (lack of change)',
        description: 'Expresses that a state remains unchanged while another action happens.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/nochange' },
        ],
      },
    ],
  },
  {
    id: 'register-and-formality',
    title: 'Register and formality',
    points: [
      {
        id: 'honorific-prefix',
        title: 'お・ご (honorific prefixes)',
        description: 'The honorific prefixes added to nouns to show politeness or respect.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/honorific-prefix-o-go/' },
        ],
      },
      {
        id: 'formal-expressions',
        title: 'Formal speech patterns',
        description: 'Sentence patterns used in formal, business, or written Japanese, beyond everyday polite speech.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/formal' },
        ],
      },
    ],
  },
  {
    id: 'comparison-degree-reasoning',
    title: 'Comparison, degree, and reasoning',
    points: [
      {
        id: 'comparison-ho-yoru',
        title: '方・よる (comparison, depending on)',
        description: 'Expressions for comparing options and for saying something depends on a factor.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/comparison' },
        ],
      },
      {
        id: 'negative-verbs-2',
        title: 'More negative verb patterns',
        description: 'Additional negative-form patterns beyond the basic 〜ない negation.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/negativeverbs2' },
        ],
      },
      {
        id: 'generic-nouns',
        title: 'こと・もの・の (generic nouns)',
        description: 'How generic nouns are used to nominalize clauses and build many common expressions.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/genericnouns' },
        ],
      },
      {
        id: 'non-feasibility',
        title: '〜っこない (expressing non-feasibility)',
        description: 'A casual, emphatic way to say something is impossible or won\'t happen.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/feasibility' },
        ],
      },
      {
        id: 'should-be-certain-way',
        title: '〜べき (things that should be a certain way)',
        description: 'Expresses what should or ought to be done, a matter of obligation or expectation.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/should' },
        ],
      },
    ],
  },
];
