var maxfps = 1;
var minfps = 0;
var dollarstotal = 100000188188182727712771;
var dollarspersecond = 0;
var currentviewers = 0;
var broadcasting = false;
var followers = 0;
var subscribers = 0;
var currentmonth = 0;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cputier = 0;
var gputier = 0;
var upgradetier = 0;
var viewerspersecond = 99999999999999999999;
var followerspersecond = 9992282877727272772727;
var subscribersspersecond = 0;
var followersJoining = false;
var cpuprice = 0;
var gpuprice = 0;
var upgradeprice = 0;
var chatSpeed = 3000;
var upgradeviewers = 1000000000000000000000;
var cpugivetier = 0;
var gpugivetier = 0;

//http://www.anandtech.com/bench/CPU/39
var cpunames = ["Intel Atom 230", "AMD Athlon 2650e", "Intel Celeron 420", "Intel Celeron 430", "AMD Sempron LE-1150", "Intel Atom 330", "Intel Celeron 440", "AMD Sempron LE-1200", "AMD Sempron LE-1250", "Intel Atom D510", "AMD Sempron LE-1300", "AMD E-350", "AMD Athlon LE-1620", "AMD Athlon LE-1640", "Intel Pentium 4 660", "AMD Sempron 2650", "AMD Athlon X2 3250e", "Intel Celeron Dual Core E1200", "Intel Pentium Dual Core E2140", "Intel Celeron G465", "Intel Celeron J1800", "Intel Pentium Dual Core E2160", "AMD Athlon X2 4050e", "Intel Celeron E1500", "Intel Pentium Dual Core E2180", "AMD Athlon X2 4450e", "AMD Athlon X2 4600+", "AMD Athlon X2 4850e", "AMD Athlon X2 4800+", "Intel Pentium Dual Core E2200", "AMD Athlon X2 5000+", "AMD Sempron 3850", "AMD Athlon X2 5200+", "Intel Core 2 Duo E4500", "Intel Pentium Extreme Edition 955", "AMD Athlon X2 5400+", "AMD Athlon X2 5600+", "Intel Core 2 Duo E6550", "Intel Core 2 Duo E4600", "AMD Athlon 5150", "Intel Core 2 Duo E4700", "AMD Athlon X2 6000+", "AMD Athlon X2 7750", "Intel Pentium Dual Core E5200", "Intel Pentium E5300", "Intel Core 2 Duo E7200", "Intel Celeron G1101", "Intel Core 2 Duo E6750", "AMD Athlon X2 6400+", "AMD Athlon X2 7850", "Intel Pentium E6300", "AMD Athlon II X2 240e", "AMD Phenom X3 8450", "Intel Celeron J1900", "Intel Core 2 Duo E8200", "Intel Core 2 Duo E6850", "AMD Athlon II X2 255", "AMD A6-5200", "Intel Core 2 Duo E8300", "AMD A6-7400K", "AMD Phenom X3 8650", "Intel Core 2 Duo E7500", "AMD Phenom II X2 550 BE", "AMD Athlon 5350", "AMD Athlon II X2 265", "Intel Pentium G620T", "AMD Phenom X3 8750", "Intel Core 2 Duo E8400", "AMD Phenom II X2 555 BE", "Intel Pentium G6950", "AMD Phenom II X2 560", "AMD Phenom II X2 565 BE", "Intel Core 2 Duo E8500", "Intel Core 2 Duo E8600", "AMD A8-6500T", "AMD Phenom II X3 710", "Intel Pentium G620", "AMD Athlon II X3 435", "AMD Athlon II X3 440", "AMD Phenom II X3 720", "Intel Pentium G840", "Intel Celeron G1620", "AMD Athlon II X4 605e", "Intel Core i3 530", "AMD Athlon II X3 450", "AMD A10-6700T", "Intel Pentium G850", "AMD Athlon II X3 455", "AMD Phenom X4 9650", "AMD Phenom X4 9750", "Intel Core i3 540", "Intel Core 2 Quad Q6600", "AMD Phenom X4 9850", "Intel Core 2 Quad Q8200", "AMD Athlon II X4 620", "Intel Pentium G2030", "AMD Phenom X4 9950", "AMD Phenom II X4 805", "Intel Core i5 650", "Intel Core 2 Quad Q9300", "AMD Athlon II X4 630", "AMD A6-3650", "Intel Core i5 661", "Intel Pentium G2130 ", "AMD Phenom II X4 910", "AMD A8-5500", "Intel Core i3 2100", "AMD Phenom II X4 810", "AMD Athlon II X4 635", "Intel Atom C2750", "Intel Core 2 Quad Q9400", "Intel Core i5 670", "AMD Phenom II X4 920", "Intel Core 2 Quad Q8400", "Intel Core 2 Quad Q9450", "AMD Athlon II X4 645", "Intel Pentium G3258", "AMD Athlon X4 750K", "Intel Pentium G3420", "AMD FX-4130", "AMD A8-3850", "Intel Core 2 Quad Q9550", "AMD Phenom II X4 940", "AMD A8-5600K", "Intel Core i3 4130T", "Intel Core i3 3220", "AMD FX-4300 95W)", "AMD A8-7650K", "Intel Core 2 Quad Q9650", "Intel Core i3 6100TE", "AMD Athlon X4 760K", "AMD A10-5800K", "AMD A8-6600K", "AMD Phenom II X4 955", "AMD A8-7600 ", "AMD A10-7860K", "AMD A10-7700K", "AMD A10-7800", "AMD A10-6800K", "AMD FX-4350", "AMD Phenom II X4 965 BE", "AMD A10-7850K", "AMD Athlon X4 860K", "Intel Core 2 Extreme QX9770", "Intel Core i5 750", "AMD Phenom II X4 970 BE", "AMD Athlon X4 845", "AMD A10-7870K", "Intel Core i3 4330", "Intel Core i5 760", "AMD A10-7890K", "AMD Phenom II X4 980 BE", "Intel Core i3 4360", "Intel Core i7 920", "AMD FX-6300", "AMD Phenom II X6 1055T", "Intel Core i7 860", "AMD Phenom II X6 1075T", "Intel Core i7 870", "Intel Core i7 940", "Intel Core i7 880", "Intel Core i3 6100TE", "AMD FX-6350", "AMD Phenom II X6 1090T", "Intel Core i7 950", "Intel Core i7 965 Extreme", "AMD Phenom II X6 1100T BE", "Intel Core i3 6320", "AMD FX-8320E", "Intel Core i5 2400", "AMD FX-8370E", "Intel Core i5 2500K", "AMD FX-8150", "Intel Core i7 975 Extreme", "AMD FX-8320", "AMD FX-8350", "Intel Core i5 3570K", "Intel Core i7 3820", "AMD FX-8370", "Intel Core i7 4765T", "Intel Core i7 2600K", "Intel Core i5 4570S", "Intel Core i7 970", "Intel Core i5 4670K", "Intel Xeon v4 - E3 1265L v4", "Intel Core i5 5675C", "AMD FX-9590", "Intel Core i7 3770K", "Intel Core i7 4820K", "Intel Core i7 980X", "Intel Core i5 4690K", "Intel Core i5 4690", "Intel Core i5 6600", "Intel Core i7 5775C", "Intel Core i5 6600K", "Intel Xeon v4 - E3 1285 v4", "Intel Core i7 4770K", "Intel Core i7 990X", "Intel Xeon v4 - E3 1285L v4", "Intel Core i7 4790", "Intel Xeon-D 1540", "Intel Core i7 4790S", "Intel Core i7 6700", "Intel Core i7 4790K", "Intel Core i7 3970X", "Intel Core i7 3930K", "Intel Core i7 3960X", "Intel Xeon v3 - E5 2650L v3", "Intel Core i7 4790K", "Intel Core i7 6700K", "Intel Core i7 5820K", "Intel Xeon v3 - E5 2650L v3", "Intel Core i7 6700K", "Intel Core i7 4930K", "Intel Xeon v3 - E5 2650 v3", "Intel Xeon v2 - E5 2697 v2", "Intel Core i7 4960X", "Intel Core i7 5930K", "Intel Core i7 6800K", "Intel Core i7 6850K", "Intel Xeon v2 - E5 2687W v2", "Intel Core i7 5960X", "Intel Xeon v3 - E5 2687W v3", "Intel Xeon v2 - E5 2697 v2", "Intel Core i7 6900K", "Intel Xeon v3 - E5 2695 v3", "Intel Xeon v3 - E5 2690 v3", "Intel Xeon v3 - E5 2697 v3", "Intel Xeon v3 - E5 2687W v3", "Intel Core i7 6950X", "Intel Xeon v3 - E5 2697 v3", "Intel Xeon v2 - E5 2687W v2"];
//http://www.videocardbenchmark.net/high_end_gpus.html
var gpunames = ["NVIDIA TITAN X", "GeForce GTX 1080", "Quadro M6000 24GB", "GeForce GTX 1070", "GeForce GTX 980 Ti", "Quadro M6000", "GeForce GTX 980", "GeForce GTX 1060", "GeForce GTX 780 Ti",
"GeForce GTX TITAN Black", "GeForce GTX 970", "Quadro M5000", "Radeon R9 Fury + Fury X", "GeForce GTX 780", "GeForce GTX TITAN Z", "GeForce GTX Titan", "Quadro K6000", "Radeon RX 480", "Radeon R9 390 X", "Radeon RX 470", "Radeon R9 295 X2", "Radeon R9 290 X / 390 X", "Radeon R9 390", "Radeon R9 290 / 390", "FirePro W9100", "Quadro M4000", "GeForce GTX 770", "Quadro K5200", "GeForce GTX 960", "Radeon R9 380 X", "GeForce GTX 680", "FirePro W8100", "Radeon R9 M395X", "GeForce GTX 980 M", "Radeon R9 285 / 380", "Radeon R9 280 X", "Radeon R9 380", "Radeon HD 7990", "GeForce GTX 670", "GeForce GTX 690", "Radeon HD 7970 / R9 280 X", "GeForce GTX 950", "FirePro W9000", "FirePro W7100", "Radeon R9 M295X", "GeForce GTX 760 Ti", "Radeon HD 8990", "Radeon R9 M395", "GeForce GTX 580", "GeForce GTX 760", "Radeon R9 280", "Quadro M5000M", "Radeon HD 7950 / R9 280", "Radeon R9 370", "GeForce GTX 660 Ti", "Radeon R9 270 X", "Quadro M2000", "Quadro K4200", "Radeon R7 370", "GeForce GTX 570", "Radeon HD 7870 XT", "GeForce GTX 680 MX", "GeForce GTX 480", "Radeon HD 7870", "GRID K520", "Quadro M3000M", "Radeon R9 270 / R7 370", "Radeon RX 460", "FirePro W7000 Adapter", "FirePro W7170M", "GeForce GTX 775 M", "FirePro S7000", "FirePro W8000", "GeForce GTX 660", "FirePro W7000", "GeForce GTX 780 M", "GeForce GTX 590", "Quadro K5000", "GeForce GTX 970 M", "Radeon HD 8970 M", "Radeon R9 M290X", "Radeon HD 7850", "GRID K2", "Radeon HD 7970 M", "Tesla C2050 / C2070", "GeForce GTX 750 Ti", "GeForce GTX 470", "GeForce GTX 880 M", "GeForce GTX 650 Ti BOOST", "GeForce GTX 560 Ti", "Radeon HD 6970", "Tesla C2050", "Quadro 6000", "Quadro K2200", "GeForce GTX 680 M", "Quadro M4000M", "Radeon R9 M390X", "GeForce GTX 750", "Tesla C2075", "Tesla C2070", "Radeon HD 6950", "Radeon R7 360", "GeForce GTX 560", "Radeon HD8970M", "Radeon R7 260 X", "Radeon R9 M380", "Radeon R9 360", "Radeon R9 260", "Radeon HD 7790", "FirePro W5000", "Quadro K5100M", "FirePro W4300", "GeForce GTX 965 M", "GeForce GTX 465", "Radeon R7 260", "Quadro K1200", "Radeon HD 8950", "FirePro W5100 Adapter", "FirePro W5100", "Quadro K4000", "FirePro 3 D V9800", "FirePro M6100", "Quadro 5000", "FirePro V7900", "GeForce GTX 650 Ti", "GeForce GTX 770 M", "Quadro K5000M", "GeForce GTX 460", "Radeon HD 5870", "Radeon HD 5970", "Radeon HD 6870", "GeForce GTX 460 v2", "Radeon HD 6990", "Quadro K4100M", "GeForce GT 645", "FirePro 3 D V8800", "GRID K280Q", "GeForce GTX 485 M", "GeForce GTX 675 MX", "GeForce GTX 580 M", "Quadro K620", "Quadro K4000M", "Radeon HD 5850", "Quadro M2000M", "Radeon HD 6850", "GeForce GTX 560 SE", "GeForce GTX 460 SE", "Radeon R9 M375X", "GeForce GTX 555", "Radeon HD 7770", "GeForce GTX 870 M", "GeForce GTX 745", "Radeon TM R9 A360", "GeForce GTX 675 M", "FirePro V9800 Adapter", "GeForce GTX 670 MX", "FirePro M5100", "Radeon HD 6790", "Radeon HD 5830", "GeForce GTX 480 M", "GeForce GTX 570 M", "Intel Iris Pro 580", "GeForce GTX 470 M", "Quadro 5000 M", "Firepro W5170M", "Radeon R7 + HD 7700 Dual", "Quadro 4000", "FirePro 3 D V7800", "Radeon R9 M370X", "GeForce GTX 550 Ti", "Radeon HD 6900 M", "GeForce GTX 645", "GeForce GTX 960 A", "GeForce GTX 765 M", "Radeon HD 7660 D + HD 7700 Dual", "GeForce GTX 670 M", "Quadro K3100M", "Radeon HD 8570 D + HD 7700 Dual", "GeForce GTX 650", "Radeon HD 8670 D + 7700 Dual", "Quadro 5010 M", "GeForce GTX 960 M", "GRID K240Q", "Radeon R9 255", "FirePro W5130M", "Quadro 4000 M", "Radeon HD 8870 M / R9 M270X / M370X", "FirePro W600", "Radeon HD 5770", "Radeon HD 8870 M", "Quadro M1000M", "FirePro M6000 Mobility Pro", "Radeon HD 7750", "Quadro K2000", "Radeon HD 6770", "Radeon E8860", "Quadro K2000D", "Intel Iris 550", "GeForce GTX 860 M", "Quadro K3000M", "GeForce GT 740", "FirePro W4100", "GeForce GT 755 M", "GeForce GTX 560 M", "GeForce GTS 450", "Quadro M600M", "FirePro W4100 Adapter", "Radeon HD 4890", "FirePro M4000 Mobility Pro", "Intel Iris Pro 6200", "Quadro K2200M", "FirePro V5900", "Radeon HD 7660 D + HD 6670 Dual", "Radeon HD 7870 M", "GeForce GTX 950 M", "GeForce GTX 950 A", "Radeon R9 M360", "FirePro M4000", "FirePro M40003", "Radeon R9 M275X / M375", "GeForce GTX 850 M", "Radeon HD 7560 D + 7670 Dual", "Radeon HD 7730", "Radeon HD 5750", "Radeon R7 250", "GeForce GTX 660 M", "GeForce GTX 460 M", "GeForce GTX 760 M", "Radeon HD 4870", "Radeon HD 7850 M", "Radeon R7 M370", "Radeon HD 8850 M / R9 M265X", "Radeon HD 8670 D + 6670 Dual", "Radeon R9 M270XFirePro 3 D V5800", "Radeon HD 7560 D + HD 7700 Dual", "Intel Iris 540", "FireStream 9270", "Quadro 3000 M", "Quadro 2000", "Radeon HD 6750", "FirePro V4900", "GeForce GT 750 M", "GeForce GT 640", "Radeon HD 8790 M", "Quadro 2000 D", "GeForce GTX 760 A", "Radeon R7 A370", "FirePro W4170M", "GeForce GT 545", "FirePro 3 D V8750", "GeForce GTX 285", "Radeon HD 8570 D + HD 6670 Dual", "Radeon R7 + R7 200 Dual", "Radeon HD 4870 X2", "Radeon HD 7640 G + HD 8750 M Dual", "Radeon HD 8570 D + 6570 Dual", "Radeon HD 7660 D + 6670 Dual", "Radeon HD 8790 M / R9 M290X", "GeForce 945 M", "Quadro K2100M", "Radeon HD 8670 D + HD 6670 Dual", "GeForce GTX 275", "Radeon R9 M265X", "Mobility Radeon HD 5870", "GeForce GTX 280", "Radeon R7 A10 - 7890 K Radeon R7", " 12 Compute Cores 4 C", "Radeon HD 7750 M", "GeForce GT 650 M", "Intel Iris Pro 5200", "Firepro W4190M", "Quadro 2000 D", "FireStream 9250", "Radeon R7 A10 - 7870 K Radeon R7", " 12 Compute Cores 4 C", "FirePro M4170GeForce GT 745 A", "Radeon HD 7560 D + 6670 Dual", "Radeon HD 4850 X2", "GeForce GTX 260", "FirePro 3 D V8700", "FirePro M4150", "Radeon HD 7660 D + 6570 Dual", "Quadro FX 5800", "Radeon R7 M260X", "FirePro 3 D V4800", "Radeon R9 M275", "Radeon HD 7670", "Quadro K2000M", "GeForce GPU", "Radeon HD 5670", "Quadro 2000 M", "Radeon HD 7660 D + 7670 Dual", "Radeon HD 7520 G + 7700 M Dual", "Firepro M4100", "Radeon HD 4770", "GeForce GT 445 M", "Radeon HD 7670 A", "Radeon HD 6670", "Radeon R7 A10 - 7860 K Radeon R7", " 12 Compute Cores 4 C", "Radeon HD 8600 / 8700 M", "GeForce 940 MX", "GeForce GTX 295", "Radeon R7 + R7 240 Dual", "Radeon HD 4850", "Radeon HD 8570 D + HD 8570 Dual", "Radeon HD7570", "GeForce 845 M", "Radeon R7 A10 - 7850 K", "Radeon HD 8670 D + R7 240 Dual", "Radeon HD 7730 M", "Quadro CX", "Radeon R9 M375", "Radeon R7 340", "Radeon HD 7690 M XT", "Quadro M500M", "Radeon HD 8750 M", "Radeon HD 7690 M", "Radeon HD 8570 D + R7 200 Dual", "Radeon HD 8850 M", "Radeon HD 6770 M", "Radeon HD 6800 M", "Radeon R7 A265", "Quadro FX 4800", "GeForce 930 A", "Radeon R7 A10 - 8750 Radeon R7", " 12 Compute Cores 4 C +", "Radeon HD 7560 D + 7560 D Dual", "Quadro K1100M", "Radeon HD 6700 M", "Radeon HD 7570", "Intel HD 530", "Radeon HD 4830", "Radeon HD 5600 / 5700", "Intel HD P530", "Radeon HD 7660 G N HD 7660 G + HD 7700 M N HD 7700 M D", "Radeon HD 8570 D + R7 240 Dual", "Radeon HD 8690 M", "Radeon R7 240", "GeForce 830 A", "Radeon HD 8570", "Radeon E6760", "Radeon HD 8670 D + R7 200 Dual", "GeForce GT 745 M", "Intel Iris 6100", "Radeon HD 8650 G"];
gpunames.reverse();
var gamenames = [];
var upgradenames = ["syndicate", "riotgames", "esl_csgo1", "Nightblue", "summit1g", "LIRIK", "PhantomL0rd", "imaqtpie", "sodapoppin", "captainsparklez", "goldglove", "tsm_bjergsen", "Joshog", "Tsm_dyrus", "mushisgosu", "trick2g", "castro_1021", "sivhd", "swiftor", "flosd", "dreamhackcs", "iijeriichoii", "tsm_theoddone", "nl_kripp", "gamesdonequick", "PewDiePie", "faceittv", "Voyboy", "pashabiceps", "c9sneaky", "omgitsfirefoxx", "kittyplays", "timthetatman", "TrumpSC", "mlg", "Tsm_doublelift", "shroud", "amazhs", "izakooo", "ungespielt", "kittyplaysgames", "gassymexican", "cohhcarnage", "anomalyxd", "nadeshot", "GiantWaffle", "monstercat", "Cryaotic", "kinggothalion", "nick_28t", "legendarylea", "kaypealol", "Imt_wildturtle", "bobross", "reckful", "yogscast", "m0e_tv", "Gronkh", "markiplier", "ProfessorBroman", "froggen", "kyr_sp33dy", "forsenlol", "nickbunyun", "olofmeister", "twitch", "aphromoo", "cheatbanned", "sp4zie", "montanablack88", "streamerhouse", "towelliee", "dansgaming", "vikkstar123", "meclipse", "cowsep", "vegetta777", "sharishaxd", "totalbiscuit", "bacon_donut", "SirhcEz", "reynad27", "kaceytron", "manvsgame", "dendi", "i_amwildcat", "esl_lol", "thecreatures", "meteos", "2mgovercsquared", "dizzykitten", "bigfoltz", "callofduty", "starladder5", "cashnastygaming", "wingsofdeath", "elotrix", "itshafu", "rewinside", "elotrixlivestream", "gripex90", "hiko", "scarra", "mrtweeday", "scream", "sevadus", "bungie", "MiniLaddd", "swifty", "mcjuggernuggets", "zeeoon", "ellohime", "willyrex", "matthdgamer", "twitchplayspokemon", "ceh9", "Aiekillu", "dreadztv", "starladder1", "dinglederper", "tbnrfrags", "riotgamesturkish", "fang_i3anger", "kolento", "imjahova", "lebledart", "versuta", "brownman", "Angryjoeshow", "laceduplauren", "nepenthez", "asiagodtonegg3be0", "officialgetright", "gtimetv", "miss_rage", "ltzonda", "beyondthesummit", "therace", "tarik", "xminks", "toyz", "Paluten", "OGNGlobal", "HiRezTV", "krepo", "a_seagull", "Ksiolajidebt", "rekkles", "boogie2988", "arteezy", "kneecoleslaw", "playhearthstone", "eatmydiction1", "enragedcinema", "skumbagkrepo", "laced_up_lauren", "ducksauce", "yoda", "sing_sing", "maximilian_dood", "phreakstream", "steel_tv", "thedeluxe4", "roomonfire", "day9tv", "loltyler1", "sidearms4reason", "Bajheera", "massansc", "witwix", "s1mpleof", "fairlight_excalibur", "noahj456", "chrismd10", "cobaltstreak", "admiral_bahroo", "nalcs1", "hail9", "alinity", "prettyboyfredo", "skydoesminecraft", "mym_alkapone", "bestrivenna", "rsgloryandgold", "anniebot", "PietSmiet", "esltv_lol", "whiteboy7thst", "piglet", "smitegame", "admiralbulldog", "esea", "justin", "sky_mp3", "RocketBeansTV", "dethridgecraft", "lolrenaynay", "n0thingtv", "mistakelolz", "riotgamesbrazil", "garenatw", "jennythesquirrel", "brtt", "roosterteeth", "nickmercs", "b0aty", "anderzel", "mobilmobil", "formal", "alexich", "oyunbrostv", "jeromeasf", "esltv_cs", "xpertthief", "bajancanadian", "sacriel", "pobelter", "etozhemad", "lpmitkev_tv", "sethbling", "itmejp", "mr_amplified", "riotgames2", "bibaboy", "picoca", "ricegum", "wooflesstv", "watchmeblink1", "pgl", "defrancogames", "summonersinnlive", "dinterlolz", "grossie_gore", "warowl", "oxichampion", "gafallen", "tru3ta1ent", "vgbootcamp", "seriousgaming", "fattypillow", "kevinlasean", "jahrein", "stonedyooda", "brofresco", "girlstorule", "a1taoda", "nervarien", "DominGo", "ZeratoR", "lethalfrag", "Rain", "helenalive", "DebitorLP", "hotshotgg", "goodguygarry", "ocelote", "xpeke", "kungentv", "PsiSyndicate", "mrmoonshouse", "mojoonpc", "sturmwaffel", "ms_vixen", "trilluxelive", "isamuxlive", "dfieldmark", "troydangaming", "speeddemosarchivesda", "immarksman", "capguntom", "hutch", "loserfruit", "savjz", "nintendo", "hotted89", "pokimane", "dota2ti", "shortyyguy", "quickybaby", "sonyatheevil", "machinima", "cincinbear", "sovietwomble", "sp00nerism", "officialfriberg", "nikolarntv", "chaoxlol", "Yetz", "lolyou", "onscreenlol", "northernlion", "ster", "IAmSp00n", "godazed", "fathersongaming", "nvidia", "geekandsundry", "SemchenkoKirill", "Gotaga", "motar2k", "protanki_yusha", "kamikat", "hastad", "bmkibler", "athenelive", "miniminter", "lightofheaven", "raihnbowkidz", "blusewilly_retry", "Gfinitytv", "Freakazoid", "uberdanger", "melihucar", "triplewreck", "gradeaundera", "alia", "keyori", "iwilldominate", "vernnotice", "pamcakes", "NextGenTactics", "kennys", "jonbams", "cyanide", "sparcmaclived", "fragbitelive", "bystaxx", "VeniCraft", "painkami", "westdoor", "imsoosuperior", "hikotv", "mastersnakou", "ZanderLP", "santorin", "nbk", "dexteritybonus", "AGONY", "NobodyEpic", "jacksepticeye", "x5tv", "lolgeranimo", "eleaguetv", "trihex", "g5taz", "heyitsbbg", "Wyld", "dkoseoglu", "pianoimproman", "sxyhxy", "aa9skillz", "SSSWolf", "frankieonpcin1080p", "DeerNadia", "ohmwrecker", "sips_", "wtcnn", "chocobochoco", "Nyxeira", "eulcs1", "saintvicious", "streamdogordox", "slyfoxhound", "seananners", "flusha", "officialf0rest", "therealyetz", "sovitia", "teamsp00ky", "pwnstarzdotcom", "ultra", "Datto", "jackfrags", "Lilypichu", "vityshka", "jcarverpoker", "scumperjumper", "LAGTVMaximusBlack", "spenfc", "sixwong", "dota2ruhub", "jesusavgn", "theokoles", "wagamamatv", "karma", "yaraskygaming", "esl_ruhub_csgo", "starladder_cs_en", "luzugamestwitch", "eloise_ailv", "dota2ti_ru", "roblox", "realkraftyy", "inthelittlewood", "annemunition", "aLexBY11", "quin69", "hazretiyasuo", "zionspartan", "levo", "inetkoxtv", "razer", "realtbnrkenworth", "rockstargames", "ninja", "nicktron", "zeus", "halo", "followgrubby", "valkrin", "playstation", "elrubiuslive", "evilarthas", "koopatroopa787", "dunkstream", "DnerTV", "cdewx", "nocopyrightsounds", "diamondminecart", "bethesda", "cartmanzbs", "lobosjr", "P4wnyhof", "visca96barca", "thijshs", "Luna", "triplewrecktv", "anthony_kongphan", "zombey", "shaclone", "elajjaz", "jessicanigri", "avajaijai", "petezahhutt", "capcomfighters", "Actabunnifoofoo", "dedreviil2", "teawrex", "stewie2k", "generikb", "chelxie", "behkuhtv", "opsct", "esl_csgo_pl", "brttrexpeita", "stickyrice1", "amanseddiqi", "skyasi", "deadmau5", "reziplaygames", "bebelolz", "datmodz", "Xpecial", "gamegrumps", "bateson87hd", "shofu", "stormstudio_csgo_ru", "goodideagaming", "linustech", "tarababcock", "adren_tv", "kosdff", "strifecro", "blondiewondie", "fl0m", "nalcs2", "pwnographicofficial", "tbjzl", "hsdogdog", "lachlantv", "theokolesm", "uselessmouth", "lpmassive", "bashurverse", "handiofiblood", "narcissawright", "moonmoon_ow", "imt_huni", "swebliss", "pink_sparkles", "antvenom", "nosleeptv", "Welovegames", "nightbot", "nerdcubed", "alexelcapo", "lustkr", "twoepicbuddies", "ShroomzTV", "vinesauce", "PintiPanda", "bdoubleo", "yuuie", "ogaminglol", "MrGoldenSports", "flairfifa", "MarcelScorpion", "gamemixtreize", "crimsix", "rush", "sololineabuse", "cro_", "nmplol", "warframe", "tmartn", "gratis150ml", "chilledchaos", "multiplayer", "pokemon", "thegamingterroriser", "itsdatto", "misscoookiez", "tangentgaming", "lifecoach1981", "lngworkshop", "sparkofphoenixtv", "cyanideepic", "srkevo1", "wroetoshaw", "orb", "w33haa", "ice_poseidon", "richard_hammer", "cirno_tv", "godjj", "maikelele", "femsteph", "mira_hs", "thechief1114", "gnumme", "firebat", "chiefpat", "aureylian", "cinnamontoastken", "jolygolf", "robertxlee", "destiny", "jesperwow", "xbox", "anklespankin", "pamaj", "Zydar", "super_sonic_dan", "warcraft", "pauseunpause", "bunnyfufuu", "fantabobshow", "jukebox360", "lainkk", "butterflyouo", "acoolbek", "blizzheroes", "sjow", "Squirrel", "redmercylol", "msteamkk", "mrtlexify", "cdnthe3rd", "thedevildoggamer", "shaboozey", "wtf_winds123", "noxious_hs", "Anakiinntv", "sgares", "adrive", "pandafxfx", "illidanstrdoto", "lilchiipmunk", "starcraft", "manalol", "5hizzle", "eternalenvyy", "huahwi", "followkudes", "zombiunicorn", "aimzatchu", "rxnexus", "esl_sc2", "xboct", "leveluplive", "planet_destiny", "exu_kefir", "immortalhd", "VJLINKHERO", "kingkongor", "bibixhd", "m333ran", "herdyn", "ign", "venruki", "tejbz", "thaldrinlol", "thegrefg", "thegamingowl123", "thejustinflynn", "ezekiel_iii", "jagrawr", "moobot", "angrypug_", "soaryn", "spamfish", "bikeman", "phonecats", "lolesportsla", "ybicanoooobov", "disstream", "stray228", "strippin", "rflegendary", "therealhandi", "kingnappy", "Stpeach", "frenzy", "Airjapesfifa", "dotastarladder_en", "heyimbee", "silentsentry", "petritlp", "fabiantje", "theefrenzy", "zynxyz", "morberplz", "imav3riq", "Kronovi", "olleh", "x5tv2", "peeve", "esl_csgob", "g4v3r", "greentea", "matimi0", "OpTicGaming", "jewelxo", "mitaliang", "earliboy", "xargon0731", "benoitdx9", "monsterdface", "imcoty", "joindotared", "pokket", "camgears", "na_podhvate", "wintergaming", "Wolv21", "shaffer2369", "rivington", "auslove", "kubon_", "clayster", "besserwerdenimranked", "leafylive", "naru", "adamsonshow", "eg_jwong", "yznb", "ilovecookiiezz", "krinxshow", "tidesoftime", "WCS", "bigtymer", "pokelawls", "polskipingwin", "sadaplays", "alisha12287", "wartek", "yokbeolm", "leahloveschief", "opticmidnite", "gommehd", "merlinidota", "parasitetv", "bigbangs06", "minecraftblow", "fatefalls", "mang0", "ieliteshot", "strauberryjam", "Battlefield", "sjokz", "xakoh", "gronkhTV", "S2alinefaria", "dotamajorru", "barcodestreams", "scspple7545", "netherrealm", "oroboro", "eulcs2", "acidicblitzz", "leko92", "dotamajor", "ijevin", "timmac", "meloniemac", "Jensen", "libertygamingo", "skkf", "kqly", "izzi", "siglemic", "sidecarangel", "elrichmc", "fable687", "playcevo", "brunecia", "purgegamers", "skillspecs", "Resttpowered", "rajjpatel", "pandamonium", "sovindictive", "foxdrop", "indiekings", "sl1pg8r", "wickd", "coopgameplays", "aces_tv", "runescape", "giggle_monster", "doctorbenx", "therealmarkofj", "kiwion", "duxativa", "chinglishtv", "Spooner96", "mmorpgrs", "kenzlay", "quill18", "woodysgamertag", "magic", "artemis", "snutzy", "ms5000watts", "teepee", "eclypsiatvlol", "funn1k", "taymoo", "creative7play", "jbrunzgaming", "taketv", "thenexxx", "device", "esl_overwatch", "blackufa_twitch", "unlostv", "redvaloroso", "dailytradingtips", "IOBAGGLive", "themrsark", "lindsayelyse", "dollshin0324", "dreamleague", "ibuypower", "zemersongamer", "chairhandler", "TheG18", "sharp", "typicalgamer", "paolabuzz", "guardsmanbob", "esl_hearthstone", "crendor", "jev", "kinguin_net", "esl_spain", "ryanchoilol", "underground_dv", "soclosetotoast", "akimgames", "riotgameslatino", "yotobi", "jinxfaze", "emilyispro", "missharvey", "Zerkaa", "skadoodle", "zacknanii", "firedragon764", "maudado", "thelondonproject", "randomrambo", "lassiz", "mrsviolence", "patopapao", "mineplex", "tsm_reginald", "annie72127", "chesterccj", "katgunn", "werster", "kelly_jean", "bodil40", "chu8", "crream", "thehaleybaby", "miramisu", "xsmak", "esl_greatfrag", "happasc2", "germanletsplay", "GLADIATORPWNZ", "officialxizt", "s4", "thejwittz", "ethotv", "brotatoe", "snoopeh", "Dakotaz", "fifa_jake_", "ea", "gbay99", "linustheafro", "blamethecontroller", "lololoshka", "rabbitbong", "gsl", "emiliahult", "fifaralle", "netotigr", "lufflee", "lck1", "c_a_k_e", "henrytado", "therainman", "sumaildoto", "brucegrannec", "bischulol", "gameplantv", "streaminc", "muselk", "lvpes", "xchocobars", "outerheaven", "shyboy", "jessierogers", "grimmmz", "jkap", "gamespot", "kev1ntv", "tixinhadois", "scglive", "Moondye7", "bonniedoll", "swagcs", "sissorstream", "badeschlappenlp", "wishyouluckk", "itsmacau", "allshamnowow", "jadejolie", "azazin_kreet", "thedivisiongame", "redcityboy23", "toyzlolz", "chick6", "kindafunnygames", "hornisse86", "aydren", "xcandylashes", "milleniumtvcod", "fazekay", "official_don_gaming", "thatmumbojumbo", "flyinguwe87", "mr_mammal", "achien_kouku", "ppd", "2k", "esl_dota2", "shoxiejesuss", "sllverlady1", "AdriGeek", "mandzio", "kylelandrypiano", "herrbergmann", "hatfilms", "stodeh", "robbaz", "misswater", "dimsgamer", "papaplatte", "showvideogames", "jena_urf_lord_legacy", "LuCKyy_and_BW", "Lotsofbunnies", "st3pnytv", "thenitrozyniak", "cawai0147", "TheBlackHokage", "haylinic", "shadowbeatz", "daithidenogla", "celeste56", "idolmariya", "rguardian", "pedguin", "esl_lol_br", "blizzard", "hearthstonefr", "gaminglive_tv1", "omgezniki", "Fwiz", "Royalphunk", "hansolgaming", "lost_pause_", "gameroneil", "stintik", "xisuma", "nvidia_pl", "proleaguecsgo", "zwebackhd", "uknighted", "puhdado", "Lpmitkev_nonstop", "sonecaaaa", "dandinh", "shadypenguinn", "sheevergaming", "mojang", "Jerma985", "greatfrag", "calebhart42", "vainglory", "axtlol", "melharucos", "codrinbradeasatana", "dmbrandon", "straymav", "Queenbear", "Thesmithplayz", "gleebglarbu", "yukaslegion2", "harleyplays", "nobbel87", "jnasty720", "syndrome208", "rosieriver", "yuniko0720", "levelcap", "redbullesports", "officialmgh", "kittyhouseknife", "jendenise", "thatonetomahawk", "alkaizerx", "vektikyt", "trionworlds", "missmiarose", "wargaming_live", "schviftyfive", "kjhovey", "Arquel", "mew2king", "juicetra", "huskymudkipz", "DoktorFroid", "tsukiyopower", "vanoss_", "vargskelethor", "tobocotv", "esl_lol_brasil", "gufovicky", "koalibears", "ethieenn", "lanceypooh", "rainbow6", "draskyl", "lotharhs", "karrigango", "luxxbunny", "eligorko", "darkness_429", "Teeqo", "snipingfordom", "rocketleague", "Djarii", "ubisoft", "gorgntv", "crumps2", "faux", "legiqn", "blusewilly", "zombie_barricades", "eswc", "ruinclanlive", "khovanskytoday", "albislol", "shiphtur", "zrozilacx", "MilleniumTVHS", "pinworms666", "tokenasty", "mogis2007", "zeroxmercy", "zetalot", "lootcrate", "locodoco", "takeshilol", "chuboi7"];
upgradenames.reverse();
var streamerblacklist = [];
var disposablecpus = [];
var disposablegpus = [];
var topDonors = [];


