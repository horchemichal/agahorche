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
 * GRÓDEK NAD DUNAJCEM — GMINA WIEJSKA w powiecie nowosądeckim.
 * ⚠️ ROZBIEŻNOŚĆ ŹRÓDEŁ: GUS podaje 8 909 mieszkańców (31.12.2024)
 * i 12 sołectw; urząd gminy 9 193 mieszkańców i 14 SOŁECTW.
 * W tekście używam liczb urzędu i mówię „ponad dziewięć tysięcy”.
 * Powierzchnia 88,2 km².
 *
 * OŚ STRONY: TROPIE — ŚWIĘTY WSPÓLNY DLA TRZECH NARODÓW.
 * ⚠️ ŚWIADOMY WYBÓR: zapora rożnowska leży w tej gminie i jest
 * materiałem mocnym, ale OŚ „ZAPORA I ZALEW” JEST ZAJĘTA PRZEZ
 * CZORSZTYN (`czorsztyn.ts`). Zapora wchodzi tu jako SEKCJA
 * o inżynierii i COP-ie, a nie jako oś. NIE ODWRACAĆ TEGO PODZIAŁU.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — TROPIE: KOŚCIÓŁ ŚŚ. ANDRZEJA ŚWIERADA I BENEDYKTA — ROMAŃSKI,
 *   Z PRZEŁOMU XI/XII W., jeden z najstarszych w Polsce; na skale
 *   nad Dunajcem.
 *   ⚠️ DATOWANIE „fundacja Kazimierza Odnowiciela ok. 1045,
 *   konsekracja przez św. Stanisława ok. 1073” TO TRADYCJA,
 *   NIE FAKT UDOKUMENTOWANY — pisać „według tradycji”,
 * — ŚW. ANDRZEJ ŚWIERAD — benedyktyn i pustelnik przełomu X/XI w.,
 *   żył w Tropiu. FRESKI ROMAŃSKIE PRZEDSTAWIAJĄ ŚW. STEFANA,
 *   władcę Węgier, który sprowadził Świerada znad Dunajca
 *   na ówczesną Słowację węgierską. Świerad jest czczony
 *   W POLSCE, NA SŁOWACJI I NA WĘGRZECH,
 * — Sanktuarium: pustelnia, ŹRÓDEŁKO (tradycyjnie pomocne na oczy),
 *   „Kalwaria Świętych Polskich”, TRZY RELIKWIARZE, w tym z kością
 *   św. Świerada. Zniszczenia: Tatarzy w XIII w., arianie XVI–XVII w.,
 *   odbudowa barokowa. Cmentarz cholerycznych z 1847 r.,
 * — POSTACIE Z TROPIA: abp WŁADYSŁAW BOBOWSKI (1932–2025),
 *   IZAK GOLDFINGER (1925–2014) — zainicjował kontakty Sądecczyzny
 *   z Izraelem,
 * — ZAPORA I ELEKTROWNIA ROŻNÓW — LEŻY W TEJ GMINIE, w miejscowości
 *   Rożnów, „w najwęższym miejscu przełomu Dunajca”.
 *   Pierwsze plany: prof. KAROL POMIANOWSKI, koniec 1918 r.
 *   Bezpośredni impuls: POWÓDŹ Z 18 LIPCA 1934 R. zagrażająca
 *   Zakładom Azotowym w Mościcach. Budowa OD CZERWCA 1935
 *   DO 1941/1942; napełnianie zbiornika w II poł. 1941, pełna
 *   eksploatacja 1943. Wykonawca: polsko-francuskie przedsiębiorstwo
 *   „Zapory i Roboty Wodne”. Parametry: DŁUGOŚĆ 550 M, WYSOKOŚĆ
 *   32,5 M, szerokość korony 9 m, posadowienie 17 m w skale;
 *   4 TURBINY, ŁĄCZNIE 56 MW; zbiornik 1 600 HA.
 *   Cel strategiczny: PRĄD DLA COP; dwutorowa linia 150 kV
 *   Rożnów–Tarnów–Mościce–Starachowice–Warszawa. Przepławka
 *   schodkowa dla ryb,
 * — ROŻNÓW: ruiny średniowiecznego zamku wiązane z ZAWISZĄ CZARNYM;
 *   renesansowe fortyfikacje — basteja i kurtyna (tzw. zamek dolny);
 *   cmentarz wojenny z I wojny światowej.
 *   ⚠️ AUTORSTWA FORTYFIKACJI I DAT NIE POTWIERDZONO,
 * — 14 SOŁECTW z ludnością (31.12.2024, urząd): Rożnów 1 940,
 *   Bartkowa-Posadowa 1 298, Przydonica 1 172, Gródek nad Dunajcem
 *   760, Podole-Górowa 717, Roztoka-Brzeziny 634, Jelna 565,
 *   Tropie 502, Sienna 453, Lipie 401, Zbyszyce 268, Przydonica
 *   Glinik 226, Jelna Działy 156, Bujne 101,
 * — TURYSTYKA WODNA: kąpieliska w Bartkowej-Posadowej, Gródku
 *   i Rożnowie przy zaporze; przystanie i wypożyczalnie; statki
 *   pasażerskie kursujące maj–październik; bezpłatne promy przez
 *   Dunajec. Jezioro Rożnowskie w gospodarowaniu PZW Okręg Nowy Sącz,
 * — GMINA rozciąga się „od południowych brzegów Jeziora Czchowskiego
 *   po południowo-wschodnie krańce Jeziora Rożnowskiego”,
 * — REGON: 821 podmiotów (31.12.2024). BRAK KOLEI.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ZAPORY CZCHOWSKIEJ. ⚠️ LEŻY W CZCHOWIE, POWIAT BRZESKI —
 *   poza tą gminą,
 * — YC PTTK „BESKID” I OŚRODKA SPORTÓW WODNYCH AWF W ZNAMIROWICACH.
 *   ⚠️ ZNAMIROWICE TO GMINA ŁOSOSINA DOLNA, nie ta. Strona Gródka
 *   wymienia je jako „okoliczne”,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — NUMERÓW DRÓG WOJEWÓDZKICH. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — ZAPORA ROŻNOWSKA JEST W TEJ GMINIE, nie w Łososinie Dolnej.
 *   Łososina ma zachodni brzeg jeziora, ale nie zaporę,
 * — DK75 BIEGNIE ZACHODNIM BRZEGIEM, przez Tęgoborze w gminie
 *   Łososina Dolna — nie przez Gródek.
 */

