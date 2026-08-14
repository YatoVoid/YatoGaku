/**
 * N3 Core Lessons — Lesson 05
 * Appearance + Comparison (Trạng thái và so sánh)
 */

import type { LessonData } from '$lib/types';

export const LESSON_05_DATA: LessonData = {
  lessonNumber: 5,
  title: '様態・比較 (Appearance and Comparison)',
  vocabulary: [
    // Appearance & Feelings
    {
      japanese: '表情',
      kana: 'ひょうじょう',
      vietnamese: 'biểu cảm, nét mặt',
      english: 'facial expression',
      type: 'main',
      example: '彼女は嬉しそうな表情をしています。'
    },
    {
      japanese: '様子',
      kana: 'ようす',
      vietnamese: 'tình hình, trạng thái',
      english: 'state, appearance',
      type: 'main',
      example: '彼の様子がおかしい。'
    },
    {
      japanese: '雰囲気',
      kana: 'ふんいき',
      vietnamese: 'bầu không khí, không gian',
      english: 'atmosphere, mood',
      type: 'main',
      example: 'このレストランは雰囲気がいいです。'
    },
    {
      japanese: '印象',
      kana: 'いんしょう',
      vietnamese: 'ấn tượng',
      english: 'impression',
      type: 'main',
      example: '第一印象は大切です。'
    },
    {
      japanese: '特徴',
      kana: 'とくちょう',
      vietnamese: 'đặc điểm',
      english: 'characteristic, feature',
      type: 'main',
      example: 'この料理の特徴は辛いところです。'
    },
    {
      japanese: '似る',
      kana: 'にる',
      vietnamese: 'giống, giống nhau',
      english: 'to resemble',
      type: 'main',
      example: '彼女は母親に似ています。'
    },
    {
      japanese: '比べる',
      kana: 'くらべる',
      vietnamese: 'so sánh',
      english: 'to compare',
      type: 'main',
      example: '二つの商品を比べてみましょう。'
    },
    {
      japanese: '違う',
      kana: 'ちがう',
      vietnamese: 'khác, sai',
      english: 'to differ, to be wrong',
      type: 'main',
      example: '日本とベトナムは文化が違います。'
    },

    // Adjectives - Appearance
    {
      japanese: '嬉しい',
      kana: 'うれしい',
      vietnamese: 'vui, hạnh phúc',
      english: 'happy, glad',
      type: 'main',
      example: '彼は嬉しそうです。'
    },
    {
      japanese: '悲しい',
      kana: 'かなしい',
      vietnamese: 'buồn',
      english: 'sad',
      type: 'main',
      example: '悲しそうな顔をしないでください。'
    },
    {
      japanese: '楽しい',
      kana: 'たのしい',
      vietnamese: 'vui vẻ',
      english: 'fun, enjoyable',
      type: 'main',
      example: '楽しそうなパーティーですね。'
    },
    {
      japanese: '寂しい',
      kana: 'さびしい',
      vietnamese: 'cô đơn, buồn',
      english: 'lonely',
      type: 'main',
      example: '寂しそうに見えます。'
    },
    {
      japanese: '美味しい',
      kana: 'おいしい',
      vietnamese: 'ngon',
      english: 'delicious',
      type: 'main',
      example: 'このケーキは美味しそうです。'
    },
    {
      japanese: '辛い',
      kana: 'からい',
      vietnamese: 'cay',
      english: 'spicy, hot',
      type: 'main',
      example: 'この料理は辛そうですね。'
    },
    {
      japanese: '難しい',
      kana: 'むずかしい',
      vietnamese: 'khó',
      english: 'difficult',
      type: 'main',
      example: 'この問題は難しそうです。'
    },
    {
      japanese: '簡単',
      kana: 'かんたん',
      vietnamese: 'đơn giản, dễ',
      english: 'simple, easy',
      type: 'main',
      example: '簡単そうに見えるけど、実は難しい。'
    },
    {
      japanese: '丈夫',
      kana: 'じょうぶ',
      vietnamese: 'bền, chắc chắn',
      english: 'durable, sturdy',
      type: 'main',
      example: 'このカバンは丈夫そうです。'
    },
    {
      japanese: '元気',
      kana: 'げんき',
      vietnamese: 'khỏe mạnh, vui vẻ',
      english: 'energetic, healthy',
      type: 'main',
      example: '子供たちは元気そうです。'
    },
    {
      japanese: '暖かい',
      kana: 'あたたかい',
      vietnamese: 'ấm áp',
      english: 'warm',
      type: 'main',
      example: '今日は暖かそうですね。'
    },
    {
      japanese: '涼しい',
      kana: 'すずしい',
      vietnamese: 'mát mẻ',
      english: 'cool',
      type: 'additional',
      example: '山の上は涼しそうです。'
    },

    // Similarity & Comparison
    {
      japanese: '同じ',
      kana: 'おなじ',
      vietnamese: 'giống nhau',
      english: 'same',
      type: 'main',
      example: '私たちは同じ大学です。'
    },
    {
      japanese: '反対',
      kana: 'はんたい',
      vietnamese: 'ngược lại, phản đối',
      english: 'opposite',
      type: 'main',
      example: '彼と私は反対の意見です。'
    },
    {
      japanese: '一番',
      kana: 'いちばん',
      vietnamese: 'nhất, số một',
      english: 'the most, number one',
      type: 'main',
      example: '日本で一番高い山は富士山です。'
    },

    // Verbs
    {
      japanese: '見える',
      kana: 'みえる',
      vietnamese: 'trông thấy, có vẻ',
      english: 'to be visible, to appear',
      type: 'main',
      example: '彼女は若く見えます。'
    },
    {
      japanese: '聞こえる',
      kana: 'きこえる',
      vietnamese: 'nghe thấy',
      english: 'to be audible, to sound',
      type: 'main',
      example: '隣の部屋から音楽が聞こえます。'
    },
    {
      japanese: '感じる',
      kana: 'かんじる',
      vietnamese: 'cảm thấy, cảm nhận',
      english: 'to feel, to sense',
      type: 'main',
      example: '春が近づいているように感じます。'
    },
    {
      japanese: '思い出す',
      kana: 'おもいだす',
      vietnamese: 'nhớ lại',
      english: 'to recall, to remember',
      type: 'additional',
      example: 'この匂いで子供の時を思い出します。'
    },
    {
      japanese: '噂する',
      kana: 'うわさする',
      vietnamese: 'đồn đại',
      english: 'to gossip, to rumor',
      type: 'additional',
      example: '彼は転職するらしいと噂されています。'
    },

    // Nouns
    {
      japanese: '匂い',
      kana: 'におい',
      vietnamese: 'mùi, hương',
      english: 'smell, scent',
      type: 'main',
      example: 'いい匂いがしますね。'
    },
    {
      japanese: '味',
      kana: 'あじ',
      vietnamese: 'vị, mùi vị',
      english: 'taste, flavor',
      type: 'main',
      example: 'この料理は母の味に似ています。'
    }
  ],
  grammar: [
    {
      pattern: '〜そうだ (様態)',
      vietnamese: 'trông có vẻ ~, trông như sắp ~',
      english: 'looks like ~, appears ~',
      type: 'main',
      explanation: 'Diễn tả phán đoán dựa trên quan sát trực tiếp. い形: bỏ い + そうだ (美味しい→美味しそうだ). な形: bỏ な + そうだ (元気→元気そうだ). Động từ: ます stem + そうだ (降り→降りそうだ). Ngoại lệ: いい→よさそうだ, ない→なさそうだ.',
      examples: [
        {
          japanese: 'このケーキは美味しそうですね。',
          vietnamese: 'Cái bánh này trông ngon nhỉ.',
          english: 'This cake looks delicious.',
          type: 'main'
        },
        {
          japanese: '雨が降りそうです。',
          vietnamese: 'Trông trời như sắp mưa.',
          english: 'It looks like it is going to rain.',
          type: 'main'
        },
        {
          japanese: '彼は嬉しそうに笑っています。',
          vietnamese: 'Anh ấy đang cười trông rất vui.',
          english: 'He is laughing happily (he looks happy).',
          type: 'main'
        },
        {
          japanese: '簡単そうに見えるけど、実は難しいです。',
          vietnamese: 'Trông có vẻ đơn giản nhưng thực ra khó.',
          english: 'It looks easy, but it is actually difficult.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ようだ／〜みたいだ',
      vietnamese: 'hình như ~, dường như ~',
      english: 'seems like ~, it appears that ~',
      type: 'main',
      explanation: 'Diễn tả suy đoán dựa trên thông tin gián tiếp hoặc cảm nhận. ようだ trang trọng hơn みたいだ. Dùng với danh từ + の + ようだ, な形 + な + ようだ, い形/động từ thường thể + ようだ.',
      examples: [
        {
          japanese: '彼は風邪をひいたようです。',
          vietnamese: 'Hình như anh ấy bị cảm.',
          english: 'It seems like he caught a cold.',
          type: 'main'
        },
        {
          japanese: '事故があったみたいです。',
          vietnamese: 'Hình như đã xảy ra tai nạn.',
          english: 'It seems like there was an accident.',
          type: 'main'
        },
        {
          japanese: '彼女は母親のように優しいです。',
          vietnamese: 'Cô ấy dịu dàng giống như mẹ.',
          english: 'She is kind like her mother.',
          type: 'main'
        },
        {
          japanese: 'まるで夢みたいです。',
          vietnamese: 'Cứ như là mơ vậy.',
          english: 'It is just like a dream.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜らしい',
      vietnamese: 'nghe nói ~, có vẻ như ~',
      english: 'apparently ~, I heard that ~',
      type: 'main',
      explanation: 'Diễn tả thông tin nghe được từ nguồn khác hoặc suy đoán dựa trên bằng chứng. Cũng có nghĩa "đúng kiểu ~, xứng đáng là ~" khi đi với danh từ (男らしい = đúng chất đàn ông).',
      examples: [
        {
          japanese: '田中さんは来月結婚するらしいです。',
          vietnamese: 'Nghe nói anh Tanaka tháng tới sẽ kết hôn.',
          english: 'Apparently, Mr. Tanaka is getting married next month.',
          type: 'main'
        },
        {
          japanese: 'あの店のラーメンは美味しいらしい。',
          vietnamese: 'Nghe nói mì ramen ở quán đó ngon.',
          english: 'I heard that the ramen at that restaurant is delicious.',
          type: 'main'
        },
        {
          japanese: '電車が事故で遅れているらしいです。',
          vietnamese: 'Nghe nói tàu đang bị trễ vì tai nạn.',
          english: 'Apparently the train is delayed due to an accident.',
          type: 'main'
        },
        {
          japanese: '彼は男らしい人です。',
          vietnamese: 'Anh ấy là người đúng chất đàn ông.',
          english: 'He is a manly person.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜より〜のほうが',
      vietnamese: '~ hơn ~',
      english: '~ is more ~ than ~',
      type: 'main',
      explanation: 'Cấu trúc so sánh hơn. A より B のほうが ～: B hơn A về mặt ~. Có thể dùng với い形, な形, hoặc động từ.',
      examples: [
        {
          japanese: '電車よりバスのほうが安いです。',
          vietnamese: 'Xe buýt rẻ hơn tàu điện.',
          english: 'The bus is cheaper than the train.',
          type: 'main'
        },
        {
          japanese: '東京より大阪のほうが食べ物が美味しいです。',
          vietnamese: 'Đồ ăn ở Osaka ngon hơn Tokyo.',
          english: 'The food in Osaka is more delicious than in Tokyo.',
          type: 'main'
        },
        {
          japanese: '映画を見るより本を読むほうが好きです。',
          vietnamese: 'Tôi thích đọc sách hơn xem phim.',
          english: 'I prefer reading books to watching movies.',
          type: 'main'
        },
        {
          japanese: '去年より今年のほうが暖かいです。',
          vietnamese: 'Năm nay ấm hơn năm ngoái.',
          english: 'This year is warmer than last year.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜そうだ (伝聞)',
      vietnamese: 'nghe nói ~, theo như ~',
      english: 'I heard that ~, it is said that ~',
      type: 'additional',
      explanation: 'Diễn tả thông tin nghe được từ người khác hoặc nguồn tin (báo, TV). Khác với 〜そうだ (様態). Cấu trúc: thường thể + そうだ.',
      examples: [
        {
          japanese: '天気予報によると、明日は雨だそうです。',
          vietnamese: 'Theo dự báo thời tiết, nghe nói ngày mai mưa.',
          english: 'According to the weather forecast, it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: 'あの映画はとても面白いそうです。',
          vietnamese: 'Nghe nói bộ phim đó rất hay.',
          english: 'I heard that movie is very interesting.',
          type: 'main'
        },
        {
          japanese: '新しい店ができたそうです。',
          vietnamese: 'Nghe nói có cửa hàng mới mở.',
          english: 'I heard that a new shop opened.',
          type: 'main'
        }
      ]
    }
  ]
};
