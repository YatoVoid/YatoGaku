/**
 * Grammar Pattern Comparisons
 * Side-by-side comparisons of commonly confused grammar patterns
 */

import type { GrammarComparison } from '$lib/types';

export const COMPARISONS: GrammarComparison[] = [
  // ===== 1. は vs が =====
  {
    id: "wa-vs-ga",
    title: "は vs が",
    vietnamese: "Comparing particles は and が",
    english: "Comparing particles は and が",
    patterns: ["～は ～です", "～が ～です"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "は (wa)", "が (ga)"],
      rows: [
        {
          aspect: "Role",
          wa: "Marks the topic of the sentence",
          ga: "Marks the grammatical subject"
        },
        {
          aspect: "When to use",
          wa: "Known information, general answers",
          ga: "New information, WH-questions, emphasis"
        },
        {
          aspect: "Position",
          wa: "Before the predicate",
          ga: "Before verbs, adjectives"
        },
        {
          aspect: "Example",
          wa: "私は学生です。(I am a student.)",
          ga: "誰が来ましたか。(Who came?)"
        }
      ]
    },
    tips: "Simple rule: は for the general topic, が for the specific subject. In WH-questions (who, what, where), use が.",
    examples: [
      {
        pattern: "は",
        japanese: "田中さんは　先生です。",
        vietnamese: "Tanaka is a teacher.",
        explanation: "は marks the topic: talking about Tanaka"
      },
      {
        pattern: "が",
        japanese: "誰が　先生ですか。",
        vietnamese: "Who is the teacher?",
        explanation: "が is used with question words (誰)"
      },
      {
        pattern: "は + が",
        japanese: "象は　鼻が　長いです。",
        vietnamese: "As for elephants, their trunk is long.",
        explanation: "は for the general topic (elephant), が for the specific subject (trunk)"
      }
    ],
    commonMistakes: [
      "Don't use が for 'I am a student' → 私は学生です (use は)",
      "Don't use は for 'Who came?' → 誰が来ましたか (use が)"
    ]
  },

  // ===== 2. に vs で =====
  {
    id: "ni-vs-de",
    title: "に vs で",
    vietnamese: "Comparing particles に and で",
    english: "Comparing particles に and で",
    patterns: ["～に います/あります", "～で ～ます"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "に (ni)", "で (de)"],
      rows: [
        {
          aspect: "Main function",
          ni: "Location of existence, destination, time",
          de: "Location of action, means, materials"
        },
        {
          aspect: "With verbs",
          ni: "います/あります (existence), 行く/来る/帰る (movement)",
          de: "Action verbs (食べる, 勉強する, 遊ぶ...)"
        },
        {
          aspect: "Meaning",
          ni: "Where something is (static location), where to",
          de: "Where an action happens, by what means"
        },
        {
          aspect: "Example",
          ni: "東京に　います。(I am in Tokyo.)",
          de: "図書館で　勉強します。(I study at the library.)"
        }
      ]
    },
    tips: "に = place of EXISTENCE or DESTINATION. で = place of ACTION or MEANS. Rule: います/あります always take に, other action verbs take で.",
    examples: [
      {
        pattern: "に",
        japanese: "猫が　部屋に　います。",
        vietnamese: "The cat is in the room.",
        explanation: "に with います (existence)"
      },
      {
        pattern: "で",
        japanese: "部屋で　寝ます。",
        vietnamese: "I sleep in the room.",
        explanation: "で with 寝る (action)"
      },
      {
        pattern: "に (destination)",
        japanese: "学校に　行きます。",
        vietnamese: "I go to school.",
        explanation: "に marks the destination with 行く"
      },
      {
        pattern: "で (means)",
        japanese: "電車で　行きます。",
        vietnamese: "I go by train.",
        explanation: "で marks the means"
      }
    ],
    commonMistakes: [
      "Don't use で with います/あります → 部屋に います (use に)",
      "Don't use に with 勉強する → 図書館で 勉強します (use で)"
    ]
  },

  // ===== 3. を vs が =====
  {
    id: "wo-vs-ga",
    title: "を vs が",
    vietnamese: "Comparing particles を and が",
    english: "Comparing particles を and が",
    patterns: ["～を ～ます", "～が ～ます"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "を (wo/o)", "が (ga)"],
      rows: [
        {
          aspect: "Function",
          wo: "Marks the direct object",
          ga: "Marks the subject"
        },
        {
          aspect: "With verbs",
          wo: "Transitive verbs (食べる, 読む, 見る...)",
          ga: "Intransitive/stative verbs (わかる, できる, 好き, 欲しい...)"
        },
        {
          aspect: "Questions",
          wo: "何を食べますか (What are you eating?)",
          ga: "何が好きですか (What do you like?)"
        },
        {
          aspect: "Example",
          wo: "りんごを　食べます。(I eat an apple.)",
          ga: "日本語が　わかります。(I understand Japanese.)"
        }
      ]
    },
    tips: "を for the OBJECT - something being acted on. が for the SUBJECT - something that produces a feeling/state. Verbs like わかる, できる, 好き, 欲しい always take が.",
    examples: [
      {
        pattern: "を",
        japanese: "本を　読みます。",
        vietnamese: "I read a book.",
        explanation: "を with the transitive verb 読む"
      },
      {
        pattern: "が",
        japanese: "日本語が　わかります。",
        vietnamese: "I understand Japanese.",
        explanation: "が with わかる (never を)"
      },
      {
        pattern: "が",
        japanese: "コーヒーが　好きです。",
        vietnamese: "I like coffee.",
        explanation: "が with 好き (na-adjective)"
      },
      {
        pattern: "を",
        japanese: "公園を　散歩します。",
        vietnamese: "I take a walk through the park.",
        explanation: "を marks the place being traversed"
      }
    ],
    commonMistakes: [
      "Don't use を with わかる → 日本語が わかります (use が)",
      "Don't use を with 好き → コーヒーが 好きです (use が)"
    ]
  },

  // ===== 4. て-form Uses =====
  {
    id: "te-form-uses",
    title: "て形の使い方",
    vietnamese: "Various uses of て-form",
    english: "Various uses of て-form",
    patterns: ["～て、～", "～てください", "～ています", "～てもいいです"],
    difficulty: "intermediate",
    jlptLevel: "N5",
    table: {
      headers: ["Pattern", "Meaning", "Example"],
      rows: [
        {
          aspect: "～て、～",
          meaning: "Connecting consecutive actions",
          example: "起きて、顔を洗って、朝ごはんを食べます。"
        },
        {
          aspect: "～てください",
          meaning: "Polite request",
          example: "ちょっと待ってください。(Please wait a moment.)"
        },
        {
          aspect: "～ています",
          meaning: "Ongoing action / current state",
          example: "今、勉強しています。(I am studying right now.)"
        },
        {
          aspect: "～てもいいです",
          meaning: "Permission",
          example: "写真を撮ってもいいですか。(May I take a photo?)"
        },
        {
          aspect: "～てはいけません",
          meaning: "Prohibition",
          example: "ここで食べてはいけません。(You must not eat here.)"
        },
        {
          aspect: "～てから",
          meaning: "After doing",
          example: "宿題をしてから遊びます。(I play after doing homework.)"
        }
      ]
    },
    tips: "て-form is the most versatile verb form. Remember 6 main uses: (1) Connecting sentences, (2) Requests (~ください), (3) Ongoing action (~ています), (4) Permission (~てもいい), (5) Prohibition (~てはいけない), (6) Sequence (~てから).",
    examples: [
      {
        pattern: "Connecting sentences",
        japanese: "朝起きて、シャワーを浴びて、会社へ行きます。",
        vietnamese: "I wake up, take a shower, then go to work.",
        explanation: "て connects 3 consecutive actions"
      },
      {
        pattern: "Ongoing action",
        japanese: "母は料理をしています。",
        vietnamese: "My mother is cooking.",
        explanation: "ている = currently doing"
      },
      {
        pattern: "State",
        japanese: "私は結婚しています。",
        vietnamese: "I am married (and still in that state now).",
        explanation: "ている = resulting state"
      }
    ],
    commonMistakes: [
      "Confusing ている (ongoing) with た (already finished)",
      "Forgetting the て-form before ください: 書いてください (correct) vs 書きますください (wrong)"
    ]
  },

  // ===== 5. た形 vs ている =====
  {
    id: "ta-vs-teiru",
    title: "た形 vs ている",
    vietnamese: "Comparing た-form and ている",
    english: "Comparing た-form and ている",
    patterns: ["～ました", "～ています"],
    difficulty: "intermediate",
    jlptLevel: "N5",
    table: {
      headers: ["", "た形 (past)", "ている (continuous/state)"],
      rows: [
        {
          aspect: "Main meaning",
          ta: "Finished doing (completed action)",
          teiru: "Currently doing OR current state"
        },
        {
          aspect: "Timing",
          ta: "Past (already finished)",
          teiru: "Present (ongoing or the result still stands)"
        },
        {
          aspect: "Example 1",
          ta: "ご飯を食べました。(I finished eating.)",
          teiru: "ご飯を食べています。(I am eating.)"
        },
        {
          aspect: "Example 2",
          ta: "結婚しました。(I got married.)",
          teiru: "結婚しています。(I am married.)"
        }
      ]
    },
    tips: "た-form = action FINISHED in the past. ている = (1) currently doing something NOW, or (2) the result of an action STILL STANDS. E.g. 住んでいます = living (the result of 'having moved there' still stands).",
    examples: [
      {
        pattern: "た (completed)",
        japanese: "昨日、映画を見ました。",
        vietnamese: "I watched a movie yesterday.",
        explanation: "The action of watching the movie has ended"
      },
      {
        pattern: "ている (ongoing)",
        japanese: "今、映画を見ています。",
        vietnamese: "I am watching a movie right now.",
        explanation: "The action is currently happening"
      },
      {
        pattern: "ている (state)",
        japanese: "東京に住んでいます。",
        vietnamese: "I live in Tokyo.",
        explanation: "The result of 'having moved to Tokyo' still stands"
      },
      {
        pattern: "た vs ている",
        japanese: "窓が開きました。(The window opened.) vs 窓が開いています。(The window is open.)",
        vietnamese: "た = the opening action is finished, ている = the current open state",
        explanation: "The difference between an action and a state"
      }
    ],
    commonMistakes: [
      "Using た when you mean the current state: 結婚しています (correct) vs 結婚しました (only states that the marriage happened)",
      "Confusing ている with future plans: 明日行きます (I will go) is correct, not 行っています"
    ]
  },

  // ===== 6. たい vs 欲しい =====
  {
    id: "tai-vs-hoshii",
    title: "～たい vs 欲しい",
    vietnamese: "Comparing たい (want to do) and 欲しい (want to have)",
    english: "Comparing たい (want to do) and 欲しい (want to have)",
    patterns: ["～たいです", "～が 欲しいです"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "～たい", "欲しい"],
      rows: [
        {
          aspect: "Type",
          tai: "Verb + たい",
          hoshii: "i-adjective"
        },
        {
          aspect: "Meaning",
          tai: "Want to do (action)",
          hoshii: "Want to have (an item)"
        },
        {
          aspect: "Structure",
          tai: "V-stem (masu-form minus ます) + たい",
          hoshii: "N + が欲しい"
        },
        {
          aspect: "Negative",
          tai: "～たくない",
          hoshii: "～欲しくない"
        },
        {
          aspect: "Example",
          tai: "日本へ行きたいです。(I want to go to Japan.)",
          hoshii: "車が欲しいです。(I want a car.)"
        }
      ]
    },
    tips: "たい = want to DO something (verb). 欲しい = want to HAVE something (noun). Both are ONLY used for the speaker (わたし), not for other people.",
    examples: [
      {
        pattern: "たい",
        japanese: "寿司を食べたいです。",
        vietnamese: "I want to eat sushi.",
        explanation: "食べる (verb) + たい"
      },
      {
        pattern: "欲しい",
        japanese: "新しいパソコンが欲しいです。",
        vietnamese: "I want a new computer.",
        explanation: "パソコン (noun) + が欲しい"
      },
      {
        pattern: "たくない",
        japanese: "もう食べたくないです。",
        vietnamese: "I don't want to eat anymore.",
        explanation: "Negative of たい"
      },
      {
        pattern: "欲しくない",
        japanese: "お金は欲しくないです。",
        vietnamese: "I don't want money.",
        explanation: "Negative of 欲しい"
      }
    ],
    commonMistakes: [
      "Don't use たい with a noun: 車たい (wrong) → 車が欲しい (correct)",
      "Don't use for other people: 田中さんは食べたい (wrong) → 田中さんは食べたがっている (correct)"
    ]
  },

  // ===== 7. ～ましょう vs ～ませんか =====
  {
    id: "mashou-vs-masenka",
    title: "～ましょう vs ～ませんか",
    vietnamese: "Comparing ましょう (let's) and ませんか (won't you)",
    english: "Comparing ましょう (let's) and ませんか (won't you)",
    patterns: ["～ましょう", "～ませんか"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "～ましょう", "～ませんか"],
      rows: [
        {
          aspect: "Meaning",
          mashou: "Let's do it (proposal)",
          masenka: "Won't you...? (a more polite invitation)"
        },
        {
          aspect: "Politeness level",
          mashou: "Standard",
          masenka: "More polite"
        },
        {
          aspect: "Feel",
          mashou: "Decisive, actively suggesting",
          masenka: "Gentle, leaves the decision to the listener"
        },
        {
          aspect: "Response",
          mashou: "はい、そうしましょう。/ いいえ、ちょっと...",
          masenka: "ええ、いいですね。/ すみません、ちょっと..."
        },
        {
          aspect: "Example",
          mashou: "一緒に行きましょう。(Let's go together!)",
          masenka: "一緒に行きませんか。(Won't you come with me?)"
        }
      ]
    },
    tips: "ましょう = actively suggesting, more decisive. ませんか = a polite, gentler invitation. Use ましょう with friends, ませんか with a boss or guest.",
    examples: [
      {
        pattern: "ましょう",
        japanese: "コーヒーを飲みましょう。",
        vietnamese: "Let's have coffee!",
        explanation: "A direct suggestion"
      },
      {
        pattern: "ませんか",
        japanese: "コーヒーを飲みませんか。",
        vietnamese: "Would you like to have coffee?",
        explanation: "A more polite invitation"
      },
      {
        pattern: "ましょう (decision)",
        japanese: "疲れましたね。休みましょう。",
        vietnamese: "We're tired, aren't we? Let's take a break!",
        explanation: "A suggestion when there's already shared agreement"
      },
      {
        pattern: "ませんか (polite)",
        japanese: "明日、映画を見ませんか。",
        vietnamese: "Would you like to watch a movie tomorrow?",
        explanation: "A polite invitation that leaves the listener free to decline"
      }
    ],
    commonMistakes: [
      "Using ましょう when politeness is expected: 社長、一緒に行きましょう (not polite enough) → 行きませんか (more polite)"
    ]
  }
];

/**
 * Get all comparisons
 */
export function getAllComparisons(): GrammarComparison[] {
  return COMPARISONS;
}

/**
 * Get comparison by ID
 */
export function getComparisonById(id: string): GrammarComparison | null {
  return COMPARISONS.find(c => c.id === id) || null;
}

/**
 * Get comparisons by JLPT level
 */
export function getComparisonsByJLPT(level: string): GrammarComparison[] {
  return COMPARISONS.filter(c => c.jlptLevel === level);
}

/**
 * Get comparisons by difficulty
 */
export function getComparisonsByDifficulty(difficulty: string): GrammarComparison[] {
  return COMPARISONS.filter(c => c.difficulty === difficulty);
}

/**
 * Get comparisons by pattern
 */
export function getComparisonsByPattern(pattern: string): GrammarComparison[] {
  return COMPARISONS.filter(c => c.patterns.includes(pattern));
}
