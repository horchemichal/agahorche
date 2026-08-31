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
 * MSZANA DOLNA — GMINA WIEJSKA w powiecie limanowskim. TERYT 1207052.
 * ⚠️⚠️ TO ODRĘBNA GMINA OD MIASTA MSZANA DOLNA (TERYT 1207021).
 * 17 652 mieszkańców (GUS, 31.12.2024), 170,1 km², 104 os./km²,
 * +9,6% od 2002, średni wiek 37,8, saldo migracji +8,
 * REGON 1 785 (budownictwo 44,0%). Lesistość 42,4%.
 * 9 SOŁECTW = 9 WSI. Siedziba: ul. Spadochroniarzy 6, 34-730 Mszana
 * Dolna — czyli W MIEŚCIE, które do gminy nie należy.
 * Wójt: Bolesław Żaba. Współrzędne 49,68218 / 20,06633.
 *
 * OŚ STRONY: WĘDZARNIA Z KASINKI MAŁEJ. Dwa wpisy na Listę Produktów
 * Tradycyjnych tego samego dnia — 29 MAJA 2017: BOCZEK DOMOWY
 * Z KASINKI i KIEŁBASA SWOJSKA TRADYCYJNA Z KASINKI. Producent:
 * P.P.H.U. „MARKAM” Andrzej Marek Skolarus, Kasinka Mała 539 —
 * firma RODZINNA, założona w 1991 r. przez Kazimierę i Andrzeja
 * Skolarusów. Od 2000 r. własna hodowla trzody, później własne zboże
 * i pasza (Cichawa). Ponad 50 punktów sprzedaży.
 * ⚠️ ZATRUDNIENIA NIE PODAWAĆ — nie udało się potwierdzić liczby.
 * ⚠️⚠️ KUCHNIA ZAGÓRZAŃSKA (bryjka, prażucha, kwaśnica) JEST OSIĄ
 * MIASTA MSZANA DOLNA. Tu wolno wspomnieć nazwę regionu, ale
 * NIE budować na potrawach zagórzańskich.
 * ⚠️⚠️ GORCZAŃSKI PARK NARODOWY JEST OSIĄ KAMIENICY. Nie rozwijać.
 * ⚠️ Wpisy z Kasinki to wpisy MIĘSNE — jedyne takie w tej okolicy;
 * nabiał limanowski i chleb męciński należą do innych stron.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ BOCZEK DOMOWY Z KASINKI oraz KIEŁBASA SWOJSKA TRADYCYJNA
 *   Z KASINKI — Lista Produktów Tradycyjnych MRiRW, OBA WPISANE
 *   29.05.2017, kategoria produkty mięsne, województwo małopolskie
 *   (minrol.gov.pl),
 * — MARKAM: P.P.H.U. „MARKAM” Andrzej Marek Skolarus, Kasinka Mała
 *   539. Firma rodzinna założona w 1991 r. przez Kazimierę
 *   i Andrzeja Skolarusów; od 2000 r. własna hodowla trzody chlewnej,
 *   następnie własna uprawa zbóż i produkcja paszy w Cichawie.
 *   Ponad 50 własnych punktów sprzedaży (markam.pl),
 * — 9 SOŁECTW = 9 WSI (mszana.pl): Glisne, Kasina Wielka,
 *   Kasinka Mała, Lubomierz, Łętowe, Łostówka, Mszana Górna,
 *   Olszówka, Raba Niżna. ⚠️ polskawliczbach podaje 11 miejscowości —
 *   to przysiółki liczone osobno; SOŁECTW JEST DZIEWIĘĆ,
 * — KGW: „Paradne Gosposie” w Kasince Małej, KGW Olszówka,
 * — KASINA SKI (Kasina Wielka, stoki Śnieżnicy): kolej krzesełkowa
 *   1 100 m, przepustowość 1 200 osób na godzinę, stacja górna
 *   900 m n.p.m. REZERWAT ŚNIEŻNICA utworzony w 1968 r.,
 * — IMPREZY: „Zagórzańskie Lato” (8–9.08.2026), Zagórzańskie Dożynki,
 * — KOLEJ, linia 104 Rabka Zaryte – Mszana Dolna – Fornale (Nowy
 *   Sącz): umowa VIII.2025, PONAD 567 MLN ZŁ NETTO, wykonawcy PORR
 *   i Trakcja System, 66 obiektów inżynieryjnych, prędkość
 *   z 30 do 120 km/h, zakończenie VIII.2027 (PLK),
 * — LESISTOŚĆ 42,4%; gmina otacza miasto od wszystkich stron.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — POTRAW ZAGÓRZAŃSKICH JAKO OSI (bryjka, prażucha, kwaśnica).
 *   To oś MIASTA Mszana Dolna,
 * — GORCZAŃSKIEGO PARKU NARODOWEGO. To oś KAMIENICY,
 * — LICZBY ZATRUDNIONYCH W MARKAMIE. Nie potwierdzona,
 * — POWODZI W KASINCE MAŁEJ (VIII.2014). ŚWIADOMIE POMINIĘTE,
 *   zgodnie z linią przyjętą dla osuwisk w gminie Limanowa,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje te same
 *   liczby dla trzech różnych gmin powiatu — to dane POWIATOWE,
 * — NAJDŁUŻSZEGO TUNELU I TARCZY „JADWIGA”. To oś GMINY LIMANOWA.
 *   Tutaj kolej pojawia się wyłącznie jako remont linii 104,
 *   z inną liczbą, innym wykonawcą i innym terminem.
 *
 * PUŁAPKI:
 * — ⚠️ URZĄD GMINY MA ADRES W MIEŚCIE (ul. Spadochroniarzy 6),
 *   ale miasto jest odrębną gminą. To sama sytuacja co w gminie
 *   Tarnów i gminie Limanowa — WOLNO WSPOMNIEĆ, NIE CZYNIĆ TEZĄ,
 * — ⚠️ KASINA WIELKA I KASINKA MAŁA TO DWIE RÓŻNE WSIE.
 *   Wpisy na listę produktów tradycyjnych są z KASINKI (Małej),
 *   stok narciarski jest w KASINIE (Wielkiej),
 * — ⚠️ Szczawa od 1.01.2025 jest odrębną gminą i NIE należy
 *   do gminy Mszana Dolna ani do Kamienicy.
 */

