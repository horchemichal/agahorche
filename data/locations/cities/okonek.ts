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
 * OKONEK — powiat złotowski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ OKONEK NIE MA.
 * MIASTO: 3 592 mieszkańców (GUS 31.12.2024), 6,0 km²,
 *   gęstość 597,7 os./km².
 *   ⚠ [ZW — 3 592 / 6,0 = 598,7 wobec 597,7. Różnica
 *   0,97, W GRANICACH. Powierzchnia odtworzona
 *   z gęstości to 6,0097 km², zgodna z niezależnym
 *   6,01 km². PODAJĘ OBIE LICZBY.]
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 7 855 osób, 326,0 km², gęstość
 *   24 os./km².
 *   ⚠ [ZW — 7 855 / 326,0 = 24,1 → 24. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ TO NAJWIĘKSZA OBSZAROWO I NAJRZADZIEJ
 *   ZALUDNIONA GMINA TEJ FALI. MOGĘ POWIEDZIEĆ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 26 w rejestrze TERYT, 20 obrębów
 *   ewidencyjnych (1 miejski + 19 wiejskich).
 *   ⚠⚠⚠ SOŁECTW NIE USTALONO [NP] — NIE PODAJĘ
 *   LICZBY SOŁECTW. Piszę „wszystkie wsie w gminie".
 *   ⚠⚠ RÓŻNICY 26/20 NIE ROBIĘ KĄTEM — figura „cztery
 *   rejestry, cztery liczby" zajęta (Kleczew).
 *   WSIE (wykaz): Anielin, Babi Dwór, Borki, Borucino,
 *   Brokęcino, Brzozówka, Chwalimie, Ciosaniec,
 *   Dolnik, Drzewice, Glinki Mokre, Glinki Suche,
 *   Kruszka, Lędyczek, Łomczewo, Lotyń, Lubnica,
 *   Lubniczka, Pniewo, Podgaje, Przybysław, Rydzynka,
 *   Skoki, Węgorzewo, Wojnówko.
 *   ⚠⚠⚠ PUŁAPKA: w tej gminie leży wieś SKOKI —
 *   nazwa identyczna z miastem w powiecie
 *   wągrowieckim, o którym pisałam osobno.
 *   WSPOMINAM W CZĘŚCI O DOJAZDACH.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠ LĘDYCZEK ma miejską metrykę, ale dat praw
 *   miejskich NIE USTALONO [NP] — NIE TWIERDZĘ NIC
 *   O JEGO STATUSIE.
 * ⚠ GEO: 53,5358 / 16,8521.
 *   ⚠ Drugie źródło daje 53,533 / 16,850 — rozbieżność
 *   ok. 300 m. Używam pierwszego.
 *
 * ⚠⚠ ODMIANA — RUCHOME „E" WYPADA:
 *   D. do OKONKA (⚠⚠⚠ nie „Okoneka") ·
 *   Ms. w OKONKU (⚠⚠⚠ nie „Okoneku") ·
 *   N. Okonkiem · C. Okonkowi.
 *   ⚠ POTWIERDZENIA: „mieszkaniec Okonka",
 *   „walkę z Okonkiem".
 *   Przymiotnik: OKONECKI — ⚠ tu „e" WRACA.
 *   Potwierdzony nazwą instytucji („Okoneckie Centrum
 *   Kultury").
 *   ⚠⚠⚠ BŁĄD 2: „okonkowski" zamiast „okonecki".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ NAZWA WYGLĄDA NA ZDROBNIENIE OD „OKOŃ"
 *     I NIE JEST TO ETYMOLOGIA POTWIERDZONA.
 *     ⚠⚠⚠ HISTORII ZMIAN NAZWY NIE OPISUJĘ WCALE —
 *     prowadzi prosto do wątków wykluczonych
 *     (rok 1945, nazwy niemieckie, przemianowania).
 *     PISZĘ WYŁĄCZNIE: „nazwa wygląda na zdrobnienie
 *     od nazwy ryby, ale tego nie potwierdzam".
 *     ANI SŁOWA WIĘCEJ.
 *   — Wieś SKOKI w tej gminie.
 *   — Innych miejscowości o nazwie Okonek nie ustalono
 *     [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — GRANICY NIE USTALONO PRZEZ
 *   PÓŁ WIEKU:
 *   OKONEK założono w 1553 albo 1554 r. jako osadę
 *   z 21 GOSPODARZAMI I 6 ZAGRODNIKAMI.
 *   W 1560 R., czyli sześć albo siedem lat później,
 *   obok powstała KONKURENCYJNA WIEŚ BROKĘCINO —
 *   3 JUNKRÓW, 19 GOSPODARZY, 12 ZAGRODNIKÓW.
 *   SPÓR GRANICZNY MIĘDZY NIMI TRWAŁ OKOŁO
 *   PIĘĆDZIESIĘCIU LAT.
 *   Prawa miejskie Okonek otrzymał dopiero w 1754 r.
 *   ⚠⚠⚠ O PRZEBIEGU SPORU NIE PISZĘ NIC POZA JEGO
 *   DŁUGOŚCIĄ. Źródło używa słowa „walka" — NIE
 *   POWTARZAM GO, nie wiem, czy chodzi o spór prawny
 *   czy o coś więcej, a wątek przemocy jest wykluczony.
 *   PISZĘ WYŁĄCZNIE „spór graniczny".
 *   ⚠⚠⚠ NAZWISK STRON SPORU NIE PODAJĘ.
 *   ⚠⚠ Nazwisko założyciela Okonka i imię księcia
 *   POMIJAM — niepotrzebne, a wchodzą w wątek obcych
 *   nazw własnych.
 *
 * KĄT: GRANICY NIE USTALONO PRZEZ PÓŁ WIEKU
 * — o tym, że granicę taniej narysować raz niż
 * negocjować codziennie. Kąt z Okonka: spór graniczny
 * z sąsiednią wsią, założoną sześć lat później, trwał
 * około pięćdziesięciu lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Okonek założono w 1553 albo 1554 r. jako osadę
 *   21 gospodarzy i 6 zagrodników,
 * — że w 1560 r. obok założono drugą wieś — 3 junkrów,
 *   19 gospodarzy, 12 zagrodników,
 * — że spór graniczny trwał około pięćdziesięciu lat,
 *   a prawa miejskie przyszły dopiero w 1754 r.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: we wspólnej kuchni
 *   granica prawie nigdy nie jest narysowana, więc
 *   negocjuje się ją codziennie od nowa,
 * — ⚠⚠ ŻE TO KOSZTUJE WIĘCEJ NIŻ SAMA PRACA: kto myje,
 *   kto decyduje o zakupach, czyja jest ta półka,
 *   czy wolno dojeść,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: ustalcie granicę raz,
 *   na głos, nawet niedoskonale. Zła granica narysowana
 *   jest tańsza od dobrej nienarysowanej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: granica bywa krzywdząca,
 *   jeśli ustali ją jedna osoba. Musi być ustalona
 *   razem i wolno ją zmieniać — byle jawnie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie ustala
 *   granic i nie rozstrzygnie, kto ma gotować. Bywa
 *   za to pretekstem, żeby podział ustalić na nowo —
 *   bo zmienia się to, ile pracy jest do podziału.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PODZIAŁU ZNIESIONEGO, A NAZWY, KTÓRA
 *   ZOSTAŁA — kąt zajęty (Wieleń). ⚠⚠⚠ TO NAJBLIŻSZY
 *   SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam podział
 *   był i go zniesiono; TU granicy przez pół wieku
 *   NIE USTALONO WCALE. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO WZIĘTEGO Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA —
 *   kąt zajęty (Krzyż Wielkopolski).
 * — ⚠⚠⚠ ZERO SCALONEGO Z TRZECH — kąt zajęty (Koźmin).
 * — ⚠⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew).
 * — ⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). Tu spór
 *   dotyczy GRANICY W TERENIE, nie liczby.
 * — ⚠⚠ ZERO ROCZNICY LICZONEJ OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów). DLATEGO DWUSTULETNIEJ
 *   RÓŻNICY 1554 → 1754 NIE ROBIĘ FIGURĄ, podaję
 *   obie daty i tyle.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO PRZYPISYWANIA RÓL PŁCIOWYCH
 *   W KUCHNI. Piszę „kto myje", nigdy „kto powinien
 *   myć".
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ, NAZW
 *   NIEMIECKICH I HISTORII PRZEMIANOWAŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO I PRZEMOCY ·
 *   ZERO ALKOHOLU · ZERO POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ etymologii nazwy ani historii jej zmian.
 * — NIE OPISUJĘ przebiegu sporu granicznego.
 * — NIE PODAJĘ nazwisk stron ani założyciela.
 * — NIE TWIERDZĘ nic o statusie Lędyczka.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Okonek leży w powiecie złotowskim, liczy 3 592
 *   mieszkańców (GUS, 31.12.2024) na 6,0 km², czyli
 *   597,7 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 7 855 osób na
 *   326 km², czyli 24 osoby na kilometr kwadratowy;
 *   rejestr wymienia w niej 26 miejscowości i 20
 *   obrębów ewidencyjnych,
 * — osadę założono w 1553 albo 1554 r. z 21
 *   gospodarzami i 6 zagrodnikami,
 * — w 1560 r. obok powstała konkurencyjna wieś
 *   Brokęcino — 3 junkrów, 19 gospodarzy, 12
 *   zagrodników — a spór graniczny między osadami
 *   trwał około pięćdziesięciu lat,
 * — prawa miejskie Okonek otrzymał w 1754 r.,
 * — w gminie leżą m.in. Lotyń, Lubnica, Podgaje,
 *   Węgorzewo, Drzewice, Chwalimie, Lędyczek
 *   oraz wieś Skoki.
 */
export const OKONEK: CityContent = {
  slug: "okonek",
  h1: "Thermomix Okonek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Okonek — cena i prezentacja",
  seoDescription:
    "Thermomix w Okonku w powiecie złotowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Okonek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Okonku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Okonka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Okonek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pół wieku sporu o granicę, której nikt nie narysował.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Okonku – jak wygląda prezentacja?",
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
      id: "granica",
      heading: "Granicy nie ustalono przez pół wieku",
      paragraphs: [
        "Okonek założono w 1553 albo 1554 roku. Osada miała na starcie dwudziestu jeden gospodarzy i sześciu zagrodników — liczby zapisano dokładnie, bo tak się wtedy zakładało wsie.",
        "Sześć lat później, w 1560 roku, tuż obok założono drugą wieś: trzech junkrów, dziewiętnastu gospodarzy, dwunastu zagrodników. Też policzonych co do osoby.",
        "A granicy między nimi nie ustalono. Spór o nią trwał około pięćdziesięciu lat. Pięćdziesiąt lat — czyli mniej więcej tyle, ile trwało całe dorosłe życie ówczesnego gospodarza. Prawa miejskie Okonek dostał zresztą dopiero w 1754 roku, dwa wieki po założeniu.",
        "Piszę o tym, bo we wspólnej kuchni dzieje się dokładnie to samo i rzadko kto nazywa to po imieniu.",
        "Granica prawie nigdy nie jest narysowana. Kto myje po obiedzie. Kto decyduje, co się kupuje. Czyja jest ta półka w lodówce. Czy wolno dojeść to, co zostało. Kto ma prawo powiedzieć „nie chce mi się dziś gotować”, a kto musi wtedy coś zrobić. Nikt tego nie ustalił, więc ustala się to od nowa codziennie, przy zmęczeniu, przy gościach, przy gorszym dniu.",
        "I to właśnie kosztuje najwięcej — nie sama praca, ale codzienne negocjowanie tego, czyja ona jest.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o podziale, który wprowadzono, a potem zniesiono, i o nazwie, która go przeżyła. Tu jest odwrotny problem — granicy nie ustalono w ogóle, i właśnie dlatego trwało to pół wieku.",
        "Ruch jest jeden i jest niewygodny tylko raz. Ustalcie granicę na głos, wprost, nawet niedoskonale. Kto co robi w tygodniu, czyja jest która półka, co się dzieje, gdy ktoś nie da rady. Zła granica narysowana jest tańsza od dobrej nienarysowanej, bo o narysowanej można się pokłócić raz i poprawić ją, a nienarysowana wraca codziennie.",
        "Uczciwie o drugiej stronie, bo to ma warunek. Granica ustalona przez jedną osobę nie jest granicą, tylko przydziałem, i będzie źródłem żalu. Musi powstać razem i musi być wolno ją zmieniać — byle jawnie, a nie przez ciche przestawanie robienia swojej części.",
        "I uczciwie o sprzęcie. Thermomix nie ustali za Was żadnej granicy i nie rozstrzygnie, kto ma gotować. Bywa za to dobrym pretekstem, żeby podział ustalić od nowa — bo po zakupie zmienia się to, ile pracy jest do podziału: nie trzeba stać przy garnku, a danie powstaje w jednym naczyniu, więc i zmywania jest mniej. Kto liczy, że urządzenie samo przesunie obowiązki na drugą stronę, przeliczy się.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Okonku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, kto u Was zwykle gotuje i kto zmywa. Pytam nie z ciekawości — od tego zależy, co warto na prezentacji pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Okonku"),
    sekcjaRaty("w Okonku"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Okonka",
      paragraphs: [
        "Okonek leży w powiecie złotowskim i liczy 3 592 mieszkańców (GUS, 31.12.2024) na sześciu kilometrach kwadratowych, czyli pięciuset dziewięćdziesięciu ośmiu na kilometr — obie liczby podaję, bo zgadzają się z ilorazem. Cała gmina miejsko-wiejska to 7 855 osób na trzystu dwudziestu sześciu kilometrach kwadratowych, czyli dwadzieścia cztery osoby na kilometr: to najrozleglejsza i najrzadziej zaludniona gmina, o jakiej pisałam w tej okolicy. Rejestr wymienia w niej dwadzieścia sześć miejscowości i dwadzieścia obrębów ewidencyjnych; liczby sołectw nie podaję, bo nie udało mi się jej ustalić. Osadę założono w 1553 albo 1554 roku z dwudziestoma jeden gospodarzami i sześcioma zagrodnikami, a prawa miejskie przyszły w 1754. W gminie leżą między innymi Lotyń, Lubnica, Podgaje, Węgorzewo, Drzewice, Chwalimie i Lędyczek.",
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

  districtsHeading: "Do których części Okonka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Lotynia, Lubnicy, Podgajów, Węgorzewa, Drzewic, Chwalimia, Brokęcina, Borucina, Lędyczka, Kruszki, Pniewa i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: „e” wypada z odmiany rzeczownika — mówi się „do Okonka” i „w Okonku”, nie „do Okoneka”; za to w przymiotniku „e” wraca, więc poprawnie jest „okonecki”. I praktyczna: w tej gminie leży wieś Skoki, o nazwie identycznej z miastem w powiecie wągrowieckim — przy adresie warto podać gminę.",
  ],
  districts: [],

  nearbyHeading: "Poza Okonek też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Złotowa, Krajenki, Jastrowia, Piły, Wałcza i Czarnkowa — wszędzie bezpłatnie, tak samo jak w samym Okonku.",
  ],
  nearbyTowns: ["Złotów", "Krajenka", "Jastrowie", "Piła", "Wałcz", "Czarnków"],

  about: blokOMnie("do Okonka", "w Okonku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Okonka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: „e” wypada z odmiany rzeczownika — „do Okonka”, „w Okonku”, nie „do Okoneka” ani „w Okoneku” — ale w przymiotniku wraca, więc poprawnie jest „okonecki”, a nie „okonkowski”. I praktyczna: w tej gminie leży wieś Skoki, czyli nazwa identyczna z miastem w powiecie wągrowieckim, więc przy adresie warto podać gminę.",
    },
    ...faqWspolne("w Okonku"),
    {
      question: "W naszym domu ciągle wraca kłótnia o to, kto gotuje i kto zmywa. Da się to zamknąć?",
      answer:
        "Da się, ale trzeba raz narysować granicę. Okonek jest tu pouczający: miasto założono w 1553 albo 1554 roku z dwudziestoma jeden gospodarzami i sześcioma zagrodnikami, sześć lat później tuż obok powstała druga wieś — trzech junkrów, dziewiętnastu gospodarzy, dwunastu zagrodników — a spór o granicę między nimi trwał około pięćdziesięciu lat. Wszystko było policzone co do osoby, tylko granicy nikt nie wyznaczył. W kuchni działa to identycznie: kto myje, czyja jest ta półka, kto decyduje o zakupach, co się dzieje, gdy ktoś nie da rady. Ustalcie to na głos raz, nawet niedoskonale — zła granica narysowana jest tańsza od dobrej nienarysowanej. Z jednym warunkiem: granica ustalona przez jedną osobę to nie granica, tylko przydział.",
    },
    {
      question: "Czy Thermomix zmieni podział obowiązków w kuchni?",
      answer:
        "Sam z siebie nie i nie będę tego obiecywać. Zmienia to, ile pracy jest do podziału: nie trzeba stać przy garnku i pilnować, bo temperaturę i mieszanie prowadzi urządzenie, a danie powstaje w jednym naczyniu, więc zmywania jest mniej. To bywa dobrym pretekstem, żeby usiąść i ustalić podział od nowa — ale kto liczy, że urządzenie samo przesunie obowiązki na drugą osobę, przeliczy się.",
    },
  ],

  geo: { lat: 53.5358, lng: 16.8521 },
};
