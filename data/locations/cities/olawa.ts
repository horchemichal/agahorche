import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * OŁAWA — miasto na trasie do Wrocławia, którego mieszkańcy w dużej
 * części pracują poza nim. Dzień zaczyna się i kończy gdzie indziej.
 *
 * KĄT: dom, w którym prawie się nie je w domu. Obiad w pracy, kolacja
 * po drodze, weekend u rodziców. Sytuacja, w której uczciwa odpowiedź
 * brzmi często „to nie jest zakup dla Was" — i strona ma to powiedzieć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — jeśli w domu powstają dwa, trzy posiłki tygodniowo, to jest za mało,
 *   żeby taki wydatek się bronił, i mówię to zamiast szukać argumentów,
 * — sprzęt nie zmienia trybu życia i nie sprawi, że ktoś zacznie wracać
 *   wcześniej ani jeść inaczej,
 * — kiedy to się jednak broni: gdy zmiana trybu jest już zaplanowana
 *   (dziecko, praca z domu, zmiana pracy) albo gdy weekend jest
 *   naprawdę intensywny kuchennie,
 * — i że pytanie „ile razy w tygodniu naprawdę gotujecie" jest lepszym
 *   probierzem niż cokolwiek, co pokażę na prezentacji.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO OCENIANIA trybu życia ani jedzenia poza domem.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH i żadnych porównań „domowe kontra
 *   z baru" pod względem zdrowia.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina) —
 *   także w wersji „obiad na mieście kosztuje tyle, a w domu tyle".
 *
 * ROZGRANICZENIE. Nowa Sól mówi o POWROCIE do gotowania po przerwie
 * (ktoś chce wrócić), Żary o braku umiejętności, Starogard Gdański
 * o sprzęcie lądującym w szafce. Tutaj chodzi o dom, który po prostu
 * je gdzie indziej i wcale tego nie zamierza zmieniać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Oława leży na trasie do Wrocławia, a wielu jej mieszkańców pracuje
 *   poza miastem.
 */
export const OLAWA: CityContent = {
  slug: "olawa",
  h1: "Thermomix Oława – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Oława — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Oławie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Oława — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Oławie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Oławy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Oława i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czasem uczciwa odpowiedź brzmi: to nie jest zakup dla Was.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Oławie – jak wygląda prezentacja?",
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
      id: "prawie-nie-jemy-w-domu",
      heading: "Miasto, z którego wyjeżdża się rano — i dom, w którym prawie się nie je",
      paragraphs: [
        "Oława leży na trasie do Wrocławia i sporo osób spędza tu tylko wieczór i noc: dzień odbywa się gdzie indziej. Wykorzystam to do sytuacji, w której uczciwa odpowiedź jest dla mnie niewygodna, a i tak ją napiszę — bo w niektórych domach obiad po prostu nie powstaje.",
        "Obiad w pracy, kolacja kupiona po drodze, niedziela u rodziców. Nie ma w tym nic złego i nie będę tego oceniać ani porównywać z gotowaniem w domu. Ludzie układają sobie życie tak, jak im pasuje, a strona sprzedawcy jest ostatnim miejscem, w którym ktoś powinien słyszeć, że robi to źle.",
        "Rzecz w tym, że przy takim trybie ten zakup najczęściej się nie broni. Jeśli w domu powstają dwa albo trzy posiłki tygodniowo, to jest za mało, żeby wydać takie pieniądze na sprzęt, który ma pracować codziennie. Mówię to zamiast szukać argumentów, bo argumenty dałoby się znaleźć — tylko byłyby naciągane, a Wy byście się o tym przekonali dopiero po pół roku.",
        "Powiem też, czego ten sprzęt na pewno nie zrobi: nie zmieni trybu życia. Nie sprawi, że ktoś zacznie wracać wcześniej ani że nagle pojawi się ochota na gotowanie. Urządzenie skraca czynności komuś, kto już gotuje. Nie tworzy nawyku od zera i obiecywanie czegoś takiego byłoby zwykłym oszustwem.",
        "Bywają jednak dwa przypadki, w których to ma sens także tutaj. Pierwszy: zmiana trybu jest już zaplanowana — dziecko, praca z domu, inne godziny — i wiadomo, że za pół roku w kuchni będzie dziać się więcej. Drugi: tydzień jest pusty, ale weekend naprawdę intensywny, bo gotuje się wtedy dla całej rodziny i z zapasem. To są realne sytuacje, a nie wymyślone wyjątki, żeby jednak coś sprzedać.",
        "Najlepszy probierz jest prosty i nie wymaga mojej obecności: policzcie, ile razy w minionym miesiącu w Waszej kuchni powstał obiad. Nie ile chcielibyście, tylko ile faktycznie. Ta liczba powie Wam więcej niż cokolwiek, co mogłabym pokazać na prezentacji — a jeśli wyjdzie mała, powiem Wam na spotkaniu to samo, co tutaj.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Oławie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu naprawdę gotujecie — od tego zacznę rozmowę, a nie od pokazu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Oławie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla oławskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Wrocławia.",
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

  districtsHeading: "Do których części Oławy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Sobieskiego",
    "Nowy Otok",
    "Zaodrze",
    "Osiedle Chrobrego",
    "Ścinawa Polska",
    "Osiedle Broniewskiego",
  ],

  nearbyHeading: "Poza Oławę też przyjadę",
  nearbyParagraphs: [
    "Jelcz-Laskowice, Brzeg, Strzelin i Domaniów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jelcz-Laskowice", "Brzeg", "Strzelin", "Wrocław", "Oleśnica", "Siechnice"],

  about: blokOMnie("do Oławy", "w Oławie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Oławy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Oławie"),
    {
      question: "Prawie nie jemy w domu. Czy to się u nas obroni?",
      answer:
        "Najczęściej nie i wolę to powiedzieć wprost. Jeśli w domu powstają dwa albo trzy posiłki tygodniowo, to za mało jak na taki wydatek. Urządzenie skraca czynności komuś, kto już gotuje — nie tworzy nawyku od zera i nie zmieni trybu życia.",
    },
    {
      question: "Kiedy przy takim trybie to jednak ma sens?",
      answer:
        "W dwóch sytuacjach. Gdy zmiana trybu jest już zaplanowana — dziecko, praca z domu, inne godziny — i wiadomo, że w kuchni będzie dziać się więcej. Albo gdy tydzień jest pusty, ale weekend naprawdę intensywny, bo gotuje się dla całej rodziny i z zapasem.",
    },
  ],

  geo: { lat: 50.9450, lng: 17.2925 },
};
