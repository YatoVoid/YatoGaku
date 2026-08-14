/**
 * N4 Core Lessons — Lesson 21
 * Focus: Keigo (Polite/Humble Language) and Business Expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_21_DATA: LessonData = {
  lessonNumber: 21,
  title: '敬語と丁寧な表現 (Honorific and Polite Expressions)',
  vocabulary: [
    // Honorific Verbs (尊敬語)
    {
      japanese: 'いらっしゃる',
      kana: 'いらっしゃる',
      vietnamese: 'đến, đi, ở (kính ngữ)',
      english: 'to come/go/be (honorific)',
      type: 'main',
      example: '先生はもういらっしゃいますか。'
    },
    {
      japanese: 'おっしゃる',
      kana: 'おっしゃる',
      vietnamese: 'nói (kính ngữ)',
      english: 'to say (honorific)',
      type: 'main',
      example: '田中先生がそうおっしゃいました。'
    },
    {
      japanese: 'なさる',
      kana: 'なさる',
      vietnamese: 'làm (kính ngữ)',
      english: 'to do (honorific)',
      type: 'main',
      example: 'どうなさいますか。'
    },
    {
      japanese: 'ご覧になる（ごらんになる）',
      kana: 'ごらんになる',
      vietnamese: 'xem (kính ngữ)',
      english: 'to look/watch (honorific)',
      type: 'main',
      example: 'この資料をご覧になりましたか。'
    },
    {
      japanese: '召し上がる（めしあがる）',
      kana: 'めしあがる',
      vietnamese: 'ăn, uống (kính ngữ)',
      english: 'to eat/drink (honorific)',
      type: 'main',
      example: 'コーヒーを召し上がりますか。'
    },
    // Humble Verbs (謙譲語)
    {
      japanese: '参る（まいる）',
      kana: 'まいる',
      vietnamese: 'đến, đi (khiêm ngữ)',
      english: 'to come/go (humble)',
      type: 'main',
      example: '明日伺います。'
    },
    {
      japanese: '申す（もうす）',
      kana: 'もうす',
      vietnamese: 'nói (khiêm ngữ)',
      english: 'to say (humble)',
      type: 'main',
      example: '田中と申します。'
    },
    {
      japanese: '申し上げる（もうしあげる）',
      kana: 'もうしあげる',
      vietnamese: 'nói (khiêm ngữ lịch sự hơn)',
      english: 'to say/tell (humble)',
      type: 'main',
      example: 'お礼を申し上げます。'
    },
    {
      japanese: 'いたす',
      kana: 'いたす',
      vietnamese: 'làm (khiêm ngữ)',
      english: 'to do (humble)',
      type: 'main',
      example: '私がいたします。'
    },
    {
      japanese: '伺う（うかがう）',
      kana: 'うかがう',
      vietnamese: 'hỏi, nghe, đến (khiêm ngữ)',
      english: 'to ask/hear/visit (humble)',
      type: 'main',
      example: '質問を伺ってもよろしいですか。'
    },
    {
      japanese: '拝見する（はいけんする）',
      kana: 'はいけんする',
      vietnamese: 'xem (khiêm ngữ)',
      english: 'to look at (humble)',
      type: 'main',
      example: '資料を拝見いたしました。'
    },
    {
      japanese: 'いただく',
      kana: 'いただく',
      vietnamese: 'nhận, ăn, uống (khiêm ngữ)',
      english: 'to receive/eat/drink (humble)',
      type: 'main',
      example: 'お茶をいただきます。'
    },
    {
      japanese: '存じる（ぞんじる）',
      kana: 'ぞんじる',
      vietnamese: 'biết (khiêm ngữ)',
      english: 'to know (humble)',
      type: 'main',
      example: '存じております。'
    },
    // Business Vocabulary
    {
      japanese: '会社（かいしゃ）',
      kana: 'かいしゃ',
      vietnamese: 'công ty',
      english: 'company',
      type: 'main',
      example: '会社は東京にあります。'
    },
    {
      japanese: '社長（しゃちょう）',
      kana: 'しゃちょう',
      vietnamese: 'giám đốc công ty',
      english: 'company president',
      type: 'main',
      example: '社長はただいま外出中です。'
    },
    {
      japanese: '部長（ぶちょう）',
      kana: 'ぶちょう',
      vietnamese: 'trưởng phòng',
      english: 'department manager',
      type: 'main',
      example: '部長にご相談ください。'
    },
    {
      japanese: '課長（かちょう）',
      kana: 'かちょう',
      vietnamese: 'trưởng bộ phận',
      english: 'section chief',
      type: 'main',
      example: '課長がお呼びです。'
    },
    {
      japanese: '同僚（どうりょう）',
      kana: 'どうりょう',
      vietnamese: 'đồng nghiệp',
      english: 'colleague',
      type: 'main',
      example: '同僚と昼食を食べました。'
    },
    {
      japanese: '上司（じょうし）',
      kana: 'じょうし',
      vietnamese: 'cấp trên',
      english: 'superior/boss',
      type: 'main',
      example: '上司に報告します。'
    },
    {
      japanese: '部下（ぶか）',
      kana: 'ぶか',
      vietnamese: 'cấp dưới',
      english: 'subordinate',
      type: 'main',
      example: '部下に指示を出しました。'
    },
    {
      japanese: '会議（かいぎ）',
      kana: 'かいぎ',
      vietnamese: 'cuộc họp',
      english: 'meeting/conference',
      type: 'main',
      example: '会議は3時からです。'
    },
    {
      japanese: '打ち合わせ（うちあわせ）',
      kana: 'うちあわせ',
      vietnamese: 'cuộc họp, thảo luận',
      english: 'meeting/discussion',
      type: 'main',
      example: '明日打ち合わせがあります。'
    },
    {
      japanese: '予定（よてい）',
      kana: 'よてい',
      vietnamese: 'kế hoạch, lịch trình',
      english: 'schedule/plan',
      type: 'main',
      example: '来週の予定を確認します。'
    },
    {
      japanese: '資料（しりょう）',
      kana: 'しりょう',
      vietnamese: 'tài liệu',
      english: 'materials/documents',
      type: 'main',
      example: '資料を準備してください。'
    },
    {
      japanese: '書類（しょるい）',
      kana: 'しょるい',
      vietnamese: 'giấy tờ, văn bản',
      english: 'documents/papers',
      type: 'main',
      example: 'この書類にサインしてください。'
    },
    {
      japanese: '報告（ほうこく）',
      kana: 'ほうこく',
      vietnamese: 'báo cáo',
      english: 'report',
      type: 'main',
      example: '報告書を提出しました。'
    },
    {
      japanese: '連絡（れんらく）',
      kana: 'れんらく',
      vietnamese: 'liên lạc',
      english: 'contact/communication',
      type: 'main',
      example: '後で連絡します。'
    },
    {
      japanese: '確認（かくにん）',
      kana: 'かくにん',
      vietnamese: 'xác nhận',
      english: 'confirmation',
      type: 'main',
      example: 'メールを確認してください。'
    },
    {
      japanese: '契約（けいやく）',
      kana: 'けいやく',
      vietnamese: 'hợp đồng',
      english: 'contract',
      type: 'main',
      example: '契約を結びました。'
    },
    {
      japanese: '取引（とりひき）',
      kana: 'とりひき',
      vietnamese: 'giao dịch',
      english: 'transaction/deal',
      type: 'main',
      example: '取引先と会います。'
    },
    // Polite Expressions
    {
      japanese: '恐れ入りますが（おそれいりますが）',
      kana: 'おそれいりますが',
      vietnamese: 'xin lỗi làm phiền nhưng',
      english: 'excuse me, but...',
      type: 'main',
      example: '恐れ入りますが、お名前をお聞かせください。'
    },
    {
      japanese: 'お待たせしました（おまたせしました）',
      kana: 'おまたせしました',
      vietnamese: 'xin lỗi đã làm bạn đợi',
      english: 'sorry to keep you waiting',
      type: 'main',
      example: 'お待たせしました。どうぞお入りください。'
    },
    {
      japanese: '失礼いたします（しつれいいたします）',
      kana: 'しつれいいたします',
      vietnamese: 'xin phép',
      english: 'excuse me (polite)',
      type: 'main',
      example: '失礼いたします。田中と申します。'
    },
    {
      japanese: 'よろしくお願いいたします（よろしくおねがいいたします）',
      kana: 'よろしくおねがいいたします',
      vietnamese: 'rất mong được giúp đỡ (rất lịch sự)',
      english: 'please treat me favorably (very polite)',
      type: 'main',
      example: '今後ともよろしくお願いいたします。'
    },
    {
      japanese: 'お疲れ様でした（おつかれさまでした）',
      kana: 'おつかれさまでした',
      vietnamese: 'cảm ơn vì công việc vất vả',
      english: 'thank you for your hard work',
      type: 'main',
      example: '今日はお疲れ様でした。'
    },
    {
      japanese: 'お先に失礼します（おさきにしつれいします）',
      kana: 'おさきにしつれいします',
      vietnamese: 'xin phép về trước',
      english: 'excuse me for leaving first',
      type: 'main',
      example: 'お先に失礼します。また明日。'
    },
    {
      japanese: 'お世話になっております（おせわになっております）',
      kana: 'おせわになっております',
      vietnamese: 'cảm ơn đã giúp đỡ (dùng trong email/điện thoại)',
      english: 'thank you for your support',
      type: 'main',
      example: 'いつもお世話になっております。'
    },
    // Additional Vocabulary
    {
      japanese: '承知しました（しょうちしました）',
      kana: 'しょうちしました',
      vietnamese: 'tôi đã hiểu',
      english: 'I understand (formal)',
      type: 'additional',
      example: '承知しました。すぐに確認いたします。'
    },
    {
      japanese: 'かしこまりました',
      kana: 'かしこまりました',
      vietnamese: 'vâng ạ (rất lịch sự)',
      english: 'certainly (very formal)',
      type: 'additional',
      example: 'かしこまりました。少々お待ちください。'
    },
    {
      japanese: 'お忙しいところ（おいそがしいところ）',
      kana: 'おいそがしいところ',
      vietnamese: 'trong lúc bận rộn',
      english: 'while you are busy',
      type: 'additional',
      example: 'お忙しいところ、ありがとうございます。'
    },
    {
      japanese: 'お手数ですが（おてすうですが）',
      kana: 'おてすうですが',
      vietnamese: 'xin lỗi làm phiền nhưng',
      english: 'sorry to trouble you, but',
      type: 'additional',
      example: 'お手数ですが、こちらの書類をお願いします。'
    },
    {
      japanese: 'ご都合（ごつごう）',
      kana: 'ごつごう',
      vietnamese: 'sự thuận tiện',
      english: 'convenience/circumstances',
      type: 'additional',
      example: 'ご都合はいかがですか。'
    },
    {
      japanese: 'ご無沙汰しております（ごぶさたしております）',
      kana: 'ごぶさたしております',
      vietnamese: 'lâu không gặp',
      english: 'it has been a long time',
      type: 'additional',
      example: 'ご無沙汰しております。お元気ですか。'
    },
    {
      japanese: '拝借する（はいしゃくする）',
      kana: 'はいしゃくする',
      vietnamese: 'mượn (khiêm ngữ)',
      english: 'to borrow (humble)',
      type: 'additional',
      example: 'ペンを拝借してもよろしいですか。'
    },
    {
      japanese: '差し上げる（さしあげる）',
      kana: 'さしあげる',
      vietnamese: 'tặng (khiêm ngữ)',
      english: 'to give (humble)',
      type: 'additional',
      example: 'これを差し上げます。'
    },
    {
      japanese: 'お目にかかる（おめにかかる）',
      kana: 'おめにかかる',
      vietnamese: 'gặp (khiêm ngữ)',
      english: 'to meet (humble)',
      type: 'additional',
      example: '来週お目にかかれますか。'
    },
    {
      japanese: 'お待ちする（おまちする）',
      kana: 'おまちする',
      vietnamese: 'chờ đợi (khiêm ngữ)',
      english: 'to wait (humble)',
      type: 'additional',
      example: 'ロビーでお待ちしております。'
    },
    {
      japanese: 'ご案内する（ごあんないする）',
      kana: 'ごあんないする',
      vietnamese: 'hướng dẫn (khiêm ngữ)',
      english: 'to guide (humble)',
      type: 'additional',
      example: '会議室へご案内いたします。'
    },
    {
      japanese: 'お送りする（おおくりする）',
      kana: 'おおくりする',
      vietnamese: 'gửi (khiêm ngữ)',
      english: 'to send (humble)',
      type: 'additional',
      example: 'メールでお送りします。'
    },
    {
      japanese: 'お持ちする（おもちする）',
      kana: 'おもちする',
      vietnamese: 'mang (khiêm ngữ)',
      english: 'to bring/hold (humble)',
      type: 'additional',
      example: 'お荷物をお持ちします。'
    },
    {
      japanese: '頂戴する（ちょうだいする）',
      kana: 'ちょうだいする',
      vietnamese: 'nhận (khiêm ngữ)',
      english: 'to receive (humble)',
      type: 'additional',
      example: 'お名刺を頂戴いたします。'
    },
    // Business Terms
    {
      japanese: '営業（えいぎょう）',
      kana: 'えいぎょう',
      vietnamese: 'kinh doanh, bán hàng',
      english: 'sales/business',
      type: 'additional',
      example: '営業部で働いています。'
    },
    {
      japanese: '経理（けいり）',
      kana: 'けいり',
      vietnamese: 'kế toán',
      english: 'accounting',
      type: 'additional',
      example: '経理の仕事は細かいです。'
    },
    {
      japanese: '人事（じんじ）',
      kana: 'じんじ',
      vietnamese: 'nhân sự',
      english: 'human resources',
      type: 'additional',
      example: '人事部に問い合わせてください。'
    },
    {
      japanese: '総務（そうむ）',
      kana: 'そうむ',
      vietnamese: 'hành chính tổng hợp',
      english: 'general affairs',
      type: 'additional',
      example: '総務部が管理しています。'
    },
    {
      japanese: '売上（うりあげ）',
      kana: 'うりあげ',
      vietnamese: 'doanh số',
      english: 'sales/revenue',
      type: 'additional',
      example: '今月の売上は好調です。'
    },
    {
      japanese: '利益（りえき）',
      kana: 'りえき',
      vietnamese: 'lợi nhuận',
      english: 'profit',
      type: 'additional',
      example: '利益が増えました。'
    },
    {
      japanese: '納期（のうき）',
      kana: 'のうき',
      vietnamese: 'thời hạn giao hàng',
      english: 'delivery date',
      type: 'additional',
      example: '納期を守ってください。'
    },
    {
      japanese: '見積もり（みつもり）',
      kana: 'みつもり',
      vietnamese: 'báo giá',
      english: 'estimate/quote',
      type: 'additional',
      example: '見積もりをお願いします。'
    },
    {
      japanese: '請求書（せいきゅうしょ）',
      kana: 'せいきゅうしょ',
      vietnamese: 'hóa đơn yêu cầu thanh toán',
      english: 'invoice',
      type: 'additional',
      example: '請求書を発行しました。'
    },
    {
      japanese: '領収書（りょうしゅうしょ）',
      kana: 'りょうしゅうしょ',
      vietnamese: 'biên lai',
      english: 'receipt',
      type: 'additional',
      example: '領収書をください。'
    },
    // Supplementary
    {
      japanese: '謹んで（つつしんで）',
      kana: 'つつしんで',
      vietnamese: 'cung kính',
      english: 'respectfully',
      type: 'supplementary',
      example: '謹んでお祝い申し上げます。'
    },
    {
      japanese: 'ご指導（ごしどう）',
      kana: 'ごしどう',
      vietnamese: 'sự chỉ đạo',
      english: 'guidance',
      type: 'supplementary',
      example: 'ご指導よろしくお願いします。'
    },
    {
      japanese: 'ご協力（ごきょうりょく）',
      kana: 'ごきょうりょく',
      vietnamese: 'sự hợp tác',
      english: 'cooperation',
      type: 'supplementary',
      example: 'ご協力ありがとうございます。'
    },
    {
      japanese: 'ご迷惑（ごめいわく）',
      kana: 'ごめいわく',
      vietnamese: 'sự phiền phức',
      english: 'trouble/inconvenience',
      type: 'supplementary',
      example: 'ご迷惑をおかけしました。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 36b4a08958884b4f
    {
      japanese: "渡します",
      kana: "わたします",
      vietnamese: "đưa cho, giao cho",
      english: "đưa cho, giao cho",
      type: "main",
      example: "友達に本を渡します。\nTomodachi ni hon o watashimasu.\nTôi đưa sách cho bạn."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | cb6b67aacf3ec673
    {
      japanese: "帰って来ます",
      kana: "かえってきます",
      vietnamese: "về, trở lại",
      english: "về, trở lại",
      type: "main",
      example: "父はもうすぐ帰って来ます。\nChichi wa mou sugu kaette kimasu.\nBố tôi sắp về rồi."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 3acb3504f34899b7
    {
      japanese: "出ます",
      kana: "でます",
      vietnamese: "xuất phát, chạy; ra, xuất hiện",
      english: "xuất phát, chạy; ra, xuất hiện",
      type: "main",
      example: "バスが駅から出ます。\nBasu ga eki kara demasu.\nXe buýt xuất phát từ nhà ga."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | e11b95cd9309179d
    {
      japanese: "届きます",
      kana: "とどきます",
      vietnamese: "được gửi đến, được chuyển đến",
      english: "được gửi đến, được chuyển đến",
      type: "main",
      example: "荷物が届きました。\nNimotsu ga todokimashita.\nHành lý/gói hàng đã được gửi đến."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 8c5ff0b37fdaf06b
    {
      japanese: "入学します",
      kana: "にゅうがくします",
      vietnamese: "nhập học, vào trường",
      english: "nhập học, vào trường",
      type: "main",
      example: "4月に大学に入学します。\nShigatsu ni daigaku ni nyuugaku shimasu.\nTôi sẽ nhập học đại học vào tháng 4."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 6c1c4b55bd44ba01
    {
      japanese: "卒業します",
      kana: "そつぎょうします",
      vietnamese: "tốt nghiệp",
      english: "tốt nghiệp",
      type: "main",
      example: "今年大学を卒業します。\nKotoshi daigaku o sotsugyou shimasu.\nNăm nay tôi tốt nghiệp đại học."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | a3001c6bb60c67fa
    {
      japanese: "焼きます",
      kana: "やきます",
      vietnamese: "nướng, rán",
      english: "nướng, rán",
      type: "main",
      example: "パンを焼きます。\nPan o yakimasu.\nTôi nướng bánh mì."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 813ce4b3c08a6c8b
    {
      japanese: "焼けます",
      kana: "やけます",
      vietnamese: "được nướng, được chín, bị cháy/nắng",
      english: "được nướng, được chín, bị cháy/nắng",
      type: "main",
      example: "肉がよく焼けました。\nNiku ga yoku yakemashita.\nThịt đã được nướng chín kỹ."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | bcd0c0a9afe13fd2
    {
      japanese: "留守",
      kana: "るす",
      vietnamese: "đi vắng, vắng nhà",
      english: "đi vắng, vắng nhà",
      type: "main",
      example: "母は今留守です。\nHaha wa ima rusu desu.\nMẹ tôi hiện đang vắng nhà."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 393fbaa14ceefc9c
    {
      japanese: "宅配便",
      kana: "たくはいびん",
      vietnamese: "dịch vụ chuyển đồ đến nhà",
      english: "dịch vụ chuyển đồ đến nhà",
      type: "main",
      example: "宅配便で荷物を送ります。\nTakuhaibin de nimotsu o okurimasu.\nTôi gửi đồ bằng dịch vụ giao hàng tận nhà."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | c773c596bdc2895a
    {
      japanese: "原因",
      kana: "げんいん",
      vietnamese: "nguyên nhân",
      english: "nguyên nhân",
      type: "main",
      example: "事故の原因を調べます。\nJiko no gen'in o shirabemasu.\nTôi điều tra nguyên nhân của tai nạn."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | d44251a5d6ffcdc5
    {
      japanese: "こちら",
      kana: "こちら",
      vietnamese: "đây, đằng này; phía này; vị này",
      english: "đây, đằng này; phía này; vị này",
      type: "main",
      example: "こちらへどうぞ。\nKochira e douzo.\nXin mời đi lối này."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 3840d6288f28c5c2
    {
      japanese: "〜の所",
      kana: "〜のところ",
      vietnamese: "chỗ quanh..., nơi của...",
      english: "chỗ quanh..., nơi của...",
      type: "main",
      example: "駅のところで待っています。\nEki no tokoro de matte imasu.\nTôi đang đợi ở khu vực nhà ga."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 32523ae0bab9a445
    {
      japanese: "半年",
      kana: "はんとし",
      vietnamese: "nửa năm",
      english: "nửa năm",
      type: "main",
      example: "日本語を半年勉強しました。\nNihongo o hantoshi benkyou shimashita.\nTôi đã học tiếng Nhật nửa năm."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | df4df1c77ef8edfb
    {
      japanese: "ちょうど",
      kana: "ちょうど",
      vietnamese: "vừa đúng, đúng lúc",
      english: "vừa đúng, đúng lúc",
      type: "main",
      example: "ちょうど12時です。\nChoudo juu-ni-ji desu.\nVừa đúng 12 giờ."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 05010492cc06d9e0
    {
      japanese: "たった今",
      kana: "たったいま",
      vietnamese: "vừa mới rồi",
      english: "vừa mới rồi",
      type: "main",
      example: "先生はたった今帰りました。\nSensei wa tatta ima kaerimashita.\nThầy/cô vừa mới về rồi."
    },
    // source: review_tu_vung_bai_46.md | 1. Từ vựng chính | 7573f1714bd10c12
    {
      japanese: "今いいですか。",
      kana: "いまいいですか。",
      vietnamese: "Bây giờ nói chuyện có được không?",
      english: "Bây giờ nói chuyện có được không?",
      type: "main",
      example: "今いいですか。少し相談したいです。\nIma ii desu ka. Sukoshi soudan shitai desu.\nBây giờ có tiện không ạ? Tôi muốn trao đổi một chút."
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | ef435ed8cf856b4c
    {
      japanese: "ガスサービスセンター",
      kana: "ガスサービスセンター",
      vietnamese: "trung tâm dịch vụ ga",
      english: "trung tâm dịch vụ ga",
      type: "supplementary",
      example: "ガスサービスセンターに電話します。\nGasu saabisu sentaa ni denwa shimasu.\nTôi gọi điện cho trung tâm dịch vụ ga."
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | 178c534ed643e669
    {
      japanese: "ガスレンジ",
      kana: "ガスレンジ",
      vietnamese: "bếp ga",
      english: "bếp ga",
      type: "supplementary",
      example: "ガスレンジの具合が悪いです。\nGasu renji no guai ga warui desu.\nTình trạng bếp ga không tốt."
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | 6db0759c13c65071
    {
      japanese: "具合",
      kana: "ぐあい",
      vietnamese: "trạng thái, tình hình, tình trạng sức khỏe",
      english: "trạng thái, tình hình, tình trạng sức khỏe",
      type: "supplementary",
      example: "体の具合はどうですか。\nKarada no guai wa dou desu ka.\nTình trạng cơ thể của bạn thế nào?"
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | d01b306d98035330
    {
      japanese: "申し訳ありません",
      kana: "もうしわけありません",
      vietnamese: "xin lỗi, rất xin lỗi",
      english: "xin lỗi, rất xin lỗi",
      type: "supplementary",
      example: "申し訳ありません。すぐ行きます。\nMoushiwake arimasen. Sugu ikimasu.\nRất xin lỗi. Tôi sẽ đi ngay."
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | be8b21c3d29be106
    {
      japanese: "どちら様でしょうか。",
      kana: "どちらさまでしょうか。",
      vietnamese: "Ai đấy ạ?",
      english: "Ai đấy ạ?",
      type: "supplementary",
      example: "失礼ですが、どちら様でしょうか。\nShitsurei desu ga, dochira-sama deshou ka.\nXin lỗi, cho hỏi ai đấy ạ?"
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | c0e5a4c5c94de027
    {
      japanese: "お待たせしました",
      kana: "おまたせしました",
      vietnamese: "xin lỗi vì đã để anh/chị chờ",
      english: "xin lỗi vì đã để anh/chị chờ",
      type: "supplementary",
      example: "お待たせしました。こちらへどうぞ。\nO-matase shimashita. Kochira e douzo.\nXin lỗi vì đã để anh/chị chờ. Xin mời đi lối này."
    },
    // source: review_tu_vung_bai_46.md | 2. Từ vựng hội thoại | 0e844441ff377a5e
    {
      japanese: "向かいます",
      kana: "むかいます",
      vietnamese: "hướng đến, đi về phía",
      english: "hướng đến, đi về phía",
      type: "supplementary",
      example: "今、そちらへ向かっています。\nIma, sochira e mukatte imasu.\nBây giờ tôi đang đi đến chỗ anh/chị."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | 81a70dffc21636eb
    {
      japanese: "ついています",
      kana: "ついています",
      vietnamese: "may mắn; đang gắn/kèm theo",
      english: "may mắn; đang gắn/kèm theo",
      type: "supplementary",
      example: "今日はついています。\nKyou wa tsuite imasu.\nHôm nay tôi may mắn."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | a9a6ad5902334bad
    {
      japanese: "床",
      kana: "ゆか",
      vietnamese: "sàn nhà",
      english: "sàn nhà",
      type: "supplementary",
      example: "床がぬれています。\nYuka ga nurete imasu.\nSàn nhà đang bị ướt."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | 08742d58e2a12ec7
    {
      japanese: "転びます",
      kana: "ころびます",
      vietnamese: "ngã",
      english: "ngã",
      type: "supplementary",
      example: "雨の日に道で転びました。\nAme no hi ni michi de korobimashita.\nTôi đã ngã trên đường vào ngày mưa."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | 4eb10d2e21963b9e
    {
      japanese: "ベル",
      kana: "ベル",
      vietnamese: "chuông cửa, chuông",
      english: "chuông cửa, chuông",
      type: "supplementary",
      example: "ベルが鳴りました。\nBeru ga narimashita.\nChuông đã reo."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | c61326e16b2d98df
    {
      japanese: "鳴ります",
      kana: "なります",
      vietnamese: "reo, kêu",
      english: "reo, kêu",
      type: "supplementary",
      example: "電話が鳴っています。\nDenwa ga natte imasu.\nĐiện thoại đang reo."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | baf711765fd4e44c
    {
      japanese: "慌てて",
      kana: "あわてて",
      vietnamese: "vội vàng, hoảng hốt",
      english: "vội vàng, hoảng hốt",
      type: "supplementary",
      example: "慌てて家を出ました。\nAwatete ie o demashita.\nTôi vội vàng ra khỏi nhà."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | a44e60cc31f29b35
    {
      japanese: "順番に",
      kana: "じゅんばんに",
      vietnamese: "theo thứ tự",
      english: "theo thứ tự",
      type: "supplementary",
      example: "順番に名前を言ってください。\nJunban ni namae o itte kudasai.\nHãy nói tên theo thứ tự."
    },
    // source: review_tu_vung_bai_46.md | 3. Từ vựng đọc hiểu | d0afdd78630cdc87
    {
      japanese: "出来事",
      kana: "できごと",
      vietnamese: "sự việc, chuyện xảy ra",
      english: "sự việc, chuyện xảy ra",
      type: "supplementary",
      example: "昨日の出来事を話します。\nKinou no dekigoto o hanashimasu.\nTôi kể về sự việc hôm qua."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | e13f5fc8c74fdc0a
    {
      japanese: "人に物を渡します",
      kana: "人に物を渡します",
      vietnamese: "đưa đồ cho ai",
      english: "đưa đồ cho ai",
      type: "supplementary",
      example: "Người nhận đi với に / ni, đồ vật đi với を / o."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | d651c4380372a65d
    {
      japanese: "バスが出ます",
      kana: "バスが出ます",
      vietnamese: "xe buýt xuất phát/chạy",
      english: "xe buýt xuất phát/chạy",
      type: "supplementary",
      example: "Chủ ngữ là phương tiện, thường dùng が / ga."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | cc866970cb9d81b3
    {
      japanese: "荷物が届きます",
      kana: "荷物が届きます",
      vietnamese: "gói hàng được gửi đến",
      english: "gói hàng được gửi đến",
      type: "supplementary",
      example: "Dùng khi đồ/hàng đến nơi người nhận."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 2b144d7ee75e43f1
    {
      japanese: "大学に入学します",
      kana: "大学に入学します",
      vietnamese: "nhập học vào đại học",
      english: "nhập học vào đại học",
      type: "supplementary",
      example: "Nơi nhập học dùng に / ni."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 0153df1043102c0b
    {
      japanese: "大学を卒業します",
      kana: "大学を卒業します",
      vietnamese: "tốt nghiệp đại học",
      english: "tốt nghiệp đại học",
      type: "supplementary",
      example: "Nơi rời khỏi/tốt nghiệp dùng を / o."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 4150b6cb62735417
    {
      japanese: "パンを焼きます",
      kana: "パンを焼きます",
      vietnamese: "nướng bánh mì",
      english: "nướng bánh mì",
      type: "supplementary",
      example: "Người làm hành động nướng."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | e362ed504b15218c
    {
      japanese: "パンが焼けます",
      kana: "パンが焼けます",
      vietnamese: "bánh mì được nướng/chín",
      english: "bánh mì được nướng/chín",
      type: "supplementary",
      example: "Tự nhấn vào trạng thái bánh đã chín."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 049d38a1a4a4abf5
    {
      japanese: "留守です",
      kana: "留守です",
      vietnamese: "vắng nhà",
      english: "vắng nhà",
      type: "supplementary",
      example: "Hay dùng khi nghe điện thoại hoặc có người đến nhà."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | ed1de3e88ce9aa90
    {
      japanese: "宅配便で送ります",
      kana: "宅配便で送ります",
      vietnamese: "gửi bằng dịch vụ giao hàng",
      english: "gửi bằng dịch vụ giao hàng",
      type: "supplementary",
      example: "Phương tiện/cách thức dùng で / de."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 970ec501aceb741b
    {
      japanese: "原因は〜です",
      kana: "原因は〜です",
      vietnamese: "nguyên nhân là...",
      english: "nguyên nhân là...",
      type: "supplementary",
      example: "Dùng để giải thích lý do của sự việc."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 32606c5261a9cd99
    {
      japanese: "こちらへどうぞ",
      kana: "こちらへどうぞ",
      vietnamese: "xin mời đi lối này",
      english: "xin mời đi lối này",
      type: "supplementary",
      example: "Cách nói lịch sự trong hướng dẫn khách."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 8e325c2bcf3ef989
    {
      japanese: "今いいですか",
      kana: "今いいですか",
      vietnamese: "bây giờ có tiện không",
      english: "bây giờ có tiện không",
      type: "supplementary",
      example: "Câu mở đầu lịch sự khi muốn nói chuyện."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 982a09f3960a3e3e
    {
      japanese: "お待たせしました",
      kana: "お待たせしました",
      vietnamese: "xin lỗi vì đã để chờ",
      english: "xin lỗi vì đã để chờ",
      type: "supplementary",
      example: "Dùng trong dịch vụ, công sở, giao tiếp lịch sự."
    },
    // source: review_tu_vung_bai_46.md | 4. Cụm cần nhớ | 8cd86d332a59ed66
    {
      japanese: "そちらへ向かっています",
      kana: "そちらへ向かっています",
      vietnamese: "đang đi đến chỗ anh/chị",
      english: "đang đi đến chỗ anh/chị",
      type: "supplementary",
      example: "Hay dùng khi báo mình đang trên đường đến."
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 8faad48d9273616c
    {
      japanese: "渡",
      kana: "ト / to",
      vietnamese: "Độ — đưa qua, giao cho",
      english: "đưa qua, giao cho",
      type: "kanji",
      example: "渡します / watashimasu"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 596e28123cdd4d44
    {
      japanese: "帰",
      kana: "キ / ki",
      vietnamese: "Quy — về, trở về",
      english: "về, trở về",
      type: "kanji",
      example: "帰って来ます / kaette kimasu"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | b8d8141310081d06
    {
      japanese: "来",
      kana: "ライ / rai",
      vietnamese: "Lai — đến",
      english: "đến",
      type: "kanji",
      example: "帰って来ます / kaette kimasu"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | ca66a23a5d00ad17
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra, xuất phát",
      english: "ra, xuất phát",
      type: "kanji",
      example: "出ます / demasu"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 383064e78e00ef31
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào",
      english: "vào",
      type: "kanji",
      example: "入学します / nyuugaku shimasu"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | a2dcba61587bf020
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "入学します / nyuugaku shimasu, 大学 / daigaku"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 5b8b2254a3395a93
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大学 / daigaku"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 6025108fb1f40677
    {
      japanese: "半",
      kana: "ハン / han",
      vietnamese: "Bán — một nửa",
      english: "một nửa",
      type: "kanji",
      example: "半年 / hantoshi"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 6d9a6b34b5bb310c
    {
      japanese: "年",
      kana: "ネン / nen",
      vietnamese: "Niên — năm, tuổi",
      english: "năm, tuổi",
      type: "kanji",
      example: "半年 / hantoshi"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 91e5c69b1504900d
    {
      japanese: "今",
      kana: "コン / kon, キン / kin",
      vietnamese: "Kim — bây giờ",
      english: "bây giờ",
      type: "kanji",
      example: "今 / ima"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 2170bcd8f05fcedb
    {
      japanese: "待",
      kana: "タイ / tai",
      vietnamese: "Đãi — chờ",
      english: "chờ",
      type: "kanji",
      example: "お待たせしました / o-matase shimashita"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 3a916eecf0ed3e42
    {
      japanese: "合",
      kana: "ゴウ / gou, ガッ / ga",
      vietnamese: "Hợp — hợp, khớp",
      english: "hợp, khớp",
      type: "kanji",
      example: "具合 / guai"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 95298c735b4669b2
    {
      japanese: "所",
      kana: "ショ / sho",
      vietnamese: "Sở — nơi, chỗ",
      english: "nơi, chỗ",
      type: "kanji",
      example: "〜の所 / ~no tokoro"
    },
    // source: review_tu_vung_bai_46.md | 5. Kanji N5–N4 cần học kỹ | 4ed01ed16144cc65
    {
      japanese: "事",
      kana: "ジ / ji, ズ / zu",
      vietnamese: "Sự — việc, sự việc",
      english: "việc, sự việc",
      type: "kanji",
      example: "出来事 / dekigoto"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0520121a77c8259f
    {
      japanese: "渡す",
      kana: "わた.す / watasu",
      vietnamese: "Độ — 渡 = đưa qua, giao",
      english: "渡 = đưa qua, giao",
      type: "kanji",
      example: "渡す"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 47683940eb18e065
    {
      japanese: "渡る",
      kana: "わた.る / wataru",
      vietnamese: "Độ — 渡 = qua, vượt qua",
      english: "渡 = qua, vượt qua",
      type: "kanji",
      example: "渡る"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 96b8b925a6f00bf1
    {
      japanese: "帰る",
      kana: "かえ.る / kaeru",
      vietnamese: "Quy — 帰 = trở về",
      english: "帰 = trở về",
      type: "kanji",
      example: "帰る"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 39700feb95853509
    {
      japanese: "帰国",
      kana: "キ / ki",
      vietnamese: "Quy — 帰 = trở về; 国 = nước",
      english: "帰 = trở về; 国 = nước",
      type: "kanji",
      example: "帰国"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 087a301459ec5499
    {
      japanese: "来年",
      kana: "ライ / rai",
      vietnamese: "Lai — 来 = đến; 年 = năm",
      english: "来 = đến; 年 = năm",
      type: "kanji",
      example: "来年"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 766ad765f95b97fc
    {
      japanese: "出来ます",
      kana: "き / ki",
      vietnamese: "Lai — 出 = ra; 来 = đến/thành",
      english: "出 = ra; 来 = đến/thành",
      type: "kanji",
      example: "出来ます"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bfade6347786493a
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra, xuất",
      english: "出 = ra, xuất",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4cc73f7041901301
    {
      japanese: "出発",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — 出 = xuất; 発 = phát",
      english: "出 = xuất; 発 = phát",
      type: "kanji",
      example: "出発"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b336f35f9265bd0a
    {
      japanese: "入学",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — 入 = vào; 学 = học",
      english: "入 = vào; 学 = học",
      type: "kanji",
      example: "入学"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2162808483264e45
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = vào",
      english: "入 = vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4f770238ff58315a
    {
      japanese: "学生",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 生 = sinh",
      english: "学 = học; 生 = sinh",
      type: "kanji",
      example: "学生"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 49e8cf0e1daad73e
    {
      japanese: "大学",
      kana: "ガク / gaku",
      vietnamese: "Học — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 13a45a0d7f130c61
    {
      japanese: "大学",
      kana: "ダイ / dai",
      vietnamese: "Đại — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 848540f4c781413d
    {
      japanese: "大きい",
      kana: "おお.きい / ookii",
      vietnamese: "Đại — 大 = to, lớn",
      english: "大 = to, lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 759316045b527901
    {
      japanese: "半年",
      kana: "ハン / han",
      vietnamese: "Bán — 半 = nửa; 年 = năm",
      english: "半 = nửa; 年 = năm",
      type: "kanji",
      example: "半年"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 34fdbffe6efd9d06
    {
      japanese: "半分",
      kana: "ハン / han",
      vietnamese: "Bán — 半 = nửa; 分 = phần",
      english: "半 = nửa; 分 = phần",
      type: "kanji",
      example: "半分"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c066ee480e37179b
    {
      japanese: "今年",
      kana: "とし / toshi",
      vietnamese: "Niên — 今 = nay; 年 = năm",
      english: "今 = nay; 年 = năm",
      type: "kanji",
      example: "今年"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | dfc79e84b9ee2b3b
    {
      japanese: "来年",
      kana: "ネン / nen",
      vietnamese: "Niên — 来 = tới; 年 = năm",
      english: "来 = tới; 年 = năm",
      type: "kanji",
      example: "来年"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 1280a8b4d43176ac
    {
      japanese: "今",
      kana: "いま / ima",
      vietnamese: "Kim — 今 = bây giờ",
      english: "今 = bây giờ",
      type: "kanji",
      example: "今"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ccec837df8363b3c
    {
      japanese: "今日",
      kana: "きょう / kyou",
      vietnamese: "Kim — 今 = nay; 日 = ngày",
      english: "今 = nay; 日 = ngày",
      type: "kanji",
      example: "今日"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ca16b1e993c56333
    {
      japanese: "待つ",
      kana: "ま.つ / matsu",
      vietnamese: "Đãi — 待 = chờ",
      english: "待 = chờ",
      type: "kanji",
      example: "待つ"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7ad434f9c2713c83
    {
      japanese: "招待",
      kana: "タイ / tai",
      vietnamese: "Đãi — 招 = mời; 待 = đãi/chờ",
      english: "招 = mời; 待 = đãi/chờ",
      type: "kanji",
      example: "招待"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4bac092734f26a53
    {
      japanese: "合う",
      kana: "あ.う / au",
      vietnamese: "Hợp — 合 = hợp, khớp",
      english: "合 = hợp, khớp",
      type: "kanji",
      example: "合う"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f0a792670fb07930
    {
      japanese: "場合",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — 場 = nơi; 合 = hợp",
      english: "場 = nơi; 合 = hợp",
      type: "kanji",
      example: "場合"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 21699d47a6ad2f60
    {
      japanese: "所",
      kana: "ところ / tokoro",
      vietnamese: "Sở — 所 = nơi, chỗ",
      english: "所 = nơi, chỗ",
      type: "kanji",
      example: "所"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | eb3795071df3a5d0
    {
      japanese: "場所",
      kana: "ショ / sho",
      vietnamese: "Sở — 場 = nơi; 所 = chỗ",
      english: "場 = nơi; 所 = chỗ",
      type: "kanji",
      example: "場所"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 947538f539ef5fa9
    {
      japanese: "事",
      kana: "こと / koto",
      vietnamese: "Sự — 事 = việc",
      english: "事 = việc",
      type: "kanji",
      example: "事"
    },
    // source: review_tu_vung_bai_46.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 65cb437dd05c896a
    {
      japanese: "仕事",
      kana: "しごと / shigoto",
      vietnamese: "Sự — 仕 = làm; 事 = việc",
      english: "仕 = làm; 事 = việc",
      type: "kanji",
      example: "仕事"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: 'お/ご～になる',
      vietnamese: 'kính ngữ cho động từ',
      english: 'honorific verb form',
      type: 'main',
      explanation: 'Dùng để tôn trọng người nghe hoặc người được nhắc đến. お dùng với từ Hán-Nhật, ご dùng với từ gốc Hán. Cấu trúc: お + động từ dạng masu (bỏ ます) + になる.',
      examples: [
        {
          japanese: '先生はもうお帰りになりましたか。',
          vietnamese: 'Thầy đã về chưa ạ?',
          english: 'Has the teacher already gone home?',
          type: 'main'
        },
        {
          japanese: '部長は資料をご覧になりました。',
          vietnamese: 'Trưởng phòng đã xem tài liệu.',
          english: 'The department manager looked at the documents.',
          type: 'main'
        },
        {
          japanese: '社長は何時にお着きになりますか。',
          vietnamese: 'Giám đốc sẽ đến lúc mấy giờ ạ?',
          english: 'What time will the president arrive?',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'お/ご～する/いたす',
      vietnamese: 'khiêm ngữ cho động từ',
      english: 'humble verb form',
      type: 'main',
      explanation: 'Dùng để hạ thấp hành động của mình, thể hiện sự lịch sự với người nghe. いたす lịch sự hơn する. Cấu trúc: お + động từ dạng masu (bỏ ます) + する/いたす.',
      examples: [
        {
          japanese: '私がお送りいたします。',
          vietnamese: 'Tôi sẽ gửi (cho anh/chị).',
          english: 'I will send it (to you).',
          type: 'main'
        },
        {
          japanese: 'ご案内いたします。',
          vietnamese: 'Tôi sẽ hướng dẫn (anh/chị).',
          english: 'I will guide you.',
          type: 'main'
        },
        {
          japanese: '後ほどお電話いたします。',
          vietnamese: 'Tôi sẽ gọi điện sau.',
          english: 'I will call you later.',
          type: 'main'
        },
        {
          japanese: 'お待ちしております。',
          vietnamese: 'Tôi đang chờ (anh/chị).',
          english: 'I am waiting (for you).',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ていらっしゃる',
      vietnamese: 'kính ngữ cho động từ ている',
      english: 'honorific form of ～ている',
      type: 'main',
      explanation: 'Dạng kính ngữ của ～ている, dùng để tôn trọng người đang thực hiện hành động. Cấu trúc: động từ て-form + いらっしゃる.',
      examples: [
        {
          japanese: '先生は今会議室にいらっしゃいます。',
          vietnamese: 'Hiện tại thầy đang ở phòng họp.',
          english: 'The teacher is in the meeting room now.',
          type: 'main'
        },
        {
          japanese: '部長はもうお帰りになっていらっしゃいます。',
          vietnamese: 'Trưởng phòng đã về rồi ạ.',
          english: 'The department manager has already gone home.',
          type: 'main'
        },
        {
          japanese: 'お客様がお待ちになっていらっしゃいます。',
          vietnamese: 'Khách hàng đang chờ ạ.',
          english: 'The customer is waiting.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ております',
      vietnamese: 'khiêm ngữ cho động từ ている',
      english: 'humble form of ～ている',
      type: 'main',
      explanation: 'Dạng khiêm ngữ của ～ている, dùng để hạ thấp hành động của mình. Cấu trúc: động từ て-form + おります.',
      examples: [
        {
          japanese: '田中と申しております。',
          vietnamese: 'Tôi tên là Tanaka.',
          english: 'My name is Tanaka.',
          type: 'main'
        },
        {
          japanese: 'いつもお世話になっております。',
          vietnamese: 'Cảm ơn đã luôn giúp đỡ.',
          english: 'Thank you for your continued support.',
          type: 'main'
        },
        {
          japanese: 'ロビーでお待ちしております。',
          vietnamese: 'Tôi đang chờ ở sảnh.',
          english: 'I am waiting in the lobby.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～させていただく',
      vietnamese: 'cho phép tôi làm...',
      english: 'let me... / allow me to...',
      type: 'main',
      explanation: 'Dùng để xin phép một cách rất lịch sự khi muốn làm điều gì đó. Cấu trúc: động từ causative (させる) + ていただく.',
      examples: [
        {
          japanese: '説明させていただきます。',
          vietnamese: 'Cho phép tôi giải thích.',
          english: 'Allow me to explain.',
          type: 'main'
        },
        {
          japanese: '確認させていただいてもよろしいですか。',
          vietnamese: 'Tôi có thể xác nhận được không ạ?',
          english: 'May I confirm?',
          type: 'main'
        },
        {
          japanese: '休ませていただきます。',
          vietnamese: 'Cho phép tôi xin nghỉ.',
          english: 'Please let me take a day off.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'お/ご～ください',
      vietnamese: 'xin hãy... (lịch sự)',
      english: 'please... (polite)',
      type: 'additional',
      explanation: 'Cách nói lịch sự hơn của ～てください. お dùng với từ Hán-Nhật, ご dùng với từ gốc Hán.',
      examples: [
        {
          japanese: 'こちらでお待ちください。',
          vietnamese: 'Xin hãy đợi ở đây.',
          english: 'Please wait here.',
          type: 'main'
        },
        {
          japanese: 'ご確認ください。',
          vietnamese: 'Xin hãy xác nhận.',
          english: 'Please confirm.',
          type: 'main'
        },
        {
          japanese: 'お座りください。',
          vietnamese: 'Xin mời ngồi.',
          english: 'Please have a seat.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ていただけますか',
      vietnamese: 'bạn có thể... được không? (rất lịch sự)',
      english: 'could you...? (very polite)',
      type: 'additional',
      explanation: 'Cách nhờ vả rất lịch sự. Lịch sự hơn ～てくれますか hoặc ～てもらえますか.',
      examples: [
        {
          japanese: 'ここにサインしていただけますか。',
          vietnamese: 'Anh/chị có thể ký tại đây được không ạ?',
          english: 'Could you sign here?',
          type: 'main'
        },
        {
          japanese: '明日までに提出していただけますか。',
          vietnamese: 'Anh/chị có thể nộp trước ngày mai được không ạ?',
          english: 'Could you submit it by tomorrow?',
          type: 'main'
        },
        {
          japanese: 'もう一度説明していただけますか。',
          vietnamese: 'Anh/chị có thể giải thích lại một lần nữa được không ạ?',
          english: 'Could you explain it again?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～てくださいませんか',
      vietnamese: 'anh/chị có thể... không? (lịch sự)',
      english: 'would you...? (polite)',
      type: 'additional',
      explanation: 'Cách nhờ vả lịch sự, mềm mỏng hơn ～てください. Dạng phủ định của ～てくださいますか.',
      examples: [
        {
          japanese: 'ちょっと手伝ってくださいませんか。',
          vietnamese: 'Anh/chị có thể giúp một chút được không ạ?',
          english: 'Would you help me a little?',
          type: 'main'
        },
        {
          japanese: '資料を見せてくださいませんか。',
          vietnamese: 'Anh/chị có thể cho tôi xem tài liệu được không ạ?',
          english: 'Would you show me the documents?',
          type: 'main'
        }
      ]
    }
  ]
};
