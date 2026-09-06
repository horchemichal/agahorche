import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * BIELSKO-BIAŁA — miasto z dwóch miast, i to jest fakt, którego nie da się
 * pominąć: Bielsko leżało na Śląsku Cieszyńskim, Biała w Małopolsce, a przez
 * środek dzisiejszego centrum płynie rzeka, która była granicą. Połączono je
 * dopiero w 1951 roku.
 *
 * DLACZEGO TO JEST NAJLEPSZY KĄT NA TĘ STRONĘ. Dla Agi, która pracuje
 * w Małopolsce, Biała nie jest „nowym regionem" — to ta sama historyczna
 * ziemia. Można to powiedzieć wprost i uczciwie, bez naciągania: pół tego
 * miasta zawsze było po tej samej stronie co Wadowice i Kęty, do których
 * jeździ od dawna. Żaden szablon regionalny tego nie wymyśli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bielsko i Biała były osobnymi miastami po dwóch stronach rzeki Białej,
 *   połączonymi w jedno miasto w 1951 roku,
 * — Bielsko należało do Śląska Cieszyńskiego, Biała do Małopolski,
 * — miasto ma bogatą historię przemysłu włókienniczego, stąd określenie
 *   „mały Wiedeń" i secesyjna zabudowa centrum,
 * — Studio Filmów Rysunkowych w Bielsku-Białej to miejsce powstania
 *   Bolka i Lolka oraz Reksia,
 * — miasto leży u podnóża Beskidu Śląskiego; Szyndzielnia i Klimczok to
 *   szczyty bezpośrednio nad miastem.
 *
 * CZEGO NIE MA: liczby zatrudnionych w fabrykach, dat produkcji konkretnych
 * modeli samochodów, cen karnetów i biletów.
 */
