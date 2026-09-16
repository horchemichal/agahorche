import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * GRYFICE — powiat gryficki, woj. zachodniopomorskie,
 * nad Regą. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 15 293 mieszkańców (GUS 31.12.2024), 12,4 km²,
 * gęstość 1 233,3 os./km².
 * CAŁA GMINA: 22 638 osób, 261,3 km².
 * ⚠ WYSOKOŚĆ: 17–45 m n.p.m. — rozpiętość 28 m
 *   w granicach miasta. ⚠⚠ NIE UŻYWAM TEGO FAKTU
 *   JAKO KĄTA — „różnica poziomów / wysokość blatu"
 *   jest zajęta (Piotrków Kujawski). Podaję go wyłącznie
 *   w bloku faktograficznym.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,9167 / 15,1999 (polskawliczbach).
 * ⚠ en.wikipedia podaje 16 600 za rok 2017 — różnica
 *   wynika z DATY, nie z metody. NIE PISZĘ o zawyżaniu.
 *
 * ⚠ ODMIANA: GRYFICE TO PLURALE TANTUM (tylko liczba
 *   mnoga). D. GRYFIC, Ms. W GRYFICACH, przym. GRYFICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — „gryficzanin"
 *   pojawia się w słownikach ogólnych, ale NIE zostało
 *   potwierdzone w PWN. Piszę opisowo.
 * ⚠⚠⚠ HOMONIM KRYTYCZNY — TRZY PODOBNE NAZWY:
 *   GRYFICE (powiat gryficki, nad Regą) ≠ GRYFINO
 *   (TO SAMO WOJEWÓDZTWO, powiat gryfiński, nad Odrą —
 *   ma własną stronę w serwisie) ≠ GRYFÓW ŚLĄSKI
 *   (woj. dolnośląskie). Rozgraniczam w FAQ, bo pomyłka
 *   jest realna i zdarza się wyszukiwarkom.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1262 — PRAWA MIEJSKIE NA PRAWIE LUBECKIM
 *   od księcia Warcisława III.
 * — 1365 — miasto usunięte z Hanzy NA TRZY LATA
 *   w następstwie sporu o targi rybne.
 *   ⚠ UŻYWAM TEGO FAKTU TYLKO JAKO TŁA CHRONOLOGII,
 *   NIE JAKO KĄTA — „co się dzieje, gdy pominiesz krok"
 *   jest zajęte (Łabiszyn).
 * — ⚠⚠⚠ RDZEŃ KĄTA: 1464 — PRZYWILEJ BICIA WŁASNEJ
 *   MONETY od Ottona III. Miasto dostało prawo do
 *   ustalenia własnej, obowiązującej u siebie miary
 *   wartości.
 * — 1882 — kolej (linia Dąbie–Kołobrzeg).
 * — 1896 — kolej wąskotorowa przez Popiele do Niechorza.
 *   ⚠⚠ NIE ROZWIJAM WĄTKU WĄSKIEGO TORU — kąt „rozstaw
 *   600 mm / za duże naczynie" jest zajęty (Żnin).
 *   Wymieniam jednym zdaniem w bloku faktograficznym.
 * — 1905 — most żelbetowy łączący śródmieście z prawym
 *   brzegiem. ⚠ NIE ROBIĘ Z TEGO KĄTA — „wąskie przejście
 *   na drugą stronę / mała kuchnia i blat" zajęte
 *   (Zawichost).
 * — JARMARKI: „świętego Gawła" — 10 PAŹDZIERNIKA,
 *   targi miodowe — 30 WRZEŚNIA, targi drobiarskie
 *   (bez daty dziennej).
 * — PRZEMYSŁ XIX/XX W.: cukrownia, fabryka ceramiki,
 *   krochmalnia, fabryka marmolady, fabryka płatków
 *   ziemniaczanych, fabryka przetworów owocowych,
 *   cementownia, włókiennictwo.
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — „płatki ziemniaczane
 *   i jedzenie instant" zajęte (Głowno), „przetwory"
 *   zajęte (Nowy Sącz, Żywiec), „cukier i krystalizacja"
 *   zajęte (Chełmża, Koprzywnica). Wymieniam listę
 *   wyłącznie w bloku faktograficznym, bez rozwijania.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Gryfic i gminy Gryfice. Urząd zachęca
 *   mieszkańców do zgłaszania produktów, co sugeruje,
 *   że wpisu nie ma — ale DATY TEGO ARTYKUŁU NIE USTALONO,
 *   więc NIE TWIERDZĘ NICZEGO O STANIE OBECNYM
 *   I NIE WYMYŚLAM PRODUKTU.
 * ⚠ WYMIARÓW KOŚCIOŁA FARNEGO NIE USTALONO — nie podaję.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: WŁASNA MIARA — dlaczego szklanka z Waszej kuchni
 * jest pewniejsza niż gramatura z przepisu.
 * Kąt od przywileju z 1464 r.: miasto dostało prawo
 * bicia własnej monety, czyli ustalenia u siebie miary,
 * której wszyscy na miejscu mogli zaufać.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1464 r. Gryfice dostały przywilej bicia własnej
 *   monety od Ottona III,
 * — ŻE WARTOŚĆ MIARY BIERZE SIĘ Z JEJ POWTARZALNOŚCI,
 *   NIE Z DOKŁADNOŚCI — to jest rdzeń. Miara, która
 *   zawsze znaczy to samo, jest użyteczniejsza od miary
 *   dokładniejszej, ale używanej raz,
 * — ⚠⚠ ŻE „SZKLANKA MĄKI" NIE JEST JEDNĄ WIELKOŚCIĄ:
 *   ta sama szklanka nabrana inaczej daje inny wynik,
 *   a szklanki w dwóch domach nie są tym samym naczyniem.
 *   To NIE jest zarzut wobec przepisów babcinych —
 *   one były pisane dla JEDNEJ konkretnej kuchni
 *   i w niej działały bez zarzutu,
 * — ⚠⚠ ŻE ROZWIĄZANIE JEST JEDNOZDANIOWE: wybrać
 *   JEDNO naczynie i JEDNĄ łyżkę, zapisać przy przepisie,
 *   o które chodzi, i trzymać się tego. Wtedy przepis
 *   zaczyna być powtarzalny, nawet jeśli nikt nie wie,
 *   ile to jest w gramach,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: są rzeczy, przy których
 *   własna miara nie wystarczy i lepiej to wiedzieć.
 *   Wypieki na drożdżach i ciasta są na to najbardziej
 *   czułe, bo tam liczy się stosunek suchego do mokrego.
 *   Zupa, sos i gulasz wybaczą wszystko,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma wbudowaną wagę,
 *   więc problem miary po prostu znika — ale mówię też,
 *   że to działa w jedną stronę. Przepis rodzinny zapisany
 *   w szklankach trzeba raz przeważyć, żeby przenieść go
 *   do urządzenia. To robota na piętnaście minut,
 *   jednorazowa, i warto ją zrobić przy tych kilku
 *   przepisach, na których naprawdę zależy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZEPISÓW W CUDZYCH MIARACH — kąt zajęty
 *   (Zgorzelec). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o JEDNOSTKI Z INNEGO KRAJU (filiżanki, uncje, stopnie
 *   Fahrenheita) i o przeliczanie ich na nasze; TUTAJ
 *   o USTALENIE WŁASNEJ, DOMOWEJ MIARY i o to, że jej
 *   wartość bierze się z powtarzalności. Ani jednego
 *   zdania o zagranicznych jednostkach ani o przeliczaniu
 *   między systemami. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO RODZAJÓW MĄKI I OZNACZEŃ NA OPAKOWANIU —
 *   kąty zajęte (Korsze, Chodecz). Piszę o ILOŚCI mąki,
 *   nigdy o jej TYPIE.
 * — ⚠⚠ ZERO ZAMIENNIKÓW SKŁADNIKÓW — kąt zajęty
 *   (Kwidzyn).
 * — ⚠⚠ ZERO PRZEPISÓW PRZYWIEZIONYCH Z LUDŹMI — kąt
 *   zajęty (Żelów).
 * — ⚠ ZERO WAGI JAKO TEMATU SAMEGO W SOBIE — wspominam
 *   ją raz, przy sprzęcie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH KONKRETNYCH PROPORCJI I PRZEPISÓW —
 *   ⚠⚠ przy kącie o miarach to najkrótsza droga do wpadki.
 *   NIE PODAJĘ ANI JEDNEJ LICZBY GRAMÓW.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZNISZCZEŃ Z MARCA 1945 R. (ok. 40 % zabudowy)
 *   I ZERO JAKIEGOKOLWIEK WĄTKU WOJENNEGO.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO PRZESIEDLEŃ I WYMIANY LUDNOŚCI.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI (−9,8 % w latach
 *   2002–2024) I JEGO PRZYCZYN.
 * — ⚠ ZERO ŚREDNIEGO WIEKU MIESZKAŃCA — prowadzi prosto
 *   do wątku starzenia się miasta.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE UŻYWAM nazwy mieszkańca — niepotwierdzona w PWN.
 * — NIE PRZYPISUJĘ Gryficom żadnego produktu z Listy
 *   Produktów Tradycyjnych ani nie twierdzę, że go nie ma.
 * — NIE PODAJĘ wymiarów kościoła farnego.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE PODAJĘ ANI JEDNEJ GRAMATURY.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Gryfice leżą nad Regą w powiecie gryfickim, są miastem
 *   w gminie miejsko-wiejskiej i liczą 15 293 mieszkańców
 *   (GUS, 31.12.2024) na 12,4 km², przy rozpiętości
 *   wysokości od 17 do 45 m n.p.m.; cała gmina ma
 *   22 638 osób na 261,3 km²,
 * — prawa miejskie na prawie lubeckim nadał miastu
 *   w 1262 r. książę Warcisław III,
 * — w 1365 r. Gryfice zostały na trzy lata usunięte
 *   z Hanzy w następstwie sporu o targi rybne,
 * — w 1464 r. Otton III nadał miastu przywilej bicia
 *   własnej monety,
 * — jarmark świętego Gawła wypadał 10 października,
 *   a targi miodowe 30 września; odbywały się też targi
 *   drobiarskie,
 * — kolej dotarła tu w 1882 r. (linia Dąbie–Kołobrzeg),
 *   w 1896 r. powstała linia wąskotorowa przez Popiele
 *   do Niechorza, a w 1905 r. most żelbetowy połączył
 *   śródmieście z prawym brzegiem,
 * — na przełomie XIX i XX wieku działały w mieście
 *   cukrownia, krochmalnia, cementownia, fabryka ceramiki,
 *   fabryka marmolady, fabryka płatków ziemniaczanych,
 *   fabryka przetworów owocowych i zakłady włókiennicze.
 */
