import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * SUPRAŚL — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 4 325, GMINA 18 423 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 5,7 km², GMINY 188,6 km².
 * 43 MIEJSCOWOŚCI. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 4 800 — ZAWYŻONE.
 * ⚠ LUDNOŚĆ GMINY WZROSŁA O 51,7% w latach 2002–2024 —
 * wyjątek w skali regionu. Miasto nie rośnie, gmina tak.
 *
 * ⚠⚠ UZDROWISKO — SPRAWDZONE SZCZEGÓLNIE DOKŁADNIE.
 * Rozporządzenie Rady Ministrów z 28 GRUDNIA 2001 r.,
 * Dz.U. 2002 Nr 1 poz. 5. Status obowiązuje OD 23 STYCZNIA
 * 2002 r. i OBOWIĄZUJE NADAL. Typ: UZDROWISKO NIZINNE,
 * KLIMATYCZNO-BOROWINOWE. W województwie podlaskim są dwa
 * uzdrowiska: AUGUSTÓW I SUPRAŚL.
 * Statut Uzdrowiska: uchwała Rady Miejskiej Nr V/27/2015
 * z 29 stycznia 2015 r., później zmieniana.
 * ⚠⚠ STATUS PODAJĘ WYŁĄCZNIE JAKO FAKT ADMINISTRACYJNY.
 * ZERO kierunków leczniczych, ZERO borowiny jako leku,
 * ZERO tężni jako terapii, ZERO jakichkolwiek twierdzeń
 * o zdrowiu. TWARDA GRANICA.
 * ⚠ Plik GUS 2000–2010 błędnie przypisuje Gołdap do podlaskiego
 * — NIE CYTUJĘ z niego geografii.
 *
 * PARK KRAJOBRAZOWY PUSZCZY KNYSZYŃSKIEJ im. prof. Witolda
 * Sławińskiego — uchwała z 24 MAJA 1988 r., park 72 860 ha,
 * otulina 53 827 ha, 11 gmin.
 * ⚠⚠ SUPRAŚL JEST JEDYNYM OŚRODKIEM MIEJSKIM POŁOŻONYM
 * BEZPOŚREDNIO W GRANICACH PARKU.
 * Puszcza zajmuje 70% powierzchni gminy; w parku 82%
 * powierzchni to lasy, ponad 800 GATUNKÓW ROŚLIN,
 * ok. 160 gatunków ptaków, wolno żyjące stado żubrów.
 * Rzeki Supraśl, Słoja, Sokłoda — łącznie 140 km szlaków
 * kajakowych.
 * Ciekawostka: patron parku, prof. WITOLD SŁAWIŃSKI,
 * jest wskazywany jako prekursor starań o status uzdrowiska.
 *
 * HISTORIA I ZABYTKI:
 * 1501 r. — fundacja monasteru; główny fundator wojewoda
 * nowogródzki ALEKSANDER CHODKIEWICZ.
 * PAŁAC ARCHIMANDRYTÓW — XVII w., dziś MUZEUM IKON, otwarte
 * 2006, ekspozycja stała od LUTEGO 2007; zbiory ok. 1 200 IKON,
 * na wystawie ok. 300 w 9 SALACH.
 * PAŁAC BUCHHOLTZA — eklektyczny (neorenesans i secesja),
 * od 1959 siedziba szkoły plastycznej.
 * ⚠ ROKU BUDOWY NIE PODAJĘ.
 * DOM OGRODNIKA — drewniany, przełom XVIII/XIX w.
 * DOMY TKACZY przy ul. 3 Maja — parterowe, dach dwuspadowy
 * z naczółkami, pierwotnie bielone ściany i gontowe dachy.
 * Inicjator: fabrykant WILHELM FRYDERYK ZACHERT.
 * ⚠ LICZBY ZACHOWANYCH DOMÓW TKACZY NIE PODAJĘ.
 *
 * ⚠⚠ PRZEMYSŁ — PODSTAWA KĄTA.
 * Zachert dzierżawi dobra od 1834 r., kupuje w 1883 r.
 * W CIĄGU 20 LAT PRZEKSZTAŁCIŁ 300-OSOBOWĄ OSADĘ KLASZTORNĄ
 * W MIASTO LICZĄCE 3 450 MIESZKAŃCÓW.
 * W 1922 r. działało tu 9 PRZEDSIĘBIORSTW WŁÓKIENNICZYCH
 * zatrudniających blisko 600 robotników.
 * ⚠ SPRZECZNOŚĆ: portal gminny mówi, że Zachert przybył
 * „z Łodzi", opracowanie lokalne — że ze ZGIERZA.
 * NIE PODAJĘ SKĄD PRZYBYŁ.
 *
 * KRZEMIANKA — kopalnia krzemienia sprzed ok. 3000 lat.
 * ⚠ NIE ROZWIJAM — wątek wykorzystany przy Wasilkowie.
 * SPOTKANIA Z NATURĄ I SZTUKĄ „UROCZYSKO" — impreza
 * wieloletnia. ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ.
 * ⚠ ROKU NADANIA, UTRATY ANI PRZYWRÓCENIA PRAW MIEJSKICH
 * NIE PODAJĘ — portal gminny mówi tylko „w I poł. XIX w.".
 * SUPRAŚL NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: GOTOWANIE W OBCEJ KUCHNI — u rodziny, na wynajmie,
 * na wyjeździe.
 * Kąt od miasta uzdrowiskowego i turystycznego, w którym
 * ludzie mieszkają tymczasowo, oraz od osady, która w dwadzieścia
 * lat urosła dziesięciokrotnie, bo zjechali do niej przyjezdni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gotowanie w cudzej kuchni jest umiejętnością osobną
 *   i nikt o niej nie pisze,
 * — CO ZAWSZE JEST INNE: moc palnika, grubość dna, ostrość
 *   noży, rozmieszczenie wszystkiego, brak przypraw,
 *   których używacie odruchowo,
 * — że dlatego pierwszy obiad u teściów albo w wynajętym
 *   domku prawie zawsze wychodzi gorzej — i to nie jest
 *   kwestia stresu, tylko sprzętu,
 * — STRATEGIA: gotować dania odporne, nie popisowe;
 *   wybierać takie, które wybaczają błąd,
 * — że w obcej kuchni najpierw się rozgląda, a potem decyduje
 *   co ugotować — odwrotnie niż w domu,
 * — CO WARTO ZE SOBĄ WOZIĆ, jeśli gotuje się poza domem
 *   często: własny nóż i własną sól,
 * — UCZCIWIE: to urządzenie jest ciężkie i nie jest sprzętem
 *   podróżnym. Wożenie go na wakacje to udręka,
 * — ALE ma jedną zaletę, której nie doceniałam, zanim
 *   zobaczyłam to u klientek: jest ZAWSZE TAKIE SAMO,
 *   więc przewieziony do innej kuchni pracuje identycznie —
 *   to jedyny element, który się nie zmienia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. Status uzdrowiska
 *   podaję jako fakt prawny i nic poza tym. ZERO borowiny,
 *   ZERO kierunków leczniczych, ZERO tężni, ZERO diety
 *   uzdrowiskowej.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — MONASTER I MUZEUM IKON: wyłącznie jako zabytek i placówka
 *   muzealna. ZERO historii kasat, konwersji i sporów
 *   o własność. ZERO wątku prawosławno-katolickiego.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mała kuchnia i blat"
 * dotyczy własnej ciasnej kuchni. „Przeprowadzka" dotyczy
 * przenosin na stałe. „Jedzenie zabrane w drogę" dotyczy
 * pakowania jedzenia. „Gotowanie dla ekipy" dotyczy liczby
 * osób. Tutaj chodzi o GOTOWANIE NA CUDZYM SPRZĘCIE,
 * tymczasowo.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dat praw miejskich.
 * — NIE PODAJĘ kierunków leczniczych ani niczego o zdrowiu.
 * — NIE PODAJĘ roku budowy pałacu Buchholtza.
 * — NIE PODAJĘ, skąd przybył Zachert.
 * — NIE PODAJĘ liczby sołectw ani domów tkaczy.
 * — NIE PODAJĘ roku pierwszej edycji „Uroczyska".
 * — NIE PRZYPISUJĘ Supraślowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ miasta Supraśl z RZEKĄ SUPRAŚL ani z WASILKOWEM.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 4 325, gmina 18 423 mieszkańców na 188,6 km²,
 *   43 miejscowości; ludność gminy wzrosła o ponad połowę
 *   od 2002 r.,
 * — Supraśl ma status uzdrowiska nizinnego,
 *   klimatyczno-borowinowego od 23 stycznia 2002 r., nadany
 *   rozporządzeniem Rady Ministrów z 28 grudnia 2001 r.;
 *   w województwie podlaskim uzdrowiska są dwa, obok Augustowa,
 * — miasto jest jedynym ośrodkiem miejskim położonym
 *   bezpośrednio w granicach Parku Krajobrazowego Puszczy
 *   Knyszyńskiej im. prof. Witolda Sławińskiego, powołanego
 *   24 maja 1988 r. (park 72 860 ha, otulina 53 827 ha,
 *   11 gmin); puszcza zajmuje 70% powierzchni gminy, rośnie
 *   w parku ponad 800 gatunków roślin, a rzeki Supraśl, Słoja
 *   i Sokłoda dają łącznie 140 km szlaków kajakowych,
 * — monaster ufundowano w 1501 r., a głównym fundatorem był
 *   wojewoda nowogródzki Aleksander Chodkiewicz,
 * — w siedemnastowiecznym pałacu archimandrytów mieści się
 *   Muzeum Ikon, otwarte w 2006 r., z ekspozycją stałą
 *   od lutego 2007; zbiory liczą około 1 200 ikon, a na
 *   wystawie w dziewięciu salach pokazywanych jest około 300,
 * — eklektyczny pałac Buchholtza od 1959 r. mieści szkołę
 *   plastyczną,
 * — parterowe domy tkaczy przy ulicy 3 Maja, wzniesione
 *   z inicjatywy fabrykanta Wilhelma Fryderyka Zacherta,
 *   który w ciągu dwudziestu lat przekształcił trzystuosobową
 *   osadę w miasto liczące 3 450 mieszkańców; w 1922 r.
 *   działało tu dziewięć przedsiębiorstw włókienniczych
 *   zatrudniających blisko sześciuset robotników.
 */
