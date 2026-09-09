import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * RAWICZ — miasto zaprojektowane od zera w 1638 r. dla protestanckich
 * uchodźców ze Śląska, z rynkiem pośrodku i ulicami pod kątem prostym.
 * Przywileje dla tutejszych rzeźników są starsze niż samo miasto.
 *
 * KĄT: duża uroczystość rodzinna w domu. Chrzciny, komunia, osiemnastka,
 * stypa po pogrzebie. Sytuacja, w której padają pytania „a ugotuję w tym
 * na czterdzieści osób?" — i w której uczciwa odpowiedź brzmi: nie tak,
 * jak sobie wyobrażacie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — to NIE jest sprzęt gastronomiczny. Naczynie ma jedną pojemność
 *   i przy czterdziestu osobach gotuje się partiami albo wcale,
 * — co realnie pomaga: rzeczy robione WCZEŚNIEJ i seriami — pasty,
 *   sałatki, kremy do tortu, farsze, masy do ciast,
 * — czego NIE zrobi: nie usmaży, nie upiecze, nie podgrzeje wszystkiego
 *   naraz na godzinę zero,
 * — i uczciwa rada: przy dużej uroczystości część rzeczy po prostu
 *   się kupuje, i to nie jest porażka.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PRZECHOWYWANIU, TERMINACH PRZYDATNOŚCI ANI
 *   O BEZPIECZEŃSTWIE JEDZENIA PRZYGOTOWANEGO Z WYPRZEDZENIEM
 *   (zasada ze Skierniewic). Przy czterdziestu osobach to jest realne
 *   ryzyko i tym bardziej nie doradzam.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH WYLICZEŃ, ile się zaoszczędzi na uroczystości względem
 *   cateringu (zasada z Jarocina).
 * — STYPĘ wymieniam raz, rzeczowo, wśród innych okazji. Bez
 *   dramatyzowania i bez wykorzystywania czyjejś żałoby.
 *
 * ROZGRANICZENIE. Wieliczka mówi o gościach na jeden dzień, Krynica
 * o gościu na trzy tygodnie, Bukowina o kuchni przyjmującej płacących
 * gości. Tutaj chodzi o JEDNORAZOWĄ DUŻĄ UROCZYSTOŚĆ,
 * do której przygotowuje się tygodniami.
 *
 * ODRZUCONE KĄTY:
 * — zakład karny jako pracodawca: liczba 315 osób (287 funkcjonariuszy,
 *   luty 2022) się broni, ale lokalna prasa nazywa rawickie więzienie
 *   „jednym z największych w kraju", a to NIE przechodzi porównania —
 *   dziesiąte miejsce w Polsce to 1 145 miejsc, Rawicz ma ok. 840.
 *   Do tego systemu zmianowego nie potwierdza żadne źródło lokalne,
 * — kiełbaski rawickie i mleczarnia: wpis na Liście Produktów
 *   Tradycyjnych jest prawdziwy (14 listopada 2007), ale wędliny ma
 *   już Zambrów, a nabiał Wieluń. Kiełbaski zostają w tekście jako
 *   fakt o mieście, nie jako oś,
 * — „masło rawickie": SPRAWDZONE I OBALONE. Nie ma go na Liście
 *   Produktów Tradycyjnych ani w zestawieniu produktów tradycyjnych
 *   Wielkopolski. To mit i nie ma go w tekście.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy 19 549 mieszkańców (GUS, 31.12.2024) na 8,9 km²;
 *   gmina ma 134 km² i 22 sołectwa,
 * — lokacja 24 marca 1638 r., przywilej Władysława IV; założycielem był
 *   Adam Olbracht Przyjma-Przyjemski, a plan miasta — regularny,
 *   z rynkiem pośrodku — narysował architekt Michał Flandrin z Wrocławia,
 * — miasto powstało dla protestanckich uchodźców opuszczających Śląsk
 *   w czasie wojny trzydziestoletniej; w 1663 r. Jan Opaliński dołożył
 *   Nowy Rynek dla osadników katolickich,
 * — przywileje dla rawickich rzeźników pochodzą z 1577 r., czyli
 *   sprzed lokacji miasta,
 * — kiełbaski rawickie wpisano na ministerialną Listę Produktów
 *   Tradycyjnych 14 listopada 2007 r.,
 * — Okręgowa Spółdzielnia Mleczarska działa od 1887 r. i przerabia
 *   około siedmiuset tysięcy litrów mleka miesięcznie od około stu
 *   okolicznych rolników,
 * — do Leszna 40 km, do Wrocławia 70 km, do Poznania 100 km,
 * — bezrobocie 3,6% to wskaźnik POWIATU — w tekście go nie ma,
 * — NIE ZNALAZŁAM urzędowego podziału miasta na osiedla.
 */
