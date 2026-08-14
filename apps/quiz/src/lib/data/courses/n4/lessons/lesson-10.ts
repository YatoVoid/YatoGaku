/**
 * N4 Core Lessons — Lesson 10: Honorific Expressions
 * Focus: 尊敬語・謙譲語 (honorific and humble language basics)
 */

import type { LessonData } from '$lib/types';

export const LESSON_10_DATA: LessonData = {
  lessonNumber: 10,
  title: '敬語 (Honorific Language)',
  vocabulary: [
    // Special honorific verbs
    {
      japanese: 'いらっしゃる',
      kana: 'いらっしゃる',
      vietnamese: 'đến, đi, có mặt (tôn kính)',
      english: 'to come, to go, to be (honorific)',
      type: 'main',
      example: '先生はいらっしゃいますか。'
    },
    {
      japanese: 'おっしゃる',
      kana: 'おっしゃる',
      vietnamese: 'nói (tôn kính)',
      english: 'to say (honorific)',
      type: 'main',
      example: '社長がおっしゃいました。'
    },
    {
      japanese: 'なさる',
      kana: 'なさる',
      vietnamese: 'làm (tôn kính)',
      english: 'to do (honorific)',
      type: 'main',
      example: '何をなさいますか。'
    },
    {
      japanese: 'ご覧になる',
      kana: 'ごらんになる',
      vietnamese: 'xem (tôn kính)',
      english: 'to see, to look at (honorific)',
      type: 'main',
      example: 'もうご覧になりましたか。'
    },
    {
      japanese: '召し上がる',
      kana: 'めしあがる',
      vietnamese: 'ăn, uống (tôn kính)',
      english: 'to eat, to drink (honorific)',
      type: 'main',
      example: 'コーヒーを召し上がりますか。'
    },
    {
      japanese: 'お休みになる',
      kana: 'おやすみになる',
      vietnamese: 'nghỉ ngơi (tôn kính)',
      english: 'to rest (honorific)',
      type: 'main',
      example: 'もうお休みになりましたか。'
    },
    {
      japanese: 'ご存じ',
      kana: 'ごぞんじ',
      vietnamese: 'biết (tôn kính)',
      english: 'to know (honorific)',
      type: 'main',
      example: 'この件をご存じですか。'
    },
    {
      japanese: 'くださる',
      kana: 'くださる',
      vietnamese: 'cho (tôn kính)',
      english: 'to give (honorific)',
      type: 'main',
      example: '先生がくださいました。'
    },
    // Special humble verbs
    {
      japanese: '伺う',
      kana: 'うかがう',
      vietnamese: 'đến, hỏi (khiêm tốn)',
      english: 'to visit, to ask (humble)',
      type: 'main',
      example: '明日伺います。'
    },
    {
      japanese: '参る',
      kana: 'まいる',
      vietnamese: 'đi, đến (khiêm tốn)',
      english: 'to go, to come (humble)',
      type: 'main',
      example: '私が参ります。'
    },
    {
      japanese: '申す',
      kana: 'もうす',
      vietnamese: 'nói (khiêm tốn)',
      english: 'to say (humble)',
      type: 'main',
      example: '田中と申します。'
    },
    {
      japanese: '申し上げる',
      kana: 'もうしあげる',
      vietnamese: 'nói (khiêm tốn cao)',
      english: 'to say (humble, formal)',
      type: 'main',
      example: 'お礼を申し上げます。'
    },
    {
      japanese: 'いたす',
      kana: 'いたす',
      vietnamese: 'làm (khiêm tốn)',
      english: 'to do (humble)',
      type: 'main',
      example: 'お手伝いいたします。'
    },
    {
      japanese: '拝見する',
      kana: 'はいけんする',
      vietnamese: 'xem (khiêm tốn)',
      english: 'to see, to look at (humble)',
      type: 'main',
      example: '資料を拝見いたしました。'
    },
    {
      japanese: 'いただく',
      kana: 'いただく',
      vietnamese: 'nhận, ăn, uống (khiêm tốn)',
      english: 'to receive, to eat, to drink (humble)',
      type: 'main',
      example: 'お茶をいただきます。'
    },
    {
      japanese: '承る',
      kana: 'うけたまわる',
      vietnamese: 'nghe, nhận (khiêm tốn)',
      english: 'to hear, to receive (humble)',
      type: 'main',
      example: 'ご注文を承ります。'
    },
    {
      japanese: '存じる',
      kana: 'ぞんじる',
      vietnamese: 'biết (khiêm tốn)',
      english: 'to know (humble)',
      type: 'main',
      example: '存じております。'
    },
    {
      japanese: 'お目にかかる',
      kana: 'おめにかかる',
      vietnamese: 'gặp (khiêm tốn)',
      english: 'to meet (humble)',
      type: 'main',
      example: 'お目にかかれて光栄です。'
    },
    // Honorific prefixes and expressions
    {
      japanese: 'お〜になる',
      kana: 'お〜になる',
      vietnamese: '(tôn kính chung)',
      english: 'honorific form',
      type: 'main',
      example: 'お読みになりますか。'
    },
    {
      japanese: 'お〜する/いたす',
      kana: 'お〜する/いたす',
      vietnamese: '(khiêm tốn chung)',
      english: 'humble form',
      type: 'main',
      example: 'お送りいたします。'
    },
    {
      japanese: 'ご〜になる',
      kana: 'ご〜になる',
      vietnamese: '(tôn kính cho từ Hán)',
      english: 'honorific form (Sino-Japanese)',
      type: 'main',
      example: 'ご利用になりますか。'
    },
    {
      japanese: 'ご〜する/いたす',
      kana: 'ご〜する/いたす',
      vietnamese: '(khiêm tốn cho từ Hán)',
      english: 'humble form (Sino-Japanese)',
      type: 'main',
      example: 'ご案内いたします。'
    },
    // Business and formal nouns
    {
      japanese: 'お客様',
      kana: 'おきゃくさま',
      vietnamese: 'quý khách',
      english: 'customer, guest (honorific)',
      type: 'main',
      example: 'お客様がいらっしゃいました。'
    },
    {
      japanese: 'ご主人',
      kana: 'ごしゅじん',
      vietnamese: 'chủ nhà, chồng (của người khác)',
      english: 'master, husband (of others)',
      type: 'main',
      example: 'ご主人はいらっしゃいますか。'
    },
    {
      japanese: '奥様',
      kana: 'おくさま',
      vietnamese: 'phu nhân, vợ (của người khác)',
      english: 'wife (of others, formal)',
      type: 'main',
      example: '奥様によろしくお伝えください。'
    },
    {
      japanese: 'お嬢様',
      kana: 'おじょうさま',
      vietnamese: 'cô gái, con gái (tôn kính)',
      english: 'young lady, daughter (honorific)',
      type: 'main',
      example: 'お嬢様は元気ですか。'
    },
    {
      japanese: 'ご令息',
      kana: 'ごれいそく',
      vietnamese: 'quý tử (con trai)',
      english: 'son (honorific)',
      type: 'main',
      example: 'ご令息はおいくつですか。'
    },
    {
      japanese: 'お宅',
      kana: 'おたく',
      vietnamese: 'nhà bạn',
      english: 'your house',
      type: 'main',
      example: 'お宅はどちらですか。'
    },
    {
      japanese: 'お名前',
      kana: 'おなまえ',
      vietnamese: 'tên (tôn trọng)',
      english: 'name (respectful)',
      type: 'main',
      example: 'お名前を教えていただけますか。'
    },
    {
      japanese: 'ご住所',
      kana: 'ごじゅうしょ',
      vietnamese: 'địa chỉ (tôn trọng)',
      english: 'address (respectful)',
      type: 'main',
      example: 'ご住所をお願いします。'
    },
    {
      japanese: 'お電話',
      kana: 'おでんわ',
      vietnamese: 'điện thoại (tôn trọng)',
      english: 'telephone (respectful)',
      type: 'main',
      example: 'お電話番号をお願いします。'
    },
    {
      japanese: 'ご連絡',
      kana: 'ごれんらく',
      vietnamese: 'liên lạc (tôn trọng)',
      english: 'contact (respectful)',
      type: 'main',
      example: 'ご連絡をお待ちしております。'
    },
    // Humble forms for self
    {
      japanese: '私ども',
      kana: 'わたくしども',
      vietnamese: 'chúng tôi (khiêm tốn)',
      english: 'we (humble)',
      type: 'main',
      example: '私どもにお任せください。'
    },
    {
      japanese: '弊社',
      kana: 'へいしゃ',
      vietnamese: 'công ty chúng tôi (khiêm tốn)',
      english: 'our company (humble)',
      type: 'main',
      example: '弊社の製品をご覧ください。'
    },
    {
      japanese: '小社',
      kana: 'しょうしゃ',
      vietnamese: 'công ty nhỏ của chúng tôi',
      english: 'our small company (humble)',
      type: 'main',
      example: '小社の商品です。'
    },
    {
      japanese: '粗品',
      kana: 'そしな',
      vietnamese: 'quà nhỏ (khiêm tốn)',
      english: 'small gift (humble)',
      type: 'main',
      example: 'こちらは粗品でございます。'
    },
    {
      japanese: '愚見',
      kana: 'ぐけん',
      vietnamese: 'ý kiến ngu dốt của tôi',
      english: 'my humble opinion',
      type: 'main',
      example: '愚見ですが、申し上げます。'
    },
    // Honorific forms for others
    {
      japanese: '貴社',
      kana: 'きしゃ',
      vietnamese: 'quý công ty',
      english: 'your company (honorific)',
      type: 'main',
      example: '貴社の発展をお祈りします。'
    },
    {
      japanese: '御社',
      kana: 'おんしゃ',
      vietnamese: 'quý công ty (nói)',
      english: 'your company (spoken honorific)',
      type: 'main',
      example: '御社で働きたいです。'
    },
    {
      japanese: 'ご芳名',
      kana: 'ごほうめい',
      vietnamese: 'danh tánh quý',
      english: 'your name (very formal)',
      type: 'main',
      example: 'ご芳名をお書きください。'
    },
    // Additional polite expressions
    {
      japanese: 'でございます',
      kana: 'でございます',
      vietnamese: 'là (trang trọng)',
      english: 'to be (formal)',
      type: 'main',
      example: 'こちらは資料でございます。'
    },
    {
      japanese: 'お待ちしております',
      kana: 'おまちしております',
      vietnamese: 'đang chờ đợi',
      english: 'to be waiting (humble)',
      type: 'main',
      example: 'お返事をお待ちしております。'
    },
    {
      japanese: 'させていただく',
      kana: 'させていただく',
      vietnamese: 'xin phép làm',
      english: 'to humbly do (with permission)',
      type: 'main',
      example: '説明させていただきます。'
    },
    {
      japanese: '失礼いたします',
      kana: 'しつれいいたします',
      vietnamese: 'xin phép',
      english: 'excuse me (formal)',
      type: 'main',
      example: 'それでは失礼いたします。'
    },
    {
      japanese: 'お疲れ様でございます',
      kana: 'おつかれさまでございます',
      vietnamese: 'vất vả rồi (trang trọng)',
      english: 'thank you for your hard work (formal)',
      type: 'main',
      example: 'お疲れ様でございます。'
    },
    {
      japanese: 'ご苦労様です',
      kana: 'ごくろうさまです',
      vietnamese: 'vất vả rồi (dùng cho cấp dưới)',
      english: 'thank you for your trouble (to subordinates)',
      type: 'main',
      example: 'ご苦労様です。'
    },
    {
      japanese: 'お世話になっております',
      kana: 'おせわになっております',
      vietnamese: 'cảm ơn sự giúp đỡ',
      english: 'thank you for your continued support',
      type: 'main',
      example: 'いつもお世話になっております。'
    },
    {
      japanese: 'お忙しいところ',
      kana: 'おいそがしいところ',
      vietnamese: 'mặc dù bận',
      english: 'despite being busy',
      type: 'main',
      example: 'お忙しいところ、ありがとうございます。'
    },
    {
      japanese: 'お手数ですが',
      kana: 'おてすうですが',
      vietnamese: 'xin lỗi làm phiền',
      english: 'sorry to trouble you',
      type: 'main',
      example: 'お手数ですが、お願いします。'
    },
    {
      japanese: 'お手数をおかけします',
      kana: 'おてすうをおかけします',
      vietnamese: 'xin lỗi làm phiền',
      english: 'sorry to trouble you',
      type: 'main',
      example: 'お手数をおかけしますが、お願いします。'
    },
    {
      japanese: 'ご面倒をおかけします',
      kana: 'ごめんどうをおかけします',
      vietnamese: 'xin lỗi làm phiền nhiều',
      english: 'sorry to cause you trouble',
      type: 'main',
      example: 'ご面倒をおかけして申し訳ございません。'
    },
    // Additional expressions
    {
      japanese: 'おられる',
      kana: 'おられる',
      vietnamese: 'có (tôn kính)',
      english: 'to be (honorific)',
      type: 'additional',
      example: '先生はおられますか。'
    },
    {
      japanese: 'お越しになる',
      kana: 'おこしになる',
      vietnamese: 'đến (tôn kính)',
      english: 'to come (honorific)',
      type: 'additional',
      example: 'お越しいただきありがとうございます。'
    },
    {
      japanese: 'お帰りになる',
      kana: 'おかえりになる',
      vietnamese: 'về (tôn kính)',
      english: 'to go home (honorific)',
      type: 'additional',
      example: 'もうお帰りになりますか。'
    },
    {
      japanese: 'お出かけになる',
      kana: 'おでかけになる',
      vietnamese: 'ra ngoài (tôn kính)',
      english: 'to go out (honorific)',
      type: 'additional',
      example: 'どちらへお出かけになりますか。'
    },
    {
      japanese: 'お考えになる',
      kana: 'おかんがえになる',
      vietnamese: 'suy nghĩ (tôn kính)',
      english: 'to think (honorific)',
      type: 'additional',
      example: 'どうお考えになりますか。'
    },
    {
      japanese: 'お決めになる',
      kana: 'おきめになる',
      vietnamese: 'quyết định (tôn kính)',
      english: 'to decide (honorific)',
      type: 'additional',
      example: 'もうお決めになりましたか。'
    },
    {
      japanese: 'お求めになる',
      kana: 'おもとめになる',
      vietnamese: 'mua (tôn kính)',
      english: 'to buy (honorific)',
      type: 'additional',
      example: 'どちらでお求めになりましたか。'
    },
    // Supplementary business expressions
    {
      japanese: '恐れ入ります',
      kana: 'おそれいります',
      vietnamese: 'xin lỗi, cảm ơn (khiêm tốn)',
      english: 'thank you, excuse me (humble)',
      type: 'supplementary',
      example: '恐れ入りますが、お名前を。'
    },
    {
      japanese: '恐縮です',
      kana: 'きょうしゅくです',
      vietnamese: 'xin lỗi, cảm ơn (trang trọng)',
      english: 'thank you, sorry (formal)',
      type: 'supplementary',
      example: 'ご親切に恐縮です。'
    },
    {
      japanese: 'かしこまりました',
      kana: 'かしこまりました',
      vietnamese: 'vâng, tôi hiểu rồi',
      english: 'certainly, I understand (formal)',
      type: 'supplementary',
      example: 'かしこまりました。すぐにご用意いたします。'
    },
    {
      japanese: '承知いたしました',
      kana: 'しょうちいたしました',
      vietnamese: 'tôi đã biết',
      english: 'I understand (humble)',
      type: 'supplementary',
      example: '承知いたしました。'
    },
    {
      japanese: '存じ上げております',
      kana: 'ぞんじあげております',
      vietnamese: 'tôi biết (khiêm tốn cao)',
      english: 'I know (very humble)',
      type: 'supplementary',
      example: 'はい、存じ上げております。'
    },
    {
      japanese: 'よろしくお願いいたします',
      kana: 'よろしくおねがいいたします',
      vietnamese: 'rất mong được làm quen',
      english: 'pleased to meet you (formal)',
      type: 'supplementary',
      example: 'どうぞよろしくお願いいたします。'
    },
    {
      japanese: 'ありがとうございます',
      kana: 'ありがとうございます',
      vietnamese: 'cảm ơn (trang trọng)',
      english: 'thank you (formal)',
      type: 'supplementary',
      example: 'ご協力ありがとうございます。'
    },
    {
      japanese: '申し訳ございません',
      kana: 'もうしわけございません',
      vietnamese: 'xin lỗi (trang trọng)',
      english: 'I\'m sorry (formal)',
      type: 'supplementary',
      example: '申し訳ございません。'
    },
    {
      japanese: 'とんでもございません',
      kana: 'とんでもございません',
      vietnamese: 'không có gì (trang trọng)',
      english: 'not at all (formal)',
      type: 'supplementary',
      example: 'とんでもございません。'
    },
    {
      japanese: 'お待たせいたしました',
      kana: 'おまたせいたしました',
      vietnamese: 'xin lỗi để quý khách chờ đợi',
      english: 'sorry to have kept you waiting (formal)',
      type: 'supplementary',
      example: 'お待たせいたしました。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | d72d8390eb3b6be6
    {
      japanese: "咲きます",
      kana: "さきます",
      vietnamese: "nở hoa",
      english: "nở hoa",
      type: "main",
      example: "桜が咲きます。\nSakura ga sakimasu.\nHoa anh đào nở."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | ce32b166a484d440
    {
      japanese: "変わります",
      kana: "かわります",
      vietnamese: "thay đổi",
      english: "thay đổi",
      type: "main",
      example: "色が変わりました。\nIro ga kawarimashita.\nMàu đã thay đổi."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 41129b4357525250
    {
      japanese: "困ります",
      kana: "こまります",
      vietnamese: "rắc rối, khó xử, có vấn đề",
      english: "rắc rối, khó xử, có vấn đề",
      type: "main",
      example: "お金がなくて困っています。\nOkane ga nakute komatte imasu.\nTôi đang khó xử vì không có tiền."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 9f0d229056860fbe
    {
      japanese: "付けます",
      kana: "つけます",
      vietnamese: "gắn, đánh dấu",
      english: "gắn, đánh dấu",
      type: "main",
      example: "正しい答えに丸を付けます。\nTadashii kotae ni maru o tsukemasu.\nĐánh dấu tròn vào đáp án đúng."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 92ae36ffba371084
    {
      japanese: "治ります",
      kana: "なおおります",
      vietnamese: "khỏi bệnh",
      english: "khỏi bệnh",
      type: "main",
      example: "病気が治りました。\nByouki ga naorimashita.\nBệnh đã khỏi."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 2a2c29046136367e
    {
      japanese: "直ります",
      kana: "なおおります",
      vietnamese: "được sửa xong, hết hỏng",
      english: "được sửa xong, hết hỏng",
      type: "main",
      example: "パソコンが直りました。\nPasokon ga naorimashita.\nMáy tính đã được sửa xong."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 860ce17576d98b81
    {
      japanese: "クリックします",
      kana: "クリックします",
      vietnamese: "click chuột",
      english: "click chuột",
      type: "main",
      example: "ここをクリックしてください。\nKoko o kurikku shite kudasai.\nHãy click vào đây."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | b26b5ef7dcc79115
    {
      japanese: "入力します",
      kana: "にゅうりょくします",
      vietnamese: "nhập vào",
      english: "nhập vào",
      type: "main",
      example: "名前を入力してください。\nNamae o nyuuryoku shite kudasai.\nHãy nhập tên."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 65e0f8a059a2e9dd
    {
      japanese: "正しい",
      kana: "ただしい",
      vietnamese: "đúng, chính xác",
      english: "đúng, chính xác",
      type: "main",
      example: "正しい答えを選びます。\nTadashii kotae o erabimasu.\nChọn đáp án đúng."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | e83ee7073a78b0e3
    {
      japanese: "向こう",
      kana: "むこう",
      vietnamese: "bên kia, phía đằng kia",
      english: "bên kia, phía đằng kia",
      type: "main",
      example: "向こうに島が見えます。\nMukou ni shima ga miemasu.\nCó thể nhìn thấy hòn đảo ở phía kia."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 8b04008e2c93cf4e
    {
      japanese: "島",
      kana: "しま",
      vietnamese: "đảo, hòn đảo",
      english: "đảo, hòn đảo",
      type: "main",
      example: "小さい島へ行きました。\nChiisai shima e ikimashita.\nTôi đã đi đến một hòn đảo nhỏ."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | b03dcde7580a97eb
    {
      japanese: "港",
      kana: "みなと",
      vietnamese: "cảng, bến cảng",
      english: "cảng, bến cảng",
      type: "main",
      example: "港で写真を撮りました。\nMinato de shashin o torimashita.\nTôi đã chụp ảnh ở cảng."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 298f5ea9dc77fc9b
    {
      japanese: "近所",
      kana: "きんじょ",
      vietnamese: "khu vực lân cận, hàng xóm",
      english: "khu vực lân cận, hàng xóm",
      type: "main",
      example: "近所にスーパーがあります。\nKinjo ni suupaa ga arimasu.\nGần nhà có siêu thị."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 2440de1678b8dc05
    {
      japanese: "屋上",
      kana: "おくじょう",
      vietnamese: "mái nhà, sân thượng",
      english: "mái nhà, sân thượng",
      type: "main",
      example: "屋上から海が見えます。\nOkujou kara umi ga miemasu.\nTừ sân thượng có thể nhìn thấy biển."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | dc6cfd2f3ebd69cd
    {
      japanese: "海外",
      kana: "かいがい",
      vietnamese: "nước ngoài, hải ngoại",
      english: "nước ngoài, hải ngoại",
      type: "main",
      example: "海外で働きたいです。\nKaigai de hatarakitai desu.\nTôi muốn làm việc ở nước ngoài."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 5556700686c00aa4
    {
      japanese: "山登り",
      kana: "やまのぼり",
      vietnamese: "leo núi",
      english: "leo núi",
      type: "main",
      example: "週末、山登りをします。\nShuumatsu, yamanobori o shimasu.\nCuối tuần tôi đi leo núi."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 2a712dc89b5e184f
    {
      japanese: "歴史",
      kana: "れきし",
      vietnamese: "lịch sử",
      english: "lịch sử",
      type: "main",
      example: "日本の歴史を勉強します。\nNihon no rekishi o benkyou shimasu.\nTôi học lịch sử Nhật Bản."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 4fc9022de4ecd11b
    {
      japanese: "機会",
      kana: "きかい",
      vietnamese: "cơ hội",
      english: "cơ hội",
      type: "main",
      example: "日本語を話す機会がありません。\nNihongo o hanasu kikai ga arimasen.\nTôi không có cơ hội nói tiếng Nhật."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | a521f8fb0595f42c
    {
      japanese: "許可",
      kana: "きょか",
      vietnamese: "phép, giấy phép",
      english: "phép, giấy phép",
      type: "main",
      example: "先生の許可が必要です。\nSensei no kyoka ga hitsuyou desu.\nCần sự cho phép của thầy/cô."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 7f5f888f64a0dea9
    {
      japanese: "丸",
      kana: "まる",
      vietnamese: "hình tròn, dấu tròn",
      english: "hình tròn, dấu tròn",
      type: "main",
      example: "丸を書いてください。\nMaru o kaite kudasai.\nHãy vẽ dấu tròn."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | b92392bbd4f4c932
    {
      japanese: "ふりがな",
      kana: "ふりがな",
      vietnamese: "chữ kana ghi cách đọc Hán tự",
      english: "chữ kana ghi cách đọc Hán tự",
      type: "main",
      example: "漢字にふりがなを付けます。\nKanji ni furigana o tsukemasu.\nGhi furigana cho Kanji."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 41ceac07a9979303
    {
      japanese: "設備",
      kana: "せつび",
      vietnamese: "thiết bị",
      english: "thiết bị",
      type: "main",
      example: "新しい設備があります。\nAtarashii setsubi ga arimasu.\nCó thiết bị mới."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 905c7f65333696a3
    {
      japanese: "レバー",
      kana: "レバー",
      vietnamese: "cần, cần gạt",
      english: "cần, cần gạt",
      type: "main",
      example: "レバーを下げます。\nRebaa o sagemasu.\nGạt cần xuống."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 9d44e468fd0534cf
    {
      japanese: "キー",
      kana: "キー",
      vietnamese: "phím",
      english: "phím",
      type: "main",
      example: "Enterキーを押してください。\nEntaa kii o oshite kudasai.\nHãy nhấn phím Enter."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | c202e06517781f7c
    {
      japanese: "カーテン",
      kana: "カーテン",
      vietnamese: "rèm cửa",
      english: "rèm cửa",
      type: "main",
      example: "カーテンを開けます。\nKaaten o akemasu.\nMở rèm cửa."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 190e60d84ec2f281
    {
      japanese: "ひも",
      kana: "ひも",
      vietnamese: "sợi dây",
      english: "sợi dây",
      type: "main",
      example: "ひもを引いてください。\nHimo o hiite kudasai.\nHãy kéo sợi dây."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | ee5dfd253802e2fc
    {
      japanese: "炊飯器",
      kana: "すいはんき",
      vietnamese: "nồi cơm điện",
      english: "nồi cơm điện",
      type: "main",
      example: "炊飯器でご飯を炊きます。\nSuihanki de gohan o takimasu.\nNấu cơm bằng nồi cơm điện."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | 181846c877ec1a69
    {
      japanese: "葉",
      kana: "は",
      vietnamese: "lá cây",
      english: "lá cây",
      type: "main",
      example: "葉が赤くなりました。\nHa ga akaku narimashita.\nLá đã chuyển đỏ."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | b7e86572acbd702f
    {
      japanese: "昔",
      kana: "むかし",
      vietnamese: "ngày xưa",
      english: "ngày xưa",
      type: "main",
      example: "昔、ここは海でした。\nMukashi, koko wa umi deshita.\nNgày xưa, nơi này là biển."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | eeac31d435d15b5e
    {
      japanese: "もっと",
      kana: "もっと",
      vietnamese: "hơn, nữa",
      english: "hơn, nữa",
      type: "main",
      example: "もっとゆっくり話してください。\nMotto yukkuri hanashite kudasai.\nHãy nói chậm hơn nữa."
    },
    // source: review_tu_vung_bai_35.md | 1. Từ vựng chính | ee7f7105b000147d
    {
      japanese: "これで終わりましょう",
      kana: "これで終わりましょう",
      vietnamese: "Chúng ta dừng ở đây nhé",
      english: "Chúng ta dừng ở đây nhé",
      type: "main",
      example: "今日はこれで終わりましょう。\nKyou wa kore de owari mashou.\nHôm nay chúng ta dừng ở đây nhé."
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | b7b7cc66c81aa707
    {
      japanese: "箱根",
      kana: "はこね",
      vietnamese: "một địa điểm nghỉ ngơi ở tỉnh Kanagawa",
      english: "một địa điểm nghỉ ngơi ở tỉnh Kanagawa",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 89c7515cf5e1f834
    {
      japanese: "日光",
      kana: "にっこう",
      vietnamese: "một địa điểm du lịch ở Tochigi",
      english: "một địa điểm du lịch ở Tochigi",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 0a28ca35856081d9
    {
      japanese: "アフリカ",
      kana: "アフリカ",
      vietnamese: "châu Phi",
      english: "châu Phi",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | e833677f75c4eba6
    {
      japanese: "マンガミュージアム",
      kana: "マンガミュージアム",
      vietnamese: "bảo tàng truyện tranh quốc tế Kyoto",
      english: "bảo tàng truyện tranh quốc tế Kyoto",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 19935e773cb4f8cb
    {
      japanese: "みんなの学校",
      kana: "みんなの学校",
      vietnamese: "tên trường tiếng Nhật giả định",
      english: "tên trường tiếng Nhật giả định",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 0822ca2383b56249
    {
      japanese: "大黒ずし",
      kana: "大黒ずし",
      vietnamese: "tên quán sushi giả định",
      english: "tên quán sushi giả định",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 8b1ca477059c6a84
    {
      japanese: "IMCパソコン教室",
      kana: "IMCパソコン教室",
      vietnamese: "trường/lớp đào tạo máy tính giả định",
      english: "trường/lớp đào tạo máy tính giả định",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 6503351cf4be1453
    {
      japanese: "母の味",
      kana: "母の味",
      vietnamese: "tiêu đề cuốn sách giả định, “Hương vị của mẹ”",
      english: "tiêu đề cuốn sách giả định, “Hương vị của mẹ”",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 6fc62164f70a83aa
    {
      japanese: "はる",
      kana: "はる",
      vietnamese: "hiệu làm đẹp giả định",
      english: "hiệu làm đẹp giả định",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 1f2eecedb170d10b
    {
      japanese: "佐藤歯科",
      kana: "佐藤歯科",
      vietnamese: "phòng nha khoa Satou giả định",
      english: "phòng nha khoa Satou giả định",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 2. Tên riêng, địa danh, tên giả định | 6e9d316eb01f12c4
    {
      japanese: "毎日クッキング",
      kana: "毎日クッキング",
      vietnamese: "trường dạy nấu ăn giả định",
      english: "trường dạy nấu ăn giả định",
      type: "supplementary"
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | 9ae74c80be50015e
    {
      japanese: "それなら",
      kana: "それなら",
      vietnamese: "nếu thế thì, vậy thì",
      english: "nếu thế thì, vậy thì",
      type: "supplementary",
      example: "それなら、バスで行きましょう。\nSore nara, basu de ikimashou.\nNếu vậy thì đi bằng xe buýt nhé."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | 0c97cc4d31a77372
    {
      japanese: "夜行バス",
      kana: "やこうバス",
      vietnamese: "xe buýt chạy đêm",
      english: "xe buýt chạy đêm",
      type: "supplementary",
      example: "夜行バスで大阪へ行きます。\nYakou basu de Oosaka e ikimasu.\nTôi đi Osaka bằng xe buýt đêm."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | b8d8aad0c7ce1181
    {
      japanese: "さあ",
      kana: "さあ",
      vietnamese: "à, ờ; dùng khi đang nghĩ",
      english: "à, ờ; dùng khi đang nghĩ",
      type: "supplementary",
      example: "さあ、よくわかりません。\nSaa, yoku wakarimasen.\nÀ, tôi không rõ lắm."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | e6367f22fd559c3d
    {
      japanese: "旅行社",
      kana: "りょこうしゃ",
      vietnamese: "công ty du lịch",
      english: "công ty du lịch",
      type: "supplementary",
      example: "旅行社で聞きます。\nRyokousha de kikimasu.\nTôi hỏi ở công ty du lịch."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | 9ba6eb7998576fb7
    {
      japanese: "詳しい",
      kana: "くわしい",
      vietnamese: "chi tiết, cụ thể",
      english: "chi tiết, cụ thể",
      type: "supplementary",
      example: "詳しいことは旅行社に聞いてください。\nKuwashii koto wa ryokousha ni kiite kudasai.\nThông tin chi tiết hãy hỏi công ty du lịch."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | 6b80b405652872f5
    {
      japanese: "スキー場",
      kana: "スキーじょう",
      vietnamese: "bãi trượt tuyết",
      english: "bãi trượt tuyết",
      type: "supplementary",
      example: "スキー場へ行きたいです。\nSukii jou e ikitai desu.\nTôi muốn đi bãi trượt tuyết."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | b0916a889934fde9
    {
      japanese: "草津",
      kana: "くさつ",
      vietnamese: "một địa điểm du lịch ở tỉnh Gunma",
      english: "một địa điểm du lịch ở tỉnh Gunma",
      type: "supplementary",
      example: "草津は温泉で有名です。\nKusatsu wa onsen de yuumei desu.\nKusatsu nổi tiếng về suối nước nóng."
    },
    // source: review_tu_vung_bai_35.md | 3. Từ vựng hội thoại | 403aa9539b381a45
    {
      japanese: "志賀高原",
      kana: "しがこうげん",
      vietnamese: "một công viên/quần thể cao nguyên ở Nagano",
      english: "một công viên/quần thể cao nguyên ở Nagano",
      type: "supplementary",
      example: "志賀高原でスキーをします。\nShiga Kougen de sukii o shimasu.\nTôi trượt tuyết ở Shiga Kogen."
    },
    // source: review_tu_vung_bai_35.md | 4. Từ vựng bài đọc | 7a78e0aa395a8610
    {
      japanese: "朱",
      kana: "しゅ",
      vietnamese: "màu đỏ son, đỏ",
      english: "màu đỏ son, đỏ",
      type: "supplementary",
      example: "朱は赤い色です。\nShu wa akai iro desu.\nChu là màu đỏ son."
    },
    // source: review_tu_vung_bai_35.md | 4. Từ vựng bài đọc | 7c0bd25b6c570b87
    {
      japanese: "交わります",
      kana: "まじわります",
      vietnamese: "giao lưu, quan hệ với",
      english: "giao lưu, quan hệ với",
      type: "supplementary",
      example: "人と人が交わります。\nHito to hito ga majiwarimasu.\nCon người giao lưu với nhau."
    },
    // source: review_tu_vung_bai_35.md | 4. Từ vựng bài đọc | 877b05af261003f6
    {
      japanese: "ことわざ",
      kana: "ことわざ",
      vietnamese: "tục ngữ, ngạn ngữ",
      english: "tục ngữ, ngạn ngữ",
      type: "supplementary",
      example: "日本のことわざを勉強します。\nNihon no kotowaza o benkyou shimasu.\nTôi học tục ngữ Nhật."
    },
    // source: review_tu_vung_bai_35.md | 4. Từ vựng bài đọc | 9e1411eaa3f2d7ab
    {
      japanese: "関係",
      kana: "かんけい",
      vietnamese: "quan hệ",
      english: "quan hệ",
      type: "supplementary",
      example: "友達との関係がいいです。\nTomodachi to no kankei ga ii desu.\nQuan hệ với bạn bè tốt."
    },
    // source: review_tu_vung_bai_35.md | 4. Từ vựng bài đọc | 97c96d0cc71f7e8d
    {
      japanese: "仲よくします",
      kana: "なかよくします",
      vietnamese: "quan hệ tốt với, thân với",
      english: "quan hệ tốt với, thân với",
      type: "supplementary",
      example: "みんなと仲よくします。\nMinna to nakayoku shimasu.\nTôi hòa thuận với mọi người."
    },
    // source: review_tu_vung_bai_35.md | 4. Từ vựng bài đọc | 82c2fb08da548ff5
    {
      japanese: "必要［な］",
      kana: "ひつよう［な］",
      vietnamese: "cần thiết",
      english: "cần thiết",
      type: "supplementary",
      example: "パスポートが必要です。\nPasupooto ga hitsuyou desu.\nCần hộ chiếu."
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | d64f085ce48ca216
    {
      japanese: "花が咲きます",
      kana: "花が咲きます",
      vietnamese: "hoa nở",
      english: "hoa nở",
      type: "supplementary",
      example: "咲きます thường đi với 花"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | fdfcef18fcd0b9e1
    {
      japanese: "色が変わります",
      kana: "色が変わります",
      vietnamese: "màu thay đổi",
      english: "màu thay đổi",
      type: "supplementary",
      example: "変わります = tự thay đổi"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | 4590061f164790fe
    {
      japanese: "病気が治ります",
      kana: "病気が治ります",
      vietnamese: "bệnh khỏi",
      english: "bệnh khỏi",
      type: "supplementary",
      example: "Dùng Kanji 治"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | 2eb3279709988819
    {
      japanese: "故障が直ります",
      kana: "故障が直ります",
      vietnamese: "hỏng hóc được sửa xong",
      english: "hỏng hóc được sửa xong",
      type: "supplementary",
      example: "Dùng Kanji 直"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | e74829f3cc7b8b67
    {
      japanese: "丸を付けます",
      kana: "丸を付けます",
      vietnamese: "đánh dấu tròn",
      english: "đánh dấu tròn",
      type: "supplementary",
      example: "Dùng trợ từ を với vật được đánh dấu"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | e7c08d5444abe66a
    {
      japanese: "名前を入力します",
      kana: "名前を入力します",
      vietnamese: "nhập tên",
      english: "nhập tên",
      type: "supplementary",
      example: "Dùng trong máy tính/form"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | 559e785f7bcbeeee
    {
      japanese: "もっと詳しいこと",
      kana: "もっと詳しいこと",
      vietnamese: "việc chi tiết hơn",
      english: "việc chi tiết hơn",
      type: "supplementary",
      example: "Hay dùng khi hỏi thông tin"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | 11ce2860756e455b
    {
      japanese: "許可が必要です",
      kana: "許可が必要です",
      vietnamese: "cần giấy phép/sự cho phép",
      english: "cần giấy phép/sự cho phép",
      type: "supplementary",
      example: "許可 = permission"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | 12f2c1e0485063f0
    {
      japanese: "山登りをします",
      kana: "山登りをします",
      vietnamese: "đi leo núi",
      english: "đi leo núi",
      type: "supplementary",
      example: "Danh từ + をします"
    },
    // source: review_tu_vung_bai_35.md | 5. Cụm cần nhớ trong bài 35 | 753c06776a1132bf
    {
      japanese: "これで終わりましょう",
      kana: "これで終わりましょう",
      vietnamese: "chúng ta dừng ở đây nhé",
      english: "chúng ta dừng ở đây nhé",
      type: "supplementary",
      example: "Câu kết thúc buổi học/cuộc họp"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 3ec0ef3715b8f1a9
    {
      japanese: "花",
      kana: "カ / ka",
      vietnamese: "Hoa — hoa",
      english: "hoa",
      type: "kanji",
      example: "花が咲きます / hana ga sakimasu"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 60e080fbb9006608
    {
      japanese: "色",
      kana: "ショク / shoku, シキ / shiki",
      vietnamese: "Sắc — màu sắc",
      english: "màu sắc",
      type: "kanji",
      example: "色が変わります / iro ga kawarimasu"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 8dec41dc5191c171
    {
      japanese: "変",
      kana: "ヘン / hen",
      vietnamese: "Biến — thay đổi, lạ",
      english: "thay đổi, lạ",
      type: "kanji",
      example: "変わります / kawarimasu"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 82cff972d763efdd
    {
      japanese: "直",
      kana: "チョク / choku",
      vietnamese: "Trực — sửa, thẳng, trực tiếp",
      english: "sửa, thẳng, trực tiếp",
      type: "kanji",
      example: "直ります / naorimasu"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | ed9431464b43bdf9
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào, cho vào",
      english: "vào, cho vào",
      type: "kanji",
      example: "入力します / nyuuryoku shimasu"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 193217671609e154
    {
      japanese: "力",
      kana: "リョク / ryoku, リキ / riki",
      vietnamese: "Lực — sức mạnh",
      english: "sức mạnh",
      type: "kanji",
      example: "入力 / nyuuryoku"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | be02e5207d651292
    {
      japanese: "正",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Chính — đúng, chính xác",
      english: "đúng, chính xác",
      type: "kanji",
      example: "正しい / tadashii"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 8fdab53c89cabbe6
    {
      japanese: "近",
      kana: "キン / kin",
      vietnamese: "Cận — gần",
      english: "gần",
      type: "kanji",
      example: "近所 / kinjo"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 536fca5463ab6450
    {
      japanese: "屋",
      kana: "オク / oku",
      vietnamese: "Ốc — nhà, cửa hàng",
      english: "nhà, cửa hàng",
      type: "kanji",
      example: "屋上 / okujou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | a0e7f497f9d733e7
    {
      japanese: "上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — trên",
      english: "trên",
      type: "kanji",
      example: "屋上 / okujou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 14d97a42d1b6c431
    {
      japanese: "海",
      kana: "カイ / kai",
      vietnamese: "Hải — biển",
      english: "biển",
      type: "kanji",
      example: "海外 / kaigai"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 17cace021f77b394
    {
      japanese: "外",
      kana: "ガイ / gai, ゲ / ge",
      vietnamese: "Ngoại — ngoài",
      english: "ngoài",
      type: "kanji",
      example: "海外 / kaigai"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 0f5a13c650e52ce4
    {
      japanese: "山",
      kana: "サン / san",
      vietnamese: "Sơn — núi",
      english: "núi",
      type: "kanji",
      example: "山登り / yamanobori"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 38203359f46b1a1f
    {
      japanese: "会",
      kana: "カイ / kai",
      vietnamese: "Hội — gặp, hội",
      english: "gặp, hội",
      type: "kanji",
      example: "機会 / kikai"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | f7271d0f5ba0d9bf
    {
      japanese: "日",
      kana: "ニチ / nichi, ジツ / jitsu",
      vietnamese: "Nhật — ngày, mặt trời",
      english: "ngày, mặt trời",
      type: "kanji",
      example: "日光 / Nikkou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 86ee8d134feda0af
    {
      japanese: "光",
      kana: "コウ / kou",
      vietnamese: "Quang — ánh sáng",
      english: "ánh sáng",
      type: "kanji",
      example: "日光 / Nikkou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | a4d8fb313e856c5b
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "学校 / gakkou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 2739b22048e56dfd
    {
      japanese: "校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — trường học",
      english: "trường học",
      type: "kanji",
      example: "学校 / gakkou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | e9139ac67f9d6218
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — lớn",
      english: "lớn",
      type: "kanji",
      example: "大黒ずし / Daikoku-zushi"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 9eaa0e2c12d7c526
    {
      japanese: "黒",
      kana: "コク / koku",
      vietnamese: "Hắc — đen",
      english: "đen",
      type: "kanji",
      example: "大黒 / Daikoku"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | af5e712a997afddc
    {
      japanese: "母",
      kana: "ボ / bo",
      vietnamese: "Mẫu — mẹ",
      english: "mẹ",
      type: "kanji",
      example: "母の味 / Haha no Aji"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 4b0f9eade7145644
    {
      japanese: "毎",
      kana: "マイ / mai",
      vietnamese: "Mỗi — mỗi",
      english: "mỗi",
      type: "kanji",
      example: "毎日 / mainichi"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 868ca8f0f7ef6199
    {
      japanese: "終",
      kana: "シュウ / shuu",
      vietnamese: "Chung — kết thúc",
      english: "kết thúc",
      type: "kanji",
      example: "終わりましょう / owari mashou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 130b0de87e9d4f3c
    {
      japanese: "昔",
      kana: "セキ / seki",
      vietnamese: "Tích — ngày xưa",
      english: "ngày xưa",
      type: "kanji",
      example: "昔 / mukashi"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 008e112c4fe7b1cb
    {
      japanese: "必",
      kana: "ヒツ / hitsu",
      vietnamese: "Tất — chắc chắn, nhất thiết",
      english: "chắc chắn, nhất thiết",
      type: "kanji",
      example: "必要 / hitsuyou"
    },
    // source: review_tu_vung_bai_35.md | 6. Kanji N5–N4 cần học kỹ | 814a89e5190b569d
    {
      japanese: "要",
      kana: "ヨウ / you",
      vietnamese: "Yếu — cần thiết, điểm chính",
      english: "cần thiết, điểm chính",
      type: "kanji",
      example: "必要 / hitsuyou"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4cb676ec5f054203
    {
      japanese: "花",
      kana: "はな / hana",
      vietnamese: "Hoa — 花 = hoa",
      english: "花 = hoa",
      type: "kanji",
      example: "花"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8aefb2f6d6c75e15
    {
      japanese: "花火",
      kana: "カ / ka",
      vietnamese: "Hoa — 花 = hoa; 火 = lửa",
      english: "花 = hoa; 火 = lửa",
      type: "kanji",
      example: "花火"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6b03887ca8810cbe
    {
      japanese: "色",
      kana: "いろ / iro",
      vietnamese: "Sắc — 色 = màu sắc",
      english: "色 = màu sắc",
      type: "kanji",
      example: "色"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 11096172f8e4f532
    {
      japanese: "景色",
      kana: "シキ / shiki",
      vietnamese: "Sắc — 景 = cảnh; 色 = sắc",
      english: "景 = cảnh; 色 = sắc",
      type: "kanji",
      example: "景色"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d406b44ce916a5d6
    {
      japanese: "変わる",
      kana: "か.わる / kawaru",
      vietnamese: "Biến — 変 = thay đổi",
      english: "変 = thay đổi",
      type: "kanji",
      example: "変わる"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bb100b93024c064c
    {
      japanese: "直る",
      kana: "なお.る / naoru",
      vietnamese: "Trực — 直 = sửa, trở lại bình thường",
      english: "直 = sửa, trở lại bình thường",
      type: "kanji",
      example: "直る"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e8032731a2b5d3f7
    {
      japanese: "直す",
      kana: "なお.す / naosu",
      vietnamese: "Trực — 直 = sửa",
      english: "直 = sửa",
      type: "kanji",
      example: "直す"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1306cb0ba8b8c363
    {
      japanese: "入力",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — 入 = vào; 力 = lực, nhập dữ liệu",
      english: "入 = vào; 力 = lực, nhập dữ liệu",
      type: "kanji",
      example: "入力"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 723e5e36f3e5c347
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = đi vào",
      english: "入 = đi vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f3f3c5f3767ea0b0
    {
      japanese: "入れる",
      kana: "い.れる / ireru",
      vietnamese: "Nhập — 入 = cho vào",
      english: "入 = cho vào",
      type: "kanji",
      example: "入れる"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5a7c9340bc31a8f8
    {
      japanese: "入力",
      kana: "リョク / ryoku",
      vietnamese: "Lực — 入 = nhập; 力 = lực",
      english: "入 = nhập; 力 = lực",
      type: "kanji",
      example: "入力"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bcdfb575ffb6617e
    {
      japanese: "力",
      kana: "ちから / chikara",
      vietnamese: "Lực — 力 = sức mạnh",
      english: "力 = sức mạnh",
      type: "kanji",
      example: "力"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 611981109e0580a5
    {
      japanese: "正しい",
      kana: "ただ.しい / tadashii",
      vietnamese: "Chính — 正 = đúng",
      english: "正 = đúng",
      type: "kanji",
      example: "正しい"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | afc54872600a0682
    {
      japanese: "正月",
      kana: "ショウ / shou",
      vietnamese: "Chính — 正 = chính; 月 = tháng",
      english: "正 = chính; 月 = tháng",
      type: "kanji",
      example: "正月"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1e4e0842cb2084dc
    {
      japanese: "近所",
      kana: "キン / kin",
      vietnamese: "Cận — 近 = gần; 所 = nơi",
      english: "近 = gần; 所 = nơi",
      type: "kanji",
      example: "近所"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8996f65e6f2523d6
    {
      japanese: "近い",
      kana: "ちか.い / chikai",
      vietnamese: "Cận — 近 = gần",
      english: "近 = gần",
      type: "kanji",
      example: "近い"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3a2dd38886f2fc49
    {
      japanese: "屋上",
      kana: "オク / oku",
      vietnamese: "Ốc — 屋 = nhà; 上 = trên",
      english: "屋 = nhà; 上 = trên",
      type: "kanji",
      example: "屋上"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 899eb5f0194dd07e
    {
      japanese: "本屋",
      kana: "や / ya",
      vietnamese: "Ốc — 本 = sách; 屋 = cửa hàng",
      english: "本 = sách; 屋 = cửa hàng",
      type: "kanji",
      example: "本屋"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c8b68073acfb5de3
    {
      japanese: "屋上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — 屋 = nhà; 上 = trên",
      english: "屋 = nhà; 上 = trên",
      type: "kanji",
      example: "屋上"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 848fdf320a4d3f02
    {
      japanese: "上",
      kana: "うえ / ue",
      vietnamese: "Thượng — 上 = bên trên",
      english: "上 = bên trên",
      type: "kanji",
      example: "上"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0772a6a5cff40773
    {
      japanese: "海外",
      kana: "カイ / kai",
      vietnamese: "Hải — 海 = biển; 外 = ngoài",
      english: "海 = biển; 外 = ngoài",
      type: "kanji",
      example: "海外"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1397bcf451d06a44
    {
      japanese: "海",
      kana: "うみ / umi",
      vietnamese: "Hải — 海 = biển",
      english: "海 = biển",
      type: "kanji",
      example: "海"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 88bfd18a77828698
    {
      japanese: "海外",
      kana: "ガイ / gai",
      vietnamese: "Ngoại — 海 = biển; 外 = ngoài",
      english: "海 = biển; 外 = ngoài",
      type: "kanji",
      example: "海外"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | db97ae3ef6534b80
    {
      japanese: "外",
      kana: "そと / soto",
      vietnamese: "Ngoại — 外 = bên ngoài",
      english: "外 = bên ngoài",
      type: "kanji",
      example: "外"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ec31d45fed091f19
    {
      japanese: "山登り",
      kana: "やま / yama",
      vietnamese: "Sơn — 山 = núi; 登り = leo",
      english: "山 = núi; 登り = leo",
      type: "kanji",
      example: "山登り"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bd13a6e3667f6c53
    {
      japanese: "火山",
      kana: "サン / san",
      vietnamese: "Sơn — 火 = lửa; 山 = núi",
      english: "火 = lửa; 山 = núi",
      type: "kanji",
      example: "火山"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3ae33ba396265f66
    {
      japanese: "機会",
      kana: "カイ / kai",
      vietnamese: "Hội — 機 = dịp; 会 = gặp",
      english: "機 = dịp; 会 = gặp",
      type: "kanji",
      example: "機会"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3c4d270ca2012426
    {
      japanese: "会う",
      kana: "あ.う / au",
      vietnamese: "Hội — 会 = gặp",
      english: "会 = gặp",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7bc5ac692767a5cc
    {
      japanese: "日光",
      kana: "ニッ / ni-",
      vietnamese: "Nhật — 日 = ngày, mặt trời; 光 = ánh sáng",
      english: "日 = ngày, mặt trời; 光 = ánh sáng",
      type: "kanji",
      example: "日光"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 26cd302680ffbc90
    {
      japanese: "毎日",
      kana: "ニチ / nichi",
      vietnamese: "Nhật — 毎 = mỗi; 日 = ngày",
      english: "毎 = mỗi; 日 = ngày",
      type: "kanji",
      example: "毎日"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4d4693271ca92bc7
    {
      japanese: "日光",
      kana: "コウ / kou",
      vietnamese: "Quang — 日 = mặt trời; 光 = ánh sáng",
      english: "日 = mặt trời; 光 = ánh sáng",
      type: "kanji",
      example: "日光"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0e89f8c00a1f208c
    {
      japanese: "光",
      kana: "ひかり / hikari",
      vietnamese: "Quang — 光 = ánh sáng",
      english: "光 = ánh sáng",
      type: "kanji",
      example: "光"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b9a5ef6e42254bc8
    {
      japanese: "学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f652f14cbd383ff5
    {
      japanese: "学ぶ",
      kana: "まな.ぶ / manabu",
      vietnamese: "Học — 学 = học",
      english: "学 = học",
      type: "kanji",
      example: "学ぶ"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8496db387a5881a4
    {
      japanese: "学校",
      kana: "コウ / kou",
      vietnamese: "Hiệu — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1575d42246eeba35
    {
      japanese: "大きい",
      kana: "おお.きい / ookii",
      vietnamese: "Đại — 大 = lớn",
      english: "大 = lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5b41aa2e1fba48c9
    {
      japanese: "大学",
      kana: "ダイ / dai",
      vietnamese: "Đại — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 82afc2235a17eeee
    {
      japanese: "黒",
      kana: "くろ / kuro",
      vietnamese: "Hắc — 黒 = đen",
      english: "黒 = đen",
      type: "kanji",
      example: "黒"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d13b73ca8bcf1db7
    {
      japanese: "黒い",
      kana: "くろ.い / kuroi",
      vietnamese: "Hắc — 黒 = đen",
      english: "黒 = đen",
      type: "kanji",
      example: "黒い"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 198d5b8c433686a2
    {
      japanese: "母の味",
      kana: "はは / haha",
      vietnamese: "Mẫu — 母 = mẹ; 味 = vị",
      english: "母 = mẹ; 味 = vị",
      type: "kanji",
      example: "母の味"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c37d658d9a2ee192
    {
      japanese: "毎日",
      kana: "マイ / mai",
      vietnamese: "Mỗi — 毎 = mỗi; 日 = ngày",
      english: "毎 = mỗi; 日 = ngày",
      type: "kanji",
      example: "毎日"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 528ec9a049d410a1
    {
      japanese: "終わる",
      kana: "お.わる / owaru",
      vietnamese: "Chung — 終 = kết thúc",
      english: "終 = kết thúc",
      type: "kanji",
      example: "終わる"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f353b7eeedea4dea
    {
      japanese: "終える",
      kana: "お.える / oeru",
      vietnamese: "Chung — 終 = kết thúc",
      english: "終 = kết thúc",
      type: "kanji",
      example: "終える"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1d192a8f911ea955
    {
      japanese: "昔",
      kana: "むかし / mukashi",
      vietnamese: "Tích — 昔 = ngày xưa",
      english: "昔 = ngày xưa",
      type: "kanji",
      example: "昔"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 092f99ec97417c8e
    {
      japanese: "必要",
      kana: "ヒツ / hitsu",
      vietnamese: "Tất — 必 = nhất thiết; 要 = cần",
      english: "必 = nhất thiết; 要 = cần",
      type: "kanji",
      example: "必要"
    },
    // source: review_tu_vung_bai_35.md | 7. Từ ghép On/Kun của Kanji N5–N4 | cdde4d7f2734209c
    {
      japanese: "必要",
      kana: "ヨウ / you",
      vietnamese: "Yếu — 必 = nhất thiết; 要 = cần",
      english: "必 = nhất thiết; 要 = cần",
      type: "kanji",
      example: "必要"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '尊敬語（お〜になる）',
      vietnamese: 'tôn kính ngữ (お〜になる)',
      english: 'honorific form (お〜になる)',
      type: 'main',
      explanation: 'Dạng tôn kính chung cho động từ nhóm I và II. Cấu tạo: お + ます形 + になる. Dùng cho hành động của người có địa vị cao hơn. Với từ Hán Việt dùng ご thay vì お.',
      examples: [
        {
          japanese: '先生はもうお帰りになりましたか。',
          vietnamese: 'Thầy đã về chưa ạ?',
          english: 'Has the teacher already gone home?',
          type: 'main'
        },
        {
          japanese: '社長がお話しになります。',
          vietnamese: 'Giám đốc sẽ nói.',
          english: 'The president will speak.',
          type: 'main'
        },
        {
          japanese: 'どちらにお住まいになりますか。',
          vietnamese: 'Anh ở đâu ạ?',
          english: 'Where do you live?',
          type: 'main'
        },
        {
          japanese: 'ご利用になりますか。',
          vietnamese: 'Quý khách có sử dụng không ạ?',
          english: 'Will you use it?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '尊敬語（〜れる/られる）',
      vietnamese: 'tôn kính ngữ (〜れる/られる)',
      english: 'honorific form (〜れる/られる)',
      type: 'main',
      explanation: 'Dạng tôn kính dùng thể bị động. Cấu tạo giống thể bị động: Nhóm I: a段 + れる, Nhóm II: る → られる. Ít trang trọng hơn お〜になる.',
      examples: [
        {
          japanese: '先生が書かれた本です。',
          vietnamese: 'Đây là sách thầy viết.',
          english: 'This is the book written by the teacher.',
          type: 'main'
        },
        {
          japanese: '社長は何時に来られますか。',
          vietnamese: 'Giám đốc đến lúc mấy giờ ạ?',
          english: 'What time will the president come?',
          type: 'main'
        },
        {
          japanese: 'お客様が待たれています。',
          vietnamese: 'Khách hàng đang chờ.',
          english: 'The customer is waiting.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '謙譲語（お〜する/いたす）',
      vietnamese: 'khiêm tốn ngữ (お〜する/いたす)',
      english: 'humble form (お〜する/いたす)',
      type: 'main',
      explanation: 'Dạng khiêm tốn chung cho động từ. Cấu tạo: お + ます形 + する/いたす. Dùng khi người nói làm điều gì cho người có địa vị cao hơn. いたす trang trọng hơn する.',
      examples: [
        {
          japanese: '私がお送りいたします。',
          vietnamese: 'Tôi sẽ đưa anh.',
          english: 'I will escort you.',
          type: 'main'
        },
        {
          japanese: 'お手伝いしましょうか。',
          vietnamese: 'Để tôi giúp anh nhé?',
          english: 'Shall I help you?',
          type: 'main'
        },
        {
          japanese: 'ご案内いたします。',
          vietnamese: 'Tôi sẽ hướng dẫn.',
          english: 'I will guide you.',
          type: 'main'
        },
        {
          japanese: 'ご説明いたします。',
          vietnamese: 'Tôi sẽ giải thích.',
          english: 'I will explain.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '特別な尊敬語',
      vietnamese: 'tôn kính ngữ đặc biệt',
      english: 'special honorific verbs',
      type: 'main',
      explanation: 'Một số động từ có dạng tôn kính đặc biệt riêng: いる→いらっしゃる、言う→おっしゃる、する→なさる、見る→ご覧になる、食べる/飲む→召し上がる、知っている→ご存じ、もらう→くださる.',
      examples: [
        {
          japanese: '先生はいらっしゃいますか。',
          vietnamese: 'Thầy có mặt không ạ?',
          english: 'Is the teacher here?',
          type: 'main'
        },
        {
          japanese: '何とおっしゃいましたか。',
          vietnamese: 'Anh nói gì ạ?',
          english: 'What did you say?',
          type: 'main'
        },
        {
          japanese: 'もう召し上がりましたか。',
          vietnamese: 'Anh đã dùng chưa ạ?',
          english: 'Have you eaten yet?',
          type: 'main'
        },
        {
          japanese: 'この件をご存じですか。',
          vietnamese: 'Anh có biết việc này không ạ?',
          english: 'Do you know about this matter?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '特別な謙譲語',
      vietnamese: 'khiêm tốn ngữ đặc biệt',
      english: 'special humble verbs',
      type: 'main',
      explanation: 'Một số động từ có dạng khiêm tốn đặc biệt: 行く/来る→参る/伺う、言う→申す/申し上げる、する→いたす、見る→拝見する、もらう/食べる/飲む→いただく、知る→存じる、会う→お目にかかる、聞く→承る.',
      examples: [
        {
          japanese: '田中と申します。',
          vietnamese: 'Tôi tên là Tanaka.',
          english: 'My name is Tanaka.',
          type: 'main'
        },
        {
          japanese: '明日伺います。',
          vietnamese: 'Ngày mai tôi sẽ đến.',
          english: 'I will visit tomorrow.',
          type: 'main'
        },
        {
          japanese: '資料を拝見いたしました。',
          vietnamese: 'Tôi đã xem tài liệu.',
          english: 'I have looked at the documents.',
          type: 'main'
        },
        {
          japanese: 'お目にかかれて光栄です。',
          vietnamese: 'Tôi rất vinh dự được gặp anh.',
          english: 'It\'s an honor to meet you.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'でございます',
      vietnamese: 'でございます (trang trọng)',
      english: 'でございます (formal)',
      type: 'main',
      explanation: 'Dạng trang trọng của です. Dùng trong văn nói rất lịch sự, đặc biệt trong kinh doanh, dịch vụ khách hàng.',
      examples: [
        {
          japanese: 'こちらが資料でございます。',
          vietnamese: 'Đây là tài liệu ạ.',
          english: 'This is the document.',
          type: 'main'
        },
        {
          japanese: '私は田中でございます。',
          vietnamese: 'Tôi là Tanaka ạ.',
          english: 'I am Tanaka.',
          type: 'main'
        },
        {
          japanese: '本日は良いお天気でございます。',
          vietnamese: 'Hôm nay thời tiết đẹp ạ.',
          english: 'The weather is nice today.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'させていただく',
      vietnamese: 'させていただく (xin phép làm)',
      english: 'させていただく (humbly do with permission)',
      type: 'additional',
      explanation: 'Kết hợp thể sai khiến và いただく, biểu thị xin phép làm điều gì một cách khiêm tốn. Dùng khi muốn thể hiện sự tôn trọng và xin phép.',
      examples: [
        {
          japanese: '説明させていただきます。',
          vietnamese: 'Xin phép tôi được giải thích.',
          english: 'Allow me to explain.',
          type: 'main'
        },
        {
          japanese: '私がやらせていただきます。',
          vietnamese: 'Xin phép tôi làm.',
          english: 'Allow me to do it.',
          type: 'main'
        },
        {
          japanese: 'お休みさせていただきます。',
          vietnamese: 'Xin phép tôi được nghỉ.',
          english: 'Please allow me to take time off.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'お/ご〜ください',
      vietnamese: 'お/ご〜ください (xin mời)',
      english: 'お/ご〜ください (please do)',
      type: 'additional',
      explanation: 'Dạng yêu cầu lịch sự. Cấu tạo: お + ます形 + ください hoặc ご + từ Hán + ください.',
      examples: [
        {
          japanese: 'お座りください。',
          vietnamese: 'Xin mời ngồi.',
          english: 'Please sit down.',
          type: 'main'
        },
        {
          japanese: 'ご利用ください。',
          vietnamese: 'Xin mời sử dụng.',
          english: 'Please use it.',
          type: 'main'
        },
        {
          japanese: 'お待ちください。',
          vietnamese: 'Xin vui lòng đợi.',
          english: 'Please wait.',
          type: 'additional'
        }
      ]
    }
  ]
};
