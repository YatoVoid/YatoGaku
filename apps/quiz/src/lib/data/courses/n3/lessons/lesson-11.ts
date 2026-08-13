/**
 * N3 Lessons — Lesson 11: Change and Result
 * 変化・結果 (Biến đổi và kết quả)
 */

import type { LessonData } from '$lib/types';

export const LESSON_11_DATA: LessonData = {
  lessonNumber: 11,
  title: '変化・結果 (Biến đổi và kết quả)',
  vocabulary: [
    // Change and transformation verbs
    {
      japanese: '変わる',
      kana: 'かわる',
      vietnamese: 'thay đổi (tự)',
      english: 'to change (intransitive)',
      type: 'main',
      example: '季節が変わると景色も変わる。'
    },
    {
      japanese: '変える',
      kana: 'かえる',
      vietnamese: 'thay đổi (tha)',
      english: 'to change (transitive)',
      type: 'main',
      example: '計画を変えることにした。'
    },
    {
      japanese: '増える',
      kana: 'ふえる',
      vietnamese: 'tăng lên',
      english: 'to increase (intransitive)',
      type: 'main',
      example: '人口が増えている。'
    },
    {
      japanese: '増やす',
      kana: 'ふやす',
      vietnamese: 'tăng, làm tăng',
      english: 'to increase (transitive)',
      type: 'main',
      example: '語彙を増やすために毎日読書する。'
    },
    {
      japanese: '減る',
      kana: 'へる',
      vietnamese: 'giảm đi',
      english: 'to decrease (intransitive)',
      type: 'main',
      example: '最近、体重が減った。'
    },
    {
      japanese: '減らす',
      kana: 'へらす',
      vietnamese: 'giảm, làm giảm',
      english: 'to decrease (transitive)',
      type: 'main',
      example: '費用を減らす方法を考えている。'
    },
    {
      japanese: '進む',
      kana: 'すすむ',
      vietnamese: 'tiến lên, tiến bộ',
      english: 'to advance, to progress',
      type: 'main',
      example: '工事が順調に進んでいる。'
    },
    {
      japanese: '発展',
      kana: 'はってん',
      vietnamese: 'phát triển',
      english: 'development, progress',
      type: 'main',
      example: 'この地域は大きく発展した。'
    },
    {
      japanese: '成長',
      kana: 'せいちょう',
      vietnamese: 'trưởng thành, phát triển',
      english: 'growth, development',
      type: 'main',
      example: '子どもの成長は早い。'
    },
    {
      japanese: '改善',
      kana: 'かいぜん',
      vietnamese: 'cải thiện',
      english: 'improvement',
      type: 'main',
      example: '環境を改善する必要がある。'
    },
    {
      japanese: '完成',
      kana: 'かんせい',
      vietnamese: 'hoàn thành',
      english: 'completion',
      type: 'main',
      example: 'レポートがやっと完成した。'
    },
    {
      japanese: '失敗',
      kana: 'しっぱい',
      vietnamese: 'thất bại',
      english: 'failure',
      type: 'main',
      example: '試験に失敗してしまった。'
    },
    {
      japanese: '成功',
      kana: 'せいこう',
      vietnamese: 'thành công',
      english: 'success',
      type: 'main',
      example: '実験が成功した。'
    },
    {
      japanese: '影響',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence, impact',
      type: 'main',
      example: '天気が気分に影響を与える。'
    },
    {
      japanese: '結果',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result, outcome',
      type: 'main',
      example: '努力の結果、合格できた。'
    },
    {
      japanese: '原因',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause, reason',
      type: 'main',
      example: '事故の原因を調べている。'
    },
    {
      japanese: '変化',
      kana: 'へんか',
      vietnamese: 'biến đổi, sự thay đổi',
      english: 'change, transformation',
      type: 'main',
      example: '気温の変化が激しい。'
    },
    {
      japanese: '進歩',
      kana: 'しんぽ',
      vietnamese: 'tiến bộ',
      english: 'progress, advancement',
      type: 'main',
      example: '技術の進歩は速い。'
    },
    {
      japanese: '回復',
      kana: 'かいふく',
      vietnamese: 'hồi phục',
      english: 'recovery',
      type: 'main',
      example: '体調が回復した。'
    },
    {
      japanese: '悪化',
      kana: 'あっか',
      vietnamese: 'xấu đi, ác hóa',
      english: 'deterioration, worsening',
      type: 'main',
      example: '関係が悪化してしまった。'
    },

    // Additional vocabulary
    {
      japanese: '慣れる',
      kana: 'なれる',
      vietnamese: 'quen, thích nghi',
      english: 'to get used to',
      type: 'additional',
      example: '新しい生活に慣れてきた。'
    },
    {
      japanese: '諦める',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ',
      english: 'to give up',
      type: 'additional',
      example: '夢を諦めないでください。'
    },
    {
      japanese: '決定',
      kana: 'けってい',
      vietnamese: 'quyết định',
      english: 'decision',
      type: 'additional',
      example: '重要な決定をしなければならない。'
    },
    {
      japanese: '状況',
      kana: 'じょうきょう',
      vietnamese: 'tình hình, tình trạng',
      english: 'situation, circumstances',
      type: 'additional',
      example: '現在の状況を説明してください。'
    },
    {
      japanese: '急に',
      kana: 'きゅうに',
      vietnamese: 'đột ngột',
      english: 'suddenly',
      type: 'additional',
      example: '急に雨が降り出した。'
    },
    {
      japanese: '徐々に',
      kana: 'じょじょに',
      vietnamese: 'dần dần',
      english: 'gradually',
      type: 'additional',
      example: '徐々に日本語が上手になった。'
    },
    {
      japanese: '次第に',
      kana: 'しだいに',
      vietnamese: 'dần dần, lần lượt',
      english: 'gradually, little by little',
      type: 'additional',
      example: '次第に暖かくなってきた。'
    },
    {
      japanese: '予想',
      kana: 'よそう',
      vietnamese: 'dự đoán',
      english: 'prediction, expectation',
      type: 'additional',
      example: '予想以上の結果だった。'
    },
    {
      japanese: '実現',
      kana: 'じつげん',
      vietnamese: 'thực hiện, hiện thực hóa',
      english: 'realization, achievement',
      type: 'additional',
      example: '夢が実現した。'
    },
    {
      japanese: '維持',
      kana: 'いじ',
      vietnamese: 'duy trì',
      english: 'maintenance, preservation',
      type: 'additional',
      example: '健康を維持するために運動している。'
    },
    {
      japanese: '消える',
      kana: 'きえる',
      vietnamese: 'biến mất, tắt',
      english: 'to disappear, to go out',
      type: 'additional',
      example: '電気が消えてしまった。'
    },
    {
      japanese: '壊れる',
      kana: 'こわれる',
      vietnamese: 'bị hỏng, bị vỡ',
      english: 'to break (intransitive)',
      type: 'additional',
      example: 'パソコンが壊れてしまった。'
    }
  ],
  grammar: [
    {
      pattern: '～ようになる',
      vietnamese: 'trở nên có thể ~, đã bắt đầu ~',
      english: 'to come to be able to, to reach a point where',
      type: 'main',
      explanation: 'Diễn tả sự thay đổi trạng thái hoặc khả năng theo thời gian. Dùng với động từ dạng từ điển + ようになる (thay đổi tích cực) hoặc ない + ようになる (thay đổi tiêu cực).',
      examples: [
        {
          japanese: '日本語が話せるようになった。',
          vietnamese: 'Tôi đã trở nên có thể nói tiếng Nhật.',
          english: 'I have come to be able to speak Japanese.',
          type: 'main'
        },
        {
          japanese: '毎朝ジョギングするようになった。',
          vietnamese: 'Tôi đã bắt đầu chạy bộ mỗi sáng.',
          english: 'I have started jogging every morning.',
          type: 'main'
        },
        {
          japanese: 'お酒を飲まないようになった。',
          vietnamese: 'Tôi đã không còn uống rượu nữa.',
          english: 'I have stopped drinking alcohol.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことになる',
      vietnamese: 'được quyết định rằng ~, hóa ra là ~',
      english: 'it has been decided that, it turns out that',
      type: 'main',
      explanation: 'Diễn tả một quyết định được đưa ra bởi người khác hoặc tổ chức (không phải bản thân mình quyết). Thường dùng trong ngữ cảnh công việc, trường học.',
      examples: [
        {
          japanese: '来月、大阪に転勤することになった。',
          vietnamese: 'Tháng sau, tôi sẽ được chuyển công tác đến Osaka.',
          english: 'It has been decided that I will transfer to Osaka next month.',
          type: 'main'
        },
        {
          japanese: '会議は来週に延期することになった。',
          vietnamese: 'Cuộc họp đã được quyết định hoãn sang tuần sau.',
          english: 'It has been decided that the meeting will be postponed to next week.',
          type: 'main'
        },
        {
          japanese: '新しい規則ができることになった。',
          vietnamese: 'Đã được quyết định là sẽ có quy tắc mới.',
          english: 'It has been decided that new rules will be established.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことにする',
      vietnamese: 'quyết định ~',
      english: 'to decide to',
      type: 'main',
      explanation: 'Diễn tả quyết định của bản thân mình. Dùng với động từ dạng từ điển + ことにする (quyết định làm) hoặc ない + ことにする (quyết định không làm).',
      examples: [
        {
          japanese: '毎日運動することにした。',
          vietnamese: 'Tôi đã quyết định tập thể dục mỗi ngày.',
          english: 'I decided to exercise every day.',
          type: 'main'
        },
        {
          japanese: 'タバコをやめることにした。',
          vietnamese: 'Tôi đã quyết định bỏ thuốc lá.',
          english: 'I decided to quit smoking.',
          type: 'main'
        },
        {
          japanese: '甘いものを食べないことにしている。',
          vietnamese: 'Tôi đang giữ thói quen không ăn đồ ngọt.',
          english: 'I make it a habit not to eat sweets.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～てしまう',
      vietnamese: 'đã ~ mất rồi, ~ hoàn toàn',
      english: 'to end up doing, to do completely (often with regret)',
      type: 'main',
      explanation: 'Có hai nghĩa chính: (1) hoàn thành hành động hoàn toàn, (2) diễn tả sự tiếc nuối, hối hận về việc đã xảy ra. Trong khẩu ngữ thường rút gọn thành ～ちゃう (te-form + しまう → ちゃう).',
      examples: [
        {
          japanese: '財布を落としてしまった。',
          vietnamese: 'Tôi đã đánh rơi ví mất rồi.',
          english: 'I ended up dropping my wallet (unfortunately).',
          type: 'main'
        },
        {
          japanese: 'ケーキを全部食べてしまった。',
          vietnamese: 'Tôi đã ăn hết sạch bánh mất rồi.',
          english: 'I ate all the cake (completely).',
          type: 'main'
        },
        {
          japanese: '約束を忘れてしまった。',
          vietnamese: 'Tôi đã quên mất lời hẹn.',
          english: 'I ended up forgetting the promise.',
          type: 'additional'
        }
      ]
    }
  ]
};
