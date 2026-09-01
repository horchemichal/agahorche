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
 * LIPINKI — GMINA WIEJSKA w powiecie gorlickim.
 * 6 661 mieszkańców (31.12.2024), 66,5 km², 444 podmioty REGON.
 * 6 SOŁECTW: Bednarka, Kryg, Lipinki, Pagorzyna, Rozdziele, Wójtowa.
 * ⚠️ Strona gminy wymienia 7 jednostek (dodatkowo „Bednarskie")
 * i podaje dane z 2010 r. — NIEAKTUALNE, używam GUS.
 *
 * OŚ STRONY: NAFTA, KTÓRA SIĘ NIE SKOŃCZYŁA.
 * ⭐ To jedyna gmina w okolicy, gdzie ropę wydobywa się DZIŚ,
 * a nie wspomina. Kontrast jest wprost mierzalny w latach:
 * Gorlice (`gorlice.ts`) mają lampę z 1854, Chełmiec (`chelmiec.ts`)
 * Klęczany od 1858 — a Lipinki mają rok 2037.
 * Historia zamknięta u sąsiadów, otwarta tutaj.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ ZŁOŻE KRYG–LIBUSZA–LIPINKI eksploatowane przez PKN ORLEN
 *   (następca prawny PGNiG). KONCESJA WYDOBYWCZA OD 10 GRUDNIA
 *   1992 R., udostępnione 58 OTWORAMI, PROGNOZA EKSPLOATACJI
 *   DO 2037 R., planowane pozyskanie 17 733 t ropy (nettg.pl,
 *   21.11.2022). Operacyjnie: Kopalnia Ropy Naftowej i Gazu
 *   Ziemnego „Petrol”. Strona gminy potwierdza: „do dzisiaj trwa
 *   jeszcze wydobycie ropy” — kiwony w Krygu i zachodnich Lipinkach,
 * — ZACHOWANE „KOPANKI” — ręcznie kopane szyby z końca XIX w.,
 * — ⭐ W KRYGU W XIX W. DZIAŁAŁA SZKOŁA WIERTNICZA, której
 *   absolwenci pracowali w Polsce, Czechosłowacji i W LIBII.
 *   W Pagorzynie w 1921 r. kopalnia dawała 12 cystern ropy rocznie,
 * — ⚠️ LIBUSZA (z nazwy złoża) LEŻY W GMINIE BIECZ, nie tutaj.
 *   Złoże jest wspólne dla kilku gmin — nie przypisywać całości,
 * — HISTORIA: LOKACJA 1363 (przywilej Kazimierza Wielkiego);
 *   Kryg i Wójtowa również 1363, Wójtowa lokowana na prawie
 *   magdeburskim 1379. Właściciele: Kuropatniccy, Straszewscy,
 *   Byszewscy. Bednarka — prawo niemieckie przed 1401, przeniesiona
 *   na prawo wołoskie ok. 1530 przez Piotra Biela,
 * — SANKTUARIUM MATKI BOŻEJ WNIEBOWZIĘTEJ W LIPINKACH: gotycka
 *   figura MATKI BOŻEJ LIPIŃSKIEJ datowana na OSTATNIE
 *   DZIESIĘCIOLECIE XIV W. (warsztaty małopolskie).
 *   ⚠️ Tradycja lokalna mówi o pochodzeniu węgierskim — TO LEGENDA.
 *   KORONACJA KORONAMI PAPIESKIMI 17 SIERPNIA 1980 R., koronował
 *   bp JERZY ABLEWICZ. Nowy kościół konsekrowany 15.08.2005, figura
 *   przeniesiona procesyjnie. Rocznie ok. 50–70 GRUP PIELGRZYMKOWYCH,
 *   OK. 10 TYS. OSÓB. Uroczystości 14–17 sierpnia,
 * — INNE ZABYTKI: drewniany kościół św. Bartłomieja w Wójtowej
 *   (XVI w.), cerkiew w Rozdzielu (1927, PIASKOWIEC, Narodzenia NMP),
 *   cerkiew greckokatolicka w Bednarce (1900), dwór Byszewskich
 *   z parkiem, 4 CMENTARZE WOJENNE (Rozdziele, Pagorzyna, Wójtowa,
 *   Bednarka — nr 84 z 27 żołnierzami niemieckimi),
 * — FRAGMENT MAGURSKIEGO PARKU NARODOWEGO na terenie gminy,
 * — DW 993 Gorlice–Nowy Żmigród–Dukla przez Bednarkę (most
 *   przebudowany 2023–2024). ⚠️ DK 28 OMIJA GMINĘ — potwierdzone.
 *   KOLEJ: BRAK STACJI W GMINIE,
 * — KGW: „Koło Gospodyń Wiejskich w Lipinkach” — ⚠️ jedyna wzmianka
 *   pochodzi z profilu Facebook, NIEZWERYFIKOWANA. Nie eksponować,
 * — KGW KRYG startowało w konkursie Wypiek Regionalny Ziemi
 *   Gorlickiej podczas Agro Gorlice.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️ „PUSTELNI” W LIPINKACH. Nie znaleziono ŻADNEGO źródła —
 *   ani strona gminy, ani sanktuarium, ani serwis lokalny nie
 *   wymieniają obiektu ani przysiółka o tej nazwie. MYLNY TROP,
 * — NAZW FIRM ZE STRONY GMINY (Pyszotka, LOGBÓR, KOZBUD, MAL-BUD).
 *   ⚠️ SPIS POCHODZI Z SIERPNIA 2005 R. — NIE POTWIERDZONO, że nadal
 *   działają. NIE WYMIENIAĆ,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł).
 *
 * PUŁAPKI:
 * — NIE MYLIĆ Z LIPINKAMI w innych województwach,
 * — ROZDZIELE — jest też Rozdziele w gminie Żegocina (powiat
 *   bocheński), która ma u nas stronę. To dwie różne wsie.
 */

