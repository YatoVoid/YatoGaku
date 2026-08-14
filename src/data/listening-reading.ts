// Listening and reading resources, mapped by rough level.
// Every URL here was fetched and confirmed to return HTTP 200 during
// research (2026-08-14). erin.ne.jp (the domain in the original resource
// list) now returns "invalid URL"; The Japan Foundation moved the same
// Erin's Challenge content to erin.jpf.go.jp, confirmed via search and a
// live fetch, so that domain is used instead.
//
// Expanded in a later key result: NHK's "Easy Japanese" course is
// individually paginated (learn/list/1.html, 2.html, ...), not one
// single page; the first 5 lessons are listed individually below,
// titles taken from each lesson's own <h2> heading. Erin's Challenge
// likewise has individual lessons beyond lesson 1; lessons 2-5 added,
// titles taken from each page's own <title> tag.

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
  {
    id: 'nhk-easy-lesson-1',
    name: 'NHK Easy Japanese, Lesson 1: "I\'m Anna."',
    description: 'Self-introduction and the copula です, with audio.',
    url: 'https://www3.nhk.or.jp/nhkworld/lesson/english/learn/list/1.html',
    level: 'absolute-beginner',
    kind: 'listening-and-reading',
  },
  {
    id: 'nhk-easy-lesson-2',
    name: 'NHK Easy Japanese, Lesson 2: "What is this?"',
    description: 'Asking what something is, with audio.',
    url: 'https://www3.nhk.or.jp/nhkworld/lesson/english/learn/list/2.html',
    level: 'absolute-beginner',
    kind: 'listening-and-reading',
  },
  {
    id: 'nhk-easy-lesson-3',
    name: 'NHK Easy Japanese, Lesson 3: "Where is the restroom?"',
    description: 'Asking where something is, with audio.',
    url: 'https://www3.nhk.or.jp/nhkworld/lesson/english/learn/list/3.html',
    level: 'absolute-beginner',
    kind: 'listening-and-reading',
  },
  {
    id: 'nhk-easy-lesson-4',
    name: 'NHK Easy Japanese, Lesson 4: "I\'m home."',
    description: 'Everyday set phrases used entering and leaving the house, with audio.',
    url: 'https://www3.nhk.or.jp/nhkworld/lesson/english/learn/list/4.html',
    level: 'absolute-beginner',
    kind: 'listening-and-reading',
  },
  {
    id: 'nhk-easy-lesson-5',
    name: 'NHK Easy Japanese, Lesson 5: "They are my treasures."',
    description: 'Describing possessions with が, with audio.',
    url: 'https://www3.nhk.or.jp/nhkworld/lesson/english/learn/list/5.html',
    level: 'n5',
    kind: 'listening-and-reading',
  },
  {
    id: 'erin-lesson-02',
    name: "Erin's Challenge, Lesson 2",
    description: 'Video skit continuing the series, with subtitles and vocabulary notes.',
    url: 'https://www.erin.jpf.go.jp/en/lesson/02/',
    level: 'absolute-beginner',
    kind: 'listening',
  },
  {
    id: 'erin-lesson-03',
    name: "Erin's Challenge, Lesson 3",
    description: 'Video skit continuing the series, with subtitles and vocabulary notes.',
    url: 'https://www.erin.jpf.go.jp/en/lesson/03/',
    level: 'absolute-beginner',
    kind: 'listening',
  },
  {
    id: 'erin-lesson-04',
    name: "Erin's Challenge, Lesson 4",
    description: 'Video skit continuing the series, with subtitles and vocabulary notes.',
    url: 'https://www.erin.jpf.go.jp/en/lesson/04/',
    level: 'n5',
    kind: 'listening',
  },
  {
    id: 'erin-lesson-05',
    name: "Erin's Challenge, Lesson 5",
    description: 'Video skit continuing the series, with subtitles and vocabulary notes.',
    url: 'https://www.erin.jpf.go.jp/en/lesson/05/',
    level: 'n5',
    kind: 'listening',
  },
];
