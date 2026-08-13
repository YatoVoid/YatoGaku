/**
 * Grammar Pattern Metadata
 * Contains tips, mnemonics, categories, and relationships for grammar patterns
 */

import type { GrammarCategory, GrammarFunction, GrammarMetadata } from '$lib/types';

/**
 * Grammar Categories
 */
export const GRAMMAR_CATEGORIES: Record<string, GrammarCategory> = {
  particles: {
    id: "particles",
    name: "Trợ từ",
    nameEn: "Particles",
    icon: "🎯",
    description: "Các trợ từ cơ bản"
  },
  verbForms: {
    id: "verbForms",
    name: "Dạng động từ",
    nameEn: "Verb Forms",
    icon: "📝",
    description: "Các dạng chia của động từ"
  },
  adjectives: {
    id: "adjectives",
    name: "Tính từ",
    nameEn: "Adjectives",
    icon: "🌟",
    description: "Tính từ い và な"
  },
  sentencePatterns: {
    id: "sentencePatterns",
    name: "Mẫu câu cơ bản",
    nameEn: "Sentence Patterns",
    icon: "💬",
    description: "Các mẫu câu thông dụng"
  },
  expressions: {
    id: "expressions",
    name: "Cách diễn đạt",
    nameEn: "Expressions",
    icon: "💡",
    description: "Các cách diễn đạt thông dụng"
  },
  existence: {
    id: "existence",
    name: "Tồn tại & Vị trí",
    nameEn: "Existence & Location",
    icon: "📍",
    description: "Biểu thị sự tồn tại và vị trí"
  },
  time: {
    id: "time",
    name: "Thời gian",
    nameEn: "Time",
    icon: "⏰",
    description: "Biểu thị thời gian"
  }
};

/**
 * Grammar Functions
 */
export const GRAMMAR_FUNCTIONS: Record<string, GrammarFunction> = {
  introduction: { name: "Giới thiệu", nameEn: "Introduction" },
  description: { name: "Miêu tả", nameEn: "Description" },
  existence: { name: "Tồn tại", nameEn: "Existence" },
  possession: { name: "Sở hữu", nameEn: "Possession" },
  time: { name: "Thời gian", nameEn: "Time" },
  location: { name: "Vị trí", nameEn: "Location" },
  desire: { name: "Mong muốn", nameEn: "Desire" },
  permission: { name: "Cho phép", nameEn: "Permission" },
  prohibition: { name: "Cấm đoán", nameEn: "Prohibition" },
  ability: { name: "Khả năng", nameEn: "Ability" },
  comparison: { name: "So sánh", nameEn: "Comparison" },
  condition: { name: "Điều kiện", nameEn: "Condition" },
  opinion: { name: "Ý kiến", nameEn: "Opinion" },
  reason: { name: "Lý do", nameEn: "Reason" },
  purpose: { name: "Mục đích", nameEn: "Purpose" },
  request: { name: "Yêu cầu", nameEn: "Request" },
  suggestion: { name: "Đề xuất", nameEn: "Suggestion" },
  obligation: { name: "Nghĩa vụ", nameEn: "Obligation" },
  experience: { name: "Kinh nghiệm", nameEn: "Experience" },
  change: { name: "Thay đổi", nameEn: "Change" }
};

/**
 * JLPT Levels
 */
export const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;

/**
 * Pattern Metadata Map
 * Key: grammar pattern string
 * Value: metadata object
 */
