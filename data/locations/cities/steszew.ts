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
 * STĘSZEW — powiat poznański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ STĘSZEW NIE MA.
 * MIASTO: 5 856 mieszkańców (GUS 31.12.2024), 5,7 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 029,2 os./km², iloraz daje 1 027,4. Rozbieżność 1,8
 *   i NIE domyka się po cofnięciu zaokrąglenia w tę
 *   stronę, w którą powinna. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ DRUGIE ŹRÓDŁO PODAJE 5,63 km² wobec 5,7 km²
 *   z GUS — różnica 7 ha. PODAJĘ TYLKO LICZBĘ GUS,
 *   różnicy NIE ROBIĘ KĄTEM (figura „dwie liczby na to
 *   samo" ma zajętych sąsiadów).
 * CAŁA GMINA: 15 560 osób, 175,0 km², gęstość
 *   89 os./km².
 *   ⚠ [ZW — 15 560 / 175,0 = 88,9 → 89. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE: ok. 33 nazwane w wykazie GUS — Antoninek,
 *   Będlewo, Dębienko, Dębno, Górka, Jeziorki,
 *   Krąplewo, Modrze, Piekary, Rybojedzko, Sapowice,
 *   Skrzynki, Srocko, Strykowo, Słupia, Tomice,
 *   Trzebaw, Twardowo, Wielka Wieś, Witobel, Wronczyn,
 *   Zamysłowo i pozostałe.
 *   ⚠⚠ LICZBY SOŁECTW NIE USTALONO [NP] — NIE PODAJĘ
 *   ANI JEDNEJ LICZBY WSI. Piszę „wszystkie wsie
 *   w gminie".
 *   ⚠ Wielka Wieś ma 444 mieszkańców (NSP 2021) —
 *   NIE ROBIĘ Z TEGO KĄTU (figura „obietnica w nazwie"
 *   zajęta — Międzychód). Mogę wspomnieć jednym zdaniem
 *   w części o dojazdach.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,2792 / 16,7081.
 *
 * ⚠⚠ ODMIANA:
 *   D. do STĘSZEWA · Ms. w STĘSZEWIE ·
 *   N. Stęszewem · C. Stęszewowi.
 *   Przymiotnik: STĘSZEWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — forma
 *   rekonstruowana gramatycznie, nie z cytatu.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — STĘSZEWKO — odrębna miejscowość w gminie
 *     Pobiedziska, ten sam powiat poznański.
 *     ⚠⚠ DWIE LITERY RÓŻNICY, TEN SAM POWIAT —
 *     NAJWAŻNIEJSZA PUŁAPKA. WSPOMINAM.
 *   — Drugiego MIASTA Stęszew nie ma.
 *   — Inne wsie o dokładnie tej nazwie: [NP].
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1370 r., PRAWO MAGDEBURSKIE,
 *     nadał KAZIMIERZ WIELKI. Dwa niezależne źródła
 *     zgodne. PODAJĘ.
 *   — Utraty praw nie ustalono [NP].
 *   ⚠⚠⚠ DATY „kwiecień 1919" (zmiana na dzisiejszą
 *     formę nazwy) NIE PODAJĘ — jedno źródło blogowe,
 *     brak potwierdzenia.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDNA LICZBA, DWA RÓŻNE MIASTA:
 *   Na 31 grudnia 2024 r. STĘSZEW liczył 5 856
 *   mieszkańców. Dokładnie tyle samo — 5 856 — liczył
 *   KRZYŻ WIELKOPOLSKI, miasto w tym samym
 *   województwie, w powiecie czarnkowsko-trzcianeckim.
 *   DWA ODCZYTY, DWIE OSOBNE STRONY ŹRÓDŁA, TA SAMA
 *   LICZBA.
 *   A drogi do niej są nieporównywalne: Stęszew ma prawa
 *   miejskie od 1370 r., Krzyż Wielkopolski od 1936 r.
 *   RÓŻNICA 566 LAT PRZY IDENTYCZNEJ LICZBIE DZISIAJ.
 *   ⚠⚠ LICZBY 5 856 DLA KRZYŻA PODAJĘ ZA TYM SAMYM
 *   ŹRÓDŁEM I NA TĘ SAMĄ DATĘ — inaczej porównanie
 *   byłoby nieuczciwe. MÓWIĘ WPROST, ŻE TO JEDNA DATA
 *   I JEDNO ŹRÓDŁO.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE TA ZGODNOŚĆ JEST TRWAŁA —
 *   to stan na jeden dzień i za rok może się rozjechać.
 *   PISZĘ TO W TEKŚCIE.
 *
 * KĄT: JEDNA LICZBA, DWA RÓŻNE MIASTA
 * — o tym, że równa liczba nie znaczy porównywalna
 * sytuacja. Kąt z GUS-u: dwa miasta tego samego
 * województwa spotykają się na jednej liczbie
 * mieszkańców, mając za sobą 566 lat różnicy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że na 31.12.2024 Stęszew i Krzyż Wielkopolski miały
 *   dokładnie 5 856 mieszkańców każde,
 * — że prawa miejskie mają odpowiednio od 1370 i 1936 r.,
 *   czyli 566 lat różnicy. TO JEST RDZEŃ,
 * — ⚠⚠ że to stan na jeden dzień i nie musi się
 *   powtórzyć,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: równa liczba
 *   (minut, złotych, obiadów w tygodniu) nie znaczy,
 *   że ktoś jest w tym samym miejscu co Ty,
 * — ⚠⚠ ŻE PORÓWNANIE PRZEZ JEDNĄ LICZBĘ JEST
 *   NAJSZYBSZYM SPOSOBEM NA NIESPRAWIEDLIWĄ OCENĘ
 *   SIEBIE,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zamiast pytać „ile", pytaj
 *   „skąd" — z jakiego układu wyszła ta liczba,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: liczby nie są bezużyteczne.
 *   Są dobre do pilnowania własnego kierunku, złe
 *   do porównań z kimś innym,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia tego,
 *   ile masz czasu. Zmienia, ile z tego czasu musisz
 *   stać przy garnku. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO STABILNEJ SUMY, ZMIENIONEJ ZAWARTOŚCI —
 *   kąt zajęty (Wąsosz). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam ta sama liczba
 *   opisywała JEDNO miejsce na początku i na końcu;
 *   tu jedna liczba opisuje DWA różne miejsca tego
 *   samego dnia. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ, KTÓRA OPISUJE CIĄG, KTÓREGO
 *   NIE BYŁO — kąt zajęty (Oborniki). Nie liczę tu
 *   żadnej średniej.
 * — ⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). Tu nie ma
 *   sporu: obie liczby są z jednego źródła i zgodne
 *   ze sobą.
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ⚠⚠ ZERO ILE UTRZYMANIA NA OSOBĘ — kąt zajęty
 *   (Słupca). ŻADNYCH PRZELICZEŃ NA MIESZKAŃCA.
 * — ⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN — kąt
 *   zajęty (Puszczykowo). DLATEGO MUZEUM W DOMU
 *   PODCIENIOWYM POMIJAM CAŁKOWICIE.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO WARTOŚCIOWANIA MIAST. Nie piszę,
 *   że któreś jest lepsze, ważniejsze albo „prawdziwsze".
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO POŻARÓW ·
 *   ZERO ALKOHOLU · ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ daty zmiany formy nazwy.
 * — NIE TWIERDZĘ, że zgodność liczb z Krzyżem
 *   Wielkopolskim się utrzyma.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ powierzchni 5,63 km² z drugiego źródła.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Stęszew leży w powiecie poznańskim i liczy 5 856
 *   mieszkańców (GUS, 31.12.2024) na 5,7 km²; cała gmina
 *   miejsko-wiejska to 15 560 osób na 175,0 km², czyli
 *   89 osób na kilometr kwadratowy,
 * — prawa miejskie na prawie magdeburskim nadał
 *   Stęszewowi w 1370 r. Kazimierz Wielki,
 * — Krzyż Wielkopolski (powiat czarnkowsko-trzcianecki,
 *   to samo województwo) liczył na tę samą datę,
 *   31.12.2024, dokładnie 5 856 mieszkańców, a prawa
 *   miejskie ma od 1936 r.,
 * — w gminie Stęszew leżą m.in. Strykowo, Modrze,
 *   Trzebaw, Witobel, Będlewo, Dębienko, Krąplewo,
 *   Sapowice, Skrzynki i Wielka Wieś, która ma 444
 *   mieszkańców (NSP 2021),
 * — w tym samym powiecie poznańskim leży też odrębna
 *   miejscowość Stęszewko, w gminie Pobiedziska.
 */