export const SUPRASL: CityContent = {
  slug: "suprasl",
  h1: "Thermomix Supraśl – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Supraśl — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Supraślu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Supraśl — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Supraślu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Supraśla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Supraśl i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pierwszy obiad w cudzej kuchni prawie zawsze wychodzi gorzej. To nie stres — to sprzęt.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Supraślu – jak wygląda prezentacja?",
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
      id: "obca-kuchnia",
      heading: "Miasto ludzi przyjezdnych — czyli o gotowaniu w cudzej kuchni",
      paragraphs: [
        "Supraśl jest miastem, przez które ludzie przechodzą. Najpierw był monasterem założonym w 1501 roku z fundacji wojewody nowogródzkiego Aleksandra Chodkiewicza. Potem, w dziewiętnastym wieku, przyjechał tu fabrykant Wilhelm Fryderyk Zachert i w ciągu dwudziestu lat zmienił trzystuosobową osadę klasztorną w miasto liczące trzy i pół tysiąca mieszkańców — z parterowymi domami tkaczy przy dzisiejszej ulicy 3 Maja, które stoją do dziś. A od 23 stycznia 2002 roku Supraśl jest uzdrowiskiem, jednym z dwóch w województwie, więc znów przyjeżdżają tu ludzie na kilka tygodni, do cudzych mieszkań i cudzych kuchni.",
        "Właśnie o tym chcę napisać, bo to umiejętność, o której nie pisze absolutnie nikt: jak gotować w kuchni, która nie jest Wasza.",
        "Zdarza się to częściej, niż myślimy. U teściów w święta. W wynajętym domku na wakacjach. U siostry, gdy przyjechaliście pomóc. W mieszkaniu, do którego dopiero się wprowadzacie. I prawie zawsze pierwszy obiad wychodzi gorzej niż w domu.",
        "Ludzie tłumaczą to zdenerwowaniem. Ja twierdzę, że w dziewięciu przypadkach na dziesięć to nie stres, tylko sprzęt. Bo w cudzej kuchni inne jest wszystko, co decyduje o wyniku: moc palnika, grubość dna garnka, to, czy patelnia trzyma temperaturę, ostrość noży — zwykle żadna — rozmieszczenie rzeczy, przez które szukacie sitka pięć minut. I brak dwóch albo trzech przypraw, po które w domu sięgacie odruchowo, nawet o tym nie myśląc.",
        "Z tego wynika strategia, która naprawdę działa: w obcej kuchni gotuje się dania odporne, a nie popisowe. Odporne to takie, które wybaczają błąd — zupa, gulasz, coś duszonego, coś zapiekanego. Takie danie zniesie palnik o innej mocy i garnek o cienkim dnie. Ryba na patelni, karmel albo suflet ich nie zniosą.",
        "Druga rzecz to odwrócenie kolejności. W domu najpierw decydujecie, co ugotować, a potem to robicie. W obcej kuchni najpierw trzeba się rozejrzeć — sprawdzić, co jest, co działa i czego brakuje — a dopiero potem zdecydować. Piętnaście minut rozglądania oszczędza godzinę improwizowania.",
        "A jeśli ktoś gotuje poza domem często, są dwie rzeczy, które warto ze sobą wozić i obie są małe: własny nóż i własną sól. Nóż, bo to jedyne narzędzie, którego brak naprawdę boli, a cudze prawie nigdy nie są ostre. Sól, bo różne sole solą różnie i to jest ten składnik, przy którym najłatwiej pomylić się w nieznanej kuchni.",
        "Teraz o sprzęcie, którego stronę czytacie, i to uczciwie. To urządzenie jest ciężkie. Naprawdę ciężkie. Nie jest sprzętem podróżnym i wożenie go na wakacje to udręka, którą odradzam — chyba że jedziecie samochodem na dwa tygodnie w jedno miejsce.",
        "Jedną zaletę ma jednak w tym kontekście i przyznaję, że nie doceniałam jej, dopóki nie usłyszałam tego od klientek. Ono jest zawsze takie samo. Przewiezione do innej kuchni pracuje dokładnie tak, jak u Was — bo nie zależy od palnika, od garnka ani od tego, jak ktoś nastawił piekarnik. W kuchni, w której wszystko jest obce, to bywa jedyny element, który się nie zmienił. Kilka osób mówiło mi, że właśnie dlatego zabierają je do rodziny na święta.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Supraślu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli gotujecie w dwóch miejscach — w domu i w domku albo u rodziców — powiedzcie o tym przy umawianiu. To zmienia sens kilku rzeczy, o których zwykle opowiadam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Supraślu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla supraskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad cztery tysiące trzysta mieszkańców na niecałych sześciu kilometrach kwadratowych, a cała gmina przeszło osiemnaście tysięcy, w czterdziestu trzech miejscowościach — i jest to jedna z najszybciej rosnących gmin regionu. Od 23 stycznia 2002 roku Supraśl ma status uzdrowiska nizinnego, klimatyczno-borowinowego, nadany rozporządzeniem Rady Ministrów z 28 grudnia 2001; w województwie podlaskim uzdrowiska są dwa, obok Augustowa. To także jedyne miasto położone bezpośrednio w granicach Parku Krajobrazowego Puszczy Knyszyńskiej imienia profesora Witolda Sławińskiego, powołanego 24 maja 1988 roku — park ma prawie siedemdziesiąt trzy tysiące hektarów, obejmuje jedenaście gmin, a puszcza zajmuje siedemdziesiąt procent powierzchni gminy Supraśl. Rośnie tu ponad osiemset gatunków roślin, a rzeki Supraśl, Słoja i Sokłoda dają łącznie sto czterdzieści kilometrów szlaków kajakowych. Monaster ufundowano w 1501 roku; w siedemnastowiecznym pałacu archimandrytów mieści się dziś Muzeum Ikon, otwarte w 2006 roku, ze zbiorami liczącymi około tysiąca dwustu ikon.",
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

  districtsHeading: "Do których części gminy Supraśl dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Supraśl też przyjadę",
  nearbyParagraphs: [
    "Wasilków, Białystok, Czarna Białostocka, Michałowo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wasilków", "Białystok", "Czarna Białostocka", "Michałowo"],

  about: blokOMnie("do Supraśla", "w Supraślu i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Supraśla bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto Supraśl to nie to samo co rzeka Supraśl, nad którą leży też sąsiedni Wasilków.",
    },
    ...faqWspolne("w Supraślu"),
    {
      question: "Dlaczego obiad w cudzej kuchni wychodzi gorzej?",
      answer:
        "Zwykle nie z powodu stresu, tylko sprzętu. Inna jest moc palnika, grubość dna garnka, ostrość noży — zwykle żadna — i rozmieszczenie wszystkiego. Brakuje też dwóch czy trzech przypraw, po które w domu sięgacie odruchowo. Warto wtedy gotować dania odporne, które wybaczają błąd: zupę, gulasz, coś duszonego, a nie rybę na patelni czy karmel.",
    },
    {
      question: "Co warto wozić ze sobą, jeśli często gotuję poza domem?",
      answer:
        "Dwie rzeczy i obie są małe: własny nóż i własną sól. Nóż, bo cudze prawie nigdy nie są ostre, a to jedyne narzędzie, którego brak naprawdę przeszkadza. Sól, bo różne sole solą różnie i przy nieznanym składniku najłatwiej się pomylić.",
    },
    {
      question: "Czy Thermomix nadaje się do zabierania na wyjazdy?",
      answer:
        "Jest ciężki i nie jest sprzętem podróżnym — na krótki wyjazd raczej odradzam. Ma jednak jedną zaletę, którą klientki wymieniają same: jest zawsze taki sam. Przewieziony do innej kuchni pracuje identycznie, bo nie zależy od palnika ani od garnka. W kuchni, w której wszystko jest obce, bywa jedynym elementem, który się nie zmienił.",
    },
  ],

  geo: { lat: 53.2069, lng: 23.3389 },
};
