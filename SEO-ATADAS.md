# TerraMove – SEO átadás

## Aktuális Search Console és SEO állapot – 2026. október 9.

- Az egyedi URL-ellenőrzések szerint mind a hét nyilvános oldal indexelve van: `/`, `/szolgaltatasok`, `/szolgaltatasok/sittszallitas`, `/szolgaltatasok/aruszallitas`, `/szolgaltatasok/foldmunka`, `/araink`, `/galeria`. Az indexelési összesítő október 4-i állapota régebbi ennél az ellenőrzésnél.
- A `https://terramove.hu/sitemap.xml` riportja október 9-én sikeres feldolgozást és 7 URL-t mutatott.
- A 28 napos, 2026. szeptember 9. – október 6. közötti teljesítmény: 2 kattintás, 140 megjelenés. A galéria 98 megjelenést és 0 kattintást kapott; a galériára szűrt, látható `terramove` lekérdezésnél 23 megjelenés szerepelt.
- A megtekintett, személyre szabott Google `TerraMove` találat a főoldalt és a sittszállítás, áruszállítás, földmunka aloldalakra mutató sitelinkeket mutatta. Ez az adott keresés megfigyelése; nem igazolja, hogy minden felhasználó ugyanazt látja.
- A főoldal és a sittszállítás oldalának jóváhagyott főcímei és bevezetői, valamint a sittszállítás oldal árakra és áruszállításra mutató blokkja elkészült. E korábbi változat build-, SEO-, hosting- és HTTP-ellenőrzése sikeres volt; böngészős ellenőrzés történt a főoldalon 1280, a sittszállítás oldalán 390 és 320 képpontos szélességen.
- A galériába mindhárom jóváhagyott szolgáltatáslink bekerült: sittszállítás és lomtalanítás, gépi földmunka, tehertaxi és áruszállítás. Az áruszállítás kategória hibás, jelenleg nem megjelenített leírása is javítva lett.
- A három szolgáltatási oldal aktív címsorai natív H1–H2–H3 szerkezetet kaptak. A szövegek és a megjelenés változatlanok; az eredeti betűméreteket a meglévő stílusok és Bootstrap méretosztályok őrzik.
- A galéria 16 bélyegképéhez külön, kisebb képfájl készült. A 16 új bélyegképfájl együttes mérete 116 746 bájt, a helyettük korábban bélyegképként betöltött 16 eredeti képfájl összege 12 809 970 bájt. Ez kizárólag a 16 bélyegképfájl összehasonlítása, nem a teljes oldal letöltési mérete. Az eredeti nagy képek változatlanok.
- A legfrissebb, címsorokat és bélyegképeket is tartalmazó változat build-, SEO-, hosting- és HTTP-ellenőrzése sikeres. A böngészőben mindhárom galérialink a megfelelő oldalra vezetett; a páros és az egyképes referencia közötti váltás, a csúszka és a betöltésjelzés működött, konzolhiba nem jelentkezett. A három szolgáltatási oldalon 31 címsor szövege és számított betű-/margóstílusa egyezett a technikai rendezés előtti állapottal.
- Az új, külön lomtalanítás-oldalt a felhasználó elvetette: a javaslat nem került a forrásba, az útvonalak vagy a metaadatok közé. Kerületi/települési oldalak és új ármagyarázó oldalak további kérésig nem készülnek. A jelenlegi javítási kör a meglévő hét oldalt érinti.
- A javítások a `codex/terramove-service-seo` tesztág `f4c744b` commitjába kerültek, az ág feltöltve. A Vercel előnézeti telepítés `Ready` állapotú: `https://sitt-g0bw2sda3-gillichnorberts-projects.vercel.app/`. Bejelentkezett böngészőben mind a hét oldal megfelelő címe és H1-e, a három galérialink, a `/kezdolap?utm_source=seo-preview` átirányítása a paraméter megtartásával, a záró perjel normalizálása és a megszüntetett/ismeretlen oldalak hibaoldala ellenőrizve. A telepítés belépési védelme miatt anonim HTTP-státuszokat az előnézeten nem ellenőriztünk; ez élesítés utáni feladat. A Search Console-mérési feljegyzést tartalmazó jelen dokumentum helyi módosítása nincs e commitban. Élesítés, domain-/DNS-módosítás és Search Console-beli indexelési vagy újraküldési kérelem nem történt.
- A sitemap már sikeres és mind a hét URL indexelve van, ezért nincs szükség ismételt beküldésre. Élesítés után a módosított URL-eket kell ellenőrizni; új indexelési kérelem csak akkor indokolt, ha az ellenőrzés még a korábbi verziót mutatja.

