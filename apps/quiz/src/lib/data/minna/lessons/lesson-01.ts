// Minna no Nihongo — Lesson 01: わたしは ～です (Self-introduction)
import type { LessonData } from '$lib/types';

export const LESSON_01_DATA: LessonData = {
    lessonNumber: 1,
    title: "わたしは ～です (Self-introduction)",
    vocabulary: [
      {
        japanese: "わたし",
        kana: "わたし",
        vietnamese: "tôi",
        english: "I, me",
        type: "main",
        example: "わたしは がくせいです。"
      },
      {
        japanese: "あなた",
        kana: "あなた",
        vietnamese: "bạn, anh, chị",
        type: "main",
        english: "you",
        example: "あなたは せんせいですか。"
      },
      {
        japanese: "あの ひと",
        kana: "あのひと",
        vietnamese: "người kia",
        type: "main",
        english: "that person",
        example: "あの ひとは だれですか。"
      },
      {
        japanese: "あの かた",
        kana: "あのかた",
        vietnamese: "vị kia (lịch sự)",
        type: "main",
        english: "that person (polite)",
        example: "あの かたは やまださんです。"
      },
      {
        japanese: "～さん",
        kana: "～さん",
        vietnamese: "anh/chị ~",
        type: "main",
        english: "Mr./Ms. ~",
        example: "たなかさんは にほんじんです。"
      },
      {
        japanese: "～ちゃん",
        kana: "～ちゃん",
        vietnamese: "bé ~, ~ (thân mật)",
        type: "main",
        english: "~ (endearing, for children)",
        example: ""
      },
      {
        japanese: "～くん",
        kana: "～くん",
        vietnamese: "cậu ~ (thân mật, nam)",
        type: "main",
        english: "~ (familiar, for boys)",
        example: ""
      },
      {
        japanese: "～じん",
        kana: "～じん",
        vietnamese: "người ~ (quốc tịch)",
        type: "main",
        english: "~ person (nationality)",
        example: "わたしは ベトナムじんです。"
      },
      {
        japanese: "先生（せんせい）",
        kana: "せんせい",
        vietnamese: "giáo viên, thầy/cô",
        type: "main",
        english: "teacher, professor",
        example: "やまださんは せんせいです。"
      },
      {
        japanese: "教師（きょうし）",
        kana: "きょうし",
        vietnamese: "giáo viên",
        type: "main",
        english: "teacher (profession)",
        example: ""
      },
      {
        japanese: "学生（がくせい）",
        kana: "がくせい",
        vietnamese: "sinh viên",
        type: "main",
        english: "student (university)",
        example: "わたしは がくせいです。"
      },
      {
        japanese: "会社員（かいしゃいん）",
        kana: "かいしゃいん",
        vietnamese: "nhân viên công ty",
        type: "main",
        english: "company employee",
        example: "たなかさんは かいしゃいんです。"
      },
      {
        japanese: "社員（しゃいん）",
        kana: "しゃいん",
        vietnamese: "nhân viên",
        type: "main",
        english: "employee",
        example: ""
      },
      {
        japanese: "銀行員（ぎんこういん）",
        kana: "ぎんこういん",
        vietnamese: "nhân viên ngân hàng",
        type: "main",
        english: "bank employee",
        example: ""
      },
      {
        japanese: "医者（いしゃ）",
        kana: "いしゃ",
        vietnamese: "bác sĩ",
        type: "main",
        english: "doctor",
        example: "あの ひとは いしゃです。"
      },
      {
        japanese: "研究者（けんきゅうしゃ）",
        kana: "けんきゅうしゃ",
        vietnamese: "nhà nghiên cứu",
        type: "main",
        english: "researcher",
        example: ""
      },
      {
        japanese: "エンジニア",
        kana: "エンジニア",
        vietnamese: "kỹ sư",
        type: "main",
        english: "engineer",
        example: "マイクさんは エンジニアです。"
      },
      {
        japanese: "大学（だいがく）",
        kana: "だいがく",
        vietnamese: "trường đại học",
        type: "main",
        english: "university",
        example: ""
      },
      {
        japanese: "病院（びょういん）",
        kana: "びょういん",
        vietnamese: "bệnh viện",
        type: "main",
        english: "hospital",
        example: ""
      },
      {
        japanese: "電気（でんき）",
        kana: "でんき",
        vietnamese: "điện, đồ điện",
        type: "main",
        english: "electricity, electric",
        example: ""
      },
      {
        japanese: "だれ",
        kana: "だれ",
        vietnamese: "ai",
        type: "main",
        english: "who",
        example: "あの ひとは だれですか。"
      },
      {
        japanese: "どなた",
        kana: "どなた",
        vietnamese: "ai (lịch sự)",
        type: "main",
        english: "who (polite)",
        example: "あの かたは どなたですか。"
      },
      {
        japanese: "～さい",
        kana: "～さい",
        vietnamese: "~ tuổi",
        type: "main",
        english: "~ years old",
        example: "わたしは 25さいです。"
      },
      {
        japanese: "なんさい",
        kana: "なんさい",
        vietnamese: "mấy tuổi",
        type: "main",
        english: "how old",
        example: "マリアさんは なんさいですか。"
      },
      {
        japanese: "はい",
        kana: "はい",
        vietnamese: "vâng, dạ",
        type: "main",
        english: "yes",
        example: "はい、そうです。"
      },
      {
        japanese: "いいえ",
        kana: "いいえ",
        vietnamese: "không",
        type: "main",
        english: "no",
        example: "いいえ、ちがいます。"
      },
      {
        japanese: "はじめまして",
        kana: "はじめまして",
        vietnamese: "xin chào (lần đầu gặp)",
        type: "main",
        english: "how do you do",
        example: "はじめまして、たなかです。"
      },
      {
        japanese: "どうぞ よろしく",
        kana: "どうぞよろしく",
        vietnamese: "rất vui được gặp bạn",
        type: "main",
        english: "pleased to meet you",
        example: ""
      },
      {
        japanese: "失礼ですが（しつれいですが）",
        kana: "しつれいですが",
        vietnamese: "xin lỗi nhưng...",
        type: "main",
        english: "excuse me, but...",
        example: "しつれいですが、おなまえは？"
      },
      {
        japanese: "お名前は？（おなまえは？）",
        kana: "おなまえは",
        vietnamese: "tên bạn là gì?",
        type: "main",
        english: "what is your name?",
        example: ""
      },
      {
        japanese: "アメリカ",
        kana: "アメリカ",
        vietnamese: "Mỹ",
        type: "main",
        english: "America, USA",
        example: "マイクさんは アメリカじんです。"
      },
      {
        japanese: "イギリス",
        kana: "イギリス",
        vietnamese: "Anh",
        type: "main",
        english: "England, UK",
        example: ""
      },
      {
        japanese: "インド",
        kana: "インド",
        vietnamese: "Ấn Độ",
        type: "main",
        english: "India",
        example: ""
      },
      {
        japanese: "インドネシア",
        kana: "インドネシア",
        vietnamese: "Indonesia",
        type: "main",
        english: "Indonesia",
        example: ""
      },
      {
        japanese: "韓国（かんこく）",
        kana: "かんこく",
        vietnamese: "Hàn Quốc",
        type: "main",
        english: "South Korea",
        example: ""
      },
      {
        japanese: "タイ",
        kana: "タイ",
        vietnamese: "Thái Lan",
        type: "main",
        english: "Thailand",
        example: ""
      },
      {
        japanese: "中国（ちゅうごく）",
        kana: "ちゅうごく",
        vietnamese: "Trung Quốc",
        type: "main",
        english: "China",
        example: ""
      },
      {
        japanese: "ドイツ",
        kana: "ドイツ",
        vietnamese: "Đức",
        type: "main",
        english: "Germany",
        example: ""
      },
      {
        japanese: "日本（にほん）",
        kana: "にほん",
        vietnamese: "Nhật Bản",
        type: "main",
        english: "Japan",
        example: ""
      },
      {
        japanese: "フランス",
        kana: "フランス",
        vietnamese: "Pháp",
        type: "main",
        english: "France",
        example: ""
      },
      {
        japanese: "ブラジル",
        kana: "ブラジル",
        vietnamese: "Brazil",
        type: "main",
        english: "Brazil",
        example: ""
      },
      // Supplementary Vocabulary (参考語彙) - Countries
      {
        japanese: "オーストラリア",
        kana: "オーストラリア",
        vietnamese: "Úc",
        english: "Australia",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "カナダ",
        kana: "カナダ",
        vietnamese: "Canada",
        english: "Canada",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "台湾（たいわん）",
        kana: "たいわん",
        vietnamese: "Đài Loan",
        english: "Taiwan",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "ニュージーランド",
        kana: "ニュージーランド",
        vietnamese: "New Zealand",
        english: "New Zealand",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "フィリピン",
        kana: "フィリピン",
        vietnamese: "Philippines",
        english: "Philippines",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "マレーシア",
        kana: "マレーシア",
        vietnamese: "Malaysia",
        english: "Malaysia",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "メキシコ",
        kana: "メキシコ",
        vietnamese: "Mexico",
        english: "Mexico",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "ロシア",
        kana: "ロシア",
        vietnamese: "Nga",
        english: "Russia",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "イタリア",
        kana: "イタリア",
        vietnamese: "Ý",
        english: "Italy",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "スペイン",
        kana: "スペイン",
        vietnamese: "Tây Ban Nha",
        english: "Spain",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "ポルトガル",
        kana: "ポルトガル",
        vietnamese: "Bồ Đào Nha",
        english: "Portugal",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "スイス",
        kana: "スイス",
        vietnamese: "Thụy Sĩ",
        english: "Switzerland",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "オランダ",
        kana: "オランダ",
        vietnamese: "Hà Lan",
        english: "Netherlands",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "ギリシャ",
        kana: "ギリシャ",
        vietnamese: "Hy Lạp",
        english: "Greece",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "トルコ",
        kana: "トルコ",
        vietnamese: "Thổ Nhĩ Kỳ",
        english: "Turkey",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "エジプト",
        kana: "エジプト",
        vietnamese: "Ai Cập",
        english: "Egypt",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "南アフリカ（みなみアフリカ）",
        kana: "みなみアフリカ",
        vietnamese: "Nam Phi",
        english: "South Africa",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "アルゼンチン",
        kana: "アルゼンチン",
        vietnamese: "Argentina",
        english: "Argentina",
        type: "supplementary",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "～は ～です",
        vietnamese: "~ là ~",
        type: "main",
        english: "~ is/am/are ~",
        explanation: "Dùng để giới thiệu bản thân hoặc xác định danh tính. 'は' là trợ từ chỉ chủ đề, 'です' là động từ 'là' lịch sự.",
        examples: [
          {
            japanese: "わたしは マイクです。",
            vietnamese: "Tôi là Mike.",
            type: "main",
        english: "I am Mike."
          },
          {
            japanese: "わたしは がくせいです。",
            vietnamese: "Tôi là học sinh.",
            type: "main",
        english: "I am a student."
          },
          {
            japanese: "やまださんは せんせいです。",
            vietnamese: "Anh Yamada là giáo viên.",
            type: "main",
        english: "Mr. Yamada is a teacher."
          }
        ]
      },
      {
        pattern: "～は ～じゃ ありません",
        vietnamese: "~ không phải là ~",
        type: "main",
        english: "~ is/am/are not ~",
        explanation: "Dạng phủ định của 'です'. 'じゃ' là viết tắt thân mật của 'では'.",
        examples: [
          {
            japanese: "わたしは がくせいじゃ ありません。",
            vietnamese: "Tôi không phải là học sinh.",
            type: "main",
        english: "I am not a student."
          },
          {
            japanese: "サントスさんは せんせいじゃ ありません。",
            vietnamese: "Anh Santos không phải là giáo viên.",
            type: "main",
        english: "Mr. Santos is not a teacher."
          }
        ]
      },
      {
        pattern: "～は ～ですか",
        vietnamese: "~ có phải là ~ không?",
        type: "main",
        english: "Is/Am/Are ~ ~?",
        explanation: "Câu hỏi yes/no. Thêm 'か' vào cuối câu khẳng định. Trả lời: はい、～です hoặc いいえ、～じゃ ありません。",
        examples: [
          {
            japanese: "あなたは がくせいですか。",
            vietnamese: "Bạn có phải là học sinh không?",
            type: "main",
        english: "Are you a student?"
          },
          {
            japanese: "ミラーさんは アメリカじんですか。",
            vietnamese: "Anh Miller có phải là người Mỹ không?",
            type: "main",
        english: "Is Mr. Miller American?"
          }
        ]
      },
      {
        pattern: "～の ～",
        vietnamese: "~ của ~",
        type: "main",
        english: "~ of ~, ~'s ~",
        explanation: "Trợ từ 'の' dùng để chỉ sở hữu hoặc thuộc tính. Kết nối hai danh từ.",
        examples: [
          {
            japanese: "これは わたしの ほんです。",
            vietnamese: "Đây là sách của tôi.",
            type: "main",
        english: "This is my book."
          },
          {
            japanese: "やまださんは IMCの しゃいんです。",
            vietnamese: "Anh Yamada là nhân viên của IMC.",
            type: "main",
        english: "Mr. Yamada is an employee of IMC."
          }
        ]
      }
    ]
  };
