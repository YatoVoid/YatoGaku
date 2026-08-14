// N1 grammar points with links to existing outside explanations.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). No explanation text is rewritten here, only a
// one-line factual description, same rule as the N5/N4/N3/N2 data files.
//
// Wasabi re-checked fresh again this session: same expired cert
// (Mar 17 2026) found in key results 2, 7, 8, and 11. Still excluded.
//
// Tofugu had no N1-level entries in its own grammar reference index
// (checked directly, not assumed); Tae Kim's guide likewise doesn't
// reach this far. All points here are from Imabi's Advanced tier
// (lessons 250-350), the only one of the three sources with real N1
// coverage. Only 14 points, not padded to a rounder number: every
// candidate was cross-checked against points already used at N5-N2 to
// avoid duplicating a grammar point already covered at an earlier
// level under a different label.

import type {GrammarGroup} from './n5-grammar';

export const n1GrammarGroups: GrammarGroup[] = [
  {
    id: 'disregard',
    title: 'Disregarding a factor',
    points: [
      {
        id: 'disregard-ii',
        title: 'によらず・（の）いかんにかかわらず (regardless of)',
        description: 'Formal expressions for something holding true regardless of a stated factor.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/disregard-ii/' }],
      },
      {
        id: 'disregard-iii',
        title: 'をものともせず・を顧みず・を押して (in defiance of)',
        description: 'Formal expressions for doing something in spite of an obstacle or without regard for consequences.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/disregard-iii/' }],
      },
      {
        id: 'disregard-iv',
        title: 'に構わず・をよそに・にもめげず (without concern for)',
        description: 'More formal expressions for acting without regard for a stated circumstance.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/disregard-iv/' }],
      },
    ],
  },
  {
    id: 'worth-limit-addition',
    title: 'Worth, limits, and addition',
    points: [
      {
        id: 'worth-and-extent',
        title: 'に足る・に値する・に及ぶ (worth, to the extent of)',
        description: 'Formal expressions for something being worth an action, or reaching a certain extent.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/worth-and-extent/' }],
      },
      {
        id: 'limit',
        title: '限り・に限って・とは限らない (limits and exceptions)',
        description: 'A family of expressions built on 限り for stating a limit, exception, or "not necessarily".',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/limit/' }],
      },
      {
        id: 'addition',
        title: 'に加えて・にとどまらず・はおろか (addition and "not to mention")',
        description: 'Formal expressions for adding a further point, or emphasizing that even a lesser case applies.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/addition/' }],
      },
    ],
  },
  {
    id: 'cant-help-it',
    title: 'Cannot help but',
    points: [
      {
        id: 'cant-help-i',
        title: 'ないではいられない (can\'t help but)',
        description: 'Expresses being unable to stop oneself from doing something.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/cant-help-i/' }],
      },
      {
        id: 'cant-help-ii',
        title: 'てならない・てやまない・にたえない (uncontrollable feeling)',
        description: 'Formal expressions for a feeling so strong it cannot be suppressed.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/cant-help-ii/' }],
      },
      {
        id: 'cant-help-iii',
        title: 'ないではすまない・を余儀なくされる・を禁じ得ない (no way around it)',
        description: 'Formal expressions for being forced into an outcome with no real alternative.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/cant-help-iii/' }],
      },
    ],
  },
  {
    id: 'negation-timing-comparison',
    title: 'Formal negation, timing, and comparison',
    points: [
      {
        id: 'more-negative-patterns',
        title: 'ないことには・なしに（は）・ことなく (formal negative patterns)',
        description: 'A set of formal negative constructions used mainly in written Japanese.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/negative-patterns/' }],
      },
      {
        id: 'advanced-beki',
        title: 'べからず・べく・べし (formal obligation and prohibition)',
        description: 'Classical-derived forms built on べき for formal written prohibition and obligation.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/advanced-%ef%bd%9e%e3%81%b9%e3%81%8d-phrases%ef%bd%9e%e3%81%b9%e3%81%8f%e3%82%82%e3%81%aa%e3%81%84-%ef%bd%9e%e3%81%b9%e3%81%8b%e3%82%89%e3%81%9a%e3%83%bb%e3%81%96%e3%82%8b-%ef%bd%9e%e3%81%b9/' }],
      },
      {
        id: 'as-soon-as-formal',
        title: 'や（いなや）・なり・次第 (the instant that, formal)',
        description: 'More formal alternatives to てすぐ for expressing one action immediately following another.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/as-soon-as/' }],
      },
      {
        id: 'considering',
        title: 'わりに（は）・にしては (considering, for what it is)',
        description: 'Expresses that something is surprising or notable given a stated baseline expectation.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/considering-%e3%82%8f%e3%82%8a%e3%81%ab%ef%bc%88%e3%81%af%ef%bc%89-%e3%81%ab%e3%81%97%e3%81%a6%e3%81%af/' }],
      },
      {
        id: 'fault',
        title: 'せいで・に託けて (blame and pretext)',
        description: 'Expresses attributing a bad result to a cause, or using something as an excuse.',
        sources: [{ name: 'Imabi', url: 'https://imabi.org/fault-%ef%bd%9e%e3%81%9b%e3%81%84%e3%81%a7-%ef%bd%9e%e3%81%ab%e3%81%8b%e3%81%93%e3%81%a4%e3%81%91%e3%81%a6/' }],
      },
    ],
  },
];
