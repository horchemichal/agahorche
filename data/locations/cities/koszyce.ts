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
 * KOSZYCE — gmina miejsko-wiejska, powiat proszowicki, nad Wisłą.
 * 5 212 mieszkańców gminy (31.12.2024, GUS) na 66,1 km², 80 os./km².
 * SAMO MIASTO KOSZYCE: 759 osób na 3,3 km².
 * 18 SOŁECTW + MIASTO KOSZYCE jako osobna jednostka pomocnicza.
 *
 * OŚ STRONY: MIASTO, KTÓRE WRÓCIŁO PO STU PIĘĆDZIESIĘCIU LATACH.
 * Lokacja 26 czerwca 1374 przez królową ELŻBIETĘ ŁOKIETKÓWNĄ, ponowna
 * 4 kwietnia 1421 przez Władysława Jagiełłę; UTRATA PRAW W 1869
 * (represje po powstaniu styczniowym); ODZYSKANIE 1 STYCZNIA 2019.
 * ⚠️ NIE 2023 — to częsty błąd.
 *
 * DRUGA OŚ: WŁASNA MIARA ZBOŻOWA. „1 korzec koszycki" = ¼ korca
 * krakowskiego — na tyle ważna, że WAGA TRAFIŁA DO HERBU GMINY.
 * Rynek 2 212 m², zachowany średniowieczny układ; miasto na
 * skrzyżowaniu drogi królewskiej Kraków–Sandomierz, szlaku kijowskiego
 * i szlaku wiślanego.
 *
 * TRZECIA: NAROŻNIK TRZECH POWIATÓW I STYK DWÓCH WOJEWÓDZTW,
 * z Wisłą jako granicą od południa. Urząd ma numer kierunkowy 41
 * (kielecki), nie 12.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): gmina 5 212
 *   mieszkańców, 80 os./km², średni wiek 43,8 lat; SPADEK O 10,0%
 *   w latach 2002–2024; 25 urodzeń, 52 zgony (−27). MIASTO KOSZYCE:
 *   759 osób, 233,5 os./km², mediana wieku 44,0,
 * — PRAWA MIEJSKIE (koszyce.gmina.pl, rys historyczny): lokacja na
 *   prawie magdeburskim 26.06.1374 przez królową Elżbietę
 *   Łokietkównę; ponowna lokacja 4.04.1421 przez Władysława Jagiełłę;
 *   UTRATA 1869; PRZYWRÓCENIE 1 STYCZNIA 2019, „150 lat po jego
 *   utracie",
 * — SOŁECTWA (18, koszyce.gmina.pl, kadencja 2024–2029): Biskupice,
 *   Dolany, Filipowice, Jaksice, Jankowice, Książnice Małe, Książnice
 *   Wielkie, Łapszów, MALKOWICE-SIEDLISKA (jedno sołectwo), Modrzany,
 *   Morsko, Piotrowice, Przemyków, Rachwałowice, Sokołowice, Witów,
 *   Włostowice, Zagaje Książnickie. Plus MIASTO KOSZYCE,
 * — RYNEK: prostokątny, 2 212 m², zachowany pierwotny kształt;
 *   historycznie dwie studnie,
 * — KORZEC KOSZYCKI: 1 korzec koszycki = ¼ korca krakowskiego; waga
 *   w herbie gminy jako symbol tradycji handlowych. Pod koniec XVII w.
 *   70 rzemieślników, 12 kupców, 46 rolników,
 * — WISŁA: południowa granica gminy (potwierdzone w opisie flagi:
 *   „błękit symbolizuje Wisłę graniczącą z gminą od południa");
 *   pobliskie MORSKO miało piąty co do wielkości port rzeczny
 *   w Polsce,
 * — KOŚCIÓŁ pw. św. Marii Magdaleny, wzniesiony 1470–1480; szkoła
 *   udokumentowana od 1437 r.; pierwsza wzmianka o Koszycach 1328;
 *   POŻAR 1880 — spłonęły 53 domy i kościół parafialny,
 * — JAN Z KOSZYCZEK (ur. 1488) — pierwszy polski tłumacz prozy;
 *   JAKUB GRZYWNA (zm. 1531) — lekarz i profesor,
 * — GOSPODARKA: 458 podmiotów REGON; bezrobocie ok. 5,5%; SALDO
 *   DOJAZDÓW DO PRACY −168 (246 wyjeżdża, 78 przyjeżdża); pracujących
 *   55 na 1000 mieszkańców; ok. 50,9% pracujących w sektorze rolniczym,
 * — SĄSIEDZI: Proszowice, Nowe Brzesko (pow. proszowicki), Drwinia
 *   (bocheński), Szczurowa (brzeski), Wietrzychowice (tarnowski) oraz
 *   Kazimierza Wielka, Opatowiec, Bejsce (woj. świętokrzyskie),
 * — ODLEGŁOŚĆ: Kazimierza Wielka ok. 11,5 km, Szczurowa ok. 6,5 km,
 *   Bejsce ok. 7,5 km,
 * — DOŻYNKI GMINNE: 30 sierpnia 2026, godz. 14:30 (miejsce
 *   niepotwierdzone),
 * — NUMER KIERUNKOWY URZĘDU: 41 (strefa kielecka), nie 12.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NUMERÓW DRÓG KRAJOWYCH I WOJEWÓDZKICH. Nie potwierdzone — nie
 *   podaję żadnego,
 * — MOSTU NA WIŚLE. Nie potwierdzony,
 * — STACJI KOLEJOWEJ. Nie potwierdzona,
 * — ODLEGŁOŚCI DO KRAKOWA I PROSZOWIC W KILOMETRACH. Nie potwierdzone,
 * — POWODZI. Wisła jest granicą gminy, więc temat prawdopodobny, ale
 *   NIE ZNALAZŁAM ŻADNEGO ŹRÓDŁA opisującego konkretne wydarzenie.
 *   Nie piszę o niej ani słowa,
 * — WARZYWNICTWA I STRUKTURY UPRAW. Nie potwierdzone,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza niedostępna,
 * — MIEJSCA DOŻYNEK 2026 I NAZW KÓŁ GOSPODYŃ. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — KOSZYCE TO PRZEDE WSZYSTKIM DUŻE MIASTO NA SŁOWACJI (Košice,
 *   ok. 240 tys. mieszkańców). Każdy link „Koszyce" bez kwalifikatora
 *   prowadzi tam. Mylące podwójnie, bo słowacka katedra jest pod
 *   wezwaniem św. Elżbiety, a polskie Koszyce lokowała Elżbieta
 *   Łokietkówna,
 * — KOSZYCE MAŁE I KOSZYCE WIELKIE leżą w powiecie tarnowskim,
 *   czyli w TYM SAMYM WOJEWÓDZTWIE — filtr „małopolskie" ich nie odsieje,
 * — PRAWA MIEJSKIE ODZYSKANO 1.01.2019, NIE 2023,
 * — 18 SOŁECTW + MIASTO, ale 20–21 MIEJSCOWOŚCI. Malkowice-Siedliska
 *   to jedno sołectwo i dwie miejscowości,
 * — DANE MIASTA (759) I GMINY (5 212) różnią się siedmiokrotnie,
 * — NUMER KIERUNKOWY 41 JEST PRAWIDŁOWY — nie „poprawiać" na 12.
 */

export const KOSZYCE: CityContent = {
  slug: "koszyce",
  h1: "Thermomix Koszyce – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Koszyce — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Koszyce (pow. proszowicki): bezpłatna prezentacja TM7 u Ciebie w kuchni — Koszyce, Książnice Wielkie, Przemyków. Tel. 517 185 691.",
  ogTitle: "Thermomix Koszyce — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Koszyce. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Koszyce w powiecie proszowickim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich osiemnastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("miasto i 18 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Koszyce – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Koszycach, jak w Książnicach Wielkich, Przemykowie czy Filipowicach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "To wschodni kraniec obszaru, który obsługuję — od Wisły dalej jest już województwo świętokrzyskie. Dojeżdżam tu mimo to i za dojazd nie liczę ani złotówki.",
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
      heading: "Miasto, które wróciło na mapę po stu pięćdziesięciu latach",
      paragraphs: [
        "Koszyce zostały lokowane na prawie magdeburskim dwudziestego szóstego czerwca tysiąc trzysta siedemdziesiątego czwartego roku przez królową Elżbietę Łokietkównę, a ponownie w tysiąc czterysta dwudziestym pierwszym przez Władysława Jagiełłę. Prawa miejskie straciły w tysiąc osiemset sześćdziesiątym dziewiątym, w ramach represji po powstaniu styczniowym. Odzyskały je pierwszego stycznia dwa tysiące dziewiętnastego roku — dokładnie sto pięćdziesiąt lat później.",
        "To dobra data do zapamiętania, bo w internecie krąży też rok dwa tysiące dwudziesty trzeci. Jest błędny.",
        "Rynek zachował średniowieczny kształt: prostokąt o powierzchni dwóch tysięcy dwustu dwunastu metrów kwadratowych, na którym stały kiedyś dwie studnie. Miasto leżało na skrzyżowaniu trzech szlaków — drogi królewskiej z Krakowa do Sandomierza, szlaku kijowskiego i szlaku wiślanego.",
        "Handel był tu na tyle poważny, że Koszyce miały własną miarę zbożową. Jeden korzec koszycki to była jedna czwarta korca krakowskiego — i ta miara okazała się na tyle istotna dla tożsamości miejsca, że waga trafiła do herbu gminy. Pod koniec siedemnastego wieku mieszkało tu siedemdziesięciu rzemieślników, dwunastu kupców i czterdziestu sześciu rolników.",
        "Skala jest dziś zupełnie inna. Miasto Koszyce liczy siedemset pięćdziesiąt dziewięć osób, cała gmina pięć tysięcy dwieście dwanaście. To jest gmina, w której ubyło dziesięć procent ludności od dwa tysiące drugiego roku i w której rodzi się dwadzieścia pięcioro dzieci rocznie przy pięćdziesięciu dwóch zgonach. Nie ma sensu tego upiększać.",
        "Geograficznie to bardzo ciekawy punkt: narożnik trzech powiatów i styk dwóch województw, z Wisłą jako granicą od południa. Urząd gminy ma numer kierunkowy czterdzieści jeden, kielecki, a nie krakowski dwanaście — i to nie jest pomyłka, tylko konsekwencja położenia.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Koszyce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj nazwę miejscowości, bo sołectw jest tu osiemnaście plus samo miasto: Koszyce, Książnice Wielkie, Książnice Małe, Przemyków, Filipowice, Rachwałowice, Piotrowice, Witów, Morsko, Sokołowice, Włostowice, Biskupice, Dolany, Jaksice, Jankowice, Łapszów, Modrzany, Zagaje Książnickie i Malkowice-Siedliska.",
        "Dopłaty za odległość nie ma w żadnej z nich. To wschodni kraniec obszaru, który obsługuję, więc umawiam się tu zwykle na konkretny dzień z kilkoma wizytami — czasem proszę o odrobinę elastyczności przy godzinie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Koszyce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gospodarstwo, dojazdy i kuchnia, w której robi się wszystko od podstaw",
      paragraphs: [
        "Około połowy pracujących mieszkańców tej gminy pracuje w rolnictwie, a na tysiąc mieszkańców przypada tylko pięćdziesiąt pięć osób pracujących na miejscu w rozumieniu statystyki. To jest gmina, w której jedzenie w dużej mierze pochodzi z własnego pola, a nie ze sklepu.",
        "Kuchnia w takim domu wygląda inaczej niż w mieście. Nie otwiera się opakowań — obiera się, sieka, gotuje i przerabia. Urządzenie zabiera z tego dokładnie te czynności, które zajmują najwięcej czasu na stojąco: rozdrabnianie, mieszanie i pilnowanie temperatury.",
        "Konkretnie: zupa albo danie jednogarnkowe wstawione rano gotuje się samo, wyłącza i czeka ciepłe. W gospodarstwie, gdzie rano wychodzi się do roboty i nie wiadomo, o której się wróci, to jest różnica między ciepłym obiadem a kanapką.",
        "Druga rzecz to przetwory. Wszystko, co robi się jesienią w słoiki — przeciery, sosy, powidła, marynaty — to rozdrabnianie plus podgrzewanie w stałej temperaturze z ciągłym mieszaniem. Czyli ta część, przy której najłatwiej przypalić dno garnka i przy której trzeba stać godzinami.",
        "Czego nie zrobi: nie obierze i nie wydryluje. Kto ma warzywa albo owoce z własnego, ten wie, że to jest godzina, która i tak zostanie. Nie ma sensu obiecywać inaczej.",
        "Trzecia rzecz to bilans dojazdów — z gminy wyjeżdża do pracy o sto sześćdziesiąt osiem osób więcej, niż przyjeżdża. W domach, gdzie ktoś dojeżdża do Krakowa albo do Kazimierzy Wielkiej, powrót po siedemnastej jest normą, a obiad wstawiony rano rozwiązuje ten wieczór.",
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
    heading: "Koszyce i gotowanie — kuchnia miasteczka handlowego",
    paragraphs: [
      "Kuchnia tej gminy wyrasta z dwóch rzeczy naraz: z pola i z targu. Około połowy pracujących mieszkańców pracuje w rolnictwie, a herb gminy zawiera kłos zboża i wagę — bo Koszyce przez wieki żyły z handlu i miały nawet własną miarę zbożową, korzec koszycki, równy jednej czwartej korca krakowskiego.",
      "To jest kuchnia zbożowa i warzywna, robiona od podstaw i w dużych ilościach: chleb, kasze, kluski, zupy w wielkim garnku, mięso na święta. Miasteczko z rynkiem, na którym się kupowało i sprzedawało, jadło sycąco i bez wymyślności.",
      "Powiem uczciwie, czego nie sprawdziłam, bo tu byłoby to szczególnie kuszące. Nie potwierdziłam, jakie dokładnie uprawy dominują dziś w gminie — nie napiszę więc, że to „zagłębie warzywne”, choć okolica proszowicka bywa tak opisywana. Nie potwierdziłam też, czy z gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych.",
      "To, co potwierdzone, to że gmina prowadzi wykaz kół gospodyń wiejskich i wydaje własny biuletyn, „Gazetę Koszycką”, a dożynki gminne wypadają pod koniec sierpnia — w dwa tysiące dwudziestym szóstym roku trzydziestego, o wpół do trzeciej.",
      "Dla urządzenia najwięcej pracy jest tu przy cieście i przy przetworach. Ciasto drożdżowe, mielenie maku, farsze, kluski — wyrabianie to ta czynność, przy której w domowej kuchni najszybciej boli ręka. A przy słoikach: rozdrabnianie i gotowanie bez pilnowania.",
      "Czego nie zrobi: nie upiecze chleba w piekarniku, nie ulepi pierogów i nie usmaży. Zrobi ciasto, zmieli farsz — lepienie, patelnia i piekarnik zostają po Waszej stronie.",
    ],
  },

  districtsHeading: "Gdzie w gminie Koszyce dojeżdżam?",
  districtsParagraphs: [
    "Do miasta Koszyce i do wszystkich osiemnastu sołectw. Dopłaty za odległość nie ma nigdzie, także w miejscowościach leżących przy samej Wiśle.",
    "Gmina liczy pięć tysięcy dwieście dwanaście osób na sześćdziesięciu sześciu kilometrach kwadratowych, czyli osiemdziesiąt osób na kilometr — to rzadka zabudowa. Samo miasto Koszyce ma siedemset pięćdziesiąt dziewięć mieszkańców, więc jeśli gdzieś zobaczycie liczbę „pięć tysięcy” przy nazwie miasta, to jest liczba całej gminy.",
    "Leżymy w narożniku trzech powiatów i na styku dwóch województw, a od południa granicę wyznacza Wisła. Sąsiadujemy z Proszowicami i Nowym Brzeskiem, przez rzekę z Drwinią, Szczurową i Wietrzychowicami, a od wschodu z Kazimierzą Wielką, Opatowcem i Bejscami już w świętokrzyskiem.",
    "Do Kazimierzy Wielkiej jest stąd około jedenastu i pół kilometra, do Szczurowej sześć i pół, do Bejsc siedem i pół. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Sołectw jest osiemnaście, ale miejscowości nieco więcej — bo Malkowice i Siedliska tworzą razem jedno sołectwo. Przy umawianiu wystarczy nazwa wsi, resztę już sobie ułożę.",
  ],
  districts: [
    "Koszyce",
    "Książnice Wielkie",
    "Książnice Małe",
    "Przemyków",
    "Filipowice",
    "Rachwałowice",
    "Piotrowice",
    "Witów",
    "Morsko",
    "Sokołowice",
    "Włostowice",
    "Biskupice",
    "Dolany",
    "Jaksice",
    "Jankowice",
    "Łapszów",
    "Modrzany",
    "Malkowice-Siedliska",
    "Zagaje Książnickie",
  ],

  nearbyHeading: "Proszowice, Nowe Brzesko i Szczurowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Koszyce graniczy z Proszowicami i Nowym Brzeskiem, a przez Wisłę ze Szczurową i Drwinią. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Koszyce, czy już Nowe Brzesko albo Proszowice — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Proszowice",
    "Nowe Brzesko",
    "Szczurowa",
    "Drwinia",
    "Radziemice",
    "Pałecznica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Koszyce", "w powiecie proszowickim"),

  faq: [
    {
      question: "Chodzi o Koszyce w Polsce czy na Słowacji?",
      answer:
        "O te w Polsce — gminę miejsko-wiejską w powiecie proszowickim, nad Wisłą, liczącą pięć tysięcy dwieście dwanaście mieszkańców. Słowackie Košice to zupełnie inne miasto, ćwierćmilionowe, kilkaset kilometrów stąd. Dopytuję o to celowo, bo przy wyszukiwaniu „Koszyce” niemal wszystko prowadzi na Słowację.",
    },
    ...faqWspolne("w gminie Koszyce"),
    {
      question: "To daleko. Naprawdę dojedziesz bez dopłaty?",
      answer:
        "Dojadę i naprawdę bez dopłaty — to wschodni kraniec obszaru, który obsługuję, i mam tu kawał drogi, ale zasadę stosuję jedną w całej Małopolsce. Umawiam się tu zwykle na konkretny dzień z kilkoma wizytami w okolicy, więc czasem poproszę o odrobinę elastyczności przy godzinie.",
    },
    {
      question: "Mamy gospodarstwo. Czy to się przyda przy przetworach?",
      answer:
        "Przy słoikach bardzo. Przeciery, sosy, powidła i marynaty to rozdrabnianie plus podgrzewanie w stałej temperaturze z ciągłym mieszaniem — czyli dokładnie ta część, przy której trzeba stać przy garnku, żeby nie przywarło. Obierania i drylowania natomiast nie zabierze i nie będę tego obiecywać.",
    },
  ],

  geo: { lat: 50.1703, lng: 20.5731 },
};
