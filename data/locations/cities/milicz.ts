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
 * MILICZ — powiat milicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Milicz.
 * MIASTO: 10 669 mieszkańców (GUS 31.12.2024), 13,5 km²,
 *   gęstość 790,3 os./km². ⚠ LICZBA DOMYKA SIĘ
 *   Z GĘSTOŚCIĄ CO DO DZIESIĘTNEJ — sprawdzone.
 *   ⚠⚠ UWAGA: MIASTO GÓRA (ta sama fala!) WYŚWIETLA
 *   IDENTYCZNĄ LICZBĘ 10 669, ALE TAM NIE DOMYKA SIĘ
 *   Z GĘSTOŚCIĄ. To przypadkowa zbieżność, nie błąd.
 *   ⚠⚠⚠ NIE ZESTAWIAM TYCH DWÓCH MIAST W TEKŚCIE.
 * CAŁA GMINA: 22 934 osoby, 435,5 km², 49 wsi.
 *   ⚠ Kontrola: geoportal-krajowy 22 895 — zgodne co
 *   do rzędu. ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠⚠ MILICZ JEST JEDYNYM MIASTEM W TEJ FALI, KTÓRE
 *   STANOWI MNIEJSZOŚĆ SWOJEJ GMINY (46,5 %).
 *   ⚠⚠⚠ PODAJĘ JAKO FAKT, NIE ROBIĘ Z TEGO KĄTA —
 *   proporcje miasta do gminy to obszar ograny.
 * ⚠ GEO: 51,5167 / 17,2833.
 *
 * ⚠⚠ ODMIANA: D. MILICZA, Ms. W MILICZU.
 *   Przymiotnik: MILICKI (powiat milicki, Stawy Milickie,
 *   karp milicki — wszystkie formy urzędowe).
 *   ⚠⚠⚠ PUŁAPKA KOREKTORSKA: „MILICKI" ≠ „MILICYJNY".
 *   Autokorekta zamienia jedno na drugie. SPRAWDZIĆ
 *   OSOBNYM PRZEBIEGIEM PRZED PUBLIKACJĄ.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 * ⚠ KOLIZJE: Milcz (wielkopolskie), Milicze, Miliczna.
 *   ⚠ Nazwa bywa czytana jak nazwisko — przy pierwszym
 *   wystąpieniu piszę „miasto Milicz" albo
 *   „Milicz nad Baryczą".
 *   ⚠ Barycz to rzeka rodzaju żeńskiego (ta Barycz,
 *   nad Baryczą) — NIE MYLĘ z rodzajem nazwy miasta.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — Pierwsza wzmianka 1136; prawa miejskie 1245.
 *   ⚠⚠ ROK 1136 POJAWIA SIĘ DWUKROTNIE — jako pierwsza
 *   wzmianka o Miliczu i jako data założenia pierwszych
 *   stawów. ⚠⚠⚠ TO TA SAMA BULLA I TA SAMA DATA.
 *   NIE TRAKTUJĘ ICH JAKO DWÓCH NIEZALEŻNYCH FAKTÓW.
 * — ZAMEK: połowa XIV w.; przebudowa renesansowa 1494.
 *   ⚠ WYMIARÓW NIE USTALONO — nie podaję.
 * — PAŁAC: 1797–1798, projekt K. G. Geisslera, skrzydło
 *   południowe 1910.
 *   ⚠⚠ POWIERZCHNI PARKU (50 ha) I LICZBY GATUNKÓW (80)
 *   NIE PODAJĘ — jedno źródło.
 *   ⚠⚠⚠ „PIERWSZY NA ŚLĄSKU PARK W STYLU ANGIELSKIM" —
 *   NIE CYTUJĘ. Superlatyw z jednego źródła.
 * — KOLEJ: Oleśnica–Krotoszyn 1875; wąskotorowa 1894.
 * — ⚠⚠⚠ KOŚCIOŁA ŁASKI NIE UŻYWAM W OGÓLE.
 *   Powód podwójny: wątek wyznaniowy ORAZ fakt
 *   o skróceniu wieży o 12 m w 1783 r. — to byłby kąt
 *   „zdejmij górę zamiast podpierać", czyli odejmowanie,
 *   obszar zajęty (Strzegom). TWARDA GRANICA.
 *   ⚠⚠ Dodatkowo w tej samej fali piszę o Sycowie, gdzie
 *   wieżę PODNIESIONO o 12 m — zestawienie byłoby
 *   efektowne, ale w osobnych tekstach jest niewidoczne,
 *   a w jednym byłoby sztuczką. NIE ROBIĘ TEGO.
 *
 * STAWY — LICZBY:
 * — Rezerwat: 5 324,31 ha w pięciu kompleksach —
 *   Stawno 2 308,93; Ruda Sułowska 1 139,27;
 *   Radziądz 1 045,68; Potasznia 474,22; Jamnik 356,21.
 *   ⚠⚠ SUMA DOMYKA SIĘ CO DO SETNEJ — sprawdzone.
 *   ⚠ Drugie źródło podaje 5 298,15 ha — różnica 26 ha.
 *   PISZĘ „PONAD PIĘĆ TYSIĘCY TRZYSTA HEKTARÓW".
 *   ⚠⚠⚠ „NAJWIĘKSZY REZERWAT PRZYRODY W POLSCE" —
 *   NIE CYTUJĘ. ZERO SUPERLATYWÓW, konsekwentnie.
 *   ⚠⚠ ROKU UTWORZENIA REZERWATU NIE PODAJĘ —
 *   źródła podają 1963 albo 1973, różnica dziesięciu lat.
 * — Cały kompleks stawowy: około 7 700 ha, ponad
 *   285 stawów; największy staw Grabownica 283 ha
 *   (historycznie ponad 1 000 ha).
 * — Ptaki: 166 gatunków lęgowych.
 *   ⚠ LICZBY GATUNKÓW OGÓŁEM NIE PODAJĘ — źródła
 *   podają 276 albo ponad 300.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CIĄG PRODUKCYJNY:
 *   1914: 6 212 ha stawów → 300 ton ryb rocznie.
 *   DZIŚ: około 6 368 ha → 1 500–1 800 ton rocznie.
 *   POWIERZCHNIA WIĘKSZA O NIECAŁE 2,5 %.
 *   PRODUKCJA WIĘKSZA PIĘCIO- DO SZEŚCIOKROTNIE.
 *   ⚠ Kontekst: pierwsze stawy 2 352 ha (XII w.),
 *   szczyt pod koniec XVIII w. ponad 13 000 ha,
 *   redukcja w XIX w.
 *   ⚠⚠ ŹRÓDŁO: gov.pl (MRiRW) — karta produktu.
 *   METODA, KTÓRA ZA TYM STOI: trzyletni cykl hodowlany,
 *   roczniki trzymane w osobnych stawach, karmienie
 *   wyłącznie zbożami — pszenicą i kukurydzą; ryba
 *   handlowa waży 1 000–2 200 g.
 *
 * LISTA PRODUKTÓW TRADYCYJNYCH — GMINA MILICZ: TAK.
 *   „KARP MILICKI", wpis z 6 grudnia 2006 r., kategoria
 *   „produkty rybołówstwa", woj. dolnośląskie.
 *   ⚠⚠⚠ PODAJĘ WYŁĄCZNIE JAKO FAKT REJESTROWY.
 *   ZERO PORAD KULINARNYCH, ZERO PRZYRZĄDZANIA RYB,
 *   ZERO ŚWIĄT, ZERO ZWYCZAJÓW. TWARDA GRANICA.
 *   ⚠⚠ „CHLEBA GOGOŁOWICKIEGO" NIE PODAJĘ — nie ustalono,
 *   czy chodzi o Gogołowice w gminie Milicz, czy
 *   w gminie Lubin. NIE ZGADUJĘ.
 *   ⚠ „Syrop malinowy z Doliny Baryczy" i „wielokwiatowy
 *   miód z Doliny Baryczy" ODNOSZĄ SIĘ DO REGIONU
 *   OŚMIU GMIN, NIE DO GMINY MILICZ — nie przypisuję.
 *
 * KĄT: TA SAMA POWIERZCHNIA, PIĘĆ RAZY WIĘCEJ
 * — o tym, że kiedy czegoś brakuje, odruchem jest
 * dokupić, a odpowiedź prawie zawsze leży po stronie
 * metody. Kąt od milickich stawów: powierzchnia wzrosła
 * o dwa i pół procenta, produkcja pięciokrotnie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1914 r. milickie stawy miały 6 212 ha i dawały
 *   300 ton ryb rocznie, a dziś przy 6 368 ha dają
 *   od tysiąca pięciuset do tysiąca ośmiuset ton,
 * — że powierzchnia urosła o niecałe dwa i pół procenta,
 *   a wynik pięcio- do sześciokrotnie — CAŁA RÓŻNICA
 *   JEST W METODZIE, nie w zasobie,
 * — jaka to metoda: trzyletni cykl, roczniki w osobnych
 *   stawach, karmienie zbożami. ⚠ PODAJĘ JAKO OPIS
 *   HODOWLI, NIE JAKO ZALECENIE,
 * — ⚠⚠ ŻE W KUCHNI ODRUCH JEST ODWROTNY: kiedy coś nie
 *   wychodzi, dokupujemy. Nie starcza czasu — kupujemy
 *   sprzęt. Nie starcza miejsca — kupujemy pojemniki,
 * — ⚠⚠ ŻE PRAWIE ZAWSZE ZASÓB JEST TEN SAM, A ZMIENIA
 *   SIĘ TO, W JAKIEJ KOLEJNOŚCI SIĘ GO UŻYWA: co się
 *   zaczyna pierwsze, co może pracować bez nadzoru,
 *   co trzeba zrobić, zanim się zacznie,
 * — ⚠⚠ ŻE TO NIE JEST TEKST O URZĄDZANIU KUCHNI ANI
 *   O TYM, GDZIE CO POSTAWIĆ — ROZGRANICZAM WPROST,
 *   BO TO SĄSIEDNI, ZAJĘTY OBSZAR,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem zasobu naprawdę
 *   brakuje i żadna metoda tego nie nadrobi. Milickie
 *   stawy miały pod koniec XVIII w. ponad trzynaście
 *   tysięcy hektarów i zeszły do sześciu — metoda nie
 *   odwróciła tej redukcji, tylko z mniejszej
 *   powierzchni wyciągnęła więcej,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie to zakup, czyli
 *   dokładnie ten odruch, który podważam. MÓWIĘ TO WPROST.
 *   Ma sens wtedy, gdy zmienia kolejność pracy — a nie
 *   wtedy, gdy ma naprawić brak czasu samym swoim
 *   istnieniem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI I URZĄDZANIA KUCHNI —
 *   obszar zajęty WIELOKROTNIE (Koluszki, Tychowo,
 *   Cedynia, Nowe Warpno, Chojnów, Wołów).
 *   ⚠⚠⚠ TO JEST NAJBLIŻSZY OBSZAR I NAJWIĘKSZE RYZYKO
 *   TEGO TEKSTU. Piszę o METODZIE I KOLEJNOŚCI W CZASIE,
 *   nigdy o miejscu, półkach, strefach ani metrażu.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO GOTOWANIA NA ZAPAS I ODKŁADANIA PORCJI —
 *   kąt zajęty (Stopnica). Nie piszę o zamrażarce,
 *   o porcjach na później ani o gotowaniu raz na kilka dni.
 * — ⚠⚠⚠ ZERO ODEJMOWANIA I WYKREŚLANIA — kąt zajęty
 *   (Strzegom). Nie piszę o usuwaniu.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty (Polanów).
 * — ⚠⚠ ZERO FAZ I MIEJSC DLA RZECZY W RÓŻNYCH STADIACH —
 *   ociera się o dziesięć kawałków (Tychowo) i o pod ręką
 *   kontra schowane (Płoty). Roczniki w osobnych stawach
 *   podaję JAKO FAKT O HODOWLI, bez przenoszenia
 *   do kuchni. TWARDA GRANICA.
 * — ⚠⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia).
 *   Nie zestawiam wielkości rezerwatu z niczym.
 * — ⚠⚠ ZERO CZASU ODTWORZENIA — kąt pisany w tej samej
 *   fali (Góra).
 * — ⚠⚠ ZERO DOKŁADANIA PO OKRESIE UŻYWANIA — kąt pisany
 *   w tej samej fali (Syców).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PLANU TYGODNIA — podaję WYŁĄCZNIE
 *   zasadę: zanim dokupisz, sprawdź kolejność.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o karpiu NIE MÓWIĘ NIC o przechowywaniu,
 *   świeżości, obróbce ani przyrządzaniu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PRZYRZĄDZANIA RYB — karp milicki pojawia
 *   się WYŁĄCZNIE jako wpis na liście i jako produkt
 *   hodowlany o podanej wadze. ZERO KUCHNI WOKÓŁ NIEGO.
 * — ⚠⚠ ZERO WĄTKU ZAKONNEGO I WYZNANIOWEGO — nie
 *   wymieniam zakonu, który zakładał pierwsze stawy;
 *   piszę „stawy zakładano tu już w XII wieku".
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠ ZERO SUPERLATYWÓW O REZERWACIE I O PARKU.
 * — ⚠ ZERO DEMOGRAFII I WYLUDNIANIA.
 * — ⚠ ZERO OCHRONY PRZYRODY JAKO SPORU — rezerwat
 *   podaję jako powierzchnię i pięć kompleksów.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku utworzenia rezerwatu — źródła
 *   różnią się o dziesięć lat.
 * — NIE PODAJĘ liczby gatunków ptaków ogółem.
 * — NIE PODAJĘ powierzchni ani liczby gatunków w parku
 *   pałacowym — jedno źródło.
 * — NIE CYTUJĘ superlatywów o rezerwacie i o parku.
 * — NIE TRAKTUJĘ roku 1136 jako dwóch niezależnych faktów.
 * — NIE PODAJĘ wymiarów zamku ani danych ratusza —
 *   nie ustalono.
 * — NIE PRZYPISUJĘ Miliczowi „chleba gogołowickiego" —
 *   nie ustalono, o które Gogołowice chodzi.
 * — NIE PRZYPISUJĘ Miliczowi produktów „z Doliny Baryczy"
 *   — to oznaczenie ośmiu gmin.
 * — NIE PISZĘ nic o przyrządzaniu ryb.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE ZESTAWIAM Milicza z miastem Góra mimo identycznej
 *   liczby mieszkańców.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Milicz leży nad Baryczą i jest siedzibą powiatu
 *   milickiego; miasto liczy 10 669 mieszkańców
 *   (GUS, 31.12.2024) na 13,5 km², a cała gmina
 *   miejsko-wiejska 22 934 osoby na 435,5 km²,
 *   z czterdziestoma dziewięcioma wsiami; pierwsza
 *   wzmianka pochodzi z 1136 r., prawa miejskie
 *   z 1245,
 * — rezerwat obejmuje ponad 5 324 ha w pięciu
 *   kompleksach: Stawno 2 308,93 ha, Ruda Sułowska
 *   1 139,27, Radziądz 1 045,68, Potasznia 474,22
 *   i Jamnik 356,21; cały kompleks stawowy ma około
 *   7 700 ha i ponad 285 stawów, a największy z nich,
 *   Grabownica, 283 ha — historycznie ponad tysiąc;
 *   gniazduje tu 166 gatunków ptaków,
 * — stawy zakładano tu już w XII w., na 2 352 ha;
 *   pod koniec XVIII w. było ich ponad 13 000 ha,
 *   w XIX w. powierzchnię zredukowano; w 1914 r.
 *   na 6 212 ha uzyskiwano 300 ton ryb rocznie,
 *   a dziś na około 6 368 ha od 1 500 do 1 800 ton;
 *   hodowla opiera się na trzyletnim cyklu, roczniki
 *   trzyma się w osobnych stawach, a ryby karmi się
 *   wyłącznie pszenicą i kukurydzą; ryba handlowa waży
 *   od tysiąca do dwóch tysięcy dwustu gramów,
 * — karp milicki figuruje na Liście Produktów
 *   Tradycyjnych Ministerstwa Rolnictwa i Rozwoju Wsi
 *   od 6 grudnia 2006 r., w kategorii produktów
 *   rybołówstwa,
 * — zamek pochodzi z połowy XIV w. i został przebudowany
 *   w duchu renesansu w 1494 r.; pałac wzniesiono
 *   w latach 1797–1798 według projektu K. G. Geisslera,
 *   a skrzydło południowe dobudowano w 1910; kolej
 *   z Oleśnicy do Krotoszyna otwarto w 1875 r.,
 *   wąskotorową w 1894.
 */
