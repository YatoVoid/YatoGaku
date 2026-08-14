// Minna no Nihongo — Lesson 23: 〜とき/〜と (When ~ / If ~)
import type { LessonData } from '$lib/types';

export const LESSON_23_DATA: LessonData = {
    lessonNumber: 23,
    title: "〜とき/〜と (When ~ / If ~)",
    vocabulary: [
      {
        japanese: "聞きます（ききます）",
        kana: "ききます",
        vietnamese: "hỏi",
        type: "main",
        english: "To ask",
        example: "道を聞きます。"
      },
      {
        japanese: "回します（まわします）",
        kana: "まわします",
        vietnamese: "xoay, vặn",
        type: "main",
        english: "To turn, to rotate",
        example: "ハンドルを回します。"
      },
      {
        japanese: "引きます（ひきます）",
        kana: "ひきます",
        vietnamese: "kéo",
        type: "main",
        english: "To pull",
        example: "ドアを引きます。"
      },
      {
        japanese: "変えます（かえます）",
        kana: "かえます",
        vietnamese: "thay đổi",
        type: "main",
        english: "To change (transitive)",
        example: "チャンネルを変えます。"
      },
      {
        japanese: "触ります（さわります）",
        kana: "さわります",
        vietnamese: "chạm, sờ",
        type: "main",
        english: "To touch",
        example: "壁に触らないでください。"
      },
      {
        japanese: "出ます（でます）",
        kana: "でます",
        vietnamese: "ra (tiền thối ra)",
        type: "main",
        english: "To come out",
        example: "お釣りが出ます。"
      },
      {
        japanese: "動きます（うごきます）",
        kana: "うごきます",
        vietnamese: "chuyển động, hoạt động",
        type: "main",
        english: "To move, to work",
        example: "ボタンを押すと、機械が動きます。"
      },
      {
        japanese: "歩きます（あるきます）",
        kana: "あるきます",
        vietnamese: "đi bộ",
        type: "main",
        english: "To walk",
        example: "駅まで歩きます。"
      },
      {
        japanese: "渡ります（わたります）",
        kana: "わたります",
        vietnamese: "băng qua, đi qua",
        type: "main",
        english: "To cross",
        example: "橋を渡ります。"
      },
      {
        japanese: "気をつけます（きをつけます）",
        kana: "きをつけます",
        vietnamese: "cẩn thận, chú ý",
        type: "main",
        english: "To be careful",
        example: "車に気をつけてください。"
      },
      {
        japanese: "引（ひ）っ越（こ）しします",
        kana: "ひっこしします",
        vietnamese: "chuyển nhà",
        type: "main",
        english: "To move (house)",
        example: "来月引っ越しします。"
      },
      {
        japanese: "交通（こうつう）",
        kana: "こうつう",
        vietnamese: "giao thông",
        type: "main",
        english: "Traffic, transportation",
        example: "交通が便利です。"
      },
      {
        japanese: "信号（しんごう）",
        kana: "しんごう",
        vietnamese: "đèn giao thông",
        type: "main",
        english: "Traffic light",
        example: "信号が赤のとき、止まります。"
      },
      {
        japanese: "交差点（こうさてん）",
        kana: "こうさてん",
        vietnamese: "ngã tư",
        type: "main",
        english: "Intersection, crossroads",
        example: "次の交差点を右に曲がります。"
      },
      {
        japanese: "角（かど）",
        kana: "かど",
        vietnamese: "góc (đường)",
        type: "main",
        english: "Corner",
        example: "角を左に曲がってください。"
      },
      {
        japanese: "橋（はし）",
        kana: "はし",
        vietnamese: "cầu",
        type: "main",
        english: "Bridge",
        example: "橋を渡ると、公園があります。"
      },
      {
        japanese: "駐車場（ちゅうしゃじょう）",
        kana: "ちゅうしゃじょう",
        vietnamese: "bãi đỗ xe",
        type: "main",
        english: "Parking lot",
        example: "駐車場はどこですか。"
      },
      {
        japanese: "〜目（〜め）",
        kana: "〜め",
        vietnamese: "thứ ~ (số thứ tự)",
        type: "main",
        english: "~th (ordinal number suffix)",
        example: "二つ目の角を右に曲がります。"
      },
      {
        japanese: "建物（たてもの）",
        kana: "たてもの",
        vietnamese: "tòa nhà, công trình",
        type: "main",
        english: "Building",
        example: "あの白い建物が病院です。"
      },
      {
        japanese: "タワー",
        kana: "タワー",
        vietnamese: "tháp",
        type: "main",
        english: "Tower",
        example: "東京タワーに行きました。"
      },
      {
        japanese: "道（みち）",
        kana: "みち",
        vietnamese: "đường, con đường",
        type: "main",
        english: "Road, way",
        example: "この道をまっすぐ行ってください。"
      },
      {
        japanese: "方（ほう）",
        kana: "ほう",
        vietnamese: "phía, hướng",
        type: "main",
        english: "Direction, side",
        example: "駅の方へ歩きます。"
      },
      {
        japanese: "途中（とちゅう）",
        kana: "とちゅう",
        vietnamese: "giữa đường, dọc đường",
        type: "main",
        english: "On the way, midway",
        example: "会社へ行く途中で友達に会いました。"
      },
      {
        japanese: "左側（ひだりがわ）",
        kana: "ひだりがわ",
        vietnamese: "phía bên trái",
        type: "main",
        english: "Left side",
        example: "左側にコンビニがあります。"
      },
      {
        japanese: "右側（みぎがわ）",
        kana: "みぎがわ",
        vietnamese: "phía bên phải",
        type: "main",
        english: "Right side",
        example: "右側に銀行があります。"
      },
      {
        japanese: "反対（はんたい）",
        kana: "はんたい",
        vietnamese: "đối diện, ngược lại",
        type: "main",
        english: "Opposite, reverse",
        example: "反対側に渡ってください。"
      },
      {
        japanese: "両方（りょうほう）",
        kana: "りょうほう",
        vietnamese: "cả hai",
        type: "main",
        english: "Both",
        example: "両方とも好きです。"
      },
      {
        japanese: "ボタン",
        kana: "ボタン",
        vietnamese: "nút bấm",
        type: "main",
        english: "Button",
        example: "このボタンを押してください。"
      },
      {
        japanese: "機械（きかい）",
        kana: "きかい",
        vietnamese: "máy móc",
        type: "main",
        english: "Machine",
        example: "この機械の使い方を教えてください。"
      },
      {
        japanese: "お釣り（おつり）",
        kana: "おつり",
        vietnamese: "tiền thối lại",
        type: "main",
        english: "Change (money)",
        example: "お釣りを取ってください。"
      },
      {
        japanese: "音（おと）",
        kana: "おと",
        vietnamese: "âm thanh, tiếng động",
        type: "main",
        english: "Sound",
        example: "変な音がします。"
      },
      {
        japanese: "つまみ",
        kana: "つまみ",
        vietnamese: "núm vặn",
        type: "main",
        english: "Knob",
        example: "つまみを回してください。"
      },
      {
        japanese: "電気屋（でんきや）",
        kana: "でんきや",
        vietnamese: "cửa hàng đồ điện",
        type: "main",
        english: "Electronics shop",
        example: "電気屋で買いました。"
      },
      {
        japanese: "故障（こしょう）",
        kana: "こしょう",
        vietnamese: "hỏng hóc",
        type: "main",
        english: "Breakdown, malfunction",
        example: "エアコンが故障しました。"
      },
      {
        japanese: "〜屋（〜や）",
        kana: "〜や",
        vietnamese: "cửa hàng ~, tiệm ~",
        type: "main",
        english: "~ shop/store (suffix)",
        example: "本屋で本を買います。"
      },
      {
        japanese: "サイズ",
        kana: "サイズ",
        vietnamese: "kích cỡ",
        type: "main",
        english: "Size",
        example: "サイズが合いません。"
      },
      {
        japanese: "お正月（おしょうがつ）",
        kana: "おしょうがつ",
        vietnamese: "tết Nguyên Đán (Nhật)",
        type: "main",
        english: "New Year (Japanese)",
        example: "お正月に日本へ行きます。"
      },
      {
        japanese: "ごちそうさまでした",
        kana: "ごちそうさまでした",
        vietnamese: "cám ơn bữa ăn ngon (sau khi ăn)",
        type: "main",
        english: "Thank you for the meal",
        example: "ごちそうさまでした。"
      },
      {
        japanese: "外国人登録証（がいこくじんとうろくしょう）",
        kana: "がいこくじんとうろくしょう",
        vietnamese: "thẻ đăng ký người nước ngoài",
        type: "main",
        english: "Alien registration card",
        example: "外国人登録証を見せてください。"
      },
      {
        japanese: "〜とき",
        kana: "〜とき",
        vietnamese: "khi ~",
        type: "main",
        english: "When ~",
        example: "日本へ来たとき、びっくりしました。"
      },
      {
        japanese: "〜と",
        kana: "〜と",
        vietnamese: "nếu ~ thì, khi ~ thì",
        type: "main",
        english: "When ~, if ~ (natural consequence)",
        example: "このボタンを押すと、お釣りが出ます。"
      },
      {
        japanese: "まず",
        kana: "まず",
        vietnamese: "trước tiên, đầu tiên",
        type: "main",
        english: "First, first of all",
        example: "まず、お金を入れてください。"
      }
    ],
    grammar: [
      {
        pattern: "〜とき",
        vietnamese: "Khi ~, lúc ~",
        type: "main",
        english: "When ~",
        explanation: "Diễn tả thời điểm xảy ra sự việc. Động từ từ điển + とき (trước khi/trong khi), た-form + とき (sau khi). い形・な形・名詞thể thường + とき.",
        examples: [
          {
            japanese: "日本に　行く　とき、何を　持って　行きますか。",
            vietnamese: "Khi đi Nhật, bạn mang gì theo?",
            type: "main",
        english: "When you go to Japan, what will you take?"
          },
          {
            japanese: "暇な　とき、何を　しますか。",
            vietnamese: "Khi rảnh, bạn làm gì?",
            type: "main",
        english: "What do you do when you're free?"
          },
          {
            japanese: "子どもの　とき、よく　ここで　遊びました。",
            vietnamese: "Hồi còn nhỏ, tôi thường chơi ở đây.",
            type: "main",
        english: "When I was a child, I often played here."
          }
        ]
      },
      {
        pattern: "〜と",
        vietnamese: "Nếu ~ thì ~ (điều kiện tự nhiên)",
        type: "main",
        english: "If/When ~ (natural consequence)",
        explanation: "Diễn tả điều kiện tự nhiên, kết quả luôn xảy ra. Động từ thể thường + と. Dùng cho sự thật, quy luật, hướng dẫn.",
        examples: [
          {
            japanese: "春に　なると、花が　咲きます。",
            vietnamese: "Khi sang xuân, hoa nở.",
            type: "main",
        english: "When spring comes, flowers bloom."
          },
          {
            japanese: "この　ボタンを　押すと、ドアが　開きます。",
            vietnamese: "Nếu nhấn nút này, cửa sẽ mở.",
            type: "main",
        english: "If you press this button, the door opens."
          },
          {
            japanese: "右に　曲がると、銀行が　あります。",
            vietnamese: "Nếu rẽ phải, có ngân hàng.",
            type: "main",
        english: "If you turn right, there is a bank."
          }
        ]
      },
      {
        pattern: "〜前に / 〜後で",
        vietnamese: "Trước khi ~ / Sau khi ~",
        type: "main",
        english: "Before ~ / After ~",
        explanation: "Diễn tả thời điểm trước hoặc sau hành động. 前に: động từ từ điển + 前に. 後で: た-form + 後で. Danh từ + の前に/の後で.",
        examples: [
          {
            japanese: "寝る　前に、歯を　磨きます。",
            vietnamese: "Trước khi ngủ, tôi đánh răng.",
            type: "main",
        english: "Before going to bed, I brush my teeth."
          },
          {
            japanese: "ご飯を　食べた　後で、散歩します。",
            vietnamese: "Sau khi ăn cơm, tôi đi dạo.",
            type: "main",
        english: "After eating, I take a walk."
          },
          {
            japanese: "授業の　前に、予習します。",
            vietnamese: "Trước giờ học, tôi chuẩn bị bài.",
            type: "main",
        english: "Before class, I prepare the lesson."
          }
        ]
      },
      {
        pattern: "〜ながら",
        vietnamese: "Vừa ~ vừa ~ (đồng thời)",
        type: "main",
        english: "While ~, ~ at the same time",
        explanation: "Diễn tả hai hành động xảy ra đồng thời. Động từ ます-form bỏ ます + ながら. Hành động chính ở cuối câu.",
        examples: [
          {
            japanese: "音楽を　聞きながら、勉強します。",
            vietnamese: "Tôi vừa học vừa nghe nhạc.",
            type: "main",
        english: "I study while listening to music."
          },
          {
            japanese: "テレビを　見ながら、ご飯を　食べます。",
            vietnamese: "Tôi vừa ăn cơm vừa xem TV.",
            type: "main",
        english: "I eat while watching TV."
          },
          {
            japanese: "歩きながら、話しましょう。",
            vietnamese: "Hãy vừa đi vừa nói chuyện.",
            type: "main",
        english: "Let's talk while walking."
          }
        ]
      }
    ]
  };