export const LIPINKI: CityContent = {
  slug: "lipinki",
  h1: "Thermomix Lipinki – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Lipinki — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Lipinki: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lipinki — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Lipinki. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Lipinek, Krygu, Wójtowej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lipinkach – jak wygląda prezentacja?",
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
      heading: "Jedyna gmina w okolicy, gdzie ropę się wciąż wydobywa",
      paragraphs: [
        "O naftowej przeszłości tego regionu pisze się zwykle w czasie przeszłym. W Gorlicach lampa zapłonęła w tysiąc osiemset pięćdziesiątym czwartym, w Klęczanach pod Nowym Sączem wiercono od pięćdziesiątego ósmego, rafinerie dawno zamknięto. W Lipinkach jest inaczej i to jest właśnie ta jedna rzecz, której nie ma żadna sąsiednia gmina.",
        "Złoże Kryg–Libusza–Lipinki jest eksploatowane do dziś. Koncesja wydobywcza obowiązuje od dziesiątego grudnia tysiąc dziewięćset dziewięćdziesiątego drugiego roku, złoże udostępniono pięćdziesięcioma ośmioma otworami, a prognoza eksploatacji sięga dwa tysiące trzydziestego siódmego roku. Kiwony pracują w Krygu i w zachodnich Lipinkach.",
        "To znaczy, że mieszkańcy tej gminy nie oglądają nafty w skansenie, tylko z okna. Zostały tu też stare kopanki — ręcznie kopane szyby z końca dziewiętnastego wieku, kiedy ropę wydobywano jeszcze wiadrami.",
        "Najciekawszy fakt jest jednak innego rodzaju. W dziewiętnastym wieku w Krygu działała szkoła wiertnicza, a jej absolwenci pracowali potem nie tylko w Polsce i Czechosłowacji, ale i w Libii. Z niewielkiej wsi w Beskidzie Niskim wychodzili ludzie, którzy wiercili na Saharze.",
        "Sama gmina jest dużo starsza od nafty. Lipinki, Kryg i Wójtową lokowano w tysiąc trzysta sześćdziesiątym trzecim roku na przywilej Kazimierza Wielkiego; Wójtowa dostała prawo magdeburskie szesnaście lat później, a Bednarkę przeniesiono około tysiąc pięćset trzydziestego na prawo wołoskie.",
        "Jest tu również miejsce, do którego ludzie przyjeżdżają z całej okolicy. W sanktuarium w Lipinkach stoi gotycka figura Matki Bożej Lipińskiej, datowana przez badaczy na ostatnie dziesięciolecie czternastego wieku — miejscowa tradycja mówi o pochodzeniu węgierskim, ale to legenda, a nie ustalenie. Siedemnastego sierpnia tysiąc dziewięćset osiemdziesiątego roku figurę ukoronował koronami papieskimi biskup Jerzy Ablewicz. Rocznie przyjeżdża tu od pięćdziesięciu do siedemdziesięciu grup pielgrzymkowych, około dziesięciu tysięcy osób.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Lipinki?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich sześć: Lipinki, Kryg, Wójtowa, Bednarka, Pagorzyna i Rozdziele. Bednarka leży najdalej, przy granicy z Magurskim Parkiem Narodowym, ale na cenę to nie wpływa.",
        "Jeśli pracujesz przy wydobyciu albo na zmiany, powiedz to od razu. Umawiam się wieczorami i w weekendy i wolę wiedzieć wcześniej, kiedy naprawdę macie w domu dwie spokojne godziny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Lipinki"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której pracuje się na miejscu",
      paragraphs: [
        "To rzadka sytuacja w tej części Małopolski: znaczna część mieszkańców Lipinek pracuje w gminie, a nie poza nią. Wydobycie ropy trwa tu nadal, obsługują je miejscowi, a wokół tego istnieją usługi i warsztaty. Zarejestrowanych podmiotów jest czterysta czterdzieści cztery przy sześciu i pół tysiąca mieszkańców.",
        "Praca przy wydobyciu ma jednak swoją specyfikę: bywa zmianowa i bywa w terenie, przy odwiertach rozrzuconych po polach. Wraca się o różnych porach i nie zawsze o tych zaplanowanych.",
        "Kuchnia dostosowuje się do tego jednym rozwiązaniem: obiad musi umieć czekać. Danie jednogarnkowe gotuje się bez człowieka, samo się wyłącza i stoi ciepłe — nie przypala się i nie wysycha, kiedy ktoś wraca dwie godziny później, niż zapowiedział.",
        "Druga rzecz to drugie śniadanie zabierane z domu, przy pracy w terenie po prostu konieczne. Pasty kanapkowe, twarożki, pasztety robione w domu wychodzą taniej niż kupne i bez listy składników, których nikt nie umie wymówić. Zrobienie kilku rodzajów naraz zajmuje kwadrans.",
        "Trzecia dotyczy sierpnia. W gminie, do której przyjeżdża rocznie kilkadziesiąt grup pielgrzymkowych, w wielu domach gotuje się w tym miesiącu dla gości — i to znacznie więcej niż zwykle. Wtedy najbardziej liczy się możliwość robienia kolejnych partii według tego samego przepisu, bez pilnowania i bez różnic między pierwszą a ósmą.",
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
    heading: "Lipinki i gotowanie — kuchnia pielgrzymkowa i pogórzańska",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie. Koło gospodyń z Krygu startuje natomiast w konkursie na Wypiek Regionalny Ziemi Gorlickiej podczas dorocznej wystawy rolniczej w sąsiedniej gminie.",
      "Jest tu za to zjawisko, które kuchni dotyczy bardzo bezpośrednio, choć rzadko się o nim myśli w tych kategoriach. Do sanktuarium w Lipinkach przyjeżdża rocznie od pięćdziesięciu do siedemdziesięciu grup pielgrzymkowych, w sumie około dziesięciu tysięcy osób, a największe uroczystości trwają od czternastego do siedemnastego sierpnia.",
      "Gotowanie dla pielgrzymów to bardzo konkretna umiejętność: duże ilości, w krótkim czasie, dla ludzi, którzy przyjeżdżają i wyjeżdżają. W wielu domach w takiej wsi robi się to od pokoleń, w sierpniu, przy okazji odpustu.",
      "Poza tym gotuje się tu jak w całym Pogórzu: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z ogrodu. Rzecz robiona sezonami i w większych partiach.",
      "Dla urządzenia najciekawsze jest właśnie to, co seryjne: farsze, ciasto drożdżowe, ucieranie mas, pasty, zupy na zapas, przetwory. Czyli rozdrabnianie, mielenie, wyrabianie i długie mieszanie w cieple. Czego nie zrobi, powiem wprost: nie upiecze ciasta i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie wysiłkiem i czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Lipinki dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu, bez żadnej dopłaty za odległość. Gmina liczy sześć i pół tysiąca mieszkańców na sześćdziesięciu sześciu kilometrach kwadratowych.",
    "Sołectwa to: Bednarka, Kryg, Lipinki, Pagorzyna, Rozdziele i Wójtowa. W Krygu i w zachodnich Lipinkach pracują kiwony — wydobycie ropy z tutejszego złoża ma według prognoz trwać do dwa tysiące trzydziestego siódmego roku.",
    "Zabytków jest tu kilka i są bardzo różne. W Lipinkach sanktuarium z gotycką figurą Matki Bożej z końca czternastego wieku, ukoronowaną w tysiąc dziewięćset osiemdziesiątym. W Wójtowej drewniany kościół świętego Bartłomieja z szesnastego wieku. W Rozdzielu cerkiew z tysiąc dziewięćset dwudziestego siódmego, wybudowana z piaskowca, a w Bednarce cerkiew greckokatolicka z tysiąc dziewięćsetnego. Do tego dwór Byszewskich z parkiem i cztery cmentarze wojenne z pierwszej wojny.",
    "Południowo-wschodni skrawek gminy wchodzi w granice Magurskiego Parku Narodowego.",
    "Dojazd: kolei w gminie nie ma i droga krajowa również ją omija. Prowadzi tędy droga wojewódzka z Gorlic w stronę Nowego Żmigrodu i Dukli, przez Bednarkę — most na tej trasie przebudowano w latach dwa tysiące dwudziestym trzecim i czwartym.",
  ],
  districts: [
    "Lipinki",
    "Kryg",
    "Wójtowa",
    "Bednarka",
    "Pagorzyna",
    "Rozdziele",
  ],

  nearbyHeading: "Gorlice, Biecz i Sękowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Gorlicami, gminą wiejską Gorlice, Bieczem i Sękową. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylące: Libusza, która występuje w nazwie tutejszego złoża naftowego, leży już w gminie Biecz. Złoże jest wspólne dla kilku gmin.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Biecz",
    "Sękowa",
    "Moszczenica",
    "Łużna",
    "Nowy Sącz",
  ],

  about: blokOMnie("do gminy Lipinki", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Bednarce albo Rozdzielu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sześć sołectw gminy traktuję tak samo, łącznie z Bednarką, która leży najdalej. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do trasy.",
    },
    ...faqWspolne("w gminie Lipinki"),
    {
      question: "Gotujemy czasem dla dużej grupy, na odpust. Da się to przyspieszyć?",
      answer:
        "Da się, i to najbardziej w tej części, która zajmuje najwięcej czasu. Farsze, ciasto drożdżowe, ucieranie mas i pasty robi się partiami według tego samego przepisu, a urządzenie odmierza czas i temperaturę samo — dziesiąta partia wychodzi identycznie jak pierwsza. Pieczenia i lepienia nie zastąpi. Na prezentacji chętnie pokażę to na tym, co realnie u Was robicie.",
    },
  ],

  geo: { lat: 49.666, lng: 21.2935 },
};
