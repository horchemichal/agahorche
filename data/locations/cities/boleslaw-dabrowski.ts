import type { CityContent } from "../city-content";
import {
  blokOMnie,
  faqWspolne,
  highlightyStandardowe,
  sekcjaCena,
  sekcjaCoUgotujesz,
  sekcjaRaty,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * BOLESŁAW (POWIAT DĄBROWSKI) — GMINA WIEJSKA.
 * ⭐ NAJMNIEJSZA GMINA POWIATU DĄBROWSKIEGO — i ludnościowo,
 * i powierzchniowo: 2 614 mieszkańców (2025, GUS), 35,7 km².
 * Mediana wieku 42,9; spadek ludności 10,3% od 2002 (od szczytu
 * 2 991 w 1999 — ok. 12%). 9 SOŁECTW.
 *
 * ⚠️⚠️ KOLIZJA NAZW — NAJWAŻNIEJSZA RZECZ NA TEJ STRONIE.
 * W Małopolsce są DWIE gminy Bolesław, obie wiejskie:
 *   — OLKUSKA (7 353 osoby, ~40 km², gminaboleslaw.pl, TERYT
 *     1212022, kod 32-329) — plik `boleslaw.ts`, slug "boleslaw",
 *     oś: bitwa pod Krzykawką 1863 i pomnik Francesco Nullo,
 *   — DĄBROWSKA (ta, 2 614 osób, 35,7 km², boleslaw.com.pl,
 *     TERYT 1204012, kod 33-220, siedziba UG: Bolesław 68) —
 *     slug "boleslaw-dabrowski".
 * OBIE STRONY MUSZĄ SIĘ WZAJEMNIE ODSYŁAĆ — plik `boleslaw.ts`
 * ma o tym notatkę w nagłówku.
 * ⚠️ PUŁAPKI WYSZUKIWANIA: ratusz.pl pod hasłem „Bolesław” pokazuje
 * OLKUSKI; gminaboleslaw.pl to strona OLKUSKA, dąbrowska to
 * boleslaw.com.pl.
 *
 * OŚ STRONY: NAJMNIEJSZA GMINA POWIATU Z NAJGĘSTSZYM DOROBKIEM
 * KULINARNYM. ⭐ DWA Z PIĘCIU WPISÓW LPT POWIŚLA DĄBROWSKIEGO
 * POCHODZĄ Z TEJ JEDNEJ, NAJMNIEJSZEJ GMINY.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐⭐ DWA WPISY NA LIŚCIE PRODUKTÓW TRADYCYJNYCH:
 *   1. „STROJCOWSKIE ZAWIJOKI Z ZIEMNIAKÓW” (sołectwo STROJCÓW) —
 *      zawijane w liść kapusty, z farszem ziemniaczanym,
 *   2. „NADWIŚLAŃSKI OGÓREK KONSERWOWY Z KANNY” (sołectwo KANNA) —
 *      ogórki w zalewie octowej.
 *   Obydwa z szóstki zatwierdzonej przez Radę ds. Produktów
 *   Tradycyjnych w MARCU 2013; wpis LPT 2013.
 *   ⚠️ DOKŁADNEJ DATY DZIENNEJ NIE POTWIERDZONO (dwa inne produkty
 *   z tej samej szóstki mają 18.07.2013),
 * — HISTORIA (boleslaw.com.pl): ślady osadnictwa sprzed OK. 7 TYS.
 *   LAT. Pierwsza wzmianka pisana 1326 (spis świętopietrza),
 *   parafia prawdopodobnie od XII w. 1366 — bracia AWDAŃCOWIE
 *   otrzymali prawo świeckie. Właściciele: LIPIŃSCY i LIGĘZOWIE
 *   (koniec XIV – poł. XVII w.), okres rozkwitu.
 *   ⭐ LUDNOŚĆ PARAFII: 405 (1340) → 3 263 (1664).
 *   ⭐⭐ ZA LIGĘZÓW DZIAŁAŁY: SZKOŁA OD 1508 R., SZPITAL OD 1606 R.,
 *   bractwa religijne 1596–1720.
 *   Potop szwedzki i najazdy pruskie 1709–1711 → upadek gospodarczy.
 *   1772 — Austria. Udział w powstaniach: kościuszkowskim,
 *   listopadowym, krakowskim 1846, styczniowym. Przełom XIX/XX w.:
 *   emigracja do Ameryki, ruch ludowy. POWÓDŹ 1934.
 *   1914 — przemarsz Józefa Piłsudskiego,
 * — ZABYTKI: kościół par. ŚW. WOJCIECHA — budowa 1605–1634,
 *   z KAPLICĄ GROBOWĄ LIGĘZÓW Z 1605 R. (najcenniejszy element).
 *   DWOREK SROCZYŃSKICH (koniec XVIII w., pierwotnie klasycystyczny,
 *   mocno przebudowany w latach 60. XX w.). Kościół św. Bartłomieja
 *   w SAMOCICACH (1937). Murowana kapliczka MB Różańcowej
 *   w KANNIE (1871). Kwatera poległych z I wojny (1923); pomniki
 *   II wojny w Bolesławiu, Świebodzinie i Toni,
 * — 9 SOŁECTW: Bolesław, Kanna, Kuzie, Pawłów, Podlipie, Samocice,
 *   Strojców, Świebodzin, Tonia,
 * — SĄSIEDZI: Gręboszów, Mędrzechów, NOWY KORCZYN (świętokrzyskie),
 *   Olesno. ~15 km na płn.-zach. od Dąbrowy Tarnowskiej,
 *   ~73 km na wschód od Krakowa,
 * — ⚠️ WSPÓŁRZĘDNE: ok. 50,2732 / 20,8997 — POJEDYNCZE ŹRÓDŁO
 *   (Targeo), warto potwierdzić.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY PODMIOTÓW REGON. Nie potwierdzono,
 * — NAZWANYCH PRACODAWCÓW. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (11,4%, 7 161,93 zł).
 *   ⚠️ „Szacunkowa” stopa 7,5% z Polski w Liczbach to SZACUNEK
 *   SERWISU, nie dane GUS. NIE UŻYWAĆ,
 * — RUCHU PASAŻERSKIEGO KOLEJĄ. W całym powiecie go nie ma,
 * — ⚠️ WSZYSTKIEGO, CO DOTYCZY BOLESŁAWIA OLKUSKIEGO: cynku, ołowiu,
 *   ZGH „Bolesław”, bitwy pod Krzykawką, Francesco Nullo.
 *   TO INNA GMINA.
 */

export const BOLESLAW_DABROWSKI: CityContent = {
  slug: "boleslaw-dabrowski",
  h1: "Thermomix Bolesław (powiat dąbrowski) – prezentacja i zakup",
  seoTitle: "Przedstawiciel Thermomix Bolesław k. Dąbrowy Tarnowskiej",
  seoDescription:
    "Thermomix w gminie Bolesław w powiecie dąbrowskim: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bolesław k. Dąbrowy — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Bolesław w powiecie dąbrowskim. Gotujemy razem u Ciebie, dojazd bez dopłat.",

  lead: "Do Bolesławia w powiecie dąbrowskim — tego nad Wisłą, koło Dąbrowy Tarnowskiej — i do wszystkich dziewięciu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dziewięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Bolesław – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Najmniejsza gmina powiatu z dwoma wpisami w rejestrze",
      paragraphs: [
        "Bolesław jest najmniejszą gminą powiatu dąbrowskiego — i pod względem liczby mieszkańców, i powierzchni. Dwa tysiące sześćset czternaście osób na trzydziestu sześciu kilometrach kwadratowych, dziewięć sołectw i ani jednego miasta.",
        "A jednocześnie dwa z pięciu produktów Powiśla Dąbrowskiego wpisanych na ministerialną Listę Produktów Tradycyjnych pochodzą właśnie stąd. Strojcowskie zawijoki z ziemniaków — z sołectwa Strojców — i nadwiślański ogórek konserwowy z Kanny. Obydwa zatwierdzono w marcu dwa tysiące trzynastego roku.",
        "To najgęstszy dorobek kulinarny w całym powiecie, przeliczony na mieszkańca. Dwie wsie, z których każda ma coś w rejestrze — w gminie, w której mieszka mniej ludzi niż w niejednym osiedlu.",
        "Historia jest tu nieproporcjonalnie długa do dzisiejszej wielkości. Ślady osadnictwa sięgają siedmiu tysięcy lat, pierwsza wzmianka pisemna pochodzi z tysiąc trzysta dwudziestego szóstego roku ze spisu świętopietrza, a parafia istniała prawdopodobnie już w dwunastym wieku. W tysiąc trzysta sześćdziesiątym szóstym bracia Awdańcowie otrzymali tu prawo świeckie.",
        "Największy rozkwit przyszedł za Lipińskich i Ligęzów, od końca czternastego do połowy siedemnastego wieku. Liczby mówią same za siebie: w tysiąc trzysta czterdziestym parafia liczyła czterysta pięć osób, w tysiąc sześćset sześćdziesiątym czwartym — trzy tysiące dwieście sześćdziesiąt trzy. Osiem razy więcej.",
        "I dwie daty, które o tamtym okresie mówią najwięcej. Szkoła działała tu od tysiąc pięćset ósmego roku, a szpital od tysiąc sześćset szóstego. W wiejskiej parafii, w szesnastym i siedemnastym wieku. Z tamtych czasów pochodzi też kościół świętego Wojciecha, budowany w latach tysiąc sześćset piątym–trzydziestym czwartym, z kaplicą grobową Ligęzów z tysiąc sześćset piątego — najcenniejszym zabytkiem gminy.",
        "Potem przyszedł potop szwedzki i najazdy pruskie na początku osiemnastego wieku, a po nich upadek gospodarczy, z którego gmina już nie wróciła do dawnej skali. Na przełomie dziewiętnastego i dwudziestego wieku ludzie emigrowali stąd do Ameryki.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Bolesław?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, że chodzi o Bolesław w powiecie dąbrowskim, koło Dąbrowy Tarnowskiej. W Małopolsce są dwie gminy o tej nazwie i druga leży w powiecie olkuskim, ponad sto kilometrów stąd. Do obu dojeżdżam, ale wolę nie pomylić kierunku.",
        "Podaj też sołectwo — jest ich dziewięć: Bolesław, Kanna, Kuzie, Pawłów, Podlipie, Samocice, Strojców, Świebodzin i Tonia. Gmina jest niewielka, więc trasa jest krótka niezależnie od odpowiedzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/boleslaw",
          label: "Szukasz Bolesławia w powiecie olkuskim? Tu jest jego strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Bolesław"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dwa i pół tysiąca osób w dziewięciu wsiach",
      paragraphs: [
        "Bolesław liczy dziś dwa tysiące sześćset mieszkańców, choć w tysiąc dziewięćset dziewięćdziesiątym dziewiątym roku miał blisko trzy tysiące. Mediana wieku wynosi prawie czterdzieści trzy lata. To gmina rolnicza, bez miasta i bez zakładu, do którego chodzi się do pracy.",
        "Praca jest więc w Dąbrowie Tarnowskiej, w Tarnowie albo dalej — i do tego dochodzi gospodarstwo, które w większości domów jest realnym drugim zajęciem, a nie hobby. Dzień składa się z dojazdu, pracy i roboty w polu albo przy zwierzętach po powrocie.",
        "Kuchnia musi się zmieścić w tym, co zostanie, a przy tym obsłużyć to, co przynosi ogród i pole. Tu leży cała rzecz: w takiej gminie gotowanie i przetwarzanie to jedno i to samo zajęcie. Robi się przetwory, bo warzywa są, a nie dlatego, że tak wypada.",
        "Najbardziej praktyczna rzecz jest przy tym dwojaka. Na co dzień — danie jednogarnkowe, które wstawia się rano i wychodzi; gotuje się bez pilnowania, samo się wyłącza i czeka do wieczora. A sezonowo — przetwory: powidła, przeciery, musy i sosy, przy których cała robota polega na długim mieszaniu w cieple, żeby nic nie przywarło.",
        "To drugie urządzenie robi bez człowieka, w stałej temperaturze. Przy gminie, w której jedna wieś ma w rejestrze własny przepis na ogórki, a druga na zawijoki, to nie jest wygoda z folderu, tylko konkretne odciążenie w sierpniu i wrześniu.",
        "Trzecia rzecz dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto jest w domu wcześniej. Przy dojazdach do pracy i robocie w gospodarstwie to bywa realnym odciążeniem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Zawijoki ze Strojcowa i ogórki z Kanny",
    paragraphs: [
      "Ta gmina ma na ministerialnej Liście Produktów Tradycyjnych dwa wpisy — i to jest, przeliczając na mieszkańca, najgęstszy dorobek kulinarny w całym powiecie dąbrowskim. Obydwa produkty zatwierdziła Rada do spraw Produktów Tradycyjnych w marcu dwa tysiące trzynastego roku.",
      "Pierwszy to strojcowskie zawijoki z ziemniaków, z sołectwa Strojców. Farsz ziemniaczany zawija się w liść kapusty — to danie z tej samej rodziny co gołąbki, tylko bez mięsa, bo mięsa w gospodarstwie było mało, a ziemniaków i kapusty dużo.",
      "Drugi to nadwiślański ogórek konserwowy z Kanny — ogórki w zalewie octowej. Kiszenie i konserwowanie w tej okolicy nie było wyborem smaku, tylko sposobem przechowania warzyw do wiosny; wieś leży na żyznej ziemi nadwiślańskiej, więc ogórków było zawsze pod dostatkiem.",
      "Poza tym gotuje się tu jak w całym Powiślu: kapusta, ziemniaki, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe. Wszystko oparte na tym, co daje własne pole.",
      "Dla urządzenia najciekawsze są w takiej kuchni dwie rzeczy. Farsze — bo zawijoki, gołąbki i pierogi zaczynają się od rozdrobnienia i wymieszania, a to trwa kilkanaście sekund zamiast kwadransa. I przetwory — powidła, przeciery, sosy, robione seriami we wrześniu, przy których urządzenie miesza samo i pilnuje, żeby nic nie przywarło. Czego nie zrobi, mówię wprost: nie zawinie zawijoka w liść kapusty i nie zakręci słoika. Zabiera przygotowanie, a rzemiosło zostawia Wam.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Bolesław dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewięciu, bez żadnej dopłaty za odległość. Gmina liczy dwa tysiące sześćset mieszkańców na trzydziestu sześciu kilometrach kwadratowych i jest najmniejsza w powiecie dąbrowskim — zarówno pod względem ludności, jak i powierzchni.",
    "Sołectwa to: Bolesław, Kanna, Kuzie, Pawłów, Podlipie, Samocice, Strojców, Świebodzin i Tonia. Dwa z nich mają własne wpisy na ministerialnej Liście Produktów Tradycyjnych: Strojców za zawijoki z ziemniaków, Kanna za ogórki konserwowe.",
    "Najcenniejszym zabytkiem jest kościół świętego Wojciecha, budowany w latach tysiąc sześćset piątym–trzydziestym czwartym, z kaplicą grobową Ligęzów z tysiąc sześćset piątego roku. W Samocicach stoi kościół świętego Bartłomieja z tysiąc dziewięćset trzydziestego siódmego, a w Kannie murowana kapliczka Matki Bożej Różańcowej z tysiąc osiemset siedemdziesiątego pierwszego. Zachował się też dworek Sroczyńskich z końca osiemnastego wieku, mocno przebudowany w latach sześćdziesiątych dwudziestego.",
    "Warto wiedzieć, że w szesnastym i siedemnastym wieku ta wiejska parafia miała własną szkołę — od tysiąc pięćset ósmego roku — i szpital, od tysiąc sześćset szóstego.",
    "Dojazd: kolei pasażerskiej w powiecie dąbrowskim nie ma. Do Dąbrowy Tarnowskiej jest stąd około piętnastu kilometrów, do Krakowa siedemdziesiąt trzy. Od północy gmina sąsiaduje z Nowym Korczynem w województwie świętokrzyskim.",
  ],
  districts: [
    "Bolesław",
    "Kanna",
    "Strojców",
    "Samocice",
    "Świebodzin",
    "Pawłów i Podlipie",
    "Kuzie i Tonia",
  ],

  nearbyHeading: "Gręboszów, Mędrzechów i Olesno też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Gręboszowem, Mędrzechowem, Oleśnem i — od północy, przez Wisłę — z Nowym Korczynem w województwie świętokrzyskim. Dojeżdżam do wszystkich gmin powiatu dąbrowskiego bez doliczania kosztu dojazdu.",
    "I jedno rozróżnienie, bo bywa mylące: to Bolesław w powiecie dąbrowskim, nad Wisłą. Drugi Bolesław leży w powiecie olkuskim, ma ponad siedem tysięcy mieszkańców i zupełnie inną historię — cynku, ołowiu i bitwy pod Krzykawką. Dojeżdżam i tam, i tu, ale to dwie różne gminy.",
  ],
  nearbyTowns: [
    "Gręboszów",
    "Mędrzechów",
    "Olesno",
    "Szczucin",
    "Dąbrowa Tarnowska",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Bolesław", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "Są dwie gminy Bolesław. O którą chodzi na tej stronie?",
      answer:
        "O tę w powiecie dąbrowskim, nad Wisłą, jakieś piętnaście kilometrów od Dąbrowy Tarnowskiej. Drugi Bolesław jest w powiecie olkuskim, ma ponad siedem tysięcy mieszkańców i związany jest z górnictwem cynku i ołowiu. Dojeżdżam do obu gmin, ale przy umawianiu powiedz proszę, o którą chodzi — dzieli je ponad sto kilometrów.",
    },
    ...faqWspolne("w gminie Bolesław"),
    {
      question: "Robimy dużo przetworów. To urządzenie w tym pomoże?",
      answer:
        "Pomoże i to jest w Waszej gminie chyba jego najmocniejsza strona. Przy powidłach, przecierach i sosach cała robota polega na długim mieszaniu w cieple, żeby nic nie przywarło — urządzenie prowadzi to bez człowieka, w stałej temperaturze, i samo się wyłącza. Do tego rozdrabnia farsze do zawijoków w kilkanaście sekund. Słoika za Was nie zakręci i zawijoka nie zawinie, ale całą męczącą część bierze na siebie.",
    },
  ],

  geo: { lat: 50.2732, lng: 20.8997 },
};
