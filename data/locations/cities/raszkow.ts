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
 * RASZKÓW — powiat ostrowski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ RASZKÓW NIE MA —
 *   w powiecie ostrowskim dubluje się wyłącznie
 *   Ostrów Wielkopolski.
 * MIASTO: 2 088 mieszkańców (GUS 31.12.2024),
 *   2,05 km², gęstość 1 018,5 os./km².
 *   ⚠⚠⚠ POWIERZCHNIĘ PODAJĘ Z DOKŁADNOŚCIĄ
 *   DO SETNYCH (2,05 km² — potwierdzone niezależnie).
 *   PRZY 2,1 km² ILORAZ DAJE 994,3, ROZBIEŻNOŚĆ 24,2 —
 *   NAJWIĘKSZA W CAŁEJ SERII. PRZY 2,05 km² ILORAZ
 *   DAJE 1 018,5, ROZBIEŻNOŚĆ 0,04. PODAJĘ 2,05
 *   I GĘSTOŚĆ RAZEM.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠⚠⚠ TRZECIEJ GĘSTOŚCI („ok. 1 028") NIE PODAJĘ —
 *   liczona na danych z 2021 r.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 11 396 osób, 134,6 km², gęstość
 *   85 os./km².
 *   ⚠ [ZW — 11 396 / 134,6 = 84,7. Różnica 0,33.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ UDZIAŁU MIASTA W GMINIE NIE ROBIĘ FIGURĄ —
 *   kąt „rośnie to, co wokół" ZAJĘTY (Rydzyna).
 * SOŁECTWA: 23 SOŁECTWA i 24 MIEJSCOWOŚCI —
 *   ⚠ TRZY REJESTRY ZGODNE. PODAJĘ.
 *   ⚠⚠ OBRĘBÓW (23) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI: Bieganin, Bugaj, Drogosław, Głogowa,
 *   Grudzielec, Grudzielec Nowy, Janków Zaleśny,
 *   Jaskółki, Jelitów, Józefów, Koryta, Korytnica,
 *   Ligota, Moszczanka, Niemojewiec, Pogrzybów,
 *   Przybysławice, Radłów, Rąbczyn, Skrzebowa,
 *   Sulisław, Szczurawice, Walentynów.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 6,5 %. PODAJĘ.
 * RYNEK I RATUSZ: ratusz na środku czworobocznego
 *   rynku, wybudowany w XIX w. PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — kąt „to, co rzuca
 *   się w oczy, dobudowano później" ZAJĘTY
 *   (Czerniejewo).
 * ⚠ GEO: 51,7182 / 17,7257 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — „Ó" RUCHOME WYPADA:
 *   D. do RASZKOWA · Ms. w RASZKOWIE ·
 *   N. Raszkowem · C. Raszkowowi.
 *   ⚠ POTWIERDZENIA: „Początki Raszkowa sięgają
 *   XV wieku", „Kod pocztowy Raszkowa", „Pierwsze
 *   wzmianki o Raszkowie", „informacje o Raszkowie".
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: ZACHOWANIE „Ó" —
 *   „do Raszkówa", „w Raszkówie", „Raszkówem".
 *   WSZYSTKIE BŁĘDNE. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ BŁĄD DRUGI: „w Raszkowu".
 *   ⚠⚠⚠ PRZYMIOTNIKA „RASZKOWSKI" NIE UŻYWAM —
 *   niepotwierdzony [NP], a w gminie NIE MA nazwy
 *   miejscowości, która by go potwierdzała.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1293 R., W KSIĘDZE GRODZKIEJ
 *     KOŚCIANA. TO RDZEŃ KĄTA.
 *   — PRAWA MIEJSKIE: 8 STYCZNIA 1444 R.
 *     ODSTĘP: 151 LAT.
 *   ⚠⚠⚠ PRZYWILEJ WYSTAWIŁA OSOBA PRYWATNA —
 *     ówczesny właściciel, nie władca. PODAJĘ
 *     TEN FAKT, ale ⚠⚠⚠ NAZWISKA NIE WYMIENIAM:
 *     brzmi ono jak nazwa miejscowości, a kąt
 *     „nazwisko od miejsca, nie miejsce od nazwiska"
 *     JEST ZAJĘTY (Miłosław).
 *   ⚠⚠⚠ ODLEGŁOŚĆ KOŚCIANA PODAJĘ OSTROŻNIE:
 *     „około stu kilometrów na zachód" — to szacunek
 *     z mapy, mówię to wprost.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ HERBU NIE WSPOMINAM — ZERO HERALDYKI.
 *   ⚠ UTRATY I ODZYSKANIA PRAW NIE USTALONO [NP] —
 *     rejestr nie podaje tego pola w ogóle.
 *   ⚠ RZEKI NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NAJSTARSZY ŚLAD LEŻY W CUDZYCH
 *   PAPIERACH:
 *   Najstarszy zapis o Raszkowie pochodzi z 1293 R.
 *   i nie ma go w żadnych aktach Raszkowa — jest
 *   W KSIĘDZE GRODZKIEJ KOŚCIANA, miasta oddalonego
 *   o około sto kilometrów na zachód.
 *   Własny dokument — przywilej lokacyjny z DATĄ
 *   DZIENNĄ, 8 STYCZNIA 1444 R. — przyszedł
 *   PÓŁTORA WIEKU PÓŹNIEJ i wystawiła go osoba
 *   prywatna, ówczesny właściciel, a nie władca.
 *   PRZEZ 151 LAT JEDYNYM DOWODEM ISTNIENIA BYŁ
 *   WPIS W CUDZEJ KSIĘDZE.
 *   ⚠⚠ NIE TWIERDZĘ, DLACZEGO ZAPIS TRAFIŁ AKURAT
 *   DO KOŚCIANA — nie ustalono.
 *
 * KĄT: NAJSTARSZY ŚLAD LEŻY U KOGOŚ INNEGO
 * — o tym, że gdy chcecie odtworzyć rodzinny przepis,
 * szukać trzeba nie u siebie, tylko u innych. Kąt
 * z Raszkowa: najstarszy zapis w cudzej księdze,
 * sto kilometrów dalej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pierwsza wzmianka z 1293 r. jest w księdze
 *   grodzkiej Kościana, a własny dokument z datą
 *   dzienną przyszedł 151 lat później. TO JEST RDZEŃ,
 * — że przywilej wystawiła osoba prywatna, nie władca,
 *   a mimo to zachował się dzień,
 * — ⚠⚠ ŻE W RODZINIE JEST TAK SAMO: przepisu, którego
 *   u siebie nie macie, szukajcie u innych — w cudzym
 *   zeszycie, na zdjęciu ze stołu, w starej wiadomości,
 * — ⚠⚠ ŻE SZUKAMY ZWYKLE ODWROTNIE: u siebie,
 *   w swoich szufladach, i po godzinie się poddajemy,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zapytać trzy osoby
 *   i poprosić o zdjęcie kartki, a nie o opowiedzenie
 *   z pamięci przez telefon,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: cudze zapisy bywają
 *   niedokładne albo po cichu poprawione. Trzeba je
 *   sprawdzić, a nie przepisać w ciemno,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie pomaga powtórzyć
 *   cudzy przepis tak samo za każdym razem, ale nie
 *   sprawdzi, czy przepis jest dobry. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ISTNIAŁO DŁUGO, ZANIM KTOŚ TO ZAPISAŁ —
 *   kąt zajęty (Kłecko). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam rzecz NIE BYŁA
 *   ZAPISANA NIGDZIE i trzeba ją było odtworzyć;
 *   tu BYŁA ZAPISANA — tylko u kogoś innego.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DOKUMENT ZOSTAŁ, RZECZY NIE — kąt zajęty
 *   (Golina). ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO AKT DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń). Tam akt dotyczył INNEJ MIEJSCOWOŚCI;
 *   tu dotyczy tej właściwej, tylko leży gdzie indziej.
 * — ⚠⚠ ZERO ZGODA WCZEŚNIEJ, DOKUMENT PÓŹNIEJ — kąt
 *   zajęty (Zagórów). Tam były DWA AKTY W TEJ SAMEJ
 *   SPRAWIE; tu wzmianka i przywilej to dwie zupełnie
 *   różne rzeczy.
 * — ⚠⚠ ZERO NAZWISKO OD MIEJSCA — kąt zajęty
 *   (Miłosław). DLATEGO NAZWISKA NIE PODAJĘ.
 * — ⚠⚠ ZERO ROŚNIE TO, CO WOKÓŁ — kąt zajęty
 *   (Rydzyna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ TU RYZYKO
 *   PODWYŻSZONE, BO KĄT DOTYCZY PRZEPISÓW RODZINNYCH.
 *   PISZĘ O TYM, GDZIE ICH SZUKAĆ, NIGDY O TYM,
 *   CO MA W NICH BYĆ.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   CZYICHŚ PRZEPISÓW.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni 2,1 km².
 * — NIE PODAJĘ trzeciej wartości gęstości.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE WYMIENIAM nazwiska wystawcy przywileju.
 * — NIE TWIERDZĘ, dlaczego zapis trafił do Kościana.
 * — NIE PODAJĘ dokładnej odległości — piszę „około".
 * — NIE PISZĘ o utracie ani odzyskaniu praw miejskich.
 * — NIE UŻYWAM przymiotnika „raszkowski".
 * — NIE PODAJĘ największej wsi, rzeki ani wysokości
 *   n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Raszków leży w powiecie ostrowskim, liczy 2 088
 *   mieszkańców (GUS, 31.12.2024) na 2,05 km², czyli
 *   1 018,5 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 11 396 osób
 *   na 134,6 km², czyli 85 osób na kilometr
 *   kwadratowy, przy lesistości 6,5 %,
 * — gmina ma 23 sołectwa i 24 miejscowości,
 * — pierwsza wzmianka pochodzi z 1293 r. i została
 *   zapisana w księdze grodzkiej Kościana,
 * — prawa miejskie Raszków otrzymał 8 stycznia 1444 r.,
 *   a przywilej lokacyjny wystawił ówczesny właściciel,
 *   osoba prywatna, a nie władca,
 * — na środku czworobocznego rynku stoi ratusz
 *   wybudowany w XIX w.,
 * — w gminie leżą m.in. Janków Zaleśny, Pogrzybów,
 *   Przybysławice, Jaskółki, Grudzielec, Grudzielec
 *   Nowy, Koryta i Korytnica.
 */
export const RASZKOW: CityContent = {
  slug: "raszkow",
  h1: "Thermomix Raszków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Raszków — cena i prezentacja",
  seoDescription:
    "Thermomix w Raszkowie w powiecie ostrowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Raszków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Raszkowie pod Ostrowem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Raszkowa w powiecie ostrowskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie.",

  highlights: highlightyStandardowe("Raszków"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najstarszy zapis o mieście leży w cudzej księdze, sto kilometrów dalej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Raszkowie – jak wygląda prezentacja?",
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
      id: "cudze-papiery",
      heading: "Najstarszy ślad leży u kogoś innego",
      paragraphs: [
        "Pierwsza wzmianka o Raszkowie pochodzi z 1293 roku — i nie ma jej w żadnych aktach Raszkowa. Jest w księdze grodzkiej Kościana, miasta oddalonego o jakieś sto kilometrów na zachód. Odległość podaję z mapy, więc traktujcie ją jako szacunek.",
        "Własny dokument przyszedł dopiero sto pięćdziesiąt jeden lat później: prawa miejskie Raszków dostał 8 stycznia 1444 roku. Co ciekawe, przywileju lokacyjnego nie wystawił władca, tylko ówczesny właściciel — osoba prywatna — a mimo to zachowała się nie tylko data roczna, ale i dzień. Przez półtora wieku jedynym dowodem, że to miejsce w ogóle istnieje, był wpis w cudzej księdze.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, które istniało długo, zanim ktokolwiek je zapisał — tam zapisu nie było w ogóle i trzeba było istnienie odtwarzać. Tutaj zapis był, tylko leżał u kogoś innego. I drugie rozróżnienie: pisałam też o mieście, po którym został dokument, a nie zostały rzeczy; tu chodzi nie o to, co zostało, tylko o to, gdzie tego szukać.",
        "Piszę o tym, bo przy odtwarzaniu rodzinnych przepisów szukamy zawsze w złym miejscu.",
        "Gdy chcecie wrócić do dania, które robiła babcia albo mama, zaczynacie u siebie. Przeglądacie swoje szuflady, swoje zeszyty, swoje segregatory. Po godzinie okazuje się, że nic tam nie ma, i temat się kończy — z wnioskiem, że przepis przepadł.",
        "A on zwykle nie przepadł, tylko leży u kogoś innego. W zeszycie cioci, której nikt o to nie zapytał. Na kartce, którą sąsiadka przepisała dwadzieścia lat temu. W wiadomości wysłanej koleżance, bo pytała. Na zdjęciu ze świątecznego stołu, na którym widać, co dokładnie było w środku. W komentarzu pod czyimś postem.",
        "Ruch jest jeden i jest mniej wygodny, niż się wydaje: trzeba zapytać ludzi, nie szufladę. Konkretnie — zapytać trzy osoby i poprosić o zdjęcie kartki, a nie o opowiedzenie z pamięci przez telefon. Opowiadanie z pamięci to już druga kopia; zdjęcie kartki to oryginał.",
        "Uczciwie o drugiej stronie, bo cudze zapisy nie są święte. Bywają niedokładne, bywają skrócone, bywają po cichu poprawione — ktoś przepisał, coś zmienił, czegoś nie dopisał, bo „przecież wiadomo”. Dlatego kartkę od kogoś trzeba przeczytać uważnie i zestawić z tym, co pamiętacie z jedzenia, a nie przepisać w ciemno i zdziwić się wynikiem.",
        "I uczciwie o sprzęcie. Thermomix bardzo pomaga na tym etapie, bo pozwala powtórzyć cudzy przepis tak samo za każdym razem — a przy odtwarzaniu właśnie powtarzalność jest najcenniejsza, bo pokazuje, co dokładnie zmieniliście. Ale urządzenie nie oceni, czy przepis jest dobry, i nie wychwyci, że ktoś przy przepisywaniu coś pominął. To zostaje po Waszej stronie.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Raszkowie?",
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
    sekcjaCena("w Raszkowie"),
    sekcjaRaty("w Raszkowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Raszkowa",
      paragraphs: [
        "Raszków leży w powiecie ostrowskim i liczy 2 088 mieszkańców (GUS, 31.12.2024) na dwóch i pięciu setnych kilometra kwadratowego, czyli tysiąc osiemnaście i pół osoby na kilometr kwadratowy; powierzchnię podaję z dokładnością do setnych, bo tylko z nią gęstość się domyka. Cała gmina miejsko-wiejska to 11 396 osób na stu trzydziestu czterech i sześciu dziesiątych kilometra kwadratowego, czyli osiemdziesiąt pięć osób na kilometr, przy lesistości sześciu i pięciu dziesiątych procenta. Ma dwadzieścia trzy sołectwa i dwadzieścia cztery miejscowości. Pierwsza wzmianka pochodzi z 1293 roku i została zapisana w księdze grodzkiej Kościana, a prawa miejskie Raszków otrzymał 8 stycznia 1444. Na środku czworobocznego rynku stoi ratusz wybudowany w XIX wieku.",
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

  districtsHeading: "Do których części Raszkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Nazywają się: Bieganin, Bugaj, Drogosław, Głogowa, Grudzielec, Grudzielec Nowy, Janków Zaleśny, Jaskółki, Jelitów, Józefów, Koryta, Korytnica, Ligota, Moszczanka, Niemojewiec, Pogrzybów, Przybysławice, Radłów, Rąbczyn, Skrzebowa, Sulisław, Szczurawice i Walentynów. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa i bardzo praktyczna: wieś Raszewy nie leży w gminie Raszków — jest w gminie Żerków, a druga o tej samej nazwie w gminie Kobylin. Zdanie „jadę do Raszew” nigdy nie dotyczy Raszkowa. W samej gminie warto też rozróżniać Grudzielec i Grudzielec Nowy oraz Koryta i Korytnicę. Druga, językowa: „ó” wypada z odmiany, więc mówi się „do Raszkowa” i „w Raszkowie”, a nie „do Raszkówa” ani „w Raszkówie” — ten błąd zdarza się najczęściej w nagłówkach i podpisach, gdzie ktoś kopiuje formę z mianownika.",
  ],
  districts: [],

  nearbyHeading: "Poza Raszków też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ostrowa Wielkopolskiego, Krotoszyna, Odolanowa, Nowych Skalmierzyc, Pleszewa i Koźmina Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samym Raszkowie.",
  ],
  nearbyTowns: ["Ostrów Wielkopolski", "Krotoszyn", "Odolanów", "Nowe Skalmierzyce", "Pleszew", "Koźmin Wielkopolski"],

  about: blokOMnie("do Raszkowa", "w Raszkowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Raszkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa, która naprawdę myli: wieś Raszewy nie leży w gminie Raszków, tylko w gminie Żerków — a druga o tej samej nazwie w gminie Kobylin. Językowo: „ó” wypada z odmiany, więc „do Raszkowa” i „w Raszkowie”, nie „do Raszkówa”.",
    },
    ...faqWspolne("w Raszkowie"),
    {
      question: "Chcę odtworzyć przepis po babci, ale nic po niej nie zostało. Da się coś zrobić?",
      answer:
        "Zwykle tak — tylko trzeba szukać u ludzi, a nie w szufladzie. Raszków jest tu dobrym obrazem: najstarszy zapis o tym mieście, z 1293 roku, nie leży w żadnych jego aktach, tylko w księdze grodzkiej Kościana, jakieś sto kilometrów dalej. Przy rodzinnych przepisach jest identycznie: kartka jest zwykle u cioci, u sąsiadki, w starej wiadomości do koleżanki albo na zdjęciu ze świątecznego stołu, na którym widać, co było w środku. Ruch jest prosty, choć mniej wygodny: zapytajcie trzy osoby i poproście o zdjęcie kartki, a nie o opowiedzenie z pamięci — opowiadanie to już druga kopia. I jedna uczciwa uwaga: cudze zapisy bywają skrócone albo po cichu poprawione, więc warto je przeczytać uważnie, zamiast przepisywać w ciemno.",
    },
    {
      question: "Czy Thermomix pomaga przy odtwarzaniu starych przepisów?",
      answer:
        "Pomaga, i to konkretnie w jednym: daje powtarzalność. Gdy odtwarzacie danie po kimś, najtrudniejsze jest to, że za każdym razem wychodzi trochę inaczej i nie wiadomo, co właściwie zmieniliście. Urządzenie trzyma ustawienia i miesza równo, więc zmieniacie świadomie jedną rzecz naraz i widzicie skutek. Ale nie oceni, czy przepis jest dobry, i nie wychwyci, że ktoś przy przepisywaniu coś pominął — to zostaje po Waszej stronie i nie będę udawać, że jest inaczej.",
    },
  ],

  geo: { lat: 51.7182, lng: 17.7257 },
};
