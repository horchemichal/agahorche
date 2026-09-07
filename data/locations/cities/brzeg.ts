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
 * BRZEG — zamek Piastów śląskich z renesansową bramą, na której
 * umieszczono galerię popiersi przodków dynastii. Budowla, która
 * publicznie pokazuje, kto za nią stoi i skąd pochodzi.
 *
 * KĄT: co się dzieje PO zakupie. Kto uczy obsługi, do kogo dzwonić,
 * czy sprzedawca znika po podpisaniu papierów. Realna obawa, o której
 * materiały sprzedażowe milczą, bo dotyczy okresu, gdy pieniądze
 * są już zapłacone.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST — I WYŁĄCZNIE O TYM, CO AGA SAMA ROBI:
 * — telefon jest ten sam po zakupie co przed i odbiera go ta sama osoba,
 * — na pierwsze dni umawia się na pomoc przy konkretnym daniu, bo pytania
 *   pojawiają się dopiero przy własnej kuchni,
 * — czego NIE robi: nie prowadzi kursów gotowania, nie przyjeżdża
 *   do każdego pytania i nie jest serwisem technicznym,
 * — i uczciwie: pytania o naprawy, reklamacje i warunki umowy idą tam,
 *   gdzie należą — sprawdza i kieruje, zamiast zgadywać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH OBIETNIC W IMIENIU FIRMY: czasów reakcji, zakresu serwisu,
 *   warunków gwarancji, procedur reklamacyjnych, terminów.
 * — ŻADNYCH DEKLARACJI, KTÓRYCH AGA NIE MOŻE DOTRZYMAĆ SAMA
 *   („zawsze odbieram”, „przyjadę o każdej porze”).
 *
 * ROZGRANICZENIE. Toruń mówi o błędach pierwszego tygodnia (co idzie nie
 * tak przy gotowaniu), Ostrów Mazowiecka o instrukcji, Sieradz
 * o odstąpieniu od umowy. Tutaj chodzi o KONTAKT Z AGĄ po zakupie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — zamek w Brzegu ma renesansową bramę z galerią popiersi przodków
 *   dynastii Piastów śląskich.
 */
export const BRZEG: CityContent = {
  slug: "brzeg",
  h1: "Thermomix Brzeg – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brzeg — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Brzegu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brzeg — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brzegu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brzegu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Brzeg i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ten sam numer przed zakupem i po nim.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brzegu – jak wygląda prezentacja?",
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
      id: "co-po-zakupie",
      heading: "Brama z galerią przodków — i pytanie, co się dzieje po zakupie",
      paragraphs: [
        "Na renesansowej bramie brzeskiego zamku umieszczono popiersia przodków dynastii: budowla od wieków publicznie pokazuje, kto za nią stoi. Wykorzystam to do obawy, o której materiały sprzedażowe milczą, bo dotyczy momentu, gdy pieniądze są już zapłacone: co będzie potem? Czy zostanę z tym sama?",
        "To jest rozsądne pytanie i sama bym je zadała. Przy takim wydatku najgorszym scenariuszem nie jest zły sprzęt, tylko sprzedawca, który przestaje odbierać, gdy transakcja jest zamknięta. Odpowiem konkretnie i wyłącznie za siebie — bo tylko za siebie mogę odpowiadać.",
        "Numer telefonu jest ten sam przed zakupem i po nim, a odbiera go ta sama osoba, która prowadziła prezentację. Nie ma tu żadnego przekazywania klientki dalej ani infolinii, na którą trzeba się przebijać, żeby zapytać o rzecz, którą wyjaśniam w minutę.",
        "Na pierwsze dni umawiam się na pomoc przy konkretnym daniu, i to nie jest uprzejmy zwrot grzecznościowy. Prawdziwe pytania nie pojawiają się na prezentacji, tylko w trzecią środę o dziewiętnastej, przy własnej kuchni i własnych składnikach. Wtedy warto zadzwonić, a nie szukać po internecie.",
        "Powiem też, czego nie robię, żeby nikt nie liczył na coś, czego nie dostanie. Nie prowadzę kursów gotowania. Nie przyjeżdżam do każdego pytania — większość rozwiązuje się przez telefon w kilka minut. I nie jestem serwisem technicznym: naprawy, reklamacje i warunki umowy to nie moja dziedzina i nie będę o nich opowiadać z głowy.",
        "W takich sprawach robię jedno: sprawdzam i kieruję tam, gdzie należą, zamiast zgadywać. Nie obiecuję w cudzym imieniu terminów, zakresu serwisu ani warunków gwarancji, bo to nie ode mnie zależy, a obietnica złożona lekko wraca potem jako rozczarowanie. Wolę powiedzieć „sprawdzę” i to zrobić.",
      ],
      links: [{ href: "/kontakt", label: "Kontakt" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brzegu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie pytania o to, co dzieje się po zakupie, zadajcie je na spotkaniu — odpowiem konkretnie, a przy tym, czego nie wiem, powiem, że sprawdzę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brzegu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla brzeskiej rodziny",
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

  districtsHeading: "Do których części Brzegu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Zielone",
    "Osiedle Chrobrego",
    "Pepsi-Centrum",
    "Nadodrze",
    "Rataje",
    "Osiedle Westerplatte",
  ],

  nearbyHeading: "Poza Brzeg też przyjadę",
  nearbyParagraphs: [
    "Oława, Grodków, Lewin Brzeski i Skarbimierz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Oława", "Grodków", "Lewin Brzeski", "Namysłów", "Opole", "Wrocław"],

  about: blokOMnie("do Brzegu", "w Brzegu i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brzegu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Brzegu"),
    {
      question: "Co się dzieje po zakupie? Czy zostanę z tym sama?",
      answer:
        "Numer jest ten sam przed zakupem i po nim, a odbiera go ta sama osoba, która prowadziła prezentację. Na pierwsze dni umawiam się na pomoc przy konkretnym daniu — prawdziwe pytania pojawiają się dopiero przy własnej kuchni, nie na prezentacji. Nie prowadzę za to kursów gotowania i nie przyjeżdżam do każdego pytania; większość rozwiązuje się przez telefon.",
    },
    {
      question: "A jeśli sprzęt się zepsuje albo będę mieć reklamację?",
      answer:
        "To nie jest moja dziedzina i nie będę o niej opowiadać z głowy. Nie obiecuję w cudzym imieniu terminów, zakresu serwisu ani warunków gwarancji — sprawdzam i kieruję tam, gdzie takie sprawy należą. Obietnica złożona lekko wraca potem jako rozczarowanie.",
    },
  ],

  geo: { lat: 50.8608, lng: 17.4669 },
};
