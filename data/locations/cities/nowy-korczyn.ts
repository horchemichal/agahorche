import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * NOWY KORCZYN — miasto w powiecie buskim, 900 mieszkańców
 * (31.12.2024, GUS); cała gmina 5 424. Lokacja 1258 r.
 * (Bolesław Wstydliwy), utrata praw miejskich 1869 r.,
 * ODZYSKANIE 1 STYCZNIA 2019 r. (decyzja Rady Ministrów
 * z 28 grudnia 2018 r.). „FASOLA KORCZYŃSKA" odmiany Piękny Jaś
 * jest wpisana na Listę Produktów Tradycyjnych MRiRW
 * 20 KWIETNIA 2007 r. i objęta unijnym CHRONIONYM OZNACZENIEM
 * GEOGRAFICZNYM od lipca 2010 r.
 *
 * UWAGA — HOMONIMY: KORCZYNA to gmina w powiecie krośnieńskim
 * (podkarpackie); STARY KORCZYN to odrębna wieś w tej samej
 * gminie. To inne miejscowości.
 *
 * KĄT: produkt chroniony prawem — czyli jedyne miasto w serwisie,
 * które ma własne jedzenie pod ochroną Unii Europejskiej, i jedyna
 * strona, na której trzeba powiedzieć, czego urządzenie z takim
 * produktem NIE robi i czego mi przy nim NIE WOLNO obiecywać.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — czym jest Chronione Oznaczenie Geograficzne i że obszar
 *   ochrony obejmuje pięć gmin, nie tylko Nowy Korczyn,
 * — że żadne urządzenie nie poprawia produktu chronionego i że
 *   nie będę tak pisać,
 * — że to, co urządzenie realnie robi, to gotowanie bez
 *   pilnowania i bez przywierania — i tyle,
 * — i że techniki gotowania strączków NIE opisuję tutaj, bo
 *   należy do innej strony.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW MOCZENIA ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o fasoli ani o strączkach.
 * — ŻADNEJ SUGESTII, że urządzenie „wydobywa smak" produktu
 *   chronionego albo robi go lepiej niż garnek. To byłoby
 *   żerowanie na cudzym oznaczeniu.
 * — ŻADNEGO ROZSZERZANIA OCHRONY. Nie napiszę „fasola
 *   z Nowego Korczyna" o czymkolwiek spoza obszaru objętego
 *   ChOG. Oznaczenie ma granice i strona je respektuje.
 * — ŻADNYCH NAZW PRODUCENTÓW ani gospodarstw.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Strączki" (Sędziszów
 * świętokrzyski) to strona o TECHNICE: moczeniu, czasie
 * gotowania, konsystencji. Ta strona techniki NIE POWTARZA
 * i wprost odsyła. Tutaj tematem jest OZNACZENIE PRAWNE
 * i uczciwość w mówieniu o cudzym produkcie. „Konkretny produkt"
 * (inne miasto) dotyczy ryby i lęku przed jej gotowaniem.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że w Nowym Korczynie jest prom. NIE MA.
 *   Prom kursował około osiemdziesięciu lat, do otwarcia mostu
 *   Nowy Korczyn–Borusowa 14 grudnia 2020 r. Most ma ponad
 *   670 m i kosztował blisko 54 mln zł.
 * — NIE PODAJĘ pozycji Dziennika Ustaw dla rozporządzenia
 *   z grudnia 2018 r. Nie ustalono jej; pewna jest data decyzji
 *   Rady Ministrów i data wejścia w życie.
 * — NIE ROZSTRZYGAM datacji synagogi. Źródła podają drugą
 *   połowę XVII w. albo koniec XVIII w. Piszę ostrożnie
 *   i nie podaję wieku.
 * — NIE PISZĘ o obecnym stanie ruin synagogi. Ostatnie
 *   potwierdzone źródło pochodzi sprzed ponad dziesięciu lat.
 * — NIE PODAJĘ największego pracodawcy. Nie ma takiego —
 *   97% firm w gminie to mikroprzedsiębiorstwa.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA.
 *
 * ŚWIADOMIE POMINIĘTE. W 1921 r. Żydzi stanowili około
 * siedemdziesięciu procent mieszkańców miasteczka; w czasie
 * okupacji w tutejszym getcie przebywało ponad cztery tysiące
 * osób, deportowanych w 1942 r. To jest prawda o tym mieście,
 * ale strona handlowa o sprzęcie kuchennym nie jest miejscem,
 * w którym wolno tego używać jako tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja 1258 r. (Bolesław Wstydliwy), klasztor franciszkanów
 *   ufundowany rok wcześniej, w 1257 r.,
 * — zamek królewski Kazimierza Wielkiego; zjazd rycerstwa Korony
 *   w 1404 r., uważany za pierwszy polski sejm; od XVI w.
 *   sejmiki generalne prowincji małopolskiej,
 * — utrata praw miejskich 1869 r., odzyskanie 1.01.2019,
 * — „fasola korczyńska" odmiany Piękny Jaś: Lista Produktów
 *   Tradycyjnych 20.04.2007, unijne ChOG od lipca 2010 r.,
 *   obszar ochrony: Nowy Korczyn, Wiślica, Opatowiec,
 *   Solec-Zdrój i Pacanów,
 * — miasto leży przy ujściu Nidy do Wisły,
 * — most Nowy Korczyn–Borusowa otwarty 14 grudnia 2020 r.,
 *   ponad 670 m, blisko 54 mln zł; zastąpił przeprawę promową,
 * — 900 mieszkańców miasta, 5 424 gminy (31.12.2024).
 */
