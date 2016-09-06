// prototypes

// chatter class
var Chatter = function (name, colour) {

    // name not given? generate a cool one
    if (name === undefined) {
        this.name = this.generateName();
    } else {
        this.name = name;
    }

    // 
    if (colour === undefined) {
        this.colour = this.generateColour();
    } else {
        this.colour = colour;
    }

    this.messages = new Array("ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ.",
        "reset",
        "Hello, I am currently 15 years old and I want to become a walrus. I know there’s a million people out there just like me, but I promise you I’m different. On December 14th, I’m moving to Antartica; home of the greatest walruses. I’ve already cut off my arms, and now slide on my stomach everywhere I go as training. I may not be a walrus yet, but I promise you if you give me a chance and the support I need, I will become the greatest walrus ever. If you have any questions or maybe advice, just inbox me. Thank you all so much",
        "As a dad and a common perpetrator of dad jokes, let me explain. I like telling jokes. I think of myself as a funny guy so it just seems natural that I'd want to try to make my kids laugh.",
        "is this wr pace?",
        "▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼Sorry, I've dropped my bag of Doritos ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ► ▼ ◄ ◄ ▲▲ ► ▼ ◄▼ ◄ ◄ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ►",
        "༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽YOU CAME TO THE WRONG DONGERHOOD༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽",
        "༼ ▀̿̿Ĺ̯̿̿▀̿ ̿ ༽_•︻̷̿┻̿═━一༼ຈل͜ຈ༽ Stop the spam or the donger dies",
        "ᕙ༼ຈل͜ຈ༽ᕗ. ʜᴀʀᴅᴇʀ, ʙᴇᴛᴛᴇʀ, ғᴀsᴛᴇʀ, ᴅᴏɴɢᴇʀ .ᕙ༼ຈل͜ຈ༽ᕗ",
        "(_̅_̅_̅_̅_̲̅м̲̅a̲̅я̲̅i̲̅ju̲̅a̲̅n̲̅a̲̅_̅_̅__̅̅(ด้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็",
        "ก็็็็็็็็็็็็็ʕ•͡ᴥ•ʔ ก้้้้้้้้้้้",
        "ʜᴇʟʟᴏ, ɪ ᴀᴍ ᴀ ʏᴏᴜɴɢ ʙᴇᴀᴜᴛɪғᴜʟ ᴋᴏʀᴇᴀɴ ɢɪʀʟ (>‿◠)✌ ᴀɴᴅ ɪ ᴡᴏᴜʟᴅ ᴊᴜsᴛ ʟɪᴋᴇ ᴛᴏ ʟᴇᴛ ʏᴏᴜ ᴋɴᴏᴡ ᴛʜᴀᴛ ɪ ᴡᴀᴛᴄʜ ʏᴏᴜ ᴇᴠᴇʀʏ ᴅᴀʏ ᴀɴᴅ ɢɪɢɢʟᴇ ᴛᴏ ᴍʏsᴇʟғ ʙᴇᴄᴀᴜsᴇ ᴏғ ʜᴏᴡ ɢᴏᴏᴅ ʏᴏᴜ ᴀʀᴇ ᴀᴛ ɢᴀᴍᴇs ♡‿‿♡ ɪ ʜᴏᴘᴇ ᴏɴᴇ ᴅᴀʏ ʏᴏᴜ ᴄᴀɴ ᴛᴇᴀᴄʜ ᴍᴇ sᴏᴍᴇᴛʜɪɴɢ ( ͡~ ͜ʖ ͡°)",
        "Stiv, I hope you can see this message now that the chat has died down. I wanted to say CONGRATS. I know that you can do a little bitter, but I always want to tip my hat to you. Through thick and thin, I will still be here to always support you. I know times are hard, but you always come back with a good attitude. i wish you there very best on your next runs and hope you get an even better score. I will continue to be here to find new strats as always. Great job Stiv, I will be here always",
        "▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬ ＤＡＭＮ ＴＨＩＳ ＮＥＷ ＳＰＡＭ ＩＳ ＦＡＮＣＹ ▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬",
        "Did somebody say <a href=\"http://haloruns.com\" target=\"_blank\">haloruns.com</a>?",
        "Do not fear a man that spams 1000 memes, instead fear a man that spams a meme 1000 times",
        "╠═══╣Lets build a ladder╠═══╣",
        "HOLD CTRL AND TYPE &quot;WTF&quot; FOR ℱ𝓪𝓷𝓬𝔂 𝓦𝓣ℱ",
        "✓ amazW ✓ krippW ✓ trumpW ✓ reynadW ✓ kolentoW ✓ bajW ✓ dewW ✓ emjaneW ✓ forsenW ✓ krippW ✓ loidW ✓ mitchW ✓ reckW ✓ sodaW ✓ taymooW ✓ PLEB TEST PASSED.",
        "Hey guys. This is my very first copy pasta and I am really nervous about pasting it because if it does not get copy pasta then I will have much embarrassment. I've have thinking about it for a couple of nights now, but here it is!",
        "O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA",
        "ＨＥＹ ＤＯＵＢＬＥＬＩＦＴ， Ｉ’Ｍ ＴＲＹＩＮＧ ＴＯ ＬＥＡＲＮ ＴＯ ＰＬＡＹ ＳＨＡＣＯ． Ｉ ＪＵＳＴ ＨＡＶＥ Ａ ＱＵＥＳＴＩＯＮ ＡＢＯＵＴ ＴＨＥ ＳＫＩＬＬ ＢＵＩＬＤ： ＳＨＯＵＬＤ Ｉ ＭＡＸ ＢＡＣＫＳＴＡＢ ＬＩＫＥ ＹＯＵ ＢＡＣＫＳＴＡＢＢＥＤ ＣＬＧ， ＤＥＣＥＩＶＥ ＬＩＫＥ ＹＯＵ ＤＥＣＥＩＶＥＤ ＣＬＧ， ＯＲ ＨＡＬＬＵＣＩＮＡＴＥ ＬＩＫＥ ＹＯＵ ＭＡＤＥ ＣＬＧ ＨＡＬＬＵＣＩＮＡＴＥ ＡＢＯＵＴ ＨＡＶＩＮＧ Ａ ＣＨＡＮＣＥ ＡＴ ＷＩＮＮＩＮＧ ＡＮＯＴＨＥＲ ＴＯＵＲＮＡＭＥＮＴ",
        "I like how StrifeCro doesn't realize that all his viewers are me on different accounts. Dont believe me? watch me post this on my other accounts",
        "If you’re reading this, you’ve been in coma for almost 20 years now. We’re trying a new technique. We don’t know where this message will end up in your dream, but we hope it works. Please wake up, we miss you.",
        "By complaining about copypastas you are just making it worse. Can't you see that? Every time you comment and complain about people posting the same comments each time just adds to the incentive for people who think they are funny to continue. I am willing to bet that this comment will turn into a *** copypasta at this point just because of how &quot;funny&quot; and &quot;ironic&quot; it would be to make a copypasta out of a comment complaining about copypastas.",
        "ʷʰᵉᶰ ˢᵖᵃᵐ, ᵐʸ ᵗᵉˣᵗ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᶫᶫʸ ᵍᵒ ᵗᵒ ᵗʰᵉ ˢᵐᵃᶫᶫᵉˢᵗ ˢᶦᶻᵉ⋅ ᶦ ᶜᵃᶰ ᵐᵃˣᶦᵐᶦᶻᵉ ˢᵖᵃᵐ ᵖᵉʳ ᵖᶦˣᵉᶫ ᵃᶰᵈ ᶦᶰᶜʳᵉᵃˢᵉ ᵗʰᵉ ᵈᶦᶠᶠᶦᶜᵘᶫᵗʸ ᵗᵒ ʳᵉᵃᵈ ˢᵃᶦᵈ ˢᵖᵃᵐ ᶜᵃᵘˢᶦᶰᵍ ᶠʳᵘˢᵗʳᵃᵗᶦᵒᶰ ᵒᶠ ᵗʰᵉ ᵛᶦᵉʷᵉʳ⋅ ᵃᶫᶫ ᵇᵉᶜᵒᵐᶦᶰᵍ ᵐᵃˣᶦᵐᵘᵐ ᵉᶠᶠᶦᶜᶦᵉᶰᶜʸ",
        "<img src='https://static-cdn.jtvnw.net/emoticons/v1/70433/1.0' alt='KappaRoss' /> “This guy's painting is CRAZY!” <img src='https://static-cdn.jtvnw.net/emoticons/v1/70433/1.0' alt='KappaRoss' /> “My drawing can't win against a painting like that” <img src='https://static-cdn.jtvnw.net/emoticons/v1/70433/1.0' alt='KappaRoss' /> &quot;He NEEDED precisely those colors to win&quot; <img src='https://static-cdn.jtvnw.net/emoticons/v1/70433/1.0' alt='KappaRoss' /> “He drew the only scene that could beat me” <img src='https://static-cdn.jtvnw.net/emoticons/v1/70433/1.0' alt='KappaRoss' /> &quot;He had the perfect brush&quot; <img src='https://static-cdn.jtvnw.net/emoticons/v1/70433/1.0' alt='KappaRoss' />",
        "The stream starts, and so my spam begins. It shall not end until i am banned. I shall fear no mod, sub to no streamer. I shall live and die in the Chat. For i am the value in the bomber. I am the BM in the lethal. I am the salt in the defeat. I pledge my keyboard to the Chat, for this stream and all the streams to come.",
        "fck my life!!! I have a 197 word essay due tomorrow and I have no idea where to start. Just WAIT till you kiddies have real homework, then we will see how much time you have to spam in here",
        "pls don't spam. i'm watching on my mobile phone and it gets very hot if you spam so my hands get burned. if you don't want my hands to get burned stop spamming pls",
        "Hey chat, take it easy please. Sometimes I see the same message posted twice. Take your time to actually read chat to avoid embarrassing incidents like this. Thank you.",
        "I sᴏʟᴅ ᴍʏ sᴀɴᴅᴡɪᴄʜ ᴛᴏ ʟᴇᴀʀɴ ᴀʙᴏᴜᴛ ᴛʜᴇ Lᴜᴄɪᴀɴ ʟᴇᴠᴇʟ 2 ᴘᴏᴡᴇʀ sᴘɪᴋᴇ. Jᴜsᴛ ᴀs ɪ ᴡᴀs ᴀʙᴏᴜᴛ ᴛᴏ ɢᴇᴛ ᴏᴜᴛ ᴏғ ᴍᴀsᴛᴇʀ ᴛɪᴇʀ ᴇʟᴏ ʜᴇʟʟ, I ᴅɪᴇᴅ ᴏғ sᴛᴀʀᴠᴀᴛɪᴏɴ. Iғ ᴏɴʟʏ I ʜᴀᴅ ᴇᴀᴛᴇɴ ᴛʜᴀᴛ ᴛᴏᴀsᴛᴇᴅ ᴛᴜɴᴀ sᴀʟᴀᴅ ʜᴏᴀɢɪᴇ, I ᴡᴏᴜʟᴅ ʙᴇ ᴀʟɪᴠᴇ ᴛᴏᴅᴀʏ ᴛᴏ ᴛʏᴘᴇ ᴛʜɪs",
        "厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下厂下广卞廿士十一卉半与本二上旦上二本与半卉一十士廿卞广下广卞廿士十一卉半与本二上旦",
        "UNROLL THE TADPOLE <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNCLOG THE FROG <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNLOAD THE TOAD <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNINHIBIT THE RIBBIT <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNSTICK THE LICK <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNIMPRISON THE AMPHIBIAN <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNMUTE THE NEWT <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> UNBENCH THE KENCH <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> PERMIT THE KERMIT <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' /> DEFOG THE POLLIWOG <img src='https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0' alt='OSfrog' />",
        "╠═══╣Lets build a ladder╠═══╣",
        "( ͡° ͜◯ ͡°) ＣＬＯＷＮ ＦＩＥＳＴＡ ( ͡° ͜◯ ͡°)",
        "Sodium, atomic number 11, was first isolated by Peter Dager in 1807. A chemical component of salt, he named it Na in honor of the saltiest region on earth, North America.",
        "<img src='https://static-cdn.jtvnw.net/emoticons/v1/4339/1.0' alt='EleGiggle' /> MY BELLY IS HUGE <img src='https://static-cdn.jtvnw.net/emoticons/v1/4339/1.0' alt='EleGiggle' /> MY BRAIN HAS DELAY <img src='https://static-cdn.jtvnw.net/emoticons/v1/4339/1.0' alt='EleGiggle' /> YOU GUESSED IT RIGHT <img src='https://static-cdn.jtvnw.net/emoticons/v1/4339/1.0' alt='EleGiggle' /> I'M FROM NA. <img src='https://static-cdn.jtvnw.net/emoticons/v1/4339/1.0' alt='EleGiggle' />",
        "<img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> I <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> KNOW <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> WHEN <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> THAT <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> HOTLINE <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> MING <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> THAT <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> CAN <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> ONLY <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> MING <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> ONE <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> LEE <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> YOU <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> USED <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> TO <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> CALL <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> ME <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> ON <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> MY <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' /> CELLPHONE <img src='https://static-cdn.jtvnw.net/emoticons/v1/68856/1.0' alt='MingLee' />",
        "ＨＥＹ　ＲＴＺ，　Ｉ’Ｍ　ＴＲＹＩＮＧ　ＴＯ　ＬＥＡＲＮ　ＴＯ　ＰＬＡＹ　ＲＩＫＩ．　Ｉ　ＪＵＳＴ　ＨＡＶＥ　Ａ　ＱＵＥＳＴＩＯＮ　ＡＢＯＵＴ　ＴＨＥ　ＳＫＩＬＬ　ＢＵＩＬＤ：　ＳＨＯＵＬＤ　Ｉ　ＭＡＸ　ＢＡＣＫＳＴＡＢ　ＬＩＫＥ　ＹＯＵ　ＢＡＣＫＳＴＡＢＢＥＤ　ＥＧ，　ＳＭＯＫＥＳＣＲＥＥＮ　ＳＯ　ＴＨＥＹ　ＭＩＳＳ　ＭＥ　ＬＩＫＥ　ＥＧ　ＭＩＳＳ　ＹＯＵ　７０％　ＯＦ　ＴＨＥ　ＴＩＭＥ，　ＯＲ　ＰＥＲＭＡＮＥＴ　ＩＮＶＩＳＩＢＩＬＩＴＹ　ＳＯ　Ｉ　ＣＯＵＬＤ　ＤＩＳＡＰＰＥＡＲ　ＬＩＫＥ　ＹＯＵ　ＤＩＳＡＰＰＥＡＲＥＤ　ＦＲＯＭ　ＥＧ",
        "ヽ(◉◡◔)ﾉ I'M LOL FAN AND I HAVE DOWN SYNDROME ヽ(◉◡◔)ﾉ",
        'My name is Artour Babaevsky. I grow up in smal farm to have make potatos. Father say "Artour, potato harvest is bad. Need you to have play professional Doto in Amerikanski for make money for head-scarf for babushka."I bring honor to komrade and babushka. Sorry for is not have English. Please no cyka pasta coperino pasterino liquidino throwerino.',
        "I owe my life to Arteezy. I got in a horrible car crash and i was in 6 month coma. The nurse switched to the Twitch channel to Arteezy's stream. I awoke from my coma and muted it.",
        "EE. when u break up with someone you should probably tell them why, else you end up the bad guy. I know u havent had a gf yet but in time u will meet a nice gurl and when u do, you cant abuse her like u have done aui2000 or PLD.u have been abused, i know loda hurt u. he broke ur heart. But you cant go around doing it to other gurls after u were scared",
        "I'm here to speak with you about a very important issue that we in the Dota2 community face everyday, memes.  Memes are infiltrating our ranked queues. Memes are infiltrating our in-houses.  Memes are raping our mothers and killing our fathers.  The World Health Organization has traced the source to a subset of extremely toxic streamers.  This group of streamers is led by the one called SirActionSlacks.  If you ever come in contact with SirActionSlacks, please do a 360 and moonwalk away from his stream.  Unfollow and unsubscribe.  If you do this, we may still have a chance.  I dream of a future where Dota2 is played in parks and playgrounds, in office and student lounges, and even in the bedroom, completely free of memes.  Please support our cause.",
        "10 years since sing strim. i walk through the empty streets trying to think of something else but my path always leads to the stream. i stare at the screen for hours and try to summon the lord. i watch other asian girls streaming but it is no good. i flame dendi in his channel and try to resist the nazi mods but it is all meaningless. the end is near.i then usually watch some old sing vods and cry myself to sleep.",
        "<img src='https://static-cdn.jtvnw.net/emoticons/v1/25/1.0' alt='Kappa' />"
    );

};

