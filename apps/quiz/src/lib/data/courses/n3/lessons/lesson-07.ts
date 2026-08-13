/**
 * N3 Core Lessons — Lesson 07: Honorific Basics
 * Focus: 敬語入門 — お～になる、お～する、special honorific verbs
 */

import type { LessonData } from '$lib/types';

export const LESSON_07_DATA: LessonData = {
  lessonNumber: 7,
  title: '敬語入門 (Kính ngữ nhập môn / Honorific basics)',
  vocabulary: [
    // Honorific verbs
    {
      japanese: 'いらっしゃる',
      kana: 'いらっしゃる',
      vietnamese: 'ở, đi, đến (kính ngữ của いる/行く/来る)',
      english: 'to be, to go, to come (honorific)',
      type: 'main',
      example: '社長はいらっしゃいますか。'
    },
    {
      japanese: 'おっしゃる',
      kana: 'おっしゃる',
      vietnamese: 'nói (kính ngữ của 言う)',
      english: 'to say (honorific)',
      type: 'main',
      example: '先生がおっしゃったとおりにします。'
    },
    {
      japanese: '召し上がる',
      kana: 'めしあがる',
      vietnamese: 'ăn, uống (kính ngữ của 食べる/飲む)',
      english: 'to eat, to drink (honorific)',
      type: 'main',
      example: 'どうぞ召し上がってください。'
    },
    {
      japanese: 'ご覧になる',
      kana: 'ごらんになる',
      vietnamese: 'xem (kính ngữ của 見る)',
      english: 'to look, to see (honorific)',
      type: 'main',
      example: 'この資料をご覧になりましたか。'
    },
    {
      japanese: 'ご存じ',
      kana: 'ごぞんじ',
      vietnamese: 'biết (kính ngữ của 知る)',
      english: 'to know (honorific)',
      type: 'main',
      example: 'この件はご存じですか。'
    },
    {
      japanese: 'なさる',
      kana: 'なさる',
      vietnamese: 'làm (kính ngữ của する)',
      english: 'to do (honorific)',
      type: 'main',
      example: '何をなさいますか。'
    },
    // Humble verbs
    {
      japanese: '参る',
      kana: 'まいる',
      vietnamese: 'đi, đến (khiêm nhường của 行く/来る)',
      english: 'to go, to come (humble)',
      type: 'main',
      example: '明日そちらに参ります。'
    },
    {
      japanese: '申す',
      kana: 'もうす',
      vietnamese: 'nói (khiêm nhường của 言う)',
      english: 'to say (humble)',
      type: 'main',
      example: '田中と申します。'
    },
    {
      japanese: '拝見する',
      kana: 'はいけんする',
      vietnamese: 'xem (khiêm nhường của 見る)',
      english: 'to look, to see (humble)',
      type: 'main',
      example: 'お写真を拝見しました。'
    },
    {
      japanese: '存じる',
      kana: 'ぞんじる',
      vietnamese: 'biết (khiêm nhường của 知る)',
      english: 'to know (humble)',
      type: 'main',
      example: 'その件は存じております。'
    },
    {
      japanese: 'おる',
      kana: 'おる',
      vietnamese: 'ở (khiêm nhường của いる)',
      english: 'to be (humble)',
      type: 'main',
      example: '田中は今席を外しております。'
    },
    {
      japanese: 'いたす',
      kana: 'いたす',
      vietnamese: 'làm (khiêm nhường của する)',
      english: 'to do (humble)',
      type: 'main',
      example: '私がご案内いたします。'
    },
    // Business and formal situation nouns
    {
      japanese: '敬語',
      kana: 'けいご',
      vietnamese: 'kính ngữ',
      english: 'honorific language',
      type: 'main',
      example: '敬語を正しく使うのは難しいです。'
    },
    {
      japanese: '尊敬語',
      kana: 'そんけいご',
      vietnamese: 'tôn kính ngữ',
      english: 'respectful language',
      type: 'main',
      example: '尊敬語は目上の人に使います。'
    },
    {
      japanese: '謙譲語',
      kana: 'けんじょうご',
      vietnamese: 'khiêm nhường ngữ',
      english: 'humble language',
      type: 'main',
      example: '謙譲語は自分の動作に使います。'
    },
    {
      japanese: '丁寧語',
      kana: 'ていねいご',
      vietnamese: 'thể lịch sự',
      english: 'polite language',
      type: 'main',
      example: '丁寧語は「です・ます」の形です。'
    },
    {
      japanese: '目上',
      kana: 'めうえ',
      vietnamese: 'người bề trên',
      english: 'superior, senior',
      type: 'main',
      example: '目上の人には敬語を使いましょう。'
    },
    {
      japanese: '目下',
      kana: 'めした',
      vietnamese: 'người bề dưới',
      english: 'subordinate, junior',
      type: 'main',
      example: '目下の人にも丁寧に話すべきです。'
    },
    {
      japanese: '取引先',
      kana: 'とりひきさき',
      vietnamese: 'đối tác kinh doanh',
      english: 'business partner, client',
      type: 'main',
      example: '取引先に失礼のないようにしてください。'
    },
    {
      japanese: 'お客様',
      kana: 'おきゃくさま',
      vietnamese: 'quý khách',
      english: 'customer (honorific)',
      type: 'main',
      example: 'お客様がいらっしゃいました。'
    },
    {
      japanese: '受付',
      kana: 'うけつけ',
      vietnamese: 'quầy lễ tân',
      english: 'reception',
      type: 'main',
      example: '受付でお名前をお書きください。'
    },
    {
      japanese: '名刺',
      kana: 'めいし',
      vietnamese: 'danh thiếp',
      english: 'business card',
      type: 'main',
      example: '名刺を交換させていただきます。'
    },
    {
      japanese: '挨拶',
      kana: 'あいさつ',
      vietnamese: 'lời chào',
      english: 'greeting',
      type: 'main',
      example: 'きちんと挨拶をしましょう。'
    },
    {
      japanese: '失礼',
      kana: 'しつれい',
      vietnamese: 'thất lễ, xin lỗi',
      english: 'rude, excuse me',
      type: 'main',
      example: '失礼ですが、お名前は何とおっしゃいますか。'
    },
    {
      japanese: '恐れ入りますが',
      kana: 'おそれいりますが',
      vietnamese: 'xin lỗi nhưng (rất lịch sự)',
      english: 'I\'m sorry but (very polite)',
      type: 'main',
      example: '恐れ入りますが、もう一度おっしゃっていただけますか。'
    },
    // Additional vocabulary
    {
      japanese: '承知する',
      kana: 'しょうちする',
      vietnamese: 'hiểu, tuân theo (khiêm nhường)',
      english: 'to understand, to comply (humble)',
      type: 'additional',
      example: '承知いたしました。'
    },
    {
      japanese: '伺う',
      kana: 'うかがう',
      vietnamese: 'hỏi, thăm (khiêm nhường)',
      english: 'to ask, to visit (humble)',
      type: 'additional',
      example: '明日伺ってもよろしいですか。'
    },
    {
      japanese: '申し訳ない',
      kana: 'もうしわけない',
      vietnamese: 'vô cùng xin lỗi',
      english: 'inexcusable, very sorry',
      type: 'additional',
      example: 'ご迷惑をおかけして申し訳ありません。'
    },
    {
      japanese: 'お手数',
      kana: 'おてすう',
      vietnamese: 'sự phiền hà',
      english: 'trouble, bother',
      type: 'additional',
      example: 'お手数ですが、こちらにご記入ください。'
    },
    {
      japanese: 'ご遠慮ください',
      kana: 'ごえんりょください',
      vietnamese: 'xin hãy kiêng (lịch sự)',
      english: 'please refrain from',
      type: 'additional',
      example: '館内での飲食はご遠慮ください。'
    },
    {
      japanese: 'ご了承ください',
      kana: 'ごりょうしょうください',
      vietnamese: 'xin hãy thông cảm',
      english: 'please understand',
      type: 'additional',
      example: '多少の遅延はご了承ください。'
    },
    {
      japanese: 'かしこまりました',
      kana: 'かしこまりました',
      vietnamese: 'vâng, tôi hiểu rồi ạ (rất lịch sự)',
      english: 'certainly, understood (very polite)',
      type: 'additional',
      example: 'かしこまりました。すぐにお持ちします。'
    },
    {
      japanese: 'ご案内する',
      kana: 'ごあんないする',
      vietnamese: 'hướng dẫn (khiêm nhường)',
      english: 'to guide (humble)',
      type: 'additional',
      example: '会議室までご案内いたします。'
    },
    {
      japanese: 'ご連絡',
      kana: 'ごれんらく',
      vietnamese: 'liên lạc (kính ngữ)',
      english: 'contact (honorific)',
      type: 'additional',
      example: 'ご連絡いただきありがとうございます。'
    }
  ],
  grammar: [
    {
      pattern: 'お〜になる',
      vietnamese: '~ (kính ngữ — tôn kính)',
      english: '~ (honorific — respectful)',
      type: 'main',
      explanation: 'Dạng tôn kính ngữ dùng để nói về hành động của người bề trên. Cấu tạo: お + động từ ます形 (bỏ ます) + になる. Ví dụ: 読む → お読みになる. Không dùng với nhóm III (する、来る) và một số động từ đặc biệt đã có dạng kính ngữ riêng.',
      examples: [
        {
          japanese: '先生はもうお帰りになりましたか。',
          vietnamese: 'Thầy đã về rồi ạ?',
          english: 'Has the teacher already gone home?',
          type: 'main'
        },
        {
          japanese: '部長はこの本をお読みになりました。',
          vietnamese: 'Trưởng phòng đã đọc cuốn sách này.',
          english: 'The department head has read this book.',
          type: 'main'
        },
        {
          japanese: 'お客様がお待ちになっています。',
          vietnamese: 'Khách đang chờ ạ.',
          english: 'The customer is waiting.',
          type: 'main'
        },
        {
          japanese: '社長はもうお休みになりました。',
          vietnamese: 'Giám đốc đã nghỉ rồi ạ.',
          english: 'The president has already retired for the night.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'お〜する / ご〜する',
      vietnamese: '~ (khiêm nhường — tự hạ mình)',
      english: '~ (humble — lowering oneself)',
      type: 'main',
      explanation: 'Dạng khiêm nhường ngữ dùng khi nói về hành động của mình (hoặc nhóm mình) với người bề trên. Cấu tạo: お + động từ ます形 (bỏ ます) + する/いたす. Với từ Hán (漢語), dùng ご～する. Ví dụ: 持つ → お持ちする, 説明する → ご説明する.',
      examples: [
        {
          japanese: 'お荷物をお持ちします。',
          vietnamese: 'Để tôi mang hành lý cho anh/chị.',
          english: 'I\'ll carry your luggage.',
          type: 'main'
        },
        {
          japanese: '後ほどご連絡いたします。',
          vietnamese: 'Tôi sẽ liên lạc lại sau ạ.',
          english: 'I\'ll contact you later.',
          type: 'main'
        },
        {
          japanese: '詳しくご説明いたします。',
          vietnamese: 'Tôi xin giải thích chi tiết ạ.',
          english: 'I\'ll explain in detail.',
          type: 'main'
        },
        {
          japanese: 'こちらでお預かりいたします。',
          vietnamese: 'Tôi xin giữ hộ ạ.',
          english: 'I\'ll keep it for you here.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ていただけませんか',
      vietnamese: 'xin vui lòng ~ được không ạ? (yêu cầu lịch sự)',
      english: 'could you please ~? (polite request)',
      type: 'main',
      explanation: 'Cách yêu cầu rất lịch sự, dùng với người bề trên hoặc trong tình huống trang trọng. Cấu tạo: ～て + いただけませんか. Lịch sự hơn ～てもらえませんか và ～てくれませんか.',
      examples: [
        {
          japanese: 'もう少しゆっくり話していただけませんか。',
          vietnamese: 'Anh/chị nói chậm hơn một chút được không ạ?',
          english: 'Could you please speak a little more slowly?',
          type: 'main'
        },
        {
          japanese: 'この漢字の読み方を教えていただけませんか。',
          vietnamese: 'Anh/chị chỉ cách đọc chữ Hán này được không ạ?',
          english: 'Could you please teach me how to read this kanji?',
          type: 'main'
        },
        {
          japanese: '明日までにお返事いただけませんか。',
          vietnamese: 'Anh/chị trả lời trước ngày mai được không ạ?',
          english: 'Could you please reply by tomorrow?',
          type: 'main'
        },
        {
          japanese: 'お名前をもう一度おっしゃっていただけませんか。',
          vietnamese: 'Xin anh/chị nói lại tên một lần nữa được không ạ?',
          english: 'Could you please say your name once more?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '特別な敬語動詞 (Động từ kính ngữ đặc biệt)',
      vietnamese: 'các động từ có dạng kính ngữ riêng',
      english: 'special honorific verb forms',
      type: 'main',
      explanation: 'Một số động từ thông dụng có dạng kính ngữ và khiêm nhường riêng, không theo quy tắc お〜になる / お〜する. Cần học thuộc: いる→いらっしゃる/おる, 行く→いらっしゃる/参る, 来る→いらっしゃる/参る, 言う→おっしゃる/申す, 食べる→召し上がる/いただく, 見る→ご覧になる/拝見する, する→なさる/いたす, 知る→ご存じ/存じる.',
      examples: [
        {
          japanese: '先生は何とおっしゃいましたか。',
          vietnamese: 'Thầy đã nói gì ạ?',
          english: 'What did the teacher say?',
          type: 'main'
        },
        {
          japanese: '田中と申します。よろしくお願いいたします。',
          vietnamese: 'Tôi tên là Tanaka. Rất vui được gặp.',
          english: 'My name is Tanaka. Nice to meet you.',
          type: 'main'
        },
        {
          japanese: 'どうぞ召し上がってください。',
          vietnamese: 'Xin mời dùng ạ.',
          english: 'Please eat/drink.',
          type: 'main'
        },
        {
          japanese: '明日10時にそちらに参ります。',
          vietnamese: 'Ngày mai 10 giờ tôi sẽ đến đó ạ.',
          english: 'I will come there at 10 o\'clock tomorrow.',
          type: 'additional'
        }
      ]
    }
  ]
};
