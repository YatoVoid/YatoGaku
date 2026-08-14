/**
 * N4 Core Lessons — Lesson 13: Volitional Form and Intentions
 * Expressing will, intentions, and suggestions
 */

import type { LessonData } from '$lib/types';

export const LESSON_13_DATA: LessonData = {
  lessonNumber: 13,
  title: '意向形 (Volitional Form)',
  vocabulary: [
    // Future plans and intentions
    {
      japanese: 'つもり',
      kana: 'つもり',
      vietnamese: 'định, dự định',
      english: 'intention, plan',
      type: 'main',
      example: '明日行くつもりです。'
    },
    {
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'kế hoạch, dự định',
      english: 'plan, schedule',
      type: 'main',
      example: '明日の予定は何ですか。'
    },
    {
      japanese: '計画',
      kana: 'けいかく',
      vietnamese: 'kế hoạch',
      english: 'plan, project',
      type: 'main',
      example: '旅行の計画を立てます。'
    },
    {
      japanese: '予約',
      kana: 'よやく',
      vietnamese: 'đặt trước',
      english: 'reservation, booking',
      type: 'main',
      example: 'レストランを予約します。'
    },
    {
      japanese: '準備',
      kana: 'じゅんび',
      vietnamese: 'chuẩn bị',
      english: 'preparation',
      type: 'main',
      example: '旅行の準備をします。'
    },
    {
      japanese: '支度',
      kana: 'したく',
      vietnamese: 'chuẩn bị, sửa soạn',
      english: 'preparation, arrangement',
      type: 'main',
      example: '出かける支度をします。'
    },

    // Decisions and choices
    {
      japanese: '決める',
      kana: 'きめる',
      vietnamese: 'quyết định',
      english: 'to decide',
      type: 'main',
      example: '行くことに決めました。'
    },
    {
      japanese: '決まる',
      kana: 'きまる',
      vietnamese: 'được quyết định',
      english: 'to be decided',
      type: 'main',
      example: '日程が決まりました。'
    },
    {
      japanese: '選ぶ',
      kana: 'えらぶ',
      vietnamese: 'chọn',
      english: 'to choose, to select',
      type: 'main',
      example: 'これを選びます。'
    },
    {
      japanese: '迷う',
      kana: 'まよう',
      vietnamese: 'do dự, phân vân',
      english: 'to hesitate, to be confused',
      type: 'main',
      example: 'どちらにするか迷っています。'
    },
    {
      japanese: '考える',
      kana: 'かんがえる',
      vietnamese: 'suy nghĩ',
      english: 'to think, to consider',
      type: 'main',
      example: '少し考えます。'
    },

    // Suggestions and invitations
    {
      japanese: '誘う',
      kana: 'さそう',
      vietnamese: 'mời, rủ',
      english: 'to invite, to ask',
      type: 'main',
      example: '友達を誘います。'
    },
    {
      japanese: '誘い',
      kana: 'さそい',
      vietnamese: 'lời mời',
      english: 'invitation',
      type: 'main',
      example: '誘いを受けます。'
    },
    {
      japanese: '断る',
      kana: 'ことわる',
      vietnamese: 'từ chối',
      english: 'to refuse, to decline',
      type: 'main',
      example: '誘いを断りました。'
    },
    {
      japanese: '承る',
      kana: 'うけたまわる',
      vietnamese: 'nhận (khiêm tốn)',
      english: 'to receive, to accept (humble)',
      type: 'main',
      example: 'ご注文を承ります。'
    },
    {
      japanese: '相談',
      kana: 'そうだん',
      vietnamese: 'tham khảo, bàn bạc',
      english: 'consultation, discussion',
      type: 'main',
      example: '相談したいことがあります。'
    },

    // Actions and activities
    {
      japanese: '出発',
      kana: 'しゅっぱつ',
      vietnamese: 'xuất phát, khởi hành',
      english: 'departure',
      type: 'main',
      example: '朝7時に出発します。'
    },
    {
      japanese: '到着',
      kana: 'とうちゃく',
      vietnamese: 'đến nơi',
      english: 'arrival',
      type: 'main',
      example: '何時に到着しますか。'
    },
    {
      japanese: '集合',
      kana: 'しゅうごう',
      vietnamese: 'tập hợp',
      english: 'gathering, meeting',
      type: 'main',
      example: '駅で集合しましょう。'
    },
    {
      japanese: '集まる',
      kana: 'あつまる',
      vietnamese: 'tập trung',
      english: 'to gather',
      type: 'main',
      example: 'みんなで集まります。'
    },
    {
      japanese: '会議',
      kana: 'かいぎ',
      vietnamese: 'cuộc họp',
      english: 'meeting, conference',
      type: 'main',
      example: '会議に出席します。'
    },
    {
      japanese: 'ミーティング',
      kana: 'ミーティング',
      vietnamese: 'cuộc họp',
      english: 'meeting',
      type: 'main',
      example: 'ミーティングがあります。'
    },

    // Travel and outings
    {
      japanese: '旅行',
      kana: 'りょこう',
      vietnamese: 'du lịch',
      english: 'travel, trip',
      type: 'main',
      example: '来月旅行に行くつもりです。'
    },
    {
      japanese: '観光',
      kana: 'かんこう',
      vietnamese: 'tham quan',
      english: 'sightseeing',
      type: 'main',
      example: '京都を観光します。'
    },
    {
      japanese: '散歩',
      kana: 'さんぽ',
      vietnamese: 'đi dạo',
      english: 'walk, stroll',
      type: 'main',
      example: '公園を散歩しましょう。'
    },
    {
      japanese: 'ピクニック',
      kana: 'ピクニック',
      vietnamese: 'dã ngoại',
      english: 'picnic',
      type: 'main',
      example: 'ピクニックに行きませんか。'
    },
    {
      japanese: 'ドライブ',
      kana: 'ドライブ',
      vietnamese: 'lái xe đi chơi',
      english: 'drive',
      type: 'main',
      example: 'ドライブに行きましょう。'
    },
    {
      japanese: 'ハイキング',
      kana: 'ハイキング',
      vietnamese: 'đi bộ leo núi',
      english: 'hiking',
      type: 'main',
      example: 'ハイキングに行く予定です。'
    },

    // Weather and seasons
    {
      japanese: '春',
      kana: 'はる',
      vietnamese: 'mùa xuân',
      english: 'spring',
      type: 'main',
      example: '春になったら、花見に行きましょう。'
    },
    {
      japanese: '夏',
      kana: 'なつ',
      vietnamese: 'mùa hè',
      english: 'summer',
      type: 'main',
      example: '夏に海に行くつもりです。'
    },
    {
      japanese: '秋',
      kana: 'あき',
      vietnamese: 'mùa thu',
      english: 'autumn, fall',
      type: 'main',
      example: '秋になったら、紅葉を見に行きます。'
    },
    {
      japanese: '冬',
      kana: 'ふゆ',
      vietnamese: 'mùa đông',
      english: 'winter',
      type: 'main',
      example: '冬にスキーに行きましょう。'
    },
    {
      japanese: '季節',
      kana: 'きせつ',
      vietnamese: 'mùa',
      english: 'season',
      type: 'main',
      example: '好きな季節は何ですか。'
    },

    // Time expressions
    {
      japanese: '今後',
      kana: 'こんご',
      vietnamese: 'từ nay về sau',
      english: 'from now on, hereafter',
      type: 'main',
      example: '今後もよろしくお願いします。'
    },
    {
      japanese: '将来',
      kana: 'しょうらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'main',
      example: '将来の夢は何ですか。'
    },
    {
      japanese: '未来',
      kana: 'みらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'main',
      example: '明るい未来があります。'
    },
    {
      japanese: 'いつか',
      kana: 'いつか',
      vietnamese: 'một ngày nào đó',
      english: 'someday, sometime',
      type: 'main',
      example: 'いつか日本に住みたいです。'
    },
    {
      japanese: 'そのうち',
      kana: 'そのうち',
      vietnamese: 'sớm muộn, rồi sẽ',
      english: 'before long, sooner or later',
      type: 'main',
      example: 'そのうち会いましょう。'
    },
    {
      japanese: 'いずれ',
      kana: 'いずれ',
      vietnamese: 'rồi sẽ, cuối cùng',
      english: 'someday, eventually',
      type: 'main',
      example: 'いずれ分かります。'
    },

    // Additional vocabulary
    {
      japanese: '希望',
      kana: 'きぼう',
      vietnamese: 'hy vọng',
      english: 'hope, wish',
      type: 'additional',
      example: '希望があります。'
    },
    {
      japanese: '願い',
      kana: 'ねがい',
      vietnamese: 'nguyện vọng',
      english: 'wish, desire',
      type: 'additional',
      example: '願いが叶いました。'
    },
    {
      japanese: '夢',
      kana: 'ゆめ',
      vietnamese: 'giấc mơ, ước mơ',
      english: 'dream',
      type: 'additional',
      example: '夢を叶えたいです。'
    },
    {
      japanese: '目標',
      kana: 'もくひょう',
      vietnamese: 'mục tiêu',
      english: 'goal, objective',
      type: 'additional',
      example: '目標に向かって頑張ります。'
    },
    {
      japanese: '目的',
      kana: 'もくてき',
      vietnamese: 'mục đích',
      english: 'purpose, aim',
      type: 'additional',
      example: '旅行の目的は何ですか。'
    },
    {
      japanese: '約束',
      kana: 'やくそく',
      vietnamese: 'lời hứa',
      english: 'promise, appointment',
      type: 'additional',
      example: '約束を守ります。'
    },
    {
      japanese: '用事',
      kana: 'ようじ',
      vietnamese: 'việc bận, công việc',
      english: 'errand, business',
      type: 'additional',
      example: '用事があります。'
    },
    {
      japanese: '都合',
      kana: 'つごう',
      vietnamese: 'sự thuận tiện',
      english: 'convenience, circumstances',
      type: 'additional',
      example: '都合がいいです。'
    },
    {
      japanese: '提案',
      kana: 'ていあん',
      vietnamese: 'đề xuất',
      english: 'proposal, suggestion',
      type: 'additional',
      example: '提案があります。'
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
      japanese: '意志',
      kana: 'いし',
      vietnamese: 'ý chí',
      english: 'will, intention',
      type: 'additional',
      example: '強い意志があります。'
    },
    {
      japanese: '気持ち',
      kana: 'きもち',
      vietnamese: 'tâm trạng, cảm xúc',
      english: 'feeling, mood',
      type: 'additional',
      example: '気持ちが分かります。'
    },
    {
      japanese: '態度',
      kana: 'たいど',
      vietnamese: 'thái độ',
      english: 'attitude',
      type: 'additional',
      example: '前向きな態度です。'
    },
    {
      japanese: '決心',
      kana: 'けっしん',
      vietnamese: 'quyết tâm',
      english: 'determination, resolution',
      type: 'additional',
      example: '決心しました。'
    },
    {
      japanese: '覚悟',
      kana: 'かくご',
      vietnamese: 'quyết tâm, chuẩn bị tinh thần',
      english: 'resolution, preparedness',
      type: 'additional',
      example: '覚悟ができました。'
    },
    {
      japanese: '実現',
      kana: 'じつげん',
      vietnamese: 'thực hiện',
      english: 'realization',
      type: 'additional',
      example: '夢を実現します。'
    },

    // Supplementary
    {
      japanese: '企画',
      kana: 'きかく',
      vietnamese: 'kế hoạch, dự án',
      english: 'plan, project',
      type: 'supplementary',
      example: 'イベントを企画します。'
    },
    {
      japanese: '方針',
      kana: 'ほうしん',
      vietnamese: 'phương châm',
      english: 'policy, course',
      type: 'supplementary',
      example: '新しい方針を決めます。'
    },
    {
      japanese: '作戦',
      kana: 'さくせん',
      vietnamese: 'chiến lược',
      english: 'strategy, tactics',
      type: 'supplementary',
      example: '作戦を立てます。'
    },
    {
      japanese: '段取り',
      kana: 'だんどり',
      vietnamese: 'sắp xếp, chuẩn bị',
      english: 'arrangement, preparation',
      type: 'supplementary',
      example: '段取りを確認します。'
    },
    {
      japanese: '手配',
      kana: 'てはい',
      vietnamese: 'sắp xếp, thu xếp',
      english: 'arrangement, preparation',
      type: 'supplementary',
      example: 'チケットを手配します。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 7f4d7e7c9627e176
    {
      japanese: "参加します",
      kana: "さんかします",
      vietnamese: "tham gia",
      english: "tham gia",
      type: "main",
      example: "旅行に参加します。\nRyokou ni sanka shimasu.\nTôi tham gia chuyến du lịch."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 95fcb9073c44fbf2
    {
      japanese: "育てます",
      kana: "そだてます",
      vietnamese: "nuôi, trồng",
      english: "nuôi, trồng",
      type: "main",
      example: "子どもを育てます。\nKodomo o sodatemasu.\nNuôi con."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 91066097d1dc5467
    {
      japanese: "運びます",
      kana: "はこびます",
      vietnamese: "chở, vận chuyển, mang",
      english: "chở, vận chuyển, mang",
      type: "main",
      example: "荷物を運びます。\nNimotsu o hakobimasu.\nTôi mang hành lý."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 9462abb51c1ac79d
    {
      japanese: "入院します",
      kana: "にゅういんします",
      vietnamese: "nhập viện",
      english: "nhập viện",
      type: "main",
      example: "父は病院に入院しました。\nChichi wa byouin ni nyuuin shimashita.\nBố tôi đã nhập viện."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | cc28a567b8cc9cc5
    {
      japanese: "退院します",
      kana: "たいいんします",
      vietnamese: "xuất viện",
      english: "xuất viện",
      type: "main",
      example: "母は明日退院します。\nHaha wa ashita taiin shimasu.\nMẹ tôi ngày mai xuất viện."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 5be5576b2955c6b3
    {
      japanese: "入れます",
      kana: "いれます",
      vietnamese: "bật, cho vào",
      english: "bật, cho vào",
      type: "main",
      example: "電源を入れます。\nDengen o iremasu.\nTôi bật nguồn điện."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 1de7059cb2501a81
    {
      japanese: "切ります",
      kana: "きります",
      vietnamese: "tắt, cắt",
      english: "tắt, cắt",
      type: "main",
      example: "電源を切ります。\nDengen o kirimasu.\nTôi tắt nguồn điện."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 7a40bd9cb497b713
    {
      japanese: "掛けます",
      kana: "かけます",
      vietnamese: "khóa, treo, gọi điện",
      english: "khóa, treo, gọi điện",
      type: "main",
      example: "鍵を掛けます。\nKagi o kakemasu.\nTôi khóa cửa/chìa khóa."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 5f9c8cfcec4ada19
    {
      japanese: "つきます",
      kana: "つきます",
      vietnamese: "nói dối, bịa",
      english: "nói dối, bịa",
      type: "main",
      example: "うそをつきます。\nUso o tsukimasu.\nNói dối."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | b93598bc2a6d874a
    {
      japanese: "気持ちがいい",
      kana: "きもちがいい",
      vietnamese: "dễ chịu, thoải mái",
      english: "dễ chịu, thoải mái",
      type: "main",
      example: "温泉は気持ちがいいです。\nOnsen wa kimochi ga ii desu.\nTắm suối nước nóng rất dễ chịu."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | b83ff7f39349841c
    {
      japanese: "気持ちが悪い",
      kana: "きもちがわるい",
      vietnamese: "khó chịu, buồn nôn",
      english: "khó chịu, buồn nôn",
      type: "main",
      example: "車に乗ると気持ちが悪くなります。\nKuruma ni noru to kimochi ga waruku narimasu.\nĐi ô tô thì tôi thấy khó chịu/buồn nôn."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 8c560c7741782d9f
    {
      japanese: "大きな～",
      kana: "おおきな～",
      vietnamese: "~ to, lớn",
      english: "~ to, lớn",
      type: "main",
      example: "大きな家に住みたいです。\nOokina ie ni sumitai desu.\nTôi muốn sống trong một ngôi nhà lớn."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 59233f2728c28575
    {
      japanese: "小さな～",
      kana: "ちいさな～",
      vietnamese: "~ nhỏ, bé",
      english: "~ nhỏ, bé",
      type: "main",
      example: "小さな子どもがいます。\nChiisana kodomo ga imasu.\nCó một đứa trẻ nhỏ."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 67eb0c4b373b430c
    {
      japanese: "赤ちゃん",
      kana: "あかちゃん",
      vietnamese: "em bé",
      english: "em bé",
      type: "main",
      example: "赤ちゃんが寝ています。\nAkachan ga nete imasu.\nEm bé đang ngủ."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 85c470880b224ab9
    {
      japanese: "小学校",
      kana: "しょうがっこう",
      vietnamese: "trường tiểu học",
      english: "trường tiểu học",
      type: "main",
      example: "小学校で勉強します。\nShougakkou de benkyou shimasu.\nHọc ở trường tiểu học."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 3cba28fe1162d3b9
    {
      japanese: "中学校",
      kana: "ちゅうがっこう",
      vietnamese: "trường trung học cơ sở",
      english: "trường trung học cơ sở",
      type: "main",
      example: "妹は中学校に通っています。\nImouto wa chuugakkou ni kayotte imasu.\nEm gái tôi đang học cấp hai."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 10c3f930bf089120
    {
      japanese: "駅前",
      kana: "えきまえ",
      vietnamese: "khu vực trước nhà ga",
      english: "khu vực trước nhà ga",
      type: "main",
      example: "駅前で会いましょう。\nEkimae de aimashou.\nGặp nhau trước ga nhé."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 65b8bd7b1fed6d17
    {
      japanese: "海岸",
      kana: "かいがん",
      vietnamese: "bờ biển",
      english: "bờ biển",
      type: "main",
      example: "海岸を散歩します。\nKaigan o sanpo shimasu.\nTôi đi dạo ở bờ biển."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | eb5f476240d45d0d
    {
      japanese: "工場",
      kana: "こうじょう",
      vietnamese: "nhà máy",
      english: "nhà máy",
      type: "main",
      example: "工場で働いています。\nKoujou de hataraite imasu.\nTôi đang làm việc ở nhà máy."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 6bee32536063ce1a
    {
      japanese: "村",
      kana: "むら",
      vietnamese: "làng",
      english: "làng",
      type: "main",
      example: "小さな村に住んでいます。\nChiisana mura ni sunde imasu.\nTôi sống ở một ngôi làng nhỏ."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 39d7492b58225656
    {
      japanese: "かな",
      kana: "かな",
      vietnamese: "chữ Kana",
      english: "chữ Kana",
      type: "main",
      example: "かなで書いてください。\nKana de kaite kudasai.\nHãy viết bằng Kana."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 9051ebd9216ffdb9
    {
      japanese: "指輪",
      kana: "ゆびわ",
      vietnamese: "nhẫn",
      english: "nhẫn",
      type: "main",
      example: "指輪を買いました。\nYubiwa o kaimashita.\nTôi đã mua nhẫn."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 360350bfcd819c0a
    {
      japanese: "電源",
      kana: "でんげん",
      vietnamese: "nguồn điện, công tắc điện",
      english: "nguồn điện, công tắc điện",
      type: "main",
      example: "電源を入れてください。\nDengen o irete kudasai.\nHãy bật nguồn điện."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 65bb6c04b5a0ffea
    {
      japanese: "習慣",
      kana: "しゅうかん",
      vietnamese: "tập quán, thói quen",
      english: "tập quán, thói quen",
      type: "main",
      example: "早く寝る習慣があります。\nHayaku neru shuukan ga arimasu.\nTôi có thói quen ngủ sớm."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 3d0a01cdba5924d6
    {
      japanese: "健康",
      kana: "けんこう",
      vietnamese: "sức khỏe",
      english: "sức khỏe",
      type: "main",
      example: "健康に気をつけます。\nKenkou ni ki o tsukemasu.\nTôi chú ý đến sức khỏe."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | b04138bf978b8d3e
    {
      japanese: "～製",
      kana: "～せい",
      vietnamese: "hàng ~, sản xuất tại ~",
      english: "hàng ~, sản xuất tại ~",
      type: "main",
      example: "日本製のカメラです。\nNihon-sei no kamera desu.\nĐây là máy ảnh sản xuất tại Nhật."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | f9a5ce06a3497784
    {
      japanese: "おととし",
      kana: "おととし",
      vietnamese: "năm kia",
      english: "năm kia",
      type: "main",
      example: "おととし日本へ行きました。\nOtotoshi Nihon e ikimashita.\nNăm kia tôi đã đi Nhật."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | ee9290df4cd8698f
    {
      japanese: "あ、いけない",
      kana: "あ、いけない",
      vietnamese: "Ôi, không được rồi / Ôi trời ơi",
      english: "Ôi, không được rồi / Ôi trời ơi",
      type: "main",
      example: "あ、いけない。財布を忘れました。\nA, ikenai. Saifu o wasuremashita.\nÔi không, tôi quên ví rồi."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 5fb74547d99fe45f
    {
      japanese: "お先に失礼します",
      kana: "お先に失礼します",
      vietnamese: "Tôi xin phép về trước",
      english: "Tôi xin phép về trước",
      type: "main",
      example: "お先に失礼します。\nOsaki ni shitsurei shimasu.\nTôi xin phép về trước."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 3b9974ab92f1f7e9
    {
      japanese: "原爆ドーム",
      kana: "げんばくドーム",
      vietnamese: "Nhà vòm bom nguyên tử",
      english: "Nhà vòm bom nguyên tử",
      type: "main",
      example: "原爆ドームを見学しました。\nGenbaku Doomu o kengaku shimashita.\nTôi đã tham quan Nhà vòm bom nguyên tử."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | b9fcdf3b3b520d6a
    {
      japanese: "出雲大社",
      kana: "いずもたいしゃ",
      vietnamese: "Đền Izumo Taisha",
      english: "Đền Izumo Taisha",
      type: "main",
      example: "出雲大社へ行きました。\nIzumo Taisha e ikimashita.\nTôi đã đi đền Izumo Taisha."
    },
    // source: review_tu_vung_bai_38.md | 1. Từ vựng chính | 516147019fdde354
    {
      japanese: "チェンマイ",
      kana: "チェンマイ",
      vietnamese: "Chiang Mai, ở Thái Lan",
      english: "Chiang Mai, ở Thái Lan",
      type: "main",
      example: "チェンマイへ旅行に行きます。\nChenmai e ryokou ni ikimasu.\nTôi đi du lịch Chiang Mai."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 6f8694617271e7eb
    {
      japanese: "回覧",
      kana: "かいらん",
      vietnamese: "tập thông báo, văn bản chuyền tay",
      english: "tập thông báo, văn bản chuyền tay",
      type: "supplementary",
      example: "回覧を見ましたか。\nKairan o mimashita ka.\nBạn đã xem tập thông báo chưa?"
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 80dce6229b81215e
    {
      japanese: "研究室",
      kana: "けんきゅうしつ",
      vietnamese: "phòng nghiên cứu",
      english: "phòng nghiên cứu",
      type: "supplementary",
      example: "先生は研究室にいます。\nSensei wa kenkyuushitsu ni imasu.\nThầy/cô ở phòng nghiên cứu."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 0f79b5cdb5c69cd2
    {
      japanese: "きちんと",
      kana: "きちんと",
      vietnamese: "nghiêm chỉnh, hẳn hoi, đúng đắn",
      english: "nghiêm chỉnh, hẳn hoi, đúng đắn",
      type: "supplementary",
      example: "きちんと説明してください。\nKichinto setsumei shite kudasai.\nHãy giải thích cẩn thận/đàng hoàng."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 96c4f28a35c94ae4
    {
      japanese: "整理します",
      kana: "せいりします",
      vietnamese: "sắp xếp, chỉnh lý",
      english: "sắp xếp, chỉnh lý",
      type: "supplementary",
      example: "机の上を整理します。\nTsukue no ue o seiri shimasu.\nTôi sắp xếp lại trên bàn."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | e333428168581795
    {
      japanese: "方法",
      kana: "ほうほう",
      vietnamese: "phương pháp",
      english: "phương pháp",
      type: "supplementary",
      example: "いい方法があります。\nIi houhou ga arimasu.\nCó một phương pháp hay."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 3fb20e14471e9fb0
    {
      japanese: "～という",
      kana: "～という",
      vietnamese: "có tên là ~, gọi là ~",
      english: "có tên là ~, gọi là ~",
      type: "supplementary",
      example: "みんなの学校という本です。\nMinna no gakkou to iu hon desu.\nĐó là cuốn sách tên là “Trường học của mọi người”."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 37c13731d530d6b7
    {
      japanese: "一冊",
      kana: "いっさつ",
      vietnamese: "một cuốn, một quyển",
      english: "một cuốn, một quyển",
      type: "supplementary",
      example: "本を一冊買いました。\nHon o issatsu kaimashita.\nTôi đã mua một cuốn sách."
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 960626c75cf276f1
    {
      japanese: "判子",
      kana: "はんこ",
      vietnamese: "con dấu",
      english: "con dấu",
      type: "supplementary",
      example: "はんこを持っていますか。\nHanko o motte imasu ka.\nBạn có con dấu không?"
    },
    // source: review_tu_vung_bai_38.md | 2. Từ vựng phần hội thoại | 8c400bbbe27e421c
    {
      japanese: "押します",
      kana: "おします",
      vietnamese: "đóng dấu, ấn",
      english: "đóng dấu, ấn",
      type: "supplementary",
      example: "はんこを押します。\nHanko o oshimasu.\nTôi đóng dấu."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | e595698192e8b6fe
    {
      japanese: "双子",
      kana: "ふたご",
      vietnamese: "cặp sinh đôi",
      english: "cặp sinh đôi",
      type: "supplementary",
      example: "彼女たちは双子です。\nKanojo-tachi wa futago desu.\nHọ là chị em sinh đôi."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | df857acb9d1da567
    {
      japanese: "姉妹",
      kana: "しまい",
      vietnamese: "chị em gái",
      english: "chị em gái",
      type: "supplementary",
      example: "私たちは姉妹です。\nWatashi-tachi wa shimai desu.\nChúng tôi là chị em gái."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 6673e9837514d101
    {
      japanese: "5年生",
      kana: "ごねんせい",
      vietnamese: "học sinh năm/lớp 5",
      english: "học sinh năm/lớp 5",
      type: "supplementary",
      example: "妹は5年生です。\nImouto wa go-nensei desu.\nEm gái tôi học lớp 5."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 2d9a0677c4af2c10
    {
      japanese: "似ています",
      kana: "にています",
      vietnamese: "giống",
      english: "giống",
      type: "supplementary",
      example: "姉と妹はよく似ています。\nAne to imouto wa yoku nite imasu.\nChị và em gái rất giống nhau."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 711e1b4e778d0fb9
    {
      japanese: "性格",
      kana: "せいかく",
      vietnamese: "tính cách",
      english: "tính cách",
      type: "supplementary",
      example: "性格が違います。\nSeikaku ga chigaimasu.\nTính cách khác nhau."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 47f3fef9c3a71d79
    {
      japanese: "おとなしい",
      kana: "おとなしい",
      vietnamese: "ngoan ngoãn, trầm tính",
      english: "ngoan ngoãn, trầm tính",
      type: "supplementary",
      example: "彼女はおとなしい人です。\nKanojo wa otonashii hito desu.\nCô ấy là người trầm tính."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 4a0a3f6b9817d593
    {
      japanese: "優しい",
      kana: "やさしい",
      vietnamese: "hiền lành, dịu dàng",
      english: "hiền lành, dịu dàng",
      type: "supplementary",
      example: "姉は優しいです。\nAne wa yasashii desu.\nChị tôi hiền lành."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | b5c16af8d769f571
    {
      japanese: "世話をします",
      kana: "せわをします",
      vietnamese: "chăm sóc, giúp đỡ",
      english: "chăm sóc, giúp đỡ",
      type: "supplementary",
      example: "赤ちゃんの世話をします。\nAkachan no sewa o shimasu.\nChăm sóc em bé."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | b6504f296d909fb1
    {
      japanese: "時間がたちます",
      kana: "じかんがたちます",
      vietnamese: "thời gian trôi đi",
      english: "thời gian trôi đi",
      type: "supplementary",
      example: "時間がたちました。\nJikan ga tachimashita.\nThời gian đã trôi qua."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 6b541c2060af1799
    {
      japanese: "大好きな",
      kana: "だいすきな",
      vietnamese: "rất thích",
      english: "rất thích",
      type: "supplementary",
      example: "大好きな友達です。\nDaisuki na tomodachi desu.\nĐó là người bạn mà tôi rất quý."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 24b39046d9cea59c
    {
      japanese: "一点",
      kana: "いってん",
      vietnamese: "một điểm",
      english: "một điểm",
      type: "supplementary",
      example: "テストで一点取りました。\nTesuto de itten torimashita.\nTôi được một điểm trong bài kiểm tra."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | e6a9992f379d7431
    {
      japanese: "気が強い",
      kana: "きがつよい",
      vietnamese: "tính cách mạnh mẽ, cứng rắn",
      english: "tính cách mạnh mẽ, cứng rắn",
      type: "supplementary",
      example: "妹は気が強いです。\nImouto wa ki ga tsuyoi desu.\nEm gái tôi có tính cách mạnh mẽ."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 4c1284c5ae4fb031
    {
      japanese: "けんかします",
      kana: "けんかします",
      vietnamese: "cãi nhau",
      english: "cãi nhau",
      type: "supplementary",
      example: "兄とけんかしました。\nAni to kenka shimashita.\nTôi đã cãi nhau với anh trai."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 999cda760c394d5d
    {
      japanese: "不思議な",
      kana: "ふしぎな",
      vietnamese: "kỳ lạ, khó hiểu",
      english: "kỳ lạ, khó hiểu",
      type: "supplementary",
      example: "不思議な話です。\nFushigi na hanashi desu.\nĐó là câu chuyện kỳ lạ."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | c5cd2f7e43f29607
    {
      japanese: "年齢",
      kana: "ねんれい",
      vietnamese: "tuổi tác",
      english: "tuổi tác",
      type: "supplementary",
      example: "年齢を聞かないでください。\nNenrei o kikanaide kudasai.\nĐừng hỏi tuổi."
    },
    // source: review_tu_vung_bai_38.md | 3. Từ vựng phần đọc hiểu | 2a1c87b20e49b436
    {
      japanese: "仕方",
      kana: "しかた",
      vietnamese: "cách làm, cách",
      english: "cách làm, cách",
      type: "supplementary",
      example: "いい仕方を教えてください。\nIi shikata o oshiete kudasai.\nHãy chỉ cho tôi cách làm tốt."
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 775260e3de15f1a1
    {
      japanese: "旅行に参加します",
      kana: "旅行に参加します",
      vietnamese: "tham gia chuyến du lịch",
      english: "tham gia chuyến du lịch",
      type: "supplementary",
      example: "Dùng trợ từ に / ni với sự kiện/chuyến đi"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | a1c6b803795a6b69
    {
      japanese: "子どもを育てます",
      kana: "子どもを育てます",
      vietnamese: "nuôi con",
      english: "nuôi con",
      type: "supplementary",
      example: "Dùng を / o với đối tượng được nuôi"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | cca34380a49129f7
    {
      japanese: "荷物を運びます",
      kana: "荷物を運びます",
      vietnamese: "mang/vận chuyển hành lý",
      english: "mang/vận chuyển hành lý",
      type: "supplementary",
      example: "Dùng を / o"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 5a99e57dfe6ee3eb
    {
      japanese: "病院に入院します",
      kana: "病院に入院します",
      vietnamese: "nhập viện",
      english: "nhập viện",
      type: "supplementary",
      example: "Dùng に / ni chỉ nơi đến"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 136388bc3271e043
    {
      japanese: "病院を退院します",
      kana: "病院を退院します",
      vietnamese: "xuất viện",
      english: "xuất viện",
      type: "supplementary",
      example: "Có thể dùng を / o chỉ nơi rời khỏi"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 43301322b88e50d9
    {
      japanese: "電源を入れます",
      kana: "電源を入れます",
      vietnamese: "bật nguồn điện",
      english: "bật nguồn điện",
      type: "supplementary",
      example: "Không dịch từng chữ là “cho nguồn điện vào”"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | a425a073c32bac0a
    {
      japanese: "電源を切ります",
      kana: "電源を切ります",
      vietnamese: "tắt nguồn điện",
      english: "tắt nguồn điện",
      type: "supplementary",
      example: "切ります ở đây là “tắt”"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | ab4dbc8c0d512fa3
    {
      japanese: "鍵を掛けます",
      kana: "鍵を掛けます",
      vietnamese: "khóa cửa/chìa khóa",
      english: "khóa cửa/chìa khóa",
      type: "supplementary",
      example: "掛けます có nhiều nghĩa: treo, gọi điện, khóa"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 8fcb53500a031c29
    {
      japanese: "うそをつきます",
      kana: "うそをつきます",
      vietnamese: "nói dối",
      english: "nói dối",
      type: "supplementary",
      example: "Cụm cố định"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 52f31b3d93eabb1d
    {
      japanese: "はんこを押します",
      kana: "はんこを押します",
      vietnamese: "đóng dấu",
      english: "đóng dấu",
      type: "supplementary",
      example: "押します = ấn, đóng dấu"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | 83c0a88b6d0cc671
    {
      japanese: "世話をします",
      kana: "世話をします",
      vietnamese: "chăm sóc",
      english: "chăm sóc",
      type: "supplementary",
      example: "Hay dùng với trẻ em, người bệnh, thú cưng"
    },
    // source: review_tu_vung_bai_38.md | 4. Cụm cần nhớ trong bài 38 | dd9943154f71a5b6
    {
      japanese: "時間がたちます",
      kana: "時間がたちます",
      vietnamese: "thời gian trôi đi",
      english: "thời gian trôi đi",
      type: "supplementary",
      example: "Chủ ngữ là 時間 / jikan"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 2388fa3e787db8d6
    {
      japanese: "参加する",
      kana: "参加する",
      vietnamese: "tham gia",
      english: "tham gia",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 6f0ecdf4a884400c
    {
      japanese: "育てる",
      kana: "育てる",
      vietnamese: "nuôi, trồng",
      english: "nuôi, trồng",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | fc46762f0a2540f9
    {
      japanese: "運ぶ",
      kana: "運ぶ",
      vietnamese: "vận chuyển, mang",
      english: "vận chuyển, mang",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 62e4c2a92cfda068
    {
      japanese: "入院する",
      kana: "入院する",
      vietnamese: "nhập viện",
      english: "nhập viện",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 3e128a4f37988675
    {
      japanese: "退院する",
      kana: "退院する",
      vietnamese: "xuất viện",
      english: "xuất viện",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 2e4758f1c2d11305
    {
      japanese: "入れる",
      kana: "入れる",
      vietnamese: "cho vào, bật",
      english: "cho vào, bật",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 0b392209af5c1a7b
    {
      japanese: "切る",
      kana: "切る",
      vietnamese: "cắt, tắt",
      english: "cắt, tắt",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 565729ea6ba083dd
    {
      japanese: "掛ける",
      kana: "掛ける",
      vietnamese: "treo, khóa, gọi điện",
      english: "treo, khóa, gọi điện",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 753e3e3401030384
    {
      japanese: "整理する",
      kana: "整理する",
      vietnamese: "sắp xếp",
      english: "sắp xếp",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 72dd915bd00c574b
    {
      japanese: "押す",
      kana: "押す",
      vietnamese: "ấn, đóng dấu",
      english: "ấn, đóng dấu",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 40342dcb1d3b0e6a
    {
      japanese: "似る",
      kana: "似る",
      vietnamese: "giống",
      english: "giống",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 0071e4ada3ee8783
    {
      japanese: "世話をする",
      kana: "世話をする",
      vietnamese: "chăm sóc",
      english: "chăm sóc",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 5. Động từ quan trọng trong bài | 28b96207e1adc464
    {
      japanese: "けんかする",
      kana: "けんかする",
      vietnamese: "cãi nhau",
      english: "cãi nhau",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | df479a17762a30fd
    {
      japanese: "参",
      kana: "サン / san",
      vietnamese: "Tham — tham gia, đến",
      english: "tham gia, đến",
      type: "kanji",
      example: "参加します / sanka shimasu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | b015f84581f60a59
    {
      japanese: "加",
      kana: "カ / ka",
      vietnamese: "Gia — thêm vào, gia nhập",
      english: "thêm vào, gia nhập",
      type: "kanji",
      example: "参加します / sanka shimasu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | d457126fd5105aeb
    {
      japanese: "運",
      kana: "ウン / un",
      vietnamese: "Vận — vận chuyển, vận may",
      english: "vận chuyển, vận may",
      type: "kanji",
      example: "運びます / hakobimasu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | d3f40229bb2f00ab
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào, cho vào",
      english: "vào, cho vào",
      type: "kanji",
      example: "入院します / nyuuin shimasu, 入れます / iremasu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 5f6af5ab5eb24d53
    {
      japanese: "切",
      kana: "セツ / setsu",
      vietnamese: "Thiết — cắt, tắt",
      english: "cắt, tắt",
      type: "kanji",
      example: "切ります / kirimasu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 7b71a156eb008e08
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "Khí — khí, tinh thần, cảm giác",
      english: "khí, tinh thần, cảm giác",
      type: "kanji",
      example: "気持ち / kimochi"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | c949241f4c80df3b
    {
      japanese: "持",
      kana: "ジ / ji",
      vietnamese: "Trì — cầm, giữ",
      english: "cầm, giữ",
      type: "kanji",
      example: "気持ち / kimochi"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 90db4be85bdbfcee
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大きな / ookina"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 3ba05c6974fa98e5
    {
      japanese: "小",
      kana: "ショウ / shou",
      vietnamese: "Tiểu — nhỏ",
      english: "nhỏ",
      type: "kanji",
      example: "小さな / chiisana, 小学校 / shougakkou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 44f1814a1c6ca86b
    {
      japanese: "赤",
      kana: "セキ / seki",
      vietnamese: "Xích — đỏ",
      english: "đỏ",
      type: "kanji",
      example: "赤ちゃん / akachan"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | e95a27608ee47489
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "小学校 / shougakkou, 中学校 / chuugakkou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 4b9e6fce43aecb27
    {
      japanese: "校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — trường học",
      english: "trường học",
      type: "kanji",
      example: "小学校 / shougakkou, 中学校 / chuugakkou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 0eac145dad17f442
    {
      japanese: "中",
      kana: "チュウ / chuu",
      vietnamese: "Trung — trong, giữa",
      english: "trong, giữa",
      type: "kanji",
      example: "中学校 / chuugakkou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 5e69b767bea47d59
    {
      japanese: "前",
      kana: "ゼン / zen",
      vietnamese: "Tiền — trước",
      english: "trước",
      type: "kanji",
      example: "駅前 / ekimae"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 3427787122b40152
    {
      japanese: "海",
      kana: "カイ / kai",
      vietnamese: "Hải — biển",
      english: "biển",
      type: "kanji",
      example: "海岸 / kaigan"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 8d050e4fa73fdb85
    {
      japanese: "工",
      kana: "コウ / kou",
      vietnamese: "Công — công việc, chế tạo",
      english: "công việc, chế tạo",
      type: "kanji",
      example: "工場 / koujou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 5b52a9d689aaa4ce
    {
      japanese: "場",
      kana: "ジョウ / jou",
      vietnamese: "Trường — nơi, địa điểm",
      english: "nơi, địa điểm",
      type: "kanji",
      example: "工場 / koujou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 4485bfe855ce7457
    {
      japanese: "村",
      kana: "ソン / son",
      vietnamese: "Thôn — làng",
      english: "làng",
      type: "kanji",
      example: "村 / mura"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | ae3c0d724c84bccf
    {
      japanese: "電",
      kana: "デン / den",
      vietnamese: "Điện — điện",
      english: "điện",
      type: "kanji",
      example: "電源 / dengen"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | f474c36168aeefeb
    {
      japanese: "源",
      kana: "ゲン / gen",
      vietnamese: "Nguyên — nguồn gốc, nguồn",
      english: "nguồn gốc, nguồn",
      type: "kanji",
      example: "電源 / dengen"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 4167dbfcb8551c0f
    {
      japanese: "習",
      kana: "シュウ / shuu",
      vietnamese: "Tập — học, luyện, tập quán",
      english: "học, luyện, tập quán",
      type: "kanji",
      example: "習慣 / shuukan"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 744fcb84d6cfd845
    {
      japanese: "健",
      kana: "ケン / ken",
      vietnamese: "Kiện — khỏe mạnh",
      english: "khỏe mạnh",
      type: "kanji",
      example: "健康 / kenkou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 64bdb29bc939cf86
    {
      japanese: "康",
      kana: "コウ / kou",
      vietnamese: "Khang — khỏe, yên ổn",
      english: "khỏe, yên ổn",
      type: "kanji",
      example: "健康 / kenkou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 554d325e94c8b436
    {
      japanese: "来",
      kana: "ライ / rai",
      vietnamese: "Lai — đến",
      english: "đến",
      type: "kanji",
      example: "おととし không dùng Kanji trong bài, nhưng liên quan mốc thời gian"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 39460051ff04a3f4
    {
      japanese: "先",
      kana: "セン / sen",
      vietnamese: "Tiên — trước",
      english: "trước",
      type: "kanji",
      example: "お先に / osaki ni"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | b70b5a237d228939
    {
      japanese: "失",
      kana: "シツ / shitsu",
      vietnamese: "Thất — mất, sai, thất",
      english: "mất, sai, thất",
      type: "kanji",
      example: "失礼 / shitsurei"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 2ea2a6409fe4de37
    {
      japanese: "礼",
      kana: "レイ / rei",
      vietnamese: "Lễ — lễ phép, cảm ơn",
      english: "lễ phép, cảm ơn",
      type: "kanji",
      example: "失礼 / shitsurei"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 54a2b92376ac8db8
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra",
      english: "ra",
      type: "kanji",
      example: "出雲大社 / Izumo Taisha"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 286d2cc174f55af7
    {
      japanese: "回",
      kana: "カイ / kai",
      vietnamese: "Hồi — quay lại, vòng",
      english: "quay lại, vòng",
      type: "kanji",
      example: "回覧 / kairan"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 4b4f716005a2f57e
    {
      japanese: "室",
      kana: "シツ / shitsu",
      vietnamese: "Thất — phòng",
      english: "phòng",
      type: "kanji",
      example: "研究室 / kenkyuushitsu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | ed775b19125d542f
    {
      japanese: "方",
      kana: "ホウ / hou",
      vietnamese: "Phương — phương pháp, hướng, cách",
      english: "phương pháp, hướng, cách",
      type: "kanji",
      example: "方法 / houhou"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 902e30c7ed86e0e9
    {
      japanese: "一",
      kana: "イチ / ichi",
      vietnamese: "Nhất — một",
      english: "một",
      type: "kanji",
      example: "一冊 / issatsu, 一点 / itten"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | e31f3dddbc717a87
    {
      japanese: "冊",
      kana: "サツ / satsu",
      vietnamese: "Sách — cuốn, quyển",
      english: "cuốn, quyển",
      type: "kanji",
      example: "一冊 / issatsu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | e15f079372d7ec8b
    {
      japanese: "押",
      kana: "オウ / ou",
      vietnamese: "Áp — ấn, đẩy",
      english: "ấn, đẩy",
      type: "kanji",
      example: "押します / oshimasu"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 151fb81333bf29b2
    {
      japanese: "子",
      kana: "シ / shi",
      vietnamese: "Tử — con, đứa trẻ",
      english: "con, đứa trẻ",
      type: "kanji",
      example: "双子 / futago"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 2af2e359b52370f4
    {
      japanese: "姉",
      kana: "シ / shi",
      vietnamese: "Tỉ — chị gái",
      english: "chị gái",
      type: "kanji",
      example: "姉妹 / shimai"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | bbe350056d7ddf26
    {
      japanese: "妹",
      kana: "マイ / mai",
      vietnamese: "Muội — em gái",
      english: "em gái",
      type: "kanji",
      example: "姉妹 / shimai"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 9ee91ce324cd4049
    {
      japanese: "時",
      kana: "ジ / ji",
      vietnamese: "Thời — thời gian",
      english: "thời gian",
      type: "kanji",
      example: "時間 / jikan"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 99c0d444b417b676
    {
      japanese: "間",
      kana: "カン / kan",
      vietnamese: "Gian — khoảng giữa, thời gian",
      english: "khoảng giữa, thời gian",
      type: "kanji",
      example: "時間 / jikan"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | b06c8cfe480b32ce
    {
      japanese: "好",
      kana: "コウ / kou",
      vietnamese: "Hảo — thích, tốt",
      english: "thích, tốt",
      type: "kanji",
      example: "大好き / daisuki"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | 0e09dca8e943c84c
    {
      japanese: "点",
      kana: "テン / ten",
      vietnamese: "Điểm — điểm",
      english: "điểm",
      type: "kanji",
      example: "一点 / itten"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | e329e014de6a7627
    {
      japanese: "強",
      kana: "キョウ / kyou",
      vietnamese: "Cường — mạnh",
      english: "mạnh",
      type: "kanji",
      example: "気が強い / ki ga tsuyoi"
    },
    // source: review_tu_vung_bai_38.md | 6. Kanji N5–N4 cần học kỹ | dab06159c545bff8
    {
      japanese: "不",
      kana: "フ / fu, ブ / bu",
      vietnamese: "Bất — không, bất",
      english: "không, bất",
      type: "kanji",
      example: "不思議 / fushigi"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a233c49a222a4de3
    {
      japanese: "参加",
      kana: "サン / san",
      vietnamese: "Tham — 参 = tham gia; 加 = thêm vào/gia nhập",
      english: "参 = tham gia; 加 = thêm vào/gia nhập",
      type: "kanji",
      example: "参加"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b9aee72678445a19
    {
      japanese: "参加",
      kana: "カ / ka",
      vietnamese: "Gia — 参 = tham gia; 加 = gia nhập",
      english: "参 = tham gia; 加 = gia nhập",
      type: "kanji",
      example: "参加"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7e02c4689a88309a
    {
      japanese: "運ぶ",
      kana: "はこ.ぶ / hakobu",
      vietnamese: "Vận — 運 = vận chuyển",
      english: "運 = vận chuyển",
      type: "kanji",
      example: "運ぶ"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 59fa6a700289f84c
    {
      japanese: "入れる",
      kana: "い.れる / ireru",
      vietnamese: "Nhập — 入 = cho vào",
      english: "入 = cho vào",
      type: "kanji",
      example: "入れる"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 723e5e36f3e5c347
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = đi vào",
      english: "入 = đi vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1666fae537262054
    {
      japanese: "入院",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — 入 = vào; 院 = viện",
      english: "入 = vào; 院 = viện",
      type: "kanji",
      example: "入院"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 317780988cd6b720
    {
      japanese: "切る",
      kana: "き.る / kiru",
      vietnamese: "Thiết — 切 = cắt/tắt",
      english: "切 = cắt/tắt",
      type: "kanji",
      example: "切る"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 504516249fc42ef3
    {
      japanese: "気持ち",
      kana: "キ / ki",
      vietnamese: "Khí — 気 = cảm giác/tinh thần; 持 = giữ",
      english: "気 = cảm giác/tinh thần; 持 = giữ",
      type: "kanji",
      example: "気持ち"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e0e24cd3fb4ae8db
    {
      japanese: "持つ",
      kana: "も.つ / motsu",
      vietnamese: "Trì — 気 = cảm giác; 持 = giữ",
      english: "気 = cảm giác; 持 = giữ",
      type: "kanji",
      example: "持つ"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1575d42246eeba35
    {
      japanese: "大きい",
      kana: "おお.きい / ookii",
      vietnamese: "Đại — 大 = lớn",
      english: "大 = lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 2aa4661a428892e7
    {
      japanese: "大好き",
      kana: "ダイ / dai + す.き / suki",
      vietnamese: "Đại — 大 = rất; 好 = thích",
      english: "大 = rất; 好 = thích",
      type: "kanji",
      example: "大好き"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 077837aa7e97c55d
    {
      japanese: "小さい",
      kana: "ちい.さい / chiisai",
      vietnamese: "Tiểu — 小 = nhỏ",
      english: "小 = nhỏ",
      type: "kanji",
      example: "小さい"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 41b9459a77248d4f
    {
      japanese: "小学校",
      kana: "ショウ / shou",
      vietnamese: "Tiểu — 小 = nhỏ; 学 = học; 校 = trường",
      english: "小 = nhỏ; 学 = học; 校 = trường",
      type: "kanji",
      example: "小学校"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7eda65e4020aabc1
    {
      japanese: "赤",
      kana: "あか / aka",
      vietnamese: "Xích — 赤 = đỏ",
      english: "赤 = đỏ",
      type: "kanji",
      example: "赤"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 695ba42c46f2f703
    {
      japanese: "赤ちゃん",
      kana: "あか / aka",
      vietnamese: "Xích — 赤 = đỏ; ちゃん = cách gọi thân mật",
      english: "赤 = đỏ; ちゃん = cách gọi thân mật",
      type: "kanji",
      example: "赤ちゃん"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b9a5ef6e42254bc8
    {
      japanese: "学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9799c85406bce151
    {
      japanese: "小学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 小 = nhỏ; 学 = học; 校 = trường",
      english: "小 = nhỏ; 学 = học; 校 = trường",
      type: "kanji",
      example: "小学校"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8496db387a5881a4
    {
      japanese: "学校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f4f3b9ab5ac793dc
    {
      japanese: "中学校",
      kana: "チュウ / chuu",
      vietnamese: "Trung — 中 = giữa; 学校 = trường học",
      english: "中 = giữa; 学校 = trường học",
      type: "kanji",
      example: "中学校"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4a9b6f276ff62389
    {
      japanese: "中",
      kana: "なか / naka",
      vietnamese: "Trung — 中 = trong, giữa",
      english: "中 = trong, giữa",
      type: "kanji",
      example: "中"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4416166f154de5b3
    {
      japanese: "駅前",
      kana: "まえ / mae",
      vietnamese: "Tiền — 駅 = ga; 前 = trước",
      english: "駅 = ga; 前 = trước",
      type: "kanji",
      example: "駅前"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 816387f36617f9be
    {
      japanese: "名前",
      kana: "まえ / mae",
      vietnamese: "Tiền — 名 = tên; 前 = phần trước",
      english: "名 = tên; 前 = phần trước",
      type: "kanji",
      example: "名前"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | da3f19a46bebe45e
    {
      japanese: "海岸",
      kana: "カイ / kai",
      vietnamese: "Hải — 海 = biển; 岸 = bờ",
      english: "海 = biển; 岸 = bờ",
      type: "kanji",
      example: "海岸"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1397bcf451d06a44
    {
      japanese: "海",
      kana: "うみ / umi",
      vietnamese: "Hải — 海 = biển",
      english: "海 = biển",
      type: "kanji",
      example: "海"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c213bb8bcae730cb
    {
      japanese: "工場",
      kana: "コウ / kou",
      vietnamese: "Công — 工 = công việc/kỹ thuật; 場 = nơi",
      english: "工 = công việc/kỹ thuật; 場 = nơi",
      type: "kanji",
      example: "工場"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ce676e9d42e26e24
    {
      japanese: "工場",
      kana: "ジョウ / jou",
      vietnamese: "Trường — 工 = công xưởng; 場 = nơi",
      english: "工 = công xưởng; 場 = nơi",
      type: "kanji",
      example: "工場"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4e2e02b00e0b848b
    {
      japanese: "村",
      kana: "むら / mura",
      vietnamese: "Thôn — 村 = làng",
      english: "村 = làng",
      type: "kanji",
      example: "村"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6f78b26c0a83275c
    {
      japanese: "電源",
      kana: "デン / den",
      vietnamese: "Điện — 電 = điện; 源 = nguồn",
      english: "電 = điện; 源 = nguồn",
      type: "kanji",
      example: "電源"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fd7f8e08d5e97688
    {
      japanese: "電車",
      kana: "デン / den",
      vietnamese: "Điện — 電 = điện; 車 = xe",
      english: "電 = điện; 車 = xe",
      type: "kanji",
      example: "電車"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | baf5b0bf7cc8e908
    {
      japanese: "習慣",
      kana: "シュウ / shuu",
      vietnamese: "Tập — 習 = học, tập; 慣 = quen",
      english: "習 = học, tập; 慣 = quen",
      type: "kanji",
      example: "習慣"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0a9efb355abe76f0
    {
      japanese: "習う",
      kana: "なら.う / narau",
      vietnamese: "Tập — 習 = học",
      english: "習 = học",
      type: "kanji",
      example: "習う"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8aa18c298ff3e99f
    {
      japanese: "健康",
      kana: "ケン / ken",
      vietnamese: "Kiện — 健 = khỏe; 康 = khỏe/yên ổn",
      english: "健 = khỏe; 康 = khỏe/yên ổn",
      type: "kanji",
      example: "健康"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a036045c10fdabd4
    {
      japanese: "先",
      kana: "さき / saki",
      vietnamese: "Tiên — 先 = trước",
      english: "先 = trước",
      type: "kanji",
      example: "先"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e4444e0ffa35bb82
    {
      japanese: "失礼",
      kana: "シツ / shitsu",
      vietnamese: "Thất — 失 = mất/sai; 礼 = lễ phép",
      english: "失 = mất/sai; 礼 = lễ phép",
      type: "kanji",
      example: "失礼"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e31897882b683a55
    {
      japanese: "失礼",
      kana: "レイ / rei",
      vietnamese: "Lễ — 失 = mất; 礼 = lễ phép",
      english: "失 = mất; 礼 = lễ phép",
      type: "kanji",
      example: "失礼"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d60a48dea87848b5
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8f4dd29b65a88c16
    {
      japanese: "回覧",
      kana: "カイ / kai",
      vietnamese: "Hồi — 回 = xoay/vòng; 覧 = xem",
      english: "回 = xoay/vòng; 覧 = xem",
      type: "kanji",
      example: "回覧"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 054be483a75f4609
    {
      japanese: "研究室",
      kana: "シツ / shitsu",
      vietnamese: "Thất — 研 = nghiên; 究 = cứu; 室 = phòng",
      english: "研 = nghiên; 究 = cứu; 室 = phòng",
      type: "kanji",
      example: "研究室"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e923d85260ed3f45
    {
      japanese: "方法",
      kana: "ホウ / hou",
      vietnamese: "Phương — 方 = cách, phương pháp",
      english: "方 = cách, phương pháp",
      type: "kanji",
      example: "方法"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 740d88abde2d2129
    {
      japanese: "読み方",
      kana: "かた / kata",
      vietnamese: "Phương — 読み = đọc; 方 = cách",
      english: "読み = đọc; 方 = cách",
      type: "kanji",
      example: "読み方"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f84c5358447da66b
    {
      japanese: "一冊",
      kana: "イッ / is-",
      vietnamese: "Nhất — 一 = một; 冊 = quyển",
      english: "一 = một; 冊 = quyển",
      type: "kanji",
      example: "一冊"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | dcb6fc73e54d0f00
    {
      japanese: "一点",
      kana: "イッ / it-",
      vietnamese: "Nhất — 一 = một; 点 = điểm",
      english: "一 = một; 点 = điểm",
      type: "kanji",
      example: "一点"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c9fa97474264b5b9
    {
      japanese: "押す",
      kana: "お.す / osu",
      vietnamese: "Áp — 押 = ấn",
      english: "押 = ấn",
      type: "kanji",
      example: "押す"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f5034b4e850bb8b9
    {
      japanese: "双子",
      kana: "こ / ko",
      vietnamese: "Tử — 双 = đôi; 子 = đứa trẻ",
      english: "双 = đôi; 子 = đứa trẻ",
      type: "kanji",
      example: "双子"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e231076d8ba97d6a
    {
      japanese: "姉妹",
      kana: "シ / shi",
      vietnamese: "Tỉ — 姉 = chị gái; 妹 = em gái",
      english: "姉 = chị gái; 妹 = em gái",
      type: "kanji",
      example: "姉妹"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 114c208830d5ee2e
    {
      japanese: "姉妹",
      kana: "マイ / mai",
      vietnamese: "Muội — 姉 = chị; 妹 = em gái",
      english: "姉 = chị; 妹 = em gái",
      type: "kanji",
      example: "姉妹"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c6a8ddfd541444f2
    {
      japanese: "時間",
      kana: "ジ / ji",
      vietnamese: "Thời — 時 = thời gian; 間 = khoảng",
      english: "時 = thời gian; 間 = khoảng",
      type: "kanji",
      example: "時間"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c5d2a6fbb54ed90e
    {
      japanese: "時間",
      kana: "カン / kan",
      vietnamese: "Gian — 時 = thời; 間 = khoảng",
      english: "時 = thời; 間 = khoảng",
      type: "kanji",
      example: "時間"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b022493d046e9909
    {
      japanese: "大好き",
      kana: "す.き / suki",
      vietnamese: "Hảo — 大 = rất; 好 = thích",
      english: "大 = rất; 好 = thích",
      type: "kanji",
      example: "大好き"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c3bb914045c88694
    {
      japanese: "一点",
      kana: "テン / ten",
      vietnamese: "Điểm — 一 = một; 点 = điểm",
      english: "一 = một; 点 = điểm",
      type: "kanji",
      example: "一点"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3342300b2db7f7c5
    {
      japanese: "気が強い",
      kana: "つよ.い / tsuyoi",
      vietnamese: "Cường — 気 = tính khí; 強 = mạnh",
      english: "気 = tính khí; 強 = mạnh",
      type: "kanji",
      example: "気が強い"
    },
    // source: review_tu_vung_bai_38.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a8466bb8091f2a15
    {
      japanese: "不思議",
      kana: "フ / fu",
      vietnamese: "Bất — 不 = không; 思議 = lạ/kỳ",
      english: "不 = không; 思議 = lạ/kỳ",
      type: "kanji",
      example: "不思議"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '意向形 (Volitional form)',
      vietnamese: 'thể ý chí',
      english: 'let\'s ~, shall we ~',
      type: 'main',
      explanation: 'Diễn tả ý chí, rủ rê. Nhóm 1: う→おう. Nhóm 2: る→よう. Nhóm 3: する→しよう, 来る→来よう.',
      examples: [
        {
          japanese: '一緒に行きましょう。',
          vietnamese: 'Cùng đi nhé.',
          english: 'Let\'s go together.',
          type: 'main'
        },
        {
          japanese: '映画を見ましょうか。',
          vietnamese: 'Xem phim nhé?',
          english: 'Shall we watch a movie?',
          type: 'main'
        },
        {
          japanese: '休みましょう。',
          vietnamese: 'Nghỉ ngơi thôi.',
          english: 'Let\'s take a break.',
          type: 'main'
        },
        {
          japanese: 'さあ、始めましょう。',
          vietnamese: 'Nào, bắt đầu thôi.',
          english: 'Now, let\'s begin.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜つもりだ',
      vietnamese: 'định ~, dự định ~',
      english: 'intend to ~, plan to ~',
      type: 'main',
      explanation: 'Diễn tả dự định, kế hoạch của người nói. Dùng với động từ thể từ điển + つもりだ.',
      examples: [
        {
          japanese: '明日早く起きるつもりです。',
          vietnamese: 'Tôi định dậy sớm ngày mai.',
          english: 'I intend to wake up early tomorrow.',
          type: 'main'
        },
        {
          japanese: '来年日本に留学するつもりです。',
          vietnamese: 'Tôi dự định du học Nhật năm sau.',
          english: 'I plan to study in Japan next year.',
          type: 'main'
        },
        {
          japanese: 'タバコをやめるつもりです。',
          vietnamese: 'Tôi định bỏ thuốc.',
          english: 'I intend to quit smoking.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜予定だ',
      vietnamese: 'dự định ~',
      english: 'plan to ~, scheduled to ~',
      type: 'main',
      explanation: 'Diễn tả kế hoạch đã được quyết định. Dùng với động từ thể từ điển + 予定だ.',
      examples: [
        {
          japanese: '明日東京へ行く予定です。',
          vietnamese: 'Tôi dự định đi Tokyo ngày mai.',
          english: 'I plan to go to Tokyo tomorrow.',
          type: 'main'
        },
        {
          japanese: '来週試験がある予定です。',
          vietnamese: 'Tuần sau dự định có thi.',
          english: 'There is supposed to be an exam next week.',
          type: 'main'
        },
        {
          japanese: '午後3時に到着する予定です。',
          vietnamese: 'Dự định đến lúc 3 giờ chiều.',
          english: 'We are scheduled to arrive at 3 PM.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜と思う',
      vietnamese: 'nghĩ rằng ~',
      english: 'think that ~',
      type: 'main',
      explanation: 'Diễn tả suy nghĩ, ý kiến chủ quan. Có thể dùng với câu thông thường + と思う.',
      examples: [
        {
          japanese: '明日は雨が降ると思います。',
          vietnamese: 'Tôi nghĩ ngày mai sẽ mưa.',
          english: 'I think it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: 'この映画はおもしろいと思います。',
          vietnamese: 'Tôi nghĩ phim này hay.',
          english: 'I think this movie is interesting.',
          type: 'main'
        },
        {
          japanese: '彼は来ないと思います。',
          vietnamese: 'Tôi nghĩ anh ấy sẽ không đến.',
          english: 'I don\'t think he will come.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ませんか',
      vietnamese: 'không ~?',
      english: 'won\'t you ~? (invitation)',
      type: 'main',
      explanation: 'Cách mời lịch sự hơn ましょう. Dùng để rủ rê người khác.',
      examples: [
        {
          japanese: '一緒に映画を見ませんか。',
          vietnamese: 'Cùng xem phim không?',
          english: 'Won\'t you watch a movie together?',
          type: 'main'
        },
        {
          japanese: 'お茶を飲みませんか。',
          vietnamese: 'Uống trà không?',
          english: 'Won\'t you have some tea?',
          type: 'main'
        },
        {
          japanese: '今度遊びに来ませんか。',
          vietnamese: 'Lần sau đến chơi không?',
          english: 'Won\'t you come visit next time?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ましょうか',
      vietnamese: 'nhé?, có phải không?',
      english: 'shall we ~?',
      type: 'main',
      explanation: 'Dùng để đề nghị hoặc hỏi ý kiến người khác.',
      examples: [
        {
          japanese: '窓を開けましょうか。',
          vietnamese: 'Tôi mở cửa sổ nhé?',
          english: 'Shall I open the window?',
          type: 'main'
        },
        {
          japanese: '手伝いましょうか。',
          vietnamese: 'Tôi giúp nhé?',
          english: 'Shall I help?',
          type: 'main'
        },
        {
          japanese: 'コーヒーを入れましょうか。',
          vietnamese: 'Tôi pha cà phê nhé?',
          english: 'Shall I make coffee?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ようと思う',
      vietnamese: 'nghĩ sẽ ~',
      english: 'think about doing ~',
      type: 'additional',
      explanation: 'Diễn tả ý định tạm thời, chưa quyết định chắc chắn. Dùng với thể ý chí + と思う.',
      examples: [
        {
          japanese: '日本語を勉強しようと思います。',
          vietnamese: 'Tôi nghĩ sẽ học tiếng Nhật.',
          english: 'I think I\'ll study Japanese.',
          type: 'main'
        },
        {
          japanese: '明日早く起きようと思います。',
          vietnamese: 'Tôi nghĩ sẽ dậy sớm ngày mai.',
          english: 'I think I\'ll wake up early tomorrow.',
          type: 'main'
        },
        {
          japanese: '髪を切ろうと思います。',
          vietnamese: 'Tôi nghĩ sẽ cắt tóc.',
          english: 'I think I\'ll cut my hair.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ことにする',
      vietnamese: 'quyết định ~',
      english: 'decide to ~',
      type: 'additional',
      explanation: 'Diễn tả quyết định của bản thân. Dùng với động từ thể từ điển + ことにする.',
      examples: [
        {
          japanese: '日本に留学することにしました。',
          vietnamese: 'Tôi đã quyết định du học Nhật.',
          english: 'I decided to study in Japan.',
          type: 'main'
        },
        {
          japanese: 'タバコをやめることにしました。',
          vietnamese: 'Tôi đã quyết định bỏ thuốc.',
          english: 'I decided to quit smoking.',
          type: 'main'
        },
        {
          japanese: '毎日運動することにします。',
          vietnamese: 'Tôi quyết định tập thể dục mỗi ngày.',
          english: 'I\'ll decide to exercise every day.',
          type: 'additional'
        }
      ]
    }
  ]
};
