import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * NIEMODLIN — miasto w powiecie opolskim, 5 809 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 476. Prawa miejskie ok. 1283 r.
 * (nadawcy nie ustalono). „KARP NIEMODLIŃSKI" jest wpisany
 * na ministerialną Listę Produktów Tradycyjnych 25 MAJA 2015 r.;
 * hodowla sięga XIV w., a stawy zajmują ok. 960 ha. Zamek działa
 * jako obiekt turystyczny, a prace konserwatorskie trwają w 2026 r.
 *
 * KĄT: danie, które robi się RAZ W ROKU — i dlatego nigdy się go
 * dobrze nie umie. Miasto, którego znak firmowy jest jedzony
 * głównie przy jednej okazji w roku, jest właściwym miejscem
 * na stronę o tej całej kategorii potraw.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy daniu robionym raz w roku nie chodzi o umiejętność,
 *   tylko o brak powtórzeń — nikt nie nabierze wprawy w czymś,
 *   co robi dwunasty raz w życiu,
 * — że urządzenie realnie pomaga w jednej rzeczy: powtarza
 *   dokładnie to samo, jeśli zapisze się, co się zrobiło,
 * — że przy takich potrawach największym wrogiem jest kumulacja
 *   — wszystko naraz, w jeden dzień, przy pełnym domu,
 * — i uczciwie: sprzęt nie sprawi, że danie nagle wyjdzie lepiej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PRZEPISÓW NA KARPIA NIEMODLIŃSKIEGO. To wyrób
 *   wpisany na listę ministerialną, produkowany przez konkretne
 *   gospodarstwo — nie podrabiam go i nie doradzam „jak zrobić
 *   podobnego". Kupuje się go u hodowcy.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o rybach ani o świątecznym
 *   jedzeniu.
 * — ŻADNEGO WCHODZENIA W TEMAT UBOJU RYB. To nie jest temat
 *   na stronę handlową i nie mam w nim kompetencji.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU świeżej ryby.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ryba" (inne miasto) to
 * strona TECHNICZNA: co urządzenie robi z rybą, co się udaje
 * na parze, a czego nie zrobi nigdy — i tego wątku tu ŚWIADOMIE
 * NIE POWTARZAM, tylko do niego odsyłam. „Święta" (miasto
 * elektrowni) dotyczą pracy w dni świąteczne. „Zapisywanie"
 * (Chmielnik) dotyczy prowadzenia własnych notatek kulinarnych
 * jako nawyku. Tutaj chodzi o RZADKOŚĆ POWTÓRZEŃ jako problem
 * sam w sobie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty dziennej ani nadawcy praw miejskich.
 *   Źródła podają tylko „ok. 1283".
 * — NIE PODAJĘ właściciela zamku. Źródła są sprzeczne co do
 *   relacji między spółką a fundacją zarządzającą.
 * — NIE PODAJĘ cen biletów do zamku ani godzin — dane niepewne.
 * — NIE WYMIENIAM pracodawców ze strony starostwa. Ta strona jest
 *   przestarzała (wymienia nazwę firmy nieużywaną od ok. 2007 r.).
 * — NIE PISZĘ, że „chleb Tadek" jest na Liście Produktów
 *   Tradycyjnych. NIE POTWIERDZONO tego; to marka regionalna.
 * — NIE PISZĘ, że Niemodlin ma dwujęzyczne tablice. NIE MA.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie ok. 1283 r.; w 1313 r. Niemodlin stał się
 *   stolicą wydzielonego księstwa,
 * — „karp niemodliński" na Liście Produktów Tradycyjnych
 *   od 25 maja 2015 r.; tradycja hodowli od XIV w., cystersi
 *   w XV w., w XVI w. sprzedaż ryb dawała ok. 40% dochodów
 *   miejscowej szlachty; cykl hodowlany trzyletni, ok. 960 ha
 *   stawów,
 * — od kilkunastu lat odbywa się tu Wojewódzkie Święto Karpia,
 * — zamek działa jako obiekt turystyczny z ogrodami, w których
 *   trzymane jest stado danieli; prace konserwatorskie trwają,
 * — obwodnica Niemodlina w ciągu DK46 (11,48 km) została oddana
 *   22 listopada 2021 r.; wcześniej miasto było znanym wąskim
 *   gardłem trasy Opole–Nysa,
 * — gwara niemodlińska jest opisywana jako odrębna odmiana gwar
 *   śląskich, z mazurzeniem,
 * — 5 809 mieszkańców (31.12.2024).
 */
