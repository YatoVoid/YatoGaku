/**
 * N4 Core Lessons — Lesson 14: Comparisons and Degree
 * Comparative expressions and degree
 */

import type { LessonData } from '$lib/types';

export const LESSON_14_DATA: LessonData = {
  lessonNumber: 14,
  title: '比較表現 (So sánh và mức độ)',
  vocabulary: [
    // Comparison words
    {
      japanese: 'より',
      kana: 'より',
      vietnamese: 'hơn',
      english: 'than, more than',
      type: 'main',
      example: '東京は大阪より大きいです。'
    },
    {
      japanese: 'ほど',
      kana: 'ほど',
      vietnamese: 'bằng (phủ định)',
      english: 'as ~ as (negative)',
      type: 'main',
      example: '東京ほど大きくないです。'
    },
    {
      japanese: 'ぐらい / くらい',
      kana: 'ぐらい / くらい',
      vietnamese: 'khoảng, độ',
      english: 'about, approximately',
      type: 'main',
      example: '1時間ぐらいかかります。'
    },
    {
      japanese: '一番',
      kana: 'いちばん',
      vietnamese: 'nhất',
      english: 'most, best, number one',
      type: 'main',
      example: '日本で一番高い山は富士山です。'
    },
    {
      japanese: '最も',
      kana: 'もっとも',
      vietnamese: 'nhất',
      english: 'most, extremely',
      type: 'main',
      example: '最も重要なことです。'
    },

    // Degree and extent
    {
      japanese: 'とても',
      kana: 'とても',
      vietnamese: 'rất',
      english: 'very',
      type: 'main',
      example: 'とても美味しいです。'
    },
    {
      japanese: 'すごく',
      kana: 'すごく',
      vietnamese: 'rất, cực kỳ',
      english: 'very, extremely',
      type: 'main',
      example: 'すごく面白いです。'
    },
    {
      japanese: '非常に',
      kana: 'ひじょうに',
      vietnamese: 'cực kỳ',
      english: 'extremely, very',
      type: 'main',
      example: '非常に難しいです。'
    },
    {
      japanese: '大変',
      kana: 'たいへん',
      vietnamese: 'rất, vất vả',
      english: 'very, tough',
      type: 'main',
      example: '大変忙しいです。'
    },
    {
      japanese: 'かなり',
      kana: 'かなり',
      vietnamese: 'khá',
      english: 'considerably, fairly',
      type: 'main',
      example: 'かなり難しいです。'
    },
    {
      japanese: 'だいぶ',
      kana: 'だいぶ',
      vietnamese: 'khá, đáng kể',
      english: 'considerably, quite',
      type: 'main',
      example: 'だいぶ涼しくなりました。'
    },
    {
      japanese: 'ずっと',
      kana: 'ずっと',
      vietnamese: 'hơn nhiều',
      english: 'much more, far more',
      type: 'main',
      example: 'ずっと大きいです。'
    },
    {
      japanese: 'もっと',
      kana: 'もっと',
      vietnamese: 'hơn nữa',
      english: 'more',
      type: 'main',
      example: 'もっと勉強します。'
    },
    {
      japanese: 'あまり',
      kana: 'あまり',
      vietnamese: 'không... lắm',
      english: 'not very (with negative)',
      type: 'main',
      example: 'あまり好きじゃないです。'
    },
    {
      japanese: 'それほど',
      kana: 'それほど',
      vietnamese: 'không đến mức đó',
      english: 'not so much (with negative)',
      type: 'main',
      example: 'それほど高くないです。'
    },

    // Similarity and difference
    {
      japanese: '同じ',
      kana: 'おなじ',
      vietnamese: 'giống nhau',
      english: 'same',
      type: 'main',
      example: '同じ学校です。'
    },
    {
      japanese: '違う',
      kana: 'ちがう',
      vietnamese: 'khác',
      english: 'different',
      type: 'main',
      example: '日本とベトナムは違います。'
    },
    {
      japanese: '違い',
      kana: 'ちがい',
      vietnamese: 'sự khác biệt',
      english: 'difference',
      type: 'main',
      example: '違いは何ですか。'
    },
    {
      japanese: '差',
      kana: 'さ',
      vietnamese: 'sự chênh lệch',
      english: 'difference, gap',
      type: 'main',
      example: '価格の差があります。'
    },
    {
      japanese: '似ている',
      kana: 'にている',
      vietnamese: 'giống nhau',
      english: 'similar, alike',
      type: 'main',
      example: '二人は似ています。'
    },

    // Size and dimensions
    {
      japanese: '大きい',
      kana: 'おおきい',
      vietnamese: 'to, lớn',
      english: 'big, large',
      type: 'main',
      example: '東京は大きい都市です。'
    },
    {
      japanese: '小さい',
      kana: 'ちいさい',
      vietnamese: 'nhỏ',
      english: 'small, little',
      type: 'main',
      example: '小さい部屋です。'
    },
    {
      japanese: '高い',
      kana: 'たかい',
      vietnamese: 'cao, đắt',
      english: 'high, tall, expensive',
      type: 'main',
      example: '富士山は高いです。'
    },
    {
      japanese: '低い',
      kana: 'ひくい',
      vietnamese: 'thấp',
      english: 'low, short',
      type: 'main',
      example: '声が低いです。'
    },
    {
      japanese: '広い',
      kana: 'ひろい',
      vietnamese: 'rộng',
      english: 'wide, spacious',
      type: 'main',
      example: '広い部屋です。'
    },
    {
      japanese: '狭い',
      kana: 'せまい',
      vietnamese: 'hẹp',
      english: 'narrow, small',
      type: 'main',
      example: '狭い道です。'
    },
    {
      japanese: '長い',
      kana: 'ながい',
      vietnamese: 'dài',
      english: 'long',
      type: 'main',
      example: '長い髪です。'
    },
    {
      japanese: '短い',
      kana: 'みじかい',
      vietnamese: 'ngắn',
      english: 'short',
      type: 'main',
      example: '短い時間です。'
    },
    {
      japanese: '太い',
      kana: 'ふとい',
      vietnamese: 'to, béo',
      english: 'thick, fat',
      type: 'main',
      example: '太い木です。'
    },
    {
      japanese: '細い',
      kana: 'ほそい',
      vietnamese: 'mỏng, gầy',
      english: 'thin, slender',
      type: 'main',
      example: '細い道です。'
    },

    // Quantity and amount
    {
      japanese: '多い',
      kana: 'おおい',
      vietnamese: 'nhiều',
      english: 'many, much',
      type: 'main',
      example: '人が多いです。'
    },
    {
      japanese: '少ない',
      kana: 'すくない',
      vietnamese: 'ít',
      english: 'few, little',
      type: 'main',
      example: '時間が少ないです。'
    },
    {
      japanese: 'たくさん',
      kana: 'たくさん',
      vietnamese: 'nhiều',
      english: 'many, a lot',
      type: 'main',
      example: 'たくさん食べました。'
    },
    {
      japanese: '少し',
      kana: 'すこし',
      vietnamese: 'một ít',
      english: 'a little',
      type: 'main',
      example: '少し待ってください。'
    },
    {
      japanese: 'ちょっと',
      kana: 'ちょっと',
      vietnamese: 'một chút',
      english: 'a little bit',
      type: 'main',
      example: 'ちょっと疲れました。'
    },

    // Speed and time
    {
      japanese: '速い',
      kana: 'はやい',
      vietnamese: 'nhanh',
      english: 'fast, quick',
      type: 'main',
      example: '新幹線は速いです。'
    },
    {
      japanese: '早い',
      kana: 'はやい',
      vietnamese: 'sớm',
      english: 'early',
      type: 'main',
      example: '朝早く起きます。'
    },
    {
      japanese: '遅い',
      kana: 'おそい',
      vietnamese: 'chậm, muộn',
      english: 'slow, late',
      type: 'main',
      example: '遅くなりました。'
    },

    // Quality and condition
    {
      japanese: 'いい / 良い',
      kana: 'いい / よい',
      vietnamese: 'tốt',
      english: 'good',
      type: 'main',
      example: 'いい天気です。'
    },
    {
      japanese: '悪い',
      kana: 'わるい',
      vietnamese: 'xấu',
      english: 'bad',
      type: 'main',
      example: '天気が悪いです。'
    },
    {
      japanese: '新しい',
      kana: 'あたらしい',
      vietnamese: 'mới',
      english: 'new',
      type: 'main',
      example: '新しい車です。'
    },
    {
      japanese: '古い',
      kana: 'ふるい',
      vietnamese: 'cũ',
      english: 'old',
      type: 'main',
      example: '古い建物です。'
    },
    {
      japanese: '若い',
      kana: 'わかい',
      vietnamese: 'trẻ',
      english: 'young',
      type: 'main',
      example: 'まだ若いです。'
    },

    // Additional vocabulary
    {
      japanese: '比べる',
      kana: 'くらべる',
      vietnamese: 'so sánh',
      english: 'to compare',
      type: 'additional',
      example: '日本とベトナムを比べます。'
    },
    {
      japanese: '比較',
      kana: 'ひかく',
      vietnamese: 'so sánh',
      english: 'comparison',
      type: 'additional',
      example: '比較してみましょう。'
    },
    {
      japanese: '以上',
      kana: 'いじょう',
      vietnamese: 'trên, hơn (bằng hoặc hơn)',
      english: 'more than, over',
      type: 'additional',
      example: '18歳以上です。'
    },
    {
      japanese: '以下',
      kana: 'いか',
      vietnamese: 'dưới (bằng hoặc dưới)',
      english: 'less than, under',
      type: 'additional',
      example: '18歳以下です。'
    },
    {
      japanese: '以内',
      kana: 'いない',
      vietnamese: 'trong vòng',
      english: 'within',
      type: 'additional',
      example: '1時間以内に終わります。'
    },
    {
      japanese: '程度',
      kana: 'ていど',
      vietnamese: 'mức độ',
      english: 'degree, extent',
      type: 'additional',
      example: 'どの程度分かりますか。'
    },
    {
      japanese: 'レベル',
      kana: 'レベル',
      vietnamese: 'trình độ',
      english: 'level',
      type: 'additional',
      example: '日本語のレベルは？'
    },
    {
      japanese: '平均',
      kana: 'へいきん',
      vietnamese: 'trung bình',
      english: 'average',
      type: 'additional',
      example: '平均より高いです。'
    },
    {
      japanese: '普通',
      kana: 'ふつう',
      vietnamese: 'bình thường',
      english: 'normal, ordinary',
      type: 'additional',
      example: '普通のサイズです。'
    },
    {
      japanese: '特別',
      kana: 'とくべつ',
      vietnamese: 'đặc biệt',
      english: 'special',
      type: 'additional',
      example: '特別な日です。'
    },
    {
      japanese: '例外',
      kana: 'れいがい',
      vietnamese: 'ngoại lệ',
      english: 'exception',
      type: 'additional',
      example: '例外はありません。'
    },
    {
      japanese: '標準',
      kana: 'ひょうじゅん',
      vietnamese: 'tiêu chuẩn',
      english: 'standard',
      type: 'additional',
      example: '標準的なサイズです。'
    },

    // Supplementary
    {
      japanese: '優れる',
      kana: 'すぐれる',
      vietnamese: 'xuất sắc',
      english: 'to excel, to be superior',
      type: 'supplementary',
      example: '優れた技術です。'
    },
    {
      japanese: '劣る',
      kana: 'おとる',
      vietnamese: 'kém hơn',
      english: 'to be inferior',
      type: 'supplementary',
      example: '品質が劣ります。'
    },
    {
      japanese: '上回る',
      kana: 'うわまわる',
      vietnamese: 'vượt qua',
      english: 'to exceed, to surpass',
      type: 'supplementary',
      example: '予想を上回りました。'
    },
    {
      japanese: '下回る',
      kana: 'したまわる',
      vietnamese: 'dưới mức',
      english: 'to fall below',
      type: 'supplementary',
      example: '基準を下回ります。'
    },
    {
      japanese: '匹敵',
      kana: 'ひってき',
      vietnamese: 'sánh bằng',
      english: 'to rival, to match',
      type: 'supplementary',
      example: '彼に匹敵する人はいません。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 1a097581be1a8f12
    {
      japanese: "答えます",
      kana: "こたえます",
      vietnamese: "trả lời",
      english: "trả lời",
      type: "main",
      example: "質問に答えます。\nShitsumon ni kotaemasu.\nTrả lời câu hỏi."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 4f56969b2bfbd146
    {
      japanese: "質問",
      kana: "しつもん",
      vietnamese: "câu hỏi",
      english: "câu hỏi",
      type: "main",
      example: "質問があります。\nShitsumon ga arimasu.\nTôi có câu hỏi."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | ca50ba6b4bcf5c59
    {
      japanese: "倒れます",
      kana: "たおれます",
      vietnamese: "đổ, ngã",
      english: "đổ, ngã",
      type: "main",
      example: "ビルが倒れました。\nBiru ga taoremashita.\nTòa nhà đã đổ."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 9dde17fb2df7a87f
    {
      japanese: "通ります",
      kana: "とおります",
      vietnamese: "đi qua",
      english: "đi qua",
      type: "main",
      example: "この道を通ります。\nKono michi o toorimasu.\nTôi đi qua con đường này."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 21826df04f7e2699
    {
      japanese: "道",
      kana: "みち",
      vietnamese: "đường",
      english: "đường",
      type: "main",
      example: "道を渡ります。\nMichi o watarimasu.\nTôi băng qua đường."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 174707bd0f09f294
    {
      japanese: "死にます",
      kana: "しにます",
      vietnamese: "chết",
      english: "chết",
      type: "main",
      example: "事故で人が死にました。\nJiko de hito ga shinimashita.\nCó người chết vì tai nạn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | d0d141a447aea1a1
    {
      japanese: "びっくりします",
      kana: "びっくりします",
      vietnamese: "ngạc nhiên, giật mình",
      english: "ngạc nhiên, giật mình",
      type: "main",
      example: "大きな音にびっくりしました。\nOokina oto ni bikkuri shimashita.\nTôi giật mình vì tiếng động lớn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | d370dc595c64efb2
    {
      japanese: "がっかりします",
      kana: "がっかりします",
      vietnamese: "thất vọng",
      english: "thất vọng",
      type: "main",
      example: "試験に失敗して、がっかりしました。\nShiken ni shippai shite, gakkari shimashita.\nTôi thất vọng vì thi trượt."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 1ad4f0a88afb8b76
    {
      japanese: "安心します",
      kana: "あんしんします",
      vietnamese: "yên tâm",
      english: "yên tâm",
      type: "main",
      example: "家族が無事で安心しました。\nKazoku ga buji de anshin shimashita.\nTôi yên tâm vì gia đình bình an."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | fb6f8feded6ca96f
    {
      japanese: "けんかします",
      kana: "けんかします",
      vietnamese: "cãi nhau",
      english: "cãi nhau",
      type: "main",
      example: "友達とけんかしました。\nTomodachi to kenka shimashita.\nTôi đã cãi nhau với bạn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | f3c8cd0a3f45c5ca
    {
      japanese: "離婚します",
      kana: "りこんします",
      vietnamese: "ly dị, ly hôn",
      english: "ly dị, ly hôn",
      type: "main",
      example: "両親は離婚しました。\nRyoushin wa rikon shimashita.\nBố mẹ tôi đã ly hôn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 5c81c7a3bd3d0159
    {
      japanese: "太ります",
      kana: "ふとります",
      vietnamese: "béo lên, tăng cân",
      english: "béo lên, tăng cân",
      type: "main",
      example: "最近、少し太りました。\nSaikin, sukoshi futorimashita.\nGần đây tôi hơi tăng cân."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | bb520d436a044424
    {
      japanese: "やせます",
      kana: "やせます",
      vietnamese: "gầy đi, giảm cân",
      english: "gầy đi, giảm cân",
      type: "main",
      example: "3キロやせました。\nSan-kiro yasemashita.\nTôi đã giảm 3 kg."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 6fd7d10f60d93ab7
    {
      japanese: "複雑な",
      kana: "ふくざつな",
      vietnamese: "phức tạp",
      english: "phức tạp",
      type: "main",
      example: "この問題は複雑です。\nKono mondai wa fukuzatsu desu.\nVấn đề này phức tạp."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 5becf04a4411c251
    {
      japanese: "邪魔な",
      kana: "じゃまな",
      vietnamese: "cản trở, vướng, chiếm chỗ",
      english: "cản trở, vướng, chiếm chỗ",
      type: "main",
      example: "この箱は邪魔です。\nKono hako wa jama desu.\nCái hộp này vướng quá."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | a7a3429c4429b6bb
    {
      japanese: "硬い",
      kana: "かたい",
      vietnamese: "cứng",
      english: "cứng",
      type: "main",
      example: "このパンは硬いです。\nKono pan wa katai desu.\nCái bánh mì này cứng."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 1e68ccc6b59f08ca
    {
      japanese: "柔らかい",
      kana: "やわらかい",
      vietnamese: "mềm",
      english: "mềm",
      type: "main",
      example: "この肉は柔らかいです。\nKono niku wa yawarakai desu.\nMiếng thịt này mềm."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | db2368b76376a3c5
    {
      japanese: "汚い",
      kana: "きたない",
      vietnamese: "bẩn",
      english: "bẩn",
      type: "main",
      example: "部屋が汚いです。\nHeya ga kitanai desu.\nPhòng bẩn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 5fa4acbd2d82d3c7
    {
      japanese: "うれしい",
      kana: "うれしい",
      vietnamese: "vui, mừng",
      english: "vui, mừng",
      type: "main",
      example: "合格して、うれしいです。\nGoukaku shite, ureshii desu.\nTôi vui vì đã đỗ."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 1f4409892e348881
    {
      japanese: "悲しい",
      kana: "かなしい",
      vietnamese: "buồn, đau thương",
      english: "buồn, đau thương",
      type: "main",
      example: "悲しいニュースを聞きました。\nKanashii nyuusu o kikimashita.\nTôi đã nghe tin buồn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 2859b32cdd47e22b
    {
      japanese: "恥ずかしい",
      kana: "はずかしい",
      vietnamese: "xấu hổ, thẹn",
      english: "xấu hổ, thẹn",
      type: "main",
      example: "みんなの前で話すのは恥ずかしいです。\nMinna no mae de hanasu no wa hazukashii desu.\nNói trước mọi người thì xấu hổ."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 7d5f99329eb6027d
    {
      japanese: "首相",
      kana: "しゅしょう",
      vietnamese: "thủ tướng",
      english: "thủ tướng",
      type: "main",
      example: "首相が会場に来ました。\nShushou ga kaijou ni kimashita.\nThủ tướng đã đến hội trường."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 6549f4bf3ccaf84a
    {
      japanese: "地震",
      kana: "じしん",
      vietnamese: "động đất",
      english: "động đất",
      type: "main",
      example: "昨日、地震がありました。\nKinou, jishin ga arimashita.\nHôm qua có động đất."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 7c8b1fb9117009ad
    {
      japanese: "津波",
      kana: "つなみ",
      vietnamese: "sóng thần",
      english: "sóng thần",
      type: "main",
      example: "津波に注意してください。\nTsunami ni chuui shite kudasai.\nHãy chú ý sóng thần."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | b7d48c7da60c1672
    {
      japanese: "台風",
      kana: "たいふう",
      vietnamese: "bão",
      english: "bão",
      type: "main",
      example: "台風が来ます。\nTaifuu ga kimasu.\nBão sẽ đến."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | dd5e7e881f5a007d
    {
      japanese: "雷",
      kana: "かみなり",
      vietnamese: "sấm",
      english: "sấm",
      type: "main",
      example: "雷が鳴っています。\nKaminari ga natte imasu.\nSấm đang kêu."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | b7a6310630e52a48
    {
      japanese: "火事",
      kana: "かじ",
      vietnamese: "hỏa hoạn",
      english: "hỏa hoạn",
      type: "main",
      example: "近くで火事がありました。\nChikaku de kaji ga arimashita.\nGần đây có hỏa hoạn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 9798b4fa87af0710
    {
      japanese: "事故",
      kana: "じこ",
      vietnamese: "tai nạn, sự cố",
      english: "tai nạn, sự cố",
      type: "main",
      example: "事故にあいました。\nJiko ni aimashita.\nTôi đã gặp tai nạn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | e984fda733900893
    {
      japanese: "ハイキング",
      kana: "ハイキング",
      vietnamese: "dã ngoại, hiking",
      english: "dã ngoại, hiking",
      type: "main",
      example: "週末、ハイキングに行きます。\nShuumatsu, haikingu ni ikimasu.\nCuối tuần tôi đi dã ngoại."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | b85934fa57eac0fa
    {
      japanese: "お見合い",
      kana: "おみあい",
      vietnamese: "xem mặt, mai mối",
      english: "xem mặt, mai mối",
      type: "main",
      example: "お見合いをしました。\nO-miai o shimashita.\nTôi đã đi xem mặt."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | ce5b9f80635227ff
    {
      japanese: "操作",
      kana: "そうさ",
      vietnamese: "thao tác",
      english: "thao tác",
      type: "main",
      example: "この機械の操作は簡単です。\nKono kikai no sousa wa kantan desu.\nThao tác của máy này đơn giản."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 49a376c86b4153b3
    {
      japanese: "会場",
      kana: "かいじょう",
      vietnamese: "hội trường, địa điểm tổ chức",
      english: "hội trường, địa điểm tổ chức",
      type: "main",
      example: "会場はどこですか。\nKaijou wa doko desu ka.\nHội trường ở đâu?"
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 4e618205d22cc2d7
    {
      japanese: "～代",
      kana: "～だい",
      vietnamese: "tiền, phí ~",
      english: "tiền, phí ~",
      type: "main",
      example: "タクシー代を払います。\nTakushii-dai o haraimasu.\nTôi trả tiền taxi."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | ebb4175e1deb266c
    {
      japanese: "～屋",
      kana: "～や",
      vietnamese: "tiệm, cửa hàng, người bán ~",
      english: "tiệm, cửa hàng, người bán ~",
      type: "main",
      example: "花屋で花を買います。\nHanaya de hana o kaimasu.\nTôi mua hoa ở tiệm hoa."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | ac14b9cc4dfa3f95
    {
      japanese: "フロント",
      kana: "フロント",
      vietnamese: "quầy lễ tân",
      english: "quầy lễ tân",
      type: "main",
      example: "フロントに電話します。\nFuronto ni denwa shimasu.\nTôi gọi cho lễ tân."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 7ef760d77a89e065
    {
      japanese: "一号室",
      kana: "いちごうしつ",
      vietnamese: "phòng số 1",
      english: "phòng số 1",
      type: "main",
      example: "一号室へ行ってください。\nIchigou-shitsu e itte kudasai.\nHãy đi đến phòng số 1."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | e5a74adaef064a15
    {
      japanese: "タオル",
      kana: "タオル",
      vietnamese: "khăn lau, khăn tắm",
      english: "khăn lau, khăn tắm",
      type: "main",
      example: "タオルを貸してください。\nTaoru o kashite kudasai.\nHãy cho tôi mượn khăn."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | f625f9b146b6f926
    {
      japanese: "せっけん",
      kana: "せっけん",
      vietnamese: "xà phòng",
      english: "xà phòng",
      type: "main",
      example: "せっけんで手を洗います。\nSekken de te o araimasu.\nTôi rửa tay bằng xà phòng."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 101d254625e379f9
    {
      japanese: "大勢",
      kana: "おおぜい",
      vietnamese: "nhiều người",
      english: "nhiều người",
      type: "main",
      example: "会場に大勢の人がいます。\nKaijou ni oozei no hito ga imasu.\nCó nhiều người ở hội trường."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 9c64d060b6614a65
    {
      japanese: "お疲れ様でした",
      kana: "おつかれさまでした",
      vietnamese: "Chắc anh/chị đã mệt vì làm việc; cảm ơn vì đã vất vả",
      english: "Chắc anh/chị đã mệt vì làm việc; cảm ơn vì đã vất vả",
      type: "main",
      example: "お疲れ様でした。\nOtsukaresama deshita.\nAnh/chị vất vả rồi."
    },
    // source: review_tu_vung_bai_39.md | 1. Từ vựng chính | 24af6695e55779bc
    {
      japanese: "伺います",
      kana: "うかがいます",
      vietnamese: "tôi đến thăm; cách nói khiêm nhường của 行きます / ikimasu",
      english: "tôi đến thăm; cách nói khiêm nhường của 行きます / ikimasu",
      type: "main",
      example: "明日、先生のお宅に伺います。\nAshita, sensei no otaku ni ukagaimasu.\nNgày mai tôi xin đến nhà thầy/cô."
    },
    // source: review_tu_vung_bai_39.md | 2. Từ vựng phần hội thoại | 9aacac9cecc16143
    {
      japanese: "とちゅうで / 途中で",
      kana: "とちゅうで / 途中で",
      vietnamese: "giữa đường, dọc đường",
      english: "giữa đường, dọc đường",
      type: "supplementary",
      example: "途中で雨が降りました。\nTochuu de ame ga furimashita.\nGiữa đường trời đã mưa."
    },
    // source: review_tu_vung_bai_39.md | 2. Từ vựng phần hội thoại | 046566a7f11338a2
    {
      japanese: "トラック",
      kana: "トラック",
      vietnamese: "xe tải",
      english: "xe tải",
      type: "supplementary",
      example: "トラックと車がぶつかりました。\nTorakku to kuruma ga butsukarimashita.\nXe tải và ô tô đã va chạm."
    },
    // source: review_tu_vung_bai_39.md | 2. Từ vựng phần hội thoại | 15f518a6b00179ab
    {
      japanese: "ぶつかります",
      kana: "ぶつかります",
      vietnamese: "đâm, va chạm",
      english: "đâm, va chạm",
      type: "supplementary",
      example: "自転車が木にぶつかりました。\nJitensha ga ki ni butsukarimashita.\nXe đạp đã đâm vào cây."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | a07461a42d8021bb
    {
      japanese: "大人",
      kana: "おとな",
      vietnamese: "người lớn",
      english: "người lớn",
      type: "supplementary",
      example: "大人になりました。\nOtona ni narimashita.\nTôi đã trở thành người lớn."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | 580e56b1fee61ccf
    {
      japanese: "しかし",
      kana: "しかし",
      vietnamese: "nhưng",
      english: "nhưng",
      type: "supplementary",
      example: "便利です。しかし、高いです。\nBenri desu. Shikashi, takai desu.\nTiện lợi. Nhưng đắt."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | c1837db33e768515
    {
      japanese: "また",
      kana: "また",
      vietnamese: "hơn nữa, lại, và",
      english: "hơn nữa, lại, và",
      type: "supplementary",
      example: "また会いましょう。\nMata aimashou.\nHẹn gặp lại."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | 57dc304a5d1b6f3e
    {
      japanese: "洋服",
      kana: "ようふく",
      vietnamese: "quần áo kiểu Tây Âu",
      english: "quần áo kiểu Tây Âu",
      type: "supplementary",
      example: "洋服を買いました。\nYoufuku o kaimashita.\nTôi đã mua quần áo Tây."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | 6ec8a810ec79c010
    {
      japanese: "西洋化します",
      kana: "せいようかします",
      vietnamese: "Tây Âu hóa",
      english: "Tây Âu hóa",
      type: "supplementary",
      example: "生活が西洋化しました。\nSeikatsu ga seiyouka shimashita.\nCuộc sống đã Tây Âu hóa."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | 06671ead49901c6e
    {
      japanese: "合います",
      kana: "あいます",
      vietnamese: "vừa, hợp",
      english: "vừa, hợp",
      type: "supplementary",
      example: "この服は私に合います。\nKono fuku wa watashi ni aimasu.\nBộ đồ này hợp với tôi."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | a34fa051bd9274be
    {
      japanese: "今では",
      kana: "いまでは",
      vietnamese: "bây giờ thì, hiện nay thì",
      english: "bây giờ thì, hiện nay thì",
      type: "supplementary",
      example: "今では、スマホをよく使います。\nIma de wa, sumaho o yoku tsukaimasu.\nBây giờ thì tôi thường dùng điện thoại thông minh."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | ae88176e7691d1e7
    {
      japanese: "成人式",
      kana: "せいじんしき",
      vietnamese: "lễ trưởng thành",
      english: "lễ trưởng thành",
      type: "supplementary",
      example: "成人式に出席します。\nSeijinshiki ni shusseki shimasu.\nTôi tham dự lễ trưởng thành."
    },
    // source: review_tu_vung_bai_39.md | 3. Từ vựng phần đọc hiểu | b4e6a98ffbcfabdb
    {
      japanese: "伝統的な",
      kana: "でんとうてきな",
      vietnamese: "mang tính truyền thống",
      english: "mang tính truyền thống",
      type: "supplementary",
      example: "これは伝統的な服です。\nKore wa dentouteki na fuku desu.\nĐây là trang phục truyền thống."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | 45709542a91a0765
    {
      japanese: "質問に答えます",
      kana: "質問に答えます",
      vietnamese: "trả lời câu hỏi",
      english: "trả lời câu hỏi",
      type: "supplementary",
      example: "Dùng trợ từ に / ni với nội dung cần trả lời."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | 8ea136da3fb7c6eb
    {
      japanese: "ビルが倒れます",
      kana: "ビルが倒れます",
      vietnamese: "tòa nhà đổ",
      english: "tòa nhà đổ",
      type: "supplementary",
      example: "倒れます / taoremasu là tự động từ, vật tự đổ/ngã."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | 5bc17e8e766c8dd2
    {
      japanese: "道を通ります",
      kana: "道を通ります",
      vietnamese: "đi qua đường",
      english: "đi qua đường",
      type: "supplementary",
      example: "を / o có thể dùng với đường đi qua."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | fa9b913d7798b1b6
    {
      japanese: "事故で死にます",
      kana: "事故で死にます",
      vietnamese: "chết vì tai nạn",
      english: "chết vì tai nạn",
      type: "supplementary",
      example: "で / de chỉ nguyên nhân."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | ccba0ee72f5e0a80
    {
      japanese: "けんかします",
      kana: "けんかします",
      vietnamese: "cãi nhau",
      english: "cãi nhau",
      type: "supplementary",
      example: "Thường dùng 友達とけんかします / tomodachi to kenka shimasu = cãi nhau với bạn."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | 5f3d62cb9ad518d2
    {
      japanese: "安心します",
      kana: "安心します",
      vietnamese: "yên tâm",
      english: "yên tâm",
      type: "supplementary",
      example: "Thường dùng khi biết tin tốt/an toàn."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | 0155568d31eac2f9
    {
      japanese: "事故にあいます",
      kana: "事故にあいます",
      vietnamese: "gặp tai nạn",
      english: "gặp tai nạn",
      type: "supplementary",
      example: "Trong bài 39 có 事故 / jiko, cụm này rất hay gặp ở N4."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | b69d2330d0c47a5f
    {
      japanese: "お疲れ様でした",
      kana: "お疲れ様でした",
      vietnamese: "anh/chị vất vả rồi",
      english: "anh/chị vất vả rồi",
      type: "supplementary",
      example: "Dùng sau khi người khác làm xong việc hoặc khi kết thúc buổi làm."
    },
    // source: review_tu_vung_bai_39.md | 4. Cụm cần nhớ trong bài 39 | 700466ce727350f5
    {
      japanese: "伺います",
      kana: "伺います",
      vietnamese: "tôi xin đến thăm",
      english: "tôi xin đến thăm",
      type: "supplementary",
      example: "Khiêm nhường ngữ của 行きます / ikimasu hoặc 来ます / kimasu tùy ngữ cảnh."
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 82dfdc67535f228e
    {
      japanese: "答",
      kana: "トウ / tou",
      vietnamese: "Đáp — trả lời",
      english: "trả lời",
      type: "kanji",
      example: "答えます / kotaemasu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 150f2d2da796f2bd
    {
      japanese: "問",
      kana: "モン / mon",
      vietnamese: "Vấn — hỏi, câu hỏi",
      english: "hỏi, câu hỏi",
      type: "kanji",
      example: "質問 / shitsumon"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 12c3c03fe58d4d53
    {
      japanese: "通",
      kana: "ツウ / tsuu",
      vietnamese: "Thông — đi qua, thông suốt",
      english: "đi qua, thông suốt",
      type: "kanji",
      example: "通ります / toorimasu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | f789979b54dc98cc
    {
      japanese: "道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — con đường",
      english: "con đường",
      type: "kanji",
      example: "道 / michi"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | dbab50b62536b2c4
    {
      japanese: "死",
      kana: "シ / shi",
      vietnamese: "Tử — chết",
      english: "chết",
      type: "kanji",
      example: "死にます / shinimasu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 8768f21b2bc9363d
    {
      japanese: "安",
      kana: "アン / an",
      vietnamese: "An — yên ổn, rẻ",
      english: "yên ổn, rẻ",
      type: "kanji",
      example: "安心 / anshin"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 420679e39fba6659
    {
      japanese: "心",
      kana: "シン / shin",
      vietnamese: "Tâm — tim, lòng",
      english: "tim, lòng",
      type: "kanji",
      example: "安心 / anshin"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | dcd041cde51967db
    {
      japanese: "太",
      kana: "タイ / tai",
      vietnamese: "Thái — to, béo",
      english: "to, béo",
      type: "kanji",
      example: "太ります / futorimasu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 68c6df0983d4c06c
    {
      japanese: "汚",
      kana: "オ / o",
      vietnamese: "Ô — bẩn",
      english: "bẩn",
      type: "kanji",
      example: "汚い / kitanai"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 08bdaf7817103d52
    {
      japanese: "地",
      kana: "チ / chi, ジ / ji",
      vietnamese: "Địa — đất",
      english: "đất",
      type: "kanji",
      example: "地震 / jishin"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 97ca294c7bd1cfff
    {
      japanese: "台",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đài — bệ, đài",
      english: "bệ, đài",
      type: "kanji",
      example: "台風 / taifuu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 0fddc87289e33e2c
    {
      japanese: "風",
      kana: "フウ / fuu",
      vietnamese: "Phong — gió",
      english: "gió",
      type: "kanji",
      example: "台風 / taifuu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 10767f39a5d1b7e8
    {
      japanese: "火",
      kana: "カ / ka",
      vietnamese: "Hỏa — lửa",
      english: "lửa",
      type: "kanji",
      example: "火事 / kaji"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | dccdbebfcfeabdc8
    {
      japanese: "事",
      kana: "ジ / ji",
      vietnamese: "Sự — việc, sự việc",
      english: "việc, sự việc",
      type: "kanji",
      example: "事故 / jiko, 火事 / kaji"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | a99d0344c5bb4e86
    {
      japanese: "見",
      kana: "ケン / ken",
      vietnamese: "Kiến — nhìn, thấy",
      english: "nhìn, thấy",
      type: "kanji",
      example: "お見合い / o-miai"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | bf66c8c128a6d2ef
    {
      japanese: "合",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — hợp, gặp nhau",
      english: "hợp, gặp nhau",
      type: "kanji",
      example: "お見合い / o-miai, 合います / aimasu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | f8da9a9d55e0b0f5
    {
      japanese: "会",
      kana: "カイ / kai",
      vietnamese: "Hội — gặp, hội",
      english: "gặp, hội",
      type: "kanji",
      example: "会場 / kaijou"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 752d8a0a36c3118c
    {
      japanese: "場",
      kana: "ジョウ / jou",
      vietnamese: "Trường — nơi, địa điểm",
      english: "nơi, địa điểm",
      type: "kanji",
      example: "会場 / kaijou"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 517e2caf5d695574
    {
      japanese: "代",
      kana: "ダイ / dai",
      vietnamese: "Đại — đời, tiền phí",
      english: "đời, tiền phí",
      type: "kanji",
      example: "～代 / ~dai"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | c7000ec377c55698
    {
      japanese: "屋",
      kana: "オク / oku",
      vietnamese: "Ốc — nhà, cửa hàng",
      english: "nhà, cửa hàng",
      type: "kanji",
      example: "～屋 / ~ya"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | c5ee287144b50016
    {
      japanese: "一",
      kana: "イチ / ichi",
      vietnamese: "Nhất — một",
      english: "một",
      type: "kanji",
      example: "一号室 / ichigou-shitsu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 0934e780b3c2e233
    {
      japanese: "室",
      kana: "シツ / shitsu",
      vietnamese: "Thất — phòng",
      english: "phòng",
      type: "kanji",
      example: "一号室 / ichigou-shitsu"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 5c7a01f1964995c8
    {
      japanese: "大",
      kana: "ダイ / dai",
      vietnamese: "Đại — lớn",
      english: "lớn",
      type: "kanji",
      example: "大勢 / oozei, 大人 / otona"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 2d57009a1cf49b58
    {
      japanese: "人",
      kana: "ジン / jin, ニン / nin",
      vietnamese: "Nhân — người",
      english: "người",
      type: "kanji",
      example: "大人 / otona"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 7c50cf6b4e397d81
    {
      japanese: "服",
      kana: "フク / fuku",
      vietnamese: "Phục — quần áo",
      english: "quần áo",
      type: "kanji",
      example: "洋服 / youfuku"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | d0c5ef2bec377a3a
    {
      japanese: "西",
      kana: "セイ / sei, サイ / sai",
      vietnamese: "Tây — phía tây",
      english: "phía tây",
      type: "kanji",
      example: "西洋化 / seiyouka"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | a15695724ccb0d60
    {
      japanese: "洋",
      kana: "ヨウ / you",
      vietnamese: "Dương — biển lớn, phương Tây",
      english: "biển lớn, phương Tây",
      type: "kanji",
      example: "洋服 / youfuku, 西洋化 / seiyouka"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 37e1a0ea368c3cbc
    {
      japanese: "今",
      kana: "コン / kon, キン / kin",
      vietnamese: "Kim — bây giờ",
      english: "bây giờ",
      type: "kanji",
      example: "今では / ima de wa"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 1a5e4c2dac1b8e77
    {
      japanese: "成",
      kana: "セイ / sei",
      vietnamese: "Thành — trở thành",
      english: "trở thành",
      type: "kanji",
      example: "成人式 / seijinshiki"
    },
    // source: review_tu_vung_bai_39.md | 5. Kanji N5–N4 cần học kỹ | 770d40055bc9a7b0
    {
      japanese: "式",
      kana: "シキ / shiki",
      vietnamese: "Thức — nghi thức, buổi lễ",
      english: "nghi thức, buổi lễ",
      type: "kanji",
      example: "成人式 / seijinshiki"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 61ff7c4d11c9c748
    {
      japanese: "答える",
      kana: "こた.える / kotaeru",
      vietnamese: "Đáp — 答 = trả lời",
      english: "答 = trả lời",
      type: "kanji",
      example: "答える"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2031b83fe0dd5194
    {
      japanese: "回答",
      kana: "トウ / tou",
      vietnamese: "Đáp — 回 = quay lại, đáp lại; 答 = trả lời",
      english: "回 = quay lại, đáp lại; 答 = trả lời",
      type: "kanji",
      example: "回答"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7905a045361b1232
    {
      japanese: "質問",
      kana: "モン / mon",
      vietnamese: "Vấn — 質 = chất vấn; 問 = hỏi",
      english: "質 = chất vấn; 問 = hỏi",
      type: "kanji",
      example: "質問"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4985337dbacc9395
    {
      japanese: "問題",
      kana: "モン / mon",
      vietnamese: "Vấn — 問 = vấn đề",
      english: "問 = vấn đề",
      type: "kanji",
      example: "問題"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ecdbc0d97b1e2da6
    {
      japanese: "通る",
      kana: "とお.る / tooru",
      vietnamese: "Thông — 通 = đi qua",
      english: "通 = đi qua",
      type: "kanji",
      example: "通る"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 48165e29fe2d1f71
    {
      japanese: "交通",
      kana: "ツウ / tsuu",
      vietnamese: "Thông — 交 = giao nhau; 通 = thông qua",
      english: "交 = giao nhau; 通 = thông qua",
      type: "kanji",
      example: "交通"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | a57588932351e900
    {
      japanese: "道",
      kana: "みち / michi",
      vietnamese: "Đạo — 道 = đường",
      english: "道 = đường",
      type: "kanji",
      example: "道"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cc1a35921747b334
    {
      japanese: "水道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — 水 = nước; 道 = đường/ống dẫn",
      english: "水 = nước; 道 = đường/ống dẫn",
      type: "kanji",
      example: "水道"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e832498df38a086b
    {
      japanese: "死ぬ",
      kana: "し.ぬ / shinu",
      vietnamese: "Tử — 死 = chết",
      english: "死 = chết",
      type: "kanji",
      example: "死ぬ"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c828c6412901204a
    {
      japanese: "安心",
      kana: "アン / an",
      vietnamese: "An — 安 = yên; 心 = lòng",
      english: "安 = yên; 心 = lòng",
      type: "kanji",
      example: "安心"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b31e02acb070dc51
    {
      japanese: "安い",
      kana: "やす.い / yasui",
      vietnamese: "An — 安 = rẻ",
      english: "安 = rẻ",
      type: "kanji",
      example: "安い"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7b65989a973fa117
    {
      japanese: "安心",
      kana: "シン / shin",
      vietnamese: "Tâm — 安 = yên; 心 = lòng",
      english: "安 = yên; 心 = lòng",
      type: "kanji",
      example: "安心"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | db482ffdcec9827b
    {
      japanese: "心",
      kana: "こころ / kokoro",
      vietnamese: "Tâm — 心 = lòng, trái tim",
      english: "心 = lòng, trái tim",
      type: "kanji",
      example: "心"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ff177bbf1750ce11
    {
      japanese: "太る",
      kana: "ふと.る / futoru",
      vietnamese: "Thái — 太 = béo lên",
      english: "太 = béo lên",
      type: "kanji",
      example: "太る"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | a44a5778e79007a3
    {
      japanese: "太陽",
      kana: "タイ / tai",
      vietnamese: "Thái — 太 = to, lớn; 陽 = mặt trời",
      english: "太 = to, lớn; 陽 = mặt trời",
      type: "kanji",
      example: "太陽"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8f3d15016a325a7c
    {
      japanese: "汚い",
      kana: "きたな.い / kitanai",
      vietnamese: "Ô — 汚 = bẩn",
      english: "汚 = bẩn",
      type: "kanji",
      example: "汚い"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 1b95e610cb71c126
    {
      japanese: "地震",
      kana: "ジ / ji",
      vietnamese: "Địa — 地 = đất; 震 = rung",
      english: "地 = đất; 震 = rung",
      type: "kanji",
      example: "地震"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e65a9f9932b8c95b
    {
      japanese: "台風",
      kana: "タイ / tai",
      vietnamese: "Đài — 台 = bệ, đài; 風 = gió",
      english: "台 = bệ, đài; 風 = gió",
      type: "kanji",
      example: "台風"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | a7c1faf19315b1ed
    {
      japanese: "台風",
      kana: "フウ / fuu",
      vietnamese: "Phong — 台 = đài; 風 = gió",
      english: "台 = đài; 風 = gió",
      type: "kanji",
      example: "台風"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2ac6cf4d4f979e48
    {
      japanese: "風",
      kana: "かぜ / kaze",
      vietnamese: "Phong — 風 = gió",
      english: "風 = gió",
      type: "kanji",
      example: "風"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 662bf73127b0cdc9
    {
      japanese: "火事",
      kana: "カ / ka",
      vietnamese: "Hỏa — 火 = lửa; 事 = sự việc",
      english: "火 = lửa; 事 = sự việc",
      type: "kanji",
      example: "火事"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 043e947304d32fc2
    {
      japanese: "火",
      kana: "ひ / hi",
      vietnamese: "Hỏa — 火 = lửa",
      english: "火 = lửa",
      type: "kanji",
      example: "火"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7a809c283478977e
    {
      japanese: "火事",
      kana: "ジ / ji",
      vietnamese: "Sự — 火 = lửa; 事 = sự việc",
      english: "火 = lửa; 事 = sự việc",
      type: "kanji",
      example: "火事"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bbb8b75b57e0c312
    {
      japanese: "事",
      kana: "こと / koto",
      vietnamese: "Sự — 事 = việc",
      english: "事 = việc",
      type: "kanji",
      example: "事"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c659e82dcc90b4d2
    {
      japanese: "見合い",
      kana: "み / mi",
      vietnamese: "Kiến — 見 = nhìn; 合 = gặp nhau",
      english: "見 = nhìn; 合 = gặp nhau",
      type: "kanji",
      example: "見合い"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f8dfc864ab22271b
    {
      japanese: "見る",
      kana: "み.る / miru",
      vietnamese: "Kiến — 見 = nhìn, xem",
      english: "見 = nhìn, xem",
      type: "kanji",
      example: "見る"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8eb31960541d5e43
    {
      japanese: "合う",
      kana: "あ.う / au",
      vietnamese: "Hợp — 合 = hợp, vừa",
      english: "合 = hợp, vừa",
      type: "kanji",
      example: "合う"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bde57e763852d1d0
    {
      japanese: "見合い",
      kana: "あ.い / ai",
      vietnamese: "Hợp — 見 = xem; 合 = gặp nhau",
      english: "見 = xem; 合 = gặp nhau",
      type: "kanji",
      example: "見合い"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bf82f7a42f9f2159
    {
      japanese: "会う",
      kana: "あ.う / au",
      vietnamese: "Hội — 会 = gặp",
      english: "会 = gặp",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4907ad1066a3c60d
    {
      japanese: "会場",
      kana: "カイ / kai",
      vietnamese: "Hội — 会 = hội; 場 = nơi",
      english: "会 = hội; 場 = nơi",
      type: "kanji",
      example: "会場"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f26096106b6b3850
    {
      japanese: "会場",
      kana: "ジョウ / jou",
      vietnamese: "Trường — 会 = hội; 場 = nơi",
      english: "会 = hội; 場 = nơi",
      type: "kanji",
      example: "会場"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 20f81a81fd494222
    {
      japanese: "～代",
      kana: "ダイ / dai",
      vietnamese: "Đại — 代 = tiền phí",
      english: "代 = tiền phí",
      type: "kanji",
      example: "～代"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 1dd2df5816c1f1e9
    {
      japanese: "～屋",
      kana: "や / ya",
      vietnamese: "Ốc — 屋 = cửa hàng",
      english: "屋 = cửa hàng",
      type: "kanji",
      example: "～屋"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8dd710f905cef26c
    {
      japanese: "一号室",
      kana: "イチ / ichi",
      vietnamese: "Nhất — 一 = một; 号 = số hiệu; 室 = phòng",
      english: "一 = một; 号 = số hiệu; 室 = phòng",
      type: "kanji",
      example: "一号室"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 92610f088c1c317d
    {
      japanese: "一号室",
      kana: "シツ / shitsu",
      vietnamese: "Thất — 号 = số hiệu; 室 = phòng",
      english: "号 = số hiệu; 室 = phòng",
      type: "kanji",
      example: "一号室"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bdfd4b4a15fa795c
    {
      japanese: "大勢",
      kana: "オオ / oo",
      vietnamese: "Đại — 大 = lớn; 勢 = thế, nhiều người",
      english: "大 = lớn; 勢 = thế, nhiều người",
      type: "kanji",
      example: "大勢"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 40ecb7b5c7e083c8
    {
      japanese: "大人",
      kana: "おお / oo",
      vietnamese: "Đại — 大 = lớn; 人 = người",
      english: "大 = lớn; 人 = người",
      type: "kanji",
      example: "大人"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2601669f215f3a8e
    {
      japanese: "大人",
      kana: "ひと / hito",
      vietnamese: "Nhân — 大 = lớn; 人 = người",
      english: "大 = lớn; 人 = người",
      type: "kanji",
      example: "大人"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 6d87ecd3f3642be2
    {
      japanese: "洋服",
      kana: "フク / fuku",
      vietnamese: "Phục — 洋 = Tây; 服 = quần áo",
      english: "洋 = Tây; 服 = quần áo",
      type: "kanji",
      example: "洋服"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c034fb65b0fcdd45
    {
      japanese: "西洋化",
      kana: "セイ / sei",
      vietnamese: "Tây — 西 = Tây; 洋 = phương Tây; 化 = hóa",
      english: "西 = Tây; 洋 = phương Tây; 化 = hóa",
      type: "kanji",
      example: "西洋化"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8606e4b435dbe4fc
    {
      japanese: "洋服",
      kana: "ヨウ / you",
      vietnamese: "Dương — 洋 = phương Tây; 服 = quần áo",
      english: "洋 = phương Tây; 服 = quần áo",
      type: "kanji",
      example: "洋服"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ca606b1c1385af7e
    {
      japanese: "今",
      kana: "いま / ima",
      vietnamese: "Kim — 今 = bây giờ",
      english: "今 = bây giờ",
      type: "kanji",
      example: "今"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cf20197096e2985c
    {
      japanese: "成人式",
      kana: "セイ / sei",
      vietnamese: "Thành — 成 = trở thành; 人 = người; 式 = lễ",
      english: "成 = trở thành; 人 = người; 式 = lễ",
      type: "kanji",
      example: "成人式"
    },
    // source: review_tu_vung_bai_39.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 45f60524c3074f86
    {
      japanese: "成人式",
      kana: "シキ / shiki",
      vietnamese: "Thức — 成 = thành; 人 = người; 式 = lễ",
      english: "成 = thành; 人 = người; 式 = lễ",
      type: "kanji",
      example: "成人式"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: 'AはBより〜',
      vietnamese: 'A ~ hơn B',
      english: 'A is more ~ than B',
      type: 'main',
      explanation: 'Dùng để so sánh hai đối tượng. A có tính chất hơn B.',
      examples: [
        {
          japanese: '東京は大阪より大きいです。',
          vietnamese: 'Tokyo lớn hơn Osaka.',
          english: 'Tokyo is bigger than Osaka.',
          type: 'main'
        },
        {
          japanese: '夏は冬より暑いです。',
          vietnamese: 'Mùa hè nóng hơn mùa đông.',
          english: 'Summer is hotter than winter.',
          type: 'main'
        },
        {
          japanese: '新幹線は車より速いです。',
          vietnamese: 'Tàu cao tốc nhanh hơn ô tô.',
          english: 'Shinkansen is faster than cars.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'AはBほど〜ない',
      vietnamese: 'A không ~ bằng B',
      english: 'A is not as ~ as B',
      type: 'main',
      explanation: 'So sánh phủ định. A không có tính chất bằng B.',
      examples: [
        {
          japanese: '大阪は東京ほど大きくないです。',
          vietnamese: 'Osaka không lớn bằng Tokyo.',
          english: 'Osaka is not as big as Tokyo.',
          type: 'main'
        },
        {
          japanese: '今日は昨日ほど暑くないです。',
          vietnamese: 'Hôm nay không nóng bằng hôm qua.',
          english: 'Today is not as hot as yesterday.',
          type: 'main'
        },
        {
          japanese: '車は新幹線ほど速くないです。',
          vietnamese: 'Ô tô không nhanh bằng tàu cao tốc.',
          english: 'Cars are not as fast as Shinkansen.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜で一番〜',
      vietnamese: '~ nhất trong ~',
      english: 'the most ~ in/of ~',
      type: 'main',
      explanation: 'So sánh tuyệt đối. Chỉ đối tượng có tính chất nhất trong một phạm vi.',
      examples: [
        {
          japanese: '日本で一番高い山は富士山です。',
          vietnamese: 'Núi cao nhất ở Nhật là núi Phú Sĩ.',
          english: 'The highest mountain in Japan is Mt. Fuji.',
          type: 'main'
        },
        {
          japanese: 'クラスで一番背が高いです。',
          vietnamese: 'Cao nhất trong lớp.',
          english: 'The tallest in the class.',
          type: 'main'
        },
        {
          japanese: '一年で一番暑い月は8月です。',
          vietnamese: 'Tháng nóng nhất trong năm là tháng 8.',
          english: 'The hottest month of the year is August.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'AとBと、どちらが〜ですか',
      vietnamese: 'A và B, cái nào ~?',
      english: 'Which is more ~, A or B?',
      type: 'main',
      explanation: 'Câu hỏi so sánh giữa hai đối tượng.',
      examples: [
        {
          japanese: '日本語と英語と、どちらが難しいですか。',
          vietnamese: 'Tiếng Nhật và tiếng Anh, cái nào khó hơn?',
          english: 'Which is more difficult, Japanese or English?',
          type: 'main'
        },
        {
          japanese: 'コーヒーと紅茶と、どちらが好きですか。',
          vietnamese: 'Cà phê và trà, bạn thích cái nào hơn?',
          english: 'Which do you like better, coffee or tea?',
          type: 'main'
        },
        {
          japanese: '東京と大阪と、どちらが大きいですか。',
          vietnamese: 'Tokyo và Osaka, cái nào lớn hơn?',
          english: 'Which is bigger, Tokyo or Osaka?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜の中で〜が一番〜',
      vietnamese: 'trong ~ thì ~ nhất',
      english: 'among ~, ~ is the most ~',
      type: 'main',
      explanation: 'So sánh tuyệt đối trong một nhóm.',
      examples: [
        {
          japanese: 'スポーツの中でサッカーが一番好きです。',
          vietnamese: 'Trong các môn thể thao, tôi thích bóng đá nhất.',
          english: 'Among sports, I like soccer the best.',
          type: 'main'
        },
        {
          japanese: '家族の中で誰が一番背が高いですか。',
          vietnamese: 'Trong gia đình, ai cao nhất?',
          english: 'Who is the tallest in your family?',
          type: 'main'
        },
        {
          japanese: '季節の中で春が一番好きです。',
          vietnamese: 'Trong các mùa, tôi thích mùa xuân nhất.',
          english: 'Among seasons, I like spring the best.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜と同じ〜',
      vietnamese: 'giống ~ với ~',
      english: 'the same ~ as ~',
      type: 'additional',
      explanation: 'Diễn tả hai đối tượng giống nhau.',
      examples: [
        {
          japanese: '私の車は田中さんと同じです。',
          vietnamese: 'Xe của tôi giống xe của anh Tanaka.',
          english: 'My car is the same as Tanaka\'s.',
          type: 'main'
        },
        {
          japanese: 'あなたと同じ意見です。',
          vietnamese: 'Ý kiến giống bạn.',
          english: 'I have the same opinion as you.',
          type: 'main'
        },
        {
          japanese: '彼女と同じ学校に通っています。',
          vietnamese: 'Tôi học cùng trường với cô ấy.',
          english: 'I go to the same school as her.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'ずっと〜',
      vietnamese: 'hơn nhiều',
      english: 'much more ~, far more ~',
      type: 'additional',
      explanation: 'Nhấn mạnh mức độ chênh lệch lớn trong so sánh.',
      examples: [
        {
          japanese: '今日は昨日よりずっと暑いです。',
          vietnamese: 'Hôm nay nóng hơn hôm qua nhiều.',
          english: 'Today is much hotter than yesterday.',
          type: 'main'
        },
        {
          japanese: '東京は私の町よりずっと大きいです。',
          vietnamese: 'Tokyo lớn hơn thị trấn của tôi nhiều.',
          english: 'Tokyo is much bigger than my town.',
          type: 'main'
        },
        {
          japanese: '新幹線は車よりずっと速いです。',
          vietnamese: 'Tàu cao tốc nhanh hơn ô tô nhiều.',
          english: 'Shinkansen is much faster than cars.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ぐらい/くらい',
      vietnamese: 'khoảng ~, độ ~',
      english: 'about ~, approximately ~',
      type: 'additional',
      explanation: 'Diễn tả số lượng, thời gian gần đúng hoặc mức độ.',
      examples: [
        {
          japanese: '1時間ぐらいかかります。',
          vietnamese: 'Mất khoảng 1 tiếng.',
          english: 'It takes about an hour.',
          type: 'main'
        },
        {
          japanese: '10人ぐらい来ました。',
          vietnamese: 'Khoảng 10 người đã đến.',
          english: 'About 10 people came.',
          type: 'main'
        },
        {
          japanese: 'これくらいの大きさです。',
          vietnamese: 'Kích thước khoảng thế này.',
          english: 'It\'s about this size.',
          type: 'additional'
        }
      ]
    }
  ]
};
