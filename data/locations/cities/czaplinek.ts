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
 * CZAPLINEK — powiat drawski, woj. zachodniopomorskie,
 * Pojezierze Drawskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 6 624 mieszkańców (GUS 31.12.2024), 13,6 km²,
 * gęstość 486,3 os./km², 141 m n.p.m.
 * CAŁA GMINA: 11 065 osób, 364,8 km², 57 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,5580 / 16,2336.
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA CZAPLINEK.
 *
 * ⚠ ODMIANA: D. CZAPLINKA, Ms. W CZAPLINKU,
 *   przym. CZAPLINECKI (potwierdzony w użyciu urzędowym:
 *   „Dni Czaplinka" — ⚠ sama nazwa imprezy potwierdza
 *   dopełniacz, przymiotnik znany z innych materiałów
 *   urzędu). ⚠⚠ NIE POTWIERDZONE W PORADNI PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1286 — powstanie jednostki administracyjnej.
 * — ⚠⚠ PRAWA MIEJSKIE: 1290–1291. ŹRÓDŁO PODAJE
 *   PRZEDZIAŁ, NIE DATĘ. Piszę „na przełomie lat 1290
 *   i 1291". NIE WYBIERAM JEDNEGO ROKU.
 * — MIASTO LEŻY MIĘDZY DWOMA JEZIORAMI: Drawsko
 *   i Czaplino.
 *
 * JEZIORO DRAWSKO (w gminie, tuż przy mieście):
 * — powierzchnia 1 871 ha — DWUNASTE CO DO WIELKOŚCI
 *   JEZIORO W POLSCE,
 * — głębokość maksymalna 83 M — DRUGIE NAJGŁĘBSZE
 *   W POLSCE,
 * — linia brzegowa około 75 KM,
 * — 12 WYSP, największa to Bielawa.
 * ⚠⚠ NIE ROBIĘ Z JEZIORA KĄTA. Wszystkie trzy oczywiste
 *   ujęcia są zajęte: „kształt kontra objętość"
 *   (Choszczno), „głębokość maksymalna kontra średnia"
 *   (Więcbork), „powierzchnia styku i odparowanie"
 *   (Choszczno). Podaję liczby w bloku faktograficznym.
 * ⚠⚠ JEZIORO DRAWSKO POJAWIA SIĘ TEŻ NA STRONIE DRAWSKA
 *   POMORSKIEGO — TAM JAKO PUŁAPKA („nie leży w mieście
 *   Drawsko Pomorskie"). TUTAJ jest na miejscu: leży
 *   w gminie Czaplinek. Nie ma sprzeczności, ale nie
 *   powtarzam tamtego zastrzeżenia.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MIÓD DRAHIMSKI:
 * — WPIS NA LISTĘ PRODUKTÓW TRADYCYJNYCH MRiRW:
 *   1 CZERWCA 2006 R., woj. zachodniopomorskie.
 * — Nazwa od zamku Drahim w Starym Drawsku (gmina
 *   Czaplinek); obszar to Drawski Park Krajobrazowy
 *   i okolice historycznego Drahimia.
 * — OKOŁO DWUSTU PSZCZELARZY kontynuuje tradycję
 *   na tym terenie.
 * — ⚠⚠ KARTA PRODUKTU NIE PRECYZUJE POWIATU ANI GMINY.
 *   Piszę „produkt regionalny, którego obszar obejmuje
 *   okolice Czaplinka", NIE „produkt z Czaplinka".
 *   TWARDA GRANICA.
 * — ⚠⚠⚠ MIÓD JAKO TEMAT KULINARNY JEST ZAJĘTY
 *   (Kluczbork — miód potraktowany praktycznie).
 *   DLATEGO KĄT NIE JEST O MIODZIE, tylko o LICZBIE
 *   DWUSTU WYTWÓRCÓW JEDNEGO PRODUKTU O JEDNEJ NAZWIE.
 *   Ani jednego zdania o tym, co z miodem robić
 *   w kuchni. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: DWIEŚCIE RĄK, JEDNA NAZWA — dlaczego to samo danie
 * u każdego smakuje inaczej i dlaczego to nie jest usterka.
 * Kąt od miodu drahimskiego, wpisanego na ministerialną
 * listę 1 czerwca 2006 r.: jedna zarejestrowana nazwa,
 * jeden obszar, a około dwustu pszczelarzy, z których
 * każdy pracuje trochę inaczej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miód drahimski trafił na ministerialną listę
 *   1 czerwca 2006 r., że nazwa pochodzi od zamku Drahim
 *   w Starym Drawsku i że tradycję kontynuuje na tym
 *   terenie około dwustu pszczelarzy,
 * — ⚠ ŻE TO PRODUKT REGIONALNY, NIE „Z CZAPLINKA",
 * — ŻE JEDNA NAZWA NIE OZNACZA JEDNEGO WYNIKU —
 *   to jest rdzeń. Rejestracja opisuje obszar i sposób,
 *   nie gwarantuje identyczności,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO TAK SAMO I ŻE STĄD BIERZE
 *   SIĘ PYTANIE, KTÓRE SŁYSZĘ NA KAŻDYM SPOTKANIU:
 *   „dlaczego u mnie to nie smakuje jak u mamy".
 *   Odpowiedź brzmi: bo u mamy też nie smakowało jak
 *   u jej mamy,
 * — ⚠⚠ ŻE RÓŻNICA BIERZE SIĘ Z RZECZY, KTÓRYCH NIKT
 *   NIE ZAPISUJE, i wymieniam TYLKO TRZY, JAKOŚCIOWO:
 *   inny sprzęt, inna ręka, inne produkty kupowane
 *   gdzie indziej. ⚠⚠⚠ NIE WCHODZĘ W ŻADEN SZCZEGÓŁ
 *   KULINARNY,
 * — ⚠⚠ ŻE Z TEGO WYNIKA COŚ PRAKTYCZNEGO, A NIE TYLKO
 *   POCIESZENIE: skoro identyczność jest nieosiągalna,
 *   to celem nie jest kopia, tylko WERSJA, KTÓRĄ UMIE SIĘ
 *   POWTÓRZYĆ. Kopia jest celem ruchomym; własna wersja
 *   nie jest,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: TO NIE JEST ZGODA NA
 *   BYLE CO. „U każdego inaczej" nie znaczy „wszystko
 *   jedno" — znaczy tylko tyle, że punktem odniesienia
 *   jest Wasz poprzedni raz, nie czyjś,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie odtworzy
 *   cudzego dania, bo nie ma czego odtwarzać — oryginał
 *   też był jedną z wersji. Usuwa natomiast jedną
 *   ze zmiennych: Wasze własne wykonanie przestaje się
 *   różnić między jednym a drugim razem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ODTWARZANIA PRZEPISU RODZINNEGO — obszar
 *   zajęty PIĘCIOKROTNIE (Golub-Dobrzyń, Kamień
 *   Krajeński, Puck, Suraż, Radziejów). ⚠⚠ TO JEST
 *   NAJWIĘKSZE RYZYKO TEJ STRONY, bo zdanie „nie smakuje
 *   jak u mamy" leży dokładnie na granicy.
 *   TUTAJ NIE MA ANI JEDNEGO ZDANIA O TYM, JAK ODTWORZYĆ
 *   PRZEPIS, ANI O ZAPISYWANIU. Jest wyłącznie teza,
 *   że identyczność jest nieosiągalna i że celem jest
 *   własna powtarzalna wersja.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO PORÓWNYWANIA DWÓCH WERSJI JEDNEGO DANIA —
 *   kąty zajęte (Drawsko Pomorskie, Kamień Pomorski).
 * — ⚠⚠ ZERO MIODU JAKO SKŁADNIKA — kąt zajęty
 *   (Kluczbork).
 * — ⚠⚠ ZERO WŁASNEJ MIARY — kąt zajęty (Gryfice).
 * — ⚠ ZERO JEZIORA JAKO METAFORY — patrz wyżej.
 * — ⚠ ZERO OZNACZEŃ I KLASYFIKACJI PRODUKTÓW — kąt
 *   zajęty (Chodecz). Wpis na listę wymieniam jako datę
 *   i fakt, nie rozwijam, co oznaczenie gwarantuje.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH SZCZEGÓŁÓW KULINARNYCH PRZY WYLICZANIU
 *   PRZYCZYN RÓŻNIC.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ przy miodzie
 *   to pokusa oczywista. NIE PISZĘ ANI SŁOWA
 *   O WŁAŚCIWOŚCIACH MIODU. TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO BORNEGO SULINOWA I OKOLICZNYCH WĄTKÓW
 *   WOJSKOWYCH. Borne Sulinowo leży w tym samym regionie
 *   i wypływa w materiałach o Pojezierzu Drawskim.
 *   NIE WSPOMINAM.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠⚠ ZERO ZAMKU DRAHIM JAKO WĄTKU ZAKONNEGO ANI
 *   MILITARNEGO — wymieniam go WYŁĄCZNIE jako źródło
 *   nazwy produktu.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ jednego roku nadania praw miejskich.
 * — NIE TWIERDZĘ, że miód drahimski jest produktem
 *   miasta Czaplinek — karta nie podaje gminy.
 * — NIE PISZĘ NIC O WŁAŚCIWOŚCIACH ANI ZASTOSOWANIU
 *   MIODU.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Czaplinek leży na Pojezierzu Drawskim, między
 *   jeziorami Drawsko i Czaplino, w powiecie drawskim;
 *   jest miastem w gminie miejsko-wiejskiej i liczy
 *   6 624 mieszkańców (GUS, 31.12.2024) na 13,6 km²,
 *   141 m n.p.m., a cała gmina 11 065 osób na 364,8 km²
 *   w 57 miejscowościach,
 * — jednostka administracyjna powstała w 1286 r.,
 *   a prawa miejskie miasto otrzymało na przełomie lat
 *   1290 i 1291,
 * — jezioro Drawsko ma 1 871 ha powierzchni i jest
 *   dwunastym co do wielkości jeziorem w Polsce; sięga
 *   83 metrów głębokości, co czyni je drugim najgłębszym
 *   w kraju, ma około 75 km linii brzegowej i dwanaście
 *   wysp, z których największa to Bielawa,
 * — miód drahimski trafił na ministerialną Listę
 *   Produktów Tradycyjnych 1 czerwca 2006 r.; nazwa
 *   pochodzi od zamku Drahim w Starym Drawsku, obszar
 *   obejmuje Drawski Park Krajobrazowy i okolice
 *   historycznego Drahimia, a tradycję kontynuuje tam
 *   około dwustu pszczelarzy.
 */
export const CZAPLINEK: CityContent = {
  slug: "czaplinek",
  h1: "Thermomix Czaplinek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czaplinek — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Czaplinku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czaplinek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czaplinku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czaplinka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Czaplinek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedna zarejestrowana nazwa, około dwustu par rąk. Identyczności nie było nigdy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czaplinku – jak wygląda prezentacja?",
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
      id: "dwiescie-rak",
      heading: "Jedna nazwa, około dwustu par rąk",
      paragraphs: [
        "Pierwszego czerwca 2006 roku na ministerialną Listę Produktów Tradycyjnych trafił miód drahimski. Nazwa pochodzi od zamku Drahim w Starym Drawsku, a obszar, którego dotyczy, to Drawski Park Krajobrazowy i okolice historycznego Drahimia — czyli między innymi tutejsza gmina. Dla porządku: to produkt regionalny, nie „produkt z Czaplinka” — karta na liście opisuje obszar, nie miasto.",
        "Tradycję kontynuuje na tym terenie około dwustu pszczelarzy.",
        "I tu jest rzecz, która mnie w tym interesuje najbardziej. Jedna zarejestrowana nazwa, jeden opisany obszar — i dwieście par rąk, z których każda pracuje trochę inaczej. Rejestracja opisuje obszar i sposób. Nie gwarantuje, że dwa słoiki będą identyczne, i nigdy nie miała takiego zadania.",
        "W kuchni dzieje się dokładnie to samo i stąd bierze się pytanie, które słyszę na niemal każdym spotkaniu: dlaczego u mnie to nie smakuje jak u mamy.",
        "Uczciwa odpowiedź brzmi: bo u mamy też nie smakowało jak u jej mamy. Tylko że tego nikt już nie sprawdzi.",
        "Różnica bierze się z rzeczy, których nikt nigdy nie zapisuje, bo wydają się nie do zapisania. Inny sprzęt. Inna ręka — czyli inne tempo, inny nawyk, inne wyczucie momentu. I inne produkty, kupowane gdzie indziej, od kogoś innego, w innym tygodniu roku.",
        "Z tego wynika coś praktycznego, a nie tylko pocieszenie. Skoro identyczność jest nieosiągalna, to nie ma sensu robić z niej celu. Kopia jest celem ruchomym — zawsze będzie się od czegoś różnić i zawsze można powiedzieć, że wyszło „prawie”. Własna wersja, którą umiecie powtórzyć, celem ruchomym nie jest.",
        "I od razu druga strona, bo to nie jest zgoda na byle co. „U każdego inaczej” nie znaczy „wszystko jedno”. Znaczy tylko tyle, że punktem odniesienia jest Wasz poprzedni raz, a nie czyjś — i że postęp mierzy się wobec siebie, nie wobec wspomnienia.",
        "Uczciwie o urządzeniu, bo tu trzeba powiedzieć jedno wprost. Ono nie odtworzy cudzego dania i nie ma czego odtwarzać — oryginał też był tylko jedną z wersji, zrobioną tamtego dnia, tamtymi rękami.",
        "Usuwa natomiast jedną ze zmiennych i akurat tę, którą najtrudniej opanować samemu: Wasze własne wykonanie przestaje się różnić między jednym a drugim razem. Wtedy zostaje już tylko to, co faktycznie zmieniliście — a nie to, że akurat tego dnia mieszało się szybciej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czaplinku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, które danie chcielibyście u siebie powtarzać tak samo za każdym razem — od takiego najlepiej zacząć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czaplinku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla czaplineckiej rodziny",
      paragraphs: [
        "Czaplinek leży na Pojezierzu Drawskim, między jeziorami Drawsko i Czaplino, w powiecie drawskim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad sześć i pół tysiąca mieszkańców na trzynastu i sześciu dziesiątych kilometra kwadratowego, sto czterdzieści jeden metrów nad poziomem morza, a cała gmina ponad jedenaście tysięcy osób na trzystu sześćdziesięciu czterech kilometrach kwadratowych, w pięćdziesięciu siedmiu miejscowościach. Jednostka administracyjna powstała tu w 1286 roku, a prawa miejskie miasto otrzymało na przełomie lat 1290 i 1291. Jezioro Drawsko ma tysiąc osiemset siedemdziesiąt jeden hektarów powierzchni i jest dwunastym co do wielkości jeziorem w Polsce; sięga osiemdziesięciu trzech metrów głębokości, co czyni je drugim najgłębszym w kraju, ma około siedemdziesięciu pięciu kilometrów linii brzegowej i dwanaście wysp, z których największa to Bielawa. Pierwszego czerwca 2006 roku na ministerialną Listę Produktów Tradycyjnych trafił miód drahimski — nazwa pochodzi od zamku Drahim w Starym Drawsku, obszar obejmuje Drawski Park Krajobrazowy i okolice historycznego Drahimia, a tradycję kontynuuje tam około dwustu pszczelarzy.",
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

  districtsHeading: "Do których części Czaplinka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach, od jeziora Drawsko po Czaplino — i do wszystkich pięćdziesięciu siedmiu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Czaplinek też przyjadę",
  nearbyParagraphs: [
    "Złocieniec i Drawsko Pomorskie są tuż obok, a Szczecinek i Wałcz mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Złocieniec", "Drawsko Pomorskie", "Szczecinek", "Wałcz"],

  about: blokOMnie("do Czaplinka", "w Czaplinku", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czaplinka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich pięćdziesięciu siedmiu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Czaplinek na Pojezierzu Drawskim, w powiecie drawskim.",
    },
    ...faqWspolne("w Czaplinku"),
    {
      question: "Dlaczego to samo danie u mnie nie smakuje jak u mamy?",
      answer:
        "Bo u mamy też nie smakowało jak u jej mamy — tylko tego nikt już nie sprawdzi. Różnica bierze się z rzeczy, których nikt nie zapisuje: inny sprzęt, inna ręka, inne produkty kupowane gdzie indziej. Wniosek jest praktyczny: kopia jest celem ruchomym i zawsze wyjdzie „prawie”, a własna wersja, którą umiecie powtórzyć, celem ruchomym nie jest.",
    },
    {
      question: "Czy miód drahimski to produkt z Czaplinka?",
      answer:
        "To produkt regionalny, nie miejski. Trafił na ministerialną Listę Produktów Tradycyjnych pierwszego czerwca 2006 roku, a jego nazwa pochodzi od zamku Drahim w Starym Drawsku. Karta produktu opisuje obszar — Drawski Park Krajobrazowy i okolice historycznego Drahimia — a nie konkretną gminę, więc nie przypisuję go samemu miastu.",
    },
  ],

  geo: { lat: 53.558, lng: 16.2336 },
};