A fenti adatok a megtekintett Search Console-riportból és keresésből származnak. Értelmezésükhöz hivatalos Google-dokumentáció: [URL-ellenőrzés](https://support.google.com/webmasters/answer/9012289?hl=hu), [teljesítményjelentés](https://support.google.com/webmasters/answer/7576553?hl=hu), [sitemapek](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [sitelinkek](https://developers.google.com/search/docs/appearance/sitelinks).

## Korábbi elkészült változat – 2026. október 6. (történeti állapot)

Ez a rész az október 6-i átadást rögzíti; az azóta jóváhagyott módosítások aktuális állapota fent olvasható.

Nincs tudástár vagy cikkoldal. A kalkulátor nem szerepel a routerben, a sitemapben, a menükben, a linkekben vagy a kiadott JavaScript-csomagban. A `/kalkulator`, `/tudastar` és korábbi cikkcímek a Node-szerveren 404-es, noindex hibaoldalt adnak. A kalkulátor eredeti forrása megmaradt későbbi fejlesztéshez, de nyilvános vagy belső webes felület nem tartozik hozzá.

Hét nyilvános oldal maradt: főoldal, szolgáltatások, sittszállítás, áruszállítás, földmunka, árak, galéria. Egyedi címek és leírások, kanonikus URL-ek, megosztási metaadatok, strukturált adatok és előrenderelt HTML szolgálták a kereshetőséget. Az október 6-i változat megjelenése és látható szövegei az eredeti feltöltéshez igazodtak. Abból a változatból az utólag hozzáadott szolgáltatásoldali blokkok, linklisták és gombok kikerültek. A főoldal meglévő területi megnevezése Pest vármegyére lett egységesítve. Akkor a CSS-fájlok az eredetivel azonosak voltak.

Megmaradt a javított sitemap, robots.txt, 301-es átirányítás és valódi 404-kezelés, az aloldalak külön betöltése, a főoldali kép előtöltése és a képek késleltetett betöltése. A meglévő analitikához telefon/e-mail `contact_click` esemény tartozik; ez nem igazol tényleges hívást. Kitalált céges cím, koordináta, értékelés vagy nyitvatartás nem került a strukturált adatokba.

## Telepítés

Az október 6-i átadás ZIP-je teljes módosított forrásprojektet tartalmazott, függőségek és generált build nélkül. Ez a korábbi csomag nem jelenti az október 9-i módosítások átadását vagy élesítését. Az éles weboldal nem módosult. Node.js 22 LTS ajánlott.

```sh
npm ci
npm run build
npm run check:seo
npm run check:http
npm run check:hosting
npm run serve:ssr:sitt-transport
```

A tesztekhez Python 3 szükséges. A build automatikusan törli a projekt korábbi generált kimenetét, így nem marad benne megszüntetett oldal. A Node-szerver portja alapból 4000, a PORT változóval módosítható.

Statikus tárhelyre a build után a `dist/sitt-transport/browser` tartalma kerül. Ismert URL esetén a saját előrenderelt index.html, ismeretlen URL esetén HTTP 404 és a mellékelt 404.html legyen kiszolgálva. A Vercelhez előkészített `vercel.json` tartalmazza a `/kezdolap` → `/` és az ismert oldalak záró perjeles címeinek 301-es átirányítását; más statikus tárhelyen ezek külön beállítást igényelnek. A HTTPS és www → nem-www domainátirányítás a tárhely/CDN feladata. Kanonikus domain: https://terramove.hu.

**Teljes buildcserével telepítsen:** a régi kalkulator/ és tudastar/ könyvtárakat, illetve korábbi JavaScript-fájlokat is törölje a publikált könyvtárból. Az új fájlok egyszerű ráírása meghagyhatja a régi kalkulátort. Frissítse a CDN-cache-t is. A forrásprojektet ne tegye a nyilvános webkönyvtárba. A kalkulátor későbbi belső használatához külön, hitelesített felület szükséges.

## Ellenőrzés és korlátok

### Vercel tárhelyjavítás – 2026. október 9., még nincs élesítve

A projekt gyökerében elkészült a `vercel.json`. Az „Other” keretrendszer-beállítás a `dist/sitt-transport/browser` statikus, előrenderelt tartalmát teszi közzé; a Node-szerver forrása és működése megmarad. A build `npm ci` után `npm run build && npm run check:hosting` paranccsal készül. A hét ismert URL a saját HTML-fájlját kapja. A `/kezdolap`, az ismert oldalak záró perjeles címei és közvetlen `index.html` változatai 301-es választ adnak a kanonikus címre, a kérés paramétereinek megőrzésével.

A valódi statikus fájlokat a tárhely fájlrendszer-ellenőrzése szolgálja ki. Ismeretlen, megszüntetett vagy hibás cím esetén a meglévő `404.html` HTTP 404 státusszal és `noindex` jelzéssel jelenik meg. Nincs általános, minden címet a főoldalra átíró SPA-szabály vagy fájlkiterjesztés alapján történő hamis „asset” felismerés. A discovery fájlok közvetlen statikus fájlok maradnak; a `.well-known` címekre nem kerül átírás.

A `npm run check:hosting` helyben a konfiguráció útvonalait és a tényleges build fájljait ellenőrzi: mind a hét oldal, a 301-es címek, a kérésparaméterek, megszüntetett/ismeretlen/hibás URL-ek, hiányzó képek és kódfájlok, illetve minden meglévő statikus fájl és a discovery dokumentumok tartalomtípusa szerepel benne. Ez helyi útvonal-szimuláció, nem az éles Vercel működésének igazolása. Az előnézeti Vercel telepítésen is ellenőrizni kell a HTTP-válaszokat. **A tesztág feltöltve; élesítés és Vercel-fiókbeállítás módosítása még nem történt.**

A Vercel-fiók október 9-i, csak megtekintést végző ellenőrzése szerint a tárhelyprojekt neve `sitt`; az aktuális Production változat a `main` ág `3960718` commitjához tartozik. A projekthez kizárólag a `terramove.hu` domain van rendelve, `Valid Configuration` állapottal. A `www.terramove.hu` nincs a projekt domainjeihez rendelve. Ez az ellenőrzés nem módosított fiókot, telepítést vagy DNS-beállítást.

A `www.terramove.hu` tanúsítványának javítása külön Vercel Domains/DNS-feladat. A nyilvános DNS-ben a `www` CNAME már `cname.vercel-dns.com.`, az apex A rekord `216.198.79.1`; a címek Vercelre mutatnak. A Vercel felületén mentés nélkül előkészített beállítás: kizárólag `www.terramove.hu` hozzáadása, `301 Moved Permanently` átirányítás `terramove.hu` célra. Az apex/www páros automatikus hozzáadása kikapcsolva, hogy a meglévő fődomain beállítása ne változzon. Jóváhagyás után a hozzárendelést, a tanúsítvány létrejöttét és a tényleges HTTPS-átirányítást ellenőrizni kell; DNS-módosítás csak a tárhely által jelzett szükség esetén kell. A HTTPS-tanúsítvány hibája HTTP-útvonalszabállyal nem oldható meg. A tervezet nincs elmentve, a fiók és a DNS nem módosult.

Hivatalos források: [Vercel konfiguráció](https://vercel.com/docs/project-configuration/vercel-json), [útvonal-fázisok és HTTP-státusz](https://vercel.com/docs/build-output-api/configuration), [domainátirányítás](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting).

A mellékelt tesztek vizsgálják az egyedi címeket/leírásokat, első szintű címsorokat (H1 vagy ARIA heading level 1), kanonikus és megosztási URL-eket, JSON-LD-t, képeket és belső linkeket. Külön ellenőrzik a megszüntetett oldalak, nyilvános linkjeik és a kalkulátorkomponens hiányát, a 404/noindex válaszokat és a 301-es átirányításokat.

Az október 6-i helyi build Node 24 alatt, a környezetből hiányzó memóriastatisztikát kezelő külön tesztharness segítségével futott. Ez nem része az alkalmazásnak. Akkor Chromium hiányában vizuális böngészőteszt és GA4-beérkezési teszt nem történt. Az október 9-i böngészős ellenőrzések aktuális állapota a dokumentum elején szerepel. A Bootstrap és komponensstílusok miatt maradtak nem blokkoló méret- és CSS-figyelmeztetések. Éles Core Web Vitals eredményt nem állítunk.

## Organikus növekedés a meglévő oldalakkal

- A sitemap sikeresen feldolgozott 7 URL-t, és mind a hét oldal indexelt. Élesítés után a módosított URL-ek Search Console-ellenőrzésével kövesse a frissülést; új indexelési kérelmet csak indokolt esetben, még a korábbi verziót mutató állapotnál küldjön.
- Google Cégprofilon legyen egységes a név, telefonszám, webcím, valós szolgáltatási terület és szolgáltatáslista.
- A galériát saját munkafotókkal, tényszerű leírásokkal frissítse. Valódi munkáknál a település/kerület és a feladat bemutatása hasznos helyi információ. Ügyféladatot csak engedéllyel tegyen közzé.
- Kérjen őszinte ügyfélértékeléseket. Saját munkákról készült közösségi bejegyzések a megfelelő szolgáltatásoldalra mutassanak.
- Havonta mérje a keresési megjelenéseket, kattintásokat és tényleges ajánlatkéréseket. Külön kövesse a megnyert munkákat is.

Az árak áfatartalmát, minimumdíjait, a céges/adatkezelési információkat és a meglévő analitika hozzájárulás-kezelését élesítés előtt az üzemeltető ellenőrizze. Search Console- és Cégprofil-módosítás nem történt. A SEO jobb kereshetőséget készít elő, de helyezés vagy látogatószám nem garantálható.

Forrás: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (2026. október 6.).


## Agent discoverability javítás – 2026. október 6-i állapot

A `public/llms.txt` Markdown H1-et és a hét nyilvános oldalra mutató linkeket tartalmaz. A `public/ai-catalog.json`, `public/.well-known/ai-catalog.json` és `public/.well-known/ard.json` érvényes JSON-dokumentum. A katalógus `entries` listája szándékosan üres: a projekt nem tartalmaz nyilvános AI-ügynököt, MCP-szervert vagy foglalási API-t. A weboldal tartalma az llms.txt-ből fedezhető fel. A fájl nem állít nem létező automatizálási képességet, tanítási engedélyt vagy tiltást.

A Node-szerver kifejezetten kezeli ezeket az útvonalakat, a rejtett `.well-known` könyvtárat is; a HTTP-teszt 200-as választ, a helyes tartalomtípust és HTML helyett szöveget/JSON-t ellenőriz. A build külön másolja a `.well-known` JSON-fájljait. A felület megjelenése nem változott.

Statikus tárhelyre a `.well-known` könyvtárat is fel kell tölteni, és e fájlok kéréseit ki kell venni az esetleges SPA-átírásból. `llms.txt`: text/plain; JSON-fájlok: application/json. Feltöltés után közvetlenül nyissa meg az URL-eket és futtassa újra az auditot. A javítás helyi builden és HTTP-válaszokon lett ellenőrizve; az éles Lighthouse-audit nem futott le. A korábbi Search Console-indexelési állapotok változását ez önmagában nem garantálja.

Hivatkozások: https://llmstxt.org/ ; https://agenticresourcediscovery.org/spec/ ; a katalógus ellenőrzéséhez a GoogleChrome/lighthouse `third-party/ard/spec/schemas/ai-catalog.schema.json` sémája (2026-10-06). Az ARD v0.91 új útvonala az `ard.json`, a Lighthouse régebbi katalógusellenőrzéséhez az `ai-catalog.json` is megmaradt.
