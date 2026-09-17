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
 * OBORNIKI — powiat obornicki (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 17 139 mieszkańców (GUS 31.12.2024), 14,1 km²,
 *   gęstość 1 217,3 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 34 061 osób, 340,1 km², gęstość
 *   100 os./km² [ZW — DOMYKA SIĘ. PODAJĘ].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 68.
 *   ⚠ GUS 2019 podaje 59 miejscowości i 45 sołectw —
 *   ROZBIEŻNOŚĆ 9 JEDNOSTEK [SP]. Trzymam się liczby
 *   z polskawliczbach (68) i nie komentuję.
 * ⚠⚠⚠ UDZIAŁU LUDNOŚCIOWEGO GMINY W POWIECIE
 *   NIE PODAJĘ — nie domyka się (57,1 % w źródle,
 *   58,0 % z dzielenia).
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,6449 / 16,8142. Warta i Wełna (ujście
 *   Wełny do Warty).
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM (LICZBA MNOGA):
 *   M. OBORNIKI SĄ · D. do OBORNIK (bezkońcówkowy!) ·
 *   Ms. w OBORNIKACH · N. Obornikami.
 *   ⚠⚠⚠ BŁĄD: „do Oborników". SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM. ORZECZENIE ZAWSZE W LICZBIE MNOGIEJ.
 *   Przymiotnik: OBORNICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — SPRAWDZONE:
 *   — OBORNIKI ŚLĄSKIE (dolnośląskie, pow. trzebnicki)
 *     — MAJĄ TEN SAM PRZYMIOTNIK „obornicki", ale
 *     POWIAT OBORNICKI ISTNIEJE TYLKO W WIELKOPOLSCE.
 *     ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   — FORMA „OBORNIKI WIELKOPOLSKIE" NIE ISTNIEJE.
 *     ⚠⚠ NIE UŻYWAM JEJ ANI RAZU.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — ZAŁOŻENIE MIASTA: ok. 1272 r. [SP].
 *   — PIERWSZA WZMIANKA O KONWENCIE: 1292 r.
 *     ⚠⚠⚠ WĄTKU ZAKONNEGO NIE ROZWIJAM — wyznaniowe.
 *     PODAJĘ WYŁĄCZNIE ZAŁOŻENIE MIASTA.
 *   — PRAWA MIEJSKIE: 1339 r. ⚠⚠⚠ [SP — źródła podają
 *     też „1. połowa XIV w." i „koniec XIII w."].
 *     PISZĘ „1339 r., choć źródła nie są zgodne".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ŚREDNIA, KTÓREJ NIKT NIE PRZEŻYŁ:
 *   Władysław Jagiełło odwiedził Oborniki
 *   DZIESIĘĆ RAZY W LATACH 1394–1428.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1428 − 1394 = 34;
 *   34 ÷ 10 = 3,4. ŚREDNIO CO 3,4 ROKU.
 *   ⚠⚠⚠ I NA PEWNO NIE CO 3,4 ROKU. To jest cały kąt.
 *   ⚠⚠ NIE ZNAM ROZKŁADU TYCH WIZYT W CZASIE I TEGO
 *   NIE ZMYŚLAM. Twierdzę tylko, że średnia opisuje
 *   rytm, którego nie było — bo żadna podróż nie
 *   odbywa się w ułamku roku.
 *   ⚠⚠ POWODÓW WIZYT NIE PODAJĘ — mogą prowadzić
 *   do wątku militarnego. WYKLUCZONE.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠⚠⚠ SPISU Z 1458 R. (15 pieszych rycerzy)
 *   NIE UŻYWAM — WĄTEK MILITARNY, WYKLUCZONY
 *   BEZWZGLĘDNIE, mimo że to najmocniejszy fakt
 *   z raportu.
 * — ⚠⚠ WIEŻY KOŚCIELNEJ (90 m) NIE OPISUJĘ —
 *   wyznaniowe. ANI SŁOWA.
 * — ⚠⚠ KLASZTORU I KOŚCIOŁÓW NIE OPISUJĘ.
 * — ⚠ ODLEGŁOŚĆ DO POZNANIA SPORNA (25 albo 30 km).
 *   NIE PODAJĘ ŻADNEJ LICZBY KILOMETRÓW.
 * — Szlak turystyczny: 32 tablice. ⚠⚠ TEJ LICZBY
 *   NIE ROBIĘ KĄTEM — figura „więcej tablic niż
 *   przystanków" zajęta (Złotów, ta sama fala).
 *   PODAJĘ JAKO GOŁY FAKT ALBO POMIJAM.
 *
 * KĄT: ŚREDNIA OPISUJE CIĄG, KTÓREGO NIE BYŁO
 * — o tym, że średnia tygodniowa niczego o tygodniu
 * nie mówi. Kąt z dziesięciu wizyt Jagiełły w Obornikach
 * w latach 1394–1428: średnio co trzy i cztery dziesiąte
 * roku, a na pewno nie co trzy i cztery dziesiąte roku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Jagiełło odwiedził Oborniki dziesięć razy
 *   w latach 1394–1428,
 * — ŻE TO ŚREDNIO CO 3,4 ROKU I ŻE NA PEWNO TAK
 *   NIE BYŁO. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE ŚREDNIA JEST PRAWDZIWA I JEDNOCZEŚNIE
 *   NIE OPISUJE NICZEGO, CO SIĘ ZDARZYŁO,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: „gotuję cztery razy
 *   w tygodniu" zwykle znaczy sześć razy przez trzy
 *   tygodnie i ani razu w czwartym,
 * — ⚠⚠ ŻE PLANOWANIE POD ŚREDNIĄ DLATEGO NIE DZIAŁA
 *   — bo planuje się tydzień, którego nie ma,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zamiast średniej wypisz
 *   ostatnie cztery tygodnie osobno. Rytm widać
 *   od razu i pod niego da się już planować,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: średnia jest dobra
 *   do jednej rzeczy — do porównania dwóch okresów.
 *   Do planowania pojedynczego tygodnia nie nadaje się
 *   nigdy,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie działa mocniej
 *   w tygodniach gęstych niż w rzadkich. MÓWIĘ WPROST,
 *   że kto liczy korzyść ze średniej, policzy ją źle
 *   w obie strony.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZERWY ROSNĄ — kąt zajęty (Węgliniec).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam odstępy były znane i układały się
 *   w ciąg; tu odstępów NIE ZNAM i właśnie o to chodzi
 *   — średnia je ukrywa.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO KAŻDY KOLEJNY KROK IDZIE SZYBCIEJ — kąt
 *   zajęty (Niemcza).
 * — ⚠⚠⚠ ZERO STABILNEJ SUMY — kąt zajęty (Wąsosz).
 * — ⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie). ⚠ TAM DZIELENIE BYŁO NARZĘDZIEM,
 *   TU JEST PUŁAPKĄ. NIE MIESZAĆ.
 * — ⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ KATEGORII
 *   — kąt zajęty (Międzybórz).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU ·
 *   ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ udziału gminy w ludności powiatu.
 * — NIE TWIERDZĘ, jak wizyty rozłożyły się w czasie.
 * — NIE PODAJĘ powodów tych wizyt.
 * — NIE PODAJĘ roku nadania praw jako pewnego.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM formy „Oborniki Wielkopolskie".
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Oborniki leżą w powiecie obornickim, którego są
 *   siedzibą, nad Wartą, przy ujściu do niej Wełny;
 *   miasto liczy 17 139 mieszkańców (GUS, 31.12.2024)
 *   na 14,1 km², czyli 1 217,3 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 34 061
 *   osób na 340,1 km², czyli 100 osób na kilometr,
 *   i obejmuje 68 miejscowości,
 * — miasto założono około 1272 r., a prawa miejskie
 *   podaje się na 1339 r., choć źródła nie są zgodne,
 * — Władysław Jagiełło odwiedził Oborniki dziesięć razy
 *   w latach 1394–1428.
 */
