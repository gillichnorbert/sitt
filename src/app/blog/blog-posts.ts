export interface BlogSection {
  heading: string;
  paragraphs: string[];
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: 'Sittszállítás' | 'Tehertaxi';
  excerpt: string;
  description: string;
  readingMinutes: number;
  servicePath: string;
  serviceLabel: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'zsakos-sitt-elokeszitese-elszallitasra',
    title: 'Zsákos sitt előkészítése: a rakodásig vezető lépések',
    category: 'Sittszállítás',
    excerpt: 'A zsákolás, az elhelyezés és a kihordás útvonalának átgondolásával áttekinthetőbbé válik a sitt elszállítása. Mutatjuk, mit érdemes előre egyeztetni.',
    description: 'Gyakorlati útmutató a zsákos sitt előkészítéséhez: egyeztetés, zsákolás, elhelyezés, kihordási útvonal és ellenőrzőlista a rakodás előtt.',
    readingMinutes: 4,
    servicePath: '/szolgaltatasok/sittszallitas',
    serviceLabel: 'Zsákos sittszállítás rakodással',
    sections: [
      {
        heading: 'Egyeztesse a feladatot a zsákolás előtt',
        paragraphs: [
          'A felújítás végén a sitt összegyűjtése és a fuvar előkészítése könnyen két külön feladattá válik. Érdemes ezeket együtt átgondolni: hol keletkezik a törmelék, hol várja majd a rakodást, és milyen útvonalon kerülhet ki az ingatlanból? Egy rövid előzetes egyeztetés segít abban, hogy ne kelljen a már összegyűjtött zsákokat többször áthelyezni.',
          'Mondja el a szállítónak, milyen munkából maradt vissza a sitt, és készült-e már róla fénykép. A zsák kiválasztását és a megtöltés módját is egyeztesse, különösen akkor, ha még nem kezdődött el a zsákolás. A TerraMove kérésre a sitt bezsákolását és az emeletről vagy pincéből történő lehordását is vállalja.'
        ]
      },
      {
        heading: 'Tegye áttekinthetővé az elszállítandó mennyiséget',
        paragraphs: [
          'Az elszállításra váró sitt kerüljön egyértelműen elkülönített helyre. A munkához még szükséges anyagok, szerszámok és megtartandó tárgyak maradjanak külön. Így a helyszínen is világos lesz, mi tartozik az egyeztetett feladathoz, és mi marad az ingatlanban.',
          'Ha különböző munkákból származó anyagok vannak a helyszínen, ezt jelezze az egyeztetéskor. Ne tekintse automatikusan azonosnak minden tétel elszállítását. Az elkészült zsákokról és a még bezsákolásra váró részről külön fénykép segíthet, hogy a szállító a teljes feladatot lássa.'
        ]
      },
      {
        heading: 'Gondolja át, hol várják a zsákok a rakodást',
        paragraphs: [
          'A zsákok helyét a kihordás útvonalával együtt érdemes kiválasztani. Maradjon hozzáférhető az ajtó, a lépcső és a használatban lévő helyiségek bejárata. A közlekedési útvonalat ne foglalja el az összegyűjtött sitt, és az elhelyezés ne akadályozza az ingatlan többi használóját.',
          'Ha a szállítást emeleti lakásból vagy pincéből kéri, előre beszélje meg, honnan indul a rakodás. A zsákok önálló lehordását is csak az egyeztetett munkamegosztás alapján tervezze. Így elkerülhető, hogy a szállítás napján a sitt más helyen legyen, mint amire a rakodás szervezése épült.'
        ]
      },
      {
        heading: 'Járja végig a kihordás útvonalát',
        paragraphs: [
          'A helyiség és az épület kijárata közötti útvonalon több apró akadály is lehet: bezárt belső ajtó, keskeny forduló, pincelejáró vagy használaton kívüli folyosószakasz. Nézze át ezeket előre, és készítsen képet azokról a pontokról, amelyeket fontosnak tart a rakodás szempontjából.',
          'A bejutás módját is érdemes tisztázni. Ki nyitja a kaput, kinél van a kulcs, és kit lehet hívni érkezéskor? Ha más is használja a bejáratot, egyeztesse vele a hozzáférést. Az autó lehetséges megállási helyéről és a kijáratig vezető útról is adjon pontos helyszíni információt.',
          'Ha a kihordás olyan helyiségen vezet át, amelyet közben tovább használnak, az időzítést az ott tartózkodókkal is egyeztesse. Tegye félre az útvonalon lévő kisebb tárgyakat, és jelezze a szállítónak az érzékeny felületeket. Az esetleg szükséges védelemről előre beszéljenek, hogy a helyszínen már egyértelmű legyen a feladat.'
        ]
      },
      {
        heading: 'Ellenőrzőlista a szállítás előtti napra',
        paragraphs: [
          'Az előkészítés végén néhány perc alatt áttekinthető, hogy a helyszín megfelel-e a korábban megbeszélteknek. Ha a munka közben változott a mennyiség vagy a sitt helye, még a fuvar előtt jelezze. Egy új fénykép sokszor pontosabban mutatja a változást, mint egy hosszú telefonos magyarázat.'
        ],
        items: [
          'Az elszállítandó zsákok és a megmaradó tárgyak egyértelműen elkülönülnek.',
          'A kapuk, ajtók és a kihordás útvonalának érintett részei hozzáférhetők.',
          'A helyszíni kapcsolattartó ismeri az egyeztetett feladatot, és elérhető lesz.',
          'A zsákolás és a lehordás feladatai előre tisztázottak.',
          'A legutóbbi egyeztetés óta történt változásokról a szállító is tud.'
        ]
      },
      {
        heading: 'Egyeztessen az előkészítés állapotáról',
        paragraphs: [
          'A TerraMove Budapesten és Pest vármegyében végez zsákos sittszállítást kézi rakodással. A szolgáltatás részleteinél a zsákolásról és a lehordásról is talál információt. A feladatot a +36 70 728 7316 telefonszámon egyeztetheti; mondja el, mi készült már el, és mely lépésekhez kér segítséget.'
        ]
      }
    ]
  },
  {
    slug: 'sittszallitas-rendeles-adatok-ellenorzolista',
    title: 'Sittszállítás rendelése: milyen adatokat érdemes megadni?',
    category: 'Sittszállítás',
    excerpt: 'A pontos helyszín, a mennyiség leírása, a fényképek és a rakodási igény együtt mutatják meg a feladatot. Ezzel a listával felkészülhet az egyeztetésre.',
    description: 'Adatlista sittszállítás rendeléséhez: cím, mennyiség, fényképek, emelet, megközelítés, rakodási igény és helyszíni kapcsolattartó.',
    readingMinutes: 4,
    servicePath: '/szolgaltatasok/sittszallitas',
    serviceLabel: 'Sittszállítás és a rakodás egyeztetése',
    sections: [
      {
        heading: 'Mutassa be röviden a teljes feladatot',
        paragraphs: [
          'Sittszállítás rendelésekor az a cél, hogy a helyszínen lévő feladat a szállító számára is jól áttekinthető legyen. Egy cím és egy kívánt időpont mellett azt is érdemes megadni, hol található a sitt, milyen állapotban várja az elszállítást, és milyen segítséget kér a rakodáshoz.',
          'Hasznos nyitómondat lehet a felújítás rövid leírása: melyik helyiségben milyen munka történt, és hol gyűlt össze a törmelék. A bizonytalan adatokat jelölje becslésként. Így az egyeztetés során ki lehet térni azokra a részletekre, amelyekről további információ szükséges.'
        ]
      },
      {
        heading: 'Adja meg a címet és a bejutás módját',
        paragraphs: [
          'A címhez írja oda az épületet, lépcsőházat, emeletet és minden olyan helyszíni támpontot, amely a megérkezést segíti. Egy udvari épület, hátsó bejárat vagy külön pincelejáró fontos részlet lehet. Ha a navigáció a másik utcára vagy kapuhoz vezet, ezt is jelezze.',
          'A rakodáshoz szükséges hozzáférést külön is foglalja össze. Hol lehet megállni, milyen messze van onnan a kijárat, és vannak-e a helyszínen ismert bejutási korlátok? Jelezze, ha a kapu nyitásához vagy valamelyik belső ajtóhoz helyszíni segítség szükséges. Ezekről a körülményekről fényképet is küldhet.'
        ]
      },
      {
        heading: 'Írja le a mennyiséget és a sitt jelenlegi helyét',
        paragraphs: [
          'Ha a sitt már zsákokban van, adja meg a zsákok számát, és készítsen róluk áttekintő képet. Ha még nincs bezsákolva, írja le, mekkora területen található, és mutassa meg több nézetből. A szöveges leírás és a fénykép együtt segít a mennyiség értelmezésében.',
          'Fontos különbség, hogy minden egy helyiségben várja-e az elszállítást, vagy több emeleten, pincében és udvari részen található. A helyeket külön sorolja fel. Ha a felújítás még folyamatban van, mondja el, hogy az egyeztetéshez küldött képek óta várható-e további sitt.',
          'Fényképezéskor egy áttekintő képet és néhány részletet is készítsen. Az üzenetben nevezze meg, melyik kép melyik helyszínt mutatja. Ha több külön helyen gyűlt össze a sitt, a képek sorrendje kövesse a felsorolást, így az egyeztetéskor könnyebb ugyanarra a részre hivatkozni.'
        ]
      },
      {
        heading: 'Tisztázza, melyik munkarészhez kér segítséget',
        paragraphs: [
          'A szállítás, a zsákolás és az épületen belüli kihordás külön egyeztetendő feladatok. Írja le, mi készült már el, és mit szeretne a szállítóval elvégeztetni. Ha emeleti vagy pincei rakodásra van szükség, ezt az első kapcsolatfelvételkor jelezze, a helyszín rövid bemutatásával együtt.',
          'A TerraMove igény szerint a sitt zsákolását, valamint az emeletről vagy pincéből történő lehordását is vállalja. Érdemes külön rákérdezni, milyen előkészítést kérnek a megbeszélt munkához. A feladatok világos felosztásából mindkét fél számára kiderül, milyen állapotú helyszínre kell készülni.'
        ]
      },
      {
        heading: 'Küldjön rövid, áttekinthető üzenetet',
        paragraphs: [
          'Az első megkereséshez az alábbi sorrend könnyen használható. A felsorolás mellé csatoljon áttekintő fényképeket a sittről és a fontos megközelítési pontokról. A képeken lehetőleg ugyanaz a terület szerepeljen, mint amelyet az üzenetben leír, hogy a helyszínek könnyen összekapcsolhatók legyenek.'
        ],
        items: [
          'Pontos cím, épület, lépcsőház, emelet vagy pince megnevezése.',
          'Milyen munkából származik a sitt, és hozzávetőleg mennyi van belőle.',
          'Már bezsákolt vagy még összegyűjtésre váró mennyiségről van-e szó.',
          'Szükség van-e zsákolásra, lehordásra vagy más helyszíni rakodásra.',
          'Kívánt időpont, helyszíni kapcsolattartó és a fontos bejutási tudnivalók.'
        ]
      },
      {
        heading: 'Az időpont előtt frissítse a változó adatokat',
        paragraphs: [
          'A fuvar előtt jelezze, ha változott a mennyiség, a hozzáférés vagy a rakodás kiindulási helye. Ha más lesz a helyszíni kapcsolattartó, adja át neki is a megbeszélt részleteket. Különösen fontos, hogy a jelen lévő személy tudja, mely tételek tartoznak az elszállításhoz.',
          'A TerraMove sittszállítási szolgáltatása Budapesten és Pest vármegyében érhető el. A szolgáltatásoldalon a rakodási lehetőségeket is áttekintheti, majd a +36 70 728 7316 telefonszámon egyeztethet a helyszínről és a feladatról. Az összegyűjtött adatok segítenek célzottan végigbeszélni a rendelést.'
        ]
      }
    ]
  },
  {
    slug: 'tehertaxi-rakodassal-fuvar-elokeszitese',
    title: 'Tehertaxi rakodással: így készítse elő a fuvart',
    category: 'Tehertaxi',
    excerpt: 'A jól szervezett fuvarhoz a rakomány mellett a felvételi és átadási helyet, a rakodás feladatait és a kapcsolattartást is érdemes előre egyeztetni.',
    description: 'Tehertaxi rakodással: rakománylista, felvételi és lerakási cím, hozzáférés, helyszíni feladatok és kapcsolattartás a fuvar előkészítéséhez.',
    readingMinutes: 4,
    servicePath: '/szolgaltatasok/aruszallitas',
    serviceLabel: 'Tehertaxi és áruszállítás rakodással',
    sections: [
      {
        heading: 'A felvételtől az átadásig gondolja végig a feladatot',
        paragraphs: [
          'Tehertaxi rendelésekor a fuvar előkészítése a teljes út átgondolásával kezdődik. Hol található most az áru, ki adja át, hová érkezik, és ott ki veszi át? Ha rakodást is kér, azt is érdemes pontosan megnevezni, honnan és meddig kell eljuttatni a rakományt.',
          'Más szervezést kíván egy bejáratnál átadható csomag és egy emeleti helyiségben váró bútor. A célállomáson ugyanez a kérdés újra felmerül. A két helyszín adatait már az első egyeztetéshez gyűjtse össze, így a szállítás minden része bekerülhet a megbeszélt feladatba.'
        ]
      },
      {
        heading: 'Állítson össze egyszerű rakománylistát',
        paragraphs: [
          'Sorolja fel az elszállítandó tételeket, a darabszámot és a nagyobb tárgyak méreteit. Jelezze, mely elemek vannak külön csomagolva, és melyek maradnak egyben. Fénykép is segíthet, különösen akkor, ha az áru alakját vagy elhelyezkedését nehéz röviden leírni.',
          'Raklapos áru esetén jelezze, hogyan várja a felvételt, és milyen rakodási lehetőség van a helyszínen. Ha az árut üzletből vagy raktárból kell felvenni, tisztázza az átadás feltételeit az eladóval. Az ott megadott átvételi információkat a fuvar egyeztetésekor is adja tovább.'
        ]
      },
      {
        heading: 'Határozza meg a rakodás feladatát mindkét címen',
        paragraphs: [
          'A rakodási igényt érdemes a felvételi és a lerakási címnél külön leírni. Az áru a földszinten, emeleten vagy pincében van? A célhelyen a bejáratig, a lakásba vagy egy meghatározott helyiségbe szeretné kérni? Ezek a részletek a munkamegosztás tisztázását segítik.',
          'A TerraMove kérésre az áru házba vagy lakásba történő bevitelét, valamint emeleti és pincei mozgatását is vállalja. A pontos feladatot és a helyszín adottságait előre szükséges egyeztetni. Ha a bejutásnál szűk ajtó vagy különleges forduló van, küldjön róla képet a méretekkel együtt.'
        ]
      },
      {
        heading: 'Szervezze meg az átadást és az átvételt',
        paragraphs: [
          'Mindkét címen legyen olyan kapcsolattartó, aki ismeri a rakományt és a megbeszélt feladatot. Az átadó tudja, mi kerül az autóra, az átvevő pedig azt, hová kell érkeznie az egyes tételeknek. A helyszíni telefonszámot és a kapunyitás módját a fuvar előtt pontosítsa.',
          'Üzleti vagy raktári átvételnél előfordulhat külön egyeztetett átadási időablak. Ennek adatait még az időpont véglegesítése előtt adja tovább. Ha több megállót szeretne, a címeket és a kívánt sorrendet együtt ismertesse, ahelyett, hogy az új megálló csak a rakodáskor derülne ki.',
          'Ha egy beszerzésnek csak bizonyos tételeit kell felvenni, készítsen külön listát a fuvarhoz tartozó csomagokról. Az átadónak ezt a listát küldje el, és az átvételhez szükséges azonosítót is egyeztesse vele. Ha valami még nincs összekészítve, arról a szállító még az indulás tervezése előtt tudjon.'
        ]
      },
      {
        heading: 'Ellenőrizze a helyszínek hozzáférhetőségét',
        paragraphs: [
          'A szállítás előtt érdemes röviden végigellenőrizni mindkét helyszínt. A rakomány ténylegesen átvehető-e a megbeszélt időben, a kapu nyitható-e, és a célhelyen rendelkezésre áll-e a szükséges fogadóterület? A még nyitott kérdéseket a kapcsolattartókkal együtt tisztázza.',
          'Ha a két helyszínen külön személy intézi a bejutást, adja át mindkettőjüknek a rájuk vonatkozó feladatokat. A rakodás helyéről készített képeket is ossza meg velük, így az átadáskor ugyanazokat a pontokat tudják megmutatni.'
        ],
        items: [
          'Az átadó és az átvevő ugyanazt a rakománylistát ismeri.',
          'A nagyobb tárgyak mérete és a fontos megközelítési adatok megvannak.',
          'A rakodás kiindulási és végpontja mindkét címen egyértelmű.',
          'Az áru az egyeztetett állapotban várja a szállítást.',
          'A helyszíni kapcsolattartók tudnak az időpontról, és elérhetők lesznek.'
        ]
      },
      {
        heading: 'Egyeztessen a fuvar részleteiről',
        paragraphs: [
          'A TerraMove tehertaxi és áruszállítás szolgáltatása Budapesten és Pest vármegyében vehető igénybe. A szolgáltatásoldalon a szállítható árukról és a rakodási lehetőségekről is talál tájékoztatást. A +36 70 728 7316 telefonszámon a felvételi hely, a célállomás és a rakomány bemutatásával kezdheti az egyeztetést.'
        ]
      }
    ]
  },
  {
    slug: 'butor-epitoanyag-szallitas-csomagolas-bejutas',
    title: 'Bútor és építőanyag szállítása: csomagolás és bejutás',
    category: 'Tehertaxi',
    excerpt: 'A külső méret, a csomagolás és a helyszíni útvonal együtt határozza meg az előkészítést. Ezeket érdemes ellenőrizni a rakodás előtt.',
    description: 'Bútorok és építőanyagok szállításának előkészítése: méretek, csomagolás, sérülékeny részek, ajtók, lépcsőfordulók és a lerakási hely ellenőrzése.',
    readingMinutes: 4,
    servicePath: '/szolgaltatasok/aruszallitas',
    serviceLabel: 'Bútorok és építőanyagok szállításának egyeztetése',
    sections: [
      {
        heading: 'A csomagolt mérettel tervezzen',
        paragraphs: [
          'Egy bútor vagy építőanyag szállításánál a tárgy mérete mellett a csomagolást és a bejutás útvonalát is át kell tekinteni. A termék üzletben megadott mérete eltérhet a becsomagolt rakomány helyigényétől. A fuvarhoz az átadáskor ténylegesen látható állapotból érdemes kiindulni.',
          'Mérje meg a nagyobb tételek külső méreteit, és jelezze, mi marad egyben, illetve mi van külön csomagban. Ha az eladó készíti elő az árut, kérdezze meg a csomagok számát és méretét. Ezeket az adatokat a felvételi helyről készült fényképpel együtt adja tovább.'
        ]
      },
      {
        heading: 'Készítse elő a bútor különálló részeit',
        paragraphs: [
          'A bútor belsejéből vegye ki a szállításhoz nem tartozó személyes tárgyakat. Jelezze, ha külön polcok, fiókok, ajtók vagy más mozgatható elemek is tartoznak hozzá. A szétszerelés szükségességét és azt, hogy ki végzi el, még a rakodás előtt tisztázza az érintettekkel.',
          'A különálló részek kapjanak egyértelmű jelölést, hogy a célhelyen is összetartozó egységként lehessen átadni őket. Ha kötőelemeket különítenek el, azok is azonosítható csomagba kerüljenek. Az üvegfelületeket, kiálló részeket és már meglévő sérüléseket az egyeztetéskor külön mutassa meg, lehetőleg fényképen is.'
        ]
      },
      {
        heading: 'Az építőanyag csomagolását az átadásig őrizze meg',
        paragraphs: [
          'Új építőanyag átvételekor célszerű megőrizni a termék azonosítását és kezelését segítő gyári jelöléseket. A csomagolás módjánál a gyártó útmutatása legyen az irányadó. Ha valamelyik csomag már felbontott, sérült vagy hiányos, ezt a fuvar egyeztetésekor is jelezze.',
          'Raklapos vagy több csomagból álló áru esetén készítsen tétellistát. Az átadáskor legyen egyértelmű, mely csomagok tartoznak a megrendeléshez, és van-e köztük külön kezelést igénylő tétel. A helyszíni rakodás lehetőségeiről az eladóval és a szállítóval is egyeztessen; a szükséges eszközök meglétét előre tisztázzák.'
        ]
      },
      {
        heading: 'Mérje fel az ajtókat és a fordulókat',
        paragraphs: [
          'A bejárati ajtó szélessége csak egy pontja a bejutásnak. A kapu, az előtér, a belső ajtók és a lépcsőfordulók együtt alkotják az útvonalat. Egy hosszabb vagy nehezen elfordítható tárgynál az út közbeni irányváltás is lényeges, ezért a helyszínről több nézetből készítsen képet.',
          'Ha liftet terveznek használni, a hozzáférést és a rendelkezésre álló belső teret is előre szükséges egyeztetni. A felvételi és az átadási címen egyaránt ellenőrizze az érintett pontokat. Ha valamelyik méret bizonytalan, jelezze ezt; egyetlen adatból ne következtessen a teljes útvonal járhatóságára.'
        ]
      },
      {
        heading: 'Jelölje ki a fogadóhelyet is',
        paragraphs: [
          'A célhelyen még az érkezés előtt döntse el, hová kerülnek a bútorok és az anyagok. A közlekedéshez szükséges útvonal maradjon hozzáférhető, és a kapcsolattartó ismerje az elhelyezési tervet. Ha a szállítás több helyiséget érint, ezt a rakodás egyeztetésekor jelezze.',
          'Ha a bútorok és az építőanyagok külön helyiségbe kerülnek, készítsen rövid helyiséglistát a csomagok jelöléseivel együtt. A helyszíni kapcsolattartó ezen tudja megmutatni, melyik tételt hová szeretné elhelyezni. A bejárat és a tervezett lerakási pont közötti útvonalat hagyja szabadon, hogy az elsőként beérkező csomagok mellett a további áru számára is megmaradjon a hozzáférés.'
        ],
        items: [
          'A tárgyak csomagolt külső mérete és darabszáma rendelkezésre áll.',
          'A különálló elemek és a hozzájuk tartozó csomagok azonosíthatók.',
          'A sérülékeny vagy már sérült részekről készült fénykép.',
          'A felvételi és átadási útvonal szűk pontjait előre bemutatták.',
          'A beviteli igény és a célhelyi elhelyezés feladata tisztázott.'
        ]
      },
      {
        heading: 'A rakomány állapotát a szállítóval is beszélje át',
        paragraphs: [
          'A TerraMove bútorok, raklapos áruk és építőanyagok szállítását is vállalja Budapesten és Pest vármegyében, igény szerint rakodással. A szolgáltatás részleteit az áruszállítás oldalán tekintheti meg. A +36 70 728 7316 telefonszámon a méretek, a csomagolás és a két helyszín ismertetésével egyeztethet a konkrét fuvarról.'
        ]
      }
    ]
  }
];
