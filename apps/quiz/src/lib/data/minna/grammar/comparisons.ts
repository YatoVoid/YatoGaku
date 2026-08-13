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
    vietnamese: "So sánh trợ từ は và が",
    english: "Comparing particles は and が",
    patterns: ["～は ～です", "～が ～です"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "は (wa)", "が (ga)"],
      rows: [
        {
          aspect: "Vai trò",
          wa: "Đánh dấu chủ đề của câu",
          ga: "Đánh dấu chủ ngữ của câu"
        },
        {
          aspect: "Khi nào dùng",
          wa: "Thông tin đã biết, câu trả lời chung",
          ga: "Thông tin mới, câu hỏi với từ để hỏi, nhấn mạnh"
        },
        {
          aspect: "Vị trí",
          wa: "Trước vị ngữ (predicate)",
          ga: "Trước động từ, tính từ"
        },
        {
          aspect: "Ví dụ",
          wa: "私は学生です。(Tôi là học sinh.)",
          ga: "誰が来ましたか。(Ai đã đến?)"
        }
      ]
    },
    tips: "Quy tắc đơn giản: は cho chủ đề chung (topic), が cho chủ ngữ cụ thể (subject). Trong câu hỏi WH (who, what, where), dùng が.",
    examples: [
      {
        pattern: "は",
        japanese: "田中さんは　先生です。",
        vietnamese: "Anh Tanaka là giáo viên.",
        explanation: "は đánh dấu chủ đề: đang nói về Tanaka"
      },
      {
        pattern: "が",
        japanese: "誰が　先生ですか。",
        vietnamese: "Ai là giáo viên?",
        explanation: "が dùng với câu hỏi từ để hỏi (誰)"
      },
      {
        pattern: "は + が",
        japanese: "象は　鼻が　長いです。",
        vietnamese: "Voi thì cái mũi dài.",
        explanation: "は cho chủ đề lớn (voi), が cho chủ ngữ cụ thể (cái mũi)"
      }
    ],
    commonMistakes: [
      "Không dùng が trong câu 'Tôi là học sinh' → 私は学生です (dùng は)",
      "Không dùng は trong 'Ai đã đến?' → 誰が来ましたか (dùng が)"
    ]
  },

  // ===== 2. に vs で =====
  {
    id: "ni-vs-de",
    title: "に vs で",
    vietnamese: "So sánh trợ từ に và で",
    english: "Comparing particles に and で",
    patterns: ["～に います/あります", "～で ～ます"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "に (ni)", "で (de)"],
      rows: [
        {
          aspect: "Chức năng chính",
          ni: "Địa điểm tồn tại, đích đến, thời gian",
          de: "Địa điểm hành động, phương tiện, nguyên liệu"
        },
        {
          aspect: "Với động từ",
          ni: "います/あります (tồn tại), 行く/来る/帰る (di chuyển)",
          de: "Động từ hành động (食べる, 勉強する, 遊ぶ...)"
        },
        {
          aspect: "Ý nghĩa",
          ni: "Ở đâu (vị trí tĩnh), đến đâu",
          de: "Làm ở đâu (hành động), bằng gì"
        },
        {
          aspect: "Ví dụ",
          ni: "東京に　います。(Ở Tokyo.)",
          de: "図書館で　勉強します。(Học ở thư viện.)"
        }
      ]
    },
    tips: "に = nơi TỒN TẠI (存在) hoặc ĐÍCH ĐẾN. で = nơi HÀNH ĐỘNG hoặc PHƯƠNG TIỆN. Quy tắc: います/あります luôn dùng に, các động từ hành động khác dùng で.",
    examples: [
      {
        pattern: "に",
        japanese: "猫が　部屋に　います。",
        vietnamese: "Mèo ở trong phòng.",
        explanation: "に với います (tồn tại)"
      },
      {
        pattern: "で",
        japanese: "部屋で　寝ます。",
        vietnamese: "Ngủ ở trong phòng.",
        explanation: "で với 寝る (hành động)"
      },
      {
        pattern: "に (đích đến)",
        japanese: "学校に　行きます。",
        vietnamese: "Đi đến trường.",
        explanation: "に chỉ đích đến với 行く"
      },
      {
        pattern: "で (phương tiện)",
        japanese: "電車で　行きます。",
        vietnamese: "Đi bằng tàu điện.",
        explanation: "で chỉ phương tiện"
      }
    ],
    commonMistakes: [
      "Không dùng で với います/あります → 部屋に います (dùng に)",
      "Không dùng に với 勉強する → 図書館で 勉強します (dùng で)"
    ]
  },

  // ===== 3. を vs が =====
  {
    id: "wo-vs-ga",
    title: "を vs が",
    vietnamese: "So sánh trợ từ を và が",
    english: "Comparing particles を and が",
    patterns: ["～を ～ます", "～が ～ます"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "を (wo/o)", "が (ga)"],
      rows: [
        {
          aspect: "Chức năng",
          wo: "Đánh dấu tân ngữ trực tiếp",
          ga: "Đánh dấu chủ ngữ"
        },
        {
          aspect: "Với động từ",
          wo: "Động từ ngoại động (食べる, 読む, 見る...)",
          ga: "Động từ nội động (わかる, できる, 好き, 欲しい...)"
        },
        {
          aspect: "Câu hỏi",
          wo: "何を食べますか (Ăn gì?)",
          ga: "何が好きですか (Thích gì?)"
        },
        {
          aspect: "Ví dụ",
          wo: "りんごを　食べます。(Ăn táo.)",
          ga: "日本語が　わかります。(Hiểu tiếng Nhật.)"
        }
      ]
    },
    tips: "を cho TÂN NGỮ (object) - cái gì đó BỊ tác động. が cho CHỦ NGỮ (subject) - cái gì đó GÂY RA cảm xúc/trạng thái. Động từ như わかる, できる, 好き, 欲しい luôn dùng が.",
    examples: [
      {
        pattern: "を",
        japanese: "本を　読みます。",
        vietnamese: "Đọc sách.",
        explanation: "を với động từ ngoại động 読む"
      },
      {
        pattern: "が",
        japanese: "日本語が　わかります。",
        vietnamese: "Hiểu tiếng Nhật.",
        explanation: "が với わかる (không dùng を)"
      },
      {
        pattern: "が",
        japanese: "コーヒーが　好きです。",
        vietnamese: "Thích cà phê.",
        explanation: "が với 好き (tính từ な)"
      },
      {
        pattern: "を",
        japanese: "公園を　散歩します。",
        vietnamese: "Đi dạo ở công viên.",
        explanation: "を chỉ nơi di chuyển qua"
      }
    ],
    commonMistakes: [
      "Không dùng を với わかる → 日本語が わかります (dùng が)",
      "Không dùng を với 好き → コーヒーが 好きです (dùng が)"
    ]
  },

  // ===== 4. て-form Uses =====
  {
    id: "te-form-uses",
    title: "て形の使い方",
    vietnamese: "Các cách dùng của て形",
    english: "Various uses of て-form",
    patterns: ["～て、～", "～てください", "～ています", "～てもいいです"],
    difficulty: "intermediate",
    jlptLevel: "N5",
    table: {
      headers: ["Mẫu câu", "Ý nghĩa", "Ví dụ"],
      rows: [
        {
          aspect: "～て、～",
          meaning: "Nối hành động liên tiếp",
          example: "起きて、顔を洗って、朝ごはんを食べます。"
        },
        {
          aspect: "～てください",
          meaning: "Yêu cầu lịch sự",
          example: "ちょっと待ってください。(Vui lòng đợi chút.)"
        },
        {
          aspect: "～ています",
          meaning: "Đang làm / trạng thái hiện tại",
          example: "今、勉強しています。(Bây giờ đang học.)"
        },
        {
          aspect: "～てもいいです",
          meaning: "Cho phép",
          example: "写真を撮ってもいいですか。(Chụp ảnh được không?)"
        },
        {
          aspect: "～てはいけません",
          meaning: "Cấm đoán",
          example: "ここで食べてはいけません。(Không được ăn ở đây.)"
        },
        {
          aspect: "～てから",
          meaning: "Sau khi làm",
          example: "宿題をしてから遊びます。(Sau khi làm bài tập rồi chơi.)"
        }
      ]
    },
    tips: "て形 là dạng động từ đa năng nhất! Ghi nhớ 6 cách dùng chính: (1) Nối câu, (2) Yêu cầu (~ください), (3) Tiếp diễn (~ています), (4) Cho phép (~てもいい), (5) Cấm (~てはいけない), (6) Thứ tự (~てから).",
    examples: [
      {
        pattern: "Nối câu",
        japanese: "朝起きて、シャワーを浴びて、会社へ行きます。",
        vietnamese: "Sáng dậy, tắm, rồi đi công ty.",
        explanation: "て nối 3 hành động liên tiếp"
      },
      {
        pattern: "Tiếp diễn",
        japanese: "母は料理をしています。",
        vietnamese: "Mẹ đang nấu ăn.",
        explanation: "ている = đang làm"
      },
      {
        pattern: "Trạng thái",
        japanese: "私は結婚しています。",
        vietnamese: "Tôi đã kết hôn (và hiện đang ở trạng thái đó).",
        explanation: "ている = trạng thái kết quả"
      }
    ],
    commonMistakes: [
      "Nhầm ている (đang làm) với た (đã làm xong)",
      "Quên て-form với ください: 書いてください (đúng) vs 書きますください (sai)"
    ]
  },

  // ===== 5. た形 vs ている =====
  {
    id: "ta-vs-teiru",
    title: "た形 vs ている",
    vietnamese: "So sánh た形 (quá khứ) và ている (tiếp diễn)",
    english: "Comparing た-form and ている",
    patterns: ["～ました", "～ています"],
    difficulty: "intermediate",
    jlptLevel: "N5",
    table: {
      headers: ["", "た形 (past)", "ている (continuous/state)"],
      rows: [
        {
          aspect: "Ý nghĩa chính",
          ta: "Đã làm xong (hành động hoàn thành)",
          teiru: "Đang làm HOẶC trạng thái hiện tại"
        },
        {
          aspect: "Thời điểm",
          ta: "Quá khứ (đã xong)",
          teiru: "Hiện tại (đang diễn ra hoặc kết quả còn)"
        },
        {
          aspect: "Ví dụ 1",
          ta: "ご飯を食べました。(Đã ăn cơm xong.)",
          teiru: "ご飯を食べています。(Đang ăn cơm.)"
        },
        {
          aspect: "Ví dụ 2",
          ta: "結婚しました。(Đã kết hôn.)",
          teiru: "結婚しています。(Đang ở trạng thái đã kết hôn.)"
        }
      ]
    },
    tips: "た形 = hành động ĐÃ XONG trong quá khứ. ている = (1) đang làm BÂY GIỜ hoặc (2) kết quả của hành động VẪN CÒN. VD: 住んでいます = đang sống (kết quả của 'đã chuyển đến' vẫn còn).",
    examples: [
      {
        pattern: "た (hoàn thành)",
        japanese: "昨日、映画を見ました。",
        vietnamese: "Hôm qua đã xem phim.",
        explanation: "Hành động xem phim đã kết thúc"
      },
      {
        pattern: "ている (đang làm)",
        japanese: "今、映画を見ています。",
        vietnamese: "Bây giờ đang xem phim.",
        explanation: "Hành động đang diễn ra"
      },
      {
        pattern: "ている (trạng thái)",
        japanese: "東京に住んでいます。",
        vietnamese: "Đang sống ở Tokyo.",
        explanation: "Kết quả của 'đã chuyển đến Tokyo' vẫn còn"
      },
      {
        pattern: "た vs ている",
        japanese: "窓が開きました。(Cửa sổ đã mở.) vs 窓が開いています。(Cửa sổ đang mở.)",
        vietnamese: "た = hành động mở đã xong, ている = trạng thái mở hiện tại",
        explanation: "Sự khác biệt giữa hành động và trạng thái"
      }
    ],
    commonMistakes: [
      "Dùng た khi muốn nói trạng thái hiện tại: 結婚しています (đúng) vs 結婚しました (chỉ nói việc đã cưới)",
      "Nhầm ている với sẽ làm: 明日行きます (sẽ đi) là đúng, không phải 行っています"
    ]
  },

  // ===== 6. たい vs 欲しい =====
  {
    id: "tai-vs-hoshii",
    title: "～たい vs 欲しい",
    vietnamese: "So sánh たい (muốn làm) và 欲しい (muốn có)",
    english: "Comparing たい (want to do) and 欲しい (want to have)",
    patterns: ["～たいです", "～が 欲しいです"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "～たい", "欲しい"],
      rows: [
        {
          aspect: "Loại",
          tai: "Động từ + たい",
          hoshii: "Tính từ い"
        },
        {
          aspect: "Ý nghĩa",
          tai: "Muốn làm (hành động)",
          hoshii: "Muốn có (đồ vật)"
        },
        {
          aspect: "Cấu trúc",
          tai: "V-ます (bỏ ます) + たい",
          hoshii: "N + が欲しい"
        },
        {
          aspect: "Phủ định",
          tai: "～たくない",
          hoshii: "～欲しくない"
        },
        {
          aspect: "Ví dụ",
          tai: "日本へ行きたいです。(Muốn đi Nhật.)",
          hoshii: "車が欲しいです。(Muốn có xe hơi.)"
        }
      ]
    },
    tips: "たい = muốn LÀM gì đó (động từ). 欲しい = muốn CÓ cái gì đó (danh từ). Cả hai đều CHỈ DÙNG cho người nói (わたし), không dùng cho người khác.",
    examples: [
      {
        pattern: "たい",
        japanese: "寿司を食べたいです。",
        vietnamese: "Muốn ăn sushi.",
        explanation: "食べる (động từ) + たい"
      },
      {
        pattern: "欲しい",
        japanese: "新しいパソコンが欲しいです。",
        vietnamese: "Muốn có máy tính mới.",
        explanation: "パソコン (danh từ) + が欲しい"
      },
      {
        pattern: "たくない",
        japanese: "もう食べたくないです。",
        vietnamese: "Không muốn ăn nữa.",
        explanation: "Phủ định của たい"
      },
      {
        pattern: "欲しくない",
        japanese: "お金は欲しくないです。",
        vietnamese: "Không muốn tiền.",
        explanation: "Phủ định của 欲しい"
      }
    ],
    commonMistakes: [
      "Không dùng たい với danh từ: 車たい (sai) → 車が欲しい (đúng)",
      "Không dùng cho người khác: 田中さんは食べたい (sai) → 田中さんは食べたがっている (đúng)"
    ]
  },

  // ===== 7. ～ましょう vs ～ませんか =====
  {
    id: "mashou-vs-masenka",
    title: "～ましょう vs ～ませんか",
    vietnamese: "So sánh ましょう (cùng làm) và ませんか (mời)",
    english: "Comparing ましょう (let's) and ませんか (won't you)",
    patterns: ["～ましょう", "～ませんか"],
    difficulty: "beginner",
    jlptLevel: "N5",
    table: {
      headers: ["", "～ましょう", "～ませんか"],
      rows: [
        {
          aspect: "Ý nghĩa",
          mashou: "Hãy cùng làm (đề xuất)",
          masenka: "Không làm sao? (mời lịch sự hơn)"
        },
        {
          aspect: "Mức độ lịch sự",
          mashou: "Thông thường",
          masenka: "Lịch sự hơn"
        },
        {
          aspect: "Cảm giác",
          mashou: "Quyết đoán, chủ động rủ",
          masenka: "Nhẹ nhàng, để người nghe quyết định"
        },
        {
          aspect: "Trả lời",
          mashou: "はい、そうしましょう。/ いいえ、ちょっと...",
          masenka: "ええ、いいですね。/ すみません、ちょっと..."
        },
        {
          aspect: "Ví dụ",
          mashou: "一緒に行きましょう。(Cùng đi nào!)",
          masenka: "一緒に行きませんか。(Cùng đi không?)"
        }
      ]
    },
    tips: "ましょう = chủ động rủ, quyết đoán hơn. ませんか = mời lịch sự, nhẹ nhàng hơn. Khi rủ bạn bè dùng ましょう, khi mời sếp/khách dùng ませんか.",
    examples: [
      {
        pattern: "ましょう",
        japanese: "コーヒーを飲みましょう。",
        vietnamese: "Uống cà phê nào!",
        explanation: "Đề xuất trực tiếp"
      },
      {
        pattern: "ませんか",
        japanese: "コーヒーを飲みませんか。",
        vietnamese: "Uống cà phê không ạ?",
        explanation: "Mời lịch sự hơn"
      },
      {
        pattern: "ましょう (quyết định)",
        japanese: "疲れましたね。休みましょう。",
        vietnamese: "Mệt rồi nhỉ. Nghỉ thôi!",
        explanation: "Đề xuất khi đồng ý chung"
      },
      {
        pattern: "ませんか (lịch sự)",
        japanese: "明日、映画を見ませんか。",
        vietnamese: "Mai xem phim không ạ?",
        explanation: "Mời lịch sự, để người nghe tự do từ chối"
      }
    ],
    commonMistakes: [
      "Dùng ましょう khi nên lịch sự: 社長、一緒に行きましょう (không lịch sự) → 行きませんか (lịch sự hơn)"
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
