import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * PRABUTY — miasto w powiecie kwidzyńskim, 8 053 mieszkańców
 * (31.12.2024, GUS). Brief mówił 8 500 — zawyżone.
 *
 * PRAWA MIEJSKIE: 30 PAŹDZIERNIKA 1330 r.
 *
 * PRZEMYSŁ: zakład produkujący HYDRAULIKĘ SIŁOWĄ — układy
 * pracujące pod wysokim ciśnieniem. Tradycja przemysłowa
 * miejsca sięga cukrowni z 1883 r. NAZWY NIE PODAJĘ.
 *
 * SZPITAL: specjalistyczny szpital PULMONOLOGICZNY. UWAGA —
 * OD 1993 r. NIE JEST JUŻ SANATORIUM. Wiele źródeł wciąż pisze
 * o „sanatorium w Prabutach"; to nieaktualne. W tekście
 * wspominam szpital najwyżej jednym neutralnym zdaniem
 * i NIE WCHODZĘ w temat zdrowia ani chorób.
 *
 * KĄT: CIŚNIENIE I SZYBKOWAR — czyli czym to urządzenie NIE
 * JEST. Najczęstsze nieporozumienie przy tym sprzęcie: ludzie
 * myślą, że gotuje pod ciśnieniem i dlatego szybciej. NIE
 * GOTUJE. Kąt jest naturalny dla miasta, w którym produkuje się
 * układy hydrauliczne wysokiego ciśnienia — tu każdy wie,
 * co ciśnienie znaczy naprawdę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to NIE JEST szybkowar i nie gotuje pod ciśnieniem,
 * — że naczynie jest otwarte na parę: pokrywka nie uszczelnia
 *   ciśnieniowo, jest miarka w otworze,
 * — że wobec tego woda wrze tu tak samo jak w garnku i fasola
 *   nie ugotuje się szybciej,
 * — skąd więc bierze się poczucie, że jest szybciej: ze
 *   ZLIKWIDOWANIA CZEKANIA I PRZESTOJÓW, a nie z fizyki,
 * — że jeśli ktoś kupuje to urządzenie POD ciśnieniowe
 *   gotowanie fasoli, grochu i mięsa na miękko — powinien
 *   kupić szybkowar, jest tańszy i lepszy w tym zadaniu,
 * — że oba sprzęty spokojnie stoją obok siebie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH LICZB: nie podaję temperatury wrzenia pod
 *   ciśnieniem, nie podaję maksymalnej temperatury urządzenia,
 *   nie podaję ciśnienia szybkowaru. Piszę jakościowo.
 * — ŻADNYCH PORAD O OBSŁUDZE SZYBKOWARU — to sprzęt ciśnieniowy
 *   i ma własną instrukcję. ODMOWA W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH i ŻADNEGO wchodzenia w temat
 *   chorób płuc czy szpitala.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie na parze"
 * dotyczy Varomy i tego, co się w niej robi. „Brak piekarnika"
 * (Zdzieszowice) dotyczy braku innego sprzętu. Tutaj chodzi
 * o KONKRETNE NIEPOROZUMIENIE FIZYCZNE: ciśnienie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Prabutach jest sanatorium. NIE MA od 1993 r.
 * — NIE PODAJĘ nazwy zakładu ani liczby zatrudnionych.
 * — NIE PODAJĘ żadnych wartości ciśnienia ani temperatury.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla Prabut nie potwierdziłam.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 8 053 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 30 października 1330 r.,
 * — zakład produkujący hydraulikę siłową; tradycja przemysłowa
 *   miejsca od cukrowni z 1883 r.,
 * — szpital specjalistyczny (pulmonologiczny), który od 1993 r.
 *   nie jest już sanatorium.
 */
