import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * ŁOSICE — powiat łosicki, woj. mazowieckie.
 * MIASTO 6 771 (GUS 31.12.2024), 23,7 km², 285,2 os./km².
 * Gmina miejsko-wiejska: 10 361 osób, 121,3 km².
 * Siedziba powiatu łosickiego — najdalej na wschód wysuniętego
 * powiatu województwa mazowieckiego.
 *
 * ⚠ HOMONIM: ŁOSICE ≠ ŁOSIE (małopolskie) ≠ ŁOSOSINA.
 *   ⚠ ŁOSICE NIE LEŻĄ NA PODLASIU administracyjnie — to jest
 *   woj. MAZOWIECKIE, choć region historycznie podlaski.
 *   FAQ TO ROZRÓŻNIA.
 * ⚠ ODMIANA: „w Łosicach", „do Łosic", „łosicki".
 *   Nazwa jest w liczbie mnogiej — NIGDY „w Łosicach mieście"
 *   ani „Łosice leży".
 *
 * ⚠⚠ PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH — POTWIERDZONY:
 *   „PIEROGI NIEMOJSKIE" — wpis 16.12.2019, wieś NIEMOJKI
 *   w gminie Łosice. Farsz z zielonej soczewicy, ciasto
 *   z dodatkiem pokrzywy lub lebiody.
 *   ⚠⚠ KĄT „PIEROGI" JEST ZAJĘTY (Głowno i inne).
 *   PODAJĘ TO WYŁĄCZNIE JAKO FAKT W BLOKU O MIEŚCIE,
 *   NIE ROBIĘ Z TEGO TEMATU SEKCJI. TWARDA GRANICA.
 *   ⚠ KĄT „SOCZEWICA I STRĄCZKI" TEŻ JEST ZAJĘTY
 *   (sedziszow.ts) — NIE ROZWIJAM WĄTKU SOCZEWICY.
 *
 * ⚠ ROLNICTWO POWIATU — PODSTAWA KĄTA:
 *   głównym kierunkiem upraw jest KUKURYDZA — kiszonkowa
 *   i ziarnowa. W powiecie prowadzi się też uprawę pieczarek.
 *   ⚠ KĄT „GRZYBY" JEST ZAJĘTY — pieczarki wymieniam
 *   JEDNYM ZDANIEM w bloku o mieście, bez liczb i bez
 *   rozwijania. TWARDA GRANICA.
 *
 * ⚠ NAZW OSIEDLI NIE USTALONO — districts PUSTE.
 * ⚠ DAT HISTORYCZNYCH ŁOSIC NIE ZWERYFIKOWANO — NIE PODAJĘ
 *   ŻADNEJ DATY LOKACJI ANI PRAW MIEJSKICH. TWARDA GRANICA.
 *
 * KĄT: KUKURYDZA — roślina z pola i roślina z talerza
 * to nie to samo.
 * Kąt od tego, że kukurydza jest tu główną uprawą, a prawie
 * nic z tego, co rośnie na okolicznych polach, nie trafia
 * na ludzki talerz w postaci, w jakiej je znamy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — ŻE KUKURYDZA Z POLA I KUKURYDZA Z TALERZA TO INNE
 *   ODMIANY TEJ SAMEJ ROŚLINY, zbierane w zupełnie innym
 *   momencie: pastewną i ziarnową zbiera się dojrzałą
 *   i twardą, cukrową — młodą i mleczną,
 * — ŻE TO TŁUMACZY, DLACZEGO NIE MOŻNA „WZIĄĆ KOLBY Z POLA" —
 *   i dlaczego ludzie mieszkający wśród kukurydzy jedzą jej
 *   tyle samo co wszyscy inni,
 * — ŻE KOLBA CUKROWA TRACI SŁODYCZ PO ZBIORZE, bo cukier
 *   zamienia się w skrobię — dlatego kupiona rano jest inna
 *   niż wieczorem, i dlatego świeża z pola jest nieporównywalna
 *   z niczym. TO JEST NAJBARDZIEJ UŻYTECZNA RZECZ W TEKŚCIE,
 * — ŻE KUKURYDZA PĘKAJĄCA TO JESZCZE INNA ODMIANA — puchnie
 *   tylko ziarno o twardej łupinie, więc z kolby obiadowej
 *   nic nie wyjdzie,
 * — ⚠⚠ ŻE MĄKA KUKURYDZIANA I SKROBIA KUKURYDZIANA TO DWIE
 *   RÓŻNE RZECZY, notorycznie mylone: mąka to zmielone ziarno,
 *   ma smak i kolor; skrobia to sam wyizolowany krochmal,
 *   nie ma smaku i zagęszcza. Podmiana jednego drugim
 *   to najczęstszy powód, dla którego coś nie wychodzi.
 *   TO JEST DRUGA NAJWAŻNIEJSZA RZECZ,
 * — ŻE KASZKA KUKURYDZIANA (POLENTA) BYWA GRUBA I DROBNA
 *   i że wymaga ciągłego mieszania ⚠ ODSYŁAM DO STRONY
 *   O MIESZANIU (Opole Lubelskie), NIE ROZWIJAM,
 * — UCZCIWIE O SPRZĘCIE: nie obierze kolby, nie zrobi
 *   popcornu i nie zastąpi patelni przy przypiekaniu,
 * — ale robi trzy rzeczy realne: zmieli suche ziarno na mąkę,
 *   ugotuje kaszkę z mieszaniem bez stania nad garnkiem
 *   i zrobi zupę krem z kukurydzy gładko, bez przelewania
 *   do blendera.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI NA POLENTĘ ANI PRZEPISÓW.
 * — ⚠⚠ ZERO TEMATU GLUTENU I DIET BEZGLUTENOWYCH.
 *   To jest dieta zalecana medycznie i nie jest to moja
 *   dziedzina. NIE WSPOMINAM O TYM ANI SŁOWEM.
 *   TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 * — ŻADNYCH NAZW ODMIAN HANDLOWYCH I FIRM NASIENNYCH.
 * — ŻADNEJ KRYTYKI KUKURYDZY KONSERWOWEJ Z PUSZKI —
 *   zasada z Mrągowa: nie krytykuję produktów przemysłowych.
 * — ŻADNYCH PORAD O PASZACH I HODOWLI — nie znam się.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych —
 *   przy mieście na dawnym pograniczu to szczególnie ważne.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO sporów o rolnictwo, dopłaty i politykę rolną.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „MĄKA I MIELENIE" (Tarnogród) dotyczy MIELENIA
 *   JAKO CZYNNOŚCI. Tutaj mielenie jest jednym zdaniem
 *   na końcu, a tematem jest JEDNA ROŚLINA.
 * — „MIESZANIE" (Opole Lubelskie) dotyczy MIESZANIA.
 *   ODSYŁAM TAM I NIE ROZWIJAM.
 * — „SOCZEWICA I STRĄCZKI" (Sędziszów) dotyczy STRĄCZKÓW.
 * — „PIEROGI" i „GRZYBY" SĄ ZAJĘTE — pojawiają się
 *   wyłącznie jako suche fakty o mieście.
 * — „KASZE" i „PŁATKI ZIEMNIACZANE" (Głowno) dotyczą
 *   INNYCH SUROWCÓW.
 * TUTAJ chodzi o KUKURYDZĘ i o to, że pole i talerz
 * to dwie różne rośliny.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dat lokacji ani praw miejskich Łosic.
 * — NIE PISZĘ, że Łosice leżą w województwie podlaskim.
 * — NIE ROBIĘ tematu z pierogów ani z pieczarek.
 * — NIE WSPOMINAM o glutenie.
 * — NIE PODAJĘ nazw osiedli ani odmian.
 * — NIE TWIERDZĘ, że kukurydza z okolicznych pól nadaje się
 *   do jedzenia z kolby.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Łosice liczą 6 771 mieszkańców (GUS, 31.12.2024)
 *   na 23,7 km², a cała gmina miejsko-wiejska 10 361 osób
 *   na 121,3 km²; miasto jest siedzibą powiatu łosickiego,
 *   najdalej na wschód wysuniętego powiatu województwa
 *   mazowieckiego,
 * — głównym kierunkiem upraw w powiecie jest kukurydza —
 *   kiszonkowa i ziarnowa; prowadzi się tu także uprawę
 *   pieczarek,
 * — 16 grudnia 2019 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano „pierogi niemojskie" ze wsi Niemojki
 *   w gminie Łosice — z farszem z zielonej soczewicy
 *   i ciastem z dodatkiem pokrzywy lub lebiody.
 */
