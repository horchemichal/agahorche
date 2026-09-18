import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * SYCÓW — powiat oleśnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Syców.
 * MIASTO: 9 922 mieszkańców (GUS 31.12.2024), 17,1 km²,
 *   gęstość 581,9 os./km².
 * CAŁA GMINA: 16 487 osób, 145,6 km², 12 wsi.
 *   Wsie: Biskupice, Drołtowice, Działosza, Gaszowice,
 *   Komorów, Nowy Dwór, Stradomia Wierzchnia, Szczodrów,
 *   Wielowieś, Wioska, Zawada, Ślizów.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 51,3 / 17,7167.
 *
 * ⚠⚠⚠ ODMIANA — WYMIANA ó → o W PRZYPADKACH ZALEŻNYCH:
 *   M. SycÓw, ale D. SycOwa, Ms. w SycOwie, N. SycOwem.
 *   ⚠⚠⚠ „W SYCÓWIE" JEST BŁĘDEM ORTOGRAFICZNYM.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM PRZED PUBLIKACJĄ.
 *   Przymiotnik: SYCOWSKI (forma urzędowa, bip.sycow.pl).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   Sycowa Huta (pomorskie), Sycowice (lubuskie),
 *   Sycyna (mazowieckie), Szyców, Sytkowo.
 *   ⚠⚠ BUKOWINA SYCOWSKA leży w gminie Dziadowa Kłoda,
 *   NIE w gminie Syców — mimo przymiotnika w nazwie.
 *   ⚠⚠ MYLENIE Z OLEŚNICĄ — Syców jest w powiecie
 *   oleśnickim, ale Oleśnica ma własną, silniejszą markę.
 *   PISZĘ „SYCÓW W POWIECIE OLEŚNICKIM", nigdy samo
 *   „w oleśnickim". ROZGRANICZAM W FAQ.
 *   ⚠ Syców bywa mylnie umieszczany w Wielkopolsce —
 *   leży blisko granicy, a kolej prowadzi do Kępna.
 *   ⚠ Najczęstsze błędy zapisu: „Sytów", „Szyców",
 *   „Sycow", „Sycewo".
 *
 * ⚠⚠⚠ DATA 1276 — ŹRÓDŁA ZLEWAJĄ DWA RÓŻNE FAKTY:
 *   jedno mówi o NADANIU PRAW MIEJSKICH w 1276,
 *   drugie o PIERWSZEJ WZMIANCE w dokumencie księcia
 *   Henryka IV Probusa. TO NIE JEST TO SAMO.
 *   ⚠⚠⚠ PISZĘ WYŁĄCZNIE: „Syców pojawia się w źródłach
 *   w 1276 roku, w dokumencie księcia Henryka IV Probusa".
 *   NIE TWIERDZĘ, ŻE TO DATA NADANIA PRAW MIEJSKICH.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIEŻA RATUSZA:
 *   Ratusz odbudowywano po pożarze; kamień węgielny
 *   położono 7 czerwca 1817 r., a hełm z flagą i gwiazdą
 *   nasadzono 10 grudnia 1818 — CZYLI OSIEMNAŚCIE
 *   MIESIĘCY. Wieża miała wtedy 28 METRÓW.
 *   OKOŁO 1853 R., PRZY PRZEBUDOWIE NEOGOTYCKIEJ,
 *   PODNIESIONO JĄ DO 40 METRÓW — dołożono dwanaście
 *   metrów do czegoś, co od trzydziestu pięciu lat
 *   działało poprawnie. TO JEST CAŁY KĄT.
 *   ⚠ Powierzchnia użytkowa budynku: 900 m².
 *   ⚠ Koszt odbudowy 4 500 talarów plus materiały,
 *   z czego 3 000 talarów z dotacji Królewskiego Rządu.
 *   ⚠⚠ TEJ PROPORCJI (dwie trzecie z zewnątrz) NIE UŻYWAM
 *   JAKO MORAŁU — byłby to osobny kąt o tym, ile sprzętu
 *   w kuchni nie zostało wybrane. PODAJĘ JAKO FAKT.
 *   ⚠ Pożary (1742, 1813) podaję WYŁĄCZNIE jako punkty
 *   na osi czasu. ZERO ŻYWIOŁU, ZERO DRAMATU.
 *
 * ⚠⚠⚠ ROZGRANICZENIE WOBEC ZAMOŚCIA (kąt zajęty:
 *   „dokładane po kolei"): TAMTEN TEKST JEST O TYM, ŻE
 *   CAŁOŚĆ POWSTAWAŁA ETAPAMI. TEN JEST O DECYZJI, ŻEBY
 *   ODŁOŻYĆ DOŁOŻENIE DO CZASU, AŻ SIĘ TEGO UŻYJE.
 *   ⚠⚠ ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 *   ⚠⚠ RÓWNIEŻ WOBEC GÓRY (ta sama fala): tamten tekst
 *   jest o czasie POWROTU do stanu używalności, ten
 *   o momencie DOŁOŻENIA. Nie piszę o porządkach.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — Dawna brama miejska, dziś wolno stojąca wieża
 *   o wysokości 56,2 m, przebudowana w 1909 r.,
 *   z barokowym hełmem z XVIII w.
 *   ⚠ DATOWANIA BRAMY NIE PODAJĘ — XIV albo XV w.
 *   ⚠⚠ OPISUJĘ JĄ WYŁĄCZNIE JAKO BUDOWLĘ, KTÓRA
 *   ZMIENIŁA FUNKCJĘ. ZERO WĄTKU WYZNANIOWEGO.
 *   ⚠⚠ „ZMIANA FUNKCJI OBIEKTU" NIE JEST TU KĄTEM —
 *   podaję jako fakt z wymiarem, bez morału.
 * — Mury obronne XIV–XV w., wzmocnione w 1578 r.
 *   ⚠⚠ DŁUGOŚCI ANI LICZBY BASZT NIE USTALONO.
 *   ⚠⚠ MURÓW NIE UŻYWAM JAKO KĄTA — obszar zajęty
 *   (Recz, Moryń, Resko).
 * — Rozbudowę zamku zakończono w 1853 r.
 *   ⚠⚠⚠ PAŁACU BIRONÓW I JEGO ROZBIÓRKI NIE OPISUJĘ —
 *   wątek prowadzi wprost do 1945 r. TWARDA GRANICA.
 *   ⚠ Powierzchni 1 687,53 m² NIE PODAJĘ z tego powodu.
 * — W parku stoją cztery neobarokowe marmurowe figury
 *   przedstawiające pory roku oraz kopie wersalskich
 *   rzeźb z brązu; park uszczuplono przy budowie drogi S8.
 *   ⚠⚠ POWIERZCHNI PARKU NIE PODAJĘ — źródła podają
 *   29 ha albo ponad 100 ha. RÓŻNICA CZTEROKROTNA.
 *   ⚠⚠ CZTERECH PÓR ROKU NIE UŻYWAM JAKO KĄTA — to
 *   gotowa klisza o sezonowości. PODAJĘ JAKO FAKT.
 * — Syców stał się miastem powiatowym w 1741 r.
 * — KOLEJ: linia Oleśnica–Kępno, 1871.
 * — Pierwsze targi lnem w Sycowie: 1937.
 * — Archiwalia miejskie gromadzone od 1874 r.
 *   ⚠⚠ ICH LOSU NIE OPISUJĘ — wątek prowadzi do 1945.
 * — ⚠⚠⚠ KOŚCIOŁA EWANGELICKIEGO (1785–1789, projekt
 *   Carla Gottharda Langhansa) NIE UŻYWAM.
 *   Powód podwójny: wątek wyznaniowy ORAZ zestawienie
 *   z Bramą Brandenburską wymagałoby daty, której
 *   NIE ZWERYFIKOWAŁEM. TWARDA GRANICA.
 * — ⚠⚠ „WOLNEGO PAŃSTWA STANOWEGO" (1489) NIE UŻYWAM —
 *   termin historyczny, we współczesnym tekście czyta się
 *   jak błąd.
 * — ⚠⚠ SZPITALA NA 50 ŁÓŻEK (1906) NIE PODAJĘ —
 *   wątek zdrowotny.
 * — ⚠⚠ SYNAGOGI NIE OPISUJĘ — wątek prowadzi do 1938
 *   i dalej. TWARDA GRANICA.
 *
 * KĄT: DOŁOŻONE PO TRZYDZIESTU PIĘCIU LATACH UŻYWANIA
 * — o tym, że najlepsze rozbudowy kuchni przychodzą
 * po okresie używania, nie przed nim. Kąt od sycowskiej
 * wieży: dwadzieścia osiem metrów w 1818, czterdzieści
 * około 1853 — dołożone do czegoś, co już działało.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że sycowski ratusz odbudowano w osiemnaście miesięcy:
 *   kamień węgielny 7 czerwca 1817, hełm 10 grudnia 1818,
 * — że wieża miała wtedy dwadzieścia osiem metrów
 *   i tyle wystarczyło; że dopiero około 1853 r.
 *   podniesiono ją do czterdziestu — PO TRZYDZIESTU
 *   PIĘCIU LATACH DZIAŁANIA. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE: projektujemy
 *   „docelowo", z góry, zanim cokolwiek się w niej
 *   wydarzyło — i wtedy dokładamy dwanaście metrów
 *   w niewłaściwym miejscu,
 * — ⚠⚠ ŻE WERSJA, KTÓRA DZIAŁA, MOŻE BYĆ SKROMNA:
 *   niższa, prostsza, z mniejszą liczbą rzeczy. Ważne
 *   jest to, żeby jej używać, a nie żeby od razu była
 *   pełna,
 * — ⚠⚠ ŻE PO ROKU UŻYWANIA WIADOMO RZECZ, KTÓREJ NIE
 *   DA SIĘ WYMYŚLIĆ WCZEŚNIEJ: czego brakuje NAPRAWDĘ
 *   i w którym konkretnie miejscu. Dopiero wtedy
 *   dokładanie trafia,
 * — ⚠⚠ ŻE TO NIE JEST TO SAMO CO BUDOWANIE ETAPAMI —
 *   ROZGRANICZAM WPROST. Chodzi o odłożenie decyzji
 *   do czasu, aż pojawią się dane z używania,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część rzeczy trzeba
 *   zaplanować od razu, bo później się nie da —
 *   instalacji, gniazdek, tego, co wpuszczone w zabudowę.
 *   Ta zasada dotyczy wyposażenia, nie fundamentów,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest dokładnie
 *   taką „nadbudową". MÓWIĘ WPROST, że nie trzeba go
 *   kupować na starcie urządzania kuchni i że rok
 *   gotowania bez niego jest najlepszym testem, czy
 *   w ogóle jest potrzebny.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DOKŁADANIA PO KOLEI I BUDOWANIA ETAPAMI —
 *   kąt zajęty (Zamość). ROZGRANICZAM JAWNIE.
 * — ⚠⚠⚠ ZERO CZASU ODTWORZENIA I PORZĄDKÓW — kąt pisany
 *   w tej samej fali (Góra). Osiemnaście miesięcy
 *   odbudowy podaję JAKO FAKT, bez morału o czasie
 *   składania.
 * — ⚠⚠⚠ ZERO CYKLI RENOWACJI I POWROTÓW DO NAPRAWY —
 *   kąt zajęty (Chojnów).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra). ⚠⚠ ZERO SKALI I PRZELICZANIA —
 *   kąt pisany w tej samej fali (Kowary).
 * — ⚠⚠ ZERO METODY I KOLEJNOŚCI — kąt pisany w tej samej
 *   fali (Milicz).
 * — ⚠⚠ ZERO MIEJSCA, KTÓRE MA BYĆ PUSTE — kąt zajęty
 *   (Wołów).
 * — ⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI I UKŁADU KUCHNI —
 *   obszar zajęty wielokrotnie.
 * — ⚠⚠ ZERO PROPORCJI „DWIE TRZECIE Z ZEWNĄTRZ" —
 *   to byłby osobny kąt. Podaję liczby bez morału.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ LISTY, CO KUPIĆ NAJPIERW — podaję
 *   WYŁĄCZNIE zasadę: najpierw używaj, potem dokładaj.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ROKU 1945 I 1938, PRZESIEDLEŃ, NIEMIECKIEJ
 *   NAZWY — pałac, synagoga i archiwalia odpadają
 *   w całości właśnie z tego powodu.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła nie opisuję,
 *   wieżę podaję jako dawną bramę miejską.
 * — ⚠⚠ ZERO POŻARU JAKO ŻYWIOŁU — daty 1742 i 1813
 *   wyłącznie jako punkty na osi czasu.
 * — ⚠⚠ ZERO WĄTKU ZDROWOTNEGO — szpitala nie wymieniam.
 * — ⚠ ZERO DEMOGRAFII I WYLUDNIANIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich — źródła
 *   zlewają nadanie z pierwszą wzmianką.
 * — NIE PODAJĘ datowania dawnej bramy miejskiej —
 *   XIV albo XV w.
 * — NIE PODAJĘ powierzchni parku — 29 ha albo ponad 100.
 * — NIE PODAJĘ roku, w którym Bironowie otrzymali
 *   Syców — 1734 albo 1764, różnica trzydziestu lat.
 * — NIE PODAJĘ roku przebudowy kościoła śś. Piotra
 *   i Pawła — 1905 albo 1908.
 * — NIE PODAJĘ lat rozbiórki pałacu.
 * — NIE OPISUJĘ pałacu, synagogi ani losu archiwaliów.
 * — NIE PODAJĘ długości murów ani liczby baszt.
 * — NIE ROBIĘ morału z proporcji dotacji.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pszenno-żytnie pierniki z Oleśnicy"
 *   pochodzą z gminy Oleśnica — TEN SAM POWIAT, INNA
 *   GMINA. NIE PRZYPISUJĘ ICH SYCOWOWI.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Syców leży w powiecie oleśnickim; miasto liczy
 *   9 922 mieszkańców (GUS, 31.12.2024) na 17,1 km²,
 *   a cała gmina miejsko-wiejska 16 487 osób
 *   na 145,6 km², z dwunastoma wsiami; w źródłach
 *   pojawia się w 1276 r., w dokumencie księcia
 *   Henryka IV Probusa, a miastem powiatowym stał się
 *   w 1741,
 * — ratusz odbudowywano po pożarze z 1813 r.: kamień
 *   węgielny położono 7 czerwca 1817, a hełm z flagą
 *   i gwiazdą nasadzono 10 grudnia 1818 — osiemnaście
 *   miesięcy; budynek ma 900 m² powierzchni użytkowej,
 *   a odbudowa kosztowała 4 500 talarów plus materiały,
 *   z czego 3 000 talarów pochodziło z dotacji
 *   Królewskiego Rządu,
 * — wieża ratusza miała wtedy 28 m; około 1853 r.,
 *   przy przebudowie neogotyckiej, podniesiono ją
 *   do 40 m,
 * — dawna brama miejska, dziś wolno stojąca wieża, mierzy
 *   56,2 m, ma barokowy hełm z XVIII w. i została
 *   przebudowana w 1909 r.; mury obronne pochodzą
 *   z XIV–XV w. i zostały wzmocnione w 1578,
 * — rozbudowę zamku zakończono w 1853 r.; w parku stoją
 *   cztery neobarokowe marmurowe figury przedstawiające
 *   pory roku oraz kopie wersalskich rzeźb z brązu,
 *   a sam park uszczuplono przy budowie drogi S8,
 * — linię kolejową z Oleśnicy do Kępna otwarto w 1871 r.,
 *   a pierwsze targi lnem odbyły się w Sycowie w 1937.
 */
