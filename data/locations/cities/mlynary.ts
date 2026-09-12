import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * MŁYNARY — gmina miejsko-wiejska w powiecie elbląskim.
 * MIASTO 1 664 na 2,8 km², GMINA 4 124 (GUS 31.12.2024).
 * 19 SOŁECTW.
 * ⚠ Notatka projektowa podawała 1 800 — ZAWYŻONE.
 *
 * LOKACJA: źródła podają 1327 LUB 1329 — SPRZECZNE.
 * PISZĘ „pierwsza połowa XIV wieku”, BEZ ROKU.
 * PRAWA UTRACONE w 1945 r., PRZYWRÓCONE 1 STYCZNIA 1984 r.
 *
 * ⚠⚠ PRZYNALEŻNOŚĆ: PRUSY GÓRNE / POGEZANIA.
 * TO NIE JEST WARMIA. STRONA WŁASNEJ GMINY BŁĘDNIE PODAJE
 * WARMIĘ — NIE POWTARZAM TEGO BŁĘDU.
 *
 * KOŚCIÓŁ ŚW. PIOTRA — 1327 r., przebudowa 1554 r.
 * KOŚCIÓŁ NMP — 1856–1857.
 * RATUSZ — 1713–1716, spłonął w 1871 r.
 * RUINY MŁYNA WODNEGO.
 * RZEKA BAUDA — ta sama, z której poprowadzono kanał
 * do Fromborka.
 * IMPREZY: MŁYNARY BLUES FESTIWAL, PRZEGLĄD „INTEGRACJE”,
 * PLENER „BLIŻEJ NATURY”.
 * ⚠ „INTEGRACJE” WYMIENIAM WYŁĄCZNIE JAKO WYDARZENIE
 * KULTURALNE — ZERO kontekstu historycznego.
 * MŁYNARY NIE NALEŻĄ DO CITTASLOW.
 * ⚠ „ZALEW MŁYNARY” TO BYŁ TYLKO PLAN — NIE ISTNIEJE.
 * NIE OPISUJĘ GO JAKO ISTNIEJĄCEGO.
 *
 * KĄT: ODPOCZYNEK PO UPIECZENIU.
 * Kąt od miasta młynów, w którym młyn stoi dziś jako ruina —
 * mąka, chleb i to, co dzieje się PO wyjęciu z pieca.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepisy kończą się na „wyjmij z piekarnika”, a to
 *   nie jest koniec procesu,
 * — chleb kończy się piec po wyjęciu — para wychodzi,
 *   miękisz się układa; krojony gorący będzie kleisty,
 * — mięso: sok rozchodzi się po włóknach, krojone od razu
 *   wypuszcza go na deskę,
 * — sernik i ciasta z jajkiem opadają, jeśli wyjąć je
 *   z gorąca zbyt gwałtownie,
 * — pizza i wszystko z ciastem drożdżowym — odwrotnie,
 *   je się od razu,
 * — że „odpoczynek” to nie zabobon, tylko wyrównywanie
 *   temperatury i wilgoci w środku,
 * — UCZCIWIE: tu urządzenie nie pomaga w ogóle — odpoczynek
 *   dzieje się poza nim i to jest czas, którego nie da się
 *   skrócić żadnym sprzętem,
 * — i że to jest dobra ilustracja tego, czego sprzęt NIE robi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — także
 *   ŻADNYCH „ile minut ma odpoczywać”. Piszę jakościowo.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta (Mühlhausen).
 * — ZERO roku 1945 i wysiedleń. Utratę praw miejskich podaję
 *   jako fakt administracyjny, bez przyczyny.
 * — ZERO kontekstu historycznego przy przeglądzie
 *   „Integracje”.
 * — ZERO cmentarzy i pomników.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciepło, które zostaje”
 * (Błaszki) dotyczy gotowania resztkowym ciepłem, czyli
 * dalszej OBRÓBKI. „Danie, które może poczekać” (Kamieńsk)
 * dotyczy odgrzewania następnego dnia. „Przerwa w środku
 * gotowania” (Pasłęk) dotyczy pauzy W TRAKCIE. Tutaj chodzi
 * o ETAP PO KOŃCU: o to, że danie jeszcze się zmienia,
 * kiedy już nic z nim nie robimy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku lokacji — źródła są sprzeczne.
 * — NIE PISZĘ, że Młynary leżą na Warmii — nie leżą,
 *   mimo błędu na stronie gminy.
 * — NIE PISZĘ o zalewie w Młynarach — nie powstał.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow — nie należą.
 * — NIE PRZYPISUJĘ Młynarom produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ dat festiwali ani ich edycji.
 * — NIE MYLĘ Młynar z MŁYNARAMI-osadami ani z Mławą.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 664 mieszkańców na 2,8 km², gmina 4 124,
 *   19 sołectw,
 * — lokacja w pierwszej połowie XIV w.; prawa miejskie
 *   przywrócone 1 stycznia 1984 r.,
 * — Młynary leżą w Prusach Górnych, na terenie historycznej
 *   Pogezanii, nie na Warmii,
 * — kościół świętego Piotra z 1327 r., przebudowany
 *   w 1554 r.; kościół Najświętszej Maryi Panny z lat
 *   1856–1857,
 * — ratusz z lat 1713–1716, spłonął w 1871 r.,
 * — ruiny młyna wodnego,
 * — rzeka Bauda,
 * — Młynary Blues Festiwal, przegląd „Integracje”
 *   i plener „Bliżej Natury”.
 */
