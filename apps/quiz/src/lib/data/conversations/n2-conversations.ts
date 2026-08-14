import type { ConversationPattern } from '$lib/types/lesson';

export const N2_CONVERSATIONS: ConversationPattern[] = [
  // ── 1. Business Meeting (会議) ──────────────────────────────────
  {
    id: 'n2-conv-01',
    title: 'Business meeting',
    titleJp: '会議',
    level: 'N2',
    situation: 'Attending a company meeting, presenting a proposal, and reaching a decision',
    patterns: [
      {
        japanese: '新しいプロジェクトについて提案がございます。',
        kana: 'あたらしいプロジェクトについてていあんがございます。',
        vietnamese: 'I have a proposal regarding the new project.',
        memoryTip:
          'Remember: 提案 (teian) = a proposal. ございます is the honorific form of あります.'
      },
      {
        japanese: 'この件について、もう少し検討させていただけますか。',
        kana: 'このけんについて、もうすこしけんとうさせていただけますか。',
        vietnamese: 'Regarding this matter, could I please have a bit more time to consider it?',
        memoryTip:
          'Remember: 検討 (kentou) = to examine/consider. させていただく = the most humble way to ask permission to do something.'
      },
      {
        japanese: 'それでは、本日の会議で決定したいと思います。',
        kana: 'それでは、ほんじつのかいぎでけっていしたいとおもいます。',
        vietnamese: 'In that case, I would like us to reach a decision at today\'s meeting.',
        memoryTip:
          'Remember: 決定 (kettei) = a decision. 本日 (honjitsu) is the formal, business version of 今日.'
      }
    ],
    dialogue: [
      {
        speaker: 'Manager',
        japanese: '皆さん、本日の議題に入りましょう。',
        kana: 'みなさん、ほんじつのぎだいにはいりましょう。',
        vietnamese: 'Everyone, let\'s get started on today\'s agenda.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'はい。新製品の販売戦略について提案がございます。',
        kana: 'はい。しんせいひんのはんばいせんりゃくについてていあんがございます。',
        vietnamese: 'Yes. I have a proposal about the sales strategy for the new product.'
      },
      {
        speaker: 'Manager',
        japanese: 'なるほど。具体的にはどのようなことでしょうか。',
        kana: 'なるほど。ぐたいてきにはどのようなことでしょうか。',
        vietnamese: 'I see. What specifically did you have in mind?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'オンラインマーケティングを強化すべきだと考えております。',
        kana: 'オンラインマーケティングをきょうかすべきだとかんがえております。',
        vietnamese: 'I believe we should strengthen our online marketing.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'その点について、もう少し検討させていただけますか。',
        kana: 'そのてんについて、もうすこしけんとうさせていただけますか。',
        vietnamese: 'Regarding that point, could I have a bit more time to consider it?'
      },
      {
        speaker: 'Manager',
        japanese: 'では、来週までに結論を出しましょう。',
        kana: 'では、らいしゅうまでにけつろんをだしましょう。',
        vietnamese: 'Then let\'s reach a conclusion by next week.'
      }
    ],
    culturalNote:
      'In Japanese meetings, people rarely oppose something directly — instead of saying "I disagree", they use an indirect phrase like もう少し検討させていただけますか (let me consider it a bit more). Decisions are usually reached by consensus (根回し — nemawashi), meaning informal discussion happens privately before the official meeting.'
  },

  // ── 2. Negotiation (交渉) ──────────────────────────────────────
  {
    id: 'n2-conv-02',
    title: 'Negotiation',
    titleJp: '交渉',
    level: 'N2',
    situation: 'Negotiating a contract with a business partner and discussing terms',
    patterns: [
      {
        japanese: '価格について再度ご検討いただければ幸いです。',
        kana: 'かかくについてさいどごけんとういただければさいわいです。',
        vietnamese: 'It would be greatly appreciated if you could reconsider the price.',
        memoryTip:
          'Remember: ～いただければ幸いです is one of the most polite request structures — いただく (humble) + ければ (conditional) + 幸い (fortunate) = "I would be glad if that could happen."'
      },
      {
        japanese: '納期を一週間延ばしていただきたいということでご相談に参りました。',
        kana: 'のうきをいっしゅうかんのばしていただきたいということでごそうだんにまいりました。',
        vietnamese: 'I\'ve come to discuss the possibility of extending the delivery deadline by one week.',
        memoryTip:
          'Remember: ～ということで = "on the grounds that/regarding" — links a reason to an action. 参りました is the humble form of 来ました.'
      },
      {
        japanese: '双方にとってメリットのある条件を見つけたいと存じます。',
        kana: 'そうほうにとってメリットのあるじょうけんをみつけたいとぞんじます。',
        vietnamese: 'I would like to find terms that are beneficial to both sides.',
        memoryTip:
          'Remember: 存じます (zonjimasu) is the humble form of 思います, used when stating YOUR OWN opinion to someone of higher status. 双方 (souhou) = both parties.'
      }
    ],
    dialogue: [
      {
        speaker: 'Yamamoto',
        japanese: '本日はお忙しいところ、お時間をいただきありがとうございます。',
        kana: 'ほんじつはおいそがしいところ、おじかんをいただきありがとうございます。',
        vietnamese: 'Thank you for taking the time today despite your busy schedule.'
      },
      {
        speaker: 'Lee',
        japanese: 'いいえ、こちらこそ。早速ですが、契約の件についてお話しさせていただけますか。',
        kana: 'いいえ、こちらこそ。さっそくですが、けいやくのけんについておはなしさせていただけますか。',
        vietnamese: 'Not at all, thank you as well. If I may get right to it, could we discuss the contract?'
      },
      {
        speaker: 'Yamamoto',
        japanese: '価格について再度ご検討いただければ幸いです。',
        kana: 'かかくについてさいどごけんとういただければさいわいです。',
        vietnamese: 'We would greatly appreciate it if you could reconsider the price.'
      },
      {
        speaker: 'Lee',
        japanese: 'ご要望は承りましたが、これ以上の値下げは難しい状況でございます。',
        kana: 'ごようぼうはうけたまわりましたが、これいじょうのねさげはむずかしいじょうきょうでございます。',
        vietnamese: 'I\'ve noted your request, but further discounting is difficult under the current circumstances.'
      },
      {
        speaker: 'Yamamoto',
        japanese: 'では、数量を増やす代わりに単価を下げていただくというのはいかがでしょうか。',
        kana: 'では、すうりょうをふやすかわりにたんかをさげていただくというのはいかがでしょうか。',
        vietnamese: 'Then how about lowering the unit price in exchange for us increasing the quantity?'
      },
      {
        speaker: 'Lee',
        japanese: 'なるほど、その方向で前向きに検討させていただきます。',
        kana: 'なるほど、そのほうこうでまえむきにけんとうさせていただきます。',
        vietnamese: 'I see. We will give that direction positive consideration.'
      }
    ],
    culturalNote:
      'In Japanese negotiations, the phrase 前向きに検討させていただきます (we will give it positive consideration) doesn\'t necessarily mean "yes" — it can simply be a gentle way of declining. Japanese people place great importance on preserving the other party\'s face (面子 — mentsu), so they rarely say "no" outright. Reading between the lines (空気を読む — kuuki wo yomu) is essential to grasp the real meaning.'
  },

  // ── 3. Academic Discussion (学術) ─────────────────────────────
  {
    id: 'n2-conv-03',
    title: 'Academic discussion',
    titleJp: '学術討論',
    level: 'N2',
    situation: 'Discussing university research, presenting and defending a thesis',
    patterns: [
      {
        japanese: 'この研究では、日本語教育における動機づけの要因を分析しました。',
        kana: 'このけんきゅうでは、にほんごきょういくにおけるどうきづけのよういんをぶんせきしました。',
        vietnamese: 'In this study, we analyzed the factors of motivation in Japanese language education.',
        memoryTip:
          'Remember: 研究 (kenkyuu) = research. 分析 (bunseki) = to analyze. における = "in/at" (a formal, written equivalent of の中の).'
      },
      {
        japanese: '先行研究と比較すると、異なる結果が得られました。',
        kana: 'せんこうけんきゅうとひかくすると、ことなるけっかがえられました。',
        vietnamese: 'Compared to prior research, we obtained different results.',
        memoryTip:
          'Remember: 先行研究 (senkou kenkyuu) = prior research (research that came before). 得られました is the potential-passive of 得る → "was able to be obtained."'
      },
      {
        japanese: '論文の結論として、さらなる調査が必要であると考えられます。',
        kana: 'ろんぶんのけつろんとして、さらなるちょうさがひつようであるとかんがえられます。',
        vietnamese: 'As a conclusion of the paper, further investigation is considered necessary.',
        memoryTip:
          'Remember: 論文 (ronbun) = a thesis/paper. 考えられます = passive → "is thought to be" (more objective than 考えます).'
      }
    ],
    dialogue: [
      {
        speaker: 'Prof. Sato',
        japanese: '田中さんの研究テーマについて発表をお願いします。',
        kana: 'たなかさんのけんきゅうテーマについてはっぴょうをおねがいします。',
        vietnamese: 'Tanaka, please present your research topic.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'はい。私の論文では、バイリンガル教育の効果を分析しております。',
        kana: 'はい。わたしのろんぶんでは、バイリンガルきょういくのこうかをぶんせきしております。',
        vietnamese: 'Yes. In my thesis, I am analyzing the effects of bilingual education.'
      },
      {
        speaker: 'Prof. Sato',
        japanese: 'データの収集方法はどのようにされましたか。',
        kana: 'データのしゅうしゅうほうほうはどのようにされましたか。',
        vietnamese: 'How did you go about collecting the data?'
      },
      {
        speaker: 'Tanaka',
        japanese: 'アンケート調査と面接調査を併用いたしました。',
        kana: 'アンケートちょうさとめんせつちょうさをへいよういたしました。',
        vietnamese: 'I used a combination of questionnaire surveys and interviews.'
      },
      {
        speaker: 'Suzuki (Student)',
        japanese: '先行研究との違いについて、もう少し詳しく説明していただけませんか。',
        kana: 'せんこうけんきゅうとのちがいについて、もうすこしくわしくせつめいしていただけませんか。',
        vietnamese: 'Could you explain in more detail how this differs from prior research?'
      },
      {
        speaker: 'Tanaka',
        japanese: '先行研究では定量的な分析が中心でしたが、本研究では定性的なアプローチも取り入れました。',
        kana: 'せんこうけんきゅうではていりょうてきなぶんせきがちゅうしんでしたが、ほんけんきゅうではていせいてきなアプローチもとりいれました。',
        vietnamese: 'Prior research centered on quantitative analysis, but this study also incorporated a qualitative approach.'
      }
    ],
    culturalNote:
      'In Japanese academic settings, the teacher-student relationship (師弟関係 — shitei kankei) is highly valued. Students use honorific language with professors, and when questioning a thesis, indirect phrasing like ～していただけませんか is used rather than direct criticism. A professor is usually addressed as ～先生, never ～さん.'
  },

  // ── 4. Expressing Regret (後悔) ───────────────────────────────
  {
    id: 'n2-conv-04',
    title: 'Expressing regret',
    titleJp: '後悔',
    level: 'N2',
    situation: 'Expressing regret over a past decision and apologizing at work',
    patterns: [
      {
        japanese: 'もっと早く相談すればよかったです。',
        kana: 'もっとはやくそうだんすればよかったです。',
        vietnamese: 'I wish I had consulted you sooner.',
        memoryTip:
          'Remember: ～ばよかった = "it would have been good if I had done ~" → regret over NOT doing something. すれば (conditional) + よかった (was good) = a regret pattern. Picture standing in the present, looking back and sighing.'
      },
      {
        japanese: 'ご連絡が遅くなりまして、大変申し訳ございません。',
        kana: 'ごれんらくがおそくなりまして、たいへんもうしわけございません。',
        vietnamese: 'I sincerely apologize for the delay in contacting you.',
        memoryTip:
          'Remember: 申し訳ございません (moushiwake gozaimasen) is the most formal apology. 申し訳 = "an excuse" + ございません = "there is none" → "there is no excuse" → a deep apology.'
      },
      {
        japanese: 'あの時、もう少し慎重に判断すべきでした。',
        kana: 'あのとき、もうすこししんちょうにはんだんすべきでした。',
        vietnamese: 'At that time, I should have judged more carefully.',
        memoryTip:
          'Remember: ～すべきでした = "should have done ~" → a stronger regret than ～ばよかった since it implies duty/responsibility. すべき = should + でした = past tense.'
      }
    ],
    dialogue: [
      {
        speaker: 'Takahashi',
        japanese: '課長、先日のプレゼンの件でお話がございます。',
        kana: 'かちょう、せんじつのプレゼンのけんでおはなしがございます。',
        vietnamese: 'Section chief, I have something to discuss regarding the presentation the other day.'
      },
      {
        speaker: 'Section chief',
        japanese: 'どうしましたか。',
        kana: 'どうしましたか。',
        vietnamese: 'What is it?'
      },
      {
        speaker: 'Takahashi',
        japanese: '資料にミスがあったことに気づきました。確認が不十分で、大変申し訳ございません。',
        kana: 'しりょうにミスがあったことにきづきました。かくにんがふじゅうぶんで、たいへんもうしわけございません。',
        vietnamese: 'I noticed there was a mistake in the materials. My checking was insufficient, and I sincerely apologize.'
      },
      {
        speaker: 'Section chief',
        japanese: 'そうですか。どの部分にミスがあったのですか。',
        kana: 'そうですか。どのぶぶんにミスがあったのですか。',
        vietnamese: 'I see. Which part had the mistake?'
      },
      {
        speaker: 'Takahashi',
        japanese: '売上データの数字が間違っておりました。提出前にもう一度確認すればよかったです。',
        kana: 'うりあげデータのすうじがまちがっておりました。ていしゅつまえにもういちどかくにんすればよかったです。',
        vietnamese: 'The sales data figures were wrong. I wish I had checked them once more before submitting.'
      },
      {
        speaker: 'Section chief',
        japanese: '分かりました。今後はダブルチェックを徹底してください。訂正版を明日までに出してもらえますか。',
        kana: 'わかりました。こんごはダブルチェックをてっていしてください。ていせいばんをあしたまでにだしてもらえますか。',
        vietnamese: 'Understood. From now on, please be thorough about double-checking. Can you submit a corrected version by tomorrow?'
      }
    ],
    culturalNote:
      'The culture of apology (謝罪 — shazai) is very important in Japan. When making a mistake at work, Japanese people typically: (1) acknowledge the mistake immediately, (2) explain the cause without making excuses, (3) propose a fix. 申し訳ございません carries far more weight than すみません and conveys deep sincerity. A deep bow (深々とお辞儀) often accompanies a formal apology.'
  },

  // ── 5. Formal Letter / Email (手紙) ───────────────────────────
  {
    id: 'n2-conv-05',
    title: 'Formal letters and emails',
    titleJp: '手紙・メール',
    level: 'N2',
    situation: 'Writing and reading formal business letters and emails in a Japanese context',
    patterns: [
      {
        japanese: '拝啓　時下ますますご清栄のこととお慶び申し上げます。',
        kana: 'はいけい　じかますますごせいえいのこととおよろこびもうしあげます。',
        vietnamese: 'Dear Sir/Madam, I hope this finds you in continued prosperity.',
        memoryTip:
          'Remember: 拝啓 (haikei) = a formal salutation that opens a letter, always paired with 敬具 (keigu) at the close. Like "Dear Sir" and "Sincerely" in English.'
      },
      {
        japanese: 'お忙しいところ恐れ入りますが、ご確認いただけますと幸いに存じます。',
        kana: 'おいそがしいところおそれいりますが、ごかくにんいただけますとさいわいにぞんじます。',
        vietnamese: 'I apologize for the intrusion given how busy you are, but I would be grateful if you could confirm.',
        memoryTip:
          'Remember: 恐れ入りますが (osoreirimasu ga) = an extremely humble phrase used when asking a favor. ～いたします is the humble form of します, used for one\'s own actions.'
      },
      {
        japanese: '今後とも何卒よろしくお願いいたします。敬具',
        kana: 'こんごともなにとぞよろしくおねがいいたします。けいぐ',
        vietnamese: 'I humbly ask for your continued support going forward. Sincerely.',
        memoryTip:
          'Remember: 何卒 (nanitozo) = "by all means, I earnestly ask" — raises the politeness level of よろしくお願いします. 敬具 (keigu) = a formal closing, "respectfully."'
      }
    ],
    dialogue: [
      {
        speaker: '(Subject line)',
        japanese: '新規取引のご挨拶',
        kana: 'しんきとりひきのごあいさつ',
        vietnamese: 'Greetings regarding a new business relationship'
      },
      {
        speaker: '(Body)',
        japanese: '拝啓　貴社ますますご発展のこととお慶び申し上げます。',
        kana: 'はいけい　きしゃますますごはってんのこととおよろこびもうしあげます。',
        vietnamese: 'Dear Sir/Madam, I offer my congratulations on your company\'s continued growth.'
      },
      {
        speaker: '(Body)',
        japanese: 'このたびは弊社製品にご関心をお寄せいただき、誠にありがとうございます。',
        kana: 'このたびはへいしゃせいひんにごかんしんをおよせいただき、まことにありがとうございます。',
        vietnamese: 'Thank you very much for your interest in our company\'s products.'
      },
      {
        speaker: '(Body)',
        japanese: 'つきましては、カタログと見積書を同封いたしましたので、ご査収のほどお願い申し上げます。',
        kana: 'つきましては、カタログとみつもりしょをどうふういたしましたので、ごさしゅうのほどおねがいもうしあげます。',
        vietnamese: 'Accordingly, we have enclosed our catalog and quotation, and kindly ask you to review them.'
      },
      {
        speaker: '(Body)',
        japanese: 'ご不明な点がございましたら、お気軽にお問い合わせくださいませ。',
        kana: 'ごふめいなてんがございましたら、おきがるにおといあわせくださいませ。',
        vietnamese: 'If anything is unclear, please feel free to contact us.'
      },
      {
        speaker: '(Closing)',
        japanese: '今後とも何卒よろしくお願いいたします。敬具',
        kana: 'こんごともなにとぞよろしくおねがいいたします。けいぐ',
        vietnamese: 'We humbly ask for your continued support going forward. Sincerely.'
      }
    ],
    culturalNote:
      'A formal Japanese business letter (ビジネスレター) follows a fixed structure: (1) 拝啓 as the opening, (2) 時候の挨拶 — a seasonal greeting, (3) the main content, (4) closing with 敬具. Modern emails may drop 拝啓/敬具 but keep the polite structure. Note: 貴社 (kisha — your esteemed company) is used in writing, while 御社 (onsha) is used when speaking. 弊社 (heisha — "our humble company") is the modest way to refer to one\'s own company.'
  },

  // ── 6. Job Hunting (就職活動) ─────────────────────────────────
  {
    id: 'n2-conv-06',
    title: 'Job hunting',
    titleJp: '就職活動',
    level: 'N2',
    situation: 'Preparing job application documents and interviewing at a Japanese company',
    patterns: [
      {
        japanese: '御社の企業理念に深く共感し、志望いたしました。',
        kana: 'おんしゃのきぎょうりねんにふかくきょうかんし、しぼういたしました。',
        vietnamese: 'I deeply resonated with your company\'s philosophy, which is why I applied.',
        memoryTip:
          'Remember: 御社 (onsha) = your esteemed company (used when SPEAKING, unlike 貴社 which is used in WRITING). 志望 (shibou) = an aspiration/application. 共感 = to empathize/resonate.'
      },
      {
        japanese: '履歴書と職務経歴書を添付いたしましたので、ご査収ください。',
        kana: 'りれきしょとしょくむけいれきしょをてんぷいたしましたので、ごさしゅうください。',
        vietnamese: 'I have attached my resume and work history, please review them.',
        memoryTip:
          'Remember: 履歴書 (rirekisho) = a resume/CV. 職務経歴書 (shokumu keirekisho) = a detailed work-history document. 添付 (tenpu) = to attach.'
      },
      {
        japanese: '面接の機会をいただければ、大変光栄に存じます。',
        kana: 'めんせつのきかいをいただければ、たいへんこうえいにぞんじます。',
        vietnamese: 'I would be deeply honored to be given the opportunity for an interview.',
        memoryTip:
          'Remember: 面接 (mensetsu) = a job interview. 光栄 (kouei) = an honor/privilege. いただければ = "if I could receive" (humble + conditional).'
      }
    ],
    dialogue: [
      {
        speaker: 'Interviewer',
        japanese: '本日はお越しいただき、ありがとうございます。自己紹介をお願いします。',
        kana: 'ほんじつはおこしいただき、ありがとうございます。じこしょうかいをおねがいします。',
        vietnamese: 'Thank you for coming today. Please introduce yourself.'
      },
      {
        speaker: 'Nguyen',
        japanese: 'はい。グエンと申します。大学では経済学を専攻しておりました。',
        kana: 'はい。グエンともうします。だいがくではけいざいがくをせんこうしておりました。',
        vietnamese: 'Yes. My name is Nguyen. At university, I majored in economics.'
      },
      {
        speaker: 'Interviewer',
        japanese: '当社を志望された理由をお聞かせください。',
        kana: 'とうしゃをしぼうされたりゆうをおきかせください。',
        vietnamese: 'Please tell me why you applied to our company.'
      },
      {
        speaker: 'Nguyen',
        japanese: '御社のグローバル展開に魅力を感じ、私の語学力を活かせると考えました。',
        kana: 'おんしゃのグローバルてんかいにみりょくをかんじ、わたしのごがくりょくをいかせるとかんがえました。',
        vietnamese: 'I was drawn to your company\'s global expansion and felt I could make use of my language abilities.'
      },
      {
        speaker: 'Interviewer',
        japanese: '入社後、どのように貢献したいとお考えですか。',
        kana: 'にゅうしゃご、どのようにこうけんしたいとおかんがえですか。',
        vietnamese: 'How would you like to contribute after joining the company?'
      },
      {
        speaker: 'Nguyen',
        japanese: 'ベトナム市場の開拓に携わり、御社の売上拡大に貢献したいと存じます。',
        kana: 'ベトナムしじょうのかいたくにたずさわり、おんしゃのうりあげかくだいにこうけんしたいとぞんじます。',
        vietnamese: 'I would like to be involved in developing the Vietnamese market and contribute to growing your company\'s sales.'
      }
    ],
    culturalNote:
      'Job hunting in Japan (就職活動, shuukatsu) follows a very strict process. Third-year university students begin job hunting, wear black recruit suits (リクルートスーツ), and submit entry sheets (エントリーシート) to many companies at once. Interviews usually go through multiple rounds. Applicants must clearly present their 志望動機 (reason for applying) and a convincing 自己PR (self-promotion).'
  },

  // ── 7. Presenting Data (プレゼン) ─────────────────────────────
  {
    id: 'n2-conv-07',
    title: 'Presenting data',
    titleJp: 'プレゼンテーション',
    level: 'N2',
    situation: 'Presenting data analysis results using charts and figures',
    patterns: [
      {
        japanese: 'このグラフが示しているとおり、売上は前年比20%増加しております。',
        kana: 'このグラフがしめしているとおり、うりあげはぜんねんひ20パーセントぞうかしております。',
        vietnamese: 'As this graph shows, sales have increased 20% compared to the previous year.',
        memoryTip:
          'Remember: グラフ = graph. 前年比 (zennenhi) = "compared to the previous year." ～とおり = "just as ~." しております = ongoing (humble).'
      },
      {
        japanese: 'データを分析した結果、以下の傾向が明らかになりました。',
        kana: 'データをぶんせきしたけっか、いかのけいこうがあきらかになりました。',
        vietnamese: 'As a result of analyzing the data, the following trend became clear.',
        memoryTip:
          'Remember: 傾向 (keikou) = a trend/tendency. 明らか (akiraka) = clear/evident. 以下 (ika) = "the following" (literally "below this point").'
      }
    ],
    dialogue: [
      {
        speaker: 'Presenter',
        japanese: 'それでは、第三四半期の業績について報告いたします。',
        kana: 'それでは、だいさんしはんきのぎょうせきについてほうこくいたします。',
        vietnamese: 'Now, I will report on the third quarter\'s business results.'
      },
      {
        speaker: 'Presenter',
        japanese: 'こちらの棒グラフをご覧ください。売上は順調に伸びております。',
        kana: 'こちらのぼうグラフをごらんください。うりあげはじゅんちょうにのびております。',
        vietnamese: 'Please look at this bar graph. Sales are growing steadily.'
      },
      {
        speaker: 'Questioner',
        japanese: '利益率についてはいかがでしょうか。',
        kana: 'りえきりつについてはいかがでしょうか。',
        vietnamese: 'What about the profit margin?'
      },
      {
        speaker: 'Presenter',
        japanese: '円グラフで示しておりますが、利益率は若干低下しております。',
        kana: 'えんグラフでしめしておりますが、りえきりつはじゃっかんていかしております。',
        vietnamese: 'As shown in the pie chart, the profit margin has declined slightly.'
      },
      {
        speaker: 'Questioner',
        japanese: 'その原因は何だとお考えですか。',
        kana: 'そのげんいんはなんだとおかんがえですか。',
        vietnamese: 'What do you think the cause is?'
      },
      {
        speaker: 'Presenter',
        japanese: '原材料費の高騰が主な要因と分析しております。対策案は次のスライドでご説明いたします。',
        kana: 'げんざいりょうひのこうとうがおもなよういんとぶんせきしております。たいさくあんはつぎのスライドでごせつめいいたします。',
        vietnamese: 'We\'ve analyzed rising raw material costs as the main factor. I will explain our countermeasures on the next slide.'
      }
    ],
    culturalNote:
      'Japanese business presentations often follow the 起承転結 (kishoutenketsu — introduction-development-twist-conclusion) structure. Presenters use polite honorific expressions such as ご覧ください (please take a look) rather than 見てください. Bar graphs (棒グラフ), pie charts (円グラフ), and line graphs (折れ線グラフ) are common presentation tools.'
  },

  // ── 8. Customer Service (接客) ────────────────────────────────
  {
    id: 'n2-conv-08',
    title: 'Customer service',
    titleJp: '接客対応',
    level: 'N2',
    situation: 'Assisting a customer, handling a complaint, and resolving an issue',
    patterns: [
      {
        japanese: 'お客様、大変お待たせいたしました。ご用件をお伺いいたします。',
        kana: 'おきゃくさま、たいへんおまたせいたしました。ごようけんをおうかがいいたします。',
        vietnamese: 'Thank you for waiting, sir/ma\'am. How may I help you?',
        memoryTip:
          'Remember: お客様 (okyakusama) = "esteemed customer" (the most formal address). お伺い (ouкagai) is the humble form of 聞く → "may I ask/hear." いたします is the humble form of します.'
      },
      {
        japanese: 'ご不便をおかけしまして、誠に申し訳ございません。',
        kana: 'ごふべんをおかけしまして、まことにもうしわけございません。',
        vietnamese: 'We sincerely apologize for the inconvenience caused.',
        memoryTip:
          'Remember: ご不便 (gofuben) = an inconvenience. おかけする = to cause (humble). 誠に (makotoni) = truly/sincerely — stronger than 本当に.'
      },
      {
        japanese: '早急に対応させていただきます。',
        kana: 'さっきゅうにたいおうさせていただきます。',
        vietnamese: 'We will address this immediately.',
        memoryTip:
          'Remember: 早急 (sakkyuu) = urgently/promptly. 対応 (taiou) = to respond/handle. させていただく = to humbly ask permission to do something.'
      }
    ],
    dialogue: [
      {
        speaker: 'Customer',
        japanese: 'すみません、先日購入した商品に不具合があるのですが。',
        kana: 'すみません、せんじつこうにゅうしたしょうひんにふぐあいがあるのですが。',
        vietnamese: 'Excuse me, the item I bought the other day has a defect.'
      },
      {
        speaker: 'Staff',
        japanese: 'ご不便をおかけしまして、誠に申し訳ございません。詳しくお聞かせいただけますか。',
        kana: 'ごふべんをおかけしまして、まことにもうしわけございません。くわしくおきかせいただけますか。',
        vietnamese: 'We sincerely apologize for the inconvenience. Could you tell me more about it?'
      },
      {
        speaker: 'Customer',
        japanese: '電源を入れても画面が表示されないんです。',
        kana: 'でんげんをいれてもがめんがひょうじされないんです。',
        vietnamese: 'Even when I turn the power on, the screen doesn\'t display anything.'
      },
      {
        speaker: 'Staff',
        japanese: '承知いたしました。すぐに新しい商品と交換させていただきます。',
        kana: 'しょうちいたしました。すぐにあたらしいしょうひんとこうかんさせていただきます。',
        vietnamese: 'Understood. We will exchange it for a new item right away.'
      },
      {
        speaker: 'Customer',
        japanese: '返金は可能ですか。',
        kana: 'へんきんはかのうですか。',
        vietnamese: 'Is a refund possible?'
      },
      {
        speaker: 'Staff',
        japanese: 'はい、もちろんでございます。返金手続きを進めさせていただきます。レシートをお持ちでしょうか。',
        kana: 'はい、もちろんでございます。へんきんてつづきをすすめさせていただきます。レシートをおもちでしょうか。',
        vietnamese: 'Yes, of course. We will proceed with the refund process. Do you have your receipt?'
      }
    ],
    culturalNote:
      'Japanese customer service (接客 — sekkyaku) is world-renowned for its standard of 「お客様は神様です」("the customer is a god"). Staff always use maximum honorific language, and bow at 45 degrees when apologizing. Even when the customer is at fault, staff remain gentle and never argue back directly.'
  },

  // ── 9. Real Estate (不動産) ───────────────────────────────────
  {
    id: 'n2-conv-09',
    title: 'Real estate',
    titleJp: '不動産',
    level: 'N2',
    situation: 'House hunting, discussing rental or purchase contracts for property',
    patterns: [
      {
        japanese: '駅から徒歩10分以内の物件を探しているのですが。',
        kana: 'えきからとほ10ぷんいないのぶっけんをさがしているのですが。',
        vietnamese: 'I\'m looking for a property within a 10-minute walk of the station.',
        memoryTip:
          'Remember: 物件 (bukken) = a property listing (a room/house for rent or sale). 徒歩 (toho) = on foot. 以内 (inai) = within a range.'
      },
      {
        japanese: '賃貸契約の更新について確認させていただきたいのですが。',
        kana: 'ちんたいけいやくのこうしんについてかくにんさせていただきたいのですが。',
        vietnamese: 'I would like to confirm about renewing the lease contract.',
        memoryTip:
          'Remember: 賃貸 (chintai) = rental. 契約 (keiyaku) = a contract. 更新 (koushin) = renewal/update.'
      }
    ],
    dialogue: [
      {
        speaker: 'Customer',
        japanese: '一人暮らし向けの1LDKの物件を探しております。',
        kana: 'ひとりぐらしむけの1LDKのぶっけんをさがしております。',
        vietnamese: 'I\'m looking for a 1LDK property suited for living alone.'
      },
      {
        speaker: 'Real estate agent',
        japanese: 'ご予算はおいくらぐらいをお考えでしょうか。',
        kana: 'ごよさんはおいくらぐらいをおかんがえでしょうか。',
        vietnamese: 'About how much is your budget?'
      },
      {
        speaker: 'Customer',
        japanese: '家賃は月8万円以内で、礼金なしの物件が希望です。',
        kana: 'やちんはつき8まんえんいないで、れいきんなしのぶっけんがきぼうです。',
        vietnamese: 'I\'d like rent within 80,000 yen a month, and a property with no key money.'
      },
      {
        speaker: 'Real estate agent',
        japanese: 'こちらの物件はいかがでしょうか。築5年で、南向きの角部屋です。',
        kana: 'こちらのぶっけんはいかがでしょうか。ちく5ねんで、みなみむきのかどべやです。',
        vietnamese: 'How about this property? It\'s 5 years old and a south-facing corner unit.'
      },
      {
        speaker: 'Customer',
        japanese: '敷金と仲介手数料はどのくらいかかりますか。',
        kana: 'しききんとちゅうかいてすうりょうはどのくらいかかりますか。',
        vietnamese: 'About how much are the deposit and agency fee?'
      },
      {
        speaker: 'Real estate agent',
        japanese: '敷金は家賃1ヶ月分、仲介手数料も1ヶ月分となっております。内見のご予約はいつがよろしいですか。',
        kana: 'しききんはやちん1かげつぶん、ちゅうかいてすうりょうも1かげつぶんとなっております。ないけんのごよやくはいつがよろしいですか。',
        vietnamese: 'The deposit is one month\'s rent, and the agency fee is also one month\'s rent. When would be a good time to book a viewing?'
      }
    ],
    culturalNote:
      'Renting in Japan comes with several unique fees: 敷金 (shikikin — a refundable deposit), 礼金 (reikin — a non-refundable "thank you" payment to the landlord), and 仲介手数料 (chuukai tesuuryou — an agency fee). 1LDK = one bedroom plus a living-dining-kitchen area. Foreigners often need a 保証人 (a guarantor) or must use a guarantor company (保証会社).'
  },

  // ── 10. Legal Matters (法律) ──────────────────────────────────
  {
    id: 'n2-conv-10',
    title: 'Legal matters',
    titleJp: '法律問題',
    level: 'N2',
    situation: 'Getting legal advice about contracts, breaches, and damages',
    patterns: [
      {
        japanese: '契約書の内容を確認したところ、いくつかの問題点が見つかりました。',
        kana: 'けいやくしょのないようをかくにんしたところ、いくつかのもんだいてんがみつかりました。',
        vietnamese: 'When I checked the contract content, I found several problems.',
        memoryTip:
          'Remember: 契約書 (keiyakusho) = a contract document. ～したところ = "when I did ~, [I found that]..." 問題点 (mondaiten) = problem points.'
      },
      {
        japanese: '相手方が契約に違反した場合、損害賠償を請求できます。',
        kana: 'あいてがたがけいやくにいはんしたばあい、そんがいばいしょうをせいきゅうできます。',
        vietnamese: 'If the other party breaches the contract, you can claim damages.',
        memoryTip:
          'Remember: 違反 (ihan) = a violation/breach. 損害賠償 (songai baishou) = compensation for damages. 請求 (seikyuu) = to claim/demand.'
      },
      {
        japanese: '弁護士に相談されることをお勧めいたします。',
        kana: 'べんごしにそうだんされることをおすすめいたします。',
        vietnamese: 'I recommend that you consult a lawyer.',
        memoryTip:
          'Remember: 弁護士 (bengoshi) = a lawyer/attorney. ～されることをお勧めします = a polite way to recommend someone do something.'
      }
    ],
    dialogue: [
      {
        speaker: 'Client',
        japanese: '先生、取引先との契約トラブルについてご相談があるのですが。',
        kana: 'せんせい、とりひきさきとのけいやくトラブルについてごそうだんがあるのですが。',
        vietnamese: 'I\'d like to consult you about a contract dispute with a business partner.'
      },
      {
        speaker: 'Lawyer',
        japanese: 'どのような状況か、詳しくお聞かせいただけますか。',
        kana: 'どのようなじょうきょうか、くわしくおきかせいただけますか。',
        vietnamese: 'Could you tell me the details of the situation?'
      },
      {
        speaker: 'Client',
        japanese: '納品された商品が契約の仕様と異なっていたのです。',
        kana: 'のうひんされたしょうひんがけいやくのしようとことなっていたのです。',
        vietnamese: 'The delivered goods differed from the specifications in the contract.'
      },
      {
        speaker: 'Lawyer',
        japanese: '契約書に基づいて、損害賠償の請求が可能と考えられます。',
        kana: 'けいやくしょにもとづいて、そんがいばいしょうのせいきゅうがかのうとかんがえられます。',
        vietnamese: 'Based on the contract, it appears a claim for damages would be possible.'
      }
    ],
    culturalNote:
      'Japan is a much less litigious society than the West. Japanese people usually prefer to settle disputes out of court through 示談 (jidan — private negotiation) or 調停 (choutei — mediation). A lawyer in Japan is called 弁護士, and becoming one requires passing the extremely difficult bar exam (司法試験).'
  },

  // ── 11. Medical Consultation (医療相談) ────────────────────────
  {
    id: 'n2-conv-11',
    title: 'Medical consultation',
    titleJp: '医療相談',
    level: 'N2',
    situation: 'Seeing a doctor, describing symptoms, and discussing treatment options',
    patterns: [
      {
        japanese: '一週間ほど前から頭痛と微熱の症状が続いております。',
        kana: 'いっしゅうかんほどまえからずつうとびねつのしょうじょうがつづいております。',
        vietnamese: 'For about a week now, I\'ve had ongoing symptoms of headache and low fever.',
        memoryTip:
          'Remember: 症状 (shoujou) = symptoms. 微熱 (binetsu) = a low-grade fever. 頭痛 (zutsuu) = a headache. ～ほど前から = "since about ~ ago."'
      },
      {
        japanese: '精密検査の結果、特に異常は見られませんでした。',
        kana: 'せいみつけんさのけっか、とくにいじょうはみられませんでした。',
        vietnamese: 'The detailed test results showed no particular abnormalities.',
        memoryTip:
          'Remember: 精密検査 (seimitsu kensa) = a detailed examination/test. 異常 (ijou) = an abnormality. 見られません = passive → "was not seen."'
      },
      {
        japanese: '治療方針について、いくつかの選択肢がございます。',
        kana: 'ちりょうほうしんについて、いくつかのせんたくしがございます。',
        vietnamese: 'There are several options regarding the treatment approach.',
        memoryTip:
          'Remember: 治療 (chiryou) = treatment. 方針 (houshin) = a policy/direction. 選択肢 (sentakushi) = options/choices.'
      }
    ],
    dialogue: [
      {
        speaker: 'Patient',
        japanese: '先生、最近めまいがひどくて、日常生活に支障が出ています。',
        kana: 'せんせい、さいきんめまいがひどくて、にちじょうせいかつにししょうがでています。',
        vietnamese: 'Doctor, my dizziness has been really bad lately, and it\'s affecting my daily life.'
      },
      {
        speaker: 'Doctor',
        japanese: 'いつ頃から症状が出始めましたか。',
        kana: 'いつごろからしょうじょうがではじめましたか。',
        vietnamese: 'About when did the symptoms start?'
      },
      {
        speaker: 'Patient',
        japanese: '二週間ほど前からです。特に朝起きた時にひどいです。',
        kana: 'にしゅうかんほどまえからです。とくにあさおきたときにひどいです。',
        vietnamese: 'About two weeks ago. It\'s especially bad when I wake up in the morning.'
      },
      {
        speaker: 'Doctor',
        japanese: '血液検査とMRI検査を受けていただきたいのですが、よろしいでしょうか。',
        kana: 'けつえきけんさとMRIけんさをうけていただきたいのですが、よろしいでしょうか。',
        vietnamese: 'I would like you to undergo a blood test and an MRI, is that alright?'
      },
      {
        speaker: 'Patient',
        japanese: 'はい、お願いします。何か重大な病気の可能性はありますか。',
        kana: 'はい、おねがいします。なにかじゅうだいなびょうきのかのうせいはありますか。',
        vietnamese: 'Yes, please. Is there a possibility of something serious?'
      },
      {
        speaker: 'Doctor',
        japanese: '検査結果を見てから判断いたしますが、過度にご心配なさらないでください。',
        kana: 'けんさけっかをみてからはんだんいたしますが、かどにごしんぱいなさらないでください。',
        vietnamese: 'I\'ll make a judgment after seeing the test results, but please try not to worry excessively.'
      }
    ],
    culturalNote:
      'Japan has universal health insurance (国民健康保険). Patients pay only 30% of the cost. When seeing a doctor, you bring your insurance card (保険証) and typically visit a small clinic (クリニック) first; if needed, you\'ll get a referral (紹介状) to a larger hospital. Doctors are usually addressed as 先生.'
  },

  // ── 12. Tax & Finance (税金) ──────────────────────────────────
  {
    id: 'n2-conv-12',
    title: 'Tax and finance',
    titleJp: '税金・財務',
    level: 'N2',
    situation: 'Filing income taxes and discussing tax savings and financial management',
    patterns: [
      {
        japanese: '確定申告の期限が近づいておりますので、早めの準備をお勧めします。',
        kana: 'かくていしんこくのきげんがちかづいておりますので、はやめのじゅんびをおすすめします。',
        vietnamese: 'Since the tax filing deadline is approaching, I recommend preparing early.',
        memoryTip:
          'Remember: 確定申告 (kakutei shinkoku) = an income tax return. 期限 (kigen) = a deadline. 近づく = to approach.'
      },
      {
        japanese: '医療費控除を申請すれば、節税になる可能性があります。',
        kana: 'いりょうひこうじょをしんせいすれば、せつぜいになるかのうせいがあります。',
        vietnamese: 'If you apply for the medical expense deduction, you may be able to save on taxes.',
        memoryTip:
          'Remember: 控除 (koujo) = a deduction. 節税 (setsuzei) = tax savings. 医療費 (iryouhi) = medical expenses. 申請 (shinsei) = to apply/file.'
      }
    ],
    dialogue: [
      {
        speaker: 'Client',
        japanese: 'フリーランスとして初めての確定申告なのですが、何から始めればよいですか。',
        kana: 'フリーランスとしてはじめてのかくていしんこくなのですが、なにからはじめればよいですか。',
        vietnamese: 'This is my first tax filing as a freelancer — where should I start?'
      },
      {
        speaker: 'Tax accountant',
        japanese: 'まず、収入と経費の記録を整理していただく必要があります。',
        kana: 'まず、しゅうにゅうときんぴのきろくをせいりしていただくひつようがあります。',
        vietnamese: 'First, you\'ll need to organize your income and expense records.'
      },
      {
        speaker: 'Client',
        japanese: '自宅で仕事をしているのですが、家賃の一部は経費として計上できますか。',
        kana: 'じたくでしごとをしているのですが、やちんのいちぶはけいひとしてけいじょうできますか。',
        vietnamese: 'I work from home — can part of my rent be counted as an expense?'
      },
      {
        speaker: 'Tax accountant',
        japanese: 'はい、事業使用面積の割合に応じて、経費に算入できます。',
        kana: 'はい、じぎょうしようめんせきのわりあいにおうじて、けいひにさんにゅうできます。',
        vietnamese: 'Yes, you can include it as an expense based on the proportion of space used for business.'
      },
      {
        speaker: 'Client',
        japanese: '青色申告のメリットについても教えていただけますか。',
        kana: 'あおいろしんこくのメリットについてもおしえていただけますか。',
        vietnamese: 'Could you also tell me about the advantages of the "blue return" filing?'
      },
      {
        speaker: 'Tax accountant',
        japanese: '青色申告では最大65万円の特別控除が受けられますので、大変お得です。',
        kana: 'あおいろしんこくではさいだい65まんえんのとくべつこうじょがうけられますので、たいへんおとくです。',
        vietnamese: 'With the blue return, you can receive a special deduction of up to 650,000 yen, so it\'s very advantageous.'
      }
    ],
    culturalNote:
      'In Japan, company employees usually don\'t need to file their own taxes because the company handles a year-end adjustment (年末調整). But freelancers and those with side income over 200,000 yen must file 確定申告 themselves. 青色申告 (the "blue" filing) is more complex but offers more tax benefits than 白色申告 (the "white" filing).'
  },

  // ── 13. Education System (教育) ───────────────────────────────
  {
    id: 'n2-conv-13',
    title: 'The education system',
    titleJp: '教育制度',
    level: 'N2',
    situation: 'Discussing exams, qualifications, and the school advancement system in Japan',
    patterns: [
      {
        japanese: '入試に合格するためには、偏差値60以上が必要だと言われています。',
        kana: 'にゅうしにごうかくするためには、へんさち60いじょうがひつようだといわれています。',
        vietnamese: 'It\'s said that a hensachi score of 60 or above is needed to pass the entrance exam.',
        memoryTip:
          'Remember: 入試 (nyuushi) = an entrance exam. 合格 (goukaku) = to pass. 偏差値 (hensachi) = a standardized academic score (average = 50). ～と言われている = "it is said that."'
      },
      {
        japanese: '学歴社会と呼ばれる日本では、大学名が就職に大きく影響します。',
        kana: 'がくれきしゃかいとよばれるにほんでは、だいがくめいがしゅうしょくにおおきくえいきょうします。',
        vietnamese: 'In Japan — called a credential-based society — the name of one\'s university greatly affects job hunting.',
        memoryTip:
          'Remember: 学歴 (gakureki) = academic history/credentials. 学歴社会 = a credential-based society. ～と呼ばれる = "called ~." 影響 (eikyou) = influence.'
      }
    ],
    dialogue: [
      {
        speaker: 'Parent',
        japanese: '先生、息子の進学について相談させていただきたいのですが。',
        kana: 'せんせい、むすこのしんがくについてそうだんさせていただきたいのですが。',
        vietnamese: 'I\'d like to discuss my son\'s further schooling with you.'
      },
      {
        speaker: 'Teacher',
        japanese: 'はい、もちろんです。現在の成績から見ますと、いくつかの選択肢がございます。',
        kana: 'はい、もちろんです。げんざいのせいせきからみますと、いくつかのせんたくしがございます。',
        vietnamese: 'Yes, of course. Based on his current grades, there are several options.'
      },
      {
        speaker: 'Parent',
        japanese: '推薦入試と一般入試、どちらが有利でしょうか。',
        kana: 'すいせんにゅうしといっぱんにゅうし、どちらがゆうりでしょうか。',
        vietnamese: 'Which would be more advantageous, the recommendation-based exam or the general exam?'
      },
      {
        speaker: 'Teacher',
        japanese: 'お子さんの場合、内申点が高いので推薦入試も十分狙えると思います。',
        kana: 'おこさんのばあい、ないしんてんがたかいのですいせんにゅうしもじゅうぶんねらえるとおもいます。',
        vietnamese: 'In your son\'s case, since his school record is strong, the recommendation exam is definitely within reach.'
      },
      {
        speaker: 'Parent',
        japanese: '塾に通わせるべきでしょうか。',
        kana: 'じゅくにかよわせるべきでしょうか。',
        vietnamese: 'Should I send him to a cram school?'
      },
      {
        speaker: 'Teacher',
        japanese: '志望校のレベルによりますが、苦手科目を補うために部分的に利用されるのもよいかと思います。',
        kana: 'しぼうこうのレベルによりますが、にがてかもくをおぎなうためにぶぶんてきにりようされるのもよいかとおもいます。',
        vietnamese: 'It depends on the level of the target school, but using it partially to shore up weak subjects would also be a good idea.'
      }
    ],
    culturalNote:
      'Japan\'s education system follows a 6-3-3-4 structure: 6 years of elementary school, 3 years of junior high (compulsory), 3 years of high school, and 4 years of university. 偏差値 (hensachi) is Japan\'s own standardized scoring system (50 = average). 塾 (juku — cram schools) are extremely common, with many students attending from elementary school on. The pressure of exams is called 受験戦争 (juken sensou — "exam war").'
  },

  // ── 14. Corporate Culture (企業文化) ──────────────────────────
  {
    id: 'n2-conv-14',
    title: 'Corporate culture',
    titleJp: '企業文化',
    level: 'N2',
    situation: 'Discussing pay structures, promotion, and HR management at a Japanese company',
    patterns: [
      {
        japanese: '年功序列制度では、勤続年数に応じて給与が上がります。',
        kana: 'ねんこうじょれつせいどでは、きんぞくねんすうにおうじてきゅうよがあがります。',
        vietnamese: 'Under the seniority system, pay increases according to years of continuous service.',
        memoryTip:
          'Remember: 年功序列 (nenkou joretsu) = seniority-based ranking. 勤続年数 (kinzoku nensuu) = years of continuous service. 応じて = "according to."'
      },
      {
        japanese: '最近は成果主義を導入する企業が増えてきました。',
        kana: 'さいきんはせいかしゅぎをどうにゅうするきぎょうがふえてきました。',
        vietnamese: 'Recently, more and more companies have been adopting a performance-based system.',
        memoryTip:
          'Remember: 成果主義 (seika shugi) = a performance-based (merit-based) system. 導入 (dounyuu) = to introduce/adopt. ～てきました = "has gradually ~."'
      },
      {
        japanese: '人事異動の内示が出ましたので、ご報告いたします。',
        kana: 'じんじいどうのないじがでましたので、ごほうこくいたします。',
        vietnamese: 'The informal notice about the personnel transfer has come out, so I\'d like to report it.',
        memoryTip:
          'Remember: 人事異動 (jinji idou) = a personnel transfer. 内示 (naiji) = an unofficial/internal notice (before the formal announcement).'
      }
    ],
    dialogue: [
      {
        speaker: 'New employee',
        japanese: '先輩、昇進の仕組みについて教えていただけますか。',
        kana: 'せんぱい、しょうしんのしくみについておしえていただけますか。',
        vietnamese: 'Senpai, could you explain how the promotion system works?'
      },
      {
        speaker: 'Senpai',
        japanese: 'うちの会社は年功序列が基本だが、最近は実績も重視されるようになってきた。',
        kana: 'うちのかいしゃはねんこうじょれつがきほんだが、さいきんはじっせきもじゅうしされるようになってきた。',
        vietnamese: 'Our company is basically seniority-based, but lately, performance has come to matter more too.'
      },
      {
        speaker: 'New employee',
        japanese: '年収はどのくらいの幅で上がるものなのでしょうか。',
        kana: 'ねんしゅうはどのくらいのはばであがるものなのでしょうか。',
        vietnamese: 'By roughly how much does annual salary increase?'
      },
      {
        speaker: 'Senpai',
        japanese: '毎年の昇給は平均3%程度だが、昇格すれば大きく変わるよ。',
        kana: 'まいとしのしょうきゅうはへいきん3パーセントていどだが、しょうかくすればおおきくかわるよ。',
        vietnamese: 'The annual raise averages about 3%, but it changes a lot if you get promoted.'
      },
      {
        speaker: 'New employee',
        japanese: '転勤の可能性もありますか。',
        kana: 'てんきんのかのうせいもありますか。',
        vietnamese: 'Is there a possibility of being transferred?'
      },
      {
        speaker: 'Senpai',
        japanese: '総合職だから転勤はあり得る。でも最近は本人の希望も考慮されるようになってきている。',
        kana: 'そうごうしょくだからてんきんはありえる。でもさいきんはほんにんのきぼうもこうりょされるようになってきている。',
        vietnamese: 'Since you\'re on the general career track, transfers are possible. But lately, personal preference is also being taken into consideration more.'
      }
    ],
    culturalNote:
      'Traditional Japanese corporate culture rests on three pillars: 終身雇用 (shuushin koyou — lifetime employment), 年功序列 (nenkou joretsu — seniority-based pay), and 企業内組合 (kigyounai kumiai — enterprise unions). However, the modern trend is shifting toward 成果主義 (performance-based systems). 総合職 (sougoushoku — the general career track) is subject to transfers, while 一般職 (ippanshoku — the general clerical track) is usually fixed to one location.'
  },

  // ── 15. Crisis Management (危機管理) ──────────────────────────
  {
    id: 'n2-conv-15',
    title: 'Crisis management',
    titleJp: '危機管理',
    level: 'N2',
    situation: 'Handling an emergency situation at a company and planning an incident response',
    patterns: [
      {
        japanese: '緊急事態が発生いたしましたので、直ちにご報告いたします。',
        kana: 'きんきゅうじたいがはっせいいたしましたので、ただちにごほうこくいたします。',
        vietnamese: 'An emergency has occurred, so I am reporting it immediately.',
        memoryTip:
          'Remember: 緊急事態 (kinkyuu jitai) = an emergency situation. 発生 (hassei) = to occur/arise. 直ちに (tadachini) = immediately (more formal than すぐに).'
      },
      {
        japanese: '危機管理マニュアルに従って、迅速に対応してください。',
        kana: 'ききかんりマニュアルにしたがって、じんそくにたいおうしてください。',
        vietnamese: 'Please follow the crisis management manual and respond quickly.',
        memoryTip:
          'Remember: 危機管理 (kiki kanri) = crisis management. 迅速 (jinsoku) = swiftly. 従って (shitagatte) = to follow/comply with.'
      }
    ],
    dialogue: [
      {
        speaker: 'Employee',
        japanese: '部長、大変です！サーバーがダウンして、顧客データにアクセスできません。',
        kana: 'ぶちょう、たいへんです！サーバーがダウンして、こきゃくデータにアクセスできません。',
        vietnamese: 'Manager, this is bad! The server is down and we can\'t access customer data.'
      },
      {
        speaker: 'Manager',
        japanese: '落ち着いてください。まず、IT部門に連絡を取ってください。',
        kana: 'おちついてください。まず、ITぶもんにれんらくをとってください。',
        vietnamese: 'Please stay calm. First, contact the IT department.'
      },
      {
        speaker: 'Employee',
        japanese: 'はい。それから、お客様への影響範囲を確認いたします。',
        kana: 'はい。それから、おきゃくさまへのえいきょうはんいをかくにんいたします。',
        vietnamese: 'Yes. After that, I\'ll check the scope of impact on our customers.'
      },
      {
        speaker: 'Manager',
        japanese: '緊急対応チームを招集してください。30分以内に対策会議を開きます。',
        kana: 'きんきゅうたいおうチームをしょうしゅうしてください。30ぷんいないにたいさくかいぎをひらきます。',
        vietnamese: 'Please assemble the emergency response team. We will hold a response meeting within 30 minutes.'
      },
      {
        speaker: 'Employee',
        japanese: '承知いたしました。関係者全員に至急連絡いたします。',
        kana: 'しょうちいたしました。かんけいしゃぜんいんにしきゅうれんらくいたします。',
        vietnamese: 'Understood. I will contact everyone involved immediately.'
      }
    ],
    culturalNote:
      'Crisis management (危機管理 — kiki kanri) is especially important in Japan due to the country\'s frequent natural disasters. Every company has a manual (マニュアル) for responses and holds regular evacuation drills (避難訓練 — hinan kunren). The basic principle is 報告・連絡・相談 (hourensou: report-contact-consult).'
  },

  // ── 16. Public Speaking (演説) ────────────────────────────────
  {
    id: 'n2-conv-16',
    title: 'Public speaking',
    titleJp: '演説・スピーチ',
    level: 'N2',
    situation: 'Giving a speech in public, presenting a viewpoint and making a persuasive argument',
    patterns: [
      {
        japanese: '本日は貴重なお時間をいただき、心より感謝申し上げます。',
        kana: 'ほんじつはきちょうなおじかんをいただき、こころよりかんしゃもうしあげます。',
        vietnamese: 'I sincerely thank you for taking your valuable time today.',
        memoryTip:
          'Remember: 貴重 (kichou) = precious/valuable. 心より (kokoro yori) = from the bottom of one\'s heart. 申し上げます is the most formal humble form of 言います.'
      },
      {
        japanese: '私が本日主張したいのは、多様性こそが社会の強みであるという点です。',
        kana: 'わたしがほんじつしゅちょうしたいのは、たようせいこそがしゃかいのつよみであるというてんです。',
        vietnamese: 'What I want to assert today is this: diversity, precisely, is society\'s strength.',
        memoryTip:
          'Remember: 主張 (shuchou) = to assert/argue. 多様性 (tayousei) = diversity. ～こそが = "it is precisely ~ that" (emphasis).'
      }
    ],
    dialogue: [
      {
        speaker: 'MC',
        japanese: 'それでは、基調講演を始めさせていただきます。',
        kana: 'それでは、きちょうこうえんをはじめさせていただきます。',
        vietnamese: 'Now, allow us to begin the keynote speech.'
      },
      {
        speaker: 'Speaker',
        japanese: '皆様、本日のテーマは「これからの日本社会と多文化共生」でございます。',
        kana: 'みなさま、ほんじつのテーマは「これからのにほんしゃかいとたぶんかきょうせい」でございます。',
        vietnamese: 'Ladies and gentlemen, today\'s theme is "The Future of Japanese Society and Multicultural Coexistence."'
      },
      {
        speaker: 'Speaker',
        japanese: '少子高齢化が進む中、外国人労働者の受け入れは避けて通れない課題です。',
        kana: 'しょうしこうれいかがすすむなか、がいこくじんろうどうしゃのうけいれはさけてとおれないかだいです。',
        vietnamese: 'As the population declines and ages, accepting foreign workers is an unavoidable issue.'
      },
      {
        speaker: 'Speaker',
        japanese: '互いの文化を尊重し、共に生きる社会を築いていくべきだと確信しております。',
        kana: 'たがいのぶんかをそんちょうし、ともにいきるしゃかいをきずいていくべきだとかくしんしております。',
        vietnamese: 'I am convinced that we should respect each other\'s cultures and build a society where we live together.'
      },
      {
        speaker: 'Audience member',
        japanese: '具体的にはどのような政策が必要だとお考えですか。',
        kana: 'ぐたいてきにはどのようなせいさくがひつようだとおかんがえですか。',
        vietnamese: 'What specific policies do you think are needed?'
      },
      {
        speaker: 'Speaker',
        japanese: '教育制度の改革と、言語サポート体制の充実が最優先だと考えます。',
        kana: 'きょういくせいどのかいかくと、げんごサポートたいせいのじゅうじつがさいゆうせんだとかんがえます。',
        vietnamese: 'I believe reforming the education system and strengthening language support are the top priorities.'
      }
    ],
    culturalNote:
      'Public speaking in Japan (演説 — enzetsu) is usually formal and clearly structured. Japanese politicians often deliver speeches on the street (街頭演説 — gaitou enzetsu), especially during elections. Japanese public speaking style tends to lean more on logic and data than emotion, unlike Western styles.'
  },

  // ── 17. Research Methodology (研究方法) ───────────────────────
  {
    id: 'n2-conv-17',
    title: 'Research methodology',
    titleJp: '研究方法論',
    level: 'N2',
    situation: 'Discussing survey, experiment, and analysis methods for research findings',
    patterns: [
      {
        japanese: '本調査では、500名を対象にアンケートを実施いたしました。',
        kana: 'ほんちょうさでは、500めいをたいしょうにアンケートをじっしいたしました。',
        vietnamese: 'For this survey, we conducted a questionnaire with 500 participants.',
        memoryTip:
          'Remember: 調査 (chousa) = a survey/investigation. 対象 (taishou) = subjects/targets. 実施 (jisshi) = to carry out. 名 (mei) = a formal counter for people.'
      },
      {
        japanese: '実験結果から、仮説が支持されたと言えます。',
        kana: 'じっけんけっかから、かせつがしじされたといえます。',
        vietnamese: 'From the experimental results, it can be said that the hypothesis was supported.',
        memoryTip:
          'Remember: 実験 (jikken) = an experiment. 仮説 (kasetsu) = a hypothesis. 支持 (shiji) = support.'
      },
      {
        japanese: '統計的に有意な差が認められました。',
        kana: 'とうけいてきにゆういなさがみとめられました。',
        vietnamese: 'A statistically significant difference was observed.',
        memoryTip:
          'Remember: 統計的 (toukeiteki) = statistically. 有意 (yuui) = significant. 認められる = to be recognized/observed.'
      }
    ],
    dialogue: [
      {
        speaker: 'Researcher A',
        japanese: '今回の実験では、対照群と実験群に分けて比較分析を行いました。',
        kana: 'こんかいのじっけんでは、たいしょうぐんとじっけんぐんにわけてひかくぶんせきをおこないました。',
        vietnamese: 'In this experiment, we divided participants into a control group and an experimental group and performed a comparative analysis.'
      },
      {
        speaker: 'Supervising professor',
        japanese: 'サンプル数は十分でしたか。',
        kana: 'サンプルすうはじゅうぶんでしたか。',
        vietnamese: 'Was the sample size sufficient?'
      },
      {
        speaker: 'Researcher A',
        japanese: 'はい、統計的有意性を確保するため、各群100名以上を確保しました。',
        kana: 'はい、とうけいてきゆういせいをかくほするため、かくぐん100めいいじょうをかくほしました。',
        vietnamese: 'Yes, to ensure statistical significance, we secured over 100 participants for each group.'
      },
      {
        speaker: 'Supervising professor',
        japanese: 'バイアスの排除についてはどのように対処しましたか。',
        kana: 'バイアスのはいじょについてはどのようにたいしょしましたか。',
        vietnamese: 'How did you handle eliminating bias?'
      },
      {
        speaker: 'Researcher A',
        japanese: '二重盲検法を採用し、主観的な判断を排除いたしました。',
        kana: 'にじゅうもうけんほうをさいようし、しゅかんてきなはんだんをはいじょいたしました。',
        vietnamese: 'We adopted a double-blind method and eliminated subjective judgment.'
      }
    ],
    culturalNote:
      'Scientific research is highly valued in Japan, with many Nobel Prize winners. Research methodology follows international standards but has its own characteristics: the 研究室 (kenkyuushitsu — lab) system led by a professor, and tight senpai-kouhai relationships. 学会 (gakkai — academic conferences) are where results are presented and debated.'
  },

  // ── 18. Cultural Exchange (文化交流) ──────────────────────────
  {
    id: 'n2-conv-18',
    title: 'Cultural exchange',
    titleJp: '文化交流',
    level: 'N2',
    situation: 'Participating in an international exchange program and discussing cross-cultural understanding',
    patterns: [
      {
        japanese: '国際交流を通じて、異文化への理解を深めることが大切だと思います。',
        kana: 'こくさいこうりゅうをつうじて、いぶんかへのりかいをふかめることがたいせつだとおもいます。',
        vietnamese: 'I think it\'s important to deepen understanding of other cultures through international exchange.',
        memoryTip:
          'Remember: 国際交流 (kokusai kouryuu) = international exchange. 異文化 (ibunka) = a different/foreign culture. ～を通じて = "through ~." 深める = to deepen.'
      },
      {
        japanese: '文化の違いを乗り越えて、相互理解を図りたいと存じます。',
        kana: 'ぶんかのちがいをのりこえて、そうごりかいをはかりたいとぞんじます。',
        vietnamese: 'I would like to overcome cultural differences and work toward mutual understanding.',
        memoryTip:
          'Remember: 乗り越える (norikoeru) = to overcome (a difficulty). 相互理解 (sougo rikai) = mutual understanding. 図る (hakaru) = to aim for/seek.'
      }
    ],
    dialogue: [
      {
        speaker: 'Coordinator',
        japanese: '今回の交流プログラムでは、ベトナムと日本の学生が共同プロジェクトに取り組みます。',
        kana: 'こんかいのこうりゅうプログラムでは、ベトナムとにほんのがくせいがきょうどうプロジェクトにとりくみます。',
        vietnamese: 'In this exchange program, Vietnamese and Japanese students will work together on a joint project.'
      },
      {
        speaker: 'Vietnamese student',
        japanese: 'お互いの食文化について紹介し合うのはいかがでしょうか。',
        kana: 'おたがいのしょくぶんかについてしょうかいしあうのはいかがでしょうか。',
        vietnamese: 'How about we introduce each other to our respective food cultures?'
      },
      {
        speaker: 'Japanese student',
        japanese: 'いいですね！ベトナム料理にはとても興味があります。',
        kana: 'いいですね！ベトナムりょうりにはとてもきょうみがあります。',
        vietnamese: 'That sounds great! I\'m very interested in Vietnamese cuisine.'
      },
      {
        speaker: 'Vietnamese student',
        japanese: '日本のおもてなし文化には感銘を受けました。ベトナムでも取り入れたいです。',
        kana: 'にほんのおもてなしぶんかにはかんめいをうけました。ベトナムでもとりいれたいです。',
        vietnamese: 'I was deeply impressed by Japan\'s culture of hospitality. I\'d like to bring that back to Vietnam too.'
      },
      {
        speaker: 'Coordinator',
        japanese: '文化の違いで戸惑うこともあるかもしれませんが、それこそが学びの機会です。',
        kana: 'ぶんかのちがいでとまどうこともあるかもしれませんが、それこそがまなびのきかいです。',
        vietnamese: 'You may feel confused at times due to cultural differences, but that is exactly what learning opportunities look like.'
      }
    ],
    culturalNote:
      'Japan runs many international exchange programs, such as the JET Programme (English teaching) and JICA (development cooperation), along with various student exchange programs. おもてなし (omotenashi — the spirit of hospitality) is a core Japanese cultural value. During exchanges, Japanese people often give おみやげ (souvenirs) as a gesture of goodwill.'
  },

  // ── 19. Complaint Escalation (上位苦情) ───────────────────────
  {
    id: 'n2-conv-19',
    title: 'Escalating a complaint',
    titleJp: '苦情のエスカレーション',
    level: 'N2',
    situation: 'A complaint has not been resolved, and the customer asks to speak with someone more senior',
    patterns: [
      {
        japanese: '先日お伝えした件について、まだ対応いただけていないようですが。',
        kana: 'せんじつおつたえしたけんについて、まだたいおういただけていないようですが。',
        vietnamese: 'Regarding the matter I raised the other day, it seems it still hasn\'t been addressed.',
        memoryTip:
          'Remember: 先日 (senjitsu) = "the other day" (more formal than この前). お伝えした = "conveyed" (honorific). ～ようですが = "it seems that ~, but..." — an indirect way of raising a complaint without directly assigning blame.'
      },
      {
        japanese: '責任者の方とお話しさせていただけないでしょうか。',
        kana: 'せきにんしゃのかたとおはなしさせていただけないでしょうか。',
        vietnamese: 'Could I possibly speak with the person in charge?',
        memoryTip:
          'Remember: 責任者 (sekininsha) = the person responsible/in charge. の方 (no kata) = more polite than の人. ～ていただけないでしょうか = the most polite way to make a request (negative + conjecture).'
      },
      {
        japanese: '誠意ある対応をしていただけなければ、然るべき措置を取らざるを得ません。',
        kana: 'せいいあるたいおうをしていただけなければ、しかるべきそちをとらざるをえません。',
        vietnamese: 'If a sincere response isn\'t forthcoming, I will have no choice but to take appropriate measures.',
        memoryTip:
          'Remember: 誠意 (seii) = sincerity. 然るべき (shikarubeki) = appropriate/fitting. 措置 (sochi) = a measure/action. ～ざるを得ない = "cannot help but ~."'
      }
    ],
    dialogue: [
      {
        speaker: 'Customer',
        japanese: '2週間前に修理を依頼したのですが、まだ何の連絡もいただいておりません。',
        kana: '2しゅうかんまえにしゅうりをいらいしたのですが、まだなんのれんらくもいただいておりません。',
        vietnamese: 'I requested a repair two weeks ago, but I still haven\'t heard anything.'
      },
      {
        speaker: 'Staff',
        japanese: '大変申し訳ございません。確認いたしますので、少々お待ちいただけますか。',
        kana: 'たいへんもうしわけございません。かくにんいたしますので、しょうしょうおまちいただけますか。',
        vietnamese: 'We are very sorry. I will check on this, could you please wait a moment?'
      },
      {
        speaker: 'Customer',
        japanese: '前回も同じことをおっしゃいましたが、改善されていません。責任者の方をお願いします。',
        kana: 'ぜんかいもおなじことをおっしゃいましたが、かいぜんされていません。せきにんしゃのかたをおねがいします。',
        vietnamese: 'You said the same thing last time, but nothing has improved. Please let me speak with the person in charge.'
      },
      {
        speaker: 'Supervisor',
        japanese: 'お客様、このたびは大変ご迷惑をおかけいたしました。店長の佐藤でございます。',
        kana: 'おきゃくさま、このたびはたいへんごめいわくをおかけいたしました。てんちょうのさとうでございます。',
        vietnamese: 'Sir/Ma\'am, we deeply apologize for the trouble caused. I am Sato, the store manager.'
      },
      {
        speaker: 'Supervisor',
        japanese: '至急対応させていただきます。本日中に修理を完了し、ご報告いたします。',
        kana: 'しきゅうたいおうさせていただきます。ほんじつちゅうにしゅうりをかんりょうし、ごほうこくいたします。',
        vietnamese: 'We will handle this immediately. We will complete the repair today and report back to you.'
      }
    ],
    culturalNote:
      'When making a complaint in Japan, people usually remain polite but firm. The phrase 「責任者を出してください」("please have the person in charge come out") is a strong signal that the customer is very unhappy. A supervisor often personally comes out to apologize (謝罪) when a situation is serious. In Japan, a written complaint (書面) carries more legal weight than a spoken one.'
  },

  // ── 20. Project Management (プロジェクト管理) ─────────────────
  {
    id: 'n2-conv-20',
    title: 'Project management',
    titleJp: 'プロジェクト管理',
    level: 'N2',
    situation: 'Managing project progress, assigning tasks, and handling deadline issues',
    patterns: [
      {
        japanese: '進捗状況を確認したところ、スケジュールに若干の遅れが生じております。',
        kana: 'しんちょくじょうきょうをかくにんしたところ、スケジュールにじゃっかんのおくれがしょうじております。',
        vietnamese: 'Upon checking the progress, there is a slight delay to the schedule.',
        memoryTip:
          'Remember: 進捗 (shinchoku) = progress. 状況 (joukyou) = a situation. 若干 (jakkan) = a slight amount. 生じる (shoujiru) = to arise/occur.'
      },
      {
        japanese: '期限日までにタスクを完了するよう、リソースを再配分いたします。',
        kana: 'きげんびまでにタスクをかんりょうするよう、リソースをさいはいぶんいたします。',
        vietnamese: 'To complete the tasks by the deadline, we will reallocate resources.',
        memoryTip:
          'Remember: 期限日 (kigenbi) = the deadline date. 完了 (kanryou) = to complete. 再配分 (saihaibun) = to reallocate.'
      }
    ],
    dialogue: [
      {
        speaker: 'PM',
        japanese: '今週の進捗会議を始めます。各チームから報告をお願いします。',
        kana: 'こんしゅうのしんちょくかいぎをはじめます。かくチームからほうこくをおねがいします。',
        vietnamese: 'Let\'s begin this week\'s progress meeting. Please have each team report.'
      },
      {
        speaker: 'Dev lead',
        japanese: '開発は80%完了しておりますが、テスト工程で問題が発生しました。',
        kana: 'かいはつは80パーセントかんりょうしておりますが、テストこうていでもんだいがはっせいしました。',
        vietnamese: 'Development is 80% complete, but an issue came up during the testing phase.'
      },
      {
        speaker: 'PM',
        japanese: 'リリース日に影響はありますか。',
        kana: 'リリースびにえいきょうはありますか。',
        vietnamese: 'Will this affect the release date?'
      },
      {
        speaker: 'Dev lead',
        japanese: '現状のままですと、3日ほど遅延する見込みです。',
        kana: 'げんじょうのままですと、3にちほどちえんするみこみです。',
        vietnamese: 'If things stay as they are, we expect about a 3-day delay.'
      },
      {
        speaker: 'PM',
        japanese: '分かりました。優先度の低いタスクを後回しにして、クリティカルパスに集中しましょう。',
        kana: 'わかりました。ゆうせんどのひくいタスクをあとまわしにして、クリティカルパスにしゅうちゅうしましょう。',
        vietnamese: 'Understood. Let\'s postpone the low-priority tasks and focus on the critical path.'
      },
      {
        speaker: 'Dev lead',
        japanese: '承知いたしました。追加の人員配置が可能であれば、間に合わせられると思います。',
        kana: 'しょうちいたしました。ついかのじんいんはいちがかのうであれば、まにあわせられるとおもいます。',
        vietnamese: 'Understood. If we can bring in additional staff, I think we can make it in time.'
      }
    ],
    culturalNote:
      'Japanese-style project management often uses the 報連相 (hourensou) method: 報告 (report), 連絡 (contact), 相談 (consult). A daily morning meeting (朝会 — choukai) is a common habit. Unlike Western Agile, Japanese projects traditionally follow a waterfall model, though more companies are adopting Scrum and Agile these days.'
  },

  // ── 21. Social Issues (社会問題) ──────────────────────────────
  {
    id: 'n2-conv-21',
    title: 'Social issues',
    titleJp: '社会問題',
    level: 'N2',
    situation: 'Discussing Japan\'s social issues: an aging population, falling birth rate, and income inequality',
    patterns: [
      {
        japanese: '高齢化社会が進む中、年金制度の持続可能性が問われています。',
        kana: 'こうれいかしゃかいがすすむなか、ねんきんせいどのじぞくかのうせいがとわれています。',
        vietnamese: 'As society continues to age, the sustainability of the pension system is being called into question.',
        memoryTip:
          'Remember: 高齢化 (koureika) = aging (of society). 年金 (nenkin) = a pension. 持続可能性 (jizoku kanousei) = sustainability. 問われる = passive, "is being questioned."'
      },
      {
        japanese: '少子化対策として、育児支援の充実が求められています。',
        kana: 'しょうしかたいさくとして、いくじしえんのじゅうじつがもとめられています。',
        vietnamese: 'As a countermeasure to the falling birth rate, strengthening childcare support is being called for.',
        memoryTip:
          'Remember: 少子化 (shoushika) = a declining birth rate. 育児支援 (ikuji shien) = childcare support. 充実 (juujitsu) = enrichment/enhancement. 求められる = to be called for.'
      },
      {
        japanese: '格差社会の拡大は、深刻な問題として認識されています。',
        kana: 'かくさしゃかいのかくだいは、しんこくなもんだいとしてにんしきされています。',
        vietnamese: 'The widening of income inequality is recognized as a serious problem.',
        memoryTip:
          'Remember: 格差 (kakusa) = a gap/disparity. 拡大 (kakudai) = an expansion. 深刻 (shinkoku) = serious. 認識 (ninshiki) = recognition.'
      }
    ],
    dialogue: [
      {
        speaker: 'Student A',
        japanese: '日本の少子高齢化問題について、どう思いますか。',
        kana: 'にほんのしょうしこうれいかもんだいについて、どうおもいますか。',
        vietnamese: 'What do you think about Japan\'s declining birth rate and aging population?'
      },
      {
        speaker: 'Student B',
        japanese: '2050年には人口が1億人を下回ると予測されていて、かなり深刻だと思います。',
        kana: '2050ねんにはじんこうが1おくにんをしたまわるとよそくされていて、かなりしんこくだとおもいます。',
        vietnamese: 'The population is projected to fall below 100 million by 2050 — I think it\'s quite serious.'
      },
      {
        speaker: 'Student A',
        japanese: '移民を受け入れるべきだという意見もありますが。',
        kana: 'いみんをうけいれるべきだというけんもありますが。',
        vietnamese: 'There\'s also an opinion that Japan should accept immigrants.'
      },
      {
        speaker: 'Student B',
        japanese: '確かに労働力不足の解決にはなりますが、社会統合の課題もありますね。',
        kana: 'たしかにろうどうりょくぶそくのかいけつにはなりますが、しゃかいとうごうのかだいもありますね。',
        vietnamese: 'That would certainly solve the labor shortage, but there are also challenges around social integration.'
      },
      {
        speaker: 'Student A',
        japanese: '貧富の格差についてはどうですか。非正規雇用の増加が心配です。',
        kana: 'ひんぷのかくさについてはどうですか。ひせいきこようのぞうかがしんぱいです。',
        vietnamese: 'What about the gap between rich and poor? I\'m worried about the rise in non-regular employment.'
      },
      {
        speaker: 'Student B',
        japanese: 'ワーキングプアの問題は見過ごせません。最低賃金の引き上げが必要だと考えます。',
        kana: 'ワーキングプアのもんだいはみすごせません。さいていちんぎんのひきあげがひつようだとかんがえます。',
        vietnamese: 'The working-poor problem can\'t be ignored. I think raising the minimum wage is necessary.'
      }
    ],
    culturalNote:
      'Japan faces one of the world\'s most severe cases of a declining birth rate and aging population (少子高齢化, shoushi koureika). The total fertility rate (合計特殊出生率) is only about 1.2, well below the replacement level of 2.1. 格差社会 (kakusa shakai — a society of disparity) emerged as a concept in the 2000s alongside the rise of non-regular employment (非正規雇用) and the working poor (ワーキングプア).'
  },

  // ── 22. Environmental Policy (環境政策) ───────────────────────
  {
    id: 'n2-conv-22',
    title: 'Environmental policy',
    titleJp: '環境政策',
    level: 'N2',
    situation: 'Discussing climate change, renewable energy, and environmental protection policy',
    patterns: [
      {
        japanese: '地球温暖化を食い止めるためには、二酸化炭素の排出削減が不可欠です。',
        kana: 'ちきゅうおんだんかをくいとめるためには、にさんかたんそのはいしゅつさくげんがふかけつです。',
        vietnamese: 'To halt global warming, reducing carbon dioxide emissions is essential.',
        memoryTip:
          'Remember: 温暖化 (ondanka) = warming. 食い止める (kuitomeru) = to halt/stop. 排出削減 (haishutsu sakugen) = emissions reduction. 不可欠 (fukaketsu) = indispensable.'
      },
      {
        japanese: '再生可能エネルギーへの転換を加速させる必要があります。',
        kana: 'さいせいかのうエネルギーへのてんかんをかそくさせるひつようがあります。',
        vietnamese: 'It\'s necessary to accelerate the shift to renewable energy.',
        memoryTip:
          'Remember: 再生可能 (saisei kanou) = renewable. 転換 (tenkan) = a shift/conversion. 加速 (kasoku) = acceleration.'
      }
    ],
    dialogue: [
      {
        speaker: 'Panelist A',
        japanese: '2050年カーボンニュートラル達成のために、何が最も重要だと思われますか。',
        kana: '2050ねんカーボンニュートラルたっせいのために、なにがもっともじゅうようだとおもわれますか。',
        vietnamese: 'What do you think is most important for achieving carbon neutrality by 2050?'
      },
      {
        speaker: 'Panelist B',
        japanese: '原子力発電の是非はさておき、再生エネルギーの普及が鍵だと考えます。',
        kana: 'げんしりょくはつでんのぜひはさておき、さいせいエネルギーのふきゅうがかぎだとかんがえます。',
        vietnamese: 'Setting aside the debate over nuclear power, I think spreading renewable energy is the key.'
      },
      {
        speaker: 'Panelist A',
        japanese: '太陽光発電のコストは下がっていますが、送電網の整備が追いついていません。',
        kana: 'たいようこうはつでんのコストはさがっていますが、そうでんもうのせいびがおいついていません。',
        vietnamese: 'The cost of solar power is coming down, but grid infrastructure development isn\'t keeping pace.'
      },
      {
        speaker: 'Panelist B',
        japanese: '企業の役割も大きいですね。ESG投資の拡大が企業行動を変えつつあります。',
        kana: 'きぎょうのやくわりもおおきいですね。ESGとうしのかくだいがきぎょうこうどうをかえつつあります。',
        vietnamese: 'The role of businesses matters a lot too. The growth of ESG investing is gradually changing corporate behavior.'
      },
      {
        speaker: 'MC',
        japanese: '個人レベルでできることは何でしょうか。',
        kana: 'こじんレベルでできることはなんでしょうか。',
        vietnamese: 'What can be done at the individual level?'
      },
      {
        speaker: 'Panelist A',
        japanese: '省エネ意識の向上と、消費行動の見直しが第一歩だと思います。',
        kana: 'しょうエネいしきのこうじょうと、しょうひこうどうのみなおしがだいいっぽだとおもいます。',
        vietnamese: 'I think the first step is raising energy-saving awareness and reconsidering our consumption habits.'
      }
    ],
    culturalNote:
      'Japan has committed to achieving carbon neutrality by 2050. After the 2011 Fukushima disaster, energy policy became a hot topic. Japan has a culture of もったいない (mottainai — "what a waste"), a philosophy of resource conservation deeply embedded in daily life. Trash sorting (ゴミ分別) in Japan is also among the strictest in the world.'
  },

  // ── 23. Philosophy of Work (仕事観) ───────────────────────────
  {
    id: 'n2-conv-23',
    title: 'A philosophy of work',
    titleJp: '仕事観',
    level: 'N2',
    situation: 'Discussing the meaning of work, ikigai, and work-life balance',
    patterns: [
      {
        japanese: '仕事にやりがいを感じることが、生きがいにつながると思います。',
        kana: 'しごとにやりがいをかんじることが、いきがいにつながるとおもいます。',
        vietnamese: 'I think feeling a sense of purpose in one\'s work connects to having a reason for living.',
        memoryTip:
          'Remember: やりがい = a sense of purpose/worth (in doing something). 生きがい (ikigai) = "a reason to live" — a famous Japanese concept. つながる = to connect/lead to.'
      },
      {
        japanese: 'ワークライフバランスを重視する傾向が若い世代を中心に広がっています。',
        kana: 'ワークライフバランスをじゅうしするけいこうがわかいせだいをちゅうしんにひろがっています。',
        vietnamese: 'The trend of valuing work-life balance is spreading, mainly among the younger generation.',
        memoryTip:
          'Remember: 重視 (juushi) = to place importance on. 傾向 (keikou) = a trend. 世代 (sedai) = a generation. を中心に = "centered on/mainly."'
      }
    ],
    dialogue: [
      {
        speaker: 'Senpai',
        japanese: '最近の若い人は仕事に対する価値観が変わってきたと感じるな。',
        kana: 'さいきんのわかいひとはしごとにたいするかちかんがかわってきたとかんじるな。',
        vietnamese: 'I feel like young people these days have changed their values around work.'
      },
      {
        speaker: 'Kouhai',
        japanese: 'そうですね。私たちの世代は、仕事だけでなく私生活も大切にしたいと思っています。',
        kana: 'そうですね。わたしたちのせだいは、しごとだけでなくしせいかつもたいせつにしたいとおもっています。',
        vietnamese: 'That\'s true. Our generation wants to value our personal life, not just work.'
      },
      {
        speaker: 'Senpai',
        japanese: '昔は会社のために自分を犠牲にするのが当たり前だったけどな。',
        kana: 'むかしはかいしゃのためにじぶんをぎせいにするのがあたりまえだったけどな。',
        vietnamese: 'In the old days, sacrificing yourself for the company was just taken for granted.'
      },
      {
        speaker: 'Kouhai',
        japanese: '確かに、でも過労死が社会問題になっている以上、働き方改革は必要だと思います。',
        kana: 'たしかに、でもかろうしがしゃかいもんだいになっているいじょう、はたらきかたかいかくはひつようだとおもいます。',
        vietnamese: 'True, but given that death from overwork has become a social issue, I think work-style reform is necessary.'
      },
      {
        speaker: 'Senpai',
        japanese: '君にとっての「生きがい」とは何だい？',
        kana: 'きみにとっての「いきがい」とはなんだい？',
        vietnamese: 'What is "ikigai" to you?'
      },
      {
        speaker: 'Kouhai',
        japanese: '好きなことで社会に貢献できることが、私の生きがいです。仕事も趣味も両立させたいです。',
        kana: 'すきなことでしゃかいにこうけんできることが、わたしのいきがいです。しごともしゅみもりょうりつさせたいです。',
        vietnamese: 'Being able to contribute to society through what I love is my ikigai. I want to balance both work and hobbies.'
      }
    ],
    culturalNote:
      'Ikigai (生きがい) is a Japanese philosophical concept of a "reason for being" — the intersection of what you love, what you\'re good at, what the world needs, and what you can be paid for. 過労死 (karoushi — death from overwork) is a distinctly Japanese phenomenon that led to the 働き方改革 (hatarakikata kaikaku — work-style reform) starting in 2019, which limits overtime hours and encourages taking paid leave.'
  },

  // ── 24. Historical Discussion (歴史) ──────────────────────────
  {
    id: 'n2-conv-24',
    title: 'Historical discussion',
    titleJp: '歴史討論',
    level: 'N2',
    situation: 'Discussing historical eras, societal change, and their influence on modern-day society',
    patterns: [
      {
        japanese: '明治維新は日本の近代化に決定的な影響を与えました。',
        kana: 'めいじいしんはにほんのきんだいかにけっていてきなえいきょうをあたえました。',
        vietnamese: 'The Meiji Restoration had a decisive influence on Japan\'s modernization.',
        memoryTip:
          'Remember: 明治維新 (Meiji Ishin) = the Meiji Restoration, the 1868 revolution. 近代化 (kindaika) = modernization. 決定的 (ketteiteki) = decisive. 影響を与える = to have an influence on.'
      },
      {
        japanese: '時代の変遷とともに、人々の価値観も大きく変化してきました。',
        kana: 'じだいのへんせんとともに、ひとびとのかちかんもおおきくへんかしてきました。',
        vietnamese: 'Along with the changing of the eras, people\'s values have also changed greatly.',
        memoryTip:
          'Remember: 時代 (jidai) = an era. 変遷 (hensen) = a transition/change over time. 価値観 (kachikan) = a sense of values. ～とともに = "along with."'
      }
    ],
    dialogue: [
      {
        speaker: 'Professor',
        japanese: '日本史の中で、最も重要な転換点は何だと思いますか。',
        kana: 'にほんしのなかで、もっともじゅうようなてんかんてんはなんだとおもいますか。',
        vietnamese: 'What do you think is the most important turning point in Japanese history?'
      },
      {
        speaker: 'Student',
        japanese: '明治維新だと思います。鎖国から開国へ、社会構造が根本から変わりました。',
        kana: 'めいじいしんだとおもいます。さこくからかいこくへ、しゃかいこうぞうがこんぽんからかわりました。',
        vietnamese: 'I think it\'s the Meiji Restoration. From national isolation to opening up, the social structure changed at its very roots.'
      },
      {
        speaker: 'Professor',
        japanese: '戦後の復興も見逃せませんね。焼け野原から経済大国になった過程は驚くべきものです。',
        kana: 'せんごのふっこうもみのがせませんね。やけのはらからけいざいたいこくになったかていはおどろくべきものです。',
        vietnamese: 'The postwar recovery is also not to be overlooked. The process of going from a scorched wasteland to an economic superpower is astonishing.'
      },
      {
        speaker: 'Student',
        japanese: '江戸時代の鎖国政策が、独自の文化発展につながったという見方もありますね。',
        kana: 'えどじだいのさこくせいさくが、どくじのぶんかはってんにつながったというみかたもありますね。',
        vietnamese: 'There\'s also a view that the isolationist policy of the Edo period led to Japan\'s uniquely developed culture.'
      },
      {
        speaker: 'Professor',
        japanese: 'その通りです。歴史は多角的に見ることが大切です。一つの出来事にも、光と影があります。',
        kana: 'そのとおりです。れきしはたかくてきにみることがたいせつです。ひとつのできごとにも、ひかりとかげがあります。',
        vietnamese: 'Exactly. It\'s important to view history from multiple angles. Even a single event has both light and shadow.'
      }
    ],
    culturalNote:
      'Japanese history is divided into eras (時代): Jomon → Yayoi → Kofun → Asuka → Nara → Heian → Kamakura → Muromachi → Azuchi-Momoyama → Edo → Meiji → Taisho → Showa → Heisei → Reiwa (present). The Meiji Restoration (1868) marked the turning point from feudalism to modernity. Japanese people also use era names (元号 — gengou) alongside the Western calendar.'
  },

  // ── 25. Emotional Expression (感情表現) ───────────────────────
  {
    id: 'n2-conv-25',
    title: 'Expressing emotion',
    titleJp: '感情表現',
    level: 'N2',
    situation: 'Expressing complex layers of emotion — sadness, joy, regret — in a Japanese context',
    patterns: [
      {
        japanese: 'この結果を聞いて、悔しくてたまりません。',
        kana: 'このけっかをきいて、くやしくてたまりません。',
        vietnamese: 'Hearing this result, I feel unbearably frustrated.',
        memoryTip:
          'Remember: 悔しい (kuyashii) = frustrated/bitter about losing or failing. ～てたまらない = "unbearably ~" (an uncontrollable, natural feeling). Different from 残念 (regrettable — milder).'
      },
      {
        japanese: '合格の知らせを受けて、嬉しさのあまり涙が出ました。',
        kana: 'ごうかくのしらせをうけて、うれしさのあまりなみだがでました。',
        vietnamese: 'On hearing the news that I passed, tears came out from being so happy.',
        memoryTip:
          'Remember: 嬉しさ (ureshisa) = joy (the noun form of 嬉しい). ～のあまり = "to the extent that ~ resulted in..." (a strong emotion triggering an action). 涙 (namida) = tears.'
      },
      {
        japanese: '親友が遠くに引っ越すと聞いて、寂しさを感じずにはいられません。',
        kana: 'しんゆうがとおくにひっこすときいて、さびしさをかんじずにはいられません。',
        vietnamese: 'Hearing that my close friend is moving far away, I can\'t help but feel lonely.',
        memoryTip:
          'Remember: 寂しさ (sabishisa) = loneliness (noun form). ～ずにはいられない = "cannot help but ~" (a spontaneous, uncontrollable feeling/action). 親友 (shinyuu) = a close friend.'
      }
    ],
    dialogue: [
      {
        speaker: 'Tanaka',
        japanese: 'コンテストの結果が出たんだ。残念ながら、入賞できなかった。',
        kana: 'コンテストのけっかがでたんだ。ざんねんながら、にゅうしょうできなかった。',
        vietnamese: 'The contest results are out. Unfortunately, I didn\'t place.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'あんなに努力したのに、本当に悔しいよね。',
        kana: 'あんなにどりょくしたのに、ほんとうにくやしいよね。',
        vietnamese: 'After putting in so much effort, that\'s really frustrating.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'うん…。正直、悔しくて夜眠れなかった。でも、挑戦したこと自体に後悔はない。',
        kana: 'うん…。しょうじき、くやしくてよるねむれなかった。でも、ちょうせんしたことじたいにこうかいはない。',
        vietnamese: 'Yeah... Honestly, I was so frustrated I couldn\'t sleep at night. But I don\'t regret having tried in the first place.'
      },
      {
        speaker: 'Suzuki',
        japanese: 'その気持ち、すごく分かるよ。でも、次こそきっとうまくいくと信じてる。',
        kana: 'そのきもち、すごくわかるよ。でも、つぎこそきっとうまくいくとしんじてる。',
        vietnamese: 'I really understand how you feel. But I believe next time will surely go well.'
      },
      {
        speaker: 'Tanaka',
        japanese: 'ありがとう。そう言ってもらえると、救われた気がする。',
        kana: 'ありがとう。そういってもらえると、すくわれたきがする。',
        vietnamese: 'Thanks. Hearing you say that makes me feel like I\'ve been saved.'
      },
      {
        speaker: 'Suzuki',
        japanese: '辛い時こそ、自分を認めてあげることが大事だよ。一緒に頑張ろう。',
        kana: 'つらいときこそ、じぶんをみとめてあげることがだいじだよ。いっしょにがんばろう。',
        vietnamese: 'It\'s precisely in tough times that it matters to acknowledge yourself. Let\'s do our best together.'
      }
    ],
    culturalNote:
      'Japanese people tend to suppress emotions in public (建前 — tatemae) while feeling deeply in private (本音 — honne). 悔しい (kuyashii) is a distinctly Japanese emotion — frustration at losing combined with a determination to do better, different from simply "angry" or "sad" in English. Crying out of 悔しい is a common scene in anime/manga. もの哀れ (mono no aware — a poignant awareness of impermanence) is a core aesthetic sensibility in Japanese culture.'
  }
];
