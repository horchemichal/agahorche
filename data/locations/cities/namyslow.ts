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
 * NAMYSŁÓW — miasto na północy województwa, z zachowanymi murami miejskimi
 * i zamkiem, w którym od stuleci warzy się piwo; tutejszy browar należy
 * do najstarszych w Polsce.
 *
 * KĄT: czego nie da się przyspieszyć. Warzenie i fermentacja to procesy,
 * które trwają tyle, ile trwają, i żadne urządzenie tego nie skraca.
 * W mieście, które od setek lat żyje z czekania na fermentację, mogę
 * napisać sekcję o TYCH CZYNNOŚCIACH W KUCHNI, KTÓRYCH THERMOMIX NIE
 * PRZYSPIESZY: zakwas, kiszonki, wyrastanie ciasta, dojrzewanie.
 *
 * ROZGRANICZENIE WOBEC JĘDRZEJOWA. Tam kąt brzmiał „urządzenie najczęściej
 * nie gotuje szybciej — oszczędza uwagę, nie minuty" i dotyczył pojedynczego
 * dania. Tu chodzi o coś innego: o procesy trwające DNI, w których czas
 * jest składnikiem, a nie kosztem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Namysłowie od stuleci warzy się piwo, a tutejszy browar należy
 *   do najstarszych w Polsce,
 * — zachowały się mury miejskie i zamek,
 * — fermentacja jest procesem wymagającym czasu.
 *
 * CZEGO NIE MA: przepisów na piwo, dat, nazw marek, jakichkolwiek treści
 * o alkoholu poza jednym zdaniem o historii miasta.
 */
export const NAMYSLOW: CityContent = {
  slug: "namyslow",
  h1: "Thermomix Namysłów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Namysłów — prezentacja i cena",
  seoDescription:
    "Thermomix w Namysłowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Namysłów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Namysłowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Namysłowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Namysłów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Namysłowie – jak wygląda prezentacja?",
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
      id: "czego-nie-da-sie-przyspieszyc",
      heading: "Miasto, które od wieków czeka na fermentację",
      paragraphs: [
        "W Namysłowie od stuleci warzy się piwo, a tutejszy browar należy do najstarszych w Polsce. Nie będę o tym pisać więcej, bo nie jest to temat tej strony — zwrócę uwagę tylko na jedno: w tym fachu nie da się niczego przyspieszyć. Fermentacja trwa tyle, ile trwa, i żadne urządzenie tego nie zmieni.",
        "Warto to przenieść do kuchni, bo w rozmowach o Thermomixie ta granica bywa zacierana. Są w gotowaniu rzeczy, w których czas nie jest kosztem, tylko składnikiem — i tych urządzenie nie skraca ani o minutę.",
        "Nie przyspieszy zakwasu. Nie zrobi kiszonek szybciej, bo kiszenie to nie gotowanie, tylko czekanie. Nie skróci wyrastania ciasta drożdżowego — może je wyrobić i utrzymać w cieple, ale drożdże pracują we własnym tempie. Nie zrobi z młodego sera dojrzewającego, nie zamarynuje mięsa w kwadrans i nie sprawi, że wywar będzie miał głębię po dziesięciu minutach.",
        "Ktoś, kto sprzedaje to inaczej, sprzedaje bajkę — a klientka, która kupiła w takim przekonaniu, będzie rozczarowana już przy pierwszym cieście.",
        "Co robi naprawdę: skraca tę część, w której trzeba stać, mieszać i pilnować. Wyrabianie ciasta zamiast dziesięciu minut przy misce. Podgrzewanie do zadanej temperatury bez termometru. Zupa czy sos gotujące się bez Was. To jest cała, uczciwa oferta — pomoc przy robocie, a nie przy czasie, który i tak musi upłynąć.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Namysłowie?",
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
    sekcjaCena("w Namysłowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla namysłowskiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
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
    "Namysłów",
    "Kowalowice",
    "Smarchowice Wielkie",
    "Ligota Książęca",
    "Bukowa Śląska",
    "Głuszyna",
    "Jastrzębie",
    "Kamienna",
    "Michalice",
    "Nowy Świat",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Wołczyn, Kluczbork, Byczyna i Brzeg są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wołczyn", "Kluczbork", "Byczyna", "Brzeg", "Opole"],

  about: blokOMnie("do Namysłowa", "w gminie Namysłów i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Namysłowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Namysłowie"),
    {
      question: "Czy ciasto drożdżowe wyrośnie szybciej?",
      answer:
        "Nie. Drożdże pracują we własnym tempie i urządzenie tego nie zmienia. Skraca za to samo wyrabianie — zamiast dziesięciu minut przy misce i mąki na rękach — i potrafi utrzymać ciasto w stałej, ciepłej temperaturze.",
    },
    {
      question: "A zakwas albo kiszonki?",
      answer:
        "Tego też nie przyspieszy, bo kiszenie i zakwas to czekanie, a nie gotowanie. Jeśli ktoś obiecuje inaczej, sprzedaje bajkę. Urządzenie pomaga przy tej części, w której trzeba stać i mieszać — a nie przy tej, która musi po prostu upłynąć.",
    },
  ],

  geo: { lat: 51.0756, lng: 17.7203 },
};
