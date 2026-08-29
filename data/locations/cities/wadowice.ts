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
 * WADOWICE — gmina miejsko-wiejska, ok. 35–36 tys. mieszkańców.
 * Stolica powiatu wadowickiego.
 *
 * OŚ STRONY: NIE kremówka i NIE „miasto papieskie”. Tę stronę mają
 * wszyscy i nie da się na niej wygrać. Oś to DWA fakty, których
 * nie ma nigdzie indziej:
 *   1) siedziba Maspeksu — koncern spożywczy o obrotach rzędu
 *      kilkunastu miliardów złotych ma centralę w mieście
 *      siedemnastotysięcznym,
 *   2) Chocznia — sołectwo liczniejsze niż niejedno polskie miasto.
 * Do tego trzeci wątek, mocny i mało znany: od grudnia 2025 są
 * bezpośrednie przyspieszone pociągi do Krakowa, ok. 65 min.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ludność gminy: dwa odczyty, USC 35 628 (31.12.2025) i GUS 36 327
 *   (31.12.2024). DLATEGO W TEKŚCIE NIE PADA ŻADNA LICZBA — piszę
 *   „ponad trzydzieści pięć tysięcy” albo w ogóle nie liczę,
 * — miasto: ok. 16,6–17 tys. Ta sama zasada,
 * — SOŁECTWA: 16 sołectw w 14 wsiach. Dwie wsie są podzielone na po
 *   dwa sołectwa: Jaroszowice + Jaroszowice Zbywaczówka oraz
 *   Ponikiew + Ponikiew Chobot. Lista: Babica, Barwałd Dolny,
 *   Chocznia, Gorzeń Dolny, Gorzeń Górny, Jaroszowice,
 *   Jaroszowice Zbywaczówka, Kaczyna, Klecza Dolna, Klecza Górna,
 *   Ponikiew, Ponikiew Chobot, Roków, Stanisław Górny, Wysoka, Zawadka,
 * — CHOCZNIA: 5 669 mieszkańców (USC, 31.12.2025) — więcej niż
 *   miasto Kalwaria Zebrzydowska. Klecza Dolna 2 590, Wysoka 1 935,
 * — MASPEX: założony w 1990 r. w Wadowicach, siedziba do dziś
 *   przy ul. Legionów; ok. 15 mld zł obrotu, ok. 9 000 pracowników
 *   w całej grupie (NIE w samych Wadowicach), ok. 70 marek.
 *   UWAGA: 9 000 to liczba dla całej grupy — w tekście piszę
 *   „w całej grupie”, nigdy „w Wadowicach”,
 * — KOLEJ: linia 117, stacja Wadowice. Od 14 grudnia 2025 r. trzy
 *   przyspieszone pociągi POLREGIO do Krakowa Głównego:
 *   6:41→7:46 (65 min), 16:34→17:38 (64 min), 19:11→20:23 (72 min).
 *   Pierwsze dwa w dni robocze, trzeci codziennie,
 * — DROGA: ok. 52 km, ok. godzina; A4, potem DK7 od Głogoczowa
 *   i DK52 przez Biertowice,
 * — KUCHNIA: „Mapa Smaków Ziemi Wadowickiej”, wydana przez
 *   Informację Turystyczną w Wadowicach w lipcu 2017 r. Stamtąd
 *   system przezwisk: Wadowice = Flacorze (od flaczków),
 *   Chocznia = Królicorze (od hodowli królików),
 *   Andrychów = Plackorze, Kalwaria = Ogórcorze.
 *   To jest lepszy materiał niż kremówka, bo dotyczy codziennego
 *   jedzenia, a nie ciastka na wynos,
 * — mediana wieku gminy 42,2; średnia powierzchnia mieszkania
 *   84,8 m², średnio 4,19 izby,
 * — w 2025 r. gmina urosła o 118 osób, przy spadku w samym mieście
 *   o 79 — ludzie przenoszą się z miasta na wieś w obrębie gminy.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KREMÓWKA I JAN PAWEŁ II jako oś strony. Wspominam jednym
 *   zdaniem, bo udawanie, że tego nie ma, byłoby dziwactwem, ale
 *   nie buduję na tym niczego. Powód praktyczny: na tę frazę
 *   konkuruje pół internetu i nie mam tam czego szukać. Powód
 *   drugi: to strona o gotowaniu w domu, nie o pielgrzymce,
 * — LICZBA PRACOWNIKÓW MASPEKSU W WADOWICACH. Nie znam jej.
 *   Nie piszę „x tysięcy osób pracuje tu w Maspeksie”,
 * — NOWA FABRYKA I „500 NOWYCH MIEJSC PRACY”. To deklaracja
 *   inwestora, nie fakt dokonany. Nie obiecuję ludziom pracy,
 * — ZALEŻNOŚĆ MIASTA OD JEDNEGO PRACODAWCY. Ta sama zasada
 *   co w Wolbromiu: nie sugeruję monokultury w tekście, po którym
 *   następuje rozmowa o racie na lata,
 * — LICZBY EDYCJI Dni Wadowic i innych imprez. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — flaczki i kremówka NIE SĄ na ministerialnej Liście Produktów
 *   Tradycyjnych — tego nie potwierdzono. Piszę „lokalna
 *   specjalność”, nigdy „produkt tradycyjny”,
 * — KOLEJ ISTNIEJE i jest niedawno wzmocniona. Nie napisać
 *   „do Wadowic tylko autem”. To najświeższy i najbardziej
 *   użyteczny fakt na tej stronie,
 * — Chocznia to SOŁECTWO gminy Wadowice, nie osobna gmina,
 * — nie mylić Kleczy Dolnej z Kleczą Górną, ani Gorzenia Dolnego
 *   z Górnym — to cztery różne sołectwa,
 * — miasto Andrychów jest LICZNIEJSZE niż miasto Wadowice, mimo
 *   że Wadowice są stolicą powiatu. Nie napisać, że Wadowice to
 *   największe miasto powiatu.
 */

