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
 * MIĘDZYBÓRZ — powiat oleśnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 299 mieszkańców (GUS 31.12.2024), 6,4 km²,
 *   gęstość 358,7 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 4 996 osób, 87,8 km², gęstość 57 os./km²
 *   [ZW — DOMYKA SIĘ. PODAJĘ].
 *   ⚠ Miasto to 46,0 % ludności gminy — najwyższy udział
 *   w tej fali. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE W GMINIE: 13.
 * WYSOKOŚĆ: 152–193 m n.p.m., Wzgórza Twardogórskie.
 *   ⚠ TWARDOGÓRA OPISANA W TYM CYKLU — nazwa wzgórz
 *   to geografia, NIE odniesienie do tamtego miasta.
 * ⚠ GEO: 51,396 / 17,666.
 *
 * ⚠⚠ ODMIANA — Ó→O:
 *   D. do MIĘDZYBORZA · Ms. w MIĘDZYBORZU ·
 *   N. Międzyborzem.
 *   ⚠⚠⚠ BŁĄD: „do Międzybórza", „w Międzybórzu".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: MIĘDZYBORSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW: MIĘDZYLESIE (pow. kłodzki) —
 *   OPISANE W TEJ SAMEJ FALI. INNE MIASTO, INNY POWIAT,
 *   INNY KĄT. ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1228 r., w formie Meczobor
 *     ⚠ [SP].
 *   — 1340 r. — osada targowa z zamkiem.
 *   — PONOWNA LOKACJA NA PRAWIE MAGDEBURSKIM:
 *     6 czerwca 1637 r., Henryk Wacław oleśnicki.
 *   — MURY: XIV w. ⚠ czyli starsze od praw z 1637 r.
 *     ⚠⚠ TEJ RÓŻNICY NIE ROBIĘ KĄTEM — figura
 *     „używane wcześniej, zapisane później" zajęta
 *     (Zawidów). PODAJĘ JAKO GOŁY FAKT.
 *   — NAZWY: Mechoborz → Meczebor (1376) →
 *     Medzibor (1637).
 *     ⚠⚠⚠ NAZWY NIEMIECKIEJ (1886) NIE UŻYWAM.
 *     ANI RAZU.
 *     ⚠⚠ CIĄGU NAZW NIE ROBIĘ KĄTEM — figura zajęta
 *     (Szklarska Poręba).
 *   — KOLEJ: 1909–10 r. ⚠⚠ WYŁĄCZNIE DATA W TLE.
 *   — SZEŚĆ STUDNI PUBLICZNYCH: koniec XIX w.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SPIS, KTÓRY SIĘ NIE SUMUJE:
 *   Spis majątku ziemskiego z 1937 r.:
 *     — OGÓŁEM: 990 ha,
 *     — grunty orne: 632,6 ha,
 *     — łąki: 63 ha,
 *     — lasy: 249,4 ha.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA:
 *   632,6 + 63 + 249,4 = 945,0. 990 − 945 = 45.
 *   CZTERDZIEŚCI PIĘĆ HEKTARÓW NIE MA ŻADNEJ KATEGORII.
 *   ⚠⚠⚠ [SP — JEDNO ŹRÓDŁO. PISZĘ TO W TEKŚCIE WPROST:
 *   „źródło jest jedno, więc mówię o tym ostrożniej"].
 *   ⚠⚠ NIE ZGADUJĘ, CO TO BYŁO. Nie wiem i tak piszę.
 *   ⚠⚠ NAZWISK WŁAŚCICIELI NIE PODAJĘ.
 *   ⚠⚠ TO JEST KĄT ZAREZERWOWANY DLA MIĘDZYBORZA —
 *   Węgliniec (ta sama fala) ma zakaz liczb leśnych
 *   właśnie z tego powodu.
 *
 * KĄT: CZTERDZIEŚCI PIĘĆ HEKTARÓW BEZ KATEGORII
 * — o tej części pracy w kuchni, która nie mieści się
 * w żadnej rubryce, więc nikt jej nie planuje i nikt
 * w niej nie pomaga. Kąt ze spisu majątku z 1937 r.:
 * kategorie dają 945 ha, a suma mówi 990.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że spis z 1937 r. podaje 990 ha ogółem, a kategorie
 *   — 632,6 ornych, 63 łąk i 249,4 lasów — dają 945,
 * — ŻE CZTERDZIEŚCI PIĘĆ HEKTARÓW ZOSTAJE POZA
 *   KATEGORIAMI. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE WIEM, CO TO BYŁO, i tego nie zgaduję,
 * — ⚠⚠ ŻE W KUCHNI JEST DOKŁADNIE TAKA RESZTA:
 *   wymyślenie, co ugotować, zajrzenie do lodówki,
 *   rozpakowanie zakupów, przetarcie blatu, ogarnięcie
 *   półki. Żadna z tych rzeczy nie jest „gotowaniem",
 * — ⚠⚠ ŻE WŁAŚNIE DLATEGO NIKT TEJ RESZTY NIE PLANUJE
 *   ANI NIE DZIELI — nie ma jej w rubrykach,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: kiedy plan się nie zgadza
 *   z rzeczywistością, nie szukaj błędu w kategoriach.
 *   Szukaj tego, co nie ma kategorii, i nazwij to,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem brakująca reszta
 *   to zwykły błąd pomiaru i nic się w niej nie kryje.
 *   W kuchni bywa tak samo — czasem to po prostu
 *   przerwa, i dobrze,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zdejmuje głównie
 *   pracę Z KATEGORII (mieszanie, pilnowanie, mycie
 *   kilku garnków), a prawie nic z reszty. MÓWIĘ
 *   WPROST: zakupy, wymyślanie i chowanie zostają
 *   po Waszej stronie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW — kąt
 *   zajęty (Polanica-Zdrój). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam policzono
 *   dobrze, tylko nie to, co się wydawało; tu policzono
 *   właściwą rzecz, a mimo to liczby się nie schodzą.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO STABILNEJ SUMY — kąt zajęty (Wąsosz,
 *   ta sama fala).
 * — ⚠⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna). Dlatego „jedno źródło" jest tu
 *   zastrzeżeniem, a nie tematem.
 * — ⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO NAZWISK WŁAŚCICIELI · ZERO
 *   POŻARÓW I POWODZI JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE ZGADUJĘ, czym było brakujące 45 ha.
 * — NIE TWIERDZĘ, że spis jest błędny — podaję, co
 *   w nim stoi, i mówię, że się nie sumuje.
 * — NIE PODAJĘ niemieckiej nazwy miasta.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Międzybórz leży w powiecie oleśnickim, na Wzgórzach
 *   Twardogórskich, na wysokości 152–193 m n.p.m.;
 *   miasto liczy 2 299 mieszkańców (GUS, 31.12.2024)
 *   na 6,4 km², czyli 358,7 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 4 996 osób
 *   na 87,8 km², czyli 57 osób na kilometr,
 * — gmina obejmuje trzynaście wsi,
 * — pierwsza wzmianka pochodzi z 1228 r. (Meczobor),
 *   w 1340 r. była tu osada targowa z zamkiem,
 *   a ponowną lokację na prawie magdeburskim nadał
 *   6 czerwca 1637 r. Henryk Wacław oleśnicki,
 * — mury miejskie pochodzą z XIV w., kolej dotarła
 *   w latach 1909–1910, a pod koniec XIX w. w mieście
 *   działało sześć studni publicznych,
 * — spis majątku ziemskiego z 1937 r. podaje 990 ha
 *   ogółem, w tym 632,6 ha gruntów ornych, 63 ha łąk
 *   i 249,4 ha lasów.
 */
