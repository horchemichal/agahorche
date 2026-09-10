import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * NOWA SARZYNA — miasto w powiecie leżajskim, 5 288 mieszkańców
 * (31.12.2024, GUS). Miasto ZBUDOWANE PRZY ZAKŁADZIE: budowa
 * zakładów chemicznych ruszyła w 1937 r. w ramach Centralnego
 * Okręgu Przemysłowego, osiedle dla załogi powstawało od 1950 r.,
 * szkoła zawodowa dla potrzeb fabryki od 1954 r. Prawa miejskie
 * 1 STYCZNIA 1973 r. — przez połączenie osiedli z wsią Sarzyna
 * i Rudą Łańcucką; miasto liczyło wtedy ok. 3000 mieszkańców.
 *
 * KĄT: ziemniaki — najzwyklejszy składnik, w mieście, które nie ma
 * własnej dawnej kuchni. Nowa Sarzyna powstała w XX wieku dla ludzi
 * ściągniętych do pracy z różnych stron. Nie ma tu regionalnego
 * dania „stąd" i to nie jest brak — to jest fakt, z którego wynika
 * kuchnia najzwyklejsza z możliwych. Ziemniak jest jej środkiem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że purée z tego urządzenia jest wyraźnie inne niż tłuczone
 *   i że NIE każdemu to odpowiada — komu, mówię wprost,
 * — że urządzenie ugotuje i zmiksuje, ale NIE ZRUMIENI: pieczonych,
 *   chrupiących ziemniaków z niego nie będzie,
 * — że placki i kluski to obróbka, w której maszyna pomaga
 *   w JEDNYM kroku (rozdrobnienie), a reszta zostaje ręczna,
 * — i uczciwie: przy jednej porcji zwykłych ziemniaków z wody
 *   garnek jest prostszy i tak powiem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o skrobi, ani o „lekkości".
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ZIEMNIAKÓW (kiełkowanie,
 *   zazielenienie) — to dziedzina bezpieczeństwa żywności.
 * — ŻADNEGO PISANIA O ŚRODKACH OCHRONY ROŚLIN, mimo że produkuje
 *   je największy zakład w mieście. Zestawianie tego z jedzeniem
 *   na stronie sprzedażowej byłoby tanim chwytem w jedną albo
 *   w drugą stronę. Zakład wymieniam wyłącznie jako pracodawcę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „To jest miasto, w którym
 * prawie nikt nie jest stąd od pokoleń" (inne miasto) to kąt
 * SPOŁECZNY. Tutaj z tej samej cechy wyprowadzam kąt SKŁADNIKOWY
 * — i cały tekst jest o ziemniaku, nie o tożsamości. „Mąka
 * i mielenie", „jabłko", „odmiany", „owoce miękkie", „masło"
 * i „mleko" to inne surowce. „Gotowanie na parze" (Józefów)
 * dotyczy metody.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — ROZSTRZELANIE 5 mieszkańców w 1943 r. za nieobecność w pracy
 *   i spalenie żywcem 4 osób w 1944 r. Fakty sprawdzone. NIE UŻYWAM
 *   ICH — to nie są ozdobniki do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE UŻYWAM NAZWY „Organika-Sarzyna" jako aktualnej. Zakład
 *   działa, ale od rebrandingu nazywa się QEMETICA AGRICULTURAL
 *   SOLUTIONS POLAND S.A. Stara nazwa krąży w nieaktualizowanych
 *   rejestrach. W tekście piszę opisowo — „zakład chemiczny" —
 *   żeby nie utrwalać nieaktualnej nazwy ani nie reklamować firmy,
 * — NIE PODAJĘ WŁAŚCICIELA ELEKTROCIEPŁOWNI. Trwa zmiana:
 *   Polenergia sprzedaje ją szwajcarskiej grupie Axpo, wniosek
 *   do UOKiK złożono w grudniu 2025 r., FINALIZACJI NIE
 *   POTWIERDZONO na wrzesień 2026. Piszę tylko, że elektrociepłownia
 *   gazowa działa,
 * — NIE PISZĘ „ok. 6000 mieszkańców". To liczba sprzed kilku lat.
 *   GUS na 31.12.2024: 5 288,
 * — NIE PODAJĘ liczby mieszkańców GMINY. Dostępne dane pochodzą
 *   z 2006 r. i są bezużyteczne,
 * — NIE PISZĘ, że miasto „zaczyna się od fabryki" bez zastrzeżenia.
 *   Samo miasto owszem, ale wieś SARZYNA ma metrykę z 1390 r.
 *   (lokacja na prawie niemieckim), pierwszy kościół 1595 r.,
 *   parafia od 1598 r. To rozróżnienie jest w tekście,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla miasta i powiatu leżajskiego nie znaleziono wpisu,
 * — NIE wymyślam osiedli. Brak wykazu jednostek pomocniczych
 *   samego miasta. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — budowa zakładów chemicznych od 1937 r. w ramach COP,
 * — osiedle mieszkaniowe dla załogi budowane od 1950 r., szkoła
 *   zawodowa dla potrzeb fabryki od 1954 r.,
 * — prawa miejskie 1 stycznia 1973 r., z połączenia osiedli z wsią
 *   Sarzyna i Rudą Łańcucką, ok. 3000 mieszkańców w chwili nadania,
 * — wieś Sarzyna lokowana w 1390 r. na prawie niemieckim,
 * — w mieście działa zakład chemiczny i elektrociepłownia gazowa,
 * — 5 288 mieszkańców (31.12.2024).
 */
