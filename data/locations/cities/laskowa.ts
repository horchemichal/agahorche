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
 * LASKOWA — gmina suski sechlońskiej, czyli jedynej rzeczy w tej
 * okolicy, która ma chronioną nazwę w całej Unii. I gmina, z której
 * pięć na sześć osób dojeżdżających jedzie na zewnątrz. To są dwie
 * osie tej strony.
 *
 * Nazwa produktu pochodzi od sołectwa Sechna. Śliwki suszy się tu
 * dymem w podziemnych tunelach zwanych luftówkami. To nie jest
 * ciekawostka turystyczna — to wciąż działająca gałąź gospodarki
 * i wciąż ta sama kuchnia. Tekst jest pisany dla domu w dolinie
 * Łososiny, w którym owoce są jednocześnie pracą i jedzeniem.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 8 190 mieszkańców, GUS, stan na 31.12.2024 (inne odczyty: 8 147;
 *   gmina podawała 8 206 w 2019 r.); wzrost o 12,4% w latach 2002–2024;
 *   przyrost naturalny 2024 +16, saldo migracji wewnętrznych −39,
 * — średnia wieku 36,8 lat; 65+ tylko 13,3%; dzieci 0–14 lat 21,1%.
 *   Powiat limanowski jest drugim najmłodszym powiatem w Polsce
 *   (mediana 36,4 lat wg GUS 2020, po powiecie kartuskim),
 * — 9 sołectw, ewidencja gminna 2019: Laskowa 3 140, Ujanowice 925,
 *   Żmiąca 718, Jaworzna 556, Sechna 546, Krosna 542, Strzeszyce 342,
 *   Kamionka Mała 315, Kobyłczyna 315,
 * — powierzchnia 72,5 km², gęstość 113 os./km², lesistość ok. 36–40%
 *   (GUS 36,4%, strategia gminy 40%); centrum na 326 m n.p.m.,
 * — szczyt Kamionna 801 m (Korona Beskidu Wyspowego; opis ośrodka
 *   narciarskiego podaje 805 m); w zasięgu Jaworz 918 m, Sałasz 905 m,
 * — sołectwa rozwinęły się w dolinie Łososiny i dolinach jej dopływów,
 * — suska sechlońska: Lista Produktów Tradycyjnych 28.11.2006,
 *   Chronione Oznaczenie Geograficzne UE od października 2010;
 *   obszar produkcji obejmuje gminy Laskowa, Iwkowa, Łososina Dolna
 *   i Żegocina; suszenie dymem w podziemnych tunelach („luftówkach”)
 *   zakończonych paleniskiem; zgłaszający: Stowarzyszenie Producentów
 *   Owoców i Warzyw w Ujanowicach; nagroda „Nasze Kulinarne
 *   Dziedzictwo” 2004,
 * — sady 365,81 ha; łąki trwałe 1 734,54 ha; średnia wielkość
 *   gospodarstwa 3,6 ha; 14 gospodarstw na Małopolskim Szlaku Owocowym
 *   — w Sechnej, Kobyłczynie i Żmiącej,
 * — dwór w Laskowej z 1667 r. — DREWNIANY, modrzewiowy, konstrukcja
 *   zrębowa, w rejestrze zabytków (dec. z 14.04.1993), z parkiem
 *   i kapliczką św. Jana Nepomucena,
 * — kościół św. Michała Archanioła w Ujanowicach, 1526 r., gotycki,
 *   MUROWANY; kościół św. Katarzyny w Kamionce Małej, XVII w.,
 *   MUROWANY, z krucyfiksem z XV w.,
 * — cmentarze wojenne z I wojny: nr 357 Kamionka Mała (kaplica z 1915,
 *   pochowanych 260 żołnierzy trzech armii), nr 358 Laskowa,
 *   nr 359 Jaworzna,
 * — Stacja Narciarska Laskowa-Kamionna: kolej krzesełkowa, wyciąg
 *   orczykowy, 4 km tras, 460–760 m n.p.m., naśnieżanie i oświetlenie,
 * — dojazdy do pracy: 505 osób wyjeżdża, 95 przyjeżdża (Strategia
 *   Rozwoju Gminy 2021–2030) — saldo −410,
 * — DW965 przez gminę: Limanowa → Laskowa → Żegocina → Nowy Wiśnicz →
 *   Bochnia → Drwinia; do Limanowej 9 km / ok. 12 min,
 * — 8 Kół Gospodyń Wiejskich: Laskowa, Jaworzna, Kamionka Mała, Krosna,
 *   Strzeszyce, Żmiąca, Ujanowice-Kobyłczyna, Sechna,
 * — zespół „Laskowiaki” i kapela „Laskowioki”,
 * — Festiwal Śliwki, Miodu i Sera — sierpień, w 2026 r. XV edycja;
 *   Galicyjski Konkurs Powożenia Zaprzęgami Konnymi w Ujanowicach —
 *   lipiec, XVII edycja; Powiatowy Przegląd Dorobku Artystycznego KGW,
 * — obszar Lachów Limanowskich; granica grupy biegnie doliną Łososiny
 *   i dalej ku Sechnej,
 * — remont DW965 Zielona–Limanowa (17,7 km, 43,4 mln zł): prace
 *   na odcinku Żegocina–Limanowa trwały jeszcze w listopadzie 2025 r.
 *   — ruch wahadłowy w Laskowej Górnej.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — osuwisk. Gmina ma je aktywne w rejonach Kamionki Małej, Krosnej,
 *   Jaworznej i Żmiącej; w 2018 r. wydała 2,3 mln zł na usuwanie
 *   skutków klęsk żywiołowych. To fakt, ale wiele rodzin w powiecie
 *   straciło przez to domy. Na stronie sprzedażowej AGD nie ma na to
 *   miejsca w żadnej formie,
 * — powodzi z 2010 r. w dolinie Łososiny,
 * — bezrobocia i wynagrodzeń na poziomie 80% średniej krajowej,
 * — liczby dojeżdżających (505/95) — to dane do zrozumienia sytuacji,
 *   nie do wydrukowania na stronie,
 * — zdania „drewniane kościoły w Laskowej i Ujanowicach”. NIEPRAWDA:
 *   oba kościoły są murowane. Drewniany jest DWÓR z 1667 r.,
 * — zdania, że przez gminę biegnie DK75. Nie biegnie — to DW965,
 * — smogu: brak danych pomiarowych dla gminy, więc ani słowa,
 * — emigracji zarobkowej — brak liczb.
 *
 * PUŁAPKA: Kamionna (szczyt, 801 m) to nie to samo co Kamionka Mała
 * (sołectwo). Ośrodek narciarski nazywa się Laskowa-Kamionna.
 */
