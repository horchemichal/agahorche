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
 * GOLINA — powiat koniński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ GOLINA NIE MA
 *   (GUS Vademecum: „GMINA MIEJSKO-WIEJSKA").
 * MIASTO: 4 259 mieszkańców (GUS 31.12.2024), 3,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 209,9 os./km², iloraz daje 1 216,9. ROZBIEŻNOŚĆ
 *   7,0. Gęstość policzono od ok. 3,52 km², a wyświetla
 *   się 3,5. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 12 366 osób, 99 km², gęstość
 *   124 os./km².
 *   ⚠ [ZW — 12 366 / 99 = 124,9 → 124. Różnica 0,9,
 *   W GRANICACH. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 18 SOŁECTW i 26 MIEJSCOWOŚCI
 *   (GUS Vademecum). PODAJĘ TĘ PARĘ.
 *   ⚠ Powiat dodaje „18 sołectw i 3 osiedla
 *   mieszkaniowe" — ZGODNE CO DO SOŁECTW.
 *   ⚠⚠ INNE REJESTRY PODAJĄ 23 OBRĘBY I 28 POZYCJI —
 *   RÓŻNIC NIE ROBIĘ KĄTEM, figura „cztery rejestry,
 *   cztery liczby" należy do Kleczewa (ta sama fala).
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP] —
 *   NIE ZGADUJĘ.
 *   NAZWY ZE ŹRÓDEŁ: Kawnice, Spławie, Myśliborz,
 *   Golina-Kolonia.
 * JEZIORO GŁODOWSKIE: ok. 54 ha. PODAJĘ.
 * ⚠ GEO: 52,2429 / 18,0927.
 *
 * ⚠⚠ ODMIANA — RODZAJ ŻEŃSKI:
 *   D. do GOLINY · Ms. w GOLINIE · C. Golinie ·
 *   N. Goliną.
 *   ⚠ POTWIERDZENIA: „Urząd Miejski w Golinie",
 *   „przywrócono Golinie prawa miejskie", „do Goliny".
 *   ⚠⚠⚠ BŁĄD 1: nieodmienianie — „w Golina",
 *   „do Golina". BŁĄD 2: mylenie dopełniacza
 *   z miejscownikiem — „do Golinie".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — „goliński"
 *   poświadczony tylko pośrednio (nazwisko rodowe),
 *   nie jako przymiotnik od nazwy miasta [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — Golina występuje w Polsce także jako nazwa wsi,
 *     ⚠⚠⚠ ALE ŻADNEGO PRZYPADKU NIE POTWIERDZIŁAM
 *     ŹRÓDŁOWO [NP]. PISZĘ OSTROŻNIE: „nazwa Golina
 *     występuje w Polsce także jako nazwa wsi" —
 *     BEZ LICZBY I BEZ WSKAZYWANIA WOJEWÓDZTW.
 *   — GOLINA-KOLONIA — odrębna miejscowość w tej samej
 *     gminie. WSPOMINAM.
 *   — Gmina graniczy z Koninem, ale jest samodzielna.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — DOKUMENT LOKACYJNY: 22 STYCZNIA 1362 R.,
 *     KAZIMIERZ WIELKI. PODAJĘ Z DNIEM — to najlepiej
 *     datowana lokacja w tej fali.
 *   — UTRATA I ODZYSKANIE PRAW: ⚠⚠⚠ DWIE WERSJE.
 *     Strona urzędu: „w latach 1890-1921 straciła
 *     status miasta". Strona powiatu: utrata 1870,
 *     przywrócenie 1921. Serwis lokalny liczy 51 lat.
 *     ⚠⚠⚠ PODAJĘ OBIE WERSJE I MÓWIĘ, ŻE NIE
 *     ROZSTRZYGAM. ⚠⚠ NIE ROBIĘ Z TEGO KĄTU —
 *     figury „przerwa nie kasuje początku" (Trzcianka)
 *     i „nadane dwa razy" (Wyrzysk) ZAJĘTE.
 *     WSPOMINAM W CZĘŚCI O RODZINIE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DOKUMENT ZOSTAŁ, RZECZY NIE:
 *   Golina ma dokument lokacyjny z 22 stycznia 1362 r.
 *   A NAJSTARSZE DATOWANE OBIEKTY ŚWIECKIE W MIEŚCIE —
 *   DWÓR, PARK I WIATRAK PALTRAK — POCHODZĄ Z XIX W.
 *   (park z początku XIX w., wiatrak z połowy XIX w.,
 *   dwór z XIX w. z rozbudową na początku XX w.).
 *   CZYLI: z pierwszych czterystu kilkudziesięciu lat
 *   miasta nie został ani jeden datowany obiekt
 *   świecki. Został dokument.
 *   ⚠⚠⚠ MÓWIĘ WPROST, ŻE LICZĘ TYLKO OBIEKTY ŚWIECKIE
 *   — inaczej byłoby to nieuczciwe zawężenie.
 *   ⚠⚠ LICZBY LAT NIE PODAJĘ JAKO DOKŁADNEJ — piszę
 *   „ponad czterysta lat", bo daty XIX-wieczne są
 *   podane bez roku.
 *   ⚠⚠⚠ ŻADNEGO OBIEKTU SAKRALNEGO NIE WYMIENIAM.
 *
 * KĄT: DOKUMENT ZOSTAŁ, RZECZY NIE
 * — o tym, że ciągłość mieszka w robieniu, nie
 * w przedmiotach. Kąt z Goliny: dokument lokacyjny
 * z 1362 r. i najstarsze datowane obiekty świeckie
 * dopiero z XIX wieku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dokument lokacyjny nosi datę 22 stycznia 1362 r.,
 * — że najstarsze datowane obiekty świeckie — dwór,
 *   park i wiatrak paltrak — są z XIX w. TO JEST RDZEŃ,
 * — ⚠⚠ że liczę wyłącznie obiekty świeckie,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: prawie nikt nie ma
 *   garnka po prababce, a gotuje tak, jak się w domu
 *   gotowało,
 * — ⚠⚠ ŻE BRAK PRZEDMIOTÓW PO KIMŚ NIE JEST BRAKIEM
 *   TRADYCJI — to najczęstsze i najbardziej
 *   niepotrzebne poczucie braku, jakie słyszę,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zapisz jedną rzecz, którą
 *   robisz tak jak w domu — bo zapis przetrwa dłużej
 *   niż sprzęt,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: przedmioty mają
 *   znaczenie i nie będę udawać, że nie mają. Ale to
 *   pamięć o nich, nie one same, prowadzi rękę,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest przedmiotem
 *   i zużyje się jak każdy. To, co przetrwa, to sposób,
 *   w jaki nauczycie się nim robić swoje rzeczy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam budynek był
 *   starszy od instytucji, która w nim siedzi; TU jest
 *   odwrotnie — miasto jest starsze od wszystkiego,
 *   co w nim stoi. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ZGADZANIA SIĘ CO DO TEGO, CZEGO NIE WIDAĆ
 *   — kąt zajęty (Trzemeszno).
 * — ⚠⚠⚠ ZERO OCALAŁEGO, KTÓRE DOSTAŁO NAJMNIEJSZĄ
 *   FUNKCJĘ — kąt zajęty (Sieraków).
 * — ⚠⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew, TA SAMA FALA).
 * — ⚠⚠ ZERO ROCZNICY LICZONEJ OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów).
 * — ⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO DEPRECJONOWANIA PAMIĄTEK RODZINNYCH.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO I POWSTAŃCZEGO · ZERO WĄTKU
 *   WYZNANIOWEGO I OBIEKTÓW SAKRALNYCH · ZERO WĄTKU
 *   MILITARNEGO · ZERO GÓRNICTWA I ODKRYWEK · ZERO
 *   ALKOHOLU · ZERO POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE ROZSTRZYGAM, czy prawa utracono w 1870
 *   czy w 1890 r.
 * — NIE WYMIENIAM obiektów sakralnych.
 * — NIE PODAJĘ, gdzie leżą inne Goliny.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Golina leży w powiecie konińskim i liczy 4 259
 *   mieszkańców (GUS, 31.12.2024) na 3,5 km²; cała
 *   gmina miejsko-wiejska to 12 366 osób na 99 km²,
 *   czyli 124 osoby na kilometr kwadratowy, i obejmuje
 *   18 sołectw oraz 26 miejscowości,
 * — dokument lokacyjny nosi datę 22 stycznia 1362 r.
 *   i wydał go Kazimierz Wielki,
 * — najstarsze datowane obiekty świeckie w mieście to
 *   park z początku XIX w., wiatrak paltrak z połowy
 *   XIX w. oraz dwór z XIX w., rozbudowany na początku
 *   XX w.,
 * — źródła różnią się co do utraty praw miejskich:
 *   strona urzędu podaje lata 1890–1921, strona
 *   powiatu utratę w 1870 i przywrócenie w 1921 r.,
 * — Jezioro Głodowskie ma około 54 ha,
 * — w gminie leżą m.in. Kawnice, Spławie, Myśliborz
 *   i Golina-Kolonia.
 */
