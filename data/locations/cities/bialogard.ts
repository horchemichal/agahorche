import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * BIAŁOGARD — miasto w widłach Parsęty i Leśnicy. Od lat odbywa się tu
 * Święto Troci i Łososia, organizowane przez Towarzystwo Miłośników
 * Parsęty: zawody wędkarskie na trocie wędrowne i łososie.
 *
 * KĄT: ryby. Czego to urządzenie z rybą zrobi, a czego na pewno nie —
 * temat, który omija większość materiałów, bo odpowiedź jest w połowie
 * odmowna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — ryba na parze w Varomie to jedno z sensowniejszych zastosowań:
 *   powstaje nad daniem, które gotuje się niżej,
 * — pasty rybne i farsze wychodzą dobrze, bo cała robota to rozdrobnienie,
 * — czego NIE zrobi: nie usmaży, nie upiecze i nie uwędzi — a to są
 *   właśnie trzy najczęstsze sposoby na rybę w polskim domu,
 * — i uczciwie: rybę trzeba oprawić samemu, urządzenie w tym nie pomaga.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O ŚWIEŻOŚCI, PRZECHOWYWANIU ANI OBRÓBCE RYB pod kątem
 *   bezpieczeństwa. To dziedzina, w której zła rada realnie szkodzi
 *   (zasada ze Skierniewic) — kierować do wędkarza, sprzedawcy, przepisu.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW gotowania ryby.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o rybach.
 *
 * ROZGRANICZENIE. Police mówią ogólnie o tym, czego sprzęt nie zastąpi
 * (piekarnik, patelnia, nóż), Sochaczew o dwóch talerzach przy jednym
 * stole. Tutaj chodzi o KONKRETNY PRODUKT: rybę, i o to, gdzie leży
 * granica przydatności urządzenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Białogard leży w widłach Parsęty i Leśnicy,
 * — odbywa się tu coroczne Święto Troci i Łososia, organizowane przez
 *   Towarzystwo Miłośników Parsęty, z zawodami wędkarskimi na rzece.
 */
export const BIALOGARD: CityContent = {
  slug: "bialogard",
  h1: "Thermomix Białogard – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Białogard — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Białogardzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Białogard — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białogardzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białogardu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Białogard i okolica"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-varoma.webp",
    alt: "Varoma — gotowanie na parze w Thermomixie TM7",
    caption: "Ryba na parze powstaje nad daniem, które gotuje się niżej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białogardzie – jak wygląda prezentacja?",
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
      id: "ryby",
      heading: "Miasto Święta Troci i Łososia — i uczciwie o rybie",
      paragraphs: [
        "Białogard leży w widłach Parsęty i Leśnicy, a co roku odbywa się tu Święto Troci i Łososia z zawodami wędkarskimi na rzece. Skoro ryba jest tutaj tematem, który wraca sam, to napiszę o niej konkretnie — łącznie z tą częścią, która jest dla mnie niewygodna, bo w połowie brzmi „nie”.",
        "Zacznę od tego, co wychodzi dobrze. Ryba na parze to jedno z sensowniejszych zastosowań tego urządzenia: powstaje w Varomie, nad daniem, które gotuje się w naczyniu niżej. Ziemniaki albo warzywa robią się na dole, ryba nad nimi, wszystko w tym samym czasie i w tym samym sprzęcie. Przy rybie, która nie znosi przetrzymania, wygodne jest też to, że nie trzeba przy niej stać.",
        "Druga rzecz to pasty i farsze. Pasta z ryby wędzonej, farsz do pierogów, masa na kotlety rybne — tam cała robota polega na rozdrobnieniu i wymieszaniu, a to jest dokładnie to, w czym urządzenie jest dobre. Robi się w jednym naczyniu, więc odpada rozstawianie miski, blendera i deski.",
        "Teraz część odmowna i trzeba ją powiedzieć wprost, bo dotyczy trzech najczęstszych sposobów na rybę w polskim domu. Nie usmaży — smażony dorsz czy panierowany filet to patelnia i tak zostanie. Nie upiecze — ryba w piekarniku, z chrupiącą skórą, to piekarnik. I nie uwędzi. Jeśli w Waszym domu ryba to głównie smażenie, ten sprzęt niewiele w tej sprawie zmieni i wolę powiedzieć to teraz.",
        "Nie pomoże też w tym, co przy świeżej rybie bywa najbardziej upierdliwe: oprawianiu. Skrobanie, patroszenie i filetowanie zostaje po Waszej stronie w całości — urządzenie zaczyna pracę dopiero od momentu, w którym ryba jest gotowa do garnka.",
        "I rzecz, przy której jestem stanowcza: nie doradzam nic w sprawach świeżości, przechowywania ani obróbki ryby pod kątem bezpieczeństwa. Nie podam też żadnych czasów ani temperatur gotowania. To jest dziedzina, w której zła podpowiedź realnie komuś szkodzi, a ja nie jestem od tego — od tego są przepis, sprzedawca i ktoś, kto zna się na rybach lepiej ode mnie.",
      ],
      links: [{ href: "/thermomix/funkcje", label: "Funkcje TM7" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białogardzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie sprawdzić rybę na parze, powiedzcie o tym przy umawianiu — zrobimy ją na spotkaniu razem z drugim daniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białogardzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla białogardzkiej rodziny",
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

  districtsHeading: "Do których części Białogardu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Olimpijczyków",
    "Osiedle Kochanowskiego",
    "Osiedle Piastów",
    "Osiedle Obotrytów",
    "Osiedle Lelewela",
    "Osiedle Zwycięstwa",
    "Osiedle Chopina",
  ],

  nearbyHeading: "Poza Białogard też przyjadę",
  nearbyParagraphs: [
    "Karlino, Tychowo, Gościno i Świdwin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Karlino", "Tychowo", "Gościno", "Świdwin", "Koszalin", "Połczyn-Zdrój"],

  about: blokOMnie("do Białogardu", "w Białogardzie i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Białogardu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Białogardzie"),
    {
      question: "Co zrobię w tym z ryby?",
      answer:
        "Rybę na parze — powstaje w Varomie, nad daniem gotującym się niżej, więc ziemniaki i ryba robią się równocześnie. Dobrze wychodzą też pasty rybne i farsze, bo cała robota to rozdrobnienie w jednym naczyniu.",
    },
    {
      question: "A czego z rybą nie zrobię?",
      answer:
        "Nie usmażycie, nie upieczecie i nie uwędzicie — a to trzy najczęstsze sposoby na rybę w polskim domu. Urządzenie nie pomoże też przy oprawianiu: skrobanie, patroszenie i filetowanie zostaje w całości po Waszej stronie. O świeżości i przechowywaniu nie doradzam w ogóle — to nie moja dziedzina.",
    },
  ],

  geo: { lat: 54.0029, lng: 15.9921 },
};
