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
 * KALISZ — miasto uważane za najstarsze w Polsce; jako Calisia pojawia się
 * u Ptolemeusza w drugim wieku, przy szlaku bursztynowym prowadzącym znad
 * Bałtyku nad Adriatyk.
 *
 * KĄT: przyprawy. Miasto na dawnym szlaku handlowym jest jedynym właściwym
 * miejscem na temat, którego nie ma w żadnym folderze, a który zmienia
 * codzienne gotowanie bardziej niż większość funkcji: CO NAPRAWDĘ ZMIENIA
 * SMAK, A CO JEST WYDATKIEM BEZ POKRYCIA.
 *
 * CO MOŻE, A CZEGO NIE MOŻE BYĆ W TEJ SEKCJI. Może być: mielenie przypraw
 * na miejscu (to urządzenie realnie robi), własne mieszanki zamiast
 * gotowych, i uczciwe stwierdzenie, że większość kupowanych mieszanek
 * to głównie sól. NIE MOŻE być: konkretnych proporcji podawanych jako
 * „przepis Vorwerka", twierdzeń zdrowotnych o przyprawach ani nazw marek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kalisz jest uważany za najstarsze miasto w Polsce, wzmiankowany
 *   przez Ptolemeusza jako Calisia,
 * — leżał przy szlaku bursztynowym.
 */
export const KALISZ: CityContent = {
  slug: "kalisz",
  h1: "Thermomix Kalisz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kalisz — prezentacja i cena",
  seoDescription:
    "Thermomix w Kaliszu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kalisz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kaliszu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kalisza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kalisz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kaliszu – jak wygląda prezentacja?",
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
      id: "przyprawy",
      heading: "Miasto na szlaku, którym wożono towar przez pół Europy",
      paragraphs: [
        "Kalisz uchodzi za najstarsze miasto w Polsce i pojawia się u Ptolemeusza jako Calisia, przy szlaku, którym wożono bursztyn znad Bałtyku aż nad Adriatyk. Ludzie przemierzali pół Europy za towarem, który miał wartość, bo był rzadki. Wykorzystuję to do rzeczy, która w gotowaniu robi ogromną różnicę, a prawie nigdy nie pojawia się na pokazach: do przypraw.",
        "Zacznę od twardej obserwacji. Bardzo wiele domowych dań jest poprawnie ugotowanych i po prostu nudnych — i nie jest to wina garnka ani urządzenia. Jest to kwestia tego, że przyprawiamy z gotowej torebki, w której głównym składnikiem bywa sól, a wszystko inne jest tam w ilościach śladowych.",
        "Co z tym ma wspólnego to urządzenie? Tyle, że mieli. Naprawdę mieli — pieprz ziarnisty, kolendrę, kminek, suszone grzyby, cukier na puder, kaszę na mąkę. Ziarna zmielone bezpośrednio przed gotowaniem pachną zupełnie inaczej niż proszek stojący w szafce od dwóch lat, i to jest różnica, którą wyczuwa każdy przy pierwszej łyżce.",
        "Praktyczny wniosek jest taki, że zamiast kupować dziesięć gotowych mieszanek, warto mieć kilka rzeczy w ziarnach i mielić je na bieżąco. Wyjdzie taniej, a smak będzie mocniejszy. Nie podaję tu proporcji ani przepisów na mieszanki, bo każdy dom ma inne — powiem tylko, że dwie albo trzy własne mieszanki wystarczą na cały tydzień gotowania.",
        "I żeby było uczciwie: to nie jest funkcja, dla której kupuje się takie urządzenie. Młynek do przypraw kosztuje ułamek tej ceny. Piszę o tym, bo jeśli już go macie, to jest to rzecz, którą większość osób odkrywa dopiero po roku — a szkoda, bo działa od pierwszego dnia.",
        "Na spotkaniu mogę to pokazać w trzydzieści sekund. Powiedzcie tylko, co macie w szafce w ziarnach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kaliszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kaliszu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kaliskiej rodziny",
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

  districtsHeading: "Do których części Kalisza i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Dobrzec",
    "Majków",
    "Rypinek",
    "Chmielnik",
    "Tyniec",
    "Winiary",
    "Piwonice",
    "Szczypiorno",
  ],

  nearbyHeading: "Poza Kalisz też przyjadę",
  nearbyParagraphs: [
    "Ostrów Wielkopolski, Nowe Skalmierzyce, Stawiszyn i Pleszew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostrów Wielkopolski", "Nowe Skalmierzyce", "Stawiszyn", "Pleszew", "Odolanów"],

  about: blokOMnie("do Kalisza", "w Kaliszu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kalisza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kaliszu"),
    {
      question: "Czy Thermomix mieli przyprawy?",
      answer:
        "Tak — pieprz ziarnisty, kolendrę, kminek, suszone grzyby, cukier na puder, kaszę na mąkę. Ziarna zmielone tuż przed gotowaniem pachną zupełnie inaczej niż proszek stojący w szafce od dwóch lat i to słychać już przy pierwszej łyżce. Pokażę to na spotkaniu w trzydzieści sekund.",
    },
    {
      question: "Czy warto kupić urządzenie dla samego mielenia?",
      answer:
        "Nie i nie będę tego udawać — młynek do przypraw kosztuje ułamek tej ceny. Piszę o tym, bo jeśli już taki sprzęt macie, to większość osób odkrywa tę możliwość dopiero po roku, a działa ona od pierwszego dnia.",
    },
  ],

  geo: { lat: 51.7611, lng: 18.0900 },
};