export const GOLINA: CityContent = {
  slug: "golina",
  h1: "Thermomix Golina – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Golina — cena i prezentacja",
  seoDescription:
    "Thermomix w Golinie w powiecie konińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Golina — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Golinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Goliny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich osiemnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Golina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dokument z 1362 roku. Najstarsze rzeczy — z dziewiętnastego wieku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Golinie – jak wygląda prezentacja?",
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
      id: "dokument-zostal",
      heading: "Dokument został, rzeczy nie",
      paragraphs: [
        "Golina ma dokument lokacyjny z dokładną datą: 22 stycznia 1362 roku, wydany przez Kazimierza Wielkiego. To najlepiej udokumentowany początek miasta, o jakim pisałam w tej okolicy — z dniem, nie z „około”.",
        "A najstarsze datowane obiekty świeckie, jakie w Golinie stoją, są z dziewiętnastego wieku. Park z początku wieku. Wiatrak paltrak z połowy. Dwór, rozbudowany jeszcze na początku dwudziestego wieku. Liczę tu wyłącznie obiekty świeckie i mówię to wprost, bo inaczej byłoby to nieuczciwe zawężenie.",
        "Z pierwszych czterystu kilkudziesięciu lat miasta nie została ani jedna taka rzecz. Został dokument i została nazwa.",
        "Piszę o tym, bo w kuchni to jest jedno z najbardziej niepotrzebnych poczuć braku, jakie znam — i słyszę je regularnie.",
        "„U nas nie ma żadnych rodzinnych przepisów.” „Nie mam nic po babci, wszystko się rozeszło.” „Ten garnek to z marketu, nic specjalnego.” Mówi to często osoba, która smaży placki dokładnie tak, jak się w jej domu smażyło, dosypuje tego samego, co dosypywała matka, i poznaje po zapachu, kiedy zdjąć z ognia.",
        "Przedmiotów nie ma. Sposób jest. I to sposób, nie przedmiot, jest tym, co się przekazało.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o budynku starszym od instytucji, która go zajmuje. Tutaj skala jest inna — to całe miasto jest starsze od wszystkiego, co w nim stoi, i wcale nie przestało z tego powodu być sobą.",
        "Ruch jest jeden i warto go zrobić, zamiast szukać garnków. Zapiszcie jedną rzecz, którą robicie tak jak w domu — nie przepis z proporcjami, jeśli ich nie znacie, ale kolejność i to, na co się patrzy. Zapis przetrwa dłużej niż sprzęt i można go komuś dać.",
        "Uczciwie o drugiej stronie, bo nie chcę deprecjonować pamiątek. Przedmioty mają znaczenie: deska, na której się zawsze siekało, waży w pamięci więcej niż cokolwiek nowego, i kto ma taką rzecz po kimś, ma dużo. Ale to pamięć o niej prowadzi rękę, nie ona sama. Dlatego brak przedmiotu nie przerywa niczego.",
        "I uczciwie o sprzęcie, bo tu mam interes. Thermomix jest przedmiotem i zużyje się jak każdy przedmiot. Nie kupujecie pamiątki ani czegoś, co zostanie po Was — kupujecie narzędzie na kilkanaście lat. To, co po Was zostanie, to sposób, w jaki nauczycie się nim robić swoje rzeczy, i tego urządzenie nie zapewni samo.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Golinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co robicie „tak jak zawsze u nas w domu”. Z tego zrobimy jedno z dań na prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Golinie"),
    sekcjaRaty("w Golinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Goliny",
      paragraphs: [
        "Golina leży w powiecie konińskim i liczy 4 259 mieszkańców (GUS, 31.12.2024) na 3,5 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła policzona jest od powierzchni niezaokrąglonej i nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 12 366 osób na dziewięćdziesięciu dziewięciu kilometrach kwadratowych, czyli sto dwadzieścia cztery osoby na kilometr, i obejmuje osiemnaście sołectw oraz dwadzieścia sześć miejscowości. Dokument lokacyjny nosi datę 22 stycznia 1362 roku i wydał go Kazimierz Wielki. Źródła rozchodzą się natomiast co do przerwy w statusie miejskim: strona urzędu podaje lata 1890–1921, a strona powiatu utratę praw w 1870 i przywrócenie w 1921 — nie rozstrzygam między nimi i podaję obie wersje. Jezioro Głodowskie ma około pięćdziesięciu czterech hektarów. W gminie leżą między innymi Kawnice, Spławie, Myśliborz i Golina-Kolonia.",
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

  districtsHeading: "Do których części Goliny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich osiemnastu sołectw w gminie — między innymi do Kawnic, Spławia, Myśliborza i Goliny-Kolonii. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Goliny” i „w Golinie” — nazwa się odmienia, a formy „w Golina” czy „do Golinie” są błędne. Przymiotnika od nazwy miasta świadomie nie używam, bo nie udało mi się go potwierdzić w żadnym źródle. I praktyczna: w tej samej gminie leży odrębna miejscowość Golina-Kolonia, a nazwa Golina występuje w Polsce także jako nazwa wsi.",
  ],
  districts: [],

  nearbyHeading: "Poza Golinę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Konina, Kleczewa, Ślesina, Rychwału, Zagórowa i Sompolna — wszędzie bezpłatnie, tak samo jak w samej Golinie.",
  ],
  nearbyTowns: ["Konin", "Kleczew", "Ślesin", "Rychwał", "Zagórów", "Sompolno"],

  about: blokOMnie("do Goliny", "w Golinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Goliny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich osiemnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa się odmienia — „do Goliny”, „w Golinie” — a formy „w Golina” i „do Golinie” są błędne; przymiotnika od nazwy miasta nie używam, bo nie udało mi się go potwierdzić. I praktyczna: w tej samej gminie jest odrębna miejscowość Golina-Kolonia, więc przy adresie warto to rozróżnić.",
    },
    ...faqWspolne("w Golinie"),
    {
      question: "Nie mam żadnych rodzinnych przepisów ani garnków po babci. Czy to znaczy, że nie mam kuchennej tradycji?",
      answer:
        "Nie znaczy, i Golina jest tu dobrym obrazem. Miasto ma dokument lokacyjny z 22 stycznia 1362 roku, a najstarsze datowane obiekty świeckie, jakie w nim stoją — park, wiatrak paltrak i dwór — są z dziewiętnastego wieku. Z pierwszych czterystu kilkudziesięciu lat nie została ani jedna taka rzecz, a miasto nie przestało być sobą. W kuchni jest tak samo: jeśli smażycie placki tak jak się w Waszym domu smażyło i poznajecie po zapachu, kiedy zdjąć z ognia, to przekazało się dokładnie to, co miało — sposób, nie przedmiot. Warto tylko zapisać jedną taką rzecz, choćby samą kolejność, bo zapis przetrwa dłużej niż sprzęt.",
    },
    {
      question: "Czy Thermomix jest sprzętem na lata, takim do przekazania dzieciom?",
      answer:
        "Jest sprzętem na lata, ale nie pamiątką — i wolę tak to ustawić przed zakupem. Urządzenie ma silnik, uszczelki i elektronikę, więc zużyje się jak każdy przedmiot; kupujecie narzędzie na kilkanaście lat użytkowania, nie rzecz, która przejdzie przez trzy pokolenia. To, co da się przekazać, to sposób, w jaki się nim robi swoje dania — i to zostaje niezależnie od tego, jaki sprzęt będzie stał na blacie później.",
    },
  ],

  geo: { lat: 52.2429, lng: 18.0927 },
};