export const MILICZ: CityContent = {
  slug: "milicz",
  h1: "Thermomix Milicz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Milicz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Miliczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Milicz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Miliczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Milicza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu dziewięciu wsi w gminie.",

  highlights: highlightyStandardowe("Milicz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Powierzchnia większa o dwa i pół procenta, wynik pięć razy większy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miliczu – jak wygląda prezentacja?",
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
      id: "ta-sama-powierzchnia",
      heading: "Ta sama powierzchnia, pięć razy więcej",
      paragraphs: [
        "W 1914 roku milickie stawy zajmowały sześć tysięcy dwieście dwanaście hektarów i dawały trzysta ton ryb rocznie.",
        "Dziś gospodaruje się tu na około sześciu tysiącach trzystu sześćdziesięciu ośmiu hektarach — i wychodzi z nich od tysiąca pięciuset do tysiąca ośmiuset ton.",
        "Powierzchnia urosła o niecałe dwa i pół procenta. Wynik — pięcio- do sześciokrotnie.",
        "Cała ta różnica jest w metodzie. W trzyletnim cyklu, w tym, że roczniki trzyma się w osobnych stawach, w karmieniu wyłącznie pszenicą i kukurydzą. Nikt nie dokupił ziemi — ziemia jest praktycznie ta sama, co sto lat temu.",
        "W kuchni odruch mamy dokładnie odwrotny.",
        "Kiedy coś nie wychodzi, dokupujemy. Nie starcza czasu — kupujemy sprzęt. Nie starcza pomysłów — kupujemy książkę. Czegoś brakuje — kupujemy to coś. Odruch jest tak silny, że rzadko sprawdzamy, czy problem w ogóle leżał po stronie zasobu.",
        "Bo prawie zawsze zasób jest ten sam, a zmienia się to, w jakiej kolejności się go używa.",
        "Które danie zaczyna się pierwsze, bo trwa najdłużej. Co może pracować bez nadzoru, a co wymaga stania obok. Co da się zrobić w czasie, gdy i tak czekasz na coś innego. Co trzeba mieć gotowe, zanim w ogóle się zacznie, żeby nie przerywać w połowie. To wszystko nie kosztuje ani złotówki i wciąż to pomijamy, bo nie da się tego kupić.",
        "Dopowiem od razu, bo temat jest blisko: nie piszę tu o urządzaniu kuchni. Nie o tym, gdzie co postawić, co mieć pod ręką i jak rozplanować blat. Piszę o kolejności w czasie — a to zupełnie inna rzecz niż układ w przestrzeni.",
        "Uczciwie o drugiej stronie, bo ta historia ma też ciemniejszą połowę: czasem zasobu naprawdę brakuje i żadna metoda tego nie nadrobi. Pod koniec osiemnastego wieku stawów było tu ponad trzynaście tysięcy hektarów i w dziewiętnastym wieku powierzchnię mocno zredukowano. Metoda tej redukcji nie odwróciła. Zrobiła co innego: z tego, co zostało, wyciągnęła pięć razy więcej niż sto lat temu.",
        "I na koniec o urządzeniu — czyli o zakupie, czyli dokładnie o tym odruchu, który tu podważam.",
        "Thermomix ma sens wtedy, gdy zmienia kolejność pracy: bo gotuje z ustawioną temperaturą i mieszaniem, więc przestaje wymagać stania obok, i można w tym czasie zrobić coś innego. Nie ma sensu wtedy, gdy ma naprawić brak czasu samym swoim istnieniem. Żaden sprzęt tego nie robi, mój też nie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miliczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której zwykle zaczynacie robić obiad i o której siadacie do stołu. Z tych dwóch godzin wynika więcej niż z listy sprzętu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miliczu"),
    sekcjaRaty("w Miliczu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Milicza",
      paragraphs: [
        "Milicz leży nad Baryczą i jest siedzibą powiatu milickiego. Samo miasto liczy 10 669 mieszkańców (GUS, 31.12.2024) na trzynastu i pół kilometra kwadratowego, a cała gmina miejsko-wiejska blisko dwadzieścia trzy tysiące osób na czterystu trzydziestu pięciu, z czterdziestoma dziewięcioma wsiami. Pierwsza wzmianka o mieście pochodzi z 1136 roku, prawa miejskie z 1245. Rezerwat obejmuje ponad pięć tysięcy trzysta hektarów w pięciu kompleksach: Stawno ma dwa tysiące trzysta osiem hektarów, Ruda Sułowska tysiąc sto trzydzieści dziewięć, Radziądz tysiąc czterdzieści pięć, Potasznia czterysta siedemdziesiąt cztery, a Jamnik trzysta pięćdziesiąt sześć. Cały kompleks stawowy ma około siedmiu tysięcy siedmiuset hektarów i ponad dwieście osiemdziesiąt pięć stawów; największy, Grabownica, liczy dziś dwieście osiemdziesiąt trzy hektary, a historycznie miał ponad tysiąc. Gniazduje tu sto sześćdziesiąt sześć gatunków ptaków. Stawy zakładano w tej okolicy już w dwunastym wieku, na dwóch tysiącach trzystu pięćdziesięciu dwóch hektarach; pod koniec osiemnastego było ich ponad trzynaście tysięcy, a w dziewiętnastym powierzchnię zredukowano. Karp milicki figuruje na Liście Produktów Tradycyjnych Ministerstwa Rolnictwa i Rozwoju Wsi od 6 grudnia 2006 roku, w kategorii produktów rybołówstwa. Zamek pochodzi z połowy czternastego wieku i został przebudowany w duchu renesansu w 1494, pałac wzniesiono w latach 1797–1798 według projektu K. G. Geisslera, a kolej z Oleśnicy do Krotoszyna otwarto w 1875 roku.",
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

  districtsHeading: "Do których części Milicza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu dziewięciu wsi w gminie — a gmina jest bardzo duża, ponad czterysta trzydzieści kilometrów kwadratowych. Do Rudy Sułowskiej i do najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Milicz też przyjadę",
  nearbyParagraphs: [
    "Krotoszyn jest stąd około dwudziestu trzech kilometrów, Trzebnica trzydzieści cztery, Oleśnica czterdzieści trzy, Syców czterdzieści siedem, a Wrocław sześćdziesiąt. Wszędzie dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Krotoszyn", "Trzebnica", "Oleśnica", "Syców", "Żmigród"],

  about: blokOMnie("do Milicza", "w Miliczu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Milicza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu dziewięciu wsi w gminie, łącznie z Rudą Sułowską. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Milicz nad Baryczą w powiecie milickim — nie o Milcz w Wielkopolsce. Gmina ma ponad czterysta trzydzieści kilometrów kwadratowych, więc przy umawianiu warto podać nazwę miejscowości, a nie tylko gminę.",
    },
    ...faqWspolne("w Miliczu"),
    {
      question: "Wiecznie brakuje mi czasu na gotowanie. Czy nowy sprzęt to rozwiąże?",
      answer:
        "Sam z siebie — nie, i nie będę twierdzić inaczej. W 1914 roku milickie stawy miały sześć tysięcy dwieście hektarów i dawały trzysta ton ryb rocznie; dziś przy powierzchni większej o niecałe dwa i pół procenta dają od tysiąca pięciuset do tysiąca ośmiuset. Cała różnica siedzi w metodzie, nie w zasobie. W kuchni zwykle jest tak samo: zanim dokupisz, warto sprawdzić kolejność — co zaczyna się pierwsze, co może pracować bez nadzoru, co trzeba mieć gotowe przed startem. Sprzęt ma sens wtedy, gdy tę kolejność zmienia.",
    },
    {
      question: "Co konkretnie zmienia Thermomix w kolejności gotowania?",
      answer:
        "To, że danie nie wymaga stania obok. Gotuje z ustawioną temperaturą i mieszaniem, więc czas, który wcześniej schodził na pilnowanie garnka, można wykorzystać na coś innego — i to jest realna zmiana w harmonogramie, a nie w wyposażeniu. Najłatwiej zobaczyć to na własnej kuchni: przyjeżdżam, gotujemy razem i można zmierzyć to zegarkiem.",
    },
  ],

  geo: { lat: 51.5167, lng: 17.2833 },
};
