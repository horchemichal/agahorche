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
 * ZBĄSZYŃ — powiat nowotomyski, woj. wielkopolskie.
 * ⚠ NOWY TOMYŚL i OPALENICA (ten sam powiat) SĄ OPISANE
 *   W TYM CYKLU.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ ZBĄSZYŃ NIE MA.
 * MIASTO: 7 023 mieszkańców (GUS 31.12.2024), 5,4 km²,
 *   gęstość 1 295,8 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 5,42 km², potwierdzone
 *   niezależnie]. PODAJĘ.
 * CAŁA GMINA: 13 679 osób, 180,0 km², gęstość
 *   76 os./km².
 *   ⚠ [ZW — DOMYKA SIĘ IDEALNIE: 13 679 ÷ 180,0 =
 *   75,99. JEDYNA GMINA TEJ FALI, KTÓREJ GĘSTOŚĆ SIĘ
 *   DOMYKA]. PODAJĘ.
 *   ⚠⚠⚠ POWIERZCHNI GMINY W WERSJI 79,77 km² NIE UŻYWAM
 *   — to liczba błędna (własna gęstość tego źródła ją
 *   wyklucza).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 13 — Chrośnica, Łomnica, Nądnia, Nowa Wieś,
 *   Nowa Wieś Zbąska, Nowe Jastrzębsko, Nowy Dwór,
 *   Perzyny, Przychodzko, Przyprostynia, Stefanowice,
 *   Strzyżewo, Zakrzewko.
 *   ⚠ Wykaz GUS dodaje Dąbrowę i Stefanowo — dwie
 *   miejscowości bez statusu sołectwa. ⚠⚠ RÓŻNICY
 *   NIE ROBIĘ KĄTEM (figury zajęte: Kostrzyn, Wronki).
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,2505 / 15,9253.
 * WODA: rzeka OBRA (rozdziela się — jedno ramię
 *   na północ przez łańcuch jezior, drugie na zachód
 *   ku Odrze) oraz JEZIORO BŁĘDNO, zwane też JEZIOREM
 *   ZBĄSZYŃSKIM.
 *   ⚠⚠⚠ TO JEDNO JEZIORO O DWÓCH NAZWACH. Jedno źródło
 *   policzyło je jako dwa zbiorniki. PODAJĘ OBIE NAZWY
 *   W JEDNYM ZDANIU I ROZGRANICZAM W SEKCJI DZIELNIC.
 *   ⚠⚠ TEJ POMYŁKI NIE ROBIĘ KĄTEM.
 *   ⚠ TRZECIEJ, NIEMIECKIEJ NAZWY NIE UŻYWAM.
 *   Parametry: 742,5 ha; 26 178 700 m³; głębokość maks.
 *   9,6 m, średnia 3,5 m; długość 7 105 m, szerokość
 *   2 205 m; linia brzegowa 18 540 m.
 *   ⚠⚠ PROPORCJI JEZIORO/MIASTO NIE ROBIĘ KĄTEM.
 *   ⚠⚠ DWÓCH DEN (7,5 m i „głęboczek" 9,6 m) NIE UŻYWAM
 *   — figura średniej zajęta (Oborniki).
 *
 * ⚠⚠ ODMIANA — TEMAT MIĘKKI NA -Ń:
 *   D. do ZBĄSZYNIA (nie „Zbąszynu"!) ·
 *   Ms. w ZBĄSZYNIU · N. Zbąszyniem.
 *   ⚠⚠⚠ NOSÓWKA „ą" ZOSTAJE W KAŻDEJ FORMIE.
 *   Przymiotnik: ZBĄSZYŃSKI (Jezioro Zbąszyńskie).
 *   ⚠ Wariant ZBĄSKI występuje w nazwach historycznych
 *     i miejscowych (Abraham Zbąski, Nowa Wieś Zbąska)
 *     — NIE UJEDNOLICAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW: ZBĄSZYNEK — osobne miasto
 *   w woj. lubuskim, powiat świebodziński, przymiotnik
 *   „zbąszynecki". ⚠⚠⚠ OBA MIASTA NALEŻĄ DO TEGO SAMEGO
 *   REGIONU KOZŁA, więc ryzyko pomyłki jest realne.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA PISANA: 1231 r.; początki osady
 *     X–XI w.
 *   — KOMORA CELNA: 1243 r.
 *   — PRAWA MIEJSKIE: „przed 1311 r." ⚠ [SP — część
 *     źródeł podaje wprost rok 1311]. NADAWCY NIE
 *     USTALONO.
 *   — Utraty praw nie ustalono.
 *   — 1393 r. — własność prywatna; od 1613 r.
 *     Ciświccy; od 1700 r. Garczyńscy.
 *   — 1870 r. — powstanie węzła kolejowego.
 *     ⚠⚠ WYŁĄCZNIE DATA W TLE.
 *   ⚠⚠ DATY 17 STYCZNIA 1920 R. NIE UŻYWAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PAŁAC W TWIERDZY:
 *   — 1560–1577 (17 LAT): ABRAHAM ZBĄSKI wznosi zamek
 *     nad jeziorem,
 *   — 1613–1627 (14 LAT): ABRAHAM CIŚWICKI przebudowuje
 *     go w typ „PALAZZO IN FORTEZZA" — PAŁAC
 *     W TWIERDZY.
 *   ⚠⚠⚠ BUDYNEK JEST JEDNOCZEŚNIE REZYDENCJĄ
 *   I WAROWNIĄ — I TAK SIĘ WŁAŚNIE NAZYWA. Nazwa typu
 *   architektonicznego nie udaje, że pełni jedną
 *   funkcję. To jest cały kąt.
 *   ⚠⚠⚠ FUNKCJI OBRONNEJ NIE ROZWIJAM — ANI SŁOWA
 *   O WOJNIE, OBLĘŻENIACH, UZBROJENIU. NAZWA TYPU
 *   I TYLE. WĄTEK MILITARNY WYKLUCZONY.
 *   ⚠ ZBIEŻNOŚĆ IMION (dwaj Abrahamowie) PODAJĘ JAKO
 *     GOŁY FAKT. ⚠⚠ ODSTĘPU 36 LAT MIĘDZY KAMPANIAMI
 *     NIE ROBIĘ KĄTEM (figury zajęte: Węgliniec,
 *     Opalenica).
 *   ⚠ WYMIARÓW ZAMKU NIE USTALONO — NIE PODAJĘ.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — REGION KOZŁA: sześć sąsiadujących gmin — Babimost,
 *   Kargowa, Trzciel, Siedlec, Zbąszynek, Zbąszyń;
 *   1 086 km², około 57 000 mieszkańców.
 *   ⚠⚠ PODZIAŁU MIĘDZY DWA WOJEWÓDZTWA NIE PODAJĘ
 *   [NP — niepotwierdzone w tej sesji].
 *   ⚠⚠ PROPORCJI GMINY W REGIONIE NIE LICZĘ.
 * — w Zbąszyniu działają dwa zespoły: „Wesele
 *   Przyprostyńskie" i „Koziołki Przyprostyńskie" —
 *   oba od nazwy jednej wsi, Przyprostyni.
 *   ⚠⚠ TEJ ZBIEŻNOŚCI NIE ROBIĘ KĄTEM.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW POZA WYMIARAMI JEZIORA.
 *
 * KĄT: JEDNA RZECZ, DWIE FUNKCJE NARAZ
 * — o przedmiotach, które uczciwie robią dwie rzeczy,
 * i o tych, które tylko udają. Kąt ze Zbąszynia:
 * przebudowany zamek to „palazzo in fortezza", pałac
 * w twierdzy — i tak brzmi nazwa jego typu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zamek wznoszono w latach 1560–1577, a w latach
 *   1613–1627 przebudowano go w typ „palazzo in
 *   fortezza",
 * — ŻE NAZWA TEGO TYPU ZNACZY DOSŁOWNIE „PAŁAC
 *   W TWIERDZY" — budynek jest jednocześnie dwiema
 *   rzeczami i nie udaje, że jedną. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE FUNKCJI OBRONNEJ NIE ROZWIJAM,
 * — ⚠⚠ ŻE W MAŁEJ KUCHNI NAJLEPSZE PRZEDMIOTY SĄ
 *   WŁAŚNIE TAKIE: garnek, który jedzie na stół; deska,
 *   która jest tacą; stół, który jest blatem,
 * — ⚠⚠ ŻE NAJGORSZE SĄ TE, KTÓRE UDAJĄ DWIE FUNKCJE
 *   I NIE PEŁNIĄ ŻADNEJ PORZĄDNIE,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nazwij swoje przedmioty
 *   dwufunkcyjne na głos. Potem przestań dokupować
 *   jednofunkcyjne do kuchni, w której nie ma na nie
 *   miejsca,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część rzeczy
 *   dwufunkcyjnych to kompromis, który psuje obie
 *   funkcje. ROZRÓŻNIK: czy przedmiot robi obie rzeczy
 *   tak dobrze, jak zrobiłby to sprzęt dedykowany,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest właśnie
 *   pałacem w twierdzy — robi kilka rzeczy naraz.
 *   MÓWIĘ WPROST, KTÓRE NA POZIOMIE SPRZĘTU
 *   DEDYKOWANEGO, A KTÓRYCH NIE ROBI WCALE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o liczbę
 *   przedmiotów wobec możliwości ich użycia; tu
 *   o jeden przedmiot pełniący dwie funkcje naraz.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa).
 * — ⚠⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ⚠⚠ ZERO PRZYGOTOWANE, NIE TYLKO ISTNIEJĄCE — kąt
 *   zajęty (Rogoźno).
 * — ⚠⚠ ZERO KUPIONE ZA MAŁE — kąt zajęty (Wolsztyn).
 * — ⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt zajęty
 *   (Nowy Tomyśl).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH PORÓWNAŃ Z KONKURENCYJNYMI URZĄDZENIAMI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO, OBLĘŻEŃ I UZBROJENIA · ZERO POWODZI
 *   I POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ powierzchni gminy w wersji 79,77 km².
 * — NIE PODAJĘ roku nadania praw jako pewnego.
 * — NIE PODAJĘ wymiarów zamku.
 * — NIE OPISUJĘ funkcji obronnej zamku.
 * — NIE PODAJĘ podziału Regionu Kozła między
 *   województwa.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Zbąszyń leży w powiecie nowotomyskim, nad Obrą
 *   i nad Jeziorem Błędno, zwanym też Zbąszyńskim;
 *   miasto liczy 7 023 mieszkańców (GUS, 31.12.2024)
 *   na 5,4 km², czyli 1 295,8 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 13 679
 *   osób na 180,0 km², czyli 76 osób na kilometr,
 *   i dzieli się na 13 sołectw,
 * — jezioro ma 742,5 ha powierzchni i 26 178 700 m³
 *   objętości, 7 105 m długości, 2 205 m szerokości
 *   i 18 540 m linii brzegowej, przy głębokości
 *   maksymalnej 9,6 m i średniej 3,5 m,
 * — pierwsza wzmianka pisana pochodzi z 1231 r.,
 *   komora celna działała od 1243 r., a prawa miejskie
 *   miasto miało przed 1311 r.,
 * — zamek nad jeziorem wznosił Abraham Zbąski w latach
 *   1560–1577, a Abraham Ciświcki przebudował go
 *   w latach 1613–1627 w typ „palazzo in fortezza",
 *   czyli pałac w twierdzy; od 1613 r. miasto należało
 *   do Ciświckich, od 1700 r. do Garczyńskich,
 * — Zbąszyń wchodzi w skład Regionu Kozła — sześciu
 *   sąsiadujących gmin (Babimost, Kargowa, Trzciel,
 *   Siedlec, Zbąszynek, Zbąszyń) o łącznej powierzchni
 *   1 086 km² i około 57 tys. mieszkańców; działają tu
 *   zespoły „Wesele Przyprostyńskie" i „Koziołki
 *   Przyprostyńskie", oba nazwane od wsi Przyprostynia.
 */
