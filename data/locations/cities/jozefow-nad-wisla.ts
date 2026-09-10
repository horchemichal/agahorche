import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * JÓZEFÓW NAD WISŁĄ — 789 mieszkańców (31.12.2024). Miasto od 1687 r.,
 * które prawa miejskie odzyskało 1 STYCZNIA 2018 R. i stało się przez
 * to PIĄTYM miastem w Polsce liczącym poniżej tysiąca mieszkańców.
 * Gmina żyje z sadów; działa tu grupa producencka skupiająca około
 * dziewięćdziesięciu sadowników.
 *
 * KĄT: odmiany. Nie „jabłko" jako składnik, tylko KTÓRE jabłko —
 * bo w mieście, gdzie sady są od 1902 roku, odmiany to nie
 * ciekawostka, tylko codzienna wiedza.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepisy piszą „jabłka", jakby to była jedna rzecz, a nie
 *   jest,
 * — że różnica między odmianą kwaśną i twardą a słodką i miękką
 *   zmienia wynik bardziej niż jakiekolwiek ustawienie urządzenia,
 * — czego urządzenie NIE zrobi: nie rozpozna, co wrzuciliście,
 *   i nie skoryguje wyboru,
 * — i że to jest dobra wiadomość, bo znaczy, że decyzja należy
 *   do człowieka.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani nic o cukrze i witaminach.
 * — ŻADNYCH PORAD SADOWNICZYCH — kiedy zbierać, jak przechowywać,
 *   która odmiana lepiej leżakuje. To wiedza zawodowa, a w tej
 *   gminie mieszka jej mnóstwo.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I PRZETWORACH (zasada
 *   z Hrubieszowa, Opola Lubelskiego, Annopola i Urzędowa).
 * — ŻADNEGO WARTOŚCIOWANIA odmian jako „lepszych" i „gorszych" —
 *   tylko: która do czego.
 * — ŻADNEJ REKLAMY konkretnej firmy ani marki handlowej.
 *
 * ROZGRANICZENIE — TU JUŻ BARDZO GĘSTO:
 * — Annopol: „jabłko" — o tym, CO z jednego składnika zrobić
 *   (mus, sos, nadzienie, ciasto),
 * — Urzędów: „owoce miękkie" — o CZASIE, którego owoc nie daje,
 * — Hrubieszów: SKALA, Opole Lubelskie: MIESZANIE.
 * Ta strona jest o WYBORZE SKŁADNIKA — o tym, że „jabłka"
 * w przepisie to nie jedna rzecz. Żadna z powyższych tego nie
 * dotyka i tekst pilnuje, żeby nie wejść w ich tematy: nie ma tu
 * listy dań ani nic o sezonie.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE piszę „europejska kolebka sadownictwa". To sformułowanie
 *   z artykułu prasowego, nie porównanie z danymi. Gdybym go użyła,
 *   powtórzyłabym cudzy superlatyw bez pokrycia,
 * — NIE podaję rocznej produkcji jabłek w gminie. Dwa WŁASNE
 *   materiały gminy podają 75 000 i 60 000 ton — rozbieżność
 *   piętnastu tysięcy ton. W tekście nie ma żadnej z tych liczb,
 * — NIE piszę o przeprawie przez Wisłę w czasie teraźniejszym.
 *   Historycznie była tu komora celna i przeprawa, ale strona gminy
 *   wprost mówi, że dawne promy stały się zbędne. Dziś nie ma
 *   czynnego promu ani mostu — i tekst mówi o tym w czasie
 *   przeszłym albo wcale,
 * — NIE łączę gminy z czwartym miejscem powiatu opolskiego
 *   w powierzchni sadów ŚLIWKOWYCH. Udokumentowanym owocem tej
 *   gminy jest JABŁKO, nie śliwka — to dwie różne rzeczy i nie
 *   wolno ich zlewać,
 * — NIE podaję roku utraty praw miejskich: źródła podają 1868, 1869
 *   i 1870. Podaję pewne: nadanie 1687 r. (za Jana III Sobieskiego,
 *   lokacja Andrzeja Potockiego) i odzyskanie 1 stycznia 2018 r.,
 * — NIE podaję liczby mieszkańców GMINY. Pięć źródeł podaje pięć
 *   różnych liczb, w tym trzy różne na stronach samej gminy.
 *   W tekście jest tylko liczba MIASTA z rokiem,
 * — NIE piszę o Święcie Kwitnących Sadów w czasie teraźniejszym —
 *   nie potwierdziłam edycji z 2025 ani 2026 r.,
 * — miasto NIE publikuje wykazu osiedli, więc districts to PUSTA
 *   TABLICA.
 *
 * PUŁAPKA NAZEWNICZA — TRZY JÓZEFOWY: ten nad Wisłą (powiat opolski
 * lubelski), biłgorajski na Roztoczu i pod Warszawą (powiat otwocki,
 * gdzie serwis ma osobną stronę). Do 2003 r. miejscowość nazywała
 * się po prostu „Józefów" — dopisek „nad Wisłą" dodano właśnie po to,
 * żeby je rozróżnić. Wyniki o „przeprawie przez Wisłę" dotyczyły
 * Józefowa pod Warszawą.
 *
 * SUPERLATYW, KTÓRY PRZESZEDŁ — RZADKOŚĆ. „Piąte miasto w Polsce
 * poniżej tysiąca mieszkańców" opiera się na liście nadań praw
 * miejskich zestawionej z populacjami, czyli na realnym porównaniu,
 * a nie na haśle z folderu. Dlatego jest w tekście.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — prawa miejskie 1687 r., odzyskane 1 stycznia 2018 r.,
 * — 789 mieszkańców na 31.12.2024,
 * — pierwszy duży sad założono w 1902 r.; dziś działa grupa
 *   producentów owoców i warzyw skupiająca ok. dziewięćdziesięciu
 *   sadowników, z eksportem do kilkunastu krajów,
 * — historycznie uprawiane odmiany: Kronselska, Landsberska,
 *   Żeleźniak, Zorza, Antonówka, Koksa, a obok jabłek także grusze,
 *   śliwki, wiśnie, czereśnie i morele,
 * — do Opola Lubelskiego ok. 16 km, do Lublina ok. 57–63 km
 *   w zależności od trasy,
 * — gmina graniczy przez Wisłę z mazowieckim i świętokrzyskim.
 */
