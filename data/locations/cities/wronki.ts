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
 * WRONKI — powiat szamotulski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 10 450 mieszkańców (GUS 31.12.2024), 5,8 km²,
 *   gęstość 1 798,6 os./km²
 *   ⚠ [ZW — domyka się po cofnięciu zaokrąglenia do
 *   5,81 km², a ta wartość jest POTWIERDZONA
 *   NIEZALEŻNIE (en-wiki: 5,81 km²)]. PODAJĘ.
 * CAŁA GMINA: 18 663 osoby, 301,7 km², gęstość
 *   62 os./km² [ZW — DOMYKA SIĘ: 61,86 → 62]. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 48 wg Strategii Rozwoju Gminy
 *   2021–2027 (w tym miasto), 20 sołectw.
 *   ⚠ Inne źródła podają 47 i 76 — PISZĘ „blisko
 *   pięćdziesiąt miejscowości i dwadzieścia sołectw".
 * LESISTOŚĆ GMINY: 62,8 % (2019).
 *   ⚠⚠⚠ STRUKTURY POWIERZCHNI NIE SUMUJĘ — składniki
 *   dają 95,8 %, a figura „spis, który się nie sumuje"
 *   jest zajęta (Międzybórz). ANI JEDNEGO DODAWANIA.
 * WYSOKOŚĆ: gmina od ok. 90 m n.p.m. (część północna)
 *   do ponad 110 m (część południowa).
 *   ⚠ WYSOKOŚCI SAMEGO MIASTA NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,7103 / 16,3804. Rzeka WARTA, płynąca
 *   z zachodu na wschód gminy; skraj PUSZCZY NOTECKIEJ.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM + PRZYIMEK „WE":
 *   M. WRONKI SĄ · D. do WRONEK · Ms. WE WRONKACH ·
 *   N. Wronkami.
 *   ⚠⚠⚠ BŁĘDY: „do Wronków", „w Wronkach" (musi być
 *   WE), „ta Wronka". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠⚠ PRZYMIOTNIK: WRONIECKI — nigdy „wronkowski"
 *   ani „wroński".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ ZAKŁAD KARNY WE WRONKACH — POMINIĘTY CAŁKOWICIE.
 *   ANI SŁOWA, ANI ALUZJI. WĄTEK WYKLUCZONY
 *   BEZWZGLĘDNIE W CAŁYM CYKLU.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — wieś PIŁA w gminie Wronki ≠ miasto PIŁA
 *     (ten sam subregion) ⚠⚠⚠ ROZGRANICZAM
 *     W SEKCJI DZIELNIC,
 *   — CHOJNO-BŁOTA MAŁE, CHOJNO-BŁOTA WIELKIE,
 *     CHOJNO-MŁYN, CHOJNO-WIEŚ — cztery miejscowości
 *     ze wspólnym członem w jednej gminie,
 *   — STARE MIASTO i NOWA WIEŚ — nazwy powtarzalne
 *     w całej Polsce,
 *   — WRONIAWY w gminie Wolsztyn (miasto opisane
 *     w TEJ SAMEJ FALI) — NIE MYLIĆ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZY ZAPIS O GRODZIE: 1251 r.
 *   — PRAWA MIEJSKIE: ok. 1279 r.
 *     ⚠⚠⚠ JEDNO ŹRÓDŁO PODAJE 1271 R., CO BYŁOBY
 *     DATĄ STARSZĄ OD NAJSTARSZEJ WZMIANKI. NIE UŻYWAM
 *     TEJ LICZBY I NIE ROBIĘ Z TEJ SPRZECZNOŚCI KĄTA —
 *     figura zajęta (Piława Górna, Zawidów).
 *   — Utraty praw nie potwierdzono.
 *   — KOLEJ POZNAŃ–SZCZECIN: budowa zakończona 1 lipca
 *     1848 r., pierwszy pociąg 10 sierpnia 1848 r.
 *     ⚠⚠ ODSTĘPU CZTERDZIESTU DNI NIE ROBIĘ KĄTEM.
 *   — MOST BETONOWY PRZEZ WARTĘ: 1955 r.
 *     RATUSZ: 1910 r.
 *   — Ludność: 1631 r. — 800 osób; 1900 r. — 4 041.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PIĘTNAŚCIE JEZIOR, DWA Z LICZBAMI:
 *   — gmina ma PIĘTNAŚCIE JEZIOR POLODOWCOWYCH,
 *   — podane są POWIERZCHNIE TYLKO DWÓCH NAJWIĘKSZYCH:
 *     Pożarowskie 45,1 ha, Radziszewskie 41,5 ha,
 *   — POZOSTAŁYCH TRZYNAŚCIE — BEZ DANYCH.
 *   ⚠⚠⚠ ARYTMETYKA: 15 − 2 = 13. RÓŻNICA MIĘDZY DWOMA
 *   OPISANYMI: 45,1 − 41,5 = 3,6 ha (8 %).
 *   ⚠⚠ NIE TWIERDZĘ, ŻE TE TRZYNAŚCIE SĄ NIEWAŻNE ANI
 *   ŻE NIKT ICH NIGDY NIE ZMIERZYŁ — twierdzę tylko,
 *   że w opisie gminy ich nie ma.
 *   ⚠⚠⚠ NICZEGO NIE SUMUJĘ I NIE SZACUJĘ ICH
 *   POWIERZCHNI.
 *
 * KĄT: OPISANE SĄ TYLKO NAJWIĘKSZE
 * — o tym, że rachunek tygodnia w kuchni obejmuje
 * wyłącznie duże pozycje, a robota siedzi w małych.
 * Kąt z gminy Wronki: piętnaście jezior, powierzchnie
 * podane dla dwóch.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gmina ma piętnaście jezior polodowcowych,
 *   a powierzchnie podaje się dla dwóch największych:
 *   Pożarowskiego (45,1 ha) i Radziszewskiego (41,5 ha),
 * — ŻE POZOSTAŁYCH TRZYNAŚCIE NIE MA W OPISIE. TO JEST
 *   RDZEŃ,
 * — ⚠⚠ ŻE NIE TWIERDZĘ, IŻ SĄ NIEWAŻNE — twierdzę,
 *   że ich nie ma w rachunku,
 * — ⚠⚠ ŻE W KUCHNI RACHUNEK WYGLĄDA IDENTYCZNIE:
 *   liczy się obiady, a wypadają z niego śniadania,
 *   podwieczorki, drugi obiad dla dziecka, odgrzanie,
 *   herbata dla gościa,
 * — ⚠⚠ ŻE DLATEGO BILANS WYCHODZI KRZYWO i ludzie mówią
 *   „ja tu prawie nic nie robię", choć robią bardzo
 *   dużo małych rzeczy,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przez jeden tydzień zapisuj
 *   wszystko, także to, co zajęło pięć minut. Trzynaście
 *   nienazwanych jezior zwykle tam siedzi,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: próg jest potrzebny,
 *   bo nie da się mierzyć wszystkiego bez końca.
 *   Ustaw go raz, świadomie, i wiedz, co pod niego
 *   wpada,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie pomaga głównie
 *   przy dużych pozycjach. MÓWIĘ WPROST, że jeśli
 *   Wasz tydzień składa się przede wszystkim z małych
 *   rzeczy, zysk będzie mniejszy, niż obiecują reklamy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ KATEGORII
 *   — kąt zajęty (Międzybórz). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam reszta była
 *   w sumie, tylko bez rubryki; tu małych pozycji nie ma
 *   w rachunku wcale. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ — kąt zajęty (Mosina,
 *   ta sama fala). ⚠⚠ TAM CHODZI O REPERTUAR DAŃ,
 *   TU O RACHUNEK CZASU I PRACY. PILNOWAĆ.
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt zajęty
 *   (Złotów).
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW — kąt
 *   zajęty (Polanica-Zdrój). ⚠⚠⚠ UWAGA: TAM TEŻ JEST
 *   LICZBA PIĘTNAŚCIE. TO PRZYPADEK. NIE ROBIĘ Z NIEJ
 *   ŻADNEGO ODNIESIENIA.
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA PODZIAŁU OBOWIĄZKÓW.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO ZAKŁADU KARNEGO · ZERO POWODZI
 *   I POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE SUMUJĘ struktury powierzchni gminy.
 * — NIE SZACUJĘ powierzchni trzynastu jezior.
 * — NIE PODAJĘ roku 1271 jako daty praw miejskich.
 * — NIE PODAJĘ wysokości samego miasta ani odległości.
 * — NIE PISZĘ ani słowa o zakładzie karnym.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wronki leżą w powiecie szamotulskim, nad Wartą,
 *   na skraju Puszczy Noteckiej; miasto liczy 10 450
 *   mieszkańców (GUS, 31.12.2024) na 5,8 km², czyli
 *   1 798,6 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 18 663 osoby na 301,7 km², czyli
 *   62 osoby na kilometr,
 * — gmina obejmuje blisko pięćdziesiąt miejscowości
 *   i dwadzieścia sołectw, a lasy zajmują 62,8 % jej
 *   powierzchni (2019); teren wznosi się od około 90 m
 *   n.p.m. na północy do ponad 110 m na południu,
 * — pierwszy zapis o grodzie wronieckim pochodzi
 *   z 1251 r., prawa miejskie miasto otrzymało około
 *   1279 r.,
 * — budowę linii Poznań–Szczecin zakończono 1 lipca
 *   1848 r., a pierwszy pociąg przejechał 10 sierpnia
 *   1848 r.; betonowy most przez Wartę pochodzi
 *   z 1955 r., ratusz z 1910 r.,
 * — w 1631 r. mieszkało tu 800 osób, w 1900 r. — 4 041,
 * — w gminie jest piętnaście jezior polodowcowych;
 *   największe to Pożarowskie (45,1 ha) i Radziszewskie
 *   (41,5 ha).
 */
