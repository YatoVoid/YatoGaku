// N4 grammar points with links to existing outside explanations.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). No explanation text is rewritten here, only a
// one-line factual description, same rule as src/data/n5-grammar.ts.
//
// Wasabi was re-checked this session, not assumed still broken from the
// N5 research: its TLS certificate is still expired (checked, expire
// date Mar 17 2026, confirmed via curl -v against the live cert), so it
// is excluded here for the same reason as N5.

import type {GrammarGroup} from './n5-grammar';

export const n4GrammarGroups: GrammarGroup[] = [
  {
    id: 'voice',
    title: 'Passive and causative',
    points: [
      {
        id: 'passive',
        title: '〜られる (passive)',
        description: 'Marks that the subject has something done to it by someone or something else.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/the-passive/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/verb-passive-form-rareru/' },
        ],
      },
      {
        id: 'passive-suffering',
        title: '不可抗力の受身 (adversative passive)',
        description: 'A passive form used to express being negatively affected by an event, even an intransitive one.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/the-passive-ii-%e4%b8%8d%e5%8f%af%e6%8a%97%e5%8a%9b%e3%81%ae%e5%8f%97%e8%ba%ab/' },
        ],
      },
      {
        id: 'causative',
        title: '〜させる (causative)',
        description: 'Marks that the subject makes or lets someone else do the action.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/causative' },
          { name: 'Imabi', url: 'https://imabi.org/the-causative-i-%ef%bd%9e%e3%81%95%e3%81%9b%e3%82%8b-%ef%bd%9e%e3%81%9b%e3%82%8b/' },
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/verb-causative-form-saseru/' },
        ],
      },
      {
        id: 'causative-passive',
        title: '使役受身 (causative-passive)',
        description: 'Combines causative and passive to express being made to do something against one’s will.',
        sources: [
          { name: 'Imabi', url: 'https://imabi.org/causative-passive/' },
        ],
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    points: [
      {
        id: 'conditional-overview',
        title: 'と・なら（ば）・たら・ば (conditional overview)',
        description: 'How the four main conditional forms differ and when each is used.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/conditional' },
          { name: 'Imabi', url: 'https://imabi.org/the-conditionals/' },
        ],
      },
      {
        id: 'conditional-ba',
        title: '〜ば (conditional)',
        description: 'A general-purpose conditional form, often used for general truths and advice.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/verb-conditional-form-ba/' },
        ],
      },
      {
        id: 'conditional-tara',
        title: '〜たら (conditional)',
        description: 'A conditional form also used for sequential time (“when/after”), the most flexible of the four.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/conditional-form-tara/' },
        ],
      },
      {
        id: 'conditional-to',
        title: 'と (conditional)',
        description: 'Marks a condition that leads to an inevitable or automatic result.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/verb-to/' },
        ],
      },
      {
        id: 'conditional-nara',
        title: 'なら (conditional)',
        description: 'A conditional based on a premise or topic already introduced, distinct from the other three.',
        sources: [
          { name: 'Tofugu', url: 'https://www.tofugu.com/japanese-grammar/conditional-form-nara/' },
        ],
      },
    ],
  },
  {
    id: 'requests-desire-obligation',
    title: 'Requests, desire, and obligation',
    points: [
      {
        id: 'giving-receiving',
        title: 'あげる・くれる・もらう (giving and receiving)',
        description: 'Verbs for giving and receiving, whose choice depends on who is giving to whom.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/favors' },
        ],
      },
      {
        id: 'try-temiru',
        title: '〜てみる (trying something)',
        description: 'Attach to a verb’s て-form to express trying an action out.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/try' },
        ],
      },
      {
        id: 'desire-tai',
        title: '〜たい・欲しい (desire)',
        description: 'Expresses wanting to do something, or wanting an object.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/desire' },
        ],
      },
      {
        id: 'must-have-to',
        title: '〜なければ・〜なくては (must, have to)',
        description: 'Double-negative constructions expressing obligation, "must do" something.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/must' },
        ],
      },
    ],
  },
  {
    id: 'describing-reasoning',
    title: 'Describing and reasoning',
    points: [
      {
        id: 'define-toiu',
        title: 'という (defining, quoting)',
        description: 'Used to define, rephrase, or quote something, one of the most common intermediate patterns.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/define' },
        ],
      },
      {
        id: 'easy-hard-to-do',
        title: '〜やすい・〜にくい (easy/hard to do)',
        description: 'Attach to a verb stem to say an action is easy or hard to perform.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/easyhard' },
        ],
      },
      {
        id: 'degrees-of-certainty',
        title: 'かもしれない・でしょう・はず (degrees of certainty)',
        description: 'A set of expressions for stating how certain something is, from possible to expected.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/certainty' },
        ],
      },
      {
        id: 'expressing-amount',
        title: '〜ぐらい・〜ほど (expressing amounts)',
        description: 'Approximate amount and degree expressions.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/amount' },
        ],
      },
      {
        id: 'hypothesizing-concluding',
        title: 'はず・わけ (hypothesizing and concluding)',
        description: 'Expressions for logical conclusions and expectations based on reasoning.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/reasoning' },
        ],
      },
      {
        id: 'casual-patterns-slang',
        title: 'Casual patterns and contractions',
        description: 'Common casual speech patterns and contractions (じゃん, ってば, なんか) heard in everyday Japanese.',
        sources: [
          { name: 'Tae Kim', url: 'https://guidetojapanese.org/learn/grammar/slang' },
        ],
      },
    ],
  },
];