export const MLYNARY: CityContent = {
  slug: "mlynary",
  h1: "Thermomix Młynary – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Młynary — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Młynarach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Młynary — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Młynarach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Młynar z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Młynary i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Chleb kończy się piec dopiero po wyjęciu z piekarnika.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Młynarach – jak wygląda prezentacja?",
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
      id: "odpoczynek-po-pieczeniu",
      heading: "Miasto od młynów — czyli o tym, co dzieje się po wyjęciu z piekarnika",
      paragraphs: [
        "Nazwa Młynar mówi wprost, z czego to miasto żyło. Nad Baudą stały młyny — po jednym z nich zostały do dziś ruiny — i przez wieki cała okolica dostarczała mąkę, z której gdzie indziej pieczono chleb. Ta sama rzeka, z której czerpały tutejsze koła, zasila kanał doprowadzony w czternastym wieku aż pod Frombork.",
        "Skoro więc jesteśmy w mieście od mąki, chciałabym napisać o etapie, o którym nie pisze prawie żaden przepis: o tym, co dzieje się z jedzeniem, kiedy już wszystko zrobiliście i nic z nim nie robicie.",
        "Przepisy kończą się na zdaniu „wyjmij z piekarnika”. To nieprawda. To nie jest koniec procesu, to jest zmiana jego charakteru.",
        "Najwyraźniej widać to na chlebie. Bochenek wyjęty z pieca dalej się piecze — w środku jest jeszcze gorąco, para wychodzi na zewnątrz, a miękisz dopiero się układa. Chleb pokrojony gorący będzie kleisty i zbity, i nie dlatego, że przepis był zły, tylko dlatego, że przerwaliście mu ostatni etap. To najczęściej powtarzany błąd domowego pieczenia chleba i najłatwiejszy do naprawienia, bo wymaga wyłącznie cierpliwości.",
        "To samo dotyczy mięsa. Podczas pieczenia soki są wypchnięte ku środkowi; po wyjęciu rozchodzą się z powrotem po włóknach. Pieczeń pokrojona natychmiast wypuści je na deskę i zostanie sucha, choć jeszcze przed chwilą była w porządku.",
        "Sernik i wszystko, co dużo ma z jajka, jest wrażliwe z innego powodu: nie znosi gwałtownej zmiany temperatury. Wyjęte prosto z gorąca na chłodny blat po prostu opada. Tam odpoczynek zaczyna się jeszcze w stygnącym piekarniku.",
        "Są też rzeczy odwrotne i warto o nich pamiętać, żeby nie zrobić z odpoczynku religii. Pizza, bułki, wszystko z chrupiącą skórką i wszystko smażone traci najwięcej z każdą minutą czekania. Tam nie ma na co czekać — je się od razu.",
        "Sam mechanizm nie ma w sobie żadnej magii: chodzi o to, żeby temperatura i wilgoć wyrównały się w środku. W trakcie pieczenia brzegi są gorące i suche, a środek zimniejszy i mokry. Odpoczynek to czas, w którym te różnice się znoszą.",
        "Napiszę teraz rzecz, której nie usłyszycie od kogoś, kto sprzedaje sprzęt. W tym akurat urządzenie nie pomaga w ogóle. Zupełnie. Odpoczynek dzieje się poza nim, na desce albo na kratce, i nie da się go skrócić żadną technologią. Można mieć najlepszy sprzęt w kuchni i zepsuć chleb, krojąc go pięć minut za wcześnie.",
        "Uważam, że to jest dobra ilustracja tego, jak w ogóle o takich urządzeniach myśleć. Przejmują robotę tam, gdzie robota polega na mieszaniu, pilnowaniu i sile. Nie przejmują niczego tam, gdzie chodzi wyłącznie o czas. I dobrze jest wiedzieć, gdzie przebiega ta granica, zanim się coś kupi.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Młynarach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pieczecie chleb i coś Wam w nim nie gra, powiedzcie o tym przy umawianiu — czasem cała odpowiedź mieści się w tym, w którym momencie sięgacie po nóż.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Młynarach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla młynarskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niespełna tysiąc siedemset mieszkańców na niecałych trzech kilometrach kwadratowych, a cała gmina przeszło cztery tysiące, w dziewiętnastu sołectwach. Młynary lokowano w pierwszej połowie czternastego wieku, a prawa miejskie odzyskały 1 stycznia 1984 roku. Leżą w Prusach Górnych, na terenie historycznej Pogezanii — nie na Warmii, choć bywają tak opisywane. Kościół świętego Piotra pochodzi z 1327 roku i został przebudowany w 1554; kościół Najświętszej Maryi Panny wzniesiono w latach 1856–1857. Ratusz z lat 1713–1716 spłonął w 1871 roku, a nad Baudą zachowały się ruiny młyna wodnego. Miasto organizuje Młynary Blues Festiwal, przegląd „Integracje” i plener „Bliżej Natury”.",
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

  districtsHeading: "Do których części gminy Młynary dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewiętnastu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Młynary też przyjadę",
  nearbyParagraphs: [
    "Elbląg, Pasłęk, Frombork, Tolkmicko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Elbląg", "Pasłęk", "Frombork", "Tolkmicko"],

  about: blokOMnie("do Młynar", "w Młynarach i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Młynar bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewiętnastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Młynarach"),
    {
      question: "Dlaczego nie należy kroić chleba od razu po upieczeniu?",
      answer:
        "Bo bochenek po wyjęciu z pieca jeszcze się piecze: w środku jest gorąco, para wychodzi, a miękisz dopiero się układa. Pokrojony za wcześnie będzie kleisty i zbity. To najczęstszy błąd domowego pieczenia i jedyne, czego wymaga, to cierpliwość.",
    },
    {
      question: "Czy odpoczynek jest potrzebny każdemu daniu?",
      answer:
        "Nie. Chleb, pieczenie i ciasta z dużą ilością jajka wyraźnie na nim zyskują. Ale pizza, bułki, wszystko z chrupiącą skórką i wszystko smażone traci z każdą minutą czekania — to je się od razu.",
    },
    {
      question: "Czy Thermomix skraca czas odpoczynku po pieczeniu?",
      answer:
        "Nie, w ogóle. To akurat etap, w którym urządzenie nie pomaga — odpoczynek dzieje się poza nim, na desce albo kratce, i nie da się go przyspieszyć żadnym sprzętem. Warto to wiedzieć przed zakupem: sprzęt przejmuje mieszanie, pilnowanie i siłę, ale nie czas.",
    },
  ],

  geo: { lat: 54.1717, lng: 19.755 },
};
