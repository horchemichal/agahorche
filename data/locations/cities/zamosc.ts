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
 * ZAMOŚĆ — miasto zaprojektowane w całości i od zera, w XVI wieku, przez
 * jednego architekta dla jednego fundatora. Renesansowy układ z Rynkiem
 * Wielkim, ratuszem i kamienicami ormiańskimi przetrwał do dziś i jest
 * wpisany na listę światowego dziedzictwa UNESCO.
 *
 * KĄT: zaprojektowane naraz kontra dokładane po kolei. Zamość jest
 * przeciwieństwem sposobu, w jaki powstaje polska kuchnia — a kuchnia
 * powstaje przez dokładanie: blender, mikser, malakser, waga, parowar,
 * sokowirówka, każde kupione osobno, przy innej okazji, i połowa z nich
 * ląduje w szafce. Sekcja ma nazwać to wprost i UCZCIWIE ROZLICZYĆ,
 * które z tych urządzeń Thermomix realnie zastępuje, a których nie —
 * łącznie ze zdaniem, że dobrego robota planetarnego nie warto oddawać.
 *
 * ROZGRANICZENIE WOBEC NOWEJ SŁUPI. Tam lista dotyczy dużego sprzętu:
 * patelni, piekarnika, grilla. Tu chodzi o MAŁE AGD z szafki — inne
 * przedmioty, inny werdykt, inna rozmowa.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Zamość powstał w XVI wieku jako miasto zaprojektowane od podstaw
 *   przez włoskiego architekta dla Jana Zamoyskiego,
 * — zachowany renesansowy układ ze Starym Miastem i Rynkiem Wielkim jest
 *   wpisany na listę światowego dziedzictwa UNESCO,
 * — miasto było twierdzą, a jego bryła powstała jako jedna całość,
 * — dzielnice: Stare Miasto, Nowe Miasto, Karolówka, Planty, Janowice,
 *   Zamczysko, Majdan, Słoneczny Stok, Powiatowa, Rataja.
 *
 * CZEGO NIE MA: dat rocznych podawanych z pamięci, nazw marek sprzętu AGD,
 * porównań wydajności między urządzeniami.
 */
export const ZAMOSC: CityContent = {
  slug: "zamosc",
  h1: "Thermomix Zamość – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Zamość — prezentacja i cena",
  seoDescription:
    "Thermomix w Zamościu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zamość — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zamościu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zamościa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, od Starego Miasta po Karolówkę i Janowice.",

  highlights: highlightyStandardowe("Zamość i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zamościu – jak wygląda prezentacja?",
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
      id: "szuflada-pelna-urzadzen",
      heading: "Miasto zaprojektowane naraz — i kuchnia dokładana po kawałku",
      paragraphs: [
        "Zamość jest rzadkim przypadkiem: całe miasto powstało jako jeden pomysł, narysowane przez jednego architekta, zbudowane jako jedna bryła. Nic tu nie zostało doklejone przez przypadek i po czterystu latach wciąż to widać.",
        "Nasze kuchnie powstają dokładnie odwrotnie. Nikt ich nie projektuje — one się nazbierają. Blender, bo była promocja. Mikser, bo stary się zepsuł. Malakser od teściowej. Waga kuchenna, parowar, sokowirówka, opiekacz. Każde kupione osobno, przy innej okazji, i połowa z nich stoi w tej samej szafce, do której zagląda się dwa razy w roku.",
        "Skoro więc mam pisać uczciwie, policzmy to na miejscu. Thermomix rzeczywiście zastępuje kilka z tych rzeczy: blender kielichowy, prostą wagę kuchenną, parowar i najczęściej także malakser do siekania i mielenia. To nie jest chwyt reklamowy — te czynności robi w jednym naczyniu i naprawdę nie ma potem powodu wyciągać trzech urządzeń.",
        "A teraz to, czego żaden sprzedawca nie powie. Jeśli macie dobry robot planetarny i lubicie piec — zostawcie go. Do dużych porcji ciasta, do bez i do kremów on jest lepszy i nie zamierzam udawać inaczej. To samo dotyczy blendera ręcznego: kosztuje grosze, myje się w sekundę i do zblendowania zupy w garnku bywa po prostu wygodniejszy.",
        "Sens tego zakupu nie polega więc na tym, że wyrzucicie całą szafkę. Polega na tym, że przestaniecie do niej sięgać przy codziennym obiedzie. Reszta niech zostanie tam, gdzie jest, i niech pracuje wtedy, kiedy jest naprawdę potrzebna.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zamościu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i kilka pasujących terminów. Jeśli mieszkacie na Starym Mieście, uprzedźcie o dojeździe — to zmienia tylko to, o której zapukam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zamościu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zamojskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to ona wyciąga, a potem myje wszystkie te urządzenia z szafki.",
        "Thermomix pomaga tym, że nie wymaga obecności, a wszystko dzieje się w jednym naczyniu. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym.",
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

  districtsHeading: "Do których dzielnic Zamościa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Nowe Miasto",
    "Karolówka",
    "Planty",
    "Janowice",
    "Zamczysko",
    "Majdan",
    "Słoneczny Stok",
    "Powiatowa",
    "Rataja",
  ],

  nearbyHeading: "Poza Zamość też przyjadę",
  nearbyParagraphs: [
    "Szczebrzeszyn, Zwierzyniec, Krasnystaw, Tomaszów Lubelski, Hrubieszów i Biłgoraj są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Szczebrzeszyn",
    "Zwierzyniec",
    "Krasnystaw",
    "Tomaszów Lubelski",
    "Hrubieszów",
    "Biłgoraj",
    "Krasnobród",
  ],

  about: blokOMnie("do Zamościa", "w Zamościu i na Zamojszczyźnie", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Zamościa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zamościu"),
    {
      question: "Czy Thermomix zastąpi mi blender, mikser i malakser?",
      answer:
        "Blender kielichowy, wagę, parowar i najczęściej malakser — tak. Robota planetarnego nie zastąpi, jeśli dużo pieczecie, i szczerze radzę go zostawić. Blender ręczny też się przyda, bo do zupy w garnku bywa po prostu wygodniejszy.",
    },
    {
      question: "Mam już dużo sprzętu w kuchni. Czy to nie będzie kolejny gadżet w szafce?",
      answer:
        "Będzie, jeśli kupicie go z ciekawości. Nie będzie, jeśli zastąpi Wam codzienne czynności — dlatego na spotkaniu pytam, co i jak często gotujecie, i jeśli odpowiedź brzmi „raczej rzadko”, mówię wprost, że to się nie obroni.",
    },
  ],

  geo: { lat: 50.7231, lng: 23.2519 },
};
