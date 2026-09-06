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
 * CHEŁM — miasto stojące dosłownie na kredzie. Pod ulicami biegną
 * Chełmskie Podziemia Kredowe, dawne wyrobiska drążone przez stulecia
 * i udostępnione dziś jako trasa turystyczna. Nad miastem góruje Górka
 * Chełmska z bazyliką, a w okolicy działa przemysł oparty na tym samym
 * surowcu.
 *
 * KĄT: twarda woda. To jest jedyne miasto w całym serwisie, w którym mogę
 * napisać coś PRAKTYCZNEGO O WODZIE, i to nie na zasadzie ciekawostki —
 * wodę z podłoża kredowego i wapiennego poznaje się po kamieniu
 * w czajniku. Sekcja robi dwie rzeczy naraz: mówi, co to zmienia
 * w gotowaniu, i UPRZEDZA, że Thermomix też wymaga odkamieniania.
 * Powiedzenie tego przed zakupem jest jedyną uczciwą kolejnością.
 *
 * OSTROŻNOŚĆ: nie twierdzę nic o twardości wody w konkretnej sieci
 * wodociągowej ani o jej wpływie na zdrowie — piszę warunkowo („jeśli
 * u Was zostaje kamień”), bo to jest to, co mieszkaniec widzi sam.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — pod Chełmem znajdują się dawne wyrobiska kredowe udostępnione jako
 *   podziemna trasa turystyczna,
 * — miasto leży na podłożu kredowym, a w okolicy działa przemysł oparty
 *   na tym surowcu,
 * — nad miastem wznosi się Górka Chełmska z bazyliką,
 * — Chełm leży niedaleko wschodniej granicy państwa,
 * — dzielnice: Śródmieście, Dyrekcja Dolna, Dyrekcja Górna, Słowackiego,
 *   Kościuszki, Zachód, Działki, Cementownia, Metalowa.
 *
 * CZEGO NIE MA: parametrów wody, porad zdrowotnych, twierdzeń o filtrach
 * i zmiękczaczach konkretnych marek.
 */
export const CHELM: CityContent = {
  slug: "chelm",
  h1: "Thermomix Chełm – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Chełm — prezentacja i cena",
  seoDescription:
    "Thermomix w Chełmie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%, uczciwie także o kamieniu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chełm — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chełmie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chełma z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, od Śródmieścia po Dyrekcję i Działki.",

  highlights: highlightyStandardowe("Chełm i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chełmie – jak wygląda prezentacja?",
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
      id: "kamien-w-czajniku",
      heading: "Miasto na kredzie — czyli rozmowa o kamieniu, zanim kupisz",
      paragraphs: [
        "Chełm stoi na kredzie dosłownie: pod ulicami biegną dawne wyrobiska, przez które dziś prowadzi trasa turystyczna. Nie jest to tylko ciekawostka dla przyjezdnych — podłoże wapienne i kredowe widać potem w każdej kuchni, w najbardziej prozaicznym miejscu, jakim jest czajnik.",
        "Jeżeli u Was po dwóch tygodniach na grzałce osiada biały nalot, wiecie, o czym mówię, i nie muszę Wam tego tłumaczyć. Chcę natomiast powiedzieć rzecz, którą sprzedawca powinien powiedzieć PRZED zakupem, a mówi się ją zwykle po: Thermomix też wymaga odkamieniania. Ma grzałkę i czujniki, więc twarda woda działa na niego tak samo jak na czajnik.",
        "To nie jest wada ukryta ani powód, żeby nie kupować — to zwykła obsługa, kilka minut raz na jakiś czas, robiona zwykłym środkiem do odkamieniania. Ale wolę, żebyście usłyszeli o tym ode mnie w Waszej kuchni, a nie z instrukcji pół roku później. Pokażę na spotkaniu, jak to wygląda i jak często ma sens przy takiej wodzie jak tutaj.",
        "Twarda woda zmienia też kilka drobiazgów w samym gotowaniu i warto o nich wiedzieć, bo ludzie zwykle obwiniają za nie przepis. Fasola i groch potrafią się gotować dłużej, herbata robi się mętna, a niektóre zupy mają lekko inny smak niż u siostry w innym mieście. Żadnego z tych efektów urządzenie nie usuwa i nie będę twierdzić, że usuwa.",
        "Co robi: gotuje z ustawioną temperaturą i mieszaniem, więc przynajmniej nie stoicie nad garnkiem z fasolą przez godzinę, sprawdzając, czy już zmiękła.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chełmie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i kilka pasujących terminów. Umawiam się popołudniami, wieczorami i w weekendy, więc nie trzeba brać wolnego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chełmie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chełmskiej rodziny",
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

  districtsHeading: "Do których dzielnic Chełma dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Dyrekcja Dolna",
    "Dyrekcja Górna",
    "Słowackiego",
    "Kościuszki",
    "Zachód",
    "Działki",
    "Cementownia",
    "Metalowa",
  ],

  nearbyHeading: "Poza Chełm też przyjadę",
  nearbyParagraphs: [
    "Krasnystaw, Włodawa, Hrubieszów, Rejowiec Fabryczny i Łęczna są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krasnystaw", "Włodawa", "Hrubieszów", "Rejowiec Fabryczny", "Łęczna", "Zamość"],

  about: blokOMnie("do Chełma", "w Chełmie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Chełma bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Chełmie"),
    {
      question: "Mamy bardzo twardą wodę — czy urządzenie się od tego zepsuje?",
      answer:
        "Nie, ale wymaga odkamieniania tak samo jak czajnik. To kilka minut raz na jakiś czas, zwykłym środkiem do odkamieniania. Pokażę Ci na spotkaniu, jak to zrobić i jak często ma to sens przy takiej wodzie — wolę powiedzieć o tym przed zakupem niż po.",
    },
    {
      question: "Czy Thermomix zmiękcza wodę albo poprawia jej smak?",
      answer:
        "Nie i nie jest do tego przeznaczony. Gotuje wodę, którą do niego wlejesz, taką jaka jest. Jeśli używacie filtra, używajcie go dalej — to niczego nie zmienia w obsłudze urządzenia.",
    },
  ],

  geo: { lat: 51.1431, lng: 23.4716 },
};
