// Minna no Nihongo — Lesson 04: ～時に 起きます (Thời gian / Lịch trình)
import type { LessonData } from '$lib/types';

export const LESSON_04_DATA: LessonData = {
    lessonNumber: 4,
    title: "～時に 起きます (Thời gian / Lịch trình)",
    vocabulary: [
      {
        japanese: "起きます（おきます）",
        kana: "おきます",
        vietnamese: "thức dậy",
        type: "main",
        english: "to wake up, to get up",
        example: "まいあさ 6じに おきます。"
      },
      {
        japanese: "寝ます（ねます）",
        kana: "ねます",
        vietnamese: "đi ngủ",
        type: "main",
        english: "to sleep, to go to bed",
        example: "11じに ねます。"
      },
      {
        japanese: "働きます（はたらきます）",
        kana: "はたらきます",
        vietnamese: "làm việc",
        type: "main",
        english: "to work",
        example: "9じから 5じまで はたらきます。"
      },
      {
        japanese: "休みます（やすみます）",
        kana: "やすみます",
        vietnamese: "nghỉ ngơi",
        type: "main",
        english: "to rest, to take a day off",
        example: "にちようびに やすみます。"
      },
      {
        japanese: "勉強します（べんきょうします）",
        kana: "べんきょうします",
        vietnamese: "học",
        type: "main",
        english: "to study",
        example: "まいにち にほんごを べんきょうします。"
      },
      {
        japanese: "終わります（おわります）",
        kana: "おわります",
        vietnamese: "kết thúc",
        type: "main",
        english: "to finish, to end",
        example: "じゅぎょうは 3じに おわります。"
      },
      {
        japanese: "デパート",
        kana: "デパート",
        vietnamese: "bách hóa, trung tâm thương mại",
        type: "main",
        english: "department store",
        example: ""
      },
      {
        japanese: "銀行（ぎんこう）",
        kana: "ぎんこう",
        vietnamese: "ngân hàng",
        type: "main",
        english: "bank",
        example: "ぎんこうは 9じから 3じまでです。"
      },
      {
        japanese: "郵便局（ゆうびんきょく）",
        kana: "ゆうびんきょく",
        vietnamese: "bưu điện",
        type: "main",
        english: "post office",
        example: ""
      },
      {
        japanese: "図書館（としょかん）",
        kana: "としょかん",
        vietnamese: "thư viện",
        type: "main",
        english: "library",
        example: ""
      },
      {
        japanese: "美術館（びじゅつかん）",
        kana: "びじゅつかん",
        vietnamese: "bảo tàng mỹ thuật",
        type: "main",
        english: "art museum",
        example: ""
      },
      {
        japanese: "今（いま）",
        kana: "いま",
        vietnamese: "bây giờ",
        type: "main",
        english: "now",
        example: "いま 3じです。"
      },
      {
        japanese: "～時（～じ）",
        kana: "～じ",
        vietnamese: "~ giờ",
        type: "main",
        english: "~ o'clock",
        example: "いま 7じです。"
      },
      {
        japanese: "～分（～ふん / ～ぷん）",
        kana: "～ふん",
        vietnamese: "~ phút",
        type: "main",
        english: "~ minutes",
        example: "いま 7じ30ぷんです。"
      },
      {
        japanese: "半（はん）",
        kana: "はん",
        vietnamese: "rưỡi (30 phút)",
        type: "main",
        english: "half (past)",
        example: "6じはんに おきます。"
      },
      {
        japanese: "午前（ごぜん）",
        kana: "ごぜん",
        vietnamese: "buổi sáng, trước trưa",
        type: "main",
        english: "a.m., morning",
        example: "ごぜん 9じに はたらきます。"
      },
      {
        japanese: "午後（ごご）",
        kana: "ごご",
        vietnamese: "buổi chiều, sau trưa",
        type: "main",
        english: "p.m., afternoon",
        example: ""
      },
      {
        japanese: "朝（あさ）",
        kana: "あさ",
        vietnamese: "buổi sáng",
        type: "main",
        english: "morning",
        example: ""
      },
      {
        japanese: "昼（ひる）",
        kana: "ひる",
        vietnamese: "buổi trưa",
        type: "main",
        english: "noon, daytime",
        example: ""
      },
      {
        japanese: "夜（よる）",
        kana: "よる",
        vietnamese: "buổi tối",
        type: "main",
        english: "evening, night",
        example: ""
      },
      {
        japanese: "おととい",
        kana: "おととい",
        vietnamese: "hôm kia",
        type: "main",
        english: "day before yesterday",
        example: ""
      },
      {
        japanese: "きのう",
        kana: "きのう",
        vietnamese: "hôm qua",
        type: "main",
        english: "yesterday",
        example: ""
      },
      {
        japanese: "今日（きょう）",
        kana: "きょう",
        vietnamese: "hôm nay",
        type: "main",
        english: "today",
        example: ""
      },
      {
        japanese: "明日（あした）",
        kana: "あした",
        vietnamese: "ngày mai",
        type: "main",
        english: "tomorrow",
        example: ""
      },
      {
        japanese: "あさって",
        kana: "あさって",
        vietnamese: "ngày mốt",
        type: "main",
        english: "day after tomorrow",
        example: ""
      },
      {
        japanese: "毎朝（まいあさ）",
        kana: "まいあさ",
        vietnamese: "mỗi sáng",
        type: "main",
        english: "every morning",
        example: "まいあさ 6じに おきます。"
      },
      {
        japanese: "毎晩（まいばん）",
        kana: "まいばん",
        vietnamese: "mỗi tối",
        type: "main",
        english: "every evening",
        example: ""
      },
      {
        japanese: "毎日（まいにち）",
        kana: "まいにち",
        vietnamese: "mỗi ngày",
        type: "main",
        english: "every day",
        example: ""
      },
      {
        japanese: "月曜日（げつようび）",
        kana: "げつようび",
        vietnamese: "thứ Hai",
        type: "main",
        english: "Monday",
        example: ""
      },
      {
        japanese: "火曜日（かようび）",
        kana: "かようび",
        vietnamese: "thứ Ba",
        type: "main",
        english: "Tuesday",
        example: ""
      },
      {
        japanese: "水曜日（すいようび）",
        kana: "すいようび",
        vietnamese: "thứ Tư",
        type: "main",
        english: "Wednesday",
        example: ""
      },
      {
        japanese: "木曜日（もくようび）",
        kana: "もくようび",
        vietnamese: "thứ Năm",
        type: "main",
        english: "Thursday",
        example: ""
      },
      {
        japanese: "金曜日（きんようび）",
        kana: "きんようび",
        vietnamese: "thứ Sáu",
        type: "main",
        english: "Friday",
        example: ""
      },
      {
        japanese: "土曜日（どようび）",
        kana: "どようび",
        vietnamese: "thứ Bảy",
        type: "main",
        english: "Saturday",
        example: ""
      },
      {
        japanese: "日曜日（にちようび）",
        kana: "にちようび",
        vietnamese: "Chủ nhật",
        type: "main",
        english: "Sunday",
        example: "にちようびに やすみます。"
      },
      {
        japanese: "何曜日（なんようび）",
        kana: "なんようび",
        vietnamese: "thứ mấy",
        type: "main",
        english: "what day of the week",
        example: "きょうは なんようびですか。"
      },
      {
        japanese: "番号（ばんごう）",
        kana: "ばんごう",
        vietnamese: "số",
        type: "main",
        english: "number",
        example: "でんわばんごうは なんですか。"
      },
      {
        japanese: "何時（なんじ）",
        kana: "なんじ",
        vietnamese: "mấy giờ",
        type: "main",
        english: "what time",
        example: "いま なんじですか。"
      },
      {
        japanese: "何分（なんぷん）",
        kana: "なんぷん",
        vietnamese: "mấy phút",
        type: "main",
        english: "how many minutes",
        example: ""
      },
      {
        japanese: "～から",
        kana: "～から",
        vietnamese: "từ ~",
        type: "main",
        english: "from ~",
        example: "9じから はたらきます。"
      },
      {
        japanese: "～まで",
        kana: "～まで",
        vietnamese: "đến ~",
        type: "main",
        english: "until ~",
        example: "5じまで はたらきます。"
      },
      {
        japanese: "そちら",
        kana: "そちら",
        vietnamese: "bên đó (lịch sự)",
        type: "main",
        english: "your place (polite)",
        example: "そちらは なんじから なんじまでですか。"
      },
      // Supplementary Vocabulary (参考語彙) - Special Readings for Minutes
      {
        japanese: "一分（いっぷん）",
        kana: "いっぷん",
        vietnamese: "1 phút",
        english: "1 minute",
        type: "supplementary",
        example: "今　3時1分です。"
      },
      {
        japanese: "三分（さんぷん）",
        kana: "さんぷん",
        vietnamese: "3 phút",
        english: "3 minutes",
        type: "supplementary",
        example: "3分　待ってください。"
      },
      {
        japanese: "四分（よんぷん）",
        kana: "よんぷん",
        vietnamese: "4 phút",
        english: "4 minutes",
        type: "supplementary",
        example: "4分　かかります。"
      },
      {
        japanese: "六分（ろっぷん）",
        kana: "ろっぷん",
        vietnamese: "6 phút",
        english: "6 minutes",
        type: "supplementary",
        example: "6分後に　来ます。"
      },
      {
        japanese: "八分（はっぷん）",
        kana: "はっぷん",
        vietnamese: "8 phút",
        english: "8 minutes",
        type: "supplementary",
        example: "8分　歩きます。"
      },
      {
        japanese: "十分（じゅっぷん / じっぷん）",
        kana: "じゅっぷん",
        vietnamese: "10 phút",
        english: "10 minutes",
        type: "supplementary",
        example: "10分　休みます。"
      },
      // Supplementary Vocabulary - More Time Expressions
      {
        japanese: "今朝（けさ）",
        kana: "けさ",
        vietnamese: "sáng nay",
        english: "this morning",
        type: "supplementary",
        example: "今朝　6時に　起きました。"
      },
      {
        japanese: "今晩（こんばん）",
        kana: "こんばん",
        vietnamese: "tối nay",
        english: "this evening, tonight",
        type: "supplementary",
        example: "今晩　何時に　寝ますか。"
      },
      {
        japanese: "昼休み（ひるやすみ）",
        kana: "ひるやすみ",
        vietnamese: "giờ nghỉ trưa",
        english: "lunch break",
        type: "supplementary",
        example: "昼休みは　12時から　1時までです。"
      },
      {
        japanese: "平日（へいじつ）",
        kana: "へいじつ",
        vietnamese: "ngày thường (trong tuần)",
        english: "weekday",
        type: "supplementary",
        example: "平日は　毎日　働きます。"
      },
      {
        japanese: "週末（しゅうまつ）",
        kana: "しゅうまつ",
        vietnamese: "cuối tuần",
        english: "weekend",
        type: "supplementary",
        example: "週末は　休みます。"
      },
      // Supplementary Vocabulary - School/Work Phrases
      {
        japanese: "テスト",
        kana: "テスト",
        vietnamese: "bài kiểm tra, bài thi",
        english: "Test, exam",
        type: "supplementary",
        example: "明日　テストが　あります。"
      },
      {
        japanese: "お疲れ様でした（おつかれさまでした）",
        kana: "おつかれさまでした",
        vietnamese: "Anh/chị vất vả quá (lời cảm ơn sau công việc)",
        english: "Thank you for your hard work, good job",
        type: "supplementary",
        example: "今日は　お疲れ様でした。"
      }
    ],
    grammar: [
      {
        pattern: "～時～分",
        vietnamese: "~ giờ ~ phút",
        type: "main",
        english: "~ o'clock ~ minute",
        explanation: "Cách nói giờ và phút trong tiếng Nhật. じ (時) = giờ, ふん/ぷん (分) = phút.",
        examples: [
          {
            japanese: "いま 9じ 10ぷんです。",
            vietnamese: "Bây giờ là 9 giờ 10 phút.",
            type: "main",
        english: "It's 9:10 now."
          },
          {
            japanese: "かいぎは 3じはんです。",
            vietnamese: "Cuộc họp là lúc 3 giờ rưỡi.",
            type: "main",
        english: "The meeting is at 3:30."
          }
        ]
      },
      {
        pattern: "～に ～ます",
        vietnamese: "~ vào lúc ~",
        type: "main",
        english: "~ at (time)",
        explanation: "Trợ từ 'に' chỉ thời điểm cụ thể.",
        examples: [
          {
            japanese: "まいあさ 6じに おきます。",
            vietnamese: "Tôi dậy lúc 6 giờ mỗi sáng.",
            type: "main",
        english: "I wake up at 6 o'clock every morning."
          },
          {
            japanese: "12じ 15ふんに べんきょうします。",
            vietnamese: "Tôi học lúc 12 giờ 15 phút.",
            type: "main",
        english: "I study at 12:15."
          }
        ]
      },
      {
        pattern: "～から ～まで",
        vietnamese: "từ ~ đến ~",
        type: "main",
        english: "from ~ to/until ~",
        explanation: "Chỉ khoảng thời gian từ điểm bắt đầu đến điểm kết thúc.",
        examples: [
          {
            japanese: "9じから 5じまで はたらきます。",
            vietnamese: "Tôi làm việc từ 9 giờ đến 5 giờ.",
            type: "main",
        english: "I work from 9 to 5."
          },
          {
            japanese: "げつようびから きんようびまで がっこうへ いきます。",
            vietnamese: "Tôi đi học từ thứ Hai đến thứ Sáu.",
            type: "main",
        english: "I go to school from Monday to Friday."
          }
        ]
      },
      {
        pattern: "～は ～から ～までです",
        vietnamese: "~ từ ~ đến ~",
        type: "main",
        english: "~ is from ~ to ~",
        explanation: "Nói về khung giờ hoạt động của một địa điểm.",
        examples: [
          {
            japanese: "ぎんこうは 9じから 3じまでです。",
            vietnamese: "Ngân hàng từ 9 giờ đến 3 giờ.",
            type: "main",
        english: "The bank is (open) from 9 to 3."
          },
          {
            japanese: "デパートは 10じから 8じまでです。",
            vietnamese: "Cửa hàng bách hóa từ 10 giờ đến 8 giờ.",
            type: "main",
        english: "The department store is (open) from 10 to 8."
          }
        ]
      }
    ]
  };
