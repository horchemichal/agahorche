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
 * RECZ — powiat choszczeński, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 640 mieszkańców (GUS 31.12.2024), 12,4 km²,
 *   gęstość 212,9 os./km².
 * CAŁA GMINA: 4 940 osób, 180,4 km².
 * ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ recz.pl podaje 2 978 mieszkańców — DANE Z 2012 R.,
 *   ODRZUCONE. Obowiązuje GUS 31.12.2024.
 * ⚠ GEO: 53,2622 / 15,5417.
 *
 * ⚠⚠ HOMONIM: Recz ≠ RESKO (pow. łobeski, ta sama fala
 *   województwa!) ≠ RESZEL (warmińsko-mazurskie)
 *   ≠ rzeczownik pospolity „rzecz".
 *   ⚠ ROZGRANICZAM W FAQ — podaję powiat choszczeński.
 *
 * ⚠ ODMIANA: „w RECZU", „do RECZA".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — ale forma „w Reczu"
 *   występuje w nazwach urzędowych (parafia, zabytek).
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Recza".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1269 — pierwsza wzmianka nazwy „Recz" w dokumencie.
 * — ⚠⚠ PRAWA MIEJSKIE: 1285 (pomeranica) ALBO „po 1284"
 *   (recz.pl). PISZĘ „W LATACH OSIEMDZIESIĄTYCH XIII W."
 *   I NIE WYBIERAM DATY DZIENNEJ.
 * — ⚠⚠ NADANIA GRODU JOANNITOM (1237) I FUNDACJI
 *   KLASZTORU CYSTEREK (1296) NIE UŻYWAM —
 *   wątek wyznaniowy.
 * — 1895 — linia kolejowa Stargard–Kalisz ze stacją.
 * — ⚠⚠⚠ RDZEŃ KĄTA — MURY OBRONNE:
 *   PEŁNY OBWÓD OKOŁO 1 470 M (potwierdzone dwoma
 *   źródłami: medievalheritage.eu i polska-org.pl),
 *   GRUBOŚĆ U PODSTAWY 1,10–1,20 M (dwa niezależne
 *   źródła), WYSOKOŚĆ PIERWOTNA 5 M, po podwyższeniu
 *   w 2. poł. XIV w. 6–7 M,
 *   CO NAJMNIEJ 28 BASZT, DWIE BRAMY GŁÓWNE
 *   (Drawska od wschodu, Choszczeńska od zachodu)
 *   I DWIE FURTY (północna i południowa).
 *   ⚠⚠ ZARYS MIASTA — ELIPSA OKOŁO 600 × 280 M.
 *   ⚠⚠ RÓŻNICA WYSOKOŚCI RYNEK ↔ BRAMY: 10 M.
 *   ⚠⚠⚠ TO JEST CAŁY KĄT: MUR (1 470 M) JEST DŁUŻSZY
 *   NIŻ CAŁY OBWÓD ZABUDOWY, KTÓRĄ OGRADZA.
 *   ⚠ Materiał: kamień polny (eratyki), prawdopodobnie
 *   z nadbudową ceglaną. Budowa od 1. poł. XIV w.
 *   ⚠ Dziś zachowany prawie cały obwód poza odcinkiem
 *   południowo-zachodnim i południowym; większość
 *   obniżona do 1–4 m.
 *   ⚠⚠ BASZTY DRAWIEŃSKIEJ (15 M) NIE PODAJĘ —
 *   źródła datują ją na XVI w. ALBO XIV w.
 * — Kościół ceglany, gotycki, 1352–1355; wieża z pocz.
 *   XV w.; przebudowa w 1859 r.
 *   ⚠ OPISUJĘ GO WYŁĄCZNIE JAKO BUDOWLĘ, SKRÓTOWO.
 *   ⚠⚠ ZERO WNĘTRZA: ołtarza, ambony, krucyfiksu,
 *   chrzcielnicy i epitafiów NIE WPROWADZAM.
 *   ⚠⚠ TRZECH DZWONÓW (1520, 1567, 1593) NIE UŻYWAM
 *   JAKO KĄTA — prowadzi w obszar zajęty (Zamość).
 *   W ogóle ich nie wymieniam.
 * — ⚠⚠ POŻARÓW (1637, 1686, 1689, 1703) NIE UŻYWAM —
 *   pierwszy ma kontekst wojenny, a trzy pożary
 *   w siedemnaście lat prowadziłyby do Węgorzyna
 *   (ta sama fala). POMIJAM CAŁY WĄTEK.
 * — Rzeka Ina przepływa przez miasto; źródło na południe
 *   od wsi Słutowo. Szlak kajakowy.
 * — Recz leży na Pojezierzu Choszczeńskim.
 * — Choszczno ok. 14 km, Szczecin ok. 75 km.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gminie Recz NIE JEST
 *   przypisany żaden wpis. Z POWIATU choszczeńskiego
 *   pochodzą „Miody Pojezierza Choszczeńskiego"
 *   (30.10.2013) i „Choszczeńska strucla z makiem"
 *   (29.04.2014) — ⚠⚠ TO SĄ WPISY POWIATOWE, NIE GMINNE.
 *   ⚠⚠⚠ NIE UŻYWAM ICH. NIE SUGERUJĘ, ŻE COKOLWIEK
 *   Z LISTY POCHODZI Z RECZA.
 * ⚠ HERB: recz.pl opisuje trzy szare wieże o czterech
 *   oknach i czarnych dachach — ŹRÓDŁO POŚREDNIE,
 *   blazon urzędowy NIEPOTWIERDZONY. NIE OPISUJĘ HERBU.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: GRANICA WIĘKSZA NIŻ TO, CO OGRADZA — o tym, że
 * system wokół gotowania potrafi urosnąć bardziej
 * niż samo gotowanie.
 * Kąt od murów Recza: 1 470 metrów muru o grubości ponad
 * metra wokół miasta o wymiarach mniej więcej
 * sześćset na dwieście osiemdziesiąt metrów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że mur Recza ma około 1 470 m obwodu, 1,10–1,20 m
 *   grubości u podstawy, pierwotnie 5 m wysokości,
 *   potem 6–7, i co najmniej 28 baszt,
 * — że ogradza obszar o zarysie mniej więcej
 *   600 × 280 m — to jest rdzeń zestawienia,
 * — ⚠⚠ ŻE ZBUDOWANIE TEGO MURU BYŁO WIĘKSZYM
 *   PRZEDSIĘWZIĘCIEM NIŻ ZBUDOWANIE POŁOWY TEGO,
 *   CO STAŁO W ŚRODKU. Kamień polny, ponad kilometr,
 *   dwadzieścia osiem baszt, dwie bramy i dwie furty —
 *   i to wszystko stawiane etapami przez dziesiątki lat,
 * — ⚠⚠ ŻE W KUCHNIACH ZDARZA SIĘ DOKŁADNIE TO SAMO:
 *   obsługa systemu przerasta to, co system miał
 *   obsłużyć. Pojemniki na wszystko, etykiety,
 *   plan tygodnia, lista zakupów w trzech miejscach,
 *   a pod spodem trzy dania, które i tak robimy,
 * — ⚠⚠ ŻE TEST JEST PROSTY I NIEPRZYJEMNY: policzyć,
 *   ile czasu w tygodniu zajmuje samo gotowanie,
 *   a ile wszystko dookoła niego. Jeśli druga liczba
 *   jest większa, mur urósł ponad miasto,
 * — ⚠⚠ ŻE TO NIE JEST ARGUMENT PRZECIWKO PORZĄDKOWI.
 *   Mur w Reczu miał sens i stoi do dziś prawie cały.
 *   Chodzi o proporcję, nie o rezygnację,
 * — ⚠⚠ ŻE NAJCZĘSTSZA PRZYCZYNA ROZROSTU JEST TAKA SAMA
 *   JAK W MIEŚCIE: system dokładano etapami, każdy
 *   element z osobna miał sens, a całości nikt nigdy
 *   nie zsumował,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie likwiduje
 *   systemu i samo też jest elementem, który trzeba
 *   obsłużyć — umyć, odłożyć, znaleźć mu miejsce.
 *   Zmniejsza za to liczbę kroków w środku: mniej
 *   naczyń, mniej etapów, mniej przekładania. MÓWIĘ
 *   WPROST, że to jest korzyść po stronie miasta,
 *   a nie po stronie muru.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAPROJEKTOWANIA NARAZ KONTRA DOKŁADANIA
 *   PO KOLEI — kąt zajęty (Zamość). ⚠⚠ Etapowość budowy
 *   muru aż się o to prosi. WYMIENIAM ETAPOWOŚĆ TYLKO
 *   JAKO PRZYCZYNĘ NIEZAUWAŻONEGO ROZROSTU, ani razu
 *   jako sposób urządzania kuchni. TWARDA GRANICA.
 * — ⚠⚠ ZERO GRUBOŚCI DNA I NACZYŃ — kąt zajęty (Resko).
 *   ⚠⚠ Grubość muru 1,10–1,20 m podaję WYŁĄCZNIE jako
 *   miarę nakładu pracy, nigdy jako metaforę naczynia.
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 *   ⚠⚠ Choszczno jest CZTERNAŚCIE KILOMETRÓW STĄD
 *   i jest siedzibą powiatu — tym uważniej.
 *   Elipsę 600 × 280 m podaję jako wymiar miasta,
 *   nigdy jako kształt czegokolwiek w kuchni.
 * — ⚠⚠ ZERO ODSTĘPU MIĘDZY BASZTAMI — kąt zajęty
 *   (Kowalewo Pomorskie). Nie dzielę 1 470 przez 28.
 * — ⚠⚠ ZERO MURU NA PLANIE KOŁA I CYKLU BEZ KOŃCA —
 *   kąt zajęty (Maszewo). Nie piszę o obiegu.
 * — ⚠⚠ ZERO WZMACNIANIA TAM, GDZIE OBCIĄŻENIE — kąt
 *   zajęty (Lipiany). Podwyższenie murów z 5 do 6–7 m
 *   podaję jako fakt, bez morału o rozkładzie wysiłku.
 * — ⚠⚠ ZERO PODRĘCZNOŚCI I SCHOWANIA — kąt zajęty
 *   (Płoty).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów, ta sama fala). Tam chodzi o TO, KTÓRYCH
 *   RZECZY SIĘ UŻYWA; TUTAJ o TO, ILE ROBOTY JEST WOKÓŁ
 *   SAMEJ CZYNNOŚCI. Ani słowa o szafkach i sprzęcie
 *   w sekcji kątowej.
 * — ⚠ ZERO BAŁAGANU WOKÓŁ URZĄDZENIA — kąt zajęty
 *   (Koluszki).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO SYSTEMU NA TYDZIEŃ — podaję
 *   WYŁĄCZNIE pytanie sprawdzające.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO — opisuję je
 *   jako budowlę o wymiarach i nakładzie pracy.
 *   Ani słowa o oblężeniu, wrogu czy obronie.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — joannitów, cysterek
 *   i wyposażenia kościoła nie wprowadzam.
 * — ⚠⚠ ZERO POŻARÓW — pierwszy z 1637 r. ma kontekst
 *   wojny trzydziestoletniej.
 * — ⚠ ZERO PRODUKTÓW Z LISTY — wpisy są powiatowe.
 * — ⚠ ZERO HERBU — blazon niepotwierdzony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: recz.pl w zakresie liczby
 *   ludności (dane z 2012 r.), infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich — 1285
 *   albo „po 1284".
 * — NIE PODAJĘ wysokości Baszty Drawieńskiej — źródła
 *   datują ją sprzecznie.
 * — NIE DZIELĘ obwodu przez liczbę baszt.
 * — NIE PODAJĘ nazw ani parametrów jezior w gminie —
 *   nieustalone.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE SUGERUJĘ, że produkt z Listy pochodzi z Recza.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO SYSTEMU NA TYDZIEŃ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Recz leży w powiecie choszczeńskim na Pojezierzu
 *   Choszczeńskim, około czternastu kilometrów od
 *   Choszczna i siedemdziesięciu pięciu od Szczecina;
 *   przez miasto płynie Ina,
 * — miasto liczy 2 640 mieszkańców (GUS, 31.12.2024)
 *   na 12,4 km², a cała gmina 4 940 osób na 180,4 km²,
 * — nazwa „Recz" pojawiła się w dokumencie w 1269 r.,
 *   a prawa miejskie miasto otrzymało w latach
 *   osiemdziesiątych XIII w.,
 * — mury obronne mają około 1 470 m pełnego obwodu,
 *   1,10–1,20 m grubości u podstawy, pierwotnie 5 m
 *   wysokości, a po podwyższeniu w drugiej połowie
 *   XIV w. 6–7 m; było w nich co najmniej 28 baszt,
 *   dwie bramy główne — Drawska od wschodu
 *   i Choszczeńska od zachodu — oraz dwie furty;
 *   zbudowano je z kamienia polnego, a ogradzają obszar
 *   o zarysie mniej więcej 600 × 280 m; różnica
 *   wysokości między rynkiem a bramami wynosi 10 m,
 * — dziś zachowany jest prawie cały obwód poza odcinkiem
 *   południowo-zachodnim i południowym, przy czym
 *   większość muru obniżona jest do 1–4 m,
 * — ceglany, gotycki kościół zbudowano w latach
 *   1352–1355, jego wieża pochodzi z początku XV w.,
 *   a przebudowano go w 1859 r.,
 * — linię kolejową Stargard–Kalisz ze stacją w Reczu
 *   otwarto w 1895 r.
 */
