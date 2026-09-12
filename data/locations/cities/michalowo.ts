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
 * MICHAŁOWO — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 2 750, GMINA 5 842 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 2,2 km², GMINY 410,0 km²,
 * gęstość zaledwie 15 os./km².
 * ⚠ Notatka projektowa podawała 3 000 — ZAWYŻONE.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono
 * (ok. 80–100 miejscowości).
 *
 * ⚠⚠ PRAWA MIEJSKIE 1 STYCZNIA 2009 r. — NOWE NADANIE.
 * Wcześniej gmina wiejska.
 * ⚠ PODSTAWY PRAWNEJ (numeru rozporządzenia) NIE PODAJĘ.
 *
 * ⚠⚠ GENEZA — PODSTAWA KĄTA:
 * MICHAŁOWO ZAŁOŻONE W 1832 r. PRZEZ SEWERYNA MICHAŁOWSKIEGO
 * JAKO KOLONIA FABRYCZNA SUKIENNIKÓW nad rzeką Supraśl.
 * UKŁAD ZAPROJEKTOWANO Z RYNKIEM I SZEŚCIOMA ULICAMI TAK,
 * BY DAŁO SIĘ PRZY NICH STAWIAĆ FABRYKI.
 * WCZEŚNIEJSZA NAZWA OSADY: NIEZBUDKA.
 * ⚠ SKALI PRZEMYSŁU W 1860 r. NIE PODAJĘ — SPRZECZNOŚĆ:
 * „29 zakładów, 317 pracowników" kontra „4 fabryki sukna,
 * 650 pracowników". Podaję tylko, że do 1915 r. działały
 * w gminie 43 zakłady przemysłowe.
 * W 1915 r. maszyny wywieziono na wschód i nigdy nie wróciły.
 *
 * ⚠ CIEKAWOSTKA: w gminie leży JAŁÓWKA, miejscowość, która
 * miała PRAWA MIEJSKIE OD 1545 r., z zachowanym układem:
 * rynek i pięć ulic. Gmina, której siedziba dostała prawa
 * w 2009 r., zawiera dawne miasto starsze o ponad 450 lat.
 *
 * PRZYRODA: fragment PARKU KRAJOBRAZOWEGO PUSZCZY
 * KNYSZYŃSKIEJ; ZBIORNIK SIEMIANÓWKA na Narwi — powierzchnia
 * ok. 3 250 ha, głębokość średnia 2,5 m, maksymalna 7,0 m;
 * budowa od 1977 r., piętrzenie od 1988 r.
 * ⚠ SPRZECZNOŚĆ: część źródeł przypisuje zbiornik gminie
 * NAREWKA, część gminie Michałowo. PISZĘ, że leży
 * „na pograniczu gmin", bez przypisania.
 * REZERWAT GORBACZ z jeziorem naturalnym.
 * ⚠ NIE PISZĘ, że to najstarszy zbiornik Podlasia —
 * twierdzenie z jednego źródła.
 *
 * ZABYTKI:
 * DREWNIANA CERKIEW ŚW. MIKOŁAJA — 1908 r.
 * ⚠ WYŁĄCZNIE JAKO ZABYTEK ARCHITEKTURY.
 * KOŚCIÓŁ OPATRZNOŚCI BOŻEJ — neogotycki, 1910 r.
 * PAŁAC W HIERONIMOWIE — XVIII–XIX w., z parkiem.
 * ŚWIĘTO GRZYBA — wrzesień, w Sokolem; konkursy kulinarne
 * i grzybobranie. ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ.
 * MICHAŁOWO NIE NALEŻY DO CITTASLOW (nie potwierdzono
 * przynależności — nie twierdzę, że należy).
 *
 * KĄT: UKŁAD KUCHNI — co gdzie stoi i dlaczego to decyduje
 * o tym, ile się w niej gotuje.
 * Kąt od miasta, którego plan — rynek i sześć ulic — został
 * w 1832 r. wytyczony pod konkretny proces produkcyjny.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że o tym, ile ktoś gotuje, decyduje układ kuchni
 *   bardziej niż chęci, i że mało kto to zauważa,
 * — TRZY PUNKTY, między którymi chodzi się najwięcej:
 *   lodówka, zlew, kuchenka — i im krótsza droga między nimi,
 *   tym mniej męczące gotowanie,
 * — że najważniejszy jest CIĄGŁY BLAT MIĘDZY ZLEWEM
 *   A KUCHENKĄ, bo tam odbywa się cała praca,
 * — że blat zastawiony sprzętem przestaje być blatem,
 * — ŚMIETNIK: powinien być tam, gdzie się obiera, a nie
 *   pod oknem — to najczęstszy błąd,
 * — że rzeczy używane codziennie mają leżeć w zasięgu ręki,
 *   a używane raz w roku wysoko albo w piwnicy,
 * — że kuchnia dla dwóch osób potrzebuje dwóch stanowisk,
 *   a nie dwa razy większego blatu,
 * — UCZCIWIE I WPROST: to urządzenie zajmuje sporo blatu
 *   NA STAŁE i to jest realny koszt, o którym mówi się
 *   za mało. Trzeba mu wyznaczyć miejsce PRZED zakupem,
 * — że jeśli po zakupie ma stać w szafce, to lepiej
 *   nie kupować — sprzęt chowany jest sprzętem nieużywanym,
 * — i że w zamian zwykle zwalnia miejsce po kilku innych
 *   przedmiotach; warto to policzyć uczciwie w obie strony.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH WYMIARÓW W CENTYMETRACH — piszę jakościowo.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ANI PRODUCENTÓW MEBLI.
 *
 * ⚠⚠ ETYKA — MICHAŁOWO JEST JEDNYM Z NAJTRUDNIEJSZYCH
 * MIAST W CAŁYM PROJEKCIE:
 * — ⚠⚠ ZERO GRANICY Z BIAŁORUSIĄ, ZERO przejść, ZERO wojska,
 *   ZERO straży granicznej, ZERO jakiegokolwiek wątku
 *   migracyjnego. TWARDA GRANICA — żadnej wzmianki
 *   w żadnym kontekście.
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 *   Wywóz maszyn w 1915 r. podaję jako fakt gospodarczy.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 *   CERKIEW wyłącznie jako zabytek z 1908 r.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mała kuchnia i blat"
 * dotyczy METRAŻU i ciasnoty. „Przebudowa, nie budowa od zera"
 * dotyczy remontu. „Zaprojektowane naraz kontra dokładane
 * po kolei" (Zamość) dotyczy kompletowania sprzętu.
 * „Wszystko przygotowane przed startem" (Sulejów) dotyczy
 * mise en place. Tutaj chodzi o ROZMIESZCZENIE: co gdzie stoi
 * i jak daleko trzeba chodzić.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ skali przemysłu w 1860 r.
 * — NIE PRZYPISUJĘ Siemianówki gminie Michałowo.
 * — NIE PISZĘ, że jezioro w rezerwacie Gorbacz jest
 *   najstarsze na Podlasiu.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ podstawy prawnej nadania praw miejskich.
 * — NIE PRZYPISUJĘ Michałowu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE TWIERDZĘ, że Michałowo należy do Cittaslow.
 * — NIE MYLĘ Michałowa z MICHAŁOWEM WIELKIM (gmina Czyżew),
 *   z MICHAŁOWEM-KOLONIĄ ani z MICHAŁOWEM w kujawsko-pomorskiem
 *   i wielkopolskiem. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 750, gmina 5 842 mieszkańców; gmina ma 410 km²
 *   przy zaledwie piętnastu osobach na kilometr kwadratowy,
 *   a samo miasto tylko 2,2 km²,
 * — Michałowo założył w 1832 r. Seweryn Michałowski jako
 *   kolonię fabryczną sukienników nad Supraślą; układ z rynkiem
 *   i sześcioma ulicami zaprojektowano tak, by dało się przy
 *   nich stawiać fabryki; wcześniej osada nazywała się
 *   Niezbudka,
 * — do 1915 r. działały w gminie 43 zakłady przemysłowe;
 *   w 1915 r. maszyny wywieziono na wschód i nigdy nie wróciły,
 * — prawa miejskie Michałowo otrzymało 1 stycznia 2009 r.,
 * — w gminie leży Jałówka, która miała prawa miejskie już
 *   od 1545 r. i zachowała układ z rynkiem i pięcioma ulicami,
 * — gmina obejmuje fragment Parku Krajobrazowego Puszczy
 *   Knyszyńskiej, a na jej pograniczu leży zbiornik Siemianówka
 *   o powierzchni około 3 250 ha, przy średniej głębokości
 *   2,5 m; budowę rozpoczęto w 1977 r., a piętrzenie w 1988,
 * — drewniana cerkiew świętego Mikołaja z 1908 r.
 *   i neogotycki kościół Opatrzności Bożej z 1910 r.;
 *   pałac w Hieronimowie z XVIII–XIX w.,
 * — we wrześniu odbywa się Święto Grzyba z konkursami
 *   kulinarnymi.
 */
