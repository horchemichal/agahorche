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
 * MIKSTAT — powiat ostrzeszowski, woj. wielkopolskie.
 *   ⚠ TEN SAM POWIAT CO GRABÓW NAD PROSNĄ.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3018064 / 3018063).
 * MIASTO: 1 687 mieszkańców (GUS 31.12.2024) —
 *   POTWIERDZONE DWOMA ŹRÓDŁAMI. POWIERZCHNIA 2,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   669,4 os./km²; iloraz z 2,5 km² daje 674,8
 *   (rozbieżność 5,4), a z 2,49 km² — 677,5
 *   (rozbieżność 8,1). ŻADNA POWIERZCHNIA NIE DOMYKA.
 *   ⚠⚠⚠ POWIERZCHNI ODTWORZONEJ (2,52 km²) NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   WYSOKOŚĆ: 215 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 5 798 osób, 87,2 km² (8 721 ha),
 *   gęstość 67 os./km².
 *   ⚠ [ZW — 5 798 / 87,2 = 66,49. Różnica 0,51.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 7 SOŁECTW i 12 MIEJSCOWOŚCI —
 *   NAJMNIEJ SOŁECTW W CAŁEJ SERII WIELKOPOLSKIEJ.
 *   PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — proporcje sołectw
 *   do miejscowości mam zajęte (Gołańcz, Lwówek).
 *   ⚠⚠ OBRĘBÓW (9) NIE PODAJĘ.
 *   ⚠⚠ LESISTOŚCI NIE USTALONO [NP].
 *   MIEJSCOWOŚCI (część): Komorów, Kaliszkowice
 *   Kaliskie, Kaliszkowice Ołobockie, Kotłów,
 *   Biskupice Zabaryczne, Przedborów, Mikstat-Pustkowie.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LOKACJA: 1366 R., na prawie magdeburskim.
 *   NAJSTARSZY ZNANY DOKUMENT to UMOWA SPRZEDAŻY
 *   URZĘDU WÓJTOWSKIEGO Z 1366 R.
 *   ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — kąt „najstarszy ślad
 *   w cudzych papierach" ZAJĘTY (Raszków). PODAJĘ
 *   JAKO FAKT W SEKCJI LICZB.
 * ⚠ GEO: 51,5321 / 17,9738.
 *
 * ⚠⚠ ODMIANA:
 *   D. do MIKSTATU · Ms. w MIKSTACIE ·
 *   N. Mikstatem · C. Mikstatowi.
 *   PRZYMIOTNIK: MIKSTACKI. UŻYWAM.
 *   ⚠⚠⚠ PUŁAPKA: przysłowie ludowe używa formy
 *   „z MIKSTATA". ⚠⚠⚠ W TEKŚCIE PISZĘ „DO MIKSTATU";
 *   formy gwarowej NIE UŻYWAM I PRZYSŁOWIA NIE CYTUJĘ.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TO SAMO W INNYM JĘZYKU WYGLĄDA
 *   JAK COŚ NOWEGO:
 *   NAZWĘ MIKSTAT TŁUMACZY SIĘ JAKO PRZEKŁAD NAZWY
 *   STARSZEJ WSI, OBOK KTÓREJ MIASTO ULOKOWANO:
 *   KOMORÓW → komar → niemieckie „Mücke" + „Stadt".
 *   KOMORÓW ISTNIEJE DO DZIŚ jako odrębna wieś
 *   i sołectwo tej samej gminy.
 *   NAZWA, KTÓRA WYGLĄDA NA ZUPEŁNIE NOWĄ I OBCĄ,
 *   JEST TYM SAMYM SŁOWEM, TYLE ŻE W INNYM JĘZYKU.
 *   ⚠⚠⚠ TO OBJAŚNIENIE, NIE PEWNIK. PISZĘ „TAK SIĘ
 *   TĘ NAZWĘ TŁUMACZY" I MÓWIĘ WPROST, ŻE NIE JEST
 *   TO ROZSTRZYGNIĘTE.
 *   ⚠⚠⚠ FIGURY „OBJAŚNIENIE DOPISANE PÓŹNIEJ"
 *   NIE ROBIĘ — kąt ZAJĘTY (Tuliszków). Tam objaśnienie
 *   było MŁODSZE OD NAZWY I LUDOWE; tu chodzi
 *   o PRZEKŁAD, czyli o to samo słowo w dwóch językach.
 *
 * KĄT: TO SAMO W INNYM JĘZYKU WYGLĄDA JAK COŚ NOWEGO
 * — o nazwach funkcji i technik, które brzmią jak
 * nowe czynności, a są nazwą czegoś, co doskonale
 * znacie. Kąt z Mikstatu: nazwa będąca przekładem
 * nazwy sąsiedniej wsi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nazwę Mikstat tłumaczy się jako przekład nazwy
 *   sąsiedniego Komorowa, który istnieje do dziś,
 *   i że to objaśnienie, a nie pewnik. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ROBI TO SAMO SŁOWNICTWO: obca
 *   albo fachowa nazwa sprawia, że znana czynność
 *   wygląda na nową umiejętność,
 * — ⚠⚠ ŻE TO DZIAŁA W DWIE STRONY: raz onieśmiela
 *   („nie umiem tego"), raz sprzedaje („to coś
 *   zupełnie nowego"),
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy każdej nazwie pytać,
 *   CO SIĘ FIZYCZNIE DZIEJE. Jeśli odpowiedź brzmi
 *   „miesza się i podgrzewa", to jest mieszanie
 *   i podgrzewanie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nazwy fachowe nie są
 *   oszustwem. Bywają potrzebne, bo precyzyjnie
 *   odróżniają rzeczy podobne — problem zaczyna się
 *   dopiero wtedy, gdy zastępują wyjaśnienie,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIA OPISUJE SIĘ
 *   NAZWAMI FUNKCJI, KTÓRE BRZMIĄ JAK NOWE CZYNNOŚCI.
 *   MÓWIĘ WPROST, ŻE SAMA STARAM SIĘ TEGO NIE ROBIĆ
 *   I ŻE NA PREZENTACJI NAZYWAM RZECZY PO POLSKU.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OBJAŚNIENIE DOPISANE PÓŹNIEJ — kąt zajęty
 *   (Tuliszków). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam objaśnienie było
 *   MŁODSZE OD NAZWY i ludowe; tu chodzi o PRZEKŁAD —
 *   to samo słowo w dwóch językach. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRAWA DOSTAŁA MIEJSCOWOŚĆ O INNEJ NAZWIE
 *   — kąt zajęty (Borek Wielkopolski). Tam nazwa
 *   MIASTA SIĘ ZMIENIAŁA; tu miasto od początku ma
 *   swoją, a sąsiednia wieś istnieje równolegle.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO NAZWISKO OD MIEJSCA — kąt zajęty
 *   (Miłosław).
 * — ⚠⚠ ZERO NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ — kąt
 *   zajęty (Sompolno).
 * — ⚠⚠ ZERO NAJSTARSZY ŚLAD W CUDZYCH PAPIERACH —
 *   kąt zajęty (Raszków). DLATEGO UMOWĘ Z 1366 R.
 *   PODAJĘ BEZ FIGURY.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠⚠ TU RYZYKO PODWYŻSZONE, BO KĄT DOTYCZY NAZW
 *   FUNKCJI. MOGĘ NAZWAĆ CZYNNOŚĆ (mieszanie,
 *   podgrzewanie, gotowanie na parze), ALE NIE PODAJĘ
 *   ŻADNYCH PARAMETRÓW.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO WYŚMIEWANIA CZYJEGOŚ SŁOWNICTWA
 *   ANI SUGEROWANIA, ŻE KTOŚ CZEGOŚ NIE ROZUMIE.
 * — ⚠⚠⚠ ŻADNEGO WĄTKU NARODOWOŚCIOWEGO. Przekład
 *   podaję jako fakt językowy i nic poza tym.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 2,49 ani 2,52 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE TWIERDZĘ, że etymologia jest pewna.
 * — NIE CYTUJĘ przysłowia ani formy „z Mikstata".
 * — NIE PODAJĘ liczby obrębów ani lesistości.
 * — NIE ROBIĘ FIGURY z liczby siedmiu sołectw.
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mikstat leży w powiecie ostrzeszowskim, liczy
 *   1 687 mieszkańców (GUS, 31.12.2024) na 2,5 km²
 *   i leży 215 m n.p.m.,
 * — cała gmina miejsko-wiejska to 5 798 osób
 *   na 87,2 km² (8 721 ha), czyli 67 osób na kilometr
 *   kwadratowy,
 * — gmina ma 7 sołectw i 12 miejscowości — najmniej
 *   sołectw spośród gmin, o których pisałam
 *   w Wielkopolsce,
 * — miasto lokowano w 1366 r. na prawie magdeburskim,
 *   a najstarszy znany dokument z tego roku to umowa
 *   sprzedaży urzędu wójtowskiego,
 * — nazwę Mikstat tłumaczy się jako przekład nazwy
 *   sąsiedniej wsi Komorów, która istnieje do dziś
 *   jako odrębna wieś i sołectwo tej samej gminy,
 * — w gminie leżą m.in. Komorów, Kotłów, Przedborów,
 *   Mikstat-Pustkowie oraz Kaliszkowice Kaliskie
 *   i Kaliszkowice Ołobockie.
 */
export const MIKSTAT: CityContent = {
  slug: "mikstat",
  h1: "Thermomix Mikstat – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mikstat — cena i prezentacja",
  seoDescription:
    "Thermomix w Mikstacie w powiecie ostrzeszowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mikstat — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mikstacie pod Ostrzeszowem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mikstatu w powiecie ostrzeszowskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedmiu sołectw w gminie.",

  highlights: highlightyStandardowe("Mikstat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nazwa, która wygląda na obcą, jest przekładem nazwy wsi obok.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mikstacie – jak wygląda prezentacja?",
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
      id: "inne-slowo",
      heading: "To samo w innym języku wygląda jak coś nowego",
      paragraphs: [
        "Nazwa Mikstat wygląda na obcą i na niepodobną do niczego w okolicy. Tymczasem tłumaczy się ją jako przekład nazwy starszej wsi, obok której miasto ulokowano w 1366 roku: Komorów, od komara, oddany w innym języku jako „komar” i „miasto”. Zaznaczam od razu, że to objaśnienie, a nie pewnik — takich objaśnień nazw zwykle nie da się rozstrzygnąć ostatecznie.",
        "Najciekawsze jest to, że Komorów nie zniknął. Istnieje do dziś jako odrębna wieś i sołectwo tej samej gminy. Dwie nazwy leżą kilka kilometrów od siebie i wyglądają, jakby nie miały ze sobą nic wspólnego — a są, jeśli wierzyć temu objaśnieniu, tym samym słowem powiedzianym dwa razy, w dwóch językach.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, do którego nazwy dopisano ludowe objaśnienie kilkaset lat młodsze od niej samej. Tu jest inaczej — nie chodzi o dopisaną historyjkę, tylko o przekład, czyli o to samo słowo w dwóch językach. I drugie rozróżnienie: pisałam też o mieście, którego nazwa zmieniła się dwukrotnie przy zachowanych prawach; tutaj miasto od początku ma swoją, a wieś obok istnieje równolegle.",
        "Piszę o tym, bo w kuchni to samo zjawisko kosztuje ludzi więcej, niż się wydaje.",
        "Znana czynność, nazwana obco albo fachowo, natychmiast wygląda na nową umiejętność. „Emulgowanie” to mieszanie dwóch rzeczy, które nie chcą się połączyć. „Blanszowanie” to krótkie zanurzenie we wrzątku. „Temperowanie” to doprowadzanie do właściwej temperatury i pilnowanie jej. Każda z tych rzeczy jest prosta, a każda brzmi jak coś, czego trzeba się nauczyć.",
        "Działa to w dwie strony i obie są niedobre. Raz onieśmiela — „to nie dla mnie, ja się na tym nie znam” — choć chodzi o czynność wykonywaną co tydzień. Raz sprzedaje: to samo, nazwane inaczej, wygląda na nowość, za którą warto dopłacić.",
        "Ruch jest jeden i sprawdza się zawsze: przy każdej nazwie zapytać, co się fizycznie dzieje. Jeśli odpowiedź brzmi „miesza się i podgrzewa”, to jest mieszanie i podgrzewanie — i nie ma żadnego powodu, żeby czuć się gorzej dlatego, że ktoś nazwał to inaczej.",
        "Uczciwie o drugiej stronie, bo nazwy fachowe nie są oszustwem. Bywają naprawdę potrzebne, bo precyzyjnie odróżniają rzeczy podobne, a przy przepisie od kogoś z zagranicy jedna precyzyjna nazwa oszczędza akapit tłumaczenia. Problem zaczyna się dopiero wtedy, gdy nazwa zastępuje wyjaśnienie zamiast je skracać.",
        "I uczciwie o sprzęcie, bo tu jestem stroną. Urządzenia opisuje się nazwami funkcji, które brzmią jak zupełnie nowe czynności, i mój też. Staram się tego nie robić: na prezentacji nazywam rzeczy po polsku i mówię, co dokładnie się dzieje w naczyniu, zamiast wymieniać nazwy trybów. Jeśli po takim opisie stwierdzicie, że robicie to samo ręcznie bez problemu — to też jest uczciwa odpowiedź.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mikstacie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mikstacie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mikstatu",
      paragraphs: [
        "Mikstat leży w powiecie ostrzeszowskim, liczy 1 687 mieszkańców (GUS, 31.12.2024) na dwóch i pół kilometra kwadratowego i leży dwieście piętnaście metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo żadna z dostępnych powierzchni nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 5 798 osób na osiemdziesięciu siedmiu i dwóch dziesiątych kilometra kwadratowego, czyli na ośmiu tysiącach siedmiuset dwudziestu jeden hektarach, co daje sześćdziesiąt siedem osób na kilometr. Ma siedem sołectw i dwanaście miejscowości — to najmniej sołectw spośród wszystkich gmin, o których pisałam w Wielkopolsce. Miasto lokowano w 1366 roku na prawie magdeburskim, a najstarszy znany dokument z tego roku to umowa sprzedaży urzędu wójtowskiego.",
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

  districtsHeading: "Do których części gminy Mikstat dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedmiu sołectw w gminie. W gminie leżą między innymi: Komorów, Kotłów, Przedborów, Mikstat-Pustkowie oraz Kaliszkowice Kaliskie i Kaliszkowice Ołobockie. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: Mikstat-Pustkowie to osobna miejscowość, a nie część miasta, a Kaliszkowice występują w dwóch wersjach — Kaliskie i Ołobockie — więc przy umawianiu warto podać pełną nazwę. Wieś Przedborów bywa mylona z Przedczem, osobnym miastem w powiecie kolskim. Druga, językowa: mówi się „do Mikstatu” i „w Mikstacie”, a przymiotnik brzmi „mikstacki”.",
  ],
  districts: [],

  nearbyHeading: "Poza Mikstat też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ostrzeszowa, Grabowa nad Prosną, Ostrowa Wielkopolskiego, Odolanowa, Kępna i Raszkowa — wszędzie bezpłatnie, tak samo jak w samym Mikstacie.",
  ],
  nearbyTowns: ["Ostrzeszów", "Grabów nad Prosną", "Ostrów Wielkopolski", "Odolanów", "Kępno", "Raszków"],

  about: blokOMnie("do Mikstatu", "w Mikstacie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mikstatu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedmiu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa: Mikstat-Pustkowie to osobna miejscowość, a nie część miasta, a Kaliszkowice są dwie — Kaliskie i Ołobockie. Językowo: „do Mikstatu” i „w Mikstacie”, przymiotnik „mikstacki”.",
    },
    ...faqWspolne("w Mikstacie"),
    {
      question: "Nie znam fachowych nazw kulinarnych i trochę mnie to blokuje. Czy to problem?",
      answer:
        "Nie, i zwykle okazuje się, że te czynności robicie od lat. Mikstat jest tu dobrym obrazem: nazwa wygląda na obcą, a tłumaczy się ją jako przekład nazwy sąsiedniej wsi Komorów, która istnieje do dziś — to samo słowo powiedziane dwa razy, w dwóch językach. W kuchni działa to identycznie. „Emulgowanie” to mieszanie dwóch rzeczy, które nie chcą się połączyć. „Blanszowanie” to krótkie zanurzenie we wrzątku. Ruch jest prosty: przy każdej nazwie zapytajcie, co się fizycznie dzieje. Nazwy fachowe nie są oszustwem — bywają potrzebne, bo precyzyjnie odróżniają rzeczy podobne — ale nie powinny zastępować wyjaśnienia.",
    },
    {
      question: "Czy funkcje urządzenia to naprawdę coś nowego, czy tylko inaczej nazwane?",
      answer:
        "Jedno i drugie, zależnie od funkcji — i wolę powiedzieć to wprost, bo jestem tu stroną. Część nazw opisuje czynności, które znacie i wykonujecie ręcznie: mieszanie, podgrzewanie, gotowanie na parze, ucieranie. Nowe jest to, że dzieją się w jednym naczyniu, bez pilnowania i z powtarzalnym wynikiem — a nie to, że ktoś wymyślił nieznaną czynność. Dlatego na prezentacji nazywam rzeczy po polsku i mówię, co dokładnie dzieje się w środku, zamiast wymieniać nazwy trybów. Jeśli po takim opisie uznacie, że robicie to samo ręcznie bez problemu, to też jest uczciwa odpowiedź i nie będę przekonywać inaczej.",
    },
  ],

  geo: { lat: 51.5321, lng: 17.9738 },
};
