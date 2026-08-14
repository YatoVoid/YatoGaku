/**
 * N3 Core Lessons — Lesson 09: Reasons & Causes
 * Focus: 理由・原因 — ～ため(に)、～おかげで、～せいで、～のに
 */

import type { LessonData } from '$lib/types';

export const LESSON_09_DATA: LessonData = {
  lessonNumber: 9,
  title: '理由・原因 (Reasons and Causes)',
  vocabulary: [
    // Nouns about problems and causes
    {
      japanese: '原因',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause',
      type: 'main',
      example: '事故の原因を調べています。'
    },
    {
      japanese: '理由',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'main',
      example: '遅刻した理由を教えてください。'
    },
    {
      japanese: '結果',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result',
      type: 'main',
      example: '努力した結果、合格しました。'
    },
    {
      japanese: '影響',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence, effect',
      type: 'main',
      example: '台風の影響で電車が止まりました。'
    },
    {
      japanese: '事故',
      kana: 'じこ',
      vietnamese: 'tai nạn',
      english: 'accident',
      type: 'main',
      example: '交通事故のため、道が混んでいます。'
    },
    {
      japanese: '問題',
      kana: 'もんだい',
      vietnamese: 'vấn đề',
      english: 'problem',
      type: 'main',
      example: '環境問題が深刻になっています。'
    },
    {
      japanese: '失敗',
      kana: 'しっぱい',
      vietnamese: 'thất bại',
      english: 'failure',
      type: 'main',
      example: '準備不足のせいで失敗しました。'
    },
    {
      japanese: '成功',
      kana: 'せいこう',
      vietnamese: 'thành công',
      english: 'success',
      type: 'main',
      example: 'みんなのおかげで成功しました。'
    },
    {
      japanese: '努力',
      kana: 'どりょく',
      vietnamese: 'nỗ lực',
      english: 'effort',
      type: 'main',
      example: '努力したおかげで試験に受かりました。'
    },
    {
      japanese: '不注意',
      kana: 'ふちゅうい',
      vietnamese: 'bất cẩn',
      english: 'carelessness',
      type: 'main',
      example: '不注意のせいでけがをしました。'
    },
    {
      japanese: '不足',
      kana: 'ふそく',
      vietnamese: 'thiếu hụt',
      english: 'shortage, lack',
      type: 'main',
      example: '睡眠不足のため、集中できません。'
    },
    {
      japanese: '被害',
      kana: 'ひがい',
      vietnamese: 'thiệt hại',
      english: 'damage',
      type: 'main',
      example: '地震で大きな被害が出ました。'
    },
    {
      japanese: '回復',
      kana: 'かいふく',
      vietnamese: 'hồi phục',
      english: 'recovery',
      type: 'main',
      example: '薬のおかげで体調が回復しました。'
    },
    {
      japanese: '言い訳',
      kana: 'いいわけ',
      vietnamese: 'lời bào chữa, lý do',
      english: 'excuse',
      type: 'main',
      example: '言い訳をしないでください。'
    },
    {
      japanese: '責任',
      kana: 'せきにん',
      vietnamese: 'trách nhiệm',
      english: 'responsibility',
      type: 'main',
      example: 'これは私の責任です。'
    },
    // Verbs related to causes and results
    {
      japanese: '起こる',
      kana: 'おこる',
      vietnamese: 'xảy ra',
      english: 'to occur, to happen',
      type: 'main',
      example: '地震が起こったため、電車が止まった。'
    },
    {
      japanese: '起こす',
      kana: 'おこす',
      vietnamese: 'gây ra',
      english: 'to cause',
      type: 'main',
      example: '不注意で事故を起こしました。'
    },
    {
      japanese: '悩む',
      kana: 'なやむ',
      vietnamese: 'lo lắng, băn khoăn',
      english: 'to worry, to be troubled',
      type: 'main',
      example: '将来のことで悩んでいます。'
    },
    {
      japanese: '諦める',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ',
      english: 'to give up',
      type: 'main',
      example: '雨のせいで試合を諦めました。'
    },
    {
      japanese: '我慢する',
      kana: 'がまんする',
      vietnamese: 'nhẫn nại, chịu đựng',
      english: 'to endure, to put up with',
      type: 'main',
      example: 'うるさいのに我慢しました。'
    },
    {
      japanese: '反省する',
      kana: 'はんせいする',
      vietnamese: 'hối hận, tự kiểm điểm',
      english: 'to reflect, to regret',
      type: 'main',
      example: '失敗した原因を反省しています。'
    },
    {
      japanese: '後悔する',
      kana: 'こうかいする',
      vietnamese: 'hối hận',
      english: 'to regret',
      type: 'main',
      example: '勉強しなかったことを後悔しています。'
    },
    {
      japanese: '解決する',
      kana: 'かいけつする',
      vietnamese: 'giải quyết',
      english: 'to solve',
      type: 'main',
      example: 'みんなのおかげで問題が解決しました。'
    },
    {
      japanese: '困る',
      kana: 'こまる',
      vietnamese: 'gặp khó khăn, phiền',
      english: 'to be troubled',
      type: 'main',
      example: '電車が止まったせいで困りました。'
    },
    {
      japanese: '助かる',
      kana: 'たすかる',
      vietnamese: 'được giúp, cảm ơn',
      english: 'to be saved, to be helped',
      type: 'main',
      example: '手伝ってくれたおかげで助かりました。'
    },
    // Additional vocabulary
    {
      japanese: '原因不明',
      kana: 'げんいんふめい',
      vietnamese: 'không rõ nguyên nhân',
      english: 'cause unknown',
      type: 'additional',
      example: '原因不明の病気にかかりました。'
    },
    {
      japanese: '自然災害',
      kana: 'しぜんさいがい',
      vietnamese: 'thiên tai',
      english: 'natural disaster',
      type: 'additional',
      example: '自然災害のため、多くの家が壊れた。'
    },
    {
      japanese: '渋滞',
      kana: 'じゅうたい',
      vietnamese: 'tắc đường',
      english: 'traffic jam',
      type: 'additional',
      example: '渋滞のせいで遅刻しました。'
    },
    {
      japanese: '停電',
      kana: 'ていでん',
      vietnamese: 'mất điện',
      english: 'power outage',
      type: 'additional',
      example: '台風のせいで停電になりました。'
    },
    {
      japanese: '景気',
      kana: 'けいき',
      vietnamese: 'tình hình kinh tế',
      english: 'economic conditions',
      type: 'additional',
      example: '景気が悪いため、就職が難しいです。'
    },
    {
      japanese: '誤解',
      kana: 'ごかい',
      vietnamese: 'hiểu lầm',
      english: 'misunderstanding',
      type: 'additional',
      example: '説明不足のせいで誤解されました。'
    },
    {
      japanese: '改善する',
      kana: 'かいぜんする',
      vietnamese: 'cải thiện',
      english: 'to improve',
      type: 'additional',
      example: '努力のおかげで成績が改善しました。'
    },
    {
      japanese: '悪化する',
      kana: 'あっかする',
      vietnamese: 'xấu đi, trầm trọng hơn',
      english: 'to worsen',
      type: 'additional',
      example: '治療しなかったせいで病気が悪化した。'
    },
    {
      japanese: 'がっかりする',
      kana: 'がっかりする',
      vietnamese: 'thất vọng',
      english: 'to be disappointed',
      type: 'additional',
      example: '結果を聞いてがっかりしました。'
    }
  ],
  grammar: [
    {
      pattern: '〜ため(に)',
      vietnamese: 'vì ~, do ~ (nguyên nhân/mục đích)',
      english: 'because of ~, for the purpose of ~',
      type: 'main',
      explanation: 'Biểu thị nguyên nhân hoặc mục đích. (1) Nguyên nhân: câu thể thường + ため(に). (2) Mục đích: động từ る形 + ために / danh từ + のために. Dạng trang trọng, thường dùng trong văn viết, báo cáo, thông báo.',
      examples: [
        {
          japanese: '台風のため、飛行機が欠航になりました。',
          vietnamese: 'Do bão, máy bay bị hủy chuyến.',
          english: 'Due to the typhoon, the flights were cancelled.',
          type: 'main'
        },
        {
          japanese: '日本語を勉強するために、日本に来ました。',
          vietnamese: 'Tôi đến Nhật để học tiếng Nhật.',
          english: 'I came to Japan to study Japanese.',
          type: 'main'
        },
        {
          japanese: '工事のため、この道は通れません。',
          vietnamese: 'Do công trình, con đường này không đi được.',
          english: 'Due to construction, this road is closed.',
          type: 'main'
        },
        {
          japanese: '体調が悪かったため、会議に出られませんでした。',
          vietnamese: 'Vì tình trạng sức khỏe không tốt nên tôi không thể dự họp.',
          english: 'Because I was feeling unwell, I couldn\'t attend the meeting.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜おかげで',
      vietnamese: 'nhờ ~ mà (kết quả tích cực)',
      english: 'thanks to ~ (positive result)',
      type: 'main',
      explanation: 'Biểu thị nguyên nhân dẫn đến kết quả tốt, thể hiện lòng biết ơn. Cấu tạo: câu thể thường + おかげで / danh từ + のおかげで / な形容詞 + なおかげで. Đôi khi dùng mỉa mai để chỉ kết quả xấu.',
      examples: [
        {
          japanese: '先生のおかげで、日本語が上手になりました。',
          vietnamese: 'Nhờ có thầy mà tiếng Nhật của tôi giỏi hơn.',
          english: 'Thanks to my teacher, my Japanese has improved.',
          type: 'main'
        },
        {
          japanese: '薬を飲んだおかげで、熱が下がりました。',
          vietnamese: 'Nhờ uống thuốc mà hết sốt.',
          english: 'Thanks to taking medicine, my fever went down.',
          type: 'main'
        },
        {
          japanese: 'みんなが手伝ってくれたおかげで、間に合いました。',
          vietnamese: 'Nhờ mọi người giúp mà kịp giờ.',
          english: 'Thanks to everyone\'s help, we made it in time.',
          type: 'main'
        },
        {
          japanese: '天気が良かったおかげで、ピクニックを楽しめました。',
          vietnamese: 'Nhờ thời tiết đẹp mà buổi dã ngoại vui.',
          english: 'Thanks to the good weather, we enjoyed the picnic.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜せいで',
      vietnamese: 'tại ~, vì ~ (kết quả tiêu cực)',
      english: 'because of ~ (negative result)',
      type: 'main',
      explanation: 'Biểu thị nguyên nhân dẫn đến kết quả xấu, thể hiện sự trách móc hoặc tiếc nuối. Cấu tạo: câu thể thường + せいで / danh từ + のせいで / な形容詞 + なせいで. Ngược lại với おかげで.',
      examples: [
        {
          japanese: '雨のせいで、試合が中止になりました。',
          vietnamese: 'Tại mưa mà trận đấu bị hủy.',
          english: 'Because of the rain, the match was cancelled.',
          type: 'main'
        },
        {
          japanese: '寝坊したせいで、遅刻しました。',
          vietnamese: 'Tại ngủ dậy muộn mà bị trễ.',
          english: 'Because I overslept, I was late.',
          type: 'main'
        },
        {
          japanese: '騒音のせいで、勉強に集中できません。',
          vietnamese: 'Tại tiếng ồn mà không thể tập trung học.',
          english: 'Because of the noise, I can\'t concentrate on studying.',
          type: 'main'
        },
        {
          japanese: 'あの人のせいで、計画がだめになった。',
          vietnamese: 'Tại người đó mà kế hoạch hỏng hết.',
          english: 'Because of that person, the plan was ruined.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜のに',
      vietnamese: 'mặc dù ~, dù ~ mà',
      english: 'although ~, even though ~',
      type: 'main',
      explanation: 'Biểu thị sự trái ngược với kỳ vọng, thường kèm cảm giác bất mãn, tiếc nuối hoặc ngạc nhiên. Cấu tạo: động từ thể thường + のに, い形容詞 + のに, な形容詞 + なのに, danh từ + なのに. Vế sau là kết quả trái ngược.',
      examples: [
        {
          japanese: '約束したのに、彼は来ませんでした。',
          vietnamese: 'Dù đã hẹn mà anh ấy không đến.',
          english: 'Even though he promised, he didn\'t come.',
          type: 'main'
        },
        {
          japanese: 'たくさん勉強したのに、試験に落ちました。',
          vietnamese: 'Dù học rất nhiều mà vẫn trượt kỳ thi.',
          english: 'Even though I studied a lot, I failed the exam.',
          type: 'main'
        },
        {
          japanese: '薬を飲んだのに、まだ熱が下がりません。',
          vietnamese: 'Dù đã uống thuốc mà vẫn chưa hạ sốt.',
          english: 'Even though I took medicine, my fever hasn\'t gone down.',
          type: 'main'
        },
        {
          japanese: '日曜日なのに、仕事があります。',
          vietnamese: 'Dù là chủ nhật mà vẫn phải làm việc.',
          english: 'Even though it\'s Sunday, I have to work.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜から / 〜ので (so sánh)',
      vietnamese: 'vì ~, do ~ (so sánh mức độ trang trọng)',
      english: 'because ~ (comparison of formality)',
      type: 'additional',
      explanation: 'So sánh các cách nói lý do: ～から (chủ quan, thân mật), ～ので (khách quan, lịch sự hơn から), ～ため(に) (trang trọng, văn viết), ～おかげで (kết quả tốt), ～せいで (kết quả xấu). Cấu tạo ので: động từ/い形容詞 thể thường + ので, な形容詞 + なので, danh từ + なので.',
      examples: [
        {
          japanese: '体調が悪いので、今日は休みます。',
          vietnamese: 'Vì tình trạng sức khỏe không tốt nên hôm nay tôi nghỉ.',
          english: 'Because I\'m not feeling well, I\'m taking the day off.',
          type: 'main'
        },
        {
          japanese: '忙しいから、行けません。',
          vietnamese: 'Vì bận nên không đi được.',
          english: 'Because I\'m busy, I can\'t go.',
          type: 'main'
        },
        {
          japanese: '道が混んでいたので、遅れてしまいました。',
          vietnamese: 'Vì đường tắc nên bị trễ mất rồi.',
          english: 'Because the road was congested, I ended up being late.',
          type: 'additional'
        }
      ]
    }
  ]
};
