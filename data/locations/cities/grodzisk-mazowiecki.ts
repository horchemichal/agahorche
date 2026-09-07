import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * GRODZISK MAZOWIECKI — końcowa stacja kolejki WKD, osobnej linii
 * łączącej miasto z Warszawą. Codziennie ktoś stąd wyjeżdża, a ktoś
 * inny zostaje na miejscu.
 *
 * KĄT: jak opowiedzieć o tym zakupie osobie, której nie było
 * na prezentacji. Sytuacja bardzo częsta — spotkanie odbywa się w ciągu
 * dnia, a druga osoba wraca wieczorem i słyszy tylko relację.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — relacja z drugiej ręki jest najgorszym możliwym sposobem
 *   przedstawienia takiego wydatku i zwykle kończy się kłótnią o cenę,
 * — dlatego Aga przyjeżdża drugi raz, dla tej osoby, bezpłatnie
 *   i bez żadnego warunku — to jest jej własna, sprawdzona praktyka,
 * — czego Aga NIE zrobi: nie pomoże nikogo przekonać ani nie stanie
 *   po niczyjej stronie w domowej rozmowie,
 * — i uczciwie: jeśli druga osoba jest przeciw, lepiej odłożyć decyzję,
 *   bo zakup „przepchnięty" wraca potem jako pretensja.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TECHNIK PERSWAZJI, argumentów „jak przekonać męża/żonę"
 *   ani niczego, co robi z drugiej osoby przeszkodę do pokonania.
 * — ŻADNYCH LICZB O CENIE ani promocjach na stronie.
 * — Nie oceniać nikogo, kto jest przeciw. To jest rozsądna postawa
 *   przy dużym wydatku, a nie upór.
 *
 * ROZGRANICZENIE. Gdańsk mówi o domu, w którym jedno chce, a drugie nie
 * (oboje obecni), Wrocław o dwóch osobach składających się na zakup,
 * Piotrków o rozstrzyganiu sporu. Tutaj chodzi o NIEOBECNOŚĆ jednej
 * osoby na prezentacji i o relację z drugiej ręki.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Grodzisk Mazowiecki jest końcową stacją kolejki WKD do Warszawy.
 */
export const GRODZISK_MAZOWIECKI: CityContent = {
  slug: "grodzisk-mazowiecki",
  h1: "Thermomix Grodzisk Mazowiecki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Grodzisk Mazowiecki — prezentacja",
  seoDescription:
    "Thermomix w Grodzisku Mazowieckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grodzisk Mazowiecki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grodzisku Mazowieckim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grodziska Mazowieckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Grodzisk Mazowiecki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jeśli kogoś nie było — przyjeżdżam drugi raz, bezpłatnie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grodzisku Mazowieckim – jak wygląda prezentacja?",
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
      id: "opowiedziec-nieobecnemu",
      heading: "Miasto końcowej stacji — i rozmowa z kimś, kogo nie było na prezentacji",
      paragraphs: [
        "Grodzisk jest końcem linii, którą rano wyjeżdża się do Warszawy, a wieczorem wraca. To zwyczajny układ w wielu domach tutaj i ma prosty skutek: prezentacja odbywa się w ciągu dnia, a druga osoba dowiaduje się o wszystkim wieczorem, z relacji.",
        "Powiem, dlaczego to jest kłopot większy, niż się wydaje. Opowiedzenie o takim wydatku z drugiej ręki jest najgorszym możliwym sposobem jego przedstawienia. Z całej godziny — z tego, co się ugotowało, jak to szło i co się wtedy zrozumiało — zostaje jedno zdanie i jedna liczba. A rozmowa, która zaczyna się od liczby, kończy się kłótnią o pieniądze, nawet gdy oboje w gruncie rzeczy chcieliby tego samego.",
        "Dlatego robię coś, co uważam za najprostsze rozwiązanie: przyjeżdżam drugi raz, dla tej osoby, bezpłatnie i bez żadnego warunku. Nie trzeba niczego uzasadniać ani obiecywać, że wtedy będzie decyzja. Wolę pojechać dwa razy niż być powodem domowej awantury, w której jedna strona referuje coś, czego sama widziała tylko raz.",
        "Jest jednak rzecz, której nie zrobię, i chcę ją napisać wyraźnie. Nie pomogę nikogo przekonać. Nie mam listy argumentów „jak przedstawić to mężowi” ani żadnych chwytów tego rodzaju — a jeśli je gdzieś widzicie, to jest dokładnie ten rodzaj sprzedaży, od którego trzymam się z daleka. Druga osoba w domu nie jest przeszkodą do pokonania.",
        "Nie ocenię też nikogo, kto jest przeciw. Sprzeciw wobec dużego wydatku to rozsądna postawa, a nie upór, i sama zachowałabym się tak samo. Na drugim spotkaniu odpowiadam na pytania, także te niewygodne, i mówię to samo, co za pierwszym razem — łącznie z tym, czego urządzenie nie robi.",
        "Jeśli po tym wszystkim jedno z Was nadal jest przeciw, moja rada jest jedna: odłóżcie to. Zakup przepchnięty mimo sprzeciwu wraca potem jako pretensja przy pierwszej okazji, a sprzęt stoi w kuchni jako dowód w cudzej sprawie. Za pół roku możecie wrócić do tematu i chętnie przyjadę jeszcze raz.",
      ],
      links: [{ href: "/prezentacja", label: "Umów prezentację" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grodzisku Mazowieckim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli druga osoba wraca późno, powiedzcie mi to od razu — dopasuję godzinę albo przyjadę dwa razy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grodzisku Mazowieckim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla grodziskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Warszawy.",
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

  districtsHeading: "Do których części Grodziska Mazowieckiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Kopernika",
    "Piaskowa",
    "Jordanowice",
    "Sadowa",
    "Cegielnia",
    "Osiedle Bairda",
    "Chrzanów",
  ],

  nearbyHeading: "Poza Grodzisk Mazowiecki też przyjadę",
  nearbyParagraphs: [
    "Milanówek, Brwinów, Podkowa Leśna i Żyrardów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Milanówek", "Brwinów", "Podkowa Leśna", "Żyrardów", "Pruszków", "Warszawa"],

  about: blokOMnie("do Grodziska Mazowieckiego", "w Grodzisku Mazowieckim i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grodziska Mazowieckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Grodzisku Mazowieckim"),
    {
      question: "Męża nie będzie na prezentacji. Jak mu to potem wytłumaczyć?",
      answer:
        "Najlepiej wcale — przyjadę drugi raz, dla niego, bezpłatnie i bez żadnego warunku. Relacja z drugiej ręki sprowadza całą godzinę do jednego zdania i jednej liczby, a rozmowa zaczęta od liczby kończy się kłótnią o pieniądze. Wolę pojechać dwa razy.",
    },
    {
      question: "Pomożesz mi go przekonać?",
      answer:
        "Nie. Nie mam listy argumentów tego rodzaju i nie stanę po niczyjej stronie w domowej rozmowie. Odpowiem na pytania, także niewygodne, i powiem to samo, co za pierwszym razem. Jeśli jedno z Was jest przeciw, radzę odłożyć decyzję — zakup przepchnięty mimo sprzeciwu wraca potem jako pretensja.",
    },
  ],

  geo: { lat: 52.1094, lng: 20.6236 },
};
