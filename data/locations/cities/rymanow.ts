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
 * RYMANÓW — niewielkie miasto u podnóża Beskidu Niskiego, a kilka
 * kilometrów dalej Rymanów-Zdrój: uzdrowisko z wodami mineralnymi
 * i sanatoriami, w tym dziecięcymi. W sąsiedztwie leży drugie
 * uzdrowisko, Iwonicz-Zdrój.
 *
 * KĄT: to jedyne miejsce w obu falach, gdzie „lżejsze jedzenie" nie jest
 * modą ani nowinką, tylko czymś, o czym w wielu domach po prostu się
 * rozmawia — bo ktoś był na turnusie, ktoś przyjmuje kuracjuszy, ktoś
 * ma zalecenia po pobycie. Strona sprzedażowa musi tu uważać podwójnie:
 * NIE WOLNO wchodzić w porady zdrowotne ani sugerować, że urządzenie
 * cokolwiek leczy. Można natomiast uczciwie powiedzieć, co ono robi
 * technicznie — gotowanie na parze bez tłuszczu, kontrola temperatury,
 * gotowe składniki zamiast półproduktów — i zostawić decyzje lekarzowi
 * i dietetykowi.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Rymanów-Zdrój jest uzdrowiskiem z wodami mineralnymi, działają tam
 *   sanatoria, w tym dla dzieci,
 * — Iwonicz-Zdrój, sąsiednie uzdrowisko, leży w tym samym powiecie
 *   krośnieńskim,
 * — Rymanów leży u podnóża Beskidu Niskiego, na terenie dawnej
 *   Łemkowszczyzny,
 * — okolica jest w dużej mierze rolnicza i leśna, z rozproszoną zabudową,
 * — wiele gospodarstw w okolicy przyjmuje gości.
 *
 * CZEGO NIE MA: jakichkolwiek treści zdrowotnych, nazw schorzeń, zaleceń
 * żywieniowych, informacji o wodach leczniczych i o tym, komu co służy.
 */
export const RYMANOW: CityContent = {
  slug: "rymanow",
  h1: "Thermomix Rymanów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Rymanów — prezentacja i cena",
  seoDescription:
    "Thermomix w Rymanowie i Rymanowie-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rymanów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rymanowie i okolicy. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Rymanowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Rymanowa-Zdroju, Iwonicza i okolicznych wsi.",

  highlights: highlightyStandardowe("Rymanów, Zdrój i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rymanowie – jak wygląda prezentacja?",
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
      id: "lzejsze-jedzenie",
      heading: "Okolica, w której o lżejszym jedzeniu po prostu się rozmawia",
      paragraphs: [
        "Kilka kilometrów od Rymanowa leży Rymanów-Zdrój, a zaraz obok Iwonicz — dwa uzdrowiska w jednym powiecie. W praktyce znaczy to, że w tutejszych domach temat lżejszego jedzenia nie jest ani modą, ani nowinką z internetu. Ktoś był na turnusie, ktoś przyjmuje kuracjuszy, ktoś wrócił z zaleceniami i teraz gotuje inaczej niż dawniej.",
        "Od razu jedno zastrzeżenie, bo tu łatwo o nadużycie: nie jestem dietetyczką ani lekarką i nie będę udawać, że urządzenie kuchenne cokolwiek leczy albo że wie, co komu służy. Co jeść, ustala się z lekarzem, nie z przedstawicielką handlową.",
        "Mogę natomiast uczciwie powiedzieć, co Thermomix robi technicznie — i to akurat trafia w rzeczy, o które ludzie tu pytają. Gotuje na parze, więc bez tłuszczu i bez pilnowania. Trzyma ustawioną temperaturę, więc warzywa i ryba nie rozgotowują się „na oko”. Miksuje do dowolnej gęstości, co bywa potrzebne, gdy ktoś w domu musi jeść inaczej niż reszta. I pozwala robić w domu rzeczy, które zwykle kupuje się gotowe — pasty, sosy, chleb — więc wiadomo, co w nich jest.",
        "To wszystko. Nic więcej nie obiecuję i wolę powiedzieć za mało niż za dużo, zwłaszcza w takiej okolicy.",
      ],
    },
    {
      id: "goscie",
      heading: "Gdy w domu bywają goście",
      paragraphs: [
        "W okolicy obu zdrojów sporo gospodarstw przyjmuje gości — pokoje, kwatery, agroturystyka. Gotowanie przestaje wtedy być prywatną sprawą i liczy się co innego: powtarzalność, przygotowanie z wyprzedzeniem i to, żeby śniadanie dla kilku osób nie zjadało całego poranka.",
        "Jeśli tak u Was jest, powiedzcie o tym przy umawianiu. Prezentacja wygląda wtedy inaczej — mniej o rodzinnym obiedzie, więcej o tym, co da się zrobić wieczorem i podać rano.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rymanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość — jeżdżę też do Rymanowa-Zdroju, Iwonicza, Beska, Zarszyna i okolicznych wsi, a od kierunku zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rymanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rymanowskiej rodziny",
      paragraphs: [
        "Na co dzień obiad jest tu wspólnym posiłkiem, gotowanym często z własnych warzyw, a przygotowuje go zwykle ta sama osoba.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym.",
        "Gotowanie na parze przydaje się podwójnie: gdy ktoś w domu musi jeść inaczej niż reszta, można przygotować dwie wersje jednego obiadu bez drugiego garnka.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie z Rymanowem-Zdrojem.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Rymanów",
    "Rymanów-Zdrój",
    "Klimkówka",
    "Posada Górna",
    "Ladzin",
    "Sieniawa",
    "Wróblik Szlachecki",
    "Wróblik Królewski",
    "Bzianka",
    "Milcza",
  ],

  nearbyHeading: "Okolica Rymanowa",
  nearbyParagraphs: [
    "Iwonicz-Zdrój, Krosno, Dukla, Zarszyn, Besko i Sanok są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krosno", "Dukla", "Sanok", "Brzozów", "Jasło", "Zagórz"],

  about: blokOMnie("do Rymanowa", "w Rymanowie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rymanowa i Rymanowa-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do obu i do całej gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rymanowie"),
    {
      question: "Mam zalecenia dietetyczne — czy Thermomix mi pomoże?",
      answer:
        "Na to pytanie nie odpowiem, bo nie jestem dietetyczką i nie wolno mi doradzać w takich sprawach. Powiem tylko, co urządzenie robi technicznie: gotuje na parze bez tłuszczu, trzyma ustawioną temperaturę, miksuje do dowolnej gęstości i pozwala zrobić w domu to, co zwykle kupuje się gotowe. Czy to odpowiada Twoim zaleceniom, oceni lekarz albo dietetyk — i tak powinno być.",
    },
    {
      question: "Przyjmuję gości — czy prezentacja może być pod tym kątem?",
      answer:
        "Jak najbardziej, powiedz o tym przy umawianiu. Rozmawiamy wtedy o śniadaniach dla kilku osób, o przygotowaniu z wyprzedzeniem i o powtarzalności, a nie o rodzinnym obiedzie.",
    },
  ],

  geo: { lat: 49.5761, lng: 21.8600 },
};
