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
 * BOGUSZÓW-GORCE — powiat wałbrzyski,
 * woj. dolnośląskie.
 * ⚠⚠⚠ TO GMINA MIEJSKA — GMINA = MIASTO 1:1.
 *   NIE ISTNIEJE „gmina Boguszów-Gorce" jako większa
 *   jednostka. 14 129 to JEDNOCZEŚNIE ludność miasta
 *   i gminy. NIE SZUKAM WIĘKSZEJ LICZBY.
 * MIASTO: 14 129 mieszkańców (GUS 31.12.2024), 27,0 km²,
 *   gęstość 522,9 os./km². TERYT 0221011.
 * ⚠ GEO: 50,7559 / 16,2044.
 * ⚠⚠ WYSOKOŚĆ MIASTA: ŹRÓDŁA SPRZECZNE —
 *   520–750 m n.p.m. (GUS) ALBO 450–650 m (strona UM).
 *   ⚠⚠⚠ NIE CYTUJĘ ŻADNEJ Z TYCH ROZPIĘTOŚCI.
 *   Podaję wyłącznie zweryfikowaną wysokość RYNKU.
 *
 * ⚠⚠ MIASTO MA NAJGĘŚCIEJ ROZSTAWIONYCH SĄSIADÓW:
 *   Wałbrzych 6,4 km, Szczawno-Zdrój 6,8, Mieroszów 10,1,
 *   Jedlina-Zdrój 10,7, Kamienna Góra 13,1,
 *   Świebodzice 14,0, Głuszyca 14,0, Lubawka 15,5,
 *   Bolków 20,0, Świdnica 21,7 — dziesięć miast
 *   w promieniu 22 km.
 *   ⚠ TO ODLEGŁOŚCI MIĘDZY SIEDZIBAMI — podaję „około".
 *
 * ⚠⚠⚠ ODMIANA — SPRAWDZONA W PORADNI PWN:
 *   D. BOGUSZOWA-GORCÓW (forma ogólnopolska, zalecana
 *   przez PWN) ALBO BOGUSZOWA-GORC (forma lokalna,
 *   respektowana przez PWN jako wariant regionalny).
 *   ⚠⚠ Ms. W BOGUSZOWIE-GORCACH — ⚠ PORADNIA PWN
 *   NIE PODAJE MIEJSCOWNIKA WPROST; forma
 *   zrekonstruowana, potwierdzona praktyką lokalną.
 *   ⚠⚠ ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   nieustalone. Piszę „dla rodziny z Boguszowa-Gorc".
 *   ⚠ W tekście używam formy lokalnej „Boguszowa-Gorc",
 *   bo strona jest kierowana do mieszkańców —
 *   PWN ją respektuje.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY:
 *   „GORCE" SAMO ≠ GORCE (pasmo górskie w Beskidach)
 *   ani GORCZAŃSKI PARK NARODOWY.
 *   ⚠⚠⚠ NIGDY NIE PISZĘ SAMEGO „GORCE" —
 *   ZAWSZE PEŁNA NAZWA. TWARDA GRANICA.
 *   ≠ BOGUSZ (wieś podkarpacka) ≠ BOGUSZYCE.
 *   ⚠⚠ KUŹNICE ŚWIDNICKIE (dzielnica) ≠ KUŹNICE
 *   (dzielnica Zakopanego) ≠ ŚWIDNICA (osobne miasto,
 *   21,7 km stąd) — POTRÓJNA KOLIZJA.
 *   ⚠ CHEŁMIEC (szczyt 851 m) ≠ CHEŁMIEC (gmina wiejska
 *   w powiecie nowosądeckim).
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠⚠ POWSTANIE MIASTA — TO TRZY CZŁONY, NIE DWA:
 *   1973 — połączenie BOGUSZOWA, GORC
 *   I KUŹNIC ŚWIDNICKICH.
 *   Prawa miejskie: BOGUSZÓW 1499 (Władysław
 *   Jagiellończyk — prawa miejskie i górnicze),
 *   GORCE 1962. RÓŻNICA 463 LATA.
 *   ⚠ Źródło alternatywne datuje Gorce mgliście
 *   na II poł. XIII w. — PISZĘ 1962 (twarda liczba).
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — morał „nie udawaj,
 *   że robisz tradycyjnie" prowadzi w obszar zajęty
 *   PIĘCIOKROTNIE (przepisy rodzinne / tradycja kontra
 *   dowód). Podaję jako fakt. TWARDA GRANICA.
 * — Pierwotna nazwa BOŻA GÓRA, wzmiankowana 1392.
 * — Górnictwo srebra i ołowiu od końca XIV w.
 *   ⚠ OPISUJĘ SKRÓTOWO, bez wypadków i katastrof.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — RYNEK NA 590 M N.P.M.:
 *   RYNEK I RATUSZ BOGUSZOWA-GORC LEŻĄ NA WYSOKOŚCI
 *   590 M N.P.M. — NAJWYŻEJ POŁOŻONE W POLSCE.
 *   ⚠ Ratusz zbudowany w latach 1723–1737
 *   (inne źródło podaje 1731 — mieści się w zakresie).
 *   ⚠ Drugie źródło podaje „ok. 600 m" — UŻYWAM 590 M,
 *   bo to źródło stawia tezę o rekordzie.
 *   TO JEST CAŁY KĄT.
 *   ⚠⚠⚠ NIE WYPROWADZAM Z TEGO MORAŁU O FIZYCE
 *   GOTOWANIA (temperatura wrzenia, czas gotowania) —
 *   to byłyby USTAWIENIA I CZASY URZĄDZENIA,
 *   których nie podaję. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * WZNIESIENIA I PRZYRODA — FAKTY UŻYTE:
 * — Chełmiec 851 m n.p.m.; Dzikowiec Wielki 836 m;
 *   Mniszek 704 m.
 * — Lasy 1 132 ha = około 42 % powierzchni gminy.
 * — Rzeki: Lesk (dopływ Bobru), Czerwony Strumień.
 * — Położenie między Górami Wałbrzyskimi i Kamiennymi.
 * — Trzy stacje kolejowe i jeden przystanek w granicach
 *   miasta.
 *   ⚠⚠⚠ TEZY, ŻE KTÓRAŚ ZE STACJI JEST NAJWYŻEJ
 *   POŁOŻONĄ W POLSCE, NIE POTWIERDZONO — źródła
 *   wskazują raz Zachód, raz Wschód. NIE PISZĘ O TYM.
 *   ⚠ ROKU OTWARCIA LINII NIE USTALONO.
 * — Wieża widokowa na Dzikowcu: wysokość całkowita
 *   38,5 m, taras na 32,5 m; budowa 2024–2025,
 *   otwarcie 15 lutego 2025. Obok starsza drewniana
 *   wieża z 2014 r. o wysokości 20 m.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „pierwsza wersja
 *   mała, potem rozbudowa" to obszar zajęty
 *   (Międzyzdroje: najmniejsza działająca wersja).
 *   Podaję jako fakt.
 *
 * PRZYWILEJE I ZABYTKI — FAKTY UŻYTE:
 * — 1499 — prawa miejskie i górnicze.
 * — 1603 — cesarz Rudolf II nadał przywileje targowe.
 *   ⚠ LICZBY JARMARKÓW NIE USTALONO.
 * — 1606 — status wolnego miasta górniczego.
 * — 1681 — odnowienie przywilejów górniczych.
 * — Kościół św. Trójcy: późnogotycki, 1535,
 *   przebudowany na barokowy w 1723.
 *   ⚠ NIE OPISUJĘ — wątek wyznaniowy. WYMIARÓW
 *   I DZWONÓW NIE USTALONO.
 * — Ratusz: 1723–1737, plac Odrodzenia 1.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gmina
 *   Boguszów-Gorce NIE MA ani jednego z 52 wpisów
 *   dolnośląskich.
 *   ⚠⚠⚠ NIE PISZĘ TEGO W TEKŚCIE. TEMAT NIE POJAWIA SIĘ.
 *   ⚠ „Twaróg sudecki" i „Kamiennogórski ser pleśniowy"
 *   to region wałbrzyski/sudecki, ale NIE ta gmina —
 *   NIE PRZYPISUJĘ.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE PODAJĘ — wymieniam
 *   wyłącznie trzy człony historyczne.
 *
 * KĄT: WARUNKI, KTÓRYCH SIĘ NIE CZUJE — o tym, że
 * własne warunki pracy są dla nas neutralne i przez to
 * niewidoczne, a ujawnia je dopiero porównanie.
 * Kąt od rynku Boguszowa-Gorc: leży najwyżej ze
 * wszystkich rynków w Polsce, pięćset dziewięćdziesiąt
 * metrów nad poziomem morza — i nikt, kto po nim chodzi
 * codziennie, tego nie czuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rynek i ratusz Boguszowa-Gorc leżą na wysokości
 *   590 m n.p.m. i są najwyżej położone w Polsce,
 *   a ratusz stoi tam od lat 1723–1737,
 * — ŻE DLA KOGOŚ, KTO CHODZI PO TYM RYNKU CODZIENNIE,
 *   TO NIE JEST ŻADNA WYSOKOŚĆ — to jest po prostu
 *   rynek. To jest rdzeń,
 * — ⚠⚠ ŻE TAK DZIAŁA KAŻDY WARUNEK, W KTÓRYM SIĘ
 *   PRACUJE CODZIENNIE: staje się neutralny, czyli
 *   niewidoczny. Nie porównujemy go z niczym, bo nie ma
 *   z czym,
 * — ⚠⚠ ŻE W KUCHNIACH WIDAĆ TO WYJĄTKOWO WYRAŹNIE
 *   I MOGĘ TO POWIEDZIEĆ Z PRAKTYKI, bo wchodzę
 *   do cudzych kuchni zawodowo. Ludzie latami znoszą
 *   rzeczy, których dawno dałoby się nie znosić —
 *   i nie dlatego, że im nie przeszkadzają, tylko
 *   dlatego, że przestali je zauważać,
 * — ⚠⚠ ŻE DZIAŁA TO TAKŻE W DRUGĄ STRONĘ I TO JEST
 *   WAŻNIEJSZE: tak samo niewidoczne stają się rzeczy
 *   dobre. Ktoś ma świetne światło nad blatem albo
 *   wystarczająco dużo miejsca i nie ma pojęcia,
 *   że to rzadkość,
 * — ⚠⚠ ŻE JEDYNY SPOSÓB, ŻEBY TO ZOBACZYĆ, TO
 *   PORÓWNANIE — ugotować raz u kogoś innego albo
 *   z kimś u siebie. Piętnaście minut cudzej kuchni
 *   mówi więcej niż rok własnej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE KAŻDY WARUNEK
 *   DA SIĘ ZMIENIĆ. Boguszów-Gorce nie zejdzie niżej.
 *   Chodzi o to, żeby wiedzieć, co jest warunkiem stałym,
 *   a co tylko przyzwyczajeniem — bo to drugie zwykle
 *   da się ruszyć od razu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmieni
 *   warunków, w których gotujecie — nie doda miejsca
 *   ani światła. MÓWIĘ TO WPROST. Prezentacja u Was
 *   w domu ma natomiast jedną zaletę, o której rzadko
 *   się myśli: ktoś z zewnątrz patrzy na Waszą kuchnię
 *   pierwszy raz — i widzi to, czego Wy już nie widzicie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO FIZYKI GOTOWANIA NA WYSOKOŚCI —
 *   temperatura wrzenia, czas gotowania i wyrastanie
 *   ciasta to USTAWIENIA I CZASY, których na żadnej
 *   stronie nie podaję. Wysokość 590 m jest tu faktem
 *   geograficznym i NICZYM WIĘCEJ.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO TRADYCJI KONTRA DOWODU I „NIE UDAWAJ,
 *   ŻE TRADYCYJNIE" — obszar zajęty PIĘCIOKROTNIE.
 *   Różnicy 463 lat NIE UŻYWAM jako morału.
 * — ⚠⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt
 *   zajęty (Międzyzdroje). Dwóch wież na Dzikowcu
 *   NIE UŻYWAM jako morału.
 * — ⚠⚠ ZERO PRZESTRZENI, GĘSTOŚCI I UKŁADU KUCHNI —
 *   obszar zajęty (Koluszki, Tychowo, Płoty).
 *   ⚠⚠ Wymieniam „miejsce" i „światło" WYŁĄCZNIE jako
 *   przykłady niezauważanych warunków, jednym zdaniem,
 *   i nie daję żadnej rady, co z nimi zrobić.
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec). ⚠ Tam chodzi o NIEWIDOCZNĄ PRACĘ;
 *   TUTAJ o NIEWIDOCZNE WARUNKI. Nie piszę o liczeniu
 *   czasu ani o docenianiu własnej roboty.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO NAZWY, KTÓRA NIE MÓWI, CO JEST W ŚRODKU —
 *   kąt zajęty (Borne Sulinowo, Człopa).
 *   Trzech członów nazwy NIE UŻYWAM jako morału.
 * — ⚠⚠ ZERO TEMPA I POŚPIECHU — kąt zajęty (Tuczno).
 * — ⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH RAD, CO ZMIENIĆ W KUCHNI — podaję
 *   WYŁĄCZNIE sposób, żeby to zobaczyć.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO WYPADKÓW I KATASTROF GÓRNICZYCH —
 *   górnictwo opisuję wyłącznie przez przywileje z datą.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (Gottesberg).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów nie opisuję.
 * — ⚠ ZERO WYSOKOŚCI MIASTA — źródła sprzeczne
 *   o 70–100 m.
 * — ⚠ ZERO TEZY O NAJWYŻSZEJ STACJI KOLEJOWEJ.
 * — ⚠ ZERO DEMOGRAFII I WYLUDNIANIA.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SZUKAM „gminy Boguszów-Gorce" jako większej
 *   jednostki — to gmina miejska, gmina = miasto.
 * — NIE PODAJĘ rozpiętości wysokości miasta — źródła
 *   podają 520–750 albo 450–650 m n.p.m.
 * — NIE PISZĘ, że któraś tutejsza stacja kolejowa jest
 *   najwyżej położona w Polsce — źródła sprzeczne.
 * — NIE PODAJĘ roku otwarcia linii kolejowej.
 * — NIE PODAJĘ liczby jarmarków z przywileju z 1603 r.
 * — NIE PODAJĘ wymiarów kościoła ani dzwonów.
 * — NIE MÓWIĘ NIC o wpływie wysokości na gotowanie.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Boguszów-Gorce leży w powiecie wałbrzyskim, między
 *   Górami Wałbrzyskimi i Kamiennymi; jest gminą
 *   miejską, więc liczba 14 129 mieszkańców
 *   (GUS, 31.12.2024) na 27,0 km² dotyczy jednocześnie
 *   miasta i gminy,
 * — miasto powstało w 1973 r. z połączenia trzech
 *   miejscowości: Boguszowa, Gorc i Kuźnic Świdnickich;
 *   Boguszów otrzymał prawa miejskie i górnicze
 *   w 1499 r. z nadania Władysława Jagiellończyka,
 *   a Gorce w 1962 r. — dzieli je 463 lata,
 * — pierwotna nazwa brzmiała Boża Góra i została
 *   odnotowana w 1392 r.; górnictwo srebra i ołowiu
 *   sięga tu końca XIV w. Miasto otrzymało przywileje
 *   targowe od cesarza Rudolfa II w 1603 r., status
 *   wolnego miasta górniczego w 1606 r., a w 1681 r.
 *   odnowiono jego przywileje górnicze,
 * — rynek i ratusz leżą na wysokości 590 m n.p.m.
 *   i są najwyżej położone w Polsce; barokowy ratusz
 *   przy placu Odrodzenia zbudowano w latach 1723–1737,
 * — najwyższe wzniesienia to Chełmiec (851 m n.p.m.),
 *   Dzikowiec Wielki (836 m) i Mniszek (704 m);
 *   lasy zajmują 1 132 ha, czyli około 42 % powierzchni
 *   gminy, a przez miasto płyną Lesk i Czerwony
 *   Strumień,
 * — na Dzikowcu stoi wieża widokowa o wysokości 38,5 m
 *   z tarasem na 32,5 m, zbudowana w latach 2024–2025
 *   i otwarta 15 lutego 2025 r.; obok zachowała się
 *   starsza, drewniana wieża z 2014 r. o wysokości 20 m,
 * — w granicach miasta działają trzy stacje kolejowe
 *   i jeden przystanek.
 */
