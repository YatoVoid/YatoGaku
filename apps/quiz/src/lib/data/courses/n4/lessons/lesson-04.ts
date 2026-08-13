/**
 * N4 Core Lessons — Lesson 04
 * Time Expressions and Frequency
 */

import type { LessonData } from '$lib/types';

export const LESSON_04_DATA: LessonData = {
  lessonNumber: 4,
  title: '時間表現と頻度 (Biểu hiện thời gian và tần suất)',
  vocabulary: [
    // Time Actions
    {
      japanese: 'かかる',
      kana: 'かかる',
      vietnamese: 'mất (thời gian/tiền)',
      english: 'to take (time/money)',
      type: 'main',
      example: '2時間かかります。'
    },
    {
      japanese: '遅れる',
      kana: 'おくれる',
      vietnamese: 'trễ, muộn',
      english: 'to be late',
      type: 'main',
      example: '電車が遅れました。'
    },
    {
      japanese: '間に合う',
      kana: 'まにあう',
      vietnamese: 'kịp giờ',
      english: 'to be in time',
      type: 'main',
      example: '会議に間に合いました。'
    },
    {
      japanese: '続く',
      kana: 'つづく',
      vietnamese: 'tiếp tục, kéo dài',
      english: 'to continue, to last',
      type: 'main',
      example: '雨が3日間続きました。'
    },

    // Weather & Nature
    {
      japanese: '降る',
      kana: 'ふる',
      vietnamese: 'rơi, mưa',
      english: 'to fall (rain/snow)',
      type: 'main',
      example: '明日は雨が降ります。'
    },
    {
      japanese: '晴れる',
      kana: 'はれる',
      vietnamese: 'nắng, quang đãng',
      english: 'to be sunny, to clear up',
      type: 'main',
      example: '明日は晴れるでしょう。'
    },
    {
      japanese: '曇る',
      kana: 'くもる',
      vietnamese: 'có mây, u ám',
      english: 'to be cloudy',
      type: 'main',
      example: '今日は曇っています。'
    },
    {
      japanese: '吹く',
      kana: 'ふく',
      vietnamese: 'thổi (gió)',
      english: 'to blow (wind)',
      type: 'main',
      example: '強い風が吹いています。'
    },
    {
      japanese: '咲く',
      kana: 'さく',
      vietnamese: 'nở (hoa)',
      english: 'to bloom',
      type: 'main',
      example: '桜が咲きました。'
    },

    // Starting & Ending Times
    {
      japanese: '出発する',
      kana: 'しゅっぱつする',
      vietnamese: 'khởi hành',
      english: 'to depart',
      type: 'main',
      example: '9時に出発します。'
    },
    {
      japanese: '到着する',
      kana: 'とうちゃくする',
      vietnamese: 'đến nơi',
      english: 'to arrive',
      type: 'main',
      example: '午後3時に到着しました。'
    },
    {
      japanese: '開く',
      kana: 'ひらく',
      vietnamese: 'mở (cửa, cuộc họp)',
      english: 'to open, to hold (meeting)',
      type: 'main',
      example: '会議が開かれました。'
    },
    {
      japanese: '閉まる',
      kana: 'しまる',
      vietnamese: 'đóng (tự động)',
      english: 'to close, to be closed',
      type: 'main',
      example: 'ドアが閉まりました。'
    },

    // Time Periods - Days
    {
      japanese: '今日',
      kana: 'きょう',
      vietnamese: 'hôm nay',
      english: 'today',
      type: 'main',
      example: '今日は暑いです。'
    },
    {
      japanese: '明日',
      kana: 'あした',
      vietnamese: 'ngày mai',
      english: 'tomorrow',
      type: 'main',
      example: '明日会いましょう。'
    },
    {
      japanese: '明後日',
      kana: 'あさって',
      vietnamese: 'ngày kia',
      english: 'day after tomorrow',
      type: 'main',
      example: '明後日試験があります。'
    },
    {
      japanese: '一昨日',
      kana: 'おととい',
      vietnamese: 'hôm kia',
      english: 'day before yesterday',
      type: 'main',
      example: '一昨日買いました。'
    },
    {
      japanese: '今週',
      kana: 'こんしゅう',
      vietnamese: 'tuần này',
      english: 'this week',
      type: 'main',
      example: '今週は忙しいです。'
    },
    {
      japanese: '来週',
      kana: 'らいしゅう',
      vietnamese: 'tuần sau',
      english: 'next week',
      type: 'main',
      example: '来週旅行します。'
    },
    {
      japanese: '先週',
      kana: 'せんしゅう',
      vietnamese: 'tuần trước',
      english: 'last week',
      type: 'main',
      example: '先週会いました。'
    },
    {
      japanese: '今月',
      kana: 'こんげつ',
      vietnamese: 'tháng này',
      english: 'this month',
      type: 'main',
      example: '今月は雨が多いです。'
    },
    {
      japanese: '来月',
      kana: 'らいげつ',
      vietnamese: 'tháng sau',
      english: 'next month',
      type: 'main',
      example: '来月日本に行きます。'
    },
    {
      japanese: '先月',
      kana: 'せんげつ',
      vietnamese: 'tháng trước',
      english: 'last month',
      type: 'main',
      example: '先月引っ越しました。'
    },
    {
      japanese: '今年',
      kana: 'ことし',
      vietnamese: 'năm nay',
      english: 'this year',
      type: 'main',
      example: '今年は暖かいです。'
    },
    {
      japanese: '来年',
      kana: 'らいねん',
      vietnamese: 'năm sau',
      english: 'next year',
      type: 'main',
      example: '来年結婚します。'
    },
    {
      japanese: '去年',
      kana: 'きょねん',
      vietnamese: 'năm ngoái',
      english: 'last year',
      type: 'main',
      example: '去年日本に行きました。'
    },

    // Time of Day
    {
      japanese: '朝',
      kana: 'あさ',
      vietnamese: 'buổi sáng',
      english: 'morning',
      type: 'main',
      example: '朝ご飯を食べます。'
    },
    {
      japanese: '昼',
      kana: 'ひる',
      vietnamese: 'buổi trưa',
      english: 'noon, daytime',
      type: 'main',
      example: '昼ご飯を食べました。'
    },
    {
      japanese: '夕方',
      kana: 'ゆうがた',
      vietnamese: 'buổi chiều tối',
      english: 'evening',
      type: 'main',
      example: '夕方散歩します。'
    },
    {
      japanese: '夜',
      kana: 'よる',
      vietnamese: 'buổi tối, đêm',
      english: 'night',
      type: 'main',
      example: '夜勉強します。'
    },
    {
      japanese: '夜中',
      kana: 'よなか',
      vietnamese: 'nửa đêm',
      english: 'midnight',
      type: 'main',
      example: '夜中に起きました。'
    },
    {
      japanese: '午前',
      kana: 'ごぜん',
      vietnamese: 'buổi sáng (AM)',
      english: 'morning, a.m.',
      type: 'main',
      example: '午前9時に始まります。'
    },
    {
      japanese: '午後',
      kana: 'ごご',
      vietnamese: 'buổi chiều (PM)',
      english: 'afternoon, p.m.',
      type: 'main',
      example: '午後3時に終わります。'
    },

    // Seasons
    {
      japanese: '春',
      kana: 'はる',
      vietnamese: 'mùa xuân',
      english: 'spring',
      type: 'main',
      example: '春は桜が咲きます。'
    },
    {
      japanese: '夏',
      kana: 'なつ',
      vietnamese: 'mùa hè',
      english: 'summer',
      type: 'main',
      example: '夏は暑いです。'
    },
    {
      japanese: '秋',
      kana: 'あき',
      vietnamese: 'mùa thu',
      english: 'autumn, fall',
      type: 'main',
      example: '秋は涼しいです。'
    },
    {
      japanese: '冬',
      kana: 'ふゆ',
      vietnamese: 'mùa đông',
      english: 'winter',
      type: 'main',
      example: '冬は寒いです。'
    },

    // Duration & Frequency
    {
      japanese: '時間',
      kana: 'じかん',
      vietnamese: 'thời gian, giờ',
      english: 'time, hour',
      type: 'main',
      example: '2時間かかります。'
    },
    {
      japanese: '〜時',
      kana: '〜じ',
      vietnamese: '~ giờ',
      english: "~ o'clock",
      type: 'main',
      example: '9時に起きます。'
    },
    {
      japanese: '〜分',
      kana: '〜ふん/ぷん',
      vietnamese: '~ phút',
      english: '~ minute(s)',
      type: 'main',
      example: '30分待ちました。'
    },
    {
      japanese: '半',
      kana: 'はん',
      vietnamese: 'rưỡi',
      english: 'half',
      type: 'main',
      example: '9時半に会いましょう。'
    },
    {
      japanese: '〜日',
      kana: '〜にち/か',
      vietnamese: '~ ngày',
      english: '~ day(s)',
      type: 'main',
      example: '3日間休みました。'
    },
    {
      japanese: '〜週間',
      kana: '〜しゅうかん',
      vietnamese: '~ tuần',
      english: '~ week(s)',
      type: 'main',
      example: '2週間旅行しました。'
    },
    {
      japanese: '〜ヶ月',
      kana: '〜かげつ',
      vietnamese: '~ tháng',
      english: '~ month(s)',
      type: 'main',
      example: '3ヶ月勉強しました。'
    },
    {
      japanese: '〜年',
      kana: '〜ねん',
      vietnamese: '~ năm',
      english: '~ year(s)',
      type: 'main',
      example: '5年働いています。'
    },
    {
      japanese: '〜間',
      kana: '〜かん',
      vietnamese: 'trong khoảng ~',
      english: 'for ~ (duration)',
      type: 'main',
      example: '1時間待ちました。'
    },

    // Frequency Adverbs
    {
      japanese: 'よく',
      kana: 'よく',
      vietnamese: 'thường xuyên',
      english: 'often, well',
      type: 'main',
      example: 'よく映画を見ます。'
    },
    {
      japanese: 'ときどき',
      kana: 'ときどき',
      vietnamese: 'thỉnh thoảng',
      english: 'sometimes',
      type: 'main',
      example: 'ときどき図書館に行きます。'
    },
    {
      japanese: 'あまり',
      kana: 'あまり',
      vietnamese: 'không lắm',
      english: 'not much, not often',
      type: 'main',
      example: 'あまり見ません。'
    },
    {
      japanese: '全く',
      kana: 'まったく',
      vietnamese: 'hoàn toàn, hết sức',
      english: 'completely, at all',
      type: 'main',
      example: '全く分かりません。'
    },

    // Weather Nouns
    {
      japanese: '雨',
      kana: 'あめ',
      vietnamese: 'mưa',
      english: 'rain',
      type: 'main',
      example: '雨が降っています。'
    },
    {
      japanese: '雪',
      kana: 'ゆき',
      vietnamese: 'tuyết',
      english: 'snow',
      type: 'main',
      example: '雪が降りました。'
    },
    {
      japanese: '風',
      kana: 'かぜ',
      vietnamese: 'gió',
      english: 'wind',
      type: 'main',
      example: '風が強いです。'
    },
    {
      japanese: '雲',
      kana: 'くも',
      vietnamese: 'mây',
      english: 'cloud',
      type: 'main',
      example: '雲が多いです。'
    },
    {
      japanese: '台風',
      kana: 'たいふう',
      vietnamese: 'bão',
      english: 'typhoon',
      type: 'main',
      example: '台風が来ます。'
    },
    {
      japanese: '桜',
      kana: 'さくら',
      vietnamese: 'hoa anh đào',
      english: 'cherry blossom',
      type: 'main',
      example: '桜が咲きました。'
    },

    // Nature & Place Nouns
    {
      japanese: '海',
      kana: 'うみ',
      vietnamese: 'biển',
      english: 'sea, ocean',
      type: 'main',
      example: '夏、海に行きます。'
    },
    {
      japanese: '山',
      kana: 'やま',
      vietnamese: 'núi',
      english: 'mountain',
      type: 'main',
      example: '山に登りました。'
    },
    {
      japanese: '川',
      kana: 'かわ',
      vietnamese: 'sông',
      english: 'river',
      type: 'main',
      example: '川で泳ぎました。'
    },
    {
      japanese: '空',
      kana: 'そら',
      vietnamese: 'bầu trời',
      english: 'sky',
      type: 'main',
      example: '空が青いです。'
    },

    // Meeting & Events
    {
      japanese: '会議',
      kana: 'かいぎ',
      vietnamese: 'cuộc họp',
      english: 'meeting, conference',
      type: 'main',
      example: '会議に出ます。'
    },
    {
      japanese: '試験',
      kana: 'しけん',
      vietnamese: 'kỳ thi',
      english: 'exam, test',
      type: 'main',
      example: '来週試験があります。'
    },
    {
      japanese: '授業',
      kana: 'じゅぎょう',
      vietnamese: 'buổi học',
      english: 'class, lesson',
      type: 'main',
      example: '授業が始まりました。'
    },
    {
      japanese: '休み',
      kana: 'やすみ',
      vietnamese: 'nghỉ, kỳ nghỉ',
      english: 'holiday, break',
      type: 'main',
      example: '夏休みは長いです。'
    },
    {
      japanese: '夏休み',
      kana: 'なつやすみ',
      vietnamese: 'nghỉ hè',
      english: 'summer vacation',
      type: 'main',
      example: '夏休みに旅行します。'
    },

    // Adjectives - Weather & Temperature
    {
      japanese: '暑い',
      kana: 'あつい',
      vietnamese: 'nóng (thời tiết)',
      english: 'hot (weather)',
      type: 'main',
      example: '今日は暑いです。'
    },
    {
      japanese: '寒い',
      kana: 'さむい',
      vietnamese: 'lạnh',
      english: 'cold',
      type: 'main',
      example: '冬は寒いです。'
    },
    {
      japanese: '涼しい',
      kana: 'すずしい',
      vietnamese: 'mát mẻ',
      english: 'cool',
      type: 'main',
      example: '秋は涼しいです。'
    },
    {
      japanese: '暖かい',
      kana: 'あたたかい',
      vietnamese: 'ấm áp',
      english: 'warm',
      type: 'main',
      example: '春は暖かいです。'
    },
    {
      japanese: '熱い',
      kana: 'あつい',
      vietnamese: 'nóng (đồ vật)',
      english: 'hot (objects)',
      type: 'main',
      example: 'お茶が熱いです。'
    },
    {
      japanese: '冷たい',
      kana: 'つめたい',
      vietnamese: 'lạnh (đồ vật)',
      english: 'cold (objects)',
      type: 'main',
      example: '水が冷たいです。'
    },

    // Other Adjectives
    {
      japanese: '早い',
      kana: 'はやい',
      vietnamese: 'sớm, nhanh',
      english: 'early, fast',
      type: 'main',
      example: '早く起きました。'
    },
    {
      japanese: '遅い',
      kana: 'おそい',
      vietnamese: 'muộn, chậm',
      english: 'late, slow',
      type: 'main',
      example: '今日は遅いです。'
    },
    {
      japanese: '長い',
      kana: 'ながい',
      vietnamese: 'dài',
      english: 'long',
      type: 'main',
      example: '夏休みは長いです。'
    },
    {
      japanese: '短い',
      kana: 'みじかい',
      vietnamese: 'ngắn',
      english: 'short',
      type: 'main',
      example: '冬休みは短いです。'
    },
    {
      japanese: '強い',
      kana: 'つよい',
      vietnamese: 'mạnh',
      english: 'strong',
      type: 'main',
      example: '風が強いです。'
    },
    {
      japanese: '弱い',
      kana: 'よわい',
      vietnamese: 'yếu',
      english: 'weak',
      type: 'main',
      example: '風が弱いです。'
    },
    {
      japanese: '多い',
      kana: 'おおい',
      vietnamese: 'nhiều',
      english: 'many, much',
      type: 'main',
      example: '雨が多いです。'
    },
    {
      japanese: '少ない',
      kana: 'すくない',
      vietnamese: 'ít',
      english: 'few, little',
      type: 'main',
      example: '人が少ないです。'
    },

    // Question Words
    {
      japanese: 'いつ',
      kana: 'いつ',
      vietnamese: 'khi nào',
      english: 'when',
      type: 'main',
      example: 'いつ行きますか。'
    },
    {
      japanese: 'どのくらい',
      kana: 'どのくらい',
      vietnamese: 'bao lâu, bao nhiêu',
      english: 'how long, how much',
      type: 'main',
      example: 'どのくらいかかりますか。'
    },
    {
      japanese: '何時',
      kana: 'なんじ',
      vietnamese: 'mấy giờ',
      english: 'what time',
      type: 'main',
      example: '何時に始まりますか。'
    }
  ],
  grammar: [
    {
      pattern: '〜間に (期間)',
      vietnamese: 'trong khoảng thời gian ~',
      english: 'during ~, while ~',
      type: 'main',
      explanation: 'Diễn tả một hành động xảy ra trong khoảng thời gian nào đó. Cấu trúc: 名詞 + の間に',
      examples: [
        {
          japanese: '夏休みの間に、旅行しました。',
          vietnamese: 'Tôi đã đi du lịch trong kỳ nghỉ hè.',
          english: 'I traveled during summer vacation.',
          type: 'main'
        },
        {
          japanese: '授業の間に、メモを取ります。',
          vietnamese: 'Tôi ghi chú trong giờ học.',
          english: 'I take notes during class.',
          type: 'main'
        },
        {
          japanese: '待っている間に、本を読みました。',
          vietnamese: 'Tôi đọc sách trong lúc đợi.',
          english: 'I read a book while waiting.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜まで (期限)',
      vietnamese: 'đến ~, cho đến ~',
      english: 'until ~, by ~',
      type: 'main',
      explanation: 'Diễn tả thời điểm kết thúc hoặc thời hạn. Có thể dùng với thời gian hoặc địa điểm.',
      examples: [
        {
          japanese: '5時まで働きます。',
          vietnamese: 'Tôi làm việc đến 5 giờ.',
          english: 'I work until 5 o clock.',
          type: 'main'
        },
        {
          japanese: '明日までに出してください。',
          vietnamese: 'Hãy nộp trước ngày mai.',
          english: 'Please submit it by tomorrow.',
          type: 'main'
        },
        {
          japanese: '駅まで歩きました。',
          vietnamese: 'Tôi đi bộ đến ga.',
          english: 'I walked to the station.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜てから〜までに',
      vietnamese: 'sau khi ~ cho đến khi ~',
      english: 'from ~ until ~',
      type: 'main',
      explanation: 'Kết hợp てから (sau khi) với までに (cho đến) để diễn tả khoảng thời gian.',
      examples: [
        {
          japanese: '9時から5時まで働きます。',
          vietnamese: 'Tôi làm việc từ 9 giờ đến 5 giờ.',
          english: 'I work from 9 to 5.',
          type: 'main'
        },
        {
          japanese: '月曜日から金曜日まで学校に行きます。',
          vietnamese: 'Tôi đi học từ thứ Hai đến thứ Sáu.',
          english: 'I go to school from Monday to Friday.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜たら (条件)',
      vietnamese: 'nếu ~, khi ~',
      english: 'if ~, when ~',
      type: 'main',
      explanation: 'Diễn tả điều kiện hoặc tình huống giả định. Cấu trúc: 動詞た形 + ら',
      examples: [
        {
          japanese: '雨が降ったら、中止します。',
          vietnamese: 'Nếu trời mưa, sẽ hủy.',
          english: 'If it rains, we will cancel.',
          type: 'main'
        },
        {
          japanese: '時間があったら、遊びに来てください。',
          vietnamese: 'Nếu có thời gian, hãy đến chơi.',
          english: 'If you have time, please come visit.',
          type: 'main'
        },
        {
          japanese: '着いたら、電話してください。',
          vietnamese: 'Khi đến nơi, hãy gọi điện.',
          english: 'When you arrive, please call.',
          type: 'main'
        },
        {
          japanese: '安かったら、買います。',
          vietnamese: 'Nếu rẻ, tôi sẽ mua.',
          english: 'If it is cheap, I will buy it.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜と (条件・習慣)',
      vietnamese: 'nếu ~, khi ~ (điều kiện tự nhiên)',
      english: 'if/when ~ (natural condition)',
      type: 'main',
      explanation: 'Diễn tả điều kiện tự nhiên, kết quả tất yếu hoặc thói quen. Cấu trúc: 動詞辞書形/ない形 + と',
      examples: [
        {
          japanese: '春になると、桜が咲きます。',
          vietnamese: 'Khi đến mùa xuân, hoa anh đào nở.',
          english: 'When spring comes, cherry blossoms bloom.',
          type: 'main'
        },
        {
          japanese: 'このボタンを押すと、ドアが開きます。',
          vietnamese: 'Khi ấn nút này, cửa sẽ mở.',
          english: 'When you press this button, the door opens.',
          type: 'main'
        },
        {
          japanese: '右に曲がると、銀行があります。',
          vietnamese: 'Nếu rẽ phải, sẽ có ngân hàng.',
          english: 'If you turn right, there is a bank.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜でしょう',
      vietnamese: 'có lẽ ~, chắc là ~',
      english: 'probably ~, I think ~',
      type: 'main',
      explanation: 'Diễn tả sự suy đoán, dự đoán không chắc chắn. Cấu trúc: 普通形 + でしょう',
      examples: [
        {
          japanese: '明日は雨が降るでしょう。',
          vietnamese: 'Ngày mai chắc sẽ mưa.',
          english: 'It will probably rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は来ないでしょう。',
          vietnamese: 'Chắc anh ấy sẽ không đến.',
          english: 'He probably will not come.',
          type: 'main'
        },
        {
          japanese: '試験は難しいでしょう。',
          vietnamese: 'Kỳ thi chắc khó.',
          english: 'The exam will probably be difficult.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜かもしれない',
      vietnamese: 'có thể ~',
      english: 'might ~, may ~',
      type: 'main',
      explanation: 'Diễn tả khả năng không chắc chắn (50%). Cấu trúc: 普通形 + かもしれない/かもしれません',
      examples: [
        {
          japanese: '明日は雨が降るかもしれません。',
          vietnamese: 'Ngày mai có thể sẽ mưa.',
          english: 'It might rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は来ないかもしれません。',
          vietnamese: 'Anh ấy có thể không đến.',
          english: 'He might not come.',
          type: 'main'
        },
        {
          japanese: '道が混んでいるかもしれません。',
          vietnamese: 'Đường có thể đang kẹt.',
          english: 'The road might be crowded.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜そうです (様態)',
      vietnamese: 'trông có vẻ ~',
      english: 'looks like ~, seems ~',
      type: 'additional',
      explanation: 'Diễn tả vẻ ngoài, dự đoán dựa trên quan sát. Cấu trúc: い形容詞-い + そう / な形容詞 + そう / 動詞ます形 + そう',
      examples: [
        {
          japanese: '雨が降りそうです。',
          vietnamese: 'Trông có vẻ sắp mưa.',
          english: 'It looks like it will rain.',
          type: 'main'
        },
        {
          japanese: 'この料理は美味しそうです。',
          vietnamese: 'Món này trông có vẻ ngon.',
          english: 'This dish looks delicious.',
          type: 'main'
        },
        {
          japanese: '疲れていそうです。',
          vietnamese: 'Trông có vẻ mệt.',
          english: 'You look tired.',
          type: 'additional'
        }
      ]
    }
  ]
};