Chatter.prototype.generateName = function () {

    // adjective list
    var adjectives = new Array("Cool",
        "Huge",
        "Funny",
        "Japanese",
        "Amazing",
        "Tiny",
        "Stupid",
        "Cowabunga",
        "Wide",
        "Incredible",
        "Corn",
        "Hame",
        "Beluga",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Brown",
        "Grey",
        "Bong",
        "Arteezy",
        "EE",
        "SirAction",
        "00000000000",
        "GG",
        "NA",
        "Salty",
        "Cow",
        "Electric",
        "Pudding",
        "Eternal",
        "Condemned",
        "Big",
        "Depressed",
        "Sugar",
        "Baby",
        "Clown",
        "Fap",
        "Cold",
        "Frostly",
        "Lazy",
        "Excited",
        "Hardened",
        "Favoured",
        "Revolver",
        "Crispy",
        "Wet",
        "Grim",
        "Slim",
        "Chewy",
        "Marijuana"
    );

    // noun list
    var nouns = new Array("Dude",
        "Man",
        "Boy",
        "Barf",
        "Girl",
        "MasterChief",
        "Yoshi",
        "Samurai",
        "Beast",
        "Fish",
        "Surfer",
        "Banker",
        "Gamer",
        "Carm",
        "Porkboy",
        "Gamer",
        "Fragger",
        "Hole",
        "Star",
        "Slacks",
        "Fan",
        "Fanboy",
        "Baby",
        "Rage",
        "Hater",
        "Winner",
        "Loser",
        "Arteezy",
        "EE",
        "Vortex",
        "Abuser",
        "Jesus",
        "Shadow",
        "Chief",
        "Blocker",
        "Life",
        "Light",
        "Penguin",
        "Shark",
        "Kappa",
        "Reefer",
        "Hippy",
        "RingHole",
        "Grande",
        "Slayer",
        "Guy",
        "Bot",
        "Bear",
        "Carnage",
        "Milker"
    );

    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];

    var number;

    // force 10% of users to have 69 in their name
    // force 10% of users to have 420 in their name
    // force 20% of users to have no number in their name

    var numberDecider = Math.floor(Math.random() * 9);

    if (numberDecider === 0 || numberDecider == 1) {
        number = "";
    } else if (numberDecider == 2) {
        number = 69;
    } else if (numberDecider == 3) {
        number = 420;
    } else {
        number = Math.floor(Math.random() * 1000);
    }


    var username = adjective + noun + number;

    return username;

};

