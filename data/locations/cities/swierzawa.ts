import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * ŚWIERZAWA — powiat złotoryjski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 979 mieszkańców (GUS 31.12.2024), 1,8 km².
 *   ⚠⚠ GĘSTOŚĆ PODAJĘ TYLKO JAKO PRZYBLIŻENIE
 *   („około tysiąca stu osób na kilometr"), bo
 *   powierzchnia jest zaokrąglona — faktyczna to ok.
 *   1,76 km². PISZĘ „OKOŁO" I NIE UDAJĘ PRECYZJI.
 * CAŁA GMINA: 6 971 osób, 159,9 km², gęstość 44 os./km²
 *   [ZW — DOMYKA SIĘ. PODAJĘ].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠ PROPORCJI MIASTO/GMINA NIE UŻYWAM — zbędna
 *   przy tym kącie.
 * WSIE W GMINIE: 11.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,0140 / 15,8948.
 *
 * ⚠⚠ ODMIANA:
 *   D. do ŚWIERZAWY · Ms. w ŚWIERZAWIE · N. Świerzawą.
 *   Przymiotnik: ŚWIERZAWSKI.
 *   ⚠⚠ ODMIANA BLIŹNIACZA ZE ŚCINAWĄ (miasto opisane
 *   w tym cyklu) — NIE MYLIĆ NAZW.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ KOLIZJA WEWNĘTRZNA FALI: wieś ŚWIERZÓW leży
 *     w gminie Prusice (opisanej w tej samej fali).
 *     NIE MYLIĆ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: koniec XIII w., najczęściej
 *     podaje się 1295 r. ⚠⚠⚠ [SP]. PISZĘ „pod koniec
 *     XIII wieku, najczęściej podaje się rok 1295".
 *   — UTRATA PRAW: 1973 r.
 *   — ODZYSKANIE PRAW: 1984 r.
 *   ⚠⚠ UTRATY I ODZYSKANIA NIE ROBIĘ KĄTEM — figura
 *   zajęta (Szklarska Poręba, Wąsosz w tej samej fali).
 *   TO SĄ TYLKO DATY W BLOKU FAKTÓW.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWA MATERIAŁY W JEDNEJ ŚCIANIE:
 *   Najstarszą zachowaną budowlę w mieście (2. ćwierć
 *   XIII w.) wzniesiono z ŁAMANEGO KAMIENIA, ale
 *   NAROŻA I OBRAMIENIA OKIEN wykonano z PIASKOWCA.
 *   ⚠⚠⚠ DROŻSZY, OBRABIALNY MATERIAŁ POSZEDŁ WYŁĄCZNIE
 *   NA KRAWĘDZIE. To jest cały kąt.
 *   ⚠⚠⚠ FUNKCJI TEJ BUDOWLI NIE NAZYWAM — WĄTEK
 *   WYZNANIOWY, WYKLUCZONY BEZWZGLĘDNIE. PISZĘ
 *   „najstarsza zachowana budowla w mieście" I TYLE.
 *   ⚠⚠⚠ LICZBY „do 1000 wiernych" NIE UŻYWAM.
 *     ANI RAZU. POD ŻADNĄ POSTACIĄ.
 *   ⚠⚠ WYMIARÓW WNĘTRZA NIE PODAJĘ — prowadzą wprost
 *     do funkcji. POMIJAM.
 *   ⚠ DODATKOWE DATY DOPUSZCZONE (neutralne):
 *     — drewniany poprzednik wzmiankowany w 1195 r.,
 *     — wieża dostawiona w 1507 r.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: DROŻSZE TAM, GDZIE KRAWĘDŹ
 * — o tym, że pieniądze w kuchni mają sens tylko
 * w kilku punktach, przez które przechodzi wszystko.
 * Kąt z muru najstarszej budowli Świerzawy: korpus
 * z łamanego kamienia, naroża i obramienia okien
 * z piaskowca.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ścianę postawiono z tańszego łamanego kamienia,
 *   a droższy piaskowiec poszedł na naroża i obramienia
 *   okien,
 * — ŻE DROŻSZY MATERIAŁ TRAFIŁ WYŁĄCZNIE NA KRAWĘDZIE.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE KRAWĘDŹ TO MIEJSCE, PRZEZ KTÓRE PRZECHODZI
 *   WSZYSTKO — i że reszta ściany może być zwyczajna,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: jeden dobry nóż i jedna
 *   porządna deska robią więcej niż komplet średnich
 *   wszystkiego,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz trzy rzeczy, przez
 *   które przechodzi każdy posiłek w Twoim domu.
 *   To są Twoje krawędzie. Tylko tam wydawaj,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: krawędź bywa gdzie
 *   indziej, niż się wydaje, i widać to dopiero po
 *   kilku miesiącach. NIE UDAJĘ, że da się to rozpoznać
 *   od ręki,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest drogą
 *   krawędzią i opłaca się TYLKO wtedy, gdy leży na
 *   trasie, którą przechodzi każdy posiłek. MÓWIĘ
 *   WPROST, że przy gotowaniu dwa razy w tygodniu
 *   to droga krawędź w ścianie, o którą nikt się nie
 *   opiera.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TO, CO SIĘ ROZROSŁO, POKAZUJE, KTÓRĘDY
 *   CHODZONO — kąt zajęty (Radków, TA SAMA FALA).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam chodziło o ROZPOZNANIE trasy po zużyciu;
 *   tu trasa jest już znana i pytanie brzmi, GDZIE NA
 *   NIEJ WYDAĆ PIENIĄDZE. JEDNO ZDANIE ROZGRANICZAJĄCE
 *   — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OD CZEGO LICZYMY — kąt zajęty (Wojcieszów).
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie, ta sama fala).
 * — ⚠⚠ ZERO TRZY CZWARTE TO ŚCIANA — kąt zajęty
 *   (Prochowice). ⚠ UWAGA: tam też jest mur. TU MUR
 *   JEST MATERIAŁEM, NIE UDZIAŁEM PROCENTOWYM.
 *   ŻADNYCH PROCENTÓW W TEJ SEKCJI.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH KONKRETNYCH CEN SPRZĘTU KUCHENNEGO.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO (RDZEŃ KĄTA LEŻY
 *   BLISKO — PILNUJĘ KAŻDEGO ZDANIA) · ZERO WĄTKU
 *   MILITARNEGO · ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU ·
 *   ZERO UZDROWISK · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości miasta jako liczby dokładnej.
 * — NIE NAZYWAM funkcji najstarszej budowli.
 * — NIE PODAJĘ jej wymiarów ani pojemności.
 * — NIE PODAJĘ roku nadania praw jako pewnego.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości
 *   drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Świerzawa leży w powiecie złotoryjskim; miasto
 *   liczy 1 979 mieszkańców (GUS, 31.12.2024) na 1,8 km²,
 *   a cała gmina miejsko-wiejska 6 971 osób na 159,9 km²,
 *   czyli 44 osoby na kilometr kwadratowy,
 * — gmina obejmuje jedenaście wsi,
 * — prawa miejskie miasto otrzymało pod koniec XIII w.,
 *   najczęściej podaje się rok 1295; utraciło je
 *   w 1973 r. i odzyskało w 1984 r.,
 * — najstarszą zachowaną budowlę w mieście wzniesiono
 *   w 2. ćwierci XIII w. z łamanego kamienia, a naroża
 *   i obramienia okien wykonano z piaskowca; drewnianego
 *   poprzednika wzmiankowano w 1195 r., wieżę dostawiono
 *   w 1507 r.
 */