//check if game can be saved
if (typeof (Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    //$('#gamenameheader').text('Nice your game can be saved');
} else {
    // Sorry! No Web Storage support..
    //$('#gamenameheader').text('Warning your browser doesn't support localstorage, feel free to play but upgrade or use a popular browser if you want to save.);
}

//enable popovers
$(function () {
    $('[data-toggle="popover"]').popover();
    $("#streamnameform :input").prop("disabled", true);
});

//make sure menu isn't collapsed on large screen after resize
$(window).bind('resize load', function () {
    if ($(this).width() > 525) {
        $('#collapse').removeClass('out');
        $('#collapse').addClass('in');
    } else {
        $('#collapse').removeClass('in')
        $('#collapse').addClass('out');
    }
});

// A $( document ).ready() block.
$(document).ready(function () {
    if (localStorage.getItem("exists") === null) {} else {

        localStorage.setItem('exists', 'true');
        dollarstotal = JSON.parse(localStorage.getItem('dollarstotal'));
        followers = JSON.parse(localStorage.getItem('followers'));
        subscribers = JSON.parse(localStorage.getItem('subscribers'));
        currentmonth = JSON.parse(localStorage.getItem('currentmonth'));
        cputier = JSON.parse(localStorage.getItem('cputier'));
        gputier = JSON.parse(localStorage.getItem('gputier'));
        upgradetier = JSON.parse(localStorage.getItem('upgradetier'));
        disposablegpus = JSON.parse(localStorage.getItem('disposablegpus'));
        disposablecpus = JSON.parse(localStorage.getItem('disposablecpus'));

    }
});

//textillate donation function options
$(function () {

    $('.tlt').textillate({
        loop: false,
        initialDelay: 100,
        autoStart: false,
        in : {
            effect: 'bounceInDown',
            delay: 20,
            sync: false,
            callback: function () {}
        },
        out: {
            effect: 'bounceOutUp',
            delayScale: 1.5,
            delay: 20,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function () {}
        },
        callback: function () {},
        type: 'char',
    });
});

//function to show donate message
function donationMessage() {

    var donateName = Chatter.prototype.generateName();
    var donateColour = Chatter.prototype.generateColour();
    //determine donation amount. Lean towards lower donations
    //http://codetheory.in/weighted-biased-random-number-generation-with-javascript-based-on-probability/
    var rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var generateWeighedList = function (list, weight) {
        var weighed_list = [];

        // Loop over weights
        for (var i = 0; i < weight.length; i++) {
            var multiples = weight[i] * 100;

            // Loop over the list of items
            for (var j = 0; j < multiples; j++) {
                weighed_list.push(list[i]);
            }
        }

        return weighed_list;
    };

    var list = ['1', '3.22', '4.2', '10', '100', '1000'];
    var weight = [0.5, 0.15, 0.1, 0.15, 0.05, 0.01];
    var weighed_list = generateWeighedList(list, weight);

    var random_num = rand(0, weighed_list.length - 1);

    var donationAmount = weighed_list[random_num];

    //donation message text with name generator from sim.js colour doesn't work atm
    $("#donateText").find('.texts li:first').html("<span style=\"font-weight:bold; color:" + donateColour + ";\">" + donateName + "</span> " + "has donated " + '$' + parseFloat(donationAmount).toFixed(2));

    $('.tlt').textillate('start');

    setTimeout(function () {
        $('.tlt').textillate('out');
    }, 4000);

    var nameInArray = false;

    for (var i = 0; i < topDonors.length; i++) {

        if (donateName == topDonors[i].userName) {

            var newTopDonorFloat;
            newTopDonorFloat = (parseFloat(topDonors[i].money) + parseFloat(donationAmount)).toFixed(2);
            topDonors[i].money = newTopDonorFloat;
            nameInArray = true;

        }


    }

    if (nameInArray === false) {

        topDonors.push({
            userName: donateName,
            money: donationAmount
        });

    }

    topDonors.sort(function (a, b) {
        return parseFloat(b.money) - parseFloat(a.money) || a.userName.localeCompare(b.userName);
    });

    var donationTextLoopLength = topDonors.length;
    if (topDonors.length >= 10) {

        donationTextLoopLength = 10;

    }

    for (i = 0; i < donationTextLoopLength; i++) {

        $("#" + i).text(topDonors[i].userName + ' - $' + (parseFloat(topDonors[i].money)).toFixed(2));


    }

    dollarstotal += parseFloat(donationAmount);

}

//function to count up to number of followers
function followersJoin() {

    $({
        countNum: 0
    }).animate({
        countNum: followers
    }, {
        duration: 10000,
        easing: 'swing',
        step: function () {
            // What to do on every count
            currentviewers = Math.floor(this.countNum);
        },
        complete: function () {
            followersJoining = false;
            $('#startbroadcast').prop('disabled', false);
            $('#buygpu').prop('disabled', false);
            $('#buycpu').prop('disabled', false);
            $('#shopButton').prop('disabled', false);
        }
    });


}

//function to check stream blacklist
function checkBlacklist() {

    if (jQuery.inArray(upgradetier, streamerblacklist) !== -1) {

        $('#ddosOffline').text('OFFLINE');
        $('#buyupgrade').prop('disabled', true);

    } else {

        $('#ddosOffline').text('');
        $('#buyupgrade').prop('disabled', false);

    }


}

//function to stop stream
function stopStream() {

    $('#startbroadcast').text('Start Stream');
    $('#startbroadcast').addClass('btn-success').removeClass('btn-danger');
    broadcasting = false;
    followersJoining = false;
    currentviewers = 0;
    $("#onlinechecker")
        .fadeOut(200, function () {
            $("#onlinechecker").text('');
        })
        .fadeIn(200);
    streamerblacklist = [];
    $('#buyupgrade').prop('disabled', false);
    $('#ddosOffline').text('');


}

//function to start stream
function startStream() {

    $('#startbroadcast').prop('disabled', true);
    $('#shopButton').prop('disabled', true);
    $('#buygpu').prop('disabled', true);
    $('#buycpu').prop('disabled', true);
    $('#startbroadcast').text('Stop Stream');
    $('#startbroadcast').addClass('btn-danger').removeClass('btn-success');
    followersJoining = true;
    broadcasting = true;
    currentviewers += 1;
    //make followers join first
    followersJoin();
    $("#onlinechecker")
        .fadeOut(200, function () {
            $("#onlinechecker").text('LIVE');
        })
        .fadeIn(200);
    topDonors = [];
    for (var i = 0; i < 10; i++) {

        $("#" + i).text("N/A");


    }

}

//function to save
function saveProgress() {

    localStorage.setItem('exists', 'true');
    localStorage.setItem('dollarstotal', JSON.stringify(dollarstotal));
    localStorage.setItem('followers', JSON.stringify(followers));
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    localStorage.setItem('currentmonth', JSON.stringify(currentmonth));
    localStorage.setItem('cputier', JSON.stringify(cputier));
    localStorage.setItem('gputier', JSON.stringify(gputier));
    localStorage.setItem('upgradetier', JSON.stringify(upgradetier));
    localStorage.setItem('disposablegpus', JSON.stringify(disposablegpus));
    localStorage.setItem('disposablecpus', JSON.stringify(disposablecpus));


}


//cant press enter on username form
var form = document.getElementById("streamnameform");
form.onsubmit = function () {
    return false;
};

//buy upgrade
$("#buyupgrade").click(function () {
    if (broadcasting) {



        if (followersJoining === false) {

            if (dollarstotal > upgradeprice) {
                dollarstotal -= upgradeprice;
                currentviewers += upgradeviewers;
                streamerblacklist.push(upgradetier);
                $('#buyupgrade').prop('disabled', true);
                $('#ddosOffline').text('OFFLINE');
            } else {


            }

        } else {



        }

    } else {




    }



});

//upgrade previous
$("#lessupgrade").click(function () {

    if (upgradetier > 0) {

        upgradetier -= 1;

        checkBlacklist();

    } else {


    }


});

//upgrade lesser
$("#lesserupgrade").click(function () {

    if (upgradetier >= 100) {

        upgradetier -= 100;

        checkBlacklist();

    } else {


    }


});

//upgrade next
$("#moreupgrade").click(function () {

    if (upgradetier < 999) {

        upgradetier += 1;

        checkBlacklist();

    } else {


    }


});

//upgrade morer
$("#morerupgrade").click(function () {

    if (upgradetier < 899) {

        upgradetier += 100;

        checkBlacklist();

    } else {

        upgradetier += upgradenames.length - upgradetier - 1;

    }


});

//gpu give away item
$("#gpugive").click(function () {
    if (broadcasting) {



        if (followersJoining === false) {


            if (disposablegpus.length === 0) {

                $('#gpugivename').text("You need to upgrade your GPU to have one to give away");

            } else if (currentviewers > 100) {
                followers += Math.floor(1 / 10 * currentviewers);
                subscribers += Math.floor(1 / 100 * currentviewers);
                disposablegpus.splice(gpugivetier, 1);
                gpugivetier = 0;

            } else {


            }

        } else {



        }

    } else {




    }



});

//gpu give away next
$("#moregpugive").click(function () {

    if (disposablegpus.length === 0) {

        $('#gpugivename').text("You need to upgrade your GPU to have one to give away");

    } else if (gpugivetier < disposablegpus.length - 1) {

        gpugivetier += 1;

    } else {


    }




});

//gpu give away previous
$("#lessgpugive").click(function () {

    if (disposablegpus.length === 0) {

        $('#gpugivename').text("You need to upgrade your GPU to have one to give away");

    } else if (gpugivetier > 0) {

        gpugivetier -= 1;

    } else {


    }





});

//cpu give away item
$("#cpugive").click(function () {
    if (broadcasting) {



        if (followersJoining === false) {


            if (disposablecpus.length === 0) {

                $('#cpugivename').text("You need to upgrade your GPU to have one to give away");

            } else if (currentviewers > 100) {
                followers += Math.floor(1 / 10 * currentviewers);
                subscribers += Math.floor(1 / 100 * currentviewers);
                disposablecpus.splice(cpugivetier, 1);
                cpugivetier = 0;

            } else {


            }

        } else {



        }

    } else {




    }



});

//cpu give away next
$("#morecpugive").click(function () {

    if (disposablecpus.length === 0) {

        $('#cpugivename').text("You need to upgrade your GPU to have one to give away");

    } else if (cpugivetier < disposablecpus.length - 1) {

        cpugivetier += 1;

    } else {


    }




});

//cpu give away previous
$("#lesscpugive").click(function () {

    if (disposablecpus.length === 0) {

        $('#cpugivename').text("You need to upgrade your GPU to have one to give away");

    } else if (cpugivetier > 0) {

        cpugivetier -= 1;

    } else {


    }





});

//upgrade cpu and shut down stream add to disposable
$("#buycpu").click(function () {

    if (cputier < (cpunames.length) - 1) {
        if (dollarstotal > cpuprice) {
            dollarstotal -= cpuprice;
            disposablecpus.push(cputier);
            cputier += 1;
            stopStream();
        } else {


        }
    }

});

//upgrade gpu and shut down stream add to disposable
$("#buygpu").click(function () {


    if (gputier < (gpunames.length) - 1) {
        if (dollarstotal > gpuprice) {
            dollarstotal -= gpuprice;
            disposablegpus.push(gputier);
            gputier += 1;
            stopStream();
        } else {


        }
    }


});

//save game using localstorage
$("#save").click(function () {

    saveProgress();

});

//reset game using localstorage
$("#reset").click(function () {

    localStorage.clear();
    location.reload();

});


//start broadcasting to the masses
$("#startbroadcast").click(function () {


    if (followersJoining === false) {

        //go offline if you're already broadcasting, else start the broadcast
        if (broadcasting) {

            stopStream();

        } else {

            startStream();

        }

    } else {


    }




});

//run an advert and disable button for 30 seconds
$("#runadvert").click(function () {

    $('.popover').remove();

    var count = 30;

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            //counter ended, do something here

            $('#runadvert').prop('disabled', false);
            $('#runadvert').text('Run Advert');
            return;
        }

        //Do code for showing the number of seconds here
        $('#runadvert').text(count);
    }

    dollarstotal += currentviewers * 0.002;
    $('#runadvert').prop('disabled', true);

});

