/**
 * N3 Lessons — Lesson 13: Connection and Parallel
 * 接続・並列 (Liên kết và song song)
 */

import type { LessonData } from '$lib/types';

export const LESSON_13_DATA: LessonData = {
  lessonNumber: 13,
  title: '接続・並列 (Liên kết và song song)',
  vocabulary: [
    // Relationship and logic words
    {
      japanese: '関係',
      kana: 'かんけい',
      vietnamese: 'quan hệ, mối liên hệ',
      english: 'relationship, connection',
      type: 'main',
      example: '彼とはいい関係を築いている。'
    },
    {
      japanese: '関連',
      kana: 'かんれん',
      vietnamese: 'liên quan',
      english: 'relation, connection',
      type: 'main',
      example: 'この問題に関連する資料を集めた。'
    },
    {
      japanese: '比較',
      kana: 'ひかく',
      vietnamese: 'so sánh',
      english: 'comparison',
      type: 'main',
      example: '二つの製品を比較した。'
    },
    {
      japanese: '反対',
      kana: 'はんたい',
      vietnamese: 'phản đối, ngược lại',
      english: 'opposition, opposite',
      type: 'main',
      example: '多くの人がこの計画に反対した。'
    },
    {
      japanese: '賛成',
      kana: 'さんせい',
      vietnamese: 'tán thành, đồng ý',
      english: 'agreement, approval',
      type: 'main',
      example: 'その意見に賛成です。'
    },
    {
      japanese: '共通',
      kana: 'きょうつう',
      vietnamese: 'chung, cùng',
      english: 'common, shared',
      type: 'main',
      example: '二人には共通の趣味がある。'
    },
    {
      japanese: '違い',
      kana: 'ちがい',
      vietnamese: 'sự khác biệt',
      english: 'difference',
      type: 'main',
      example: '文化の違いを理解することが大切だ。'
    },
    {
      japanese: '対する',
      kana: 'たいする',
      vietnamese: 'đối với',
      english: 'to face, regarding',
      type: 'main',
      example: '彼の態度に対して不満がある。'
    },
    {
      japanese: '加える',
      kana: 'くわえる',
      vietnamese: 'thêm vào',
      english: 'to add',
      type: 'main',
      example: 'もう少し塩を加えてください。'
    },
    {
      japanese: '含む',
      kana: 'ふくむ',
      vietnamese: 'bao gồm, chứa',
      english: 'to include, to contain',
      type: 'main',
      example: '税金を含む値段です。'
    },
    {
      japanese: '結ぶ',
      kana: 'むすぶ',
      vietnamese: 'buộc, kết nối, ký kết',
      english: 'to tie, to connect, to conclude',
      type: 'main',
      example: '二つの都市を結ぶ電車がある。'
    },
    {
      japanese: '組み合わせる',
      kana: 'くみあわせる',
      vietnamese: 'kết hợp',
      english: 'to combine',
      type: 'main',
      example: '色を組み合わせてデザインする。'
    },
    {
      japanese: '分ける',
      kana: 'わける',
      vietnamese: 'chia, phân chia',
      english: 'to divide, to separate',
      type: 'main',
      example: 'グループに分けて活動する。'
    },
    {
      japanese: '代わりに',
      kana: 'かわりに',
      vietnamese: 'thay cho, thay vì',
      english: 'instead of, in place of',
      type: 'main',
      example: 'コーヒーの代わりにお茶を飲む。'
    },
    {
      japanese: '一方',
      kana: 'いっぽう',
      vietnamese: 'một mặt, mặt khác',
      english: 'one side, on the other hand',
      type: 'main',
      example: '便利な一方、危険もある。'
    },
    {
      japanese: '逆',
      kana: 'ぎゃく',
      vietnamese: 'ngược lại',
      english: 'reverse, opposite',
      type: 'main',
      example: '逆の方向に歩いていた。'
    },
    {
      japanese: '同様',
      kana: 'どうよう',
      vietnamese: 'tương tự, giống',
      english: 'same, similar',
      type: 'main',
      example: '前回と同様の方法で行う。'
    },
    {
      japanese: '互い',
      kana: 'たがい',
      vietnamese: 'lẫn nhau',
      english: 'mutual, each other',
      type: 'main',
      example: 'お互いに助け合おう。'
    },
    {
      japanese: '矛盾',
      kana: 'むじゅん',
      vietnamese: 'mâu thuẫn',
      english: 'contradiction',
      type: 'main',
      example: '彼の話には矛盾がある。'
    },
    {
      japanese: '対立',
      kana: 'たいりつ',
      vietnamese: 'đối lập',
      english: 'confrontation, opposition',
      type: 'main',
      example: '意見が対立している。'
    },

    // Additional vocabulary
    {
      japanese: 'つまり',
      kana: 'つまり',
      vietnamese: 'tức là, nói cách khác',
      english: 'in other words, that is to say',
      type: 'additional',
      example: 'つまり、賛成ということですか。'
    },
    {
      japanese: 'しかも',
      kana: 'しかも',
      vietnamese: 'hơn nữa, mà còn',
      english: 'moreover, furthermore',
      type: 'additional',
      example: '安い、しかもおいしい。'
    },
    {
      japanese: 'ただし',
      kana: 'ただし',
      vietnamese: 'tuy nhiên, nhưng mà',
      english: 'however, provided that',
      type: 'additional',
      example: '参加は自由です。ただし、事前に登録が必要です。'
    },
    {
      japanese: 'むしろ',
      kana: 'むしろ',
      vietnamese: 'đúng hơn là, thà ~ còn hơn',
      english: 'rather, instead',
      type: 'additional',
      example: '暑いというより、むしろ蒸し暑い。'
    },
    {
      japanese: '要するに',
      kana: 'ようするに',
      vietnamese: 'nói tóm lại',
      english: 'in short, to sum up',
      type: 'additional',
      example: '要するに、お金が足りないということだ。'
    },
    {
      japanese: '確かに',
      kana: 'たしかに',
      vietnamese: 'quả thật, đúng là',
      english: 'certainly, indeed',
      type: 'additional',
      example: '確かにその通りだ。'
    },
    {
      japanese: '一般的',
      kana: 'いっぱんてき',
      vietnamese: 'chung, phổ biến',
      english: 'general, common',
      type: 'additional',
      example: '一般的にはそう言われている。'
    },
    {
      japanese: '具体的',
      kana: 'ぐたいてき',
      vietnamese: 'cụ thể',
      english: 'concrete, specific',
      type: 'additional',
      example: '具体的な例を挙げてください。'
    },
    {
      japanese: '基本的',
      kana: 'きほんてき',
      vietnamese: 'cơ bản',
      english: 'basic, fundamental',
      type: 'additional',
      example: '基本的なルールを守ってください。'
    },
    {
      japanese: 'それに対して',
      kana: 'それにたいして',
      vietnamese: 'ngược lại, trái lại',
      english: 'in contrast, on the other hand',
      type: 'additional',
      example: '兄は静かだ。それに対して、弟はうるさい。'
    },
    {
      japanese: '同時に',
      kana: 'どうじに',
      vietnamese: 'đồng thời',
      english: 'at the same time',
      type: 'additional',
      example: '仕事と勉強を同時にしている。'
    }
  ],
  grammar: [
    {
      pattern: '～し～し',
      vietnamese: 'vừa ~ vừa ~, ~ mà lại còn ~',
      english: 'and also, not only... but also',
      type: 'main',
      explanation: 'Dùng để liệt kê nhiều lý do hoặc tính chất. Thường dùng khi muốn nhấn mạnh có nhiều lý do dẫn đến một kết luận. Cấu trúc: Câu thường + し、câu thường + し。Có thể dùng với cả tính từ, danh từ và động từ.',
      examples: [
        {
          japanese: 'この店は安いし、おいしいし、よく来ます。',
          vietnamese: 'Quán này vừa rẻ vừa ngon nên tôi hay đến.',
          english: 'This restaurant is cheap and delicious, so I come often.',
          type: 'main'
        },
        {
          japanese: '雨も降っているし、風も強いし、出かけたくない。',
          vietnamese: 'Trời vừa mưa vừa gió mạnh nên không muốn ra ngoài.',
          english: 'It is raining and the wind is strong, so I do not want to go out.',
          type: 'main'
        },
        {
          japanese: '彼は頭もいいし、スポーツもできるし、人気がある。',
          vietnamese: 'Anh ấy vừa thông minh vừa giỏi thể thao nên được yêu thích.',
          english: 'He is smart and good at sports, so he is popular.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～上に',
      vietnamese: 'hơn nữa, thêm vào đó',
      english: 'moreover, in addition to',
      type: 'main',
      explanation: 'Dùng để thêm thông tin cùng hướng (tích cực + tích cực, hoặc tiêu cực + tiêu cực). Cấu trúc: Động từ thường/Tính từ い/な + 上に。Nghĩa gần giống し nhưng trang trọng hơn.',
      examples: [
        {
          japanese: '彼女は美しい上に、頭もいい。',
          vietnamese: 'Cô ấy đẹp, hơn nữa còn thông minh.',
          english: 'She is beautiful, and moreover, she is smart.',
          type: 'main'
        },
        {
          japanese: '道に迷った上に、雨にも降られた。',
          vietnamese: 'Đã lạc đường, hơn nữa còn bị mưa.',
          english: 'I got lost, and on top of that, it rained on me.',
          type: 'main'
        },
        {
          japanese: 'この部屋は広い上に、家賃も安い。',
          vietnamese: 'Căn phòng này rộng, hơn nữa tiền thuê cũng rẻ.',
          english: 'This room is spacious, and moreover, the rent is cheap.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～一方で',
      vietnamese: 'một mặt ~, mặt khác ~',
      english: 'on the other hand, while',
      type: 'main',
      explanation: 'Dùng để nêu hai mặt đối lập hoặc tương phản của cùng một sự việc. Cấu trúc: Động từ thường/Tính từ + 一方で。Khác với 上に ở chỗ 一方で nêu hai mặt trái ngược.',
      examples: [
        {
          japanese: 'インターネットは便利な一方で、危険もある。',
          vietnamese: 'Internet một mặt tiện lợi, mặt khác cũng có nguy hiểm.',
          english: 'While the internet is convenient, it also has dangers.',
          type: 'main'
        },
        {
          japanese: '都市の人口が増える一方で、地方の人口は減っている。',
          vietnamese: 'Dân số thành thị tăng, trong khi dân số nông thôn giảm.',
          english: 'While the urban population increases, the rural population decreases.',
          type: 'main'
        },
        {
          japanese: '父は厳しい一方で、とても優しい人だ。',
          vietnamese: 'Bố một mặt nghiêm khắc, nhưng mặt khác là người rất dịu dàng.',
          english: 'While my father is strict, he is also a very kind person.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ながら',
      vietnamese: 'vừa ~ vừa ~, mặc dù ~',
      english: 'while doing, although',
      type: 'main',
      explanation: 'Có hai cách dùng: (1) Động từ ます-stem + ながら = làm đồng thời hai việc (hành động chính ở vế sau). (2) Động từ/Tính từ + ながら(も) = mặc dù ~ nhưng ~ (nghịch tiếp). Cách dùng (2) trang trọng hơn.',
      examples: [
        {
          japanese: '音楽を聞きながら勉強する。',
          vietnamese: 'Vừa nghe nhạc vừa học bài.',
          english: 'I study while listening to music.',
          type: 'main'
        },
        {
          japanese: '知っていながら教えてくれなかった。',
          vietnamese: 'Mặc dù biết nhưng không chịu nói cho tôi.',
          english: 'Although he knew, he did not tell me.',
          type: 'main'
        },
        {
          japanese: '歩きながら電話をするのは危ない。',
          vietnamese: 'Vừa đi vừa gọi điện thoại rất nguy hiểm.',
          english: 'Talking on the phone while walking is dangerous.',
          type: 'additional'
        }
      ]
    }
  ]
};
