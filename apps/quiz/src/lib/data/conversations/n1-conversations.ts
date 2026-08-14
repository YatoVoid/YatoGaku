import type { ConversationPattern } from '$lib/types/lesson';

export const N1_CONVERSATIONS: ConversationPattern[] = [
  // ── 1. Debate / Argumentation (討論) ─────────────────────────
  {
    id: 'n1-conv-01',
    title: 'Academic debate',
    titleJp: '討論',
    level: 'N1',
    situation: 'Two graduate students debate AI\'s impact on the labor market in a university seminar',
    patterns: [
      {
        japanese: '〜とは限らない',
        kana: '〜とはかぎらない',
        vietnamese: 'Not necessarily ~, it\'s not always the case that ~.',
        memoryTip:
          'Remember: かぎらない = the "limit" is broken → not confined to a single conclusion. Used to gently refute a claim without flatly denying it.'
      },
      {
        japanese: '〜に過ぎない',
        kana: '〜にすぎない',
        vietnamese: 'It\'s merely ~, nothing more, nothing less.',
        memoryTip:
          'Remember: すぎない = "doesn\'t exceed" → downplays the subject, saying it amounts to no more than that. A sharp rebuttal tool in debate.'
      },
      {
        japanese: '〜反面、〜',
        kana: '〜はんめん、〜',
        vietnamese: 'On the other hand, ~ / conversely, ~.',
        memoryTip:
          'Remember: 反面 (hanmen) = "the reverse side" → flip the coin to see the opposing angle. Always pairs two contrasting clauses.'
      }
    ],
    dialogue: [
      {
        speaker: 'Tanaka',
        japanese: 'AIの発展により、多くの職業が消滅するという見方がありますが、必ずしもそうとは限らないと思います。',
        kana: 'エーアイのはってんにより、おおくのしょくぎょうがしょうめつするというみかたがありますが、かならずしもそうとはかぎらないとおもいます。',
        vietnamese: 'There\'s a view that AI\'s development will make many jobs disappear, but I don\'t think that\'s necessarily the case.'
      },
      {
        speaker: 'Yamamoto',
        japanese: 'しかし、現在のAIの能力は単なる補助ツールに過ぎないという主張は、楽観的すぎるのではないでしょうか。',
        kana: 'しかし、げんざいのエーアイののうりょくはたんなるほじょツールにすぎないというしゅちょうは、らっかんてきすぎるのではないでしょうか。',
        vietnamese: 'However, isn\'t the claim that current AI capability is merely an auxiliary tool overly optimistic?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'おっしゃる通り、AIは効率を飛躍的に高める反面、人間にしかできない創造的な判断は依然として必要です。',
        kana: 'おっしゃるとおり、エーアイはこうりつをひやくてきにたかめるはんめん、にんげんにしかできないそうぞうてきなはんだんはいぜんとしてひつようです。',
        vietnamese: 'As you say, AI dramatically boosts efficiency, but on the other hand, creative judgment that only humans can make is still necessary.'
      },
      {
        speaker: 'Yamamoto',
        japanese: 'その点については同意しますが、「人間にしかできない」とされていた領域すら、AIが侵食し始めているのが現実です。',
        kana: 'そのてんについてはどういしますが、「にんげんにしかできない」とされていたりょういきすら、エーアイがしんしょくしはじめているのがげんじつです。',
        vietnamese: 'I agree on that point, but the reality is that AI has begun encroaching even on domains once thought to be "only humans can do this."'
      },
      {
        speaker: 'Tanaka',
        japanese: '確かに脅威はありますが、歴史的に見れば、技術革新は常に新たな雇用を生み出してきました。今回も例外とは限りません。',
        kana: 'たしかにきょういはありますが、れきしてきにみれば、ぎじゅつかくしんはつねにあらたなこようをうみだしてきました。こんかいもれいがいとはかぎりません。',
        vietnamese: 'Certainly there\'s a threat, but historically, technological innovation has always created new employment. This time won\'t necessarily be an exception either.'
      }
    ],
    culturalNote:
      'In Japanese academic debate, speakers often use おっしゃる通り (just as you say) to acknowledge the other side\'s valid point before countering — a mark of respect. The "yes, but" style is characteristic of Japanese discussion culture, avoiding direct confrontation. The ～とは限らない structure allows for refutation without causing the other party to lose face.'
  },

  // ── 2. Formal Speech (スピーチ) ──────────────────────────────
  {
    id: 'n1-conv-02',
    title: 'A formal speech',
    titleJp: 'スピーチ',
    level: 'N1',
    situation: 'A CEO delivers a speech at the company\'s 50th anniversary ceremony before employees and business partners',
    patterns: [
      {
        japanese: '〜にあたって',
        kana: '〜にあたって',
        vietnamese: 'On the occasion of ~, at the time of ~.',
        memoryTip:
          'Remember: にあたって = "standing at" an important moment. Used only for significant events, not everyday matters.'
      },
      {
        japanese: '〜をもって',
        kana: '〜をもって',
        vietnamese: 'By means of ~, with ~ (formal).',
        memoryTip:
          'Remember: をもって = "carrying, holding" something (gratitude, respect) to present as an offering. An extremely formal version of で.'
      },
      {
        japanese: 'お礼申し上げます',
        kana: 'おれいもうしあげます',
        vietnamese: 'I would like to express my gratitude.',
        memoryTip:
          'Remember: お礼 = a formal thanks + 申し上げます = "to humbly say upward" → elevates the thanks and offers it up to someone above. The highest honorific version of ありがとう.'
      }
    ],
    dialogue: [
      {
        speaker: 'CEO',
        japanese: '本日は、弊社創立五十周年の式典にあたり、ご多忙の中お集まりいただき、心よりお礼申し上げます。',
        kana: 'ほんじつは、へいしゃそうりつごじっしゅうねんのしきてんにあたり、ごたぼうのなかおあつまりいただき、こころよりおれいもうしあげます。',
        vietnamese: 'On the occasion of our company\'s 50th anniversary ceremony today, I sincerely thank you for gathering here despite your busy schedules.'
      },
      {
        speaker: 'CEO',
        japanese: '半世紀にわたる歩みを振り返りますと、幾多の困難がございました。しかし、社員一人ひとりの努力をもって、今日のこの日を迎えることができました。',
        kana: 'はんせいきにわたるあゆみをふりかえりますと、いくたのこんなんがございました。しかし、しゃいんひとりひとりのどりょくをもって、こんにちのこのひをむかえることができました。',
        vietnamese: 'Looking back over half a century of progress, there have been countless hardships. But through the efforts of each and every employee, we have been able to reach this day.'
      },
      {
        speaker: 'CEO',
        japanese: '新たな五十年の出発にあたって、次の世代への架け橋となるべく、さらなる革新に挑んでまいります。',
        kana: 'あらたなごじゅうねんのしゅっぱつにあたって、つぎのせだいへのかけはしとなるべく、さらなるかくしんにいどんでまいります。',
        vietnamese: 'On the occasion of setting off on the next 50 years, we will continue to pursue further innovation, so as to become a bridge to the next generation.'
      },
      {
        speaker: 'CEO',
        japanese: 'お取引先の皆様、そして全社員に対し、深甚なる感謝の意をもって、ご挨拶とさせていただきます。',
        kana: 'おとりひきさきのみなさま、そしてぜんしゃいんにたいし、しんじんなるかんしゃのいをもって、ごあいさつとさせていただきます。',
        vietnamese: 'With profound gratitude toward our business partners and all our employees, I would like to conclude my remarks.'
      }
    ],
    culturalNote:
      'A formal speech (式辞 — shikiji) in Japanese culture follows a fixed structure: an opening thanks to attendees (お礼), reflection on the past (振り返り), a vision for the future (展望), and a closing thanks. A CEO always uses 弊社 (heisha — "our humble company"), never 我が社. The 〜をもって structure here carries the weight of "with all sincerity."'
  },

  // ── 3. Literary Expression (文学的表現) ──────────────────────
  {
    id: 'n1-conv-03',
    title: 'Literary expression',
    titleJp: '文学的表現',
    level: 'N1',
    situation: 'Two literature professors discuss a contemporary novel at a literary criticism symposium',
    patterns: [
      {
        japanese: '〜ざるを得ない',
        kana: '〜ざるをえない',
        vietnamese: 'Cannot help but ~, forced to ~.',
        memoryTip:
          'Remember: ざる = classical negative (ず → ざる) + を得ない = "cannot obtain" → "cannot obtain the state of NOT doing" = compelled to do it. Double negation makes a strong affirmation. Picture being locked in a room with no way to NOT open the door.'
      },
      {
        japanese: '〜ならざるもの',
        kana: '〜ならざるもの',
        vietnamese: 'That which is not ~, something outside of ~.',
        memoryTip:
          'Remember: ならざる = "that which is not" (classical) → ならない + ざる combined in an archaic way. Sounds like a sage declaring: "that which is not X..." — found only in extremely formal writing.'
      },
      {
        japanese: '〜べきだ',
        kana: '〜べきだ',
        vietnamese: 'Should ~, ought to ~ (moral obligation).',
        memoryTip:
          'Remember: べき carries the sense of returning to do the right thing, doing what one has a DUTY to do. Stronger than ほうがいい, carrying moral judgment.'
      }
    ],
    dialogue: [
      {
        speaker: 'Prof. Sato',
        japanese: 'この作品を読んで、現代文学の方向性について再考せざるを得ませんでした。',
        kana: 'このさくひんをよんで、げんだいぶんがくのほうこうせいについてさいこうせざるをえませんでした。',
        vietnamese: 'Reading this work, I couldn\'t help but reconsider the direction of contemporary literature.'
      },
      {
        speaker: 'Prof. Nakamura',
        japanese: '同感です。作者は、言葉ならざるものによって読者の心を揺さぶるという、極めて稀な才能の持ち主です。',
        kana: 'どうかんです。さくしゃは、ことばならざるものによってどくしゃのこころをゆさぶるという、きわめてまれなさいのうのもちぬしです。',
        vietnamese: 'I agree. The author possesses an extremely rare talent — the ability to stir the reader\'s heart through that which lies outside of words.'
      },
      {
        speaker: 'Prof. Sato',
        japanese: '文学は時代を映す鏡であるべきだと言われますが、この小説は鏡を超えて、時代そのものを変えようとしている。',
        kana: 'ぶんがくはじだいをうつすかがみであるべきだといわれますが、このしょうせつはかがみをこえて、じだいそのものをかえようとしている。',
        vietnamese: 'It\'s said that literature should be a mirror reflecting the times, but this novel goes beyond the mirror and tries to change the times themselves.'
      },
      {
        speaker: 'Prof. Nakamura',
        japanese: '行間に潜む沈黙こそが、この作品の真の言語であると認めざるを得ません。',
        kana: 'ぎょうかんにひそむちんもくこそが、このさくひんのしんのげんごであるとみとめざるをえません。',
        vietnamese: 'I have to admit that the silence lurking between the lines is precisely the true language of this work.'
      },
      {
        speaker: 'Prof. Sato',
        japanese: '我々批評家は、作品を解体するのではなく、作品と対話するべきだという教訓を、この小説から得ました。',
        kana: 'われわれひひょうかは、さくひんをかいたいするのではなく、さくひんとたいわするべきだというきょうくんを、このしょうせつからえました。',
        vietnamese: 'We critics have learned a lesson from this novel: that we should engage in dialogue with a work, not dismantle it.'
      }
    ],
    culturalNote:
      'Japanese literary criticism is deeply influenced by the concept of 行間を読む (yomu — "reading between the lines"). The Japanese highly value "blank space" (余白 — yohaku) and "meaningful silence" (沈黙 — chinmoku). The ～ざるを得ない structure often appears in criticism to express being compelled to acknowledge an undeniable truth, carrying an archaic and solemn resonance.'
  },

  // ── 4. Diplomatic Language (外交的表現) ──────────────────────
  {
    id: 'n1-conv-04',
    title: 'Diplomatic language',
    titleJp: '外交的表現',
    level: 'N1',
    situation: 'Representatives from two companies negotiate strategic partnership terms in a formal meeting room',
    patterns: [
      {
        japanese: '〜させていただく',
        kana: '〜させていただく',
        vietnamese: 'Allow me to humbly ~.',
        memoryTip:
          'Remember: させて (allow) + いただく (receive from above) → "I humbly receive permission from you to do this." Double honorific: asking permission while being humble. An implicit power move — the speaker lowers themselves to elevate the other party.'
      },
      {
        japanese: '〜と存じます',
        kana: '〜とぞんじます',
        vietnamese: 'I believe that ~ (extremely humble).',
        memoryTip:
          'Remember: 存じます is the ultra-humble version of 思います. Used only in high-level business, diplomacy, or before royalty.'
      }
    ],
    dialogue: [
      {
        speaker: 'Director Suzuki',
        japanese: '本日は貴重なお時間をいただき、誠にありがとうございます。早速ですが、提携の件について、ご説明させていただきたいと存じます。',
        kana: 'ほんじつはきちょうなおじかんをいただき、まことにありがとうございます。さっそくですが、ていけいのけんについて、ごせつめいさせていただきたいとぞんじます。',
        vietnamese: 'Thank you very much for your valuable time today. If I may get right to it, I would like to explain the matter of our partnership.'
      },
      {
        speaker: 'Executive Takahashi',
        japanese: 'ありがとうございます。弊社としましても、御社との連携は大変有意義であると存じております。',
        kana: 'ありがとうございます。へいしゃとしましても、おんしゃとのれんけいはたいへんゆういぎであるとぞんじております。',
        vietnamese: 'Thank you. From our side as well, we believe that collaborating with your company would be highly meaningful.'
      },
      {
        speaker: 'Director Suzuki',
        japanese: '条件につきましては、双方にとって最善の形を模索させていただければと思います。一方的なご提案をするつもりはございません。',
        kana: 'じょうけんにつきましては、そうほうにとってさいぜんのかたちをもさくさせていただければとおもいます。いっぽうてきなごていあんをするつもりはございません。',
        vietnamese: 'Regarding the terms, we would like to explore what would be optimal for both sides. We have no intention of making a one-sided proposal.'
      },
      {
        speaker: 'Executive Takahashi',
        japanese: 'その姿勢に深く敬意を表します。具体的な数字につきましては、社内で検討させていただいた上で、改めてご回答申し上げます。',
        kana: 'そのしせいにふかくけいいをひょうします。ぐたいてきなすうじにつきましては、しゃないでけんとうさせていただいたうえで、あらためてごかいとうもうしあげます。',
        vietnamese: 'I deeply respect that stance. As for the specific figures, we will respond again after internal review.'
      },
      {
        speaker: 'Director Suzuki',
        japanese: 'かしこまりました。本日は忌憚のないご意見を賜り、大変実りある会談であったと存じます。今後ともよろしくお願い申し上げます。',
        kana: 'かしこまりました。ほんじつはきたんのないごいけんをたまわり、たいへんみのりあるかいだんであったとぞんじます。こんごともよろしくおねがいもうしあげます。',
        vietnamese: 'Understood. Having received such candid opinions today, I believe this has been a very fruitful discussion. We look forward to continued collaboration.'
      }
    ],
    culturalNote:
      'High-level Japanese business language deliberately uses "double honorifics" (二重敬語): ～させていただく is both humble and permission-seeking, leaving room for the other party to decline without losing face. 忌憚のない (candid) is an invitation for honest opinions, but listeners still understand that politeness must be maintained. 存じます is the humble form (謙譲語) of 思います, used only when speaking one\'s own thoughts to a superior or partner.'
  },

  // ── 5. Proverbs in Context (ことわざ) ────────────────────────
  {
    id: 'n1-conv-05',
    title: 'Proverbs in context',
    titleJp: 'ことわざ',
    level: 'N1',
    situation: 'A senpai encourages a kouhai after an exam failure, using Japanese proverbs for inspiration',
    patterns: [
      {
        japanese: '猿も木から落ちる',
        kana: 'さるもきからおちる',
        vietnamese: 'Even monkeys fall from trees (everyone fails sometimes).',
        memoryTip:
          'Remember: A monkey (さる) is a master climber, yet it still falls → even an expert can make mistakes. Equivalent to "even Homer nods." Used to console, never to mock.'
      },
      {
        japanese: '七転び八起き',
        kana: 'ななころびやおき',
        vietnamese: 'Fall down seven times, get up eight.',
        memoryTip:
          'Remember: 7 falls (ころび) + 8 rises (おき) → always getting up ONE more time than you fell. The number 8 symbolizes luck in Japanese culture. The core spirit of Japanese perseverance.'
      },
      {
        japanese: '失敗は成功のもと',
        kana: 'しっぱいはせいこうのもと',
        vietnamese: 'Failure is the mother of success.',
        memoryTip:
          'Remember: もと = root/origin → failure (失敗) is the ROOT from which the tree of success (成功) grows. Identical to the English proverb — easy to remember since the idea crosses cultures.'
      }
    ],
    dialogue: [
      {
        speaker: 'Senpai',
        japanese: '試験の結果、聞いたよ。落ち込んでいるだろうけど、猿も木から落ちるって言うだろう。君ほど優秀な人でも、こういうことはあるんだ。',
        kana: 'しけんのけっか、きいたよ。おちこんでいるだろうけど、さるもきからおちるっていうだろう。きみほどゆうしゅうなひとでも、こういうことはあるんだ。',
        vietnamese: 'I heard about the exam results. You must be down about it, but you know they say "even monkeys fall from trees." Even someone as capable as you can have moments like this.'
      },
      {
        speaker: 'Kouhai',
        japanese: 'ありがとうございます。でも、あれだけ準備したのに…。自分が情けなくて。',
        kana: 'ありがとうございます。でも、あれだけじゅんびしたのに…。じぶんがなさけなくて。',
        vietnamese: 'Thank you. But after all that preparation... I feel so pathetic.'
      },
      {
        speaker: 'Senpai',
        japanese: '失敗は成功のもとだよ。今回の悔しさが、次の試験の最大の武器になる。',
        kana: 'しっぱいはせいこうのもとだよ。こんかいのくやしさが、つぎのしけんのさいだいのぶきになる。',
        vietnamese: 'Failure is the mother of success. This frustration will become your greatest weapon for the next exam.'
      },
      {
        speaker: 'Kouhai',
        japanese: '先輩も、そういう経験がおありですか。',
        kana: 'せんぱいも、そういうけいけんがおありですか。',
        vietnamese: 'Have you had an experience like this too, senpai?'
      },
      {
        speaker: 'Senpai',
        japanese: '何度もあるよ。でも七転び八起きの精神で、そのたびに立ち上がってきた。大事なのは、転んだ回数じゃなくて、起き上がった回数だ。',
        kana: 'なんどもあるよ。でもななころびやおきのせいしんで、そのたびにたちあがってきた。だいじなのは、ころんだかいすうじゃなくて、おきあがったかいすうだ。',
        vietnamese: 'Many times. But with the spirit of falling seven times and getting up eight, I picked myself up every time. What matters isn\'t how many times you fall, but how many times you get back up.'
      },
      {
        speaker: 'Kouhai',
        japanese: '先輩の言葉、胸に刻みます。もう一度、挑戦させてください。',
        kana: 'せんぱいのことば、むねにきざみます。もういちど、ちょうせんさせてください。',
        vietnamese: 'I\'ll carve your words into my heart. Please let me try again.'
      }
    ],
    culturalNote:
      'Japanese proverbs (ことわざ) are often used in daily conversation to convey folk wisdom. 七転び八起き is not just a saying but a deep life philosophy in Japanese culture — embodied by the Daruma doll (だるま), which can only ever land upright, symbolizing unbreakable will. When a senpai uses ことわざ to advise a kouhai, it\'s a subtle way of passing on life experience without imposing or lecturing — because a proverb is "shared wisdom," not personal opinion.'
  },

  // ── 6. Philosophy (哲学) ────────────────────────────────────
  {
    id: 'n1-conv-06',
    title: 'Philosophy',
    titleJp: '哲学',
    level: 'N1',
    situation: 'Two philosophy professors discuss the nature of existence at an East-West philosophy conference',
    patterns: [
      {
        japanese: '〜と言わざるを得ない',
        kana: '〜といわざるをえない',
        vietnamese: 'Cannot help but say ~, must admit that ~.',
        memoryTip:
          'Remember: いわざる = "not saying" (archaic) + を得ない = "cannot" → "cannot NOT say" = compelled to declare it. A double negation creates a strong affirmation — a philosopher uses this when logic forces an admission.'
      },
      {
        japanese: '〜に他ならない',
        kana: '〜にほかならない',
        vietnamese: 'Nothing other than ~, precisely ~.',
        memoryTip:
          'Remember: ほかならない = "is nothing else" → there is ONLY this one answer. Like an arrow striking dead center — a definitive conclusion, no other possibility remains.'
      },
      {
        japanese: '〜てやまない',
        kana: '〜てやまない',
        vietnamese: 'Endlessly ~, forever ~ (intense feeling).',
        memoryTip:
          'Remember: やまない = "does not stop" → a stream of emotion flowing endlessly. Used only for deep, positive feelings: 願ってやまない (wish endlessly), 愛してやまない (love unceasingly).'
      }
    ],
    dialogue: [
      {
        speaker: 'Prof. Nishida',
        japanese: '存在とは何かという問いは、哲学の根本的な課題であると言わざるを得ません。',
        kana: 'そんざいとはなにかというといは、てつがくのこんぽんてきなかだいであるといわざるをえません。',
        vietnamese: 'I must admit that the question "what is existence" is the fundamental problem of philosophy.'
      },
      {
        speaker: 'Prof. Watsuji',
        japanese: '東洋哲学において、存在の認識は自己と世界の一体性に他なりません。デカルトの二元論とは根本的に異なります。',
        kana: 'とうようてつがくにおいて、そんざいのにんしきはじことせかいのいったいせいにほかなりません。デカルトのにげんろんとはこんぽんてきにことなります。',
        vietnamese: 'In Eastern philosophy, the recognition of existence is nothing other than the unity of self and world. This is fundamentally different from Descartes\' dualism.'
      },
      {
        speaker: 'Prof. Nishida',
        japanese: '本質を探求する営みこそが、人間を人間たらしめるものであると、私は信じてやみません。',
        kana: 'ほんしつをたんきゅうするいとなみこそが、にんげんをにんげんたらしめるものであると、わたしはしんじてやみません。',
        vietnamese: 'I believe endlessly that the very act of pursuing essence is precisely what makes a human being human.'
      },
      {
        speaker: 'Prof. Watsuji',
        japanese: '同感です。しかし、存在の本質に迫れば迫るほど、言語の限界に突き当たると言わざるを得ない。',
        kana: 'どうかんです。しかし、そんざいのほんしつにせまればせまるほど、げんごのげんかいにつきあたるといわざるをえない。',
        vietnamese: 'I agree. However, I must admit that the closer we get to the essence of existence, the more we run into the limits of language.'
      },
      {
        speaker: 'Prof. Nishida',
        japanese: '「無」の中にこそ「有」が宿るという逆説、それが東洋思想の核心に他なりません。',
        kana: '「む」のなかにこそ「う」がやどるというぎゃくせつ、それがとうようしそうのかくしんにほかなりません。',
        vietnamese: 'The paradox that "being" dwells precisely within "nothingness" — that is nothing other than the very core of Eastern thought.'
      }
    ],
    culturalNote:
      'Japanese philosophy (日本哲学) is distinctive for combining Zen Buddhism with Western philosophy. The Kyoto School (京都学派), founded by Nishida Kitaro, proposed the concept of "Absolute Nothingness" (絶対無) as the foundation of existence — entirely different from Heidegger\'s "Being." When Japanese philosophers use ～に他ならない, they are making an absolute judgment — no other possibility remains — reflecting a tightly reasoned argumentative style.'
  },

  // ── 7. Law & Justice (法と正義) ─────────────────────────────
  {
    id: 'n1-conv-07',
    title: 'Law and justice',
    titleJp: '法と正義',
    level: 'N1',
    situation: 'A defense attorney and prosecutor debate in a courtroom over a complex case',
    patterns: [
      {
        japanese: '〜をもって',
        kana: '〜をもって',
        vietnamese: 'On the basis of ~, according to ~ (legal).',
        memoryTip:
          'Remember: をもって in a legal context = "holding evidence/law up" → placed on the scale of justice. Different from the formal をもって in Lesson 2 — here it means "based on, grounded in."'
      },
      {
        japanese: '〜に基づいて',
        kana: '〜にもとづいて',
        vietnamese: 'Based on ~, grounded on ~.',
        memoryTip:
          'Remember: もとづいて = "follows the foundation (もと)" → every argument must have a solid FOUNDATION. A lawyer builds the house of argument on a foundation of evidence.'
      },
      {
        japanese: '〜かねない',
        kana: '〜かねない',
        vietnamese: 'Might possibly ~, there\'s a risk that ~ (negative).',
        memoryTip:
          'Remember: かねない = "cannot bear the weight" → the situation is so heavy it could collapse at any time. Used only for concerning NEGATIVE outcomes — a warning of imminent danger.'
      }
    ],
    dialogue: [
      {
        speaker: 'Defense attorney',
        japanese: '裁判長、被告人の権利に基づき、弁護の機会を十分にいただきたく存じます。',
        kana: 'さいばんちょう、ひこくにんのけんりにもとづき、べんごのきかいをじゅうぶんにいただきたくぞんじます。',
        vietnamese: 'Your Honor, based on the defendant\'s rights, I request a full opportunity for defense.'
      },
      {
        speaker: 'Prosecutor',
        japanese: '証拠をもって申し上げます。被告人には義務を怠った重大な過失があります。',
        kana: 'しょうこをもってもうしあげます。ひこくにんにはぎむをおこたったじゅうだいなかしつがあります。',
        vietnamese: 'On the basis of the evidence, I submit that the defendant is seriously at fault for neglecting their duty.'
      },
      {
        speaker: 'Defense attorney',
        japanese: 'しかし、状況証拠のみに基づいた判決は、冤罪を生みかねません。慎重な審理をお願いいたします。',
        kana: 'しかし、じょうきょうしょうこのみにもとづいたはんけつは、えんざいをうみかねません。しんちょうなしんりをおねがいいたします。',
        vietnamese: 'However, a verdict based solely on circumstantial evidence could result in a wrongful conviction. I ask for careful deliberation.'
      },
      {
        speaker: 'Prosecutor',
        japanese: '被告人が義務を履行していれば、このような事態には至らなかったはずです。法に基づいて厳正に裁くべきです。',
        kana: 'ひこくにんがぎむをりこうしていれば、このようなじたいにはいたらなかったはずです。ほうにもとづいてげんせいにさばくべきです。',
        vietnamese: 'Had the defendant fulfilled their duty, this situation would not have arisen. The case should be judged strictly, based on the law.'
      }
    ],
    culturalNote:
      'Japan\'s judicial system (司法制度) is known for a conviction rate above 99%, making the defense attorney\'s role extremely difficult. In 2009, Japan introduced a lay judge system (裁判員制度 — saibanin seido) allowing citizens to participate in trials. In court, the language is extremely formal: lawyers use 存じます and 申し上げます — the highest honorific level — showing absolute respect for the judge and the legal process.'
  },

  // ── 8. Economics Debate (経済討論) ──────────────────────────
  {
    id: 'n1-conv-08',
    title: 'An economics debate',
    titleJp: '経済討論',
    level: 'N1',
    situation: 'Two economists debate macroeconomic policy on a TV news program',
    patterns: [
      {
        japanese: '〜を余儀なくされる',
        kana: '〜をよぎなくされる',
        vietnamese: 'Forced to ~, with no other option.',
        memoryTip:
          'Remember: 余儀 = "alternative measures" + なくされる = "made to lose" → stripped of every alternative, left with only ONE path. Driven by circumstance, not personal will.'
      },
      {
        japanese: '〜を踏まえて',
        kana: '〜をふまえて',
        vietnamese: 'Based on ~, taking ~ into account.',
        memoryTip:
          'Remember: ふまえて = "to stand firmly on" → standing on a foundation of data/facts to make a judgment. Unlike に基づいて (legal), ふまえて leans toward "comprehensive consideration."'
      }
    ],
    dialogue: [
      {
        speaker: 'Economist A',
        japanese: '現在の経済政策を踏まえて申し上げますと、このままではインフレが加速する恐れがあります。',
        kana: 'げんざいのけいざいせいさくをふまえてもうしあげますと、このままではインフレがかそくするおそれがあります。',
        vietnamese: 'Taking the current economic policy into account, if things continue as they are, there\'s a risk that inflation will accelerate.'
      },
      {
        speaker: 'Economist B',
        japanese: 'しかし、デフレ対策を怠れば、企業は大規模なリストラを余儀なくされるのではないでしょうか。',
        kana: 'しかし、デフレたいさくをおこたれば、きぎょうはだいきぼなリストラをよぎなくされるのではないでしょうか。',
        vietnamese: 'However, if we neglect deflation countermeasures, won\'t companies be forced into large-scale restructuring?'
      },
      {
        speaker: 'Economist A',
        japanese: '過去のデータを踏まえれば、金融緩和だけでは構造的な問題は解決しないと言わざるを得ません。',
        kana: 'かこのデータをふまえれば、きんゆうかんわだけではこうぞうてきなもんだいはかいけつしないといわざるをえません。',
        vietnamese: 'Based on past data, I must admit that monetary easing alone will not resolve structural problems.'
      },
      {
        speaker: 'Economist B',
        japanese: '同意しますが、財政出動なくしては、国民生活が犠牲を余儀なくされます。バランスの取れた経済政策が急務です。',
        kana: 'どういしますが、ざいせいしゅつどうなくしては、こくみんせいかつがぎせいをよぎなくされます。バランスのとれたけいざいせいさくがきゅうむです。',
        vietnamese: 'I agree, but without fiscal stimulus, the lives of citizens will be forced into sacrifice. A balanced economic policy is urgently needed.'
      }
    ],
    culturalNote:
      'Japan\'s economy went through the "Lost Decade" (失われた十年 — ushinawareta juunen) after the bubble burst in 1991. Abenomics (アベノミクス) with its "three arrows" (三本の矢) was an attempt to escape prolonged deflation. In Japanese televised economic debates, experts maintain a polite demeanor — using ではないでしょうか (isn\'t it the case that?) rather than direct confrontation.'
  },

  // ── 9. Art Criticism (芸術批評) ─────────────────────────────
  {
    id: 'n1-conv-09',
    title: 'Art criticism',
    titleJp: '芸術批評',
    level: 'N1',
    situation: 'Two art critics discuss a contemporary exhibition at the national art museum',
    patterns: [
      {
        japanese: '〜ともなると',
        kana: '〜ともなると',
        vietnamese: 'Once one reaches the level of ~, when it comes to ~.',
        memoryTip:
          'Remember: ともなると = "when it also becomes" → once something has evolved to the highest level, everything else changes. Used to talk about a qualitative threshold — from "skilled" to "master."'
      },
      {
        japanese: '〜ずにはいられない',
        kana: '〜ずにはいられない',
        vietnamese: 'Cannot help but ~, unable to hold back from ~.',
        memoryTip:
          'Remember: ず (negation) + にはいられない = "cannot remain still" → a feeling so intense one CANNOT NOT act. The heart bursting out of the chest — instinct overpowering reason.'
      }
    ],
    dialogue: [
      {
        speaker: 'Critic A',
        japanese: 'この芸術家ともなると、一筆一筆に哲学が込められていますね。',
        kana: 'このげいじゅつかともなると、ひとふでひとふでにてつがくがこめられていますね。',
        vietnamese: 'Once an artist reaches this level, every single brushstroke is imbued with philosophy.'
      },
      {
        speaker: 'Critic B',
        japanese: '確かに。この作品を前にすると、美学とは何かを問い直さずにはいられません。',
        kana: 'たしかに。このさくひんをまえにすると、びがくとはなにかをといなおさずにはいられません。',
        vietnamese: 'Indeed. Standing before this work, I cannot help but reconsider what aesthetics even is.'
      },
      {
        speaker: 'Critic A',
        japanese: '従来の評価基準では、この作品の本質を捉えきれないと言わざるを得ません。新しい批評言語が必要です。',
        kana: 'じゅうらいのひょうかきじゅんでは、このさくひんのほんしつをとらえきれないといわざるをえません。あたらしいひひょうげんごがひつようです。',
        vietnamese: 'I have to admit that conventional evaluation criteria cannot fully capture the essence of this work. A new critical vocabulary is needed.'
      },
      {
        speaker: 'Critic B',
        japanese: '国際的な芸術家ともなると、文化の境界を超えて人類共通の感動を生み出せるものです。',
        kana: 'こくさいてきなげいじゅつかともなると、ぶんかのきょうかいをこえてじんるいきょうつうのかんどうをうみだせるものです。',
        vietnamese: 'Once an artist reaches an international level, they can transcend cultural boundaries and create emotion shared across humanity.'
      },
      {
        speaker: 'Critic A',
        japanese: '色彩の対比に目を奪われずにはいられない。静寂の中に激情が潜んでいる。まさに矛盾の美学です。',
        kana: 'しきさいのたいひにめをうばわれずにはいられない。せいじゃくのなかにげきじょうがひそんでいる。まさにむじゅんのびがくです。',
        vietnamese: 'I cannot help but be captivated by the contrast of colors. Fierce passion hides within stillness. It is truly the aesthetics of contradiction.'
      }
    ],
    culturalNote:
      'Japanese aesthetics (日本美学) has distinctive concepts: 侘び寂び (wabi-sabi — the beauty of imperfection), 幽玄 (yuugen — a profound, mysterious beauty), and 物の哀れ (mono no aware — the poignant sadness inherent to all things). Japanese art criticism often seeks out "the space between" (間 — ma) rather than only analyzing what is present. The ～ずにはいられない structure expresses an irresistible aesthetic response.'
  },

  // ── 10. Political Discourse (政治談話) ──────────────────────
  {
    id: 'n1-conv-10',
    title: 'Political discourse',
    titleJp: '政治談話',
    level: 'N1',
    situation: 'Two political commentators analyze the state of parliament and party policy on a commentary program',
    patterns: [
      {
        japanese: '〜いかんによっては',
        kana: '〜いかんによっては',
        vietnamese: 'Depending on ~, according to how the situation ~.',
        memoryTip:
          'Remember: いかん = "how" (classical) + によっては = "depending on" → depending on HOW the situation unfolds. A classical word that appears in politics and law — carrying an air of weight and gravity.'
      },
      {
        japanese: '〜をめぐって',
        kana: '〜をめぐって',
        vietnamese: 'Surrounding the issue of ~, regarding ~.',
        memoryTip:
          'Remember: めぐって = "revolving around" → everyone stands around the ISSUE at the center to debate it. Like a round table with a hot topic in the middle.'
      }
    ],
    dialogue: [
      {
        speaker: 'Commentator A',
        japanese: '今回の政策をめぐって、与党と野党の対立が激化しています。',
        kana: 'こんかいのせいさくをめぐって、よとうとやとうのたいりつがげきかしています。',
        vietnamese: 'Regarding this policy, the confrontation between the ruling and opposition parties is intensifying.'
      },
      {
        speaker: 'Commentator B',
        japanese: '野党の対応いかんによっては、政権交代すら現実味を帯びてくるでしょう。',
        kana: 'やとうのたいおういかんによっては、せいけんこうたいすらげんじつみをおびてくるでしょう。',
        vietnamese: 'Depending on how the opposition responds, even a change of government could become a real possibility.'
      },
      {
        speaker: 'Commentator A',
        japanese: '与党の政策に対する国民の信頼いかんによっては、次の選挙で大きな変動がありかねません。',
        kana: 'よとうのせいさくにたいするこくみんのしんらいいかんによっては、つぎのせんきょでおおきなへんどうがありかねません。',
        vietnamese: 'Depending on the public\'s trust in the ruling party\'s policies, there could be major shifts in the next election.'
      },
      {
        speaker: 'Commentator B',
        japanese: '憲法改正をめぐる議論は、単なる政策論争に過ぎないのか、それとも国の根幹に関わる問題なのか。国民的議論が必要です。',
        kana: 'けんぽうかいせいをめぐるぎろんは、たんなるせいさくろんそうにすぎないのか、それともくにのこんかんにかかわるもんだいなのか。こくみんてきぎろんがひつようです。',
        vietnamese: 'Is the debate surrounding constitutional amendment merely a policy dispute, or an issue tied to the very foundation of the nation? A national discussion is needed.'
      }
    ],
    culturalNote:
      'Japanese politics operates as a multi-party system with the Liberal Democratic Party (自民党 — Jiminto) dominant almost continuously since 1955. The Diet (国会 — Kokkai) consists of the House of Councillors (参議院) and the House of Representatives (衆議院). In political commentary, いかん (如何) carries a classical, formal tone commonly heard in Diet speeches and newspaper editorials — reflecting Japan\'s tradition of using classical Chinese-derived vocabulary in political discourse.'
  },

  // ── 11. Scientific Paper (科学論文) ─────────────────────────
  {
    id: 'n1-conv-11',
    title: 'A scientific paper',
    titleJp: '科学論文',
    level: 'N1',
    situation: 'A supervising professor and a graduate student discuss research methodology and results in a seminar',
    patterns: [
      {
        japanese: '〜に即して',
        kana: '〜にそくして',
        vietnamese: 'In line with ~, in keeping with ~.',
        memoryTip:
          'Remember: そくして = "clinging closely to" → sticking close to reality/data, like rails hugging the ground. Science demands that theory stay CLOSE to experimentation, not float free.'
      },
      {
        japanese: '〜得る／〜得ない',
        kana: '〜うる／〜えない',
        vietnamese: 'Can ~ / Cannot ~ (theoretical possibility).',
        memoryTip:
          'Remember: 得る(うる) = "to attain" → theoretically speaking, is this result attainable? Used in scientific writing to describe logical possibility, not practical possibility.'
      }
    ],
    dialogue: [
      {
        speaker: 'Professor',
        japanese: '君の仮説は興味深いが、実験データに即して検証する必要がある。理論だけでは不十分だ。',
        kana: 'きみのかせつはきょうみぶかいが、じっけんデータにそくしてけんしょうするひつようがある。りろんだけではふじゅうぶんだ。',
        vietnamese: 'Your hypothesis is interesting, but it needs to be verified in line with the experimental data. Theory alone is not enough.'
      },
      {
        speaker: 'Graduate student',
        japanese: 'はい。現在の条件下では、この仮説が成立し得ると考えておりますが、追加実験が必要でしょうか。',
        kana: 'はい。げんざいのじょうけんかでは、このかせつがせいりつしうるとかんがえておりますが、ついかじっけんがひつようでしょうか。',
        vietnamese: 'Yes. I believe this hypothesis could hold under the current conditions, but do you think additional experiments are needed?'
      },
      {
        speaker: 'Professor',
        japanese: '再現性のない結果は、科学的に有意義とは言い得ない。サンプル数を増やして再実験してくれ。',
        kana: 'さいげんせいのないけっかは、かがくてきにゆういぎとはいいえない。サンプルすうをふやしてさいじっけんしてくれ。',
        vietnamese: 'A result without reproducibility cannot be said to be scientifically meaningful. Increase the sample size and re-run the experiment.'
      },
      {
        speaker: 'Graduate student',
        japanese: '承知しました。先行研究に即して実験条件を見直し、検証の精度を高めます。',
        kana: 'しょうちしました。せんこうけんきゅうにそくしてじっけんじょうけんをみなおし、けんしょうのせいどをたかめます。',
        vietnamese: 'Understood. I will review the experimental conditions in line with prior research and increase the precision of the verification.'
      }
    ],
    culturalNote:
      'Japanese scientific writing style (科学論文のスタイル) demands absolute objectivity. Graduate students (院生 — insei) speak to professors with honorific language, but professors may use casual speech (タメ口) with students. The ～に即して structure is common in academic papers, emphasizing adherence to reality. In Japanese seminars, a professor\'s sharp questioning (鋭い質問) isn\'t meant to belittle but to sharpen the student\'s critical thinking.'
  },

  // ── 12. Medical Ethics (医療倫理) ──────────────────────────
  {
    id: 'n1-conv-12',
    title: 'Medical ethics',
    titleJp: '医療倫理',
    level: 'N1',
    situation: 'A doctor and a medical ethicist discuss patient autonomy at a medical conference',
    patterns: [
      {
        japanese: '〜を抜きにしては',
        kana: '〜をぬきにしては',
        vietnamese: 'Cannot be discussed without ~, unless we account for ~.',
        memoryTip:
          'Remember: ぬき = "removing, taking out" + にしては = "if we do that" → if this element is REMOVED, everything falls apart. Like pulling a pillar out from a house — indispensable.'
      },
      {
        japanese: '〜なくして（は）',
        kana: '〜なくして（は）',
        vietnamese: 'Without ~, it cannot ~.',
        memoryTip:
          'Remember: なくして = "without having" → an indispensable PRECONDITION. Stronger than ないと — carries the weight of a declaration: "WITHOUT X, THERE IS NO Y." Often used in formal speeches.'
      }
    ],
    dialogue: [
      {
        speaker: 'Doctor',
        japanese: 'インフォームド・コンセントを抜きにしては、いかなる治療も倫理的に正当化し得ません。',
        kana: 'インフォームド・コンセントをぬきにしては、いかなるちりょうもりんりてきにせいとうかしえません。',
        vietnamese: 'No treatment can be ethically justified without informed consent.'
      },
      {
        speaker: 'Ethicist',
        japanese: '同感です。患者の自己決定権なくしては、生命倫理の根幹が揺らぎます。',
        kana: 'どうかんです。かんじゃのじこけっていけんなくしては、せいめいりんりのこんかんがゆらぎます。',
        vietnamese: 'I agree. Without the patient\'s right to self-determination, the very foundation of bioethics is shaken.'
      },
      {
        speaker: 'Doctor',
        japanese: 'しかし、患者の意思確認が困難な緊急時には、医師の判断を抜きにしては命を救えない場面もあります。',
        kana: 'しかし、かんじゃのいしかくにんがこんなんなきんきゅうじには、いしのはんだんをぬきにしてはいのちをすくえないばめんもあります。',
        vietnamese: 'However, in emergencies where it\'s difficult to confirm the patient\'s wishes, there are also situations where a life cannot be saved without the doctor\'s judgment.'
      },
      {
        speaker: 'Ethicist',
        japanese: 'その通りです。信頼関係なくして、医療は成り立ちません。患者と医師の対話こそが、倫理の出発点に他なりません。',
        kana: 'そのとおりです。しんらいかんけいなくして、いりょうはなりたちません。かんじゃといしのたいわこそが、りんりのしゅっぱつてんにほかなりません。',
        vietnamese: 'Exactly. Without a relationship of trust, medicine cannot function. Dialogue between patient and doctor is precisely the starting point of ethics, and nothing else.'
      }
    ],
    culturalNote:
      'Japanese medical ethics has been influenced by East Asian tradition: doctors previously often made decisions on behalf of patients (医師のパターナリズム — medical paternalism). The concept of informed consent (インフォームド・コンセント) was imported from the West and has gradually become standard. The issue of 告知 (kokuchi — disclosing a serious diagnosis to a patient) remains sensitive — many Japanese families prefer to conceal it to "protect" the patient\'s spirit.'
  },

  // ── 13. Environmental Summit (環境サミット) ─────────────────
  {
    id: 'n1-conv-13',
    title: 'An environmental summit',
    titleJp: '環境サミット',
    level: 'N1',
    situation: 'National representatives discuss climate change and emissions-reduction commitments at an international conference',
    patterns: [
      {
        japanese: '〜を余儀なくさせる',
        kana: '〜をよぎなくさせる',
        vietnamese: 'To force (someone) to ~.',
        memoryTip:
          'Remember: the ACTIVE version of 余儀なくされる — not "being forced" but "forcing" someone else. A disaster forces humanity to act — the subject is an irresistible force.'
      },
      {
        japanese: '〜べからず',
        kana: '〜べからず',
        vietnamese: 'Must not ~, forbidden to ~ (classical imperative).',
        memoryTip:
          'Remember: べからず = べき + あらず (classical negation) → "MUST NOT DO." Sounds like an imperial decree or a prohibition carved into stone. Extremely strong and formal.'
      }
    ],
    dialogue: [
      {
        speaker: 'Japanese delegate',
        japanese: '温暖化の加速は、世界中の沿岸都市を移転を余儀なくさせかねません。CO2排出の削減は待ったなしです。',
        kana: 'おんだんかのかそくは、せかいじゅうのえんがんとしをいてんをよぎなくさせかねません。シーオーツーはいしゅつのさくげんはまったなしです。',
        vietnamese: 'The acceleration of global warming could force coastal cities around the world to relocate. There is no time to wait on reducing CO2 emissions.'
      },
      {
        speaker: 'European delegate',
        japanese: '次世代に対する責任を忘れるべからず。対策の遅れは、取り返しのつかない結果を招きかねません。',
        kana: 'じせだいにたいするせきにんをわすれるべからず。たいさくのおくれは、とりかえしのつかないけっかをまねきかねません。',
        vietnamese: 'We must not forget our responsibility to the next generation. A delayed response could lead to irreversible consequences.'
      },
      {
        speaker: 'Japanese delegate',
        japanese: '先進国と途上国の協力を抜きにしては、実効的な対策は実現し得ません。',
        kana: 'せんしんこくととじょうこくのきょうりょくをぬきにしては、じっこうてきなたいさくはじつげんしえません。',
        vietnamese: 'Effective countermeasures cannot be realized without cooperation between developed and developing nations.'
      },
      {
        speaker: 'European delegate',
        japanese: '地球の未来は、今日の我々の決断いかんにかかっています。科学的知見に即した行動を取るべきです。',
        kana: 'ちきゅうのみらいは、こんにちのわれわれのけつだんいかんにかかっています。かがくてきちけんにそくしたこうどうをとるべきです。',
        vietnamese: 'The future of the planet depends on the decisions we make today. We must act in accordance with scientific knowledge.'
      }
    ],
    culturalNote:
      'Japan is where the Kyoto Protocol (京都議定書, 1997) was signed — the first internationally binding agreement on reducing greenhouse gas emissions. Japan has committed to carbon neutrality by 2050. In environmental diplomacy, べからず is one of the strongest moral imperatives — carrying the resonance of a sacred, inviolable oath.'
  },

  // ── 14. Cultural Identity (文化的アイデンティティ) ──────────
  {
    id: 'n1-conv-14',
    title: 'Cultural identity',
    titleJp: '文化的アイデンティティ',
    level: 'N1',
    situation: 'An anthropologist and a novelist discuss the conflict between tradition and modernity in Japanese identity',
    patterns: [
      {
        japanese: '〜からこそ',
        kana: '〜からこそ',
        vietnamese: 'Precisely because ~.',
        memoryTip:
          'Remember: から (because) + こそ (precisely/emphatically) → double emphasis on the cause. Not merely "because A, B" but "PRECISELY because A, B occurs." Used to spotlight the reason.'
      },
      {
        japanese: '〜つつある',
        kana: '〜つつある',
        vietnamese: 'Is gradually ~, is in the process of ~.',
        memoryTip:
          'Remember: つつ = "little by little" + ある = "exists" → a process unfolding SLOWLY but SURELY. Like sand falling in an hourglass — unstoppable. Used for major social changes.'
      }
    ],
    dialogue: [
      {
        speaker: 'Anthropologist',
        japanese: '日本の伝統文化は、グローバル化の波の中で変容しつつあります。しかし、それは必ずしも喪失ではありません。',
        kana: 'にほんのでんとうぶんかは、グローバルかのなみのなかでへんようしつつあります。しかし、それはかならずしもそうしつではありません。',
        vietnamese: 'Japanese traditional culture is gradually transforming amid the waves of globalization. However, that is not necessarily a loss.'
      },
      {
        speaker: 'Novelist',
        japanese: '伝統を深く知るからこそ、現代との融合が可能になるのだと思います。根のない木は倒れますから。',
        kana: 'でんとうをふかくしるからこそ、げんだいとのゆうごうがかのうになるのだとおもいます。ねのないきはたおれますから。',
        vietnamese: 'I think it\'s precisely because one deeply understands tradition that fusion with the modern becomes possible. A tree without roots falls, after all.'
      },
      {
        speaker: 'Anthropologist',
        japanese: '若者の間で、伝統芸能への関心が薄れつつあるのは事実です。しかし、新しい形で再生しつつある面もあります。',
        kana: 'わかもののあいだで、でんとうげいのうへのかんしんがうすれつつあるのはじじつです。しかし、あたらしいかたちでさいせいしつつあるめんもあります。',
        vietnamese: 'It is true that interest in traditional performing arts is gradually fading among young people. But there is also a side where it is being revived in new forms.'
      },
      {
        speaker: 'Novelist',
        japanese: '変化を恐れるからこそ、本質を見失う。融合の中にこそ、文化の生命力があるのではないでしょうか。',
        kana: 'へんかをおそれるからこそ、ほんしつをみうしなう。ゆうごうのなかにこそ、ぶんかのせいめいりょくがあるのではないでしょうか。',
        vietnamese: 'It is precisely because we fear change that we lose sight of the essence. Isn\'t the vitality of culture found precisely within fusion?'
      },
      {
        speaker: 'Anthropologist',
        japanese: '和洋折衷という概念自体が、日本文化の柔軟性を物語っていますね。',
        kana: 'わようせっちゅうというがいねんじたいが、にほんぶんかのじゅうなんせいをものがたっていますね。',
        vietnamese: 'The very concept of "East-West fusion" itself tells the story of the flexibility of Japanese culture.'
      }
    ],
    culturalNote:
      'Wayou-secchuu (和洋折衷 — a fusion of Japanese and Western elements) is a distinctive cultural philosophy: Japan doesn\'t discard the old when adopting the new, but blends the two. For example, a Japanese house may have a traditional washitsu (和室) room alongside a Western-style room (洋室). Kimono exist alongside Western fashion. The ～つつある structure describes an ongoing process of change — fitting for discussing a cultural transformation with no clear endpoint.'
  },

  // ── 15. Media Criticism (メディア批評) ─────────────────────
  {
    id: 'n1-conv-15',
    title: 'Media criticism',
    titleJp: 'メディア批評',
    level: 'N1',
    situation: 'A media studies professor and a veteran journalist discuss the role and responsibility of the media in modern society',
    patterns: [
      {
        japanese: '〜であれ〜であれ',
        kana: '〜であれ〜であれ',
        vietnamese: 'Whether ~ or ~, regardless of ~ or ~.',
        memoryTip:
          'Remember: であれ = "whether it be" (a classical imperative form of である) → lists two opposing cases and says "either way, the same applies." Like an open hand embracing everyone — excluding no one.'
      },
      {
        japanese: '〜まじき',
        kana: '〜まじき',
        vietnamese: 'Should not ~, unbecoming of ~ (strong criticism).',
        memoryTip:
          'Remember: まじき is a classical negation of べき → "SHOULD NOT BE DONE, UNACCEPTABLE." Stronger than べきではない — carries a stern moral judgment: "That is unbecoming behavior!"'
      }
    ],
    dialogue: [
      {
        speaker: 'Professor',
        japanese: 'テレビであれネットであれ、報道の公平性は守られるべきです。偏向報道は許されまじき行為です。',
        kana: 'テレビであれネットであれ、ほうどうのこうへいせいはまもられるべきです。へんこうほうどうはゆるされまじきこういです。',
        vietnamese: 'Whether it\'s TV or the internet, fairness in reporting must be upheld. Biased reporting is an unacceptable act.'
      },
      {
        speaker: 'Journalist',
        japanese: 'しかし、完全な客観性というものは存在し得るのでしょうか。ファクトチェックを徹底するにしても、限界があります。',
        kana: 'しかし、かんぜんなきゃっかんせいというものはそんざいしうるのでしょうか。ファクトチェックをてっていするにしても、げんかいがあります。',
        vietnamese: 'But can perfect objectivity even exist? Even with thorough fact-checking, there are limits.'
      },
      {
        speaker: 'Professor',
        japanese: 'だからこそ、報道機関であれ個人メディアであれ、透明性の確保が不可欠なのです。',
        kana: 'だからこそ、ほうどうきかんであれこじんメディアであれ、とうめいせいのかくほがふかけつなのです。',
        vietnamese: 'That\'s exactly why, whether it\'s a news organization or independent media, ensuring transparency is indispensable.'
      },
      {
        speaker: 'Journalist',
        japanese: 'ジャーナリストにあるまじき行為とは何か、常に自問自答しています。事実に即した報道を心がけるしかありません。',
        kana: 'ジャーナリストにあるまじきこういとはなにか、つねにじもんじとうしています。じじつにそくしたほうどうをこころがけるしかありません。',
        vietnamese: 'I constantly ask myself what conduct is unbecoming of a journalist. All I can do is strive to report in line with the facts.'
      }
    ],
    culturalNote:
      'Japanese media has a distinctive "press club" system (記者クラブ — kisha kurabu): only reporters belonging to major organizations can attend government press conferences, drawing criticism for a lack of transparency. The concept of 報道の自由 (freedom of the press) is a perennial hot topic. まじき is a strong classical word — when used in media criticism, it carries the moral weight of a verdict on professional conduct.'
  },

  // ── 16. Historical Analysis (歴史分析) ─────────────────────
  {
    id: 'n1-conv-16',
    title: 'Historical analysis',
    titleJp: '歴史分析',
    level: 'N1',
    situation: 'Two historians discuss the process of reform and social change in Japan at an academic symposium',
    patterns: [
      {
        japanese: '〜を経て',
        kana: '〜をへて',
        vietnamese: 'Having gone through ~, via the process of ~.',
        memoryTip:
          'Remember: へて = "passing through" → a LONG journey through many stages. Like a river flowing through many lands before reaching the sea. History = a flow through many events.'
      },
      {
        japanese: '〜たるもの',
        kana: '〜たるもの',
        vietnamese: 'As one who is ~, anyone claiming the title of ~.',
        memoryTip:
          'Remember: たるもの = "one who is worthy of being" → sets a standard for someone based on their role/status. "As a samurai, one must..." — defines duty according to one\'s position.'
      }
    ],
    dialogue: [
      {
        speaker: 'Historian A',
        japanese: '明治維新を経て、日本は封建社会から近代国家へと劇的な変貌を遂げました。その変遷は世界史に類を見ません。',
        kana: 'めいじいしんをへて、にほんはほうけんしゃかいからきんだいこっかへとげきてきなへんぼうをとげました。そのへんせんはせかいしにるいをみません。',
        vietnamese: 'Having gone through the Meiji Restoration, Japan underwent a dramatic transformation from a feudal society to a modern nation. That transformation has no parallel in world history.'
      },
      {
        speaker: 'Historian B',
        japanese: '議員たるもの、歴史の教訓を踏まえた上で改革を推進すべきだったのですが、実際にはそうならなかった。',
        kana: 'ぎいんたるもの、れきしのきょうくんをふまえたうえでかいかくをすいしんすべきだったのですが、じっさいにはそうならなかった。',
        vietnamese: 'As legislators, they should have pushed reform based on the lessons of history, but in reality, that\'s not what happened.'
      },
      {
        speaker: 'Historian A',
        japanese: '幾多の試練を経て獲得した民主主義を、我々は軽視すべきではありません。',
        kana: 'いくたのしれんをへてかくとくしたみんしゅしゅぎを、われわれはけいしすべきではありません。',
        vietnamese: 'We should not take lightly the democracy we obtained after going through so many trials.'
      },
      {
        speaker: 'Historian B',
        japanese: '歴史家たるもの、過去を美化することなく、事実に即して冷静に分析する責務があります。',
        kana: 'れきしかたるもの、かこをびかすることなく、じじつにそくしてれいせいにぶんせきするせきむがあります。',
        vietnamese: 'As historians, we have a duty to analyze calmly, in line with the facts, without romanticizing the past.'
      }
    ],
    culturalNote:
      'Japanese history is divided into eras named after imperial reigns (年号 — nengou): Meiji (明治, 1868–1912), Taisho (大正), Showa (昭和), Heisei (平成), Reiwa (令和). The Meiji Restoration (明治維新) was a comprehensive reform — abolishing feudalism and modernizing the military and education in just a few decades. The ～たるもの structure derives from Confucian ethics and the spirit of bushido (武士道) — defining duty based on social status.'
  },

  // ── 17. Diplomatic Negotiations (外交交渉) ─────────────────
  {
    id: 'n1-conv-17',
    title: 'Diplomatic negotiations',
    titleJp: '外交交渉',
    level: 'N1',
    situation: 'Ambassadors from two countries negotiate an international treaty and bilateral cooperation at an official diplomatic meeting',
    patterns: [
      {
        japanese: '〜の如く',
        kana: '〜のごとく',
        vietnamese: 'Like ~, just as ~ (classical/literary).',
        memoryTip:
          'Remember: ごとく is an extremely formal, classical version of ように. It sounds like reading a proclamation: "as the sun shines, so shall this treaty..." — used only in diplomatic documents, national speeches, and classical literature.'
      },
      {
        japanese: '〜に鑑みて',
        kana: '〜にかんがみて',
        vietnamese: 'In light of ~, in view of ~.',
        memoryTip:
          'Remember: かんがみて = "reflecting in a mirror (鑑)" → using the past/current situation as a MIRROR to make a decision. A mirror that reflects lessons — looking into the mirror of history before acting.'
      }
    ],
    dialogue: [
      {
        speaker: 'Japanese ambassador',
        japanese: '両国の歴史的な友好関係に鑑みて、新たな条約の締結を提案させていただきたいと存じます。',
        kana: 'りょうこくのれきしてきなゆうこうかんけいにかんがみて、あらたなじょうやくのていけつをていあんさせていただきたいとぞんじます。',
        vietnamese: 'In light of the historic friendly relationship between our two nations, I would like to propose the conclusion of a new treaty.'
      },
      {
        speaker: 'Foreign ambassador',
        japanese: 'ありがたきお言葉です。両国が水の如く自然に協力し合える関係を築きたいと願っております。',
        kana: 'ありがたきおことばです。りょうこくがみずのごとくしぜんにきょうりょくしあえるかんけいをきずきたいとねがっております。',
        vietnamese: 'A most gracious word. We hope to build a relationship in which our two nations can cooperate as naturally as flowing water.'
      },
      {
        speaker: 'Japanese ambassador',
        japanese: '国際情勢の変化に鑑み、安全保障面での合意も協議に含めるべきかと存じます。',
        kana: 'こくさいじょうせいのへんかにかんがみ、あんぜんほしょうめんでのごういもきょうぎにふくめるべきかとぞんじます。',
        vietnamese: 'In light of the changing international situation, I believe we should also include security-related agreements in the discussion.'
      },
      {
        speaker: 'Foreign ambassador',
        japanese: '信頼の如く固く、柔軟性の如くしなやかな協定を目指しましょう。双方の利益に適う合意を期待しております。',
        kana: 'しんらいのごとくかたく、じゅうなんせいのごとくしなやかなきょうていをめざしましょう。そうほうのりえきにかなうごういをきたいしております。',
        vietnamese: 'Let us aim for an agreement as firm as trust and as supple as flexibility. We look forward to an accord that serves the interests of both sides.'
      }
    ],
    culturalNote:
      'Japanese diplomacy expresses "soft power" (ソフトパワー) through refined language. The ～の如く (gotoku) structure derives from classical Chinese-influenced writing, lending a solemn tone to diplomatic documents. 鑑みる is used when invoking historical precedent — evoking the image of an ancient bronze mirror (銅鏡), a symbol of wisdom. In negotiations, the Japanese prioritize nemawashi (根回し — behind-the-scenes groundwork) before formal meetings.'
  },

  // ── 18. Corporate Governance (企業統治) ─────────────────────
  {
    id: 'n1-conv-18',
    title: 'Corporate governance',
    titleJp: '企業統治',
    level: 'N1',
    situation: 'Shareholders and the board of directors discuss governance transparency at an annual shareholders meeting',
    patterns: [
      {
        japanese: '〜の至りです',
        kana: '〜のいたりです',
        vietnamese: 'Utterly ~ (the highest degree of feeling).',
        memoryTip:
          'Remember: いたり = "the utmost extreme" → an emotion that has climbed to the PEAK of a mountain, unable to go higher. 光栄の至り = the utmost honor. A humble expression that carries intense feeling.'
      },
      {
        japanese: '〜に則って',
        kana: '〜にのっとって',
        vietnamese: 'In accordance with ~, following the rules of ~.',
        memoryTip:
          'Remember: のっとって = "following in the footsteps of" → walking in the exact footprints of a rule/law. Unlike に基づいて (based on a foundation), のっとって emphasizes STRICT COMPLIANCE with each provision.'
      }
    ],
    dialogue: [
      {
        speaker: 'Shareholder',
        japanese: '取締役会の皆様、本日の総会にお招きいただき、光栄の至りでございます。経営の透明性についてお伺いしたく存じます。',
        kana: 'とりしまりやくかいのみなさま、ほんじつのそうかいにおまねきいただき、こうえいのいたりでございます。けいえいのとうめいせいについておうかがいしたくぞんじます。',
        vietnamese: 'Esteemed members of the board, it is the utmost honor to be invited to today\'s general meeting. I would like to ask about the transparency of management.'
      },
      {
        speaker: 'Director',
        japanese: 'ご質問ありがとうございます。コーポレートガバナンス・コードに則って、情報開示を徹底してまいります。',
        kana: 'ごしつもんありがとうございます。コーポレートガバナンス・コードにのっとって、じょうほうかいじをてっていしてまいります。',
        vietnamese: 'Thank you for the question. We will continue to thoroughly disclose information in accordance with the Corporate Governance Code.'
      },
      {
        speaker: 'Shareholder',
        japanese: '株主の利益を最優先に、法令に則った経営をお願いいたします。信頼なくして、企業の持続的成長はあり得ません。',
        kana: 'かぶぬしのりえきをさいゆうせんに、ほうれいにのっとったけいえいをおねがいいたします。しんらいなくして、きぎょうのじぞくてきせいちょうはありえません。',
        vietnamese: 'Please prioritize shareholder interests and manage the company in accordance with the law. Without trust, sustainable corporate growth is impossible.'
      },
      {
        speaker: 'Director',
        japanese: '重く受け止めております。取締役たるもの、株主の皆様への説明責任を果たすのは当然の義務でございます。',
        kana: 'おもくうけとめております。とりしまりやくたるもの、かぶぬしのみなさまへのせつめいせきにんをはたすのはとうぜんのぎむでございます。',
        vietnamese: 'We take this very seriously. As board members, fulfilling our accountability to shareholders is a natural obligation.'
      }
    ],
    culturalNote:
      'Japanese corporate governance (コーポレートガバナンス) changed dramatically after the Olympus (2011) and Toshiba (2015) accounting scandals. Japan enacted the Corporate Governance Code (コーポレートガバナンス・コード) in 2015, requiring independent outside directors (社外取締役). Shareholder meetings (株主総会) in Japan are traditionally very formal, but activist shareholders (アクティビスト株主) have recently become more vocal, asking pointed questions about governance.'
  },

  // ── 19. Educational Reform (教育改革) ──────────────────────
  {
    id: 'n1-conv-19',
    title: 'Educational reform',
    titleJp: '教育改革',
    level: 'N1',
    situation: 'An education expert and a school principal discuss the exam system and university admission rates at an education forum',
    patterns: [
      {
        japanese: '〜ないまでも',
        kana: '〜ないまでも',
        vietnamese: 'Even if not to the extent of ~, at least ~.',
        memoryTip:
          'Remember: ないまでも = "even if not to that extent" + も (also) → setting a LOWER expectation while still demanding a MINIMUM. "Even if we can\'t fly, we should at least stand on the ground" — a negotiated concession.'
      },
      {
        japanese: '〜に至っては',
        kana: '〜にいたっては',
        vietnamese: 'When it comes to ~ (an extreme case, usually worse).',
        memoryTip:
          'Remember: にいたっては = "arriving all the way at" → moving to the MOST EXTREME case to illustrate a point. Usually used for negative examples: "When it comes to city X, it\'s even worse..."'
      }
    ],
    dialogue: [
      {
        speaker: 'Education expert',
        japanese: '教育改革は急務です。全面的な見直しとまではいかないまでも、進学率の格差是正は最低限必要です。',
        kana: 'きょういくかいかくはきゅうむです。ぜんめんてきなみなおしとまではいかないまでも、しんがくりつのかくさぜせいはさいていげんひつようです。',
        vietnamese: 'Education reform is urgent. Even if it doesn\'t amount to a complete overhaul, correcting disparities in university admission rates is the bare minimum needed.'
      },
      {
        speaker: 'Principal',
        japanese: '都市部に至っては塾通いが当然視される一方、地方では教育資源が著しく不足しています。',
        kana: 'としぶにいたってはじゅくがよいがとうぜんしされるいっぽう、ちほうではきょういくしげんがいちじるしくふそくしています。',
        vietnamese: 'When it comes to urban areas, attending cram school is taken for granted, while in rural areas, educational resources are severely lacking.'
      },
      {
        speaker: 'Education expert',
        japanese: '受験戦争を完全になくすことはできないまでも、多様な評価基準を導入すべきです。',
        kana: 'じゅけんせんそうをかんぜんになくすことはできないまでも、たようなひょうかきじゅんをどうにゅうすべきです。',
        vietnamese: 'Even if the exam war can\'t be completely eliminated, diverse evaluation criteria should at least be introduced.'
      },
      {
        speaker: 'Principal',
        japanese: '不登校の問題に至っては、もはや個人の問題ではなく、社会構造の問題として捉えるべきです。',
        kana: 'ふとうこうのもんだいにいたっては、もはやこじんのもんだいではなく、しゃかいこうぞうのもんだいとしてとらえるべきです。',
        vietnamese: 'When it comes to the issue of school refusal, it should no longer be seen as an individual problem, but as a structural social problem.'
      }
    ],
    culturalNote:
      'Japan\'s education system is known for its fierce "exam war" (受験戦争 — juken sensou). Students attend cram schools (塾 — juku) starting from elementary school. School refusal (不登校 — futoukou) is a serious social issue — roughly 300,000 Japanese students don\'t attend school each year. Educational reform (教育改革) is a perennial hot topic, with ongoing debate between "relaxed education" (ゆとり教育) and traditional intensive schooling.'
  },

  // ── 20. Technology Ethics (技術倫理) ────────────────────────
  {
    id: 'n1-conv-20',
    title: 'Technology ethics',
    titleJp: '技術倫理',
    level: 'N1',
    situation: 'An AI engineer and a philosopher discuss the ethical boundaries in developing artificial intelligence and privacy',
    patterns: [
      {
        japanese: '〜んがため（に）',
        kana: '〜んがため（に）',
        vietnamese: 'In order to ~, for the sake of wanting ~ (strong purpose, classical).',
        memoryTip:
          'Remember: ん = classical volitional む + がため = "for the purpose of" → an intense determination to ACHIEVE the goal. Sounds like a knight\'s oath: "To protect the world, I shall..." — used only in formal writing.'
      },
      {
        japanese: '〜もさることながら',
        kana: '〜もさることながら',
        vietnamese: 'Not only ~ but also ~, ~ goes without saying, but ~ too.',
        memoryTip:
          'Remember: さることながら = "that is already a given" → acknowledges A is important, then shifts attention to B, which is EVEN more important. Like saying "gold is precious, but diamonds are more so."'
      }
    ],
    dialogue: [
      {
        speaker: 'Engineer',
        japanese: 'AI倫理の確立んがために、技術者と哲学者が協力する必要があります。',
        kana: 'エーアイりんりのかくりつんがために、ぎじゅつしゃとてつがくしゃがきょうりょくするひつようがあります。',
        vietnamese: 'In order to establish AI ethics, engineers and philosophers need to cooperate.'
      },
      {
        speaker: 'Philosopher',
        japanese: '技術の進歩もさることながら、プライバシーの保護こそが最も議論すべき課題です。',
        kana: 'ぎじゅつのしんぽもさることながら、プライバシーのほごこそがもっともぎろんすべきかだいです。',
        vietnamese: 'Technological progress goes without saying, but protecting privacy is precisely the issue most in need of discussion.'
      },
      {
        speaker: 'Engineer',
        japanese: '監視技術の悪用を防がんがために、法的規制の整備が急がれます。しかし、技術の発展を阻害してはなりません。',
        kana: 'かんしぎじゅつのあくようをふせがんがために、ほうてききせいのせいびがいそがれます。しかし、ぎじゅつのはってんをそがいしてはなりません。',
        vietnamese: 'In order to prevent misuse of surveillance technology, legal regulations urgently need to be developed. However, technological progress must not be hindered.'
      },
      {
        speaker: 'Philosopher',
        japanese: '効率性もさることながら、人間の尊厳を守ることが技術開発の大前提であるべきです。便利さの代償に自由を失ってはなりません。',
        kana: 'こうりつせいもさることながら、にんげんのそんげんをまもることがぎじゅつかいはつのだいぜんていであるべきです。べんりさのだいしょうにじゆうをうしなってはなりません。',
        vietnamese: 'Efficiency goes without saying, but protecting human dignity should be the great premise of technological development. Freedom must not be lost as the price of convenience.'
      }
    ],
    culturalNote:
      'In 2019, Japan enacted the "Social Principles of Human-Centric AI" (人間中心のAI社会原則), emphasizing harmony (共生 — kyousei) between AI and humans. Japanese society both champions technological innovation and worries about privacy — reflected in its Personal Information Protection Act (個人情報保護法). The ～んがため structure is an extremely formal classical construction — when engineers use it in an ethical context, it elevates a technical discussion into a moral commitment.'
  },

  // ── 21. Aging Society (高齢化社会) ──────────────────────────
  {
    id: 'n1-conv-21',
    title: 'An aging society',
    titleJp: '高齢化社会',
    level: 'N1',
    situation: 'A social welfare expert and a politician discuss the elderly care system and social insurance',
    patterns: [
      {
        japanese: '〜なしには〜ない',
        kana: '〜なしには〜ない',
        vietnamese: 'Without ~, ~ is not possible.',
        memoryTip:
          'Remember: なしには = "without" + ない = "cannot" → a double negative forming an absolute conditional clause. Like saying "without oxygen, there is no life" — a non-negotiable precondition.'
      },
      {
        japanese: '〜ともあろう（ものが）',
        kana: '〜ともあろう（ものが）',
        vietnamese: 'For someone in the position of ~ to ~ (criticism/shock).',
        memoryTip:
          'Remember: ともあろう = "being of that standing" → someone who HOLDS a high position, yet does something unbecoming. Carries deep disappointment: "He is a minister, and yet he did THAT?"'
      }
    ],
    dialogue: [
      {
        speaker: 'Welfare expert',
        japanese: '介護人材の確保なしには、高齢化社会を支えることはできません。年金制度の持続性も危ぶまれています。',
        kana: 'かいごじんざいのかくほなしには、こうれいかしゃかいをささえることはできません。ねんきんせいどのじぞくせいもあやぶまれています。',
        vietnamese: 'Without securing caregiving personnel, we cannot support an aging society. The sustainability of the pension system is also at risk.'
      },
      {
        speaker: 'Politician',
        japanese: '社会保障の充実なしには、国民の安心は得られません。しかし、財源の問題が立ちはだかっています。',
        kana: 'しゃかいほしょうのじゅうじつなしには、こくみんのあんしんはえられません。しかし、ざいげんのもんだいがたちはだかっています。',
        vietnamese: 'Without strengthening social security, we cannot achieve peace of mind for the public. However, the issue of funding stands in the way.'
      },
      {
        speaker: 'Welfare expert',
        japanese: '先進国ともあろう日本が、介護離職という問題を放置しているのは遺憾と言わざるを得ません。',
        kana: 'せんしんこくともあろうにほんが、かいごりしょくというもんだいをほうちしているのはいかんといわざるをえません。',
        vietnamese: 'That Japan, a developed nation, is leaving the problem of care-related job loss unaddressed — I must say that is regrettable.'
      },
      {
        speaker: 'Politician',
        japanese: '世代間の支え合いなしには、この国の未来はありません。政治家ともあろうものが、この問題から目を背けてはならないのです。',
        kana: 'せだいかんのささえあいなしには、このくにのみらいはありません。せいじかともあろうものが、このもんだいからめをそむけてはならないのです。',
        vietnamese: 'Without mutual support across generations, this country has no future. Someone who calls themself a politician must not turn away from this issue.'
      }
    ],
    culturalNote:
      'Japan has the highest proportion of elderly people (65+) in the world — over 29% of the population. The long-term care insurance system (介護保険制度) was introduced in 2000. 介護離職 (kaigo rishoku — leaving one\'s job to care for a family member) affects roughly 100,000 people per year. The concept of 共助 (kyoujo — mutual support) is a pillar of Japanese social security, reflecting traditional community spirit.'
  },

  // ── 22. Gender Equality (男女平等) ──────────────────────────
  {
    id: 'n1-conv-22',
    title: 'Gender equality',
    titleJp: '男女平等',
    level: 'N1',
    situation: 'A gender studies researcher and a female entrepreneur discuss gender equality at a women\'s forum',
    patterns: [
      {
        japanese: '〜とはいえ',
        kana: '〜とはいえ',
        vietnamese: 'That said, ~ / although ~, [but].',
        memoryTip:
          'Remember: とはいえ = "though one might say" → ACKNOWLEDGES a fact, then PIVOTS to a contrasting reality. Like a rhetorical concession: nodding before shaking one\'s head.'
      },
      {
        japanese: '〜からといって',
        kana: '〜からといって',
        vietnamese: 'Just because ~ doesn\'t mean ~, even though ~.',
        memoryTip:
          'Remember: からといって = "saying that it is because of that" → refutes a faulty inference. "Because A, therefore B"? NOT SO! A powerful tool for debunking flawed logic — very effective in equality debates.'
      }
    ],
    dialogue: [
      {
        speaker: 'Researcher',
        japanese: '男女共同参画社会基本法が制定されたとはいえ、実質的な男女平等の実現にはまだ程遠い現状です。',
        kana: 'だんじょきょうどうさんかくしゃかいきほんほうがせいていされたとはいえ、じっしつてきなだんじょびょうどうのじつげんにはまだほどとおいげんじょうです。',
        vietnamese: 'The Basic Act for a Gender-Equal Society may have been enacted, but the reality is that substantive gender equality is still far from being achieved.'
      },
      {
        speaker: 'Female entrepreneur',
        japanese: '女性だからといって、経営能力が劣るという偏見は、もはや通用しない時代です。',
        kana: 'じょせいだからといって、けいえいのうりょくがおとるというへんけんは、もはやつうようしないじだいです。',
        vietnamese: 'The prejudice that women have inferior management ability just because they are women — that\'s an idea whose time has passed.'
      },
      {
        speaker: 'Researcher',
        japanese: '制度が整ったとはいえ、「女性史」の観点からみれば、意識の変革こそが最大の課題です。',
        kana: 'せいどがととのったとはいえ、「じょせいし」のかんてんからみれば、いしきのへんかくこそがさいだいのかだいです。',
        vietnamese: 'The system may be in place, but from the perspective of "women\'s history," changing mindsets is precisely the biggest challenge.'
      },
      {
        speaker: 'Female entrepreneur',
        japanese: '数が少ないからといって、声を上げることを諦めてはなりません。一人の行動が社会を変え得るのです。',
        kana: 'かずがすくないからといって、こえをあげることをあきらめてはなりません。ひとりのこうどうがしゃかいをかええうるのです。',
        vietnamese: 'Just because our numbers are few doesn\'t mean we should give up speaking out. One person\'s action can change society.'
      }
    ],
    culturalNote:
      'Japan ranks low on the Gender Gap Index among developed nations. A gender-equal participatory society (男女共同参画社会) is a national goal, but many barriers remain: the "glass ceiling" (ガラスの天井), and expectations that women will quit their jobs after childbirth (寿退社 — kotobuki taisha). Recently, the #MeToo movement and the Act on Promotion of Women\'s Active Engagement (女性活躍推進法) are gradually driving change.'
  },

  // ── 23. Disaster Response (災害対応) ────────────────────────
  {
    id: 'n1-conv-23',
    title: 'Disaster response',
    titleJp: '災害対応',
    level: 'N1',
    situation: 'A disaster prevention expert and a mayor discuss lessons from a major earthquake and recovery planning',
    patterns: [
      {
        japanese: '〜極まりない',
        kana: '〜きわまりない',
        vietnamese: 'Extremely ~, ~ to the utmost degree.',
        memoryTip:
          'Remember: きわまりない = "has no limit" → a feeling/state that has exceeded EVERY BOUND. Used for both positive (光栄極まりない) and negative (危険極まりない) extremes. Much stronger than とても.'
      },
      {
        japanese: '〜を皮切りに',
        kana: '〜をかわきりに',
        vietnamese: 'Starting with ~, taking ~ as the starting point.',
        memoryTip:
          'Remember: かわきり = "cutting the first layer of skin" (originally from Kabuki theater — the first actor to open the show) → the FIRST event that kicks off a chain of subsequent events. A domino effect starting with the first tile.'
      }
    ],
    dialogue: [
      {
        speaker: 'Disaster prevention expert',
        japanese: '東日本大震災を皮切りに、日本の防災意識は大きく変わりました。しかし、備えはまだ不十分極まりない状態です。',
        kana: 'ひがしにほんだいしんさいをかわきりに、にほんのぼうさいいしきはおおきくかわりました。しかし、そなえはまだふじゅうぶんきわまりないじょうたいです。',
        vietnamese: 'Starting with the Great East Japan Earthquake, Japan\'s disaster preparedness awareness changed dramatically. However, preparations remain extremely insufficient.'
      },
      {
        speaker: 'Mayor',
        japanese: '避難計画の見直しを皮切りに、地域全体の復旧体制を再構築しなければなりません。',
        kana: 'ひなんけいかくのみなおしをかわきりに、ちいきぜんたいのふっきゅうたいせいをさいこうちくしなければなりません。',
        vietnamese: 'Starting with a review of the evacuation plan, we must rebuild the entire region\'s recovery system.'
      },
      {
        speaker: 'Disaster prevention expert',
        japanese: '住民の命を預かる立場として、準備不足は無責任極まりないと言わざるを得ません。',
        kana: 'じゅうみんのいのちをあずかるたちばとして、じゅんびぶそくはむせきにんきわまりないといわざるをえません。',
        vietnamese: 'As those entrusted with residents\' lives, I must say that inadequate preparation is utterly irresponsible.'
      },
      {
        speaker: 'Mayor',
        japanese: 'おっしゃる通りです。この教訓を皮切りに、「自助・共助・公助」の精神で、災害に強い街づくりを進めてまいります。',
        kana: 'おっしゃるとおりです。このきょうくんをかわきりに、「じじょ・きょうじょ・こうじょ」のせいしんで、さいがいにつよいまちづくりをすすめてまいります。',
        vietnamese: 'You\'re absolutely right. Starting with this lesson, we will move forward with building a disaster-resilient city, guided by the spirit of "self-help, mutual help, public help."'
      }
    ],
    culturalNote:
      'Japan is a disaster-preparedness powerhouse guided by the philosophy of 自助・共助・公助 (jijo-kyojo-koujo — self-help, mutual help, public help). The 2011 Great East Japan Earthquake (東日本大震災), with its tsunami and the Fukushima nuclear disaster, was an unprecedented compound catastrophe. The concept of 復興 (fukkou — recovery) means not just physical reconstruction but also restoring community spirit — captured in the slogan 頑張ろう日本 (ganbarou Nippon — "let\'s do our best, Japan").'
  },

  // ── 24. Immigration Policy (移民政策) ──────────────────────
  {
    id: 'n1-conv-24',
    title: 'Immigration policy',
    titleJp: '移民政策',
    level: 'N1',
    situation: 'A sociologist and a government official discuss multicultural policy and the acceptance of foreign workers',
    patterns: [
      {
        japanese: '〜にせよ〜にせよ',
        kana: '〜にせよ〜にせよ',
        vietnamese: 'Whether ~ or ~, regardless of ~ or ~.',
        memoryTip:
          'Remember: にせよ = "even granting that" (concession) × 2 → lists two opposing options, then says "either way..." A more formal version of でも〜でも. Used in policy discussions and formal argument.'
      },
      {
        japanese: '〜ならでは',
        kana: '〜ならでは',
        vietnamese: 'Unique to ~, only possible because of ~.',
        memoryTip:
          'Remember: ならでは = "if not that, then not" → something that exists ONLY at X, nowhere else. "The flavor ならでは of Kyoto" = something only Kyoto has. Praises uniqueness.'
      }
    ],
    dialogue: [
      {
        speaker: 'Sociologist',
        japanese: '移民を受け入れるにせよ受け入れないにせよ、多文化共生の議論は避けて通れません。',
        kana: 'いみんをうけいれるにせようけいれないにせよ、たぶんかきょうせいのぎろんはさけてとおれません。',
        vietnamese: 'Whether we accept immigration or not, the discussion of multicultural coexistence cannot be avoided.'
      },
      {
        speaker: 'Government official',
        japanese: '労働力不足の解消にせよ文化的多様性の促進にせよ、段階的なアプローチが不可欠です。',
        kana: 'ろうどうりょくぶそくのかいしょうにせよぶんかてきたようせいのそくしんにせよ、だんかいてきなアプローチがふかけつです。',
        vietnamese: 'Whether it\'s resolving the labor shortage or promoting cultural diversity, a phased approach is essential.'
      },
      {
        speaker: 'Sociologist',
        japanese: '日本ならではの「おもてなし」の精神を、多文化共生の基盤にできるのではないでしょうか。',
        kana: 'にほんならではの「おもてなし」のせいしんを、たぶんかきょうせいのきばんにできるのではないでしょうか。',
        vietnamese: 'Couldn\'t the spirit of "omotenashi" — hospitality unique to Japan — become the foundation for multicultural coexistence?'
      },
      {
        speaker: 'Government official',
        japanese: '技能実習制度の問題にせよ、在留資格の複雑さにせよ、制度設計そのものを見直す時期に来ています。',
        kana: 'ぎのうじっしゅうせいどのもんだいにせよ、ざいりゅうしかくのふくざつさにせよ、せいどせっけいそのものをみなおすじきにきています。',
        vietnamese: 'Whether it\'s the problems with the Technical Intern Training Program or the complexity of residence status, the time has come to reassess the very design of the system.'
      },
      {
        speaker: 'Sociologist',
        japanese: '異なる文化ならではの視点こそが、社会の活力を生み出す源泉に他なりません。',
        kana: 'ことなるぶんかならではのしてんこそが、しゃかいのかつりょくをうみだすげんせんにほかなりません。',
        vietnamese: 'The perspectives unique to different cultures are precisely the wellspring that generates a society\'s vitality — nothing else.'
      }
    ],
    culturalNote:
      'Japan has traditionally been seen as a homogeneous society (単一民族社会) but is now facing a growing need for foreign labor due to a shrinking population. The Technical Intern Training Program (技能実習) has been criticized for exploiting workers. In 2019, Japan opened the "Specified Skilled Worker" visa (特定技能) for 14 industries facing labor shortages. The concept of multicultural coexistence (多文化共生) is gradually replacing the traditional assimilation model.'
  },

  // ── 25. Future of Humanity (人類の未来) ─────────────────────
  {
    id: 'n1-conv-25',
    title: 'The future of humanity',
    titleJp: '人類の未来',
    level: 'N1',
    situation: 'An astrophysicist and a futurist discuss the fate of humanity, scientific progress, and sustainable development',
    patterns: [
      {
        japanese: '〜たりとも〜ない',
        kana: '〜たりとも〜ない',
        vietnamese: 'Not even a single ~.',
        memoryTip:
          'Remember: たりとも = "even if it were merely" → emphasizes that not even the SMALLEST amount is permitted. "Not even a single second wasted" — absolutizing down to the finest detail.'
      },
      {
        japanese: '〜て然るべき',
        kana: '〜てしかるべき',
        vietnamese: 'Should rightfully ~, it\'s only natural that ~.',
        memoryTip:
          'Remember: しかるべき = "as it should rightly be" → the INEVITABLE outcome according to logic or morality. "Naturally, the sun rises" — an expectation of what is proper but hasn\'t happened yet.'
      },
      {
        japanese: '〜て止まない',
        kana: '〜てやまない',
        vietnamese: 'Endlessly ~, forever ~ (heartfelt wish).',
        memoryTip:
          'Remember: やまない = "does not stop" (止まない) → a flame of hope burning endlessly in one\'s heart. The kanji version of てやまない from Lesson 6 — used when hoping for humanity\'s future.'
      }
    ],
    dialogue: [
      {
        speaker: 'Astrophysicist',
        japanese: '人類は科学技術の力で宇宙に進出すべきです。一日たりとも研究を怠ってはなりません。',
        kana: 'じんるいはかがくぎじゅつのちからでうちゅうにしんしゅつすべきです。いちにちたりともけんきゅうをおこたってはなりません。',
        vietnamese: 'Humanity should advance into space through the power of science and technology. We must not neglect research even for a single day.'
      },
      {
        speaker: 'Futurist',
        japanese: '宇宙進出もさることながら、まずは地球の持続可能性を確保して然るべきではないでしょうか。',
        kana: 'うちゅうしんしゅつもさることながら、まずはちきゅうのじぞくかのうせいをかくほしてしかるべきではないでしょうか。',
        vietnamese: 'Advancing into space goes without saying, but shouldn\'t we first rightfully ensure the sustainability of Earth?'
      },
      {
        speaker: 'Astrophysicist',
        japanese: '人類が一瞬たりとも進歩を止めなかったからこそ、今日の文明があるのです。',
        kana: 'じんるいがいっしゅんたりともしんぽをとめなかったからこそ、こんにちのぶんめいがあるのです。',
        vietnamese: 'It is precisely because humanity never stopped progressing, not even for a moment, that today\'s civilization exists.'
      },
      {
        speaker: 'Futurist',
        japanese: '私は人類の叡智を信じて止みません。科学技術と倫理の調和こそが、持続可能な未来の鍵に他なりません。',
        kana: 'わたしはじんるいのえいちをしんじてやみません。かがくぎじゅつとりんりのちょうわこそが、じぞくかのうなみらいのかぎにほかなりません。',
        vietnamese: 'I believe endlessly in humanity\'s wisdom. The harmony between science, technology, and ethics is precisely the key to a sustainable future, and nothing else.'
      },
      {
        speaker: 'Astrophysicist',
        japanese: '次の世代が、我々の築いた基盤の上でさらなる飛躍を遂げることを、願って止みません。',
        kana: 'つぎのせだいが、われわれのきずいたきばんのうえでさらなるひやくをとげることを、ねがってやみません。',
        vietnamese: 'I wish endlessly that the next generation will achieve even greater leaps upon the foundation we have built.'
      }
    ],
    culturalNote:
      'Japan has made major contributions to science, with many Nobel laureates (日本人ノーベル賞受賞者) in physics, chemistry, and medicine. The Japan Aerospace Exploration Agency (JAXA — 宇宙航空研究開発機構) has been active in asteroid exploration (the Hayabusa missions — はやぶさ). The concept of sustainability (持続可能性) is tied to the philosophy of mottainai (もったいない — regret over waste) — a traditional Japanese view of valuing resources, now recognized by UNESCO as a global environmental philosophy.'
  }
];
