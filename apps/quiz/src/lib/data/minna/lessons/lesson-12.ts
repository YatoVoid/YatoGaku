// Minna no Nihongo — Lesson 12: 比較 (So sánh, mùa, thời tiết)
import type { LessonData } from '$lib/types';

export const LESSON_12_DATA: LessonData = {
    lessonNumber: 12,
    title: "比較 (So sánh, mùa, thời tiết)",
    vocabulary: [
      {
        japanese: "簡単（な）（かんたん）",
        kana: "かんたん",
        vietnamese: "đơn giản, dễ",
        type: "main",
        english: "Simple, easy",
        example: "この　問題は　簡単です。"
      },
      {
        japanese: "近い（ちかい）",
        kana: "ちかい",
        vietnamese: "gần",
        type: "main",
        english: "Near, close",
        example: "駅は　近いです。"
      },
      {
        japanese: "遠い（とおい）",
        kana: "とおい",
        vietnamese: "xa",
        type: "main",
        english: "Far",
        example: ""
      },
      {
        japanese: "速い（はやい）",
        kana: "はやい",
        vietnamese: "nhanh",
        type: "main",
        english: "Fast, quick",
        example: "新幹線は　速いです。"
      },
      {
        japanese: "遅い（おそい）",
        kana: "おそい",
        vietnamese: "chậm, muộn",
        type: "main",
        english: "Slow, late",
        example: ""
      },
      {
        japanese: "多い（おおい）",
        kana: "おおい",
        vietnamese: "nhiều",
        type: "main",
        english: "Many, much",
        example: "東京は　人が　多いです。"
      },
      {
        japanese: "少ない（すくない）",
        kana: "すくない",
        vietnamese: "ít",
        type: "main",
        english: "Few, little",
        example: ""
      },
      {
        japanese: "暖かい（あたたかい）",
        kana: "あたたかい",
        vietnamese: "ấm áp",
        type: "main",
        english: "Warm",
        example: "春は　暖かいです。"
      },
      {
        japanese: "涼しい（すずしい）",
        kana: "すずしい",
        vietnamese: "mát mẻ",
        type: "main",
        english: "Cool",
        example: "秋は　涼しいです。"
      },
      {
        japanese: "甘い（あまい）",
        kana: "あまい",
        vietnamese: "ngọt",
        type: "main",
        english: "Sweet",
        example: "この　ケーキは　甘いです。"
      },
      {
        japanese: "辛い（からい）",
        kana: "からい",
        vietnamese: "cay",
        type: "main",
        english: "Spicy, hot",
        example: ""
      },
      {
        japanese: "重い（おもい）",
        kana: "おもい",
        vietnamese: "nặng",
        type: "main",
        english: "Heavy",
        example: "この　荷物は　重いです。"
      },
      {
        japanese: "軽い（かるい）",
        kana: "かるい",
        vietnamese: "nhẹ",
        type: "main",
        english: "Light (weight)",
        example: ""
      },
      {
        japanese: "季節（きせつ）",
        kana: "きせつ",
        vietnamese: "mùa",
        type: "main",
        english: "Season",
        example: "どの　季節が　いちばん　好きですか。"
      },
      {
        japanese: "春（はる）",
        kana: "はる",
        vietnamese: "mùa xuân",
        type: "main",
        english: "Spring",
        example: "春は　暖かいです。"
      },
      {
        japanese: "夏（なつ）",
        kana: "なつ",
        vietnamese: "mùa hè",
        type: "main",
        english: "Summer",
        example: "夏は　暑いです。"
      },
      {
        japanese: "秋（あき）",
        kana: "あき",
        vietnamese: "mùa thu",
        type: "main",
        english: "Autumn, fall",
        example: ""
      },
      {
        japanese: "冬（ふゆ）",
        kana: "ふゆ",
        vietnamese: "mùa đông",
        type: "main",
        english: "Winter",
        example: "冬は　寒いです。"
      },
      {
        japanese: "天気（てんき）",
        kana: "てんき",
        vietnamese: "thời tiết",
        type: "main",
        english: "Weather",
        example: "きょうは　いい　天気ですね。"
      },
      {
        japanese: "雨（あめ）",
        kana: "あめ",
        vietnamese: "mưa",
        type: "main",
        english: "Rain",
        example: "きょうは　雨です。"
      },
      {
        japanese: "雪（ゆき）",
        kana: "ゆき",
        vietnamese: "tuyết",
        type: "main",
        english: "Snow",
        example: "北海道は　雪が　多いです。"
      },
      {
        japanese: "曇り（くもり）",
        kana: "くもり",
        vietnamese: "trời nhiều mây",
        type: "main",
        english: "Cloudy",
        example: ""
      },
      {
        japanese: "風（かぜ）",
        kana: "かぜ",
        vietnamese: "gió",
        type: "main",
        english: "Wind",
        example: ""
      },
      {
        japanese: "空（そら）",
        kana: "そら",
        vietnamese: "bầu trời",
        type: "main",
        english: "Sky",
        example: ""
      },
      {
        japanese: "海（うみ）",
        kana: "うみ",
        vietnamese: "biển",
        type: "main",
        english: "Sea, ocean",
        example: ""
      },
      {
        japanese: "世界（せかい）",
        kana: "せかい",
        vietnamese: "thế giới",
        type: "main",
        english: "World",
        example: "世界で　いちばん　高い　山は　何ですか。"
      },
      {
        japanese: "〜の方（〜のほう）",
        kana: "のほう",
        vietnamese: "~ hơn (so sánh)",
        type: "main",
        english: "~ (comparison marker)",
        example: "大阪より　東京の　方が　大きいです。"
      },
      {
        japanese: "ずっと",
        kana: "ずっと",
        vietnamese: "hơn nhiều, ~ hơn hẳn",
        type: "main",
        english: "By far, much more",
        example: "北海道は　東京より　ずっと　寒いです。"
      },
      {
        japanese: "一番（いちばん）",
        kana: "いちばん",
        vietnamese: "nhất, số một",
        type: "main",
        english: "The most, number one",
        example: "日本で　いちばん　高い　山は　富士山です。"
      },
      {
        japanese: "もっと",
        kana: "もっと",
        vietnamese: "hơn nữa",
        type: "main",
        english: "More",
        example: ""
      },
      {
        japanese: "どちら",
        kana: "どちら",
        vietnamese: "cái nào (trong hai)",
        type: "main",
        english: "Which (of two)",
        example: "肉と　魚と　どちらが　好きですか。"
      },
      {
        japanese: "どれ",
        kana: "どれ",
        vietnamese: "cái nào (trong ba trở lên)",
        type: "main",
        english: "Which (of three or more)",
        example: ""
      },
      {
        japanese: "ホテル",
        kana: "ホテル",
        vietnamese: "khách sạn",
        type: "main",
        english: "Hotel",
        example: "ホテルは　駅の　近くに　あります。"
      },
      {
        japanese: "空港（くうこう）",
        kana: "くうこう",
        vietnamese: "sân bay",
        type: "main",
        english: "Airport",
        example: "空港まで　どのくらい　かかりますか。"
      },
      {
        japanese: "パーティー",
        kana: "パーティー",
        vietnamese: "tiệc, bữa tiệc",
        type: "main",
        english: "Party",
        example: "昨日　友達の　パーティーに　行きました。"
      },
      {
        japanese: "祭り（まつり）",
        kana: "まつり",
        vietnamese: "lễ hội",
        type: "main",
        english: "Festival",
        example: "夏は　祭りが　たくさん　あります。"
      },
      {
        japanese: "試験（しけん）",
        kana: "しけん",
        vietnamese: "kỳ thi, bài thi",
        type: "main",
        english: "Exam",
        example: "試験は　難しくなかったです。"
      },
      {
        japanese: "すきやき",
        kana: "すきやき",
        vietnamese: "sukiyaki (món lẩu Nhật)",
        type: "main",
        english: "Sukiyaki",
        example: "すきやきを　食べたことが　ありますか。"
      },
      {
        japanese: "刺身（さしみ）",
        kana: "さしみ",
        vietnamese: "sashimi (cá sống)",
        type: "main",
        english: "Sashimi",
        example: "刺身は　新鮮で　おいしいです。"
      },
      {
        japanese: "寿司（すし）",
        kana: "すし",
        vietnamese: "sushi",
        type: "main",
        english: "Sushi",
        example: "寿司が　好きです。"
      },
      {
        japanese: "天ぷら（てんぷら）",
        kana: "てんぷら",
        vietnamese: "tempura (hải sản rau chiên giòn)",
        type: "main",
        english: "Tempura",
        example: "天ぷらは　軽くて　おいしいです。"
      },
      {
        japanese: "生け花（いけばな）",
        kana: "いけばな",
        vietnamese: "nghệ thuật cắm hoa Nhật",
        type: "main",
        english: "Ikebana (Japanese flower arrangement)",
        example: "生け花を　習いたいです。"
      },
      {
        japanese: "紅葉（もみじ）",
        kana: "もみじ",
        vietnamese: "lá đỏ mùa thu",
        type: "main",
        english: "Autumn leaves, maple leaves",
        example: "秋は　紅葉が　きれいです。"
      },
      // Supplementary Vocabulary (参考語彙) - Japanese Places & Festivals
      {
        japanese: "富士山（ふじさん）",
        kana: "ふじさん",
        vietnamese: "núi Phú Sĩ",
        english: "Mt. Fuji",
        type: "supplementary",
        example: "富士山は　きれいでした。"
      },
      {
        japanese: "京都（きょうと）",
        kana: "きょうと",
        vietnamese: "Kyoto",
        english: "Kyoto",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "奈良（なら）",
        kana: "なら",
        vietnamese: "Nara",
        english: "Nara",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "横浜（よこはま）",
        kana: "よこはま",
        vietnamese: "Yokohama",
        english: "Yokohama",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "お正月（おしょうがつ）",
        kana: "おしょうがつ",
        vietnamese: "Tết Nhật Bản",
        english: "New Year",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "桜（さくら）",
        kana: "さくら",
        vietnamese: "hoa anh đào",
        english: "cherry blossom",
        type: "supplementary",
        example: ""
      },
      // Supplementary Vocabulary - Conversation Phrases
      {
        japanese: "ただいま",
        kana: "ただいま",
        vietnamese: "Tôi về rồi (khi về nhà)",
        english: "I'm home",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "お帰りなさい（おかえりなさい）",
        kana: "おかえりなさい",
        vietnamese: "Chào mừng về nhà",
        english: "Welcome home",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "すごいですね",
        kana: "すごいですね",
        vietnamese: "Tuyệt quá nhỉ, Giỏi quá",
        english: "That's amazing",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "疲れました（つかれました）",
        kana: "つかれました",
        vietnamese: "Tôi mệt rồi",
        english: "I'm tired",
        type: "supplementary",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "〜ました / 〜ませんでした",
        vietnamese: "~ đã ~ / ~ đã không ~",
        type: "main",
        english: "Past tense (polite form)",
        explanation: "Thì quá khứ của động từ lịch sự. Chuyển ます thành ました (khẳng định) hoặc ませんでした (phủ định).",
        examples: [
          {
            japanese: "昨日　映画を　見ました。",
            vietnamese: "Hôm qua tôi đã xem phim.",
            type: "main",
        english: "I watched a movie yesterday."
          },
          {
            japanese: "朝ごはんを　食べませんでした。",
            vietnamese: "Tôi đã không ăn sáng.",
            type: "main",
        english: "I didn't eat breakfast."
          },
          {
            japanese: "先週　京都に　行きました。",
            vietnamese: "Tuần trước tôi đã đi Kyoto.",
            type: "main",
        english: "I went to Kyoto last week."
          }
        ]
      },
      {
        pattern: "い形容詞の過去形（〜かったです / 〜くなかったです）",
        vietnamese: "Thì quá khứ của tính từ đuôi い",
        type: "main",
        english: "Past tense of い-adjectives",
        explanation: "Bỏ い cuối, thêm かったです (khẳng định) hoặc くなかったです (phủ định). VD: 暑い → 暑かったです / 暑くなかったです.",
        examples: [
          {
            japanese: "昨日は　暑かったです。",
            vietnamese: "Hôm qua trời nóng.",
            type: "main",
        english: "It was hot yesterday."
          },
          {
            japanese: "試験は　難しくなかったです。",
            vietnamese: "Kỳ thi đã không khó.",
            type: "main",
        english: "The exam was not difficult."
          },
          {
            japanese: "映画は　面白かったです。",
            vietnamese: "Phim đã thú vị.",
            type: "main",
        english: "The movie was interesting."
          }
        ]
      },
      {
        pattern: "な形容詞の過去形（〜でした / 〜じゃありませんでした）",
        vietnamese: "Thì quá khứ của tính từ đuôi な",
        type: "main",
        english: "Past tense of な-adjectives",
        explanation: "Chuyển です thành でした (khẳng định) hoặc じゃありませんでした (phủ định). VD: 静かです → 静かでした / 静かじゃありませんでした.",
        examples: [
          {
            japanese: "部屋は　静かでした。",
            vietnamese: "Phòng đã yên tĩnh.",
            type: "main",
        english: "The room was quiet."
          },
          {
            japanese: "先生は　親切でした。",
            vietnamese: "Thầy giáo đã tử tế.",
            type: "main",
        english: "The teacher was kind."
          },
          {
            japanese: "昨日は　暇じゃありませんでした。",
            vietnamese: "Hôm qua tôi đã không rảnh.",
            type: "main",
        english: "I was not free yesterday."
          }
        ]
      },
      {
        pattern: "どちらが〜ですか / どれが〜ですか",
        vietnamese: "Cái nào ~ ? (so sánh)",
        type: "main",
        english: "Which one ~ ? (comparison)",
        explanation: "どちらが dùng khi chọn giữa 2 vật, どれが dùng khi chọn trong 3+ vật. Trả lời bằng A の ほうが 〜です (A hơn).",
        examples: [
          {
            japanese: "肉と　魚と　どちらが　好きですか。",
            vietnamese: "Bạn thích thịt hay cá hơn?",
            type: "main",
        english: "Which do you like better, meat or fish?"
          },
          {
            japanese: "この　3つの　中で　どれが　一番　いいですか。",
            vietnamese: "Trong 3 cái này, cái nào tốt nhất?",
            type: "main",
        english: "Which is the best among these three?"
          },
          {
            japanese: "コーヒーの　ほうが　好きです。",
            vietnamese: "Tôi thích cà phê hơn.",
            type: "main",
        english: "I like coffee better."
          }
        ]
      }
    ]
  };
