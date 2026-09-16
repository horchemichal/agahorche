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
 * BORNE SULINOWO — powiat szczecinecki,
 * woj. zachodniopomorskie, Pojezierze Drawskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 822 mieszkańców (GUS 31.12.2024), 18,2 km²,
 * gęstość 265,7 os./km².
 * CAŁA GMINA: 9 174 osoby, 484,5 km², 44 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,5764 / 16,5341.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 * ⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA PODAJĄ 15 WRZEŚNIA 1993
 *   (strona gminy) ALBO 2 PAŹDZIERNIKA 1993.
 *   NIE WYBIERAM DATY DZIENNEJ — piszę „w 1993 roku".
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZE OGRANICZENIE TEJ STRONY:
 *   CAŁA ROZPOZNAWALNA HISTORIA TEGO MIASTA JEST WOJSKOWA.
 *   Do 1993 r. był tu zamknięty garnizon, miasta nie było
 *   na mapach cywilnych. Wątek wojskowy jest na tej
 *   stronie ZAKAZANY, a to znaczy, że materiału
 *   historycznego praktycznie NIE MA.
 *   DLATEGO STRONA OPIERA SIĘ NA GEOGRAFII, NAZWIE
 *   I PRODUKCIE REGIONALNYM — i to jest decyzja
 *   świadoma, nie brak researchu.
 *   ⚠⚠ NIE WSPOMINAM: poligonu, garnizonu, wojsk
 *   polskich ani radzieckich, „miasta niewidocznego
 *   na mapach", „miasta widma", transportu z 1992 r.,
 *   liczby 25 tysięcy mieszkańców z okresu garnizonu,
 *   ani powodu, dla którego pierwsza szkoła powstała
 *   dopiero po 1993 r.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ODMIANA: ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   D. BORNEGO SULINOWA, Ms. W BORNEM SULINOWIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE USTALONO — piszę opisowo
 *   „mieszkańcy Bornego Sulinowa".
 * ⚠ HOMONIMU BRAK.
 *
 * FAKTY CYWILNE — UŻYTE:
 * — ⚠⚠⚠ RDZEŃ KĄTA: MIASTO POWSTAŁO NA TERENIE DAWNEJ
 *   WSI O NAZWIE OZNACZAJĄCEJ LIPĘ, a dzisiejszy HERB
 *   MIASTA TO ZIELONA LIPA NA ZŁOTYM TLE.
 *   Nazwa miasta jest inna, ale znak został po tym,
 *   co było wcześniej.
 *   ⚠⚠ DAWNEJ NAZWY NIE PODAJĘ — jest niemiecka,
 *   a na stronach tego serwisu nazw niemieckich
 *   nie używam. Piszę „dawna wieś, której nazwa
 *   oznaczała lipę". TWARDA GRANICA.
 * — 1993 — NADANIE PRAW MIEJSKICH. Jedno z najmłodszych
 *   miast w Polsce. ⚠⚠ BEZ PODAWANIA PRZYCZYNY.
 * — JEZIORO PILE: powierzchnia około 1 002 HA,
 *   głębokość maksymalna 43,9 M, DŁUGOŚĆ PONAD 9 KM,
 *   szerokość do 3 KM, LINIA BRZEGOWA 30 450 M,
 *   wyspy o łącznej powierzchni 1,1 HA.
 *   ⚠ GŁĘBOKOŚCI ŚREDNIEJ (11,7 m) NIE PODAJĘ — kąt
 *   „maksymalna kontra średnia" zajęty (Więcbork).
 * — JEZIORA W GMINIE: łącznie 3 493 HA, czyli 7,5 %
 *   powierzchni gminy; 57 ZBIORNIKÓW POWYŻEJ HEKTARA.
 *
 * ⚠⚠ MIÓD DRAHIMSKI: wpis na Listę Produktów Tradycyjnych
 *   1 czerwca 2006 r.; karta wymienia CZTERY GMINY,
 *   w tym Borne Sulinowo. NIE JEST ALKOHOLEM.
 *   ⚠⚠⚠ ALE NIE UŻYWAM GO NA TEJ STRONIE:
 *   ten sam produkt jest rdzeniem kąta Czaplinka
 *   („dwieście rąk, jedna nazwa") w tej samej fali.
 *   Powtórzenie byłoby kolizją. TWARDA GRANICA.
 *   ⚠ „Miody Pojezierza Drawskiego" — przypisania
 *   do gminy NIE POTWIERDZONO. Nie używam.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: NAZWA, KTÓRA NIE MÓWI, CO JEST W ŚRODKU.
 * Kąt od herbu: miasto stoi na terenie dawnej wsi, której
 * nazwa oznaczała lipę, i lipa została w herbie — choć
 * dzisiejsza nazwa miasta nie ma z nią nic wspólnego.
 * Znak przetrwał, znaczenie się rozeszło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto powstało na terenie dawnej wsi, której
 *   nazwa oznaczała lipę, i że zielona lipa na złotym tle
 *   jest do dziś w herbie, mimo że nazwa miasta jest inna,
 * — ŻE NAZWA I ZAWARTOŚĆ TO DWIE RÓŻNE RZECZY,
 *   KTÓRE ROZCHODZĄ SIĘ Z CZASEM — to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI DOTYCZY TO NAZW DAŃ: bardzo wiele
 *   z nich nie mówi, co jest w środku. Jedne opisują
 *   kształt, inne miejsce, inne czyjeś nazwisko, a jeszcze
 *   inne nie opisują już niczego, bo składnik, od którego
 *   pochodziły, dawno z przepisu wypadł.
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRZYKŁADU KONKRETNEGO
 *   DANIA. Każdy przykład byłby albo etymologią, której
 *   nie zweryfikowałam, albo instrukcją kulinarną.
 *   TWARDA GRANICA BEZWZGLĘDNA,
 * — ⚠⚠ ŻE Z TEGO WYNIKA COŚ PRAKTYCZNEGO PRZY UMAWIANIU
 *   SIĘ W RODZINIE: nazwa dania nie wystarcza jako
 *   ustalenie. „Zrobię to, co zawsze" znaczy co innego
 *   dla każdej osoby przy stole,
 * — ⚠⚠ ŻE TO SAMO DOTYCZY MNIE NA PREZENTACJI: kiedy
 *   ktoś mówi przez telefon nazwę dania, dopytuję
 *   o zawartość, bo inaczej przywiozę składniki
 *   na coś innego,
 * — ⚠ UCZCIWIE, DRUGA STRONA: NAZWY NIE TRZEBA
 *   PROSTOWAĆ. Danie może się nazywać jak chce — chodzi
 *   tylko o to, żeby przy ustalaniu nie polegać wyłącznie
 *   na nazwie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: nazwy funkcji urządzenia mają
 *   ten sam problem i mówię to wprost przed zakupem.
 *   Część brzmi jak nazwa dania, a opisuje czynność.
 *   Dlatego na prezentacji pokazuję, CO SIĘ DZIEJE,
 *   a nie jak to się nazywa w menu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO OZNACZEŃ I KLASYFIKACJI NA OPAKOWANIU —
 *   kąt zajęty (Chodecz). Tam chodzi o URZĘDOWE
 *   OZNACZENIA PRODUKTÓW (typ mąki, klasa warzyw);
 *   TUTAJ o POTOCZNE NAZWY DAŃ. Ani jednego zdania
 *   o etykietach i klasyfikacjach.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO „DOMOWE KONTRA PRZEMYSŁOWE" — kąt zajęty
 *   (Mrągowo).
 * — ⚠⚠ ZERO ODTWARZANIA I ZAPISYWANIA PRZEPISÓW — obszar
 *   zajęty pięciokrotnie (Golub-Dobrzyń, Kamień Krajeński,
 *   Puck, Suraż, Radziejów).
 * — ⚠⚠ ZERO „U KAŻDEGO INACZEJ" — kąt zajęty (Czaplinek,
 *   ta sama fala). Tam chodzi o RÓŻNICE W WYKONANIU
 *   tego samego dania; TUTAJ o to, że SAMA NAZWA
 *   nie niesie informacji.
 * — ⚠ ZERO MIODU — kąt zajęty (Kluczbork), a produkt
 *   regionalny wykorzystany przy Czaplinku.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO KONKRETNEGO DANIA Z NAZWY.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO CAŁEGO WĄTKU WOJSKOWEGO — patrz wyżej.
 *   TO JEST NAJWAŻNIEJSZA GRANICA NA TEJ STRONIE.
 * — ⚠⚠ ZERO NIEMIECKIEJ NAZWY DAWNEJ WSI.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠ ZERO POWODU, DLA KTÓREGO MIASTO POWSTAŁO
 *   DOPIERO W 1993 R.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE PODAJĘ wysokości n.p.m. ani głębokości średniej
 *   jeziora Pile.
 * — NIE PODAJĘ dawnej nazwy wsi.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PRZYPISUJĘ miastu produktu z Listy.
 * — NIE PODAJĘ ŻADNEGO DANIA Z NAZWY.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Borne Sulinowo leży na Pojezierzu Drawskim,
 *   w powiecie szczecineckim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 4 822 mieszkańców
 *   (GUS, 31.12.2024) na 18,2 km², a cała gmina
 *   9 174 osoby na 484,5 km² w 44 miejscowościach,
 * — prawa miejskie miasto otrzymało w 1993 r., co czyni
 *   je jednym z najmłodszych miast w Polsce,
 * — powstało na terenie dawnej wsi, której nazwa oznaczała
 *   lipę, i zielona lipa na złotym tle jest do dziś
 *   w herbie miasta,
 * — jezioro Pile ma około 1 002 ha powierzchni, 43,9 m
 *   głębokości maksymalnej, ponad 9 km długości, do 3 km
 *   szerokości i 30 450 m linii brzegowej; wyspy na nim
 *   zajmują łącznie 1,1 ha,
 * — jeziora w gminie zajmują łącznie 3 493 ha, czyli
 *   siedem i pół procent jej powierzchni, a zbiorników
 *   większych niż hektar jest pięćdziesiąt siedem.
 */
