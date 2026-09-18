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
 * ŻERKÓW — powiat jarociński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA — starostwo
 *   podaje wprost: „miasta: Jarocin i Żerków oraz
 *   gminy: Jaraczewo, Jarocin, Kotlin i Żerków".
 * MIASTO: 2 066 mieszkańców (GUS 31.12.2024), 2,2 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   956,5 os./km², iloraz z 2,2 km² daje 939,1.
 *   ROZBIEŻNOŚĆ 17,41.
 *   ⚠⚠⚠ POWIERZCHNI ODTWORZONEJ (2,16 km²)
 *   NIE PODAJĘ — to rekonstrukcja, nie cytat.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * ⚠⚠⚠ LUDNOŚCI CAŁEJ GMINY NIE PODAJĘ — DANYCH GUS
 *   NA 31.12.2024 NIE USTALONO [NP]. ANI GĘSTOŚCI
 *   GMINY. MÓWIĘ TO WPROST W TEKŚCIE, ZAMIAST
 *   PODAWAĆ LICZBĘ Z INNEGO ROCZNIKA.
 *   ⚠⚠⚠ TO JEDYNA STRONA W CAŁEJ SERII BEZ LICZBY
 *   MIESZKAŃCÓW GMINY. ŚWIADOMIE.
 * POWIERZCHNIA GMINY: 171,27 km² (ewidencja 2025) —
 *   największa obszarowo gmina tej fali. PODAJĘ,
 *   ZAZNACZAJĄC, ŻE TO JEDNO ŹRÓDŁO.
 * SOŁECTWA: 21 (starostwo). PODAJĘ.
 *   ⚠⚠ MIEJSCOWOŚCI: 36 (ewidencja) — PODAJĘ.
 *   ⚠⚠ OBRĘBÓW (20) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI (część): Śmiełów, Brzóstków, Kretków,
 *   Raszewy, Żerniki, Żółków, Komorze Przybysławskie,
 *   Przybysław, Lubinia Mała, Chrzan, Dobieszczyzna,
 *   Gąsiorów, Kamień, Laski, Lgów, Lisew, Ludwinów,
 *   Miniszew, Paruchów, Pawłowice, Podlesie,
 *   Pogorzelica, Rozmarynów, Sierszew, Stęgosz, Sucha,
 *   Szczonów, Bieździadów, Antonin.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 14,9 %. PODAJĘ.
 * PARK KRAJOBRAZOWY ŻERKOWSKO-CZESZEWSKI:
 *   utworzony w 1994 r., powierzchnia 156,4 km²;
 *   na obszarze gminy Żerków zajmuje 8 680 ha.
 *   TO RDZEŃ KĄTA.
 * NAZWA MIASTA: pochodzi od staropolskiego imienia
 *   ŻYREK. PODAJĘ JEDNYM ZDANIEM.
 *   ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — kąty „nazwisko
 *   od miejsca" (Miłosław) i „objaśnienie dopisane
 *   później" (Tuliszków) ZAJĘTE.
 * ⚠ GEO: 52,0685 / 17,5629 (punkt miasta).
 *   ⚠ PUNKTU GMINY NIE USTALONO [NP].
 *
 * ⚠⚠ ODMIANA — „Ó" RUCHOME WYPADA:
 *   D. do ŻERKOWA · Ms. w ŻERKOWIE ·
 *   N. Żerkowem · C. Żerkowowi.
 *   ⚠ POTWIERDZENIE DOPEŁNIACZA: „Wśród właścicieli
 *   Żerkowa…". ⚠ MIEJSCOWNIKA NIE POTWIERDZONO
 *   CYTATEM [NP], ale wzorzec jest ten sam co
 *   w Raszkowie.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: ZACHOWANIE „Ó" —
 *   „do Żerkówa", „w Żerkówie". WSPOMINAM.
 *   ⚠⚠ BŁĄD DRUGI, ORTOGRAFICZNY: pisownia przez „rz"
 *   („Rzerków") albo bez kreski („Żerkow"). WSPOMINAM.
 *   PRZYMIOTNIK: ŻERKOWSKI — POTWIERDZONY URZĘDOWĄ
 *   NAZWĄ PARKU. UŻYWAM.
 *   ⚠⚠⚠ NIE TŁUMACZĘ, ŻE TO NAZWA PARKU GO DOWODZI —
 *   kąt „dowód leży w sąsiedniej nazwie" ZAJĘTY
 *   (Skoki).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — 2 PAŹDZIERNIKA 1283 R. — rejestr wpisuje tę datę
 *     jako uzyskanie praw miejskich; serwis gminy pisze,
 *     że w tym dokumencie Żerków został „wymieniony
 *     wśród miast".
 *     ⚠⚠⚠ PODAJĘ OBA ODCZYTY JEDNYM ZDANIEM I NIE
 *     ROZSTRZYGAM. ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ —
 *     kąt „istniało długo, zanim ktoś to zapisał"
 *     ZAJĘTY (Kłecko, poprzednia fala).
 *   — PARK: 1994 R.
 *   — ŚMIEŁÓW: Adam Mickiewicz przebywał tam w 1831 r.
 *     WĄTEK LITERACKI — DOPUSZCZALNY. PODAJĘ.
 *     ⚠⚠⚠ KONTEKSTU POLITYCZNEGO ROKU 1831
 *     NIE ROZWIJAM.
 *   ⚠⚠⚠ LAT 1793, 1807–1815 I 1919 NIE WSPOMINAM —
 *     wątki polityczne i zaborcze.
 *   ⚠⚠⚠ POMNIKA Z 1954 R. NIE WSPOMINAM.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ RODÓW WŁAŚCICIELI NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWIE POŁOWY, OBIE PRAWDZIWE:
 *   PARK KRAJOBRAZOWY ŻERKOWSKO-CZESZEWSKI MA
 *   156,4 km². NA OBSZARZE GMINY ŻERKÓW ZAJMUJE
 *   8 680 ha, CZYLI 86,8 km². GMINA MA 171,27 km².
 *   Z TYCH TRZECH LICZB WYCHODZĄ DWA ZDANIA:
 *   — PONAD POŁOWA GMINY LEŻY W PARKU (ok. 51 %),
 *   — PONAD POŁOWA PARKU LEŻY W GMINIE (ok. 55 %).
 *   TA SAMA LICZBA 86,8 km², DWA RÓŻNE MIANOWNIKI,
 *   DWA RÓŻNE ZNACZENIA — I OBA PRAWDZIWE.
 *   ⚠⚠ PROCENTY PODAJĘ JAKO „OKOŁO" I MÓWIĘ,
 *   ŻE SAMA JE POLICZYŁAM Z DWÓCH ŹRÓDEŁ.
 *   ⚠⚠ NIE PODAJĘ RÓŻNICY W PUNKTACH PROCENTOWYCH.
 *
 * KĄT: PROCENT BEZ MIANOWNIKA NIC NIE ZNACZY
 * — o tym, że „połowa" zależy wyłącznie od tego,
 * co dzielimy, i że w kuchni to samo zdanie potrafi
 * znaczyć dwie różne rzeczy. Kąt z Żerkowa: 86,8 km²,
 * które są jednocześnie połową gminy i połową parku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ta sama powierzchnia 86,8 km² daje dwa zdania:
 *   ponad połowa gminy leży w parku i ponad połowa
 *   parku leży w gminie. TO JEST RDZEŃ,
 * — że obie liczby są prawdziwe i że różni je tylko
 *   mianownik,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „połowa jedzenia
 *   się marnuje" — połowa czego? Wagi, sztuk,
 *   pieniędzy? Za każdym razem wychodzi co innego,
 * — ⚠⚠ ŻE PROCENT BEZ MIANOWNIKA JEST NIESPRAWDZALNY,
 *   więc nie da się na nim oprzeć żadnej decyzji,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy każdej liczbie
 *   powiedzieć, z czego się ją liczy. „Co trzeci
 *   obiad" zamiast „30 procent",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie każdy procent
 *   trzeba rozbierać. W rozmowie to skrót i tak ma
 *   być — mianownik jest potrzebny dopiero wtedy,
 *   gdy liczba ma o czymś rozstrzygać,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE: DLATEGO NIE PODAJĘ
 *   ŻADNYCH PROCENTÓW OSZCZĘDNOŚCI CZASU ANI
 *   PIENIĘDZY. MÓWIĘ TO WPROST — LICZBA BEZ
 *   MIANOWNIKA BYŁABY OBIETNICĄ BEZ POKRYCIA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NIELICZONE JEST WIĘKSZE OD LICZONEGO —
 *   kąt zajęty (Pyzdry). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam PORÓWNYWAŁAM
 *   DWIE RÓŻNE WIELKOŚCI; tu JEDNA WIELKOŚĆ jest
 *   dzielona przez dwa różne mianowniki.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO POŁĄCZONE W JEDEN UKŁAD — kąt zajęty
 *   (Ślesin). ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO DUŻO MIEJSCA, MAŁO ZAGĘSZCZENIA — kąt
 *   zajęty (Sulmierzyce).
 * — ⚠⚠ ZERO ISTNIAŁO DŁUGO, ZANIM KTOŚ TO ZAPISAŁ —
 *   kąt zajęty (Kłecko). DLATEGO DWA ODCZYTY DATY
 *   1283 PODAJĘ JAKO FAKT, BEZ FIGURY.
 * — ⚠⚠ ZERO DOWÓD LEŻY W SĄSIEDNIEJ NAZWIE — kąt
 *   zajęty (Skoki).
 * — ⚠⚠ ZERO MAŁA CAŁOŚĆ, DUŻA ROZPIĘTOŚĆ W ŚRODKU —
 *   kąt zajęty (Ujście).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNYCH KWOT, PROCENTÓW OSZCZĘDNOŚCI ANI
 *   OBIETNIC FINANSOWYCH. ⚠⚠⚠ TU RYZYKO JEST
 *   NAJWIĘKSZE W TEJ FALI, BO KĄT DOTYCZY PROCENTÓW.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   WYRZUTÓW O MARNOWANIE JEDZENIA.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO WĄTKU ZABORCZEGO.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ ludności ani gęstości całej gminy.
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 2,16 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE ROZSTRZYGAM, co oznacza data 2 października
 *   1283 r.
 * — NIE PODAJĘ różnicy między dwoma procentami.
 * — NIE PODAJĘ żadnych procentów oszczędności.
 * — NIE WYMIENIAM właścicieli miasta.
 * — NIE PODAJĘ największej wsi, rzeki ani wysokości
 *   n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Żerków leży w powiecie jarocińskim i liczy 2 066
 *   mieszkańców (GUS, 31.12.2024) na 2,2 km²,
 * — gmina miejsko-wiejska Żerków ma 171,27 km²
 *   (ewidencja 2025), 21 sołectw, 36 miejscowości
 *   i lesistość 14,9 %; liczby mieszkańców gminy
 *   nie ustaliłam i jej nie podaję,
 * — Żerkowsko-Czeszewski Park Krajobrazowy utworzono
 *   w 1994 r., ma 156,4 km², a na obszarze gminy
 *   Żerków zajmuje 8 680 ha, czyli 86,8 km²,
 * — nazwa miasta pochodzi od staropolskiego imienia
 *   Żyrek,
 * — rejestr podaje 2 października 1283 r. jako datę
 *   praw miejskich, a serwis gminy opisuje ten sam
 *   dokument jako wymieniający Żerków wśród miast,
 * — w Śmiełowie w 1831 r. przebywał Adam Mickiewicz,
 * — w gminie leżą m.in. Śmiełów, Brzóstków, Kretków,
 *   Raszewy, Żerniki, Żółków, Przybysław, Komorze
 *   Przybysławskie i Lubinia Mała.
 */
