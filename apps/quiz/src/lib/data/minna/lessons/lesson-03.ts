// Minna no Nihongo — Lesson 03: ここは ～です (This place is ~)
import type { LessonData } from '$lib/types';

export const LESSON_03_DATA: LessonData = {
    lessonNumber: 3,
    title: "ここは ～です (This place is ~)",
    vocabulary: [
      {
        japanese: "ここ",
        kana: "ここ",
        vietnamese: "ở đây",
        type: "main",
        english: "here",
        example: "ここは しょくどうです。"
      },
      {
        japanese: "そこ",
        kana: "そこ",
        vietnamese: "ở đó",
        type: "main",
        english: "there",
        example: "トイレは そこです。"
      },
      {
        japanese: "あそこ",
        kana: "あそこ",
        vietnamese: "ở kia",
        type: "main",
        english: "over there",
        example: "エレベーターは あそこです。"
      },
      {
        japanese: "どこ",
        kana: "どこ",
        vietnamese: "ở đâu",
        type: "main",
        english: "where",
        example: "トイレは どこですか。"
      },
      {
        japanese: "こちら",
        kana: "こちら",
        vietnamese: "phía này (lịch sự)",
        type: "main",
        english: "this way (polite)",
        example: ""
      },
      {
        japanese: "そちら",
        kana: "そちら",
        vietnamese: "phía đó (lịch sự)",
        type: "main",
        english: "that way (polite)",
        example: ""
      },
      {
        japanese: "あちら",
        kana: "あちら",
        vietnamese: "phía kia (lịch sự)",
        type: "main",
        english: "that way over there (polite)",
        example: ""
      },
      {
        japanese: "どちら",
        kana: "どちら",
        vietnamese: "phía nào (lịch sự)",
        type: "main",
        english: "which way (polite)",
        example: "おくには どちらですか。"
      },
      {
        japanese: "教室（きょうしつ）",
        kana: "きょうしつ",
        vietnamese: "phòng học",
        type: "main",
        english: "classroom",
        example: ""
      },
      {
        japanese: "食堂（しょくどう）",
        kana: "しょくどう",
        vietnamese: "nhà ăn, canteen",
        type: "main",
        english: "dining hall, cafeteria",
        example: "しょくどうは 2かいです。"
      },
      {
        japanese: "事務所（じむしょ）",
        kana: "じむしょ",
        vietnamese: "văn phòng",
        type: "main",
        english: "office",
        example: ""
      },
      {
        japanese: "会議室（かいぎしつ）",
        kana: "かいぎしつ",
        vietnamese: "phòng họp",
        type: "main",
        english: "conference room",
        example: ""
      },
      {
        japanese: "受付（うけつけ）",
        kana: "うけつけ",
        vietnamese: "quầy lễ tân",
        type: "main",
        english: "reception",
        example: "うけつけは 1かいです。"
      },
      {
        japanese: "ロビー",
        kana: "ロビー",
        vietnamese: "sảnh",
        type: "main",
        english: "lobby",
        example: ""
      },
      {
        japanese: "部屋（へや）",
        kana: "へや",
        vietnamese: "phòng",
        type: "main",
        english: "room",
        example: ""
      },
      {
        japanese: "トイレ",
        kana: "トイレ",
        vietnamese: "nhà vệ sinh",
        type: "main",
        english: "toilet, restroom",
        example: "トイレは どこですか。"
      },
      {
        japanese: "お手洗い（おてあらい）",
        kana: "おてあらい",
        vietnamese: "nhà vệ sinh (lịch sự)",
        type: "main",
        english: "restroom (polite)",
        example: ""
      },
      {
        japanese: "階段（かいだん）",
        kana: "かいだん",
        vietnamese: "cầu thang",
        type: "main",
        english: "stairs",
        example: ""
      },
      {
        japanese: "エレベーター",
        kana: "エレベーター",
        vietnamese: "thang máy",
        type: "main",
        english: "elevator",
        example: "エレベーターは あそこです。"
      },
      {
        japanese: "エスカレーター",
        kana: "エスカレーター",
        vietnamese: "thang cuốn",
        type: "main",
        english: "escalator",
        example: ""
      },
      {
        japanese: "お国（おくに）",
        kana: "おくに",
        vietnamese: "đất nước (lịch sự)",
        type: "main",
        english: "country (polite)",
        example: "おくには どちらですか。"
      },
      {
        japanese: "会社（かいしゃ）",
        kana: "かいしゃ",
        vietnamese: "công ty",
        type: "main",
        english: "company",
        example: ""
      },
      {
        japanese: "うち",
        kana: "うち",
        vietnamese: "nhà",
        type: "main",
        english: "home, house",
        example: ""
      },
      {
        japanese: "電話（でんわ）",
        kana: "でんわ",
        vietnamese: "điện thoại",
        type: "main",
        english: "telephone",
        example: "でんわは あそこです。"
      },
      {
        japanese: "靴（くつ）",
        kana: "くつ",
        vietnamese: "giày",
        type: "main",
        english: "shoes",
        example: ""
      },
      {
        japanese: "ネクタイ",
        kana: "ネクタイ",
        vietnamese: "cà vạt",
        type: "main",
        english: "necktie",
        example: ""
      },
      {
        japanese: "ワイン",
        kana: "ワイン",
        vietnamese: "rượu vang",
        type: "main",
        english: "wine",
        example: ""
      },
      {
        japanese: "売り場（うりば）",
        kana: "うりば",
        vietnamese: "quầy bán hàng",
        type: "main",
        english: "department, counter",
        example: "くつの うりばは どこですか。"
      },
      {
        japanese: "地下（ちか）",
        kana: "ちか",
        vietnamese: "tầng hầm",
        type: "main",
        english: "basement",
        example: ""
      },
      {
        japanese: "～階（～かい / ～がい）",
        kana: "～かい",
        vietnamese: "tầng ~",
        type: "main",
        english: "~ floor",
        example: "しょくどうは 2かいです。"
      },
      {
        japanese: "何階（なんがい）",
        kana: "なんがい",
        vietnamese: "tầng mấy",
        type: "main",
        english: "what floor",
        example: "うけつけは なんがいですか。"
      },
      {
        japanese: "～円（～えん）",
        kana: "～えん",
        vietnamese: "~ yên",
        type: "main",
        english: "~ yen",
        example: "これは 500えんです。"
      },
      {
        japanese: "いくら",
        kana: "いくら",
        vietnamese: "bao nhiêu tiền",
        type: "main",
        english: "how much",
        example: "この かばんは いくらですか。"
      },
      {
        japanese: "百（ひゃく）",
        kana: "ひゃく",
        vietnamese: "trăm",
        type: "main",
        english: "hundred",
        example: ""
      },
      {
        japanese: "千（せん）",
        kana: "せん",
        vietnamese: "nghìn",
        type: "main",
        english: "thousand",
        example: ""
      },
      {
        japanese: "万（まん）",
        kana: "まん",
        vietnamese: "vạn, mười nghìn",
        type: "main",
        english: "ten thousand",
        example: ""
      },
      {
        japanese: "自動販売機（じどうはんばいき）",
        kana: "じどうはんばいき",
        vietnamese: "máy bán hàng tự động",
        type: "main",
        english: "vending machine",
        example: "じどうはんばいきは あそこです。"
      },
      {
        japanese: "お手洗い（おてあらい）",
        kana: "おてあらい",
        vietnamese: "nhà vệ sinh (lịch sự)",
        type: "main",
        english: "restroom (polite)",
        example: ""
      },
      // Supplementary Vocabulary (参考語彙) - Countries & Cities
      {
        japanese: "イタリア",
        kana: "イタリア",
        vietnamese: "Ý, Italia",
        english: "Italy",
        type: "supplementary",
        example: "マリアさんは イタリアじんです。"
      },
      {
        japanese: "スイス",
        kana: "スイス",
        vietnamese: "Thụy Sĩ",
        english: "Switzerland",
        type: "supplementary",
        example: "この とけいは スイスの とけいです。"
      },
      {
        japanese: "フランス",
        kana: "フランス",
        vietnamese: "Pháp",
        english: "France",
        type: "supplementary",
        example: "この ワインは フランスの ワインです。"
      },
      {
        japanese: "ジャカルタ",
        kana: "ジャカルタ",
        vietnamese: "Jakarta (thủ đô Indonesia)",
        english: "Jakarta",
        type: "supplementary",
        example: "かいしゃは ジャカルタに あります。"
      },
      {
        japanese: "バンコク",
        kana: "バンコク",
        vietnamese: "Bangkok (thủ đô Thái Lan)",
        english: "Bangkok",
        type: "supplementary",
        example: "バンコクは タイの しゅとです。"
      },
      {
        japanese: "ベルリン",
        kana: "ベルリン",
        vietnamese: "Berlin (thủ đô Đức)",
        english: "Berlin",
        type: "supplementary",
        example: "ベルリンは ドイツの しゅとです。"
      },
      {
        japanese: "新大阪（しんおおさか）",
        kana: "しんおおさか",
        vietnamese: "Shin-Osaka (ga tàu)",
        english: "Shin-Osaka (station)",
        type: "supplementary",
        example: "しんおおさかえきは どこですか。"
      },
      // Supplementary Vocabulary - Common Items & Phrases
      {
        japanese: "携帯電話（けいたいでんわ）",
        kana: "けいたいでんわ",
        vietnamese: "điện thoại di động",
        english: "Mobile phone, cell phone",
        type: "supplementary",
        example: "携帯電話は　どこですか。"
      },
      {
        japanese: "屋台（やたい）",
        kana: "やたい",
        vietnamese: "quầy hàng rong",
        english: "Food stall, street vendor",
        type: "supplementary",
        example: "屋台は　あそこです。"
      },
      {
        japanese: "いらっしゃいませ",
        kana: "いらっしゃいませ",
        vietnamese: "Xin chào quý khách",
        english: "Welcome (shop greeting)",
        type: "supplementary",
        example: "いらっしゃいませ。"
      },
      {
        japanese: "見せてください",
        kana: "みせてください",
        vietnamese: "Cho tôi xem",
        english: "Please show me",
        type: "supplementary",
        example: "それを　見せてください。"
      },
      {
        japanese: "それでは",
        kana: "それでは",
        vietnamese: "Thế thì, vậy thì",
        english: "Well then, in that case",
        type: "supplementary",
        example: "それでは、これを　ください。"
      }
    ],
    grammar: [
      {
        pattern: "ここ/そこ/あそこ は ～です",
        vietnamese: "Đây/đó/kia là ~",
        type: "main",
        english: "Here/There is ~",
        explanation: "Đại từ chỉ định địa điểm. ここ (gần người nói), そこ (gần người nghe), あそこ (xa cả hai).",
        examples: [
          {
            japanese: "ここは しょくどうです。",
            vietnamese: "Đây là nhà ăn.",
            type: "main",
        english: "This place is a dining hall."
          },
          {
            japanese: "そこは トイレです。",
            vietnamese: "Đó là nhà vệ sinh.",
            type: "main",
        english: "That place is a restroom."
          },
          {
            japanese: "あそこは エレベーターです。",
            vietnamese: "Kia là thang máy.",
            type: "main",
        english: "That place over there is an elevator."
          }
        ]
      },
      {
        pattern: "～は どこですか",
        vietnamese: "~ ở đâu?",
        type: "main",
        english: "Where is ~?",
        explanation: "Câu hỏi về vị trí. 'どこ' nghĩa là 'ở đâu'.",
        examples: [
          {
            japanese: "トイレは どこですか。",
            vietnamese: "Nhà vệ sinh ở đâu?",
            type: "main",
        english: "Where is the restroom?"
          },
          {
            japanese: "でんわは どこですか。",
            vietnamese: "Điện thoại ở đâu?",
            type: "main",
        english: "Where is the telephone?"
          }
        ]
      },
      {
        pattern: "～は ～かいです",
        vietnamese: "~ ở tầng ~",
        type: "main",
        english: "~ is on the ~ floor",
        explanation: "Chỉ số tầng. かい (階) nghĩa là 'tầng'.",
        examples: [
          {
            japanese: "しょくどうは 1かいです。",
            vietnamese: "Nhà ăn ở tầng 1.",
            type: "main",
        english: "The dining hall is on the 1st floor."
          },
          {
            japanese: "かいぎしつは 3かいです。",
            vietnamese: "Phòng họp ở tầng 3.",
            type: "main",
        english: "The meeting room is on the 3rd floor."
          }
        ]
      },
      {
        pattern: "～の ～",
        vietnamese: "~ của/ở ~",
        type: "main",
        english: "~ of ~, ~ in/at ~",
        explanation: "Trợ từ 'の' kết nối tên địa điểm với tổ chức/công ty.",
        examples: [
          {
            japanese: "この エレベーターは IMCの エレベーターです。",
            vietnamese: "Thang máy này là thang máy của IMC.",
            type: "main",
        english: "This elevator is IMC's elevator."
          },
          {
            japanese: "あの きょうしつは にほんごの きょうしつです。",
            vietnamese: "Lớp học kia là lớp học tiếng Nhật.",
            type: "main",
        english: "That classroom is a Japanese classroom."
          }
        ]
      }
    ]
  };
