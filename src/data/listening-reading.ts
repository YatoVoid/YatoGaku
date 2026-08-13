// Listening and reading resources, mapped by rough level.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). erin.ne.jp (the domain in the original resource
// list) now returns "invalid URL"; The Japan Foundation moved the same
// Erin's Challenge content to erin.jpf.go.jp, confirmed via search and a
// live fetch, so that domain is used instead.

export interface ListeningReadingResource {
  id: string;
  name: string;
  description: string;
  url: string;
  level: 'absolute-beginner' | 'n5';
  kind: 'listening' | 'reading' | 'listening-and-reading';
}

export const listeningReadingResources: ListeningReadingResource[] = [
  {
    id: 'nhk-easy-japanese-grammar',
    name: 'NHK World Easy Japanese',
    description: 'Free audio and text grammar lessons from NHK World Radio Japan, aimed at absolute beginners.',
    url: 'https://www.nhk.or.jp/lesson/english/',
    level: 'absolute-beginner',
    kind: 'listening-and-reading',
  },
  {
    id: 'nhk-news-web-easy',
    name: 'NHK News Web Easy',
    description: 'Real NHK news articles rewritten in simplified Japanese with furigana, updated daily.',
    url: 'https://www3.nhk.or.jp/news/easy/',
    level: 'n5',
    kind: 'reading',
  },
  {
    id: 'erin-lesson-01',
    name: "Erin's Challenge, Lesson 1",
    description: 'Video skits following a foreign exchange student in Japan, with subtitles and vocabulary notes, produced by the Japan Foundation.',
    url: 'https://www.erin.jpf.go.jp/en/lesson/01/',
    level: 'absolute-beginner',
    kind: 'listening',
  },
  {
    id: 'erin-about',
    name: "Erin's Challenge overview",
    description: 'What the Erin video series covers and how the lesson library is organized, useful before picking a starting lesson.',
    url: 'https://www.erin.jpf.go.jp/en/about/',
    level: 'absolute-beginner',
    kind: 'listening',
  },
];
