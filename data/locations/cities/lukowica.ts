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
 * ŁUKOWICA — gmina dwóch centrów i sześciuset sześćdziesięciu trzech
 * hektarów sadów. Jedyna w tej okolicy, która ciąży ku Nowemu Sączowi,
 * a nie ku Limanowej, i jedyna należąca do Lachów Sądeckich, a nie
 * Limanowskich. To są dwie osie tej strony.
 *
 * Największa ludnościowo i najgęściej zaludniona z całej trójki,
 * a przy tym najmniej leśna (23,3%). Przyszowa jest większa od samej
 * Łukowicy — gmina ma dwa ośrodki, nie jeden. Tekst jest pisany dla
 * domu w sadzie, w którym śliwkę suszy się od co najmniej stu lat.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 10 184 mieszkańców, GUS, stan na 31.12.2024; ewidencja gminna
 *   podawała 10 222 na 31.12.2020; wzrost o 12,6% w latach 2002–2024,
 * — mediana wieku 37,0 lat; 65+ 13,9%; dzieci 0–14 lat 21,4%.
 *   Powiat limanowski jest drugim najmłodszym powiatem w Polsce
 *   (mediana 36,4 lat wg GUS 2020),
 * — 10 sołectw (Przyszowa podzielona na I i II): Jadamwola, Jastrzębie,
 *   Łukowica, Młyńczyska, Owieczka, Przyszowa I, Przyszowa II,
 *   Roztoka, Stronie, Świdnik. Ludność wg miejscowości, ewidencja
 *   gminna 31.12.2020: Przyszowa 2 578, Łukowica 2 329, Stronie 1 124,
 *   Młyńczyska 1 024, Roztoka 862, Świdnik 740, Jastrzębie 639,
 *   Jadamwola 576, Owieczka 350,
 * — powierzchnia 69,7 km² (7 303 ha), gęstość 146 os./km² — najwyższa
 *   z trójki; długość granic 41,8 km; centrum na 440 m n.p.m.
 *   w Kotlinie Sądeckiej,
 * — struktura użytków: użytki rolne 4 577 ha (62,7%), w tym SADY
 *   663 ha (9,1%), grunty orne 2 336 ha, łąki i pastwiska 1 578 ha;
 *   lasy 1 703 ha, czyli lesistość 23,3% — znacznie mniej niż
 *   w Laskowej i Słopnicach,
 * — szczyty otaczające: Skiełek 749 m, Pępówka 774 m, w zasięgu
 *   Modyń 1 029 m,
 * — łukowicka śliwka suszona: Lista Produktów Tradycyjnych, wpis
 *   27.11.2006; odmiana węgierka zwykła, owoc 25–30 g; suszenie
 *   w tradycyjnych suśniach opalanych drewnem bukowym i śliwowym,
 *   proces trwa 1–1,5 doby; „suszenie śliwek w Gminie Łukowica odbywa
 *   się już co najmniej od 100 lat”, wiele suśni ma 50–100 lat
 *   (nowa.lukowica.pl),
 * — sadownictwo skoncentrowane w sołectwach Łukowica, Jadamwola
 *   i Jastrzębie, głównie jabłonie; portal regionalny wymienia też
 *   wiśnie i porzeczki,
 * — pierwsze wzmianki o Łukowicy 1325–1327; nazwa prawdopodobnie
 *   od wyrobu łuków; w 1444 r. część wsi lokowana na prawie niemieckim,
 * — drewniany kościół św. Andrzeja Apostoła w Łukowicy, konstrukcja
 *   zrębowa, obecna budowla 1593–1597, chrzcielnica 1593, dzwon 1752;
 *   obiekt na Szlaku Architektury Drewnianej,
 * — dworek w Świdniku, ruiny XIX-wiecznego dworku, kamienna kaplica
 *   na cmentarzu, trasa „Papieskie Ścieżki”,
 * — etnografia: Lachy Sądeckie (nie Limanowskie); zespół regionalny
 *   „Przyszowianie” im. Edwarda Bocheńskiego, założony w 2001 r. przy
 *   pierwszych dożynkach, ok. 35 tancerzy i śpiewaków, cztery pokolenia
 *   — od 12–14 lat do 96 lat; płyta wydana w 2008 r.,
 * — 524 podmioty gospodarcze, w przewadze mikrofirmy; brak dużych
 *   zakładów; dominują usługi budowlano-remontowe, handel, przetwórnie
 *   owocowo-warzywne, stolarstwo, blacharstwo i lakiernictwo;
 *   wymieniana spółdzielnia rolnicza „Pszczółka” z piekarnią,
 * — do Nowego Sącza ok. 19 km, do Limanowej ok. 15 km,
 * — busy: Limanowa → Łukowica (LIMBUS, KUSI-BUS), w dni robocze
 *   7:15, 8:30, 9:45, 10:55, 12:50, 15:00; Nowy Sącz → Roztoka
 *   6:35, 8:30, 10:30, 12:40, 15:15, 17:20, 19:15; do Krakowa kursy
 *   bezpośrednie 14:50 i 19:30,
 * — Łukowica – Limanowa to jedna z czterech powiatowych linii
 *   użyteczności publicznej; emeryci 50% zniżki, powyżej 70 lat
 *   przejazd bezpłatny,
 * — kolei brak; najbliższa czynna stacja w Nowym Sączu,
 * — dożynki gminne w Przyszowej, cyklicznie od 2001 r.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zdania „największa gmina sadownicza regionu”. Powierzchnia sadów
 *   jest potwierdzona (663 ha), ale rankingu gmin sadowniczych
 *   Małopolski nie ma, więc żadnego „pierwsza” ani „druga”,
 * — liczby czynnych suszarni i tonażu produkcji — brak danych,
 * — minimalnego spadku ludności między 2020 a 2024 r. (10 222 → 10 184).
 *   Nie piszę też „szybko rośnie” — to nieprawda dla tej gminy,
 * — osuwisk i powodzi z 2010 r. Powiat jest osuwiskowy, wiele rodzin
 *   straciło domy. Na stronie sprzedażowej nie ma na to miejsca,
 * — bezrobocia (najwyższe z trójki, 7,1%) i poziomu wynagrodzeń,
 * — pracy sezonowej przy zbiorach jako tematu — wynika ze struktury
 *   upraw, ale nie ma żadnych danych o zatrudnieniu,
 * — emigracji zarobkowej — brak liczb,
 * — pełnej listy KGW: potwierdzone jest tylko koło w Łukowicy.
 *   Nie podaję liczby kół.
 *
 * PUŁAPKA NR 1: DK75 Brzesko–Nowy Sącz NIE przechodzi przez tę gminę.
 * Przez Łukowicę nie biegnie ani droga krajowa, ani wojewódzka.
 *
 * PUŁAPKA NR 2: to Lachy SĄDECKIE, nie Limanowskie. W sąsiedniej
 * Laskowej i w Słopnicach są Limanowskie. Pomylenie tego jest
 * lokalnie czytelnym błędem.
 */