export const JOZEFOW_NAD_WISLA: CityContent = {
  slug: "jozefow-nad-wisla",
  h1: "Thermomix Józefów nad Wisłą – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Józefów nad Wisłą — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Józefowie nad Wisłą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Józefów nad Wisłą — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Józefowie nad Wisłą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Józefowa nad Wisłą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Józefów nad Wisłą i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis mówi „jabłka”. Jakby to była jedna rzecz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Józefowie nad Wisłą – jak wygląda prezentacja?",
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
      id: "odmiany",
      heading: "Miasto sadów — czyli o tym, że „jabłka” w przepisie to nie jedna rzecz",
      paragraphs: [
        "Józefów nad Wisłą ma niecałe osiemset mieszkańców i jest miastem od 1687 roku, z ponadstuletnią przerwą — prawa miejskie odzyskał pierwszego stycznia 2018 roku i stał się przez to piątym miastem w Polsce liczącym poniżej tysiąca ludzi. Pierwszy duży sad założono tu w 1902 roku i sady zostały: dziś działa grupa producencka skupiająca około dziewięćdziesięciu sadowników, z eksportem do kilkunastu krajów.",
        "W takim miejscu nie będę tłumaczyć nikomu, co to jest jabłko. Napiszę więc o czymś, co widzę u klientek w całej Polsce, a czego tutaj prawdopodobnie nikomu tłumaczyć nie trzeba: przepisy piszą „jabłka”, jakby to była jedna rzecz.",
        "A nie jest. Antonówka to nie to samo co Koksa, a Żeleźniak to nie to samo co Zorza — i to nie jest wiedza dla koneserów, tylko różnica, którą czuć w gotowym daniu. Odmiana kwaśna i twarda rozpada się inaczej, wymaga innej ilości cukru i daje zupełnie inną konsystencję niż odmiana słodka i miękka. Ten sam przepis, ta sama osoba, to samo urządzenie — a wynik inny.",
        "Piszę o tym, bo to jest najczęstsza przyczyna sytuacji „zrobiłam dokładnie jak w przepisie, a wyszło inaczej”. Ludzie szukają wtedy winy w sprzęcie albo w sobie, a wina jest w skrzynce.",
        "I tu dochodzimy do rzeczy, którą trzeba powiedzieć wprost. To urządzenie NIE rozpozna, co do niego wrzuciliście. Nie sprawdzi, czy jabłko jest kwaśne, czy słodkie, i nie skoryguje przepisu pod to, co macie. Robi dokładnie to, co mu każecie, z tym, co dostanie.",
        "I dobrze. Bo to znaczy, że decyzja — która odmiana do czego — zostaje po stronie człowieka, a nie maszyny. Urządzenie zdejmuje robotę: rozdrabnianie, mieszanie, pilnowanie. Nie zdejmuje wyboru składnika i nigdy nie zdejmie.",
        "Czego natomiast nie zrobię ja: nie będę doradzać w sprawach sadowniczych. Ani która odmiana lepiej leżakuje, ani kiedy zbierać, ani jak przechowywać. W tej gminie mieszkają ludzie, którzy zajmują się tym zawodowo od pokoleń — i to oni powinni o tym mówić, nie przedstawicielka handlowa. Nie doradzam też nic o przetworach ani o mrożeniu.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Józefowie nad Wisłą?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie pod ręką swoje owoce, powiedzcie o tym przy umawianiu i przygotujcie je na spotkanie. Wolę gotować z tego, co u Was rośnie, niż z tego, co przywiozę ze sklepu — i Wy więcej z tego zobaczycie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Józefowie nad Wisłą"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla józefowskiej rodziny",
      paragraphs: [
        "Miasto liczy niecałe osiemset osób i od lat ich ubywa. Leży na samej granicy województwa — za Wisłą zaczyna się mazowieckie i świętokrzyskie — a do Opola Lubelskiego jest stąd kilkanaście kilometrów, do Lublina około sześćdziesięciu.",
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

  districtsHeading: "Do których części Józefowa nad Wisłą dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Józefów nad Wisłą też przyjadę",
  nearbyParagraphs: [
    "Opole Lubelskie, Annopol, Dzierzkowice, Łaziska i Urzędów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opole Lubelskie", "Annopol", "Urzędów", "Kraśnik", "Poniatowa", "Kazimierz Dolny"],

  about: blokOMnie("do Józefowa nad Wisłą", "w Józefowie nad Wisłą i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Józefowa nad Wisłą bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Józefowie nad Wisłą"),
    {
      question: "Zrobiłam dokładnie jak w przepisie, a wyszło inaczej. Dlaczego?",
      answer:
        "Bardzo często dlatego, że przepis pisze „jabłka”, jakby to była jedna rzecz. Odmiana kwaśna i twarda rozpada się inaczej, wymaga innej ilości cukru i daje inną konsystencję niż słodka i miękka. Ten sam przepis i to samo urządzenie dadzą inny wynik przy innej odmianie — wina jest zwykle w skrzynce, nie w sprzęcie.",
    },
    {
      question: "Czy urządzenie samo się dostosuje do tego, co wrzucę?",
      answer:
        "Nie. Nie rozpozna, co dostało, i nie skoryguje przepisu pod Wasze składniki — robi dokładnie to, co mu każecie. I dobrze, bo to znaczy, że wybór składnika zostaje po stronie człowieka. W sprawach sadowniczych — która odmiana kiedy i jak — nie doradzam; w tej gminie mieszkają ludzie, którzy zajmują się tym zawodowo.",
    },
  ],

  geo: { lat: 51.0247, lng: 21.8 },
};