export const LASKOWA: CityContent = {
  slug: "laskowa",
  h1: "Thermomix Laskowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Laskowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Laskowa: bezpłatna prezentacja TM7 u Ciebie w kuchni — Ujanowice, Sechna, Żmiąca, Krosna i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Laskowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Laskowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Laskowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dziewięciu sołectw.",

  highlights: highlightyStandardowe("cała gmina Laskowa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Laskowej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu w dolinie, jak na stoku w Żmiącej.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Dolina, w której owoc jest jednocześnie pracą i jedzeniem",
      paragraphs: [
        "W tej gminie powstaje jedyny produkt w całej okolicy z chronioną nazwą w skali całej Unii Europejskiej. Suska sechlońska — suszona śliwka, której nazwa pochodzi od tutejszego sołectwa Sechna — jest na ministerialnej Liście Produktów Tradycyjnych od 2006 roku, a europejską ochronę dostała cztery lata później. Suszy się ją dymem, w podziemnych tunelach zwanych luftówkami, zakończonych paleniskiem. To nie skansen. To wciąż działająca gałąź gospodarki.",
        "Wokół są sady — trzysta sześćdziesiąt pięć hektarów — i czternaście gospodarstw wpisanych na Małopolski Szlak Owocowy, głównie w Sechnej, Kobyłczynie i Żmiącej. Średnie gospodarstwo ma tu jednak niecałe cztery hektary, więc mało kto utrzymuje się z samej ziemi. Owoce są dodatkiem do pensji, a nie zamiast niej.",
        "I tu dochodzimy do drugiej rzeczy, którą widać w dokumentach gminy: z Laskowej wyjeżdża do pracy pięć razy więcej ludzi, niż do niej przyjeżdża. Nie ma tu dużego zakładu. Jest za to droga wojewódzka, która prowadzi w dwie strony — na południe do Limanowej, dziewięć kilometrów, i na północ przez Żegocinę do Nowego Wiśnicza i Bochni. Rano dolina się opróżnia, wieczorem zapełnia.",
        "Trzecia rzecz to wiek. Powiat limanowski jest drugim najmłodszym powiatem w Polsce, a Laskowa jest młodsza niż jego średnia: co piąty mieszkaniec nie skończył piętnastu lat, a osób po sześćdziesiątym piątym roku życia jest tu wyraźnie mniej niż w kraju. Mówiąc wprost — bardzo dużo małych dzieci i bardzo dużo kuchni, w których gotuje się codziennie i dla kilku osób.",
        "Te trzy rzeczy razem dają bardzo konkretny obraz dnia: powrót po siedemnastej, dzieci głodne od godziny, a we wrześniu jeszcze skrzynki owoców na werandzie, które trzeba przerobić, zanim się zepsują. To jest sytuacja, w której nie brakuje umiejętności ani chęci. Brakuje rąk i tego, żeby móc być w dwóch miejscach naraz.",
        "Odpowiadam na to uczciwie: Thermomix nie gotuje za nikogo i nie zastąpi wprawy, której w tej dolinie nie brakuje. Zabiera dwie rzeczy — konieczność stania obok garnka i te czynności, przez które przetwory odkłada się na weekend: siekanie, przecieranie, mieszanie, żeby nie przywarło.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Laskowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz. Sama Laskowa skupia blisko czterdzieści procent mieszkańców gminy, ale Ujanowice, Żmiąca czy Kamionka Mała leżą już wyraźnie na uboczu i dojazd wygląda tam zupełnie inaczej.",
        "Jeśli wracasz z pracy spoza gminy, podaj godzinę, o której realnie jesteś w domu. W Laskowej umawiam się na wieczory częściej niż gdziekolwiek indziej w okolicy — i wolę przyjechać kwadrans po Tobie niż zastać Cię w drzwiach z torbami.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Laskowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w rodzinie z dziećmi i ze skrzynkami owoców",
      paragraphs: [
        "Najczęstsza sytuacja, jaką tu widzę: dwoje dorosłych, przynajmniej jedno dojeżdża poza gminę, dzieci wracają ze szkoły wcześniej, a obiad ma powstać między siedemnastą a osiemnastą. Do tego przez pół roku dochodzi sezon — najpierw truskawki i wiśnie, potem jabłka i śliwki.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować bez nadzoru i po prostu poczekać. Nie trzeba stać obok, nie trzeba mieszać, urządzenie samo wyłącza się w odpowiednim momencie — a Ty w tym czasie robisz to, czego nie da się odłożyć.",
        "Druga rzecz to przetwory. Musy, powidła, soki, przeciery i pasty owocowe robi się partiami, bez przecierania przez sito i bez pilnowania, żeby nie przywarło. W gminie, gdzie sady stoją przy większości domów, to nie jest dodatkowa funkcja — to jest główny powód, dla którego ktoś się w ogóle nad urządzeniem zastanawia.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — w domu, gdzie rodzice wracają po siedemnastej, to bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Laskowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewięciu sołectw i bez żadnej dopłaty za odległość: do Laskowej, Ujanowic, Żmiącej, Jaworznej, Sechnej, Krosnej, Strzeszyc, Kamionki Małej i Kobyłczyny.",
    "Gmina rozłożyła się w dolinie Łososiny i w dolinach jej dopływów — to znaczy, że jedzie się tu wzdłuż wody, a nie na przełaj. Sama Laskowa skupia blisko czterdzieści procent mieszkańców i jest jedynym dużym centrum; reszta sołectw to kilkusetosobowe wsie rozciągnięte po zboczach. Dlatego przy umawianiu proszę o nazwę miejscowości, a nie o samą „gminę Laskowa”.",
    "Osobno zaznaczam Sechną, bo od niej wzięła nazwę suska sechlońska, i Ujanowice, gdzie stoi gotycki kościół z 1526 roku i gdzie w lipcu odbywa się Galicyjski Konkurs Powożenia Zaprzęgami Konnymi. Warto też wiedzieć, że najstarszy zabytek gminy — drewniany, modrzewiowy dwór z 1667 roku — stoi w samej Laskowej, w parku.",
    "Przez gminę biegnie droga wojewódzka z Limanowej przez Żegocinę do Nowego Wiśnicza i Bochni. Była przez lata przebudowywana i jeszcze niedawno na odcinku w Laskowej Górnej obowiązywał ruch wahadłowy — jeśli umawiamy się w godzinach szczytu, zostawiam sobie zapas czasu.",
  ],
  districts: [
    "Laskowa",
    "Ujanowice",
    "Żmiąca",
    "Jaworzna",
    "Sechna",
    "Krosna",
    "Strzeszyce",
    "Kamionka Mała",
    "Kobyłczyna",
  ],

  nearbyHeading: "Limanowa, Żegocina i droga na Bochnię też są na mojej trasie",
  nearbyParagraphs: [
    "Laskowa leży na trasie, którą jeżdżę regularnie w obie strony: na południe do Limanowej, na północ przez Żegocinę i Nowy Wiśnicz do Bochni. Do Lipnicy Murowanej i Łukowicy też dojeżdżam, bez dopłaty i bez względu na granicę gminy.",
    "Jeśli umawiasz się razem z koleżankami z koła gospodyń, powiedz o tym od razu — w tej gminie działa ich osiem, po jednym w prawie każdym sołectwie, i spotkania grupowe są tu najzupełniej normalne. Potrzebuję tylko wiedzieć, ile osób będzie i gdzie się spotykacie.",
  ],
  nearbyTowns: [
    "Limanowa",
    "Żegocina",
    "Lipnica Murowana",
    "Nowy Wiśnicz",
    "Bochnia",
    "Łukowica",
    "Słopnice",
    "Brzesko",
  ],

  about: blokOMnie("do Laskowej", "w powiecie limanowskim"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Laskowa?",
      answer:
        "Tak — do wszystkich dziewięciu, od Laskowej i Ujanowic po Żmiącą, Kamionkę Małą i Kobyłczynę. Dojazd jest bezpłatny i nie zależy od tego, jak wysoko nad doliną mieszkasz.",
    },
    ...faqWspolne("w gminie Laskowa"),
    {
      question: "Mam sad i co roku robię przetwory. Czy to naprawdę pomaga?",
      answer:
        "Przy przetworach różnica jest największa. Musy, powidła, soki i przeciery robi się partiami, bez przecierania przez sito i bez stania nad garnkiem. Jeśli chcesz, na prezentacji zrobimy coś dokładnie z tego, co masz akurat w domu — w sezonie to najlepszy możliwy sprawdzian.",
    },
    {
      question: "Wracam z pracy dopiero po siedemnastej. Czy zdążymy?",
      answer:
        "Spokojnie. Prezentacja trwa około dwóch godzin, a wieczory w tygodniu to w tej gminie najczęściej wybierany termin — z Laskowej dojeżdża do pracy bardzo dużo osób. Powiedz przy umawianiu, o której realnie jesteś w domu, a przyjadę kwadrans po tej godzinie.",
    },
    {
      question: "Czy przyjedziesz na spotkanie koła gospodyń?",
      answer:
        "Tak i robię tak często — w gminie działa osiem kół. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
  ],

  geo: { lat: 49.763631, lng: 20.451874 },
};
