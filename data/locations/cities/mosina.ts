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
 * MOSINA — powiat poznański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 14 491 mieszkańców (GUS 31.12.2024), 13,5 km²,
 *   gęstość 1 073,4 os./km²
 *   ⚠ [ZW — DOMYKA SIĘ IDEALNIE: 14 491 ÷ 13,5 =
 *   1 073,41]. PODAJĘ.
 * CAŁA GMINA: 35 552 osoby, 171,4 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — NIE DOMYKA SIĘ
 *   I NIE DA SIĘ TEGO WYJAŚNIĆ ZAOKRĄGLENIEM:
 *   207,42 z dzielenia wobec 205 w źródle (1,2 %).
 *   To jedno z dwóch realnych niedomknięć w tej fali.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: źródła podają 28 obrębów, 28 jednostek
 *   pomocniczych (21 sołectw + 7 osiedli), 33 i 34
 *   miejscowości. ⚠⚠⚠ LICZBY NIE PODAJĘ — PISZĘ
 *   „ponad trzydzieści miejscowości".
 * ⚠ WYSOKOŚCI MIASTA NIE USTALONO — NIE PODAJĘ.
 *   Wieża widokowa na Pożegowie stoi na 140,5 m n.p.m.
 * ⚠ GEO: 52,2454 / 16,8471. Kanał Mosiński; Warta
 *   w Rogalinku i Rogalinie.
 *
 * ⚠⚠ ODMIANA:
 *   D. do MOSINY · Ms. w MOSINIE · N. Mosiną.
 *   ⚠⚠⚠ BŁĘDY: „w Mosinej", „mosinowski",
 *   „mosineński". Przymiotnik: MOSIŃSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1247 r. ⚠ [SP — ta sama
 *     witryna urzędu podaje w innym miejscu 1284].
 *     PISZĘ „1247 r., choć źródła nie są zgodne".
 *   — PRAWA MIEJSKIE: 1302 r. (wojewoda kaliski
 *     Mikołaj Przedpełkowic); źródła podają też
 *     „przed 1302".
 *   — 1429 r. — prawo magdeburskie od Władysława
 *     Jagiełły.
 *   — Utraty praw nie potwierdzono.
 *   ⚠⚠⚠ RZECZPOSPOLITEJ MOSIŃSKIEJ (1848) NIE OPISUJĘ
 *     — wątek powstańczy i militarny. ANI SŁOWA.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY, CZTERY, TYSIĄC CZTERYSTA
 *   TRZYDZIEŚCI PIĘĆ:
 *   DĘBY ROGALIŃSKIE (Rogalin, gmina Mosina):
 *     — SŁAWNE TRZY: Lech, Czech, Rus,
 *     — ⚠⚠⚠ ALE NAZWANY JEST TEŻ CZWARTY: DĄB EDWARDA,
 *     — obwody na wysokości 1,3 m (Muzeum Narodowe
 *       w Poznaniu): Lech 633 cm, Czech 735 cm,
 *       Rus 915 cm, Edward 618 cm,
 *     — SPIS Z 1992 R.: 1 435 DĘBÓW SZYPUŁKOWYCH
 *       o obwodzie powyżej 2 m,
 *     — w tym samym 1992 r. obumarł Czech.
 *   ⚠⚠⚠ TRZY POZIOMY: TRZY SŁAWNE, CZTERY NAZWANE,
 *   TYSIĄC CZTERYSTA TRZYDZIEŚCI PIĘĆ ISTNIEJĄCYCH.
 *   TO JEST CAŁY KĄT.
 *   ⚠⚠ OBWODY PODAJĘ TYLKO ZA MUZEUM NARODOWYM
 *   I MÓWIĘ, ŻE ŹRÓDŁA SIĘ RÓŻNIĄ — urząd miasta podaje
 *   zakres „670–930 cm", który nie zawiera obwodu Lecha.
 *   ⚠⚠⚠ TEJ ROZBIEŻNOŚCI NIE ROBIĘ KĄTEM — figura
 *   „spór o liczbę" zajęta (Szamotuły).
 *   ⚠⚠ WIEKU DĘBÓW NIE PODAJĘ — źródła rozjeżdżają się
 *   o ponad 200 lat (480–590 lat wg powiatu, „ponad 800"
 *   dla Rusa wg miasta).
 *   ⚠⚠ ŚMIERCI CZECHA NIE ROBIĘ WĄTKIEM — podaję rok
 *   i tyle, bez rozwijania.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — park w Rogalinie: dziś 27 ha, historycznie 300 ha.
 * — ⚠⚠ KOMINA 150 m NIE PODAJĘ — jedno źródło, wartość
 *   wątpliwa.
 * — ⚠⚠ KOLEI DREZYNOWEJ NIE UŻYWAM JAKO KĄTA.
 * — ⚠ ODLEGŁOŚCI: źródła podają 18, 18,7 i 22 km do
 *   Poznania, w różnych konwencjach. NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: LISTA KANONICZNA NIE JEST SPISEM
 * — o tym, że „mamy w domu trzy dania" to hasło, a nie
 * inwentarz. Kąt z Rogalina: sławne są trzy dęby,
 * nazwane cztery, a policzono tysiąc czterysta
 * trzydzieści pięć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w Rogalinie sławne są Lech, Czech i Rus, ale
 *   nazwany jest też czwarty dąb — Dąb Edwarda,
 * — że spis z 1992 r. objął 1 435 dębów o obwodzie
 *   powyżej dwóch metrów,
 * — ŻE TO TRZY RÓŻNE LICZBY TEGO SAMEGO ZBIORU:
 *   TRZY SŁAWNE, CZTERY NAZWANE, TYSIĄC CZTERYSTA
 *   TRZYDZIEŚCI PIĘĆ ISTNIEJĄCYCH. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MAMY DOKŁADNIE TAKĄ LISTĘ
 *   KANONICZNĄ: „u nas robi się trzy rzeczy", choć
 *   przez miesiąc przez tę kuchnię przechodzi
 *   kilkadziesiąt dań,
 * — ⚠⚠ ŻE LISTA KANONICZNA JEST HASŁEM, A NIE SPISEM
 *   — i że to ona odpowiada za poczucie, że nic się
 *   nie umie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz wszystko, co
 *   ugotowałaś przez ostatni miesiąc, ze śniadaniami
 *   i podwieczorkami. Liczba zwykle zaskakuje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: lista kanoniczna jest
 *   przydatna — to te dania, po które sięga się
 *   w najgorszy dzień. Nie trzeba jej likwidować,
 *   tylko przestać brać za całość,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie samo nie
 *   dopisze pozycji do listy kanonicznej. MÓWIĘ WPROST,
 *   że po roku większość osób przeniosła do niego kilka
 *   dań — i że to normalny, dobry wynik, a nie porażka.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MAŁE BEZ DUŻEGO — kąt zajęty (Prusice).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam nazwa obiecywała drugą rzecz, której
 *   nie ma; tu nazwana grupa pomija rzeczy, które są.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW —
 *   kąt zajęty (Polanica-Zdrój).
 * — ⚠⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt
 *   zajęty (Złotów).
 * — ⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ KATEGORII
 *   — kąt zajęty (Międzybórz).
 * — ⚠⚠ ZERO SPORU O LICZBĘ — kąt zajęty (Szamotuły).
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA CZYJEGOŚ REPERTUARU.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO I POWSTAŃCZEGO · ZERO POŻARÓW
 *   I POWODZI JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE PODAJĘ wieku dębów.
 * — NIE PODAJĘ obwodów w wersji rozbieżnej ze źródłem
 *   muzealnym.
 * — NIE PODAJĘ wysokości miasta ani odległości.
 * — NIE OPISUJĘ wydarzeń 1848 r.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mosina leży w powiecie poznańskim, przy Kanale
 *   Mosińskim; miasto liczy 14 491 mieszkańców
 *   (GUS, 31.12.2024) na 13,5 km², czyli 1 073,4 osoby
 *   na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 35 552 osoby na 171,4 km² i ponad
 *   trzydzieści miejscowości,
 * — pierwsza wzmianka pochodzi z 1247 r., prawa miejskie
 *   nadano w 1302 r., a prawo magdeburskie przyznał
 *   Władysław Jagiełło w 1429 r.,
 * — w Rogalinie rosną nazwane dęby Lech, Czech i Rus,
 *   a także czwarty — Dąb Edwarda; obwody na wysokości
 *   1,3 m podawane przez Muzeum Narodowe w Poznaniu to
 *   633, 735, 915 i 618 cm,
 * — spis z 1992 r. objął 1 435 dębów szypułkowych
 *   o obwodzie powyżej dwóch metrów; w tym samym roku
 *   obumarł Czech,
 * — park w Rogalinie ma dziś 27 ha, historycznie
 *   liczył 300 ha,
 * — wieża widokowa na Pożegowie stoi na wysokości
 *   140,5 m n.p.m.
 */
