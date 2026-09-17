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
 * NOWY TOMYŚL — powiat nowotomyski (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 13 474 mieszkańców (GUS 31.12.2024), 5,2 km²,
 *   gęstość 2 591,2 os./km².
 *   ⚠ [ZW — DOMYKA SIĘ CO DO CYFRY: 13 474 ÷ 5,2 =
 *   2 591,15. PODAJĘ].
 * CAŁA GMINA: 27 799 osób, 186,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — ŻADNEJ Z TRZECH
 *   KRĄŻĄCYCH (146 / 148 / 149,1). Wyliczenie daje
 *   149,06 wobec 148 w źródle. NIE DOMYKA SIĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 21 (19 wsi i 2 osady leśne).
 *   ⚠ en-wiki podaje 16 wsi — inna kategoria.
 *   ⚠⚠ RÓŻNICY NIE KOMENTUJĘ.
 * WYSOKOŚĆ: 70 m n.p.m. Rzeka Szarka.
 * ⚠ GEO: 52,3167 / 16,1333.
 *
 * ⚠⚠⚠ ODMIANA — DWA CZŁONY, OBA SIĘ ODMIENIAJĄ:
 *   D. do NOWEGO TOMYŚLA · Ms. w NOWYM TOMYŚLU ·
 *   N. Nowym Tomyślem.
 *   ⚠⚠⚠ BŁĘDY: „do Nowy Tomyśl", „w Nowy Tomyśl",
 *   „do Nowego Tomyśli". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠⚠ PRZYMIOTNIK: NOWOTOMYSKI (NIE „nowotomyślski").
 *   Powiat nowotomyski.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJA WEWNĘTRZNA: w tej samej gminie leżą
 *   STARY TOMYŚL i WYTOMYŚL. TRZY NAZWY Z RDZENIEM
 *   „TOMYŚL" W JEDNEJ GMINIE.
 *   ⚠⚠⚠ ROZGRANICZAM W SEKCJI DZIELNIC — OBOWIĄZKOWO.
 *   ⚠⚠ CIĄGU NAZW NIE ROBIĘ KĄTEM — figura zajęta
 *   (Szklarska Poręba), a „małe bez dużego" zajęte
 *   (Prusice). TU TO JEST WYŁĄCZNIE UWAGA PRAKTYCZNA
 *   PRZY UMAWIANIU.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — LOKACJA: 8 kwietnia 1786 r., przywilej królewski
 *     Stanisława Augusta, prawo magdeburskie;
 *     założyciel Feliks Antoni Ignacy Szołdrski.
 *     ⚠ DATA ZGODNA WE WSZYSTKICH ŹRÓDŁACH.
 *   — WCZEŚNIEJSZA WZMIANKA O TERENIE: „Thomisle",
 *     1296 r. ⚠⚠ RÓŻNICY 490 LAT NIE ROBIĘ KĄTEM —
 *     figura zajęta (Szklarska Poręba, Węgliniec).
 *     PODAJĘ JAKO GOŁY FAKT.
 *   — Utraty praw nie odnotowano.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ:
 *   NAJWIĘKSZY KOSZ WIKLINOWY (2006):
 *     — 12 TON WIKLINY,
 *     — 11 TON PRĘTÓW METALOWYCH.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 12 + 11 = 23;
 *   12 ÷ 23 = 52,2 %. WIKLINA TO NIECAŁE 52 % MASY.
 *   ⚠⚠⚠ RZECZ NAZWANA OD MATERIAŁU, KTÓRY JEST TYLKO
 *   POWŁOKĄ. NOŚNE JEST TO, CZEGO NIE WIDAĆ.
 *   ⚠⚠ BUDOWA: start 23 sierpnia 2006, otwarcie
 *   26 sierpnia 2006 — CZTERY DNI. Blisko 50
 *   plecionkarzy z całej Polski.
 *   ⚠⚠⚠ WYMIARÓW KOSZA NIE PODAJĘ — pięć źródeł podaje
 *   pięć różnych długości (17 – 20 m). ROZBIEŻNOŚCI
 *   POMIARU NIE ROBIĘ KĄTEM — figura „spór o liczbę"
 *   zajęta (Szamotuły, poprzednia fala). PISZĘ WPROST,
 *   ŻE WYMIARÓW NIE PODAJĘ, BO ŹRÓDŁA SIĘ RÓŻNIĄ.
 *   ⚠ W 2010 r. tytuł rekordowy przejęło stowarzyszenie
 *   z zagranicy — obiekt stoi, rekordu nie ma.
 *   PODAJĘ TO JAKO FAKT, BEZ MORAŁU.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — Wigloo: 5 ton wikliny, 5 m wysokości, 9 m średnicy.
 * — Międzywojenne plantacje wikliny: ok. 800 ha,
 *   ok. 12 tys. ton wikliny zielonej rocznie.
 *   ⚠⚠ PROPORCJI 12 t / 12 000 t NIE ROBIĘ KĄTEM.
 * — Muzeum Wikliniarstwa i Chmielarstwa: maj 1985.
 * — Zoo od 1974 r.: ponad 5 ha.
 *   ⚠⚠ LICZBY GATUNKÓW I OKAZÓW NIE UŻYWAM — figura
 *   „egzemplarze, nie gatunki" zajęta (Polanica-Zdrój).
 * — Ludność 1811: 438 osób.
 * — ⚠⚠ PROPORCJI MIASTO/GMINA (2,8 % powierzchni,
 *   48,5 % ludności) NIE ROBIĘ KĄTEM.
 * — ⚠ ODLEGŁOŚCI [SP] — NIE PODAJĘ ŻADNEJ.
 * — ⚠⚠ JEZIORA BŁĘDNO NIE WYMIENIAM — niepotwierdzone,
 *   prawdopodobnie leży poza gminą.
 * — ⚠⚠ CHMIELU JAKO SUROWCA NIE ROZWIJAM — prowadzi
 *   do alkoholu. NAZWA MUZEUM I ZBIÓR Z 1860 R. TO
 *   MAKSIMUM, A LEPIEJ POMINĄĆ ZBIÓR.
 *
 * KĄT: CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ
 * — o tym, że rzecz, od której coś wzięło nazwę, rzadko
 * jest tym, co je utrzymuje. Kąt z nowotomyskiego kosza:
 * dwanaście ton wikliny i jedenaście ton stalowych
 * prętów w środku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że do budowy kosza zużyto dwanaście ton wikliny
 *   i jedenaście ton prętów metalowych,
 * — ŻE WIKLINA TO NIECAŁE 52 % MASY, CZYLI RZECZ
 *   NAZWANA OD POWŁOKI. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO NIE JEST OSZUSTWO — bez stali ta wiklina
 *   by się nie utrzymała, a bez wikliny nie byłoby
 *   kosza. Jedno i drugie było potrzebne,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: tygodnia nie trzyma
 *   przepis ani sprzęt, tylko rzeczy niewidoczne —
 *   zakupy zrobione w sobotę, coś w zamrażarce, ktoś,
 *   kto nakrywa do stołu, stała pora kolacji,
 * — ⚠⚠ ŻE DLATEGO ZMIANA WIDOCZNEJ CZĘŚCI ZWYKLE NIC
 *   NIE DAJE, dopóki stelaż jest słaby,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz trzy rzeczy, które
 *   muszą się wydarzyć, żeby w środę stanął obiad,
 *   a które nie są samym gotowaniem. To jest Wasz
 *   stelaż,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: powłoka też jest
 *   potrzebna. Nikt nie je stelaża — dla przyjemności
 *   z jedzenia robi się tę widoczną część i to nie jest
 *   błahostka,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest wikliną,
 *   nie prętami. MÓWIĘ WPROST, że nie zrobi zakupów
 *   ani nie ustali pory kolacji, i że w domu bez
 *   stelaża nie pomoże.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam dwa materiały dzieliły
 *   jedną ścianę i chodziło o to, GDZIE WYDAĆ; tu jeden
 *   materiał jest w środku drugiego i chodzi o to, CO
 *   NAPRAWDĘ NIESIE. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). DLATEGO
 *   NIE PODAJĘ WYMIARÓW KOSZA.
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt zajęty
 *   (Złotów).
 * — ⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ KATEGORII
 *   — kąt zajęty (Międzybórz).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO WĄTKU ALKOHOLOWEGO — chmiel wyłącznie
 *   w nazwie muzeum.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ wymiarów kosza.
 * — NIE PODAJĘ liczby gatunków w zoo.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE WYMIENIAM jeziora Błędno.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowy Tomyśl jest siedzibą powiatu nowotomyskiego,
 *   leży nad Szarką na wysokości 70 m n.p.m.; miasto
 *   liczy 13 474 mieszkańców (GUS, 31.12.2024) na
 *   5,2 km², czyli 2 591,2 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 27 799
 *   osób na 186,5 km² i obejmuje 21 miejscowości,
 * — miasto lokowano 8 kwietnia 1786 r. na mocy
 *   przywileju Stanisława Augusta; nazwa „Thomisle"
 *   pojawia się w źródłach już w 1296 r.; w 1811 r.
 *   mieszkało tu 438 osób,
 * — największy kosz wiklinowy zbudowano w cztery dni,
 *   od 23 do 26 sierpnia 2006 r., siłami blisko
 *   pięćdziesięciu plecionkarzy z całej Polski; zużyto
 *   12 ton wikliny i 11 ton prętów metalowych,
 *   a w 2010 r. tytuł rekordowy przejęło stowarzyszenie
 *   z zagranicy,
 * — obok stoi wigloo: 5 ton wikliny, 5 m wysokości,
 *   9 m średnicy,
 * — w międzywojniu plantacje wikliny zajmowały około
 *   800 ha i dawały około 12 tys. ton wikliny zielonej
 *   rocznie; Muzeum Wikliniarstwa i Chmielarstwa
 *   otwarto w maju 1985 r., a ogród zoologiczny działa
 *   od 1974 r. na ponad pięciu hektarach.
 */
