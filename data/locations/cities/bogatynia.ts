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
 * BOGATYNIA — powiat zgorzelecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ (gmina ZAWIERA
 *   miasto; NIE MA odrębnej gminy wiejskiej o tej nazwie
 *   — sprawdzone).
 * MIASTO: 15 875 mieszkańców (GUS 31.12.2024), 59,9 km²,
 *   gęstość 265,1 os./km².
 * CAŁA GMINA: 21 120 osób, 136,1 km², 16 miejscowości
 *   wiejskich.
 * ⚠⚠ NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠⚠ strona gminy podaje „20 008 (koniec 2025)" —
 *   ROZBIEŻNE Z GUS. UŻYWAM GUS.
 * ⚠ GEO: 50,9072 / 14,9561.
 * ⚠⚠ MIASTO JEST NAJBARDZIEJ IZOLOWANE Z CAŁEJ FALI —
 *   najbliższa sąsiednia gmina 20,4 km (Sulików).
 *   Zgorzelec 26,5 km.
 *
 * ⚠⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA PODAJĄ 1945 (dwa źródła)
 *   ALBO „PO 1958" (strona gminy).
 *   ⚠⚠⚠ NIE PODAJĘ DATY PRAW MIEJSKICH W OGÓLE —
 *   rok 1945 jest w kategorii wykluczonej, a druga
 *   wersja jest nieprecyzyjna. UŻYWAM PIERWSZEJ
 *   WZMIANKI: 1262. TWARDA GRANICA.
 *
 * ⚠⚠ ODMIANA: D. BOGATYNI, Ms. W BOGATYNI —
 *   jedno „i", nigdy „Bogatynii".
 *   ⚠⚠⚠ NIE POTWIERDZONE W SŁOWNIKU — eodmiany.pl
 *   ma pusty rekord, Wikisłownik niedostępny. Forma
 *   zrekonstruowana z reguły dla rzeczowników na -nia
 *   (jak Cedynia → w Cedyni, ta sama seria!).
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Bogatyni".
 *
 * ⚠⚠ HOMONIM: ≠ BOGATKA (wieś pomorska) ≠ BOGDANIEC.
 *   ⚠⚠⚠ Hasło „gmina Bogatynia" w wyszukiwarce zwraca
 *   niemal wyłącznie kopalnię Turów.
 *   ⚠ W gminie jest wieś POSADA — nazwa pospolita.
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠⚠ ETYKA — TEMAT DOMINUJĄCY, POMIJANY W CAŁOŚCI:
 *   KOPALNIA ODKRYWKOWA TURÓW I ELEKTROWNIA.
 *   ⚠⚠⚠ ZERO ODKRYWKI, ZERO WYDOBYCIA, ZERO ELEKTROWNI,
 *   ZERO SPORU Z CZECHAMI I TSUE. Temat energetyczny
 *   i środowiskowo sporny. TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠⚠ NIE PODAJĘ NAJNIŻSZEGO PUNKTU GMINY (205 m) —
 *   to dno wyrobiska górniczego.
 * ⚠⚠⚠ ZERO POWODZI Z SIERPNIA 2010 I 277 USZKODZONYCH
 *   DOMÓW — katastrofa. TWARDA GRANICA.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DOMY PRZYSŁUPOWE:
 *   160 Z OKOŁO 600 POLSKICH DOMÓW PRZYSŁUPOWYCH
 *   STOI W BOGATYNI — ponad jedna czwarta krajowego
 *   zasobu. Z TYCH 160 AŻ 85 JEST W REJESTRZE ZABYTKÓW.
 *   ⚠ ZWERYFIKOWANE TRZEMA NIEZALEŻNYMI ŹRÓDŁAMI.
 *   ⚠ Datowanie: między drugą połową XVII w.
 *   a początkiem XIX w.
 *   ⚠⚠ KONSTRUKCJA — TO JEST WŁAŚCIWY RDZEŃ:
 *   DOM PRZYSŁUPOWY MA DWA NIEZALEŻNE UKŁADY NOŚNE.
 *   Drewniane słupy (przysłupy) stoją NA ZEWNĄTRZ izby
 *   i dźwigają piętro oraz dach, OMIJAJĄC izbę.
 *   Izba zrębowa w środku NIE PODPIERA NICZEGO —
 *   dzięki temu może „pracować" (drewno na zrąb osiada
 *   i pęcznieje), a piętro stoi nieruchomo.
 *   Piętro jest z szachulca (mur pruski).
 *   ⚠⚠⚠ WYMIARÓW DOMU PRZYSŁUPOWEGO NIE USTALONO —
 *   ani rozpiętości między słupami, ani wysokości
 *   kondygnacji, ani przekroju belek. NIE PODAJĘ
 *   ŻADNYCH METRÓW. TO JEST CAŁY KĄT.
 *   ⚠ Kontekst: Saksonia ok. 6 200 takich domów,
 *   Czechy ok. 3 600, Polska ok. 600.
 *   ⚠ Lokalna pogardliwa nazwa „kurniki" —
 *   NIE UŻYWAM, to określenie deprecjonujące.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1262 — pierwsza wzmianka o Bogatyni.
 *   ⚠ POTWIERDZENIA KRÓLA PRZEMYSŁA OTTOKARA II
 *   I WĄTKU KLASZTORNEGO (opatka, 10 łanów) NIE UŻYWAM.
 * — 1467 i 1586 — dwa młyny wodne.
 *   ⚠ CYSTEREK JAKO WŁAŚCICIELEK NIE WYMIENIAM —
 *   wątek zakonny. Piszę „młyn wodny" z datą.
 * — 1649 — 17 tkaczy płótna. 1697 — 372 mieszkańców
 *   trudniących się rzemiosłem. 1725 — 615 krosien.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „najpierw rośnie
 *   liczba narzędzi, potem ich moc" prowadzi w obszar
 *   krótkiej listy sprzętu (Polanów) i odejmowania
 *   (Strzegom, poprzednia fala). Podaję jako fakty.
 * — 1799, 1800, 1847 — lata pożarów.
 * — 1826 — most drewniany. 1859 — pierwszy mechaniczny
 *   warsztat tkacki. 1864 — gazownia. 1866 — wodociąg.
 *   1868 — lampy gazowe.
 * — 1875 — 11 fabryk włókienniczych; 1909 — 13.
 * — 1884 — otwarcie Saksońskiej Kolei Wąskotorowej
 *   Żytawa–Bogatynia, długość trasy 13,6 km.
 * — Kościół św. Marii Magdaleny: budowa XV w.,
 *   wieża dodana 1569, przebudowa 1796.
 *   ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠ WYSOKOŚCI WIEŻY NIE USTALONO.
 *
 * GEOGRAFIA — FAKTY UŻYTE:
 * — Gmina 13 617 ha; użytki rolne 5 477 ha (40,2 %);
 *   lasy i zadrzewienia 3 604 ha (26,5 %); wody 141 ha.
 * — Najwyższy punkt: Graniczny Wierch w Górach
 *   Izerskich — 612 m n.p.m.
 * — Wyniosłość Działoszyńska — do 350 m n.p.m.
 * — Rzeki: Miedzianka (prawy dopływ Nysy Łużyckiej),
 *   Nysa Łużycka. ⚠ DŁUGOŚCI MIEDZIANKI NIE USTALONO.
 * — ⚠ LICZBY PRZEJŚĆ GRANICZNYCH (6) NIE UŻYWAM —
 *   wątek graniczny.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gmina Bogatynia
 *   NIE MA ani jednego z 52 wpisów dolnośląskich.
 *   ⚠⚠⚠ NIE PISZĘ TEGO W TEKŚCIE. TEMAT NIE POJAWIA SIĘ.
 *   ⚠ „Ser zgorzelecki" jest z powiatu zgorzeleckiego,
 *   ale NIE z gminy Bogatynia — NIE PRZYPISUJĘ.
 * ⚠ ODLEGŁOŚCI: Sulików 20,4 km, Platerówka 23,3,
 *   Leśna 25,2, Zgorzelec 26,5, Mirsk 30,9, Lubań 33,0.
 *   ⚠ TO ODLEGŁOŚCI MIĘDZY SIEDZIBAMI GMIN — podaję
 *   „około".
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: DWA NIEZALEŻNE UKŁADY — o tym, że rzeczy, które
 * muszą działać osobno, nie powinny się na sobie opierać.
 * Kąt od domu przysłupowego: słupy dźwigają piętro,
 * omijając izbę mieszkalną. Izba nie podpiera niczego,
 * dzięki czemu może pracować.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w Bogatyni stoi 160 z około sześciuset polskich
 *   domów przysłupowych — ponad jedna czwarta krajowego
 *   zasobu, z czego 85 w rejestrze zabytków,
 * — ŻE TAKI DOM MA DWA NIEZALEŻNE UKŁADY NOŚNE:
 *   drewniane słupy stoją na zewnątrz izby i dźwigają
 *   piętro, omijając ją; izba zrębowa w środku nie
 *   podpiera niczego. To jest rdzeń,
 * — ⚠⚠ ŻE ZROBIONO TAK Z KONKRETNEGO POWODU: drewno
 *   na zrąb pracuje — osiada i pęcznieje. Gdyby piętro
 *   na nim stało, ruszałoby się razem z nim. Rozdzielono
 *   je, żeby jedno mogło się zmieniać, a drugie stać,
 * — ⚠⚠ ŻE W KUCHNI CIĄGLE ROBIMY ODWROTNIE I POTEM
 *   SIĘ DZIWIMY: budujemy plany, w których wszystko
 *   opiera się na wszystkim. Obiad zależy od tego,
 *   że ktoś wróci o siedemnastej. Cały tydzień zależy
 *   od jednych zakupów w sobotę,
 * — ⚠⚠ ŻE WTEDY JEDNA RZECZ, KTÓRA SIĘ RUSZY,
 *   PORUSZA CAŁĄ RESZTĘ. Nie dlatego, że plan był zły,
 *   tylko dlatego, że wszystko stało na jednym słupie,
 * — ⚠⚠ ŻE ROZWIĄZANIE NIE POLEGA NA LEPSZYM PLANIE,
 *   TYLKO NA ROZDZIELENIU: co najmniej jedna rzecz
 *   w tygodniu powinna nie zależeć od niczego innego.
 *   Jedno danie, które da się zrobić z tego, co jest
 *   zawsze, bez zakupów i bez niczyjej obecności,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ROZDZIELANIE KOSZTUJE.
 *   Dom przysłupowy jest droższy w budowie niż zwykły —
 *   trzeba postawić dwie konstrukcje zamiast jednej.
 *   Niezależność zawsze kosztuje trochę więcej niż
 *   sprytne oparcie jednego o drugie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie samo w sobie
 *   jest kolejnym elementem, od którego można uzależnić
 *   cały plan — i wtedy awaria zatrzymuje wszystko.
 *   MÓWIĘ TO WPROST. Warto mieć rzeczy, które robi się
 *   bez niego, i nie traktować tego jako wady zakupu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MISE EN PLACE I PRZYGOTOWANIA JAKO ETAPU —
 *   kąt zajęty (Mirosławiec: czego nie widać na talerzu;
 *   Golczewo: inna metoda na innym etapie).
 *   ⚠⚠ Research proponował morał „przygotowanie i
 *   gotowanie muszą stać osobno" — NIE WCHODZĘ W TO.
 *   Piszę o ZALEŻNOŚCIACH W PLANIE, nie o etapach
 *   gotowania. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO NIE MA KOŃCA, JEST RYTM I PYTANIA
 *   „CZY TO PRZETRWA ZŁY TYDZIEŃ" — kąt zajęty
 *   (Maszewo). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, CZY SYSTEM WYTRZYMA; TUTAJ o TO, ŻEBY JEGO
 *   CZĘŚCI NIE ZALEŻAŁY OD SIEBIE. Nie używam słów
 *   „system", „cykl" ani „zły tydzień". ROZGRANICZAM.
 * — ⚠⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno). Nie piszę o warunku rezygnacji.
 * — ⚠⚠ ZERO GRANICY WIĘKSZEJ NIŻ TO, CO OGRADZA —
 *   kąt zajęty (Recz).
 * — ⚠⚠ ZERO WZMACNIANIA TAM, GDZIE OBCIĄŻENIE — kąt
 *   zajęty (Lipiany). ⚠⚠ Konstrukcja nośna aż się
 *   o to prosi. NIE PISZĘ o tym, gdzie włożyć więcej
 *   materiału, tylko o tym, że dwa układy są osobne.
 * — ⚠⚠ ZERO GRUBOŚCI MURÓW I DNA — kąt zajęty (Resko).
 * — ⚠⚠ ZERO KONCENTRACJI W JEDNYM MIEJSCU — research
 *   proponował to jako kąt 1, ale to obszar zajęty
 *   (Tychowo: dziesięć kawałków; Płoty). NIE UŻYWAM.
 * — ⚠⚠ ZERO ODEJMOWANIA I KRÓTKIEJ LISTY — kąty zajęte
 *   (Strzegom, Polanów).
 * — ⚠ ZERO TRWAŁOŚCI I POWROTÓW — kąt zajęty (Chojnów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO KONKRETNEGO DANIA JAKO PRZYKŁADU —
 *   podaję WYŁĄCZNIE kryterium („da się zrobić z tego,
 *   co jest zawsze").
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ pisząc „z tego, co jest zawsze" NIE MÓWIĘ NIC
 *   o przechowywaniu ani o terminach.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KOPALNI TURÓW I ELEKTROWNI.
 * — ⚠⚠⚠ ZERO POWODZI Z 2010 R.
 * — ⚠⚠ ZERO DATY PRAW MIEJSKICH.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (Reichenau).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I ZAKONNEGO — kościoła
 *   nie opisuję, cysterek i opatki nie wymieniam.
 * — ⚠⚠ ZERO WĄTKÓW GRANICZNYCH I PRZEJŚĆ.
 * — ⚠ ZERO OKREŚLENIA „KURNIKI" — deprecjonujące.
 * — ⚠ ZERO POŻARÓW JAKO WĄTKU EMOCJONALNEGO — podaję
 *   same lata.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl; strona gminy
 *   w zakresie liczby ludności.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty praw miejskich.
 * — NIE PODAJĘ żadnych wymiarów domu przysłupowego —
 *   nie ustalono.
 * — NIE PODAJĘ wysokości wieży kościoła.
 * — NIE PODAJĘ długości Miedzianki.
 * — NIE PISZĘ, że Bogatynia była „najdłuższą wsią
 *   Europy" — teza niepotwierdzona żadnym źródłem.
 * — NIE PODAJĘ najniższego punktu gminy.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Bogatynia leży w powiecie zgorzeleckim, nad
 *   Miedzianką, prawym dopływem Nysy Łużyckiej;
 *   miasto liczy 15 875 mieszkańców (GUS, 31.12.2024)
 *   na 59,9 km², a cała gmina 21 120 osób na 136,1 km²,
 *   z szesnastoma miejscowościami wiejskimi,
 * — pierwsza wzmianka o miejscowości pochodzi z 1262 r.,
 *   młyny wodne odnotowano w 1467 i 1586 r.,
 * — w 1649 r. pracowało tu siedemnastu tkaczy płótna,
 *   w 1697 r. rzemiosłem trudniło się 372 mieszkańców,
 *   a w 1725 r. działało 615 krosien; pierwszy
 *   mechaniczny warsztat tkacki uruchomiono w 1859 r.,
 *   a w 1875 r. było tu jedenaście fabryk
 *   włókienniczych, w 1909 — trzynaście,
 * — gazownię uruchomiono w 1864 r., wodociąg w 1866,
 *   lampy gazowe w 1868, a w 1884 r. otwarto kolej
 *   wąskotorową z Żytawy o długości trasy 13,6 km;
 *   drewniany most stanął w 1826 r., a miasto płonęło
 *   w 1799, 1800 i 1847 r.,
 * — w gminie użytki rolne zajmują 5 477 ha, lasy
 *   i zadrzewienia 3 604 ha, a wody 141 ha;
 *   najwyższym punktem jest Graniczny Wierch w Górach
 *   Izerskich — 612 m n.p.m.,
 * — w Bogatyni stoi 160 z około sześciuset polskich
 *   domów przysłupowych, z czego 85 jest w rejestrze
 *   zabytków; datuje się je między drugą połową XVII w.
 *   a początkiem XIX w. Taki dom ma dwa niezależne
 *   układy nośne: drewniane słupy stoją na zewnątrz
 *   izby i dźwigają piętro oraz dach, omijając ją,
 *   a izba zrębowa w środku nie podpiera niczego;
 *   piętro wzniesiono z szachulca. W Saksonii zachowało
 *   się około 6 200 takich domów, w Czechach około
 *   3 600, w Polsce około 600.
 */
export const BOGATYNIA: CityContent = {
  slug: "bogatynia",
  h1: "Thermomix Bogatynia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bogatynia — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Bogatyni (powiat zgorzelecki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bogatynia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bogatyni. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bogatyni w powiecie zgorzeleckim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu wsi w gminie.",

  highlights: highlightyStandardowe("Bogatynia"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Słupy dźwigają piętro, omijając izbę. Żeby izba mogła pracować.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bogatyni – jak wygląda prezentacja?",
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
      id: "dwa-uklady",
      heading: "Dom, w którym piętro nie stoi na parterze",
      paragraphs: [
        "W Bogatyni stoi sto sześćdziesiąt z około sześciuset polskich domów przysłupowych — ponad jedna czwarta całego krajowego zasobu w jednym mieście. Osiemdziesiąt pięć z nich jest w rejestrze zabytków. Budowano je tu od drugiej połowy siedemnastego wieku po początek dziewiętnastego.",
        "Taki dom jest zbudowany inaczej, niż wygląda. Ma dwa niezależne układy nośne.",
        "Drewniane słupy — przysłupy — stoją na zewnątrz izby, wokół niej, i dźwigają piętro razem z dachem. Omijają izbę. Izba zrębowa w środku, ta z belek układanych na zrąb, nie podpiera niczego. Stoi sobie w środku konstrukcji, która jej nie potrzebuje.",
        "I zrobiono tak z całkiem konkretnego powodu.",
        "Drewno na zrąb pracuje: osiada, pęcznieje, zmienia wymiary z porami roku. Gdyby stało na nim piętro, piętro ruszałoby się razem z nim. Więc je rozdzielono — żeby jedna część mogła się zmieniać, a druga stać nieruchomo. Dwie konstrukcje zamiast jednej, w jednym budynku, przez sto pięćdziesiąt lat.",
        "W kuchni robimy dokładnie odwrotnie i potem się dziwimy.",
        "Budujemy plany, w których wszystko opiera się na wszystkim. Obiad zależy od tego, że ktoś wróci o siedemnastej. Cały tydzień zależy od jednych zakupów w sobotę. Środa zależy od tego, że w poniedziałek starczyło na dwa dni.",
        "I wtedy jedna rzecz, która się ruszy, porusza całą resztę. Nie dlatego, że plan był zły — on mógł być bardzo dobry. Dlatego, że wszystko stało na jednym słupie.",
        "Rozwiązanie nie polega na lepszym planowaniu. Polega na rozdzieleniu.",
        "Warto mieć w tygodniu co najmniej jedną rzecz, która nie zależy od niczego innego: jedno danie, które da się zrobić z tego, co w domu jest zawsze, bez dodatkowych zakupów i bez niczyjej obecności. Nie po to, żeby je robić co tydzień. Po to, żeby istniało — i żeby środa nie zależała od soboty.",
        "Uczciwie o drugiej stronie: rozdzielanie kosztuje. Dom przysłupowy jest droższy w budowie niż zwykły, bo trzeba postawić dwie konstrukcje zamiast jednej. Niezależność zawsze wychodzi trochę drożej niż sprytne oparcie jednej rzeczy o drugą — i to jest uczciwa cena, nie ukryty haczyk.",
        "Na koniec o urządzeniu, i akurat tu muszę powiedzieć rzecz niewygodną dla siebie.",
        "Thermomix też jest elementem, od którego można uzależnić cały plan. Kiedy wszystko robi się w nim, awaria albo oddanie go do serwisu zatrzymuje kuchnię. Dlatego warto zachować parę rzeczy, które robi się bez niego — i nie traktować tego jako wady zakupu, tylko jako drugi słup.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bogatyni?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co robicie wtedy, kiedy nic nie wyszło zgodnie z planem. Właśnie to warto ugotować razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bogatyni"),
    sekcjaRaty("w Bogatyni"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Bogatyni",
      paragraphs: [
        "Bogatynia leży w powiecie zgorzeleckim, nad Miedzianką — prawym dopływem Nysy Łużyckiej. Samo miasto liczy blisko szesnaście tysięcy mieszkańców (GUS, 31.12.2024) na niemal sześćdziesięciu kilometrach kwadratowych, a cała gmina ponad dwadzieścia jeden tysięcy osób na stu trzydziestu sześciu, z szesnastoma wsiami. Pierwsza wzmianka pochodzi z 1262 roku, młyny wodne odnotowano w 1467 i 1586. W 1649 pracowało tu siedemnastu tkaczy płótna, w 1697 rzemiosłem trudniło się trzystu siedemdziesięciu dwóch mieszkańców, a w 1725 działało już sześćset piętnaście krosien; pierwszy mechaniczny warsztat tkacki uruchomiono w 1859, a w 1875 było w mieście jedenaście fabryk włókienniczych, w 1909 — trzynaście. Gazownię otwarto w 1864, wodociąg w 1866, lampy gazowe w 1868, a w 1884 kolej wąskotorową z Żytawy o długości trasy trzynastu i sześciu dziesiątych kilometra. Drewniany most stanął w 1826. W gminie użytki rolne zajmują pięć i pół tysiąca hektarów, lasy ponad trzy i pół tysiąca, a najwyższym punktem jest Graniczny Wierch w Górach Izerskich — sześćset dwanaście metrów nad poziomem morza. W mieście zachowało się sto sześćdziesiąt domów przysłupowych, z czego osiemdziesiąt pięć w rejestrze zabytków — dla porównania w całej Polsce jest ich około sześciuset, w Czechach około trzech i pół tysiąca, a w Saksonii ponad sześć tysięcy.",
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

  districtsHeading: "Do których części Bogatyni dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu wsi w gminie — Działoszyna, Porajowa, Sieniawki, Opolna-Zdroju, Krzewiny i pozostałych. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Bogatynię też przyjadę",
  nearbyParagraphs: [
    "Do Zgorzelca jest stąd około dwudziestu sześciu kilometrów, do Leśnej dwadzieścia pięć, do Lubania trzydzieści trzy. Bogatynia ma najdalszych sąsiadów ze wszystkich miast, do których jeżdżę — i to niczego nie zmienia, dojazd jest bezpłatny tak samo.",
  ],
  nearbyTowns: ["Zgorzelec", "Leśna", "Lubań", "Mirsk", "Olszyna"],

  about: blokOMnie("do Bogatyni", "w Bogatyni", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bogatyni bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja — również dlatego, że Bogatynia leży dość daleko od sąsiadów: najbliższa gmina jest ponad dwadzieścia kilometrów stąd, a Zgorzelec dwadzieścia sześć. Chodzi o Bogatynię w powiecie zgorzeleckim; w wyszukiwarce hasło „gmina Bogatynia” zwraca głównie wyniki o kopalni.",
    },
    ...faqWspolne("w Bogatyni"),
    {
      question: "Dlaczego plan na tydzień zwykle sypie się po jednym dniu?",
      answer:
        "Bo prawie zawsze wszystko w nim opiera się na wszystkim: obiad na tym, że ktoś wróci o siedemnastej, środa na sobotnich zakupach. Wystarczy, że jedna rzecz się ruszy. Domy przysłupowe w Bogatyni budowano odwrotnie — słupy dźwigają piętro, omijając izbę, żeby jedna część mogła pracować, a druga stać. Warto mieć w tygodniu jedno danie, które nie zależy od niczego: da się je zrobić z tego, co w domu jest zawsze.",
    },
    {
      question: "Co, jeśli uzależnię całą kuchnię od jednego urządzenia?",
      answer:
        "To jest realne ryzyko i mówię o nim przed zakupem, nie po. Kiedy wszystko robi się w jednym sprzęcie, oddanie go do serwisu zatrzymuje kuchnię. Dlatego warto zachować kilka rzeczy, które robi się bez niego — nie jako wadę zakupu, tylko jako drugi słup pod tym samym dachem.",
    },
  ],

  geo: { lat: 50.9072, lng: 14.9561 },
};
