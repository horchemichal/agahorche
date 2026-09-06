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
 * SKIERNIEWICE — miasto między Łodzią a Warszawą, na linii kolejowej
 * łączącej oba miasta. Działa tu instytut zajmujący się ogrodnictwem,
 * a co roku odbywa się Święto Kwiatów, Owoców i Warzyw. Okolica jest
 * rejonem sadowniczym.
 *
 * KĄT: przechowywanie — a właściwie zdanie, które trzeba powiedzieć
 * głośno: TO URZĄDZENIE NICZEGO NIE KONSERWUJE. Ugotowana potrawa
 * zachowuje się w nim dokładnie tak samo, jak ugotowana w garnku,
 * a przetwory robi się dalej tak, jak się je robiło. W mieście, w którym
 * przechowywanie owoców jest przedmiotem badań, udawanie czegokolwiek
 * innego byłoby po prostu żenujące.
 *
 * TWARDA GRANICA: żadnych instrukcji dotyczących bezpieczeństwa żywności
 * — ile dni, w jakiej temperaturze, jak pasteryzować. To są sprawy,
 * w których błąd może komuś zaszkodzić, a ja nie jestem od tego. Strona
 * mówi wyłącznie: „urządzenie nic tu nie zmienia, róbcie tak, jak dotąd".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Skierniewicach działa instytut zajmujący się ogrodnictwem,
 * — odbywa się tu coroczne Święto Kwiatów, Owoców i Warzyw,
 * — okolica jest rejonem sadowniczym,
 * — miasto leży na linii kolejowej między Łodzią a Warszawą.
 *
 * CZEGO NIE MA: nazwy instytutu, wyników badań, jakichkolwiek zaleceń
 * dotyczących przechowywania i pasteryzacji.
 */
export const SKIERNIEWICE: CityContent = {
  slug: "skierniewice",
  h1: "Thermomix Skierniewice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Skierniewice — prezentacja i cena",
  seoDescription:
    "Thermomix w Skierniewicach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skierniewice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skierniewicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skierniewic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Skierniewice i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skierniewicach – jak wygląda prezentacja?",
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
      id: "nic-nie-konserwuje",
      heading: "Miasto, które bada przechowywanie — więc powiem to wprost",
      paragraphs: [
        "W Skierniewicach działa instytut zajmujący się ogrodnictwem, a raz w roku miasto urządza święto kwiatów, owoców i warzyw. Okolica jest sadownicza, a przechowywanie owoców jest tu przedmiotem badań, nie domysłów. Trudno o lepsze miejsce, żeby powiedzieć głośno rzecz, którą sprzedawcy chętnie zostawiają w domyśle.",
        "To urządzenie niczego nie konserwuje. Ugotowana w nim zupa zachowuje się dokładnie tak samo jak ugotowana w garnku — ani odrobinę dłużej, ani lepiej. Nie pasteryzuje, nie zamyka słoików i nie przedłuża trwałości niczego. Kto twierdzi inaczej, mija się z prawdą.",
        "Nie będę też podawać żadnych zasad, ile co można trzymać ani w jakiej temperaturze. To są sprawy, w których pomyłka może komuś naprawdę zaszkodzić, a ja nie jestem od tego — tutaj wiedzą o tym więcej ode mnie i w domach, i w instytucie. Zostaje więc zdanie proste: przetwory róbcie dalej tak, jak je robicie, i przechowujcie tak, jak dotąd. Urządzenie nic w tej sprawie nie zmienia.",
        "Zmienia natomiast to, co jest przed. Mus, przecier, sok, masa na powidła — wszystko powstaje w jednym naczyniu, z ustawioną temperaturą i mieszaniem, więc nie trzeba stać nad garnkiem i pilnować, żeby nie przywarło. Przy dużej ilości owoców to jest realna różnica w liczbie godzin, a nie w liczbie słoików.",
        "I to jest cała uczciwa oferta w tej sprawie: pomagam przy robocie, a nie przy przechowywaniu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skierniewicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Jeżdżę po mieście i po okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skierniewicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skierniewickiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach ktoś dojeżdża do pracy do Łodzi albo do Warszawy, więc dzień jest długi, a obiad powstaje wtedy, gdy sił jest najmniej.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Widok",
    "Zadębie",
    "Rawka",
    "Balcerów",
    "Halinów",
    "Makowska",
    "Sierakowice",
    "Mokra",
    "Miedniewice",
  ],

  nearbyHeading: "Poza Skierniewice też przyjadę",
  nearbyParagraphs: [
    "Łowicz, Rawa Mazowiecka, Biała Rawska i Głowno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łowicz", "Rawa Mazowiecka", "Biała Rawska", "Głowno", "Stryków"],

  about: blokOMnie("do Skierniewic", "w Skierniewicach i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skierniewic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Skierniewicach"),
    {
      question: "Czy potrawa ugotowana w Thermomixie dłużej się przechowuje?",
      answer:
        "Nie. Zachowuje się dokładnie tak samo jak ugotowana w garnku — urządzenie niczego nie konserwuje i nie przedłuża trwałości. Przechowujcie tak, jak dotąd.",
    },
    {
      question: "Czy zrobię w nim przetwory na zimę?",
      answer:
        "Zrobicie w nim mus, przecier, sok i masę na powidła — bez stania przy garnku i bez pilnowania, żeby nie przywarło. Ale samo zamykanie i pasteryzowanie słoików robicie dalej po swojemu; w tej sprawie urządzenie nic nie zmienia i nie będę doradzać, bo to nie moja dziedzina.",
    },
  ],

  geo: { lat: 51.9536, lng: 20.1533 },
};