export const WRONKI: CityContent = {
  slug: "wronki",
  h1: "Thermomix Wronki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wronki — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix we Wronkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wronki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Wronkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wronek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Wronki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Piętnaście jezior. Powierzchnie podane dla dwóch.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Wronkach – jak wygląda prezentacja?",
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
      id: "tylko-najwieksze",
      heading: "Opisane są tylko największe",
      paragraphs: [
        "W gminie Wronki jest piętnaście jezior polodowcowych.",
        "Powierzchnie podaje się dla dwóch: Pożarowskiego — czterdzieści pięć i jedna dziesiąta hektara — i Radziszewskiego, czterdzieści jeden i pół. Różnica między nimi to niecałe osiem procent.",
        "Pozostałych trzynastu w opisie nie ma. Nie twierdzę, że są nieważne ani że nikt ich nigdy nie zmierzył. Twierdzę tylko tyle: nie ma ich w rachunku.",
        "I dokładnie tak wygląda rachunek tygodnia w każdej kuchni, jaką znam.",
        "Liczy się obiady. Duże, nazwane, z określonym dniem. A z rachunku wypadają: śniadania, podwieczorki, drugi obiad dla dziecka, które nie zjadło pierwszego, odgrzanie czegoś wieczorem, herbata i ciasto dla gościa, kanapki do szkoły o siódmej rano, kolacja z resztek.",
        "Dlatego bilans wychodzi krzywo. Ktoś mówi „ja tu prawie nic nie gotuję, dwa obiady w tygodniu” — i ma rację co do obiadów, a jednocześnie myli się o całość, bo przez tę kuchnię przeszło w tym tygodniu czterdzieści małych czynności, których nikt nie policzył.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o reszcie, która jest w sumie, ale nie ma swojej rubryki. Tu jest inaczej — małych pozycji nie ma w rachunku wcale, bo są poniżej progu, od którego ktokolwiek je zapisuje.",
        "Ruch jest jeden i wystarczy na tydzień. Zapisuj wszystko, także to, co zajęło pięć minut. Te trzynaście nienazwanych jezior zwykle właśnie tam się znajduje — i wtedy dopiero widać, gdzie schodzi czas.",
        "Uczciwie o drugiej stronie: próg jest potrzebny. Nie da się mierzyć wszystkiego bez końca i tygodniowy spis co do minuty byłby kolejną robotą do wykonania. Rzecz w tym, żeby ustawić go raz, świadomie, i wiedzieć, co pod niego wpada.",
        "I uczciwie o sprzęcie. Thermomix pomaga przede wszystkim przy dużych pozycjach — przy tych dwóch nazwanych jeziorach. Przy trzynastu małych zrobi znacznie mniej: kanapek nie posmaruje, herbaty nie zaparzy, dziecka nie namówi na obiad. Jeśli Wasz tydzień składa się głównie z małych rzeczy, zysk będzie mniejszy, niż obiecują reklamy — i wolę to powiedzieć teraz.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Wronkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu ktoś w domu coś odgrzewa albo doprawia. To pozycja, o której się zapomina, a wychodzi na niej najwięcej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Wronkach"),
    sekcjaRaty("we Wronkach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wronek",
      paragraphs: [
        "Wronki leżą w powiecie szamotulskim, nad Wartą, na skraju Puszczy Noteckiej. Samo miasto liczy 10 450 mieszkańców (GUS, 31.12.2024) na 5,8 kilometra kwadratowego, czyli tysiąc siedemset dziewięćdziesiąt dziewięć osób na kilometr, a cała gmina miejsko-wiejska 18 663 osoby na 301,7 kilometra, czyli sześćdziesiąt dwie osoby na kilometr, i obejmuje blisko pięćdziesiąt miejscowości oraz dwadzieścia sołectw. Lasy zajmują niemal sześćdziesiąt trzy procent powierzchni gminy, a teren wznosi się od około dziewięćdziesięciu metrów nad poziomem morza na północy do ponad stu dziesięciu na południu. Pierwszy zapis o grodzie wronieckim pochodzi z 1251 roku, prawa miejskie miasto otrzymało około 1279. Budowę linii kolejowej Poznań–Szczecin zakończono 1 lipca 1848 roku, a pierwszy pociąg przejechał 10 sierpnia tego samego roku; betonowy most przez Wartę pochodzi z 1955, ratusz z 1910. W 1631 roku mieszkało tu osiemset osób, w 1900 — cztery tysiące czterdzieści jedna.",
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

  districtsHeading: "Do których części Wronek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Biezdrowa, Ćmachowa, Nowej Wsi, Popowa, Pożarowa, Rzecina, Samołęża, Stróżek, Wartosławia, Wróblewa i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę. W gminie są cztery miejscowości z członem Chojno — Chojno-Wieś, Chojno-Młyn oraz Chojno-Błota Małe i Wielkie — a jedna ze wsi nazywa się Piła, co nie ma nic wspólnego z miastem Piłą.",
  ],
  districts: [],

  nearbyHeading: "Poza Wronki też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Obrzycka, Ostroroga, Szamotuł, Sierakowa i Czarnkowa — wszędzie bezpłatnie, tak samo jak we Wronkach.",
  ],
  nearbyTowns: ["Obrzycko", "Ostroróg", "Szamotuły", "Sieraków", "Czarnków"],

  about: blokOMnie("do Wronek", "we Wronkach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wronek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi językowe: Wronki są w liczbie mnogiej, więc mówimy „do Wronek” i „we Wronkach” — z „we”, nie „w”. Przymiotnik brzmi „wroniecki”. I warto podawać pełną nazwę wsi, bo jedna z nich nazywa się Piła.",
    },
    ...faqWspolne("we Wronkach"),
    {
      question: "Gotuję tylko dwa obiady w tygodniu, a jestem ciągle zmęczona kuchnią. Jak to możliwe?",
      answer:
        "Bo rachunek obejmuje tylko duże pozycje. W gminie Wronki jest piętnaście jezior, a powierzchnie podaje się dla dwóch największych — pozostałych trzynastu w opisie nie ma. W kuchni tymi trzynastoma są śniadania, podwieczorki, odgrzewanie, kanapki do szkoły, herbata dla gościa i drugi obiad dla dziecka. Przez tydzień zapisuj wszystko, także to, co zajęło pięć minut. Zwykle właśnie tam siedzi cały czas.",
    },
    {
      question: "Czy Thermomix pomoże przy codziennych drobiazgach?",
      answer:
        "Przy części tak, przy większości nie — i mówię to wprost. Zdejmuje robotę z dużych pozycji: obiadu, zupy na kilka dni, ciasta, pasty do kanapek zrobionej raz na tydzień. Kanapek nie posmaruje, herbaty nie zaparzy, dziecka nie namówi na jedzenie. Jeśli Wasz tydzień składa się głównie z małych czynności, zysk będzie mniejszy. Na prezentacji staram się to oszacować na Waszym prawdziwym tygodniu.",
    },
  ],

  geo: { lat: 52.7103, lng: 16.3804 },
};
