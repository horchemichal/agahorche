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
 * MOŃKI — gmina miejsko-wiejska, siedziba powiatu monieckiego.
 * MIASTO 9 391, GMINA 13 905 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 7,7 km², GMINY 161,6 km².
 * GĘSTOŚĆ 1 226 os./km² — bardzo wysoka jak na małe miasto.
 * ⚠ Notatka projektowa podawała 10 000 — ZAWYŻONE.
 * ⚠ Źródła lokalne mówią „około 10 tysięcy" — NIEAKTUALNE.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE 1 STYCZNIA 1965 r.
 * ⚠ NIE PODAJĘ, jakim aktem prawnym ani przez kogo nadane.
 * SIEDZIBA POWIATU od 1954, ponownie od 1999.
 *
 * ⚠⚠ MIASTO ZRODZONE Z KOLEI — PODSTAWA KĄTA.
 * Nazwa notowana od 1545 r., od nazwiska rodziny Moniek.
 * Po otwarciu LINII KRÓLEWIEC–BIAŁYSTOK W 1881 r. kolejarze
 * wybudowali przy stacji domy.
 * JESZCZE W 1912 r. OSADA LICZYŁA STACJĘ I SZEŚĆ DOMÓW.
 * Rozwój po utworzeniu parafii w 1920 r.: wtedy powstały
 * szkoła, MASARNIA, SPÓŁDZIELNIA ZBOŻOWA i handel.
 * Osiedle „Jutrzenka" 1970–1975.
 * DWORZEC KOLEJOWY Z LAT 30. XX w.
 * ⚠ ZWIĄZKU Z MONIUSZKĄ NIE PODAJĘ — ciekawostka bez
 * potwierdzenia onomastycznego.
 * ⚠ KOŚCIOŁA NIE DATUJĘ — trzy sprzeczne zakresy
 * (1921–1935 / lata 20. / 1923–1931). NIE PODAJĘ też
 * nazwiska architekta (Schiller vs Szyller — niepotwierdzone).
 *
 * BIEBRZAŃSKI PARK NARODOWY — utworzony rozporządzeniem
 * z 9 WRZEŚNIA 1993 r., NAJWIĘKSZY PARK NARODOWY W POLSCE,
 * chroni największy kompleks torfowisk w kraju, obszar ramsarski.
 * ⚠⚠ NIE PISZĘ, że gmina Mońki leży w granicach parku —
 * NIEPOTWIERDZONE. Piszę wyłącznie, że park leży w powiecie
 * monieckim.
 * POWIAT MONIECKI: 138 259 ha, ponad 42 000 mieszkańców,
 * 7 gmin, leży u zbiegu BIEBRZY I NARWI.
 * CARSKA DROGA — trasa przez Biebrzański PN.
 * ⚠ POWIERZCHNI PARKU W HA NIE PODAJĘ — strona parku nie podaje.
 * MOŃKI NIE NALEŻĄ DO CITTASLOW.
 *
 * KĄT: CZAS W PRZEPISIE — dlaczego minuty są najmniej
 * wiarygodną liczbą i po czym naprawdę poznaje się gotowość.
 * Kąt od miasta, które powstało z rozkładu jazdy: w 1912 r.
 * była tu stacja i sześć domów, a wszystko inne wyrosło wokół
 * pociągów, które przyjeżdżały o określonej godzinie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że czas w przepisie zależy od rzeczy, których autor
 *   nie znał: Waszego garnka, palnika, ilości i temperatury
 *   startowej składników,
 * — że dlatego zegar jest orientacją, a nie miarą,
 * — ZNAKI, po których naprawdę się poznaje: kolor, zapach,
 *   dźwięk, opór pod widelcem, to, jak się odchodzi od ścianek,
 * — że każdy z tych znaków jest bardziej wiarygodny niż minutnik,
 * — że są dwa wyjątki, w których czasu pilnuje się co do minuty:
 *   wypieki z pieca i jajka,
 * — że nauczenie się znaków jest tym, co odróżnia gotowanie
 *   od wykonywania instrukcji,
 * — UCZCIWIE I MOCNO: w zamkniętym naczyniu NIE WIDAĆ znaków.
 *   Nie widzicie koloru, nie czujecie zapachu, nie słyszycie.
 *   To jest realna wada tego urządzenia i nie da się jej obejść,
 * — dlatego przy sprzęcie trzeba zaufać cudzemu czasowi
 *   bardziej niż w garnku — i warto o tym wiedzieć przed
 *   zakupem, a nie po.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI MINUT —
 *   NIGDZIE, także przy jajkach i wypiekach.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych
 *   o bezpieczeństwie mięsa i sanitarnej obróbce.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, twierdz jako obiektów militarnych.
 *   OSOWIEC-TWIERDZA wymieniam TYLKO gdyby był konieczny —
 *   a nie jest, więc POMIJAM CAŁKOWICIE.
 * — CARSKĄ DROGĘ pomijam — nazwa i geneza są obciążone.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kiedy liczby w przepisie
 * mają znaczenie" (Bisztynek) dotyczy PROPORCJI I WAG.
 * „Nieprecyzyjny język przepisów" (Pelplin) dotyczy sformułowań
 * typu „szczypta". „Synchronizacja obiadu" (Biała Piska)
 * dotyczy zgrywania kilku dań. „Wolno czy szybko" (Lidzbark)
 * dotyczy tempa gotowania. Tutaj chodzi wyłącznie o CZAS
 * PODANY W PRZEPISIE i o znaki, które są od niego lepsze.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Mońki leżą w Biebrzańskim Parku Narodowym.
 * — NIE DATUJĘ kościoła i nie podaję architekta.
 * — NIE PODAJĘ powierzchni Biebrzańskiego PN.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PRZYPISUJĘ Mońkom PALCÓWKI BIEBRZAŃSKIEJ — pochodzi
 *   ze Szpakowa w gminie Trzcianne.
 * — NIE PRZYPISUJĘ Mońkom produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ młyna w Sikorach — nie potwierdzono, czy Sikory
 *   leżą w gminie Mońki.
 * — NIE ŁĄCZĘ nazwy miasta z Moniuszką.
 * — NIE MYLĘ miasta Mońki z gminą i z powiatem monieckim —
 *   trzy różne zakresy. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli poza „Jutrzenką",
 *   której nie wymieniam jako jednostki. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 9 391, gmina 13 905 mieszkańców; miasto zajmuje
 *   zaledwie 7,7 km², stąd bardzo wysoka gęstość zaludnienia,
 * — nazwa notowana od 1545 r., od nazwiska rodziny Moniek,
 * — osada wyrosła przy stacji po otwarciu linii kolejowej
 *   w 1881 r.; jeszcze w 1912 r. liczyła stację i sześć domów,
 * — rozwój po utworzeniu parafii w 1920 r.: powstały wtedy
 *   szkoła, masarnia, spółdzielnia zbożowa i przedsiębiorstwa
 *   handlowe,
 * — prawa miejskie od 1 stycznia 1965 r.; siedziba powiatu
 *   od 1954 i ponownie od 1999,
 * — dworzec kolejowy z lat 30. XX w.,
 * — powiat moniecki obejmuje 138 259 ha i siedem gmin, leży
 *   u zbiegu Biebrzy i Narwi; Biebrzański Park Narodowy,
 *   utworzony 9 września 1993 r., jest największym parkiem
 *   narodowym w Polsce i chroni największy kompleks torfowisk
 *   w kraju.
 */