export const NOWA_SARZYNA: CityContent = {
  slug: "nowa-sarzyna",
  h1: "Thermomix Nowa Sarzyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowa Sarzyna — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowej Sarzynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowa Sarzyna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowej Sarzynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowej Sarzyny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Nowa Sarzyna i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najzwyklejszy składnik, jaki jest. I wcale nie najprostszy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowej Sarzynie – jak wygląda prezentacja?",
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
      id: "ziemniaki",
      heading: "Miasto, które powstało przy zakładzie — czyli o ziemniakach",
      paragraphs: [
        "Nowa Sarzyna jest młoda w sposób, który się rzadko zdarza. Budowa zakładów chemicznych ruszyła tu w 1937 roku, w ramach Centralnego Okręgu Przemysłowego. Osiedle dla załogi budowano od 1950 roku, szkołę zawodową dla potrzeb fabryki otwarto w 1954. Prawa miejskie miasto dostało pierwszego stycznia 1973 roku — przez połączenie osiedli robotniczych z wsią Sarzyna i Rudą Łańcucką. Miało wtedy około trzech tysięcy mieszkańców.",
        "Sama wieś Sarzyna jest przy tym stara: lokowana w 1390 roku, pierwszy kościół w 1595. Ale miasto — to konkretne miasto — powstało dla ludzi, którzy przyjechali tu do pracy z różnych stron kraju.",
        "Z tego wynika rzecz, której nie da się powiedzieć o Zamościu ani o Kazimierzu: tutaj nie ma jednego dania „stąd”. Nie ma miejscowej potrawy, którą robiły babcie od pokoleń, bo babcie przyjechały z różnych okolic i każda przywiozła swoje. Kuchnia jest tu najzwyklejsza z możliwych — i dlatego napiszę o najzwyklejszym składniku, jaki w Polsce istnieje.",
        "Ziemniak. Wbrew pozorom niełatwy, bo robi się z niego kilka zupełnie różnych rzeczy i urządzenie zachowuje się przy każdej inaczej.",
        "Purée wychodzi bardzo dobrze — ale jest wyraźnie inne niż tłuczone tłuczkiem. Gładsze, jednolite, bez grudek. Część osób uważa to za lepsze, a część mówi wprost, że wolała tamto. Nie ma tu dobrej odpowiedzi i nie będę udawać, że jest: jeśli w Waszym domu purée ma mieć grudki, bo tak było zawsze, to maszyna zrobi coś innego, nie coś lepszego. Wolę, żebyście to wiedzieli przed zakupem, a nie po pierwszej niedzieli.",
        "Ziemniaki z wody: ugotuje, oczywiście. Ale przy jednej porcji na obiad zwykły garnek jest prostszy i nie zamierzam wmawiać niczego innego. Sens pojawia się dopiero wtedy, gdy w tym samym urządzeniu ma równocześnie powstać sos albo coś na parze.",
        "Placki i kluski: tu maszyna pomaga w jednym kroku — rozdrabnia. Reszta, czyli odciskanie, wyrabianie i całe smażenie albo lepienie, zostaje ręczna. To jest zauważalna pomoc, ale nie jest to „zrobi za was placki”.",
        "I twarda granica, ta sama, którą piszę wszędzie: pieczonych, chrupiących ziemniaków z tego nie będzie. Urządzenie gotuje i gotuje na parze, a nie rumieni. Skórki nie zrobi, bo fizycznie nie może.",
        "Czego nie doradzę: nic o przechowywaniu ziemniaków — kiełkowanie, zazielenienie, co można, a czego nie. To jest dziedzina bezpieczeństwa żywności i pytanie do rzetelnego źródła, nie do przedstawicielki handlowej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowej Sarzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli purée jest u Was daniem, o które ktoś się w domu upiera — zróbmy je na prezentacji. Lepiej sprawdzić od razu, czy ta gładsza wersja Wam odpowiada.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowej Sarzynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sarzyńskiej rodziny",
      paragraphs: [
        "Nowa Sarzyna liczy nieco ponad pięć tysięcy dwustu mieszkańców — mniej, niż podaje większość krążących w sieci liczb. Miasto ma pięćdziesiąt trzy lata i wciąż pracuje tu zakład chemiczny oraz elektrociepłownia gazowa.",
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

  districtsHeading: "Do których części Nowej Sarzyny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Sarzyny, Jelnej, Łętowni, Łukowej, Woli Żarczyckiej i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Nową Sarzynę też przyjadę",
  nearbyParagraphs: [
    "Leżajsk, Łańcut, Nisko, Rudnik nad Sanem i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Leżajsk", "Łańcut", "Nisko", "Rudnik nad Sanem", "Stalowa Wola", "Rzeszów"],

  about: blokOMnie("do Nowej Sarzyny", "w Nowej Sarzynie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowej Sarzyny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowej Sarzynie"),
    {
      question: "Jakie purée wychodzi z Thermomixa?",
      answer:
        "Bardzo gładkie i jednolite, bez grudek — czyli wyraźnie inne niż tłuczone tłuczkiem. Części osób to odpowiada bardziej, części mniej i nie ma tu dobrej odpowiedzi. Jeśli w Waszym domu purée ma mieć strukturę, bo tak było zawsze, urządzenie zrobi coś innego, nie coś lepszego. Warto to sprawdzić na prezentacji, zanim podejmiecie decyzję.",
    },
    {
      question: "Zrobię w tym pieczone ziemniaki?",
      answer:
        "Nie. Urządzenie gotuje i gotuje na parze, ale nie rumieni — chrupiącej skórki fizycznie nie zrobi. Placki i kluski to co innego: tu pomaga w rozdrabnianiu, ale odciskanie, wyrabianie i smażenie zostają ręczne.",
    },
  ],

  geo: { lat: 50.3283, lng: 22.3231 },
};