//update fps visually based on minfps and maxfps || updates current viewers to make it seem more realistic (at .5 sec per update)
setInterval(function () {

        maxfps = cputier + gputier;
        minfps = maxfps - Math.floor((Math.min(cputier, gputier) / 3) + 1);
        var number = Math.floor(Math.random() * (maxfps - minfps + 1) + minfps);
        if (number > 0) {

            $('#fps').text(number + ' FPS');

        }


        $('#currentviewers').text(Math.floor(currentviewers));

    },
    500); // every .5 second

//determine chance of sending a donation max 1 every 7 seconds
setInterval(function () {

        var donationDecider = (Math.floor(Math.random() * (100000 - 1 + 1) + 1)) + currentviewers;

        if (broadcasting) {

            if (donationDecider >= 95000) {

                donationMessage();

            }

        }




    },
    7000); // every 7 seconds

//update followers per second & subscribers per second & viewers per second & dollarspersecond based on viewers
setInterval(function () {

        dollarspersecond = 0.0001 * currentviewers;

        if (broadcasting) {

            followerspersecond = (currentviewers / 5000);
            subscribersspersecond = (followerspersecond / 97.341);

            if (followersJoining === false) {

                viewerspersecond = (currentviewers / 1000) + 1 + ((cputier + gputier) * 2);

            } else {

                viewerspersecond = 0;

            }

        } else {


            viewerspersecond = 0;
            followerspersecond = 0;
            subscribersspersecond = 0;

        }

        upgradeviewers = 1 + upgradetier * upgradetier * upgradetier;



    },
    10); // every .1 second

