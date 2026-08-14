// Minna no Nihongo — Lesson 25: 〜たら (If ~ then)
import type { LessonData } from '$lib/types';

export const LESSON_25_DATA: LessonData = {
    lessonNumber: 25,
    title: "〜たら (If ~ then)",
    vocabulary: [
      {
        japanese: "考えます（かんがえます）",
        kana: "かんがえます",
        vietnamese: "suy nghĩ",
        type: "main",
        english: "To think, to consider",
        example: "もう少し考えます。"
      },
      {
        japanese: "着きます（つきます）",
        kana: "つきます",
        vietnamese: "đến nơi",
        type: "main",
        english: "To arrive",
        example: "駅に着いたら、電話してください。"
      },
      {
        japanese: "留学（りゅうがく）します",
        kana: "りゅうがくします",
        vietnamese: "du học",
        type: "main",
        english: "To study abroad",
        example: "来年アメリカへ留学します。"
      },
      {
        japanese: "取（と）ります",
        kana: "とります",
        vietnamese: "thêm (tuổi)",
        type: "main",
        english: "To add (age)",
        example: "来月30歳を取ります。"
      },
      {
        japanese: "間に合います（まにあいます）",
        kana: "まにあいます",
        vietnamese: "kịp giờ",
        type: "main",
        english: "To be in time",
        example: "急いだら、間に合います。"
      },
      {
        japanese: "開きます（あきます）",
        kana: "あきます",
        vietnamese: "mở (cửa tự mở)",
        type: "main",
        english: "To open (intransitive)",
        example: "9時になったら、店が開きます。"
      },
      {
        japanese: "入学します（にゅうがくします）",
        kana: "にゅうがくします",
        vietnamese: "nhập học",
        type: "main",
        english: "To enter school",
        example: "来年大学に入学します。"
      },
      {
        japanese: "卒業します（そつぎょうします）",
        kana: "そつぎょうします",
        vietnamese: "tốt nghiệp",
        type: "main",
        english: "To graduate",
        example: "大学を卒業したら、日本で働きたいです。"
      },
      {
        japanese: "就職します（しゅうしょくします）",
        kana: "しゅうしょくします",
        vietnamese: "xin việc, đi làm",
        type: "main",
        english: "To get a job",
        example: "卒業したら、就職します。"
      },
      {
        japanese: "引退します（いんたいします）",
        kana: "いんたいします",
        vietnamese: "nghỉ hưu, giải nghệ",
        type: "main",
        english: "To retire",
        example: "60歳になったら、引退します。"
      },
      {
        japanese: "今度（こんど）",
        kana: "こんど",
        vietnamese: "lần sau, lần tới",
        type: "main",
        english: "Next time",
        example: "今度、一緒に行きましょう。"
      },
      {
        japanese: "一生（いっしょう）",
        kana: "いっしょう",
        vietnamese: "cả đời, suốt đời",
        type: "main",
        english: "Whole life",
        example: "一生日本語を勉強したいです。"
      },
      {
        japanese: "いつか",
        kana: "いつか",
        vietnamese: "một ngày nào đó",
        type: "main",
        english: "Someday",
        example: "いつか日本に住みたいです。"
      },
      {
        japanese: "たぶん",
        kana: "たぶん",
        vietnamese: "có lẽ, chắc là",
        type: "main",
        english: "Probably, maybe",
        example: "たぶん大丈夫だと思います。"
      },
      {
        japanese: "きっと",
        kana: "きっと",
        vietnamese: "chắc chắn",
        type: "main",
        english: "Surely, certainly",
        example: "きっと合格できますよ。"
      },
      {
        japanese: "本当に（ほんとうに）",
        kana: "ほんとうに",
        vietnamese: "thực sự, thật sự",
        type: "main",
        english: "Really, truly",
        example: "本当にありがとうございます。"
      },
      {
        japanese: "もし",
        kana: "もし",
        vietnamese: "nếu (giả sử)",
        type: "main",
        english: "If",
        example: "もし時間があったら、来てください。"
      },
      {
        japanese: "いくら〜ても",
        kana: "いくら〜ても",
        vietnamese: "dù ~ bao nhiêu đi nữa",
        type: "main",
        english: "No matter how much ~",
        example: "いくら食べても太りません。"
      },
      {
        japanese: "田舎（いなか）",
        kana: "いなか",
        vietnamese: "vùng quê, nông thôn",
        type: "main",
        english: "Countryside, rural area",
        example: "田舎に住みたいです。"
      },
      {
        japanese: "大使館（たいしかん）",
        kana: "たいしかん",
        vietnamese: "đại sứ quán",
        type: "main",
        english: "Embassy",
        example: "大使館でビザを申請します。"
      },
      {
        japanese: "グループ",
        kana: "グループ",
        vietnamese: "nhóm",
        type: "main",
        english: "Group",
        example: "グループで勉強します。"
      },
      {
        japanese: "億（おく）",
        kana: "おく",
        vietnamese: "trăm triệu (100,000,000)",
        type: "main",
        english: "Hundred million",
        example: "一億円が欲しいです。"
      },
      {
        japanese: "転勤（てんきん）",
        kana: "てんきん",
        vietnamese: "chuyển công tác",
        type: "main",
        english: "Job transfer",
        example: "大阪へ転勤します。"
      },
      {
        japanese: "一杯（いっぱい）飲（の）みましょう",
        kana: "いっぱいのみましょう",
        vietnamese: "đi uống một chầu nào",
        type: "main",
        english: "Let's have a drink",
        example: "今晩一杯飲みましょう。"
      },
      {
        japanese: "どうぞお元気（げんき）で",
        kana: "どうぞおげんきで",
        vietnamese: "chúc anh/chị mạnh khỏe (lời chào tạm biệt)",
        type: "main",
        english: "Take care (farewell)",
        example: "どうぞお元気で。"
      },
      {
        japanese: "（いろいろ）お世話（せわ）になりました",
        kana: "（いろいろ）おせわになりました",
        vietnamese: "cảm ơn đã chăm sóc (nhiều)",
        type: "main",
        english: "Thank you for everything",
        example: "いろいろお世話になりました。"
      },
      {
        japanese: "頑張（がんば）ります",
        kana: "がんばります",
        vietnamese: "cố gắng",
        type: "main",
        english: "To do one's best, to try hard",
        example: "これからも頑張ります。"
      },
      {
        japanese: "〜たら",
        kana: "〜たら",
        vietnamese: "nếu ~ thì, khi ~ thì",
        type: "main",
        english: "If ~, when ~",
        example: "雨が降ったら、行きません。"
      },
      {
        japanese: "〜ても",
        kana: "〜ても",
        vietnamese: "dù ~ cũng, cho dù ~",
        type: "main",
        english: "Even if ~",
        example: "雨が降っても、行きます。"
      },
      {
        japanese: "〜なら",
        kana: "〜なら",
        vietnamese: "nếu (nói về ~) thì",
        type: "main",
        english: "If (talking about ~)",
        example: "日本料理なら、寿司が好きです。"
      },
      {
        japanese: "チャンス",
        kana: "チャンス",
        vietnamese: "cơ hội",
        type: "main",
        english: "Chance, opportunity",
        example: "いいチャンスがあったら、留学したいです。"
      },
      {
        japanese: "教育（きょういく）",
        kana: "きょういく",
        vietnamese: "giáo dục",
        type: "main",
        english: "Education",
        example: "教育は大切だと思います。"
      },
      {
        japanese: "環境（かんきょう）",
        kana: "かんきょう",
        vietnamese: "môi trường",
        type: "main",
        english: "Environment",
        example: "環境を守らなければなりません。"
      },
      {
        japanese: "場合（ばあい）",
        kana: "ばあい",
        vietnamese: "trường hợp",
        type: "main",
        english: "Case, situation",
        example: "雨の場合は中止です。"
      },
      {
        japanese: "経験（けいけん）",
        kana: "けいけん",
        vietnamese: "kinh nghiệm",
        type: "main",
        english: "Experience",
        example: "いい経験になりました。"
      },
      {
        japanese: "卒業式（そつぎょうしき）",
        kana: "そつぎょうしき",
        vietnamese: "lễ tốt nghiệp",
        type: "main",
        english: "Graduation ceremony",
        example: "卒業式に出席しました。"
      },
      {
        japanese: "結婚式（けっこんしき）",
        kana: "けっこんしき",
        vietnamese: "lễ cưới",
        type: "main",
        english: "Wedding ceremony",
        example: "来月友達の結婚式があります。"
      },
      // Supplementary Vocabulary (参考語彙) - Life Events
      {
        japanese: "入学式（にゅうがくしき）",
        kana: "にゅうがくしき",
        vietnamese: "lễ nhập học",
        english: "entrance ceremony",
        type: "supplementary",
        example: "4月に　入学式が　あります。"
      },
      {
        japanese: "入社（にゅうしゃ）",
        kana: "にゅうしゃ",
        vietnamese: "gia nhập công ty",
        english: "joining a company",
        type: "supplementary",
        example: "来月　入社します。"
      },
      {
        japanese: "結婚（けっこん）",
        kana: "けっこん",
        vietnamese: "kết hôn",
        english: "marriage",
        type: "supplementary",
        example: "いつか　結婚したいです。"
      },
      {
        japanese: "離婚（りこん）",
        kana: "りこん",
        vietnamese: "ly hôn",
        english: "divorce",
        type: "supplementary",
        example: ""
      },
      {
        japanese: "転職（てんしょく）",
        kana: "てんしょく",
        vietnamese: "chuyển việc",
        english: "job change",
        type: "supplementary",
        example: "転職したら、給料が　上がります。"
      },
      // Supplementary Vocabulary - Time/Future
      {
        japanese: "将来（しょうらい）",
        kana: "しょうらい",
        vietnamese: "tương lai",
        english: "future",
        type: "supplementary",
        example: "将来　何に　なりたいですか。"
      },
      {
        japanese: "未来（みらい）",
        kana: "みらい",
        vietnamese: "tương lai",
        english: "future",
        type: "supplementary",
        example: "未来の　ことを　考えます。"
      },
      {
        japanese: "過去（かこ）",
        kana: "かこ",
        vietnamese: "quá khứ",
        english: "past",
        type: "supplementary",
        example: "過去の　経験が　役に　立ちます。"
      },
      // Supplementary Vocabulary - Education
      {
        japanese: "大学院（だいがくいん）",
        kana: "だいがくいん",
        vietnamese: "cao học",
        english: "graduate school",
        type: "supplementary",
        example: "大学院に　進学したいです。"
      },
      {
        japanese: "留学（りゅうがく）",
        kana: "りゅうがく",
        vietnamese: "du học",
        english: "studying abroad",
        type: "supplementary",
        example: "来年　留学したいです。"
      },
      {
        japanese: "奨学金（しょうがくきん）",
        kana: "しょうがくきん",
        vietnamese: "học bổng",
        english: "scholarship",
        type: "supplementary",
        example: "奨学金が　もらえたら、留学できます。"
      },
      // Supplementary Vocabulary - Goals/Dreams
      {
        japanese: "目標（もくひょう）",
        kana: "もくひょう",
        vietnamese: "mục tiêu",
        english: "goal, objective",
        type: "supplementary",
        example: "目標を　達成したいです。"
      },
      {
        japanese: "夢（ゆめ）",
        kana: "ゆめ",
        vietnamese: "giấc mơ, ước mơ",
        english: "dream",
        type: "supplementary",
        example: "夢が　かなったら、嬉しいです。"
      },
      {
        japanese: "計画（けいかく）",
        kana: "けいかく",
        vietnamese: "kế hoạch",
        english: "plan",
        type: "supplementary",
        example: "しっかり　計画を　立てます。"
      }
    ],
    grammar: [
      {
        pattern: "〜たら",
        vietnamese: "Nếu ~ thì ~, khi ~ thì ~",
        type: "main",
        english: "If/When ~ (conditional)",
        explanation: "Diễn tả điều kiện giả định. た-form (động từ/い形/な形/danh từ) + ら. Dùng cho lời khuyên, đề nghị, điều kiện giả định. VD: 行く→行ったら.",
        examples: [
          {
            japanese: "春に　なったら、花見に　行きましょう。",
            vietnamese: "Khi sang xuân, hãy đi ngắm hoa.",
            type: "main",
        english: "When spring comes, let's go see cherry blossoms."
          },
          {
            japanese: "時間が　あったら、手伝って　ください。",
            vietnamese: "Nếu có thời gian, hãy giúp tôi.",
            type: "main",
        english: "If you have time, please help me."
          },
          {
            japanese: "雨が　降ったら、出かけません。",
            vietnamese: "Nếu trời mưa, tôi sẽ không ra ngoài.",
            type: "main",
        english: "If it rains, I won't go out."
          }
        ]
      },
      {
        pattern: "〜ても",
        vietnamese: "Dù ~, cho dù ~",
        type: "main",
        english: "Even if/though ~",
        explanation: "Diễn tả điều kiện đối lập. て-form + も. Dù điều kiện có xảy ra, kết quả vẫn không đổi. VD: 行く→行っても, 高い→高くても.",
        examples: [
          {
            japanese: "雨が　降っても、行きます。",
            vietnamese: "Dù trời mưa, tôi vẫn đi.",
            type: "main",
        english: "Even if it rains, I'll go."
          },
          {
            japanese: "高くても、買います。",
            vietnamese: "Dù đắt, tôi vẫn mua.",
            type: "main",
        english: "Even if it's expensive, I'll buy it."
          },
          {
            japanese: "忙しくても、電話してください。",
            vietnamese: "Dù bận, hãy gọi điện cho tôi.",
            type: "main",
        english: "Even if you're busy, please call me."
          }
        ]
      },
      {
        pattern: "〜たら、〜（発見）",
        vietnamese: "~ thì phát hiện ~, ~ thì ~",
        type: "main",
        english: "When ~ (discovered/found that ~)",
        explanation: "Diễn tả phát hiện bất ngờ sau khi làm gì. Hành động trước dùng たら, sau đó là phát hiện/kết quả bất ngờ.",
        examples: [
          {
            japanese: "家に　帰ったら、猫が　いました。",
            vietnamese: "Khi về nhà, có con mèo.",
            type: "main",
        english: "When I got home, there was a cat."
          },
          {
            japanese: "駅に　着いたら、雨が　降って　いました。",
            vietnamese: "Khi đến ga, trời đang mưa.",
            type: "main",
        english: "When I arrived at the station, it was raining."
          },
          {
            japanese: "窓を　開けたら、鳥が　飛んで　きました。",
            vietnamese: "Khi mở cửa sổ, có con chim bay vào.",
            type: "main",
        english: "When I opened the window, a bird flew in."
          }
        ]
      },
      {
        pattern: "〜でも",
        vietnamese: "Dù ~ (cho dù)",
        type: "main",
        english: "Even ~, no matter ~",
        explanation: "Nhấn mạnh 'bất kể cái gì'. Dùng với từ để hỏi + でも: 何でも (bất cứ gì), どこでも (bất cứ đâu), だれでも (bất cứ ai).",
        examples: [
          {
            japanese: "何でも　食べます。",
            vietnamese: "Tôi ăn bất cứ thứ gì.",
            type: "main",
        english: "I eat anything."
          },
          {
            japanese: "どこでも　行きます。",
            vietnamese: "Tôi đi bất cứ đâu.",
            type: "main",
        english: "I'll go anywhere."
          },
          {
            japanese: "だれでも　参加できます。",
            vietnamese: "Bất cứ ai cũng có thể tham gia.",
            type: "main",
        english: "Anyone can participate."
          }
        ]
      },
      {
        pattern: "〜ば（条件形）",
        vietnamese: "Nếu ~ (dạng điều kiện)",
        type: "main",
        english: "If ~ (conditional form)",
        explanation: "Dạng điều kiện khác của động từ (nâng cao). Động từ: 〜えば. い形: 〜ければ. な形・名詞: であれば. VD: 行く→行けば, 高い→高ければ.",
        examples: [
          {
            japanese: "時間が　あれば、手伝います。",
            vietnamese: "Nếu có thời gian, tôi sẽ giúp.",
            type: "main",
        english: "If I have time, I'll help."
          },
          {
            japanese: "安ければ、買います。",
            vietnamese: "Nếu rẻ, tôi sẽ mua.",
            type: "main",
        english: "If it's cheap, I'll buy it."
          },
          {
            japanese: "わからなければ、聞いてください。",
            vietnamese: "Nếu không hiểu, hãy hỏi.",
            type: "main",
        english: "If you don't understand, please ask."
          }
        ]
      }
    ]
  };
