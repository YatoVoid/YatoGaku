/**
 * N3 Lessons — Lesson 14: Purpose and Means
 * 目的・手段 (Mục đích và phương tiện)
 */

import type { LessonData } from '$lib/types';

export const LESSON_14_DATA: LessonData = {
  lessonNumber: 14,
  title: '目的・手段 (Mục đích và phương tiện)',
  vocabulary: [
    // Purpose and goals
    {
      japanese: '目的',
      kana: 'もくてき',
      vietnamese: 'mục đích',
      english: 'purpose, objective',
      type: 'main',
      example: '旅行の目的は何ですか。'
    },
    {
      japanese: '目標',
      kana: 'もくひょう',
      vietnamese: 'mục tiêu',
      english: 'goal, target',
      type: 'main',
      example: '今年の目標を決めた。'
    },
    {
      japanese: '計画',
      kana: 'けいかく',
      vietnamese: 'kế hoạch',
      english: 'plan',
      type: 'main',
      example: '旅行の計画を立てている。'
    },
    {
      japanese: '準備',
      kana: 'じゅんび',
      vietnamese: 'chuẩn bị',
      english: 'preparation',
      type: 'main',
      example: '試験の準備をしなければならない。'
    },
    {
      japanese: '方法',
      kana: 'ほうほう',
      vietnamese: 'phương pháp',
      english: 'method, way',
      type: 'main',
      example: 'いい方法を思いついた。'
    },
    {
      japanese: '手段',
      kana: 'しゅだん',
      vietnamese: 'phương tiện, biện pháp',
      english: 'means, measure',
      type: 'main',
      example: '交通手段は何を使いますか。'
    },
    {
      japanese: '道具',
      kana: 'どうぐ',
      vietnamese: 'dụng cụ, công cụ',
      english: 'tool, instrument',
      type: 'main',
      example: '料理に必要な道具をそろえた。'
    },
    {
      japanese: '材料',
      kana: 'ざいりょう',
      vietnamese: 'nguyên liệu, tài liệu',
      english: 'material, ingredient',
      type: 'main',
      example: 'ケーキの材料を買ってきた。'
    },
    {
      japanese: '技術',
      kana: 'ぎじゅつ',
      vietnamese: 'kỹ thuật, công nghệ',
      english: 'technology, skill',
      type: 'main',
      example: 'AIの技術が急速に発展している。'
    },
    {
      japanese: '利用',
      kana: 'りよう',
      vietnamese: 'sử dụng, lợi dụng',
      english: 'use, utilization',
      type: 'main',
      example: 'インターネットを利用して調べた。'
    },
    {
      japanese: '活用',
      kana: 'かつよう',
      vietnamese: 'tận dụng, vận dụng',
      english: 'practical use, application',
      type: 'main',
      example: '経験を活用して仕事をする。'
    },
    {
      japanese: '工夫',
      kana: 'くふう',
      vietnamese: 'sáng tạo, nghĩ cách',
      english: 'ingenuity, device',
      type: 'main',
      example: '時間を節約する工夫をした。'
    },
    {
      japanese: '努力',
      kana: 'どりょく',
      vietnamese: 'nỗ lực, cố gắng',
      english: 'effort',
      type: 'main',
      example: '目標に向かって努力している。'
    },
    {
      japanese: '達成',
      kana: 'たっせい',
      vietnamese: 'đạt được',
      english: 'achievement, accomplishment',
      type: 'main',
      example: '目標を達成することができた。'
    },
    {
      japanese: '挑戦',
      kana: 'ちょうせん',
      vietnamese: 'thử thách, thách thức',
      english: 'challenge',
      type: 'main',
      example: '新しいことに挑戦したい。'
    },
    {
      japanese: '機会',
      kana: 'きかい',
      vietnamese: 'cơ hội',
      english: 'opportunity, chance',
      type: 'main',
      example: 'いい機会だから参加しよう。'
    },
    {
      japanese: '条件',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition, requirement',
      type: 'main',
      example: '参加の条件を確認してください。'
    },
    {
      japanese: '対策',
      kana: 'たいさく',
      vietnamese: 'biện pháp, đối sách',
      english: 'countermeasure, strategy',
      type: 'main',
      example: '地震の対策を立てておくべきだ。'
    },
    {
      japanese: '効果',
      kana: 'こうか',
      vietnamese: 'hiệu quả',
      english: 'effect, result',
      type: 'main',
      example: 'この薬は効果がある。'
    },
    {
      japanese: '役に立つ',
      kana: 'やくにたつ',
      vietnamese: 'có ích, hữu ích',
      english: 'to be useful, to be helpful',
      type: 'main',
      example: 'この本は勉強に役に立つ。'
    },

    // Additional vocabulary — technology and tools
    {
      japanese: '通信',
      kana: 'つうしん',
      vietnamese: 'thông tin, liên lạc',
      english: 'communication, correspondence',
      type: 'additional',
      example: '通信技術が進歩した。'
    },
    {
      japanese: '検索',
      kana: 'けんさく',
      vietnamese: 'tìm kiếm',
      english: 'search, lookup',
      type: 'additional',
      example: 'インターネットで検索した。'
    },
    {
      japanese: '操作',
      kana: 'そうさ',
      vietnamese: 'thao tác, vận hành',
      english: 'operation, handling',
      type: 'additional',
      example: 'このアプリの操作は簡単だ。'
    },
    {
      japanese: '設備',
      kana: 'せつび',
      vietnamese: 'thiết bị, cơ sở vật chất',
      english: 'equipment, facility',
      type: 'additional',
      example: '新しい設備を導入した。'
    },
    {
      japanese: '手順',
      kana: 'てじゅん',
      vietnamese: 'trình tự, thủ tục',
      english: 'procedure, steps',
      type: 'additional',
      example: '作業の手順を説明します。'
    },
    {
      japanese: '仕組み',
      kana: 'しくみ',
      vietnamese: 'cơ chế, cấu trúc',
      english: 'mechanism, structure',
      type: 'additional',
      example: 'この機械の仕組みを教えてください。'
    },
    {
      japanese: '過程',
      kana: 'かてい',
      vietnamese: 'quá trình',
      english: 'process, course',
      type: 'additional',
      example: '成長の過程で多くのことを学んだ。'
    },
    {
      japanese: '実行',
      kana: 'じっこう',
      vietnamese: 'thực hiện, thi hành',
      english: 'execution, implementation',
      type: 'additional',
      example: '計画を実行に移す。'
    },
    {
      japanese: '応用',
      kana: 'おうよう',
      vietnamese: 'ứng dụng',
      english: 'application, applied use',
      type: 'additional',
      example: '基本を応用して問題を解く。'
    },
    {
      japanese: '開発',
      kana: 'かいはつ',
      vietnamese: 'phát triển, khai phát',
      english: 'development (of products/technology)',
      type: 'additional',
      example: '新しい製品を開発している。'
    },
    {
      japanese: '導入',
      kana: 'どうにゅう',
      vietnamese: 'đưa vào, áp dụng',
      english: 'introduction, adoption',
      type: 'additional',
      example: '新しいシステムを導入した。'
    }
  ],
  grammar: [
    {
      pattern: '～ために',
      vietnamese: 'để ~, vì ~',
      english: 'in order to, because of',
      type: 'main',
      explanation: 'Có hai cách dùng: (1) Động từ dạng từ điển / Danh từ の + ために = để ~ (mục đích). (2) Động từ た-form / Tính từ / Danh từ の + ために = vì ~ (nguyên nhân). Chủ ngữ của hai vế phải giống nhau khi dùng nghĩa mục đích.',
      examples: [
        {
          japanese: '日本語を勉強するために日本に来た。',
          vietnamese: 'Tôi đến Nhật để học tiếng Nhật.',
          english: 'I came to Japan in order to study Japanese.',
          type: 'main'
        },
        {
          japanese: '台風のために電車が止まった。',
          vietnamese: 'Vì bão nên tàu điện đã dừng.',
          english: 'The train stopped because of the typhoon.',
          type: 'main'
        },
        {
          japanese: '健康のために毎日歩いている。',
          vietnamese: 'Vì sức khỏe nên tôi đi bộ mỗi ngày.',
          english: 'I walk every day for my health.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ように',
      vietnamese: 'để mà ~, sao cho ~',
      english: 'so that, in order to (indirect purpose)',
      type: 'main',
      explanation: 'Diễn tả mục đích gián tiếp, thường dùng khi kết quả nằm ngoài kiểm soát trực tiếp. Dùng với động từ dạng khả năng hoặc động từ tự động từ + ように。Khác ために ở chỗ ように dùng khi không kiểm soát trực tiếp kết quả.',
      examples: [
        {
          japanese: '忘れないようにメモした。',
          vietnamese: 'Tôi đã ghi chú để không quên.',
          english: 'I took notes so that I would not forget.',
          type: 'main'
        },
        {
          japanese: '聞こえるように大きい声で話した。',
          vietnamese: 'Tôi nói to để mọi người nghe được.',
          english: 'I spoke loudly so that everyone could hear.',
          type: 'main'
        },
        {
          japanese: '遅刻しないように早く起きた。',
          vietnamese: 'Tôi dậy sớm để không bị trễ.',
          english: 'I woke up early so as not to be late.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～のに（目的）',
      vietnamese: '~ để dùng cho, ~ cần để',
      english: 'for the purpose of, needed for',
      type: 'main',
      explanation: 'Dùng với nghĩa mục đích/công dụng: Động từ dạng từ điển + のに + cần thiết/tốt/tiện lợi. Khác với のに (mặc dù). Ở đây のに = のために (rút gọn), thường đi với các tính từ như 便利、必要、時間がかかる.',
      examples: [
        {
          japanese: 'この道具は料理を作るのに便利だ。',
          vietnamese: 'Dụng cụ này tiện lợi để nấu ăn.',
          english: 'This tool is convenient for cooking.',
          type: 'main'
        },
        {
          japanese: '駅まで歩くのに20分かかる。',
          vietnamese: 'Đi bộ đến nhà ga mất 20 phút.',
          english: 'It takes 20 minutes to walk to the station.',
          type: 'main'
        },
        {
          japanese: 'レポートを書くのに資料が必要だ。',
          vietnamese: 'Cần tài liệu để viết báo cáo.',
          english: 'Materials are needed to write the report.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～によって / ～により',
      vietnamese: 'bằng ~, do ~, tùy theo ~',
      english: 'by means of, depending on, due to',
      type: 'main',
      explanation: 'Có nhiều cách dùng: (1) Phương tiện/cách thức: ～によって = bằng cách. (2) Nguyên nhân: ～により = do. (3) Tùy thuộc: ～によって異なる = khác nhau tùy theo. (4) Bị động: ～によって作られた = được tạo ra bởi.',
      examples: [
        {
          japanese: 'この小説は村上春樹によって書かれた。',
          vietnamese: 'Tiểu thuyết này được viết bởi Murakami Haruki.',
          english: 'This novel was written by Murakami Haruki.',
          type: 'main'
        },
        {
          japanese: '国によって文化が違う。',
          vietnamese: 'Văn hóa khác nhau tùy theo từng quốc gia.',
          english: 'Culture differs depending on the country.',
          type: 'main'
        },
        {
          japanese: '地震により大きな被害が出た。',
          vietnamese: 'Do động đất mà thiệt hại lớn đã xảy ra.',
          english: 'Great damage occurred due to the earthquake.',
          type: 'additional'
        }
      ]
    }
  ]
};
