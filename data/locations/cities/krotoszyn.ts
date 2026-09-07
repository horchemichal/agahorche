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
 * KROTOSZYN — miasto z zachowanym czworobocznym rynkiem i regularną
 * siatką ulic, gdzie porządek widać na pierwszy rzut oka. Wokół —
 * Dąbrowy Krotoszyńskie, jeden z większych kompleksów dębowych w kraju.
 *
 * KĄT: „ono się samo myje". Hasło powtarzane na każdym pokazie
 * i najczęstsze źródło rozczarowania po zakupie — bo jest prawdziwe
 * tylko do połowy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — mycie w naczyniu naprawdę działa i skraca sprzątanie: to jest
 *   prawdziwa część tego hasła,
 * — ale są sytuacje, w których to nie wystarcza: po tłustym, po cieście,
 *   po czymś, co przywarło, po daniu o mocnym zapachu — wtedy myje się
 *   ręcznie albo trafia do zmywarki,
 * — pokrywa, uszczelka i drobne części zawsze wymagają uwagi i to jest
 *   ta robota, o której nikt nie mówi przed zakupem,
 * — i bilans uczciwy: mniej zmywania niż przy trzech garnkach, ale nie
 *   zero.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH INSTRUKCJI CZYSZCZENIA, środków, temperatur ani „trików".
 *   Sposób mycia jest w materiałach, które przychodzą z urządzeniem,
 *   i tam należy sprawdzać, a nie u mnie.
 * — ŻADNYCH TWIERDZEŃ O ZMYWARCE — nie wypisuję z pamięci, co można
 *   do niej wkładać.
 * — ŻADNYCH CZASÓW („mycie zajmuje X minut").
 *
 * ROZGRANICZENIE. Bolesławiec mówi o zlewie po obiedzie jako o całym
 * bałaganie w kuchni, Police o sprzętach, które zostają. Tutaj chodzi
 * wyłącznie o HASŁO „myje się samo" i jego granice.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Krotoszyn ma zachowany czworoboczny rynek i regularny układ ulic,
 *   a w okolicy leżą Dąbrowy Krotoszyńskie.
 */
export const KROTOSZYN: CityContent = {
  slug: "krotoszyn",
  h1: "Thermomix Krotoszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krotoszyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Krotoszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krotoszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krotoszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krotoszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Krotoszyn i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mniej zmywania niż przy trzech garnkach. Ale nie zero.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krotoszynie – jak wygląda prezentacja?",
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
      id: "czy-myje-sie-samo",
      heading: "Miasto o równym rynku — i hasło „ono się samo myje”",
      paragraphs: [
        "Krotoszyn ma zachowany czworoboczny rynek i regularną siatkę ulic: porządek widać tu na pierwszy rzut oka, bez zaglądania w zaułki. Wykorzystam to do zdania, które pada na każdym pokazie i jest najczęstszym źródłem rozczarowania po zakupie: „ono się samo myje”.",
        "Zacznę od tego, co w tym zdaniu jest prawdą, bo jest jej sporo. Mycie w samym naczyniu naprawdę działa i naprawdę skraca sprzątanie. Po zwykłej zupie czy sosie nie musicie szorować niczego ręcznie, a różnica względem trzech garnków, deski i blendera jest odczuwalna każdego wieczoru. To nie jest chwyt marketingowy, tylko realna zaleta.",
        "Teraz to, co w tym zdaniu jest przesadą, a czego nie usłyszycie przed zakupem. Bywają dania, po których to nie wystarcza: po czymś bardzo tłustym, po cieście, po czymś, co przywarło, albo po potrawie o mocnym zapachu, który potrafi zostać. Wtedy myje się normalnie — ręcznie albo w zmywarce, tak jak każde inne naczynie. Zdarza się to regularnie, a nie raz na rok.",
        "Jest też część, o której na pokazach się milczy: pokrywa, uszczelka i drobne elementy. Trzeba je zdjąć, przepłukać i wysuszyć, i to jest ta robota, której nikt nie pokazuje na filmiku, bo nie wygląda efektownie. Zajmuje niewiele, ale istnieje, i lepiej wiedzieć o tym przed zakupem niż odkryć w drugim tygodniu.",
        "Nie podam Wam natomiast żadnych instrukcji czyszczenia: czym, w jakiej temperaturze, co wolno włożyć do zmywarki. Sposób mycia jest opisany w materiałach, które przychodzą z urządzeniem, i tam należy to sprawdzać. Moja podpowiedź z pamięci mogłaby dotyczyć innego modelu albo być po prostu nieaktualna — a skutki poniósłby ktoś inny.",
        "Uczciwy bilans brzmi więc tak: zmywania jest wyraźnie mniej niż przy gotowaniu w kilku naczyniach, ale nie ma go zero. Kto oczekuje zera, będzie zawiedziony w pierwszym tygodniu — i to nie dlatego, że sprzęt jest zły, tylko dlatego, że ktoś obiecał mu za dużo.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krotoszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokażę też sprzątanie po daniu, a nie tylko samo gotowanie — to jest część, której zwykle nikt nie pokazuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krotoszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krotoszyńskiej rodziny",
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

  districtsHeading: "Do których części Krotoszyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Sikorskiego",
    "Osiedle Nowy Rynek",
    "Parcelki",
    "Osiedle Kobierno",
    "Zdunowska",
    "Błonie",
  ],

  nearbyHeading: "Poza Krotoszyn też przyjadę",
  nearbyParagraphs: [
    "Koźmin Wielkopolski, Zduny, Sulmierzyce i Kobylin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Koźmin Wielkopolski", "Zduny", "Sulmierzyce", "Kobylin", "Jarocin", "Ostrów Wielkopolski"],

  about: blokOMnie("do Krotoszyna", "w Krotoszynie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krotoszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Krotoszynie"),
    {
      question: "Czy to naprawdę myje się samo?",
      answer:
        "Do połowy. Mycie w naczyniu działa i po zwykłej zupie czy sosie nie trzeba niczego szorować — różnica względem trzech garnków jest odczuwalna. Ale po czymś tłustym, po cieście, po czymś przywartym albo o mocnym zapachu myje się normalnie. Do tego pokrywa, uszczelka i drobne części zawsze wymagają uwagi.",
    },
    {
      question: "Czym to czyścić i co można włożyć do zmywarki?",
      answer:
        "Nie odpowiem z pamięci. Sposób mycia jest opisany w materiałach, które przychodzą z urządzeniem, i tam trzeba to sprawdzać — moja podpowiedź mogłaby dotyczyć innego modelu albo być nieaktualna, a skutki poniósłby ktoś inny.",
    },
  ],

  geo: { lat: 51.6981, lng: 17.4358 },
};
