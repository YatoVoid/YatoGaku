import type { ConversationPattern } from '$lib/types/lesson';

export const N5_CONVERSATIONS: ConversationPattern[] = [
  // ─────────────────────────────────────────────
  // 1. Self-introduction (自己紹介)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-01',
    title: 'Self-introduction',
    titleJp: '自己紹介',
    level: 'N5',
    situation: 'Meeting someone new for the first time in Japanese class',
    patterns: [
      {
        japanese: 'はじめまして、〜です。よろしくおねがいします。',
        kana: 'はじめまして、〜です。よろしくおねがいします。',
        vietnamese: 'Nice to meet you, I am ~. Please treat me well.',
        memoryTip:
          'Remember: "hajimemashite" = "beginning to meet" → the first time you meet someone. Picture opening the first page (hajime) of a new friendship book!'
      },
      {
        japanese: 'わたしは 〜じん です。',
        kana: 'わたしは 〜じん です。',
        vietnamese: 'I am from ~. (nationality)',
        memoryTip:
          'Remember: "~jin" = person from ~. "Vietnam jin" = a Vietnamese person. Jin sounds like the character 人 (person) in Sino-Vietnamese readings → a human being!'
      },
      {
        japanese: 'おなまえは なんですか。',
        kana: 'おなまえは なんですか。',
        vietnamese: 'What is your name?',
        memoryTip:
          'Remember: "onamae" = name (polite). The "o" at the front is an honorific, "namae" = name. Say it slowly: "o-na-mae" and it sticks after a couple of tries.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Tanaka)',
        japanese: 'はじめまして。たなかです。',
        kana: 'はじめまして。たなかです。',
        vietnamese: 'Nice to meet you. I am Tanaka.'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'はじめまして。ランです。ベトナムじんです。',
        kana: 'はじめまして。らんです。べとなむじんです。',
        vietnamese: 'Nice to meet you. I am Lan. I am Vietnamese.'
      },
      {
        speaker: 'A (Tanaka)',
        japanese: 'がくせいですか。',
        kana: 'がくせいですか。',
        vietnamese: 'Are you a student?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'はい、がくせいです。たなかさんは？',
        kana: 'はい、がくせいです。たなかさんは？',
        vietnamese: 'Yes, I am a student. What about you, Tanaka?'
      },
      {
        speaker: 'A (Tanaka)',
        japanese: 'かいしゃいんです。よろしくおねがいします。',
        kana: 'かいしゃいんです。よろしくおねがいします。',
        vietnamese: 'I am a company employee. Nice to meet you.'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'こちらこそ、よろしくおねがいします。',
        kana: 'こちらこそ、よろしくおねがいします。',
        vietnamese: 'The pleasure is mine.'
      }
    ],
    culturalNote:
      'Japanese people usually bow (おじぎ - ojigi) when greeting each other. The phrase "よろしくお願いします" is essential when meeting someone for the first time — it expresses respect and a wish to build a good relationship. The deeper the bow, the more polite it is!'
  },

  // ─────────────────────────────────────────────
  // 2. Shopping (買い物)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-02',
    title: 'Shopping',
    titleJp: '買い物',
    level: 'N5',
    situation: 'Buying things at a convenience store (コンビニ) in Japan',
    patterns: [
      {
        japanese: 'これは いくらですか。',
        kana: 'これは いくらですか。',
        vietnamese: 'How much is this?',
        memoryTip:
          'Remember: "ikura" = how much money. It is also the name of salmon roe (ikura) — pricey either way!'
      },
      {
        japanese: 'これ／それ／あれ を ください。',
        kana: 'これ／それ／あれ を ください。',
        vietnamese: 'Please give me this / that (near you) / that (over there).',
        memoryTip:
          'Remember the KO-SO-A set: Kore (near me), Sore (near listener), Are (far from both). Think of it as a little three-step ladder of distance.'
      },
      {
        japanese: 'すみません、〜は ありますか。',
        kana: 'すみません、〜は ありますか。',
        vietnamese: 'Excuse me, do you have ~?',
        memoryTip:
          'Remember: "arimasu ka" = is there/do you have? "Aru" = to exist (for objects). Very useful for asking if a store carries something.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Customer)',
        japanese: 'すみません。これは いくらですか。',
        kana: 'すみません。これは いくらですか。',
        vietnamese: 'Excuse me. How much is this?'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'それは ひゃくえん です。',
        kana: 'それは ひゃくえん です。',
        vietnamese: 'That is 100 yen.'
      },
      {
        speaker: 'A (Customer)',
        japanese: 'じゃ、これを ふたつ ください。',
        kana: 'じゃ、これを ふたつ ください。',
        vietnamese: 'Then please give me two of these.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'はい。にひゃくえん です。',
        kana: 'はい。にひゃくえん です。',
        vietnamese: 'Sure. That is 200 yen.'
      },
      {
        speaker: 'A (Customer)',
        japanese: 'これも ください。',
        kana: 'これも ください。',
        vietnamese: 'This one too, please.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'ぜんぶで さんびゃくごじゅうえん です。ありがとうございます。',
        kana: 'ぜんぶで さんびゃくごじゅうえん です。ありがとうございます。',
        vietnamese: 'That comes to 350 yen in total. Thank you very much.'
      }
    ],
    culturalNote:
      'In Japan, store staff are usually very polite and always use honorific language when serving customers. Money is placed on a small tray rather than handed over directly. Don\'t forget to say "ありがとうございます" when receiving your goods — it is basic courtesy!'
  },

  // ─────────────────────────────────────────────
  // 3. Asking time (時間)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-03',
    title: 'Asking the time',
    titleJp: '時間',
    level: 'N5',
    situation: 'Asking the time at a train station and arranging a schedule',
    patterns: [
      {
        japanese: 'いま なんじ ですか。',
        kana: 'いま なんじ ですか。',
        vietnamese: 'What time is it now?',
        memoryTip:
          'Remember: "ima" = now, "nanji" = what time. "Nan" = what/how many, "ji" = o\'clock. A classic phrase for whenever you glance at your wrist and find no watch there.'
      },
      {
        japanese: '〜じ 〜ふん です。',
        kana: '〜じ 〜ふん です。',
        vietnamese: 'It is ~ o\'clock ~ minutes.',
        memoryTip:
          'Remember: "ji" = o\'clock, "fun/pun" = minutes. Careful: 1 minute = "ippun", 3 minutes = "sanpun", 6 minutes = "roppun" — the sound shifts depending on the number!'
      },
      {
        japanese: '〜から 〜まで です。',
        kana: '〜から 〜まで です。',
        vietnamese: 'From ~ to ~.',
        memoryTip:
          'Remember: "kara" = from (start), "made" = until (end). Think of "kara" as the starting gun and "made" as the finish line.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Minh)',
        japanese: 'すみません、いま なんじですか。',
        kana: 'すみません、いま なんじですか。',
        vietnamese: 'Excuse me, what time is it now?'
      },
      {
        speaker: 'B (Passerby)',
        japanese: 'いま くじ じゅうごふん です。',
        kana: 'いま くじ じゅうごふん です。',
        vietnamese: 'It is 9:15 now.'
      },
      {
        speaker: 'A (Minh)',
        japanese: 'ありがとうございます。でんしゃは なんじですか。',
        kana: 'ありがとうございます。でんしゃは なんじですか。',
        vietnamese: 'Thank you. What time is the train?'
      },
      {
        speaker: 'B (Passerby)',
        japanese: 'くじ はん です。',
        kana: 'くじ はん です。',
        vietnamese: 'It\'s at 9:30.'
      },
      {
        speaker: 'A (Minh)',
        japanese: 'くじはんから じゅうじまで ですか。',
        kana: 'くじはんから じゅうじまで ですか。',
        vietnamese: 'From 9:30 to 10:00?'
      },
      {
        speaker: 'B (Passerby)',
        japanese: 'はい、そうです。がんばってください。',
        kana: 'はい、そうです。がんばってください。',
        vietnamese: 'Yes, that\'s right. Good luck!'
      }
    ],
    culturalNote:
      'Japanese people place huge importance on punctuality (時間厳守 - jikan genshu). Japan\'s trains are famous for being accurate down to the second — if a train is even one minute late, the station will hand out written apology slips for passengers! When meeting someone, arriving 5 minutes early is considered polite.'
  },

  // ─────────────────────────────────────────────
  // 4. At restaurant (レストラン)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-04',
    title: 'At a restaurant',
    titleJp: 'レストラン',
    level: 'N5',
    situation: 'Ordering food at a Japanese restaurant',
    patterns: [
      {
        japanese: 'すみません、メニューを おねがいします。',
        kana: 'すみません、めにゅーを おねがいします。',
        vietnamese: 'Excuse me, could I have the menu, please?',
        memoryTip:
          'Remember: "sumimasen" sounds a bit like "excuse me". "Onegaishimasu" = please. Two survival phrases in Japan!'
      },
      {
        japanese: '〜を おねがいします。/ 〜を ください。',
        kana: '〜を おねがいします。/ 〜を ください。',
        vietnamese: 'I would like ~. (polite / plain)',
        memoryTip:
          'Remember: "onegaishimasu" is more polite than "kudasai". Both mean "please give me ~", just with different levels of formality.'
      },
      {
        japanese: 'おかんじょう を おねがいします。',
        kana: 'おかんじょう を おねがいします。',
        vietnamese: 'Could I have the bill, please?',
        memoryTip:
          'Remember: "okanjou" = the bill/check. Useful the moment you\'re ready to leave!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Customer - Hoa)',
        japanese: 'すみません。',
        kana: 'すみません。',
        vietnamese: 'Excuse me (calling the staff over).'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'いらっしゃいませ。なんめいさま ですか。',
        kana: 'いらっしゃいませ。なんめいさま ですか。',
        vietnamese: 'Welcome. How many people?'
      },
      {
        speaker: 'A (Customer - Hoa)',
        japanese: 'ふたりです。めにゅーを おねがいします。',
        kana: 'ふたりです。めにゅーを おねがいします。',
        vietnamese: 'Two people. Could I have the menu, please?'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'はい、どうぞ。',
        kana: 'はい、どうぞ。',
        vietnamese: 'Here you go.'
      },
      {
        speaker: 'A (Customer - Hoa)',
        japanese: 'ラーメンと ぎょうざを おねがいします。',
        kana: 'らーめんと ぎょうざを おねがいします。',
        vietnamese: 'I\'ll have ramen and gyoza, please.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'おのみものは？',
        kana: 'おのみものは？',
        vietnamese: 'And to drink?'
      }
    ],
    culturalNote:
      'In Japan, you call staff over by saying "すみません" or pressing a call button on the table — not by waving loudly. Before eating you say "いただきます" (itadakimasu = a humble expression of gratitude before a meal), and after finishing you say "ごちそうさまでした" (gochisousama deshita = thank you for the meal). And remember: tipping is not expected in Japan!'
  },

  // ─────────────────────────────────────────────
  // 5. Daily greetings (挨拶)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-05',
    title: 'Everyday greetings',
    titleJp: '挨拶',
    level: 'N5',
    situation: 'Greeting neighbors and coworkers at different times of day',
    patterns: [
      {
        japanese: 'おはようございます。/ こんにちは。/ こんばんは。',
        kana: 'おはようございます。/ こんにちは。/ こんばんは。',
        vietnamese: 'Good morning. / Good afternoon. / Good evening.',
        memoryTip:
          'Remember the three greetings: "Ohayou" (morning) sounds like the US state "Ohio". "Konnichiwa" (afternoon/daytime) and "Konbanwa" (evening) share the same "wa" ending, both used once the day is underway.'
      },
      {
        japanese: 'おげんきですか。— はい、げんきです。',
        kana: 'おげんきですか。— はい、げんきです。',
        vietnamese: 'How are you? — I\'m fine, thanks.',
        memoryTip:
          'Remember: "genki" = healthy/energetic/well. Think of the anime move "GENKI DAMA" (spirit bomb) → genki = full of energy = doing well!'
      },
      {
        japanese: 'さようなら。/ じゃ、また。',
        kana: 'さようなら。/ じゃ、また。',
        vietnamese: 'Goodbye. / See you then.',
        memoryTip:
          'Remember: "sayounara" is formal (a longer goodbye), "ja mata" is casual (see you again soon). Use "ja mata" with friends!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Yuki)',
        japanese: 'おはようございます、たなかさん。',
        kana: 'おはようございます、たなかさん。',
        vietnamese: 'Good morning, Tanaka.'
      },
      {
        speaker: 'B (Tanaka)',
        japanese: 'おはようございます。おげんきですか。',
        kana: 'おはようございます。おげんきですか。',
        vietnamese: 'Good morning. How are you?'
      },
      {
        speaker: 'A (Yuki)',
        japanese: 'はい、げんきです。たなかさんは？',
        kana: 'はい、げんきです。たなかさんは？',
        vietnamese: 'I\'m fine, thanks. And you, Tanaka?'
      },
      {
        speaker: 'B (Tanaka)',
        japanese: 'げんきです。きょうは いいてんきですね。',
        kana: 'げんきです。きょうは いいてんきですね。',
        vietnamese: 'I\'m well. The weather is nice today, isn\'t it?'
      },
      {
        speaker: 'A (Yuki)',
        japanese: 'そうですね。じゃ、いってきます。',
        kana: 'そうですね。じゃ、いってきます。',
        vietnamese: 'It really is. Well then, I\'m off.'
      },
      {
        speaker: 'B (Tanaka)',
        japanese: 'いってらっしゃい。きをつけて。',
        kana: 'いってらっしゃい。きをつけて。',
        vietnamese: 'Take care, see you later.'
      }
    ],
    culturalNote:
      'The pair "いってきます" (I\'m off) and "いってらっしゃい" (take care, see you later) is a distinctive feature of Japanese culture — always said when leaving the house. Likewise, when returning home you say "ただいま" (I\'m home) and the person at home replies "おかえりなさい" (welcome home). This is how Japanese families show care for one another.'
  },

  // ─────────────────────────────────────────────
  // 6. At the post office (郵便局)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-06',
    title: 'At the post office',
    titleJp: '郵便局',
    level: 'N5',
    situation: 'Sending mail and buying stamps at a Japanese post office',
    patterns: [
      {
        japanese: 'きってを ください。',
        kana: 'きってを ください。',
        vietnamese: 'Stamps, please.',
        memoryTip:
          'Remember: "kitte" = postage stamp. A small word for a small sticky piece of paper.'
      },
      {
        japanese: 'はがきを にまい おねがいします。',
        kana: 'はがきを にまい おねがいします。',
        vietnamese: 'Two postcards, please.',
        memoryTip:
          'Remember: "hagaki" = postcard, "nimai" = two (flat items). "Mai" is the counter for flat things (stamps, paper, shirts).'
      },
      {
        japanese: 'ベトナムに おくりたいです。',
        kana: 'べとなむに おくりたいです。',
        vietnamese: 'I want to send this to Vietnam.',
        memoryTip:
          'Remember: "okurimasu" = to send, "okuritai" = want to send. Handy when mailing something abroad.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Customer - Trang)',
        japanese: 'すみません、きってを ください。',
        kana: 'すみません、きってを ください。',
        vietnamese: 'Excuse me, stamps please.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'なんまい ですか。',
        kana: 'なんまい ですか。',
        vietnamese: 'How many would you like?'
      },
      {
        speaker: 'A (Customer - Trang)',
        japanese: 'さんまい おねがいします。はがきも にまい ください。',
        kana: 'さんまい おねがいします。はがきも にまい ください。',
        vietnamese: 'Three, please. And two postcards as well.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'はい。どこに おくりますか。',
        kana: 'はい。どこに おくりますか。',
        vietnamese: 'Sure. Where are you sending them to?'
      },
      {
        speaker: 'A (Customer - Trang)',
        japanese: 'ベトナムに おくりたいです。いくらですか。',
        kana: 'べとなむに おくりたいです。いくらですか。',
        vietnamese: 'I want to send them to Vietnam. How much will it be?'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'ぜんぶで ごひゃくえん です。',
        kana: 'ぜんぶで ごひゃくえん です。',
        vietnamese: 'That will be 500 yen in total.'
      }
    ],
    culturalNote:
      'Japan\'s post office (郵便局 - yuubinkyoku) is easy to recognize by its 〒 symbol. Besides mail, Japanese post offices also offer banking (ゆうちょ銀行) and insurance services. New Year\'s postcards (年賀状 - nengajou) are an important tradition — Japanese people send hundreds of them every New Year!'
  },

  // ─────────────────────────────────────────────
  // 7. Weather (天気)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-07',
    title: 'Weather',
    titleJp: '天気',
    level: 'N5',
    situation: 'Chatting about the weather with a coworker in the morning',
    patterns: [
      {
        japanese: 'きょうは いい てんきですね。',
        kana: 'きょうは いい てんきですね。',
        vietnamese: 'The weather is nice today, isn\'t it?',
        memoryTip:
          'Remember: "tenki" = weather. "Ten" (天) = sky/heaven, "ki" (気) = air/energy. A classic Japanese small-talk opener!'
      },
      {
        japanese: 'あめが ふっています。',
        kana: 'あめが ふっています。',
        vietnamese: 'It\'s raining.',
        memoryTip:
          'Remember: "ame" = rain, "futte imasu" = is falling. Useful when you step outside and immediately regret it.'
      },
      {
        japanese: 'あしたは はれですか、くもりですか。',
        kana: 'あしたは はれですか、くもりですか。',
        vietnamese: 'Will it be sunny or cloudy tomorrow?',
        memoryTip:
          'Remember three weather states: "hare" (晴れ) = sunny, "kumori" (曇り) = cloudy, "ame" (雨) = rain.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Suzuki)',
        japanese: 'おはようございます。きょうは いい てんきですね。',
        kana: 'おはようございます。きょうは いい てんきですね。',
        vietnamese: 'Good morning. Nice weather today, isn\'t it?'
      },
      {
        speaker: 'B (Mai)',
        japanese: 'そうですね。でも、あしたは あめですよ。',
        kana: 'そうですね。でも、あしたは あめですよ。',
        vietnamese: 'It really is. But it will rain tomorrow, apparently.'
      },
      {
        speaker: 'A (Suzuki)',
        japanese: 'ほんとうですか。かさを もっていきますか。',
        kana: 'ほんとうですか。かさを もっていきますか。',
        vietnamese: 'Really? Should I bring an umbrella?'
      },
      {
        speaker: 'B (Mai)',
        japanese: 'はい、もっていったほうが いいですよ。',
        kana: 'はい、もっていったほうが いいですよ。',
        vietnamese: 'Yes, you\'d better bring one.'
      },
      {
        speaker: 'A (Suzuki)',
        japanese: 'さむいですか。',
        kana: 'さむいですか。',
        vietnamese: 'Is it cold?'
      },
      {
        speaker: 'B (Mai)',
        japanese: 'ちょっと さむいですね。コートを きてください。',
        kana: 'ちょっと さむいですね。こーとを きてください。',
        vietnamese: 'It\'s a bit cold. Wear a coat.'
      }
    ],
    culturalNote:
      'Talking about the weather is the most common small talk in Japan. Japan has four distinct seasons and Japanese people take great pride in this. The rainy season (梅雨 - tsuyu) runs roughly from June to July. Japanese people always carry an umbrella just in case — you\'ll see umbrellas for sale everywhere, from convenience stores to train stations!'
  },

  // ─────────────────────────────────────────────
  // 8. Family introduction (家族)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-08',
    title: 'Introducing family',
    titleJp: '家族',
    level: 'N5',
    situation: 'Introducing family members to a new friend',
    patterns: [
      {
        japanese: 'かぞくは ごにん です。',
        kana: 'かぞくは ごにん です。',
        vietnamese: 'There are 5 people in my family.',
        memoryTip:
          'Remember: "kazoku" = family. "Ka" (家) = house, "zoku" (族) = clan/tribe.'
      },
      {
        japanese: 'ちちは かいしゃいん です。ははは せんせい です。',
        kana: 'ちちは かいしゃいん です。ははは せんせい です。',
        vietnamese: 'My father is a company employee. My mother is a teacher.',
        memoryTip:
          'Remember: "chichi" = my own father, "haha" = my own mother. Someone else\'s father/mother = "otousan"/"okaasan". Japanese has separate vocabulary for your own family vs. someone else\'s.'
      },
      {
        japanese: 'あにが ひとり、あねが ひとり います。',
        kana: 'あにが ひとり、あねが ひとり います。',
        vietnamese: 'I have one older brother and one older sister.',
        memoryTip:
          'Remember: "ani" = my own older brother, "ane" = my own older sister. Someone else\'s older brother/sister = "oniisan"/"oneesan".'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Yamada)',
        japanese: 'ランさんの かぞくは なんにん ですか。',
        kana: 'らんさんの かぞくは なんにん ですか。',
        vietnamese: 'How many people are in your family, Lan?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'ごにんです。ちちと ははと あにと いもうとと わたしです。',
        kana: 'ごにんです。ちちと ははと あにと いもうとと わたしです。',
        vietnamese: 'Five people. My father, mother, older brother, younger sister, and me.'
      },
      {
        speaker: 'A (Yamada)',
        japanese: 'おにいさんは なにを していますか。',
        kana: 'おにいさんは なにを していますか。',
        vietnamese: 'What does your older brother do?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'あには だいがくせいです。にほんごを べんきょうしています。',
        kana: 'あには だいがくせいです。にほんごを べんきょうしています。',
        vietnamese: 'My older brother is a university student. He is studying Japanese.'
      },
      {
        speaker: 'A (Yamada)',
        japanese: 'いいですね！いもうとさんは？',
        kana: 'いいですね！いもうとさんは？',
        vietnamese: 'Nice! And your younger sister?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'いもうとは こうこうせいです。じゅうろくさいです。',
        kana: 'いもうとは こうこうせいです。じゅうろくさいです。',
        vietnamese: 'My younger sister is a high schooler. She is 16.'
      }
    ],
    culturalNote:
      'Japanese has two family vocabularies: one for your OWN family (chichi, haha, ani, ane) and one for SOMEONE ELSE\'S family (otousan, okaasan, oniisan, oneesan). Using "otousan" to describe your own father would be incorrect, since that\'s an honorific reserved for someone else\'s father. This is the important uchi-soto (inside-outside) principle in Japanese culture!'
  },

  // ─────────────────────────────────────────────
  // 9. Transportation (交通)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-09',
    title: 'Transportation',
    titleJp: '交通',
    level: 'N5',
    situation: 'Asking directions to the train station and using public transportation',
    patterns: [
      {
        japanese: 'えきは どこですか。',
        kana: 'えきは どこですか。',
        vietnamese: 'Where is the train station?',
        memoryTip:
          'Remember: "eki" = train station. "Doko" = where.'
      },
      {
        japanese: 'でんしゃで いきます。/ バスで いきます。',
        kana: 'でんしゃで いきます。/ ばすで いきます。',
        vietnamese: 'I\'ll go by train. / I\'ll go by bus.',
        memoryTip:
          'Remember: "densha" = train. "Den" (電) = electricity, "sha" (車) = vehicle → "electric vehicle". "Basu" comes straight from the English "bus". The particle "de" = by (means of transport).'
      },
      {
        japanese: 'つぎの でんしゃは なんじですか。',
        kana: 'つぎの でんしゃは なんじですか。',
        vietnamese: 'What time is the next train?',
        memoryTip:
          'Remember: "tsugi" = next. A very useful phrase when standing on the platform waiting.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Hung)',
        japanese: 'すみません、えきは どこですか。',
        kana: 'すみません、えきは どこですか。',
        vietnamese: 'Excuse me, where is the train station?'
      },
      {
        speaker: 'B (Passerby)',
        japanese: 'まっすぐ いってください。みぎに あります。',
        kana: 'まっすぐ いってください。みぎに あります。',
        vietnamese: 'Please go straight ahead. It\'s on the right.'
      },
      {
        speaker: 'A (Hung)',
        japanese: 'ありがとうございます。とうきょうえきまで いくらですか。',
        kana: 'ありがとうございます。とうきょうえきまで いくらですか。',
        vietnamese: 'Thank you. How much is it to Tokyo Station?'
      },
      {
        speaker: 'B (Passerby)',
        japanese: 'にひゃくえん ぐらいですよ。',
        kana: 'にひゃくえん ぐらいですよ。',
        vietnamese: 'Around 200 yen.'
      },
      {
        speaker: 'A (Hung)',
        japanese: 'でんしゃと バスと、どちらが はやいですか。',
        kana: 'でんしゃと ばすと、どちらが はやいですか。',
        vietnamese: 'Which is faster, the train or the bus?'
      },
      {
        speaker: 'B (Passerby)',
        japanese: 'でんしゃの ほうが はやいです。じゅっぷんぐらい ですよ。',
        kana: 'でんしゃの ほうが はやいです。じゅっぷんぐらい ですよ。',
        vietnamese: 'The train is faster. It takes about 10 minutes.'
      }
    ],
    culturalNote:
      'Japan\'s train system is one of the best in the world — precise, clean, and safe. IC cards (Suica, Pasmo) let you pay quickly without buying a paper ticket. On trains, keep your phone on silent mode (マナーモード) and do not make phone calls — that\'s an unwritten rule!'
  },

  // ─────────────────────────────────────────────
  // 10. Hobby / Likes (趣味)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-10',
    title: 'Hobbies',
    titleJp: '趣味',
    level: 'N5',
    situation: 'Talking about hobbies with a new acquaintance at a social gathering',
    patterns: [
      {
        japanese: 'しゅみは なんですか。',
        kana: 'しゅみは なんですか。',
        vietnamese: 'What is your hobby?',
        memoryTip:
          'Remember: "shumi" = hobby/interest.'
      },
      {
        japanese: '〜が すきです。/ 〜が きらいです。',
        kana: '〜が すきです。/ 〜が きらいです。',
        vietnamese: 'I like ~. / I dislike ~.',
        memoryTip:
          'Remember: "suki" = like, "kirai" = dislike. Two of the most useful adjectives you\'ll learn early on.'
      },
      {
        japanese: 'わたしも 〜が すきです。',
        kana: 'わたしも 〜が すきです。',
        vietnamese: 'I like ~ too.',
        memoryTip:
          'Remember: "mo" = too/also. A tiny particle, but a very important one! "Watashi MO" = I TOO.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Kenji)',
        japanese: 'しゅみは なんですか。',
        kana: 'しゅみは なんですか。',
        vietnamese: 'What is your hobby?'
      },
      {
        speaker: 'B (Thao)',
        japanese: 'おんがくが すきです。ギターを ひきます。',
        kana: 'おんがくが すきです。ぎたーを ひきます。',
        vietnamese: 'I like music. I play the guitar.'
      },
      {
        speaker: 'A (Kenji)',
        japanese: 'いいですね！わたしも おんがくが すきです。',
        kana: 'いいですね！わたしも おんがくが すきです。',
        vietnamese: 'That\'s great! I like music too.'
      },
      {
        speaker: 'B (Thao)',
        japanese: 'けんじさんの しゅみは なんですか。',
        kana: 'けんじさんの しゅみは なんですか。',
        vietnamese: 'What is your hobby, Kenji?'
      },
      {
        speaker: 'A (Kenji)',
        japanese: 'りょうりが すきです。にほんりょうりを つくります。',
        kana: 'りょうりが すきです。にほんりょうりを つくります。',
        vietnamese: 'I like cooking. I make Japanese food.'
      },
      {
        speaker: 'B (Thao)',
        japanese: 'すごいですね！わたしは りょうりが ちょっと にがてです。',
        kana: 'すごいですね！わたしは りょうりが ちょっと にがてです。',
        vietnamese: 'That\'s impressive! I\'m not very good at cooking.'
      }
    ],
    culturalNote:
      'Japanese people tend to be modest about their own abilities. Instead of saying "I\'m great at it", they will say "mada mada desu" (I still have a long way to go). The phrase "にがてです" (nigate desu = not good at/not fond of) is a gentler way to decline than "きらいです" (kirai = dislike/hate). Saying "hate" outright is considered a bit blunt in Japanese culture!'
  },

  // ─────────────────────────────────────────────
  // 11. Counting things (数え方)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-11',
    title: 'Counting things',
    titleJp: '数え方',
    level: 'N5',
    situation: 'Buying fruit at a market and counting quantities',
    patterns: [
      {
        japanese: 'ひとつ、ふたつ、みっつ… いくつですか。',
        kana: 'ひとつ、ふたつ、みっつ… いくつですか。',
        vietnamese: 'One, two, three... how many?',
        memoryTip:
          'Remember: the native Japanese counting set "hitotsu, futatsu, mittsu..." is used for general objects. "Ikutsu" = how many.'
      },
      {
        japanese: 'りんごを みっつ ください。',
        kana: 'りんごを みっつ ください。',
        vietnamese: 'Three apples, please.',
        memoryTip:
          'Remember: "ringo" = apple. The counter comes AFTER the item: "ringo wo mittsu" = apple + three (of them).'
      },
      {
        japanese: 'ぜんぶで いくつ ありますか。',
        kana: 'ぜんぶで いくつ ありますか。',
        vietnamese: 'How many are there in total?',
        memoryTip:
          'Remember: "zenbu de" = in total. "Zen" (全) = whole, "bu" (部) = part.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Customer - Dung)',
        japanese: 'すみません、このりんごは いくらですか。',
        kana: 'すみません、このりんごは いくらですか。',
        vietnamese: 'Excuse me, how much are these apples?'
      },
      {
        speaker: 'B (Vendor)',
        japanese: 'ひとつ ひゃくえん です。',
        kana: 'ひとつ ひゃくえん です。',
        vietnamese: 'One is 100 yen.'
      },
      {
        speaker: 'A (Customer - Dung)',
        japanese: 'じゃ、いつつ ください。みかんは いくつ ありますか。',
        kana: 'じゃ、いつつ ください。みかんは いくつ ありますか。',
        vietnamese: 'Then five, please. How many mandarins do you have?'
      },
      {
        speaker: 'B (Vendor)',
        japanese: 'みかんは ここのつ あります。',
        kana: 'みかんは ここのつ あります。',
        vietnamese: 'There are nine mandarins.'
      },
      {
        speaker: 'A (Customer - Dung)',
        japanese: 'みかんも みっつ おねがいします。',
        kana: 'みかんも みっつ おねがいします。',
        vietnamese: 'Three mandarins too, please.'
      },
      {
        speaker: 'B (Vendor)',
        japanese: 'はい。ぜんぶで はっぴゃくえん です。',
        kana: 'はい。ぜんぶで はっぴゃくえん です。',
        vietnamese: 'Sure. That comes to 800 yen in total.'
      }
    ],
    culturalNote:
      'The Japanese counting system is one of the trickiest parts for beginners! Besides the native counting set (hitotsu, futatsu...), there are dozens of "counter words" (助数詞) depending on the type of object: "mai" (枚) for flat things, "hon" (本) for long things, "hiki" (匹) for small animals, "satsu" (冊) for books. Tip: start with the native counting set, which works for most everyday objects!'
  },

  // ─────────────────────────────────────────────
  // 12. School / Class (学校)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-12',
    title: 'School',
    titleJp: '学校',
    level: 'N5',
    situation: 'First day at Japanese class, talking with a classmate',
    patterns: [
      {
        japanese: 'せんせい、しつもんが あります。',
        kana: 'せんせい、しつもんが あります。',
        vietnamese: 'Teacher, I have a question.',
        memoryTip:
          'Remember: "sensei" = teacher. "Sen" (先) = before, "sei" (生) = born → literally "born before" = someone who leads the way. "Shitsumon" = question.'
      },
      {
        japanese: 'じゅぎょうは なんじから ですか。',
        kana: 'じゅぎょうは なんじから ですか。',
        vietnamese: 'What time does class start?',
        memoryTip:
          'Remember: "jugyou" = class/lesson. "Ju" (授) = to give, "gyou" (業) = studies → to receive instruction.'
      },
      {
        japanese: 'にほんごは たのしいです。',
        kana: 'にほんごは たのしいです。',
        vietnamese: 'Japanese is fun.',
        memoryTip:
          'Remember: "tanoshii" = fun/enjoyable. An i-adjective: it changes form as tanoshikunai (not fun), tanoshikatta (was fun).'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Linh)',
        japanese: 'すみません、にほんごの じゅぎょうは どこですか。',
        kana: 'すみません、にほんごの じゅぎょうは どこですか。',
        vietnamese: 'Excuse me, where is the Japanese class?'
      },
      {
        speaker: 'B (Classmate)',
        japanese: 'さんがいの 301きょうしつ ですよ。いっしょに いきましょう。',
        kana: 'さんがいの さんまるいちきょうしつ ですよ。いっしょに いきましょう。',
        vietnamese: 'It\'s Room 301 on the 3rd floor. Let\'s go together.'
      },
      {
        speaker: 'A (Linh)',
        japanese: 'ありがとうございます。じゅぎょうは なんじから ですか。',
        kana: 'ありがとうございます。じゅぎょうは なんじから ですか。',
        vietnamese: 'Thank you. What time does class start?'
      },
      {
        speaker: 'B (Classmate)',
        japanese: 'くじから じゅうにじまで です。',
        kana: 'くじから じゅうにじまで です。',
        vietnamese: 'From 9:00 to 12:00.'
      },
      {
        speaker: 'A (Linh)',
        japanese: 'せんせいは だれですか。',
        kana: 'せんせいは だれですか。',
        vietnamese: 'Who is the teacher?'
      },
      {
        speaker: 'B (Classmate)',
        japanese: 'やまもとせんせいです。とても やさしい せんせいですよ。にほんごは たのしいですよ！',
        kana: 'やまもとせんせいです。とても やさしい せんせいですよ。にほんごは たのしいですよ！',
        vietnamese: 'It\'s Yamamoto-sensei. A very kind teacher. Japanese class is fun!'
      }
    ],
    culturalNote:
      'In a Japanese classroom, students stand and bow to greet the teacher at the start of the lesson: "きりつ、れい" (kiritsu, rei = stand, bow). Before class begins, they say "おねがいします" (please guide us), and at the end, "ありがとうございました" (thank you for teaching us). "Sensei" is a highly respected title, also used for doctors and lawyers!'
  },

  // ─────────────────────────────────────────────
  // 13. Phone call (電話)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-13',
    title: 'Making a phone call',
    titleJp: '電話',
    level: 'N5',
    situation: 'Calling a company to reach someone',
    patterns: [
      {
        japanese: 'もしもし、〜です。',
        kana: 'もしもし、〜です。',
        vietnamese: 'Hello, this is ~.',
        memoryTip:
          'Remember: "moshi moshi" = hello (only used when answering the phone). It comes from "mousu" (to say) repeated → "moushimasu, moushimasu" shortened to "moshi moshi".'
      },
      {
        japanese: '〜さんは いらっしゃいますか。',
        kana: '〜さんは いらっしゃいますか。',
        vietnamese: 'Is ~ there, please? (honorific)',
        memoryTip:
          'Remember: "irasshaimasu" = to be present (honorific form of "imasu"). Very polite, used when asking for someone on the phone.'
      },
      {
        japanese: 'すみません、でんわばんごうを おねがいします。',
        kana: 'すみません、でんわばんごうを おねがいします。',
        vietnamese: 'Excuse me, could I have the phone number, please?',
        memoryTip:
          'Remember: "denwa" = telephone ("den" = electricity, "wa" = talk). "Bangou" = number.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Phong)',
        japanese: 'もしもし、ABCかいしゃですか。',
        kana: 'もしもし、えーびーしーかいしゃですか。',
        vietnamese: 'Hello, is this ABC Company?'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'はい、ABCかいしゃ です。',
        kana: 'はい、えーびーしーかいしゃ です。',
        vietnamese: 'Yes, this is ABC Company.'
      },
      {
        speaker: 'A (Phong)',
        japanese: 'たなかさんは いらっしゃいますか。',
        kana: 'たなかさんは いらっしゃいますか。',
        vietnamese: 'Is Tanaka there, please?'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'すみません、たなかは いま でかけています。',
        kana: 'すみません、たなかは いま でかけています。',
        vietnamese: 'I\'m sorry, Tanaka is out at the moment.'
      },
      {
        speaker: 'A (Phong)',
        japanese: 'そうですか。なんじに もどりますか。',
        kana: 'そうですか。なんじに もどりますか。',
        vietnamese: 'I see. What time will he be back?'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'さんじごろ もどります。でんわばんごうを おねがいします。',
        kana: 'さんじごろ もどります。でんわばんごうを おねがいします。',
        vietnamese: 'He will be back around 3 o\'clock. Could I have your phone number, please?'
      }
    ],
    culturalNote:
      'When answering the phone in Japan, people always start with "もしもし". But within a company, employees usually say "はい、〜会社です" (Yes, this is ~ Company) instead of "moshi moshi". When the person being asked for is absent, the caller might be asked "伝言をお願いできますか" (may I take a message?). Note: use "san" when referring to someone outside the company, but drop "san" for your own coworkers when speaking to an outside caller!'
  },

  // ─────────────────────────────────────────────
  // 14. At the bank (銀行)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-14',
    title: 'At the bank',
    titleJp: '銀行',
    level: 'N5',
    situation: 'Exchanging money and opening an account at a Japanese bank',
    patterns: [
      {
        japanese: 'りょうがえ を おねがいします。',
        kana: 'りょうがえ を おねがいします。',
        vietnamese: 'I\'d like to exchange money, please.',
        memoryTip:
          'Remember: "ryougae" = currency exchange. "Ryou" = both sides, "gae/kae" = to change.'
      },
      {
        japanese: 'こうざを つくりたいです。',
        kana: 'こうざを つくりたいです。',
        vietnamese: 'I want to open an account.',
        memoryTip:
          'Remember: "kouza" = account. "Kou" (口) = opening, "za" (座) = seat. "Tsukuritai" = want to make/open.'
      },
      {
        japanese: 'おかねを おろしたいです。',
        kana: 'おかねを おろしたいです。',
        vietnamese: 'I want to withdraw money.',
        memoryTip:
          'Remember: "okane" = money. "O" is an honorific, "kane" (金) = gold/money. "Oroshitai" = want to withdraw (literally: bring down).'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Customer - Thanh)',
        japanese: 'すみません、りょうがえ を おねがいします。',
        kana: 'すみません、りょうがえ を おねがいします。',
        vietnamese: 'Excuse me, I\'d like to exchange money, please.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'はい。なにを えんに かえますか。',
        kana: 'はい。なにを えんに かえますか。',
        vietnamese: 'Sure. What would you like to exchange into yen?'
      },
      {
        speaker: 'A (Customer - Thanh)',
        japanese: 'ドルを えんに おねがいします。ひゃくドルです。',
        kana: 'どるを えんに おねがいします。ひゃくどるです。',
        vietnamese: 'Dollars into yen, please. It\'s 100 dollars.'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'はい、パスポートを みせてください。',
        kana: 'はい、ぱすぽーとを みせてください。',
        vietnamese: 'Sure, could I see your passport, please?'
      },
      {
        speaker: 'A (Customer - Thanh)',
        japanese: 'はい、どうぞ。こうざも つくりたいですが…',
        kana: 'はい、どうぞ。こうざも つくりたいですが…',
        vietnamese: 'Here you go. I\'d also like to open an account...'
      },
      {
        speaker: 'B (Staff)',
        japanese: 'こうざは こちらの ようしに きにゅうしてください。',
        kana: 'こうざは こちらの ようしに きにゅうしてください。',
        vietnamese: 'For an account, please fill out this form.'
      }
    ],
    culturalNote:
      'Japan is still a fairly cash-heavy society, though it is slowly moving toward cashless payments. ATMs at post offices (ゆうちょ) and convenience stores (7-Eleven, Lawson) support international cards. Note: many Japanese ATMs CLOSE at night! Opening a bank account as a foreigner requires: a residence card (在留カード), passport, and proof of address. Some banks require you to have lived in Japan for at least 6 months.'
  },

  // ─────────────────────────────────────────────
  // 15. Apologizing (謝る)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-15',
    title: 'Apologizing',
    titleJp: '謝る',
    level: 'N5',
    situation: 'Situations that call for an apology: being late, causing trouble, making a mistake',
    patterns: [
      {
        japanese: 'ごめんなさい。おそくなって すみません。',
        kana: 'ごめんなさい。おそくなって すみません。',
        vietnamese: 'I\'m sorry. Sorry for being late.',
        memoryTip:
          'Remember: "gomen nasai" = sorry (casual/friendly). "Osoku natte" = having become late. "Osoi" = slow/late.'
      },
      {
        japanese: 'すみません、まちがえました。',
        kana: 'すみません、まちがえました。',
        vietnamese: 'Sorry, I made a mistake.',
        memoryTip:
          'Remember: "machigaemashita" = made a mistake. "Machigaeru" = to be mistaken.'
      },
      {
        japanese: 'もうしわけ ありません。',
        kana: 'もうしわけ ありません。',
        vietnamese: 'I am deeply sorry. (very formal)',
        memoryTip:
          'Remember: "moushiwake arimasen" = literally "there is no excuse". The most formal way to apologize. "Moushi" = to say, "wake" = reason. Used with a boss, customer, or elders.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Employee - Tuan)',
        japanese: 'すみません、おそくなりました。',
        kana: 'すみません、おそくなりました。',
        vietnamese: 'Sorry, I\'m late.'
      },
      {
        speaker: 'B (Boss - Sato)',
        japanese: 'きょうは じゅっぷん おそいですよ。',
        kana: 'きょうは じゅっぷん おそいですよ。',
        vietnamese: 'You\'re 10 minutes late today.'
      },
      {
        speaker: 'A (Employee - Tuan)',
        japanese: 'もうしわけ ありません。でんしゃが おくれました。',
        kana: 'もうしわけ ありません。でんしゃが おくれました。',
        vietnamese: 'I am deeply sorry. The train was delayed.'
      },
      {
        speaker: 'B (Boss - Sato)',
        japanese: 'そうですか。きをつけてください。',
        kana: 'そうですか。きをつけてください。',
        vietnamese: 'I see. Please be careful next time.'
      },
      {
        speaker: 'A (Employee - Tuan)',
        japanese: 'はい、もう おそくなりません。ほんとうに すみませんでした。',
        kana: 'はい、もう おそくなりません。ほんとうに すみませんでした。',
        vietnamese: 'Yes, I won\'t be late again. I\'m really sorry.'
      },
      {
        speaker: 'B (Boss - Sato)',
        japanese: 'わかりました。さ、しごとを はじめましょう。',
        kana: 'わかりました。さ、しごとを はじめましょう。',
        vietnamese: 'Understood. Now, let\'s get to work.'
      }
    ],
    culturalNote:
      'Apologizing is an art in Japanese culture! There are several levels: "gomen/gomen ne" (casual, among friends), "gomen nasai" (moderately polite), "sumimasen" (polite, versatile — used for both apologizing and thanking), "moushiwake arimasen" (very formal, used at work). Japanese people often apologize more than seems necessary — it is considered courteous, not a sign of weakness. For a serious apology, they bow very deeply (up to 45° or even 90°)!'
  }
];