export const PRABUTY: CityContent = {
  slug: "prabuty",
  h1: "Thermomix Prabuty – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Prabuty (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Prabutach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Prabuty — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Prabutach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Prabut z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Prabuty i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To nie jest szybkowar. Naprawdę nie jest.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Prabutach – jak wygląda prezentacja?",
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
      id: "cisnienie",
      heading: "Miasto, które produkuje hydraulikę wysokiego ciśnienia — czyli o tym, czym Thermomix nie jest",
      paragraphs: [
        "W Prabutach robi się hydraulikę siłową: układy, które pracują pod ciśnieniem i w których ciśnienie jest wielkością mierzoną, dokumentowaną i traktowaną poważnie. Tradycja przemysłowa tego miejsca sięga cukrowni z 1883 roku. Nie ma więc lepszego miasta na wyjaśnienie najczęstszego nieporozumienia dotyczącego tego urządzenia.",
        "Thermomix nie gotuje pod ciśnieniem. Nie jest szybkowarem i nigdy nim nie był.",
        "Wystarczy spojrzeć na pokrywkę: w środku jest otwór, w otworze siedzi miarka, a przez ten otwór wychodzi para. To naczynie jest otwarte. Nie ma tu żadnego uszczelnienia ciśnieniowego, żadnego zaworu bezpieczeństwa, żadnego ciśnienia ponad atmosferyczne. A skoro tak, to woda wrze w nim dokładnie tak samo jak w zwykłym garnku na kuchence.",
        "Konsekwencja jest prosta i trzeba ją znać przed zakupem: fasola nie ugotuje się w nim szybciej niż w garnku. Groch też nie. Mięso na miękko, gęś, golonka, wołowina na sztukę mięsa — wszystko to potrzebuje swojego czasu i ten czas będzie taki sam. Kto kupuje ten sprzęt po to, żeby skrócić gotowanie twardych rzeczy, kupi rozczarowanie.",
        "Skąd się więc bierze powszechne wrażenie, że z nim jest szybciej? Nie z fizyki, tylko z organizacji. Znikają przestoje: nie stoisz przy garnku i nie mieszasz, nie musisz pilnować, żeby nie wykipiało, nie przekładasz z miski do garnka i z garnka na patelnię, nie myjesz trzech naczyń po drodze. Zupa gotuje się tyle samo minut co zawsze — tylko te minuty należą do Ciebie, a nie do garnka. To jest realna oszczędność i ona wystarczy, żeby ten sprzęt miał sens. Nie trzeba do niej dokładać fizyki, której nie ma.",
        "I powiem coś, czego sprzedawca raczej nie mówi: jeżeli Twoim głównym problemem jest właśnie fasola, groch, flaki i mięso na miękko — kup szybkowar. Jest kilkanaście razy tańszy i w tym jednym zadaniu bezkonkurencyjny. Te dwa sprzęty spokojnie stoją obok siebie w jednej kuchni i wcale się nie wykluczają; sama mam w domu jedno i drugie.",
        "Jak obsługiwać szybkowar, nie napiszę. To jest sprzęt ciśnieniowy, ma własną instrukcję producenta i to nie jest miejsce na porady w tej sprawie. W mieście, które robi hydraulikę wysokiego ciśnienia, chyba nie muszę tłumaczyć, dlaczego.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Prabutach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli masz konkretne pytanie w rodzaju „a czy to zrobi X szybciej” — zadaj je od razu przy umawianiu. Odpowiem uczciwie, także wtedy, gdy odpowiedź brzmi nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Prabutach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla prabuckiej rodziny",
      paragraphs: [
        "Prabuty liczą nieco ponad osiem tysięcy mieszkańców, a prawa miejskie mają od 30 października 1330 roku. Przemysł jest tu obecny od dawna — dzisiejszy zakład produkujący hydraulikę siłową stoi w miejscu, którego tradycja fabryczna sięga cukrowni z 1883 roku. Działa też szpital specjalistyczny; dla porządku warto dodać, bo w sieci powtarza się stara informacja: od 1993 roku nie jest to już sanatorium.",
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

  districtsHeading: "Do których części Prabut dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Gdakowa, Trumiejek, Rodowa, Obrzynowa, Kołodziejów i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Prabuty też przyjadę",
  nearbyParagraphs: [
    "Kwidzyn, Sztum, Susz, Iława i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kwidzyn", "Sztum", "Malbork", "Dzierzgoń", "Iława"],

  about: blokOMnie("do Prabut", "w Prabutach i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Prabut bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Prabutach"),
    {
      question: "Czy Thermomix gotuje pod ciśnieniem?",
      answer:
        "Nie. W pokrywce jest otwór z miarką i przez niego wychodzi para — to naczynie jest otwarte. Nie ma uszczelnienia ciśnieniowego, więc woda wrze w nim tak samo jak w zwykłym garnku.",
    },
    {
      question: "To ugotuje mi fasolę szybciej?",
      answer:
        "Nie. Fasola, groch, flaki i mięso na miękko potrzebują swojego czasu i ten czas będzie taki sam co w garnku. Jeżeli to jest Twój główny problem — kup szybkowar, jest kilkanaście razy tańszy i w tym zadaniu bezkonkurencyjny. Oba sprzęty spokojnie stoją obok siebie.",
    },
    {
      question: "To dlaczego mówi się, że z nim jest szybciej?",
      answer:
        "Bo znikają przestoje, a nie dlatego, że gotuje szybciej. Nie stoisz przy garnku, nie mieszasz, nie pilnujesz, nie przekładasz między naczyniami i nie myjesz trzech rzeczy po drodze. Zupa gotuje się tyle samo minut — tylko te minuty należą do Ciebie.",
    },
  ],

  geo: { lat: 53.7561, lng: 19.205 },
};