export const MONKI: CityContent = {
  slug: "monki",
  h1: "Thermomix Mońki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mońki — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mońkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mońki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mońkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Moniek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Mońki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zegar jest orientacją. Miarą są kolor, zapach i opór pod widelcem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mońkach – jak wygląda prezentacja?",
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
      id: "czas-w-przepisie",
      heading: "Miasto z rozkładu jazdy — czyli czy czas w przepisie w ogóle coś znaczy",
      paragraphs: [
        "Mońki są miastem, które powstało z rozkładu jazdy. Nazwa jest notowana już od 1545 roku, ale sama osada wyrosła dopiero po otwarciu linii kolejowej w 1881 roku, kiedy kolejarze zbudowali obok stacji domy. Jeszcze w 1912 roku było tu dosłownie tyle: stacja i sześć domów. Wszystko pozostałe — szkoła, masarnia, spółdzielnia zbożowa, sklepy — pojawiło się po 1920 roku, a prawa miejskie miasto dostało dopiero 1 stycznia 1965.",
        "Miejsce, które zbudował zegar, jest dobrym pretekstem, żeby zapytać o zegar w kuchni. Bo czas jest w przepisach traktowany jak fakt, a jest najsłabszą liczbą ze wszystkich.",
        "Zastanówcie się, od czego zależy „smaż piętnaście minut”. Od średnicy patelni. Od mocy palnika. Od tego, ile tego jest. Od tego, czy składnik wyszedł z lodówki, czy leżał godzinę na blacie. Od grubości dna. Autor przepisu nie znał żadnej z tych rzeczy, bo nie stał w Waszej kuchni. Podał czas, który wyszedł jemu, na jego sprzęcie.",
        "Dlatego czas w przepisie warto czytać jako orientację — informację o tym, czy chodzi o rząd wielkości pięciu minut, czy dwóch godzin — a nie jako miarę.",
        "Miarą są znaki. Kolor: cebula, która ma być szklista, wygląda inaczej niż złota, a to są dwa różne etapy tego samego smażenia. Zapach: przyprawy uprażone są słychać nosem i to jest sygnał, żeby przestać. Dźwięk: skwierczenie zmienia ton, gdy woda wyparuje i zaczyna się właściwe smażenie. Opór: ziemniaki i marchew mówią widelcem wszystko, co trzeba wiedzieć. Zachowanie masy: ciasto, które odchodzi od ścianek, powiedziało Wam, że jest gotowe.",
        "Każdy z tych znaków jest bardziej wiarygodny niż minutnik, bo dotyczy tego, co macie przed sobą, a nie tego, co ktoś miał u siebie.",
        "Są dwa wyjątki i warto je znać. Wypieki wstawione do rozgrzanego piekarnika oraz jajka gotowane w skorupce to sytuacje, w których nie widzicie środka i nie ma żadnych znaków do odczytania. Tam czas rzeczywiście jest instrukcją i pilnuje się go.",
        "Poza tymi dwoma przypadkami nauka rozpoznawania znaków jest właściwie całą różnicą między gotowaniem a wykonywaniem instrukcji. Człowiek, który je zna, ugotuje z każdego przepisu i na każdym sprzęcie. Człowiek, który zna tylko minuty, jest bezradny, gdy coś się nie zgadza.",
        "I teraz muszę powiedzieć rzecz, która działa przeciwko temu, co sprzedaję, ale jest prawdziwa. W zamkniętym naczyniu znaków nie widać. Nie widzicie koloru, bo naczynie jest zakryte. Nie czujecie zapachu, bo para idzie do góry przez otwór. Nie słyszycie zmiany dźwięku, bo urządzenie pracuje głośniej niż zawartość. Zostaje Wam czas.",
        "To jest realna wada i nie da się jej obejść. Przy tym sprzęcie trzeba zaufać cudzemu czasowi bardziej, niż trzeba by w garnku — dlatego dobre przepisy do niego pisze się inaczej i dlatego warto trzymać się sprawdzonych, zamiast przepisywać dowolny przepis z internetu. Mówię o tym na spotkaniach, bo lepiej, żebyście wiedzieli o tym przed zakupem niż po nim.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mońkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli gotujecie „na oko” i po znakach, powiedzcie to przy umawianiu — to akurat największa zmiana, jaką ten sprzęt wprowadza, i warto ją zobaczyć przed decyzją, a nie po.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mońkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla monieckiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dziewięć i pół tysiąca mieszkańców na niecałych ośmiu kilometrach kwadratowych — to bardzo gęsto jak na miasto tej wielkości — a cała gmina niespełna czternaście tysięcy. Nazwa jest notowana od 1545 roku i pochodzi od nazwiska rodziny Moniek, ale samo miasto jest młode: wyrosło przy stacji kolejowej otwartej w 1881 roku, a jeszcze w 1912 roku składało się ze stacji i sześciu domów. Prawdziwy rozwój zaczął się po utworzeniu parafii w 1920 roku, kiedy powstały tu szkoła, masarnia i spółdzielnia zbożowa; prawa miejskie Mońki otrzymały 1 stycznia 1965 roku, a siedzibą powiatu są od 1954 i ponownie od 1999. Zachował się dworzec z lat trzydziestych. Cały powiat moniecki liczy przeszło sto trzydzieści osiem tysięcy hektarów i leży u zbiegu Biebrzy i Narwi; to na jego terenie znajduje się Biebrzański Park Narodowy, utworzony 9 września 1993 roku — największy park narodowy w Polsce, chroniący największy kompleks torfowisk w kraju.",
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

  districtsHeading: "Do których części gminy Mońki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Mońki też przyjadę",
  nearbyParagraphs: [
    "Knyszyn, Goniądz, Suchowola, Czarna Białostocka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Knyszyn", "Goniądz", "Suchowola", "Czarna Białostocka"],

  about: blokOMnie("do Moniek", "w Mońkach i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Moniek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te trzy zakresy stale się mylą: miasto Mońki, gmina Mońki i powiat moniecki to trzy różne rzeczy o bardzo różnej wielkości.",
    },
    ...faqWspolne("w Mońkach"),
    {
      question: "Czy trzeba trzymać się czasu podanego w przepisie?",
      answer:
        "Zwykle nie. Czas zależy od średnicy patelni, mocy palnika, ilości i temperatury startowej składników — a autor przepisu nie znał żadnej z tych rzeczy. Lepszą miarą są znaki: kolor, zapach, dźwięk skwierczenia, opór pod widelcem, to, jak masa odchodzi od ścianek.",
    },
    {
      question: "Kiedy czas naprawdę jest instrukcją?",
      answer:
        "Przy wypiekach w rozgrzanym piekarniku i przy jajkach gotowanych w skorupce. Tam nie widać środka i nie ma żadnych znaków do odczytania, więc zegar zostaje jedyną wskazówką.",
    },
    {
      question: "Czy w Thermomixie widać, że danie jest już gotowe?",
      answer:
        "Znacznie gorzej niż w garnku i to jest jego realna wada. W zamkniętym naczyniu nie widzicie koloru, nie czujecie zapachu i nie słyszycie zmiany dźwięku — zostaje czas. Dlatego przy tym sprzęcie warto trzymać się sprawdzonych przepisów pisanych pod niego, zamiast przenosić dowolny przepis z internetu.",
    },
  ],

  geo: { lat: 53.4028, lng: 22.7972 },
};