export const BOGUSZOW_GORCE: CityContent = {
  slug: "boguszow-gorce",
  h1: "Thermomix Boguszów-Gorce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Boguszów-Gorce — prezentacja i cena",
  seoDescription:
    "Thermomix w Boguszowie-Gorcach (powiat wałbrzyski): bezpłatna prezentacja TM7 u Ciebie w domu. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Boguszów-Gorce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Boguszowie-Gorcach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Boguszowa-Gorc w powiecie wałbrzyskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich trzech części miasta.",

  highlights: highlightyStandardowe("Boguszów-Gorce"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najwyżej położony rynek w Polsce. I nikt, kto po nim chodzi, tego nie czuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Boguszowie-Gorcach – jak wygląda prezentacja?",
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
      id: "warunki-ktorych-nie-czuc",
      heading: "Pięćset dziewięćdziesiąt metrów, których nie widać",
      paragraphs: [
        "Rynek Boguszowa-Gorc leży na wysokości pięciuset dziewięćdziesięciu metrów nad poziomem morza. To najwyżej położony rynek w Polsce — i najwyżej położony ratusz, stojący tam od lat 1723–1737.",
        "Dla kogoś, kto chodzi po tym rynku codziennie, to nie jest żadna wysokość. To jest po prostu rynek. Idzie się po zakupy, wraca, i ani razu w życiu nie przychodzi do głowy, że akurat w tym miejscu jest się wyżej niż na jakimkolwiek innym rynku w kraju.",
        "Tak działa każdy warunek, w którym pracuje się codziennie. Staje się neutralny, a neutralny znaczy niewidoczny — bo nie ma go z czym porównać.",
        "W kuchniach widać to wyjątkowo wyraźnie i mówię to z praktyki, bo wchodzę do cudzych kuchni zawodowo.",
        "Ludzie latami znoszą rzeczy, których dawno dałoby się nie znosić. Nie dlatego, że im nie przeszkadzają — one przeszkadzają codziennie. Dlatego, że przestali je zauważać. Coś się otwiera w złą stronę, coś trzeba przełożyć, żeby dosięgnąć czegoś innego, i tak jest od siedmiu lat, więc to już nie jest problem, tylko po prostu kuchnia.",
        "Działa to zresztą tak samo w drugą stronę i to jest chyba ciekawsze.",
        "Równie niewidoczne stają się rzeczy dobre. Ktoś ma świetne światło nad blatem albo naprawdę dużo miejsca w miejscu, w którym pracuje — i nie ma pojęcia, że to rzadkość, bo nigdy nie stał przy cudzym blacie. Uważa, że tak po prostu jest.",
        "Jedyny sposób, żeby to zobaczyć, to porównanie. Ugotować raz u kogoś innego albo z kimś u siebie. Kwadrans w cudzej kuchni mówi o własnej więcej niż rok gotowania w niej samemu.",
        "Uczciwie o drugiej stronie: nie każdy warunek da się zmienić. Boguszów-Gorce nie zejdzie niżej i nikt tego nie oczekuje. Chodzi tylko o to, żeby rozróżniać: co jest warunkiem stałym, z którym się pracuje, a co jest przyzwyczajeniem. To drugie zwykle da się ruszyć od ręki, tylko najpierw trzeba je zobaczyć.",
        "Na koniec o urządzeniu, uczciwie i bez naciągania. Ono nie zmieni warunków, w których gotujecie — nie doda miejsca ani światła, nie przesunie gniazdka.",
        "Prezentacja u Was w domu ma za to jedną zaletę, o której rzadko się myśli, a która nie ma nic wspólnego ze sprzedażą: ktoś z zewnątrz staje przy Waszym blacie pierwszy raz. I widzi to, czego Wy już nie widzicie — w obie strony.",
      ],
      links: [
        { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja krok po kroku" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Boguszowie-Gorcach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Nie musisz nic przygotowywać ani sprzątać — wręcz przeciwnie. Kuchnia w zwykłym stanie mówi więcej niż kuchnia posprzątana pod gościa.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Boguszowie-Gorcach"),
    sekcjaRaty("w Boguszowie-Gorcach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Boguszowa-Gorc",
      paragraphs: [
        "Boguszów-Gorce leży w powiecie wałbrzyskim, między Górami Wałbrzyskimi i Kamiennymi. Jest gminą miejską, więc liczba ponad czternastu tysięcy mieszkańców (GUS, 31.12.2024) na dwudziestu siedmiu kilometrach kwadratowych dotyczy jednocześnie miasta i gminy. Miasto powstało w 1973 roku z połączenia trzech miejscowości: Boguszowa, Gorc i Kuźnic Świdnickich. Boguszów otrzymał prawa miejskie i górnicze w 1499 z nadania Władysława Jagiellończyka, a Gorce dopiero w 1962 — dzieli je czterysta sześćdziesiąt trzy lata. Pierwotna nazwa brzmiała Boża Góra i odnotowano ją w 1392 roku; górnictwo srebra i ołowiu sięga tu końca czternastego wieku. Przywileje targowe nadał miastu cesarz Rudolf II w 1603, status wolnego miasta górniczego przyszedł w 1606, a w 1681 odnowiono przywileje górnicze. Rynek i ratusz leżą na wysokości pięciuset dziewięćdziesięciu metrów nad poziomem morza i są najwyżej położone w Polsce — barokowy ratusz przy placu Odrodzenia zbudowano w latach 1723–1737. Najwyższe wzniesienia to Chełmiec, osiemset pięćdziesiąt jeden metrów, Dzikowiec Wielki — osiemset trzydzieści sześć, i Mniszek — siedemset cztery. Lasy zajmują tysiąc sto trzydzieści dwa hektary, czyli mniej więcej czterdzieści dwa procent powierzchni gminy. Na Dzikowcu stoi wieża widokowa wysoka na trzydzieści osiem i pół metra, z tarasem na trzydziestu dwóch i pół, otwarta 15 lutego 2025 roku; obok zachowała się starsza, drewniana z 2014 roku, dwudziestometrowa. W granicach miasta działają trzy stacje kolejowe i jeden przystanek.",
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

  districtsHeading: "Do których części Boguszowa-Gorc dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzech części miasta: Boguszowa, Gorc i Kuźnic Świdnickich. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Boguszów", "Gorce", "Kuźnice Świdnickie"],

  nearbyHeading: "Poza Boguszów-Gorce też przyjadę",
  nearbyParagraphs: [
    "Wałbrzych jest około sześciu kilometrów stąd, Szczawno-Zdrój prawie tyle samo, Mieroszów dziesięć, Jedlina-Zdrój jedenaście, a Kamienna Góra trzynaście. W promieniu dwudziestu kilku kilometrów jest dziesięć miast i do każdego dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Wałbrzych", "Szczawno-Zdrój", "Mieroszów", "Jedlina-Zdrój", "Kamienna Góra"],

  about: blokOMnie("do Boguszowa-Gorc", "w Boguszowie-Gorcach", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Boguszowa-Gorc bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich trzech części miasta — Boguszowa, Gorc i Kuźnic Świdnickich. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto używać pełnej nazwy: samo „Gorce” to pasmo górskie w Beskidach, a Kuźnice Świdnickie bywają mylone z Kuźnicami w Zakopanem i ze Świdnicą, która jest osobnym miastem ponad dwadzieścia kilometrów stąd.",
    },
    ...faqWspolne("w Boguszowie-Gorcach"),
    {
      question: "Czy muszę posprzątać kuchnię przed prezentacją?",
      answer:
        "Nie, i szczerze mówiąc lepiej, żeby była w zwykłym stanie. Kuchnia posprzątana pod gościa niewiele mówi. W zwykłej widać, gdzie naprawdę stoicie, po co sięgacie najczęściej i co Was uwiera od lat tak długo, że przestaliście to zauważać. To jest dla mnie najbardziej użyteczne piętnaście minut całego spotkania.",
    },
    {
      question: "Czy Thermomix poprawi warunki w mojej kuchni?",
      answer:
        "Nie doda miejsca, nie doda światła i nie przesunie gniazdka — nie będę udawać inaczej. Jedyne, co się przy tej okazji zmienia, to spojrzenie: ktoś z zewnątrz staje przy Waszym blacie pierwszy raz i widzi to, czego domownicy już nie widzą. W obie strony, bo tak samo niewidoczne stają się rzeczy dobre.",
    },
  ],

  geo: { lat: 50.7559, lng: 16.2044 },
};
