/**
 * N3 Core Lessons — Lesson 08: Hearsay & Quotation
 * Focus: 伝聞・引用 — ～そうだ、～と言っていた、～ということだ、～って
 */

import type { LessonData } from '$lib/types';

export const LESSON_08_DATA: LessonData = {
  lessonNumber: 8,
  title: '伝聞・引用 (Hearsay and Quotation)',
  vocabulary: [
    // Communication and reporting verbs
    {
      japanese: '伝える',
      kana: 'つたえる',
      vietnamese: 'truyền đạt, chuyển lời',
      english: 'to convey, to tell',
      type: 'main',
      example: 'その件は部長に伝えておきます。'
    },
    {
      japanese: '伝わる',
      kana: 'つたわる',
      vietnamese: 'được truyền đạt, lan truyền',
      english: 'to be transmitted, to spread',
      type: 'main',
      example: '気持ちが伝わりました。'
    },
    {
      japanese: '報告する',
      kana: 'ほうこくする',
      vietnamese: 'báo cáo',
      english: 'to report',
      type: 'main',
      example: '結果を上司に報告しました。'
    },
    {
      japanese: '発表する',
      kana: 'はっぴょうする',
      vietnamese: 'phát biểu, công bố',
      english: 'to announce, to present',
      type: 'main',
      example: '新しい計画を発表しました。'
    },
    {
      japanese: '噂',
      kana: 'うわさ',
      vietnamese: 'tin đồn',
      english: 'rumor',
      type: 'main',
      example: '噂によると、来月店が閉まるそうだ。'
    },
    {
      japanese: '情報',
      kana: 'じょうほう',
      vietnamese: 'thông tin',
      english: 'information',
      type: 'main',
      example: '正確な情報を集めてください。'
    },
    {
      japanese: 'ニュース',
      kana: 'にゅーす',
      vietnamese: 'tin tức',
      english: 'news',
      type: 'main',
      example: 'ニュースによると、明日は雨だそうです。'
    },
    {
      japanese: '記事',
      kana: 'きじ',
      vietnamese: 'bài báo',
      english: 'article',
      type: 'main',
      example: 'この記事によると、経済は回復しているそうだ。'
    },
    {
      japanese: '放送',
      kana: 'ほうそう',
      vietnamese: 'phát sóng, phát thanh',
      english: 'broadcast',
      type: 'main',
      example: 'ラジオの放送で地震のことを聞きました。'
    },
    {
      japanese: '報道',
      kana: 'ほうどう',
      vietnamese: 'đưa tin, tin tức',
      english: 'news report',
      type: 'main',
      example: '報道によると、事故の原因は調査中だということだ。'
    },
    {
      japanese: '意見',
      kana: 'いけん',
      vietnamese: 'ý kiến',
      english: 'opinion',
      type: 'main',
      example: 'みんなの意見を聞きたいです。'
    },
    {
      japanese: '事実',
      kana: 'じじつ',
      vietnamese: 'sự thật',
      english: 'fact',
      type: 'main',
      example: '事実を正確に伝えてください。'
    },
    {
      japanese: '嘘',
      kana: 'うそ',
      vietnamese: 'lời nói dối',
      english: 'lie',
      type: 'main',
      example: 'あの人の話は嘘だと思います。'
    },
    {
      japanese: '本当',
      kana: 'ほんとう',
      vietnamese: 'sự thật, thật sự',
      english: 'truth, really',
      type: 'main',
      example: 'その話は本当だそうです。'
    },
    {
      japanese: '確か',
      kana: 'たしか',
      vietnamese: 'chắc chắn, nếu tôi nhớ không lầm',
      english: 'certain, if I remember correctly',
      type: 'main',
      example: '確か、彼は来月結婚すると言っていました。'
    },
    {
      japanese: '予想',
      kana: 'よそう',
      vietnamese: 'dự đoán',
      english: 'prediction, expectation',
      type: 'main',
      example: '天気予報の予想では、台風が来るそうだ。'
    },
    {
      japanese: '結論',
      kana: 'けつろん',
      vietnamese: 'kết luận',
      english: 'conclusion',
      type: 'main',
      example: '会議の結論はまだ出ていないということだ。'
    },
    {
      japanese: '説明',
      kana: 'せつめい',
      vietnamese: 'giải thích',
      english: 'explanation',
      type: 'main',
      example: '先生の説明によると、試験は来週だそうだ。'
    },
    {
      japanese: '発言',
      kana: 'はつげん',
      vietnamese: 'phát ngôn',
      english: 'statement, remark',
      type: 'main',
      example: '大統領の発言が話題になっている。'
    },
    {
      japanese: '話題',
      kana: 'わだい',
      vietnamese: 'chủ đề, đề tài',
      english: 'topic',
      type: 'main',
      example: 'あの映画が今話題になっているそうだ。'
    },
    // Additional verbs and expressions
    {
      japanese: '聞こえる',
      kana: 'きこえる',
      vietnamese: 'nghe thấy',
      english: 'to be audible, to hear',
      type: 'additional',
      example: '隣の部屋から声が聞こえます。'
    },
    {
      japanese: '述べる',
      kana: 'のべる',
      vietnamese: 'trình bày, phát biểu',
      english: 'to state, to express',
      type: 'additional',
      example: '自分の意見をはっきり述べてください。'
    },
    {
      japanese: '主張する',
      kana: 'しゅちょうする',
      vietnamese: 'chủ trương, khẳng định',
      english: 'to claim, to assert',
      type: 'additional',
      example: '彼は自分が正しいと主張している。'
    },
    {
      japanese: '否定する',
      kana: 'ひていする',
      vietnamese: 'phủ định',
      english: 'to deny',
      type: 'additional',
      example: '彼は噂を否定しました。'
    },
    {
      japanese: '認める',
      kana: 'みとめる',
      vietnamese: 'thừa nhận, công nhận',
      english: 'to admit, to recognize',
      type: 'additional',
      example: '自分の間違いを認めました。'
    },
    {
      japanese: '信じる',
      kana: 'しんじる',
      vietnamese: 'tin tưởng',
      english: 'to believe',
      type: 'additional',
      example: 'その話を信じますか。'
    },
    {
      japanese: '疑う',
      kana: 'うたがう',
      vietnamese: 'nghi ngờ',
      english: 'to doubt, to suspect',
      type: 'additional',
      example: '彼の言葉を疑いました。'
    },
    {
      japanese: '批判する',
      kana: 'ひはんする',
      vietnamese: 'phê phán, chỉ trích',
      english: 'to criticize',
      type: 'additional',
      example: 'メディアが政府を批判している。'
    },
    {
      japanese: '確認する',
      kana: 'かくにんする',
      vietnamese: 'xác nhận',
      english: 'to confirm',
      type: 'additional',
      example: '本当かどうか確認してください。'
    },
    {
      japanese: '予報',
      kana: 'よほう',
      vietnamese: 'dự báo',
      english: 'forecast',
      type: 'additional',
      example: '天気予報によると、明日は晴れるそうです。'
    },
    {
      japanese: '世論',
      kana: 'せろん',
      vietnamese: 'dư luận',
      english: 'public opinion',
      type: 'additional',
      example: '世論調査の結果が発表されました。'
    }
  ],
  grammar: [
    {
      pattern: '〜そうだ (伝聞)',
      vietnamese: 'nghe nói ~, theo như ~',
      english: 'I heard that ~, it is said that ~',
      type: 'main',
      explanation: 'Biểu thị thông tin nghe được từ người khác hoặc qua phương tiện truyền thông. Cấu tạo: động từ thể thường + そうだ, い形容詞 + そうだ, な形容詞 + だそうだ, danh từ + だそうだ. Khác với そうだ (dạng mạo) diễn tả vẻ ngoài.',
      examples: [
        {
          japanese: '天気予報によると、明日は雨が降るそうです。',
          vietnamese: 'Theo dự báo thời tiết, nghe nói ngày mai sẽ mưa.',
          english: 'According to the weather forecast, it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: 'あの映画はとてもおもしろいそうです。',
          vietnamese: 'Nghe nói bộ phim đó rất hay.',
          english: 'I heard that movie is very interesting.',
          type: 'main'
        },
        {
          japanese: '田中さんは来月結婚するそうです。',
          vietnamese: 'Nghe nói anh Tanaka tháng sau sẽ kết hôn.',
          english: 'I heard that Mr. Tanaka will get married next month.',
          type: 'main'
        },
        {
          japanese: '新しいレストランは値段が高いそうだ。',
          vietnamese: 'Nghe nói nhà hàng mới đắt lắm.',
          english: 'I heard the new restaurant is expensive.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜と言っていた',
      vietnamese: '~ đã nói rằng',
      english: '~ said that',
      type: 'main',
      explanation: 'Dùng để truyền đạt lại lời nói của người khác (trích dẫn gián tiếp). Cấu tạo: câu trích dẫn + と言っていた/と言っていました. Dùng 言っていた (quá khứ tiếp diễn) khi truyền lại lời ai đó đã nói trước đó.',
      examples: [
        {
          japanese: '山田さんは今日来られないと言っていました。',
          vietnamese: 'Anh Yamada nói rằng hôm nay không đến được.',
          english: 'Mr. Yamada said he can\'t come today.',
          type: 'main'
        },
        {
          japanese: '先生は試験が難しいと言っていた。',
          vietnamese: 'Thầy nói rằng bài thi khó.',
          english: 'The teacher said the exam is difficult.',
          type: 'main'
        },
        {
          japanese: '母は早く帰ってきてと言っていました。',
          vietnamese: 'Mẹ nói hãy về sớm.',
          english: 'My mother said to come home early.',
          type: 'main'
        },
        {
          japanese: '彼女は日本語がもっと上手になりたいと言っていた。',
          vietnamese: 'Cô ấy nói muốn giỏi tiếng Nhật hơn.',
          english: 'She said she wants to become better at Japanese.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ということだ',
      vietnamese: 'nghĩa là ~, nghe nói rằng ~',
      english: 'it means that ~, I understand that ~',
      type: 'main',
      explanation: 'Có hai nghĩa: (1) giải thích ý nghĩa/nội dung; (2) truyền đạt thông tin nghe được (trang trọng hơn そうだ). Cấu tạo: câu thể thường + ということだ.',
      examples: [
        {
          japanese: '来月から値上げするということだ。',
          vietnamese: 'Nghe nói từ tháng sau sẽ tăng giá.',
          english: 'It is said that prices will go up from next month.',
          type: 'main'
        },
        {
          japanese: '彼が辞めたということは、人手が足りなくなるということだ。',
          vietnamese: 'Việc anh ấy nghỉ nghĩa là sẽ thiếu nhân lực.',
          english: 'The fact that he quit means we\'ll be short-staffed.',
          type: 'main'
        },
        {
          japanese: '新聞によると、空港が新しくなるということです。',
          vietnamese: 'Theo báo chí, nghe nói sân bay sẽ được xây mới.',
          english: 'According to the newspaper, the airport will be renovated.',
          type: 'main'
        },
        {
          japanese: 'つまり、全員参加しなければならないということですか。',
          vietnamese: 'Tức là tất cả mọi người phải tham gia sao?',
          english: 'In other words, everyone must participate?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜って',
      vietnamese: '~ (trích dẫn thân mật)',
      english: '~ (casual quotation)',
      type: 'main',
      explanation: 'Dạng nói thân mật của と/という. Dùng trong hội thoại hàng ngày để truyền đạt lời người khác hoặc giải thích. Cấu tạo: câu + って. Có thể thay cho ～と言っていた, ～そうだ, ～ということだ trong lời nói thân mật.',
      examples: [
        {
          japanese: '田中さん、明日来ないって。',
          vietnamese: 'Anh Tanaka nói ngày mai không đến.',
          english: 'Tanaka said he\'s not coming tomorrow.',
          type: 'main'
        },
        {
          japanese: 'あの店、おいしいって聞いたよ。',
          vietnamese: 'Nghe nói quán đó ngon lắm.',
          english: 'I heard that restaurant is good.',
          type: 'main'
        },
        {
          japanese: '「侍」って何ですか。',
          vietnamese: '\"Samurai\" nghĩa là gì?',
          english: 'What does "samurai" mean?',
          type: 'main'
        },
        {
          japanese: 'パーティー、楽しかったって？',
          vietnamese: 'Nghe nói bữa tiệc vui lắm hả?',
          english: 'I heard the party was fun?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜によると / 〜の話では',
      vietnamese: 'theo ~, theo lời ~',
      english: 'according to ~',
      type: 'additional',
      explanation: 'Dùng để nêu nguồn thông tin khi truyền đạt. ～によると thường đi với ～そうだ/～ということだ ở cuối câu. ～の話では (theo lời kể của ~) dùng trong hội thoại thân mật hơn.',
      examples: [
        {
          japanese: '友達の話では、あのレストランはとてもおいしいそうだ。',
          vietnamese: 'Theo lời bạn tôi, nhà hàng đó ngon lắm.',
          english: 'According to my friend, that restaurant is very delicious.',
          type: 'main'
        },
        {
          japanese: 'ニュースによると、来週から電車の料金が上がるそうです。',
          vietnamese: 'Theo tin tức, từ tuần sau giá vé tàu sẽ tăng.',
          english: 'According to the news, train fares will increase from next week.',
          type: 'main'
        },
        {
          japanese: '調査によると、若者の読書量が減っているということだ。',
          vietnamese: 'Theo khảo sát, lượng đọc sách của giới trẻ đang giảm.',
          english: 'According to research, young people are reading less.',
          type: 'additional'
        }
      ]
    }
  ]
};