export const RAWICZ: CityContent = {
  slug: "rawicz",
  h1: "Thermomix Rawicz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rawicz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rawiczu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i sołectwa. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rawicz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rawiczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rawicza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich dwudziestu dwóch sołectw gminy.",

  highlights: highlightyStandardowe("Rawicz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na czterdzieści osób? Nie tak, jak to sobie wyobrażacie. Wyjaśniam niżej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rawiczu – jak wygląda prezentacja?",
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
      id: "uroczystosc",
      heading: "Chrzciny, komunia, osiemnastka — czyli pytanie o czterdzieści osób",
      paragraphs: [
        "Rawicz jest miastem zaprojektowanym od zera. Dwudziestego czwartego marca tysiąc sześćset trzydziestego ósmego roku Władysław Czwarty wydał przywilej lokacyjny, a plan — rynek pośrodku, ulice pod kątem prostym — narysował architekt z Wrocławia. Miasto powstało dla protestanckich uchodźców opuszczających Śląsk. Ciekawe jest przy tym, że przywileje dla tutejszych rzeźników są starsze od samego miasta: pochodzą z tysiąc pięćset siedemdziesiątego siódmego roku, a kiełbaski rawickie trafiły w dwa tysiące siódmym na ministerialną Listę Produktów Tradycyjnych.",
        "W mieście z taką tradycją rodzinne uroczystości robi się w domu — i stąd pytanie, które przy rawickich prezentacjach pada częściej niż gdziekolwiek indziej: „a ugotuję w tym na czterdzieści osób?”. Odpowiadam na nie zawsze tak samo, i nie jest to odpowiedź, którą chciałby usłyszeć sprzedawca.",
        "Nie w ten sposób, w jaki to sobie wyobrażacie. To nie jest sprzęt gastronomiczny. Naczynie ma jedną, konkretną pojemność i przy czterdziestu osobach albo gotuje się partiami — jedna po drugiej, z płukaniem między nimi — albo nie gotuje się w tym wcale. Kto obiecuje Wam inaczej, mija się z prawdą, a Wy przekonacie się o tym w najgorszym możliwym momencie, czyli rano w dniu uroczystości.",
        "Gdzie to naprawdę pomaga, to w tygodniu przed. Duża uroczystość to nie jest jedno gotowanie, tylko kilkanaście drobnych robót rozłożonych na kilka dni: pasty i pasztety, sałatki, farsze do pierogów i naleśników, masy i kremy do ciast. Wszystko to są rzeczy, w których cała trudność polega na rozdrabnianiu i mieszaniu — i wszystkie da się zrobić seriami w jednym naczyniu, bez stania obok. To jest realna różnica, tylko rozłożona na dni, a nie na godzinę zero.",
        "Czego nie zrobi w ogóle: nie usmaży kotletów, nie upiecze ciasta ani mięsa i nie podgrzeje wszystkiego naraz przed przyjściem gości. Piekarnik, patelnia i miejsce w lodówce zostają dokładnie tak samo potrzebne jak wcześniej.",
        "I rada, której zwykle się ode mnie nie spodziewają. Przy naprawdę dużej uroczystości część rzeczy po prostu się kupuje — wędliny u rzeźnika, ciasto u cukiernika — i to nie jest żadna porażka ani oszczędzanie na gościach. W mieście, w którym rzeźnicy mają przywileje od czterystu pięćdziesięciu lat, upieranie się, żeby wszystko zrobić samemu, bywa po prostu gorszym pomysłem.",
        "Jedna granica na koniec, przy której nie ustąpię. Nie doradzam nic o tym, co i jak długo można trzymać przed uroczystością ani co jeszcze nadaje się do podania. Przy czterdziestu osobach zła podpowiedź w tej sprawie ma czterdziestokrotnie większe konsekwencje, a ja nie jestem od tego.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rawiczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli szykujecie uroczystość, powiedzcie o tym przy umawianiu. Wtedy pokażę dokładnie te rzeczy, które robi się wcześniej i seriami — a nie efektowne danie, którego i tak nikt na chrzcinach nie poda.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rawiczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rawickiej rodziny",
      paragraphs: [
        "Rawicz leży czterdzieści kilometrów od Leszna i siedemdziesiąt od Wrocławia, z bezpośrednimi pociągami w obie strony. W wielu domach ktoś stąd dojeżdża, więc obiad powstaje po powrocie i przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Rawicza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw gminy, bez dopłaty za dojazd.",
    "Nie znalazłam urzędowego wykazu osiedli w samym mieście, więc przy umawianiu najprościej podać ulicę albo nazwę wsi.",
  ],
  districts: [],

  nearbyHeading: "Poza Rawicz też przyjadę",
  nearbyParagraphs: [
    "Bojanowo, Jutrosin, Miejska Górka i Pakosław są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bojanowo", "Jutrosin", "Miejska Górka", "Pakosław", "Leszno", "Góra"],

  about: blokOMnie("do Rawicza", "w Rawiczu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rawicza bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich dwudziestu dwóch sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rawiczu"),
    {
      question: "Ugotuję w tym na czterdzieści osób?",
      answer:
        "Nie w ten sposób, w jaki zwykle się to sobie wyobraża. To nie jest sprzęt gastronomiczny — naczynie ma jedną pojemność, więc przy takiej liczbie gości albo gotuje się partiami, albo wcale. Pomaga za to w tygodniu przed: pasty, sałatki, farsze, masy do ciast robi się seriami, bez stania obok.",
    },
    {
      question: "Czy to się opłaci zamiast cateringu?",
      answer:
        "Nie policzę tego i nie będę udawać, że umiem — takie wyliczenia zawsze wychodzą pod tezę. Powiem za to wprost: przy dużej uroczystości część rzeczy warto po prostu kupić, wędliny u rzeźnika, ciasto u cukiernika. To nie jest porażka, tylko rozsądek.",
    },
    {
      question: "Da się przygotować wszystko kilka dni wcześniej?",
      answer:
        "Część rzeczy tak, ale o tym, co i jak długo można trzymać, nie doradzam. Przy czterdziestu osobach zła podpowiedź w tej sprawie ma czterdziestokrotnie większe konsekwencje, a ja jestem przedstawicielką handlową, nie technologiem żywności.",
    },
  ],

  geo: { lat: 51.6089, lng: 16.8583 },
};