Chatter.prototype.generateColour = function () {

    // var colours = new Array("Red", "Blue", "Green", "Yellow", "Orange", "Brown", "Black", "White", "Fuchsia");
    var colours = new Array("FF0000", "0000FF", "008000", "B22222", "FF7F50", "FF4500", "2E8B57", "DAA520", "D2691E", "5F9EA0", "1E90FF", "FF69B4", "8A2BE2", "00FF7F");

    var colourIndex = Math.floor(Math.random() * colours.length);

    return "#" + colours[colourIndex];
};

Chatter.prototype.speak = function () {

    // check if we're gonna do the main meme or not
    // currently 33% chance
    var mainMemeDecider = Math.floor(Math.random() * 2);

    var chatMessage;

    // we're copying the main meme!
    if (mainMemeDecider === 0 && mainMemeIndex !== undefined && mainMemeDuration >= 0) {
        chatMessage = this.messages[mainMemeIndex];
        mainMemeDuration--;
    } else {
        // randomly grab a message from message array
        var messageDecider = Math.floor(Math.random() * this.messages.length);
        chatMessage = this.messages[messageDecider];

        var mainMemeOverwriteDecider = Math.floor(Math.random() * 50);

        // let's start a new main meme!
        if (mainMemeOverwriteDecider === 0) {
            mainMemeIndex = messageDecider;
            mainMemeDuration = mainMemeDurationStartValue;
            // console.log("overwriting main meme! to: " + this.messages[messageDecider]);
        }

    }

    // append the message as a paragraph, including username and name colour
    var stringToAppend = "<p class=\"chatMessage\"><span style=\"font-weight:bold; color:" + this.colour + ";\">" + this.name + "</span>: " + chatMessage + "</p>";
    $("#chat").append(stringToAppend);

    // grab chat height and wrapper height
    var chatHeight = $("#chat").height();

    var firstChildHeight = 0;

    // if chat height is over 3000 pixels, remove the first paragraph inside it
    if (chatHeight >= 3000) {
        firstChildHeight = $("#chat p:first-child").height() + 12;
        $("#chat p:first-child").remove();
    }

    var wrapperHeight = $("#chatWrapper").height();

    // calculate the new height of the chatbox based on how big the last message sent was
    var newHeight = chatHeight + $("#chat p:last-child").height() + 12 - firstChildHeight;

    // apply the new chatbox height
    $("#chat").css("height", newHeight);

    // if chat height is taller than the wrapper, force bottom alignment
    if (chatHeight >= wrapperHeight) {
        $("#chat").css("bottom", "0px");
    }
};