export const ZBASZYN: CityContent = {
  slug: "zbaszyn",
  h1: "Thermomix Zbąszyń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zbąszyń — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zbąszyniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zbąszyń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zbąszyniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zbąszynia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzynastu sołectw w gminie.",

  highlights: highlightyStandardowe("Zbąszyń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pałac w twierdzy — i tak brzmi nazwa tego typu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zbąszyniu – jak wygląda prezentacja?",
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
      id: "dwie-funkcje-naraz",
      heading: "Jedna rzecz, dwie funkcje naraz",
      paragraphs: [
        "Zamek nad zbąszyńskim jeziorem wznosił Abraham Zbąski w latach 1560–1577. Trzydzieści sześć lat później inny Abraham, Ciświcki, przebudował go w latach 1613–1627.",
        "Efekt tej przebudowy ma własną nazwę typu: „palazzo in fortezza”. Dosłownie — pałac w twierdzy.",
        "To jest nazwa, która mi się podoba, bo niczego nie udaje. Budynek jest jednocześnie dwiema rzeczami i tak został nazwany. Nie „pałacem z elementami obronnymi”, nie „rezydencją w stylu fortecznym” — pałacem w twierdzy, oba rzeczowniki, oba równoprawne.",
        "W małej kuchni najlepsze przedmioty są dokładnie takie.",
        "Garnek, który jedzie na stół i nie trzeba przekładać do miski. Deska, która jest tacą. Stół, który jest blatem roboczym, dopóki nie trzeba nakryć. Szklany pojemnik, w którym się piecze i z którego się potem je. Te rzeczy nie są kompromisem — one naprawdę robią dwie rzeczy dobrze, i w kuchni o dwóch metrach blatu są warte więcej niż cokolwiek innego.",
        "Najgorsze są te, które udają dwie funkcje i nie pełnią żadnej porządnie. Multinarzędzie, które ani nie kroi, ani nie trze. Nakładka na garnek, która teoretycznie jest sitkiem. Krzesło, które jest też drabinką i przy obu zastosowaniach jest niewygodne.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że narzędzi bywa więcej niż rąk — o nadmiarze przedmiotów wobec możliwości ich użycia. Tu jest o czymś innym: o jednym przedmiocie, który robi dwie rzeczy naraz.",
        "Ruch jest jeden i jest przyjemny. Nazwij na głos swoje przedmioty dwufunkcyjne — zwykle są ich trzy albo cztery i zwykle nikt tego nie zauważa. A potem przestań dokupować jednofunkcyjne do kuchni, w której nie ma już na nie miejsca.",
        "Uczciwie o drugiej stronie: rozróżnik jest prosty i trzeba go stosować bez litości. Czy ten przedmiot robi obie rzeczy tak dobrze, jak zrobiłby to sprzęt dedykowany? Jeśli nie — to nie jest pałac w twierdzy, tylko dom, w którym ani się nie mieszka, ani się nie obronisz.",
        "I uczciwie o sprzęcie, bo Thermomix jest właśnie takim budynkiem. Kilka rzeczy robi na poziomie sprzętu dedykowanego: miesza z podgrzewaniem, miele, waży, gotuje na parze, utrzymuje temperaturę bez pilnowania. Kilku innych nie robi wcale i nie warto się oszukiwać: nie usmaży kotleta na złoto, nie upiecze chleba z chrupiącą skórką, nie zastąpi piekarnika ani patelni. Wolę wymienić obie listy, niż sprzedawać hasło „robi wszystko”.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zbąszyniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, które trzy przedmioty w Waszej kuchni robią po dwie rzeczy. Sporo mówią o tym, jak u Was działa gotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zbąszyniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Zbąszynia",
      paragraphs: [
        "Zbąszyń leży w powiecie nowotomyskim, nad Obrą i nad Jeziorem Błędno — zwanym też Jeziorem Zbąszyńskim. Samo miasto liczy 7 023 mieszkańców (GUS, 31.12.2024) na 5,4 kilometra kwadratowego, czyli tysiąc dwieście dziewięćdziesiąt sześć osób na kilometr, a cała gmina miejsko-wiejska 13 679 osób na stu osiemdziesięciu kilometrach, czyli siedemdziesiąt sześć osób na kilometr — i akurat ta liczba gminna domyka się z dzielenia co do drugiego miejsca po przecinku, co przy takich danych zdarza się rzadko. Gmina dzieli się na trzynaście sołectw. Jezioro ma 742,5 hektara powierzchni i przeszło dwadzieścia sześć milionów metrów sześciennych wody, siedem kilometrów długości, dwa szerokości i ponad osiemnaście kilometrów linii brzegowej, przy głębokości maksymalnej dziewięciu i sześciu dziesiątych metra. Pierwsza wzmianka pisana pochodzi z 1231 roku, komora celna działała od 1243, a prawa miejskie miasto miało przed 1311. Od 1613 roku należało do Ciświckich, od 1700 do Garczyńskich. Zbąszyń wchodzi w skład Regionu Kozła — sześciu sąsiadujących gmin o łącznej powierzchni tysiąca osiemdziesięciu sześciu kilometrów kwadratowych i około pięćdziesięciu siedmiu tysięcy mieszkańców; działają tu zespoły „Wesele Przyprostyńskie” i „Koziołki Przyprostyńskie”, oba nazwane od jednej wsi.",
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

  districtsHeading: "Do których części Zbąszynia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzynastu sołectw: Chrośnicy, Łomnicy, Nądni, Nowej Wsi i Nowej Wsi Zbąskiej, Nowego Jastrzębska, Nowego Dworu, Perzyn, Przychodzka, Przyprostyni, Stefanowic, Strzyżewa i Zakrzewka. Wszędzie bez dopłaty.",
    "Dwie uwagi praktyczne. Nowa Wieś i Nowa Wieś Zbąska to dwie różne miejscowości w tej samej gminie. A jezioro pod miastem ma dwie nazwy — Błędno i Zbąszyńskie — i jest jednym jeziorem, nie dwoma.",
  ],
  districts: [],

  nearbyHeading: "Poza Zbąszyń też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Nowego Tomyśla, Wolsztyna, Zbąszynka, Babimostu i Trzciela — wszędzie bezpłatnie, tak samo jak w samym Zbąszyniu.",
  ],
  nearbyTowns: ["Nowy Tomyśl", "Wolsztyn", "Zbąszynek", "Babimost", "Trzciel"],

  about: blokOMnie("do Zbąszynia", "w Zbąszyniu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zbąszynia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzynastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: mówi się „do Zbąszynia” i „w Zbąszyniu”, nie „do Zbąszynu”. I praktyczna: Zbąszynek to inne miasto, w województwie lubuskim — oba należą do Regionu Kozła, więc mylą się naprawdę często.",
    },
    ...faqWspolne("w Zbąszyniu"),
    {
      question: "Mam bardzo małą kuchnię. Na co zwracać uwagę przy kupowaniu czegokolwiek?",
      answer:
        "Na to, czy przedmiot uczciwie robi dwie rzeczy. Zamek w Zbąszyniu przebudowano w latach 1613–1627 w typ „palazzo in fortezza” — pałac w twierdzy; nazwa nie udaje, że budynek pełni jedną funkcję. W kuchni najcenniejsze są właśnie takie rzeczy: garnek, który jedzie na stół, deska, która jest tacą, naczynie, w którym się piecze i z którego się je. A rozróżnik jest bezlitosny: czy robi obie rzeczy tak dobrze, jak sprzęt dedykowany. Jeśli nie, to tylko udaje.",
    },
    {
      question: "Czego Thermomix nie robi?",
      answer:
        "Wymienię, bo to uczciwsze niż hasło „robi wszystko”. Nie usmaży kotleta na złoto ani frytek, nie upiecze chleba z chrupiącą skórką, nie zastąpi piekarnika ani patelni i nie zrobi zapiekanki z rumianym wierzchem. Robi za to na poziomie sprzętu dedykowanego: mieszanie z podgrzewaniem, mielenie, ważenie, gotowanie na parze i trzymanie temperatury bez pilnowania. Na prezentacji pokazuję pierwszą listę tak samo dokładnie jak drugą.",
    },
  ],

  geo: { lat: 52.2505, lng: 15.9253 },
};
