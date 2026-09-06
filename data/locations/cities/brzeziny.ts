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
 * BRZEZINY — małe miasto pod Łodzią, przez pokolenia ośrodek krawiectwa;
 * szyto tu na ogromną skalę i miasto nazywano miastem krawców.
 *
 * KĄT: na miarę kontra z wieszaka. To jest jedyne miejsce, w którym mogę
 * uczciwie opisać rzecz, o której sprzedawcy mówią niechętnie: RÓŻNICĘ
 * MIĘDZY GOTOWANIEM Z PRZEPISU PROWADZONEGO KROK PO KROKU A GOTOWANIEM
 * PO SWOJEMU. Przepisy prowadzone są jak ubranie z wieszaka: pasują
 * od razu, zawsze wychodzą i to one sprzedają urządzenie na prezentacji.
 * Ale po kilku miesiącach większość osób przestaje z nich korzystać
 * i wraca do własnego gotowania — i to jest moment, w którym decyduje się,
 * czy sprzęt zostaje na blacie, czy wędruje do szafki.
 *
 * WARUNEK UCZCIWOŚCI: strona ma powiedzieć wprost, że jeśli ktoś nie
 * zamierza nigdy gotować po swojemu, to prawdopodobnie przepłaci.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Brzeziny były przez pokolenia ośrodkiem krawiectwa, nazywanym
 *   miastem krawców,
 * — miasto leży niedaleko Łodzi.
 *
 * CZEGO NIE MA: liczb dotyczących zakładów krawieckich, historii branży,
 * nazw firm.
 */
export const BRZEZINY: CityContent = {
  slug: "brzeziny",
  h1: "Thermomix Brzeziny – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Brzeziny — prezentacja i cena",
  seoDescription:
    "Thermomix w Brzezinach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brzeziny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brzezinach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brzezin z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Brzeziny i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brzezinach – jak wygląda prezentacja?",
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
      id: "na-miare-czy-z-wieszaka",
      heading: "Miasto krawców — czyli z wieszaka czy na miarę",
      paragraphs: [
        "Brzeziny szyły przez pokolenia i nazywano je miastem krawców. Nikomu tutaj nie trzeba tłumaczyć różnicy między rzeczą z wieszaka a rzeczą na miarę: pierwsza pasuje od razu i jest łatwa, druga wymaga rozmowy, przymiarki i cierpliwości, ale potem leży inaczej.",
        "Z tym urządzeniem jest dokładnie tak samo i wolę powiedzieć to na początku. Ma dwa tryby korzystania, a sprzedaje się zwykle tylko jeden z nich.",
        "Z wieszaka to przepisy prowadzone krok po kroku. Urządzenie mówi, co dosypać, ustawia sobie czas i temperaturę, a Wy tylko dokładacie składniki. Zawsze wychodzi, nic nie trzeba wiedzieć i to właśnie robi wrażenie na prezentacji. Przez pierwsze tygodnie prawie wszyscy gotują w ten sposób.",
        "Na miarę to gotowanie po swojemu: ustawiacie czas, temperaturę i obroty sami, pod własny przepis i własny smak. Wymaga poznania kilku podstaw i pierwszy raz bywa nieporadny. Ale to jest ten tryb, w którym ludzie zostają na lata — bo w domu i tak gotuje się swoje dania, a nie te z listy.",
        "I stąd zdanie, którego nie usłyszycie na pokazie: jeśli ktoś planuje korzystać wyłącznie z gotowych przepisów i nigdy nie zajrzeć dalej, prawdopodobnie przepłaci. Sprzęt broni się dopiero wtedy, gdy wchodzi w codzienne, własne gotowanie. Dlatego na spotkaniu pokazuję oba tryby, a nie tylko ten efektowny — i pytam wprost, w którym widzicie siebie za rok.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brzezinach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brzezinach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla brzezińskiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach ktoś pracuje w Łodzi, więc dzień kończy się po dojeździe, a obiad powstaje później, niż by chciała osoba, która go robi.",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Bogdanka",
    "Jordanów",
    "Przanówka",
    "Grzmiąca",
    "Helenów",
    "Janinów",
    "Paprotnia",
    "Gałkówek",
    "Poćwiardówka",
  ],

  nearbyHeading: "Poza Brzeziny też przyjadę",
  nearbyParagraphs: [
    "Koluszki, Stryków, Łódź i Rawa Mazowiecka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Koluszki", "Stryków", "Łódź", "Rawa Mazowiecka", "Głowno"],

  about: blokOMnie("do Brzezin", "w Brzezinach i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brzezin bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Brzezinach"),
    {
      question: "Czy trzeba umieć gotować, żeby z tego korzystać?",
      answer:
        "Nie — przepisy prowadzone krok po kroku poprowadzą Cię za rękę i zawsze wyjdą. Ale powiem uczciwie: sprzęt broni się dopiero wtedy, gdy zaczniesz gotować w nim także po swojemu. Jeśli planujesz korzystać wyłącznie z gotowych przepisów, prawdopodobnie przepłacisz.",
    },
    {
      question: "Czy pokażesz też, jak ustawiać wszystko samodzielnie?",
      answer:
        "Tak i uważam to za ważniejszą część spotkania. Gotowe przepisy robią wrażenie, ale to własne gotowanie decyduje, czy urządzenie zostanie na blacie, czy trafi do szafki po pół roku.",
    },
  ],

  geo: { lat: 51.8022, lng: 19.7511 },
};
