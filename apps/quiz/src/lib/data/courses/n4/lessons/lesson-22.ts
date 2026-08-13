/**
 * N4 Core Lessons — Lesson 22
 * Focus: Complex Sentence Structures and Nominalization
 */

import type { LessonData } from '$lib/types';

export const LESSON_22_DATA: LessonData = {
  lessonNumber: 22,
  title: '複文と名詞化 (Câu phức và danh từ hóa)',
  vocabulary: [
    // Verbs related to thinking and expression
    {
      japanese: '思う（おもう）',
      kana: 'おもう',
      vietnamese: 'nghĩ',
      english: 'to think',
      type: 'main',
      example: '明日は雨が降ると思います。'
    },
    {
      japanese: '考える（かんがえる）',
      kana: 'かんがえる',
      vietnamese: 'suy nghĩ',
      english: 'to consider/think',
      type: 'main',
      example: '将来のことを考えています。'
    },
    {
      japanese: '感じる（かんじる）',
      kana: 'かんじる',
      vietnamese: 'cảm thấy',
      english: 'to feel',
      type: 'main',
      example: '暑さを感じます。'
    },
    {
      japanese: '信じる（しんじる）',
      kana: 'しんじる',
      vietnamese: 'tin tưởng',
      english: 'to believe',
      type: 'main',
      example: '友達を信じています。'
    },
    {
      japanese: '期待する（きたいする）',
      kana: 'きたいする',
      vietnamese: 'kỳ vọng',
      english: 'to expect',
      type: 'main',
      example: '成功を期待しています。'
    },
    {
      japanese: '決める（きめる）',
      kana: 'きめる',
      vietnamese: 'quyết định',
      english: 'to decide',
      type: 'main',
      example: '留学することに決めました。'
    },
    {
      japanese: '選ぶ（えらぶ）',
      kana: 'えらぶ',
      vietnamese: 'lựa chọn',
      english: 'to choose/select',
      type: 'main',
      example: '好きな色を選んでください。'
    },
    {
      japanese: '約束する（やくそくする）',
      kana: 'やくそくする',
      vietnamese: 'hứa',
      english: 'to promise',
      type: 'main',
      example: '明日会うことを約束しました。'
    },
    {
      japanese: '願う（ねがう）',
      kana: 'ねがう',
      vietnamese: 'cầu nguyện, ước',
      english: 'to wish/pray',
      type: 'main',
      example: '幸せを願っています。'
    },
    {
      japanese: '予定する（よていする）',
      kana: 'よていする',
      vietnamese: 'dự định',
      english: 'to plan/schedule',
      type: 'main',
      example: '来週出張を予定しています。'
    },
    // Perception and knowledge verbs
    {
      japanese: '知る（しる）',
      kana: 'しる',
      vietnamese: 'biết',
      english: 'to know',
      type: 'main',
      example: '彼の住所を知っています。'
    },
    {
      japanese: '分かる（わかる）',
      kana: 'わかる',
      vietnamese: 'hiểu',
      english: 'to understand',
      type: 'main',
      example: '意味が分かりました。'
    },
    {
      japanese: '気づく（きづく）',
      kana: 'きづく',
      vietnamese: 'nhận ra',
      english: 'to notice',
      type: 'main',
      example: '間違いに気づきました。'
    },
    {
      japanese: '忘れる（わすれる）',
      kana: 'わすれる',
      vietnamese: 'quên',
      english: 'to forget',
      type: 'main',
      example: '宿題を忘れてしまいました。'
    },
    {
      japanese: '覚える（おぼえる）',
      kana: 'おぼえる',
      vietnamese: 'nhớ, học thuộc',
      english: 'to memorize/remember',
      type: 'main',
      example: '新しい単語を覚えます。'
    },
    {
      japanese: '思い出す（おもいだす）',
      kana: 'おもいだす',
      vietnamese: 'nhớ lại',
      english: 'to recall/remember',
      type: 'main',
      example: '子供の頃を思い出します。'
    },
    // Communication verbs
    {
      japanese: '伝える（つたえる）',
      kana: 'つたえる',
      vietnamese: 'truyền đạt',
      english: 'to convey/tell',
      type: 'main',
      example: '気持ちを伝えたいです。'
    },
    {
      japanese: '説明する（せつめいする）',
      kana: 'せつめいする',
      vietnamese: 'giải thích',
      english: 'to explain',
      type: 'main',
      example: '使い方を説明してください。'
    },
    {
      japanese: '表現する（ひょうげんする）',
      kana: 'ひょうげんする',
      vietnamese: 'biểu hiện',
      english: 'to express',
      type: 'main',
      example: '感情を表現するのは難しいです。'
    },
    {
      japanese: '相談する（そうだんする）',
      kana: 'そうだんする',
      vietnamese: 'trao đổi, bàn bạc',
      english: 'to consult/discuss',
      type: 'main',
      example: '先生に相談しました。'
    },
    {
      japanese: '議論する（ぎろんする）',
      kana: 'ぎろんする',
      vietnamese: 'tranh luận',
      english: 'to discuss/argue',
      type: 'main',
      example: '問題について議論しました。'
    },
    // Abstract nouns
    {
      japanese: '意見（いけん）',
      kana: 'いけん',
      vietnamese: 'ý kiến',
      english: 'opinion',
      type: 'main',
      example: 'あなたの意見を聞かせてください。'
    },
    {
      japanese: '考え（かんがえ）',
      kana: 'かんがえ',
      vietnamese: 'suy nghĩ',
      english: 'thought/idea',
      type: 'main',
      example: '面白い考えですね。'
    },
    {
      japanese: '気持ち（きもち）',
      kana: 'きもち',
      vietnamese: 'cảm xúc',
      english: 'feeling',
      type: 'main',
      example: '嬉しい気持ちです。'
    },
    {
      japanese: '経験（けいけん）',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'main',
      example: '海外での経験があります。'
    },
    {
      japanese: '知識（ちしき）',
      kana: 'ちしき',
      vietnamese: 'kiến thức',
      english: 'knowledge',
      type: 'main',
      example: '専門的な知識が必要です。'
    },
    {
      japanese: '能力（のうりょく）',
      kana: 'のうりょく',
      vietnamese: 'năng lực',
      english: 'ability/capability',
      type: 'main',
      example: '日本語能力を上げたいです。'
    },
    {
      japanese: '可能性（かのうせい）',
      kana: 'かのうせい',
      vietnamese: 'khả năng (có thể xảy ra)',
      english: 'possibility',
      type: 'main',
      example: '合格する可能性があります。'
    },
    {
      japanese: '必要（ひつよう）',
      kana: 'ひつよう',
      vietnamese: 'sự cần thiết',
      english: 'necessity',
      type: 'main',
      example: '休息が必要です。'
    },
    {
      japanese: '重要（じゅうよう）',
      kana: 'じゅうよう',
      vietnamese: 'quan trọng',
      english: 'important',
      type: 'main',
      example: '健康は重要です。'
    },
    {
      japanese: '大切（たいせつ）',
      kana: 'たいせつ',
      vietnamese: 'quý báu, quan trọng',
      english: 'important/precious',
      type: 'main',
      example: '時間が大切です。'
    },
    {
      japanese: '便利（べんり）',
      kana: 'べんり',
      vietnamese: 'tiện lợi',
      english: 'convenient',
      type: 'main',
      example: 'スマホは便利です。'
    },
    {
      japanese: '不便（ふべん）',
      kana: 'ふべん',
      vietnamese: 'bất tiện',
      english: 'inconvenient',
      type: 'main',
      example: '車がないと不便です。'
    },
    // Additional vocabulary
    {
      japanese: '理由（りゆう）',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'additional',
      example: '遅れた理由を説明してください。'
    },
    {
      japanese: '原因（げんいん）',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause',
      type: 'additional',
      example: '事故の原因を調べています。'
    },
    {
      japanese: '結果（けっか）',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result',
      type: 'additional',
      example: '試験の結果が出ました。'
    },
    {
      japanese: '目的（もくてき）',
      kana: 'もくてき',
      vietnamese: 'mục đích',
      english: 'purpose/goal',
      type: 'additional',
      example: '留学の目的は何ですか。'
    },
    {
      japanese: '方法（ほうほう）',
      kana: 'ほうほう',
      vietnamese: 'phương pháp',
      english: 'method',
      type: 'additional',
      example: '良い勉強方法を教えてください。'
    },
    {
      japanese: '手段（しゅだん）',
      kana: 'しゅだん',
      vietnamese: 'phương tiện',
      english: 'means/measure',
      type: 'additional',
      example: '交通手段は何ですか。'
    },
    {
      japanese: '状況（じょうきょう）',
      kana: 'じょうきょう',
      vietnamese: 'tình hình',
      english: 'situation',
      type: 'additional',
      example: '現在の状況を報告します。'
    },
    {
      japanese: '条件（じょうけん）',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition',
      type: 'additional',
      example: '条件を満たせば合格です。'
    },
    {
      japanese: '関係（かんけい）',
      kana: 'かんけい',
      vietnamese: 'mối quan hệ',
      english: 'relationship/relation',
      type: 'additional',
      example: '二人は良い関係です。'
    },
    {
      japanese: '影響（えいきょう）',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence/effect',
      type: 'additional',
      example: '天気は気分に影響します。'
    },
    {
      japanese: '効果（こうか）',
      kana: 'こうか',
      vietnamese: 'hiệu quả',
      english: 'effect/effectiveness',
      type: 'additional',
      example: 'この薬は効果があります。'
    },
    {
      japanese: '問題（もんだい）',
      kana: 'もんだい',
      vietnamese: 'vấn đề',
      english: 'problem',
      type: 'additional',
      example: '大きな問題が起きました。'
    },
    {
      japanese: '解決（かいけつ）',
      kana: 'かいけつ',
      vietnamese: 'giải quyết',
      english: 'solution',
      type: 'additional',
      example: '問題を解決しました。'
    },
    {
      japanese: '困難（こんなん）',
      kana: 'こんなん',
      vietnamese: 'khó khăn',
      english: 'difficulty',
      type: 'additional',
      example: '困難な状況です。'
    },
    {
      japanese: '簡単（かんたん）',
      kana: 'かんたん',
      vietnamese: 'đơn giản',
      english: 'simple/easy',
      type: 'additional',
      example: 'この問題は簡単です。'
    },
    {
      japanese: '複雑（ふくざつ）',
      kana: 'ふくざつ',
      vietnamese: 'phức tạp',
      english: 'complex/complicated',
      type: 'additional',
      example: '複雑な仕組みです。'
    },
    {
      japanese: '具体的（ぐたいてき）',
      kana: 'ぐたいてき',
      vietnamese: 'cụ thể',
      english: 'concrete/specific',
      type: 'additional',
      example: '具体的な例を教えてください。'
    },
    {
      japanese: '抽象的（ちゅうしょうてき）',
      kana: 'ちゅうしょうてき',
      vietnamese: 'trừu tượng',
      english: 'abstract',
      type: 'additional',
      example: '抽象的な概念です。'
    },
    {
      japanese: '一般的（いっぱんてき）',
      kana: 'いっぱんてき',
      vietnamese: 'chung, phổ biến',
      english: 'general/common',
      type: 'additional',
      example: '一般的な考え方です。'
    },
    {
      japanese: '特別（とくべつ）',
      kana: 'とくべつ',
      vietnamese: 'đặc biệt',
      english: 'special',
      type: 'additional',
      example: '特別な日です。'
    },
    {
      japanese: '個人的（こじんてき）',
      kana: 'こじんてき',
      vietnamese: 'cá nhân',
      english: 'personal',
      type: 'additional',
      example: '個人的な意見です。'
    },
    {
      japanese: '客観的（きゃっかんてき）',
      kana: 'きゃっかんてき',
      vietnamese: 'khách quan',
      english: 'objective',
      type: 'additional',
      example: '客観的に見てください。'
    },
    {
      japanese: '主観的（しゅかんてき）',
      kana: 'しゅかんてき',
      vietnamese: 'chủ quan',
      english: 'subjective',
      type: 'additional',
      example: '主観的な判断です。'
    },
    // Supplementary
    {
      japanese: '傾向（けいこう）',
      kana: 'けいこう',
      vietnamese: 'xu hướng',
      english: 'tendency/trend',
      type: 'supplementary',
      example: '最近その傾向があります。'
    },
    {
      japanese: '特徴（とくちょう）',
      kana: 'とくちょう',
      vietnamese: 'đặc điểm',
      english: 'characteristic/feature',
      type: 'supplementary',
      example: 'この製品の特徴は何ですか。'
    },
    {
      japanese: '性格（せいかく）',
      kana: 'せいかく',
      vietnamese: 'tính cách',
      english: 'personality/character',
      type: 'supplementary',
      example: '彼は明るい性格です。'
    },
    {
      japanese: '習慣（しゅうかん）',
      kana: 'しゅうかん',
      vietnamese: 'thói quen',
      english: 'habit/custom',
      type: 'supplementary',
      example: '毎朝運動する習慣があります。'
    },
    {
      japanese: '文化（ぶんか）',
      kana: 'ぶんか',
      vietnamese: 'văn hóa',
      english: 'culture',
      type: 'supplementary',
      example: '日本の文化を学んでいます。'
    },
    {
      japanese: '伝統（でんとう）',
      kana: 'でんとう',
      vietnamese: 'truyền thống',
      english: 'tradition',
      type: 'supplementary',
      example: '伝統的な行事です。'
    },
    {
      japanese: '価値（かち）',
      kana: 'かち',
      vietnamese: 'giá trị',
      english: 'value',
      type: 'supplementary',
      example: 'この絵は価値があります。'
    },
    {
      japanese: '意味（いみ）',
      kana: 'いみ',
      vietnamese: 'ý nghĩa',
      english: 'meaning',
      type: 'supplementary',
      example: 'この言葉の意味は何ですか。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 611d7e55250a815d
    {
      japanese: "吹きます",
      kana: "ふきます",
      vietnamese: "thổi",
      english: "thổi",
      type: "main",
      example: "風が強く吹いています。\nKaze ga tsuyoku fuite imasu.\nGió đang thổi mạnh."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 7918ddabdeec34da
    {
      japanese: "風",
      kana: "かぜ",
      vietnamese: "gió",
      english: "gió",
      type: "main",
      example: "今日は風が強いです。\nKyou wa kaze ga tsuyoi desu.\nHôm nay gió mạnh."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | abf238a90f5cd376
    {
      japanese: "燃えます",
      kana: "もえます",
      vietnamese: "cháy được, bốc cháy",
      english: "cháy được, bốc cháy",
      type: "main",
      example: "ごみが燃えています。\nGomi ga moete imasu.\nRác đang cháy."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | f2befcec57da9cb2
    {
      japanese: "ごみ",
      kana: "ごみ",
      vietnamese: "rác",
      english: "rác",
      type: "main",
      example: "ごみを捨ててください。\nGomi o sutete kudasai.\nHãy vứt rác đi."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 92ebb630fe308ee5
    {
      japanese: "亡くなります",
      kana: "なくなります",
      vietnamese: "mất, qua đời",
      english: "mất, qua đời",
      type: "main",
      example: "祖父が去年亡くなりました。\nSofu ga kyonen nakunarimashita.\nÔng tôi đã mất năm ngoái."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 3bd99833d09e1bbf
    {
      japanese: "集まります",
      kana: "あつまります",
      vietnamese: "tập trung, tụ họp",
      english: "tập trung, tụ họp",
      type: "main",
      example: "駅の前に人が集まっています。\nEki no mae ni hito ga atsumatte imasu.\nMọi người đang tập trung trước ga."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 2421c37f95dcfa72
    {
      japanese: "人",
      kana: "ひと",
      vietnamese: "người",
      english: "người",
      type: "main",
      example: "あそこに人がたくさんいます。\nAsoko ni hito ga takusan imasu.\nỞ đằng kia có nhiều người."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 773d296716bf63f4
    {
      japanese: "別れます",
      kana: "わかれます",
      vietnamese: "chia tay, chia xa",
      english: "chia tay, chia xa",
      type: "main",
      example: "恋人と別れました。\nKoibito to wakaremashita.\nTôi đã chia tay người yêu."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 3a5d4b15b5a5b8c9
    {
      japanese: "します",
      kana: "します",
      vietnamese: "có cảm giác, có mùi/vị/âm thanh",
      english: "có cảm giác, có mùi/vị/âm thanh",
      type: "main",
      example: "台所からいいにおいがします。\nDaidokoro kara ii nioi ga shimasu.\nTừ bếp có mùi thơm."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 81a0d9dd6ca0e5dc
    {
      japanese: "音",
      kana: "おと",
      vietnamese: "âm thanh",
      english: "âm thanh",
      type: "main",
      example: "変な音がします。\nHen na oto ga shimasu.\nCó âm thanh lạ."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 28c6e54121c1ea22
    {
      japanese: "声",
      kana: "こえ",
      vietnamese: "tiếng nói, giọng nói",
      english: "tiếng nói, giọng nói",
      type: "main",
      example: "隣の部屋から声がします。\nTonari no heya kara koe ga shimasu.\nCó tiếng nói từ phòng bên cạnh."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 93a345469f4b8fb2
    {
      japanese: "味",
      kana: "あじ",
      vietnamese: "vị",
      english: "vị",
      type: "main",
      example: "このスープは変な味がします。\nKono suupu wa hen na aji ga shimasu.\nMón súp này có vị lạ."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 0994b9616e5691dc
    {
      japanese: "におい / 匂い",
      kana: "におい",
      vietnamese: "mùi",
      english: "mùi",
      type: "main",
      example: "花のにおいがします。\nHana no nioi ga shimasu.\nCó mùi hoa."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | e78dce5c8ff7b8e5
    {
      japanese: "厳しい",
      kana: "きびしい",
      vietnamese: "nghiêm, nghiêm khắc, nghiêm ngặt",
      english: "nghiêm, nghiêm khắc, nghiêm ngặt",
      type: "main",
      example: "私の先生は厳しいです。\nWatashi no sensei wa kibishii desu.\nThầy/cô của tôi rất nghiêm khắc."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 0d9a74cce300a714
    {
      japanese: "ひどい",
      kana: "ひどい",
      vietnamese: "tồi tệ, xấu, quá đáng",
      english: "tồi tệ, xấu, quá đáng",
      type: "main",
      example: "ひどい雨ですね。\nHidoi ame desu ne.\nMưa tệ thật nhỉ."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | d190f9e517f58027
    {
      japanese: "怖い",
      kana: "こわい",
      vietnamese: "sợ, đáng sợ, khiếp",
      english: "sợ, đáng sợ, khiếp",
      type: "main",
      example: "怖い話を聞きました。\nKowai hanashi o kikimashita.\nTôi đã nghe một câu chuyện đáng sợ."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 2d1afa691106e697
    {
      japanese: "実験",
      kana: "じっけん",
      vietnamese: "thí nghiệm, thực nghiệm",
      english: "thí nghiệm, thực nghiệm",
      type: "main",
      example: "学校で実験をしました。\nGakkou de jikken o shimashita.\nTôi đã làm thí nghiệm ở trường."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | f449b4bdd465be3c
    {
      japanese: "データ",
      kana: "データ",
      vietnamese: "dữ liệu, số liệu",
      english: "dữ liệu, số liệu",
      type: "main",
      example: "このデータを見てください。\nKono deeta o mite kudasai.\nHãy xem dữ liệu này."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 6423460d20728230
    {
      japanese: "人口",
      kana: "じんこう",
      vietnamese: "dân số",
      english: "dân số",
      type: "main",
      example: "日本の人口は少しずつ減っています。\nNihon no jinkou wa sukoshi zutsu hette imasu.\nDân số Nhật Bản đang giảm dần."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 05c7274cfbc3d2dc
    {
      japanese: "科学",
      kana: "かがく",
      vietnamese: "khoa học",
      english: "khoa học",
      type: "main",
      example: "科学に興味があります。\nKagaku ni kyoumi ga arimasu.\nTôi có hứng thú với khoa học."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 993233c7334ab706
    {
      japanese: "医学",
      kana: "いがく",
      vietnamese: "y học",
      english: "y học",
      type: "main",
      example: "兄は医学を勉強しています。\nAni wa igaku o benkyou shite imasu.\nAnh trai tôi đang học y học."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 4a32d10fd8085f55
    {
      japanese: "文学",
      kana: "ぶんがく",
      vietnamese: "văn học",
      english: "văn học",
      type: "main",
      example: "日本の文学を読みたいです。\nNihon no bungaku o yomitai desu.\nTôi muốn đọc văn học Nhật Bản."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | f857b735b7152ed7
    {
      japanese: "パトカー",
      kana: "パトカー",
      vietnamese: "xe ô-tô cảnh sát",
      english: "xe ô-tô cảnh sát",
      type: "main",
      example: "パトカーが来ました。\nPatokaa ga kimashita.\nXe cảnh sát đã đến."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 4b21c2edfc36dd74
    {
      japanese: "救急車",
      kana: "きゅうきゅうしゃ",
      vietnamese: "xe cấp cứu",
      english: "xe cấp cứu",
      type: "main",
      example: "救急車を呼んでください。\nKyuukyuusha o yonde kudasai.\nHãy gọi xe cấp cứu."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 98b2c0f0c3d5d860
    {
      japanese: "賛成",
      kana: "さんせい",
      vietnamese: "tán thành, đồng ý",
      english: "tán thành, đồng ý",
      type: "main",
      example: "私はその意見に賛成です。\nWatashi wa sonoiken ni sansei desu.\nTôi đồng ý với ý kiến đó."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | cc6ed3347896578d
    {
      japanese: "反対",
      kana: "はんたい",
      vietnamese: "phản đối",
      english: "phản đối",
      type: "main",
      example: "父は私の留学に反対しています。\nChichi wa watashi no ryuugaku ni hantai shite imasu.\nBố tôi đang phản đối việc du học của tôi."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | 1f349058a6cc77f0
    {
      japanese: "大統領",
      kana: "だいとうりょう",
      vietnamese: "tổng thống",
      english: "tổng thống",
      type: "main",
      example: "アメリカの大統領について話しました。\nAmerika no daitouryou ni tsuite hanashimashita.\nChúng tôi đã nói về tổng thống Mỹ."
    },
    // source: review_tu_vung_bai_47.md | 1. Từ vựng chính | f1f736e31c8b8bad
    {
      japanese: "〜によると",
      kana: "〜によると",
      vietnamese: "theo ~, dựa theo nguồn thông tin ~",
      english: "theo ~, dựa theo nguồn thông tin ~",
      type: "main",
      example: "天気予報によると、明日は雨です。\nTenki yohou ni yoru to, ashita wa ame desu.\nTheo dự báo thời tiết, ngày mai trời mưa."
    },
    // source: review_tu_vung_bai_47.md | 2. Từ vựng hội thoại | 9ba5201ffe86bd03
    {
      japanese: "婚約します",
      kana: "こんやくします",
      vietnamese: "đính hôn",
      english: "đính hôn",
      type: "supplementary",
      example: "姉は来月婚約します。\nAne wa raigetsu kon'yaku shimasu.\nChị tôi sẽ đính hôn vào tháng sau."
    },
    // source: review_tu_vung_bai_47.md | 2. Từ vựng hội thoại | 2c933ab5680b5651
    {
      japanese: "どうも",
      kana: "どうも",
      vietnamese: "có vẻ như, có lẽ là",
      english: "có vẻ như, có lẽ là",
      type: "supplementary",
      example: "どうも雨が降りそうです。\nDoumo ame ga furisou desu.\nCó vẻ như trời sắp mưa."
    },
    // source: review_tu_vung_bai_47.md | 2. Từ vựng hội thoại | a005f5f114f7538d
    {
      japanese: "恋人",
      kana: "こいびと",
      vietnamese: "người yêu",
      english: "người yêu",
      type: "supplementary",
      example: "恋人にプレゼントをあげました。\nKoibito ni purezento o agemashita.\nTôi đã tặng quà cho người yêu."
    },
    // source: review_tu_vung_bai_47.md | 2. Từ vựng hội thoại | d7a5ca566c235622
    {
      japanese: "相手",
      kana: "あいて",
      vietnamese: "đối phương, người kia, đối tác",
      english: "đối phương, người kia, đối tác",
      type: "supplementary",
      example: "話す相手がいません。\nHanasu aite ga imasen.\nTôi không có người để nói chuyện."
    },
    // source: review_tu_vung_bai_47.md | 2. Từ vựng hội thoại | 7cf3249c4b2c746a
    {
      japanese: "知り合います",
      kana: "しりあいます",
      vietnamese: "gặp gỡ, làm quen",
      english: "gặp gỡ, làm quen",
      type: "supplementary",
      example: "パーティーで彼と知り合いました。\nPaatii de kare to shiriaimashita.\nTôi đã làm quen với anh ấy ở bữa tiệc."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | ec4ac8e6d15df96d
    {
      japanese: "化粧",
      kana: "けしょう",
      vietnamese: "sự trang điểm",
      english: "sự trang điểm",
      type: "supplementary",
      example: "母は毎朝化粧をします。\nHaha wa maiasa keshou o shimasu.\nMẹ tôi trang điểm mỗi sáng."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | 4560a5d1bae26d32
    {
      japanese: "世話をします",
      kana: "せわをします",
      vietnamese: "chăm sóc",
      english: "chăm sóc",
      type: "supplementary",
      example: "妹の世話をします。\nImouto no sewa o shimasu.\nTôi chăm sóc em gái."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | a7ca23fbc7afc269
    {
      japanese: "女性",
      kana: "じょせい",
      vietnamese: "nữ giới, phụ nữ",
      english: "nữ giới, phụ nữ",
      type: "supplementary",
      example: "あの女性は医者です。\nAno josei wa isha desu.\nNgười phụ nữ kia là bác sĩ."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | d285e29bfa0e2bde
    {
      japanese: "男性",
      kana: "だんせい",
      vietnamese: "nam giới, đàn ông",
      english: "nam giới, đàn ông",
      type: "supplementary",
      example: "この店は男性にも人気があります。\nKono mise wa dansei ni mo ninki ga arimasu.\nCửa hàng này cũng được nam giới yêu thích."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | e5d40071bd243f13
    {
      japanese: "長生き",
      kana: "ながいき",
      vietnamese: "sống lâu, thọ",
      english: "sống lâu, thọ",
      type: "supplementary",
      example: "祖母は長生きしました。\nSobo wa nagaiki shimashita.\nBà tôi đã sống rất thọ."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | 775364d0d06af526
    {
      japanese: "理由",
      kana: "りゆう",
      vietnamese: "lý do",
      english: "lý do",
      type: "supplementary",
      example: "遅れた理由を説明しました。\nOkureta riyuu o setsumei shimashita.\nTôi đã giải thích lý do đến muộn."
    },
    // source: review_tu_vung_bai_47.md | 3. Từ vựng đọc hiểu | 8024c2d5059b1f7f
    {
      japanese: "関係",
      kana: "かんけい",
      vietnamese: "quan hệ, liên quan",
      english: "quan hệ, liên quan",
      type: "supplementary",
      example: "食べ物と健康は関係があります。\nTabemono to kenkou wa kankei ga arimasu.\nĐồ ăn và sức khỏe có liên quan với nhau."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 2c92d10264a028ce
    {
      japanese: "風が吹きます",
      kana: "風が吹きます",
      vietnamese: "gió thổi",
      english: "gió thổi",
      type: "supplementary",
      example: "Chủ ngữ thường là 風 / kaze = gió."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | ba915a2c428bd2ac
    {
      japanese: "ごみが燃えます",
      kana: "ごみが燃えます",
      vietnamese: "rác cháy",
      english: "rác cháy",
      type: "supplementary",
      example: "燃えます / moemasu là tự cháy hoặc cháy được."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | f083f20a00f7d1de
    {
      japanese: "人が集まります",
      kana: "人が集まります",
      vietnamese: "mọi người tập trung",
      english: "mọi người tập trung",
      type: "supplementary",
      example: "集まります / atsumarimasu là tự tụ lại, không cần tân ngữ を / o."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 67decc54dbac45d4
    {
      japanese: "恋人と別れます",
      kana: "恋人と別れます",
      vietnamese: "chia tay người yêu",
      english: "chia tay người yêu",
      type: "supplementary",
      example: "Dùng と / to với người mình chia tay."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 03f305e82ef0ace9
    {
      japanese: "音がします",
      kana: "音がします",
      vietnamese: "có âm thanh",
      english: "có âm thanh",
      type: "supplementary",
      example: "Dùng khi nghe thấy âm thanh nào đó."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | cbee082f5fab27d3
    {
      japanese: "声がします",
      kana: "声がします",
      vietnamese: "có tiếng nói, giọng nói",
      english: "có tiếng nói, giọng nói",
      type: "supplementary",
      example: "声 / koe là giọng nói của người."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | fdd462414b71e074
    {
      japanese: "味がします",
      kana: "味がします",
      vietnamese: "có vị",
      english: "có vị",
      type: "supplementary",
      example: "Dùng khi nói món ăn có vị gì."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | feb4b48639acda1f
    {
      japanese: "においがします",
      kana: "においがします",
      vietnamese: "có mùi",
      english: "có mùi",
      type: "supplementary",
      example: "Dùng cho cả mùi thơm và mùi khó chịu."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 0768d4f8c0f33f64
    {
      japanese: "〜に賛成します",
      kana: "〜に賛成します",
      vietnamese: "tán thành với ~",
      english: "tán thành với ~",
      type: "supplementary",
      example: "Dùng trợ từ に / ni."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 324e3efd07db5a19
    {
      japanese: "〜に反対します",
      kana: "〜に反対します",
      vietnamese: "phản đối ~",
      english: "phản đối ~",
      type: "supplementary",
      example: "Dùng trợ từ に / ni."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | a3484bd45e360961
    {
      japanese: "〜によると",
      kana: "〜によると",
      vietnamese: "theo ~",
      english: "theo ~",
      type: "supplementary",
      example: "Dùng để nêu nguồn thông tin: báo, dự báo, dữ liệu, người nói."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 396b2ab1bb6fcc86
    {
      japanese: "化粧をします",
      kana: "化粧をします",
      vietnamese: "trang điểm",
      english: "trang điểm",
      type: "supplementary",
      example: "Cụm cố định: Nをします / N o shimasu."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 5d7b2884fcdc7ed5
    {
      japanese: "世話をします",
      kana: "世話をします",
      vietnamese: "chăm sóc",
      english: "chăm sóc",
      type: "supplementary",
      example: "Thường dùng: 子どもの世話をします / kodomo no sewa o shimasu."
    },
    // source: review_tu_vung_bai_47.md | 4. Cụm cần nhớ | 6914b23c6ed0e73b
    {
      japanese: "知り合います",
      kana: "知り合います",
      vietnamese: "làm quen",
      english: "làm quen",
      type: "supplementary",
      example: "Thường đi với と / to: 彼と知り合います / kare to shiriai masu."
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 325385dd162569c8
    {
      japanese: "風",
      kana: "フウ / fuu",
      vietnamese: "PHONG — gió",
      english: "gió",
      type: "kanji",
      example: "風 / kaze"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | d84996d7d0eb9f2e
    {
      japanese: "人",
      kana: "ジン / jin, ニン / nin",
      vietnamese: "NHÂN — người",
      english: "người",
      type: "kanji",
      example: "人 / hito, 人口 / jinkou"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 3c89838003ca1c89
    {
      japanese: "口",
      kana: "コウ / kou, ク / ku",
      vietnamese: "KHẨU — miệng, cửa, nhân khẩu",
      english: "miệng, cửa, nhân khẩu",
      type: "kanji",
      example: "人口 / jinkou"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 3de0f9ca7d45b896
    {
      japanese: "音",
      kana: "オン / on",
      vietnamese: "ÂM — âm thanh",
      english: "âm thanh",
      type: "kanji",
      example: "音 / oto"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 8d42e5c3e8894e0e
    {
      japanese: "味",
      kana: "ミ / mi",
      vietnamese: "VỊ — vị",
      english: "vị",
      type: "kanji",
      example: "味 / aji"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | c5c188d2907918ae
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "HỌC — học",
      english: "học",
      type: "kanji",
      example: "科学 / kagaku, 医学 / igaku, 文学 / bungaku"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 7a761ff68e7b747a
    {
      japanese: "文",
      kana: "ブン / bun, モン / mon",
      vietnamese: "VĂN — văn, câu chữ",
      english: "văn, câu chữ",
      type: "kanji",
      example: "文学 / bungaku"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | ec6cc26b40793132
    {
      japanese: "車",
      kana: "シャ / sha",
      vietnamese: "XA — xe",
      english: "xe",
      type: "kanji",
      example: "救急車 / kyuukyuusha"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 49f9be9dc39885e3
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "ĐẠI — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大統領 / daitouryou"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 5089e0993ff7a290
    {
      japanese: "女",
      kana: "ジョ / jo, ニョ / nyo",
      vietnamese: "NỮ — nữ, con gái",
      english: "nữ, con gái",
      type: "kanji",
      example: "女性 / josei"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | a7bd686a3f86f15e
    {
      japanese: "男",
      kana: "ダン / dan, ナン / nan",
      vietnamese: "NAM — nam, con trai",
      english: "nam, con trai",
      type: "kanji",
      example: "男性 / dansei"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | 9aac44ba73181c29
    {
      japanese: "長",
      kana: "チョウ / chou",
      vietnamese: "TRƯỜNG — dài, trưởng",
      english: "dài, trưởng",
      type: "kanji",
      example: "長生き / nagaiki"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | d3f52bb1a03d1655
    {
      japanese: "生",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "SINH — sống, sinh ra",
      english: "sống, sinh ra",
      type: "kanji",
      example: "長生き / nagaiki"
    },
    // source: review_tu_vung_bai_47.md | 5. Kanji N5–N4 cần học kỹ | f944a8da46659045
    {
      japanese: "理",
      kana: "リ / ri",
      vietnamese: "LÝ — lý lẽ, lý do",
      english: "lý lẽ, lý do",
      type: "kanji",
      example: "理由 / riyuu"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e4c0ada4eb8e17e8
    {
      japanese: "風",
      kana: "かぜ / kaze",
      vietnamese: "PHONG — 風 = gió",
      english: "風 = gió",
      type: "kanji",
      example: "風"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | df0c78743c7766a3
    {
      japanese: "台風",
      kana: "フウ / fuu",
      vietnamese: "PHONG — 台 = đài, lớn; 風 = gió",
      english: "台 = đài, lớn; 風 = gió",
      type: "kanji",
      example: "台風"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 80b1ce772c5b7690
    {
      japanese: "人",
      kana: "ひと / hito",
      vietnamese: "NHÂN — 人 = người",
      english: "人 = người",
      type: "kanji",
      example: "人"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 3f23428fb1ae0352
    {
      japanese: "人口",
      kana: "ジン / jin",
      vietnamese: "NHÂN — 人 = người; 口 = miệng, nhân khẩu",
      english: "人 = người; 口 = miệng, nhân khẩu",
      type: "kanji",
      example: "人口"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e1407fdffe7e6185
    {
      japanese: "日本人",
      kana: "ジン / jin",
      vietnamese: "NHÂN — 日 = Nhật; 本 = gốc; 人 = người",
      english: "日 = Nhật; 本 = gốc; 人 = người",
      type: "kanji",
      example: "日本人"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c9e696b0a4d8c47a
    {
      japanese: "口",
      kana: "くち / kuchi",
      vietnamese: "KHẨU — 口 = miệng, cửa",
      english: "口 = miệng, cửa",
      type: "kanji",
      example: "口"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | af3781f9b47c8ab0
    {
      japanese: "入口",
      kana: "コウ / kou",
      vietnamese: "KHẨU — 入 = vào; 口 = cửa",
      english: "入 = vào; 口 = cửa",
      type: "kanji",
      example: "入口"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f27bc95d4031e540
    {
      japanese: "音",
      kana: "おと / oto",
      vietnamese: "ÂM — 音 = âm thanh",
      english: "音 = âm thanh",
      type: "kanji",
      example: "音"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 6d52a0baea92975c
    {
      japanese: "音楽",
      kana: "オン / on",
      vietnamese: "ÂM — 音 = âm; 楽 = nhạc, vui",
      english: "音 = âm; 楽 = nhạc, vui",
      type: "kanji",
      example: "音楽"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c64066cdf6e0df9c
    {
      japanese: "味",
      kana: "あじ / aji",
      vietnamese: "VỊ — 味 = vị",
      english: "味 = vị",
      type: "kanji",
      example: "味"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 79e7117f5520c7b6
    {
      japanese: "意味",
      kana: "ミ / mi",
      vietnamese: "VỊ — 意 = ý; 味 = vị, nghĩa",
      english: "意 = ý; 味 = vị, nghĩa",
      type: "kanji",
      example: "意味"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c37dbbb2d7ec3ecd
    {
      japanese: "学ぶ",
      kana: "まな.ぶ / manabu",
      vietnamese: "HỌC — 学 = học",
      english: "学 = học",
      type: "kanji",
      example: "学ぶ"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 16458cedbc2b80f0
    {
      japanese: "学校",
      kana: "ガク / gaku",
      vietnamese: "HỌC — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4681f9789c37bc07
    {
      japanese: "科学",
      kana: "ガク / gaku",
      vietnamese: "HỌC — 科 = khoa, ngành; 学 = học",
      english: "科 = khoa, ngành; 学 = học",
      type: "kanji",
      example: "科学"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c6d8bb5ef5ce0bb6
    {
      japanese: "文",
      kana: "ふみ / fumi",
      vietnamese: "VĂN — 文 = văn, câu chữ",
      english: "文 = văn, câu chữ",
      type: "kanji",
      example: "文"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | a37f8f2f8e138ec6
    {
      japanese: "文学",
      kana: "ブン / bun",
      vietnamese: "VĂN — 文 = văn; 学 = học",
      english: "文 = văn; 学 = học",
      type: "kanji",
      example: "文学"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 95cc40b5df5b9684
    {
      japanese: "車",
      kana: "くるま / kuruma",
      vietnamese: "XA — 車 = xe",
      english: "車 = xe",
      type: "kanji",
      example: "車"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8eab5cfe0dce096d
    {
      japanese: "電車",
      kana: "シャ / sha",
      vietnamese: "XA — 電 = điện; 車 = xe",
      english: "電 = điện; 車 = xe",
      type: "kanji",
      example: "電車"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cd626bee7dc65829
    {
      japanese: "救急車",
      kana: "シャ / sha",
      vietnamese: "XA — 救 = cứu; 急 = cấp; 車 = xe",
      english: "救 = cứu; 急 = cấp; 車 = xe",
      type: "kanji",
      example: "救急車"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 867ae306602acca6
    {
      japanese: "大きい",
      kana: "おお.きい / ookii",
      vietnamese: "ĐẠI — 大 = lớn",
      english: "大 = lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8b40aac84875921e
    {
      japanese: "大学",
      kana: "ダイ / dai",
      vietnamese: "ĐẠI — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7d1d8f749b6e4d96
    {
      japanese: "女の人",
      kana: "おんな / onna",
      vietnamese: "NỮ — 女 = nữ",
      english: "女 = nữ",
      type: "kanji",
      example: "女の人"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 16a4dfc7ec3b8dc2
    {
      japanese: "女性",
      kana: "ジョ / jo",
      vietnamese: "NỮ — 女 = nữ; 性 = giới tính",
      english: "女 = nữ; 性 = giới tính",
      type: "kanji",
      example: "女性"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7c609e4d26bc34e1
    {
      japanese: "男の人",
      kana: "おとこ / otoko",
      vietnamese: "NAM — 男 = nam",
      english: "男 = nam",
      type: "kanji",
      example: "男の人"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ba72ab1ca8cb7200
    {
      japanese: "男性",
      kana: "ダン / dan",
      vietnamese: "NAM — 男 = nam; 性 = giới tính",
      english: "男 = nam; 性 = giới tính",
      type: "kanji",
      example: "男性"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 06353391b463fb0a
    {
      japanese: "長い",
      kana: "なが.い / nagai",
      vietnamese: "TRƯỜNG — 長 = dài",
      english: "長 = dài",
      type: "kanji",
      example: "長い"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7a0aa383fff06e76
    {
      japanese: "社長",
      kana: "チョウ / chou",
      vietnamese: "TRƯỜNG — 社 = công ty; 長 = trưởng",
      english: "社 = công ty; 長 = trưởng",
      type: "kanji",
      example: "社長"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 3f928d23dee5c1ad
    {
      japanese: "生きる",
      kana: "い.きる / ikiru",
      vietnamese: "SINH — 生 = sống",
      english: "生 = sống",
      type: "kanji",
      example: "生きる"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0d5a2cf66b0e3cd8
    {
      japanese: "先生",
      kana: "セイ / sei",
      vietnamese: "SINH — 先 = trước; 生 = sinh, người",
      english: "先 = trước; 生 = sinh, người",
      type: "kanji",
      example: "先生"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4f03c9c094a80f18
    {
      japanese: "理由",
      kana: "リ / ri",
      vietnamese: "LÝ — 理 = lý lẽ; 由 = nguyên do",
      english: "理 = lý lẽ; 由 = nguyên do",
      type: "kanji",
      example: "理由"
    },
    // source: review_tu_vung_bai_47.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cb19195d0462ca1c
    {
      japanese: "料理",
      kana: "リ / ri",
      vietnamese: "LÝ — 料 = nguyên liệu; 理 = xử lý",
      english: "料 = nguyên liệu; 理 = xử lý",
      type: "kanji",
      example: "料理"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～のは～です',
      vietnamese: 'cái... là...',
      english: 'what... is...',
      type: 'main',
      explanation: 'Dùng để nhấn mạnh chủ đề. Danh từ hóa câu bằng の rồi dùng làm chủ ngữ. の danh từ hóa động từ hoặc tính từ.',
      examples: [
        {
          japanese: '私の趣味は映画を見るのです。',
          vietnamese: 'Sở thích của tôi là xem phim.',
          english: 'My hobby is watching movies.',
          type: 'main'
        },
        {
          japanese: '難しいのは漢字を覚えることです。',
          vietnamese: 'Cái khó là nhớ kanji.',
          english: 'What is difficult is memorizing kanji.',
          type: 'main'
        },
        {
          japanese: '大切なのは努力することです。',
          vietnamese: 'Điều quan trọng là cố gắng.',
          english: 'What is important is to make an effort.',
          type: 'main'
        },
        {
          japanese: '好きなのは読書をすることです。',
          vietnamese: 'Điều tôi thích là đọc sách.',
          english: 'What I like is reading books.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～のが～',
      vietnamese: 'việc... thì...',
      english: 'the act of... is...',
      type: 'main',
      explanation: 'Tương tự ～のは～ nhưng が nhấn mạnh thông tin mới hoặc tính từ/động từ đi sau. の danh từ hóa câu để làm chủ ngữ.',
      examples: [
        {
          japanese: '日本語を話すのが上手ですね。',
          vietnamese: 'Bạn nói tiếng Nhật giỏi nhỉ.',
          english: 'You are good at speaking Japanese.',
          type: 'main'
        },
        {
          japanese: '早く起きるのが苦手です。',
          vietnamese: 'Tôi không giỏi việc dậy sớm.',
          english: 'I am not good at waking up early.',
          type: 'main'
        },
        {
          japanese: '料理を作るのが好きです。',
          vietnamese: 'Tôi thích nấu ăn.',
          english: 'I like cooking.',
          type: 'main'
        },
        {
          japanese: '運動するのが大切です。',
          vietnamese: 'Việc tập thể dục rất quan trọng.',
          english: 'Exercising is important.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～のを～',
      vietnamese: 'việc... (làm tân ngữ)',
      english: 'the act of... (as object)',
      type: 'main',
      explanation: 'の danh từ hóa câu để làm tân ngữ (object). を đánh dấu tân ngữ của động từ.',
      examples: [
        {
          japanese: '友達が来るのを待っています。',
          vietnamese: 'Tôi đang đợi bạn đến.',
          english: 'I am waiting for my friend to come.',
          type: 'main'
        },
        {
          japanese: '彼女が歌うのを聞きました。',
          vietnamese: 'Tôi đã nghe cô ấy hát.',
          english: 'I heard her sing.',
          type: 'main'
        },
        {
          japanese: '桜が咲くのを見ました。',
          vietnamese: 'Tôi đã thấy hoa anh đào nở.',
          english: 'I saw the cherry blossoms bloom.',
          type: 'main'
        },
        {
          japanese: '宿題を忘れるのを防ぎます。',
          vietnamese: 'Tôi ngăn chặn việc quên bài tập.',
          english: 'I prevent forgetting homework.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことは～',
      vietnamese: 'việc... là...',
      english: 'the fact that... is...',
      type: 'main',
      explanation: 'こと cũng danh từ hóa câu như の nhưng mang tính trừu tượng, chung chung hơn. Dùng cho sự thật, kiến thức, khả năng.',
      examples: [
        {
          japanese: '日本語を話せることは便利です。',
          vietnamese: 'Việc có thể nói tiếng Nhật thì tiện lợi.',
          english: 'Being able to speak Japanese is convenient.',
          type: 'main'
        },
        {
          japanese: '健康であることは幸せです。',
          vietnamese: 'Việc khỏe mạnh là hạnh phúc.',
          english: 'Being healthy is happiness.',
          type: 'main'
        },
        {
          japanese: '彼が来ないことは分かっていました。',
          vietnamese: 'Tôi đã biết việc anh ấy không đến.',
          english: 'I knew that he would not come.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '～ことができる',
      vietnamese: 'có thể...',
      english: 'can/be able to...',
      type: 'main',
      explanation: 'Biểu thị khả năng. こと danh từ hóa động từ, できる nghĩa là có thể làm được.',
      examples: [
        {
          japanese: '日本語を読むことができます。',
          vietnamese: 'Tôi có thể đọc tiếng Nhật.',
          english: 'I can read Japanese.',
          type: 'main'
        },
        {
          japanese: 'ここで写真を撮ることができますか。',
          vietnamese: 'Có thể chụp ảnh ở đây không?',
          english: 'Can I take pictures here?',
          type: 'main'
        },
        {
          japanese: '明日来ることができません。',
          vietnamese: 'Ngày mai tôi không thể đến.',
          english: 'I cannot come tomorrow.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～と思う',
      vietnamese: 'tôi nghĩ rằng...',
      english: 'I think that...',
      type: 'main',
      explanation: 'Biểu thị suy nghĩ, ý kiến của người nói. と đánh dấu nội dung câu trích dẫn hoặc suy nghĩ.',
      examples: [
        {
          japanese: '明日は雨が降ると思います。',
          vietnamese: 'Tôi nghĩ ngày mai sẽ mưa.',
          english: 'I think it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は来ないと思います。',
          vietnamese: 'Tôi nghĩ anh ấy sẽ không đến.',
          english: 'I think he will not come.',
          type: 'main'
        },
        {
          japanese: 'この本は面白いと思いました。',
          vietnamese: 'Tôi đã nghĩ cuốn sách này thú vị.',
          english: 'I thought this book was interesting.',
          type: 'main'
        },
        {
          japanese: '試験に合格できると思います。',
          vietnamese: 'Tôi nghĩ mình có thể đậu kỳ thi.',
          english: 'I think I can pass the exam.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～と言う/言った',
      vietnamese: 'nói rằng...',
      english: 'say that...',
      type: 'main',
      explanation: 'Trích dẫn lời nói của ai đó. と đánh dấu nội dung được trích dẫn.',
      examples: [
        {
          japanese: '先生は明日休みだと言いました。',
          vietnamese: 'Thầy nói ngày mai nghỉ.',
          english: 'The teacher said that tomorrow is a holiday.',
          type: 'main'
        },
        {
          japanese: '彼は来ると言っていました。',
          vietnamese: 'Anh ấy nói sẽ đến.',
          english: 'He said he would come.',
          type: 'main'
        },
        {
          japanese: '母は早く帰りなさいと言いました。',
          vietnamese: 'Mẹ nói hãy về sớm.',
          english: 'My mother said to come home early.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～と聞く/聞いた',
      vietnamese: 'nghe nói rằng...',
      english: 'hear that...',
      type: 'additional',
      explanation: 'Biểu thị thông tin được nghe từ người khác. と đánh dấu nội dung được nghe.',
      examples: [
        {
          japanese: '田中さんは結婚すると聞きました。',
          vietnamese: 'Tôi nghe nói anh Tanaka sẽ kết hôn.',
          english: 'I heard that Mr. Tanaka will get married.',
          type: 'main'
        },
        {
          japanese: 'あの店は美味しいと聞いています。',
          vietnamese: 'Tôi nghe nói quán đó ngon.',
          english: 'I hear that that restaurant is delicious.',
          type: 'main'
        },
        {
          japanese: '明日は雪だと聞きました。',
          vietnamese: 'Tôi nghe nói ngày mai sẽ có tuyết.',
          english: 'I heard it will snow tomorrow.',
          type: 'additional'
        }
      ]
    }
  ]
};
