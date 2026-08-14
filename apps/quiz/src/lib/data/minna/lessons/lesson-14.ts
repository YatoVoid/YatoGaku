// Minna no Nihongo — Lesson 14: て形 (Te-form: requests, ongoing actions)
import type { LessonData } from '$lib/types';

export const LESSON_14_DATA: LessonData = {
    lessonNumber: 14,
    title: "て形 (Te-form: requests, ongoing actions)",
    vocabulary: [
      {
        japanese: "つけます",
        kana: "つけます",
        vietnamese: "bật (đèn, máy)",
        type: "main",
        english: "To turn on",
        example: "電気をつけてください。"
      },
      {
        japanese: "消（け）します",
        kana: "けします",
        vietnamese: "tắt (đèn, máy)",
        type: "main",
        english: "To turn off / to erase",
        example: "エアコンを消してください。"
      },
      {
        japanese: "開（あ）けます",
        kana: "あけます",
        vietnamese: "mở (cửa, cửa sổ)",
        type: "main",
        english: "To open",
        example: "窓を開けてください。"
      },
      {
        japanese: "閉（し）めます",
        kana: "しめます",
        vietnamese: "đóng (cửa, cửa sổ)",
        type: "main",
        english: "To close",
        example: "ドアを閉めてください。"
      },
      {
        japanese: "急（いそ）ぎます",
        kana: "いそぎます",
        vietnamese: "vội, nhanh lên",
        type: "main",
        english: "To hurry",
        example: "急いでください。"
      },
      {
        japanese: "待（ま）ちます",
        kana: "まちます",
        vietnamese: "chờ, đợi",
        type: "main",
        english: "To wait",
        example: "ちょっと待ってください。"
      },
      {
        japanese: "止（と）めます",
        kana: "とめます",
        vietnamese: "dừng, đỗ (xe)",
        type: "main",
        english: "To stop / to park",
        example: "ここに車を止めてください。"
      },
      {
        japanese: "曲（ま）がります",
        kana: "まがります",
        vietnamese: "rẽ, quẹo",
        type: "main",
        english: "To turn",
        example: "次の角を右に曲がってください。"
      },
      {
        japanese: "持（も）ちます",
        kana: "もちます",
        vietnamese: "cầm, mang",
        type: "main",
        english: "To hold / to carry",
        example: "この荷物を持ってください。"
      },
      {
        japanese: "取（と）ります",
        kana: "とります",
        vietnamese: "lấy",
        type: "main",
        english: "To take / to pick up",
        example: "塩を取ってください。"
      },
      {
        japanese: "手伝（てつだ）います",
        kana: "てつだいます",
        vietnamese: "giúp đỡ",
        type: "main",
        english: "To help / to assist",
        example: "引っ越しを手伝ってください。"
      },
      {
        japanese: "呼（よ）びます",
        kana: "よびます",
        vietnamese: "gọi",
        type: "main",
        english: "To call",
        example: "タクシーを呼んでください。"
      },
      {
        japanese: "話（はな）します",
        kana: "はなします",
        vietnamese: "nói chuyện",
        type: "main",
        english: "To speak / to talk",
        example: "ゆっくり話してください。"
      },
      {
        japanese: "使（つか）います",
        kana: "つかいます",
        vietnamese: "sử dụng",
        type: "main",
        english: "To use",
        example: "このパソコンを使ってもいいですか。"
      },
      {
        japanese: "置（お）きます",
        kana: "おきます",
        vietnamese: "đặt, để",
        type: "main",
        english: "To put / to place",
        example: "ここに荷物を置いてください。"
      },
      {
        japanese: "作（つく）ります",
        kana: "つくります",
        vietnamese: "làm, chế tạo",
        type: "main",
        english: "To make / to create",
        example: "晩ごはんを作っています。"
      },
      {
        japanese: "売（う）ります",
        kana: "うります",
        vietnamese: "bán",
        type: "main",
        english: "To sell",
        example: "あの店でパンを売っています。"
      },
      {
        japanese: "知（し）ります",
        kana: "しります",
        vietnamese: "biết",
        type: "main",
        english: "To know",
        example: "ミラーさんの電話番号を知っていますか。"
      },
      {
        japanese: "住（す）みます",
        kana: "すみます",
        vietnamese: "sống, cư trú",
        type: "main",
        english: "To live / to reside",
        example: "東京に住んでいます。"
      },
      {
        japanese: "研究（けんきゅう）します",
        kana: "けんきゅうします",
        vietnamese: "nghiên cứu",
        type: "main",
        english: "To research",
        example: "大学で日本語を研究しています。"
      },
      {
        japanese: "電気（でんき）",
        kana: "でんき",
        vietnamese: "đèn, điện",
        type: "main",
        english: "Light / electricity",
        example: "電気をつけてください。"
      },
      {
        japanese: "名前（なまえ）",
        kana: "なまえ",
        vietnamese: "tên",
        type: "main",
        english: "Name",
        example: "ここに名前を書いてください。"
      },
      {
        japanese: "住所（じゅうしょ）",
        kana: "じゅうしょ",
        vietnamese: "địa chỉ",
        type: "main",
        english: "Address",
        example: "住所と名前を書いてください。"
      },
      {
        japanese: "地図（ちず）",
        kana: "ちず",
        vietnamese: "bản đồ",
        type: "main",
        english: "Map",
        example: "地図を見てください。"
      },
      {
        japanese: "塩（しお）",
        kana: "しお",
        vietnamese: "muối",
        type: "main",
        english: "Salt",
        example: "塩を取ってください。"
      },
      {
        japanese: "砂糖（さとう）",
        kana: "さとう",
        vietnamese: "đường (gia vị)",
        type: "main",
        english: "Sugar",
        example: "砂糖を入れてください。"
      },
      {
        japanese: "問題（もんだい）",
        kana: "もんだい",
        vietnamese: "vấn đề, câu hỏi",
        type: "main",
        english: "Problem / question",
        example: "問題の答えを書いてください。"
      },
      {
        japanese: "答（こた）え",
        kana: "こたえ",
        vietnamese: "câu trả lời",
        type: "main",
        english: "Answer",
        example: "答えはまだわかりません。"
      },
      {
        japanese: "真（ま）っすぐ",
        kana: "まっすぐ",
        vietnamese: "thẳng",
        type: "main",
        english: "Straight",
        example: "真っすぐ行ってください。"
      },
      {
        japanese: "ゆっくり",
        kana: "ゆっくり",
        vietnamese: "chậm rãi, từ từ",
        type: "main",
        english: "Slowly",
        example: "ゆっくり話してください。"
      },
      {
        japanese: "すぐ",
        kana: "すぐ",
        vietnamese: "ngay lập tức",
        type: "main",
        english: "Immediately / right away",
        example: "すぐ来てください。"
      },
      {
        japanese: "また",
        kana: "また",
        vietnamese: "lại, lần nữa",
        type: "main",
        english: "Again",
        example: "また来てください。"
      },
      {
        japanese: "あとで",
        kana: "あとで",
        vietnamese: "sau, lát nữa",
        type: "main",
        english: "Later / afterwards",
        example: "あとで電話してください。"
      },
      {
        japanese: "もう少（すこ）し",
        kana: "もうすこし",
        vietnamese: "thêm một chút nữa",
        type: "main",
        english: "A little more",
        example: "もう少し待ってください。"
      },
      {
        japanese: "すみませんが",
        kana: "すみませんが",
        vietnamese: "xin lỗi nhưng... (mở đầu nhờ vả)",
        type: "main",
        english: "Excuse me, but...",
        example: "すみませんが、写真を撮ってください。"
      },
      {
        japanese: "パスポート",
        kana: "パスポート",
        vietnamese: "hộ chiếu",
        type: "main",
        english: "Passport",
        example: "パスポートを見せてください。"
      },
      {
        japanese: "〜方（〜かた）",
        kana: "〜かた",
        vietnamese: "cách ~",
        type: "main",
        english: "Way of ~, how to ~",
        example: "読み方を教えてください。"
      },
      {
        japanese: "読（よ）み方（かた）",
        kana: "よみかた",
        vietnamese: "cách đọc",
        type: "main",
        english: "Way of reading",
        example: "この漢字の読み方を教えてください。"
      },
      {
        japanese: "お釣（つ）り",
        kana: "おつり",
        vietnamese: "tiền thối lại",
        type: "main",
        english: "Change (money)",
        example: "お釣りを取ってください。"
      },
      {
        japanese: "いいですよ",
        kana: "いいですよ",
        vietnamese: "được, tốt (đồng ý)",
        type: "main",
        english: "That's fine, OK",
        example: "ペンを使ってもいいですか。…いいですよ。"
      },
      {
        japanese: "さあ",
        kana: "さあ",
        vietnamese: "này, nào (mời mọc)",
        type: "main",
        english: "Come on, well (invitation/uncertainty)",
        example: "さあ、行きましょう。"
      },
      {
        japanese: "あれ？",
        kana: "あれ？",
        vietnamese: "ơ? (ngạc nhiên)",
        type: "main",
        english: "Huh? What? (surprise)",
        example: "あれ？鍵がありません。"
      },
      {
        japanese: "これでお願（ねが）いします",
        kana: "これでおねがいします",
        vietnamese: "làm ơn tính tiền cái này",
        type: "main",
        english: "I'll take this (at checkout)",
        example: "これでお願いします。"
      },
      // Supplementary Vocabulary (参考語彙) - More Verbs
      {
        japanese: "切（き）ります",
        kana: "きります",
        vietnamese: "cắt",
        english: "to cut",
        type: "supplementary",
        example: "野菜を　切ってください。"
      },
      {
        japanese: "入（い）れます",
        kana: "いれます",
        vietnamese: "cho vào, bỏ vào",
        english: "to put in, to insert",
        type: "supplementary",
        example: "砂糖を　入れてください。"
      },
      {
        japanese: "出（だ）します",
        kana: "だします",
        vietnamese: "lấy ra, nộp",
        english: "to take out, to submit",
        type: "supplementary",
        example: "宿題を　出してください。"
      },
      {
        japanese: "送（おく）ります",
        kana: "おくります",
        vietnamese: "gửi",
        english: "to send",
        type: "supplementary",
        example: "メールを　送ってください。"
      },
      {
        japanese: "見（み）せます",
        kana: "みせます",
        vietnamese: "cho xem",
        english: "to show",
        type: "supplementary",
        example: "パスポートを　見せてください。"
      },
      // Supplementary Vocabulary - Household Items
      {
        japanese: "エアコン",
        kana: "エアコン",
        vietnamese: "máy lạnh, điều hòa",
        english: "air conditioner",
        type: "supplementary",
        example: "エアコンを　つけてください。"
      },
      {
        japanese: "窓（まど）",
        kana: "まど",
        vietnamese: "cửa sổ",
        english: "window",
        type: "supplementary",
        example: "窓を　開けてください。"
      },
      {
        japanese: "ドア",
        kana: "ドア",
        vietnamese: "cửa",
        english: "door",
        type: "supplementary",
        example: "ドアを　閉めてください。"
      },
      // Supplementary Vocabulary - Seasonings
      {
        japanese: "しょうゆ",
        kana: "しょうゆ",
        vietnamese: "nước tương",
        english: "soy sauce",
        type: "supplementary",
        example: "しょうゆを　取ってください。"
      },
      {
        japanese: "ソース",
        kana: "ソース",
        vietnamese: "sốt",
        english: "sauce",
        type: "supplementary",
        example: "ソースを　かけてください。"
      },
      {
        japanese: "こしょう",
        kana: "こしょう",
        vietnamese: "tiêu (gia vị)",
        english: "pepper",
        type: "supplementary",
        example: "こしょうを　入れてください。"
      },
      // Supplementary Vocabulary - Directions
      {
        japanese: "右（みぎ）",
        kana: "みぎ",
        vietnamese: "bên phải",
        english: "right (direction)",
        type: "supplementary",
        example: "右に　曲がってください。"
      },
      {
        japanese: "左（ひだり）",
        kana: "ひだり",
        vietnamese: "bên trái",
        english: "left (direction)",
        type: "supplementary",
        example: "左に　行ってください。"
      },
      {
        japanese: "角（かど）",
        kana: "かど",
        vietnamese: "góc đường",
        english: "corner",
        type: "supplementary",
        example: "角を　右に　曲がってください。"
      }
    ],
    grammar: [
      {
        pattern: "〜てください",
        vietnamese: "Làm ơn ~, hãy ~",
        type: "main",
        english: "Please do ~",
        explanation: "Dùng để nhờ vả hoặc yêu cầu lịch sự. Động từ て-form + ください. VD: 見ます → 見てください, 食べます → 食べてください。",
        examples: [
          {
            japanese: "ちょっと　待ってください。",
            vietnamese: "Hãy đợi một chút.",
            type: "main",
        english: "Please wait a moment."
          },
          {
            japanese: "窓を　開けてください。",
            vietnamese: "Làm ơn mở cửa sổ.",
            type: "main",
        english: "Please open the window."
          },
          {
            japanese: "ここに　名前を　書いてください。",
            vietnamese: "Hãy viết tên vào đây.",
            type: "main",
        english: "Please write your name here."
          }
        ]
      },
      {
        pattern: "〜ましょう / 〜ませんか",
        vietnamese: "Hãy cùng ~, ~ nhé / ~ không? (mời)",
        type: "main",
        english: "Let's ~ / Won't you ~ ?",
        explanation: "ましょう: rủ rê, đề nghị cùng làm. ませんか: mời mọc lịch sự hơn. VD: 行きます → 行きましょう / 行きませんか。",
        examples: [
          {
            japanese: "一緒に　昼ごはんを　食べましょう。",
            vietnamese: "Hãy cùng ăn trưa nhé.",
            type: "main",
        english: "Let's eat lunch together."
          },
          {
            japanese: "映画を　見に　行きませんか。",
            vietnamese: "Chúng ta đi xem phim không?",
            type: "main",
        english: "Won't you go to see a movie?"
          },
          {
            japanese: "ちょっと　休みましょう。",
            vietnamese: "Nghỉ một chút nhé.",
            type: "main",
        english: "Let's take a break."
          }
        ]
      },
      {
        pattern: "て形の作り方",
        vietnamese: "Cách chia động từ thành thể て",
        type: "main",
        english: "How to form て-form",
        explanation: "Nhóm I: 〜って、〜いて、〜いで、〜して、〜んで. Nhóm II: bỏ る thêm て. Nhóm III: します→して, 来ます→来て. VD: 買う→買って, 食べる→食べて。",
        examples: [
          {
            japanese: "買います　→　買って",
            vietnamese: "mua → mua (て)",
            type: "main",
        english: "buy → buying (te-form)"
          },
          {
            japanese: "食べます　→　食べて",
            vietnamese: "ăn → ăn (て)",
            type: "main",
        english: "eat → eating (te-form)"
          },
          {
            japanese: "来ます　→　来（き）て",
            vietnamese: "đến → đến (て)",
            type: "main",
        english: "come → coming (te-form)"
          }
        ]
      },
      {
        pattern: "〜てから、〜",
        vietnamese: "Sau khi ~, thì ~",
        type: "main",
        english: "After doing ~, ~",
        explanation: "Diễn tả hành động xảy ra theo thứ tự. Hành động đầu tiên dùng て-form + から, sau đó là hành động thứ hai.",
        examples: [
          {
            japanese: "宿題を　してから、テレビを　見ます。",
            vietnamese: "Sau khi làm bài tập, tôi xem TV.",
            type: "main",
        english: "After doing homework, I watch TV."
          },
          {
            japanese: "手を　洗ってから、ご飯を　食べます。",
            vietnamese: "Sau khi rửa tay, tôi ăn cơm.",
            type: "main",
        english: "After washing hands, I eat."
          },
          {
            japanese: "シャワーを　浴びてから、寝ます。",
            vietnamese: "Sau khi tắm, tôi đi ngủ.",
            type: "main",
        english: "After taking a shower, I go to bed."
          }
        ]
      }
    ]
  };
