import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * OPALENICA — powiat nowotomyski, woj. wielkopolskie.
 * ⚠ NOWY TOMYŚL, siedziba tego powiatu, JEST OPISANY
 *   W TYM CYKLU (fala 2 wielkopolskiego).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠ ODRĘBNEJ GMINY WIEJSKIEJ OPALENICA NIE MA —
 *   sprawdzone przez zliczenie sześciu gmin powiatu.
 * MIASTO: 9 262 mieszkańców (GUS 31.12.2024), 6,4 km²,
 *   gęstość 1 442,7 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 6,42 km²]. PODAJĘ.
 *   ⚠⚠ URZĄD PODAJE 9 189 OSÓB NA TĘ SAMĄ DATĘ.
 *   NIE UŻYWAM TEJ LICZBY I NIE KOMENTUJĘ RÓŻNICY —
 *   figura „spór o liczbę" zajęta (Szamotuły).
 * CAŁA GMINA: 15 941 osób, 146,8 km², gęstość
 *   109 os./km² [ZW — DOMYKA SIĘ: 108,59 → 109].
 *   PODAJĘ. ⚠ To jedyna gmina tej fali, której gęstość
 *   się domyka.
 *   ⚠⚠⚠ POWIERZCHNIA GMINY MA W ŹRÓDŁACH CZTERY
 *   WARTOŚCI (146,8 / 147 / 147,69 / 147,9 km²).
 *   PODAJĘ WYŁĄCZNIE GUS.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 16. ⚠ Miejscowości źródła podają 19, 21
 *   albo 22 — LICZBY MIEJSCOWOŚCI NIE PODAJĘ.
 * UŻYTKOWANIE: 67 % użytki rolne, 25 % lasy.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,3078 / 16,4136. Rzeka MOGILNICA.
 *
 * ⚠⚠ ODMIANA:
 *   D. do OPALENICY · Ms. w OPALENICY · N. Opalenicą.
 *   ⚠⚠⚠ BŁĘDY: „do Opalenic", „opalenicowski".
 *   Przymiotnik: OPALENICKI. Rodzaj żeński, liczba
 *   pojedyncza — NIE plurale tantum.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1393 r., dokument Władysława
 *     Jagiełły.
 *   — PRAWA MIEJSKIE: 1400 r. albo „między 1399
 *     a 1401" ⚠ [SP]. PISZĘ „około 1400 roku; źródła
 *     podają albo ten rok, albo przedział 1399–1401".
 *   — 1353 r. — Piotr z Bnina przyjął nazwisko
 *     Opaleński (przed lokacją).
 *   — Utraty praw nie ustalono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZYNAŚCIE LAT BEZ RATUSZA:
 *   — DREWNIANY RATUSZ ROZEBRANO W 1884 R.,
 *   — MUROWANY, Z CZERWONEJ CEGŁY, WZNIESIONO
 *     W 1897 R.
 *   ⚠⚠⚠ ARYTMETYKA: 1897 − 1884 = 13 LAT.
 *   STARE ROZEBRANO, ZANIM POWSTAŁO NOWE.
 *   ⚠⚠⚠ [SP — JEDNO ŹRÓDŁO. PISZĘ TO W TEKŚCIE:
 *   „według jednego opracowania"].
 *   ⚠⚠ POWODÓW ROZBIÓRKI NIE ZNAM I NIE ZGADUJĘ.
 *   ⚠⚠ ZMIANY MATERIAŁU (drewno → cegła) NIE ROBIĘ
 *   OSOBNYM WĄTKIEM — kąt materiałowy zajęty
 *   (Świerzawa, Nowy Tomyśl).
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — pałac w Dakowych Mokrych (ok. 1880): 750 m²
 *   powierzchni użytkowej, 3 900 m³ kubatury, rzut
 *   litery H; skrzydła piętrowe dodane 1912–1913.
 * — park w Porażynie 1,85 ha, park w Rudnikach
 *   ok. 1,5 ha; pałac w Rudnikach 1925 r.
 * — ⚠⚠⚠ CZTERECH NAZW Z RDZENIEM PORAŻYN NIE ROBIĘ
 *   KĄTEM — figura „skrót zjada różnicę" zajęta
 *   (Kostrzyn), a „małe bez dużego" zajęta (Prusice).
 *   WYMIENIAM JE W SEKCJI DZIELNIC JAKO UWAGĘ
 *   PRAKTYCZNĄ.
 * — ⚠⚠ PAŁACU W NIEGOLEWIE NIE OPISUJĘ — poprzedni
 *   dwór spłonął, a pożar jest wątkiem wykluczonym.
 * — ⚠⚠ PRODUKCJI MOTOCYKLI NIE OPISUJĘ — prowadzi
 *   do nazwy marki.
 * — ⚠⚠ PRZYROSTU NATURALNEGO NIE PODAJĘ — wątek
 *   wyludnienia wykluczony.
 * — ⚠ ODLEGŁOŚCI: źródła podają 36 i 40 km do
 *   Poznania. NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: ROZEBRANE, ZANIM POWSTAŁO NOWE
 * — o wyrzucaniu starego, zanim nowe zaczyna działać.
 * Kąt z Opalenicy: drewniany ratusz rozebrano w 1884 r.,
 * murowany postawiono w 1897.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że drewniany ratusz rozebrano w 1884 r., a nowy
 *   stanął w 1897,
 * — ŻE TO TRZYNAŚCIE LAT BEZ RATUSZA. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO POJEDYNCZE ŹRÓDŁO I ŻE POWODÓW NIE ZNAM,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY TO CIĄGLE: wyrzucamy stary
 *   garnek, zanim przyjdzie nowy; rezygnujemy ze starego
 *   sposobu, zanim nowy się utrzyma,
 * — ⚠⚠ ŻE PRZERWA JEST NAJDROŻSZYM MOMENTEM CAŁEJ
 *   ZMIANY — bo wtedy nie ma ani jednego, ani drugiego,
 *   i wtedy ludzie wracają do punktu wyjścia,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie wyrzucaj starego, dopóki
 *   nowe nie przepracuje miesiąca,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem stare trzeba
 *   usunąć, żeby nowe w ogóle weszło — bo zajmuje
 *   miejsce albo bo zawsze się po nie sięga. Wtedy
 *   przerwa jest ceną, którą się płaci świadomie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: nie radzę pozbywać się
 *   niczego przed dostawą. MÓWIĘ WPROST, że pierwsze
 *   tygodnie z urządzeniem to okres, w którym stary
 *   garnek jeszcze się przydaje.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DRUGIE OBOK ZAMIAST NAPRAWY STAREGO —
 *   kąt zajęty (Grodzisk Wielkopolski). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam obie rzeczy istniały jednocześnie; tu przez
 *   trzynaście lat nie było żadnej.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NOWE NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków).
 * — ⚠⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty
 *   (Trzcianka). ⚠⚠ TAM PRZERWA DOTYCZYŁA TOŻSAMOŚCI
 *   I LICZNIKA; TU JEST KOSZTEM OPERACYJNYM ZMIANY.
 * — ⚠⚠ ZERO PRZERWY ROSNĄ — kąt zajęty (Węgliniec).
 * — ⚠⚠ ZERO KUPIONE ZA MAŁE — kąt zajęty (Wolsztyn).
 * — ⚠⚠ ZERO PLAN PRZEKRACZA CAŁOŚĆ — kąt zajęty
 *   (Murowana Goślina).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   UPADKU PRZEMYSŁU I WYLUDNIENIA · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości.
 * — NIE PODAJĘ ludności miasta w wersji urzędu.
 * — NIE PODAJĘ roku praw miejskich jako pewnego.
 * — NIE ZGADUJĘ, dlaczego rozebrano ratusz.
 * — NIE OPISUJĘ pałacu w Niegolewie ani produkcji
 *   motocykli.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Opalenica leży w powiecie nowotomyskim, nad
 *   Mogilnicą; miasto liczy 9 262 mieszkańców
 *   (GUS, 31.12.2024) na 6,4 km², czyli 1 442,7 osoby
 *   na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 15 941 osób na 146,8 km², czyli
 *   109 osób na kilometr, i dzieli się na 16 sołectw,
 * — użytki rolne zajmują 67 %, a lasy 25 % powierzchni
 *   gminy,
 * — pierwsza wzmianka pochodzi z 1393 r. (dokument
 *   Władysława Jagiełły), a prawa miejskie miasto
 *   otrzymało około 1400 r.; już w 1353 r. Piotr z Bnina
 *   przyjął nazwisko Opaleński,
 * — drewniany ratusz rozebrano w 1884 r., a murowany,
 *   z czerwonej cegły, wzniesiono w 1897 r. — według
 *   jednego opracowania,
 * — pałac w Dakowych Mokrych z około 1880 r. ma 750 m²
 *   powierzchni użytkowej i 3 900 m³ kubatury, rzut
 *   litery H, a piętrowe skrzydła dodano w latach
 *   1912–1913,
 * — park w Porażynie ma 1,85 ha, park w Rudnikach około
 *   1,5 ha, a pałac w Rudnikach pochodzi z 1925 r.
 */