export const STESZEW: CityContent = {
  slug: "steszew",
  h1: "Thermomix Stęszew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stęszew — cena i prezentacja",
  seoDescription:
    "Thermomix w Stęszewie w powiecie poznańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stęszew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stęszewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stęszewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Stęszew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta sama liczba, pięćset sześćdziesiąt sześć lat różnicy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stęszewie – jak wygląda prezentacja?",
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
      id: "jedna-liczba",
      heading: "Jedna liczba, dwa różne miasta",
      paragraphs: [
        "Na 31 grudnia 2024 roku Stęszew liczył 5 856 mieszkańców. Dokładnie tyle samo, 5 856, liczył tego dnia Krzyż Wielkopolski — miasto w tym samym województwie, w powiecie czarnkowsko-trzcianeckim. Dwa osobne odczyty, jedno źródło, jedna data, ta sama liczba.",
        "A drogi do niej nie mają ze sobą nic wspólnego. Stęszew ma prawa miejskie od 1370 roku, nadane na prawie magdeburskim przez Kazimierza Wielkiego. Krzyż Wielkopolski ma je od 1936 roku. Pięćset sześćdziesiąt sześć lat różnicy — i identyczna liczba mieszkańców dzisiaj.",
        "Dodam od razu uczciwie: to stan na jeden dzień. Za rok te dwie liczby najprawdopodobniej się rozjadą i nikt tego zestawienia nie powtórzy. Właśnie dlatego jest tak pouczające.",
        "Bo gdyby ktoś dostał tylko te dwie liczby — 5 856 i 5 856 — wyciągnąłby wniosek, że to dwa bardzo podobne miejsca. I pomylił się co do wszystkiego: co tam stoi, skąd się to wzięło, jak długo tam ktoś mieszka i po co.",
        "Piszę o tym, bo w kuchni robimy dokładnie ten sam błąd, tylko na sobie.",
        "„Ona robi obiad w dwadzieścia minut.” „U nich gotuje się codziennie.” „Na jedzenie wydają tyle i tyle.” Jedna liczba, wyrwana z układu, w którym powstała — i już porównujesz się z kimś, o kim nie wiesz nic poza tą liczbą. Nie wiesz, ile osób siada u nich do stołu, kto pracuje na zmiany, kto ma w domu chorobę, dwie kuchnie, babcię obok albo nikogo. Nie wiesz, czy ta dwudziestka minut to normalny dzień, czy jedyny udany dzień w tygodniu.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że ta sama suma na początku i na końcu może kryć całkiem inną zawartość. Tam chodziło o jedno miejsce w dwóch momentach. Tu chodzi o coś innego: o dwa różne miejsca, które tego samego dnia pokazały tę samą liczbę.",
        "Ruch jest jeden i jest prosty. Zamiast pytać „ile”, pytaj „skąd”. Skąd się wzięła ta liczba, z jakiego układu dnia, z jakiego stanu kuchni, z jakiego składu domowników. Po takim pytaniu połowa porównań rozpada się sama.",
        "Uczciwie o drugiej stronie, bo nie chcę odsądzać liczb od czci. Liczby są dobre do pilnowania własnego kierunku — czy tego miesiąca gotowaliśmy częściej niż w poprzednim, czy wydatki idą w górę. Są złe do jednego: do ustawiania się obok kogoś, kogo układu nie znasz.",
        "I uczciwie o sprzęcie, żeby nie było złudzeń. Thermomix nie doda Ci godziny w dniu. Zmienia tylko to, ile z tego czasu trzeba stać przy garnku i patrzeć — bo temperaturę i mieszanie prowadzi sam, a Ty możesz w tym czasie robić coś innego. To realna zmiana, ale nie jest zmianą w liczbie minut, którymi dysponujesz.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stęszewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób siada u Was do stołu i jak wygląda zwykły, nie idealny dzień. Pod to dobieram dania — nie pod dzień, który chciałoby się pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stęszewie"),
    sekcjaRaty("w Stęszewie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Stęszewa",
      paragraphs: [
        "Stęszew leży w powiecie poznańskim i liczy 5 856 mieszkańców (GUS, 31.12.2024) na 5,7 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie domyka się z ilorazem i nie chcę mnożyć jednej niepewnej wartości przez drugą. Cała gmina miejsko-wiejska to 15 560 osób na 175 kilometrach kwadratowych, czyli osiemdziesiąt dziewięć osób na kilometr — i ta gęstość się zgadza, więc ją podaję. Prawa miejskie na prawie magdeburskim nadał Stęszewowi w 1370 roku Kazimierz Wielki. W gminie leżą między innymi Strykowo, Modrze, Trzebaw, Witobel, Będlewo, Dębienko, Krąplewo, Sapowice i Skrzynki, a także Wielka Wieś, która przy swojej nazwie liczy czterystu czterdziestu czterech mieszkańców.",
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

  districtsHeading: "Do których części Stęszewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Strykowa, Modrza, Trzebawia, Witobla, Będlewa, Dębienka, Krąplewa, Sapowic, Skrzynek, Jeziorek, Srocka, Tomic, Wronczyna, Wielkiej Wsi i pozostałych. Wszędzie bez dopłaty.",
    "Jedna uwaga praktyczna: w tym samym powiecie poznańskim leży odrębna miejscowość Stęszewko, w gminie Pobiedziska. Dwie litery różnicy, więc przy umawianiu warto dopowiedzieć, że chodzi o Stęszew.",
  ],
  districts: [],

  nearbyHeading: "Poza Stęszew też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Mosiny, Buku, Opalenicy, Puszczykowa, Grodziska Wielkopolskiego i Poznania — wszędzie bezpłatnie, tak samo jak w samym Stęszewie.",
  ],
  nearbyTowns: ["Mosina", "Buk", "Opalenica", "Puszczykowo", "Grodzisk Wielkopolski", "Poznań"],

  about: blokOMnie("do Stęszewa", "w Stęszewie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stęszewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: mówi się „do Stęszewa” i „w Stęszewie”, a przymiotnik od nazwy miasta brzmi „stęszewski”. I praktyczna: w tym samym powiecie poznańskim jest jeszcze Stęszewko w gminie Pobiedziska, więc przy umawianiu warto to rozróżnić.",
    },
    ...faqWspolne("w Stęszewie"),
    {
      question: "Wszyscy wokół gotują szybciej i częściej niż ja. Jak się z tym nie porównywać?",
      answer:
        "Pytaniem „skąd”, nie „ile”. Stęszew jest tu niezłym argumentem: na 31 grudnia 2024 roku miał 5 856 mieszkańców i dokładnie tyle samo miał tego dnia Krzyż Wielkopolski, choć prawa miejskie jedno ma od 1370 roku, a drugie od 1936. Ta sama liczba, pięćset sześćdziesiąt sześć lat różnicy, dwie zupełnie różne sytuacje. Kiedy słyszysz, że ktoś robi obiad w dwadzieścia minut, nie wiesz o tym obiedzie nic poza liczbą — ilu domowników, jaki grafik, jaka kuchnia, czy to zwykły dzień czy jeden udany. Liczby są dobre do pilnowania własnego kierunku i złe do porównań z kimś, czyjego układu nie znasz.",
    },
    {
      question: "Czy Thermomix da mi więcej czasu?",
      answer:
        "Nie da Wam ani jednej minuty więcej w dniu i nie będę tego obiecywać. Zmienia coś innego: ile z posiadanego czasu trzeba przestać przy garnku. Temperaturę i mieszanie urządzenie prowadzi samo, więc obiad może się gotować, kiedy robicie coś zupełnie innego w innym pokoju. Dla części osób to zmienia wszystko, a dla części nie zmienia nic — i to warto ustalić przed zakupem, nie po.",
    },
  ],

  geo: { lat: 52.2792, lng: 16.7081 },
};
