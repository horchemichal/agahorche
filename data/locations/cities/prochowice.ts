import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * PROCHOWICE — powiat legnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 490 mieszkańców (GUS 31.12.2024), 9,9 km².
 *   ⚠⚠ GĘSTOŚĆ: 3 490 / 9,9 = 352,5, serwis podaje
 *   354,3. PISZĘ „OKOŁO TRZYSTU PIĘĆDZIESIĘCIU TRZECH" —
 *   nie cytuję wartości z przecinkiem.
 * CAŁA GMINA: 7 100 osób, 102,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 7 100 / 102,5 = 69,3,
 *   a serwis podaje 71. NIE DOMYKA SIĘ.
 *   ⚠ DZIESIĘĆ WSI [ZW, źródła zgodne]: Dąbie, Golanka
 *   Dolna, Gromadzyń, Kawice, Kwiatkowice, Lisowice,
 *   Mierzowice, Motyczyn, Rogów Legnicki, Szczedrzykowice.
 *   ⚠ Poza miastem mieszka 3 610 osób wobec 3 490
 *   w mieście — podział niemal równy (49,2 % / 50,8 %).
 *   ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 51,2730 / 16,3652.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM, ZAWSZE LICZBA MNOGA:
 *   „Prochowice LEŻĄ", „Prochowice LICZĄ" — NIGDY „leży".
 *   D. do PROCHOWIC (bez końcówki) · Ms. w Prochowicach ·
 *   N. Prochowicami.
 *   ⚠⚠⚠ BŁĄD: „do Prochowiców". SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM — także zgodność orzeczenia w liczbie
 *   mnogiej w CAŁYM tekście.
 *   Przymiotnik: PROCHOWICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZEWNICZE — BARDZO SILNE:
 *   — ⚠⚠⚠ PROSZOWICE — MIASTO POWIATOWE w małopolskiem.
 *     Oba są miastami, oba na -owice. GŁÓWNA KOLIZJA.
 *   — PRÓSZKÓW — miasto w opolskiem, ten sam rdzeń
 *     fonetyczny.
 *   — ⚠⚠ PROSZOWA — WIEŚ W GMINIE MIRSK, opisywanej
 *     W TEJ SAMEJ FALI.
 *   — ⚠⚠ „PROCHOWNIA" — rzeczownik pospolity; sugeruje
 *     fałszywą etymologię. ⚠⚠⚠ NIE BUDUJĘ NA TYM
 *     ŻADNEGO WĄTKU I NIE PODAJĘ ETYMOLOGII NAZWY.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ W lidzie dopowiadam „nad Kaczawą" albo „w powiecie
 *   legnickim".
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1217 r. [ZW].
 *   — PRAWA MIEJSKIE: 1280 r., POTWIERDZONE w 1293 r.
 *     przez BOLKA I ŚWIDNICKIEGO [ZW dla potwierdzenia].
 *     ⚠⚠ NADAWCY PIERWOTNEGO NIE PODAJĘ — [NP].
 *   ⚠⚠ „NADANIE A POTWIERDZENIE" (13 lat odstępu) —
 *   ociera się o „dokument mówi »już było«" z Ścinawy.
 *   PODAJĘ OBIE DATY JAKO FAKTY, BEZ MORAŁU.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIEŻA ZAMKOWA, W KTÓREJ WIĘCEJ JEST
 *   MURU NIŻ WNĘTRZA:
 *   — podstawa: 7,70 × 8,00 m,
 *   — grubość muru: ponad 2 m,
 *   — wysokość: ok. 32 m bez dachu.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: pole podstawy
 *   7,70 × 8,00 = 61,6 m². Przy murze 2 m światło
 *   wnętrza to 3,70 × 4,00 = 14,8 m², czyli 24,0 %
 *   przekroju. TRZY CZWARTE TO KAMIEŃ.
 *   To jest cały kąt.
 *   ⚠⚠ ZAZNACZAM, ŻE 24 % TO MOJE PRZELICZENIE
 *   z podanych wymiarów, a nie liczba ze źródła.
 *   ⚠⚠ ŹRÓDŁO PODAJE „PONAD 2 M" — liczę więc przy 2 m,
 *   czyli wariant NAJKORZYSTNIEJSZY dla wnętrza,
 *   i mówię to wprost.
 *   ⚠ Podstawa NIE JEST kwadratem: różnica boków
 *   wynosi 30 cm. Smukłość: 32 m przy 8 m boku = 4:1.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — MURY MIEJSKIE: budowa 1430–1450 (20 lat), rozbiórka
 *   1813–1830 (17 lat), służba 363 lata. Bram były
 *   CZTERY: Legnicka (zwana też Kościelną), Głogowska,
 *   Wrocławska i Nowa (zwana Wołowską) — ⚠ cztery bramy,
 *   pięć nazw.
 *   ⚠⚠⚠ „ROZBIERANIE TRWA TYLE CO STAWIANIE" JAKO KĄT —
 *   NIE UŻYWAM: „rozebrać idzie szybciej, niż złożyć
 *   z powrotem" to figura ZAJĘTA (Góra), a to jej
 *   odwrócenie. PODAJĘ DATY JAKO FAKTY.
 *   ⚠⚠ „CZTERY BRAMY, PIĘĆ NAZW" — ociera się o „siedem
 *   nazw na jeden przedmiot" (Szklarska Poręba).
 *   PODAJĘ JAKO FAKT, BEZ MORAŁU.
 * — ZAMEK: gródek rycerski poł. XIII w., pierwsza
 *   wzmianka o nim 1317, murowany zamek ceglany
 *   ok. 1422, rozbudowa 1594, odbudowa 1835–1837.
 *   ⚠⚠ DOŁOŻENIA CZWARTEJ KONDYGNACJI NIE UŻYWAM —
 *   „dołożone po latach używania" to kąt ZAJĘTY (Syców).
 * — RATUSZ murowany 1424; kościół murowany 1426.
 *   ⚠⚠ KOŚCIOŁA NIE OPISUJĘ — wyznaniowe; podaję
 *   wyłącznie datę obok ratusza.
 * — WODOCIĄGI 1784; KOLEJ 1898 [⚠ SP co do przebiegu —
 *   NIE PODAJĘ KIERUNKU]; ELEKTROWNIA 1906.
 *   ⚠⚠ „WODA 122 LATA PRZED PRĄDEM" JAKO KĄT —
 *   NIE UŻYWAM: ociera się o „najpierw droga, potem
 *   ruch" (Pieńsk).
 * — ⚠⚠⚠ SERII LUDNOŚCIOWEJ NIE PODAJĘ — prowadzi
 *   w wątki wykluczone.
 * — ⚠⚠⚠ BROWARÓW I GORZELNI NIE WYMIENIAM — alkohol.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: TRZY CZWARTE TO ŚCIANA
 * — o tym, że wymiar zewnętrzny prawie nic nie mówi
 * o użytecznym wnętrzu. Kąt od wieży prochowickiego
 * zamku: podstawa 7,70 na 8,00 metra, mur ponad dwa —
 * czyli wnętrze to niecała czwarta część przekroju.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wieża zamku ma podstawę 7,70 × 8,00 m, mur
 *   grubości ponad dwóch metrów i około 32 m wysokości,
 * — ŻE PO PRZELICZENIU WYCHODZI Z TEGO NIECAŁE
 *   PIĘTNAŚCIE METRÓW KWADRATOWYCH WNĘTRZA NA PRAWIE
 *   SZEŚĆDZIESIĄT DWA PRZEKROJU — CZYLI OKOŁO
 *   DWUDZIESTU CZTERECH PROCENT. TO JEST RDZEŃ.
 *   ⚠ Zaznaczam, że to moje przeliczenie i że liczę
 *   przy dwóch metrach, czyli wariancie najkorzystniejszym
 *   dla wnętrza,
 * — ⚠⚠ ŻE W KUCHNI KUPUJEMY PO WYMIARZE ZEWNĘTRZNYM,
 *   bo taki jest na pudełku: garnek, szafka, lodówka,
 *   pojemnik,
 * — ⚠⚠ ŻE ŚCIANA ZABIERA WIĘCEJ, NIŻ SIĘ WYDAJE, I ŻE
 *   NIE DA SIĘ TEGO ODGADNĄĆ Z ZEWNĄTRZ — gruby garnek
 *   mieści mniej od cienkiego o tej samej średnicy,
 *   a rama szafki zjada szerokość,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: pytaj o wymiar wewnętrzny,
 *   nie o obrys. A jeśli nikt go nie podaje — zmierz
 *   sama, taśmą albo wodą,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA — I TO JEST WAŻNE: gruba
 *   ściana nie jest marnotrawstwem. To ona sprawia,
 *   że rzecz działa: cienki garnek przypala, cienka
 *   szafka się wygina. Nie chodzi o to, żeby chcieć
 *   cieńszych ścian. Chodzi o to, żeby przestać się
 *   dziwić wnętrzu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: pojemność nominalna naczynia
 *   i pojemność użyteczna to dwie różne liczby.
 *   MÓWIĘ WPROST, że warto pytać o tę drugą i że
 *   na spotkaniu można ją sprawdzić wodą — i że sama
 *   nie podaję jej z pamięci.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CIENKIE, ALE PIERWSZE — kąt zajęty (Kąty
 *   Wrocławskie). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tamten tekst mówi o GRUBOŚCI
 *   DWÓCH MURÓW I KOLEJNOŚCI ICH POWSTANIA; ten
 *   o STOSUNKU ŚCIANY DO WNĘTRZA W JEDNYM OBIEKCIE.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO WYMIARÓW STYKAJĄCYCH SIĘ RZECZY — kąt
 *   zajęty (Głuszyca). Tam chodziło o to, czy pokrywka
 *   pasuje do garnka; tu o to, ile garnek mieści.
 * — ⚠⚠⚠ ZERO ROZEBRAĆ IDZIE SZYBCIEJ NIŻ ZŁOŻYĆ — kąt
 *   zajęty (Góra). Dlatego daty budowy i rozbiórki murów
 *   zostają faktami.
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba).
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk).
 * — ⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNYCH WYMIARÓW ANI POJEMNOŚCI URZĄDZENIA —
 *   nie podaję liczb, których nie zweryfikowałam.
 *   Mówię, żeby o nie zapytać. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ALKOHOLU (browary i gorzelnie z 1910 r.).
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠⚠ ZERO DZIAŁAŃ ZBROJNYCH przy murach i zamku.
 * — ⚠ ZERO SERII LUDNOŚCIOWEJ I DEMOGRAFII.
 * — ⚠ ZERO ETYMOLOGII NAZWY.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE CYTUJĘ gęstości miasta z przecinkiem.
 * — NIE PODAJĘ nadawcy praw miejskich z 1280 r.
 * — NIE PODAJĘ 24 % jako liczby ze źródła — to moje
 *   przeliczenie z podanych wymiarów.
 * — NIE PODAJĘ przebiegu linii kolejowej z 1898 r.
 * — NIE PODAJĘ etymologii nazwy.
 * — NIE PODAJĘ wymiarów ani pojemności urządzenia.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Prochowice leżą nad Kaczawą, w powiecie legnickim;
 *   miasto liczy 3 490 mieszkańców (GUS, 31.12.2024)
 *   na 9,9 km², czyli około 353 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 7 100 osób
 *   na 102,5 km², z dziesięcioma wsiami; poza miastem
 *   mieszka 3 610 osób, czyli niewiele więcej niż w nim,
 * — pierwsza wzmianka pochodzi z 1217 r., prawa miejskie
 *   nadano w 1280, a w 1293 potwierdził je Bolko I
 *   Świdnicki,
 * — wieża zamku ma podstawę 7,70 × 8,00 m, mur grubości
 *   ponad dwóch metrów i około 32 m wysokości bez dachu,
 * — mury miejskie budowano w latach 1430–1450
 *   i rozbierano w latach 1813–1830; bram było cztery:
 *   Legnicka (zwana też Kościelną), Głogowska,
 *   Wrocławska i Nowa (zwana Wołowską),
 * — zamek zaczynał jako drewniany gródek rycerski
 *   w połowie XIII w., wzmiankowany w 1317; murowany,
 *   ceglany powstał około 1422, rozbudowano go w 1594,
 *   a odbudowano w latach 1835–1837,
 * — murowany ratusz wzniesiono w 1424 r., dwa lata
 *   przed murowanym kościołem,
 * — wodociągi powstały w 1784 r., kolej w 1898,
 *   a elektrownia w 1906.
 */
