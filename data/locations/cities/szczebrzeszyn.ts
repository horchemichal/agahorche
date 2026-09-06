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
 * SZCZEBRZESZYN — miasteczko u wrót Roztocza, którego nazwę zna w Polsce
 * każdy, bo pojawia się w najsłynniejszym polskim łamańcu językowym.
 * Stoi tu pomnik chrząszcza, a co roku odbywa się festiwal literacki.
 *
 * KĄT: nazwa, która jest dowcipem, i miejsce, które jest prawdziwe.
 * A stąd — jedyna na całej stronie rozmowa o tym, że THERMOMIX TEŻ JEST
 * DLA WIELU OSÓB DOWCIPEM: skrótem myślowym o zamożnej sąsiadce, memem
 * o wydawaniu pieniędzy. Pod tym żartem prawie zawsze siedzi prawdziwe
 * pytanie o pieniądze — i to pytanie trzeba wyciągnąć na wierzch,
 * a nie udawać, że go nie ma.
 *
 * TON: bez obrażania się na żart i bez udawania, że sprzęt jest tani.
 * Sekcja ma się skończyć zdaniem, że nie warto kupować tego, żeby zrobić
 * na kimkolwiek wrażenie — i to zdanie jest tu najważniejsze.
 *
 * ŻADNYCH KWOT I ŻADNEGO RRSO. Warunki finansowania są w osobnej sekcji
 * i pochodzą z oficjalnych materiałów.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — nazwa Szczebrzeszyna występuje w najbardziej znanym polskim łamańcu
 *   językowym, a w mieście stoi pomnik chrząszcza,
 * — odbywa się tu coroczny festiwal literacki,
 * — miasteczko leży u wrót Roztocza, niedaleko Zamościa i Zwierzyńca,
 * — zachowała się tu dawna synagoga i stara zabudowa.
 *
 * CZEGO NIE MA: cytowania łamańca w całości, statystyk o klientach,
 * jakichkolwiek liczb finansowych.
 */
export const SZCZEBRZESZYN: CityContent = {
  slug: "szczebrzeszyn",
  h1: "Thermomix Szczebrzeszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Szczebrzeszyn — prezentacja i cena",
  seoDescription:
    "Thermomix w Szczebrzeszynie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczebrzeszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczebrzeszynie. Prezentacja i dojazd bezpłatne, rozmowa o cenie bez owijania.",

  lead:
    "Przyjeżdżam do Szczebrzeszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Brodów, Bodaczowa, Wielączy i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Szczebrzeszyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczebrzeszynie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "nazwa-ktora-jest-dowcipem",
      heading: "Nazwa, którą wszyscy znają z dowcipu",
      paragraphs: [
        "Szczebrzeszyn ma sytuację, jakiej nie ma żadne inne miasto w Polsce: jego nazwę zna każdy, a mało kto był tu na dłużej niż postój. Nazwa funkcjonuje jako łamaniec, jako żart, jako coś, co się recytuje dzieciom. Miasteczko pod spodem jest zupełnie zwyczajne i całkiem ładne, ale mało kogo to zdążyło zainteresować, bo dowcip zawsze przychodzi pierwszy.",
        "Napiszę więc rzecz, która mnie samej dotyczy. Z Thermomixem jest dokładnie tak samo. To słowo w Polsce też bywa dowcipem — skrótem myślowym o sąsiadce, która ma za dużo pieniędzy, żartem o wydawaniu na sprzęt tyle co na używane auto. Znam te żarty, słyszałam wszystkie i nie mam zamiaru się na nie obrażać.",
        "Powiem tylko, co pod nimi zwykle siedzi. Pod żartem o cenie prawie zawsze siedzi prawdziwe pytanie o pieniądze — i to jest dobre pytanie, tylko rzadko zadane wprost. Bo o pieniądzach mówi się u nas trudno, a łatwiej rzucić żartem niż zapytać „czy mnie na to stać i czy to nie głupota”.",
        "Więc odpowiadam na to pytanie, zanim padnie. Tak, to jest drogi sprzęt — nie „inwestycja”, nie „prezent dla siebie”, po prostu drogi. Nie, nie trzeba mieć wysokich zarobków, żeby go kupić: większość osób bierze go na raty i o warunkach mówię wprost na spotkaniu, z oficjalnych materiałów, bez zaokrąglania w swoją stronę.",
        "I najważniejsze. Nie warto kupować tego, żeby zrobić na kimkolwiek wrażenie. Urządzenie stojące na blacie po to, żeby ktoś je zobaczył, jest najdroższą możliwą dekoracją. Warto je kupić tylko wtedy, gdy realnie skróci Wam wieczory — a czy skróci, poznacie w ciągu godziny, w swojej kuchni, i nic to nie kosztuje.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczebrzeszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczebrzeszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szczebrzeszyńskiej rodziny",
      paragraphs: [
        "Obiad jest tu zwykle jednym wspólnym posiłkiem dnia, gotowanym często z własnych produktów — a przygotowuje go ta sama osoba, przez cały rok.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie kilku naczyń po jednym daniu. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, więc może dziać się bez Was.",
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
    "Szczebrzeszyn",
    "Brody Duże",
    "Brody Małe",
    "Bodaczów",
    "Kawęczyn",
    "Niedzieliska",
    "Wielącza",
    "Klemensów",
    "Błonie",
    "Rozłopy",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Zamość, Zwierzyniec, Biłgoraj, Frampol i Krasnobród są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zamość", "Zwierzyniec", "Biłgoraj", "Frampol", "Krasnobród", "Tomaszów Lubelski"],

  about: blokOMnie("do Szczebrzeszyna", "w gminie i na Roztoczu", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczebrzeszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Szczebrzeszynie"),
    {
      question: "Szczerze: czy to nie jest sprzęt dla bogatych?",
      answer:
        "Jest drogi i nie będę tego owijać. Ale kupują go zwykle osoby, które po prostu dużo gotują — najczęściej na raty, o warunkach mówię wprost na spotkaniu. Jeśli w Waszym domu gotuje się rzadko, powiem, że to się nie obroni, zamiast Was przekonywać.",
    },
    {
      question: "Nie chcę, żeby ludzie myśleli, że się popisuję. Ma to sens?",
      answer:
        "Tylko wtedy, gdy realnie ułatwi Wam wieczory — do popisywania się to najdroższa możliwa dekoracja. Prezentacja jest bezpłatna i niezobowiązująca, a odmowa po niej jest zupełnie normalną odpowiedzią.",
    },
  ],

  geo: { lat: 50.6969, lng: 22.9744 },
};
