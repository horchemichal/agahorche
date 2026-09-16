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
 * KOWARY — Karkonosze, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — GRANICE GMINY POKRYWAJĄ SIĘ
 *   Z GRANICAMI MIASTA. 9 616 mieszkańców
 *   (GUS 31.12.2024), 37,4 km², gęstość 257,2 os./km².
 *   ⚠⚠⚠ „LUDNOŚĆ MIASTA" I „LUDNOŚĆ GMINY" TO TA SAMA
 *   LICZBA. NIE WOLNO PISAĆ „MIASTO I GMINA" JAKO
 *   O DWÓCH RZECZACH. NIE MA TU ŻADNYCH WSI.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠⚠⚠ NAZWY POWIATU NIE PODAJĘ W OGÓLE.
 *   ŹRÓDŁA SPRZECZNE: polskawliczbach podaje powiat
 *   jeleniogórski, działający serwis powiatkarkonoski.eu
 *   wymienia Kowary jako swoje. DATY ZMIANY NAZWY
 *   NIE USTALIŁEM. Podanie nieaktualnej nazwy jest
 *   widoczne dla każdego miejscowego — WIĘC NIE PODAJĘ
 *   ŻADNEJ. Piszę „Kowary w Karkonoszach, nad Jedlicą".
 * ⚠ GEO: 50,7833 / 15,8333.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM. NAZWA WYSTĘPUJE
 *   WYŁĄCZNIE W LICZBIE MNOGIEJ:
 *     M. Kowary (te Kowary) — NIE „to Kowary"
 *     D. Kowar (do Kowar) — KOŃCÓWKA ZEROWA,
 *        NIE „do Kowarów"
 *     C. Kowarom · B. Kowary · N. Kowarami
 *     Ms. Kowarach (w Kowarach)
 *   ⚠⚠⚠ ORZECZENIE W LICZBIE MNOGIEJ:
 *     „Kowary LEŻĄ", „Kowary SĄ", „Kowary ZOSTAŁY".
 *     NIGDY „Kowary leży", „Kowary jest znane".
 *   ⚠⚠ PRZYMIOTNIK „KOWARSKI" — FORMA NIEPOTWIERDZONA
 *   URZĘDOWO. UŻYWAM OSZCZĘDNIE.
 *   ⚠⚠⚠ AUTOKOREKTA ZAMIENIA „KOWARSKI" NA „KOWALSKI" —
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM PRZED PUBLIKACJĄ.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ KOLIZJE: Kowary ≠ Kowale ≠ Kowalewo ≠ Kowalewo
 *   Pomorskie ≠ Kowala. Rdzeń „kowal-" jest w polskiej
 *   toponimii bardzo częsty.
 *   ⚠⚠⚠ MYLENIE Z KAMIENNĄ GÓRĄ — 17 km, oba miasta
 *   w tym samym paśmie, KAMIENNA GÓRA JUŻ OPISANA.
 *   RYZYKO REALNE. ROZGRANICZAM W FAQ.
 *   ⚠⚠ MYLENIE Z KARPACZEM — sąsiedzi, ten sam ruch
 *   turystyczny. Piszę „Kowary nad Jedlicą".
 *
 * ⚠⚠⚠ NOTA ETYCZNA NAJWYŻSZEJ WAGI:
 *   GŁÓWNYM DZISIEJSZYM WĄTKIEM TURYSTYCZNYM KOWAR JEST
 *   GÓRNICTWO URANU — dawne kopalnie, podziemne trasy
 *   turystyczne, inhalatorium radonowe.
 *   ⚠⚠⚠ CAŁY TEN WĄTEK POMIJAM W CAŁOŚCI, BEZ WYJĄTKU
 *   I BEZ WZMIANKI. Temat radioaktywny i zdrowotny.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *   Wątki, na których stoi ten tekst — ruda żelaza,
 *   tkactwo, dywany, park miniatur — są od uranu
 *   CAŁKOWICIE NIEZALEŻNE i nie wymagają o nim wzmianki.
 *   ⚠⚠ RÓWNIEŻ POMIJAM: zamówienie luf muszkietowych
 *   (zbrojeniówka), rok 1633 i wojnę trzydziestoletnią,
 *   pożar 1792 i powódź 1810 (żywioły), powódź 1997.
 *
 * POŁOŻENIE — LICZBY:
 * — Rzeka Jedlica; zabudowa ciągnie się około 5 km
 *   wzdłuż jej biegu.
 * — Wysokość od 420 do ponad 1 260 m n.p.m.
 *   ⚠ ŹRÓDŁA: 1 266 albo 1 281 m (Skalny Stół) —
 *   PISZĘ „PONAD 1 260". Deniwelacja ponad 840 m.
 * — Lasy 2 379 ha, czyli 63,6 % powierzchni;
 *   użytki rolne 838 ha, czyli 22,4 %.
 * — Otaczające pasma: Karkonosze, Rudawy Janowickie,
 *   Grzbiet Lasocki.
 * — Do Jeleniej Góry i do Kamiennej Góry po około 17 km.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1148 — odkrycie rudy żelaza na górze Rudnik przez
 *   gwarka Laurentiusa Angelusa.
 * — 1158 — założenie osady, dwustu kowali i górników.
 * — 1355 — przywileje górnicze od księcia Bolka II.
 * — 1368 — siedziba wójta.
 * — 1513 — PRAWA MIEJSKIE od króla Władysława
 *   Jagiellończyka. ⚠ Jedno źródło podaje 4 września —
 *   DATY DZIENNEJ NIE PODAJĘ.
 * — 1558 — eksport 1 500 cetnarów żelaza.
 * — 1720 — manufaktura lniarska.
 * — 1854 — tkacze wysłani na szkolenie do Smyrny.
 * — 1856 — przeniesienie fabryki dywanów do Kowar;
 *   w tym samym roku początek przemysłowego wydobycia
 *   magnetytu (ruda żelaza, zakończone 1962).
 * — 1863 — fabryka filcu technicznego.
 * — 1906–1912 — nowe krosna pozwalające pracować
 *   na 64 kolorach wełny.
 * — lata 30. XX w. — 12 000 m² dywanów rocznie.
 * — 1959 — włączenie Krzaczyny do miasta.
 * — KOLEJ: do Jeleniej Góry 1882, do Karpacza 1895,
 *   do Kamiennej Góry 1905; elektryfikacja 1932.
 * — ⚠⚠ ROKU ZAŁOŻENIA FABRYKI DYWANÓW ANI LICZBY
 *   ZATRUDNIONYCH NIE USTALONO — nie podaję.
 * — ⚠⚠ DYWANU O POWIERZCHNI 180 m² W PAŁACU
 *   PREZYDENCKIM NIE PODAJĘ — wątek polityczny.
 * — ⚠⚠ UDZIAŁU EKSPORTU I NARRACJI O UPADKU FABRYKI
 *   NIE UŻYWAM. Piszę wyłącznie „dawna fabryka dywanów"
 *   jako określenie miejsca.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PARK MINIATUR:
 *   Od 2003 r., NA TERENIE DAWNEJ FABRYKI DYWANÓW,
 *   działa park miniatur zabytków Dolnego Śląska.
 *   ⚠⚠⚠ SKALA: 1:25 DLA ZABYTKÓW, ALE MAKIETA
 *   KARKONOSZY MUSIAŁA ZEJŚĆ DO 1:50.
 *   To jest cały kąt: park ustalił sobie jedną skalę
 *   i musiał od niej odstąpić dla jednego obiektu,
 *   bo pasmo górskie nie zmniejsza się na tych samych
 *   warunkach co zamek.
 *   ⚠ Około 90 obiektów na ponad pół hektara — [NP],
 *   jedno źródło. PISZĘ „OKOŁO DZIEWIĘĆDZIESIĘCIU",
 *   z zaznaczeniem, że to liczba z opisu parku.
 *   ⚠ Jedna makieta powstaje nawet kilka miesięcy [ZW].
 *   ⚠ Zwiedzanie z przewodnikiem 45 minut [ZW].
 *   ⚠ NAZWISK TWÓRCÓW NIE PODAJĘ — [NP].
 *
 * KĄT: JEDNA SKALA NIE WYSTARCZYŁA
 * — o tym, że przeliczając przepis w dół albo w górę
 * przeliczamy wszystko jednym mnożnikiem, a część
 * rzeczy się temu mnożnikowi nie poddaje. Kąt od parku
 * miniatur: zabytki w 1:25, ale góry musiały zejść
 * do 1:50.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że park miniatur w Kowarach, urządzony na terenie
 *   dawnej fabryki dywanów, ustalił dla siebie skalę
 *   1:25 i trzyma się jej przy zabytkach,
 * — ŻE DLA KARKONOSZY MUSIAŁ ZEJŚĆ DO 1:50 — złamał
 *   własną zasadę dla jednego elementu, bo inaczej
 *   by się nie zmieścił. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI PRZELICZAMY PRZEPISY BEZ PRZERWY:
 *   obiad na sześć osób robiony na dwie, ciasto z formy
 *   większej w mniejszej, podwojona porcja na gości,
 * — ⚠⚠ ŻE ROBIMY TO JEDNYM MNOŻNIKIEM I TO JEST BŁĄD:
 *   ilość schodzi wraz z mnożnikiem, ale czas nie;
 *   powierzchnia dna garnka nie zmniejsza się o połowę,
 *   gdy o połowę zmniejszasz zawartość; przyprawy
 *   nie zachowują się liniowo,
 *   ⚠⚠⚠ MÓWIĘ O TYM WYŁĄCZNIE JAKOŚCIOWO. ZERO LICZB,
 *   ZERO WSPÓŁCZYNNIKÓW, ZERO CZASÓW, ZERO TEMPERATUR.
 *   NIE PODAJĘ, O ILE COKOLWIEK ZMIENIĆ.
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN: zanim przeliczysz,
 *   rozdziel to, co schodzi razem z ilością, od tego,
 *   co zostaje takie samo. Zwykle jedno albo dwa
 *   elementy nie schodzą — i to one decydują o wyniku,
 * — ⚠⚠ ŻE ODSTĄPIENIE OD WŁASNEJ ZASADY DLA JEDNEGO
 *   ELEMENTU NIE JEST NIECHLUJSTWEM. Park nie zrobił
 *   wszystkiego w 1:50 i nie udawał, że góra zmieści się
 *   w 1:25. Zrobił wyjątek, wiedząc, że to wyjątek,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: wyjątków nie może być
 *   dużo, bo wtedy nie ma zasady. Park zrobił jeden,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma pojemność
 *   naczynia i to jest twarda granica przeliczania
 *   w górę. MÓWIĘ TO WPROST: powyżej pewnej ilości
 *   robi się dwie tury i nie ma na to rady.
 *   ⚠⚠⚠ POJEMNOŚCI W LITRACH NIE PODAJĘ — nie zmyślam
 *   parametrów urządzenia.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO USTALONEGO WYMIARU I TRZYMANIA SIĘ JEDNEJ
 *   MIARY — kąt zajęty (KAMIENNA GÓRA, 17 km stąd,
 *   opisana w tej samej serii!).
 *   ⚠⚠⚠ RÓŻNICA JEST TAKA: tamten tekst mówi
 *   „trzymaj jeden ustalony rozmiar", ten mówi
 *   „co zrobić, gdy jeden element nie mieści się
 *   w twojej własnej zasadzie". ROZGRANICZAM JAWNIE,
 *   JEDNYM ZDANIEM W TEKŚCIE. TO NAJWIĘKSZE RYZYKO
 *   TEGO TEKSTU.
 * — ⚠⚠⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia).
 *   Nie piszę, że wielkość nie decyduje o staranności.
 *   Piszę o PRZELICZANIU, nie o wartości małego.
 * — ⚠⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno). Pojemność naczynia wymieniam
 *   jednym półzdaniem jako granicę techniczną
 *   i nie rozwijam.
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty (Mielno).
 * — ⚠⚠ ZERO JEDNEJ OSI ROBOCZEJ I UKŁADU KUCHNI —
 *   obszar zajęty wielokrotnie. Rozciągłości miasta
 *   wzdłuż Jedlicy NIE PRZENOSZĘ DO KUCHNI.
 * — ⚠⚠ ZERO SZEROKIEGO ZAPASU KONTRA UŻYCIA NARAZ
 *   (64 kolory wełny) — ociera się o krótką listę
 *   sprzętu (Polanów). Liczbę 64 podaję JAKO FAKT
 *   O KROSNACH, bez morału.
 * — ⚠⚠ ZERO METODY I KOLEJNOŚCI — kąt pisany w tej samej
 *   fali (Milicz).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI, PRZELICZNIKÓW I PRZEPISÓW —
 *   ⚠⚠⚠ TO JEST TEKST O PRZELICZANIU, WIĘC POKUSA JEST
 *   OGROMNA. NIE PODAJĘ ANI JEDNEJ LICZBY KUCHENNEJ.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO URANU, KOPALŃ URANU, TRAS PODZIEMNYCH
 *   I INHALATORIUM — bez wzmianki, bez aluzji.
 * — ⚠⚠ ZERO ZBROJENIÓWKI I WĄTKÓW WOJENNYCH.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO POŻARÓW, POWODZI I ŻYWIOŁÓW.
 * — ⚠⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I WYLUDNIANIA —
 *   „dawna fabryka dywanów" to określenie miejsca,
 *   nie opowieść o zamknięciu.
 * — ⚠⚠ ZERO WĄTKU POLITYCZNEGO — dywanu w Pałacu
 *   Prezydenckim nie wymieniam.
 * — ⚠ ZERO ŚREDNIEGO WIEKU MIESZKAŃCA I DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nazwy powiatu — źródła sprzeczne.
 * — NIE PISZĘ „miasto i gmina" — to jedno i to samo.
 * — NIE PODAJĘ najwyższego punktu co do metra —
 *   źródła podają 1 266 albo 1 281.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE PODAJĘ roku założenia fabryki dywanów ani liczby
 *   zatrudnionych — nie ustalono.
 * — NIE PODAJĘ liczby makiet jako pewnej — to liczba
 *   z opisu parku, jedno źródło.
 * — NIE PODAJĘ nazwisk twórców parku.
 * — NIE PODAJĘ pojemności naczynia urządzenia w litrach.
 * — NIE PODAJĘ żadnych przeliczników kuchennych.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠⚠ Produkty „z Karkonoszy" i „sudeckie"
 *   są oznaczeniami REGIONALNYMI (pasmo górskie),
 *   NIE GMINNYMI — nie przypisuję ich Kowarom.
 *   ⚠ „Kamiennogórski ser pleśniowy" dotyczy Kamiennej
 *   Góry — NIE KOWAR.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kowary leżą w Karkonoszach, nad Jedlicą; są gminą
 *   miejską, więc granice gminy pokrywają się
 *   z granicami miasta; liczą 9 616 mieszkańców
 *   (GUS, 31.12.2024) na 37,4 km², zabudowa ciągnie się
 *   około 5 km wzdłuż rzeki, a teren rozpina się
 *   od 420 do ponad 1 260 m n.p.m.; lasy zajmują 2 379 ha,
 *   czyli 63,6 % powierzchni, a użytki rolne 838 ha,
 *   czyli 22,4 %,
 * — rudę żelaza odkryto na górze Rudnik w 1148 r.,
 *   osadę dwustu kowali i górników założono w 1158,
 *   przywileje górnicze nadał książę Bolko II w 1355,
 *   siedzibą wójta miejscowość stała się w 1368,
 *   a prawa miejskie otrzymała w 1513 r. od króla
 *   Władysława Jagiellończyka; w 1558 wyeksportowano
 *   stąd 1 500 cetnarów żelaza, a przemysłowe wydobycie
 *   magnetytu prowadzono od 1856 do 1962 r.,
 * — manufakturę lniarską uruchomiono w 1720 r.,
 *   w 1854 wysłano tkaczy na szkolenie do Smyrny,
 *   w 1856 przeniesiono tu fabrykę dywanów, w 1863
 *   powstała fabryka filcu technicznego, w latach
 *   1906–1912 wstawiono krosna pozwalające pracować
 *   na 64 kolorach wełny, a w latach trzydziestych
 *   XX w. wychodziło stąd 12 000 m² dywanów rocznie,
 * — od 2003 r. na terenie dawnej fabryki dywanów działa
 *   park miniatur zabytków Dolnego Śląska: makiety
 *   wykonywane są w skali 1:25, a makieta Karkonoszy
 *   w 1:50; park podaje około dziewięćdziesięciu obiektów
 *   na ponad pół hektara, jedna makieta powstaje nawet
 *   kilka miesięcy, a zwiedzanie z przewodnikiem trwa
 *   45 minut,
 * — kolej do Jeleniej Góry otwarto w 1882 r., do Karpacza
 *   w 1895, do Kamiennej Góry w 1905, a linię
 *   zelektryfikowano w 1932; Krzaczynę włączono
 *   do miasta w 1959.
 */