export const GRODEK_NAD_DUNAJCEM: CityContent = {
  slug: "grodek-nad-dunajcem",
  h1: "Thermomix Gródek nad Dunajcem – prezentacja i zakup",
  seoTitle: "Przedstawiciel Thermomix Gródek nad Dunajcem — cena",
  seoDescription:
    "Thermomix w gminie Gródek nad Dunajcem: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gródek nad Dunajcem — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Gródek nad Dunajcem. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Gródka, Rożnowa, Tropia, Bartkowej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Gródku nad Dunajcem – jak wygląda prezentacja?",
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
      heading: "Pustelnik, którego czczą trzy kraje",
      paragraphs: [
        "W Tropiu, na skale nad Dunajcem, stoi kościół świętych Andrzeja Świerada i Benedykta. Architektura jest romańska i pochodzi z przełomu jedenastego i dwunastego wieku — to jeden z najstarszych kościołów w Polsce.",
        "Tradycja mówi, że ufundował go Kazimierz Odnowiciel około tysiąc czterdziestego piątego roku, a konsekrował święty Stanisław trzydzieści lat później. Zaznaczam wyraźnie: to tradycja, nie dokument. Pewne jest datowanie architektury, nie legenda fundacyjna.",
        "Znacznie ciekawsza jest postać, od której wszystko się tu zaczęło. Andrzej Świerad był benedyktynem i pustelnikiem żyjącym na przełomie dziesiątego i jedenastego wieku, i mieszkał właśnie tutaj, w skalnej pustelni nad rzeką. Potem sprowadził go do siebie Stefan, władca Węgier — ten sam, którego przedstawiają romańskie freski w tropiańskim kościele.",
        "Skutek jest taki, że Świerad jest dziś czczony w trzech krajach naraz: w Polsce, na Słowacji i na Węgrzech. Niewielu jest świętych, których kult przekracza granice w ten sposób — a przecież zaczęło się od jednego człowieka mieszkającego w skale nad Dunajcem.",
        "Sanktuarium działa do dziś. Jest pustelnia, źródełko, któremu tradycja przypisuje pomoc na oczy, kalwaria polskich świętych i trzy relikwiarze, w tym jeden z kością Świerada. Kościół przechodził swoje: w trzynastym wieku zniszczyli go Tatarzy, w szesnastym i siedemnastym arianie, potem odbudowano go w formach barokowych. Obok jest cmentarz cholerycznych z tysiąc osiemset czterdziestego siódmego roku.",
        "Warto wiedzieć, że gmina ma też drugą, zupełnie inną historię — w Rożnowie stoją ruiny średniowiecznego zamku wiązanego z Zawiszą Czarnym oraz renesansowe fortyfikacje bastejowe. I trzecią, dwudziestowieczną, o której piszę niżej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gródek nad Dunajcem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina rozciąga się wzdłuż dwóch jezior — od brzegów Jeziora Czchowskiego po Rożnowskie — a wsie leżą po obu stronach wody. Trasa wygląda w związku z tym bardzo różnie. Na cenę to nie wpływa.",
        "Jeśli prowadzisz kwatery albo wynajem nad jeziorem, powiedz to od razu. Lipiec i sierpień są u Was zajęte od rana do wieczora, a wrzesień, maj i cała zima zupełnie spokojne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Gródek nad Dunajcem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Cztery miesiące sezonu i osiem miesięcy reszty",
      paragraphs: [
        "W gminie mieszka ponad dziewięć tysięcy osób, a zarejestrowanych podmiotów gospodarczych jest tu nieco ponad osiemset. Duża ich część wiąże się z tym, co dzieje się nad wodą: kwaterami, wypożyczalniami sprzętu, gastronomią, przystaniami.",
        "To znaczy, że rok dzieli się tu bardzo ostro. Od maja do września dzień nie ma stałych godzin i nikt nie wie, o której siądzie do obiadu. Od października do kwietnia jest odwrotnie: czasu jest dużo, a ruchu żadnego.",
        "Praktyczna korzyść w sezonie jest jedna i bardzo konkretna. Danie jednogarnkowe wstawia się i wychodzi. Gotuje się bez człowieka, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nikt nie musi pilnować garnka ani wracać, żeby zamieszać.",
        "Poza sezonem opłaca się odwrotne podejście: gotowanie z zapasem i do zamrażarki. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami, kiedy jest spokój. Latem odbiera się to z zamrażarki zamiast gotować od zera.",
        "Trzecia rzecz dotyczy tego, kto gotuje. Ponieważ przepis prowadzi krok po kroku, obiad może zrobić nastolatek albo ktokolwiek, kto akurat jest w domu. W rodzinie, w której w sezonie pracują oboje dorośli, to bywa realnym odciążeniem.",
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
    heading: "Gródek i gotowanie — ryba, jezioro i kuchnia bez rejestru",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Nie będę więc dopisywać Gródkowi dorobku, którego nie umiem wskazać źródłem.",
      "To, co jest tu oczywiste i prawdziwe, to woda. Jezioro Rożnowskie ma tysiąc sześćset hektarów i pozostaje w gospodarowaniu okręgu wędkarskiego z Nowego Sącza. Wędkarstwo jest tu zajęciem powszechnym, a ryba — szczupak, sandacz, leszcz, płoć — trafia na stoły znacznie częściej niż w gminach bez jeziora.",
      "Ryba jest przy tym najbardziej wymagającym produktem w domowej kuchni: łatwo ją przesuszyć i łatwo rozgotować. Gotowanie na parze w kontrolowanej temperaturze jest tu naprawdę pomocne, bo trzyma temperaturę zamiast zgadywać. Do tego dochodzą sosy, farsze i pasty rybne.",
      "Poza rybą kuchnia jest tu sądecka i domowa: ziemniaki, kapusta, fasola, zupy na kościach, ciasto drożdżowe, przetwory z ogrodu. Rzecz robiona sezonami — bo w gminie, w której lato to praca od rana do nocy, na zapas gotuje się zimą.",
      "Czego urządzenie nie zrobi, powiem wprost: nie złowi ryby i nie oczyści jej za Was. Nie zastąpi też wprawy. Zabiera tę część roboty, która jest wyłącznie czasem — rozdrabnianie, wyrabianie, mieszanie i pilnowanie, żeby nie przywarło.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Gródek nad Dunajcem dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina zajmuje osiemdziesiąt osiem kilometrów kwadratowych i liczy ponad dziewięć tysięcy mieszkańców — choć tu drobna uwaga, bo statystyka publiczna i urząd gminy podają nieco inne liczby i inną liczbę sołectw.",
    "Sołectwa to między innymi Rożnów, Bartkowa-Posadowa, Przydonica, Gródek nad Dunajcem, Podole-Górowa, Roztoka-Brzeziny, Jelna, Tropie, Sienna, Lipie i Zbyszyce. Największy jest Rożnów, z blisko dwoma tysiącami mieszkańców.",
    "Gmina rozciąga się między dwoma jeziorami: od południowych brzegów Czchowskiego po południowo-wschodnie krańce Rożnowskiego. Kąpieliska są w Bartkowej-Posadowej, w Gródku i w Rożnowie przy zaporze; działają przystanie, wypożyczalnie, statki pasażerskie od maja do października i bezpłatne promy przez Dunajec.",
    "Zapora rożnowska leży właśnie w tej gminie i warto o niej wiedzieć więcej, niż że jest. Pierwsze plany naszkicował profesor Karol Pomianowski jeszcze pod koniec tysiąc dziewięćset osiemnastego roku, ale bezpośrednim impulsem była powódź z osiemnastego lipca tysiąc dziewięćset trzydziestego czwartego, zagrażająca zakładom azotowym w Mościcach. Budowano ją od czerwca trzydziestego piątego do początku lat czterdziestych: pięćset pięćdziesiąt metrów długości, trzydzieści dwa i pół wysokości, cztery turbiny o łącznej mocy pięćdziesięciu sześciu megawatów. Prąd stąd szedł linią wysokiego napięcia przez Tarnów aż do Warszawy, na potrzeby Centralnego Okręgu Przemysłowego.",
    "Dojazd: kolei w gminie nie ma. Droga krajowa z Brzeska do Nowego Sącza biegnie zachodnim brzegiem jeziora, przez sąsiednią gminę.",
  ],
  districts: [
    "Rożnów",
    "Bartkowa-Posadowa",
    "Przydonica",
    "Gródek nad Dunajcem",
    "Tropie",
    "Podole-Górowa",
    "Jelna i Sienna",
    "Roztoka-Brzeziny, Lipie, Zbyszyce",
  ],

  nearbyHeading: "Łososina Dolna, Korzenna i Czchów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Łososiną Dolną, Korzenną, Chełmcem i Czchowem. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Dwa rozróżnienia, bo bywają mylone. Zapora rożnowska leży w tej gminie; zapora czchowska w Czchowie, w powiecie brzeskim. A ośrodki sportów wodnych w Znamirowicach to już gmina Łososina Dolna, choć leżą nad tym samym jeziorem.",
  ],
  nearbyTowns: [
    "Łososina Dolna",
    "Korzenna",
    "Chełmiec",
    "Czchów",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Gródek nad Dunajcem", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Rożnowie albo Tropiu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa gminy traktuję tak samo, po obu stronach jeziora. Przy umawianiu podaj nazwę miejscowości — objazd wokół wody potrafi być długi, więc chodzi wyłącznie o zaplanowanie trasy.",
    },
    ...faqWspolne("w gminie Gródek nad Dunajcem"),
    {
      question: "Często jemy ryby z jeziora. Ten sprzęt się do tego nada?",
      answer:
        "Nada się i to lepiej, niż mogłoby się wydawać. Ryba najczęściej wychodzi źle dlatego, że się ją przesuszy — a gotowanie na parze w kontrolowanej temperaturze rozwiązuje dokładnie ten problem, bo temperatura jest trzymana, a nie zgadywana. Do tego sosy, farsze i pasty rybne. Ryby za Was nie złowi i nie oczyści, ale całą resztę bierze na siebie.",
    },
  ],

  geo: { lat: 49.7683, lng: 20.7538 },
};
