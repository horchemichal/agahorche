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
 * RYCHWAŁ — powiat koniński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA — powiat
 *   koniński ma 14 gmin, a TERYT miasta i gminy różni
 *   się wyłącznie ostatnią cyfrą (3010074 / 3010073).
 * MIASTO: 2 375 mieszkańców (GUS 31.12.2024),
 *   9,7 km², gęstość 244,8 os./km².
 *   ⚠ [ZW — 2 375 / 9,7 = 244,85. Różnica 0,05.
 *   NAJLEPSZE DOMKNIĘCIE TEJ FALI. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 7 977 osób, 117,8 km², gęstość
 *   68 os./km².
 *   ⚠ [ZW — 7 977 / 117,8 = 67,7. Różnica 0,28.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 23 SOŁECTWA i 24 MIEJSCOWOŚCI
 *   (starostwo + ewidencja).
 *   ⚠⚠⚠ JEDEN SERWIS PODAJE 58 MIEJSCOWOŚCI —
 *   LICZBY TEJ NIE UŻYWAM I RÓŻNICY NIE OPISUJĘ,
 *   bo kąt „cztery rejestry, cztery liczby" JEST
 *   ZAJĘTY (Kleczew).
 *   ⚠⚠ OBRĘBÓW EWIDENCYJNYCH (22) NIE PODAJĘ —
 *   kąt „samorząd dzieli drobniej niż kataster"
 *   ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI (część): Biała Panieńska, Czyżew,
 *   Dąbroszyn, Grabowa, Grochowy, Jaroszewice
 *   Grodzieckie, Jaroszewice Rychwalskie, Kuchary
 *   Borowe, Lubiny, Modlibogowice, Rozalin, Rybie,
 *   Siąszyce, Siąszyce Trzecie, Święcia, Urszulin,
 *   Wardężyn, Wola Rychwalska, Złotkowy, Zosinki.
 *   ⚠⚠⚠ „KUCHARY KOŚCIELNE" POMIJAM W WYLICZENIU —
 *   ZERO WĄTKU WYZNANIOWEGO, także w nazwach.
 *   ⚠⚠ „SIĄSZYCE TRZECIE" BEZ DRUGICH I PIERWSZYCH —
 *   ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ, kąt „numeracja
 *   zaczyna się od drugiego" ZAJĘTY (Książ
 *   Wielkopolski, poprzednia fala). WYMIENIAM NAZWĘ
 *   W WYLICZENIU, BEZ KOMENTARZA.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 14,6 %. PODAJĘ.
 * ZAMEK: zbudowany na przełomie XIV i XV stulecia.
 *   PODAJĘ JAKO DATOWANY OBIEKT.
 *   ⚠⚠⚠ BEZ OKREŚLENIA „OBRONNY" — ZERO WĄTKU
 *   MILITARNEGO.
 * ⚠ GEO: 52,0697 / 18,1663 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA:
 *   Ms. w RYCHWALE (⚠ ł → l) — POTWIERDZONY DWOMA
 *   CYTATAMI: „2,3 tys. osób mieszka w Rychwale",
 *   „informacje o Rychwale".
 *   B. RYCHWAŁ — potwierdzony („nabył Rychwał
 *   z okolicznymi wsiami").
 *   ⚠⚠⚠ DOPEŁNIACZA ŻADNE ŹRÓDŁO NIE UŻYŁO [NP].
 *   W OBIEGU SĄ DWIE FORMY: „do Rychwała"
 *   i „do Rychwału". ⚠⚠⚠ UŻYWAM „DO RYCHWAŁU"
 *   JAKO FORMY ZGODNEJ ZE WZORCEM MIEJSCOWNIKA,
 *   ALE NIE ROBIĘ Z TEGO ŻADNEJ UWAGI JĘZYKOWEJ
 *   W TEKŚCIE — NIE MOGĘ TEGO POTWIERDZIĆ, WIĘC
 *   NIE POUCZAM.
 *   ⚠⚠ W SEKCJI ADRESOWEJ WSPOMINAM WYŁĄCZNIE
 *   O MIEJSCOWNIKU I O PRZYMIOTNIKU — te są pewne.
 *   PRZYMIOTNIK: RYCHWALSKI (miękkie „l") —
 *   POTWIERDZONY DWIEMA URZĘDOWYMI NAZWAMI WSI:
 *   „Wola Rychwalska" i „Jaroszewice Rychwalskie".
 *   ⚠⚠⚠ NIE TŁUMACZĘ, ŻE TO WŁAŚNIE TE NAZWY GO
 *   DOWODZĄ — kąt „dowód leży w sąsiedniej nazwie"
 *   ZAJĘTY (Skoki). PISZĘ SAMĄ POPRAWNĄ FORMĘ.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — DATA ZAŁOŻENIA: OK. 1394 R.
 *   — PRAWA MIEJSKIE WG REJESTRU: 1413 R.
 *   ⚠⚠⚠ ŹRÓDŁA PODAJĄ TAKŻE „PRZED 1459" I „XVI W.".
 *   NIE ROZSTRZYGAM I NIE ROBIĘ Z TEGO FIGURY —
 *   kąt „data przyjęta, nie znaleziona" ZAJĘTY
 *   (Krobia). MÓWIĘ JEDNYM ZDANIEM, ŻE DATY SIĘ
 *   RÓŻNIĄ.
 *   ⚠⚠⚠ PRZERWY W PRAWACH MIEJSKICH (1870–1921)
 *   NIE OPISUJĘ — kąt „przerwa nie kasuje początku"
 *   ZAJĘTY.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ RZEKI, RYNKU I RATUSZA NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — LICZBA, KTÓRA NIE ZGADZA SIĘ
 *   SAMA ZE SOBĄ:
 *   W JEDNYM Z URZĘDOWYCH OPISÓW GMINY STOI ZDANIE,
 *   ŻE POWIERZCHNIA GMINY RYCHWAŁ WYNOSI 11,7 km².
 *   TRZY NIEZALEŻNE REJESTRY PODAJĄ 117,8 km².
 *   To oczywista pomyłka w zapisie — zgubiona cyfra.
 *   ⚠⚠⚠ I TU JEST RDZEŃ: TEJ POMYŁKI NIE TRZEBA
 *   SPRAWDZAĆ W ŻADNYM ŹRÓDLE, ŻEBY JĄ ZAUWAŻYĆ.
 *   SAMO MIASTO MA 9,7 km². Gdyby gmina miała
 *   11,7 km², na całą resztę — 23 sołectwa — zostałyby
 *   DWA KILOMETRY KWADRATOWE.
 *   LICZBA PRZECZY SAMA SOBIE W GRANICACH JEDNEGO
 *   AKAPITU.
 *   ⚠⚠⚠ NIE WYMIENIAM NAZWY INSTYTUCJI ANI ADRESU
 *   STRONY. NIE OŚMIESZAM NIKOGO. Piszę „w jednym
 *   z urzędowych opisów" i od razu mówię, że to
 *   literówka, a nie spór.
 *   ⚠⚠ NIE LICZĘ Z TEJ POMYŁKI ŻADNYCH DALSZYCH
 *   WSKAŹNIKÓW.
 *
 * KĄT: LICZBA, KTÓRĄ DA SIĘ SPRAWDZIĆ BEZ ŹRÓDŁA
 * — o tym, że większość błędnych liczb w przepisach
 * i na listach zdradza się sama, jeśli policzyć je
 * w głowie. Kąt z Rychwału: 11,7 wobec 117,8, przy
 * mieście mającym 9,7.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w urzędowym opisie stoi 11,7 km² zamiast
 *   117,8 km², a samo miasto ma 9,7 km². TO JEST
 *   RDZEŃ,
 * — że to zwykła literówka i że nie o nią chodzi,
 *   tylko o to, że widać ją bez sprawdzania,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: przepis „dla
 *   czterech osób" z ilościami na dwanaście, czas
 *   pieczenia, który nie mieści się w wieczorze,
 *   lista zakupów, której nie da się unieść,
 * — ⚠⚠ ŻE NIE TRZEBA ZNAĆ PRAWIDŁOWEJ LICZBY, ŻEBY
 *   ZOBACZYĆ, ŻE TA JEST ZŁA — wystarczy porównać
 *   ją z czymś, co się już wie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim użyjesz liczby
 *   z przepisu, zadaj jej jedno pytanie — czy to
 *   w ogóle może być tyle,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie każda dziwna
 *   liczba jest błędem. Czasem dziwna jest dlatego,
 *   że coś działa inaczej, niż się spodziewamy,
 *   i wtedy trzeba sprawdzić, a nie poprawiać
 *   na własną rękę,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie wykona
 *   dokładnie to, co mu się każe, także wtedy, gdy
 *   liczba jest zła. Precyzja nie zastępuje sprawdzenia.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CZTERY REJESTRY, CZTERY LICZBY — kąt
 *   zajęty (Kleczew). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam KAŻDA
 *   Z LICZB BYŁA POPRAWNA we własnym rejestrze;
 *   tu jedna liczba JEST PO PROSTU BŁĘDNA i widać
 *   to bez porównywania rejestrów. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO LEGENDA LICZY WIĘCEJ NIŻ REJESTR — kąt
 *   zajęty (Śmigiel). Tam zawyżała PAMIĘĆ; tu myli
 *   się ZAPIS. ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠ ZERO DATA PRZYJĘTA, NIE ZNALEZIONA — kąt
 *   zajęty (Krobia).
 * — ⚠⚠ ZERO NUMERACJA ZACZYNA SIĘ OD DRUGIEGO — kąt
 *   zajęty (Książ Wielkopolski).
 * — ⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠⚠ TU RYZYKO PODWYŻSZONE, BO KĄT DOTYCZY LICZB
 *   W PRZEPISACH. MÓWIĘ O TYM, ŻEBY LICZBY SPRAWDZAĆ,
 *   I NIE PODAJĘ ANI JEDNEJ.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO WYŚMIEWANIA INSTYTUCJI ANI OSÓB.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nazwy instytucji, w której opisie
 *   jest pomyłka.
 * — NIE PODAJĘ liczby 58 miejscowości.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE ROZSTRZYGAM daty praw miejskich.
 * — NIE OPISUJĘ przerwy w prawach miejskich.
 * — NIE UŻYWAM dopełniacza w uwagach językowych.
 * — NIE PODAJĘ największej wsi, rzeki ani wysokości
 *   n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Rychwał leży w powiecie konińskim, liczy 2 375
 *   mieszkańców (GUS, 31.12.2024) na 9,7 km², czyli
 *   244,8 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 7 977 osób
 *   na 117,8 km², czyli 68 osób na kilometr
 *   kwadratowy, przy lesistości 14,6 %,
 * — gmina ma 23 sołectwa i 24 miejscowości,
 * — w jednym z urzędowych opisów gminy powierzchnia
 *   podana jest jako 11,7 km², czyli dziesięciokrotnie
 *   mniej,
 * — miasto założono około 1394 r., a rejestr podaje
 *   1413 r. jako rok praw miejskich; inne źródła
 *   podają daty późniejsze,
 * — zamek zbudowano na przełomie XIV i XV stulecia,
 * — w gminie leżą m.in. Jaroszewice Grodzieckie
 *   i Jaroszewice Rychwalskie, Wola Rychwalska,
 *   Biała Panieńska, Siąszyce, Siąszyce Trzecie,
 *   Grochowy, Złotkowy i Zosinki.
 */
export const RYCHWAL: CityContent = {
  slug: "rychwal",
  h1: "Thermomix Rychwał – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rychwał — cena i prezentacja",
  seoDescription:
    "Thermomix w Rychwale w powiecie konińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rychwał — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rychwale pod Koninem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rychwału w powiecie konińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie.",

  highlights: highlightyStandardowe("Rychwał"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gmina ma 117,8 km². Jeden opis podaje 11,7. Widać to bez sprawdzania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rychwale – jak wygląda prezentacja?",
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
      id: "liczba-do-sprawdzenia",
      heading: "Liczba, którą da się sprawdzić bez źródła",
      paragraphs: [
        "Gmina Rychwał ma 117,8 kilometra kwadratowego — tak podają trzy niezależne rejestry. W jednym z urzędowych opisów gminy stoi natomiast 11,7. To zwykła literówka, zgubiona cyfra, i nie o nią tu chodzi.",
        "Chodzi o coś innego: żeby zobaczyć, że ta liczba jest zła, nie trzeba znać tej właściwej. Samo miasto Rychwał ma 9,7 kilometra kwadratowego. Gdyby cała gmina miała 11,7, to na wszystko poza miastem — na dwadzieścia trzy sołectwa, od Białej Panieńskiej po Zosinki — zostałyby dwa kilometry kwadratowe. Liczba przeczy sama sobie w granicach jednego akapitu.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, dla którego cztery rejestry podawały cztery różne liczby — tam każda z nich była poprawna we własnym rejestrze i różniły się definicjami. Tutaj jedna liczba jest po prostu błędna, a widać to bez zaglądania gdziekolwiek. I drugie rozróżnienie: pisałam też o mieście, w którym zawyżała pamięć; tu myli się zapis, a pamięć nie ma z tym nic wspólnego.",
        "Piszę o tym, bo w kuchni mamy dokładnie takie liczby i prawie nigdy ich nie kwestionujemy.",
        "Przepis „dla czterech osób” z ilościami, które wystarczyłyby na dwanaście. Czas przygotowania, który w żaden sposób nie mieści się w wieczorze, w którym ma się zdarzyć. Lista zakupów na jedną wizytę, której nie dałoby się unieść w dwóch rękach. Tabela, w której suma nie zgadza się ze składnikami. Każda z tych rzeczy zdradza się sama.",
        "Ruch jest jeden i zajmuje dwie sekundy: zanim użyjecie liczby z przepisu, zadajcie jej jedno pytanie — czy to w ogóle może być tyle? Nie „czy to prawda”, bo tego nie wiecie, tylko „czy to się mieści”. W garnku, w wieczorze, w torbie, w budżecie. Większość błędów wypada właśnie tutaj, zanim zdążą kosztować produkty.",
        "Uczciwie o drugiej stronie, bo nie każda dziwna liczba jest błędem. Czasem jest dziwna dlatego, że coś naprawdę działa inaczej, niż się spodziewamy — inny sposób przygotowania, inne naczynie, inny rodzaj składnika. Wtedy trzeba sprawdzić u autora albo w drugim źródle, a nie poprawiać na własną rękę w połowie gotowania. Poprawianie w biegu psuje więcej niż zaufanie.",
        "I uczciwie o sprzęcie. Thermomix zrobi dokładnie to, co mu się każe, także wtedy, gdy liczba jest zła — waży precyzyjnie i trzyma ustawienia, ale nie wie, że w przepisie ktoś się pomylił. Precyzja urządzenia nie zastępuje tej jednej sekundy sprawdzenia i wolę powiedzieć to wprost, zamiast obiecywać, że sprzęt myśli za Was.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rychwale?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rychwale"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Rychwału",
      paragraphs: [
        "Rychwał leży w powiecie konińskim, liczy 2 375 mieszkańców (GUS, 31.12.2024) na dziewięciu i siedmiu dziesiątych kilometra kwadratowego, czyli dwieście czterdzieści cztery i osiem dziesiątych osoby na kilometr kwadratowy. Cała gmina miejsko-wiejska to 7 977 osób na stu siedemnastu i ośmiu dziesiątych kilometra kwadratowego, czyli sześćdziesiąt osiem osób na kilometr, przy lesistości czternastu i sześciu dziesiątych procenta. Ma dwadzieścia trzy sołectwa i dwadzieścia cztery miejscowości. Miasto założono około 1394 roku; rejestr podaje 1413 jako rok praw miejskich, choć inne źródła podają daty późniejsze i tego nie rozstrzygam. Zamek zbudowano na przełomie XIV i XV stulecia.",
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

  districtsHeading: "Do których części gminy Rychwał dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Nazywają się między innymi: Biała Panieńska, Czyżew, Dąbroszyn, Grabowa, Grochowy, Jaroszewice Grodzieckie, Jaroszewice Rychwalskie, Kuchary Borowe, Lubiny, Modlibogowice, Rozalin, Rybie, Siąszyce, Siąszyce Trzecie, Święcia, Urszulin, Wardężyn, Wola Rychwalska, Złotkowy i Zosinki. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: w gminie leżą osobno Jaroszewice Grodzieckie i Jaroszewice Rychwalskie — te pierwsze wzięły człon od Grodźca, gminy w tym samym powiecie — więc przy umawianiu warto podać pełną nazwę. Podobnie z Wolą Rychwalską, która nie jest Rychwałem, tylko osobną wsią. Druga, językowa: mówi się „w Rychwale”, nie „w Rychwału”, a przymiotnik brzmi „rychwalski”, przez miękkie „l”, a nie „rychwałski”.",
  ],
  districts: [],

  nearbyHeading: "Poza Rychwał też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Konina, Goliny, Kleczewa, Ślesina, Sompolna i Zagórowa — wszędzie bezpłatnie, tak samo jak w samym Rychwale.",
  ],
  nearbyTowns: ["Konin", "Golina", "Kleczew", "Ślesin", "Sompolno", "Zagórów"],

  about: blokOMnie("do Rychwału", "w Rychwale i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rychwału bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa: w gminie są osobno Jaroszewice Grodzieckie i Jaroszewice Rychwalskie, a Wola Rychwalska to odrębna wieś, nie część miasta — warto więc podać pełną nazwę. Językowo: mówi się „w Rychwale”, a przymiotnik brzmi „rychwalski”.",
    },
    ...faqWspolne("w Rychwale"),
    {
      question: "Jak poznać, że w przepisie jest błąd, skoro nie znam prawidłowej liczby?",
      answer:
        "Nie musicie jej znać — większość błędnych liczb zdradza się sama. Rychwał jest tu dobrym obrazem: w jednym z urzędowych opisów gminy stoi, że ma ona 11,7 kilometra kwadratowego, podczas gdy trzy rejestry podają 117,8. Żeby zobaczyć, że to pomyłka, wystarczy jedna inna liczba z tego samego zdania — samo miasto ma 9,7 kilometra kwadratowego, więc na dwadzieścia trzy sołectwa zostałyby dwa. W kuchni działa to identycznie: przepis „dla czterech osób” z ilościami na dwanaście, czas przygotowania, który nie mieści się w wieczorze, lista zakupów, której nie dałoby się unieść. Ruch zajmuje dwie sekundy — zapytajcie, czy to w ogóle może być tyle. Z jednym zastrzeżeniem: nie każda dziwna liczba jest błędem, więc jeśli coś tylko zaskakuje, lepiej sprawdzić w drugim źródle niż poprawiać w połowie gotowania.",
    },
    {
      question: "Czy Thermomix pilnuje, żeby przepis się udał?",
      answer:
        "Pilnuje wykonania, nie sensu. Waży dokładnie, trzyma ustawioną temperaturę i miesza równo, więc powtarzalność jest naprawdę duża — ale zrobi dokładnie to, co mu się każe, także wtedy, gdy w przepisie ktoś się pomylił. Urządzenie nie wie, że w danym daniu nie może być tyle płynu albo że porcja jest na dwanaście osób. Precyzja nie zastępuje jednej sekundy sprawdzenia i wolę to powiedzieć wprost, zamiast obiecywać, że sprzęt myśli za Was.",
    },
  ],

  geo: { lat: 52.0697, lng: 18.1663 },
};
