import type { ConversationPattern } from '$lib/types/lesson';

export const N3_CONVERSATIONS: ConversationPattern[] = [
  // ── 1. Job Interview (面接) ──────────────────────────────────
  {
    id: 'n3-conv-01',
    title: 'Phỏng vấn xin việc',
    titleJp: '面接',
    level: 'N3',
    situation: 'Ứng viên trả lời câu hỏi trong buổi phỏng vấn tuyển dụng tại công ty Nhật',
    patterns: [
      {
        japanese: '〜の経験があります。',
        kana: '〜のけいけんがあります。',
        vietnamese: 'Tôi có kinh nghiệm về ~.',
        memoryTip:
          'Nhớ: けいけん (keiken) nghe như "kế hoạch kinh nghiệm" → kinh nghiệm tích lũy qua kế hoạch rèn luyện'
      },
      {
        japanese: '得意なことはコミュニケーションです。',
        kana: 'とくいなことはコミュニケーションです。',
        vietnamese: 'Điểm mạnh của tôi là giao tiếp.',
        memoryTip:
          'Nhớ: とくい (tokui) = "đặc ý" (Hán Việt) → thứ mình đặc biệt tự tin, sở trường'
      },
      {
        japanese: '精一杯頑張ります。',
        kana: 'せいいっぱいがんばります。',
        vietnamese: 'Tôi sẽ cố gắng hết sức.',
        memoryTip:
          'Nhớ: せいいっぱい = "tinh nhất bôi" → đổ hết 100% năng lượng vào. がんばります = "gan bền" → kiên trì bền bỉ'
      }
    ],
    dialogue: [
      {
        speaker: '面接官',
        japanese: '前の会社ではどんな仕事をしていましたか。',
        kana: 'まえのかいしゃではどんなしごとをしていましたか。',
        vietnamese: 'Ở công ty trước, bạn đã làm công việc gì?'
      },
      {
        speaker: '応募者',
        japanese: '3年間、営業の経験があります。お客様との交渉が得意です。',
        kana: 'さんねんかん、えいぎょうのけいけんがあります。おきゃくさまとのこうしょうがとくいです。',
        vietnamese:
          'Tôi có 3 năm kinh nghiệm kinh doanh. Tôi giỏi đàm phán với khách hàng.'
      },
      {
        speaker: '面接官',
        japanese: 'うちの会社を選んだ理由は何ですか。',
        kana: 'うちのかいしゃをえらんだりゆうはなんですか。',
        vietnamese: 'Lý do bạn chọn công ty chúng tôi là gì?'
      },
      {
        speaker: '応募者',
        japanese: '御社の海外展開に興味があり、自分の語学力を活かしたいと思いました。',
        kana: 'おんしゃのかいがいてんかいにきょうみがあり、じぶんのごがくりょくをいかしたいとおもいました。',
        vietnamese:
          'Tôi quan tâm đến việc mở rộng quốc tế của quý công ty và muốn phát huy năng lực ngoại ngữ của mình.'
      },
      {
        speaker: '面接官',
        japanese: '最後に何か質問はありますか。',
        kana: 'さいごになにかしつもんはありますか。',
        vietnamese: 'Cuối cùng, bạn có câu hỏi gì không?'
      },
      {
        speaker: '応募者',
        japanese: '入社後の研修制度について教えていただけますか。精一杯頑張りますので、よろしくお願いいたします。',
        kana: 'にゅうしゃごのけんしゅうせいどについておしえていただけますか。せいいっぱいがんばりますので、よろしくおねがいいたします。',
        vietnamese:
          'Bạn có thể cho tôi biết về chế độ đào tạo sau khi vào công ty không? Tôi sẽ cố gắng hết sức, xin hãy giúp đỡ.'
      }
    ],
    culturalNote:
      'Trong phỏng vấn Nhật, sử dụng 御社 (おんしゃ — quý công ty) thay vì tên công ty trực tiếp là phép lịch sự bắt buộc. Kết thúc bằng よろしくお願いいたします thể hiện sự khiêm nhường và quyết tâm — đây là ấn tượng cuối cùng rất quan trọng với nhà tuyển dụng Nhật.'
  },

  // ── 2. Expressing Opinions (意見) ───────────────────────────
  {
    id: 'n3-conv-02',
    title: 'Bày tỏ ý kiến',
    titleJp: '意見を言う',
    level: 'N3',
    situation: 'Đồng nghiệp thảo luận về kế hoạch dự án trong cuộc họp nhóm',
    patterns: [
      {
        japanese: '〜と思います。',
        kana: '〜とおもいます。',
        vietnamese: 'Tôi nghĩ rằng ~.',
        memoryTip:
          'Nhớ: おもいます (omoimasu) → "ô mới" → mỗi khi mở cái ô mới, bạn "nghĩ" xem trời có mưa không'
      },
      {
        japanese: '〜んじゃないかと思うんですが。',
        kana: '〜んじゃないかとおもうんですが。',
        vietnamese: 'Tôi nghĩ có lẽ là ~ (nhẹ nhàng, dò hỏi).',
        memoryTip:
          'Nhớ: ～んじゃないか = "chẳng phải là ~ sao?" → cách nói vòng vo, nhẹ nhàng đưa ý kiến mà không áp đặt'
      },
      {
        japanese: '確かにそうですが、〜のではないでしょうか。',
        kana: 'たしかにそうですが、〜のではないでしょうか。',
        vietnamese: 'Đúng là vậy, nhưng chẳng phải ~ hay sao?',
        memoryTip:
          'Nhớ: たしかに = "ta chắc nì" → "ta chắc chắn đồng ý" trước khi đưa ý kiến ngược lại — kỹ thuật phản bác lịch sự'
      }
    ],
    dialogue: [
      {
        speaker: '田中',
        japanese: '新しいプロジェクトの締め切りについてどう思いますか。',
        kana: 'あたらしいプロジェクトのしめきりについてどうおもいますか。',
        vietnamese: 'Bạn nghĩ gì về deadline của dự án mới?'
      },
      {
        speaker: '山田',
        japanese: '正直に言うと、少し厳しいんじゃないかと思うんですが。',
        kana: 'しょうじきにいうと、すこしきびしいんじゃないかとおもうんですが。',
        vietnamese:
          'Nói thật thì, tôi nghĩ có lẽ hơi khắt khe.'
      },
      {
        speaker: '田中',
        japanese: '確かにそうですが、クライアントの要望もありますし。',
        kana: 'たしかにそうですが、クライアントのようぼうもありますし。',
        vietnamese:
          'Đúng là vậy, nhưng cũng có yêu cầu từ khách hàng nữa.'
      },
      {
        speaker: '山田',
        japanese: 'それはわかりますが、品質を下げるわけにはいかないと思います。',
        kana: 'それはわかりますが、ひんしつをさげるわけにはいかないとおもいます。',
        vietnamese:
          'Tôi hiểu điều đó, nhưng tôi nghĩ không thể hạ chất lượng được.'
      },
      {
        speaker: '田中',
        japanese: 'では、人員を増やすのはどうでしょうか。',
        kana: 'では、じんいんをふやすのはどうでしょうか。',
        vietnamese: 'Vậy thì, tăng nhân sự thì sao?'
      },
      {
        speaker: '山田',
        japanese: 'それはいい案だと思います。上司に相談してみましょう。',
        kana: 'それはいいあんだとおもいます。じょうしにそうだんしてみましょう。',
        vietnamese:
          'Tôi nghĩ đó là ý hay. Hãy thử bàn với sếp.'
      }
    ],
    culturalNote:
      'Người Nhật tránh phản bác trực diện. Thay vì nói "Tôi không đồng ý", họ dùng 確かにそうですが... (đúng là vậy, nhưng...) để thừa nhận ý kiến đối phương trước, rồi mới đưa ra quan điểm khác. Cấu trúc ～んじゃないかと思うんですが kết thúc bằng が (nhưng...) để treo câu, tạo không gian cho đối phương phản hồi.'
  },

  // ── 3. Complaining Politely (苦情) ──────────────────────────
  {
    id: 'n3-conv-03',
    title: 'Phàn nàn lịch sự',
    titleJp: '丁寧な苦情',
    level: 'N3',
    situation: 'Khách thuê phàn nàn với quản lý tòa nhà về tiếng ồn từ phòng bên cạnh',
    patterns: [
      {
        japanese: 'ちょっと困っているんですが。',
        kana: 'ちょっとこまっているんですが。',
        vietnamese: 'Tôi đang hơi khó xử / gặp rắc rối...',
        memoryTip:
          'Nhớ: こまる (komaru) → "ko mà rủ" → bạn ko muốn mà bị rủ vào rắc rối. Thêm んですが để mở đầu nhẹ nhàng trước khi than phiền'
      },
      {
        japanese: '〜ていただけませんか。',
        kana: '〜ていただけませんか。',
        vietnamese: 'Bạn có thể ~ được không ạ? (rất lịch sự)',
        memoryTip:
          'Nhớ: いただけませんか = dạng phủ định của いただく (nhận) → "tôi không thể nhận được việc bạn làm ~ sao?" → yêu cầu cực kỳ lịch sự'
      },
      {
        japanese: '申し訳ないんですが、〜。',
        kana: 'もうしわけないんですが、〜。',
        vietnamese: 'Xin lỗi vì phiền, nhưng ~.',
        memoryTip:
          'Nhớ: もうしわけない = "mồ sì wa kê nai" → không có lời nào để biện hộ → lời xin lỗi sâu sắc, dùng khi mình là người phàn nàn!'
      }
    ],
    dialogue: [
      {
        speaker: '住人',
        japanese: 'すみません、ちょっと困っているんですが、ご相談してもよろしいですか。',
        kana: 'すみません、ちょっとこまっているんですが、ごそうだんしてもよろしいですか。',
        vietnamese:
          'Xin lỗi, tôi đang gặp chút rắc rối, có thể trao đổi được không ạ?'
      },
      {
        speaker: '管理人',
        japanese: 'はい、どうされましたか。',
        kana: 'はい、どうされましたか。',
        vietnamese: 'Vâng, có chuyện gì vậy ạ?'
      },
      {
        speaker: '住人',
        japanese: '実は、隣の部屋から夜遅くまで大きな音がして、眠れないんです。',
        kana: 'じつは、となりのへやからよるおそくまでおおきなおとがして、ねむれないんです。',
        vietnamese:
          'Thực ra, phòng bên cạnh phát ra tiếng ồn lớn đến khuya, tôi không ngủ được.'
      },
      {
        speaker: '管理人',
        japanese: 'それは大変ですね。いつ頃からですか。',
        kana: 'それはたいへんですね。いつごろからですか。',
        vietnamese: 'Vậy thì khổ quá nhỉ. Từ khoảng khi nào vậy?'
      },
      {
        speaker: '住人',
        japanese: '先週からずっとなんです。申し訳ないんですが、注意していただけませんか。',
        kana: 'せんしゅうからずっとなんです。もうしわけないんですが、ちゅういしていただけませんか。',
        vietnamese:
          'Từ tuần trước đến giờ luôn ạ. Xin lỗi vì phiền, nhưng bạn có thể nhắc nhở họ được không ạ?'
      },
      {
        speaker: '管理人',
        japanese: 'わかりました。すぐに確認して、対応いたします。',
        kana: 'わかりました。すぐにかくにんして、たいおういたします。',
        vietnamese: 'Tôi hiểu rồi. Tôi sẽ xác nhận và xử lý ngay.'
      }
    ],
    culturalNote:
      'Ở Nhật, ngay cả khi phàn nàn, người nói thường xin lỗi trước (申し訳ないんですが) vì đã "làm phiền" người nghe. Cách mở đầu bằng ちょっと困っているんですが giúp giảm nhẹ mức độ — dù rất khó chịu, vẫn nói "hơi khó xử". Đây là văn hóa 遠慮 (えんりょ — kiềm chế, dè dặt) đặc trưng của Nhật.'
  },

  // ── 4. Making Excuses (言い訳) ──────────────────────────────
  {
    id: 'n3-conv-04',
    title: 'Đưa ra lý do / biện minh',
    titleJp: '言い訳',
    level: 'N3',
    situation: 'Nhân viên giải thích với sếp lý do nộp báo cáo trễ hạn',
    patterns: [
      {
        japanese: '〜つもりだったんですが。',
        kana: '〜つもりだったんですが。',
        vietnamese: 'Tôi đã định ~ (nhưng không thực hiện được).',
        memoryTip:
          'Nhớ: つもり → "từ mọi lý do" → bạn có đủ mọi lý do để làm, đã lên kế hoạch, nhưng cuối cùng không thành. だった = quá khứ → ý định đã thuộc về quá khứ'
      },
      {
        japanese: '〜はずだったのに。',
        kana: '〜はずだったのに。',
        vietnamese: 'Đáng lẽ phải ~ (mà lại không).',
        memoryTip:
          'Nhớ: はず (hazu) → "há dư" → đáng lẽ dư sức làm được. のに cuối câu = tiếc nuối, trách móc nhẹ — kết quả ngược kỳ vọng'
      },
      {
        japanese: '〜せいで、〜てしまいました。',
        kana: '〜せいで、〜てしまいました。',
        vietnamese: 'Vì ~ (nguyên nhân xấu), nên đã lỡ ~.',
        memoryTip:
          'Nhớ: せいで → "say" → "tại say nên hỏng việc" → đổ lỗi cho nguyên nhân bên ngoài. てしまう = lỡ tay làm xong, hối hận'
      }
    ],
    dialogue: [
      {
        speaker: '部長',
        japanese: '山本さん、今日が報告書の締め切りだったはずですが。',
        kana: 'やまもとさん、きょうがほうこくしょのしめきりだったはずですが。',
        vietnamese:
          'Anh Yamamoto, đáng lẽ hôm nay là hạn nộp báo cáo mà.'
      },
      {
        speaker: '山本',
        japanese: '申し訳ございません。昨日中に終わらせるつもりだったんですが、急なトラブルが入ってしまいまして。',
        kana: 'もうしわけございません。きのうじゅうにおわらせるつもりだったんですが、きゅうなトラブルがはいってしまいまして。',
        vietnamese:
          'Xin lỗi ạ. Tôi đã định hoàn thành trong ngày hôm qua, nhưng có sự cố bất ngờ xảy ra.'
      },
      {
        speaker: '部長',
        japanese: 'どんなトラブルですか。',
        kana: 'どんなトラブルですか。',
        vietnamese: 'Sự cố gì vậy?'
      },
      {
        speaker: '山本',
        japanese: 'システム障害のせいで、データが消えてしまったんです。最初からやり直すはずだったのに、時間が足りませんでした。',
        kana: 'システムしょうがいのせいで、データがきえてしまったんです。さいしょからやりなおすはずだったのに、じかんがたりませんでした。',
        vietnamese:
          'Vì lỗi hệ thống mà dữ liệu bị mất. Đáng lẽ phải làm lại từ đầu, nhưng không đủ thời gian.'
      },
      {
        speaker: '部長',
        japanese: 'そういうことでしたか。で、いつまでにできますか。',
        kana: 'そういうことでしたか。で、いつまでにできますか。',
        vietnamese: 'Thì ra là vậy. Vậy khi nào có thể hoàn thành?'
      },
      {
        speaker: '山本',
        japanese: '明日の午前中には必ず提出いたします。二度とこのようなことがないように気をつけます。',
        kana: 'あしたのごぜんちゅうにはかならずていしゅついたします。にどとこのようなことがないようにきをつけます。',
        vietnamese:
          'Tôi nhất định sẽ nộp vào trước trưa mai. Tôi sẽ cẩn thận để không xảy ra chuyện như thế nữa.'
      }
    ],
    culturalNote:
      'Trong văn hóa công sở Nhật, khi giải thích lý do trễ hạn, quan trọng nhất là: (1) xin lỗi ngay trước tiên — không bào chữa trước, (2) nêu lý do ngắn gọn, (3) đưa ra giải pháp cụ thể và thời hạn mới. Câu kết 二度とこのようなことがないように (sẽ không để xảy ra lần nữa) thể hiện sự phản tỉnh — người Nhật đánh giá cao thái độ 反省 (はんせい — tự kiểm điểm).'
  },

  // ── 5. Discussing News/Events (ニュース) ────────────────────
  {
    id: 'n3-conv-05',
    title: 'Thảo luận tin tức / sự kiện',
    titleJp: 'ニュースについて話す',
    level: 'N3',
    situation: 'Hai người bạn nói chuyện về tin tức mới xem được trên mạng',
    patterns: [
      {
        japanese: '〜らしいよ。',
        kana: '〜らしいよ。',
        vietnamese: 'Nghe nói là ~ / Hình như ~ (thông tin từ nguồn đáng tin).',
        memoryTip:
          'Nhớ: らしい → "ra shi" → "ra sự thì" → tin này ra từ sự thật, khá đáng tin. Dùng khi nghe từ nguồn uy tín (báo, TV)'
      },
      {
        japanese: '〜そうです。',
        kana: '〜そうです。',
        vietnamese: 'Nghe nói ~ (truyền đạt thông tin từ người khác).',
        memoryTip:
          'Nhớ: ～そうです (truyền đạt) ≠ ～そうです (vẻ như). Truyền đạt: gắn sau thể thường → "theo nguồn tin thì...". Tưởng tượng bạn là MC đọc tin: "そうです!"'
      },
      {
        japanese: '〜みたいだね。',
        kana: '〜みたいだね。',
        vietnamese: 'Có vẻ như ~ / Dường như ~ (phỏng đoán từ quan sát).',
        memoryTip:
          'Nhớ: みたい → "mi tai" → "mí tai nghe loáng thoáng" → phỏng đoán chưa chắc chắn, dựa vào những gì mình thấy/nghe được'
      }
    ],
    dialogue: [
      {
        speaker: 'ゆうこ',
        japanese: 'ねえ、昨日のニュース見た？東京に新しい美術館ができるらしいよ。',
        kana: 'ねえ、きのうのニュースみた？とうきょうにあたらしいびじゅつかんができるらしいよ。',
        vietnamese:
          'Này, cậu xem tin hôm qua chưa? Nghe nói Tokyo sắp có bảo tàng mỹ thuật mới đấy.'
      },
      {
        speaker: 'けんた',
        japanese: 'ああ、それ聞いた。来年の春にオープンするそうだよ。',
        kana: 'ああ、それきいた。らいねんのはるにオープンするそうだよ。',
        vietnamese:
          'À, mình nghe rồi. Nghe nói sẽ khai trương vào mùa xuân năm sau.'
      },
      {
        speaker: 'ゆうこ',
        japanese: 'デザインがすごくおしゃれみたいだね。有名な建築家が設計したんだって。',
        kana: 'デザインがすごくおしゃれみたいだね。ゆうめいなけんちくかがせっけいしたんだって。',
        vietnamese:
          'Thiết kế có vẻ rất sành điệu. Nghe nói một kiến trúc sư nổi tiếng đã thiết kế.'
      },
      {
        speaker: 'けんた',
        japanese: '入場料はどのくらいなんだろう。最近の美術館は高いからなあ。',
        kana: 'にゅうじょうりょうはどのくらいなんだろう。さいきんのびじゅつかんはたかいからなあ。',
        vietnamese:
          'Giá vé vào khoảng bao nhiêu nhỉ. Bảo tàng dạo này đắt lắm.'
      },
      {
        speaker: 'ゆうこ',
        japanese: '記事によると、学生は無料らしいよ。一般は千五百円だって。',
        kana: 'きじによると、がくせいはむりょうらしいよ。いっぱんはせんごひゃくえんだって。',
        vietnamese:
          'Theo bài báo thì sinh viên được miễn phí. Người thường là 1500 yên.'
      },
      {
        speaker: 'けんた',
        japanese: 'へえ、いいね！オープンしたら一緒に行こうよ。',
        kana: 'へえ、いいね！オープンしたらいっしょにいこうよ。',
        vietnamese: 'Ồ, hay đấy! Khi khai trương thì đi cùng nhé.'
      }
    ],
    culturalNote:
      'Tiếng Nhật phân biệt rõ nguồn thông tin: らしい dùng khi có bằng chứng gián tiếp đáng tin (đọc báo, xem TV); ～そうです (truyền đạt) khi nghe từ ai đó kể lại; みたい khi tự phỏng đoán từ những gì mình thấy. Chọn sai sẽ khiến người nghe hiểu lầm mức độ tin cậy. Trong hội thoại thường ngày, ～んだって là cách nói thân mật của ～そうです.'
  },

  // ── 6. Apartment Hunting (部屋探し) ─────────────────────────────
  {
    id: 'n3-conv-06',
    title: 'Tìm phòng trọ',
    titleJp: '部屋探し',
    level: 'N3',
    situation: 'Khách hàng đến công ty bất động sản để tìm phòng trọ phù hợp',
    patterns: [
      {
        japanese: '間取りは〜がいいんですが。',
        kana: 'まどりは〜がいいんですが。',
        vietnamese: 'Tôi muốn cấu trúc phòng kiểu ~ ...',
        memoryTip:
          'Nhớ: まどり (madori) = "mà đo rì" → đo đạc bố trí phòng. 1K, 2LDK là các loại madori phổ biến ở Nhật'
      },
      {
        japanese: '家賃は〜以内で探しています。',
        kana: 'やちんは〜いないでさがしています。',
        vietnamese: 'Tôi đang tìm với giá thuê trong khoảng ~.',
        memoryTip:
          'Nhớ: やちん (yachin) = "ya chìn" → "nhà chìm" trong tiền thuê hàng tháng. いない = trong phạm vi → đặt ngân sách trần'
      },
      {
        japanese: '敷金・礼金はどのくらいかかりますか。',
        kana: 'しききん・れいきんはどのくらいかかりますか。',
        vietnamese: 'Tiền đặt cọc và tiền cảm ơn khoảng bao nhiêu?',
        memoryTip:
          'Nhớ: しききん (shikikin) = tiền cọc (được trả lại); れいきん (reikin) = "lễ kim" → tiền cảm ơn chủ nhà (KHÔNG được trả lại!) — chỉ có ở Nhật'
      }
    ],
    dialogue: [
      {
        speaker: '客',
        japanese: 'すみません、一人暮らし向けの部屋を探しているんですが。',
        kana: 'すみません、ひとりぐらしむけのへやをさがしているんですが。',
        vietnamese: 'Xin lỗi, tôi đang tìm phòng cho người ở một mình.'
      },
      {
        speaker: '不動産屋',
        japanese: 'ご予算はどのくらいですか。間取りの希望はありますか。',
        kana: 'ごよさんはどのくらいですか。まどりのきぼうはありますか。',
        vietnamese: 'Ngân sách của bạn khoảng bao nhiêu? Bạn có yêu cầu gì về cấu trúc phòng không?'
      },
      {
        speaker: '客',
        japanese: '家賃は7万円以内で、1Kか1DKがいいんですが。駅から近いところがいいです。',
        kana: 'やちんはななまんえんいないで、ワンケーかワンディーケーがいいんですが。えきからちかいところがいいです。',
        vietnamese: 'Giá thuê trong 70,000 yên, 1K hoặc 1DK thì tốt. Tôi muốn gần ga.'
      },
      {
        speaker: '不動産屋',
        japanese: 'この物件はいかがですか。駅から徒歩5分で、築10年です。敷金1ヶ月、礼金1ヶ月です。',
        kana: 'このぶっけんはいかがですか。えきからとほごふんで、ちくじゅうねんです。しききんいっかげつ、れいきんいっかげつです。',
        vietnamese: 'Bất động sản này thì sao? Đi bộ 5 phút từ ga, xây được 10 năm. Tiền cọc 1 tháng, tiền lễ 1 tháng.'
      },
      {
        speaker: '客',
        japanese: '内見はできますか。あと、ペットは飼えますか。',
        kana: 'ないけんはできますか。あと、ペットはかえますか。',
        vietnamese: 'Tôi có thể xem phòng trực tiếp không? À, có nuôi thú cưng được không?'
      },
      {
        speaker: '不動産屋',
        japanese: '内見は今週末に可能です。ただ、こちらの物件はペット不可になっております。',
        kana: 'ないけんはこんしゅうまつにかのうです。ただ、こちらのぶっけんはペットふかになっております。',
        vietnamese: 'Xem phòng có thể vào cuối tuần này. Tuy nhiên, bất động sản này không cho phép nuôi thú cưng.'
      }
    ],
    culturalNote:
      'Hệ thống thuê nhà Nhật có đặc thù riêng: 敷金 (shikikin — tiền cọc, thường được trả lại) và 礼金 (reikin — tiền "cảm ơn" cho chủ nhà, KHÔNG được trả lại). Reikin là tàn dư văn hóa từ thời chiến khi nhà ở khan hiếm. Ngoài ra, nhiều nơi yêu cầu 保証人 (hoshounin — người bảo lãnh), và người nước ngoài thường gặp khó khăn khi tìm phòng do rào cản ngôn ngữ và văn hóa.'
  },

  // ── 7. Workplace Relationships (職場の人間関係) ──────────────────
  {
    id: 'n3-conv-07',
    title: 'Quan hệ nơi công sở',
    titleJp: '職場の人間関係',
    level: 'N3',
    situation: 'Hai đồng nghiệp tâm sự về cách ứng xử với người trong công ty',
    patterns: [
      {
        japanese: '上手に付き合うのは難しいですね。',
        kana: 'じょうずにつきあうのはむずかしいですね。',
        vietnamese: 'Giao thiệp khéo léo thật khó nhỉ.',
        memoryTip:
          'Nhớ: じょうずに (jouzu ni) = một cách khéo léo; つきあう (tsukiau) = "gắn kết" → giao tiếp, duy trì quan hệ. Kỹ năng sống còn ở công sở Nhật!'
      },
      {
        japanese: '先輩に相談してみたらどうですか。',
        kana: 'せんぱいにそうだんしてみたらどうですか。',
        vietnamese: 'Thử hỏi ý kiến tiền bối xem sao?',
        memoryTip:
          'Nhớ: せんぱい (senpai) = "tiên bối" (Hán Việt) → người đi trước, đàn anh. Nghe giống "xen pai" → xen vào hỏi pai (bài) giải quyết vấn đề'
      },
      {
        japanese: '〜のおかげで助かりました。',
        kana: '〜のおかげでたすかりました。',
        vietnamese: 'Nhờ có ~ mà tôi được cứu / rất biết ơn.',
        memoryTip:
          'Nhớ: おかげ = "ô kage" → cái bóng (kage) của chiếc ô che chở → nhờ sự che chở của ai đó mà mình thoát nạn'
      }
    ],
    dialogue: [
      {
        speaker: '佐藤',
        japanese: '最近、新しい上司とうまくいかなくて、困っているんだ。',
        kana: 'さいきん、あたらしいじょうしとうまくいかなくて、こまっているんだ。',
        vietnamese: 'Dạo này, mình không hòa hợp lắm với sếp mới, khó xử quá.'
      },
      {
        speaker: '鈴木',
        japanese: 'そうなの？上手に付き合うのは難しいよね。どんなことがあったの？',
        kana: 'そうなの？じょうずにつきあうのはむずかしいよね。どんなことがあったの？',
        vietnamese: 'Thật hả? Giao tiếp khéo léo thật khó nhỉ. Chuyện gì xảy ra vậy?'
      },
      {
        speaker: '佐藤',
        japanese: '報告書の書き方について、毎回細かく指摘されるんだよ。前の上司は何も言わなかったのに。',
        kana: 'ほうこくしょのかきかたについて、まいかいこまかくしてきされるんだよ。まえのじょうしはなにもいわなかったのに。',
        vietnamese: 'Về cách viết báo cáo, lần nào cũng bị chỉ ra từng chi tiết nhỏ. Sếp cũ chẳng nói gì mà.'
      },
      {
        speaker: '鈴木',
        japanese: 'それは大変だね。でも、期待されているからかもしれないよ。先輩に相談してみたらどうかな。',
        kana: 'それはたいへんだね。でも、きたいされているからかもしれないよ。せんぱいにそうだんしてみたらどうかな。',
        vietnamese: 'Vất vả nhỉ. Nhưng có khi là vì được kỳ vọng đấy. Thử hỏi tiền bối xem sao?'
      },
      {
        speaker: '佐藤',
        japanese: 'そうだね。田中先輩のおかげで前も助かったし、相談してみるよ。',
        kana: 'そうだね。たなかせんぱいのおかげでまえもたすかったし、そうだんしてみるよ。',
        vietnamese: 'Ừ nhỉ. Nhờ anh Tanaka mà trước cũng thoát rồi, mình sẽ thử hỏi.'
      }
    ],
    culturalNote:
      'Văn hóa 先輩・後輩 (senpai-kouhai) là trụ cột quan hệ trong công sở Nhật. Senpai (người đến trước) có trách nhiệm hướng dẫn kouhai (người đến sau), và kouhai phải thể hiện sự kính trọng. Khi gặp khó khăn, người Nhật thường tìm đến senpai đáng tin cậy — không phải HR hay sếp trực tiếp. Biết cách 上手に付き合う (giao thiệp khéo) được coi là kỹ năng quan trọng hơn cả năng lực chuyên môn.'
  },

  // ── 8. Health & Diet (健康) ─────────────────────────────────────
  {
    id: 'n3-conv-08',
    title: 'Sức khỏe & chế độ ăn',
    titleJp: '健康と食生活',
    level: 'N3',
    situation: 'Hai người bạn nói chuyện về sức khỏe và chế độ ăn uống, tập luyện',
    patterns: [
      {
        japanese: '最近、運動不足で太ってきたんだ。',
        kana: 'さいきん、うんどうぶそくでふとってきたんだ。',
        vietnamese: 'Dạo này, thiếu vận động nên béo lên rồi.',
        memoryTip:
          'Nhớ: うんどうぶそく (undou busoku) = "vận động bất túc" (Hán Việt) → thiếu vận động. ふとる (futoru) → "phù tô" → phù lên, béo ra'
      },
      {
        japanese: 'ダイエットを始めようと思っているんだけど。',
        kana: 'ダイエットをはじめようとおもっているんだけど。',
        vietnamese: 'Tôi đang nghĩ sẽ bắt đầu ăn kiêng...',
        memoryTip:
          'Nhớ: ダイエット (daietto) = diet, nhưng ở Nhật nghĩa rộng hơn: bao gồm cả giảm cân + ăn uống lành mạnh. ～ようと思っている = đang có ý định (chưa hành động)'
      },
      {
        japanese: '健康のために〜ようにしています。',
        kana: 'けんこうのために〜ようにしています。',
        vietnamese: 'Vì sức khỏe, tôi đang cố gắng ~.',
        memoryTip:
          'Nhớ: けんこう (kenkou) = "kiện khang" → sức khỏe. ～ようにしている = tạo thói quen, cố duy trì → khác với ～ている (đang làm), nhấn mạnh nỗ lực'
      }
    ],
    dialogue: [
      {
        speaker: 'あきこ',
        japanese: 'ねえ、最近ちょっと太ったんじゃない？',
        kana: 'ねえ、さいきんちょっとふとったんじゃない？',
        vietnamese: 'Này, dạo này hơi béo lên rồi phải không?'
      },
      {
        speaker: 'たかし',
        japanese: 'うん、在宅勤務で運動不足なんだよ。ダイエットを始めようと思っているんだけど、なかなか続かなくて。',
        kana: 'うん、ざいたくきんむでうんどうぶそくなんだよ。ダイエットをはじめようとおもっているんだけど、なかなかつづかなくて。',
        vietnamese: 'Ừ, làm việc tại nhà nên thiếu vận động. Định bắt đầu ăn kiêng nhưng khó duy trì lắm.'
      },
      {
        speaker: 'あきこ',
        japanese: '私は健康のために毎朝ジョギングするようにしているよ。最初は大変だったけど、慣れたら気持ちいいよ。',
        kana: 'わたしはけんこうのためにまいあさジョギングするようにしているよ。さいしょはたいへんだったけど、なれたらきもちいいよ。',
        vietnamese: 'Mình vì sức khỏe nên cố chạy bộ mỗi sáng. Đầu tiên vất vả nhưng quen rồi thì rất dễ chịu.'
      },
      {
        speaker: 'たかし',
        japanese: 'すごいね。食事も気をつけてる？',
        kana: 'すごいね。しょくじもきをつけてる？',
        vietnamese: 'Giỏi quá. Bạn cũng chú ý ăn uống à?'
      },
      {
        speaker: 'あきこ',
        japanese: 'うん、野菜を多く食べるようにして、揚げ物は週に一回だけにしてる。',
        kana: 'うん、やさいをおおくたべるようにして、あげものはしゅうにいっかいだけにしてる。',
        vietnamese: 'Ừ, cố ăn nhiều rau, đồ chiên thì chỉ một lần một tuần thôi.'
      },
      {
        speaker: 'たかし',
        japanese: 'よし、僕も明日から頑張ってみるよ。まずはエレベーターじゃなくて階段を使うことにする！',
        kana: 'よし、ぼくもあしたからがんばってみるよ。まずはエレベーターじゃなくてかいだんをつかうことにする！',
        vietnamese: 'Được, mình cũng sẽ cố từ ngày mai. Trước hết là dùng cầu thang thay thang máy!'
      }
    ],
    culturalNote:
      'Ở Nhật, khái niệm メタボ (metabo — metabolic syndrome) được chính phủ tuyên truyền rộng rãi. Từ 2008, công ty bắt buộc kiểm tra vòng eo nhân viên trên 40 tuổi — vượt chuẩn sẽ bị yêu cầu tham gia chương trình giảm cân. Người Nhật cũng có văn hóa 腹八分目 (はらはちぶんめ — ăn chỉ 80% bụng) — triết lý ăn uống giúp sống thọ.'
  },

  // ── 9. Technology / Internet (テクノロジー) ─────────────────────
  {
    id: 'n3-conv-09',
    title: 'Công nghệ & Internet',
    titleJp: 'テクノロジー',
    level: 'N3',
    situation: 'Hai đồng nghiệp nói về smartphone, ứng dụng và mạng Internet',
    patterns: [
      {
        japanese: 'スマホのアプリで〜できるんですよ。',
        kana: 'スマホのアプリで〜できるんですよ。',
        vietnamese: 'Bằng app điện thoại có thể ~ đấy.',
        memoryTip:
          'Nhớ: スマホ (sumaho) = smartphone (viết tắt kiểu Nhật); アプリ (apuri) = application → Nhật rất hay viết tắt từ mượn: パソコン, コンビニ, スマホ...'
      },
      {
        japanese: 'ネットで調べたら、〜ということがわかりました。',
        kana: 'ネットでしらべたら、〜ということがわかりました。',
        vietnamese: 'Tra trên mạng thì biết được rằng ~.',
        memoryTip:
          'Nhớ: ネット (netto) = Internet (net). ～ということがわかった = "biết được rằng ~" → cấu trúc N3 hay dùng để trình bày kết quả tìm hiểu'
      },
      {
        japanese: '〜の使い方がよくわからないんですが。',
        kana: '〜のつかいかたがよくわからないんですが。',
        vietnamese: 'Tôi không rõ cách sử dụng ~ lắm...',
        memoryTip:
          'Nhớ: つかいかた (tsukaikata) = "cách sử dụng" → V(ます stem) + かた = cách làm gì đó. Mẫu rất hữu ích: 読み方, 書き方, 食べ方'
      }
    ],
    dialogue: [
      {
        speaker: '中村',
        japanese: '最近、すごく便利なアプリを見つけたんですよ。スマホで電車の乗り換えがすぐわかるんです。',
        kana: 'さいきん、すごくべんりなアプリをみつけたんですよ。スマホででんしゃののりかえがすぐわかるんです。',
        vietnamese: 'Dạo này, tôi tìm được app rất tiện. Dùng điện thoại là biết ngay cách chuyển tàu.'
      },
      {
        speaker: '高橋',
        japanese: 'へえ、何ていうアプリ？実は私、乗り換えアプリの使い方がよくわからなくて。',
        kana: 'へえ、なんていうアプリ？じつはわたし、のりかえアプリのつかいかたがよくわからなくて。',
        vietnamese: 'Ồ, app tên gì vậy? Thực ra tôi không rõ cách dùng app chuyển tàu lắm.'
      },
      {
        speaker: '中村',
        japanese: '「乗換案内」っていうアプリです。出発駅と到着駅を入れるだけで、最短ルートが出ますよ。',
        kana: '「のりかえあんない」っていうアプリです。しゅっぱつえきととうちゃくえきをいれるだけで、さいたんルートがでますよ。',
        vietnamese: 'App tên "Norikae Annai". Chỉ cần nhập ga đi và ga đến là ra tuyến ngắn nhất.'
      },
      {
        speaker: '高橋',
        japanese: 'ネットで調べたら、レビューもすごくいいということがわかりました。早速ダウンロードしてみます。',
        kana: 'ネットでしらべたら、レビューもすごくいいということがわかりました。さっそくダウンロードしてみます。',
        vietnamese: 'Tra trên mạng thì biết review cũng rất tốt. Tôi sẽ tải ngay.'
      },
      {
        speaker: '中村',
        japanese: 'あ、Wi-Fiにつないでからダウンロードしたほうがいいですよ。結構容量が大きいので。',
        kana: 'あ、ワイファイにつないでからダウンロードしたほうがいいですよ。けっこうようりょうがおおきいので。',
        vietnamese: 'À, nên kết nối Wi-Fi rồi hãy tải nhé. Dung lượng khá lớn đấy.'
      }
    ],
    culturalNote:
      'Nhật Bản là xã hội công nghệ cao nhưng có nghịch lý thú vị: nhiều cơ quan chính phủ và ngân hàng vẫn dùng fax và con dấu (はんこ) thay chữ ký điện tử. Thuật ngữ IT ở Nhật chủ yếu là katakana từ tiếng Anh nhưng thường bị rút gọn: smartphone → スマホ, application → アプリ, personal computer → パソコン. Biết cách rút gọn này rất quan trọng cho giao tiếp thực tế.'
  },

  // ── 10. Environmental Issues (環境問題) ─────────────────────────
  {
    id: 'n3-conv-10',
    title: 'Vấn đề môi trường',
    titleJp: '環境問題',
    level: 'N3',
    situation: 'Hàng xóm nói chuyện về phân loại rác và bảo vệ môi trường',
    patterns: [
      {
        japanese: '環境のために〜なければなりません。',
        kana: 'かんきょうのために〜なければなりません。',
        vietnamese: 'Vì môi trường, phải ~.',
        memoryTip:
          'Nhớ: かんきょう (kankyou) = "hoàn cảnh" (Hán Việt) → môi trường xung quanh. ～なければならない = nghĩa vụ bắt buộc → vì môi trường, PHẢI làm'
      },
      {
        japanese: 'ゴミの分別をちゃんとしないといけませんよ。',
        kana: 'ゴミのぶんべつをちゃんとしないといけませんよ。',
        vietnamese: 'Phải phân loại rác cho đúng đấy.',
        memoryTip:
          'Nhớ: ぶんべつ (bunbetsu) = "phân biệt" (Hán Việt) → phân loại rác. ちゃんと = đúng đắn, đàng hoàng → nhấn mạnh phải làm cho đúng cách'
      },
      {
        japanese: 'エコバッグを持っていくようにしています。',
        kana: 'エコバッグをもっていくようにしています。',
        vietnamese: 'Tôi cố gắng mang theo túi eco.',
        memoryTip:
          'Nhớ: エコ (eko) = eco, thân thiện môi trường. バッグ (baggu) = bag, túi. Từ 2020, Nhật tính phí túi nilon → ai cũng mang エコバッグ'
      }
    ],
    dialogue: [
      {
        speaker: '木村',
        japanese: 'すみません、この燃えないゴミはいつ出せばいいですか。',
        kana: 'すみません、このもえないゴミはいついだせばいいですか。',
        vietnamese: 'Xin lỗi, rác không cháy này bỏ ra khi nào ạ?'
      },
      {
        speaker: '吉田',
        japanese: '燃えないゴミは第二・第四水曜日ですよ。ゴミの分別をちゃんとしないと、回収してもらえませんからね。',
        kana: 'もえないゴミはだいに・だいよんすいようびですよ。ゴミのぶんべつをちゃんとしないと、かいしゅうしてもらえませんからね。',
        vietnamese: 'Rác không cháy là thứ Tư tuần 2 và tuần 4 nhé. Không phân loại đúng thì không được thu gom đâu.'
      },
      {
        speaker: '木村',
        japanese: 'ペットボトルはどうすればいいですか。',
        kana: 'ペットボトルはどうすればいいですか。',
        vietnamese: 'Chai nhựa PET thì làm sao ạ?'
      },
      {
        speaker: '吉田',
        japanese: 'ラベルをはがして、キャップを外して、中を洗ってから出してくださいね。環境のためにリサイクルしなければなりませんから。',
        kana: 'ラベルをはがして、キャップをはずして、なかをあらってからだしてくださいね。かんきょうのためにリサイクルしなければなりませんから。',
        vietnamese: 'Bóc nhãn, tháo nắp, rửa bên trong rồi hãy bỏ nhé. Vì môi trường phải tái chế mà.'
      },
      {
        speaker: '木村',
        japanese: '細かいですね。あ、そういえば、最近はスーパーでもエコバッグが必要ですよね。',
        kana: 'こまかいですね。あ、そういえば、さいきんはスーパーでもエコバッグがひつようですよね。',
        vietnamese: 'Chi tiết quá nhỉ. À mà nói vậy, dạo này ở siêu thị cũng cần túi eco rồi nhỉ.'
      },
      {
        speaker: '吉田',
        japanese: 'そうですよ。私はいつもエコバッグを持っていくようにしています。小さなことでも地球のためになりますからね。',
        kana: 'そうですよ。わたしはいつもエコバッグをもっていくようにしています。ちいさなことでもちきゅうのためになりますからね。',
        vietnamese: 'Đúng rồi. Tôi luôn cố mang theo túi eco. Dù là việc nhỏ cũng có ích cho trái đất mà.'
      }
    ],
    culturalNote:
      'Nhật Bản có hệ thống phân loại rác phức tạp nhất thế giới: 燃えるゴミ (rác cháy được), 燃えないゴミ (rác không cháy), 資源ゴミ (rác tái chế), 粗大ゴミ (rác cồng kềnh — phải trả phí). Mỗi loại có ngày thu gom khác nhau, và bỏ sai sẽ bị để lại với sticker cảnh báo. Người nước ngoài mới đến Nhật thường bị shock bởi độ phức tạp này.'
  },

  // ── 11. Wedding / Ceremony (結婚式) ─────────────────────────────
  {
    id: 'n3-conv-11',
    title: 'Lễ cưới',
    titleJp: '結婚式',
    level: 'N3',
    situation: 'Bạn bè thảo luận về việc tham dự đám cưới của đồng nghiệp',
    patterns: [
      {
        japanese: '結婚式に出席することになりました。',
        kana: 'けっこんしきにしゅっせきすることになりました。',
        vietnamese: 'Tôi sẽ tham dự lễ cưới.',
        memoryTip:
          'Nhớ: けっこんしき (kekkonshiki) = "kết hôn thức" → nghi thức kết hôn. ～ことになりました = đã được quyết định (không phải mình chủ động quyết)'
      },
      {
        japanese: 'ご祝儀はいくら包めばいいですか。',
        kana: 'ごしゅうぎはいくらつつめばいいですか。',
        vietnamese: 'Nên bỏ bao nhiêu tiền mừng?',
        memoryTip:
          'Nhớ: ごしゅうぎ (goshuugi) = "ngự chúc nghi" → tiền mừng lễ. つつむ = gói → phải bỏ vào phong bì đặc biệt gọi là 祝儀袋 (shuugibukuro)'
      },
      {
        japanese: 'お祝いの言葉を伝えたいんですが。',
        kana: 'おいわいのことばをつたえたいんですが。',
        vietnamese: 'Tôi muốn gửi lời chúc mừng...',
        memoryTip:
          'Nhớ: おいわい (oiwai) = lời chúc mừng → "ôi wai" → "Ôi, wai wai!" reo mừng khi có chuyện vui. ことば = lời nói, つたえる = truyền đạt'
      }
    ],
    dialogue: [
      {
        speaker: '美咲',
        japanese: '来月、山田さんの結婚式に出席することになったんだけど、何を準備すればいいかな。',
        kana: 'らいげつ、やまださんのけっこんしきにしゅっせきすることになったんだけど、なにをじゅんびすればいいかな。',
        vietnamese: 'Tháng sau mình sẽ dự đám cưới anh Yamada, cần chuẩn bị gì nhỉ?'
      },
      {
        speaker: '真理',
        japanese: 'まず、ご祝儀を用意しなきゃ。同僚なら3万円が相場だよ。',
        kana: 'まず、ごしゅうぎをよういしなきゃ。どうりょうならさんまんえんがそうばだよ。',
        vietnamese: 'Trước hết phải chuẩn bị tiền mừng. Đồng nghiệp thì 30,000 yên là giá chung.'
      },
      {
        speaker: '美咲',
        japanese: 'そうなんだ。新札じゃないとダメなんだよね？',
        kana: 'そうなんだ。しんさつじゃないとダメなんだよね？',
        vietnamese: 'Vậy à. Phải tiền mới phải không?'
      },
      {
        speaker: '真理',
        japanese: 'うん、銀行で新札に替えておいてね。あと、服装は白は避けたほうがいいよ。白は花嫁の色だから。',
        kana: 'うん、ぎんこうでしんさつにかえておいてね。あと、ふくそうはしろはさけたほうがいいよ。しろははなよめのいろだから。',
        vietnamese: 'Ừ, đổi tiền mới ở ngân hàng nhé. À, trang phục thì nên tránh màu trắng. Vì trắng là màu của cô dâu.'
      },
      {
        speaker: '美咲',
        japanese: 'ありがとう！お祝いの言葉も考えなきゃ。何て言えばいいかな。',
        kana: 'ありがとう！おいわいのことばもかんがえなきゃ。なんていえばいいかな。',
        vietnamese: 'Cảm ơn! Phải nghĩ lời chúc nữa. Nói gì thì hay nhỉ?'
      },
      {
        speaker: '真理',
        japanese: '「末永くお幸せに」が定番だよ。あ、「別れる」「切る」みたいな忌み言葉は絶対使っちゃダメだからね！',
        kana: '「すえながくおしあわせに」がていばんだよ。あ、「わかれる」「きる」みたいないみことばはぜったいつかっちゃダメだからね！',
        vietnamese: '"Chúc hạnh phúc mãi mãi" là câu kinh điển. À, tuyệt đối không dùng từ kiêng kỵ như "chia tay", "cắt" nhé!'
      }
    ],
    culturalNote:
      'Đám cưới Nhật có nhiều quy tắc nghiêm ngặt: tiền mừng (ご祝儀) phải là số lẻ (3万, 5万) vì số chẵn "chia đôi được" = tan vỡ. Phải dùng tiền mới, bỏ vào phong bì 祝儀袋 đặc biệt. Có danh sách 忌み言葉 (imi-kotoba — từ kiêng kỵ) không được nói: 別れる (chia tay), 切る (cắt), 終わる (kết thúc), 戻る (quay lại)... Khách mặc trang trọng, phụ nữ tránh màu trắng (dành cho cô dâu).'
  },

  // ── 12. Reporting a Problem (報告) ──────────────────────────────
  {
    id: 'n3-conv-12',
    title: 'Báo cáo vấn đề',
    titleJp: '問題の報告',
    level: 'N3',
    situation: 'Nhân viên báo cáo sự cố với quản lý và đề xuất biện pháp xử lý',
    patterns: [
      {
        japanese: '〜について報告があります。',
        kana: '〜についてほうこくがあります。',
        vietnamese: 'Tôi có báo cáo về ~.',
        memoryTip:
          'Nhớ: ほうこく (houkoku) = "báo cáo" (Hán Việt) → giống hệt! Đây là từ đầu tiên phải nói khi vào phòng sếp báo tin xấu'
      },
      {
        japanese: '問題が発生してしまいました。',
        kana: 'もんだいがはっせいしてしまいました。',
        vietnamese: 'Đã xảy ra vấn đề rồi.',
        memoryTip:
          'Nhớ: もんだい (mondai) = "vấn đề" → "mòn đai" → vấn đề mòn hết đai (dây thắt lưng). はっせい (hassei) = phát sinh → ～てしまう = đáng tiếc'
      },
      {
        japanese: '対策として〜を提案いたします。',
        kana: 'たいさくとして〜をていあんいたします。',
        vietnamese: 'Là biện pháp đối phó, tôi xin đề xuất ~.',
        memoryTip:
          'Nhớ: たいさく (taisaku) = "đối sách" (Hán Việt) → biện pháp đối phó. ていあん (teian) = "đề án" → đề xuất. Báo cáo Nhật luôn phải kèm giải pháp!'
      }
    ],
    dialogue: [
      {
        speaker: '社員',
        japanese: '部長、お時間よろしいでしょうか。納品について報告があります。',
        kana: 'ぶちょう、おじかんよろしいでしょうか。のうひんについてほうこくがあります。',
        vietnamese: 'Trưởng phòng, có thời gian không ạ? Tôi có báo cáo về việc giao hàng.'
      },
      {
        speaker: '部長',
        japanese: 'はい、どうぞ。',
        kana: 'はい、どうぞ。',
        vietnamese: 'Được, nói đi.'
      },
      {
        speaker: '社員',
        japanese: '実は、工場のトラブルで、来週の納品に問題が発生してしまいました。予定より3日遅れる見込みです。',
        kana: 'じつは、こうじょうのトラブルで、らいしゅうののうひんにもんだいがはっせいしてしまいました。よていよりみっかおくれるみこみです。',
        vietnamese: 'Thực ra, do sự cố ở nhà máy, đã phát sinh vấn đề với giao hàng tuần sau. Dự kiến trễ 3 ngày so với kế hoạch.'
      },
      {
        speaker: '部長',
        japanese: '3日も遅れるのか。クライアントへの影響は？',
        kana: 'みっかもおくれるのか。クライアントへのえいきょうは？',
        vietnamese: 'Trễ tận 3 ngày à. Ảnh hưởng đến khách hàng thế nào?'
      },
      {
        speaker: '社員',
        japanese: '対策として、一部を先に出荷して、残りを後から送ることを提案いたします。そうすれば、お客様の業務に大きな影響は出ないと思います。',
        kana: 'たいさくとして、いちぶをさきにしゅっかして、のこりをあとからおくることをていあんいたします。そうすれば、おきゃくさまのぎょうむにおおきなえいきょうはでないとおもいます。',
        vietnamese: 'Tôi đề xuất biện pháp: xuất một phần trước, phần còn lại gửi sau. Như vậy sẽ không ảnh hưởng lớn đến công việc của khách hàng.'
      },
      {
        speaker: '部長',
        japanese: 'わかった。すぐにクライアントにも連絡してくれ。今後はこういうリスクを早めに報告するようにしてくれ。',
        kana: 'わかった。すぐにクライアントにもれんらくしてくれ。こんごはこういうリスクをはやめにほうこくするようにしてくれ。',
        vietnamese: 'Hiểu rồi. Liên hệ khách hàng ngay. Sau này hãy báo cáo sớm những rủi ro kiểu này.'
      }
    ],
    culturalNote:
      'Trong văn hóa công sở Nhật, 報連相 (hou-ren-sou: 報告・連絡・相談 — báo cáo, liên lạc, trao đổi) là nguyên tắc vàng. Khi báo cáo vấn đề, cấu trúc chuẩn là: (1) Xin phép nói chuyện, (2) Nêu vấn đề kèm dữ kiện cụ thể, (3) Đề xuất giải pháp. Báo cáo chỉ nêu vấn đề mà không có 対策 (taisaku — biện pháp) sẽ bị đánh giá thấp.'
  },

  // ── 13. Travel Trouble (旅行のトラブル) ─────────────────────────
  {
    id: 'n3-conv-13',
    title: 'Rắc rối khi du lịch',
    titleJp: '旅行のトラブル',
    level: 'N3',
    situation: 'Du khách gặp vấn đề với đặt phòng khách sạn và mất hộ chiếu',
    patterns: [
      {
        japanese: 'パスポートをなくしてしまったんです。',
        kana: 'パスポートをなくしてしまったんです。',
        vietnamese: 'Tôi đã lỡ làm mất hộ chiếu rồi.',
        memoryTip:
          'Nhớ: パスポート (pasupooto) = passport. なくす = làm mất; てしまう = lỡ tay, hối hận → biểu đạt sự đáng tiếc khi mất đồ quan trọng'
      },
      {
        japanese: '予約が間違っているようなんですが。',
        kana: 'よやくがまちがっているようなんですが。',
        vietnamese: 'Có vẻ như đặt chỗ bị sai...',
        memoryTip:
          'Nhớ: よやく (yoyaku) = "dự ước" → đặt trước. まちがう = sai, nhầm. ようなんですが = "có vẻ như... nhưng..." → cách nói mềm mỏng khi phàn nàn'
      },
      {
        japanese: 'どうすればいいか教えていただけますか。',
        kana: 'どうすればいいかおしえていただけますか。',
        vietnamese: 'Bạn có thể chỉ cho tôi nên làm gì được không?',
        memoryTip:
          'Nhớ: どうすればいいか = nên làm gì; おしえていただけますか = xin hãy chỉ dạy (kính ngữ) → cầu cứu một cách lịch sự khi gặp rắc rối'
      }
    ],
    dialogue: [
      {
        speaker: '旅行者',
        japanese: 'すみません、予約が間違っているようなんですが。ツインルームを予約したのに、シングルになっています。',
        kana: 'すみません、よやくがまちがっているようなんですが。ツインルームをよやくしたのに、シングルになっています。',
        vietnamese: 'Xin lỗi, có vẻ đặt phòng bị sai. Tôi đặt phòng đôi mà lại thành phòng đơn.'
      },
      {
        speaker: 'フロント',
        japanese: '申し訳ございません。確認いたしますので、少々お待ちください。',
        kana: 'もうしわけございません。かくにんいたしますので、しょうしょうおまちください。',
        vietnamese: 'Xin lỗi ạ. Để tôi kiểm tra, xin đợi một chút.'
      },
      {
        speaker: 'フロント',
        japanese: 'お客様、確認したところ、システムのエラーだったようです。ツインルームに変更いたします。',
        kana: 'おきゃくさま、かくにんしたところ、システムのエラーだったようです。ツインルームにへんこういたします。',
        vietnamese: 'Thưa quý khách, kiểm tra thì có vẻ do lỗi hệ thống. Chúng tôi sẽ đổi sang phòng đôi.'
      },
      {
        speaker: '旅行者',
        japanese: 'よかった。あの、もう一つ困ったことがあるんですが...実はパスポートをなくしてしまったんです。',
        kana: 'よかった。あの、もうひとつこまったことがあるんですが...じつはパスポートをなくしてしまったんです。',
        vietnamese: 'May quá. À, còn một vấn đề nữa... thực ra tôi đã làm mất hộ chiếu.'
      },
      {
        speaker: 'フロント',
        japanese: 'それは大変ですね。まず、警察に届け出を出して、それから大使館に連絡されたほうがいいですよ。',
        kana: 'それはたいへんですね。まず、けいさつにとどけでをだして、それからたいしかんにれんらくされたほうがいいですよ。',
        vietnamese: 'Vậy thì khổ quá nhỉ. Trước hết nên đến cảnh sát trình báo, sau đó liên hệ đại sứ quán.'
      },
      {
        speaker: '旅行者',
        japanese: '最寄りの警察署はどこか、教えていただけますか。',
        kana: 'もよりのけいさつしょはどこか、おしえていただけますか。',
        vietnamese: 'Đồn cảnh sát gần nhất ở đâu, bạn có thể chỉ cho tôi được không?'
      }
    ],
    culturalNote:
      'Khi mất hộ chiếu ở Nhật, quy trình là: (1) Báo cảnh sát tại 交番 (kouban — chốt cảnh sát) hoặc 警察署 (keisatsusho — đồn cảnh sát), nhận 遺失届 (ishitsu todoke — giấy trình báo mất). (2) Liên hệ đại sứ quán. Nhật Bản nổi tiếng tỷ lệ trả lại đồ thất lạc rất cao — khoảng 83% ví bị mất được trả lại nguyên vẹn! Luôn giữ bản photo hộ chiếu riêng.'
  },

  // ── 14. Recommendation (推薦) ───────────────────────────────────
  {
    id: 'n3-conv-14',
    title: 'Giới thiệu & đề xuất',
    titleJp: 'おすすめ',
    level: 'N3',
    situation: 'Bạn bè hỏi nhau về nhà hàng, dựa trên review và trải nghiệm cá nhân',
    patterns: [
      {
        japanese: 'おすすめの〜はありますか。',
        kana: 'おすすめの〜はありますか。',
        vietnamese: 'Có ~ nào đáng giới thiệu không?',
        memoryTip:
          'Nhớ: おすすめ (osusume) = "ô xù xù mê" → thứ mà bạn mê đến mức muốn xù lông gà recommend cho mọi người. Từ gốc: 勧める (susumeru — khuyên, giới thiệu)'
      },
      {
        japanese: '評判がいいと聞きました。',
        kana: 'ひょうばんがいいとききました。',
        vietnamese: 'Tôi nghe nói danh tiếng tốt.',
        memoryTip:
          'Nhớ: ひょうばん (hyouban) = "bình phán" → đánh giá, tiếng tăm. Giống "review" → nghe bình phán tốt nên muốn thử'
      },
      {
        japanese: '口コミで人気があるみたいです。',
        kana: 'くちコミでにんきがあるみたいです。',
        vietnamese: 'Có vẻ được đánh giá cao trên review.',
        memoryTip:
          'Nhớ: くちコミ (kuchikomi) = "mouth communication" → truyền miệng, review. Nhật rất tin 口コミ — xem review trước khi ăn/mua là thói quen quốc dân'
      }
    ],
    dialogue: [
      {
        speaker: 'さおり',
        japanese: '来週、友達が東京に来るんだけど、おすすめのレストランはある？',
        kana: 'らいしゅう、ともだちがとうきょうにくるんだけど、おすすめのレストランはある？',
        vietnamese: 'Tuần sau bạn mình đến Tokyo, có nhà hàng nào đáng giới thiệu không?'
      },
      {
        speaker: 'だいき',
        japanese: '渋谷にある「和心」っていうお店、評判がいいと聞いたよ。和食がメインだけど、外国人にも人気らしい。',
        kana: 'しぶやにある「わごころ」っていうおみせ、ひょうばんがいいときいたよ。わしょくがメインだけど、がいこくじんにもにんきらしい。',
        vietnamese: 'Quán tên "Wagokoro" ở Shibuya, nghe nói đánh giá tốt lắm. Món Nhật là chính nhưng người nước ngoài cũng thích.'
      },
      {
        speaker: 'さおり',
        japanese: 'へえ、口コミで人気があるみたいだね。値段はどのくらい？',
        kana: 'へえ、くちコミでにんきがあるみたいだね。ねだんはどのくらい？',
        vietnamese: 'Ồ, review có vẻ đánh giá cao nhỉ. Giá cả thế nào?'
      },
      {
        speaker: 'だいき',
        japanese: 'ランチなら千五百円ぐらいだよ。予約したほうがいいと思うけど。',
        kana: 'ランチならせんごひゃくえんぐらいだよ。よやくしたほうがいいとおもうけど。',
        vietnamese: 'Bữa trưa khoảng 1500 yên. Nhưng mình nghĩ nên đặt trước.'
      },
      {
        speaker: 'さおり',
        japanese: 'いいね！ネットで予約できる？',
        kana: 'いいね！ネットでよやくできる？',
        vietnamese: 'Hay đấy! Đặt qua mạng được không?'
      },
      {
        speaker: 'だいき',
        japanese: 'うん、食べログで予約できるはずだよ。あ、でもアレルギーがあったら、事前に伝えたほうがいいよ。',
        kana: 'うん、たべログでよやくできるはずだよ。あ、でもアレルギーがあったら、じぜんにつたえたほうがいいよ。',
        vietnamese: 'Ừ, đặt qua Tabelog được. À, nếu có dị ứng thì nên báo trước nhé.'
      }
    ],
    culturalNote:
      '食べログ (Tabelog) và ぐるなび (Gurunavi) là hai trang review ẩm thực lớn nhất Nhật. Người Nhật rất coi trọng 口コミ (kuchikomi — đánh giá) và thường kiểm tra điểm số trước khi chọn nhà hàng. Điểm Tabelog trên 3.5/5 được coi là xuất sắc. Văn hóa おすすめ rất phổ biến — nhân viên nhà hàng thường giới thiệu 本日のおすすめ (món đề xuất hôm nay).'
  },

  // ── 15. Volunteering (ボランティア) ─────────────────────────────
  {
    id: 'n3-conv-15',
    title: 'Hoạt động tình nguyện',
    titleJp: 'ボランティア活動',
    level: 'N3',
    situation: 'Sinh viên rủ bạn tham gia hoạt động tình nguyện cộng đồng',
    patterns: [
      {
        japanese: 'ボランティア活動に参加しませんか。',
        kana: 'ボランティアかつどうにさんかしませんか。',
        vietnamese: 'Bạn có muốn tham gia hoạt động tình nguyện không?',
        memoryTip:
          'Nhớ: ボランティア (borantia) = volunteer → tình nguyện. かつどう (katsudou) = "hoạt động" (Hán Việt). ～ませんか = lời mời lịch sự'
      },
      {
        japanese: '地域のために何かしたいと思っています。',
        kana: 'ちいきのためになにかしたいとおもっています。',
        vietnamese: 'Tôi muốn làm gì đó cho cộng đồng địa phương.',
        memoryTip:
          'Nhớ: ちいき (chiiki) = "địa vực" → khu vực, cộng đồng địa phương. ～ために = vì mục đích ~ → thể hiện động lực đẹp'
      },
      {
        japanese: '〜の経験が〜に役に立つと思います。',
        kana: '〜のけいけんが〜にやくにたつとおもいます。',
        vietnamese: 'Tôi nghĩ kinh nghiệm ~ sẽ có ích cho ~.',
        memoryTip:
          'Nhớ: やくにたつ (yaku ni tatsu) = "dịch ni tạt" → có ích, hữu dụng. Dùng để nói kinh nghiệm/kỹ năng của mình phù hợp với công việc tình nguyện'
      }
    ],
    dialogue: [
      {
        speaker: 'ゆい',
        japanese: 'ねえ、今度の日曜日、一緒にボランティア活動に参加しない？',
        kana: 'ねえ、こんどのにちようび、いっしょにボランティアかつどうにさんかしない？',
        vietnamese: 'Này, chủ nhật tới đi tham gia hoạt động tình nguyện cùng không?'
      },
      {
        speaker: 'こうへい',
        japanese: 'どんな活動？ちょっと興味あるかも。',
        kana: 'どんなかつどう？ちょっときょうみあるかも。',
        vietnamese: 'Hoạt động gì vậy? Mình hơi hứng thú đấy.'
      },
      {
        speaker: 'ゆい',
        japanese: '地域の公園の清掃活動だよ。子供たちに安全な遊び場を作りたいんだ。',
        kana: 'ちいきのこうえんのせいそうかつどうだよ。こどもたちにあんぜんなあそびばをつくりたいんだ。',
        vietnamese: 'Dọn vệ sinh công viên khu vực. Muốn tạo sân chơi an toàn cho trẻ em.'
      },
      {
        speaker: 'こうへい',
        japanese: 'いいね。僕もこの地域のために何かしたいと思っていたんだ。何時集合？',
        kana: 'いいね。ぼくもこのちいきのためになにかしたいとおもっていたんだ。なんじしゅうごう？',
        vietnamese: 'Hay đấy. Mình cũng muốn làm gì đó cho cộng đồng. Mấy giờ tập trung?'
      },
      {
        speaker: 'ゆい',
        japanese: '朝9時に公園の入り口で。軍手とゴミ袋は用意してあるから、動きやすい服装で来てね。',
        kana: 'あさくじにこうえんのいりぐちで。ぐんてとゴミぶくろはよういしてあるから、うごきやすいふくそうできてね。',
        vietnamese: '9 giờ sáng ở cổng công viên. Găng tay và túi rác đã chuẩn bị sẵn rồi, mặc đồ dễ vận động nhé.'
      },
      {
        speaker: 'こうへい',
        japanese: 'わかった！前にキャンプでゴミ拾いした経験が役に立つと思うよ。楽しみだね。',
        kana: 'わかった！まえにキャンプでゴミひろいしたけいけんがやくにたつとおもうよ。たのしみだね。',
        vietnamese: 'OK! Kinh nghiệm nhặt rác khi cắm trại trước đây chắc sẽ có ích. Háo hức quá nhỉ.'
      }
    ],
    culturalNote:
      'Hoạt động ボランティア (tình nguyện) rất phổ biến ở Nhật, đặc biệt sau thảm họa thiên nhiên. Sau trận động đất Đông Nhật Bản 2011, hàng triệu người đã tình nguyện giúp đỡ. Ở cấp địa phương, 町内会 (chounaikai — hội khu phố) thường tổ chức dọn dẹp công viên, tuần tra an ninh. Tham gia tình nguyện là cách tốt để hòa nhập cộng đồng Nhật.'
  },

  // ── 16. Learning a Skill (習い事) ──────────────────────────────
  {
    id: 'n3-conv-16',
    title: 'Học thêm kỹ năng',
    titleJp: '習い事',
    level: 'N3',
    situation: 'Hai người nói về việc đăng ký học thêm kỹ năng mới ngoài giờ làm',
    patterns: [
      {
        japanese: '習い事を始めようかと思っているんです。',
        kana: 'ならいごとをはじめようかとおもっているんです。',
        vietnamese: 'Tôi đang nghĩ có nên bắt đầu học thêm gì đó...',
        memoryTip:
          'Nhớ: ならいごと (naraigoto) = "sự việc học" → hoạt động học ngoài giờ (piano, thư pháp, nấu ăn...). ～ようかと思っている = đang phân vân có nên ~ không'
      },
      {
        japanese: '〜を習い始めてから、〜ようになりました。',
        kana: '〜をならいはじめてから、〜ようになりました。',
        vietnamese: 'Từ khi bắt đầu học ~, đã có thể ~ rồi.',
        memoryTip:
          'Nhớ: ～ようになる = trở nên có thể ~ (thay đổi khả năng) → nhấn mạnh sự tiến bộ nhờ học tập. はじめてから = kể từ khi bắt đầu'
      },
      {
        japanese: '書道は心が落ち着くのでおすすめです。',
        kana: 'しゅうじはこころがおちつくのでおすすめです。',
        vietnamese: 'Thư pháp giúp tâm bình tĩnh nên rất đáng thử.',
        memoryTip:
          'Nhớ: しゅうじ (shuuji) = "tập tự" (Hán Việt) → thư pháp, luyện chữ. おちつく (ochitsuku) = "rơi xuống + gắn chặt" → lắng đọng, bình tĩnh'
      }
    ],
    dialogue: [
      {
        speaker: '加藤',
        japanese: '最近、何か習い事を始めようかと思っているんですけど、何がいいですかね。',
        kana: 'さいきん、なにかならいごとをはじめようかとおもっているんですけど、なにがいいですかね。',
        vietnamese: 'Dạo này tôi đang nghĩ muốn học thêm gì đó, học gì thì tốt nhỉ?'
      },
      {
        speaker: '渡辺',
        japanese: '私は去年からピアノを習っているんですよ。子供の頃からの夢だったんです。',
        kana: 'わたしはきょねんからピアノをならっているんですよ。こどものころからのゆめだったんです。',
        vietnamese: 'Tôi học piano từ năm ngoái đấy. Là ước mơ từ nhỏ.'
      },
      {
        speaker: '加藤',
        japanese: 'へえ、ピアノですか。大人になってからでも弾けるようになるものですか。',
        kana: 'へえ、ピアノですか。おとなになってからでもひけるようになるものですか。',
        vietnamese: 'Ồ, piano à. Lớn rồi mà vẫn chơi được sao?'
      },
      {
        speaker: '渡辺',
        japanese: 'はい、習い始めてから半年で、簡単な曲が弾けるようになりましたよ。先生も優しいし、楽しいです。',
        kana: 'はい、ならいはじめてからはんとしで、かんたんなきょくがひけるようになりましたよ。せんせいもやさしいし、たのしいです。',
        vietnamese: 'Vâng, bắt đầu học nửa năm thì đã chơi được bài đơn giản rồi. Giáo viên cũng tốt, vui lắm.'
      },
      {
        speaker: '加藤',
        japanese: 'いいですね。書道にも興味があるんですけど。',
        kana: 'いいですね。しゅうじにもきょうみがあるんですけど。',
        vietnamese: 'Hay quá. Tôi cũng hứng thú với thư pháp nữa.'
      },
      {
        speaker: '渡辺',
        japanese: '書道はいいですよ！心が落ち着くのでおすすめです。友達が通っている教室を紹介しましょうか。',
        kana: 'しゅうじはいいですよ！こころがおちつくのでおすすめです。ともだちがかよっているきょうしつをしょうかいしましょうか。',
        vietnamese: 'Thư pháp tốt lắm! Giúp tâm bình tĩnh nên rất đáng thử. Để tôi giới thiệu lớp bạn tôi đang học nhé?'
      }
    ],
    culturalNote:
      '習い事 (naraigoto) là văn hóa học suốt đời của Nhật. Người lớn thường học thêm ngoài giờ: 書道 (thư pháp), 茶道 (trà đạo), 華道 (cắm hoa), ピアノ (piano), ヨガ (yoga)... Các lớp văn hóa truyền thống (văn hóa giáo thất — カルチャー教室) rất phổ biến ở các trung tâm thương mại. Đây cũng là cách mở rộng quan hệ xã hội ngoài công việc.'
  },

  // ── 17. Insurance / Contracts (保険) ────────────────────────────
  {
    id: 'n3-conv-17',
    title: 'Bảo hiểm & hợp đồng',
    titleJp: '保険と契約',
    level: 'N3',
    situation: 'Khách hàng hỏi nhân viên bảo hiểm về hợp đồng và điều kiện hủy',
    patterns: [
      {
        japanese: '保険に入ろうかと思っているんですが。',
        kana: 'ほけんにはいろうかとおもっているんですが。',
        vietnamese: 'Tôi đang nghĩ có nên tham gia bảo hiểm...',
        memoryTip:
          'Nhớ: ほけん (hoken) = "bảo hiểm" (Hán Việt) → giống hệt! はいる = vào, tham gia → 保険に入る = tham gia bảo hiểm'
      },
      {
        japanese: '契約の内容を詳しく教えてください。',
        kana: 'けいやくのないようをくわしくおしえてください。',
        vietnamese: 'Xin hãy giải thích chi tiết nội dung hợp đồng.',
        memoryTip:
          'Nhớ: けいやく (keiyaku) = "khế ước" → hợp đồng. ないよう (naiyou) = "nội dung". くわしく = chi tiết → câu thần chú khi ký hợp đồng ở Nhật'
      },
      {
        japanese: '解約する場合、違約金はかかりますか。',
        kana: 'かいやくするばあい、いやくきんはかかりますか。',
        vietnamese: 'Trường hợp hủy hợp đồng, có phí vi phạm không?',
        memoryTip:
          'Nhớ: かいやく (kaiyaku) = "giải ước" → hủy hợp đồng. いやくきん (iyakukin) = "vi ước kim" → tiền phạt vi phạm hợp đồng. ばあい = trường hợp'
      }
    ],
    dialogue: [
      {
        speaker: '客',
        japanese: 'すみません、医療保険に入ろうかと思っているんですが、どんなプランがありますか。',
        kana: 'すみません、いりょうほけんにはいろうかとおもっているんですが、どんなプランがありますか。',
        vietnamese: 'Xin lỗi, tôi đang nghĩ tham gia bảo hiểm y tế, có những gói nào?'
      },
      {
        speaker: '担当者',
        japanese: '月額3000円のベーシックプランと、5000円のプレミアムプランがございます。契約の内容を詳しくご説明いたしますね。',
        kana: 'げつがくさんぜんえんのベーシックプランと、ごせんえんのプレミアムプランがございます。けいやくのないようをくわしくごせつめいいたしますね。',
        vietnamese: 'Có gói cơ bản 3000 yên/tháng và gói cao cấp 5000 yên/tháng. Tôi sẽ giải thích chi tiết nội dung hợp đồng nhé.'
      },
      {
        speaker: '客',
        japanese: 'プレミアムプランはベーシックと何が違うんですか。',
        kana: 'プレミアムプランはベーシックとなにがちがうんですか。',
        vietnamese: 'Gói cao cấp khác gì gói cơ bản?'
      },
      {
        speaker: '担当者',
        japanese: 'プレミアムは入院費用が全額カバーされます。ベーシックは7割までです。',
        kana: 'プレミアムはにゅういんひようがぜんがくカバーされます。ベーシックはななわりまでです。',
        vietnamese: 'Gói cao cấp chi trả toàn bộ phí nằm viện. Gói cơ bản chỉ đến 70%.'
      },
      {
        speaker: '客',
        japanese: 'なるほど。あの、もし解約する場合、違約金はかかりますか。',
        kana: 'なるほど。あの、もしかいやくするばあい、いやくきんはかかりますか。',
        vietnamese: 'Hiểu rồi. À, nếu hủy hợp đồng thì có phí vi phạm không?'
      },
      {
        speaker: '担当者',
        japanese: '1年以内に解約される場合は、1ヶ月分の違約金が発生します。1年以上ご契約いただければ、いつでも無料で解約できます。',
        kana: 'いちねんいないにかいやくされるばあいは、いっかげつぶんのいやくきんがはっせいします。いちねんいじょうごけいやくいただければ、いつでもむりょうでかいやくできます。',
        vietnamese: 'Hủy trong vòng 1 năm thì phát sinh phí vi phạm 1 tháng. Nếu đã ký trên 1 năm thì hủy miễn phí bất cứ lúc nào.'
      }
    ],
    culturalNote:
      'Ở Nhật, hệ thống bảo hiểm gồm 2 lớp: 国民健康保険 (kokumin kenkou hoken — bảo hiểm sức khỏe quốc dân, bắt buộc) và bảo hiểm tư nhân (tùy chọn). Khi ký hợp đồng bất kỳ ở Nhật (điện thoại, internet, bảo hiểm...), luôn hỏi rõ về 違約金 (iyakukin — phí hủy) và 契約期間 (keiyaku kikan — thời hạn hợp đồng), vì nhiều hợp đồng tự gia hạn (自動更新 — jidou koushin).'
  },

  // ── 18. Giving Advice (アドバイス) ──────────────────────────────
  {
    id: 'n3-conv-18',
    title: 'Cho lời khuyên',
    titleJp: 'アドバイスをする',
    level: 'N3',
    situation: 'Bạn bè tâm sự về vấn đề cá nhân và cho nhau lời khuyên',
    patterns: [
      {
        japanese: '〜たほうがいいと思うよ。',
        kana: '〜たほうがいいとおもうよ。',
        vietnamese: 'Mình nghĩ nên ~ thì hơn.',
        memoryTip:
          'Nhớ: ～たほうがいい = "hướng đã làm thì tốt hơn" → khuyên nên làm gì. Dùng quá khứ た (đã) + ほう (hướng) + がいい (tốt) = hướng đi tốt nhất'
      },
      {
        japanese: '〜ないほうがいいんじゃない？',
        kana: '〜ないほうがいいんじゃない？',
        vietnamese: 'Không nên ~ thì hơn phải không?',
        memoryTip:
          'Nhớ: ～ないほうがいい = "hướng không làm thì tốt hơn" → khuyên KHÔNG nên. Thêm んじゃない？ = nhẹ nhàng hơn, giống "bạn nghĩ sao?"'
      },
      {
        japanese: '無理しないでね。',
        kana: 'むりしないでね。',
        vietnamese: 'Đừng cố quá sức nhé.',
        memoryTip:
          'Nhớ: むり (muri) = "vô lý" → quá sức, miễn cưỡng. むりしないで = đừng ép bản thân → câu nói thể hiện sự quan tâm rất phổ biến ở Nhật'
      }
    ],
    dialogue: [
      {
        speaker: 'みか',
        japanese: '最近、仕事が忙しすぎて、全然眠れないんだよね。',
        kana: 'さいきん、しごとがいそがしすぎて、ぜんぜんねむれないんだよね。',
        vietnamese: 'Dạo này công việc bận quá, không ngủ được luôn.'
      },
      {
        speaker: 'りょう',
        japanese: 'それは心配だね。一度、病院に行ったほうがいいと思うよ。',
        kana: 'それはしんぱいだね。いちど、びょういんにいったほうがいいとおもうよ。',
        vietnamese: 'Lo quá nhỉ. Mình nghĩ nên đi bệnh viện một lần.'
      },
      {
        speaker: 'みか',
        japanese: 'うーん、でも病院に行く時間もないし...',
        kana: 'うーん、でもびょういんにいくじかんもないし...',
        vietnamese: 'Hmm, nhưng cũng không có thời gian đi bệnh viện nữa...'
      },
      {
        speaker: 'りょう',
        japanese: '寝る前にスマホを見ないほうがいいんじゃない？ブルーライトで眠れなくなるらしいよ。',
        kana: 'ねるまえにスマホをみないほうがいいんじゃない？ブルーライトでねむれなくなるらしいよ。',
        vietnamese: 'Trước khi ngủ không nên xem điện thoại thì hơn phải không? Nghe nói ánh sáng xanh làm khó ngủ.'
      },
      {
        speaker: 'みか',
        japanese: 'たしかに、毎晩SNSを見ちゃうんだよね。やめたほうがいいかも。',
        kana: 'たしかに、まいばんSNSをみちゃうんだよね。やめたほうがいいかも。',
        vietnamese: 'Đúng thật, tối nào cũng lỡ xem mạng xã hội. Có lẽ nên bỏ thật.'
      },
      {
        speaker: 'りょう',
        japanese: 'うん、あとは無理しないでね。たまには有休を取って、ゆっくり休んだほうがいいよ。',
        kana: 'うん、あとはむりしないでね。たまにはゆうきゅうをとって、ゆっくりやすんだほうがいいよ。',
        vietnamese: 'Ừ, và đừng cố quá sức nhé. Thỉnh thoảng nên xin nghỉ phép, nghỉ ngơi cho thoải mái.'
      }
    ],
    culturalNote:
      'Trong văn hóa Nhật, 無理しないで (đừng cố quá sức) là câu thể hiện sự quan tâm phổ biến nhất. Người Nhật có xu hướng 我慢 (gaman — chịu đựng) và làm việc quá sức, dẫn đến hiện tượng 過労死 (karōshi — chết vì làm việc quá độ). Gần đây, chính phủ khuyến khích 働き方改革 (hatarakikata kaikaku — cải cách cách làm việc) và dùng hết 有給休暇 (yuukyuu kyuuka — ngày phép có lương).'
  },

  // ── 19. Seasonal Greetings (季節の挨拶) ─────────────────────────
  {
    id: 'n3-conv-19',
    title: 'Chào hỏi theo mùa',
    titleJp: '季節の挨拶',
    level: 'N3',
    situation: 'Hàng xóm gặp nhau và trò chuyện theo mùa — nắng nóng, lạnh giá',
    patterns: [
      {
        japanese: '暑いですね。お体に気をつけてくださいね。',
        kana: 'あついですね。おからだにきをつけてくださいね。',
        vietnamese: 'Nóng quá nhỉ. Hãy giữ sức khỏe nhé.',
        memoryTip:
          'Nhớ: あつい = nóng → 暑い (thời tiết nóng) ≠ 熱い (đồ vật nóng). おからだに = "thân thể ạ" → dùng お thể hiện kính trọng. Câu mở đầu mùa hè kinh điển!'
      },
      {
        japanese: '寒くなりましたね。風邪を引かないようにしてください。',
        kana: 'さむくなりましたね。かぜをひかないようにしてください。',
        vietnamese: 'Đã lạnh rồi nhỉ. Hãy cẩn thận đừng bị cảm.',
        memoryTip:
          'Nhớ: さむくなりました = "đã trở nên lạnh" → なる = trở thành. かぜをひく = "bắt gió" → bị cảm. Câu chào mùa đông phổ biến'
      },
      {
        japanese: '〜の季節になりましたね。',
        kana: '〜のきせつになりましたね。',
        vietnamese: 'Đã đến mùa ~ rồi nhỉ.',
        memoryTip:
          'Nhớ: きせつ (kisetsu) = "quý tiết" (Hán Việt) → mùa trong năm. Người Nhật rất nhạy cảm với 四季 (shiki — bốn mùa) và hay mở đầu câu chuyện bằng thời tiết'
      }
    ],
    dialogue: [
      {
        speaker: '山口',
        japanese: 'あら、田中さん、おはようございます。毎日暑いですね。',
        kana: 'あら、たなかさん、おはようございます。まいにちあついですね。',
        vietnamese: 'Ôi, chị Tanaka, chào buổi sáng. Ngày nào cũng nóng quá nhỉ.'
      },
      {
        speaker: '田中',
        japanese: '本当に。今年の夏は特に厳しいですよね。もう花火の季節になりましたね。',
        kana: 'ほんとうに。ことしのなつはとくにきびしいですよね。もうはなびのきせつになりましたね。',
        vietnamese: 'Thật vậy. Hè năm nay đặc biệt khắc nghiệt nhỉ. Đã đến mùa pháo hoa rồi.'
      },
      {
        speaker: '山口',
        japanese: 'そうですね。子供たちは夏祭りを楽しみにしていますよ。',
        kana: 'そうですね。こどもたちはなつまつりをたのしみにしていますよ。',
        vietnamese: 'Đúng nhỉ. Bọn trẻ đang háo hức lễ hội mùa hè lắm.'
      },
      {
        speaker: '田中',
        japanese: 'いいですね。ところで、最近お元気ですか。暑いですから、お体に気をつけてくださいね。',
        kana: 'いいですね。ところで、さいきんおげんきですか。あついですから、おからだにきをつけてくださいね。',
        vietnamese: 'Hay quá. Nhân tiện, dạo này chị khỏe không? Trời nóng nên hãy giữ gìn sức khỏe nhé.'
      },
      {
        speaker: '山口',
        japanese: 'ありがとうございます。田中さんもお気をつけて。早く涼しくなるといいですね。',
        kana: 'ありがとうございます。たなかさんもおきをつけて。はやくすずしくなるといいですね。',
        vietnamese: 'Cảm ơn chị. Chị cũng giữ sức khỏe nhé. Mau mát lên thì tốt quá.'
      },
      {
        speaker: '田中',
        japanese: '本当ですね。ではまた。涼しくなったら、お茶でもしましょう。',
        kana: 'ほんとうですね。ではまた。すずしくなったら、おちゃでもしましょう。',
        vietnamese: 'Đúng vậy nhỉ. Vậy gặp lại nhé. Khi mát rồi thì đi uống trà nhé.'
      }
    ],
    culturalNote:
      'Người Nhật coi trọng 季節の挨拶 (kisetsu no aisatsu — lời chào theo mùa) trong giao tiếp hàng ngày. Mở đầu bằng thời tiết (暑いですね / 寒いですね) không chỉ là phép lịch sự mà còn thể hiện sự nhạy cảm với thiên nhiên — đặc trưng văn hóa Nhật. Trong thư từ chính thức, có hệ thống 時候の挨拶 (jikou no aisatsu) với câu chào riêng cho từng tháng, ví dụ: 残暑お見舞い申し上げます (chúc sức khỏe giữa hè muộn).'
  },

  // ── 20. Storytelling (物語) ─────────────────────────────────────
  {
    id: 'n3-conv-20',
    title: 'Kể chuyện',
    titleJp: '物語を語る',
    level: 'N3',
    situation: 'Ông bà kể chuyện cổ tích cho cháu, sử dụng lối kể truyền thống Nhật',
    patterns: [
      {
        japanese: 'むかしむかし、あるところに〜がいました。',
        kana: 'むかしむかし、あるところに〜がいました。',
        vietnamese: 'Ngày xửa ngày xưa, ở một nơi nọ có ~.',
        memoryTip:
          'Nhớ: むかしむかし = "ngày xưa ngày xưa" → công thức mở đầu truyện cổ tích Nhật, giống "Once upon a time". あるところに = ở một nơi nào đó'
      },
      {
        japanese: '〜てしまいました。',
        kana: '〜てしまいました。',
        vietnamese: '~ mất rồi / lỡ ~ rồi.',
        memoryTip:
          'Nhớ: てしまう trong truyện kể = nhấn mạnh sự kiện đã hoàn tất, thường kèm cảm giác đáng tiếc hoặc bất ngờ. "shimau" → "sự mấu" → sự việc đã kết thúc, không thể thay đổi'
      },
      {
        japanese: 'そして、〜は幸せに暮らしましたとさ。',
        kana: 'そして、〜はしあわせにくらしましたとさ。',
        vietnamese: 'Và rồi, ~ sống hạnh phúc mãi mãi.',
        memoryTip:
          'Nhớ: ～ましたとさ = công thức kết thúc truyện cổ tích, giống "and they lived happily ever after". とさ = hậu tố kết truyện, tạo cảm giác hoài cổ'
      }
    ],
    dialogue: [
      {
        speaker: 'おばあちゃん',
        japanese: 'むかしむかし、あるところに、心の優しいおじいさんとおばあさんがいました。',
        kana: 'むかしむかし、あるところに、こころのやさしいおじいさんとおばあさんがいました。',
        vietnamese: 'Ngày xửa ngày xưa, ở một nơi nọ, có ông bà già tốt bụng.'
      },
      {
        speaker: 'まご',
        japanese: 'それで？その次はどうなったの？',
        kana: 'それで？そのつぎはどうなったの？',
        vietnamese: 'Rồi sao nữa? Tiếp theo thế nào?'
      },
      {
        speaker: 'おばあちゃん',
        japanese: 'ある日、おじいさんが山へ行くと、不思議な箱を見つけました。開けてみると、中から光が出てきたんですよ。',
        kana: 'あるひ、おじいさんがやまへいくと、ふしぎなはこをみつけました。あけてみると、なかからひかりがでてきたんですよ。',
        vietnamese: 'Một ngày, khi ông đi vào núi, ông tìm thấy chiếc hộp kỳ lạ. Mở ra thì ánh sáng tràn ra từ bên trong.'
      },
      {
        speaker: 'まご',
        japanese: 'わあ、すごい！光の中に何があったの？',
        kana: 'わあ、すごい！ひかりのなかになにがあったの？',
        vietnamese: 'Woa, tuyệt quá! Trong ánh sáng có gì?'
      },
      {
        speaker: 'おばあちゃん',
        japanese: '小さな小鳥が出てきました。でも欲張りな隣のおじいさんが、その小鳥を取ってしまいました。',
        kana: 'ちいさなことりがでてきました。でもよくばりなとなりのおじいさんが、そのことりをとってしまいました。',
        vietnamese: 'Một chú chim nhỏ bay ra. Nhưng ông già tham lam nhà bên đã lấy mất chú chim đó.'
      },
      {
        speaker: 'おばあちゃん',
        japanese: 'でもね、小鳥は正直なおじいさんのところに戻ってきました。そして、おじいさんとおばあさんは幸せに暮らしましたとさ。おしまい。',
        kana: 'でもね、ことりはしょうじきなおじいさんのところにもどってきました。そして、おじいさんとおばあさんはしあわせにくらしましたとさ。おしまい。',
        vietnamese: 'Nhưng mà, chú chim đã quay về với ông già thật thà. Và rồi, ông bà sống hạnh phúc mãi mãi. Hết.'
      }
    ],
    culturalNote:
      'Truyện cổ tích Nhật (昔話 — mukashi-banashi) luôn bắt đầu bằng むかしむかし và kết thúc bằng ～ましたとさ。おしまい。 Chủ đề thường xoay quanh đạo đức: người tốt bụng (正直者) được phúc, kẻ tham lam (欲張り) bị phạt. Các truyện nổi tiếng: 桃太郎 (Momotarou), 浦島太郎 (Urashima Tarou), 花咲かじいさん (Ông lão nở hoa). Kể truyện cũng là cách dạy tiếng Nhật tự nhiên cho trẻ em.'
  },

  // ── 21. Pet / Animal (ペット) ───────────────────────────────────
  {
    id: 'n3-conv-21',
    title: 'Thú cưng',
    titleJp: 'ペットの話',
    level: 'N3',
    situation: 'Hai người bạn nói về việc nuôi thú cưng và trách nhiệm chăm sóc',
    patterns: [
      {
        japanese: 'ペットを飼おうかどうか迷っています。',
        kana: 'ペットをかおうかどうかまよっています。',
        vietnamese: 'Tôi đang phân vân có nên nuôi thú cưng hay không.',
        memoryTip:
          'Nhớ: ペット (petto) = pet. かう (kau) = nuôi (飼う — chữ Hán có bộ 食 = cho ăn). まよう = phân vân → ～ようかどうか = có nên ~ hay không'
      },
      {
        japanese: '犬と猫、どちらが飼いやすいですか。',
        kana: 'いぬとねこ、どちらがかいやすいですか。',
        vietnamese: 'Chó và mèo, con nào dễ nuôi hơn?',
        memoryTip:
          'Nhớ: かいやすい = dễ nuôi → V(ます stem) + やすい = dễ làm. Ngược lại: かいにくい = khó nuôi. どちら = bên nào (lịch sự hơn どっち)'
      },
      {
        japanese: '散歩に連れて行くのが日課なんです。',
        kana: 'さんぽにつれていくのがにっかなんです。',
        vietnamese: 'Dắt đi dạo là thói quen hàng ngày.',
        memoryTip:
          'Nhớ: さんぽ (sanpo) = tản bộ → đi dạo. つれていく = dẫn đi. にっか (nikka) = "nhật khóa" → bài tập hàng ngày, thói quen'
      }
    ],
    dialogue: [
      {
        speaker: 'なお',
        japanese: '最近、ペットを飼おうかどうか迷っているんだけど、なおちゃんは何飼ってるんだっけ？',
        kana: 'さいきん、ペットをかおうかどうかまよっているんだけど、なおちゃんはなにかってるんだっけ？',
        vietnamese: 'Dạo này mình đang phân vân có nuôi thú cưng không. Nao nuôi con gì nhỉ?'
      },
      {
        speaker: 'ゆうた',
        japanese: '柴犬を飼っているよ。3歳になったんだ。毎日散歩に連れて行くのが日課だよ。',
        kana: 'しばいぬをかっているよ。さんさいになったんだ。まいにちさんぽにつれていくのがにっかだよ。',
        vietnamese: 'Mình nuôi chó Shiba. Nó 3 tuổi rồi. Dắt đi dạo mỗi ngày là thói quen.'
      },
      {
        speaker: 'なお',
        japanese: '犬と猫、どちらが飼いやすいかな。マンションだから、犬は難しいかもしれないけど。',
        kana: 'いぬとねこ、どちらがかいやすいかな。マンションだから、いぬはむずかしいかもしれないけど。',
        vietnamese: 'Chó và mèo, con nào dễ nuôi nhỉ. Ở chung cư nên nuôi chó có lẽ khó.'
      },
      {
        speaker: 'ゆうた',
        japanese: '確かに猫のほうが室内で飼いやすいかもね。でも、猫も爪とぎで家具がボロボロになることがあるよ。',
        kana: 'たしかにねこのほうがしつないでかいやすいかもね。でも、ねこもつめとぎでかぐがボロボロになることがあるよ。',
        vietnamese: 'Đúng là mèo dễ nuôi trong nhà hơn. Nhưng mèo cào móng cũng làm hỏng đồ đạc đấy.'
      },
      {
        speaker: 'なお',
        japanese: 'そうなんだ。ペットを飼うのは楽しそうだけど、責任も大きいよね。',
        kana: 'そうなんだ。ペットをかうのはたのしそうだけど、せきにんもおおきいよね。',
        vietnamese: 'Vậy à. Nuôi thú cưng có vẻ vui nhưng trách nhiệm cũng lớn nhỉ.'
      },
      {
        speaker: 'ゆうた',
        japanese: 'うん、家族の一員だからね。病院代もかかるし、旅行にも行きにくくなるけど、その分、毎日癒されるよ。',
        kana: 'うん、かぞくのいちいんだからね。びょういんだいもかかるし、りょこうにもいきにくくなるけど、そのぶん、まいにちいやされるよ。',
        vietnamese: 'Ừ, vì nó là thành viên gia đình mà. Tốn tiền bệnh viện, khó đi du lịch, nhưng bù lại, mỗi ngày được an ủi.'
      }
    ],
    culturalNote:
      'Nhật Bản là thiên đường thú cưng: có quán cà phê mèo (猫カフェ), chó (犬カフェ), thậm chí nhím và cú mèo. Giống chó 柴犬 (Shiba Inu) là biểu tượng quốc gia. Tuy nhiên, nhiều マンション (chung cư) cấm nuôi thú cưng, nên phải kiểm tra ペット可 (petto-ka — cho phép pet) trước khi thuê. Chi phí nuôi pet ở Nhật khá cao: tiêm phòng, bảo hiểm pet, cắt lông... tất cả đều có dịch vụ chuyên nghiệp.'
  },

  // ── 22. Fashion (ファッション) ──────────────────────────────────
  {
    id: 'n3-conv-22',
    title: 'Thời trang',
    titleJp: 'ファッション',
    level: 'N3',
    situation: 'Bạn bè đi mua sắm quần áo và bàn về phong cách thời trang',
    patterns: [
      {
        japanese: 'この服、似合うと思う？',
        kana: 'このふく、にあうとおもう？',
        vietnamese: 'Bạn nghĩ bộ đồ này hợp với mình không?',
        memoryTip:
          'Nhớ: にあう (niau) = "ni + hợp" → hợp, vừa, phù hợp (ngoại hình). Khác ぴったり (ppittari) = vừa vặn (kích cỡ). にあう thiên về phong cách, sắc thái'
      },
      {
        japanese: '今、〜が流行っているらしいよ。',
        kana: 'いま、〜がはやっているらしいよ。',
        vietnamese: 'Nghe nói bây giờ ~ đang thịnh hành.',
        memoryTip:
          'Nhớ: はやる (hayaru) = thịnh hành, hot → りゅうこう (ryuukou) cũng = trào lưu. "haya ru" → "hái à rủ" → mọi người rủ nhau hái (mua) theo trào lưu'
      },
      {
        japanese: '〜のほうが〜に合っていると思うけど。',
        kana: '〜のほうが〜にあっていると思うけど。',
        vietnamese: 'Mình nghĩ ~ hợp với ~ hơn.',
        memoryTip:
          'Nhớ: ～のほうが = bên ~ hơn (so sánh); あう = hợp → đưa ra ý kiến nhẹ nhàng khi được hỏi. Thêm けど cuối = để ngỏ, không áp đặt'
      }
    ],
    dialogue: [
      {
        speaker: 'あい',
        japanese: 'ねえ、この赤いワンピース、似合うと思う？',
        kana: 'ねえ、このあかいワンピース、にあうとおもう？',
        vietnamese: 'Này, cái váy liền đỏ này hợp với mình không?'
      },
      {
        speaker: 'まい',
        japanese: '色は素敵だけど、デザイン的にはこっちの紺色のほうがあいちゃんに合っていると思うけど。',
        kana: 'いろはすてきだけど、デザインてきにはこっちのこんいろのほうがあいちゃんにあっていると思うけど。',
        vietnamese: 'Màu thì đẹp, nhưng về thiết kế thì cái xanh đậm này hợp với Ai hơn.'
      },
      {
        speaker: 'あい',
        japanese: 'そう？確かにシンプルなほうが好きかも。今、何が流行っているの？',
        kana: 'そう？たしかにシンプルなほうがすきかも。いま、なにがはやっているの？',
        vietnamese: 'Thế à? Đúng là mình thích đơn giản hơn. Bây giờ đang thịnh hành gì?'
      },
      {
        speaker: 'まい',
        japanese: '今はオーバーサイズのジャケットが流行っているらしいよ。韓国ファッションの影響みたい。',
        kana: 'いまはオーバーサイズのジャケットがはやっているらしいよ。かんこくファッションのえいきょうみたい。',
        vietnamese: 'Nghe nói bây giờ áo jacket rộng đang hot. Có vẻ ảnh hưởng từ thời trang Hàn.'
      },
      {
        speaker: 'あい',
        japanese: 'へえ。あ、このスカートかわいい！でも値段が...',
        kana: 'へえ。あ、このスカートかわいい！でもねだんが...',
        vietnamese: 'Ồ. Ôi, cái váy này dễ thương quá! Nhưng giá thì...'
      },
      {
        speaker: 'まい',
        japanese: 'セールを待ったほうがいいかもね。来月からバーゲンが始まるらしいから。',
        kana: 'セールをまったほうがいいかもね。らいげつからバーゲンがはじまるらしいから。',
        vietnamese: 'Có lẽ nên đợi sale. Nghe nói tháng sau bắt đầu giảm giá lớn.'
      }
    ],
    culturalNote:
      'Thời trang Nhật nổi tiếng đa dạng: từ カジュアル (casual) đến 原宿スタイル (Harajuku style — phong cách Harajuku đầy màu sắc). Người Nhật rất chú ý TPO (Time, Place, Occasion — thời gian, địa điểm, hoàn cảnh) khi chọn trang phục. Trong công sở, ăn mặc quá nổi bật bị coi là 空気が読めない (kuuki ga yomenai — không đọc được không khí). Mùa giảm giá lớn (バーゲン) diễn ra vào tháng 1 và tháng 7.'
  },

  // ── 23. Social Media (SNS) ─────────────────────────────────────
  {
    id: 'n3-conv-23',
    title: 'Mạng xã hội',
    titleJp: 'SNSの話',
    level: 'N3',
    situation: 'Bạn bè nói về việc sử dụng mạng xã hội, đăng bài và lượt thích',
    patterns: [
      {
        japanese: 'SNSに投稿したら、たくさんいいねがもらえた。',
        kana: 'SNSにとうこうしたら、たくさんいいねがもらえた。',
        vietnamese: 'Đăng lên mạng xã hội thì được nhiều like.',
        memoryTip:
          'Nhớ: とうこう (toukou) = "đầu cảo" → gửi bài, đăng bài. いいね = "tốt nhỉ!" → nút Like. SNS ở Nhật = mạng xã hội nói chung (Twitter/X, Instagram, LINE)'
      },
      {
        japanese: 'フォロワーが〜人に増えました。',
        kana: 'フォロワーが〜にんにふえました。',
        vietnamese: 'Người theo dõi đã tăng lên ~ người.',
        memoryTip:
          'Nhớ: フォロワー (forowa-) = follower. ふえる (fueru) = tăng lên → 増える dùng cho số lượng tăng tự nhiên. Ngược lại: へる (heru) = giảm'
      },
      {
        japanese: '〜の写真がバズったんだって！',
        kana: '〜のしゃしんがバズったんだって！',
        vietnamese: 'Nghe nói ảnh ~ đã viral!',
        memoryTip:
          'Nhớ: バズる (bazuru) = buzz → viral, lan truyền. Từ mới trong tiếng Nhật hiện đại, từ tiếng Anh "buzz". バズった = đã viral (quá khứ)'
      }
    ],
    dialogue: [
      {
        speaker: 'りな',
        japanese: '見て見て！昨日、猫の動画をSNSに投稿したら、もう500いいねがついたの！',
        kana: 'みてみて！きのう、ねこのどうがをSNSにとうこうしたら、もうごひゃくいいねがついたの！',
        vietnamese: 'Xem xem! Hôm qua đăng video mèo lên SNS, đã được 500 like rồi!'
      },
      {
        speaker: 'しょうた',
        japanese: 'すごいね！フォロワーは何人いるの？',
        kana: 'すごいね！フォロワーはなんにんいるの？',
        vietnamese: 'Ghê nhỉ! Có bao nhiêu người theo dõi?'
      },
      {
        speaker: 'りな',
        japanese: '先月は300人だったけど、フォロワーが800人に増えたんだ。猫の写真がバズったんだって友達に言われた。',
        kana: 'せんげつはさんびゃくにんだったけど、フォロワーがはっぴゃくにんにふえたんだ。ねこのしゃしんがバズったんだってともだちにいわれた。',
        vietnamese: 'Tháng trước 300 người mà giờ tăng lên 800 rồi. Bạn bảo ảnh mèo bị viral.'
      },
      {
        speaker: 'しょうた',
        japanese: 'いいなあ。僕もインスタ始めようかな。でも何を投稿すればいいかわからなくて。',
        kana: 'いいなあ。ぼくもインスタはじめようかな。でもなにをとうこうすればいいかわからなくて。',
        vietnamese: 'Ghen quá. Mình cũng nên bắt đầu Instagram không nhỉ. Nhưng không biết đăng gì.'
      },
      {
        speaker: 'りな',
        japanese: '料理とか旅行の写真は人気あるよ。ただ、個人情報は載せないように気をつけてね。',
        kana: 'りょうりとかりょこうのしゃしんはにんきあるよ。ただ、こじんじょうほうはのせないようにきをつけてね。',
        vietnamese: 'Ảnh nấu ăn hay du lịch thì được nhiều người thích. Nhưng cẩn thận đừng đăng thông tin cá nhân nhé.'
      },
      {
        speaker: 'しょうた',
        japanese: 'うん、ネットの世界は怖いところもあるからね。気をつけるよ。',
        kana: 'うん、ネットのせかいはこわいところもあるからね。きをつけるよ。',
        vietnamese: 'Ừ, thế giới mạng cũng có chỗ đáng sợ. Mình sẽ cẩn thận.'
      }
    ],
    culturalNote:
      'Ở Nhật, SNS (Social Networking Service) là thuật ngữ chung cho mạng xã hội. LINE là ứng dụng nhắn tin số 1, Twitter/X cực kỳ phổ biến (Nhật là thị trường lớn thứ 2 thế giới), và Instagram dùng cho chia sẻ ảnh. Văn hóa 匿名 (tokumei — ẩn danh) trên mạng Nhật rất mạnh — nhiều người dùng tên giả. Hiện tượng 炎上 (enjou — bị "cháy", bị chỉ trích hàng loạt) là nỗi sợ lớn khi dùng mạng xã hội ở Nhật.'
  },

  // ── 24. Emergency (緊急) ────────────────────────────────────────
  {
    id: 'n3-conv-24',
    title: 'Tình huống khẩn cấp',
    titleJp: '緊急事態',
    level: 'N3',
    situation: 'Chứng kiến tai nạn giao thông và gọi cấp cứu',
    patterns: [
      {
        japanese: '救急車を呼んでください！',
        kana: 'きゅうきゅうしゃをよんでください！',
        vietnamese: 'Xin hãy gọi xe cấp cứu!',
        memoryTip:
          'Nhớ: きゅうきゅうしゃ (kyuukyuusha) = "cứu cấp xa" → xe cứu cấp. Số điện thoại cấp cứu Nhật: 119 (cứu thương + cứu hỏa), 110 (cảnh sát)'
      },
      {
        japanese: '事故がありました。けが人がいます。',
        kana: 'じこがありました。けがにんがいます。',
        vietnamese: 'Có tai nạn. Có người bị thương.',
        memoryTip:
          'Nhớ: じこ (jiko) = "sự cố" → tai nạn. けがにん = người bị thương (けが = vết thương + にん = người). Nói ngắn gọn, rõ ràng khi gọi cấp cứu!'
      },
      {
        japanese: '助けてください！',
        kana: 'たすけてください！',
        vietnamese: 'Cứu với!',
        memoryTip:
          'Nhớ: たすけて (tasukete) = "ta sức kê!" → ta hết sức rồi, kêu cứu! Đây là câu khẩn cấp nhất trong tiếng Nhật, dùng khi cần giúp đỡ ngay lập tức'
      }
    ],
    dialogue: [
      {
        speaker: '目撃者',
        japanese: '大変だ！交差点で事故がありました！誰か救急車を呼んでください！',
        kana: 'たいへんだ！こうさてんでじこがありました！だれかきゅうきゅうしゃをよんでください！',
        vietnamese: 'Không hay rồi! Có tai nạn ở ngã tư! Ai gọi xe cấp cứu với!'
      },
      {
        speaker: '通行人',
        japanese: '119に電話します！けが人は何人いますか。',
        kana: 'ひゃくじゅうきゅうにでんわします！けがにんはなんにんいますか。',
        vietnamese: 'Tôi gọi 119! Có mấy người bị thương?'
      },
      {
        speaker: '目撃者',
        japanese: '二人います。一人は頭から血が出ています。もう一人は足が動かないと言っています。',
        kana: 'ふたりいます。ひとりはあたまからちがでています。もうひとりはあしがうごかないといっています。',
        vietnamese: 'Hai người. Một người chảy máu đầu. Người kia nói chân không cử động được.'
      },
      {
        speaker: '通行人',
        japanese: 'もしもし、119ですか。交通事故です。場所は渋谷駅前の交差点です。けが人が二人います。',
        kana: 'もしもし、ひゃくじゅうきゅうですか。こうつうじこです。ばしょはしぶやえきまえのこうさてんです。けがにんがふたりいます。',
        vietnamese: 'Alo, 119 phải không? Tai nạn giao thông. Địa điểm là ngã tư trước ga Shibuya. Có hai người bị thương.'
      },
      {
        speaker: '目撃者',
        japanese: '助けてください！意識がなくなりそうです！',
        kana: 'たすけてください！いしきがなくなりそうです！',
        vietnamese: 'Cứu với! Có vẻ sắp mất ý thức!'
      },
      {
        speaker: '通行人',
        japanese: '救急車がすぐ来るそうです。動かさないで、そのまま安静にさせてください。',
        kana: 'きゅうきゅうしゃがすぐくるそうです。うごかさないで、そのままあんせいにさせてください。',
        vietnamese: 'Nghe nói xe cấp cứu sẽ đến ngay. Đừng di chuyển, để yên tĩnh như vậy.'
      }
    ],
    culturalNote:
      'Số khẩn cấp ở Nhật: 119 = cấp cứu y tế + cứu hỏa; 110 = cảnh sát. Khi gọi 119, cần nói rõ: (1) 火事ですか、救急ですか (cháy hay cấp cứu?), (2) 場所 (địa điểm), (3) 状況 (tình trạng). Thời gian phản hồi trung bình của xe cấp cứu Nhật là 8.7 phút — nhanh nhất thế giới. Lưu ý: nước ngoài ở Nhật có thể gọi #7119 để được tư vấn y tế bằng nhiều ngôn ngữ.'
  },

  // ── 25. Farewell / Transfer (送別) ──────────────────────────────
  {
    id: 'n3-conv-25',
    title: 'Tiễn biệt / Chuyển công tác',
    titleJp: '送別会',
    level: 'N3',
    situation: 'Đồng nghiệp tổ chức tiệc chia tay cho người chuyển công tác sang chi nhánh khác',
    patterns: [
      {
        japanese: '転勤することになりました。',
        kana: 'てんきんすることになりました。',
        vietnamese: 'Tôi sẽ chuyển công tác.',
        memoryTip:
          'Nhớ: てんきん (tenkin) = "chuyển cần" → chuyển nơi làm việc. ～ことになりました = đã được quyết định (bởi công ty, không phải ý mình) → nhấn mạnh đây là quyết định từ trên'
      },
      {
        japanese: '送別会を開きましょう。',
        kana: 'そうべつかいをひらきましょう。',
        vietnamese: 'Hãy tổ chức tiệc chia tay nhé.',
        memoryTip:
          'Nhớ: そうべつかい (soubetsukai) = "tống biệt hội" → tiệc tiễn biệt. ひらく = mở (tiệc/hội nghị) → 会を開く = tổ chức buổi họp mặt'
      },
      {
        japanese: 'お見送りに参ります。',
        kana: 'おみおくりにまいります。',
        vietnamese: 'Tôi sẽ đến tiễn.',
        memoryTip:
          'Nhớ: おみおくり (omiokuri) = "đưa tiễn" → hành động đi tiễn ai. まいります = dạng khiêm nhường của 行く → thể hiện sự kính trọng khi tiễn người trên'
      }
    ],
    dialogue: [
      {
        speaker: '課長',
        japanese: 'みなさん、お知らせがあります。鈴木さんが来月から大阪支社に転勤することになりました。',
        kana: 'みなさん、おしらせがあります。すずきさんがらいげつからおおさかししゃにてんきんすることになりました。',
        vietnamese: 'Mọi người, có thông báo. Anh Suzuki sẽ chuyển công tác sang chi nhánh Osaka từ tháng sau.'
      },
      {
        speaker: '同僚A',
        japanese: 'えっ、本当ですか。寂しくなりますね。送別会を開きましょうよ。',
        kana: 'えっ、ほんとうですか。さびしくなりますね。そうべつかいをひらきましょうよ。',
        vietnamese: 'Hả, thật sao? Sẽ nhớ lắm đấy. Tổ chức tiệc chia tay đi nhé.'
      },
      {
        speaker: '同僚B',
        japanese: '賛成です！鈴木さんにはお世話になったので、盛大にやりましょう。',
        kana: 'さんせいです！すずきさんにはおせわになったので、せいだいにやりましょう。',
        vietnamese: 'Đồng ý! Anh Suzuki đã giúp đỡ nhiều nên hãy tổ chức hoành tráng.'
      },
      {
        speaker: '鈴木',
        japanese: 'みなさん、ありがとうございます。3年間、本当にお世話になりました。大阪に行っても、この チームのことは忘れません。',
        kana: 'みなさん、ありがとうございます。さんねんかん、ほんとうにおせわになりました。おおさかにいっても、このチームのことはわすれません。',
        vietnamese: 'Mọi người, cảm ơn nhiều. 3 năm qua, thực sự được mọi người chăm sóc. Dù đến Osaka, tôi sẽ không quên team này.'
      },
      {
        speaker: '同僚A',
        japanese: '最終日はお見送りに参りますね。新しい環境でもご活躍をお祈りしています。',
        kana: 'さいしゅうびはおみおくりにまいりますね。あたらしいかんきょうでもごかつやくをおいのりしています。',
        vietnamese: 'Ngày cuối cùng sẽ đến tiễn nhé. Chúc anh thành công ở môi trường mới.'
      },
      {
        speaker: '鈴木',
        japanese: 'ありがとう。大阪に来ることがあったら、ぜひ連絡してください。たこ焼きをごちそうしますよ！',
        kana: 'ありがとう。おおさかにくることがあったら、ぜひれんらくしてください。たこやきをごちそうしますよ！',
        vietnamese: 'Cảm ơn. Nếu có dịp đến Osaka, nhất định liên hệ nhé. Tôi sẽ đãi takoyaki!'
      }
    ],
    culturalNote:
      '転勤 (tenkin — chuyển công tác) rất phổ biến ở công ty Nhật, đặc biệt 総合職 (sougou-shoku — nhân viên tổng hợp). Nhân viên có thể bị chuyển đi bất cứ đâu mà không được từ chối — gọi là 辞令 (jirei — sắc lệnh nhân sự). 送別会 (soubetsukai — tiệc chia tay) là nghi thức quan trọng: thường kèm bài phát biểu, tặng quà (花束 — bó hoa), và khóc. Câu kinh điển khi chia tay: お世話になりました (cảm ơn đã chăm sóc) và お元気で (hãy giữ sức khỏe).'
  }
];