Chatter.prototype.attemptToSpeak = function () {

    var chatDecider = Math.floor(Math.random() * 49);

    // let's chat!
    if (chatDecider == 3) {
        this.speak();
    }


};

// main logic
var chatters = new Array();
var mainMemeIndex;
var mainMemeDuration;
var mainMemeDurationStartValue = 50;

for (var i = 0; i < 30; i++) {
    chatters.push(new Chatter());
}

//attempt to chat
function attemptToChat() {

    if (currentviewers !== 0) {
        var speakDecider = Math.floor(Math.random() * 3);

        if (speakDecider === 0) {
            var chatterPicker = Math.floor(Math.random() * chatters.length);

            chatters[chatterPicker].speak();

        }


    }


}

//make chat speed inversely proportionate to viewers
//http://grasshopperpebbles.com/jquery/javascript-inversely-proportional/
function changeChatSpeed() {

    if (currentviewers >= 100000) {

        chatSpeed = 10;

    } else if (currentviewers === 0) {

        chatSpeed = 3000;

    } else {

        chatSpeed = Math.ceil(1000000 / currentviewers);

    }
    if (chatSpeed > 3000 && currentviewers !== 0) {
        chatSpeed = 3000;
    }


}

//clear and make interval of fireChatMessage to new chatSpeed
var calculateChatInterval = function () {

    clearInterval(fireChatMessage);

    changeChatSpeed();

    fireChatMessage = setInterval(function () {

        attemptToChat();

        calculateChatInterval();

    }, chatSpeed);
};

//send message
var fireChatMessage = setInterval(function () {
    attemptToChat();
    calculateChatInterval();
}, chatSpeed);

//just chilling
function myStopFunction() {
    clearInterval(fireChatMessage);
}