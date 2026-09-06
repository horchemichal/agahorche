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
 * RUDA ŚLĄSKA — miasto bez centrum. Powstało z połączenia Rudy z Nowym
 * Bytomiem i kolejnymi miejscowościami, ma jedenaście dzielnic i żadna
 * z nich nie jest „tym" centrum. Urząd stoi w Nowym Bytomiu, największy
 * handel jest w Wirku, a kościół, do którego się chodzi, stoi u siebie.
 *
 * KĄT: skoro nie ma jednego centrum, życie toczy się w dzielnicy. Ludzie
 * z Kochłowic nie jeżdżą „do miasta", tylko funkcjonują na miejscu — i to
 * jest realna różnica wobec Katowic, gdzie wszystko ciągnie do Rynku.
 * Kuchennie oznacza to sąsiedztwo, które naprawdę działa: prezentacje
 * w Rudzie bardzo często kończą się kolejnymi u koleżanki z tej samej ulicy.
 *
 * Drugi wątek: familoki. Ruda ma ich wyjątkowo dużo i to konkretny problem
 * kuchenny — ciasna kuchnia, stara instalacja, mało gniazdek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ruda Śląska powstała w 1959 roku z połączenia Rudy i Nowego Bytomia,
 *   a później przyłączono kolejne miejscowości; dziś ma jedenaście dzielnic,
 * — miasto nie ma jednego wyraźnego centrum — funkcje miejskie są rozdzielone
 *   między dzielnice,
 * — w Rudzie zachowało się wiele familoków, czyli ceglanych osiedli
 *   robotniczych z przełomu XIX i XX wieku,
 * — Kolonia Ficinus w Wirku to zabytkowa robotnicza zabudowa na Szlaku
 *   Zabytków Techniki.
 *
 * CZEGO NIE MA: liczby familoków, danych o kopalniach i zatrudnieniu,
 * twierdzeń o stanie instalacji elektrycznej w konkretnych budynkach.
 */
