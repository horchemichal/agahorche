import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * TARNOBRZEG — miasto, które przez kilkadziesiąt lat żyło z siarki,
 * a potem musiało wymyślić się na nowo. Po wyrobisku kopalni powstało
 * Jezioro Tarnobrzeskie — jeden z największych sztucznych zbiorników
 * tego typu w Polsce, dziś kąpielisko w środku miasta.
 *
 * KĄT: to jest miasto po zmianie. Pokolenie, które pracowało w siarce,
 * i pokolenie, które jej nie pamięta, mieszkają tu obok siebie — bardzo
 * często pod jednym dachem. Kuchennie daje to sytuację, którą widać
 * w wielu podkarpackich domach, ale tu jest szczególnie wyraźna: DWA
 * SPOSOBY JEDZENIA W JEDNYM DOMU. Rodzice gotują jak zawsze, dzieci
 * jedzą inaczej i to bywa źródłem cichego napięcia przy stole.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Tarnobrzeg rozwinął się w drugiej połowie XX wieku dzięki wydobyciu
 *   siarki w Zagłębiu Siarkowym; kopalnię zamknięto, a wyrobisko zalano,
 * — powstałe w ten sposób Jezioro Tarnobrzeskie jest dziś terenem
 *   rekreacyjnym w granicach miasta,
 * — w Dzikowie, dzielnicy Tarnobrzega, stoi zamek Tarnowskich,
 * — miasto leży nad Wisłą, przy granicy z województwem świętokrzyskim,
 * — dzielnice: Serbinów, Wielowieś, Miechocin, Mokrzyszów, Zakrzów,
 *   Sobów, Nagnajów, Dzików, Sielec.
 *
 * CZEGO NIE MA: dat zamknięcia kopalni, danych o zatrudnieniu, liczb
 * dotyczących jeziora ani porad żywieniowych — od tego są dietetycy.
 */
export const TARNOBRZEG: CityContent = {
  slug: "tarnobrzeg",
  h1: "Thermomix Tarnobrzeg – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Tarnobrzeg — prezentacja i cena",
  seoDescription:
    "Thermomix w Tarnobrzegu: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tarnobrzeg — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tarnobrzegu. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Tarnobrzega z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Serbinowie, w Dzikowie, Wielowsi czy Mokrzyszowie. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Tarnobrzeg, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tarnobrzegu – jak wygląda prezentacja?",
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
      id: "dwa-sposoby-jedzenia",
      heading: "Dwa sposoby jedzenia przy jednym stole",
      paragraphs: [
        "Tarnobrzeg przez kilkadziesiąt lat żył z siarki, a potem musiał wymyślić się na nowo. Po wyrobisku kopalni zostało jezioro w środku miasta — dziś kąpielisko, kiedyś największy pracodawca w okolicy. Pokolenie, które tam pracowało, i pokolenie, które tego nie pamięta, mieszkają tu obok siebie, bardzo często pod jednym dachem.",
        "Przy stole widać to co niedzielę. Rodzice gotują tak, jak gotowali zawsze: konkretnie, tłuściej, z mięsem i zasmażką. Dorosłe dzieci jedzą inaczej — mniej mięsa, więcej warzyw, czasem coś, czego w tym domu nigdy nie było. I zaczyna się to ciche napięcie: jedni uważają, że tamto jest niezdrowe, drudzy, że to nie jest jedzenie.",
        "Nie mam ambicji tego rozstrzygać i nie moja to sprawa, kto ma rację. Ale jedno mogę powiedzieć z doświadczenia: to jest sytuacja, w której jedno urządzenie realnie pomaga, bo pozwala zrobić dwie wersje bez robienia dwóch obiadów. Warzywa na parze w Varomie powstają równolegle z tym, co gotuje się w naczyniu. Zupę można rozdzielić przed dodaniem śmietany. Ta sama baza sosu idzie w dwie strony.",
        "Na prezentacji chętnie pokażę właśnie to, jeśli tak u Was jest. Powiedz przy umawianiu, kto co je — dobiorę danie tak, żeby wyszło z niego jedzenie dla obu stron stołu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tarnobrzegu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę. Wielowieś i Sobów to inny kierunek niż Serbinów, a od tego zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tarnobrzegu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tarnobrzeskiej rodziny",
      paragraphs: [
        "W domu, w którym mieszka kilka pokoleń, obiad jest sprawą poważną: trzeba pogodzić to, co lubią dzieci, z tym, co jedzą rodzice, i zmieścić się w czasie kogoś, kto pracuje. Zwykle spada to na jedną osobę.",
        "Thermomix zdejmuje z tego najbardziej męczącą część, czyli konieczność stania przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się kimś innym, a wszystko dzieje się w jednym naczyniu.",
        "Gotowanie na parze przydaje się tu podwójnie: gdy ktoś w domu musi jeść lżej i gdy trzeba przygotować dwie wersje jednego obiadu bez drugiego garnka.",
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

  districtsHeading: "Do których dzielnic Tarnobrzega dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dzielnic, które wyglądają jak osobne wsie.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Serbinów",
    "Śródmieście",
    "Dzików",
    "Wielowieś",
    "Miechocin",
    "Mokrzyszów",
    "Zakrzów",
    "Sobów",
    "Nagnajów",
    "Sielec",
    "Ocice",
    "Machów",
    "Piastów",
  ],

  nearbyHeading: "Poza Tarnobrzeg też przyjadę",
  nearbyParagraphs: [
    "Stalowa Wola, Nowa Dęba, Mielec, Baranów Sandomierski i Gorzyce są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Stalowa Wola",
    "Nowa Dęba",
    "Mielec",
    "Nisko",
    "Kolbuszowa",
  ],

  about: blokOMnie("do Tarnobrzega", "w Tarnobrzegu i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tarnobrzega bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Tarnobrzega jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tarnobrzegu"),
    {
      question: "W domu jedni jedzą lżej, drudzy tradycyjnie — czy da się to pogodzić?",
      answer:
        "W dużej części tak i to jest jeden z sensowniejszych powodów zakupu. Warzywa na parze powstają równolegle z tym, co gotuje się w naczyniu, a zupę można rozdzielić przed dodaniem śmietany — więc jedno gotowanie daje dwie wersje. Nie rozwiąże to sporu przy stole, ale zdejmie z kogoś robienie dwóch obiadów.",
    },
    {
      question: "Czy przyjedziesz do Wielowsi albo Sobowa?",
      answer:
        "Tak, do każdej dzielnicy. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.5731, lng: 21.6797 },
};
