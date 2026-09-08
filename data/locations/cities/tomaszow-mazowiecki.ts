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
 * TOMASZÓW MAZOWIECKI — miasto nad Pilicą, dawny ośrodek włókienniczy.
 * Leżą tu Niebieskie Źródła, a w mieście działa duża hala lodowa,
 * w której trenuje się i rozgrywa zawody w łyżwiarstwie szybkim.
 *
 * KĄT: rodzina ustawiona wokół treningów. W mieście z takim obiektem
 * bardzo wiele domów ma dziecko, które trenuje — i to jest rytm, którego
 * nie opisałam nigdzie indziej: nie praca zmianowa, nie rolnictwo,
 * tylko GRAFIK TRENINGOWY. Poranki przed szkołą, popołudnia zajęte
 * do wieczora, weekendy na zawodach, jedzenie noszone w torbie
 * i rodzeństwo, które je normalnie i o normalnych porach.
 *
 * TWARDA GRANICA: nie piszę nic o żywieniu sportowców, o dietach,
 * o suplementach ani o tym, co dziecku „trzeba" jeść. Nie jestem
 * dietetyczką i nie zamierzam nią udawać. Piszę wyłącznie o logistyce:
 * o porach, o pojemniku i o dwóch różnych posiłkach naraz.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Tomaszowie działa duża hala lodowa, w której trenuje się
 *   i rozgrywa zawody w łyżwiarstwie szybkim,
 * — w mieście leżą Niebieskie Źródła, a nieopodal groty,
 * — miasto leży nad Pilicą i było ośrodkiem włókienniczym.
 *
 * CZEGO NIE MA: nazw klubów, nazwisk, jakichkolwiek treści dietetycznych.
 */
export const TOMASZOW_MAZOWIECKI: CityContent = {
  slug: "tomaszow-mazowiecki",
  h1: "Thermomix Tomaszów Mazowiecki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tomaszów Mazowiecki — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Tomaszowie Mazowieckim: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%, terminy pod grafik rodziny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tomaszów Mazowiecki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tomaszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tomaszowa Mazowieckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Tomaszów Mazowiecki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tomaszowie – jak wygląda prezentacja?",
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
      id: "rytm-treningow",
      heading: "Dom, w którym rozkład dnia ustala grafik treningów",
      paragraphs: [
        "W Tomaszowie stoi duża hala lodowa, w której trenuje się i rozgrywa zawody, a przy niej wyrosło całe środowisko. W wielu tutejszych domach jest dziecko, które trenuje — nie tylko na lodzie — i to ono, a nie praca dorosłych, ustawia rozkład dnia całej rodziny.",
        "To jest rytm, którego nie da się porównać z żadnym innym. Trening bywa przed szkołą, więc pobudka jest o piątej. Popołudnie jest zajęte i wraca się o dwudziestej. Weekendy wypadają na zawodach, często w innym mieście. A obok jest drugie dziecko, które chodzi do szkoły normalnie i chce jeść o normalnych porach.",
        "Powiem od razu, czego tu nie napiszę. Nie będę doradzać, co dziecko powinno jeść, ile i kiedy — od tego są ludzie, którzy się na tym znają, a ja nie. Mogę napisać wyłącznie o logistyce, bo to akurat jest moja działka.",
        "A logistyka wygląda tak: w takim domu trzeba regularnie przygotować dwa różne posiłki na dwie różne pory, a jeden z nich musi jeszcze przetrwać kilka godzin w torbie. To jest po prostu więcej roboty niż jeden obiad dla wszystkich — i robi ją zwykle jedna osoba, między jednym a drugim odwiezieniem.",
        "Urządzenie ma na to dwie konkretne odpowiedzi. Pierwsza to Varoma: nad gotującym się daniem powstaje drugie, na parze, w tym samym czasie i naczyniu. Druga to możliwość ugotowania czegoś o piątej rano bez rozstawiania kuchni albo późnym wieczorem, bez pilnowania. Nic z tego nie jest efektowne. Ale przy dwóch różnych porach obiadu dziennie odzyskuje się z tego kilka godzin w tygodniu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tomaszowie Mazowieckim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli Wasz tydzień układa się wokół treningów, podajcie po prostu okno, w którym nikogo nie trzeba nigdzie wieźć.",
        "Podaj dzielnicę albo miejscowość. Jeżdżę po mieście i po okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tomaszowie Mazowieckim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tomaszowskiej rodziny",
      paragraphs: [
        "Gdy dzieci mają różne godziny zajęć, jeden obiad rzadko obsługuje cały dom — częściej trzeba przygotować dwie porcje na dwie pory, a robi to jedna osoba.",
        "Thermomix pomaga tu przez Varomę: dwa dania powstają jednocześnie w jednym urządzeniu, a gotowanie nie wymaga stania przy garnku, więc może dziać się, gdy Ty odwozisz albo odbierasz.",
        "Przy najmłodszym dziecku działa to tak samo: porcja na parze powstaje równolegle z obiadem dla reszty.",
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
    "Starzyce",
    "Białobrzegi",
    "Ludwików",
    "Niebrów",
    "Wilanów",
    "Michałówek",
    "Brzustówka",
    "Jadwigów",
    "Zawada",
  ],

  nearbyHeading: "Poza Tomaszów też przyjadę",
  nearbyParagraphs: [
    "Opoczno, Piotrków Trybunalski, Rawa Mazowiecka, Koluszki i Drzewica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opoczno", "Piotrków Trybunalski", "Rawa Mazowiecka", "Koluszki", "Drzewica", "Sulejów"],

  about: blokOMnie("do Tomaszowa Mazowieckiego", "w Tomaszowie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tomaszowa Mazowieckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tomaszowie Mazowieckim"),
    {
      question: "Musimy robić dwa różne obiady na dwie różne pory. Czy to pomoże?",
      answer:
        "Tak i to jest chyba najbardziej praktyczna rzecz w Waszym przypadku: dzięki Varomie dwa dania powstają jednocześnie, w jednym urządzeniu. Powiedzcie przy umawianiu, jak wygląda Wasz tydzień, a ugotujemy dokładnie taki układ.",
    },
    {
      question: "Czy doradzisz, co powinno jeść dziecko, które trenuje?",
      answer:
        "Nie i nie będę udawać, że się na tym znam — od tego są dietetycy i trenerzy. Mogę pokazać, jak przygotować dwie porcje naraz i jak zrobić coś o piątej rano bez rozstawiania całej kuchni. Reszta należy do osób z odpowiednią wiedzą.",
    },
  ],

  geo: { lat: 51.5308, lng: 20.0086 },
};
