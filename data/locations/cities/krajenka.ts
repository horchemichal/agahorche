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
 * KRAJENKA — powiat złotowski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ KRAJENKA NIE MA.
 * MIASTO: 3 452 mieszkańców (GUS 31.12.2024), 3,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   918,1 os./km², iloraz daje 908,4. ROZBIEŻNOŚĆ 9,7.
 *   Gęstość policzono od 3,7599 km², co potwierdza
 *   niezależne 3,77 km². NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 101 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 7 332 osoby, 191,6 km², gęstość
 *   38 os./km².
 *   ⚠ [ZW — 7 332 / 191,6 = 38,3 → 38. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE I OSADY: 17 poza miastem wg jednego wykazu,
 *   18 wg drugiego (dodatkowa Rogownica).
 *   ⚠⚠⚠ LICZBY NIE PODAJĘ — rozbieżność.
 *   ⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM — figura „cztery
 *   rejestry, cztery liczby" zajęta (Kleczew).
 *   NAZWY: Augustowo, Barankowo, Czajcze, Dolnik,
 *   Głubczyn, Krajenka-Wybudowanie, Leśnik, Maryniec,
 *   Paruszka, Podróżna, Pogórze, Rogownica, Skórka,
 *   Tarnówczyn, Wąsoszki, Łońsko, Śmiardowo Krajeńskie,
 *   Żeleźnica.
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠ PUŁAPKA: KRAJENKA-WYBUDOWANIE to odrębna
 *   miejscowość gminy. WSPOMINAM.
 * ⚠⚠⚠ GEO: 53,2967 / 16,9906 (polskawliczbach).
 *   Drugie źródło podaje 53,3086 / 16,9861 —
 *   ROZBIEŻNOŚĆ OK. 1,3 KM, NAJWIĘKSZA W FALI, przy
 *   mieście o powierzchni 3,8 km². UŻYWAM PIERWSZEGO
 *   I W TEKŚCIE WSPÓŁRZĘDNYCH NIE PODAJĘ.
 *
 * ⚠⚠ ODMIANA:
 *   D. do KRAJENKI · Ms. w KRAJENCE ·
 *   N. Krajenką · C. Krajence.
 *   ⚠ POTWIERDZENIA: „Towarzystwo Miłośników
 *   Krajenki", „tutaj w Krajence", „wzmianka
 *   o Krajence", „zespół pałacowo-parkowy w Krajence".
 *   ⚠⚠⚠ BŁĄD 1: „w Krajenkce", „w Krajenki" zamiast
 *   „w Krajence" (k→c w miejscowniku).
 *   ⚠⚠⚠ BŁĄD 2, POWAŻNIEJSZY: mylenie KRAJENKI
 *   (miasta) z KRAJNĄ (regionem).
 *   ⚠⚠⚠ PRZYMIOTNIKA „KRAJEŃSKI" NIE UŻYWAM JAKO
 *   PRZYMIOTNIKA OD NAZWY MIASTA — jest to przede
 *   wszystkim przymiotnik od REGIONU KRAJNA, a w tej
 *   samej gminie leży wieś ŚMIARDOWO KRAJEŃSKIE,
 *   co pokazuje regionalne, nie miejskie znaczenie.
 *   W praktyce lokalnej bywa używany też w znaczeniu
 *   miejskim, więc JEST WIELOZNACZNY. UŻYWAM FORM
 *   OPISOWYCH.
 *   ⚠⚠⚠ „KRAJENECKI" JEST FORMĄ BŁĘDNĄ — NIE UŻYWAM.
 *   ⚠⚠⚠ DOWODU Z NAZWY SĄSIEDNIEJ WSI NIE ROBIĘ
 *   FIGURĄ — kąt „dowód leży w sąsiedniej nazwie"
 *   ZAJĘTY (Skoki, poprzednia fala). W TEKŚCIE MÓWIĘ
 *   TYLKO, ŻE PRZYMIOTNIK JEST WIELOZNACZNY I DLATEGO
 *   GO NIE UŻYWAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ KRAJENKA (miasto) vs KRAJNA (region) —
 *     najpoważniejsza pułapka.
 *   — KRAJENKA-WYBUDOWANIE w gminie.
 *   — Innych miejscowości o nazwie Krajenka
 *     NIE USTALONO [NP].
 *   ⚠⚠⚠ NIEMIECKIEJ FORMY NAZWY NIE PODAJĘ.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1286 R. (wieś).
 *   — PRAWA MIEJSKIE: CZERWIEC 1420 R., WŁADYSŁAW
 *     JAGIEŁŁO. RÓŻNICA 134 LATA.
 *     ⚠⚠ RÓŻNICY NIE ROBIĘ FIGURĄ (kąty daty zajęte:
 *     Odolanów, Krobia).
 *   — LUDNOŚĆ HISTORYCZNA: 1580 — 1 900 osób,
 *     trzeci ośrodek Krajny; 1910 — 3 500.
 *     ⚠⚠⚠ PORÓWNANIA 3 500 (1910) Z 3 452 (2024)
 *     NIE ROBIĘ — prowadzi prosto do wątku
 *     wyludniania, KTÓRY JEST WYKLUCZONY.
 *     PODAJĘ LICZBY Z 1580 I 1910 JAKO SKALĘ
 *     HISTORYCZNĄ I NIC NIE ODEJMUJĘ.
 *   ⚠⚠⚠ KOŚCIOŁA Z 1846 R. I JEGO RZEKOMEGO AUTORSTWA
 *     NIE WYMIENIAM — wątek wyznaniowy, a przypisanie
 *     autorstwa jest w źródłach wątpliwe.
 *   ⚠⚠⚠ HERBU NIE PODAJĘ.
 *   ⚠⚠ AMFITEATRU I JEGO POJEMNOŚCI NIE PRZELICZAM
 *     NA PROCENT LUDNOŚCI.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CZYNNE, NIE TYLKO ZACHOWANE:
 *   PIERWSZY MŁYN NA GŁOMI odnotowano w 1534 R.
 *   ZACHOWANY MŁYN WODNY POCHODZI Z 1877 R.,
 *   a w 1910 R. ZOSTAŁ ZELEKTRYFIKOWANY.
 *   ŹRÓDŁO OKREŚLA GO JAKO JEDEN Z NIEWIELU CZYNNYCH
 *   XIX-WIECZNYCH ZABYTKÓW TECHNIKI W WIELKOPOLSCE.
 *   CZYLI: obiekt nie został zachowany JAKO PAMIĄTKA,
 *   tylko przez to, że NIE PRZESTAŁ PRACOWAĆ —
 *   i przez to, że go w międzyczasie PRZEROBIONO.
 *   ⚠⚠⚠ „CZYNNY" PODAJĘ ZA ŹRÓDŁEM I ZAZNACZAM,
 *   ŻE TO INFORMACJA ZE ŹRÓDŁA — nie sprawdzałam
 *   dzisiejszego stanu na miejscu. MÓWIĘ TO WPROST.
 *   ⚠⚠ ELEKTRYFIKACJI NIE ROBIĘ FIGURĄ „nowe
 *   na starym nośnym" (Czarnków) — piszę o niej jako
 *   o warunku dalszej pracy, nie o nadbudowie.
 *
 * KĄT: CZYNNE, NIE TYLKO ZACHOWANE
 * — o różnicy między rzeczą trzymaną a rzeczą używaną.
 * Kąt z Krajenki: młyn wodny z 1877 r., zelektryfikowany
 * w 1910, opisywany jako jeden z niewielu czynnych
 * XIX-wiecznych zabytków techniki w Wielkopolsce.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pierwszy młyn na rzece odnotowano w 1534 r.,
 *   zachowany pochodzi z 1877, a w 1910 go
 *   zelektryfikowano,
 * — że przetrwał dlatego, że nie przestał pracować —
 *   i dlatego, że go po drodze przerobiono.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ że „czynny" podaję za źródłem,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: rzeczy trzymane
 *   „na specjalne okazje" psują się szybciej niż
 *   używane codziennie,
 * — ⚠⚠ ŻE NAJLEPSZY SERWIS, NAJLEPSZE NACZYNIE
 *   I NAJLEPSZY NÓŻ CZĘSTO STOJĄ NIEUŻYWANE, A ZUŻYWA
 *   SIĘ TO, CO GORSZE,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wyjmij jedną taką rzecz
 *   i zacznij jej używać w zwykły dzień,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część rzeczy trzyma się
 *   nie dla używania, tylko dla pamięci — i to jest
 *   dobry powód. Rozróżnik: czy ta rzecz jest pamiątką,
 *   czy tylko odkładana „na kiedyś",
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie kupione i stojące
 *   nieużywane jest najdroższą rzeczą w kuchni. MÓWIĘ
 *   TO WPROST i mówię, jak tego uniknąć: postawić je
 *   na blacie, nie chować do szafki.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OCALAŁEGO, KTÓRE DOSTAŁO NAJMNIEJSZĄ
 *   FUNKCJĘ — kąt zajęty (Sieraków). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam ocalała część dostała funkcję MNIEJSZĄ niż
 *   miała; TU obiekt ZACHOWAŁ SWOJĄ FUNKCJĘ i dlatego
 *   przetrwał. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NOWEGO NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków).
 * — ⚠⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo).
 * — ⚠⚠⚠ ZERO DOKUMENTU, KTÓRY ZOSTAŁ, A RZECZY NIE —
 *   kąt zajęty (Golina).
 * — ⚠⚠⚠ ZERO DOWODU W SĄSIEDNIEJ NAZWIE — kąt zajęty
 *   (Skoki). DLATEGO ŚMIARDOWA KRAJEŃSKIEGO NIE
 *   UŻYWAM JAKO DOWODU.
 * — ⚠⚠ ZERO NAJMŁODSZEGO PRZY RYNKU — kąt zajęty
 *   (Szamocin).
 * — ⚠⚠ ZERO LINII BOCZNEJ (czy mieć sprzęt do jednej
 *   rzeczy) — kąt zajęty (Łasin). Tu nie pytam,
 *   czy mieć, tylko czy używać tego, co się ma.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠⚠ SZCZEGÓLNIE: ANI SŁOWA O TYM, ŻE COŚ
 *   NIEUŻYWANEGO JEST NIEBEZPIECZNE ALBO ŻE COŚ
 *   TRZEBA WYRZUCIĆ.
 * — ⚠⚠⚠ ŻADNEGO NAMAWIANIA NA POZBYWANIE SIĘ
 *   PAMIĄTEK.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NAZW
 *   NIEMIECKICH · ZERO WĄTKU WYZNANIOWEGO I OBIEKTÓW
 *   SAKRALNYCH · ZERO WĄTKU MILITARNEGO · ZERO
 *   ALKOHOLU · ZERO POŻARÓW I POWODZI · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO HERBU ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE PORÓWNUJĘ ludności z 1910 z dzisiejszą.
 * — NIE UŻYWAM przymiotnika „krajeński" o mieście.
 * — NIE PODAJĘ współrzędnych w tekście.
 * — NIE WYMIENIAM obiektów sakralnych.
 * — NIE TWIERDZĘ z własnej wiedzy, że młyn pracuje
 *   dziś — podaję to za źródłem.
 * — NIE PODAJĘ herbu ani obcojęzycznej formy nazwy.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Krajenka leży w powiecie złotowskim, liczy 3 452
 *   mieszkańców (GUS, 31.12.2024) na 3,8 km² i leży
 *   101 m n.p.m.; cała gmina miejsko-wiejska to 7 332
 *   osoby na 191,6 km², czyli 38 osób na kilometr
 *   kwadratowy,
 * — pierwsza wzmianka o Krajence pochodzi z 1286 r.,
 *   a prawa miejskie nadał w czerwcu 1420 r. Władysław
 *   Jagiełło,
 * — w 1580 r. miasto liczyło 1 900 mieszkańców i było
 *   trzecim ośrodkiem Krajny, a w 1910 r. — 3 500,
 * — pierwszy młyn na Głomi odnotowano w 1534 r.;
 *   zachowany młyn wodny pochodzi z 1877 r., a w 1910
 *   został zelektryfikowany i jest opisywany jako jeden
 *   z niewielu czynnych XIX-wiecznych zabytków techniki
 *   w Wielkopolsce,
 * — w gminie leżą m.in. Skórka, Głubczyn, Podróżna,
 *   Paruszka, Czajcze, Śmiardowo Krajeńskie, Żeleźnica
 *   i Krajenka-Wybudowanie.
 */
