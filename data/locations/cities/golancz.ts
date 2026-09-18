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
 * GOŁAŃCZ — powiat wągrowiecki, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ GOŁAŃCZ NIE MA.
 * MIASTO: 3 150 mieszkańców (GUS 31.12.2024), 12,6 km²,
 *   gęstość 249,2 os./km².
 *   ⚠ [ZW — 3 150 / 12,6 = 250,0 wobec 249,2. Różnica
 *   0,8, W GRANICACH. PODAJĘ OBIE.]
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 7 690 osób, 191,8 km², gęstość
 *   41 os./km².
 *   ⚠ [ZW — 7 690 / 191,8 = 40,1 → 41. Różnica 0,9,
 *   W GRANICACH. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Powierzchnia w czterech rejestrach: 191,8 /
 *   191,79 / 192 / 192,13. PODAJĘ 191,8.
 *   ⚠⚠ RÓŻNIC NIE ROBIĘ KĄTEM (Kleczew).
 *   ⚠ LESISTOŚĆ: 15,2%. PODAJĘ.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PRAWIE KAŻDA MIEJSCOWOŚĆ
 *   MA SWÓJ GŁOS:
 *   GMINA GOŁAŃCZ MA 25 SOŁECTW NA 32 MIEJSCOWOŚCI
 *   (GUS Vademecum).
 *   TO ZNACZY, ŻE PRAWIE KAŻDA MIEJSCOWOŚĆ JEST
 *   OSOBNYM SOŁECTWEM — ma własne zebranie i własnego
 *   sołtysa.
 *   DLA PORÓWNANIA: w sąsiedniej gminie Ślesin, o której
 *   piszę w tej samej fali, jest 26 SOŁECTW NA 51
 *   MIEJSCOWOŚCI — tam połowa miejscowości własnego
 *   sołectwa nie ma.
 *   ⚠⚠⚠ PROCENTÓW NIE LICZĘ — podaję cztery liczby
 *   i pozwalam czytelnikowi zobaczyć różnicę.
 *   ⚠⚠ Liczba miejscowości podawana jest różnie:
 *   32 (GUS), 31 (geoportal), 35 (inny wykaz).
 *   PODAJĘ 32 ZA GUS I MÓWIĘ, ŻE TO LICZBA GUS.
 *   ⚠⚠⚠ RÓŻNICY REJESTROWEJ NIE ROBIĘ KĄTEM
 *   (Kleczew).
 * MIEJSCOWOŚCI: Bogdanowo, Brdowo, Buszewo, Chawłodno,
 *   Chojna, Czerlin, Czesławice, Czeszewo, Grabowo,
 *   Gręziny, Jeleń, Jeziorki, Konary, Krzyżanki,
 *   Kujawki, Laskownica Mała, Laskownica Wielka,
 *   Lęgniszewo, Morakówko, Morakowo, Mostki, Oleszno,
 *   Panigródz, Parkowo, Potulin, Prostkowo, Rybowo,
 *   Smogulec, Tomczyce, Zamczysko.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,9432 / 17,2997.
 *   ⚠ Wariant en.wikipedii 52,9483 / 17,3014 —
 *   rozbieżność ok. 0,6 km. UŻYWAM PIERWSZEGO.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ ŻEŃSKI, POTWIERDZONY CYTATEM:
 *   M. GOŁAŃCZ (ta Gołańcz) ·
 *   D. GOŁAŃCZY · Ms. w GOŁAŃCZY ·
 *   N. Gołańczą · C. Gołańczy.
 *   ⚠⚠⚠ DOPEŁNIACZ I MIEJSCOWNIK BRZMIĄ TAK SAMO.
 *   ⚠ POTWIERDZENIA: „Gołańcz ZOSTAŁA wymieniona
 *   w 1222 r.", „do Gołańczy", „Sieciesławie
 *   z Gołańczy", „w Gołańczy".
 *   Przymiotnik: GOŁANIECKI — potwierdzony
 *   („gołanieckiej szkoły", „gołanieckiego zamku").
 *   ⚠⚠⚠ BŁĄD 1, NAJCZĘSTSZY: traktowanie nazwy jak
 *   męskiej — „do Gołańcza", „w Gołańczu", „Gołańcz
 *   został". WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ BŁĄD 2: „gołańczański" zamiast „gołaniecki".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — Pary w gminie: LASKOWNICA MAŁA / LASKOWNICA
 *     WIELKA; MORAKOWO / MORAKÓWKO.
 *   — MOSTKI — nazwa identyczna z sołectwem w gminie
 *     Sompolno, o której piszę w tej samej fali.
 *   — PARKOWO — nazwa powtarza się w powiecie
 *     obornickim.
 *   — ZAMCZYSKO to odrębna miejscowość gminy.
 *     ⚠⚠ RUIN ZAMKU NIE OPISUJĘ — brak daty, a wątek
 *     obronny jest wykluczony.
 *   — „Gołańcz Pomorska": NIEPOTWIERDZONA [NP],
 *     NIE WYMIENIAM.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1222 R. PODAJĘ.
 *   ⚠⚠⚠ PRAW MIEJSKICH NIE DATUJĘ — starostwo podaje
 *     „między 1361 a 1399 rokiem", bo dokument
 *     lokacyjny się nie zachował. FIGURA „data
 *     przyjęta, nie znaleziona" ZAJĘTA (Krobia).
 *     ⚠ MOGĘ PODAĆ SAM PRZEDZIAŁ JEDNYM ZDANIEM
 *     W CZĘŚCI O RODZINIE, BEZ ROZWIJANIA.
 *
 * KĄT: PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS
 * — o tym, ile osób powinno decydować o jednej
 * rzeczy. Kąt z Gołańczy: 25 sołectw na 32
 * miejscowości, wobec 26 sołectw na 51 w sąsiedniej
 * gminie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gmina ma 25 sołectw na 32 miejscowości (GUS),
 *   czyli prawie każda miejscowość ma własne zebranie
 *   i własnego sołtysa,
 * — że w sąsiedniej gminie proporcja jest odwrotna:
 *   26 sołectw na 51 miejscowości. TO JEST RDZEŃ,
 * — ⚠⚠ że nie liczę z tego procentów i nie oceniam,
 *   która gmina ma lepszy ustrój,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO PYTANIE WRACA CODZIENNIE:
 *   ile osób ma głos w sprawie obiadu,
 * — ⚠⚠ ŻE PRZY PEŁNYM GŁOSIE DLA KAŻDEGO NIE POWSTAJE
 *   NIC — bo każdy ma prawo weta, a wetuje się łatwiej,
 *   niż proponuje,
 * — ⚠⚠ ŻE PRZY BRAKU GŁOSU DLA KOGOKOLWIEK JEDZENIE
 *   ZOSTAJE NA TALERZACH — to druga skrajność
 *   i też kosztuje,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: rozdzielcie te dwie rzeczy.
 *   Głos w sprawie „czego nie jem" ma każdy, zawsze.
 *   Głos w sprawie „co dziś gotujemy" ma ten, kto
 *   gotuje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ten podział działa
 *   tylko wtedy, gdy gotuje nie zawsze ta sama osoba.
 *   Jeśli zawsze ta sama, to nie jest podział
 *   kompetencji, tylko obciążenie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia
 *   tego, kto decyduje. Może za to obniżyć koszt
 *   gotowania na tyle, że gotować zacznie ktoś jeszcze.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO POŁĄCZONEGO W JEDEN UKŁAD — kąt zajęty
 *   (Ślesin, TA SAMA FALA). ⚠⚠⚠ MUSZĘ UWAŻAĆ: obie
 *   gminy porównuję tą samą liczbą. TAM chodzi o to,
 *   że wszystko jest ze sobą połączone; TU o to, ilu
 *   jest decydentów. NIE MIESZAM I ROZGRANICZAM
 *   JEDNYM ZDANIEM — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO GRANICY, KTÓREJ NIE USTALONO PRZEZ
 *   PÓŁ WIEKU — kąt zajęty (Okonek). Tam chodziło
 *   o granicę między dwoma stronami; tu o liczbę
 *   głosów przy jednym stole. ROZGRANICZAM DRUGIM
 *   ZDANIEM.
 * — ⚠⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew).
 * — ⚠⚠⚠ ZERO MAŁEJ CAŁOŚCI, DUŻEJ ROZPIĘTOŚCI —
 *   kąt zajęty (Ujście).
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt
 *   zajęty (Złotów).
 * — ⚠⚠ ZERO DATY PRZYJĘTEJ, NIE ZNALEZIONEJ — kąt
 *   zajęty (Krobia). DLATEGO PRZEDZIAŁU 1361–1399
 *   NIE ROZWIJAM.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O WYBIÓRCZOŚCI JEDZENIOWEJ JAKO
 *   PROBLEMIE, ANI O ALERGIACH I DIETACH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO PRZYPISYWANIA RÓL PŁCIOWYCH
 *   I ŻADNEGO OCENIANIA, KTO W DOMU POWINIEN GOTOWAĆ.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA USTROJU GMIN.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO I OBRONNEGO
 *   (RUIN ZAMKU NIE OPISUJĘ) · ZERO ALKOHOLU ·
 *   ZERO POŻARÓW · ZERO BEZROBOCIA · ZERO HERBU ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE LICZĘ procentów z liczby sołectw.
 * — NIE OCENIAM, która gmina jest lepiej zorganizowana.
 * — NIE PODAJĘ daty praw miejskich.
 * — NIE PODAJĘ największej wsi.
 * — NIE OPISUJĘ ruin zamku.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Gołańcz leży w powiecie wągrowieckim, liczy 3 150
 *   mieszkańców (GUS, 31.12.2024) na 12,6 km², czyli
 *   249,2 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 7 690 osób
 *   na 191,8 km², czyli 41 osób na kilometr
 *   kwadratowy; lasy zajmują 15,2% jej terenu,
 * — gmina ma 25 sołectw na 32 miejscowości (GUS),
 *   podczas gdy sąsiednia gmina Ślesin ma 26 sołectw
 *   na 51 miejscowości,
 * — pierwsza wzmianka o Gołańczy pochodzi z 1222 r.,
 *   a prawa miejskie nadano między 1361 a 1399 rokiem
 *   — dokument lokacyjny się nie zachował,
 * — nazwa jest rodzaju żeńskiego: mówi się „do
 *   Gołańczy" i „w Gołańczy", a przymiotnik brzmi
 *   „gołaniecki",
 * — w gminie leżą m.in. Panigródz, Smogulec, Morakowo,
 *   Morakówko, Laskownica Mała i Wielka, Czerlin,
 *   Jeziorki, Potulin, Rybowo i Zamczysko.
 */
