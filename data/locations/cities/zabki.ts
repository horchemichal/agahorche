import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * ZĄBKI — jedno z najgęściej zaludnionych miast w Polsce, tuż przy granicy
 * Warszawy, zabudowane blokami niemal na całej powierzchni. Ludzie
 * mieszkają tu bardzo blisko siebie.
 *
 * KĄT: prezentacja dla kilku osób naraz. „A mogę zaprosić koleżanki?" —
 * pytanie, które w takim mieście pada naturalnie, a którego konsekwencji
 * nikt nigdy nie wyjaśnia.
 *
 * SEKCJA MA POWIEDZIEĆ, CO SIĘ ZMIENIA, I ZROBIĆ TO W OBIE STRONY:
 * — CO ZYSKUJECIE: więcej pytań, bo każda osoba pyta o co innego,
 *   i mniej krępacji, bo nikt nie jest sam na sam ze sprzedawcą,
 * — CO TRACICIE, i to jest ważniejsze: spotkanie przestaje być o WASZEJ
 *   kuchni. Nie gotujemy pod Wasze smaki, nie oglądamy Waszego blatu
 *   i nie ma miejsca na pytanie zadane półgłosem,
 * — I RZECZ NAJPOWAŻNIEJSZA: w grupie działa presja. Kiedy dwie osoby
 *   mówią „biorę", trzeciej trudniej powiedzieć „nie" — i to jest
 *   mechanizm korzystny dla SPRZEDAWCY, nie dla kupujących.
 *
 * OBOWIĄZKOWA DEKLARACJA: Aga mówi, jak temu przeciwdziała — nie zbiera
 * decyzji przy grupie, tylko rozmawia z każdą osobą osobno albo później.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH KORZYŚCI ZA ZORGANIZOWANIE SPOTKANIA. Nie wiem, jakie
 *   warunki obowiązują, i nie wolno mi ich wymyślać ani sugerować.
 * — NIE ODMAWIAM takich spotkań i nie zniechęcam do nich. Opisuję,
 *   co się zmienia, i zostawiam wybór.
 *
 * ROZGRANICZENIE. Poznań rozbiera POKAZ TARGOWY (obcy format, obce
 * miejsce), Rumia — POLECENIE od znajomej jako podstawę decyzji. Tutaj
 * chodzi o prezentację u kogoś w domu z kilkoma osobami naraz.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ząbki są jednym z najgęściej zaludnionych miast w Polsce i graniczą
 *   z Warszawą.
 */
export const ZABKI: CityContent = {
  slug: "zabki",
  h1: "Thermomix Ząbki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ząbki — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ząbkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ząbki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ząbkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ząbek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Ząbki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Spotkanie w cztery oczy jest o Waszej kuchni. W grupie robi się z tego co innego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ząbkach – jak wygląda prezentacja?",
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
      id: "spotkanie-w-grupie",
      heading: "Miasto, w którym wszyscy mieszkają blisko — i pytanie „a mogę zaprosić koleżanki?”",
      paragraphs: [
        "Ząbki są jednym z najgęściej zaludnionych miast w Polsce: ludzie mieszkają tu bardzo blisko siebie i znają się z klatki, z placu zabaw, ze szkoły. Dlatego akurat tutaj pada często pytanie, które gdzie indziej pojawia się rzadziej: czy mogę zaprosić na to spotkanie kilka osób. Odpowiedź brzmi tak — ale należy się Wam wyjaśnienie, co się przez to zmienia, bo nikt tego nie mówi.",
        "Zacznę od tego, co zyskujecie, bo to jest realne. Pytań pada więcej i są lepsze, bo każda osoba pyta o co innego — jedna o ciasto, druga o mycie, trzecia o ratę. Znika też trochę krępacji: nikt nie siedzi sam na sam ze sprzedawcą, a to dla części osób ma znaczenie.",
        "Teraz to, co tracicie, i moim zdaniem waży więcej. Spotkanie przestaje być o Waszej kuchni. Nie gotujemy pod Wasze smaki, tylko pod wspólny mianownik. Nie oglądamy Waszego blatu ani nie sprawdzamy, czy pokrywa otworzy się pod Waszą szafką. I nie ma miejsca na pytanie zadane półgłosem — a to zwykle są najważniejsze pytania, te o pieniądze i o to, czy w ogóle warto.",
        "Jest jeszcze trzecia rzecz i o niej muszę powiedzieć wprost, chociaż działa przeciwko mnie. W grupie działa presja. Kiedy dwie osoby przy stole mówią „biorę”, trzeciej jest wyraźnie trudniej powiedzieć „nie” — i to nie jest kwestia charakteru, tylko tego, jak ludzie zachowują się w grupie. Ten mechanizm jest korzystny dla sprzedawcy i byłoby nieuczciwe udawać, że go nie ma.",
        "Dlatego robię przy takich spotkaniach jedną rzecz: nie zbieram decyzji przy wszystkich. Liczby podaję dla całej grupy, ale rozmowę o tym, czy ktoś kupuje, prowadzę osobno — na boku albo następnego dnia przez telefon. Nikt nie musi ogłaszać przy koleżankach, czy go stać i czy się decyduje.",
        "I rzecz, której tu nie znajdziecie: nie obiecuję żadnych korzyści za zorganizowanie takiego spotkania. Nie wiem, jakie warunki obowiązują, a wymyślanie ich byłoby obietnicą, której mogłabym nie dotrzymać. Jeśli to dla Was istotne — zapytajcie, sprawdzę i odpowiem konkretnie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ząbkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Napisz od razu, ile osób ma być — przy grupie inaczej dobieram dania i inaczej planuję czas.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ząbkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ząbkowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Warszawy.",
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

  districtsHeading: "Do których części Ząbek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Drewnica",
    "Nowe Ząbki",
    "Wilcza Łąka",
    "Bajkowa",
    "Szwoleżerów",
    "Sosnowa",
    "Powstańców",
    "Jana Pawła II",
    "Batorego",
  ],

  nearbyHeading: "Poza Ząbki też przyjadę",
  nearbyParagraphs: [
    "Marki, Zielonka, Kobyłka i Wołomin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Marki", "Zielonka", "Kobyłka", "Wołomin", "Warszawa", "Radzymin"],

  about: blokOMnie("do Ząbek", "w Ząbkach i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ząbek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ząbkach"),
    {
      question: "Czy mogę zaprosić na prezentację koleżanki?",
      answer:
        "Tak, ale warto wiedzieć, co się przez to zmienia. Pytań pada więcej i są lepsze, bo każda osoba pyta o co innego. Za to spotkanie przestaje być o Waszej kuchni: nie gotujemy pod Wasze smaki, nie sprawdzamy Waszego blatu i nie ma miejsca na pytanie zadane półgłosem.",
    },
    {
      question: "Czy w grupie nie ma presji, żeby kupić?",
      answer:
        "Jest i byłoby nieuczciwe temu zaprzeczać — kiedy dwie osoby mówią „biorę”, trzeciej trudniej powiedzieć „nie”. Dlatego przy takich spotkaniach nie zbieram decyzji przy wszystkich: liczby podaję dla całej grupy, a rozmowę o zakupie prowadzę osobno albo następnego dnia przez telefon.",
    },
  ],

  geo: { lat: 52.2907, lng: 21.1114 },
};