export const PATTERN_METADATA: Record<string, GrammarMetadata> = {
  // ===== LESSON 1 =====
  "～は ～です": {
    categories: ["sentencePatterns", "particles"],
    functions: ["introduction", "description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～じゃ ありません", "～は ～ですか", "～の ～"],
    tips: "は đọc là 'wa' không phải 'ha' khi làm trợ từ chủ đề",
    mnemonics: "は = topic marker (đánh dấu chủ đề câu)",
    commonMistakes: "Không nhầm は với が (subject marker)",
    usageNotes: "Dùng để giới thiệu hoặc xác định danh tính"
  },

  "～は ～じゃ ありません": {
    categories: ["sentencePatterns", "particles"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～です", "～は ～ですか"],
    tips: "じゃ là viết tắt của では (lịch sự hơn)",
    mnemonics: "じゃありません = NOT is (phủ định)",
    commonMistakes: "Trong văn viết lịch sự nên dùng ではありません",
    usageNotes: "Dạng phủ định của です"
  },

  "～は ～ですか": {
    categories: ["sentencePatterns", "particles"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～です", "～は ～じゃ ありません"],
    tips: "か biến câu khẳng định thành câu hỏi yes/no",
    mnemonics: "か = question marker (đánh dấu câu hỏi)",
    commonMistakes: "Không cần dấu ? khi có か",
    usageNotes: "Câu hỏi yes/no, trả lời: はい/いいえ"
  },

  "～の ～": {
    categories: ["particles"],
    functions: ["possession", "description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～です"],
    tips: "の kết nối hai danh từ, danh từ trước sở hữu danh từ sau",
    mnemonics: "の = 's (sở hữu cách tiếng Anh)",
    commonMistakes: "Thứ tự: Người sở hữu の Vật được sở hữu",
    usageNotes: "Chỉ sở hữu, thuộc tính, hoặc mối quan hệ"
  },

  // ===== LESSON 2 =====
  "これ/それ/あれ/どれ": {
    categories: ["sentencePatterns"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["この/その/あの/どの"],
    tips: "Ko-So-A-Do: gần người nói, gần người nghe, xa cả hai, hỏi",
    mnemonics: "これ=this, それ=that(gần bạn), あれ=that(xa), どれ=which",
    commonMistakes: "Không nhầm これ (this) với ここ (here)",
    usageNotes: "Dùng độc lập để chỉ đồ vật"
  },

  "この/その/あの/どの": {
    categories: ["sentencePatterns"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["これ/それ/あれ/どれ"],
    tips: "Luôn đi kèm danh từ sau (この本 = cuốn sách này)",
    mnemonics: "この=this N, その=that N(gần bạn), あの=that N(xa), どの=which N",
    commonMistakes: "Phải có danh từ theo sau",
    usageNotes: "Dùng kèm danh từ để chỉ đồ vật"
  },

  // ===== LESSON 3 =====
  "ここ/そこ/あそこ/どこ": {
    categories: ["sentencePatterns", "particles"],
    functions: ["location"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["この/その/あの/どの", "～は ～に あります"],
    tips: "Ko-So-A-Do cho địa điểm: ở đây, ở đó, chỗ kia, ở đâu",
    mnemonics: "ここ=here, そこ=there(gần bạn), あそこ=over there, どこ=where",
    commonMistakes: "Không nhầm どこ (where) với だれ (who)",
    usageNotes: "Chỉ vị trí, địa điểm"
  },

  // ===== LESSON 4 =====
  "～から ～まで": {
    categories: ["particles"],
    functions: ["time", "location"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～です"],
    tips: "から = from (điểm bắt đầu), まで = to/until (điểm kết thúc)",
    mnemonics: "から→まで = from → to (có hướng)",
    commonMistakes: "Có thể dùng riêng から hoặc まで",
    usageNotes: "Chỉ phạm vi thời gian hoặc không gian"
  },

  "～と ～": {
    categories: ["particles"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～や ～", "～か ～"],
    tips: "と = and (liệt kê hoàn chỉnh tất cả các mục)",
    mnemonics: "と = and (complete list)",
    commonMistakes: "Không dùng と cho hành động cùng người (dùng といっしょに)",
    usageNotes: "Nối danh từ, liệt kê đầy đủ"
  },

  // ===== LESSON 5 =====
  "～へ 行きます/来ます/帰ります": {
    categories: ["particles", "verbForms"],
    functions: ["location"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～に 行きます"],
    tips: "へ đọc là 'e' khi làm trợ từ chỉ hướng",
    mnemonics: "へ = to/toward (hướng đi)",
    commonMistakes: "へ chỉ hướng (direction), に chỉ đích (destination)",
    usageNotes: "Chỉ hướng di chuyển"
  },

  // ===== LESSON 6 =====
  "～を ～ます": {
    categories: ["particles", "verbForms"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～が ～ます"],
    tips: "を đánh dấu tân ngữ (object) của động từ",
    mnemonics: "を = object marker",
    commonMistakes: "を chỉ dùng với động từ, không dùng với tính từ",
    usageNotes: "Đánh dấu tân ngữ trực tiếp"
  },

  "～で ～ます": {
    categories: ["particles", "verbForms"],
    functions: ["location"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～に ～ます", "～を ～ます"],
    tips: "で chỉ địa điểm hành động hoặc phương tiện",
    mnemonics: "で = at/by (nơi hành động, phương tiện)",
    commonMistakes: "で cho hành động, に cho tồn tại",
    usageNotes: "Chỉ địa điểm hành động hoặc phương tiện"
  },

  // ===== LESSON 7 =====
  "～で ～を あげます/もらいます/くれます": {
    categories: ["verbForms", "particles"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～に ～を あげます"],
    tips: "あげます=give to someone, もらいます=receive from, くれます=give to me",
    mnemonics: "あげる↑(cho đi), もらう(nhận về), くれる→(cho tôi)",
    commonMistakes: "Phân biệt hướng cho/nhận",
    usageNotes: "Biểu thị cho và nhận"
  },

  // ===== LESSON 9 =====
  "～が 好きです/嫌いです/上手です/下手です": {
    categories: ["particles", "adjectives"],
    functions: ["opinion", "description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～が ～です"],
    tips: "が đánh dấu đối tượng của tính từ -な",
    mnemonics: "が = subject of な-adj",
    commonMistakes: "Không dùng を với 好き/嫌い",
    usageNotes: "Biểu thị sở thích, năng lực"
  },

  "～が わかります": {
    categories: ["particles", "verbForms"],
    functions: ["ability"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～が できます"],
    tips: "わかります = understand/know (không phải is わかる)",
    mnemonics: "が わかる = understand (đối tượng được hiểu)",
    commonMistakes: "Không dùng を với わかります",
    usageNotes: "Biểu thị hiểu biết"
  },

  // ===== LESSON 10 =====
  "います/あります": {
    categories: ["existence", "verbForms"],
    functions: ["existence"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～に ～が います/あります", "～は ～に います/あります"],
    tips: "います cho người/động vật, あります cho đồ vật/thực vật",
    mnemonics: "います=animate exists, あります=inanimate exists",
    commonMistakes: "Động vật dùng います, không phải あります",
    usageNotes: "Biểu thị sự tồn tại"
  },

  "～に ～が います/あります": {
    categories: ["existence", "particles"],
    functions: ["existence", "location"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["います/あります", "～は ～に います/あります"],
    tips: "に = location marker (nơi tồn tại), が = subject marker",
    mnemonics: "Ở に có が (at location exists subject)",
    commonMistakes: "Thứ tự: Location に Object が exists",
    usageNotes: "Câu trúc: Nơi nào có cái gì"
  },

  "～は ～に います/あります": {
    categories: ["existence", "particles"],
    functions: ["existence", "location"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～に ～が います/あります"],
    tips: "は đánh dấu đối tượng đã biết, に chỉ vị trí",
    mnemonics: "Object は Location に exists",
    commonMistakes: "Thứ tự: Cái gì は ở Nơi に",
    usageNotes: "Câu trúc: Cái gì ở đâu"
  },

  // ===== LESSON 11 =====
  "〜枚（まい）、〜本（ほん）、〜個（こ）": {
    categories: ["expressions"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～つ"],
    tips: "枚=flat things, 本=long things, 個=small round things",
    mnemonics: "枚(paper), 本(pen), 個(apple)",
    commonMistakes: "Không nhầm cách đếm cho các loại vật khác nhau",
    usageNotes: "Trợ số từ để đếm đồ vật"
  },

  // ===== LESSON 12 =====
  "～は ～より ～です": {
    categories: ["sentencePatterns", "particles"],
    functions: ["comparison"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～の ほうが ～より ～です", "～と ～と どちらが ～ですか"],
    tips: "より = than (so sánh hơn), A は B より ~ = A hơn B về ~",
    mnemonics: "A は B より big = A is bigger than B",
    commonMistakes: "Không đảo ngược thứ tự A và B",
    usageNotes: "So sánh 2 đối tượng"
  },

  "～の ほうが ～より ～です": {
    categories: ["sentencePatterns", "particles"],
    functions: ["comparison"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～より ～です"],
    tips: "ほうが nhấn mạnh phía được so sánh hơn",
    mnemonics: "A のほうが B より ~ = A (side) is more ~ than B",
    commonMistakes: "Nhớ dùng の trước ほうが",
    usageNotes: "Nhấn mạnh đối tượng hơn trong so sánh"
  },

  "～と ～と どちらが ～ですか": {
    categories: ["sentencePatterns", "particles"],
    functions: ["comparison"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～より ～です", "～の ほうが ～より ～です"],
    tips: "どちら = which one (trong 2 đối tượng)",
    mnemonics: "A と B と どちら? = Between A and B, which?",
    commonMistakes: "Trả lời: AのほうがBより～です hoặc Aのほうが～です",
    usageNotes: "Hỏi so sánh giữa 2 đối tượng"
  },

  "～（の中）で ～が いちばん ～です": {
    categories: ["sentencePatterns", "particles"],
    functions: ["comparison"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～は ～より ～です"],
    tips: "いちばん = nhất, most (so sánh nhất trong nhóm)",
    mnemonics: "で group が いちばん ~ = in group, X is the most ~",
    commonMistakes: "Dùng で cho phạm vi, không dùng に",
    usageNotes: "So sánh nhất trong nhóm/phạm vi"
  },

  // ===== LESSON 13 =====
  "～たいです": {
    categories: ["verbForms", "expressions"],
    functions: ["desire"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～たくないです", "～たがっています"],
    tips: "Động từ ます-form bỏ ます + たい = muốn làm",
    mnemonics: "食べます→食べたい = want to eat",
    commonMistakes: "Chỉ dùng cho người nói (わたし), không dùng cho người khác",
    usageNotes: "Biểu thị mong muốn của bản thân"
  },

  "～たくないです": {
    categories: ["verbForms", "expressions"],
    functions: ["desire"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～たいです"],
    tips: "Dạng phủ định của たい: たい→たくない",
    mnemonics: "食べたくない = don't want to eat",
    commonMistakes: "Không dùng たいじゃありません",
    usageNotes: "Biểu thị không muốn làm"
  },

  "～に 行きます/来ます": {
    categories: ["particles", "verbForms"],
    functions: ["purpose"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～へ 行きます/来ます/帰ります", "～に 行きます/来ます/帰ります（Verb-stem に）"],
    tips: "Động từ ます-form bỏ ます + に + 行く = đi để làm gì",
    mnemonics: "食べに行く = go to eat",
    commonMistakes: "Dùng verb stem (bỏ ます), không phải ます-form",
    usageNotes: "Biểu thị mục đích di chuyển"
  },

  // ===== LESSON 14 =====
  "～てください": {
    categories: ["verbForms", "expressions"],
    functions: ["request"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～ないでください", "～ましょう"],
    tips: "て-form + ください = vui lòng làm (yêu cầu lịch sự)",
    mnemonics: "食べてください = please eat",
    commonMistakes: "Nhớ dùng て-form, không phải ます-form",
    usageNotes: "Yêu cầu, nhờ vả lịch sự"
  },

  "～ましょう": {
    categories: ["verbForms", "expressions"],
    functions: ["suggestion"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～ましょうか", "～ませんか"],
    tips: "ます-form: ます→ましょう = hãy cùng làm",
    mnemonics: "食べましょう = let's eat",
    commonMistakes: "Không nhầm với ～ませんか (mời)",
    usageNotes: "Đề xuất, rủ cùng làm"
  },

  "～ませんか": {
    categories: ["verbForms", "expressions"],
    functions: ["suggestion"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～ましょう", "～ましょうか"],
    tips: "ません + か = không làm không? (mời lịch sự hơn ましょう)",
    mnemonics: "食べませんか = won't you eat? (Would you like to eat?)",
    commonMistakes: "Lịch sự hơn ～ましょう",
    usageNotes: "Mời, rủ lịch sự"
  },

  "～ています": {
    categories: ["verbForms"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～ていません", "～ていました"],
    tips: "て-form + います = đang làm hoặc trạng thái kết quả",
    mnemonics: "食べています = is eating / 住んでいます = is living (result state)",
    commonMistakes: "2 nghĩa: hành động đang diễn ra hoặc trạng thái hiện tại",
    usageNotes: "Tiếp diễn hoặc trạng thái"
  },

  // ===== LESSON 15 =====
  "～てもいいです": {
    categories: ["verbForms", "expressions"],
    functions: ["permission"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～てはいけません", "～ないでください"],
    tips: "て-form + もいい = được phép làm",
    mnemonics: "食べてもいい = may eat (permission)",
    commonMistakes: "Trả lời: はい、いいです hoặc いいえ、だめです",
    usageNotes: "Xin phép hoặc cho phép"
  },

  "～てはいけません": {
    categories: ["verbForms", "expressions"],
    functions: ["prohibition"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～てもいいです", "～ないでください"],
    tips: "て-form + はいけません = không được phép làm",
    mnemonics: "食べてはいけない = must not eat (prohibition)",
    commonMistakes: "Có thể viết tắt ～ちゃだめ",
    usageNotes: "Cấm đoán"
  },

  "～ないでください": {
    categories: ["verbForms", "expressions"],
    functions: ["request", "prohibition"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～てください", "～てはいけません"],
    tips: "ない-form + でください = vui lòng đừng làm",
    mnemonics: "食べないでください = please don't eat",
    commonMistakes: "Dùng ない-form, không phải ません-form",
    usageNotes: "Yêu cầu không làm gì"
  },

  "～なければなりません": {
    categories: ["verbForms", "expressions"],
    functions: ["obligation"],
    jlptLevel: "N4",
    difficulty: "intermediate",
    relatedPatterns: ["～なくてもいいです"],
    tips: "ない-form: ない→なければならない = phải làm",
    mnemonics: "食べなければならない = must eat (obligation)",
    commonMistakes: "Có thể viết tắt ～なきゃ",
    usageNotes: "Bắt buộc, nghĩa vụ"
  },

  "～なくてもいいです": {
    categories: ["verbForms", "expressions"],
    functions: ["permission"],
    jlptLevel: "N4",
    difficulty: "intermediate",
    relatedPatterns: ["～なければなりません"],
    tips: "ない-form: ない→なくてもいい = không cần phải làm",
    mnemonics: "食べなくてもいい = don't have to eat (not necessary)",
    commonMistakes: "Không nhầm với てはいけません (cấm)",
    usageNotes: "Không bắt buộc"
  },

  // ===== LESSON 16 =====
  "～て、～": {
    categories: ["verbForms", "sentencePatterns"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～てから"],
    tips: "て-form nối 2 hành động liên tiếp hoặc song song",
    mnemonics: "起きて、食べて、学校へ行く = wake up, eat, go to school",
    commonMistakes: "Dùng て-form cho tất cả động từ trừ động từ cuối",
    usageNotes: "Nối chuỗi hành động"
  },

  "～てから": {
    categories: ["verbForms", "expressions"],
    functions: ["time"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～て、～", "～た後で"],
    tips: "て-form + から = sau khi làm (nhấn mạnh thứ tự)",
    mnemonics: "食べてから寝る = after eating, sleep",
    commonMistakes: "Khác với て連用: てから nhấn mạnh hành động 1 hoàn thành rồi mới làm 2",
    usageNotes: "Sau khi làm gì"
  },

  // ===== LESSON 17 =====
  "～ないで": {
    categories: ["verbForms", "expressions"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～ないでください", "～なくて"],
    tips: "ない-form + で = không làm mà (làm việc khác)",
    mnemonics: "食べないで寝る = sleep without eating",
    commonMistakes: "Khác với ～なくて (lý do tiêu cực)",
    usageNotes: "Làm việc này mà không làm việc kia"
  },

  "～なくて": {
    categories: ["verbForms", "expressions"],
    functions: ["reason"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～ないで", "～て"],
    tips: "ない-form: ない→なくて = không... nên (lý do)",
    mnemonics: "お金がなくて買えない = don't have money, so can't buy",
    commonMistakes: "Dùng cho lý do tiêu cực",
    usageNotes: "Lý do phủ định"
  },

  // ===== LESSON 18 =====
  "～ことができます": {
    categories: ["verbForms", "expressions"],
    functions: ["ability"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["可能形", "～られます"],
    tips: "辞書形 + ことができる = có thể làm (khả năng)",
    mnemonics: "食べることができる = can eat (ability)",
    commonMistakes: "Dùng 辞書形, không phải ます-form",
    usageNotes: "Biểu thị khả năng"
  },

  "～の が 得意です/苦手です": {
    categories: ["particles", "adjectives"],
    functions: ["ability", "opinion"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～が 好きです/嫌いです"],
    tips: "得意=giỏi, 苦手=không giỏi (khả năng chủ quan)",
    mnemonics: "数学が得意 = good at math, 運動が苦手 = bad at sports",
    commonMistakes: "Dùng が, không dùng を",
    usageNotes: "Năng lực, sở trường/điểm yếu"
  },

  "～し、～し": {
    categories: ["sentencePatterns", "particles"],
    functions: ["reason"],
    jlptLevel: "N4",
    difficulty: "intermediate",
    relatedPatterns: ["～て、～"],
    tips: "し liệt kê nhiều lý do hoặc đặc điểm",
    mnemonics: "安いし、おいしいし = cheap and delicious (listing reasons)",
    commonMistakes: "Có thể có 2+ lý do, kết thúc bằng し",
    usageNotes: "Liệt kê lý do, đặc điểm"
  },

  // ===== LESSON 8 (Additional) =====
  "～形容詞（い）": {
    categories: ["adjectives"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～形容詞（な）"],
    tips: "い-adj: đổi い→かった (quá khứ), い→くない (phủ định)",
    mnemonics: "高い→高かった, 高くない",
    commonMistakes: "いい→よかった (bất quy tắc)",
    usageNotes: "Tính từ đuôi い"
  },

  "～形容詞（な）": {
    categories: ["adjectives"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "beginner",
    relatedPatterns: ["～形容詞（い）"],
    tips: "な-adj: +だった (quá khứ), +じゃない (phủ định)",
    mnemonics: "きれい→きれいだった, きれいじゃない",
    commonMistakes: "Trước danh từ dùng な: きれいな花",
    usageNotes: "Tính từ đuôi な"
  },

  // ===== LESSON 19 (Additional) =====
  "～た ことが あります": {
    categories: ["verbForms", "expressions"],
    functions: ["experience"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～た ことが ありません"],
    tips: "た-form + ことがある = đã từng làm (kinh nghiệm)",
    mnemonics: "日本に行ったことがある = have been to Japan",
    commonMistakes: "Dùng た-form, không phải ます-form",
    usageNotes: "Biểu thị kinh nghiệm"
  },

  "～たり ～たり します": {
    categories: ["verbForms", "expressions"],
    functions: ["description"],
    jlptLevel: "N5",
    difficulty: "intermediate",
    relatedPatterns: ["～て、～"],
    tips: "た-form + り = làm việc này, việc kia (ví dụ)",
    mnemonics: "食べたり飲んだりする = eat, drink, etc.",
    commonMistakes: "Phải có ít nhất 2 たり, kết thúc bằng します",
    usageNotes: "Liệt kê hành động mẫu"
  }
};

/**
 * Get metadata for a specific pattern
 */
export function getMetadata(pattern: string): GrammarMetadata | null {
  return PATTERN_METADATA[pattern] || null;
}

/**
 * Get all patterns in a category
 */
export function getPatternsByCategory(categoryId: string): string[] {
  const patterns: string[] = [];
  for (const [pattern, meta] of Object.entries(PATTERN_METADATA)) {
    if (meta.categories && meta.categories.includes(categoryId)) {
      patterns.push(pattern);
    }
  }
  return patterns;
}

/**
 * Get all patterns with a specific function
 */
export function getPatternsByFunction(functionId: string): string[] {
  const patterns: string[] = [];
  for (const [pattern, meta] of Object.entries(PATTERN_METADATA)) {
    if (meta.functions && meta.functions.includes(functionId)) {
      patterns.push(pattern);
    }
  }
  return patterns;
}

/**
 * Get all patterns for a JLPT level
 */
export function getPatternsByJLPT(level: string): string[] {
  const patterns: string[] = [];
  for (const [pattern, meta] of Object.entries(PATTERN_METADATA)) {
    if (meta.jlptLevel === level) {
      patterns.push(pattern);
    }
  }
  return patterns;
}
