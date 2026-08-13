/**
 * N3 Core Lessons — Lesson 01
 * Passive Form (Thể bị động)
 */

import type { LessonData } from '$lib/types';

export const LESSON_01_DATA: LessonData = {
  lessonNumber: 1,
  title: '受身形 (Thể bị động / Passive form)',
  vocabulary: [
    // Emotions & Feelings
    {
      japanese: '褒める',
      kana: 'ほめる',
      vietnamese: 'khen ngợi',
      english: 'to praise',
      type: 'main',
      example: '先生に褒められました。'
    },
    {
      japanese: '叱る',
      kana: 'しかる',
      vietnamese: 'mắng, la',
      english: 'to scold',
      type: 'main',
      example: '母に叱られました。'
    },
    {
      japanese: '怒る',
      kana: 'おこる',
      vietnamese: 'tức giận, giận dữ',
      english: 'to get angry',
      type: 'main',
      example: '上司に怒られた。'
    },
    {
      japanese: '驚く',
      kana: 'おどろく',
      vietnamese: 'ngạc nhiên, kinh ngạc',
      english: 'to be surprised',
      type: 'main',
      example: 'その知らせに驚きました。'
    },
    {
      japanese: '困る',
      kana: 'こまる',
      vietnamese: 'gặp khó khăn, bối rối',
      english: 'to be troubled',
      type: 'main',
      example: '電車が止まって困りました。'
    },
    {
      japanese: '悲しむ',
      kana: 'かなしむ',
      vietnamese: 'buồn, đau buồn',
      english: 'to be sad, to grieve',
      type: 'main',
      example: '友達が引っ越して悲しんでいます。'
    },
    {
      japanese: '喜ぶ',
      kana: 'よろこぶ',
      vietnamese: 'vui mừng',
      english: 'to be glad, to rejoice',
      type: 'main',
      example: 'プレゼントをもらって喜びました。'
    },
    {
      japanese: '感動する',
      kana: 'かんどうする',
      vietnamese: 'cảm động, xúc động',
      english: 'to be moved, to be impressed',
      type: 'main',
      example: 'その映画に感動しました。'
    },

    // Actions that happen TO someone
    {
      japanese: '盗む',
      kana: 'ぬすむ',
      vietnamese: 'ăn trộm, ăn cắp',
      english: 'to steal',
      type: 'main',
      example: '財布を盗まれました。'
    },
    {
      japanese: '踏む',
      kana: 'ふむ',
      vietnamese: 'giẫm, dẫm',
      english: 'to step on',
      type: 'main',
      example: '電車で足を踏まれました。'
    },
    {
      japanese: '殴る',
      kana: 'なぐる',
      vietnamese: 'đấm, đánh',
      english: 'to punch, to hit',
      type: 'main',
      example: '知らない人に殴られた。'
    },
    {
      japanese: '壊す',
      kana: 'こわす',
      vietnamese: 'làm hỏng, phá hủy',
      english: 'to break, to destroy',
      type: 'main',
      example: 'パソコンを壊されました。'
    },
    {
      japanese: '汚す',
      kana: 'よごす',
      vietnamese: 'làm bẩn',
      english: 'to make dirty',
      type: 'main',
      example: '服を汚されました。'
    },
    {
      japanese: '笑う',
      kana: 'わらう',
      vietnamese: 'cười',
      english: 'to laugh',
      type: 'main',
      example: 'みんなに笑われました。'
    },
    {
      japanese: '招待する',
      kana: 'しょうたいする',
      vietnamese: 'mời, chiêu đãi',
      english: 'to invite',
      type: 'main',
      example: 'パーティーに招待されました。'
    },
    {
      japanese: '紹介する',
      kana: 'しょうかいする',
      vietnamese: 'giới thiệu',
      english: 'to introduce',
      type: 'main',
      example: '友達に彼女を紹介されました。'
    },

    // News & Media
    {
      japanese: '報道する',
      kana: 'ほうどうする',
      vietnamese: 'đưa tin, báo cáo',
      english: 'to report (news)',
      type: 'main',
      example: 'この事件はテレビで報道されました。'
    },
    {
      japanese: '発表する',
      kana: 'はっぴょうする',
      vietnamese: 'phát biểu, công bố',
      english: 'to announce, to present',
      type: 'main',
      example: '新しい計画が発表されました。'
    },
    {
      japanese: '記事',
      kana: 'きじ',
      vietnamese: 'bài báo',
      english: 'article',
      type: 'main',
      example: 'この記事は多くの人に読まれています。'
    },
    {
      japanese: 'ニュース',
      kana: 'ニュース',
      vietnamese: 'tin tức',
      english: 'news',
      type: 'main',
      example: '悲しいニュースが報道されました。'
    },
    {
      japanese: '事件',
      kana: 'じけん',
      vietnamese: 'sự kiện, vụ việc',
      english: 'incident, case',
      type: 'main',
      example: '大きな事件が起きました。'
    },
    {
      japanese: '被害',
      kana: 'ひがい',
      vietnamese: 'thiệt hại',
      english: 'damage, harm',
      type: 'main',
      example: '台風で大きな被害が出ました。'
    },

    // People & Relationships
    {
      japanese: '上司',
      kana: 'じょうし',
      vietnamese: 'cấp trên, sếp',
      english: 'boss, superior',
      type: 'main',
      example: '上司に注意されました。'
    },
    {
      japanese: '部下',
      kana: 'ぶか',
      vietnamese: 'cấp dưới, nhân viên',
      english: 'subordinate',
      type: 'main',
      example: '部下にミスを指摘されました。'
    },
    {
      japanese: '犯人',
      kana: 'はんにん',
      vietnamese: 'thủ phạm',
      english: 'criminal, culprit',
      type: 'main',
      example: '犯人はまだ捕まっていません。'
    },
    {
      japanese: '泥棒',
      kana: 'どろぼう',
      vietnamese: 'kẻ trộm',
      english: 'thief, burglar',
      type: 'main',
      example: '泥棒に入られました。'
    },

    // Nouns
    {
      japanese: '財布',
      kana: 'さいふ',
      vietnamese: 'ví tiền',
      english: 'wallet',
      type: 'main',
      example: '財布を盗まれました。'
    },
    {
      japanese: '評判',
      kana: 'ひょうばん',
      vietnamese: 'danh tiếng, đánh giá',
      english: 'reputation',
      type: 'additional',
      example: 'この店は評判がいいです。'
    },
    {
      japanese: '作品',
      kana: 'さくひん',
      vietnamese: 'tác phẩm',
      english: 'work (of art)',
      type: 'additional',
      example: 'この作品は世界中で愛されています。'
    },
    {
      japanese: '秘密',
      kana: 'ひみつ',
      vietnamese: 'bí mật',
      english: 'secret',
      type: 'additional',
      example: '秘密をみんなに知られてしまった。'
    },
    {
      japanese: '台風',
      kana: 'たいふう',
      vietnamese: 'bão',
      english: 'typhoon',
      type: 'additional',
      example: '台風で家が壊されました。'
    },
    {
      japanese: '注意する',
      kana: 'ちゅういする',
      vietnamese: 'chú ý, cảnh báo',
      english: 'to warn, to pay attention',
      type: 'main',
      example: '先生に注意されました。'
    },
    {
      japanese: '尊敬する',
      kana: 'そんけいする',
      vietnamese: 'kính trọng, tôn kính',
      english: 'to respect',
      type: 'additional',
      example: 'あの先生は多くの人に尊敬されています。'
    }
  ],
  grammar: [
    {
      pattern: '〜られる／〜れる (受身形)',
      vietnamese: 'bị ~, được ~',
      english: 'passive form',
      type: 'main',
      explanation: 'Thể bị động diễn tả hành động mà chủ ngữ chịu tác động. Nhóm I: う段→あ段+れる (書く→書かれる). Nhóm II: る→られる (食べる→食べられる). Nhóm III: する→される, くる→こられる.',
      examples: [
        {
          japanese: '先生に褒められました。',
          vietnamese: 'Tôi được thầy khen.',
          english: 'I was praised by the teacher.',
          type: 'main'
        },
        {
          japanese: 'この本は多くの人に読まれています。',
          vietnamese: 'Cuốn sách này được nhiều người đọc.',
          english: 'This book is read by many people.',
          type: 'main'
        },
        {
          japanese: '日本語は世界中で勉強されています。',
          vietnamese: 'Tiếng Nhật được học trên khắp thế giới.',
          english: 'Japanese is studied all over the world.',
          type: 'main'
        },
        {
          japanese: 'パーティーに招待されました。',
          vietnamese: 'Tôi được mời đến bữa tiệc.',
          english: 'I was invited to the party.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜に〜られる (迷惑の受身)',
      vietnamese: 'bị ai đó ~ (gây phiền)',
      english: 'adversative passive (suffering passive)',
      type: 'main',
      explanation: 'Bị động bất lợi diễn tả việc chủ ngữ chịu ảnh hưởng tiêu cực từ hành động của người khác. Thường dùng khi người nói cảm thấy khó chịu, bực bội.',
      examples: [
        {
          japanese: '電車で足を踏まれました。',
          vietnamese: 'Tôi bị giẫm lên chân trên tàu điện.',
          english: 'My foot was stepped on in the train.',
          type: 'main'
        },
        {
          japanese: '隣の人に夜中に騒がれて、眠れなかった。',
          vietnamese: 'Bị người hàng xóm làm ồn ban đêm nên không ngủ được.',
          english: 'The neighbor made noise at night and I could not sleep.',
          type: 'main'
        },
        {
          japanese: '子供に花瓶を壊されました。',
          vietnamese: 'Tôi bị con trai làm vỡ bình hoa.',
          english: 'My child broke the vase (and I was affected).',
          type: 'main'
        },
        {
          japanese: '雨に降られて、びしょ濡れになった。',
          vietnamese: 'Bị mưa nên ướt sũng.',
          english: 'I got caught in the rain and got soaked.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜によって',
      vietnamese: 'bởi ~, do ~, tùy theo ~',
      english: 'by, depending on',
      type: 'main',
      explanation: 'Dùng để chỉ tác nhân (người/vật) thực hiện hành động trong câu bị động trang trọng, hoặc diễn tả sự khác nhau tùy theo điều kiện.',
      examples: [
        {
          japanese: 'この小説は村上春樹によって書かれました。',
          vietnamese: 'Cuốn tiểu thuyết này được viết bởi Murakami Haruki.',
          english: 'This novel was written by Murakami Haruki.',
          type: 'main'
        },
        {
          japanese: '新しい法律が政府によって発表されました。',
          vietnamese: 'Luật mới được công bố bởi chính phủ.',
          english: 'A new law was announced by the government.',
          type: 'main'
        },
        {
          japanese: '国によって文化が違います。',
          vietnamese: 'Văn hóa khác nhau tùy theo quốc gia.',
          english: 'Culture differs depending on the country.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜てしまう (受身との組み合わせ)',
      vietnamese: 'đã bị ~ mất rồi (tiếc nuối)',
      english: 'ended up being ~ (regret with passive)',
      type: 'additional',
      explanation: 'Kết hợp thể bị động với てしまう để diễn tả sự tiếc nuối khi bị ảnh hưởng bởi hành động của người khác.',
      examples: [
        {
          japanese: '秘密を知られてしまった。',
          vietnamese: 'Bí mật đã bị biết mất rồi.',
          english: 'My secret ended up being found out.',
          type: 'main'
        },
        {
          japanese: '大事な書類を捨てられてしまいました。',
          vietnamese: 'Tài liệu quan trọng đã bị vứt mất rồi.',
          english: 'My important documents ended up being thrown away.',
          type: 'main'
        },
        {
          japanese: '彼女に嘘をつかれてしまった。',
          vietnamese: 'Đã bị cô ấy nói dối mất rồi.',
          english: 'I ended up being lied to by her.',
          type: 'additional'
        }
      ]
    }
  ]
};
