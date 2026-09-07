import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * SWARZĘDZ — miasto ze skansenem pszczelarskim, kolekcją uli z różnych
 * stron i epok. Rój jest wspólnotą, w której wiedzę wnoszą wszyscy,
 * a nikt nie ma jej całej.
 *
 * KĄT: porady z grup internetowych. Setki tysięcy osób wymieniają się
 * przepisami i ustawieniami w sieci — i to jest realna część korzystania
 * z tego sprzętu, o której sprzedawcy milczą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — grupy są naprawdę wartościowe na pomysły: co ludzie robią w tygodniu,
 *   co się sprawdza, czego nie warto próbować,
 * — ale to nie jest źródło, za które ktokolwiek odpowiada: nie ma tam
 *   redakcji ani nikogo, kto sprawdza, co się wkleja,
 * — dlatego przy USTAWIENIACH i przy wszystkim, co dotyczy urządzenia
 *   od strony technicznej, pierwszeństwo ma to, co przyszło ze sprzętem,
 * — i uczciwie: ja też nie jestem od potwierdzania każdej porady z sieci
 *   i przy czymś, czego nie wiem, powiem „sprawdzę".
 *
 * TWARDE GRANICE:
 * — ŻADNEGO POLECANIA KONKRETNYCH GRUP, profili ani osób.
 * — ŻADNEGO OBGADYWANIA społeczności ani sugerowania, że ludzie tam
 *   szkodzą. To byłoby nieuczciwe i po prostu nieprawdziwe.
 * — ŻADNYCH USTAWIEŃ Z PAMIĘCI, także jako „to, co się mówi w sieci".
 * — ŻADNYCH PORAD PRZY DIETACH LECZNICZYCH I ALERGIACH, nawet gdy
 *   pytanie pochodzi z grupy.
 *
 * ROZGRANICZENIE. Wołomin mówi o gotowaniu z własnych przepisów zamiast
 * prowadzonych, Rumia o poleceniu od znajomej, Lębork o cudzym
 * rozczarowaniu. Tutaj chodzi o WIEDZĘ Z INTERNETU jako źródło.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Swarzędzu działa skansen pszczelarski z kolekcją uli.
 */
export const SWARZEDZ: CityContent = {
  slug: "swarzedz",
  h1: "Thermomix Swarzędz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Swarzędz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Swarzędzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Swarzędz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Swarzędzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Swarzędza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Swarzędz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na pomysły grupy są świetne. Na ustawienia — nie one są źródłem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Swarzędzu – jak wygląda prezentacja?",
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
      id: "porady-z-internetu",
      heading: "Miasto uli — i wiedza zbierana przez tysiące osób w internecie",
      paragraphs: [
        "W Swarzędzu stoi skansen pszczelarski z kolekcją uli z różnych stron i epok. Rój jest wspólnotą, w której wiedzę wnoszą wszyscy po trochu, a nikt nie ma jej całej. Wykorzystam ten obraz do rzeczy, o której sprzedawcy milczą, choć jest normalną częścią używania tego sprzętu: do grup i forów, na których ludzie wymieniają się przepisami i ustawieniami.",
        "Zacznę od pochwały, bo jest zasłużona. Te grupy są naprawdę wartościowe, i to na rzecz, której nie zapewni żaden oficjalny materiał: pokazują, co ludzie robią w zwykłą środę. Co się sprawdza, czego nie warto próbować, jak ktoś obszedł problem, na który sami byście wpadli za pół roku. Nie zamierzam nikogo od tego odciągać ani sugerować, że ludzie tam szkodzą, bo to byłoby nieuczciwe.",
        "Trzeba jednak wiedzieć, czym to jest, a czym nie. To nie jest źródło, za które ktokolwiek odpowiada. Nie ma tam redakcji ani nikogo, kto sprawdza, co się wkleja, a wpis sprzed lat wygląda dokładnie tak samo jak wczorajszy. Przy przepisie to nie robi wielkiej różnicy: co najwyżej wyjdzie inaczej, niż się spodziewaliście.",
        "Inaczej jest przy ustawieniach i przy wszystkim, co dotyczy samego urządzenia. Tam pierwszeństwo ma to, co przyszło razem ze sprzętem — nie dlatego, że ludzie w sieci są niekompetentni, tylko dlatego, że tylko za tamtym ktoś odpowiada. Jeśli porada z grupy kłóci się z tym, co jest w materiałach do urządzenia, obowiązuje to drugie i nie ma tu miejsca na dyskusję.",
        "Nie będę Wam też polecać konkretnych grup ani profili. Nie prowadzę żadnej z nich, nie odpowiadam za to, co się w nich pojawia, a polecenie z mojej strony brzmiałoby jak poręczenie, którego nie mogę udzielić. Znajdziecie je sami w dziesięć minut i sami ocenicie, które są dla Was.",
        "I to samo dotyczy mnie: nie jestem od potwierdzania każdej porady wyczytanej w sieci. Jeśli przyniesiecie mi konkretne pytanie, a nie będę pewna odpowiedzi, powiem „sprawdzę” i sprawdzę. A przy dietach zaleconych przez lekarza i przy alergiach nie doradzę w ogóle, niezależnie od tego, skąd pytanie pochodzi — nawet jeśli w grupie ktoś odpowiedział bez wahania.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Swarzędzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli naczytaliście się sprzecznych opinii, przynieście je na spotkanie — przejdziemy je po kolei i powiem, przy czym jestem pewna, a przy czym nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Swarzędzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla swarzędzkiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Poznania.",
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

  districtsHeading: "Do których części Swarzędza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Kościuszkowców",
    "Osiedle Czwartaków",
    "Osiedle Raczyńskiego",
    "Nowa Wieś",
    "Zalasewo",
    "Gruszczyn",
    "Jasin",
  ],

  nearbyHeading: "Poza Swarzędz też przyjadę",
  nearbyParagraphs: [
    "Poznań, Kostrzyn, Pobiedziska i Kórnik są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Poznań", "Kostrzyn", "Pobiedziska", "Kórnik", "Luboń", "Gniezno"],

  about: blokOMnie("do Swarzędza", "w Swarzędzu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Swarzędza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Swarzędzu"),
    {
      question: "Czy warto korzystać z grup internetowych o Thermomixie?",
      answer:
        "Na pomysły tak — pokazują, co ludzie robią w zwykłą środę, czego żaden oficjalny materiał nie pokaże. Trzeba tylko wiedzieć, czym to jest: nie ma tam nikogo, kto sprawdza, co się wkleja, a wpis sprzed lat wygląda jak wczorajszy. Przy ustawieniach i sprawach technicznych pierwszeństwo ma to, co przyszło razem ze sprzętem.",
    },
    {
      question: "Polecisz jakąś konkretną grupę?",
      answer:
        "Nie. Żadnej nie prowadzę i nie odpowiadam za to, co się w nich pojawia — polecenie z mojej strony brzmiałoby jak poręczenie, którego nie mogę udzielić. Znajdziecie je sami w dziesięć minut i sami ocenicie, które są dla Was.",
    },
  ],

  geo: { lat: 52.4108, lng: 17.0778 },
};
