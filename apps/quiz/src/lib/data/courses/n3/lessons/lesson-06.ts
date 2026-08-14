/**
 * N3 Core Lessons — Lesson 06: Giving & Receiving Expressions
 * Focus: 授受表現 — ～てあげる、～てもらう、～てくれる、～ていただく
 */

import type { LessonData } from '$lib/types';

export const LESSON_06_DATA: LessonData = {
  lessonNumber: 6,
  title: '授受表現 (Giving and Receiving)',
  vocabulary: [
    // Verbs related to giving and receiving
    {
      japanese: 'あげる',
      kana: 'あげる',
      vietnamese: 'cho, tặng (người ngang/dưới)',
      english: 'to give (to someone equal/lower)',
      type: 'main',
      example: '友達に本をあげました。'
    },
    {
      japanese: 'もらう',
      kana: 'もらう',
      vietnamese: 'nhận được',
      english: 'to receive',
      type: 'main',
      example: '母からプレゼントをもらいました。'
    },
    {
      japanese: 'くれる',
      kana: 'くれる',
      vietnamese: 'cho (tôi/gia đình tôi)',
      english: 'to give (to me/my group)',
      type: 'main',
      example: '先生が辞書をくれました。'
    },
    {
      japanese: '差し上げる',
      kana: 'さしあげる',
      vietnamese: 'dâng, biếu (kính ngữ của あげる)',
      english: 'to give (humble, to someone higher)',
      type: 'main',
      example: '先生にお土産を差し上げました。'
    },
    {
      japanese: 'いただく',
      kana: 'いただく',
      vietnamese: 'nhận được (khiêm nhường)',
      english: 'to receive (humble)',
      type: 'main',
      example: '社長からお菓子をいただきました。'
    },
    {
      japanese: 'くださる',
      kana: 'くださる',
      vietnamese: 'cho (kính ngữ của くれる)',
      english: 'to give (honorific, to me)',
      type: 'main',
      example: '先生が推薦状をくださいました。'
    },
    {
      japanese: '贈る',
      kana: 'おくる',
      vietnamese: 'tặng (trang trọng)',
      english: 'to present, to give as a gift',
      type: 'main',
      example: '卒業祝いに花を贈りました。'
    },
    {
      japanese: '届ける',
      kana: 'とどける',
      vietnamese: 'giao, chuyển đến',
      english: 'to deliver',
      type: 'main',
      example: '荷物を届けてあげます。'
    },
    {
      japanese: '届く',
      kana: 'とどく',
      vietnamese: 'đến nơi, được giao',
      english: 'to arrive, to be delivered',
      type: 'main',
      example: 'プレゼントが届きました。'
    },
    {
      japanese: '頼む',
      kana: 'たのむ',
      vietnamese: 'nhờ, yêu cầu',
      english: 'to ask, to request',
      type: 'main',
      example: '友達に引っ越しを手伝ってもらうよう頼みました。'
    },
    {
      japanese: '世話する',
      kana: 'せわする',
      vietnamese: 'chăm sóc',
      english: 'to take care of',
      type: 'main',
      example: '隣の人がペットの世話をしてくれました。'
    },
    {
      japanese: '助ける',
      kana: 'たすける',
      vietnamese: 'giúp đỡ, cứu giúp',
      english: 'to help, to rescue',
      type: 'main',
      example: '困っている人を助けてあげました。'
    },
    {
      japanese: '手伝う',
      kana: 'てつだう',
      vietnamese: 'giúp đỡ (công việc)',
      english: 'to help with',
      type: 'main',
      example: '母が料理を手伝ってくれました。'
    },
    {
      japanese: '感謝する',
      kana: 'かんしゃする',
      vietnamese: 'biết ơn, cảm ơn',
      english: 'to be grateful, to appreciate',
      type: 'main',
      example: '助けてもらったことに感謝しています。'
    },
    {
      japanese: 'お礼',
      kana: 'おれい',
      vietnamese: 'lời cảm ơn, quà cảm ơn',
      english: 'thanks, gratitude gift',
      type: 'main',
      example: 'お礼の手紙を書きました。'
    },
    // Nouns related to gifts and social relationships
    {
      japanese: '贈り物',
      kana: 'おくりもの',
      vietnamese: 'quà tặng',
      english: 'gift, present',
      type: 'main',
      example: '素敵な贈り物をいただきました。'
    },
    {
      japanese: 'お土産',
      kana: 'おみやげ',
      vietnamese: 'quà lưu niệm',
      english: 'souvenir',
      type: 'main',
      example: '旅行のお土産を買ってきてくれました。'
    },
    {
      japanese: 'お祝い',
      kana: 'おいわい',
      vietnamese: 'lời chúc mừng, quà mừng',
      english: 'celebration, congratulatory gift',
      type: 'main',
      example: '結婚のお祝いをあげました。'
    },
    {
      japanese: 'お見舞い',
      kana: 'おみまい',
      vietnamese: 'thăm bệnh',
      english: 'visit to a sick person',
      type: 'main',
      example: '入院した友達のお見舞いに行きました。'
    },
    {
      japanese: 'お返し',
      kana: 'おかえし',
      vietnamese: 'quà đáp lễ',
      english: 'return gift',
      type: 'main',
      example: 'お返しを送らなければなりません。'
    },
    {
      japanese: '恩',
      kana: 'おん',
      vietnamese: 'ân, ơn',
      english: 'favor, debt of gratitude',
      type: 'main',
      example: '先生の恩を忘れません。'
    },
    {
      japanese: '親切',
      kana: 'しんせつ',
      vietnamese: 'tốt bụng, thân thiện',
      english: 'kind, kindness',
      type: 'main',
      example: '親切にしてもらって嬉しいです。'
    },
    {
      japanese: '迷惑',
      kana: 'めいわく',
      vietnamese: 'phiền hà, phiền toái',
      english: 'trouble, nuisance',
      type: 'main',
      example: '迷惑をかけて申し訳ありません。'
    },
    {
      japanese: '気持ち',
      kana: 'きもち',
      vietnamese: 'tâm trạng, tấm lòng',
      english: 'feeling, sentiment',
      type: 'main',
      example: '気持ちだけでうれしいです。'
    },
    {
      japanese: '遠慮する',
      kana: 'えんりょする',
      vietnamese: 'ngại, kiêng nể',
      english: 'to refrain, to hold back',
      type: 'main',
      example: '遠慮しないでたくさん食べてください。'
    },
    // Additional vocabulary
    {
      japanese: '包む',
      kana: 'つつむ',
      vietnamese: 'gói, bọc',
      english: 'to wrap',
      type: 'additional',
      example: 'プレゼントをきれいに包んでもらいました。'
    },
    {
      japanese: '受け取る',
      kana: 'うけとる',
      vietnamese: 'nhận lấy',
      english: 'to receive, to accept',
      type: 'additional',
      example: '荷物を受け取りました。'
    },
    {
      japanese: '喜ぶ',
      kana: 'よろこぶ',
      vietnamese: 'vui mừng',
      english: 'to be pleased',
      type: 'additional',
      example: 'プレゼントをもらって喜びました。'
    },
    {
      japanese: '恵まれる',
      kana: 'めぐまれる',
      vietnamese: 'được ban cho, may mắn có',
      english: 'to be blessed with',
      type: 'additional',
      example: 'いい友達に恵まれています。'
    },
    {
      japanese: '甘える',
      kana: 'あまえる',
      vietnamese: 'nhờ vả, dựa dẫm',
      english: 'to depend on, to take advantage of kindness',
      type: 'additional',
      example: 'お言葉に甘えて、いただきます。'
    },
    {
      japanese: '借りる',
      kana: 'かりる',
      vietnamese: 'mượn',
      english: 'to borrow',
      type: 'additional',
      example: '友達に傘を借りました。'
    },
    {
      japanese: '貸す',
      kana: 'かす',
      vietnamese: 'cho mượn',
      english: 'to lend',
      type: 'additional',
      example: 'ノートを貸してあげました。'
    },
    {
      japanese: '返す',
      kana: 'かえす',
      vietnamese: 'trả lại',
      english: 'to return',
      type: 'additional',
      example: '借りた本を返してください。'
    },
    {
      japanese: '招待する',
      kana: 'しょうたいする',
      vietnamese: 'mời',
      english: 'to invite',
      type: 'additional',
      example: 'パーティーに招待してもらいました。'
    },
    {
      japanese: 'ご馳走する',
      kana: 'ごちそうする',
      vietnamese: 'chiêu đãi, mời ăn',
      english: 'to treat someone to a meal',
      type: 'additional',
      example: '先輩がご馳走してくれました。'
    }
  ],
  grammar: [
    {
      pattern: '〜てあげる',
      vietnamese: 'làm ~ cho ai đó',
      english: 'to do ~ for someone',
      type: 'main',
      explanation: 'Biểu thị hành động làm gì đó vì lợi ích của người khác. Chủ ngữ là người thực hiện hành động. Lưu ý: dùng cho người ngang hàng hoặc thấp hơn, không nên dùng trực tiếp với người trên vì có thể bị coi là thiếu lịch sự.',
      examples: [
        {
          japanese: '友達に日本語を教えてあげました。',
          vietnamese: 'Tôi đã dạy tiếng Nhật cho bạn.',
          english: 'I taught Japanese to my friend (as a favor).',
          type: 'main'
        },
        {
          japanese: '弟の宿題を手伝ってあげました。',
          vietnamese: 'Tôi đã giúp em trai làm bài tập.',
          english: 'I helped my younger brother with his homework.',
          type: 'main'
        },
        {
          japanese: '道がわからない人に駅まで案内してあげました。',
          vietnamese: 'Tôi đã dẫn đường đến ga cho người bị lạc.',
          english: 'I guided a lost person to the station.',
          type: 'main'
        },
        {
          japanese: '重い荷物を持ってあげましょうか。',
          vietnamese: 'Để tôi mang hành lý nặng cho bạn nhé?',
          english: 'Shall I carry the heavy luggage for you?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てもらう',
      vietnamese: 'được ai đó làm ~ cho mình',
      english: 'to have someone do ~ for me',
      type: 'main',
      explanation: 'Biểu thị việc nhận được hành động từ người khác. Chủ ngữ là người được hưởng lợi. Người thực hiện hành động đánh dấu bằng に. Thường ngụ ý rằng mình đã nhờ hoặc mong muốn hành động đó xảy ra.',
      examples: [
        {
          japanese: '友達に写真を撮ってもらいました。',
          vietnamese: 'Tôi đã nhờ bạn chụp ảnh cho.',
          english: 'I had my friend take a photo for me.',
          type: 'main'
        },
        {
          japanese: '先生に作文を直してもらいました。',
          vietnamese: 'Tôi đã nhờ thầy sửa bài văn.',
          english: 'I had the teacher correct my essay.',
          type: 'main'
        },
        {
          japanese: '母に空港まで送ってもらいました。',
          vietnamese: 'Tôi đã nhờ mẹ đưa đến sân bay.',
          english: 'I had my mother take me to the airport.',
          type: 'main'
        },
        {
          japanese: '誰かに翻訳してもらいたいです。',
          vietnamese: 'Tôi muốn nhờ ai đó dịch hộ.',
          english: 'I want someone to translate it for me.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てくれる',
      vietnamese: 'ai đó làm ~ cho tôi',
      english: 'someone does ~ for me',
      type: 'main',
      explanation: 'Biểu thị hành động người khác làm cho tôi (hoặc nhóm của tôi) với sự biết ơn. Chủ ngữ là người thực hiện hành động. Ngụ ý lòng biết ơn của người nói. Khác với てもらう, người nói không nhất thiết phải nhờ.',
      examples: [
        {
          japanese: '友達が引っ越しを手伝ってくれました。',
          vietnamese: 'Bạn tôi đã giúp tôi chuyển nhà.',
          english: 'My friend helped me move (and I\'m grateful).',
          type: 'main'
        },
        {
          japanese: '彼女が誕生日にケーキを作ってくれました。',
          vietnamese: 'Bạn gái đã làm bánh sinh nhật cho tôi.',
          english: 'My girlfriend made a cake for my birthday.',
          type: 'main'
        },
        {
          japanese: '先輩が仕事のやり方を教えてくれました。',
          vietnamese: 'Đàn anh đã dạy tôi cách làm việc.',
          english: 'My senior taught me how to do the work.',
          type: 'main'
        },
        {
          japanese: '雨の日に、知らない人が傘を貸してくれました。',
          vietnamese: 'Ngày mưa, người lạ đã cho tôi mượn ô.',
          english: 'On a rainy day, a stranger lent me an umbrella.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ていただく',
      vietnamese: 'được ai đó (bề trên) làm ~ cho mình (khiêm nhường)',
      english: 'to have someone (superior) do ~ for me (humble)',
      type: 'main',
      explanation: 'Dạng khiêm nhường của ～てもらう, dùng khi nói về hành động nhận từ người bề trên (thầy giáo, sếp, khách hàng...). Thể hiện sự kính trọng với người thực hiện hành động.',
      examples: [
        {
          japanese: '先生に推薦状を書いていただきました。',
          vietnamese: 'Tôi đã được thầy viết thư giới thiệu.',
          english: 'I had the teacher write a recommendation letter for me.',
          type: 'main'
        },
        {
          japanese: '社長にアドバイスをいただきました。',
          vietnamese: 'Tôi đã được giám đốc cho lời khuyên.',
          english: 'I received advice from the president.',
          type: 'main'
        },
        {
          japanese: 'お客様に少々お待ちいただけますか。',
          vietnamese: 'Quý khách có thể đợi một chút không ạ?',
          english: 'Could you please wait a moment?',
          type: 'main'
        },
        {
          japanese: '部長に報告書を確認していただきました。',
          vietnamese: 'Tôi đã nhờ trưởng phòng kiểm tra báo cáo.',
          english: 'I had the department head check the report.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てくださる',
      vietnamese: 'ai đó (bề trên) làm ~ cho tôi (kính ngữ)',
      english: 'someone (superior) does ~ for me (honorific)',
      type: 'additional',
      explanation: 'Dạng kính ngữ của ～てくれる, dùng khi người thực hiện hành động là bề trên. Thể hiện sự kính trọng và biết ơn đối với người hành động.',
      examples: [
        {
          japanese: '先生が丁寧に説明してくださいました。',
          vietnamese: 'Thầy đã giải thích tỉ mỉ cho tôi.',
          english: 'The teacher kindly explained it in detail.',
          type: 'main'
        },
        {
          japanese: '部長が空港まで迎えに来てくださいました。',
          vietnamese: 'Trưởng phòng đã đến sân bay đón tôi.',
          english: 'The department head came to pick me up at the airport.',
          type: 'main'
        }
      ]
    }
  ]
};
