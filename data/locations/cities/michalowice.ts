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
 * MICHAŁOWICE (powiat krakowski) — gmina największych mieszkań w tej części
 * Polski i jedyna w naszym zestawie bez kolei. Oś strony: bardzo duże domy
 * plus brak szyn, czyli wszystko jedzie samochodem albo gminnymi liniami M.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 18 miejscowości: Górna Wieś, Kończyce, Kozierów, Książniczki,
 *   Masłomiąca, Michałowice, Młodziejowice, Pielgrzymowice, Raciborowice,
 *   Sieborowice, Więcławice Dworskie, Więcławice Stare, Wilczkowice,
 *   Wola Więcławska, Zagórzyce Dworskie, Zagórzyce Stare, Zdzięsławice,
 *   Zerwana (e-mapa.net, polskawliczbach.pl),
 * — przeciętna powierzchnia mieszkania 132,7 m² — 7. miejsce w Polsce;
 *   8,4 nowych budynków mieszkalnych na 1000 mieszkańców
 *   (michalowice-krakowski.geoportal-krajowy.pl/statystyki-gus),
 * — wzrost liczby ludności o 86,5% w latach 2002–2024 (GUS),
 * — przez gminę NIE przebiega linia kolejowa; najbliższe przystanki SKA
 *   (Kraków Batowice, Łuczyce) leżą poza gminą,
 * — DK7 przez wieś Michałowice; S7 Widoma–Kraków otwarta 23.12.2024,
 * — gminne linie autobusowe M1, M2, M3 dowożące m.in. do pętli
 *   Mistrzejowice i do stacji kolejowych; Bilet Metropolitalny,
 * — obelisk na Komorze w Michałowicach: 6 sierpnia 1914 r. I Kompania
 *   Kadrowa przekroczyła tu granicę zaborów, obelisk odsłonięty
 *   11 listopada 1936 r.; coroczny Marsz Szlakiem I Kompanii Kadrowej,
 * — kościół św. Jakuba w Więcławicach Starych — drewniany, ok. 1340 r.,
 *   sanktuarium diecezjalne, koniec 7. etapu Małopolskiej Drogi św. Jakuba,
 * — kościół św. Małgorzaty w Raciborowicach — budowę nawy, kruchty
 *   i dzwonnicy ukończył Jan Długosz do 1476 r.,
 * — Dłubniański Park Krajobrazowy (1981) obejmuje m.in. tę gminę.
 *
 * CZEGO TU NIE MA:
 * — liczby sołectw — NIE POTWIERDZONA (strona z sołtysami renderowana
 *   skryptem); piszemy „18 miejscowości”,
 * — nazwy dużego pracodawcy — nie znaleziono,
 * — produktów z ministerialnej Listy Produktów Tradycyjnych — brak
 *   potwierdzenia,
 * — miejsc korków i czasów przejazdu — brak źródła.
 *
 * PUŁAPKA: istnieją trzy różne gminy Michałowice — pod Warszawą
 * (mazowieckie), w łódzkiem i ta, w powiecie krakowskim. Serwis gminy to
 * michalowice.malopolska.pl, nie michalowice.pl.
 */