export const MIEDZYBORZ: CityContent = {
  slug: "miedzyborz",
  h1: "Thermomix Międzybórz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Międzybórz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Międzyborzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Międzybórz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Międzyborzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Międzyborza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzynastu wsi w gminie.",

  highlights: highlightyStandardowe("Międzybórz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kategorie dają 945. Suma mówi 990.",
  },

  sections: [
    {
      id: "bez-kategorii",
      heading: "Czterdzieści pięć hektarów bez kategorii",
      paragraphs: [
        "W spisie majątku ziemskiego pod Międzyborzem z 1937 roku stoi: 990 hektarów ogółem. Niżej rozpisane kategorie — 632,6 hektara gruntów ornych, 63 hektary łąk, 249,4 hektara lasów.",
        "Razem 945.",
        "Czterdzieści pięć hektarów nie ma żadnej kategorii. Źródło jest jedno, więc mówię o tym ostrożniej niż o liczbach z GUS-u, i nie zamierzam zgadywać, co tam było. Interesuje mnie sama sytuacja: rzecz istnieje, jest w sumie, a nie mieści się w żadnej rubryce.",
        "W każdej kuchni jest dokładnie taka reszta i to ona odpowiada za większość zmęczenia.",
        "Wymyślenie, co w ogóle ugotować. Zajrzenie do lodówki, żeby sprawdzić, co jeszcze jest. Rozpakowanie zakupów. Przetarcie blatu po kimś innym. Ogarnięcie półki z przyprawami, bo nic nie można znaleźć. Dopisanie czegoś do listy w telefonie.",
        "Żadna z tych rzeczy nie jest „gotowaniem”. Nie da się ich wpisać do rubryki „obiad” ani do rubryki „zakupy”. Więc nie są planowane, nie są liczone i — co najgorsze — nie są dzielone między domowników, bo trudno poprosić o pomoc w czymś, co nie ma nazwy.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o liczeniu, które było poprawne, tylko dotyczyło czegoś innego, niż się wydawało. Tu jest inaczej — policzono właściwą rzecz, właściwą miarą, a liczby i tak się nie schodzą. Pierwsze jest pomyłką w pytaniu. Drugie jest dziurą w odpowiedzi.",
        "Ruch jest jeden. Kiedy plan tygodnia się nie zgadza z tym, jak tydzień faktycznie wygląda, nie szukaj błędu w kategoriach. Poszukaj tego, co nie ma kategorii, i nazwij to na głos. Samo nazwanie robi tu połowę roboty, bo rzecz nazwana da się wreszcie komuś oddać.",
        "Uczciwie o drugiej stronie: czasem brakująca reszta to zwykły błąd pomiaru i nic się w niej nie kryje. W kuchni bywa tak samo — część tej nieprzypisanej godziny to po prostu przerwa, stanie przy oknie z kubkiem. Nie każda niepoliczona minuta jest pracą i nie każdą trzeba odzyskiwać.",
        "I uczciwie o sprzęcie. Thermomix zdejmuje przede wszystkim pracę z kategorii: mieszanie, pilnowanie, stanie nad garnkiem, mycie kilku naczyń zamiast jednego. Z reszty zdejmuje niewiele. Wymyślanie, zakupy i chowanie zostają po Waszej stronie i tak będzie. Kto liczy, że urządzenie zdejmie z niego całą kuchnię, kupuje z niewłaściwym oczekiwaniem — wolę to powiedzieć teraz.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Międzyborzu – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Międzyborzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która część kuchennej roboty męczy Was najbardziej. Bardzo często okazuje się, że to nie samo gotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Międzyborzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Międzyborza",
      paragraphs: [
        "Międzybórz leży w powiecie oleśnickim, na Wzgórzach Twardogórskich, na wysokości od stu pięćdziesięciu dwóch do stu dziewięćdziesięciu trzech metrów nad poziomem morza. Samo miasto liczy 2 299 mieszkańców (GUS, 31.12.2024) na 6,4 kilometra kwadratowego, czyli trzysta pięćdziesiąt dziewięć osób na kilometr, a cała gmina miejsko-wiejska 4 996 osób na 87,8 kilometra, czyli pięćdziesiąt siedem osób na kilometr, i obejmuje trzynaście wsi. Pierwsza wzmianka pochodzi z 1228 roku, w formie Meczobor; w 1340 była tu osada targowa z zamkiem, a ponowną lokację na prawie magdeburskim nadał 6 czerwca 1637 roku Henryk Wacław oleśnicki. Mury miejskie pochodzą z czternastego wieku, kolej dotarła w latach 1909–1910, a pod koniec dziewiętnastego wieku działało w mieście sześć studni publicznych.",
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

  districtsHeading: "Do których części Międzyborza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzynastu wsi w gminie. Wszędzie bez dopłaty.",
    "Gmina jest niewielka — niecałe dziewięćdziesiąt kilometrów kwadratowych — i prawie połowa jej mieszkańców mieszka w samym mieście. Przy umawianiu wystarczy adres i nazwa miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Międzybórz też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Sycowa, Twardogóry, Oleśnicy, Milicza i Bierutowa — wszędzie bezpłatnie, tak samo jak w samym Międzyborzu.",
  ],
  nearbyTowns: ["Syców", "Twardogóra", "Oleśnica", "Milicz", "Bierutów"],

  about: blokOMnie("do Międzyborza", "w Międzyborzu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Międzyborza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzynastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Międzyborza” i „w Międzyborzu”, bez „ó” w środku. I przy szukaniu łatwo trafić na Międzylesie w powiecie kłodzkim — to zupełnie inne miasto.",
    },
    ...faqWspolne("w Międzyborzu"),
    {
      question: "Gotowanie zajmuje mi więcej czasu, niż wynika z planu. Gdzie on ucieka?",
      answer:
        "Najczęściej w to, co nie ma kategorii. W spisie majątku pod Międzyborzem z 1937 roku suma wynosi 990 hektarów, a rozpisane kategorie dają 945 — czterdzieści pięć hektarów zostaje poza rubrykami. W kuchni tą resztą jest wymyślanie, co ugotować, zaglądanie do lodówki, rozpakowywanie zakupów i ogarnianie półek. To nie jest „gotowanie”, więc nikt tego nie planuje ani nie dzieli. Pierwszy krok to nazwać te czynności — dopiero nazwane da się komuś oddać.",
    },
    {
      question: "Czy Thermomix zdejmie ze mnie całą kuchnię?",
      answer:
        "Nie i nie chcę tego obiecywać. Zdejmuje głównie tę pracę, która ma nazwę: mieszanie, pilnowanie, stanie nad garnkiem, mycie kilku naczyń zamiast jednego. Wymyślanie posiłków, zakupy i chowanie zostają po Waszej stronie. Kto kupuje z oczekiwaniem, że kuchnia zacznie działać sama, zwykle bywa rozczarowany — i lepiej to wiedzieć przed zakupem niż po.",
    },
  ],

  geo: { lat: 51.396, lng: 17.666 },
};
