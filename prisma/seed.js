import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const albumData = [
  {
    rank: 112,
    artist: "Elton John",
    album: "Goodbye Yellow Brick Road",
    description:
      "Elton John compared this double album to the Beatles’ White Album, and why not? He was by this point the most consistent hitmaker since the Fab Four, and soon enough he would be recording with John Lennon. Everything about Goodbye Yellow Brick Road was supersonically huge, from the Wagnerian-opera-like combo of “Funeral for a Friend” and “Love Lies Bleeding” to the electric boots and mohair suit of “Bennie and the Jets.” “Saturday Night’s Alright for Fighting” was strutting rock & roll, “Candle in the Wind” paid tribute to Marilyn Monroe (and later, Princess Diana), and the title track harnessed the fantastical imagery of glam to a Gershwin-sweet melody.",
    link: "https://open.spotify.com/album/5WupqgR68HfuHt3BMJtgun",
    image: "https://i.scdn.co/image/ab67616d0000b273f72f1e38e9bd48f18a17ed9b",
  },
  {
    rank: 12,
    artist: "Michael Jackson",
    album: "Thriller",
    description:
      "Michael Jackson towered over the Eighties the way no superstar before or since has dominated an era — not even Elvis or the Beatles. And Thriller is the reason why. Still in his early twenties, the R&B child star of the 1970s had ripened into a Technicolor soul man: a singer, dancer, and songwriter with incomparable crossover instincts.\n \n He and producer Quincy Jones established the something-for-everyone template of Thriller on 1979’s Off the Wall [see No. 36], on which Jackson captures the rare mania of his life — the applause and paranoia, the need for love and the fear of commitment — in a crisp fusion of pop hooks and dance beats. On Thriller, the pair heighten the sheen (the jaunty gloss of “The Girl Is Mine,” with a guest vocal by Paul McCartney), pump up\nthe theater (the horror-movie spectacular “Thriller”), and deepen the funk. With its locomotive cadence and an acrobatic metal-guitar solo by Eddie Van Halen, “Beat It” was arguably the first industrial-disco Number One.\n \n It is hard now to separate Thriller from its commercial stature (Number One for 37 weeks, 33 million copies sold), the nightmarish tabloid celebrity that led to Jackson’s death, and the horrific revelations about him that have surfaced in recent years. But there was a time when we only knew Jackson as the King of Pop. This is it.",
    link: "https://open.spotify.com/album/1C2h7mLntPSeVYciMRTF4a",
    image: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
  },
  {
    rank: 113,
    artist: "The Smiths",
    album: "The Queen Is Dead",
    description:
      "Morrissey’s maudlin moanings have never been more acidic or self-aware than on the Smiths’ third studio album: “A dreaded sunny day, so let’s go where we’re happy/And I meet you at the cemetery gates,” indeed. Johnny Marr is the sugar to Morrissey’s rock salt, and his layered webs of guitar riffs and arpeggios, often in unconventional tunings, build a shifting but stable platform for Morrissey to croon about the drudgery of employment or being cruelly, cruelly shunned by the world. It’s mope rock with its eye on grandeur: With “Bigmouth Strikes Again,” Marr said, “I was trying to write my ‘Jumpin’ Jack Flash.’”",
    link: "https://open.spotify.com/album/5Y0p2XCgRRIjna91aQE8q7",
    image: "https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9",
  },
  {
    rank: 264,
    artist: "Pink Floyd",
    album: "Wish You Were Here",
    description:
      "For the follow-up to Dark Side of the Moon, Pink Floyd got even darker, exploring their main themes of lunacy and alienation. The poignant title ballad is a lament for their ex-bandmate Syd Barrett, one of the Sixties’ saddest acid casualties. They pay tribute in “Shine On You Crazy Diamond,” a 26-minute, nine-part suite that both opens and closes the album, with David Gilmour’s elegiac guitar. They also skewer the music business in “Have a Cigar” and “Welcome to the Machine.”",
    link: "https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw",
    image: "https://i.scdn.co/image/ab67616d0000b2731a84d71391df7469c5ab8539",
  },
  {
    rank: 475,
    artist: "Sheryl Crow",
    album: "Sheryl Crow",
    description:
      "The Missouri gal finally got to make an album her way, in 1996, with her self-titled, self-produced smash — an ingenious mix of roots-rock raunch and vengeful wit. As Crow told Rolling Stone, “My only objective on this record was to get under people’s skin, because I was feeling like I had so much shit to hurl at the tape.” “Every Day Is a Winding Road” and “A Change Would Do You Good” rock like a feminist Exile on Main Street, while “If It Makes You Happy” became an anthem for bad girls of all ages.",
    link: "https://open.spotify.com/album/3w7TTi80vZApF0rQE5DMYb",
    image: "https://i.scdn.co/image/ab67616d0000b273b3ed19f9985ca08a7a30f6c4",
  },
  {
    rank: 131,
    artist: "Portishead",
    album: "Dummy",
    description:
      "It’s difficult to sustain, over an entire album, something as vague as ambiance, but Portishead did it on their debut. Along with fellow Bristol, England, innovators Massive Attack, they headed up the trendy mid-Nineties trip-hop movement. Long after the genre petered out, their debut remains immersive and haunting, built on skittering break beats, jazzy samples, spare arrangements, and discomforting pauses. But it’s singer Beth Gibbon’s brooding, pop-cabaret vocals that make it feel classic, hinting at real pain below trip-hop’s stoned exterior. The result was cinematic enough to recall John Barry’s lustrous scores for James Bond films.",
    link: "https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno",
    image: "https://i.scdn.co/image/ab67616d0000b273dc20397b139223620af148f6",
  },
  {
    rank: 498,
    artist: "Suicide",
    album: "Suicide",
    description:
      "These New York synth-punks evoke everything from the Velvet Underground to rockabilly. Martin Rev’s low-budget electronics are violent and hypnotic; Alan Vega screams as a rhythmic device. Late-night listening to “Frankie Teardrop,” a 10-minute-plus tale of a multiple murder, is not recommended. A droning voice in the wilderness when they appeared in the Seventies, the duo would influence bands from Arcade Fire and the National to Bruce Springsteen, who covered Suicide live in 2016.",
    link: "https://open.spotify.com/album/6y0bYi0XTNsGQzbKMYNxg1",
    image: "https://i.scdn.co/image/ab67616d0000b2734b3656b847d344d9ad53be34",
  },
  {
    rank: 429,
    artist: "The Four Tops",
    album: "Reach Out",
    description:
      "The Four Tops were the most dramatic of the Motown singing groups, driven by the towering vocals of Levi Stubbs. Reach Out has overwrought classics like the title track, the goth-soul tsunami “7 Rooms of Gloom,” and “Bernadette,” on which lust and paranoia spontaneously combust. They also branch out into rock and folk with covers of the Monkees and Tim Hardin. It was the last Motown album for the label’s definitive songwriting team Holland, Dozier, and Holland.",
    link: "https://open.spotify.com/album/4Jw0RycAqlXeAoymbc0CYp",
    image: "https://i.scdn.co/image/ab67616d0000b27347d4f42187d70ddbaac864a2",
  },
  {
    rank: 313,
    artist: "PJ Harvey",
    album: "Stories From the City, Stories From the Sea",
    description:
      "Polly Jean Harvey happy? Album number five found her in New York and in love, crowing “I’m immortal/When I’m with you” in the surging opener, “Big Exit.” Harvey had spent four records howling her sexual obsessions and romantic disappointments over stark postmodern blues. Her guitar attack was still forceful, but softened around the edges by marimba, piano, organ, and guest vocalist Thom Yorke, especially on the garage-y “Good Fortune” and the yearning “A Place Called Home” — mash notes to lovers in the big city.",
    link: "https://open.spotify.com/album/0hBWhJEmVyNPG2Jq71CJXz",
    image: "https://i.scdn.co/image/ab67616d0000b27309e4ac9a68d9ea5ef0ad9b05",
  },
  {
    rank: 455,
    artist: "Bo Diddley",
    album: "Bo Diddley/Go Bo Diddley",
    description:
      "Diddley’s influence on rock & roll is inestimable, from the off-kilter rhythmic thump of “Pretty Thing” to his revved-up take on singing the blues. This album — a repackaging of his first two records — has many of his best singles, including “I’m a Man” and “Who Do You Love?” Bands immediately started ripping off his signature rollicking beat, and they haven’t stopped yet — including many on this list, from Bruce Springsteen on Born to Run’s “She’s the One” to George Michael on “Faith.”",
    link: "https://open.spotify.com/album/71lvfHjjLerIFN8ZNSrqIe",
    image: "https://i.scdn.co/image/ab67616d0000b273b8179bbbb0fbcc3aa980cb6d",
  },
  {
    rank: 317,
    artist: "Billie Holiday",
    album: "Lady in Satin",
    description:
      "By the time she cut this album in 1958, Billie Holiday had lived several lives, battling drug and alcohol addiction and emerging with a battered psyche and a delivery to match. Holiday had trouble remembering lyrics and sounded weathered no matter if the song was hopeful or desolate. But on what amounts to one of the last great saloon-pop albums of the rock era, her voice retained its supple, distinctive tone, and Ray Ellis’ elegant orchestrations supported and cushioned her — a year before her death.",
    link: "https://open.spotify.com/album/4LrLP7DM1KBj8r2Sc098JA",
    image: "https://i.scdn.co/image/ab67616d0000b2730d8f3ef58cefad0ec738f3dd",
  },
  {
    rank: 459,
    artist: "Kid Cudi",
    album: "Man on the Moon: The End of the Day",
    description:
      "Kid Cudi helped Kanye West shape his introspective R&B/hip-hop hybrid 808s & Heartbreak. On his debut LP, the Cleveland rapper took that sound further and deeper, merging emo and psychedelic rock with hip-hop bombast. His introspect runs the gamut from the severe depression of “Day ‘n’ Nite” to the sweet contentment of “Pursuit of Happiness,” both of which became unlikely hits. A decade after Man on the Moon, every chart is dominated by Kudi’s sad children.",
    link: "https://open.spotify.com/album/2S8AWAM0nxyFy66YnUfIs3",
    image: "https://i.scdn.co/image/ab67616d0000b273a487deeecb334b6619489d74",
  },
  {
    rank: 452,
    artist: "Diana Ross and the Supremes",
    album: "Anthology",
    description:
      "In the heyday of Motown, the Supremes were their own hit factory, all glamour and heartbreak. Diana Ross and her girls ruled the radio with tunes from the Motown brain trust of Holland, Dozier, and Holland. The Supremes could blaze with confidence, as in “Come See About Me.” Or they could sound elegantly morose, as in “My World Is Empty Without You” and “Where Did Our Love Go?” But in “Love Is Like an Itching in My Heart,” when Miss Ross gulps, “There ain’t nothing I can do about it,” it’s a spine-tingling moment.",
    link: "https://open.spotify.com/album/5gX0Oedkr1IgRO8OXhUR5k",
    image: "https://i.scdn.co/image/ab67616d0000b27315ce28386972806e354b483f",
  },
  {
    rank: 35,
    artist: "The Beatles",
    album: "Rubber Soul",
    description:
      "Producer George Martin described Rubber Soul as “the first album to present a new, growing Beatles to the world,” and so it was. The first of what was to be a series of huge leaps forward with each new album, Rubber Soul opens with the comic character study “Drive My Car” and is suffused with Bob Dylan’s inﬂuence on “I’m Looking Through You,” “You Won’t See Me,” and “Norwegian Wood,” in which John Lennon sings about sex with a humor and candor unlike any rock & roller before and George Harrison lays down rock’s first sitar solo. Harrison called Rubber Soul “the best one we made,” because “we were suddenly hearing sounds that we weren’t able to hear before.”",
    link: "https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm",
    image: "https://i.scdn.co/image/ab67616d0000b273ed801e58a9ababdea6ac7ce4",
  },
  {
    rank: 381,
    artist: "Lynyrd Skynyrd",
    album: "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)",
    description:
      "Southern-rock icons Lynyrd Skynyrd took their name from their high school gym teacher, Leonard Skinner, who tried to make them cut their hair. (He later became a fan.) Skynyrd lived fast, played hard, and went down in a tragic 1977 plane crash. On their debut, Ronnie Van Zant flexes his wiseass drawl in “Gimme Three Steps,” protests racism in “Things Goin’ On,” and honors his mama in “Simple Man.” But the peak is “Free Bird,” nine minutes of dueling guitars from Allen Collins and Gary Rossington — now and forever, the ultimate air-guitar epic.",
    link: "https://open.spotify.com/album/6DExt1eX4lflLacVjHHbOs",
    image: "https://i.scdn.co/image/ab67616d0000b273128450651c9f0442780d8eb8",
  },
  {
    rank: 142,
    artist: "Bruce Springsteen",
    album: "Born in the U.S.A.",
    description:
      "Bruce Springsteen wrote most of these songs in a fit of inspiration that also gave birth to the harrowing Nebraska [see No. 150]. “Particularly on the first side, it’s actually written very much like Nebraska,” he said. “The characters and the stories, the style of writing — except it’s just in the rock-band setting.” It was a crucial difference: The E Street Band put so much punch into the title song that millions misheard its questioning allegiance as mere flag-waving instead. The immortal force of the album is in Springsteen’s frank mix of soaring optimism and the feeling of, as he put it, being “handcuffed to the bumper of a state trooper’s Ford.”",
    link: "https://open.spotify.com/album/0PMasrHdpaoIRuHuhHp72O",
    image: "https://i.scdn.co/image/ab67616d0000b273a7865e686c36a4adda6c9978",
  },
  {
    rank: 230,
    artist: "Rihanna",
    album: "Anti",
    description:
      "After dominating the Top 40 for years, Rihanna wanted to make an ambitious album-statement, brilliantly sustaining the tipsy two-in-the-morning vibe of this moody midcareer reinvention. “I just gravitated toward the songs that were … the things I want to listen to,” she said. “The things that I want to smoke to.” On Anti, she recast pop as her own hazy playground, referencing Dido and hair metal, covering Tame Impala, and merging dancehall and torch ballads.",
    link: "https://open.spotify.com/album/4UlGauD7ROb3YbVOFMgW5u",
    image: "https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093",
  },
  {
    rank: 162,
    artist: "Pulp",
    album: "Different Class",
    description:
      "Pulp blew up in the Brit-pop scene of the 1990s, yet Jarvis Cocker outclassed all his rivals as a master storyteller and wit. This man was a born rock star in the Bowie mode, striking a pose in his thrift-shop razzmatazz, but with his own sly sense of compassion. On Different Class, he croons his breathy tales of working-class lust, envy, and dread, over the swishy, trash-disco grooves of “Common People” and “Disco 2000.” You can hear the shabby glamour in his voice when he sighs, “I’ve kissed your mother twice/And now I’m working on your dad.” But in the finale, “Bar Italia,” he makes a post-clubbing hangover sound like the most romantic adventure in the world.",
    link: "https://open.spotify.com/album/3ly9T2L4pqTZijFgQssd3x",
    image: "https://i.scdn.co/image/ab67616d0000b273fd952bece8f049dbcd7df93f",
  },
  {
    rank: 297,
    artist: "Peter Gabriel",
    album: "So",
    description:
      "Peter Gabriel got funky on the 1982 single “Shock the Monkey,” and it took him four years to follow up the hit. The similarly visceral “Sledgehammer” slammed So into the mainstream, and its hold on radio and MTV deepened with the upbeat “Big Time,” the gothic love ballad “In Your Eyes” (beautifully employed by filmmaker Cameron Crowe in Say Anything), and the inspirational “Don’t Give Up,” a duet with Kate Bush, who was shown locked in a five-minute embrace with Gabriel in the video.",
    link: "https://open.spotify.com/album/1vJ8rCzq6BJtKGz9Yf6oT3",
    image: "https://i.scdn.co/image/ab67616d0000b273cd877891b23a92b1a89e60b5",
  },
  {
    rank: 17,
    artist: "Kanye West",
    album: "My Beautiful Dark Twisted Fantasy",
    description:
      "Our relationship with Kanye West was still in its love-hate phase when he created the 21st century’s most awe-inspiring hip-hop masterpiece. It’s an album every bit as chaotic as he was at the time — from the creepy funk of “Gorgeous” to the crushing attack of “Hell of a Life.” After his Taylor Swift VMAs fiasco in 2009, West went into a kind of self-exile, eventually ending up in Hawaii, where he imported a huge group of collaborators who included Justin Vernon of Bon Iver, Nicki Minaj, and RZA.\nIn all-night recording sessions, he’d ping between studios, sculpting his most maximalist music ever; “a song like ‘Power’ took 5,000 hours,” he later said, “like literally.” West pulled from everywhere — Elton John played on “All of the Lights,” and “Power” sampled prog-rockers King Crimson. West’s sense of his own grandiose ambitions bordered on the comical; during the writing process for the nine-minute “Runaway,” he famously told guest rapper Pusha T to add “more douchebag” to his verses. The resulting track opened with just a single, eerie piano note before building into a mountainous, anarchic tune that incorporated everything from a Rick James sample to a vocoder that evoked Robert Fripp’s guitar playing on Brian Eno albums.\nThe sonic overkill was lavish, but the record hit so hard because he mixed megalomania with introspect; “You been puttin’ up wit’ my shit just way too long,” he rapped on “Runaway.” West later called Dark Fantasy an apology record.” Perhaps. In any case, that wisdom has proved fleeting.",
    link: "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv",
    image: "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
  },
  {
    rank: 492,
    artist: "Bonnie Raitt",
    album: "Nick of Time",
    description:
      "After being dumped by her previous label, blues rocker Bonnie Raitt exacted revenge with this multiplatinum Grammy-award winner, led by an on-fire version of John Hiatt’s “Thing Called Love” and the brilliant title track, a study in midlife crisis told from a woman’s perspective. Producer Don Was helped her sharpen the songs without sacrificing any of her slide-guitar fire. And as Raitt herself pointed out, her 10th try was “my first sober album.”",
    link: "https://open.spotify.com/album/6wxpS5o0ty5CLqyH5fIRln",
    image: "https://i.scdn.co/image/ab67616d0000b273245c235e7ecf5e8c6969759f",
  },
  {
    rank: 255,
    artist: "Bob Dylan",
    album: "The Freewheelin' Bob Dylan",
    description:
      "Bob Dylan’s second LP was released on May 27th, 1963 – three days after his 22nd birthday. It was a tender age for such a triumph. On Freewheelin’, the poetry and articulate fury of Dylan’s lyrics and his simple, compelling melodies transformed American popular songwriting. His wholly original grip on grit, truth, and beauty in “A Hard Rain’s A-Gonna Fall” and “Masters of War” still changes everyone who hears this album, four decades later.",
    link: "https://open.spotify.com/album/0o1uFxZ1VTviqvNaYkTJek",
    image: "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573",
  },
  {
    rank: 382,
    artist: "Tame Impala",
    album: "Currents",
    description:
      "Aussie studio wiz Kevin Parker found surprising mainstream success with his band’s refined neo-psychedelia, thanks in large part to the danceable ease of songs like the hit “Let It Happen.” Tame Impala’s breakthrough is a modern take on trippy bliss, burying vague intimations of displacement and anxiety under pillows of soft, neon synths and Parker’s twee-Bee Gees falsetto. After Currents, he was getting calls to work with Lady Gaga and Kanye West, and Rihanna was covering one of his songs.",
    link: "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv",
    image: "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
  },
  {
    rank: 424,
    artist: "Beck",
    album: "Odelay",
    description:
      "Burrowing into the studio with the Dust Brothers, Beck came back with a Technicolor version of his Woody Guthrie-meets-Grandmaster Flash vision, demonstrating to all his rock peers on “Devil’s Haircut” and “Where It’s At” that turntables had a brighter future than refried grunge, while reminding listeners of the Sixties and his own folk roots with the shabby, lovely “Jack-Ass.” As he told Rolling Stone in 1997, “I’m a traditionalist in a lot of ways. A lot of what my generation is into, what it represents, I’m totally against.”",
    link: "https://open.spotify.com/album/1Pus5h1qGedCn4CtOuPVtp",
    image: "https://i.scdn.co/image/ab67616d0000b2733eedff0a0202da69fe1078de",
  },
  {
    rank: 380,
    artist: "Charles Mingus",
    album: "Mingus Ah Um",
    description:
      "Charles Mingus filtered the vibrancy and romance of his hero Duke Ellington’s big-band orchestrations into hard-driving bop, leading his own band through a torrid, gospel inspired rave-up (“Better Git It in Your Soul”), a sly protest song (“Fables of Faubus,” aimed at Arkansas’ segregationist governor), and a mournful elegy (“Goodbye Pork Pie Hat,” dedicated to tenor great Lester Young). Ah Um is the place to hear why Mingus deserves a place in any survey of America’s greatest composers, regardless of genre.",
    link: "https://open.spotify.com/album/7pojWP7x9uEFSJgw765khA",
    image: "https://i.scdn.co/image/ab67616d0000b273aa397a43547cd41e228a3063",
  },
  {
    rank: 362,
    artist: "Luther Vandross",
    album: "Never Too Much",
    description:
      "In the Seventies, Luther Vandross sang backup for Sister Sledge and Roberta Flack and co-wrote David Bowie’s “Fascination.” As a solo artist, he embodied sophisticated soul in the post-disco era. His debut LP shows off a dazzling range that came almost too easily — from the title track, one of the defining dance-funk hits of the Eighties, to his stunning rendition of the Burt Bacharach and Hal David classic “A House Is Not a Home,” which made the song uncoverable for future generations of singers.",
    link: "https://open.spotify.com/album/1B4oPgG5ljWTRxsKcTHAYn",
    image: "https://i.scdn.co/image/ab67616d0000b2734c614878cb234061701cac6c",
  },
  {
    rank: 103,
    artist: "De La Soul",
    album: "Three Feet High And Rising",
    description:
      "Long Island high school friends Posdnuos, Trugoy, and Maseo linked up with Stetsasonic DJ Prince Paul to create a left-field hip-hop masterpiece, heralding a “D.A.I.S.Y. Age” and weaving samples of Steely Dan, Malcolm McLaren, and Johnny Cash with raps about everything from Public Enemy-style politics (“Ghetto Thang”) to individualism (“Take It Off”) to body odor (“A Little Bit of Soap”). “There was no plan back then,” Trugoy told Rolling Stone in 2009. Indeed, De La Soul’s anything-goes spirit sparked generations of oddballs to rise up and get theirs.",
    link: "https://www.youtube.com/watch?v=IEZ8SzfRZBo",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/DeLaSoul3FeetHighandRisingalbumcover.jpg",
  },
  {
    rank: 118,
    artist: "The Eagles",
    album: "Hotel California",
    description:
      "In pursuit of note-perfect Hollywood-cowboy ennui, the Eagles spent eight months in the studio polishing take after take after take. As Don Henley recalled: “We just locked ourselves in. We had a refrigerator, a ping-pong table, roller skates, and a couple of cots. We would go in and stay for two or three days at a time.” With guitarist Joe Walsh replacing Bernie Leadon, the band backed off from straight country rock in favor of the harder sound of “Life in the Fast Lane.” The highlight is the title track, a monument to the rock-aristocrat decadence of the day and a feast of triple-guitar interplay. “Every band has their peak,” Henley said. “That was ours.”",
    link: "https://open.spotify.com/album/2widuo17g5CEC66IbzveRu",
    image: "https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778",
  },
  {
    rank: 262,
    artist: "New Order",
    album: "Power, Corruption & Lies",
    description:
      "On Power, Corruption & Lies, Manchester, England’s New Order fully moved past the death of Joy Division’s Ian Curtis to create a gloriously danceable synth-rock breakthrough. It was a whole new sound, heavily influenced by their early tours of America. “In England, clubs played dead-straight cheesy music,” said frontman Bernard Sumner, “but in America, they played the Clash, funk, a great mix of black and white music, and American dance music, early electronic music.… We were right there, and this new sound found us.”",
    link: "https://open.spotify.com/album/6NTrwu1XJ56jBPx7HMksbZ",
    image: "https://i.scdn.co/image/ab67616d0000b273a0bb93884823982d57cb2004",
  },
  {
    rank: 1,
    artist: "Marvin Gaye",
    album: "What's Going On",
    description:
      "Marvin Gaye’s masterpiece began as a reaction to police brutality. In May 1969, Renaldo “Obie” Benson, the Four Tops’ bass singer, watched TV coverage of hundreds of club-wielding cops breaking up the People’s Park, a protest hub in Berkeley. Aghast at the violence, Benson began to write a song with Motown lyricist Al Cleveland, trying to capture the confusion and pain of the times. He knew he had something big in his nascent version of “What’s Going On,” but the rest of the Four Tops weren’t interested, and Benson’s efforts to get Joan Baez to record it didn’t work out, either.\nBut one of Motown’s biggest stars and greatest voices turned out to be more receptive. Gaye was in a dark and contemplative place, wounded by the death of his frequent duet partner Tammi Terrell, yearning to sing subtler and more substantive material, and mulling over his brother Frankie’s horrifying tales of his recent stint fighting in Vietnam. Gaye had been keeping busy writing for and producing a group called the Originals, and trying to figure out what was next. “I’d been stumbling around for an idea,” he told biographer David Ritz. “I knew there was more inside me. And that was something no record executive or producer could see. But I saw it. I knew I had to get out there.”\nAfter some hesitation, Gaye embraced “What’s Going On,” and with the help of arranger David Van De Pitte, crafted a version of the song that was jazzier and more sophisticated than any Motown recording to date, layering cinematic strings over James Jamerson’s supernaturally sinuous bass line and a polyrhythmic groove. Gaye unleashed one of his most spectacular vocal performances in a career full of them, scatting and improvising around the main melody.\nMotown Records founder Berry Gordy initially resisted releasing “What’s Going On,” telling Gaye that he thought scatting was out of date and protest lyrics were too commercially risky. But when the song became an instant hit, Gordy gave Gaye a single month to craft an album to accompany “What’s Going On.” Gaye more than rose to the challenge. “I work best under pressure and when I’m depressed,” he told the Detroit Free Press at the time. “The world’s never been as depressing as it is right now. We’re killing the planet, killing our young men in the streets, and going to war around the world. Human rights … that’s the theme.”\nWhat emerged was soul music’s first concept album, and one of the most important and influential LPs ever made. John Legend recently described it as “the voice of black America speaking out that we couldn’t always smile on cue for you.” Building it all around one finished song lent What’s Going On a musical and thematic through line. “What’s Happening Brother” assumes the voice of a Vietnam vet like Gaye’s brother, puzzled by a changing America and looking for work; “Mercy Mercy Me (The Ecology)” is a taut ode to the environment; “Flyin’ High (In the Friendly Sky)” takes on drug addiction.\nAfter What’s Going On, black musicians at Motown and elsewhere felt a new freedom to push the musical and political boundaries of their art. “When I was struggling for the right of the Motown artist to express himself,” Gaye said, “Stevie [Wonder] knew I was also struggling for him.”\nAt the end of the final song on What’s Going On, the lament “Inner City Blues (Make Me Wanna Holler),” the music shifts back into a jazzier reprise of the title track. As the album fades out, the groove continues on. Five decades later, it still hasn’t stopped.",
    link: "https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B",
    image: "https://i.scdn.co/image/ab67616d0000b273b36949bee43217351961ffbc",
  },
  {
    rank: 353,
    artist: "The Cars",
    album: "The Cars",
    description:
      "“We used to joke that the first album should be called The Cars’ Greatest Hits,” said guitarist Elliot Easton. Their debut was arty and punchy enough to be part of Boston’s New Wave scene, and yet so catchy that nearly every track (“My Best Friend’s Girl,” “Just What I Needed”) landed on the radio. When Ric Ocasek died in 2019, Eason offered a fitting tribute: “If the goal was to have great success making pop music with a sense of irony, then mission accomplished, right?”",
    link: "https://open.spotify.com/album/4tJPWT4r4FSKwy784Qs1Fq",
    image: "https://i.scdn.co/image/ab67616d0000b27361e11cce99aab86cb1ce253b",
  },
  {
    rank: 260,
    artist: "The Slits",
    album: "Cut",
    description:
      "Avant-garde you can dance to — that’s the Slits’ Cut in a nutshell. The British group’s raucous debut took the best of late-Seventies post-punk’s favorite genre influences (dub, girl groups, abstract jazz), tossed them all into a blender, and somehow ended up with joyously anarchic songs like “Shoplifting,” with its awesome catchphrase, “We pay fuck-all!” Kurt Cobain would call “Typical Girls” one of the best songs ever recorded, and we can’t help but agree.",
    link: "https://open.spotify.com/album/6ppPT0aXOtsAlG1QQVB9E0",
    image: "https://i.scdn.co/image/ab67616d0000b2739ae7f031fd4906adc9bcedfe",
  },
  {
    rank: 203,
    artist: "Nick Drake",
    album: "Pink Moon",
    description:
      "Nick Drake recorded his last album in a couple of nights, mailed the tapes to Island Records, and checked himself into a psychiatric ward. If the music were as dark as the lyrics, it might be unlistenable. But Drake’s soothing vocals and unadorned acoustic picking unfold with supernatural tenderness. Few heard Pink Moon when it was released, but its stark beauty has touched the intimate bedroom folk of Cat Power, Elliott Smith, and many others.",
    link: "https://open.spotify.com/album/5mwOo1zikswhmfHvtqVSXg",
    image: "https://i.scdn.co/image/ab67616d0000b273e369195caf5d169bf5e9eafc",
  },
  {
    rank: 176,
    artist: "Public Enemy",
    album: "Fear of a Black Planet",
    description:
      "Public Enemy derived the title of their pyrophoric third album from the writing of Dr. Frances Cress Welsing, a professor who theorized that the purpose of racism was to assure “white genetic survival.” (That’s her speaking in the first few bars of “Meet the G That Killed Me.”) The lyrical flap surrounding “Welcome to the Terrordome” couldn’t overwhelm Public Enemy’s widescreen vision of hip-hop, which included the righteous noise of “Fight the Power,” the uplifting sentiment of “Brothers Gonna Work It Out,” and the agit-funk of “911 Is a Joke.”",
    link: "https://open.spotify.com/album/0aFNb4RDk2hmKKLa0bzXNz",
    image: "https://i.scdn.co/image/ab67616d0000b2732e3d1de8b2f61a477ae1ed6c",
  },
  {
    rank: 138,
    artist: "Madonna",
    album: "The Immaculate Collection",
    description:
      "Like the 1987 remix album, You Can Dance, this is a perfect Madonna CD: nothing but good songs. You get timeless pop such as “Holiday,” provocations like “Papa Don’t Preach,” dance classics like “Into the Groove,” and a new Lenny Kravitz-co-produced sex jam, “Justify My Love,” which samples Public Enemy.",
    link: "https://open.spotify.com/album/5MzwGwnO9gkh0z6Nl4FF8h",
    image: "https://i.scdn.co/image/ab67616d0000b273a89b9d4d5b48d600a8efa036",
  },
  {
    rank: 83,
    artist: "Dusty Springfield",
    album: "Dusty in Memphis",
    description:
      "Born in London, Dusty Springfield was a great soul singer hidden inside a white British pop queen — racking up Motown-style hits such as “I Only Want to Be With You” — when Atlantic producer Jerry Wexler brought her way down South, to Memphis, to make this album. She was so intimidated by the idea of recording with session guys from her favorite Aretha Franklin and Otis Redding hits that she never actually managed to sing a note there. Her vocals were overdubbed later, when the sessions moved to New York. But the result was blazing soul and sexual honesty (“Breakfast in Bed,” “Son of a Preacher Man”) that transcended both race and geography.",
    link: "https://open.spotify.com/album/6SNMenG3NjZyqgI5p4Hcmg",
    image: "https://i.scdn.co/image/ab67616d0000b273f1bb363f80233c2c3cb65c79",
  },
  {
    rank: 254,
    artist: "Herbie Hancock",
    album: "Head Hunters",
    description:
      "One day in the early Seventies, jazz pianist Herbie Hancock was chanting in front of his Nichiren Buddhist scroll when he heard Sly Stone’s “Thank You (Falettinme Be Mice Elf Agin)” looping in his head. He immediately got to work on Head Hunters, an aerodynamic groove machine built around catchy riffs, squelching synths, and airtight, danceable beats. As Hancock put it, the LP unified “the jungle, the intellectual, and the sex” — and gave jazz its first platinum-selling album.",
    link: "https://open.spotify.com/album/5fmIolILp5NAtNYiRPjhzA",
    image: "https://i.scdn.co/image/ab67616d0000b2736b75d57d2d070c0c4afb3f9a",
  },
  {
    rank: 235,
    artist: "Metallica",
    album: "Metallica (The Black Album)",
    description:
      "After a decade of breaking metal’s speed limits, Metallica pared down their sound to the bare bones for their self-titled “Black Album.” “Enter Sandman” became a blockbuster because listeners finally had the space to sing along with James Hetfield’s bleak visions. Metallica achieved maximum heaviness on “Sad but True” by letting their guitars ring out for once; they embraced cinematic melodrama on “The Unforgiven” and “Wherever I May Roam,” and showed unusual depth for a band named Metallica with the sincere, no-bullshit ballad “Nothing Else Matters.”",
    link: "https://open.spotify.com/album/1n3resIYvDMGwe66ASRGPg",
    image: "https://i.scdn.co/image/ab67616d0000b273b6f581641f188b966381662a",
  },
  {
    rank: 55,
    artist: "Pink Floyd",
    album: "The Dark Side of the Moon",
    description:
      "“I think every album was a step towards Dark Side of the Moon,” keyboardist Rick Wright said. “We were learning all the time; the techniques of the recording and our writing was getting better.” As a culmination of their inner-space explorations of the early 1970s, the Floyd toured the bulk of Dark Side in Britain for months prior to recording. But in the studio, the band articulated bassist Roger Waters’ reveries on the madness of everyday life with melodic precision (“Breathe,” “Us and Them”) and cinematic luster (Clare Torry’s guest vocal aria “The Great Gig in the Sky”). Dark Side is one of the best-produced rock albums ever, and “Money” may be rock’s only Top 20 hit in 7/4 time.",
    link: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
    image: "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe",
  },
  {
    rank: 244,
    artist: "Kanye West",
    album: "808s & Heartbreak",
    description:
      "Part of Kanye West died in the fall of 2007, when his beloved mother, Donda, passed away; soon afterward, his 18-month-long engagement to designer Alexis Phifer fell apart. So when he returned in 2008 with 808s & Heartbreak, it was akin to watching an emotional purge and resurrection. Drenching his voice in Auto-Tune and turning his synths to their coldest settings, he sang of unbearable winters, shattered love, and endless nightmares. Part of West’s healing was charting a path where the distinction between rapping and singing was beside the point. Within a few years, Drake and others picked up the torch he’d lit here and ran with it all the way to the top of the charts.",
    link: "https://open.spotify.com/album/3WFTGIO6E3Xh4paEOBY9OU",
    image: "https://i.scdn.co/image/ab67616d0000b273346d77e155d854735410ed18",
  },
  {
    rank: 285,
    artist: "Big Star",
    album: "Third/Sister Lovers",
    description:
      "Big Star’s first two albums were crisp power-pop full of bright Sixties melodies. Their third album very much wasn’t. The band recorded it, their final LP, in 1974, but it didn’t get released until 1978, in part because singer Alex Chilton sounds like he’s having a nervous breakdown. It’s a record of gorgeous, disjointed heartbreak ballads such as “Take Care,” “Nighttime,” and “Blue Moon.” Even when they’re more optimistic, the songs almost seem to disintegrate as they unfold, finally collapsing into the sublime apocalypse of the album-closing “Kanga Roo.”",
    link: "https://open.spotify.com/album/1rhYQnZdGMZAdo95fTgii8",
    image: "https://i.scdn.co/image/ab67616d0000b2734b12ede6cb7203b2121ec107",
  },
  {
    rank: 7,
    artist: "Fleetwood Mac",
    album: "Rumours",
    description:
      "With Rumours, Fleetwood Mac turned private turmoil into gleaming, melodic public art. The band’s two couples — bassist John McVie and singer-keyboard player Christine McVie, who were married; guitarist Lindsey Buckingham and vocalist Stevie Nicks, who were not — broke up during the protracted sessions for the album. As John later told Rolling Stone of the atmosphere during the making of Rumours, “Parties going on all over the house. Amazing. Terrifying. Huge amounts of illicit materials, yards and yards of this wretched stuff. Days and nights would just go on and on.”\nThis frenzied, decadent vibe lent a highly charged, confessional aura to such songs as Buckingham’s “Go Your Own Way,” Nicks’ “Dreams,” Christine’s “Don’t Stop,” and the group-composed anthem to betrayal, “The Chain.” The band’s soap opera fueled its own intricate creative conversation; on “You Make Loving Fun,” Christine sang about her new boyfriend, the band’s lighting designer, as her ex John dutifully drives home the song with a sunny, funky bass line. To write “Dreams,” Nicks sat on a black velvet bed in a tiny room hidden deep in the Record Plant, where the band was recording, creating one of her most haunting songs in 10 minutes. “[In ‘Go Your Own Way’] Lindsey is saying go ahead and date other men and go live your crappy life, and [I’m] singing about the rain washing you clean,” Nicks said. “We were coming at it from opposite angles, but we were really saying the same exact thing.” The Mac’s catchy exposés, produced with California-sunshine polish, touched a nerve: Rumours became the sixth-best-selling album of all time.",
    link: "https://open.spotify.com/album/0BwWUstDMUbgq2NYONRqlu",
    image: "https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4773dd2bfe1b",
  },
  {
    rank: 197,
    artist: "The Beatles",
    album: "Meet the Beatles!",
    description:
      "For Americans in the full grip of Beatlemania, this was the first album they could buy. Meet took the Fabs’ second British record, With the Beatles, dropped five covers, and added three tracks, including the singles “I Want to Hold Your Hand” and “I Saw Her Standing There.” (This arguably made a hash of the Beatles’ artistic intentions, yet made for a much better record.) John Lennon and Paul McCartney were on a roll that would be unmatched in rock history, and at this point they were a real team. They wrote “I Want to Hold Your Hand” together — on a piano in the basement of the home of Jane Asher, McCartney’s actress girlfriend — as Lennon put it, “eyeball to eyeball.”",
    link: "https://open.spotify.com/album/0WGgc3DUBg8nkYU8hjdrw8",
    image: "https://i.scdn.co/image/ab67616d0000b273b05cd82a283d7dc018e2a6df",
  },
  {
    rank: 191,
    artist: "Etta James",
    album: "At Last!",
    description:
      "Etta James was a self-described “juvenile delinquent” when R&B band boss Johnny Otis took her under his wing and made her a precociously sexual teenage star with 1954’s “Roll With Me, Henry.” Seven years later, James bloomed into a mature, fiery interpreter on this spellbinding LP. Against Riley Hampton’s meaty orchestrations, James wraps her husky voice around strange bedfellows such as “Stormy Weather” and Willie Dixon’s “I Just Want to Make Love to You,” injecting them with rock & roll heart. She hit the pop and R&B charts with three of the songs here and, in the process, created a new vocal model: the crossover diva.",
    link: "https://open.spotify.com/album/7rd4PorIOPjPTy7qdUeeCt",
    image: "https://i.scdn.co/image/ab67616d0000b273b2229a8fdf377abaf3652624",
  },
  {
    rank: 149,
    artist: "John Prine",
    album: "John Prine",
    description:
      "When John Prine resigned from his job as a USPS mailman, his supervisor snickered, “You’ll be back.” Instead, Prine became a revered folk-country-rock songwriter, starting with this first album, which is loaded with enduring gems, including “Angel From Montgomery,” “Hello in There,” and a song that regularly returns to relevance, “Your Flag Decal Won’t Get You Into Heaven Anymore.” Prine seemed like a Zen sage. He filled his songs with an uncynical live-and-let-live morality, and wrote in a colloquial voice that showed a love of the way Americans speak. His closest parallel isn’t another songwriter, it’s Mark Twain.",
    link: "https://open.spotify.com/album/5t4FHrIAHI8nolSAOBRgPp",
    image: "https://i.scdn.co/image/ab67616d0000b27303c6a79f0920e63681421cd8",
  },
  {
    rank: 467,
    artist: "Maxwell",
    album: "BLACKsummers’night",
    description:
      "Maxwell was a successful Nineties neo-soul crooner who went on an eight-year hiatus between 2001’s Now and this 2009 release. BLACKSummers’night betrays no anxiety about the time off; in fact, it ranks among the great comeback records. Maxwell sang about post-breakup desperation as he navigated plush, complicated grooves with jazz players like Keyon Harrold and Derrick Hodge giving his arrangements extra zip. The album’s ecstatic triumph is “Pretty Wings,” a keening, chiming lullaby.",
    link: "https://open.spotify.com/album/1cXFSOdjxmS13cOTtnNQAo",
    image: "https://i.scdn.co/image/ab67616d0000b2733dc7720d9734bf59be7ddf0d",
  },
  {
    rank: 71,
    artist: "Bob Marley and the Wailers",
    album: "Exodus",
    description:
      "As the title suggests, this album wasn’t recorded in Jamaica; after Bob Marley took a bullet in a 1976 assassination attempt, he relocated the Wailers to London. But tracks such as “Jamming” are still suffused with the deep essence of reggae and life at home. “Three Little Birds,” for example, had been written on the back step of Marley’s home in Kingston, where he would sit and smoke herb. Each time Marley rolled a spliff, he would discard the seeds — and the birds of the song’s title would pick them up. “The music have a purpose,” Marley said, and his spiritual intent was never clearer than on the anthem “One Love,” with its message of redemption and revolution.",
    link: "https://open.spotify.com/album/2mBbV0Ad6B4ydHMZlzAY7S",
    image: "https://i.scdn.co/image/ab67616d0000b273811bfdc4f55b3a7484524aaf",
  },
  {
    rank: 231,
    artist: "Tom Petty and the Heartbreakers",
    album: "Damn the Torpedoes",
    description:
      "With hair like Jagger’s and a voice like Dylan’s in tune, Tom Petty and his bar band defrilled classic rock: In 1979, he filed for bankruptcy; then Torpedoes took off, mostly because “Here Comes My Girl” seemed to keep the promises those like Jagger et al., forgot they’d made. Perfectly produced by future music-industry megamogul Jimmy Iovine, Torpedoes gave bright jangling Sixties rock a sheen that made pretty much everything else on AOR radio seem lumpy and stiff, while Petty’s obvious authenticity kept the music from ever seeming calculated or overly polished.",
    link: "https://open.spotify.com/album/708Whrc4abJEtqBINv9S2b",
    image: "https://i.scdn.co/image/ab67616d0000b273ebca7d93f21ba366fe005966",
  },
  {
    rank: 5,
    artist: "The Beatles",
    album: "Abbey Road",
    description:
      "“It was a very happy record,” said producer George Martin, describing this album in The Beatles Anthology. “I guess it was happy because everybody thought it was going to be the last.” Indeed, Abbey Road — recorded in two months during the summer of 1969 — almost never got made at all. That January, the Beatles were on the verge of a breakup, exhausted and angry with one another after the disastrous sessions for the aborted Get Back LP, later salvaged as Let It Be [see No. 342]. Yet determined to go out with the same glory with which they had ﬁrst entranced the world at the start of the decade, the group reconvened at EMI’s Abbey Road Studios to make their most polished album: a collection of superb songs cut with an attention to reﬁned detail, then segued together (especially on Side Two) with conceptual force.\nThere was no thematic link, other than the Beatles’ unique genius. John Lennon veered from the stormy metal of “I Want You (She’s So Heavy)” to the exquisite vocal sunrise of “Because.” Paul McCartney was saucy (“Oh! Darling”), silly (“Maxwell’s Silver Hammer”), and deliciously bitter (“You Never Give Me Your Money”). George Harrison proved his long-secret worth as a composer with “Something” (later covered by Frank Sinatra) and the folk-pop diamond “Here Comes the Sun,” written in his friend Eric Clapton’s garden after a grim round of business meetings. Lennon, McCartney, and Harrison reputedly sang more three-part harmonies here than on any other Beatles album. That warm feeling — a sense of an increasingly divided band warmly coming together as friends — may be one reason Abbey Road has become the most beloved Beatles album of all time.",
    link: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN",
    image: "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
  },
  {
    rank: 241,
    artist: "Massive Attack",
    album: "Blue Lines",
    description:
      "Perhaps the first post-hip-hop masterpiece: Blue Lines combined rap, dub, and soul that gave birth to trip-hop; if you ever found yourself in a “chillout room” in 1995, this album was probably on, and it can still suck you into its gravitational pull. In the U.K., where acid house and jungle were the dominant sounds, its creepingly slow ambiance knocked the music world on its back. “What’s important to us is the pace,” said the band’s 3D, “the weight of the bass and the mood.”",
    link: "https://open.spotify.com/album/5mAPk4qeNqVLtNydaWbWlf",
    image: "https://i.scdn.co/image/ab67616d0000b273af5beb00d940f5ede452d6b5",
  },
  {
    rank: 123,
    artist: "Led Zeppelin",
    album: "Led Zeppelin II",
    description:
      "This album — recorded on the fly while the band was touring — opens with one of the most exhilarating guitar riffs in rock & roll: Jimmy Page’s searing stutter in “Whole Lotta Love.” As Page told Rolling Stone, “On the second LP, you can hear the real group identity coming together,” by which he meant the unified might of his own white-blues sorcery, John Bonham’s hands-of-Zeus drumming, Robert Plant’s love-god howl and surprisingly tender lyrics (the gorgeous “Thank You”), and John Paul Jones’ firm bass and keyboard colors. Other great reasons to bang your head: “The Lemon Song,” “Heartbreaker,” and “Ramble On.”",
    link: "https://open.spotify.com/album/70lQYZtypdCALtFVlQAcvx",
    image: "https://i.scdn.co/image/ab67616d0000b273fc4f17340773c6c3579fea0d",
  },
  {
    rank: 89,
    artist: "Erykah Badu",
    album: "Baduizm",
    description:
      "“If the head wrap was my trademark, the drums, African drums, were my soundtrack,” Erykah Badu recalled. “It’s just who I was at the time, and I wanted to be completely who I was when I did what I did.” Recorded between New York, Philadelphia, and her hometown of Dallas, the singer’s debut suggested a Billie Holiday raised on hip-hop and Stevie Wonder, celebrating herself and her heritage over resplendently relaxed grooves. Baduizm’s Seventies-meets-Nineties vibe, Badu’s exquisite lyricism (“On & On” is at once spiritual, apocalyptic, and funny), and jazz-steeped cadences (see “Appletree”) combined to make the 25-year-old singer a figurehead for the neo-soul genre that essentially began with this album.",
    link: "https://open.spotify.com/album/3qr4pTBWEU1SVf01j6RAx3",
    image: "https://i.scdn.co/image/ab67616d0000b2739968770f3f0e45aa99b2ac29",
  },
  {
    rank: 332,
    artist: "Elvis Presley",
    album: "Elvis Presley",
    description:
      "In November 1955, RCA Records bought Elvis Presley’s contract, singles, and unreleased master tapes from Sun Records for $35,000. His first full-length album came out four months later, with tracks drawn from both the Sun sessions and from further recording at RCA’s studios in New York and Nashville. “There wasn’t any pressure,” guitarist Scotty Moore said. “They were just bigger studios with different equipment.” On tracks such as “Blue Suede Shoes,” that meant revved-up country music with the sexiest voice anyone had ever heard.",
    link: "https://open.spotify.com/album/7GXP5OhYyPVLmcVfO9Iqin",
    image: "https://i.scdn.co/image/ab67616d0000b273f45cec7e72b9dec993c18872",
  },
  {
    rank: 303,
    artist: "ABBA",
    album: "The Definitive Collection",
    description:
      "These Swedish pop stars became the world’s biggest group in the 1970s, with a streak of Nordic despair under the sparkly melodies. Agnetha Fältskog and Anni-Frid Lyngstad were the bewitching frontwomen in the sequined pantsuits; their husbands, Björn Ulvaeus and Benny Andersson, wrote global hits like the joyful “Dancing Queen,” the double-divorce drama “Knowing Me, Knowing You,” and the haunting farewell “Thank You for the Music.”",
    link: "https://open.spotify.com/album/1V6a99EbTTIegOhWoPxYI9",
    image: "https://i.scdn.co/image/ab67616d0000b27370f7a1b35d5165c85b95a0e0",
  },
  {
    rank: 145,
    artist: "Eminem",
    album: "The Marshall Mathers LP",
    description:
      "Chris Rock joked that the world was so crazy, “the best rapper is a white guy,” referring to Eminem. He’d been accused of corrupting the nation’s youth by fostering misogyny on his major-label debut, and to say he doubled down on playing with offensive ideas only exaggerates his joyful commitment to earning more denunciations. “The Real Slim Shady” and “Bitch Please II” vaulted Eminem from a shock rapper with a sense of humor to the voice of a generation. And in “Stan,” he created a verb and a meme to describe extreme fandom in our era.",
    link: "https://open.spotify.com/album/6t7956yu5zYf5A829XRiHC",
    image: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42",
  },
  {
    rank: 300,
    artist: "Shania Twain",
    album: "Come on Over",
    description:
      "Shania Twain’s third album was basically a country Thriller, still the biggest-selling album ever by a female artist. Twain and her husband, AC/DC and Def Leppard producer John “Mutt” Lange, had radio in a hammerlock during the late Nineties with hits like “You’re Still the One” and “Man! I Feel Like a Woman,” and Twain’s mix of genre-defying effervescence and feel-like-a-woman self-assertion helped pave the way for superstar rule breakers like the Dixie Chicks, Miranda Lambert, and Taylor Swift, who said seeing Shania perform inspired her to want to get onstage herself.",
    link: "https://open.spotify.com/album/4UMe0Ods7kygK6OISasZe9",
    image: "https://i.scdn.co/image/ab67616d0000b273aaf012d56b8c72658da6c45f",
  },
  {
    rank: 10,
    artist: "Lauryn Hill",
    album: "The Miseducation of Lauryn Hill",
    description:
      "“This is a very sexist industry,” Lauryn Hill told Essence magazine in 1998. “They’ll never throw the ‘genius’ title to a sister.” Though already a star as co-leader of the Fugees, with Wyclef Jean, she was hungry to express her own vision. “[I wanted to] write songs that lyrically move me and have the integrity of reggae and the knock of hip-hop and the instrumentation of classic soul,” the singer said of her debut album.\nShe took control of the recording process, writing, producing, arranging, and helming sessions that included collaborators like pianist John Legend, still in college when he got the call to go out to New Jersey, where Hill was recording, and the pathfinding R&B artist D’Angelo. They shaped a sound that went from the money-hating banger “Lost Ones” to subtle, glorious, heartbreaking monuments such as “Ex-Factor” (reportedly about Wyclef Jean) and the swinging sermon “Doo Wop (That Thing).” For “I Used to Love Him,” Hill duetted with her hip-hop-soul forebear Mary J. Blige. Each song was driven by a clarity of vision and personal honesty that felt revelatory; in “To Zion,” she detailed her struggles as an ambitious professional and a new mom. Miseducation’s musical legacy is just as deep; at a time when pop was becoming increasingly slick and digitized in the go-go Nineties, here was an album that showed the commercial appeal of a rawer sound; “I wanna hear that thickness of sound,” Hill said. “You can’t get that from a computer, because a computer’s too perfect. But that human element, that’s what makes the hair on the back of my neck stand up. I love that.”",
    link: "https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD",
    image: "https://i.scdn.co/image/ab67616d0000b273e08b1250db5f75643f1508c9",
  },
  {
    rank: 284,
    artist: "Merle Haggard",
    album: "Down Every Road 1962-1994",
    description:
      "Haggard’s tough country sound was born in Bakersfield, California, a.k.a. Nashville West. His songs are full of drifters, fugitives, and rogues, and this four-disc set — culled from his seminal recordings for Capitol as well as MCA and Epic — is the ultimate collection from one of country’s finest singers. Songs like “Mama Tried” and “All My Friends Are Going to Be Strangers” are archetypal statements of lonely tough-guy individualism, and like James Brown’s Star Time, the quality stays rock solid over four CDs.",
    link: "https://open.spotify.com/album/40Wi0Ej08sw9B4URIOabOI",
    image: "https://i.scdn.co/image/ab67616d0000b2735b0e7f4396a021ace28ee393",
  },
  {
    rank: 391,
    artist: "Kelis",
    album: "Kaleidoscope",
    description:
      "“I hate you so much right now!” Kelis blasted on her debut single “Caught Out There,” giving spurned lovers around the world an instant anthem. It set the tone for a knockout R&B debut. Kaleidoscope was also a showcase moment for the Neptunes (Pharrell and Chad Hugo), who helmed the album’s production, backing Kelis with a barrage of splatting keyboards and thwacking drums and giving the album a taut consistency. Yet the singer was so charismatic she might not have needed them. “I hate you so much right now!” doesn’t lose any force a cappella.",
    link: "https://open.spotify.com/album/2VQFbPduHKk3SAyczWfpok",
    image: "https://i.scdn.co/image/ab67616d0000b2736cd319100464445bf22eba38",
  },
  {
    rank: 349,
    artist: "MC5",
    album: "Kick Out the Jams",
    description:
      "It’s the ultimate rock salute: “Kick out the jams, motherfuckers!” Recorded live in Detroit by Rob Tyner and his anarchist crew, Kick Out the Jams writhes and screams with the belief that rock & roll is a necessary act of civil disobedience. The proof: It was banned by a Michigan department store. The MC5 proved their lefty credentials the summer before the album was recorded when they were the only band that showed up to play for the Yippies protesting the 1968 Democratic Convention in Chicago.",
    link: "https://open.spotify.com/album/0kT4F2mSpvTk3stwiaEStp",
    image: "https://i.scdn.co/image/ab67616d0000b27336f68306b0c5babcd4235e45",
  },
  {
    rank: 182,
    artist: "James Taylor",
    album: "Sweet Baby James",
    description:
      "Taylor’s second album landed him on the cover of Time magazine, and its gentle melodies drew the blueprint for many of the Seventies singer-songwriters that followed. But he went through a private hell on his way to success; the hit “Fire and Rain” was inspired by his stay in a psychiatric institution in the mid-1960s (he had committed himself) and the suicide of a close friend. In the months before making this album, Taylor committed himself again, this time to kick heroin. His confessional lyrics set a new standard, as did the spare melodicism of his songs. But it was the quiet strength in his voice that makes this album a model of folk-pop healing.",
    link: "https://open.spotify.com/album/1HiG0ukRmFPN13EVcf98Jx",
    image: "https://i.scdn.co/image/ab67616d0000b273b3adf9b1706b05af854bbad4",
  },
  {
    rank: 15,
    artist: "Public Enemy",
    album: "It Takes a Nation of Millions to Hold Us Back",
    description:
      "Loud, obnoxious, funky, avant-garde, political, uncompromising, hilarious – Public Enemy’s brilliant second album is all of these things — all at once. Chuck D booms intricate rhymes with a delivery inspired by sportscaster Marv Albert; sidekick Flavor Flav raps comic relief; and production team the Bomb Squad build mesmerizing, multilayered jams, pierced with shrieking sirens. The title and roiling force of “Bring the Noise” is truth in advertising. “If they’re calling my music ‘noise,’ ” said Chuck D, “if they’re saying that I’m really getting out of character being a black person in America, then fine – I’m bringing more noise.”\nAlong with “Bring the Noise,” Nation classics like “Rebel Without a Pause” were conceived at Spectrum City in the band headquarters in Hempstead, New York. For “Rebel,” producer Hank Shocklee of the Bomb Squad looped a piercing sample of James Brown’s “The Grunt” with Brown’s “Funky Drummer” (“That song was like my milk,” said Shocklee). To write verses that could match such a sonic assault, Chuck locked himself in his house for 24 hours and emerged with broadsides like the media screed “Don’t Believe the Hype.” He wasn’t sure of the results until DMC, of Run-DMC, blasted it out of his Bronco on a Saturday night. Says Shocklee, “The whole block was grooving to it.”",
    link: "https://open.spotify.com/album/03Mx6yaV7k4bsEmcTH8J49",
    image: "https://i.scdn.co/image/ab67616d0000b273629edfa71810af835f33f431",
  },
  {
    rank: 57,
    artist: "The Band",
    album: "The Band",
    description:
      "The Band was four-fifths Canadian — drummer Levon Helm was from Arkansas – but their second album was all American. Guitarist Robbie Robertson’s songs vividly evoke the country’s pioneer age — “Across the Great Divide,” “The Night They Drove Old Dixie Down” — while reflecting the state of the nation in the 1960s. The Band’s long life on the road resonates in the brawn of Garth Hudson’s keyboards and Helm’s juke-joint attack. But Robertson’s stories truly live in Helm’s growl, Rick Danko’s high tenor, and Richard Manuel’s spectral croon. “Somebody once said he had a tear in his voice,” Helm said of Manuel. “Richard had one of the richest textured voices I’d ever heard.”",
    link: "https://open.spotify.com/album/1N5ZRHDLAv92FHZ4fRYhCi",
    image: "https://i.scdn.co/image/ab67616d0000b2739d77ddd3dfab1a8530f30dee",
  },
  {
    rank: 337,
    artist: "Bob Dylan",
    album: "John Wesley Harding",
    description:
      "Recovering from his 1966 motorcycle crash, Bob Dylan made a left turn into country fables and stark mystic folkways. He took a quick trip to Nashville and banged out John Wesley Harding. It’s his most ominous album, with characters from the Bible and the shadowy side of American history, from “I Am a Lonesome Hobo” to “All Along the Watchtower.” With his stripped-down sound and a black-and-white cover photo, Dylan was defiantly rejecting all the current trends — going his own way, as usual.",
    link: "https://open.spotify.com/album/2KzCDxKpgLqBffHu1IZ7Kn",
    image: "https://i.scdn.co/image/ab67616d0000b27381efb7dfa40bbfa10a199e38",
  },
  {
    rank: 30,
    artist: "Jimi Hendrix",
    album: "Are You Experienced",
    description:
      "This is what Britain sounded like in late 1966 and early 1967: ablaze with rainbow blues, orchestral guitar feedback, and cosmic possibility. Jimi Hendrix’s incendiary guitar was historic in itself, the luminescent sum of his chitlin-circuit labors with Little Richard and the Isley Brothers and his melodic exploitation of amp howl. But it was the pictorial heat of songs like “Manic Depression” and “The Wind Cries Mary” that established the transcendent promise of psychedelia. Backed by drummer Mitch Mitchell and bassist Noel Redding, the guitarist made soul music for inner space. “It’s a collection of free feeling and imagination,” he said of the album. “Imagination is very important.” Widely assumed to be about an acid trip, “Purple Haze” had “nothing to do with drugs,” Hendrix insisted. “‘Purple Haze’ was all about a dream I had that I was walking under the sea.”",
    link: "https://open.spotify.com/album/7rSZXXHHvIhF4yUFdaOCy9",
    image: "https://i.scdn.co/image/ab67616d0000b273c9adfbd773852e286faed040",
  },
  {
    rank: 458,
    artist: "Jason Isbell",
    album: "Southeastern",
    description:
      "After releasing three little-heard solo albums, Isbell turned his personal travails — fresh sobriety, getting married — into what would become his opus. “It gave me a story to tell,” the songwriter said of Southeastern, which featured his sharpest literary writing (“Elephant”), newfound vulnerability (“Traveling Alone”), and his new calling card (“Cover Me Up”). The album set a standard for new-age Seventies-inspired singer-songwriters and coronated the Alabama native and his wife and bandmate, Amanda Shires, as the new king and queen of Americana.",
    link: "https://open.spotify.com/album/1bg476ZQn7hmcXaU05SHV4",
    image: "https://i.scdn.co/image/ab67616d0000b273cadba04ee5fa8612182151c6",
  },
  {
    rank: 60,
    artist: "Van Morrison",
    album: "Astral Weeks",
    description:
      "Astral Weeks was the sound of sweet relief. Van Morrison was newly signed to artist-friendly Warner Bros., after a rough ride with his previous U.S. label, Bang, when he made Astral Weeks in the summer of 1968. He used the opportunity to explore the physical and dramatic range of his voice in his extended poetic-scat singing, setting hallucinatory reveries about his native Belfast (the daydream memoir “Cypress Avenue,” the hypnotic portrait of “Madame George”) to wandering melodies connecting the earthy poetry in Celtic folk and American R&B. The crowning touch was a superior jazz quartet, who recorded their basic backing tracks in one three-hour session, without any instruction from Morrison on what he wanted or what the lyrics meant.",
    link: "https://open.spotify.com/album/4pG3bKkbmReDt5QTDn3JDz",
    image: "https://i.scdn.co/image/ab67616d0000b273c849bc0a79a44105a4258662",
  },
  {
    rank: 32,
    artist: "Beyoncé",
    album: "Lemonade",
    description:
      "“Nine times out of 10 I’m in my feelings,” Beyoncé announced on her heartbreak masterpiece, Lemonade. She dropped the album as a Saturday-night surprise, knocking the world sideways — her most expansive and personal statement, tapping into marital breakdown and the state of the nation. It was a different side than she’d shown before, raging over infidelity and jealousy, but reveling in the militant-feminist-funk strut of “Formation.” All over Lemonade she explores the betrayals of American blackness, claiming her place in all of America’s music traditions — she goes outlaw country on “Daddy Lessons,” she digs blues metal with Jack White on “Don’t Hurt Yourself,” she revamps the Yeah Yeah Yeahs on “Hold Up.” Ashes to ashes, dust to side chicks — all hail the queen.",
    link: "https://open.spotify.com/album/7dK54iZuOxXFarGhXwEXfF",
    image: "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23",
  },
  {
    rank: 325,
    artist: "Jerry Lee Lewis",
    album: "All Killer No Filler!",
    description:
      "Jerry Lee Lewis is best known for his frenzied piano-pumping Sun classics like “Great Balls of Fire” and “Whole Lotta Shakin’ Goin’ On,” cut in the late Fifties (before he derailed his success by marrying his 13-year-old cousin), yet his career as a country hitmaker lasted decades. Listen to “What’s Made Milwaukee Famous (Has Made a Loser Out of Me)” and you might agree with the Killer’s characteristically self-deprecating claim that “Elvis was the greatest, but I’m the best.”",
    link: "https://open.spotify.com/album/2UCWsnmZEVg9HhnMeKTsim",
    image: "https://i.scdn.co/image/ab67616d0000b2739a482180e6a306229bff49dc",
  },
  {
    rank: 419,
    artist: "Eric Church",
    album: "Chief",
    description:
      "Eric Church emerged in the mid-2000s as one of country music’s best new singer-songwriters, and his third album rolled all of his gifts into a tight package that was rock-influenced, rough around the edges, and catchy as hell. “Hungover & Hard Up” shows the North Carolina native’s abiding gift for drowning his sorrows in booze and melody, and on the classic “Springsteen,” he invokes Bruce’s music as a way to access the passion of youth. The songwriting is so confident, even the ballads swagger a bit.",
    link: "https://open.spotify.com/album/5dtw6CoMhbrSj01YUvdQOF",
    image: "https://i.scdn.co/image/ab67616d0000b273c1bc36faa8afff2b5273490b",
  },
  {
    rank: 237,
    artist: "Willie Nelson",
    album: "Red Headed Stranger",
    description:
      "Newly signed to Columbia, Nelson was feeling ambitious. “It was the first time I had ‘artistic control,’” he recalled. “So I thought I would just start writing.” Nelson had penned the song “Red Headed Stranger” years before, on a drive back to Austin after a Colorado ski trip. He kept the arrangements extremely spare, in sharp contrast to the gussied-up music coming out of Nashville at the time. The songs locked together to tell a riveting and heartfelt tale of murder and infidelity, and the concept album became one of Nelson’s biggest hits.",
    link: "https://open.spotify.com/album/5aEtg4dxdBk4pj6SJ3hNsM",
    image: "https://i.scdn.co/image/ab67616d0000b2730e5489389aa853f454a4b1e8",
  },
  {
    rank: 397,
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    description:
      "Billie Eilish became a teen folk hero with her blockbuster debut — just your average 17-year-old songwriting prodigy with a head full of nightmares. Eilish wrote and recorded these tunes with her brother, Finneas, at the L.A. house where they grew up. But her adolescent imagination ran wild, from the gothic angst of “Bury a Friend” to the whispery trap-pop strut of “Bad Guy.” The voice of a new generation? Duh.",
    link: "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh",
    image: "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
  },
  {
    rank: 401,
    artist: "Blondie",
    album: "Blondie",
    description:
      "“We’re gonna shoot the tube!” Debbie Harry promises on “In the Sun,” hanging 10 on the Bowery. Blondie had a hard time getting taken seriously in the CBGB punk scene. But while the band’s debut celebrates Sixties rock & roll at its campiest — girl groups, garage trash, surf bubblegum — Harry’s heart-on-sleeve swoon during “In the Flesh “ sincerely updated the Shangri-Las for the Lower East Side circa 1977, and the gritty “Rip Her to Shreds” showed Blondie could get down with the tough guys, too.",
    link: "https://open.spotify.com/album/54V45InMvJ6uVtRtO6h1Co",
    image: "https://i.scdn.co/image/ab67616d0000b273d377fa9b12ba09ee525b60a8",
  },
  {
    rank: 322,
    artist: "Elvis Presley",
    album: "From Elvis in Memphis",
    description:
      "“I had to leave town for a little while,” Elvis Presley sings on the first track. Along with his 1968 TV special, this record announced he was back. With help from a crack crew of Memphis musicians, Presley masterfully tackles quality material from country (“I’m Movin’ On”), gospel (“Long Black Limousine”), soul (“Only the Strong Survive”), and pop (“Any Day Now”), as well as message songs (“In the Ghetto”). The same sessions also yielded one of Presley’s greatest singles, the towering pop-soul masterpiece “Suspicious Minds.”",
    link: "https://open.spotify.com/album/3ekkFrfotMsEAKc5g71GHk",
    image: "https://i.scdn.co/image/ab67616d0000b273fdc0aa7765f3197ac9179ec7",
  },
  {
    rank: 287,
    artist: "The Byrds",
    album: "Mr. Tambourine Man",
    description:
      "“Wow, man, you can even dance to that!” said Bob Dylan on hearing the Byrds’ harmonized electric-12-string treatments of his material. Their debut album defined folk rock with L.A. studio savvy and ringing guitars. The Byrds hit Number One with their jangled-up “Mr. Tambourine Man,” but as they soon proved, they were a whole band full of brilliant songwriters. Gene Clark wrote most of the album’s highlights, like the moody “Here Without You” and the irresistible “I’ll Feel a Whole Lot Better.”",
    link: "https://open.spotify.com/album/0pkrqPjeq9K5KD0hFqAKNa",
    image: "https://i.scdn.co/image/ab67616d0000b273576fccf9a91d9f7c808b8abd",
  },
  {
    rank: 427,
    artist: "Al Green",
    album: "Call Me",
    description:
      "Green was absolutely fearless at this point, an innovator willing to try any crazy idea — country ballads, jazz chords, even a gospel tune. Producer Willie Mitchell and his studio band of virtuoso Memphis R&B pros create the sultriest grooves south of the Mason-Dixon line. Green testifies to the glories of love in “Call Me” and “Have You Been Making Out O.K.” When he reaches up for that falsetto growl at the end of “Your Love Is Like the Morning Sun,” it’s like he’s bringing down the sugar walls of Jericho.",
    link: "https://open.spotify.com/album/1hryVGXoRLV9WAhO97xEDJ",
    image: "https://i.scdn.co/image/ab67616d0000b27374bf394db200791382590474",
  },
  {
    rank: 199,
    artist: "Pavement",
    album: "Slanted and Enchanted",
    description:
      "Pavement were the quintessential American independent rock band, and this is the quintessential indie-rock album. The playing is loose-limbed, the production laid-back and primitive, the lyrics quirky and playful, the melodies sweet and seductive. But the sound is as intense as the white noise of the Velvet Underground, even as songs like “Summer Babe” reflect singer-guitarist Stephen Malkmus’ love of Seventies AM pop. Slanted and Enchanted is one of the most influential rock albums of the 1990s; its fuzzy recording style can be heard in the music of Nirvana, Liz Phair, Beck, the Strokes, and the White Stripes.",
    link: "https://open.spotify.com/album/7o14zVcXSRk7clV6QCEdOD",
    image: "https://i.scdn.co/image/ab67616d0000b273fd31dbca3d0757fcb196d5af",
  },
  {
    rank: 469,
    artist: "Manu Chao",
    album: "Clandestino",
    description:
      "Born in Paris to Spanish parents, Manu Chao is a true citizen of the world on his 1998 debut. Clandestino, was a tribute to “clandestinos” everywhere: a derogatory term for undocumented migrants. Running on an internationalist platform of peace (and legalized pot), Chao was a digital busker (“a clown making too much dirty sound”), strumming his acoustic guitar as he moved effortlessly between languages and styles, singing with a playfully light touch as he made feel-good reggae rock for global nomads like himself.",
    link: "https://open.spotify.com/album/3xoAUqjKs7Ps7wR26VAMbq",
    image: "https://i.scdn.co/image/ab67616d0000b27372c5875a8e4b49075978cd04",
  },
  {
    rank: 185,
    artist: "The Rolling Stones",
    album: "Beggars Banquet",
    description:
      "“When we had been in the States between 1964 and ’66, I had gathered together this enormous collection of records, but I never had any time to listen to them,” Keith Richards recalled. “In late 1966 and ‘67, I unwrapped them and actually played them.” After the wayward psychedelia of Their Satanic Majesties Request, and with guitarist Brian Jones largely AWOL, Richards’ record collection led the Rolling Stones back to their version of America: country music on “Dear Doctor,” the blues on “Prodigal Son,” and urban riots on “Street Fighting Man.” And “Sympathy for the Devil,” of course, is an anthem for the darkness in every human heart.",
    link: "https://open.spotify.com/album/6OHri5qNxwCdVSdyCslspd",
    image: "https://i.scdn.co/image/ab67616d0000b27344934a06d21864415376f5f2",
  },
  {
    rank: 497,
    artist: "Various Artists",
    album: "The Indestructible Beat of Soweto",
    description:
      "The greatest album ever to be marketed under the heading “world music,” this 1985 compilation of South African pop was a huge influence on Paul Simon’s Graceland that still sounds jarringly fresh today. Full of funky, loping beats and gruff, Howling Wolf-style vocals (most prominently from “goat voiced” star Mahlathini). With a sweet track by Graceland collaborators Ladysmith Black Mambazo (“Nansi Imali”), its badass joy needed no translation.",
    link: "https://open.spotify.com/album/1DIr8JMRBnm1cZMYIGKb8t",
    image: "https://i.scdn.co/image/ab67616d0000b273ff6e678ce3e1cd423fe4d4fe",
  },
  {
    rank: 326,
    artist: "Prince",
    album: "Dirty Mind",
    description:
      "A mix of slinky funk, synth-driven rock, jittery pop, and sexual innuendo, Dirty Mind was Prince’s first great album, even if it only hinted at where he was headed. “White, black, Puerto Rican, everybody just a freakin’,” he sang on “Uptown,” a utopian ode to the Minneapolis club scene. The album includes the world’s merriest done-me-wrong song, “When You Were Mine,” and the incest ditty “Sister.” “I wasn’t being deliberately provocative,” Prince said. “I was being deliberately me.”",
    link: "https://open.spotify.com/album/4JsSbaggaprB1AfDylXnxO",
    image: "https://i.scdn.co/image/ab67616d0000b2733d5eebdf65ca2ccb308df87d",
  },
  {
    rank: 446,
    artist: "Alice Coltrane",
    album: "Journey in Satchidanada",
    description:
      "Alice Coltrane was a key part of her husband John’s fiery late-era bands. You can hear her own musical voice in full flower on this LP, named for her spiritual teacher Swami Satchidananda. Coltrane blended the sprawling modal jams pioneered by her late husband with drones from the Indian tanpura, Pharoah Sanders’ spiraling soprano sax, and her own rapturous harp. The result is a meditative bliss-out like jazz had never seen: part earthy blues and part ethereal mantra, and a potent influence on sonic seekers from Radiohead to Coltrane’s grandnephew Flying Lotus.",
    link: "https://open.spotify.com/album/6zV55F6W8kh1qe8LHhqRbz",
    image: "https://i.scdn.co/image/ab67616d0000b27355c9b757d8d511d196350bfa",
  },
  {
    rank: 352,
    artist: "Eminem",
    album: "The Slim Shady LP",
    description:
      "On which Eminem introduced himself as a crazy white geek, the “class-clown freshman/Dressed like Les Nessman.” Hip-hop had never heard anything like Em’s brain-damaged rhymes on this Dr. Dre-produced album, which earned Em respect, fortune, fame, and a lawsuit from his mom. Yet, while he claimed that God sent him here to piss off the world, his most endearing quality was that he saved his most unsparing rhymes for the worst villain in his messed-up life — not mom or his ex-wife, but himself.",
    link: "https://open.spotify.com/album/0vE6mttRTBXRe9rKghyr1l",
    image: "https://i.scdn.co/image/ab67616d0000b2739bef45ee387f274ea3198c55",
  },
  {
    rank: 87,
    artist: "Miles Davis",
    album: "Bitches Brew",
    description:
      "In February 1969, Miles Davis recorded In a Silent Way, a bold step into ambient funk and electric futurism. Then just six months later, he was back in the studio, driven by his desire to assemble “the best damn rock & roll band in the world.” The idea was to connect his music to the audience of Jimi Hendrix and Sly Stone. The result was this double album of jazz-rock fusion, cut in three days of on-the-spot improvisations with an electric orchestra that included three keyboardists, three drummers, two bassists, saxophonist Wayne Shorter, and guitarist John McLaughlin. The music was full of visceral thrills and the brooding darkness Davis brought to everything he touched.",
    link: "https://open.spotify.com/album/3Q0zkOZEOC855ErOOJ1AdO",
    image: "https://i.scdn.co/image/ab67616d0000b2733f29c5269be5a4e9c4611d7a",
  },
  {
    rank: 357,
    artist: "Tom Waits",
    album: "Rain Dogs",
    description:
      "“I like weird, ludicrous things,” Tom Waits once said. That understatement plays out most clearly on Rain Dogs, his finest portrait of the tragic kingdom of the streets. Self-producing his music for the first time and recording in his native Los Angeles, he went for a sound he described as “kind of an interaction between Appalachia and Nigeria.” Waits abandoned his signature grungy minimalism on the gorgeous “Downtown Train” (later a hit for Rod Stewart) and gets backing by Keith Richards on “Big Black Mariah.”",
    link: "https://open.spotify.com/album/5bbb7E51zaDCuD85uLyFkK",
    image: "https://i.scdn.co/image/ab67616d0000b2732549b23da8bec3c24653b619",
  },
  {
    rank: 367,
    artist: "Drake",
    album: "If You're Reading This It's Too Late",
    description:
      "Just when everyone was ready for more pop sensitivity from Drake, he went street. If You’re Reading This It’s Too Late was a mixtape for his rap base — no radio hits or catchy hooks, just his harshest beats and rhymes. It sums up Drake’s willingness to switch lanes at any moment. (Just a few months later, he swerved back into soft-soul territory on “Hotline Bling.”) He spends his money and curses his enemies in paranoid bangers like “10 Bands.”",
    link: "https://open.spotify.com/album/0ptlfJfwGTy0Yvrk14JK1I",
    image: "https://i.scdn.co/image/ab67616d0000b2732090f4f6cc406e6d3c306733",
  },
  {
    rank: 466,
    artist: "The Beach Boys",
    album: "The Beach  Boys Today!",
    description:
      "“I only tried surfing once, and the board almost hit me in the head,” Brian Wilson told Rolling Stone in 1999. But Wilson turned his fantasies into a California dream world of fast cars and cool waves — a world that might even have room for a scared misfit like him. Yet even in this early phase, Wilson was writing yearningly complex tunes — “She Knows Me Too Well” feels like Greek tragedy translated into doo-wop harmonies and surf guitars.",
    link: "https://open.spotify.com/album/1xPtXzS5yCbDAqC7pxRCaF",
    image: "https://i.scdn.co/image/ab67616d0000b2737945f2293cda50453c1af2f9",
  },
  {
    rank: 69,
    artist: "Alanis Morissette",
    album: "Jagged Little Pill",
    description:
      "Alanis Morisette was 21 when Jagged Little Pill was released, but she was a show-business veteran — she’d been on a Nickelodeon TV show and had made two flimsy dance-pop albums — and she knew what kind of music she wanted to make. “I found that the more truthful and vulnerable I was, the more empowering it was for me,” she said. Songs like “Ironic,” “Head Over Feet,” and “Hand in My Pocket” were calm, even philosophical, but it was “You Oughta Know,” her full-throated riposte to a callous ex, that made her reputation, partly because there was no one like her.",
    link: "https://open.spotify.com/album/5Ap3F8CxjjsQKZGASDcHNA",
    image: "https://i.scdn.co/image/ab67616d0000b273242e643ea07118ecf677a6ef",
  },
  {
    rank: 198,
    artist: "The B-52's",
    album: "The B-52's",
    description:
      "The debut by the B-52’s sounds like a bunch of high school friends cramming all their running jokes, goofy sounds, and private nicknames into a New Wave record. “We never thought it would get past our circle of friends in Athens [Georgia],” vocalist Fred Schneider told Rolling Stone. It turned out that nobody could resist the band’s campy, arty funk, or the eccentric squeals and bouffant hairdos of Kate Pierson and Cindy Wilson. (Playing organ, Pierson also defined the band’s sound.) They played toy instruments, and their thrift-store image was as inventive and colorful as their music — which, with “Rock Lobster,” was pretty inventive and colorful.",
    link: "https://open.spotify.com/album/3eXETk1esvZPRluDCWH3GN",
    image: "https://i.scdn.co/image/ab67616d0000b2739e2d3bc7ecb09e5124cd3f97",
  },
  {
    rank: 183,
    artist: "D'Angelo",
    album: "Brown Sugar",
    description:
      "A minister’s son from Richmond, Virginia, who performed in a hip-hop group as a teenager, D’Angelo was just entering his twenties when he released his debut, a visionary fusion of Seventies soul and Nineties R&B that paved the way for neo-soul. D’Angelo did nearly everything on Brown Sugar, layering his own dazzling harmonies while displaying a studio command that recalled Prince and Stevie Wonder, whether on the down and dirty “Jonz in My Bonz” or psychedelic soul of “Me and Those Dreamin’ Eyes of Mine,” sounding so warm and chill you almost don’t notice that “Shit, Damn, Motherfucker” is a did-me-wrong double-murder fantasy.",
    link: "https://open.spotify.com/album/4HTVABUq8amDUxBv3zJbX4",
    image: "https://i.scdn.co/image/ab67616d0000b273f6465d4b8cdd34ed4d7853e2",
  },
  {
    rank: 399,
    artist: "Brian Wilson",
    album: "Smile",
    description:
      "This album lived in myth for decades. Brian Wilson’s unfinished response to Sgt. Pepper’s Lonely Hearts Club took nearly 40 years to finally come to fruition. Longtime Wilson collaborator Van Dyke Parks helped him realize his vision, with lush string arrangements, sublime melodies, and vocal harmonies, all impeccably constructed. Close your eyes and you can imagine how it might’ve changed the world in 1968, but with Wilson’s influence still all over scads of indie bands in 2004, it sounds and feels majestically modern.",
    link: "https://open.spotify.com/album/4Uc6YCjpfyjj02rZfg2EUv",
    image: "https://i.scdn.co/image/ab67616d0000b2730556474f37fc7010f9499166",
  },
  {
    rank: 215,
    artist: "Grateful Dead",
    album: "American Beauty",
    description:
      "The Dead never sounded better in the studio than in the down-home stoner country of American Beauty. Released just five months after the folkie classic Workingmans Dead, American Beauty has some of their most beloved songs in “Ripple,” “Brokedown Palace,” and “Truckin’.” Jerry Garcia and Robert Hunter were on a hot streak, writing the ultimate outlaw credo in “Friend of the Devil.” “Box of Rain” has the Dead’s most emotional harmony vocals, especially in the haunting final lines: “Such a long, long time to be gone/And a short time to be there.”",
    link: "https://open.spotify.com/album/2UDDZVesmQwA4aYfa55diS",
    image: "https://i.scdn.co/image/ab67616d0000b273fd3f66a9ce4371f7ffa0346f",
  },
  {
    rank: 136,
    artist: "Funkadelic",
    album: "Maggot Brain",
    description:
      "“Play like your mama just died,” bandleader/genius George Clinton said to guitarist Eddie Hazel. That morose instruction worked; nothing has ever sounded like the 10 minutes of anguished, fuzzed-up blues Hazel plays on the title song. (Clinton likened the playing to “a silver web.”) Clinton was a funk surrealist and a provocateur, but he’d also been in a doo-wop group and had written songs for Motown — he balanced multicolored futurism with old-school R&B chops on the swinging “Can You Get to That,” the psychedelic “You and Your Folks, Me and My Folks,” and “Super Stupid,” another showcase for Hazel’s dense, distorted riffing. As Clinton later asked defiantly, “Who says a funk band can’t play rock?”",
    link: "https://open.spotify.com/album/3ywVzrwMQ3Kq43N9zBdBQm",
    image: "https://i.scdn.co/image/ab67616d0000b273edf91cd0c0b08afbcf20f6d1",
  },
  {
    rank: 385,
    artist: "Ramones",
    album: "Rocket to Russia",
    description:
      "The Ramones wrote their third album on tour, as they took the gospel of three chords and ripped denim beyond New York’s five boroughs. Rocket to Russia was also their first true studio triumph: an exuberant, polished bottling of the CBGB-stage napalm of Ramones and Leave Home. The razor-slashing hooks bring out the Top 40 classicism in “Rockaway Beach” and “Sheena Is a Punk Rocker,” plus the lonely-boy poignancy of Joey Ramone’s vocals in “I Don’t Care” and “I Wanna Be Well.”",
    link: "https://open.spotify.com/album/7Jb0VtDTacuQdXM3pYyrbv",
    image: "https://i.scdn.co/image/ab67616d0000b2737ed5367900f7596d7c14345a",
  },
  {
    rank: 243,
    artist: "The Zombies",
    album: "Odessey and Oracle",
    description:
      "The Zombies broke up two weeks after they completed Odessey and Oracle, in December 1967, and the album wasn’t released in the U.S. until 1969. But its baroque psychedelic-pop arrangements continue to exert a powerful influence, particularly on whimsy-loving indie rockers. Recorded in London at both Abbey Road and a Stones haunt, Olympic Studios, Odessey combined the adventure of Sgt. Pepper with the concision of British Invasion pop. And “Time of the Season” went on to become a Number Three hit.",
    link: "https://open.spotify.com/album/6XqM4NINcx3oc7NhOUKxXp",
    image: "https://i.scdn.co/image/ab67616d0000b2738b9b76a1f9a06cebe9c81b3c",
  },
  {
    rank: 275,
    artist: "Curtis Mayfield",
    album: "Curtis",
    description:
      "In the late Sixties, Curtis Mayfield fronted the Impressions, masters of doo-wop soul with a knack for hiding bracing political commentary inside honeyed harmonies. His biting, tender solo debut proved he was lethal as a lone wolf, able to write complex, sprawling, intricate soul music: “Move On Up,” a persistence mantra; “The Makings of You,” impossibly lavish; and “(Don’t Worry) If There Is a Hell Below, We’re All Going to Go,” a damning indictment of societal dysfunction that still stings today.",
    link: "https://open.spotify.com/album/3tgJmEz0R0ZsRSrpwafp4R",
    image: "https://i.scdn.co/image/ab67616d0000b273775a6bee6c704ec29aec00f4",
  },
  {
    rank: 299,
    artist: "B.B. King",
    album: "Live at the Regal",
    description:
      "By the mid-Sixties, B.B. King’s career appeared to be winding down, as black audiences began to turn their backs on the blues. But a British revival introduced the blues to young, white, American rock fans. Live at the Regal, recorded in Chicago in 1964, paved the way for King’s appearances on the rock-concert circuit and FM radio. His guitar sound was precise and powerful, driving emotional versions of some of his most influential songs, including “Every Day I Have the Blues” and “How Blue Can You Get?”",
    link: "https://open.spotify.com/album/7njGz7ZeDXL6cH3VnflcQ2",
    image: "https://i.scdn.co/image/ab67616d0000b273bf373fb956297a3c0aa3a9a0",
  },
  {
    rank: 120,
    artist: "Van Morrison",
    album: "Moondance",
    description:
      "“That was the type of band I dig,” Van Morrison said of the Moondance sessions. “Two horns and a rhythm section — they’re the type of bands that I like best.” Morrison took that soul-band lineup and blended it with jazz, blues, poetry, and vivid memories of his Irish childhood, until songs such as “And It Stoned Me” and “Caravan” felt like lucid dreams. In the title hit, Morrison turns the words over and over in his mouth, not scatting so much as searching for the sound of magic. “Into the Mystic” serves as an apt summary: To listen to the album is to get your passport stamped for Morrison’s world of ecstatic visions.",
    link: "https://open.spotify.com/album/5PfnCqRbdfIDMb1x3MPQam",
    image: "https://i.scdn.co/image/ab67616d0000b273d828b182ee9b7193a0f8b5d6",
  },
  {
    rank: 101,
    artist: "Led Zeppelin",
    album: "Led Zeppelin",
    description:
      "On their first album, Led Zeppelin were still in the process of inventing their own sound, moving on from the heavy rave-ups of guitarist Jimmy Page’s previous band, the Yardbirds. But from the beginning, Zeppelin had the astonishing fusion of Page’s lyrical guitar playing and Robert Plant’s paint-peeling love-hound yowl. “We were learning what got us off most and what got people off most,” said Plant. Yet the template for everything Zeppelin achieved in the 1970s is here: brutal rock (“Communication Breakdown”), thundering power balladry (“Your Time Is Gonna Come”), and acid-flavored folk blues (“Babe I’m Gonna Leave You”).",
    link: "https://open.spotify.com/album/44Ig8dzqOkvkGDzaUof9lK",
    image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69",
  },
  {
    rank: 302,
    artist: "Neil Young",
    album: "Tonight's the Night",
    description:
      "Neil Young made this album as a tribute to two friends who died from drugs, Crazy Horse guitarist Danny Whitten and roadie Bruce Berry. Young sounds like he’s on the edge of a breakdown in the mournful ballads “Tired Eyes” and “Speakin’ Out,” recorded (mostly in one tequila-heavy night) with a loose, heavily emotional sound — “a drunken Irish wake” in the words of Crazy Horse bassist Billy Talbot. Quintessentially Young, it was recorded just a year after his soft-rock hit Harvest. “Everybody was hoping I’d turn into John Denver,” Young said. “That didn’t happen.”",
    link: "https://open.spotify.com/album/2EilS3FRaJyUXDy88UuGUC",
    image: "https://i.scdn.co/image/ab67616d0000b2731df692c3b902ab127ada012a",
  },
  {
    rank: 464,
    artist: "The Isley Brothers",
    album: "3 + 3",
    description:
      "The Isley Brothers ballooned from a trio that impressed the Beatles to a six-piece band on 3 + 3, which helped establish them as a funk force in the 1970s. The hit “That Lady” is stuffed with laser-bright guitar solos, and the slow numbers (including a cover of James Taylor’s “Don’t Let Me Be Lonely Tonight,” in which Ron Isley unfurled his heartbreaking falsetto and forceful midrange) hint toward the band’s bright future as pre-eminent balladeers in R&B’s Quiet Storm era.",
    link: "https://open.spotify.com/album/27eI33obJuyKebMTxAJJam",
    image: "https://i.scdn.co/image/ab67616d0000b2739d1d0e64081ea5c0927d6051",
  },
  {
    rank: 105,
    artist: "The Allman Brothers",
    album: "At Fillmore East",
    description:
      "Although this double album is the perfect testimony to the Allman Brothers’ improvisational skills, it is also evidence of their unprecedented connection with the crowds at New York’s Fillmore East. “The audience would kind of play along with us,” singer-organist Gregg Allman said of those March 1971 shows. “They were right on top of every single vibration coming from the stage.” The guitar team of Duane Allman and Dickey Betts was at its peak, seamlessly fusing blues and jazz in “Whipping Post” and “In Memory of Elizabeth Reed.” But their telepathy was cut short: Just three months after the album’s release, Duane died in a motorcycle accident.",
    link: "https://open.spotify.com/album/0Y5Wlv2OJKaW0uDJ5HnUfy",
    image: "https://i.scdn.co/image/ab67616d0000b2730e18e033b73488ca08a89b5b",
  },
  {
    rank: 356,
    artist: "Dr. John",
    album: "Gris-Gris",
    description:
      "Mac Rebennack was a New Orleans piano player on songs for Professor Longhair and Frankie Ford who moved to L.A. in the Sixties, where he played on Phil Spector sessions and encountered California psychedelia. Rechristening himself Dr. John Creaux the Night Tripper, he made this swamp-funk classic. Gris-Gris blends New Orleans R&B, voodoo chants, and chemical inspiration. The groovy Afro-Caribbean percussion and creaky sound effects aren’t just otherworldly — they seem to come from several other worlds all at once.",
    link: "https://open.spotify.com/album/1yBoaVrgcup2hX2DCYUajs",
    image: "https://i.scdn.co/image/ab67616d0000b27356f178d032c89d3b18fde52d",
  },
  {
    rank: 389,
    artist: "Mariah Carey",
    album: "The Emancipation of Mimi",
    description:
      "Mariah Carey’s last couple of albums had only attained platinum status, paltry by her usual high-flying standards. But the vocal acrobat swept away the naysayers with “We Belong Together,” a chattering, heartbroken ballad that interpolates two R&B classics (Bobby Womack’s “If You Think You’re Lonely Now” and the Deele’s “Two Occasions”), then followed that song’s huge success with “Shake It Off,” a dismissive, vengeful cut for all the jilted lovers — and The Emancipation of Mimi turned out to be a sextuple-platinum return to form.",
    link: "https://open.spotify.com/album/43iBTEWECK7hSnE0p6GgNo",
    image: "https://i.scdn.co/image/ab67616d0000b273768bc8d9f078db929dfcfbd1",
  },
  {
    rank: 276,
    artist: "Radiohead",
    album: "The Bends",
    description:
      "If the first half of the Nineties was shaped by Nirvana, the template for the second half was set by Radiohead. The Bends marries a majestic and somber guitar sound to Thom Yorke’s anguished-choirboy vocals. “Fake Plastic Trees” was something of a radio hit, an introspective acoustic ballad of alienation. And not yet shying away from guitar anthems, Radiohead drew on the epic grandeur of U2 and the melancholy of the Smiths in “Nice Dream,” “Just,” and the haunting finale, “Street Spirit (Fade Out).”",
    link: "https://open.spotify.com/album/35UJLpClj5EDrhpNIi4DFg",
    image: "https://i.scdn.co/image/ab67616d0000b2739293c743fa542094336c5e12",
  },
  {
    rank: 265,
    artist: "Pavement",
    album: "Wowee Zowee",
    description:
      "The Nineties indie-rock princes took everyone by surprise by mellowing out for their third album. Wowee Zowee is a kaleidoscopic mix of ideas, the sound of noise-guitar dudes kicking back for some summer fun. Pavement switch gears with every song, from the ballad “We Dance” to the pop-punk spritzer “AT&T” to cryptic blurts like “Fight This Generation.” As Stephen Malkmus explained, “We did neuter many of the silly things about rock, but we still embraced a lot of them, too, because we’re party kids and we like a Bo Diddley beat.”",
    link: "https://open.spotify.com/album/0OHDiDMyxzWJfwtoeHNCf4",
    image: "https://i.scdn.co/image/ab67616d0000b273fceeb2db4c318f571df04a1f",
  },
  {
    rank: 11,
    artist: "The Beatles",
    album: "Revolver",
    description:
      "Revolver was the sound of the Beatles fully embracing the recording studio as a sonic canvas, free to pursue musical ideas and possibilities that would reshape rock forever. It speaks volumes that the first song the band worked on upon entering Abbey Road studios in April 1966 would have been impossible to replicate live — a swirl of hazy guitar, backward tape loops, kaleidoscopic drum tumble, and John Lennon’s voice recorded to sound like “the Dalai Lama singing from the highest mountaintop.” They titled it “The Void” and later renamed it “Tomorrow Never Knows.” “I was wondering how George Martin would take it,” Paul McCartney later recalled. Martin’s response: “Jolly interesting.”\nThe Beatles’ lives were changing too: Lennon had taken LSD at this point, George Harrison was deepening his interest in Eastern mysticism, and McCartney was getting into avant-garde composition. All those influences came through here.\nRevolver wasn’t totally without precedent. The Beatles’ previous album, Rubber Soul [see No. 35], had a similar experimental introspect. Harrison once said Rubber Soul and Revolver “could be volume one and volume two.” But no band, including the Beatles, had tried anything like McCartney’s strikingly mature art song “Eleanor Rigby,” Lennon’s trippy tape-loop swirl “I’m Only Sleeping,” or Harrison’s “Taxman,” with its cutting groove and lyrics that took shots at British politicians.\nIt made sense that the disappointing live shows the band played in the summer of 1966 would be their last. By the time Revolver came out, they’d already entered another world.",
    link: "https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR",
    image: "https://i.scdn.co/image/ab67616d0000b27328b8b9b46428896e6491e97a",
  },
  {
    rank: 461,
    artist: "Bon Iver",
    album: "For Emma",
    description:
      "Justin Vernon didn’t plan on reshaping a generation’s understanding of love-torn folk music when he retreated to the Wisconsin woods to record his first album (“I was very sad and very lonely”), but that’s exactly what happened. What’s even more staggering is the way Vernon’s Auto-Tune and falsetto-laden DIY debut, which centered around the heartsick “Skinny Love,” would reshape the contours of the pop mainstream — from Ed Sheeran and Kanye West to James Blake and Taylor Swift — for years to come.",
    link: "https://open.spotify.com/album/7EJ0OT5ZqybXxcYRa6mccM",
    image: "https://i.scdn.co/image/ab67616d0000b273bf7c317a63c4f128b8823406",
  },
  {
    rank: 100,
    artist: "The Band",
    album: "Music From Big Pink",
    description:
      "“Big Pink” was a pink house in Woodstock, New York, where the Band — Bob Dylan’s 1965-66 backup band on tour — moved to be near Dylan after his motorcycle accident. While he recuperated, the Band backed him on the demos later known as The Basement Tapes and made their own debut. Dylan offered to play on the album; the Band said no thanks. “We didn’t want to just ride his shirttail,” drummer Levon Helm said. Dylan contributed “I Shall Be Released” and co-wrote two other tunes. But it was the rustic beauty of the Band’s music and the incisive drama of their own reflections on family and obligations, such as “The Weight,” that made Big Pink an instant homespun classic.",
    link: "https://open.spotify.com/album/0ky5kdvfPxSmSpj03hpSAE",
    image: "https://i.scdn.co/image/ab67616d0000b27320bbceac6950d3fe13fa13c3",
  },
  {
    rank: 360,
    artist: "Funkadelic",
    album: "One Nation Under a Groove",
    description:
      "George Clinton led two of the 1970s’ wildest bands: Funkadelic for rock guitars, Parliament for dance beats. But this album sums up his whole P-Funk empire, as Clinton spreads the gospel of mind-altering, loose-booty rhythms for the body and brain. “One Nation Under a Groove” is a call to arms, demanding “the funk, the whole funk, and nothing but the funk.” Another song asks, “Who Says a Funk Band Can’t Play Rock?!” It’s the same message Uncle Jam has always preached: Free your mind and your ass will follow.",
    link: "https://www.youtube.com/watch?v=sgrvOR77T2o",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Funkadelic_-_One_Nation_Under_a_Groove.jpg",
  },
  {
    rank: 388,
    artist: "Aretha Franklin",
    album: "Young, Gifted and Black",
    description:
      "Aretha Franklin was 29 at the time of Young, Gifted and Black, and she was already on her 19th album and her second record label. With her gospel-choir training and jazz chops, there was nothing she didn’t know about singing. Franklin covers (and vivifies) Paul McCartney and Elton John, not to mention Nina Simone’s title song, an anthem of the civil rights movement, and she sings the self-written hits (“Day Dreaming,” “Rock Steady”) with calm certainty, guided only by the spirit.",
    link: "https://open.spotify.com/album/0k5C3Z7w7uQpyGFQEzl7yB",
    image: "https://i.scdn.co/image/ab67616d0000b273ee5fcff519d1098aa5de990d",
  },
  {
    rank: 386,
    artist: "J Dilla",
    album: "Donuts",
    description:
      "Questlove of the Roots called the Detroit producer “the music god that music gods and music experts and music lovers worship.” During the Nineties and early ’00s, Dilla worked with a who’s who of hip-hop greats and helped shape the sound of albums like D’Angelo’s Voodoo [see No. 28]. Released three days before his death, Donuts is a beat head’s delight: 31 concise, wildly inventive sample-swirls (love the Frank Zappa bit on “Mash”), many of which would end up being sampled themselves in the years that followed.",
    link: "https://open.spotify.com/album/5fMlysqhFE0itGn4KezMBW",
    image: "https://i.scdn.co/image/ab67616d0000b27383bb78285449998bb974da45",
  },
  {
    rank: 310,
    artist: "Wire",
    album: "Pink Flag",
    description:
      "This first-generation U.K. punk band made sparse tunes that erupted in combustible snippets on its 21-track debut album. America never got it, but Pink Flag — as revolutionary discs tend to do — influenced some important bands, including Sonic Youth and the Minutemen. It also might be one of the most-covered punk LPs ever: Minor Threat did “12XU,” R.E.M. did “Strange,” the New Bomb Turks did “Mr. Suit,” Spoon did “Lowdown,” the Lemonheads did “Fragile,” and on and on.",
    link: "https://open.spotify.com/album/4WXqZZ28geJSPtqLcCF56L",
    image: "https://i.scdn.co/image/ab67616d0000b2734c6c5ba83f726dbecf710361",
  },
  {
    rank: 430,
    artist: "Elvis Costello",
    album: "My Aim Is True",
    description:
      "Elvis Costello on the fuel for his debut: “I spent a lot of time with just a big jar of instant coffee and the first Clash album [see No. 102], listening to it over and over.” The music is more pub rock than punk rock, but the songs are full of punk’s verbal bite. The album’s opening lines — “Now that your picture’s in the paper being rhythmically admired” — and the poisoned-valentine ballad “Alison” established Costello as one of the sharpest, and nastiest, lyricists of his generation.",
    link: "https://open.spotify.com/album/1aucGNKimhgARC7iO2xLt2",
    image: "https://i.scdn.co/image/ab67616d0000b273008a93d976cfd5a76ba06b9b",
  },
  {
    rank: 256,
    artist: "Tracy Chapman",
    album: "Tracy Chapman",
    description:
      "Somehow, this young folk singer came out of nowhere to catch everyone’s ear during the hair-metal late Eighties. Tracy Chapman had already spent time strumming her acoustic guitar for spare change on the streets around Boston, but her gritty voice and storytelling made “Fast Car” a huge hit. Her debut confronted listeners with the raw truths of songs like “Behind the Wall,” a grueling portrayal of domestic violence sung a cappella, and the radical hope of the anthemic opening track, “Talkin’ Bout a Revolution.”",
    link: "https://open.spotify.com/album/6hmmX5UP4rIvOpGSaPerV8",
    image: "https://i.scdn.co/image/ab67616d0000b2737602becfedf6e25752cb54ff",
  },
  {
    rank: 363,
    artist: "Parliament",
    album: "The Mothership Connection",
    description:
      "George Clinton leads his Detroit crew of “extraterrestrial brothers” through a visionary album of science-fiction funk on jams like “Supergroovalisticprosifunkstication” and “Give Up the Funk (Tear the Roof Off the Sucker).” It’s a concept album inspired by Star Trek and 2001: A Space Odyssey, with Clinton as an outer-space radio DJ, broadcasting uncut funk from “the Chocolate Milky Way” and telling the people of Earth, “Put a glide in your stride and a dip in your hip, and come on up to the Mothership.”",
    link: "https://open.spotify.com/album/2IZLEXlJsKX9Rcl6vdT0JC",
    image: "https://i.scdn.co/image/ab67616d0000b2735fad95e946c4e6b0a2211056",
  },
  {
    rank: 371,
    artist: "The Temptations",
    album: "Anthology",
    description:
      "Indisputably the greatest black vocal group of the modern era, the Temptations embodied Motown, channeling unique individual voices and talents into pristine hits and tight, tuxedoed choreography. This three-album set features masterpiece after masterpiece of chugging, gospel-tinged soul, including “My Girl,” “I Can’t Get Next to You,” and “I Wish It Would Rain,” and later, psychedelic-soul adventures like “Cloud Nine” and the gritty message-song masterpiece “Ball of Confusion.”",
    link: "https://open.spotify.com/album/2kzUxFepw1uLjbgqV537eP",
    image: "https://i.scdn.co/image/ab67616d0000b273dabb260cf41a2fbb2c842787",
  },
  {
    rank: 395,
    artist: "D’Angelo and the Vanguard",
    album: "Black Messiah",
    description:
      "Fourteen years after Voodoo, D’Angelo built up impossible levels of anticipation for his next move. But Black Messiah was worth the wait. He brought a new political rage to deep-soul grooves like “The Charade,” responding to the Black Lives Matter movement: “All we wanted was a chance to talk/Instead we only got outlined in chalk.” D’Angelo admits in “Really Love,” “I’m not an easy man to overstand.” Yet he meshes beautifully with kindred spirits, from Roots drummer Questlove to jazz trumpeter Roy Hargrove.",
    link: "https://open.spotify.com/album/5Hfbag0SsHxafx1SySFSX6",
    image: "https://i.scdn.co/image/ab67616d0000b2735fb07fa92d5d658edadf053a",
  },
  {
    rank: 92,
    artist: "The Jimi Hendrix Experience",
    album: "Axis: Bold as Love",
    description:
      "Jimi Hendrix’s first album remade rock & roll with guitar magic that no one had ever even dreamed of before; his second album was just plain magic. It started with some musings on extraterrestrial life, then got really far out: jazzy drumming, funky balladry, liquid guitar solos, dragonfly heavy metal, and the immortal stoner’s maxim from “If Six Was Nine”: “I’m the one who’s got to die when it’s time for me to die, so let me live my life the way I want to.” All over the album, Hendrix was inventing new ways to make the electric guitar roar, sing, talk, shriek, flutter, and fly. And with the delicate “Little Wing,” he delivered one of rock’s most cryptic and bewitching love songs.",
    link: "https://open.spotify.com/album/3uFZf8rykoHo7XMIQVYW6r",
    image: "https://i.scdn.co/image/ab67616d0000b27319dcd95d28b63d10164327f2",
  },
  {
    rank: 321,
    artist: "Lana Del Rey",
    album: "Norman Fucking Rockwell!",
    description:
      "Lana Del Rey became a music-blog sensation playing the poker-faced millennial Nancy Sinatra on her debut single, “Video Games.” She kept growing as an artist, and on her wonderfully titled sixth album perfected her epic vision of doomed, decadent, Seventies-steeped California romance on songs like “Mariner’s Apartment Complex” and the nine-minute crusher “Venice Bitch.” Del Rey dropped references to the Eagles and Graham Nash, merging her own music into the Laurel Canyon canon. No less an authority on Seventies greatness than Elton John called the album’s songs “timeless.”",
    link: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A",
    image: "https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9",
  },
  {
    rank: 127,
    artist: "Ray Charles",
    album: "Modern Sounds in Country and Western Music",
    description:
      "Country and soul were deeply entangled Southern traditions and had been cross-pollinating for years. But Modern Sounds was still the audacious boundary smasher its title promised, with Ray Charles applying his gospel grit and luscious soul-pop strings to standards by Hank Williams (“Half as Much,” “You Win Again,” “Hey, Good Lookin’”) and Eddy Arnold, whose lover’s lament “You Don’t Know Me” is recast as a parable about race relations in light of the civil rights struggle. Modern Sounds became the most popular album of Charles’ career and includes the hits “I Can’t Stop Loving You” and “Born to Lose.”",
    link: "https://open.spotify.com/album/4j4w5DDWMKD7ePStAl19OF",
    image: "https://i.scdn.co/image/ab67616d0000b2737b97663666f03928ff1e4578",
  },
  {
    rank: 315,
    artist: "Rosalía",
    album: "El Mal Querer",
    description:
      "In her Grammy-winning breakthrough album, El Mal Querer (in English, A Toxic Love), groundbreaking Spanish singer-producer Rosalía not only mainstreamed the centuries-old tradition of flamenco music, she also freaked it, using the power of 808s and a whole lotta heartbreak. Rosalía assumes a rapper’s bravado in the opening track, “Malamente,” and in the palma-pop gem “Di Mi Nombre,” she grabs her bullish lover by the horns. The result is one of the best ancient-modern mash-ups of the 21st century.",
    link: "https://open.spotify.com/album/355bjCHzRJztCzaG5Za4gq",
    image: "https://i.scdn.co/image/ab67616d0000b273f4d64a6a6b7e24b6bd9f009f",
  },
  {
    rank: 186,
    artist: "Red Hot Chili Peppers",
    album: "Blood Sugar Sex Magik",
    description:
      "No one ever disputed the boisterous energy of the Red Hot Chili Peppers’ music — it was only a matter of whether these funky monks could write riffs and songs that stood alongside their idols. On their fifth studio album, they got the balance right. They went touchy-feely (and multiplatinum) with the ballad “Under the Bridge,” the biggest of the album’s five hit singles. In addition, guitarist John Frusciante brought energizing, songful riffs, producer Rick Rubin kept the songs streamlined and free of juvenilia, and Anthony Kiedis brought a new degree of simplicity to his singing.",
    link: "https://open.spotify.com/album/30Perjew8HyGkdSmqguYyg",
    image: "https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70",
  },
  {
    rank: 336,
    artist: "Roxy Music",
    album: "Avalon",
    description:
      "Peter Sinfield, the producer of Roxy Music’s angular and wild 1972 debut, said that on Avalon they “ran out of naiveté.” Their sound was now woozy and refined, horny yet mature, and unabashedly, unironically romantic. A synth-soul landmark, Avalon was their biggest hit, their swan song, and the height of rock elegance and sophistication. The reggae lilt of the album’s title track was inspired by Bob Marley, who had recorded at the same studio as Roxy Music during the Seventies.",
    link: "https://open.spotify.com/album/3JXODSjT9mUz2lIb4YIErw",
    image: "https://i.scdn.co/image/ab67616d0000b273c7972702cff224328b39f8a6",
  },
  {
    rank: 240,
    artist: "Sam Cooke",
    album: "Live at the Harlem Square Club, 1963",
    description:
      "Sam Cooke was elegance and soul personified, but he works this Florida club until it’s hotter than hell, all while sounding like he never breaks a sweat. He croons and strokes “For Sentimental Reasons” like a superlover, and when the crowd sings along with him, it’s magic. RCA Records originally shelved the album out of fear that Cooke’s raw performance might alienate crossover (read: white) audiences. When it was finally released more than 20 years after he recorded, Live at the Harlem Square Club gave many fans a whole new perspective of his greatness.",
    link: "https://open.spotify.com/album/3nTXqOEHr6AfTb1WSaB4Pm",
    image: "https://i.scdn.co/image/ab67616d0000b273cada54c15af0a1da882f08f9",
  },
  {
    rank: 43,
    artist: "A Tribe Called Quest",
    album: "The Low End Theory",
    description:
      "“We wanted the longevity of Earth, Wind, and Fire, and Prince, and people of that nature,” Phife Dawg told Rolling Stone. “We wanted to be known for full-length albums.” Other people connected the dots between hip-hop and jazz , but A Tribe Called Quest’s second album drew the entire picture. The sound is dominated by the low end of the title — they even recruited legendary jazz bassist Ron Carter (who’d worked with Thelonious Monk and Miles Davis). As Carter gets dope on the double bass, the Tribe discourse on matters ranging from the music industry (“Show Business”) to sexual politics (“The Infamous Date Rape”). Each time Q-Tip rhymes over Carter’s bass lines, the groove just gets deeper.",
    link: "https://open.spotify.com/album/1p12OAWwudgMqfMzjMvl2a",
    image: "https://i.scdn.co/image/ab67616d0000b273f38c6b37a21334e22005b1f7",
  },
  {
    rank: 116,
    artist: "The Cure",
    album: "Disintegration",
    description:
      "According to the kids on South Park, this is the best album ever made. According to many depressive Eighties-minded kids, it’s the only album ever made. Disintegration was the height of stadium goth rock, with the Cure stretching out for long, spacious wallows like ‘Plainsong” and “Prayers for Rain.” But it also shows off Robert Smith’s stunning pop mastery on “Lovesong,” which Smith wrote as a wedding present for his wife, and the rapturously forlorn “Pictures of You.” On “Fascination Street,” his voice shakes like milk as he makes adolescent angst sound so wonderfully, wonderfully pretty. “I was trying to put in one or two beacons of light in amongst the darkness,” he told Rolling Stone.",
    link: "https://open.spotify.com/album/6vQB3ZBxnQPP3jQcGV2qzg",
    image: "https://i.scdn.co/image/ab67616d0000b273c7ca2db25ad377e022bc3975",
  },
  {
    rank: 329,
    artist: "DJ Shadow",
    album: "Endtroducing.....",
    description:
      "Northern California beat junkie Josh Davis (a.k.a. DJ Shadow) spent a year and a half chasing his dream of “the ultimate sample record,” and nailed it with his debut LP. Endtroducing….. is the height of the mid-Nineties trend of the hip-hop DJ as an experimental sound painter, a mix of head-trip beats, absurdist samples, and old-school block-party showmanship that touched listeners way beyond the turntablist underground. “Endtroducing was a big influence on OK Computer,” Jonny Greenwood of Radiohead recalled.",
    link: "https://open.spotify.com/album/4wvqGLk1HThPA0b5lzRK2l",
    image: "https://i.scdn.co/image/ab67616d0000b2738ce8e9530b875fb9d01a11d8",
  },
  {
    rank: 369,
    artist: "Mobb Deep",
    album: "The Infamous",
    description:
      "“We were just straight hood,” Havoc said. “It wasn’t no pretty boy shit. He was talking about the Timberlands and bandanas he and Prodigy (R.I.P.) wore, but that was also the brutal appeal of their second album, which the duo produced mostly by themselves. Q Tip functioned as an executive producer, adding depth to sinister tracks built off of 1970s samples, many of them from the LP collection that Prodigy’s jazz-musician grandfather left to him. “Shook Ones Pt. II,” a minor hit, and “Survival of the Fittest” have only one impetus, to document life in a Queens project.",
    link: "https://open.spotify.com/album/1cCAb1vN8uUsdfEylVmTLs",
    image: "https://i.scdn.co/image/ab67616d0000b273a2203fa0656cede30f879b97",
  },
  {
    rank: 153,
    artist: "PJ Harvey",
    album: "Rid of Me",
    description:
      "“I very much wanted to write songs that shocked,” Polly Jean Harvey said years after releasing her second album. The shock came partly from her lyrics, which were often proclamations of sexual compulsion, and also from the intense dynamic shifts in her music, which careen from blues to goth, often in the space of one song. Harvey was under the influence of Howlin’ Wolf, Tom Waits, and Flannery O’Connor, and her singing, writing, and lead-guitar playing coalesce into something marked by flames. The lyrics have lots of licking, moaning, bleeding, stroking, open mouths, and dismembered body parts. The songs spew viscera as they build to a sticky ecstasy.",
    link: "https://open.spotify.com/album/2fDJpBJhtloxzUENHlU9JB",
    image: "https://i.scdn.co/image/ab67616d0000b2735950e19534bed4e25b6048f1",
  },
  {
    rank: 164,
    artist: "Johnny Cash",
    album: "At Folsom Prison",
    description:
      "By the late Sixties, Cash was ignored by country radio and struggling for a comeback. At Folsom Prison was a million-seller that reignited his career. A year later, he was writing liner notes for Bob Dylan’s Nashville Skyline and logging four weeks at Number One with his second prison album, At San Quentin. But Folsom Prison is essential Cash. Backed by a tough touring band, including fellow Sun Records alum Carl Perkins on guitar, Cash guffaws his way through “Cocaine Blues,” “25 Minutes to Go” (a countdown to an execution), and “Folsom Prison Blues,” with its line about shooting a man just to watch him die. The 2,000 inmates in attendance roar their approval.",
    link: "https://open.spotify.com/album/4TJIdlY9hGSSTO1kUs1neh",
    image: "https://i.scdn.co/image/ab67616d0000b2734a04593b7c149dc7b725683e",
  },
  {
    rank: 444,
    artist: "Fiona Apple",
    album: "Extraordinary Machine",
    description:
      "After cutting a pristine chamber-pop version of her third album with Jon Brion, her collaborator on 1999’s When the Pawn…, Apple’s label demanded revisions, so she redid almost the whole thing with Dr. Dre sideman Mike Elizondo and Beatles aficionado Brian Kehew. The changes and attendant delays spurred protests from fans, but the end result was hardly a compromise: Extraordinary Machine is a complex, versatile breakup record, with Apple playing McCartney-esque piano lines over skipping rhythms on melodically rich, lyrically thorny songs like “O’ Sailor” and “Better Version of Me.” You try squeezing the word “stentorian” into hooks you can belt at karaoke.",
    link: "https://open.spotify.com/album/1z0O8lKuQRs974S8wcRiAs",
    image: "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
  },
  {
    rank: 76,
    artist: "Curtis Mayfield",
    album: "Superfly",
    description:
      "Isaac Hayes’ Shaft came first — but that record had one great single and a lot of instrumental filler. It was Curtis Mayfield who made a blaxploitation-film soundtrack album that packed more drama than the movie it accompanied. Musically, Superfly is astonishing, marrying lush string parts to deep bass grooves, with lots of wah-wah guitar. On top, Mayfield sings in his world-wise falsetto, narrating the bleak tales of “Pusherman” and “Freddie’s Dead,” telling hard truths about the drug trade and black life in the 1970s. “I don’t take credit for everything I write,” Mayfield said. “I only look upon my writings as interpretations of how the majority of people around me feel.”",
    link: "https://open.spotify.com/album/5QuvlU7nCUZZJauMvhlWR4",
    image: "https://i.scdn.co/image/ab67616d0000b273177fea3fc7f8075fdb40f167",
  },
  {
    rank: 102,
    artist: "The Clash",
    album: "The Clash",
    description:
      "“I haven’t got any illusions about anything,” Joe Strummer said. “Having said that, I still want to try to change things.” That youthful ambition bursts through the Clash’s debut, a machine-gun blast of songs about unemployment (“Career Opportunities”), race (“White Riot”), and the Clash themselves (“Clash City Rockers”). Most of the guitar was played by Mick Jones, because Strummer considered studio technique insufficiently punk. The American release was delayed two years and replaced some of the U.K. tracks with recent singles, including “Complete Control” — a complaint about exactly those sort of record-company shenanigans.",
    link: "https://open.spotify.com/album/49kzgMsxHU5CTeb2XmFHjo",
    image: "https://i.scdn.co/image/ab67616d0000b27346db502388d44edb43ebb261",
  },
  {
    rank: 342,
    artist: "The Beatles",
    album: "Let It Be",
    description:
      "Let It Be is the sound of the world’s biggest pop group at war with itself. John Lennon is at his most acidic; George Harrison’s “I Me Mine” is about the sin of pride. Only Paul McCartney sounds focused, as if the title song were his personal survival mantra. The original concept was a live-in-the-studio album and film, begun in January 1969, that left the Beatles so weary that they abandoned the project to make Abbey Road. Phil Spector went back to the tapes later, sweetening ballads like “Across the Universe” and “The Long and Winding Road.”",
    link: "https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5",
    image: "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
  },
  {
    rank: 247,
    artist: "Sade",
    album: "Love Deluxe",
    description:
      "After releasing three multiplatinum records in a four-year flurry in the 1980s, Sade took another four years before putting out Love Deluxe in 1992. The group partially turned away from the soft, impeccable grooves that had made their previous LPs so successful, lacing the album opener, “No Ordinary Love,” with menacing guitars. But they remained masters at transcendent serenity: “I Couldn’t Love You More” verges on deep house as it overflows with contentment, while “Cherish the Day” wins with a simple entreaty, “Show me how deep love can be.”",
    link: "https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG",
    image: "https://i.scdn.co/image/ab67616d0000b273ee65bbd54f993b5f01d5c511",
  },
  {
    rank: 94,
    artist: "The Stooges",
    album: "Fun House",
    description:
      "With garage-savvy ex-Kingsmen keyboardist Don Gallucci producing their second album, the Stooges made their most fully realized effort, despite their collective drug problems. “We had a certain purity of intention,” Iggy Pop asserted. “I don’t think we did ever get it from the drugs. I think they killed things.” They couldn’t kill what he has called the relentless “troglodyte groove” the band had on Fun House. “I stick it deep inside,” Iggy growls on “Loose,” one of the album’s typically confrontational tracks. Later, on “1970,” he insisted, ad infinitum, “I feel all right,” and there’s no question you wouldn’t want any of whatever he was on.",
    link: "https://open.spotify.com/album/3FTcomSFg2zWSqWLRgBYpv",
    image: "https://i.scdn.co/image/ab67616d0000b27313aa419336db598eb2674b1a",
  },
  {
    rank: 481,
    artist: "Belle and Sebastian",
    album: "If You’re Feeling Sinister",
    description:
      "Being a self-pitying shut-in has never sounded better than it does on the Scottish twee icons’ breakthrough. The chamber-folk arrangements are second to none — like a cup of tea brewed for you by a hopeless crush with a really good record collection — but don’t sleep on Stuart Murdoch’s subtly sardonic lyrics on “The Stars of Track and Field” and “Seeing Other People,” which give these wistful-sounding songs a bite that sets them apart from most imitators.",
    link: "https://open.spotify.com/album/0cR6FGQSOUDEwwapI7yfQZ",
    image: "https://i.scdn.co/image/ab67616d0000b27392e49170ce5ba7e1bbb334d2",
  },
  {
    rank: 233,
    artist: "Tori Amos",
    album: "Little Earthquakes",
    description:
      "Here Tori Amos established herself as the poet laureate for a generation of battle-worn young women no longer satisfied with silence. From behind a piano that she wields like a machete aside her sharp, poignant reflections, Little Earthquakes is an incisive reflection on sexual assault, abuse, PTSD, and coming of age under the heavy veil of it all. At times thorny and confrontational, Amos’ voice still remains a warm invitation to people, like her, learning how to diffuse their trauma and move forward as best they can.",
    link: "https://open.spotify.com/album/5bxqwBKvCyB67zOEVCrFZE",
    image: "https://i.scdn.co/image/ab67616d0000b273f2f65c08a66e03c69cbc0081",
  },
  {
    rank: 54,
    artist: "James Brown",
    album: "Star Time",
    description:
      "So great is James Brown’s impact that even with 71 songs on four CDs, Star Time isn’t quite comprehensive — between 1956 and 1984, Brown placed an astounding 103 singles on the R&B charts. But every phase of his career is well-represented here: the pleading, straight-up R&B of “Please, Please, Please”; his instantaneous reinvention of R&B with “Papa’s Got a Brand New Bag,” where the rhythm takes over and the melody is subsumed within the groove; his spokesmanship for the civil rights movement in “Say It Loud — I’m Black and I’m Proud (Part 1)”; his founding document of Seventies funk, “Sex Machine”; and his blueprint for hip-hop in “Funky Drummer.”",
    link: "https://open.spotify.com/album/2yuTyv0L51qvYuI5RIktlA",
    image: "https://i.scdn.co/image/ab67616d0000b273818c45ca29446e7352ba187f",
  },
  {
    rank: 384,
    artist: "The Kinks",
    album: "The Kinks Are the Village Green Preservation Society",
    description:
      "While their British Invasion peers— the Beatles, the Stones, the Who —  were getting psychedelic, Ray Davies took his band for a pastoral retreat, with witty portraits of quaint English small-town life fading away like “Big Sky.” Nobody bought it, but Village Green went on to become one of the Kinks’ most influential statements. “With ‘You Really Got Me’ and ‘All Day and All of the Night,’ we were saying, ‘We’re here, we’re gonna grab you,’” Davies told Rolling Stone. “The music on Village Green says, ‘Come find us.’”",
    link: "https://open.spotify.com/album/0YgkR96bK9JSHcj236W9ZK",
    image: "https://i.scdn.co/image/ab67616d0000b27359778f5ff386eda871ee61b7",
  },
  {
    rank: 307,
    artist: "Sam Cooke",
    album: "Portrait of a Legend",
    description:
      "“Sam Cooke was the best singer who ever lived, no contest,” asserted Atlantic Records’ Jerry Wexler. Cooke was a gospel star who crossed over to rock & roll, helping to invent the music that would become known as soul. This collection spans his whole career, from his early work with gospel kings the Soul Stirrers to the civil rights anthem “A Change Is Gonna Come,” which became a posthumous hit after Cooke was shot to death at an L.A. motel in 1964.",
    link: "https://open.spotify.com/album/4jiO2jRz7g50ESvYYKsKwZ",
    image: "https://i.scdn.co/image/ab67616d0000b273eecd52ae61ea9915ba46d251",
  },
  {
    rank: 451,
    artist: "Roberta Flack",
    album: "First Take",
    description:
      "At the peak of psychedelic soul music, Roberta Flack debuted with a classy quietude and thoughtful grace, recording with jazz musicians and complex horn and string arrangements. Her record was widely admired, but it didn’t become popular until three years later, after her pained version of Ewan MacColl’s 1950s folk ballad, “The First Time Ever I Saw Your Face,” scored a love scene in Clint Eastwood’s movie Play Misty for Me, and the song spent six weeks atop the Billboard Hot 100 chart.",
    link: "https://open.spotify.com/album/2ARWEOvaUgm4FSj25MpY6F",
    image: "https://i.scdn.co/image/ab67616d0000b273685f8851f3be611c386c7cc0",
  },
  {
    rank: 143,
    artist: "The Velvet Underground",
    album: "The Velvet Underground",
    description:
      "The third Velvet Underground album doesn’t have any songs about S&M or drug deals, and there’s no wailing feedback. But quieter beauty was just as revelatory. Lou Reed sang poignant folk-rock tunes that describe loss (“Pale Blue Eyes”) or spiritual thirst (“Jesus”). And because the Velvets liked it when people danced at their shows, there are two great uptempo numbers, “Beginning to See the Light” and “What Goes On,” where Reed and Sterling Morrison entwine their guitar licks and sustain a joyful minimalist groove that creates a blueprint for generations of bands, including everyone from the Modern Lovers to the Feelies to Parquet Courts.",
    link: "https://open.spotify.com/album/4xwx0x7k6c5VuThz5qVqmV",
    image: "https://i.scdn.co/image/ab67616d0000b27398260c528e6eec9dd431c1d7",
  },
  {
    rank: 174,
    artist: "Jimmy Cliff and Various Artists",
    album: "The Harder They Come: Original Soundtrack",
    description:
      "This was the album that took reggae worldwide. The movie was a Jamaican stew of Robin Hood, High Sierra, and Easy Rider — reggae singer turns outlaw hero, goes on the run with guns blazing — with patois dialogue so thick that U.S. audiences needed subtitles. But the soundtrack needed no translation, introducing Babylon to the new beat. The film’s star, Jimmy Cliff, sings six songs, including the hymn “Many Rivers to Cross.” There are glorious one-shots (especially Scotty’s demented “Draw Your Brakes”), as well as artists such as Desmond Dekker (“Shanty Town”), the Melodians (“Rivers of Babylon), and Toots and the Maytals (“Pressure Drop”).",
    link: "https://open.spotify.com/album/4oxdKcC9epGo9viy1j8fN7",
    image: "https://i.scdn.co/image/ab67616d0000b2736033eb0ca150f7d26d897581",
  },
  {
    rank: 205,
    artist: "Cat Stevens",
    album: "Tea for the Tillerman",
    description:
      "With its chamber-pop arrangements, Tea for the Tillerman is one of the British folkie’s most ambitious albums (to take one example of Cat Stevens’ thinking at the time, the LP’s gentle, advice-dispensing “Father and Son” began as a song for a musical he wanted to write about the Russian Revolution). It soothed countless living rooms in the Seventies, but the album is deceptively angst-y. Both the hit single “Wild World” and the bleak ballad “Hard-Headed Woman” find him condemning his ex Patti D’Arbanville — who later shacked up with Mick Jagger.",
    link: "https://open.spotify.com/album/44VxbAytHpVi3Rq8hRhild",
    image: "https://i.scdn.co/image/ab67616d0000b273e7248738c2f7ce3b5584b15d",
  },
  {
    rank: 368,
    artist: "George Harrison",
    album: "All Things Must Pass",
    description:
      "After the end of the Beatles, the Quiet One suddenly looked like the one best prepared for the solo life. After years of writing in the shadow of John Lennon and Paul McCartney, George Harrison had enough songs saved up to make his solo debut a triple album, featuring friends like Bob Dylan, Eric Clapton, and Ringo Starr. All Things Must Pass is full of spiritual guitar quests like “Isn’t It a Pity” and “My Sweet Lord,” the first Number One hit to include a Hare Krishna chant.",
    link: "https://open.spotify.com/album/4I4xtHaIFOzhZfp1NIHkY6",
    image: "https://i.scdn.co/image/ab67616d0000b273acc11d868a59008935e72299",
  },
  {
    rank: 97,
    artist: "Metallica",
    album: "Master of Puppets",
    description:
      "Metallica’s third album has a lyrical theme: manipulation. “It deals pretty much with drugs,” singer-guitarist James Hetfield said. “Instead of you controlling what you’re taking and doing, it’s drugs controlling you.” It also has a sonic theme: really loud guitars, played fast, with no regard for the hair metal that was then dominating the airwaves. When the band slows down on “Welcome Home (Sanitarium),” it just emphasizes the unrelenting nature of the rest of the songs. Recorded during three months in Copenhagen, Master of Puppets was bassist Cliff Burton’s last album with Metallica; he died in September 1986, when the band’s bus crashed.",
    link: "https://open.spotify.com/album/7CGhx630DIjdJqaBDVKc5j",
    image: "https://i.scdn.co/image/ab67616d0000b273cad4832cb7b5844343278daa",
  },
  {
    rank: 67,
    artist: "Jay-Z",
    album: "Reasonable Doubt",
    description:
      "Before there was Jay-Z the mogul, the legend, the Beyoncé boy toy, there was Jay-Z on his do-or-die hustle, trying just to get a seat at the UNO table. “Forever petty minds stay petty/Mine’s thinkin’ longevity, until I’m 70,” he rhymes on the virtuosic “22 Two’s,” his earliest experiment in toying with standard rap structures. When he raps about drug dealing and not trusting women, the details are specific and self-aware. Jay’s charisma and comic insouciance are evident even on small touches like his taunting laugh in the chorus of “Ain’t No Nigga,” a gloriously funky track that lit up dance clubs. Here, he planted a flag in the underground — within two years, the pop hits followed and the hustle went worldwide.",
    link: "https://open.spotify.com/album/3YPK0bNOuayhmSrs0sIIBR",
    image: "https://i.scdn.co/image/ab67616d0000b2737a353e74db759af39d3f26b0",
  },
  {
    rank: 249,
    artist: "Whitney Houston",
    album: "Whitney Houston",
    description:
      "She had been a model and a nightclub singer when she cut this smooth R&B debut. Her vocal gifts and technique are astounding — even slick tracks such as “Greatest Love of All” stick. Best song: “How Will I Know,” perky synth-funk evoking Whitney Houston’s godmother, Aretha Franklin. Though her career and life ended tragically, nothing can diminish the memory of her Eighties glory, which is still a template for young singers looking for a path to greatness.",
    link: "https://open.spotify.com/album/2MH37enG6IPvNK5QFLyKes",
    image: "https://i.scdn.co/image/ab67616d0000b2732ae4fcec560ab559d6f5dc88",
  },
  {
    rank: 2,
    artist: "The Beach Boys",
    album: "Pet Sounds",
    description:
      "“Who’s gonna hear this shit?” Beach Boys singer Mike Love asked the band’s resident genius, Brian Wilson, in 1966, as Wilson played him the new songs he was working on. “The ears of a dog?” Confronted with his bandmate’s contempt, Wilson made lemonade of lemons. “Ironically,” he observed, “Mike’s barb inspired the album’s title.”\nBarking dogs – Wilson’s dog Banana among them, in fact – are prominent among the found sounds on the album. The Beatles made a point of echoing them on Sgt. Pepper’s Lonely Hearts Club Band – an acknowledgment that Pet Sounds was the inspiration for the Beatles’ masterpiece. That gesture actually completed a circle of inﬂuence: Wilson initially conceived of Pet Sounds as an effort to top the Beatles’ Rubber Soul. With its vivid orchestration, lyrical ambition, elegant pacing, and thematic coherence, Pet Sounds invented — and in several senses, perfected — the notion that an album could be more than the sum of its parts. When Wilson sang, “Wouldn’t it be nice if we were older,” on the album’s magnificent opening song, he wasn’t just imagining a love that could evolve past high school, he was suggesting a new grown-up identity for rock & roll music itself.\nWilson made Pet Sounds without the rest of the band, using them only to ﬂesh out the vocal arrangements. He even considered putting the album out as a solo project, and the ﬁrst single, “Caroline, No,” was released under his own name. The personal nature of the songs, which Wilson co-wrote primarily with lyricist Tony Asher, further distinguished the album from the Beach Boys’ previous hits. Its luxurious sound conveys a heartbreaking wistfulness, as songs such as “I Just Wasn’t Made for These Times” and “I’m Waiting for the Day” bid farewell to the innocent world of the early Sixties.\nThe album’s centerpiece is “God Only Knows,” arranged with harpsichord, horns, sleigh bells, and strings to create a spiritual feeling Wilson later compared to “being blind, but in being blind, you can see more. You close your eyes; you’re able to see a place or something that’s happening.” In the years to come, countless artists would live in his vision.",
    link: "https://open.spotify.com/album/6GphKx2QAPRoVGWE9D7ou8",
    image: "https://i.scdn.co/image/ab67616d0000b273bde8dfd1922129f3d9e3732f",
  },
  {
    rank: 4,
    artist: "Stevie Wonder",
    album: "Songs in the Key of Life",
    description:
      "Months before the recording sessions for Songs in the Key of Life ended, the musicians in Stevie Wonder’s band had T-shirts made up that proclaimed, “We’re almost finished.” It was the stock answer to casual fans and Motown executives and everybody who’d fallen in love with Wonder’s early-Seventies gems – 1972’s Talking Book, 1973’s Innervisions, and 1974’s Fulfillingness’ First Finale – and who had been waiting two years for the next chapter. “I believed there was a lot that needed to be said,” Wonder said. More, in fact, than he could fit onto a double album – also included was a bonus EP, a seven-inch single with four more songs from the sessions.\nSongs, released in 1976, encompasses an incredible range of life experiences – from the giddy joy of a baby in the bathtub (“Isn’t She Lovely,” featuring the cries and giggles of Wonder’s infant daughter Aisha Morris) through tributes to his musical heroes (“Sir Duke”) to dismay about the indifference of the wealthy (“Village Ghetto Land”). Wonder pulled from every imaginable musical source — the ecstatic “Sir Duke” references Duke Elington and Ella Fitzgerald, while “As” featured Herbie Hancock on Fender Rhodes. \nThough Wonder’s blindness meant he could record faster by memorizing lyrics, some songs had four or five intricate verses, so somebody had to prompt him. Often it was engineer John Fischbach, reading lines into the headphone mix just seconds before Wonder sang them. “He never got thrown off,” engineer John Fischbach told Rolling Stone years later. “His vocals had so much power.”\nThe album’s mastery of many styles remains astonishing, but the feat might not have meant so much had Wonder not delivered some of his most impassioned political art as well, like the autobiographical “I Wish,” the takedown of wealthy complacency “Village Ghetto Land,” and, perhaps most movingly, “Black Man,” in which he runs down a funky list of global Afro-diasporic aspirations and heroes. Songs in the Key of Life linked all this together, in Wonder’s all-encompassing innervision.",
    link: "https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0",
    image: "https://i.scdn.co/image/ab67616d0000b2732fee61bfec596bb6f5447c50",
  },
  {
    rank: 175,
    artist: "Kendrick Lamar",
    album: "DAMN.",
    description:
      "After the sprawl of To Pimp a Butterfly, Lamar tightened up, going for the jugular in the most aggressive, banger-based album of his career. He dissects his own “DNA,” as well as America’s, raving about “the feelin’ of an apocalypse happenin’.” He delves into his family history in “Duckworth” and scored his first Number One hit with “Humble.” It’s an album where both Bono and Rihanna sound right at home — but it all sounds like Lamar. “It came out exactly how I heard it in my head,” he explained at the time. “It’s all pieces of me.” Grammy-haters were vindicated when DAMN. lost out to Bruno Mars for Album of the Year, but DAMN. did end up pulling a Pulitzer Prize for Music, a first for a rap album.",
    link: "https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY",
    image: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
  },
  {
    rank: 246,
    artist: "LL Cool J",
    album: "Mama Said Knock You Out",
    description:
      "“Don’t call it a comeback,” LL Cool J demanded on the album’s fists-of-fury title track, except that’s exactly what it was, one of the all-time great comebacks. A brash superstar at 17, LL made a serious misstep on 1989’s corny Walking Like a Panther, but he was back in full force here, cold chillin’ over Marley Marl’s deep-funk beats as he rapped about round-the-way girls, hanging out on the streets of Queens, and the boomin’ system in his ride.",
    link: "https://open.spotify.com/album/7p7kcsrdoJ8DKQIMouujcb",
    image: "https://i.scdn.co/image/ab67616d0000b273ea56f049af3cd747595ca724",
  },
  {
    rank: 282,
    artist: "Frank Sinatra",
    album: "In the Wee Small Hours",
    description:
      "In the Wee Small Hours, the first collection of songs Frank Sinatra recorded specifically for an LP, sustains a midnight mood of loneliness and lost love — it’s a prototypical concept album. From the title track, brought in on the bell tones of a celesta, through a trenchant recast of “This Love of Mine,” a hit from his Tommy Dorsey days, Sinatra — reeling from his breakup with Ava Gardner — is never less than superb.",
    link: "https://open.spotify.com/album/3GmwKB1tgPZgXeRJZSm9WX",
    image: "https://i.scdn.co/image/ab67616d0000b273d4f8a582c0c3a3d67f395c6d",
  },
  {
    rank: 129,
    artist: "Pink Floyd",
    album: "The Wall",
    description:
      "Pink Floyd’s most elaborately theatrical album was inspired by their own success: the alienating enormity of their tours after The Dark Side of the Moon [see No. 55], which was when bassist-lyricist Roger Waters first hit upon a wall as a metaphor for isolation and rebellion. He finished a demo of the work by July 1978; the double album then took the band a year to make. Rock’s ultimate self-pity opera, The Wall is also hypnotic in its indulgence: the totalitarian thunder of “In the Flesh?”; the suicidal languor of “Comfortably Numb”; the Brechtian drama of “The Trial.” Rock-star hubris has never been more electrifying.",
    link: "https://open.spotify.com/album/5Dbax7G8SWrP9xyzkOvy2F",
    image: "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf",
  },
  {
    rank: 361,
    artist: "My Chemical Romance",
    album: "The Black Parade",
    description:
      "Just as the Who did with Tommy, or Pink Floyd with The Wall, New Jersey act My Chemical Romance served up an era-defining rock opera, tailored for the golden age of emo. Frontman Gerard Way — the goth millennial answer to David Bowie — stars as a cancer patient who marches boldly into the afterlife (“The Black Parade”), where Liza Minelli, of all people, awaits him for a smashing horror-punk duet (“Mama”).",
    link: "https://open.spotify.com/album/0FZK97MXMm5mUQ8mtudjuK",
    image: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
  },
  {
    rank: 442,
    artist: "The Weeknd",
    album: "Beauty Behind the Madness",
    description:
      "Abel Tesfaye lets you know who he is right out front, no metaphors, on the Kanye West co-produced track “Tell Your Friends”: His life is about “poppin’ pills, fuckin’ bitches, livin’ life so trill.” The Toronto R&B singer helped make pop music a darker place in the 2010s — “Bitch, I’m still a user,” he warns on his hugely successful second LP. His pristine, downy voice and spare, frosty electronic tracks suck you in, and Swedish pop genius Max Martin produces three tracks, including the bumping “Can’t Feel My Face,” a love song to cocaine as well as a massive pop hit.",
    link: "https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s",
    image: "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b",
  },
  {
    rank: 457,
    artist: "Sinéad O’Connor",
    album: "I Do Not Want What I Haven’t Got",
    description:
      "“How could I possibly know what I want when I was only 21?” the Irish art rocker asked on her breakthrough second album. Sinéad O’Connor struck a nerve with her keening voice, her shaved head, and her tortured grandiosity in “The Emperor’s New Clothes” and “I Am Stretched on Your Grave.” But she hit Number One with an obscure Prince breakup ballad, “Nothing Compares 2 U.” Originally just filler on a flop album by the Family, it became O’Connor’s signature song.",
    link: "https://open.spotify.com/album/0fV9DAddjwNZcmCP1Q8b01",
    image: "https://i.scdn.co/image/ab67616d0000b2734eeefa0555b6f8cc88df9ffe",
  },
  {
    rank: 441,
    artist: "Britney Spears",
    album: "Blackout",
    description:
      "The pop queen vents all her raging party-girl hostility in Blackout — the weirdest, wildest music of her life. Blackout is her avant-disco concept album about fame, scandal, divorce, and dancing on tables in a cloud of glitter and Cheetos dust. “I’m Miss American Dream since I was 17,” Britney sneers in “Piece of Me,” with her voice warped into an electro-punk snarl. When she asks, “You want a piece of me?” she’s either pimping herself out or threatening to kick your ass. Either way, it’s Britney, bitch.",
    link: "https://open.spotify.com/album/1ePkYcH5ZQCb1b4tQeiEDj",
    image: "https://i.scdn.co/image/ab67616d0000b273ca10fae7d292c52f7e8b11ca",
  },
  {
    rank: 9,
    artist: "Bob Dylan",
    album: "Blood on the Tracks",
    description:
      "Bob Dylan once introduced this album’s opening song, “Tangled Up in Blue,” onstage as taking him 10 years to live and two years to write. It was, for him, a pointed reference to the personal crisis — the collapse of his marriage to Sara Lowndes — that at least partly inspired this album, Dylan’s best of the 1970s. \nIn fact, he wrote all of these lyrically piercing, gingerly majestic folk-pop songs in two months, in mid-1974. He was so proud of them that he privately auditioned almost all of the album, from start to ﬁnish, for pals and peers, including Mike Bloomﬁeld, David Crosby, and Graham Nash, before cutting them in September — in just a week, with members of the bluegrass band Deliverance.\nBut in December, Dylan played the record for his brother, David, in Minneapolis, who suggested recutting some songs with local musicians. The ﬁnal Blood was a mix of New York and Minneapolis tapes; the New York versions are slower, more pensive, while the Minneapolis versions are faster and wilder. Together, they frame the gritty anguish in Dylan’s vocals, as he rages through some of his most passionate, confessional songs — from adult breakup ballads like “You’re a Big Girl Now” and “If You See Her, Say Hello” to the sharp-tongued opprobrium of “Idiot Wind,” his greatest put-down song since “Like a Rolling Stone.”\n“A lot of people tell me they enjoyed that album,” Dylan said soon after it became an instant commercial and critical success. “It’s hard for me to relate to that — I mean, people enjoying that type of pain.” Yet Dylan had never turned so much pain into so much musical splendor.",
    link: "https://open.spotify.com/album/4WD4pslu83FF6oMa1e19mF",
    image: "https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba",
  },
  {
    rank: 168,
    artist: "Steely Dan",
    album: "Can’t Buy a Thrill",
    description:
      "Working as hired songwriters by day, Donald Fagen and Walter Becker rehearsed this debut in executives’ offices by night. “We play rock & roll, but we swing,” said Becker. For proof, check the cool lounge-jazz rhythms of “Do It Again” and the hot guitar of “Reelin’ in the Years.” Even florid lead vocalist David Palmer (who the band soon fired) couldn’t damage the sad, stately beauty of “Dirty Work”; on “Brooklyn,” Becker and Fagen wrote the perfect elusive ode to their native borough. Their debut kicked off an amazing run of albums, like 1973’s Countdown to Ecstasy and 1974’s Pretzel Logic, that are just as fantastic.",
    link: "https://open.spotify.com/album/4Gh6pRaXqXTtJx4plAJbBw",
    image: "https://i.scdn.co/image/ab67616d0000b2735a9b9e265814a9c9636a71a4",
  },
  {
    rank: 211,
    artist: "Joy Divison",
    album: "Unknown Pleasures",
    description:
      "Joy Division came from the northern England industrial gloom of Manchester, four blue-collar lads chasing a new kind of goth-punk grandeur. Right from the opening, “Disorder,” Unknown Pleasures sounds like nothing else, with the doomed Ian Curtis yelping his dark poetry (“I got the spirit!”) over Peter Hook’s bass pulse. But for all the despair, there’s something inspiring in the surge of “Interzone” and “New Dawn Fades.” Black-clad young bands have been imitating Joy Division ever since.",
    link: "https://open.spotify.com/album/33qkK1brpt6t8unIpeM2Oy",
    image: "https://i.scdn.co/image/ab67616d0000b27316eb1e685e6bd37ab3228de6",
  },
  {
    rank: 125,
    artist: "Beastie Boys",
    album: "Paul's Boutique",
    description:
      "“I went to this party in Los Angeles,” recalled Adam Horovitz, “and they were playing this music, like … four breakbeat records playing at the same time.” The party soundtrack consisted of tracks by the Dust Brothers, who ended up co-producing this entire second record from the Beasties, providing the rap trio with some of the best samples ever put on wax, including the Ramones, Mountain, and the Funky 4 Plus 1. Paul’s Boutique is also an extended goof on Abbey Road [see No. 5], which was Paul McCartney’s boutique — and like that record, it ambitiously stitches together song fragments in a way rarely heard before or since.",
    link: "https://open.spotify.com/album/1kmyirVya5fRxdjsPFDM05",
    image: "https://i.scdn.co/image/ab67616d0000b2732288f4cd4bf3a8764624a0d2",
  },
  {
    rank: 239,
    artist: "Boogie Down Productions",
    album: "Criminal Minded",
    description:
      "BDP copped a gangsta stance, sporting guns on the album cover, but they opened their debut with “Poetry,” an ode to the edutaining power of their music — “It takes concentration for fresh communication,” KRS-One informs. DJ Scott LaRock laced funky samples into taut, hard-hitting tracks like the classic interborough beef fests “The Bridge Is Over” and “South Bronx,” the latter doubling as a glorious origin story of hip-hop’s early days. LaRock was killed shortly after the album’s release trying to break up a fight.",
    link: "https://open.spotify.com/album/3PkWTXolCR9RkJrKiAsf55",
    image: "https://i.scdn.co/image/ab67616d0000b273fd5a6db2636d8b106ac71ac1",
  },
  {
    rank: 286,
    artist: "Red Hot Chili Peppers",
    album: "Californication",
    description:
      "Turning their focus completely to songs instead of jams, the Red Hot Chili Peppers steered frontman Anthony Kiedis’ voice into a radio-friendlier wail on Californication. That, and the reappearance of guitarist/secret weapon John Frusciante, helped form beautifully composed songs such as “Scar Tissue.” “When John gets excited, he’s like 8 billion volts of electricity,” said Kiedis. “He was knocking things over — it was absolutely chaotic, like a little kid trying to set up a Christmas tree.”",
    link: "https://open.spotify.com/album/2Y9IRtehByVkegoD7TcLfi",
    image: "https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595",
  },
  {
    rank: 21,
    artist: "Bruce Springsteen",
    album: "Born to Run",
    description:
      "Bruce Springsteen spent everything he had — patience, energy, studio time, the physical endurance of his E Street Band — to ensure that his third album was a masterpiece. His reputation as a perfectionist begins here: There are a dozen guitar overdubs on the title track alone. He was also spending money he didn’t have. Engineer Jimmy Iovine had to hide the mounting recording bills from the Columbia paymasters. “The album became a monster,” Springsteen told his biographer, Dave Marsh. “It just ate up everyone’s life.”\nBut in making Born to Run, Springsteen was living out the central drama in the album’s tenement-love operas (“Backstreets,” “Jungleland”) and gun-the-engine rock & roll (“Thunder Road,” “Born to Run”): the fight to reconcile big dreams with crushing reality. He found it so hard to translate the sound in his head — the Jersey-bar dynamite of his live gigs, Phil Spector’s Wagnerian grandeur, the heartbreaking melodrama of Roy Orbison’s hits — that Springsteen nearly scrapped Born to Run for a straight-up concert album. But his make-or-break attention to detail — including the iconic cover photo of Springsteen leaning onto saxman Clarence Clemons, a perfect metaphor for Springsteen’s brotherly reliance on the E Street Band — assured the integrity of Born to Run’s success. In his determination to make a great album, Springsteen produced a timeless, inspiring record about the labors and glories of aspiring to greatness.",
    link: "https://open.spotify.com/album/43YIoHKSrEw2GJsWmhZIpu",
    image: "https://i.scdn.co/image/ab67616d0000b273503143a281a3f30268dcd9f9",
  },
  {
    rank: 159,
    artist: "The Police",
    album: "Synchronicity",
    description:
      "“I do my best work when I’m in pain and turmoil,” Sting told Rolling Stone. And indeed, the dissolution of his first marriage produced some of his best work, including “King of Pain” and the stalker’s anthem “Every Breath You Take.” There was pain and turmoil in the band, too — it would be the Police’s last album. But it became one of the Eighties’ biggest pop-rock blockbusters, perhaps the finest example of Sting’s unique gift for distilling complex psychological and romantic dramas, which still ruled radio and MTV, while making proggy musicianship and dense composition palatable to the mall-rat masses.",
    link: "https://open.spotify.com/album/5W9OT0a5iZlBr83a9WMKFY",
    image: "https://i.scdn.co/image/ab67616d0000b273c8e97cafeb2acb85b21a777e",
  },
  {
    rank: 161,
    artist: "Crosby, Stills & Nash",
    album: "Crosby, Stills & Nash",
    description:
      "Harmony singing existed before Crosby, Stills and Nash became one of rock’s first supergroups, in 1968. But during a particularly tumultuous time for the country, their distinctive, hippie-angelic blend felt hopeful and uplifting, whether they were singing about the distressed state of America (Crosby’s “Long Time Gone”) or their own wounded hearts (Stills’ epic “Suite: Judy Blue Eyes”). No wonder Jimi Hendrix called the album (which captured the group at its most cohesive) “groovy, Western-sky music.” The tumultuous reality of the band’s existence meant their harmony would be hard to sustain, but here it’s practically an advertisement for community in action.",
    link: "https://open.spotify.com/album/6vUWpE8qciYHOhf7mgaGny",
    image: "https://i.scdn.co/image/ab67616d0000b273a32339b8818323380682a889",
  },
  {
    rank: 293,
    artist: "The Breeders",
    album: "Last Splash",
    description:
      "How did a weird little tune like “Cannonball” make the Top 40? It’s an only-in-the-Nineties mystery that may go forever unsolved. On the Breeders’ breakthrough LP, Kim Deal made a record every bit as good as her old band, the Pixies, with her sister Kelly on guitar, singing about sex and summer over the surfy buzz of “Divine Hammer” and “I Just Wanna Get Along.” The adorable, acoustic “Drivin’ on 9” is a wonderful alt-rock take on the age-old rock & roll theme of going to the chapel of love.",
    link: "https://open.spotify.com/album/57F44c0MTziVzHPEuJtH9A",
    image: "https://i.scdn.co/image/ab67616d0000b273cd6cef9805781ced011653d6",
  },
  {
    rank: 122,
    artist: "Nine Inch Nails",
    album: "The Downward Spiral",
    description:
      "“When I rented the place, I didn’t realize it was that house,” claimed NIN’s Trent Reznor about recording Spiral in the onetime home of Manson-family victim Sharon Tate. Despite “a million electrical disturbances,” Reznor made the most successful album of his career — a cohesive, willful, and overpowering meditation on the central theme running through all of NIN’s videos, live shows, music, and lyrics: control. While Spiral has its share of Reznor’s trademark industrial corrosiveness, it’s balanced by the tentatively hopeful (and intensely personal) “Hurt” and soundscapes inspired by David Bowie’s Low.",
    link: "https://open.spotify.com/album/3nJnyDV8fwFpffo0EyHQto",
    image: "https://i.scdn.co/image/ab67616d0000b273f69bd9abbfeb819840993207",
  },
  {
    rank: 496,
    artist: "Shakira",
    album: "Dónde Están los Ladrones",
    description:
      "Long before she went blond and took her never-lying hips to the top of the American pop charts, Shakira was a raven-haired guitar rocker who’d hit peak superstardom in the Spanish-speaking world with her 1995 LP, Pies Descalzos. To keep up the momentum, Shakira enlisted Emilio Estefan to help produce her next LP, this stellar globetrotting dance-rock set, which blends sounds from Colombia, Mexico, and her father’s native Lebanon.",
    link: "https://open.spotify.com/album/5hcKSTqKOLuzJgYIQileAe",
    image: "https://i.scdn.co/image/ab67616d0000b273bfcff1dd252b22bba16a2a5d",
  },
  {
    rank: 318,
    artist: "Janet Jackson",
    album: "The Velvet Rope",
    description:
      "Janet Jackson left behind her girl-next-door image forever with The Velvet Rope, an album of sexy, confessional, freewheeling hip-hop soul. She fuses Joni Mitchell and Q-Tip in “Got ’Til It’s Gone,” but the shocker is her girl-girl version of Rod Stewart’s “Tonight’s the Night.” “I always write about what’s in my life,” she told Rolling Stone. “I did that on Control, and I did the same thing with this album. It’s kind of like cutting yourself open and exposing yourself to the world, which is really a vulnerable thing.”",
    link: "https://open.spotify.com/album/1uFp52Q9EXLNA6DTRYnpTj",
    image: "https://i.scdn.co/image/ab67616d0000b2732416d363e4220c21c5454efe",
  },
  {
    rank: 117,
    artist: "Kanye West",
    album: "Late Registration",
    description:
      "The College Dropout introduced the world to a polo-shirt-wearing preppy who merged backpack-rap politics and bling-rap materialism. But it was on Late Registration that Kanye West really started showing off, calling in savvy producer Jon Brion to co-produce an album that ranged from triumphal autobiography (“Touch the Sky”) to witty club pop (“Gold Digger”) to heartstring-tuggers (“Hey Mama”), packing in Chinese bells, James Bond themes, and Houston hip-hop. The end result was a near-perfect album that remade the pop landscape in West’s own oddball image.",
    link: "https://open.spotify.com/album/5ll74bqtkcXlKE7wwkMq4g",
    image: "https://i.scdn.co/image/ab67616d0000b273428d2255141c2119409a31b2",
  },
  {
    rank: 23,
    artist: "The Velvet Underground",
    album: "The Velvet Underground and Nico",
    description:
      "“We were trying to do a Phil Spector thing with as few instruments as possible,” John Cale, the classically trained pianist and viola player of the Velvet Underground, once said of this record. It was no idle boast. Much of what we take for granted in rock would not exist without this New York band or its seminal debut: the androgynous sexuality of glitter, punk’s raw noir, the blackened-riff howl of grunge and noise rock. It is a record of fearless breadth and lyrical depth. Singer-songwriter Lou Reed documented carnal desire and drug addiction with a pop wisdom he learned as a song-factory composer for Pickwick Records. Cale introduced the power of pulse and drone (from his work in early minimalism); guitarist Sterling Morrison and drummer Maureen Tucker played with tribal force; Nico, a German vocalist brieﬂy added to the band by manager Andy Warhol, brought an icy femininity to the heated ennui in Reed’s songs. Rejected as nihilistic by the love crowd in 1967, the Banana Album (so named for its Warhol-designed cover), is the most prophetic rock album ever made.",
    link: "https://open.spotify.com/album/4xwx0x7k6c5VuThz5qVqmV",
    image: "https://i.scdn.co/image/ab67616d0000b27398260c528e6eec9dd431c1d7",
  },
  {
    rank: 335,
    artist: "Bob Dylan and the Band",
    album: "The Basement Tapes",
    description:
      "Bob Dylan and his pals spent the Summer of Love in Woodstock, messing around in the basement of a house they called Big Pink. The songs were so deeply weird, they sat unreleased for years, until The Basement Tapes finally collected bootleg favorites like “Million Dollar Bash” and “You Ain’t Going Nowhere.” (For a deeper dive, see the 2014 box set.) “They were a kick to do,” Dylan told Rolling Stone’s Jann S. Wenner in 1969. “That’s really the way to do a recording — in a peaceful, relaxed setting — in somebody’s basement. With the windows open … and a dog lying on the floor.”",
    link: "https://open.spotify.com/album/6BOlD6UGUg45IsUXPSplkY",
    image: "https://i.scdn.co/image/ab67616d0000b273f14967058439072a2d3c5f50",
  },
  {
    rank: 187,
    artist: "Ice Cube",
    album: "AmeriKKKa’s Most Wanted",
    description:
      "Six months after quitting N.W.A, the group’s most gifted lyricist returned with a vengeance on AmeriKKKa’s Most Wanted, recorded with Public Enemy’s production crew, the Bomb Squad. Lyrically, it sharpened N.W.A’s politics; “Why more niggas in the pen than in college?” Cube asks on “The Nigga Ya Love to Hate.” The album’s rapacious sexism has aged horrendously, though give Cube some credit for being smart enough to include the stunning “It’s a Man’s World,” in which female rapper Yo-Yo tells him off straight to his face.",
    link: "https://open.spotify.com/album/3AI5kAUjgNtZBwFRi6opDc",
    image: "https://i.scdn.co/image/ab67616d0000b2737579fb3388d72153c49375e9",
  },
  {
    rank: 478,
    artist: "The Kinks",
    album: "Something Else by the Kinks",
    description:
      "Something Else was a commercial flop that nearly killed the band, but it shows off Ray Davies’ genius for writing about the secret lives of everyday people. “Waterloo Sunset” is a gorgeously chilly ballad about a lonely man watching lovers from his window; “Two Sisters” celebrates a housewife dancing around her house with curlers in her hair. He’s got poetic compassion for all these characters, even as he witnesses their private pain in “No Return,” “Afternoon Tea,” and “End of the Season.”",
    link: "https://open.spotify.com/album/5ktMgVAJtsv4HagfFliWpR",
    image: "https://i.scdn.co/image/ab67616d0000b2734eb2ec59c0f3292cb6b588d4",
  },
  {
    rank: 130,
    artist: "Prince",
    album: "1999",
    description:
      "“I didn’t want to do a double album,” Prince said, “but I just kept on writing. Of course, I’m not one for editing.” The second half of 1999 is just exceptional sex-obsessed dance music; the first half is the best fusion of rock and funk achieved to that date, and it lays out the blueprint for Prince’s next decade. Except for a few background hand claps and vocals, Prince plays most every instrument himself and creates a relentless, irresistible musical sequence of apocalypse (“1999”) and the raunchy sex that he proposes as the only possible response — “Little Red Corvette,” “Let’s Pretend We’re Married,” “Delirious,” and, well, just about every other song on the album.",
    link: "https://open.spotify.com/album/34MHuXONazzgSxI0cThpAg",
    image: "https://i.scdn.co/image/ab67616d0000b273337c5517a9a62e0c3f17d59f",
  },
  {
    rank: 327,
    artist: "The Who",
    album: "Live at Leeds",
    description:
      "Faced with the impossible task of following up the grand statement of Tommy [see No. 190], the Who just cranked up their amps. Rather than wade through 80 hours of American shows for a live album, Pete Townshend claimed he burned those tapes “in a huge bonfire” and selected a concert at the University of Leeds in England. Live at Leeds is a warts-and-all live album, including an accidental clunking sound on “My Generation.” There’s no finesse, just the pure power of a band able to play as loud as it wants to.",
    link: "https://open.spotify.com/album/6W3aTLI4B5UsPpWMvhT2W4",
    image: "https://i.scdn.co/image/ab67616d0000b273692c12f604e384578a70272f",
  },
  {
    rank: 88,
    artist: "David Bowie",
    album: "Hunky Dory",
    description:
      "David Bowie, then 24, arrived at the Hunky Dory cover shoot with a book of photographs of Marlene Dietrich: a perfect metaphor for this album’s visionary blend of gay camp, flashy rock guitar, and saloon-piano balladry. Bowie marked the polar ends of his artistic ambitions with tribute songs to Bob Dylan and Andy Warhol. In “Oh! You Pretty Things,” “Quicksand,” and “Changes” he invented and perfected a new style of rock & roll glamour. On “Life on Mars?” he sings to all the weirdos like himself, who feel like aliens on Earth. Soon an entire army of kids would attempt to remake themselves in his spangled image, proving his point.",
    link: "https://open.spotify.com/album/6fQElzBNTiEMGdIeY0hy5l",
    image: "https://i.scdn.co/image/ab67616d0000b273e464904cc3fed2b40fc55120",
  },
  {
    rank: 283,
    artist: "Donna Summer",
    album: "Bad Girls",
    description:
      "The Boston-born Donna Summer was the Queen of Disco by the end of the Seventies — but she wanted more. With her double-vinyl epic Bad Girls, she set out to conquer every corner of pop music in the name of disco, along with her longtime producers Giorgio Moroder and Pete Bellotte. “Hot Stuff” was her rock anthem, while “Bad Girls” found the sweet spot where the toot-toot meets the beep-beep. The underrated highlight: “Sunset People,” her post-Steely Dan snapshot of L.A. malaise.",
    link: "https://open.spotify.com/album/58GjBhQvLHwfQFJtdP9Oxg",
    image: "https://i.scdn.co/image/ab67616d0000b27331f6567831ff929fdea02074",
  },
  {
    rank: 298,
    artist: "Tom Petty",
    album: "Full Moon Fever",
    description:
      "It almost seems impossible to imagine now, but when Petty turned in Full Moon Fever, his record company didn’t want to put it out because they didn’t hear a single. But the album was an enormous success, with hits like “I Won’t Back Down,” “Runnin Down a Dream,” and the majestic L.A. portrait “Free Fallin’,” possibly Petty’s most beloved song. Producer Jeff Lynn gave the album a sleek but never slick sound that complemented Petty’s sharpest set of songs in a decade.",
    link: "https://open.spotify.com/album/5d71Imt5CIb7LpQwDMQ093",
    image: "https://i.scdn.co/image/ab67616d0000b27336572e6726714544f5bed456",
  },
  {
    rank: 296,
    artist: "Neil Young",
    album: "Rust Never Sleeps",
    description:
      "The live Rust Never Sleeps is essential Neil Young, full of impossibly delicate acoustic songs and ragged Crazy Horse rampages. Highlights: “My My Hey Hey” (a tribute to the Sex Pistols’ Johnny Rotten); a surreal political spiel called “Welfare Mothers”; and “Powderfinger,” Young’s greatest song ever, where he unspools a hazy tale of a 22-year-old going up against government violence on the American frontier, and his guitar roars toward the collapsing sky like never before.",
    link: "https://open.spotify.com/album/1K6qntuSMzlqpXoGOcsLi8",
    image: "https://i.scdn.co/image/ab67616d0000b273576a008e47e5c0fb5d9e2409",
  },
  {
    rank: 392,
    artist: "Ike and Tina Turner",
    album: "Proud Mary: The Best of Ike and Tina Turner",
    description:
      "These hits set introduced the world to Tina Turner, back when she was the raw R&B belter from Nutbush, Tennessee, starring in her husband Ike’s band. The world didn’t know yet the private hell Tina was living through — or that she’d move on to solo stardom. But Tina’s grit and Ike’s guitar combine from the start, in duets like “I Idolize You.” Her triumph is “Proud Mary,” seizing the already-classic Creedence song and turning it into her own soul testimony.",
    link: "https://open.spotify.com/album/2UCdfQEDgzWtbzpaD4Mo47",
    image: "https://i.scdn.co/image/ab67616d0000b2739797a5691b83d778d15366ee",
  },
  {
    rank: 218,
    artist: "TLC",
    album: "CrazySexyCool",
    description:
      "Things were not well with TLC during the making of CrazySexyCool: Lisa “Left Eye” Lopes was lighting fires, and the group was in a financial slide that would end in bankruptcy proceedings. But they emerged with the most effervescent and soulful R&B pop anyone had heard since the Supremes. “Creep” is hard-edged but cute, the summery “Diggin’ on You” is almost pastoral in its intimate flow, and the transcendent “Waterfalls” may be the greatest song ever about how it’s not a great idea to go after your dreams.",
    link: "https://open.spotify.com/album/5eg56dCpFn32neJak2vk0f",
    image: "https://i.scdn.co/image/ab67616d0000b273a6125b1964a555892c49ea53",
  },
  {
    rank: 432,
    artist: "Usher",
    album: "Confessions",
    description:
      "Usher was already a star in 2004, a sly singer and slick dancer whose R&B hits found a home with pop fans. But Confessions, which is one of the last 10-million-plus sellers ever made, turned him into an unstoppable juggernaut. Usher worked with a murderers’ row of R&B and hip-hop talent, from Jimmy Jam and Terry Lewis to Jermaine Dupri to Just Blaze; the album moves easily from club wreckers like the Lil Jon- and Ludacris-assisted smash “Yeah!” to forgive-me-for-cheating ballads to love-you-forever duets.",
    link: "https://open.spotify.com/album/1RM6MGv6bcl6NrAG8PGoZk",
    image: "https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da",
  },
  {
    rank: 416,
    artist: "The Roots",
    album: "Things Fall Apart",
    description:
      "The Nineties’ alternative-rap scene hit its high-water mark as an album-length art form with this love letter to black music in the late 20th century. That theme is most explicit on on “Act Too (The Love of My Life),” a tender dedication to hip-hop’s redemptive power, but it’s also there in the playful way Black Thought and Malik B bounce rhymes off each other and in the beats that riff affectionately on everyone from Sly Stone to Schoolly D in a kaleidoscopic celebration of musical soul.",
    link: "https://open.spotify.com/album/0qbl8aNaCUOvX8HGsZYLfh",
    image: "https://i.scdn.co/image/ab67616d0000b273bac8015c7e47644fb86e27e2",
  },
  {
    rank: 411,
    artist: "Bob Dylan",
    album: "Love and Theft",
    description:
      "The blood and glory of 1997’s Time Out of Mind had raised the bar: This was the first Dylan album in years that had to live up to fans’ expectations. He didn’t just exceed them — he blew them up. Dylan sang in the voice of a grizzled drifter who’d visited every nook and cranny of America and gotten chased out of them all. Love and Theft was full of corny vaudeville jokes and apocalyptic floods, from the guitar rave “Summer Days” to the country lilt of “Po’ Boy.”",
    link: "https://open.spotify.com/album/4BcfuxQ4EO07Y53yr6YhAJ",
    image: "https://i.scdn.co/image/ab67616d0000b273bc66153fea3a00492f35a9f8",
  },
  {
    rank: 229,
    artist: "Patsy Cline",
    album: "The Ultimate Collection",
    description:
      "Her career was cut short when she died in a plane crash at 30, but Patsy Cline made her mark as one of country’s great singers. “Even though her style is considered country, her delivery is more like a classic pop singer,” Lucinda Williams has noted. Her hits “Walkin’ After Midnight” and “I Fall to Pieces” also made it to the pop charts, establishing the template for country crossover that pointed the way forward for generations; her version of “Crazy” was a godsend to the song’s struggling writer, a young Willie Nelson.",
    link: "https://open.spotify.com/album/3g5uyAp8sS8LnnCxh9y2em",
    image: "https://i.scdn.co/image/ab67616d0000b2731cbe12ef2db07031c4d822c0",
  },
  {
    rank: 194,
    artist: "Michael Jackson",
    album: "Bad",
    description:
      "After Thriller turned Michael Jackson into an international pop phenomenon, he spent two years of work on the follow-up. The title song came with a 17-minute video by Martin Scorsese that cost $2 million. Bad gave Jackson more hits to add to his collection: “I Just Can’t Stop Loving You,” “Bad,” “The Way You Make Me Feel,” and “Man in the Mirror.” He also began to vent some of his darker emotions on “Smooth Criminal” and the paranoid “Dirty Diana.” Not long afterward, Jackson would retreat to his Neverland ranch.",
    link: "https://open.spotify.com/album/24TAupSNVWSAHL0R7n71vm",
    image: "https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d",
  },
  {
    rank: 139,
    artist: "Black Sabbath",
    album: "Paranoid",
    description:
      "If you think Ozzy’s enduring fame is impressive, try taking a time machine back to the early Seventies and telling rock critics they’ll still be writing about Paranoid 50 years after its release. But Sabbath ruled for bummed-out kids in the Seventies, and nearly every heavy-metal and extreme rock band of the past three decades — from Metallica to Nirvana to Mastodon — owes a debt of worship to Tony Iommi’s crushing, granite-fuzz guitar chords, the Visigoth rhythm machine of Bill Ward and Geezer Butler, and Ozzy Osbourne’s agonized bray in “Paranoid,” “Iron Man,” and “War Pigs.”",
    link: "https://open.spotify.com/album/6r7LZXAVueS5DqdrvXJJK7",
    image: "https://i.scdn.co/image/ab67616d0000b273d5fccf9ce08b6a1e7d12a222",
  },
  {
    rank: 480,
    artist: "Miranda Lambert",
    album: "The Weight of These Wings",
    description:
      "The Nashville superstar sounded especially free and artistically uninhibited after her divorce from Blake Shelton, and she channeled it all into this expansive, mind-clearing two-CD set, an ambitious grab bag of deep breakup tunes (“Use My Heart,” “Tin Man”), Radiohead-y alt-rock moodiness (“Vice”), eye-rolling, scuz-guitar glam (“Pink Sunglasses”), and tender reflections on the bonds and weights of messy commitment (“Getaway Car”). It’s the sound of bad history falling away in the cracked rearview and nothing but wide-open road ahead.",
    link: "https://open.spotify.com/album/563h536tB6n8Dn62jr4RZG",
    image: "https://i.scdn.co/image/ab67616d0000b27357853d228f4dcdbb08df7a9c",
  },
  {
    rank: 288,
    artist: "The Modern Lovers",
    album: "The Modern Lovers",
    description:
      "Jonathan Richman moved from Boston to New York as a teenager in hopes of sleeping on Lou Reed’s couch. That influence shows on the two-chord anthem “Roadrunner.” Recorded in 1972 but not released until 1976, Lovers turned the tough sounds of the Velvets into an ode to suburban romanticism. “Rock & roll was about stuff that was natural,” Richman said. “I wasn’t about drugs and space.” Songs like “Pablo Picasso,” “Girl Friend,” and “Dignified and Old” touched generations of punk and indie-rock innocents.",
    link: "https://open.spotify.com/album/5BPCP7WSGBG4br2o4WRmd8",
    image: "https://i.scdn.co/image/ab67616d0000b273eda35b6069934925134f3180",
  },
  {
    rank: 421,
    artist: "M.I.A.",
    album: "Arular",
    description:
      "What’s the opposite of a girl next door? Perhaps it might be a radicalized, globalized pop star like M.I.A., an English-Tamil writer who provocatively questioned and deconstructed ideas about power and rebellion throughout her first album. She raps and cajoles in hard-chopping cadences (“I bongo with my lingo,” indeed), and mixes jokes, disses, and political insight about the abuse of authority over electronic beats that can sound like New York City electroclash or Brazilian funk. And her hipster hit “Galang” hit as hard as any hip-hop around at the time.",
    link: "https://open.spotify.com/album/7CzEknt9gJwe0QC89ir1JX",
    image: "https://i.scdn.co/image/ab67616d0000b273a1ecf305f6e96560933d7615",
  },
  {
    rank: 406,
    artist: "Magnetic Fields",
    album: "69 Love Songs",
    description:
      "“It started with the title,” Stephin Merritt said of 69 Love Songs, which he imagined in the Sinatra-era tradition of “theme” albums. A tour de force of pop mastery, his three-disc splurge had everything from lounge jazz to Podunk country to punk parody, peaking with sidelong standards like “Papa Was a Rodeo” and “The Luckiest Guy on the Lower East Side.” God-level moment: “The Death of Ferdinand de Saussure,” which is titled after a French linguist and rhymes his name with closure, bulldozer, and classic Motown songwriting team Holland-Dozier-Holland, hooking it all to an unforgettable tune.",
    link: "https://open.spotify.com/album/2GuROKcqyHdpIDcgxml1C7",
    image: "https://i.scdn.co/image/ab67616d0000b2735e7d92681d4891c4b637c630",
  },
  {
    rank: 252,
    artist: "Devo",
    album: "Q: Are We Not Men? A: We Are Devo!",
    description:
      "They came from Akron, Ohio, wore matching jumpsuits, and had a sinister theory of devolution. Their debut album runs on rubber-punk energy and mechanized New Wave beats, with a robotic, soul-chilling version of the Stones’ “(I Can’t Get No) Satisfaction,” demented highlights like the troublingly catchy “Mongoloid,” and the Chuck Berry parody “Come Back Jonee.” Devo never got slowed down by their concept; “Gut Feeling/(Slap Your Mammy)” is warped Midwestern guitar mania at its finest.",
    link: "https://open.spotify.com/album/1u2Qni8cVRptDTaA00fmBC",
    image: "https://i.scdn.co/image/ab67616d0000b273934f2515d6a4079ec4de04d2",
  },
  {
    rank: 410,
    artist: "The Beach Boys",
    album: "Wild Honey",
    description:
      "After Pet Sounds and the aborted Smiley Smile, what was left for the Beach Boys to do? Invent the idea of DIY pop. Ditching the opulent and intricate arrangements of those two albums, Wild Honey returned them to their days as a spunky, self-contained band. In 24 concise but utterly winning minutes, they romp through set of low-fi sunbaked melodies and R&B and soul homages — all suffused with warmth, sly hooks, and a sense of band unity, even as a frazzled Brian Wilson was starting to pull back.",
    link: "https://open.spotify.com/album/01uTaEF0YlcBgNwaSS9iIl",
    image: "https://i.scdn.co/image/ab67616d0000b273a4c1e55432782aad4cfd09fd",
  },
  {
    rank: 417,
    artist: "Ornette Coleman",
    album: "The Shape of Jazz to Come",
    description:
      "Ornette Coleman’s sound was so out there, one audience at an early gig threw his tenor sax over a cliff. He switched to alto and pioneered free jazz: no chords, no harmony, any player can take the lead. It’s still a jarring sound to encounter for the first time, but Coleman’s freedom was grounded in the cathartic release of the gospel and blues of his native Texas. On his first album for Atlantic Records, his music can be just as lyrical as it is demanding, particularly on the haunting “Lonely Woman.”",
    link: "https://open.spotify.com/album/2iPH3iUmpa9ufIpwY76keF",
    image: "https://i.scdn.co/image/ab67616d0000b273abd3f4626eb5181c0e0ac1a9",
  },
  {
    rank: 301,
    artist: "New York Dolls",
    album: "New York Dolls",
    description:
      "“Do you think that you could make it with Frankenstein?” they asked, not kidding. Glammed-out punkers the New York Dolls snatched riffs from Chuck Berry and Fats Domino and fattened them with loads of attitude and reverb. Produced by Todd Rundgren, songs like “Personality Crisis” and “Bad Girl” drip with sleaze and style. “What the Dolls did to be influential on punk was show that anybody could do it,” singer David Johansen said. Indeed, its hard to imagine the Ramones or the Replacements or a thousand other trash-junky bands without them.",
    link: "https://open.spotify.com/album/2xbTV0Awe4Qm5caUVuPbMr",
    image: "https://i.scdn.co/image/ab67616d0000b273802255bd535533c0e2ba5ad2",
  },
  {
    rank: 274,
    artist: "The Byrds",
    album: "Sweetheart of the Rodeo",
    description:
      "On release, this bold experiment in Nashville classicism was shunned by rock fans and country purists alike. But the American rural song had been central to the Byrds’ folk-rock sound; here, driven by junior Byrd Gram Parsons, the band highlighted that connection, dressing Bob Dylan and Merle Haggard songs in steel guitar and rock & roll drive, setting the stage for country rock. Parsons left signs of his short, glorious future in his originals “Hickory Wind” and “One Hundred Years From Now.”",
    link: "https://open.spotify.com/album/02XyFDfvHfIwtqOC3o0PcK",
    image: "https://i.scdn.co/image/ab67616d0000b2730412a1a5731436dcad75a770",
  },
  {
    rank: 36,
    artist: "Michael Jackson",
    album: "Off the Wall",
    description:
      "“The ballads were what made Off the Wall a Michael Jackson album,” Jackson remembered of his big solo splash, which spun off four Top 10 hits and eclipsed the success of the Jackson 5. “I’d done ballads with [my] brothers, but they had never been too enthusiastic about them and did them more as a concession to me than anything else.” At the end of “She’s Out of My Life,” you can hear Jackson actually break down and cry in the studio. But the unstoppable dance tracks on Off the Wall remain classic examples of Jackson as a one-man disco inferno. “Don’t Stop ‘Til You Get Enough,” “Rock With You,” and “Burn This Disco Out” still get the party started today.",
    link: "https://open.spotify.com/album/2ZytN2cY4Zjrr9ukb2rqTP",
    image: "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac",
  },
  {
    rank: 278,
    artist: "Led Zeppelin",
    album: "Houses of the Holy",
    description:
      "Led Zeppelin stuck close to their core sound on earlier albums — supercharged blues, celestial folk — but here they got into a groove. “D’yer Mak’er” (rhymes with “Jamaica”) is their version of reggae, and “The Crunge” is a tribute to James Brown. The band also indulged its cosmic side with “The Rain Song” (featuring one of Robert Plant’s most amazing vocals), “The Song Remains the Same,” and the Viking death chant “No Quarter.”",
    link: "https://open.spotify.com/album/0GqpoHJREPp0iuXK3HzrHk",
    image: "https://i.scdn.co/image/ab67616d0000b2731aa47e71c4edfeaddb65cd54",
  },
  {
    rank: 82,
    artist: "Sly and the Family Stone",
    album: "There’s a Riot Goin’ On",
    description:
      "This highly anticipated studio follow-up to Sly and the Family Stone’s 1969 blast of hope, Stand!, was the grim, exact opposite: implosive, numbing, darkly self-referential. Sly Stone’s voice is an exhausted grumble; the funk in “Family Affair,” “Runnin’ Away,” and especially the closing downward spiral, “Thank You for Talkin’ to Me Africa,” is spare and bleak, fiercely compelling in its anguish over the unfulfilled promises of civil rights and hippie counterculture. “It is Muzak with its finger on the trigger,” wrote critic Greil Marcus in Mystery Train. Take that as a recommendation.",
    link: "https://open.spotify.com/album/29f2cOueckYE8Nc1pkJjrU",
    image: "https://i.scdn.co/image/ab67616d0000b273de0391ae05929bfe0e952f6b",
  },
  {
    rank: 345,
    artist: "Bruce Springsteen",
    album: "The Wild, the Innocent & the E Street Shuffle",
    description:
      "Reeling from the commercial fizzle of his debut LP, Bruce Springsteen threw off the “new Dylan” baggage and applied his Jersey-bar-band skills to some of the funniest tunes he’d ever write: “Rosalita,” “Kitty’s Back,” and the boardwalk love song “4th of July, Asbury Park (Sandy).” The music is loose, jazzy, and full of ambition — a studio take on the live muscle that Springsteen was already famous for — and “New York City Serenade” is the first of Springsteen’s epic street operas.",
    link: "https://open.spotify.com/album/1rmhti8uHw21LnaWMQy608",
    image: "https://i.scdn.co/image/ab67616d0000b273d73022dc9141968920b6da3d",
  },
  {
    rank: 158,
    artist: "Erykah Badu",
    album: "Mama's Gun",
    description:
      "Richly direct and meditative, Erykah Badu’s second album took no prisoners. Mama’s Gun gave us an even more personal version of the neo-soul brilliance she displayed on her 1997 debut, focused by a few more years of life experience (including the dissolution of her relationship with OutKast’s André 3000 and the time off she took to welcome their son, Seven). On the J Dilla-produced “Didn’t Cha Know,” she’s luminously lost; by “Bag Lady,” she’s made peace with her past emotional baggage. With contributions from like-minded artists like Questlove and Roy Ayers, Badu created a wildly free, deliciously ambitious song cycle out of her own hard-won truths.",
    link: "https://open.spotify.com/album/3cADvHRdKniF9ELCn1zbGH",
    image: "https://i.scdn.co/image/ab67616d0000b2730d934cb462fae5a26f829efb",
  },
  {
    rank: 412,
    artist: "Smokey Robinson and the Miracles",
    album: "Going to a Go Go",
    description:
      "Motown at its most debonair and sexy. Smokey Robinson works his sweeping soul falsetto over unbelievably sad ballads, including “The Tracks of My Tears” and “Ooo Baby Baby,” as the Miracles sob along. Robinson made it seem effortless to write a constant string of hit singles for the Miracles, as well as the rest of the Motown roster, but this album also has some of his finest deep cuts, especially the helpless yearning of “Choosey Beggar.”",
    link: "https://open.spotify.com/album/2NT1Pc0MXlXORHLBkHyKQW",
    image: "https://i.scdn.co/image/ab67616d0000b27396ebd8447b29307e31f95090",
  },
  {
    rank: 152,
    artist: "The Pretenders",
    album: "Pretenders",
    description:
      "After years of knocking around Ohio and England, writing record reviews and hanging with the Sex Pistols, Chrissie Hynde put together a band as tough as her attitude. The Pretenders’ debut is filled with no-nonsense New Wave rock such as “Mystery Achievement” — plus a cover of “Stop Your Sobbing,” by the Kinks’ Ray Davies (three years later, the father of Hynde’s child). The biggest hit was “Brass in Pocket,” a song of ambition and seduction. Hynde, however, wasn’t so sure about the song’s success. “I was embarrassed by it,” she said. “I hated it so much that if I was in Woolworth’s and they started playing it, I’d have to run out of the store.”",
    link: "https://open.spotify.com/album/6AFFu3ilmlEDz1I9ZaNOZw",
    image: "https://i.scdn.co/image/ab67616d0000b2733bfd0d4e205f83b591600e43",
  },
  {
    rank: 473,
    artist: "Daddy Yankee",
    album: "Barrio Fino",
    description:
      "Just when Latin pop radio was hitting a ballad-heavy plateau, Puerto Rican MC Daddy Yankee set the industry aflame with his 2004 reggaeton opus, Barrio Fino. Crowned by the hydraulic bounce of Yankee’s first international hit, “Gasolina,” the record marked a colossal breakthrough, not just for the rapper himself, but for the entire genre known as reggaeton: a raw blend of hip-hop and reggae, born in the mean streets of San Juan.",
    link: "https://open.spotify.com/album/4pLuE50wL9T26lSv42X0J2",
    image: "https://i.scdn.co/image/ab67616d0000b2736bdcdf82ecce36bff808a40c",
  },
  {
    rank: 150,
    artist: "Bruce Springsteen",
    album: "Nebraska",
    description:
      "Recorded on a four-track in Springsteen’s bedroom, Nebraska’s songs were stark, spooky acoustic demos that he decided to release “bare,” packed with hard-luck tales of underdogs. “I wanted black bedtime stories,” he said in his memoir, and he wrote the LP under the influence of John Lee Hooker and Robert Johnson, but also Flannery O’Connor and James M. Cain, creating a cross between the blues and pulp-noir novels. “Down here it’s just winners and losers,” he sings in “Atlantic City,” and these 10 songs live on the wrong side of that line. Yet, Springsteen ends the album with “Reason to Believe,” one of those songs where his search for faith inspires faith itself.",
    link: "https://open.spotify.com/album/6yskFQZNlLYhkchAxELHi6",
    image: "https://i.scdn.co/image/ab67616d0000b2738935cadb8e3e20d9fab4582e",
  },
  {
    rank: 428,
    artist: "Hüsker Dü",
    album: "New Day Rising",
    description:
      "These three Minneapolis dudes played savagely emotional hardcore punk that became a key influence on Nirvana, among others (Hüsker Dü guitarist Bob Mould was an early candidate to produce Nevermind, before the job went to Butch Vig). Mould and the band created a roar like garbage trucks trying to sing Beach Boys songs, especially on the anthems “Celebrated Summer” and “Perfect Example,” and on the wondrous “Books About UFOs,” drummer Grant Hart gets on the piano and plunks out a jaunty love song to an amateur astronomer.",
    link: "https://open.spotify.com/album/2eOu9QDLP2MoO04ZtII2Vm",
    image: "https://i.scdn.co/image/7c944de91fbd3bb5fbf045fef44f6ad267ba517f",
  },
  {
    rank: 445,
    artist: "Yes",
    album: "Close to the Edge",
    description:
      "Sessions for this album were so intense and taxing that monster drummer Bill Bruford quit the band when it was over due to stress. The hard work paid off. Close to the Edge is the best of Yes’ many lineups at an absolute peak, with Jon Anderson’s sun-king vocals pouring out over new member Rick Wakeman’s dazzling keyboards. The title track, an 18-minute epic in four distinct parts, remains the most majestic moment in the prog-rock history.",
    link: "https://open.spotify.com/album/6344rkGqCBDenGoS7eJlBN",
    image: "https://i.scdn.co/image/ab67616d0000b273b7521f4f408968a265bebd91",
  },
  {
    rank: 343,
    artist: "Sly and the Family Stone",
    album: "Greatest Hits",
    description:
      "Sly and the Family Stone created a musical utopia: an interracial group of men and women who blended funk, rock, and positive vibes. Sly Stone, the Family mastermind, was one of the Sixties’ most ambitious artists, mixing up the hardest funk beats with hippie psychedelia on hits such as “Thank You (Falettinme Be Mice Elf Agin).” Greatest Hits ranges from gospel-style ballads (“Everybody Is a Star”) to rump shakers (“Everyday People”).",
    link: "https://open.spotify.com/album/0UM9SydcBtsklCTFgGLvcT",
    image: "https://i.scdn.co/image/ab67616d0000b273b08f59c7648a7a67130ca0ea",
  },
  {
    rank: 45,
    artist: "Prince",
    album: "Sign O' the Times",
    description:
      "He’d fired his band, and his latest movie, Under the Cherry Moon, had flopped; just three years after Purple Rain, Prince was in the market for a comeback. So he recorded one of the great albums of the Eighties. Times is best known for the apocalyptic title track, the brontosaurus funk of “Housequake,” and the gorgeous “If I Was Your Girlfriend.” Yet the simplest moments are unforgettable: the “Sweet Jane”-style guitar plea of “The Cross,” the Stax revamp on “Slow Love,” a jilted girl’s sadness in “I Could Never Take the Place of Your Man.” “I hate the word ‘experiment,’” Prince said. “It sounds like something you didn’t finish.” Here, he finished.",
    link: "https://open.spotify.com/album/2QuHyvguNhl5kfdoE17RRe",
    image: "https://i.scdn.co/image/ab67616d0000b2730f15bc9fc5979caf46be6205",
  },
  {
    rank: 449,
    artist: "The White Stripes",
    album: "Elephant",
    description:
      "The Stripes exploded out of Detroit with a minimalist garage-blues attack: just Jack White on guitar and Meg White on drums, taking on the world. These kids insisted they were a brother and sister, even after people learned they were secretly a divorced couple. But against all odds, the low-budget duo became a global sensation for their sheer rock power. Elephant seethes with raw desperation and lust in “Seven Nation Army,” “Hypnotize,” and “The Hardest Button to Button.” Jack plays guitar hero in the seven-minute jam “Ball and Biscuit.”",
    link: "https://open.spotify.com/album/6D9urpsOWWKtYvF6PaorGE",
    image: "https://i.scdn.co/image/ab67616d0000b273a69f71a8794e2d867a52f98f",
  },
  {
    rank: 373,
    artist: "Isaac Hayes",
    album: "Hot Buttered Soul",
    description:
      "Isaac Hayes demanded Stax Records give him complete artistic control for his second album. What happened next sounded like nothing else in music at the time, an orchestral-soul watershed that forecast R&B’s turn toward symphonic excess and plush introspect. Hayes’ 12-minute Southern-psychedelic version of the Burt Bacharach/Hal David “Walk On By” and his spectacularly tortured 18-minute take on Jimmy Webb’s “By the Time I Get to Phoenix” took easy-listening tunes and refashioned them in his own radically laid-back image.",
    link: "https://open.spotify.com/album/71rxIr6MJYUzDG9ge6Jq3J",
    image: "https://i.scdn.co/image/ab67616d0000b2736c3db7e63a6f392a678635ba",
  },
  {
    rank: 25,
    artist: "Carole King",
    album: "Tapestry",
    description:
      "For a decade, Carole King wrote pop songs with her then-husband, Gerry Goffin: hits such as Little Eva’s “The Loco-Motion” (Eva Boyd was the couple’s babysitter) and the Monkees’ “Pleasant Valley Sunday.” Then King’s friend James Taylor encouraged her to sing her own tunes. “He just made it look so easy,” she recalled. “So I did Tapestry in the same spirit.” She slowed down “Will You Love Me Tomorrow?” (originally a hit for the Shirelles in 1961), with Taylor and Joni Mithcell on background vocals, heightening the melancholy inside, while her warm, earnest singing brought out the sadness in “It’s Too Late” and the earthy joy on “I Feel the Earth Move.” As King later recalled, “I wasn’t in the same league vocally with Aretha Franklin, Joni Mitchell, Barbara Streisand. But I knew how to convey the mood and emotion of a song with honest, straight-from-the-heart interpretation.” The resulting collection of songs saw King remake herself as an artist and became one of the biggest-selling albums of all time, creating the reigning model for the 1970s female singer-songwriter.",
    link: "https://open.spotify.com/album/12n11cgnpjXKLeqrnIERoS",
    image: "https://i.scdn.co/image/ab67616d0000b27323350feac07f56d8b96f33d5",
  },
  {
    rank: 178,
    artist: "Otis Redding",
    album: "Otis Blue",
    description:
      "Redding’s third album includes covers of three songs by Sam Cooke, Redding’s idol, who had died the previous December. Their styles were different: Cooke, smooth and sure; Redding, raw and pleading. But Redding’s versions of “Shake” and “A Change Is Gonna Come” show how Cooke’s sound and message helped shape Redding’s Southern soul, heard here in his originals “Respect” and “I’ve Been Loving You Too Long” and in a cover of the Rolling Stones’ “(I Can’t Get No) Satisfaction,” which was itself inspired by the Stax/Volt sound. “I use a lot of words different than the Stones’ version,” Redding noted. “That’s because I made them up.”",
    link: "https://open.spotify.com/album/68BCjMsHX4Gf11BJSkjwGz",
    image: "https://i.scdn.co/image/ab67616d0000b27309cdd247bd06fb04470aa4b8",
  },
  {
    rank: 188,
    artist: "T. Rex",
    album: "Electric Warrior",
    description:
      "“A successful, hit rock & roll record is a spell,” T. Rex leader Marc Bolan told Rolling Stone. And so, muttering “eye of Bowie, toe of Slade,” Bolan cast a spell over all of England. He took his Tolkienesque hippie music and gave it a glammed-out Chuck Berry update on sexy singles like “Bang a Gong (Get It On)”; this was rock that thrusted, quivered, and recklessly employed metaphors equating cars with sex (“You got a hubcap diamond star halo”). He outdid himself with “Jeepster,” an entire song on the topic, vibrating with lust, a shuffling beat, lots of guitar, and the sound of Bolan stomping on the studio floor.",
    link: "https://open.spotify.com/album/6k1iylSzWOs7SgavxlJ8kt",
    image: "https://i.scdn.co/image/ab67616d0000b2737762663eeab308df9d240cd0",
  },
  {
    rank: 16,
    artist: "The Clash",
    album: "London Calling",
    description:
      "Recorded in 1979 in London, which was then wrenched by surging unemployment and drug addiction, and released in America in January 1980, the dawn of an uncertain decade, London Calling is 19 songs of apocalypse fueled by an unbending faith in rock & roll to beat back the darkness. Produced with no-surrender energy by legendary Sixties studio madman Guy Stevens, the Clash’s third album sounds like a free-form radio broadcast from the end of the world, skidding from bleak punk (“London Calling”) to rampaging ska (“Wrong ’Em Boyo”) and disco resignation (“Lost in the Supermarket”).\nThe album was made in dire straits too. Although the Clash ﬁred singles into the Britain’s Top 40 with machine-gun regularity, the band was heavily in debt and openly at war with its record company. Singer-guitarists Joe Strummer and Mick Jones, the Clash’s Lennon and McCartney, wrote together in Jones’ grandmother’s ﬂat, where he was living for lack of dough. “Joe, once he learned how to type, would bang the lyrics out at a high rate of good stuff,” Jones noted. “Then I’d be able to bang out some music while he was hitting the typewriter.” Stevens was on hand for inspiration. He threw chairs around the room “if he thought a track needed zapping up,” according to Strummer. The album ends with “Train in Vain,” a rousing song of ﬁdelity (originally unlisted on the back cover) that became the sound of triumph: the Clash’s ﬁrst Top 30 single in the U.S.",
    link: "https://open.spotify.com/album/6FCzvataOZh68j8OKzOt9a",
    image: "https://i.scdn.co/image/ab67616d0000b273cd9d8bc9ef04014b6e90e182",
  },
  {
    rank: 6,
    artist: "Nirvana",
    album: "Nevermind",
    description:
      "An overnight-success story of the 1990s, Nirvana’s second album and its totemic ﬁrst single, “Smells Like Teen Spirit,” shot up from the Northwest underground — the nascent grunge scene in Seattle — to kick Michael Jackson’s Dangerous off the top of the Billboard charts and blow hair metal off the map. Few albums have had such an overpowering impact on a generation — a nation of teens suddenly turned punk — and such a catastrophic effect on its main creator. The weight of success led already-troubled singer-guitarist Kurt Cobain to take his own life in 1994.\nBut his slashing riffs, corrosive singing, and deviously oblique writing — rammed home by the Zeppelin-via-Pixies might of bassist Krist Novoselic and drummer Dave Grohl — put warrior purity back in rock & roll. Lyrically, Cobain raged in code — shorthand grenades of inner tumult and self-loathing. His genius, though, in songs like “Lithium,” “Breed,” and “Teen Spirit” was the soft-loud tension he created between verse and chorus, restraint and assault. Cobain was a pop lover at heart — and a Beatlemaniac: Nevermind co-producer Butch Vig remembered hearing Cobain play John Lennon’s “Julia” at sessions. Cobain also fought to maintain his underground honor with songs like the scabrous punk purge “Territorial Pissings.”\n Ultimately, it was a losing battle, but it is part of this album’s enduring power. Vig recalled when Cobain was forced to overdub the guitar intro to “Teen Spirit” because he couldn’t nail it live with the band: “That pissed him off. He wanted to play [the song] live all the way through.”",
    link: "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ",
    image: "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
  },
  {
    rank: 431,
    artist: "Los Lobos",
    album: "How Will the Wolf Survive?",
    description:
      "“We were kids with long hair and plaid shirts playing Mexican folk instruments,” said Los Lobos’ Louie Perez. But the band, lifelong friends from East L.A., became a surprise success, mixing traditional Mexican sounds with blues and rockabilly for tough, whomping roots rock like “I Got Loaded” and “Don’t Worry Baby.” There are excellent songwriting moments, too, like “A Matter of Time,” a tender, moving dialogue between a young married couple with dreams of immigrating to find a better life.",
    link: "https://open.spotify.com/album/5dl01XDIMXrmjJ22obqfhQ",
    image: "https://i.scdn.co/image/ab67616d0000b27356e31f8c1acf3546f3dde264",
  },
  {
    rank: 156,
    artist: "The Replacements",
    album: "Let It Be",
    description:
      "Copping a Beatles title was cheeky; attaching it to a post-punk masterpiece was a sign of maturity. Said Paul Westerberg, “This was the first time I had songs that we arranged, rather than just banging out riffs.” Mixing punk, pop, and country with wry lyrics, his songs describe heroes (the gender-bending couple in “Androgynous”) and villains (an unsanitary dentist in “Tommy Gets His Tonsils Out”; MTV in “Seen Your Video”), and pack in quips about the group’s lack of success (“Fingernails and cigarettes, a lousy dinner”) with swagger and pride. The coup is “Unsatisfied,” a pained howl of unhappiness that forced people to take this ratty band seriously.",
    link: "https://open.spotify.com/album/4LwFCUyV4wM6SEg84PaLuL",
    image: "https://i.scdn.co/image/ab67616d0000b273008cfa8fb96ef0befcbc615a",
  },
  {
    rank: 111,
    artist: "Janet Jackson",
    album: "Control",
    description:
      "If properly, successfully maturing in pop after a childhood in the spotlight is an artform, then Janet Jackson is Michelangelo and Control her statue of David. The youngest member of the Jackson family released her third studio album while on the cusp of her twenties. Working with the dream team of Jimmy Jam and Terry Lewis, Jackson made an assertive, hook-y, and powerful proclamation of her star power on sparkling, sculpted electro-pop dance songs like “Nasty,” “The Pleasure Principle,” and the title track. Control remains the blueprint for any young artist looking to find their own voice.",
    link: "https://open.spotify.com/album/7GWkceE5McMVfffd1RGL6Y",
    image: "https://i.scdn.co/image/ab67616d0000b273d43ed38753792fe6606568f2",
  },
  {
    rank: 393,
    artist: "Taylor Swift",
    album: "1989",
    description:
      "Swift set out to make “blatant pop music” on 1989 and came up with a love letter to the Pet Shop Boys and Eurythmics, all glossy synths, icy snares, and the manic rush of “Blank Space” and “Bad Blood.” She ends the album with the electro-chill of “Clean,” one of her starkest, grandest romantic exorcisms, comparing love’s memory to “a wine-stained dress I can’t wear anymore” and unspooling images of drowning and surviving that can bring to mind another Eighties hero, Kate Bush.",
    link: "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j",
    image: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
  },
  {
    rank: 396,
    artist: "Todd Rundgren",
    album: "Something/Anything?",
    description:
      "“I’m probably the whitest singer in the world,” Todd Rundgren told Rolling Stone in 1972. “I have no ‘soul’ in the usual sense — but I can do this great feminine falsetto.” On this tour de force double album, Rundgren employs that falsetto on two great singles (“I Saw the Light” and “Hello It’s Me”). For the rest of the album, he demonstrates his complete command of the studio, playing almost all the instruments himself, experimenting with a kaleidoscope of rock genres, and even delivering a monologue on what poorly made records sound like.",
    link: "https://open.spotify.com/album/3zNPrWuTPDQeqdj2Y8UjO1",
    image: "https://i.scdn.co/image/ab67616d0000b273572add334f45441a292ed9fb",
  },
  {
    rank: 50,
    artist: "Jay-Z",
    album: "The Blueprint",
    description:
      "With The Blueprint, Jay-Z took on anyone and everyone who wanted to sit on his throne, even the jesters. “Takeover,” one of rap’s most precise and unrelenting diss tracks, commits GBH on rappers Nas and Prodigy from Mobb Deep. When Hova isn’t taking shots at record executives, cops, critics, haters, biters, and his absent dad (and still, sadly, using the word “faggot”), he inches toward vulnerability on “Song Cry.” “Izzo (H.O.V.A.),” with dynamic production by Kanye West, gave him his first Top 10 single. Jay-Z elevates clever rhymes and innovations with an unmatched air of calm control and a cavalier confidence. Here’s the moral of the story, courtesy of “Takeover”: “You guys don’t want it with HOV.”",
    link: "https://open.spotify.com/album/2CUT0104gySOIvqwtXeFsX",
    image: "https://i.scdn.co/image/ab67616d0000b273fec1b815bb3c50a64a90fd10",
  },
  {
    rank: 192,
    artist: "Beastie Boys",
    album: "Licensed to Ill",
    description:
      "Recorded when the three New York rappers were barely out of high school, Licensed to Ill remains a revolutionary combination of hip-hop beats, metal riffs, and some of the most exuberant, unapologetic smart-aleck rhymes ever made. “Three Jerks Make a Masterpiece” read the headline in the Village Voice, the Beastie Boys’ hometown weekly. It’s the relentless commitment to jerkdom that distinguished this debut LP, though the hilarious snaps, obscure pop-culture references, and unique trade-off flow of Mike D, MCA, and Ad-Rock make that attitude resonate. “The girlies I like are underage” hasn’t aged well as far as boasts go, but the Boys realized that soon enough and became dedicated feminists, jerks no more.",
    link: "https://open.spotify.com/album/11oR0ZuqB3ucZwb5TGbZxb",
    image: "https://i.scdn.co/image/ab67616d0000b273a7ea08ab3914c5fb2084a8ac",
  },
  {
    rank: 62,
    artist: "Guns N’ Roses",
    album: "Appetite for Destruction",
    description:
      "The biggest-selling debut album of the Eighties, Appetite hit the metal scene like an asteroid, bringing the grit and fury of Seventies rock back to a mainstream hard-rock scene that was starved for something real. Indiana-bred Axl Rose’s five-alarm yowl bowled over listeners. Guitarist Slash gave the band blues emotion and punk energy, while the rhythm section brought the funk on hits such as “Welcome to the Jungle.” When all the elements came together, as in the final two minutes of “Paradise City,” GN’R left all other Eighties metal bands in the dust, and they knew it, too. “A lot of rock bands are too fucking wimpy to have any sentiment or any emotion,” Rose said. “Unless they’re in pain.”",
    link: "https://open.spotify.com/album/28yHV3Gdg30AiB8h8em1eW",
    image: "https://i.scdn.co/image/ab67616d0000b27321ebf49b3292c3f0f575f0f5",
  },
  {
    rank: 273,
    artist: "Gang of Four",
    album: "Entertainment!",
    description:
      "Formed in 1977, Gang of Four combined Marxist politics with punk rock. They played staccato guitar-driven funk, and the stiff, jerky aggression of songs such as “Damaged Goods” and “I Found That Essence Rare” invented a new style that influenced bands from the Minutemen to LCD Soundsystem to agit-rappers Run the Jewels, who sampled Entertainment!’s “Ether.” Even when they’re barking at you about the capitalist commodification of desire, they never sound like dogmatic grad students because the songs bite so hard.",
    link: "https://open.spotify.com/album/7LMOo068Ndv0wjTGUDtYqK",
    image: "https://i.scdn.co/image/ab67616d0000b2730bc24b6400fb40a0a034e215",
  },
  {
    rank: 95,
    artist: "Drake",
    album: "Take Care",
    description:
      "The Toronto MC had his creative and commercial breakthrough on Take Care, establishing his image as the Champagne Papi who can always find a way to overshare, whether in the club or the bedroom. Drake covers both seductive R&B finesse and hip-hop swagger, with his longtime producer Noah “40” Shebib, along with guests like Rihanna and Jamie xx. “Marvin’s Room” is the showstopper — late at night, Drake drunk-dials his ex to figure out what went wrong (“I’ve had sex four times this week, I’ll explain/I’m having a hard time adjusting to fame”). Hard time or not, Take Care showed that Drake is always best when he bares his feelings in the spotlight.",
    link: "https://open.spotify.com/album/6X1x82kppWZmDzlXXK3y3q",
    image: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",
  },
  {
    rank: 271,
    artist: "Mary J. Blige",
    album: "What’s the 411?",
    description:
      "There was no way R&B was going to keep its distance from hip-hop; they had too much in common. But it required the right singer to build a road between the two. On her first album, Mary J. Blige was marketed as the Queen of Hip-Hop Soul, and the Bronx-born singer lived up to the regal hype, singing about pain and resolve in equal measures. Even when songwriters stuck her with pedestrian lines, you feel genuine longing and the weight of her experiences in every word.",
    link: "https://open.spotify.com/album/5Q3xLiKnY4ShDuQda7qfg2",
    image: "https://i.scdn.co/image/ab67616d0000b27321110eef2bacdfe409af6903",
  },
  {
    rank: 484,
    artist: "Lady Gaga",
    album: "Born This Way",
    description:
      "“Over-the-top” isn’t an insult in Gaga’s world; it’s a statement of purpose. Her second album is a work of blessed bombast, all arena-size sonics and Springsteenian romanticism, complete with a Clarence Clemons sax solo. There’s a thumping, half-in-Spanish song that proposes marriage to “a girl in east L.A.” (“Americano”), a synth-pop jam that includes a come-on on to John F. Kennedy (“Government Hooker”), and a touching ballad about a guy from Nebraska (“You and I”). Fittingly, the glam-slam title track became an LGBTQ anthem.",
    link: "https://open.spotify.com/album/5maeycU97NHBgwRr2h2A4O",
    image: "https://i.scdn.co/image/ab67616d0000b273a47c0e156ea3cebe37fdcab8",
  },
  {
    rank: 171,
    artist: "Sonic Youth",
    album: "Daydream Nation",
    description:
      "Sonic Youth took an ecstatic, specifically New York sound created in the late 1970s by the band Television and by composers Rhys Chatham and Glenn Branca, and turned it into an international clamor. On this double album, they make a move away from doomy riddles about pop culture and toward joyful riddles about pop culture. Their unconventional guitar tunings result in jarring chords and overtones, but also an array of gnarled hooks. Thurston Moore’s and Lee Ranaldo’s guitars are like antennae picking up otherworldly signals and channeling them into the scuzzy urban haze of “Teen Age Riot” and “Eric’s Trip,” and on “The Sprawl,” bassist Kim Gordon sums up the album’s measured chaos: “Does ‘Fuck you’ sound simple enough?”",
    link: "https://open.spotify.com/album/23O4F21GDWiGd33tFN3ZgI",
    image: "https://i.scdn.co/image/ab67616d0000b27320f51363b9e2cbd207f158ba",
  },
  {
    rank: 346,
    artist: "Arctic Monkeys",
    album: "AM",
    description:
      "Not many Brit-pop bands come up with strong second acts like this. The Arctic Monkeys debuted with the stun-gun pop punk of 2005’s Whatever People Say I Am, That’s What I’m Not. But by 2013, they’d moved to L.A. and, on AM, hit a sound that frontman Alex Turner likened to “the Spiders From Mars covering Aaliyah.” The results were not unlike David Bowie’s transformation on Station to Station — alluringly spooky, full of distressed falsetto soul, noir guitars, and rife with bar scenes that look like crime scenes with dead-end hookups.",
    link: "https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu",
    image: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
  },
  {
    rank: 219,
    artist: "Raekwon",
    album: "Only Built 4 Cuban Linx",
    description:
      "The finest Wu-Tang solo joint stands out due to Raekwon’s understated, eternally unflustered cool and densely woven verses. Abetted by hyperactive sideman Ghostface and hypnotically stark beats courtesy of the RZA, Raekwon crafts breathtaking drug-rap narratives. On “Knowledge God,” an Italian drug dealer with a “hairy chest” and “many minks” meets his colorful demise in just six words: “Sixteen shots in his fish tank.” It’s the rare hip-hop album that rivals the mob movies it celebrates for gripping detail.",
    link: "https://open.spotify.com/album/7btiyhWzUfzxN3ijSiBpC8",
    image: "https://i.scdn.co/image/ab67616d0000b27310f55f2af876cc662fc4ec12",
  },
  {
    rank: 208,
    artist: "Lil Wayne",
    album: "Tha Carter III",
    description:
      "By 2008, Lil Wayne contained multitudes: Best Rapper Alive, Pussy Monster, Martian, Weezy F. Baby (and the “F” is for, well, pretty much any word starting with “F”). Tha Carter III was a monument to this multiple-personality menagerie. “A Milli,” a glorified freestyle, fully crossed over to the mainstream, while “Lollipop,” a robotic R&B jam, rightly bet that an audience was ready to invest in Wayne’s croaky, syrup-addled singing voice. More than a decade later, even Wayne’s most outré personalities are still birthing musical descendants.",
    link: "https://open.spotify.com/album/5BGzOpea6At0Nd7tYtYZOP",
    image: "https://i.scdn.co/image/ab67616d0000b27333ebdffaa447ff19ce9f24bb",
  },
  {
    rank: 323,
    artist: "The Clash",
    album: "Sandinista!",
    description:
      "The Clash’s ballooning ambition peaked with Sandinista!, a three-album set named after the Nicaraguan revolutionary movement. Joe Strummer and Mick Jones reached beyond punk and reggae and into dub, R&B, calypso, gospel, and even a kids’ chorus on “Career Opportunities” — whatever crossed their minds. As Strummer said years later, “Even though it would have been better as a double album, or a single album, or an EP! Who knows? The fact is that we recorded all that music in one spat, at one moment. In one three-week blast. For better or worse, [Sandinista!] is the document.”",
    link: "https://open.spotify.com/album/2UxN3UKyS3Z5r0Sra8A5RF",
    image: "https://i.scdn.co/image/ab67616d0000b2732791862e3d0be4fab0781230",
  },
  {
    rank: 180,
    artist: "Love",
    album: "Forever Changes",
    description:
      "“When I did that album,” singer Arthur Lee said, “I thought I was going to die at that particular time, so those were my last words.” Lee, who died of cancer in 2006, was still performing this album live well into the ‘00s. And for good reason: Love’s third record is his crowning achievement. A biracial cult band from L.A. that rarely gigged out of town in its 1960s heyday, Love were Lee’s vehicle for a pioneering folk-rock turned into elegant armageddon with the symphonic sweep and mariachi-brass drama of “Alone Again Or,” “Andmoreagain,” and “You Set the Scene.” In the late Nineties, Lee served time in prison. After his release, he brought extra pathos to “Live and Let Live” when he sang, “Served my time, served it well.”",
    link: "https://open.spotify.com/album/2amHBpP8C0EUy6yBNy6nN6",
    image: "https://i.scdn.co/image/ab67616d0000b273bb01f0ca02c204d13933ca06",
  },
  {
    rank: 359,
    artist: "Big Star",
    album: "Radio City",
    description:
      "Alex Chilton and his band of Memphis misfits were years ahead of their time — when they released Radio City in 1974, hardly anyone heard it. But like the Velvet Underground, they became hugely influential when future generations discovered them and got their minds blown. Big Star came up with their own skewed pop sound, filtering their love of the Beatles through their Memphis-soul roots. “September Gurls” and “Life Is White” should have been hits, soaring with the sweetly eccentric guitar chime and the romantic ache in Chilton’s voice.",
    link: "https://open.spotify.com/album/3mtVgumHx6y9I2UvW4lUd5",
    image: "https://i.scdn.co/image/ab67616d0000b273471e287a6c0dd5e063059c55",
  },
  {
    rank: 236,
    artist: "Daft Punk",
    album: "Discovery",
    description:
      "The robot duo from France perfected house music as pop on their 1997 album Homework. For the follow-up, they took electronic dance music to a whole new place, with the vocoder euphoria of “One More Time” and the deep-groove delight “Harder, Better, Faster, Stronger,” where the title is chanted like a mantra at a dystopian corporate retreat. But even the winky moments have heart, like “Digital Love,” where Eighties guitar cheese takes off toward Tomorrowland.",
    link: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc",
    image: "https://i.scdn.co/image/ab67616d0000b273b33d46dfa2635a47eebf63b2",
  },
  {
    rank: 472,
    artist: "SZA",
    album: "Ctrl",
    description:
      "Thanks to SZA’s lyrics about insecurity, jealousy, loneliness, and her search for “lovin’ and licky,” this assured debut brought a new self-searching spirit to R&B. The tracks are gentle and erotic, but beneath the singer’s soft-grained style, there’s fierceness; in “Dove in the Wind,” she tells a lover she can easily replace him with a dildo. On “Love Galore,” a duet with Travis Scott that describes an ambivalent breakup, she makes clear the vulnerability beneath the bravado: “Gimme a paper towel, gimme another Valium.”",
    link: "https://open.spotify.com/album/76290XdXVF9rPzGdNRWdCh",
    image: "https://i.scdn.co/image/ab67616d0000b2734c79d5ec52a6d0302f3add25",
  },
  {
    rank: 316,
    artist: "The Who",
    album: "The Who Sell Out",
    description:
      "The Who’s third record was their first concept album, a tribute to the U.K.’s offshore pirate-radio stations. The band strung the songs together with mock commercials (“Heinz Baked Beans”) and genuine radio jingles. It’s the Who’s funniest record — the sad love ballad “Odorono” turns out to be an ad for deodorant. The band expanded its maximum-R&B sound with mini rock opera “Rael,” giving a hint of things to come (Tommy was two years away), and “I Can See for Miles” rode Pete Townshend’s thrashiest power chords into the Top 10.",
    link: "https://open.spotify.com/album/2JyNDhGhp0hiizSPuUs0i9",
    image: "https://i.scdn.co/image/ab67616d0000b27334894946601823e27fc08538",
  },
  {
    rank: 173,
    artist: "Nirvana",
    album: "In Utero",
    description:
      "After Nevermind went megaplatinum, Kurt Cobain detested how the band had drawn frat boys and homophobe fans — “plankton,” he called them, adding, “Don’t come to our shows and don’t buy our records.” Nirvana hired indie-rock producer Steve Albini to record their new album, resulting in a record sonically forbidding enough that Geffen Records asked them to clean it up. In “Scentless Apprentice,” he screams, “Go away!” at no one and everyone, summarizing this powerfully unsettling third album. Melodies peak through the clouds of his wrath, especially on “All Apologies,” “Dumb,” and “Pennyroyal Tea,” but the prevailing mood is queasy, like a visit to the inside of Cobain’s aching stomach.",
    link: "https://open.spotify.com/album/6ohX7moZZnF1FwYrli1OJ6",
    image: "https://i.scdn.co/image/ab67616d0000b273aca059cebc1841277db22d1c",
  },
  {
    rank: 114,
    artist: "The Strokes",
    album: "Is This It",
    description:
      "Before Is This It even came out, New York’s mod ragamuffins were overnight sensations, jumping from Avenue A to press hysteria and the inevitable backlash, all inside a year. The objective of Is This It, said singer Julian Casablancas, “was to be really cool and non-mainstream, and be really popular.” Recorded literally under the streets of New York, this blast of guitar-combo racket passionately reconciled those seemingly contradictory aspirations, and accomplished both, updating the propulsion of the Velvet Underground and the jangle of Seventies punk with Casablancas’ acidic dispatches mixed to the fore and ringed with distortion like he was singing from a pay phone.",
    link: "https://open.spotify.com/album/2k8KgmDp9oHrmu0MIj4XDE",
    image: "https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4",
  },
  {
    rank: 454,
    artist: "Can",
    album: "Ege Bamyasi",
    description:
      "Chugging out of Cologne, Germany, in the late Sixties, avant-psychedelic crew Can took influence from the Velvet Underground’s subterranean drones, Miles Davis’ molten jazz rock, and James Brown’s circular funk grooves. On Ege Bamyasi, new singer Damo Suzuki mumbles, chants, and shrieks his way through engulfing Kraut-boogie workouts like “Vitamin C” and “I’m So Green.” Spoon took their name from the LP’s Doors-meets-Stereolab closing track, and Kanye West sampled the lupine “Sing Swan Swing.”",
    link: "https://open.spotify.com/album/3Qa2CdymyGvXkqoqIZykmT",
    image: "https://i.scdn.co/image/ab67616d0000b273416cc99a089bbe8db8ac1311",
  },
  {
    rank: 372,
    artist: "Big Brother and the Holding Company",
    album: "Cheap Thrills",
    description:
      "After Big Brother’s performance at the Monterey Pop Festival made Janis Joplin a star, fans were heatedly expecting a live album from them. But their in-the-red loudness and sloppy performances meant they had to cut their second album in a New York studio, with crowd noise added in later. “We’re just a sloppy group of street freaks,” Joplin said. But these San Francisco acid rockers were the most simpatico band she ever had, especially when their raw racket backs Joplin up on “Piece of My Heart,” perhaps her greatest recording.",
    link: "https://open.spotify.com/album/2rogKfOpmCFuqNhtGKf2dX",
    image: "https://i.scdn.co/image/ab67616d0000b2731ba5ee8bc24979ce3eee4797",
  },
  {
    rank: 355,
    artist: "Black Sabbath",
    album: "Black Sabbath",
    description:
      "Recorded in a single 12-hour blurt by a hippie-leaning former blues band, this lumbering debut conjures up a new, sludgy sound: the birth pains of heavy metal. The slide guitar on “Wizard” and the grungy boogie of “Wicked World” would influence not only future metal spawn but even the sound of Nirvana. The album’s most vivid nightmare is the six-minute “Black Sabbath,” which even scared the band itself. “We always wanted to go heavier than any other band,” said bassist Geezer Butler.",
    link: "https://open.spotify.com/album/4ZLy3U2q17Yjw7jkjXPJQj",
    image: "https://i.scdn.co/image/ab67616d0000b273975ae67d8fb422586b8e2f83",
  },
  {
    rank: 53,
    artist: "Jimi Hendrix",
    album: "Electric Ladyland",
    description:
      "Jimi Hendrix’s third album was the first he produced himself, a fever dream of underwater electric soul cut in round-the-clock sessions at the Record Plant in New York. Hendrix would leave the Record Plant to jam at a club around the corner, the Scene, and “Voodoo Chile” – 15 minutes of live-in-the-studio blues exploration with Steve Winwood on organ and the Jefferson Airplane’s Jack Cassidy on bass – reflects those excursions. In addition to psychedelic Delta blues, there was the precision snap of “Crosstown Traffic” and a cover of “All Along the Watchtower” that took Bob Dylan into outer space before touching down with a final burst of spectral fury.",
    link: "https://open.spotify.com/album/5z090LQztiqh13wYspQvKQ",
    image: "https://i.scdn.co/image/ab67616d0000b273522088789d49e216d9818292",
  },
  {
    rank: 65,
    artist: "James Brown",
    album: "Live at the Apollo",
    description:
      "This may be the greatest live album ever recorded: from the breathless buildup of the spoken intro through terse, sweat-soaked early hits such as “Try Me” and “Think” into 11 minutes of the raw ballad “Lost Someone.” It climaxes with a frenzied nine-song medley, and ends with “Night Train.” Live at the Apollo is pure, uncut soul — and it almost didn’t happen. James Brown defied King Records boss Syd Nathan’s opposition to a live album by arranging to record a show himself — on October 24th, 1962, the last date of a run at Harlem’s Apollo Theater. His intuition proved correct; Live at the Apollo, the first of four albums Brown recorded there, charted for 66 weeks.",
    link: "https://open.spotify.com/album/3jbnkGDaYChChu5Cs8LEvD",
    image: "https://i.scdn.co/image/ab67616d0000b273aedbd6f63007024a40d2d783",
  },
  {
    rank: 141,
    artist: "Pixies",
    album: "Doolittle",
    description:
      "The Pixies’ second full-length album proved that noisy, arty college rock could be just as fun as anything else on MTV. With his antic vocal style and free-associative lyrics, singer-guitarist Black Francis seemed detached from humanity, but the rest of the Pixies grounded him. Bassist Kim Deal adds tart harmonies that feel like sarcastic asides, drummer David Lovering powers the loud-quiet-loud dynamic that influenced Nirvana and many others, and guitarist Joey Santiago tosses out concise, buzzing riffs. The Pixies’ second album is loaded: With “Debaser,” “Here Comes Your Man,” “Monkey Gone to Heaven,” “Hey,” and “Gouge Away,” it’s the college-radio version of a greatest-hits album.",
    link: "https://open.spotify.com/album/0DQyTVcDhK9wm0f6RaErWO",
    image: "https://i.scdn.co/image/ab67616d0000b273cafe9404f872e4c0e91a8cc8",
  },
  {
    rank: 41,
    artist: "The Rolling Stones",
    album: "Let It Bleed",
    description:
      "The record kicks off with the terrifying “Gimme Shelter,” the song that came to symbolize not only the catastrophe of the Stones’ free show at Altamont but also the death of the utopian spirit of the 1960s. And the entire album burns with apocalyptic cohesion: the sex-mad desperation of “Live With Me”; the murderous blues of “Midnight Rambler”; Keith Richards’ lethal, biting guitar on “Monkey Man”; the epic moralism, with honky-tonk piano and massed vocal chorus, of “You Can’t Always Get What You Want,” which Mick Jagger wrote on acoustic guitar in his bedroom. “Somebody said that we could get the London Bach Choir,” Jagger recalled, “and we said, ‘That will be a laugh.'”",
    link: "https://open.spotify.com/album/4l4u9e9jSbotSXNjYfOugy",
    image: "https://i.scdn.co/image/ab67616d0000b2732af30c881bb23cfb82a8cf99",
  },
  {
    rank: 64,
    artist: "OutKast",
    album: "Stankonia",
    description:
      "There’s a thrilling sprawl on OutKast’s fourth album, a sense of limitless possibilities within the boundaries of hip-hop. Big Boi and André 3000 rap about baby mamas’ mamas (“Ms. Jackson”), the perils of sex (“We Luv Deez Hoez”) and alcohol (“?”), feeling excluded from the American dream (“Gasoline Dreams”), good manners (“I’ll Call Before I Come”), and the trauma of teen pregnancy (“Toilet Tisha”). The music is sexy, bold, and hard, mixing, on “B.O.B.,” distorted metal guitar, an HBCU gospel choir, and a jittery techno beat. Big Boi says OutKast is “cooler than a polar bear’s toenails,” adds that they’re “just lyrically twerking,” and tells the police, “Officer, get off us, sir.” “We call it slumadelic,” said André 3000.",
    link: "https://open.spotify.com/album/2tm3Ht61kqqRZtIYsBjxEj",
    image: "https://i.scdn.co/image/ab67616d0000b2732350e31bc346a6c20e9de166",
  },
  {
    rank: 500,
    artist: "Arcade Fire",
    album: "Funeral",
    description:
      "Loss, love, forced coming-of-age, and fragile generational hope: Arcade Fire’s debut touched on all these themes as it defined the independent rock of the ‘00s. Built on family ties (leader Win Butler, his wife, Régine Chassagne, his brother Will), the Montreal band made symphonic rock that truly rocked, simultaneously outsize and deeply personal, like the best pop. But for all its sad realism, Butler’s is music that still finds solace, and purpose, in communal celebration.",
    link: "https://open.spotify.com/album/6ZB8qaR9JNuS0Q0bG1nbcH",
    image: "https://i.scdn.co/image/ab67616d0000b2737870762a58313ad6f981d664",
  },
  {
    rank: 96,
    artist: "R.E.M.",
    album: "Automatic for the People",
    description:
      "“It doesn’t sound a whole lot like us,” warned guitarist Peter Buck. But by stripping back their sound to a spare, largely acoustic essence, the college-rock kings made the most powerful album of their career — an argument for sweetness and softness in an increasingly hard world. The bold sonic change-up laid bare Michael Stipe’s keening baritone and expansive vocal melodies, accentuated in several songs by Led Zeppelin member John Paul Jones’ gorgeous string arrangements. The album “was beautiful. It was quiet,” Stipe said. “It flew in the face of everything that was going down musically at the time.” At a time when grunge angst ruled, songs like “Everybody Hurts” and the lovely “Find the River” offered solace.",
    link: "https://open.spotify.com/album/0BiNb8HYR4JvuxUa31Z58Q",
    image: "https://i.scdn.co/image/ab67616d0000b273ace3e7aae0b7c78bbe1c4f35",
  },
  {
    rank: 13,
    artist: "Aretha Franklin",
    album: "I Never Loved a Man the Way I Love You",
    description:
      "Aretha Franklin’s Atlantic debut is the place where gospel music collided with R&B and rock & roll and became soul. The Detroit-born preacher’s daughter was about $80,000 in debt to her previous label, Columbia, when Atlantic producer Jerry Wexler signed her in 1966. “I took her to church,” Wexler said, “sat her down at the piano, and let her be herself.” \n Recording with the best session men at FAME Studios in Muscle Shoals, Alabama, she promptly cut the album’s title hit, a slow-fire ballad of ferocious sexuality. The historic moment, of course, was her storefront-church makeover of Otis Redding’s “Respect,” which became Franklin’s first Number One pop single, prompting Redding to exclaim, “I just lost my song.” Soon, it would be the new marching anthem of the women’s and civil rights movements. “Women did, and still do, need equal rights,” Franklin said decades later. “We’re doing the same job, we expect the same pay, and the same respect.” She reinforced that feminism on “Do Right Woman, Do Right Man” and had the guts to wring more pathos from Sam Cooke’s civil rights anthem, “A Change Is Gonna Come,” than any other singer who has attempted that landmark song. Never Loved a Man began an unparalleled run of classic albums for Franklin; it’s the sound of the Queen of Soul claiming her crown.",
    link: "https://open.spotify.com/album/5WndWfzGwCkHzAbQXVkg2V",
    image: "https://i.scdn.co/image/ab67616d0000b2736aa9314b7ddfbd8f036ba3ac",
  },
  {
    rank: 155,
    artist: "Jay-Z",
    album: "The Black Album",
    description:
      "By 2003, Jay-Z was out of antagonists to dominate and his Roc-A-Fella label was a true dynasty. So he pulled the rap version of Michael Jordan’s 1993 retirement, with his much vaunted “farewell record.” Backed by a phalanx of superproducers (Kanye West, the Neptunes, Timbaland), he proved himself, once again, “pound for pound … the best to ever come around.” As you might expect, The Black Album is a towering feat of melodramatic self-mythologizing, tracing his birth (“December 4th”), hustler peak (“99 Problems”), and afterlife (“Lucifer”). Apparently, Jay wasn’t too happy with the eulogy, because three years later he was back.",
    link: "https://open.spotify.com/album/4FWvo9oS4gRgHtAwDwUjiO",
    image: "https://i.scdn.co/image/ab67616d0000b273c528802c308a1e0e4d9945dd",
  },
  {
    rank: 232,
    artist: "John Coltrane",
    album: "Giant Steps",
    description:
      "With characteristic humility, John Coltrane said the title of this album referred to the loping instrumental gait of his bassist Paul Chambers. On his Atlantic debut, Coltrane played with a heated melodic enthusiasm — flying clusters of notes — that declared new possibilities for jazz improvisation and predicted the ferocious, harmonically open lyricism that would come with his mid-Sixties records on Impulse. “Mr. P.C.,” “Cousin Mary,” and “Spiral” became Coltrane’s first classics.",
    link: "https://open.spotify.com/album/7MBQWjukLxXZYvQ8vzEH7t",
    image: "https://i.scdn.co/image/ab67616d0000b273073aecd10185e5a5fd88eb90",
  },
  {
    rank: 333,
    artist: "Bill Withers",
    album: "Still Bill",
    description:
      "“Too many black artists get conned into doing so-called standards,” Withers said in 1972. “Songs by white writers who make the big money.” On his second album, Withers simply decided to write his own standards. The friendship anthem “Lean on Me” became his signature, while the propulsive “Use Me” would become one of the most-beloved tunes of all time, later sung by D’Angelo, Fiona Apple, and many others. If Just As I Am introduced Withers as a vital voice, Still Bill solidified him as a songwriter’s songwriter.",
    link: "https://open.spotify.com/album/0sFuW4rH5mFZUjNKnckO3v",
    image: "https://i.scdn.co/image/ab67616d0000b27398e08f603553915a041b6937",
  },
  {
    rank: 437,
    artist: "Primal Scream",
    album: "Screamadelica",
    description:
      "Primal Scream was a run-of-the-mill U.K. alt-rock band who discovered rave culture, overdosed on acid-house music, and retrofitted their sound with the fun, trippy, druggy disco-rock diversions on Screamadelica. The single “Loaded,” their first U.K. hit, combined house piano, folk melodies, and a danceable beat, while “Movin’ On Up,” their U.S. breakthrough, drew from hippie-folk strumming, gospel choruses, and Stones-y guitar and tambourine. Sure, some of Screamadelica feels like meandering mood music, but that’s proof that sometimes the journey is more fun than the destination.",
    link: "https://open.spotify.com/album/4TECsw2dFHZ1ULrT7OA3OL",
    image: "https://i.scdn.co/image/ab67616d0000b27339079cace7c6da79d6376a10",
  },
  {
    rank: 471,
    artist: "Jefferson Airplane",
    album: "Surrealistic Pillow",
    description:
      "Psychedelic scholars have long tried to pin down just what the Grateful Dead’s Jerry Garcia did on this album (besides contribute some guitar playing) to earn a credit as “spiritual adviser.” But the real trip is the Airplane’s hallucinatory distillation of folk-blues vocals, garage-rock guitar, and crisp pop songwriting. Grace Slick’s vocal showcases — “White Rabbit” and “Somebody to Love” — made Surrealistic Pillow a commercial smash during San Francisco’s Summer of Love, and Marty Balin’s spectral “Today” is still the greatest ballad of that city’s glory days.",
    link: "https://open.spotify.com/album/6lPb7Eoon6QPbscWbMsk6a",
    image: "https://i.scdn.co/image/ab67616d0000b2732dac7a01676ddb36c1d0ec05",
  },
  {
    rank: 108,
    artist: "Fiona Apple",
    album: "When the Pawn ...",
    description:
      "Following the success of her precocious debut, Tidal, and saddled with a pop audience that didn’t quite know what to do with her, Fiona Apple took her critics to task on the mature yet daring When the Pawn … Backed by her expressive piano playing and impressionistic production from Jon Brion, Apple makes resentment seem almost fun on songs like “Fast as You Can,” “Paper Bag,” and “The Way Things Are.” In years to come, Apple would make peace with her outcast status, leaving far behind the MTV-generation gatekeepers who once gave her so much grief. For generations of young fans, the raw, hard-won triumph of When the Pawn … will always feel timeless.",
    link: "https://open.spotify.com/album/3o5EnVZNJXtfPV8tCoagjI",
    image: "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
  },
  {
    rank: 270,
    artist: "Kacey Musgraves",
    album: "Golden Hour",
    description:
      "On this album, Kacey Musgraves became Nashville’s most compelling crossover star since Taylor Swift, where she sings about acid trips, homesickness, and falling wildly in love with the witty precision of her earlier small-town polemics, but on a much bigger scale. Golden Hour’s lush yacht-country production re-envisioned what millennial pop might sound like: “I’ve always loved Sade, but I also love Dolly Parton,” Musgraves said. “I thought, ‘There’s got to be a world where all these things can live together.’”",
    link: "https://open.spotify.com/album/7f6xPqyaolTiziKf5R5Z0c",
    image: "https://i.scdn.co/image/ab67616d0000b2732e35d25eb7288830d5540484",
  },
  {
    rank: 73,
    artist: "My Bloody Valentine",
    album: "Loveless",
    description:
      "This vague, shimmering, gorgeous album reportedly cost as much as $500,000 to make and nearly bankrupted the band’s U.K. label. It was worth it. Forget the lyrics, which are buried in the mix and incomprehensible, and focus on Kevin Shields’ and Bilinda Butcher’s guitars, which build entire noise symphonies out of tremolo effects and pitch bending. Highlights like “Only Shallow” and “I Only Said” use sampling technology to build a distorted, shifting sound that is wholly original and ecstatically beautiful. It’s like being serenaded by ghosts. Generations of shoegaze bands were born in its shadow.",
    link: "https://open.spotify.com/album/3GH4IiI6jQAIvnHVdb5FB6",
    image: "https://i.scdn.co/image/ab67616d0000b2730ede770070357575bc050511",
  },
  {
    rank: 387,
    artist: "Radiohead",
    album: "In Rainbows",
    description:
      "Radiohead released In Rainbows as a surprise download in the fall of 2007, letting fans pay whatever they liked. But the real surprise was how expansive the music turned out to be, with material the band had road-tested live in the U.S. all summer. Thom Yorke gets soulful in the intense love songs “All I Need,” “House of Cards,” and “Nude.” It’s Radiohead’s warmest album, with the vibe of a communal jam session. One that’s taking place at the end of the world, of course.",
    link: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
    image: "https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9",
  },
  {
    rank: 74,
    artist: "Kanye West",
    album: "The College Dropout",
    description:
      "In 2003, Kanye West was a Chicago kid who’d produced some hot beats for Jay-Z, wore pastel polo shirts with the collars popped, and wanted to be on the mic, not behind it. Record labels were skeptical, but West got over on wit and determination; he wrote and sang the hit “Through the Wire” while his jaw was wired shut after being in a car accident, and followed it with more dynamic tracks, including “Slow Jamz,” about the seductive power of soul music, and the gospel riot “Jesus Walks.” West loved Jesus and strip clubs, made arrogant claims about his talent, and then professed his insecurity — which made his music all the richer.",
    link: "https://open.spotify.com/album/4Uv86qWpGTxf7fU7lG5X6F",
    image: "https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78",
  },
  {
    rank: 266,
    artist: "The Beatles",
    album: "Help!",
    description:
      "The moptops’ second movie was a Swinging London goof, but the soundtrack included the classics “You’ve Got to Hide Your Love Away” and “Ticket to Ride,” as well as the lovely “I’ve Just Seen a Face.” And, of course, Paul McCartney’s “Yesterday,” recorded without the help of any other Beatles, became the most widely covered song in pop-music history. The sense of confidence and possibility paved the way for the Beatles’ next stop: Rubber Soul.",
    link: "https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX",
    image: "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa",
  },
  {
    rank: 72,
    artist: "Neil Young",
    album: "Harvest",
    description:
      "Harvest yielded Neil Young’s only Number One hit, “Heart of Gold,” and helped set the stage for the Seventies soft-rock explosion — both James Taylor and Linda Ronstadt sing on the album. Along with Young, they were in Nashville to appear on Johnny Cash’s variety show the week that Harvest was cut with an odd group of accomplished session musicians that included bassist Tim Drummond, who had played with James Brown. The sound was Americana — steel guitar, slide guitar, banjo — stripped down and rebuilt with every jagged edge exposed. The standout tracks include “Old Man” and “The Needle and the Damage Done.”",
    link: "https://open.spotify.com/album/0diyyFhmC44mMtnObFjBju",
    image: "https://i.scdn.co/image/ab67616d0000b273d9c0021906c6d0b902c774f6",
  },
  {
    rank: 415,
    artist: "The Meters",
    album: "Looka Py Py",
    description:
      "The Meters were the house band for New Orleans’ genius producer Allen Toussaint and played on Seventies landmarks such as LaBelle’s Nightbirds, while also running off a series of their own rock-solid LPs. These instrumentals — sampled by rappers including Nas and Salt-N-Pepa — are funk of the gods; tight, cutting, but also relaxed and inviting, with Art Neville’s lyrical Hammond B3 organ adding chill texture to George Porter Jr.’s monster bass and the off-the-beat Second Line swing of drummer of Ziggy Modeliste.",
    link: "https://open.spotify.com/album/6mGpQtwteyjKS4Up9tXuND",
    image: "https://i.scdn.co/image/ab67616d0000b27325725e95b24988897d8ceafb",
  },
  {
    rank: 405,
    artist: "Various",
    album: "Nuggets: Original Artyfacts from the First Psychedelic Era",
    description:
      "This collection of Sixties garage rock, compiled by rock critic and soon-to-be Patti Smith guitarist Lenny Kaye, became a touchstone for Seventies punks and, years later, for the aftershock of post-punk. The 27-track, two-LP set was a radical idea in 1972: While rock was getting bigger, Nuggets established a new canon out of forgotten AM-radio hits — brutally simple singles like the Standells’ “Dirty Water,” the Shadows of Knight’s “Oh Yeah!” and the Count Five’s “Psychotic Reaction.” Rhino expanded Nuggets into a sprawling four-CD box in 1998.",
    link: "https://open.spotify.com/album/73Tn4jHmNNvXc3MdjNz12Z",
    image: "https://i.scdn.co/image/ab67616d0000b27390d0db8cb2dcd8b83bc365f1",
  },
  {
    rank: 486,
    artist: "John Mayer",
    album: "Continuum",
    description:
      "After establishing himself as a post-Dave Matthews heartthrob, John Mayer grew into his soul and blues ambitions for a subtly crafted album aided by ace musicians like guitarists Ben Harper and Charlie Hunter, drummer-producer Steve Jordan, and jazz trumpeter Roy Hargrove — from the smooth Hi Records-tinged soul of “Vultures” to “Waiting for the World to Change,” a deceptively knowing and self-aware take on generational apathy.",
    link: "https://open.spotify.com/album/1Xsprdt1q9rOzTic7b9zYM",
    image: "https://i.scdn.co/image/ab67616d0000b2737af5fdc5ef048a68db62b85f",
  },
  {
    rank: 121,
    artist: "Elvis Costello",
    album: "This Year’s Model",
    description:
      "His second album and first with his crack backing band, the Attractions, This Year’s Model is the most “punk” of Elvis Costello’s records — not in any I-hate-the-cops sense but in his emotionally explosive writing (“No Action,” “Lipstick Vogue,” “Pump It Up”) and the Attractions’ vicious gallop (particularly the psycho-circus organ playing of Steve Nieve). Many of the songs rattle with sexual paranoia, but the broadside against vanilla-pop broadcasting, “Radio, Radio” (a U.K. single added to the original U.S. vinyl LP), better reflects the general, righteous indignation of the album: Costello versus the world. And Costello wins.",
    link: "https://open.spotify.com/album/4RLIesiAVONV4fOUlOSmr4",
    image: "https://i.scdn.co/image/ab67616d0000b273c39aa62b10cea6cd2c2c1ed8",
  },
  {
    rank: 477,
    artist: "Howlin’ Wolf",
    album: "Moanin' in the Moonlight",
    description:
      "“That man was the natural stuff,” Buddy Guy said. “His fists were as big as a car tire.” The Wolf had the biggest roar in Chicago blues — he raved in a fierce growl, backed by explosive playing from guitar geniuses Willie Johnson and Hubert Sumlin. His 1959 debut album has some of the meanest electric blues ever heard, cut for Chess Records, from the eerie railroad drone “Smokestack Lightnin’” to the lowdown “I Asked for Water (She Gave Me Gasoline).”",
    link: "https://open.spotify.com/album/76MT4lqzC1oSvSYnHHjMam",
    image: "https://i.scdn.co/image/ab67616d0000b2736181b1ed45a906d5b2c89af3",
  },
  {
    rank: 425,
    artist: "Paul Simon",
    album: "Paul Simon",
    description:
      "Simon’s first solo effort after the breakup of Simon & Garfunkel had plenty to prove, and it did, with a tour de force of songcraft, virtuosic guitar picking, upper-register vocal dazzle, and vivid storytelling about sex (“Duncan”), politics (“Peace Like a River”), and everyday life in New York (“Paranoia Blues”). The album also laid a blueprint for the fluid international fusion Simon explored further on Graceland — from the reggae of “Mother and Child Reunion” to the samba-inflected “Me and Julio Down by the Schoolyard.”",
    link: "https://open.spotify.com/album/7npBPiCHjPj8PVIGPuHXep",
    image: "https://i.scdn.co/image/ab67616d0000b27337a40ab12a4fb96319a9d96f",
  },
  {
    rank: 290,
    artist: "OutKast",
    album: "Speakerboxxx/The Love Below",
    description:
      "For a decade, OutKast were a duo defined by dichotomies — regional versus celestial, order amid chaos, blackness and the universal. On their fifth studio album, that tension could no longer be contained on one CD. Big Boi’s verbal funk overflowed on Speakerboxxx, his half of the double-disc set, while André 3000’s inner crooner exhaled like never before on The Love Below. It was a gamble to break up their twin alchemy this way, but in dividing themselves, OutKast conquered: America fell as deeply in love with the borderless pop bliss of “Hey Ya!” as it did with the slick talk and soulful horns on “The Way You Move.”",
    link: "https://open.spotify.com/album/1UsmQ3bpJTyK6ygoOOjG1r",
    image: "https://i.scdn.co/image/ab67616d0000b2736a6387ab37f64034cdc7b367",
  },
  {
    rank: 106,
    artist: "Hole",
    album: "Live Through This",
    description:
      "One week before Hole’s breakthrough album was released, Kurt Cobain killed himself and made Courtney Love a widow. The media attention that followed guaranteed a close listen for Love’s fearsome songs and her shift from pure riot-grrrl punk to a more stable sound that MTV could embrace. Her coded songs have dark topics, including death (“Kill me pills”), violence (“Pee girl gets the belt”), and body shame (“Bad skin, doll heart”), as well as motherhood. (Cobain and Love became parents two years earlier, and briefly lost custody after she was reported to have used heroin while pregnant.) The horror in Love’s exposed voice on “Asking for It” and “Doll Parts” gives immediacy to her firsthand stories about being an outcast “pee girl.”",
    link: "https://open.spotify.com/album/2Rwf2nPYZQ9aIe4QXACTC7",
    image: "https://i.scdn.co/image/ab67616d0000b273be245e5b673371e6f95b19e2",
  },
  {
    rank: 78,
    artist: "Elvis Presley",
    album: "The Sun Sessions",
    description:
      "On July 5th, 1954, at Sun Studios in Memphis, Elvis Presley, guitarist Scotty Moore, and bassist Bill Black were horsing around with “That’s All Right,” a tune by bluesman Arthur Crudup, when producer Sam Phillips stopped them and asked, “What are you doing?” “We don’t know,” they said. Phillips told them to “back up and do it again.” Bridging black and white, country and blues, Presley’s sound was playful and revolutionary, charged by a spontaneity and freedom that changed the world. He released four more singles on Sun — including deﬁnitive reinventions of Wynonie Harris’ “Good Rockin’ Tonight” and Junior Parker’s “Mystery Train” — before moving on to immortality at RCA. They’re all here on a collection that serves as well as anything out there as a definitive chronicle of the birth of rock & roll.",
    link: "https://open.spotify.com/album/0gv5aiVS1WBUZOKeb7YawE",
    image: "https://i.scdn.co/image/ab67616d0000b27352cbfb62c42adc19d5637843",
  },
  {
    rank: 272,
    artist: "The Velvet Underground",
    album: "White Light/White Heat",
    description:
      "“It’s a very rabid record,” bassist-violist John Cale wrote in the liner notes to the 1995 box set Peel Slowly and See. “The first one had some gentility, some beauty. The second one was consciously anti-beauty.” Drowning their songs in guitar fuzz and drone, the Velvet Underground captured the toe-clenching freakouts of their live shows with their second album — the most extreme disc in VU’s extreme catalog. The blow-your-wig-back highlight: “Sister Ray,” 17 minutes of amplifiers screaming.",
    link: "https://open.spotify.com/album/0HHmJpwOXXRJu9HI9iQiEO",
    image: "https://i.scdn.co/image/ab67616d0000b2737195c4f5f2f4a8236748baaf",
  },
  {
    rank: 221,
    artist: "Rage Against the Machine",
    album: "Rage Against the Machine",
    description:
      "“I believe in this band’s ability to bridge the gap between entertainment and activism,” declared Zack de la Rocha, whose radical politics found sympathetic muscle in Tom Morello’s howling one-guitar army, making a furor unheard since the MC5 and Clash. “Killing in the Name” took on historical racism within U.S. policing, a message that remains sadly prescient, and songs like “Bombtrack” and “Wake Up” were funky fusillades that proved rap rock could change minds as well as roil arena mosh pits.",
    link: "https://open.spotify.com/album/4Io5vWtmV1rFj4yirKb4y4",
    image: "https://i.scdn.co/image/ab67616d0000b2737676c7bf4e667590e496c2a3",
  },
  {
    rank: 479,
    artist: "Selena",
    album: "Amor Prohibido",
    description:
      "Tejana star Selena Quintanilla-Pérez may not have been long for this world (she died when she was just 23), but she remains one of America’s most beloved singer-songwriters. At the heart of her regional Mexican masterwork, Amor Prohibido, is a universal, glittering pop core. The techno-cumbia title track tells the real-life story of her grandparents, who fell in love across class lines. It’s a Latina fairy tale, if ever there was one. Amor Prohibido, meaning “forbidden love,” became one of the bestselling Latin albums of all time.",
    link: "https://open.spotify.com/album/6iv9WTw1nhNxSsgKaxMp4E",
    image: "https://i.scdn.co/image/ab67616d0000b273c26a4f2195b3ecf63d2a30ae",
  },
  {
    rank: 470,
    artist: "Juvenile",
    album: "400 Degreez",
    description:
      "From the moment Juvenile asked, “That’s you with that bad ass benz?” and punctuated the bar with a cocky, dismissive “Ha,” rap’s axis tilted. The New Orleans rapper’s third album reorientated hip-hop toward a new Southern sound, driven by producer Mannie Fresh’s intergalactic beats. “Ha” and “Back That Azz Up” were earthshaking singles, and Juvenile’s young-but-old growl brought out the blues in “Ghetto Children” and Dickensian horror in “Gone Ride With Me.” 400 Degreez added new sonic textures that pop music is still mining.",
    link: "https://open.spotify.com/album/6wpqS71CJr3I0dLguYiZdJ",
    image: "https://i.scdn.co/image/ab67616d0000b273683fee123a35b36d53f21a58",
  },
  {
    rank: 348,
    artist: "Gillian Welch",
    album: "Time (The Revelator)",
    description:
      "Gillian Welch had a breakout moment when she appeared in the Coen brothers’ folk-music-themed movie O Brother, Where Art Thou?. She followed it with this striking modern-roots album, collaborating with guitarist David Rawlings on songs about love, sex, nostalgia, and the music of Elvis Presley. It ends with the 15-minute meditation “I Dream a Highway,” which the pair had never played before they recorded it, one example of the spontaneous power of an LP that made Depression-era music feel time-warped into the present.",
    link: "https://open.spotify.com/album/55FP2ypQcghszSqylyBRbp",
    image: "https://i.scdn.co/image/ab67616d0000b273f1a8f598e5ef9673cb4d6981",
  },
  {
    rank: 134,
    artist: "Fugees",
    album: "The Score",
    description:
      "The East Coast and West Coast were in an arms race to see who could be more hardcore when the Fugees snuck up from behind and slayed everyone with a feather. The trio of Wyclef Jean, Pras, and Lauryn Hill blended rap, R&B, and reggae into an intimate, widescreen sound, using panache, a teasing sense of humor, and a forthright intelligence. Their second album was both an underground and mainstream hit, thanks to the singles “Fu-Gee-La,” “Ready or Not,” and their breakbeat cover of Roberta Flack’s “Killing Me Softly.” Hill lays out the highbrow-for-lowbrows battle plan: “And even after all my logic and my theory/I add a ‘motherfucker’ so you ignant niggas hear me.”",
    link: "https://open.spotify.com/album/18XFe4CPBgVezXkxZP6rTb",
    image: "https://i.scdn.co/image/ab67616d0000b2735b7865be7f7fcc05faec6137",
  },
  {
    rank: 483,
    artist: "Muddy Waters",
    album: "The Anthology",
    description:
      "Muddy Waters started out playing acoustic Delta blues in Mississippi, but when he moved to Chicago in 1943, he needed an electric guitar to be heard over the tumult of South Side clubs. The sound he developed was the foundation of Chicago blues — and rock & roll; the thick, bleeding tones of his slide work anticipated rock-guitar distortion by nearly two decades. The 50 cuts on these two CDs run from guitar-and-stand-up-bass duets to full-band romps — and they still just scratch the surface of Waters’ legacy.",
    link: "https://open.spotify.com/album/3nwUyORzdqWdwDidxetjD4",
    image: "https://i.scdn.co/image/ab67616d0000b2734fb82df718f27b957f4d0b9d",
  },
  {
    rank: 104,
    artist: "The Rolling Stones",
    album: "Sticky Fingers",
    description:
      "Drummer Charlie Watts remembered the origin of Sticky Fingers as the songs Mick Jagger wrote while filming the movie Ned Kelly in Australia. “Mick started playing the guitar a lot,” Watts said. “He plays very strange rhythm guitar … very much how Brazilian guitarists play, on the upbeat. It is very much like the guitar on a James Brown track — for a drummer, it’s great to play with.” New guitarist Mick Taylor, replacing Brian Jones, stretches out the Stones sound in “Sway,” “Can’t You Hear Me Knocking,” and “Moonlight Mile.” But “Brown Sugar” is a classic Stones stomp, and two of the best cuts are country songs: one forlorn (“Wild Horses”) and one funny (“Dead Flowers”).",
    link: "https://open.spotify.com/album/29m6DinzdaD0OPqWKGyMdz",
    image: "https://i.scdn.co/image/ab67616d0000b273a1d9c9969f2a7ed27e449a3c",
  },
  {
    rank: 344,
    artist: "Toots and the Maytals",
    album: "Funky Kingston",
    description:
      "Loose, funky, and exuberant, Kingston is the quintessential document of Jamaica’s greatest act after Bob Marley. Showcasing some of the Maytals’ best songs (“Pressure Drop,” later covered by the Clash) and borrowing from soul, pop, and gospel, Funky Kingston introduced the world to the great Toots Hibbert. He performs versions of “Louie Louie” and, in a down-home surprise, John Denver’s “Take Me Home, Country Roads,” with Toots changing the lyrics from “West Virginia” to “West Jamaica.”",
    link: "https://open.spotify.com/album/7a341nZsSfwyBsq1tMPETz",
    image: "https://i.scdn.co/image/ab67616d0000b273c791c7423d7b3b9f02fb093a",
  },
  {
    rank: 160,
    artist: "Pearl Jam",
    album: "Ten",
    description:
      "More than any of the Northwest bands that preceded them, Pearl Jam turned grunge into rock’s dominant new sound. Their first album includes stories about homelessness (“Even Flow”), murder (“Once”), execution (“Footsteps”), incest (“Alive”), psychiatric hospitals (“Why Go”), and romantic disappointment (“Black”). Most notoriously, “Jeremy” told the story of a high school kid who takes revenge on his bullies by killing himself in class — though the lyrics don’t make that clear, the accompanying video did. Pearl Jam committed themselves to songs of darkness and trouble, especially in adolescent life, and Eddie Vedder delivers them with conviction, in a voice that makes you feel like the events are happening right now, in front of you.",
    link: "https://open.spotify.com/album/5B4PYA7wNN4WdEXdIJu58a",
    image: "https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864",
  },
  {
    rank: 440,
    artist: "Loretta Lynn",
    album: "Coal Miner's Daughter",
    description:
      "Loretta Lynn crossed over into pop with the autobiographical “Coal Miner’s Daughter,” in which she proudly recalled her meager upbringing amid weepy steel guitar — her mother read the Bible by “coal-oil light,” her dad sold hogs to buy her shoes. That resilient spirit carried over into the Coal Miner’s Daughter LP’s tunes about feeling jilted (“What Makes Me Tick”) and loving another woman’s man (“Any One, Any Worse, Any Where”), and the album, as well as the like-titled memoir and biopic, secured her place as one the most important country singers ever.",
    link: "https://open.spotify.com/album/2SayIIdZkrtb9I4BbdnyOr",
    image: "https://i.scdn.co/image/ab67616d0000b273105efc7e27696434d265db1b",
  },
  {
    rank: 251,
    artist: "Elton John",
    album: "Honky Château",
    description:
      "After a couple of weightier singer-songwriter outings, it was delightful to hear Elton John revel in the simple pop pleasures of “Honky Cat.” Written in four days and using his signature touring band for the first time, his fifth album is a snapshot of an artist loosening up and coming into his full powers, rendering classics like “Rocket Man” and “Mona Lisas and Mad Hatters,” as well as curveballs like the adolescent angst of “I Think I’m Going to Kill Myself,” into jaunty confection.",
    link: "https://open.spotify.com/album/2ei2X6ghPnw7YRwQtAH075",
    image: "https://i.scdn.co/image/ab67616d0000b2733009007708ab5134936a58b3",
  },
  {
    rank: 436,
    artist: "2Pac",
    album: "All Eyez on Me",
    description:
      "2Pac wanted it all: credibility and success, “murderous lyrics” and voice-of-a-generation gravitas. On his fourth (and final) album, he briefly gets it. In the course of 27 songs and two discs, Pac empties his brain of the contradictory impulses. The Dr. Dre track “California Love” became a huge house-party hit, but what unifies the album, through an array of different producers and guest stars, is Pac’s charisma and his struggles with morality: “It’s similar to Rhythm Nation, but thugged out — forgive me, Janet.”",
    link: "https://open.spotify.com/album/78iX7tMceN0FsnmabAtlOC",
    image: "https://i.scdn.co/image/ab67616d0000b273073aebff28f79959d2543596",
  },
  {
    rank: 177,
    artist: "Rod Stewart",
    album: "Every Picture Tells a Story",
    description:
      "“We had no preconceived ideas of what we were going to do,” Rod Stewart said. “We would have a few drinks and strum away and play.” With a first-class band of drinking buddies (including guitarist Ron Wood and drummer Mickey Waller), Stewart made a loose, warm, compassionate album, rocking hard with mostly acoustic instruments. “Mandolin Wind” was his moving ballad of a country couple toughing out a long winter on the farm; the title tune was a hilarious goof. But Stewart scored his first Number One hit with “Maggie May,” his autobiographical tale of a young stud getting kicked in the head by an older lady.",
    link: "https://open.spotify.com/album/4VykjLwkyfKMZVLrJJVrYh",
    image: "https://i.scdn.co/image/ab67616d0000b273f20825485137abccd82b9665",
  },
  {
    rank: 93,
    artist: "Missy “Misdemeanor” Elliott",
    album: "Supa Dupa Fly",
    description:
      "Missy “Misdemeanor” Elliott made her name as a songwriter behind the scenes, even before she dropped her 1997 debut. But Supa Dupa Fly introduced everyone to Missy’s world, with avant-funk cosmic swamp beats from Timbaland. What a team: two kids from Virginia Beach, Virginia, dazzling the planet with a playful homegrown sound nobody could imitate. “The Rain (Supa Dupa Fly)” was the breakout hit, taking an old-school Ann Peebles soul oldie and looping it into a Dirty South jam — Missy sings, raps, giggles, and talks her shit. Supa Dupa Fly changed the sound of hip-hop, but also kicked off a tradition — every year, Missy and Tim would score the jam of the summer, while everybody else was still trying to catch up with what they did the summer before.",
    link: "https://open.spotify.com/album/6UkdyvPElK6JDkyeRClbI2",
    image: "https://i.scdn.co/image/ab67616d0000b273f27571e59cac2e7a4624c9c4",
  },
  {
    rank: 250,
    artist: "Buzzcocks",
    album: "Singles Going Steady",
    description:
      "Some punks wanted to smash the state. The Buzzcocks just wanted to find someone to love, and if you didn’t return their intense affection, watch out (check the jilted tantrum “Oh Shit!”). Singles collects eight British 45s into a perfect punk album. This Manchester group took the sound of the Ramones and made it jittery and even faster. Songs such as “Everybody’s Happy Nowadays” define a world of permanently frustrated punk desire.",
    link: "https://open.spotify.com/album/6TxgQwGrbG3XZLNPOEhg7E",
    image: "https://i.scdn.co/image/ab67616d0000b273ee89a285a9b6ec19328aa668",
  },
  {
    rank: 420,
    artist: "Earth, Wind and Fire",
    album: "That’s the Way of the World",
    description:
      "Before he got into African thumb piano and otherworldly philosophizing, founder Maurice White was a session drummer at Chess studios (that’s him on Fontella Bass’ “Rescue Me”). He stayed behind the kit as he led EWF. Their sixth album is make-out music of the spheres, incorporating doo-wop, jazz, and African music into a sound that’s sleek but never too slick; the title track is one of funk’s most gorgeous ballads, and “Shining Star” is a Seventies self-help seminar delivered over one of the decade’s sweetest grooves.",
    link: "https://open.spotify.com/album/5tXZfxvr2VaWibD74nw8VL",
    image: "https://i.scdn.co/image/ab67616d0000b27330bb42e5271f2e046fd36972",
  },
  {
    rank: 463,
    artist: "Laura Nyro",
    album: "Eli & the 13th Confession",
    description:
      "Part confessional singer-songwriter and part would-be soul diva, Nyro was never an easy one to categorize. Her dazzling second album came the closest to blending both of her musical selves. Her pop instincts shine in the best-known songs here, like “Eli’s Comin’” and “Stoned Soul Picnic.” But the rest of the album finds her less restrained lyrically and musically, making for sensuous and often sexually ambiguous music that paved the way for many genre-busting female troubadours.",
    link: "https://open.spotify.com/album/533zqKatpy90jse2K5IaiQ",
    image: "https://i.scdn.co/image/ab67616d0000b27367e5ff01206a4e31dc9b97e8",
  },
  {
    rank: 400,
    artist: "The Go-Go’s",
    album: "Beauty and the Beat",
    description:
      "The most popular girl group of New Wave surfed to the top of the charts with this hooky debut. Everyone knows “We Got the Beat” and “Our Lips Our Sealed,” exuberant songs that livened up the Top 40, but the entire album welds punkish spirit to party-minded pop. It’s one of those albums where every song feels like it could’ve been a single — from “This Town,” a sweet, tough celebration of their L.A. scene, to the haunting “Lust to Love” to the album-ending one-two punch of “Skidmarks on My Heart” and “Can’t Stop the World.”",
    link: "https://open.spotify.com/album/1L4HE00En7eNK74voVZums",
    image: "https://i.scdn.co/image/ab67616d0000b2738a25755534e84d8a604e6b38",
  },
  {
    rank: 34,
    artist: "Stevie Wonder",
    album: "Innervisions",
    description:
      "“We as a people are not interested in ‘baby, baby’ songs any more, there’s more to life than that,” Stevie Wonder said in 1972. With Innervisions, Wonder offered a landmark fusion of social realism and spiritual idealism; he brings expressive color and irresistible funk to his synth-based keyboards on “Too High” (a cautionary anti-drug song) and “Higher Ground” (which echoes Martin Luther King Jr.’s message of transcendence). The album’s centerpiece is “Living for the City,” a cinematic depiction of exploitation and injustice. “Innervisions gives my own perspective on what’s happening in my world,” Wonder said. “I think it is my most personal album. I don’t care if it sells only five copies.”",
    link: "https://open.spotify.com/album/5jgI8Eminx9MmLBontDWq8",
    image: "https://i.scdn.co/image/ab67616d0000b273ea8ab1a548312b79ac955266",
  },
  {
    rank: 354,
    artist: "X-Ray Spex",
    album: "Germ Free Adolescents",
    description:
      "Teenage multiracial London girl Poly Styrene had braces on her teeth and wore Day-Glo rags, screeching anthems like “Oh Bondage! Up Yours!” over saxophone blasts, and chanting, “I am a poseur and I don’t care! I like to make people stare!” X-Ray Spex’s explosive punk-rock debut went criminally unreleased in the U.S., but it became a word-of-mouth cult classic throughout the indie-rock underground in the Eighties and Nineties, influencing Sleater-Kinney, the Beastie Boys, and many others.",
    link: "https://open.spotify.com/album/7nZ0F572fluFD4tQCFf3z7",
    image: "https://i.scdn.co/image/ab67616d0000b27367737ef9275b002cc54868ea",
  },
  {
    rank: 376,
    artist: "Neutral Milk Hotel",
    album: "In the Aeroplane Over the Sea",
    description:
      "The Louisiana band nearly pulled off an indie-rock Pet Sounds with their second album, leavening low-fi guitar racket and twee folk with circus-y instruments like the singing saw and zanzithophone, as leader Jeff Magnum cut through the irony of the Seinfeld/Pavement era with his heraldic surrealist yammerings about broken homes, Anne Frank, religion, scary sexual awakenings, and other coming-of-age traumas. It’s weird, raw, harrowing stuff; if you think you can’t be moved by a song called “The King of Carrot Flowers Pts. 2 & 3,” hearing is believing.",
    link: "https://open.spotify.com/album/0vVekV45lOaVKs6RZQQNob",
    image: "https://i.scdn.co/image/ab67616d0000b273589ce9a911c6e65b1f80c558",
  },
  {
    rank: 40,
    artist: "David Bowie",
    album: "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
    description:
      "This album documents one of the most elaborate self-mythologizing schemes in rock, as David Bowie created the glittery, messianic alter ego Ziggy Stardust (“well-hung and snow-white tan”). The glam rock Bowie made with guitarist Mick Ronson is an irresistible blend of sexy, campy pop and blues power, with enduring tracks like “Hang On to Yourself” and “Suffragette City.” The anthem “Ziggy Stardust” was one of rock’s earliest, and best, power ballads. “I consider myself responsible for a whole new school of pretensions,” Bowie said. “They know who they are. Don’t you, Elton? Just kidding. No, I’m not.”",
    link: "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56",
    image: "https://i.scdn.co/image/ab67616d0000b273c41f4e1133b0e6c5fcf58680",
  },
  {
    rank: 253,
    artist: "Pink Floyd",
    album: "The Piper at the Gates of Dawn",
    description:
      "“I’m full of dust and guitars,” Pink Floyd’s Syd Barrett told Rolling Stone. Here’s what that sounded like. The band’s debut is all playful, psychedelic imagery and acid guitars. “Astronomy Domine” shows the group’s pop side; “Interstellar Overdrive” shows its spacier freakouts. Released at the height of the Summer of Love, The Piper at the Gates of Dawn sums up the headlong feeling of the moment just as aptly as the Beatles’ Sgt. Pepper.",
    link: "https://open.spotify.com/album/2Se4ZylF9NkFGD92yv1aZC",
    image: "https://i.scdn.co/image/ab67616d0000b273474c7525fbca0d59554ca424",
  },
  {
    rank: 79,
    artist: "Frank Ocean",
    album: "Blond",
    description:
      "Frank Ocean turned the release of Blond into a daring aesthetic stunt in itself. After years of high expectations after Channel Orange [see No. 148], he fulfilled his Def Jam contract with the visual project Endless, but then — within hours — he released his own Blond. It’s a boldly personal statement full of layered harmonies, as Ocean mutates his voice to match every mood. The songs were so nakedly intimate, it felt like a post-hip-hop Pet Sounds in the spirit of Beyoncé (who sings on “Pink + White”) and Elliott Smith (whose voice appears on “Seigfried”). “Ivy” is his most deeply melancholic confession — Ocean mourns a lost love over a distorted guitar, lamenting, “We’ll never be those kids again.”",
    link: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
    image: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
  },
  {
    rank: 379,
    artist: "Rush",
    album: "Moving Pictures",
    description:
      "On Seventies albums like 2112 and Hemispheres, Rush mastered the high-prog epic. Moving Pictures was the record where they proved they could say as much in four minutes as they previously had in 20. Songs like “Tom Sawyer,” “Limelight,” and the Police-like “Vital Signs” showcased the trio’s superhuman chops in a radio-ready framework, while more adventurous tracks like the Morse code–inspired instrumental “YYZ” and the synth-heavy suite “The Camera Eye” found them tastefully streamlining their wildest ideas. Said Geddy Lee, “We learned it’s not so easy to write something simple.”",
    link: "https://open.spotify.com/album/2xg7iIKoSqaDNpDbJnyCjY",
    image: "https://i.scdn.co/image/ab67616d0000b27372833c1ae3343cbfb4617073",
  },
  {
    rank: 234,
    artist: "Black Sabbath",
    album: "Master of Reality",
    description:
      "Paranoid may have bigger hits, but Master of Reality, released a mere six months later, is heavier. It was the band’s first attempt to use the recording studio, and it’s full of ambitious ideas (check out Bill Ward’s funky timbale work on “Children of the Grave”). The highlight is “Sweet Leaf,” a droning love song to marijuana. The vibe is perfectly summed up by the final track, “Into the Void.” But it isn’t all relentless doom: “After Forever,” written by bassist Geezer Butler, pretty much invents the idea of Christian metal.",
    link: "https://open.spotify.com/album/7pGb2cOGVz6vLyaZaKOQ7D",
    image: "https://i.scdn.co/image/ab67616d0000b273c199494ba9ea2b73e9208f91",
  },
  {
    rank: 263,
    artist: "The Beatles",
    album: "Hard Day's Night",
    description:
      "This soundtrack to the Richard Lester film cemented all that U.S. listeners had heard about the Beatles’ genius in the off-kilter beauty of John Lennon’s “If I Fell” and the rockabilly bounce of Paul McCartney’s “Can’t Buy Me Love.” It was their first album of all-original material, showcasing leaps in their songwriting as well as new tricks like George Harrison’s 12-string guitar, picked up on tour in America, and the Dylanesque harmonica blast that opens “I Should Have Known Better.”",
    link: "https://open.spotify.com/album/6wCttLq0ADzkPgtRnUihLV",
    image: "https://i.scdn.co/image/ab67616d0000b273e230f303815e82a86713eedd",
  },
  {
    rank: 107,
    artist: "Television",
    album: "Marquee Moon",
    description:
      "When the members of Television materialized in New York, at the dawn of punk, they played an incongruous, soaring amalgam of genres: the noirish howl of the Velvet Underground, brainy art rock, the double-helix guitar sculpture of Quicksilver Messenger Service. As exhilarating in its lyrical ambitions as the Ramones’ debut was in its brutal simplicity, Marquee Moon still amazes. “Friction,” “Venus,” and the mighty title track are jagged, desperate, and beautiful all at once. As for punk credentials, don’t forget the cryptic electricity and strangled existentialism of guitarist Tom Verlaine’s voice and songwriting.",
    link: "https://open.spotify.com/album/630o1rKTDsLeIPreOY1jqP",
    image: "https://i.scdn.co/image/ab67616d0000b27318b36d985b0ae01163ca9cf6",
  },
  {
    rank: 340,
    artist: "Snoop Doggy Dogg",
    album: "Doggystyle",
    description:
      "Until Snoop Dogg came along, no one in rap — and hardly anyone in rock — realized that an aloof whisper could be more intimidating than a shout. Snoop never gets heated; he takes the same tone when he’s menacing a cop as he does with a woman who’s soaping his back in the tub. Emanuel Dean and Dr. Dre’s sterling G-funk productions on “Gin N Juice” and “Who Am I (What’s My Name)?” ensured enormous album sales for the D-O-double-G’s debut and his laidbaaaack Indo-flavored tales of life on the streets of Compton.",
    link: "https://open.spotify.com/album/6O596dpjT5Et9VG4CqjIO5",
    image: "https://i.scdn.co/image/ab67616d0000b273f72951af71e47b1f0a4ac7ba",
  },
  {
    rank: 3,
    artist: "Joni Mitchell",
    album: "Blue",
    description:
      "In 1971, Joni Mitchell represented the West Coast feminine ideal — celebrated by Robert Plant as “a girl out there with love in her eyes and flowers in her hair” on Led Zeppelin’s “Goin’ to California.” It was a status that Mitchell hadn’t asked for and did not want: “I went, ‘Oh, my God, a lot of people are listening to me,’” she recalled in 2013. “’They better find out who they’re worshiping. Let’s see if they can take it. Let’s get real.’ So I wrote Blue.”\nFrom its smoky, introspective cover to its wholly unguarded approach to songwriting, Blue is the first time any major rock or pop artist had opened up so fully, producing what might be the ultimate breakup album and setting a still-unmatched standard for confessional poetry in pop music. Using acoustic instruments and her octave-leaping voice, Mitchell portrayed herself as a lonely painter, aching to make sense of all her heartbreak. She reflects on past relationships and encounters, including a chef from Crete (“Carey”) and rock luminaries like Graham Nash (“My Old Man”), Leonard Cohen (“A Case of You”), and James Taylor (“This Flight Tonight”), who lent a hand on a few tracks. Along with its romantic melancholy, Blue was the sound of a woman availing herself of the romantic and sexual freedom that was, until then, an exclusively male province in rock.\nThe songs had such stark, emotional intensity that it shocked the men around her: “Kris Kristofferson said to me, ‘Oh, Joni. Save something for yourself.’ The vulnerability freaked them out.” On “Little Green,” she opens up about a baby she had given up for adoption, and on the staggering piano dirge “River,” she takes responsibility for a romance gone wrong, changing the scope of love songs forever: “I’m so hard to handle/I’m selfish, and I’m sad,” she laments. “Now I’ve gone and lost the best baby/That I ever had.”\nMitchell continued to release excellent records throughout the Seventies, but Blue remains her masterpiece. “The Blue album, there’s hardly a dishonest note in the vocals,” she told Rolling Stone in 1979. “At that period of my life, I had no personal defenses. I felt like a cellophane wrapper on a pack of cigarettes. I felt like I had absolutely no secrets from the world, and I couldn’t pretend in my life to be strong. Or to be happy. But the advantage of it in the music was that there were no defenses there either.”",
    link: "https://open.spotify.com/album/1waWyv6WHxSAJX6e6Aygwv",
    image: "https://i.scdn.co/image/ab67616d0000b273d02359c6fc368ed19bc0215b",
  },
  {
    rank: 190,
    artist: "The Who",
    album: "Tommy",
    description:
      "“Rock opera” is one way to describe the pioneering ambition in Pete Townshend’s musical exploration of childhood trauma, sexual abuse, repression, and spiritual release (after all, it does have an overture). Here’s another way: the slash and thunder of “My Generation” blown wide open. Driven by the hellbent drumming of Keith Moon, the Who surge and shine, igniting the drama in Townshend’s melodies (“Pinball Wizard,” “We’re Not Gonna Take It”). “We worked out the sociological implications, the religious implications, the rock implications,” Townshend said. “When we’d done that, we went into the studio, got smashed out of our brains, and made it.”",
    link: "https://open.spotify.com/album/5cT7ee1sy2oEbFalP4asS4",
    image: "https://i.scdn.co/image/ab67616d0000b27374ecb94bc3e5d851a39a0334",
  },
  {
    rank: 407,
    artist: "Neil Young",
    album: "Everybody Knows This Is Nowhere",
    description:
      "Neil Young and Crazy Horse hadn’t been together for more than eight weeks when they cut this album. It’s down-home hippie-grunge with the feel of a jam session conducted by master jammers. Both sides of the album end in monster, 10-minute guitar excursions, especially “Down by the River” and “Cowgirl in the Sand,” and “Cinnamon Girl” was Young’s first big solo single, three minutes of crunching distortion featuring a one-note guitar solo for the ages — “the closest thing Crazy Horse had to a hit,” Young said.",
    link: "https://open.spotify.com/album/753YhBHwNdiJYnXxrBjw6i",
    image: "https://i.scdn.co/image/ab67616d0000b273c4c94236c8b7381a4c7c2b97",
  },
  {
    rank: 44,
    artist: "Nas",
    album: "Illmatic",
    description:
      "Other rappers were harder and brasher, but nobody captured the creeping menace of life on the streets like this 20-year-old from New York’s Queensbridge projects. With lines like “I never sleep, ’cause sleep is the cousin of death,” Nas showed more poetic style than any MC since Rakim. His debut begins with the sound of a subway train, and for the next 39 minutes, he seems to visit every street corner from Queens to Brooklyn, detailing drug deals, escapism, persecution, prison life, and survival. Throughout, he displays a pure focus (there’s only one guest verse) and explosive dexterity; it’s one thing to say “I drop the ancient manifested hip-hop,” as he does in the first verse of “Memory Lane,” it’s another to back that up with a stunning, acrobatic second verse. Illmatic was an instant classic that never crossed over, which only deepened its myth with hip-hop heads.",
    link: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1",
    image: "https://i.scdn.co/image/ab67616d0000b273045fc920ecf4f8094888ec26",
  },
  {
    rank: 375,
    artist: "Green Day",
    album: "Dookie",
    description:
      "The album that jump-started the Nineties punk-pop revival. The skittish Dookie was recorded in little more than three weeks, and singer-guitarist Billie Joe Armstrong blazed through all the vocals in two days. “Right from getting the drum sound, everything seemed to click,” their A&R man (and Dookie producer) Rob Cavallo marveled. Indeed, “click” is the operative word here, also describing Armstrong’s airtight, three-minute bowshots like “Welcome to Paradise,” “Basket Case,” and the infectious smash “Longview” — which Armstrong described as “cheap self-therapy from watching too much TV.”",
    link: "https://open.spotify.com/album/4uG8q3GPuWHQlRbswMIRS6",
    image: "https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d",
  },
  {
    rank: 447,
    artist: "Bad Bunny",
    album: "X 100pre",
    description:
      "Heralded by a subtly symbolic Christmas Eve release, Bad Bunny’s 2018 debut, X 100pre, was the Puerto Rican artist’s bid to court listeners new to Latin sounds, running through trap, reggaeton, dembow, synth-pop, and even pop punk, with help from Anglophonic ambassadors like Diplo and Drake. Bad Bunny could be shamelessly crude and totally vulnerable, with his slow-burning baritone opening the floor for Latin pop that’s not afraid to get uncomfortable.",
    link: "https://open.spotify.com/album/7CjJb2mikwAWA1V6kewFBF",
    image: "https://i.scdn.co/image/ab67616d0000b2732fbd77033247e889cb7d2ac4",
  },
  {
    rank: 42,
    artist: "Radiohead",
    album: "OK Computer",
    description:
      "Radiohead recorded their third album in the mansion of actress Jane Seymour while she was filming Dr. Quinn, Medicine Woman. OK is where the band began pulling at its sound like taffy, seeing what happened, not worrying if it was still “rock.” What resulted is a slow, haunting album with unforgettable tracks such as “Karma Police.” Guitarist Jonny Greenwood said, “I got very excited at the prospect of doing string parts that didn’t sound like ‘Eleanor Rigby,’ which is what all string parts have sounded like for the past 30 years.… We used violins to make frightening white-noise stuff, like the last chord of ‘Climbing Up the Walls.’”",
    link: "https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE",
    image: "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
  },
  {
    rank: 334,
    artist: "Santana",
    album: "Abraxas",
    description:
      "“Black Magic Woman,” the Top Five hit from Abraxas, is definitive Santana: Afro-Latin grooves and piercing, lyrical, psychedelic blues guitar. It’s a cover of a Fleetwood Mac song written by one of Carlos Santana’s guitar heroes, Peter Green. The album’s other hit was also a cover: Tito Puente’s “Oye Como Va.” The clarion quality of Santana’s solos inspired many guitarists, especially artists looking to bridge seemingly divergent styles, including Prince.",
    link: "https://open.spotify.com/album/1CHUXwuge9A7L2KiA3vnR6",
    image: "https://i.scdn.co/image/ab67616d0000b273f1594eeff2ea90e0f3873919",
  },
  {
    rank: 242,
    artist: "The Velvet Underground",
    album: "Loaded",
    description:
      "The Velvet Underground made their most accessible album in 1970, during a summer alternately comprising triumph and stress. Drummer Maureen Tucker was on maternity leave; singer-guitarist-songwriter Lou Reed quit in August before the record was even finished. But Reed left behind a pair of hits (“Sweet Jane,” “Rock ’n’ Roll”), two of his finest ballads (“New Age,” “Oh! Sweet Nuthin’”), and a record that highlights the R&B/doo-wop roots and Sun Records crackle buried deep inside the Velvets’ noir-guitar maelstrom.",
    link: "https://open.spotify.com/album/2ny1rPsLOoKNFZhMLubMrs",
    image: "https://i.scdn.co/image/ab67616d0000b273a6d589272dca67a07a00c8a8",
  },
  {
    rank: 167,
    artist: "Depeche Mode",
    album: "Violator",
    description:
      "One of England’s first synth-pop bands, Depeche Mode had moved beyond their bubblegum phase by the time of their seventh album and, under the influence of hip-hop, began playing with samples and loops, even betraying their keyboard roots with the twangy guitar that opens “Personal Jesus.” Alan Wilder created the dense, constantly shifting arrangements, Martin Gore wrote the pervy lyrics, and Dave Gahan croons implacably about betrayal, immorality, and sexual domination. The percolating “Enjoy the Silence” became their only U.S. Top 10 single, and “Policy of Truth” did almost as well. With its panoply of high-gloss hooks and arresting, artificial sounds, Violator cemented Depeche Mode’s status as the first electronic band that could fill stadiums.",
    link: "https://open.spotify.com/album/5g3Yi15plTSMaq6tYiuw8p",
    image: "https://i.scdn.co/image/ab67616d0000b273e5158bfb0005da06d5d7c0eb",
  },
  {
    rank: 119,
    artist: "Sly and the Family Stone",
    album: "Stand!",
    description:
      "Stand! is party politics at its most inclusive and exciting — Sly Stone at the top of his funk-rock-soul game. A DJ and producer in San Francisco during the Dawn of Hippie, Stone rides the bonfire momentum of the civil rights movement in motivational-soul sermons such as “Stand!” and “You Can Make It If You Try” without denying the intrinsic divisions that threatened civil war (“Don’t Call Me Nigger, Whitey”). There was also the uplifting pure-pop beauty of “Everyday People” as well as the R&B ecstasy of “I Want to Take You Higher” and the swirling black psychedelia of “Sex Machine.” It makes Stand! a greatest-hits album in all but name.",
    link: "https://open.spotify.com/album/7iwS1r6JHYJe9xpPjzmWqD",
    image: "https://i.scdn.co/image/ab67616d0000b273147e35fd67f22f92cb587c3b",
  },
  {
    rank: 289,
    artist: "Björk",
    album: "Post",
    description:
      "“I have to re-create the universe every morning when I wake up,” Björk said, explaining her second solo album’s utter lack of musical inhibition. Post bounces from big-band jazz (“It’s Oh So Quiet”) to trip-hop (“These Modern Things” seems to be both of those things at once). Lush and disorienting, dissonant yet ensnaringly lovely, it proved the “Icelandic pixie” who’d dazzled MTV viewers fronting the Sugarcubes, was, in fact, one of the Nineties’ truly boundless musical thinkers. Fun fact: For her vocals, Björk extended her mic cord to a beach so she could sing to the sea.",
    link: "https://open.spotify.com/album/2Ul7B1LEHxXzYubtkTMENs",
    image: "https://i.scdn.co/image/ab67616d0000b2736aba91ac61162caeeef14460",
  },
  {
    rank: 495,
    artist: "Boyz II Men",
    album: "II",
    description:
      "With their innocent romanticism and meticulous vocal arrangements, Boyz II Men became the most commercially successful R&B vocal group of all time. II includes two mammoth hits, courtesy of Babyface: “I’ll Make Love to You” and the audaciously baroque “Water Runs Dry.” But the group’s own Nathan Morris and Shawn Stockman composed II‘s most poignant moment, “Khalil’s Interlude,” a soft onslaught that’ll leave you sobbing in the fetal position: “I need shelter from the rain/To ease the pain of changing from boys to men.”",
    link: "https://open.spotify.com/album/1IWhZEOwEoXbOB4a40XaR3",
    image: "https://i.scdn.co/image/ab67616d0000b2736b3b28022871bae1a5d0f057",
  },
  {
    rank: 140,
    artist: "Bob Marley and the Wailers",
    album: "Catch a Fire",
    description:
      "This was the album that introduced the whole world to Bob Marley, expanding his audience beyond Jamaica without diluting his bedrock reggae power. At the time, the Wailers were truly a unified band, fronted by three extraordinary singers in Marley, Peter Tosh, and Bunny Livingston. The rhythm section of drummer Carlton Barrett and his brother, bassist Aston “Family Man” Barrett, defined the reggae beat. Producer and label boss Chris Blackwell subtly overdubbed and remixed the original Jamaican sessions for international ears, but the Wailers’ ghetto rage comes across uncut in “Concrete Jungle” and “Slave Driver.”",
    link: "https://open.spotify.com/album/39kLAVdcgW7jbMcTEaY2qy",
    image: "https://i.scdn.co/image/ab67616d0000b27387ef6dae7545173089c68f34",
  },
  {
    rank: 279,
    artist: "Nirvana",
    album: "MTV Unplugged in New York",
    description:
      "Nirvana shine brightly on this live set because the volume is just low enough to let Kurt Cobain’s tortured tenderness glow. The powerful, reverent covers of Lead Belly, David Bowie, the Vaselines, and Meat Puppets songs sum up Nirvana as a haunted, theatrical, and, ultimately, truly raw band. Though Cobain was going through heroin withdrawal the morning of the taping, it remains one of three Unplugged performances to be recorded without having to pause for any retakes.",
    link: "https://open.spotify.com/album/1To7kv722A8SpZF789MZy7",
    image: "https://i.scdn.co/image/ab67616d0000b27336c5417732e53e23cb219246",
  },
  {
    rank: 228,
    artist: "De La Soul",
    album: "De La Soul Is Dead",
    description:
      "The cover of De La Soul’s second album — an overturned flowerpot of dead daisies — was as subtle as a sledgehammer. After the sunny 3 Feet High and Rising, the confrontationally pessismsitic De La Soul Is Dead was a shock; songs dealt with sexual assault (“Millie Pulled a Pistol on Santa”) and drug abuse (“My Brother’s a Basehead,” based on member Posdnuos’ brother’s crack addiction). But the fun wasn’t totally over (see “A Roller Skating Jam Named ‘Saturdays’”) and producer Prince Paul gave the dense LP a sample-delic flow.",
    link: "https://www.youtube.com/watch?v=vsUuxQ0QMzM",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/88/De_La_Soul_is_Dead_album_cover.jpg",
  },
  {
    rank: 488,
    artist: "The Stooges",
    album: "The Stooges",
    description:
      "Fueled by “a little marijuana and a lotta alienation,” Michigan’s Stooges gave the lie to hippie idealism, playing with a savagery that unsettled even the most blasé clubgoers. Ex-Velvet Underground member John Cale produced a primitive debut wherein, amid Ron Asheton’s wah-wah blurts, Iggy Stooge (né James Osterberg) snarled seminal punk classics such as “I Wanna Be Your Dog,” “No Fun,” and “1969,” bedrock examples of the weaponized boredom that would become a de rigueur punk posture.",
    link: "https://open.spotify.com/album/0Z1Y5L90NjqUD351YUQWdA",
    image: "https://i.scdn.co/image/ab67616d0000b273002d4aa00a80e1be587cef7e",
  },
  {
    rank: 312,
    artist: "Solange",
    album: "A Seat at the Table",
    description:
      "Solange came into her own on A Seat at the Table, with songs she wrote mostly in the Louisiana town where her family had its roots. She includes spoken-word interludes from her parents as well as narrator Master P — as she said, “The album feels very, very Southern in my storytelling.” “Cranes in the Sky” is a soulful lament, anchored in Raphael Saadiq’s bass groove, while protests like “Don’t Touch My Hair” are about African American identity politics. “The hair journey of a black woman is so specific,” she explained.",
    link: "https://open.spotify.com/album/3Yko2SxDk4hc6fncIBQlcM",
    image: "https://i.scdn.co/image/ab67616d0000b2731c4540d0ecafaa45305aa5a0",
  },
  {
    rank: 63,
    artist: "Steely Dan",
    album: "Aja",
    description:
      "If you were an audiophile in the late Seventies, you owned Aja. Steely Dan’s sixth album is easy on the ears, thanks to both its meticulous production and its songs — this was Walter Becker and Donald Fagen’s no-holds-barred stab at becoming a huge mainstream jazz-pop success. And sure enough, thanks to sweet, slippery tracks like “Deacon Blues” and “Peg,” this collegiate band with a name plucked from a William Burroughs novel and a songbook full of smart, cynical lyrics became bona fide superstars, shooting to the Top Five and selling platinum. And, yes, Aja even won a Grammy for Best Engineered Album.",
    link: "https://open.spotify.com/album/5Zxv8bCtxjz11jjypNdkEa",
    image: "https://i.scdn.co/image/ab67616d0000b273e5dd0952c693529017743e39",
  },
  {
    rank: 195,
    artist: "Leonard Cohen",
    album: "Songs of Leonard Cohen",
    description:
      "Leonard Cohen was already well into his thirties when he made his debut, in the Summer of Love. The Montreal poet had been publishing his books to literary acclaim for years, but he took to songwriting, with his acoustic guitar and the orchestrations of producer John Simon. These were the late-night ballads that made his legend, starting with “Suzanne” and “Sisters of Mercy.” But Cohen specialized in farewells, blowing kisses to his muses in “So Long, Marianne” and “Hey, That’s No Way to Say Goodbye.” He kept writing brilliant songs into his eighties, right up to his death in 2016.",
    link: "https://open.spotify.com/album/2Aiv0ThDpFa7lqHphR6MN5",
    image: "https://i.scdn.co/image/ab67616d0000b2730633b57b08b40f3e776e7151",
  },
  {
    rank: 48,
    artist: "Bob Marley and the Wailers",
    album: "Legend",
    description:
      "Bob Marley said, “Reggae music too simple for [American musicians]. You must be inside of it, know what’s happening, and why you want to play this music. You don’t just run to play this music because you think you can make a million off it.” Ironically, this set of the late reggae idol’s greatest hits has sold in the millions. On a single disc, it captures everything that made him an international icon: his nuanced songcraft, his political message, and — of course — the universal soul he brought to Jamaican rhythm and Rastafarian spirituality in the gunfighter ballad “I Shot the Sheriff,” the comforting swing of “No Woman, No Cry,” and the holy promise of “Redemption Song.”",
    link: "https://open.spotify.com/album/4jKeipwuUTjlx9USNYdhZn",
    image: "https://i.scdn.co/image/ab67616d0000b273413a6c2c7b296d98171e5e21",
  },
  {
    rank: 46,
    artist: "Paul Simon",
    album: "Graceland",
    description:
      "Frustrated by the experience of writing good songs that didn’t come to life in the studio, Paul Simon set out “to make really good tracks,” as he later put it. “I thought, ‘I have enough songwriting technique that I can reverse this process and write this song after the tracks are made.’” Simon risked severe criticism by going to South Africa (then under apartheid) and working with the best musicians from the black townships. With the fluid energy and expertise of guitarist Ray Phiri and the vocal troupe Ladysmith Black Mambazo, Simon created an album about isolation and redemption that transcended world music to become the whole world’s soundtrack.",
    link: "https://open.spotify.com/album/6WgGWYw6XXQyLTsWt7tXky",
    image: "https://i.scdn.co/image/ab67616d0000b27309880a7b8636c5a0615dc0c8",
  },
  {
    rank: 80,
    artist: "The Sex Pistols",
    album: "Never Mind the Bollocks Here’s the Sex Pistols",
    description:
      "“If the sessions had gone the way I wanted, it would have been unlistenable for most people,” Johnny Rotten said. “I guess it’s the very nature of music: If you want people to listen, you’re going to have to compromise.” But few heard it that way at the time. The Pistols’ only studio album sounds like a rejection of everything rock & roll — and the world itself — had to offer. True, the music was less shocking than Rotten himself, who sang about abortions, anarchy, and hatred on “Bodies” and “Anarchy in the U.K.” But Never Mind the Bollocks is the Sermon on the Mount of U.K. punk — and its echoes are everywhere.",
    link: "https://open.spotify.com/album/5fxYu3rqjCNTSPKN8mtEl2",
    image: "https://i.scdn.co/image/ab67616d0000b273d0f19de33459c832e50d6ecd",
  },
  {
    rank: 331,
    artist: "Madonna",
    album: "Like a Prayer",
    description:
      "“I like the challenge of merging art and commerce,” Madonna told Rolling Stone. After dominating Eighties pop without always getting the critical respect she deserved, Madonna finally won artistic recognition with her most personal set of songs, including “Till Death Do Us Part” and “Oh Father.” And she nailed the commerce side with “Express Yourself” and the title track, the video of which had the Vatican talking about blasphemy. “I pray when I’m in trouble or when I’m happy,” she said. “When I feel any sort of extreme.” Like a Prayer fused all of her extremes brilliantly.",
    link: "https://open.spotify.com/album/48AGkmM7iO4jrELRnNZGPV",
    image: "https://i.scdn.co/image/ab67616d0000b27329b3fdd3b0e5b0daae3a37b0",
  },
  {
    rank: 268,
    artist: "Randy Newman",
    album: "Sail Away",
    description:
      "Producer Lenny Waronker called him the “King of the Suburban Blues Singers.” Randy Newman went on to a long career scoring Hollywood movies, but on Sail Away, he was still L.A.’s weirdest singer-songwriter, a piano man singing sardonic tales of sleazy grifters in tunes full of New Orleans R&B and Tin Pan Alley showbiz. Sail Away is his meanest and funniest American portrait, with the cold-blooded “Political Science,” the blasphemous “God’s Song,” and the romantic “You Can Leave Your Hat On.”",
    link: "https://open.spotify.com/album/7ojNQckNp7Tj2BkLJCiiUL",
    image: "https://i.scdn.co/image/ab67616d0000b273f761183d5e7c7721c0daf87a",
  },
  {
    rank: 86,
    artist: "The Doors",
    album: "The Doors",
    description:
      "After blowing minds as the house band at the Whisky-a-Go-Go, where they were fired for playing the Oedipal drama “The End,” the Doors were ready to unleash their organ-driven rock on the world. “On each song, we had tried every possible arrangement,” drummer John Densmore said, “so we felt the whole album was tight.” “Break on Through (To the Other Side),” “Twentieth Century Fox,” and “Crystal Ship” are pop-art lighting for Top 40 attention spans. But the Doors hit pay dirt by editing one of their jam songs for airplay: “Light My Fire,” written by guitarist Robbie Krieger, after Jim Morrison told everybody in the band to write a song with universal imagery.",
    link: "https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn",
    image: "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1",
  },
  {
    rank: 350,
    artist: "Stevie Wonder",
    album: "Music of My Mind",
    description:
      "Recording after his onerous contract with Motown had expired, a newly empowered Stevie Wonder flexed his artistic control on Music of My Mind, making a relaxed, love-smitten warmup for blockbusters — like Innervisions and Songs in the Key of Life — to come, and playing nearly every funky note on classics such as “Love Having You Around” and “Superwoman (Where Were You When I Needed You).” Elsewhere, Wonder jammed on a Clavinet during the the tight boogie “Keep on Running” and on “Evil,” an openhearted intimacy with political overtones.",
    link: "https://open.spotify.com/album/7n0bcoRDylRw5PUKn2PlRJ",
    image: "https://i.scdn.co/image/ab67616d0000b27317b2abaa44b6380506ad922c",
  },
  {
    rank: 450,
    artist: "Paul and Linda McCartney",
    album: "Ram",
    description:
      "In its day, Paul McCartney’s second post-Beatles album was widely disliked; John Lennon dismissed it as “muzak,” and Ringo Starr said the lack of good songs made him “sad.” In retrospect, it’s a modest, goofy, loose-limbed outing about domestic pleasures, full of eccentric, pastorale tunes like “Heart of the Country” and “Munkberry Moon Delight.” The loopy pastiche of whimsical song fragments “Uncle Albert/Admiral Halsey” became Paul’s first post-Beatles Number One hit. “I was in a very free mood,” he said.",
    link: "https://open.spotify.com/album/37kVPKyYwj7hgPtp9jRTXk",
    image: "https://i.scdn.co/image/ab67616d0000b273f181d7cb316e086436716eca",
  },
  {
    rank: 181,
    artist: "Bob Dylan",
    album: "Bringing It All Back Home",
    description:
      "“It’s very complicated to play with electricity,” Dylan said in the summer of 1965. “You’re dealing with other people.… Most people who don’t like rock & roll can’t relate to other people.” But on Side One of this pioneering album, Dylan amplifies his cryptic, confrontational songwriting with guitar lightning and galloping drums. “Subterranean Homesick Blues” and “Maggie’s Farm” are loud, caustic, and funny as hell. Dylan returns to solo acoustic guitar on the four superb songs on Side Two, including the scabrous “It’s Alright, Ma (I’m Only Bleeding)” and the closing ballad, “It’s All Over Now, Baby Blue,” arguably his finest, most affectionate song of dismissal.",
    link: "https://open.spotify.com/album/1lPoRKSgZHQAYXxzBsOQ7v",
    image: "https://i.scdn.co/image/ab67616d0000b2736960c5f4eb72f0c06aa92181",
  },
  {
    rank: 91,
    artist: "Bruce Springsteen",
    album: "Darkness on the Edge of Town",
    description:
      "“When I was making this particular album, I just had a specific thing in mind,” Bruce Springsteen told Rolling Stone. “It had to be just a relentless … just a barrage of that particular thing.” His obsession on this album is a common one: how to go on living in a mean world when your youthful dreams have fallen apart. Springsteen sang with John Lennon-style fury, as he chronicled the working-class dreams and despair of “Prove It All Night” and “The Promised Land,” as well as his definitive car song, “Racing in the Street.” After the youthful exuberance of Born to Run, Darkness was the first sound of Springsteen’s hard-won adult realism",
    link: "https://open.spotify.com/album/4KT6G8fj8EEIfsyr75hbgc",
    image: "https://i.scdn.co/image/ab67616d0000b273e2bb936c55fb54b0b9fdc666",
  },
  {
    rank: 77,
    artist: "The Who",
    album: "Who's Next",
    description:
      "Pete Townshend suffered a nervous breakdown when his planned follow-up to the rock opera Tommy [see No. 190], the ambitious, theatrical Lifehouse, fell apart. But he was left with an extraordinary cache of songs that the Who honed for what became their best studio album, Who’s Next. “Won’t Get Fooled Again,” “Bargain,” and “Baba O’Riley” (named in tribute to avant-garde composer Terry Riley) all beam with epic majesty, often spiked with synthesizers. “I like synthesizers,” Townshend said, “because they bring into my hands things that aren’t in my hands: the sound of the orchestra, French horns, strings.… You press a switch and it plays it back at double speed.”",
    link: "https://open.spotify.com/album/5MqyhhHbT13zsloD3uHhlQ",
    image: "https://i.scdn.co/image/ab67616d0000b273fe24dcd263c08c6dd84b6e8c",
  },
  {
    rank: 339,
    artist: "Janet Jackson",
    album: "Rhythm Nation 1814",
    description:
      "Janet Jackson bought a military suit and ruled the radio for two years with this album. Along with producers Jimmy Jam and Terry Lewis, she fashioned a grand pop statement with hip-hop funk (“Rhythm Nation”), slow jams (“Love Will Never Do [Without You]”), and even hair metal (“Black Cat”). “While writing ‘Rhythm Nation’ I was kidding around, saying, ‘God, you guys, I feel like this could be the national anthem for the Nineties,’” Jackson recalled. “Just by a crazy chance we decided to look up when Francis Scott Key wrote the national anthem, and it was September 14th, 1814.”",
    link: "https://open.spotify.com/album/4OD3LU6001esAtFshDX46M",
    image: "https://i.scdn.co/image/ab67616d0000b27371511473d9e34fcdc13d90ef",
  },
  {
    rank: 29,
    artist: "The Beatles",
    album: "White Album",
    description:
      "They wrote the songs while on retreat with the Maharishi Mahesh Yogi in India, taking a break from the celebrity grind. As John Lennon later said, “We sat in the mountains eating lousy vegetarian food, and we wrote all these songs.” They came back with more great tunes than they could release. Lennon pursued his hard-edged vision in the cynical wit of “Sexy Sadie” and “Happiness Is a Warm Gun,” as well as the childlike yearning of “Julia” and “Dear Prudence.” Paul McCartney’s playful pop energy came through in “Martha My Dear” and his inversion of Chuck Berry’s American values, “Back in the U.S.S.R.” George Harrison’s spiritual yearning led him to “Long, Long, Long” and “While My Guitar Gently Weeps,” featuring a guest guitar solo from Eric Clapton. Even Ringo Starr contributes his ﬁrst original, the country-tinged “Don’t Pass Me By.” The Beatles tried a little of everything, and all their adventures paid off.",
    link: "https://open.spotify.com/album/2kgmS70ErVkjft03EC2DfH",
    image: "https://i.scdn.co/image/ab67616d0000b2735078cc61b6523a4a1846365b",
  },
  {
    rank: 280,
    artist: "50 Cent",
    album: "Get Rich or Die Tryin'",
    description:
      "The backstory — promising street rapper gets shot nine times and lives to make a classic debut — was irresistible. So were the precision-engineered beats and hooks 50 Cent cooked up with his new mentor, Dr. Dre. Through a mixture of melody and menace, 50 enraptured the suburbs with “In da Club” and antagonized an entire generation of his peers on “Many Men.” His hulking figure, physically and metaphorically, loomed over the rap charts for years, teaching a generation of artists that nothing sold like fear itself.",
    link: "https://open.spotify.com/album/4ycNE7y1rp5215g1kkqk1P",
    image: "https://i.scdn.co/image/ab67616d0000b273f7f74100d5cc850e01172cbf",
  },
  {
    rank: 378,
    artist: "Run-DMC",
    album: "Run-D.M.C.",
    description:
      "The Hollis, Queens, crew kicked off the golden age of hip-hop with their debut — the first great rap album, built to blast out of boomboxes on city streets. “Before us, rap records were corny,” Jam Master Jay said. “Everything was soft. Nobody made no hard-beat records.” Run-DMC changed that with the B-boy bravado of “Sucker MC’s,” the metal guitar of “Rock Box,” and the political realism of “Hard Times.” As they boast, “Just snap your fingers and clap your hands/Our DJ’s better than all these bands.”",
    link: "https://open.spotify.com/album/5nK0vU32lSmcGrglfcOfg8",
    image: "https://i.scdn.co/image/ab67616d0000b2730c653d22500b21d83c6e2b82",
  },
  {
    rank: 426,
    artist: "Lucinda Williams",
    album: "Lucinda Williams",
    description:
      "In 1988, this album didn’t make sense. It was twangy, but it wasn’t country. It rocked, but it wasn’t rock. It was blue, but wasn’t the blues. Williams hadn’t released an album in eight years, perhaps worn down by the lack of attention her music received. That began to change with this self-titled LP, recorded with a taut three-piece band. Her consistent theme is longing (“I Just Wanted to See You So Bad,” “Passionate Kisses”), but there’s also defiance and desperation in “Changed the Locks,” later covered by Tom Petty.",
    link: "https://open.spotify.com/album/63498KErJdRts4KWrgv2dT",
    image: "https://i.scdn.co/image/ab67616d0000b2731392b88fe5fd1f39ecdd17be",
  },
  {
    rank: 460,
    artist: "Lorde",
    album: "Melodrama",
    description:
      "Lorde was 16 when the blockbuster hit “Royals” earned her acclaim as the voice of a generation. As her second album showed, that wasn’t quite accurate — she’s more like the voice of smart, self-conscious, neurotic people of all generations. “I think that you might be the same as me/Behave abnormally,” she sings on “Homemade Dynamite.” The sound is bigger-sounding and more club-friendly than the spare sound of her 2016 debut (especially on the single “Green Light”), and she’s even more impressive on a big stage.",
    link: "https://open.spotify.com/album/2B87zXm9bOWvAJdkJBTpzF",
    image: "https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336",
  },
  {
    rank: 210,
    artist: "Ray Charles",
    album: "The Birth of Soul",
    description:
      "Ray Charles was just about the first person to perfect that mix of blues and gospel, holy and filthy, that we know as soul music. He was knocking around Seattle when Atlantic bought out his contract in 1952. For the next eight years, he turned out brilliant singles such as “What’d I Say” and “I Got a Woman.” This box collects every R&B side he cut for Atlantic, though his swinging take on “My Bonnie” will have you thinking it covers his Atlantic jazz output as well.",
    link: "https://open.spotify.com/album/3RPMCDSd1yj37hlqbizmeT",
    image: "https://i.scdn.co/image/ab67616d0000b273f3dfc2e52ef3206e4f3e41f6",
  },
  {
    rank: 438,
    artist: "Blur",
    album: "Parklife",
    description:
      "Blur improbably burst into the mainstream with Parklife‘s “Girls & Boys,” a five-minute disco-rock barnburner about cross-dressing, bisexual libertines. They also sang about the joys of slacking (“Parklife”) but also how boring it is to conform (“End of the Century”), and they transformed a map of England into a metaphor for surviving rough patches (“This Is a Low”). Frontman Damon Albarn’s gifts for storytelling, singalong melodies, and Anglophilia set up Blur as heirs apparent to the Kinks and fierce rivals to Oasis for Brit pop’s crown.",
    link: "https://open.spotify.com/album/0DBkFC6739trhCoVreZyds",
    image: "https://i.scdn.co/image/ab67616d0000b2732e4d97729bab58f1c0eabd33",
  },
  {
    rank: 493,
    artist: "Marvin Gaye",
    album: "Here, My Dear",
    description:
      "It’s one of the weirdest Motown records ever. Marvin Gaye’s divorce settlement required him to make two new albums and pay the royalties to his ex-wife – the sister of Motown boss Berry Gordy. So Gaye made this bitterly funny double LP of breakup songs, including “You Can Leave, But It’s Going to Cost You.” When he asks “Somebody tell me please, tell me please/Why do I have to pay attorney fees?” it’s one of the most strangely transfixing soul-music moments of all time.",
    link: "https://open.spotify.com/album/1iVf41qWHZsAk9DwY43WnV",
    image: "https://i.scdn.co/image/ab67616d0000b273d9e83bbcf06d8d39f0adbb8e",
  },
  {
    rank: 370,
    artist: "Lil Wayne",
    album: "Tha Carter II",
    description:
      "On Tha Carter II, Lil Wayne anointed himself the “best rapper alive,” and drove himself insane trying to make good on his declaration. He demolishes the same beat three ways (“Fly In,” “Carter II,” “Fly Out”), like a Michelin-starred chef using every part of the animal, and drops 106 & Park jams (“Fireman,” “Shooter”) with ease. “I deserve the throne,” he raps on “Hustler Musik.” “And if the kid ain’t right, then let me die on this song.” Two years later, Wayne was alive and well, and the throne was firmly secured.",
    link: "https://open.spotify.com/album/5BGzOpea6At0Nd7tYtYZOP",
    image: "https://i.scdn.co/image/ab67616d0000b27333ebdffaa447ff19ce9f24bb",
  },
  {
    rank: 309,
    artist: "Joy Divison",
    album: "Closer",
    description:
      "One of the most depressing albums ever made, with droning guitars and synthesizers, chilly bass lines, stentorian vocals, and drums that sound as if they’re steadily beating out the rhythm of doom. And that’s not even considering the lyrics, which are about singer Ian Curtis’ failing marriage and how he suffered from epilepsy. (Curtis hanged himself on May 18th, 1980, at the age of 23 — the rest of the band regrouped as New Order.) On Closer, Joy Division fully earned their reputation as England’s most harrowing punk band.",
    link: "https://open.spotify.com/album/1HnxC8MLDciii5LebJ09Ko",
    image: "https://i.scdn.co/image/ab67616d0000b27321590ea36e6264a1917d02eb",
  },
  {
    rank: 18,
    artist: "Bob Dylan",
    album: "Highway 61 Revisited",
    description:
      "Bruce Springsteen has described the beginning of “Like a Rolling Stone,” the opening song on Bob Dylan’s Highway 61 Revisited, as the “snare shot that sounded like somebody’d kicked open the door to your mind.” In and of itself, “Like a Rolling Stone,” which was rumored to be about Andy Warhol acolyte Edie Sedgwick, forever altered the landscape of popular music — its “vomitiﬁc” lyrics (in Dylan’s memorable term), literary ambition, and sheer length (6:13) shattered limitations of every kind. But that was literally only the beginning.\nThe rest of the album, recorded in a shocking six days, was just as revelatory. If anyone questioned whether or not Dylan had truly “gone electric,” the roaring rock & roll of “From a Buick 6” and “Tombstone Blues” — both powered by legendary guitarist Mike Bloomﬁeld of the Paul Butterﬁeld Blues Band — left no doubt. The album ends with “Desolation Row,” a swirling 11-minute surrealist night journey of indescribable power, a Hieronymus Bosch-like season in hell that, in retrospect, seems to foretell all the Sixties cataclysms to come. Not that Dylan wasn’t having fun all the while as well. The toy siren that opens the album’s title track was keyboardist’s Al Kooper’s playful way of policing the recording sessions for Highway 61 Revisited. “If anybody started using drugs anywhere,” he explained, “I’d walk into the opposite corner of the room and just go whooooooooo.”",
    link: "https://open.spotify.com/album/6YabPKtZAjxwyWbuO9p4ZD",
    image: "https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2",
  },
  {
    rank: 494,
    artist: "The Ronettes",
    album: "Presenting the Fabulous Ronettes",
    description:
      "More a Spanish Harlem street gang than a girl group, the Ronettes were pop goddesses dressed as Catholic schoolgirls gone to hell and back. Phil Spector builds his Wall of Sound as his teen protégée (and future wife) Ronnie Spector belts “Be My Baby” and “Walking in the Rain,” while songs like “I Wonder” and “Baby, I Love You” ache with hope for a perfect love that always seems to be impossibly ideal and just within arm’s reach.",
    link: "https://open.spotify.com/album/0CoNLgOwcZGBUSwd9fAZuy",
    image: "https://i.scdn.co/image/ab67616d0000b273b298efc29df3b69ec3f0d675",
  },
  {
    rank: 146,
    artist: "Blondie",
    album: "Parallel Lines",
    description:
      "Here’s where punk and New Wave broke through to a mass U.S. audience, thanks to the Number One hit “Heart of Glass,” also known to Blondie fans as “The Disco Song.” “I was trying to get that groove that the drummer for the Bee Gees had,” said Blondie drummer Clem Burke, who credited Kraftwerk and the Saturday Night Fever soundtrack as influences on “Heart of Glass.” Parallel Lines is a perfect synthesis of raw punk edge, Sixties-pop smarts, and the cool New Wave glamour that Blondie invented. Debbie Harry, of course, invented a new kind of rock & roll sex appeal that brought New York demimonde style to the mainstream. Madonna was surely watching.",
    link: "https://open.spotify.com/album/4M6s2jbhKWEcOdXZ8WiHts",
    image: "https://i.scdn.co/image/ab67616d0000b273ace2bedb8e6cfa04207d5c0f",
  },
  {
    rank: 213,
    artist: "Fiona Apple",
    album: "The Idler Wheel",
    description:
      "The Idler Wheel continued Fiona Apple’s run as one of modern pop’s most thrilling eccentrics. There’s a single-minded intensity to songs like “Every Single Night” and “Hot Knife,” where she puts an almost shocking amount of feeling into each syllable. Apple can sound like a cabaret singer in one song and a blueswoman in the next, her voice full of sandpaper edges and bestial roars. “I may need a chaperone,” she wonders on “Daredevil,” but this album proves she’s at her very best when left to her own devices.",
    link: "https://open.spotify.com/album/6B5favhKTShFTjRLsKIUfa",
    image: "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
  },
  {
    rank: 365,
    artist: "Madvillain",
    album: "Madvillainy",
    description:
      "This collaboration between rapper MF Doom and producer Madlib is one of underground hip-hop’s greatest moments. Madlib provides a shifting bed of warped funk and wildly unpredictable samples, drawing on everything from Thunder and Lightning’s “Bumpin’ Bus Stop” to “The Theme of the Justice League of America.” Doom’s rhymes are so casually adventurous that sometimes it takes a second to notice how stunning they are: “Still back in the game like Jack LaLanne/Think you know the name, don’t rack your brain/On a fast track to half sane” — hell yeah!",
    link: "https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk",
    image: "https://i.scdn.co/image/ab67616d0000b27374dc897ea75402db37ef239a",
  },
  {
    rank: 269,
    artist: "Kanye West",
    album: "Yeezus",
    description:
      "“No one’s near doing what he’s doing,” said Lou Reed. “It’s not even on the same planet.” When the guy who made White Light/White Heat [see No. 272] is complimenting your hate-caked noise assaults, you’re doing something right. Kanye West channeled his ever-darkening megalomania into the violent minimalism of “On Sight” and the pummeling pestilence of “I Am a God.” He goes out with the maximalism of “Blood on the Leaves,” flipping a sample of Nina Simone’s version of “Strange Fruit” into an engulfing vision of asshole-rock-star hell.",
    link: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK",
    image: "https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9",
  },
  {
    rank: 491,
    artist: "Harry Styles",
    album: "Fine Line",
    description:
      "Harry Styles achieved pop greatness with One Direction, but he got even deeper on his own. On Fine Line, he stakes his claim as one of his generation’s most savagely imaginative musical minds. Styles breathes in the 1970s California sunshine of his heroes — Joni Mitchell, David Bowie, Stevie Nicks — with soulful breakup songs. As he explained, “It’s all about having sex and feeling sad.” Yet the music is drenched in starman joy: the ‘shroomadelic guitar trip “She,” the dulcimer-crazed “Canyon Moon,” the Number One juicy-fruit beach orgy “Watermelon Sugar.”",
    link: "https://open.spotify.com/album/7xV2TzoaVc0ycW7fwBwAml",
    image: "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
  },
  {
    rank: 291,
    artist: "Destiny's Child",
    album: "The Writing’s on the Wall",
    description:
      "Looking back now, Destiny’s Child seem like the last gasp of the R&B vocal group, a tradition that was swept out of the mainstream in the 2000s. On this kinetic, shattering album, the group — especially a wunderkind named Beyoncé Knowles — took a more hands-on approach to writing and producing, helping to craft juddering club singles like “Bills, Bills, Bills” and “Bug a Boo.” The ballad “Say My Name” quickly became a modern standard.",
    link: "https://open.spotify.com/album/283NWqNsCA9GwVHrJk59CG",
    image: "https://i.scdn.co/image/ab67616d0000b2733718df75b57340c1947747e8",
  },
  {
    rank: 294,
    artist: "Weezer",
    album: "Weezer (The Blue Album)",
    description:
      "When it came out, Weezer’s debut was regarded as a quirky power-pop album with a couple of hit singles. The song’s were so catchy that some indie rockers wondered if they were put together by a record company, Monkees-style. But Rivers Cuomo’s band became a major influence on a whole generation of young sad-sack punkers. “People see us now as this credible band, and they assume we always were credible,” says Cuomo. “But, man, we could not have been more hated on when we came out.”",
    link: "https://open.spotify.com/album/7lkHpADdxrKUwWFdrR4Qyc",
    image: "https://i.scdn.co/image/ab67616d0000b2739ab474cd30a07ed4524a814c",
  },
  {
    rank: 75,
    artist: "Aretha Franklin",
    album: "Lady Soul",
    description:
      "Aretha Franklin’s third Atlantic album in less than two years is another classic, with “(You Make Me Feel Like) A Natural Woman,” “Ain’t No Way,” and a slinky version of the Rascals’ “Groovin’.” It was a year of triumph and turbulence for Franklin: Although she made the cover of Time, the magazine reported details of her rocky marriage to Ted White, then her manager. But Franklin channeled that frenzy into performances of funky pride and magisterial hurt. Among the best: the grand-prayer treatment of Curtis Mayfield’s “People Get Ready” and her explosive anguish on the hit “Chain of Fools.”",
    link: "https://open.spotify.com/album/7lEOKZaOpqP70UYqdLPejG",
    image: "https://i.scdn.co/image/ab67616d0000b2739e5af96086574b76499dcf70",
  },
  {
    rank: 306,
    artist: "Al Green",
    album: "I'm Still in Love With You",
    description:
      "Al Green made one classic after another in the early Seventies — the Memphis soul master turned each LP into an all-out passion play, capturing the highs and lows of romance. After his smash Let’s Stay Together, I’m Still in Love With You was his second great album of 1972. It’s an even more sensual experience, with the sweat-dripping acoustic groove of “Simply Beautiful” and the vulnerable confessions of “Look What You Done for Me.” “We used chords that people never used before,” producer Willie Mitchell said. “Al Green always wanted to advance.”",
    link: "https://open.spotify.com/album/7hI0QCwcx9GB8MZK24IfTT",
    image: "https://i.scdn.co/image/ab67616d0000b273baa93bdfa04d874f12463ae1",
  },
  {
    rank: 489,
    artist: "Phil Spector and Various Artists",
    album: "Back to Mono (1958-1969)",
    description:
      "When the Righteous Brothers’ Bobby Hatfield first heard “You’ve Lost That Lovin’ Feelin’,” with partner Bill Medley’s extended solo, he asked, “But what do I do while he’s singing the whole first verse?” Producer Phil Spector replied, “You can go directly to the bank!” Spector built his Wall of Sound out of hand claps, massive overdubs, and orchestras of percussion. This box has hits such as the Ronettes’ “Be My Baby” and the Crystals’ “Da Doo Ron Ron,” which Spector called “little symphonies for the kids.”",
    link: "https://open.spotify.com/album/020ep2kmPRC8tgh95hMP2i",
    image: "https://i.scdn.co/image/ab67616d0000b273d195ccf784713dbf548d9e92",
  },
  {
    rank: 314,
    artist: "Aaliyah",
    album: "One in a Million",
    description:
      "Aaliyah’s second album was her first with producer Timbaland, and until the singer’s tragic death in 2001, the pair reshaped the landscape of R&B. Aaliyah seems to be sparring with Timbaland’s hide-and-seek drum tracks, ducking and weaving — and, somehow, singing beautifully — as high-hats and shakers zip past her ears. As futuristic as this album sounds, even today, Aaliyah also benefited from her close study of the classics: Her version of the Isley Brothers’ “Choosey Lover” rises to the level of the original.",
    link: "https://open.spotify.com/album/79EIRdmpPSIWfRlxaZdJbG",
    image: "https://i.scdn.co/image/ab67616d0000b27301f2778f38f1d536b06b507c",
  },
  {
    rank: 351,
    artist: "Roxy Music",
    album: "For Your Pleasure",
    description:
      "Keyboardist Brian Eno’s last album with Roxy Music is the pop equivalent of Ultrasuede: highly stylish, abstract-leaning art rock. The collision of Eno’s and singer Bryan Ferry’s clashing visions gives Pleasure a wild, tense charm — especially on the driving “Editions of You” and “Do the Strand.” The album’s deeply weird centerpiece is “In Every Dream Home a Heartache”: Ferry sings a seductive ballad to an inflatable doll (“I blew up your body, but you blew my mind”), one of the creepiest love songs of all time.",
    link: "https://open.spotify.com/album/6gKMWnGptVs6yT2MgCxw29",
    image: "https://i.scdn.co/image/ab67616d0000b273707a76900ebe2c7f5fad3615",
  },
  {
    rank: 261,
    artist: "Beastie Boys",
    album: "Check Your Head",
    description:
      "On Check Your Head’s “Professor Booty,” Mike D raps the Beasties’ mantra: “Life ain’t nothing but a good groove.” The trio returned to their rock-band roots for their third LP, playing its funky, punky, spunky beats themselves. They channel John Bonham’s booming drums on “So What ‘Cha Want,” Black Sabbath’s guitar growl on “Gratitude,” and Bad Brains’ hardcore spirit on their surprising Sly Stone send-up “Time for Livin’.” They also explore lounge-lizard jams and psychedelic jazziness, introducing backward-ball-cap alt-rock kids to new worlds of sound.",
    link: "https://open.spotify.com/album/7CSP7J60QKIBCqOV64qILq",
    image: "https://i.scdn.co/image/ab67616d0000b273d524bd8dd1ea53b9a0e1dd9e",
  },
  {
    rank: 223,
    artist: "John Lennon",
    album: "Imagine",
    description:
      "After the primal-scream therapy of Plastic Ono Band [see No. 85], Lennon softened up on his second solo album. There is still the stinging “Gimme Some Truth” and his evisceration of Paul McCartney, “How Do You Sleep?” — both featuring George Harrison on guitar. But there is also the aching soul of “Jealous Guy” and the irresistible “Oh Yoko!” Imagine is self-consciously luminescent, pointedly embraceable. Lennon said of the title track: “Now I understand what you have to do. Put your political message across with a little honey.”",
    link: "https://open.spotify.com/album/0xzaemKucrJpYhyl7TltAk",
    image: "https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc",
  },
  {
    rank: 49,
    artist: "OutKast",
    album: "Aquemini",
    description:
      "The title of OutKast’s third album is a made-up word that combines the star signs of Big Boi (Aquarius) and André 3000 (Gemini). Their music is about duality too, matching Big Boi’s imperative to “make the club get crunk” with André’s determination to “activate the left and right brain.” André was the virtuoso, clipping off compound rhymes with grace, while Big Boi’s more grounded flow and clear diction rooted their songs. Hits like “Rosa Parks” put the duo’s hometown “Hotlanta” on the rap map, and at a time when formulaic albums by Master P and Puff Daddy topped the charts, OutKast unleashed an explosive sound that used live musicianship, social commentary, and a heavy dose of deep funk to create the greatest record ever to come out of the Dirty South.",
    link: "https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28",
    image: "https://i.scdn.co/image/ab67616d0000b273377a6d2051b23afea65ee41a",
  },
  {
    rank: 27,
    artist: "Wu-Tang Clan",
    album: "Enter the Wu-Tang(36 Chambers)",
    description:
      "The first Wu-Tang Clan album launched rap’s most dominant franchise by inventing a new sound built around a hectic panoply of voices and spare, raw beats. RZA, the group’s sonic mastermind, constructed the Wu’s homemade world, he said, from a mix of “Eastern philosophy picked up from kung-fu movies, watered-down Nation of Islam preaching picked up on the New York streets, and comic books.” On “C.R.E.A.M.,” “Protect Ya Neck,” and the non-metaphorical “Wu-Tang Clan Ain’t Nuthing ta F’ Wit,” RZA’s offbeat samples (Thelonious Monk, the Dramatics, fellow New Yorker Barbra Streisand) create a grounding for the group’s nine members, including future solo stars Ol’ Dirty Bastard, Raekwon, GZA, Ghostface Killah, and Method Man. Dr. Dre and Snoop Dogg had established L.A. as the center of hip-hop innovation and daring, but the Wu reclaimed the crown for the music’s birthplace.",
    link: "https://open.spotify.com/album/3tQd5mwBtVyxCoEo4htGAV",
    image: "https://i.scdn.co/image/ab67616d0000b2735901aaa980d3e714bf01171c",
  },
  {
    rank: 196,
    artist: "Robyn",
    album: "Body Talk",
    description:
      "Robyn had a few Swedish teen-pop hits in the Nineties, but she’s a worldly adult on Body Talk — this was the voice of a woman who knew how it felt to shed tears on the dance floor. She released Body Talk in three mini-album installments on her own Konichiwa label, before cherry-picking the highlights for this epochal feminist disco statement. “Dancing on My Own” became this century’s answer to “I Will Survive.” She told Rolling Stone, “I was pushing through the challenges and getting off on that liberated feeling of being able to explore desperation and passion and frustration and all that.”",
    link: "https://open.spotify.com/album/0Rzg7fqyWE39G6wKipxrns",
    image: "https://i.scdn.co/image/ab67616d0000b273b4375effb23372cc8cff5045",
  },
  {
    rank: 98,
    artist: "Lucinda Williams",
    album: "Car Wheels on a Gravel Road",
    description:
      "It took three torturous years to finish, but it was worth it; there are no bad songs on this alt-country masterwork. The title track is one of Williams’ best: Over guitars that owe more to the Stones than to the Opry, she tells a story about the rootlessness of American life. Williams, who was born in Louisiana, describes the South in a loving, fearful tone (“Broken down shacks, engine parts” in one song, “Busted-down doors and borrowed cash” in another) and mourns pals who fell prey to hard liquor, drugs, or dreams of stardom. With production help from Roy Bittan of the E Street Band and a lot of twangy power chords, Williams rocks hard enough to give these troubled songs both dignity and a feeling of release.",
    link: "https://open.spotify.com/album/3iC6dJobZulVXp0F4Bojig",
    image: "https://i.scdn.co/image/ab67616d0000b273a1601ac181badf6013e0c936",
  },
  {
    rank: 485,
    artist: "Richard and Linda Thompson",
    album: "I Want to See the Bright Lights Tonight",
    description:
      "With Fairport Convention, Richard Thompson was one of the first prominent Sixties folk rockers to look to his native England’s traditions for inspiration. After leaving Fairport, he joined with his wife, Linda Thompson to make stellar albums in the Seventies. Richard played guitar like a Sufi-mystic Neil Young; Linda had the voice of a Celtic Emmylou Harris. Bright Lights is their devastating masterwork of folk-rock dread. Radiohead even picked up some guitar tricks from “The Calvary Cross.”",
    link: "https://open.spotify.com/album/1K1Qdd60pW48wEgWGQLeRt",
    image: "https://i.scdn.co/image/ab67616d0000b273da3702af5991136abca122ef",
  },
  {
    rank: 267,
    artist: "Minutemen",
    album: "Double Nickels on the Dime",
    description:
      "“Our band could be your life,” sing the Minutemen on “History Lesson – Part 2,” and never did a lyric better articulate punk’s everyman aesthetic. Guitarist D. Boon and bassist Mike Watt push each other to fast, funny, and agitated heights; they sing about everything from Vietnam to Michael Jackson, and cover CCR and Steely Dan, expanding their magnum opus double LP out to 46 songs. Sadly, Boon would die a year later in a van accident.",
    link: "https://open.spotify.com/album/5viZ5HyYtV0wafK7DoXmgF",
    image: "https://i.scdn.co/image/ab67616d0000b2732355a03528a6707c35365b1e",
  },
  {
    rank: 38,
    artist: "Bob Dylan",
    album: "Blonde on Blonde",
    description:
      "Rock’s ﬁrst studio double LP by a major artist was, as Bob Dylan declared in 1978, “the closest I ever got to the sound I hear in my head … that thin, that wild-mercury sound.” Blonde on Blonde was mainly recorded in Nashville with session pros (another rock first), who created an almost contradictory magniﬁcence: a tightly wound tension around Dylan’s quicksilver language and incisive singing in barrelhouse surrealism such as “Rainy Day Women #12 and 35” and “Stuck Inside of Mobile With the Memphis Blues Again.” Amid the frenzy, Dylan delivered some of his ﬁnest, clearest songs of comfort and desire: the sidelong beauty “Sad Eyed Lady of the Lowlands” and “I Want You,” the title of which Dylan almost used for the album.",
    link: "https://open.spotify.com/album/4NP1rhnsPdYpnyJP0p0k0L",
    image: "https://i.scdn.co/image/ab67616d0000b273c51563a479fa5a4917311197",
  },
  {
    rank: 31,
    artist: "Miles Davis",
    album: "Kind of Blue",
    description:
      "This painterly masterpiece is one of the most important, inﬂuential, and popular albums in jazz. At the time it was made, Kind of Blue was also a revolution all its own. Turning his back on standard chord progressions, trumpeter Miles Davis used modal scales as a starting point for composition and improvisation — breaking new ground with warmth, subtlety, and understatement in the thick of hard bop. Davis and his peerless band — bassist Paul Chambers, drummer Jimmy Cobb, pianist Bill Evans, and the titanic sax team of John Coltrane and Cannonball Adderley — soloed in uncluttered settings, typiﬁed by “melodic rather than harmonic variation,” as Davis put it. Two numbers, “All Blues” and “Freddie Freeloader” (the latter featuring Wynton Kelly at the ivories in place of Evans), are in 12-bar form, but Davis’ approach allowed his players a cool, new, collected freedom.",
    link: "https://open.spotify.com/album/4sb0eMpDn3upAFfyi4q2rw",
    image: "https://i.scdn.co/image/ab67616d0000b2730ebc17239b6b18ba88cfb8ca",
  },
  {
    rank: 201,
    artist: "A Tribe Called Quest",
    album: "Midnight Marauders",
    description:
      "Tribe had a lot to live up to on the follow-up to The Low End Theory, but they kept the boho rap groove going. Q-Tip and co-producer Ali Shaheed Muhammad layered the LP with vintage jazz samples and intentionally doubled-up drums to retain the spirit of New York boom-bap, as Q-Tip and Phife Dawg deepened their rhymes on tracks like “Electric Relaxation.” In a historic moment of New York hip-hop synergy, Midnight Marauders was released the same day as the Wu-Tang Clan’s Enter the Wu-Tang.",
    link: "https://open.spotify.com/album/4v5x3Oo3UjQ9YmF3hRAip5",
    image: "https://i.scdn.co/image/ab67616d0000b27381db9bf27bf2a04a1298eadb",
  },
  {
    rank: 220,
    artist: "Crosby, Stills, Nash, and Young",
    album: "Déjà Vu",
    description:
      "Neil Young was just getting his solo career underway when he joined his old Buffalo Springfield bandmate Stephen Stills, ex-Byrd David Crosby, and former Hollie Graham Nash in the first of the West Coast supergroups. Young’s vision and guitar transformed the earlier folk-rock CSN into a rock & roll powerhouse. The CSNY combination was too volatile to last, but on their best album, they offered pop idealism (Nash’s “Teach Your Children”), militant blues (Crosby’s “Almost Cut My Hair”), and vocal-choir gallop (Stills’ “Carry On”).",
    link: "https://open.spotify.com/album/5bHkK1X4WEOzNvRhehvOcb",
    image: "https://i.scdn.co/image/ab67616d0000b27306e00756085191abc01e4cf0",
  },
  {
    rank: 90,
    artist: "Neil Young",
    album: "After the Gold Rush",
    description:
      "For his third album, Neil Young fired Crazy Horse (the first of many times he would do so), picked up an acoustic guitar, and headed to his basement. He installed recording equipment in the cellar of his Topanga Canyon home, near Los Angeles, leaving room for only three or four people. There, Young made an album of heartbreaking ballads such as “Tell Me Why” and “Don’t Let It Bring You Down.” The music is gentle, but never smooth. Nils Lofgren, then an 18-year-old hotshot guitarist, squeezed into the sessions — but Young assigned him to the piano, an instrument he had never played in his life.",
    link: "https://open.spotify.com/album/2ZpS82eXQxHB3SxA2pARt0",
    image: "https://i.scdn.co/image/ab67616d0000b273a478fdfd5b7a7edeb56e1460",
  },
  {
    rank: 81,
    artist: "Beyoncé",
    album: "Beyoncé",
    description:
      "“I didn’t want to release my music the way I’ve done it,” Beyoncé said. “I am bored with that.” So she dropped her self-titled album on an unsuspecting world at the end of 2013, without a word of warning. Her fifth solo album, Beyoncé showed off her musical scope and feminist outreach, but it was also a visual album with a film for each song, shot around the world: New York, Paris, Rio de Janeiro, and of course, her native Houston. She had high-profile collabs: “Superpower” with Frank Ocean, “Mine” with Drake, “Flawless” with Nigerian writer Chimamanda Ngozi Adichie, “Drunk in Love” with her husband, Jay-Z. But Beyoncé proved that nobody else was on her level.",
    link: "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu",
    image: "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
  },
  {
    rank: 47,
    artist: "Ramones",
    album: "Ramones",
    description:
      "“Our early songs came out of our real feelings of alienation, isolation, frustration — the feelings everybody feels between 17 and 75,” said singer Joey Ramone. Clocking in at just 29 minutes, Ramones is a complete rejection of the spangled artifice of 1970s rock. The songs were fast and anti-social, just like the band: “Beat on the Brat,” “Blitzkrieg Bop,” “Now I Wanna Sniff Some Glue.” Guitarist Johnny Ramone refused to play solos — his jackhammer chords became the lingua franca of punk — and the whole record cost just more than $600 to make. But Joey’s leather-tender plea “I Wanna Be Your Boyfriend” showed that even punks need love.",
    link: "https://open.spotify.com/album/5uYDAwW0SZgcfOFkxrST64",
    image: "https://i.scdn.co/image/ab67616d0000b273db687db0afb257abdee10816",
  },
  {
    rank: 165,
    artist: "R.E.M.",
    album: "Murmur",
    description:
      "“We wanted to have this kind of timeless record,” guitarist Peter Buck said of R.E.M.’s debut LP, and this “technically limited” band (according to producer Don Dixon) did just that. Buck was a rock scholar who had worked in a record store; singer Michael Stipe unspooled his lyrics as if they constituted some new secret language. Murmur is full of ringing guitars and mystery. The lyrics and the melodies seem buried, almost subliminal, and even the songs with something approximating hooks, such as “Radio Free Europe,” resist clarity. Murmur was a founding document of alternative rock, released just as Gen X was heading off to college.",
    link: "https://open.spotify.com/album/4Mw9Gcu1LT7JaipXdwrq1Q",
    image: "https://i.scdn.co/image/ab67616d0000b273fe05afa9ef05c2ba87e0e860",
  },
  {
    rank: 184,
    artist: "Cyndi Lauper",
    album: "She’s So Unusual",
    description:
      "With her garish thrift-store fashions and exaggerated Queens accent, Lauper had a kooky image that was perfect for MTV. But she also had a superb, clarion voice and a pack of great covers, including “Money Changes Everything” (originally by Atlanta New Wave band the Brains) and Prince’s saucy “When You Were Mine.” Lauper co-wrote four songs, including the lovely ballad “Time After Time” and the masturbation call-to-arms “She Bop.” But her smartest move was to change the lyrics of Robert Hazard’s “Girls Just Want to Have Fun” until it became a “very blatantly feminist” song about equality. “For a minute, I made it popular to be the odd guy out,” she said.",
    link: "https://open.spotify.com/album/1FvdZ1oizXwF9bxogujoF0",
    image: "https://i.scdn.co/image/ab67616d0000b27352f532df7ba3269b0242fed9",
  },
  {
    rank: 308,
    artist: "Brian Eno",
    album: "Here Come the Warm Jets",
    description:
      "The former Roxy Music keyboardist’s first solo album pioneered a new kind of glammy art rock: jagged, free-form, and dreamy, sounding like nothing else in rock at the time. “Baby’s on Fire” and “Needles in the Camel’s Eye” are vicious rockers with detached vocals, and Robert Fripp’s warped guitars swarm and stutter, while “On Some Faraway Beach” and the title track are glistening slo-mo-drone pastorales. “I called it ‘warm jet guitar’ because it sounded like a tuned jet,” Eno said later.",
    link: "https://open.spotify.com/album/74jn28Kr29iyh8eZXSvnwi",
    image: "https://i.scdn.co/image/ab67616d0000b273da85b0f131c23ccf6b631aad",
  },
  {
    rank: 330,
    artist: "The Rolling Stones",
    album: "Aftermath",
    description:
      "The Stones sound mean and jaded on Aftermath, writing bad-boy songs about Swinging London’s overnight stars, groupies, hustlers, and parasites. This is the first Stones album completely written by Mick Jagger and Keith Richards, a collection of tough riffs (“It’s Not Easy”) and tougher acoustic blues (“High and Dry”); of girls seeking kicks (“Under My Thumb”) or just escape (“Think”), of zooming psychedelia (“Paint It, Black”), baroque-folk gallantry (“I Am Waiting”), and an epic groove (the 11-minute “Going Home”).",
    link: "https://open.spotify.com/album/72qrnM4yUNMDDlWiqKc8iY",
    image: "https://i.scdn.co/image/ab67616d0000b273bad7062c3fd2f2d037989694",
  },
  {
    rank: 37,
    artist: "Dr. Dre",
    album: "The Chronic",
    description:
      "When George Clinton first heard hip-hop artists blending old records with new beats, he wasn’t too impressed. But then Dr. Dre turned samples of Clinton’s P-Funk sides into G-Funk, and Dr. Funkenstein approved, calling funk “the DNA of hip-hop and rap.” Dre had already taken gangsta rap to the mainstream with his earlier group, N.W.A, but on The Chronic, he funked up the rhymes with a smooth bass-heavy production style and the laid-back delivery of then-unknown rapper Snoop Doggy Dogg. When Dre and Snoop dropped “Nuthin’ But a ‘G’ Thang,” there was no getting out of the way.",
    link: "https://open.spotify.com/album/0lsd2Lri4LSNfvzdIWJfkp",
    image: "https://i.scdn.co/image/ab67616d0000b2739affb9b97155240ae5a439f8",
  },
  {
    rank: 456,
    artist: "Al Green",
    album: "Greatest Hits",
    description:
      "“In Memphis, you just do as you feel,” Al Green told Rolling Stone in 1972. “It’s not a modern, up-to-par, very glamorous, big-red-chairs-and-carpet-that-thick studio. It’s one of those places you can go into and stomp out a good soul jam.” In collaboration with producer Willie Mitchell and musicians like drummer Al Jackson Jr., Green was a natural album artist, making love-and-pain classics such as 1973’s Call Me. But this collection makes for a unified album in itself, compiling hits like “Let’s Stay Together,” “I’m Still in Love With You,” and “Tired of Being Alone” into a flawless 10-song suite.",
    link: "https://open.spotify.com/album/6W0V8B0fJItvOwC8v114rZ",
    image: "https://i.scdn.co/image/ab67616d0000b273400cef779a4cd24ebe742e9c",
  },
  {
    rank: 487,
    artist: "Black Flag",
    album: "Damaged",
    description:
      "MCA refused to release this album, denouncing it as “immoral” and “anti-parent.” High praise, but Black Flag lived up to it, defining L.A. hardcore punk with Greg Ginn’s violent guitar and the pissed-off scream of Henry Rollins, especially on “TV Party” and “Rise Above,” which came with the timeless smash-the-glass salvo “We are tired of your abuse/Try to stop is but it’s no use.” Punks still listen to Damaged, and parents still hate it.",
    link: "https://open.spotify.com/album/34aFnrFRBlErcbU6moRZR3",
    image: "https://i.scdn.co/image/ab67616d0000b273ba9fff4147e9e1656a5c33e1",
  },
  {
    rank: 418,
    artist: "Dire Straits",
    album: "Brothers in Arms",
    description:
      "Mark Knopfler started writing “Money for Nothing” when he overheard a New York appliance salesman’s anti-rock-star, anti-MTV rant. The song, of course, became a huge MTV hit, and this album shows off Knopfler’s incisive songwriting and lush guitar riffs on hits like “Walk of Life” and “So Far Away,” as well as hidden gems like the Dylanesque blues “The Man’s Too Strong” and “Why Worry,” where Knopfler’s clear, subtle playing flows by like a cool brook over slick pebbles.",
    link: "https://open.spotify.com/album/7jvcSnCnugLcisBCNBm60s",
    image: "https://i.scdn.co/image/ab67616d0000b273fb995d2871f084b34afae3b3",
  },
  {
    rank: 61,
    artist: "Eric B. and Rakim",
    album: "Paid in Full",
    description:
      "Ice-grilled, laid-back, diamond-sharp: Rakim was the Eighties’ greatest rapper, and this album is the record that cemented his legend. Paid in Full was one of the first hip-hop records to fully embrace Seventies funk samples on stone hip-hop classics such as “I Know You Got Soul” and “I Ain’t No Joke.” With a stark, chill declamatory flow that broke from the singsong-y style of most rapping at the time, Rakim moved hip-hop from stories about the world of the hood to ones about the mind (“I start to think and then I sink/Into the paper like I was ink”). Eric B. built the title track out of a luscious sampled bass line, and Rakim recounted days of poverty when he had “nothin’ but sweat inside my hand,” a problem solved by this debut’s platinum success.",
    link: "https://open.spotify.com/album/3miZDfDnP7SmOXAJXWdFmz",
    image: "https://i.scdn.co/image/ab67616d0000b273d9a71c225d94b8cb6638bb91",
  },
  {
    rank: 26,
    artist: "Patti Smith",
    album: "Horses",
    description:
      "From its first defiant line, “Jesus died for somebody’s sins, but not mine,” the opening shot in a bold reinvention of Van Morrison’s garage-rock classic “Gloria,” Patti Smith’s debut album was a declaration of mutiny, a statement of faith in the transfigurative powers of rock & roll. Horses made her the queen of punk (her CBGB buddy Tom Verlaine of Television co-wrote the Jim Morrison tribute “Break It Up”), but Smith cared more for the poetry in rock. She sought the visions and passions that connected Keith Richards and Rimbaud — and found them, with the intuitive assistance of a killer band (pianist Richard Sohl, guitarist Lenny Kaye, bassist Ivan Kral, and drummer Jay Dee Daugherty) and her friend Robert Mapplethorpe, who shot the cover portrait.  “The real thing,” Smith later said, “was to keep rock & roll in the hands of the people.”",
    link: "https://open.spotify.com/album/7xg7u99lilTCPbaRfnYuy6",
    image: "https://i.scdn.co/image/ab67616d0000b273770198dcbd8d97b29e99b621",
  },
  {
    rank: 374,
    artist: "Robert Johnson",
    album: "King of the Delta Blues Singers",
    description:
      "“You want to know how real the blues can get?” Keith Richards asked. “Well, this is it.” The bluesman in question was Robert Johnson, who lived from 1911 to 1938 in the Mississippi Delta, and whose guitar prowess was so great, it inspired stories he had sold his soul to the devil. This 1961 reissue of Johnson’s original 78s was a life-changer for Sixties rockers like Richards and Eric Clapton; the moaning lust of “Terraplane Blues” and the haunted desperation of “Hellhound on My Trail” haven’t aged a minute.",
    link: "https://open.spotify.com/album/2IWaNq5o4tG1w6yxve5BMU",
    image: "https://i.scdn.co/image/ab67616d0000b27312549da864353c084cf0faa6",
  },
  {
    rank: 99,
    artist: "Taylor Swift",
    album: "Red",
    description:
      "Taylor Swift shocked the world with her fourth album, breaking away from country music to make a record that recalled classics by the Beatles and Prince in the way it pulled from across the pop and rock landscape and transformed every sound it touched. The lead single, “We Are Never Ever Getting Back Together,” was stomping, swaying electro-twang. “I Know You Were Trouble” rode a dubstep groove, and the title track was a swirl of banjos, dusty guitars, and talk-box elation. Tabloid types tied themselves in knots trying to figure out which song was about which ex, but the real news was Swift’s songwriting on high points like the astonishing “All Too Well,” as vivid a post-breakup remembrance as any artist has ever produced.",
    link: "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9",
    image: "https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d",
  },
  {
    rank: 189,
    artist: "Sleater-Kinney",
    album: "Dig Me Out",
    description:
      "“I wanna be your Joey Ramone,” Corin Tucker promised on Sleater-Kinney’s 1996 album, Call the Doctor. Their next record made good on that mythic ambition. When drummer Janet Weiss joined singer-guitarists Tucker and Carrie Brownstein, a riot-grrrl force of nature became one of the world’s most potent rock bands. Tucker’s indelible vibrato takes off with avenging-angel ferocity on songs like the almost impossibly explosive title track and “Words and Guitar,” an awe-inspiring statement of rock & roll’s power to transform a broken world.",
    link: "https://open.spotify.com/album/3tshnNFNhHrO6NUQ0BHw42",
    image: "https://i.scdn.co/image/ab67616d0000b273f10a3124e2043c4238e92065",
  },
  {
    rank: 245,
    artist: "Cocteau Twins",
    album: "Heaven or Las Vegas",
    description:
      "Cocteau Twins were Scot goths who helped invent the dream-pop aesthetic that ruled U.K. indie during the Eighties. Heaven or Las Vegas is their arrestingly beautiful pop peak, despite being released as the band itself was in turmoil, largely brought on by guitarist Robin Guthrie’s drug addiction. Somehow, they created something wholly transporting; Elizabeth Fraser’s celestial soprano works like a vocal Rorschach test, gorgeously floating over Guthrie and Simon Raymonde’s magic-hour instrumentation.",
    link: "https://open.spotify.com/album/5lEphbceIgaK1XxWeSrC9E",
    image: "https://i.scdn.co/image/ab67616d0000b2732be08c60dcb4b5608abbe61e",
  },
  {
    rank: 377,
    artist: "Yeah Yeah Yeahs",
    album: "Fever to Tell",
    description:
      "These New York art-punk brats blew away the doldrums of the early 2000s with a true rock & roll goddess in Karen O. She knew how to work her sneer like a pair of ripped fishnets, trashing any room in sight. Yet the tender ballad “Maps” became a surprise hit, with Karen pleading “Wait, they don’t love you like I love you” over Nick Zinner’s warped guitar fuzz and Brian Chase’s drum thunder. “There’s a lot of loooove in that song,” she said. “But there’s a lot of fear, too.”",
    link: "https://open.spotify.com/album/44ePwTuWK88vnalqutqJEG",
    image: "https://i.scdn.co/image/ab67616d0000b2731b1cb4ef0f096f9d66fc3dc6",
  },
  {
    rank: 383,
    artist: "Massive Attack",
    album: "Mezzanine",
    description:
      "The Bristol, England, collective that invented trip-hop — Daddy G, Mushroom, and 3D — got even heavier on Mezzanine. They turn the Cocteau Twins’ Elisabeth Fraser into a soul diva in “Teardrop,” and “Angel” is a six-minute ride into the abyss, with the legendary reggae singer Horace Andy wailing over levee-busting drums, cinematic strings, and blasts of guitar. “We like reclaiming the guitar,” Daddy G told Rolling Stone. “People say black music shouldn’t have heavy guitar, but who invented all that heavy-guitar shit? Jimi Hendrix!”",
    link: "https://open.spotify.com/album/49MNmJhZQewjt06rpwp6QR",
    image: "https://i.scdn.co/image/ab67616d0000b2732fcb0a3c7a66e516b11cd26e",
  },
  {
    rank: 408,
    artist: "Motörhead",
    album: "Ace of Spades",
    description:
      "Neither punk nor metal, Motörhead played rock & roll nastier, grittier, and snarlier than their forebears on Ace of Spades. Amid a miasma of hypercharged guitar riffs and death-rattle drumming, frontman Lemmy Kilmister, splits his time between sleazy come-ons (“Love Me Like a Reptile”), war stories (“(We Are) The Road Crew”), and underdog maxims (“Live to Win”). The blazing title track epitomized the Motörhead experience: “You know I’m born to lose, and gambling’s for fools,” Lemmy growls, “but that’s the way I like it, baby, I don’t wanna live forever.” He meant it, too.",
    link: "https://open.spotify.com/album/3rxF05Aux0QTrN533Kjc91",
    image: "https://i.scdn.co/image/ab67616d0000b2732051e219a4af7648223953c1",
  },
  {
    rank: 133,
    artist: "Joni Mitchell",
    album: "Hejira",
    description:
      "After redefining the possibilities of singer-songwriter music in the early 1970s, Mitchell set herself an even more ambitious challenge with Hejira, her ultimate jazz-folk statement. Setting her restless-soul visions to slippery instrumentals with help from bassist Jaco Pastorius, she weighed the costs of dedicating her life to fearless self-expression where others might have settled for mere happiness (“Amelia,” “Song for Sharon”). Getting to the point where she could make an album this singularly brilliant might have been a lonely enterprise, but it was worth it for the rest of us.",
    link: "https://open.spotify.com/album/0pFXE6xlnAdTkG3IgXTLLo",
    image: "https://i.scdn.co/image/ab67616d0000b273b235a38168c50d4ed0698125",
  },
  {
    rank: 347,
    artist: "GZA",
    album: "Liquid Swords",
    description:
      "The “Wu”-est of all of the Wu-Tang solo masterpieces, full of grimily cinematic production, winding crime narratives, mysticism, and mystery, not to mention copious kung fu-movie references and contributions from every Wu member. GZA delivers rhymes that are economical but devastating in their wisdom and narrative detail; “Bloodbaths in elevator shafts/Like these murderous rhymes tight from genuine craft,” he raps, summing up his style. Whatever strange alchemy the Staten Island guys came up with, Liquid Swords has it in utterly potent form.",
    link: "https://open.spotify.com/album/3k8xoyOXkGgZxUKgpmxz4P",
    image: "https://i.scdn.co/image/ab67616d0000b27384b6abc19fb31fb382378bbc",
  },
  {
    rank: 202,
    artist: "Björk",
    album: "Homogenic",
    description:
      "Björk’s third album was a departure from the fun, playful electronics of her mid-Nineties solo sets Debut and Post, adopting a more uniform, chilly, and distinctly Icelandic sound in its fusion of trip-hop with neo-classical strings. “Jóga,” with its stratosphere-high vocals and beats inspired by volcanic eruptions, may be Björk’s signature song, but it’s only one sample of the album’s palette, jagged and luminescent like broken stained glass. The sheer beauty underneath its boldness and abrasion has enraptured countless artists, from Thom Yorke to Arca, in the years since its release.",
    link: "https://open.spotify.com/album/0HMsmYvoT1h2x1C4di5faf",
    image: "https://i.scdn.co/image/ab67616d0000b273934a734586b2a0a7fbddb81e",
  },
  {
    rank: 151,
    artist: "George Michael",
    album: "Faith",
    description:
      "As the main singer and writer in the 1980s British pop band Wham!, George Michael paraded around in sleeveless mesh shirts and Fila short-shorts. Wham! songs were smarter than they appeared, and when Michael went solo to prove what he could do, he nailed it on the first try, integrating R&B in his songwriting, from soul ballads (“Father Figure,” “One More Try”) to horny Prince-inspired funk (“I Want Your Sex,” “Hard Day”). The album sold 25 million copies worldwide, and four singles went to Number One in the U.S. “You either see pop music as a contemporary art form, or you don’t. I do, very strongly,” Michael said.",
    link: "https://open.spotify.com/album/34K1Kvskt9arWy8E1Gz3Lw",
    image: "https://i.scdn.co/image/ab67616d0000b273b7a9a6a2bf311630d3fc6956",
  },
  {
    rank: 144,
    artist: "Led Zeppelin",
    album: "Physical Graffiti",
    description:
      "The last great Led Zeppelin album is — like most 1970s double LPs — a bloated beast. But its self-indulgent swagger is the very unifying thing that makes it so much fun — and one of the heaviest records of the Seventies. Physical Graffiti is the ultimate in Zeppelin’s attempts to fuse East and West, exploring the Arabic and Indian sonorities of “Kashmir” and “In the Light.” It’s Zeppelin’s most eclectic album, featuring down-and-dirty blues (“Black Country Woman,” “Boogie With Stu”), pop balladry (“Down by the Seaside”), metal riffs (“The Wanton Song”), and the 11-minute “In My Time of Dying.” An excessive album from the group that all but invented excess.",
    link: "https://open.spotify.com/album/26tH0kjUhkxBEd3ipGkx3Y",
    image: "https://i.scdn.co/image/ab67616d0000b273765b0617b572bdd1dbdc7d8e",
  },
  {
    rank: 179,
    artist: "Notorious B.I.G.",
    album: "Life After Death",
    description:
      "Biggie’s second album was a victory lap following the immense, earth-shaking success of his 1994 debut, Ready to Die, and was prophetically and tragically released less than a month after the 24-year-old was shot and killed. The rubber-grooved “Hypnotize” was already on its way to becoming a smash when he died, and his lyrical genius and gift for narrative were on display all over this two-CD set, as he grapples with rap-game politics and delivers thinly veiled knocks at the West Coasters he long beefed with over clean, lush-sounding production. He was just getting started.",
    link: "https://open.spotify.com/album/7dRdaGSxgcBdJnrOviQRuB",
    image: "https://i.scdn.co/image/ab67616d0000b273fde79b88e2a659c394c5ae30",
  },
  {
    rank: 222,
    artist: "Madonna",
    album: "Ray of Light",
    description:
      "For her first post-motherhood disc, Madonna and producer William Orbit showed the world that electronica didn’t have to be cold. Songs like the title track and “Nothing Really Matters” are beat-driven but restrained — filled with warmth and wonder. Ray also features Madonna’s best singing ever. “A ray of light to me is hope,” she said, describing her inspiration in making the album. “We are zooming forward, but that doesn’t mean you can lose touch with the spiritual side of things.”",
    link: "https://open.spotify.com/album/6cuNyrSmRjBeekioLdLkvI",
    image: "https://i.scdn.co/image/ab67616d0000b273ae2ab7e940779984d3255c09",
  },
  {
    rank: 277,
    artist: "Alicia Keys",
    album: "The Diary of Alicia Keys",
    description:
      "Alicia Keys’ debut, Songs in A Minor, released when she was just 20, fused her classical piano chops with a love of old soul and New York hip-hop for a bold, ambitious R&B sound. Her second LP built on that promise with songs that owed a debt to Aretha and Nina Simone, and still felt wholly her own — particularly on the sweeping “Harlem’s Nocturne” and the lovelorn hit “You Don’t Know My Name.”",
    link: "https://open.spotify.com/album/6TqRKHLjDu5QZuC8u5Woij",
    image: "https://i.scdn.co/image/ab67616d0000b27356ff19308ebeb48e2ba6094b",
  },
  {
    rank: 225,
    artist: "Wilco",
    album: "Yankee Hotel Foxtrot",
    description:
      "When Reprise Records refused to release Yankee Hotel Foxtrot, Wilco posted it for free on the internet. Two-hundred-thousand downloads later, Nonesuch Records (owned by the same company as Reprise) released the album, and it became critical and commercial gold. Its pretty acoustic-guitar melodies battled noise, skidded into dissonance, or got chopped off abruptly. Its lyrics pitted hope against doubt, with all bets off. “You have to learn how to die,” crooned Jeff Tweedy, “if you wanna … be alive.”",
    link: "https://open.spotify.com/album/0rPtXOMN42nsLDiShvGamv",
    image: "https://i.scdn.co/image/ab67616d0000b273f53fbb4abe27c792221e5c27",
  },
  {
    rank: 490,
    artist: "Linda Ronstadt",
    album: "Heart Like a Wheel",
    description:
      "Linda Ronstadt completed her transition from California hippie-folk darling to soft-rock queen on her chart-topping fifth album, covering Hank Williams, Buddy Holly, Little Feat, and Kate and Anna McGariggle on the gorgeous title track. Her version of the Betty Everett oldie “You’re No Good” hits a perfect mix of desire and paranoia. Along with being a showcase for Ronstadt’s peerless versatility, Heart Like a Wheel is Seventies pop-rock craft at its sweetest and sturdiest.",
    link: "https://open.spotify.com/album/7upKDUGJUjsvfIe6vuVB0b",
    image: "https://i.scdn.co/image/ab67616d0000b273b67a2ac6906ba70b8af718a1",
  },
  {
    rank: 341,
    artist: "The Smashing Pumpkins",
    album: "Siamese Dream",
    description:
      "“All these alternative bands today are so high up on their punk-rock horse that they’re in denial about being huge and playing big shows,” Billy Corgan told Rolling Stone in 1994. “Not only do we respect the clichés, we see the truth in them.” On their second disc, the Pumpkins pushed further from Nineties alt-rock to a grander, orchestrated sound with multiple guitar parts, strings, and a Mellotron. Alt-rock ended up following the band on its trip: Siamese Dream is packed with hits (“Cherub Rock,” “Today”).",
    link: "https://open.spotify.com/album/0bQglEvsHphrS19FGODEGo",
    image: "https://i.scdn.co/image/ab67616d0000b2735274788f34fc7656d2856dfd",
  },
  {
    rank: 172,
    artist: "Simon and Garfunkel",
    album: "Bridge Over Troubled Water",
    description:
      "On their fifth and final studio album, Paul Simon and Art Garfunkel were pulling away from each other: Simon assembled some of it while Garfunkel was in Mexico starting his acting career with a part in the film version of Catch-22. Garfunkel vetoed Simon’s song “Cuba Sí, Nixon No,” and Simon nixed Garfunkel’s idea for a Bach chorale. What remains is the partnership at its best: wry, wounded songs with healing harmonies such as “The Boxer,” though the gorgeous title track was sung by Garfunkel alone, despite his resistance. “He felt I should have done it,” Simon told Rolling Stone in 1972. “And many times, I’m sorry I didn’t do it.”",
    link: "https://open.spotify.com/album/0JwHz5SSvpYWuuCNbtYZoV",
    image: "https://i.scdn.co/image/ab67616d0000b273ba7fe7dd76cd4307e57dd75f",
  },
  {
    rank: 320,
    artist: "X",
    album: "Los Angeles",
    description:
      "X stood out from the other L.A. punks — for one thing, they had a married couple in the band, John Doe and Exene Cervenka, venting their sexual and cultural rage over the high-speed rockabilly thrash of Billy Zoom and D.J. Bonebrake. Doe and Cervenka met in a poetry workshop, and you can hear it in the complex wordplay of “Johnny Hit and Run Paulene” and “Sex and Dying in High Society.” But they kick off their debut with a hilariously nasty bang: “Your Phone’s Off the Hook, But You’re Not.”",
    link: "https://open.spotify.com/album/3OpKtGldm7NzZVVn1LFlYn",
    image: "https://i.scdn.co/image/ab67616d0000b273db279d4e7fca43c9838f13ed",
  },
  {
    rank: 51,
    artist: "Chuck Berry",
    album: "The Great Twenty-Eight",
    description:
      "In the latter half of the Fifties, Chuck Berry released a string of singles that defined the sound and spirit of rock & roll. “Maybellene,” a fast, countryish rocker about a race between a Ford and a Cadillac, kicked it all off in 1955, and one classic hit followed another, each powered by Berry’s staccato, country-blues-guitar gunfire: “Roll Over Beethoven,” “School Day,” “Rock & Roll Music,” “Sweet Little Sixteen,” “Johnny B. Goode,” “Back in the U.S.A.” What was Berry’s secret? In the maestro’s own words: “The nature and backbone of my beat is boogie, and the muscle of my music is melodies that are simple.” This collection culls the best of that magic from 1955 to 1965.",
    link: "https://open.spotify.com/album/4hQtcgvaybCqBsTrfiL1jC",
    image: "https://i.scdn.co/image/ab67616d0000b273588ce535694720ecb7ee9ce4",
  },
  {
    rank: 439,
    artist: "James Brown",
    album: "Sex Machine",
    description:
      "Kicked off by its hypnotic 11-minute title track (a studio jam, to which Brown added fake crowd noise), Sex Machine signaled a new funk renaissance for Soul Brother Number One, thanks in part to the groovy skills of bassist Bootsy Collins and his guitarist brother Catfish, who had just joined the band. Pairing “Sex Machine” with a legit live set recorded by Brown’s previous ensemble (“It’s a Man’s Man’s Man’s World” sounds devastating), the LP continued his legend as one of the all-time greatest live showmen.",
    link: "https://open.spotify.com/album/3CVie3TkZ0VHgT6mlwy7cp",
    image: "https://i.scdn.co/image/ab67616d0000b27373ff0735e70a50644d5b0e41",
  },
  {
    rank: 482,
    artist: "The Pharcyde",
    album: "Bizarre Ride II the Pharcyde",
    description:
      "These high school friends from L.A. were a little like a West Coast answer to De La Soul and A Tribe Called Quest, offering their own spin on alternative hip-hop in the Nineties and showing there was something going on in Southern California beyond G-funk. They rapped about innocent topics, like having a crush on a teacher in “Passin’ Me By,” which was a small hit, but also about dating a cute girl who turns out “to be a John Doe” and run-ins with the cops (the Public Enemy-homage “Officer”). It all came out as bright and refreshing as sorbet.",
    link: "https://open.spotify.com/album/48kU5gP41TqZEw32Cwhsna",
    image: "https://i.scdn.co/image/ab67616d0000b2739ec4abd35652fafe34ee7dfb",
  },
  {
    rank: 423,
    artist: "Yo La Tengo",
    album: "I Can Hear the Heart Beating As One",
    description:
      "In rock, as in life, breakups get all the attention; successful marriages tend to generate fewer headlines. But Yo La Tengo — the long-married couple of Georgia Hubley and Ira Kaplan, plus bassist James McNew — is a testament to figuring it out together. The band’s 1997 masterpiece is indie rock at its most joyfully exploratory, with deeply catchy fuzz-jams, some Casio-keyboard bossa nova, a cover of the Beach Boys’ “Little Honda, and “Autumn Sweater,” a stone-cold classic that turns organ, percussion, and shy murmuring into something mesmerizing and beautiful.",
    link: "https://open.spotify.com/album/3V18DIKvRuwdxc2LE4wuac",
    image: "https://i.scdn.co/image/ab67616d0000b2734599fdba5f431f3b419349a0",
  },
  {
    rank: 413,
    artist: "Creedence Clearwater Revival",
    album: "Cosmo's Factory",
    description:
      "Cosmo’s Factory was CCR’s third classic album in under a year. John Fogerty began it with the seven-minute power-choogle “Ramble Tamble,” raging against “actors in the White House.” The hits include the country travelogue “Lookin’ Out My Back Door,” the Vietnam nightmare “Run Through the Jungle,” the Little Richard tribute “Travelin’ Band,” and the Stax-style ballad “Long as I Can See the Light.” But the triumph is CCR’s 11-minute cowbell-crazed jam on “I Heard It Through the Grapevine,” proof these guys could mix hippie visions with populist grit.",
    link: "https://open.spotify.com/album/5w2X5ZmdE4u0XGkOU7BiLG",
    image: "https://i.scdn.co/image/ab67616d0000b2736e186edfb8fe3710fdc1f7c2",
  },
  {
    rank: 207,
    artist: "Eagles",
    album: "Eagles",
    description:
      "This debut created a new template for laid-back L.A. country-rock style. Behind the band’s mellow message — “Take It Easy,” “Peaceful Easy Feeling” — was a relentless drive. “Everybody had to look good, sing good, play good, and write good,” Glenn Frey told Cameron Crowe in Rolling Stone. Beyond the album’s three hit singles, songs like the somber waltz “Most of Us Are Sad,” the pickin’ and grinnin’ “Earlybird,” and the down-home rocker “Nightingale” showed a band that had perfected a sound right out of the gate.",
    link: "https://open.spotify.com/album/51B7LbLWgYLKBVSpkan8Z7",
    image: "https://i.scdn.co/image/ab67616d0000b273c13acd642ba9f6f5f127aa1b",
  },
  {
    rank: 304,
    artist: "Bill Withers",
    album: "Just As I Am",
    description:
      "On the cover, Bill Withers totes a lunch pail, highlighting the down-to-earth everyman vibe of the folk-soul music of his debut album (that’s Withers himself tapping on a box to keep the beat in “Grandma’s Hands”). As he said at the time, “I’m sick and tired of somebody saying ‘I love you’ with both arms up in the air like that.” Instead, Withers strummed his acoustic guitar and spun tales about absent fathers, his West Virginia grandmother, and life in Harlem.",
    link: "https://open.spotify.com/album/6N8uPmDqbgXD3ztkCCfxoo",
    image: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e19e047ce",
  },
  {
    rank: 398,
    artist: "The Raincoats",
    album: "The Raincoats",
    description:
      "The Raincoats came up with one of the most experimental and thrilling sounds to emerge from the London punk explosion — four women making their own gloriously unkempt racket. As guitarist Ana Da Silva explained, “We rehearsed for hours, but we always fell apart.” Da Silva and Gina Birch chant over Palmolive’s manic drums and Vicky Aspinall’s buzz-saw violin, for gems like “In Love” and their gender-twisted cover of the Kinks’ “Lola.” Their debut album finally got its long-overdue U.S. release in 1993, at the insistence of Raincoats superfan Kurt Cobain.",
    link: "https://open.spotify.com/album/190Tx9jPHndq0qUlq79BJJ",
    image: "https://i.scdn.co/image/ab67616d0000b27398b6d9a4e006f7e7bbe23769",
  },
  {
    rank: 404,
    artist: "Anita Baker",
    album: "Rapture",
    description:
      "Before releasing Rapture, her breakout album, Anita Baker spent months “going to every publishing house in Los Angeles” hunting for what she described as “fireside love songs with jazz overtones.” She found eight songs that satisfied her requirements and polished them until they gleamed, combining an unpredictability that hinted at jazz with reassuring, unimpeachable hooks to create an album of deep romantic intimacy that sounded like little else in Eighties pop but still went multiplatinum.",
    link: "https://www.youtube.com/watch?v=jqZjsscpj1E",
    image:
      "https://media.pitchfork.com/photos/605243f102674855a6d5be11/1:1/w_600/Anita%20Baker:%20Rapture.jpeg",
  },
  {
    rank: 434,
    artist: "Pavement",
    album: "Crooked Rain, Crooked Rain",
    description:
      "After the indie-rock slacker kings’ dazzling debut, Slanted and Enchanted, nobody knew what Pavement would try next for an encore. But Crooked Rain turned out to be their sunniest, most tuneful music — a concept album about turning 28, full of pastoral beauty and wiseass melody, with echoes of Creedence and Hendrix, maybe even the Dead. Stephen Malkmus’ breathy vocals and bittersweet guitar ripples in “Gold Soundz,” “Silence Kid,” and “Range Life” capture the moment of feeling stranded halfway to adulthood, so drunk in the August sun.",
    link: "https://open.spotify.com/album/1XFNz6KIvLyIsLFOiLRKqP",
    image: "https://i.scdn.co/image/ab67616d0000b2730a719f2817838a22e6a7e8c9",
  },
  {
    rank: 68,
    artist: "Kate Bush",
    album: "Hounds of Love",
    description:
      "Kate Bush was an avant-garde auteur as well as beloved English pop star. Her New Wave masterpiece Hounds of Love is one of the greatest examples of an artist enjoying Top 40 success while luxuriating in her own eccentricities. Playing a futurist Fairlight CMI synthesizer and singing in an ecstatic operatic chirp, she muses about Freudian psychology, career challenges, love and family, dreaming sheep, and waking witches. Side One had hits like “Running Up That Hill” and “Cloudbusting”; Side Two was an epic “story suite,” moving from goth terror to sci-fi abstraction to dark rustic revelry. It’s no wonder Björk, Florence Welch, and Mitski are just a few of the artists who’ve been swept up in Bush’s sensual world.",
    link: "https://open.spotify.com/album/3OYnManu1Nlxnw9OMng7BH",
    image: "https://i.scdn.co/image/ab67616d0000b2735c390e413e27798edd4d18b4",
  },
  {
    rank: 70,
    artist: "N.W.A",
    album: "Straight Outta Compton",
    description:
      "N.W.A’s debut brought West Coast gangsta rap to Middle America and changed hip-hop forever. It was the launching pad for the careers of Ice Cube, Eazy-E, and Dr. Dre. “Back then we was calling it ‘reality rap,’” Ice Cube told Rolling Stone years later. “‘Gangsta rap’ is the name that the media coined.” Ice Cube’s rage and Dr. Dre’s police-siren street beats combined for a truly fearsome sound on “Express Yourself” and “Straight Outta Compton.” But it was the protest track “Fuck Tha Police” that earned the crew its biggest honor: a threatening letter from the FBI.",
    link: "https://open.spotify.com/album/0Y7qkJVZ06tS2GUCDptzyW",
    image: "https://i.scdn.co/image/ab67616d0000b273c79a70e8167cc1a4fab83781",
  },
  {
    rank: 209,
    artist: "Run-DMC",
    album: "Raising Hell",
    description:
      "Working for the first time with producer Rick Rubin, the Hollis, Queens, crew of Run, DMC, and Jam Master Jay made an album so undeniable, it forced the mainstream to cross over to hip-hop. “Peter Piper” kicked the rhymes over a jingling cowbell sampled from an old jazz-fusion record. On “My Adidas,” “It’s Tricky,” and “You Be Illin’,” Run and DMC talked trash while the DJ made their day. They even hit MTV with a vandalistic remake of Aerosmith’s “Walk This Way,” featuring Steven Tyler and Joe Perry.",
    link: "https://open.spotify.com/album/7AFsTiojVaB2I58oZ1tMRg",
    image: "https://i.scdn.co/image/ab67616d0000b273894ae4df775c6b47438991af",
  },
  {
    rank: 14,
    artist: "The Rolling Stones",
    album: "Exile on Main Street",
    description:
      "A dirty whirl of basement blues and punk boogie, the Rolling Stones’ 1972 double LP was, according to Keith Richards, “maybe the best thing we did.” Indeed, inside its deliberately dense squall — Richards’ and Mick Taylor’s dogﬁght riffing, the lusty jump of the Bill Wyman–Charlie Watts rhythm engine, Mick Jagger’s caged-animal bark and burned-soul croon — is the Stones’ greatest album and Jagger and Richards’ deﬁnitive songwriting statement of outlaw pride and dedication to grit and cold-morning redemption. \n\nIn the existential shuffle of “Tumbling Dice,” the ­exhausted country beauty of “Torn and Frayed,” and the whiskey-soaked church of “Shine a Light,” you literally hear the Stones in exile: working at Richards’ villa in the South of France, on the run from media censure, British drug police (Jagger and Richards had been busted and arrested before), and the U.K.’s then-onerous tax code. The music rattles with corrosive abandon but also swings with a clear purpose — unconditional survival — in “Rocks Off” and “All Down the Line.” As Richards explained, “The Stones don’t have a home anymore — hence the exile — but they can still keep it together. Whatever people throw at us, we can still duck, improvise, overcome.” Great example: Richards ­recorded his jubilant romp “Happy” with only producer Jimmy Miller on drums and sax man Bobby Keys, while waiting for the other Stones to turn up for work. Exile on Main Street is the band at its ﬁghting best, armed with the blues, playing to win.",
    link: "https://open.spotify.com/album/5U4dnRZsfW8NmwBBkELFPh",
    image: "https://i.scdn.co/image/ab67616d0000b273ba42bfcfeed19018b1f8cab8",
  },
  {
    rank: 58,
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    description:
      "“I put a lot of work into my lyrics,” Robert Plant told Rolling Stone in 1975. “Not all my stuff is meant to be scrutinized, though. Things like ‘Black Dog’ are blatant let’s-do-it-in-the-bath-type things, but they make their point just the same.” On their towering rune-titled fourth album, Led Zeppelin matched the raunch of “Black Dog” with Plant’s most poetic lyrics on the inescapable epic ballad “Stairway to Heaven,” while guitarist Jimmy Page veers from the blues apocalypse of “When the Levee Breaks” to the mandolin-driven “Battle of Evermore.” (“It sounded like a dance-around-the-maypole number,” Page later confessed.)",
    link: "https://open.spotify.com/album/44Ig8dzqOkvkGDzaUof9lK",
    image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69",
  },
  {
    rank: 206,
    artist: "David Bowie",
    album: "Low",
    description:
      "David Bowie fled to Berlin to kick cocaine — not to mention his other drug of choice, stardom. He moved into a flat above a hardware store and restarted his music from scratch, teaming up with Brian Eno and producer Tony Visconti. Low was split between electronic instrumentals and quirky funk like “Sound and Vision.” It began his famous “Berlin trilogy” — though it was cut mostly in France — topped off by Heroes and Lodger. In 1977, Bowie also produced Iggy Pop’s two finest solo albums, The Idiot and Lust for Life.",
    link: "https://open.spotify.com/album/2de6LD7eOW8zrlorbS28na",
    image: "https://i.scdn.co/image/ab67616d0000b2735ef4c0001dc9628f08bbf277",
  },
  {
    rank: 20,
    artist: "Radiohead",
    album: "Kid A",
    description:
      "A new, uniquely fearless kind of rock record for a new, increasingly fearful century, Radiohead’s fourth album, released in October 2000, remains one of the more stunning sonic makeovers in music history. The band had the freedom to do whatever it wanted after its 1997 alt-rock breakthrough, OK Computer [see No. 42]. “Everyone expected us to become this U2 type of band, with that stadium credibility,” bassist Colin Greenwood said in 2001.\nInstead, frontman Thom Yorke gorged on albums by avant-techno innovator Aphex Twin and other artists on the Warp Records roster, inspiring him to put down his guitar and embrace the glacial beauty of abstract electronics, glitchy beats, and the challenge of free-form composition. “It was difficult for the others [in the band], ’cause when you’re working with a synthesizer it’s like there’s no connection,” Yorke said in 2017. What emerged was at once scary and enveloping, pitched between deep alienation and profound tenderness — from the womblike ambient flow of “Everything in Its Right Place” to the free-jazz implosion “The National Anthem” to the gizmo-groove paranoia of “Idioteque.”\n“I find it difficult to think of the path we’ve chosen as ‘rock music,’ ” Yorke told Rolling Stone in 2000. “Kid A is like getting a massive eraser out and starting again.”",
    link: "https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7",
    image: "https://i.scdn.co/image/ab67616d0000b2736c7112082b63beefffe40151",
  },
  {
    rank: 135,
    artist: "U2",
    album: "The Joshua Tree",
    description:
      "“America’s the promised land to a lot of Irish people,” U2 singer Bono told Rolling Stone. “I’m one in a long line of Irishmen who made the trip.” On U2’s fifth full album, the band immerses itself in the mythology of the United States, while guitarist the Edge exploits the poetic echo of digital delay, drowning his trademark arpeggios in rippling tremolo. While many of these songs are about spiritual quests — “Where the Streets Have No Name,” “I Still Haven’t Found What I’m Looking For” — U2 fortify the solemnity with the outright joys of rock & roll, although one of the most moving songs is “Running to Stand Still,” a stripped-down slide-guitar ballad about heroin addiction.",
    link: "https://open.spotify.com/album/5y6wlw1LnqFnQFruMeiwGU",
    image: "https://i.scdn.co/image/ab67616d0000b273b7bea3d01f04e6d0408d2afe",
  },
  {
    rank: 212,
    artist: "Nina Simone",
    album: "Wild Is the Wind",
    description:
      "Aretha was the Queen of Soul, but Nina Simone, as one of her album titles proclaimed, was its high priestess, and this 1966 LP is among her most enthralling and eclectic. With her dusky voice at its most commanding, Simone works her way through roadhouse soul (“I Love Your Lovin’ Ways”) and dramatic set pieces (the melancholic “Lilac Wine,” later covered by Jeff Buckley). It peaks with “Four Women,” an ambitious saga of racially diverse women and their struggles, written by Simone.",
    link: "https://open.spotify.com/album/2EYVXfypcucR62WMKJl6Mr",
    image: "https://i.scdn.co/image/ab67616d0000b273f94461acebee60775ea22e77",
  },
  {
    rank: 200,
    artist: "Sade",
    album: "Diamond Life",
    description:
      "Nigerian-born fashion designer Sade Adu and her London band defined elegantly cool Eighties soul with their smash debut, Diamond Life. Torch ballads like “Smooth Operator” and “Your Love Is King” had a New Romantic opulence under the bittersweet pang of Adu’s voice. She wrote her first song, “When Am I Going to Make a Living,” on the back of a bill, while walking home in the rain from a bus stop after work. As she said, “All the songs I’ve ever loved — even jazz stuff — are things that tell a story.”",
    link: "https://open.spotify.com/album/3JcNnjMVSKiNpqhErZarW0",
    image: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
  },
  {
    rank: 435,
    artist: "Pet Shop Boys",
    album: "Actually",
    description:
      "Neil Tennant was one of England’s best-known music journalists when he formed this Eighties synth-pop duo with Chris Lowe. The Pet Shop Boys scored a Number One smash with “West End Girls,” their ode to queer cruising. But they took their satirical wit even further on Actually — perhaps the only album on this list where the singer is yawning on the cover. The Boys dissect the sex-and-money connection in “Rent,” “Shopping,” and the Dusty Springfield duet, “What Have I Done to Deserve This?”",
    link: "https://open.spotify.com/album/7ae4SfR2B1wEXX5EwS2Cg7",
    image: "https://i.scdn.co/image/ab67616d0000b27331f17f2b636f0f1c8d83dc42",
  },
  {
    rank: 137,
    artist: "Adele",
    album: "21",
    description:
      "“Pain is art” may be a cliché, but for Adele, it rang especially true. Her debut album, 19, was a polite, tasteful set of soul-inflected pop. Its follow-up was something else again. Chewing over a tumultuous affair, she dug deep and came up with a modern masterpiece of post-breakup soul music. She’d actually cut an entire album with producer Rick Rubin but wound up preferring earlier demos of songs like “Rolling in the Deep,” “Someone Like You,” and “Set Fire to the Rain,” and mostly used those instead. The switch-up made for an even rawer and more emotional experience that clearly connected: 21 sold more than 30 million copies and swept the 2012 Grammys.",
    link: "https://open.spotify.com/album/0Lg1uZvI312TPqxNWShFXL",
    image: "https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300",
  },
  {
    rank: 433,
    artist: "LCD Soundsystem",
    album: "Sound of Silver",
    description:
      "James Murphy had proven his kung fu as the most badass electro-punk producer in clubland. But not even fierce fans dreamed he’d make a masterpiece like Sound of Silver. Every track sounded like a different band’s greatest hit, from the political punk goof “North American Scum” to the synth-pop breakup lament “Someone Great.” The song for the ages was “All My Friends,” huge, sweeping, ferociously emotional, with disco keyboards and rock guitars pulsing as Murphy looked back on a youth of killer parties and silent mornings.",
    link: "https://open.spotify.com/album/1R8kkopLT4IAxzMMkjic6X",
    image: "https://i.scdn.co/image/ab67616d0000b273e6272ad26e7a55bc342a6dd0",
  },
  {
    rank: 126,
    artist: "Mary J. Blige",
    album: "My Life",
    description:
      "The crucial development on Mary J. Blige’s second album is her emergence as a songwriter; in lyrics and interviews, she began to describe the traumas she’d had, both as a child growing up in the projects and as an adult. For fans, that intimacy turned her from a beloved singer to a member of the family. “Down and out, crying every day,” she sings on the title song. There’s plenty of thematic contrast — the playful bedroom come-on “Mary Jane (All Night Long),” a smashing cover of the 1970s funk ballad “I’m Going Down” — but the strongest impression from the album is that Blige had been through it, and her hopefulness was hard-won.",
    link: "https://open.spotify.com/album/1OQ5l5rHKqUumPpn559zJC",
    image: "https://i.scdn.co/image/ab67616d0000b2730b283be60e1ca4d3b43137c2",
  },
  {
    rank: 8,
    artist: "Prince and the Revolution",
    album: "Purple Rain",
    description:
      "“I think Purple Rain is the most avant-garde, ‘purple’ thing I’ve ever done,” Prince told Ebony in 1986. He was still a rising star with only a couple of hits when he got the audacious idea to make a movie based on his life, and make his next LP the movie’s soundtrack. When it was released in 1984, he became the first artist to have the Number One song, album, and movie in North America. \nBut Purple Rain was so much more than a huge movie soundtrack: It was a testament to Prince’s dream of creating a utopian Top 40, a place where funk, psychedelia, heavy-metal shredding, huge ballads, and daring experimentalism could coexist. “Listening to Purple Rain now, it’s kind of like a Beatles album,” keyboardist Matt Fink of the Revolution told Rolling Stone shortly after Prince’s death in 2016. “Every song is just so brilliant in its own way — all so unique and different.”\nIt’s an incredible balance of contradicting impulses — from the pornographic “Darling Nikki” to the sparkling innocence of “Take Me With You.” When Purple Rain director Albert Magnoli asked for a good song to back a montage sequence, Prince came in the next day with “When Doves Cry,” a stark, eccentric-sounding brokenhearted song that became his first Number One single.\nThe title track was one of several songs recorded live at his hometown club, First Avenue, in Minneapolis (strings and overdubs were added later in the studio). It was inspired by Bob Seger, of all people — when Prince was touring behind 1999 [see No. 130] in 1983, Seger was playing many of the same markets. Prince didn’t understand the Midwestern rocker’s appeal, but decided to try a ballad in the Seger mode — the result may be the greatest rock ballad of all time.",
    link: "https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc",
    image: "https://i.scdn.co/image/ab67616d0000b273d52bfb90ee8dfeda8378b99b",
  },
  {
    rank: 157,
    artist: "Oasis",
    album: "(What's the Story) Morning Glory?",
    description:
      "With their second album, the fighting Gallagher brothers embraced their Stones and Beatles comparisons, then went ahead and established themselves as a rock & roll force in their own right with barnburners (“Roll With It”) and epic tunes, like the glorious “Wonderwall.” “The whole of the first album is about escape,” Noel Gallagher told Rolling Stone in 1996, of 1994’s Definitely Maybe. “It’s about getting away from the shitty, boring life of Manchester. The first album is about dreaming of being a pop star in a band. The second album is about actually being a pop star in a band.”",
    link: "https://open.spotify.com/album/6tOe4eAF8xNhEkl9WyvsE4",
    image: "https://i.scdn.co/image/ab67616d0000b2737a4c8c59851c88f6794c3cbf",
  },
  {
    rank: 422,
    artist: "Marvin Gaye",
    album: "Let's Get It On",
    description:
      "“I mumble things into the microphone,” Gaye said. “I don’t even know what I’m saying, and I don’t even try to figure it out. If I try, it doesn’t work. If I relax, those mumbles will finally turn into words.” On this album, those words turn into meditations on the gap between sex and love and how to reconcile them. Songs like “Just to Keep You Satisfied” and “You Sure Love to Ball” are some of the most gorgeous music of his career.",
    link: "https://open.spotify.com/album/6AmnVWOxXYucWxgidEgwhy",
    image: "https://i.scdn.co/image/ab67616d0000b273b98aacb957a40d613445f92f",
  },
  {
    rank: 443,
    artist: "David Bowie",
    album: "Scary Monsters",
    description:
      "It’s the end, the end of the Seventies; it’s the end, the end of the century. Bowie looks back over a decade he helped define and rips it into pieces, with futuristic post-punk lampoons like “Fashion” and “Teenage Wildlife,” where he bitches about “the same old thing in brand-new drag.” He revisits the Major Tom story with “Ashes to Ashes,” where he screams along with the New Romantic synths, acting out the sad story of the lost astronaut who finds the higher he gets, the lower he feels.",
    link: "https://open.spotify.com/album/5fxvWHvIDPIALfTfRiwyB0",
    image: "https://i.scdn.co/image/ab67616d0000b273b62b49cec67e610f6f3d1221",
  },
  {
    rank: 214,
    artist: "Tom Petty",
    album: "Wildflowers",
    description:
      "Petty struggled for two years to make the Rick Rubin-produced follow-up to 1989’s hit Full Moon Fever. He left tons of songs in the can, and the final product stretched to 70 minutes but didn’t have any filler. Petty hit a new songwriting peak, going from intimate, soul-bearing songs like the title track and “Crawling Back to You” to rockers like “You Wreck Me” and “House in the Woods.” “I think it’s maybe my favorite LP that I’ve ever done,” Petty said.",
    link: "https://open.spotify.com/album/3ZGUBwDiY5HPOcWv4SBPQg",
    image: "https://i.scdn.co/image/ab67616d0000b27341be6d9cf0ec0067d095a072",
  },
  {
    rank: 170,
    artist: "Cream",
    album: "Disraeli Gears",
    description:
      "Of all Cream’s studio albums, Disraeli Gears is the sharpest and most linear. The power trio focused their instrumental explorations into colorful pop songs: “Strange Brew” (slinky funk), “Dance the Night Away” (trippy jangle), “Tales of Brave Ulysses” (a wah-wah freakout that Eric Clapton wrote with Martin Sharp, who created the kaleidoscopic cover art). The hit “Sunshine of Your Love” nearly didn’t make it onto the record; the band had trouble nailing it until famed Atlantic Records engineer Tom Dowd suggested that Ginger Baker try a Native American tribal beat, a simple adjustment that locked the song into place.",
    link: "https://open.spotify.com/album/3W6CI0Lw7lElAPID2Fd3B4",
    image: "https://i.scdn.co/image/ab67616d0000b273db1fb2dede292908e86d94d7",
  },
  {
    rank: 311,
    artist: "Neil Young",
    album: "On the Beach",
    description:
      "Reeling from the losses that sparked Tonight’s the Night the previous year, Neil Young shelved that album for a while and made this one instead: a wild fireball of anger (“Revolution Blues”), nihilism (“For the Turnstiles”), and tentative optimism (“Walk On”). The album peaks on Side Two, a stoned symphony of grieving whose three songs (“On the Beach,” “Motion Pictures,” “Ambulance Blues”) are among the most emotionally real in Young’s catalog.",
    link: "https://open.spotify.com/album/5OegFjiVvk3WecDO5Bofbw",
    image: "https://i.scdn.co/image/ab67616d0000b273601f12c69021f02bbfa9bc04",
  },
  {
    rank: 22,
    artist: "The Notorious B.I.G.",
    album: "Ready to Die",
    description:
      "The Notorious B.I.G. spread the love the Brooklyn way on his classic debut, introducing us to the most immediately likable voice in hip-hop history. “I made the record for New York, but I want the world to hear it,” he said. Ready to Die executive producer Sean “Puffy” Combs, who’d read about the fledgling Brooklyn rapper in The Source magazine, pushed his new discovery to leaven the stick-up-kid self-mythologizing of “Machine Gun Funk” and “Gimme the Loot” with inviting party-up pop like “Big Poppa” and the ecstatically playful origin story “Juicy.”\nBut it was Biggie’s gift of gab, enormous personality, and sense of humor that made Ready to Die so wonderful — whether he was offering a 360-degree vision of the mean streets of Fort Greene on “Things Done Changed,” kicking it Bonnie and Clyde-style on “Me and My Bitch,” or delivering rags-to-riches brags like “Birthdays was the worst days/Now we sip champagne when we’re thirsty.” In the process, he changed rap forever. He ends the album with the dark prophecy of “Suicidal Thoughts.” As with Kurt Cobain, his tragic death while still in his twenties will always leave us wondering how far he might have gone.",
    link: "https://open.spotify.com/album/2HTbQ0RHwukKVXAlTmCZP2",
    image: "https://i.scdn.co/image/ab67616d0000b273db09958534ac66f9a90d3cf7",
  },
  {
    rank: 39,
    artist: "Talking Heads",
    album: "Remain in Light",
    description:
      "David Byrne said Remain in Light “was done in bits and pieces, one instrument at a time.” The result was a New Wave masterpiece powered by Byrne’s revelation, as he put it on “The Great Curve,” that “the world moves on a woman’s hips.” It combined thrust of a P-Funk dance party, the ancient-to-the-future rhythm hypnosis of Nigerian funkmaster Fela Kuti, and the studied adventurousness of the album’s producer and Heads co-conspirator, Brian Eno. Remain in Light marked Talking Heads’ transformation from avatars of the punk avant-garde to polyrhythmic magicians with hit-single appeal. Just try not dancing to “Once in a Lifetime.”",
    link: "https://open.spotify.com/album/3AQgdwMNCiN7awXch5fAaG",
    image: "https://i.scdn.co/image/ab67616d0000b273e56fa8c916dc6ce419dcf557",
  },
  {
    rank: 305,
    artist: "Kiss",
    album: "Alive!",
    description:
      "“We wanted to put out a souvenir, almost like when you go to the circus,” said Kiss lead singer Paul Stanley. This double live album, recorded largely in Detroit (with some bonus material from Iowa, New Jersey, and Ohio, plus a whole bunch of studio overdubs), was the breakthrough record for Kiss, with exuberant versions of “Strutter” and “Rock & Roll All Nite,” and a classic litany of alcohol choices in the intro to “Cold Gin.”",
    link: "https://open.spotify.com/album/6TRmLIsPKSPS71Cnq8FiMc",
    image: "https://i.scdn.co/image/ab67616d0000b2732759d92cd83b0379da9d8d2f",
  },
  {
    rank: 257,
    artist: "Dolly Parton",
    album: "Coat of Many Colors",
    description:
      "Dolly Parton’s starkest, most affecting album. The title track is about wearing rags but keeping your pride. “That was a very sad and cutting memory that I long kept deep within myself,” she said of the song in a 1977 Rolling Stone interview. “I remembered all the pain of it and the mockery.” The rest is more hard country: On “Traveling Man,” Parton’s mom runs off with the singer’s boyfriend; on “If I Lose My Mind,” her boyfriend has sex with another woman in front of her.",
    link: "https://open.spotify.com/album/17CT6ru3CyDXAi6xVaSUzg",
    image: "https://i.scdn.co/image/ab67616d0000b2735eedc4901818fe24d8645672",
  },
  {
    rank: 147,
    artist: "Jeff Buckley",
    album: "Grace",
    description:
      "In an era when love was an unpopular song topic, Buckley was a swooning romantic. He was the son of the late 1960s cult singer Tim Buckley, but identified himself as “rootless trailer-trash born in Southern California.” On extended slow-burning ballads like “Lover, You Should’ve Come Over” and his cover of “Hallelujah,” Buckley used unrestrained amounts of falsetto and vibrato to create an unearthly longing. His music had a smattering of grunge, a plateful of Led Zeppelin III (check the fierce rocker “Eternal Life”), and an opulent sense of tragedy. Grace is the only album Buckley released in his lifetime; he died in 1997 after going for a swim in a Memphis river known for its unpredictable currents.",
    link: "https://open.spotify.com/album/7yQtjAjhtNi76KRu05XWFS",
    image: "https://i.scdn.co/image/ab67616d0000b2736a760642a56847027428cb61",
  },
  {
    rank: 295,
    artist: "Daft Punk",
    album: "Random Access Memories",
    description:
      "Having played a massive role in the rise of EDM in the late ‘00s, Thomas Bangalter and Guy-Manuel de Homem-Christo turned away from EDM altogether for a Seventies disco record featuring appearances by Donna Summer producer Giorgio Moroder and Chic’s Nile Rodgers (who played guitar on the gigantic hit “Get Lucky”). The result was a mushy, otherworldly concept LP that was retro, futuristic, trippy, and weirdly human all at once.",
    link: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa",
    image: "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
  },
  {
    rank: 24,
    artist: "The Beatles",
    album: "Sgt. Pepper’s Lonely Hearts Club Band",
    description:
      "For the Beatles, it was a decisive goodbye to screaming crowds, world tours, and assembly-line record making. “We were fed up with being Beatles,” Paul McCartney said decades later. “We were not boys, we were men … artists rather than performers.” Sgt. Pepper christened the Summer of Love with the lavish psychedelic daydream “Lucy in the Sky With Diamonds,” the jaunty Ringo Starr-sung communality anthem “With a Little Help From My Friends,” the album-closing multilayered masterwork, “A Day in the Life,” and the title track, which introduced the alter egos the Beatles had developed for the ambitious project. “It liberated you,” McCartney said. “You could do anything.” It is hard to imagine a more perfect setting for the Victorian jollity of John Lennon’s “Being for the Beneﬁt of Mr. Kite!” (inspired by an 1843 circus poster) or the sumptuous melancholy of McCartney’s “Fixing a Hole,” with its blend of antique shadows (a harpsichord played by the Beatles’ producer George Martin) and modern sunshine lead guitar executed with ringing precision by George Harrison). The Sgt. Pepper premise was a license to take their music in every direction — rock spent the rest of the Sixties trying to keep up.",
    link: "https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW",
    image: "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
  },
  {
    rank: 132,
    artist: "Hank Williams",
    album: "40 Greatest Hits",
    description:
      "“I’m a rolling stone, all alone and lost,” Hank Williams sang in “Lost Highway,” “for a life of sin I have paid the cost.” When he died on New Year’s Day 1953 at age 29, in the back seat of a Cadillac while en route to a gig in Canton, Ohio, Williams was the biggest star in country music, a charismatic songwriter and performer equally at home with lovesick ballads like “I’m So Lonesome I Could Cry” and long-gone-daddy romps such as “You’re Gonna Change (Or I’m Gonna Leave).” Williams left his stamp on the decades of country and rock & roll that followed him, from the rockabilly of Elvis Presley to Bob Dylan’s “Like a Rolling Stone” to the lovesick ballads of Beck and Jason Isbell’s mordant depictions of life.",
    link: "https://open.spotify.com/album/6zIYEv6soMoaZiypsHB5dd",
    image: "https://i.scdn.co/image/ab67616d0000b273bf7de449bfd768b5a1e3bdd0",
  },
  {
    rank: 85,
    artist: "John Lennon",
    album: "Plastic Ono Band",
    description:
      "Also known as the “primal scream” album, referring to the painful therapy that gave rise to its songs, Plastic Ono Band was John Lennon’s first proper solo album and rock & roll’s most self-revelatory recording. Lennon attacks and denies idols and icons, including his own former band (“I don’t believe in Beatles,” he sings in “God”), to hit a pure, raw core of confession that, in its echo-drenched, garage-rock crudity, is years ahead of punk. He deals with childhood loss in “Mother” and skirts blasphemy in “Working Class Hero”: “You’re still fucking peasants as far as I can see.” But the unkindest cut came in his frank 1970 Rolling Stone interview. “The Beatles was nothing,” Lennon stated acerbically.",
    link: "https://open.spotify.com/album/0DFYbYCcHCEJPcN1hODG6K",
    image: "https://i.scdn.co/image/ab67616d0000b2736462162d227ec2be2ebee12d",
  },
  {
    rank: 281,
    artist: "Harry Nilsson",
    album: "Nilsson Schmilsson",
    description:
      "A brilliant outlier on the Seventies L.A. singer-songwriter scene, Harry Nilsson had a voice and pop savvy like Paul McCartney and a biting ironic side like John Lennon. Nilsson Schmilsson produced three hits — the oddball island novelty “Coconut,” a cover of Badfinger’s “Without You,” where Nilsson sounds like a depressed Barry Manilow, and the surprise monster jam “Jump Into the Fire.” Nilsson was later covered by LCD Soundsystem. It was par for the course for a guy who could shruggingly pull off anything he wanted.",
    link: "https://open.spotify.com/album/3EfpOFKjotrMQTFTnxrXaB",
    image: "https://i.scdn.co/image/ab67616d0000b2734df5b571de1c3f8ba2f02386",
  },
  {
    rank: 465,
    artist: "King Sunny Adé",
    album: "The Best of the Classic Years",
    description:
      "Some of the sweetest, stickiest jams ever recorded, cherry-picked from the Nigerian juju master’s work from 1967 to 1974, years before he got marketed as “the next Bob Marley.” King Sunny’s slow-roll guitar stretches out toward the horizon, rippling over verdant grooves to create a spellbinding vibe even (or especially) when a song saunters on for 18 minutes. Talking Heads and Phish are just two of the bands who’ve proudly cited the sound of Adé’s music as a guiding influence.",
    link: "https://open.spotify.com/album/6Y5SoiYENbNuTBc6mTUKG9",
    image: "https://i.scdn.co/image/ab67616d0000b2731125d671571e304a2559ad09",
  },
  {
    rank: 468,
    artist: "The Rolling Stones",
    album: "Some Girls",
    description:
      "Why did the Stones call their big comeback album Some Girls? Keith explained, “Because we couldn’t remember their fucking names.” The Stones sounded revitalized on Some Girls, with Mick at his bitchiest, reveling in the NYC sleaze of “Shattered,” “Beast of Burden,” and the disco hit “Miss You.” It became their all-time biggest seller. Keith was in rough shape at the time — as Mick fumed, “Christ, Keith fuckin’ gets busted every year” — but he stands unrepentant in his outlaw theme song, “Before They Make Me Run.”",
    link: "https://open.spotify.com/album/1Jv2AqzhgsduUik2p4k3cS",
    image: "https://i.scdn.co/image/ab67616d0000b27305c7aec05eabf142cc33b936",
  },
  {
    rank: 476,
    artist: "Sparks",
    album: "Kimono My House",
    description:
      "The duo of singer Russell Mael and songwriter-keyboardist Ron Mael coined a unique, influential sound that mixed glam and prog-rock, the Beach Boys and Frank Zappa. Russell adopts a florid falsetto to sing Ron’s lyrics about clumsy sex (“Amateur Hour”), Albert Einstein’s doting parents (the pun-filled “Talent Is an Asset”), and a broken suicide pact (“Here in Heaven”). The overwhelming sensation from Sparks’ third album is a sense that you’ve arrived at a party where you know no one and hear things you can’t comprehend but still have a great time.",
    link: "https://open.spotify.com/album/7KOmuu3cbJQEQYGt3XmLmY",
    image: "https://i.scdn.co/image/ab67616d0000b2737aebbd28dd4cfaca652008b7",
  },
  {
    rank: 110,
    artist: "Joni Mitchell",
    album: "Court and Spark",
    description:
      "Joni Mitchell followed up Blue with the underrated For the Roses, a set of harmonically and lyrically complex songs. Court and Spark is, in comparison, smoother and more straight-ahead; it became the biggest record of her career, hitting Number Two. Working with saxophonist Tom Scott’s fusion group, L.A. Express, Mitchell settled into a folk-pop-jazz groove that remains a landmark of breezy sophistication, particularly on the Top 10 single “Help Me.” Strange but true: A cover of “Twisted,” by the scat-jazz vocal group Lambert, Hendricks, and Ross, closes the album — with stoner comics Cheech and Chong singing backup.",
    link: "https://open.spotify.com/album/2J3yc94qjL2PxnWX80Lkhm",
    image: "https://i.scdn.co/image/ab67616d0000b273c6bb2eb72b3c703d54dad6e5",
  },
  {
    rank: 292,
    artist: "Van Halen",
    album: "Van Halen",
    description:
      "This debut gave the world a new guitar hero (Eddie Van Halen) and charismatic frontman (David Lee Roth). Tunes such as “Runnin’ With the Devil” and “Ain’t Talkin’ ’Bout Love” put the swagger back in hard rock, and Van Halen’s jaw-dropping technique, particularly on “Eruption,” raised the bar for rock guitar. “It sounded like it came from another planet,” Pearl Jam’s Mike McCready said of first encountering Van Halen’s playing. “Like hearing Mozart for the first time.”",
    link: "https://open.spotify.com/album/7DdEbYFPKTZ8KB4z6L4UnQ",
    image: "https://i.scdn.co/image/ab67616d0000b27317dd812df38fed44d6d2036e",
  },
  {
    rank: 238,
    artist: "Kraftwerk",
    album: "Trans Europe Express",
    description:
      "In 1975, someone asked legendary rock critic Lester Bangs where music was going. “It’s being taken over by the Germans and the machines,” he replied. Not a bad prediction. This German group’s sound sought to eliminate the distinction between men and machines. Kraftwerk’s robot-synthesizer grooves influenced electrodisco hitmakers, experimental geniuses such as Brian Eno, and rappers including Afrika Bambaataa, who lifted the title track for “Planet Rock.” The whole world of EDM may not have happened without them.",
    link: "https://open.spotify.com/album/0HHRIVjvBcnTepfeRVgS2f",
    image: "https://i.scdn.co/image/ab67616d0000b2737cf7be893131178035b2a3cb",
  },
  {
    rank: 226,
    artist: "Derek and the Dominos",
    album: "Layla and Other Assorted Love Songs",
    description:
      "Eric Clapton was tired of stardom, so he formed a new band where he could be just another one of the lads. But there was no mistaking the blues guitar on “Layla,” as Clapton sang about falling in love with the wife of his best friend, George Harrison. The tortured love songs on Layla get a kick from guest Duane Allman, whose interplay with Clapton in “Key to the Highway” and “Have You Ever Loved a Woman” is both harmonious and fiercely competitive: electric, brotherly love.",
    link: "https://open.spotify.com/album/5iIWnMgvSM8uEBwXKsPcXM",
    image: "https://i.scdn.co/image/ab67616d0000b273fbcaf7402f38faac27610efc",
  },
  {
    rank: 224,
    artist: "Dixie Chicks",
    album: "Fly",
    description:
      "Before their criticism of George W. Bush made them Nashville exiles and before they established their legacy as country’s most righteous troublemakers, the Chicks were effortlessly ruffling feathers on their infectious, poppy fifth album, Fly. “Cowboy Take Me Away,” “Ready to Run,” and “Goodbye Earl” became defining country hits of the late Nineties, but the rest of the record was hardly filler, from the intense balladry of “Cold Day in July” to the thrash-metal-with-fiddles freakout of “Sin Wagon.”",
    link: "https://open.spotify.com/album/3y6G5El2I6QrJA9BdfAbqA",
    image: "https://i.scdn.co/image/ab67616d0000b27309874a0209b4bc9c0b3a0a01",
  },
  {
    rank: 474,
    artist: "Big Star",
    album: "#1 Record",
    description:
      "Alex Chilton and Chris Bell were the Memphis whiz kids at the heart of Big Star. They mixed British Invasion pop finesse with all-American hard rock, from the surging “Feel” to the acoustic heartbreaker “Thirteen.” Big Star didn’t sell many records but did become a crucial inspiration to underdogs like R.E.M., the Replacements, and Elliott Smith. As Chilton said later, “If you only press up a hundred copies of a record, then eventually it will find its way to the hundred people in the world who want it the most.”",
    link: "https://open.spotify.com/album/1BumwwIEw1EC3xAHyf1ive",
    image: "https://i.scdn.co/image/ab67616d0000b273ece578a226806ad05af7a03d",
  },
  {
    rank: 402,
    artist: "Fela Kuti and Africa 70",
    album: "Expensive Shit",
    description:
      "The title track is a 13-minute odyssey that epitomizes Nigerian funk king Fela Kuti’s knack for channeling fearless social commentary into body-moving grooves; the Africa 70 horns blare out infectious riffs as peerless drummer Tony Allen keeps up an indefatigable shuffling pulse, while Fela calls out the “fools” who would “use your shit to put you for jail.” Side Two’s “Water No Get Enemy” slows things down to a celebratory strut, concluding a short-yet-sweet effort that plays like a primer on the joys of Afrobeat.",
    link: "https://open.spotify.com/album/7C6lbw1DsMDwC3kRWiuy4t",
    image: "https://i.scdn.co/image/ab67616d0000b273850254fd8688b1da7b45dd05",
  },
  {
    rank: 115,
    artist: "Kendrick Lamar",
    album: "good kid, m.A.A.d city",
    description:
      "Kendrick Lamar’s hip-hop autobiography came as a shock in 2012: musically downbeat, with a film director’s eye for narrative but the voice of a poet. Good kid is his story of growing up in Compton, surrounded by gunfire, gang warfare, police brutality, drugs, liquor, dead friends — billed on the cover as “A Short FIlm by Kendrick Lamar,” like a West Coast answer to Martin Scorsese’s Mean Streets. K-Dot goes for emotional detail instead of gangsta bravado, whether cruising the streets in “Backseat Freestyle” or pondering addiction in “Swimming Pool (Drank).” As he told Rolling Stone, “The best entertainers have to have the most wickedest sense of humor, to be able to take pain and change it into laughter.”",
    link: "https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w",
    image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d",
  },
  {
    rank: 193,
    artist: "Creedence Clearwater Revival",
    album: "Willy and the Poor Boys",
    description:
      "Sharp social criticism (“Fortunate Son”) and party music (“Down on the Corner”) take a ride on the Creedence bandwagon. John Fogerty’s ability to wed swamp rock with catchy, complex arrangements gave Willy a durability few rock albums can match. “It Came Out of the Sky” told the story of a farm boy who finds a space ship in his backyard, with cameos by Spiro Agnew and Ronald Reagan, and the album climaxes with “Effigy,” an inferno image of apocalypse across the land that’ll leave you breathless, especially when you remember you’re listening to the biggest Top 40 band in America at the time.",
    link: "https://open.spotify.com/album/31q47gQszFt0CddSyMksgO",
    image: "https://i.scdn.co/image/ab67616d0000b2739f39192f9f8ca1c90847b3e5",
  },
  {
    rank: 448,
    artist: "Otis Redding",
    album: "Dictionary of Soul",
    description:
      "Otis Redding’s last album before his tragic death in a plane crash, Dictionary of Soul, was just what the title promises: a definitive summary of an entire musical world. “Try a Little Tenderness” was a forgotten Bing Crosby oldie from the Thirties until Redding claimed it and turned it into pure Memphis soul. He does the same with “Tennessee Waltz” and the Beatles’ “Day Tripper,” as well as his own ballads “Fa-Fa-Fa-Fa-Fa (Sad Song)” and “My Lover’s Prayer.”",
    link: "https://open.spotify.com/album/25uNcuL4dAoV62eKmr8Q0Y",
    image: "https://i.scdn.co/image/ab67616d0000b273ffffe932598090498459b77c",
  },
  {
    rank: 499,
    artist: "Rufus, Chaka Khan",
    album: "Ask Rufus",
    description:
      "Fronted by Chaka Khan, one of soul music’s most combustible singers, Rufus built its mid-Seventies sound on heavy-footed, guitar-slathered funk. But after spending 16 months in the studio working on Ask Rufus, they came out with a record that gave their songs more room to breathe, anticipating the lithe, loose arrangements of Nineties neo-soul. Khan glided through the head-nodding “Everlasting Love” and the twisty-turny “Better Days,” and fans appreciated the adjustment: Ask Rufus was the group’s first platinum record.",
    link: "https://open.spotify.com/album/3ZJJdnvxztzpOvwvzUzUxC",
    image: "https://i.scdn.co/image/ab67616d0000b273d78534a335d02fdcff381c10",
  },
  {
    rank: 19,
    artist: "Kendrick Lamar",
    album: "To Pimp a Butterfly",
    description:
      "Kendrick Lamar had already proven himself hip-hop’s boldest visionary — so by now, people expected greatness from him. But he topped himself with To Pimp a Butterfly — a sprawling, ambitious portrait of America and his dangerous place in it, with a host of jazz influences. “It’s a unique sound,” said longtime Lamar producer Mark “Sounwave” Spears. “Every producer I’ve ever met was sending me stuff [for the album], but there was a one-in-a-million chance you could send a beat that actually fit what we were doing.” As Lamar said when the album was released, “I pride myself on writing now rather than rapping. My passion is bringing storylines around and constructing a full body of work, rather than just a 16-bar verse.”\n“Alright” became a Black Lives Matter anthem, with “The Blacker the Berry” as the flip side. “How Much a Dollar Cost” is a haunting meditation on mortality, set to a Radiohead piano loop. And in “King Kunta,” K-Dot takes in the whole sweep of African American heartbreak, from the Middle Passage to the hood, from Richard Pryor to P-Funk. “You take a black kid out of Compton and put him in the limelight, and you find answers about yourself you never knew you were searching for,” Lamar said. “There’s some stuff in there, man. It’s a roller coaster. It builds.”",
    link: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP",
    image: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
  },
  {
    rank: 216,
    artist: "Elliott Smith",
    album: "Either/Or",
    description:
      "Elliott Smith had ambitions to make records with a Beatlesque sound — but zero interest in Beatlesque fame — when he recorded Either/Or. While he achieved his dreams on several subsequent major-label releases, the Portland, Oregon, indie-folk singer-songwriter’s third album resonates because of his low-fi whisper and gritty, sepia-toned lyrics. His songs struck a nerve well beyond the Northwest music scene — Madonna, of all people, covered the morosely pretty drunk’s lullaby “Between the Bars.”",
    link: "https://open.spotify.com/album/6KMdn9HDIqcBPaaok0K34K",
    image: "https://i.scdn.co/image/ab67616d0000b27336e934bdc6f83dd9d022389d",
  },
  {
    rank: 56,
    artist: "Liz Phair",
    album: "Exile in Guyville",
    description:
      "“Watch how fast they run to the flame,” Liz Phair sang, and true to that promise her debut double LP set the underground on fire. Phair and co-producer Brad Wood built off the bedroom demo intimacy of Phair’s Girly-Sound cassette releases, creating a loose response record to the Rolling Stones’ Exile on Main Street (“I had a lot to say on the subject matter they put forth,” she told Rolling Stone). Her strikingly frank sex talk caused a media stir unheard of for a “low-fi” artitst, but it was the caffeinated drive of songs like “6’1” and “Never Said,” the painterly sonic impressionism of the piano piece “Canary” or the sunset majestic “Stratford-On-Guy,” and the real hurt and hunger of “Fuck and Run” and “Divorce Song” that made Exile hit home.",
    link: "https://open.spotify.com/album/7sCpW2cLGcRk1zf9zi0Yqd",
    image: "https://i.scdn.co/image/ab67616d0000b2738c2631f2df86dea5fd150572",
  },
  {
    rank: 84,
    artist: "AC/DC",
    album: "Back in Black",
    description:
      "In the middle of album rehearsals, singer Bon Scott went on a drinking spree; he choked on his vomit and was found dead in the back seat of a car. After two days of mourning, guitarist Malcolm Young thought, “Well, fuck this, I’m not gonna sit around mopin’ all fuckin’ year.” He called his brother, guitarist Angus Young, and they went back to work with replacement vocalist Brian Johnson. The resulting album has the relentless logic of a sledgehammer. Back in Black remains the purest distillation of hard rock: “Hells Bells,” “You Shook Me All Night Long,” and the title track have all become enduring anthems of strutting blues-based guitar.",
    link: "https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh",
    image: "https://i.scdn.co/image/ab67616d0000b2730b51f8d91f3a21e8426361ae",
  },
  {
    rank: 328,
    artist: "Vampire Weekend",
    album: "Modern Vampires of the City",
    description:
      "On Halloween 2012, with their hometown New York subsumed in a blackout, Vampire Weekend went on late-night TV to play an atheist reggae jam called “Unbelievers” dressed as skeletons. It was the perfect introduction to Modern Vampires of the City, a record that darkened their buoyant indie pop, as Ezra Koenig sang about moving beyond his post-college years into something scarier and weirder — hitting a cloudy peak with the beautifully worried Dylanesque travelogue “Hannah Hunt.”",
    link: "https://open.spotify.com/album/1GXMNFfoHF4sN7lG8gZq1j",
    image: "https://i.scdn.co/image/ab67616d0000b273654afcab578b93f29ca55a29",
  },
  {
    rank: 52,
    artist: "David Bowie",
    album: "Station to Station",
    description:
      "The title track is where David Bowie proclaims himself the Thin White Duke. Thin he was: Station to Station was recorded in a blizzard of cocaine in Los Angeles, with Bowie subsisting on green peppers and milk and almost never sleeping. The manic mood fueled an album that was futuristic but accessible, “plastic soul” speeding toward the electronic epiphanies of his Berlin phase. “TVC 15” is New Orleans R&B as robotic funk; “Golden Years” is James Brown from outer space, with Bowie’s amazing falsetto; and the 10-minute title track summed up his constant sense of motion at the time — opening with the sound of a train coming and eventually exploding into a Euro-disco breakdown that sounds like Saturday Night Fever at the android factory.",
    link: "https://open.spotify.com/album/0MWrKayUshRuT8maG4ZAOU",
    image: "https://i.scdn.co/image/ab67616d0000b2738f3cdfeac0678371b16f601d",
  },
  {
    rank: 453,
    artist: "Nine Inch Nails",
    album: "Pretty Hate Machine",
    description:
      "“The music I always liked as a kid was stuff I could bum out to and realize, ‘Hey, someone else feels that way, too,'” Trent Reznor said in 1990. “So if someone can do that with my music, it’s mission accomplished.” Led by the hit “Head Like a Hole,” Nine Inch Nails’ debut album took bleak Midwestern goth-industrial disco to the rock masses, a move that would shape pop culture just as much as Nirvana’s Nevermind did. When Reznor sang, “Grey would be the color if I had a heart,” on “Something I Can Never Have,” millions felt his pain.",
    link: "https://open.spotify.com/album/3umFHeEpc4yLXtrRcv9gLN",
    image: "https://i.scdn.co/image/ab67616d0000b2739764c0993e45db213f0e359f",
  },
  {
    rank: 258,
    artist: "Joni Mitchell",
    album: "The Hissing of Summer Lawns",
    description:
      "Joni Mitchell got deeper into glamorous L.A. groove theory on her seventh album, reveling in the possibilities of pure melody for a set of songs where her genius as a producer shines just as brightly as her writing. “In France They Kiss on Main Street” bids farewell to the rock & roll era in a blaze of freewheeling, jazzy joy; “Harry’s House/Centerpiece” frames a story of a loveless high-society marriage in supper-club swank. The rest of the pop world would take years to catch up to where she was here.",
    link: "https://open.spotify.com/album/1YTSVDA02Rm7YKZkxQrQYY",
    image: "https://i.scdn.co/image/ab67616d0000b273db02a2659d32d80ce2f11212",
  },
  {
    rank: 66,
    artist: "John Coltrane",
    album: "A Love Supreme",
    description:
      "Two important things happened to John Coltrane in 1957: The saxophonist left Miles Davis’ employ to join Thelonious Monk’s band and hit new heights in extended, ecstatic soloing. Coltrane also kicked his heroin addiction, a vital step in a religious awakening that climaxed with this legendary album-long hymn of praise. The indelible four-note theme of the first movement, “Acknowledgment,” is the humble foundation of the suite. But Coltrane’s majestic, often violent blowing (famously described as “sheets of sound”) is never self-aggrandizing. Coltrane soars with nothing but gratitude and joy. You can’t help but go with him.",
    link: "https://open.spotify.com/album/7Eoz7hJvaX1eFkbpQxC5PA",
    image: "https://i.scdn.co/image/ab67616d0000b273ea42191f549dce4d9c8ecd1a",
  },
  {
    rank: 319,
    artist: "The Stone Roses",
    album: "The Stone Roses",
    description:
      "For a few glorious moments at the dawn of the Nineties, the Stone Roses looked like they were going to lead another British Invasion, this one of baggy-panted, floppy-haired bands that loved Sixties guitars and rave-y dance beats with the same whimsical fervor. The sound never crossed over here, and the band fell apart — but first they made this incredible album, highlighted by the ecstatic eight-minute-long “I Am the Resurrection.” It laid the foundation for the Brit pop that blew up a few years later.",
    link: "https://open.spotify.com/album/0um9FI6BLBldL5POP4D4Cw",
    image: "https://i.scdn.co/image/ab67616d0000b273cf1f6466a493eb73d6d9d280",
  },
  {
    rank: 403,
    artist: "Ghostface Killah",
    album: "Supreme Clientele",
    description:
      "“I feel like I got my whole style from Ghostface,” Kanye West has said. Lavishly unhinged and viciously hard-hitting, Ghostface Killah’s second solo album helped revive the Wu-Tang franchise, marinating lines like “Ghost is back, stretch Cadillacs, fruit cocktails/Hit the shelves at Paul’s pastry rack,” in serrated Seventies-soul samples. On “Nutmeg” he drops a mind-boxing cluster of psychedelic bullshit, then simply stands back during the chorus, letting the tape roll as he mocks all comers — an untouchable champ at the top of his game.",
    link: "https://open.spotify.com/album/7eaQqVyq6xzAVgsxSzSP83",
    image: "https://i.scdn.co/image/ab67616d0000b2733d58f24bac130db263b3e4ae",
  },
  {
    rank: 227,
    artist: "Little Richard",
    album: "Here’s Little Richard",
    description:
      "“I came from a family where my people didn’t like rhythm and blues,” Little Richard told Rolling Stone in 1970. “Bing Crosby, ‘Pennies From Heaven,’ Ella Fitzgerald was all I heard. And I knew there was something that could be louder than that, but didn’t know where to find it. And I found it was me.” Richard’s raucous debut collected singles such as “Good Golly, Miss Molly,” in which his rollicking boogie-woogie piano and falsetto scream ignited the unfettered possibilities of rock & roll.",
    link: "https://open.spotify.com/album/18tV6PLXYvVjsdOVk0S7M8",
    image: "https://i.scdn.co/image/ab67616d0000b2738a22827b01e5d68d3736d58b",
  },
  {
    rank: 28,
    artist: "D’Angelo",
    album: "Voodoo",
    description:
      "In the five years following the release of his 1995 debut, Brown Sugar, D’Angelo grew disillusioned with the genre that had just anointed him a rising star. “I don’t consider myself an R&B artist,” the then-26-year-old told Jet. “R&B is pop, that’s the new word for R&B.” In his quest to create something new, he looked to both the masters of soul (Marvin, Curtis, Stevie) and contemporary innovators (Lauryn, Erykah). The end result was Voodoo, a moving, inventive masterpiece that stands as the ultimate achievement of the neo-soul era. Crafted with producer and drummer Questlove, who called the LP a “vicarious fantasy,” Voodoo places Pink Floyd-style cosmic jams (“Playa Playa”) next to Prince-inspired erotica (“Untitled [How Does It Feel]”). “I’m just looking at Voodoo as just the beginning,” D’Angelo said at the time. “It took a while, but I’m on my way now.”",
    link: "https://open.spotify.com/album/2lO9yuuIDgBpSJzxTh3ai8",
    image: "https://i.scdn.co/image/ab67616d0000b2732b3dc336a7a69293c25d9ade",
  },
  {
    rank: 154,
    artist: "Aretha Franklin",
    album: "Amazing Grace",
    description:
      "“I don’t think I’m alone in saying that Amazing Grace is Aretha’s singular masterpiece,” Marvin Gaye observed. Recorded in an L.A. church with her father, the Rev. C.L. Franklin, on hand and Mick Jagger dancing in the back of the congregation, this return to Aretha Franklin’s gospel roots remains the bestselling album of her career, containing, arguably, the greatest singing she recorded. Part of this is because it didn’t sound like it took place in a church; Franklin approaches sacred songs as if they were soul standards, and delivers Carole King’s “You’ve Got a Friend” like it’s a hymn. “How I Got Over,” her fervent thank you to Jesus, must have made the Lord blush.",
    link: "https://open.spotify.com/album/5pIUimaQ6XePPXbMUi3te0",
    image: "https://i.scdn.co/image/ab67616d0000b273d489504728cbd9938743495c",
  },
  {
    rank: 462,
    artist: "The Flying Burrito Brothers",
    album: "The Gilded Palace of Sin",
    description:
      "A landmark of country rock — or, as Gram Parsons called it, “cosmic American music.” He and Chris Hillman were a pair of ex-Byrds who’d flown the coop. The Burritos put their poetic twist on hillbilly twang, proudly wearing Nudie suits and bringing in the pedal steel guitar of Sneaky Pete Kleinow. “Boy, I love them,” Bob Dylan told Rolling Stone. “Their record instantly knocked me out.” They sing “Sin City” in high-lonesome two-part harmony, sounding like country boys lost in the decadence of Sixties L.A.; “Wheels” is God-fearing hippie soul.",
    link: "https://open.spotify.com/album/6VWKy5o2OcdeWa7yolazjU",
    image: "https://i.scdn.co/image/ab67616d0000b27353ba02e4c3b1b6a297002afa",
  },
  {
    rank: 358,
    artist: "Sonic Youth",
    album: "Goo",
    description:
      "With their sixth full album, the New York art-of-noise band made the leap from indie to major label, but few sold out so beautifully. From Thurston Moore and Lee Ranaldo’s frazzled guitar freakouts to Kim Gordon’s ghostly ode to Karen Carpenter, Goo retained all of Sonic Youth’s quirks and hallmarks. The sessions were technologically fraught, but they used those added production dollars to amp up their sonic assault. On tracks like “Kool Thing” and “Disappearer” they’d never sounded burlier — and yet more true to their alt-nation selves.",
    link: "https://open.spotify.com/album/5iYYQwB0oH9FVyVlaOXZdr",
    image: "https://i.scdn.co/image/ab67616d0000b273b690940b6544fb39bf3653d2",
  },
  {
    rank: 204,
    artist: "Kanye West",
    album: "Graduation",
    description:
      "“I’m doin’ pretty good as far as geniuses go,” Kanye West rapped on Graduation’s “Barry Bonds.” At the time, no one could argue with that. For his third album, West pared down the ornate production for a new kind of sleek stadium rap, deftly expanding his sampling palette to include Steely Dan, Daft Punk, and even Krautrockers Can, while giving his fame-sucks brags and gripes an introspect that points toward emo rap.",
    link: "https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3",
    image: "https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a",
  },
  {
    rank: 409,
    artist: "Grateful Dead",
    album: "Workingman’s Dead",
    description:
      "“We weren’t feeling like an experimental music group, but were feeling more like a good old band,” Jerry Garcia said. The Dead stripped down for Workingman’s Dead, with eight spooky blues and country songs that rival the best of Bob Dylan, as in the morbid “Black Peter” and “Dire Wolf.” Garcia and Robert Hunter proved themselves one of rock’s sharpest songwriting teams, with the acoustic hymn “Uncle John’s Band.” Hunter said, “It was my feeling about what the Dead was and could be. It was very much a song for us and about us, in the most hopeful sense.”",
    link: "https://open.spotify.com/album/4jxokHekH1qSad1DcC82ku",
    image: "https://i.scdn.co/image/ab67616d0000b2734d3659e33c2d63d5b54d1f2c",
  },
  {
    rank: 248,
    artist: "Green Day",
    album: "American Idiot",
    description:
      "The Nineties’ most irrepressible punk brats grew up with a bang. They also proved they could take on the kind of gargantuan old-school concept album that nobody else seemed to have the guts to try. Green Day raged against political complacency of mid-decade America with a Who-size sense of grandeur, zeroing in on the rock audience’s political outcasts and misfits as Billie Joe Armstrong snarled, “Welcome to a new kind of tension/All across the alien nation.”",
    link: "https://open.spotify.com/album/5dN7F9DV0Qg1XRdIgW8rke",
    image: "https://i.scdn.co/image/ab67616d0000b27308a1b1e0674086d3f1995e1b",
  },
  {
    rank: 338,
    artist: "Brian Eno",
    album: "Another Green World",
    description:
      "After years as a rock eccentric with Roxy Music and two groundbreaking solo LPs, Brian Eno was exploring new ideas about ambient music. But he said goodbye to song form with this album of pure synthetic beauty, mixing lush electronics (“Becalmed”) with acoustic instruments (“Everything Merges With the Night”) to cast a truly hypnotic spell. Eno’s work habits were pleasantly subversive too; at one impasse during the recording, he pulled out a cake from underneath the mixing console and served pieces to everyone in the studio.",
    link: "https://open.spotify.com/album/6uoeezh45SYEb8lcT8gDTY",
    image: "https://i.scdn.co/image/ab67616d0000b27384d9788915697efd5cbf56f4",
  },
  {
    rank: 414,
    artist: "Chic",
    album: "Risqué",
    description:
      "Nobody thought a disco band was supposed to make a brilliant third album — but Chic always thrived on defying the odds. On Risqué, the dynamic duo of guitarist Nile Rodgers and bassist Bernard Edwards fuse sleek tropical R&B, Anglophile New Wave, and NYC club flash for a sound that’s been the blueprint for pop radio ever since. “Good Times” is Chic’s most prophetic groove — the story of hip-hop on wax begins here, with the Sugarhill Gang rhyming over it for “Rapper’s Delight.”",
    link: "https://open.spotify.com/album/7rAk4WPpYlYr0fElVfXTOF",
    image: "https://i.scdn.co/image/ab67616d0000b273ef097b87f419f4221f0ffc1b",
  },
  {
    rank: 169,
    artist: "Billy Joel",
    album: "The Stranger",
    description:
      "On this record, Billy Joel found the recipe for success: a bottle of red, a bottle of white, and a sharp eye for the local color of New York street life. The Piano Man sharpens his storytelling gifts with a Scorsese-style sense of humor and compassion, whether he’s singing about a down-and-out Little Italy hustler in “Movin’ Out (Anthony’s Song),” the femme fatale in “She’s Always a Woman,” or the doomed Long Island greaser couple Brenda and Eddie in “Scenes From an Italian Restaurant.” Meanwhile, Joel hit the pop charts with the Grammy-winning “Just the Way You Are” (written for his first wife and manager, Elizabeth), which became a wedding-band standard.",
    link: "https://open.spotify.com/album/1Mhn9VosyjtWn4dMPFlna6",
    image: "https://i.scdn.co/image/ab67616d0000b2736ce61113662ecf693b605ee5",
  },
  {
    rank: 33,
    artist: "Amy Winehouse",
    album: "Back to Black",
    description:
      "With her love of Sixties girl-group pop and her dark beehive, Amy Winehouse came across as a star from another time. But as a child of the Nineties, she also loved hip-hop and wrote openly about her splattered relationships and issues with drugs and alcohol. Her breakthrough second album (recorded in Brooklyn with co-producers Mark Ronson and Salaam Remi) marked the arrival of a resplendently damaged 21st-century torch singer. Tracks like the mildly pushy “You Know I’m No Good” and the sumptuous “Love Is a Loving Game” had an elegant, beguiling smudginess that avoided the wax-museum quality of so much retro soul. “My odds are stacked,” Winehouse sings. “I’ll go back to black.” Indeed, the pain and tumult in her voice was very real. Before her death in 2011, she left behind a tragically unfulfilled promise.",
    link: "https://open.spotify.com/album/0E4xv5gPjykrwBgBZzI8XG",
    image: "https://i.scdn.co/image/ab67616d0000b27376ffb5b5ab045d22c81235c1",
  },
  {
    rank: 128,
    artist: "Queen",
    album: "A Night at the Opera",
    description:
      "“Queen will be the Cecil B. DeMille of rock,” proclaimed singer Freddie Mercury, and this far-ranging, rococo album is the group’s ready-for-my-close-up moment. Bassist John Deacon wrote the melodic highlight “You’re My Best Friend,” a bouncy bit of Paul McCartney-esque pop; Mercury wrote the brutal rocker “Death on Two Legs,” about the band’s former manager; and guitarist Brian May wrote “The Prophet’s Song,” a doomy portent of a flood that runs 8:21 and includes a vocal canon from Mercury. But the coup was “Bohemian Rhapsody,” an opera buffa in which Mercury combined three different songs he’d been writing into a suite that took weeks to record.",
    link: "https://open.spotify.com/album/6X9k3hSsvQck2OfKYdBbXr",
    image: "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
  },
  {
    rank: 163,
    artist: "Various Artists",
    album: "Saturday Night Fever",
    description:
      "In the mid-Seventies, the Bee Gees swept away the arch pop of their Sixties hits and applied their silvery-helium harmonies to the creamy syncopation of disco. They made great albums in their new incarnation (such as 1975’s Main Course), but none bigger or more influential than this movie soundtrack. Over the decades, Saturday Night Fever sold more than 40 million copies worldwide, and its musical worth justifies the numbers. The Bee Gees dominate (“Stayin’ Alive” is the pulse of the picture as well as the album), but the Trammps’ hot-funk assault “Disco Inferno” and Tavares’ yearning “More Than a Woman” affirm disco’s black-R&B roots.",
    link: "https://open.spotify.com/album/3xaCKtqadm4KnviPFKEjs7",
    image: "https://i.scdn.co/image/ab67616d0000b273c129b7e46bb0d8b054dae51f",
  },
  {
    rank: 390,
    artist: "Pixies",
    album: "Surfer Rosa",
    description:
      "The brainy Boston quartet went up against punk producer Steve Albini for one of the era’s most influential rock sounds: all razor-blade guitars and drum thud. It became the sound of the Nineties, as everyone from Nirvana to PJ Harvey went to Albini, hoping to get the raw power of Surfer Rosa. Black Francis goes from a whisper to a scream in oddities like “Bone Machine,” “River Euphrates,” and “Where Is My Mind?” But bassist (and future Breeder) Kim Deal steals the show with her cheeky Midwest vocals in “Gigantic.”",
    link: "https://open.spotify.com/album/50j4Wm1b9hLpSpPIA39Vp9",
    image: "https://i.scdn.co/image/ab67616d0000b273626ad9bb7d5f84c59652b161",
  },
  {
    rank: 217,
    artist: "Oasis",
    album: "Definitely Maybe",
    description:
      "Oasis didn’t get the memo about how Nineties rockers had to be all angst-y and fame-hating, but the Gallagher brothers’ cockiness would have been hollow without the supersonic songs on their debut. Liam’s insolent snarl and his brother Noel’s dialed-to-11 guitar on working-class anthems like the elevating “Live Forever” and the blaring “Rock ‘n’ Roll Star” built off the Beatles and T. Rex to reach for their own glorious future.",
    link: "https://open.spotify.com/album/3AMHMM2aNG6k3d7ybcQ5bY",
    image: "https://i.scdn.co/image/ab67616d0000b273d86a1e021e7acc7c07c7d668",
  },
  {
    rank: 259,
    artist: "Janis Joplin",
    album: "Pearl",
    description:
      "On Pearl, Janis Joplin finally made a solo album worthy of her mighty blues-mama voice. She had her first Number One album, Cheap Thrills, as lead singer of Big Brother and the Holding Company, and made an uneven solo debut. Pearl was more intimate, more assured, unleashing her Texas-bred wail on the country-style soul tune “Get It While You Can” and the Number One hit “Me and Bobby McGee.” Sadly, Joplin didn’t live to enjoy her fame. She died of a drug overdose in 1970, before the album was completed.",
    link: "https://open.spotify.com/album/3j7nicLAWXM0Fb08q9XGyf",
    image: "https://i.scdn.co/image/ab67616d0000b2736f8c26346723dd0531696bed",
  },
  {
    rank: 324,
    artist: "Coldplay",
    album: "A Rush of Blood to the Head",
    description:
      "In the early 2000s, starry-eyed Brit-pop boys doing a cuddly version of Radiohead were a dime a dozen. (Remember Starsailor?) It was Coldplay’s second album that showed they were true contenders. Songs like “Green Eyes” and “The Scientist” brought back the comforting melodies of “Yellow,” but the twinkling sonics suggested prime Smiths or U2. And darker stuff, like the austerely beautiful death meditation “Amsterdam” and the OK Computer-worthy “God Put a Smile Upon Your Face,” showed the group had more than arena anthems on its mind.",
    link: "https://open.spotify.com/album/0RHX9XECH8IVI3LNgWDpmQ",
    image: "https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82",
  },
  {
    rank: 109,
    artist: "Lou Reed",
    album: "Transformer",
    description:
      "David Bowie counted the former Velvet Underground leader as a major inspiration — and paid back the debt by producing Transformer. The album had glam flash courtesy of Ziggy Stardust guitarist Mick Ronson as well as Reed’s biggest hit, “Walk on the Wild Side” — which brought drag queens and hustlers into the Top 20 — and the exquisite ballad “Perfect Day.” It was Reed’s first producer, VU impresario Andy Warhol, who inspired the lead cut when he suggested “Vicious” as a song title. “You know, like, ‘Vicious/You hit me with a flower,’” Warhol elaborated. Reed took him at his word, penning the song and cribbing the lines verbatim.",
    link: "https://open.spotify.com/album/5SqbMEyAt8332ISGiLX0St",
    image: "https://i.scdn.co/image/ab67616d0000b273d55149748dca0e5a1f40778e",
  },
  {
    rank: 366,
    artist: "Aerosmith",
    album: "Rocks",
    description:
      "The bad boys from Boston perfected their Seventies guitar raunch on Rocks — it’s the musical equivalent of getting run over by a muscle car. Steven Tyler and Joe Perry sounded like America’s heirs to the Mick-and-Keith tradition with the filthy riffs of “Lick and a Promise” and “Back in the Saddle.” Tyler brings all his dirtbag swagger and gutter poetry to his favorite topic: sex. Surprise peak: “Sick as a Dog,” an incredible fusion of the Byrds, James Brown funk, and Sixties girl-group harmonies.",
    link: "https://open.spotify.com/album/5Uv5LmSKTT9okGkr3l9MjR",
    image: "https://i.scdn.co/image/ab67616d0000b27387d4e1a562b395b647ff8c6a",
  },
  {
    rank: 124,
    artist: "U2",
    album: "Achtung Baby",
    description:
      "After fostering a solemn public image for years, U2 loosened up on Achtung Baby, recorded in Berlin with Brian Eno and Daniel Lanois. They no longer sounded like young men sure of the answers; now they were full of doubt and longing. “It’s a con, in a way,” Bono told Rolling Stone about the album in 1992. “We call it Achtung Baby, grinning up our sleeves in all the photography. But it’s probably the heaviest record we’ve ever made.” “One” may be their most gorgeous song, but it’s a dark ballad about a relationship in peril and the struggle to keep it together. Yet the emotional turmoil made U2 sound more human than ever.",
    link: "https://open.spotify.com/album/0ta5VdkJcpdVnNrn7g4cZe",
    image: "https://i.scdn.co/image/ab67616d0000b27337cd18af5725b9cad0a5ab53",
  },
  {
    rank: 148,
    artist: "Frank Ocean",
    album: "Channel Orange",
    description:
      "On Channel Orange, Frank Ocean became one of music’s most elusive superstars — shy about speaking in public, impossible to pin down musically. He emerged from New Orleans after Hurricane Katrina, writing pop tunes for the likes of Brandy and Justin Bieber. But he stepped into his own avant-soul territory with Channel Orange, his official debut. Soon after coming out of the closet — still a rarity in R&B at the time — Ocean had a hit with the falsetto slow jam “Thinkin Bout You.” He mixes up genres and vocal personae, with guest shots from André 3000 to John Mayer. The peak: the spacey 10-minute suite “Pyramids,” an Egyptian fantasy starring Cleopatra as an around-the-way girl. Years later, Channel Orange still sounds like the future.",
    link: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
    image: "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5",
  },
  {
    rank: 394,
    artist: "Diana Ross",
    album: "Diana",
    description:
      "By 1980, Diana Ross’ tenure with the Supremes had ended a decade earlier, and she had spent the Seventies basking in the glow of her successful film career and soundtrack hits. But she still wanted to shake things up. Her 10th album, Diana, was a Nile Rogers-assisted disco jaunt at a time when disco backlash was running rampant; featuring classics like “Upside Down” and “I’m Coming Out,” it became her biggest and most acclaimed album to date.",
    link: "https://open.spotify.com/album/3zgDLoVcpVGfFbDZJf3uHI",
    image: "https://i.scdn.co/image/ab67616d0000b273abc5193decc1a2984a93f31e",
  },
  {
    rank: 59,
    artist: "Stevie Wonder",
    album: "Talking Book",
    description:
      "“I don’t think you know where I’m coming from,” Wonder warned Motown executives in 1971. “I don’t think you can understand it.” Indeed, the two albums Wonder released in 1972 — Music of My Mind and Talking Book — rewrote the rules of the Motown hit factory. Talking Book was full of introspection and social commentary, with Wonder producing, writing, and playing most of the instruments himself. “Superstition” and “You Are the Sunshine of My Life” were Number One singles; “Big Brother” is political consciousness draped in a light melody: “You’ve killed all our leaders/I don’t even have to do nothin’ to you/You’ll cause your own country to fall.”",
    link: "https://open.spotify.com/album/3PResMqFgQYBfzTnqTKwQw",
    image: "https://i.scdn.co/image/ab67616d0000b273a14b08b9a6616e121df5e8b0",
  },
  {
    rank: 166,
    artist: "Buddy Holly",
    album: "20 Golden Greats",
    description:
      "Buddy Holly spent his teenage years kicking around Texas playing straight country music — until, at 19, when he got a gig opening for Elvis Presley. With that, Holly later claimed, he became a rock & roller. For the next two years, he put his trademark vocal hiccup on springy rockabilly, orchestral ballads, and Chuck Berry covers — an eclecticism that had a huge impact on the future Beatles. “Rave On,” “Peggy Sue,” and “Not Fade Away” made Holly one of rock’s first great singer-songwriters. He was also its first major casualty: dead at 22, in a plane crash after a show in Iowa in 1959.",
    link: "https://open.spotify.com/album/2MwhKwYfaGXfCMNKJQr6VA",
    image: "https://i.scdn.co/image/ab67616d0000b273731f9bfad4ed9881283ed22f",
  },
  {
    rank: 364,
    artist: "Talking Heads",
    album: "More Songs About Buildings and Food",
    description:
      "For their second record, Talking Heads found the ideal producer in Brian Eno: Their trilogy of albums with him made the band’s reputation. David Byrne splutters over the twitchy rhythms of “Artists Only” and “Thank You for Sending Me an Angel,” while crooning “The Big Country” as a ballad about feeling lost in America. The Heads cover Al Green’s “Take Me to the River,” a Memphis R&B hit just a year old at the time that they make feel like some kind of ancient prayer.",
    link: "https://open.spotify.com/album/01RJdKvXyz515O37itqMIJ",
    image: "https://i.scdn.co/image/ab67616d0000b273b7307213fae24e3fbcbe46aa",
  },
];

async function main() {
  console.log("start seeding ...");
  for (const a of albumData) {
    const album = await prisma.album.create({
      data: a,
    });
    console.log(`Created album with id: ${album.id}`);
  }
  console.log("seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    throw e;
  });