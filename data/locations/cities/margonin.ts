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
 * MARGONIN — powiat chodzieski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ MARGONIN NIE MA.
 *   ⚠ W powiecie dubluje się wyłącznie CHODZIEŻ
 *   (gmina miejska i wiejska).
 * MIASTO: 2 952 mieszkańców (GUS 31.12.2024), 5,2 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   573,2 os./km², iloraz daje 567,7. ROZBIEŻNOŚĆ 5,5.
 *   NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 82 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 6 291 osób, 123,1 km², gęstość
 *   51 os./km².
 *   ⚠ [ZW — 6 291 / 123,1 = 51,1 → 51. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ STAROSTWO PODAJE 122 km² i 6 003 osoby —
 *   dane niedatowane. PODAJĘ WYŁĄCZNIE GUS Z DATĄ.
 * SOŁECTWA: 11 SOŁECTW i 21 MIEJSCOWOŚCI (GUS
 *   Vademecum). PODAJĘ TĘ PARĘ.
 *   NAZWY SOŁECTW (starostwo, zgodne z GUS co do
 *   liczby): Adolfowo, Kowalewo, Lipiny, Margońska
 *   Wieś, Młynary, Próchnowo, Radwanki, Studźce,
 *   Sułaszewo, Sypniewo, Zbyszewice.
 *   ⚠⚠⚠ WYKAZ EWIDENCYJNY LICZY 24 MIEJSCOWOŚCI
 *   I 14 OBRĘBÓW. RDZEŃ KĄTA OPIERAM NA WYKAZIE
 *   EWIDENCYJNYM (24) I MÓWIĘ WPROST, Z KTÓREGO
 *   WYKAZU LICZĘ.
 *   ⚠⚠⚠ RÓŻNICY MIĘDZY WYKAZAMI NIE ROBIĘ KĄTEM
 *   (Kleczew) I RELACJI SOŁECTWA/OBRĘBY NIE ROBIĘ
 *   KĄTEM — figura należy do LWÓWKA (ta sama fala).
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,9731 / 17,0948 (miasto i gmina identyczne).
 * ⚠⚠⚠ JEZIOR I FARMY WIATROWEJ NIE PODAJĘ —
 *   danych brak [NP], a nazwa operatora jest wykluczona.
 *
 * ⚠⚠ ODMIANA:
 *   D. do MARGONINA · Ms. w MARGONINIE ·
 *   N. Margoninem · C. Margoninowi.
 *   ⚠⚠ CYTATÓW NA D. I Ms. NIE MAM [NP] — formy
 *   są regularne (typ „Kobylin"), ale starostwo używa
 *   wyłącznie mianownika. UŻYWAM ICH, BO SĄ REGULARNE.
 *   ⚠⚠⚠ PRZYMIOTNIK: MARGOŃSKI, nie „margoniński".
 *   Potwierdza to urzędowa nazwa sołectwa MARGOŃSKA
 *   WIEŚ, występująca w trzech niezależnych wykazach.
 *   ⚠⚠⚠ ALE: FIGURY „dowód leży w sąsiedniej nazwie"
 *   NIE ROBIĘ — kąt ZAJĘTY (Skoki). W TEKŚCIE PODAJĘ
 *   PRZYMIOTNIK I BŁĄD, A MARGOŃSKĄ WIEŚ WYMIENIAM
 *   WYŁĄCZNIE JAKO NAZWĘ SOŁECTWA, NIE JAKO DOWÓD.
 *   ⚠⚠⚠ BŁĄD 1: „margoniński" (przez analogię
 *   do „Margonina"). NAJCZĘSTSZY.
 *   ⚠⚠ BŁĄD 2: „w Margoninu".
 *   ⚠⚠ BŁĄD 3: mylenie z wsią MARCINEK z tej samej
 *   gminy.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — MARGONIN (miasto) vs MARGOŃSKA WIEŚ (sołectwo)
 *     — dwie jednostki, jedna podstawa, jedna gmina.
 *     WSPOMINAM.
 *   — ⚠⚠ KAROLINKA (gmina Margonin) vs KAROLINKI
 *     (gmina Miejska Górka, ta sama fala) — ta sama
 *     nazwa w liczbie pojedynczej i mnogiej.
 *     WSPOMINAM.
 *   — PRÓCHNOWO / PRÓCHNOWO-DUŻE OSADY — para
 *     wewnątrzgminna.
 *   — Innych Margoninów w Polsce NIE USTALONO [NP].
 *
 * ⚠⚠ DATY:
 *   — ZAŁOŻENIE: 1364 R.
 *   — PRAWA MIEJSKIE: 1402 R. ⚠ POTWIERDZONE
 *     NIEZALEŻNIE: w 2002 r. obchodzono 600-lecie
 *     nadania praw miejskich (2002 − 600 = 1402).
 *     ⚠⚠ TO JEDYNE MIASTO TEJ FALI, W KTÓRYM DATA
 *     DOMYKA SIĘ Z OBCHODZONĄ ROCZNICĄ CO DO ROKU.
 *     PODAJĘ TEN FAKT. ⚠⚠⚠ ALE NIE ROBIĘ Z NIEGO
 *     FIGURY — kąty „rocznicę liczono od późniejszej
 *     daty" (Odolanów) i „data przyjęta, nie
 *     znaleziona" (Krobia) ZAJĘTE.
 *   — PAŁAC W PRÓCHNOWIE: 1883 R.
 *   — PAŁAC W MARGOŃSKIEJ WSI: 1842 R., neogotycki.
 *     ⚠ 41 LAT RÓŻNICY, DWA PAŁACE W DWÓCH WSIACH
 *     JEDNEJ GMINY, OBIE SĄ SOŁECTWAMI. PODAJĘ.
 *   ⚠⚠⚠ KOŚCIOŁA NIE WYMIENIAM.
 *   ⚠⚠⚠ PORÓWNANIA LUDNOŚCI 2006/2024 NIE ROBIĘ —
 *     wątek demograficzny wykluczony.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PIĘĆ IMION KOBIECYCH NA MAPIE:
 *   W WYKAZIE EWIDENCYJNYM GMINY MARGONIN (24 POZYCJE)
 *   SIEDEM MIEJSCOWOŚCI NOSI IMIĘ CZŁOWIEKA.
 *   PIĘĆ Z NICH TO IMIONA KOBIECE:
 *     OFELIA · TERESKA · KLAUDIA · KAROLINKA ·
 *     KLOTYLDZIN.
 *   Pozostałe dwie pochodzą od imion męskich.
 *   ⚠⚠⚠ IMION MĘSKICH NIE WYMIENIAM Z NAZWY —
 *   jedno z nich niesie dziś niepożądane skojarzenia.
 *   PISZĘ WYŁĄCZNIE „dwie od imion męskich".
 *   RZECZ NAJCIEKAWSZA: TRZY Z PIĘCIU — OFELIA,
 *   KLAUDIA I TERESKA — ZACHOWUJĄ IMIĘ BEZ ŻADNEGO
 *   PRZYROSTKA MIEJSCOWEGO. To nie „Ofelin" ani
 *   „Klaudiowo", tylko SAMO IMIĘ POSTAWIONE NA MAPIE.
 *   ⚠⚠ PROCENTÓW NIE LICZĘ — podaję siedem
 *   z dwudziestu czterech i pięć z siedmiu.
 *   ⚠⚠⚠ NIE SPEKULUJĘ, OD KOGO POCHODZĄ TE IMIONA —
 *   źródło tego nie podaje. MÓWIĘ, ŻE NIE WIEM.
 *
 * KĄT: PIĘĆ IMION KOBIECYCH NA MAPIE
 * — o tym, że imię nadane rzeczy trzyma ją w pamięci
 * lepiej niż opis. Kąt z Margonina: pięć miejscowości
 * gminy nosi imiona kobiece, a trzy z nich bez żadnej
 * przeróbki.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w wykazie ewidencyjnym gminy siedem z dwudziestu
 *   czterech miejscowości nosi imię człowieka, a pięć
 *   z nich to imiona kobiece: Ofelia, Tereska, Klaudia,
 *   Karolinka i Klotyldzin,
 * — że trzy z nich zachowują imię bez przyrostka —
 *   to nie „Ofelin", tylko Ofelia. TO JEST RDZEŃ,
 * — ⚠⚠ że nie wiem, od kogo te imiona pochodzą,
 *   i tego nie zgaduję,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: dania nazwane
 *   po ludziach pamięta się dłużej niż nazwane
 *   po składnikach,
 * — ⚠⚠ ŻE „SAŁATKA OD MARYSI" ZOSTAJE W RODZINIE
 *   NA POKOLENIA, A „SAŁATKA Z SELEREM" NIE ZOSTAJE
 *   NIGDZIE,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy zapisywaniu przepisu
 *   dopisz, od kogo jest. Jedno słowo, a to ono
 *   decyduje, czy ktoś po ten przepis kiedykolwiek
 *   sięgnie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: imię nie zastępuje
 *   opisu. Jeśli w domu są trzy sałatki od trzech
 *   różnych osób, trzeba dopisać jeszcze, co w nich
 *   jest — inaczej wraca ten sam problem,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie nazywa
 *   niczyim imieniem i nie przechowuje rodzinnej
 *   pamięci. To robi się na kartce albo w telefonie,
 *   niezależnie od sprzętu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAZWISKA OD MIEJSCA, NIE MIEJSCA
 *   OD NAZWISKA — kąt zajęty (Miłosław). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam chodziło o KIERUNEK nazwania; tu o to, CO ROBI
 *   Z PAMIĘCIĄ imię postawione zamiast opisu.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DOWODU W SĄSIEDNIEJ NAZWIE — kąt zajęty
 *   (Skoki). DLATEGO MARGOŃSKIEJ WSI NIE UŻYWAM
 *   JAKO DOWODU NA PRZYMIOTNIK.
 * — ⚠⚠⚠ ZERO TRZECH PAR, TRZECH KRYTERIÓW — kąt zajęty
 *   (Kobylin, TA SAMA FALA). Tam chodziło o NIESPÓJNOŚĆ
 *   kryteriów; tu o JEDEN sposób nazywania i jego
 *   skutek. NIE MIESZAM.
 * — ⚠⚠⚠ ZERO OBJAŚNIENIA DOPISANEGO PÓŹNIEJ — kąt
 *   zajęty (Tuliszków).
 * — ⚠⚠ ZERO NAZWY NADANEJ, KTÓRA PRZEGRAŁA Z UŻYWANĄ
 *   — kąt zajęty (Sompolno).
 * — ⚠⚠ ZERO WSZYSTKIEGO NAZWANEGO OD JEDNEJ RZECZY —
 *   kąt zajęty (Kłodawa).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ UWAGA: mówię
 *   o przepisach jako o zapisie, NIE PODAJĘ ŻADNEGO.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNYCH SPEKULACJI O OSOBACH, OD KTÓRYCH
 *   POCHODZĄ NAZWY MIEJSCOWOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO NAZW OPERATORÓW I FIRM.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE WYMIENIAM dwóch imion męskich z nazwy.
 * — NIE SPEKULUJĘ o pochodzeniu tych nazw.
 * — NIE LICZĘ procentów.
 * — NIE PODAJĘ relacji sołectwa/obręby.
 * — NIE PODAJĘ danych starostwa (122 km², 6 003).
 * — NIE PODAJĘ jezior ani farmy wiatrowej.
 * — NIE PORÓWNUJĘ ludności z 2006 r. z dzisiejszą.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Margonin leży w powiecie chodzieskim, liczy 2 952
 *   mieszkańców (GUS, 31.12.2024) na 5,2 km² i leży
 *   82 m n.p.m.,
 * — cała gmina miejsko-wiejska to 6 291 osób
 *   na 123,1 km², czyli 51 osób na kilometr
 *   kwadratowy, i obejmuje 11 sołectw oraz 21
 *   miejscowości według GUS,
 * — w wykazie ewidencyjnym gminy, liczącym 24
 *   miejscowości, siedem nosi imię człowieka, a pięć
 *   z nich to imiona kobiece: Ofelia, Tereska,
 *   Klaudia, Karolinka i Klotyldzin; trzy z nich —
 *   Ofelia, Klaudia i Tereska — zachowują imię bez
 *   żadnego przyrostka,
 * — miasto założono w 1364 r., a prawa miejskie
 *   otrzymało w 1402; potwierdza to obchodzone
 *   w 2002 r. sześćsetlecie,
 * — w gminie stoją dwa pałace: w Próchnowie z 1883 r.
 *   i neogotycki w Margońskiej Wsi z 1842 r. — obie
 *   wsie są sołectwami,
 * — sołectwa gminy to Adolfowo, Kowalewo, Lipiny,
 *   Margońska Wieś, Młynary, Próchnowo, Radwanki,
 *   Studźce, Sułaszewo, Sypniewo i Zbyszewice,
 * — przymiotnik od nazwy miasta brzmi „margoński".
 */
export const MARGONIN: CityContent = {
  slug: "margonin",
  h1: "Thermomix Margonin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Margonin — cena i prezentacja",
  seoDescription:
    "Thermomix w Margoninie w powiecie chodzieskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Margonin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Margoninie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Margonina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich jedenastu sołectw w gminie.",

  highlights: highlightyStandardowe("Margonin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ofelia, Klaudia, Tereska — nazwy wsi, nie przezwiska.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Margoninie – jak wygląda prezentacja?",
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
      id: "imiona-na-mapie",
      heading: "Pięć imion kobiecych na mapie",
      paragraphs: [
        "W wykazie ewidencyjnym gminy Margonin są dwadzieścia cztery miejscowości — liczę z tego wykazu, bo GUS podaje inną liczbę. Siedem z nich nosi imię człowieka. Pięć to imiona kobiece: Ofelia, Tereska, Klaudia, Karolinka i Klotyldzin. Dwie pozostałe pochodzą od imion męskich.",
        "A rzecz najciekawsza jest w trzech z tych pięciu. Ofelia, Klaudia i Tereska zachowują imię bez żadnej przeróbki. To nie „Ofelin” ani „Klaudiowo” — to samo imię, postawione na mapie i zostawione tam, jak stało. Od kogo pochodzą, nie wiem; źródła tego nie podają i nie zamierzam zgadywać.",
        "Piszę o tym, bo z przepisami w domach dzieje się dokładnie to samo i ma to całkiem praktyczny skutek.",
        "„Sałatka od Marysi.” „Ciasto Bogusi.” „Zupa taka jak u cioci Hani.” Te nazwy trzymają się w rodzinie przez pokolenia. A „sałatka z selerem i jabłkiem” nie trzyma się nigdzie — nikt nigdy nie poprosi o nią po nazwie, bo nazwa jest opisem, a opisów się nie pamięta.",
        "Imię działa, bo niesie ze sobą historię: kto to przywiózł, przy jakiej okazji, u kogo się to jadło pierwszy raz. Opis nie niesie nic, więc trzeba go za każdym razem odczytać od nowa.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o kierunku nazywania — o tym, czy nazwa idzie od miejsca do ludzi, czy odwrotnie. Tu nie chodzi o kierunek, tylko o skutek: co imię postawione zamiast opisu robi z pamięcią.",
        "Ruch jest jeden i zajmuje pięć sekund. Kiedy zapisujecie przepis, dopiszcie, od kogo jest. Jedno słowo — a to ono zdecyduje, czy ktokolwiek po ten przepis kiedyś sięgnie.",
        "Uczciwie o drugiej stronie, bo imię nie zastępuje opisu. Jeśli w domu są trzy sałatki od trzech różnych osób i wszystkie nazywają się „od kogoś”, wraca dokładnie ten sam problem co przy opisach — trzeba dopisać jeszcze, co w nich jest. Najlepiej działa jedno i drugie: imię jako nazwa, opis jako drugi wiersz.",
        "I uczciwie o sprzęcie. Thermomix nie nazywa niczego niczyim imieniem i nie przechowuje rodzinnej pamięci. To robi się na kartce albo w telefonie, całkiem niezależnie od tego, w czym się gotuje — i to jest jedna z niewielu rzeczy w kuchni, których żaden sprzęt nie załatwi.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Margoninie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest u Was danie nazwane po kimś z rodziny. Jeśli tak, chętnie je zrobimy na prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Margoninie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Margonina",
      paragraphs: [
        "Margonin leży w powiecie chodzieskim, liczy 2 952 mieszkańców (GUS, 31.12.2024) na 5,2 kilometra kwadratowego i leży osiemdziesiąt dwa metry nad poziomem morza; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 6 291 osób na 123,1 kilometra kwadratowego, czyli pięćdziesiąt jeden osób na kilometr, i obejmuje jedenaście sołectw oraz dwadzieścia jeden miejscowości według GUS. Miasto założono w 1364 roku, a prawa miejskie otrzymało w 1402 — i tę datę potwierdza niezależnie sześćsetlecie obchodzone w 2002 roku, co w tej okolicy zdarza się rzadko. W gminie stoją dwa pałace: w Próchnowie z 1883 roku i neogotycki w Margońskiej Wsi z 1842 — obie wsie są sołectwami, a między jednym a drugim budynkiem jest czterdzieści jeden lat różnicy. Sołectwa gminy to Adolfowo, Kowalewo, Lipiny, Margońska Wieś, Młynary, Próchnowo, Radwanki, Studźce, Sułaszewo, Sypniewo i Zbyszewice.",
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

  districtsHeading: "Do których części Margonina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich jedenastu sołectw w gminie. Nazywają się: Adolfowo, Kowalewo, Lipiny, Margońska Wieś, Młynary, Próchnowo, Radwanki, Studźce, Sułaszewo, Sypniewo i Zbyszewice. Dojeżdżam też do pozostałych miejscowości, w tym do Ofelii, Tereski, Klaudii, Karolinki i Klotyldzina. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Margonina” i „w Margoninie”, a przymiotnik brzmi „margoński” — nie „margoniński”, choć ta druga forma sama się ciśnie przez analogię do odmiany rzeczownika. I praktyczna: w gminie jest sołectwo Margońska Wieś, czyli osobna miejscowość, a także wieś Karolinka, której nazwa łudząco przypomina Karolinki z gminy Miejska Górka — przy adresie warto podać gminę.",
  ],
  districts: [],

  nearbyHeading: "Poza Margonin też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Chodzieży, Szamocina, Gołańczy, Wągrowca, Ujścia i Budzynia — wszędzie bezpłatnie, tak samo jak w samym Margoninie.",
  ],
  nearbyTowns: ["Chodzież", "Szamocin", "Gołańcz", "Wągrowiec", "Ujście", "Budzyń"],

  about: blokOMnie("do Margonina", "w Margoninie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Margonina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich jedenastu sołectw w gminie, a także do pozostałych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Margonina” i „w Margoninie”, a przymiotnik brzmi „margoński”, nie „margoniński” — ta druga forma jest najczęstszym błędem. I praktyczna: w gminie jest sołectwo Margońska Wieś, czyli osobna miejscowość, oraz wieś Karolinka, którą łatwo pomylić z Karolinkami w gminie Miejska Górka.",
    },
    ...faqWspolne("w Margoninie"),
    {
      question: "Jak zapisywać przepisy, żeby ktoś do nich kiedyś wrócił?",
      answer:
        "Nazywając je po ludziach. Margonin podpowiada, dlaczego to działa: w wykazie ewidencyjnym tamtejszej gminy siedem z dwudziestu czterech miejscowości nosi imię człowieka, a pięć to imiona kobiece — Ofelia, Tereska, Klaudia, Karolinka i Klotyldzin. Trzy z nich zachowały imię bez żadnej przeróbki: to nie „Ofelin”, tylko Ofelia. Imię trzyma się w pamięci, bo niesie historię — kto to przywiózł i przy jakiej okazji. „Sałatka od Marysi” zostaje w rodzinie na pokolenia, „sałatka z selerem i jabłkiem” nie zostaje nigdzie. Przy zapisywaniu dopiszcie więc, od kogo jest. Jedno zastrzeżenie: jeśli sałatek „od kogoś” jest kilka, potrzebny jest jeszcze drugi wiersz z tym, co w nich jest.",
    },
    {
      question: "Czy Thermomix przechowuje przepisy rodzinne?",
      answer:
        "Nie w tym sensie, w jakim by się chciało. Urządzenie potrafi prowadzić przez przepisy krok po kroku, ale rodzinna pamięć — kto to robił, przy jakiej okazji, dlaczego u Was tak się je — zapisuje się na kartce albo w telefonie i jest całkiem niezależna od sprzętu. To jedna z niewielu rzeczy w kuchni, których żadne urządzenie nie załatwi za Was, i wolę to powiedzieć wprost.",
    },
  ],

  geo: { lat: 52.9731, lng: 17.0948 },
};
