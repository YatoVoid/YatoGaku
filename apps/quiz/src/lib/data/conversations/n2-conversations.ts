import type { ConversationPattern } from '$lib/types/lesson';

export const N2_CONVERSATIONS: ConversationPattern[] = [
  // ── 1. Business Meeting (会議) ──────────────────────────────────
  {
    id: 'n2-conv-01',
    title: 'Cuộc họp kinh doanh',
    titleJp: '会議',
    level: 'N2',
    situation: 'Tham gia cuộc họp công ty, trình bày đề xuất và đi đến quyết định',
    patterns: [
      {
        japanese: '新しいプロジェクトについて提案がございます。',
        kana: 'あたらしいプロジェクトについてていあんがございます。',
        vietnamese: 'Tôi có một đề xuất về dự án mới.',
        memoryTip:
          'Nhớ: 提案 (ていあん) = "tề + án" → đề ra phương án → đề xuất. ございます là dạng kính ngữ của あります.'
      },
      {
        japanese: 'この件について、もう少し検討させていただけますか。',
        kana: 'このけんについて、もうすこしけんとうさせていただけますか。',
        vietnamese: 'Về vấn đề này, cho phép tôi được xem xét thêm một chút có được không?',
        memoryTip:
          'Nhớ: 検討 (けんとう) = "kiểm + thảo" → kiểm tra và thảo luận → xem xét. させていただく = xin phép được làm (khiêm nhường nhất).'
      },
      {
        japanese: 'それでは、本日の会議で決定したいと思います。',
        kana: 'それでは、ほんじつのかいぎでけっていしたいとおもいます。',
        vietnamese: 'Vậy thì, tôi muốn đưa ra quyết định trong cuộc họp hôm nay.',
        memoryTip:
          'Nhớ: 決定 (けってい) = "quyết + định" → quyết định. 本日 (ほんじつ) = 今日 dạng trang trọng dùng trong công việc.'
      }
    ],
    dialogue: [
      {
        speaker: '部長 (Trưởng phòng)',
        japanese: '皆さん、本日の議題に入りましょう。',
        kana: 'みなさん、ほんじつのぎだいにはいりましょう。',
        vietnamese: 'Mọi người, hãy bắt đầu vào chủ đề hôm nay.'
      },
      {
        speaker: '田中 (Tanaka)',
        japanese: 'はい。新製品の販売戦略について提案がございます。',
        kana: 'はい。しんせいひんのはんばいせんりゃくについてていあんがございます。',
        vietnamese: 'Vâng. Tôi có đề xuất về chiến lược bán hàng sản phẩm mới.'
      },
      {
        speaker: '部長',
        japanese: 'なるほど。具体的にはどのようなことでしょうか。',
        kana: 'なるほど。ぐたいてきにはどのようなことでしょうか。',
        vietnamese: 'Ra vậy. Cụ thể thì là điều gì?'
      },
      {
        speaker: '田中',
        japanese: 'オンラインマーケティングを強化すべきだと考えております。',
        kana: 'オンラインマーケティングをきょうかすべきだとかんがえております。',
        vietnamese: 'Tôi cho rằng nên tăng cường marketing trực tuyến.'
      },
      {
        speaker: '鈴木 (Suzuki)',
        japanese: 'その点について、もう少し検討させていただけますか。',
        kana: 'そのてんについて、もうすこしけんとうさせていただけますか。',
        vietnamese: 'Về điểm đó, cho phép tôi được xem xét thêm có được không?'
      },
      {
        speaker: '部長',
        japanese: 'では、来週までに結論を出しましょう。',
        kana: 'では、らいしゅうまでにけつろんをだしましょう。',
        vietnamese: 'Vậy thì, hãy đưa ra kết luận trước tuần sau.'
      }
    ],
    culturalNote:
      'Trong cuộc họp Nhật Bản, người ta thường không phản đối trực tiếp mà dùng cách nói gián tiếp như 「もう少し検討させていただけますか」(cho tôi xem xét thêm) thay vì nói "tôi không đồng ý". Quyết định thường được đưa ra theo hình thức đồng thuận (根回し - nemawashi), nghĩa là thảo luận riêng trước khi họp chính thức.'
  },

  // ── 2. Negotiation (交渉) ──────────────────────────────────────
  {
    id: 'n2-conv-02',
    title: 'Đàm phán',
    titleJp: '交渉',
    level: 'N2',
    situation: 'Đàm phán hợp đồng với đối tác kinh doanh, thương lượng điều kiện',
    patterns: [
      {
        japanese: '価格について再度ご検討いただければ幸いです。',
        kana: 'かかくについてさいどごけんとういただければさいわいです。',
        vietnamese: 'Nếu quý vị xem xét lại về giá cả thì thật may mắn (= Rất mong quý vị xem xét lại về giá).',
        memoryTip:
          'Nhớ: ～いただければ幸いです = cấu trúc lịch sự nhất để yêu cầu. いただく (khiêm nhường) + ければ (điều kiện) + 幸い (may mắn) → "nếu được thế thì tôi rất vui".'
      },
      {
        japanese: '納期を一週間延ばしていただきたいということでご相談に参りました。',
        kana: 'のうきをいっしゅうかんのばしていただきたいということでごそうだんにまいりました。',
        vietnamese: 'Tôi đến để bàn bạc về việc muốn xin gia hạn thời hạn giao hàng thêm một tuần.',
        memoryTip:
          'Nhớ: ～ということで = "theo nghĩa là / với nội dung là" → nối lý do với hành động. 参りました (まいりました) là dạng khiêm nhường của 来ました.'
      },
      {
        japanese: '双方にとってメリットのある条件を見つけたいと存じます。',
        kana: 'そうほうにとってメリットのあるじょうけんをみつけたいとぞんじます。',
        vietnamese: 'Tôi muốn tìm ra điều kiện có lợi cho cả hai bên.',
        memoryTip:
          'Nhớ: 存じます (ぞんじます) = dạng khiêm nhường của 思います. Dùng khi nói về suy nghĩ CỦA MÌNH với người trên. 双方 (そうほう) = song phương = hai bên.'
      }
    ],
    dialogue: [
      {
        speaker: '山本 (Yamamoto)',
        japanese: '本日はお忙しいところ、お時間をいただきありがとうございます。',
        kana: 'ほんじつはおいそがしいところ、おじかんをいただきありがとうございます。',
        vietnamese: 'Hôm nay, dù quý vị rất bận, xin cảm ơn đã dành thời gian.'
      },
      {
        speaker: '李 (Lee)',
        japanese: 'いいえ、こちらこそ。早速ですが、契約の件についてお話しさせていただけますか。',
        kana: 'いいえ、こちらこそ。さっそくですが、けいやくのけんについておはなしさせていただけますか。',
        vietnamese: 'Không có gì, bên tôi mới phải cảm ơn. Đi thẳng vào vấn đề, tôi có thể nói về vụ hợp đồng được không?'
      },
      {
        speaker: '山本',
        japanese: '価格について再度ご検討いただければ幸いです。',
        kana: 'かかくについてさいどごけんとういただければさいわいです。',
        vietnamese: 'Rất mong quý vị xem xét lại về giá cả.'
      },
      {
        speaker: '李',
        japanese: 'ご要望は承りましたが、これ以上の値下げは難しい状況でございます。',
        kana: 'ごようぼうはうけたまわりましたが、これいじょうのねさげはむずかしいじょうきょうでございます。',
        vietnamese: 'Tôi đã tiếp nhận yêu cầu, nhưng việc giảm giá thêm nữa là tình huống khó khăn.'
      },
      {
        speaker: '山本',
        japanese: 'では、数量を増やす代わりに単価を下げていただくというのはいかがでしょうか。',
        kana: 'では、すうりょうをふやすかわりにたんかをさげていただくというのはいかがでしょうか。',
        vietnamese: 'Vậy thì, thay vì tăng số lượng thì giảm đơn giá thì sao ạ?'
      },
      {
        speaker: '李',
        japanese: 'なるほど、その方向で前向きに検討させていただきます。',
        kana: 'なるほど、そのほうこうでまえむきにけんとうさせていただきます。',
        vietnamese: 'Ra vậy, tôi sẽ xem xét tích cực theo hướng đó.'
      }
    ],
    culturalNote:
      'Trong đàm phán Nhật Bản, câu 「前向きに検討させていただきます」(xem xét tích cực) không nhất thiết nghĩa là đồng ý — có thể chỉ là cách từ chối nhẹ nhàng. Người Nhật rất coi trọng việc giữ thể diện cho đối phương (面子 - mentsu), nên hiếm khi nói "không" trực tiếp. Cần đọc không khí (空気を読む - kuuki wo yomu) để hiểu ý thực sự.'
  },

  // ── 3. Academic Discussion (学術) ─────────────────────────────
  {
    id: 'n2-conv-03',
    title: 'Thảo luận học thuật',
    titleJp: '学術討論',
    level: 'N2',
    situation: 'Thảo luận về nghiên cứu tại đại học, trình bày và phản biện luận văn',
    patterns: [
      {
        japanese: 'この研究では、日本語教育における動機づけの要因を分析しました。',
        kana: 'このけんきゅうでは、にほんごきょういくにおけるどうきづけのよういんをぶんせきしました。',
        vietnamese: 'Trong nghiên cứu này, chúng tôi đã phân tích các yếu tố tạo động lực trong giáo dục tiếng Nhật.',
        memoryTip:
          'Nhớ: 研究 (けんきゅう) = "nghiên + cứu" → nghiên cứu. 分析 (ぶんせき) = "phân + tích" → phân tích. における = "trong/ở" (dạng viết, trang trọng hơn の中の).'
      },
      {
        japanese: '先行研究と比較すると、異なる結果が得られました。',
        kana: 'せんこうけんきゅうとひかくすると、ことなるけっかがえられました。',
        vietnamese: 'So sánh với nghiên cứu trước đó, chúng tôi thu được kết quả khác.',
        memoryTip:
          'Nhớ: 先行研究 (せんこうけんきゅう) = "tiên hành nghiên cứu" → nghiên cứu đi trước. 得られました = dạng bị động khả năng của 得る → "có thể thu được".'
      },
      {
        japanese: '論文の結論として、さらなる調査が必要であると考えられます。',
        kana: 'ろんぶんのけつろんとして、さらなるちょうさがひつようであるとかんがえられます。',
        vietnamese: 'Kết luận của luận văn là cần thiết phải có thêm điều tra nữa.',
        memoryTip:
          'Nhớ: 論文 (ろんぶん) = "luận + văn" → luận văn. 考えられます = bị động → "được cho rằng / có thể nghĩ rằng" (khách quan hơn 考えます).'
      }
    ],
    dialogue: [
      {
        speaker: '佐藤教授 (GS. Sato)',
        japanese: '田中さんの研究テーマについて発表をお願いします。',
        kana: 'たなかさんのけんきゅうテーマについてはっぴょうをおねがいします。',
        vietnamese: 'Xin mời Tanaka trình bày về đề tài nghiên cứu.'
      },
      {
        speaker: '田中',
        japanese: 'はい。私の論文では、バイリンガル教育の効果を分析しております。',
        kana: 'はい。わたしのろんぶんでは、バイリンガルきょういくのこうかをぶんせきしております。',
        vietnamese: 'Vâng. Trong luận văn của tôi, tôi đang phân tích hiệu quả của giáo dục song ngữ.'
      },
      {
        speaker: '佐藤教授',
        japanese: 'データの収集方法はどのようにされましたか。',
        kana: 'データのしゅうしゅうほうほうはどのようにされましたか。',
        vietnamese: 'Phương pháp thu thập dữ liệu được thực hiện như thế nào?'
      },
      {
        speaker: '田中',
        japanese: 'アンケート調査と面接調査を併用いたしました。',
        kana: 'アンケートちょうさとめんせつちょうさをへいよういたしました。',
        vietnamese: 'Tôi đã sử dụng kết hợp khảo sát bảng hỏi và khảo sát phỏng vấn.'
      },
      {
        speaker: '鈴木 (Sinh viên)',
        japanese: '先行研究との違いについて、もう少し詳しく説明していただけませんか。',
        kana: 'せんこうけんきゅうとのちがいについて、もうすこしくわしくせつめいしていただけませんか。',
        vietnamese: 'Về sự khác biệt với nghiên cứu trước, bạn có thể giải thích chi tiết hơn không?'
      },
      {
        speaker: '田中',
        japanese: '先行研究では定量的な分析が中心でしたが、本研究では定性的なアプローチも取り入れました。',
        kana: 'せんこうけんきゅうではていりょうてきなぶんせきがちゅうしんでしたが、ほんけんきゅうではていせいてきなアプローチもとりいれました。',
        vietnamese: 'Nghiên cứu trước chủ yếu phân tích định lượng, nhưng nghiên cứu này cũng đưa vào cách tiếp cận định tính.'
      }
    ],
    culturalNote:
      'Trong môi trường học thuật Nhật Bản, quan hệ thầy-trò (師弟関係 - shitei kankei) rất được coi trọng. Sinh viên dùng kính ngữ với giáo sư, và khi phản biện luận văn, người ta thường dùng cách hỏi gián tiếp như 「～していただけませんか」thay vì chỉ trích trực tiếp. Giáo sư thường được gọi là ～先生 chứ không phải ～さん.'
  },

  // ── 4. Expressing Regret (後悔) ───────────────────────────────
  {
    id: 'n2-conv-04',
    title: 'Bày tỏ sự hối tiếc',
    titleJp: '後悔',
    level: 'N2',
    situation: 'Bày tỏ sự hối tiếc về quyết định đã qua và xin lỗi trong công việc',
    patterns: [
      {
        japanese: 'もっと早く相談すればよかったです。',
        kana: 'もっとはやくそうだんすればよかったです。',
        vietnamese: 'Giá mà tôi đã trao đổi sớm hơn thì tốt rồi.',
        memoryTip:
          'Nhớ: ～ば よかった = "giá mà đã làm ~ thì tốt" → hối tiếc đã KHÔNG làm. すれば (điều kiện) + よかった (đã tốt) = regret pattern. Tưởng tượng đứng ở hiện tại nhìn lại quá khứ và thở dài.'
      },
      {
        japanese: 'ご連絡が遅くなりまして、大変申し訳ございません。',
        kana: 'ごれんらくがおそくなりまして、たいへんもうしわけございません。',
        vietnamese: 'Việc liên lạc bị chậm trễ, tôi thực sự vô cùng xin lỗi.',
        memoryTip:
          'Nhớ: 申し訳ございません (もうしわけございません) = xin lỗi trang trọng nhất. 申し訳 = "lời biện hộ" + ございません = "không có" → "không có lời nào biện hộ được" → xin lỗi sâu sắc.'
      },
      {
        japanese: 'あの時、もう少し慎重に判断すべきでした。',
        kana: 'あのとき、もうすこししんちょうにはんだんすべきでした。',
        vietnamese: 'Lúc đó, lẽ ra tôi nên phán đoán thận trọng hơn một chút.',
        memoryTip:
          'Nhớ: ～すべきでした = "lẽ ra nên đã làm ~" → hối tiếc mạnh hơn ～ばよかった vì hàm ý trách nhiệm/nghĩa vụ. すべき = should + でした = quá khứ.'
      }
    ],
    dialogue: [
      {
        speaker: '高橋 (Takahashi)',
        japanese: '課長、先日のプレゼンの件でお話がございます。',
        kana: 'かちょう、せんじつのプレゼンのけんでおはなしがございます。',
        vietnamese: 'Trưởng nhóm, tôi có chuyện muốn nói về vụ thuyết trình hôm trước.'
      },
      {
        speaker: '課長 (Trưởng nhóm)',
        japanese: 'どうしましたか。',
        kana: 'どうしましたか。',
        vietnamese: 'Có chuyện gì?'
      },
      {
        speaker: '高橋',
        japanese: '資料にミスがあったことに気づきました。確認が不十分で、大変申し訳ございません。',
        kana: 'しりょうにミスがあったことにきづきました。かくにんがふじゅうぶんで、たいへんもうしわけございません。',
        vietnamese: 'Tôi nhận ra tài liệu có sai sót. Việc kiểm tra chưa đầy đủ, tôi vô cùng xin lỗi.'
      },
      {
        speaker: '課長',
        japanese: 'そうですか。どの部分にミスがあったのですか。',
        kana: 'そうですか。どのぶぶんにミスがあったのですか。',
        vietnamese: 'Vậy à. Phần nào bị sai sót?'
      },
      {
        speaker: '高橋',
        japanese: '売上データの数字が間違っておりました。提出前にもう一度確認すればよかったです。',
        kana: 'うりあげデータのすうじがまちがっておりました。ていしゅつまえにもういちどかくにんすればよかったです。',
        vietnamese: 'Số liệu dữ liệu doanh thu bị sai. Giá mà tôi kiểm tra lại một lần nữa trước khi nộp thì tốt rồi.'
      },
      {
        speaker: '課長',
        japanese: '分かりました。今後はダブルチェックを徹底してください。訂正版を明日までに出してもらえますか。',
        kana: 'わかりました。こんごはダブルチェックをてっていしてください。ていせいばんをあしたまでにだしてもらえますか。',
        vietnamese: 'Tôi hiểu rồi. Từ nay về sau hãy kiểm tra kép triệt để. Bạn có thể nộp bản sửa trước ngày mai không?'
      }
    ],
    culturalNote:
      'Văn hóa xin lỗi (謝罪 - shazai) ở Nhật rất quan trọng. Khi mắc lỗi trong công việc, người Nhật thường: (1) nhận lỗi ngay lập tức, (2) giải thích nguyên nhân mà không viện cớ, (3) đề xuất cách khắc phục. Câu 「申し訳ございません」nặng hơn 「すみません」rất nhiều và thể hiện sự thành tâm. Cúi đầu sâu (深々とお辞儀) thường đi kèm lời xin lỗi trang trọng.'
  },

  // ── 5. Formal Letter / Email (手紙) ───────────────────────────
  {
    id: 'n2-conv-05',
    title: 'Thư / Email trang trọng',
    titleJp: '手紙・メール',
    level: 'N2',
    situation: 'Viết và đọc email/thư trang trọng trong bối cảnh kinh doanh Nhật Bản',
    patterns: [
      {
        japanese: '拝啓　時下ますますご清栄のこととお慶び申し上げます。',
        kana: 'はいけい　じかますますごせいえいのこととおよろこびもうしあげます。',
        vietnamese: 'Kính thưa, tôi xin chúc mừng quý vị ngày càng thịnh vượng.',
        memoryTip:
          'Nhớ: 拝啓 (はいけい) = "bái + khải" → cúi chào mở đầu → lời chào đầu thư. Luôn đi cặp với 敬具 (けいぐ) ở cuối thư. Giống "Dear Sir" và "Sincerely" trong tiếng Anh.'
      },
      {
        japanese: 'お忙しいところ恐れ入りますが、ご確認いただけますと幸いに存じます。',
        kana: 'おいそがしいところおそれいりますが、ごかくにんいただけますとさいわいにぞんじます。',
        vietnamese: 'Dù quý vị đang bận, thật xin lỗi, nhưng nếu được quý vị xác nhận thì tôi rất lấy làm vinh hạnh.',
        memoryTip:
          'Nhớ: 恐れ入りますが (おそれいりますが) = "sợ hãi mà đi vào" → cực kỳ khiêm tốn khi nhờ vả. ～いたします là khiêm nhường ngữ của します, dùng khi nói về hành động CỦA MÌNH.'
      },
      {
        japanese: '今後とも何卒よろしくお願いいたします。敬具',
        kana: 'こんごともなにとぞよろしくおねがいいたします。けいぐ',
        vietnamese: 'Từ nay về sau, khẩn khoản xin quý vị tiếp tục quan tâm. Kính bút.',
        memoryTip:
          'Nhớ: 何卒 (なにとぞ) = "cái gì cũng xin" → "khẩn khoản" — tăng mức độ lịch sự cho よろしくお願いします. 敬具 (けいぐ) = "kính + cụ" → kính cẩn dừng bút → kết thư.'
      }
    ],
    dialogue: [
      {
        speaker: '(件名 - Tiêu đề)',
        japanese: '新規取引のご挨拶',
        kana: 'しんきとりひきのごあいさつ',
        vietnamese: 'Lời chào về giao dịch mới'
      },
      {
        speaker: '(本文 - Nội dung)',
        japanese: '拝啓　貴社ますますご発展のこととお慶び申し上げます。',
        kana: 'はいけい　きしゃますますごはってんのこととおよろこびもうしあげます。',
        vietnamese: 'Kính thưa, tôi xin chúc mừng quý công ty ngày càng phát triển.'
      },
      {
        speaker: '(本文)',
        japanese: 'このたびは弊社製品にご関心をお寄せいただき、誠にありがとうございます。',
        kana: 'このたびはへいしゃせいひんにごかんしんをおよせいただき、まことにありがとうございます。',
        vietnamese: 'Lần này, chúng tôi thành thật cảm ơn quý vị đã quan tâm đến sản phẩm của công ty chúng tôi.'
      },
      {
        speaker: '(本文)',
        japanese: 'つきましては、カタログと見積書を同封いたしましたので、ご査収のほどお願い申し上げます。',
        kana: 'つきましては、カタログとみつもりしょをどうふういたしましたので、ごさしゅうのほどおねがいもうしあげます。',
        vietnamese: 'Về vấn đề này, chúng tôi đã đính kèm catalog và bảng báo giá, kính mong quý vị kiểm nhận.'
      },
      {
        speaker: '(本文)',
        japanese: 'ご不明な点がございましたら、お気軽にお問い合わせくださいませ。',
        kana: 'ごふめいなてんがございましたら、おきがるにおといあわせくださいませ。',
        vietnamese: 'Nếu có điểm nào chưa rõ, xin đừng ngại liên hệ.'
      },
      {
        speaker: '(結び - Kết thư)',
        japanese: '今後とも何卒よろしくお願いいたします。敬具',
        kana: 'こんごともなにとぞよろしくおねがいいたします。けいぐ',
        vietnamese: 'Từ nay về sau, khẩn khoản xin quý vị tiếp tục quan tâm. Kính bút.'
      }
    ],
    culturalNote:
      'Thư từ trang trọng Nhật Bản (ビジネスレター) có cấu trúc cố định: (1) 拝啓 mở đầu, (2) 時候の挨拶 — lời chào theo mùa, (3) nội dung chính, (4) kết thúc bằng 敬具. Email hiện đại có thể bỏ 拝啓/敬具 nhưng vẫn giữ cấu trúc lịch sự. Chú ý: 貴社 (きしゃ - quý công ty) dùng khi viết, còn 御社 (おんしゃ) dùng khi nói. 弊社 (へいしゃ - công ty tệ) là cách khiêm tốn gọi công ty mình.'
  },

  // ── 6. Job Hunting (就職活動) ─────────────────────────────────
  {
    id: 'n2-conv-06',
    title: 'Tìm việc làm',
    titleJp: '就職活動',
    level: 'N2',
    situation: 'Chuẩn bị hồ sơ xin việc, phỏng vấn tuyển dụng tại công ty Nhật',
    patterns: [
      {
        japanese: '御社の企業理念に深く共感し、志望いたしました。',
        kana: 'おんしゃのきぎょうりねんにふかくきょうかんし、しぼういたしました。',
        vietnamese: 'Tôi đã đồng cảm sâu sắc với lý tưởng doanh nghiệp của quý công ty và xin ứng tuyển.',
        memoryTip:
          'Nhớ: 御社 (おんしゃ) = quý công ty (dùng khi NÓI, khác 貴社 dùng khi VIẾT). 志望 (しぼう) = "chí + vọng" → mong muốn hướng tới → ứng tuyển. 共感 = "cộng + cảm" → đồng cảm.'
      },
      {
        japanese: '履歴書と職務経歴書を添付いたしましたので、ご査収ください。',
        kana: 'りれきしょとしょくむけいれきしょをてんぷいたしましたので、ごさしゅうください。',
        vietnamese: 'Tôi đã đính kèm hồ sơ lý lịch và bản mô tả kinh nghiệm làm việc, kính mong quý vị kiểm nhận.',
        memoryTip:
          'Nhớ: 履歴書 (りれきしょ) = "lí + lịch + thư" → CV. 職務経歴書 (しょくむけいれきしょ) = chi tiết kinh nghiệm nghề nghiệp. 添付 (てんぷ) = "thiêm + phụ" → đính kèm.'
      },
      {
        japanese: '面接の機会をいただければ、大変光栄に存じます。',
        kana: 'めんせつのきかいをいただければ、たいへんこうえいにぞんじます。',
        vietnamese: 'Nếu được cơ hội phỏng vấn, tôi thấy vô cùng vinh hạnh.',
        memoryTip:
          'Nhớ: 面接 (めんせつ) = "diện + tiếp" → gặp mặt trực tiếp → phỏng vấn. 光栄 (こうえい) = "quang + vinh" → vinh dự. いただければ = nếu nhận được (khiêm nhường + điều kiện).'
      }
    ],
    dialogue: [
      {
        speaker: '面接官 (Người phỏng vấn)',
        japanese: '本日はお越しいただき、ありがとうございます。自己紹介をお願いします。',
        kana: 'ほんじつはおこしいただき、ありがとうございます。じこしょうかいをおねがいします。',
        vietnamese: 'Hôm nay cảm ơn bạn đã đến. Xin hãy tự giới thiệu bản thân.'
      },
      {
        speaker: 'グエン (Nguyen)',
        japanese: 'はい。グエンと申します。大学では経済学を専攻しておりました。',
        kana: 'はい。グエンともうします。だいがくではけいざいがくをせんこうしておりました。',
        vietnamese: 'Vâng. Tôi tên là Nguyen. Ở đại học tôi chuyên ngành kinh tế học.'
      },
      {
        speaker: '面接官',
        japanese: '当社を志望された理由をお聞かせください。',
        kana: 'とうしゃをしぼうされたりゆうをおきかせください。',
        vietnamese: 'Xin cho biết lý do bạn ứng tuyển vào công ty chúng tôi.'
      },
      {
        speaker: 'グエン',
        japanese: '御社のグローバル展開に魅力を感じ、私の語学力を活かせると考えました。',
        kana: 'おんしゃのグローバルてんかいにみりょくをかんじ、わたしのごがくりょくをいかせるとかんがえました。',
        vietnamese: 'Tôi cảm thấy hấp dẫn bởi sự mở rộng toàn cầu của quý công ty, và nghĩ rằng có thể phát huy năng lực ngôn ngữ của mình.'
      },
      {
        speaker: '面接官',
        japanese: '入社後、どのように貢献したいとお考えですか。',
        kana: 'にゅうしゃご、どのようにこうけんしたいとおかんがえですか。',
        vietnamese: 'Sau khi vào công ty, bạn muốn đóng góp như thế nào?'
      },
      {
        speaker: 'グエン',
        japanese: 'ベトナム市場の開拓に携わり、御社の売上拡大に貢献したいと存じます。',
        kana: 'ベトナムしじょうのかいたくにたずさわり、おんしゃのうりあげかくだいにこうけんしたいとぞんじます。',
        vietnamese: 'Tôi muốn tham gia khai phá thị trường Việt Nam và đóng góp vào việc mở rộng doanh thu của quý công ty.'
      }
    ],
    culturalNote:
      '就職活動 (しゅうかつ - shuukatsu) ở Nhật có quy trình rất nghiêm ngặt. Sinh viên năm 3 bắt đầu tìm việc, mặc suit đen (リクルートスーツ), gửi エントリーシート (entry sheet) cho nhiều công ty cùng lúc. Phỏng vấn thường qua nhiều vòng. Người xin việc phải thể hiện 志望動機 (lý do ứng tuyển) rõ ràng và 自己PR (tự quảng bá bản thân) thuyết phục.'
  },

  // ── 7. Presenting Data (プレゼン) ─────────────────────────────
  {
    id: 'n2-conv-07',
    title: 'Trình bày dữ liệu',
    titleJp: 'プレゼンテーション',
    level: 'N2',
    situation: 'Thuyết trình kết quả phân tích dữ liệu bằng biểu đồ và số liệu',
    patterns: [
      {
        japanese: 'このグラフが示しているとおり、売上は前年比20%増加しております。',
        kana: 'このグラフがしめしているとおり、うりあげはぜんねんひ20パーセントぞうかしております。',
        vietnamese: 'Như biểu đồ này cho thấy, doanh thu đã tăng 20% so với năm trước.',
        memoryTip:
          'Nhớ: グラフ = graph = biểu đồ. 前年比 (ぜんねんひ) = "tiền niên tỉ" → so sánh với năm trước. ～とおり = "đúng như ~". しております = đang (khiêm nhường).'
      },
      {
        japanese: 'データを分析した結果、以下の傾向が明らかになりました。',
        kana: 'データをぶんせきしたけっか、いかのけいこうがあきらかになりました。',
        vietnamese: 'Kết quả phân tích dữ liệu cho thấy xu hướng sau đây đã trở nên rõ ràng.',
        memoryTip:
          'Nhớ: 傾向 (けいこう) = "khuynh + hướng" → xu hướng. 明らか (あきらか) = rõ ràng. 以下 (いか) = "dĩ + hạ" → từ đây trở xuống → sau đây.'
      }
    ],
    dialogue: [
      {
        speaker: '発表者 (Người trình bày)',
        japanese: 'それでは、第三四半期の業績について報告いたします。',
        kana: 'それでは、だいさんしはんきのぎょうせきについてほうこくいたします。',
        vietnamese: 'Vậy thì, tôi xin báo cáo về thành tích kinh doanh quý 3.'
      },
      {
        speaker: '発表者',
        japanese: 'こちらの棒グラフをご覧ください。売上は順調に伸びております。',
        kana: 'こちらのぼうグラフをごらんください。うりあげはじゅんちょうにのびております。',
        vietnamese: 'Xin hãy nhìn biểu đồ cột này. Doanh thu đang tăng trưởng thuận lợi.'
      },
      {
        speaker: '質問者 (Người hỏi)',
        japanese: '利益率についてはいかがでしょうか。',
        kana: 'りえきりつについてはいかがでしょうか。',
        vietnamese: 'Còn về tỷ suất lợi nhuận thì sao ạ?'
      },
      {
        speaker: '発表者',
        japanese: '円グラフで示しておりますが、利益率は若干低下しております。',
        kana: 'えんグラフでしめしておりますが、りえきりつはじゃっかんていかしております。',
        vietnamese: 'Như biểu đồ tròn cho thấy, tỷ suất lợi nhuận giảm nhẹ.'
      },
      {
        speaker: '質問者',
        japanese: 'その原因は何だとお考えですか。',
        kana: 'そのげんいんはなんだとおかんがえですか。',
        vietnamese: 'Bạn cho rằng nguyên nhân là gì?'
      },
      {
        speaker: '発表者',
        japanese: '原材料費の高騰が主な要因と分析しております。対策案は次のスライドでご説明いたします。',
        kana: 'げんざいりょうひのこうとうがおもなよういんとぶんせきしております。たいさくあんはつぎのスライドでごせつめいいたします。',
        vietnamese: 'Chúng tôi phân tích rằng yếu tố chính là giá nguyên vật liệu tăng cao. Phương án đối sách sẽ được giải thích ở slide tiếp theo.'
      }
    ],
    culturalNote:
      'Thuyết trình kinh doanh Nhật Bản thường tuân theo cấu trúc 起承転結 (khởi-thừa-chuyển-kết). Người trình bày dùng nhiều kính ngữ như ご覧ください (xin hãy xem) thay vì 見てください. Biểu đồ cột (棒グラフ), biểu đồ tròn (円グラフ), biểu đồ đường (折れ線グラフ) là công cụ trình bày phổ biến.'
  },

  // ── 8. Customer Service (接客) ────────────────────────────────
  {
    id: 'n2-conv-08',
    title: 'Chăm sóc khách hàng',
    titleJp: '接客対応',
    level: 'N2',
    situation: 'Tiếp đón khách hàng, xử lý phàn nàn và giải quyết khiếu nại',
    patterns: [
      {
        japanese: 'お客様、大変お待たせいたしました。ご用件をお伺いいたします。',
        kana: 'おきゃくさま、たいへんおまたせいたしました。ごようけんをおうかがいいたします。',
        vietnamese: 'Thưa quý khách, xin lỗi đã để quý khách chờ lâu. Tôi xin nghe yêu cầu của quý khách.',
        memoryTip:
          'Nhớ: お客様 (おきゃくさま) = "khách + sama" → quý khách (trang trọng nhất). お伺い (おうかがい) = khiêm nhường ngữ của 聞く → "xin được nghe". いたします = khiêm nhường của します.'
      },
      {
        japanese: 'ご不便をおかけしまして、誠に申し訳ございません。',
        kana: 'ごふべんをおかけしまして、まことにもうしわけございません。',
        vietnamese: 'Đã gây bất tiện cho quý khách, thành thật xin lỗi.',
        memoryTip:
          'Nhớ: ご不便 (ごふべん) = "bất + tiện" → sự bất tiện. おかけする = gây ra (khiêm nhường). 誠に (まことに) = thực sự / thành thật → mạnh hơn 本当に.'
      },
      {
        japanese: '早急に対応させていただきます。',
        kana: 'さっきゅうにたいおうさせていただきます。',
        vietnamese: 'Tôi sẽ xin phép xử lý ngay lập tức.',
        memoryTip:
          'Nhớ: 早急 (さっきゅう) = "tảo + cấp" → nhanh chóng khẩn cấp. 対応 (たいおう) = "đối + ứng" → đối ứng / xử lý. させていただく = xin phép được làm.'
      }
    ],
    dialogue: [
      {
        speaker: 'お客様 (Khách hàng)',
        japanese: 'すみません、先日購入した商品に不具合があるのですが。',
        kana: 'すみません、せんじつこうにゅうしたしょうひんにふぐあいがあるのですが。',
        vietnamese: 'Xin lỗi, sản phẩm tôi mua hôm trước có lỗi.'
      },
      {
        speaker: '店員 (Nhân viên)',
        japanese: 'ご不便をおかけしまして、誠に申し訳ございません。詳しくお聞かせいただけますか。',
        kana: 'ごふべんをおかけしまして、まことにもうしわけございません。くわしくおきかせいただけますか。',
        vietnamese: 'Gây bất tiện cho quý khách, thành thật xin lỗi. Quý khách có thể cho biết chi tiết được không?'
      },
      {
        speaker: 'お客様',
        japanese: '電源を入れても画面が表示されないんです。',
        kana: 'でんげんをいれてもがめんがひょうじされないんです。',
        vietnamese: 'Dù bật nguồn nhưng màn hình không hiển thị.'
      },
      {
        speaker: '店員',
        japanese: '承知いたしました。すぐに新しい商品と交換させていただきます。',
        kana: 'しょうちいたしました。すぐにあたらしいしょうひんとこうかんさせていただきます。',
        vietnamese: 'Tôi hiểu rồi ạ. Tôi sẽ đổi ngay cho quý khách sản phẩm mới.'
      },
      {
        speaker: 'お客様',
        japanese: '返金は可能ですか。',
        kana: 'へんきんはかのうですか。',
        vietnamese: 'Hoàn tiền có được không?'
      },
      {
        speaker: '店員',
        japanese: 'はい、もちろんでございます。返金手続きを進めさせていただきます。レシートをお持ちでしょうか。',
        kana: 'はい、もちろんでございます。へんきんてつづきをすすめさせていただきます。レシートをおもちでしょうか。',
        vietnamese: 'Vâng, tất nhiên ạ. Tôi sẽ tiến hành thủ tục hoàn tiền. Quý khách có mang hóa đơn không ạ?'
      }
    ],
    culturalNote:
      'Dịch vụ khách hàng Nhật Bản (接客 - settai) nổi tiếng thế giới với tiêu chuẩn 「お客様は神様です」(khách hàng là thần). Nhân viên luôn dùng kính ngữ tối đa, cúi chào 45 độ khi xin lỗi. Ngay cả khi khách hàng sai, nhân viên vẫn phải nhẹ nhàng và không bao giờ tranh cãi trực tiếp.'
  },

  // ── 9. Real Estate (不動産) ───────────────────────────────────
  {
    id: 'n2-conv-09',
    title: 'Bất động sản',
    titleJp: '不動産',
    level: 'N2',
    situation: 'Tìm kiếm nhà ở, thảo luận hợp đồng thuê hoặc mua bán bất động sản',
    patterns: [
      {
        japanese: '駅から徒歩10分以内の物件を探しているのですが。',
        kana: 'えきからとほ10ぷんいないのぶっけんをさがしているのですが。',
        vietnamese: 'Tôi đang tìm bất động sản trong vòng 10 phút đi bộ từ ga.',
        memoryTip:
          'Nhớ: 物件 (ぶっけん) = "vật + kiện" → bất động sản (nhà, phòng cho thuê). 徒歩 (とほ) = "đồ + bộ" → đi bộ. 以内 (いない) = "dĩ + nội" → trong phạm vi.'
      },
      {
        japanese: '賃貸契約の更新について確認させていただきたいのですが。',
        kana: 'ちんたいけいやくのこうしんについてかくにんさせていただきたいのですが。',
        vietnamese: 'Tôi muốn xin xác nhận về việc gia hạn hợp đồng thuê nhà.',
        memoryTip:
          'Nhớ: 賃貸 (ちんたい) = "nhâm + đại" → cho thuê. 契約 (けいやく) = "khế + ước" → hợp đồng. 更新 (こうしん) = "canh + tân" → gia hạn / cập nhật.'
      }
    ],
    dialogue: [
      {
        speaker: '客 (Khách)',
        japanese: '一人暮らし向けの1LDKの物件を探しております。',
        kana: 'ひとりぐらしむけの1LDKのぶっけんをさがしております。',
        vietnamese: 'Tôi đang tìm bất động sản 1LDK phù hợp cho sống một mình.'
      },
      {
        speaker: '不動産屋 (Nhân viên BĐS)',
        japanese: 'ご予算はおいくらぐらいをお考えでしょうか。',
        kana: 'ごよさんはおいくらぐらいをおかんがえでしょうか。',
        vietnamese: 'Quý khách dự tính ngân sách khoảng bao nhiêu ạ?'
      },
      {
        speaker: '客',
        japanese: '家賃は月8万円以内で、礼金なしの物件が希望です。',
        kana: 'やちんはつき8まんえんいないで、れいきんなしのぶっけんがきぼうです。',
        vietnamese: 'Tiền thuê nhà trong 80,000 yên/tháng, mong muốn bất động sản không có tiền lễ.'
      },
      {
        speaker: '不動産屋',
        japanese: 'こちらの物件はいかがでしょうか。築5年で、南向きの角部屋です。',
        kana: 'こちらのぶっけんはいかがでしょうか。ちく5ねんで、みなみむきのかどべやです。',
        vietnamese: 'Bất động sản này thì sao ạ? Xây 5 năm, phòng góc hướng nam.'
      },
      {
        speaker: '客',
        japanese: '敷金と仲介手数料はどのくらいかかりますか。',
        kana: 'しききんとちゅうかいてすうりょうはどのくらいかかりますか。',
        vietnamese: 'Tiền cọc và phí môi giới khoảng bao nhiêu?'
      },
      {
        speaker: '不動産屋',
        japanese: '敷金は家賃1ヶ月分、仲介手数料も1ヶ月分となっております。内見のご予約はいつがよろしいですか。',
        kana: 'しききんはやちん1かげつぶん、ちゅうかいてすうりょうも1かげつぶんとなっております。ないけんのごよやくはいつがよろしいですか。',
        vietnamese: 'Tiền cọc bằng 1 tháng tiền thuê, phí môi giới cũng 1 tháng. Quý khách muốn đặt lịch xem nhà khi nào ạ?'
      }
    ],
    culturalNote:
      'Thuê nhà ở Nhật có nhiều khoản phí đặc biệt: 敷金 (しききん - tiền cọc, thường được trả lại), 礼金 (れいきん - tiền lễ cảm ơn chủ nhà, KHÔNG trả lại), 仲介手数料 (ちゅうかいてすうりょう - phí môi giới). 1LDK = 1 phòng ngủ + phòng khách-ăn-bếp. Người nước ngoài thường cần 保証人 (ほしょうにん - người bảo lãnh) hoặc sử dụng 保証会社 (công ty bảo lãnh).'
  },

  // ── 10. Legal Matters (法律) ──────────────────────────────────
  {
    id: 'n2-conv-10',
    title: 'Vấn đề pháp lý',
    titleJp: '法律問題',
    level: 'N2',
    situation: 'Tư vấn pháp lý về hợp đồng, vi phạm và bồi thường thiệt hại',
    patterns: [
      {
        japanese: '契約書の内容を確認したところ、いくつかの問題点が見つかりました。',
        kana: 'けいやくしょのないようをかくにんしたところ、いくつかのもんだいてんがみつかりました。',
        vietnamese: 'Khi kiểm tra nội dung hợp đồng, tôi phát hiện một số vấn đề.',
        memoryTip:
          'Nhớ: 契約書 (けいやくしょ) = "khế ước thư" → văn bản hợp đồng. ～したところ = khi làm ~ thì (phát hiện kết quả). 問題点 (もんだいてん) = điểm có vấn đề.'
      },
      {
        japanese: '相手方が契約に違反した場合、損害賠償を請求できます。',
        kana: 'あいてがたがけいやくにいはんしたばあい、そんがいばいしょうをせいきゅうできます。',
        vietnamese: 'Trong trường hợp bên đối phương vi phạm hợp đồng, có thể yêu cầu bồi thường thiệt hại.',
        memoryTip:
          'Nhớ: 違反 (いはん) = "vi + phản" → vi phạm. 損害賠償 (そんがいばいしょう) = "tổn hại bồi thường" → bồi thường thiệt hại. 請求 (せいきゅう) = "thỉnh + cầu" → yêu cầu / đòi.'
      },
      {
        japanese: '弁護士に相談されることをお勧めいたします。',
        kana: 'べんごしにそうだんされることをおすすめいたします。',
        vietnamese: 'Tôi khuyên quý vị nên tham vấn luật sư.',
        memoryTip:
          'Nhớ: 弁護士 (べんごし) = "biện + hộ + sĩ" → người biện hộ → luật sư. ～されることをお勧めします = cách lịch sự để khuyên ai đó nên làm gì.'
      }
    ],
    dialogue: [
      {
        speaker: '相談者 (Người tư vấn)',
        japanese: '先生、取引先との契約トラブルについてご相談があるのですが。',
        kana: 'せんせい、とりひきさきとのけいやくトラブルについてごそうだんがあるのですが。',
        vietnamese: 'Thưa luật sư, tôi có vấn đề muốn tư vấn về tranh chấp hợp đồng với đối tác.'
      },
      {
        speaker: '弁護士 (Luật sư)',
        japanese: 'どのような状況か、詳しくお聞かせいただけますか。',
        kana: 'どのようなじょうきょうか、くわしくおきかせいただけますか。',
        vietnamese: 'Tình huống như thế nào, bạn có thể cho biết chi tiết được không?'
      },
      {
        speaker: '相談者',
        japanese: '納品された商品が契約の仕様と異なっていたのです。',
        kana: 'のうひんされたしょうひんがけいやくのしようとことなっていたのです。',
        vietnamese: 'Sản phẩm được giao khác với quy cách trong hợp đồng.'
      },
      {
        speaker: '弁護士',
        japanese: '契約書に基づいて、損害賠償の請求が可能と考えられます。',
        kana: 'けいやくしょにもとづいて、そんがいばいしょうのせいきゅうがかのうとかんがえられます。',
        vietnamese: 'Dựa trên hợp đồng, việc yêu cầu bồi thường thiệt hại được cho là khả thi.'
      }
    ],
    culturalNote:
      'Nhật Bản là xã hội ít kiện tụng so với phương Tây. Người Nhật thường ưu tiên giải quyết tranh chấp ngoài tòa qua 示談 (じだん - thương lượng riêng) hoặc 調停 (ちょうてい - hòa giải có trung gian). Luật sư ở Nhật gọi là 弁護士, và để trở thành luật sư phải vượt qua kỳ thi tư pháp (司法試験) cực kỳ khó khăn.'
  },

  // ── 11. Medical Consultation (医療相談) ────────────────────────
  {
    id: 'n2-conv-11',
    title: 'Tư vấn y tế',
    titleJp: '医療相談',
    level: 'N2',
    situation: 'Khám bệnh, mô tả triệu chứng và thảo luận phương pháp điều trị',
    patterns: [
      {
        japanese: '一週間ほど前から頭痛と微熱の症状が続いております。',
        kana: 'いっしゅうかんほどまえからずつうとびねつのしょうじょうがつづいております。',
        vietnamese: 'Từ khoảng một tuần trước, triệu chứng đau đầu và sốt nhẹ vẫn tiếp tục.',
        memoryTip:
          'Nhớ: 症状 (しょうじょう) = "chứng + trạng" → triệu chứng. 微熱 (びねつ) = "vi + nhiệt" → sốt nhẹ. 頭痛 (ずつう) = "đầu + thống" → đau đầu. ～ほど前から = từ khoảng ~ trước.'
      },
      {
        japanese: '精密検査の結果、特に異常は見られませんでした。',
        kana: 'せいみつけんさのけっか、とくにいじょうはみられませんでした。',
        vietnamese: 'Kết quả xét nghiệm chi tiết cho thấy không có bất thường đặc biệt.',
        memoryTip:
          'Nhớ: 精密検査 (せいみつけんさ) = "tinh mật kiểm tra" → xét nghiệm chi tiết. 異常 (いじょう) = "dị + thường" → bất thường. 見られません = không được thấy (bị động).'
      },
      {
        japanese: '治療方針について、いくつかの選択肢がございます。',
        kana: 'ちりょうほうしんについて、いくつかのせんたくしがございます。',
        vietnamese: 'Về phương châm điều trị, có một số lựa chọn.',
        memoryTip:
          'Nhớ: 治療 (ちりょう) = "trị + liệu" → điều trị. 方針 (ほうしん) = "phương + châm" → phương châm / hướng đi. 選択肢 (せんたくし) = "tuyển trạch chi" → lựa chọn.'
      }
    ],
    dialogue: [
      {
        speaker: '患者 (Bệnh nhân)',
        japanese: '先生、最近めまいがひどくて、日常生活に支障が出ています。',
        kana: 'せんせい、さいきんめまいがひどくて、にちじょうせいかつにししょうがでています。',
        vietnamese: 'Bác sĩ, gần đây chóng mặt rất nặng, ảnh hưởng đến sinh hoạt hàng ngày.'
      },
      {
        speaker: '医師 (Bác sĩ)',
        japanese: 'いつ頃から症状が出始めましたか。',
        kana: 'いつごろからしょうじょうがではじめましたか。',
        vietnamese: 'Triệu chứng bắt đầu xuất hiện từ khoảng khi nào?'
      },
      {
        speaker: '患者',
        japanese: '二週間ほど前からです。特に朝起きた時にひどいです。',
        kana: 'にしゅうかんほどまえからです。とくにあさおきたときにひどいです。',
        vietnamese: 'Từ khoảng hai tuần trước. Đặc biệt nặng khi thức dậy buổi sáng.'
      },
      {
        speaker: '医師',
        japanese: '血液検査とMRI検査を受けていただきたいのですが、よろしいでしょうか。',
        kana: 'けつえきけんさとMRIけんさをうけていただきたいのですが、よろしいでしょうか。',
        vietnamese: 'Tôi muốn bạn làm xét nghiệm máu và MRI, được không ạ?'
      },
      {
        speaker: '患者',
        japanese: 'はい、お願いします。何か重大な病気の可能性はありますか。',
        kana: 'はい、おねがいします。なにかじゅうだいなびょうきのかのうせいはありますか。',
        vietnamese: 'Vâng, xin bác sĩ. Có khả năng mắc bệnh nghiêm trọng nào không?'
      },
      {
        speaker: '医師',
        japanese: '検査結果を見てから判断いたしますが、過度にご心配なさらないでください。',
        kana: 'けんさけっかをみてからはんだんいたしますが、かどにごしんぱいなさらないでください。',
        vietnamese: 'Tôi sẽ phán đoán sau khi xem kết quả xét nghiệm, nhưng xin đừng lo lắng quá mức.'
      }
    ],
    culturalNote:
      'Hệ thống y tế Nhật Bản có bảo hiểm sức khỏe toàn dân (国民健康保険). Bệnh nhân chỉ trả 30% chi phí. Khi đi khám, cần mang thẻ bảo hiểm (保険証) và khám ở phòng khám nhỏ (クリニック) trước, nếu cần sẽ được giới thiệu đến bệnh viện lớn (紹介状). Bác sĩ thường được gọi là 先生.'
  },

  // ── 12. Tax & Finance (税金) ──────────────────────────────────
  {
    id: 'n2-conv-12',
    title: 'Thuế và tài chính',
    titleJp: '税金・財務',
    level: 'N2',
    situation: 'Khai thuế thu nhập, tư vấn về tiết kiệm thuế và quản lý tài chính',
    patterns: [
      {
        japanese: '確定申告の期限が近づいておりますので、早めの準備をお勧めします。',
        kana: 'かくていしんこくのきげんがちかづいておりますので、はやめのじゅんびをおすすめします。',
        vietnamese: 'Vì hạn nộp khai thuế đang đến gần, tôi khuyên nên chuẩn bị sớm.',
        memoryTip:
          'Nhớ: 確定申告 (かくていしんこく) = "xác định thân cáo" → khai thuế thu nhập. 期限 (きげん) = "kỳ + hạn" → thời hạn. 近づく = đến gần.'
      },
      {
        japanese: '医療費控除を申請すれば、節税になる可能性があります。',
        kana: 'いりょうひこうじょをしんせいすれば、せつぜいになるかのうせいがあります。',
        vietnamese: 'Nếu xin khấu trừ chi phí y tế, có khả năng tiết kiệm thuế.',
        memoryTip:
          'Nhớ: 控除 (こうじょ) = "khống + trừ" → khấu trừ. 節税 (せつぜい) = "tiết + thuế" → tiết kiệm thuế. 医療費 (いりょうひ) = chi phí y tế. 申請 (しんせい) = "thân + thỉnh" → nộp đơn.'
      }
    ],
    dialogue: [
      {
        speaker: '相談者 (Người tư vấn)',
        japanese: 'フリーランスとして初めての確定申告なのですが、何から始めればよいですか。',
        kana: 'フリーランスとしてはじめてのかくていしんこくなのですが、なにからはじめればよいですか。',
        vietnamese: 'Đây là lần đầu tôi khai thuế với tư cách freelancer, nên bắt đầu từ đâu?'
      },
      {
        speaker: '税理士 (Kế toán thuế)',
        japanese: 'まず、収入と経費の記録を整理していただく必要があります。',
        kana: 'まず、しゅうにゅうときんぴのきろくをせいりしていただくひつようがあります。',
        vietnamese: 'Trước hết, cần phải sắp xếp lại hồ sơ thu nhập và chi phí.'
      },
      {
        speaker: '相談者',
        japanese: '自宅で仕事をしているのですが、家賃の一部は経費として計上できますか。',
        kana: 'じたくでしごとをしているのですが、やちんのいちぶはけいひとしてけいじょうできますか。',
        vietnamese: 'Tôi làm việc tại nhà, vậy một phần tiền thuê nhà có thể tính vào chi phí không?'
      },
      {
        speaker: '税理士',
        japanese: 'はい、事業使用面積の割合に応じて、経費に算入できます。',
        kana: 'はい、じぎょうしようめんせきのわりあいにおうじて、けいひにさんにゅうできます。',
        vietnamese: 'Vâng, theo tỷ lệ diện tích sử dụng cho công việc, có thể tính vào chi phí.'
      },
      {
        speaker: '相談者',
        japanese: '青色申告のメリットについても教えていただけますか。',
        kana: 'あおいろしんこくのメリットについてもおしえていただけますか。',
        vietnamese: 'Bạn có thể cho tôi biết về ưu điểm của khai thuế sổ xanh không?'
      },
      {
        speaker: '税理士',
        japanese: '青色申告では最大65万円の特別控除が受けられますので、大変お得です。',
        kana: 'あおいろしんこくではさいだい65まんえんのとくべつこうじょがうけられますので、たいへんおとくです。',
        vietnamese: 'Với khai thuế sổ xanh, được nhận khấu trừ đặc biệt tối đa 650,000 yên, rất có lợi.'
      }
    ],
    culturalNote:
      'Ở Nhật, nhân viên công ty thường không cần tự khai thuế vì công ty làm 年末調整 (ねんまつちょうせい - điều chỉnh cuối năm). Nhưng freelancer, người có thu nhập phụ trên 200,000 yên phải tự làm 確定申告. 青色申告 (sổ xanh) phức tạp hơn nhưng được ưu đãi thuế nhiều hơn 白色申告 (sổ trắng).'
  },

  // ── 13. Education System (教育) ───────────────────────────────
  {
    id: 'n2-conv-13',
    title: 'Hệ thống giáo dục',
    titleJp: '教育制度',
    level: 'N2',
    situation: 'Thảo luận về thi cử, bằng cấp và hệ thống tiến học ở Nhật Bản',
    patterns: [
      {
        japanese: '入試に合格するためには、偏差値60以上が必要だと言われています。',
        kana: 'にゅうしにごうかくするためには、へんさち60いじょうがひつようだといわれています。',
        vietnamese: 'Để đỗ kỳ thi tuyển sinh, người ta nói rằng cần điểm hensachi trên 60.',
        memoryTip:
          'Nhớ: 入試 (にゅうし) = "nhập + thí" → thi tuyển sinh. 合格 (ごうかく) = "hợp + cách" → đỗ. 偏差値 (へんさち) = chỉ số đánh giá năng lực (trung bình = 50). ～と言われている = người ta nói rằng.'
      },
      {
        japanese: '学歴社会と呼ばれる日本では、大学名が就職に大きく影響します。',
        kana: 'がくれきしゃかいとよばれるにほんでは、だいがくめいがしゅうしょくにおおきくえいきょうします。',
        vietnamese: 'Ở Nhật Bản — được gọi là xã hội trọng bằng cấp — tên trường đại học ảnh hưởng lớn đến việc tìm việc.',
        memoryTip:
          'Nhớ: 学歴 (がくれき) = "học + lịch" → học vấn / bằng cấp. 学歴社会 = xã hội trọng bằng cấp. ～と呼ばれる = được gọi là. 影響 (えいきょう) = "ảnh + hưởng" → ảnh hưởng.'
      }
    ],
    dialogue: [
      {
        speaker: '保護者 (Phụ huynh)',
        japanese: '先生、息子の進学について相談させていただきたいのですが。',
        kana: 'せんせい、むすこのしんがくについてそうだんさせていただきたいのですが。',
        vietnamese: 'Thưa cô, tôi muốn trao đổi về việc tiến học của con trai tôi.'
      },
      {
        speaker: '教師 (Giáo viên)',
        japanese: 'はい、もちろんです。現在の成績から見ますと、いくつかの選択肢がございます。',
        kana: 'はい、もちろんです。げんざいのせいせきからみますと、いくつかのせんたくしがございます。',
        vietnamese: 'Vâng, tất nhiên. Từ thành tích hiện tại, có một số lựa chọn.'
      },
      {
        speaker: '保護者',
        japanese: '推薦入試と一般入試、どちらが有利でしょうか。',
        kana: 'すいせんにゅうしといっぱんにゅうし、どちらがゆうりでしょうか。',
        vietnamese: 'Thi tuyển sinh theo diện giới thiệu và thi chung, cái nào có lợi hơn?'
      },
      {
        speaker: '教師',
        japanese: 'お子さんの場合、内申点が高いので推薦入試も十分狙えると思います。',
        kana: 'おこさんのばあい、ないしんてんがたかいのですいせんにゅうしもじゅうぶんねらえるとおもいます。',
        vietnamese: 'Trường hợp con bạn, vì điểm đánh giá nội bộ cao nên thi diện giới thiệu cũng hoàn toàn có thể nhắm được.'
      },
      {
        speaker: '保護者',
        japanese: '塾に通わせるべきでしょうか。',
        kana: 'じゅくにかよわせるべきでしょうか。',
        vietnamese: 'Có nên cho cháu đi học thêm không ạ?'
      },
      {
        speaker: '教師',
        japanese: '志望校のレベルによりますが、苦手科目を補うために部分的に利用されるのもよいかと思います。',
        kana: 'しぼうこうのレベルによりますが、にがてかもくをおぎなうためにぶぶんてきにりようされるのもよいかとおもいます。',
        vietnamese: 'Tùy thuộc vào trình độ trường mục tiêu, nhưng tôi nghĩ việc sử dụng một phần để bổ sung môn yếu cũng tốt.'
      }
    ],
    culturalNote:
      'Hệ thống giáo dục Nhật gồm 6-3-3-4: tiểu học 6 năm, trung học cơ sở 3 năm (nghĩa vụ), trung học phổ thông 3 năm, đại học 4 năm. 偏差値 (hensachi) là hệ thống đánh giá riêng của Nhật (50 = trung bình). 塾 (juku - học thêm) rất phổ biến, nhiều học sinh đi học thêm từ tiểu học. Áp lực thi cử gọi là 受験戦争 (juken sensou - chiến tranh thi cử).'
  },

  // ── 14. Corporate Culture (企業文化) ──────────────────────────
  {
    id: 'n2-conv-14',
    title: 'Văn hóa doanh nghiệp',
    titleJp: '企業文化',
    level: 'N2',
    situation: 'Thảo luận về chế độ lương, thăng tiến và quản lý nhân sự trong công ty Nhật',
    patterns: [
      {
        japanese: '年功序列制度では、勤続年数に応じて給与が上がります。',
        kana: 'ねんこうじょれつせいどでは、きんぞくねんすうにおうじてきゅうよがあがります。',
        vietnamese: 'Trong chế độ thâm niên, lương tăng theo số năm làm việc liên tục.',
        memoryTip:
          'Nhớ: 年功序列 (ねんこうじょれつ) = "niên công tự liệt" → xếp hạng theo thâm niên. 勤続年数 (きんぞくねんすう) = số năm làm việc liên tục. 応じて = tùy theo / theo.'
      },
      {
        japanese: '最近は成果主義を導入する企業が増えてきました。',
        kana: 'さいきんはせいかしゅぎをどうにゅうするきぎょうがふえてきました。',
        vietnamese: 'Gần đây, các doanh nghiệp đưa vào chủ nghĩa trọng thành quả ngày càng nhiều.',
        memoryTip:
          'Nhớ: 成果主義 (せいかしゅぎ) = "thành quả chủ nghĩa" → trọng thành tích. 導入 (どうにゅう) = "đạo + nhập" → đưa vào / áp dụng. ～てきました = đã dần dần ~.'
      },
      {
        japanese: '人事異動の内示が出ましたので、ご報告いたします。',
        kana: 'じんじいどうのないじがでましたので、ごほうこくいたします。',
        vietnamese: 'Thông báo nội bộ về điều chuyển nhân sự đã ra, tôi xin báo cáo.',
        memoryTip:
          'Nhớ: 人事異動 (じんじいどう) = "nhân sự dị động" → điều chuyển nhân sự. 内示 (ないじ) = "nội + thị" → thông báo nội bộ (trước thông báo chính thức).'
      }
    ],
    dialogue: [
      {
        speaker: '新入社員 (Nhân viên mới)',
        japanese: '先輩、昇進の仕組みについて教えていただけますか。',
        kana: 'せんぱい、しょうしんのしくみについておしえていただけますか。',
        vietnamese: 'Senpai, anh có thể chỉ cho tôi về cơ chế thăng tiến không?'
      },
      {
        speaker: '先輩 (Senpai)',
        japanese: 'うちの会社は年功序列が基本だが、最近は実績も重視されるようになってきた。',
        kana: 'うちのかいしゃはねんこうじょれつがきほんだが、さいきんはじっせきもじゅうしされるようになってきた。',
        vietnamese: 'Công ty mình cơ bản là thâm niên, nhưng gần đây thành tích cũng được coi trọng.'
      },
      {
        speaker: '新入社員',
        japanese: '年収はどのくらいの幅で上がるものなのでしょうか。',
        kana: 'ねんしゅうはどのくらいのはばであがるものなのでしょうか。',
        vietnamese: 'Thu nhập năm tăng theo biên độ khoảng bao nhiêu?'
      },
      {
        speaker: '先輩',
        japanese: '毎年の昇給は平均3%程度だが、昇格すれば大きく変わるよ。',
        kana: 'まいとしのしょうきゅうはへいきん3パーセントていどだが、しょうかくすればおおきくかわるよ。',
        vietnamese: 'Tăng lương hàng năm trung bình khoảng 3%, nhưng nếu lên chức thì thay đổi lớn.'
      },
      {
        speaker: '新入社員',
        japanese: '転勤の可能性もありますか。',
        kana: 'てんきんのかのうせいもありますか。',
        vietnamese: 'Có khả năng chuyển công tác không?'
      },
      {
        speaker: '先輩',
        japanese: '総合職だから転勤はあり得る。でも最近は本人の希望も考慮されるようになってきている。',
        kana: 'そうごうしょくだからてんきんはありえる。でもさいきんはほんにんのきぼうもこうりょされるようになってきている。',
        vietnamese: 'Vì là chức tổng hợp nên chuyển công tác có thể xảy ra. Nhưng gần đây nguyện vọng cá nhân cũng được cân nhắc.'
      }
    ],
    culturalNote:
      'Văn hóa doanh nghiệp Nhật truyền thống dựa trên 3 trụ cột: 終身雇用 (shūshin koyō - tuyển dụng suốt đời), 年功序列 (nenkō joretsu - thâm niên), và 企業内組合 (kigyōnai kumiai - công đoàn nội bộ). Tuy nhiên, xu hướng hiện đại đang chuyển sang 成果主義 (trọng thành quả). 総合職 (sōgōshoku - chức tổng hợp) có thể bị chuyển công tác, còn 一般職 (ippanshoku - chức chung) thường cố định.'
  },

  // ── 15. Crisis Management (危機管理) ──────────────────────────
  {
    id: 'n2-conv-15',
    title: 'Quản lý khủng hoảng',
    titleJp: '危機管理',
    level: 'N2',
    situation: 'Xử lý tình huống khẩn cấp trong công ty, lập kế hoạch ứng phó sự cố',
    patterns: [
      {
        japanese: '緊急事態が発生いたしましたので、直ちにご報告いたします。',
        kana: 'きんきゅうじたいがはっせいいたしましたので、ただちにごほうこくいたします。',
        vietnamese: 'Tình huống khẩn cấp đã xảy ra, tôi xin báo cáo ngay lập tức.',
        memoryTip:
          'Nhớ: 緊急事態 (きんきゅうじたい) = "khẩn cấp sự thái" → tình huống khẩn cấp. 発生 (はっせい) = "phát + sinh" → phát sinh / xảy ra. 直ちに (ただちに) = ngay lập tức (trang trọng hơn すぐに).'
      },
      {
        japanese: '危機管理マニュアルに従って、迅速に対応してください。',
        kana: 'ききかんりマニュアルにしたがって、じんそくにたいおうしてください。',
        vietnamese: 'Hãy tuân theo sổ tay quản lý khủng hoảng và ứng phó nhanh chóng.',
        memoryTip:
          'Nhớ: 危機管理 (ききかんり) = "nguy cơ quản lý" → quản lý khủng hoảng. 迅速 (じんそく) = "tấn + tốc" → nhanh chóng. 従って (したがって) = tuân theo.'
      }
    ],
    dialogue: [
      {
        speaker: '社員 (Nhân viên)',
        japanese: '部長、大変です！サーバーがダウンして、顧客データにアクセスできません。',
        kana: 'ぶちょう、たいへんです！サーバーがダウンして、こきゃくデータにアクセスできません。',
        vietnamese: 'Trưởng phòng, nghiêm trọng rồi! Server sập, không thể truy cập dữ liệu khách hàng.'
      },
      {
        speaker: '部長 (Trưởng phòng)',
        japanese: '落ち着いてください。まず、IT部門に連絡を取ってください。',
        kana: 'おちついてください。まず、ITぶもんにれんらくをとってください。',
        vietnamese: 'Hãy bình tĩnh. Trước hết, hãy liên lạc với bộ phận IT.'
      },
      {
        speaker: '社員',
        japanese: 'はい。それから、お客様への影響範囲を確認いたします。',
        kana: 'はい。それから、おきゃくさまへのえいきょうはんいをかくにんいたします。',
        vietnamese: 'Vâng. Sau đó, tôi sẽ xác nhận phạm vi ảnh hưởng đến khách hàng.'
      },
      {
        speaker: '部長',
        japanese: '緊急対応チームを招集してください。30分以内に対策会議を開きます。',
        kana: 'きんきゅうたいおうチームをしょうしゅうしてください。30ぷんいないにたいさくかいぎをひらきます。',
        vietnamese: 'Hãy triệu tập đội ứng phó khẩn cấp. Trong vòng 30 phút sẽ mở cuộc họp đối sách.'
      },
      {
        speaker: '社員',
        japanese: '承知いたしました。関係者全員に至急連絡いたします。',
        kana: 'しょうちいたしました。かんけいしゃぜんいんにしきゅうれんらくいたします。',
        vietnamese: 'Tôi hiểu rồi. Tôi sẽ liên lạc khẩn cấp đến tất cả những người liên quan.'
      }
    ],
    culturalNote:
      'Quản lý khủng hoảng (危機管理 - kiki kanri) ở Nhật Bản đặc biệt quan trọng do đất nước thường xuyên đối mặt với thiên tai. Mọi công ty đều có マニュアル (manual) ứng phó và tổ chức 避難訓練 (hinan kunren - diễn tập sơ tán) định kỳ. Nguyên tắc cơ bản: 報告・連絡・相談 (ほうれんそう - hōrensō: báo cáo-liên lạc-trao đổi).'
  },

  // ── 16. Public Speaking (演説) ────────────────────────────────
  {
    id: 'n2-conv-16',
    title: 'Diễn thuyết công cộng',
    titleJp: '演説・スピーチ',
    level: 'N2',
    situation: 'Phát biểu trước công chúng, trình bày quan điểm và lập luận thuyết phục',
    patterns: [
      {
        japanese: '本日は貴重なお時間をいただき、心より感謝申し上げます。',
        kana: 'ほんじつはきちょうなおじかんをいただき、こころよりかんしゃもうしあげます。',
        vietnamese: 'Hôm nay, xin chân thành cảm ơn quý vị đã dành thời gian quý báu.',
        memoryTip:
          'Nhớ: 貴重 (きちょう) = "quý + trọng" → quý báu. 心より (こころより) = từ tận đáy lòng. 申し上げます = dạng khiêm nhường trang trọng nhất của 言います.'
      },
      {
        japanese: '私が本日主張したいのは、多様性こそが社会の強みであるという点です。',
        kana: 'わたしがほんじつしゅちょうしたいのは、たようせいこそがしゃかいのつよみであるというてんです。',
        vietnamese: 'Điều tôi muốn khẳng định hôm nay là: chính sự đa dạng mới là thế mạnh của xã hội.',
        memoryTip:
          'Nhớ: 主張 (しゅちょう) = "chủ + trương" → chủ trương / khẳng định. 多様性 (たようせい) = "đa + dạng + tính" → tính đa dạng. ～こそが = chính ~ mới là (nhấn mạnh).'
      }
    ],
    dialogue: [
      {
        speaker: '司会者 (MC)',
        japanese: 'それでは、基調講演を始めさせていただきます。',
        kana: 'それでは、きちょうこうえんをはじめさせていただきます。',
        vietnamese: 'Vậy thì, xin phép bắt đầu bài phát biểu chính.'
      },
      {
        speaker: '講演者 (Diễn giả)',
        japanese: '皆様、本日のテーマは「これからの日本社会と多文化共生」でございます。',
        kana: 'みなさま、ほんじつのテーマは「これからのにほんしゃかいとたぶんかきょうせい」でございます。',
        vietnamese: 'Thưa quý vị, chủ đề hôm nay là "Xã hội Nhật Bản tương lai và cộng sinh đa văn hóa".'
      },
      {
        speaker: '講演者',
        japanese: '少子高齢化が進む中、外国人労働者の受け入れは避けて通れない課題です。',
        kana: 'しょうしこうれいかがすすむなか、がいこくじんろうどうしゃのうけいれはさけてとおれないかだいです。',
        vietnamese: 'Trong bối cảnh già hóa - ít con ngày càng tiến triển, việc tiếp nhận lao động nước ngoài là vấn đề không thể tránh.'
      },
      {
        speaker: '講演者',
        japanese: '互いの文化を尊重し、共に生きる社会を築いていくべきだと確信しております。',
        kana: 'たがいのぶんかをそんちょうし、ともにいきるしゃかいをきずいていくべきだとかくしんしております。',
        vietnamese: 'Tôi tin chắc rằng chúng ta nên tôn trọng văn hóa lẫn nhau và xây dựng xã hội cùng chung sống.'
      },
      {
        speaker: '聴衆 (Khán giả)',
        japanese: '具体的にはどのような政策が必要だとお考えですか。',
        kana: 'ぐたいてきにはどのようなせいさくがひつようだとおかんがえですか。',
        vietnamese: 'Cụ thể thì cần những chính sách gì theo ý kiến của ông?'
      },
      {
        speaker: '講演者',
        japanese: '教育制度の改革と、言語サポート体制の充実が最優先だと考えます。',
        kana: 'きょういくせいどのかいかくと、げんごサポートたいせいのじゅうじつがさいゆうせんだとかんがえます。',
        vietnamese: 'Tôi cho rằng cải cách chế độ giáo dục và hoàn thiện hệ thống hỗ trợ ngôn ngữ là ưu tiên hàng đầu.'
      }
    ],
    culturalNote:
      'Diễn thuyết công cộng ở Nhật (演説 - enzetsu) thường trang trọng và có cấu trúc rõ ràng. Chính trị gia Nhật thường diễn thuyết trên đường phố (街頭演説 - gaitō enzetsu), đặc biệt trong mùa bầu cử. Phong cách nói chuyện trước công chúng của Nhật thiên về lý lẽ và dữ liệu hơn là cảm xúc, khác với phong cách phương Tây.'
  },

  // ── 17. Research Methodology (研究方法) ───────────────────────
  {
    id: 'n2-conv-17',
    title: 'Phương pháp nghiên cứu',
    titleJp: '研究方法論',
    level: 'N2',
    situation: 'Thảo luận về phương pháp điều tra, thí nghiệm và phân tích kết quả nghiên cứu',
    patterns: [
      {
        japanese: '本調査では、500名を対象にアンケートを実施いたしました。',
        kana: 'ほんちょうさでは、500めいをたいしょうにアンケートをじっしいたしました。',
        vietnamese: 'Trong cuộc điều tra này, chúng tôi đã thực hiện khảo sát với 500 người là đối tượng.',
        memoryTip:
          'Nhớ: 調査 (ちょうさ) = "điều + tra" → điều tra. 対象 (たいしょう) = "đối + tượng" → đối tượng. 実施 (じっし) = "thực + thi" → thực hiện. 名 (めい) = đơn vị đếm người (trang trọng).'
      },
      {
        japanese: '実験結果から、仮説が支持されたと言えます。',
        kana: 'じっけんけっかから、かせつがしじされたといえます。',
        vietnamese: 'Từ kết quả thí nghiệm, có thể nói rằng giả thuyết đã được ủng hộ.',
        memoryTip:
          'Nhớ: 実験 (じっけん) = "thực + nghiệm" → thí nghiệm. 仮説 (かせつ) = "giả + thuyết" → giả thuyết. 支持 (しじ) = "chi + trì" → ủng hộ / hỗ trợ.'
      },
      {
        japanese: '統計的に有意な差が認められました。',
        kana: 'とうけいてきにゆういなさがみとめられました。',
        vietnamese: 'Sự khác biệt có ý nghĩa thống kê đã được ghi nhận.',
        memoryTip:
          'Nhớ: 統計的 (とうけいてき) = "thống + kế + đích" → mang tính thống kê. 有意 (ゆうい) = "hữu + ý" → có ý nghĩa. 認められる = được công nhận / ghi nhận.'
      }
    ],
    dialogue: [
      {
        speaker: '研究者A (Nghiên cứu sinh A)',
        japanese: '今回の実験では、対照群と実験群に分けて比較分析を行いました。',
        kana: 'こんかいのじっけんでは、たいしょうぐんとじっけんぐんにわけてひかくぶんせきをおこないました。',
        vietnamese: 'Trong thí nghiệm lần này, chúng tôi chia thành nhóm đối chứng và nhóm thí nghiệm rồi tiến hành phân tích so sánh.'
      },
      {
        speaker: '指導教官 (Giáo viên hướng dẫn)',
        japanese: 'サンプル数は十分でしたか。',
        kana: 'サンプルすうはじゅうぶんでしたか。',
        vietnamese: 'Số lượng mẫu có đủ không?'
      },
      {
        speaker: '研究者A',
        japanese: 'はい、統計的有意性を確保するため、各群100名以上を確保しました。',
        kana: 'はい、とうけいてきゆういせいをかくほするため、かくぐん100めいいじょうをかくほしました。',
        vietnamese: 'Vâng, để đảm bảo ý nghĩa thống kê, chúng tôi đã đảm bảo mỗi nhóm trên 100 người.'
      },
      {
        speaker: '指導教官',
        japanese: 'バイアスの排除についてはどのように対処しましたか。',
        kana: 'バイアスのはいじょについてはどのようにたいしょしましたか。',
        vietnamese: 'Về việc loại bỏ thiên lệch thì đã xử lý như thế nào?'
      },
      {
        speaker: '研究者A',
        japanese: '二重盲検法を採用し、主観的な判断を排除いたしました。',
        kana: 'にじゅうもうけんほうをさいようし、しゅかんてきなはんだんをはいじょいたしました。',
        vietnamese: 'Chúng tôi áp dụng phương pháp mù đôi và loại bỏ phán đoán chủ quan.'
      }
    ],
    culturalNote:
      'Nghiên cứu khoa học ở Nhật Bản rất được coi trọng, với nhiều giải Nobel. Phương pháp nghiên cứu (研究方法論) tuân theo tiêu chuẩn quốc tế nhưng cũng có đặc thù riêng: hệ thống 研究室 (kenkyūshitsu - phòng thí nghiệm) do giáo sư đứng đầu, quan hệ senpai-kōhai chặt chẽ. 学会 (gakkai - hội nghị khoa học) là nơi trình bày và phản biện kết quả.'
  },

  // ── 18. Cultural Exchange (文化交流) ──────────────────────────
  {
    id: 'n2-conv-18',
    title: 'Giao lưu văn hóa',
    titleJp: '文化交流',
    level: 'N2',
    situation: 'Tham gia chương trình giao lưu quốc tế, thảo luận về hiểu biết liên văn hóa',
    patterns: [
      {
        japanese: '国際交流を通じて、異文化への理解を深めることが大切だと思います。',
        kana: 'こくさいこうりゅうをつうじて、いぶんかへのりかいをふかめることがたいせつだとおもいます。',
        vietnamese: 'Tôi nghĩ việc qua giao lưu quốc tế để làm sâu sắc sự hiểu biết về dị văn hóa là rất quan trọng.',
        memoryTip:
          'Nhớ: 国際交流 (こくさいこうりゅう) = "quốc tế giao lưu" → giao lưu quốc tế. 異文化 (いぶんか) = "dị + văn + hóa" → văn hóa khác biệt. ～を通じて = thông qua / qua. 深める = làm sâu sắc thêm.'
      },
      {
        japanese: '文化の違いを乗り越えて、相互理解を図りたいと存じます。',
        kana: 'ぶんかのちがいをのりこえて、そうごりかいをはかりたいとぞんじます。',
        vietnamese: 'Tôi muốn vượt qua sự khác biệt văn hóa và hướng tới sự hiểu biết lẫn nhau.',
        memoryTip:
          'Nhớ: 乗り越える (のりこえる) = vượt qua (khó khăn). 相互理解 (そうごりかい) = "tương hỗ lý giải" → hiểu biết lẫn nhau. 図る (はかる) = nhắm tới / mưu cầu.'
      }
    ],
    dialogue: [
      {
        speaker: 'コーディネーター (Điều phối viên)',
        japanese: '今回の交流プログラムでは、ベトナムと日本の学生が共同プロジェクトに取り組みます。',
        kana: 'こんかいのこうりゅうプログラムでは、ベトナムとにほんのがくせいがきょうどうプロジェクトにとりくみます。',
        vietnamese: 'Trong chương trình giao lưu lần này, sinh viên Việt Nam và Nhật Bản sẽ cùng thực hiện dự án chung.'
      },
      {
        speaker: 'ベトナム人学生 (SV Việt Nam)',
        japanese: 'お互いの食文化について紹介し合うのはいかがでしょうか。',
        kana: 'おたがいのしょくぶんかについてしょうかいしあうのはいかがでしょうか。',
        vietnamese: 'Giới thiệu cho nhau về văn hóa ẩm thực của nhau thì sao ạ?'
      },
      {
        speaker: '日本人学生 (SV Nhật)',
        japanese: 'いいですね！ベトナム料理にはとても興味があります。',
        kana: 'いいですね！ベトナムりょうりにはとてもきょうみがあります。',
        vietnamese: 'Hay quá! Tôi rất quan tâm đến ẩm thực Việt Nam.'
      },
      {
        speaker: 'ベトナム人学生',
        japanese: '日本のおもてなし文化には感銘を受けました。ベトナムでも取り入れたいです。',
        kana: 'にほんのおもてなしぶんかにはかんめいをうけました。ベトナムでもとりいれたいです。',
        vietnamese: 'Tôi ấn tượng sâu sắc với văn hóa omotenashi của Nhật. Tôi muốn áp dụng ở Việt Nam nữa.'
      },
      {
        speaker: 'コーディネーター',
        japanese: '文化の違いで戸惑うこともあるかもしれませんが、それこそが学びの機会です。',
        kana: 'ぶんかのちがいでとまどうこともあるかもしれませんが、それこそがまなびのきかいです。',
        vietnamese: 'Có thể sẽ bỡ ngỡ vì sự khác biệt văn hóa, nhưng chính điều đó mới là cơ hội học hỏi.'
      }
    ],
    culturalNote:
      'Nhật Bản có nhiều chương trình giao lưu quốc tế như JET Programme (dạy tiếng Anh), JICA (hợp tác phát triển), và các chương trình trao đổi sinh viên. おもてなし (omotenashi - tinh thần hiếu khách) là giá trị cốt lõi của văn hóa Nhật. Khi giao lưu, người Nhật thường tặng おみやげ (quà lưu niệm) để thể hiện thiện chí.'
  },

  // ── 19. Complaint Escalation (上位苦情) ───────────────────────
  {
    id: 'n2-conv-19',
    title: 'Leo thang khiếu nại',
    titleJp: '苦情のエスカレーション',
    level: 'N2',
    situation: 'Khiếu nại không được giải quyết, yêu cầu gặp người có trách nhiệm cao hơn',
    patterns: [
      {
        japanese: '先日お伝えした件について、まだ対応いただけていないようですが。',
        kana: 'せんじつおつたえしたけんについて、まだたいおういただけていないようですが。',
        vietnamese: 'Về vấn đề tôi đã trình bày hôm trước, dường như vẫn chưa được xử lý.',
        memoryTip:
          'Nhớ: 先日 (せんじつ) = hôm trước (trang trọng hơn この前). お伝えした = đã truyền đạt (kính ngữ). ～ようですが = dường như ~ (cách nói gián tiếp, không đổ lỗi trực tiếp).'
      },
      {
        japanese: '責任者の方とお話しさせていただけないでしょうか。',
        kana: 'せきにんしゃのかたとおはなしさせていただけないでしょうか。',
        vietnamese: 'Tôi có thể nói chuyện với người có trách nhiệm được không?',
        memoryTip:
          'Nhớ: 責任者 (せきにんしゃ) = "trách + nhiệm + giả" → người chịu trách nhiệm. の方 (のかた) = lịch sự hơn の人. ～ていただけないでしょうか = cách hỏi xin phép lịch sự nhất (phủ định + suy đoán).'
      },
      {
        japanese: '誠意ある対応をしていただけなければ、然るべき措置を取らざるを得ません。',
        kana: 'せいいあるたいおうをしていただけなければ、しかるべきそちをとらざるをえません。',
        vietnamese: 'Nếu không được đối ứng thành ý, tôi buộc phải có biện pháp thích đáng.',
        memoryTip:
          'Nhớ: 誠意 (せいい) = "thành + ý" → thành ý. 然るべき (しかるべき) = thích đáng / phải lẽ. 措置 (そち) = "thố + trí" → biện pháp. ～ざるを得ない = buộc phải ~ (không thể không).'
      }
    ],
    dialogue: [
      {
        speaker: '顧客 (Khách hàng)',
        japanese: '2週間前に修理を依頼したのですが、まだ何の連絡もいただいておりません。',
        kana: '2しゅうかんまえにしゅうりをいらいしたのですが、まだなんのれんらくもいただいておりません。',
        vietnamese: 'Tôi đã yêu cầu sửa chữa 2 tuần trước, nhưng vẫn chưa nhận được liên lạc nào.'
      },
      {
        speaker: '担当者 (Nhân viên phụ trách)',
        japanese: '大変申し訳ございません。確認いたしますので、少々お待ちいただけますか。',
        kana: 'たいへんもうしわけございません。かくにんいたしますので、しょうしょうおまちいただけますか。',
        vietnamese: 'Thành thật xin lỗi. Tôi sẽ xác nhận, xin chờ một chút có được không?'
      },
      {
        speaker: '顧客',
        japanese: '前回も同じことをおっしゃいましたが、改善されていません。責任者の方をお願いします。',
        kana: 'ぜんかいもおなじことをおっしゃいましたが、かいぜんされていません。せきにんしゃのかたをおねがいします。',
        vietnamese: 'Lần trước cũng nói y vậy, nhưng không được cải thiện. Xin cho gặp người có trách nhiệm.'
      },
      {
        speaker: '上司 (Cấp trên)',
        japanese: 'お客様、このたびは大変ご迷惑をおかけいたしました。店長の佐藤でございます。',
        kana: 'おきゃくさま、このたびはたいへんごめいわくをおかけいたしました。てんちょうのさとうでございます。',
        vietnamese: 'Thưa quý khách, lần này đã gây phiền lớn cho quý khách. Tôi là cửa hàng trưởng Sato.'
      },
      {
        speaker: '上司',
        japanese: '至急対応させていただきます。本日中に修理を完了し、ご報告いたします。',
        kana: 'しきゅうたいおうさせていただきます。ほんじつちゅうにしゅうりをかんりょうし、ごほうこくいたします。',
        vietnamese: 'Tôi sẽ xin xử lý khẩn cấp. Trong ngày hôm nay sẽ hoàn thành sửa chữa và báo cáo lại.'
      }
    ],
    culturalNote:
      'Khi khiếu nại ở Nhật, người ta thường giữ thái độ lịch sự nhưng kiên quyết. Cụm từ 「責任者を出してください」(cho gặp người phụ trách) là tín hiệu mạnh rằng khách hàng rất không hài lòng. Cấp trên thường phải đích thân ra xin lỗi (謝罪) khi tình huống nghiêm trọng. Ở Nhật, khiếu nại bằng văn bản (書面) có trọng lượng pháp lý hơn lời nói.'
  },

  // ── 20. Project Management (プロジェクト管理) ─────────────────
  {
    id: 'n2-conv-20',
    title: 'Quản lý dự án',
    titleJp: 'プロジェクト管理',
    level: 'N2',
    situation: 'Quản lý tiến độ dự án, phân công nhiệm vụ và xử lý vấn đề deadline',
    patterns: [
      {
        japanese: '進捗状況を確認したところ、スケジュールに若干の遅れが生じております。',
        kana: 'しんちょくじょうきょうをかくにんしたところ、スケジュールにじゃっかんのおくれがしょうじております。',
        vietnamese: 'Khi kiểm tra tiến độ, có sự chậm trễ nhẹ so với lịch trình.',
        memoryTip:
          'Nhớ: 進捗 (しんちょく) = "tiến + bộ" → tiến độ. 状況 (じょうきょう) = tình hình. 若干 (じゃっかん) = "nhược can" → chút ít. 生じる (しょうじる) = phát sinh.'
      },
      {
        japanese: '期限日までにタスクを完了するよう、リソースを再配分いたします。',
        kana: 'きげんびまでにタスクをかんりょうするよう、リソースをさいはいぶんいたします。',
        vietnamese: 'Để hoàn thành task trước deadline, tôi sẽ phân bổ lại nguồn lực.',
        memoryTip:
          'Nhớ: 期限日 (きげんび) = "kỳ hạn nhật" → ngày deadline. 完了 (かんりょう) = "hoàn + liễu" → hoàn thành. 再配分 (さいはいぶん) = "tái phân phối" → phân bổ lại.'
      }
    ],
    dialogue: [
      {
        speaker: 'PM (Quản lý dự án)',
        japanese: '今週の進捗会議を始めます。各チームから報告をお願いします。',
        kana: 'こんしゅうのしんちょくかいぎをはじめます。かくチームからほうこくをおねがいします。',
        vietnamese: 'Bắt đầu cuộc họp tiến độ tuần này. Xin mỗi team báo cáo.'
      },
      {
        speaker: '開発リーダー (Trưởng phát triển)',
        japanese: '開発は80%完了しておりますが、テスト工程で問題が発生しました。',
        kana: 'かいはつは80パーセントかんりょうしておりますが、テストこうていでもんだいがはっせいしました。',
        vietnamese: 'Phát triển đã hoàn thành 80%, nhưng có vấn đề phát sinh ở giai đoạn test.'
      },
      {
        speaker: 'PM',
        japanese: 'リリース日に影響はありますか。',
        kana: 'リリースびにえいきょうはありますか。',
        vietnamese: 'Có ảnh hưởng đến ngày release không?'
      },
      {
        speaker: '開発リーダー',
        japanese: '現状のままですと、3日ほど遅延する見込みです。',
        kana: 'げんじょうのままですと、3にちほどちえんするみこみです。',
        vietnamese: 'Nếu giữ nguyên tình hình hiện tại, dự kiến sẽ chậm khoảng 3 ngày.'
      },
      {
        speaker: 'PM',
        japanese: '分かりました。優先度の低いタスクを後回しにして、クリティカルパスに集中しましょう。',
        kana: 'わかりました。ゆうせんどのひくいタスクをあとまわしにして、クリティカルパスにしゅうちゅうしましょう。',
        vietnamese: 'Hiểu rồi. Hãy hoãn lại task ưu tiên thấp và tập trung vào đường găng.'
      },
      {
        speaker: '開発リーダー',
        japanese: '承知いたしました。追加の人員配置が可能であれば、間に合わせられると思います。',
        kana: 'しょうちいたしました。ついかのじんいんはいちがかのうであれば、まにあわせられるとおもいます。',
        vietnamese: 'Tôi hiểu rồi. Nếu có thể bổ sung thêm nhân sự, tôi nghĩ sẽ kịp tiến độ.'
      }
    ],
    culturalNote:
      'Quản lý dự án kiểu Nhật thường dùng phương pháp 報連相 (hōrensō): 報告 (báo cáo), 連絡 (liên lạc), 相談 (trao đổi). 朝会 (chōkai - họp sáng) hàng ngày là thói quen phổ biến. Khác với Agile phương Tây, dự án Nhật thường theo 滝型 (waterfall) truyền thống, nhưng ngày càng nhiều công ty áp dụng Scrum và Agile.'
  },

  // ── 21. Social Issues (社会問題) ──────────────────────────────
  {
    id: 'n2-conv-21',
    title: 'Vấn đề xã hội',
    titleJp: '社会問題',
    level: 'N2',
    situation: 'Thảo luận về các vấn đề xã hội Nhật Bản: già hóa, ít con, chênh lệch giàu nghèo',
    patterns: [
      {
        japanese: '高齢化社会が進む中、年金制度の持続可能性が問われています。',
        kana: 'こうれいかしゃかいがすすむなか、ねんきんせいどのじぞくかのうせいがとわれています。',
        vietnamese: 'Trong bối cảnh xã hội già hóa tiến triển, tính bền vững của chế độ lương hưu đang bị đặt câu hỏi.',
        memoryTip:
          'Nhớ: 高齢化 (こうれいか) = "cao + linh + hóa" → già hóa. 年金 (ねんきん) = "niên + kim" → lương hưu. 持続可能性 (じぞくかのうせい) = sustainability = tính bền vững. 問われる = bị đặt câu hỏi (bị động).'
      },
      {
        japanese: '少子化対策として、育児支援の充実が求められています。',
        kana: 'しょうしかたいさくとして、いくじしえんのじゅうじつがもとめられています。',
        vietnamese: 'Với tư cách đối sách cho vấn đề ít con, sự hoàn thiện hỗ trợ nuôi dạy trẻ đang được đòi hỏi.',
        memoryTip:
          'Nhớ: 少子化 (しょうしか) = "thiểu + tử + hóa" → ít con hóa. 育児支援 (いくじしえん) = hỗ trợ nuôi dạy trẻ. 充実 (じゅうじつ) = "sung + thực" → đầy đủ / hoàn thiện. 求められる = được đòi hỏi.'
      },
      {
        japanese: '格差社会の拡大は、深刻な問題として認識されています。',
        kana: 'かくさしゃかいのかくだいは、しんこくなもんだいとしてにんしきされています。',
        vietnamese: 'Sự mở rộng của xã hội chênh lệch được nhận thức là vấn đề nghiêm trọng.',
        memoryTip:
          'Nhớ: 格差 (かくさ) = "cách + sai" → chênh lệch. 拡大 (かくだい) = "khoách + đại" → mở rộng. 深刻 (しんこく) = "thâm + khắc" → nghiêm trọng. 認識 (にんしき) = "nhận + thức" → nhận thức.'
      }
    ],
    dialogue: [
      {
        speaker: '学生A (Sinh viên A)',
        japanese: '日本の少子高齢化問題について、どう思いますか。',
        kana: 'にほんのしょうしこうれいかもんだいについて、どうおもいますか。',
        vietnamese: 'Bạn nghĩ gì về vấn đề ít con - già hóa của Nhật?'
      },
      {
        speaker: '学生B (Sinh viên B)',
        japanese: '2050年には人口が1億人を下回ると予測されていて、かなり深刻だと思います。',
        kana: '2050ねんにはじんこうが1おくにんをしたまわるとよそくされていて、かなりしんこくだとおもいます。',
        vietnamese: 'Dự đoán dân số sẽ giảm dưới 100 triệu vào năm 2050, tôi nghĩ khá nghiêm trọng.'
      },
      {
        speaker: '学生A',
        japanese: '移民を受け入れるべきだという意見もありますが。',
        kana: 'いみんをうけいれるべきだというけんもありますが。',
        vietnamese: 'Cũng có ý kiến rằng nên tiếp nhận nhập cư.'
      },
      {
        speaker: '学生B',
        japanese: '確かに労働力不足の解決にはなりますが、社会統合の課題もありますね。',
        kana: 'たしかにろうどうりょくぶそくのかいけつにはなりますが、しゃかいとうごうのかだいもありますね。',
        vietnamese: 'Đúng là giải quyết được thiếu lao động, nhưng cũng có vấn đề hòa nhập xã hội.'
      },
      {
        speaker: '学生A',
        japanese: '貧富の格差についてはどうですか。非正規雇用の増加が心配です。',
        kana: 'ひんぷのかくさについてはどうですか。ひせいきこようのぞうかがしんぱいです。',
        vietnamese: 'Về chênh lệch giàu nghèo thì sao? Tôi lo lắng về sự tăng tuyển dụng không chính thức.'
      },
      {
        speaker: '学生B',
        japanese: 'ワーキングプアの問題は見過ごせません。最低賃金の引き上げが必要だと考えます。',
        kana: 'ワーキングプアのもんだいはみすごせません。さいていちんぎんのひきあげがひつようだとかんがえます。',
        vietnamese: 'Vấn đề working poor không thể bỏ qua. Tôi cho rằng cần tăng lương tối thiểu.'
      }
    ],
    culturalNote:
      'Nhật Bản đang đối mặt với 少子高齢化 (shōshi kōreika) nghiêm trọng nhất thế giới. Tỷ lệ sinh (合計特殊出生率) chỉ khoảng 1.2, thấp hơn nhiều so với mức thay thế 2.1. 格差社会 (kakusa shakai - xã hội chênh lệch) nổi lên từ thập niên 2000 với sự gia tăng 非正規雇用 (hiseiki koyō - tuyển dụng không chính thức) và ワーキングプア (working poor).'
  },

  // ── 22. Environmental Policy (環境政策) ───────────────────────
  {
    id: 'n2-conv-22',
    title: 'Chính sách môi trường',
    titleJp: '環境政策',
    level: 'N2',
    situation: 'Thảo luận về biến đổi khí hậu, năng lượng tái tạo và chính sách bảo vệ môi trường',
    patterns: [
      {
        japanese: '地球温暖化を食い止めるためには、二酸化炭素の排出削減が不可欠です。',
        kana: 'ちきゅうおんだんかをくいとめるためには、にさんかたんそのはいしゅつさくげんがふかけつです。',
        vietnamese: 'Để chặn đứng sự nóng lên toàn cầu, việc giảm phát thải carbon dioxide là không thể thiếu.',
        memoryTip:
          'Nhớ: 温暖化 (おんだんか) = "ôn + noãn + hóa" → ấm lên. 食い止める (くいとめる) = chặn đứng. 排出削減 (はいしゅつさくげん) = giảm phát thải. 不可欠 (ふかけつ) = "bất + khả + khuyết" → không thể thiếu.'
      },
      {
        japanese: '再生可能エネルギーへの転換を加速させる必要があります。',
        kana: 'さいせいかのうエネルギーへのてんかんをかそくさせるひつようがあります。',
        vietnamese: 'Cần đẩy nhanh việc chuyển đổi sang năng lượng tái tạo.',
        memoryTip:
          'Nhớ: 再生可能 (さいせいかのう) = "tái + sinh + khả + năng" → có thể tái sinh → tái tạo. 転換 (てんかん) = "chuyển + hoán" → chuyển đổi. 加速 (かそく) = "gia + tốc" → tăng tốc.'
      }
    ],
    dialogue: [
      {
        speaker: 'パネリスト A (Khách mời A)',
        japanese: '2050年カーボンニュートラル達成のために、何が最も重要だと思われますか。',
        kana: '2050ねんカーボンニュートラルたっせいのために、なにがもっともじゅうようだとおもわれますか。',
        vietnamese: 'Để đạt carbon neutral vào 2050, điều gì được cho là quan trọng nhất?'
      },
      {
        speaker: 'パネリスト B (Khách mời B)',
        japanese: '原子力発電の是非はさておき、再生エネルギーの普及が鍵だと考えます。',
        kana: 'げんしりょくはつでんのぜひはさておき、さいせいエネルギーのふきゅうがかぎだとかんがえます。',
        vietnamese: 'Gác lại vấn đề điện hạt nhân đúng sai, tôi cho rằng phổ cập năng lượng tái tạo là chìa khóa.'
      },
      {
        speaker: 'パネリスト A',
        japanese: '太陽光発電のコストは下がっていますが、送電網の整備が追いついていません。',
        kana: 'たいようこうはつでんのコストはさがっていますが、そうでんもうのせいびがおいついていません。',
        vietnamese: 'Chi phí điện mặt trời đang giảm, nhưng việc hoàn thiện lưới truyền tải chưa theo kịp.'
      },
      {
        speaker: 'パネリスト B',
        japanese: '企業の役割も大きいですね。ESG投資の拡大が企業行動を変えつつあります。',
        kana: 'きぎょうのやくわりもおおきいですね。ESGとうしのかくだいがきぎょうこうどうをかえつつあります。',
        vietnamese: 'Vai trò của doanh nghiệp cũng lớn. Sự mở rộng đầu tư ESG đang dần thay đổi hành vi doanh nghiệp.'
      },
      {
        speaker: '司会者 (MC)',
        japanese: '個人レベルでできることは何でしょうか。',
        kana: 'こじんレベルでできることはなんでしょうか。',
        vietnamese: 'Ở cấp độ cá nhân thì có thể làm gì?'
      },
      {
        speaker: 'パネリスト A',
        japanese: '省エネ意識の向上と、消費行動の見直しが第一歩だと思います。',
        kana: 'しょうエネいしきのこうじょうと、しょうひこうどうのみなおしがだいいっぽだとおもいます。',
        vietnamese: 'Tôi nghĩ bước đầu tiên là nâng cao ý thức tiết kiệm năng lượng và xem xét lại hành vi tiêu dùng.'
      }
    ],
    culturalNote:
      'Nhật Bản cam kết đạt カーボンニュートラル (carbon neutral) vào 2050. Sau thảm họa Fukushima 2011, chính sách năng lượng trở thành chủ đề nóng. Nhật có văn hóa もったいない (mottainai - tiếc rẻ / đừng lãng phí) — triết lý tiết kiệm tài nguyên ăn sâu vào đời sống. Phân loại rác (ゴミ分別) ở Nhật cũng thuộc hàng nghiêm ngặt nhất thế giới.'
  },

  // ── 23. Philosophy of Work (仕事観) ───────────────────────────
  {
    id: 'n2-conv-23',
    title: 'Triết lý về công việc',
    titleJp: '仕事観',
    level: 'N2',
    situation: 'Thảo luận về ý nghĩa công việc, ikigai và cân bằng công việc-cuộc sống',
    patterns: [
      {
        japanese: '仕事にやりがいを感じることが、生きがいにつながると思います。',
        kana: 'しごとにやりがいをかんじることが、いきがいにつながるとおもいます。',
        vietnamese: 'Tôi nghĩ việc cảm thấy ý nghĩa trong công việc dẫn đến lẽ sống.',
        memoryTip:
          'Nhớ: やりがい = giá trị / ý nghĩa (khi làm việc). 生きがい (いきがい) = "sống + đáng" → lẽ sống / ikigai — khái niệm nổi tiếng của Nhật. つながる = kết nối / dẫn đến.'
      },
      {
        japanese: 'ワークライフバランスを重視する傾向が若い世代を中心に広がっています。',
        kana: 'ワークライフバランスをじゅうしするけいこうがわかいせだいをちゅうしんにひろがっています。',
        vietnamese: 'Xu hướng coi trọng cân bằng công việc-cuộc sống đang lan rộng tập trung ở thế hệ trẻ.',
        memoryTip:
          'Nhớ: 重視 (じゅうし) = "trọng + thị" → coi trọng. 傾向 (けいこう) = xu hướng. 世代 (せだい) = "thế + đại" → thế hệ. を中心に = lấy ~ làm trung tâm.'
      }
    ],
    dialogue: [
      {
        speaker: '先輩 (Senpai)',
        japanese: '最近の若い人は仕事に対する価値観が変わってきたと感じるな。',
        kana: 'さいきんのわかいひとはしごとにたいするかちかんがかわってきたとかんじるな。',
        vietnamese: 'Tôi cảm thấy giá trị quan về công việc của người trẻ gần đây đã thay đổi.'
      },
      {
        speaker: '後輩 (Kouhai)',
        japanese: 'そうですね。私たちの世代は、仕事だけでなく私生活も大切にしたいと思っています。',
        kana: 'そうですね。わたしたちのせだいは、しごとだけでなくしせいかつもたいせつにしたいとおもっています。',
        vietnamese: 'Đúng vậy. Thế hệ chúng tôi muốn coi trọng không chỉ công việc mà cả đời sống riêng.'
      },
      {
        speaker: '先輩',
        japanese: '昔は会社のために自分を犠牲にするのが当たり前だったけどな。',
        kana: 'むかしはかいしゃのためにじぶんをぎせいにするのがあたりまえだったけどな。',
        vietnamese: 'Ngày xưa, hy sinh bản thân vì công ty là chuyện hiển nhiên.'
      },
      {
        speaker: '後輩',
        japanese: '確かに、でも過労死が社会問題になっている以上、働き方改革は必要だと思います。',
        kana: 'たしかに、でもかろうしがしゃかいもんだいになっているいじょう、はたらきかたかいかくはひつようだとおもいます。',
        vietnamese: 'Đúng thế, nhưng vì chết vì làm việc quá sức đã trở thành vấn đề xã hội, tôi nghĩ cải cách cách làm việc là cần thiết.'
      },
      {
        speaker: '先輩',
        japanese: '君にとっての「生きがい」とは何だい？',
        kana: 'きみにとっての「いきがい」とはなんだい？',
        vietnamese: '"Lẽ sống" của cậu là gì?'
      },
      {
        speaker: '後輩',
        japanese: '好きなことで社会に貢献できることが、私の生きがいです。仕事も趣味も両立させたいです。',
        kana: 'すきなことでしゃかいにこうけんできることが、わたしのいきがいです。しごともしゅみもりょうりつさせたいです。',
        vietnamese: 'Đóng góp cho xã hội bằng điều mình yêu thích là lẽ sống của tôi. Tôi muốn cân bằng cả công việc lẫn sở thích.'
      }
    ],
    culturalNote:
      '生きがい (ikigai) là khái niệm triết học Nhật Bản về lẽ sống — giao điểm giữa điều bạn yêu thích, điều bạn giỏi, điều thế giới cần, và điều có thể kiếm tiền. 過労死 (karōshi - chết vì làm việc quá sức) là hiện tượng đặc trưng của Nhật, đã dẫn đến 働き方改革 (hatarakikata kaikaku - cải cách cách làm việc) từ 2019, giới hạn giờ làm thêm và khuyến khích nghỉ phép.'
  },

  // ── 24. Historical Discussion (歴史) ──────────────────────────
  {
    id: 'n2-conv-24',
    title: 'Thảo luận lịch sử',
    titleJp: '歴史討論',
    level: 'N2',
    situation: 'Thảo luận về các thời đại lịch sử, sự biến đổi và ảnh hưởng đến xã hội hiện đại',
    patterns: [
      {
        japanese: '明治維新は日本の近代化に決定的な影響を与えました。',
        kana: 'めいじいしんはにほんのきんだいかにけっていてきなえいきょうをあたえました。',
        vietnamese: 'Cuộc Minh Trị Duy Tân đã có ảnh hưởng quyết định đến sự hiện đại hóa của Nhật Bản.',
        memoryTip:
          'Nhớ: 明治維新 (めいじいしん) = "Minh Trị Duy Tân" → cuộc cách mạng 1868. 近代化 (きんだいか) = "cận đại hóa" → hiện đại hóa. 決定的 (けっていてき) = mang tính quyết định. 影響を与える = gây ảnh hưởng.'
      },
      {
        japanese: '時代の変遷とともに、人々の価値観も大きく変化してきました。',
        kana: 'じだいのへんせんとともに、ひとびとのかちかんもおおきくへんかしてきました。',
        vietnamese: 'Cùng với sự biến đổi của thời đại, giá trị quan của con người cũng đã thay đổi lớn.',
        memoryTip:
          'Nhớ: 時代 (じだい) = "thời + đại" → thời đại. 変遷 (へんせん) = "biến + thiên" → sự biến đổi qua thời gian. 価値観 (かちかん) = "giá trị quan" → quan niệm giá trị. ～とともに = cùng với.'
      }
    ],
    dialogue: [
      {
        speaker: '教授 (Giáo sư)',
        japanese: '日本史の中で、最も重要な転換点は何だと思いますか。',
        kana: 'にほんしのなかで、もっともじゅうようなてんかんてんはなんだとおもいますか。',
        vietnamese: 'Trong lịch sử Nhật Bản, bạn nghĩ bước ngoặt quan trọng nhất là gì?'
      },
      {
        speaker: '学生 (Sinh viên)',
        japanese: '明治維新だと思います。鎖国から開国へ、社会構造が根本から変わりました。',
        kana: 'めいじいしんだとおもいます。さこくからかいこくへ、しゃかいこうぞうがこんぽんからかわりました。',
        vietnamese: 'Tôi nghĩ là Minh Trị Duy Tân. Từ bế quan tỏa quốc sang mở cửa, cấu trúc xã hội thay đổi tận gốc.'
      },
      {
        speaker: '教授',
        japanese: '戦後の復興も見逃せませんね。焼け野原から経済大国になった過程は驚くべきものです。',
        kana: 'せんごのふっこうもみのがせませんね。やけのはらからけいざいたいこくになったかていはおどろくべきものです。',
        vietnamese: 'Sự phục hưng sau chiến tranh cũng không thể bỏ qua. Quá trình từ đống tro tàn trở thành cường quốc kinh tế thật đáng kinh ngạc.'
      },
      {
        speaker: '学生',
        japanese: '江戸時代の鎖国政策が、独自の文化発展につながったという見方もありますね。',
        kana: 'えどじだいのさこくせいさくが、どくじのぶんかはってんにつながったというみかたもありますね。',
        vietnamese: 'Cũng có cách nhìn rằng chính sách bế quan tỏa quốc thời Edo dẫn đến sự phát triển văn hóa độc đáo.'
      },
      {
        speaker: '教授',
        japanese: 'その通りです。歴史は多角的に見ることが大切です。一つの出来事にも、光と影があります。',
        kana: 'そのとおりです。れきしはたかくてきにみることがたいせつです。ひとつのできごとにも、ひかりとかげがあります。',
        vietnamese: 'Chính xác. Nhìn lịch sử đa góc độ là quan trọng. Một sự kiện cũng có mặt sáng và mặt tối.'
      }
    ],
    culturalNote:
      'Lịch sử Nhật Bản chia thành các thời đại (時代): Jōmon → Yayoi → Kofun → Asuka → Nara → Heian → Kamakura → Muromachi → Azuchi-Momoyama → Edo → Meiji → Taishō → Shōwa → Heisei → Reiwa (hiện tại). 明治維新 (1868) là bước ngoặt chuyển từ phong kiến sang hiện đại. Người Nhật cũng dùng niên hiệu (元号 - gengō) song song với dương lịch.'
  },

  // ── 25. Emotional Expression (感情表現) ───────────────────────
  {
    id: 'n2-conv-25',
    title: 'Biểu đạt cảm xúc',
    titleJp: '感情表現',
    level: 'N2',
    situation: 'Diễn đạt các cung bậc cảm xúc phức tạp: buồn, vui sướng, tiếc nuối trong bối cảnh Nhật',
    patterns: [
      {
        japanese: 'この結果を聞いて、悔しくてたまりません。',
        kana: 'このけっかをきいて、くやしくてたまりません。',
        vietnamese: 'Nghe kết quả này, tôi ấm ức không chịu nổi.',
        memoryTip:
          'Nhớ: 悔しい (くやしい) = ấm ức / tiếc nuối vì thua / thất bại. ～てたまらない = không chịu nổi / cực kỳ (cảm giác tự nhiên, không kiểm soát được). Khác với 残念 (đáng tiếc — nhẹ hơn).'
      },
      {
        japanese: '合格の知らせを受けて、嬉しさのあまり涙が出ました。',
        kana: 'ごうかくのしらせをうけて、うれしさのあまりなみだがでました。',
        vietnamese: 'Nhận tin đỗ, vì vui quá mà nước mắt trào ra.',
        memoryTip:
          'Nhớ: 嬉しさ (うれしさ) = niềm vui (danh từ hóa từ 嬉しい). ～のあまり = vì quá ~ mà... (cảm xúc mạnh đến mức gây ra hành động). 涙 (なみだ) = nước mắt.'
      },
      {
        japanese: '親友が遠くに引っ越すと聞いて、寂しさを感じずにはいられません。',
        kana: 'しんゆうがとおくにひっこすときいて、さびしさをかんじずにはいられません。',
        vietnamese: 'Nghe tin bạn thân chuyển đi xa, tôi không thể không cảm thấy cô đơn.',
        memoryTip:
          'Nhớ: 寂しさ (さびしさ) = sự cô đơn (danh từ hóa). ～ずにはいられない = không thể không ~ (hành động / cảm xúc tự phát, không kiềm chế được). 親友 (しんゆう) = "thân + hữu" → bạn thân.'
      }
    ],
    dialogue: [
      {
        speaker: '田中 (Tanaka)',
        japanese: 'コンテストの結果が出たんだ。残念ながら、入賞できなかった。',
        kana: 'コンテストのけっかがでたんだ。ざんねんながら、にゅうしょうできなかった。',
        vietnamese: 'Kết quả cuộc thi đã ra rồi. Đáng tiếc, không được giải.'
      },
      {
        speaker: '鈴木 (Suzuki)',
        japanese: 'あんなに努力したのに、本当に悔しいよね。',
        kana: 'あんなにどりょくしたのに、ほんとうにくやしいよね。',
        vietnamese: 'Đã cố gắng nhiều thế mà, thật sự ấm ức nhỉ.'
      },
      {
        speaker: '田中',
        japanese: 'うん…。正直、悔しくて夜眠れなかった。でも、挑戦したこと自体に後悔はない。',
        kana: 'うん…。しょうじき、くやしくてよるねむれなかった。でも、ちょうせんしたことじたいにこうかいはない。',
        vietnamese: 'Ừ... Thật lòng, ấm ức đến mức đêm không ngủ được. Nhưng, bản thân việc đã thử thách thì không hối hận.'
      },
      {
        speaker: '鈴木',
        japanese: 'その気持ち、すごく分かるよ。でも、次こそきっとうまくいくと信じてる。',
        kana: 'そのきもち、すごくわかるよ。でも、つぎこそきっとうまくいくとしんじてる。',
        vietnamese: 'Tâm trạng ấy, tớ rất hiểu. Nhưng, lần sau chắc chắn sẽ suôn sẻ, tớ tin thế.'
      },
      {
        speaker: '田中',
        japanese: 'ありがとう。そう言ってもらえると、救われた気がする。',
        kana: 'ありがとう。そういってもらえると、すくわれたきがする。',
        vietnamese: 'Cảm ơn. Được nói vậy, tôi cảm thấy như được cứu rỗi.'
      },
      {
        speaker: '鈴木',
        japanese: '辛い時こそ、自分を認めてあげることが大事だよ。一緒に頑張ろう。',
        kana: 'つらいときこそ、じぶんをみとめてあげることがだいじだよ。いっしょにがんばろう。',
        vietnamese: 'Chính lúc khó khăn mới cần công nhận bản thân mình. Cùng cố gắng nhé.'
      }
    ],
    culturalNote:
      'Người Nhật thường kìm nén cảm xúc trước công chúng (建前 - tatemae) nhưng rất sâu sắc trong cảm xúc cá nhân (本音 - honne). 悔しい (kuyashii) là cảm xúc đặc trưng Nhật — ấm ức vì thua nhưng muốn cố gắng hơn, khác với "angry" hay "sad" trong tiếng Anh. Trong anime/manga, cảnh khóc vì 悔しい rất phổ biến. もの哀れ (mono no aware - nỗi buồn trước sự vô thường) là mỹ cảm cốt lõi của văn hóa Nhật.'
  }
];
