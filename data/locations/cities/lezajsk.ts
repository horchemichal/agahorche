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
 * LEŻAJSK — miasto bazyliki i sławnych organów. Zespół klasztorny
 * Bernardynów jest sanktuarium maryjnym, a organy leżajskie należą
 * do najcenniejszych instrumentów w Polsce; odbywają się na nich
 * doroczne festiwale muzyki organowej.
 *
 * KĄT: Leżajsk jest miejscem, do którego ludzie PRZYJEŻDŻAJĄ NA JEDEN
 * DZIEŃ — na pielgrzymkę, na koncert, do sanktuarium. To odwraca zwykły
 * układ małego miasta: tutaj gościnność jest zjawiskiem nieregularnym
 * i punktowym. Kuchennie oznacza to coś konkretnego, czego nie ma
 * w Piekarach (dwie stałe daty w roku): tu goście bywają NIEZAPOWIEDZIANI.
 * Ktoś dzwoni, że jest przejazdem, i za godzinę siada przy stole.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — bazylika i klasztor Bernardynów w Leżajsku to sanktuarium maryjne,
 * — organy leżajskie należą do najcenniejszych instrumentów tego typu
 *   w Polsce; odbywają się na nich festiwale muzyki organowej,
 * — miasto leży nad Sanem i jest siedzibą powiatu leżajskiego
 *   (m.in. Nowa Sarzyna, Grodzisko Dolne, Kuryłówka, Giedlarowa),
 * — w Leżajsku działa browar o wieloletniej tradycji,
 * — okolica ma charakter rolniczy, z rozproszoną zabudową.
 *
 * CZEGO NIE MA: liczby pielgrzymów, dat festiwali, nazw firm.
 */
export const LEZAJSK: CityContent = {
  slug: "lezajsk",
  h1: "Thermomix Leżajsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Leżajsk — prezentacja i cena",
  seoDescription:
    "Thermomix w Leżajsku: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat leżajski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Leżajsk — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Leżajsku i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Leżajska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Podklasztorze, w Giedlarowej czy Starym Mieście. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Leżajsk i cały powiat leżajski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Leżajsku – jak wygląda prezentacja?",
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
      id: "goscie-bez-zapowiedzi",
      heading: "Goście, o których dowiadujesz się godzinę wcześniej",
      paragraphs: [
        "Do Leżajska ludzie przyjeżdżają na jeden dzień: do sanktuarium, na pielgrzymkę, na koncert organowy. To odwraca zwykły układ małego miasta — tu ruch jest nieregularny i punktowy, a nie rozłożony po równo.",
        "W praktyce oznacza to sytuację, którą zna tu chyba każdy: telefon, że ktoś jest przejazdem i wpadnie na chwilę. Za godzinę przy stole siedzi pięć osób, o których rano nikt nie wiedział. Nie ma czasu na zakupy ani na plan.",
        "To jest inne zadanie niż wielkie gotowanie na zapowiedzianą uroczystość. Tu liczy się to, co da się zrobić szybko z tego, co jest w domu: zupa krem w kilkanaście minut, pasta na kanapki, ciasto, które wyrabia się samo, gdy Wy nakrywacie do stołu. Wszystko w jednym naczyniu, bez wyciągania trzech sprzętów.",
        "Na prezentacji chętnie pokażę dokładnie to — nie danie na trzy godziny, tylko coś, co ratuje sytuację, gdy goście są już w drodze.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Zobacz, co zrobisz z tego, co masz" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Leżajsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość — jeżdżę po całym powiecie leżajskim, a od kierunku zależy tylko godzina spotkania, nigdy jego cena.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Leżajsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla leżajskiej rodziny",
      paragraphs: [
        "Na co dzień w leżajskich domach obiad bywa jednym wspólnym posiłkiem, a w okolicy sporo osób gotuje z własnych warzyw i owoców.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania — co przy niespodziewanych gościach ma znaczenie podwójne.",
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

  districtsHeading: "Do których części Leżajska dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Podklasztor",
    "Osiedle Wilcza",
    "Osiedle Podolszyny",
    "Siedlanka",
    "Giedlarowa",
    "Brzóza Królewska",
  ],

  nearbyHeading: "Cały powiat leżajski i okolice",
  nearbyParagraphs: [
    "Nowa Sarzyna, Grodzisko Dolne, Kuryłówka i okoliczne wsie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Niska, Przeworska i Łańcuta.",
  ],
  nearbyTowns: [
    "Nowa Sarzyna",
    "Nisko",
    "Przeworsk",
    "Łańcut",
    "Rudnik nad Sanem",
    "Jarosław",
  ],

  about: blokOMnie("do Leżajska", "w Leżajsku i całym powiecie leżajskim", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Leżajska bez dodatkowej opłaty?",
      answer:
        "Tak, do Leżajska i do całego powiatu leżajskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Leżajsku"),
    {
      question: "Często mamy niespodziewanych gości — co pokażesz na prezentacji?",
      answer:
        "Właśnie to, jeśli tak powiesz przy umawianiu. Zamiast dania na trzy godziny zrobimy rzeczy, które ratują sytuację: zupę krem w kilkanaście minut, pastę na kanapki i ciasto, które wyrabia się samo, gdy nakrywasz do stołu. Wszystko z tego, co zwykle masz w domu.",
    },
    {
      question: "Czy przyjedziesz do Nowej Sarzyny albo Grodziska Dolnego?",
      answer:
        "Tak, jeżdżę po całym powiecie leżajskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.2622, lng: 22.4194 },
};
