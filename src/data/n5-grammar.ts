// N5 grammar points with links to existing outside explanations.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). No explanation text is rewritten here, only a
// one-line factual description of what the point covers, per the
// project's rule against restating existing grammar guides.
//
// Wasabi's grammar reference is not linked here: its site currently
// serves an expired TLS certificate (checked 2026-08-14), so no working
// URL could be verified. Revisit if that gets fixed.

export interface GrammarSource {
  name: 'Tae Kim' | 'Imabi' | 'Tofugu';
  url: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  description: string;
  sources: GrammarSource[];
}

export interface GrammarGroup {
  id: string;
  title: string;
  points: GrammarPoint[];
}

export const n5GrammarGroups: GrammarGroup[] = [
  {
    id: 'copula-and-sentences',
    title: 'The copula and basic sentences',
    points: [
      {
        id: 'copula-desu-da',
        title: 'です / だ (the copula)',
        description: 'Attaches to nouns and na-adjectives to state what something is, in polite (です) or plain (だ) speech.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/stateofbeing' },
          { name: 'Imabi', url: 'https://imabi.org/copular-sentences-i%e3%80%80%e3%82%b3%e3%83%94%e3%83%a5%e3%83%a9%e6%96%87%ef%bc%88%e6%99%ae%e9%80%9a%e4%bd%93%ef%bc%89/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/desu/' },
        ],
      },
      {
        id: 'copula-polite',
        title: '丁寧体 (polite speech with です/ます)',
        description: 'The polite speech style used with strangers, in business, and by default when starting out.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/copular-sentences-ii%e3%80%80%e3%82%b3%e3%83%94%e3%83%a5%e3%83%a9%e6%96%87%ef%bc%88%e4%b8%81%e5%af%a7%e4%bd%93%ef%bc%89/' },
        ],
      },
    ],
  },
  {
    id: 'particles',
    title: 'Particles',
    points: [
      {
        id: 'particle-wa',
        title: 'は (topic marker)',
        description: 'Marks the topic of the sentence, what the rest of the sentence is about.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/the-particle-wa-%e3%81%af-i-the-topic-contrast-marker/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-wa/' },
        ],
      },
      {
        id: 'particle-ga',
        title: 'が (subject marker)',
        description: 'Marks the grammatical subject of a sentence or clause.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/the-particle-ga-i%e3%80%80%e6%a0%bc%e5%8a%a9%e8%a9%9e%e3%80%8c%e3%81%8c%e3%80%8d%e2%91%a0/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-ga/' },
        ],
      },
      {
        id: 'particle-wo',
        title: 'を (direct object marker)',
        description: 'Marks the direct object, the thing a verb acts on.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/the-particle-wo-%e3%82%92-i/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-wo/' },
        ],
      },
      {
        id: 'particle-ni',
        title: 'に (location, direction, time)',
        description: 'Marks where something exists, where something is headed, or a point in time.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-ni/' },
        ],
      },
      {
        id: 'particle-de',
        title: 'で (location of an action, means)',
        description: 'Marks where an action takes place, or the means/method used to do something.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-de/' },
        ],
      },
      {
        id: 'particle-to',
        title: 'と (and, with, quotation)',
        description: 'Connects nouns as a complete list, marks who you did something with, or introduces a quote.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-to/' },
        ],
      },
      {
        id: 'particle-mo',
        title: 'も (also, too)',
        description: 'Replaces は or が to mean "also" or "too" for the marked word.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-mo/' },
        ],
      },
      {
        id: 'particle-no',
        title: 'の (noun modifier / possession)',
        description: 'Links two nouns, most commonly to show possession or description, similar to "of" or apostrophe-s.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-no-noun-modifier/' },
        ],
      },
      {
        id: 'particle-ka',
        title: 'か (question marker)',
        description: 'Added to the end of a sentence to turn it into a question.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/particle-ka/' },
        ],
      },
    ],
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    points: [
      {
        id: 'i-adjectives',
        title: 'い-adjectives',
        description: 'Adjectives ending in い that conjugate on their own, without needing です/だ to change tense.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/adjectives' },
          { name: 'Imabi', url: 'https://imabi.org/adjectives%e3%80%80%e5%bd%a2%e5%ae%b9%e8%a9%9e/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/i-adjective/' },
        ],
      },
      {
        id: 'na-adjectives',
        title: 'な-adjectives',
        description: 'Adjectives that behave like nouns and need な to directly modify a noun, and です/だ to state tense.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/na-adjective/' },
        ],
      },
    ],
  },
  {
    id: 'verb-basics',
    title: 'Verb basics and conjugation',
    points: [
      {
        id: 'verb-basics',
        title: 'Verb basics (dictionary form, groups)',
        description: 'How Japanese verbs are grouped (ru-verbs, u-verbs, irregular) and their base dictionary form.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/verbs' },
        ],
      },
      {
        id: 'masu-form',
        title: '〜ます (polite present/future)',
        description: 'The polite conjugated form used for present and future tense in polite speech.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/masu/' },
        ],
      },
      {
        id: 'te-form',
        title: 'て-form',
        description: 'A connecting verb form used to link actions in sequence, make requests, and build many other grammar patterns.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/te-form/' },
        ],
      },
      {
        id: 'ta-form-past',
        title: '〜た (plain past tense)',
        description: 'Puts a plain-form verb into the past tense.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/past_tense' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/verb-past-ta-form/' },
        ],
      },
      {
        id: 'nai-form-negative',
        title: '〜ない (plain negative)',
        description: 'Puts a plain-form verb into the negative.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/negativeverbs' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/verb-negative-nai-form/' },
        ],
      },
    ],
  },
  {
    id: 'questions',
    title: 'Questions',
    points: [
      {
        id: 'question-words',
        title: 'Question words (何・いつ・なぜ・どこ・だれ)',
        description: 'The core question words: what, when, why, where, who.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/question-words/' },
        ],
      },
    ],
  },
];
