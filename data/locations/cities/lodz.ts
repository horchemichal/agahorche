import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ŁÓDŹ — trzecie co do wielkości miasto w Polsce, zbudowane w XIX wieku
 * wokół przemysłu włókienniczego. Piotrkowska, kamienice, dawne fabryki
 * zamienione dziś na mieszkania, biura i centra handlowe. Dziś miasto żyje
 * w dużej mierze z usług, logistyki i przemysłu przy autostradach.
 *
 * KĄT: zmiana, która przeniosła się z krosna na biurko. To jest cecha,
 * której nie ma żadne inne miasto w serwisie. Na Śląsku praca zmianowa
 * kojarzy się z kopalnią i hutą, na Podkarpaciu rytm wyznacza rolnictwo
 * — a w Łodzi PRACA O DZIWNYCH PORACH JEST STARSZA OD PRZEMYSŁU CIĘŻKIEGO
 * i nigdy się nie skończyła, tylko zmieniła miejsce: z przędzalni
 * do magazynu przy autostradzie i do biura obsługującego klienta z innej
 * strefy czasowej.
 *
 * KUCHENNIE daje to sytuację, której nie opisałam nigdzie indziej: nocna
 * zmiana, przy której NIE MA WYSIŁKU FIZYCZNEGO. Górnik po dwunastu
 * godzinach potrzebuje najeść się konkretnie; osoba, która przesiedziała
 * noc przy biurku, potrzebuje czegoś zupełnie innego — i o trzeciej
 * w nocy nie ma gdzie tego wziąć.
 *
 * OSTROŻNOŚĆ: piszę warunkowo („jeśli u Was ktoś pracuje na nocnej"),
 * bez twierdzeń o skali zatrudnienia, i bez jakichkolwiek porad
 * zdrowotnych czy dietetycznych dotyczących pracy nocnej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Łódź powstała i rozrosła się wokół przemysłu włókienniczego,
 * — dawne fabryki zamieniono na mieszkania, biura i centra handlowe,
 * — dziś w mieście i przy autostradach wokół działają centra usług,
 *   magazyny i zakłady pracujące na zmiany,
 * — dzielnice: Bałuty, Polesie, Śródmieście, Widzew, Górna, a w nich
 *   m.in. Retkinia, Teofilów, Radogoszcz, Chojny, Dąbrowa, Olechów,
 *   Julianów, Stoki, Łagiewniki, Złotno, Karolew, Zarzew, Ruda.
 *
 * CZEGO NIE MA: danych o zatrudnieniu, nazw firm, porad dotyczących pracy
 * nocnej i zdrowia.
 */
export const LODZ: CityContent = {
  slug: "lodz",
  h1: "Thermomix Łódź – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Łódź — prezentacja i cena",
  seoDescription:
    "Thermomix w Łodzi: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice, terminy także rano i w dzień. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łódź — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łodzi. Prezentacja i dojazd bezpłatne, we wszystkich dzielnicach.",

  lead:
    "Przyjeżdżam do Łodzi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Bałut i Retkini po Widzew, Olechów i Chojny.",

  highlights: highlightyStandardowe("Łódź i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łodzi – jak wygląda prezentacja?",
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
      id: "zmiana-przeniosla-sie-na-biurko",
      heading: "Zmiana przeniosła się z krosna na biurko",
      paragraphs: [
        "Łódź zbudowano wokół przędzalni i tkalni, a praca o dziwnych porach jest tu starsza niż w większości polskich miast — istniała, zanim powstały kopalnie i huty, o których zwykle się mówi przy pracy zmianowej. Fabryki zamieniono na mieszkania i biura, syreny umilkły, ale rytm nie zniknął. Zmienił tylko adres.",
        "Dziś ta sama noc wygląda inaczej. Ktoś jest w magazynie przy autostradzie, ktoś inny w biurze obsługującym klienta z drugiej strony świata i kończy o czwartej rano. Jeśli u Was tak jest, wiecie, o czym piszę.",
        "I tu jest rzecz, której nie napisałam na żadnej innej stronie, bo nigdzie indziej nie pasowała. Nocna zmiana bez wysiłku fizycznego to zupełnie inny problem kuchenny niż nocka w kopalni. Po ciężkiej pracy trzeba się porządnie najeść. Po nocy przy biurku organizm nie chce obiadu, chce czegoś lekkiego — a o trzeciej nad ranem nie ma tego skąd wziąć, więc kończy się na tym, co stoi w automacie albo zostało z wczoraj na zimno.",
        "Urządzenie nie rozwiąże tego magicznie, ale robi dwie konkretne rzeczy. Po pierwsze: zupa krem albo coś na parze da się przygotować wcześniej, bo gotuje się bez pilnowania, i zabrać w termosie zamiast kupować cokolwiek po drodze. Po drugie: odgrzewanie na parze nie wysusza, więc porcja zjadana o trzeciej nad ranem nie jest karą za nocną zmianę.",
        "I trzecia, mniej oczywista: po powrocie o piątej rano nikt nie ma siły gotować, a właśnie wtedy najczęściej zapada decyzja o zamówieniu czegoś na wieczór. Danie przygotowane dzień wcześniej rozstrzyga tę sprawę zanim się zacznie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łodzi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia — oddzwaniam także wieczorem.",
        "Podaj dzielnicę i piętro. Jeśli ktoś u Was pracuje na nocnej i śpi w dzień, powiedzcie o tym przy umawianiu — przyjadę o porze, która nikogo nie obudzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łodzi"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łódzkiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje w grafiku, a reszta chodzi do szkoły i pracy o stałych godzinach, jeden obiad musi obsłużyć dwa różne rozkłady dnia.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wtedy, gdy akurat jest czas, a odgrzewanie na parze nie wysusza.",
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

  districtsHeading: "Do których dzielnic Łodzi dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie z Olechowem, Łagiewnikami i Nowosolną.",
    "Przy umawianiu wystarczy podać dzielnicę albo osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Bałuty",
    "Polesie",
    "Widzew",
    "Górna",
    "Retkinia",
    "Teofilów",
    "Radogoszcz",
    "Chojny",
    "Dąbrowa",
    "Olechów",
    "Julianów",
    "Stoki",
    "Łagiewniki",
    "Złotno",
    "Karolew",
    "Zarzew",
    "Ruda",
    "Nowosolna",
  ],

  nearbyHeading: "Poza Łódź też przyjadę",
  nearbyParagraphs: [
    "Pabianice, Zgierz, Aleksandrów Łódzki, Konstantynów Łódzki, Rzgów, Tuszyn, Stryków i Brzeziny są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Pabianice",
    "Zgierz",
    "Aleksandrów Łódzki",
    "Konstantynów Łódzki",
    "Rzgów",
    "Tuszyn",
    "Stryków",
    "Brzeziny",
  ],

  about: blokOMnie("do Łodzi", "w Łodzi i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich dzielnic Łodzi bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich — od Śródmieścia po Olechów, Łagiewniki i Nowosolną. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łodzi"),
    {
      question: "Pracuję na nocnej zmianie. Czy przyjedziesz o nietypowej porze?",
      answer:
        "Tak, łącznie z porankiem i środkiem dnia roboczego. Podaj kilka terminów z różnych tygodni, a wybiorę z nich — i powiedz, jeśli ktoś u Was śpi w ciągu dnia, żebym nie zapukała w złym momencie.",
    },
    {
      question: "Mieszkam w kamienicy bez windy, na trzecim piętrze. To problem?",
      answer:
        "Nie, tylko dobrze wiedzieć wcześniej — wtedy wnoszę mniej rzeczy za jednym razem i planuję kilka minut więcej. Uprzedź przy umawianiu i tyle.",
    },
  ],

  geo: { lat: 51.7592, lng: 19.456 },
};