//update current month and save game
setInterval(function () {

        if (currentmonth == 11) {

            currentmonth = 0;

        } else {

            currentmonth += 1;

        }

        dollarstotal += subscribers * 2.5;

        saveProgress();

    },
    60000); // every minute

//increase subscribers & followers & current viewers & totaldollars every second
setInterval(function () {
        dollarstotal += dollarspersecond;
        currentviewers += viewerspersecond;
        subscribers += subscribersspersecond;
        followers += followerspersecond;
    },
    1000); // every 1 second

//display certain labels quickly
setInterval(function () {
        $('#dollarstotal').text('$' + dollarstotal.toFixed(2));
        $('#dollarspersecond').text('$' + dollarspersecond.toFixed(2) + '/s');
        $('#currentmonth').text('Month: ' + months[currentmonth]);
        $('#followers').text(+Math.floor(followers));
        $('#subscribers').text(Math.floor(subscribers));
        if (cputier == (cpunames.length) - 1) {
            $('#cpuname').text("... nevermind, CPU Maxed out!");
            $('#buycpu').text("Congratulations!");
        } else {
            $('#cpuname').text(cpunames[cputier + 1]);
            $('#buycpu').text('$' + cpuprice.toFixed(2));
        }
        if (gputier == (gpunames.length) - 1) {
            $('#gpuname').text("... nevermind, GPU Maxed out!");
            $('#buygpu').text("Congratulations!");
        } else {
            $('#gpuname').text(gpunames[gputier + 1]);
            $('#buygpu').text('$' + gpuprice.toFixed(2));
        }
        $('#upgradename').text(upgradenames[upgradetier]);
        $('#currentcpu').text(cpunames[cputier]);
        $('#currentgpu').text(gpunames[gputier]);
        $('#cpupower').attr('value', cputier);
        $('#cpupower').attr('max', cpunames.length);
        $('#gpupower').attr('value', gputier);
        $('#gpupower').attr('max', gpunames.length);
        $('#gpupowerpercent').text('GPU Potential Power... ' + (Math.floor((gputier / (gpunames.length - 1)) * 100)) + "%");
        $('#cpupowerpercent').text('CPU Potential Power... ' + (Math.floor((cputier / (cpunames.length - 1)) * 100)) + "%");
        $('#viewerspersecond').text(Math.floor(viewerspersecond) + '/s');
        $('#upgradeworth').text(upgradeviewers);
        //don't update price if it's already the price of the last upgrade
        if (upgradeprice == upgradenames.length * upgradetier + 1) {


        } else {

            upgradeprice = upgradetier * upgradetier + 1;

        }

        if (cpuprice == cpunames.length * cputier + 1) {


        } else {

            cpuprice = cputier * cputier + 1;

        }

        if (gpuprice == gpunames.length * gputier + 1) {


        } else {

            gpuprice = gputier * gputier + 1;

        }
        $('#vsbonus').text(1 + ((cputier + gputier) * 2));
        //set giveaway label names
        if (disposablecpus.length === 0) {
            $('#cpugivename').text("You need to upgrade your CPU to have one to give away");
        } else {
            $('#cpugivename').text(cpunames[disposablecpus[cpugivetier]]);
        }

        if (disposablegpus.length === 0) {
            $('#gpugivename').text("You need to upgrade your GPU to have one to give away");
        } else {
            $('#gpugivename').text(gpunames[disposablegpus[gpugivetier]]);
        }
        $('#giveSubscriberGain').text(Math.floor(1 / 100 * currentviewers));
        $('#giveFollowerGain').text(Math.floor(1 / 10 * currentviewers));
        $('#subMoneyMonth').text((Math.floor(subscribers) * 2.5).toFixed(2));
        $('#buyupgrade').text('$' + upgradeprice.toFixed(2));
        $("#twitchid").prop("href", "https://www.twitch.tv/" + upgradenames[upgradetier]);
    },
    10); // every .1 second