export const KOWARY: CityContent = {
  slug: "kowary",
  h1: "Thermomix Kowary – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kowary — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kowarach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kowary — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kowarach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kowar z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, na całej pięciokilometrowej długości zabudowy wzdłuż Jedlicy.",

  highlights: highlightyStandardowe("Kowary"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zabytki w skali jeden do dwudziestu pięciu. Góry musiały zejść do jeden do pięćdziesięciu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kowarach – jak wygląda prezentacja?",
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
      id: "jedna-skala-nie-wystarczyla",
      heading: "Jedna skala nie wystarczyła",
      paragraphs: [
        "W Kowarach, na terenie dawnej fabryki dywanów, od 2003 roku stoi park miniatur dolnośląskich zabytków. Zasada jest jasna i park się jej trzyma: wszystko w skali jeden do dwudziestu pięciu. Jedna makieta powstaje nawet kilka miesięcy.",
        "Z jednym wyjątkiem. Makieta Karkonoszy musiała zejść do jeden do pięćdziesięciu.",
        "Bo pasmo górskie nie zmniejsza się na tych samych warunkach co zamek. Przy tym samym przeliczniku po prostu by się nie zmieściło, a park stoi na niecałym hektarze.",
        "W kuchni przeliczamy bez przerwy i prawie zawsze jednym mnożnikiem.",
        "Obiad na sześć osób robiony na dwie. Ciasto z dużej formy przełożone do mniejszej. Porcja podwojona, bo przyjeżdżają goście. Bierzemy każdą pozycję z przepisu i dzielimy albo mnożymy — wszystkie tak samo, bo tak się wydaje uczciwie.",
        "I tu jest haczyk, ten sam co z górami.",
        "Ilość rzeczywiście schodzi wraz z mnożnikiem. Ale czas już nie — mniejsza porcja nie potrzebuje proporcjonalnie mniej minut, bo ciepło nie działa w ten sposób. Powierzchnia dna garnka nie zmniejsza się o połowę, kiedy o połowę zmniejszasz zawartość, więc to, co miało się smażyć w jednej warstwie, nagle pływa albo przywiera. Przyprawy też nie zachowują się liniowo i każdy, kto raz podwoił ostre danie, wie o tym aż za dobrze.",
        "Nie podam Ci tu żadnych współczynników, bo takie liczby zależą od naczynia, od produktu i od tego, jak lubicie — a rzucanie zmyśloną liczbą byłoby gorsze niż nierzucanie żadną.",
        "Ruch, który naprawdę pomaga, jest inny i darmowy: zanim przeliczysz, rozdziel to, co schodzi razem z ilością, od tego, co zostaje takie samo.",
        "Zwykle okazuje się, że nie schodzi jeden element, czasem dwa. I to właśnie one decydują, czy przeliczony przepis wyjdzie, czy nie.",
        "Warto przy tym zauważyć coś jeszcze. Park nie udał, że góra zmieści się w jeden do dwudziestu pięciu, i nie zrobił za to całej reszty w jeden do pięćdziesięciu. Zrobił jeden wyjątek i wiedział, że robi wyjątek. To nie jest niechlujstwo — to jest uczciwe policzenie, czego się nie da.",
        "Uczciwie o drugiej stronie: wyjątków nie może być dużo, bo wtedy nie ma zasady, tylko chaos z ładną nazwą. Park zrobił jeden.",
        "I dopowiem, żeby nie było nieporozumienia: to nie jest tekst o trzymaniu się jednego ustalonego rozmiaru. To tekst o czymś odwrotnym — o tym, co zrobić, kiedy jeden element nie mieści się we własnej zasadzie.",
        "Na koniec o urządzeniu. Thermomix ma naczynie o określonej pojemności i to jest twarda granica przeliczania w górę — powyżej pewnej ilości robi się po prostu dwie tury i nie ma na to sposobu. Nie podam pojemności z pamięci, bo wolę pokazać ją na miejscu razem z tym, co się w niej mieści przy Waszej liczbie osób.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kowarach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, na ile osób gotujecie na co dzień, a na ile przy gościach. Te dwie liczby wystarczą, żebym dobrała dania, które zobaczysz w swojej skali, a nie w pokazowej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kowarach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kowar",
      paragraphs: [
        "Kowary leżą w Karkonoszach, nad Jedlicą, i są gminą miejską — granice gminy pokrywają się z granicami miasta, więc nie ma tu podziału na miasto i wsie. Mieszka tu 9 616 osób (GUS, 31.12.2024) na trzydziestu siedmiu i pół kilometra kwadratowego; zabudowa ciągnie się około pięciu kilometrów wzdłuż rzeki, a teren rozpina się od czterystu dwudziestu do ponad tysiąca dwustu sześćdziesięciu metrów nad poziomem morza. Lasy zajmują dwa tysiące trzysta siedemdziesiąt dziewięć hektarów, czyli prawie dwie trzecie powierzchni, użytki rolne osiemset trzydzieści osiem. Rudę żelaza odkryto na górze Rudnik w 1148 roku, osadę dwustu kowali i górników założono dziesięć lat później, przywileje górnicze nadał książę Bolko II w 1355, a prawa miejskie miasto otrzymało w 1513 roku od króla Władysława Jagiellończyka. W 1558 wyeksportowano stąd tysiąc pięćset cetnarów żelaza, a przemysłowe wydobycie magnetytu prowadzono od 1856 do 1962 roku. Manufakturę lniarską uruchomiono w 1720, w 1854 wysłano tkaczy na szkolenie do Smyrny, w 1856 przeniesiono tu fabrykę dywanów, w 1863 powstała fabryka filcu technicznego, a w latach 1906–1912 wstawiono krosna pozwalające pracować na sześćdziesięciu czterech kolorach wełny — w latach trzydziestych wychodziło stąd dwanaście tysięcy metrów kwadratowych dywanów rocznie. Kolej do Jeleniej Góry otwarto w 1882 roku, do Karpacza w 1895, do Kamiennej Góry w 1905, a linię zelektryfikowano w 1932. Krzaczynę włączono do miasta w 1959.",
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

  districtsHeading: "Do których części Kowar dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta. Kowary są gminą miejską, więc nie ma tu odrębnych wsi — jest natomiast pięć kilometrów zabudowy wzdłuż Jedlicy i spora różnica wysokości, i dojeżdżam na całej tej długości, także do Krzaczyny, włączonej do miasta w 1959 roku.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kowary też przyjadę",
  nearbyParagraphs: [
    "Do Jeleniej Góry i do Kamiennej Góry jest stąd po około siedemnaście kilometrów — w obie strony tyle samo. Dojeżdżam też do Karpacza, Mysłakowic i Piechowic, wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Jelenia Góra", "Kamienna Góra", "Karpacz", "Mysłakowice", "Piechowice"],

  about: blokOMnie("do Kowar", "w Kowarach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kowar bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Kowary są gminą miejską, więc nie ma tu osobnych wsi — jest za to pięć kilometrów zabudowy wzdłuż Jedlicy i dojeżdżam na całej długości, także do Krzaczyny. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Kowary w Karkonoszach, nie o Kowale ani Kowalewo Pomorskie, i nie o Kamienną Górę, do której jest stąd siedemnaście kilometrów.",
    },
    ...faqWspolne("w Kowarach"),
    {
      question: "Jak przeliczyć przepis na mniejszą liczbę osób?",
      answer:
        "Nie jednym mnożnikiem do wszystkiego — i to jest cała odpowiedź. Park miniatur w Kowarach robi zabytki w skali jeden do dwudziestu pięciu, ale Karkonosze musiał zmniejszyć do jeden do pięćdziesięciu, bo pasmo górskie nie schodzi na tych samych warunkach co zamek. W kuchni ilość schodzi wraz z mnożnikiem, ale czas już nie, powierzchnia dna garnka nie zmniejsza się o połowę razem z zawartością, a przyprawy nie zachowują się liniowo. Zanim przeliczysz, rozdziel to, co schodzi razem z ilością, od tego, co zostaje takie samo — zwykle nie schodzi jeden element i to on decyduje o wyniku. Konkretnych współczynników nie podam, bo zależą od naczynia i od produktu.",
    },
    {
      question: "Czy w Thermomixie da się ugotować obiad dla większej rodziny za jednym razem?",
      answer:
        "Do pewnej ilości tak, powyżej robi się dwie tury — naczynie ma określoną pojemność i to jest twarda granica, której nie da się obejść. Nie podam jej z pamięci, bo wolę pokazać ją u Was na miejscu razem z tym, co się w niej mieści przy Waszej liczbie osób. To zresztą najsensowniejszy powód, żeby umówić prezentację: zobaczyć skalę własną, a nie pokazową.",
    },
  ],

  geo: { lat: 50.7833, lng: 15.8333 },
};
