/**
 * N3 Core Lessons — Lesson 03
 * Conditionals (Điều kiện)
 */

import type { LessonData } from '$lib/types';

export const LESSON_03_DATA: LessonData = {
  lessonNumber: 3,
  title: '条件 (Điều kiện / Conditionals)',
  vocabulary: [
    // Situations & Outcomes
    {
      japanese: '条件',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition, requirement',
      type: 'main',
      example: 'この条件なら、引き受けます。'
    },
    {
      japanese: '場合',
      kana: 'ばあい',
      vietnamese: 'trường hợp',
      english: 'case, situation',
      type: 'main',
      example: '雨の場合は中止します。'
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
      japanese: '原因',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause, reason',
      type: 'main',
      example: '事故の原因を調べています。'
    },
    {
      japanese: '影響',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence, effect',
      type: 'main',
      example: '天気が計画に影響します。'
    },
    {
      japanese: '可能性',
      kana: 'かのうせい',
      vietnamese: 'khả năng, tính khả thi',
      english: 'possibility',
      type: 'main',
      example: '成功する可能性が高いです。'
    },

    // Weather
    {
      japanese: '天気予報',
      kana: 'てんきよほう',
      vietnamese: 'dự báo thời tiết',
      english: 'weather forecast',
      type: 'main',
      example: '天気予報を確認してください。'
    },
    {
      japanese: '晴れる',
      kana: 'はれる',
      vietnamese: 'nắng, trời quang',
      english: 'to be sunny, to clear up',
      type: 'main',
      example: '明日晴れたら、ピクニックに行きます。'
    },
    {
      japanese: '曇る',
      kana: 'くもる',
      vietnamese: 'âm u, nhiều mây',
      english: 'to be cloudy',
      type: 'main',
      example: '午後から曇るそうです。'
    },
    {
      japanese: '降る',
      kana: 'ふる',
      vietnamese: 'rơi (mưa, tuyết)',
      english: 'to fall (rain, snow)',
      type: 'main',
      example: '雨が降れば、試合は中止です。'
    },
    {
      japanese: '止む',
      kana: 'やむ',
      vietnamese: 'tạnh (mưa)',
      english: 'to stop (rain)',
      type: 'main',
      example: '雨が止んだら、出かけましょう。'
    },
    {
      japanese: '気温',
      kana: 'きおん',
      vietnamese: 'nhiệt độ không khí',
      english: 'air temperature',
      type: 'main',
      example: '気温が下がると、風邪をひきやすい。'
    },

    // Plans & Actions
    {
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'dự định, kế hoạch',
      english: 'plan, schedule',
      type: 'main',
      example: '来週の予定を教えてください。'
    },
    {
      japanese: '準備する',
      kana: 'じゅんびする',
      vietnamese: 'chuẩn bị',
      english: 'to prepare',
      type: 'main',
      example: '早めに準備すれば、安心です。'
    },
    {
      japanese: '申し込む',
      kana: 'もうしこむ',
      vietnamese: 'đăng ký, nộp đơn',
      english: 'to apply, to register',
      type: 'main',
      example: '早く申し込まないと、間に合いません。'
    },
    {
      japanese: '間に合う',
      kana: 'まにあう',
      vietnamese: 'kịp giờ, đúng lúc',
      english: 'to be on time',
      type: 'main',
      example: '急げば間に合います。'
    },
    {
      japanese: '遅刻する',
      kana: 'ちこくする',
      vietnamese: 'đến muộn, trễ',
      english: 'to be late',
      type: 'main',
      example: '寝坊したら遅刻します。'
    },
    {
      japanese: '合格する',
      kana: 'ごうかくする',
      vietnamese: 'đậu, thi đỗ',
      english: 'to pass (an exam)',
      type: 'main',
      example: '頑張れば合格できます。'
    },
    {
      japanese: '失敗する',
      kana: 'しっぱいする',
      vietnamese: 'thất bại',
      english: 'to fail',
      type: 'main',
      example: '準備しなければ失敗します。'
    },
    {
      japanese: '成功する',
      kana: 'せいこうする',
      vietnamese: 'thành công',
      english: 'to succeed',
      type: 'main',
      example: '努力すれば成功します。'
    },
    {
      japanese: '中止する',
      kana: 'ちゅうしする',
      vietnamese: 'hủy bỏ, ngừng lại',
      english: 'to cancel, to suspend',
      type: 'main',
      example: '雨の場合は中止します。'
    },
    {
      japanese: '延期する',
      kana: 'えんきする',
      vietnamese: 'hoãn lại, dời lại',
      english: 'to postpone',
      type: 'additional',
      example: '台風なら、イベントは延期されます。'
    },

    // Adjectives & States
    {
      japanese: '必要',
      kana: 'ひつよう',
      vietnamese: 'cần thiết',
      english: 'necessary, needed',
      type: 'main',
      example: '申し込みには写真が必要です。'
    },
    {
      japanese: '便利',
      kana: 'べんり',
      vietnamese: 'tiện lợi',
      english: 'convenient',
      type: 'main',
      example: '駅に近ければ便利です。'
    },
    {
      japanese: '不便',
      kana: 'ふべん',
      vietnamese: 'bất tiện',
      english: 'inconvenient',
      type: 'main',
      example: '車がないと不便です。'
    },
    {
      japanese: '安全',
      kana: 'あんぜん',
      vietnamese: 'an toàn',
      english: 'safe',
      type: 'main',
      example: '気をつければ安全です。'
    },
    {
      japanese: '危険',
      kana: 'きけん',
      vietnamese: 'nguy hiểm',
      english: 'dangerous',
      type: 'main',
      example: '注意しないと危険です。'
    },
    {
      japanese: '正しい',
      kana: 'ただしい',
      vietnamese: 'đúng, chính xác',
      english: 'correct',
      type: 'main',
      example: '答えが正しければ、点がもらえます。'
    },
    {
      japanese: '適当',
      kana: 'てきとう',
      vietnamese: 'phù hợp, qua loa',
      english: 'suitable, appropriate',
      type: 'additional',
      example: '適当にやると失敗しますよ。'
    },

    // Additional
    {
      japanese: '努力する',
      kana: 'どりょくする',
      vietnamese: 'nỗ lực, cố gắng',
      english: 'to make an effort',
      type: 'main',
      example: '努力すれば、夢は叶います。'
    },
    {
      japanese: '確認する',
      kana: 'かくにんする',
      vietnamese: 'xác nhận, kiểm tra',
      english: 'to confirm, to check',
      type: 'main',
      example: '出発前に確認してください。'
    },
    {
      japanese: '寝坊する',
      kana: 'ねぼうする',
      vietnamese: 'ngủ quên, ngủ nướng',
      english: 'to oversleep',
      type: 'additional',
      example: '寝坊しなければ、遅刻しません。'
    }
  ],
  grammar: [
    {
      pattern: '〜ば (仮定形)',
      vietnamese: 'nếu ~',
      english: 'if ~ (hypothetical)',
      type: 'main',
      explanation: 'Diễn tả điều kiện giả định. Động từ nhóm I: う段→え段+ば (行く→行けば). Nhóm II: る→れば (食べる→食べれば). い形: い→ければ. な形/danh từ: なら/であれば.',
      examples: [
        {
          japanese: '安ければ、買います。',
          vietnamese: 'Nếu rẻ thì tôi sẽ mua.',
          english: 'If it is cheap, I will buy it.',
          type: 'main'
        },
        {
          japanese: '頑張れば、合格できます。',
          vietnamese: 'Nếu cố gắng, bạn sẽ thi đỗ.',
          english: 'If you try hard, you can pass.',
          type: 'main'
        },
        {
          japanese: '天気がよければ、サッカーをしましょう。',
          vietnamese: 'Nếu thời tiết đẹp, chúng ta chơi bóng đá nhé.',
          english: 'If the weather is good, let us play soccer.',
          type: 'main'
        },
        {
          japanese: '駅に近ければ便利です。',
          vietnamese: 'Nếu gần ga thì tiện lợi.',
          english: 'If it is close to the station, it is convenient.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜たら',
      vietnamese: 'khi ~, nếu ~ thì',
      english: 'when/if ~',
      type: 'main',
      explanation: 'Diễn tả điều kiện hoặc sự kiện xảy ra trước hành động tiếp theo. Dùng được cho giả định và thực tế. Cấu trúc: thể た + ら.',
      examples: [
        {
          japanese: '雨が止んだら、出かけましょう。',
          vietnamese: 'Khi mưa tạnh, chúng ta đi ra ngoài nhé.',
          english: 'When the rain stops, let us go out.',
          type: 'main'
        },
        {
          japanese: '家に帰ったら、電話してください。',
          vietnamese: 'Khi về đến nhà, hãy gọi điện cho tôi.',
          english: 'When you get home, please call me.',
          type: 'main'
        },
        {
          japanese: '寝坊したら、遅刻します。',
          vietnamese: 'Nếu ngủ quên thì sẽ đến muộn.',
          english: 'If you oversleep, you will be late.',
          type: 'main'
        },
        {
          japanese: '薬を飲んだら、少し楽になりました。',
          vietnamese: 'Sau khi uống thuốc thì thấy đỡ hơn một chút.',
          english: 'After I took the medicine, I felt a bit better.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜なら',
      vietnamese: 'nếu nói về ~ thì, nếu là ~ thì',
      english: 'if it is the case that ~',
      type: 'main',
      explanation: 'Dùng khi đưa ra lời khuyên hoặc phản hồi dựa trên thông tin vừa nghe. Thường dùng trong hội thoại khi nhận thông tin từ người khác.',
      examples: [
        {
          japanese: '日本に行くなら、京都がおすすめです。',
          vietnamese: 'Nếu đi Nhật thì tôi khuyên nên đến Kyoto.',
          english: 'If you go to Japan, I recommend Kyoto.',
          type: 'main'
        },
        {
          japanese: '安いなら、買いたいです。',
          vietnamese: 'Nếu rẻ thì tôi muốn mua.',
          english: 'If it is cheap, I want to buy it.',
          type: 'main'
        },
        {
          japanese: '暇なら、映画を見に行きませんか。',
          vietnamese: 'Nếu rảnh thì đi xem phim không?',
          english: 'If you are free, shall we go see a movie?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜と (条件)',
      vietnamese: 'hễ ~ thì (quy luật, thói quen)',
      english: 'whenever ~, if ~ then always',
      type: 'main',
      explanation: 'Diễn tả kết quả tất yếu, quy luật tự nhiên hoặc thói quen. Không dùng cho ý chí, mệnh lệnh, yêu cầu.',
      examples: [
        {
          japanese: 'このボタンを押すと、ドアが開きます。',
          vietnamese: 'Hễ nhấn nút này thì cửa mở.',
          english: 'If you press this button, the door opens.',
          type: 'main'
        },
        {
          japanese: '春になると、桜が咲きます。',
          vietnamese: 'Hễ đến mùa xuân thì hoa anh đào nở.',
          english: 'When spring comes, cherry blossoms bloom.',
          type: 'main'
        },
        {
          japanese: '気温が下がると、風邪をひきやすい。',
          vietnamese: 'Khi nhiệt độ giảm thì dễ bị cảm.',
          english: 'When the temperature drops, it is easy to catch a cold.',
          type: 'main'
        },
        {
          japanese: 'まっすぐ行くと、右に銀行があります。',
          vietnamese: 'Đi thẳng thì bên phải có ngân hàng.',
          english: 'If you go straight, there is a bank on the right.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ても／〜でも',
      vietnamese: 'dù ~ cũng, cho dù ~ vẫn',
      english: 'even if ~, even though ~',
      type: 'additional',
      explanation: 'Diễn tả điều kiện nhượng bộ - dù điều kiện đó xảy ra, kết quả vẫn không thay đổi.',
      examples: [
        {
          japanese: '雨が降っても、試合は行います。',
          vietnamese: 'Dù trời mưa, trận đấu vẫn diễn ra.',
          english: 'Even if it rains, the game will take place.',
          type: 'main'
        },
        {
          japanese: '高くても、買いたいです。',
          vietnamese: 'Dù đắt tôi vẫn muốn mua.',
          english: 'Even if it is expensive, I want to buy it.',
          type: 'main'
        },
        {
          japanese: '何度説明しても、分からない。',
          vietnamese: 'Dù giải thích bao nhiêu lần cũng không hiểu.',
          english: 'No matter how many times I explain, they do not understand.',
          type: 'main'
        }
      ]
    }
  ]
};
