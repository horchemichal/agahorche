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
 * KOSTRZYN — powiat poznański, woj. wielkopolskie.
 * ⚠⚠⚠ TO NIE KOSTRZYN NAD ODRĄ (woj. lubuskie).
 *   NAZWA URZĘDOWA TO SAMO „KOSTRZYN"; forma „Kostrzyn
 *   Wielkopolski / Kostrzyn Wlkp." jest potoczna
 *   i NIE JEST NAZWĄ URZĘDOWĄ — używam jej wyłącznie
 *   w tytule SEO, nigdy w treści jako nazwy miasta.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠ ODRĘBNEJ GMINY WIEJSKIEJ KOSTRZYN NIE MA —
 *   sprawdzone na liście 17 gmin powiatu poznańskiego.
 * MIASTO: 9 861 mieszkańców (GUS 31.12.2024), 8,0 km²,
 *   gęstość 1 235,7 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 7,98 km²]. PODAJĘ.
 * CAŁA GMINA: 20 510 osób, 154,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — NIE DOMYKA SIĘ
 *   I NIE RATUJE JEJ COFNIĘCIE ZAOKRĄGLENIA: źródło
 *   podaje 129, a 20 510 ÷ 154,8 = 132,5. Liczba 129
 *   jest policzona ze starszej ludności (ok. 19 969
 *   osób). TO NAJTWARDSZY PRZYPADEK NIEDOMKNIĘCIA
 *   W CAŁYM WOJEWÓDZTWIE.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: ponad trzydzieści; sołectw ponad
 *   dwadzieścia.
 *   ⚠⚠⚠ ŹRÓDŁA PODAJĄ 34 / 33 / 32 MIEJSCOWOŚCI
 *   I 21 / 23 SOŁECTWA. DOKŁADNYCH LICZB NIE PODAJĘ.
 * ⚠ Miasto to 5,2 % powierzchni gminy i 48,1 % jej
 *   ludności — jedyne miasto gminne w tym cyklu,
 *   które NIE ma większości ludności swojej gminy.
 *   ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ NAZWY RZEKI NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,3942 / 17,2222.
 *
 * ⚠⚠ ODMIANA:
 *   D. do KOSTRZYNA · Ms. w KOSTRZYNIE ·
 *   N. Kostrzynem. Przymiotnik: KOSTRZYŃSKI.
 *   ⚠⚠⚠ BŁĄD: „w Kostrzyniu" (występuje nawet
 *   w tytułach serwisów mapowych). SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM.
 *   ⚠ Kostrzyn nad Odrą odmienia się „do Kostrzyna nad
 *     Odrą", „w Kostrzynie nad Odrą" — drugi członek
 *     nieodmienny.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — KRYTYCZNE, TRZY OBIEKTY:
 *   1. KOSTRZYN — to miasto, pow. poznański,
 *   2. KOSTRZYN NAD ODRĄ — miasto, woj. lubuskie,
 *   3. KOSTRZYN — wieś, woj. mazowieckie.
 *   ROZGRANICZAM W FAQ I W SEKCJI DZIELNIC —
 *   OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: „u schyłku XII stulecia".
 *     ⚠ ROKU ŹRÓDŁA NIE PODAJĄ — NIE PODAJĘ.
 *   — PRAWA MIEJSKIE: 1251 r., książę Przemysł I
 *     ⚠⚠⚠ [SP — jedno źródło]. PISZĘ „według
 *     dostępnych źródeł".
 *   — Utraty praw nie stwierdzono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY PARY, TRZY NAZWY:
 *   W gminie leżą TRZY PARY MIEJSCOWOŚCI ROZRÓŻNIANE
 *   WYŁĄCZNIE PRZYMIOTNIKIEM:
 *     — GLINKA DUCHOWNA i GLINKA SZLACHECKA,
 *     — SIEKIERKI MAŁE i SIEKIERKI WIELKIE,
 *     — SOKOLNIKI DRZĄZGOWSKIE i SOKOLNIKI KLONOWSKIE.
 *   ⚠⚠⚠ A STRONA URZĘDU WYMIENIA JE JAKO POJEDYNCZE
 *   SOŁECTWA: „GLINKA", „SIEKIERKI", „SOKOLNIKI".
 *   SZEŚĆ NAZW ZREDUKOWANYCH DO TRZECH POZYCJI.
 *   ⚠⚠⚠ I STĄD BIERZE SIĘ CZĘŚĆ ROZJAZDU W LICZBACH:
 *   33 vs 34 miejscowości, 21 vs 23 sołectwa. PISZĘ
 *   TO WPROST.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE URZĄD SIĘ MYLI — skrót jest
 *   wygodny dla tego, kto go pisze. PISZĘ TO.
 *   ⚠⚠⚠ RÓŻNICY 18 203 vs 18 103 ZE STRONY URZĘDU
 *   NIE UŻYWAM — figura „suma nie zgadza się
 *   ze składnikami" zajęta (Międzybórz). ANI SŁOWA.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — GUS 2019: lesistość gminy 13,1 %.
 *   ⚠⚠ PROPORCJI LASÓW GMINNYCH (20 ha z 1 994 ha)
 *   NIE PODAJĘ — figura „mniej niż procent" użyta
 *   w tej samej fali (Rogoźno).
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO — ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: SKRÓT ZJADA RÓŻNICĘ
 * — o tym, że skrócona nazwa na liście zakupów jest
 * bezużyteczna dla kogoś innego. Kąt z gminy Kostrzyn:
 * trzy pary wsi różnią się tylko przymiotnikiem, a urząd
 * wymienia je pod trzema nazwami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie są Glinka Duchowna i Szlachecka,
 *   Siekierki Małe i Wielkie, Sokolniki Drzązgowskie
 *   i Klonowskie,
 * — ŻE STRONA URZĘDU WYMIENIA JE JAKO „GLINKĘ",
 *   „SIEKIERKI" I „SOKOLNIKI" — sześć nazw w trzech
 *   pozycjach. TO JEST RDZEŃ,
 * — ŻE WŁAŚNIE STĄD BIERZE SIĘ CZĘŚĆ ROZJAZDU
 *   W LICZBACH MIEJSCOWOŚCI I SOŁECTW,
 * — ⚠⚠ ŻE NIE TWIERDZĘ, IŻ URZĄD SIĘ MYLI — skrót jest
 *   wygodny dla tego, kto go pisze,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: „kup ser" na liście dla
 *   kogoś innego, „zrób zupę", gdy w domu są dwie,
 *   „obiad", który dla każdego znaczy co innego,
 * — ⚠⚠ ŻE SKRÓT DZIAŁA WYŁĄCZNIE DLA AUTORA — i dlatego
 *   pomoc w kuchni tak często kończy się kupieniem
 *   niewłaściwej rzeczy,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: na liście dla kogoś innego
 *   zawsze dopisz słowo różnicujące. „Glinka" nie
 *   wystarczy; „Glinka Szlachecka" dowozi,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: skróty są konieczne.
 *   Lista, na której wszystko jest dopisane do końca,
 *   nigdy nie powstaje. Zasada: pełna nazwa tylko tam,
 *   gdzie różnica zmienia wynik,
 * — ⚠ UCZCIWIE O SPRZĘCIE: przepisy prowadzone
 *   w urządzeniu NIC NIE SKRACAJĄ i właśnie dlatego
 *   ktoś inny w domu może z nich ugotować. MÓWIĘ TO
 *   WPROST — to jedna z niedocenianych zalet.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MAŁE BEZ DUŻEGO — kąt zajęty (Prusice).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam druga połowa pary NIE ISTNIEJE; tu obie
 *   połowy istnieją, a jedna nazwa jest na nie obie.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). ⚠⚠ TAM DWIE
 *   OSOBY LICZYŁY OD INNEJ GRANICY; TU CHODZI O ZAPIS,
 *   KTÓRY GUBI ROZRÓŻNIENIE.
 * — ⚠⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ
 *   KATEGORII — kąt zajęty (Międzybórz). DLATEGO
 *   NIE UŻYWAM RÓŻNICY 18 203 / 18 103.
 * — ⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt
 *   zajęty (Szklarska Poręba). ⚠⚠ TAM WIELE NAZW
 *   NA JEDNĄ RZECZ; TU JEDNA NAZWA NA DWIE RZECZY.
 * — ⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód, ta sama fala).
 * — ⚠⚠ ZERO LISTY KANONICZNEJ — kąt zajęty (Mosina).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA DOMOWNIKÓW, KTÓRZY „KUPILI
 *   NIE TO". Wina jest po stronie listy, nie osoby.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO (nazwa „Glinka
 *   Duchowna" podana WYŁĄCZNIE jako nazwa własna) ·
 *   ZERO WĄTKU MILITARNEGO · ZERO EGZEKUCJI I WYDARZEŃ
 *   1939 R. · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ dokładnej liczby miejscowości i sołectw.
 * — NIE UŻYWAM różnicy 18 203 / 18 103.
 * — NIE TWIERDZĘ, że urząd popełnia błąd, skracając
 *   nazwy sołectw.
 * — NIE PODAJĘ roku pierwszej wzmianki.
 * — NIE PODAJĘ roku praw miejskich jako pewnego.
 * — NIE PODAJĘ wysokości n.p.m., nazwy rzeki ani
 *   odległości.
 * — NIE UŻYWAM formy „Kostrzyn Wielkopolski" jako
 *   nazwy urzędowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kostrzyn leży w powiecie poznańskim; miasto liczy
 *   9 861 mieszkańców (GUS, 31.12.2024) na 8,0 km²,
 *   czyli 1 235,7 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 20 510 osób na 154,8 km²
 *   i ponad trzydzieści miejscowości,
 * — nazwa urzędowa to „Kostrzyn"; forma „Kostrzyn
 *   Wielkopolski" jest potoczna,
 * — pierwsza wzmianka pochodzi ze schyłku XII w.,
 *   a prawa miejskie miasto otrzymało w 1251 r.
 *   od księcia Przemysła I — według dostępnych źródeł,
 * — lasy zajmują 13,1 % powierzchni gminy (GUS 2019),
 * — w gminie leżą trzy pary miejscowości różniące się
 *   tylko przymiotnikiem: Glinka Duchowna i Glinka
 *   Szlachecka, Siekierki Małe i Siekierki Wielkie,
 *   Sokolniki Drzązgowskie i Sokolniki Klonowskie,
 *   a wykaz sołectw urzędu wymienia je jako „Glinkę",
 *   „Siekierki" i „Sokolniki".
 */
