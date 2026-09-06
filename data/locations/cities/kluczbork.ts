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
 * KLUCZBORK — miasto powiatowe na północy województwa, węzeł kolejowy.
 * Działa tu muzeum poświęcone Janowi Dzierżonowi, pszczelarzowi
 * i badaczowi, którego odkrycia zmieniły nowoczesne pszczelarstwo;
 * mieszkał i pracował w okolicy.
 *
 * KĄT: miód — potraktowany praktycznie, a nie folklorystycznie.
 * W okolicy z taką tradycją pszczelarską w niejednym domu stoi wiadro
 * miodu od znajomego pszczelarza i po pół roku jest skrystalizowane
 * na kamień. To jest realny, drobny kłopot kuchenny, o którym nikt
 * nie pisze, a urządzenie ma na niego konkretną odpowiedź: DELIKATNE,
 * KONTROLOWANE PODGRZANIE.
 *
 * OSTROŻNOŚĆ: żadnych twierdzeń zdrowotnych o miodzie, żadnych temperatur
 * podawanych z pamięci, żadnych porad pszczelarskich. Piszę tylko to,
 * co jest zwykłą wiedzą kuchenną: że miodu nie warto gotować, bo traci
 * smak i aromat, i że dlatego liczy się możliwość ustawienia niskiej
 * temperatury zamiast garnka na palniku.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Jan Dzierżon, pszczelarz i badacz, jest patronem muzeum w Kluczborku
 *   i działał w tej okolicy,
 * — Kluczbork jest siedzibą powiatu i węzłem kolejowym,
 * — miód z czasem krystalizuje.
 *
 * CZEGO NIE MA: konkretnych temperatur, właściwości zdrowotnych miodu,
 * porad dotyczących pasiek, dat z życia Dzierżona.
 */
export const KLUCZBORK: CityContent = {
  slug: "kluczbork",
  h1: "Thermomix Kluczbork – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kluczbork — prezentacja i cena",
  seoDescription:
    "Thermomix w Kluczborku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kluczbork — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kluczborku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kluczborka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Bąkowa, Bogacicy, Kujakowic i pozostałych sołectw.",

  highlights: highlightyStandardowe("Kluczbork i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kluczborku – jak wygląda prezentacja?",
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
      id: "wiadro-miodu",
      heading: "Wiadro miodu, które zastygło na kamień",
      paragraphs: [
        "W Kluczborku działa muzeum Jana Dzierżona — pszczelarza, którego obserwacje odmieniły nowoczesne pszczelarstwo, a który pracował właśnie w tej okolicy. Nie będę opowiadać jego historii, bo robi to muzeum i robi to lepiej. Zwrócę uwagę na coś znacznie mniej dostojnego, co z tej tradycji wynika w tutejszych kuchniach.",
        "W okolicy, w której pszczelarstwo jest zwyczajną częścią krajobrazu, w bardzo wielu domach stoi wiadro albo słój miodu od znajomego. A po kilku miesiącach ten miód jest twardy jak kamień, łyżka się w nim nie mieści, i zaczyna się kombinowanie: garnek z wodą, kaloryfer, kuchenka nastawiona „na chwilę”, po której miód robi się zbyt gorący i traci to, za co się go lubi.",
        "To jest drobny kłopot, ale wraca co roku i nikt o nim nie pisze. Urządzenie ma na niego prostą odpowiedź: da się w nim ustawić niską temperaturę i po prostu ją utrzymać, zamiast pilnować garnka i zgadywać. Miód wraca do stanu, w którym da się go nabrać, bez doprowadzania go do wrzenia.",
        "Nie będę przy tym opowiadać o właściwościach zdrowotnych, bo się na tym nie znam i nie jest to moja rola. Mówię tylko o rzeczy kuchennej i powszechnie znanej: miodu nie warto gotować, bo po prostu przestaje smakować tak, jak powinien.",
        "Poza tym miód wchodzi tu naturalnie tam, gdzie i tak bywa: w cieście, w piernikach, w sosie do mięsa, w marynacie. Wszystko to urządzenie robi w jednym naczyniu, więc nie zostaje po tym pięciu lepkich rzeczy do umycia — a kto raz mył blender po miodzie, ten wie, że to nie jest drobiazg.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kluczborku?",
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
    sekcjaCena("w Kluczborku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kluczborskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Kluczbork",
    "Ligota Dolna",
    "Ligota Górna",
    "Kujakowice Dolne",
    "Kujakowice Górne",
    "Bąków",
    "Krzywizna",
    "Bogacica",
    "Biadacz",
    "Gotartów",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Wołczyn, Byczyna, Namysłów i Praszka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wołczyn", "Byczyna", "Namysłów", "Praszka", "Opole"],

  about: blokOMnie("do Kluczborka", "w gminie Kluczbork i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kluczborka bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kluczborku"),
    {
      question: "Czy da się w tym rozpuścić skrystalizowany miód?",
      answer:
        "Tak — ustawiasz niską temperaturę i urządzenie ją utrzymuje, zamiast Cię zmuszać do pilnowania garnka z wodą. Chodzi o to, żeby miodu nie zagotować, bo wtedy traci smak. Pokażę Ci to na spotkaniu, jeśli akurat masz taki słój w domu.",
    },
    {
      question: "Czy urządzenie ma jakiś specjalny program do miodu?",
      answer:
        "Nie i nie potrzebuje. Ustawia się po prostu temperaturę i czas, tak samo jak przy innych potrawach. Wolę powiedzieć to wprost, niż udawać, że jest do tego osobna funkcja.",
    },
  ],

  geo: { lat: 50.9736, lng: 18.2178 },
};
