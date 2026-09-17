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
 * TWARDOGÓRA — powiat oleśnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Twardogóra — pułapka kubełka
 *   „pozostałe gminy" w polskawliczbach.
 * MIASTO: 6 129 mieszkańców (GUS 31.12.2024), 8,3 km²,
 *   gęstość 739,3 os./km² (domyka się przy powierzchni
 *   niezaokrąglonej ≈ 8,29 km²).
 * CAŁA GMINA: 12 491 osób, 167,9 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 12 491 / 167,9 = 74,4,
 *   a serwis podaje 75. Opracowanie gminne (16 799 ha)
 *   potwierdza 74,4. NIE DOMYKA SIĘ.
 *   ⚠⚠⚠ LICZBY WSI NIE PODAJĘ JAKO PEWNEJ — trzy różne
 *   wartości: 20 deklarowanych / 18 wymienionych (GUS)
 *   / 17 sołectw (gmina). PISZĘ „KILKANAŚCIE WSI".
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Miasto to 49,1 % ludności gminy — mniej niż połowa.
 *   PODAJĘ JAKO FAKT.
 * ⚠ WYSOKOŚCI: najniższe tereny gminy 123 m n.p.m.,
 *   Góra Zbójnik 272 m — rozpiętość 149 m.
 * ⚠ GEO: 51,3667 / 17,4667.
 *
 * ⚠⚠⚠ ODMIANA — NAZWA ZROŚNIĘTA, NIE DWUCZŁONOWA:
 *   D. do Twardogóry · Ms. w Twardogórze · B. Twardogórę
 *   ⚠⚠⚠ MIMO POCHODZENIA OD „TWARDA GÓRA" PIERWSZY CZŁON
 *   SIĘ NIE ODMIENIA. BŁĘDY: „do Twardej Góry",
 *   „w Twardej Górze". TO ODRÓŻNIA TWARDOGÓRĘ
 *   OD KAMIENNEJ GÓRY, JELENIEJ GÓRY I ZIELONEJ GÓRY.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: TWARDOGÓRSKI [ZW] (Wzgórza Twardogórskie).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠ KOLIZJE: człon „-góra" — Kamienna Góra, Jelenia Góra,
 *   Zielona Góra i samo miasto GÓRA w powiecie górowskim.
 *   ⚠⚠⚠ WSZYSTKIE JUŻ OPISANE W TYM CYKLU — nie powtarzam
 *   figury „góra, która nie jest górą".
 *   ⚠ STARA TWARDOGÓRA — osobna miejscowość do 1910 r.,
 *   dziś część miasta.
 *   ⚠ PARY BLIŹNIACZE W GMINIE: Grabowno Wielkie
 *   i Grabowno Małe, Chełstów i Chełstówek.
 *   ⚠ Wzgórza Twardogórskie to mezoregion o powierzchni
 *   304 km² — prawie dwa razy większy od gminy.
 *   NIE UTOŻSAMIAM.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ PRAWA MIEJSKIE: 1 SIERPNIA 1293 r., nadał książę
 *   HENRYK III GŁOGOWSKI [ZW, trzy źródła, data dzienna].
 *   ⚠⚠ PIERWSZEJ WZMIANKI ŹRÓDŁA NIE PODAJĄ ODRĘBNIE —
 *   NIE PODAJĘ ŻADNEJ LICZBY. Nie piszę „początki sięgają
 *   czasów pierwszych Piastów" — to nie jest fakt.
 * ⚠ NAZWĘ URZĘDOWĄ „Twardogóra" ustalono 12 listopada
 *   1946 r.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SERIA LUDNOŚCIOWA Z PUŁAPKĄ:
 *   1786 — 1 175 · 1885 — 2 202 · 1910 — 3 351 ·
 *   1944 — 4 500 · 2024 — 6 129.
 *   ⚠⚠⚠ SKOK 1885 → 1910 (+1 149 OSÓB) NIE JEST WZROSTEM
 *   DEMOGRAFICZNYM. Źródło mówi wprost: „po połączeniu
 *   ze Starą Twardogórą w 1910 r.". ZMIENIŁA SIĘ
 *   DEFINICJA MIERZONEGO OBSZARU, NIE LICZBA LUDZI.
 *   To jest cały kąt.
 *   ⚠⚠ NIE INTERPRETUJĘ TEGO JAKO ROZWOJU MIASTA.
 *   ⚠⚠ ROKU 1944 NIE PODAJĘ — data w okresie wykluczonym.
 *   Podaję ciąg 1786 → 1885 → 1910 → 2024.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — KOLEJ: 1 października 1910 r. — otwarcie ruchu
 *   na linii Grabowno Wielkie – Ostrów Wielkopolski,
 *   ok. 42 km, jednotorowa; stacje w Twardogórze
 *   i Międzyborzu otwarto tego samego dnia.
 *   ⚠ Od nadania praw (1293) do stacji: 617 lat.
 *   ⚠ [SP] drobne: inne źródło podaje „1909–10" —
 *   PODAJĘ DATĘ DZIENNĄ.
 * — INFRASTRUKTURA: 1901 bank kredytowy i wodociąg,
 *   1907 drukarnia, 1910 elektryfikacja, 1912 ratusz.
 *   ⚠⚠ SĄDU I ARESZTU (1902) NIE WYMIENIAM — sądownictwo.
 *   ⚠⚠ KAPLICY CMENTARNEJ (1906) NIE WYMIENIAM.
 *   ⚠ WYSOKOŚCI WIEŻY RATUSZA NIE USTALONO.
 * — PRZYRODA: lasy 45 % powierzchni gminy; sosna 75 %
 *   udziału powierzchniowego DRZEWOSTANU (nie gminy!);
 *   ok. 250 km szlaków; ok. 30 dolin strumieni o łącznej
 *   długości prawie 50 km; ok. 30 głazów narzutowych.
 *   ⚠⚠⚠ DWA PROCENTY LICZONE OD DWÓCH RÓŻNYCH PODSTAW.
 *   NIE ZESTAWIAM ICH I NIE SUMUJĘ.
 *   ⚠⚠ „PROCENT BEZ PODSTAWY" JAKO KĄT — NIE UŻYWAM:
 *   to drugi kąt liczbowy, a jeden tekst to jeden kąt.
 *   PODAJĘ OBA ODSETKI Z JAWNYM WSKAZANIEM PODSTAWY.
 * — REZERWATY: jodłowy „Gola" 11,7 ha (chroniony
 *   od 1949 r.); torfowiskowy koło Grabowna 4,22 ha
 *   (1980 r.), obejmuje trzy osobne torfowiska,
 *   118 gatunków roślin i 17 gatunków ptaków lęgowych;
 *   ścieżka przyrodnicza 520 m.
 * — DRZEWA POMNIKOWE (obwody pni): topola czarna 5,5 m;
 *   trzy dęby 5,60 / 5,40 / 5,35 m; lipa 6,3 m;
 *   lipa w Chełstowie 6,1 m; buk 5,3 m (jedyny z podaną
 *   wysokością: 37 m); dęby w Wesółce — „Bliźniak" 914 cm
 *   i „Henryk" 584 cm.
 *   ⚠⚠ „OPISUJ TĄ WIELKOŚCIĄ, KTÓRA SIĘ ZMIENIA" —
 *   kąt zajęty (Oborniki Śląskie). Obwody podaję
 *   JAKO FAKTY, bez morału o sposobie opisu.
 * — PAŁAC W GOSZCZU (wieś w gminie): wzniesiony w połowie
 *   XVIII w., główna faza ok. 1749 [SP w datowaniu —
 *   NIE PODAJĘ JEDNEJ DATY]; budowniczy Marcin Frantz;
 *   przebudowa po pożarze 1774; wszystkie budynki zespołu
 *   ukończone przed 1780; modernizacja 1886–1888
 *   (arch. Karl Schmidt z Wrocławia); park romantyczno-
 *   -krajobrazowy 21 ha; zespół liczy co najmniej
 *   12 budynków.
 *   ⚠⚠ KOSZTU REWITALIZACJI (10 492 284,43 zł) NIE PODAJĘ
 *   JAKO KĄTA — „kwota z groszami znaczy, że zsumowano"
 *   ociera się o co da się policzyć (Dobrzany).
 *   ⚠⚠ POŻARU KORPUSU Z 1947 R. NIE WYMIENIAM.
 * — ⚠⚠ TKALNI (1852, Henryk Pirschel) I FABRYKI MEBLI
 *   NIE ROZWIJAM: dla meblarstwa NIE USTALONO ANI JEDNEJ
 *   LICZBY (trzy zapytania zwróciły Swarzędz, Słupsk
 *   i Radomsko). NIE BUDUJĘ NA TYM NICZEGO.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wyznaniowe; wymiarów
 *   i tak nie ustalono dla żadnego.
 *
 * KĄT: SKOK, KTÓRY NIE BYŁ WZROSTEM
 * — o tym, że zanim porównasz dwie swoje liczby, trzeba
 * sprawdzić, czy mierzą to samo. Kąt od twardogórskiej
 * serii ludnościowej: skok o tysiąc sto czterdzieści
 * dziewięć osób między 1885 a 1910 to nie przyrost,
 * tylko przyłączenie sąsiedniej miejscowości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ludność Twardogóry to 1 175 w 1786 r., 2 202
 *   w 1885 i 3 351 w 1910,
 * — ŻE SKOK MIĘDZY 1885 A 1910 WYGLĄDA NA EKSPLOZJĘ,
 *   ALE ŹRÓDŁO MÓWI WPROST: „po połączeniu ze Starą
 *   Twardogórą". NIE PRZYBYŁO LUDZI — PRZESUNIĘTO
 *   GRANICĘ POMIARU. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY TO SAMO SOBIE: porównujemy
 *   dzisiejsze zużycie z zeszłorocznym, nie sprawdzając,
 *   czy w międzyczasie nie zmieniliśmy słoika, wagi
 *   albo tego, co uznajemy za porcję,
 * — ⚠⚠ ŻE NAJCZĘSTSZE ŹRÓDŁA TAKIEGO ZŁUDZENIA SĄ TRZY:
 *   zmiana naczynia, zmiana liczby osób przy stole
 *   i zmiana definicji („czy liczę też to, co zjadamy
 *   poza domem?"),
 * — ⚠⚠ ŻE RUCH JEST JEDEN I KOSZTUJE PÓŁ LINIJKI:
 *   notując cokolwiek, dopisz, CZYM mierzyłaś. Nie
 *   „dwa kilo", tylko „dwa kilo, waga kuchenna";
 *   nie „słoik", tylko „słoik po ogórkach",
 * — ⚠⚠ ŻE BEZ TEJ PÓŁ LINIJKI ZA PÓŁ ROKU PORÓWNASZ DWIE
 *   LICZBY, KTÓRE NIE MAJĄ ZE SOBĄ NIC WSPÓLNEGO —
 *   i wyciągniesz z tego wniosek,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie chodzi o prowadzenie
 *   ewidencji. Chodzi o jedno słowo obok liczby, i tylko
 *   tam, gdzie liczbę i tak zapisujesz,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z wbudowaną wagą
 *   zmienia jednostkę, w jakiej gotujesz — z „jednej
 *   szklanki" na gramy. MÓWIĘ WPROST, że to oznacza
 *   zerwanie ciągłości z wcześniejszymi notatkami,
 *   i że lepiej o tym wiedzieć zawczasu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OPISYWANIA WIELKOŚCIĄ, KTÓRA SIĘ ZMIENIA,
 *   I ZERO ETYKIET — kąt zajęty (Oborniki Śląskie).
 *   ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten tekst mówi, KTÓRĄ
 *   WIELKOŚĆ zapisać; ten mówi, ŻE TRZEBA DOPISAĆ
 *   NARZĘDZIE POMIARU, inaczej liczby są nieporównywalne.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt zajęty
 *   (Dobrzany).
 * — ⚠⚠⚠ ZERO PRZELICZANIA PRZEPISU I SKALI — kąt zajęty
 *   (Kowary).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra — miasto z tym samym członem nazwy!).
 * — ⚠⚠ ZERO JEDNEJ NAZWY OBEJMUJĄCEJ KILKA MIEJSC —
 *   kąt zajęty (Szczytna).
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO SYSTEMU NOTOWANIA — podaję
 *   WYŁĄCZNIE zasadę: dopisz, czym mierzyłaś.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o zużyciu i zapasach NIE MÓWIĘ NIC
 *   o terminach ani przechowywaniu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1944 I 1945, PRZESIEDLEŃ, NIEMIECKIEJ
 *   NAZWY.
 * — ⚠⚠ ZERO SĄDOWNICTWA (1902) I WĄTKU POGRZEBOWEGO.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ liczby wsi jako pewnej — trzy różne
 *   wartości w źródłach.
 * — NIE PODAJĘ daty pierwszej wzmianki — źródła nie
 *   podają jej odrębnie.
 * — NIE INTERPRETUJĘ skoku 1885–1910 jako wzrostu.
 * — NIE ZESTAWIAM odsetka lasów z odsetkiem sosny —
 *   liczone od różnych podstaw.
 * — NIE PODAJĘ wysokości wieży ratusza.
 * — NIE PODAJĘ jednej daty budowy pałacu w Goszczu.
 * — NIE PODAJĘ ani jednej liczby o meblarstwie — nie
 *   ustalono żadnej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pszenno-żytnie pierniki z Oleśnicy"
 *   pochodzą z gminy Oleśnica — TEN SAM POWIAT, INNA
 *   GMINA; wpisy „z Doliny Baryczy" są regionalne.
 *   NIE PRZYPISUJĘ ICH TWARDOGÓRZE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Twardogóra leży w powiecie oleśnickim; miasto liczy
 *   6 129 mieszkańców (GUS, 31.12.2024) na 8,3 km²,
 *   a cała gmina miejsko-wiejska 12 491 osób na 167,9 km²,
 *   z kilkunastoma wsiami; najniższe tereny gminy leżą
 *   na 123 m n.p.m., a Góra Zbójnik — najwyższe
 *   wzniesienie Wzgórz Twardogórskich — ma 272 m,
 * — prawa miejskie nadał 1 sierpnia 1293 r. książę
 *   Henryk III Głogowski; urzędową nazwę „Twardogóra"
 *   ustalono 12 listopada 1946,
 * — liczba mieszkańców wynosiła 1 175 w 1786 r., 2 202
 *   w 1885 i 3 351 w 1910 — przy czym wzrost między
 *   1885 a 1910 wynika z połączenia ze Starą Twardogórą,
 * — ruch na linii kolejowej Grabowno Wielkie – Ostrów
 *   Wielkopolski, długiej na około 42 km i jednotorowej,
 *   otwarto 1 października 1910 r.; tego samego dnia
 *   ruszyły stacje w Twardogórze i Międzyborzu,
 * — w 1901 r. powstały bank kredytowy i wodociąg,
 *   w 1907 drukarnia, w 1910 doprowadzono prąd,
 *   a w 1912 zbudowano ratusz,
 * — lasy zajmują 45 % powierzchni gminy, a sosna stanowi
 *   75 % powierzchni samego drzewostanu; wytyczono tu
 *   około 250 km szlaków, jest około trzydziestu dolin
 *   strumieni o łącznej długości prawie 50 km i około
 *   trzydziestu głazów narzutowych,
 * — rezerwat jodłowy „Gola" ma 11,7 ha i jest chroniony
 *   od 1949 r.; rezerwat torfowiskowy koło Grabowna
 *   (4,22 ha, utworzony w 1980) obejmuje trzy osobne
 *   torfowiska, 118 gatunków roślin i 17 gatunków ptaków
 *   lęgowych, a prowadzi przez niego ścieżka o długości
 *   520 m,
 * — wśród drzew pomnikowych są dęby w Wesółce o obwodach
 *   914 i 584 cm, lipy o obwodach 6,3 i 6,1 m oraz buk
 *   o obwodzie 5,3 m i wysokości 37 m,
 * — w Goszczu stoi zespół pałacowy wzniesiony w połowie
 *   XVIII w. przez budowniczego Marcina Frantza,
 *   przebudowany po pożarze w 1774 r. i zmodernizowany
 *   w latach 1886–1888 według projektu Karla Schmidta
 *   z Wrocławia; liczy co najmniej dwanaście budynków
 *   i ma park o powierzchni 21 ha.
 */