export const MICHALOWO: CityContent = {
  slug: "michalowo",
  h1: "Thermomix Michałowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Michałowo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Michałowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Michałowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Michałowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Michałowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy, także do najdalszych miejscowości.",

  highlights: highlightyStandardowe("Michałowo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "O tym, ile ktoś gotuje, decyduje układ kuchni bardziej niż chęci.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Michałowie – jak wygląda prezentacja?",
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
      id: "uklad-kuchni",
      heading: "Miasto wytyczone pod pracę — czyli o układzie kuchni",
      paragraphs: [
        "Michałowo powstało w 1832 roku i jest miastem zaprojektowanym, a nie takim, które po prostu narosło. Seweryn Michałowski założył je nad Supraślą jako kolonię fabryczną sukienników i kazał wytyczyć rynek oraz sześć ulic tak, żeby dało się przy nich stawiać zakłady. Plan miasta był planem produkcyjnym. Do 1915 roku działały w gminie czterdzieści trzy zakłady przemysłowe.",
        "Uważam, że dokładnie tak trzeba myśleć o kuchni, a prawie nikt tak nie myśli. Bo o tym, ile ktoś gotuje, decyduje układ kuchni bardziej niż chęci — i to jest rzecz, którą widzę w setkach domów.",
        "Zacznijmy od najprostszego. Są trzy punkty, między którymi chodzi się w kuchni najwięcej: lodówka, zlew i kuchenka. Im krótsza droga między nimi, tym mniej męczące jest gotowanie. Jeśli lodówka stoi po drugiej stronie pomieszczenia albo, co się zdarza, w korytarzu, to każdy obiad to kilkadziesiąt niepotrzebnych kroków. Nikt ich nie liczy, ale wszyscy je czują.",
        "Najważniejszy element jest jednak inny i mało kto o nim mówi: ciągły blat między zlewem a kuchenką. Tam odbywa się cała właściwa praca — obieranie, krojenie, przekładanie. Blat przecięty na dwa kawałki, ustawiony w innym miejscu niż zlew albo tak wąski, że nie mieści się na nim deska, sprawia, że gotowanie staje się żonglerką.",
        "I rzecz, która niszczy blaty najskuteczniej: sprzęt. Czajnik, mikrofalówka, toster, ekspres, suszarka do naczyń — każde z osobna jest małe, razem zabierają całą przestrzeń roboczą. Blat zastawiony sprzętem przestaje być blatem, staje się półką.",
        "Drobiazg, który poprawia wszystko, a nic nie kosztuje: śmietnik. Powinien stać tam, gdzie się obiera, czyli przy blacie roboczym — a nie pod oknem albo w drugim rogu. To najczęstszy i najłatwiejszy do naprawienia błąd w polskich kuchniach.",
        "Druga zasada jest równie banalna: rzeczy używane codziennie mają leżeć w zasięgu ręki, a używane raz w roku wysoko albo w piwnicy. Brzmi oczywiście, a w praktyce forma do babki zajmuje najlepszą szufladę, podczas gdy łyżka cedzakowa leży w kącie.",
        "I jeszcze jedno, jeśli w domu gotują dwie osoby: potrzebne są dwa stanowiska, a nie dwa razy większy blat. Dwoje ludzi przy jednej desce przeszkadza sobie tak samo w małej i w dużej kuchni.",
        "Teraz uczciwie o moim sprzęcie, bo to jest coś, o czym się mówi stanowczo za mało. To urządzenie zajmuje spory kawałek blatu i zajmuje go na stałe. Nie jest to koszt cenowy, tylko przestrzenny, i trzeba go policzyć przed zakupem, a nie po. Na spotkaniach zawsze pytam, gdzie miałoby stać — i chcę usłyszeć konkretne miejsce, a nie „coś się wymyśli”.",
        "Jeżeli odpowiedź brzmi „w szafce, będę wyjmować”, to mówię wprost: raczej nie kupujcie. Sprzęt chowany jest sprzętem nieużywanym. Po miesiącu wyjmowanie zaczyna być kłopotem, po dwóch przestaje się to zdarzać.",
        "Z drugiej strony trzeba policzyć uczciwie także w tę stronę: urządzenie zwykle zwalnia miejsce po kilku innych przedmiotach, bo przejmuje ich funkcje. Jeśli z blatu i szafek znikają trzy rzeczy, bilans wychodzi na zero albo na plus. Jeśli nie znika nic — bilans jest ujemny i warto to wiedzieć zawczasu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Michałowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu warto od razu pomyśleć, gdzie w Waszej kuchni jest wolne gniazdko i wolny kawałek blatu. To pierwsze pytanie, jakie i tak padnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Michałowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla michałowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa tysiące osiemset mieszkańców na zaledwie dwóch kilometrach kwadratowych, a cała gmina blisko sześć tysięcy — rozrzuconych po czterystu dziesięciu kilometrach kwadratowych, czyli piętnaście osób na kilometr. To jedna z najbardziej rozległych i najrzadziej zaludnionych gmin w regionie. Michałowo jest miastem młodym w dwójnasób: prawa miejskie dostało 1 stycznia 2009 roku, a samo powstało dopiero w 1832, gdy Seweryn Michałowski założył tu kolonię fabryczną sukienników i kazał wytyczyć rynek z sześcioma ulicami. Wcześniej osada nazywała się Niezbudka. Ciekawostka: w tej samej gminie leży Jałówka, która prawa miejskie miała już w 1545 roku. Stoi tu drewniana cerkiew świętego Mikołaja z 1908 roku i neogotycki kościół Opatrzności Bożej z 1910, a w Hieronimowie pałac z osiemnastego i dziewiętnastego wieku. Gmina obejmuje fragment Parku Krajobrazowego Puszczy Knyszyńskiej, a na jej pograniczu leży zbiornik Siemianówka o powierzchni około trzech tysięcy dwustu pięćdziesięciu hektarów. We wrześniu odbywa się Święto Grzyba z konkursami kulinarnymi.",
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

  districtsHeading: "Do których części gminy Michałowo dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy — a gmina jest bardzo rozległa, więc dotyczy to także tych najdalej położonych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Michałowo też przyjadę",
  nearbyParagraphs: [
    "Zabłudów, Supraśl, Białystok, Bielsk Podlaski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zabłudów", "Supraśl", "Białystok", "Bielsk Podlaski"],

  about: blokOMnie("do Michałowa", "w Michałowie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Michałowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy — także tych najdalszych, bo gmina jest wyjątkowo rozległa. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Michałowo w powiecie białostockim to nie Michałowo Wielkie w gminie Czyżew ani Michałowo-Kolonia.",
    },
    ...faqWspolne("w Michałowie"),
    {
      question: "Co najbardziej wpływa na to, jak wygodnie się gotuje?",
      answer:
        "Odległość między lodówką, zlewem i kuchenką oraz to, czy między zlewem a kuchenką jest ciągły kawałek blatu. Tam odbywa się cała praca. Drugi najczęstszy problem to blat zastawiony sprzętem — czajnik, mikrofalówka, toster i suszarka razem zabierają całą przestrzeń roboczą.",
    },
    {
      question: "Jaki jest najłatwiejszy do naprawienia błąd w kuchni?",
      answer:
        "Śmietnik stojący w złym miejscu. Powinien być tam, gdzie się obiera, czyli przy blacie roboczym — a nie pod oknem czy w drugim rogu. Nic nie kosztuje, a zmienia sposób pracy.",
    },
    {
      question: "Ile miejsca zajmuje Thermomix i czy można go chować?",
      answer:
        "Zajmuje spory kawałek blatu, i to na stałe — to realny koszt, tylko przestrzenny zamiast cenowego. Jeśli miałby stać w szafce i być wyjmowany, mówię wprost: raczej nie kupujcie, bo sprzęt chowany jest sprzętem nieużywanym. Warto natomiast policzyć w drugą stronę: zwykle zwalnia miejsce po kilku innych przedmiotach, których funkcje przejmuje.",
    },
  ],

  geo: { lat: 53.0333, lng: 23.6167 },
};
