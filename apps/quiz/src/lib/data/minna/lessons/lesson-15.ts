// Minna no Nihongo — Lesson 15: てもいいです (Xin phép, cấm đoán, trạng thái)
import type { LessonData } from '$lib/types';

export const LESSON_15_DATA: LessonData = {
    lessonNumber: 15,
    title: "てもいいです (Xin phép, cấm đoán, trạng thái)",
    vocabulary: [
      {
        japanese: "座（すわ）ります",
        kana: "すわります",
        vietnamese: "ngồi",
        type: "main",
        english: "To sit down",
        example: "ここに座ってもいいですか。"
      },
      {
        japanese: "立（た）ちます",
        kana: "たちます",
        vietnamese: "đứng",
        type: "main",
        english: "To stand up",
        example: "立ってください。"
      },
      {
        japanese: "入（はい）ります",
        kana: "はいります",
        vietnamese: "vào",
        type: "main",
        english: "To enter",
        example: "この部屋に入ってはいけません。"
      },
      {
        japanese: "出（で）ます",
        kana: "でます",
        vietnamese: "ra ngoài",
        type: "main",
        english: "To go out / to leave",
        example: "教室を出てもいいですか。"
      },
      {
        japanese: "やめます",
        kana: "やめます",
        vietnamese: "bỏ, nghỉ (việc), thôi",
        type: "main",
        english: "To quit / to stop",
        example: "タバコをやめてください。"
      },
      {
        japanese: "押（お）します",
        kana: "おします",
        vietnamese: "nhấn, đẩy",
        type: "main",
        english: "To push / to press",
        example: "このボタンを押してください。"
      },
      {
        japanese: "若（わか）い",
        kana: "わかい",
        vietnamese: "trẻ",
        type: "main",
        english: "Young",
        example: "あの先生は若いです。"
      },
      {
        japanese: "長（なが）い",
        kana: "ながい",
        vietnamese: "dài",
        type: "main",
        english: "Long",
        example: "髪が長いです。"
      },
      {
        japanese: "短（みじか）い",
        kana: "みじかい",
        vietnamese: "ngắn",
        type: "main",
        english: "Short (length)",
        example: "髪が短いです。"
      },
      {
        japanese: "明（あか）るい",
        kana: "あかるい",
        vietnamese: "sáng",
        type: "main",
        english: "Bright",
        example: "この部屋は明るいです。"
      },
      {
        japanese: "暗（くら）い",
        kana: "くらい",
        vietnamese: "tối",
        type: "main",
        english: "Dark",
        example: "部屋が暗いですから、電気をつけてください。"
      },
      {
        japanese: "背（せ）が高（たか）い",
        kana: "せがたかい",
        vietnamese: "cao (người)",
        type: "main",
        english: "Tall (person)",
        example: "ミラーさんは背が高いです。"
      },
      {
        japanese: "背（せ）が低（ひく）い",
        kana: "せがひくい",
        vietnamese: "thấp (người)",
        type: "main",
        english: "Short (person)",
        example: "弟は背が低いです。"
      },
      {
        japanese: "太（ふと）い",
        kana: "ふとい",
        vietnamese: "mập, béo; to, dày",
        type: "main",
        english: "Fat / thick",
        example: ""
      },
      {
        japanese: "頭（あたま）がいい",
        kana: "あたまがいい",
        vietnamese: "thông minh",
        type: "main",
        english: "Smart / intelligent",
        example: "あの学生は頭がいいです。"
      },
      {
        japanese: "体（からだ）",
        kana: "からだ",
        vietnamese: "cơ thể",
        type: "main",
        english: "Body",
        example: "体に気をつけてください。"
      },
      {
        japanese: "頭（あたま）",
        kana: "あたま",
        vietnamese: "đầu",
        type: "main",
        english: "Head",
        example: "頭が痛いです。"
      },
      {
        japanese: "髪（かみ）",
        kana: "かみ",
        vietnamese: "tóc",
        type: "main",
        english: "Hair",
        example: "髪が長いです。"
      },
      {
        japanese: "顔（かお）",
        kana: "かお",
        vietnamese: "mặt, khuôn mặt",
        type: "main",
        english: "Face",
        example: "顔を洗います。"
      },
      {
        japanese: "目（め）",
        kana: "め",
        vietnamese: "mắt",
        type: "main",
        english: "Eye",
        example: "目が大きいです。"
      },
      {
        japanese: "耳（みみ）",
        kana: "みみ",
        vietnamese: "tai",
        type: "main",
        english: "Ear",
        example: "耳が痛いです。"
      },
      {
        japanese: "口（くち）",
        kana: "くち",
        vietnamese: "miệng",
        type: "main",
        english: "Mouth",
        example: "口を開けてください。"
      },
      {
        japanese: "歯（は）",
        kana: "は",
        vietnamese: "răng",
        type: "main",
        english: "Tooth / teeth",
        example: "毎日歯を磨きます。"
      },
      {
        japanese: "お腹（おなか）",
        kana: "おなか",
        vietnamese: "bụng",
        type: "main",
        english: "Stomach / belly",
        example: "お腹が痛いです。"
      },
      {
        japanese: "足（あし）",
        kana: "あし",
        vietnamese: "chân",
        type: "main",
        english: "Foot / leg",
        example: "足が痛いです。"
      },
      {
        japanese: "サービス",
        kana: "サービス",
        vietnamese: "dịch vụ, miễn phí",
        type: "main",
        english: "Service / free of charge",
        example: "このコーヒーはサービスです。"
      },
      {
        japanese: "ジョギング",
        kana: "ジョギング",
        vietnamese: "chạy bộ",
        type: "main",
        english: "Jogging",
        example: "毎朝ジョギングをしています。"
      },
      {
        japanese: "シャワー",
        kana: "シャワー",
        vietnamese: "vòi sen, tắm vòi sen",
        type: "main",
        english: "Shower",
        example: "シャワーを浴びます。"
      },
      {
        japanese: "緑（みどり）",
        kana: "みどり",
        vietnamese: "màu xanh lá cây",
        type: "main",
        english: "Green",
        example: "緑のかばんはミラーさんのです。"
      },
      {
        japanese: "お寺（おてら）",
        kana: "おてら",
        vietnamese: "chùa (Phật giáo)",
        type: "main",
        english: "Buddhist temple",
        example: "京都でお寺を見ました。"
      },
      {
        japanese: "神社（じんじゃ）",
        kana: "じんじゃ",
        vietnamese: "đền thần (Thần đạo)",
        type: "main",
        english: "Shinto shrine",
        example: "お正月に神社へ行きます。"
      },
      {
        japanese: "留守（るす）",
        kana: "るす",
        vietnamese: "vắng nhà",
        type: "main",
        english: "Absence from home",
        example: "田中さんは留守です。"
      },
      {
        japanese: "知ります（しります）",
        kana: "しります",
        vietnamese: "biết",
        type: "main",
        english: "To know, to get to know",
        example: "新しい　友達を　知りました。"
      },
      {
        japanese: "住みます（すみます）",
        kana: "すみます",
        vietnamese: "sống, cư trú",
        type: "main",
        english: "To live, to reside",
        example: "東京に　住みます。"
      },
      {
        japanese: "研究します（けんきゅうします）",
        kana: "けんきゅうします",
        vietnamese: "nghiên cứu",
        type: "main",
        english: "To research",
        example: "大学で　日本語を　研究しています。"
      },
      {
        japanese: "知っています（しっています）",
        kana: "しっています",
        vietnamese: "biết rồi, đang biết",
        type: "main",
        english: "To know (state)",
        example: "田中さんを　知っていますか。"
      },
      {
        japanese: "住んでいます（すんでいます）",
        kana: "すんでいます",
        vietnamese: "đang sống",
        type: "main",
        english: "To be living",
        example: "今　東京に　住んでいます。"
      },
      {
        japanese: "資料（しりょう）",
        kana: "しりょう",
        vietnamese: "tài liệu",
        type: "main",
        english: "Materials, data",
        example: "資料を　集めます。"
      },
      {
        japanese: "カタログ",
        kana: "カタログ",
        vietnamese: "danh mục, catalogue",
        type: "main",
        english: "Catalog",
        example: "カタログを　見ます。"
      },
      {
        japanese: "時刻表（じこくひょう）",
        kana: "じこくひょう",
        vietnamese: "thời gian biểu",
        type: "main",
        english: "Timetable",
        example: "電車の　時刻表を　調べます。"
      },
      {
        japanese: "服（ふく）",
        kana: "ふく",
        vietnamese: "quần áo",
        type: "main",
        english: "Clothes",
        example: "新しい　服を　買いました。"
      },
      {
        japanese: "製品（せいひん）",
        kana: "せいひん",
        vietnamese: "sản phẩm",
        type: "main",
        english: "Product",
        example: "この　会社の　製品は　いいです。"
      },
      {
        japanese: "ソフト",
        kana: "ソフト",
        vietnamese: "phần mềm",
        type: "main",
        english: "Software",
        example: "新しい　ソフトを　使っています。"
      },
      {
        japanese: "専門（せんもん）",
        kana: "せんもん",
        vietnamese: "chuyên môn",
        type: "main",
        english: "Specialty, major",
        example: "専門は　何ですか。"
      },
      {
        japanese: "歯医者（はいしゃ）",
        kana: "はいしゃ",
        vietnamese: "nha sĩ",
        type: "main",
        english: "Dentist",
        example: "歯医者に　行きます。"
      },
      {
        japanese: "床屋（とこや）",
        kana: "とこや",
        vietnamese: "tiệm cắt tóc nam",
        type: "main",
        english: "Barber",
        example: "床屋で　髪を　切ります。"
      },
      {
        japanese: "プレイガイド",
        kana: "プレイガイド",
        vietnamese: "quầy bán vé",
        type: "main",
        english: "Ticket agency",
        example: "プレイガイドで　チケットを　買います。"
      },
      {
        japanese: "独身（どくしん）",
        kana: "どくしん",
        vietnamese: "độc thân",
        type: "main",
        english: "Single, unmarried",
        example: "私は　独身です。"
      },
      {
        japanese: "特に（とくに）",
        kana: "とくに",
        vietnamese: "đặc biệt",
        type: "main",
        english: "Especially",
        example: "特に　好きな　食べ物は　ありません。"
      },
      {
        japanese: "思い出します（おもいだします）",
        kana: "おもいだします",
        vietnamese: "nhớ ra",
        type: "main",
        english: "To recall",
        example: "名前を　思い出しました。"
      },
      {
        japanese: "ご家族（ごかぞく）",
        kana: "ごかぞく",
        vietnamese: "gia đình (kính ngữ)",
        type: "main",
        english: "(Your) family (honorific)",
        example: "ご家族は　何人ですか。"
      },
      {
        japanese: "いらっしゃいます",
        kana: "いらっしゃいます",
        vietnamese: "có, ở (kính ngữ)",
        type: "main",
        english: "To be (honorific)",
        example: "お子さんは　いらっしゃいますか。"
      },
      {
        japanese: "高校（こうこう）",
        kana: "こうこう",
        vietnamese: "trường trung học phổ thông",
        type: "main",
        english: "High school",
        example: "高校を　卒業しました。"
      },
      // Supplementary Vocabulary (参考語彙) - Occupations
      {
        japanese: "看護師（かんごし）",
        kana: "かんごし",
        vietnamese: "y tá",
        english: "nurse",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "弁護士（べんごし）",
        kana: "べんごし",
        vietnamese: "luật sư",
        english: "lawyer",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "料理人（りょうりにん）",
        kana: "りょうりにん",
        vietnamese: "đầu bếp",
        english: "chef, cook",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "美容師（びようし）",
        kana: "びようし",
        vietnamese: "thợ làm tóc",
        english: "hairdresser",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "運転手（うんてんしゅ）",
        kana: "うんてんしゅ",
        vietnamese: "tài xế",
        english: "driver",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "警察官（けいさつかん）",
        kana: "けいさつかん",
        vietnamese: "cảnh sát",
        english: "police officer",
        type: "supplementary",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "〜てもいいです",
        vietnamese: "~ cũng được, có thể ~ (xin phép)",
        type: "main",
        english: "May I ~, It's okay to ~",
        explanation: "Xin phép hoặc cho phép làm gì đó. Động từ て-form + もいいです. Phủ định: てはいけません (không được ~).",
        examples: [
          {
            japanese: "ここで　写真を　撮ってもいいですか。",
            vietnamese: "Chụp ảnh ở đây có được không?",
            type: "main",
        english: "May I take photos here?"
          },
          {
            japanese: "はい、いいですよ。",
            vietnamese: "Vâng, được ạ.",
            type: "main",
        english: "Yes, you may."
          },
          {
            japanese: "辞書を　使ってもいいです。",
            vietnamese: "Bạn có thể dùng từ điển.",
            type: "main",
        english: "You may use a dictionary."
          }
        ]
      },
      {
        pattern: "〜てはいけません",
        vietnamese: "Không được ~, cấm ~",
        type: "main",
        english: "Must not ~, It's not allowed to ~",
        explanation: "Cấm đoán, không được phép làm gì đó. Động từ て-form + はいけません. Có thể viết tắt: ちゃいけません (thân mật).",
        examples: [
          {
            japanese: "ここで　たばこを　吸ってはいけません。",
            vietnamese: "Không được hút thuốc ở đây.",
            type: "main",
        english: "You must not smoke here."
          },
          {
            japanese: "遅刻してはいけません。",
            vietnamese: "Không được đến muộn.",
            type: "main",
        english: "You must not be late."
          },
          {
            japanese: "試験中に　話してはいけません。",
            vietnamese: "Trong khi thi không được nói chuyện.",
            type: "main",
        english: "You must not talk during the exam."
          }
        ]
      },
      {
        pattern: "〜ています",
        vietnamese: "Đang ~, đã ~ (trạng thái hiện tại)",
        type: "main",
        english: "Be doing ~, have done ~ (progressive/resultative)",
        explanation: "Diễn tả hành động đang diễn ra hoặc trạng thái kết quả. Động từ て-form + います. VD: 読んでいます (đang đọc), 知っています (đã biết).",
        examples: [
          {
            japanese: "今　何を　していますか。",
            vietnamese: "Bây giờ bạn đang làm gì?",
            type: "main",
        english: "What are you doing now?"
          },
          {
            japanese: "本を　読んでいます。",
            vietnamese: "Tôi đang đọc sách.",
            type: "main",
        english: "I am reading a book."
          },
          {
            japanese: "田中さんを　知っていますか。",
            vietnamese: "Bạn có biết anh Tanaka không?",
            type: "main",
        english: "Do you know Mr. Tanaka?"
          }
        ]
      },
      {
        pattern: "〜ています（状態）",
        vietnamese: "Trạng thái đã ~ (kết quả còn lại)",
        type: "main",
        english: "Resultative state (completed action with lasting result)",
        explanation: "Một số động từ dùng ています để chỉ trạng thái kết quả còn lại. VD: 結婚しています (đã kết hôn), 住んでいます (đang sống), 知っています (đã biết).",
        examples: [
          {
            japanese: "私は　結婚しています。",
            vietnamese: "Tôi đã kết hôn.",
            type: "main",
        english: "I am married."
          },
          {
            japanese: "東京に　住んでいます。",
            vietnamese: "Tôi sống ở Tokyo.",
            type: "main",
        english: "I live in Tokyo."
          },
          {
            japanese: "この　漢字を　知っていますか。",
            vietnamese: "Bạn có biết chữ Hán này không?",
            type: "main",
        english: "Do you know this kanji?"
          }
        ]
      }
    ]
  };
