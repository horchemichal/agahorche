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
 * WIEPRZ — gmina wiejska, ok. 12,8 tys. mieszkańców, powiat wadowicki.
 * Sześć sołectw, bez miasta.
 *
 * OŚ STRONY: TRAKTORYJA — gminne wyścigi traktorów z klasą
 * „Kobiety na traktorach”, ok. 4 000 widzów, w 2026 r. dziesięciolecie.
 * To najlepszy możliwy materiał na tę stronę, bo:
 *   1) nie da się tego pomylić z żadną inną gminą w Polsce,
 *   2) klasa kobieca daje naturalne, NIEWYMUSZONE przejście do tego,
 *      kto tu prowadzi gospodarstwo,
 *   3) impreza wędruje po sołectwach, co pozwala wymienić je wszystkie
 *      bez robienia z tego listy.
 *
 * Druga oś, wspierająca: gmina ROŚNIE. +13,0% w latach 2002–2024,
 * dodatni przyrost naturalny, średni wiek 38,3 — wyraźnie młodsza niż
 * sąsiedzi. Największe mieszkania w okolicy: ok. 109 m².
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — TRAKTORYJA, organizator Gminny Ośrodek Kultury w Wieprzu.
 *   Klasy: CAPEK (do 30 KM), PÓŁ MOCNA (do 80 KM), TYTAN (80–150 KM),
 *   CIĘŻKA (powyżej 150 KM) i KOBIETY NA TRAKTORACH (bez limitu mocy).
 *   Konkurencje: slalom, jazda na wprost, parkowanie.
 *   Frekwencja ponad 4 000 widzów (edycja 2021),
 * — UWAGA NA DATY: GOK podaje debiut TRAKTORYI na 2018 r., ale
 *   istnieje relacja z „Traktoriady” z 19 sierpnia 2017 r.
 *   W 2026 r. organizatorzy ogłosili dziesięciolecie. DLATEGO
 *   W TEKŚCIE piszę „od dziesięciu lat” / „dziesiąta edycja”,
 *   NIGDY konkretnego roku pierwszej edycji,
 * — impreza wędruje po sołectwach: Przybradz (2017), Wieprz (2018),
 *   Gierałtowice (2022), Nidek (2026),
 * — SOŁECTWA (6) z ludnością wg strony gminy: Wieprz 5 291,
 *   Frydrychowice 3 066, Nidek 1 493, Gierałtowice 1 345,
 *   Przybradz 1 078, Gierałtowiczki 503,
 * — PRZYSIÓŁKI: samo sołectwo Wieprz to 21 przysiółków,
 *   Frydrychowice 16. To jest ładny, konkretny detal osadniczy,
 * — kościół św. Szymona i Judy Tadeusza w NIDKU — drewniany,
 *   zbudowany prawdopodobnie przed 1539 r., parafia od 1313 r.;
 *   na Szlaku Architektury Drewnianej,
 * — pierwsza wzmianka o Wieprzu: 1318 r., jako villa militaris,
 * — SPÓŁDZIELNIA MLECZARSKA w Wieprzu — twaróg, śmietana, masło,
 *   sery, kefir, maślanka. UWAGA: firma pisze o „tradycjach sięgających
 *   100 lat”, ale konkretnej daty założenia NIE MA. Dlatego w tekście
 *   nie pada żaden rok ani liczba lat,
 * — DEMOGRAFIA: +13,0% ludności 2002–2024, dodatni przyrost naturalny
 *   (+1,25/1000), średni wiek 38,3, przedprodukcyjni 22,8%,
 *   średnia powierzchnia mieszkania 109,3 m², wodociąg 97% budynków,
 * — luty 2024 — gmina otrzymała tytuł „Gmina Przyjazna Biznesowi”,
 * — DW781 (Chrzanów–Andrychów) biegnie przez gminę na odcinku
 *   ok. 12,7 km,
 * — Wieprz leży ok. 10 km na zachód od Wadowic, ok. 46 km
 *   na południowy zachód od Krakowa,
 * — HISTORIA: Wieprz należał do XVIII-wiecznego andrychowskiego
 *   ośrodka tkackiego. To ładne domknięcie z sąsiednią stroną.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — POTRAWA LOKALNA. Sprawdzono: gmina Wieprz NIE MA żadnego wpisu
 *   na Liście Produktów Tradycyjnych i nie znaleziono udokumentowanej
 *   potrawy lokalnej. DLATEGO SEKCJA `culinary` DOTYCZY MLECZARNI,
 *   a nie wymyślonego dania. Nie podstawiam kwaśnicy, prażonek ani
 *   niczego ogólnobeskidzkiego,
 * — STARZENIE SIĘ GMINY. Strategia sygnalizuje spadek urodzeń
 *   i wzrost zgonów w dekadzie. To prawda, ale bilans wciąż jest
 *   dodatni i nie ma powodu straszyć. Nie dotykam,
 * — LICZBA KGW. Nieznana — w gminie działają raczej jako grupy
 *   nieformalne pod jednym stowarzyszeniem. Dlatego piszę
 *   o „Stowarzyszeniu Gospodyń Gminy Wieprz”, nie o liczbie kół,
 * — ROK ZAŁOŻENIA MLECZARNI. Nieznany. Nie podaję.
 *
 * PUŁAPKI:
 * — GMINA WIEPRZ NIE MA STACJI ANI PRZYSTANKU KOLEJOWEGO. Linia 117
 *   omija ją — między Wadowicami a Andrychowem nie ma tu przystanku.
 *   ABSOLUTNIE nie napisać „dojedziesz pociągiem do Wieprza”.
 *   Piszę uczciwie: pociąg do Wadowic albo Andrychowa, dalej autobus,
 * — RZEKA to WIEPRZÓWKA, dopływ Skawy. NIE rzeka Wieprz (ta jest
 *   na Lubelszczyźnie),
 * — TO NIE JEST Wieprz w gminie Radziechowy-Wieprz (śląskie) ani
 *   Wieprz w warmińsko-mazurskim,
 * — GIERAŁTOWICE i GIERAŁTOWICZKI to DWA różne sołectwa,
 * — przez gminę nie biegnie żadna droga krajowa, tylko wojewódzka 781.
 */

