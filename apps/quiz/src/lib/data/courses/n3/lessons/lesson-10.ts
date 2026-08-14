/**
 * N3 Core Lessons — Lesson 10: Time Relations
 * Focus: 時間関係 — ～うちに、～間に、～までに、～てから～まで
 */

import type { LessonData } from '$lib/types';

export const LESSON_10_DATA: LessonData = {
  lessonNumber: 10,
  title: '時間関係 (Time Relations)',
  vocabulary: [
    // Time-related nouns
    {
      japanese: '期間',
      kana: 'きかん',
      vietnamese: 'khoảng thời gian',
      english: 'period, duration',
      type: 'main',
      example: '留学期間は一年です。'
    },
    {
      japanese: '期限',
      kana: 'きげん',
      vietnamese: 'thời hạn, hạn chót',
      english: 'deadline, time limit',
      type: 'main',
      example: 'レポートの期限は来週の金曜日です。'
    },
    {
      japanese: '締め切り',
      kana: 'しめきり',
      vietnamese: 'hạn chót',
      english: 'deadline',
      type: 'main',
      example: '締め切りまでに提出してください。'
    },
    {
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'kế hoạch, lịch trình',
      english: 'schedule, plan',
      type: 'main',
      example: '来週の予定を確認しましょう。'
    },
    {
      japanese: '日程',
      kana: 'にってい',
      vietnamese: 'lịch trình, chương trình',
      english: 'schedule, itinerary',
      type: 'main',
      example: '旅行の日程を決めました。'
    },
    {
      japanese: '時期',
      kana: 'じき',
      vietnamese: 'thời kỳ, mùa',
      english: 'time, season, period',
      type: 'main',
      example: '桜の時期に日本に行きたいです。'
    },
    {
      japanese: '時代',
      kana: 'じだい',
      vietnamese: 'thời đại',
      english: 'era, age',
      type: 'main',
      example: '学生時代に日本に留学しました。'
    },
    {
      japanese: '順番',
      kana: 'じゅんばん',
      vietnamese: 'thứ tự',
      english: 'order, turn',
      type: 'main',
      example: '順番に並んでください。'
    },
    {
      japanese: '途中',
      kana: 'とちゅう',
      vietnamese: 'giữa chừng, trên đường',
      english: 'on the way, in the middle of',
      type: 'main',
      example: '仕事の途中で電話がかかってきました。'
    },
    {
      japanese: '直前',
      kana: 'ちょくぜん',
      vietnamese: 'ngay trước',
      english: 'just before',
      type: 'main',
      example: '試験の直前に風邪をひきました。'
    },
    {
      japanese: '直後',
      kana: 'ちょくご',
      vietnamese: 'ngay sau',
      english: 'immediately after',
      type: 'main',
      example: '食事の直後に運動するのはよくないです。'
    },
    {
      japanese: '以前',
      kana: 'いぜん',
      vietnamese: 'trước đây',
      english: 'before, previously',
      type: 'main',
      example: '以前ここに住んでいました。'
    },
    {
      japanese: '以後',
      kana: 'いご',
      vietnamese: 'từ sau đó',
      english: 'after, from now on',
      type: 'main',
      example: '以後気をつけます。'
    },
    {
      japanese: '以来',
      kana: 'いらい',
      vietnamese: 'kể từ khi',
      english: 'since, ever since',
      type: 'main',
      example: '卒業以来、会っていません。'
    },
    // Verbs related to time and scheduling
    {
      japanese: '間に合う',
      kana: 'まにあう',
      vietnamese: 'kịp giờ',
      english: 'to be in time',
      type: 'main',
      example: '締め切りに間に合いました。'
    },
    {
      japanese: '遅れる',
      kana: 'おくれる',
      vietnamese: 'trễ',
      english: 'to be late, to be delayed',
      type: 'main',
      example: '電車が10分遅れています。'
    },
    {
      japanese: '急ぐ',
      kana: 'いそぐ',
      vietnamese: 'vội, gấp',
      english: 'to hurry',
      type: 'main',
      example: '時間がないので急ぎましょう。'
    },
    {
      japanese: '過ごす',
      kana: 'すごす',
      vietnamese: 'trải qua (thời gian)',
      english: 'to spend (time)',
      type: 'main',
      example: '夏休みを海で過ごしました。'
    },
    {
      japanese: '過ぎる',
      kana: 'すぎる',
      vietnamese: 'qua, trôi qua',
      english: 'to pass, to elapse',
      type: 'main',
      example: '12時を過ぎてしまいました。'
    },
    {
      japanese: '続く',
      kana: 'つづく',
      vietnamese: 'tiếp tục, kéo dài',
      english: 'to continue, to last',
      type: 'main',
      example: '雨が三日間続きました。'
    },
    {
      japanese: '続ける',
      kana: 'つづける',
      vietnamese: 'tiếp tục (làm)',
      english: 'to continue doing',
      type: 'main',
      example: '日本語の勉強を続けています。'
    },
    {
      japanese: '始まる',
      kana: 'はじまる',
      vietnamese: 'bắt đầu (tự)',
      english: 'to begin (intransitive)',
      type: 'main',
      example: '会議は3時に始まります。'
    },
    {
      japanese: '終わる',
      kana: 'おわる',
      vietnamese: 'kết thúc',
      english: 'to end, to finish',
      type: 'main',
      example: '授業は5時に終わります。'
    },
    {
      japanese: '済ませる',
      kana: 'すませる',
      vietnamese: 'hoàn thành, xong',
      english: 'to finish, to get done',
      type: 'main',
      example: '出発までに準備を済ませてください。'
    },
    {
      japanese: '延期する',
      kana: 'えんきする',
      vietnamese: 'hoãn lại',
      english: 'to postpone',
      type: 'main',
      example: '雨のため、運動会を延期しました。'
    },
    // Additional vocabulary
    {
      japanese: 'そのうち',
      kana: 'そのうち',
      vietnamese: 'không lâu nữa, sớm thôi',
      english: 'before long, eventually',
      type: 'additional',
      example: 'そのうち慣れますよ。'
    },
    {
      japanese: 'いつの間にか',
      kana: 'いつのまにか',
      vietnamese: 'lúc nào không biết',
      english: 'before one knows it',
      type: 'additional',
      example: 'いつの間にか眠ってしまいました。'
    },
    {
      japanese: 'あっという間に',
      kana: 'あっというまに',
      vietnamese: 'trong nháy mắt',
      english: 'in the blink of an eye',
      type: 'additional',
      example: '休みはあっという間に終わりました。'
    },
    {
      japanese: 'ようやく',
      kana: 'ようやく',
      vietnamese: 'cuối cùng cũng, rốt cuộc',
      english: 'finally, at last',
      type: 'additional',
      example: 'ようやく仕事が終わりました。'
    },
    {
      japanese: 'たちまち',
      kana: 'たちまち',
      vietnamese: 'ngay lập tức, chớp nhoáng',
      english: 'instantly, in no time',
      type: 'additional',
      example: 'ニュースはたちまち広がった。'
    },
    {
      japanese: '当分',
      kana: 'とうぶん',
      vietnamese: 'tạm thời, trong thời gian sắp tới',
      english: 'for the time being',
      type: 'additional',
      example: '当分の間、この場所で働きます。'
    },
    {
      japanese: '同時に',
      kana: 'どうじに',
      vietnamese: 'đồng thời',
      english: 'at the same time',
      type: 'additional',
      example: '二つのことを同時にするのは難しいです。'
    },
    {
      japanese: '事前に',
      kana: 'じぜんに',
      vietnamese: 'trước, sự trước',
      english: 'beforehand, in advance',
      type: 'additional',
      example: '事前に予約してください。'
    }
  ],
  grammar: [
    {
      pattern: '〜うちに',
      vietnamese: 'trong lúc ~, trong khi còn ~',
      english: 'while ~, during ~',
      type: 'main',
      explanation: 'Biểu thị hành động nên thực hiện trong khoảng thời gian trạng thái nào đó còn duy trì. Ngụ ý nếu không làm lúc này sẽ muộn hoặc không còn cơ hội. Cấu tạo: động từ ている + うちに, ない + うちに, い形容詞 + うちに, な形容詞 + なうちに, danh từ + のうちに.',
      examples: [
        {
          japanese: '若いうちに、たくさん旅行したいです。',
          vietnamese: 'Trong khi còn trẻ, tôi muốn đi du lịch nhiều.',
          english: 'While I\'m young, I want to travel a lot.',
          type: 'main'
        },
        {
          japanese: '暖かいうちに食べてください。',
          vietnamese: 'Hãy ăn trong khi còn nóng.',
          english: 'Please eat while it\'s still warm.',
          type: 'main'
        },
        {
          japanese: '忘れないうちに、メモしておきます。',
          vietnamese: 'Trong khi chưa quên, tôi ghi chú lại.',
          english: 'I\'ll take notes before I forget.',
          type: 'main'
        },
        {
          japanese: '雨が降らないうちに帰りましょう。',
          vietnamese: 'Về nhà trong khi trời chưa mưa đi.',
          english: 'Let\'s go home before it rains.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜間(に)',
      vietnamese: 'trong khi ~, trong suốt ~',
      english: 'while ~, during ~',
      type: 'main',
      explanation: 'Biểu thị khoảng thời gian một trạng thái/hành động kéo dài. ～間 (không có に): hành động vế sau diễn ra suốt khoảng thời gian đó. ～間に (có に): hành động vế sau xảy ra tại một thời điểm trong khoảng thời gian đó. Cấu tạo: động từ ている + 間(に), danh từ + の間(に).',
      examples: [
        {
          japanese: '母が買い物に行っている間に、部屋を掃除しました。',
          vietnamese: 'Trong lúc mẹ đi mua sắm, tôi đã dọn phòng.',
          english: 'While my mother was shopping, I cleaned the room.',
          type: 'main'
        },
        {
          japanese: '日本にいる間、たくさん友達ができました。',
          vietnamese: 'Trong thời gian ở Nhật, tôi có nhiều bạn.',
          english: 'During my time in Japan, I made many friends.',
          type: 'main'
        },
        {
          japanese: '寝ている間に、地震がありました。',
          vietnamese: 'Trong lúc ngủ, đã có động đất.',
          english: 'While I was sleeping, there was an earthquake.',
          type: 'main'
        },
        {
          japanese: '夏休みの間、アルバイトをしていました。',
          vietnamese: 'Trong suốt kỳ nghỉ hè, tôi đã đi làm thêm.',
          english: 'During summer vacation, I was working part-time.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜までに',
      vietnamese: 'trước khi ~, muộn nhất là ~',
      english: 'by the time ~, no later than ~',
      type: 'main',
      explanation: 'Biểu thị thời hạn cuối cùng mà hành động phải hoàn thành. Khác với ～まで (cho đến ~) diễn tả trạng thái kéo dài. ～までに nhấn mạnh thời điểm kết thúc/deadline. Cấu tạo: thời điểm/động từ る形 + までに.',
      examples: [
        {
          japanese: '金曜日までにレポートを出してください。',
          vietnamese: 'Hãy nộp báo cáo trước thứ Sáu.',
          english: 'Please submit the report by Friday.',
          type: 'main'
        },
        {
          japanese: '会議が始まるまでに資料を準備しておきます。',
          vietnamese: 'Tôi sẽ chuẩn bị tài liệu trước khi cuộc họp bắt đầu.',
          english: 'I\'ll have the documents ready before the meeting starts.',
          type: 'main'
        },
        {
          japanese: '来月までに引っ越さなければなりません。',
          vietnamese: 'Tôi phải chuyển nhà trước tháng sau.',
          english: 'I must move by next month.',
          type: 'main'
        },
        {
          japanese: '出発するまでに、荷物をまとめておいてね。',
          vietnamese: 'Trước khi xuất phát, hãy thu xếp hành lý nhé.',
          english: 'Have your bags packed before we leave.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てから',
      vietnamese: 'sau khi ~ xong rồi thì',
      english: 'after doing ~',
      type: 'main',
      explanation: 'Biểu thị hành động xảy ra sau khi hành động trước hoàn thành. Nhấn mạnh thứ tự trước sau. Cấu tạo: động từ て形 + から. Có thể kết hợp: ～てから～まで (từ khi...đến khi).',
      examples: [
        {
          japanese: '手を洗ってから食べてください。',
          vietnamese: 'Hãy rửa tay xong rồi ăn.',
          english: 'Please eat after washing your hands.',
          type: 'main'
        },
        {
          japanese: '日本に来てから、もう3年になります。',
          vietnamese: 'Từ khi đến Nhật, đã 3 năm rồi.',
          english: 'It\'s been 3 years since I came to Japan.',
          type: 'main'
        },
        {
          japanese: 'よく考えてから決めましょう。',
          vietnamese: 'Suy nghĩ kỹ rồi hãy quyết định.',
          english: 'Let\'s decide after thinking carefully.',
          type: 'main'
        },
        {
          japanese: '朝起きてから夜寝るまで、ずっと忙しいです。',
          vietnamese: 'Từ khi thức dậy buổi sáng đến khi ngủ buổi tối, lúc nào cũng bận.',
          english: 'From when I wake up until I go to bed, I\'m always busy.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜たとたん(に)',
      vietnamese: 'vừa ~ thì ngay lập tức',
      english: 'just as ~, the moment ~',
      type: 'additional',
      explanation: 'Biểu thị hành động/sự việc xảy ra ngay lập tức sau hành động trước đó. Vế sau thường là sự việc bất ngờ, ngoài dự kiến. Cấu tạo: động từ た形 + とたん(に).',
      examples: [
        {
          japanese: 'ドアを開けたとたん、猫が飛び出してきた。',
          vietnamese: 'Vừa mở cửa thì con mèo nhảy vọt ra.',
          english: 'The moment I opened the door, the cat jumped out.',
          type: 'main'
        },
        {
          japanese: '外に出たとたんに、雨が降り始めた。',
          vietnamese: 'Vừa ra ngoài thì trời bắt đầu mưa.',
          english: 'The moment I went outside, it started to rain.',
          type: 'main'
        },
        {
          japanese: '立ち上がったとたん、めまいがしました。',
          vietnamese: 'Vừa đứng dậy thì bị chóng mặt.',
          english: 'The moment I stood up, I felt dizzy.',
          type: 'additional'
        }
      ]
    }
  ]
};
