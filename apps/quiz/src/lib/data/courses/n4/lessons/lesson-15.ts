/**
 * N4 Core Lessons — Lesson 15: Conjunctions and Transitions
 * Connecting sentences and expressing relationships
 */

import type { LessonData } from '$lib/types';

export const LESSON_15_DATA: LessonData = {
  lessonNumber: 15,
  title: '接続表現 (Connective Expressions)',
  vocabulary: [
    // Conjunctions - reason
    {
      japanese: 'だから',
      kana: 'だから',
      vietnamese: 'vì vậy, cho nên',
      english: 'so, therefore',
      type: 'main',
      example: '雨が降っています。だから、傘を持って行きます。'
    },
    {
      japanese: 'それで',
      kana: 'それで',
      vietnamese: 'vì vậy, do đó',
      english: 'so, and then',
      type: 'main',
      example: '財布を忘れました。それで、お金が払えませんでした。'
    },
    {
      japanese: 'ですから',
      kana: 'ですから',
      vietnamese: 'vì vậy (lịch sự)',
      english: 'therefore, so (formal)',
      type: 'main',
      example: '明日は休みです。ですから、ゆっくり休めます。'
    },
    {
      japanese: 'そのため',
      kana: 'そのため',
      vietnamese: 'vì lý do đó',
      english: 'for that reason',
      type: 'main',
      example: '台風が来ました。そのため、電車が止まりました。'
    },

    // Conjunctions - contrast
    {
      japanese: 'しかし',
      kana: 'しかし',
      vietnamese: 'tuy nhiên',
      english: 'however, but',
      type: 'main',
      example: '勉強しました。しかし、試験に落ちました。'
    },
    {
      japanese: 'でも',
      kana: 'でも',
      vietnamese: 'nhưng',
      english: 'but, however',
      type: 'main',
      example: '疲れています。でも、頑張ります。'
    },
    {
      japanese: 'ところが',
      kana: 'ところが',
      vietnamese: 'nhưng mà',
      english: 'however, but (contrary to expectation)',
      type: 'main',
      example: '早く出ました。ところが、遅刻しました。'
    },
    {
      japanese: 'けれども',
      kana: 'けれども',
      vietnamese: 'nhưng, tuy nhiên',
      english: 'but, however',
      type: 'main',
      example: '日本語は難しいです。けれども、面白いです。'
    },
    {
      japanese: 'が',
      kana: 'が',
      vietnamese: 'nhưng',
      english: 'but',
      type: 'main',
      example: '行きたいですが、時間がありません。'
    },

    // Conjunctions - addition
    {
      japanese: 'それに',
      kana: 'それに',
      vietnamese: 'hơn nữa',
      english: 'besides, moreover',
      type: 'main',
      example: '彼は親切です。それに、頭もいいです。'
    },
    {
      japanese: 'そして',
      kana: 'そして',
      vietnamese: 'và rồi',
      english: 'and, and then',
      type: 'main',
      example: '駅に行きました。そして、電車に乗りました。'
    },
    {
      japanese: 'また',
      kana: 'また',
      vietnamese: 'thêm nữa, lại',
      english: 'also, again',
      type: 'main',
      example: 'これは安いです。また、品質もいいです。'
    },
    {
      japanese: 'その上',
      kana: 'そのうえ',
      vietnamese: 'hơn nữa',
      english: 'moreover, furthermore',
      type: 'main',
      example: '仕事が多いです。その上、難しいです。'
    },

    // Conjunctions - condition
    {
      japanese: 'では',
      kana: 'では',
      vietnamese: 'vậy thì',
      english: 'then, in that case',
      type: 'main',
      example: '時間がありませんか。では、また今度。'
    },
    {
      japanese: 'それなら',
      kana: 'それなら',
      vietnamese: 'nếu vậy thì',
      english: 'if so, in that case',
      type: 'main',
      example: '雨が降りますか。それなら、行きません。'
    },
    {
      japanese: 'じゃあ',
      kana: 'じゃあ',
      vietnamese: 'vậy thì',
      english: 'then, well then',
      type: 'main',
      example: '準備ができましたか。じゃあ、行きましょう。'
    },
    {
      japanese: 'そうすると',
      kana: 'そうすると',
      vietnamese: 'nếu làm vậy thì',
      english: 'if you do so, then',
      type: 'main',
      example: 'ここを押します。そうすると、ドアが開きます。'
    },

    // Conjunctions - example
    {
      japanese: 'たとえば',
      kana: 'たとえば',
      vietnamese: 'ví dụ',
      english: 'for example',
      type: 'main',
      example: 'たとえば、リンゴやバナナが好きです。'
    },
    {
      japanese: 'つまり',
      kana: 'つまり',
      vietnamese: 'nghĩa là, tóm lại',
      english: 'in other words, that is',
      type: 'main',
      example: '彼は来ません。つまり、一人で行きます。'
    },
    {
      japanese: 'すなわち',
      kana: 'すなわち',
      vietnamese: 'tức là',
      english: 'namely, that is to say',
      type: 'main',
      example: '明日は休日です。すなわち、仕事はありません。'
    },

    // Time sequence
    {
      japanese: 'まず',
      kana: 'まず',
      vietnamese: 'trước tiên',
      english: 'first, to begin with',
      type: 'main',
      example: 'まず、手を洗ってください。'
    },
    {
      japanese: '次に',
      kana: 'つぎに',
      vietnamese: 'tiếp theo',
      english: 'next, then',
      type: 'main',
      example: '次に、野菜を切ります。'
    },
    {
      japanese: 'それから',
      kana: 'それから',
      vietnamese: 'sau đó',
      english: 'after that, and then',
      type: 'main',
      example: '朝ごはんを食べました。それから、学校へ行きました。'
    },
    {
      japanese: '最後に',
      kana: 'さいごに',
      vietnamese: 'cuối cùng',
      english: 'finally, lastly',
      type: 'main',
      example: '最後に、塩を入れます。'
    },
    {
      japanese: '終わりに',
      kana: 'おわりに',
      vietnamese: 'kết thúc',
      english: 'in conclusion',
      type: 'main',
      example: '終わりに、質問はありますか。'
    },

    // Transition words
    {
      japanese: 'ところで',
      kana: 'ところで',
      vietnamese: 'nhân tiện, nhân đây',
      english: 'by the way',
      type: 'main',
      example: 'ところで、明日は何をしますか。'
    },
    {
      japanese: 'さて',
      kana: 'さて',
      vietnamese: 'nào, giờ thì',
      english: 'well, now',
      type: 'main',
      example: 'さて、始めましょうか。'
    },
    {
      japanese: 'では',
      kana: 'では',
      vietnamese: 'vậy thì',
      english: 'well then',
      type: 'main',
      example: 'では、失礼します。'
    },
    {
      japanese: 'ちなみに',
      kana: 'ちなみに',
      vietnamese: 'nhân tiện',
      english: 'by the way, incidentally',
      type: 'main',
      example: 'ちなみに、あなたの年齢は？'
    },

    // Reasons and causes
    {
      japanese: '理由',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'main',
      example: '理由を教えてください。'
    },
    {
      japanese: '原因',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause',
      type: 'main',
      example: '事故の原因は何ですか。'
    },
    {
      japanese: '結果',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result',
      type: 'main',
      example: '試験の結果はどうでしたか。'
    },
    {
      japanese: '影響',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence, effect',
      type: 'main',
      example: '天気の影響で遅れました。'
    },

    // Contrast and opposition
    {
      japanese: '反対',
      kana: 'はんたい',
      vietnamese: 'phản đối',
      english: 'opposite, opposition',
      type: 'main',
      example: '私は反対です。'
    },
    {
      japanese: '逆',
      kana: 'ぎゃく',
      vietnamese: 'ngược lại',
      english: 'opposite, reverse',
      type: 'main',
      example: '逆の意味です。'
    },
    {
      japanese: '一方',
      kana: 'いっぽう',
      vietnamese: 'mặt khác',
      english: 'on the other hand',
      type: 'main',
      example: '彼は優しいです。一方、厳しい面もあります。'
    },
    {
      japanese: '対照的',
      kana: 'たいしょうてき',
      vietnamese: 'tương phản',
      english: 'contrasting',
      type: 'main',
      example: '対照的な性格です。'
    },

    // Additional vocabulary
    {
      japanese: '関係',
      kana: 'かんけい',
      vietnamese: 'mối quan hệ',
      english: 'relationship, connection',
      type: 'additional',
      example: 'どんな関係ですか。'
    },
    {
      japanese: '条件',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition',
      type: 'additional',
      example: '条件があります。'
    },
    {
      japanese: '場合',
      kana: 'ばあい',
      vietnamese: 'trường hợp',
      english: 'case, situation',
      type: 'additional',
      example: 'その場合は連絡してください。'
    },
    {
      japanese: '状況',
      kana: 'じょうきょう',
      vietnamese: 'tình huống',
      english: 'situation, circumstances',
      type: 'additional',
      example: '状況を説明してください。'
    },
    {
      japanese: '事情',
      kana: 'じじょう',
      vietnamese: 'hoàn cảnh',
      english: 'circumstances',
      type: 'additional',
      example: '事情が分かりました。'
    },
    {
      japanese: '理解',
      kana: 'りかい',
      vietnamese: 'hiểu biết',
      english: 'understanding',
      type: 'additional',
      example: 'ご理解ください。'
    },
    {
      japanese: '説明',
      kana: 'せつめい',
      vietnamese: 'giải thích',
      english: 'explanation',
      type: 'additional',
      example: '説明してください。'
    },
    {
      japanese: '主張',
      kana: 'しゅちょう',
      vietnamese: 'khẳng định, chủ trương',
      english: 'assertion, claim',
      type: 'additional',
      example: '自分の主張を言います。'
    },
    {
      japanese: '意見',
      kana: 'いけん',
      vietnamese: 'ý kiến',
      english: 'opinion',
      type: 'additional',
      example: 'ご意見をお聞かせください。'
    },
    {
      japanese: '反論',
      kana: 'はんろん',
      vietnamese: 'phản bác',
      english: 'objection, counterargument',
      type: 'additional',
      example: '反論があります。'
    },
    {
      japanese: '賛成',
      kana: 'さんせい',
      vietnamese: 'tán thành',
      english: 'agreement, approval',
      type: 'additional',
      example: '賛成です。'
    },
    {
      japanese: '同意',
      kana: 'どうい',
      vietnamese: 'đồng ý',
      english: 'agreement, consent',
      type: 'additional',
      example: '同意します。'
    },
    {
      japanese: '結論',
      kana: 'けつろん',
      vietnamese: 'kết luận',
      english: 'conclusion',
      type: 'additional',
      example: '結論を出します。'
    },
    {
      japanese: '要約',
      kana: 'ようやく',
      vietnamese: 'tóm tắt',
      english: 'summary',
      type: 'additional',
      example: '要約してください。'
    },
    {
      japanese: '内容',
      kana: 'ないよう',
      vietnamese: 'nội dung',
      english: 'contents, substance',
      type: 'additional',
      example: '内容を確認します。'
    },

    // Supplementary
    {
      japanese: 'なぜなら',
      kana: 'なぜなら',
      vietnamese: 'bởi vì',
      english: 'because',
      type: 'supplementary',
      example: '行きません。なぜなら、忙しいからです。'
    },
    {
      japanese: 'というのは',
      kana: 'というのは',
      vietnamese: 'lý do là',
      english: 'the reason is',
      type: 'supplementary',
      example: '遅れました。というのは、電車が遅れたからです。'
    },
    {
      japanese: 'にもかかわらず',
      kana: 'にもかかわらず',
      vietnamese: 'mặc dù, bất chấp',
      english: 'despite, in spite of',
      type: 'supplementary',
      example: '雨にもかかわらず、行きました。'
    },
    {
      japanese: 'とはいえ',
      kana: 'とはいえ',
      vietnamese: 'tuy nhiên',
      english: 'however, nevertheless',
      type: 'supplementary',
      example: '便利です。とはいえ、高いです。'
    },
    {
      japanese: 'ただし',
      kana: 'ただし',
      vietnamese: 'tuy nhiên',
      english: 'however, provided that',
      type: 'supplementary',
      example: '参加できます。ただし、条件があります。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | dcade2e23407fe60
    {
      japanese: "数えます",
      kana: "かぞえます",
      vietnamese: "đếm",
      english: "đếm",
      type: "supplementary",
      example: "りんごを三つ数えます。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 11d1518e784e67bd
    {
      japanese: "測ります",
      kana: "はかります",
      vietnamese: "đo chiều dài, diện tích, nhiệt độ...",
      english: "đo chiều dài, diện tích, nhiệt độ...",
      type: "supplementary",
      example: "部屋の長さを測ります。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | bd08a668ea14cb07
    {
      japanese: "量ります",
      kana: "はかります",
      vietnamese: "cân trọng lượng, đo lượng",
      english: "cân trọng lượng, đo lượng",
      type: "supplementary",
      example: "荷物の重さを量ります。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 9b4290b89bc3f3a6
    {
      japanese: "確かめます",
      kana: "たしかめます",
      vietnamese: "xác nhận, kiểm tra lại",
      english: "xác nhận, kiểm tra lại",
      type: "supplementary",
      example: "出発の時間を確かめます。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 9ac92b4be88984ae
    {
      japanese: "合います",
      kana: "あいます",
      vietnamese: "vừa, hợp",
      english: "vừa, hợp",
      type: "supplementary",
      example: "このズボンはサイズが合います。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 2797cf584c199643
    {
      japanese: "出発します",
      kana: "しゅっぱつします",
      vietnamese: "xuất phát, khởi hành",
      english: "xuất phát, khởi hành",
      type: "supplementary",
      example: "バスは八時に出発します。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 77adf61b8ab0eeec
    {
      japanese: "到着します",
      kana: "とうちゃくします",
      vietnamese: "đến nơi",
      english: "đến nơi",
      type: "supplementary",
      example: "飛行機は十時に到着します。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | a8ad4e5e1637a54f
    {
      japanese: "酔います",
      kana: "よいます",
      vietnamese: "say, bị say xe/sóng/rượu",
      english: "say, bị say xe/sóng/rượu",
      type: "supplementary",
      example: "船に酔いました。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 24743975417207e4
    {
      japanese: "うまくいきます",
      kana: "うまくいきます",
      vietnamese: "thuận lợi, tốt đẹp",
      english: "thuận lợi, tốt đẹp",
      type: "supplementary",
      example: "試験はうまくいきました。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | dc2755afe26457b9
    {
      japanese: "出ます",
      kana: "でます",
      vietnamese: "xuất hiện, ra đề",
      english: "xuất hiện, ra đề",
      type: "supplementary",
      example: "テストにこの問題が出ます。"
    },
    // source: review_bai_40_N4.md | 2.1. Động từ cần nhớ | 7bd98db7590eaae1
    {
      japanese: "相談します",
      kana: "そうだんします",
      vietnamese: "trao đổi, bàn bạc, hỏi ý kiến",
      english: "trao đổi, bàn bạc, hỏi ý kiến",
      type: "supplementary",
      example: "先生に相談します。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | 1bfab4162099fa1f
    {
      japanese: "必要な",
      kana: "ひつような",
      vietnamese: "cần thiết",
      english: "cần thiết",
      type: "supplementary",
      example: "パスポートが必要です。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | ceffc19698c2055c
    {
      japanese: "天気予報",
      kana: "てんきよほう",
      vietnamese: "dự báo thời tiết",
      english: "dự báo thời tiết",
      type: "supplementary",
      example: "天気予報を見ました。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | 026a5dbc39f86a16
    {
      japanese: "表",
      kana: "おもて",
      vietnamese: "mặt trước, phía trước",
      english: "mặt trước, phía trước",
      type: "supplementary",
      example: "表に名前を書いてください。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | d687391b5a6afb32
    {
      japanese: "裏",
      kana: "うら",
      vietnamese: "mặt sau, phía sau",
      english: "mặt sau, phía sau",
      type: "supplementary",
      example: "裏に住所があります。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | 3ff4b92fb958930f
    {
      japanese: "間違い",
      kana: "まちがい",
      vietnamese: "sai, lỗi",
      english: "sai, lỗi",
      type: "supplementary",
      example: "答えに間違いがあります。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | a9058eadfef9f10b
    {
      japanese: "傷",
      kana: "きず",
      vietnamese: "vết thương, vết xước",
      english: "vết thương, vết xước",
      type: "supplementary",
      example: "手に傷があります。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | 93ecc365c800f6fb
    {
      japanese: "ズボン",
      kana: "ズボン",
      vietnamese: "quần dài",
      english: "quần dài",
      type: "supplementary",
      example: "このズボンをはいてみます。"
    },
    // source: review_bai_40_N4.md | 2.2. Tính từ, danh từ thường gặp | 2b987bc84ed91ebf
    {
      japanese: "お年寄り",
      kana: "おとしより",
      vietnamese: "người cao tuổi",
      english: "người cao tuổi",
      type: "supplementary",
      example: "お年寄りに席をゆずります。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | d0184ec3fa07f672
    {
      japanese: "長さ",
      kana: "ながさ",
      vietnamese: "chiều dài",
      english: "chiều dài",
      type: "supplementary",
      example: "この机の長さは一メートルです。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | b89a8f715d0043b6
    {
      japanese: "重さ",
      kana: "おもさ",
      vietnamese: "cân nặng, trọng lượng",
      english: "cân nặng, trọng lượng",
      type: "supplementary",
      example: "この箱の重さを量ります。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 3123f826dbcefee9
    {
      japanese: "高さ",
      kana: "たかさ",
      vietnamese: "chiều cao",
      english: "chiều cao",
      type: "supplementary",
      example: "山の高さを知っていますか。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | ff62d6daffe24763
    {
      japanese: "大きさ",
      kana: "おおきさ",
      vietnamese: "cỡ, kích thước",
      english: "cỡ, kích thước",
      type: "supplementary",
      example: "かばんの大きさを確かめます。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | fc226f3e6e54cd74
    {
      japanese: "一便",
      kana: "いちびん",
      vietnamese: "chuyến bay số một / chuyến thứ nhất",
      english: "chuyến bay số một / chuyến thứ nhất",
      type: "supplementary",
      example: "一便で行きます。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 85531113fc6c802c
    {
      japanese: "一個",
      kana: "いっこ",
      vietnamese: "một cái, một viên",
      english: "một cái, một viên",
      type: "supplementary",
      example: "りんごを一個買います。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 5306a77706949301
    {
      japanese: "一本",
      kana: "いっぽん",
      vietnamese: "một cái dài như bút, chai, cây",
      english: "một cái dài như bút, chai, cây",
      type: "supplementary",
      example: "ペンを一本ください。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | eff729c3a17012ad
    {
      japanese: "一杯",
      kana: "いっぱい",
      vietnamese: "một chén, một cốc",
      english: "một chén, một cốc",
      type: "supplementary",
      example: "水を一杯飲みます。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 7b960c7fd7ccc831
    {
      japanese: "一センチ",
      kana: "いっセンチ",
      vietnamese: "một xăng-ti-mét",
      english: "một xăng-ti-mét",
      type: "supplementary",
      example: "一センチ短いです。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 558944a33c83b468
    {
      japanese: "一ミリ",
      kana: "いちミリ",
      vietnamese: "một mi-li-mét",
      english: "một mi-li-mét",
      type: "supplementary",
      example: "一ミリ小さいです。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | d255a49bd98d0f58
    {
      japanese: "一グラム",
      kana: "いちグラム",
      vietnamese: "một gam",
      english: "một gam",
      type: "supplementary",
      example: "一グラム足りません。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 08afb73c77b465b3
    {
      japanese: "〜以上",
      kana: "〜いじょう",
      vietnamese: "từ... trở lên, trên...",
      english: "từ... trở lên, trên...",
      type: "supplementary",
      example: "二十歳以上の人が入れます。"
    },
    // source: review_bai_40_N4.md | 2.3. Từ chỉ kích thước, đơn vị, số lượng | 9ab5256fff16d305
    {
      japanese: "〜以下",
      kana: "〜いか",
      vietnamese: "từ... trở xuống, dưới...",
      english: "từ... trở xuống, dưới...",
      type: "supplementary",
      example: "十歳以下の子どもは無料です。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | fb36f3f8c3b4b886
    {
      japanese: "忘年会",
      kana: "ぼうねんかい",
      vietnamese: "tiệc tất niên",
      english: "tiệc tất niên",
      type: "supplementary",
      example: "来週、忘年会があります。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 7317776aaa11b224
    {
      japanese: "新年会",
      kana: "しんねんかい",
      vietnamese: "tiệc tân niên",
      english: "tiệc tân niên",
      type: "supplementary",
      example: "新年会に参加します。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 34aa828dd8582fd4
    {
      japanese: "二次会",
      kana: "にじかい",
      vietnamese: "tăng hai, buổi sau tiệc chính",
      english: "tăng hai, buổi sau tiệc chính",
      type: "supplementary",
      example: "二次会へ行きませんか。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 7bd21b48b4985e09
    {
      japanese: "発表会",
      kana: "はっぴょうかい",
      vietnamese: "buổi phát biểu, biểu diễn, thuyết trình",
      english: "buổi phát biểu, biểu diễn, thuyết trình",
      type: "supplementary",
      example: "発表会で歌います。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 380d50cb6760c471
    {
      japanese: "大会",
      kana: "たいかい",
      vietnamese: "đại hội, cuộc thi, giải đấu",
      english: "đại hội, cuộc thi, giải đấu",
      type: "supplementary",
      example: "スピーチ大会に出ます。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 98ad24b380cb15d0
    {
      japanese: "マラソン",
      kana: "マラソン",
      vietnamese: "ma-ra-tông",
      english: "ma-ra-tông",
      type: "supplementary",
      example: "マラソン大会があります。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | eae179bbaa83619d
    {
      japanese: "コンテスト",
      kana: "コンテスト",
      vietnamese: "cuộc thi",
      english: "cuộc thi",
      type: "supplementary",
      example: "写真コンテストに出ます。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 1da90fbf4301919e
    {
      japanese: "長崎",
      kana: "ながさき",
      vietnamese: "Nagasaki",
      english: "Nagasaki",
      type: "supplementary",
      example: "長崎へ旅行します。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | c6839f58eb0cff27
    {
      japanese: "仙台",
      kana: "せんだい",
      vietnamese: "Sendai",
      english: "Sendai",
      type: "supplementary",
      example: "仙台に友達がいます。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | 0c41b97e92e53ac1
    {
      japanese: "ＪＡＬ",
      kana: "ジェーエーエル",
      vietnamese: "Japan Airlines",
      english: "Japan Airlines",
      type: "supplementary",
      example: "ＪＡＬで行きます。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | e447608d3df42c6a
    {
      japanese: "七夕祭り",
      kana: "たなばたまつり",
      vietnamese: "lễ hội Tanabata",
      english: "lễ hội Tanabata",
      type: "supplementary",
      example: "仙台の七夕祭りは有名です。"
    },
    // source: review_bai_40_N4.md | 2.4. Sự kiện, địa danh, hội nhóm | a6af8ad2b3ebb9f9
    {
      japanese: "東照宮",
      kana: "とうしょうぐう",
      vietnamese: "đền Toshogu",
      english: "đền Toshogu",
      type: "supplementary",
      example: "日光の東照宮へ行きました。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | ef52fee099ab9320
    {
      japanese: "どうでしょうか",
      kana: "どうでしょうか",
      vietnamese: "thế nào ạ, có được không ạ",
      english: "thế nào ạ, có được không ạ",
      type: "supplementary",
      example: "この計画はどうでしょうか。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 8110d83a38e0ff3c
    {
      japanese: "テスト",
      kana: "テスト",
      vietnamese: "bài kiểm tra",
      english: "bài kiểm tra",
      type: "supplementary",
      example: "明日はテストがあります。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 17df58a7918ea02f
    {
      japanese: "成績",
      kana: "せいせき",
      vietnamese: "kết quả, thành tích",
      english: "kết quả, thành tích",
      type: "supplementary",
      example: "成績がよかったです。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 1fd8a2c51dbf6b34
    {
      japanese: "ところで",
      kana: "ところで",
      vietnamese: "nhân tiện, à mà",
      english: "nhân tiện, à mà",
      type: "supplementary",
      example: "ところで、宿題は終わりましたか。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 478b1358d3131a78
    {
      japanese: "いらっしゃいます",
      kana: "いらっしゃいます",
      vietnamese: "kính ngữ của います / imasu, 来ます / kimasu, 行きます / ikimasu",
      english: "kính ngữ của います / imasu, 来ます / kimasu, 行きます / ikimasu",
      type: "supplementary",
      example: "先生はいらっしゃいますか。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 946c42a41fbceb4e
    {
      japanese: "様子",
      kana: "ようす",
      vietnamese: "tình hình, trạng thái",
      english: "tình hình, trạng thái",
      type: "supplementary",
      example: "子どもの様子を見ます。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | f985598004c373a6
    {
      japanese: "事件",
      kana: "じけん",
      vietnamese: "vụ án, sự việc",
      english: "vụ án, sự việc",
      type: "supplementary",
      example: "大きな事件がありました。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | d49c41a65de31e5a
    {
      japanese: "オートバイ",
      kana: "オートバイ",
      vietnamese: "xe máy",
      english: "xe máy",
      type: "supplementary",
      example: "オートバイを運転します。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | cac5ed62c8dbf1e3
    {
      japanese: "爆弾",
      kana: "ばくだん",
      vietnamese: "bom",
      english: "bom",
      type: "supplementary",
      example: "爆弾を見つけました。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 9c44ae8c975ed14d
    {
      japanese: "積みます",
      kana: "つみます",
      vietnamese: "chất lên, xếp lên",
      english: "chất lên, xếp lên",
      type: "supplementary",
      example: "荷物を車に積みます。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 475e8e7a1acb7d64
    {
      japanese: "運転手",
      kana: "うんてんしゅ",
      vietnamese: "tài xế",
      english: "tài xế",
      type: "supplementary",
      example: "運転手に聞きます。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | efee638846a70ebc
    {
      japanese: "離れた",
      kana: "はなれた",
      vietnamese: "xa, cách xa",
      english: "xa, cách xa",
      type: "supplementary",
      example: "駅から離れた所にあります。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 716ae1854aa0de75
    {
      japanese: "急に",
      kana: "きゅうに",
      vietnamese: "đột nhiên, gấp",
      english: "đột nhiên, gấp",
      type: "supplementary",
      example: "急に雨が降りました。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | bd70116f3653f3af
    {
      japanese: "動かします",
      kana: "うごかします",
      vietnamese: "di chuyển, khởi động",
      english: "di chuyển, khởi động",
      type: "supplementary",
      example: "車を動かしてください。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 69870b15949880ab
    {
      japanese: "一生懸命",
      kana: "いっしょうけんめい",
      vietnamese: "hết sức, chăm chỉ",
      english: "hết sức, chăm chỉ",
      type: "supplementary",
      example: "一生懸命勉強します。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 0723537991b6ebe3
    {
      japanese: "犯人",
      kana: "はんにん",
      vietnamese: "thủ phạm",
      english: "thủ phạm",
      type: "supplementary",
      example: "犯人はまだわかりません。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 8107b3b4bbadb549
    {
      japanese: "男",
      kana: "おとこ",
      vietnamese: "người đàn ông",
      english: "người đàn ông",
      type: "supplementary",
      example: "男の人が来ました。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 593e51f7071d626a
    {
      japanese: "手に入れます",
      kana: "てにいれます",
      vietnamese: "có được, lấy được",
      english: "có được, lấy được",
      type: "supplementary",
      example: "チケットを手に入れました。"
    },
    // source: review_bai_40_N4.md | 2.5. Từ trong phần hội thoại và đọc hiểu | 8605c75b3eed73ef
    {
      japanese: "今でも",
      kana: "いまでも",
      vietnamese: "ngay cả bây giờ, đến giờ vẫn",
      english: "ngay cả bây giờ, đến giờ vẫn",
      type: "supplementary",
      example: "今でも覚えています。"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 4d124c2c1c856fe6
    {
      japanese: "数えます",
      kana: "kazoemasu",
      vietnamese: "SỐ — số, đếm",
      english: "số, đếm",
      type: "kanji",
      example: "数えます"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 7e365ff5c69d00d9
    {
      japanese: "数学",
      kana: "suugaku",
      vietnamese: "SỐ — số, đếm",
      english: "số, đếm",
      type: "kanji",
      example: "数学"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 4c12916422550e78
    {
      japanese: "測ります",
      kana: "hakarimasu",
      vietnamese: "TRẮC — đo đạc",
      english: "đo đạc",
      type: "kanji",
      example: "測ります"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 610397b3d4e0f6ea
    {
      japanese: "測定",
      kana: "sokutei",
      vietnamese: "TRẮC — đo đạc",
      english: "đo đạc",
      type: "kanji",
      example: "測定"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 5088ed5b2870a295
    {
      japanese: "量ります",
      kana: "hakarimasu",
      vietnamese: "LƯỢNG — lượng, trọng lượng",
      english: "lượng, trọng lượng",
      type: "kanji",
      example: "量ります"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | dc5e55269b6e12d8
    {
      japanese: "重量",
      kana: "juuryou",
      vietnamese: "LƯỢNG — lượng",
      english: "lượng",
      type: "kanji",
      example: "重量"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 01b8574b892e18bc
    {
      japanese: "確かめます",
      kana: "tashikamemasu",
      vietnamese: "XÁC — chắc chắn, xác thực",
      english: "chắc chắn, xác thực",
      type: "kanji",
      example: "確かめます"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 7d2e16976cf0e9c2
    {
      japanese: "合います",
      kana: "aimasu",
      vietnamese: "HỢP — hợp lại, vừa",
      english: "hợp lại, vừa",
      type: "kanji",
      example: "合います"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 05f64ce6a113c2e0
    {
      japanese: "合格",
      kana: "goukaku",
      vietnamese: "HỢP — hợp lại",
      english: "hợp lại",
      type: "kanji",
      example: "合格"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | cfb18b1ddedd5b7a
    {
      japanese: "出発します",
      kana: "shuppatsu shimasu",
      vietnamese: "XUẤT — ra, đi ra",
      english: "ra, đi ra",
      type: "kanji",
      example: "出発します"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 9cfeb558d6ddbc09
    {
      japanese: "出ます",
      kana: "demasu",
      vietnamese: "XUẤT — ra",
      english: "ra",
      type: "kanji",
      example: "出ます"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | b687cee08c2ee681
    {
      japanese: "出発",
      kana: "shuppatsu",
      vietnamese: "PHÁT — phát ra, bắt đầu",
      english: "phát ra, bắt đầu",
      type: "kanji",
      example: "出発"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 03ce70d2223ee634
    {
      japanese: "到着",
      kana: "touchaku",
      vietnamese: "TRƯỚC — đến, mặc, chạm",
      english: "đến, mặc, chạm",
      type: "kanji",
      example: "到着"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | c55f2ce351f21a35
    {
      japanese: "酔います",
      kana: "yoimasu",
      vietnamese: "TÚY — say",
      english: "say",
      type: "kanji",
      example: "酔います"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 9ff971cdaad62a13
    {
      japanese: "相談",
      kana: "soudan",
      vietnamese: "TƯƠNG — lẫn nhau, đối nhau",
      english: "lẫn nhau, đối nhau",
      type: "kanji",
      example: "相談"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 0e92fe7c293aa59b
    {
      japanese: "必要",
      kana: "hitsuyou",
      vietnamese: "TẤT — nhất định, bắt buộc",
      english: "nhất định, bắt buộc",
      type: "kanji",
      example: "必要"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | d0186a954a9f703b
    {
      japanese: "天気",
      kana: "tenki",
      vietnamese: "THIÊN — trời",
      english: "trời",
      type: "kanji",
      example: "天気"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 974b9521a4858595
    {
      japanese: "予報",
      kana: "yohou",
      vietnamese: "DỰ — trước, dự tính",
      english: "trước, dự tính",
      type: "kanji",
      example: "予報"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 7263b6664ea9cc0f
    {
      japanese: "忘年会",
      kana: "bounenkai",
      vietnamese: "VONG — quên",
      english: "quên",
      type: "kanji",
      example: "忘年会"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 2fd70d8b299e2930
    {
      japanese: "新年",
      kana: "shinnen",
      vietnamese: "NIÊN — năm",
      english: "năm",
      type: "kanji",
      example: "新年"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | ac8ae9d7e0d7da92
    {
      japanese: "会議",
      kana: "kaigi",
      vietnamese: "HỘI — gặp, hội",
      english: "gặp, hội",
      type: "kanji",
      example: "会議"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 0fa555cf2cc82d83
    {
      japanese: "長さ",
      kana: "nagasa",
      vietnamese: "TRƯỜNG — dài, trưởng",
      english: "dài, trưởng",
      type: "kanji",
      example: "長さ"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | b76b840df0dc8625
    {
      japanese: "重さ",
      kana: "omosa",
      vietnamese: "TRỌNG — nặng, quan trọng",
      english: "nặng, quan trọng",
      type: "kanji",
      example: "重さ"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | ce00b96239507186
    {
      japanese: "高さ",
      kana: "takasa",
      vietnamese: "CAO — cao, đắt",
      english: "cao, đắt",
      type: "kanji",
      example: "高さ"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 65a5f9476f552e41
    {
      japanese: "大きさ",
      kana: "ookisa",
      vietnamese: "ĐẠI — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大きさ"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 087dc4ed55becd5e
    {
      japanese: "成績",
      kana: "seiseki",
      vietnamese: "THÀNH — trở thành, hoàn thành",
      english: "trở thành, hoàn thành",
      type: "kanji",
      example: "成績"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 751d9f3f6287f5fd
    {
      japanese: "動かします",
      kana: "ugokashimasu",
      vietnamese: "ĐỘNG — chuyển động",
      english: "chuyển động",
      type: "kanji",
      example: "動かします"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 5411d89947288fbc
    {
      japanese: "犯人",
      kana: "hannin",
      vietnamese: "PHẠM — phạm tội",
      english: "phạm tội",
      type: "kanji",
      example: "犯人"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 4a908729ab3f2266
    {
      japanese: "男",
      kana: "otoko",
      vietnamese: "NAM — đàn ông",
      english: "đàn ông",
      type: "kanji",
      example: "男"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | a9c1cffcbd76a435
    {
      japanese: "手に入れます",
      kana: "te ni iremasu",
      vietnamese: "THỦ — tay",
      english: "tay",
      type: "kanji",
      example: "手に入れます"
    },
    // source: review_bai_40_N4.md | 5. Kanji cần nhớ trong bài | 5f733318d1e53cc5
    {
      japanese: "今でも",
      kana: "ima demo",
      vietnamese: "KIM — bây giờ",
      english: "bây giờ",
      type: "kanji",
      example: "今でも"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | c6c096bb8e857511
    {
      japanese: "合います / aimasu",
      kana: "合います / aimasu",
      vietnamese: "Cái quần này vừa kích cỡ.",
      english: "Cái quần này vừa kích cỡ.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | 02eeec02a9b85e17
    {
      japanese: "疑問詞 + 普通形 + か / gimonshi + futsuu-kei + ka",
      kana: "疑問詞 + 普通形 + か / gimonshi + futsuu-kei + ka",
      vietnamese: "Tôi không biết bài kiểm tra sẽ ra gì.",
      english: "Tôi không biết bài kiểm tra sẽ ra gì.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | 47fd9d362788b999
    {
      japanese: "普通形 + かどうか / futsuu-kei + ka dou ka",
      kana: "普通形 + かどうか / futsuu-kei + ka dou ka",
      vietnamese: "Tôi xem dự báo thời tiết xem ngày mai có mưa hay không.",
      english: "Tôi xem dự báo thời tiết xem ngày mai có mưa hay không.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | 807c68bfae7e85ea
    {
      japanese: "量ります / hakarimasu",
      kana: "量ります / hakarimasu",
      vietnamese: "Hãy cân trọng lượng cái hộp này.",
      english: "Hãy cân trọng lượng cái hộp này.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | a4ffa8ff12dda2e9
    {
      japanese: "測ります / hakarimasu",
      kana: "測ります / hakarimasu",
      vietnamese: "Hãy đo chiều dài căn phòng.",
      english: "Hãy đo chiều dài căn phòng.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | cdccb25a7cf2dd86
    {
      japanese: "Vてみます / V-te mimasu",
      kana: "Vてみます / V-te mimasu",
      vietnamese: "Tôi sẽ thử hỏi ý kiến thầy/cô.",
      english: "Tôi sẽ thử hỏi ý kiến thầy/cô.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | 9e4542332d4d4161
    {
      japanese: "出発します / shuppatsu shimasu",
      kana: "出発します / shuppatsu shimasu",
      vietnamese: "Máy bay xuất phát lúc 8 giờ và đến nơi lúc 10 giờ.",
      english: "Máy bay xuất phát lúc 8 giờ và đến nơi lúc 10 giờ.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | fb4ce23771d27fa3
    {
      japanese: "お年寄り / otoshiyori",
      kana: "お年寄り / otoshiyori",
      vietnamese: "Tôi nhường ghế cho người cao tuổi.",
      english: "Tôi nhường ghế cho người cao tuổi.",
      type: "supplementary"
    },
    // source: review_bai_40_N4.md | 6. Bài tập nhanh | ff7a1ddcfbd832e9
    {
      japanese: "うまくいきます / umaku ikimasu",
      kana: "うまくいきます / umaku ikimasu",
      vietnamese: "Bài thi đã diễn ra tốt đẹp.",
      english: "Bài thi đã diễn ra tốt đẹp.",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | c1acf3bb5dd5ba15
    {
      japanese: "数えます",
      kana: "かぞえます",
      vietnamese: "đếm",
      english: "đếm",
      type: "main",
      example: "りんごを三つ数えます。\nRingo o mittsu kazoemasu.\nTôi đếm ba quả táo."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | cb0a264433e437fb
    {
      japanese: "測ります / 量ります",
      kana: "はかります",
      vietnamese: "đo / cân",
      english: "đo / cân",
      type: "main",
      example: "部屋の長さを測ります。\n荷物の重さを量ります。\nHeya no nagasa o hakarimasu.\nNimotsu no omosa o hakarimasu.\nTôi đo chiều dài căn phòng.\nTôi cân trọng lượng hành lý."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | c91efabc73fb06b6
    {
      japanese: "確かめます",
      kana: "たしかめます",
      vietnamese: "xác nhận, kiểm tra lại cho chắc",
      english: "xác nhận, kiểm tra lại cho chắc",
      type: "main",
      example: "時間を確かめます。\nJikan o tashikamemasu.\nTôi xác nhận lại thời gian."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 02e771be07d98d1d
    {
      japanese: "合います\n［サイズが〜］",
      kana: "あいます\n［サイズが〜］",
      vietnamese: "vừa, hợp; vừa kích cỡ",
      english: "vừa, hợp; vừa kích cỡ",
      type: "main",
      example: "このズボンはサイズが合います。\nKono zubon wa saizu ga aimasu.\nCái quần này vừa kích cỡ."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 944a4f5297aec224
    {
      japanese: "出発します",
      kana: "しゅっぱつします",
      vietnamese: "xuất phát, khởi hành",
      english: "xuất phát, khởi hành",
      type: "main",
      example: "バスは八時に出発します。\nBasu wa hachi-ji ni shuppatsu shimasu.\nXe buýt xuất phát lúc tám giờ."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 1ad37c382ea34612
    {
      japanese: "到着します",
      kana: "とうちゃくします",
      vietnamese: "đến, đến nơi",
      english: "đến, đến nơi",
      type: "main",
      example: "飛行機は十時に到着します。\nHikouki wa juu-ji ni touchaku shimasu.\nMáy bay đến nơi lúc mười giờ."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | a441b44d6e7dc222
    {
      japanese: "酔います",
      kana: "よいます",
      vietnamese: "say xe, say sóng, say rượu",
      english: "say xe, say sóng, say rượu",
      type: "main",
      example: "車に酔いました。\nKuruma ni yoimashita.\nTôi đã bị say xe."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 845eeb32a74398d9
    {
      japanese: "うまくいきます",
      kana: "うまくいきます",
      vietnamese: "tốt, thuận lợi",
      english: "tốt, thuận lợi",
      type: "main",
      example: "試験はうまくいきました。\nShiken wa umaku ikimashita.\nKỳ thi đã diễn ra thuận lợi."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 207df31ac1839960
    {
      japanese: "出ます\n［問題が〜］",
      kana: "でます\n［問題が〜］",
      vietnamese: "ra; có nội dung xuất hiện trong đề thi",
      english: "ra; có nội dung xuất hiện trong đề thi",
      type: "main",
      example: "テストに漢字の問題が出ます。\nTesuto ni kanji no mondai ga demasu.\nTrong bài kiểm tra sẽ ra câu hỏi Kanji."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 9db15912717c07a7
    {
      japanese: "相談します",
      kana: "そうだんします",
      vietnamese: "nói chuyện, thảo luận, hỏi ý kiến",
      english: "nói chuyện, thảo luận, hỏi ý kiến",
      type: "main",
      example: "先生に相談します。\nSensei ni soudan shimasu.\nTôi hỏi ý kiến thầy/cô."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | f69741b4e31c9fc8
    {
      japanese: "必要［な］",
      kana: "ひつよう［な］",
      vietnamese: "cần thiết",
      english: "cần thiết",
      type: "main",
      example: "パスポートが必要です。\nPasupooto ga hitsuyou desu.\nHộ chiếu là cần thiết."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 52fafd64b02e7eb0
    {
      japanese: "天気予報",
      kana: "てんきよほう",
      vietnamese: "dự báo thời tiết",
      english: "dự báo thời tiết",
      type: "main",
      example: "天気予報を見ます。\nTenki yohou o mimasu.\nTôi xem dự báo thời tiết."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 1ed59558f1ef20bd
    {
      japanese: "忘年会",
      kana: "ぼうねんかい",
      vietnamese: "tiệc tất niên",
      english: "tiệc tất niên",
      type: "main",
      example: "会社の忘年会に行きます。\nKaisha no bounenkai ni ikimasu.\nTôi đi tiệc tất niên của công ty."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | e13aaada94f37851
    {
      japanese: "新年会",
      kana: "しんねんかい",
      vietnamese: "tiệc tân niên",
      english: "tiệc tân niên",
      type: "main",
      example: "来月、新年会があります。\nRaigetsu, shinnenkai ga arimasu.\nTháng sau có tiệc tân niên."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | bb78e4b126c7f19d
    {
      japanese: "二次会",
      kana: "にじかい",
      vietnamese: "bữa tiệc thứ hai, tăng hai",
      english: "bữa tiệc thứ hai, tăng hai",
      type: "main",
      example: "二次会に参加します。\nNijikai ni sanka shimasu.\nTôi tham gia tăng hai."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | bd8f8aeeba2ba060
    {
      japanese: "発表会",
      kana: "はっぴょうかい",
      vietnamese: "buổi phát biểu, buổi trình bày",
      english: "buổi phát biểu, buổi trình bày",
      type: "main",
      example: "発表会で日本語を話します。\nHappyoukai de Nihongo o hanashimasu.\nTôi nói tiếng Nhật trong buổi phát biểu."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 6e9e66dc3b5bd116
    {
      japanese: "大会",
      kana: "たいかい",
      vietnamese: "đại hội, cuộc thi, giải đấu",
      english: "đại hội, cuộc thi, giải đấu",
      type: "main",
      example: "マラソン大会に出ます。\nMarason taikai ni demasu.\nTôi tham gia cuộc thi marathon."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 9e52d255c4f5cbb5
    {
      japanese: "マラソン",
      kana: "マラソン",
      vietnamese: "marathon, ma-ra-tông",
      english: "marathon, ma-ra-tông",
      type: "main",
      example: "マラソンを走ります。\nMarason o hashirimasu.\nTôi chạy marathon."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 7af3521a2424977b
    {
      japanese: "コンテスト",
      kana: "コンテスト",
      vietnamese: "cuộc thi, contest",
      english: "cuộc thi, contest",
      type: "main",
      example: "スピーチコンテストに出ます。\nSupiichi kontesuto ni demasu.\nTôi tham gia cuộc thi hùng biện."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 33bf6cd538610a2d
    {
      japanese: "表",
      kana: "おもて",
      vietnamese: "mặt trước, phía trước",
      english: "mặt trước, phía trước",
      type: "main",
      example: "紙の表に名前を書きます。\nKami no omote ni namae o kakimasu.\nTôi viết tên ở mặt trước của tờ giấy."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 003bc7a7818f2868
    {
      japanese: "裏",
      kana: "うら",
      vietnamese: "mặt sau, phía sau",
      english: "mặt sau, phía sau",
      type: "main",
      example: "紙の裏を見てください。\nKami no ura o mite kudasai.\nHãy nhìn mặt sau của tờ giấy."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | b68c49ddedaf1d14
    {
      japanese: "間違い",
      kana: "まちがい",
      vietnamese: "lỗi, chỗ sai",
      english: "lỗi, chỗ sai",
      type: "main",
      example: "答えに間違いがあります。\nKotae ni machigai ga arimasu.\nTrong câu trả lời có lỗi sai."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | bc41edfe10ae5e7c
    {
      japanese: "傷",
      kana: "きず",
      vietnamese: "vết thương",
      english: "vết thương",
      type: "main",
      example: "手に傷があります。\nTe ni kizu ga arimasu.\nTay tôi có vết thương."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 2fda9815084806d8
    {
      japanese: "ズボン",
      kana: "ズボン",
      vietnamese: "cái quần",
      english: "cái quần",
      type: "main",
      example: "新しいズボンを買いました。\nAtarashii zubon o kaimashita.\nTôi đã mua một cái quần mới."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 452f3155d71bbf4d
    {
      japanese: "［お］年寄り",
      kana: "［お］としより",
      vietnamese: "người già, người cao tuổi",
      english: "người già, người cao tuổi",
      type: "main",
      example: "お年寄りに席をゆずります。\nOtoshiyori ni seki o yuzurimasu.\nTôi nhường ghế cho người cao tuổi."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | d75bc9ed80e470ac
    {
      japanese: "長さ",
      kana: "ながさ",
      vietnamese: "chiều dài",
      english: "chiều dài",
      type: "main",
      example: "机の長さを測ります。\nTsukue no nagasa o hakarimasu.\nTôi đo chiều dài cái bàn."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | a94587f2570b9ec0
    {
      japanese: "重さ",
      kana: "おもさ",
      vietnamese: "cân nặng, trọng lượng",
      english: "cân nặng, trọng lượng",
      type: "main",
      example: "荷物の重さを量ります。\nNimotsu no omosa o hakarimasu.\nTôi cân trọng lượng hành lý."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | fb6655f921ce19f0
    {
      japanese: "高さ",
      kana: "たかさ",
      vietnamese: "chiều cao, độ cao",
      english: "chiều cao, độ cao",
      type: "main",
      example: "山の高さを調べます。\nYama no takasa o shirabemasu.\nTôi tìm hiểu độ cao của ngọn núi."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 06d966cbe501b773
    {
      japanese: "大きさ",
      kana: "おおきさ",
      vietnamese: "cỡ, kích thước, độ lớn",
      english: "cỡ, kích thước, độ lớn",
      type: "main",
      example: "箱の大きさを確かめます。\nHako no ookisa o tashikamemasu.\nTôi kiểm tra kích thước cái hộp."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | cd43bb7327c320f4
    {
      japanese: "［一］便",
      kana: "［一］びん",
      vietnamese: "chuyến bay số một / chuyến đầu",
      english: "chuyến bay số một / chuyến đầu",
      type: "main",
      example: "明日の一便で行きます。\nAshita no ichibin de ikimasu.\nTôi sẽ đi bằng chuyến bay đầu ngày mai."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 529066fb95320339
    {
      japanese: "一個",
      kana: "一こ",
      vietnamese: "một cái, một cục, một viên",
      english: "một cái, một cục, một viên",
      type: "main",
      example: "りんごを一個買います。\nRingo o ikko kaimasu.\nTôi mua một quả táo."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 6bb68f851201c96e
    {
      japanese: "一本",
      kana: "一本",
      vietnamese: "một cái; đơn vị đếm vật dài",
      english: "một cái; đơn vị đếm vật dài",
      type: "main",
      example: "ペンを一本ください。\nPen o ippon kudasai.\nCho tôi một cây bút."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 7825379a4977ab92
    {
      japanese: "一杯",
      kana: "一はい",
      vietnamese: "một chén, một cốc, một ly",
      english: "một chén, một cốc, một ly",
      type: "main",
      example: "水を一杯飲みます。\nMizu o ippai nomimasu.\nTôi uống một cốc nước."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 82ca72d73abe284b
    {
      japanese: "一センチ",
      kana: "一センチ",
      vietnamese: "một xăng-ti-mét",
      english: "một xăng-ti-mét",
      type: "main",
      example: "一センチ短くしてください。\nIssenchi mijikaku shite kudasai.\nHãy làm ngắn đi một xăng-ti-mét."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 5bfbce220c93bfc7
    {
      japanese: "一ミリ",
      kana: "一ミリ",
      vietnamese: "một mi-li-mét",
      english: "một mi-li-mét",
      type: "main",
      example: "一ミリだけ動かします。\nIchimiri dake ugokashimasu.\nTôi chỉ dịch chuyển một mi-li-mét."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 0f46b2616f1f096a
    {
      japanese: "一グラム",
      kana: "一グラム",
      vietnamese: "một gam",
      english: "một gam",
      type: "main",
      example: "一グラム足りません。\nIchi-guramu tarimasen.\nThiếu một gam."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 715838e013ded184
    {
      japanese: "〜以上",
      kana: "〜いじょう",
      vietnamese: "từ... trở lên, trên",
      english: "từ... trở lên, trên",
      type: "main",
      example: "三人以上で申し込んでください。\nSan-nin ijou de moushikonde kudasai.\nHãy đăng ký từ ba người trở lên."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 510a44b51225fa09
    {
      japanese: "〜以下",
      kana: "〜いか",
      vietnamese: "từ... trở xuống, dưới",
      english: "từ... trở xuống, dưới",
      type: "main",
      example: "五キロ以下です。\nGo-kiro ika desu.\nDưới năm ki-lô-gam."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 7d15dde231b0fe8a
    {
      japanese: "長崎",
      kana: "長崎",
      vietnamese: "thủ phủ tỉnh Nagasaki",
      english: "thủ phủ tỉnh Nagasaki",
      type: "main",
      example: "長崎へ旅行に行きます。\nNagasaki e ryokou ni ikimasu.\nTôi đi du lịch Nagasaki."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | cda81702c40f1888
    {
      japanese: "仙台",
      kana: "仙台",
      vietnamese: "thủ phủ tỉnh Miyagi",
      english: "thủ phủ tỉnh Miyagi",
      type: "main",
      example: "仙台に友達がいます。\nSendai ni tomodachi ga imasu.\nTôi có bạn ở Sendai."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 173e38e7fc4651f3
    {
      japanese: "ＪＬ",
      kana: "ＪＬ",
      vietnamese: "mã hãng hàng không Japan Airlines",
      english: "mã hãng hàng không Japan Airlines",
      type: "main",
      example: "ＪＬの飛行機に乗ります。\nJee eru no hikouki ni norimasu.\nTôi lên máy bay của Japan Airlines."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | c25b775c9734f6e3
    {
      japanese: "七夕祭り",
      kana: "七夕祭り",
      vietnamese: "Lễ hội Tanabata",
      english: "Lễ hội Tanabata",
      type: "main",
      example: "七夕祭りを見に行きます。\nTanabata matsuri o mi ni ikimasu.\nTôi đi xem lễ hội Tanabata."
    },
    // source: review_tu_vung_bai_40.md | 1. Từ vựng chính | 04723b4a48125fa1
    {
      japanese: "東照宮",
      kana: "東照宮",
      vietnamese: "đền Toshogu ở Nikko, tỉnh Tochigi",
      english: "đền Toshogu ở Nikko, tỉnh Tochigi",
      type: "main",
      example: "日光の東照宮へ行きました。\nNikkou no Toushouguu e ikimashita.\nTôi đã đi đền Toshogu ở Nikko."
    },
    // source: review_tu_vung_bai_40.md | 2. Từ vựng hội thoại | 50f17548d8d935e6
    {
      japanese: "どうでしょうか。",
      kana: "どうでしょうか。",
      vietnamese: "Thế nào ạ? Cách nói lịch sự của どうですか / dou desu ka.",
      english: "Thế nào ạ? Cách nói lịch sự của どうですか / dou desu ka.",
      type: "supplementary",
      example: "この色はどうでしょうか。\nKono iro wa dou deshou ka.\nMàu này thế nào ạ?"
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | d4ba514b511edd49
    {
      japanese: "サイズが合います",
      kana: "サイズが合います",
      vietnamese: "vừa kích cỡ",
      english: "vừa kích cỡ",
      type: "supplementary",
      example: "Dùng が / ga với thứ “vừa” hoặc “hợp”. Ví dụ: ズボンのサイズが合います / zubon no saizu ga aimasu = quần vừa size."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | 35e2dd889b591411
    {
      japanese: "長さを測ります",
      kana: "長さを測ります",
      vietnamese: "đo chiều dài",
      english: "đo chiều dài",
      type: "supplementary",
      example: "測ります / hakarimasu dùng cho chiều dài, độ cao, diện tích, nhiệt độ."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | e83c0f16159bfd36
    {
      japanese: "重さを量ります",
      kana: "重さを量ります",
      vietnamese: "cân trọng lượng",
      english: "cân trọng lượng",
      type: "supplementary",
      example: "量ります / hakarimasu dùng cho trọng lượng, lượng, thể tích."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | 4b718820cd977282
    {
      japanese: "テストに問題が出ます",
      kana: "テストに問題が出ます",
      vietnamese: "đề kiểm tra ra câu hỏi",
      english: "đề kiểm tra ra câu hỏi",
      type: "supplementary",
      example: "Cấu trúc hay gặp khi nói đề thi ra phần nào."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | b4592fc185bbc06c
    {
      japanese: "先生に相談します",
      kana: "先生に相談します",
      vietnamese: "hỏi ý kiến thầy/cô",
      english: "hỏi ý kiến thầy/cô",
      type: "supplementary",
      example: "Dùng に / ni với người mình hỏi ý kiến."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | 9ed0f91481d449f9
    {
      japanese: "天気予報を見ます",
      kana: "天気予報を見ます",
      vietnamese: "xem dự báo thời tiết",
      english: "xem dự báo thời tiết",
      type: "supplementary",
      example: "Cụm rất hay dùng trước khi quyết định đi đâu."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | b8f7cd2ff78384a4
    {
      japanese: "車に酔います",
      kana: "車に酔います",
      vietnamese: "say xe",
      english: "say xe",
      type: "supplementary",
      example: "Dùng に / ni với phương tiện gây say: 車に酔います / kuruma ni yoimasu."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | e545efc1fe855613
    {
      japanese: "手に入れます",
      kana: "手に入れます",
      vietnamese: "có được, lấy được",
      english: "có được, lấy được",
      type: "supplementary",
      example: "Không dịch từng chữ là “cho vào tay”; hiểu tự nhiên là đạt được hoặc lấy được."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | 6dd22bd81fc06fe8
    {
      japanese: "二次会に参加します",
      kana: "二次会に参加します",
      vietnamese: "tham gia tăng hai",
      english: "tham gia tăng hai",
      type: "supplementary",
      example: "Dùng に / ni với sự kiện tham gia."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | 827a2b9e7fae8893
    {
      japanese: "マラソン大会に出ます",
      kana: "マラソン大会に出ます",
      vietnamese: "tham gia cuộc thi marathon",
      english: "tham gia cuộc thi marathon",
      type: "supplementary",
      example: "出ます / demasu ở đây là “tham gia, xuất hiện trong sự kiện”."
    },
    // source: review_tu_vung_bai_40.md | 4. Cụm cần nhớ | b580652c536dfd97
    {
      japanese: "紙の表 / 紙の裏",
      kana: "紙の表 / 紙の裏",
      vietnamese: "mặt trước / mặt sau của giấy",
      english: "mặt trước / mặt sau của giấy",
      type: "supplementary",
      example: "表 / omote trái nghĩa với 裏 / ura."
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | ea0928a083c76ef7
    {
      japanese: "数",
      kana: "スウ / suu, ス / su",
      vietnamese: "Số — số, đếm",
      english: "số, đếm",
      type: "kanji",
      example: "数えます / kazoemasu"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | fe6a51b3829beae6
    {
      japanese: "合",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — hợp, vừa, khớp",
      english: "hợp, vừa, khớp",
      type: "kanji",
      example: "合います / aimasu"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | e46e6cfa05dcbcc6
    {
      japanese: "出",
      kana: "シュツ / shutsu, スイ / sui",
      vietnamese: "Xuất — ra, xuất hiện",
      english: "ra, xuất hiện",
      type: "kanji",
      example: "出ます / demasu, 出発 / shuppatsu"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 54d00987b6487543
    {
      japanese: "発",
      kana: "ハツ / hatsu, ホツ / hotsu",
      vietnamese: "Phát — phát ra, khởi phát",
      english: "phát ra, khởi phát",
      type: "kanji",
      example: "出発 / shuppatsu, 発表 / happyou"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | da317b438a33a0df
    {
      japanese: "着",
      kana: "チャク / chaku, ジャク / jaku",
      vietnamese: "Trước / Trứ — đến, mặc",
      english: "đến, mặc",
      type: "kanji",
      example: "到着 / touchaku"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 577dc9372c1df001
    {
      japanese: "問",
      kana: "モン / mon",
      vietnamese: "Vấn — hỏi, vấn đề",
      english: "hỏi, vấn đề",
      type: "kanji",
      example: "問題 / mondai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 850cf0623220e63f
    {
      japanese: "題",
      kana: "ダイ / dai",
      vietnamese: "Đề — đề bài, chủ đề",
      english: "đề bài, chủ đề",
      type: "kanji",
      example: "問題 / mondai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | b7fa815941836592
    {
      japanese: "必",
      kana: "ヒツ / hitsu",
      vietnamese: "Tất — nhất định, chắc chắn",
      english: "nhất định, chắc chắn",
      type: "kanji",
      example: "必要 / hitsuyou"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 4c1d09b3675907e7
    {
      japanese: "要",
      kana: "ヨウ / you",
      vietnamese: "Yếu — cần, quan trọng",
      english: "cần, quan trọng",
      type: "kanji",
      example: "必要 / hitsuyou"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 7023735b8d841e73
    {
      japanese: "天",
      kana: "テン / ten",
      vietnamese: "Thiên — trời",
      english: "trời",
      type: "kanji",
      example: "天気 / tenki"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | d586e290d9904f65
    {
      japanese: "気",
      kana: "キ / ki, ケ / ke",
      vietnamese: "Khí — khí, tinh thần",
      english: "khí, tinh thần",
      type: "kanji",
      example: "天気 / tenki"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | f5b13bb5ef146ca7
    {
      japanese: "年",
      kana: "ネン / nen",
      vietnamese: "Niên — năm, tuổi",
      english: "năm, tuổi",
      type: "kanji",
      example: "忘年会 / bounenkai, 新年会 / shinnenkai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | f983fb5e38785967
    {
      japanese: "会",
      kana: "カイ / kai, エ / e",
      vietnamese: "Hội — gặp, hội",
      english: "gặp, hội",
      type: "kanji",
      example: "会 / kai, 二次会 / nijikai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 3a7fd65b620629aa
    {
      japanese: "新",
      kana: "シン / shin",
      vietnamese: "Tân — mới",
      english: "mới",
      type: "kanji",
      example: "新年会 / shinnenkai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 6fa202925fec7160
    {
      japanese: "二",
      kana: "ニ / ni",
      vietnamese: "Nhị — hai",
      english: "hai",
      type: "kanji",
      example: "二次会 / nijikai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 817f4ea559f39809
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — lớn",
      english: "lớn",
      type: "kanji",
      example: "大会 / taikai, 大きさ / ookisa"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 5059a876eb8616de
    {
      japanese: "表",
      kana: "ヒョウ / hyou",
      vietnamese: "Biểu — mặt trước, biểu thị",
      english: "mặt trước, biểu thị",
      type: "kanji",
      example: "表 / omote, 発表会 / happyoukai"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 0d5e22687b79ba31
    {
      japanese: "上",
      kana: "ジョウ / jou, ショウ / shou",
      vietnamese: "Thượng — trên",
      english: "trên",
      type: "kanji",
      example: "以上 / ijou"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 80078bbb3310e83b
    {
      japanese: "下",
      kana: "カ / ka, ゲ / ge",
      vietnamese: "Hạ — dưới",
      english: "dưới",
      type: "kanji",
      example: "以下 / ika"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 95faf3390ced9af0
    {
      japanese: "長",
      kana: "チョウ / chou",
      vietnamese: "Trường — dài, trưởng",
      english: "dài, trưởng",
      type: "kanji",
      example: "長さ / nagasa, 長崎 / Nagasaki"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | df79989b9b36d859
    {
      japanese: "重",
      kana: "ジュウ / juu, チョウ / chou",
      vietnamese: "Trọng — nặng, quan trọng",
      english: "nặng, quan trọng",
      type: "kanji",
      example: "重さ / omosa"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 9b21bcf918d7998f
    {
      japanese: "高",
      kana: "コウ / kou",
      vietnamese: "Cao — cao, đắt",
      english: "cao, đắt",
      type: "kanji",
      example: "高さ / takasa"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 72929adea0dbfe6a
    {
      japanese: "本",
      kana: "ホン / hon",
      vietnamese: "Bổn / Bản — gốc, sách; đơn vị đếm vật dài",
      english: "gốc, sách; đơn vị đếm vật dài",
      type: "kanji",
      example: "一本 / ippon"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | bf0a0337c3a72f9f
    {
      japanese: "手",
      kana: "シュ / shu",
      vietnamese: "Thủ — tay",
      english: "tay",
      type: "kanji",
      example: "手に入れます / te ni iremasu"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 3d0c94f7e426a88d
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào, cho vào",
      english: "vào, cho vào",
      type: "kanji",
      example: "入れます / iremasu"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 1218445e403c63c3
    {
      japanese: "今",
      kana: "コン / kon, キン / kin",
      vietnamese: "Kim — bây giờ",
      english: "bây giờ",
      type: "kanji",
      example: "今でも / ima demo"
    },
    // source: review_tu_vung_bai_40.md | 5. Kanji N5–N4 cần học kỹ | 993c411c1f5bb779
    {
      japanese: "男",
      kana: "ダン / dan, ナン / nan",
      vietnamese: "Nam — nam giới",
      english: "nam giới",
      type: "kanji",
      example: "男 / otoko"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4126cf67eb8875c6
    {
      japanese: "数える",
      kana: "かぞえる / kazoeru",
      vietnamese: "Số — 数 = số, đếm",
      english: "数 = số, đếm",
      type: "kanji",
      example: "数える"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | fd064c577a894187
    {
      japanese: "数字",
      kana: "スウ / suu",
      vietnamese: "Số — 数 = số",
      english: "数 = số",
      type: "kanji",
      example: "数字"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7e6315a1d72c41af
    {
      japanese: "合う",
      kana: "あう / au",
      vietnamese: "Hợp — 合 = hợp, khớp",
      english: "合 = hợp, khớp",
      type: "kanji",
      example: "合う"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5a78be43fab3d694
    {
      japanese: "合格",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — 合 = hợp",
      english: "合 = hợp",
      type: "kanji",
      example: "合格"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c00fc0c5c0f9a280
    {
      japanese: "出る",
      kana: "でる / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | df6bce75a49931c8
    {
      japanese: "出発",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — 出 = ra; 発 = phát, khởi hành",
      english: "出 = ra; 発 = phát, khởi hành",
      type: "kanji",
      example: "出発"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 528e0002b1a73e12
    {
      japanese: "発表",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 発 = phát; 表 = biểu thị",
      english: "発 = phát; 表 = biểu thị",
      type: "kanji",
      example: "発表"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f5a100bc5f2fe156
    {
      japanese: "到着",
      kana: "チャク / chaku",
      vietnamese: "Trước / Trứ — 着 = đến",
      english: "着 = đến",
      type: "kanji",
      example: "到着"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | a327c26281d73db1
    {
      japanese: "問題",
      kana: "モン / mon",
      vietnamese: "Vấn — 問 = hỏi; 題 = đề",
      english: "問 = hỏi; 題 = đề",
      type: "kanji",
      example: "問題"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 9a8aca155f69be9e
    {
      japanese: "必要",
      kana: "ヒツ / hitsu",
      vietnamese: "Tất — 必 = chắc chắn; 要 = cần",
      english: "必 = chắc chắn; 要 = cần",
      type: "kanji",
      example: "必要"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e931f8ac66d3d23b
    {
      japanese: "天気",
      kana: "テン / ten",
      vietnamese: "Thiên — 天 = trời; 気 = khí",
      english: "天 = trời; 気 = khí",
      type: "kanji",
      example: "天気"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ba91a46b30325be2
    {
      japanese: "年",
      kana: "とし / toshi",
      vietnamese: "Niên — 年 = năm",
      english: "年 = năm",
      type: "kanji",
      example: "年"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 08a48e60d022f7e2
    {
      japanese: "忘年会",
      kana: "ネン / nen",
      vietnamese: "Niên — 忘 = quên; 年 = năm; 会 = hội",
      english: "忘 = quên; 年 = năm; 会 = hội",
      type: "kanji",
      example: "忘年会"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 3c65904e95c1afcc
    {
      japanese: "会う",
      kana: "あう / au",
      vietnamese: "Hội — 会 = hội, gặp",
      english: "会 = hội, gặp",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bdc309f5b0668fdb
    {
      japanese: "新年会",
      kana: "カイ / kai",
      vietnamese: "Hội — 新 = mới; 年 = năm; 会 = hội",
      english: "新 = mới; 年 = năm; 会 = hội",
      type: "kanji",
      example: "新年会"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7681850a0cfe3932
    {
      japanese: "新しい",
      kana: "あたらしい / atarashii",
      vietnamese: "Tân — 新 = mới",
      english: "新 = mới",
      type: "kanji",
      example: "新しい"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 368eca4f691acc0b
    {
      japanese: "二次会",
      kana: "ニ / ni",
      vietnamese: "Nhị — 二 = hai; 次 = thứ tự; 会 = hội",
      english: "二 = hai; 次 = thứ tự; 会 = hội",
      type: "kanji",
      example: "二次会"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 491094e065b3ceb5
    {
      japanese: "大会",
      kana: "タイ / tai",
      vietnamese: "Đại — 大 = lớn; 会 = hội",
      english: "大 = lớn; 会 = hội",
      type: "kanji",
      example: "大会"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2a461246cc437636
    {
      japanese: "大きい",
      kana: "おおきい / ookii",
      vietnamese: "Đại — 大 = lớn",
      english: "大 = lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ac9d07c5cf37882d
    {
      japanese: "表",
      kana: "おもて / omote",
      vietnamese: "Biểu — 表 = mặt trước",
      english: "表 = mặt trước",
      type: "kanji",
      example: "表"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | aa9f67d5846f4547
    {
      japanese: "以上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — 以 = lấy làm mốc; 上 = trên",
      english: "以 = lấy làm mốc; 上 = trên",
      type: "kanji",
      example: "以上"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ecb456541902d7a5
    {
      japanese: "以下",
      kana: "カ / ka",
      vietnamese: "Hạ — 以 = lấy làm mốc; 下 = dưới",
      english: "以 = lấy làm mốc; 下 = dưới",
      type: "kanji",
      example: "以下"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5fdda48c669f5813
    {
      japanese: "長い",
      kana: "ながい / nagai",
      vietnamese: "Trường — 長 = dài",
      english: "長 = dài",
      type: "kanji",
      example: "長い"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 327e30c490b0f3d8
    {
      japanese: "重い",
      kana: "おもい / omoi",
      vietnamese: "Trọng — 重 = nặng",
      english: "重 = nặng",
      type: "kanji",
      example: "重い"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4b6c72fd7c84fdbd
    {
      japanese: "高い",
      kana: "たかい / takai",
      vietnamese: "Cao — 高 = cao",
      english: "高 = cao",
      type: "kanji",
      example: "高い"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 610d262f853b5150
    {
      japanese: "一本",
      kana: "ホン / hon",
      vietnamese: "Bổn / Bản — 本 = gốc, sách; đơn vị đếm vật dài",
      english: "本 = gốc, sách; đơn vị đếm vật dài",
      type: "kanji",
      example: "一本"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 73703f92954704ed
    {
      japanese: "手に入れる",
      kana: "て / te",
      vietnamese: "Thủ — 手 = tay; 入 = vào",
      english: "手 = tay; 入 = vào",
      type: "kanji",
      example: "手に入れる"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ca606b1c1385af7e
    {
      japanese: "今",
      kana: "いま / ima",
      vietnamese: "Kim — 今 = bây giờ",
      english: "今 = bây giờ",
      type: "kanji",
      example: "今"
    },
    // source: review_tu_vung_bai_40.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 87fdfa1c9feb709a
    {
      japanese: "男",
      kana: "おとこ / otoko",
      vietnamese: "Nam — 男 = nam giới",
      english: "男 = nam giới",
      type: "kanji",
      example: "男"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: 'だから / ですから',
      vietnamese: 'vì vậy, cho nên',
      english: 'so, therefore',
      type: 'main',
      explanation: 'Diễn tả kết quả từ lý do trước đó. だから thân mật hơn ですから.',
      examples: [
        {
          japanese: '雨が降っています。だから、傘を持って行きます。',
          vietnamese: 'Trời đang mưa. Vì vậy tôi mang theo ô.',
          english: 'It\'s raining. So I\'ll take an umbrella.',
          type: 'main'
        },
        {
          japanese: '明日は休みです。ですから、ゆっくり休めます。',
          vietnamese: 'Ngày mai nghỉ. Cho nên tôi có thể nghỉ ngơi thoải mái.',
          english: 'Tomorrow is a holiday. Therefore, I can rest well.',
          type: 'main'
        },
        {
          japanese: '時間がありません。だから、急いでください。',
          vietnamese: 'Không có thời gian. Vì vậy hãy nhanh lên.',
          english: 'There\'s no time. So please hurry.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'しかし / でも',
      vietnamese: 'tuy nhiên, nhưng',
      english: 'however, but',
      type: 'main',
      explanation: 'Diễn tả sự tương phản. しかし lịch sự hơn でも.',
      examples: [
        {
          japanese: '一生懸命勉強しました。しかし、試験に落ちました。',
          vietnamese: 'Tôi đã học chăm chỉ. Tuy nhiên, tôi đã trượt kỳ thi.',
          english: 'I studied hard. However, I failed the exam.',
          type: 'main'
        },
        {
          japanese: '疲れています。でも、頑張ります。',
          vietnamese: 'Tôi mệt. Nhưng tôi sẽ cố gắng.',
          english: 'I\'m tired. But I\'ll do my best.',
          type: 'main'
        },
        {
          japanese: '安いです。しかし、品質がよくありません。',
          vietnamese: 'Rẻ. Tuy nhiên chất lượng không tốt.',
          english: 'It\'s cheap. However, the quality is not good.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'それで',
      vietnamese: 'vì vậy, và rồi',
      english: 'so, and then',
      type: 'main',
      explanation: 'Diễn tả kết quả hoặc hành động tiếp theo từ tình huống trước.',
      examples: [
        {
          japanese: '財布を忘れました。それで、お金が払えませんでした。',
          vietnamese: 'Tôi quên ví. Vì vậy không thể trả tiền.',
          english: 'I forgot my wallet. So I couldn\'t pay.',
          type: 'main'
        },
        {
          japanese: '電車が止まりました。それで、遅刻しました。',
          vietnamese: 'Tàu điện dừng. Vì vậy tôi đã đến muộn.',
          english: 'The train stopped. So I was late.',
          type: 'main'
        },
        {
          japanese: '道に迷いました。それで、警察に聞きました。',
          vietnamese: 'Tôi lạc đường. Vì vậy đã hỏi cảnh sát.',
          english: 'I got lost. So I asked the police.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'それに',
      vietnamese: 'hơn nữa, thêm vào đó',
      english: 'besides, moreover',
      type: 'main',
      explanation: 'Thêm thông tin bổ sung theo hướng tích cực hoặc tiêu cực.',
      examples: [
        {
          japanese: '彼は親切です。それに、頭もいいです。',
          vietnamese: 'Anh ấy tốt bụng. Hơn nữa còn thông minh.',
          english: 'He\'s kind. Besides, he\'s smart too.',
          type: 'main'
        },
        {
          japanese: 'この店は安いです。それに、美味しいです。',
          vietnamese: 'Quán này rẻ. Hơn nữa còn ngon.',
          english: 'This restaurant is cheap. Moreover, it\'s delicious.',
          type: 'main'
        },
        {
          japanese: '日本語は難しいです。それに、漢字も覚えなければなりません。',
          vietnamese: 'Tiếng Nhật khó. Hơn nữa còn phải nhớ kanji.',
          english: 'Japanese is difficult. Besides, you have to memorize kanji.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'それから',
      vietnamese: 'sau đó, rồi',
      english: 'after that, and then',
      type: 'main',
      explanation: 'Diễn tả hành động tiếp theo theo trình tự thời gian.',
      examples: [
        {
          japanese: '朝ごはんを食べました。それから、学校へ行きました。',
          vietnamese: 'Tôi đã ăn sáng. Sau đó đi đến trường.',
          english: 'I ate breakfast. After that, I went to school.',
          type: 'main'
        },
        {
          japanese: '宿題をします。それから、テレビを見ます。',
          vietnamese: 'Tôi làm bài tập. Sau đó xem TV.',
          english: 'I do homework. And then watch TV.',
          type: 'main'
        },
        {
          japanese: 'シャワーを浴びました。それから、寝ました。',
          vietnamese: 'Tôi đã tắm. Sau đó đi ngủ.',
          english: 'I took a shower. After that, I went to bed.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'まず〜、次に〜、最後に〜',
      vietnamese: 'trước tiên ~, tiếp theo ~, cuối cùng ~',
      english: 'first ~, next ~, finally ~',
      type: 'main',
      explanation: 'Diễn tả trình tự các bước hoặc hành động.',
      examples: [
        {
          japanese: 'まず、手を洗います。次に、野菜を切ります。最後に、炒めます。',
          vietnamese: 'Trước tiên rửa tay. Tiếp theo cắt rau. Cuối cùng xào.',
          english: 'First, wash your hands. Next, cut vegetables. Finally, stir-fry.',
          type: 'main'
        },
        {
          japanese: 'まず、予約します。次に、準備します。最後に、出発します。',
          vietnamese: 'Trước tiên đặt chỗ. Tiếp theo chuẩn bị. Cuối cùng khởi hành.',
          english: 'First, make a reservation. Next, prepare. Finally, depart.',
          type: 'main'
        },
        {
          japanese: 'まず、説明を聞きます。次に、質問します。',
          vietnamese: 'Trước tiên nghe giải thích. Tiếp theo hỏi.',
          english: 'First, listen to the explanation. Next, ask questions.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'ところで',
      vietnamese: 'nhân tiện, nhân đây',
      english: 'by the way',
      type: 'additional',
      explanation: 'Chuyển sang chủ đề mới trong cuộc hội thoại.',
      examples: [
        {
          japanese: 'ところで、明日は何をしますか。',
          vietnamese: 'Nhân tiện, ngày mai bạn làm gì?',
          english: 'By the way, what will you do tomorrow?',
          type: 'main'
        },
        {
          japanese: 'ところで、週末は暇ですか。',
          vietnamese: 'Nhân đây, cuối tuần bạn rảnh không?',
          english: 'By the way, are you free this weekend?',
          type: 'main'
        },
        {
          japanese: 'ところで、彼は元気ですか。',
          vietnamese: 'Nhân tiện, anh ấy có khỏe không?',
          english: 'By the way, is he well?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'たとえば',
      vietnamese: 'ví dụ',
      english: 'for example',
      type: 'additional',
      explanation: 'Đưa ra ví dụ cụ thể để minh họa.',
      examples: [
        {
          japanese: '果物が好きです。たとえば、リンゴやバナナです。',
          vietnamese: 'Tôi thích hoa quả. Ví dụ như táo và chuối.',
          english: 'I like fruits. For example, apples and bananas.',
          type: 'main'
        },
        {
          japanese: 'スポーツをします。たとえば、サッカーやテニスです。',
          vietnamese: 'Tôi chơi thể thao. Ví dụ như bóng đá và tennis.',
          english: 'I play sports. For example, soccer and tennis.',
          type: 'main'
        },
        {
          japanese: '日本の食べ物はおいしいです。たとえば、寿司やラーメンです。',
          vietnamese: 'Đồ ăn Nhật ngon. Ví dụ như sushi và ramen.',
          english: 'Japanese food is delicious. For example, sushi and ramen.',
          type: 'additional'
        }
      ]
    },
    // BEGIN_IMPORTED_MINNA_N4_GRAMMAR_MD
    // source: review_bai_40_N4.md | 1. Trọng tâm bài 40 | 7006ad0e885bff08
    {
      pattern: "疑問詞 + 普通形 + か、〜",
      vietnamese: "không biết / hỏi / xác nhận ai, cái gì, ở đâu, khi nào...",
      english: "gimonshi + futsuu-kei + ka, ...",
      type: "main",
      explanation: "Dùng khi trong câu có từ hỏi như 何 / nani, どこ / doko, いつ / itsu, どう / dou.\nRomaji: gimonshi + futsuu-kei + ka, ...",
      examples: [],
      category: "1. Trọng tâm bài 40"
    },
    // source: review_bai_40_N4.md | 1. Trọng tâm bài 40 | 412a910dd55c5a98
    {
      pattern: "普通形 + かどうか、〜",
      vietnamese: "có hay không, liệu có... hay không",
      english: "futsuu-kei + ka dou ka, ...",
      type: "main",
      explanation: "Dùng khi không có từ hỏi, chỉ hỏi “có hay không”.\nRomaji: futsuu-kei + ka dou ka, ...",
      examples: [],
      category: "1. Trọng tâm bài 40"
    },
    // source: review_bai_40_N4.md | 1. Trọng tâm bài 40 | d4eae3c6f8918adb
    {
      pattern: "Vてみます",
      vietnamese: "thử làm gì",
      english: "V-te mimasu",
      type: "main",
      explanation: "Hay dùng khi thử mặc, thử ăn, thử hỏi, thử đo.\nRomaji: V-te mimasu",
      examples: [],
      category: "1. Trọng tâm bài 40"
    },
    // source: review_bai_40_N4.md | 1. Trọng tâm bài 40 | 047352eb2eb575b7
    {
      pattern: "い形容詞 bỏ い + さ",
      vietnamese: "độ..., sự...",
      english: "i-keiyoushi bỏ i + sa",
      type: "main",
      explanation: "長い / nagai → 長さ / nagasa; 重い / omoi → 重さ / omosa.\nRomaji: i-keiyoushi bỏ i + sa",
      examples: [],
      category: "1. Trọng tâm bài 40"
    },
    // END_IMPORTED_MINNA_N4_GRAMMAR_MD
  ]
};