export const RUDA_SLASKA: CityContent = {
  slug: "ruda-slaska",
  h1: "Thermomix Ruda Śląska – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ruda Śląska — prezentacja i cena",
  seoDescription:
    "Thermomix w Rudzie Śląskiej: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ruda Śląska — prezentacja u Ciebie, bez dopłat",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rudzie Śląskiej. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Rudy Śląskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Nowym Bytomiu, Wirku, Kochłowicach, Halembie czy Bykowinie. Prezentacja i dojazd są bezpłatne, do każdej dzielnicy tak samo.",

  highlights: highlightyStandardowe("cała Ruda, wszystkie jedenaście dzielnic"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rudzie Śląskiej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami. Nie robisz zakupów, nie sprzątasz kuchni na tę okazję i nie pożyczasz naczyń. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia, a spotkanie jest bezpłatne niezależnie od tego, co postanowisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "miasto-bez-centrum",
      heading: "Miasto bez jednego centrum — czyli wszystko dzieje się w dzielnicy",
      paragraphs: [
        "Ruda Śląska powstała z połączenia osobnych miejscowości i to widać do dziś. Jedenaście dzielnic, urząd w jednej, największy handel w drugiej, a szkoła i kościół u siebie. Nie ma tu „miasta”, do którego się jedzie — jest dzielnica, w której się mieszka.",
        "Dla mnie ma to bardzo konkretne znaczenie. W Rudzie prezentacje wyjątkowo często zaczynają się od zdania „bo koleżanka z ulicy obok mówiła” — i równie często kończą się umówieniem kolejnego spotkania kilka domów dalej. Sąsiedztwo działa tu naprawdę, a nie tylko na papierze.",
        "Praktycznie znaczy to też, że chętnie umawiam się w Rudzie na dwa spotkania jednego wieczoru w tej samej dzielnicy. Jeśli ktoś z Waszej ulicy też chce zobaczyć urządzenie, powiedzcie od razu — łatwiej znaleźć jeden dobry termin niż dwa osobne.",
      ],
    },
    {
      id: "familok",
      heading: "Prezentacja w familoku — o czym warto powiedzieć wcześniej",
      paragraphs: [
        "W Rudzie zachowało się wyjątkowo dużo familoków, a Kolonia Ficinus w Wirku jest tego najbardziej znanym przykładem. Mieszka się w nich normalnie, ale kuchnia bywa mała, a gniazdek jest tyle, ile było wtedy, gdy nikt nie planował sprzętu na blacie.",
        "Dlatego przy umawianiu pytam o dwie prozaiczne rzeczy: czy jest wolne gniazdko przy blacie i ile mam realnie miejsca do postawienia urządzenia. Jeśli miejsca jest mało, przywożę mniej naczyń i gotujemy prościej — prezentacja od tego nie traci, a Ty nie musisz przed moim przyjściem przestawiać pół kuchni.",
        "Uczciwie: jeśli po zobaczeniu Twojej kuchni uznam, że urządzenie będzie tam bardziej przeszkadzać niż pomagać, powiem to wprost. Wolę stracić sprzedaż niż sprzedać coś, co za miesiąc wyląduje w szafce w piwnicy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rudzie Śląskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę — Halemba i Kochłowice to inny kierunek niż Orzegów czy Godula, a od tego zależy tylko godzina, którą mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rudzie Śląskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rudzkiej rodziny",
      paragraphs: [
        "W wielu rudzkich domach gotuje się dla większej liczby osób, niż wynikałoby z metrażu — mieszkanie po rodzicach, dorosłe dziecko, które jeszcze nie wyjechało, wnuki w soboty. Obiad jest wtedy sprawą poważną i zwykle spada na jedną osobę.",
        "Thermomix zdejmuje z tego najbardziej męczącą część, czyli konieczność stania przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym. Wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
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

  districtsHeading: "Do których dzielnic Rudy Śląskiej dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu, bez dopłaty za dojazd.",
    "W Rudzie nazwa dzielnicy mówi mi więcej niż adres, bo to wciąż osobne miejscowości w jednych granicach. Powiedz przy umawianiu, gdzie mieszkasz — resztę zaplanuję sama.",
  ],
  districts: [
    "Nowy Bytom",
    "Ruda",
    "Wirek",
    "Bykowina",
    "Halemba",
    "Kochłowice",
    "Bielszowice",
    "Godula",
    "Orzegów",
    "Chebzie",
    "Czarny Las",
  ],

  nearbyHeading: "Poza Rudę też przyjadę",
  nearbyParagraphs: [
    "Ruda graniczy z Zabrzem, Bytomiem, Chorzowem, Świętochłowicami, Katowicami i Mikołowem — z każdego z tych miast jest tu kilkanaście minut, więc spokojnie łączę spotkania w jedno popołudnie.",
  ],
  nearbyTowns: [
    "Zabrze",
    "Bytom",
    "Chorzów",
    "Świętochłowice",
    "Katowice",
    "Mikołów",
    "Gliwice",
  ],

  about: blokOMnie("do Rudy Śląskiej", "w Rudzie i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rudy Śląskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich jedenastu dzielnic. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rudzie Śląskiej"),
    {
      question: "Mieszkam w familoku i mam bardzo małą kuchnię — czy to problem?",
      answer:
        "Nie, ale powiedz o tym przy umawianiu. Przywiozę wtedy mniej naczyń i będziemy gotować prościej. Ważne, żeby przy blacie było wolne gniazdko — resztę da się ułożyć.",
    },
    {
      question: "Czy możemy zaprosić sąsiadki na jedną prezentację?",
      answer:
        "Jak najbardziej i w Rudzie zdarza się to bardzo często. W grupie pytania padają odważniejsze, a ja i tak przyjeżdżam z tym samym zestawem — nie ma znaczenia, czy przy stole siedzą dwie osoby, czy sześć.",
    },
  ],

  geo: { lat: 50.2584, lng: 18.8563 },
};
