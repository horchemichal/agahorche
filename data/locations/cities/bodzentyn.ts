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
 * BODZENTYN — miasto w powiecie kieleckim, 2 079 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie ok. 1355 r., utracone
 * w 1869/1870 r. po powstaniu styczniowym, ODZYSKANE
 * 31 GRUDNIA 1994 r. Miasto ma DWA RYNKI — Dolny i Górny.
 * Jest siedzibą dyrekcji Świętokrzyskiego Parku Narodowego.
 * „Chleb bodzentyński" figuruje na ministerialnej Liście
 * Produktów Tradycyjnych i jest pieczony przez rodzinną
 * piekarnię z tradycją sięgającą 1937 r.
 *
 * KĄT: czerstwy chleb — czyli druga połowa życia bochenka.
 * Miasto, które ma własny chleb na liście ministerialnej,
 * jest jedynym właściwym miejscem na stronę, która NIE uczy
 * piec chleba, tylko mówi, co zrobić z tym, który został
 * z czwartku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nie będę uczyć podrabiania chleba bodzentyńskiego
 *   i że po ten chleb idzie się do piekarni, nie do sprzętu,
 * — że urządzenie nie piecze, bo nie ma piekarnika,
 * — że to, co realnie robi z chlebem, dzieje się na końcu:
 *   bułka tarta, panierka, zagęszczenie, kostka pod grzanki,
 * — i że to jest mały temat, który po prostu odbiera pretekst
 *   do wyrzucania jedzenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PRZEPISÓW NA CHLEB BODZENTYŃSKI ani prób
 *   odtworzenia go. To cudzy wyrób, wpisany na listę
 *   ministerialną, i nie jest moją rolą pokazywać, jak go
 *   obejść.
 * — ŻADNYCH PORAD DOTYCZĄCYCH PLEŚNI ani tego, czy chleb
 *   z nalotem da się jeszcze uratować. To bezpieczeństwo
 *   żywności, nie moja działka — odmowa stoi w tekście wprost.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o pieczywie.
 * — ŻADNEJ KRYTYKI pieczywa sklepowego ani piekarni.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. PIECZENIE WŁASNEGO CHLEBA
 * należy do Grudziądza i celowo go tu NIE ruszam — tam chodzi
 * o wyrabianie, wyrastanie i rozczarowanie tych, którzy
 * kupili urządzenie „żeby piec chleb". Tutaj chodzi o bochenek,
 * który już jest, już był świeży i już nie jest.
 * „Mąka i mielenie" (inne miasto) dotyczy ziarna, nie pieczywa.
 * „Resztki" (Leszno, Marki) dotyczą ugotowanych dań, nie chleba.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZWY PIEKARNI ani nazwiska piekarza. Zakład
 *   jest ustalony i działa, ale nie reklamuję cudzych firm.
 *   Piszę opisowo: „rodzinna piekarnia".
 * — NIE PISZĘ, że miasto Bodzentyn leży w Świętokrzyskim Parku
 *   Narodowym. W granicach parku leży CZĘŚĆ GMINY; samo miasto
 *   leży u podnóża Łysogór i jest siedzibą dyrekcji parku.
 *   To rozróżnienie jest w tekście świadome.
 * — NIE PISZĘ, że ruiny zamku biskupów krakowskich są
 *   udostępnione do zwiedzania. Trwa rewitalizacja; najnowsze
 *   potwierdzone źródło pochodzi z grudnia 2023 r. i mówi
 *   o zabezpieczeniu murów oraz o PLANOWANYM drugim etapie.
 *   Piszę „ruiny, przy których trwają prace".
 * — NIE ROZSTRZYGAM, kto formalnie nadał prawa miejskie
 *   w 1355 r. — źródła podają biskupa Bodzantę i Kazimierza
 *   Wielkiego. Piszę „w połowie XIV wieku".
 * — NIE PODAJĘ największego pracodawcy. Brak danych.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA. Dwa rynki to fakt urbanistyczny, nie podział
 *   administracyjny, i tak są opisane.
 *
 * ŚWIADOMIE POMINIĘTE. Przed wojną około czterdziestu procent
 * mieszkańców miasta stanowili Żydzi; w 1943 r. Niemcy
 * przeprowadzili tu pacyfikację. To jest prawda o tym mieście
 * i nie zaprzeczam jej — ale strona handlowa o sprzęcie
 * kuchennym nie jest miejscem, w którym wolno tego używać
 * jako tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie w połowie XIV w., utrata po powstaniu
 *   styczniowym, odzyskanie 31 grudnia 1994 r.,
 * — dwa rynki: Dolny (handlowy) i Górny,
 * — siedziba dyrekcji Świętokrzyskiego Parku Narodowego,
 * — „chleb bodzentyński" na Liście Produktów Tradycyjnych
 *   MRiRW, pieczony przez rodzinną piekarnię działającą
 *   od 1937 r.,
 * — ruiny zamku biskupów krakowskich z 1365 r., w trakcie
 *   prac konserwatorskich,
 * — 2 079 mieszkańców (31.12.2024).
 */