export const LOSICE: CityContent = {
  slug: "losice",
  h1: "Thermomix Łosice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łosice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łosicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łosice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łosicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łosic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Łosice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mąka kukurydziana i skrobia kukurydziana to dwie różne rzeczy — i stąd bierze się połowa nieudanych dań.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łosicach – jak wygląda prezentacja?",
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
      id: "kukurydza",
      heading: "Kukurydza z pola i kukurydza z talerza to nie to samo",
      paragraphs: [
        "Głównym kierunkiem upraw w powiecie łosickim jest kukurydza — kiszonkowa i ziarnowa. Jedzie się przez okolicę i widzi ją po obu stronach drogi. A potem okazuje się, że ludzie mieszkający wśród kukurydzy jedzą jej dokładnie tyle samo co wszyscy inni, i to zwykle z puszki.",
        "Nie ma w tym żadnej przewrotności. To po prostu inna roślina — a ściślej inne odmiany tej samej rośliny, zbierane w zupełnie innym momencie życia. Kukurydzę kiszonkową i ziarnową zbiera się dojrzałą i twardą, bo o to właśnie chodzi. Kukurydzę cukrową zbiera się młodą i mleczną, zanim cukier zdąży zamienić się w skrobię. Z dojrzałej kolby z pola nie zrobi się nic, co dałoby się zjeść z ręki.",
        "Z tego wynika rzecz najbardziej praktyczna w całym tym tekście. Kolba cukrowa traci słodycz od momentu zerwania, bo ta przemiana cukru w skrobię nie zatrzymuje się po zbiorze. Kolba kupiona rano jest inna niż ta sama kolba wieczorem. Dlatego świeża, z pola, jedzona tego samego dnia jest nieporównywalna z niczym, co można kupić — i dlatego nie ma sensu kupować jej „na zapas na kilka dni”.",
        "Kukurydza pękająca to jeszcze coś innego. Puchnie tylko ziarno o twardej łupinie i odpowiedniej wilgotności w środku — to ta łupina zatrzymuje parę na tyle długo, żeby ziarno pękło. Z kolby obiadowej nie wyjdzie nic, choćby się bardzo chciało.",
        "Teraz rzecz, która w praktyce psuje najwięcej dań, a nie ma z polem nic wspólnego. Mąka kukurydziana i skrobia kukurydziana to dwa różne produkty i notorycznie się je myli — również w przepisach.",
        "Mąka kukurydziana to zmielone ziarno. Ma smak, ma żółty kolor i zachowuje się jak mąka. Skrobia kukurydziana to sam wyizolowany krochmal — jest biała, nie ma smaku i służy do zagęszczania. Jeśli ktoś w przepisie na zagęszczenie sosu użyje mąki zamiast skrobi, dostanie coś matowego i mączystego. Jeśli odwrotnie, w cieście — dostanie coś, co się rozpada. To jest chyba najczęstsza cicha przyczyna nieudanego dania z kukurydzą.",
        "Jest jeszcze kaszka kukurydziana, czyli polenta, w wersji grubszej i drobniejszej. Grubsza zostaje wyraźna w ustach, drobniejsza robi się gładka. Obie mają jedną wspólną cechę: trzeba je mieszać praktycznie bez przerwy, bo inaczej przywierają. O samym mieszaniu jako czynności, której człowiek po prostu nie wytrzymuje, pisałam osobno i nie będę tego powtarzać.",
        "Na koniec uczciwie o sprzęcie, bo tu akurat granice są ostre. Thermomix nie obierze kolby z liści, nie odetnie ziaren i nie zrobi popcornu. Nie zastąpi też patelni ani grilla, kiedy chodzi o przypieczenie — ten smak bierze się z suchego, mocnego ciepła, którego w naczyniu z mieszadłem nie ma.",
        "Robi natomiast trzy rzeczy realne. Zmieli suche ziarno na mąkę, więc jeśli ktoś ma dostęp do ziarna, nie musi jej kupować. Ugotuje kaszkę z mieszaniem, czyli załatwi dokładnie tę część, która wszystkich zniechęca. I zrobi zupę krem z kukurydzy do końca w jednym naczyniu, bez przelewania gorącego do blendera — a to przy zupach jest połowa roboty i całe ryzyko.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łosicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć konkretnie zupę krem albo kaszkę robioną bez stania nad garnkiem — powiedzcie przy umawianiu, zrobimy to na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łosicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łosickiej rodziny",
      paragraphs: [
        "Łosice liczą blisko sześć i trzy czwarte tysiąca mieszkańców na niespełna dwudziestu czterech kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad dziesięć tysięcy osób na stu dwudziestu jeden kilometrach. Miasto jest siedzibą powiatu łosickiego — najdalej na wschód wysuniętego powiatu województwa mazowieckiego. Głównym kierunkiem upraw jest tu kukurydza, kiszonkowa i ziarnowa; prowadzi się w powiecie także uprawę pieczarek. Szesnastego grudnia 2019 roku na ministerialną Listę Produktów Tradycyjnych wpisano pierogi niemojskie ze wsi Niemojki w gminie Łosice — z farszem z zielonej soczewicy i ciastem z dodatkiem pokrzywy lub lebiody.",
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

  districtsHeading: "Do których części Łosic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic rynku po domy przy wylotach dróg. Dojeżdżam też do wsi w gminie, w tym do Niemojek, Świniarowa i Chotycz.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Łosice też przyjadę",
  nearbyParagraphs: [
    "Platerów, Sarnaki, Huszlew, Olszanka, Mordy, Siedlce i Biała Podlaska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Siedlce", "Biała Podlaska", "Międzyrzec Podlaski", "Sokołów Podlaski"],

  about: blokOMnie("do Łosic", "w Łosicach", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łosic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Łosice, siedzibę powiatu łosickiego — leżą one w województwie mazowieckim, choć region jest historycznie podlaski.",
    },
    ...faqWspolne("w Łosicach"),
    {
      question: "Czym różni się mąka kukurydziana od skrobi kukurydzianej?",
      answer:
        "To dwa różne produkty. Mąka kukurydziana to zmielone ziarno — ma smak, żółty kolor i zachowuje się jak mąka. Skrobia kukurydziana to sam wyizolowany krochmal: biała, bez smaku, służy do zagęszczania. Podmiana jednego drugim jest najczęstszą cichą przyczyną nieudanego dania.",
    },
    {
      question: "Dlaczego kolba kupiona z pola smakuje inaczej niż ta ze sklepu?",
      answer:
        "Bo kukurydza cukrowa traci słodycz od momentu zerwania — cukier zamienia się w niej w skrobię i ta przemiana nie zatrzymuje się po zbiorze. Kolba jedzona tego samego dnia jest po prostu innym warzywem niż ta sama kolba kilka dni później. Z tego samego powodu nie warto kupować jej na zapas.",
    },
    {
      question: "Czy Thermomix zrobi popcorn albo obierze kolbę?",
      answer:
        "Nie i nie będzie. Popcorn wymaga innej odmiany kukurydzy i suchego, mocnego ciepła, a kolby obiera się ręką. Urządzenie robi natomiast trzy rzeczy: zmieli suche ziarno na mąkę, ugotuje kaszkę kukurydzianą z mieszaniem i zrobi zupę krem do końca w jednym naczyniu.",
    },
  ],

  geo: { lat: 52.2144, lng: 22.7203 },
};
