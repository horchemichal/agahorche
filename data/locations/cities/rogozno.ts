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
 * ROGOŹNO — powiat obornicki, woj. wielkopolskie.
 * ⚠ OBORNIKI, siedziba tego powiatu, SĄ OPISANE
 *   W TYM CYKLU (fala 1 wielkopolskiego).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 10 734 mieszkańców (GUS 31.12.2024), 11,2 km²,
 *   gęstość 955,0 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia do 11,24 km², wartość potwierdzona
 *   niezależnie]. PODAJĘ.
 * CAŁA GMINA: 17 884 osoby, 216,2 km², gęstość
 *   83 os./km² [ZW — DOMYKA SIĘ: 82,7 → 83]. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 33 (zgodnie w dwóch źródłach).
 *   ⚠ Obrębów ewidencyjnych jest 20.
 *   ⚠⚠⚠ RÓŻNICY 33/20 NIE ROBIĘ KĄTEM — figura „opisane
 *   są tylko największe" zajęta (Wronki), a „spis, który
 *   się nie sumuje" zajęta (Międzybórz).
 * WYSOKOŚĆ: 63 m n.p.m.
 * ⚠ GEO: 52,7492 / 16,9997.
 * RZEKI: WEŁNA (29 km w granicach gminy), MAŁA WEŁNA,
 *   Flinta, Struga Sokołowska, Rudka — sieć rzeczna
 *   łącznie 59 km.
 *
 * ⚠⚠ ODMIANA:
 *   D. do ROGOŹNA · Ms. w ROGOŹNIE · N. Rogoźnem.
 *   ⚠⚠⚠ PRZYMIOTNIK TRACI „Ź": ROGOZIŃSKI (jezioro
 *   Rogozińskie, NIE „Rogoźnińskie").
 *   ⚠⚠⚠ BŁĄD: „w Rogoźniu".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — GĘSTE:
 *   — ROGÓŹNO (przez „ó") — gmina wiejska
 *     w kujawsko-pomorskim. ⚠⚠ RÓŻNICA JEDNEJ LITERY.
 *     ROZGRANICZAM W FAQ.
 *   — ⚠⚠⚠ WIEŚ MIĘDZYLESIE leży w gminie Rogoźno.
 *     TO NIE MIĘDZYLESIE (miasto w pow. kłodzkim,
 *     opisane w tym cyklu) ANI MIĘDZYCHÓD (miasto
 *     opisane w TEJ SAMEJ FALI). ROZGRANICZAM
 *     W SEKCJI DZIELNIC.
 *   — ROGOŹNICA (dolnośląskie) [SP].
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1192 r.
 *   — PRAWA MIEJSKIE: 1280 r., Przemysł II.
 *   ⚠⚠⚠ OBIE DATY Z JEDNEGO ŹRÓDŁA [SP]. PISZĘ
 *   „według dostępnych źródeł" I NIE UDAJĘ PEWNOŚCI.
 *   ⚠⚠ RÓŻNICY 88 LAT NIE ROBIĘ KĄTEM — figura zajęta
 *   (Szklarska Poręba).
 *   — Utraty praw nie stwierdzono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PIĘĆDZIESIĄT METRÓW NA PIĘĆ
 *   KILOMETRÓW:
 *   — JEZIORO ROGOZIŃSKIE: długość 5,09 km, szerokość
 *     0,31 km, głębokość maks. 5,8 m, średnia 3,0 m,
 *   — KĄPIELISKO MIEJSKIE: LINIA BRZEGOWA 50 M,
 *   — SEZON: 1–31 SIERPNIA, czyli JEDEN MIESIĄC.
 *   ⚠⚠⚠ ARYTMETYKA: 50 m na brzegu jeziora długiego
 *   5 090 m to mniej niż jeden procent.
 *   ⚠⚠⚠ [SP — dane kąpieliskowe z jednego źródła.
 *   PISZĘ TO W TEKŚCIE].
 *   ⚠⚠ POWIERZCHNI JEZIORA ROGOZIŃSKIEGO NIE PODAJĘ —
 *   serwis podaje ją jako PRZEDZIAŁ 125,8–148,2 ha.
 *   ⚠⚠⚠ TEJ ROZBIEŻNOŚCI NIE ROBIĘ KĄTEM — figura
 *   „spór o liczbę" zajęta (Szamotuły).
 *   ⚠⚠⚠ POWIERZCHNI JEZIORA BUDZISZEWSKIEGO NIE PODAJĘ
 *   ANI RAZU — źródła podają cztery różne wartości
 *   (177,14 / 174,10 / 163 / 162 ha). WYMIENIAM SAMĄ
 *   NAZWĘ.
 *   ⚠⚠ ŻADNYCH INNYCH POWIERZCHNI JEZIOR I ŻADNEGO
 *   SUMOWANIA.
 *
 * KĄT: PRZYGOTOWANE, NIE TYLKO ISTNIEJĄCE
 * — o tym, że w kuchni używa się wyłącznie tego, co
 * przygotowane, a nie tego, co jest. Kąt z Rogoźna:
 * jezioro ma pięć kilometrów długości, a kąpielisko
 * pięćdziesiąt metrów brzegu i jeden miesiąc sezonu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Jezioro Rogozińskie ma pięć kilometrów długości,
 *   a miejskie kąpielisko ma pięćdziesiąt metrów linii
 *   brzegowej i sezon od pierwszego do trzydziestego
 *   pierwszego sierpnia,
 * — ŻE TO MNIEJ NIŻ JEDEN PROCENT BRZEGU. TO JEST
 *   RDZEŃ,
 * — ⚠⚠ ŻE RESZTA BRZEGU ISTNIEJE — tylko nie jest
 *   przygotowana, i to jest cała różnica,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: blat ma dwa metry, a pracuje
 *   się na czterdziestu centymetrach; palników są
 *   cztery, a używa się dwóch; szafek osiem, a sięga się
 *   do trzech,
 * — ⚠⚠ ŻE TO NIE BRAK MIEJSCA, TYLKO BRAK
 *   PRZYGOTOWANIA — i dlatego dokupowanie czegokolwiek
 *   nic nie zmienia,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie dokupuj. Przygotuj jeden
 *   metr więcej — zwolnij jedną półkę albo jeden palnik,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko musi być
 *   przygotowane. Wąski, zadbany pas jest tańszy
 *   w utrzymaniu niż cały przygotowany brzeg, i lepszy
 *   niż osiem półek, na których panuje bałagan,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie potrzebuje
 *   przygotowanego miejsca — gniazdka, wolnego blatu,
 *   stałej pozycji. MÓWIĘ WPROST, że bez tego zostanie
 *   nieużywane, i że to trzeba załatwić PRZED zakupem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MAŁY DYSTANS, DUŻY KOSZT — kąt zajęty
 *   (Pleszew). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam rzecz była za daleko;
 *   tu jest pod ręką, tylko miejsce nie jest
 *   przygotowane. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO TO, CO SIĘ ROZROSŁO, POKAZUJE, KTÓRĘDY
 *   CHODZONO — kąt zajęty (Radków).
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO ILE UTRZYMANIA NA OSOBĘ — kąt zajęty
 *   (Słupca).
 * — ⚠⚠ ZERO OPISANE SĄ TYLKO NAJWIĘKSZE — kąt zajęty
 *   (Wronki). ⚠⚠⚠ UWAGA: TAM TEŻ SĄ JEZIORA. ŻADNEGO
 *   LICZENIA ANI PORÓWNYWANIA JEZIOR W TEJ SEKCJI.
 * — ⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   ANI O KĄPIELI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU ·
 *   ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ powierzchni żadnego jeziora.
 * — NIE SUMUJĘ powierzchni jezior.
 * — NIE PODAJĘ dat ustrojowych jako pewnych.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE DORADZAM nic w sprawie kąpieli.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Rogoźno leży w powiecie obornickim, na wysokości
 *   63 m n.p.m., nad Wełną; miasto liczy 10 734
 *   mieszkańców (GUS, 31.12.2024) na 11,2 km², czyli
 *   955 osób na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 17 884 osoby na 216,2 km², czyli
 *   83 osoby na kilometr, i obejmuje 33 miejscowości,
 * — Wełna płynie przez gminę na odcinku 29 km, a cała
 *   sieć rzeczna gminy ma około 59 km,
 * — pierwszą wzmiankę datuje się na 1192 r., a prawa
 *   miejskie na 1280 r. (Przemysł II) — według
 *   dostępnych źródeł,
 * — Jezioro Rogozińskie ma 5,09 km długości i 0,31 km
 *   szerokości, głębokość maksymalną 5,8 m i średnią
 *   3,0 m; miejskie kąpielisko ma 50 m linii brzegowej,
 *   a jego sezon trwa od 1 do 31 sierpnia,
 * — w gminie leżą też jeziora Budziszewskie, Prusieckie,
 *   Nienawskie Duże, Czarne i Boguniewskie.
 */
export const ROGOZNO: CityContent = {
  slug: "rogozno",
  h1: "Thermomix Rogoźno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rogoźno — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rogoźnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rogoźno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rogoźnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rogoźna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie.",

  highlights: highlightyStandardowe("Rogoźno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pięć kilometrów jeziora. Pięćdziesiąt metrów kąpieliska.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rogoźnie – jak wygląda prezentacja?",
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
      id: "przygotowane",
      heading: "Przygotowane, nie tylko istniejące",
      paragraphs: [
        "Jezioro Rogozińskie ma pięć kilometrów długości i trzysta metrów szerokości.",
        "Miejskie kąpielisko ma pięćdziesiąt metrów linii brzegowej. Sezon trwa od pierwszego do trzydziestego pierwszego sierpnia. Podaję to za jednym źródłem, więc mówię ostrożniej niż o liczbach z GUS-u.",
        "Pięćdziesiąt metrów z pięciu tysięcy dziewięćdziesięciu. Mniej niż jeden procent brzegu.",
        "Reszta brzegu istnieje. Da się tam dojść, jest woda i jest piasek. Po prostu nie jest przygotowana — i w tym jednym słowie zawiera się cała różnica między tym, co masz, a tym, z czego korzystasz.",
        "W kuchni ta proporcja jest niemal identyczna i pierwszy raz widać ją dopiero wtedy, gdy ktoś obcy stanie przy Waszym blacie.",
        "Blat ma dwa metry, a pracuje się na czterdziestu centymetrach — resztę zajmuje czajnik, suszarka, słoiki i poczta. Palniki są cztery, używa się dwóch, bo na dwóch tylnych stoją garnki, których nie ma gdzie schować. Szafek jest osiem, sięga się do trzech.",
        "To nie jest brak miejsca. To brak przygotowania — i dlatego dokupienie czegokolwiek nic nie zmienia. Nowy garnek wyląduje na tych samych czterdziestu centymetrach.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że rzecz schowana o dwa kroki za daleko przestaje być używana. Tam problemem była odległość. Tu rzecz jest dokładnie pod ręką — nieprzygotowane jest miejsce, w którym miałaby pracować.",
        "Ruch jest jeden i nic nie kosztuje. Nie dokupuj. Przygotuj jeden metr więcej: zwolnij jedną półkę albo jeden palnik i zostaw go pustym. Pusty palnik jest wart więcej niż nowy garnek.",
        "Uczciwie o drugiej stronie: nie wszystko musi być przygotowane. Wąski, zadbany pas bywa lepszy niż cały przygotowany brzeg, bo tańszy w utrzymaniu — i zdecydowanie lepszy niż osiem półek, na których panuje bałagan. Nie chodzi o to, żeby uporządkować całą kuchnię. Chodzi o to, żeby wiedzieć, ile z niej naprawdę pracuje.",
        "I uczciwie o sprzęcie. Thermomix potrzebuje przygotowanego miejsca: gniazdka, wolnego kawałka blatu i stałej pozycji, z której się go nie zdejmuje. Bez tego zostaje nieużywany — a to trzeba załatwić przed zakupem, nie po. Na spotkaniu zwykle sprawdzamy to razem, jeszcze przed rozmową o cenie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rogoźnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile centymetrów blatu macie naprawdę wolne. Nie ile ma blat — ile jest wolne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rogoźnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Rogoźna",
      paragraphs: [
        "Rogoźno leży w powiecie obornickim, nad Wełną, na wysokości sześćdziesięciu trzech metrów nad poziomem morza. Samo miasto liczy 10 734 mieszkańców (GUS, 31.12.2024) na 11,2 kilometra kwadratowego, czyli dziewięćset pięćdziesiąt pięć osób na kilometr, a cała gmina miejsko-wiejska 17 884 osoby na 216,2 kilometra, czyli osiemdziesiąt trzy osoby na kilometr, i obejmuje trzydzieści trzy miejscowości. Wełna płynie przez gminę na odcinku dwudziestu dziewięciu kilometrów, a cała sieć rzeczna ma około pięćdziesięciu dziewięciu. Pierwszą wzmiankę datuje się na 1192 rok, a prawa miejskie na 1280, nadane przez Przemysła II — podaję to za dostępnymi źródłami, bo potwierdzenia w kilku niezależnych nie znalazłam. W gminie leżą jeziora Budziszewskie, Rogozińskie, Prusieckie, Nienawskie Duże, Czarne i Boguniewskie.",
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

  districtsHeading: "Do których części Rogoźna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie: Parkowa, Gościejewa, Pruśc, Budziszewka, Boguniewa, Sierników, Studzieńca, Szczytna, Wełny, Laskowa i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę. Jedna ze wsi w gminie nazywa się Międzylesie — to nie miasto Międzylesie w powiecie kłodzkim ani Międzychód, choć nazwy są zwodniczo podobne.",
  ],
  districts: [],

  nearbyHeading: "Poza Rogoźno też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Obornik, Wągrowca, Murowanej Gośliny, Ryczywołu i Budzynia — wszędzie bezpłatnie, tak samo jak w samym Rogoźnie.",
  ],
  nearbyTowns: ["Oborniki", "Wągrowiec", "Murowana Goślina", "Ryczywół", "Budzyń"],

  about: blokOMnie("do Rogoźna", "w Rogoźnie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rogoźna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „do Rogoźna” i „w Rogoźnie”, a przymiotnik traci „ź” — jezioro jest Rogozińskie. I warto dopisać województwo wielkopolskie, bo w kujawsko-pomorskim jest gmina Rogóźno, pisana przez „ó”.",
    },
    ...faqWspolne("w Rogoźnie"),
    {
      question: "Mam dużą kuchnię, a i tak ciągle brakuje mi miejsca. Co z tym zrobić?",
      answer:
        "Sprawdziłabym najpierw, ile z niej jest przygotowane, a nie ile jej jest. Jezioro Rogozińskie ma pięć kilometrów długości, a miejskie kąpielisko pięćdziesiąt metrów brzegu — reszta brzegu istnieje, tylko nie jest przygotowana. W kuchni to samo: blat ma dwa metry, a pracuje się na czterdziestu centymetrach, bo resztę zajmują rzeczy, które nie mają gdzie stać. Dokupienie czegokolwiek tego nie zmieni. Zwolnij jedną półkę albo jeden palnik i zostaw go pustym.",
    },
    {
      question: "Czy Thermomix musi stać na blacie?",
      answer:
        "W praktyce tak — i mówię to wprost, choć nie jest to wygodna odpowiedź. Urządzenie potrzebuje gniazdka, wolnego kawałka blatu i stałej pozycji, z której się go nie zdejmuje. Chowany do szafki po kilku tygodniach przestaje być używany. Miejsce trzeba przygotować przed zakupem, nie po. Na prezentacji zwykle sprawdzamy to razem, jeszcze przed rozmową o cenie — i czasem wychodzi, że najpierw warto przestawić coś innego.",
    },
  ],

  geo: { lat: 52.7492, lng: 16.9997 },
};