export const SYCOW: CityContent = {
  slug: "sycow",
  h1: "Thermomix Syców – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Syców — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sycowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Syców — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sycowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sycowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwunastu wsi w gminie.",

  highlights: highlightyStandardowe("Syców"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia osiem metrów w 1818 roku. Czterdzieści dopiero po trzydziestu pięciu latach używania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sycowie – jak wygląda prezentacja?",
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
      id: "dolozone-po-uzywaniu",
      heading: "Dwanaście metrów dołożone po trzydziestu pięciu latach",
      paragraphs: [
        "Sycowski ratusz odbudowywano szybko. Kamień węgielny położono 7 czerwca 1817 roku, a hełm z flagą i gwiazdą nasadzono 10 grudnia 1818 — osiemnaście miesięcy od początku do końca. Wieża miała wtedy dwadzieścia osiem metrów.",
        "I tyle wystarczyło. Przez trzydzieści pięć lat wieża robiła dokładnie to, co miała robić.",
        "Dopiero około 1853 roku, przy przebudowie, podniesiono ją do czterdziestu metrów. Dwanaście metrów dołożono do czegoś, co od trzech dekad działało bez zarzutu.",
        "W kuchni robimy odwrotnie i prawie zawsze.",
        "Urządzamy „docelowo”. Zanim cokolwiek się w tej kuchni wydarzyło, zanim ktokolwiek ugotował w niej pierwszy obiad, już wiadomo, gdzie ma być druga szuflada na przyprawy, jaki ma być hak i ile ma być sprzętu. Decyzje zapadają w momencie, w którym nie ma o nich żadnych danych — tylko wyobrażenie o tym, jak będziemy gotować.",
        "I potem dokłada się dwanaście metrów w niewłaściwym miejscu.",
        "Wersja, która działa, może być skromna. Niższa, prostsza, z mniejszą liczbą rzeczy niż docelowa. Nic złego się nie dzieje — ważne jest to, żeby jej używać, a nie żeby od pierwszego dnia była pełna.",
        "Bo po roku używania wiadomo rzecz, której nie da się wymyślić wcześniej: czego brakuje naprawdę i w którym konkretnie miejscu. Nie „przydałaby się jeszcze jedna półka”, tylko „ta półka jest za wysoko o dwadzieścia centymetrów i dlatego nic na niej nie stoi”. Takie zdanie można napisać dopiero po roku.",
        "Dopowiem, żeby nie było nieporozumienia: to nie jest to samo co budowanie etapami, bo nie chodzi o rozłożenie roboty na raty. Chodzi o odłożenie jednej konkretnej decyzji do momentu, w którym pojawią się dane z używania.",
        "Uczciwie o drugiej stronie, bo ta zasada ma wyraźną granicę: część rzeczy trzeba zaplanować od razu, bo później się nie da. Instalacje, gniazdka, wszystko, co wpuszczone w zabudowę. Tego się nie dokłada po roku i nie udaję, że się da. Zasada dotyczy wyposażenia, nie fundamentów.",
        "Na koniec o urządzeniu, i powiem to najprościej, jak umiem, choć nie brzmi to jak coś, co powinnam mówić.",
        "Thermomix jest dokładnie taką nadbudową — tym, co się dokłada, a nie tym, od czego się zaczyna. Nie trzeba go kupować na starcie urządzania kuchni. Rok gotowania bez niego jest najlepszym testem, czy w ogóle jest Wam potrzebny, i jeśli po tym roku okaże się, że nie, to jest to zupełnie dobry wynik. A jeśli okaże się, że tak, będziecie wiedzieć dlaczego — konkretnie, a nie z broszury.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sycowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, od jak dawna gotujecie w tej kuchni. To brzmi jak pytanie o nic, a mówi więcej niż lista sprzętu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sycowie"),
    sekcjaRaty("w Sycowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Sycowa",
      paragraphs: [
        "Syców leży w powiecie oleśnickim. Samo miasto liczy 9 922 mieszkańców (GUS, 31.12.2024) na siedemnastu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad szesnaście tysięcy osób na stu czterdziestu pięciu, z dwunastoma wsiami: Biskupicami, Drołtowicami, Działoszą, Gaszowicami, Komorowem, Nowym Dworem, Stradomią Wierzchnią, Szczodrowem, Wielowsią, Wioską, Zawadą i Ślizowem. W źródłach miasto pojawia się w 1276 roku, w dokumencie księcia Henryka IV Probusa — i warto dodać, że część opracowań traktuje tę datę jako moment nadania praw miejskich, a część wyłącznie jako pierwszą wzmiankę, więc nie rozstrzygam tego za nie. Miastem powiatowym Syców stał się w 1741 roku. Ratusz odbudowywano po pożarze z 1813: kamień węgielny położono 7 czerwca 1817, hełm nasadzono 10 grudnia 1818, a budynek ma dziewięćset metrów kwadratowych powierzchni użytkowej; odbudowa kosztowała cztery i pół tysiąca talarów plus materiały, z czego trzy tysiące pochodziły z dotacji. Wieża miała wtedy dwadzieścia osiem metrów i dopiero około 1853 roku podniesiono ją do czterdziestu. Dawna brama miejska, dziś wolno stojąca wieża, mierzy pięćdziesiąt sześć metrów z okładem, ma barokowy hełm z osiemnastego wieku i została przebudowana w 1909 roku. Mury obronne pochodzą z czternastego i piętnastego stulecia, a wzmocniono je w 1578. Rozbudowę zamku zakończono w 1853 roku; w parku stoją cztery neobarokowe marmurowe figury przedstawiające pory roku oraz kopie wersalskich rzeźb z brązu, a sam park uszczuplono przy budowie drogi S8. Linię kolejową z Oleśnicy do Kępna otwarto w 1871 roku, a pierwsze targi lnem odbyły się tutaj w 1937.",
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

  districtsHeading: "Do których części Sycowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwunastu wsi w gminie: Biskupic, Drołtowic, Działoszy, Gaszowic, Komorowa, Nowego Dworu, Stradomi Wierzchniej, Szczodrowa, Wielowsi, Wioski, Zawady i Ślizowa. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Syców też przyjadę",
  nearbyParagraphs: [
    "Oleśnica jest stąd około trzydziestu dwóch kilometrów, Milicz czterdzieści siedem, Trzebnica pięćdziesiąt pięć, a Wrocław sześćdziesiąt cztery. Dojeżdżam też do Twardogóry i Międzyborza — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Oleśnica", "Milicz", "Twardogóra", "Międzybórz", "Wrocław"],

  about: blokOMnie("do Sycowa", "w Sycowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sycowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwunastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Syców w powiecie oleśnickim — nie o Oleśnicę, która leży trzydzieści dwa kilometry stąd i bywa z Sycowem mylona, ani o Sycowice w lubuskiem czy Sycową Hutę na Pomorzu. Uwaga też na Bukowinę Sycowską: mimo nazwy leży w gminie Dziadowa Kłoda.",
    },
    ...faqWspolne("w Sycowie"),
    {
      question: "Urządzam kuchnię od zera. Czy od razu kupować sprzęt docelowy?",
      answer:
        "Odradzam, i to wbrew własnemu interesowi. Wieża sycowskiego ratusza miała po odbudowie w 1818 roku dwadzieścia osiem metrów i przez trzydzieści pięć lat to wystarczało; dołożono do niej dwanaście metrów dopiero około 1853, kiedy już było wiadomo, po co. W kuchni jest tak samo: po roku używania wiadomo rzecz, której nie da się wymyślić wcześniej — czego brakuje naprawdę i w którym konkretnie miejscu. Wyjątkiem są instalacje i wszystko, co wpuszczone w zabudowę; tego faktycznie trzeba zaplanować od razu.",
    },
    {
      question: "Czy Thermomix to zakup na start, czy na później?",
      answer:
        "Na później i mówię to szczerze. To rzecz, którą się dokłada, a nie taka, od której się zaczyna. Rok gotowania bez niego jest najlepszym sprawdzianem, czy w ogóle jest Wam potrzebny — a jeśli po tym roku okaże się, że tak, będziecie wiedzieć dlaczego, konkretnie i z własnej kuchni. Prezentacja niczego nie przyspiesza: jest bezpłatna i do niczego nie zobowiązuje, więc można ją potraktować po prostu jako jeden z punktów tego sprawdzianu.",
    },
  ],

  geo: { lat: 51.3, lng: 17.7167 },
};