export const ZERKOW: CityContent = {
  slug: "zerkow",
  h1: "Thermomix Żerków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żerków — cena i prezentacja",
  seoDescription:
    "Thermomix w Żerkowie w powiecie jarocińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żerków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żerkowie pod Jarocinem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żerkowa w powiecie jarocińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu jeden sołectw w gminie.",

  highlights: highlightyStandardowe("Żerków"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta sama liczba jest połową gminy i połową parku. Obie prawdziwe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żerkowie – jak wygląda prezentacja?",
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
      id: "dwie-polowy",
      heading: "Procent bez mianownika nic nie znaczy",
      paragraphs: [
        "Żerkowsko-Czeszewski Park Krajobrazowy utworzono w 1994 roku i ma sto pięćdziesiąt sześć i cztery dziesiąte kilometra kwadratowego. Na obszarze gminy Żerków zajmuje osiem tysięcy sześćset osiemdziesiąt hektarów, czyli osiemdziesiąt sześć i osiem dziesiątych kilometra kwadratowego. Sama gmina ma sto siedemdziesiąt jeden i dwadzieścia siedem setnych kilometra kwadratowego.",
        "Z tych trzech liczb wychodzą dwa zdania i oba są prawdziwe. Ponad połowa gminy Żerków leży w parku — to jakieś pięćdziesiąt jeden procent. I jednocześnie ponad połowa parku leży w gminie Żerków — to jakieś pięćdziesiąt pięć procent. Procenty policzyłam sama z dwóch źródeł, więc podaję je jako „około”.",
        "To dokładnie ta sama powierzchnia, osiemdziesiąt sześć i osiem kilometra kwadratowego. Zmienia się tylko mianownik — to, przez co ją dzielimy. I od tego jednego wyboru zależy, czy zdanie mówi coś o gminie, czy o parku.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o gminie, w której to, czego się nie liczy, okazało się większe od tego, co się liczy — tam porównywałam dwie różne wielkości. Tutaj wielkość jest jedna, a różne są mianowniki. I drugie rozróżnienie: pisałam też o miejscu, w którym trzy osobne rzeczy połączono w jeden układ; tu nic się nie łączy, po prostu dwa obszary na siebie zachodzą.",
        "Piszę o tym, bo w kuchni procenty padają bez przerwy i prawie nigdy nie mają mianownika.",
        "„Połowa jedzenia się u nas marnuje.” Połowa czego? Wagi, sztuk czy pieniędzy? Jeśli wagi — to może być głównie woda z zupy. Jeśli pieniędzy — to zupełnie inna rozmowa. Jeśli sztuk — to prawdopodobnie chodzi o kilka rzeczy, które się powtarzają. Trzy różne odpowiedzi prowadzą do trzech różnych rozwiązań, a zdanie brzmi za każdym razem tak samo.",
        "To samo dotyczy zdań w drugą stronę: „oszczędzam trzydzieści procent”. Na czym, wobec czego i w jakim okresie? Bez tych trzech informacji liczba nie jest ani prawdziwa, ani fałszywa — jest po prostu niesprawdzalna. A na niesprawdzalnej liczbie nie da się oprzeć żadnej decyzji.",
        "Ruch jest jeden i polega na zamianie procentu na coś policzalnego. Zamiast „trzydzieści procent obiadów” — „co trzeci obiad w tygodniu”. Zamiast „połowa się marnuje” — „dwa razy w tygodniu wyrzucamy chleb”. Takie zdanie od razu podpowiada, co zrobić, bo mówi o konkretnych rzeczach i konkretnych dniach.",
        "Uczciwie o drugiej stronie, bo nie każdy procent trzeba rozbierać na części. W rozmowie „połowa” jest skrótem i ma nim być — nikt nie będzie przy kawie podawał mianownika. Rzecz w tym, żeby rozpoznać moment, w którym liczba przestaje być skrótem i zaczyna o czymś rozstrzygać: przy zakupie, przy zmianie sposobu gotowania, przy planowaniu budżetu. Wtedy mianownik jest obowiązkowy.",
        "I dlatego nie znajdziecie u mnie zdania, że Thermomix oszczędza tyle a tyle procent czasu albo pieniędzy. Takie liczby krążą, ale bez mianownika są obietnicą bez pokrycia — a z mianownikiem musiałyby dotyczyć konkretnie Waszej kuchni, Waszych dań i tego, co dziś robicie. Wolę policzyć to z Wami na prezentacji na Waszych przykładach niż podać gotową liczbę, która brzmi dobrze i nic nie znaczy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żerkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żerkowie"),
    sekcjaRaty("w Żerkowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Żerkowa",
      paragraphs: [
        "Żerków leży w powiecie jarocińskim i liczy 2 066 mieszkańców (GUS, 31.12.2024) na dwóch i dwóch dziesiątych kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska ma sto siedemdziesiąt jeden i dwadzieścia siedem setnych kilometra kwadratowego, dwadzieścia jeden sołectw i trzydzieści sześć miejscowości, przy lesistości czternastu i dziewięciu dziesiątych procenta — liczby mieszkańców całej gminy nie udało mi się ustalić na koniec 2024 roku, więc jej nie podaję zamiast podać ją z innego rocznika. Żerkowsko-Czeszewski Park Krajobrazowy utworzono w 1994 roku. Rejestr podaje 2 października 1283 roku jako datę praw miejskich, a serwis gminy opisuje ten sam dokument jako wymieniający Żerków wśród miast — tego nie rozstrzygam. Nazwa miasta pochodzi od staropolskiego imienia Żyrek, a w Śmiełowie przebywał w 1831 roku Adam Mickiewicz.",
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

  districtsHeading: "Do których części Żerkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu jeden sołectw w gminie. Nazywają się między innymi: Śmiełów, Brzóstków, Kretków, Raszewy, Żerniki, Żółków, Przybysław, Komorze Przybysławskie, Lubinia Mała, Chrzan, Dobieszczyzna, Gąsiorów, Kamień, Laski, Lgów, Lisew, Pawłowice, Podlesie, Pogorzelica, Stęgosz i Sucha. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: w gminie leżą trzy nazwy na „Ż” — samo miasto, Żerniki i Żółków — a do tego Raszewy, których nazwa bywa mylona z Raszkowem, osobnym miastem w powiecie ostrowskim; są też osobno Przybysław i Komorze Przybysławskie. Warto podać pełną nazwę. Druga, językowa: „ó” wypada z odmiany, więc mówi się „do Żerkowa” i „w Żerkowie”, a nie „do Żerkówa”. I jeszcze ortografia: nazwa zaczyna się od „Ż” z kropką, nie od „rz”, a w mianowniku ma „ó” z kreską.",
  ],
  districts: [],

  nearbyHeading: "Poza Żerków też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Jarocina, Pleszewa, Miłosławia, Pyzdr, Wrześni i Środy Wielkopolskiej — wszędzie bezpłatnie, tak samo jak w samym Żerkowie.",
  ],
  nearbyTowns: ["Jarocin", "Pleszew", "Miłosław", "Pyzdry", "Września", "Środa Wielkopolska"],

  about: blokOMnie("do Żerkowa", "w Żerkowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żerkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu jeden sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa: w gminie są trzy nazwy na „Ż” — Żerków, Żerniki i Żółków — a wieś Raszewy bywa mylona z Raszkowem, osobnym miastem w powiecie ostrowskim. Językowo: „ó” wypada z odmiany, czyli „do Żerkowa” i „w Żerkowie”, nie „do Żerkówa”.",
    },
    ...faqWspolne("w Żerkowie"),
    {
      question: "Ile czasu i pieniędzy realnie oszczędza Thermomix?",
      answer:
        "Nie podam Wam procentu i zaraz wyjaśnię dlaczego. Procent bez mianownika jest niesprawdzalny: „oszczędzam trzydzieści procent” nie mówi ani na czym, ani wobec czego, ani w jakim okresie — a na takiej liczbie nie da się oprzeć decyzji o zakupie. Żerków jest tu dobrym obrazem: te same osiemdziesiąt sześć i osiem kilometra kwadratowego to jednocześnie ponad połowa gminy i ponad połowa parku krajobrazowego, bo zmienia się tylko mianownik. Ta sama liczba, dwa znaczenia, oba prawdziwe. Dlatego na prezentacji wolę policzyć oszczędność na Waszych przykładach — na tym, co gotujecie w zwykły tydzień — niż podać gotową liczbę, która brzmi dobrze i nic nie znaczy.",
    },
    {
      question: "Mówimy w domu, że połowa jedzenia się marnuje. Od czego zacząć?",
      answer:
        "Od zamiany tego zdania na coś policzalnego, bo „połowa” może znaczyć trzy różne rzeczy. Połowa wagi to często głównie woda i obierki. Połowa pieniędzy to zupełnie inna rozmowa i inne wnioski. Połowa sztuk zwykle oznacza kilka produktów, które powtarzają się co tydzień. Zamiast procentu spróbujcie powiedzieć: „dwa razy w tygodniu wyrzucamy chleb” albo „co drugi pęczek natki”. Takie zdanie samo podpowiada, co zrobić, bo mówi o konkretnej rzeczy i konkretnym dniu. I bez wyrzutów — to jest kwestia rachunku, a nie charakteru.",
    },
  ],

  geo: { lat: 52.0685, lng: 17.5629 },
};