export const SWIERZAWA: CityContent = {
  slug: "swierzawa",
  h1: "Thermomix Świerzawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Świerzawa — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Świerzawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świerzawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świerzawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świerzawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich jedenastu wsi w gminie.",

  highlights: highlightyStandardowe("Świerzawa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ściana z tego, co było. Naroża z tego, co drogie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świerzawie – jak wygląda prezentacja?",
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
      id: "drozsze-na-krawedzi",
      heading: "Drożej tam, gdzie krawędź",
      paragraphs: [
        "Najstarszą zachowaną budowlę w Świerzawie wzniesiono w drugiej ćwierci trzynastego wieku. Ściany postawiono z łamanego kamienia — czyli z tego, co było pod ręką i czego nie trzeba było obrabiać.",
        "Ale naroża i obramienia okien wykonano z piaskowca. Materiału droższego, który trzeba przywieźć i który trzeba umieć ciosać.",
        "Cały korpus zwyczajnie. Krawędzie starannie.",
        "Ktoś siedemset lat temu rozwiązał tu problem, z którym co miesiąc mierzy się każda kuchnia: budżet jest skończony, a rzeczy do kupienia jest więcej, niż go starczy.",
        "Krawędź to miejsce, przez które przechodzi wszystko. W murze to narożnik i okno — punkty, w których ściana się spotyka, obciąża i ściera. W kuchni to zwykle trzy rzeczy, nie więcej. Nóż, którym kroisz wszystko. Deska, na której to robisz. I ten jeden garnek, w którym powstaje większość obiadów.",
        "Reszta może być zwyczajna. Naprawdę może. Cztery średnie noże przegrywają z jednym dobrym, a komplet garnków, z których używasz dwóch, to nie jest wyposażenie, tylko zajęta szafka.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, jak rozpoznać swoją prawdziwą trasę w kuchni — po tym, co jest najbardziej zużyte. To było o rozpoznaniu. Tu trasa jest już znana i pytanie brzmi inaczej: gdzie na niej wydać pieniądze. Najpierw się widzi, potem się wydaje, i w tej kolejności.",
        "Ruch jest jeden. Wypisz trzy rzeczy, przez które przechodzi każdy posiłek w Waszym domu. To są Wasze krawędzie — i tylko tam warto dokładać.",
        "Uczciwie o drugiej stronie: krawędź bywa gdzie indziej, niż się wydaje. Ktoś jest przekonany, że jego krawędzią jest patelnia, a po trzech miesiącach uczciwej obserwacji okazuje się, że to termos i pudełka, bo połowa posiłków wyjeżdża z domu. Tego nie da się rozpoznać od ręki i nie będę udawać, że da.",
        "I uczciwie o sprzęcie. Thermomix jest drogą krawędzią. Opłaca się wtedy i tylko wtedy, gdy leży na trasie, którą przechodzi większość Waszych posiłków — czyli przy gotowaniu prawie codziennym. Jeśli gotujecie dwa razy w tygodniu, to jest drogie naroże w ścianie, o którą nikt się nie opiera. Wolę to powiedzieć na spotkaniu niż pół roku po nim.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/cena", label: "Ile kosztuje Thermomix" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świerzawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu gotujecie w domu. Od tej jednej liczby zależy więcej niż od wszystkiego innego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świerzawie"),
    sekcjaRaty("w Świerzawie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Świerzawy",
      paragraphs: [
        "Świerzawa leży w powiecie złotoryjskim. Samo miasto liczy 1 979 mieszkańców (GUS, 31.12.2024) na niecałych dwóch kilometrach kwadratowych, czyli około tysiąca stu osób na kilometr — podaję to jako przybliżenie, bo powierzchnia w źródłach jest zaokrąglona. Cała gmina miejsko-wiejska to 6 971 osób na 159,9 kilometra, czyli czterdzieści cztery osoby na kilometr, i jedenaście wsi. Prawa miejskie miasto otrzymało pod koniec trzynastego wieku — najczęściej podaje się rok 1295 — utraciło je w 1973, a odzyskało w 1984. Najstarszą zachowaną budowlę wzniesiono w drugiej ćwierci trzynastego wieku; jej drewnianego poprzednika wzmiankowano w 1195 roku, a wieżę dostawiono w 1507.",
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

  districtsHeading: "Do których części Świerzawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich jedenastu wsi w gminie. Wszędzie bez dopłaty.",
    "Miasto jest małe — niecałe dwa kilometry kwadratowe — więc w samej Świerzawie wystarczy adres. Do wsi warto podać nazwę miejscowości, bo gmina ma prawie sto sześćdziesiąt kilometrów kwadratowych.",
  ],
  districts: [],

  nearbyHeading: "Poza Świerzawę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Złotoryi, Jawora, Bolkowa, Wojcieszowa i Jeleniej Góry — wszędzie bezpłatnie, tak samo jak w samej Świerzawie.",
  ],
  nearbyTowns: ["Złotoryja", "Jawor", "Bolków", "Wojcieszów", "Jelenia Góra"],

  about: blokOMnie("do Świerzawy", "w Świerzawie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świerzawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich jedenastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga praktyczna: mówi się „do Świerzawy” i „w Świerzawie”, a przymiotnik brzmi „świerzawski”. Łatwo to pomylić ze Ścinawą — to inne miasto, w powiecie lubińskim.",
    },
    ...faqWspolne("w Świerzawie"),
    {
      question: "Mam ograniczony budżet na kuchnię. Na czym warto nie oszczędzać?",
      answer:
        "Na krawędziach. Najstarszą budowlę w Świerzawie postawiono z łamanego kamienia, a droższy piaskowiec poszedł wyłącznie na naroża i obramienia okien — czyli tam, gdzie ściana się spotyka i ściera. W kuchni krawędzie to zwykle trzy rzeczy: nóż, którym kroisz wszystko, deska, na której to robisz, i garnek, w którym powstaje większość obiadów. Reszta spokojnie może być zwyczajna. Cztery średnie noże przegrywają z jednym dobrym.",
    },
    {
      question: "Czy Thermomix opłaca się przy rzadkim gotowaniu?",
      answer:
        "Szczerze — zwykle nie i nie będę tego naciągać. To jest droga krawędź, która zwraca się wtedy, gdy przechodzi przez nią większość posiłków, czyli przy gotowaniu prawie codziennym. Przy dwóch obiadach w tygodniu zostaje drogim sprzętem na blacie. Na prezentacji pytam o to na początku, bo od tej jednej liczby zależy, czy warto w ogóle rozmawiać dalej.",
    },
  ],

  geo: { lat: 51.014, lng: 15.8948 },
};