export const GOLANCZ: CityContent = {
  slug: "golancz",
  h1: "Thermomix Gołańcz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gołańcz — cena i prezentacja",
  seoDescription:
    "Thermomix w Gołańczy w powiecie wągrowieckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gołańcz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gołańczy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gołańczy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu pięciu sołectw w gminie.",

  highlights: highlightyStandardowe("Gołańcz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia pięć sołectw na trzydzieści dwie miejscowości.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gołańczy – jak wygląda prezentacja?",
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
      id: "kto-ma-glos",
      heading: "Prawie każda miejscowość ma swój głos",
      paragraphs: [
        "Gmina Gołańcz ma według GUS dwadzieścia pięć sołectw na trzydzieści dwie miejscowości. To znaczy, że prawie każda miejscowość jest tu osobnym sołectwem — ma własne zebranie i własnego sołtysa.",
        "Dla porównania: sąsiednia gmina Ślesin ma dwadzieścia sześć sołectw na pięćdziesiąt jeden miejscowości. Tam ponad połowa miejscowości własnego sołectwa nie ma. Nie liczę z tego procentów i nie zamierzam oceniać, która gmina jest lepiej urządzona — pokazuję tylko, że to samo pytanie można rozstrzygnąć na dwa bardzo różne sposoby.",
        "Piszę o tym, bo w kuchni to samo pytanie wraca codziennie około siedemnastej: ile osób ma głos w sprawie obiadu.",
        "Skrajność pierwsza: pełny głos dla każdego. Brzmi sprawiedliwie, a w praktyce nie powstaje nic — bo każdy ma prawo weta, a zawetować jest zawsze łatwiej, niż zaproponować. Kończy się to pytaniem „to co w końcu?” zadawanym w kółko i makaronem o dziewiętnastej.",
        "Skrajność druga: nikt nie ma głosu poza osobą gotującą. Wtedy obiad powstaje punktualnie i zostaje na talerzach, a osoba gotująca ma pretensję, słusznie.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że wszystko w domu jest ze sobą połączone, i osobno o granicy między dwiema stronami, której nikt nie narysował. Tu nie chodzi ani o połączenia, ani o granicę — chodzi o coś węższego: ilu jest decydentów przy jednej decyzji.",
        "Ruch jest jeden i polega na rozdzieleniu dwóch rzeczy, które zwykle się zlepiają. Głos w sprawie „czego nie jem” ma każdy i ma go zawsze — to nie podlega negocjacji i nie jest kaprysem. Głos w sprawie „co dziś gotujemy” ma ten, kto dziś gotuje. Te dwie rzeczy nie są tym samym, a mieszanie ich jest powodem większości kuchennych kłótni, jakie znam.",
        "Uczciwie o drugiej stronie, bo ten podział ma jeden twardy warunek. Działa tylko wtedy, gdy gotuje nie zawsze ta sama osoba. Jeśli zawsze ta sama, to nie jest podział kompetencji, tylko obciążenie z ładną nazwą — i wtedy trzeba rozmawiać o czymś zupełnie innym niż o menu.",
        "I uczciwie o sprzęcie. Thermomix nie zmieni tego, kto w domu decyduje, i nie ma takiej mocy. Może natomiast obniżyć koszt samego gotowania na tyle, że zacznie gotować ktoś jeszcze — bo nie trzeba przy tym stać i pilnować, a przy jednym naczyniu zmywania jest mniej. Widziałam, że tak się dzieje, ale to skutek uboczny, nie obietnica.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gołańczy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, kto u Was decyduje, co jest na obiad. Nie oceniam — po prostu chcę wiedzieć, z kim rozmawiać o doborze dań.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gołańczy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Gołańczy",
      paragraphs: [
        "Gołańcz leży w powiecie wągrowieckim i liczy 3 150 mieszkańców (GUS, 31.12.2024) na 12,6 kilometra kwadratowego, czyli dwustu czterdziestu dziewięciu na kilometr — obie liczby podaję, bo zgadzają się z ilorazem. Cała gmina miejsko-wiejska to 7 690 osób na 191,8 kilometra kwadratowego, czyli czterdzieści jeden osób na kilometr, a lasy zajmują piętnaście procent jej terenu. Gmina ma dwadzieścia pięć sołectw na trzydzieści dwie miejscowości. Pierwsza wzmianka o Gołańczy pochodzi z 1222 roku; prawa miejskie nadano jej między 1361 a 1399 rokiem — dokładnej daty nie sposób podać, bo dokument lokacyjny się nie zachował. W gminie leżą między innymi Panigródz, Smogulec, Morakowo, Morakówko, Laskownica Mała i Wielka, Czerlin, Jeziorki, Potulin i Rybowo.",
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

  districtsHeading: "Do których części Gołańczy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu pięciu sołectw w gminie: Panigrodza, Smogulca, Morakowa, Morakówka, Laskownicy Małej i Wielkiej, Czerlina, Jeziorek, Potulina, Rybowa, Grabowa, Konar, Oleszna, Prostkowa, Tomczyc i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa, bo to najczęściej mylona nazwa w okolicy: Gołańcz jest rodzaju żeńskiego. Mówi się „do Gołańczy” i „w Gołańczy”, a nie „do Gołańcza” ani „w Gołańczu”; poprawnie jest też „Gołańcz została”, nie „został”. Przymiotnik brzmi „gołaniecki”. I praktyczna: w gminie są pary nazw łatwe do pomylenia — Laskownica Mała i Wielka, Morakowo i Morakówko — a nazwa Mostki powtarza się także w innych gminach.",
  ],
  districts: [],

  nearbyHeading: "Poza Gołańcz też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wągrowca, Kcyni, Szamocina, Skoków, Margonina i Janowca Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samej Gołańczy.",
  ],
  nearbyTowns: ["Wągrowiec", "Kcynia", "Szamocin", "Skoki", "Margonin", "Janowiec Wielkopolski"],

  about: blokOMnie("do Gołańczy", "w Gołańczy i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gołańczy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu pięciu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga językowa, bo nazwa jest podstępna: Gołańcz jest rodzaju żeńskiego, więc poprawnie jest „do Gołańczy” i „w Gołańczy”, a nie „do Gołańcza” ani „w Gołańczu”; mówi się też „Gołańcz została”, nie „został”. Dopełniacz i miejscownik brzmią tak samo. Przymiotnik od nazwy miasta to „gołaniecki”, nie „gołańczański”.",
    },
    ...faqWspolne("w Gołańczy"),
    {
      question: "Codziennie u nas awantura o to, co ma być na obiad. Jak to poukładać?",
      answer:
        "Rozdzielając dwie rzeczy, które zwykle się zlepiają. Gołańcz jest tu niezłym obrazem: gmina ma dwadzieścia pięć sołectw na trzydzieści dwie miejscowości, więc prawie każda ma własne zebranie i własnego sołtysa, podczas gdy w sąsiedniej gminie jest dwadzieścia sześć sołectw na pięćdziesiąt jeden miejscowości. To samo pytanie — ilu ma być decydentów — rozstrzygnięto tam na dwa różne sposoby. W kuchni sprawdza się taki podział: głos w sprawie „czego nie jem” ma każdy i ma go zawsze, bo to nie jest kaprys; głos w sprawie „co dziś gotujemy” ma ten, kto dziś gotuje. Warunek jest jeden i twardy: gotować musi nie zawsze ta sama osoba, inaczej to nie podział, tylko obciążenie z ładną nazwą.",
    },
    {
      question: "Czy po zakupie ktoś inny w domu zacznie gotować?",
      answer:
        "Czasem tak się dzieje, ale nie będę tego obiecywać, bo to nie zależy od urządzenia. Thermomix obniża koszt samego gotowania: nie trzeba stać przy garnku i pilnować, bo temperaturę i mieszanie prowadzi sam, a danie powstaje w jednym naczyniu, więc i zmywania jest mniej. Dla kogoś, kto do tej pory nie gotował z powodu „nie umiem, spalę, nie mam cierpliwości”, ta bariera faktycznie spada. Dla kogoś, kto nie gotował, bo nie uważał tego za swoje zadanie, nie spada nic — i to jest rozmowa, której żaden sprzęt nie zastąpi.",
    },
  ],

  geo: { lat: 52.9432, lng: 17.2997 },
};