export const WADOWICE: CityContent = {
  slug: "wadowice",
  h1: "Thermomix Wadowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wadowice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Wadowice: bezpłatna prezentacja TM7 u Ciebie w kuchni — miasto, Chocznia, Klecza i pozostałe sołectwa. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wadowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wadowice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Wadowice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Wadowice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wadowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu w centrum Wadowic, jak w domu w Choczni czy w Kleczy Górnej.",
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
      heading: "Miasto mniejsze niż firma, która z niego wyrosła",
      paragraphs: [
        "O Wadowicach wszyscy wiedzą jedno i to jedno jest prawdą, więc nie będę udawać, że jest inaczej. Ale jest tu druga rzecz, o której mówi się znacznie mniej, a która bardziej opisuje dzisiejsze miasto: w Wadowicach ma siedzibę koncern spożywczy o obrotach rzędu kilkunastu miliardów złotych, założony tutaj w tysiąc dziewięćset dziewięćdziesiątym roku i do dziś stąd zarządzany. W całej grupie pracuje około dziewięciu tysięcy osób.",
        "Piszę o tym, bo to zmienia to, kogo spotykam na prezentacjach. Wadowice nie są miasteczkiem, z którego wszyscy dojeżdżają gdzie indziej. Są miejscem, do którego się dojeżdża — i to widać po godzinach, o które ludzie proszą, i po tym, jak wygląda wieczór w takim domu.",
        "Druga rzecz to skala samej gminy. Chocznia, jedno z sołectw, ma prawie pięć i pół tysiąca mieszkańców — więcej niż niejedno polskie miasto i więcej niż sąsiednia Kalwaria Zebrzydowska. Klecza Dolna to kolejne dwa i pół tysiąca. To nie są przysiółki, do których się „zagląda”. To są miejscowości z własnym życiem, sklepami i szkołą.",
        "Trzecia rzecz, najświeższa i najbardziej praktyczna: od grudnia dwa tysiące dwudziestego piątego roku ze stacji w Wadowicach jeżdżą przyspieszone pociągi wprost do Krakowa Głównego. Poranny jest w Krakowie po sześćdziesięciu pięciu minutach, popołudniowy wraca po sześćdziesięciu czterech. To realnie zmieniło dojazd i wiele osób jeszcze o tym nie wie.",
        "Wieczór po takim dniu wygląda zwykle podobnie, niezależnie od tego, czym się wracało: trzeba coś zjeść, a nie ma już siły stać przy garnku. I to jest cała rzecz, którą pokazuję na prezentacji — nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam, kiedy Ty jeszcze jesteś w drodze.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. Zabiera dwie rzeczy — stanie obok garnka i te czynności, przez które gotowanie od zera odkłada się na „kiedy indziej”. Reszta zostaje po Twojej stronie i tak ma być.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wadowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, gdzie mieszkasz: w samym mieście czy w którymś z sołectw. To ma znaczenie praktyczne, bo do Choczni, Kleczy czy Ponikwi jedzie się inaczej niż pod rynek — od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Jeśli wracasz pociągiem albo z Krakowa, po prostu powiedz, o której jesteś w domu. Wieczorne spotkania są tu zupełnie normalne, weekendy też.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wadowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym wieczór zaczyna się o różnych porach",
      paragraphs: [
        "W gminie, z której jedni dojeżdżają do Krakowa, drudzy pracują na miejscu, a trzeci wracają z Bielska, rzadko wszyscy siadają do stołu o tej samej godzinie. Obiad musi przetrwać kilka powrotów albo powstać w dwóch turach. To zwykły układ, tylko męczący.",
        "Praktyczne bywa tu przede wszystkim to, że danie da się ugotować wcześniej i odgrzać bez pilnowania, albo zaplanować tak, żeby dochodziło samo, kiedy nikogo jeszcze nie ma w domu. Rozdrabnianie, ucieranie, mieszanie, żeby nie przywarło — to wszystko dzieje się bez stania nad garnkiem.",
        "Druga rzecz to gotowanie większą partią. Zupa na dwa dni, sos do zamrożenia, ciasto na pierogi, pasta kanapkowa, chleb — da się to robić seriami, w jednym naczyniu, bez rozstawiania połowy kuchni. W domu, gdzie i tak się kombinuje z godzinami, ta różnica jest odczuwalna od pierwszego tygodnia.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i to jest zwykle pierwsza rzecz, którą rodzice zauważają po miesiącu.",
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
    heading: "Wadowice i gotowanie — flaczki, nie kremówka",
    paragraphs: [
      "W dwa tysiące siedemnastym roku wadowicka Informacja Turystyczna wydała „Mapę Smaków Ziemi Wadowickiej” — pierwszy tutejszy informator kulinarny. Najciekawsze jest w nim nie to, co ludzie jedzą, tylko jak przez to jedzenie nazywano sąsiadów. Wadowiczan nazywano Flacorzami, od flaczków. Mieszkańców Choczni — Królicorzami, od hodowli królików. Andrychowian — Plackorzami, od placków ziemniaczanych.",
      "To jest lepszy materiał niż ciastko, o którym wszyscy słyszeli, bo dotyczy codziennego jedzenia, a nie pamiątki z wycieczki. Flaki gotuje się długo i trzeba przy nich być. Placki ziemniaczane robi się dla całego stołu, stojąc przy patelni. Jedno i drugie to potrawy, przy których traci się popołudnie.",
      "I dokładnie w tym miejscu urządzenie ma coś do powiedzenia. Nie zrobi flaków za Ciebie i nie udam, że robi. Ale przygotowanie — pokrojenie, przetarcie, poddanie długiemu, równemu gotowaniu bez zaglądania — przestaje wymagać obecności w kuchni. To jest różnica między „ugotuję to w niedzielę, jak będę mieć czas” a „ugotuję to w środę”.",
      "Uczciwie dodam: ani flaczki wadowickie, ani kremówka nie są wpisane na ministerialną Listę Produktów Tradycyjnych — sprawdzałam i nie znalazłam potwierdzenia. To lokalne specjalności udokumentowane przez samo miasto, i to zupełnie wystarczy. Nie zamierzam podnosić im rangi słowem, które znaczy co innego.",
    ],
  },

  districtsHeading: "Gdzie w gminie Wadowice dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich sołectw, bez żadnej dopłaty za odległość. Gmina ma szesnaście sołectw rozłożonych w czternastu wsiach — dwie z nich, Jaroszowice i Ponikiew, są podzielone na po dwa sołectwa, co jest tu lokalną osobliwością.",
    "Największa jest Chocznia — prawie pięć i pół tysiąca mieszkańców, ciągnąca się długim pasmem wzdłuż drogi. Dalej Klecza Dolna i Klecza Górna, Wysoka, Barwałd Dolny, Babica, Gorzeń Dolny i Gorzeń Górny, Jaroszowice, Kaczyna, Ponikiew, Roków, Stanisław Górny i Zawadka.",
    "Gmina leży na styku Pogórza Wielickiego i Beskidu Małego, w dolinie Skawy, i to czuć w dojeździe: część sołectw jest w dolinie, część wyraźnie wyżej. Do Ponikwi czy Kaczyny jedzie się dłużej, niż wynika z kilometrów, i warto to powiedzieć przy umawianiu.",
    "Dojazd z Krakowa: około pięćdziesięciu kilometrów, godzina autem — autostradą, potem drogą krajową od Głogoczowa przez Biertowice. Albo pociągiem: od grudnia dwa tysiące dwudziestego piątego roku ze stacji w Wadowicach jeżdżą przyspieszone pociągi wprost do Krakowa Głównego, najszybszy w sześćdziesiąt cztery minuty.",
  ],
  districts: [
    "Wadowice",
    "Chocznia",
    "Klecza Dolna",
    "Klecza Górna",
    "Wysoka",
    "Barwałd Dolny",
    "Babica",
    "Gorzeń Dolny",
    "Gorzeń Górny",
    "Jaroszowice",
    "Ponikiew",
    "Roków",
    "Stanisław Górny",
    "Zawadka",
  ],

  nearbyHeading: "Andrychów, Kalwaria, Tomice i Wieprz też są na mojej trasie",
  nearbyParagraphs: [
    "Wadowice leżą pośrodku powiatu, więc stąd wszędzie jest blisko: Tomice tuż obok, Wieprz dziesięć kilometrów, Andrychów i Kalwaria Zebrzydowska po kilkanaście, Mucharz i Stryszów na południe. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jadąc drogą krajową na wschód mijam Kalwarię i Lanckoronę, dalej Skawinę i Kraków — czyli okolice, w których pracuję od dawna. Jeśli mieszkasz na granicy gminy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Andrychów",
    "Kalwaria Zebrzydowska",
    "Wieprz",
    "Tomice",
    "Skawina",
    "Kraków",
  ],

  about: blokOMnie("do Wadowic", "w powiecie wadowickim"),

  faq: [
    {
      question: "Mieszkam w Choczni, nie w samych Wadowicach. Przyjedziesz?",
      answer:
        "Tak i bez dopłaty za odległość — do wszystkich szesnastu sołectw gminy. Chocznia jest zresztą jedną z największych wsi w okolicy, więc bywam tam często. Powiedz przy umawianiu, w której części Choczni mieszkasz, bo wieś ciągnie się kilka kilometrów wzdłuż drogi i to realnie zmienia czas dojazdu.",
    },
    ...faqWspolne("w gminie Wadowice"),
    {
      question: "Wracam pociągiem z Krakowa. O której możesz przyjechać?",
      answer:
        "Dopasuję się do Twojego rozkładu — powiedz, o której realnie jesteś w domu, a resztę ułożę wokół tego. Popołudniowy przyspieszony wraca z Krakowa do Wadowic w niecałą godzinę i wiele osób umawia się właśnie po nim. Prezentacja trwa około dwóch godzin, więc spokojnie mieści się w wieczorze.",
    },
    {
      question: "Gotuję flaki i placki, a nie rzeczy z internetu. To ma sens?",
      answer:
        "Ma i akurat przy takim gotowaniu widać to najlepiej. Urządzenie nie zrobi flaków za Ciebie i nie będę udawać, że robi — ale całe przygotowanie i długie, równe gotowanie bez zaglądania do garnka przestaje wymagać Twojej obecności w kuchni. Na prezentacji chętnie pokażę to na tym, co u Was faktycznie się jada, a nie na przepisie z folderu.",
    },
  ],

  geo: { lat: 49.8828, lng: 19.494 },
};
