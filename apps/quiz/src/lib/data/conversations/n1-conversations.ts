import type { ConversationPattern } from '$lib/types/lesson';

export const N1_CONVERSATIONS: ConversationPattern[] = [
  // ── 1. Debate / Argumentation (討論) ─────────────────────────
  {
    id: 'n1-conv-01',
    title: 'Tranh luận học thuật',
    titleJp: '討論',
    level: 'N1',
    situation: 'Hai nghiên cứu sinh tranh luận về tác động của AI đối với thị trường lao động trong seminar đại học',
    patterns: [
      {
        japanese: '〜とは限らない',
        kana: '〜とはかぎらない',
        vietnamese: 'Không hẳn là ~, chưa chắc ~.',
        memoryTip:
          'Nhớ: かぎらない = "khóa giới hạn" bị phá → không bị giới hạn trong một kết luận duy nhất. Dùng để phản bác nhẹ nhàng mà không phủ nhận hoàn toàn.'
      },
      {
        japanese: '〜に過ぎない',
        kana: '〜にすぎない',
        vietnamese: 'Chỉ là ~, không hơn không kém.',
        memoryTip:
          'Nhớ: すぎない = "không đi quá" → đánh giá thấp đối tượng, nói rằng nó chỉ ở mức đó thôi. Vũ khí phản biện sắc bén trong tranh luận.'
      },
      {
        japanese: '〜反面、〜',
        kana: '〜はんめん、〜',
        vietnamese: 'Mặt khác, ngược lại ~.',
        memoryTip:
          'Nhớ: はんめん = "phản diện" (Hán Việt) → lật mặt sau của đồng xu để thấy khía cạnh đối lập. Luôn đi với hai mệnh đề trái ngược.'
      }
    ],
    dialogue: [
      {
        speaker: '田中',
        japanese: 'AIの発展により、多くの職業が消滅するという見方がありますが、必ずしもそうとは限らないと思います。',
        kana: 'エーアイのはってんにより、おおくのしょくぎょうがしょうめつするというみかたがありますが、かならずしもそうとはかぎらないとおもいます。',
        vietnamese: 'Có quan điểm cho rằng sự phát triển của AI sẽ khiến nhiều nghề nghiệp biến mất, nhưng tôi nghĩ không hẳn là vậy.'
      },
      {
        speaker: '山本',
        japanese: 'しかし、現在のAIの能力は単なる補助ツールに過ぎないという主張は、楽観的すぎるのではないでしょうか。',
        kana: 'しかし、げんざいのエーアイののうりょくはたんなるほじょツールにすぎないというしゅちょうは、らっかんてきすぎるのではないでしょうか。',
        vietnamese: 'Tuy nhiên, quan điểm cho rằng năng lực AI hiện tại chỉ là công cụ hỗ trợ đơn thuần thì có phải quá lạc quan không?'
      },
      {
        speaker: '田中',
        japanese: 'おっしゃる通り、AIは効率を飛躍的に高める反面、人間にしかできない創造的な判断は依然として必要です。',
        kana: 'おっしゃるとおり、エーアイはこうりつをひやくてきにたかめるはんめん、にんげんにしかできないそうぞうてきなはんだんはいぜんとしてひつようです。',
        vietnamese: 'Đúng như anh nói, AI nâng cao hiệu suất vượt bậc, nhưng mặt khác, những phán đoán sáng tạo mà chỉ con người mới làm được vẫn cần thiết.'
      },
      {
        speaker: '山本',
        japanese: 'その点については同意しますが、「人間にしかできない」とされていた領域すら、AIが侵食し始めているのが現実です。',
        kana: 'そのてんについてはどういしますが、「にんげんにしかできない」とされていたりょういきすら、エーアイがしんしょくしはじめているのがげんじつです。',
        vietnamese: 'Về điểm đó tôi đồng ý, nhưng thực tế là ngay cả những lĩnh vực được cho là "chỉ con người mới làm được", AI cũng đã bắt đầu xâm lấn.'
      },
      {
        speaker: '田中',
        japanese: '確かに脅威はありますが、歴史的に見れば、技術革新は常に新たな雇用を生み出してきました。今回も例外とは限りません。',
        kana: 'たしかにきょういはありますが、れきしてきにみれば、ぎじゅつかくしんはつねにあらたなこようをうみだしてきました。こんかいもれいがいとはかぎりません。',
        vietnamese: 'Đúng là có mối đe dọa, nhưng nhìn từ lịch sử, đổi mới công nghệ luôn tạo ra việc làm mới. Lần này cũng chưa chắc là ngoại lệ.'
      }
    ],
    culturalNote:
      'Trong tranh luận học thuật Nhật, người nói thường dùng おっしゃる通り (đúng như ngài nói) để thừa nhận điểm đúng của đối phương trước khi phản biện — thể hiện sự tôn trọng. Phong cách "đồng ý trước, phản bác sau" (yes-but) là đặc trưng của văn hóa thảo luận Nhật, tránh đối đầu trực diện. Cấu trúc 〜とは限らない cho phép bác bỏ mà không gây mất mặt đối phương.'
  },

  // ── 2. Formal Speech (スピーチ) ──────────────────────────────
  {
    id: 'n1-conv-02',
    title: 'Phát biểu trang trọng',
    titleJp: 'スピーチ',
    level: 'N1',
    situation: 'Giám đốc phát biểu tại lễ kỷ niệm 50 năm thành lập công ty, trước đông đảo nhân viên và đối tác',
    patterns: [
      {
        japanese: '〜にあたって',
        kana: '〜にあたって',
        vietnamese: 'Nhân dịp ~, vào lúc ~.',
        memoryTip:
          'Nhớ: にあたって = "ni a tatte" → "nhân (ni) dịp đứng (tatte) ở thời khắc quan trọng". Chỉ dùng cho sự kiện trọng đại, không dùng cho việc thường ngày.'
      },
      {
        japanese: '〜をもって',
        kana: '〜をもって',
        vietnamese: 'Bằng ~, với ~ (trang trọng).',
        memoryTip:
          'Nhớ: をもって = "mang theo, cầm lấy" → cầm lấy thứ gì đó (lòng biết ơn, sự kính trọng) để dâng tặng. Phiên bản trang trọng cực kỳ của で.'
      },
      {
        japanese: 'お礼申し上げます',
        kana: 'おれいもうしあげます',
        vietnamese: 'Xin được bày tỏ lòng biết ơn.',
        memoryTip:
          'Nhớ: おれい (御礼) = lễ nghi + もうしあげます = "thưa gửi lên" → nâng lời cảm ơn lên cao, dâng đến người trên. Kính ngữ bậc cao nhất của ありがとう.'
      }
    ],
    dialogue: [
      {
        speaker: '社長',
        japanese: '本日は、弊社創立五十周年の式典にあたり、ご多忙の中お集まりいただき、心よりお礼申し上げます。',
        kana: 'ほんじつは、へいしゃそうりつごじっしゅうねんのしきてんにあたり、ごたぼうのなかおあつまりいただき、こころよりおれいもうしあげます。',
        vietnamese: 'Nhân dịp lễ kỷ niệm 50 năm thành lập công ty, giữa bận rộn quý vị vẫn đến tham dự, chúng tôi xin chân thành cảm ơn.'
      },
      {
        speaker: '社長',
        japanese: '半世紀にわたる歩みを振り返りますと、幾多の困難がございました。しかし、社員一人ひとりの努力をもって、今日のこの日を迎えることができました。',
        kana: 'はんせいきにわたるあゆみをふりかえりますと、いくたのこんなんがございました。しかし、しゃいんひとりひとりのどりょくをもって、こんにちのこのひをむかえることができました。',
        vietnamese: 'Nhìn lại chặng đường nửa thế kỷ, đã có biết bao khó khăn. Tuy nhiên, bằng nỗ lực của từng nhân viên, chúng ta đã có thể đón ngày hôm nay.'
      },
      {
        speaker: '社長',
        japanese: '新たな五十年の出発にあたって、次の世代への架け橋となるべく、さらなる革新に挑んでまいります。',
        kana: 'あらたなごじゅうねんのしゅっぱつにあたって、つぎのせだいへのかけはしとなるべく、さらなるかくしんにいどんでまいります。',
        vietnamese: 'Nhân dịp khởi đầu 50 năm mới, chúng tôi sẽ tiếp tục thách thức đổi mới, trở thành cầu nối cho thế hệ tiếp theo.'
      },
      {
        speaker: '社長',
        japanese: 'お取引先の皆様、そして全社員に対し、深甚なる感謝の意をもって、ご挨拶とさせていただきます。',
        kana: 'おとりひきさきのみなさま、そしてぜんしゃいんにたいし、しんじんなるかんしゃのいをもって、ごあいさつとさせていただきます。',
        vietnamese: 'Với tấm lòng biết ơn sâu sắc nhất dành cho quý đối tác và toàn thể nhân viên, xin được kết thúc lời chào.'
      }
    ],
    culturalNote:
      'Bài phát biểu trang trọng (式辞 — しきじ) trong văn hóa Nhật tuân theo cấu trúc cố định: mở đầu bằng lời cảm ơn khách đến dự (お礼), hồi tưởng quá khứ (振り返り), tầm nhìn tương lai (展望), kết bằng lời cảm ơn tổng kết. Giám đốc luôn dùng 弊社 (へいしゃ — công ty chúng tôi, khiêm nhường) chứ không bao giờ nói 我が社. Cấu trúc 〜をもって ở đây mang sắc thái long trọng như "bằng tất cả lòng thành".'
  },

  // ── 3. Literary Expression (文学的表現) ──────────────────────
  {
    id: 'n1-conv-03',
    title: 'Biểu đạt văn chương',
    titleJp: '文学的表現',
    level: 'N1',
    situation: 'Hai giáo sư văn học thảo luận về tiểu thuyết đương đại trong buổi tọa đàm phê bình văn học',
    patterns: [
      {
        japanese: '〜ざるを得ない',
        kana: '〜ざるをえない',
        vietnamese: 'Không thể không ~, buộc phải ~.',
        memoryTip:
          'Nhớ: ざる = phủ định cổ (ず → ざる) + を得ない = "không đạt được" → "không đạt được việc KHÔNG làm" = bắt buộc phải làm. Hai lần phủ định = khẳng định mạnh. Hình dung: bị khóa trong phòng, không có cách nào KHÔNG mở cửa.'
      },
      {
        japanese: '〜ならざるもの',
        kana: '〜ならざるもの',
        vietnamese: 'Thứ không phải là ~, cái ngoài ~ ra.',
        memoryTip:
          'Nhớ: ならざる = "không phải là" (văn ngôn) → ならない + ざる kết hợp cổ xưa. Nghe như một vị hiền triết nói: "kẻ chẳng phải là X thì..." — chỉ gặp trong văn viết cực trang trọng.'
      },
      {
        japanese: '〜べきだ',
        kana: '〜べきだ',
        vietnamese: 'Nên ~, phải ~ (nghĩa vụ đạo đức).',
        memoryTip:
          'Nhớ: べき nghe như "back" (quay lại) → quay lại làm điều đúng đắn, làm điều mình CÓ BỔN PHẬN phải làm. Mạnh hơn ほうがいい, mang tính phán xét đạo đức.'
      }
    ],
    dialogue: [
      {
        speaker: '佐藤教授',
        japanese: 'この作品を読んで、現代文学の方向性について再考せざるを得ませんでした。',
        kana: 'このさくひんをよんで、げんだいぶんがくのほうこうせいについてさいこうせざるをえませんでした。',
        vietnamese: 'Đọc tác phẩm này, tôi buộc phải suy nghĩ lại về hướng đi của văn học đương đại.'
      },
      {
        speaker: '中村教授',
        japanese: '同感です。作者は、言葉ならざるものによって読者の心を揺さぶるという、極めて稀な才能の持ち主です。',
        kana: 'どうかんです。さくしゃは、ことばならざるものによってどくしゃのこころをゆさぶるという、きわめてまれなさいのうのもちぬしです。',
        vietnamese: 'Tôi đồng cảm. Tác giả là người sở hữu tài năng cực kỳ hiếm — lay động tâm hồn người đọc bằng thứ nằm ngoài ngôn từ.'
      },
      {
        speaker: '佐藤教授',
        japanese: '文学は時代を映す鏡であるべきだと言われますが、この小説は鏡を超えて、時代そのものを変えようとしている。',
        kana: 'ぶんがくはじだいをうつすかがみであるべきだといわれますが、このしょうせつはかがみをこえて、じだいそのものをかえようとしている。',
        vietnamese: 'Người ta nói văn học nên là tấm gương phản chiếu thời đại, nhưng tiểu thuyết này vượt qua tấm gương ấy, cố gắng thay đổi chính thời đại.'
      },
      {
        speaker: '中村教授',
        japanese: '行間に潜む沈黙こそが、この作品の真の言語であると認めざるを得ません。',
        kana: 'ぎょうかんにひそむちんもくこそが、このさくひんのしんのげんごであるとみとめざるをえません。',
        vietnamese: 'Phải thừa nhận rằng chính sự im lặng ẩn giữa các dòng chữ mới là ngôn ngữ thực sự của tác phẩm này.'
      },
      {
        speaker: '佐藤教授',
        japanese: '我々批評家は、作品を解体するのではなく、作品と対話するべきだという教訓を、この小説から得ました。',
        kana: 'われわれひひょうかは、さくひんをかいたいするのではなく、さくひんとたいわするべきだというきょうくんを、このしょうせつからえました。',
        vietnamese: 'Chúng ta — những nhà phê bình — đã rút ra bài học từ tiểu thuyết này rằng nên đối thoại với tác phẩm chứ không phải mổ xẻ nó.'
      }
    ],
    culturalNote:
      'Phê bình văn học Nhật Bản chịu ảnh hưởng sâu sắc từ khái niệm 行間を読む (ぎょうかんをよむ — đọc giữa các dòng). Người Nhật đánh giá cao "khoảng trống" (余白 — よはく) và "sự im lặng có ý nghĩa" (沈黙 — ちんもく). Cấu trúc ～ざるを得ない thường xuất hiện trong văn phê bình để diễn đạt sự buộc phải thừa nhận một sự thật không thể chối cãi, mang âm hưởng cổ kính và uy nghiêm.'
  },

  // ── 4. Diplomatic Language (外交的表現) ──────────────────────
  {
    id: 'n1-conv-04',
    title: 'Ngôn ngữ ngoại giao',
    titleJp: '外交的表現',
    level: 'N1',
    situation: 'Đại diện hai công ty đàm phán điều khoản hợp tác chiến lược trong phòng họp trang trọng',
    patterns: [
      {
        japanese: '〜させていただく',
        kana: '〜させていただく',
        vietnamese: 'Xin phép được ~ (khiêm nhường xin phép hành động).',
        memoryTip:
          'Nhớ: させて (cho phép) + いただく (nhận từ trên) → "xin được nhận sự cho phép từ phía trên để làm việc này". Kính ngữ kép: vừa xin phép vừa khiêm nhường. Cấu trúc quyền lực ngầm — người nói tự hạ mình để nâng đối phương.'
      },
      {
        japanese: '〜と存じます',
        kana: '〜とぞんじます',
        vietnamese: 'Tôi nghĩ rằng ~ (khiêm nhường cực cao).',
        memoryTip:
          'Nhớ: ぞんじます = "tồn tri" (Hán Việt: biết, nhận thức) → phiên bản siêu khiêm nhường của 思います. Chỉ dùng trong thương mại cấp cao, ngoại giao, hoặc trước hoàng gia.'
      }
    ],
    dialogue: [
      {
        speaker: '鈴木部長',
        japanese: '本日は貴重なお時間をいただき、誠にありがとうございます。早速ですが、提携の件について、ご説明させていただきたいと存じます。',
        kana: 'ほんじつはきちょうなおじかんをいただき、まことにありがとうございます。さっそくですが、ていけいのけんについて、ごせつめいさせていただきたいとぞんじます。',
        vietnamese: 'Hôm nay cảm ơn quý vị đã dành thời gian quý báu. Xin phép được đi thẳng vào vấn đề, tôi muốn trình bày về việc hợp tác.'
      },
      {
        speaker: '高橋取締役',
        japanese: 'ありがとうございます。弊社としましても、御社との連携は大変有意義であると存じております。',
        kana: 'ありがとうございます。へいしゃとしましても、おんしゃとのれんけいはたいへんゆういぎであるとぞんじております。',
        vietnamese: 'Xin cảm ơn. Phía công ty chúng tôi cũng nhận thấy việc hợp tác với quý công ty là hết sức có ý nghĩa.'
      },
      {
        speaker: '鈴木部長',
        japanese: '条件につきましては、双方にとって最善の形を模索させていただければと思います。一方的なご提案をするつもりはございません。',
        kana: 'じょうけんにつきましては、そうほうにとってさいぜんのかたちをもさくさせていただければとおもいます。いっぽうてきなごていあんをするつもりはございません。',
        vietnamese: 'Về điều kiện, chúng tôi mong được tìm kiếm hình thức tốt nhất cho cả hai bên. Chúng tôi không có ý định đưa ra đề xuất một chiều.'
      },
      {
        speaker: '高橋取締役',
        japanese: 'その姿勢に深く敬意を表します。具体的な数字につきましては、社内で検討させていただいた上で、改めてご回答申し上げます。',
        kana: 'そのしせいにふかくけいいをひょうします。ぐたいてきなすうじにつきましては、しゃないでけんとうさせていただいたうえで、あらためてごかいとうもうしあげます。',
        vietnamese: 'Chúng tôi vô cùng kính trọng thái độ đó. Về con số cụ thể, sau khi được phép xem xét nội bộ, chúng tôi sẽ trả lời lại.'
      },
      {
        speaker: '鈴木部長',
        japanese: 'かしこまりました。本日は忌憚のないご意見を賜り、大変実りある会談であったと存じます。今後ともよろしくお願い申し上げます。',
        kana: 'かしこまりました。ほんじつはきたんのないごいけんをたまわり、たいへんみのりあるかいだんであったとぞんじます。こんごともよろしくおねがいもうしあげます。',
        vietnamese: 'Xin tuân mệnh. Hôm nay được nhận những ý kiến thẳng thắn, tôi cho rằng đây là cuộc hội đàm rất có kết quả. Mong được tiếp tục hợp tác.'
      }
    ],
    culturalNote:
      'Ngôn ngữ thương mại cấp cao Nhật sử dụng "kính ngữ kép" (二重敬語) một cách có chủ đích: ～させていただく vừa khiêm nhường vừa xin phép, tạo không gian cho đối phương từ chối mà không mất mặt. 忌憚のない (きたんのない — thẳng thắn) là lời mời gọi ý kiến trung thực, nhưng trong văn hóa Nhật, người nghe hiểu rằng vẫn cần giữ phép lịch sự. 存じます là khiêm nhường ngữ (謙譲語) của 思います, chỉ dùng khi tự nói về suy nghĩ của mình trước người bậc trên hoặc đối tác.'
  },

  // ── 5. Proverbs in Context (ことわざ) ────────────────────────
  {
    id: 'n1-conv-05',
    title: 'Tục ngữ trong ngữ cảnh',
    titleJp: 'ことわざ',
    level: 'N1',
    situation: 'Senpai động viên kouhai sau thất bại trong kỳ thi, dùng tục ngữ Nhật để truyền cảm hứng',
    patterns: [
      {
        japanese: '猿も木から落ちる',
        kana: 'さるもきからおちる',
        vietnamese: 'Khỉ cũng có lúc rơi từ cây (ai cũng có lúc thất bại).',
        memoryTip:
          'Nhớ: Khỉ (さる) là bậc thầy leo cây, mà còn rơi → chuyên gia cũng sai. Tương đương "Bách phát bách trúng cũng có lúc trượt" trong tiếng Việt. Dùng để an ủi, không dùng để chê bai.'
      },
      {
        japanese: '七転び八起き',
        kana: 'ななころびやおき',
        vietnamese: 'Bảy lần ngã, tám lần đứng dậy.',
        memoryTip:
          'Nhớ: 7 lần ngã (ころび) + 8 lần dậy (おき) → luôn đứng dậy nhiều hơn số lần ngã MỘT. Con số 8 tượng trưng cho may mắn trong văn hóa Nhật. Tinh thần bất khuất cốt lõi của người Nhật.'
      },
      {
        japanese: '失敗は成功のもと',
        kana: 'しっぱいはせいこうのもと',
        vietnamese: 'Thất bại là mẹ thành công.',
        memoryTip:
          'Nhớ: もと = gốc rễ, nguồn gốc → thất bại (しっぱい) là GỐC RỄ mọc lên cây thành công (せいこう). Giống hệt tục ngữ Việt "Thất bại là mẹ thành công" — dễ nhớ vì cùng ý tưởng xuyên văn hóa.'
      }
    ],
    dialogue: [
      {
        speaker: '先輩',
        japanese: '試験の結果、聞いたよ。落ち込んでいるだろうけど、猿も木から落ちるって言うだろう。君ほど優秀な人でも、こういうことはあるんだ。',
        kana: 'しけんのけっか、きいたよ。おちこんでいるだろうけど、さるもきからおちるっていうだろう。きみほどゆうしゅうなひとでも、こういうことはあるんだ。',
        vietnamese: 'Anh nghe kết quả thi rồi. Em chắc đang buồn lắm, nhưng người ta có câu "khỉ cũng có lúc rơi từ cây" mà. Người giỏi như em cũng có lúc gặp chuyện thế này.'
      },
      {
        speaker: '後輩',
        japanese: 'ありがとうございます。でも、あれだけ準備したのに…。自分が情けなくて。',
        kana: 'ありがとうございます。でも、あれだけじゅんびしたのに…。じぶんがなさけなくて。',
        vietnamese: 'Cảm ơn anh. Nhưng mà chuẩn bị kỹ thế rồi mà… Em thấy bản thân thật đáng thương.'
      },
      {
        speaker: '先輩',
        japanese: '失敗は成功のもとだよ。今回の悔しさが、次の試験の最大の武器になる。',
        kana: 'しっぱいはせいこうのもとだよ。こんかいのくやしさが、つぎのしけんのさいだいのぶきになる。',
        vietnamese: 'Thất bại là mẹ thành công mà. Nỗi uất ức lần này sẽ trở thành vũ khí lớn nhất cho kỳ thi tiếp theo.'
      },
      {
        speaker: '後輩',
        japanese: '先輩も、そういう経験がおありですか。',
        kana: 'せんぱいも、そういうけいけんがおありですか。',
        vietnamese: 'Anh cũng từng có trải nghiệm như vậy ạ?'
      },
      {
        speaker: '先輩',
        japanese: '何度もあるよ。でも七転び八起きの精神で、そのたびに立ち上がってきた。大事なのは、転んだ回数じゃなくて、起き上がった回数だ。',
        kana: 'なんどもあるよ。でもななころびやおきのせいしんで、そのたびにたちあがってきた。だいじなのは、ころんだかいすうじゃなくて、おきあがったかいすうだ。',
        vietnamese: 'Nhiều lần lắm. Nhưng với tinh thần bảy lần ngã tám lần dậy, mỗi lần anh đều đứng lên. Điều quan trọng không phải số lần ngã, mà là số lần đứng dậy.'
      },
      {
        speaker: '後輩',
        japanese: '先輩の言葉、胸に刻みます。もう一度、挑戦させてください。',
        kana: 'せんぱいのことば、むねにきざみます。もういちど、ちょうせんさせてください。',
        vietnamese: 'Em sẽ khắc ghi lời anh. Xin hãy để em thử thách thêm một lần nữa.'
      }
    ],
    culturalNote:
      'Tục ngữ Nhật (ことわざ) thường được dùng trong giao tiếp hàng ngày để truyền đạt trí tuệ dân gian. 七転び八起き không chỉ là câu nói mà còn là triết lý sống sâu sắc trong văn hóa Nhật — thể hiện qua búp bê Daruma (だるま) chỉ có thể lật đứng, tượng trưng cho ý chí bất khuất. Khi senpai dùng ことわざ để khuyên kouhai, đó là cách truyền đạt kinh nghiệm sống tinh tế mà không áp đặt hay lên giọng dạy đời — vì tục ngữ là "của chung", không phải ý kiến cá nhân.'
  },

  // ── 6. Philosophy (哲学) ────────────────────────────────────
  {
    id: 'n1-conv-06',
    title: 'Triết học',
    titleJp: '哲学',
    level: 'N1',
    situation: 'Hai giáo sư triết học thảo luận về bản chất của sự tồn tại trong hội thảo triết học phương Đông và phương Tây',
    patterns: [
      {
        japanese: '〜と言わざるを得ない',
        kana: '〜といわざるをえない',
        vietnamese: 'Không thể không nói rằng ~, buộc phải thừa nhận ~.',
        memoryTip:
          'Nhớ: いわざる = "không nói" (cổ ngữ) + を得ない = "không thể" → "không thể KHÔNG nói" = buộc lòng phải thốt lên. Cấu trúc hai lần phủ định tạo khẳng định mạnh — triết gia dùng khi bị logic ép phải thừa nhận.'
      },
      {
        japanese: '〜に他ならない',
        kana: '〜にほかならない',
        vietnamese: 'Không gì khác ngoài ~, chính là ~.',
        memoryTip:
          'Nhớ: ほかならない = "không phải cái khác" → chỉ có DUY NHẤT câu trả lời này. Như mũi tên xuyên trúng hồng tâm — kết luận dứt khoát, không còn khả năng nào khác.'
      },
      {
        japanese: '〜てやまない',
        kana: '〜てやまない',
        vietnamese: 'Không ngừng ~, mãi mãi ~ (tình cảm mãnh liệt).',
        memoryTip:
          'Nhớ: やまない = "không dừng lại" → dòng suối cảm xúc chảy mãi không ngừng. Chỉ dùng cho tình cảm tích cực sâu sắc: 願ってやまない (nguyện cầu không thôi), 愛してやまない (yêu mãi không ngừng).'
      }
    ],
    dialogue: [
      {
        speaker: '西田教授',
        japanese: '存在とは何かという問いは、哲学の根本的な課題であると言わざるを得ません。',
        kana: 'そんざいとはなにかというといは、てつがくのこんぽんてきなかだいであるといわざるをえません。',
        vietnamese: 'Phải thừa nhận rằng câu hỏi "tồn tại là gì" là vấn đề căn bản nhất của triết học.'
      },
      {
        speaker: '和辻教授',
        japanese: '東洋哲学において、存在の認識は自己と世界の一体性に他なりません。デカルトの二元論とは根本的に異なります。',
        kana: 'とうようてつがくにおいて、そんざいのにんしきはじことせかいのいったいせいにほかなりません。デカルトのにげんろんとはこんぽんてきにことなります。',
        vietnamese: 'Trong triết học phương Đông, nhận thức về tồn tại chính là sự nhất thể giữa bản ngã và thế giới. Điều này khác căn bản với nhị nguyên luận của Descartes.'
      },
      {
        speaker: '西田教授',
        japanese: '本質を探求する営みこそが、人間を人間たらしめるものであると、私は信じてやみません。',
        kana: 'ほんしつをたんきゅうするいとなみこそが、にんげんをにんげんたらしめるものであると、わたしはしんじてやみません。',
        vietnamese: 'Tôi tin không ngừng rằng chính hành trình tìm kiếm bản chất mới là thứ khiến con người thành con người.'
      },
      {
        speaker: '和辻教授',
        japanese: '同感です。しかし、存在の本質に迫れば迫るほど、言語の限界に突き当たると言わざるを得ない。',
        kana: 'どうかんです。しかし、そんざいのほんしつにせまればせまるほど、げんごのげんかいにつきあたるといわざるをえない。',
        vietnamese: 'Tôi đồng ý. Tuy nhiên, phải thừa nhận rằng càng tiếp cận bản chất của tồn tại, ta càng va vào giới hạn của ngôn ngữ.'
      },
      {
        speaker: '西田教授',
        japanese: '「無」の中にこそ「有」が宿るという逆説、それが東洋思想の核心に他なりません。',
        kana: '「む」のなかにこそ「う」がやどるというぎゃくせつ、それがとうようしそうのかくしんにほかなりません。',
        vietnamese: 'Nghịch lý rằng chính trong "vô" mới ẩn chứa "hữu" — đó chính là cốt lõi tư tưởng phương Đông, không gì khác.'
      }
    ],
    culturalNote:
      'Triết học Nhật Bản (日本哲学) đặc biệt ở chỗ kết hợp Thiền tông, Phật giáo với triết học phương Tây. Trường phái Kyoto (京都学派) của Nishida Kitaro đề xuất khái niệm "Tuyệt đối vô" (絶対無) — cái vô tuyệt đối — như nền tảng tồn tại, khác biệt hoàn toàn với "hữu" (Being) của Heidegger. Khi triết gia Nhật dùng 〜に他ならない, họ đang đưa ra phán đoán tuyệt đối — không còn khả năng nào khác — phản ánh phong cách luận chứng chặt chẽ.'
  },

  // ── 7. Law & Justice (法と正義) ─────────────────────────────
  {
    id: 'n1-conv-07',
    title: 'Pháp luật và Công lý',
    titleJp: '法と正義',
    level: 'N1',
    situation: 'Luật sư bào chữa và công tố viên tranh luận trong phiên tòa xét xử vụ án phức tạp',
    patterns: [
      {
        japanese: '〜をもって',
        kana: '〜をもって',
        vietnamese: 'Dựa trên ~, căn cứ theo ~ (pháp lý).',
        memoryTip:
          'Nhớ: をもって trong ngữ cảnh pháp lý = "cầm lấy bằng chứng/luật" → đặt lên bàn cân công lý. Khác với をもって trang trọng ở bài 2 — ở đây mang nghĩa "căn cứ, dựa trên".'
      },
      {
        japanese: '〜に基づいて',
        kana: '〜にもとづいて',
        vietnamese: 'Dựa trên ~, căn cứ vào ~.',
        memoryTip:
          'Nhớ: もとづいて = "đi theo nền móng (もと)" → mọi lập luận phải có NỀN TẢNG vững chắc. Luật sư xây nhà luận điểm trên nền móng bằng chứng.'
      },
      {
        japanese: '〜かねない',
        kana: '〜かねない',
        vietnamese: 'Có khả năng ~, e rằng ~ (tiêu cực).',
        memoryTip:
          'Nhớ: かねない = "không thể gánh nổi" → tình huống nặng đến mức có thể đổ sụp bất kỳ lúc nào. Chỉ dùng cho kết quả TIÊU CỰC đáng lo ngại — cảnh báo nguy hiểm trước mắt.'
      }
    ],
    dialogue: [
      {
        speaker: '弁護人',
        japanese: '裁判長、被告人の権利に基づき、弁護の機会を十分にいただきたく存じます。',
        kana: 'さいばんちょう、ひこくにんのけんりにもとづき、べんごのきかいをじゅうぶんにいただきたくぞんじます。',
        vietnamese: 'Thưa chánh án, dựa trên quyền của bị cáo, tôi mong được có đầy đủ cơ hội bào chữa.'
      },
      {
        speaker: '検察官',
        japanese: '証拠をもって申し上げます。被告人には義務を怠った重大な過失があります。',
        kana: 'しょうこをもってもうしあげます。ひこくにんにはぎむをおこたったじゅうだいなかしつがあります。',
        vietnamese: 'Căn cứ vào bằng chứng, tôi xin trình bày rằng bị cáo có lỗi nghiêm trọng trong việc bỏ bê nghĩa vụ.'
      },
      {
        speaker: '弁護人',
        japanese: 'しかし、状況証拠のみに基づいた判決は、冤罪を生みかねません。慎重な審理をお願いいたします。',
        kana: 'しかし、じょうきょうしょうこのみにもとづいたはんけつは、えんざいをうみかねません。しんちょうなしんりをおねがいいたします。',
        vietnamese: 'Tuy nhiên, bản án chỉ dựa trên bằng chứng tình huống có khả năng tạo ra oan sai. Xin hãy xét xử thận trọng.'
      },
      {
        speaker: '検察官',
        japanese: '被告人が義務を履行していれば、このような事態には至らなかったはずです。法に基づいて厳正に裁くべきです。',
        kana: 'ひこくにんがぎむをりこうしていれば、このようなじたいにはいたらなかったはずです。ほうにもとづいてげんせいにさばくべきです。',
        vietnamese: 'Nếu bị cáo thực hiện nghĩa vụ, tình huống này đã không xảy ra. Cần xét xử nghiêm minh dựa trên pháp luật.'
      }
    ],
    culturalNote:
      'Hệ thống tư pháp Nhật Bản (司法制度) nổi tiếng với tỷ lệ kết tội trên 99%, khiến vai trò luật sư bào chữa cực kỳ khó khăn. Năm 2009, Nhật đưa vào chế độ bồi thẩm nhân dân (裁判員制度 — さいばんいんせいど) cho công dân tham gia xét xử. Trong tòa án, ngôn ngữ cực kỳ trang trọng: luật sư dùng 存じます, 申し上げます — kính ngữ bậc cao nhất — thể hiện sự tôn trọng tuyệt đối với chánh án và quy trình tố tụng.'
  },

  // ── 8. Economics Debate (経済討論) ──────────────────────────
  {
    id: 'n1-conv-08',
    title: 'Thảo luận kinh tế',
    titleJp: '経済討論',
    level: 'N1',
    situation: 'Hai nhà kinh tế học tranh luận về chính sách kinh tế vĩ mô trên chương trình thời sự truyền hình',
    patterns: [
      {
        japanese: '〜を余儀なくされる',
        kana: '〜をよぎなくされる',
        vietnamese: 'Bị buộc phải ~, không có lựa chọn nào khác.',
        memoryTip:
          'Nhớ: 余儀 = "phương kế khác" + なくされる = "bị mất" → bị tước hết mọi phương kế, chỉ còn MỘT con đường duy nhất. Hoàn cảnh ép buộc, không phải ý muốn cá nhân.'
      },
      {
        japanese: '〜を踏まえて',
        kana: '〜をふまえて',
        vietnamese: 'Dựa trên ~, xét đến ~.',
        memoryTip:
          'Nhớ: ふまえて = "đạp chân lên, đứng vững trên" → đứng trên nền tảng dữ liệu/sự thật để đưa ra nhận xét. Khác với に基づいて (pháp lý) — ふまえて thiên về "cân nhắc tổng hợp".'
      }
    ],
    dialogue: [
      {
        speaker: '経済学者A',
        japanese: '現在の経済政策を踏まえて申し上げますと、このままではインフレが加速する恐れがあります。',
        kana: 'げんざいのけいざいせいさくをふまえてもうしあげますと、このままではインフレがかそくするおそれがあります。',
        vietnamese: 'Dựa trên chính sách kinh tế hiện tại mà nói, nếu cứ thế này thì lạm phát có nguy cơ gia tốc.'
      },
      {
        speaker: '経済学者B',
        japanese: 'しかし、デフレ対策を怠れば、企業は大規模なリストラを余儀なくされるのではないでしょうか。',
        kana: 'しかし、デフレたいさくをおこたれば、きぎょうはだいきぼなリストラをよぎなくされるのではないでしょうか。',
        vietnamese: 'Tuy nhiên, nếu lơ là đối sách chống giảm phát, các doanh nghiệp chẳng phải sẽ bị buộc phải tái cơ cấu quy mô lớn sao?'
      },
      {
        speaker: '経済学者A',
        japanese: '過去のデータを踏まえれば、金融緩和だけでは構造的な問題は解決しないと言わざるを得ません。',
        kana: 'かこのデータをふまえれば、きんゆうかんわだけではこうぞうてきなもんだいはかいけつしないといわざるをえません。',
        vietnamese: 'Dựa trên dữ liệu quá khứ, phải thừa nhận rằng chỉ nới lỏng tiền tệ thì không giải quyết được vấn đề cơ cấu.'
      },
      {
        speaker: '経済学者B',
        japanese: '同意しますが、財政出動なくしては、国民生活が犠牲を余儀なくされます。バランスの取れた経済政策が急務です。',
        kana: 'どういしますが、ざいせいしゅつどうなくしては、こくみんせいかつがぎせいをよぎなくされます。バランスのとれたけいざいせいさくがきゅうむです。',
        vietnamese: 'Tôi đồng ý, nhưng nếu không có can thiệp tài chính, đời sống quốc dân sẽ bị buộc phải hy sinh. Chính sách kinh tế cân bằng là việc cấp bách.'
      }
    ],
    culturalNote:
      'Kinh tế Nhật Bản trải qua "Thập niên mất mát" (失われた十年 — うしなわれたじゅうねん) sau bong bóng kinh tế vỡ năm 1991. Chính sách Abenomics (アベノミクス) với "ba mũi tên" (三本の矢) là nỗ lực thoát giảm phát kéo dài. Trong tranh luận kinh tế trên TV Nhật, các chuyên gia vẫn giữ phong thái lịch sự — dùng ではないでしょうか (chẳng phải sao?) thay vì phản bác trực diện.'
  },

  // ── 9. Art Criticism (芸術批評) ─────────────────────────────
  {
    id: 'n1-conv-09',
    title: 'Phê bình nghệ thuật',
    titleJp: '芸術批評',
    level: 'N1',
    situation: 'Hai nhà phê bình nghệ thuật thảo luận về triển lãm đương đại tại bảo tàng nghệ thuật quốc gia',
    patterns: [
      {
        japanese: '〜ともなると',
        kana: '〜ともなると',
        vietnamese: 'Khi đã đạt đến mức ~, nếu là ~.',
        memoryTip:
          'Nhớ: ともなると = "khi cùng trở thành" → khi đã tiến hóa đến cấp độ cao nhất thì mọi thứ khác hẳn. Dùng để nói về ngưỡng chuyển đổi chất lượng — từ "giỏi" thành "bậc thầy".'
      },
      {
        japanese: '〜ずにはいられない',
        kana: '〜ずにはいられない',
        vietnamese: 'Không thể không ~, không kiềm chế được mà ~.',
        memoryTip:
          'Nhớ: ず (phủ định) + にはいられない = "không thể ở yên" → cảm xúc mãnh liệt đến mức KHÔNG THỂ KHÔNG hành động. Trái tim bật ra khỏi lồng ngực — bản năng vượt qua lý trí.'
      }
    ],
    dialogue: [
      {
        speaker: '批評家A',
        japanese: 'この芸術家ともなると、一筆一筆に哲学が込められていますね。',
        kana: 'このげいじゅつかともなると、ひとふでひとふでにてつがくがこめられていますね。',
        vietnamese: 'Khi đã là nghệ sĩ ở tầm này, mỗi nét vẽ đều chứa đựng triết lý.'
      },
      {
        speaker: '批評家B',
        japanese: '確かに。この作品を前にすると、美学とは何かを問い直さずにはいられません。',
        kana: 'たしかに。このさくひんをまえにすると、びがくとはなにかをといなおさずにはいられません。',
        vietnamese: 'Đúng vậy. Đứng trước tác phẩm này, không thể không tự hỏi lại mỹ học là gì.'
      },
      {
        speaker: '批評家A',
        japanese: '従来の評価基準では、この作品の本質を捉えきれないと言わざるを得ません。新しい批評言語が必要です。',
        kana: 'じゅうらいのひょうかきじゅんでは、このさくひんのほんしつをとらえきれないといわざるをえません。あたらしいひひょうげんごがひつようです。',
        vietnamese: 'Phải thừa nhận rằng tiêu chuẩn đánh giá truyền thống không nắm bắt hết bản chất tác phẩm này. Cần một ngôn ngữ phê bình mới.'
      },
      {
        speaker: '批評家B',
        japanese: '国際的な芸術家ともなると、文化の境界を超えて人類共通の感動を生み出せるものです。',
        kana: 'こくさいてきなげいじゅつかともなると、ぶんかのきょうかいをこえてじんるいきょうつうのかんどうをうみだせるものです。',
        vietnamese: 'Khi đã là nghệ sĩ tầm quốc tế, họ có thể vượt qua ranh giới văn hóa để tạo ra cảm động chung cho nhân loại.'
      },
      {
        speaker: '批評家A',
        japanese: '色彩の対比に目を奪われずにはいられない。静寂の中に激情が潜んでいる。まさに矛盾の美学です。',
        kana: 'しきさいのたいひにめをうばわれずにはいられない。せいじゃくのなかにげきじょうがひそんでいる。まさにむじゅんのびがくです。',
        vietnamese: 'Không thể không bị cuốn hút bởi sự đối lập màu sắc. Trong tĩnh lặng ẩn chứa cơn cuồng nộ. Đúng là mỹ học của mâu thuẫn.'
      }
    ],
    culturalNote:
      'Mỹ học Nhật Bản (日本美学) có những khái niệm độc đáo: 侘び寂び (wabi-sabi — vẻ đẹp của sự không hoàn hảo), 幽玄 (yūgen — vẻ đẹp u huyền sâu thẳm), 物の哀れ (mono no aware — nỗi buồn trước vạn vật). Phê bình nghệ thuật Nhật thường tìm kiếm "khoảng trống" (間 — ma) — không gian giữa các yếu tố — thay vì chỉ phân tích cái hiện hữu. Cấu trúc 〜ずにはいられない diễn đạt cảm xúc thẩm mỹ bất khả kháng.'
  },

  // ── 10. Political Discourse (政治談話) ──────────────────────
  {
    id: 'n1-conv-10',
    title: 'Diễn ngôn chính trị',
    titleJp: '政治談話',
    level: 'N1',
    situation: 'Hai nhà bình luận chính trị phân tích tình hình quốc hội và chính sách đảng phái trên chương trình bình luận',
    patterns: [
      {
        japanese: '〜いかんによっては',
        kana: '〜いかんによっては',
        vietnamese: 'Tùy thuộc vào ~, tùy theo tình hình ~.',
        memoryTip:
          'Nhớ: いかん = 如何 (như thế nào — Hán Việt) + によっては = "tùy theo" → tùy theo tình hình diễn biến THẾ NÀO. Từ Hán cổ xuất hiện trong chính trị và pháp luật — âm hưởng quyền lực và nghiêm túc.'
      },
      {
        japanese: '〜をめぐって',
        kana: '〜をめぐって',
        vietnamese: 'Xoay quanh vấn đề ~, liên quan đến ~.',
        memoryTip:
          'Nhớ: めぐって = "xoay vòng quanh" → mọi người đứng xung quanh VẤN ĐỀ ở trung tâm mà tranh luận. Như một bàn tròn với chủ đề nóng ở giữa.'
      }
    ],
    dialogue: [
      {
        speaker: '評論家A',
        japanese: '今回の政策をめぐって、与党と野党の対立が激化しています。',
        kana: 'こんかいのせいさくをめぐって、よとうとやとうのたいりつがげきかしています。',
        vietnamese: 'Xoay quanh chính sách lần này, đối lập giữa đảng cầm quyền và đảng đối lập ngày càng gay gắt.'
      },
      {
        speaker: '評論家B',
        japanese: '野党の対応いかんによっては、政権交代すら現実味を帯びてくるでしょう。',
        kana: 'やとうのたいおういかんによっては、せいけんこうたいすらげんじつみをおびてくるでしょう。',
        vietnamese: 'Tùy thuộc vào cách ứng đối của phe đối lập, thậm chí thay đổi chính quyền cũng có thể trở nên hiện thực.'
      },
      {
        speaker: '評論家A',
        japanese: '与党の政策に対する国民の信頼いかんによっては、次の選挙で大きな変動がありかねません。',
        kana: 'よとうのせいさくにたいするこくみんのしんらいいかんによっては、つぎのせんきょでおおきなへんどうがありかねません。',
        vietnamese: 'Tùy vào niềm tin của quốc dân đối với chính sách đảng cầm quyền, kỳ bầu cử tới có thể có biến động lớn.'
      },
      {
        speaker: '評論家B',
        japanese: '憲法改正をめぐる議論は、単なる政策論争に過ぎないのか、それとも国の根幹に関わる問題なのか。国民的議論が必要です。',
        kana: 'けんぽうかいせいをめぐるぎろんは、たんなるせいさくろんそうにすぎないのか、それともくにのこんかんにかかわるもんだいなのか。こくみんてきぎろんがひつようです。',
        vietnamese: 'Cuộc tranh luận xoay quanh sửa đổi hiến pháp chỉ là tranh luận chính sách đơn thuần, hay là vấn đề liên quan đến nền tảng quốc gia? Cần có thảo luận toàn dân.'
      }
    ],
    culturalNote:
      'Chính trị Nhật Bản vận hành theo hệ thống đa đảng với Đảng Dân chủ Tự do (自民党 — じみんとう) thống trị gần như liên tục từ 1955. Quốc hội (国会 — こっかい) gồm Thượng viện (参議院) và Hạ viện (衆議院). Trong bình luận chính trị, từ いかん (如何) mang sắc thái Hán cổ trang trọng, thường xuất hiện trong phát biểu quốc hội và xã luận báo chí — phản ánh truyền thống dùng Hán ngữ trong diễn ngôn chính trị Nhật.'
  },

  // ── 11. Scientific Paper (科学論文) ─────────────────────────
  {
    id: 'n1-conv-11',
    title: 'Luận văn khoa học',
    titleJp: '科学論文',
    level: 'N1',
    situation: 'Giáo sư hướng dẫn và nghiên cứu sinh thảo luận về phương pháp luận và kết quả nghiên cứu trong buổi seminar',
    patterns: [
      {
        japanese: '〜に即して',
        kana: '〜にそくして',
        vietnamese: 'Theo đúng ~, phù hợp với ~.',
        memoryTip:
          'Nhớ: そくして = "tức thì bám sát" → bám sát thực tế/dữ liệu như đường ray bám sát mặt đất. Khoa học yêu cầu lý thuyết phải ĐI SÁT thực nghiệm, không bay bổng.'
      },
      {
        japanese: '〜得る／〜得ない',
        kana: '〜うる／〜えない',
        vietnamese: 'Có thể ~ / Không thể ~ (khả năng lý thuyết).',
        memoryTip:
          'Nhớ: 得る(うる) = "đạt được" → xét về mặt lý thuyết, có KHẢ NĂNG đạt được kết quả này không? Dùng trong khoa học để nói về khả năng logic, không phải khả năng thực tế.'
      }
    ],
    dialogue: [
      {
        speaker: '教授',
        japanese: '君の仮説は興味深いが、実験データに即して検証する必要がある。理論だけでは不十分だ。',
        kana: 'きみのかせつはきょうみぶかいが、じっけんデータにそくしてけんしょうするひつようがある。りろんだけではふじゅうぶんだ。',
        vietnamese: 'Giả thuyết của em rất thú vị, nhưng cần kiểm chứng theo đúng dữ liệu thực nghiệm. Chỉ lý thuyết thôi là không đủ.'
      },
      {
        speaker: '院生',
        japanese: 'はい。現在の条件下では、この仮説が成立し得ると考えておりますが、追加実験が必要でしょうか。',
        kana: 'はい。げんざいのじょうけんかでは、このかせつがせいりつしうるとかんがえておりますが、ついかじっけんがひつようでしょうか。',
        vietnamese: 'Vâng. Em cho rằng trong điều kiện hiện tại, giả thuyết này có thể thành lập, nhưng liệu có cần thêm thí nghiệm không ạ?'
      },
      {
        speaker: '教授',
        japanese: '再現性のない結果は、科学的に有意義とは言い得ない。サンプル数を増やして再実験してくれ。',
        kana: 'さいげんせいのないけっかは、かがくてきにゆういぎとはいいえない。サンプルすうをふやしてさいじっけんしてくれ。',
        vietnamese: 'Kết quả không có tính tái hiện thì không thể nói là có ý nghĩa khoa học. Hãy tăng số mẫu và thí nghiệm lại.'
      },
      {
        speaker: '院生',
        japanese: '承知しました。先行研究に即して実験条件を見直し、検証の精度を高めます。',
        kana: 'しょうちしました。せんこうけんきゅうにそくしてじっけんじょうけんをみなおし、けんしょうのせいどをたかめます。',
        vietnamese: 'Em hiểu rồi ạ. Em sẽ rà soát lại điều kiện thí nghiệm theo đúng nghiên cứu tiên hành, nâng cao độ chính xác kiểm chứng.'
      }
    ],
    culturalNote:
      'Văn phong khoa học Nhật (科学論文のスタイル) yêu cầu tính khách quan tuyệt đối. Nghiên cứu sinh (院生 — いんせい) nói chuyện với giáo sư dùng kính ngữ, nhưng giáo sư có thể dùng thể thường (タメ口). Cấu trúc 〜に即して phổ biến trong luận văn — nhấn mạnh sự bám sát thực tế. Trong seminar Nhật, giáo sư đặt câu hỏi sắc bén (鋭い質問) không phải để chê bai mà để rèn tư duy phản biện cho sinh viên.'
  },

  // ── 12. Medical Ethics (医療倫理) ──────────────────────────
  {
    id: 'n1-conv-12',
    title: 'Y đức',
    titleJp: '医療倫理',
    level: 'N1',
    situation: 'Bác sĩ và chuyên gia đạo đức y khoa thảo luận về quyền tự quyết của bệnh nhân trong hội nghị y khoa',
    patterns: [
      {
        japanese: '〜を抜きにしては',
        kana: '〜をぬきにしては',
        vietnamese: 'Không thể bỏ qua ~, nếu thiếu ~ thì không được.',
        memoryTip:
          'Nhớ: ぬき = "rút ra, bỏ đi" + にしては = "nếu làm vậy thì" → nếu RÚT BỎ yếu tố này ra thì mọi thứ sụp đổ. Như rút cột trụ khỏi ngôi nhà — không thể thiếu.'
      },
      {
        japanese: '〜なくして（は）',
        kana: '〜なくして（は）',
        vietnamese: 'Nếu không có ~, thiếu ~ thì không thể.',
        memoryTip:
          'Nhớ: なくして = "không có mà làm" → điều kiện TIÊN QUYẾT không thể thiếu. Mạnh hơn ないと — mang tính tuyên ngôn: "KHÔNG CÓ X THÌ KHÔNG CÓ Y". Thường dùng trong diễn thuyết.'
      }
    ],
    dialogue: [
      {
        speaker: '医師',
        japanese: 'インフォームド・コンセントを抜きにしては、いかなる治療も倫理的に正当化し得ません。',
        kana: 'インフォームド・コンセントをぬきにしては、いかなるちりょうもりんりてきにせいとうかしえません。',
        vietnamese: 'Không thể bỏ qua việc đồng ý sau khi được thông tin đầy đủ — bất kỳ phương pháp điều trị nào cũng không thể biện minh về mặt đạo đức.'
      },
      {
        speaker: '倫理学者',
        japanese: '同感です。患者の自己決定権なくしては、生命倫理の根幹が揺らぎます。',
        kana: 'どうかんです。かんじゃのじこけっていけんなくしては、せいめいりんりのこんかんがゆらぎます。',
        vietnamese: 'Tôi đồng ý. Nếu không có quyền tự quyết của bệnh nhân, nền tảng đạo đức sinh mệnh sẽ lung lay.'
      },
      {
        speaker: '医師',
        japanese: 'しかし、患者の意思確認が困難な緊急時には、医師の判断を抜きにしては命を救えない場面もあります。',
        kana: 'しかし、かんじゃのいしかくにんがこんなんなきんきゅうじには、いしのはんだんをぬきにしてはいのちをすくえないばめんもあります。',
        vietnamese: 'Tuy nhiên, trong trường hợp khẩn cấp khi khó xác nhận ý chí bệnh nhân, cũng có lúc không thể cứu mạng nếu thiếu phán đoán của bác sĩ.'
      },
      {
        speaker: '倫理学者',
        japanese: 'その通りです。信頼関係なくして、医療は成り立ちません。患者と医師の対話こそが、倫理の出発点に他なりません。',
        kana: 'そのとおりです。しんらいかんけいなくして、いりょうはなりたちません。かんじゃといしのたいわこそが、りんりのしゅっぱつてんにほかなりません。',
        vietnamese: 'Đúng vậy. Không có mối quan hệ tin cậy, y tế không thể tồn tại. Đối thoại giữa bệnh nhân và bác sĩ chính là điểm xuất phát của đạo đức, không gì khác.'
      }
    ],
    culturalNote:
      'Y đức Nhật Bản chịu ảnh hưởng từ truyền thống Á Đông: trước đây bác sĩ thường quyết định thay bệnh nhân (医師のパターナリズム). Khái niệm インフォームド・コンセント (informed consent — đồng ý sau khi được cung cấp đầy đủ thông tin) du nhập từ phương Tây và dần trở thành tiêu chuẩn. Vấn đề 告知 (こくち — thông báo bệnh nặng cho bệnh nhân) vẫn là chủ đề nhạy cảm — nhiều gia đình Nhật muốn giấu bệnh nhân để "bảo vệ" tinh thần họ.'
  },

  // ── 13. Environmental Summit (環境サミット) ─────────────────
  {
    id: 'n1-conv-13',
    title: 'Hội nghị thượng đỉnh Môi trường',
    titleJp: '環境サミット',
    level: 'N1',
    situation: 'Đại diện các quốc gia thảo luận về biến đổi khí hậu và cam kết giảm phát thải tại hội nghị quốc tế',
    patterns: [
      {
        japanese: '〜を余儀なくさせる',
        kana: '〜をよぎなくさせる',
        vietnamese: 'Buộc (ai đó) phải ~.',
        memoryTip:
          'Nhớ: Phiên bản CHỦ ĐỘNG của 余儀なくされる — không phải "bị buộc" mà "BUỘC ai đó". Thiên tai buộc con người phải hành động — chủ ngữ là sức mạnh không thể chống lại.'
      },
      {
        japanese: '〜べからず',
        kana: '〜べからず',
        vietnamese: 'Không được ~, cấm ~ (mệnh lệnh cổ ngữ).',
        memoryTip:
          'Nhớ: べからず = べき + あらず (phủ định cổ) → "KHÔNG ĐƯỢC LÀM". Giọng điệu như chiếu chỉ hoàng đế hoặc bảng cấm khắc trên đá. Cực kỳ mạnh và trang trọng.'
      }
    ],
    dialogue: [
      {
        speaker: '日本代表',
        japanese: '温暖化の加速は、世界中の沿岸都市を移転を余儀なくさせかねません。CO2排出の削減は待ったなしです。',
        kana: 'おんだんかのかそくは、せかいじゅうのえんがんとしをいてんをよぎなくさせかねません。シーオーツーはいしゅつのさくげんはまったなしです。',
        vietnamese: 'Sự gia tốc nóng lên toàn cầu có thể buộc các thành phố ven biển trên thế giới phải di dời. Giảm phát thải CO2 không thể chần chừ.'
      },
      {
        speaker: '欧州代表',
        japanese: '次世代に対する責任を忘れるべからず。対策の遅れは、取り返しのつかない結果を招きかねません。',
        kana: 'じせだいにたいするせきにんをわすれるべからず。たいさくのおくれは、とりかえしのつかないけっかをまねきかねません。',
        vietnamese: 'Không được quên trách nhiệm với thế hệ tiếp theo. Sự chậm trễ đối sách có thể dẫn đến hậu quả không thể vãn hồi.'
      },
      {
        speaker: '日本代表',
        japanese: '先進国と途上国の協力を抜きにしては、実効的な対策は実現し得ません。',
        kana: 'せんしんこくととじょうこくのきょうりょくをぬきにしては、じっこうてきなたいさくはじつげんしえません。',
        vietnamese: 'Nếu thiếu sự hợp tác giữa các nước phát triển và đang phát triển, đối sách thực tế không thể thực hiện được.'
      },
      {
        speaker: '欧州代表',
        japanese: '地球の未来は、今日の我々の決断いかんにかかっています。科学的知見に即した行動を取るべきです。',
        kana: 'ちきゅうのみらいは、こんにちのわれわれのけつだんいかんにかかっています。かがくてきちけんにそくしたこうどうをとるべきです。',
        vietnamese: 'Tương lai Trái Đất phụ thuộc vào quyết định của chúng ta hôm nay. Cần hành động phù hợp với tri thức khoa học.'
      }
    ],
    culturalNote:
      'Nhật Bản là nơi ký kết Nghị định thư Kyoto (京都議定書 — きょうとぎていしょ, 1997) — thỏa thuận quốc tế đầu tiên ràng buộc pháp lý về giảm khí thải nhà kính. Nhật cam kết trung hòa carbon vào 2050. Trong ngoại giao môi trường, べからず là cách diễn đạt mệnh lệnh đạo đức mạnh nhất — mang âm hưởng cổ ngữ như lời thề thiêng liêng, không thể vi phạm.'
  },

  // ── 14. Cultural Identity (文化的アイデンティティ) ──────────
  {
    id: 'n1-conv-14',
    title: 'Bản sắc văn hóa',
    titleJp: '文化的アイデンティティ',
    level: 'N1',
    situation: 'Nhà nhân học và nhà văn thảo luận về xung đột giữa truyền thống và hiện đại trong bản sắc Nhật Bản',
    patterns: [
      {
        japanese: '〜からこそ',
        kana: '〜からこそ',
        vietnamese: 'Chính vì ~ nên mới ~.',
        memoryTip:
          'Nhớ: から (vì) + こそ (chính là) → nhấn mạnh gấp đôi nguyên nhân. Không chỉ "vì A nên B" mà "CHÍNH VÌ A nên B mới xảy ra". Dùng khi muốn đặt đèn pha chiếu vào lý do.'
      },
      {
        japanese: '〜つつある',
        kana: '〜つつある',
        vietnamese: 'Đang dần ~, đang trong quá trình ~.',
        memoryTip:
          'Nhớ: つつ = "từng chút từng chút" + ある = "đang tồn tại" → quá trình đang diễn ra CHẬM RÃI nhưng CHẮC CHẮN. Như cát đồng hồ rơi — không dừng lại được. Dùng cho biến đổi lớn trong xã hội.'
      }
    ],
    dialogue: [
      {
        speaker: '人類学者',
        japanese: '日本の伝統文化は、グローバル化の波の中で変容しつつあります。しかし、それは必ずしも喪失ではありません。',
        kana: 'にほんのでんとうぶんかは、グローバルかのなみのなかでへんようしつつあります。しかし、それはかならずしもそうしつではありません。',
        vietnamese: 'Văn hóa truyền thống Nhật đang dần biến đổi trong làn sóng toàn cầu hóa. Tuy nhiên, điều đó không nhất thiết là mất mát.'
      },
      {
        speaker: '作家',
        japanese: '伝統を深く知るからこそ、現代との融合が可能になるのだと思います。根のない木は倒れますから。',
        kana: 'でんとうをふかくしるからこそ、げんだいとのゆうごうがかのうになるのだとおもいます。ねのないきはたおれますから。',
        vietnamese: 'Chính vì hiểu sâu truyền thống nên mới có thể hòa nhập với hiện đại. Vì cây không rễ sẽ đổ.'
      },
      {
        speaker: '人類学者',
        japanese: '若者の間で、伝統芸能への関心が薄れつつあるのは事実です。しかし、新しい形で再生しつつある面もあります。',
        kana: 'わかもののあいだで、でんとうげいのうへのかんしんがうすれつつあるのはじじつです。しかし、あたらしいかたちでさいせいしつつあるめんもあります。',
        vietnamese: 'Sự thật là quan tâm đến nghệ thuật truyền thống đang dần phai nhạt trong giới trẻ. Tuy nhiên, cũng có mặt đang tái sinh dưới hình thức mới.'
      },
      {
        speaker: '作家',
        japanese: '変化を恐れるからこそ、本質を見失う。融合の中にこそ、文化の生命力があるのではないでしょうか。',
        kana: 'へんかをおそれるからこそ、ほんしつをみうしなう。ゆうごうのなかにこそ、ぶんかのせいめいりょくがあるのではないでしょうか。',
        vietnamese: 'Chính vì sợ thay đổi nên mới đánh mất bản chất. Trong sự hòa nhập mới chứa đựng sức sống của văn hóa, phải không?'
      },
      {
        speaker: '人類学者',
        japanese: '和洋折衷という概念自体が、日本文化の柔軟性を物語っていますね。',
        kana: 'わようせっちゅうというがいねんじたいが、にほんぶんかのじゅうなんせいをものがたっていますね。',
        vietnamese: 'Bản thân khái niệm "hòa trộn Đông Tây" đã kể lên câu chuyện về sự linh hoạt của văn hóa Nhật rồi.'
      }
    ],
    culturalNote:
      '和洋折衷 (わようせっちゅう — hòa trộn Nhật-Tây) là triết lý văn hóa đặc trưng: Nhật Bản không loại bỏ cái cũ khi tiếp nhận cái mới, mà hòa trộn cả hai. Ví dụ: nhà kiểu Nhật có phòng washitsu (和室) truyền thống bên cạnh phòng kiểu Tây (洋室). Kimono tồn tại song song với thời trang phương Tây. Cấu trúc 〜つつある diễn đạt quá trình biến đổi đang diễn ra — phù hợp để nói về sự chuyển đổi văn hóa không có điểm kết thúc rõ ràng.'
  },

  // ── 15. Media Criticism (メディア批評) ─────────────────────
  {
    id: 'n1-conv-15',
    title: 'Phê bình truyền thông',
    titleJp: 'メディア批評',
    level: 'N1',
    situation: 'Giáo sư truyền thông và nhà báo kỳ cựu thảo luận về vai trò và trách nhiệm của truyền thông trong xã hội hiện đại',
    patterns: [
      {
        japanese: '〜であれ〜であれ',
        kana: '〜であれ〜であれ',
        vietnamese: 'Dù là ~ hay ~, bất kể ~ hay ~.',
        memoryTip:
          'Nhớ: であれ = "dù có là" (mệnh lệnh thể cổ của である) → liệt kê hai trường hợp đối lập rồi nói "cả hai đều như nhau". Như mở rộng bàn tay ôm hết — không loại trừ bất kỳ ai.'
      },
      {
        japanese: '〜まじき',
        kana: '〜まじき',
        vietnamese: 'Không nên ~, không xứng đáng ~ (chỉ trích mạnh).',
        memoryTip:
          'Nhớ: まじき = phủ định cổ ngữ của べき → "KHÔNG ĐÁNG LÀM, KHÔNG ĐƯỢC LÀM". Nặng hơn べきではない — mang sắc thái phán xét đạo đức nghiêm khắc. "Đó là hành vi BẤT XỨNG!"'
      }
    ],
    dialogue: [
      {
        speaker: '教授',
        japanese: 'テレビであれネットであれ、報道の公平性は守られるべきです。偏向報道は許されまじき行為です。',
        kana: 'テレビであれネットであれ、ほうどうのこうへいせいはまもられるべきです。へんこうほうどうはゆるされまじきこういです。',
        vietnamese: 'Dù là truyền hình hay Internet, tính công bằng của báo chí phải được bảo vệ. Đưa tin thiên lệch là hành vi không thể tha thứ.'
      },
      {
        speaker: '記者',
        japanese: 'しかし、完全な客観性というものは存在し得るのでしょうか。ファクトチェックを徹底するにしても、限界があります。',
        kana: 'しかし、かんぜんなきゃっかんせいというものはそんざいしうるのでしょうか。ファクトチェックをてっていするにしても、げんかいがあります。',
        vietnamese: 'Tuy nhiên, liệu tính khách quan hoàn toàn có thể tồn tại không? Dù kiểm chứng sự thật triệt để, vẫn có giới hạn.'
      },
      {
        speaker: '教授',
        japanese: 'だからこそ、報道機関であれ個人メディアであれ、透明性の確保が不可欠なのです。',
        kana: 'だからこそ、ほうどうきかんであれこじんメディアであれ、とうめいせいのかくほがふかけつなのです。',
        vietnamese: 'Chính vì thế, dù là cơ quan báo chí hay truyền thông cá nhân, việc đảm bảo tính minh bạch là không thể thiếu.'
      },
      {
        speaker: '記者',
        japanese: 'ジャーナリストにあるまじき行為とは何か、常に自問自答しています。事実に即した報道を心がけるしかありません。',
        kana: 'ジャーナリストにあるまじきこういとはなにか、つねにじもんじとうしています。じじつにそくしたほうどうをこころがけるしかありません。',
        vietnamese: 'Hành vi nào là bất xứng với nhà báo — tôi luôn tự hỏi mình điều đó. Chỉ có thể nỗ lực đưa tin bám sát sự thật.'
      }
    ],
    culturalNote:
      'Truyền thông Nhật Bản có hệ thống "câu lạc bộ báo chí" (記者クラブ — きしゃクラブ) độc đáo: chỉ phóng viên thuộc các tổ chức lớn mới được vào họp báo chính phủ, bị phê phán là thiếu minh bạch. Khái niệm 報道の自由 (ほうどうのじゆう — tự do báo chí) luôn là chủ đề nóng. まじき là cổ ngữ mạnh — khi dùng trong phê bình truyền thông, nó mang sức nặng đạo đức như bản án phán xét hành vi nghề nghiệp.'
  },

  // ── 16. Historical Analysis (歴史分析) ─────────────────────
  {
    id: 'n1-conv-16',
    title: 'Phân tích lịch sử',
    titleJp: '歴史分析',
    level: 'N1',
    situation: 'Hai nhà sử học thảo luận về quá trình cải cách và biến chuyển xã hội Nhật Bản trong hội thảo học thuật',
    patterns: [
      {
        japanese: '〜を経て',
        kana: '〜をへて',
        vietnamese: 'Trải qua ~, qua quá trình ~.',
        memoryTip:
          'Nhớ: へて = "đi qua" → hành trình DÀI xuyên qua nhiều giai đoạn. Như con sông chảy qua nhiều vùng đất trước khi ra biển. Lịch sử = dòng chảy qua nhiều sự kiện.'
      },
      {
        japanese: '〜たるもの',
        kana: '〜たるもの',
        vietnamese: 'Với tư cách là ~, phàm đã là ~.',
        memoryTip:
          'Nhớ: たるもの = "cái đáng là, kẻ mang danh" → đặt ra tiêu chuẩn cho ai đó dựa trên danh phận. "Phàm đã là samurai thì phải..." — câu trúc định nghĩa bổn phận theo vai trò.'
      }
    ],
    dialogue: [
      {
        speaker: '史学者A',
        japanese: '明治維新を経て、日本は封建社会から近代国家へと劇的な変貌を遂げました。その変遷は世界史に類を見ません。',
        kana: 'めいじいしんをへて、にほんはほうけんしゃかいからきんだいこっかへとげきてきなへんぼうをとげました。そのへんせんはせかいしにるいをみません。',
        vietnamese: 'Trải qua Duy Tân Minh Trị, Nhật Bản đã biến đổi kịch tính từ xã hội phong kiến thành quốc gia hiện đại. Sự biến chuyển đó không có tiền lệ trong lịch sử thế giới.'
      },
      {
        speaker: '史学者B',
        japanese: '議員たるもの、歴史の教訓を踏まえた上で改革を推進すべきだったのですが、実際にはそうならなかった。',
        kana: 'ぎいんたるもの、れきしのきょうくんをふまえたうえでかいかくをすいしんすべきだったのですが、じっさいにはそうならなかった。',
        vietnamese: 'Phàm đã là nghị viên, lẽ ra phải thúc đẩy cải cách dựa trên bài học lịch sử, nhưng thực tế không diễn ra như vậy.'
      },
      {
        speaker: '史学者A',
        japanese: '幾多の試練を経て獲得した民主主義を、我々は軽視すべきではありません。',
        kana: 'いくたのしれんをへてかくとくしたみんしゅしゅぎを、われわれはけいしすべきではありません。',
        vietnamese: 'Chúng ta không nên coi nhẹ nền dân chủ đã đạt được sau bao nhiêu thử thách.'
      },
      {
        speaker: '史学者B',
        japanese: '歴史家たるもの、過去を美化することなく、事実に即して冷静に分析する責務があります。',
        kana: 'れきしかたるもの、かこをびかすることなく、じじつにそくしてれいせいにぶんせきするせきむがあります。',
        vietnamese: 'Phàm đã là nhà sử học, có trách nhiệm phân tích bình tĩnh, bám sát sự thật, không tô đẹp quá khứ.'
      }
    ],
    culturalNote:
      'Lịch sử Nhật Bản chia thành các thời kỳ theo niên hiệu (年号 — ねんごう): Meiji (明治, 1868-1912), Taisho (大正), Showa (昭和), Heisei (平成), Reiwa (令和). Duy Tân Minh Trị (明治維新) là cuộc cải cách toàn diện — bãi bỏ chế độ phong kiến, hiện đại hóa quân sự và giáo dục chỉ trong vài thập niên. Cấu trúc 〜たるもの xuất phát từ đạo đức Nho giáo và tinh thần võ sĩ đạo (武士道) — định nghĩa bổn phận dựa trên danh phận xã hội.'
  },

  // ── 17. Diplomatic Negotiations (外交交渉) ─────────────────
  {
    id: 'n1-conv-17',
    title: 'Đàm phán ngoại giao',
    titleJp: '外交交渉',
    level: 'N1',
    situation: 'Đại sứ hai nước đàm phán về điều ước quốc tế và hợp tác song phương trong cuộc họp ngoại giao chính thức',
    patterns: [
      {
        japanese: '〜の如く',
        kana: '〜のごとく',
        vietnamese: 'Như ~, giống như ~ (văn ngôn).',
        memoryTip:
          'Nhớ: ごとく = phiên bản cổ ngữ cực trang trọng của ように. Nghe như đọc chiếu chỉ: "như mặt trời chiếu sáng, hiệp ước này sẽ..." — chỉ dùng trong văn bản ngoại giao, diễn văn quốc gia, văn học cổ.'
      },
      {
        japanese: '〜に鑑みて',
        kana: '〜にかんがみて',
        vietnamese: 'Xét đến ~, chiếu theo ~.',
        memoryTip:
          'Nhớ: かんがみて = "soi gương (鑑)" → lấy quá khứ/tình hình làm GƯƠNG SOI để đưa ra quyết định. Gương phản chiếu bài học — nhìn vào gương lịch sử trước khi hành động.'
      }
    ],
    dialogue: [
      {
        speaker: '日本大使',
        japanese: '両国の歴史的な友好関係に鑑みて、新たな条約の締結を提案させていただきたいと存じます。',
        kana: 'りょうこくのれきしてきなゆうこうかんけいにかんがみて、あらたなじょうやくのていけつをていあんさせていただきたいとぞんじます。',
        vietnamese: 'Xét đến mối quan hệ hữu nghị lịch sử giữa hai nước, tôi muốn xin phép đề xuất ký kết hiệp ước mới.'
      },
      {
        speaker: '相手国大使',
        japanese: 'ありがたきお言葉です。両国が水の如く自然に協力し合える関係を築きたいと願っております。',
        kana: 'ありがたきおことばです。りょうこくがみずのごとくしぜんにきょうりょくしあえるかんけいをきずきたいとねがっております。',
        vietnamese: 'Lời nói quý báu. Chúng tôi mong muốn xây dựng mối quan hệ mà hai nước hợp tác tự nhiên như nước chảy.'
      },
      {
        speaker: '日本大使',
        japanese: '国際情勢の変化に鑑み、安全保障面での合意も協議に含めるべきかと存じます。',
        kana: 'こくさいじょうせいのへんかにかんがみ、あんぜんほしょうめんでのごういもきょうぎにふくめるべきかとぞんじます。',
        vietnamese: 'Xét đến sự thay đổi tình hình quốc tế, tôi cho rằng nên đưa cả thỏa thuận an ninh vào nội dung hiệp nghị.'
      },
      {
        speaker: '相手国大使',
        japanese: '信頼の如く固く、柔軟性の如くしなやかな協定を目指しましょう。双方の利益に適う合意を期待しております。',
        kana: 'しんらいのごとくかたく、じゅうなんせいのごとくしなやかなきょうていをめざしましょう。そうほうのりえきにかなうごういをきたいしております。',
        vietnamese: 'Hãy hướng đến hiệp định vững chắc như lòng tin, uyển chuyển như sự linh hoạt. Chúng tôi kỳ vọng thỏa thuận phù hợp lợi ích cả hai bên.'
      }
    ],
    culturalNote:
      'Ngoại giao Nhật Bản thể hiện "sức mạnh mềm" (ソフトパワー) qua ngôn ngữ tinh tế. Cấu trúc 〜の如く (ごとく) xuất phát từ Hán văn cổ, tạo ấn tượng trang nghiêm trong văn kiện ngoại giao. Nhật dùng 鑑みる khi viện dẫn tiền lệ lịch sử — gợi hình ảnh chiếc gương đồng (銅鏡) thời cổ đại, biểu tượng của sự sáng suốt. Trong đàm phán, người Nhật ưu tiên 根回し (ねまわし — vận động hậu trường) trước khi họp chính thức.'
  },

  // ── 18. Corporate Governance (企業統治) ─────────────────────
  {
    id: 'n1-conv-18',
    title: 'Quản trị doanh nghiệp',
    titleJp: '企業統治',
    level: 'N1',
    situation: 'Cổ đông và ban giám đốc thảo luận về minh bạch quản trị tại đại hội cổ đông thường niên',
    patterns: [
      {
        japanese: '〜の至りです',
        kana: '〜のいたりです',
        vietnamese: 'Vô cùng ~ (cảm xúc ở mức cao nhất).',
        memoryTip:
          'Nhớ: いたり = "cực điểm, đỉnh cao" → cảm xúc đã leo đến ĐỈNH NÚI, không thể cao hơn. 光栄の至り = vinh dự tột cùng. Cách diễn đạt khiêm nhường nhưng chứa cảm xúc mãnh liệt.'
      },
      {
        japanese: '〜に則って',
        kana: '〜にのっとって',
        vietnamese: 'Tuân theo ~, theo đúng quy tắc ~.',
        memoryTip:
          'Nhớ: のっとって = "noi theo, tuân thủ" → đặt chân theo đúng vết chân của quy tắc/pháp luật. Khác với に基づいて (dựa trên nền tảng) — のっとって nhấn mạnh TUÂN THỦ NGHIÊM NGẶT từng điều khoản.'
      }
    ],
    dialogue: [
      {
        speaker: '株主',
        japanese: '取締役会の皆様、本日の総会にお招きいただき、光栄の至りでございます。経営の透明性についてお伺いしたく存じます。',
        kana: 'とりしまりやくかいのみなさま、ほんじつのそうかいにおまねきいただき、こうえいのいたりでございます。けいえいのとうめいせいについておうかがいしたくぞんじます。',
        vietnamese: 'Thưa quý ban giám đốc, được mời tham dự đại hội hôm nay là vinh dự tột cùng. Tôi muốn được hỏi về tính minh bạch trong quản trị.'
      },
      {
        speaker: '取締役',
        japanese: 'ご質問ありがとうございます。コーポレートガバナンス・コードに則って、情報開示を徹底してまいります。',
        kana: 'ごしつもんありがとうございます。コーポレートガバナンス・コードにのっとって、じょうほうかいじをてっていしてまいります。',
        vietnamese: 'Cảm ơn câu hỏi. Chúng tôi sẽ triệt để công khai thông tin tuân theo Bộ quy tắc quản trị doanh nghiệp.'
      },
      {
        speaker: '株主',
        japanese: '株主の利益を最優先に、法令に則った経営をお願いいたします。信頼なくして、企業の持続的成長はあり得ません。',
        kana: 'かぶぬしのりえきをさいゆうせんに、ほうれいにのっとったけいえいをおねがいいたします。しんらいなくして、きぎょうのじぞくてきせいちょうはありえません。',
        vietnamese: 'Xin hãy ưu tiên lợi ích cổ đông, quản trị tuân thủ pháp luật. Không có niềm tin, doanh nghiệp không thể tăng trưởng bền vững.'
      },
      {
        speaker: '取締役',
        japanese: '重く受け止めております。取締役たるもの、株主の皆様への説明責任を果たすのは当然の義務でございます。',
        kana: 'おもくうけとめております。とりしまりやくたるもの、かぶぬしのみなさまへのせつめいせきにんをはたすのはとうぜんのぎむでございます。',
        vietnamese: 'Chúng tôi tiếp nhận nghiêm túc. Phàm đã là thành viên ban giám đốc, thực hiện trách nhiệm giải trình với cổ đông là nghĩa vụ đương nhiên.'
      }
    ],
    culturalNote:
      'Quản trị doanh nghiệp Nhật (コーポレートガバナンス) đã thay đổi lớn sau bê bối kế toán của Olympus (2011) và Toshiba (2015). Nhật ban hành Bộ quy tắc quản trị (コーポレートガバナンス・コード) năm 2015, yêu cầu giám đốc độc lập (社外取締役). Đại hội cổ đông (株主総会 — かぶぬしそうかい) ở Nhật thường diễn ra rất hình thức — nhưng gần đây cổ đông hoạt động tích cực hơn (アクティビスト株主), đặt câu hỏi sắc bén về quản trị.'
  },

  // ── 19. Educational Reform (教育改革) ──────────────────────
  {
    id: 'n1-conv-19',
    title: 'Cải cách giáo dục',
    titleJp: '教育改革',
    level: 'N1',
    situation: 'Chuyên gia giáo dục và hiệu trưởng thảo luận về hệ thống thi cử và tỷ lệ thi đỗ đại học tại diễn đàn giáo dục',
    patterns: [
      {
        japanese: '〜ないまでも',
        kana: '〜ないまでも',
        vietnamese: 'Dù không đến mức ~ thì ít nhất cũng ~.',
        memoryTip:
          'Nhớ: ないまでも = "không đến mức đó" + も (cũng) → đặt kỳ vọng ở mức THẤP HƠN nhưng vẫn yêu cầu TỐI THIỂU. "Dù không thể bay lên trời thì ít nhất cũng phải đứng trên đất" — đàm phán nhượng bộ.'
      },
      {
        japanese: '〜に至っては',
        kana: '〜にいたっては',
        vietnamese: 'Đến mức ~, nói đến ~ thì (tệ hơn).',
        memoryTip:
          'Nhớ: にいたっては = "đến tận chỗ đó" → di chuyển đến TRƯỜNG HỢP CỰC ĐOAN nhất để minh họa. Thường dùng cho ví dụ tiêu cực: "Đến thành phố X thì còn tệ hơn nữa..."'
      }
    ],
    dialogue: [
      {
        speaker: '教育専門家',
        japanese: '教育改革は急務です。全面的な見直しとまではいかないまでも、進学率の格差是正は最低限必要です。',
        kana: 'きょういくかいかくはきゅうむです。ぜんめんてきなみなおしとまではいかないまでも、しんがくりつのかくさぜせいはさいていげんひつようです。',
        vietnamese: 'Cải cách giáo dục là việc cấp bách. Dù không đến mức rà soát toàn diện, ít nhất cũng cần điều chỉnh chênh lệch tỷ lệ thi đỗ đại học.'
      },
      {
        speaker: '校長',
        japanese: '都市部に至っては塾通いが当然視される一方、地方では教育資源が著しく不足しています。',
        kana: 'としぶにいたってはじゅくがよいがとうぜんしされるいっぽう、ちほうではきょういくしげんがいちじるしくふそくしています。',
        vietnamese: 'Nói đến khu vực thành thị, việc đi học thêm được coi là đương nhiên, trong khi đó ở nông thôn, nguồn lực giáo dục thiếu trầm trọng.'
      },
      {
        speaker: '教育専門家',
        japanese: '受験戦争を完全になくすことはできないまでも、多様な評価基準を導入すべきです。',
        kana: 'じゅけんせんそうをかんぜんになくすことはできないまでも、たようなひょうかきじゅんをどうにゅうすべきです。',
        vietnamese: 'Dù không thể hoàn toàn loại bỏ cuộc chiến thi cử, ít nhất cũng nên đưa vào tiêu chuẩn đánh giá đa dạng.'
      },
      {
        speaker: '校長',
        japanese: '不登校の問題に至っては、もはや個人の問題ではなく、社会構造の問題として捉えるべきです。',
        kana: 'ふとうこうのもんだいにいたっては、もはやこじんのもんだいではなく、しゃかいこうぞうのもんだいとしてとらえるべきです。',
        vietnamese: 'Nói đến vấn đề bỏ học, đó không còn là vấn đề cá nhân mà cần nhìn nhận như vấn đề cơ cấu xã hội.'
      }
    ],
    culturalNote:
      'Hệ thống giáo dục Nhật nổi tiếng với "chiến tranh thi cử" (受験戦争 — じゅけんせんそう) khốc liệt. Học sinh học thêm ở 塾 (じゅく — trường luyện thi) từ tiểu học. 不登校 (ふとうこう — bỏ học/không đến trường) là vấn đề xã hội nghiêm trọng — khoảng 300,000 học sinh Nhật không đến trường mỗi năm. Cải cách giáo dục (教育改革) luôn là chủ đề nóng, với tranh cãi giữa "giáo dục thoải mái" (ゆとり教育) và giáo dục chuyên sâu truyền thống.'
  },

  // ── 20. Technology Ethics (技術倫理) ────────────────────────
  {
    id: 'n1-conv-20',
    title: 'Đạo đức công nghệ',
    titleJp: '技術倫理',
    level: 'N1',
    situation: 'Kỹ sư AI và nhà triết học thảo luận về ranh giới đạo đức trong phát triển trí tuệ nhân tạo và quyền riêng tư',
    patterns: [
      {
        japanese: '〜んがため（に）',
        kana: '〜んがため（に）',
        vietnamese: 'Để mà ~, vì muốn ~ (mục đích mạnh, cổ ngữ).',
        memoryTip:
          'Nhớ: ん = む (ý chí cổ) + がため = "vì mục đích" → quyết tâm mãnh liệt PHẢI ĐẠT ĐƯỢC mục tiêu. Nghe như hiệp sĩ thề: "Vì bảo vệ thế giới, ta sẽ..." — chỉ dùng trong văn viết trang trọng.'
      },
      {
        japanese: '〜もさることながら',
        kana: '〜もさることながら',
        vietnamese: 'Không chỉ ~ mà còn ~, ~ đã đành nhưng ~ cũng.',
        memoryTip:
          'Nhớ: さることながら = "đó đã là điều đương nhiên" → thừa nhận A quan trọng, nhưng lái sự chú ý sang B quan trọng HƠN. Như nói: "Vàng đã quý, nhưng kim cương còn quý hơn."'
      }
    ],
    dialogue: [
      {
        speaker: 'エンジニア',
        japanese: 'AI倫理の確立んがために、技術者と哲学者が協力する必要があります。',
        kana: 'エーアイりんりのかくりつんがために、ぎじゅつしゃとてつがくしゃがきょうりょくするひつようがあります。',
        vietnamese: 'Để thiết lập đạo đức AI, kỹ sư và triết gia cần hợp tác.'
      },
      {
        speaker: '哲学者',
        japanese: '技術の進歩もさることながら、プライバシーの保護こそが最も議論すべき課題です。',
        kana: 'ぎじゅつのしんぽもさることながら、プライバシーのほごこそがもっともぎろんすべきかだいです。',
        vietnamese: 'Tiến bộ công nghệ đã đành quan trọng, nhưng bảo vệ quyền riêng tư mới là vấn đề cần thảo luận nhất.'
      },
      {
        speaker: 'エンジニア',
        japanese: '監視技術の悪用を防がんがために、法的規制の整備が急がれます。しかし、技術の発展を阻害してはなりません。',
        kana: 'かんしぎじゅつのあくようをふせがんがために、ほうてききせいのせいびがいそがれます。しかし、ぎじゅつのはってんをそがいしてはなりません。',
        vietnamese: 'Để ngăn chặn lạm dụng công nghệ giám sát, cần khẩn trương hoàn thiện quy định pháp lý. Tuy nhiên, không được cản trở phát triển công nghệ.'
      },
      {
        speaker: '哲学者',
        japanese: '効率性もさることながら、人間の尊厳を守ることが技術開発の大前提であるべきです。便利さの代償に自由を失ってはなりません。',
        kana: 'こうりつせいもさることながら、にんげんのそんげんをまもることがぎじゅつかいはつのだいぜんていであるべきです。べんりさのだいしょうにじゆうをうしなってはなりません。',
        vietnamese: 'Tính hiệu quả đã đành, nhưng bảo vệ phẩm giá con người phải là đại tiền đề của phát triển công nghệ. Không được đánh mất tự do làm cái giá cho sự tiện lợi.'
      }
    ],
    culturalNote:
      'Nhật Bản ban hành "Nguyên tắc AI lấy con người làm trung tâm" (人間中心のAI社会原則) năm 2019, nhấn mạnh sự hòa hợp giữa AI và con người (共生 — きょうせい). Xã hội Nhật vừa ủng hộ đổi mới công nghệ vừa lo ngại quyền riêng tư — phản ánh qua luật bảo vệ thông tin cá nhân (個人情報保護法). Cấu trúc 〜んがため là cổ ngữ cực trang trọng — khi kỹ sư dùng trong bối cảnh đạo đức, nó nâng tầm cuộc thảo luận kỹ thuật thành cam kết đạo đức.'
  },

  // ── 21. Aging Society (高齢化社会) ──────────────────────────
  {
    id: 'n1-conv-21',
    title: 'Xã hội già hóa',
    titleJp: '高齢化社会',
    level: 'N1',
    situation: 'Chuyên gia phúc lợi xã hội và chính trị gia thảo luận về hệ thống chăm sóc người cao tuổi và bảo hiểm xã hội',
    patterns: [
      {
        japanese: '〜なしには〜ない',
        kana: '〜なしには〜ない',
        vietnamese: 'Nếu không có ~ thì không thể ~.',
        memoryTip:
          'Nhớ: なしには = "không có" + ない = "không thể" → hai lần "không" tạo mệnh đề điều kiện tuyệt đối. Như nói: "Không có oxy thì không thể sống" — điều kiện tiên quyết bất khả thương lượng.'
      },
      {
        japanese: '〜ともあろう（ものが）',
        kana: '〜ともあろう（ものが）',
        vietnamese: 'Với tư cách/vị trí ~ mà lại ~ (chỉ trích/bất ngờ).',
        memoryTip:
          'Nhớ: ともあろう = "cùng là, đã ở vị trí đó" → ai đó ĐÃ Ở VỊ TRÍ CAO mà lại làm điều bất xứng. Mang sắc thái thất vọng sâu sắc: "Ông ấy là bộ trưởng mà lại thế ư?"'
      }
    ],
    dialogue: [
      {
        speaker: '福祉専門家',
        japanese: '介護人材の確保なしには、高齢化社会を支えることはできません。年金制度の持続性も危ぶまれています。',
        kana: 'かいごじんざいのかくほなしには、こうれいかしゃかいをささえることはできません。ねんきんせいどのじぞくせいもあやぶまれています。',
        vietnamese: 'Nếu không đảm bảo nhân lực chăm sóc, không thể duy trì xã hội già hóa. Tính bền vững của hệ thống lương hưu cũng đang bị lo ngại.'
      },
      {
        speaker: '政治家',
        japanese: '社会保障の充実なしには、国民の安心は得られません。しかし、財源の問題が立ちはだかっています。',
        kana: 'しゃかいほしょうのじゅうじつなしには、こくみんのあんしんはえられません。しかし、ざいげんのもんだいがたちはだかっています。',
        vietnamese: 'Nếu không hoàn thiện an sinh xã hội, không thể đạt được sự yên tâm cho quốc dân. Tuy nhiên, vấn đề nguồn tài chính đang cản đường.'
      },
      {
        speaker: '福祉専門家',
        japanese: '先進国ともあろう日本が、介護離職という問題を放置しているのは遺憾と言わざるを得ません。',
        kana: 'せんしんこくともあろうにほんが、かいごりしょくというもんだいをほうちしているのはいかんといわざるをえません。',
        vietnamese: 'Nhật Bản với tư cách nước tiên tiến mà lại để mặc vấn đề nghỉ việc vì chăm sóc người già — phải nói là đáng tiếc.'
      },
      {
        speaker: '政治家',
        japanese: '世代間の支え合いなしには、この国の未来はありません。政治家ともあろうものが、この問題から目を背けてはならないのです。',
        kana: 'せだいかんのささえあいなしには、このくにのみらいはありません。せいじかともあろうものが、このもんだいからめをそむけてはならないのです。',
        vietnamese: 'Nếu không có sự hỗ trợ lẫn nhau giữa các thế hệ, đất nước này không có tương lai. Chính trị gia mà lại ngoảnh mặt trước vấn đề này thì không thể chấp nhận.'
      }
    ],
    culturalNote:
      'Nhật Bản có tỷ lệ người cao tuổi (65+) cao nhất thế giới — hơn 29% dân số. Hệ thống bảo hiểm chăm sóc dài hạn (介護保険制度 — かいごほけんせいど) ra đời năm 2000. 介護離職 (かいごりしょく — nghỉ việc để chăm sóc người thân) ảnh hưởng khoảng 100,000 người/năm. Khái niệm 共助 (きょうじょ — hỗ trợ lẫn nhau) là trụ cột của an sinh xã hội Nhật, phản ánh tinh thần cộng đồng truyền thống.'
  },

  // ── 22. Gender Equality (男女平等) ──────────────────────────
  {
    id: 'n1-conv-22',
    title: 'Bình đẳng giới',
    titleJp: '男女平等',
    level: 'N1',
    situation: 'Nhà nghiên cứu giới và nữ doanh nhân thảo luận về bình đẳng giới tại diễn đàn phụ nữ',
    patterns: [
      {
        japanese: '〜とはいえ',
        kana: '〜とはいえ',
        vietnamese: 'Tuy nói vậy nhưng ~, mặc dù ~ nhưng.',
        memoryTip:
          'Nhớ: とはいえ = "nói thì nói vậy" → THỪA NHẬN một sự thật, rồi LÁI sang thực tế ngược lại. Như phép nhượng bộ trong hùng biện: gật đầu trước khi lắc đầu.'
      },
      {
        japanese: '〜からといって',
        kana: '〜からといって',
        vietnamese: 'Không phải vì ~ mà ~, dù ~ đi nữa.',
        memoryTip:
          'Nhớ: からといって = "nói rằng vì lý do đó" → phản bác một suy luận sai. "Vì A nên B" ư? KHÔNG ĐÚNG! Công cụ bác bỏ logic nguỵ biện — rất mạnh trong tranh luận về bình đẳng.'
      }
    ],
    dialogue: [
      {
        speaker: '研究者',
        japanese: '男女共同参画社会基本法が制定されたとはいえ、実質的な男女平等の実現にはまだ程遠い現状です。',
        kana: 'だんじょきょうどうさんかくしゃかいきほんほうがせいていされたとはいえ、じっしつてきなだんじょびょうどうのじつげんにはまだほどとおいげんじょうです。',
        vietnamese: 'Tuy nói là đã ban hành Luật Cơ bản về Xã hội Bình đẳng Nam nữ, nhưng thực tế vẫn còn rất xa mới đạt được bình đẳng giới thực chất.'
      },
      {
        speaker: '女性起業家',
        japanese: '女性だからといって、経営能力が劣るという偏見は、もはや通用しない時代です。',
        kana: 'じょせいだからといって、けいえいのうりょくがおとるというへんけんは、もはやつうようしないじだいです。',
        vietnamese: 'Không phải vì là phụ nữ mà năng lực quản lý kém hơn — thời đại mà định kiến đó còn tồn tại đã qua rồi.'
      },
      {
        speaker: '研究者',
        japanese: '制度が整ったとはいえ、「女性史」の観点からみれば、意識の変革こそが最大の課題です。',
        kana: 'せいどがととのったとはいえ、「じょせいし」のかんてんからみれば、いしきのへんかくこそがさいだいのかだいです。',
        vietnamese: 'Tuy nói là thể chế đã hoàn thiện, nhưng nhìn từ góc độ "lịch sử phụ nữ", thay đổi nhận thức mới là thách thức lớn nhất.'
      },
      {
        speaker: '女性起業家',
        japanese: '数が少ないからといって、声を上げることを諦めてはなりません。一人の行動が社会を変え得るのです。',
        kana: 'かずがすくないからといって、こえをあげることをあきらめてはなりません。ひとりのこうどうがしゃかいをかええうるのです。',
        vietnamese: 'Không phải vì số lượng ít mà từ bỏ việc lên tiếng. Hành động của một người có thể thay đổi xã hội.'
      }
    ],
    culturalNote:
      'Nhật Bản xếp hạng thấp về bình đẳng giới (Gender Gap Index) trong số các nước phát triển. 男女共同参画社会 (だんじょきょうどうさんかくしゃかい — xã hội tham gia bình đẳng nam nữ) là mục tiêu quốc gia nhưng thực tế còn nhiều rào cản: "bức tường thủy tinh" (ガラスの天井), kỳ vọng phụ nữ nghỉ việc sau khi sinh (寿退社 — ことぶきたいしゃ). Gần đây, phong trào #MeToo và 女性活躍推進法 (luật thúc đẩy phụ nữ hoạt động tích cực) đang tạo thay đổi dần dần.'
  },

  // ── 23. Disaster Response (災害対応) ────────────────────────
  {
    id: 'n1-conv-23',
    title: 'Ứng phó thiên tai',
    titleJp: '災害対応',
    level: 'N1',
    situation: 'Chuyên gia phòng chống thiên tai và thị trưởng thảo luận về bài học từ trận đại địa chấn và kế hoạch phục hồi',
    patterns: [
      {
        japanese: '〜極まりない',
        kana: '〜きわまりない',
        vietnamese: 'Vô cùng ~, ~ đến cực điểm.',
        memoryTip:
          'Nhớ: きわまりない = "không có giới hạn cực" → cảm xúc/tình trạng đã vượt qua MỌI GIỚI HẠN. Dùng cho cả tích cực (光栄極まりない) lẫn tiêu cực (危険極まりない). Mạnh hơn とても nhiều lần.'
      },
      {
        japanese: '〜を皮切りに',
        kana: '〜をかわきりに',
        vietnamese: 'Bắt đầu từ ~, lấy ~ làm khởi điểm.',
        memoryTip:
          'Nhớ: かわきり = "cắt lớp da đầu tiên" (từ kịch Kabuki — diễn viên đầu tiên mở màn) → sự kiện ĐẦU TIÊN khai mào chuỗi sự kiện tiếp theo. Hiệu ứng domino bắt đầu từ quân cờ đầu tiên.'
      }
    ],
    dialogue: [
      {
        speaker: '防災専門家',
        japanese: '東日本大震災を皮切りに、日本の防災意識は大きく変わりました。しかし、備えはまだ不十分極まりない状態です。',
        kana: 'ひがしにほんだいしんさいをかわきりに、にほんのぼうさいいしきはおおきくかわりました。しかし、そなえはまだふじゅうぶんきわまりないじょうたいです。',
        vietnamese: 'Bắt đầu từ thảm họa Đại địa chấn Đông Nhật Bản, ý thức phòng chống thiên tai của Nhật đã thay đổi lớn. Tuy nhiên, sự chuẩn bị vẫn ở trạng thái thiếu sót vô cùng.'
      },
      {
        speaker: '市長',
        japanese: '避難計画の見直しを皮切りに、地域全体の復旧体制を再構築しなければなりません。',
        kana: 'ひなんけいかくのみなおしをかわきりに、ちいきぜんたいのふっきゅうたいせいをさいこうちくしなければなりません。',
        vietnamese: 'Lấy việc rà soát kế hoạch sơ tán làm khởi điểm, cần tái thiết lập hệ thống phục hồi cho toàn khu vực.'
      },
      {
        speaker: '防災専門家',
        japanese: '住民の命を預かる立場として、準備不足は無責任極まりないと言わざるを得ません。',
        kana: 'じゅうみんのいのちをあずかるたちばとして、じゅんびぶそくはむせきにんきわまりないといわざるをえません。',
        vietnamese: 'Với tư cách là người chịu trách nhiệm sinh mạng cư dân, phải thừa nhận rằng thiếu chuẩn bị là vô trách nhiệm đến cực điểm.'
      },
      {
        speaker: '市長',
        japanese: 'おっしゃる通りです。この教訓を皮切りに、「自助・共助・公助」の精神で、災害に強い街づくりを進めてまいります。',
        kana: 'おっしゃるとおりです。このきょうくんをかわきりに、「じじょ・きょうじょ・こうじょ」のせいしんで、さいがいにつよいまちづくりをすすめてまいります。',
        vietnamese: 'Đúng như ngài nói. Lấy bài học này làm khởi điểm, với tinh thần "tự cứu - cộng đồng cứu - chính quyền cứu", chúng tôi sẽ thúc đẩy xây dựng thành phố chống chịu thiên tai.'
      }
    ],
    culturalNote:
      'Nhật Bản là cường quốc phòng chống thiên tai với triết lý 自助・共助・公助 (じじょ・きょうじょ・こうじょ — tự cứu mình, cộng đồng giúp nhau, chính quyền hỗ trợ). Đại địa chấn Đông Nhật Bản 2011 (東日本大震災) với sóng thần và sự cố hạt nhân Fukushima là thảm họa kép chưa từng có. Khái niệm 復興 (ふっこう — phục hưng) không chỉ là tái thiết vật chất mà còn là hồi phục tinh thần cộng đồng — thể hiện qua câu khẩu hiệu 頑張ろう日本 (がんばろうにほん — Nhật Bản cố lên).'
  },

  // ── 24. Immigration Policy (移民政策) ──────────────────────
  {
    id: 'n1-conv-24',
    title: 'Chính sách nhập cư',
    titleJp: '移民政策',
    level: 'N1',
    situation: 'Nhà xã hội học và quan chức chính phủ thảo luận về chính sách đa văn hóa và tiếp nhận lao động nước ngoài',
    patterns: [
      {
        japanese: '〜にせよ〜にせよ',
        kana: '〜にせよ〜にせよ',
        vietnamese: 'Dù ~ hay ~, bất kể ~ hay ~.',
        memoryTip:
          'Nhớ: にせよ = "dù cho là" (nhượng bộ) × 2 → liệt kê hai lựa chọn ĐỐI LẬP rồi nói "dù thế nào cũng..." Phiên bản trang trọng hơn của でも〜でも. Dùng trong chính sách và hùng biện.'
      },
      {
        japanese: '〜ならでは',
        kana: '〜ならでは',
        vietnamese: 'Chỉ có ~ mới có thể, độc nhất của ~.',
        memoryTip:
          'Nhớ: ならでは = "nếu không phải thì không" → thứ CHỈ TỒN TẠI ở X, không đâu khác có. "Hương vị ならでは của Kyoto" = chỉ Kyoto mới có. Ca ngợi sự ĐỘC NHẤT VÔ NHỊ.'
      }
    ],
    dialogue: [
      {
        speaker: '社会学者',
        japanese: '移民を受け入れるにせよ受け入れないにせよ、多文化共生の議論は避けて通れません。',
        kana: 'いみんをうけいれるにせようけいれないにせよ、たぶんかきょうせいのぎろんはさけてとおれません。',
        vietnamese: 'Dù tiếp nhận hay không tiếp nhận nhập cư, cuộc thảo luận về cộng sinh đa văn hóa không thể tránh khỏi.'
      },
      {
        speaker: '政府関係者',
        japanese: '労働力不足の解消にせよ文化的多様性の促進にせよ、段階的なアプローチが不可欠です。',
        kana: 'ろうどうりょくぶそくのかいしょうにせよぶんかてきたようせいのそくしんにせよ、だんかいてきなアプローチがふかけつです。',
        vietnamese: 'Dù là giải quyết thiếu hụt lao động hay thúc đẩy đa dạng văn hóa, cách tiếp cận từng bước là không thể thiếu.'
      },
      {
        speaker: '社会学者',
        japanese: '日本ならではの「おもてなし」の精神を、多文化共生の基盤にできるのではないでしょうか。',
        kana: 'にほんならではの「おもてなし」のせいしんを、たぶんかきょうせいのきばんにできるのではないでしょうか。',
        vietnamese: 'Tinh thần "omotenashi" đón tiếp khách — thứ chỉ Nhật Bản mới có — liệu có thể trở thành nền tảng cho cộng sinh đa văn hóa không?'
      },
      {
        speaker: '政府関係者',
        japanese: '技能実習制度の問題にせよ、在留資格の複雑さにせよ、制度設計そのものを見直す時期に来ています。',
        kana: 'ぎのうじっしゅうせいどのもんだいにせよ、ざいりゅうしかくのふくざつさにせよ、せいどせっけいそのものをみなおすじきにきています。',
        vietnamese: 'Dù là vấn đề chế độ thực tập kỹ năng hay sự phức tạp của tư cách cư trú, đã đến lúc rà soát lại chính thiết kế thể chế.'
      },
      {
        speaker: '社会学者',
        japanese: '異なる文化ならではの視点こそが、社会の活力を生み出す源泉に他なりません。',
        kana: 'ことなるぶんかならではのしてんこそが、しゃかいのかつりょくをうみだすげんせんにほかなりません。',
        vietnamese: 'Góc nhìn độc đáo chỉ có ở những nền văn hóa khác nhau chính là nguồn suối tạo ra sức sống cho xã hội, không gì khác.'
      }
    ],
    culturalNote:
      'Nhật Bản truyền thống là xã hội đồng nhất (単一民族社会) nhưng đang đối mặt với nhu cầu lao động nước ngoài do dân số giảm. Chế độ 技能実習 (ぎのうじっしゅう — thực tập kỹ năng) bị phê phán vì bóc lột lao động. Năm 2019, Nhật mở visa 特定技能 (とくていぎのう — kỹ năng đặc định) cho 14 ngành thiếu nhân lực. Khái niệm 多文化共生 (たぶんかきょうせい — cộng sinh đa văn hóa) đang thay thế dần mô hình đồng hóa truyền thống.'
  },

  // ── 25. Future of Humanity (人類の未来) ─────────────────────
  {
    id: 'n1-conv-25',
    title: 'Tương lai nhân loại',
    titleJp: '人類の未来',
    level: 'N1',
    situation: 'Nhà vật lý thiên văn và nhà tương lai học thảo luận về vận mệnh nhân loại, tiến bộ khoa học và phát triển bền vững',
    patterns: [
      {
        japanese: '〜たりとも〜ない',
        kana: '〜たりとも〜ない',
        vietnamese: 'Dù chỉ một ~ cũng không ~.',
        memoryTip:
          'Nhớ: たりとも = "dù chỉ là" → nhấn mạnh mức ĐỘ NHỎ NHẤT cũng không được phép. "Dù chỉ một giây cũng không lãng phí" — sự tuyệt đối hóa đến từng chi tiết nhỏ nhất.'
      },
      {
        japanese: '〜て然るべき',
        kana: '〜てしかるべき',
        vietnamese: 'Đáng lẽ phải ~, ~ là điều đương nhiên.',
        memoryTip:
          'Nhớ: しかるべき = "đáng như vậy, nên như vậy" → kết quả TẤT YẾU theo logic hoặc đạo đức. "Trời sáng thì mặt trời MẪU SỐ PHẢI mọc" — kỳ vọng về điều đương nhiên nhưng chưa xảy ra.'
      },
      {
        japanese: '〜て止まない',
        kana: '〜てやまない',
        vietnamese: 'Không ngừng ~, mãi mãi ~ (nguyện vọng tha thiết).',
        memoryTip:
          'Nhớ: やまない = "không dừng lại" (止まない) → lửa nguyện cầu cháy mãi trong lòng. Phiên bản Kanji của てやまない ở bài 6 — dùng khi hy vọng cho tương lai nhân loại.'
      }
    ],
    dialogue: [
      {
        speaker: '天体物理学者',
        japanese: '人類は科学技術の力で宇宙に進出すべきです。一日たりとも研究を怠ってはなりません。',
        kana: 'じんるいはかがくぎじゅつのちからでうちゅうにしんしゅつすべきです。いちにちたりともけんきゅうをおこたってはなりません。',
        vietnamese: 'Nhân loại nên tiến ra vũ trụ bằng sức mạnh khoa học kỹ thuật. Không được lơ là nghiên cứu dù chỉ một ngày.'
      },
      {
        speaker: '未来学者',
        japanese: '宇宙進出もさることながら、まずは地球の持続可能性を確保して然るべきではないでしょうか。',
        kana: 'うちゅうしんしゅつもさることながら、まずはちきゅうのじぞくかのうせいをかくほしてしかるべきではないでしょうか。',
        vietnamese: 'Tiến ra vũ trụ đã đành quan trọng, nhưng trước hết đáng lẽ phải đảm bảo tính bền vững của Trái Đất chẳng phải sao?'
      },
      {
        speaker: '天体物理学者',
        japanese: '人類が一瞬たりとも進歩を止めなかったからこそ、今日の文明があるのです。',
        kana: 'じんるいがいっしゅんたりともしんぽをとめなかったからこそ、こんにちのぶんめいがあるのです。',
        vietnamese: 'Chính vì nhân loại không dừng bước tiến dù chỉ một khoảnh khắc, nên mới có nền văn minh ngày nay.'
      },
      {
        speaker: '未来学者',
        japanese: '私は人類の叡智を信じて止みません。科学技術と倫理の調和こそが、持続可能な未来の鍵に他なりません。',
        kana: 'わたしはじんるいのえいちをしんじてやみません。かがくぎじゅつとりんりのちょうわこそが、じぞくかのうなみらいのかぎにほかなりません。',
        vietnamese: 'Tôi tin mãi không thôi vào trí tuệ nhân loại. Sự hài hòa giữa khoa học kỹ thuật và đạo đức chính là chìa khóa cho tương lai bền vững, không gì khác.'
      },
      {
        speaker: '天体物理学者',
        japanese: '次の世代が、我々の築いた基盤の上でさらなる飛躍を遂げることを、願って止みません。',
        kana: 'つぎのせだいが、われわれのきずいたきばんのうえでさらなるひやくをとげることを、ねがってやみません。',
        vietnamese: 'Tôi nguyện cầu không ngừng rằng thế hệ tiếp theo sẽ đạt được bước nhảy vọt hơn nữa trên nền tảng chúng ta xây dựng.'
      }
    ],
    culturalNote:
      'Nhật Bản đóng góp lớn cho khoa học với nhiều giải Nobel (日本人ノーベル賞受賞者) trong vật lý, hóa học và y sinh. Cơ quan Hàng không Vũ trụ Nhật (JAXA — 宇宙航空研究開発機構) tích cực trong khám phá tiểu hành tinh (Hayabusa — はやぶさ). Khái niệm 持続可能性 (じぞくかのうせい — sustainability) gắn liền với triết lý もったいない (tiếc nuối sự lãng phí) — quan niệm truyền thống Nhật về trân trọng tài nguyên, nay được UNESCO công nhận như triết lý môi trường toàn cầu.'
  }
];