export const MSZANA_DOLNA_GMINA: CityContent = {
  slug: "mszana-dolna-gmina",
  h1: "Thermomix gmina Mszana Dolna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Mszana Dolna — prezentacja",
  seoDescription:
    "Thermomix w gminie wiejskiej Mszana Dolna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich dziewięciu wsi bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Mszana Dolna — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Mszana Dolna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Kasinki Małej, Kasiny Wielkiej, Mszany Górnej, Lubomierza i pozostałych wsi gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dziewięć wsi gminy, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Mszana Dolna – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Wieś, która ma dwa wpisy do rejestru i obie z wędzarni",
      paragraphs: [
        "Dwudziestego dziewiątego maja dwa tysiące siedemnastego roku ministerstwo wpisało na Listę Produktów Tradycyjnych dwie rzeczy z tej samej wsi i tego samego dnia: boczek domowy z Kasinki i kiełbasę swojską tradycyjną z Kasinki. Kasinka Mała jest jednym z dziewięciu sołectw tej gminy.",
        "Robi je firma rodzinna. Kazimiera i Andrzej Skolarusowie założyli ją w tysiąc dziewięćset dziewięćdziesiątym pierwszym roku pod adresem Kasinka Mała pięćset trzydzieści dziewięć. Od dwutysięcznego mają własną hodowlę trzody, później doszła własna uprawa zbóż i własna pasza. Dziś prowadzą ponad pięćdziesiąt punktów sprzedaży.",
        "To jest dokładnie ta droga, o której zwykle mówi się teoretycznie: od paszy przez zwierzę po wędzarnię, w jednych rękach, w jednej wsi. Rzadko zdarza się, żeby dało się ją wskazać palcem na mapie sołectwa.",
        "Dla mnie to również praktyczna informacja o tym, jak się tu gotuje. Tam, gdzie mięso i wędlina są lokalne i dobre, obiad nieczęsto zaczyna się od paczki z supermarketu, a częściej od kawałka mięsa, które trzeba obrobić. I to jest zupełnie inna praca w kuchni niż odgrzewanie.",
        "Poza wędzarnią gmina żyje z lasu i ze stoku. Lasy zajmują czterdzieści dwa procent jej powierzchni. W Kasinie Wielkiej — to inna wieś niż Kasinka Mała, warto uważać na te nazwy — działa Kasina Ski: kolej krzesełkowa o długości tysiąca stu metrów, przepustowość tysiąc dwieście osób na godzinę, górna stacja na dziewięciuset metrach nad poziomem morza, na stokach Śnieżnicy. Sam szczyt jest od tysiąc dziewięćset sześćdziesiątego ósmego roku rezerwatem.",
        "Latem gmina zbiera się na Zagórzańskim Lecie i na Zagórzańskich Dożynkach. Zagórzanie to nazwa grupy, do której należy ta okolica — sama Mszana Dolna, czyli miasto, jest odrębną gminą i ma tę kuchnię opisaną u siebie.",
        "Trwa też remont linii kolejowej numer sto cztery, z Rabki Zaryte przez Mszanę Dolną do Fornali. Umowę na ponad pięćset sześćdziesiąt siedem milionów złotych netto podpisano w sierpniu dwa tysiące dwudziestego piątego roku, prace obejmują sześćdziesiąt sześć obiektów inżynieryjnych, a prędkość ma wzrosnąć z trzydziestu do stu dwudziestu kilometrów na godzinę. Koniec przewidziano na sierpień dwa tysiące dwudziestego siódmego.",
        "Gmina liczy siedemnaście tysięcy sześćset pięćdziesiąt dwie osoby na stu siedemdziesięciu kilometrach kwadratowych i od dwa tysiące drugiego roku urosła o dziewięć i sześć dziesiątych procenta. Średni wiek mieszkańca to trzydzieści siedem lat i osiem dziesiątych.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Mszana Dolna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj nazwę wsi, a przy Kasinie i Kasince koniecznie tę pełną: Kasina Wielka i Kasinka Mała to dwie różne miejscowości i mylą się nawet nawigacji. To samo dotyczy przysiółków — jest ich tu sporo więcej niż samych wsi.",
        "Urząd gminy ma adres przy ulicy Spadochroniarzy w Mszanie Dolnej, czyli w mieście, które do gminy nie należy. Jeśli podasz sam adres urzędu, nie wiem jeszcze, gdzie mam przyjechać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Mszana Dolna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Jedzenie po całym dniu na dworze",
      paragraphs: [
        "W gminie, w której zimą jeździ się na Śnieżnicy, a przez resztę roku chodzi po lasach zajmujących czterdzieści dwa procent powierzchni, kuchnia ma jedno bardzo konkretne zadanie: nakarmić ludzi, którzy wracają zmarznięci i głodni o nieprzewidywalnej porze.",
        "To zupełnie inna sytuacja niż obiad o czternastej dla wszystkich naraz. Ktoś wraca o pierwszej, ktoś o czwartej, ktoś zabiera termos i nie wraca w ogóle do wieczora.",
        "Urządzenie ratuje tu przede wszystkim zupy. Gęsta, sycąca zupa gotuje się sama, bez pilnowania i bez mieszania, i jest gotowa dokładnie na moment, na który ustawię minutnik. Można ją zostawić ciepłą i nalewać, kiedy ktoś wejdzie.",
        "Druga rzecz to napoje do termosu. Gorąca herbata z imbirem, kompot, mleko na kakao dla dzieci — wszystko z odmierzoną temperaturą, więc nie ma zgadywania, czy nie będzie za gorące na pierwszy łyk.",
        "Trzecia to obróbka mięsa, którego tu nie brakuje. Farsz na pierogi albo na gołąbki mieli się w kilkanaście sekund, pasty i smarowidła na chleb powstają w tym samym naczyniu, a mięso duszone w garnku nie wymaga stania nad nim.",
        "I czwarta, najbardziej domowa: coś słodkiego na powrót. Ciasto, którego wyrobienie zajmuje trzy minuty zamiast kwadransa, robi ogromną różnicę w dzień, w którym i tak wszyscy są zmęczeni. Piekarnik dalej jest potrzebny — tego urządzenie nie zastąpi i nigdy nie mówię inaczej.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Gmina Mszana Dolna i gotowanie — boczek i kiełbasa z Kasinki",
    paragraphs: [
      "Ta gmina ma dwa wpisy na ministerialnej Liście Produktów Tradycyjnych i oba dotyczą jednej wsi: boczek domowy z Kasinki i kiełbasa swojska tradycyjna z Kasinki, zarejestrowane tego samego dnia, dwudziestego dziewiątego maja dwa tysiące siedemnastego roku, w kategorii produktów mięsnych.",
      "Stoi za nimi rodzinna firma z Kasinki Małej, założona w tysiąc dziewięćset dziewięćdziesiątym pierwszym roku przez Kazimierę i Andrzeja Skolarusów. Od dwutysięcznego prowadzą własną hodowlę trzody, później doszły własne zboża i własna pasza. Sprzedają w ponad pięćdziesięciu punktach.",
      "W gminie działają koła gospodyń — między innymi Paradne Gosposie z Kasinki Małej i koło z Olszówki. Gmina spotyka się co roku na Zagórzańskim Lecie i Zagórzańskich Dożynkach.",
      "Warto rozdzielić dwie rzeczy, bo nazwy są bliźniacze: kuchnia zagórzańska w wersji z bryjką, prażuchą i kwaśnicą jest opisana przy mieście Mszana Dolna, które jest odrębną gminą. Tutaj tożsamość kulinarną wyznaczają wędliny z Kasinki.",
      "Dla urządzenia najsensowniejsze jest tu wszystko, co przygotowuje mięso przed obróbką: mielenie farszu, siekanie cebuli i czosnku, pasty i smalec do chleba, marynaty. Do tego zupy, które sycą po dniu na dworze, i napoje do termosu z odmierzoną temperaturą. Czego nie zrobi, mówię wprost: nie uwędzi niczego i nie upiecze chleba — do jednego potrzebna jest wędzarnia, do drugiego piekarnik.",
    ],
  },

  districtsHeading: "Do których wsi gminy Mszana Dolna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewięciu, bez żadnej dopłaty za odległość. Gmina liczy ponad siedemnaście i pół tysiąca mieszkańców na stu siedemdziesięciu kilometrach kwadratowych, a lasy zajmują czterdzieści dwa procent jej powierzchni.",
    "Sołectw jest dokładnie dziewięć i pokrywają się ze wsiami: Glisne, Kasina Wielka, Kasinka Mała, Lubomierz, Łętowe, Łostówka, Mszana Górna, Olszówka i Raba Niżna. Przysiółków jest znacznie więcej, więc przy umawianiu przydaje się nazwa tego, w którym stoi dom.",
    "Urząd gminy mieści się przy ulicy Spadochroniarzy w Mszanie Dolnej — w mieście, które do gminy nie należy i jest odrębną gminą miejską.",
    "W Kasince Małej działa rodzinna wędzarnia z dwoma wpisami na ministerialną listę produktów tradycyjnych. W Kasinie Wielkiej, na stokach Śnieżnicy, działa Kasina Ski: kolej krzesełkowa o długości tysiąca stu metrów, przepustowość tysiąc dwieście osób na godzinę, górna stacja na dziewięciuset metrach nad poziomem morza. Szczyt Śnieżnicy jest rezerwatem od tysiąc dziewięćset sześćdziesiątego ósmego roku.",
    "Dojazd: trwa remont linii kolejowej numer sto cztery z Rabki Zaryte przez Mszanę Dolną do Fornali — ponad pięćset sześćdziesiąt siedem milionów złotych netto, sześćdziesiąt sześć obiektów inżynieryjnych, prędkość z trzydziestu do stu dwudziestu kilometrów na godzinę, zakończenie planowane na sierpień dwa tysiące dwudziestego siódmego roku.",
  ],
  districts: [
    "Kasinka Mała",
    "Kasina Wielka",
    "Mszana Górna",
    "Lubomierz",
    "Olszówka",
    "Łostówka",
    "Łętowe",
    "Raba Niżna",
    "Glisne",
  ],

  nearbyHeading: "Mszana Dolna, Dobra i Niedźwiedź też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina otacza miasto Mszana Dolna i sąsiaduje z Dobrą, Kamienicą, Niedźwiedziem, Szczawą, Rabką-Zdrojem, Lubniem, Pcimiem i Wiśniową. Dojeżdżam do wszystkich bez doliczania kosztu dojazdu.",
    "Uwaga na nazwy: miasto Mszana Dolna to odrębna gmina miejska, choć mieści urząd gminy wiejskiej. Szczawa od pierwszego stycznia dwa tysiące dwudziestego piątego roku również jest osobną gminą. A Kasina Wielka i Kasinka Mała to dwie różne wsie w tej samej gminie.",
  ],
  nearbyTowns: [
    "Mszana Dolna",
    "Dobra",
    "Kamienica",
    "Niedźwiedź",
    "Szczawa",
    "Rabka-Zdrój",
    "Lubień",
    "Pcim",
  ],

  about: blokOMnie("do gminy Mszana Dolna", "w powiecie limanowskim"),

  faq: [
    {
      question: "Mieszkam w Kasince Małej albo w Lubomierzu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dziewięć wsi gminy traktuję dokładnie tak samo. Przy umawianiu podaj pełną nazwę — Kasina Wielka i Kasinka Mała to dwie różne miejscowości — a jeśli mieszkasz na przysiółku, podaj też jego nazwę, bo przysiółków jest tu sporo.",
    },
    ...faqWspolne("w gminie Mszana Dolna"),
    {
      question: "Mam własne mięso i wędliny. Thermomix mi się do czegoś przyda?",
      answer:
        "Przyda się do tego, co dzieje się wokół mięsa, a nie do niego samego. Nie uwędzi niczego i nie zastąpi wędzarni — to trzeba powiedzieć wprost. Zmieli natomiast farsz na pierogi albo gołąbki w kilkanaście sekund, posieka cebulę i czosnek bez łez, zrobi smalec ze skwarkami, pasty i marynaty w tym samym naczyniu, w którym potem dusi się mięso. Najbardziej doceniają go tu jednak zupy: gęste, sycące, gotujące się bez pilnowania, gotowe na godzinę, na którą ktoś wraca z lasu albo ze stoku.",
    },
  ],

  geo: { lat: 49.68218, lng: 20.06633 },
};
