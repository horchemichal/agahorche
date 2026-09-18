import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * SZYDŁOWIEC — powiat szydłowiecki, woj. mazowieckie.
 * MIASTO 10 461 (GUS 31.12.2024), 21,9 km², 477,9 os./km².
 * PRAWA MIEJSKIE 1427.
 *
 * ⚠⚠ HOMONIM — KLUCZOWY:
 * SZYDŁOWIEC (mazowieckie) ≠ SZYDŁÓW (świętokrzyskie —
 * to tam są słynne śliwy!) ≠ SZYDŁOWO.
 * FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 *
 * ⚠⚠ PIASKOWIEC SZYDŁOWIECKI — PODSTAWA KĄTA:
 * — tradycje kamieniarskie od początku XV w.; wzrost
 *   znaczenia piaskowca w renesansie i baroku (płyty
 *   elewacyjne, posadzkowe, tworzywo rzeźbiarskie),
 * — użyto go m.in. do grobowca Stanisława Kostki Potockiego
 *   w Wilanowie, rzeźb lwów przed Pałacem Prezydenckim,
 *   okładzin Pałacu Kultury i Nauki i kamienic na Nowym
 *   Świecie,
 * — 1 stycznia 1951 — utworzono Szydłowiecko-Koneckie
 *   Zakłady Piaskowca; 1976–1978 — zbudowano największy
 *   w kraju zakład obróbki kamienia przy stacji kolejowej,
 *   na piaskowcu z kamieniołomu Śmiłów; wydobycie trwa do dziś,
 * — ⚠⚠ KAMIENIOŁOM „PIKIEL" — eksploatowany do 1972 r.,
 *   dziś dno zalane wodą, WIDOCZNE ŚLADY PNI I LIŚCI;
 *   „piaskowce szydłowieckie powstały w czasie, gdy obszar
 *   ten znajdował się w strefie przybrzeżnej płytkiego
 *   zbiornika wodnego". KAMIENIOŁOM „PODKOWIŃSKI" —
 *   stanowisko dokumentacyjne z dowodami fauny, flory
 *   i minerałów.
 * — ⚠⚠ KAMIENIARZE ŁUPIĄ PIASKOWIEC ZGODNIE
 *   Z UWARSTWIENIEM — kamień ma kierunek, którego nie da się
 *   zignorować. TO JEST KOTWICA.
 * ⚠ NAZW FIRM KAMIENIARSKICH NIE PODAJĘ. TWARDA GRANICA.
 *
 * LODOWNIA (fakt w bloku o mieście, NIE kąt):
 * piwnica wykuta w skale, ze ścianami wyłożonymi piaskowcem,
 * należąca do browaru, przeznaczona do składowania słodu
 * i piwa; DWA KORYTARZE PO OK. 100 m DŁUGOŚCI I 15 m
 * SZEROKOŚCI, połączone czterema korytarzami poprzecznymi;
 * większość obiektu pod ziemią; zawartość przechowywano
 * „w beczkach, otulanych lodem z trocinami".
 * ⚠ KĄTU CHŁODNICZEGO NIE UŻYWAM — „LODÓWKA" (Witnica)
 *   i „piwnica" (Jarosław) SĄ ZAJĘTE.
 * ⚠ DATY BUDOWY LODOWNI NIE PODAJĘ — nieustalona.
 * ⚠ ZERO TEMATU ALKOHOLU — browar wyłącznie jako fakt.
 *
 * ZAMEK: stoi NA SZTUCZNEJ WYSPIE, w rozlewiskach rzeki
 * KORZENIÓWKI, otoczony fosą i parkiem. Budowa 1470–1480
 * (Stanisław Szydłowiecki); rozbudowa 1515–1526 (Mikołaj
 * Szydłowiecki); przebudowa 1619–1629 (Albrecht Władysław
 * Radziwiłł); 1548 przejście do Radziwiłłów; 1802 kupno
 * przez Annę Sapieżynę; 1828 sprzedaż skarbowi Królestwa.
 * Mieści MUZEUM LUDOWYCH INSTRUMENTÓW MUZYCZNYCH,
 * ul. Gen. J. Sowińskiego 2, oraz „Eksperymentarium Dźwięku".
 * ⚠ DATY ZAŁOŻENIA MUZEUM ANI LICZBY INSTRUMENTÓW
 *   NIE PODAJĘ — nieustalone.
 *
 * DALSZE ZABYTKI: kościół św. Zygmunta (parafia 1401, budowa
 * 1493–1525, ołtarz główny z pocz. XVI w. z warsztatów
 * krakowskich); ratusz późnorenesansowy (pocz. XVII w.);
 * pręgierze (1. poł. XVII w.); cmentarz miejski (ok. 1811).
 * ⚠ KIRKUTU NIE WYMIENIAM — temat wyznaniowy. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH (weryfikacja niepełna).
 * ⚠ NAZW OSIEDLI NIE USTALONO — districts PUSTE.
 *
 * KĄT: W POPRZEK CZY WZDŁUŻ — kierunek cięcia i dlaczego
 * ten sam składnik pokrojony inaczej jest innym składnikiem.
 * Kąt od kamieniarzy szydłowieckich, którzy łupią piaskowiec
 * zgodnie z uwarstwieniem: kamień ma kierunek, którego nie da
 * się zignorować, a złamany w poprzek pęka inaczej niż wzdłuż.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że o kierunku cięcia myśli się tylko przy mięsie,
 *   a on decyduje przy połowie tego, co kroimy,
 * — MIĘSO: kroi się W POPRZEK WŁÓKIEN — wtedy włókno
 *   do przegryzienia jest krótkie i ten sam kawałek wydaje
 *   się delikatniejszy; wzdłuż wydaje się łykowaty,
 *   choćby był doskonały,
 * — ŻE TO SAMO DOTYCZY MIĘSA JUŻ UGOTOWANEGO — pieczeń
 *   pokrojona wzdłuż potrafi zepsuć wrażenie z całej roboty,
 * — CEBULA: krojona WZDŁUŻ, od korzenia do czubka, trzyma
 *   kształt i zostaje widoczna; W POPRZEK rozpada się w sos
 *   — to wybór między daniem z cebulą a daniem, w którym
 *   cebuli ma nie być, tylko ma być czuć,
 * — POR I SELER NACIOWY mają wyraźne włókna wzdłuż — pokrojone
 *   wzdłuż zostają nitkowate i ciągną się w ustach,
 * — KAPUSTA: szatkowana w poprzek główki daje krótkie paski,
 *   wzdłuż — długie i twarde,
 * — MARCHEW I PIETRUSZKA: krojone w poprzek dają krążki,
 *   które trzymają kształt; wzdłuż, w słupki — miękną szybciej,
 * — ZIOŁA: siekane tępym nożem i za długo ciemnieją; tu nie
 *   chodzi o kierunek, tylko o to, żeby ciąć, a nie miażdżyć,
 * — ⚠⚠ ZASADA OGÓLNA, DLA KTÓREJ TO WSZYSTKO SIĘ TRZYMA
 *   RAZEM: CIĄĆ W POPRZEK WŁÓKIEN, ŻEBY BYŁO MIĘKKO;
 *   WZDŁUŻ, ŻEBY TRZYMAŁO KSZTAŁT,
 * — ŻE PRZY WARZYWACH DO DŁUGIEGO GOTOWANIA WYBIERA SIĘ
 *   WZDŁUŻ, żeby nie rozpadły się w zupie,
 * — UCZCIWIE I NA NIEKORZYŚĆ URZĄDZENIA: THERMOMIX NIE ZNA
 *   KIERUNKU. Rozdrabnia obrotowo i to, co z niego wychodzi,
 *   jest cięte przypadkowo — a przy mięsie i porze to jest
 *   realna różnica. Tam, gdzie kierunek decyduje, kroi się
 *   nożem,
 * — ale tam, gdzie kierunek nie ma znaczenia — zupy krem,
 *   farsze, pasty, ciasta — nie ma sensu robić tego inaczej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI WYMIARÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ZERO TEMATU NOŻY, STALI I OSTRZENIA — kąt „NOŻE
 *   I OSTRZENIE" ZAJĘTY. Nóż pojawia się jako narzędzie
 *   w tle. TWARDA GRANICA.
 * — ⚠ ZERO ALKOHOLU.
 * — ⚠ ZERO TEMATU WYZNANIOWEGO.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO upadku przemysłu kamieniarskiego — wydobycie trwa.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy ROZMIARU
 *   I CZASU DOCHODZENIA.
 * — „NOŻE I OSTRZENIE" dotyczą NARZĘDZIA.
 * — „ROZDRABNIANIE — TARCIE, SIEKANIE, MIELENIE" dotyczy
 *   FUNKCJI URZĄDZENIA.
 * — „szatkowanie warzyw na surowo" dotyczy SURÓWEK.
 * — „KONSYSTENCJA" dotyczy EFEKTU KOŃCOWEGO.
 * TUTAJ chodzi WYŁĄCZNIE O KIERUNEK CIĘCIA WZGLĘDEM WŁÓKIEN
 * — o to, że ten sam składnik pokrojony inaczej zachowuje się
 * inaczej.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MYLĘ SZYDŁOWCA ze SZYDŁOWEM w świętokrzyskiem.
 * — NIE PODAJĘ daty budowy lodowni.
 * — NIE PODAJĘ daty założenia muzeum ani liczby instrumentów.
 * — NIE PODAJĘ nazw firm kamieniarskich ani osiedli.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE PISZĘ o nożach i ostrzeniu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szydłowiec otrzymał prawa miejskie w 1427 r., a tradycje
 *   kamieniarskie sięgają tu początku XV w.; znaczenie
 *   piaskowca wzrosło w renesansie i baroku, gdy używano go
 *   na płyty elewacyjne i posadzkowe oraz jako tworzywo
 *   rzeźbiarskie,
 * — piaskowca szydłowieckiego użyto między innymi
 *   do grobowca Stanisława Kostki Potockiego w Wilanowie,
 *   rzeźb lwów przed Pałacem Prezydenckim, okładzin Pałacu
 *   Kultury i Nauki oraz kamienic na Nowym Świecie,
 * — 1 stycznia 1951 r. utworzono Szydłowiecko-Koneckie
 *   Zakłady Piaskowca, a w latach 1976–1978 zbudowano przy
 *   stacji kolejowej największy w kraju zakład obróbki
 *   kamienia, pracujący na surowcu z kamieniołomu Śmiłów;
 *   wydobycie trwa do dziś,
 * — kamieniołom „Pikiel" eksploatowano do 1972 r.; jego dno
 *   jest dziś zalane wodą, a w ścianach widać ślady pni
 *   i liści — piaskowce szydłowieckie powstały bowiem wtedy,
 *   gdy obszar ten leżał w strefie przybrzeżnej płytkiego
 *   zbiornika wodnego; kamieniołom „Podkowiński" jest
 *   stanowiskiem dokumentacyjnym z dowodami dawnej fauny,
 *   flory i minerałów,
 * — zamek stoi na sztucznej wyspie w rozlewiskach Korzeniówki,
 *   otoczony fosą i parkiem; zbudował go w latach 1470–1480
 *   Stanisław Szydłowiecki, rozbudował w latach 1515–1526
 *   Mikołaj Szydłowiecki, a przebudował w latach 1619–1629
 *   Albrecht Władysław Radziwiłł; w 1802 r. kupiła go Anna
 *   Sapieżyna, a w 1828 sprzedano skarbowi Królestwa; dziś
 *   mieści Muzeum Ludowych Instrumentów Muzycznych,
 * — kościół św. Zygmunta budowano w latach 1493–1525, a jego
 *   ołtarz główny z początku XVI w. pochodzi z warsztatów
 *   krakowskich; ratusz jest późnorenesansowy, z początku
 *   XVII w., z tego samego stulecia pochodzą pręgierze,
 *   a cmentarz miejski założono około 1811 r.,
 * — w mieście zachowała się lodownia dawnego browaru:
 *   piwnica wykuta w skale i wyłożona piaskowcem, o dwóch
 *   korytarzach długości około stu metrów, połączonych
 *   czterema korytarzami poprzecznymi, gdzie beczki
 *   przechowywano otulone lodem z trocinami.
 */