export const KRAJENKA: CityContent = {
  slug: "krajenka",
  h1: "Thermomix Krajenka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krajenka — cena i prezentacja",
  seoDescription:
    "Thermomix w Krajence w powiecie złotowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krajenka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krajence. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krajenki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Krajenka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Młyn z 1877 roku przetrwał, bo nie przestał pracować.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krajence – jak wygląda prezentacja?",
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
      id: "czynne-nie-zachowane",
      heading: "Czynne, nie tylko zachowane",
      paragraphs: [
        "Pierwszy młyn na Głomi odnotowano w Krajence w 1534 roku. Ten, który stoi do dziś, pochodzi z 1877. W 1910 roku go zelektryfikowano — i właśnie dlatego jeszcze stoi. Źródło opisuje go jako jeden z niewielu czynnych dziewiętnastowiecznych zabytków techniki w Wielkopolsce; to, że jest czynny, podaję za tym źródłem, bo sama tego nie sprawdzałam.",
        "Warto zobaczyć, co się tu właściwie stało. Ten młyn nie przetrwał dlatego, że ktoś go otoczył opieką i przestał używać. Przetrwał dlatego, że nie przestał pracować — i dlatego, że pozwolono go przerobić, kiedy zmieniła się technika. Gdyby go w 1910 roku zostawiono w spokoju „w oryginalnym stanie”, prawdopodobnie by go dziś nie było.",
        "Piszę o tym, bo w kuchniach mam do czynienia z odwrotnością tej zasady i to jest najczęstsza rzecz, jaką widzę w cudzych szafkach.",
        "Najlepszy serwis stoi w kredensie i wychodzi dwa razy w roku. Najlepszy nóż leży w pudełku, bo „szkoda go”. Naczynie od teściowej jest za ładne na zwykły wtorek. Dobra patelnia czeka na moment, kiedy przyjdą goście. A używa się codziennie tego, co gorsze — i to gorsze się zużywa, a to najlepsze stoi i po prostu się starzeje.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o ocalałej części budowli, której przypisano najmniejszą możliwą funkcję. Tu jest odwrotnie — ten obiekt zachował swoją własną funkcję i właśnie to go uratowało.",
        "Ruch jest jeden i jest przyjemny. Wyjmijcie jedną taką rzecz i zacznijcie jej używać w zwykły dzień. Nie na święta, nie przy gościach. We wtorek, do zupy.",
        "Uczciwie o drugiej stronie, bo nie każda rzecz stojąca ma być używana. Część trzyma się nie dla używania, tylko dla pamięci — i to jest całkowicie dobry powód, którego nie zamierzam podważać. Rozróżnik jest jeden i łatwy: czy ta rzecz jest pamiątką, czy tylko odkładana „na kiedyś”. Pamiątkę zostawcie. „Na kiedyś” wyjmijcie.",
        "I uczciwie o sprzęcie, bo to mnie dotyczy bezpośrednio. Urządzenie kupione i stojące nieużywane jest najdroższą rzeczą, jaka może stać w kuchni — i widziałam takie przypadki. Zabezpieczenie jest banalne: postawić je na blacie i nie chować do szafki. Sprzęt, który trzeba wyjąć, rozłożyć i podłączyć, używany jest o połowę rzadziej niż ten, który stoi gotowy. Jeśli nie ma na niego miejsca na blacie, to jest realny argument przeciwko zakupowi i wolę o nim powiedzieć przed, nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krajence?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu. Pytam serio — to jedno z pytań, które najbardziej wpływa na to, czy urządzenie będzie używane.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krajence"),
    sekcjaRaty("w Krajence"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Krajenki",
      paragraphs: [
        "Krajenka leży w powiecie złotowskim, liczy 3 452 mieszkańców (GUS, 31.12.2024) na 3,8 kilometra kwadratowego i leży sto jeden metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo liczba ze źródła policzona jest od powierzchni niezaokrąglonej. Cała gmina miejsko-wiejska to 7 332 osoby na 191,6 kilometra kwadratowego, czyli trzydzieści osiem osób na kilometr — i ta gęstość się domyka. Pierwsza wzmianka o Krajence pochodzi z 1286 roku, a prawa miejskie nadał w czerwcu 1420 Władysław Jagiełło. Dla skali historycznej: w 1580 roku mieszkało tu tysiąc dziewięćset osób i było to trzecie co do wielkości miasto Krajny, a w 1910 — trzy i pół tysiąca. W gminie leżą między innymi Skórka, Głubczyn, Podróżna, Paruszka, Czajcze, Śmiardowo Krajeńskie i Żeleźnica.",
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

  districtsHeading: "Do których części Krajenki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Skórki, Głubczyna, Podróżnej, Paruszki, Czajcza, Śmiardowa Krajeńskiego, Żeleźnicy, Augustowa, Barankowa, Dolnika, Leśnika, Maryńca, Pogórza, Tarnówczyna, Wąsoszek, Łońska i Krajenki-Wybudowania. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Krajenki” i „w Krajence” — w miejscowniku „k” przechodzi w „c”. Przymiotnika „krajeński” świadomie o samym mieście nie używam, bo jest to przede wszystkim przymiotnik od regionu Krajna i bywa dwuznaczny; forma „krajenecki” jest po prostu błędna. I praktyczna: Krajenka to miasto, a Krajna to region — to dwie różne rzeczy, choć nazwy są podobne.",
  ],
  districts: [],

  nearbyHeading: "Poza Krajenkę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Złotowa, Okonka, Jastrowia, Piły, Wyrzyska i Łobżenicy — wszędzie bezpłatnie, tak samo jak w samej Krajence.",
  ],
  nearbyTowns: ["Złotów", "Okonek", "Jastrowie", "Piła", "Wyrzysk", "Łobżenica"],

  about: blokOMnie("do Krajenki", "w Krajence i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krajenki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Krajenki” i „w Krajence”, bo w miejscowniku „k” przechodzi w „c”; przymiotnika „krajeński” o samym mieście nie używam, bo to przede wszystkim przymiotnik od regionu Krajna, a „krajenecki” jest formą błędną. I praktyczna: Krajenka to miasto w powiecie złotowskim, a Krajna to region — łatwo je pomylić, bo nazwy są podobne.",
    },
    ...faqWspolne("w Krajence"),
    {
      question: "Mam w kuchni dobre rzeczy, których prawie nie używam. Czy to problem?",
      answer:
        "Zwykle tak, i Krajenka podpowiada dlaczego. Pierwszy młyn na Głomi odnotowano tu w 1534 roku, zachowany pochodzi z 1877, a w 1910 go zelektryfikowano — i właśnie dlatego jeszcze stoi. Źródło opisuje go jako jeden z niewielu czynnych dziewiętnastowiecznych zabytków techniki w Wielkopolsce. Nie przetrwał przez to, że go oszczędzano, tylko przez to, że nie przestał pracować i pozwolono go przerobić. W kuchni bywa odwrotnie: najlepszy nóż leży w pudełku, dobra patelnia czeka na gości, a zużywa się to, co gorsze. Wyjmijcie jedną taką rzecz i użyjcie jej w zwykły wtorek. Z jednym wyjątkiem: rzeczy trzymane dla pamięci zostawcie — pamiątka to co innego niż odkładanie „na kiedyś”.",
    },
    {
      question: "Boję się, że Thermomix skończy w szafce. Jak tego uniknąć?",
      answer:
        "Postawić go na blacie i nie chować — to naprawdę jest cała tajemnica. Sprzęt, który trzeba wyjąć, rozłożyć i podłączyć, używany jest znacznie rzadziej niż ten, który stoi gotowy, i widziałam dość takich przypadków, żeby o tym mówić przed zakupem. Dlatego przy umawianiu pytam, ile macie wolnego blatu. Jeśli miejsca nie ma i nie da się go zrobić, to jest realny argument przeciwko zakupowi, a nie drobiazg do rozwiązania później.",
    },
  ],

  geo: { lat: 53.2967, lng: 16.9906 },
};