export const NOWY_KORCZYN: CityContent = {
  slug: "nowy-korczyn",
  h1: "Thermomix Nowy Korczyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowy Korczyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowym Korczynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Korczyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Korczynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Korczyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Nowy Korczyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Fasola jest Wasza i chroniona. Sprzęt tylko gotuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Korczynie – jak wygląda prezentacja?",
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
      id: "produkt-chroniony",
      heading: "Jedyne miasto w tym serwisie z jedzeniem pod ochroną Unii Europejskiej",
      paragraphs: [
        "Napisałam do tej pory kilkaset stron o miastach w całej Polsce i w większości z nich musiałam uczciwie przyznać, że żadnego własnego produktu tam nie ma. Tutaj jest inaczej i to jest rzecz, którą warto powiedzieć głośno: fasola korczyńska, odmiany Piękny Jaś, trafiła na ministerialną Listę Produktów Tradycyjnych 20 kwietnia 2007 roku, a od lipca 2010 ma unijne Chronione Oznaczenie Geograficzne.",
        "Co to znaczy w praktyce, bo to nie jest odznaka na dyplomie. To znaczy, że nazwy nie wolno użyć dowolnie. Obszar objęty ochroną to pięć gmin w dolinie dolnej Nidy — Nowy Korczyn, Wiślica, Opatowiec, Solec-Zdrój i Pacanów — i tylko fasola stamtąd może się tak nazywać. Ziemię użyźniają coroczne wylewy Nidy i stąd bierze się wyjątkowo duże ziarno.",
        "A teraz zdanie, które jest właściwym powodem, dla którego ta strona istnieje. Nie napiszę Wam, że moje urządzenie zrobi tę fasolę lepiej. Nie zrobi. Sprzęt kuchenny nie poprawia produktu chronionego, nie wydobywa z niego niczego, czego by w nim nie było, i nie ma z jego jakością nic wspólnego. Jakość jest zasługą ziemi, rzeki i ludzi, którzy to uprawiają — a nie tego, co stoi na moim blacie. Przedstawiciel handlowy, który podpina się pod cudze oznaczenie, robi rzecz nieprzyzwoitą, i nie mam zamiaru tego robić w mieście, w którym ta fasola rośnie.",
        "Co urządzenie robi naprawdę, uczciwie i skromnie: gotuje z ustawioną temperaturą i miesza samo, więc nic nie przywiera do dna i nie trzeba przy garnku stać. Przy strączkach, które gotują się długo, to jest realna wygoda. Tyle i nic więcej.",
        "O samej technice — moczeniu, czasie, konsystencji — piszę na osobnej stronie i nie będę tego tutaj powtarzać, bo ta strona jest o czym innym.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Korczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie własną fasolę, powiedzcie to przy umawianiu — ugotujemy Waszą, nie moją. Wyjdzie uczciwiej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Korczynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla korczyńskiej rodziny",
      paragraphs: [
        "Nowy Korczyn liczy dziewięćset mieszkańców, cała gmina nieco ponad pięć tysięcy — i trudno uwierzyć, czym to miejsce było kiedyś. Lokował je Bolesław Wstydliwy w 1258 roku, rok po ufundowaniu klasztoru franciszkanów. Kazimierz Wielki postawił tu zamek, który stał się jedną z najważniejszych siedzib monarszych w kraju, a zjazd rycerstwa całej Korony z 1404 roku bywa nazywany pierwszym polskim sejmem. Od XVI wieku odbywały się tutaj sejmiki generalne całej Małopolski. Prawa miejskie miasto straciło w 1869 roku i odzyskało 1 stycznia 2019. Leży przy ujściu Nidy do Wisły, a most do Borusowej — ponad sześćset siedemdziesiąt metrów — otwarto dopiero 14 grudnia 2020 roku; wcześniej przez osiemdziesiąt lat jedynym połączeniem był prom.",
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

  districtsHeading: "Do których części Nowego Korczyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — w tym do Starego Korczyna, który jest osobną miejscowością — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowy Korczyn też przyjadę",
  nearbyParagraphs: [
    "Busko-Zdrój, Wiślica, Stopnica, Kazimierza Wielka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Busko-Zdrój", "Wiślica", "Stopnica", "Kazimierza Wielka", "Pińczów", "Połaniec"],

  about: blokOMnie("do Nowego Korczyna", "w Nowym Korczynie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Korczyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowym Korczynie"),
    {
      question: "Czy Thermomix ugotuje fasolę korczyńską lepiej niż garnek?",
      answer:
        "Nie napiszę tego, bo to nieprawda. Sprzęt kuchenny nie poprawia produktu chronionego oznaczeniem geograficznym — jakość tej fasoli jest zasługą ziemi, rzeki i ludzi, którzy ją uprawiają. Urządzenie robi rzecz skromniejszą: gotuje z ustawioną temperaturą i miesza samo, więc nic nie przywiera i nie trzeba przy garnku stać.",
    },
    {
      question: "Co właściwie oznacza Chronione Oznaczenie Geograficzne?",
      answer:
        "Że nazwy nie wolno użyć dowolnie. Fasola korczyńska odmiany Piękny Jaś ma unijne ChOG od lipca 2010 roku, a wcześniej, 20 kwietnia 2007, trafiła na ministerialną Listę Produktów Tradycyjnych. Obszar objęty ochroną to pięć gmin doliny dolnej Nidy: Nowy Korczyn, Wiślica, Opatowiec, Solec-Zdrój i Pacanów.",
    },
    {
      question: "Czy przeprawa promowa przez Wisłę jeszcze działa?",
      answer:
        "Nie. Prom kursował przez około osiemdziesiąt lat i zastąpił go most Nowy Korczyn–Borusowa, otwarty 14 grudnia 2020 roku — ponad sześćset siedemdziesiąt metrów długości.",
    },
  ],

  geo: { lat: 50.2992, lng: 20.8089 },
};