export const NOWY_TOMYSL: CityContent = {
  slug: "nowy-tomysl",
  h1: "Thermomix Nowy Tomyśl – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowy Tomyśl — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowym Tomyślu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Tomyśl — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Tomyślu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Tomyśla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Nowy Tomyśl"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwanaście ton wikliny. I jedenaście ton stali w środku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Tomyślu – jak wygląda prezentacja?",
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
      id: "co-trzyma-konstrukcje",
      heading: "Co naprawdę trzyma konstrukcję",
      paragraphs: [
        "Największy kosz wiklinowy postawiono w Nowym Tomyślu w cztery dni — od dwudziestego trzeciego do dwudziestego szóstego sierpnia 2006 roku, siłami blisko pięćdziesięciu plecionkarzy z całej Polski.",
        "Zużyto do niego dwanaście ton wikliny. I jedenaście ton prętów metalowych.",
        "Czyli wiklina to niecałe pięćdziesiąt dwa procent masy tej konstrukcji. Rzecz, od której wzięła nazwę i dla której się na nią patrzy, jest w przybliżeniu połową tego, co tam stoi. Reszta to stalowy stelaż, którego nie widać.",
        "Wymiarów kosza nie podaję, bo pięć źródeł podaje pięć różnych długości i nie potrafię rozstrzygnąć, które ma rację.",
        "To nie jest żadne oszustwo. Bez stali ta wiklina by się nie utrzymała, bez wikliny nie byłoby kosza — jedno i drugie było potrzebne. Rzecz w tym, że nazwę dostała powłoka, a robotę wykonuje stelaż.",
        "I dokładnie tak wygląda gotowanie w każdym domu, jaki znam.",
        "Tygodnia nie trzyma przepis ani sprzęt. Trzymają go rzeczy, o których się nie mówi: zakupy zrobione w sobotę, coś gotowego w zamrażarce, ktoś, kto nakrywa do stołu, i jedna stała pora, o której wszyscy siadają. Tego nikt nie fotografuje i nikt się tym nie chwali.",
        "Dlatego wymiana widocznej części zwykle nic nie daje. Nowy przepis na kuchnię bez zakupów jest jak wiklina bez prętów — rozłoży się w pierwszą trudną środę.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch materiałach w jednej ścianie i o tym, gdzie warto wydać pieniądze. Tam chodziło o miejsce. Tu o coś innego — o to, który z nich w ogóle niesie ciężar.",
        "Ruch jest jeden. Wypisz trzy rzeczy, które muszą się wydarzyć, żeby w środę stanął na stole obiad, a które nie są samym gotowaniem. To jest Wasz stelaż. Jeśli któraś z nich jest krucha, zajmij się nią, zanim zajmiesz się przepisami.",
        "Uczciwie o drugiej stronie: powłoka też jest potrzebna. Nikt nie je stelaża, a przyjemność z jedzenia bierze się właśnie z tej widocznej części — z tego, że coś ładnie pachnie i smakuje. Nie chcę zamienić kuchni w logistykę.",
        "I uczciwie o sprzęcie. Thermomix jest wikliną, nie prętami. Nie zrobi zakupów, nie ustali pory kolacji i nie sprawi, że ktoś inny nakryje do stołu. W domu, w którym stelaż działa, potrafi zmienić bardzo dużo. W domu, w którym stelaża nie ma, będzie ładnym przedmiotem na blacie — i wolę to powiedzieć teraz.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Tomyślu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, kiedy robicie zakupy i czy jest w domu stała pora obiadu. Od tego zależy więcej niż od wyboru dań.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Tomyślu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowego Tomyśla",
      paragraphs: [
        "Nowy Tomyśl jest siedzibą powiatu nowotomyskiego, leży nad Szarką na wysokości siedemdziesięciu metrów nad poziomem morza. Samo miasto liczy 13 474 mieszkańców (GUS, 31.12.2024) na 5,2 kilometra kwadratowego, czyli dwa tysiące pięćset dziewięćdziesiąt jeden osób na kilometr — to jedna z najgęściej zaludnionych miejskich gmin, o jakich pisałam. Cała gmina miejsko-wiejska to 27 799 osób na 186,5 kilometra i dwadzieścia jeden miejscowości; gęstości dla gminy nie podaję, bo krążą trzy różne liczby i żadna się nie domyka. Miasto lokowano 8 kwietnia 1786 roku na mocy przywileju Stanisława Augusta, choć sama nazwa „Thomisle” pojawia się w źródłach już w 1296. W 1811 roku mieszkało tu czterysta trzydzieści osiem osób. Muzeum Wikliniarstwa i Chmielarstwa otwarto w maju 1985 roku, ogród zoologiczny działa od 1974 na ponad pięciu hektarach, a obok wielkiego kosza stoi wigloo z pięciu ton wikliny — pięć metrów wysokości i dziewięć metrów średnicy.",
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

  districtsHeading: "Do których części Nowego Tomyśla dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu jeden miejscowości w gminie. Wszędzie bez dopłaty.",
    "Przy umawianiu koniecznie podaj pełną nazwę miejscowości. W tej jednej gminie są trzy nazwy z tym samym rdzeniem: Nowy Tomyśl, Stary Tomyśl i Wytomyśl — to trzy różne miejsca.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowy Tomyśl też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Opalenicy, Zbąszynia, Wolsztyna, Grodziska Wielkopolskiego i Lwówka — wszędzie bezpłatnie, tak samo jak w samym Nowym Tomyślu.",
  ],
  nearbyTowns: ["Opalenica", "Zbąszyń", "Wolsztyn", "Grodzisk Wielkopolski", "Lwówek"],

  about: blokOMnie("do Nowego Tomyśla", "w Nowym Tomyślu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Tomyśla bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu jeden miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: odmieniają się oba człony nazwy — „do Nowego Tomyśla”, „w Nowym Tomyślu” — a przymiotnik brzmi „nowotomyski”. I przy umawianiu warto podać pełną nazwę wsi, bo w gminie są jeszcze Stary Tomyśl i Wytomyśl.",
    },
    ...faqWspolne("w Nowym Tomyślu"),
    {
      question: "Próbowałam już wielu przepisów i i tak w środku tygodnia wszystko się sypie. Dlaczego?",
      answer:
        "Bo przepisy są powłoką, a sypie się stelaż. Do największego kosza wiklinowego w Nowym Tomyślu zużyto dwanaście ton wikliny i jedenaście ton prętów metalowych — rzecz nazwana od tego, co widać, w połowie stoi na tym, czego nie widać. W kuchni stelażem są zakupy zrobione zawczasu, coś w zamrażarce, ktoś, kto nakrywa do stołu, i stała pora posiłku. Wypisz trzy takie rzeczy u siebie i sprawdź, która jest najsłabsza. Nowy przepis jej nie zastąpi.",
    },
    {
      question: "Czy Thermomix rozwiąże problem z organizacją posiłków w domu?",
      answer:
        "Częściowo. Zdejmuje robotę przy samym gotowaniu — mieszanie, pilnowanie, kilka naczyń do umycia — i to jest realna pomoc. Ale nie zrobi zakupów, nie ustali pory kolacji i nie sprawi, że ktoś inny nakryje do stołu. Jeśli to właśnie tam jest problem, urządzenie go nie ruszy. Na prezentacji pytam o te rzeczy na początku, bo od nich zależy, czy zakup ma sens.",
    },
  ],

  geo: { lat: 52.3167, lng: 16.1333 },
};
