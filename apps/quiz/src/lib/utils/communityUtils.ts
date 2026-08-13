/**
 * Community & About Utilities
 */

export interface ProjectInfo {
  name: string;
  description: string;
  version: string;
  author: string;
  license: string;
}

export interface CommunityLink {
  type: 'discussions' | 'issues' | 'repo' | 'website';
  label: string;
  url: string;
  icon: string;
}

/**
 * Get project information
 */
export function getProjectInfo(): ProjectInfo {
  return {
    name: 'Smart Quiz',
    description: 'Bilingual language learning app for Japanese (JLPT N5-N1) and Chinese (HSK 1-5). Features flashcards, multiple choice, typing quizzes, kanji stroke order, SRS review, and more.',
    version: '4.0.0',
    author: 'VictorAurelius',
    license: 'MIT'
  };
}

/**
 * Get community links
 */
export function getCommunityLinks(): CommunityLink[] {
  return [
    {
      type: 'repo',
      label: 'Source Code',
      url: 'https://github.com/VictorAurelius/2026-Smart-Quiz',
      icon: '📦'
    },
    {
      type: 'discussions',
      label: 'Community Discussions',
      url: 'https://github.com/VictorAurelius/2026-Smart-Quiz/discussions',
      icon: '💬'
    },
    {
      type: 'issues',
      label: 'Report Bug / Request Feature',
      url: 'https://github.com/VictorAurelius/2026-Smart-Quiz/issues',
      icon: '🐛'
    },
    {
      type: 'website',
      label: 'Live App',
      url: 'https://victoraurelius.github.io/2026-Smart-Quiz/',
      icon: '🌐'
    }
  ];
}
