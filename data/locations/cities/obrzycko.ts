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
 * OBRZYCKO — powiat szamotulski, woj. wielkopolskie.
 * ⚠⚠⚠ UKŁAD WYJĄTKOWY W CAŁEJ SERII: ISTNIEJĄ DWIE
 *   ODRĘBNE GMINY O TEJ SAMEJ NAZWIE.
 *   — GMINA MIEJSKA OBRZYCKO (= samo miasto),
 *     TERYT 3024011, na czele BURMISTRZ.
 *   — GMINA WIEJSKA OBRZYCKO, TERYT 3024042,
 *     na czele WÓJT.
 *   ⚠⚠⚠ RÓŻNI SIĘ NIE TYLKO RODZAJ, ALE I NUMER
 *   PORZĄDKOWY GMINY W POWIECIE (01 wobec 04).
 *   TO DWIE RÓŻNE GMINY, NIE DWIE CZĘŚCI JEDNEJ.
 *   ⚠⚠⚠ W POZOSTAŁYCH MIASTACH SERII KOD MIASTA
 *   I GMINY RÓŻNI SIĘ WYŁĄCZNIE OSTATNIĄ CYFRĄ.
 *   ⚠⚠⚠ NIGDY NIE PISZĘ SAMEGO „GMINA OBRZYCKO" —
 *   ZAWSZE „GMINA MIEJSKA" ALBO „GMINA WIEJSKA".
 *
 * GMINA MIEJSKA (MIASTO): 2 384 mieszkańców
 *   (GUS 31.12.2024), 3,74 km², gęstość 637,4 os./km².
 *   ⚠⚠⚠ POWIERZCHNIĘ PODAJĘ Z DOKŁADNOŚCIĄ DO SETNYCH
 *   (374 ha — potwierdzone dwoma rejestrami).
 *   PRZY 3,7 km² ILORAZ DAJE 644,3, ROZBIEŻNOŚĆ 6,9.
 *   PRZY 3,74 km² ILORAZ DAJE 637,4 — ROZBIEŻNOŚĆ 0,03.
 *   PODAJĘ 3,74 I GĘSTOŚĆ RAZEM.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   LESISTOŚĆ MIASTA: 15,6 %.
 *   1 OBRĘB, 1 MIEJSCOWOŚĆ, BRAK SOŁECTW.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * GMINA WIEJSKA: 4 419 osób, 110,72 km², gęstość
 *   40 os./km².
 *   ⚠ [ZW — 4 419 / 110,72 = 39,9. Różnica 0,12.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   LESISTOŚĆ: 47,6 % — NAJWYŻSZA W TEJ FALI.
 *   22 MIEJSCOWOŚCI. ⚠⚠ LICZBY SOŁECTW NIE USTALONO
 *   [NP] — NIE PODAJĘ I NIE PISZĘ „wszystkie sołectwa".
 *   ⚠⚠ OBRĘBÓW (12) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI: Annogóra, Antoniny, Brączewo, Bugaj,
 *   Chraplewo, Daniele, Dobrogostowo, Gaj Mały,
 *   Jaryszewo, Karczemka, Kobylniki, Koźmin, Lizbona,
 *   Mędzisko, Obrowo, Obrzycko-Zamek, Ordzin, Pęckowo,
 *   Piotrowo, Słopanowo, Stobnicko, Zielonagóra.
 *   ⚠⚠⚠ W TYM WYKAZIE NIE MA OBRZYCKA. TO RDZEŃ KĄTA.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,7030 / 16,5271 (punkt miasta).
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   D. do OBRZYCKA · Ms. w OBRZYCKU ·
 *   N. Obrzyckiem · C. Obrzycku.
 *   ⚠ POTWIERDZENIA: „Liczba ludności ogółem
 *   w Obrzycku", „informacje o Obrzycku",
 *   „Powierzchnia miasta Obrzycko".
 *   ⚠⚠ BŁĘDY: nieodmienianie („w Obrzycko")
 *   oraz „w Obrzyckim".
 *   ⚠⚠⚠ NAJGROŹNIEJSZY BŁĄD NIE JEST GRAMATYCZNY,
 *   TYLKO MERYTORYCZNY: pisanie „gmina Obrzycko"
 *   bez dopowiedzenia, która. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠⚠ PRZYMIOTNIKA „OBRZYCKI" NIE UŻYWAM —
 *   niepotwierdzony [NP]. UŻYWAM FORM OPISOWYCH.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — DATA ZAŁOŻENIA: 1238 R.
 *   — PRAWA MIEJSKIE OD 1458 R., Z DWIEMA PRZERWAMI;
 *     OBECNY STATUS OD 1990 R.
 *   ⚠⚠⚠ FIGURY Z PRZERW NIE ROBIĘ — kąty „przerwa
 *     nie kasuje początku" i „nadane dwa razy"
 *     (Wyrzysk) ZAJĘTE. PODAJĘ JEDNYM ZDANIEM.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ RZEKI, RYNKU I RATUSZA NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SIEDZIBA LEŻY POZA WŁASNYMI
 *   GRANICAMI:
 *   GMINA WIEJSKA OBRZYCKO URZĘDUJE W MIEŚCIE
 *   OBRZYCKO — KTÓRE JEST ODRĘBNĄ GMINĄ MIEJSKĄ
 *   I DO GMINY WIEJSKIEJ NIE NALEŻY.
 *   W urzędowym wykazie 22 miejscowości gminy
 *   wiejskiej NIE MA OBRZYCKA. Jest za to
 *   OBRZYCKO-ZAMEK — osobna miejscowość, po tej
 *   stronie granicy.
 *   GMINA WIEJSKA JEST OD MIEJSKIEJ 29,6 RAZA WIĘKSZA
 *   OBSZAROWO (110,72 wobec 3,74 km²) i ma 1,85 raza
 *   więcej mieszkańców — A NIE MA ANI METRA
 *   KWADRATOWEGO SWOJEJ SIEDZIBY.
 *   ⚠⚠ PROPORCJE PODAJĘ OPISOWO, BEZ MNOŻNIKÓW
 *   W TEKŚCIE — mnożniki to wyliczenie własne.
 *
 * KĄT: TO, CO ROZSTRZYGA, LEŻY POZA KUCHNIĄ
 * — o tym, że o obiedzie w środę decyduje sobotni
 * koszyk, a nie garnek. Kąt z Obrzycka: gmina
 * urzędująca poza własnymi granicami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gmina wiejska Obrzycko ma siedzibę w mieście
 *   Obrzycko, które jest osobną gminą i do niej nie
 *   należy; że w jej wykazie 22 miejscowości nie ma
 *   Obrzycka, jest za to Obrzycko-Zamek. TO JEST RDZEŃ,
 * — że to nie pomyłka, tylko normalny, choć rzadki
 *   układ administracyjny,
 * — ⚠⚠ ŻE W KUCHNI JEST TAK SAMO: to, co ugotujecie
 *   w środę, rozstrzyga się w sobotę przy liście
 *   zakupów, a nie w środę przy garnku,
 * — ⚠⚠ ŻE DLATEGO „NIE MAM POMYSŁU NA OBIAD" jest
 *   prawie zawsze problemem zakupowym, a nie
 *   kucharskim,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wybrać dwa lub trzy dania
 *   w miejscu, w którym się kupuje, a nie w kuchni.
 *   Lista wtedy pisze się sama,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: planowanie całego
 *   tygodnia zwykle pęka w środę. Plan na trzy dni
 *   działa, plan na siedem — rzadko,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie naprawi
 *   problemu, który powstał w sklepie. Nie zrobi
 *   obiadu z tego, czego nie ma w domu.
 *   MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO AKT DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam DOKUMENT dotyczył
 *   innej miejscowości; tu URZĄD DZIAŁAJĄCY DZIŚ
 *   stoi poza terenem, którym zarządza.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PODZIAŁ ZNIESIONY, NAZWA ZOSTAŁA — kąt
 *   zajęty (Wieleń). Tam podział ZNIESIONO; tu obie
 *   jednostki DZIAŁAJĄ RÓWNOLEGLE. ROZGRANICZAM
 *   DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO DRUGIE OBOK ZAMIAST WIĘKSZEGO — kąt
 *   zajęty (Bojanowo).
 * — ⚠⚠ ZERO DUŻO MIEJSCA, MAŁO ZAGĘSZCZENIA — kąt
 *   zajęty (Sulmierzyce). DLATEGO NIE ROBIĘ FIGURY
 *   Z RÓŻNICY GĘSTOŚCI MIĘDZY OBIEMA GMINAMI.
 * — ⚠⚠ ZERO STATUS ZMIENIŁ SIĘ, UKŁAD ZOSTAŁ — kąt
 *   zajęty (Dobrzyca).
 * — ⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠⚠⚠ TU RYZYKO
 *   PODWYŻSZONE, BO KĄT DOTYCZY ZAKUPÓW. NIE WYMIENIAM
 *   ŻADNEGO SKLEPU ANI SIECI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNYCH KONKRETNYCH KWOT ANI OBIETNIC
 *   OSZCZĘDNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni 3,7 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PODAJĘ mnożników porównujących obie gminy.
 * — NIE OPISUJĘ przerw w prawach miejskich.
 * — NIE UŻYWAM przymiotnika „obrzycki".
 * — NIE PODAJĘ największej wsi, rzeki ani wysokości
 *   n.p.m.
 * — NIE WYMIENIAM żadnego sklepu ani sieci.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Obrzycko leży w powiecie szamotulskim i jest
 *   gminą miejską: liczy 2 384 mieszkańców
 *   (GUS, 31.12.2024) na 3,74 km² (374 ha), czyli
 *   637,4 osoby na kilometr kwadratowy, przy
 *   lesistości 15,6 %,
 * — miasto ma jeden obręb ewidencyjny, jedną
 *   miejscowość i nie dzieli się na sołectwa,
 * — obok istnieje odrębna gmina wiejska Obrzycko:
 *   4 419 osób na 110,72 km², czyli 40 osób
 *   na kilometr kwadratowy, przy lesistości 47,6 %
 *   i 22 miejscowościach,
 * — gmina wiejska ma siedzibę w mieście Obrzycko,
 *   które do niej nie należy, a w jej wykazie
 *   miejscowości Obrzycka nie ma — jest za to
 *   Obrzycko-Zamek,
 * — obie gminy mają odrębne władze: miasto burmistrza,
 *   gmina wiejska wójta,
 * — miasto założono w 1238 r., prawa miejskie ma
 *   od 1458 r., z dwiema przerwami, a obecny status
 *   od 1990 r.,
 * — w gminie wiejskiej leżą m.in. Brączewo, Jaryszewo,
 *   Kobylniki, Pęckowo, Piotrowo, Słopanowo,
 *   Stobnicko, Gaj Mały, Koźmin, Lizbona i Zielonagóra.
 */
export const OBRZYCKO: CityContent = {
  slug: "obrzycko",
  h1: "Thermomix Obrzycko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Obrzycko — cena i prezentacja",
  seoDescription:
    "Thermomix w Obrzycku w powiecie szamotulskim: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i gmina wiejska. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Obrzycko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Obrzycku pod Szamotułami. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Obrzycka w powiecie szamotulskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości sąsiedniej gminy wiejskiej Obrzycko.",

  highlights: highlightyStandardowe("Obrzycko"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gmina wiejska urzęduje w mieście, które do niej nie należy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Obrzycku – jak wygląda prezentacja?",
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
      id: "poza-kuchnia",
      heading: "To, co rozstrzyga, leży poza kuchnią",
      paragraphs: [
        "Obrzycko jest gminą miejską — miasto i gmina to tu jedno i to samo. Obok istnieje druga gmina, o dokładnie tej samej nazwie: gmina wiejska Obrzycko. To nie są dwie części jednej całości, tylko dwie odrębne jednostki, z dwoma urzędami i dwoma różnymi włodarzami — miasto ma burmistrza, gmina wiejska wójta.",
        "A teraz rzecz, która jest tu najciekawsza. Gmina wiejska Obrzycko urzęduje w mieście Obrzycko — czyli poza własnymi granicami. W jej urzędowym wykazie dwudziestu dwóch miejscowości Obrzycka po prostu nie ma; jest za to Obrzycko-Zamek, osobna miejscowość leżąca już po tamtej stronie granicy. Gmina wiejska jest przy tym znacznie większa: 110,72 kilometra kwadratowego wobec 3,74 i 4 419 mieszkańców wobec 2 384 — a nie ma ani metra kwadratowego swojej własnej siedziby.",
        "To nie jest pomyłka ani zaniedbanie, tylko normalny, choć rzadki układ administracyjny. Miejsce, z którego się czymś zarządza, nie musi być częścią tego czegoś.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, którego akt lokacyjny dotyczył sąsiedniej miejscowości — tam chodziło o dokument sprzed wieków. Tutaj chodzi o urząd działający dziś. I drugie rozróżnienie: pisałam też o mieście, w którym podział administracyjny zniesiono, a została po nim nazwa; tu obie jednostki działają równolegle i obie są prawdziwe.",
        "Piszę o tym, bo w kuchni mylimy dokładnie tę jedną rzecz.",
        "Wydaje nam się, że o tym, co będzie na obiad w środę, decydujemy w środę — stojąc przed lodówką, o wpół do szóstej, po pracy. A to nieprawda. Decyzja zapadła wcześniej i gdzie indziej: w sobotę, przy liście zakupów albo bez niej, przy półce w sklepie. W środę tylko wykonujecie to, co wtedy postanowiliście — również wtedy, gdy postanowiliście nic.",
        "Dlatego zdanie „nie mam pomysłu na obiad” prawie nigdy nie jest problemem kucharskim. Jest problemem zakupowym. Pomysłów w kuchni jest dokładnie tyle, ile pozwalają rzeczy, które w niej leżą — i żadna umiejętność tego nie obejdzie.",
        "Ruch jest jeden i przenosi decyzję tam, gdzie i tak zapada: wybierzcie dwa albo trzy konkretne dania w miejscu, w którym kupujecie, a nie w kuchni. Nie „coś na tydzień”, tylko trzy nazwy. Lista wtedy pisze się sama, bo wynika z tych trzech nazw, a nie z próby przewidzenia wszystkiego.",
        "Uczciwie o drugiej stronie, bo planowanie ma swoją granicę. Plan na cały tydzień zwykle pęka w środę — bo ktoś zostaje dłużej, ktoś przyjeżdża, komuś się odechciewa. Plan na trzy dni trzyma się znacznie lepiej i nie robi z niedzieli pracy biurowej. Lepiej zaplanować mniej i tego dotrzymać.",
        "I uczciwie o sprzęcie, bo to najczęstsze nieporozumienie. Thermomix nie naprawi problemu, który powstał w sklepie. Skraca gotowanie, gotuje bez pilnowania i robi rzeczy, które ręcznie zajmują dużo czasu — ale nie zrobi obiadu z tego, czego nie ma w domu. Jeśli u Was wąskim gardłem są zakupy, a nie samo gotowanie, to urządzenie rozwiąże mniej, niż się spodziewacie, i wolę powiedzieć to przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Obrzycku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy chodzi o samo miasto, czy o którąś z miejscowości gminy wiejskiej. To akurat tutaj naprawdę ułatwia sprawę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Obrzycku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Obrzycka",
      paragraphs: [
        "Obrzycko leży w powiecie szamotulskim i jest gminą miejską: liczy 2 384 mieszkańców (GUS, 31.12.2024) na trzystu siedemdziesięciu czterech hektarach, czyli na trzech i siedemdziesięciu czterech setnych kilometra kwadratowego, co daje sześćset trzydzieści siedem i cztery dziesiąte osoby na kilometr kwadratowy; lesistość wynosi piętnaście i sześć dziesiątych procenta. Miasto ma jeden obręb ewidencyjny, jedną miejscowość i nie dzieli się na sołectwa. Obok istnieje odrębna gmina wiejska Obrzycko: 4 419 osób na stu dziesięciu i siedemdziesięciu dwóch setnych kilometra kwadratowego, czyli czterdzieści osób na kilometr, przy lesistości czterdziestu siedmiu i sześciu dziesiątych procenta i dwudziestu dwóch miejscowościach. Miasto założono w 1238 roku, prawa miejskie ma od 1458, z dwiema przerwami, a obecny status od 1990 roku.",
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

  districtsHeading: "Do których części Obrzycka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a że Obrzycko jest gminą miejską, to znaczy do całej gminy miejskiej. Dojeżdżam też do wszystkich miejscowości sąsiedniej gminy wiejskiej Obrzycko: Annogóra, Antoniny, Brączewo, Bugaj, Chraplewo, Daniele, Dobrogostowo, Gaj Mały, Jaryszewo, Karczemka, Kobylniki, Koźmin, Lizbona, Mędzisko, Obrowo, Obrzycko-Zamek, Ordzin, Pęckowo, Piotrowo, Słopanowo, Stobnicko i Zielonagóra. Wszędzie bez dopłaty.",
    "Trzy uwagi, bo tu naprawdę warto dopowiedzieć, o co chodzi. Pierwsza: samo „gmina Obrzycko” niczego nie rozstrzyga, bo istnieją dwie — miejska, czyli miasto, i osobna wiejska, z własnym urzędem. Obie mają ten sam kod pocztowy, więc adres też ich nie rozróżnia; przy umawianiu najprościej powiedzieć nazwę swojej miejscowości. Druga, adresowa: w gminie wiejskiej leży Obrzycko-Zamek — to osobna miejscowość, nie część miasta — a także wieś Koźmin, o nazwie zbliżonej do Koźmina Wielkopolskiego w powiecie krotoszyńskim. Trzecia, dla porządku: wsie Lizbona i Zielonagóra naprawdę tak się nazywają i nie mają nic wspólnego ani ze stolicą Portugalii, ani z Zieloną Górą. Językowo: mówi się „do Obrzycka” i „w Obrzycku”.",
  ],
  districts: [],

  nearbyHeading: "Poza Obrzycko też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Szamotuł, Wronek, Ostroroga, Pniew, Sierakowa i Wielenia — wszędzie bezpłatnie, tak samo jak w samym Obrzycku.",
  ],
  nearbyTowns: ["Szamotuły", "Wronki", "Ostroróg", "Pniewy", "Sieraków", "Wieleń"],

  about: blokOMnie("do Obrzycka", "w Obrzycku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Obrzycka bez dodatkowej opłaty?",
      answer:
        "Tak — do całego miasta, czyli całej gminy miejskiej, i do wszystkich miejscowości sąsiedniej gminy wiejskiej Obrzycko. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga przy umawianiu: samo „gmina Obrzycko” nie rozstrzyga, o którą chodzi, bo są dwie — miejska i wiejska — i mają ten sam kod pocztowy. Najprościej podać nazwę swojej miejscowości.",
    },
    ...faqWspolne("w Obrzycku"),
    {
      question: "Codziennie o wpół do szóstej nie mam pomysłu na obiad. Co z tym zrobić?",
      answer:
        "Przenieść decyzję tam, gdzie i tak zapada — czyli do sklepu. To, co ugotujecie w środę, rozstrzygnęło się w sobotę przy liście zakupów, a przed lodówką tylko wykonujecie tamtą decyzję, również wtedy, gdy wtedy nic nie postanowiliście. Dlatego „nie mam pomysłu na obiad” prawie nigdy nie jest problemem kucharskim, tylko zakupowym. Obrzycko jest tu dobrym obrazem: gmina wiejska o tej nazwie urzęduje w mieście Obrzycko, które jest osobną gminą i do niej nie należy — miejsce, z którego się czymś zarządza, nie musi być częścią tego czegoś. Ruch jest prosty: wybierzcie dwa albo trzy konkretne dania w miejscu zakupów, a nie w kuchni; lista wtedy pisze się sama. I lepiej planować trzy dni niż siedem, bo plan tygodniowy zwykle pęka w środę.",
    },
    {
      question: "Czy Thermomix rozwiąże problem wiecznego braku czasu na obiady?",
      answer:
        "Częściowo, i chcę być tu precyzyjna. Realnie skraca gotowanie i pozwala nie stać przy garnku — danie robi się z ustawioną temperaturą i mieszaniem, więc w tym czasie można zająć się czymś innym. Ale nie zrobi obiadu z tego, czego nie ma w domu. Jeśli u Was wąskim gardłem są zakupy, a nie samo gotowanie, to urządzenie rozwiąże mniej, niż się spodziewacie — i wolę powiedzieć to przed zakupem, a nie po. Na prezentacji zwykle pytam, na czym dokładnie schodzi Wam czas, bo od tego zależy, czy to w ogóle dobry wydatek.",
    },
  ],

  geo: { lat: 52.703, lng: 16.5271 },
};
