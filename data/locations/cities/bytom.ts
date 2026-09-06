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
 * BYTOM — najstarsze miasto regionu i jednocześnie to, o którym najtrudniej
 * pisać uczciwie. Prawa miejskie z 1254 roku, wielka historia górnicza,
 * a przy tym kilkadziesiąt lat ubytku ludności i widoczne skutki szkód
 * górniczych. Strona, która udaje, że tego nie ma, i sprzedaje „dynamicznie
 * rozwijające się miasto", brzmi fałszywie dla każdego, kto tu mieszka.
 *
 * KĄT: Bytom to miasto, w którym bardzo wiele osób ZOSTAŁO — często
 * w mieszkaniu po rodzicach, często w domu wielopokoleniowym. To zupełnie
 * inna sytuacja kuchenna niż w Gliwicach pełnych jednoosobowych mieszkań:
 * gotuje się dla większej liczby osób, częściej według rodzinnych
 * przepisów i w kuchni, która ma swoje lata.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bytom otrzymał prawa miejskie w 1254 roku i jest jednym z najstarszych
 *   miast Górnego Śląska,
 * — działa tu Opera Śląska, jedna z najstarszych scen operowych w Polsce,
 * — miasto zmagało się i zmaga ze szkodami górniczymi po dawnej eksploatacji,
 * — dzielnice takie jak Miechowice, Szombierki czy Łagiewniki były dawniej
 *   samodzielnymi miejscowościami,
 * — elektrociepłownia Szombierki to zabytkowy obiekt na Szlaku Zabytków
 *   Techniki.
 *
 * CZEGO NIE MA: liczb dotyczących spadku ludności, bezrobocia i budynków
 * objętych szkodami — to dane, których nie mam potwierdzonych, a podane
 * na oko byłyby albo krzywdzące, albo nieprawdziwe.
 */
export const BYTOM: CityContent = {
  slug: "bytom",
  h1: "Thermomix Bytom – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Bytom — prezentacja i cena",
  seoDescription:
    "Thermomix w Bytomiu: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bytom — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bytomiu. Prezentacja bezpłatna, ratę liczymy na miejscu, decyzja należy do Ciebie.",

  lead:
    "Przyjeżdżam do Bytomia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Miechowicach, w Szombierkach czy na Stroszku. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Bytom, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bytomiu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami. Nie robisz zakupów, nie sprzątasz kuchni na tę okazję i nie musisz niczego pożyczać od sąsiadki. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz mi wcześniej, ile osób siada u Was do stołu i czego nie jecie — dobiorę dania pod Was.",
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
      id: "kuchnia-po-rodzicach",
      heading: "Miasto, w którym gotuje się w kuchni po rodzicach",
      paragraphs: [
        "Bytom ma prawa miejskie od 1254 roku i to widać — nie w folderach turystycznych, tylko w mieszkaniach. Bardzo wiele osób mieszka tu w lokalu, który był wcześniej rodziców albo dziadków, a niemała część domów jest wielopokoleniowa. Kuchnia bywa więc starsza niż jej użytkownicy i urządzona wtedy, gdy nikt nie planował miejsca na sprzęt na blacie.",
        "To zmienia prezentację w dwóch praktycznych rzeczach. Po pierwsze, patrzymy na blat naprawdę, a nie teoretycznie — gdzie to stanie, czy nie zasłoni gniazdka i czy da się przy tym normalnie stać. Po drugie, częściej gotujemy z tego, co w tym domu robi się od lat, bo w Bytomiu przepis „po babci” to zwykle wciąż żywy przepis, a nie wspomnienie.",
        "Uczciwie: jeśli po obejrzeniu Twojej kuchni uznam, że urządzenie będzie tam przeszkadzać, powiem to. Wolę stracić sprzedaż niż sprzedać coś, co za miesiąc wyląduje w szafce.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bytomiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Jeśli wolisz, zostaw kontakt w formularzu i dopisz, o której oddzwonić.",
        "Podaj dzielnicę. Stolarzowice i Sucha Góra to zupełnie inny kierunek niż Bobrek czy Rozbark, a od tego zależy pora, którą mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bytomiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bytomskiej rodziny",
      paragraphs: [
        "W domu, w którym mieszkają trzy pokolenia, obiad jest sprawą poważną: trzeba pogodzić to, co lubią dzieci, z tym, co może jeść babcia, i zmieścić się w czasie kogoś, kto pracuje. Zwykle spada to na jedną osobę.",
        "Thermomix zdejmuje z tego najbardziej męczącą część, czyli konieczność stania przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy Ty robisz coś innego albo zajmujesz się kimś innym. Wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
        "Dwie rzeczy sprawdzają się tu szczególnie: gotowanie na parze, gdy ktoś w domu musi jeść lżej, i możliwość zrobienia większej porcji bez większego wysiłku, żeby starczyło też na jutro.",
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

  districtsHeading: "Do których dzielnic Bytomia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — od Śródmieścia po Stolarzowice i Górniki.",
    "Część bytomskich dzielnic była kiedyś osobnymi miejscowościami i do dziś ma własny charakter. Powiedz przy umawianiu, gdzie mieszkasz i jak wygląda dojście do mieszkania — resztę zaplanuję sama.",
  ],
  districts: [
    "Śródmieście",
    "Rozbark",
    "Bobrek",
    "Karb",
    "Łagiewniki",
    "Miechowice",
    "Stroszek",
    "Szombierki",
    "Osiedle Generała Ziętka",
    "Sucha Góra",
    "Stolarzowice",
    "Górniki",
    "Dąbrowa Miejska",
    "Szombierki-Orzeł Biały",
  ],

  nearbyHeading: "Poza Bytom też przyjadę",
  nearbyParagraphs: [
    "Bytom sąsiaduje z Zabrzem, Chorzowem, Rudą Śląską, Piekarami i Tarnowskimi Górami — to praktycznie jedna trasa i jedno popołudnie.",
  ],
  nearbyTowns: [
    "Zabrze",
    "Chorzów",
    "Ruda Śląska",
    "Piekary Śląskie",
    "Tarnowskie Góry",
    "Świętochłowice",
    "Katowice",
  ],

  about: blokOMnie("do Bytomia", "w Bytomiu i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bytomia bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Bytomia jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bytomiu"),
    {
      question: "Mam starą, ciasną kuchnię — czy prezentacja ma sens?",
      answer:
        "Ma, i to większy niż w nowej. W ciasnej kuchni najważniejsze pytanie brzmi „czy to się zmieści i czy nie będzie przeszkadzać” — a na to odpowiada się tylko na miejscu, na Twoim blacie. Powiedz przy umawianiu, że kuchnia jest mała, a przywiozę mniej naczyń.",
    },
    {
      question: "Czy da się umówić spotkanie dla całej rodziny, łącznie z babcią?",
      answer:
        "Jak najbardziej i to częsta sytuacja. Gdy w domu gotuje się dla kilku pokoleń, dobrze, żeby wszyscy zobaczyli urządzenie — zwłaszcza osoba, która najczęściej stoi przy garnku.",
    },
  ],

  geo: { lat: 50.3483, lng: 18.9157 },
};
