// Minna no Nihongo — Lesson 19: た形 (Thể た — kinh nghiệm, liệt kê hoạt động)
import type { LessonData } from '$lib/types';

export const LESSON_19_DATA: LessonData = {
    lessonNumber: 19,
    title: "た形 (Thể た — kinh nghiệm, liệt kê hoạt động)",
    vocabulary: [
      {
        japanese: "登（のぼ）ります",
        kana: "のぼります",
        vietnamese: "leo (núi)",
        type: "main",
        english: "To climb",
        example: "富士山に登ったことがありますか。"
      },
      {
        japanese: "泊（と）まります",
        kana: "とまります",
        vietnamese: "ở lại, nghỉ qua đêm",
        type: "main",
        english: "To stay (overnight)",
        example: "旅館に泊まったことがありますか。"
      },
      {
        japanese: "掃除（そうじ）します",
        kana: "そうじします",
        vietnamese: "dọn dẹp, quét dọn",
        type: "main",
        english: "To clean",
        example: "部屋を掃除したり、洗濯したりします。"
      },
      {
        japanese: "洗濯（せんたく）します",
        kana: "せんたくします",
        vietnamese: "giặt giũ",
        type: "main",
        english: "To do laundry",
        example: "日曜日に洗濯したり、買い物したりします。"
      },
      {
        japanese: "練習（れんしゅう）します",
        kana: "れんしゅうします",
        vietnamese: "luyện tập",
        type: "main",
        english: "To practice",
        example: "毎日日本語を練習しています。"
      },
      {
        japanese: "引（ひ）っ越（こ）します",
        kana: "ひっこしします",
        vietnamese: "chuyển nhà",
        type: "main",
        english: "To move (house)",
        example: "来月東京に引っ越します。"
      },
      {
        japanese: "なります",
        kana: "なります",
        vietnamese: "trở nên, trở thành",
        type: "main",
        english: "To become",
        example: "日本語が上手になりました。"
      },
      {
        japanese: "痩（や）せます",
        kana: "やせます",
        vietnamese: "gầy đi, giảm cân",
        type: "main",
        english: "To become thin / to lose weight",
        example: "最近痩せましたね。"
      },
      {
        japanese: "太（ふと）ります",
        kana: "ふとります",
        vietnamese: "mập lên, tăng cân",
        type: "main",
        english: "To become fat / to gain weight",
        example: "最近太りました。"
      },
      {
        japanese: "生（う）まれます",
        kana: "うまれます",
        vietnamese: "được sinh ra",
        type: "main",
        english: "To be born",
        example: "東京で生まれました。"
      },
      {
        japanese: "お正月（おしょうがつ）",
        kana: "おしょうがつ",
        vietnamese: "Tết Nhật Bản",
        type: "main",
        english: "New Year",
        example: "お正月に何をしましたか。"
      },
      {
        japanese: "美容院（びよういん）",
        kana: "びよういん",
        vietnamese: "tiệm làm tóc",
        type: "main",
        english: "Beauty salon / hair salon",
        example: "美容院で髪を切りました。"
      },
      {
        japanese: "試合（しあい）",
        kana: "しあい",
        vietnamese: "trận đấu",
        type: "main",
        english: "Match / game (sports)",
        example: "サッカーの試合を見たことがありますか。"
      },
      {
        japanese: "サーフィン",
        kana: "サーフィン",
        vietnamese: "lướt sóng",
        type: "main",
        english: "Surfing",
        example: "サーフィンをしたことがありますか。"
      },
      {
        japanese: "お遍路（おへんろ）",
        kana: "おへんろ",
        vietnamese: "hành hương (88 chùa ở Shikoku)",
        type: "main",
        english: "Shikoku pilgrimage",
        example: "お遍路をしたことがありますか。"
      },
      {
        japanese: "柔道（じゅうどう）",
        kana: "じゅうどう",
        vietnamese: "nhu đạo (judo)",
        type: "main",
        english: "Judo",
        example: "柔道を習ったことがありますか。"
      },
      {
        japanese: "空手（からて）",
        kana: "からて",
        vietnamese: "karate (không thủ đạo)",
        type: "main",
        english: "Karate",
        example: "空手をしたことがあります。"
      },
      {
        japanese: "相撲（すもう）",
        kana: "すもう",
        vietnamese: "sumo (đấu vật Nhật)",
        type: "main",
        english: "Sumo wrestling",
        example: "相撲を見たことがありますか。"
      },
      {
        japanese: "剣道（けんどう）",
        kana: "けんどう",
        vietnamese: "kiếm đạo (kendo)",
        type: "main",
        english: "Kendo",
        example: "剣道を練習したことがあります。"
      },
      {
        japanese: "生（い）け花（ばな）",
        kana: "いけばな",
        vietnamese: "cắm hoa Nhật Bản",
        type: "main",
        english: "Japanese flower arrangement",
        example: "生け花を習ったことがありますか。"
      },
      {
        japanese: "茶道（さどう）",
        kana: "さどう",
        vietnamese: "trà đạo",
        type: "main",
        english: "Tea ceremony",
        example: "茶道をしたことがあります。"
      },
      {
        japanese: "一度（いちど）",
        kana: "いちど",
        vietnamese: "một lần",
        type: "main",
        english: "Once / one time",
        example: "一度富士山に登ったことがあります。"
      },
      {
        japanese: "一度（いちど）も",
        kana: "いちども",
        vietnamese: "chưa bao giờ (dùng với phủ định)",
        type: "main",
        english: "Never (with negative)",
        example: "一度も日本へ行ったことがありません。"
      },
      {
        japanese: "〜たことがあります",
        kana: "〜たことがあります",
        vietnamese: "đã từng ~",
        type: "main",
        english: "Have experienced ~ / have done ~ before",
        example: "日本料理を食べたことがあります。"
      },
      {
        japanese: "〜たり〜たりします",
        kana: "〜たり〜たりします",
        vietnamese: "làm những việc như ~ và ~",
        type: "main",
        english: "Do things like ~ and ~",
        example: "休みの日は本を読んだり、映画を見たりします。"
      },
      {
        japanese: "眠い（ねむい）",
        kana: "ねむい",
        vietnamese: "buồn ngủ",
        type: "main",
        english: "Sleepy",
        example: "今日は　眠いです。"
      },
      {
        japanese: "強い（つよい）",
        kana: "つよい",
        vietnamese: "mạnh, khỏe",
        type: "main",
        english: "Strong",
        example: "この　チームは　強いです。"
      },
      {
        japanese: "弱い（よわい）",
        kana: "よわい",
        vietnamese: "yếu",
        type: "main",
        english: "Weak",
        example: "体が　弱いです。"
      },
      {
        japanese: "調子（ちょうし）",
        kana: "ちょうし",
        vietnamese: "tình trạng, trạng thái",
        type: "main",
        english: "Condition, state",
        example: "調子が　いいです。"
      },
      {
        japanese: "パチンコ",
        kana: "パチンコ",
        vietnamese: "pachinko",
        type: "main",
        english: "Pachinko",
        example: "パチンコを　したことが　ありますか。"
      },
      {
        japanese: "ゴルフ",
        kana: "ゴルフ",
        vietnamese: "golf",
        type: "main",
        english: "Golf",
        example: "ゴルフを　します。"
      },
      {
        japanese: "日（ひ）",
        kana: "ひ",
        vietnamese: "ngày",
        type: "main",
        english: "Day",
        example: "休みの　日は　何を　しますか。"
      },
      {
        japanese: "もうすぐ",
        kana: "もうすぐ",
        vietnamese: "sắp, sắp sửa",
        type: "main",
        english: "Soon",
        example: "もうすぐ　春です。"
      },
      {
        japanese: "だんだん",
        kana: "だんだん",
        vietnamese: "dần dần",
        type: "main",
        english: "Gradually",
        example: "だんだん　暖かく　なります。"
      },
      {
        japanese: "実は（じつは）",
        kana: "じつは",
        vietnamese: "thực ra",
        type: "main",
        english: "Actually, truthfully",
        example: "実は、私も　行きたいです。"
      },
      {
        japanese: "ダイエット",
        kana: "ダイエット",
        vietnamese: "ăn kiêng",
        type: "main",
        english: "Diet",
        example: "ダイエットを　しています。"
      },
      {
        japanese: "何回も（なんかいも）",
        kana: "なんかいも",
        vietnamese: "nhiều lần",
        type: "main",
        english: "Many times",
        example: "何回も　行ったことが　あります。"
      },
      {
        japanese: "しかし",
        kana: "しかし",
        vietnamese: "tuy nhiên",
        type: "main",
        english: "However",
        example: "しかし、まだ　できません。"
      },
      {
        japanese: "無理（むり）",
        kana: "むり",
        vietnamese: "không thể, quá sức",
        type: "main",
        english: "Impossible, overwhelming",
        example: "それは　無理です。"
      },
      {
        japanese: "体にいい（からだにいい）",
        kana: "からだにいい",
        vietnamese: "tốt cho sức khỏe",
        type: "main",
        english: "Good for health",
        example: "野菜は　体に　いいです。"
      },
      {
        japanese: "ケーキ",
        kana: "ケーキ",
        vietnamese: "bánh ngọt",
        type: "main",
        english: "Cake",
        example: "ケーキを　食べたり、コーヒーを　飲んだりしました。"
      },
      // Conversation Phrases
      {
        japanese: "お陰様で（おかげさまで）",
        kana: "おかげさまで",
        vietnamese: "nhờ ơn anh/chị",
        type: "supplementary",
        english: "Thank you (for help)",
        example: "お陰様で、元気です。"
      },
      {
        japanese: "乾杯（かんぱい）",
        kana: "かんぱい",
        vietnamese: "chúc mừng, cạn ly",
        type: "supplementary",
        english: "Cheers",
        example: "乾杯！"
      }
    ],
    grammar: [
      {
        pattern: "た形（た-form）",
        vietnamese: "Thể た (quá khứ thường)",
        type: "main",
        english: "た-form (plain past)",
        explanation: "Dạng quá khứ thường của động từ. て-form chuyển て→た, で→だ. VD: 買って→買った, 食べて→食べた, 飲んで→飲んだ.",
        examples: [
          {
            japanese: "行きます　→　行った",
            vietnamese: "đi → đã đi",
            type: "main",
        english: "go → went"
          },
          {
            japanese: "食べます　→　食べた",
            vietnamese: "ăn → đã ăn",
            type: "main",
        english: "eat → ate"
          },
          {
            japanese: "来ます　→　来（き）た",
            vietnamese: "đến → đã đến",
            type: "main",
        english: "come → came"
          }
        ]
      },
      {
        pattern: "〜たことがあります",
        vietnamese: "Đã từng ~",
        type: "main",
        english: "Have done ~ (experience)",
        explanation: "Diễn tả kinh nghiệm đã làm việc gì đó trong quá khứ. Động từ た-form + ことがあります. Phủ định: ことがありません (chưa từng).",
        examples: [
          {
            japanese: "富士山に　登ったことが　あります。",
            vietnamese: "Tôi đã từng leo núi Phú Sĩ.",
            type: "main",
        english: "I have climbed Mt. Fuji."
          },
          {
            japanese: "納豆を　食べたことが　ありますか。",
            vietnamese: "Bạn đã từng ăn natto chưa?",
            type: "main",
        english: "Have you ever eaten natto?"
          },
          {
            japanese: "京都に　行ったことが　ありません。",
            vietnamese: "Tôi chưa từng đi Kyoto.",
            type: "main",
        english: "I have never been to Kyoto."
          }
        ]
      },
      {
        pattern: "〜たり〜たりします",
        vietnamese: "Làm những việc như ~ và ~",
        type: "main",
        english: "Do things like ~ and ~",
        explanation: "Liệt kê một số hoạt động đại diện, ngụ ý còn nhiều hoạt động khác. Động từ た-form + り, lặp lại + します. VD: 読んだり見たりします.",
        examples: [
          {
            japanese: "休みの　日は　本を　読んだり、音楽を　聞いたりします。",
            vietnamese: "Ngày nghỉ tôi đọc sách, nghe nhạc, v.v.",
            type: "main",
        english: "On holidays, I read books, listen to music, and so on."
          },
          {
            japanese: "週末は　映画を　見たり、買い物したりします。",
            vietnamese: "Cuối tuần tôi xem phim, đi mua sắm, v.v.",
            type: "main",
        english: "On weekends, I watch movies, go shopping, and so on."
          },
          {
            japanese: "朝は　散歩したり、ジョギングしたりします。",
            vietnamese: "Buổi sáng tôi đi dạo, chạy bộ, v.v.",
            type: "main",
        english: "In the morning, I take walks, jog, and so on."
          }
        ]
      },
      {
        pattern: "〜たり〜たりしました",
        vietnamese: "Đã làm những việc như ~ và ~",
        type: "main",
        english: "Did things like ~ and ~ (past)",
        explanation: "Dạng quá khứ của たり〜たりします. Diễn tả những hoạt động đã làm trong quá khứ.",
        examples: [
          {
            japanese: "京都で　お寺を　見たり、お土産を　買ったりしました。",
            vietnamese: "Ở Kyoto tôi đã xem chùa, mua quà, v.v.",
            type: "main",
        english: "In Kyoto, I saw temples, bought souvenirs, and so on."
          },
          {
            japanese: "昨日は　掃除したり、洗濯したりしました。",
            vietnamese: "Hôm qua tôi đã dọn dẹp, giặt giũ, v.v.",
            type: "main",
        english: "Yesterday, I cleaned, did laundry, and so on."
          },
          {
            japanese: "パーティーで　歌ったり、踊ったりしました。",
            vietnamese: "Ở tiệc tôi đã hát, nhảy, v.v.",
            type: "main",
        english: "At the party, I sang, danced, and so on."
          }
        ]
      }
    ]
  };
