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
 * NOWE SKALMIERZYCE — powiat ostrowski,
 * woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA.
 *   ⚠⚠⚠ ALE SIEDZIBĄ GMINY I MIASTA JEST ODRĘBNA
 *   WIEŚ SKALMIERZYCE, NIE MIASTO. TO KLUCZOWY FAKT
 *   PRAKTYCZNY. WSPOMINAM OBOWIĄZKOWO.
 * MIASTO: 4 557 mieszkańców (GUS 31.12.2024), 1,6 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ POD ŻADNYM
 *   POZOREM — źródło podaje 2 884,2 os./km², iloraz
 *   daje 2 848,1. ROZBIEŻNOŚĆ 36,1 — NAJWIĘKSZA
 *   W CAŁYM CYKLU. Przy 1,6 km² każde 0,01 km² to
 *   ok. 18 os./km²; gęstość policzono od ok. 1,58 km².
 *   ⚠⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠⚠ NAJMNIEJSZE OBSZAROWO MIASTO TEJ FALI.
 *   MOGĘ TO POWIEDZIEĆ.
 *   ⚠⚠ WYSOKOŚĆ PODANA JAKO PRZEDZIAŁ 130–140 m n.p.m.
 *   Źródło gminne podaje szczegółowiej: dolina Prosny
 *   ok. 106–109 m, pogranicze Sieroszewic 144–147 m,
 *   pozostały teren 128–138 m. PODAJĘ TE PRZEDZIAŁY
 *   ALBO POMIJAM.
 * CAŁA GMINA: 16 006 osób, 125,4 km², gęstość
 *   128 os./km².
 *   ⚠ [ZW — 16 006 / 125,4 = 127,6 → 128. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ URZĄD PODAJE 15 232 OSOBY ZAMELDOWANE
 *   NA STAŁE i 12 499 HA. NIE PODAJĘ TYCH LICZB —
 *   trzymam się GUS z datą.
 * SOŁECTWA — 26, LICZBA KTÓRA SIĘ DOMYKA
 *   ARYTMETYCZNIE:
 *   w 1975 r. utworzono gminę z miasta i 29 WSI
 *   SOŁECKICH; z dniem 1 stycznia 2000 r. odłączono
 *   TRZY — Dobrzec, Sulisławice i Kolonię Sulisławice —
 *   na rzecz Kalisza. 29 − 3 = 26. DZIŚ 26 WSI
 *   SOŁECKICH. PODAJĘ CAŁY ŁAŃCUCH, bo się zgadza.
 *   PEŁNA LISTA (26): Biskupice, Biskupice Ołoboczne,
 *   Boczków, Chotów, Droszew, Fabianów, Gałązki Małe,
 *   Gałązki Wielkie, Głóski, Gniazdów, Gostyczyna,
 *   Kotowiecko, Kurów, Kościuszków, Leziona, Mączniki,
 *   Miedzianów, Ociąż, Osiek, Skalmierzyce, Strzegowa,
 *   Śliwniki, Śmiłów, Trkusów, Węgry, Żakowice.
 *   ⚠ polskawliczbach podaje 34 miejscowości,
 *   en.wikipedia 31 — LICZB MIEJSCOWOŚCI NIE PODAJĘ,
 *   podaję tylko liczbę SOŁECTW.
 *   ⚠⚠ NAJWIĘKSZA WIEŚ: SKALMIERZYCE — 2 217
 *   mieszkańców (NSP 2021). PODAJĘ. ⚠ Szacunku
 *   „około 4 000" z en.wikipedii NIE UŻYWAM.
 * ⚠ GEO MIASTA: 51,7112 / 17,9934.
 *   ⚠ GEO WSI SKALMIERZYCE: 51,7025 / 17,9747 —
 *   ok. 1,5 km od miasta. W TEKŚCIE WSPÓŁRZĘDNYCH
 *   NIE WYMIENIAM.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM, ODMIENIAJĄ SIĘ OBA
 *   CZŁONY. POTWIERDZONE CYTATAMI:
 *   M. NOWE SKALMIERZYCE ·
 *   D. NOWYCH SKALMIERZYC (⚠⚠⚠ NIE „Skalmierzyców"!) ·
 *   Ms. w NOWYCH SKALMIERZYCACH ·
 *   N. Nowymi Skalmierzycami · C. Nowym Skalmierzycom.
 *   ⚠⚠⚠ BŁĄD 1: nieodmienianie członu „Nowe" —
 *   „w Nowe Skalmierzycach", „do Nowe Skalmierzyc".
 *   ⚠⚠⚠ BŁĄD 2: dopełniacz „Nowych Skalmierzyców".
 *   ⚠⚠ BŁĄD 3: liczba pojedyncza — „Nowa Skalmierzyca",
 *   „w Nowej Skalmierzycy".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — ani
 *   „nowoskalmierzycki", ani „skalmierzycki"
 *   nie potwierdzone [NP]. PISZĘ „gmina i miasto Nowe
 *   Skalmierzyce" oraz „mieszkańcy Nowych Skalmierzyc".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠⚠ UWAGA HISTORYCZNA: do 18 lipca 1962 r. nazwa
 *   brzmiała SKALMIERZYCE NOWE — odwrotna kolejność
 *   członów. Starsze cytaty używają tej formy.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — NAJPOWAŻNIEJSZE W CAŁYM CYKLU:
 *   MIASTO NOWE SKALMIERZYCE ≠ WIEŚ SKALMIERZYCE.
 *   Dwie odrębne jednostki stykające się granicami:
 *     miasto: 4 557 osób (31.12.2024), 1,6 km²,
 *       BEZ URZĘDU GMINY;
 *     wieś: 2 217 osób (NSP 2021), SIEDZIBA GMINY.
 *   ⚠⚠⚠ TEN SAM KOD POCZTOWY 63-460 DLA OBU.
 *   ⚠⚠ Lokalnie wieś nazywa się „Stare Skalmierzyce" —
 *   ⚠⚠⚠ TO NIE JEST NAZWA URZĘDOWA. NIE UŻYWAM JEJ
 *   JAKO NAZWY, mogę wspomnieć, że tak się mówi.
 *   ⚠⚠⚠ WSZYSTKIE ZABYTKI OPISYWANE POD HASŁEM
 *   „SKALMIERZYCE" NALEŻĄ DO WSI, NIE DO MIASTA.
 *   NIE PRZYPISUJĘ ICH MIASTU. ⚠ OBIEKTÓW SAKRALNYCH
 *   NIE WYMIENIAM I TAK.
 *   — SZCZYPIORNO — osada, której grunty weszły
 *     w miasto w 1962 r.; nazwa funkcjonuje też jako
 *     dzielnica Kalisza.
 *   — PODKOCE — wieś, na której gruntach powstała część
 *     miasta; nadal istnieje.
 *   — DOBRZEC, SULISŁAWICE, KOLONIA SULISŁAWICE —
 *     od 1.01.2000 należą do KALISZA. Starsze
 *     opracowania wymieniają je jako sołectwa gminy.
 *   — Nowe Skalmierzyce i ODOLANÓW leżą w tym samym
 *     powiecie ostrowskim. ⚠ PILNUJĘ, ŻEBY NIE
 *     POMIESZAĆ LICZB: N. Skalmierzyce 125,4 km²/16 006,
 *     Odolanów 136,1 km²/14 462.
 *   — Możliwa pomyłka brzmieniowa ze Skalbmierzem
 *     (świętokrzyskie) — [NP], NIE TWIERDZĘ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1337 r. (strona gminy) albo
 *     1343 r. pod nazwą Scarbimirzyce (en.wikipedia) —
 *     6 lat różnicy. PODAJĘ OBIE.
 *   — DZISIEJSZE BRZMIENIE NAZWY: od 1827 r.
 *   — PRAWA MIEJSKIE: 1962 r. ⚠⚠ DWIE DATY W JEDNYM
 *     SERWISIE: 7 lipca (rozporządzenie Prezesa Rady
 *     Ministrów) i 18 lipca (rozporządzenie zmieniające
 *     nazwę). RÓŻNICA 11 DNI. PODAJĘ ROK I MÓWIĘ,
 *     ŻE DZIENNE DATY SIĘ ROZCHODZĄ.
 *   — 1962: nazwę odwrócono ze SKALMIERZYCE NOWE
 *     na NOWE SKALMIERZYCE.
 *   — 1999: SIEDZIBĘ GMINY PRZENIESIONO Z MIASTA
 *     DO WSI SKALMIERZYCE.
 *   ⚠⚠⚠ MIASTO POWSTAŁO Z GRUNTÓW TRZECH MIEJSCOWOŚCI
 *     (Skalmierzyce, Szczypiorno, Podkoce) — FIGURA
 *     „scalone z trzech" ZAJĘTA (Koźmin). PODAJĘ
 *     JEDNYM ZDANIEM, NIE ROZWIJAM.
 *   ⚠⚠⚠ PIERWSZY RATUSZ 1908 R., PRAWA MIEJSKIE 1962 —
 *     FIGURA „instytucja młodsza od swoich ścian"
 *     ZAJĘTA (Puszczykowo). PODAJĘ DATĘ RATUSZA
 *     I NIC Z NIEJ NIE WYCIĄGAM.
 *   ⚠⚠ PRZEDWOJENNEGO OBSZARU 114,5 HA NIE PODAJĘ —
 *     określenie „przed wojną" wchodzi w wątek
 *     wykluczony.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWA NIEZGODNE STANDARDY W JEDNYM
 *   BUDYNKU:
 *   DWORZEC W NOWYCH SKALMIERZYCACH zbudowano
 *   na przełomie 1905 i 1906 r., W JEDENAŚCIE MIESIĘCY,
 *   za DWA MILIONY MAREK; ma STO METRÓW DŁUGOŚCI
 *   i dwie wysokie kondygnacje, a sala odprawy bagażu
 *   liczy PRAWIE 1000 m².
 *   Stanął na granicy DWÓCH SYSTEMÓW KOLEJOWYCH
 *   O RÓŻNYM ROZSTAWIE SZYN:
 *     z jednej strony 143,5 CENTYMETRA,
 *     z drugiej 152,4 CENTYMETRA.
 *   RÓŻNICA: 8,9 CENTYMETRA.
 *   SKUTEK: wszystko musiało być w tym punkcie
 *   przełożone — ludzie i towar zmieniali pociąg,
 *   bo pociąg nie mógł jechać dalej.
 *   ⚠⚠⚠ TE LICZBY MAM Z JEDNEGO ŹRÓDŁA. MÓWIĘ TO
 *   WPROST W TEKŚCIE — „znalazłam to w jednym miejscu".
 *   ⚠⚠⚠ ROKU OTWARCIA DWORCA NIE PODAJĘ — trzy wersje
 *   w obiegu: 1906, „1904–1912" i październik 1909.
 *   PISZĘ „zbudowany na przełomie 1905 i 1906 roku"
 *   i mówię, że daty otwarcia się rozchodzą.
 *   ⚠⚠⚠ NAZW PAŃSTW I IMPERIÓW NIE PODAJĘ — piszę
 *   „dwa systemy kolejowe" i „granica". ZERO WĄTKU
 *   POLITYCZNEGO I ROZBIOROWEGO.
 *   ⚠ Dziś w budynku działają pracownie naprawy
 *   fortepianów na 3 tys. m²; samorząd przejął obiekt
 *   w 2015 r. PODAJĘ — to fakt o dzisiejszym użyciu,
 *   bez nazw firm.
 *   ⚠ PIERWSZĄ LINIĘ oddano 14 lutego 1896 r. PODAJĘ.
 *
 * KĄT: DWA NIEZGODNE STANDARDY W JEDNYM BUDYNKU
 * — o tym, że rzeczy prawie zgodne kosztują więcej
 * niż rzeczy jawnie różne. Kąt z dworca w Nowych
 * Skalmierzycach: 143,5 wobec 152,4 centymetra
 * rozstawu szyn, czyli 8,9 centymetra, po których
 * wszystko trzeba było przełożyć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dworzec zbudowano na przełomie 1905 i 1906 r.,
 *   w jedenaście miesięcy, za dwa miliony marek,
 *   ma sto metrów długości, a sala odprawy bagażu
 *   prawie tysiąc metrów kwadratowych,
 * — że stanął na granicy dwóch systemów kolejowych:
 *   143,5 wobec 152,4 cm rozstawu, różnica 8,9 cm,
 * — że dlatego wszystko trzeba było w tym punkcie
 *   przełożyć. TO JEST RDZEŃ,
 * — ⚠⚠ że te liczby mam z jednego źródła,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: dwie miary prawie
 *   zgodne (szklanka a 250 ml, łyżka a 15 g, „średnia
 *   cebula"), dwa sposoby prawie takie same u dwóch
 *   osób w jednym domu,
 * — ⚠⚠ ŻE JAWNA RÓŻNICA JEST TAŃSZA OD PRAWIE
 *   ZGODNOŚCI — przy jawnej różnicy się przelicza,
 *   przy prawie zgodności się myli,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wybierz JEDNĄ miarę na
 *   jedną rzecz i trzymaj się jej. Najlepiej gramy,
 *   bo są jednoznaczne,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ujednolicanie wszystkiego
 *   nie zawsze jest warte wysiłku. Czasem taniej jest
 *   po prostu zbudować punkt przeładunkowy —
 *   przeliczyć raz i zapisać na drzwiach szafki,
 * — ⚠ UCZCIWIE O SPRZĘCIE: waga w urządzeniu usuwa
 *   ten problem tylko tam, gdzie się waży. Przepisy
 *   „na szklanki" trzeba przeliczyć i tak, i mówię
 *   to wprost.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SKRÓTU, KTÓRY ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam skracanie nazwy usuwało
 *   rozróżnienie; tu dwie miary są jawne i obie
 *   zapisane, a kosztuje to, że są PRAWIE takie same.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO JEDNEJ RZECZY, DWÓCH FUNKCJI NARAZ —
 *   kąt zajęty (Zbąszyń).
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły).
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód). ⚠ Wątek „siedziba gminy jest we wsi,
 *   nie w mieście" TRZYMAM WYŁĄCZNIE W CZĘŚCI
 *   O DOJAZDACH I W FAQ, JAKO INFORMACJĘ PRAKTYCZNĄ.
 *   NIE ROBIĘ Z NIEGO KĄTU.
 * — ⚠⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo). DLATEGO RÓŻNICY
 *   1908 → 1962 NIE ROZWIJAM.
 * — ⚠⚠⚠ ZERO SCALONEGO Z TRZECH — kąt zajęty
 *   (Koźmin Wielkopolski).
 * — ⚠⚠ ZERO CZTERECH WYKONAWCÓW JEDNEGO OBIEKTU —
 *   kąt zajęty (Buk).
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt
 *   zajęty (Złotów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠⚠ UWAGA: to sekcja o miarach. WOLNO MI MÓWIĆ
 *   O GRAMACH I MILILITRACH JAKO O JEDNOSTKACH,
 *   ale NIE WOLNO PODAWAĆ ŻADNYCH PROPORCJI
 *   ANI ILOŚCI DO KONKRETNEGO DANIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA, ŻE KTOŚ MIERZY „NA OKO"
 *   ŹLE. Sekcja ma zdejmować frustrację, nie dokładać.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO, PAŃSTWOWEGO I GRANICZNO-POLITYCZNEGO
 *   (piszę „dwa systemy kolejowe", nigdy nazw państw) ·
 *   ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO
 *   I OBOZOWEGO · ZERO ALKOHOLU · ZERO POŻARÓW ·
 *   ZERO BEZROBOCIA · ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ roku otwarcia dworca.
 * — NIE PODAJĘ nazw państw ani systemów politycznych.
 * — NIE PODAJĘ dziennej daty nadania praw miejskich.
 * — NIE PRZYPISUJĘ MIASTU zabytków wsi Skalmierzyce.
 * — NIE UŻYWAM nazwy „Stare Skalmierzyce" jako
 *   urzędowej.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ liczby miejscowości w gminie.
 * — NIE PODAJĘ liczb urzędu (15 232, 12 499 ha).
 * — NIE TWIERDZĘ, że wieś Skalmierzyce jest jedyną
 *   taką w Polsce — źródło datowane na 2009 r.
 *   i niepotwierdzone.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowe Skalmierzyce leżą w powiecie ostrowskim,
 *   liczą 4 557 mieszkańców (GUS, 31.12.2024) na
 *   1,6 km²; cała gmina miejsko-wiejska to 16 006 osób
 *   na 125,4 km², czyli 128 osób na kilometr
 *   kwadratowy, i obejmuje 26 wsi sołeckich,
 * — w 1975 r. gminę utworzono z miasta i 29 wsi
 *   sołeckich; z dniem 1 stycznia 2000 r. odłączono
 *   od niej Dobrzec, Sulisławice i Kolonię Sulisławice
 *   na rzecz Kalisza, więc dziś sołectw jest 26,
 * — największą wsią gminy są Skalmierzyce — 2 217
 *   mieszkańców (NSP 2021) — i to w nich, nie
 *   w mieście, mieści się siedziba gminy, przeniesiona
 *   tam w 1999 r.,
 * — prawa miejskie nadano w 1962 r. i wtedy odwrócono
 *   nazwę: ze Skalmierzyc Nowych na Nowe Skalmierzyce,
 * — pierwsza wzmianka pochodzi z 1337 albo 1343 r.
 *   (źródła się różnią), a dzisiejsze brzmienie nazwy
 *   jest używane od 1827 r.,
 * — miasto powstało z gruntów Skalmierzyc, Szczypiorna
 *   i Podkoców; pierwszy ratusz pochodzi z 1908 r.,
 * — pierwszą linię kolejową oddano 14 lutego 1896 r.,
 * — dworzec zbudowano na przełomie 1905 i 1906 r.,
 *   w jedenaście miesięcy, za dwa miliony marek; ma
 *   sto metrów długości i dwie wysokie kondygnacje,
 *   a sala odprawy bagażu liczy prawie tysiąc metrów
 *   kwadratowych,
 * — dworzec stanął na granicy dwóch systemów
 *   kolejowych o różnym rozstawie szyn: 143,5 cm
 *   z jednej strony i 152,4 cm z drugiej,
 * — dziś w budynku działają pracownie naprawy
 *   fortepianów na trzech tysiącach metrów
 *   kwadratowych; samorząd przejął obiekt w 2015 r.,
 * — w gminie leżą m.in. Ociąż, Droszew, Fabianów,
 *   Gostyczyna, Kotowiecko, Śliwniki, Węgry,
 *   Biskupice Ołoboczne i Gałązki Wielkie.
 */
export const NOWE_SKALMIERZYCE: CityContent = {
  slug: "nowe-skalmierzyce",
  h1: "Thermomix Nowe Skalmierzyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowe Skalmierzyce — cena i prezentacja",
  seoDescription:
    "Thermomix w Nowych Skalmierzycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowe Skalmierzyce — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowych Skalmierzycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowych Skalmierzyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu sześciu wsi sołeckich w gminie.",

  highlights: highlightyStandardowe("Nowe Skalmierzyce"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Osiem i dziewięć dziesiątych centymetra. Wszystko trzeba było przełożyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowych Skalmierzycach – jak wygląda prezentacja?",
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
      id: "dwa-standardy",
      heading: "Dwa niezgodne standardy w jednym budynku",
      paragraphs: [
        "Dworzec w Nowych Skalmierzycach zbudowano na przełomie 1905 i 1906 roku, w jedenaście miesięcy, za dwa miliony marek. Ma sto metrów długości i dwie wysokie kondygnacje, a sama sala odprawy bagażu liczy prawie tysiąc metrów kwadratowych. Rok jego otwarcia podawany jest w źródłach na trzy różne sposoby, więc żadnego nie podam.",
        "Powód tej skali był jeden i był absurdalnie prosty. Dworzec stanął na granicy dwóch systemów kolejowych o różnym rozstawie szyn. Z jednej strony sto czterdzieści trzy i pół centymetra. Z drugiej sto pięćdziesiąt dwa i cztery dziesiąte. Osiem i dziewięć dziesiątych centymetra różnicy.",
        "Osiem centymetrów — i nic nie mogło przejechać dalej. Ludzie wysiadali, towar wyładowywano, wszystko przekładano na drugi pociąg. Cała ta olbrzymia hala istnieje po to, żeby obsłużyć różnicę mniejszą od dłoni.",
        "Tych liczb nie udało mi się znaleźć w drugim źródle, więc podaję je z zastrzeżeniem. Sama zasada trzyma jednak niezależnie od centymetrów.",
        "Bo w kuchni działa identycznie i to jest jedna z najbardziej męczących rzeczy, o jakich nikt nie mówi.",
        "Szklanka i dwieście pięćdziesiąt mililitrów. Łyżka i piętnaście gramów. „Średnia cebula”. „Szklanka mąki” — czyja szklanka. Dwa prawie zgodne systemy miar w jednym przepisie. Albo, jeszcze częściej, dwie osoby w jednym domu, które robią to samo danie prawie tak samo — i za każdym razem trzeba się dogadywać, bo różnica jest za mała, żeby ją nazwać, a za duża, żeby ją zignorować.",
        "I tu jest rzecz najważniejsza: jawna różnica jest tańsza od prawie zgodności. Gdyby rozstaw szyn różnił się dwukrotnie, nikt by nie próbował przejechać. Przy ośmiu centymetrach próbuje się, bo wygląda, że powinno wejść. W kuchni to samo: gramy i uncje przelicza się bez emocji, bo widać, że to inne układy. Szklankę i dwieście pięćdziesiąt mililitrów się myli, bo wyglądają na to samo.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o skracaniu nazwy, które zjada różnicę między dwiema rzeczami. Tu jest odwrotnie — obie miary są jawne i obie zapisane. Kosztuje to, że są prawie takie same.",
        "Ruch jest jeden. Wybierzcie jedną miarę na jedną rzecz i trzymajcie się jej. Najlepiej gramy, bo są jednoznaczne i nie zależą od tego, czyja szklanka stoi w szafce.",
        "Uczciwie o drugiej stronie, bo ujednolicanie wszystkiego nie zawsze jest warte wysiłku. Przepisy po babci, spisane na szklanki, zostają na szklanki i nie ma sensu ich przepisywać. Wtedy taniej jest zrobić to, co zrobiono w Nowych Skalmierzycach: zbudować punkt przeładunkowy. Przeliczyć raz, zapisać na kartce i przykleić na drzwiach szafki. Jedno przeliczenie zamiast stu.",
        "I uczciwie o sprzęcie. Waga w Thermomixie usuwa ten problem tylko tam, gdzie się waży — i tam usuwa go naprawdę, bo składniki dodaje się jeden po drugim do tego samego naczynia, bez przesypywania i bez dodatkowych miarek. Ale przepis „na szklanki” trzeba przeliczyć i tak, i żadne urządzenie tego za Was nie zrobi.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowych Skalmierzycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy chodzi o miasto, czy o wieś Skalmierzyce. Dojeżdżam bezpłatnie do obu, ale mają ten sam kod pocztowy, więc wolę mieć to ustalone.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowych Skalmierzycach"),
    sekcjaRaty("w Nowych Skalmierzycach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowych Skalmierzyc",
      paragraphs: [
        "Nowe Skalmierzyce leżą w powiecie ostrowskim i liczą 4 557 mieszkańców (GUS, 31.12.2024) na 1,6 kilometra kwadratowego — to najmniejsze obszarowo miasto, o jakim pisałam w tej okolicy, i właśnie dlatego gęstości dla niego nie podaję: przy tak małej powierzchni każde zaokrąglenie waży kilkanaście osób na kilometr, a liczba ze źródła rozchodzi się z ilorazem najmocniej z wszystkich, jakie sprawdzałam. Cała gmina miejsko-wiejska to 16 006 osób na 125,4 kilometra kwadratowego, czyli sto dwadzieścia osiem osób na kilometr, i obejmuje dwadzieścia sześć wsi sołeckich. Ta liczba ma ładną arytmetykę: w 1975 roku gminę utworzono z miasta i dwudziestu dziewięciu wsi sołeckich, a z dniem 1 stycznia 2000 odłączono od niej Dobrzec, Sulisławice i Kolonię Sulisławice na rzecz Kalisza — czyli dokładnie trzy. Największą wsią są Skalmierzyce z 2 217 mieszkańcami. Prawa miejskie nadano w 1962 roku i wtedy odwrócono nazwę: ze Skalmierzyc Nowych na Nowe Skalmierzyce. Pierwsza wzmianka pochodzi z 1337 albo 1343 roku, zależnie od źródła, a dzisiejsze brzmienie nazwy jest używane od 1827. Miasto powstało z gruntów Skalmierzyc, Szczypiorna i Podkoców, pierwszy ratusz pochodzi z 1908 roku, a pierwszą linię kolejową oddano 14 lutego 1896.",
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

  districtsHeading: "Do których części Nowych Skalmierzyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sześciu wsi sołeckich w gminie. Nazywają się: Biskupice, Biskupice Ołoboczne, Boczków, Chotów, Droszew, Fabianów, Gałązki Małe, Gałązki Wielkie, Głóski, Gniazdów, Gostyczyna, Kotowiecko, Kurów, Kościuszków, Leziona, Mączniki, Miedzianów, Ociąż, Osiek, Skalmierzyce, Strzegowa, Śliwniki, Śmiłów, Trkusów, Węgry i Żakowice. Wszędzie bez dopłaty.",
    "Dwie uwagi, obie ważne przy umawianiu. Praktyczna: miasto Nowe Skalmierzyce i wieś Skalmierzyce to dwie odrębne miejscowości, około półtora kilometra od siebie i z tym samym kodem pocztowym — a siedziba gminy mieści się właśnie we wsi, gdzie przeniesiono ją w 1999 roku. Warto więc powiedzieć, o którą z nich chodzi. I językowa: nazwa występuje tylko w liczbie mnogiej i odmieniają się oba członki — „do Nowych Skalmierzyc” i „w Nowych Skalmierzycach”, nigdy „do Nowe Skalmierzyc” ani „Nowych Skalmierzyców”.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowe Skalmierzyce też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ostrowa Wielkopolskiego, Odolanowa, Kalisza, Stawiszyna, Raszkowa i Mikstatu — wszędzie bezpłatnie, tak samo jak w samych Nowych Skalmierzycach.",
  ],
  nearbyTowns: ["Ostrów Wielkopolski", "Odolanów", "Kalisz", "Stawiszyn", "Raszków", "Mikstat"],

  about: blokOMnie("do Nowych Skalmierzyc", "w Nowych Skalmierzycach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowych Skalmierzyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sześciu wsi sołeckich w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Praktyczna: miasto Nowe Skalmierzyce i wieś Skalmierzyce to dwie odrębne miejscowości z tym samym kodem pocztowym, oddalone o około półtora kilometra, a siedziba gminy mieści się we wsi — więc przy umawianiu warto powiedzieć, o którą chodzi. I językowa: odmieniają się oba członki nazwy, czyli „do Nowych Skalmierzyc” i „w Nowych Skalmierzycach”, a nie „do Nowe Skalmierzyc” ani „Nowych Skalmierzyców”. Przymiotnika od nazwy świadomie nie używam, bo nie udało mi się go potwierdzić.",
    },
    ...faqWspolne("w Nowych Skalmierzycach"),
    {
      question: "Ciągle mylę szklanki z mililitrami i łyżki z gramami. Da się to jakoś uporządkować?",
      answer:
        "Da się, i warto wiedzieć, dlaczego to takie męczące. Dworzec w Nowych Skalmierzycach stanął na granicy dwóch systemów kolejowych o rozstawie szyn sto czterdzieści trzy i pół centymetra z jednej strony i sto pięćdziesiąt dwa i cztery dziesiąte z drugiej — osiem i dziewięć dziesiątych centymetra różnicy sprawiało, że nic nie mogło przejechać dalej i wszystko trzeba było w tym punkcie przekładać. Te liczby mam z jednego źródła, więc traktuję je ostrożnie, ale zasada jest ogólna: rzeczy prawie zgodne kosztują więcej niż jawnie różne, bo przy jawnej różnicy się przelicza, a przy prawie zgodności się myli. Rozwiązanie jest jedno: jedna miara na jedną rzecz, najlepiej gramy. A przepisy po babci spisane na szklanki zostawcie na szklanki i przeliczcie raz — kartka na drzwiach szafki załatwia sprawę lepiej niż przepisywanie wszystkiego.",
    },
    {
      question: "Czy waga w Thermomixie rozwiązuje problem miar?",
      answer:
        "Tam, gdzie się waży — tak, i to naprawdę wygodnie, bo składniki dodaje się jeden po drugim wprost do naczynia, bez przesypywania i bez szukania miarek. Ale przepis napisany „na szklanki” trzeba przeliczyć samemu i żadne urządzenie tego nie zrobi. Warto więc traktować wagę jako narzędzie do jednej miary, a nie jako tłumacza między dwoma systemami.",
    },
  ],

  geo: { lat: 51.7112, lng: 17.9934 },
};
