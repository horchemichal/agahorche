import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * NOWE MIASTO LUBAWSKIE — gmina MIEJSKA w powiecie
 * nowomiejskim. MIASTO 10 058 (GUS 31.12.2024), 11,4 km².
 * ⚠ ISTNIEJE OSOBNA GMINA WIEJSKA NOWE MIASTO LUBAWSKIE:
 * 8 438 osób, 138,5 km², 24 wsie i osady. Ma siedzibę
 * w mieście, ALE MIASTO DO NIEJ NIE NALEŻY. NIE SUMUJĘ.
 * Miasto jako gmina miejska NIE MA SOŁECTW.
 *
 * ⚠⚠ NOWE MIASTO LUBAWSKIE TO NIE JEST LUBAWA. Lubawa leży
 * w powiecie iławskim i jest osobnym miastem. FAQ MUSI to
 * rozróżniać. Rozróżnić też trzeba Nowe Miasto nad Pilicą
 * (mazowieckie) i Nowe Miasto nad Wartą (wielkopolskie).
 *
 * 1325 — ZAŁOŻENIE OSADY przez komtura krzyżackiego Ottona
 * von Luttenberga. 1353 — PIERWSZY PRZYWILEJ LOKACYJNY na
 * prawie chełmińskim, nadał WIELKI MISTRZ WINRYCH VON
 * KNIPRODE. PODAJĘ OBIE DATY — mylenie ich jest częste.
 * OBALONE: „prawa nadał biskup chełmiński" — nadał je zakon.
 * Biskupi mieli 1/3 ziemi lubawskiej (stąd Lubawa jako miasto
 * biskupie), ale NIE Nowe Miasto.
 * PRZYNALEŻNOŚĆ: ZIEMIA LUBAWSKA (część ziemi chełmińskiej).
 * NIE MAZURY, NIE WARMIA. W 1242 r. ziemię lubawską
 * podzielono: 2/3 zakonowi, 1/3 biskupom chełmińskim.
 * Po 1466 w Prusach Królewskich.
 *
 * ZABYTKI: kościół św. Tomasza Apostoła — KOLEGIATA
 * i BAZYLIKA MNIEJSZA, budowa od poł. XIV w.; figura Matki
 * Bożej Łąkowskiej z XV w., przeniesiona z Łąk Bratiańskich.
 * MURY MIEJSKIE od 1325 r., grubość 1–3 m, wysokość 4–5 m;
 * 21 BASZT ŁUPINOWYCH, 3 wieże okrągłe, podwójna fosa.
 * Zachowane dwie bramy gotyckie: BRODNICKA i ŁĄKOWSKA;
 * trzecia rozebrana w 1860 r. UKŁAD URBANISTYCZNY WPISANY
 * DO REJESTRU ZABYTKÓW W 1957 r.
 * RZEKA DRWĘCA — miasto powstało w jej zakolu.
 * REZERWAT „RZEKA DRWĘCA" — utworzony 1961 r., 1247,98 ha,
 * ichtiologiczny. ⚠ Rezerwat rozciąga się na dwa
 * województwa — NIE TWIERDZĘ, że cały leży w tej gminie.
 * MIASTO NALEŻY DO SIECI CITTASLOW. ROKU PRZYSTĄPIENIA
 * NIE PODAJĘ.
 * Dawny kościół ewangelicki z pocz. XX w. — dziś kinoteatr;
 * Muzeum im. Działyńskich w „Domu Aneczki".
 * 1996 — odkrycie dukatów weneckich z XIII–XIV w.
 *
 * KĄT: DANIA UKŁADANE WARSTWAMI — czyli gdzie kończy się
 * urządzenie, a zaczynają ręce. Kąt od murów z dwudziestu
 * jeden baszt: konstrukcji, w której liczy się to, co na czym
 * stoi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dania warstwowe to najlepszy przykład podziału pracy
 *   między urządzeniem a rękami: ono robi składowe, człowiek
 *   składa,
 * — że urządzenie nie ułoży warstw i nigdy nie ułoży —
 *   i że to nie jest wada,
 * — co realnie przejmuje: sos beszamelowy bez grudek, farsz,
 *   masę serową, purée, posiekane warzywa, starty ser,
 *   kruszonkę,
 * — że przy warstwach kolejność i wilgotność decydują
 *   o wszystkim, a nie sam skład,
 * — że najczęstszy błąd to zbyt mokre warstwy — woda schodzi
 *   w dół i rozmiękcza spód,
 * — że warstwy warto planować od dołu: to, co ma trzymać,
 *   idzie na spód,
 * — i ODMOWA: nie doradzam nic o odgrzewaniu i przechowywaniu
 *   dań warstwowych.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PRZEPISÓW ani proporcji.
 * — ŻADNYCH PORAD o przechowywaniu i odgrzewaniu.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej ani roku
 *   przystąpienia do Cittaslow.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckich nazw miasta ani średniowiecznej
 *   nazwy łacińsko-niemieckiej.
 * — ZERO roku 1920 i wątku plebiscytowego.
 * — ZERO września 1939 i ofiar cywilnych.
 * — ZERO stycznia 1945.
 * — ZERO wysiedleń i akcji „Wisła".
 * — NIE ROBIĘ TŁA z wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sałatka jarzynowa"
 * (Krynica Morska) dotyczy dania z wielu składników
 * mieszanych. „Farsz" (Działoszyn) dotyczy nadzienia jako
 * półproduktu. „Sernik i masy" dotyczą wypieków. „Brak
 * piekarnika" dotyczy pieczenia. Tutaj chodzi o KONSTRUKCJĘ
 * dania: o to, co na czym leży i dlaczego kolejność ma
 * znaczenie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ ludności gminy miejskiej i wiejskiej.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow.
 * — NIE TWIERDZĘ, że cały rezerwat Drwęcy leży w tej gminie.
 * — NIE PODAJĘ wydarzeń cyklicznych — żadnego nie
 *   potwierdzono, więc nie wymyślam nazw.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — „Żytnia z Rynku" pochodzi z Grodziczna
 *   w tym samym powiecie, ale to inna gmina.
 * — NIE PODAJĘ numerów rejestru zabytków poza układem
 *   urbanistycznym (1957, bez numeru).
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 10 058 mieszkańców; osobna gmina wiejska o tej
 *   samej nazwie liczy 8 438 osób i obejmuje 24 miejscowości,
 * — osadę założono w 1325 r., przywilej lokacyjny na prawie
 *   chełmińskim nadał w 1353 r. wielki mistrz krzyżacki
 *   Winrych von Kniprode,
 * — miasto leży na ziemi lubawskiej, nie na Mazurach ani
 *   na Warmii,
 * — kościół świętego Tomasza Apostoła jest kolegiatą
 *   i bazyliką mniejszą; jest w nim figura Matki Bożej
 *   Łąkowskiej z XV w.,
 * — mury miejskie budowane od 1325 r., grube na 1–3 m,
 *   z dwudziestoma jeden basztami łupinowymi i podwójną fosą;
 *   zachowały się dwie bramy gotyckie,
 * — układ urbanistyczny wpisano do rejestru zabytków
 *   w 1957 r.,
 * — miasto powstało w zakolu Drwęcy; rezerwat ichtiologiczny
 *   „Rzeka Drwęca” utworzono w 1961 r.,
 * — Nowe Miasto Lubawskie należy do międzynarodowej sieci
 *   Cittaslow,
 * — w dawnym kościele ewangelickim mieści się kinoteatr,
 *   a w „Domu Aneczki” Muzeum im. Działyńskich.
 */