export const RECZ: CityContent = {
  slug: "recz",
  h1: "Thermomix Recz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Recz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Reczu (powiat choszczeński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Recz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Reczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Recza w powiecie choszczeńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Recz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mur ma tysiąc czterysta siedemdziesiąt metrów. Miasto w środku — sześćset na dwieście osiemdziesiąt.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Reczu – jak wygląda prezentacja?",
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
      id: "granica-i-srodek",
      heading: "Tysiąc czterysta siedemdziesiąt metrów wokół sześciuset",
      paragraphs: [
        "Recz ma jeden z najlepiej zachowanych murów w tej części województwa. Około tysiąca czterystu siedemdziesięciu metrów pełnego obwodu, grubość u podstawy metr dziesięć do metra dwadzieścia, pierwotnie pięć metrów wysokości, po podwyższeniu w drugiej połowie czternastego wieku sześć do siedmiu. Co najmniej dwadzieścia osiem baszt, dwie bramy główne i dwie furty. Wszystko z kamienia polnego.",
        "A obszar, który ten mur ogradza, ma w zarysie mniej więcej sześćset na dwieście osiemdziesiąt metrów.",
        "Innymi słowy: postawienie granicy było większym przedsięwzięciem niż postawienie sporej części tego, co stało w środku. Ponad kilometr kamiennego muru grubszego niż metr, dwadzieścia osiem baszt, cztery przejścia — wokół obszaru, który da się przejść w dziesięć minut.",
        "W kuchniach zdarza się dokładnie to samo i prawie nikt tego nie liczy.",
        "Pojemniki na wszystko. Etykiety. Plan tygodnia. Lista zakupów w telefonie, druga na lodówce, trzecia w głowie. Aplikacja do przepisów, do których się nie wraca. Segregatory, zapasy „na wszelki wypadek”, system rotacji tych zapasów. A pod tym wszystkim trzy dania, które i tak robimy najczęściej, i jedno, które robimy, kiedy nie ma czasu.",
        "Test jest prosty i trochę nieprzyjemny. Policz przez tydzień, ile czasu zajmuje samo gotowanie — stanie przy garnku, krojenie, mieszanie. A potem, ile zajmuje wszystko dookoła: planowanie, robienie list, przepakowywanie, szukanie, porządkowanie zapasów, wyrzucanie tego, co się przeterminowało. Jeśli druga liczba wychodzi większa, mur urósł ponad miasto.",
        "To nie jest argument przeciwko porządkowi. Mur w Reczu miał sens i stoi do dziś prawie w całości — a większość odcinków przetrwała siedem stuleci. Chodzi wyłącznie o proporcję.",
        "Warto też wiedzieć, skąd taki rozrost się bierze, bo przyczyna jest zawsze ta sama co w mieście: system dokładano po kawałku. Najpierw jedna rzecz, potem druga, każda z osobna sensowna, każda rozwiązująca prawdziwy problem. Nikt nigdy nie usiadł i nie zsumował całości — a gdyby zsumował, wyszłoby tysiąc czterysta siedemdziesiąt metrów wokół sześciuset.",
        "Na koniec o urządzeniu, uczciwie. Ono nie likwiduje systemu i samo też jest jednym z elementów, które trzeba obsłużyć: umyć, odstawić, znaleźć mu miejsce na blacie. Tego nie ukrywam.",
        "Zmniejsza za to liczbę kroków w środku. Mniej naczyń na jeden obiad, mniej etapów, mniej przekładania z miski do garnka i z garnka na patelnię. To jest korzyść po stronie miasta, nie po stronie muru — i tylko tak warto ją liczyć.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Reczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was zajmuje najwięcej czasu — samo gotowanie czy wszystko dookoła. Pod to dobiorę dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Reczu"),
    sekcjaRaty("w Reczu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Recza",
      paragraphs: [
        "Recz leży w powiecie choszczeńskim, na Pojezierzu Choszczeńskim, około czternastu kilometrów od Choszczna i siedemdziesięciu pięciu od Szczecina; przez miasto płynie Ina. Samo miasto liczy ponad dwa tysiące sześciuset mieszkańców (GUS, 31.12.2024) na dwunastu i czterech dziesiątych kilometra kwadratowego, a cała gmina blisko pięć tysięcy osób na stu osiemdziesięciu. Nazwa „Recz” pojawiła się w dokumencie w 1269 roku, a prawa miejskie miasto otrzymało w latach osiemdziesiątych trzynastego wieku. Mury obronne mają około tysiąca czterystu siedemdziesięciu metrów obwodu, metr dziesięć do metra dwadzieścia grubości u podstawy i co najmniej dwadzieścia osiem baszt; były w nich dwie bramy — Drawska od wschodu i Choszczeńska od zachodu — oraz dwie furty, a różnica wysokości między rynkiem a bramami wynosi dziesięć metrów. Do dziś zachował się prawie cały obwód, choć obniżony na większości odcinków. Ceglany, gotycki kościół zbudowano w latach 1352–1355, wieża pochodzi z początku piętnastego wieku, a przebudowa nastąpiła w 1859. Linię kolejową ze stacją w Reczu otwarto w 1895 roku.",
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

  districtsHeading: "Do których części Recza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w obrębie dawnego okręgu murów i poza nim — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Recz też przyjadę",
  nearbyParagraphs: [
    "Choszczno jest czternaście kilometrów stąd, Szczecin siedemdziesiąt pięć. Do Drawna, Kalisza Pomorskiego, Suchania, Dobrzan i Stargardu też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Choszczno", "Drawno", "Kalisz Pomorski", "Suchań", "Stargard"],

  about: blokOMnie("do Recza", "w Reczu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Recza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Recz w powiecie choszczeńskim — nie o Resko w powiecie łobeskim, które leży w tym samym województwie, ani o Reszel w warmińsko-mazurskiem. Przy umawianiu warto podać powiat.",
    },
    ...faqWspolne("w Reczu"),
    {
      question: "Jak sprawdzić, czy mój system na gotowanie nie jest za duży?",
      answer:
        "Policzyć przez tydzień dwie rzeczy osobno: ile czasu zajmuje samo gotowanie, a ile wszystko dookoła — planowanie, listy, przepakowywanie, szukanie, porządkowanie zapasów. Jeśli druga liczba jest większa, obsługa systemu przerosła to, co system miał obsłużyć. Mur w Reczu ma tysiąc czterysta siedemdziesiąt metrów wokół obszaru sześćset na dwieście osiemdziesiąt — i nikt tego nigdy nie zsumował, bo dokładano po kawałku.",
    },
    {
      question: "Czy Thermomix upraszcza kuchnię, czy dokłada kolejną rzecz?",
      answer:
        "Jedno i drugie, i nie ma sensu tego ukrywać. Jest kolejnym sprzętem, który trzeba umyć, odstawić i któremu trzeba znaleźć miejsce na blacie. Zmniejsza natomiast liczbę kroków przy samym gotowaniu: mniej naczyń na jeden obiad, mniej etapów, mniej przekładania. Czy to się opłaca, zależy od tego, ile u Was waży jedno, a ile drugie.",
    },
  ],

  geo: { lat: 53.2622, lng: 15.5417 },
};