export const WIEPRZ: CityContent = {
  slug: "wieprz",
  h1: "Thermomix Wieprz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wieprz — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Wieprz: bezpłatna prezentacja TM7 u Ciebie w kuchni — Wieprz, Frydrychowice, Nidek, Gierałtowice. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wieprz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wieprz. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Wieprz przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sześciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Wieprz, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Wieprz – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Wieprzu, jak we Frydrychowicach, Nidku czy Przybradzu.",
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
      heading: "Gmina, w której traktory ścigają się w pięciu klasach",
      paragraphs: [
        "W gminie Wieprz od dziesięciu lat odbywają się wyścigi traktorów. Nie pokaz, nie parada — wyścigi, z regulaminem, punktami karnymi i pięcioma klasami startowymi zależnymi od mocy: od tych do trzydziestu koni po ciężkie, powyżej stu pięćdziesięciu. Konkurencje to slalom, jazda na wprost i parkowanie. Ominięcie elementu toru kosztuje pięć sekund kary.",
        "Piąta klasa nazywa się Kobiety na traktorach i jest jedyną bez limitu mocy. To jest, moim zdaniem, najlepszy skrót tego, jak wygląda ta gmina — bo w gospodarstwie za maszynę siada ten, kto akurat musi, i nikt nie robi z tego wydarzenia. Poza jednym dniem w roku, kiedy jednak robi.",
        "Na tę jedną niedzielę przyjeżdża tu ponad cztery tysiące osób — na gminę liczącą niecałe trzynaście tysięcy mieszkańców. Impreza wędruje po sołectwach: była w Przybradzu, w Wieprzu, w Gierałtowicach, a jubileuszową dziesiątą edycję urządzono na łąkach w Nidku.",
        "Druga rzecz, którą warto o tej gminie wiedzieć, jest mniej widowiskowa, ale ważniejsza: Wieprz rośnie. Ludności przybyło tu ponad trzynaście procent od dwa tysiące drugiego roku, przyrost naturalny jest dodatni, a średni wiek mieszkańca to niecałe trzydzieści dziewięć lat — wyraźnie mniej niż u sąsiadów. Prawie co czwarty mieszkaniec jest w wieku przedprodukcyjnym.",
        "To znaczy tyle, że jeżdżę tu do domów, w których są dzieci, i to często kilkoro. Domy są zresztą duże — przeciętne mieszkanie w tej gminie ma ponad sto dziewięć metrów, najwięcej w całej okolicy. To zwykle znaczy dom jednorodzinny, czasem z rodzicami albo teściami pod jednym dachem, i kuchnię, która pracuje na kilka osób naraz.",
        "Mówię wprost, czego Thermomix nie zrobi: nie zastąpi wprawy i nie ugotuje za Ciebie obiadu na dziesięć osób bez Twojego udziału. Zabiera dwie rzeczy — stanie obok garnka i te czynności, przez które gotowanie dla większego stołu odkłada się na „kiedy będę mieć czas”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wieprz?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz i — jeśli to Wieprz albo Frydrychowice — w którym przysiółku. Te dwie wsie są rozłożone na kilkanaście–dwadzieścia kilka przysiółków i sam adres bez tej wskazówki niewiele mi mówi.",
        "Jeśli w domu jest gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do obrządku, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wieprz"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Duży dom, duży stół, kilka pokoleń",
      paragraphs: [
        "Przeciętne mieszkanie w gminie Wieprz ma ponad sto dziewięć metrów kwadratowych — więcej niż w którejkolwiek sąsiedniej gminie. Za tą liczbą stoi konkretny sposób życia: dom jednorodzinny, często z rodzicami albo teściami, i obiad, do którego siada więcej osób, niż wynikałoby ze statystyki gospodarstwa domowego.",
        "Gotowanie dla takiego stołu ma inną skalę. To nie są dwie porcje, tylko garnek. I to jest właśnie ta sytuacja, w której najbardziej przeszkadza konieczność stania w kuchni: pół przedpołudnia przy jednym daniu, kiedy dookoła jest dziesięć innych rzeczy do zrobienia.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe gotuje się, kiedy Ty jesteś przy zwierzętach, w ogrodzie albo z dziećmi, i samo się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie, mieszanie, żeby nie przywarło — to wszystko dzieje się bez Twojej obecności.",
        "Druga rzecz to zapasy. Ciasto na pierogi, sosy, zupy do zamrożenia, pasty kanapkowe, chleb — da się to robić seriami, w jednym naczyniu. W domu, w którym i tak gotuje się większymi partiami, ta różnica jest odczuwalna od pierwszego tygodnia.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w gminie, w której prawie co czwarty mieszkaniec jeszcze nie skończył szkoły, to zdarza się częściej niż gdzie indziej.",
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
    heading: "Wieprz i gotowanie — mleczarnia zamiast wymyślonej potrawy",
    paragraphs: [
      "Zacznę od tego, czego tu nie ma, bo to uczciwsze. Gmina Wieprz nie ma żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych i nie znalazłam udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce jakieś ogólne danie beskidzkie i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Jest za to coś realnego: Spółdzielnia Mleczarska w Wieprzu. Twaróg, śmietana, masło, sery, kefir, maślanka, zsiadłe mleko — robione na miejscu i sprzedawane w okolicznych sklepach. Mleczarnia w gminie wiejskiej to rzecz coraz rzadsza i akurat ta wciąż pracuje.",
      "Dla kuchni ma to znaczenie bardzo praktyczne. Dobry twaróg i dobra śmietana to podstawa połowy rzeczy, które robi się w takim domu: pierogi, naleśniki, sernik, pasty, zupy zabielane. To są dania pracochłonne nie dlatego, że są trudne, tylko dlatego, że trzeba przy nich stać — ucierać, wyrabiać, mieszać, pilnować, żeby się nie zwarzyło.",
      "I dokładnie w tym miejscu urządzenie coś wnosi. Nie zrobi twarogu lepszym, niż jest. Ale ciasto na pierogi wyrabia się w nim samo, masa serowa powstaje bez ucierania, a sos na śmietanie gotuje się w stałej temperaturze i się nie zwarzy. To nie jest rewolucja kulinarna — to jest pół przedpołudnia odzyskane w niedzielę.",
    ],
  },

  districtsHeading: "Gdzie w gminie Wieprz dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu sołectw, bez żadnej dopłaty za odległość: Wieprz, Frydrychowice, Nidek, Gierałtowice, Przybradz i Gierałtowiczki.",
    "Warto wiedzieć, jak ta gmina jest zbudowana, bo to nie są zwarte wsie. Samo sołectwo Wieprz składa się z ponad dwudziestu przysiółków, Frydrychowice z kilkunastu. Dlatego przy umawianiu proszę o nazwę przysiółka albo o jakiś punkt orientacyjny — sam adres bywa mylący, a ja wolę trafić za pierwszym razem.",
    "Nidek warto odwiedzić przy okazji: stoi tam drewniany kościół, prawdopodobnie starszy niż tysiąc pięćset trzydziesty dziewiąty rok, na Szlaku Architektury Drewnianej. Parafia jest tam od czternastego wieku.",
    "Dojazd: przez gminę biegnie droga wojewódzka z Chrzanowa do Andrychowa. Do Wadowic jest stąd około dziesięciu kilometrów, do Krakowa około czterdziestu sześciu. Powiem od razu uczciwie: w gminie Wieprz nie ma stacji ani przystanku kolejowego — linia z Krakowa do Bielska omija ją między Wadowicami a Andrychowem. Pociągiem dojedziesz do jednej z tych dwóch stacji, dalej autobusem.",
  ],
  districts: [
    "Wieprz",
    "Frydrychowice",
    "Nidek",
    "Gierałtowice",
    "Przybradz",
    "Gierałtowiczki",
  ],

  nearbyHeading: "Andrychów, Wadowice i Tomice też są na mojej trasie",
  nearbyParagraphs: [
    "Do Andrychowa i Wadowic mam stąd po kilkanaście minut, do Tomic i Kalwarii Zebrzydowskiej trochę dalej, ale wciąż w tym samym powiecie. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Historyczna ciekawostka, która akurat tu ma sens: Wieprz należał kiedyś do tego samego ośrodka tkackiego co Andrychów — tego, którego chłopscy kupcy sprzedawali płótno od Stambułu po Amsterdam. Dziś to osobne gminy, ale dla mnie to nadal jedna trasa. Jeśli mieszkasz na granicy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Andrychów",
    "Wadowice",
    "Tomice",
    "Kalwaria Zebrzydowska",
    "Kraków",
  ],

  about: blokOMnie("do gminy Wieprz", "w powiecie wadowickim"),

  faq: [
    {
      question: "Mieszkam w przysiółku, nie w centrum wsi. Trafisz?",
      answer:
        "Trafię, ale powiedz mi nazwę przysiółka albo jakiś punkt orientacyjny. Sam Wieprz ma ich ponad dwadzieścia, Frydrychowice kilkanaście — sam adres bywa tu mylący. Dojazd jest oczywiście bez dopłaty, niezależnie od tego, jak daleko od drogi wojewódzkiej mieszkasz.",
    },
    ...faqWspolne("w gminie Wieprz"),
    {
      question: "Gotuję dla dużej rodziny, czasem dla dziesięciu osób. Da radę?",
      answer:
        "Da, ale powiem uczciwie, jak to wygląda: przy takiej liczbie osób gotuje się partiami albo równolegle z garnkiem na płycie i nie ma w tym nic złego. Urządzenie zabiera przede wszystkim przygotowanie i pilnowanie — a przy dużym obiedzie to właśnie te dwie rzeczy zajmują najwięcej. Na prezentacji chętnie policzę to na Waszych realnych ilościach, nie na przepisie dla czterech osób.",
    },
    {
      question: "Czy do Wieprza dojadę pociągiem?",
      answer:
        "Nie do samego Wieprza — w gminie nie ma stacji ani przystanku, linia z Krakowa do Bielska omija ją między Wadowicami a Andrychowem. Pociągiem dojedziesz do jednej z tych dwóch stacji, a dalej autobusem albo samochodem. Piszę to wprost, bo wolę, żebyś wiedziała wcześniej, niż stała na peronie.",
    },
  ],

  geo: { lat: 49.8894, lng: 19.365 },
};