export const MOSINA: CityContent = {
  slug: "mosina",
  h1: "Thermomix Mosina – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mosina — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mosinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mosina — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mosinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mosiny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Mosina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy sławne. Cztery nazwane. Tysiąc czterysta trzydzieści pięć policzonych.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mosinie – jak wygląda prezentacja?",
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
      id: "lista-kanoniczna",
      heading: "Lista kanoniczna nie jest spisem",
      paragraphs: [
        "W Rogalinie w gminie Mosina każdy zna trzy dęby: Lech, Czech i Rus.",
        "Nazwany jest jednak także czwarty — Dąb Edwarda. Ma obwód sześciuset osiemnastu centymetrów, mierzony na wysokości metra trzydziestu, więc niewiele mniej niż Lech, który ma sześćset trzydzieści trzy. Rus ma dziewięćset piętnaście. Podaję liczby za Muzeum Narodowym w Poznaniu, bo inne źródła podają je inaczej.",
        "A teraz rzecz, która robi z tego prawdziwy kąt: spis z 1992 roku objął w Rogalinie tysiąc czterysta trzydzieści pięć dębów szypułkowych o obwodzie powyżej dwóch metrów.",
        "Trzy sławne. Cztery nazwane. Tysiąc czterysta trzydzieści pięć policzonych. Trzy różne liczby tego samego zbioru, i każda prawdziwa.",
        "W każdej kuchni jest taka lista kanoniczna i ona odpowiada za więcej zniechęcenia niż cokolwiek innego.",
        "„U nas się robi trzy rzeczy: schab, rosół i naleśniki”. Zdanie wypowiadane z rezygnacją, zwykle przy okazji tłumaczenia się, że nie ma się czym chwalić. A przez tę samą kuchnię w ciągu miesiąca przechodzi trzydzieści, czterdzieści różnych rzeczy — z kanapkami, zupą z resztek, makaronem dla dziecka, ciastem na urodziny sąsiadki i tym jednym daniem, które wychodzi tylko wtedy, gdy nikt nie patrzy.",
        "Lista kanoniczna jest hasłem. Nie jest spisem. Mylenie jednego z drugim sprawia, że ludzie uważają swój repertuar za mikroskopijny, choć jest zupełnie normalny.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o nazwie, która obiecuje drugą rzecz, a tej rzeczy nie ma. Tu jest odwrotnie — nazwana grupa pomija rzeczy, które są, i to całkiem duże.",
        "Ruch jest jeden i zajmuje kwadrans. Wypisz wszystko, co ugotowałaś przez ostatni miesiąc. Ze śniadaniami, z podwieczorkami, z tym, co wyszło średnio. Liczba zwykle zaskakuje, a przy okazji widać, czego jest za dużo i czego brakuje.",
        "Uczciwie o drugiej stronie: lista kanoniczna jest przydatna. To są te dania, po które sięga się w najgorszy dzień, bez myślenia, i dobrze, że istnieją. Nie chodzi o to, żeby ją zlikwidować — tylko o to, żeby przestać brać ją za całość.",
        "I uczciwie o sprzęcie. Thermomix sam z siebie nie dopisze pozycji do tej listy. Po roku większość osób ma w nim kilka dań, które robi regularnie, i tyle. To jest dobry, normalny wynik, a nie porażka — i wolę powiedzieć to teraz, niż żeby ktoś po pół roku czuł, że coś zmarnował.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mosinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu nie trzy dania, które „u Was się robi”, a raczej to, co jedliście w tym tygodniu. Pod to dobiorę spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mosinie"),
    sekcjaRaty("w Mosinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mosiny",
      paragraphs: [
        "Mosina leży w powiecie poznańskim, przy Kanale Mosińskim; Warta płynie przez Rogalinek i Rogalin. Samo miasto liczy 14 491 mieszkańców (GUS, 31.12.2024) na 13,5 kilometra kwadratowego, czyli tysiąc siedemdziesiąt trzy osoby na kilometr, a cała gmina miejsko-wiejska 35 552 osoby na 171,4 kilometra i ponad trzydzieści miejscowości. Gęstości dla gminy nie podaję, bo liczby ze źródeł się nie domykają i nie da się tego wyjaśnić zaokrągleniem. Pierwsza wzmianka pochodzi z 1247 roku, choć źródła nie są zgodne; prawa miejskie nadano w 1302, a prawo magdeburskie przyznał Władysław Jagiełło w 1429. Park w Rogalinie ma dziś dwadzieścia siedem hektarów, a historycznie liczył trzysta. Wieża widokowa na Pożegowie stoi na wysokości stu czterdziestu i pół metra nad poziomem morza.",
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

  districtsHeading: "Do których części Mosiny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na Pożegowo, do centrum i na osiedla — bez dopłaty.",
    "Dojeżdżam też do wszystkich miejscowości w gminie: Rogalina i Rogalinka, Krosna i Krosinka, Czapur, Daszewic, Dymaczewa Starego i Nowego, Pecnej, Krajkowa, Mieczewa, Świątnik, Wiórka i pozostałych. Przy umawianiu warto podać pełną nazwę — kilka wsi występuje w parach różniących się jedną literą.",
  ],
  districts: [],

  nearbyHeading: "Poza Mosinę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Puszczykowa, Stęszewa, Lubonia, Czempinia i Kórnika — wszędzie bezpłatnie, tak samo jak w samej Mosinie.",
  ],
  nearbyTowns: ["Puszczykowo", "Stęszew", "Luboń", "Czempiń", "Kórnik"],

  about: blokOMnie("do Mosiny", "w Mosinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mosiny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie — od Czapur i Daszewic po Rogalin i Pecną. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: mówi się „do Mosiny” i „w Mosinie”, a przymiotnik brzmi „mosiński”.",
    },
    ...faqWspolne("w Mosinie"),
    {
      question: "Umiem ugotować tylko kilka rzeczy. Czy Thermomix ma dla mnie sens?",
      answer:
        "Najpierw sprawdziłabym, czy to prawda. W Rogalinie sławne są trzy dęby, nazwane są cztery, a spis z 1992 roku objął tysiąc czterysta trzydzieści pięć — trzy różne liczby tego samego zbioru. „Umiem tylko kilka rzeczy” to lista kanoniczna, nie spis. Wypisz wszystko, co ugotowałaś przez ostatni miesiąc, ze śniadaniami i podwieczorkami — liczba zwykle zaskakuje. A sens urządzenia zależy nie od liczby dań, tylko od tego, jak często gotujecie.",
    },
    {
      question: "Ile dań realnie przenosi się do Thermomixa?",
      answer:
        "U większości osób po roku to kilka dań, które robią regularnie, plus okazjonalne wypady w coś nowego. I to jest dobry wynik, choć brzmi skromnie. Nie obiecuję, że urządzenie odmieni cały repertuar — obiecuję, że te kilka dań przestanie wymagać stania nad garnkiem. Na prezentacji pokazuję to na Waszych własnych daniach, nie na pokazowych.",
    },
  ],

  geo: { lat: 52.2454, lng: 16.8471 },
};