export const NOWE_MIASTO_LUBAWSKIE: CityContent = {
  slug: "nowe-miasto-lubawskie",
  h1: "Thermomix Nowe Miasto Lubawskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowe Miasto Lubawskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowym Mieście Lubawskim: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowe Miasto Lubawskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Mieście Lubawskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Miasta Lubawskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi wokół niego.",

  highlights: highlightyStandardowe("Nowe Miasto Lubawskie i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Urządzenie zrobi wszystkie warstwy. Ułożyć je musicie sami.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Mieście Lubawskim – jak wygląda prezentacja?",
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
      id: "warstwy",
      heading: "Dwadzieścia jeden baszt i podwójna fosa — czyli o daniach układanych warstwami",
      paragraphs: [
        "Nowe Miasto Lubawskie założono w 1325 roku, a przywilej lokacyjny na prawie chełmińskim nadał mu w 1353 wielki mistrz krzyżacki Winrych von Kniprode — nie biskup chełmiński, choć tak się często pisze; biskupi mieli trzecią część ziemi lubawskiej i to od nich prawa dostała sąsiednia Lubawa, zupełnie inne miasto. Mury zaczęto stawiać razem z osadą: grube na jeden do trzech metrów, z dwudziestoma jeden basztami łupinowymi, trzema okrągłymi wieżami i podwójną fosą. Do dziś stoją dwie gotyckie bramy, a cały układ urbanistyczny wpisano do rejestru zabytków w 1957 roku.",
        "Miasto zbudowane warstwami — fosa, mur, baszta, zabudowa — jest dobrym miejscem na stronę o daniach, które też są konstrukcją: lasagne, moussace, zapiekankach, sałatkach warstwowych, tortach z naleśników, szarlotkach z kruszonką.",
        "Te dania są najlepszym przykładem tego, jak naprawdę działa podział pracy z tym urządzeniem. Ono robi składowe. Wy składacie. I to nie jest kompromis ani niedoróbka — tak to po prostu wygląda.",
        "Co realnie przejmuje, i jest tego sporo: beszamel bez grudek, bo miesza bez przerwy i nie odchodzi od garnka. Farsz mięsny albo warzywny w tym samym naczyniu. Masę serową. Purée. Posiekane warzywa, starty ser, kruszonkę, sos pomidorowy. Przy daniu z sześcioma składowymi to jest sześć rzeczy zrobionych bez sześciu garnków — a właśnie te garnki, nie samo pieczenie, są w tych daniach najbardziej męczące.",
        "Czego nie zrobi nigdy: nie ułoży. Nie rozłoży makaronu, nie rozprowadzi sosu, nie posypie serem. Ostatnie piętnaście minut takiego dania to zawsze ręce i to się nie zmieni.",
        "Przy warstwach o wszystkim decydują dwie rzeczy, których nie widać w przepisie: kolejność i wilgotność. Najczęstszy błąd to warstwy zbyt mokre. Woda zawsze schodzi w dół, zbiera się na spodzie i rozmiękcza to, co miało trzymać całość — dlatego zapiekanka wygląda dobrze w formie, a rozpada się na talerzu. Warzywa puszczające wodę warto wcześniej podsuszyć albo odcisnąć, a sos zrobić gęstszy, niż wydaje się potrzebne.",
        "Z tego wynika prosta zasada: warstwy planuje się od dołu. Na spód idzie to, co ma trzymać i co zniesie wilgoć — makaron, ziemniaki, gęsty sos. To, co jest mokre, wyżej. To, co ma być chrupiące, na samą górę i nigdzie indziej.",
        "I granica: nie doradzę Wam nic o tym, jak długo takie danie może stać i jak je odgrzewać. Dania warstwowe robi się zwykle w dużych porcjach i na kilka dni, więc pytanie pada często — ale to jest bezpieczeństwo żywności, a nie technika kuchenna, i nie zamierzam w tej sprawie zgadywać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Mieście Lubawskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli robicie zapiekanki albo lasagne — powiedzcie przy umawianiu. Beszamel bez grudek to najprostsza rzecz do pokazania i najlepiej tłumaczy, po co komu takie urządzenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Mieście Lubawskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowomiejskiej rodziny",
      paragraphs: [
        "Miasto liczy nieco ponad dziesięć tysięcy mieszkańców. Ważna uwaga, bo pomyłka jest tu wyjątkowo częsta: gmina wiejska Nowe Miasto Lubawskie to odrębna jednostka z blisko ośmioma i pół tysiącami mieszkańców, która ma siedzibę w mieście, ale samego miasta nie obejmuje. Osadę założono w 1325 roku, a prawa miejskie na prawie chełmińskim nadano jej w 1353. Historycznie to ziemia lubawska, część ziemi chełmińskiej — ani Mazury, ani Warmia. Najważniejsze zabytki to kolegiata świętego Tomasza Apostoła, będąca bazyliką mniejszą, z piętnastowieczną figurą Matki Bożej Łąkowskiej, oraz mury miejskie z dwudziestoma jeden basztami i dwiema zachowanymi bramami gotyckimi. Miasto powstało w zakolu Drwęcy, na której w 1961 roku utworzono rezerwat ichtiologiczny, i należy do międzynarodowej sieci Cittaslow.",
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

  districtsHeading: "Do których części Nowego Miasta Lubawskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, a także do wsi leżących wokół niego, w gminie wiejskiej Nowe Miasto Lubawskie. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowe Miasto Lubawskie też przyjadę",
  nearbyParagraphs: [
    "Lubawa, Iława, Brodnica, Kurzętnik, Grodziczno i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubawa", "Iława", "Susz"],

  about: blokOMnie("do Nowego Miasta Lubawskiego", "w Nowym Mieście Lubawskim i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Miasta Lubawskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi wokół niego. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwa rozróżnienia dla porządku: Nowe Miasto Lubawskie to nie Lubawa — to dwa osobne, sąsiadujące miasta w różnych powiatach. I nie ma nic wspólnego z Nowym Miastem nad Pilicą ani nad Wartą.",
    },
    ...faqWspolne("w Nowym Mieście Lubawskim"),
    {
      question: "Czy Thermomix zrobi lasagne albo zapiekankę?",
      answer:
        "Zrobi wszystkie składowe: beszamel bez grudek, farsz, sos, purée, starty ser, kruszonkę — czyli to, co normalnie zajmuje kilka garnków. Nie ułoży za to warstw i nie posypie serem. Ostatnie kilkanaście minut takiego dania to zawsze ręce.",
    },
    {
      question: "Dlaczego moja zapiekanka rozpada się na talerzu?",
      answer:
        "Najczęściej dlatego, że warstwy były za mokre. Woda schodzi w dół, zbiera się na spodzie i rozmiękcza to, co miało trzymać całość. Warzywa puszczające wodę warto wcześniej odcisnąć albo podsuszyć, a sos zrobić gęstszy, niż wydaje się potrzebne.",
    },
    {
      question: "Jak długo mogę trzymać gotową zapiekankę i jak ją odgrzewać?",
      answer:
        "Tego nie rozstrzygnę. Dania warstwowe robi się zwykle na kilka dni, więc pytanie pada często — ale przechowywanie i odgrzewanie to bezpieczeństwo żywności, a nie technika kuchenna, i nie będę w tej sprawie zgadywać.",
    },
  ],

  geo: { lat: 53.4223, lng: 19.5922 },
};