export const NIEMODLIN: CityContent = {
  slug: "niemodlin",
  h1: "Thermomix Niemodlin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Niemodlin — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Niemodlinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Niemodlin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Niemodlinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Niemodlina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Niemodlin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwunasty raz w życiu to nie jest wprawa. To wciąż pierwszy raz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Niemodlinie – jak wygląda prezentacja?",
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
      id: "raz-w-roku",
      heading: "Miasto karpia — czyli o daniach, które robi się raz w roku",
      paragraphs: [
        "„Karp niemodliński” jest od 2015 roku wpisany na ministerialną Listę Produktów Tradycyjnych, a hodowla ryb w tutejszych stawach sięga XIV wieku — w XVI stuleciu sprzedaż ryb dawała miejscowej szlachcie około czterdziestu procent dochodów. Dziś stawy zajmują tu blisko tysiąc hektarów, a miasto od kilkunastu lat organizuje Wojewódzkie Święto Karpia.",
        "Zacznę od tego, czego tutaj nie będzie: nie podam przepisu na karpia niemodlińskiego i nie pokażę, jak zrobić „podobnego”. To jest cudzy wyrób z listy ministerialnej, hodowany przez konkretne gospodarstwo. Po niego się jedzie, a nie kombinuje. O tym, co urządzenie robi z rybą w ogóle, piszę na osobnej stronie i nie będę tego tu powtarzać.",
        "Bo Niemodlin jest właściwym miejscem na coś innego i szerszego: na rozmowę o daniach, które robi się raz w roku.",
        "Każdy dom ma ich kilka. Karp na Wigilię. Barszcz na święta. Coś na Wielkanoc. Ciasto, które piecze się tylko wtedy, gdy przyjeżdża cała rodzina. I każde z nich łączy jedno: nikt nigdy nie nabiera w nich wprawy. Jeśli robicie coś raz w roku i macie za sobą dwanaście podejść, to nie jest doświadczenie — to wciąż dwanaście pierwszych razy, rozłożonych na dwanaście lat, między którymi wszystko się zapomina.",
        "I dlatego te dania wychodzą raz lepiej, raz gorzej, a nikt nie wie dlaczego. To nie jest brak talentu. To brak powtórzeń.",
        "Co w tej sytuacji realnie zmienia urządzenie? Jedną rzecz, ale konkretną: potrafi powtórzyć dokładnie to samo. Jeśli w tym roku zapiszecie, co i w jakiej kolejności zrobiliście, to za rok nie będziecie odtwarzać tego z pamięci — po prostu powtórzycie. Po dwóch, trzech latach danie zaczyna wychodzić tak samo za każdym razem, a to jest w praktyce jedyna droga do „wprawy” przy czymś, co robi się tak rzadko.",
        "Druga rzecz jest jeszcze bardziej praktyczna. Przy daniach z jednego dnia w roku problemem prawie nigdy nie jest trudność — problemem jest kumulacja. Wszystko naraz, w jednej kuchni, przy pełnym domu, przy czterech garnkach i piekarniku zajętym. Urządzenie, które gotuje bez pilnowania, zabiera z tego dnia jeden garnek i jedną parę rąk. To brzmi mało. W praktyce jest to różnica między spokojem a nerwami.",
        "I uczciwie, żeby nie było złudzeń: sprzęt nie sprawi, że danie nagle wyjdzie lepsze. Sprawi tylko, że będzie wychodzić tak samo — a przy czymś robionym raz w roku to jest więcej, niż się wydaje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Niemodlinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, które danie u Was robi się raz w roku i sprawia najwięcej kłopotu — zaczniemy od tego, jak rozłożyć je na dwa dni.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Niemodlinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla niemodlińskiej rodziny",
      paragraphs: [
        "Niemodlin liczy niecałe sześć tysięcy mieszkańców, a cała gmina ponad dwanaście. Prawa miejskie miasto dostało około 1283 roku, a w 1313 zostało stolicą wydzielonego księstwa. Zamek działa dziś jako obiekt turystyczny — w jego ogrodach trzymane jest stado danieli — a prace konserwatorskie wciąż trwają. Dwie rzeczy, o których warto wiedzieć: gwara niemodlińska jest opisywana jako odrębna odmiana gwar śląskich, z mazurzeniem, a obwodnica w ciągu drogi krajowej numer 46, oddana 22 listopada 2021 roku, zdjęła z miasta ruch, przez który przez dekady było znanym wąskim gardłem trasy z Opola do Nysy.",
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

  districtsHeading: "Do których części Niemodlina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Niemodlin też przyjadę",
  nearbyParagraphs: [
    "Opole, Grodków, Tułowice, Prószków, Brzeg i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opole", "Grodków", "Tułowice", "Prószków", "Brzeg", "Nysa"],

  about: blokOMnie("do Niemodlina", "w Niemodlinie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Niemodlina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Niemodlinie"),
    {
      question: "Pokażesz, jak zrobić karpia niemodlińskiego?",
      answer:
        "Nie. To wyrób wpisany na ministerialną Listę Produktów Tradycyjnych, hodowany przez konkretne gospodarstwo — po niego się jedzie, a nie kombinuje. O tym, co urządzenie robi z rybą w ogóle, piszę na osobnej stronie serwisu.",
    },
    {
      question: "Dlaczego świąteczne dania raz wychodzą, a raz nie?",
      answer:
        "Bo robi się je raz w roku, a to nie jest wprawa — to dwanaście pierwszych razy rozłożonych na dwanaście lat. Jedyne, co realnie pomaga, to zapisać, co i w jakiej kolejności zrobiliście, i po prostu powtórzyć za rok zamiast odtwarzać z pamięci.",
    },
    {
      question: "Czy sprzęt sprawi, że wigilijne danie wyjdzie lepiej?",
      answer:
        "Nie obiecam tego. Sprawi, że będzie wychodzić tak samo — i zabierze z tego jednego dnia jeden garnek i jedną parę rąk, bo gotuje bez pilnowania. Przy kuchni, w której wszystko dzieje się naraz, to jest różnica między spokojem a nerwami.",
    },
  ],

  geo: { lat: 50.6422, lng: 17.6199 },
};