export const BODZENTYN: CityContent = {
  slug: "bodzentyn",
  h1: "Thermomix Bodzentyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bodzentyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bodzentynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bodzentyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bodzentynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bodzentyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Bodzentyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Świeży chleb kupcie tutaj. Ja piszę o tym z czwartku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bodzentynie – jak wygląda prezentacja?",
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
      id: "czerstwy-chleb",
      heading: "Miasto z własnym chlebem na liście ministerialnej — i strona, która nie uczy go piec",
      paragraphs: [
        "Zacznę od tego, czego tu nie będzie, bo tak jest uczciwiej. „Chleb bodzentyński” jest wpisany na ministerialną Listę Produktów Tradycyjnych. Piecze go rodzinna piekarnia, której historia sięga 1937 roku — czyli prawie dziewięćdziesięciu lat robienia jednej rzeczy w jednym miejscu. Nie będę pokazywać, jak to obejść. Po ten chleb idzie się do piekarni.",
        "Tym bardziej że urządzenie, które sprzedaję, i tak by tego nie zrobiło. Nie ma piekarnika. Może wyrobić ciasto, ale upiec go nie może — i mówię to od razu, bo akurat pieczenie chleba jest tym, co ludzie sobie wyobrażają najczęściej i najczęściej porzucają po trzech próbach.",
        "To, co ono naprawdę robi z chlebem, dzieje się na drugim końcu jego życia. W czwartek.",
        "Bochenek z poniedziałku, wysuszony na kaloryferze albo w piekarniku, zmielony na bułkę tartą w kilkanaście sekund — i macie panierkę, której nie trzeba kupować. To nie jest odkrycie kulinarne, tylko drobiazg, który po prostu przestaje wymagać decyzji. Jeden warunek jest twardy: chleb musi być naprawdę suchy. Wilgotny nie zmieli się na proszek, tylko sklei w kulę na dnie naczynia i będziecie to zdrapywać.",
        "Do tego kilka rzeczy, które robi się obok: kostka na grzanki do zupy (ale samo zrumienienie zostaje przy patelni albo piekarniku — urządzenie nie przypieka), okruchy do zagęszczenia sosu, spód z suchych ciastek albo herbatników startych na piasek.",
        "I skala, żeby nikt nie poczuł się nabrany: to nie jest powód, żeby kupować sprzęt tej klasy. Bułkę tartą można kupić za kilka złotych. To jest drobiazg, który sprawia, że nie trzeba już szukać pretekstu — bo chleb, z którym nie wiadomo, co zrobić, ląduje w koszu nie dlatego, że jest zły, tylko dlatego, że nikomu się nie chce.",
        "Czego nie doradzę: co zrobić z chlebem, na którym pojawił się nalot. To jest pytanie z zupełnie innej dziedziny niż moja i nie będę na nie odpowiadać ani „da się”, ani „nie da się”. Jestem przedstawicielką handlową, nie technologiem żywności.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bodzentynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was w domu chleb regularnie zostaje, powiedzcie to przy umawianiu — pokażę tę część na sucho, bez wielkich obietnic.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bodzentynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bodzentyńskiej rodziny",
      paragraphs: [
        "Bodzentyn liczy nieco ponad dwa tysiące mieszkańców i ma rzadką w Polsce cechę: dwa rynki. Dolny, na którym toczy się handel, i Górny, kilkaset metrów dalej. Prawa miejskie miasto dostało w połowie XIV wieku, straciło je po powstaniu styczniowym i odzyskało dopiero 31 grudnia 1994 roku. Tutaj też, przy ulicy Suchedniowskiej, mieści się dyrekcja Świętokrzyskiego Parku Narodowego — sam park obejmuje część gminy, a miasto leży u podnóża Łysogór. Nad Rynkiem Górnym stoją ruiny zamku biskupów krakowskich z 1365 roku, przy których od kilku lat trwają prace.",
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

  districtsHeading: "Do których części Bodzentyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od Rynku Dolnego po Górny — i do sołectw gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Bodzentyn też przyjadę",
  nearbyParagraphs: [
    "Kielce, Nowa Słupia, Suchedniów, Starachowice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kielce", "Nowa Słupia", "Suchedniów", "Starachowice", "Skarżysko-Kamienna", "Daleszyce"],

  about: blokOMnie("do Bodzentyna", "w Bodzentynie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bodzentyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bodzentynie"),
    {
      question: "Czy Thermomix upiecze chleb?",
      answer:
        "Nie. Nie ma piekarnika — może wyrobić ciasto, ale upieczenie odbywa się w piekarniku albo, jak w Bodzentynie, w piekarni. Mówię to od razu, bo pieczenie chleba jest najczęstszym wyobrażeniem przed zakupem i najczęściej porzucanym po kilku próbach.",
    },
    {
      question: "Co urządzenie realnie robi z chlebem?",
      answer:
        "Rzeczy z końca jego życia: bułkę tartą i panierkę z wysuszonego bochenka, kostkę pod grzanki, okruchy do zagęszczenia sosu, spód z suchych herbatników. Warunek jest jeden — chleb musi być naprawdę suchy, bo wilgotny skleja się w kulę zamiast zmielić.",
    },
    {
      question: "Czy da się w nim zrobić chleb bodzentyński?",
      answer:
        "Nie będę tego pokazywać. To wyrób wpisany na ministerialną Listę Produktów Tradycyjnych, pieczony przez rodzinną piekarnię z tradycją od 1937 roku. Po ten chleb idzie się do piekarni, nie do sprzętu kuchennego.",
    },
  ],

  geo: { lat: 50.9439, lng: 21.0053 },
};
