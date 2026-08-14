import type { ConversationPattern } from '$lib/types/lesson';

export const N4_CONVERSATIONS: ConversationPattern[] = [
  // ─── 1. Making Plans (約束) ───────────────────────────────────────────
  {
    id: 'n4-conv-01',
    title: 'Making plans',
    titleJp: '約束',
    level: 'N4',
    situation: 'Two coworkers discussing weekend plans together',
    patterns: [
      {
        japanese: '〜ましょうか。',
        kana: '〜ましょうか。',
        vietnamese: 'Shall we ~? (suggesting doing something together)',
        memoryTip:
          'Remember: mashou ka is used to invite someone to do something together.'
      },
      {
        japanese: '〜たいです。',
        kana: '〜たいです。',
        vietnamese: 'I want to ~ (expressing a desire)',
        memoryTip:
          'Remember: ~tai attaches to a verb stem to mean "want to do".'
      },
      {
        japanese: 'いつがいいですか。',
        kana: 'いつがいいですか。',
        vietnamese: 'When is good for you? (asking about a suitable time)',
        memoryTip:
          'Remember: itsu = when, ga ii desu ka = is good? Used to find an open slot in someone\'s schedule.'
      }
    ],
    dialogue: [
      {
        speaker: 'Tanaka',
        japanese: '週末、何かしませんか。',
        kana: 'しゅうまつ、なにかしませんか。',
        vietnamese: 'Would you like to do something this weekend?'
      },
      {
        speaker: 'Lin',
        japanese: 'いいですね。映画を見たいです。',
        kana: 'いいですね。えいがをみたいです。',
        vietnamese: 'Sounds good. I want to watch a movie.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'じゃ、いっしょに見ましょうか。いつがいいですか。',
        kana: 'じゃ、いっしょにみましょうか。いつがいいですか。',
        vietnamese: 'Then shall we watch it together? When is good for you?'
      },
      {
        speaker: 'Lin',
        japanese: '土曜日の午後はどうですか。',
        kana: 'どようびのごごはどうですか。',
        vietnamese: 'How about Saturday afternoon?'
      },
      {
        speaker: 'Tanaka',
        japanese: '土曜日の午後ですね。じゃ、二時に駅で会いましょう。',
        kana: 'どようびのごごですね。じゃ、にじにえきであいましょう。',
        vietnamese: 'Saturday afternoon, got it. Let\'s meet at the station at 2 o\'clock.'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、楽しみにしています。',
        kana: 'はい、たのしみにしています。',
        vietnamese: 'Sure, I\'m looking forward to it.'
      }
    ],
    culturalNote:
      'Japanese people often meet at train stations since they\'re the easiest landmarks to find. Being on time (or 5 minutes early) is considered basic courtesy — being even a few minutes late calls for an apology.'
  },

  // ─── 2. Asking for Directions (道案内) ────────────────────────────────
  {
    id: 'n4-conv-02',
    title: 'Asking for directions',
    titleJp: '道案内',
    level: 'N4',
    situation: 'A tourist asks for directions to the post office on the street',
    patterns: [
      {
        japanese: '〜はどこですか。',
        kana: '〜はどこですか。',
        vietnamese: 'Where is ~? (asking for a location)',
        memoryTip:
          'Remember: doko = where. Always paired with a place-asking question.'
      },
      {
        japanese: '右にまがってください。',
        kana: 'みぎにまがってください。',
        vietnamese: 'Please turn right.',
        memoryTip:
          'Remember: migi = right, hidari = left. Easy to mix up at first!'
      },
      {
        japanese: 'まっすぐ行ってください。',
        kana: 'まっすぐいってください。',
        vietnamese: 'Please go straight ahead.',
        memoryTip:
          'Remember: massugu = straight, no turns.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: 'すみません、郵便局はどこですか。',
        kana: 'すみません、ゆうびんきょくはどこですか。',
        vietnamese: 'Excuse me, where is the post office?'
      },
      {
        speaker: 'Passerby',
        japanese: '郵便局ですか。この道をまっすぐ行ってください。',
        kana: 'ゆうびんきょくですか。このみちをまっすぐいってください。',
        vietnamese: 'The post office? Please go straight down this road.'
      },
      {
        speaker: 'Lin',
        japanese: 'まっすぐですね。それから？',
        kana: 'まっすぐですね。それから？',
        vietnamese: 'Straight ahead, got it. And then?'
      },
      {
        speaker: 'Passerby',
        japanese: '二つ目の信号を右にまがってください。左に郵便局がありますよ。',
        kana: 'ふたつめのしんごうをみぎにまがってください。ひだりにゆうびんきょくがありますよ。',
        vietnamese: 'Turn right at the second traffic light. The post office will be on your left.'
      },
      {
        speaker: 'Lin',
        japanese: 'ここから遠いですか。',
        kana: 'ここからとおいですか。',
        vietnamese: 'Is it far from here?'
      },
      {
        speaker: 'Passerby',
        japanese: 'いいえ、歩いて五分ぐらいですよ。',
        kana: 'いいえ、あるいてごふんぐらいですよ。',
        vietnamese: 'No, about a 5-minute walk.'
      }
    ],
    culturalNote:
      'When asking for directions in Japan, start with "sumimasen" (excuse me) to be polite before asking. Japanese people are usually very enthusiastic about giving directions, sometimes even walking you there themselves if it\'s on their way.'
  },

  // ─── 3. Describing Experiences (経験) ─────────────────────────────────
  {
    id: 'n4-conv-03',
    title: 'Talking about experiences',
    titleJp: '経験',
    level: 'N4',
    situation: 'Two friends talk about their travel experiences in Japan',
    patterns: [
      {
        japanese: '〜たことがあります。',
        kana: '〜たことがあります。',
        vietnamese: 'I have ~ before (describing an experience)',
        memoryTip:
          'Remember: ~ta koto ga arimasu — similar to the English "have done" structure, used for past experiences.'
      },
      {
        japanese: '〜たら、〜。',
        kana: '〜たら、〜。',
        vietnamese: 'If/When ~, then ~ (a conditional)',
        memoryTip:
          'Remember: ~tara is used for conditions: when A happens, B follows.'
      },
      {
        japanese: '〜てみたいです。',
        kana: '〜てみたいです。',
        vietnamese: 'I want to try ~ (wanting to experience something)',
        memoryTip:
          'Remember: ~te mitai expresses wanting to try something new.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '田中さんは富士山に登ったことがありますか。',
        kana: 'たなかさんはふじさんにのぼったことがありますか。',
        vietnamese: 'Tanaka, have you ever climbed Mt. Fuji?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'はい、一度あります。去年の夏に登りました。',
        kana: 'はい、いちどあります。きょねんのなつにのぼりました。',
        vietnamese: 'Yes, once. I climbed it last summer.'
      },
      {
        speaker: 'Lin',
        japanese: 'どうでしたか。',
        kana: 'どうでしたか。',
        vietnamese: 'How was it?'
      },
      {
        speaker: 'Tanaka',
        japanese: '大変でしたが、頂上に着いたら、景色がすばらしかったです。',
        kana: 'たいへんでしたが、ちょうじょうについたら、けしきがすばらしかったです。',
        vietnamese: 'It was tough, but once I reached the summit, the view was amazing.'
      },
      {
        speaker: 'Lin',
        japanese: 'いいですね。私も登ってみたいです。',
        kana: 'いいですね。わたしものぼってみたいです。',
        vietnamese: 'Nice. I want to try climbing it too.'
      },
      {
        speaker: 'Tanaka',
        japanese: '夏に行ったら、いっしょに行きましょう。',
        kana: 'なつにいったら、いっしょにいきましょう。',
        vietnamese: 'If we go in summer, let\'s go together.'
      }
    ],
    culturalNote:
      'Climbing Mt. Fuji is a "once in a lifetime" experience for many Japanese people. The official climbing season only lasts from July to mid-September. There\'s a famous saying: "A wise man climbs Fuji once, a fool climbs it twice" — but in practice, many people still go back!'
  },

  // ─── 4. Giving Reasons (理由) ────────────────────────────────────────
  {
    id: 'n4-conv-04',
    title: 'Giving reasons',
    titleJp: '理由',
    level: 'N4',
    situation: 'A student explains to their teacher why they missed class and arrived late',
    patterns: [
      {
        japanese: '〜から、〜。',
        kana: '〜から、〜。',
        vietnamese: 'Because ~, ~ (a reason, used in casual speech)',
        memoryTip:
          'Remember: kara follows the cause and connects to the result. Used freely in everyday conversation.'
      },
      {
        japanese: '〜ので、〜。',
        kana: '〜ので、〜。',
        vietnamese: 'Because ~, ~ (a reason, more polite than ~から)',
        memoryTip:
          'Remember: node is more polite than kara, used with a boss, teacher, or an elder.'
      },
      {
        japanese: '〜て、〜。',
        kana: '〜て、〜。',
        vietnamese: '~ so ~ / because ~, ~ (a lighter cause-and-effect link)',
        memoryTip:
          'Remember: the ~te form connecting sentences is a gentler cause-and-effect link than kara/node.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '先生、昨日休んですみませんでした。',
        kana: 'せんせい、きのうやすんですみませんでした。',
        vietnamese: 'Teacher, I\'m sorry for missing class yesterday.'
      },
      {
        speaker: 'Teacher',
        japanese: 'どうしましたか。',
        kana: 'どうしましたか。',
        vietnamese: 'What happened?'
      },
      {
        speaker: 'Lin',
        japanese: '熱があったので、病院に行きました。',
        kana: 'ねつがあったので、びょういんにいきました。',
        vietnamese: 'I had a fever, so I went to the hospital.'
      },
      {
        speaker: 'Teacher',
        japanese: 'そうですか。今日は大丈夫ですか。',
        kana: 'そうですか。きょうはだいじょうぶですか。',
        vietnamese: 'I see. Are you okay today?'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、薬を飲んだから、もう元気です。でも今朝バスが遅れて、遅刻してしまいました。',
        kana: 'はい、くすりをのんだから、もうげんきです。でもけさバスがおくれて、ちこくしてしまいました。',
        vietnamese: 'Yes, I took medicine, so I feel fine now. But the bus was delayed this morning, so I ended up being late.'
      },
      {
        speaker: 'Teacher',
        japanese: '分かりました。体に気をつけてくださいね。',
        kana: 'わかりました。からだにきをつけてくださいね。',
        vietnamese: 'I understand. Please take care of yourself.'
      }
    ],
    culturalNote:
      'In Japanese culture, when explaining a reason to a superior (a teacher, boss), it\'s better to use "~node" instead of "~kara" since node is more polite. Also, apologizing first and explaining the reason afterward is an important rule — it shows respect and responsibility.'
  },

  // ─── 5. At the Hospital (病院) ────────────────────────────────────────
  {
    id: 'n4-conv-05',
    title: 'At the hospital',
    titleJp: '病院',
    level: 'N4',
    situation: 'A patient visits a doctor for a stomachache and headache',
    patterns: [
      {
        japanese: '頭が痛いです。/ おなかが痛いです。',
        kana: 'あたまがいたいです。/ おなかがいたいです。',
        vietnamese: 'I have a headache. / I have a stomachache. (describing symptoms)',
        memoryTip:
          'Remember: itai = painful. Combine with a body part: atama (head) ga itai = headache, onaka (stomach) ga itai = stomachache.'
      },
      {
        japanese: '薬を飲んでください。',
        kana: 'くすりをのんでください。',
        vietnamese: 'Please take this medicine.',
        memoryTip:
          'Remember: kusuri = medicine. Nonde kudasai = please take (a doctor\'s instruction).'
      },
      {
        japanese: 'いつから痛いですか。',
        kana: 'いつからいたいですか。',
        vietnamese: 'Since when has it hurt? (a doctor asking a patient)',
        memoryTip:
          'Remember: itsu kara asks about when something started.'
      }
    ],
    dialogue: [
      {
        speaker: 'Doctor',
        japanese: 'どうしましたか。',
        kana: 'どうしましたか。',
        vietnamese: 'What seems to be the problem?'
      },
      {
        speaker: 'Lin',
        japanese: '昨日からおなかが痛いです。頭も少し痛いです。',
        kana: 'きのうからおなかがいたいです。あたまもすこしいたいです。',
        vietnamese: 'I\'ve had a stomachache since yesterday. My head hurts a bit too.'
      },
      {
        speaker: 'Doctor',
        japanese: '熱はありますか。',
        kana: 'ねつはありますか。',
        vietnamese: 'Do you have a fever?'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、今朝三十八度ありました。',
        kana: 'はい、けさ さんじゅうはちど ありました。',
        vietnamese: 'Yes, it was 38 degrees this morning.'
      },
      {
        speaker: 'Doctor',
        japanese: '分かりました。この薬を一日三回、食後に飲んでください。',
        kana: 'わかりました。このくすりをいちにちさんかい、しょくごにのんでください。',
        vietnamese: 'I understand. Please take this medicine three times a day, after meals.'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、分かりました。ありがとうございます。',
        kana: 'はい、わかりました。ありがとうございます。',
        vietnamese: 'Yes, understood. Thank you, doctor.'
      }
    ],
    culturalNote:
      'In Japan, when visiting a clinic for the first time, you\'ll need to fill out a "monshin-hyou" (問診票 — a medical questionnaire). Japan\'s healthcare system requires a health insurance card (hokenshou), including for international students. Medicine is usually dispensed at a separate pharmacy (yakkyoku), not at the hospital itself.'
  },

  // ─── 6. Part-time Job (アルバイト) ────────────────────────────────────
  {
    id: 'n4-conv-06',
    title: 'Part-time job',
    titleJp: 'アルバイト',
    level: 'N4',
    situation: 'Two international students talk about a part-time restaurant job',
    patterns: [
      {
        japanese: 'アルバイトをしています。',
        kana: 'あるばいとをしています。',
        vietnamese: 'I have a part-time job. (describing a current job)',
        memoryTip:
          'Remember: arubaito comes from the German word "Arbeit" (work) — Japanese borrowed it to mean a part-time job. Often shortened to "baito".'
      },
      {
        japanese: 'シフトに入る。',
        kana: 'しふとにはいる。',
        vietnamese: 'To work a shift. (signing up for a shift)',
        memoryTip:
          'Remember: shifuto comes from English "shift". "Shifuto ni hairu" = to take a shift.'
      },
      {
        japanese: '給料はいくらですか。',
        kana: 'きゅうりょうはいくらですか。',
        vietnamese: 'How much is the pay? (asking about wages)',
        memoryTip:
          'Remember: kyuuryou = wages/salary, ikura = how much.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '最近アルバイトを始めたんですよ。',
        kana: 'さいきんあるばいとをはじめたんですよ。',
        vietnamese: 'I started a part-time job recently.'
      },
      {
        speaker: 'Mai',
        japanese: 'へえ、どこで働いているんですか。',
        kana: 'へえ、どこではたらいているんですか。',
        vietnamese: 'Oh, where do you work?'
      },
      {
        speaker: 'Lin',
        japanese: '駅の近くのレストランです。週に三回シフトに入っています。',
        kana: 'えきのちかくのれすとらんです。しゅうにさんかいしふとにはいっています。',
        vietnamese: 'A restaurant near the station. I work shifts three times a week.'
      },
      {
        speaker: 'Mai',
        japanese: '給料はいくらですか。',
        kana: 'きゅうりょうはいくらですか。',
        vietnamese: 'How much do you get paid?'
      },
      {
        speaker: 'Lin',
        japanese: '時給千百円です。まだ少ないですが、勉強になります。',
        kana: 'じきゅうせんひゃくえんです。まだすくないですが、べんきょうになります。',
        vietnamese: '1,100 yen an hour. It\'s still not much, but I\'m learning a lot.'
      },
      {
        speaker: 'Mai',
        japanese: '大変じゃないですか。授業もあるのに。',
        kana: 'たいへんじゃないですか。じゅぎょうもあるのに。',
        vietnamese: 'Isn\'t that tough? You have classes too.'
      }
    ],
    culturalNote:
      'International students in Japan are allowed to work up to 28 hours a week during the school term and 40 hours a week during vacation. Minimum wage varies by prefecture — Tokyo has the highest (~1,113 yen/hour as of 2024). The word "baito" (バイト) is used more often than "arubaito" in everyday conversation.'
  },

  // ─── 7. Travel Planning (旅行) ───────────────────────────────────────
  {
    id: 'n4-conv-07',
    title: 'Planning a trip',
    titleJp: '旅行',
    level: 'N4',
    situation: 'Two friends plan a trip to Kyoto for a break',
    patterns: [
      {
        japanese: '予約をしたいです。',
        kana: 'よやくをしたいです。',
        vietnamese: 'I\'d like to make a reservation. (booking a room/ticket)',
        memoryTip:
          'Remember: yoyaku = to book/reserve in advance (a hotel room, restaurant, ticket).'
      },
      {
        japanese: '切符を買います。',
        kana: 'きっぷをかいます。',
        vietnamese: 'To buy a ticket. (train/bus ticket)',
        memoryTip:
          'Remember: kippu = a ticket (train, bus). Different from "chiketto" (チケット), used for movie/concert tickets.'
      },
      {
        japanese: '旅館に泊まりたいです。',
        kana: 'りょかんにとまりたいです。',
        vietnamese: 'I want to stay at a traditional Japanese inn.',
        memoryTip:
          'Remember: ryokan is a traditional Japanese inn with futon, onsen, and kaiseki meals. Different from "hoteru" (hotel), which is Western-style.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '夏休みに京都に行きたいんですが。',
        kana: 'なつやすみにきょうとにいきたいんですが。',
        vietnamese: 'I want to go to Kyoto over summer break.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'いいですね。新幹線の切符はもう買いましたか。',
        kana: 'いいですね。しんかんせんのきっぷはもうかいましたか。',
        vietnamese: 'Nice. Have you bought your shinkansen ticket yet?'
      },
      {
        speaker: 'Lin',
        japanese: 'まだです。いくらぐらいかかりますか。',
        kana: 'まだです。いくらぐらいかかりますか。',
        vietnamese: 'Not yet. About how much does it cost?'
      },
      {
        speaker: 'Tanaka',
        japanese: '東京から片道約一万四千円です。旅館の予約はしましたか。',
        kana: 'とうきょうからかたみちやくいちまんよんせんえんです。りょかんのよやくはしましたか。',
        vietnamese: 'About 14,000 yen one-way from Tokyo. Have you booked a ryokan?'
      },
      {
        speaker: 'Lin',
        japanese: '旅館に泊まりたいですが、どうやって予約しますか。',
        kana: 'りょかんにとまりたいですが、どうやってよやくしますか。',
        vietnamese: 'I want to stay at a ryokan, but how do I book it?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'インターネットで予約できますよ。手伝いましょうか。',
        kana: 'いんたーねっとでよやくできますよ。てつだいましょうか。',
        vietnamese: 'You can book online. Want me to help?'
      }
    ],
    culturalNote:
      'A ryokan (旅館) is a traditional Japanese inn with tatami rooms, futon bedding, and usually includes a kaiseki dinner. Guests wear a yukata and bathe in an onsen. It\'s best to book a ryokan early during peak season (cherry blossoms in April, autumn leaves in November). A JR Pass is a cost-effective option for foreign tourists.'
  },

  // ─── 8. Sports/Exercise (スポーツ) ───────────────────────────────────
  {
    id: 'n4-conv-08',
    title: 'Sports',
    titleJp: 'スポーツ',
    level: 'N4',
    situation: 'Two friends talk about their favorite sports and invite each other to work out',
    patterns: [
      {
        japanese: '運動をしています。',
        kana: 'うんどうをしています。',
        vietnamese: 'I exercise. (a current habit)',
        memoryTip:
          'Remember: undou = exercise/physical activity. Undou suru = to exercise.'
      },
      {
        japanese: '野球が好きです。',
        kana: 'やきゅうがすきです。',
        vietnamese: 'I like baseball.',
        memoryTip:
          'Remember: yakyuu = baseball. An extremely popular sport in Japan!'
      },
      {
        japanese: '泳ぐことができます。',
        kana: 'およぐことができます。',
        vietnamese: 'I can swim. (describing an ability)',
        memoryTip:
          'Remember: oyogu = to swim. Koto ga dekimasu = to be able to (ability).'
      }
    ],
    dialogue: [
      {
        speaker: 'Tanaka',
        japanese: 'リンさん、何かスポーツをしていますか。',
        kana: 'りんさん、なにかすぽーつをしていますか。',
        vietnamese: 'Lin, do you play any sports?'
      },
      {
        speaker: 'Lin',
        japanese: '毎朝ジョギングをしています。田中さんは？',
        kana: 'まいあさじょぎんぐをしています。たなかさんは？',
        vietnamese: 'I go jogging every morning. What about you, Tanaka?'
      },
      {
        speaker: 'Tanaka',
        japanese: '僕は野球が好きです。週末にチームで練習しています。',
        kana: 'ぼくはやきゅうがすきです。しゅうまつにちーむでれんしゅうしています。',
        vietnamese: 'I like baseball. I practice with my team on weekends.'
      },
      {
        speaker: 'Lin',
        japanese: 'いいですね。泳ぐこともできますか。',
        kana: 'いいですね。およぐこともできますか。',
        vietnamese: 'Nice. Can you swim too?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'はい、少しできます。今度いっしょにプールに行きませんか。',
        kana: 'はい、すこしできます。こんどいっしょにぷーるにいきませんか。',
        vietnamese: 'Yes, a little. Want to go to the pool together sometime?'
      },
      {
        speaker: 'Lin',
        japanese: 'ぜひ！運動した後、おいしいものを食べましょう。',
        kana: 'ぜひ！うんどうしたあと、おいしいものをたべましょう。',
        vietnamese: 'Definitely! Let\'s get something tasty to eat after exercising.'
      }
    ],
    culturalNote:
      'Baseball (yakyuu) is the most popular sport in Japan, often called the "national sport". The Koshien (甲子園) high school tournament draws millions of viewers every year. Sumo, judo, and soccer (sakkaa) are also very popular.'
  },

  // ─── 9. Moving House (引っ越し) ──────────────────────────────────────
  {
    id: 'n4-conv-09',
    title: 'Moving house',
    titleJp: '引っ越し',
    level: 'N4',
    situation: 'A student is preparing to move to a new apartment and asks a friend for help',
    patterns: [
      {
        japanese: '引っ越しをします。',
        kana: 'ひっこしをします。',
        vietnamese: 'I\'m going to move (house).',
        memoryTip:
          'Remember: hikkoshi = moving house, from the verb hikkosu (to relocate).'
      },
      {
        japanese: '荷物が多いです。',
        kana: 'にもつがおおいです。',
        vietnamese: 'I have a lot of luggage/belongings. (describing quantity)',
        memoryTip:
          'Remember: nimotsu = luggage/belongings.'
      },
      {
        japanese: 'アパートを探しています。',
        kana: 'あぱーとをさがしています。',
        vietnamese: 'I\'m looking for an apartment.',
        memoryTip:
          'Remember: apaato comes from English "apartment" (usually a 2-story wooden building). Different from "manshon" (マンション) = a concrete high-rise — don\'t confuse it with the English "mansion"!'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '来月引っ越しをするんです。',
        kana: 'らいげつひっこしをするんです。',
        vietnamese: 'I\'m moving house next month.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'そうですか。新しいアパートはもう見つかりましたか。',
        kana: 'そうですか。あたらしいあぱーとはもうみつかりましたか。',
        vietnamese: 'Really? Have you found a new apartment yet?'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、駅から歩いて十分のところに見つけました。',
        kana: 'はい、えきからあるいてじゅっぷんのところにみつけました。',
        vietnamese: 'Yes, I found a place a 10-minute walk from the station.'
      },
      {
        speaker: 'Tanaka',
        japanese: '荷物は多いですか。手伝いましょうか。',
        kana: 'にもつはおおいですか。てつだいましょうか。',
        vietnamese: 'Do you have a lot of belongings? Want me to help?'
      },
      {
        speaker: 'Lin',
        japanese: '本当ですか。荷物が多くて困っているんです。',
        kana: 'ほんとうですか。にもつがおおくてこまっているんです。',
        vietnamese: 'Really? I have so much stuff, I\'m a bit stuck.'
      },
      {
        speaker: 'Tanaka',
        japanese: '大丈夫ですよ。日曜日に手伝いに行きますね。',
        kana: 'だいじょうぶですよ。にちようびにてつだいにいきますね。',
        vietnamese: 'No worries. I\'ll come help on Sunday.'
      }
    ],
    culturalNote:
      'In Japan, moving usually requires paying "reikin" (礼金 — a non-refundable "thank you" payment to the landlord) and "shikikin" (敷金 — a security deposit). Each is often worth 1-2 months\' rent. The custom of "hikkoshi soba" — giving soba noodles to new neighbors — is still common in some regions.'
  },

  // ─── 10. Birthday Party (誕生日) ─────────────────────────────────────
  {
    id: 'n4-conv-10',
    title: 'Birthday party',
    titleJp: '誕生日',
    level: 'N4',
    situation: 'A group of friends plan a surprise birthday party',
    patterns: [
      {
        japanese: 'お誕生日おめでとうございます。',
        kana: 'おたんじょうびおめでとうございます。',
        vietnamese: 'Happy birthday! (polite)',
        memoryTip:
          'Remember: otanjoubi = birthday. Omedetou = congratulations.'
      },
      {
        japanese: 'プレゼントを買いました。',
        kana: 'ぷれぜんとをかいました。',
        vietnamese: 'I bought a gift.',
        memoryTip:
          'Remember: purezento comes from English "present". Gift-giving in Japan is taken seriously — how you wrap it (tsutsumi) matters as much as the gift itself!'
      },
      {
        japanese: 'ケーキを作りましょう。',
        kana: 'けーきをつくりましょう。',
        vietnamese: 'Let\'s make a cake.',
        memoryTip:
          'Remember: keeki comes from English "cake". Tsukurimashou = let\'s make it — "mashou" here suggests doing it together.'
      }
    ],
    dialogue: [
      {
        speaker: 'Mai',
        japanese: '来週の土曜日はリンさんの誕生日ですよ。',
        kana: 'らいしゅうのどようびはりんさんのたんじょうびですよ。',
        vietnamese: 'Next Saturday is Lin\'s birthday, you know.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'サプライズパーティーをしませんか。',
        kana: 'さぷらいずぱーてぃーをしませんか。',
        vietnamese: 'Shall we throw a surprise party?'
      },
      {
        speaker: 'Mai',
        japanese: 'いいですね！私はケーキを作ります。',
        kana: 'いいですね！わたしはけーきをつくります。',
        vietnamese: 'Great idea! I\'ll make a cake.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'じゃ、僕はプレゼントを買いに行きます。何がいいかな。',
        kana: 'じゃ、ぼくはぷれぜんとをかいにいきます。なにがいいかな。',
        vietnamese: 'Then I\'ll go buy a present. I wonder what would be good.'
      },
      {
        speaker: 'Mai',
        japanese: 'リンさんは日本語の本が好きだから、辞書はどうですか。',
        kana: 'りんさんはにほんごのほんがすきだから、じしょはどうですか。',
        vietnamese: 'Lin likes Japanese books, so how about a dictionary?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'いいアイデアですね。じゃ、土曜日の五時にリンさんの家で会いましょう。',
        kana: 'いいあいであですね。じゃ、どようびのごじにりんさんのいえであいましょう。',
        vietnamese: 'Good idea. Let\'s meet at Lin\'s place at 5 on Saturday.'
      }
    ],
    culturalNote:
      'In Japan, birthday parties are usually organized by friends rather than the person being celebrated. In schools, the whole class will sing "Happy Birthday" in English. Japanese cakes (keeki) tend to be lighter and less sweet than Western ones; the Strawberry Shortcake is the most popular.'
  },

  // ─── 11. Studying Abroad (留学) ──────────────────────────────────────
  {
    id: 'n4-conv-11',
    title: 'Studying abroad',
    titleJp: '留学',
    level: 'N4',
    situation: 'A student shares their study-abroad experience and cultural differences',
    patterns: [
      {
        japanese: '留学しています。',
        kana: 'りゅうがくしています。',
        vietnamese: 'I am studying abroad.',
        memoryTip:
          'Remember: ryuugaku = studying abroad.'
      },
      {
        japanese: '外国語を勉強しています。',
        kana: 'がいこくごをべんきょうしています。',
        vietnamese: 'I am studying a foreign language.',
        memoryTip:
          'Remember: gaikokugo = foreign language (gai = outside, koku = country, go = language).'
      },
      {
        japanese: '文化が違います。',
        kana: 'ぶんかがちがいます。',
        vietnamese: 'The culture is different.',
        memoryTip:
          'Remember: bunka = culture. Chigaimasu = to differ, used to point out a difference.'
      }
    ],
    dialogue: [
      {
        speaker: 'Teacher',
        japanese: 'リンさんはどうして日本に留学しましたか。',
        kana: 'りんさんはどうしてにほんにりゅうがくしましたか。',
        vietnamese: 'Lin, why did you decide to study in Japan?'
      },
      {
        speaker: 'Lin',
        japanese: '日本語と日本の文化に興味があったからです。',
        kana: 'にほんごとにほんのぶんかにきょうみがあったからです。',
        vietnamese: 'Because I was interested in Japanese and Japanese culture.'
      },
      {
        speaker: 'Teacher',
        japanese: '日本の生活はどうですか。',
        kana: 'にほんのせいかつはどうですか。',
        vietnamese: 'How is life in Japan?'
      },
      {
        speaker: 'Lin',
        japanese: '楽しいですが、文化が違うので、時々大変です。',
        kana: 'たのしいですが、ぶんかがちがうので、ときどきたいへんです。',
        vietnamese: 'It\'s fun, but the culture is different, so it\'s sometimes hard.'
      },
      {
        speaker: 'Teacher',
        japanese: 'どんなところが違いますか。',
        kana: 'どんなところがちがいますか。',
        vietnamese: 'What kind of things are different?'
      },
      {
        speaker: 'Lin',
        japanese: 'ゴミの分別が難しいです。ベトナムではそんなに分けませんから。',
        kana: 'ごみのぶんべつがむずかしいです。べとなむではそんなにわけませんから。',
        vietnamese: 'Sorting trash is difficult. In Vietnam we don\'t separate it that much.'
      }
    ],
    culturalNote:
      'Sorting trash (gomi no bunbetsu) is one of the biggest culture shocks for international students in Japan. Trash is divided into: burnable (moeru gomi), non-burnable (moenai gomi), recyclables (shigen gomi), and large items (sodai gomi). Each type has its own collection day.'
  },

  // ─── 12. Cooking (料理) ──────────────────────────────────────────────
  {
    id: 'n4-conv-12',
    title: 'Cooking',
    titleJp: '料理',
    level: 'N4',
    situation: 'Two friends cook together at home, trying a Japanese dish',
    patterns: [
      {
        japanese: '料理を作ります。',
        kana: 'りょうりをつくります。',
        vietnamese: 'I cook / make food.',
        memoryTip:
          'Remember: ryouri = cooking/a dish. Tsukurimasu = to make. "Ryouri wo tsukuru" uses "tsukuru", not "suru".'
      },
      {
        japanese: 'おいしいです。/ おいしくないです。',
        kana: 'おいしいです。/ おいしくないです。',
        vietnamese: 'Delicious. / Not delicious.',
        memoryTip:
          'Remember: oishii is an i-adjective, and its negative is oishikunai. Mazui = tastes bad (but blunt to say directly!).'
      },
      {
        japanese: '〜を入れてください。',
        kana: '〜をいれてください。',
        vietnamese: 'Please add ~. (a cooking instruction)',
        memoryTip:
          'Remember: ireru = to put in/add. Used a lot in recipes.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '今日はカレーライスを作りましょう。',
        kana: 'きょうはかれーらいすをつくりましょう。',
        vietnamese: 'Let\'s make curry rice today.'
      },
      {
        speaker: 'Mai',
        japanese: 'いいですね。何を買いますか。',
        kana: 'いいですね。なにをかいますか。',
        vietnamese: 'Sounds good. What do we need to buy?'
      },
      {
        speaker: 'Lin',
        japanese: 'にんじんと玉ねぎと肉を買います。カレーのルーはもうあります。',
        kana: 'にんじんとたまねぎとにくをかいます。かれーのるーはもうあります。',
        vietnamese: 'Carrots, onions, and meat. We already have the curry roux.'
      },
      {
        speaker: 'Mai',
        japanese: '野菜を切りましたよ。次は何をしますか。',
        kana: 'やさいをきりましたよ。つぎはなにをしますか。',
        vietnamese: 'I finished cutting the vegetables. What\'s next?'
      },
      {
        speaker: 'Lin',
        japanese: '鍋に油を入れてください。それから肉を入れて炒めます。',
        kana: 'なべにあぶらをいれてください。それからにくをいれていためます。',
        vietnamese: 'Please add oil to the pot. Then add the meat and stir-fry it.'
      },
      {
        speaker: 'Mai',
        japanese: 'わあ、おいしそう！早く食べたいです。',
        kana: 'わあ、おいしそう！はやくたべたいです。',
        vietnamese: 'Wow, that looks tasty! I want to eat it soon.'
      }
    ],
    culturalNote:
      'Japanese curry rice (karee raisu) is one of the most popular "national" dishes, usually made simply from boxed curry roux. Japanese curry is sweeter and thicker than Indian curry. Famous brands include Vermont Curry, Java Curry, and Golden Curry — an easy dish for international students to cook for the first time.'
  },

  // ─── 13. Lost & Found (忘れ物) ───────────────────────────────────────
  {
    id: 'n4-conv-13',
    title: 'Lost and found',
    titleJp: '忘れ物',
    level: 'N4',
    situation: 'A passenger goes to a station help desk to find an umbrella left on the train',
    patterns: [
      {
        japanese: '忘れ物をしました。',
        kana: 'わすれものをしました。',
        vietnamese: 'I left something behind. (forgetting an item)',
        memoryTip:
          'Remember: wasureru = to forget, mono = thing → wasuremono = something forgotten.'
      },
      {
        japanese: '落とし物をしました。',
        kana: 'おとしものをしました。',
        vietnamese: 'I dropped something.',
        memoryTip:
          'Remember: otosu = to drop, mono = thing → otoshimono = something dropped.'
      },
      {
        japanese: '〜を探しています。',
        kana: '〜をさがしています。',
        vietnamese: 'I am looking for ~.',
        memoryTip:
          'Remember: sagasu = to search, used when looking for an item or a person.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: 'すみません、忘れ物をしてしまいました。',
        kana: 'すみません、わすれものをしてしまいました。',
        vietnamese: 'Excuse me, I left something behind.'
      },
      {
        speaker: 'Station staff',
        japanese: '何を忘れましたか。',
        kana: 'なにをわすれましたか。',
        vietnamese: 'What did you leave?'
      },
      {
        speaker: 'Lin',
        japanese: '黒い傘を電車の中に忘れました。',
        kana: 'くろいかさをでんしゃのなかにわすれました。',
        vietnamese: 'I left a black umbrella on the train.'
      },
      {
        speaker: 'Station staff',
        japanese: '何線に乗りましたか。何時ごろでしたか。',
        kana: 'なにせんにのりましたか。なんじごろでしたか。',
        vietnamese: 'Which line did you take? About what time was it?'
      },
      {
        speaker: 'Lin',
        japanese: '中央線の三時ごろの電車です。',
        kana: 'ちゅうおうせんのさんじごろのでんしゃです。',
        vietnamese: 'A Chuo Line train around 3 o\'clock.'
      },
      {
        speaker: 'Station staff',
        japanese: '分かりました。見つかったらお電話しますね。こちらに名前と電話番号を書いてください。',
        kana: 'わかりました。みつかったらおでんわしますね。こちらになまえとでんわばんごうをかいてください。',
        vietnamese: 'I understand. I\'ll call you if it\'s found. Please write your name and phone number here.'
      }
    ],
    culturalNote:
      'Japan is famous for its extremely high rate of returning lost items. Every major train station has a "wasuremono" (忘れ物) counter that handles lost property. If it isn\'t found at the station, you can call the Lost & Found Center. Tokyo police receive over 3 million found items every year!'
  },

  // ─── 14. Seasonal Events (季節の行事) ────────────────────────────────
  {
    id: 'n4-conv-14',
    title: 'Seasonal events',
    titleJp: '季節の行事',
    level: 'N4',
    situation: 'A group of friends discuss upcoming spring and summer activities',
    patterns: [
      {
        japanese: '花見に行きましょう。',
        kana: 'はなみにいきましょう。',
        vietnamese: 'Let\'s go flower viewing.',
        memoryTip:
          'Remember: hanami = hana (flower) + mi (viewing) → cherry blossom viewing. A spring tradition where people lay out mats under sakura trees to eat and drink together.'
      },
      {
        japanese: 'お祭りがあります。',
        kana: 'おまつりがあります。',
        vietnamese: 'There is a festival.',
        memoryTip:
          'Remember: matsuri = festival, often featuring a portable shrine (mikoshi), food stalls (yatai), and fireworks (hanabi).'
      },
      {
        japanese: '夏休みに〜するつもりです。',
        kana: 'なつやすみに〜するつもりです。',
        vietnamese: 'I plan to ~ during summer vacation. (a plan)',
        memoryTip:
          'Remember: natsu yasumi = summer vacation. Tsumori = intention/plan, used for personal plans.'
      }
    ],
    dialogue: [
      {
        speaker: 'Mai',
        japanese: 'もうすぐ春ですね。花見に行きませんか。',
        kana: 'もうすぐはるですね。はなみにいきませんか。',
        vietnamese: 'Spring is almost here. Want to go flower viewing?'
      },
      {
        speaker: 'Lin',
        japanese: 'いいですね。どこがいいですか。',
        kana: 'いいですね。どこがいいですか。',
        vietnamese: 'Sounds good. Where should we go?'
      },
      {
        speaker: 'Tanaka',
        japanese: '上野公園はどうですか。桜がとてもきれいですよ。',
        kana: 'うえのこうえんはどうですか。さくらがとてもきれいですよ。',
        vietnamese: 'How about Ueno Park? The cherry blossoms are really beautiful there.'
      },
      {
        speaker: 'Mai',
        japanese: 'じゃ、上野にしましょう。夏はお祭りもありますよね。',
        kana: 'じゃ、うえのにしましょう。なつはおまつりもありますよね。',
        vietnamese: 'Let\'s go with Ueno then. There are summer festivals too, right?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'はい、七月に隅田川の花火大会がありますよ。',
        kana: 'はい、しちがつにすみだがわのはなびたいかいがありますよ。',
        vietnamese: 'Yes, there\'s the Sumida River fireworks festival in July.'
      },
      {
        speaker: 'Lin',
        japanese: '花火大会！夏休みにぜひ行くつもりです。浴衣を着てみたいです。',
        kana: 'はなびたいかい！なつやすみにぜひいくつもりです。ゆかたをきてみたいです。',
        vietnamese: 'A fireworks festival! I definitely plan to go over summer break. I want to try wearing a yukata too.'
      }
    ],
    culturalNote:
      'Japan has many seasonal events: hanami (flower viewing) in spring, hanabi taikai (fireworks festivals) and bon odori (Obon dancing) in summer, momijigari (autumn leaf viewing) in fall, and hatsumoude (New Year shrine visit) in winter. The Sumidagawa fireworks festival in Tokyo draws over a million visitors every year.'
  },

  // ─── 15. Comparing Things (比較) ─────────────────────────────────────
  {
    id: 'n4-conv-15',
    title: 'Comparing things',
    titleJp: '比較',
    level: 'N4',
    situation: 'Two friends are choosing a new phone and comparing products',
    patterns: [
      {
        japanese: 'AよりBの方がいいです。',
        kana: 'AよりBのほうがいいです。',
        vietnamese: 'B is better than A. (a comparison)',
        memoryTip:
          'Remember: yori marks the thing being compared against, hou ga marks the winner. Unlike English, "A yori B" means "B, more than A".'
      },
      {
        japanese: 'Bの方が〜です。',
        kana: 'Bのほうが〜です。',
        vietnamese: 'B is more ~. (emphasizing the "more" side)',
        memoryTip:
          'Remember: no hou ga always goes with the better/more option. "A yori" can be dropped when it\'s clear from context.'
      },
      {
        japanese: '〜の中で〜が一番です。',
        kana: '〜のなかで〜がいちばんです。',
        vietnamese: 'Among ~, ~ is the best. (a superlative)',
        memoryTip:
          'Remember: ichiban = number one, the best. "No naka de" = among/within a set.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '新しいスマホがほしいんですが、どれがいいですか。',
        kana: 'あたらしいすまほがほしいんですが、どれがいいですか。',
        vietnamese: 'I want a new smartphone. Which one is good?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'このAとBを比べましょう。Aの方が安いですよ。',
        kana: 'このAとBをくらべましょう。Aのほうがやすいですよ。',
        vietnamese: 'Let\'s compare A and B. A is cheaper.'
      },
      {
        speaker: 'Lin',
        japanese: 'でも、AよりBの方がカメラがいいですよね。',
        kana: 'でも、AよりBのほうがかめらがいいですよね。',
        vietnamese: 'But B has a better camera than A, right?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'そうですね。A、B、Cの中で、どれが一番人気ですか。',
        kana: 'そうですね。A、B、Cのなかで、どれがいちばんにんきですか。',
        vietnamese: 'True. Among A, B, and C, which is the most popular?'
      },
      {
        speaker: 'Shop staff',
        japanese: 'Bが一番人気がありますよ。カメラも画面も一番きれいです。',
        kana: 'Bがいちばんにんきがありますよ。かめらもがめんもいちばんきれいです。',
        vietnamese: 'B is the most popular. It has the best camera and the best screen too.'
      },
      {
        speaker: 'Lin',
        japanese: 'じゃ、Bにします。少し高いですが、長く使いたいですから。',
        kana: 'じゃ、Bにします。すこしたかいですが、ながくつかいたいですから。',
        vietnamese: 'Then I\'ll go with B. It\'s a bit pricier, but I want to use it for a long time.'
      }
    ],
    culturalNote:
      'Japanese people tend to avoid direct comparisons like "this one is bad", preferring "that one is better" (hou ga ii). When buying electronics in Japan, big stores like Yodobashi Camera or Bic Camera are a good bet — staff are very knowledgeable and can compare products in detail for you.'
  },

  // ─── 16. Permission (許可) ───────────────────────────────────────────
  {
    id: 'n4-conv-16',
    title: 'Asking permission',
    titleJp: '許可',
    level: 'N4',
    situation: 'A student asks the teacher for permission in class and at the library',
    patterns: [
      {
        japanese: '〜てもいいですか。',
        kana: '〜てもいいですか。',
        vietnamese: 'May I ~? (asking permission)',
        memoryTip:
          'Remember: ~te mo ii desu ka is the standard permission structure. A yes reply: "Ii desu yo". A no reply: "Chotto..."'
      },
      {
        japanese: '〜ないでください。',
        kana: '〜ないでください。',
        vietnamese: 'Please don\'t ~. (asking someone not to do something)',
        memoryTip:
          'Remember: ~naide kudasai is a polite way to ask someone not to do something, gentler than an outright ban — often used in classrooms and libraries.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '先生、窓を開けてもいいですか。暑いですから。',
        kana: 'せんせい、まどをあけてもいいですか。あついですから。',
        vietnamese: 'Teacher, may I open the window? It\'s hot.'
      },
      {
        speaker: 'Teacher',
        japanese: 'はい、いいですよ。どうぞ。',
        kana: 'はい、いいですよ。どうぞ。',
        vietnamese: 'Yes, go ahead.'
      },
      {
        speaker: 'Lin',
        japanese: 'あと、辞書を使ってもいいですか。',
        kana: 'あと、じしょをつかってもいいですか。',
        vietnamese: 'Also, may I use a dictionary?'
      },
      {
        speaker: 'Teacher',
        japanese: 'テストの時は使わないでください。でも、今は大丈夫ですよ。',
        kana: 'てすとのときはつかわないでください。でも、いまはだいじょうぶですよ。',
        vietnamese: 'Please don\'t use one during a test. But it\'s fine right now.'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、分かりました。写真を撮ってもいいですか。',
        kana: 'はい、わかりました。しゃしんをとってもいいですか。',
        vietnamese: 'Okay, understood. May I take a photo (of the board)?'
      },
      {
        speaker: 'Teacher',
        japanese: 'いいですよ。でも授業中はスマホを見ないでくださいね。',
        kana: 'いいですよ。でもじゅぎょうちゅうはすまほをみないでくださいね。',
        vietnamese: 'That\'s fine. But please don\'t look at your phone during class.'
      }
    ],
    culturalNote:
      'In Japanese culture, asking permission before doing something is very important, even for small things. The phrase "~te mo ii desu ka" is used constantly in daily life: asking to sit down (suwatte mo ii desu ka), asking to enter (haitte mo ii desu ka). When declining, Japanese people rarely say "dame" (no) outright — they say "chotto..." (a bit...) to keep the atmosphere harmonious.'
  },

  // ─── 17. Inviting Someone (誘い) ─────────────────────────────────────
  {
    id: 'n4-conv-17',
    title: 'Inviting someone',
    titleJp: '誘い',
    level: 'N4',
    situation: 'Coworkers invite each other to karaoke after work',
    patterns: [
      {
        japanese: '〜ませんか。',
        kana: '〜ませんか。',
        vietnamese: 'Would you like to ~? (a polite invitation)',
        memoryTip:
          'Remember: ~masen ka is a negative question that functions as an invitation — like the English "Won\'t you ~?" More polite than "~mashou".'
      },
      {
        japanese: '〜ましょう。',
        kana: '〜ましょう。',
        vietnamese: 'Let\'s ~! (suggesting a shared action)',
        memoryTip:
          'Remember: ~mashou is used once both sides have already agreed, more decisive than "masen ka".'
      },
      {
        japanese: 'いっしょに〜。',
        kana: 'いっしょに〜。',
        vietnamese: 'Together ~.',
        memoryTip:
          'Remember: issho ni = together, paired with a verb to invite someone to do something jointly.'
      }
    ],
    dialogue: [
      {
        speaker: 'Tanaka',
        japanese: '今日仕事の後、カラオケに行きませんか。',
        kana: 'きょうしごとのあと、からおけにいきませんか。',
        vietnamese: 'Want to go to karaoke after work today?'
      },
      {
        speaker: 'Lin',
        japanese: 'カラオケですか。いいですね。マイさんも誘いましょう。',
        kana: 'からおけですか。いいですね。まいさんもさそいましょう。',
        vietnamese: 'Karaoke? Sounds good. Let\'s invite Mai too.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'マイさん、いっしょにカラオケに行きませんか。',
        kana: 'まいさん、いっしょにからおけにいきませんか。',
        vietnamese: 'Mai, want to come to karaoke with us?'
      },
      {
        speaker: 'Mai',
        japanese: 'すみません、今日はちょっと用事があって…。',
        kana: 'すみません、きょうはちょっとようじがあって…。',
        vietnamese: 'Sorry, I have something to take care of today...'
      },
      {
        speaker: 'Tanaka',
        japanese: 'そうですか。残念ですね。また今度いっしょに行きましょう。',
        kana: 'そうですか。ざんねんですね。またこんどいっしょにいきましょう。',
        vietnamese: 'I see, that\'s too bad. Let\'s go together another time.'
      },
      {
        speaker: 'Mai',
        japanese: 'はい、ぜひ！楽しんできてくださいね。',
        kana: 'はい、ぜひ！たのしんできてくださいね。',
        vietnamese: 'Yes, definitely! Have fun.'
      }
    ],
    culturalNote:
      'In Japanese culture, refusing an invitation directly is considered impolite. Instead, people say "chotto..." (it\'s a bit tricky), "youji ga atte..." (I have something to do), or draw a breath through their teeth before saying "sore wa chotto..." — the listener understands this as a refusal. Karaoke in Japan is a common social activity with private rooms (not a shared stage), so everyone feels comfortable singing.'
  },

  // ─── 18. At the Convenience Store (コンビニ) ────────────────────────
  {
    id: 'n4-conv-18',
    title: 'At the convenience store',
    titleJp: 'コンビニ',
    level: 'N4',
    situation: 'A customer buys lunch at a konbini and pays',
    patterns: [
      {
        japanese: 'お弁当をください。',
        kana: 'おべんとうをください。',
        vietnamese: 'A boxed lunch, please.',
        memoryTip:
          'Remember: bentou = a boxed meal, obentou (with the polite "o"). Konbini bentou is the most common lunch in Japan.'
      },
      {
        japanese: '温めますか。',
        kana: 'あたためますか。',
        vietnamese: 'Would you like it heated up? (staff asking a customer)',
        memoryTip:
          'Remember: atatamemasu ka is the question konbini staff ask most often. Reply: "Hai, onegaishimasu" (yes, please).'
      }
    ],
    dialogue: [
      {
        speaker: 'Staff',
        japanese: 'いらっしゃいませ。',
        kana: 'いらっしゃいませ。',
        vietnamese: 'Welcome.'
      },
      {
        speaker: 'Lin',
        japanese: 'このお弁当と、おにぎりを二つください。',
        kana: 'このおべんとうと、おにぎりをふたつください。',
        vietnamese: 'This boxed lunch and two rice balls, please.'
      },
      {
        speaker: 'Staff',
        japanese: 'お弁当は温めますか。',
        kana: 'おべんとうはあたためますか。',
        vietnamese: 'Would you like the boxed lunch heated up?'
      },
      {
        speaker: 'Lin',
        japanese: 'はい、お願いします。あと、お箸をつけてください。',
        kana: 'はい、おねがいします。あと、おはしをつけてください。',
        vietnamese: 'Yes, please. Also, could I get chopsticks?'
      },
      {
        speaker: 'Staff',
        japanese: '全部で七百五十円です。袋は要りますか。',
        kana: 'ぜんぶでななひゃくごじゅうえんです。ふくろはいりますか。',
        vietnamese: 'That comes to 750 yen. Would you like a bag?'
      },
      {
        speaker: 'Lin',
        japanese: '袋は大丈夫です。カードで払えますか。',
        kana: 'ふくろはだいじょうぶです。かーどではらえますか。',
        vietnamese: 'No bag needed. Can I pay by card?'
      }
    ],
    culturalNote:
      'Konbini in Japan don\'t just sell food — they also offer ATM service, photocopying, package delivery (takuhaibin), utility bill payment, and concert ticket sales. The three biggest chains are 7-Eleven, FamilyMart, and Lawson. Since 2020, plastic bags come with an extra charge (~3-5 yen) as part of a plastic-reduction policy.'
  },

  // ─── 19. Talking About Future (将来) ─────────────────────────────────
  {
    id: 'n4-conv-19',
    title: 'Talking about the future',
    titleJp: '将来',
    level: 'N4',
    situation: 'Students share their dreams and future plans with friends',
    patterns: [
      {
        japanese: '将来〜たいです。',
        kana: 'しょうらい〜たいです。',
        vietnamese: 'In the future, I want to ~.',
        memoryTip:
          'Remember: shourai = the future. Combines with ~tai desu to talk about a dream.'
      },
      {
        japanese: '夢は〜ことです。',
        kana: 'ゆめは〜ことです。',
        vietnamese: 'My dream is to ~.',
        memoryTip:
          'Remember: yume = a dream. "Yume wa ~ koto desu" = my dream is to do ~.'
      },
      {
        japanese: '〜になりたいです。',
        kana: '〜になりたいです。',
        vietnamese: 'I want to become ~.',
        memoryTip:
          'Remember: ni naritai = want to become, used with a profession or a state. E.g. "Sensei ni naritai" = I want to become a teacher.'
      }
    ],
    dialogue: [
      {
        speaker: 'Mai',
        japanese: 'リンさん、将来何になりたいですか。',
        kana: 'りんさん、しょうらいなにになりたいですか。',
        vietnamese: 'Lin, what do you want to become in the future?'
      },
      {
        speaker: 'Lin',
        japanese: '通訳になりたいです。日本語とベトナム語の通訳です。',
        kana: 'つうやくになりたいです。にほんごとべとなむごのつうやくです。',
        vietnamese: 'I want to become an interpreter — a Japanese-Vietnamese interpreter.'
      },
      {
        speaker: 'Mai',
        japanese: 'すごいですね。夢は何ですか。',
        kana: 'すごいですね。ゆめはなんですか。',
        vietnamese: 'That\'s amazing. What is your dream?'
      },
      {
        speaker: 'Lin',
        japanese: '夢は自分の会社を作ることです。マイさんは？',
        kana: 'ゆめはじぶんのかいしゃをつくることです。まいさんは？',
        vietnamese: 'My dream is to start my own company. What about you, Mai?'
      },
      {
        speaker: 'Mai',
        japanese: '私は将来日本語の先生になりたいです。',
        kana: 'わたしはしょうらいにほんごのせんせいになりたいです。',
        vietnamese: 'I want to become a Japanese teacher in the future.'
      },
      {
        speaker: 'Lin',
        japanese: 'マイさんは教えるのが上手だから、きっといい先生になりますよ。',
        kana: 'まいさんはおしえるのがじょうずだから、きっといいせんせいになりますよ。',
        vietnamese: 'You\'re good at teaching, Mai, so you\'ll surely become a great teacher.'
      }
    ],
    culturalNote:
      'In Japan, the question "shourai no yume" (future dream) is a common one starting in elementary school. Students write about their dreams in an essay called "shourai no yume sakubun". The most popular career dreams among Japanese children today: YouTuber (boys), bakery owner (girls) — quite different from the old days, when it was baseball players and flight attendants!'
  },

  // ─── 20. Thanking Properly (お礼) ───────────────────────────────────
  {
    id: 'n4-conv-20',
    title: 'Thanking someone properly',
    titleJp: 'お礼',
    level: 'N4',
    situation: 'A student thanks their teacher and coworkers after receiving help',
    patterns: [
      {
        japanese: 'ありがとうございます。/ ありがとうございました。',
        kana: 'ありがとうございます。/ ありがとうございました。',
        vietnamese: 'Thank you (ongoing). / Thank you (for something finished). (two tenses)',
        memoryTip:
          'Remember: arigatou gozaimasu is used for an ongoing situation. Arigatou gozaimashita is used once the matter is finished — e.g. after someone has helped you with something.'
      },
      {
        japanese: 'お世話になりました。',
        kana: 'おせわになりました。',
        vietnamese: 'Thank you for taking care of me. (a deep thank-you)',
        memoryTip:
          'Remember: osewa ni narimashita — osewa means care/help. Used when ending a work or study relationship, leaving a job, or graduating.'
      },
      {
        japanese: 'おかげさまで〜。',
        kana: 'おかげさまで〜。',
        vietnamese: 'Thanks to you, ~. (acknowledging someone\'s help)',
        memoryTip:
          'Remember: okagesama de is used to say that a success is thanks to someone else\'s help. Very polite and humble.'
      }
    ],
    dialogue: [
      {
        speaker: 'Lin',
        japanese: '先生、一年間お世話になりました。',
        kana: 'せんせい、いちねんかんおせわになりました。',
        vietnamese: 'Teacher, thank you for everything this past year.'
      },
      {
        speaker: 'Teacher',
        japanese: 'リンさんもよくがんばりましたね。',
        kana: 'りんさんもよくがんばりましたね。',
        vietnamese: 'You worked really hard too, Lin.'
      },
      {
        speaker: 'Lin',
        japanese: 'おかげさまで、N4に合格できました。本当にありがとうございました。',
        kana: 'おかげさまで、N4にごうかくできました。ほんとうにありがとうございました。',
        vietnamese: 'Thanks to you, I passed N4. Thank you so much.'
      },
      {
        speaker: 'Teacher',
        japanese: 'それはリンさん自身の努力ですよ。おめでとう。',
        kana: 'それはりんさんじしんのどりょくですよ。おめでとう。',
        vietnamese: 'That was your own effort, Lin. Congratulations.'
      },
      {
        speaker: 'Lin',
        japanese: 'これからもよろしくお願いします。',
        kana: 'これからもよろしくおねがいします。',
        vietnamese: 'Please continue to guide me going forward.'
      },
      {
        speaker: 'Teacher',
        japanese: 'こちらこそ。N3もがんばってくださいね。',
        kana: 'こちらこそ。N3もがんばってくださいね。',
        vietnamese: 'Likewise. Good luck with N3 too.'
      }
    ],
    culturalNote:
      'Japan has a layered system of thanking depending on formality: "domo" (friends) → "arigatou" (casual) → "arigatou gozaimasu" (polite) → "osewa ni narimashita" (very formal). "Okagesama de" expresses humility — success isn\'t seen as purely your own but thanks to the people around you. This is a core value in Japanese culture.'
  }
];