export const GRYFICE: CityContent = {
  slug: "gryfice",
  h1: "Thermomix Gryfice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gryfice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Gryficach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gryfice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gryficach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gryfic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Gryfice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miara, która zawsze znaczy to samo, jest warta więcej niż miara dokładniejsza.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gryficach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "wlasna-miara",
      heading: "Przywilej z 1464 roku, czyli własna miara",
      paragraphs: [
        "W 1464 roku Otton III nadał Gryficom przywilej bicia własnej monety. Miasto dostało prawo do ustalenia u siebie miary wartości — takiej, której wszyscy na miejscu mogli zaufać, bo wszyscy używali tej samej.",
        "I to jest właśnie ta rzecz, która w miarach naprawdę się liczy. Nie dokładność, tylko powtarzalność. Miara, która zawsze znaczy to samo, jest w praktyce warta więcej niż miara dokładniejsza, ale używana raz na rok.",
        "W kuchni wygląda to tak: „szklanka mąki” nie jest jedną wielkością i nigdy nią nie była.",
        "Ta sama szklanka nabrana czubato i nabrana równo to dwie różne ilości. Mąka przesypana i mąka ubita to znowu co innego. A szklanka z Waszej szafki i szklanka z szafki obok to po prostu dwa różne naczynia, choć obie nazywają się tak samo.",
        "To nie jest zarzut wobec przepisów pisanych ręcznie w zeszycie. Wręcz przeciwnie — one działały bez zarzutu, bo były pisane dla jednej konkretnej kuchni, w której stała jedna konkretna szklanka i leżała jedna konkretna łyżka. Autorka takiego przepisu miała swoją monetę i biła ją u siebie. Problem zaczyna się dopiero wtedy, gdy przepis wychodzi z tej kuchni.",
        "Rozwiązanie mieści się w jednym zdaniu: wybrać jedno naczynie i jedną łyżkę, zapisać przy przepisie, o które dokładnie chodzi, i trzymać się tego. Wtedy przepis staje się powtarzalny nawet wtedy, gdy nikt w domu nie wie, ile to jest w gramach — bo nie musi wiedzieć.",
        "Uczciwie o drugiej stronie, bo sama ta zasada byłaby za ładna. Są rzeczy, przy których własna miara nie wystarczy i lepiej to wiedzieć z góry niż odkrywać przy trzeciej nieudanej próbie. Ciasta i wypieki na drożdżach są na to najbardziej czułe, bo tam decyduje stosunek tego, co suche, do tego, co mokre, a nie ogólne wrażenie. Zupa, sos i gulasz wybaczą praktycznie wszystko.",
        "Na koniec o sprzęcie, bo tu akurat rzecz jest prosta. Urządzenie ma wbudowaną wagę, więc cały problem miary po prostu znika — ważysz w tym samym naczyniu, w którym gotujesz, i nie ma czego przekładać.",
        "Ale działa to w jedną stronę i wolę powiedzieć, jak jest. Przepis rodzinny zapisany w szklankach trzeba raz przeważyć, żeby przenieść go do urządzenia. To jedna robota na kilkanaście minut, wykonywana raz w życiu, i naprawdę warto ją zrobić przy tych kilku przepisach, na których zależy Wam najbardziej — a resztę spokojnie zostawić w zeszycie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gryficach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu przepis zapisany w szklankach, o który się boicie — weźcie go na spotkanie. Przeważymy go razem i zostanie Wam na zawsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gryficach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gryfickiej rodziny",
      paragraphs: [
        "Gryfice leżą nad Regą w powiecie gryfickim i są miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad piętnaście tysięcy mieszkańców na dwunastu i czterech dziesiątych kilometra kwadratowego, przy rozpiętości wysokości od siedemnastu do czterdziestu pięciu metrów nad poziomem morza, a cała gmina — ponad dwadzieścia dwa i pół tysiąca osób na dwustu sześćdziesięciu jeden kilometrach kwadratowych. Prawa miejskie na prawie lubeckim nadał miastu w 1262 roku książę Warcisław III. W 1365 roku Gryfice zostały na trzy lata usunięte z Hanzy w następstwie sporu o targi rybne, a w 1464 Otton III nadał im przywilej bicia własnej monety. Jarmark świętego Gawła wypadał dziesiątego października, targi miodowe trzydziestego września, odbywały się też targi drobiarskie. Kolej dotarła tu w 1882 roku linią z Dąbia do Kołobrzegu, w 1896 powstała linia wąskotorowa przez Popiele do Niechorza, a w 1905 most żelbetowy połączył śródmieście z prawym brzegiem. Na przełomie dziewiętnastego i dwudziestego wieku działały w mieście cukrownia, krochmalnia, cementownia, fabryka ceramiki, fabryka marmolady, fabryka płatków ziemniaczanych, fabryka przetworów owocowych i zakłady włókiennicze — jak na miasto tej wielkości baza wyjątkowo różnorodna.",
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

  districtsHeading: "Do których części Gryfic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Regi — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Gryfice też przyjadę",
  nearbyParagraphs: [
    "Nowogard, Kołobrzeg, Goleniów i Szczecin mieszczą się w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowogard", "Kołobrzeg", "Goleniów", "Szczecin"],

  about: blokOMnie("do Gryfic", "w Gryficach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gryfic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłka zdarza się nawet wyszukiwarkom: Gryfice to miasto nad Regą w powiecie gryfickim — a nie Gryfino nad Odrą w powiecie gryfińskim ani Gryfów Śląski w dolnośląskiem.",
    },
    ...faqWspolne("w Gryficach"),
    {
      question: "Czy przepis podany w szklankach da się w ogóle powtórzyć?",
      answer:
        "Da się, pod jednym warunkiem: że chodzi zawsze o tę samą szklankę i tę samą łyżkę. Wartość miary bierze się z powtarzalności, nie z dokładności — miara, która zawsze znaczy to samo, jest w praktyce lepsza od dokładniejszej, ale używanej raz. Wystarczy wybrać jedno naczynie, zapisać przy przepisie, o które chodzi, i się tego trzymać.",
    },
    {
      question: "Czy przy Thermomixie trzeba przeliczać stare przepisy?",
      answer:
        "Urządzenie ma wbudowaną wagę, więc przy nowych przepisach problem miary nie istnieje — ważysz w tym samym naczyniu, w którym gotujesz. Przepis rodzinny zapisany w szklankach trzeba natomiast raz przeważyć, żeby go przenieść. To kilkanaście minut, jednorazowo, i warto to zrobić przy tych kilku przepisach, na których naprawdę Wam zależy.",
    },
  ],

  geo: { lat: 53.9167, lng: 15.1999 },
};
