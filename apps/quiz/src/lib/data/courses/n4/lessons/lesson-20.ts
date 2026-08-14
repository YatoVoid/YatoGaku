/**
 * N4 Core Lessons — Lesson 20: 伝聞と引用 (Reported Speech & Quotations)
 * Focus: ~と言う、~そうだ、~らしい、quotation and hearsay expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_20_DATA: LessonData = {
  lessonNumber: 20,
  title: '伝聞と引用 (Hearsay and Quotation)',
  vocabulary: [
    // Main Vocabulary - Communication Verbs
    {
      japanese: '言う',
      kana: 'いう',
      vietnamese: 'nói',
      english: 'to say',
      type: 'main',
      example: '彼は明日来ると言いました。'
    },
    {
      japanese: '話す',
      kana: 'はなす',
      vietnamese: 'nói chuyện',
      english: 'to speak, to talk',
      type: 'main',
      example: '先生が話していました。'
    },
    {
      japanese: '伝える',
      kana: 'つたえる',
      vietnamese: 'truyền đạt',
      english: 'to convey, to tell',
      type: 'main',
      example: 'メッセージを伝えました。'
    },
    {
      japanese: '聞く',
      kana: 'きく',
      vietnamese: 'nghe',
      english: 'to hear, to ask',
      type: 'main',
      example: '噂を聞きました。'
    },
    {
      japanese: '尋ねる',
      kana: 'たずねる',
      vietnamese: 'hỏi',
      english: 'to ask, to inquire',
      type: 'main',
      example: '道を尋ねました。'
    },
    {
      japanese: '答える',
      kana: 'こたえる',
      vietnamese: 'trả lời',
      english: 'to answer',
      type: 'main',
      example: '質問に答えました。'
    },
    {
      japanese: '教える',
      kana: 'おしえる',
      vietnamese: 'dạy, cho biết',
      english: 'to teach, to tell',
      type: 'main',
      example: '住所を教えてください。'
    },
    {
      japanese: '知らせる',
      kana: 'しらせる',
      vietnamese: 'thông báo',
      english: 'to inform, to notify',
      type: 'main',
      example: '結果を知らせます。'
    },
    {
      japanese: '報告する',
      kana: 'ほうこくする',
      vietnamese: 'báo cáo',
      english: 'to report',
      type: 'main',
      example: '上司に報告しました。'
    },
    {
      japanese: '連絡する',
      kana: 'れんらくする',
      vietnamese: 'liên lạc',
      english: 'to contact',
      type: 'main',
      example: '後で連絡します。'
    },

    // Main Vocabulary - Information & News
    {
      japanese: '情報',
      kana: 'じょうほう',
      vietnamese: 'thông tin',
      english: 'information',
      type: 'main',
      example: '新しい情報があります。'
    },
    {
      japanese: 'ニュース',
      kana: 'ニュース',
      vietnamese: 'tin tức',
      english: 'news',
      type: 'main',
      example: 'ニュースで聞きました。'
    },
    {
      japanese: '噂',
      kana: 'うわさ',
      vietnamese: 'tin đồn',
      english: 'rumor',
      type: 'main',
      example: '変な噂を聞きました。'
    },
    {
      japanese: '知らせ',
      kana: 'しらせ',
      vietnamese: 'tin tức, thông báo',
      english: 'news, notice',
      type: 'main',
      example: 'いい知らせがあります。'
    },
    {
      japanese: '通知',
      kana: 'つうち',
      vietnamese: 'thông báo',
      english: 'notification',
      type: 'main',
      example: '通知が届きました。'
    },
    {
      japanese: 'お知らせ',
      kana: 'おしらせ',
      vietnamese: 'thông báo',
      english: 'announcement',
      type: 'main',
      example: '大切なお知らせがあります。'
    },
    {
      japanese: '伝言',
      kana: 'でんごん',
      vietnamese: 'lời nhắn',
      english: 'message',
      type: 'main',
      example: '伝言をお願いします。'
    },
    {
      japanese: 'メッセージ',
      kana: 'メッセージ',
      vietnamese: 'tin nhắn',
      english: 'message',
      type: 'main',
      example: 'メッセージを送りました。'
    },
    {
      japanese: '連絡',
      kana: 'れんらく',
      vietnamese: 'liên lạc',
      english: 'contact, communication',
      type: 'main',
      example: '連絡を待っています。'
    },
    {
      japanese: '返事',
      kana: 'へんじ',
      vietnamese: 'trả lời',
      english: 'reply, answer',
      type: 'main',
      example: '返事をください。'
    },

    // Main Vocabulary - Expressions & Statements
    {
      japanese: '意見',
      kana: 'いけん',
      vietnamese: 'ý kiến',
      english: 'opinion',
      type: 'main',
      example: 'あなたの意見を聞かせてください。'
    },
    {
      japanese: '感想',
      kana: 'かんそう',
      vietnamese: 'cảm nhận',
      english: 'impression, feeling',
      type: 'main',
      example: '映画の感想を聞きました。'
    },
    {
      japanese: '考え',
      kana: 'かんがえ',
      vietnamese: 'suy nghĩ',
      english: 'thought, idea',
      type: 'main',
      example: 'あなたの考えは何ですか。'
    },
    {
      japanese: '評判',
      kana: 'ひょうばん',
      vietnamese: 'đánh giá',
      english: 'reputation, review',
      type: 'main',
      example: 'このレストランは評判がいいです。'
    },
    {
      japanese: '印象',
      kana: 'いんしょう',
      vietnamese: 'ấn tượng',
      english: 'impression',
      type: 'main',
      example: '第一印象はとても大切です。'
    },
    {
      japanese: '様子',
      kana: 'ようす',
      vietnamese: 'tình hình, vẻ',
      english: 'appearance, state',
      type: 'main',
      example: '様子がおかしいです。'
    },
    {
      japanese: '雰囲気',
      kana: 'ふんいき',
      vietnamese: 'không khí',
      english: 'atmosphere',
      type: 'main',
      example: 'いい雰囲気です。'
    },
    {
      japanese: '態度',
      kana: 'たいど',
      vietnamese: 'thái độ',
      english: 'attitude',
      type: 'main',
      example: '彼の態度が変わりました。'
    },
    {
      japanese: '表情',
      kana: 'ひょうじょう',
      vietnamese: 'biểu cảm',
      english: 'expression, look',
      type: 'main',
      example: '悲しい表情をしています。'
    },
    {
      japanese: '気持ち',
      kana: 'きもち',
      vietnamese: 'tâm trạng',
      english: 'feeling, mood',
      type: 'main',
      example: 'あなたの気持ちが分かります。'
    },

    // Additional Vocabulary - More Communication
    {
      japanese: '説明する',
      kana: 'せつめいする',
      vietnamese: 'giải thích',
      english: 'to explain',
      type: 'additional',
      example: 'もう一度説明してください。'
    },
    {
      japanese: '紹介する',
      kana: 'しょうかいする',
      vietnamese: 'giới thiệu',
      english: 'to introduce',
      type: 'additional',
      example: '友達を紹介します。'
    },
    {
      japanese: '述べる',
      kana: 'のべる',
      vietnamese: 'trình bày',
      english: 'to state, to mention',
      type: 'additional',
      example: '意見を述べました。'
    },
    {
      japanese: '主張する',
      kana: 'しゅちょうする',
      vietnamese: 'khẳng định',
      english: 'to assert, to insist',
      type: 'additional',
      example: '自分の意見を主張します。'
    },
    {
      japanese: '提案する',
      kana: 'ていあんする',
      vietnamese: 'đề xuất',
      english: 'to propose',
      type: 'additional',
      example: '新しい計画を提案しました。'
    },
    {
      japanese: '助言する',
      kana: 'じょげんする',
      vietnamese: 'khuyên bảo',
      english: 'to advise',
      type: 'additional',
      example: '先生に助言をもらいました。'
    },
    {
      japanese: '忠告する',
      kana: 'ちゅうこくする',
      vietnamese: 'cảnh cáo',
      english: 'to warn, to advise',
      type: 'additional',
      example: '友達に忠告しました。'
    },
    {
      japanese: '確認する',
      kana: 'かくにんする',
      vietnamese: 'xác nhận',
      english: 'to confirm',
      type: 'additional',
      example: '予約を確認しました。'
    },
    {
      japanese: '否定する',
      kana: 'ひていする',
      vietnamese: 'phủ định',
      english: 'to deny',
      type: 'additional',
      example: '彼はそれを否定しました。'
    },
    {
      japanese: '承認する',
      kana: 'しょうにんする',
      vietnamese: 'chấp nhận',
      english: 'to approve',
      type: 'additional',
      example: '計画が承認されました。'
    },

    // Additional Vocabulary - Sources & Evidence
    {
      japanese: '情報源',
      kana: 'じょうほうげん',
      vietnamese: 'nguồn thông tin',
      english: 'source of information',
      type: 'additional',
      example: '確かな情報源です。'
    },
    {
      japanese: '証拠',
      kana: 'しょうこ',
      vietnamese: 'chứng cứ',
      english: 'evidence, proof',
      type: 'additional',
      example: '証拠がありません。'
    },
    {
      japanese: '根拠',
      kana: 'こんきょ',
      vietnamese: 'căn cứ',
      english: 'basis, grounds',
      type: 'additional',
      example: '根拠のない話です。'
    },
    {
      japanese: '理由',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'additional',
      example: '理由を教えてください。'
    },
    {
      japanese: '原因',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause',
      type: 'additional',
      example: '事故の原因を調べています。'
    },
    {
      japanese: '結果',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result',
      type: 'additional',
      example: '試験の結果が出ました。'
    },
    {
      japanese: '事実',
      kana: 'じじつ',
      vietnamese: 'sự thật',
      english: 'fact',
      type: 'additional',
      example: 'これは事実です。'
    },
    {
      japanese: '真実',
      kana: 'しんじつ',
      vietnamese: 'sự thật',
      english: 'truth',
      type: 'additional',
      example: '真実を知りたいです。'
    },
    {
      japanese: '嘘',
      kana: 'うそ',
      vietnamese: 'dối',
      english: 'lie',
      type: 'additional',
      example: '嘘をつかないでください。'
    },
    {
      japanese: '本当',
      kana: 'ほんとう',
      vietnamese: 'thật',
      english: 'truth, reality',
      type: 'additional',
      example: '本当の話です。'
    },

    // Supplementary Vocabulary - Appearance & Impression
    {
      japanese: 'そう',
      kana: 'そう',
      vietnamese: 'có vẻ',
      english: 'seem, appear',
      type: 'supplementary',
      example: '難しそうです。'
    },
    {
      japanese: 'らしい',
      kana: 'らしい',
      vietnamese: 'nghe nói',
      english: 'seems, I heard',
      type: 'supplementary',
      example: '明日は雨らしいです。'
    },
    {
      japanese: 'みたい',
      kana: 'みたい',
      vietnamese: 'giống như',
      english: 'like, similar to',
      type: 'supplementary',
      example: '学生みたいです。'
    },
    {
      japanese: 'よう',
      kana: 'よう',
      vietnamese: 'như, giống',
      english: 'like, as if',
      type: 'supplementary',
      example: '夢のようです。'
    },
    {
      japanese: '見える',
      kana: 'みえる',
      vietnamese: 'trông có vẻ',
      english: 'to look, to appear',
      type: 'supplementary',
      example: '若く見えます。'
    },
    {
      japanese: '聞こえる',
      kana: 'きこえる',
      vietnamese: 'nghe có vẻ',
      english: 'to sound, to be heard',
      type: 'supplementary',
      example: '音が聞こえます。'
    },
    {
      japanese: '感じる',
      kana: 'かんじる',
      vietnamese: 'cảm thấy',
      english: 'to feel',
      type: 'supplementary',
      example: '寒さを感じます。'
    },
    {
      japanese: '思える',
      kana: 'おもえる',
      vietnamese: 'có thể nghĩ',
      english: 'to seem, to appear',
      type: 'supplementary',
      example: '正しいと思えます。'
    },
    {
      japanese: '信じる',
      kana: 'しんじる',
      vietnamese: 'tin',
      english: 'to believe',
      type: 'supplementary',
      example: 'あなたを信じます。'
    },
    {
      japanese: '疑う',
      kana: 'うたがう',
      vietnamese: 'nghi ngờ',
      english: 'to doubt',
      type: 'supplementary',
      example: '彼の話を疑っています。'
    },

    // Supplementary Vocabulary - Certainty & Uncertainty
    {
      japanese: '確か',
      kana: 'たしか',
      vietnamese: 'chắc chắn',
      english: 'certain, sure',
      type: 'supplementary',
      example: '確かに聞きました。'
    },
    {
      japanese: '多分',
      kana: 'たぶん',
      vietnamese: 'có lẽ',
      english: 'probably',
      type: 'supplementary',
      example: '多分明日は雨です。'
    },
    {
      japanese: 'きっと',
      kana: 'きっと',
      vietnamese: 'chắc chắn',
      english: 'surely, certainly',
      type: 'supplementary',
      example: 'きっと来ます。'
    },
    {
      japanese: 'もしかしたら',
      kana: 'もしかしたら',
      vietnamese: 'có lẽ, có thể',
      english: 'perhaps, maybe',
      type: 'supplementary',
      example: 'もしかしたら遅れるかもしれません。'
    },
    {
      japanese: 'おそらく',
      kana: 'おそらく',
      vietnamese: 'có lẽ',
      english: 'probably',
      type: 'supplementary',
      example: 'おそらく正しいでしょう。'
    },
    {
      japanese: 'まさか',
      kana: 'まさか',
      vietnamese: 'không lẽ',
      english: 'surely not',
      type: 'supplementary',
      example: 'まさか本当ではないでしょう。'
    },
    {
      japanese: '本当に',
      kana: 'ほんとうに',
      vietnamese: 'thật sự',
      english: 'really, truly',
      type: 'supplementary',
      example: '本当にありがとうございます。'
    },
    {
      japanese: '実は',
      kana: 'じつは',
      vietnamese: 'thực ra',
      english: 'actually, in fact',
      type: 'supplementary',
      example: '実は、昨日会いました。'
    },
    {
      japanese: 'やはり',
      kana: 'やはり',
      vietnamese: 'quả nhiên',
      english: 'as expected',
      type: 'supplementary',
      example: 'やはり難しかったです。'
    },
    {
      japanese: 'どうやら',
      kana: 'どうやら',
      vietnamese: 'có vẻ như',
      english: 'apparently, it seems',
      type: 'supplementary',
      example: 'どうやら雨が降りそうです。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | e9655d81b08727fd
    {
      japanese: "信じます",
      kana: "しんじます",
      vietnamese: "tin, tin tưởng",
      english: "tin, tin tưởng",
      type: "main",
      example: "友達を信じます。\nTomodachi o shinjimasu.\nTôi tin bạn bè."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 83d2e1b67d9f0f1f
    {
      japanese: "キャンセルします",
      kana: "キャンセルします",
      vietnamese: "hủy bỏ, hủy",
      english: "hủy bỏ, hủy",
      type: "main",
      example: "予約をキャンセルします。\nYoyaku o kyanseru shimasu.\nTôi hủy đặt chỗ."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 78f7b9eefcc55d80
    {
      japanese: "知らせます",
      kana: "しらせます",
      vietnamese: "thông báo, báo cho biết",
      english: "thông báo, báo cho biết",
      type: "main",
      example: "先生に予定を知らせます。\nSensei ni yotei o shirasemasu.\nTôi báo lịch trình cho thầy/cô."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 12f8c3cfbd1a55b6
    {
      japanese: "保証書",
      kana: "ほしょうしょ",
      vietnamese: "giấy bảo hành",
      english: "giấy bảo hành",
      type: "main",
      example: "保証書をなくしました。\nHoshousho o nakushimashita.\nTôi đã làm mất giấy bảo hành."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 73878e072f8b8e38
    {
      japanese: "領収書",
      kana: "りょうしゅうしょ",
      vietnamese: "hóa đơn, biên lai",
      english: "hóa đơn, biên lai",
      type: "main",
      example: "領収書をください。\nRyoushuusho o kudasai.\nLàm ơn cho tôi hóa đơn/biên lai."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 12be539a97ac09e2
    {
      japanese: "キャンプ",
      kana: "キャンプ",
      vietnamese: "trại, cắm trại",
      english: "trại, cắm trại",
      type: "main",
      example: "夏休みにキャンプへ行きます。\nNatsuyasumi ni kyanpu e ikimasu.\nKỳ nghỉ hè tôi đi cắm trại."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 30d091d46f4a0fb6
    {
      japanese: "中止",
      kana: "ちゅうし",
      vietnamese: "dừng, đình chỉ, hủy tổ chức",
      english: "dừng, đình chỉ, hủy tổ chức",
      type: "main",
      example: "雨で試合は中止になりました。\nAme de shiai wa chuushi ni narimashita.\nTrận đấu đã bị hủy do mưa."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 97ee2f7738d21c5b
    {
      japanese: "点",
      kana: "てん",
      vietnamese: "điểm",
      english: "điểm",
      type: "main",
      example: "テストで九十点を取りました。\nTesuto de kyuujuu-ten o torimashita.\nTôi đã đạt 90 điểm trong bài kiểm tra."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | bb9cab747ee727d3
    {
      japanese: "梅",
      kana: "うめ",
      vietnamese: "hoa mơ, cây mơ",
      english: "hoa mơ, cây mơ",
      type: "main",
      example: "梅の花が咲きました。\nUme no hana ga sakimashita.\nHoa mơ đã nở."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | c2b27b6cf3d68e73
    {
      japanese: "110番",
      kana: "110ばん",
      vietnamese: "số 110, số gọi cảnh sát ở Nhật",
      english: "số 110, số gọi cảnh sát ở Nhật",
      type: "main",
      example: "事故のとき、110番に電話します。\nJiko no toki, hyaku-touban ni denwa shimasu.\nKhi có tai nạn/sự cố, gọi số 110."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | 1c1a4b4f864c8a35
    {
      japanese: "119番",
      kana: "119ばん",
      vietnamese: "số 119, số báo cháy/cấp cứu ở Nhật",
      english: "số 119, số báo cháy/cấp cứu ở Nhật",
      type: "main",
      example: "火事のとき、119番に電話します。\nKaji no toki, hyaku-juukyuu-ban ni denwa shimasu.\nKhi có hỏa hoạn, gọi số 119."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | aa9c2f5a9548da3d
    {
      japanese: "急に",
      kana: "きゅうに",
      vietnamese: "đột nhiên, bất ngờ",
      english: "đột nhiên, bất ngờ",
      type: "main",
      example: "急に雨が降りました。\nKyuu ni ame ga furimashita.\nTrời đột nhiên mưa."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | f2a136602701d920
    {
      japanese: "無理に",
      kana: "むりに",
      vietnamese: "cố làm một cách quá sức/không hợp lý",
      english: "cố làm một cách quá sức/không hợp lý",
      type: "main",
      example: "無理に食べなくてもいいです。\nMuri ni tabenakute mo ii desu.\nKhông cần cố ăn đâu."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | e2fa0e82c924bb49
    {
      japanese: "楽しみにしています",
      kana: "たのしみにしています",
      vietnamese: "đang mong đợi, rất háo hức",
      english: "đang mong đợi, rất háo hức",
      type: "main",
      example: "旅行を楽しみにしています。\nRyokou o tanoshimi ni shite imasu.\nTôi đang rất mong chuyến du lịch."
    },
    // source: review_tu_vung_bai_45.md | 1. Từ vựng chính | c578be8f4ca8f727
    {
      japanese: "以上です",
      kana: "いじょうです",
      vietnamese: "xin hết, trên đây là hết",
      english: "xin hết, trên đây là hết",
      type: "main",
      example: "発表は以上です。\nHappyou wa ijou desu.\nPhần phát biểu của tôi xin hết."
    },
    // source: review_tu_vung_bai_45.md | 2. Từ vựng hội thoại | aff6d886b251806b
    {
      japanese: "係員",
      kana: "かかりいん",
      vietnamese: "nhân viên phụ trách",
      english: "nhân viên phụ trách",
      type: "supplementary",
      example: "係員に道を聞きます。\nKakariin ni michi o kikimasu.\nTôi hỏi đường nhân viên phụ trách."
    },
    // source: review_tu_vung_bai_45.md | 2. Từ vựng hội thoại | a0dfeb4f6ed13f6b
    {
      japanese: "コース",
      kana: "コース",
      vietnamese: "đường chạy, lộ trình, khóa học",
      english: "đường chạy, lộ trình, khóa học",
      type: "supplementary",
      example: "マラソンのコースを確認します。\nMarason no koosu o kakunin shimasu.\nTôi xác nhận đường chạy marathon."
    },
    // source: review_tu_vung_bai_45.md | 2. Từ vựng hội thoại | 37a8f61aede0de66
    {
      japanese: "スタート",
      kana: "スタート",
      vietnamese: "xuất phát, bắt đầu",
      english: "xuất phát, bắt đầu",
      type: "supplementary",
      example: "スタートは九時です。\nSutaato wa ku-ji desu.\nGiờ xuất phát là 9 giờ."
    },
    // source: review_tu_vung_bai_45.md | 2. Từ vựng hội thoại | 565fe3d81152f9bf
    {
      japanese: "一位",
      kana: "いちい",
      vietnamese: "vị trí thứ nhất, giải nhất",
      english: "vị trí thứ nhất, giải nhất",
      type: "supplementary",
      example: "彼は一位になりました。\nKare wa ichii ni narimashita.\nAnh ấy đã đạt giải nhất."
    },
    // source: review_tu_vung_bai_45.md | 2. Từ vựng hội thoại | 7b7a10ce9f04e5ab
    {
      japanese: "優勝します",
      kana: "ゆうしょうします",
      vietnamese: "vô địch, đoạt giải nhất",
      english: "vô địch, đoạt giải nhất",
      type: "supplementary",
      example: "チームは大会で優勝しました。\nChiimu wa taikai de yuushou shimashita.\nĐội đã vô địch trong đại hội/cuộc thi."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | 2737b30e88561aa9
    {
      japanese: "悩み",
      kana: "なやみ",
      vietnamese: "nỗi lo, trăn trở, phiền muộn",
      english: "nỗi lo, trăn trở, phiền muộn",
      type: "supplementary",
      example: "悩みがあります。\nNayami ga arimasu.\nTôi có nỗi lo."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | 01693adab18add1e
    {
      japanese: "目覚まし時計",
      kana: "めざましどけい",
      vietnamese: "đồng hồ báo thức",
      english: "đồng hồ báo thức",
      type: "supplementary",
      example: "目覚まし時計をセットします。\nMezamashi-dokei o setto shimasu.\nTôi cài đồng hồ báo thức."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | 3c7e679eec6cc966
    {
      japanese: "目が覚めます",
      kana: "めがさめます",
      vietnamese: "tỉnh giấc",
      english: "tỉnh giấc",
      type: "supplementary",
      example: "六時に目が覚めました。\nRoku-ji ni me ga samemashita.\nTôi tỉnh giấc lúc 6 giờ."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | 86f501db468472d9
    {
      japanese: "大学生",
      kana: "だいがくせい",
      vietnamese: "sinh viên đại học",
      english: "sinh viên đại học",
      type: "supplementary",
      example: "姉は大学生です。\nAne wa daigakusei desu.\nChị gái tôi là sinh viên đại học."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | 235f043a96312996
    {
      japanese: "回答",
      kana: "かいとう",
      vietnamese: "câu trả lời, lời giải",
      english: "câu trả lời, lời giải",
      type: "supplementary",
      example: "回答を書いてください。\nKaitou o kaite kudasai.\nHãy viết câu trả lời."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | f63a13103cb25d65
    {
      japanese: "鳴ります",
      kana: "なります",
      vietnamese: "reo, kêu, phát ra âm thanh",
      english: "reo, kêu, phát ra âm thanh",
      type: "supplementary",
      example: "ベルが鳴りました。\nBeru ga narimashita.\nChuông đã reo."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | fe993dfa75fd4b91
    {
      japanese: "セットします",
      kana: "セットします",
      vietnamese: "cài đặt, đặt sẵn",
      english: "cài đặt, đặt sẵn",
      type: "supplementary",
      example: "アラームをセットします。\nAraamu o setto shimasu.\nTôi cài báo thức."
    },
    // source: review_tu_vung_bai_45.md | 3. Từ vựng đọc hiểu | 2ca6ff035fbf580a
    {
      japanese: "それでも",
      kana: "それでも",
      vietnamese: "tuy vậy, mặc dù thế",
      english: "tuy vậy, mặc dù thế",
      type: "supplementary",
      example: "眠いです。それでも勉強します。\nNemui desu. Sore demo benkyou shimasu.\nTôi buồn ngủ. Dù vậy, tôi vẫn học."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 5bdf4876443b11ab
    {
      japanese: "人を信じます",
      kana: "人を信じます",
      vietnamese: "tin người khác",
      english: "tin người khác",
      type: "supplementary",
      example: "信じます / shinjimasu thường đi với trợ từ を / o."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 868d88ff25f4b086
    {
      japanese: "予約をキャンセルします",
      kana: "予約をキャンセルします",
      vietnamese: "hủy đặt chỗ",
      english: "hủy đặt chỗ",
      type: "supplementary",
      example: "Dùng khi hủy lịch hẹn, khách sạn, vé, lớp học."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 03822e7cddff24d6
    {
      japanese: "人に知らせます",
      kana: "人に知らせます",
      vietnamese: "báo cho ai biết",
      english: "báo cho ai biết",
      type: "supplementary",
      example: "Người nhận thông tin dùng に / ni."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | b70df230d782b4f3
    {
      japanese: "予定を知らせます",
      kana: "予定を知らせます",
      vietnamese: "thông báo lịch trình",
      english: "thông báo lịch trình",
      type: "supplementary",
      example: "Nội dung được thông báo dùng を / o."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 3661d50cd9ec7d9f
    {
      japanese: "領収書をください",
      kana: "領収書をください",
      vietnamese: "làm ơn cho tôi hóa đơn/biên lai",
      english: "làm ơn cho tôi hóa đơn/biên lai",
      type: "supplementary",
      example: "Câu rất hay dùng khi mua đồ, thanh toán."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 5481115573723960
    {
      japanese: "〜は中止になりました",
      kana: "〜は中止になりました",
      vietnamese: "~ đã bị hủy/dừng",
      english: "~ đã bị hủy/dừng",
      type: "supplementary",
      example: "Thường dùng với sự kiện, trận đấu, chuyến đi."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 058557e4f673325a
    {
      japanese: "110番に電話します",
      kana: "110番に電話します",
      vietnamese: "gọi số 110",
      english: "gọi số 110",
      type: "supplementary",
      example: "110 ở Nhật thường dùng khi cần cảnh sát."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 273bf885e49a8b38
    {
      japanese: "119番に電話します",
      kana: "119番に電話します",
      vietnamese: "gọi số 119",
      english: "gọi số 119",
      type: "supplementary",
      example: "119 ở Nhật thường dùng khi cháy/cấp cứu."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | a268c85d4441498e
    {
      japanese: "急に雨が降ります",
      kana: "急に雨が降ります",
      vietnamese: "trời đột nhiên mưa",
      english: "trời đột nhiên mưa",
      type: "supplementary",
      example: "急に / kyuu ni nhấn mạnh việc xảy ra bất ngờ."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | a5ff197ecc6e12aa
    {
      japanese: "無理に〜しません",
      kana: "無理に〜しません",
      vietnamese: "không cố làm ~",
      english: "không cố làm ~",
      type: "supplementary",
      example: "Dùng khi không ép bản thân/người khác làm quá sức."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | e4923b8815ba63ba
    {
      japanese: "〜を楽しみにしています",
      kana: "〜を楽しみにしています",
      vietnamese: "đang mong đợi ~",
      english: "đang mong đợi ~",
      type: "supplementary",
      example: "Mẫu cố định, trước を / o là điều mình mong chờ."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 390295a1b2c0efcb
    {
      japanese: "発表は以上です",
      kana: "発表は以上です",
      vietnamese: "bài phát biểu xin hết",
      english: "bài phát biểu xin hết",
      type: "supplementary",
      example: "Dùng khi kết thúc thuyết trình/phát biểu."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | f4bbae49cb9834af
    {
      japanese: "目覚まし時計をセットします",
      kana: "目覚まし時計をセットします",
      vietnamese: "cài đồng hồ báo thức",
      english: "cài đồng hồ báo thức",
      type: "supplementary",
      example: "セットします / setto shimasu = cài đặt."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 50f7571e5e61a656
    {
      japanese: "目が覚めます",
      kana: "目が覚めます",
      vietnamese: "tỉnh giấc",
      english: "tỉnh giấc",
      type: "supplementary",
      example: "Không dùng を / o; cụm cố định là 目が覚めます / me ga samemasu."
    },
    // source: review_tu_vung_bai_45.md | 4. Cụm cần nhớ | 4e6951306ed67bc4
    {
      japanese: "ベルが鳴ります",
      kana: "ベルが鳴ります",
      vietnamese: "chuông reo",
      english: "chuông reo",
      type: "supplementary",
      example: "Chủ ngữ âm thanh/chuông dùng が / ga."
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 3504e7c8e3879f27
    {
      japanese: "信",
      kana: "シン / shin",
      vietnamese: "Tín — tin, niềm tin",
      english: "tin, niềm tin",
      type: "kanji",
      example: "信じます / shinjimasu"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 48e24391e0b7cf9c
    {
      japanese: "知",
      kana: "チ / chi",
      vietnamese: "Tri — biết, thông báo",
      english: "biết, thông báo",
      type: "kanji",
      example: "知らせます / shirasemasu"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 6235ed38ea387d4f
    {
      japanese: "中",
      kana: "チュウ / chuu",
      vietnamese: "Trung — giữa, bên trong, đang",
      english: "giữa, bên trong, đang",
      type: "kanji",
      example: "中止 / chuushi"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | e0b6dae794e583cd
    {
      japanese: "止",
      kana: "シ / shi",
      vietnamese: "Chỉ — dừng, ngừng",
      english: "dừng, ngừng",
      type: "kanji",
      example: "中止 / chuushi"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | c1bc702d536c3f7b
    {
      japanese: "点",
      kana: "テン / ten",
      vietnamese: "Điểm — điểm, chấm",
      english: "điểm, chấm",
      type: "kanji",
      example: "点 / ten"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | c92da0f898faf1fa
    {
      japanese: "急",
      kana: "キュウ / kyuu",
      vietnamese: "Cấp — gấp, đột ngột",
      english: "gấp, đột ngột",
      type: "kanji",
      example: "急に / kyuu ni"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 47b3497b22bc75d8
    {
      japanese: "無",
      kana: "ム / mu, ブ / bu",
      vietnamese: "Vô — không, không có",
      english: "không, không có",
      type: "kanji",
      example: "無理に / muri ni"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 8e253f8bc16aca17
    {
      japanese: "理",
      kana: "リ / ri",
      vietnamese: "Lí — lý lẽ, lý do",
      english: "lý lẽ, lý do",
      type: "kanji",
      example: "無理に / muri ni"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 941cc5ee0a529c43
    {
      japanese: "楽",
      kana: "ガク / gaku, ラク / raku",
      vietnamese: "Lạc / Nhạc — vui, dễ chịu, âm nhạc",
      english: "vui, dễ chịu, âm nhạc",
      type: "kanji",
      example: "楽しみにしています / tanoshimi ni shite imasu"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | c37bb365ad4817ce
    {
      japanese: "上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — trên, lên",
      english: "trên, lên",
      type: "kanji",
      example: "以上です / ijou desu"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | c0c97b5a9f48b148
    {
      japanese: "目",
      kana: "モク / moku",
      vietnamese: "Mục — mắt, mục",
      english: "mắt, mục",
      type: "kanji",
      example: "目が覚めます / me ga samemasu"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | e5de67310760080c
    {
      japanese: "時",
      kana: "ジ / ji",
      vietnamese: "Thời — thời gian, giờ",
      english: "thời gian, giờ",
      type: "kanji",
      example: "時計 / tokei"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 1cc8f20ec86377dc
    {
      japanese: "計",
      kana: "ケイ / kei",
      vietnamese: "Kế — đo, tính toán",
      english: "đo, tính toán",
      type: "kanji",
      example: "時計 / tokei"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | ca56cd71ef1006c8
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大学生 / daigakusei"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 92f86115999087e2
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "大学生 / daigakusei"
    },
    // source: review_tu_vung_bai_45.md | 5. Kanji N5–N4 cần học kỹ | 0643ccbc9349becf
    {
      japanese: "生",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Sinh — sinh, sống, học sinh",
      english: "sinh, sống, học sinh",
      type: "kanji",
      example: "大学生 / daigakusei"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cd7baa5abdcbf403
    {
      japanese: "信じる",
      kana: "しん.じる / shinjiru",
      vietnamese: "Tín — 信 = tin",
      english: "信 = tin",
      type: "kanji",
      example: "信じる"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 444d6beebdb58f5b
    {
      japanese: "信用",
      kana: "シン / shin",
      vietnamese: "Tín — 信 = tin; 用 = dùng, tác dụng",
      english: "信 = tin; 用 = dùng, tác dụng",
      type: "kanji",
      example: "信用"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d69b723ad6cab02e
    {
      japanese: "知る",
      kana: "し.る / shiru",
      vietnamese: "Tri — 知 = biết",
      english: "知 = biết",
      type: "kanji",
      example: "知る"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 62eb1dd1edf20d05
    {
      japanese: "知人",
      kana: "チ / chi",
      vietnamese: "Tri — 知 = biết; 人 = người",
      english: "知 = biết; 人 = người",
      type: "kanji",
      example: "知人"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e10b39b77e39e7a8
    {
      japanese: "中",
      kana: "なか / naka",
      vietnamese: "Trung — 中 = trong, giữa",
      english: "中 = trong, giữa",
      type: "kanji",
      example: "中"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d2dfcc654b5af6bc
    {
      japanese: "中止",
      kana: "チュウ / chuu",
      vietnamese: "Trung — 中 = giữa; 止 = dừng",
      english: "中 = giữa; 止 = dừng",
      type: "kanji",
      example: "中止"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 1e7a4b7f70911d7e
    {
      japanese: "止まる",
      kana: "と.まる / tomaru",
      vietnamese: "Chỉ — 止 = dừng",
      english: "止 = dừng",
      type: "kanji",
      example: "止まる"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 80d7c38f39ff94a2
    {
      japanese: "禁止",
      kana: "シ / shi",
      vietnamese: "Chỉ — 禁 = cấm; 止 = dừng",
      english: "禁 = cấm; 止 = dừng",
      type: "kanji",
      example: "禁止"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 659d169b7f058616
    {
      japanese: "急に",
      kana: "キュウ / kyuu",
      vietnamese: "Cấp — 急 = gấp",
      english: "急 = gấp",
      type: "kanji",
      example: "急に"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7adac38c4e3c3f10
    {
      japanese: "急行",
      kana: "キュウ / kyuu",
      vietnamese: "Cấp — 急 = gấp; 行 = đi",
      english: "急 = gấp; 行 = đi",
      type: "kanji",
      example: "急行"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 08417414e4870549
    {
      japanese: "無理",
      kana: "ム / mu",
      vietnamese: "Vô — 無 = không; 理 = lý lẽ",
      english: "無 = không; 理 = lý lẽ",
      type: "kanji",
      example: "無理"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c223adbfa4ef2d96
    {
      japanese: "理由",
      kana: "リ / ri",
      vietnamese: "Lí — 理 = lý lẽ; 由 = nguyên do",
      english: "理 = lý lẽ; 由 = nguyên do",
      type: "kanji",
      example: "理由"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5aa3072a9e10b167
    {
      japanese: "楽しい",
      kana: "たの.しい / tanoshii",
      vietnamese: "Lạc / Nhạc — 楽 = vui",
      english: "楽 = vui",
      type: "kanji",
      example: "楽しい"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0316e144d6011223
    {
      japanese: "音楽",
      kana: "ガク / gaku",
      vietnamese: "Lạc / Nhạc — 音 = âm thanh; 楽 = nhạc",
      english: "音 = âm thanh; 楽 = nhạc",
      type: "kanji",
      example: "音楽"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8364609ef6a2e006
    {
      japanese: "上",
      kana: "うえ / ue",
      vietnamese: "Thượng — 上 = trên",
      english: "上 = trên",
      type: "kanji",
      example: "上"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b56aead510feb306
    {
      japanese: "以上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — 以 = lấy làm mốc; 上 = trên",
      english: "以 = lấy làm mốc; 上 = trên",
      type: "kanji",
      example: "以上"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cbcd81f0c2c39a2d
    {
      japanese: "目",
      kana: "め / me",
      vietnamese: "Mục — 目 = mắt",
      english: "目 = mắt",
      type: "kanji",
      example: "目"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 15c01ce288d2f40f
    {
      japanese: "時計",
      kana: "ジ / ji",
      vietnamese: "Thời — 時 = giờ, thời gian; 計 = đo",
      english: "時 = giờ, thời gian; 計 = đo",
      type: "kanji",
      example: "時計"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 20e97323294412c2
    {
      japanese: "大学",
      kana: "ダイ / dai",
      vietnamese: "Đại — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8452be5b4f2f09f0
    {
      japanese: "学生",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 生 = người sinh/học sinh",
      english: "学 = học; 生 = người sinh/học sinh",
      type: "kanji",
      example: "学生"
    },
    // source: review_tu_vung_bai_45.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e6d6219ce867ceb0
    {
      japanese: "先生",
      kana: "セイ / sei",
      vietnamese: "Sinh — 先 = trước; 生 = sinh",
      english: "先 = trước; 生 = sinh",
      type: "kanji",
      example: "先生"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～と言う',
      vietnamese: 'nói rằng ~',
      english: 'to say that',
      type: 'main',
      explanation: 'Dùng để trích dẫn lời nói trực tiếp hoặc gián tiếp. Dùng với câu thể thường + と言う/と言った/と言っている. Có thể dùng って trong văn nói thân mật thay cho と言う.',
      examples: [
        {
          japanese: '田中さんは明日来ると言いました。',
          vietnamese: 'Anh Tanaka nói rằng ngày mai sẽ đến.',
          english: 'Mr. Tanaka said that he would come tomorrow.',
          type: 'main'
        },
        {
          japanese: '先生は「頑張ってください」と言いました。',
          vietnamese: 'Thầy giáo nói "Hãy cố gắng".',
          english: 'The teacher said "Please do your best".',
          type: 'main'
        },
        {
          japanese: '彼は何も言いませんでした。',
          vietnamese: 'Anh ấy không nói gì cả.',
          english: 'He didn\'t say anything.',
          type: 'main'
        },
        {
          japanese: '友達が面白いって言っていました。',
          vietnamese: 'Bạn tôi nói là thú vị đấy.',
          english: 'My friend said it was interesting.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～そうだ (伝聞)',
      vietnamese: 'nghe nói ~',
      english: 'I heard that, they say that',
      type: 'main',
      explanation: 'Diễn tả thông tin nghe được từ người khác (truyền văn). Dùng với câu thể thường + そうだ. い-adj: おいしいそうだ, な-adj/Noun: 元気だそうだ. Khác với そうだ biểu thị vẻ ngoài.',
      examples: [
        {
          japanese: '明日は雨だそうです。',
          vietnamese: 'Nghe nói ngày mai trời mưa.',
          english: 'I heard it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '田中さんは病気だそうです。',
          vietnamese: 'Nghe nói anh Tanaka bị ốm.',
          english: 'I heard Mr. Tanaka is sick.',
          type: 'main'
        },
        {
          japanese: 'この店は美味しいそうです。',
          vietnamese: 'Nghe nói quán này ngon.',
          english: 'I heard this restaurant is delicious.',
          type: 'main'
        },
        {
          japanese: '彼は来月結婚するそうです。',
          vietnamese: 'Nghe nói anh ấy kết hôn tháng sau.',
          english: 'I heard he\'s getting married next month.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～らしい',
      vietnamese: 'có vẻ ~, nghe nói ~',
      english: 'it seems, apparently',
      type: 'main',
      explanation: 'Diễn tả suy đoán dựa trên thông tin nghe được hoặc quan sát. Dùng với câu thể thường + らしい. い-adj: 高いらしい, な-adj: 便利らしい, Noun: 学生らしい. Mang ý không chắc chắn 100%.',
      examples: [
        {
          japanese: '明日は雨らしいです。',
          vietnamese: 'Có vẻ ngày mai trời mưa.',
          english: 'It seems it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は学生らしいです。',
          vietnamese: 'Có vẻ anh ấy là sinh viên.',
          english: 'He seems to be a student.',
          type: 'main'
        },
        {
          japanese: 'この店は美味しいらしいです。',
          vietnamese: 'Nghe nói quán này ngon.',
          english: 'I hear this restaurant is delicious.',
          type: 'main'
        },
        {
          japanese: '彼女は日本人らしいです。',
          vietnamese: 'Có vẻ cô ấy là người Nhật.',
          english: 'She appears to be Japanese.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～そうだ (様態)',
      vietnamese: 'trông có vẻ ~',
      english: 'to look, to seem',
      type: 'main',
      explanation: 'Diễn tả vẻ ngoài dựa trên quan sát trực tiếp. い-adj: bỏ い + そう (おいしそう), な-adj: bỏ な + そう (元気そう). Không dùng với いい (→よさそう), ない (→なさそう). Khác với そうだ truyền văn.',
      examples: [
        {
          japanese: 'このケーキは美味しそうです。',
          vietnamese: 'Chiếc bánh này trông ngon.',
          english: 'This cake looks delicious.',
          type: 'main'
        },
        {
          japanese: '雨が降りそうです。',
          vietnamese: 'Trời trông có vẻ sắp mưa.',
          english: 'It looks like it\'s going to rain.',
          type: 'main'
        },
        {
          japanese: '彼は忙しそうです。',
          vietnamese: 'Anh ấy trông có vẻ bận.',
          english: 'He looks busy.',
          type: 'main'
        },
        {
          japanese: 'この問題は難しそうです。',
          vietnamese: 'Bài toán này trông có vẻ khó.',
          english: 'This problem looks difficult.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～みたいだ',
      vietnamese: 'giống như ~, có vẻ ~',
      english: 'to be like, to seem',
      type: 'main',
      explanation: 'Dùng để so sánh hoặc suy đoán. Dùng với câu thể thường + みたいだ. Noun の + みたいだ. Thân mật hơn ようだ. Có thể diễn tả: 1) So sánh, 2) Suy đoán.',
      examples: [
        {
          japanese: '彼は学生みたいです。',
          vietnamese: 'Anh ấy có vẻ là sinh viên.',
          english: 'He seems to be a student.',
          type: 'main'
        },
        {
          japanese: '雨が降ったみたいです。',
          vietnamese: 'Có vẻ trời đã mưa rồi.',
          english: 'It seems it has rained.',
          type: 'main'
        },
        {
          japanese: '夢みたいです。',
          vietnamese: 'Giống như giấc mơ.',
          english: 'It\'s like a dream.',
          type: 'main'
        },
        {
          japanese: '彼女は怒っているみたいです。',
          vietnamese: 'Có vẻ cô ấy đang giận.',
          english: 'She seems to be angry.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ようだ',
      vietnamese: 'có vẻ ~, dường như ~',
      english: 'to seem, to appear',
      type: 'main',
      explanation: 'Dùng để diễn tả suy đoán hoặc so sánh. Dùng với câu thể thường + ようだ. Noun の + ようだ. Lịch sự hơn みたいだ. Có thể diễn tả: 1) Suy đoán dựa trên quan sát, 2) So sánh.',
      examples: [
        {
          japanese: '彼は学生のようです。',
          vietnamese: 'Anh ấy có vẻ là sinh viên.',
          english: 'He appears to be a student.',
          type: 'main'
        },
        {
          japanese: '雨が降ったようです。',
          vietnamese: 'Có vẻ trời đã mưa.',
          english: 'It appears it has rained.',
          type: 'main'
        },
        {
          japanese: '夢のようです。',
          vietnamese: 'Như giấc mơ.',
          english: 'It\'s like a dream.',
          type: 'main'
        },
        {
          japanese: '彼女は疲れているようです。',
          vietnamese: 'Có vẻ cô ấy đang mệt.',
          english: 'She seems to be tired.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～かもしれない',
      vietnamese: 'có thể ~, có lẽ ~',
      english: 'might, may, perhaps',
      type: 'additional',
      explanation: 'Diễn tả khả năng không chắc chắn (khoảng 50%). Dùng với câu thể thường + かもしれない. な-adj/Noun có thể bỏ だ trước かもしれない. Lịch sự: かもしれません.',
      examples: [
        {
          japanese: '明日は雨かもしれません。',
          vietnamese: 'Ngày mai có thể trời mưa.',
          english: 'It might rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は来ないかもしれません。',
          vietnamese: 'Có lẽ anh ấy không đến.',
          english: 'He might not come.',
          type: 'main'
        },
        {
          japanese: 'これは間違いかもしれません。',
          vietnamese: 'Cái này có thể là sai.',
          english: 'This might be a mistake.',
          type: 'main'
        },
        {
          japanese: '彼女は学生かもしれません。',
          vietnamese: 'Có thể cô ấy là sinh viên.',
          english: 'She might be a student.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～と聞く',
      vietnamese: 'nghe nói ~',
      english: 'to hear that',
      type: 'additional',
      explanation: 'Dùng để truyền đạt thông tin đã nghe. Dùng với câu thể thường + と聞く/と聞いた/と聞いている. Tương tự そうだ nhưng rõ ràng hơn về nguồn thông tin.',
      examples: [
        {
          japanese: '田中さんは来月結婚すると聞きました。',
          vietnamese: 'Tôi nghe nói anh Tanaka kết hôn tháng sau.',
          english: 'I heard that Mr. Tanaka is getting married next month.',
          type: 'main'
        },
        {
          japanese: 'この店は美味しいと聞いています。',
          vietnamese: 'Tôi nghe nói quán này ngon.',
          english: 'I\'ve heard this restaurant is good.',
          type: 'main'
        },
        {
          japanese: '彼は優秀だと聞きました。',
          vietnamese: 'Tôi nghe nói anh ấy giỏi.',
          english: 'I heard he is excellent.',
          type: 'main'
        },
        {
          japanese: '明日は休みだと聞きました。',
          vietnamese: 'Tôi nghe nói ngày mai nghỉ.',
          english: 'I heard tomorrow is a holiday.',
          type: 'additional'
        }
      ]
    }
  ]
};
