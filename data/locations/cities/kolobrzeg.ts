import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * KOŁOBRZEG — nadmorskie uzdrowisko i port, miasto, w którym bardzo wiele
 * osób pracuje w gastronomii i w hotelarstwie, przez trzy miesiące
 * po kilkanaście godzin dziennie.
 *
 * KĄT: praca przy jedzeniu. To jest jedyne miejsce w serwisie dla osoby,
 * która ZAWODOWO GOTUJE DLA OBCYCH, a w domu nie chce widzieć kuchni.
 * Kucharz, kelnerka, pomoc kuchenna, piekarz — po dwunastu godzinach
 * przy jedzeniu własny obiad jest ostatnią rzeczą, na którą jest siła.
 *
 * SEKCJA MA MIEĆ TEZĘ ODWROTNĄ DO OCZEKIWANEJ. Wydawałoby się, że komuś
 * z branży nie trzeba sprzętu do gotowania. Tymczasem to właśnie te osoby
 * jedzą w sezonie najgorzej w całym mieście — i to dla nich urządzenie,
 * które gotuje bez ich udziału, ma sens najbardziej dosłowny.
 *
 * ROZGRANICZENIE. Karpacz mówi o gospodarzu kwatery (właściciel, skala,
 * własny posiłek). Tutaj chodzi o PRACOWNIKA gastronomii — kogoś, kto
 * gotuje cudze jedzenie za pieniądze i wraca do domu wypalony.
 *
 * CZEGO NIE MA: sugestii, że urządzenie nadaje się do pracy zawodowej
 * w lokalu — nie nadaje się i mówi o tym już strona Malborka.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kołobrzeg jest uzdrowiskiem i portem, żyje w dużej mierze z turystyki
 *   i ma silny sezon letni.
 */
export const KOLOBRZEG: CityContent = {
  slug: "kolobrzeg",
  h1: "Thermomix Kołobrzeg – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kołobrzeg — prezentacja i cena",
  seoDescription:
    "Thermomix w Kołobrzegu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kołobrzeg — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kołobrzegu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kołobrzegu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kołobrzeg i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kołobrzegu – jak wygląda prezentacja?",
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
      id: "praca-przy-jedzeniu",
      heading: "Dla tych, którzy w sezonie gotują dla wszystkich oprócz siebie",
      paragraphs: [
        "W Kołobrzegu przez trzy miesiące bardzo wiele osób pracuje przy jedzeniu: w kuchni, na sali, przy piecu, przy zmywaku. Ta strona jest właśnie dla nich i zaczyna się od obserwacji, która brzmi przewrotnie: to Wy jecie w sezonie najgorzej w całym mieście.",
        "Nie jest to żadna tajemnica dla nikogo z branży. Po dwunastu godzinach przy cudzym jedzeniu własny obiad jest ostatnią rzeczą, na którą jest siła. Je się to, co zostało w pracy, albo coś kupionego po drodze o dwudziestej trzeciej, albo nic — a potem cały cykl powtarza się nazajutrz. Do września nikt nie ma na to pomysłu, bo pomysł wymagałby energii, której nie ma.",
        "Wydawałoby się, że komuś, kto gotuje zawodowo, sprzęt do gotowania jest niepotrzebny. Moim zdaniem jest odwrotnie i to jest cała teza tej strony. Nie potrzebujecie pomocy w gotowaniu — potrzebujecie tego, żeby posiłek powstał, kiedy Was przy tym nie ma i kiedy nie macie już ochoty patrzeć na garnek.",
        "Praktycznie wygląda to tak: nastawiacie rano, przed wyjściem, coś, co się nie zepsuje i co da się zjeść po powrocie. Zupa, gulasz, kasza z warzywami, danie jednogarnkowe. Urządzenie gotuje bez pilnowania i wyłącza się samo. Po powrocie jest ciepły, normalny posiłek zamiast decyzji, której nie chce się podejmować.",
        "Zaznaczam jasno jedną rzecz, żeby nie było nieporozumień: to nie jest sprzęt do pracy w lokalu i nie zastąpi Wam niczego w zakładzie. Naczynie mieści około dwóch litrów, więc to jest urządzenie do domu i do własnego jedzenia. O tym, gdzie leży granica przy pracy zarobkowej, piszę osobno.",
        "I rzecz, którą powtórzę, bo w tej branży bywa potrzebna: prezentacja trwa godzinę i można ją umówić poza sezonem albo w dzień wolny. Nie zabiorę Wam wieczoru w lipcu, jeśli lipiec to u Was najgorszy możliwy miesiąc.",
      ],
      links: [{ href: "/thermomix/malbork", label: "Gdzie leży granica przy pracy zarobkowej" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kołobrzegu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pracujesz sezonowo, powiedz to — umówimy się poza szczytem albo w dzień wolny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kołobrzegu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kołobrzeskiej rodziny",
      paragraphs: [
        "W domu, który pracuje sezonowo, obiad przez trzy miesiące praktycznie nie powstaje — a przez pozostałe dziewięć robi go zwykle jedna osoba.",
        "Thermomix pomaga w obu tych trybach z tego samego powodu: nie wymaga obecności. Nastawiasz przed wyjściem i wracasz do gotowego, bo urządzenie wyłącza się samo.",
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

  districtsHeading: "Do których części Kołobrzegu i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Uzdrowisko",
    "Podczele",
    "Radzikowo",
    "Lęborskie",
    "Ogrody",
    "Zachód",
    "Bogucino",
    "Grzybowo",
    "Dźwirzyno",
  ],

  nearbyHeading: "Poza Kołobrzeg też przyjadę",
  nearbyParagraphs: [
    "Gryfice, Karlino, Białogard i Trzebiatów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gryfice", "Karlino", "Białogard", "Trzebiatów", "Dziwnów"],

  about: blokOMnie("do Kołobrzegu", "w Kołobrzegu i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kołobrzegu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kołobrzegu"),
    {
      question: "Pracuję w gastronomii. Po co mi sprzęt do gotowania w domu?",
      answer:
        "Właśnie dlatego, że gotujesz zawodowo. Nie chodzi o pomoc w gotowaniu, tylko o to, żeby posiłek powstał wtedy, gdy Cię przy nim nie ma i gdy nie chcesz już patrzeć na garnek. Nastawiasz rano przed wyjściem, urządzenie wyłącza się samo, a po powrocie jest ciepły obiad zamiast decyzji, której nie chce się podejmować.",
    },
    {
      question: "Czy przyda mi się w pracy, w lokalu?",
      answer:
        "Nie i nie będę tego sugerować — naczynie mieści około dwóch litrów, więc to jest sprzęt domowy. Prezentację można za to spokojnie umówić poza sezonem albo w dzień wolny; nie zabiorę Ci wieczoru w lipcu.",
    },
  ],

  geo: { lat: 54.1758, lng: 15.5836 },
};
