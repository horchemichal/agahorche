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
 * LEGNICA — jedno z największych miast regionu, z Akademią Rycerską
 * i zamkiem Piastów. Pod miastem leży Legnickie Pole, znane z bitwy
 * z 1241 roku — jednej z tych dat, które w Polsce zna każdy, choć mało
 * kto potrafi powiedzieć cokolwiek o reszcie dziejów miasta.
 *
 * KĄT: jedno danie, które umiesz świetnie — i cała reszta tygodnia.
 * Miasto znane z jednej daty jest jedynym właściwym miejscem na sekcję
 * o zjawisku, które widzę w co drugiej kuchni: KAŻDY MA SWÓJ POPISOWY
 * OBIAD, ROBIONY OD LAT I ROBIONY DOBRZE — a problemem nigdy nie jest
 * ten obiad, tylko sześć pozostałych dni.
 *
 * WNIOSEK, KTÓRY MUSI PAŚĆ: nie przyjeżdżam poprawiać popisowego dania.
 * Ono nie wymaga poprawy i nie o nie chodzi. Chodzi o wtorek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — pod Legnicą, na Legnickim Polu, rozegrała się w 1241 roku bitwa
 *   z Mongołami,
 * — w Legnicy zachowała się Akademia Rycerska i zamek Piastów.
 *
 * CZEGO NIE MA: opisu bitwy, historii wojskowej miasta po 1945 roku,
 * ocen politycznych.
 */
export const LEGNICA: CityContent = {
  slug: "legnica",
  h1: "Thermomix Legnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Legnica — prezentacja i cena",
  seoDescription:
    "Thermomix w Legnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Legnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Legnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Legnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Legnica i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Legnicy – jak wygląda prezentacja?",
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
      id: "jedno-danie-i-reszta-tygodnia",
      heading: "Miasto znane z jednej daty — i kuchnia znana z jednego dania",
      paragraphs: [
        "Legnicę cała Polska kojarzy z jedną datą: z bitwą na Legnickim Polu. O reszcie tutejszych dziejów, o zamku, o Akademii Rycerskiej, przeciętny człowiek nie powie już nic — choć trwały one setki lat dłużej niż jeden dzień pod miastem.",
        "Piszę o tym, bo z kuchniami jest identycznie. Prawie w każdym domu, do którego przyjeżdżam, jest jedno danie robione od lat i robione naprawdę dobrze. U jednych to rosół, u innych bigos, gołąbki, sernik albo pierogi. To danie ma swoją wersję, swoje sztuczki i swoją historię, a osoba, która je robi, nie potrzebuje ode mnie żadnej rady.",
        "Zdarza mi się słyszeć na wstępie: „ja robię świetny rosół, po co mi to urządzenie”. I to jest uczciwa uwaga, na którą mam uczciwą odpowiedź: rzeczywiście — po nic. Nie przyjeżdżam poprawiać Waszego popisowego dania. Ono nie wymaga poprawy i nie o nie chodzi.",
        "Chodzi o pozostałe sześć dni. O wtorek, kiedy nikomu się nie chce i kończy się na kanapkach. O czwartek, kiedy obiad składa się z tego, co zostało z niedzieli, po raz trzeci. O środę, gdy trzeba coś zrobić w czterdzieści minut, więc robi się makaron z serem, bo to jedyne, co się mieści w tym czasie.",
        "Właśnie tam urządzenie robi różnicę, i tylko tam. Zupa, sos, danie jednogarnkowe, ciasto na kolację do herbaty — rzeczy niebędące niczyim popisem, ale zajmujące w sumie znacznie więcej wieczorów niż rosół.",
        "Dlatego na spotkaniu proszę o coś nietypowego: nie gotujmy tego, co Wam wychodzi najlepiej. Ugotujmy to, co robicie w środę, kiedy nie ma czasu. Dopiero to coś pokaże.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Legnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy okazji, co jecie w te wieczory, kiedy nikomu się nie chce gotować. To właśnie chcę zobaczyć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Legnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla legnickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga najbardziej przy tych zwykłych dniach: danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Legnicy i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Tarninów",
    "Kartuzy",
    "Piekary",
    "Zosinek",
    "Bielany",
    "Kwiatkowice",
    "Ludwikowo",
    "Przybków",
  ],

  nearbyHeading: "Poza Legnicę też przyjadę",
  nearbyParagraphs: [
    "Lubin, Jawor, Chojnów, Złotoryja i Prochowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubin", "Jawor", "Chojnów", "Złotoryja", "Prochowice", "Polkowice"],

  about: blokOMnie("do Legnicy", "w Legnicy i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Legnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Legnicy"),
    {
      question: "Gotuję świetny rosół. Po co mi takie urządzenie?",
      answer:
        "Do rosołu po nic — i nie przyjeżdżam poprawiać dania, które robicie od lat. Chodzi o pozostałe sześć dni: wtorek, kiedy nikomu się nie chce, i środę, gdy obiad musi powstać w czterdzieści minut. Tam różnica jest realna.",
    },
    {
      question: "Co najlepiej ugotować na spotkaniu?",
      answer:
        "Nie to, co Wam wychodzi najlepiej, tylko to, co robicie w środę, kiedy nie ma czasu. Popisowe danie i tak wyjdzie; dopiero zwykły obiad pokaże, czy urządzenie coś Wam realnie skróci.",
    },
  ],

  geo: { lat: 51.2070, lng: 16.1553 },
};