export const SZYDLOWIEC: CityContent = {
  slug: "szydlowiec",
  h1: "Thermomix Szydłowiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szydłowiec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Szydłowcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szydłowiec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szydłowcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szydłowca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Szydłowiec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W poprzek włókien — żeby było miękko. Wzdłuż — żeby trzymało kształt.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szydłowcu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "kierunek-ciecia",
      heading: "Kamień, który ma kierunek — czyli o cięciu w poprzek i wzdłuż",
      paragraphs: [
        "Szydłowiec żyje z piaskowca od początku XV wieku. Jego kamień trafił do grobowca Stanisława Kostki Potockiego w Wilanowie, do rzeźb lwów przed Pałacem Prezydenckim, na okładziny Pałacu Kultury i na kamienice Nowego Światu. W kamieniołomie „Pikiel”, eksploatowanym do 1972 roku, w ścianach widać do dziś ślady pni i liści — piaskowce powstawały tu bowiem w strefie przybrzeżnej płytkiego zbiornika wodnego, warstwa po warstwie.",
        "I to jest rzecz, którą każdy kamieniarz wie od pierwszego dnia: kamień ma kierunek. Łupie się go zgodnie z uwarstwieniem, bo w poprzek pęka zupełnie inaczej — nierówno, z odpryskami, nie tam, gdzie się chciało. Materiał nie jest jednorodny i udawanie, że jest, kończy się zmarnowanym blokiem.",
        "W kuchni mamy dokładnie to samo, tylko myślimy o tym najwyżej przy mięsie. A kierunek cięcia decyduje przy połowie tego, co bierzemy na deskę.",
        "Zacznijmy jednak od mięsa, bo tam różnica jest największa i najłatwiej ją poczuć. Mięso kroi się w poprzek włókien. Wtedy włókno, które trzeba przegryźć, jest krótkie i ten sam kawałek wydaje się delikatniejszy. Pokrojone wzdłuż wydaje się łykowate, choćby było doskonałej jakości i idealnie ugotowane. Dotyczy to również mięsa już upieczonego: pieczeń pokrojona wzdłuż potrafi zepsuć wrażenie z całej wcześniejszej roboty, a nikt przy stole nie domyśli się dlaczego.",
        "Cebula jest drugim przykładem i tu wybór jest świadomy. Krojona wzdłuż, od korzenia do czubka, trzyma kształt i zostaje w daniu widoczna. Krojona w poprzek, w półplasterki, rozpada się i wchodzi w sos. To nie jest niuans dla wtajemniczonych — to wybór między daniem z cebulą a daniem, w którym cebuli ma nie być, tylko ma być czuć.",
        "Por i seler naciowy mają bardzo wyraźne włókna biegnące wzdłuż. Pokrojone wzdłuż zostają nitkowate i ciągną się w ustach; w poprzek — rozpadają się na krótkie kawałki i znikają w daniu. Kapusta szatkowana w poprzek główki daje krótkie paski, a wzdłuż długie i twardsze.",
        "Marchew i pietruszka pokrojone w poprzek dają krążki, które w zupie trzymają kształt; pokrojone wzdłuż, w słupki, miękną szybciej i wcześniej się rozpadają.",
        "Wszystko to składa się w jedną zasadę, którą warto zapamiętać zamiast całej listy: w poprzek włókien, żeby było miękko; wzdłuż, żeby trzymało kształt. Dlatego do zupy gotowanej długo wybiera się cięcie wzdłuż, a do szybkiego dania — w poprzek.",
        "Osobny przypadek to zioła, gdzie nie chodzi o kierunek, tylko o sam sposób: mają być pocięte, a nie zmiażdżone. Szatkowane tępym nożem i za długo po prostu ciemnieją i robią się papkowate.",
        "Teraz uczciwie o sprzęcie, i będzie to na jego niekorzyść. Thermomix nie zna kierunku. Rozdrabnia obrotowo, więc to, co z niego wychodzi, jest pocięte przypadkowo — raz w poprzek, raz wzdłuż, raz na miazgę. Przy mięsie, porze i selerze naciowym to jest realna różnica i nie ma sensu jej ukrywać. Gdzie kierunek decyduje, kroi się nożem, na desce, spokojnie.",
        "Gdzie nie decyduje — a takich przypadków jest dużo więcej — nie ma powodu robić tego inaczej. Zupy krem, farsze, pasty, ciasta, przeciery: tam wszystko i tak zostanie rozdrobnione do końca, a kierunek włókien przestaje istnieć. Cała umiejętność polega na tym, żeby wiedzieć, w którym z tych dwóch przypadków się właśnie jest — dokładnie tak samo jak przy kamieniu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szydłowcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy chcecie zobaczyć raczej krojenie, czy raczej gotowanie — pokażę też to, co urządzeniu wychodzi gorzej niż ręką.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szydłowcu"),
    sekcjaRaty("w Szydłowcu"),
    {
      id: "rodzina",
      heading: "Thermomix dla szydłowieckiej rodziny",
      paragraphs: [
        "Szydłowiec liczy ponad dziesięć tysięcy mieszkańców na dwudziestu dwóch kilometrach kwadratowych, a prawa miejskie otrzymał w 1427 roku. Tradycje kamieniarskie sięgają tu początku XV wieku; znaczenie piaskowca wzrosło w renesansie i baroku, gdy używano go na płyty elewacyjne i posadzkowe oraz jako tworzywo rzeźbiarskie. Piaskowca szydłowieckiego użyto między innymi do grobowca Stanisława Kostki Potockiego w Wilanowie, rzeźb lwów przed Pałacem Prezydenckim, okładzin Pałacu Kultury i Nauki oraz kamienic na Nowym Świecie. 1 stycznia 1951 roku utworzono Szydłowiecko-Koneckie Zakłady Piaskowca, a w latach 1976–1978 zbudowano przy stacji kolejowej największy w kraju zakład obróbki kamienia, pracujący na surowcu z kamieniołomu Śmiłów; wydobycie trwa do dziś. Kamieniołom „Pikiel” eksploatowano do 1972 roku — jego dno jest dziś zalane wodą, a w ścianach widać ślady pni i liści, bo piaskowce powstawały tu w strefie przybrzeżnej płytkiego zbiornika wodnego; kamieniołom „Podkowiński” jest stanowiskiem dokumentacyjnym. Zamek stoi na sztucznej wyspie w rozlewiskach Korzeniówki, otoczony fosą i parkiem: zbudował go w latach 1470–1480 Stanisław Szydłowiecki, rozbudował w latach 1515–1526 Mikołaj Szydłowiecki, a przebudował w latach 1619–1629 Albrecht Władysław Radziwiłł; w 1802 kupiła go Anna Sapieżyna, w 1828 sprzedano skarbowi Królestwa, a dziś mieści Muzeum Ludowych Instrumentów Muzycznych. Kościół świętego Zygmunta budowano w latach 1493–1525, jego ołtarz główny pochodzi z warsztatów krakowskich, ratusz jest późnorenesansowy z początku XVII wieku, z tego samego stulecia pochodzą pręgierze, a cmentarz miejski założono około 1811 roku. Zachowała się też lodownia dawnego browaru — piwnica wykuta w skale i wyłożona piaskowcem, o dwóch stumetrowych korytarzach, gdzie beczki przechowywano otulone lodem z trocinami.",
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

  districtsHeading: "Do których części Szydłowca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — okolic Rynku Wielkiego, rejonu zamku i parku, osiedla przy stacji kolejowej i Podzamcza. Dojeżdżam też do miejscowości w gminie: Śmiłowa, Sadka, Majdowa, Wysokiej i Zdziechowa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Szydłowiec też przyjadę",
  nearbyParagraphs: [
    "Radom, Skarżysko-Kamienna, Orońsko, Chlewiska i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radom", "Skarżysko-Kamienna", "Przysucha"],

  about: blokOMnie("do Szydłowca", "w Szydłowcu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szydłowca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości w gminie — Śmiłowa, Sadka, Majdowa i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Szydłowiec w powiecie szydłowieckim na Mazowszu, a nie o Szydłów w świętokrzyskim ani o Szydłowo.",
    },
    ...faqWspolne("w Szydłowcu"),
    {
      question: "Dlaczego mięso kroi się w poprzek włókien?",
      answer:
        "Bo wtedy włókno, które trzeba przegryźć, jest krótkie i ten sam kawałek wydaje się delikatniejszy. Pokrojone wzdłuż wydaje się łykowate, choćby było doskonałej jakości. Dotyczy to też mięsa już upieczonego — pieczeń pokrojona wzdłuż potrafi zepsuć wrażenie z całej roboty.",
    },
    {
      question: "Jak kroić cebulę: wzdłuż czy w poprzek?",
      answer:
        "Zależy, czego chcecie. Krojona wzdłuż, od korzenia do czubka, trzyma kształt i zostaje w daniu widoczna. Krojona w poprzek rozpada się i wchodzi w sos. To wybór między daniem z cebulą a daniem, w którym cebuli ma nie być, tylko ma być czuć.",
    },
    {
      question: "Czy Thermomix kroi w poprzek włókien?",
      answer:
        "Nie — rozdrabnia obrotowo, więc tnie przypadkowo: raz w poprzek, raz wzdłuż. Przy mięsie, porze i selerze naciowym to realna różnica i tam lepiej pokroić nożem. Przy zupach krem, farszach, pastach i ciastach kierunek przestaje mieć znaczenie, bo wszystko i tak zostaje rozdrobnione do końca.",
    },
  ],

  geo: { lat: 51.228, lng: 20.8612 },
};
