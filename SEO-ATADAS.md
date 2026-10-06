# TerraMove – SEO átadás

## Elkészült változat

Nincs tudástár vagy cikkoldal. A kalkulátor nem szerepel a routerben, a sitemapben, a menükben, a linkekben vagy a kiadott JavaScript-csomagban. A `/kalkulator`, `/tudastar` és korábbi cikkcímek a Node-szerveren 404-es, noindex hibaoldalt adnak. A kalkulátor eredeti forrása megmaradt későbbi fejlesztéshez, de nyilvános vagy belső webes felület nem tartozik hozzá.

Hét nyilvános oldal maradt: főoldal, szolgáltatások, sittszállítás, áruszállítás, földmunka, árak, galéria. Egyedi címek és leírások, kanonikus URL-ek, megosztási metaadatok, strukturált adatok és előrenderelt HTML szolgálják a kereshetőséget. A megjelenés és a látható szövegek az eredeti feltöltéshez igazodnak. Az utólag hozzáadott szolgáltatásoldali blokkok, linklisták és gombok kikerültek. A főoldal meglévő területi megnevezése Pest vármegyére lett egységesítve. A CSS-fájlok az eredetivel azonosak.

Megmaradt a javított sitemap, robots.txt, 301-es átirányítás és valódi 404-kezelés, az aloldalak külön betöltése, a főoldali kép előtöltése és a képek késleltetett betöltése. A meglévő analitikához telefon/e-mail `contact_click` esemény tartozik; ez nem igazol tényleges hívást. Kitalált céges cím, koordináta, értékelés vagy nyitvatartás nem került a strukturált adatokba.

## Telepítés

A ZIP teljes módosított forrásprojekt, függőségek és generált build nélkül. Az éles weboldal nem módosult. Node.js 22 LTS ajánlott.

```sh
npm ci
npm run build
npm run check:seo
npm run check:http
npm run serve:ssr:sitt-transport
```

A tesztekhez Python 3 szükséges. A build automatikusan törli a projekt korábbi generált kimenetét, így nem marad benne megszüntetett oldal. A Node-szerver portja alapból 4000, a PORT változóval módosítható.

Statikus tárhelyre a build után a `dist/sitt-transport/browser` tartalmát töltse fel. Ismert URL esetén a saját előrenderelt index.html, ismeretlen URL esetén HTTP 404 és a mellékelt 404.html legyen kiszolgálva. Statikus tárhelyen külön kell beállítani a `/kezdolap` → `/` és a záró perjeles címek 301-es átirányítását. A HTTPS és www → nem-www átirányítás a tárhely/CDN feladata. Kanonikus domain: https://terramove.hu.

**Teljes buildcserével telepítsen:** a régi kalkulator/ és tudastar/ könyvtárakat, illetve korábbi JavaScript-fájlokat is törölje a publikált könyvtárból. Az új fájlok egyszerű ráírása meghagyhatja a régi kalkulátort. Frissítse a CDN-cache-t is. A forrásprojektet ne tegye a nyilvános webkönyvtárba. A kalkulátor későbbi belső használatához külön, hitelesített felület szükséges.

## Ellenőrzés és korlátok

A mellékelt tesztek vizsgálják az egyedi címeket/leírásokat, első szintű címsorokat (H1 vagy ARIA heading level 1), kanonikus és megosztási URL-eket, JSON-LD-t, képeket és belső linkeket. Külön ellenőrzik a megszüntetett oldalak, nyilvános linkjeik és a kalkulátorkomponens hiányát, a 404/noindex válaszokat és a 301-es átirányításokat.

A helyi build Node 24 alatt, a környezetből hiányzó memóriastatisztikát kezelő külön tesztharness segítségével futott. Ez nem része az alkalmazásnak. Chromium hiányában vizuális böngészőteszt és GA4-beérkezési teszt nem történt. A Bootstrap és komponensstílusok miatt maradtak nem blokkoló méret- és CSS-figyelmeztetések. Éles Core Web Vitals eredményt nem állítunk.

## Organikus növekedés a meglévő oldalakkal

- Élesítés után a Google Search Console-ban küldje be a https://terramove.hu/sitemap.xml címet, és ellenőrizze a főoldal és a szolgáltatások indexelhetőségét.
- Google Cégprofilon legyen egységes a név, telefonszám, webcím, valós szolgáltatási terület és szolgáltatáslista.
- A galériát saját munkafotókkal, tényszerű leírásokkal frissítse. Valódi munkáknál a település/kerület és a feladat bemutatása hasznos helyi információ. Ügyféladatot csak engedéllyel tegyen közzé.
- Kérjen őszinte ügyfélértékeléseket. Saját munkákról készült közösségi bejegyzések a megfelelő szolgáltatásoldalra mutassanak.
- Havonta mérje a keresési megjelenéseket, kattintásokat és tényleges ajánlatkéréseket. Külön kövesse a megnyert munkákat is.

Az árak áfatartalmát, minimumdíjait, a céges/adatkezelési információkat és a meglévő analitika hozzájárulás-kezelését élesítés előtt az üzemeltető ellenőrizze. Search Console- és Cégprofil-módosítás nem történt. A SEO jobb kereshetőséget készít elő, de helyezés vagy látogatószám nem garantálható.

Forrás: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (2026. október 6.).
