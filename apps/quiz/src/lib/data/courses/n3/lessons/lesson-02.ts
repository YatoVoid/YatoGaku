/**
 * N3 Core Lessons — Lesson 02
 * Causative Form (Thể sai khiến)
 */

import type { LessonData } from '$lib/types';

export const LESSON_02_DATA: LessonData = {
  lessonNumber: 2,
  title: '使役形 (Causative Form)',
  vocabulary: [
    // Work Orders & Instructions
    {
      japanese: '命令する',
      kana: 'めいれいする',
      vietnamese: 'ra lệnh',
      english: 'to order, to command',
      type: 'main',
      example: '上司が部下に命令しました。'
    },
    {
      japanese: '許可する',
      kana: 'きょかする',
      vietnamese: 'cho phép, cấp phép',
      english: 'to permit, to allow',
      type: 'main',
      example: '先生が外出を許可しました。'
    },
    {
      japanese: '担当する',
      kana: 'たんとうする',
      vietnamese: 'phụ trách, đảm nhiệm',
      english: 'to be in charge of',
      type: 'main',
      example: 'この仕事を担当させてください。'
    },
    {
      japanese: '残業する',
      kana: 'ざんぎょうする',
      vietnamese: 'làm thêm giờ',
      english: 'to work overtime',
      type: 'main',
      example: '毎日残業させられています。'
    },
    {
      japanese: '出張する',
      kana: 'しゅっちょうする',
      vietnamese: 'đi công tác',
      english: 'to go on a business trip',
      type: 'main',
      example: '部長に出張させられました。'
    },
    {
      japanese: '報告する',
      kana: 'ほうこくする',
      vietnamese: 'báo cáo',
      english: 'to report',
      type: 'main',
      example: '結果を報告させてください。'
    },
    {
      japanese: '手伝う',
      kana: 'てつだう',
      vietnamese: 'giúp đỡ',
      english: 'to help',
      type: 'main',
      example: '子供に家事を手伝わせます。'
    },
    {
      japanese: '掃除する',
      kana: 'そうじする',
      vietnamese: 'dọn dẹp, lau chùi',
      english: 'to clean',
      type: 'main',
      example: '母は私に部屋を掃除させました。'
    },

    // Parenting & School
    {
      japanese: '育てる',
      kana: 'そだてる',
      vietnamese: 'nuôi dưỡng, trồng',
      english: 'to raise, to grow',
      type: 'main',
      example: '子供を一人で育てています。'
    },
    {
      japanese: '叱る',
      kana: 'しかる',
      vietnamese: 'mắng, la',
      english: 'to scold',
      type: 'main',
      example: '子供を叱りました。'
    },
    {
      japanese: '泣く',
      kana: 'なく',
      vietnamese: 'khóc',
      english: 'to cry',
      type: 'main',
      example: '子供を泣かせてしまった。'
    },
    {
      japanese: '遊ぶ',
      kana: 'あそぶ',
      vietnamese: 'chơi',
      english: 'to play',
      type: 'main',
      example: '子供を外で遊ばせています。'
    },
    {
      japanese: '片付ける',
      kana: 'かたづける',
      vietnamese: 'dọn dẹp, sắp xếp',
      english: 'to tidy up, to put away',
      type: 'main',
      example: '子供に部屋を片付けさせました。'
    },
    {
      japanese: '宿題',
      kana: 'しゅくだい',
      vietnamese: 'bài tập về nhà',
      english: 'homework',
      type: 'main',
      example: '子供に宿題をやらせます。'
    },
    {
      japanese: '塾',
      kana: 'じゅく',
      vietnamese: 'trung tâm luyện thi',
      english: 'cram school',
      type: 'main',
      example: '子供を塾に通わせています。'
    },
    {
      japanese: '習い事',
      kana: 'ならいごと',
      vietnamese: 'việc học thêm (ngoại khóa)',
      english: 'lessons, extracurricular activities',
      type: 'main',
      example: '子供にピアノの習い事をさせています。'
    },

    // Actions & Verbs
    {
      japanese: '運ぶ',
      kana: 'はこぶ',
      vietnamese: 'mang, vận chuyển',
      english: 'to carry, to transport',
      type: 'main',
      example: '新人に荷物を運ばせました。'
    },
    {
      japanese: '届ける',
      kana: 'とどける',
      vietnamese: 'giao, chuyển tới',
      english: 'to deliver',
      type: 'main',
      example: '部下に書類を届けさせました。'
    },
    {
      japanese: '参加する',
      kana: 'さんかする',
      vietnamese: 'tham gia',
      english: 'to participate',
      type: 'main',
      example: '会議に参加させてください。'
    },
    {
      japanese: '発言する',
      kana: 'はつげんする',
      vietnamese: 'phát biểu',
      english: 'to speak, to make a statement',
      type: 'main',
      example: '学生に自由に発言させます。'
    },
    {
      japanese: '我慢する',
      kana: 'がまんする',
      vietnamese: 'chịu đựng, nhẫn nhịn',
      english: 'to endure, to be patient',
      type: 'main',
      example: 'いつも我慢させられている。'
    },
    {
      japanese: '辞める',
      kana: 'やめる',
      vietnamese: 'nghỉ, từ bỏ',
      english: 'to quit, to resign',
      type: 'main',
      example: '上司に辞めさせられました。'
    },

    // Nouns
    {
      japanese: '新人',
      kana: 'しんじん',
      vietnamese: 'người mới, nhân viên mới',
      english: 'newcomer, new employee',
      type: 'main',
      example: '新人にコピーを取らせました。'
    },
    {
      japanese: '部長',
      kana: 'ぶちょう',
      vietnamese: 'trưởng phòng',
      english: 'department manager',
      type: 'main',
      example: '部長が私を出張させました。'
    },
    {
      japanese: '課長',
      kana: 'かちょう',
      vietnamese: 'trưởng bộ phận',
      english: 'section chief',
      type: 'additional',
      example: '課長に残業させられました。'
    },
    {
      japanese: '後輩',
      kana: 'こうはい',
      vietnamese: 'đàn em, hậu bối',
      english: 'junior, underclassman',
      type: 'main',
      example: '後輩に仕事を手伝わせました。'
    },
    {
      japanese: '先輩',
      kana: 'せんぱい',
      vietnamese: 'đàn anh, tiền bối',
      english: 'senior, upperclassman',
      type: 'main',
      example: '先輩に飲み会に行かされた。'
    },
    {
      japanese: '荷物',
      kana: 'にもつ',
      vietnamese: 'hành lý, đồ đạc',
      english: 'luggage, baggage',
      type: 'main',
      example: '重い荷物を運ばされました。'
    },
    {
      japanese: '書類',
      kana: 'しょるい',
      vietnamese: 'giấy tờ, tài liệu',
      english: 'documents',
      type: 'main',
      example: '書類を整理させられました。'
    },
    {
      japanese: '家事',
      kana: 'かじ',
      vietnamese: 'việc nhà',
      english: 'housework',
      type: 'main',
      example: '子供に家事を手伝わせます。'
    },
    {
      japanese: '教育',
      kana: 'きょういく',
      vietnamese: 'giáo dục',
      english: 'education',
      type: 'additional',
      example: '教育は子供の将来に大切です。'
    },
    {
      japanese: '会議',
      kana: 'かいぎ',
      vietnamese: 'cuộc họp',
      english: 'meeting, conference',
      type: 'main',
      example: '会議に参加させてください。'
    }
  ],
  grammar: [
    {
      pattern: '〜させる (使役形)',
      vietnamese: 'bắt ~, cho phép ~, để cho ~',
      english: 'causative form (make/let someone do)',
      type: 'main',
      explanation: 'Thể sai khiến diễn tả việc bắt hoặc cho phép ai đó làm gì. Nhóm I: う段→あ段+せる (書く→書かせる). Nhóm II: る→させる (食べる→食べさせる). Nhóm III: する→させる, くる→こさせる.',
      examples: [
        {
          japanese: '母は子供に野菜を食べさせました。',
          vietnamese: 'Mẹ bắt con ăn rau.',
          english: 'The mother made the child eat vegetables.',
          type: 'main'
        },
        {
          japanese: '先生は学生にレポートを書かせました。',
          vietnamese: 'Giáo viên bắt sinh viên viết báo cáo.',
          english: 'The teacher made the students write a report.',
          type: 'main'
        },
        {
          japanese: '上司は部下に残業させました。',
          vietnamese: 'Sếp bắt nhân viên làm thêm giờ.',
          english: 'The boss made the subordinate work overtime.',
          type: 'main'
        },
        {
          japanese: '子供を外で遊ばせています。',
          vietnamese: 'Cho trẻ con chơi ở ngoài.',
          english: 'I am letting the children play outside.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜させてください',
      vietnamese: 'hãy cho tôi ~, hãy để tôi ~',
      english: 'please let me do ~',
      type: 'main',
      explanation: 'Dùng để xin phép làm gì đó một cách lịch sự. Thể hiện mong muốn được phép thực hiện hành động.',
      examples: [
        {
          japanese: '私にやらせてください。',
          vietnamese: 'Hãy để tôi làm.',
          english: 'Please let me do it.',
          type: 'main'
        },
        {
          japanese: '一言言わせてください。',
          vietnamese: 'Hãy cho tôi nói một lời.',
          english: 'Please let me say one thing.',
          type: 'main'
        },
        {
          japanese: '自己紹介させてください。',
          vietnamese: 'Hãy cho tôi tự giới thiệu.',
          english: 'Please let me introduce myself.',
          type: 'main'
        },
        {
          japanese: 'もう少し考えさせてください。',
          vietnamese: 'Hãy cho tôi suy nghĩ thêm một chút.',
          english: 'Please let me think about it a bit more.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜させられる (使役受身形)',
      vietnamese: 'bị bắt phải ~, bị ép ~',
      english: 'causative-passive (be made to do)',
      type: 'main',
      explanation: 'Thể sai khiến bị động diễn tả việc bị bắt buộc làm gì đó ngoài ý muốn. Nhóm I: rút gọn あ段+される (書く→書かされる). Nhóm II: させられる (食べる→食べさせられる).',
      examples: [
        {
          japanese: '毎日残業させられています。',
          vietnamese: 'Tôi bị bắt làm thêm giờ mỗi ngày.',
          english: 'I am made to work overtime every day.',
          type: 'main'
        },
        {
          japanese: '子供の時、ピアノを習わせられました。',
          vietnamese: 'Hồi nhỏ tôi bị bắt học đàn piano.',
          english: 'When I was a child, I was made to learn piano.',
          type: 'main'
        },
        {
          japanese: '嫌いな野菜を食べさせられた。',
          vietnamese: 'Tôi bị bắt ăn rau mà mình ghét.',
          english: 'I was made to eat vegetables I disliked.',
          type: 'main'
        },
        {
          japanese: '先輩に飲み会に行かされた。',
          vietnamese: 'Tôi bị tiền bối bắt đi nhậu.',
          english: 'I was made to go to a drinking party by my senior.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜させてあげる／もらう／くれる',
      vietnamese: 'cho phép ai ~ (kết hợp cho-nhận)',
      english: 'let someone do ~ (with giving/receiving)',
      type: 'additional',
      explanation: 'Kết hợp thể sai khiến với thể cho-nhận để thêm sắc thái lịch sự hoặc thể hiện sự cảm ơn, nhờ vả.',
      examples: [
        {
          japanese: '子供に好きなことをさせてあげたい。',
          vietnamese: 'Tôi muốn cho con làm điều con thích.',
          english: 'I want to let my child do what they like.',
          type: 'main'
        },
        {
          japanese: '先生に発表させてもらいました。',
          vietnamese: 'Tôi được giáo viên cho phép phát biểu.',
          english: 'I was allowed to present by the teacher.',
          type: 'main'
        },
        {
          japanese: '社長が自由に意見を言わせてくれます。',
          vietnamese: 'Giám đốc cho phép tự do nêu ý kiến.',
          english: 'The president lets us express our opinions freely.',
          type: 'main'
        }
      ]
    }
  ]
};