export const TWARDOGORA: CityContent = {
  slug: "twardogora",
  h1: "Thermomix Twardogóra – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Twardogóra — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Twardogórze: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Twardogóra — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Twardogórze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Twardogóry z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Twardogóra"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tysiąc sto czterdzieści dziewięć osób więcej — i ani jednej nowej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Twardogórze – jak wygląda prezentacja?",
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
      id: "skok-ktory-nie-byl-wzrostem",
      heading: "Skok, który nie był wzrostem",
      paragraphs: [
        "Liczba mieszkańców Twardogóry: tysiąc sto siedemdziesiąt pięć w 1786 roku, dwa tysiące dwieście dwa w 1885, trzy tysiące trzysta pięćdziesiąt jeden w 1910.",
        "Między 1885 a 1910 przybyło tysiąc sto czterdzieści dziewięć osób. Ponad połowa. W dwadzieścia pięć lat.",
        "Tylko że źródło dopisuje przy tej liczbie jedno zdanie: „po połączeniu ze Starą Twardogórą w 1910 roku”.",
        "Nie przybyło ludzi. Przesunięto granicę pomiaru.",
        "W kuchni robimy sobie dokładnie to samo, i to częściej, niż się wydaje.",
        "Porównujemy dzisiejsze zużycie z zeszłorocznym. Ile mąki schodzi na miesiąc. Ile wydajemy na zakupy. Ile zostaje po obiedzie. I nie sprawdzamy, czy przez ten rok nie zmieniło się coś, co unieważnia porównanie.",
        "Źródła takiego złudzenia są zwykle trzy. Zmieniło się naczynie — ten sam „słoik” ma teraz inną pojemność. Zmieniła się liczba osób przy stole, choćby na kilka miesięcy. Albo zmieniła się definicja: czy liczę też to, co zjadamy poza domem, czy tylko to, co ugotowane tutaj.",
        "Ruch, który to rozwiązuje, kosztuje pół linijki: notując cokolwiek, dopisz, czym mierzyłaś.",
        "Nie „dwa kilo”, tylko „dwa kilo, waga kuchenna”. Nie „słoik”, tylko „słoik po ogórkach”. Nie „porcja”, tylko „porcja na cztery osoby”.",
        "Bez tej pół linijki za pół roku porównasz dwie liczby, które nie mają ze sobą nic wspólnego — i co gorsza, wyciągniesz z tego wniosek. Zwykle taki, że coś idzie w złą stronę.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, którą wielkość zapisać na pojemniku. Chodzi o coś innego — o dopisanie narzędzia pomiaru, żeby dwie notatki z różnych lat dało się w ogóle zestawić.",
        "Uczciwie o drugiej stronie: nie namawiam do prowadzenia ewidencji. Nie prowadzę jej sama. Chodzi o jedno słowo obok liczby, i tylko tam, gdzie tę liczbę i tak zapisujesz.",
        "Na koniec o urządzeniu, i to jest ostrzeżenie, nie zaleta.",
        "Thermomix ma wbudowaną wagę, więc gotowanie z nim przestawia jednostkę: z „jednej szklanki” i „czubatej łyżki” na gramy. To wygodne, ale oznacza zerwanie ciągłości ze wszystkim, co zapisaliście wcześniej. Lepiej wiedzieć o tym zawczasu niż odkryć przy pierwszym cieście robionym z babcinego zeszytu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Twardogórze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy gotujecie raczej z przepisów zapisanych w domu, czy z internetu. To zmienia dobór dań na spotkanie bardziej, niż się wydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Twardogórze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Twardogóry",
      paragraphs: [
        "Twardogóra leży w powiecie oleśnickim. Samo miasto liczy 6 129 mieszkańców (GUS, 31.12.2024) na ośmiu kilometrach kwadratowych z okładem, a cała gmina miejsko-wiejska ponad dwanaście tysięcy osób na stu sześćdziesięciu ośmiu, z kilkunastoma wsiami — piszę „kilkunastoma”, bo źródła podają trzy różne liczby i żadnej nie chcę tu utrwalać jako pewnej. Najniższe tereny gminy leżą na stu dwudziestu trzech metrach nad poziomem morza, a Góra Zbójnik, najwyższe wzniesienie Wzgórz Twardogórskich, ma dwieście siedemdziesiąt dwa. Prawa miejskie nadał 1 sierpnia 1293 roku książę Henryk III Głogowski — data dzienna, co przy trzynastym wieku zdarza się rzadko. Urzędową nazwę „Twardogóra” ustalono 12 listopada 1946 roku. Liczba mieszkańców wynosiła tysiąc sto siedemdziesiąt pięć w 1786 roku, dwa tysiące dwieście dwa w 1885 i trzy tysiące trzysta pięćdziesiąt jeden w 1910, przy czym ten ostatni wzrost wynika z połączenia ze Starą Twardogórą. Ruch na jednotorowej linii kolejowej Grabowno Wielkie – Ostrów Wielkopolski, długiej na około czterdzieści dwa kilometry, otwarto 1 października 1910 roku; tego samego dnia ruszyły stacje w Twardogórze i Międzyborzu. W 1901 powstały bank kredytowy i wodociąg, w 1907 drukarnia, w 1910 doprowadzono prąd, a w 1912 zbudowano ratusz. Lasy zajmują czterdzieści pięć procent powierzchni gminy, a sosna stanowi siedemdziesiąt pięć procent powierzchni samego drzewostanu — to dwa procenty liczone od dwóch różnych podstaw i nie należy ich zestawiać. Wytyczono tu około dwustu pięćdziesięciu kilometrów szlaków, jest około trzydziestu dolin strumieni o łącznej długości prawie pięćdziesięciu kilometrów i około trzydziestu głazów narzutowych. Rezerwat jodłowy „Gola” ma jedenaście i siedem dziesiątych hektara i jest chroniony od 1949 roku; rezerwat torfowiskowy koło Grabowna, utworzony w 1980, obejmuje trzy osobne torfowiska, sto osiemnaście gatunków roślin i siedemnaście gatunków ptaków lęgowych. Wśród drzew pomnikowych są dęby w Wesółce o obwodach dziewięciuset czternastu i pięciuset osiemdziesięciu czterech centymetrów. W Goszczu stoi zespół pałacowy z połowy osiemnastego wieku, dzieło budowniczego Marcina Frantza, zmodernizowany w latach 1886–1888 według projektu Karla Schmidta z Wrocławia — liczy co najmniej dwanaście budynków i ma dwudziestojednohektarowy park.",
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

  districtsHeading: "Do których części Twardogóry dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — a gmina ma prawie sto sześćdziesiąt osiem kilometrów kwadratowych. Do Goszcza, Grabowna Wielkiego i Małego, Chełstowa, Domasławic i najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę: w gminie są zarówno Grabowno Wielkie, jak i Grabowno Małe, a także Chełstów i Chełstówek. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Twardogórę też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd czterdzieści dziewięć kilometrów. Dojeżdżam też do Oleśnicy, Sycowa, Międzyborza, Milicza i Trzebnicy — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Oleśnica", "Syców", "Milicz", "Trzebnica", "Wrocław"],

  about: blokOMnie("do Twardogóry", "w Twardogórze i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Twardogóry bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie, łącznie z Goszczem, Chełstowem i oboma Grabownami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: Twardogóra jest jednym wyrazem i mówi się „do Twardogóry”, a nie „do Twardej Góry” — inaczej niż w Kamiennej Górze czy Jeleniej Górze. A w gminie są pary łatwe do pomylenia: Grabowno Wielkie i Grabowno Małe, Chełstów i Chełstówek.",
    },
    ...faqWspolne("w Twardogórze"),
    {
      question: "Porównuję zużycie produktów rok do roku i wychodzą dziwne rzeczy. Dlaczego?",
      answer:
        "Bo prawdopodobnie dwie liczby mierzą co innego. Ludność Twardogóry skoczyła między 1885 a 1910 rokiem o tysiąc sto czterdzieści dziewięć osób — ale nie z powodu przyrostu, tylko dlatego, że miasto połączono ze Starą Twardogórą. Przesunięto granicę pomiaru. W kuchni robią to trzy rzeczy: zmiana naczynia (ten sam „słoik” ma inną pojemność), zmiana liczby osób przy stole i zmiana definicji — czy liczysz też to, co zjadacie poza domem. Lekarstwo kosztuje pół linijki: dopisz przy liczbie, czym mierzyłaś.",
    },
    {
      question: "Czy Thermomix zmienia sposób odmierzania składników?",
      answer:
        "Tak i warto o tym wiedzieć przed zakupem: ma wbudowaną wagę, więc przestawia jednostkę ze szklanek i łyżek na gramy. To wygodne, ale zrywa ciągłość z przepisami zapisanymi wcześniej w domu — babciny zeszyt nagle wymaga przeliczenia. Na prezentacji zwykle gotujemy też coś z Waszych własnych przepisów, właśnie po to, żeby zobaczyć, jak to wychodzi w praktyce.",
    },
  ],

  geo: { lat: 51.3667, lng: 17.4667 },
};
