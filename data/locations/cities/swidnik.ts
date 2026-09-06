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
 * ŚWIDNIK — miasto zbudowane wraz z zakładem lotniczym, dziś praktycznie
 * zrośnięte z Lublinem; tu leży też lotnisko obsługujące region.
 * W historii miasta zapisał się „spacer świdnicki" z 1982 roku, kiedy
 * mieszkańcy umówili się, żeby o jednej porze wychodzić na ulice.
 *
 * KĄT: wspólna godzina. Fakt historyczny podaję krótko i rzeczowo, bez
 * politycznego komentarza i bez robienia z niego metafory na siłę — ale
 * daje on jedno naturalne przejście: TO BYŁO MIASTO, KTÓRE POTRAFIŁO
 * UMÓWIĆ SIĘ NA JEDNĄ PORĘ. A dziś większość rodzin nie potrafi umówić
 * się na wspólną porę obiadu, i to nie z braku chęci, tylko z powodu
 * grafików.
 *
 * WARUNEK UCZCIWOŚCI: urządzenie nie sprowadza nikogo do stołu i sekcja
 * musi to powiedzieć wprost. Usuwa tylko jedną wymówkę — tę o braku czasu
 * na ugotowanie czegokolwiek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Świdnik powstał i rozwinął się wraz z zakładem lotniczym,
 * — przy mieście działa lotnisko obsługujące region,
 * — w 1982 roku mieszkańcy Świdnika wychodzili o umówionej porze
 *   na spacery; wydarzenie jest w mieście upamiętnione,
 * — miasto sąsiaduje bezpośrednio z Lublinem.
 *
 * CZEGO NIE MA: komentarza politycznego, nazw zakładów, danych
 * o zatrudnieniu, rozkładów lotów.
 */
export const SWIDNIK: CityContent = {
  slug: "swidnik",
  h1: "Thermomix Świdnik – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Świdnik — prezentacja i cena",
  seoDescription:
    "Thermomix w Świdniku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świdnik — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świdniku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świdnika z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Świdnik i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świdniku – jak wygląda prezentacja?",
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
      id: "wspolna-godzina",
      heading: "Miasto, które kiedyś umówiło się na jedną porę",
      paragraphs: [
        "Świdnik powstał razem z zakładem lotniczym i przez dekady żył jego rytmem. W historii miasta jest też rzecz, którą tutejsi znają wszyscy: w tysiąc dziewięćset osiemdziesiątym drugim roku mieszkańcy umówili się, żeby o jednej, tej samej porze wychodzić na ulice. Upamiętnia to dziś tablica. Zostawiam to jednym akapitem, bo opowiadają o tym lepiej ode mnie.",
        "Zaczepia mnie w tym jedna rzecz i jest zupełnie domowa. Całe miasto potrafiło wtedy umówić się na wspólną godzinę. A dzisiaj przeciętna czteroosobowa rodzina nie potrafi umówić się na wspólną godzinę obiadu — i to nie dlatego, że nikomu nie zależy.",
        "Powody są prozaiczne i wszyscy je znają: jedno pracuje na zmiany, drugie wraca z Lublina, dziecko ma zajęcia do siedemnastej, a najmłodsze jest głodne o piętnastej i nie da się przekonać, żeby poczekało. Efekt jest taki, że obiad rozjeżdża się na trzy tury, a osoba, która go zrobiła, je ostatnia i na stojąco.",
        "Powiem wprost, czego to urządzenie nie zrobi: nie posadzi nikogo przy stole. Żaden sprzęt tego nie potrafi i każdy, kto to obiecuje, sprzedaje mrzonkę.",
        "Usuwa natomiast jedną konkretną wymówkę — tę, że nie ma czasu, żeby cokolwiek ugotować. Danie może powstać rano albo poprzedniego wieczoru, bo nie wymaga stania przy nim. Odgrzewanie na parze sprawia, że trzecia tura dostaje to samo, co pierwsza, a nie wysuszoną resztkę. A jeśli w Waszym domu wspólna godzina zdarza się raz w tygodniu, to przynajmniej wtedy nie musi jej zjeść przygotowywanie obiadu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świdniku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość i kilka pasujących terminów — umawiam się także rano i w środku dnia roboczego, jeśli ktoś u Was pracuje w grafiku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świdniku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świdnickiej rodziny",
      paragraphs: [
        "Gdy obiad rozjeżdża się na kilka tur, jedzenie musi powstać wcześniej i przetrwać czekanie — a przygotowuje je zwykle jedna osoba, która je ostatnia.",
        "Thermomix pomaga tym, że nie wymaga obecności, a odgrzewanie na parze nie wysusza. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wtedy, gdy akurat jest czas.",
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

  districtsHeading: "Do których części Świdnika i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Wschód",
    "Osiedle Zachód",
    "Adampol",
    "Brzeziny",
    "Franciszków",
    "Krępiec",
  ],

  nearbyHeading: "Poza Świdnik też przyjadę",
  nearbyParagraphs: [
    "Lublin, Łęczna, Piaski i Lubartów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lublin", "Łęczna", "Piaski", "Lubartów", "Bychawa"],

  about: blokOMnie("do Świdnika", "w Świdniku i okolicy Lublina", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Świdnika bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świdniku"),
    {
      question: "U nas nikt nie je o tej samej porze. Czy to ma wtedy sens?",
      answer:
        "Sens jest wtedy inny, ale realny: danie powstaje wcześniej i czeka, a odgrzewanie na parze sprawia, że ostatnia osoba dostaje to samo, co pierwsza, a nie wysuszoną resztkę. Urządzenie nie posadzi nikogo przy stole — i nikt nie powinien Wam tego obiecywać.",
    },
    {
      question: "Pracuję w grafiku — czy przyjedziesz o nietypowej porze?",
      answer:
        "Tak, łącznie z porankiem i środkiem dnia roboczego. Podajcie kilka terminów z różnych tygodni, a wybiorę z nich.",
    },
  ],

  geo: { lat: 51.2231, lng: 22.6961 },
};
