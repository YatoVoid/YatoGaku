import type { ConversationPattern } from '$lib/types/lesson';

export const N3_CONVERSATIONS: ConversationPattern[] = [
  // ── 1. Job Interview (面接) ──────────────────────────────────
  {
    id: 'n3-conv-01',
    title: 'Job interview',
    titleJp: '面接',
    level: 'N3',
    situation: 'A candidate answers questions during a job interview at a Japanese company',
    patterns: [
      {
        japanese: '〜の経験があります。',
        kana: '〜のけいけんがあります。',
        vietnamese: 'I have experience in ~.',
        memoryTip:
          'Remember: けいけん (keiken) = experience, built up through practice over time.'
      },
      {
        japanese: '得意なことはコミュニケーションです。',
        kana: 'とくいなことはコミュニケーションです。',
        vietnamese: 'My strength is communication.',
        memoryTip:
          'Remember: とくい (tokui) = something you\'re especially confident in, a forte.'
      },
      {
        japanese: '精一杯頑張ります。',
        kana: 'せいいっぱいがんばります。',
        vietnamese: 'I will do my best.',
        memoryTip:
          'Remember: せいいっぱい = putting in everything you\'ve got. がんばります = to persevere, try hard.'
      }
    ],
    dialogue: [
      {
        speaker: 'Interviewer',
        japanese: '前の会社ではどんな仕事をしていましたか。',
        kana: 'まえのかいしゃではどんなしごとをしていましたか。',
        vietnamese: 'What kind of work did you do at your previous company?'
      },
      {
        speaker: 'Candidate',
        japanese: '3年間、営業の経験があります。お客様との交渉が得意です。',
        kana: 'さんねんかん、えいぎょうのけいけんがあります。おきゃくさまとのこうしょうがとくいです。',
        vietnamese:
          'I have 3 years of experience in sales. I\'m good at negotiating with customers.'
      },
      {
        speaker: 'Interviewer',
        japanese: 'うちの会社を選んだ理由は何ですか。',
        kana: 'うちのかいしゃをえらんだりゆうはなんですか。',
        vietnamese: 'Why did you choose our company?'
      },
      {
        speaker: 'Candidate',
        japanese: '御社の海外展開に興味があり、自分の語学力を活かしたいと思いました。',
        kana: 'おんしゃのかいがいてんかいにきょうみがあり、じぶんのごがくりょくをいかしたいとおもいました。',
        vietnamese:
          'I\'m interested in your company\'s overseas expansion, and I wanted to make use of my language skills.'
      },
      {
        speaker: 'Interviewer',
        japanese: '最後に何か質問はありますか。',
        kana: 'さいごになにかしつもんはありますか。',
        vietnamese: 'Lastly, do you have any questions?'
      },
      {
        speaker: 'Candidate',
        japanese: '入社後の研修制度について教えていただけますか。精一杯頑張りますので、よろしくお願いいたします。',
        kana: 'にゅうしゃごのけんしゅうせいどについておしえていただけますか。せいいっぱいがんばりますので、よろしくおねがいいたします。',
        vietnamese:
          'Could you tell me about the training program after joining? I will do my best, thank you for considering me.'
      }
    ],
    culturalNote:
      'In Japanese interviews, using 御社 (onsha — your esteemed company) instead of the company\'s name directly is a required courtesy. Ending with よろしくお願いいたします shows humility and determination — a crucial final impression for Japanese employers.'
  },

  // ── 2. Expressing Opinions (意見) ───────────────────────────
  {
    id: 'n3-conv-02',
    title: 'Expressing opinions',
    titleJp: '意見を言う',
    level: 'N3',
    situation: 'Coworkers discuss a project plan during a team meeting',
    patterns: [
      {
        japanese: '〜と思います。',
        kana: '〜とおもいます。',
        vietnamese: 'I think that ~.',
        memoryTip:
          'Remember: おもいます (omoimasu) = to think.'
      },
      {
        japanese: '〜んじゃないかと思うんですが。',
        kana: '〜んじゃないかとおもうんですが。',
        vietnamese: 'I think it might be ~ (gentle, tentative).',
        memoryTip:
          'Remember: ～んじゃないか = "isn\'t it ~?" → a roundabout, gentle way to offer an opinion without imposing it.'
      },
      {
        japanese: '確かにそうですが、〜のではないでしょうか。',
        kana: 'たしかにそうですが、〜のではないでしょうか。',
        vietnamese: 'That\'s true, but isn\'t it also the case that ~?',
        memoryTip:
          'Remember: たしかに = "that\'s certainly true" — acknowledge the other side first before offering a different view, a polite way to push back.'
      }
    ],
    dialogue: [
      {
        speaker: 'Tanaka',
        japanese: '新しいプロジェクトの締め切りについてどう思いますか。',
        kana: 'あたらしいプロジェクトのしめきりについてどうおもいますか。',
        vietnamese: 'What do you think about the deadline for the new project?'
      },
      {
        speaker: 'Yamada',
        japanese: '正直に言うと、少し厳しいんじゃないかと思うんですが。',
        kana: 'しょうじきにいうと、すこしきびしいんじゃないかとおもうんですが。',
        vietnamese:
          'Honestly, I think it might be a bit tight.'
      },
      {
        speaker: 'Tanaka',
        japanese: '確かにそうですが、クライアントの要望もありますし。',
        kana: 'たしかにそうですが、クライアントのようぼうもありますし。',
        vietnamese:
          'That\'s true, but there are also the client\'s requests to consider.'
      },
      {
        speaker: 'Yamada',
        japanese: 'それはわかりますが、品質を下げるわけにはいかないと思います。',
        kana: 'それはわかりますが、ひんしつをさげるわけにはいかないとおもいます。',
        vietnamese:
          'I understand that, but I don\'t think we can afford to lower the quality.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'では、人員を増やすのはどうでしょうか。',
        kana: 'では、じんいんをふやすのはどうでしょうか。',
        vietnamese: 'Then how about increasing the staff?'
      },
      {
        speaker: 'Yamada',
        japanese: 'それはいい案だと思います。上司に相談してみましょう。',
        kana: 'それはいいあんだとおもいます。じょうしにそうだんしてみましょう。',
        vietnamese:
          'I think that\'s a good idea. Let\'s discuss it with the boss.'
      }
    ],
    culturalNote:
      'Japanese people avoid direct confrontation. Instead of saying "I disagree", they use 確かにそうですが... (that\'s true, but...) to first acknowledge the other side before offering a different view. The structure ～んじゃないかと思うんですが trails off with が (but...) to leave room for the other person to respond.'
  },

  // ── 3. Complaining Politely (苦情) ──────────────────────────
  {
    id: 'n3-conv-03',
    title: 'Complaining politely',
    titleJp: '丁寧な苦情',
    level: 'N3',
    situation: 'A tenant complains to the building manager about noise from the next room',
    patterns: [
      {
        japanese: 'ちょっと困っているんですが。',
        kana: 'ちょっとこまっているんですが。',
        vietnamese: 'I\'m having a bit of trouble...',
        memoryTip:
          'Remember: こまる (komaru) = to be troubled/in a bind. Adding んですが softens the opening before a complaint.'
      },
      {
        japanese: '〜ていただけませんか。',
        kana: '〜ていただけませんか。',
        vietnamese: 'Could you possibly ~? (very polite)',
        memoryTip:
          'Remember: いただけませんか is the negative form of いただく (to receive) — literally "could I not receive the favor of you doing ~?" — an extremely polite request.'
      },
      {
        japanese: '申し訳ないんですが、〜。',
        kana: 'もうしわけないんですが、〜。',
        vietnamese: 'I\'m sorry to bother you, but ~.',
        memoryTip:
          'Remember: もうしわけない = "there\'s no excuse" — a deep apology, used when you\'re the one making a complaint!'
      }
    ],
    dialogue: [
      {
        speaker: 'Resident',
        japanese: 'すみません、ちょっと困っているんですが、ご相談してもよろしいですか。',
        kana: 'すみません、ちょっとこまっているんですが、ごそうだんしてもよろしいですか。',
        vietnamese:
          'Excuse me, I\'m having a bit of trouble — could I discuss something with you?'
      },
      {
        speaker: 'Manager',
        japanese: 'はい、どうされましたか。',
        kana: 'はい、どうされましたか。',
        vietnamese: 'Yes, what happened?'
      },
      {
        speaker: 'Resident',
        japanese: '実は、隣の部屋から夜遅くまで大きな音がして、眠れないんです。',
        kana: 'じつは、となりのへやからよるおそくまでおおきなおとがして、ねむれないんです。',
        vietnamese:
          'Actually, there\'s loud noise coming from the room next door until late at night, and I can\'t sleep.'
      },
      {
        speaker: 'Manager',
        japanese: 'それは大変ですね。いつ頃からですか。',
        kana: 'それはたいへんですね。いつごろからですか。',
        vietnamese: 'That sounds rough. Since about when?'
      },
      {
        speaker: 'Resident',
        japanese: '先週からずっとなんです。申し訳ないんですが、注意していただけませんか。',
        kana: 'せんしゅうからずっとなんです。もうしわけないんですが、ちゅういしていただけませんか。',
        vietnamese:
          'It\'s been going on since last week. I\'m sorry to bother you, but could you say something to them?'
      },
      {
        speaker: 'Manager',
        japanese: 'わかりました。すぐに確認して、対応いたします。',
        kana: 'わかりました。すぐにかくにんして、たいおういたします。',
        vietnamese: 'Understood. I\'ll check right away and take care of it.'
      }
    ],
    culturalNote:
      'In Japan, even when complaining, the speaker usually apologizes first (申し訳ないんですが) for "bothering" the listener. Opening with ちょっと困っているんですが softens the tone — even when it\'s quite annoying, people still say it\'s "a bit" of a problem. This reflects 遠慮 (enryo — restraint, reserve), a distinctive part of Japanese culture.'
  },

  // ── 4. Making Excuses (言い訳) ──────────────────────────────
  {
    id: 'n3-conv-04',
    title: 'Giving excuses',
    titleJp: '言い訳',
    level: 'N3',
    situation: 'An employee explains to their boss why a report was submitted late',
    patterns: [
      {
        japanese: '〜つもりだったんですが。',
        kana: '〜つもりだったんですが。',
        vietnamese: 'I intended to ~ (but it didn\'t work out).',
        memoryTip:
          'Remember: つもり = intention/plan. だった = past tense → the intention belongs to the past, hinting it didn\'t pan out.'
      },
      {
        japanese: '〜はずだったのに。',
        kana: '〜はずだったのに。',
        vietnamese: 'It was supposed to ~ (but it didn\'t).',
        memoryTip:
          'Remember: はず (hazu) = "supposed to/should have". のに at the end = regret or a mild reproach — the outcome went against expectation.'
      },
      {
        japanese: '〜せいで、〜てしまいました。',
        kana: '〜せいで、〜てしまいました。',
        vietnamese: 'Because of ~ (a negative cause), I ended up ~.',
        memoryTip:
          'Remember: せいで = attributes blame to an external cause. てしまう = did something regrettable.'
      }
    ],
    dialogue: [
      {
        speaker: 'Manager',
        japanese: '山本さん、今日が報告書の締め切りだったはずですが。',
        kana: 'やまもとさん、きょうがほうこくしょのしめきりだったはずですが。',
        vietnamese:
          'Yamamoto, today was supposed to be the report deadline.'
      },
      {
        speaker: 'Yamamoto',
        japanese: '申し訳ございません。昨日中に終わらせるつもりだったんですが、急なトラブルが入ってしまいまして。',
        kana: 'もうしわけございません。きのうじゅうにおわらせるつもりだったんですが、きゅうなトラブルがはいってしまいまして。',
        vietnamese:
          'I\'m very sorry. I intended to finish it yesterday, but an unexpected issue came up.'
      },
      {
        speaker: 'Manager',
        japanese: 'どんなトラブルですか。',
        kana: 'どんなトラブルですか。',
        vietnamese: 'What kind of issue?'
      },
      {
        speaker: 'Yamamoto',
        japanese: 'システム障害のせいで、データが消えてしまったんです。最初からやり直すはずだったのに、時間が足りませんでした。',
        kana: 'システムしょうがいのせいで、データがきえてしまったんです。さいしょからやりなおすはずだったのに、じかんがたりませんでした。',
        vietnamese:
          'Because of a system failure, the data got deleted. I was supposed to start over from scratch, but there wasn\'t enough time.'
      },
      {
        speaker: 'Manager',
        japanese: 'そういうことでしたか。で、いつまでにできますか。',
        kana: 'そういうことでしたか。で、いつまでにできますか。',
        vietnamese: 'I see, that\'s what happened. So, by when can you finish it?'
      },
      {
        speaker: 'Yamamoto',
        japanese: '明日の午前中には必ず提出いたします。二度とこのようなことがないように気をつけます。',
        kana: 'あしたのごぜんちゅうにはかならずていしゅついたします。にどとこのようなことがないようにきをつけます。',
        vietnamese:
          'I will definitely submit it by tomorrow morning. I\'ll be careful to make sure this doesn\'t happen again.'
      }
    ],
    culturalNote:
      'In Japanese office culture, when explaining a late deadline, what matters most is: (1) apologize immediately, without excuses first, (2) state the reason briefly, (3) offer a concrete solution and new deadline. The closing line 二度とこのようなことがないように (I\'ll make sure this doesn\'t happen again) shows reflection — Japanese people value the attitude of 反省 (hansei — self-reflection).'
  },

  // ── 5. Discussing News/Events (ニュース) ────────────────────
  {
    id: 'n3-conv-05',
    title: 'Discussing news and events',
    titleJp: 'ニュースについて話す',
    level: 'N3',
    situation: 'Two friends talk about news they just saw online',
    patterns: [
      {
        japanese: '〜らしいよ。',
        kana: '〜らしいよ。',
        vietnamese: 'I heard that ~ / It seems that ~ (from a reliable source).',
        memoryTip:
          'Remember: らしい is used when the information comes from a reasonably trustworthy source (news, TV).'
      },
      {
        japanese: '〜そうです。',
        kana: '〜そうです。',
        vietnamese: 'I heard that ~ (relaying what someone else said).',
        memoryTip:
          'Remember: ～そうです (hearsay) is different from ～そうです (looks like). Hearsay attaches to the plain form → "according to the source...".'
      },
      {
        japanese: '〜みたいだね。',
        kana: '〜みたいだね。',
        vietnamese: 'It looks like ~ / It seems that ~ (a guess based on observation).',
        memoryTip:
          'Remember: みたい = a tentative guess based on what you\'ve seen or heard.'
      }
    ],
    dialogue: [
      {
        speaker: 'Yuko',
        japanese: 'ねえ、昨日のニュース見た？東京に新しい美術館ができるらしいよ。',
        kana: 'ねえ、きのうのニュースみた？とうきょうにあたらしいびじゅつかんができるらしいよ。',
        vietnamese:
          'Hey, did you see yesterday\'s news? I heard Tokyo is getting a new art museum.'
      },
      {
        speaker: 'Kenta',
        japanese: 'ああ、それ聞いた。来年の春にオープンするそうだよ。',
        kana: 'ああ、それきいた。らいねんのはるにオープンするそうだよ。',
        vietnamese:
          'Oh, I heard that too. I heard it\'s opening next spring.'
      },
      {
        speaker: 'Yuko',
        japanese: 'デザインがすごくおしゃれみたいだね。有名な建築家が設計したんだって。',
        kana: 'デザインがすごくおしゃれみたいだね。ゆうめいなけんちくかがせっけいしたんだって。',
        vietnamese:
          'The design looks really stylish. I heard a famous architect designed it.'
      },
      {
        speaker: 'Kenta',
        japanese: '入場料はどのくらいなんだろう。最近の美術館は高いからなあ。',
        kana: 'にゅうじょうりょうはどのくらいなんだろう。さいきんのびじゅつかんはたかいからなあ。',
        vietnamese:
          'I wonder how much the admission fee is. Museums have been expensive lately.'
      },
      {
        speaker: 'Yuko',
        japanese: '記事によると、学生は無料らしいよ。一般は千五百円だって。',
        kana: 'きじによると、がくせいはむりょうらしいよ。いっぱんはせんごひゃくえんだって。',
        vietnamese:
          'According to the article, it\'s free for students. Regular admission is 1,500 yen.'
      },
      {
        speaker: 'Kenta',
        japanese: 'へえ、いいね！オープンしたら一緒に行こうよ。',
        kana: 'へえ、いいね！オープンしたらいっしょにいこうよ。',
        vietnamese: 'Oh, nice! Let\'s go together once it opens.'
      }
    ],
    culturalNote:
      'Japanese clearly distinguishes the source of information: らしい is used when there\'s reasonably trustworthy indirect evidence (reading it in a paper, seeing it on TV); ～そうです (hearsay) is used when relaying what someone else told you; みたい is used for a personal guess based on what you\'ve observed. Choosing the wrong one can mislead the listener about how reliable the information is. In everyday conversation, ～んだって is a casual way of saying ～そうです.'
  },

  // ── 6. Apartment Hunting (部屋探し) ─────────────────────────────
  {
    id: 'n3-conv-06',
    title: 'Apartment hunting',
    titleJp: '部屋探し',
    level: 'N3',
    situation: 'A customer visits a real estate agency to find a suitable apartment',
    patterns: [
      {
        japanese: '間取りは〜がいいんですが。',
        kana: 'まどりは〜がいいんですが。',
        vietnamese: 'I\'d like a floor plan that\'s ~...',
        memoryTip:
          'Remember: まどり (madori) = floor plan/layout. 1K and 2LDK are common apartment layout types in Japan.'
      },
      {
        japanese: '家賃は〜以内で探しています。',
        kana: 'やちんは〜いないでさがしています。',
        vietnamese: 'I\'m looking for rent within ~.',
        memoryTip:
          'Remember: やちん (yachin) = monthly rent. いない = within a range → setting a budget ceiling.'
      },
      {
        japanese: '敷金・礼金はどのくらいかかりますか。',
        kana: 'しききん・れいきんはどのくらいかかりますか。',
        vietnamese: 'About how much are the deposit and key money?',
        memoryTip:
          'Remember: しききん (shikikin) = a refundable deposit; れいきん (reikin) = a non-refundable "thank you" payment to the landlord — unique to Japan!'
      }
    ],
    dialogue: [
      {
        speaker: 'Customer',
        japanese: 'すみません、一人暮らし向けの部屋を探しているんですが。',
        kana: 'すみません、ひとりぐらしむけのへやをさがしているんですが。',
        vietnamese: 'Excuse me, I\'m looking for a room suited for living alone.'
      },
      {
        speaker: 'Agent',
        japanese: 'ご予算はどのくらいですか。間取りの希望はありますか。',
        kana: 'ごよさんはどのくらいですか。まどりのきぼうはありますか。',
        vietnamese: 'What\'s your budget? Do you have a preferred floor plan?'
      },
      {
        speaker: 'Customer',
        japanese: '家賃は7万円以内で、1Kか1DKがいいんですが。駅から近いところがいいです。',
        kana: 'やちんはななまんえんいないで、ワンケーかワンディーケーがいいんですが。えきからちかいところがいいです。',
        vietnamese: 'Rent within 70,000 yen, and 1K or 1DK would be good. I\'d like somewhere close to the station.'
      },
      {
        speaker: 'Agent',
        japanese: 'この物件はいかがですか。駅から徒歩5分で、築10年です。敷金1ヶ月、礼金1ヶ月です。',
        kana: 'このぶっけんはいかがですか。えきからとほごふんで、ちくじゅうねんです。しききんいっかげつ、れいきんいっかげつです。',
        vietnamese: 'How about this listing? It\'s a 5-minute walk from the station and 10 years old. One month\'s deposit, one month\'s key money.'
      },
      {
        speaker: 'Customer',
        japanese: '内見はできますか。あと、ペットは飼えますか。',
        kana: 'ないけんはできますか。あと、ペットはかえますか。',
        vietnamese: 'Can I view it in person? Also, are pets allowed?'
      },
      {
        speaker: 'Agent',
        japanese: '内見は今週末に可能です。ただ、こちらの物件はペット不可になっております。',
        kana: 'ないけんはこんしゅうまつにかのうです。ただ、こちらのぶっけんはペットふかになっております。',
        vietnamese: 'Viewing is possible this weekend. However, this listing does not allow pets.'
      }
    ],
    culturalNote:
      'Japan\'s rental system has its own quirks: 敷金 (shikikin — deposit, usually refundable) and 礼金 (reikin — "thank you" money for the landlord, NOT refundable). Reikin is a leftover custom from a time when housing was scarce after the war. Many places also require a 保証人 (hoshounin — guarantor), and foreigners often face difficulty finding rooms due to language and cultural barriers.'
  },

  // ── 7. Workplace Relationships (職場の人間関係) ──────────────────
  {
    id: 'n3-conv-07',
    title: 'Workplace relationships',
    titleJp: '職場の人間関係',
    level: 'N3',
    situation: 'Two coworkers confide in each other about how to deal with people at the company',
    patterns: [
      {
        japanese: '上手に付き合うのは難しいですね。',
        kana: 'じょうずにつきあうのはむずかしいですね。',
        vietnamese: 'Getting along skillfully is hard, isn\'t it.',
        memoryTip:
          'Remember: じょうずに = skillfully; つきあう (tsukiau) = to associate with/maintain a relationship. An essential skill in Japanese offices!'
      },
      {
        japanese: '先輩に相談してみたらどうですか。',
        kana: 'せんぱいにそうだんしてみたらどうですか。',
        vietnamese: 'Why not try asking a senior colleague?',
        memoryTip:
          'Remember: せんぱい (senpai) = a senior colleague, someone who came before you.'
      },
      {
        japanese: '〜のおかげで助かりました。',
        kana: '〜のおかげでたすかりました。',
        vietnamese: 'Thanks to ~, I was really helped out.',
        memoryTip:
          'Remember: おかげ = "thanks to/owing to" — attributing your relief to someone else\'s help.'
      }
    ],
    dialogue: [
      {
        speaker: 'Sato',
        japanese: '最近、新しい上司とうまくいかなくて、困っているんだ。',
        kana: 'さいきん、あたらしいじょうしとうまくいかなくて、こまっているんだ。',
        vietnamese: 'Lately I haven\'t been getting along with my new boss, and it\'s been a struggle.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'そうなの？上手に付き合うのは難しいよね。どんなことがあったの？',
        kana: 'そうなの？じょうずにつきあうのはむずかしいよね。どんなことがあったの？',
        vietnamese: 'Really? Getting along skillfully is hard, isn\'t it. What happened?'
      },
      {
        speaker: 'Sato',
        japanese: '報告書の書き方について、毎回細かく指摘されるんだよ。前の上司は何も言わなかったのに。',
        kana: 'ほうこくしょのかきかたについて、まいかいこまかくしてきされるんだよ。まえのじょうしはなにもいわなかったのに。',
        vietnamese: 'Every time, I get picked apart in detail over how I write reports. My old boss never said anything.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'それは大変だね。でも、期待されているからかもしれないよ。先輩に相談してみたらどうかな。',
        kana: 'それはたいへんだね。でも、きたいされているからかもしれないよ。せんぱいにそうだんしてみたらどうかな。',
        vietnamese: 'That sounds rough. But maybe it\'s because they have high expectations of you. Why not try asking a senior colleague?'
      },
      {
        speaker: 'Sato',
        japanese: 'そうだね。田中先輩のおかげで前も助かったし、相談してみるよ。',
        kana: 'そうだね。たなかせんぱいのおかげでまえもたすかったし、そうだんしてみるよ。',
        vietnamese: 'You\'re right. Tanaka helped me out before too, I\'ll go talk to them.'
      }
    ],
    culturalNote:
      'The 先輩・後輩 (senpai-kouhai) culture is a pillar of Japanese office relationships. A senpai (someone who joined earlier) is responsible for guiding a kouhai (someone who joined later), and a kouhai is expected to show respect. When facing difficulty, Japanese people often turn to a trusted senpai — not HR or their direct boss. Knowing how to 上手に付き合う (get along skillfully) is considered a more important skill than raw technical ability.'
  },

  // ── 8. Health & Diet (健康) ─────────────────────────────────────
  {
    id: 'n3-conv-08',
    title: 'Health and diet',
    titleJp: '健康と食生活',
    level: 'N3',
    situation: 'Two friends talk about health, diet, and exercise',
    patterns: [
      {
        japanese: '最近、運動不足で太ってきたんだ。',
        kana: 'さいきん、うんどうぶそくでふとってきたんだ。',
        vietnamese: 'Lately, I\'ve been gaining weight from a lack of exercise.',
        memoryTip:
          'Remember: うんどうぶそく (undou busoku) = lack of exercise. ふとる (futoru) = to gain weight/get fat.'
      },
      {
        japanese: 'ダイエットを始めようと思っているんだけど。',
        kana: 'ダイエットをはじめようとおもっているんだけど。',
        vietnamese: 'I\'m thinking about starting a diet...',
        memoryTip:
          'Remember: ダイエット (daietto) = "diet", but in Japan it means something broader: both losing weight and eating healthily. ～ようと思っている = intending to (not yet started).'
      },
      {
        japanese: '健康のために〜ようにしています。',
        kana: 'けんこうのために〜ようにしています。',
        vietnamese: 'For the sake of my health, I try to ~.',
        memoryTip:
          'Remember: けんこう (kenkou) = health. ～ようにしている = building a habit, making an effort → different from ～ている (currently doing), it emphasizes ongoing effort.'
      }
    ],
    dialogue: [
      {
        speaker: 'Akiko',
        japanese: 'ねえ、最近ちょっと太ったんじゃない？',
        kana: 'ねえ、さいきんちょっとふとったんじゃない？',
        vietnamese: 'Hey, haven\'t you put on a bit of weight lately?'
      },
      {
        speaker: 'Takashi',
        japanese: 'うん、在宅勤務で運動不足なんだよ。ダイエットを始めようと思っているんだけど、なかなか続かなくて。',
        kana: 'うん、ざいたくきんむでうんどうぶそくなんだよ。ダイエットをはじめようとおもっているんだけど、なかなかつづかなくて。',
        vietnamese: 'Yeah, working from home means I don\'t exercise enough. I\'ve been meaning to start a diet, but I can\'t stick with it.'
      },
      {
        speaker: 'Akiko',
        japanese: '私は健康のために毎朝ジョギングするようにしているよ。最初は大変だったけど、慣れたら気持ちいいよ。',
        kana: 'わたしはけんこうのためにまいあさジョギングするようにしているよ。さいしょはたいへんだったけど、なれたらきもちいいよ。',
        vietnamese: 'For my health, I make sure to jog every morning. It was hard at first, but once you get used to it, it feels great.'
      },
      {
        speaker: 'Takashi',
        japanese: 'すごいね。食事も気をつけてる？',
        kana: 'すごいね。しょくじもきをつけてる？',
        vietnamese: 'That\'s impressive. Do you watch what you eat too?'
      },
      {
        speaker: 'Akiko',
        japanese: 'うん、野菜を多く食べるようにして、揚げ物は週に一回だけにしてる。',
        kana: 'うん、やさいをおおくたべるようにして、あげものはしゅうにいっかいだけにしてる。',
        vietnamese: 'Yeah, I try to eat more vegetables, and only have fried food once a week.'
      },
      {
        speaker: 'Takashi',
        japanese: 'よし、僕も明日から頑張ってみるよ。まずはエレベーターじゃなくて階段を使うことにする！',
        kana: 'よし、ぼくもあしたからがんばってみるよ。まずはエレベーターじゃなくてかいだんをつかうことにする！',
        vietnamese: 'Alright, I\'ll give it a try starting tomorrow too. First off, I\'ll take the stairs instead of the elevator!'
      }
    ],
    culturalNote:
      'In Japan, the concept of メタボ (metabo — metabolic syndrome) has been widely promoted by the government. Since 2008, companies have been required to check employees over 40\'s waist measurement — exceeding the standard means being asked to join a weight-loss program. Japanese people also have a culture of 腹八分目 (hara hachi bunme — eating until only 80% full), a philosophy believed to promote longevity.'
  },

  // ── 9. Technology / Internet (テクノロジー) ─────────────────────
  {
    id: 'n3-conv-09',
    title: 'Technology and the internet',
    titleJp: 'テクノロジー',
    level: 'N3',
    situation: 'Two coworkers talk about smartphones, apps, and the internet',
    patterns: [
      {
        japanese: 'スマホのアプリで〜できるんですよ。',
        kana: 'スマホのアプリで〜できるんですよ。',
        vietnamese: 'You can ~ with a phone app.',
        memoryTip:
          'Remember: スマホ (sumaho) = smartphone (Japanese-style abbreviation); アプリ (apuri) = application → Japanese often shortens borrowed words: パソコン, コンビニ, スマホ...'
      },
      {
        japanese: 'ネットで調べたら、〜ということがわかりました。',
        kana: 'ネットでしらべたら、〜ということがわかりました。',
        vietnamese: 'When I looked it up online, I found out that ~.',
        memoryTip:
          'Remember: ネット (netto) = internet (net). ～ということがわかった = "found out that ~" → a common N3 structure for presenting research results.'
      },
      {
        japanese: '〜の使い方がよくわからないんですが。',
        kana: '〜のつかいかたがよくわからないんですが。',
        vietnamese: 'I\'m not really sure how to use ~...',
        memoryTip:
          'Remember: つかいかた (tsukaikata) = "how to use" → V(masu-stem) + かた = how to do something. A very useful pattern: 読み方, 書き方, 食べ方.'
      }
    ],
    dialogue: [
      {
        speaker: 'Nakamura',
        japanese: '最近、すごく便利なアプリを見つけたんですよ。スマホで電車の乗り換えがすぐわかるんです。',
        kana: 'さいきん、すごくべんりなアプリをみつけたんですよ。スマホででんしゃののりかえがすぐわかるんです。',
        vietnamese: 'I recently found a really useful app. It tells you train transfers right away on your phone.'
      },
      {
        speaker: 'Takahashi',
        japanese: 'へえ、何ていうアプリ？実は私、乗り換えアプリの使い方がよくわからなくて。',
        kana: 'へえ、なんていうアプリ？じつはわたし、のりかえアプリのつかいかたがよくわからなくて。',
        vietnamese: 'Oh, what\'s it called? Actually, I don\'t really know how to use transfer apps.'
      },
      {
        speaker: 'Nakamura',
        japanese: '「乗換案内」っていうアプリです。出発駅と到着駅を入れるだけで、最短ルートが出ますよ。',
        kana: '「のりかえあんない」っていうアプリです。しゅっぱつえきととうちゃくえきをいれるだけで、さいたんルートがでますよ。',
        vietnamese: 'It\'s called "Norikae Annai". Just enter the departure and arrival stations, and it shows you the shortest route.'
      },
      {
        speaker: 'Takahashi',
        japanese: 'ネットで調べたら、レビューもすごくいいということがわかりました。早速ダウンロードしてみます。',
        kana: 'ネットでしらべたら、レビューもすごくいいということがわかりました。さっそくダウンロードしてみます。',
        vietnamese: 'When I looked it up online, I found out the reviews are really good too. I\'ll download it right away.'
      },
      {
        speaker: 'Nakamura',
        japanese: 'あ、Wi-Fiにつないでからダウンロードしたほうがいいですよ。結構容量が大きいので。',
        kana: 'あ、ワイファイにつないでからダウンロードしたほうがいいですよ。けっこうようりょうがおおきいので。',
        vietnamese: 'Oh, you\'d better download it once you\'re connected to Wi-Fi. It\'s a fairly large file.'
      }
    ],
    culturalNote:
      'Japan is a high-tech society with an interesting paradox: many government offices and banks still use fax machines and personal seals (hanko) instead of digital signatures. IT terminology in Japan is mostly katakana borrowed from English but often abbreviated: smartphone → スマホ, application → アプリ, personal computer → パソコン. Knowing these abbreviations is important for real-world communication.'
  },

  // ── 10. Environmental Issues (環境問題) ─────────────────────────
  {
    id: 'n3-conv-10',
    title: 'Environmental issues',
    titleJp: '環境問題',
    level: 'N3',
    situation: 'Neighbors talk about sorting trash and protecting the environment',
    patterns: [
      {
        japanese: '環境のために〜なければなりません。',
        kana: 'かんきょうのために〜なければなりません。',
        vietnamese: 'For the sake of the environment, we must ~.',
        memoryTip:
          'Remember: かんきょう (kankyou) = environment/surroundings. ～なければならない = an obligation → for the environment\'s sake, you MUST.'
      },
      {
        japanese: 'ゴミの分別をちゃんとしないといけませんよ。',
        kana: 'ゴミのぶんべつをちゃんとしないといけませんよ。',
        vietnamese: 'You have to sort the trash properly.',
        memoryTip:
          'Remember: ぶんべつ (bunbetsu) = sorting trash by type. ちゃんと = properly, correctly.'
      },
      {
        japanese: 'エコバッグを持っていくようにしています。',
        kana: 'エコバッグをもっていくようにしています。',
        vietnamese: 'I try to bring an eco bag.',
        memoryTip:
          'Remember: エコ (eko) = eco, environmentally friendly. バッグ (baggu) = bag. Since 2020, Japan charges for plastic bags, so everyone brings an エコバッグ.'
      }
    ],
    dialogue: [
      {
        speaker: 'Kimura',
        japanese: 'すみません、この燃えないゴミはいつ出せばいいですか。',
        kana: 'すみません、このもえないゴミはいついだせばいいですか。',
        vietnamese: 'Excuse me, when should I put out this non-burnable trash?'
      },
      {
        speaker: 'Yoshida',
        japanese: '燃えないゴミは第二・第四水曜日ですよ。ゴミの分別をちゃんとしないと、回収してもらえませんからね。',
        kana: 'もえないゴミはだいに・だいよんすいようびですよ。ゴミのぶんべつをちゃんとしないと、かいしゅうしてもらえませんからね。',
        vietnamese: 'Non-burnable trash is on the 2nd and 4th Wednesdays. If you don\'t sort it properly, they won\'t collect it.'
      },
      {
        speaker: 'Kimura',
        japanese: 'ペットボトルはどうすればいいですか。',
        kana: 'ペットボトルはどうすればいいですか。',
        vietnamese: 'What should I do with PET bottles?'
      },
      {
        speaker: 'Yoshida',
        japanese: 'ラベルをはがして、キャップを外して、中を洗ってから出してくださいね。環境のためにリサイクルしなければなりませんから。',
        kana: 'ラベルをはがして、キャップをはずして、なかをあらってからだしてくださいね。かんきょうのためにリサイクルしなければなりませんから。',
        vietnamese: 'Peel off the label, remove the cap, rinse the inside, and then put it out. We have to recycle for the sake of the environment.'
      },
      {
        speaker: 'Kimura',
        japanese: '細かいですね。あ、そういえば、最近はスーパーでもエコバッグが必要ですよね。',
        kana: 'こまかいですね。あ、そういえば、さいきんはスーパーでもエコバッグがひつようですよね。',
        vietnamese: 'That\'s pretty detailed. Oh, by the way, you need an eco bag at supermarkets these days too, right?'
      },
      {
        speaker: 'Yoshida',
        japanese: 'そうですよ。私はいつもエコバッグを持っていくようにしています。小さなことでも地球のためになりますからね。',
        kana: 'そうですよ。わたしはいつもエコバッグをもっていくようにしています。ちいさなことでもちきゅうのためになりますからね。',
        vietnamese: 'That\'s right. I always try to bring an eco bag. Even small things help the planet.'
      }
    ],
    culturalNote:
      'Japan has one of the most complex trash-sorting systems in the world: 燃えるゴミ (burnable trash), 燃えないゴミ (non-burnable trash), 資源ゴミ (recyclables), 粗大ゴミ (large items — requiring a fee). Each category has a different collection day, and putting out the wrong thing gets it left behind with a warning sticker. Foreigners new to Japan are often shocked by how complex this system is.'
  },

  // ── 11. Wedding / Ceremony (結婚式) ─────────────────────────────
  {
    id: 'n3-conv-11',
    title: 'Wedding',
    titleJp: '結婚式',
    level: 'N3',
    situation: 'Friends discuss attending a coworker\'s wedding',
    patterns: [
      {
        japanese: '結婚式に出席することになりました。',
        kana: 'けっこんしきにしゅっせきすることになりました。',
        vietnamese: 'I\'ll be attending the wedding.',
        memoryTip:
          'Remember: けっこんしき (kekkonshiki) = wedding ceremony. ～ことになりました = it has been decided (not that you decided it yourself).'
      },
      {
        japanese: 'ご祝儀はいくら包めばいいですか。',
        kana: 'ごしゅうぎはいくらつつめばいいですか。',
        vietnamese: 'How much money should I give as a gift?',
        memoryTip:
          'Remember: ごしゅうぎ (goshuugi) = celebratory monetary gift. つつむ = to wrap → it goes into a special envelope called a 祝儀袋 (shuugibukuro).'
      },
      {
        japanese: 'お祝いの言葉を伝えたいんですが。',
        kana: 'おいわいのことばをつたえたいんですが。',
        vietnamese: 'I\'d like to say a few congratulatory words...',
        memoryTip:
          'Remember: おいわい (oiwai) = congratulations/celebration. ことば = words, つたえる = to convey.'
      }
    ],
    dialogue: [
      {
        speaker: 'Misaki',
        japanese: '来月、山田さんの結婚式に出席することになったんだけど、何を準備すればいいかな。',
        kana: 'らいげつ、やまださんのけっこんしきにしゅっせきすることになったんだけど、なにをじゅんびすればいいかな。',
        vietnamese: 'I\'m going to Yamada\'s wedding next month, what should I prepare?'
      },
      {
        speaker: 'Mari',
        japanese: 'まず、ご祝儀を用意しなきゃ。同僚なら3万円が相場だよ。',
        kana: 'まず、ごしゅうぎをよういしなきゃ。どうりょうならさんまんえんがそうばだよ。',
        vietnamese: 'First, you need to prepare a monetary gift. For a coworker, 30,000 yen is the going rate.'
      },
      {
        speaker: 'Misaki',
        japanese: 'そうなんだ。新札じゃないとダメなんだよね？',
        kana: 'そうなんだ。しんさつじゃないとダメなんだよね？',
        vietnamese: 'I see. It has to be crisp new bills, right?'
      },
      {
        speaker: 'Mari',
        japanese: 'うん、銀行で新札に替えておいてね。あと、服装は白は避けたほうがいいよ。白は花嫁の色だから。',
        kana: 'うん、ぎんこうでしんさつにかえておいてね。あと、ふくそうはしろはさけたほうがいいよ。しろははなよめのいろだから。',
        vietnamese: 'Yeah, exchange for new bills at the bank. Also, you should avoid wearing white for your outfit, since white is the bride\'s color.'
      },
      {
        speaker: 'Misaki',
        japanese: 'ありがとう！お祝いの言葉も考えなきゃ。何て言えばいいかな。',
        kana: 'ありがとう！おいわいのことばもかんがえなきゃ。なんていえばいいかな。',
        vietnamese: 'Thanks! I need to think of a congratulatory message too. What should I say?'
      },
      {
        speaker: 'Mari',
        japanese: '「末永くお幸せに」が定番だよ。あ、「別れる」「切る」みたいな忌み言葉は絶対使っちゃダメだからね！',
        kana: '「すえながくおしあわせに」がていばんだよ。あ、「わかれる」「きる」みたいないみことばはぜったいつかっちゃダメだからね！',
        vietnamese: '"Wishing you lasting happiness" is the classic phrase. Oh, and you must never use taboo words like "break up" or "cut"!'
      }
    ],
    culturalNote:
      'Japanese weddings have many strict rules: the monetary gift (ご祝儀) should be an odd amount (30,000, 50,000 yen), since even numbers "can be split" = separation. It must be new bills, placed in a special 祝儀袋 envelope. There\'s a list of 忌み言葉 (imi-kotoba — taboo words) that must never be said: 別れる (break up), 切る (cut), 終わる (end), 戻る (return)... Guests dress formally, and women avoid white (reserved for the bride).'
  },

  // ── 12. Reporting a Problem (報告) ──────────────────────────────
  {
    id: 'n3-conv-12',
    title: 'Reporting a problem',
    titleJp: '問題の報告',
    level: 'N3',
    situation: 'An employee reports an incident to their manager and proposes a solution',
    patterns: [
      {
        japanese: '〜について報告があります。',
        kana: '〜についてほうこくがあります。',
        vietnamese: 'I have a report about ~.',
        memoryTip:
          'Remember: ほうこく (houkoku) = a report. Often the first thing said walking into a boss\'s office to deliver bad news.'
      },
      {
        japanese: '問題が発生してしまいました。',
        kana: 'もんだいがはっせいしてしまいました。',
        vietnamese: 'A problem has occurred.',
        memoryTip:
          'Remember: もんだい (mondai) = a problem. はっせい (hassei) = to arise/occur → ～てしまう = regrettably.'
      },
      {
        japanese: '対策として〜を提案いたします。',
        kana: 'たいさくとして〜をていあんいたします。',
        vietnamese: 'As a countermeasure, I\'d like to propose ~.',
        memoryTip:
          'Remember: たいさく (taisaku) = a countermeasure. ていあん (teian) = a proposal. A Japanese report always needs to come with a solution!'
      }
    ],
    dialogue: [
      {
        speaker: 'Employee',
        japanese: '部長、お時間よろしいでしょうか。納品について報告があります。',
        kana: 'ぶちょう、おじかんよろしいでしょうか。のうひんについてほうこくがあります。',
        vietnamese: 'Manager, do you have a moment? I have a report about the delivery.'
      },
      {
        speaker: 'Manager',
        japanese: 'はい、どうぞ。',
        kana: 'はい、どうぞ。',
        vietnamese: 'Yes, go ahead.'
      },
      {
        speaker: 'Employee',
        japanese: '実は、工場のトラブルで、来週の納品に問題が発生してしまいました。予定より3日遅れる見込みです。',
        kana: 'じつは、こうじょうのトラブルで、らいしゅうののうひんにもんだいがはっせいしてしまいました。よていよりみっかおくれるみこみです。',
        vietnamese: 'Actually, due to a factory issue, a problem has come up with next week\'s delivery. It\'s expected to be 3 days late.'
      },
      {
        speaker: 'Manager',
        japanese: '3日も遅れるのか。クライアントへの影響は？',
        kana: 'みっかもおくれるのか。クライアントへのえいきょうは？',
        vietnamese: 'A 3-day delay. How will it affect the client?'
      },
      {
        speaker: 'Employee',
        japanese: '対策として、一部を先に出荷して、残りを後から送ることを提案いたします。そうすれば、お客様の業務に大きな影響は出ないと思います。',
        kana: 'たいさくとして、いちぶをさきにしゅっかして、のこりをあとからおくることをていあんいたします。そうすれば、おきゃくさまのぎょうむにおおきなえいきょうはでないとおもいます。',
        vietnamese: 'As a countermeasure, I propose shipping part of the order first and sending the rest later. That way, I don\'t think it will significantly impact the customer\'s operations.'
      },
      {
        speaker: 'Manager',
        japanese: 'わかった。すぐにクライアントにも連絡してくれ。今後はこういうリスクを早めに報告するようにしてくれ。',
        kana: 'わかった。すぐにクライアントにもれんらくしてくれ。こんごはこういうリスクをはやめにほうこくするようにしてくれ。',
        vietnamese: 'Understood. Contact the client right away. From now on, report risks like this earlier.'
      }
    ],
    culturalNote:
      'In Japanese office culture, 報連相 (hou-ren-sou: 報告・連絡・相談 — report, contact, consult) is a golden rule. When reporting a problem, the standard structure is: (1) ask for a moment to talk, (2) state the problem with concrete facts, (3) propose a solution. A report that only states the problem without a 対策 (taisaku — countermeasure) will be viewed poorly.'
  },

  // ── 13. Travel Trouble (旅行のトラブル) ─────────────────────────
  {
    id: 'n3-conv-13',
    title: 'Travel trouble',
    titleJp: '旅行のトラブル',
    level: 'N3',
    situation: 'A tourist has a problem with a hotel booking and loses their passport',
    patterns: [
      {
        japanese: 'パスポートをなくしてしまったんです。',
        kana: 'パスポートをなくしてしまったんです。',
        vietnamese: 'I\'ve lost my passport.',
        memoryTip:
          'Remember: パスポート (pasupooto) = passport. なくす = to lose; てしまう = expresses regret at losing something important.'
      },
      {
        japanese: '予約が間違っているようなんですが。',
        kana: 'よやくがまちがっているようなんですが。',
        vietnamese: 'It seems like the reservation is wrong...',
        memoryTip:
          'Remember: よやく (yoyaku) = reservation. まちがう = to be mistaken. ようなんですが = "it seems like... but..." → a soft way to raise a complaint.'
      },
      {
        japanese: 'どうすればいいか教えていただけますか。',
        kana: 'どうすればいいかおしえていただけますか。',
        vietnamese: 'Could you tell me what I should do?',
        memoryTip:
          'Remember: どうすればいいか = what to do; おしえていただけますか = could you please teach/tell me (honorific) → a polite way to ask for help in a bind.'
      }
    ],
    dialogue: [
      {
        speaker: 'Traveler',
        japanese: 'すみません、予約が間違っているようなんですが。ツインルームを予約したのに、シングルになっています。',
        kana: 'すみません、よやくがまちがっているようなんですが。ツインルームをよやくしたのに、シングルになっています。',
        vietnamese: 'Excuse me, it seems like the reservation is wrong. I booked a twin room, but it shows a single.'
      },
      {
        speaker: 'Front desk',
        japanese: '申し訳ございません。確認いたしますので、少々お待ちください。',
        kana: 'もうしわけございません。かくにんいたしますので、しょうしょうおまちください。',
        vietnamese: 'I\'m very sorry. Please wait a moment while I check.'
      },
      {
        speaker: 'Front desk',
        japanese: 'お客様、確認したところ、システムのエラーだったようです。ツインルームに変更いたします。',
        kana: 'おきゃくさま、かくにんしたところ、システムのエラーだったようです。ツインルームにへんこういたします。',
        vietnamese: 'Sir/Ma\'am, it looks like it was a system error. I\'ll change it to the twin room.'
      },
      {
        speaker: 'Traveler',
        japanese: 'よかった。あの、もう一つ困ったことがあるんですが...実はパスポートをなくしてしまったんです。',
        kana: 'よかった。あの、もうひとつこまったことがあるんですが...じつはパスポートをなくしてしまったんです。',
        vietnamese: 'What a relief. Um, there\'s one more problem... actually I\'ve lost my passport.'
      },
      {
        speaker: 'Front desk',
        japanese: 'それは大変ですね。まず、警察に届け出を出して、それから大使館に連絡されたほうがいいですよ。',
        kana: 'それはたいへんですね。まず、けいさつにとどけでをだして、それからたいしかんにれんらくされたほうがいいですよ。',
        vietnamese: 'That sounds difficult. First, you should file a report with the police, then contact your embassy.'
      },
      {
        speaker: 'Traveler',
        japanese: '最寄りの警察署はどこか、教えていただけますか。',
        kana: 'もよりのけいさつしょはどこか、おしえていただけますか。',
        vietnamese: 'Could you tell me where the nearest police station is?'
      }
    ],
    culturalNote:
      'When losing a passport in Japan, the process is: (1) report to police at a 交番 (kouban — police box) or 警察署 (keisatsusho — police station) and receive a 遺失届 (ishitsu todoke — lost-item report). (2) Contact your embassy. Japan is famous for its high rate of returning lost items — about 83% of lost wallets are returned intact! Always keep a separate photocopy of your passport.'
  },

  // ── 14. Recommendation (推薦) ───────────────────────────────────
  {
    id: 'n3-conv-14',
    title: 'Recommendations',
    titleJp: 'おすすめ',
    level: 'N3',
    situation: 'Friends ask each other about restaurants, based on reviews and personal experience',
    patterns: [
      {
        japanese: 'おすすめの〜はありますか。',
        kana: 'おすすめの〜はありますか。',
        vietnamese: 'Is there a ~ you\'d recommend?',
        memoryTip:
          'Remember: おすすめ (osusume) = a recommendation. From the verb 勧める (susumeru — to recommend, advise).'
      },
      {
        japanese: '評判がいいと聞きました。',
        kana: 'ひょうばんがいいとききました。',
        vietnamese: 'I heard it has a good reputation.',
        memoryTip:
          'Remember: ひょうばん (hyouban) = reputation. Similar to "review" — hearing a good reputation makes you want to try it.'
      },
      {
        japanese: '口コミで人気があるみたいです。',
        kana: 'くちコミでにんきがあるみたいです。',
        vietnamese: 'It seems to be popular based on reviews.',
        memoryTip:
          'Remember: くちコミ (kuchikomi) = "mouth communication" → word of mouth, reviews. Japanese people trust 口コミ a lot — checking reviews before eating/buying is a national habit.'
      }
    ],
    dialogue: [
      {
        speaker: 'Saori',
        japanese: '来週、友達が東京に来るんだけど、おすすめのレストランはある？',
        kana: 'らいしゅう、ともだちがとうきょうにくるんだけど、おすすめのレストランはある？',
        vietnamese: 'My friend is coming to Tokyo next week, is there a restaurant you\'d recommend?'
      },
      {
        speaker: 'Daiki',
        japanese: '渋谷にある「和心」っていうお店、評判がいいと聞いたよ。和食がメインだけど、外国人にも人気らしい。',
        kana: 'しぶやにある「わごころ」っていうおみせ、ひょうばんがいいときいたよ。わしょくがメインだけど、がいこくじんにもにんきらしい。',
        vietnamese: 'There\'s a place in Shibuya called "Wagokoro" I heard has a good reputation. It\'s mainly Japanese food, but apparently popular with foreigners too.'
      },
      {
        speaker: 'Saori',
        japanese: 'へえ、口コミで人気があるみたいだね。値段はどのくらい？',
        kana: 'へえ、くちコミでにんきがあるみたいだね。ねだんはどのくらい？',
        vietnamese: 'Oh, it seems to be popular based on reviews. How much does it cost?'
      },
      {
        speaker: 'Daiki',
        japanese: 'ランチなら千五百円ぐらいだよ。予約したほうがいいと思うけど。',
        kana: 'ランチならせんごひゃくえんぐらいだよ。よやくしたほうがいいとおもうけど。',
        vietnamese: 'Lunch is around 1,500 yen. I think you should make a reservation though.'
      },
      {
        speaker: 'Saori',
        japanese: 'いいね！ネットで予約できる？',
        kana: 'いいね！ネットでよやくできる？',
        vietnamese: 'Nice! Can you book online?'
      },
      {
        speaker: 'Daiki',
        japanese: 'うん、食べログで予約できるはずだよ。あ、でもアレルギーがあったら、事前に伝えたほうがいいよ。',
        kana: 'うん、たべログでよやくできるはずだよ。あ、でもアレルギーがあったら、じぜんにつたえたほうがいいよ。',
        vietnamese: 'Yeah, you should be able to book through Tabelog. Oh, but if there\'s an allergy, you should let them know in advance.'
      }
    ],
    culturalNote:
      '食べログ (Tabelog) and ぐるなび (Gurunavi) are Japan\'s two largest food review sites. Japanese people place great importance on 口コミ (kuchikomi — reviews) and often check ratings before choosing a restaurant. A Tabelog score above 3.5/5 is considered excellent. The おすすめ culture is widespread — restaurant staff often suggest 本日のおすすめ (today\'s recommendation).'
  },

  // ── 15. Volunteering (ボランティア) ─────────────────────────────
  {
    id: 'n3-conv-15',
    title: 'Volunteer work',
    titleJp: 'ボランティア活動',
    level: 'N3',
    situation: 'A student invites a friend to join a community volunteer activity',
    patterns: [
      {
        japanese: 'ボランティア活動に参加しませんか。',
        kana: 'ボランティアかつどうにさんかしませんか。',
        vietnamese: 'Would you like to join a volunteer activity?',
        memoryTip:
          'Remember: ボランティア (borantia) = volunteer. かつどう (katsudou) = activity. ～ませんか = a polite invitation.'
      },
      {
        japanese: '地域のために何かしたいと思っています。',
        kana: 'ちいきのためになにかしたいとおもっています。',
        vietnamese: 'I want to do something for the local community.',
        memoryTip:
          'Remember: ちいき (chiiki) = area/local community. ～ために = for the sake of ~ → expresses a good motivation.'
      },
      {
        japanese: '〜の経験が〜に役に立つと思います。',
        kana: '〜のけいけんが〜にやくにたつとおもいます。',
        vietnamese: 'I think my experience in ~ will be useful for ~.',
        memoryTip:
          'Remember: やくにたつ (yaku ni tatsu) = to be useful. Used to say your experience/skills are relevant for volunteer work.'
      }
    ],
    dialogue: [
      {
        speaker: 'Yui',
        japanese: 'ねえ、今度の日曜日、一緒にボランティア活動に参加しない？',
        kana: 'ねえ、こんどのにちようび、いっしょにボランティアかつどうにさんかしない？',
        vietnamese: 'Hey, want to join a volunteer activity together this Sunday?'
      },
      {
        speaker: 'Kohei',
        japanese: 'どんな活動？ちょっと興味あるかも。',
        kana: 'どんなかつどう？ちょっときょうみあるかも。',
        vietnamese: 'What kind of activity? I might be interested.'
      },
      {
        speaker: 'Yui',
        japanese: '地域の公園の清掃活動だよ。子供たちに安全な遊び場を作りたいんだ。',
        kana: 'ちいきのこうえんのせいそうかつどうだよ。こどもたちにあんぜんなあそびばをつくりたいんだ。',
        vietnamese: 'It\'s a cleanup activity at the local park. I want to create a safe playground for kids.'
      },
      {
        speaker: 'Kohei',
        japanese: 'いいね。僕もこの地域のために何かしたいと思っていたんだ。何時集合？',
        kana: 'いいね。ぼくもこのちいきのためになにかしたいとおもっていたんだ。なんじしゅうごう？',
        vietnamese: 'Sounds good. I\'ve also been wanting to do something for this community. What time do we meet?'
      },
      {
        speaker: 'Yui',
        japanese: '朝9時に公園の入り口で。軍手とゴミ袋は用意してあるから、動きやすい服装で来てね。',
        kana: 'あさくじにこうえんのいりぐちで。ぐんてとゴミぶくろはよういしてあるから、うごきやすいふくそうできてね。',
        vietnamese: 'At 9am at the park entrance. Gloves and trash bags are already prepared, so come in clothes you can move around in.'
      },
      {
        speaker: 'Kohei',
        japanese: 'わかった！前にキャンプでゴミ拾いした経験が役に立つと思うよ。楽しみだね。',
        kana: 'わかった！まえにキャンプでゴミひろいしたけいけんがやくにたつとおもうよ。たのしみだね。',
        vietnamese: 'Got it! I think my experience picking up trash while camping before will come in handy. Looking forward to it.'
      }
    ],
    culturalNote:
      'ボランティア (volunteer) activities are very common in Japan, especially after natural disasters. Following the 2011 Great East Japan Earthquake, millions of people volunteered to help. At the local level, 町内会 (chounaikai — neighborhood associations) often organize park cleanups and security patrols. Participating in volunteer work is a good way to integrate into Japanese community life.'
  },

  // ── 16. Learning a Skill (習い事) ──────────────────────────────
  {
    id: 'n3-conv-16',
    title: 'Learning a new skill',
    titleJp: '習い事',
    level: 'N3',
    situation: 'Two people talk about signing up to learn a new skill outside of work',
    patterns: [
      {
        japanese: '習い事を始めようかと思っているんです。',
        kana: 'ならいごとをはじめようかとおもっているんです。',
        vietnamese: 'I\'m thinking about starting a new hobby class...',
        memoryTip:
          'Remember: ならいごと (naraigoto) = a learned skill/lesson pursued outside of work (piano, calligraphy, cooking...). ～ようかと思っている = weighing whether to do something.'
      },
      {
        japanese: '〜を習い始めてから、〜ようになりました。',
        kana: '〜をならいはじめてから、〜ようになりました。',
        vietnamese: 'Ever since I started learning ~, I\'ve become able to ~.',
        memoryTip:
          'Remember: ～ようになる = to become able to ~ (a change in ability) → emphasizes progress made through learning. はじめてから = ever since starting.'
      },
      {
        japanese: '書道は心が落ち着くのでおすすめです。',
        kana: 'しゅうじはこころがおちつくのでおすすめです。',
        vietnamese: 'Calligraphy calms the mind, so I recommend it.',
        memoryTip:
          'Remember: しゅうじ (shuuji) = calligraphy/handwriting practice. おちつく (ochitsuku) = to settle down/calm down.'
      }
    ],
    dialogue: [
      {
        speaker: 'Kato',
        japanese: '最近、何か習い事を始めようかと思っているんですけど、何がいいですかね。',
        kana: 'さいきん、なにかならいごとをはじめようかとおもっているんですけど、なにがいいですかね。',
        vietnamese: 'Lately I\'ve been thinking about starting a new hobby, what do you think would be good?'
      },
      {
        speaker: 'Watanabe',
        japanese: '私は去年からピアノを習っているんですよ。子供の頃からの夢だったんです。',
        kana: 'わたしはきょねんからピアノをならっているんですよ。こどものころからのゆめだったんです。',
        vietnamese: 'I\'ve been learning piano since last year. It was a dream of mine since childhood.'
      },
      {
        speaker: 'Kato',
        japanese: 'へえ、ピアノですか。大人になってからでも弾けるようになるものですか。',
        kana: 'へえ、ピアノですか。おとなになってからでもひけるようになるものですか。',
        vietnamese: 'Oh, piano? Can you actually learn to play even as an adult?'
      },
      {
        speaker: 'Watanabe',
        japanese: 'はい、習い始めてから半年で、簡単な曲が弾けるようになりましたよ。先生も優しいし、楽しいです。',
        kana: 'はい、ならいはじめてからはんとしで、かんたんなきょくがひけるようになりましたよ。せんせいもやさしいし、たのしいです。',
        vietnamese: 'Yes, six months after starting, I became able to play simple pieces. The teacher is kind too, and it\'s fun.'
      },
      {
        speaker: 'Kato',
        japanese: 'いいですね。書道にも興味があるんですけど。',
        kana: 'いいですね。しゅうじにもきょうみがあるんですけど。',
        vietnamese: 'That sounds nice. I\'m also interested in calligraphy.'
      },
      {
        speaker: 'Watanabe',
        japanese: '書道はいいですよ！心が落ち着くのでおすすめです。友達が通っている教室を紹介しましょうか。',
        kana: 'しゅうじはいいですよ！こころがおちつくのでおすすめです。ともだちがかよっているきょうしつをしょうかいしましょうか。',
        vietnamese: 'Calligraphy is great! It calms the mind, so I recommend it. Should I introduce you to the class my friend attends?'
      }
    ],
    culturalNote:
      '習い事 (naraigoto) reflects Japan\'s lifelong-learning culture. Adults often take up extra lessons outside of work: 書道 (calligraphy), 茶道 (tea ceremony), 華道 (flower arranging), ピアノ (piano), ヨガ (yoga)... Traditional culture classes (culture centers — カルチャー教室) are common at shopping centers. This is also a way to expand social connections outside of work.'
  },

  // ── 17. Insurance / Contracts (保険) ────────────────────────────
  {
    id: 'n3-conv-17',
    title: 'Insurance and contracts',
    titleJp: '保険と契約',
    level: 'N3',
    situation: 'A customer asks an insurance agent about the contract and cancellation terms',
    patterns: [
      {
        japanese: '保険に入ろうかと思っているんですが。',
        kana: 'ほけんにはいろうかとおもっているんですが。',
        vietnamese: 'I\'m considering signing up for insurance...',
        memoryTip:
          'Remember: ほけん (hoken) = insurance. はいる = to enter/join → 保険に入る = to take out insurance.'
      },
      {
        japanese: '契約の内容を詳しく教えてください。',
        kana: 'けいやくのないようをくわしくおしえてください。',
        vietnamese: 'Please explain the contract details in detail.',
        memoryTip:
          'Remember: けいやく (keiyaku) = contract. ないよう (naiyou) = content. くわしく = in detail → an essential phrase when signing a contract in Japan.'
      },
      {
        japanese: '解約する場合、違約金はかかりますか。',
        kana: 'かいやくするばあい、いやくきんはかかりますか。',
        vietnamese: 'If I cancel, is there a penalty fee?',
        memoryTip:
          'Remember: かいやく (kaiyaku) = to cancel a contract. いやくきん (iyakukin) = a cancellation penalty fee. ばあい = in the case of.'
      }
    ],
    dialogue: [
      {
        speaker: 'Customer',
        japanese: 'すみません、医療保険に入ろうかと思っているんですが、どんなプランがありますか。',
        kana: 'すみません、いりょうほけんにはいろうかとおもっているんですが、どんなプランがありますか。',
        vietnamese: 'Excuse me, I\'m considering taking out medical insurance, what plans do you have?'
      },
      {
        speaker: 'Agent',
        japanese: '月額3000円のベーシックプランと、5000円のプレミアムプランがございます。契約の内容を詳しくご説明いたしますね。',
        kana: 'げつがくさんぜんえんのベーシックプランと、ごせんえんのプレミアムプランがございます。けいやくのないようをくわしくごせつめいいたしますね。',
        vietnamese: 'We have a Basic plan at 3,000 yen a month, and a Premium plan at 5,000 yen. Let me explain the contract details in detail.'
      },
      {
        speaker: 'Customer',
        japanese: 'プレミアムプランはベーシックと何が違うんですか。',
        kana: 'プレミアムプランはベーシックとなにがちがうんですか。',
        vietnamese: 'What\'s the difference between Premium and Basic?'
      },
      {
        speaker: 'Agent',
        japanese: 'プレミアムは入院費用が全額カバーされます。ベーシックは7割までです。',
        kana: 'プレミアムはにゅういんひようがぜんがくカバーされます。ベーシックはななわりまでです。',
        vietnamese: 'Premium covers hospitalization costs in full. Basic only covers up to 70%.'
      },
      {
        speaker: 'Customer',
        japanese: 'なるほど。あの、もし解約する場合、違約金はかかりますか。',
        kana: 'なるほど。あの、もしかいやくするばあい、いやくきんはかかりますか。',
        vietnamese: 'I see. Um, if I cancel, is there a penalty fee?'
      },
      {
        speaker: 'Agent',
        japanese: '1年以内に解約される場合は、1ヶ月分の違約金が発生します。1年以上ご契約いただければ、いつでも無料で解約できます。',
        kana: 'いちねんいないにかいやくされるばあいは、いっかげつぶんのいやくきんがはっせいします。いちねんいじょうごけいやくいただければ、いつでもむりょうでかいやくできます。',
        vietnamese: 'If you cancel within 1 year, a penalty fee equal to one month\'s payment applies. If you\'ve had the contract for over a year, you can cancel for free at any time.'
      }
    ],
    culturalNote:
      'In Japan, the insurance system has two layers: 国民健康保険 (kokumin kenkou hoken — national health insurance, mandatory) and private insurance (optional). When signing any contract in Japan (phone, internet, insurance...), always ask clearly about 違約金 (iyakukin — cancellation fee) and 契約期間 (keiyaku kikan — contract term), since many contracts auto-renew (自動更新 — jidou koushin).'
  },

  // ── 18. Giving Advice (アドバイス) ──────────────────────────────
  {
    id: 'n3-conv-18',
    title: 'Giving advice',
    titleJp: 'アドバイスをする',
    level: 'N3',
    situation: 'Friends confide in each other about personal problems and give advice',
    patterns: [
      {
        japanese: '〜たほうがいいと思うよ。',
        kana: '〜たほうがいいとおもうよ。',
        vietnamese: 'I think you should ~.',
        memoryTip:
          'Remember: ～たほうがいい = "the direction of having done ~ is better" → advising someone to do something.'
      },
      {
        japanese: '〜ないほうがいいんじゃない？',
        kana: '〜ないほうがいいんじゃない？',
        vietnamese: 'Wouldn\'t it be better not to ~?',
        memoryTip:
          'Remember: ～ないほうがいい = advising someone NOT to do something. Adding んじゃない？ softens it, like "don\'t you think?"'
      },
      {
        japanese: '無理しないでね。',
        kana: 'むりしないでね。',
        vietnamese: 'Don\'t push yourself too hard.',
        memoryTip:
          'Remember: むり (muri) = unreasonable, too much. むりしないで = don\'t force yourself → a very common way to show concern in Japan.'
      }
    ],
    dialogue: [
      {
        speaker: 'Mika',
        japanese: '最近、仕事が忙しすぎて、全然眠れないんだよね。',
        kana: 'さいきん、しごとがいそがしすぎて、ぜんぜんねむれないんだよね。',
        vietnamese: 'Work has been way too busy lately, I can\'t sleep at all.'
      },
      {
        speaker: 'Ryo',
        japanese: 'それは心配だね。一度、病院に行ったほうがいいと思うよ。',
        kana: 'それはしんぱいだね。いちど、びょういんにいったほうがいいとおもうよ。',
        vietnamese: 'That\'s worrying. I think you should go see a doctor at least once.'
      },
      {
        speaker: 'Mika',
        japanese: 'うーん、でも病院に行く時間もないし...',
        kana: 'うーん、でもびょういんにいくじかんもないし...',
        vietnamese: 'Hmm, but I don\'t even have time to go to the hospital...'
      },
      {
        speaker: 'Ryo',
        japanese: '寝る前にスマホを見ないほうがいいんじゃない？ブルーライトで眠れなくなるらしいよ。',
        kana: 'ねるまえにスマホをみないほうがいいんじゃない？ブルーライトでねむれなくなるらしいよ。',
        vietnamese: 'Wouldn\'t it be better not to look at your phone before bed? I heard blue light makes it hard to sleep.'
      },
      {
        speaker: 'Mika',
        japanese: 'たしかに、毎晩SNSを見ちゃうんだよね。やめたほうがいいかも。',
        kana: 'たしかに、まいばんSNSをみちゃうんだよね。やめたほうがいいかも。',
        vietnamese: 'True, I end up checking social media every night. Maybe I should stop.'
      },
      {
        speaker: 'Ryo',
        japanese: 'うん、あとは無理しないでね。たまには有休を取って、ゆっくり休んだほうがいいよ。',
        kana: 'うん、あとはむりしないでね。たまにはゆうきゅうをとって、ゆっくりやすんだほうがいいよ。',
        vietnamese: 'Yeah, and don\'t push yourself too hard. You should take a paid day off sometimes and rest properly.'
      }
    ],
    culturalNote:
      'In Japanese culture, 無理しないで (don\'t push yourself too hard) is one of the most common expressions of concern. Japanese people tend toward 我慢 (gaman — endurance) and overwork, leading to the phenomenon of 過労死 (karoushi — death from overwork). Recently, the government has been promoting 働き方改革 (hatarakikata kaikaku — work-style reform) and using up all of one\'s 有給休暇 (yuukyuu kyuuka — paid leave).'
  },

  // ── 19. Seasonal Greetings (季節の挨拶) ─────────────────────────
  {
    id: 'n3-conv-19',
    title: 'Seasonal greetings',
    titleJp: '季節の挨拶',
    level: 'N3',
    situation: 'Neighbors meet and chat about the season — the heat, the cold',
    patterns: [
      {
        japanese: '暑いですね。お体に気をつけてくださいね。',
        kana: 'あついですね。おからだにきをつけてくださいね。',
        vietnamese: 'It\'s hot, isn\'t it. Please take care of yourself.',
        memoryTip:
          'Remember: あつい = hot → 暑い (weather) ≠ 熱い (objects). A classic summer opener!'
      },
      {
        japanese: '寒くなりましたね。風邪を引かないようにしてください。',
        kana: 'さむくなりましたね。かぜをひかないようにしてください。',
        vietnamese: 'It\'s gotten cold, hasn\'t it. Please be careful not to catch a cold.',
        memoryTip:
          'Remember: さむくなりました = "has become cold" → なる = to become. かぜをひく = to catch a cold. A common winter greeting.'
      },
      {
        japanese: '〜の季節になりましたね。',
        kana: '〜のきせつになりましたね。',
        vietnamese: 'It\'s become the season for ~, hasn\'t it.',
        memoryTip:
          'Remember: きせつ (kisetsu) = season. Japanese people are highly attuned to 四季 (shiki — the four seasons) and often open conversations with the weather.'
      }
    ],
    dialogue: [
      {
        speaker: 'Yamaguchi',
        japanese: 'あら、田中さん、おはようございます。毎日暑いですね。',
        kana: 'あら、たなかさん、おはようございます。まいにちあついですね。',
        vietnamese: 'Oh, Tanaka, good morning. It\'s hot every day, isn\'t it.'
      },
      {
        speaker: 'Tanaka',
        japanese: '本当に。今年の夏は特に厳しいですよね。もう花火の季節になりましたね。',
        kana: 'ほんとうに。ことしのなつはとくにきびしいですよね。もうはなびのきせつになりましたね。',
        vietnamese: 'It really is. This summer\'s especially harsh. It\'s already fireworks season.'
      },
      {
        speaker: 'Yamaguchi',
        japanese: 'そうですね。子供たちは夏祭りを楽しみにしていますよ。',
        kana: 'そうですね。こどもたちはなつまつりをたのしみにしていますよ。',
        vietnamese: 'That\'s right. The kids are looking forward to the summer festival.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'いいですね。ところで、最近お元気ですか。暑いですから、お体に気をつけてくださいね。',
        kana: 'いいですね。ところで、さいきんおげんきですか。あついですから、おからだにきをつけてくださいね。',
        vietnamese: 'That\'s nice. By the way, how have you been? It\'s hot, so please take care of yourself.'
      },
      {
        speaker: 'Yamaguchi',
        japanese: 'ありがとうございます。田中さんもお気をつけて。早く涼しくなるといいですね。',
        kana: 'ありがとうございます。たなかさんもおきをつけて。はやくすずしくなるといいですね。',
        vietnamese: 'Thank you. You take care too. I hope it cools down soon.'
      },
      {
        speaker: 'Tanaka',
        japanese: '本当ですね。ではまた。涼しくなったら、お茶でもしましょう。',
        kana: 'ほんとうですね。ではまた。すずしくなったら、おちゃでもしましょう。',
        vietnamese: 'Absolutely. See you later then. Once it cools down, let\'s get tea sometime.'
      }
    ],
    culturalNote:
      'Japanese people value 季節の挨拶 (kisetsu no aisatsu — seasonal greetings) in daily communication. Opening with the weather (暑いですね / 寒いですね) isn\'t just courtesy but also shows sensitivity to nature — a distinctive feature of Japanese culture. In formal letters, there\'s a system of 時候の挨拶 (jikou no aisatsu) with a specific greeting for each month, e.g. 残暑お見舞い申し上げます (a wish for health during the lingering heat of late summer).'
  },

  // ── 20. Storytelling (物語) ─────────────────────────────────────
  {
    id: 'n3-conv-20',
    title: 'Storytelling',
    titleJp: '物語を語る',
    level: 'N3',
    situation: 'Grandparents tell a folk tale to their grandchild, using traditional Japanese storytelling style',
    patterns: [
      {
        japanese: 'むかしむかし、あるところに〜がいました。',
        kana: 'むかしむかし、あるところに〜がいました。',
        vietnamese: 'Once upon a time, in a certain place, there lived ~.',
        memoryTip:
          'Remember: むかしむかし = "long, long ago" → the classic opening formula for Japanese folk tales, like "Once upon a time". あるところに = in a certain place.'
      },
      {
        japanese: '〜てしまいました。',
        kana: '〜てしまいました。',
        vietnamese: '~ ended up happening.',
        memoryTip:
          'Remember: てしまう in storytelling emphasizes that an event has fully happened, often with a sense of regret or surprise.'
      },
      {
        japanese: 'そして、〜は幸せに暮らしましたとさ。',
        kana: 'そして、〜はしあわせにくらしましたとさ。',
        vietnamese: 'And then, ~ lived happily ever after.',
        memoryTip:
          'Remember: ～ましたとさ = the classic ending formula for folk tales, like "and they lived happily ever after". とさ = a story-ending suffix, giving a nostalgic feel.'
      }
    ],
    dialogue: [
      {
        speaker: 'Grandmother',
        japanese: 'むかしむかし、あるところに、心の優しいおじいさんとおばあさんがいました。',
        kana: 'むかしむかし、あるところに、こころのやさしいおじいさんとおばあさんがいました。',
        vietnamese: 'Once upon a time, in a certain place, there lived a kind-hearted old man and old woman.'
      },
      {
        speaker: 'Grandchild',
        japanese: 'それで？その次はどうなったの？',
        kana: 'それで？そのつぎはどうなったの？',
        vietnamese: 'And then? What happened next?'
      },
      {
        speaker: 'Grandmother',
        japanese: 'ある日、おじいさんが山へ行くと、不思議な箱を見つけました。開けてみると、中から光が出てきたんですよ。',
        kana: 'あるひ、おじいさんがやまへいくと、ふしぎなはこをみつけました。あけてみると、なかからひかりがでてきたんですよ。',
        vietnamese: 'One day, when the old man went into the mountains, he found a mysterious box. When he opened it, light came pouring out from inside.'
      },
      {
        speaker: 'Grandchild',
        japanese: 'わあ、すごい！光の中に何があったの？',
        kana: 'わあ、すごい！ひかりのなかになにがあったの？',
        vietnamese: 'Wow, amazing! What was in the light?'
      },
      {
        speaker: 'Grandmother',
        japanese: '小さな小鳥が出てきました。でも欲張りな隣のおじいさんが、その小鳥を取ってしまいました。',
        kana: 'ちいさなことりがでてきました。でもよくばりなとなりのおじいさんが、そのことりをとってしまいました。',
        vietnamese: 'A little bird flew out. But the greedy old man next door took the bird for himself.'
      },
      {
        speaker: 'Grandmother',
        japanese: 'でもね、小鳥は正直なおじいさんのところに戻ってきました。そして、おじいさんとおばあさんは幸せに暮らしましたとさ。おしまい。',
        kana: 'でもね、ことりはしょうじきなおじいさんのところにもどってきました。そして、おじいさんとおばあさんはしあわせにくらしましたとさ。おしまい。',
        vietnamese: 'But, the little bird came back to the honest old man. And then, the old man and old woman lived happily ever after. The end.'
      }
    ],
    culturalNote:
      'Japanese folk tales (昔話 — mukashi-banashi) always begin with むかしむかし and end with ～ましたとさ。おしまい。 Themes usually revolve around morality: kind-hearted people (正直者) are rewarded, greedy people (欲張り) are punished. Famous tales include: 桃太郎 (Momotaro), 浦島太郎 (Urashima Taro), 花咲かじいさん (The Old Man Who Made Flowers Bloom). Storytelling is also a natural way to teach Japanese to children.'
  },

  // ── 21. Pet / Animal (ペット) ───────────────────────────────────
  {
    id: 'n3-conv-21',
    title: 'Pets',
    titleJp: 'ペットの話',
    level: 'N3',
    situation: 'Two friends talk about keeping pets and the responsibility of caring for them',
    patterns: [
      {
        japanese: 'ペットを飼おうかどうか迷っています。',
        kana: 'ペットをかおうかどうかまよっています。',
        vietnamese: 'I\'m debating whether or not to get a pet.',
        memoryTip:
          'Remember: ペット (petto) = pet. かう (kau) = to keep/raise (an animal). まよう = to be undecided → ～ようかどうか = whether or not to ~.'
      },
      {
        japanese: '犬と猫、どちらが飼いやすいですか。',
        kana: 'いぬとねこ、どちらがかいやすいですか。',
        vietnamese: 'Between a dog and a cat, which is easier to keep?',
        memoryTip:
          'Remember: かいやすい = easy to keep → V(masu-stem) + やすい = easy to do. Opposite: かいにくい = hard to keep.'
      },
      {
        japanese: '散歩に連れて行くのが日課なんです。',
        kana: 'さんぽにつれていくのがにっかなんです。',
        vietnamese: 'Taking it for a walk is my daily routine.',
        memoryTip:
          'Remember: さんぽ (sanpo) = a walk/stroll. つれていく = to take/bring along. にっか (nikka) = a daily routine.'
      }
    ],
    dialogue: [
      {
        speaker: 'Nao',
        japanese: '最近、ペットを飼おうかどうか迷っているんだけど、なおちゃんは何飼ってるんだっけ？',
        kana: 'さいきん、ペットをかおうかどうかまよっているんだけど、なおちゃんはなにかってるんだっけ？',
        vietnamese: 'I\'ve been debating whether to get a pet lately. What do you have again?'
      },
      {
        speaker: 'Yuta',
        japanese: '柴犬を飼っているよ。3歳になったんだ。毎日散歩に連れて行くのが日課だよ。',
        kana: 'しばいぬをかっているよ。さんさいになったんだ。まいにちさんぽにつれていくのがにっかだよ。',
        vietnamese: 'I have a Shiba Inu. She just turned 3. Taking her for a walk every day is my routine.'
      },
      {
        speaker: 'Nao',
        japanese: '犬と猫、どちらが飼いやすいかな。マンションだから、犬は難しいかもしれないけど。',
        kana: 'いぬとねこ、どちらがかいやすいかな。マンションだから、いぬはむずかしいかもしれないけど。',
        vietnamese: 'Between a dog and a cat, which would be easier? I\'m in an apartment, so a dog might be hard.'
      },
      {
        speaker: 'Yuta',
        japanese: '確かに猫のほうが室内で飼いやすいかもね。でも、猫も爪とぎで家具がボロボロになることがあるよ。',
        kana: 'たしかにねこのほうがしつないでかいやすいかもね。でも、ねこもつめとぎでかぐがボロボロになることがあるよ。',
        vietnamese: 'True, a cat might be easier to keep indoors. But cats can also wreck the furniture with their claws.'
      },
      {
        speaker: 'Nao',
        japanese: 'そうなんだ。ペットを飼うのは楽しそうだけど、責任も大きいよね。',
        kana: 'そうなんだ。ペットをかうのはたのしそうだけど、せきにんもおおきいよね。',
        vietnamese: 'I see. Keeping a pet sounds fun, but the responsibility is big too.'
      },
      {
        speaker: 'Yuta',
        japanese: 'うん、家族の一員だからね。病院代もかかるし、旅行にも行きにくくなるけど、その分、毎日癒されるよ。',
        kana: 'うん、かぞくのいちいんだからね。びょういんだいもかかるし、りょこうにもいきにくくなるけど、そのぶん、まいにちいやされるよ。',
        vietnamese: 'Yeah, because it becomes part of the family. Vet bills add up and travel becomes harder, but in exchange, you feel comforted every day.'
      }
    ],
    culturalNote:
      'Japan is a pet lover\'s paradise: there are cat cafes (猫カフェ), dog cafes (犬カフェ), and even hedgehog and owl cafes. The Shiba Inu breed is a national icon. However, many マンション (apartment buildings) prohibit pets, so it\'s important to check for ペット可 (petto-ka — pets allowed) before renting. Pet costs in Japan can be quite high: vaccinations, pet insurance, grooming... all have professional services available.'
  },

  // ── 22. Fashion (ファッション) ──────────────────────────────────
  {
    id: 'n3-conv-22',
    title: 'Fashion',
    titleJp: 'ファッション',
    level: 'N3',
    situation: 'Friends go clothes shopping together and discuss fashion trends',
    patterns: [
      {
        japanese: 'この服、似合うと思う？',
        kana: 'このふく、にあうとおもう？',
        vietnamese: 'Do you think these clothes suit me?',
        memoryTip:
          'Remember: にあう (niau) = to suit/match (in appearance). Different from ぴったり (ppittari) = fits well (in size). にあう is about style, hue, look.'
      },
      {
        japanese: '今、〜が流行っているらしいよ。',
        kana: 'いま、〜がはやっているらしいよ。',
        vietnamese: 'I heard ~ is trending right now.',
        memoryTip:
          'Remember: はやる (hayaru) = to be trending, popular → りゅうこう (ryuukou) also means "trend".'
      },
      {
        japanese: '〜のほうが〜に合っていると思うけど。',
        kana: '〜のほうが〜に合っていると思うけど。',
        vietnamese: 'I think ~ suits ~ better.',
        memoryTip:
          'Remember: ～のほうが = ~ side more (comparison); あう = to suit → gently offering an opinion when asked. Adding けど at the end leaves it open, not pushy.'
      }
    ],
    dialogue: [
      {
        speaker: 'Ai',
        japanese: 'ねえ、この赤いワンピース、似合うと思う？',
        kana: 'ねえ、このあかいワンピース、にあうとおもう？',
        vietnamese: 'Hey, do you think this red dress suits me?'
      },
      {
        speaker: 'Mai',
        japanese: '色は素敵だけど、デザイン的にはこっちの紺色のほうがあいちゃんに合っていると思うけど。',
        kana: 'いろはすてきだけど、デザインてきにはこっちのこんいろのほうがあいちゃんにあっていると思うけど。',
        vietnamese: 'The color is nice, but design-wise, I think this navy one suits you better.'
      },
      {
        speaker: 'Ai',
        japanese: 'そう？確かにシンプルなほうが好きかも。今、何が流行っているの？',
        kana: 'そう？たしかにシンプルなほうがすきかも。いま、なにがはやっているの？',
        vietnamese: 'Really? I might actually prefer something simpler. What\'s trending right now?'
      },
      {
        speaker: 'Mai',
        japanese: '今はオーバーサイズのジャケットが流行っているらしいよ。韓国ファッションの影響みたい。',
        kana: 'いまはオーバーサイズのジャケットがはやっているらしいよ。かんこくファッションのえいきょうみたい。',
        vietnamese: 'I heard oversized jackets are trending right now. Seems like it\'s influenced by Korean fashion.'
      },
      {
        speaker: 'Ai',
        japanese: 'へえ。あ、このスカートかわいい！でも値段が...',
        kana: 'へえ。あ、このスカートかわいい！でもねだんが...',
        vietnamese: 'Oh. Hey, this skirt is cute! But the price...'
      },
      {
        speaker: 'Mai',
        japanese: 'セールを待ったほうがいいかもね。来月からバーゲンが始まるらしいから。',
        kana: 'セールをまったほうがいいかもね。らいげつからバーゲンがはじまるらしいから。',
        vietnamese: 'Maybe you should wait for a sale. I heard the big sale starts next month.'
      }
    ],
    culturalNote:
      'Japanese fashion is famously diverse: from カジュアル (casual) to 原宿スタイル (Harajuku style — vividly colorful). Japanese people pay a lot of attention to TPO (Time, Place, Occasion) when choosing clothing. In the office, dressing too flashily is seen as 空気が読めない (kuuki ga yomenai — not reading the room). Major sale seasons (バーゲン) happen in January and July.'
  },

  // ── 23. Social Media (SNS) ─────────────────────────────────────
  {
    id: 'n3-conv-23',
    title: 'Social media',
    titleJp: 'SNSの話',
    level: 'N3',
    situation: 'Friends talk about using social media, posting, and getting likes',
    patterns: [
      {
        japanese: 'SNSに投稿したら、たくさんいいねがもらえた。',
        kana: 'SNSにとうこうしたら、たくさんいいねがもらえた。',
        vietnamese: 'When I posted on social media, I got a lot of likes.',
        memoryTip:
          'Remember: とうこう (toukou) = to post. いいね = "Like" button. SNS in Japan = social media in general (Twitter/X, Instagram, LINE).'
      },
      {
        japanese: 'フォロワーが〜人に増えました。',
        kana: 'フォロワーが〜にんにふえました。',
        vietnamese: 'My followers grew to ~ people.',
        memoryTip:
          'Remember: フォロワー (forowa-) = follower. ふえる (fueru) = to increase (naturally). Opposite: へる (heru) = to decrease.'
      },
      {
        japanese: '〜の写真がバズったんだって！',
        kana: '〜のしゃしんがバズったんだって！',
        vietnamese: 'I heard the photo of ~ went viral!',
        memoryTip:
          'Remember: バズる (bazuru) = to go viral, from the English "buzz". A modern Japanese loanword.'
      }
    ],
    dialogue: [
      {
        speaker: 'Rina',
        japanese: '見て見て！昨日、猫の動画をSNSに投稿したら、もう500いいねがついたの！',
        kana: 'みてみて！きのう、ねこのどうがをSNSにとうこうしたら、もうごひゃくいいねがついたの！',
        vietnamese: 'Look, look! Yesterday I posted a cat video, and it already has 500 likes!'
      },
      {
        speaker: 'Shota',
        japanese: 'すごいね！フォロワーは何人いるの？',
        kana: 'すごいね！フォロワーはなんにんいるの？',
        vietnamese: 'That\'s amazing! How many followers do you have?'
      },
      {
        speaker: 'Rina',
        japanese: '先月は300人だったけど、フォロワーが800人に増えたんだ。猫の写真がバズったんだって友達に言われた。',
        kana: 'せんげつはさんびゃくにんだったけど、フォロワーがはっぴゃくにんにふえたんだ。ねこのしゃしんがバズったんだってともだちにいわれた。',
        vietnamese: 'It was 300 last month, but it grew to 800. A friend told me my cat photo went viral.'
      },
      {
        speaker: 'Shota',
        japanese: 'いいなあ。僕もインスタ始めようかな。でも何を投稿すればいいかわからなくて。',
        kana: 'いいなあ。ぼくもインスタはじめようかな。でもなにをとうこうすればいいかわからなくて。',
        vietnamese: 'Lucky. Maybe I should start Instagram too. But I don\'t know what to post.'
      },
      {
        speaker: 'Rina',
        japanese: '料理とか旅行の写真は人気あるよ。ただ、個人情報は載せないように気をつけてね。',
        kana: 'りょうりとかりょこうのしゃしんはにんきあるよ。ただ、こじんじょうほうはのせないようにきをつけてね。',
        vietnamese: 'Food or travel photos are popular. Just be careful not to post personal information.'
      },
      {
        speaker: 'Shota',
        japanese: 'うん、ネットの世界は怖いところもあるからね。気をつけるよ。',
        kana: 'うん、ネットのせかいはこわいところもあるからね。きをつけるよ。',
        vietnamese: 'Yeah, the internet has its scary side too. I\'ll be careful.'
      }
    ],
    culturalNote:
      'In Japan, SNS (Social Networking Service) is the general term for social media. LINE is the #1 messaging app, Twitter/X is extremely popular (Japan is the world\'s 2nd largest market), and Instagram is used for photo sharing. Anonymous culture (匿名 — tokumei) is strong online in Japan — many people use fake names. The phenomenon of 炎上 (enjou — "catching fire", getting mass-criticized) is a major fear when using social media in Japan.'
  },

  // ── 24. Emergency (緊急) ────────────────────────────────────────
  {
    id: 'n3-conv-24',
    title: 'Emergency situations',
    titleJp: '緊急事態',
    level: 'N3',
    situation: 'Witnessing a traffic accident and calling for emergency help',
    patterns: [
      {
        japanese: '救急車を呼んでください！',
        kana: 'きゅうきゅうしゃをよんでください！',
        vietnamese: 'Please call an ambulance!',
        memoryTip:
          'Remember: きゅうきゅうしゃ (kyuukyuusha) = ambulance. Japan\'s emergency numbers: 119 (ambulance + fire), 110 (police).'
      },
      {
        japanese: '事故がありました。けが人がいます。',
        kana: 'じこがありました。けがにんがいます。',
        vietnamese: 'There\'s been an accident. There are injured people.',
        memoryTip:
          'Remember: じこ (jiko) = accident. けがにん = an injured person (けが = injury + にん = person). Speak briefly and clearly when calling for emergency help!'
      },
      {
        japanese: '助けてください！',
        kana: 'たすけてください！',
        vietnamese: 'Help!',
        memoryTip:
          'Remember: たすけて (tasukete) = help! The most urgent phrase in Japanese, used when you need help immediately.'
      }
    ],
    dialogue: [
      {
        speaker: 'Witness',
        japanese: '大変だ！交差点で事故がありました！誰か救急車を呼んでください！',
        kana: 'たいへんだ！こうさてんでじこがありました！だれかきゅうきゅうしゃをよんでください！',
        vietnamese: 'This is bad! There\'s been an accident at the intersection! Someone call an ambulance!'
      },
      {
        speaker: 'Passerby',
        japanese: '119に電話します！けが人は何人いますか。',
        kana: 'ひゃくじゅうきゅうにでんわします！けがにんはなんにんいますか。',
        vietnamese: 'I\'ll call 119! How many people are injured?'
      },
      {
        speaker: 'Witness',
        japanese: '二人います。一人は頭から血が出ています。もう一人は足が動かないと言っています。',
        kana: 'ふたりいます。ひとりはあたまからちがでています。もうひとりはあしがうごかないといっています。',
        vietnamese: 'Two people. One is bleeding from the head. The other says their leg won\'t move.'
      },
      {
        speaker: 'Passerby',
        japanese: 'もしもし、119ですか。交通事故です。場所は渋谷駅前の交差点です。けが人が二人います。',
        kana: 'もしもし、ひゃくじゅうきゅうですか。こうつうじこです。ばしょはしぶやえきまえのこうさてんです。けがにんがふたりいます。',
        vietnamese: 'Hello, is this 119? It\'s a traffic accident. The location is the intersection in front of Shibuya station. There are two injured people.'
      },
      {
        speaker: 'Witness',
        japanese: '助けてください！意識がなくなりそうです！',
        kana: 'たすけてください！いしきがなくなりそうです！',
        vietnamese: 'Help! It looks like they\'re about to lose consciousness!'
      },
      {
        speaker: 'Passerby',
        japanese: '救急車がすぐ来るそうです。動かさないで、そのまま安静にさせてください。',
        kana: 'きゅうきゅうしゃがすぐくるそうです。うごかさないで、そのままあんせいにさせてください。',
        vietnamese: 'I heard the ambulance will be here soon. Don\'t move them, keep them still.'
      }
    ],
    culturalNote:
      'Japan\'s emergency numbers: 119 = medical + fire emergency; 110 = police. When calling 119, you need to clearly state: (1) 火事ですか、救急ですか (fire or medical?), (2) 場所 (location), (3) 状況 (situation). The average ambulance response time in Japan is 8.7 minutes — one of the fastest in the world. Note: foreigners in Japan can call #7119 for multilingual medical advice.'
  },

  // ── 25. Farewell / Transfer (送別) ──────────────────────────────
  {
    id: 'n3-conv-25',
    title: 'Farewell / job transfer',
    titleJp: '送別会',
    level: 'N3',
    situation: 'Coworkers throw a farewell party for someone transferring to another branch',
    patterns: [
      {
        japanese: '転勤することになりました。',
        kana: 'てんきんすることになりました。',
        vietnamese: 'I\'ll be transferring.',
        memoryTip:
          'Remember: てんきん (tenkin) = a job transfer to another location. ～ことになりました = it has been decided (by the company, not your own choice) → emphasizes it\'s a decision from above.'
      },
      {
        japanese: '送別会を開きましょう。',
        kana: 'そうべつかいをひらきましょう。',
        vietnamese: 'Let\'s hold a farewell party.',
        memoryTip:
          'Remember: そうべつかい (soubetsukai) = a farewell party. ひらく = to open/hold (a party/meeting) → 会を開く = to host a gathering.'
      },
      {
        japanese: 'お見送りに参ります。',
        kana: 'おみおくりにまいります。',
        vietnamese: 'I will come to see you off.',
        memoryTip:
          'Remember: おみおくり (omiokuri) = seeing someone off. まいります = a humble form of 行く (to go) → shows respect when seeing off a senior.'
      }
    ],
    dialogue: [
      {
        speaker: 'Section chief',
        japanese: 'みなさん、お知らせがあります。鈴木さんが来月から大阪支社に転勤することになりました。',
        kana: 'みなさん、おしらせがあります。すずきさんがらいげつからおおさかししゃにてんきんすることになりました。',
        vietnamese: 'Everyone, I have an announcement. Suzuki will be transferring to the Osaka branch starting next month.'
      },
      {
        speaker: 'Coworker A',
        japanese: 'えっ、本当ですか。寂しくなりますね。送別会を開きましょうよ。',
        kana: 'えっ、ほんとうですか。さびしくなりますね。そうべつかいをひらきましょうよ。',
        vietnamese: 'What, really? It\'ll be lonely without them. Let\'s hold a farewell party.'
      },
      {
        speaker: 'Coworker B',
        japanese: '賛成です！鈴木さんにはお世話になったので、盛大にやりましょう。',
        kana: 'さんせいです！すずきさんにはおせわになったので、せいだいにやりましょう。',
        vietnamese: 'Agreed! Suzuki has helped us out so much, let\'s make it a big one.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'みなさん、ありがとうございます。3年間、本当にお世話になりました。大阪に行っても、この チームのことは忘れません。',
        kana: 'みなさん、ありがとうございます。さんねんかん、ほんとうにおせわになりました。おおさかにいっても、このチームのことはわすれません。',
        vietnamese: 'Thank you, everyone. You\'ve truly taken care of me these 3 years. Even in Osaka, I won\'t forget this team.'
      },
      {
        speaker: 'Coworker A',
        japanese: '最終日はお見送りに参りますね。新しい環境でもご活躍をお祈りしています。',
        kana: 'さいしゅうびはおみおくりにまいりますね。あたらしいかんきょうでもごかつやくをおいのりしています。',
        vietnamese: 'I\'ll come see you off on your last day. I wish you success in your new environment.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'ありがとう。大阪に来ることがあったら、ぜひ連絡してください。たこ焼きをごちそうしますよ！',
        kana: 'ありがとう。おおさかにくることがあったら、ぜひれんらくしてください。たこやきをごちそうしますよ！',
        vietnamese: 'Thanks. If you ever come to Osaka, definitely get in touch. I\'ll treat you to takoyaki!'
      }
    ],
    culturalNote:
      '転勤 (tenkin — a job transfer) is very common at Japanese companies, especially for 総合職 (sougou-shoku — general-track employees). Employees can be transferred anywhere without being able to refuse — this is called a 辞令 (jirei — a personnel order). A 送別会 (soubetsukai — farewell party) is an important ritual: usually including speeches, gifts (花束 — a bouquet of flowers), and tears. The classic farewell phrases: お世話になりました (thank you for taking care of me) and お元気で (take care of yourself).'
  }
];