export const KOSTRZYN: CityContent = {
  slug: "kostrzyn",
  h1: "Thermomix Kostrzyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kostrzyn Wielkopolski — cena i prezentacja",
  seoDescription:
    "Thermomix w Kostrzynie w powiecie poznańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kostrzyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kostrzynie w powiecie poznańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kostrzyna w powiecie poznańskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Kostrzyn"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sześć nazw. Trzy pozycje w wykazie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kostrzynie – jak wygląda prezentacja?",
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
      id: "skrot-zjada-roznice",
      heading: "Skrót zjada różnicę",
      paragraphs: [
        "W gminie Kostrzyn są trzy pary miejscowości, które różnią się wyłącznie przymiotnikiem. Glinka Duchowna i Glinka Szlachecka. Siekierki Małe i Siekierki Wielkie. Sokolniki Drzązgowskie i Sokolniki Klonowskie.",
        "A wykaz sołectw na stronie urzędu wymienia: „Glinka”, „Siekierki”, „Sokolniki”.",
        "Sześć nazw w trzech pozycjach. I właśnie stąd bierze się część rozjazdu w liczbach — źródła podają raz trzydzieści trzy, raz trzydzieści cztery miejscowości, raz dwadzieścia jedno, raz dwadzieścia trzy sołectwa. Nie twierdzę, że urząd się myli. Skrót jest wygodny dla tego, kto go pisze, i zwykle dla niego wystarczający.",
        "Kłopot pojawia się wtedy, gdy skrót ma zadziałać u kogoś innego.",
        "„Kup ser” na liście zostawionej mężowi, w domu, w którym są dwa rodzaje sera i tylko jeden pasuje do zapiekanki. „Zrób zupę”, gdy w garnkach stoją dwie. „Obiad o czwartej”, który dla jednej osoby znaczy pełny posiłek, a dla drugiej cokolwiek ciepłego. Za każdym razem autor listy wie dokładnie, o co chodzi — i dlatego skrótu nie zauważa.",
        "Właśnie tak najczęściej wygląda nieudana pomoc w kuchni. Ktoś naprawdę chciał pomóc, kupił nie to i usłyszał, że lepiej niech nie rusza. A wina jest po stronie listy, nie osoby.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o Pietrowicach Małych, które nie mają swoich „Wielkich” — tam druga połowa pary po prostu nie istnieje. Tu jest odwrotnie: obie połowy istnieją, a nazwa jest na nie obie.",
        "Ruch jest jeden. Na liście, którą ma wykonać ktoś inny, zawsze dopisz słowo różnicujące. „Glinka” nie wystarczy. „Glinka Szlachecka” dowozi.",
        "Uczciwie o drugiej stronie: skróty są konieczne i nie ma sensu z nimi walczyć. Lista, na której wszystko jest dopisane do samego końca, nigdy nie powstaje — po trzech pozycjach człowiek się zniechęca. Zasada jest węższa: pełna nazwa tylko tam, gdzie różnica zmienia wynik. Na mleko wystarczy „mleko”.",
        "I uczciwie o sprzęcie — tu mam dla niego dobre słowo, które rzadko się podkreśla. Przepisy prowadzone w Thermomixie nie skracają niczego: podają, ile czego i w jakiej kolejności. Dzięki temu może z nich ugotować ktoś, kto zwykle w kuchni nie gotuje, i wyjdzie mu to samo danie. W wielu domach to jest największa realna zmiana po zakupie — nie oszczędność czasu, a to, że obiad może zrobić ktoś inny.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kostrzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy ktoś jeszcze w domu gotuje. Jeśli tak, pokażę rzeczy, które robi się bez pytania o nic.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kostrzynie"),
    sekcjaRaty("w Kostrzynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kostrzyna",
      paragraphs: [
        "Kostrzyn leży w powiecie poznańskim — i warto od razu powiedzieć, że nazwa urzędowa to po prostu „Kostrzyn”; forma „Kostrzyn Wielkopolski” jest potoczna i służy głównie do odróżnienia od Kostrzyna nad Odrą. Samo miasto liczy 9 861 mieszkańców (GUS, 31.12.2024) na ośmiu kilometrach kwadratowych, czyli tysiąc dwieście trzydzieści sześć osób na kilometr, a cała gmina miejsko-wiejska 20 510 osób na 154,8 kilometra i ponad trzydzieści miejscowości. Gęstości dla gminy nie podaję, bo liczba ze źródła jest policzona ze starszego stanu ludności i nie domyka się z dzisiejszymi danymi. Pierwsza wzmianka pochodzi ze schyłku dwunastego wieku, a prawa miejskie miasto otrzymało w 1251 roku od księcia Przemysła I — podaję to za dostępnymi źródłami. Lasy zajmują trzynaście procent powierzchni gminy.",
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

  districtsHeading: "Do których części Kostrzyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Czerlejna i Czerlejnka, Gułtowów, Iwna, Siedlca i Siedleczka, Trzeka, Węgierskiego, Skałowa, Brzeźna i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu koniecznie podaj pełną nazwę wsi. Trzy z nich występują w parach różniących się tylko przymiotnikiem: Glinka Duchowna i Szlachecka, Siekierki Małe i Wielkie, Sokolniki Drzązgowskie i Klonowskie. I dopisz powiat poznański — Kostrzyn nad Odrą to zupełnie inne miasto, w województwie lubuskim.",
  ],
  districts: [],

  nearbyHeading: "Poza Kostrzyn też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Swarzędza, Pobiedzisk, Środy Wielkopolskiej, Nekli i Wrześni — wszędzie bezpłatnie, tak samo jak w samym Kostrzynie.",
  ],
  nearbyTowns: ["Swarzędz", "Pobiedziska", "Środa Wielkopolska", "Nekla", "Września"],

  about: blokOMnie("do Kostrzyna", "w Kostrzynie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kostrzyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne. Po pierwsze: chodzi o Kostrzyn w powiecie poznańskim, nie o Kostrzyn nad Odrą w lubuskiem — to dwa różne miasta. Po drugie: mówi się „w Kostrzynie”, a nie „w Kostrzyniu”, choć ta druga forma trafia się nawet w serwisach mapowych.",
    },
    ...faqWspolne("w Kostrzynie"),
    {
      question: "Zostawiam listę zakupów, a i tak kupowane jest nie to. Jak to naprawić?",
      answer:
        "Dopisując słowo różnicujące. W gminie Kostrzyn są trzy pary wsi różniące się tylko przymiotnikiem — Glinka Duchowna i Szlachecka, Siekierki Małe i Wielkie, Sokolniki Drzązgowskie i Klonowskie — a wykaz sołectw wymienia je jako „Glinkę”, „Siekierki” i „Sokolniki”. Skrót działa dla tego, kto go pisze. „Kup ser” znaczy dla Ciebie coś konkretnego, a dla drugiej osoby nic. Pełna nazwa tylko tam, gdzie różnica zmienia wynik — i wina jest po stronie listy, nie osoby, która kupiła nie to.",
    },
    {
      question: "Czy ktoś, kto nie gotuje, poradzi sobie z Thermomixem?",
      answer:
        "Zwykle tak i uważam to za jego najbardziej niedocenianą zaletę. Przepisy prowadzone w urządzeniu nie skracają niczego — podają, ile czego i w jakiej kolejności — więc może z nich ugotować osoba, która normalnie w kuchni nie staje, i wyjdzie jej to samo danie. W wielu domach to jest największa realna zmiana po zakupie: nie oszczędność czasu, a to, że obiad może zrobić ktoś inny. Na prezentacji chętnie pokazuję to komuś, kto twierdzi, że nie umie gotować.",
    },
  ],

  geo: { lat: 52.3942, lng: 17.2222 },
};
