/**
 * N4 Core Lessons — Lesson 24
 * Focus: Transition and Sequence Expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_24_DATA: LessonData = {
  lessonNumber: 24,
  title: '時間の前後関係 (Time Sequence Relations)',
  vocabulary: [
    // Time-related verbs
    {
      japanese: '始まる（はじまる）',
      kana: 'はじまる',
      vietnamese: 'bắt đầu',
      english: 'to begin/start',
      type: 'main',
      example: '授業が始まりました。'
    },
    {
      japanese: '始める（はじめる）',
      kana: 'はじめる',
      vietnamese: 'bắt đầu (làm gì)',
      english: 'to begin (doing)',
      type: 'main',
      example: '勉強を始めます。'
    },
    {
      japanese: '終わる（おわる）',
      kana: 'おわる',
      vietnamese: 'kết thúc',
      english: 'to end/finish',
      type: 'main',
      example: '会議が終わりました。'
    },
    {
      japanese: '終える（おえる）',
      kana: 'おえる',
      vietnamese: 'hoàn thành',
      english: 'to finish (something)',
      type: 'main',
      example: '仕事を終えました。'
    },
    {
      japanese: '続ける（つづける）',
      kana: 'つづける',
      vietnamese: 'tiếp tục',
      english: 'to continue',
      type: 'main',
      example: '話を続けてください。'
    },
    {
      japanese: '中断する（ちゅうだんする）',
      kana: 'ちゅうだんする',
      vietnamese: 'tạm dừng, gián đoạn',
      english: 'to interrupt/suspend',
      type: 'main',
      example: '作業を中断しました。'
    },
    {
      japanese: '進む（すすむ）',
      kana: 'すすむ',
      vietnamese: 'tiến tới',
      english: 'to advance/proceed',
      type: 'main',
      example: '仕事が進んでいます。'
    },
    {
      japanese: '進める（すすめる）',
      kana: 'すすめる',
      vietnamese: 'thúc đẩy, tiến hành',
      english: 'to advance (something)',
      type: 'main',
      example: '計画を進めます。'
    },
    {
      japanese: '遅れる（おくれる）',
      kana: 'おくれる',
      vietnamese: 'trễ',
      english: 'to be late',
      type: 'main',
      example: '電車が遅れました。'
    },
    {
      japanese: '間に合う（まにあう）',
      kana: 'まにあう',
      vietnamese: 'kịp giờ',
      english: 'to be in time',
      type: 'main',
      example: '会議に間に合いました。'
    },
    {
      japanese: '急ぐ（いそぐ）',
      kana: 'いそぐ',
      vietnamese: 'vội vàng',
      english: 'to hurry',
      type: 'main',
      example: '急いでください。'
    },
    {
      japanese: '焦る（あせる）',
      kana: 'あせる',
      vietnamese: 'lo lắng, vội vã',
      english: 'to be impatient/rushed',
      type: 'main',
      example: '焦らないでください。'
    },
    // Daily routine verbs
    {
      japanese: '起きる（おきる）',
      kana: 'おきる',
      vietnamese: 'thức dậy',
      english: 'to wake up',
      type: 'main',
      example: '毎朝6時に起きます。'
    },
    {
      japanese: '寝る（ねる）',
      kana: 'ねる',
      vietnamese: 'ngủ',
      english: 'to sleep',
      type: 'main',
      example: '11時に寝ます。'
    },
    {
      japanese: '着る（きる）',
      kana: 'きる',
      vietnamese: 'mặc (quần áo)',
      english: 'to wear/put on (clothes)',
      type: 'main',
      example: '服を着てから出かけます。'
    },
    {
      japanese: '脱ぐ（ぬぐ）',
      kana: 'ぬぐ',
      vietnamese: 'cởi (quần áo)',
      english: 'to take off (clothes)',
      type: 'main',
      example: '靴を脱いでください。'
    },
    {
      japanese: '洗う（あらう）',
      kana: 'あらう',
      vietnamese: 'rửa',
      english: 'to wash',
      type: 'main',
      example: '手を洗ってから食べます。'
    },
    {
      japanese: '磨く（みがく）',
      kana: 'みがく',
      vietnamese: 'đánh răng, mài',
      english: 'to brush/polish',
      type: 'main',
      example: '歯を磨きます。'
    },
    {
      japanese: '出かける（でかける）',
      kana: 'でかける',
      vietnamese: 'ra ngoài',
      english: 'to go out',
      type: 'main',
      example: '朝8時に出かけます。'
    },
    {
      japanese: '帰る（かえる）',
      kana: 'かえる',
      vietnamese: 'về',
      english: 'to return/go home',
      type: 'main',
      example: '夜7時に帰ります。'
    },
    {
      japanese: '入る（はいる）',
      kana: 'はいる',
      vietnamese: 'vào',
      english: 'to enter',
      type: 'main',
      example: '部屋に入ります。'
    },
    {
      japanese: '出る（でる）',
      kana: 'でる',
      vietnamese: 'ra, xuất hiện',
      english: 'to exit/leave',
      type: 'main',
      example: '家を出ます。'
    },
    // Time expressions
    {
      japanese: '前（まえ）',
      kana: 'まえ',
      vietnamese: 'trước',
      english: 'before',
      type: 'main',
      example: '食事の前に手を洗います。'
    },
    {
      japanese: '後（あと）',
      kana: 'あと',
      vietnamese: 'sau',
      english: 'after',
      type: 'main',
      example: '授業の後で会いましょう。'
    },
    {
      japanese: '間（あいだ）',
      kana: 'あいだ',
      vietnamese: 'trong khi, khoảng',
      english: 'while/during/between',
      type: 'main',
      example: '休みの間に旅行します。'
    },
    {
      japanese: '最中（さいちゅう）',
      kana: 'さいちゅう',
      vietnamese: 'đang trong lúc',
      english: 'in the middle of',
      type: 'main',
      example: '食事の最中に電話が来ました。'
    },
    {
      japanese: '途中（とちゅう）',
      kana: 'とちゅう',
      vietnamese: 'giữa chừng, trên đường',
      english: 'on the way/midway',
      type: 'main',
      example: '途中で友達に会いました。'
    },
    {
      japanese: '直前（ちょくぜん）',
      kana: 'ちょくぜん',
      vietnamese: 'ngay trước',
      english: 'just before',
      type: 'main',
      example: '試験の直前に復習します。'
    },
    {
      japanese: '直後（ちょくご）',
      kana: 'ちょくご',
      vietnamese: 'ngay sau',
      english: 'right after',
      type: 'main',
      example: '地震の直後に停電しました。'
    },
    {
      japanese: '同時（どうじ）',
      kana: 'どうじ',
      vietnamese: 'cùng lúc',
      english: 'at the same time',
      type: 'main',
      example: '二つの仕事を同時にできません。'
    },
    // Sequence markers
    {
      japanese: 'まず',
      kana: 'まず',
      vietnamese: 'trước tiên',
      english: 'first',
      type: 'main',
      example: 'まず手を洗ってください。'
    },
    {
      japanese: '次に（つぎに）',
      kana: 'つぎに',
      vietnamese: 'tiếp theo',
      english: 'next',
      type: 'main',
      example: '次に野菜を切ります。'
    },
    {
      japanese: 'それから',
      kana: 'それから',
      vietnamese: 'sau đó',
      english: 'and then',
      type: 'main',
      example: 'それから炒めます。'
    },
    {
      japanese: '最後に（さいごに）',
      kana: 'さいごに',
      vietnamese: 'cuối cùng',
      english: 'finally/lastly',
      type: 'main',
      example: '最後に塩を入れます。'
    },
    {
      japanese: 'その後（そのご）',
      kana: 'そのご',
      vietnamese: 'sau đó',
      english: 'after that',
      type: 'main',
      example: 'その後どうしましたか。'
    },
    {
      japanese: 'すぐに',
      kana: 'すぐに',
      vietnamese: 'ngay lập tức',
      english: 'immediately',
      type: 'main',
      example: 'すぐに来てください。'
    },
    // Additional vocabulary
    {
      japanese: '準備（じゅんび）',
      kana: 'じゅんび',
      vietnamese: 'chuẩn bị',
      english: 'preparation',
      type: 'additional',
      example: '出発の準備をします。'
    },
    {
      japanese: '用意（ようい）',
      kana: 'ようい',
      vietnamese: 'chuẩn bị, sẵn sàng',
      english: 'preparation/readiness',
      type: 'additional',
      example: '夕食の用意ができました。'
    },
    {
      japanese: '片付ける（かたづける）',
      kana: 'かたづける',
      vietnamese: 'dọn dẹp',
      english: 'to tidy up',
      type: 'additional',
      example: '部屋を片付けます。'
    },
    {
      japanese: '掃除する（そうじする）',
      kana: 'そうじする',
      vietnamese: 'dọn dẹp, vệ sinh',
      english: 'to clean',
      type: 'additional',
      example: '毎週末掃除します。'
    },
    {
      japanese: '洗濯する（せんたくする）',
      kana: 'せんたくする',
      vietnamese: 'giặt giũ',
      english: 'to do laundry',
      type: 'additional',
      example: '週に一度洗濯します。'
    },
    {
      japanese: '料理する（りょうりする）',
      kana: 'りょうりする',
      vietnamese: 'nấu ăn',
      english: 'to cook',
      type: 'additional',
      example: '晩ご飯を料理します。'
    },
    {
      japanese: '買い物する（かいものする）',
      kana: 'かいものする',
      vietnamese: 'mua sắm',
      english: 'to shop',
      type: 'additional',
      example: 'スーパーで買い物します。'
    },
    {
      japanese: '出発する（しゅっぱつする）',
      kana: 'しゅっぱつする',
      vietnamese: 'khởi hành',
      english: 'to depart',
      type: 'additional',
      example: '明日の朝出発します。'
    },
    {
      japanese: '到着する（とうちゃくする）',
      kana: 'とうちゃくする',
      vietnamese: 'đến nơi',
      english: 'to arrive',
      type: 'additional',
      example: '夜9時に到着しました。'
    },
    {
      japanese: '経験する（けいけんする）',
      kana: 'けいけんする',
      vietnamese: 'trải nghiệm',
      english: 'to experience',
      type: 'additional',
      example: '日本で色々経験しました。'
    },
    {
      japanese: '完成する（かんせいする）',
      kana: 'かんせいする',
      vietnamese: 'hoàn thành',
      english: 'to complete',
      type: 'additional',
      example: 'プロジェクトが完成しました。'
    },
    {
      japanese: '中止する（ちゅうしする）',
      kana: 'ちゅうしする',
      vietnamese: 'hủy bỏ',
      english: 'to cancel',
      type: 'additional',
      example: '雨で中止になりました。'
    },
    {
      japanese: '延期する（えんきする）',
      kana: 'えんきする',
      vietnamese: 'hoãn lại',
      english: 'to postpone',
      type: 'additional',
      example: '会議を延期しました。'
    },
    {
      japanese: '予約する（よやくする）',
      kana: 'よやくする',
      vietnamese: 'đặt trước',
      english: 'to reserve/book',
      type: 'additional',
      example: 'レストランを予約しました。'
    },
    {
      japanese: 'キャンセルする',
      kana: 'キャンセルする',
      vietnamese: 'hủy',
      english: 'to cancel',
      type: 'additional',
      example: '予約をキャンセルしました。'
    },
    {
      japanese: '順番（じゅんばん）',
      kana: 'じゅんばん',
      vietnamese: 'thứ tự, lượt',
      english: 'order/turn',
      type: 'additional',
      example: '順番に並んでください。'
    },
    {
      japanese: '手順（てじゅん）',
      kana: 'てじゅん',
      vietnamese: 'quy trình, các bước',
      english: 'procedure/steps',
      type: 'additional',
      example: '手順を説明します。'
    },
    {
      japanese: '過程（かてい）',
      kana: 'かてい',
      vietnamese: 'quá trình',
      english: 'process',
      type: 'additional',
      example: '大切な過程です。'
    },
    {
      japanese: '段階（だんかい）',
      kana: 'だんかい',
      vietnamese: 'giai đoạn, bước',
      english: 'stage/phase',
      type: 'additional',
      example: '第一段階が終わりました。'
    },
    // Supplementary
    {
      japanese: '瞬間（しゅんかん）',
      kana: 'しゅんかん',
      vietnamese: 'khoảnh khắc',
      english: 'moment/instant',
      type: 'supplementary',
      example: 'その瞬間に気づきました。'
    },
    {
      japanese: '期間（きかん）',
      kana: 'きかん',
      vietnamese: 'thời gian, kỳ hạn',
      english: 'period/term',
      type: 'supplementary',
      example: '期間は3ヶ月です。'
    },
    {
      japanese: '一時的（いちじてき）',
      kana: 'いちじてき',
      vietnamese: 'tạm thời',
      english: 'temporary',
      type: 'supplementary',
      example: '一時的な問題です。'
    },
    {
      japanese: '永久（えいきゅう）',
      kana: 'えいきゅう',
      vietnamese: 'vĩnh viễn',
      english: 'permanent/eternal',
      type: 'supplementary',
      example: '永久に続きます。'
    },
    {
      japanese: '常に（つねに）',
      kana: 'つねに',
      vietnamese: 'luôn luôn',
      english: 'always/constantly',
      type: 'supplementary',
      example: '常に努力します。'
    },
    {
      japanese: '時々（ときどき）',
      kana: 'ときどき',
      vietnamese: 'thỉnh thoảng',
      english: 'sometimes',
      type: 'supplementary',
      example: '時々映画を見ます。'
    },
    {
      japanese: 'たまに',
      kana: 'たまに',
      vietnamese: 'đôi khi',
      english: 'occasionally',
      type: 'supplementary',
      example: 'たまに外食します。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_49.md | 1. Nhóm kính ngữ quan trọng | 4d9da93f877d6499
    {
      japanese: "いらっしゃいます",
      kana: "いらっしゃいます",
      vietnamese: "có, ở, đi, đến — kính ngữ của います / 行きます / 来ます",
      english: "có, ở, đi, đến — kính ngữ của います / 行きます / 来ます",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_49.md | 1. Nhóm kính ngữ quan trọng | ae296684afdaac7c
    {
      japanese: "召し上がります",
      kana: "めしあがります",
      vietnamese: "ăn, uống — kính ngữ của 食べます / 飲みます",
      english: "ăn, uống — kính ngữ của 食べます / 飲みます",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_49.md | 1. Nhóm kính ngữ quan trọng | 5f49bd52557393c3
    {
      japanese: "おっしゃいます",
      kana: "おっしゃいます",
      vietnamese: "nói — kính ngữ của 言います",
      english: "nói — kính ngữ của 言います",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_49.md | 1. Nhóm kính ngữ quan trọng | 040a620445912279
    {
      japanese: "なさいます",
      kana: "なさいます",
      vietnamese: "làm — kính ngữ của します",
      english: "làm — kính ngữ của します",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_49.md | 1. Nhóm kính ngữ quan trọng | ea6a5c907be5f3f6
    {
      japanese: "ご覧になります",
      kana: "ごらんになります",
      vietnamese: "xem, nhìn — kính ngữ của 見ます",
      english: "xem, nhìn — kính ngữ của 見ます",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_49.md | 1. Nhóm kính ngữ quan trọng | ec05e0fcd9e957db
    {
      japanese: "ご存じです",
      kana: "ごぞんじです",
      vietnamese: "biết — kính ngữ của 知っています",
      english: "biết — kính ngữ của 知っています",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 3d6a542b8ade492b
    {
      japanese: "利用します",
      kana: "りようします",
      vietnamese: "sử dụng, tận dụng",
      english: "sử dụng, tận dụng",
      type: "main",
      example: "図書館を利用します。\nToshokan o riyou shimasu.\nTôi sử dụng thư viện."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | bc94c0271aa84d59
    {
      japanese: "勤めます",
      kana: "つとめます",
      vietnamese: "làm việc ở công ty/cơ quan",
      english: "làm việc ở công ty/cơ quan",
      type: "main",
      example: "会社に勤めています。\nKaisha ni tsutomete imasu.\nTôi đang làm việc ở công ty."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 775ae7c6a0e9cc68
    {
      japanese: "掛けます",
      kana: "かけます",
      vietnamese: "ngồi, treo, gọi điện; trong bài: ngồi ghế",
      english: "ngồi, treo, gọi điện; trong bài: ngồi ghế",
      type: "main",
      example: "いすに掛けます。\nIsu ni kakemasu.\nTôi ngồi vào ghế."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 1d92a8b189fa98eb
    {
      japanese: "過ごします",
      kana: "すごします",
      vietnamese: "trải qua, tiêu thời gian",
      english: "trải qua, tiêu thời gian",
      type: "main",
      example: "家で週末を過ごします。\nIe de shuumatsu o sugoshimasu.\nTôi trải qua cuối tuần ở nhà."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | c866c8c1c2336409
    {
      japanese: "挨拶",
      kana: "あいさつ",
      vietnamese: "chào hỏi",
      english: "chào hỏi",
      type: "main",
      example: "先生にあいさつします。\nSensei ni aisatsu shimasu.\nTôi chào thầy/cô."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | d1f1a0f783ab782a
    {
      japanese: "旅館",
      kana: "りょかん",
      vietnamese: "nhà trọ kiểu Nhật",
      english: "nhà trọ kiểu Nhật",
      type: "main",
      example: "京都の旅館に泊まります。\nKyouto no ryokan ni tomarimasu.\nTôi ở ryokan tại Kyoto."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 679126ecb489a8fb
    {
      japanese: "バス停",
      kana: "バスてい",
      vietnamese: "bến xe buýt",
      english: "bến xe buýt",
      type: "main",
      example: "バス停で待ちます。\nBasu tei de machimasu.\nTôi đợi ở bến xe buýt."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | e61f983b2f5e71eb
    {
      japanese: "奥様",
      kana: "おくさま",
      vietnamese: "vợ của người khác, cách nói kính trọng",
      english: "vợ của người khác, cách nói kính trọng",
      type: "main",
      example: "奥様はお元気ですか。\nOkusama wa ogenki desu ka.\nPhu nhân của anh có khỏe không ạ?"
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 69a7af335aa2bbb0
    {
      japanese: "～様",
      kana: "～さま",
      vietnamese: "ngài, ông, bà — kính trọng hơn さん",
      english: "ngài, ông, bà — kính trọng hơn さん",
      type: "main",
      example: "田中様はいらっしゃいますか。\nTanaka-sama wa irasshaimasu ka.\nNgài Tanaka có ở đây không ạ?"
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 7300a379f455099c
    {
      japanese: "たまに",
      kana: "たまに",
      vietnamese: "thỉnh thoảng",
      english: "thỉnh thoảng",
      type: "main",
      example: "たまに映画を見ます。\nTama ni eiga o mimasu.\nThỉnh thoảng tôi xem phim."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | 39c7e8314183f79b
    {
      japanese: "どなたでも",
      kana: "どなたでも",
      vietnamese: "vị nào cũng, bất kỳ ai cũng",
      english: "vị nào cũng, bất kỳ ai cũng",
      type: "main",
      example: "どなたでも参加できます。\nDonata demo sanka dekimasu.\nBất kỳ ai cũng có thể tham gia."
    },
    // source: review_tu_vung_bai_49.md | 2. Từ vựng chính | b114d0c30e82042b
    {
      japanese: "～といいます",
      kana: "～といいます",
      vietnamese: "tên là ~",
      english: "tên là ~",
      type: "main",
      example: "山田といいます。\nYamada to iimasu.\nTôi tên là Yamada."
    },
    // source: review_tu_vung_bai_49.md | 3. Từ vựng hội thoại | 73a455ee0a854b2b
    {
      japanese: "一年組",
      kana: "いちねんぐみ",
      vietnamese: "lớp/năm thứ nhất",
      english: "lớp/năm thứ nhất",
      type: "supplementary",
      example: "一年組の学生です。\nIchinen-gumi no gakusei desu.\nTôi là học sinh lớp/năm thứ nhất."
    },
    // source: review_tu_vung_bai_49.md | 3. Từ vựng hội thoại | a527c4a0dc380aec
    {
      japanese: "出します",
      kana: "だします",
      vietnamese: "đưa ra; trong cụm 熱を出します = bị sốt",
      english: "đưa ra; trong cụm 熱を出します = bị sốt",
      type: "supplementary",
      example: "熱を出しました。\nNetsu o dashimashita.\nTôi bị sốt rồi."
    },
    // source: review_tu_vung_bai_49.md | 3. Từ vựng hội thoại | 51720bcb5e63ffef
    {
      japanese: "よろしくお伝えください",
      kana: "よろしくおつたえください",
      vietnamese: "Cho tôi gửi lời hỏi thăm.",
      english: "Cho tôi gửi lời hỏi thăm.",
      type: "supplementary",
      example: "お母様によろしくお伝えください。\nOkaasama ni yoroshiku otsutae kudasai.\nCho tôi gửi lời hỏi thăm mẹ anh/chị."
    },
    // source: review_tu_vung_bai_49.md | 3. Từ vựng hội thoại | f28f9a032cf919fa
    {
      japanese: "失礼いたします",
      kana: "しつれいいたします",
      vietnamese: "Xin phép, tôi xin thất lễ",
      english: "Xin phép, tôi xin thất lễ",
      type: "supplementary",
      example: "では、失礼いたします。\nDewa, shitsurei itashimasu.\nVậy tôi xin phép ạ."
    },
    // source: review_tu_vung_bai_49.md | 3. Từ vựng hội thoại | 70f6181ab49ecbfe
    {
      japanese: "ひまわり小学校",
      kana: "ひまわりしょうがっこう",
      vietnamese: "Trường tiểu học Himawari",
      english: "Trường tiểu học Himawari",
      type: "supplementary",
      example: "ひまわり小学校に通っています。\nHimawari Shougakkou ni kayotte imasu.\nTôi đang học ở Trường Tiểu học Himawari."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 59d90a38a4737403
    {
      japanese: "経歴",
      kana: "けいれき",
      vietnamese: "lý lịch, quá trình học/làm",
      english: "lý lịch, quá trình học/làm",
      type: "supplementary",
      example: "経歴を紹介します。\nKeireki o shoukai shimasu.\nTôi giới thiệu lý lịch."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | da2d4c7f50536532
    {
      japanese: "医学部",
      kana: "いがくぶ",
      vietnamese: "khoa y",
      english: "khoa y",
      type: "supplementary",
      example: "医学部で勉強しています。\nIgakubu de benkyou shite imasu.\nTôi đang học ở khoa y."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 6d2c9afa5c42bfaa
    {
      japanese: "目指します",
      kana: "めざします",
      vietnamese: "hướng đến, đặt mục tiêu trở thành",
      english: "hướng đến, đặt mục tiêu trở thành",
      type: "supplementary",
      example: "医者を目指しています。\nIsha o mezashite imasu.\nTôi đang hướng tới mục tiêu trở thành bác sĩ."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 2d207152ced44ce2
    {
      japanese: "進みます",
      kana: "すすみます",
      vietnamese: "tiến lên, học lên",
      english: "tiến lên, học lên",
      type: "supplementary",
      example: "大学院に進みます。\nDaigakuin ni susumimasu.\nTôi học tiếp lên cao học."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 4fe5e0cf2b04e7b6
    {
      japanese: "iPS細胞",
      kana: "iPSさいぼう",
      vietnamese: "tế bào iPS",
      english: "tế bào iPS",
      type: "supplementary",
      example: "iPS細胞を研究します。\niPS saibou o kenkyuu shimasu.\nTôi nghiên cứu tế bào iPS."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 8be072d41b5ceacb
    {
      japanese: "開発します",
      kana: "かいはつします",
      vietnamese: "phát triển, khai phát",
      english: "phát triển, khai phát",
      type: "supplementary",
      example: "新しい薬を開発します。\nAtarashii kusuri o kaihatsu shimasu.\nPhát triển thuốc mới."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 153de527190d245d
    {
      japanese: "マウス",
      kana: "マウス",
      vietnamese: "chuột thí nghiệm",
      english: "chuột thí nghiệm",
      type: "supplementary",
      example: "マウスで実験します。\nMausu de jikken shimasu.\nLàm thí nghiệm trên chuột."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | dc3b14fe2e61ee84
    {
      japanese: "ヒト",
      kana: "ヒト",
      vietnamese: "người, con người",
      english: "người, con người",
      type: "supplementary",
      example: "ヒトの細胞を使います。\nHito no saibou o tsukaimasu.\nSử dụng tế bào người."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | eeeffc0175009412
    {
      japanese: "受賞します",
      kana: "じゅしょうします",
      vietnamese: "nhận giải thưởng",
      english: "nhận giải thưởng",
      type: "supplementary",
      example: "ノーベル賞を受賞しました。\nNooberu-shou o jushou shimashita.\nĐã nhận giải Nobel."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | fc89a44405efe058
    {
      japanese: "講演会",
      kana: "こうえんかい",
      vietnamese: "buổi diễn thuyết, buổi nói chuyện",
      english: "buổi diễn thuyết, buổi nói chuyện",
      type: "supplementary",
      example: "講演会に参加します。\nKouenkai ni sanka shimasu.\nTôi tham gia buổi nói chuyện."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | b82a08d74e115cde
    {
      japanese: "山中伸弥",
      kana: "やまなかしんや",
      vietnamese: "Yamanaka Shinya",
      english: "Yamanaka Shinya",
      type: "supplementary",
      example: "山中伸弥先生は研究者です。\nYamanaka Shin’ya sensei wa kenkyuusha desu.\nGiáo sư Yamanaka Shinya là nhà nghiên cứu."
    },
    // source: review_tu_vung_bai_49.md | 4. Từ vựng bài đọc | 7599e6d5d4ff0173
    {
      japanese: "ノーベル賞",
      kana: "ノーベルしょう",
      vietnamese: "giải Nobel",
      english: "giải Nobel",
      type: "supplementary",
      example: "ノーベル賞をもらいました。\nNooberu-shou o moraimashita.\nĐã nhận giải Nobel."
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | de64e83743fe8f5e
    {
      japanese: "会社に勤めます",
      kana: "会社に勤めます",
      vietnamese: "làm việc ở công ty",
      english: "làm việc ở công ty",
      type: "supplementary",
      example: "Dùng trợ từ に / ni"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | 8bbd5d7758d4af57
    {
      japanese: "いすに掛けます",
      kana: "いすに掛けます",
      vietnamese: "ngồi vào ghế",
      english: "ngồi vào ghế",
      type: "supplementary",
      example: "Cách nói lịch sự/trang trọng hơn 座ります"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | a815f785b795dbbb
    {
      japanese: "時間を過ごします",
      kana: "時間を過ごします",
      vietnamese: "trải qua thời gian",
      english: "trải qua thời gian",
      type: "supplementary",
      example: "Hay dùng với cuối tuần, kỳ nghỉ"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | c3dbeeddfcfbd966
    {
      japanese: "熱を出します",
      kana: "熱を出します",
      vietnamese: "bị sốt",
      english: "bị sốt",
      type: "supplementary",
      example: "Không dịch là “đưa sốt ra”"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | 14b6b8294822dd83
    {
      japanese: "よろしくお伝えください",
      kana: "よろしくお伝えください",
      vietnamese: "cho tôi gửi lời hỏi thăm",
      english: "cho tôi gửi lời hỏi thăm",
      type: "supplementary",
      example: "Câu lịch sự khi nhờ chuyển lời"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | ad99a692ffc9ad8f
    {
      japanese: "失礼いたします",
      kana: "失礼いたします",
      vietnamese: "tôi xin phép",
      english: "tôi xin phép",
      type: "supplementary",
      example: "Hay dùng khi kết thúc cuộc gọi, rời đi"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | 7e1e6102c4ac4947
    {
      japanese: "医者を目指します",
      kana: "医者を目指します",
      vietnamese: "hướng tới mục tiêu làm bác sĩ",
      english: "hướng tới mục tiêu làm bác sĩ",
      type: "supplementary",
      example: "Dùng を với mục tiêu"
    },
    // source: review_tu_vung_bai_49.md | 5. Cụm cần nhớ trong bài 49 | 13cce03994eff0a8
    {
      japanese: "大学院に進みます",
      kana: "大学院に進みます",
      vietnamese: "học tiếp lên cao học",
      english: "học tiếp lên cao học",
      type: "supplementary",
      example: "Dùng に chỉ hướng/đích đến"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 9aa02ddb946daa34
    {
      japanese: "利",
      kana: "リ / ri",
      vietnamese: "Lợi — lợi ích, có ích",
      english: "lợi ích, có ích",
      type: "kanji",
      example: "利用 / riyou"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | d0b4eede785debb0
    {
      japanese: "用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — dùng, việc cần làm",
      english: "dùng, việc cần làm",
      type: "kanji",
      example: "利用 / riyou"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 746d9915645d6382
    {
      japanese: "会",
      kana: "カイ / kai",
      vietnamese: "Hội — gặp, hội, công ty",
      english: "gặp, hội, công ty",
      type: "kanji",
      example: "会社 / kaisha, 講演会 / kouenkai"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | a5e1096d58be0b66
    {
      japanese: "社",
      kana: "シャ / sha",
      vietnamese: "Xã — công ty, xã hội",
      english: "công ty, xã hội",
      type: "kanji",
      example: "会社 / kaisha"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | a4bdec1f3fe9c74c
    {
      japanese: "上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — trên, lên",
      english: "trên, lên",
      type: "kanji",
      example: "召し上がります / meshiagarimasu"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 5d46cc3ee6e4f506
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra, đưa ra",
      english: "ra, đưa ra",
      type: "kanji",
      example: "出します / dashimasu"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 38193950543f95e2
    {
      japanese: "年",
      kana: "ネン / nen",
      vietnamese: "Niên — năm",
      english: "năm",
      type: "kanji",
      example: "一年組 / ichinen-gumi"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 217450aea00eb9e9
    {
      japanese: "小",
      kana: "ショウ / shou",
      vietnamese: "Tiểu — nhỏ",
      english: "nhỏ",
      type: "kanji",
      example: "小学校 / shougakkou"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 809b0acf26555d9b
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "小学校 / shougakkou, 医学部 / igakubu"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 16dda3f4b6eef8ea
    {
      japanese: "校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — trường học",
      english: "trường học",
      type: "kanji",
      example: "小学校 / shougakkou"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 9a92da4826758f80
    {
      japanese: "目",
      kana: "モク / moku",
      vietnamese: "Mục — mắt, mục tiêu",
      english: "mắt, mục tiêu",
      type: "kanji",
      example: "目指します / mezashimasu"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 932266649290b44e
    {
      japanese: "開",
      kana: "カイ / kai",
      vietnamese: "Khai — mở, khai mở",
      english: "mở, khai mở",
      type: "kanji",
      example: "開発 / kaihatsu"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 8eb66539fda4adf7
    {
      japanese: "発",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — phát ra, phát triển",
      english: "phát ra, phát triển",
      type: "kanji",
      example: "開発 / kaihatsu"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | f441256afb161f24
    {
      japanese: "受",
      kana: "ジュ / ju",
      vietnamese: "Thụ — nhận",
      english: "nhận",
      type: "kanji",
      example: "受賞 / jushou"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | aa97e2297f76a9ab
    {
      japanese: "山",
      kana: "サン / san",
      vietnamese: "Sơn — núi",
      english: "núi",
      type: "kanji",
      example: "山中伸弥 / Yamanaka Shin’ya"
    },
    // source: review_tu_vung_bai_49.md | 6. Kanji N5–N4 cần học kỹ | 481005be0ea4dbe4
    {
      japanese: "中",
      kana: "チュウ / chuu",
      vietnamese: "Trung — trong, giữa",
      english: "trong, giữa",
      type: "kanji",
      example: "山中伸弥 / Yamanaka Shin’ya"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 61152d2b62dfa2ee
    {
      japanese: "利用",
      kana: "リ / ri",
      vietnamese: "Lợi — 利 = lợi ích; 用 = dùng",
      english: "利 = lợi ích; 用 = dùng",
      type: "kanji",
      example: "利用"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a0cc10718144a493
    {
      japanese: "便利",
      kana: "リ / ri",
      vietnamese: "Lợi — 便 = tiện; 利 = lợi",
      english: "便 = tiện; 利 = lợi",
      type: "kanji",
      example: "便利"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4edd52278fb542fa
    {
      japanese: "用事",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 用 = dùng, việc cần làm",
      english: "用 = dùng, việc cần làm",
      type: "kanji",
      example: "用事"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 24cbba959f50eade
    {
      japanese: "利用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 利 = lợi; 用 = dùng",
      english: "利 = lợi; 用 = dùng",
      type: "kanji",
      example: "利用"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3c4d270ca2012426
    {
      japanese: "会う",
      kana: "あ.う / au",
      vietnamese: "Hội — 会 = gặp",
      english: "会 = gặp",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 44f447d04d29c4fe
    {
      japanese: "会社",
      kana: "カイ / kai",
      vietnamese: "Hội — 会 = hội; 社 = công ty",
      english: "会 = hội; 社 = công ty",
      type: "kanji",
      example: "会社"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 110b7afc00bd0e25
    {
      japanese: "講演会",
      kana: "カイ / kai",
      vietnamese: "Hội — 講 = giảng; 演 = diễn thuyết; 会 = buổi hội",
      english: "講 = giảng; 演 = diễn thuyết; 会 = buổi hội",
      type: "kanji",
      example: "講演会"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 05c0876c88392d52
    {
      japanese: "会社",
      kana: "シャ / sha",
      vietnamese: "Xã — 会 = hội; 社 = công ty",
      english: "会 = hội; 社 = công ty",
      type: "kanji",
      example: "会社"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 493214cf83533811
    {
      japanese: "社長",
      kana: "シャ / sha",
      vietnamese: "Xã — 社 = công ty; 長 = người đứng đầu",
      english: "社 = công ty; 長 = người đứng đầu",
      type: "kanji",
      example: "社長"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 017b2314113bb85a
    {
      japanese: "上",
      kana: "うえ / ue",
      vietnamese: "Thượng — 上 = trên",
      english: "上 = trên",
      type: "kanji",
      example: "上"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3444888824c3adf7
    {
      japanese: "上手",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — 上 = lên, phía trên; 手 = tay/kỹ năng",
      english: "上 = lên, phía trên; 手 = tay/kỹ năng",
      type: "kanji",
      example: "上手"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1834797b0c938300
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f10669c80d09df4f
    {
      japanese: "出す",
      kana: "だ.す / dasu",
      vietnamese: "Xuất — 出 = đưa ra",
      english: "出 = đưa ra",
      type: "kanji",
      example: "出す"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4b451ac23093fbc5
    {
      japanese: "一年組",
      kana: "ネン / nen",
      vietnamese: "Niên — 年 = năm; 組 = nhóm/lớp",
      english: "年 = năm; 組 = nhóm/lớp",
      type: "kanji",
      example: "一年組"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 69e2af199121ecc9
    {
      japanese: "来年",
      kana: "ネン / nen",
      vietnamese: "Niên — 来 = tới; 年 = năm",
      english: "来 = tới; 年 = năm",
      type: "kanji",
      example: "来年"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 41b9459a77248d4f
    {
      japanese: "小学校",
      kana: "ショウ / shou",
      vietnamese: "Tiểu — 小 = nhỏ; 学 = học; 校 = trường",
      english: "小 = nhỏ; 学 = học; 校 = trường",
      type: "kanji",
      example: "小学校"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 077837aa7e97c55d
    {
      japanese: "小さい",
      kana: "ちい.さい / chiisai",
      vietnamese: "Tiểu — 小 = nhỏ",
      english: "小 = nhỏ",
      type: "kanji",
      example: "小さい"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b9a5ef6e42254bc8
    {
      japanese: "学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9799c85406bce151
    {
      japanese: "小学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 小 = nhỏ; 学 = học; 校 = trường",
      english: "小 = nhỏ; 学 = học; 校 = trường",
      type: "kanji",
      example: "小学校"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f652f14cbd383ff5
    {
      japanese: "学ぶ",
      kana: "まな.ぶ / manabu",
      vietnamese: "Học — 学 = học",
      english: "学 = học",
      type: "kanji",
      example: "学ぶ"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8496db387a5881a4
    {
      japanese: "学校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1b26879028dcf206
    {
      japanese: "小学校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — 小 = nhỏ; 学 = học; 校 = trường",
      english: "小 = nhỏ; 学 = học; 校 = trường",
      type: "kanji",
      example: "小学校"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 547457fc6c14e5d5
    {
      japanese: "目",
      kana: "め / me",
      vietnamese: "Mục — 目 = mắt",
      english: "目 = mắt",
      type: "kanji",
      example: "目"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | de4a5aebbdd5599a
    {
      japanese: "目指す",
      kana: "め / me",
      vietnamese: "Mục — 目 = mục tiêu; 指 = chỉ/hướng",
      english: "目 = mục tiêu; 指 = chỉ/hướng",
      type: "kanji",
      example: "目指す"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 728d96b913a24bf6
    {
      japanese: "開発",
      kana: "カイ / kai",
      vietnamese: "Khai — 開 = mở; 発 = phát triển",
      english: "開 = mở; 発 = phát triển",
      type: "kanji",
      example: "開発"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0d022d2bbe4cb1f5
    {
      japanese: "開ける",
      kana: "あ.ける / akeru",
      vietnamese: "Khai — 開 = mở",
      english: "開 = mở",
      type: "kanji",
      example: "開ける"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b99972456e44322c
    {
      japanese: "開発",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 開 = mở; 発 = phát triển",
      english: "開 = mở; 発 = phát triển",
      type: "kanji",
      example: "開発"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6b5dbbceef5d6fdc
    {
      japanese: "出発",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 出 = ra; 発 = khởi hành",
      english: "出 = ra; 発 = khởi hành",
      type: "kanji",
      example: "出発"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 2292d015a939a75c
    {
      japanese: "受賞",
      kana: "ジュ / ju",
      vietnamese: "Thụ — 受 = nhận; 賞 = giải thưởng",
      english: "受 = nhận; 賞 = giải thưởng",
      type: "kanji",
      example: "受賞"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b408c9bafceb9c78
    {
      japanese: "受ける",
      kana: "う.ける / ukeru",
      vietnamese: "Thụ — 受 = nhận",
      english: "受 = nhận",
      type: "kanji",
      example: "受ける"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6c59776a3a5f9f50
    {
      japanese: "山",
      kana: "やま / yama",
      vietnamese: "Sơn — 山 = núi",
      english: "山 = núi",
      type: "kanji",
      example: "山"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bd13a6e3667f6c53
    {
      japanese: "火山",
      kana: "サン / san",
      vietnamese: "Sơn — 火 = lửa; 山 = núi",
      english: "火 = lửa; 山 = núi",
      type: "kanji",
      example: "火山"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4a9b6f276ff62389
    {
      japanese: "中",
      kana: "なか / naka",
      vietnamese: "Trung — 中 = trong, giữa",
      english: "中 = trong, giữa",
      type: "kanji",
      example: "中"
    },
    // source: review_tu_vung_bai_49.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b7e59c4739081029
    {
      japanese: "山中",
      kana: "なか / naka",
      vietnamese: "Trung — 山 = núi; 中 = trong/giữa",
      english: "山 = núi; 中 = trong/giữa",
      type: "kanji",
      example: "山中"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～てから',
      vietnamese: 'sau khi...',
      english: 'after doing...',
      type: 'main',
      explanation: 'Biểu thị trình tự hành động: làm A xong rồi mới làm B. Cấu trúc: động từ て-form + から.',
      examples: [
        {
          japanese: '朝ご飯を食べてから、学校に行きます。',
          vietnamese: 'Sau khi ăn sáng, tôi đi học.',
          english: 'After eating breakfast, I go to school.',
          type: 'main'
        },
        {
          japanese: '手を洗ってから、食事をします。',
          vietnamese: 'Sau khi rửa tay, tôi ăn cơm.',
          english: 'After washing my hands, I eat.',
          type: 'main'
        },
        {
          japanese: '宿題をしてから、遊びます。',
          vietnamese: 'Sau khi làm bài tập, tôi chơi.',
          english: 'After doing homework, I play.',
          type: 'main'
        },
        {
          japanese: '日本に来てから、3年になります。',
          vietnamese: 'Đã 3 năm kể từ khi đến Nhật.',
          english: 'It\'s been 3 years since I came to Japan.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～た後で',
      vietnamese: 'sau khi...',
      english: 'after...',
      type: 'main',
      explanation: 'Biểu thị thời gian sau khi hoàn thành hành động. Tương tự ～てから nhưng nhấn mạnh thời điểm hơn. Cấu trúc: động từ た-form + 後で.',
      examples: [
        {
          japanese: '授業が終わった後で、買い物に行きます。',
          vietnamese: 'Sau khi kết thúc lớp học, tôi đi mua sắm.',
          english: 'After class ends, I go shopping.',
          type: 'main'
        },
        {
          japanese: '映画を見た後で、食事をしました。',
          vietnamese: 'Sau khi xem phim, tôi đã ăn cơm.',
          english: 'After watching the movie, I ate.',
          type: 'main'
        },
        {
          japanese: '仕事が終わった後で、連絡します。',
          vietnamese: 'Sau khi xong việc, tôi sẽ liên lạc.',
          english: 'After I finish work, I\'ll contact you.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～前に',
      vietnamese: 'trước khi...',
      english: 'before...',
      type: 'main',
      explanation: 'Biểu thị thời gian trước khi làm việc gì. Cấu trúc: động từ từ điển-form + 前に hoặc danh từ + の前に.',
      examples: [
        {
          japanese: '寝る前に、歯を磨きます。',
          vietnamese: 'Trước khi ngủ, tôi đánh răng.',
          english: 'Before sleeping, I brush my teeth.',
          type: 'main'
        },
        {
          japanese: '出かける前に、天気を確認します。',
          vietnamese: 'Trước khi ra ngoài, tôi kiểm tra thời tiết.',
          english: 'Before going out, I check the weather.',
          type: 'main'
        },
        {
          japanese: '試験の前に、復習しました。',
          vietnamese: 'Trước kỳ thi, tôi đã ôn tập.',
          english: 'Before the exam, I reviewed.',
          type: 'main'
        },
        {
          japanese: '日本へ来る前に、日本語を勉強しました。',
          vietnamese: 'Trước khi đến Nhật, tôi đã học tiếng Nhật.',
          english: 'Before coming to Japan, I studied Japanese.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ながら',
      vietnamese: 'trong khi...',
      english: 'while...',
      type: 'main',
      explanation: 'Biểu thị hai hành động xảy ra đồng thời. Cấu trúc: động từ dạng masu (bỏ ます) + ながら. Hành động chính ở sau ながら.',
      examples: [
        {
          japanese: '音楽を聞きながら、勉強します。',
          vietnamese: 'Tôi học trong khi nghe nhạc.',
          english: 'I study while listening to music.',
          type: 'main'
        },
        {
          japanese: 'コーヒーを飲みながら、話しましょう。',
          vietnamese: 'Hãy nói chuyện trong khi uống cà phê.',
          english: 'Let\'s talk while drinking coffee.',
          type: 'main'
        },
        {
          japanese: '歩きながら、電話で話しています。',
          vietnamese: 'Tôi đang nói chuyện điện thoại trong khi đi bộ.',
          english: 'I\'m talking on the phone while walking.',
          type: 'main'
        },
        {
          japanese: 'テレビを見ながら、夕食を食べました。',
          vietnamese: 'Tôi đã ăn tối trong khi xem TV.',
          english: 'I ate dinner while watching TV.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～間に',
      vietnamese: 'trong khi..., trong lúc...',
      english: 'while/during...',
      type: 'main',
      explanation: 'Biểu thị khoảng thời gian xảy ra hành động. Cấu trúc: động từ て-form + いる + 間に hoặc danh từ + の間に.',
      examples: [
        {
          japanese: '寝ている間に、雨が降りました。',
          vietnamese: 'Trong khi tôi ngủ, trời đã mưa.',
          english: 'While I was sleeping, it rained.',
          type: 'main'
        },
        {
          japanese: '留守の間に、友達が来ました。',
          vietnamese: 'Trong lúc tôi vắng nhà, bạn tôi đã đến.',
          english: 'While I was away, my friend came.',
          type: 'main'
        },
        {
          japanese: '夏休みの間に、旅行します。',
          vietnamese: 'Trong kỳ nghỉ hè, tôi sẽ đi du lịch.',
          english: 'During summer vacation, I will travel.',
          type: 'main'
        },
        {
          japanese: '若い間に、色々経験したいです。',
          vietnamese: 'Trong khi còn trẻ, tôi muốn trải nghiệm nhiều thứ.',
          english: 'While I\'m young, I want to experience various things.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～うちに',
      vietnamese: 'trong khi, trước khi (quá muộn)',
      english: 'while/before it\'s too late',
      type: 'main',
      explanation: 'Biểu thị làm gì đó trong khi tình trạng còn như vậy, hoặc trước khi thay đổi. Cấu trúc: 普通形 + うちに (ない-form + うちに cho phủ định).',
      examples: [
        {
          japanese: '暖かいうちに、食べてください。',
          vietnamese: 'Hãy ăn trong khi còn nóng.',
          english: 'Please eat it while it\'s warm.',
          type: 'main'
        },
        {
          japanese: '忘れないうちに、メモしました。',
          vietnamese: 'Tôi đã ghi chú trước khi quên.',
          english: 'I took notes before I forgot.',
          type: 'main'
        },
        {
          japanese: '若いうちに、色々勉強したいです。',
          vietnamese: 'Tôi muốn học nhiều thứ trong khi còn trẻ.',
          english: 'I want to study various things while I\'m young.',
          type: 'main'
        },
        {
          japanese: '雨が降らないうちに、帰りましょう。',
          vietnamese: 'Hãy về trước khi trời mưa.',
          english: 'Let\'s go home before it rains.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～とき',
      vietnamese: 'khi...',
      english: 'when...',
      type: 'main',
      explanation: 'Biểu thị thời điểm xảy ra hành động. Cấu trúc: 普通形 + とき. Dùng る-form (chưa xảy ra) hoặc た-form (đã xảy ra).',
      examples: [
        {
          japanese: '日本に行くとき、カメラを持って行きます。',
          vietnamese: 'Khi đi Nhật, tôi sẽ mang máy ảnh.',
          english: 'When I go to Japan, I\'ll bring a camera.',
          type: 'main'
        },
        {
          japanese: '家に帰ったとき、電話してください。',
          vietnamese: 'Khi về đến nhà, hãy gọi điện.',
          english: 'When you get home, please call.',
          type: 'main'
        },
        {
          japanese: '暇なとき、遊びに来てください。',
          vietnamese: 'Khi rảnh, hãy đến chơi.',
          english: 'When you\'re free, please come visit.',
          type: 'main'
        },
        {
          japanese: '子供のとき、よくここで遊びました。',
          vietnamese: 'Khi còn nhỏ, tôi thường chơi ở đây.',
          english: 'When I was a child, I often played here.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～たばかり',
      vietnamese: 'vừa mới...',
      english: 'just did...',
      type: 'additional',
      explanation: 'Biểu thị hành động vừa mới hoàn thành. Cấu trúc: động từ た-form + ばかり.',
      examples: [
        {
          japanese: '今起きたばかりです。',
          vietnamese: 'Tôi vừa mới thức dậy.',
          english: 'I just woke up.',
          type: 'main'
        },
        {
          japanese: '日本に来たばかりで、まだ慣れていません。',
          vietnamese: 'Tôi vừa mới đến Nhật nên chưa quen.',
          english: 'I just came to Japan, so I\'m not used to it yet.',
          type: 'main'
        },
        {
          japanese: '卒業したばかりです。',
          vietnamese: 'Tôi vừa mới tốt nghiệp.',
          english: 'I just graduated.',
          type: 'additional'
        }
      ]
    }
  ]
};