export const BORNE_SULINOWO: CityContent = {
  slug: "borne-sulinowo",
  h1: "Thermomix Borne Sulinowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Borne Sulinowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bornem Sulinowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Borne Sulinowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bornem Sulinowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bornego Sulinowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Borne Sulinowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nazwa dania rzadko mówi, co jest w środku. „To, co zawsze” znaczy co innego dla każdego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bornem Sulinowie – jak wygląda prezentacja?",
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
      id: "nazwa-a-zawartosc",
      heading: "Lipa w herbie miasta, które nazywa się inaczej",
      paragraphs: [
        "Borne Sulinowo dostało prawa miejskie w 1993 roku i jest przez to jednym z najmłodszych miast w Polsce. Powstało na terenie dawnej wsi, której nazwa oznaczała po prostu lipę.",
        "Nazwa miasta jest dziś zupełnie inna. Ale w herbie stoi zielona lipa na złotym tle — znak został po tym, co było wcześniej, choć słowo, od którego pochodził, zniknęło.",
        "To jest dokładnie ta sytuacja, która w kuchni zdarza się bez przerwy i prawie nigdy nie zostaje nazwana.",
        "Nazwy dań w większości nie mówią, co jest w środku. Jedne opisują kształt. Inne miejsce. Jeszcze inne czyjeś nazwisko. A część nie opisuje już niczego, bo składnik, od którego nazwa pochodziła, dawno z przepisu wypadł — i nikomu to nie przeszkadza, bo wszyscy wiedzą, o co chodzi.",
        "Tylko że „wszyscy wiedzą” jest prawdziwe wyłącznie w jednym domu.",
        "Nie będę podawać przykładów i robię to świadomie — każdy przykład byłby albo etymologią, której nie sprawdziłam, albo instrukcją kulinarną, a od żadnej z tych rzeczy nie jestem. Rzecz jest w samym mechanizmie.",
        "A z niego wynika coś zaskakująco praktycznego, i to przy zwykłym ustalaniu w rodzinie, kto co robi. Nazwa dania nie wystarcza jako ustalenie. „Zrobię to, co zawsze” znaczy co innego dla każdej osoby przy stole i połowa domowych rozczarowań przy obiedzie bierze się właśnie stąd — nie z wykonania, tylko z tego, że nikt nie dopytał.",
        "To samo dotyczy mnie i mówię to bez ogródek. Kiedy ktoś podaje mi przez telefon nazwę dania, którym chce się pochwalić albo które chce razem zrobić, zawsze dopytuję o zawartość. Nie dlatego, że nie wiem, co to za danie — tylko dlatego, że wiem, jak bardzo to zależy od domu, i wolę nie przywieźć składników na coś innego.",
        "Uczciwie o drugiej stronie: nazw nie trzeba prostować i nie ma w tym nic do naprawiania. Danie może się nazywać, jak chce, a to, że w danym domu znaczy coś swojego, jest raczej zaletą. Chodzi tylko o to, żeby przy ustalaniu z kimś nie polegać wyłącznie na samej nazwie.",
        "Na koniec o urządzeniu, bo ma dokładnie ten sam problem. Część nazw jego funkcji brzmi jak nazwa dania, a opisuje czynność — i odwrotnie. Dlatego na prezentacji pokazuję, co się faktycznie dzieje w naczyniu, a nie jak to się nazywa w spisie. Po godzinie to widać, a z samej nazwy nie wynika nic.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bornem Sulinowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie u siebie danie, które w Waszym domu nazywa się po swojemu — powiedzcie po prostu, co w nim jest. Nazwa mi nic nie powie, a zawartość powie wszystko.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bornem Sulinowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Bornego Sulinowa",
      paragraphs: [
        "Borne Sulinowo leży na Pojezierzu Drawskim, w powiecie szczecineckim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko pięć tysięcy mieszkańców na osiemnastu i dwóch dziesiątych kilometra kwadratowego, a cała gmina ponad dziewięć tysięcy osób na czterystu osiemdziesięciu czterech kilometrach kwadratowych, w czterdziestu czterech miejscowościach. Prawa miejskie miasto otrzymało w 1993 roku, co czyni je jednym z najmłodszych miast w Polsce. Powstało na terenie dawnej wsi, której nazwa oznaczała lipę — i zielona lipa na złotym tle jest do dziś w herbie miasta. Okolica jest wyjątkowo zasobna w wodę: jeziora zajmują w gminie trzy tysiące czterysta dziewięćdziesiąt trzy hektary, czyli siedem i pół procent jej powierzchni, a zbiorników większych niż hektar jest pięćdziesiąt siedem. Największe z nich, jezioro Pile, ma około tysiąca dwóch hektarów, czterdzieści trzy metry dziewięćdziesiąt w najgłębszym miejscu, ponad dziewięć kilometrów długości przy szerokości dochodzącej do trzech, a jego linia brzegowa mierzy trzydzieści tysięcy czterysta pięćdziesiąt metrów; wyspy zajmują na nim łącznie nieco ponad hektar.",
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

  districtsHeading: "Do których części Bornego Sulinowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu czterech miejscowości w gminie — a gmina jest rozległa, blisko pięćset kilometrów kwadratowych. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Borne Sulinowo też przyjadę",
  nearbyParagraphs: [
    "Szczecinek jest dwadzieścia jeden kilometrów stąd, Czaplinek niedaleko, a Koszalin i Wałcz mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szczecinek", "Czaplinek", "Koszalin", "Wałcz"],

  about: blokOMnie("do Bornego Sulinowa", "w Bornem Sulinowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bornego Sulinowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu czterech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja, a gmina jest rozległa — blisko pięćset kilometrów kwadratowych.",
    },
    ...faqWspolne("w Bornem Sulinowie"),
    {
      question: "Dlaczego pytasz, co jest w daniu, skoro podaję jego nazwę?",
      answer:
        "Bo nazwa dania w większości przypadków nie mówi, co jest w środku — jedne opisują kształt, inne miejsce, a część nie opisuje już niczego, bo składnik, od którego pochodziły, dawno z przepisu wypadł. „To, co zawsze” znaczy co innego w każdym domu. Dopytuję nie dlatego, że nie wiem, co to za danie, tylko żeby nie przywieźć składników na coś innego.",
    },
    {
      question: "Czy nazwy funkcji urządzenia mówią, co one robią?",
      answer:
        "Nie zawsze i wolę powiedzieć to wprost. Część nazw brzmi jak nazwa dania, a opisuje czynność — i odwrotnie. Dlatego na prezentacji pokazuję, co się faktycznie dzieje w naczyniu, zamiast czytać spis funkcji. Po godzinie to widać, a z samej nazwy nie wynika nic.",
    },
  ],

  geo: { lat: 53.5764, lng: 16.5341 },
};
