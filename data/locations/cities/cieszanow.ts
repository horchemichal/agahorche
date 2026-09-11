import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * CIESZANÓW — miasto w powiecie lubaczowskim, 1 803 mieszkańców
 * (31.12.2024, GUS), cała gmina ok. 7 000. Lokowane w 1590 r. przez
 * Stanisława Cieszanowskiego na prawie magdeburskim; Jan III
 * Sobieski potwierdził prawa miejskie w 1681 r. i dodał do herbu
 * elementy wojskowe po potyczce z Tatarami w 1672 r. Lesistość
 * gminy 39,1%. W mieście odbywa się CIESZANÓW ROCK FESTIWAL —
 * edycja 2026 potwierdzona na 13–15 sierpnia.
 *
 * KĄT: ciasto naleśnikowe — i patelnia, której to urządzenie nie
 * zastąpi. Miasto liczące niecałe dwa tysiące mieszkańców, które
 * raz w roku organizuje trzydniowy festiwal rockowy, jest dobrym
 * miejscem na rzecz najzwyklejszą i robioną w każdym domu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ciasto naleśnikowe to jedna z nielicznych rzeczy, w których
 *   urządzenie wygrywa z ręką BEZ ZASTRZEŻEŃ: bez grudek,
 *   powtarzalna gęstość, bez roboty ramieniem,
 * — że smażenie zostaje w stu procentach po stronie człowieka
 *   i patelni — tu nie ma żadnego „dwie trzecie",
 * — że to jest najczystszy przykład podziału ról między sprzętem
 *   a kucharzem w całym serwisie,
 * — i uczciwie: kto naleśniki robi raz na kwartał, nie kupi
 *   urządzenia dla nich.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (mąka, gluten, jajka).
 * — ŻADNYCH PORAD O SUROWYCH JAJKACH — odesłanie do strony Dynowa,
 *   gdzie ta odmowa jest postawiona wprost.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ciasta ani gotowych naleśników.
 * — ŻADNEGO UDAWANIA, że urządzenie cokolwiek usmaży.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. To jest świadomie WĄSKA strona
 * i muszę pilnować trzech sąsiadów. „Pierogi" (Oleszyce) też dzielą
 * robotę między maszynę a ręce, ale tam sedno leży w LEPIENIU jako
 * czynności wspólnej i społecznej; tutaj sednem jest SAMO CIASTO
 * i to, że jest to rzadki przypadek czystej wygranej maszyny.
 * „Ziemniaki" (Nowa Sarzyna) i „jajka" (Dynów) wspominają brak
 * rumienienia jako JEDNO z kilku ograniczeń — tu jest ono osią,
 * ale opisane od strony PODZIAŁU PRACY, nie od strony braku.
 * „Makaron" (Radymno) dotyczy pojemności.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ DAT UTRATY ANI ODZYSKANIA PRAW MIEJSKICH. Jedno
 *   niepewne źródło podaje 1896 i 1934, ale rok 1934 to w tym
 *   regionie rok, w którym sąsiednie miasteczka prawa miejskie
 *   TRACIŁY (Zarszyn, Żołynia), a nie odzyskiwały — to wygląda
 *   na błąd. Żadne wiarygodne źródło tego nie potwierdza. Podaję
 *   tylko pewne: lokacja 1590 i potwierdzenie przez Sobieskiego
 *   w 1681 r.,
 * — NIE PODAJĘ DOKŁADNEJ DATY DZIENNEJ LOKACJI (krąży 14 maja
 *   1590) — pochodzi z jednego źródła blogowego,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. W mieście jest
 *   zarejestrowana spółka mięsna z 19-procentowym udziałem gminy,
 *   ale jej sprawozdania za 2021–2023 wykazują zerowe wyniki, co
 *   podważa realną skalę działania. Nie wymieniam jej z nazwy
 *   i nie opisuję jako pracodawcy,
 * — NIE PODAJĘ liczby mieszkańców gminy jako danych bieżących.
 *   Dostępne pochodzą z 2022 i 2019 r.; liczba dla MIASTA
 *   (1 803, 31.12.2024) jest pewna i tej używam,
 * — NIE PISZĘ o bezrobociu ani o zarobkach w mieście, mimo że dane
 *   są (10,0% bezrobocia, wynagrodzenie 82,7% średniej krajowej).
 *   Zestawianie tego ze sprzedażą drogiego sprzętu byłoby tanim
 *   chwytem w którąkolwiek stronę,
 * — NIE PODAJĘ nazwy tartaku ani nadleśnictwa. Lesistości 39,1%
 *   używam, bo jest z GUS,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Sprawdzona podkarpacka lista (248 pozycji) NIE ZAWIERA nic
 *   z Cieszanowa,
 * — FESTIWAL FOLKOWISKO odbywa się w GORAJCU — wsi w gminie
 *   Cieszanów, nie w samym mieście. To rozróżnienie jest w tekście,
 * — NIE wymyślam osiedli. Gmina ma 11 sołectw, samo miasto nie ma
 *   wykazu dzielnic. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja 1590 r. przez Stanisława Cieszanowskiego na prawie
 *   magdeburskim; pierwsze wzmianki o osadzie 1496 r.,
 * — Jan III Sobieski potwierdził prawa miejskie w 1681 r. i dodał
 *   do herbu elementy wojskowe po potyczce z Tatarami w 1672 r.,
 * — Cieszanów Rock Festiwal, edycja 2026: 13–15 sierpnia,
 *   organizator Centrum Kultury i Sportu w Cieszanowie,
 * — festiwal Folkowisko odbywa się w Gorajcu (gmina Cieszanów),
 * — lesistość gminy 39,1% (GUS),
 * — 1 803 mieszkańców miasta (31.12.2024), spadek o 5,1% od 2002 r.
 */
