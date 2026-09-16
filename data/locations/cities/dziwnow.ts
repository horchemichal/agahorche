import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * DZIWNÓW — powiat kamieński, woj. zachodniopomorskie,
 * u ujścia cieśniny Dziwny do Bałtyku, NA WYSPIE WOLIN.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 282 mieszkańców (GUS 31.12.2024).
 * ⚠⚠ POWIERZCHNI MIASTA NIE PODAJĘ — źródła podają
 *   6,5 km² (polskawliczbach, GUS 2024) ALBO 4,93 km²
 *   (en.wikipedia, dane starsze). Różnica jest zbyt duża,
 *   żeby ją zignorować, i nie da się jej rozstrzygnąć.
 * CAŁA GMINA: 3 523 osoby, 39,5 km².
 * MIEJSCOWOŚCI GMINY POZA MIASTEM — TRZY:
 *   DZIWNÓWEK, MIĘDZYWODZIE, ŁUKĘCIN.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 54,0278 / 14,7646 (polskawliczbach).
 *   ⚠ en.wikipedia podaje 54,0170 / 14,7500 — różnica
 *   rzędu jednego kilometra. Używam polskawliczbach.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 *
 * ⚠ PRAWA MIEJSKIE: 1 STYCZNIA 2004 R. — jedno
 *   z najmłodszych miast w Polsce, mimo że pierwsza
 *   wzmianka o osadzie pochodzi z 1243 r.; status
 *   osiedla typu miejskiego od 1958 r.
 *
 * ⚠ ODMIANA: D. DZIWNOWA, Ms. W DZIWNOWIE,
 *   przym. DZIWNOWSKI. Wzorzec regularny dla nazw na -ów.
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠⚠⚠ HOMONIM WEWNĘTRZNY: DZIWNÓW ≠ DZIWNÓWEK —
 *   to dwie różne miejscowości W TEJ SAMEJ GMINIE.
 *   ROZGRANICZAM W FAQ.
 * ⚠⚠ Dodatkowo: MIASTO DZIWNÓW ≠ WYSPA WOLIN
 *   ≠ MIASTO WOLIN (osobna gmina, ma własną stronę)
 *   ≠ MIĘDZYZDROJE (osobna gmina, ma własną stronę).
 *   Wszystkie leżą na tej samej wyspie.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY MOSTY NA JEDNEJ PRZEPRAWIE:
 *   (1) MOST PRZEDWOJENNY (koniec lat 30. XX w.):
 *       drewniany, szerokość 4–6 M.
 *   (2) MOST Z LAT 50.: część drewniana około 180 M
 *       plus żelbetowo-drewniana około 16 M, szerokość
 *       6 M, NOŚNOŚĆ 10 TON; prześwit dla jednostek
 *       8 M szerokości i 10 M wysokości.
 *   (3) MOST PO PRZEBUDOWIE (2. połowa lat 80. – 1993):
 *       szerokość 7 M plus chodniki po 1,5 M,
 *       NOŚNOŚĆ 100 TON, pełna automatyzacja podnoszenia.
 *   TA SAMA PRZEPRAWA, DZIESIĘCIOKROTNY WZROST NOŚNOŚCI.
 *   ⚠ NAZWY MOSTU NADANEJ W 2021 R. NIE PODAJĘ —
 *   zawiera nazwę organizacji.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy
 *   Dziwnów. NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: NAPRAWIĆ CZY WYMIENIĆ — i skąd wiadomo, że to już
 * ten moment.
 * Kąt od dziwnowskiej przeprawy: w tym samym miejscu stały
 * po kolei trzy mosty. Żadnego z nich nie łatano bez końca
 * — za każdym razem uznano, że taniej jest postawić nowy,
 * bo zmieniło się to, co ma przez niego przejeżdżać.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że na tej samej przeprawie stały po kolei trzy mosty:
 *   przedwojenny drewniany o szerokości czterech do sześciu
 *   metrów, most z lat pięćdziesiątych o nośności dziesięciu
 *   ton i most po przebudowie zakończonej w 1993 r.
 *   o nośności stu ton,
 * — ŻE O WYMIANIE NIE ZDECYDOWAŁ STAN MOSTU, TYLKO ZMIANA
 *   TEGO, CO MA PRZEZ NIEGO PRZEJEŻDŻAĆ — to jest rdzeń.
 *   Most z lat pięćdziesiątych nie „zepsuł się" do stu ton.
 *   On po prostu nigdy nie był na sto ton,
 * — ⚠⚠ ŻE W KUCHNI MYLI SIĘ TE DWA POWODY WYMIANY
 *   I DLATEGO TRZYMA SIĘ RZECZY ZA DŁUGO:
 *   (1) RZECZ SIĘ ZUŻYŁA — to jest powód do naprawy
 *       albo do kupna takiej samej,
 *   (2) ZMIENIŁO SIĘ TO, DO CZEGO JEST UŻYWANA —
 *       i wtedy nawet sprawna rzecz przestała pasować,
 * — ⚠⚠ ŻE DRUGI POWÓD JEST TRUDNIEJSZY DO ZAUWAŻENIA,
 *   BO NIC SIĘ NIE PSUJE. Wszystko działa, tylko za każdym
 *   razem jest odrobinę za ciasno, za wolno albo za mało
 *   — i człowiek myśli, że to on źle robi,
 * — ⚠⚠ ŻE PYTANIE ROZSTRZYGAJĄCE JEST JEDNO: czy to,
 *   co przez to przechodzi, jest dziś takie samo jak wtedy,
 *   gdy to kupowałam. Liczba osób, częstotliwość, rodzaj
 *   gotowania — jeśli się zmieniły, to nie sprzęt zawiódł,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRZYKŁADU SPRZĘTU
 *   DO WYMIANY. To byłaby porada zakupowa,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: WYMIANA JEST DROŻSZA
 *   NIŻ NAPRAWA I CZĘSTO NIEPOTRZEBNA. Rzecz, która działa
 *   i pasuje, nie wymaga wymiany tylko dlatego, że jest
 *   stara, i nie będę udawać, że wymaga,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to samo pytanie dotyczy tego
 *   urządzenia i zadaję je na prezentacji sama.
 *   ⚠⚠ JEŚLI U KOGOŚ NIC SIĘ NIE ZMIENIŁO — ta sama liczba
 *   osób, to samo tempo, te same dania — TO NIE MA POWODU
 *   NIC WYMIENIAĆ. MÓWIĘ TO WPROST, mimo że sprzedaję.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO STOPNIOWEGO KOMPLETOWANIA WYPOSAŻENIA —
 *   kąt zajęty (Brześć Kujawski: „wymiana po jednej
 *   sztuce"). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, ŻE KUCHNIA POWSTAJE PRZEZ DOKŁADANIE PRZEZ
 *   LATA; TUTAJ o JEDNĄ DECYZJĘ: naprawiać czy wymienić.
 *   Ani jednego zdania o kompletowaniu wyposażenia.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO WYMIANY Z SĄSIADEM — kąt zajęty (Maków
 *   Mazowiecki).
 * — ⚠⚠ ZERO SPRZĘTU JEDNOZADANIOWEGO I DECYZJI O ZAKUPIE
 *   NOWEGO — kąt zajęty (Łasin).
 * — ⚠⚠ ZERO GARNKÓW ODZIEDZICZONYCH — kąt zajęty
 *   (Krośniewice).
 * — ⚠⚠ ZERO ZAPRZESTANIA UŻYWANIA I RZECZY NIEUŻYWANYCH
 *   — kąt zajęty (Nowogard).
 * — ⚠⚠ ZERO NAJWĘŻSZEGO MIEJSCA I NOŚNOŚCI JAKO LIMITU
 *   OBIADU — kąt zajęty (Darłowo). Tam chodzi o TO,
 *   CO BLOKUJE JEDEN WIECZÓR; TUTAJ o CYKL ŻYCIA RZECZY.
 * — ⚠ ZERO SKALOWANIA PORCJI — kąt zajęty (Świdwin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEGO PRZYKŁADU SPRZĘTU DO WYMIANY I ŻADNEJ
 *   PORADY ZAKUPOWEJ. Podaję WYŁĄCZNIE pytanie
 *   rozstrzygające. TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI ANI
 *   O BEZPIECZEŃSTWIE UŻYWANIA ZUŻYTEGO SPRZĘTU.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SZPITALA WOJSKOWEGO Z LAT 1949–1950
 *   I ZERO WOJNY DOMOWEJ W GRECJI.
 * — ⚠⚠⚠ ZERO NALOTÓW Z 1944 R. I ZERO GARNIZONU.
 * — ⚠⚠ ZERO FORTU SZWEDZKIEGO Z XVII W. — obiekt
 *   militarny.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO SPADKU LICZBY LUDNOŚCI (−24,7 % w latach
 *   2004–2024) — to najwyższy spadek w tej fali.
 *   TWARDA GRANICA.
 * — ⚠ ZERO ŹRÓDEŁ SOLANKOWYCH I WĄTKU UZDROWISKOWEGO —
 *   prowadzi do twierdzeń zdrowotnych, a temat wód
 *   został już wykorzystany przy Połczynie-Zdroju.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ powierzchni miasta — źródła podają
 *   6,5 km² albo 4,93 km².
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ nazwy mostu nadanej w 2021 r.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ PRZYKŁADÓW SPRZĘTU DO WYMIANY.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Dziwnów leży na wyspie Wolin, u ujścia cieśniny
 *   Dziwny do Bałtyku, w powiecie kamieńskim; jest
 *   siedzibą gminy miejsko-wiejskiej i liczy
 *   2 282 mieszkańców (GUS, 31.12.2024), a cała gmina
 *   3 523 osoby na 39,5 km²; poza miastem leżą w niej
 *   trzy miejscowości: Dziwnówek, Międzywodzie i Łukęcin,
 * — pierwsza wzmianka o osadzie pochodzi z 1243 r.,
 *   status osiedla typu miejskiego Dziwnów uzyskał
 *   w 1958 r., a prawa miejskie dopiero 1 stycznia 2004 —
 *   jest więc jednym z najmłodszych miast w Polsce,
 * — na tutejszej przeprawie stały po kolei trzy mosty
 *   zwodzone: przedwojenny, drewniany, o szerokości
 *   od czterech do sześciu metrów; zbudowany w latach
 *   pięćdziesiątych, z częścią drewnianą długą na około
 *   sto osiemdziesiąt metrów i żelbetowo-drewnianą
 *   na szesnaście, szeroki na sześć metrów, o nośności
 *   dziesięciu ton i prześwicie osiem na dziesięć metrów
 *   dla przepływających jednostek; oraz obecny, oddany
 *   po przebudowie zakończonej w 1993 r. — szeroki
 *   na siedem metrów, z chodnikami po półtora metra,
 *   o nośności stu ton i w pełni zautomatyzowanym
 *   podnoszeniu.
 */
export const DZIWNOW: CityContent = {
  slug: "dziwnow",
  h1: "Thermomix Dziwnów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dziwnów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Dziwnowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dziwnów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dziwnowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dziwnowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do pozostałych miejscowości w gminie.",

  highlights: highlightyStandardowe("Dziwnów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Most z lat pięćdziesiątych nie zepsuł się do stu ton. On nigdy nie był na sto ton.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dziwnowie – jak wygląda prezentacja?",
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
      id: "naprawic-czy-wymienic",
      heading: "Trzy mosty na jednej przeprawie",
      paragraphs: [
        "Przez cieśninę Dziwnę w tym samym miejscu przerzucano po kolei trzy mosty.",
        "Pierwszy, przedwojenny, był drewniany i miał od czterech do sześciu metrów szerokości. Drugi, z lat pięćdziesiątych, miał część drewnianą długą na sto osiemdziesiąt metrów, sześć metrów szerokości i nośność dziesięciu ton; przepływające jednostki mieściły się w prześwicie osiem na dziesięć metrów. Trzeci, oddany po przebudowie zakończonej w 1993 roku, ma siedem metrów szerokości plus chodniki po półtora metra, nośność stu ton i w pełni zautomatyzowane podnoszenie.",
        "Dziesięciokrotny wzrost nośności na tej samej przeprawie.",
        "Zwróćcie uwagę na to, co właściwie zadecydowało o wymianie. Nie stan mostu. Most z lat pięćdziesiątych nie „zepsuł się” do stu ton — on po prostu nigdy nie był na sto ton. Zmieniło się to, co miało przez niego przejeżdżać.",
        "W kuchni te dwa powody wymiany myli się notorycznie i właśnie dlatego trzyma się rzeczy o wiele za długo.",
        "Pierwszy powód: rzecz się zużyła. To jest sytuacja jasna — naprawia się albo kupuje taką samą i tyle.",
        "Drugi powód: zmieniło się to, do czego rzecz jest używana. I wtedy nawet sprawny, dobry, drogi sprzęt przestał pasować, choć nic mu nie dolega.",
        "Ten drugi powód jest znacznie trudniejszy do zauważenia, bo nie ma żadnego sygnału. Nic się nie psuje, nic nie przecieka, nic nie hałasuje. Wszystko działa — tylko za każdym razem jest odrobinę za ciasno, odrobinę za wolno albo odrobinę za mało. A człowiek myśli wtedy, że to on coś źle robi.",
        "Pytanie rozstrzygające jest jedno i zajmuje chwilę: czy to, co przez to przechodzi, jest dziś takie samo jak wtedy, kiedy to kupowałam. Liczba osób przy stole. Częstotliwość. Rodzaj gotowania. Jeśli którakolwiek z tych rzeczy się zmieniła, to sprzęt nie zawiódł — po prostu przeprawa dostała inny ruch.",
        "Uczciwie o drugiej stronie, bo to ważniejsze niż cała reszta: wymiana jest droższa od naprawy i bardzo często niepotrzebna. Rzecz, która działa i pasuje, nie wymaga wymiany tylko dlatego, że jest stara — i nie będę udawać, że wymaga.",
        "To samo pytanie dotyczy zresztą tego urządzenia i zadaję je na prezentacji sama, zanim ktokolwiek zapyta o cenę.",
        "Jeśli u kogoś nic się nie zmieniło — ta sama liczba osób, to samo tempo, te same dania, które wychodzą dobrze — to nie ma powodu niczego wymieniać. Mówię to wprost, mimo że sprzedaję, bo urządzenie kupione bez powodu stoi potem na blacie jako wyrzut sumienia, a to nie jest transakcja, na której mi zależy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7-vs-tm6", label: "TM7 czy TM6" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dziwnowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co się u Was zmieniło od czasu, gdy urządzaliście kuchnię — liczba osób, godziny, sposób gotowania. To jest właściwe pytanie, a nie to, co jest nowego w sprzęcie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dziwnowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dziwnowskiej rodziny",
      paragraphs: [
        "Dziwnów leży na wyspie Wolin, u ujścia cieśniny Dziwny do Bałtyku, w powiecie kamieńskim, i jest siedzibą gminy miejsko-wiejskiej: samo miasto liczy ponad dwa tysiące dwustu mieszkańców, a cała gmina ponad trzy i pół tysiąca osób na trzydziestu dziewięciu kilometrach kwadratowych. Poza miastem leżą w niej trzy miejscowości: Dziwnówek, Międzywodzie i Łukęcin. Pierwsza wzmianka o osadzie pochodzi z 1243 roku, status osiedla typu miejskiego Dziwnów uzyskał w 1958, a prawa miejskie dopiero pierwszego stycznia 2004 — jest więc jednym z najmłodszych miast w Polsce. Na tutejszej przeprawie stały po kolei trzy mosty zwodzone: przedwojenny, drewniany, o szerokości od czterech do sześciu metrów; zbudowany w latach pięćdziesiątych, z częścią drewnianą długą na sto osiemdziesiąt metrów i żelbetowo-drewnianą na szesnaście, szeroki na sześć metrów, o nośności dziesięciu ton i prześwicie osiem na dziesięć metrów dla przepływających jednostek; oraz obecny, oddany po przebudowie zakończonej w 1993 roku — szeroki na siedem metrów, z chodnikami po półtora metra, o nośności stu ton i w pełni zautomatyzowanym podnoszeniu.",
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

  districtsHeading: "Do których części Dziwnowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach cieśniny — a także do Dziwnówka, Międzywodzia i Łukęcina. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Dziwnów też przyjadę",
  nearbyParagraphs: [
    "Kamień Pomorski jest siedem kilometrów stąd, Międzyzdroje i Wolin niewiele dalej, a Świnoujście około czterdziestu — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kamień Pomorski", "Międzyzdroje", "Wolin", "Świnoujście"],

  about: blokOMnie("do Dziwnowa", "w Dziwnowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dziwnowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta oraz do Dziwnówka, Międzywodzia i Łukęcina. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwa doprecyzowania, bo obie pomyłki są częste: Dziwnów i Dziwnówek to dwie różne miejscowości w tej samej gminie, a miasto Wolin i Międzyzdroje to osobne gminy na tej samej wyspie — tam też przyjeżdżam.",
    },
    ...faqWspolne("w Dziwnowie"),
    {
      question: "Kiedy sprzęt w kuchni warto naprawić, a kiedy wymienić?",
      answer:
        "To zależy od tego, który z dwóch powodów zachodzi. Jeśli rzecz się zużyła — naprawia się albo kupuje taką samą. Jeśli zmieniło się to, do czego jest używana, to nawet sprawny sprzęt przestał pasować, choć nic mu nie dolega. Ten drugi powód jest trudniejszy do zauważenia, bo nic się nie psuje — po prostu za każdym razem jest odrobinę za ciasno albo za wolno. Pytanie rozstrzygające: czy to, co przez to przechodzi, jest dziś takie samo jak wtedy, gdy to kupowaliście.",
    },
    {
      question: "Czy każdemu opłaca się wymienić sprzęt na Thermomix?",
      answer:
        "Nie. Jeśli u Was nic się nie zmieniło — ta sama liczba osób, to samo tempo, te same dania, które wychodzą dobrze — to nie ma powodu niczego wymieniać. Mówię to wprost, mimo że sprzedaję: urządzenie kupione bez powodu stoi potem na blacie jako wyrzut sumienia, a to nie jest transakcja, na której mi zależy.",
    },
  ],

  geo: { lat: 54.0278, lng: 14.7646 },
};