export const OPALENICA: CityContent = {
  slug: "opalenica",
  h1: "Thermomix Opalenica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Opalenica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Opalenicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Opalenica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Opalenicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Opalenicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Opalenica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rozebrany w 1884. Nowy w 1897.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Opalenicy – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "rozebrane-przed-nowym",
      heading: "Rozebrane, zanim powstało nowe",
      paragraphs: [
        "Drewniany ratusz w Opalenicy rozebrano w 1884 roku. Murowany, z czerwonej cegły, wzniesiono w 1897.",
        "Trzynaście lat bez ratusza. Podaję to za jednym opracowaniem, więc mówię ostrożniej niż o liczbach z GUS-u, i powodów rozbiórki nie znam.",
        "Zostaje sama sytuacja, a jest ona w kuchni aż nadto znajoma: stare usunięto, zanim nowe było gotowe.",
        "Wyrzucony stary garnek, bo nowy „już zamówiony”. Odstawiona kartka z planem tygodnia, bo od poniedziałku zaczynamy inaczej. Porzucony sposób gotowania, który wprawdzie męczył, ale działał — w imię tego, który jeszcze się nie przyjął.",
        "Przerwa jest najdroższym momentem całej zmiany. Nie dlatego, że długa, ale dlatego, że w jej trakcie nie ma ani jednego, ani drugiego — i właśnie wtedy ludzie wracają do punktu wyjścia. Nie z braku woli, tylko dlatego, że w środę trzeba coś zjeść.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o stawianiu drugiej rzeczy obok pierwszej, zamiast naprawiania pierwszej. Tam obie istniały jednocześnie i problemem było utrzymywanie dwóch. Tu jest odwrotnie — przez trzynaście lat nie było żadnej.",
        "Ruch jest jeden i jest wygodnie leniwy. Nie wyrzucaj starego, dopóki nowe nie przepracuje miesiąca. Miesiąc, nie tydzień — tydzień wytrzyma prawie wszystko.",
        "Uczciwie o drugiej stronie: czasem stare trzeba usunąć, żeby nowe w ogóle weszło. Jeśli stary garnek stoi dokładnie tam, gdzie miałoby stanąć nowe, albo jeśli ręka odruchowo sięga po niego zamiast po nowe, to trzymanie obu blokuje zmianę. Wtedy przerwa jest ceną, którą się płaci świadomie — ale warto wiedzieć, że się ją płaci.",
        "I uczciwie o sprzęcie. Nie radzę pozbywać się niczego przed dostawą. Pierwsze tygodnie z Thermomixem to okres, w którym stary garnek jeszcze się przydaje — choćby po to, żeby zrobić w nim to jedno danie, którego w urządzeniu jeszcze nie próbowaliście. Porządki w szafce zostawcie na po miesiącu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Opalenicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co ostatnio w kuchni wyrzuciliście i czy tego żałujecie. To bardziej pouczające pytanie, niż brzmi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Opalenicy"),
    sekcjaRaty("w Opalenicy"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Opalenicy",
      paragraphs: [
        "Opalenica leży w powiecie nowotomyskim, nad Mogilnicą. Samo miasto liczy 9 262 mieszkańców (GUS, 31.12.2024) na 6,4 kilometra kwadratowego, czyli tysiąc czterysta czterdzieści trzy osoby na kilometr, a cała gmina miejsko-wiejska 15 941 osób na 146,8 kilometra, czyli sto dziewięć osób na kilometr, i dzieli się na szesnaście sołectw. Użytki rolne zajmują sześćdziesiąt siedem procent powierzchni gminy, lasy dwadzieścia pięć. Pierwsza wzmianka pochodzi z 1393 roku, z dokumentu Władysława Jagiełły, a prawa miejskie miasto otrzymało około 1400 — źródła podają albo ten rok, albo przedział 1399–1401. Już w 1353 roku Piotr z Bnina przyjął nazwisko Opaleński. Pałac w Dakowych Mokrych z około 1880 roku ma siedemset pięćdziesiąt metrów kwadratowych powierzchni użytkowej i trzy tysiące dziewięćset metrów sześciennych kubatury, na rzucie litery H; piętrowe skrzydła dodano w latach 1912–1913. Park w Porażynie ma hektar z kawałkiem, park w Rudnikach około półtora, a pałac w Rudnikach pochodzi z 1925 roku.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Opalenicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu sołectw: Dakowów Mokrych, Jastrzębnik, Kopanek, Kozłowa, Łagw, Łęczyc, Niegolewa, Rudnik, Sielinka, Terespotockiego, Troszczyna, Urbanowa, Uścięcic, Wojnowic oraz Porażyna i Porażyna-Dworca. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę. Porażyn występuje w kilku wariantach — jest Porażyn, Porażyn-Dworzec, Porażyn-Ośrodek i Porażyn-Tartak — a sam Porażyn-Dworzec wydzielono dopiero w 2003 roku.",
  ],
  districts: [],

  nearbyHeading: "Poza Opalenicę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Nowego Tomyśla, Grodziska Wielkopolskiego, Buku, Zbąszynia i Lwówka — wszędzie bezpłatnie, tak samo jak w samej Opalenicy.",
  ],
  nearbyTowns: ["Nowy Tomyśl", "Grodzisk Wielkopolski", "Buk", "Zbąszyń", "Lwówek"],

  about: blokOMnie("do Opalenicy", "w Opalenicy i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Opalenicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: mówi się „do Opalenicy” i „w Opalenicy”, a przymiotnik brzmi „opalenicki”. I warto podać pełną nazwę wsi, bo Porażyn występuje w gminie w kilku wariantach.",
    },
    ...faqWspolne("w Opalenicy"),
    {
      question: "Czy pozbyć się starego sprzętu przed zakupem nowego?",
      answer:
        "Nie radzę. W Opalenicy drewniany ratusz rozebrano w 1884 roku, a murowany postawiono w 1897 — trzynaście lat bez ratusza. Przerwa jest najdroższym momentem każdej zmiany, bo w jej trakcie nie ma ani jednego, ani drugiego, i właśnie wtedy wraca się do punktu wyjścia. Zasada: nie wyrzucaj starego, dopóki nowe nie przepracuje miesiąca. Wyjątek jest jeden — jeśli stare stoi dokładnie tam, gdzie ma stanąć nowe, albo ręka odruchowo po nie sięga.",
    },
    {
      question: "Czy po zakupie Thermomixa mogę od razu zrobić porządki w szafkach?",
      answer:
        "Lepiej poczekać miesiąc. Pierwsze tygodnie to okres, w którym stary garnek i stara tarka jeszcze się przydają — choćby do tego jednego dania, którego w urządzeniu jeszcze nie próbowaliście. Po miesiącu widać, co realnie przestało być używane, i wtedy porządki są sensowne. Wcześniej to wyrzucanie na wyczucie, a wyczucie w tej sprawie bywa zawodne.",
    },
  ],

  geo: { lat: 52.3078, lng: 16.4136 },
};