export const CIESZANOW: CityContent = {
  slug: "cieszanow",
  h1: "Thermomix Cieszanów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Cieszanów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Cieszanowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Cieszanów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Cieszanowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Cieszanowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Cieszanów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ciasto — maszyna. Patelnia — Wy. Bez wyjątków.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Cieszanowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "nalesniki",
      heading: "Miasto na dwa tysiące ludzi z trzydniowym festiwalem — czyli o naleśnikach",
      paragraphs: [
        "Cieszanów liczy niecałe tysiąc osiemset mieszkańców, a od lat organizuje trzydniowy festiwal rockowy — w 2026 roku od trzynastego do piętnastego sierpnia. We wsi Gorajec, też w tej gminie, odbywa się drugi festiwal, folkowy. Dwa zupełnie różne, w jednej małej gminie. Miasto lokował w 1590 roku Stanisław Cieszanowski, a Jan III Sobieski potwierdził prawa miejskie w 1681 i dorzucił do herbu elementy wojskowe — po potyczce z Tatarami, która rozegrała się w okolicy dziewięć lat wcześniej.",
        "Napiszę tu o rzeczy najzwyklejszej, robionej w każdym domu, bo jest przy niej coś, czego nie widać nigdzie indziej tak wyraźnie: o naleśnikach.",
        "Ciasto naleśnikowe to jeden z bardzo nielicznych przypadków, w których powiem bez żadnego zastrzeżenia, że maszyna wygrywa. Nie „jest wygodniej”, nie „oszczędza czas” — po prostu wychodzi lepiej. Nie ma grudek, bo mąka trafia do płynu przy pracującym nożu. Gęstość jest ta sama za każdym razem, więc nie trzeba zgadywać, ile jeszcze dolać mleka. I odpada mieszanie rózgą, które przy większej porcji naprawdę męczy rękę. Jeśli ktoś przestał robić naleśniki, bo „zawsze wychodzą grudki”, to jest dokładnie ta sytuacja.",
        "A teraz druga połowa, i tu nie ma miejsca na żadne „w dużej części”. Smażenie zostaje po Waszej stronie w stu procentach. Każdy naleśnik z osobna, na patelni, z tłuszczem, z przewracaniem, z pierwszym zawsze nieudanym. Urządzenie nie usmaży niczego — nie ma takiej funkcji i fizycznie nie może jej mieć.",
        "Dlatego uważam naleśniki za najczystszy przykład tego, jak ten podział naprawdę wygląda. Sprzęt bierze na siebie przygotowanie: to, co jest powtarzalne, mierzalne i nudne. Człowiek zostaje z tym, co wymaga oka, ręki i obecności. Kto kupuje takie urządzenie licząc, że przejmie obie części, kupuje je z niewłaściwego powodu — i lepiej, żeby wiedział to przed, a nie po.",
        "I skala, jak zawsze: kto robi naleśniki raz na kwartał, nie kupi urządzenia dla nich. Jeśli natomiast w Waszym domu są co tydzień, a ciasto robi się na dużą miskę, to jest jedna z tych rzeczy, które zauważycie od pierwszego razu.",
        "Czego nie doradzę: niczego o surowych jajkach ani o przechowywaniu ciasta i gotowych naleśników. To jest dziedzina bezpieczeństwa żywności — o jajkach napisałam osobno, przy innym mieście, i tam ta odmowa stoi wprost.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Cieszanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, zróbmy na prezentacji ciasto naleśnikowe — to trwa moment, a różnicę widać w misce, zanim cokolwiek trafi na patelnię.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Cieszanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla cieszanowskiej rodziny",
      paragraphs: [
        "Cieszanów liczy niecałe tysiąc osiemset mieszkańców i od dwóch dekad ich powoli ubywa. Pierwsze wzmianki o osadzie pochodzą z 1496 roku, miasto lokowano w 1590. Blisko czterdzieści procent powierzchni gminy to lasy — jesteśmy na Roztoczu Wschodnim.",
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

  districtsHeading: "Do których części Cieszanowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Dachnowa, Nowego Sioła, Gorajca, Niemstowa, Chotylubia, Żukowa i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Cieszanów też przyjadę",
  nearbyParagraphs: [
    "Lubaczów, Oleszyce, Narol, Horyniec-Zdrój i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubaczów", "Oleszyce", "Narol", "Jarosław", "Tomaszów Lubelski", "Sieniawa"],

  about: blokOMnie("do Cieszanowa", "w Cieszanowie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Cieszanowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Cieszanowie"),
    {
      question: "Czy zrobię w tym naleśniki?",
      answer:
        "Ciasto — tak, i to jest jeden z niewielu przypadków, w których powiem bez zastrzeżeń, że wychodzi lepiej niż ręcznie: bez grudek, o powtarzalnej gęstości, bez męczenia ręki. Smażenie natomiast zostaje w stu procentach po Waszej stronie — urządzenie nie usmaży niczego, bo nie ma takiej funkcji. Naleśniki są najczystszym przykładem tego podziału: maszyna bierze przygotowanie, człowiek zostaje z patelnią.",
    },
    {
      question: "Czy warto kupić takie urządzenie dla jednej rzeczy?",
      answer:
        "Nie i nie będę do tego namawiać. Kto robi naleśniki raz na kwartał, nie kupi dla nich sprzętu tej klasy. Sens pojawia się wtedy, gdy takich rzeczy jest w Waszej kuchni kilka i dzieją się co tydzień. Na prezentacji najlepiej zrobić to, co gotujecie najczęściej — wtedy widać, czy różnica jest realna, czy tylko ładnie wygląda na pokazie.",
    },
  ],

  geo: { lat: 50.2472, lng: 23.1264 },
};