export const MICHALOWICE: CityContent = {
  slug: "michalowice",
  h1: "Thermomix Michałowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Michałowice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Michałowice pod Krakowem: bezpłatna prezentacja TM7 u Ciebie w kuchni — Raciborowice, Więcławice, Masłomiąca. Tel. 517 185 691.",
  ogTitle: "Thermomix Michałowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Michałowice pod Krakowem. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Do gminy Michałowice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Przywożę urządzenie i składniki, Ty nie przygotowujesz nic. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina Michałowice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Michałowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przywożę wszystko: urządzenie, składniki i naczynia, gdyby były potrzebne. Nie musisz nic kupować ani przygotowywać — wystarczy kawałek wolnego blatu, gniazdko i godzina spokoju.",
        "Gotujemy realny posiłek, a nie próbki do spróbowania. Zwykle danie obiadowe, coś słodkiego i coś, co pokazuje, jak urządzenie radzi sobie z tym, co jecie na co dzień. Jeśli powiesz mi wcześniej, ile osób jest w domu i czego nie jecie, dobiorę przepisy pod Was.",
        "Liczby zostawiam na koniec: aktualna cena, obowiązująca promocja, wysokość raty przy różnych okresach spłaty. Decyzja może zapaść za tydzień albo wcale — spotkanie i tak nic nie kosztuje.",
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
      heading: "Duże domy, brak kolei i wszystko na kołach",
      paragraphs: [
        "Michałowice mają statystykę, która zaskakuje nawet mieszkańców: przeciętne mieszkanie w tej gminie ma prawie sto trzydzieści trzy metry, co daje siódme miejsce w całej Polsce. To nie jest gmina bloków ani osiedli deweloperskich — to gmina dużych domów budowanych na własnych działkach, i to nadal budowanych, bo wskaźnik nowych budynków należy tu do najwyższych w kraju.",
        "Druga rzecz, o której nikt nie pisze, a która organizuje tu codzienność: przez gminę nie przebiega żadna linia kolejowa. Najbliższe przystanki kolei aglomeracyjnej leżą już poza jej granicami. Do Krakowa jedzie się więc samochodem albo gminnymi autobusami linii M, które dowożą do pętli i do stacji, skąd trzeba się przesiąść.",
        "Dla kuchni to znaczy jedno: dzień jest długi, a powroty rozłożone w czasie. Rzadko zdarza się godzina, o której cała rodzina siedzi razem przy stole. Dlatego najczęściej rozmawiamy tu nie o efektownym gotowaniu, tylko o tym, jak zrobić coś raz i mieć z tego dwa dni — bez poczucia, że drugiego dnia je się resztki.",
        "Duża kuchnia ma tu jeszcze jeden skutek uboczny: miejsca na blacie jest tyle, że sprzęt nigdy nie wędruje do szafki. A urządzenie, którego nie trzeba wyjmować, jest używane kilka razy częściej niż takie, po które trzeba się schylać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Michałowice?",
      paragraphs: [
        "Najprościej zadzwonić — jedna rozmowa zwykle wystarczy, żeby ustalić dzień i godzinę. Możesz też napisać SMS albo zostawić kontakt w formularzu na dole strony; wtedy podaj porę, o której mogę oddzwonić.",
        "Przy umawianiu przyda mi się nazwa miejscowości, bo gmina jest rozciągnięta — z Raciborowic do Woli Więcławskiej jest kawałek drogi. Powiedz też, ile osób będzie na spotkaniu, żebym dobrała dania i wzięła odpowiednio więcej składników.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Michałowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Michałowice",
      paragraphs: [
        "W domu z ogrodem gotowanie wygląda inaczej niż w mieszkaniu i inne rzeczy są tu wąskim gardłem. Miejsca na blacie nie brakuje. Brakuje czasu — i rąk, kiedy w sierpniu trzeba coś zrobić z warzywami, które przychodzą naraz i wszystkie w tym samym tygodniu.",
        "Przetwory to zresztą temat, który w tej gminie wraca na prezentacjach najczęściej. Konfitury, przeciery i sosy gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć — bez stania nad garnkiem przez godzinę i bez pilnowania, czy się nie przypala.",
        "Przy dzieciach najbardziej praktyczne bywa to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między miskami. A na parze w Varomie porcja dla najmłodszych powstaje równolegle z obiadem dla reszty domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Michałowice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich osiemnastu miejscowości gminy i bez dopłaty za odległość — od Raciborowic, które są najbliżej Krakowa, po Wolę Więcławską i Zagórzyce na drugim krańcu.",
    "Gmina leży w dolinie Dłubni, w granicach Dłubniańskiego Parku Krajobrazowego, i jest rozciągnięta wzdłuż rzeki. Dojazd pod adres bywa więc dłuższy, niż wygląda na mapie — nie ma tu jednej głównej drogi, która łączyłaby wszystko ze wszystkim. Dlatego przy umawianiu proszę o nazwę miejscowości, a nie o „gminę Michałowice”.",
    "Warto też wiedzieć, że w tej gminie znajduje się obelisk na Komorze — miejsce, w którym 6 sierpnia 1914 roku I Kompania Kadrowa przekroczyła granicę zaborów i obaliła słupy graniczne. Do dziś przychodzi tędy coroczny marsz. To jedno z tych miejsc, o których wie każdy mieszkaniec, a mało kto spoza gminy.",
  ],
  districts: [
    "Michałowice",
    "Raciborowice",
    "Więcławice Stare",
    "Więcławice Dworskie",
    "Masłomiąca",
    "Książniczki",
    "Młodziejowice",
    "Pielgrzymowice",
    "Sieborowice",
    "Wilczkowice",
    "Wola Więcławska",
    "Zagórzyce Stare",
    "Zagórzyce Dworskie",
    "Zdzięsławice",
    "Zerwana",
    "Kończyce",
    "Kozierów",
    "Górna Wieś",
  ],

  nearbyHeading: "Sąsiednie gminy też obsługuję",
  nearbyParagraphs: [
    "Michałowice sąsiadują z Zielonkami i z północnymi dzielnicami Krakowa, a stamtąd trasy rozchodzą się dalej po całej aglomeracji. Do żadnej z tych miejscowości nie doliczam opłaty za dojazd.",
    "Przy dalszych kierunkach zwykle umawiam kilka spotkań w jednym rejonie tego samego dnia. Dlatego czasem proponuję termin kilka dni później niż najbliższy wolny — za to taki, przy którym nie patrzę na zegarek.",
  ],
  nearbyTowns: [
    "Kraków",
    "Zielonki",
    "Niepołomice",
    "Wieliczka",
    "Proszowice",
    "Zabierzów",
  ],

  about: blokOMnie("do Michałowic", "w gminach na północ od Krakowa"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich miejscowości gminy Michałowice?",
      answer:
        "Tak — do wszystkich osiemnastu, łącznie z tymi najdalszymi: Wolą Więcławską, Zagórzycami, Zdzięsławicami i Kozierowem. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w gminie Michałowice"),
    {
      question: "Mam bardzo dużą kuchnię. Czy Thermomix nie będzie w niej zbędny?",
      answer:
        "Duża kuchnia rozwiązuje problem miejsca, ale nie problem czasu. Thermomix nie zastępuje blatu — zastępuje stanie przy garnku i pilnowanie. Na prezentacji zobaczysz to na konkretnym daniu i sama ocenisz, czy przy Twoim trybie dnia to coś zmienia.",
    },
    {
      question: "Czy urządzenie poradzi sobie z przetworami?",
      answer:
        "Tak i to jedna z rzeczy, o które pytają tu najczęściej. Konfitury, przeciery i sosy gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć. Jeśli chcesz, możemy zrobić coś takiego na spotkaniu — powiedz przy umawianiu.",
    },
    {
      question: "Czy mogę zaprosić na prezentację rodzinę albo sąsiadki?",
      answer:
        "Oczywiście i często tak to wygląda. Przy większej grupie padają ciekawsze pytania. Powiedz tylko, ile osób będzie, żebym wzięła więcej składników.",
    },
  ],

  geo: { lat: 50.1594, lng: 19.9789 },
};