export const OBORNIKI: CityContent = {
  slug: "oborniki",
  h1: "Thermomix Oborniki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Oborniki — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Obornikach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Oborniki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Obornikach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Obornik z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Oborniki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Średnio co trzy i cztery dziesiąte roku. Czyli nigdy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Obornikach – jak wygląda prezentacja?",
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
      id: "srednia-bez-ciagu",
      heading: "Średnia opisuje ciąg, którego nie było",
      paragraphs: [
        "Władysław Jagiełło odwiedził Oborniki dziesięć razy. W latach 1394–1428, czyli w ciągu trzydziestu czterech lat.",
        "Podzielmy: średnio co trzy i cztery dziesiąte roku.",
        "I z całą pewnością nie co trzy i cztery dziesiąte roku. Nikt nie przyjeżdża w ułamku roku. Były lata, w których przyjechał, i lata, w których nie przyjechał, a jak dokładnie się to rozłożyło — nie wiem i nie będę zgadywać. Wiem tyle, że średnia jest prawdziwa i jednocześnie nie opisuje niczego, co się naprawdę wydarzyło.",
        "Dokładnie tak działa zdanie „gotuję cztery razy w tygodniu”.",
        "Prawie nigdy nie znaczy ono czterech obiadów rozłożonych po tygodniu. Zwykle znaczy: sześć razy przez trzy tygodnie, a w czwartym ani razu, bo był wyjazd, choroba w domu albo taki tydzień, że wszyscy jedli, co kto znalazł.",
        "I dlatego planowanie pod średnią nigdy nie działa. Planuje się tydzień, którego nie ma — ten uśredniony, spokojny, równo rozłożony. Potem przychodzi prawdziwy tydzień, plan się rozsypuje w środę i zostaje poczucie porażki, choć w skali miesiąca wszystko się zgadza.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o ciągu dat, w którym odstępy rosły — tam odstępy były znane i można je było zobaczyć. Tu jest odwrotnie: odstępów nie znam i o to właśnie chodzi, bo średnia jest tym narzędziem, które je zakrywa.",
        "Ruch jest jeden i zajmuje pięć minut. Zamiast średniej wypisz ostatnie cztery tygodnie osobno — ile obiadów w każdym. Rytm widać natychmiast i dopiero pod niego da się cokolwiek zaplanować: zapas na tydzień pusty, ulubione dania na tydzień gęsty.",
        "Uczciwie o drugiej stronie: średnia jest dobra do jednej rzeczy — do porównania dwóch okresów ze sobą. Czy w tym półroczu gotowaliście więcej niż w poprzednim, powie uczciwie. Do zaplanowania pojedynczego tygodnia nie nadaje się nigdy.",
        "I uczciwie o sprzęcie. Thermomix działa mocniej w tygodniach gęstych niż w rzadkich — bo tam, gdzie gotuje się codziennie, zdejmuje codziennie po kawałku. Kto liczy korzyść ze średniej, policzy ją źle w obie strony: przeceni ją w miesiącu spokojnym i nie doceni w gorącym. Na prezentacji wolę rozmawiać o Waszym najgorszym tygodniu niż o przeciętnym.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Obornikach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jak wyglądał u Was ostatni naprawdę ciężki tydzień. To mówi więcej niż jakakolwiek średnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Obornikach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Obornik",
      paragraphs: [
        "Oborniki leżą w powiecie obornickim, którego są siedzibą, nad Wartą — przy ujściu do niej Wełny. Samo miasto liczy 17 139 mieszkańców (GUS, 31.12.2024) na 14,1 kilometra kwadratowego, czyli tysiąc dwieście siedemnaście osób na kilometr, a cała gmina miejsko-wiejska 34 061 osób na 340,1 kilometra, czyli równo sto osób na kilometr, i obejmuje sześćdziesiąt osiem miejscowości. Miasto założono około 1272 roku, a prawa miejskie podaje się zwykle na 1339 — choć i tu źródła nie są zgodne. Władysław Jagiełło odwiedził Oborniki dziesięć razy w latach 1394–1428.",
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

  districtsHeading: "Do których części Obornik dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Rożnowa, Objezierza, Kowanowa i Kowalewka, Bogdanowa, Dąbrówki Leśnej, Kiszewa i Kiszewka, Stobnicy, Uścikowa, Wargowa, Słonaw, Łukowa i pozostałych. Wszędzie bez dopłaty.",
    "Gmina ma ponad trzysta czterdzieści kilometrów kwadratowych i sześćdziesiąt osiem miejscowości, więc przy umawianiu warto podać nazwę wsi — a kilka z nich występuje w parach jak Kiszewo i Kiszewko albo Osowo Stare i Osowo Nowe.",
  ],
  districts: [],

  nearbyHeading: "Poza Oborniki też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Szamotuł, Rogoźna, Murowanej Gośliny, Obrzycka i Wronek — wszędzie bezpłatnie, tak samo jak w samych Obornikach.",
  ],
  nearbyTowns: ["Szamotuły", "Rogoźno", "Murowana Goślina", "Obrzycko", "Wronki"],

  about: blokOMnie("do Obornik", "w Obornikach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Obornik bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: Oborniki są w liczbie mnogiej, więc mówimy „do Obornik”, a nie „do Oborników”. I przy szukaniu łatwo trafić na Oborniki Śląskie w powiecie trzebnickim — to inne miasto, w innym województwie.",
    },
    ...faqWspolne("w Obornikach"),
    {
      question: "Gotuję średnio cztery razy w tygodniu, a i tak nie nadążam. Dlaczego?",
      answer:
        "Bo prawdopodobnie planujesz pod tydzień, którego nie ma. Władysław Jagiełło odwiedził Oborniki dziesięć razy w latach 1394–1428, czyli średnio co trzy i cztery dziesiąte roku — a na pewno nie co trzy i cztery dziesiąte roku. Średnia jest prawdziwa i nie opisuje niczego, co się zdarzyło. „Cztery razy w tygodniu” zwykle znaczy sześć razy przez trzy tygodnie i ani razu w czwartym. Wypisz ostatnie cztery tygodnie osobno — zobaczysz rytm i dopiero pod niego da się planować.",
    },
    {
      question: "Jak sprawdzić, czy Thermomix mi się przyda?",
      answer:
        "Najlepiej patrząc na najgorszy tydzień, nie na przeciętny. Urządzenie zdejmuje pracę codziennie po kawałku, więc daje najwięcej tam, gdzie gotuje się gęsto i pod presją czasu. Jeśli policzysz korzyść ze średniej, wyjdzie źle w obie strony — za dużo w miesiącu spokojnym, za mało w gorącym. Na prezentacji zwykle proszę, żeby opowiedzieć mi jeden konkretny ciężki tydzień, i pod niego dobieram dania.",
    },
  ],

  geo: { lat: 52.6449, lng: 16.8142 },
};