export const BIELSKO_BIALA: CityContent = {
  slug: "bielsko-biala",
  h1: "Thermomix Bielsko-Biała – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Bielsko-Biała — prezentacja i cena",
  seoDescription:
    "Thermomix w Bielsku-Białej: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bielsko-Biała — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Bielsku-Białej i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Bielska-Białej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — po obu stronach Białej, od Starego Bielska po Lipnik i Hałcnów.",

  highlights: highlightyStandardowe("całe Bielsko-Biała, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bielsku-Białej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami, więc nie musisz nic kupować ani przygotowywać. Wystarczy kawałek blatu, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Jeśli powiesz wcześniej, ile osób siada u Was do stołu i czego nie jecie, dobiorę dania pod Was.",
        "Na koniec przechodzimy do liczb — cena, promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "dwa-miasta",
      heading: "Pół tego miasta zawsze było w Małopolsce",
      paragraphs: [
        "Bielsko-Biała to dwa miasta zszyte w jedno w 1951 roku. Bielsko leżało na Śląsku Cieszyńskim, Biała w Małopolsce, a granicą była rzeka płynąca dziś przez środek centrum. Ludzie po obu stronach mówili trochę inaczej, gotowali trochę inaczej i przez wieki byli w innych krajach.",
        "Piszę o tym, bo dla mnie ma to bardzo praktyczne znaczenie. Pracuję w Małopolsce i jeżdżę do Wadowic, Kęt czy Andrychowa od dawna — czyli po tej samej historycznej ziemi, na której stoi Biała. Dojazd do Bielska-Białej nie jest dla mnie wyprawą w nieznany region, tylko przedłużeniem trasy, którą już znam.",
        "A skoro miasto jest z dwóch, to i kuchnie w nim bywają różne. Na spotkaniu nie zakładam z góry, co jecie — pytam. To najkrótsza droga do tego, żeby prezentacja odpowiadała na Wasze pytania, a nie na moje wyobrażenia.",
      ],
    },
    {
      id: "gory",
      heading: "Miasto pod górami — czyli gotowanie wokół weekendu",
      paragraphs: [
        "Beskidy zaczynają się tu dosłownie za ostatnim blokiem: Szyndzielnia i Klimczok stoją nad miastem, a wyjście w góry nie wymaga planowania wyjazdu. To zmienia rytm tygodnia w sposób, który widać w kuchni — sobota i niedziela często nie są dniami wolnymi spędzanymi w domu, tylko dniami, w których nikogo w domu nie ma.",
        "Konsekwencja jest prosta: gotuje się albo wcześniej, albo szybko po powrocie, gdy wszyscy są głodni jednocześnie. Thermomix nadaje się do obu tych scenariuszy, bo nie wymaga stania przy garnku — danie może czekać gotowe albo powstać, gdy rozpakowujecie plecaki.",
        "Do tego dochodzą termosy i jedzenie zabierane ze sobą. Zupa krem, pasta kanapkowa czy coś ciepłego na drogę to rzeczy, które robi się w jednym naczyniu i bez bałaganu — a to akurat ma tu realne zastosowanie, a nie tylko teoretyczne.",
      ],
      links: [{ href: "/przepisy", label: "Zobacz, co można ugotować" }],
    },
    sekcjaTm7(),
    sekcjaCena("w Bielsku-Białej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bielskiej rodziny",
      paragraphs: [
        "Bielsko-Biała ma bardzo różną zabudowę: secesyjne kamienice w centrum, duże osiedla bloków na Karpackim i Złotych Łanach, domy jednorodzinne w dawnych wsiach włączonych do miasta. Kuchnia w kamienicy z wysokim sufitem to co innego niż kuchnia w bloku z lat siedemdziesiątych i co innego niż w domu w Hałcnowie.",
        "Wspólne jest to, po co ludzie sięgają po Thermomix: żeby obiad dla kilku osób nie wymagał obecności przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, a Ty w tym czasie robisz coś innego.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
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

  districtsHeading: "Do których dzielnic Bielska-Białej dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, po obu stronach rzeki, bez dopłaty za dojazd.",
    "Miasto jest rozciągnięte i częściowo górzyste — przy umawianiu przydaje mi się nazwa dzielnicy, żeby dobrze ułożyć porę spotkania.",
  ],
  districts: [
    "Śródmieście Bielsko",
    "Dolne Przedmieście",
    "Górne Przedmieście",
    "Biała Śródmieście",
    "Biała Krakowska",
    "Stare Bielsko",
    "Aleksandrowice",
    "Osiedle Karpackie",
    "Osiedle Złote Łany",
    "Osiedle Beskidzkie",
    "Osiedle Polskich Skrzydeł",
    "Wapienica",
    "Kamienica",
    "Mikuszowice",
    "Olszówka",
    "Straconka",
    "Lipnik",
    "Hałcnów",
    "Komorowice",
    "Leszczyny",
  ],

  nearbyHeading: "Poza Bielsko-Białą też przyjadę",
  nearbyParagraphs: [
    "Do Czechowic-Dziedzic, Żywca, Cieszyna i Szczyrku, a na wschód do Kęt, Andrychowa i Wadowic — czyli tam, gdzie jeżdżę od dawna. Bielsko leży dokładnie na styku tych dwóch obszarów.",
  ],
  nearbyTowns: [
    "Czechowice-Dziedzice",
    "Żywiec",
    "Cieszyn",
    "Szczyrk",
    "Kęty",
    "Andrychów",
    "Wadowice",
    "Pszczyna",
  ],

  about: blokOMnie("do Bielska-Białej", "w Bielsku-Białej i na pograniczu z Małopolską", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bielska-Białej bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic jest bezpłatny, tak samo jak sama prezentacja. Bielsko leży blisko obszaru, po którym jeżdżę na co dzień, więc to dla mnie naturalny kierunek.",
    },
    ...faqWspolne("w Bielsku-Białej"),
    {
      question: "Mieszkam w kamienicy w centrum, kuchnia jest wąska — da się zrobić prezentację?",
      answer:
        "Tak. Powiedz o tym przy umawianiu, a przywiozę mniej naczyń i ustawimy urządzenie tak, żeby dało się przy tym normalnie stać. Robiłam już prezentacje w kuchniach, w których blat kończy się po metrze.",
    },
    {
      question: "Czy przyjedziesz do Hałcnowa, Straconki albo na Olszówkę?",
      answer:
        "Tak, do każdej dzielnicy — również do tych położonych wyżej i dalej od centrum. Wpływa to tylko na porę, którą mogę zaproponować.",
    },
  ],

  geo: { lat: 49.8225, lng: 19.0444 },
};
