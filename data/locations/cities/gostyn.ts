import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * GOSTYŃ — miasto na południu Wielkopolski, z bazyliką na Świętej Górze
 * i cukrownią. Przez kilka tygodni jesienią trwa tu kampania cukrownicza:
 * zakład pracuje bez przerwy, a pola i drogi żyją burakiem.
 *
 * KĄT: kilka tygodni w roku, kiedy dom działa inaczej. Miasto kampanii
 * cukrowniczej jest jedynym właściwym miejscem na temat, którego nie ma
 * nigdzie w serwisie: KRÓTKI, POWTARZALNY OKRES, W KTÓRYM CAŁA RODZINA
 * PRZESTAWIA SIĘ NA INNY TRYB — i co wtedy dzieje się z jedzeniem.
 *
 * ROZGRANICZENIE — to jest ważne, bo temat ociera się o kilka istniejących.
 * Żywiec ma „pora roku, nie godzina powrotu" (turystyka i sezon).
 * Rzgów — „dzień od czwartej rano" (targowisko, stały rytm dobowy).
 * Ustrzyki — „rok podzielony na sezon i poza sezonem" (pół roku).
 * Tutaj chodzi o coś węższego: KILKA TYGODNI, które przychodzą co roku
 * w tym samym momencie, są z góry znane i po których wszystko wraca
 * do normy. To zmienia poradę: da się przygotować z wyprzedzeniem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Gostyniu działa cukrownia, a kampania cukrownicza trwa jesienią
 *   przez kilka tygodni,
 * — nad miastem stoi bazylika na Świętej Górze.
 *
 * CZEGO NIE MA: nazw zakładów, danych o produkcji, opisu pracy zmianowej
 * w konkretnym miejscu.
 */
export const GOSTYN: CityContent = {
  slug: "gostyn",
  h1: "Thermomix Gostyń – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Gostyń — prezentacja i cena",
  seoDescription:
    "Thermomix w Gostyniu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gostyń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gostyniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gostynia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Gostyń i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gostyniu – jak wygląda prezentacja?",
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
      id: "kampania",
      heading: "Kilka tygodni w roku, kiedy dom działa zupełnie inaczej",
      paragraphs: [
        "W Gostyniu jesienią zaczyna się kampania i przez kilka tygodni wszystko chodzi innym rytmem: zakład nie staje, na polach trwa wybieranie, a drogi żyją burakiem. Potem to się kończy i życie wraca do zwykłego trybu.",
        "Piszę o tym, bo takich okresów w polskich domach jest więcej i mają wspólną cechę, o której nikt nie mówi: są krótkie, ciężkie i całkowicie przewidywalne. Kampania, żniwa, wykop, remont, sesja, świąteczne dwa tygodnie w handlu. Wiadomo, kiedy przyjdą i mniej więcej ile potrwają.",
        "W kuchni wygląda to zawsze tak samo. Przez te kilka tygodni nikt nie gotuje. Obiad zamienia się w to, co się da odgrzać albo kupić, ktoś je o dwudziestej drugiej, ktoś zabiera kanapki i wraca z nimi nietkniętymi. Po miesiącu wszyscy są zmęczeni bardziej, niż wynikałoby z samej roboty — bo do niej doszło jedzenie byle jak.",
        "I tu jest różnica między takim okresem a stałym trybem pracy: skoro wiadomo z góry, kiedy się zacznie, to da się do tego przygotować. To jest jedyna sytuacja, w której gotowanie z zapasem naprawdę ma sens.",
        "Praktycznie robi się to tak. Na tydzień przed zaczyna się robić podwójne porcje tego, co i tak się gotuje, i odkładać połowę do zamrażarki. Nie chodzi o dwadzieścia pudełek — wystarczy sześć czy osiem obiadów, które przetrwają najgorszy tydzień. Do tego dwa albo trzy wywary i sos, z których w kwadrans robi się resztę.",
        "Rola urządzenia jest w tym konkretna: to gotowanie odbywa się bez stania przy garnku, więc daje się je zrobić wieczorem przy okazji innych rzeczy, a nie w wolną niedzielę, której i tak nie ma. Zupa, sos i wywar powstają jedno po drugim w tym samym naczyniu.",
        "A po kampanii wszystko wraca do normy — i to jest chyba najlepsza wiadomość w całej tej historii.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gostyniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was trwa właśnie taki gorący okres, powiedz o tym — umówimy się po nim albo na porę, która nie wchodzi Wam w drogę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gostyniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gostyńskiej rodziny",
      paragraphs: [
        "Przez większość roku obiad powstaje w oknie między pracą, szkołą i wieczorem, a przez kilka tygodni w roku nie powstaje prawie wcale.",
        "Thermomix pomaga w obu tych trybach z tego samego powodu: nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujecie się czymś innym.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Gostyń",
    "Kunowo",
    "Brzezie",
    "Daleszyn",
    "Sikorzyn",
    "Stara Krobia",
    "Bogusławki",
    "Czachorowo",
    "Dusina",
    "Malewo",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Krobia, Poniec, Krotoszyn i Borek Wielkopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krobia", "Poniec", "Krotoszyn", "Borek Wielkopolski", "Miejska Górka", "Dolsk"],

  about: blokOMnie("do Gostynia", "w gminie Gostyń i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gostynia bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gostyniu"),
    {
      question: "U nas przez kilka tygodni w roku nikt nie gotuje. Da się to jakoś przygotować?",
      answer:
        "Da się i to jest jedyna sytuacja, w której gotowanie z zapasem naprawdę ma sens — bo wiadomo z góry, kiedy się zacznie. Na tydzień wcześniej warto robić podwójne porcje tego, co i tak gotujecie, i odkładać połowę: sześć czy osiem obiadów plus dwa wywary i sos wystarczą na najgorszy tydzień.",
    },
    {
      question: "Kiedy najlepiej umówić spotkanie?",
      answer:
        "Nie w środku takiego okresu. Powiedz przy umawianiu, że u Was właśnie trwa, a zaproponuję termin po nim albo porę, która nie wchodzi Wam w drogę — spotkanie trwa około godziny i nie ma sensu wciskać go na siłę.",
    },
  ],

  geo: { lat: 51.8792, lng: 17.0125 },
};