export const PROCHOWICE: CityContent = {
  slug: "prochowice",
  h1: "Thermomix Prochowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Prochowice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Prochowicach nad Kaczawą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Prochowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Prochowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Prochowic nad Kaczawą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dziesięciu wsi w gminie.",

  highlights: highlightyStandardowe("Prochowice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prawie sześćdziesiąt dwa metry przekroju. Wnętrza — niecałe piętnaście.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Prochowicach – jak wygląda prezentacja?",
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
      id: "trzy-czwarte-to-sciana",
      heading: "Trzy czwarte to ściana",
      paragraphs: [
        "Wieża prochowickiego zamku ma podstawę siedem metrów siedemdziesiąt na osiem metrów. Mur ma grubość ponad dwóch metrów. Cała wieża liczy około trzydziestu dwóch metrów wysokości bez dachu.",
        "Policzmy, co z tego zostaje w środku. Podstawa to niecałe sześćdziesiąt dwa metry kwadratowe. Przy murze dwumetrowym światło wnętrza wynosi trzy siedemdziesiąt na cztery metry — czyli niecałe piętnaście metrów kwadratowych.",
        "Około dwudziestu czterech procent. Trzy czwarte przekroju tej wieży to kamień.",
        "To moje przeliczenie z podanych wymiarów, nie liczba ze źródła — i liczę przy równych dwóch metrach, choć źródło mówi „ponad dwa”. Czyli w wariancie najkorzystniejszym dla wnętrza.",
        "W kuchni kupujemy po wymiarze zewnętrznym, bo taki jest na pudełku i na metce.",
        "Garnek ma podaną średnicę. Szafka ma podaną szerokość. Lodówka ma podaną wysokość. Pojemnik ma podaną pojemność, zwykle liczoną po brzeg, do którego nikt nigdy nie nalewa.",
        "A ściana zabiera więcej, niż się wydaje, i nie da się tego odgadnąć z zewnątrz. Gruby garnek mieści mniej niż cienki o tej samej średnicy. Rama szafki zjada szerokość. Izolacja lodówki zjada głębokość. Za każdym razem to samo zaskoczenie przy pierwszym użyciu.",
        "Ruch jest jeden. Pytaj o wymiar wewnętrzny, nie o obrys. A jeśli nikt go nie podaje — zmierz sama, taśmą albo wodą.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, czy pokrywka pasuje do garnka, a naczynie na półkę. To osobna sprawa. Tutaj chodzi o coś innego — o to, ile z tego, co kupujesz, jest w środku.",
        "Uczciwie o drugiej stronie, i to jest chyba najważniejsze zdanie tego akapitu: gruba ściana nie jest marnotrawstwem. To ona sprawia, że rzecz działa. Cienki garnek przypala, cienka szafka się wygina, cienka izolacja nie trzyma chłodu. Nie chodzi o to, żeby chcieć cieńszych ścian — chodzi o to, żeby przestać się dziwić wnętrzu.",
        "I uczciwie o sprzęcie. Pojemność nominalna naczynia i pojemność użyteczna to dwie różne liczby, w każdym urządzeniu i w każdym garnku. Warto pytać o tę drugą. Ja swoich nie podaję z pamięci — na spotkaniu można je po prostu sprawdzić wodą, i wolę zrobić to przy Was niż zacytować liczbę z folderu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Prochowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, na ile osób zwykle gotujecie. To od tej liczby, a nie od wielkości naczynia na zdjęciu, zależy, czy urządzenie ma u Was sens.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Prochowicach"),
    sekcjaRaty("w Prochowicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Prochowic",
      paragraphs: [
        "Prochowice leżą nad Kaczawą, w powiecie legnickim. Samo miasto liczy 3 490 mieszkańców (GUS, 31.12.2024) na niecałych dziesięciu kilometrach kwadratowych, czyli około trzystu pięćdziesięciu trzech osób na kilometr, a cała gmina miejsko-wiejska 7 100 osób na stu dwóch. Do gminy należy dziesięć wsi: Dąbie, Golanka Dolna, Gromadzyń, Kawice, Kwiatkowice, Lisowice, Mierzowice, Motyczyn, Rogów Legnicki i Szczedrzykowice. Poza miastem mieszka 3 610 osób — czyli odrobinę więcej niż w nim samym, co jest najrówniejszym podziałem, na jaki trafiłam w tej okolicy. Pierwsza wzmianka pochodzi z 1217 roku. Prawa miejskie nadano w 1280, a trzynaście lat później potwierdził je Bolko I Świdnicki; kto nadał je pierwotnie, nie zostało ustalone. Wieża zamku ma podstawę siedem siedemdziesiąt na osiem metrów, mur grubości ponad dwóch metrów i około trzydziestu dwóch metrów wysokości bez dachu — przy czym podstawa nie jest kwadratem, boki różnią się o trzydzieści centymetrów. Zamek zaczynał jako drewniany gródek rycerski w połowie trzynastego wieku, wzmiankowany w 1317; murowany, ceglany powstał około 1422, rozbudowano go w 1594, a odbudowano w latach 1835–1837. Murowany ratusz wzniesiono w 1424 roku, dwa lata przed murowanym kościołem. Mury miejskie budowano w latach 1430–1450, a rozbierano w latach 1813–1830 — bram było cztery: Legnicka, zwana też Kościelną, Głogowska, Wrocławska i Nowa, zwana Wołowską, czyli cztery przejścia i pięć nazw. Wodociągi powstały w 1784 roku, kolej w 1898, a elektrownia w 1906.",
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

  districtsHeading: "Do których części Prochowic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu wsi w gminie: Dąbia, Golanki Dolnej, Gromadzynia, Kawic, Kwiatkowic, Lisowic, Mierzowic, Motyczyna, Rogowa Legnickiego i Szczedrzykowic. Wszędzie bez dopłaty.",
    "Poza miastem mieszka w tej gminie nieco więcej ludzi niż w nim samym, więc przy umawianiu warto podać nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Prochowice też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Legnicy, Lubina, Ścinawy, Wołowa i Wrocławia — wszędzie bezpłatnie, tak samo jak w samych Prochowicach.",
  ],
  nearbyTowns: ["Legnica", "Lubin", "Ścinawa", "Wołów", "Wrocław"],

  about: blokOMnie("do Prochowic", "w Prochowicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Prochowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziesięciu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: nazwa jest w liczbie mnogiej, więc „Prochowice leżą” i „do Prochowic”, a nie „do Prochowiców”. I uwaga na podobne — Proszowice to miasto powiatowe w Małopolsce, Prószków leży w opolskiem, a Proszowa to wieś w gminie Mirsk. Warto dopowiedzieć „nad Kaczawą” albo „powiat legnicki”.",
    },
    ...faqWspolne("w Prochowicach"),
    {
      question: "Kupiłam garnek, który wygląda na duży, a mieści mało. Jak tego uniknąć?",
      answer:
        "Pytając o wymiar wewnętrzny. Wieża prochowickiego zamku ma podstawę siedem siedemdziesiąt na osiem metrów i mur grubości ponad dwóch — po przeliczeniu wnętrze to niecałe piętnaście metrów kwadratowych z prawie sześćdziesięciu dwóch, czyli około dwudziestu czterech procent. Trzy czwarte to kamień. W kuchni działa to identycznie: gruby garnek mieści mniej niż cienki o tej samej średnicy, rama szafki zjada szerokość, izolacja lodówki głębokość. Zastrzeżenie, i ważne: gruba ściana nie jest marnotrawstwem — to ona sprawia, że rzecz działa. Chodzi tylko o to, żeby przestać się dziwić.",
    },
    {
      question: "Ile naprawdę mieści naczynie Thermomixa?",
      answer:
        "Pojemność nominalna i użyteczna to dwie różne liczby, w każdym naczyniu i w każdym urządzeniu — a ja swoich nie podaję z pamięci, bo to akurat ten rodzaj danych, przy którym łatwo się pomylić o kilkaset mililitrów. Na prezentacji można to sprawdzić najprościej, jak się da: wodą, przy Was. Wolę zmierzyć niż zacytować folder. Przy umawianiu pytam za to, na ile osób zwykle gotujecie — bo to, a nie sama pojemność, rozstrzyga, czy urządzenie ma u Was sens.",
    },
  ],

  geo: { lat: 51.273, lng: 16.3652 },
};
