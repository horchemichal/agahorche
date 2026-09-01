import type { CityContent } from "../city-content";
import {
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
 * NOWY SĄCZ — trzecie miasto Małopolski i, podobnie jak Tarnów, samodzielny
 * ośrodek pracy, a nie sypialnia Krakowa (ok. 110 km, blisko dwie godziny).
 * Wyróżnik, którego nie ma żadne inne miasto w tym zestawie: duże firmy
 * wyrosłe na miejscu, a nie filie koncernów — Fakro i Koral zbudowane od
 * podstaw, Newag jako kontynuacja warsztatów kolejowych z 1876 r.
 * (uwaga: siedziba Wiśniowskiego to Wielogłowy w gminie Chełmiec, więc
 * pisząc o nim, trzeba mówić „z okolic Nowego Sącza”, nie „w Nowym Sączu”).
 * Drugi wyróżnik: naprawdę mocna, udokumentowana półka produktów
 * regionalnych, więc sekcja kulinarna ma tu realne pokrycie w faktach,
 * a nie w wymyślonej „tradycji”.
 *
 * Fakty użyte w tekście:
 * — 25 osiedli jako jednostki pomocnicze,
 * — Newag jako kontynuacja warsztatów kolejowych z 1876 r.,
 * — jabłka łąckie i śliwowica łącka na Liście Produktów Tradycyjnych
 *   (wpisy z 10.10.2005), sądeckie lody i sądecki miód spadziowy tamże,
 * — fasola „Piękny Jaś” z Doliny Dunajca ze statusem ChNP.
 * Bez liczb mieszkańców, bez obrotów firm, bez cen. Krążące po przewodnikach
 * zdanie o „największym rynku w Małopolsce” świadomie pominięte — największy
 * w województwie jest Rynek Główny w Krakowie.
 */
export const NOWY_SACZ: CityContent = {
  slug: "nowy-sacz",
  h1: "Thermomix Nowy Sącz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Nowy Sącz — prezentacja i cena",
  seoDescription:
    "Thermomix w Nowym Sączu: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena, raty 0,6% i pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Sącz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Nowym Sączu i na Sądecczyźnie. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Do Nowego Sącza przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam na wszystkie osiedla — od Starego Miasta po Biegonice i Zabełcze.",

  highlights: highlightyStandardowe("cały Nowy Sącz, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Sączu – jak wygląda prezentacja?",
      paragraphs: [
        "Całe wyposażenie spotkania przywożę ze sobą: urządzenie, produkty, a w razie potrzeby także naczynia. Po Twojej stronie zostaje wolny kawałek blatu i gniazdko — nic więcej nie musisz kupować ani przygotowywać.",
        "Spotkanie polega na gotowaniu, nie na oglądaniu prezentacji. Robimy danie obiadowe, coś słodkiego i zwykle jeszcze coś z tego, co masz pod ręką — u ludzi z sadem albo ogrodem najczęściej okazuje się, że to właśnie owoce i warzywa są najlepszym testem. Napisz wcześniej, ile osób jest w domu i czego nie jecie.",
        "Rozmowa o pieniądzach jest na końcu i jest krótka: aktualna cena, obowiązująca promocja, rata przy kilku wariantach spłaty. Decyzja nie musi zapaść tego dnia i zwykle nie zapada.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Sady, przetwory i kuchnia, która pracuje sezonowo",
      paragraphs: [
        "Sądecczyzna to jeden z najmocniejszych rejonów sadowniczych w Polsce i to nie jest ciekawostka turystyczna, tylko coś, co widać w kuchniach. Jabłka łąckie i śliwowica z Łącka są wpisane na ministerialną Listę Produktów Tradycyjnych, a doliny Dunajca i Łososiny są pełne gospodarstw, w których owoce trafiają do domu skrzynkami, a nie siatkami.",
        "Z tego bierze się bardzo konkretny problem: przez kilka tygodni w roku kuchnia musi przerobić więcej, niż da się zjeść na bieżąco. Przecier, który trzeba mieszać, żeby się nie przypalił, mus, który musi dojść do właściwej gęstości, powidła gotowane godzinami — to wszystko jest pracą polegającą na pilnowaniu, a nie na umiejętnościach.",
        "Thermomix przejmuje dokładnie tę część. Ustawiona temperatura, ustawiony czas i mieszanie, które nie pozwala przywrzeć do dna. W sezonie robi to samo, co Ty, tylko nie musi przy tym stać — a poza sezonem ten sam mechanizm pracuje przy zwykłej zupie we wtorek.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Sączu?",
      paragraphs: [
        "Telefon albo SMS to najszybsza droga — termin zwykle ustalamy od razu. Możesz też zostawić kontakt w formularzu na dole strony; wtedy oddzwaniam o godzinie, którą sama wskażesz.",
        "Powiedz od razu, na którym osiedlu mieszkasz i ile osób będzie na spotkaniu. Nowy Sącz jest rozległy i wchodzi na stoki nad Dunajcem i Kamienicą, więc dojazd na Falkową to co innego niż na Centrum — łatwiej mi wtedy ułożyć realny plan dnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Sączu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowego Sącza",
      paragraphs: [
        "Nowy Sącz jest miastem, w którym się pracuje na miejscu — Newag, Fakro, Koral i cała reszta to firmy, które wyrosły tutaj, a nie filie otwarte przez kogoś z zewnątrz. To oznacza, że wieczór zaczyna się o w miarę przewidywalnej porze i że wąskim gardłem nie jest dojazd, tylko sam obiad, który trzeba zrobić od zera dla kilku osób.",
        "Zabudowa miasta jest dwoista i widać to w kuchniach. Na Millenium, Gorzkowie czy Wólkach są mieszkania z kuchniami wymierzonymi co do centymetra; w Biegonicach, Zabełczu czy Dąbrówce — domy z większymi kuchniami i częściej z ogrodem. W pierwszym przypadku Thermomix wygrywa tym, że zastępuje kilka urządzeń jednym, w drugim — Varomą i przetworami.",
        "Wspólne jest to, że gotuje i miksuje w jednym naczyniu, bez przekładania gorących rzeczy, a na parze potrafi równolegle zrobić porcję dla najmłodszego dziecka.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Owoce z sadu i obiad, którego nie trzeba pilnować.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  costs: {
    heading: "Domowy obiad czy jedzenie na mieście w Nowym Sączu – co się bardziej opłaca?",
    paragraphs: [
      "O to pytają mnie na spotkaniach częściej niż o funkcje urządzenia i uważam, że słusznie — bo to jest pytanie o pieniądze, a nie o technikę. Jednej liczby na nie nie ma, ale sposób liczenia jest prosty i możesz go przejść sama, na własnych cenach.",
      "Poniższa tabela to tylko rusztowanie dla czteroosobowej rodziny. Nie ma w niej ani jednej mojej kwoty i tak ma zostać — wpisz swoje, bo tylko takie liczby cokolwiek Ci powiedzą.",
    ],
    rows: [
      { label: "Obiad w środku tygodnia (4 osoby)", home: "koszt składników", out: "4 × cena dania na mieście" },
      { label: "Zamawiane jedzenie z dowozem", home: "—", out: "cena dań + dostawa + napiwek" },
      { label: "Ile razy w miesiącu", home: "policz swoje dni", out: "policz swoje dni" },
      { label: "Czas przygotowania", home: "gotuje bez pilnowania", out: "dojazd albo czekanie na kuriera" },
    ],
    note:
      "Nie wpisuję tu kwot za dania w sądeckich lokalach — zmieniają się z miesiąca na miesiąc, a cena podana „na sztywno” szybko stałaby się nieprawdą. Weź ostatnie trzy paragony i wpisz swoje liczby; wynik będzie wtedy Twój, a nie mój.",
    closing:
      "Nie obiecuję, że Thermomix „zwraca się po X miesiącach” — takiej liczby nie znam i nikt uczciwie jej nie poda. Zmienia się natomiast nawyk: gotujesz w dni, w które wcześniej zamawiałaś, bo obiad przestaje wymagać stania przy garnku. Oszczędność bierze się z tej zmiany.",
  },

  culinary: {
    heading: "Sądecczyzna i to, co się tu je",
    paragraphs: [
      "Niewiele rejonów w Polsce ma tyle rzeczy z własną nazwą i papierami. Jabłka łąckie i śliwowica łącka są na ministerialnej Liście Produktów Tradycyjnych od 2005 roku, obok nich sądeckie lody, sądecki miód spadziowy, kukiełki podegrodzkie i suszone śliwki z Łukowicy. Z doliny Dunajca pochodzi fasola „Piękny Jaś” z unijną Chronioną Nazwą Pochodzenia.",
      "Większość z tych rzeczy łączy jedna cecha: powstają przez długie, cierpliwe prowadzenie procesu. Powidła, musy, suszenie, gotowanie fasoli, którą trzeba wcześniej namoczyć — to nie jest kwestia talentu, tylko czasu i uwagi. Thermomix nie zrobi za nikogo tradycji, ale zdejmuje z niej najbardziej męczącą część: stanie nad garnkiem i pilnowanie, żeby nie przywarło.",
      "Na co dzień gotuje się tu to samo, co w całej Małopolsce — rosół, żurek, pierogi wtedy, gdy ktoś ma cierpliwość je lepić. Jeśli powiesz mi wcześniej, na czym Ci zależy, chętnie ugotuję coś z tej półki zamiast kolejnego smoothie.",
    ],
  },

  districtsHeading: "Gdzie w Nowym Sączu umówisz prezentację?",
  districtsParagraphs: [
    "Dojeżdżam na wszystkie osiedla i nie doliczam za to ani złotówki — bez różnicy, czy mieszkasz na Starym Mieście, na Millenium, czy w Porębie Małej.",
    "Miasto jest rozłożone na dużym terenie i wchodzi na stoki nad Dunajcem i Kamienicą, więc przy umawianiu warto powiedzieć nie tylko nazwę osiedla, ale i ulicę. Dla samej prezentacji to bez znaczenia — wystarczy blat i gniazdko — ale dla ułożenia trasy ma to realne znaczenie.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Przydworcowe",
    "Millenium",
    "Gorzków",
    "Wólki",
    "Barskie",
    "Gołąbkowice",
    "Helena",
    "Kilińskiego",
    "Kochanowskiego",
    "Szujskiego",
    "Wojska Polskiego",
    "Westerplatte",
    "Nawojowska",
    "Przetakówka",
    "Piątkowa",
    "Falkowa",
    "Dąbrówka",
    "Biegonice",
    "Zabełcze",
    "Zawada",
    "Chruślice",
    "Kaduk",
    "Poręba Mała",
  ],

  nearbyHeading: "Sądecczyzna poza miastem też",
  nearbyParagraphs: [
    "Do gmin wokół Nowego Sącza dojeżdżam normalnie. Przy dalszych kierunkach — w stronę Łącka, Grybowa czy Krynicy — umawiam kilka spotkań w jednym rejonie tego samego dnia, więc czasem zaproponuję termin nieco późniejszy, ale za to pewny.",
  ],
  nearbyTowns: [
    "Chełmiec",
    "Stary Sącz",
    "Podegrodzie",
    "Nawojowa",
    "Kamionka Wielka",
    "Łososina Dolna",
    "Korzenna",
    "Gródek nad Dunajcem",
    "Łącko",
    "Grybów",
    "Limanowa",
  ],

  about: blokOMnie("do Nowego Sącza", "w Nowym Sączu, Limanowej i Bochni"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Nowego Sącza bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Nowego Sącza i okolicznych gmin jest bezpłatny, tak samo jak sama prezentacja. Odległość od Krakowa nie ma tu żadnego znaczenia dla ceny.",
    },
    ...faqWspolne("w Nowym Sączu"),
    {
      question: "Czy dojeżdżasz na dalsze osiedla, na przykład Biegonice albo Falkową?",
      answer:
        "Tak, na wszystkie osiedla miasta. Przy umawianiu podaj ulicę — miasto jest rozległe i wchodzi na stoki, więc trasę układam z wyprzedzeniem.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów z własnego sadu?",
      answer:
        "Tak i na Sądecczyźnie to jedno z najczęstszych zastosowań. Przeciery, musy i powidła robią się z ustawioną temperaturą i czasem, z mieszaniem, które nie pozwala przywrzeć do dna — bez stania nad garnkiem.",
    },
    {
      question: "Czy pokażesz, jak zrobić coś konkretnego, na czym mi zależy?",
      answer:
        "Tak, powiedz o tym przy umawianiu. Zamiast standardowego zestawu chętnie ugotuję to, co faktycznie jadacie w domu — to znacznie lepszy test niż deser, którego i tak nikt nie robi.",
    },
  ],

  geo: { lat: 49.6175, lng: 20.7153 },
};
