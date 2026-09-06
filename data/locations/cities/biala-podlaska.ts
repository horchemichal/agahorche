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
 * BIAŁA PODLASKA — największe miasto północnej części województwa,
 * na Podlasiu, blisko wschodniej granicy państwa. Zachował się tu zespół
 * zamkowy Radziwiłłów z bramą i parkiem.
 *
 * KĄT: odległość — powiedziana wprost i bez upiększania. Do Lublina jest
 * stąd kawał drogi i to jest fakt, który organizuje tutejsze życie:
 * urzędy, uczelnie i usługi ze stolicy województwa nie obsługują tego
 * miasta na co dzień. Dla mnie oznacza to konkret, którego NIE WOLNO
 * ZAMIEŚĆ POD DYWAN: na północ jeżdżę osobno, planowo i z wyprzedzeniem.
 * Strona ma to powiedzieć zamiast obiecywać, że „wpadnę wieczorem” —
 * a przy okazji zaproponować rozwiązanie, które działa: kilka spotkań
 * w jednym wyjeździe.
 *
 * PARA Z OPATOWEM. Opatowska strona mówi „jestem tu po drodze, więc szybko”.
 * Ta mówi „nie jestem tu po drodze, więc umawiajmy się mądrze”. Obie są
 * prawdziwe i dokładnie dlatego muszą brzmieć inaczej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Biała Podlaska jest największym miastem północnej części województwa
 *   lubelskiego i leży blisko wschodniej granicy państwa,
 * — zachował się tu zespół zamkowy Radziwiłłów z bramą i parkiem,
 * — do Lublina jest stąd znacznie dalej niż z większości miast regionu,
 * — w mieście działa uczelnia, a w okolicy dawne lotnisko.
 *
 * CZEGO NIE MA: kilometrów, czasów przejazdu, danych o migracji,
 * twierdzeń o tym, dokąd mieszkańcy jeżdżą do pracy.
 */
export const BIALA_PODLASKA: CityContent = {
  slug: "biala-podlaska",
  h1: "Thermomix Biała Podlaska – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Biała Podlaska — prezentacja i cena",
  seoDescription:
    "Thermomix w Białej Podlaskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biała Podlaska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białej Podlaskiej. Prezentacja bezpłatna, termin umawiany z wyprzedzeniem.",

  lead:
    "Przyjeżdżam do Białej Podlaskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Biała Podlaska i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białej Podlaskiej – jak wygląda prezentacja?",
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
      id: "daleko-i-co-z-tego",
      heading: "Uczciwie: nie jestem tu po drodze",
      paragraphs: [
        "Biała Podlaska leży na północnym krańcu województwa i to nie jest szczegół z mapy, tylko coś, co widać w codzienności. Do stolicy regionu jest stąd kawał drogi, a spora część tego, co „obsługuje województwo”, w praktyce tego miasta nie obsługuje. Mieszkańcy wiedzą to lepiej ode mnie i doskonale czują różnicę między obietnicą a dojazdem.",
        "Dlatego napiszę wprost coś, czego nie znajdziecie na stronach obiecujących wszystko wszędzie: nie jestem tu po drodze. Nie mogę powiedzieć „wpadnę dziś wieczorem”, bo to byłoby kłamstwo, a ja wolę stracić klientkę niż wiarygodność.",
        "Mogę natomiast powiedzieć, jak to robię naprawdę. Na północ województwa jeżdżę planowo, kilka razy w miesiącu, i układam wtedy cały dzień z kilku spotkań. Dojazd jest bezpłatny tak samo jak wszędzie — z odległości nie robię żadnej dopłaty. Zmienia się tylko jedno: termin ustalamy z wyprzedzeniem, a nie z dnia na dzień.",
        "I stąd praktyczna prośba, która realnie skraca czekanie. Jeśli oprócz Was ktoś jeszcze chce zobaczyć urządzenie — siostra, sąsiadka, koleżanka z pracy — powiedzcie od razu przy umawianiu. Wtedy układam ten dzień wokół Was i termin robi się bliższy, zamiast czekać na kolejny wyjazd.",
        "To samo dotyczy tego, co po zakupie. Większość spraw da się załatwić telefonicznie i tak to zwykle wygląda, także pół roku później. Ale jeśli trzeba coś pokazać na żywo, umawiamy to na mój najbliższy wyjazd w tę stronę — i mówię wtedy konkretną datę, a nie „niedługo”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białej Podlaskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Podaj kilka dni, które Wam pasują — im szerszy przedział, tym szybciej znajdę termin przy najbliższym wyjeździe na północ.",
        "Powiedz też od razu, czy ktoś jeszcze w okolicy chce zobaczyć urządzenie. To naprawdę skraca czekanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białej Podlaskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bialskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to niezależnie od tego, jak długi był dzień.",
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
    "Centrum",
    "Sidorska",
    "Podmiejska",
    "Aleksandrów",
    "Piastowska",
    "Kopernika",
    "Wola",
    "Sławacinek",
    "Grabanów",
    "Roskosz",
  ],

  nearbyHeading: "Cała północ województwa",
  nearbyParagraphs: [
    "Międzyrzec Podlaski, Terespol, Radzyń Podlaski, Parczew i Łuków są w zasięgu tego samego wyjazdu — a skoro i tak jadę na północ, chętnie umawiam kilka spotkań na jeden dzień.",
  ],
  nearbyTowns: ["Międzyrzec Podlaski", "Terespol", "Radzyń Podlaski", "Parczew", "Łuków", "Włodawa"],

  about: blokOMnie("do Białej Podlaskiej", "w Białej Podlaskiej i na północy regionu", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy naprawdę przyjedziesz aż tutaj i bez dopłaty?",
      answer:
        "Tak. Dojazd jest bezpłatny niezależnie od odległości — z tego nie robię żadnej dopłaty. Proszę tylko o umówienie terminu z wyprzedzeniem, bo na północ województwa jeżdżę planowo, a nie z dnia na dzień.",
    },
    ...faqWspolne("w Białej Podlaskiej"),
    {
      question: "Jak długo czeka się na termin?",
      answer:
        "Zależy od tego, kiedy wypada najbliższy wyjazd w tę stronę — powiem Ci konkretną datę przez telefon, zamiast trzymać Cię w niepewności. Jeśli podasz kilka pasujących dni albo jeśli ktoś jeszcze w okolicy też chce zobaczyć urządzenie, zwykle da się to przyspieszyć.",
    },
    {
      question: "Co, jeśli po zakupie będę potrzebować pomocy?",
      answer:
        "Dzwonisz do mnie pod ten sam numer i większość spraw załatwiamy przez telefon — także po latach. Jeśli trzeba coś pokazać na żywo, umawiamy to na mój najbliższy wyjazd na północ i podaję wtedy konkretny termin.",
    },
  ],

  geo: { lat: 52.0325, lng: 23.1236 },
};