export const LUKOWICA: CityContent = {
  slug: "lukowica",
  h1: "Thermomix Łukowica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łukowica — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Łukowica: bezpłatna prezentacja TM7 u Ciebie w kuchni — Przyszowa, Stronie, Młyńczyska, Roztoka i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Łukowica — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łukowica. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Łukowica przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sołectw, z Przyszową na czele.",

  highlights: highlightyStandardowe("cała gmina Łukowica, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łukowicy – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu w Przyszowej, jak na końcu Młyńczysk.",
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
      heading: "Gmina dwóch wsi i sześciuset hektarów sadów",
      paragraphs: [
        "Łukowica ma coś, czego nie ma żadna sąsiednia gmina: dwa ośrodki zamiast jednego. Przyszowa jest większa od samej Łukowicy — mieszka w niej ponad dwa i pół tysiąca osób, w siedzibie gminy nieco mniej. To nie jest szczegół administracyjny, tylko codzienność: dwie szkoły, dwa kościoły, dwa zbiory sąsiadów i dwa różne pytania o to, „gdzie to właściwie jest”.",
        "Druga rzecz to sady. Sześćset sześćdziesiąt trzy hektary, prawie dwa razy tyle co w sąsiedniej Laskowej, skupione głównie w Łukowicy, Jadamwoli i Jastrzębiu. Lasu jest za to najmniej w całej okolicy — niecała jedna czwarta gminy. To jest teren rolniczy, a nie górski, i wygląda tu inaczej niż dziesięć kilometrów dalej na zachód.",
        "Z tych sadów bierze się rzecz, którą gmina ma wpisaną na ministerialną listę: łukowicka śliwka suszona. Węgierka zwykła, suszona w tradycyjnych suśniach opalanych drewnem bukowym i śliwowym przez dobę do półtorej. W opisie produktu zapisano wprost, że suszy się je tu od co najmniej stu lat, a wiele suśni ma pięćdziesiąt albo więcej. Tego się nie odtworzyło na potrzeby wniosku — to po prostu tu jest.",
        "Trzecia rzecz to kierunek. Wszystkie sąsiednie gminy ciążą ku Limanowej; Łukowica ciąży ku Nowemu Sączowi, do którego ma dziewiętnaście kilometrów. Widać to nawet w busach: z Roztoki do Nowego Sącza jest siedem kursów dziennie, pierwszy o wpół do siódmej rano. Do Limanowej też się jeździ, ale to już drugi kierunek, nie pierwszy. Etnograficznie jest zresztą tak samo — to Lachy Sądeckie, a nie Limanowskie, i mieszkanki dobrze wiedzą, na czym ta różnica polega.",
        "Dla kuchni z tego wszystkiego wynika bardzo praktyczny obraz. Wrzesień i październik to miesiące, w których pół domu pachnie śliwką, a w kuchni i tak trzeba codziennie ugotować obiad. Ktoś dojeżdża, ktoś wraca autobusem, dzieci są w domu wcześniej.",
        "Mówię więc uczciwie, czego to urządzenie nie zrobi: nie ugotuje za Was, nie wysuszy śliwek i nie nauczy niczego, czego babcia nie umiała lepiej. Zabiera dwie rzeczy. Konieczność stania obok garnka — zupa może się gotować, kiedy Ty jesteś na dworze albo przy dzieciach. I najbardziej żmudne czynności przy przetworach: rozdrabnianie, przecieranie, mieszanie, żeby nie przywarło do dna.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łukowica?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, w której miejscowości mieszkasz — i czy to Przyszowa, czy Łukowica, bo to dwa różne końce gminy. Owieczka, Jadamwola i Młyńczyska leżą jeszcze inaczej, a przez gminę nie przechodzi żadna droga krajowa ani wojewódzka, więc trasę układam z dróg powiatowych.",
        "Jeśli wracasz z Nowego Sącza albo z Limanowej busem, podaj godzinę kursu, którym jedziesz. To najprostszy sposób, żebym przyjechała kwadrans po Tobie, a nie zastała Cię na przystanku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łukowica"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym owoce są i pracą, i jedzeniem",
      paragraphs: [
        "Najczęstsza sytuacja, jaką tu widzę: rodzina z dziećmi, sad przy domu i przynajmniej jedna osoba dojeżdżająca do Nowego Sącza albo do Limanowej. Przez pół roku to zwykły rytm dnia, a przez drugie pół dochodzi do niego sezon, który nie pyta, czy akurat jest na niego czas.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować bez nadzoru i po prostu poczekać, a każdy weźmie porcję, kiedy wejdzie. Nie trzeba stać obok, nie trzeba mieszać, urządzenie samo wyłącza się w odpowiednim momencie.",
        "Druga rzecz to przetwory, i przy tutejszych sadach to nie jest dodatek do oferty, tylko sedno. Powidła, musy, soki, przeciery i pasty owocowe powstają partiami, bez przecierania przez sito i bez pilnowania dna garnka. Śliwki, których nie idą w suszenie, i jabłka, których nie sprzeda się w skupie, przestają być problemem, a zaczynają być zapasem na zimę.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — a w gminie, gdzie rodzic wraca busem po siedemnastej, to bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Łukowica dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich miejscowości i bez żadnej dopłaty za odległość: do Łukowicy, Przyszowej, Stronia, Młyńczysk, Roztoki, Świdnika, Jastrzębia, Jadamwoli i Owieczki. Formalnie sołectw jest dziesięć, bo Przyszowa dzieli się na I i II.",
    "Warto wiedzieć, że to gmina o dwóch centrach: Przyszowa jest większa od samej Łukowicy i razem skupiają blisko połowę mieszkańców. Do tego dochodzi Stronie i Młyńczyska, po tysiąc osób każde. Reszta to mniejsze wsie rozłożone po stokach Skiełka i Pępówki. Dlatego przy umawianiu proszę o nazwę miejscowości — sam numer domu niewiele mi mówi.",
    "Sadownictwo skupia się głównie w Łukowicy, Jadamwoli i Jastrzębiu i tam też stoją suśnie, w których suszy się śliwki. We wrześniu i październiku bywa, że umawiamy się między jedną a drugą partią — to zupełnie normalne, wystarczy, że powiesz, kiedy masz wolną godzinę.",
    "Przez gminę nie biegnie żadna droga krajowa ani wojewódzka, więc jedzie się tu drogami powiatowymi. Za to komunikacja busami jest jak na tę okolicę dobra: do Nowego Sącza kursy od wpół do siódmej rano, do Limanowej od kwadrans po siódmej, plus powiatowa linia Łukowica–Limanowa. Jeśli wracasz konkretnym kursem, powiedz którym.",
  ],
  districts: [
    "Łukowica",
    "Przyszowa",
    "Stronie",
    "Młyńczyska",
    "Roztoka",
    "Świdnik",
    "Jastrzębie",
    "Jadamwola",
    "Owieczka",
  ],

  nearbyHeading: "Nowy Sącz, Limanowa i sąsiednie gminy też są na mojej trasie",
  nearbyParagraphs: [
    "Łukowica jest jedyną gminą w tej okolicy, która ciąży bardziej ku Nowemu Sączowi niż ku Limanowej — do Sącza ma stąd dziewiętnaście kilometrów, do Limanowej piętnaście. Do obu jeżdżę regularnie, tak samo jak do Laskowej, Słopnic i Kamienicy, i do żadnej z nich nie doliczam dojazdu.",
    "Jeśli umawiasz się razem z siostrą albo sąsiadką, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim — a przy gminie o dwóch końcach jak ta, to naprawdę pomaga.",
  ],
  nearbyTowns: [
    "Nowy Sącz",
    "Limanowa",
    "Laskowa",
    "Słopnice",
    "Kamienica",
    "Tymbark",
    "Nowy Wiśnicz",
    "Kraków",
  ],

  about: blokOMnie("do Łukowicy", "w powiecie limanowskim"),

  faq: [
    {
      question:
        "Mieszkam w Przyszowej, nie w Łukowicy. Dojeżdżasz tam tak samo?",
      answer:
        "Tak, na dokładnie tych samych warunkach — Przyszowa jest zresztą największą miejscowością gminy, większą od siedziby urzędu. Dojazd jest bezpłatny do wszystkich sołectw, łącznie z Owieczką, Jadamwolą i Młyńczyskami.",
    },
    ...faqWspolne("w gminie Łukowica"),
    {
      question: "Mam sad i co roku zostaje mi mnóstwo owoców. Czy to pomoże?",
      answer:
        "Przy przetworach różnica jest największa i w tej gminie pytają o to najczęściej. Powidła, musy, soki i przeciery robi się partiami, bez przecierania przez sito i bez pilnowania dna garnka. Jeśli chcesz, na prezentacji zrobimy coś dokładnie z tego, co masz akurat w domu — w sezonie to najlepszy sprawdzian.",
    },
    {
      question: "Dojeżdżam do Nowego Sącza i wracam późno. Czy zdążymy?",
      answer:
        "Spokojnie. Prezentacja trwa około dwóch godzin, a wieczory w tygodniu to tu najczęściej wybierany termin. Powiedz przy umawianiu, którym kursem wracasz albo o której realnie jesteś w domu — przyjadę kwadrans po tej godzinie, a nie przed nią.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników — przy większej grupie potrzebuję też trochę więcej miejsca na blacie.",
    },
  ],

  geo: { lat: 49.605717, lng: 20.492473 },
};
