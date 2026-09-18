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
 * SŁAWNO — powiat sławieński, woj. zachodniopomorskie,
 * nad Wieprzą. ⚠⚠⚠ GMINA MIEJSKA, siedziba powiatu.
 * MIASTO: 11 725 mieszkańców (GUS 31.12.2024), 15,8 km²,
 * gęstość 740,7 os./km².
 *
 * ⚠⚠⚠ DRUGA W TEJ FALI PUŁAPKA PODWÓJNEJ JEDNOSTKI
 *   (po Darłowie, a wcześniej po Świdwinie):
 *   ISTNIEJE ODRĘBNA GMINA WIEJSKA SŁAWNO:
 *   8 289 mieszkańców (GUS 31.12.2024), 284,4 km²,
 *   22 sołectwa. OTACZA MIASTO — miasto jest w niej
 *   enklawą, tak jak Świdwin.
 *   ⚠⚠ 11 725 TO MIASTO, 8 289 TO GMINA WIEJSKA.
 *   NIE SUMOWAĆ, NIE MYLIĆ. NIE PISZĘ „CAŁA GMINA MA…".
 * ⚠ GEO: 54,3626 / 16,6784.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI, potwierdzone w PWN.
 *   D. SŁAWNA, Ms. W SŁAWNIE, przym. SŁAWIEŃSKI
 *   (osobne hasło PWN — NIE „sławnowski", NIE „sławny").
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niepotwierdzona
 *   w PWN.
 * ⚠⚠⚠ HOMONIM POTRÓJNY — NAJTRUDNIEJSZY W SERWISIE:
 *   (1) SŁAWNO w woj. ŁÓDZKIM — gmina wiejska w powiecie
 *       opoczyńskim, nie miasto,
 *   (2) SŁAWNO w POWIECIE SZCZECINECKIM — wieś W TYM SAMYM
 *       WOJEWÓDZTWIE. To największe ryzyko pomyłki,
 *   (3) przymiotnik „sławieński" bywa mylony ze „sławny".
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1190–1238 — Sławno stolicą niewielkiego księstwa.
 * — ⚠⚠⚠ RDZEŃ KĄTA, CZĘŚĆ PIERWSZA:
 *   22 MAJA 1317 — LOKACJA NA PRAWIE LUBECKIM
 *   przez braci Święców (Jan, Piotr, Wawrzyniec).
 *   ⚠⚠ 1317–1325 — OŚMIOLETNIA ULGA PODATKOWA
 *   dla rozwijającego się miasta. Konkretny, z góry
 *   wyznaczony okres, w którym wymagania były mniejsze.
 * — MIASTO LOKACYJNE: KSZTAŁT OWALNY, DŁUŻSZA ŚREDNICA
 *   OKOŁO 400 METRÓW.
 * — XIV w. — mury z kamienia i cegły, TRZY BRAMY,
 *   ulica Przymurna. ⚠ WYMIARÓW MURÓW NIE USTALONO.
 * — RATUSZ BUDOWANY TRZYKROTNIE: pierwszy wzmiankowany
 *   w 1409 r., drugi w latach 1759–1768, trzeci
 *   w latach 1905–1907.
 *   ⚠⚠ TO JEST DRUGA NOGA KĄTA.
 * — KOLEJ W CZTERECH KIERUNKACH, W CZTERECH RÓŻNYCH
 *   MOMENTACH: lata 60. XIX w. — Szczecin i Gdańsk;
 *   1878 — Darłowo i Korzybie; 1884 — Bytów;
 *   1911 — Ustka.
 * — 1896 — rzeźnia miejska; 1898 — gazownia;
 *   1905 — mleczarnia, największa w regionie.
 *   ⚠ RZEŹNI NIE UŻYWAM W TREŚCI.
 * — 1934 — 18 ZAKŁADÓW PRZEMYSŁOWYCH.
 *   ⚠⚠ SZCZEGÓŁOWEGO ROZBICIA NIE UŻYWAM — „spis
 *   zakładów i proporcje między nimi" to kąt zajęty
 *   (Górzno). Podaję wyłącznie liczbę zbiorczą.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla miasta, gminy wiejskiej ani powiatu
 *   sławieńskiego. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: OSIEM LAT ULGI — czyli okres, w którym wolno
 * gotować gorzej, i dlaczego warto go sobie wyznaczyć
 * z góry.
 * Kąt od przywileju z 22 maja 1317 r.: miasto dostało
 * osiem lat zwolnienia z danin. Nie dlatego, że nie było
 * w stanie ich płacić — dlatego, że na początku wszystko
 * kosztuje więcej. Drugą nogą jest ratusz budowany trzy
 * razy: za pierwszym razem nikt nie wiedział, że będą
 * jeszcze dwa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 22 maja 1317 r. Sławno zostało lokowane na prawie
 *   lubeckim i dostało ośmioletnią ulgę podatkową
 *   na lata 1317–1325,
 * — ŻE ULGA BYŁA WYZNACZONA Z GÓRY I MIAŁA KONIEC —
 *   to jest rdzeń. Nie „zobaczymy, jak pójdzie", tylko
 *   osiem lat, po których obowiązywały normalne zasady,
 * — ⚠⚠ ŻE W KUCHNI NIKT SOBIE TAKIEGO OKRESU NIE DAJE
 *   I STĄD BIERZE SIĘ WIĘKSZOŚĆ ZNIECHĘCENIA. Od nowego
 *   dania, nowego sprzętu albo nowego rozkładu tygodnia
 *   oczekujemy dobrego wyniku od pierwszego razu,
 * — ⚠⚠ ŻE RADA JEST JEDNOZDANIOWA I DA SIĘ JĄ WYKONAĆ
 *   DZIŚ: wyznaczyć sobie z góry liczbę podejść,
 *   po których dopiero ocenia się rzecz. Trzy razy,
 *   pięć razy — liczba jest mniej ważna niż to, że jest
 *   ustalona ZANIM się zacznie,
 * — ⚠⚠ ŻE RATUSZ W SŁAWNIE BUDOWANO TRZY RAZY — przed
 *   1409, w latach 1759–1768 i 1905–1907 — i że za
 *   pierwszym razem nikt nie zakładał, że będą jeszcze
 *   dwa. Rzeczy trwałe też powstają w podejściach,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ULGA MA MIEĆ KONIEC.
 *   Okres próbny bez końca to nie okres próbny, tylko
 *   sposób, żeby nigdy nie ocenić. Po wyznaczonym czasie
 *   trzeba sobie uczciwie powiedzieć, czy rzecz zostaje,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TEN OKRES DOTYCZY TAKŻE
 *   URZĄDZENIA I MÓWIĘ TO PRZED ZAKUPEM. Pierwsze dania
 *   robi się wolniej niż bez niego, bo czyta się przepis
 *   i sprawdza, gdzie co jest. To nie jest wada sprzętu
 *   ani czyjaś wina — to jest ten sam mechanizm.
 *   ⚠⚠ NIE PODAJĘ, ILE TEN OKRES TRWA — nie wiem
 *   i nie będę zgadywać.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZNUDZENIA SIĘ SPRZĘTEM I ZAPAŁU PIERWSZEGO
 *   MIESIĄCA — kąt zajęty (Żyrardów). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. Tam chodzi o TO, CZY ZAPAŁ MINIE;
 *   TUTAJ o ŚWIADOME WYZNACZENIE SOBIE OKRESU NIŻSZYCH
 *   WYMAGAŃ NA START. Ani jednego zdania o tym, że coś
 *   się znudzi. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO PIERWSZEGO RAZU Z RZECZAMI NIEUŻYWANYMI —
 *   kąt zajęty (Nowogard, ta sama fala). Tam chodzi
 *   o RZECZY, KTÓRE STOJĄ NIEUŻYWANE; TUTAJ o TOLERANCJĘ
 *   DLA SŁABSZEGO WYNIKU NA POCZĄTKU.
 * — ⚠⚠ ZERO PIERWSZEJ I DRUGIEJ PARTII — kąt zajęty
 *   (Barcin). Tam chodzi o JEDNO PIECZENIE; TUTAJ
 *   o TYGODNIE.
 * — ⚠⚠ ZERO PRZERWY W UŻYWANIU I POWROTU — kąt zajęty
 *   (Międzyrzecz).
 * — ⚠⚠ ZERO DANIA, KTÓRE NIE WYSZŁO — kąt zajęty
 *   (Barlinek, ta sama fala). Tam chodzi o JEDNO
 *   KONKRETNE DANIE I CO Z NIM ZROBIĆ; TUTAJ o OKRES.
 * — ⚠ ZERO SPISU ZAKŁADÓW I PROPORCJI — kąt zajęty
 *   (Górzno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNEJ LICZBY TYGODNI ANI MIESIĘCY „OKRESU
 *   PRÓBNEGO" — nie wiem, ile trwa, i nie zgaduję.
 *   Piszę o USTALENIU LICZBY PODEJŚĆ, którą wyznacza
 *   sam zainteresowany.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO MARCA 1945 I ZNISZCZENIA POŁOWY MIASTA.
 * — ⚠⚠⚠ ZERO DANYCH O SPOŁECZNOŚCI ŻYDOWSKIEJ MIASTA —
 *   źródła podają liczby z lat 1776, 1852 i 1900,
 *   co prowadzi wprost do wątku Zagłady. NIE WSPOMINAM.
 * — ⚠⚠ ZERO STACJONOWANIA HUZARÓW OD 1718 R. — wątek
 *   wojskowy.
 * — ⚠⚠ ZERO SPADKU LICZBY LUDNOŚCI — z 15 000 w 2002 r.
 *   do 11 725 dziś to około −22 %, jeden z najwyższych
 *   w całym serwisie. NIE PODAJĘ TEJ LICZBY I NIE
 *   ROZWIJAM PRZYCZYN. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠ ZERO RZEŹNI MIEJSKIEJ Z 1896 R.
 * — ⚠ ZERO WĄTKU FUNDACJI KOŚCIELNYCH — wyznaniowy.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ i NIE MYLĘ liczb miasta (11 725) i gminy
 *   wiejskiej Sławno (8 289).
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ wymiarów murów miejskich.
 * — NIE PODAJĘ rozbicia osiemnastu zakładów z 1934 r.
 * — NIE PRZYPISUJĘ Sławnu produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE PODAJĘ, ile powinien trwać okres na oswojenie się
 *   z czymkolwiek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sławno leży nad Wieprzą w powiecie sławieńskim,
 *   jest gminą miejską i siedzibą powiatu; liczy
 *   11 725 mieszkańców (GUS, 31.12.2024) na 15,8 km²,
 * — osobną jednostką jest gmina wiejska Sławno —
 *   8 289 osób, 284,4 km², 22 sołectwa — która otacza
 *   miasto,
 * — w latach 1190–1238 Sławno było stolicą niewielkiego
 *   księstwa, a 22 maja 1317 r. bracia Święcowie —
 *   Jan, Piotr i Wawrzyniec — lokowali je na prawie
 *   lubeckim; na lata 1317–1325 miasto dostało
 *   ośmioletnią ulgę podatkową,
 * — miasto lokacyjne miało kształt owalny o dłuższej
 *   średnicy około 400 metrów, a w XIV w. otoczono je
 *   murami z kamienia i cegły z trzema bramami,
 * — ratusz budowano trzykrotnie: pierwszy wzmiankowano
 *   w 1409 r., drugi powstał w latach 1759–1768,
 *   a trzeci w latach 1905–1907,
 * — połączenia kolejowe przychodziły etapami: w latach
 *   sześćdziesiątych XIX w. ze Szczecinem i Gdańskiem,
 *   w 1878 r. do Darłowa i Korzybia, w 1884 r. do Bytowa,
 *   a w 1911 r. do Ustki,
 * — gazownia powstała w 1898 r., mleczarnia — największa
 *   w regionie — w 1905 r., a w 1934 r. działało
 *   w mieście osiemnaście zakładów przemysłowych.
 */
export const SLAWNO: CityContent = {
  slug: "slawno",
  h1: "Thermomix Sławno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sławno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sławnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sławno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sławnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sławna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd nic nie kosztują — w mieście i w okolicznych wsiach.",

  highlights: highlightyStandardowe("Sławno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na początku wszystko kosztuje więcej. Warto wyznaczyć to sobie z góry.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sławnie – jak wygląda prezentacja?",
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
      id: "osiem-lat-ulgi",
      heading: "Osiem lat ulgi",
      paragraphs: [
        "Dwudziestego drugiego maja 1317 roku bracia Święcowie — Jan, Piotr i Wawrzyniec — lokowali Sławno na prawie lubeckim. Razem z lokacją miasto dostało coś jeszcze: ośmioletnią ulgę podatkową, na lata 1317–1325.",
        "Nie dlatego, że nie było w stanie płacić. Dlatego, że na początku wszystko kosztuje więcej — i ktoś to wtedy rozumiał.",
        "Najważniejsze jest jednak to, że ulga była wyznaczona z góry i miała koniec. Nie „zobaczymy, jak pójdzie”, tylko osiem lat, po których obowiązywały normalne zasady. Wiadomo było, na czym się stoi, z obu stron.",
        "W kuchni takiego okresu nikt sobie nie daje i stąd bierze się chyba połowa zniechęcenia, jakie znam z rozmów.",
        "Od nowego dania oczekujemy, że wyjdzie za pierwszym razem. Od nowego sprzętu — że od pierwszego dnia skróci gotowanie. Od nowego rozkładu tygodnia — że utrzyma się od poniedziałku. A kiedy tak się nie dzieje, wniosek pada natychmiast i jest zawsze ten sam: „to nie dla mnie”.",
        "Rada mieści się w jednym zdaniu i da się ją zastosować jeszcze dziś. Wyznacz sobie z góry liczbę podejść, po których dopiero ocenisz rzecz. Trzy razy, pięć razy — sama liczba jest mniej ważna niż to, że została ustalona zanim się zaczęło, a nie w trakcie, pod wpływem tego, jak wyszło.",
        "Sławno ma na to jeszcze jeden dowód, tyle że w kamieniu. Ratusz budowano tu trzy razy: pierwszy wzmiankowano w 1409 roku, drugi powstał w latach 1759–1768, trzeci w latach 1905–1907. Za pierwszym razem nikt nie zakładał, że będą jeszcze dwa. Rzeczy trwałe też powstają w podejściach — tylko że o tym pierwszym podejściu zwykle się potem nie pamięta.",
        "Teraz druga strona, bo sama ulga bez niej byłaby wymówką. Ulga ma mieć koniec. Okres próbny bez końca to nie jest okres próbny, tylko sposób, żeby nigdy niczego nie ocenić. Po wyznaczonym czasie trzeba sobie uczciwie powiedzieć, czy rzecz zostaje, czy nie — i jedna, i druga odpowiedź jest w porządku, byle padła.",
        "Na koniec o urządzeniu, bo dotyczy go dokładnie to samo i wolę powiedzieć to przed zakupem, a nie po.",
        "Pierwsze dania robi się nim wolniej niż bez niego. Czyta się przepis, sprawdza, gdzie co jest, zagląda częściej, niż trzeba. To nie jest wada sprzętu ani niczyja wina — to jest ten sam mechanizm, o którym mowa wyżej, i przechodzi się przez niego raz.",
        "Nie powiem Wam, ile to trwa, bo nie wiem i u każdego wygląda inaczej. Powiem co innego: warto sobie tę liczbę podejść ustalić przy zakupie, a nie w trzecim tygodniu, kiedy pierwsze rozczarowanie już jest na stole.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sławnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was próbowaliście i odpuściliście po jednym razie — właśnie to warto zrobić razem, bo drugie podejście z kimś obok wygląda inaczej niż pierwsze w pojedynkę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sławnie"),
    sekcjaRaty("w Sławnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla sławieńskiej rodziny",
      paragraphs: [
        "Sławno leży nad Wieprzą, jest siedzibą powiatu sławieńskiego i gminą miejską: liczy ponad jedenaście i pół tysiąca mieszkańców na piętnastu i ośmiu dziesiątych kilometra kwadratowego. Osobną jednostką jest gmina wiejska Sławno — ponad osiem tysięcy osób na dwustu osiemdziesięciu czterech kilometrach kwadratowych, w dwudziestu dwóch sołectwach — która otacza miasto ze wszystkich stron. W latach 1190–1238 Sławno było stolicą niewielkiego księstwa, a dwudziestego drugiego maja 1317 roku bracia Święcowie lokowali je na prawie lubeckim i przyznali mu ośmioletnią ulgę podatkową na lata 1317–1325. Miasto lokacyjne miało kształt owalny o dłuższej średnicy około czterystu metrów, a w czternastym wieku otoczono je murami z kamienia i cegły z trzema bramami. Ratusz budowano tu trzykrotnie: pierwszy wzmiankowano w 1409 roku, drugi powstał w latach 1759–1768, trzeci w latach 1905–1907. Połączenia kolejowe przychodziły etapami — w latach sześćdziesiątych dziewiętnastego wieku ze Szczecinem i Gdańskiem, w 1878 do Darłowa i Korzybia, w 1884 do Bytowa, w 1911 do Ustki. Gazownia powstała w 1898 roku, mleczarnia — największa w regionie — w 1905, a w 1934 działało w mieście osiemnaście zakładów przemysłowych.",
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

  districtsHeading: "Do których części Sławna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Wieprzy — a także do wsi w otaczającej je gminie wiejskiej Sławno, zebranych w dwudziestu dwóch sołectwach. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Sławno też przyjadę",
  nearbyParagraphs: [
    "Darłowo jest tuż obok, Koszalin nieco ponad czterdzieści kilometrów stąd, a Białogard i Kołobrzeg mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Darłowo", "Koszalin", "Białogard", "Kołobrzeg"],

  about: blokOMnie("do Sławna", "w Sławnie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sławna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Trzy doprecyzowania, bo ta nazwa myli częściej niż jakakolwiek inna: chodzi o Sławno nad Wieprzą, siedzibę powiatu sławieńskiego — nie o wieś Sławno w powiecie szczecineckim w tym samym województwie ani o gminę Sławno w łódzkiem. Samo miasto jest przy tym gminą miejską, odrębną od otaczającej je gminy wiejskiej Sławno; do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Sławnie"),
    {
      question: "Ile razy warto spróbować, zanim się odpuści?",
      answer:
        "Tyle, ile ustalisz — ale ustal to zanim zaczniesz, a nie w trakcie, pod wpływem tego, jak wyszło. Trzy podejścia, pięć podejść: sama liczba jest mniej ważna niż to, że jest wyznaczona z góry. Sławno dostało przy lokacji osiem lat ulgi podatkowej, bo na początku wszystko kosztuje więcej — i ta ulga miała z góry określony koniec, co jest równie ważne.",
    },
    {
      question: "Czy z Thermomixem gotuje się szybciej od pierwszego dnia?",
      answer:
        "Nie i wolę to powiedzieć przed zakupem. Pierwsze dania robi się nim wolniej niż bez niego — czyta się przepis, sprawdza, gdzie co jest, zagląda częściej, niż trzeba. To nie jest wada sprzętu, tylko koszt początku, przez który przechodzi się raz. Ile to potrwa u Was, nie wiem i nie będę zgadywać; warto natomiast ustalić sobie liczbę podejść przy zakupie, a nie w trzecim tygodniu.",
    },
  ],

  geo: { lat: 54.3626, lng: 16.6784 },
};
