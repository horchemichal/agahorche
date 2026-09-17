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
 * MIRSK — powiat lwówecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 593 mieszkańców (GUS 31.12.2024), 14,7 km².
 *   ⚠⚠ GĘSTOŚĆ: 3 593 / 14,7 = 244,4, serwis podaje
 *   245,1. PISZĘ „OKOŁO DWUSTU CZTERDZIESTU PIĘCIU" —
 *   nie cytuję wartości z przecinkiem.
 * CAŁA GMINA: 8 113 osób, 186,5 km², gęstość ok. 44
 *   [8 113 / 186,5 = 43,5 — graniczne, PODAJĘ
 *   ZAOKRĄGLONE SŁOWNIE].
 *   ⚠⚠⚠ LICZBY WSI NIE PODAJĘ JAKO PEWNEJ — serwis
 *   deklaruje 21, ale wymienia siedemnaście nazw.
 *   PISZĘ „PONAD DWADZIEŚCIA MIEJSCOWOŚCI".
 *   ⚠⚠ NA WSI MIESZKA WIĘCEJ LUDZI NIŻ W MIEŚCIE:
 *   4 520 wobec 3 593. Miasto to 44,3 % ludności gminy
 *   na 7,9 % jej powierzchni. PODAJĘ JAKO FAKT,
 *   ⚠⚠ BEZ KĄTA — figura proporcji wypadła już
 *   w Pieńsku, Głuszycy, Lubawce i Bierutowie.
 * ⚠ GEO: 50,9705 / 15,3859.
 *
 * ⚠ ODMIANA — TYP MĘSKI:
 *   D. do Mirska · Ms. w MIRSKU · N. MIRSKIEM.
 *   ⚠⚠ BŁĄD: narzędnik „Mirskim". Przymiotnik: MIRSKI.
 *   ⚠⚠⚠ PRZYMIOTNIK JEST IDENTYCZNY Z POPULARNYM
 *   NAZWISKIEM — w tekście zawsze dopowiadam „gmina
 *   mirska", nigdy samo „mirski" bez rzeczownika.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [SP, dwie formy].
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — MIR / MIRSK na Białorusi — silna kolizja
 *     w wyszukiwaniu.
 *   — MIRKÓW (dolnośląskie, gm. Długołęka) — kolizja
 *     wewnątrz województwa.
 *   — MIROSŁAWIEC (zachodniopomorskie) — MA JUŻ STRONĘ.
 *   — ⚠⚠⚠ PROSZOWA — WIEŚ W TEJ GMINIE, myląca się
 *     z PROSZOWICAMI (małopolskie) i z PROCHOWICAMI,
 *     opisywanymi w tej samej fali. POTRÓJNA KOLIZJA.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠ ZERO KĄTÓW KOLEJOWYCH. Linie nr 336, 284 i 317
 *   zostały w całości zużyte na stronie ŚWIERADOWA-
 *   -ZDROJU. Data 1865 może pojawić się WYŁĄCZNIE jako
 *   punkt na osi czasu — i w tym tekście nie pojawia się
 *   w ogóle.
 * ⚠⚠⚠ ŚWIERADÓW-ZDRÓJ (sąsiad) — wątek zdrojowy
 *   wykluczony całkowicie.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1201 r. ⚠⚠⚠ ALE TO WZMIANKA
 *     O WÓJCIE (Bernard Rym), NIE O SAMEJ OSADZIE.
 *     PISZĘ TO WPROST.
 *   — PRAWA MIEJSKIE: PRZED 1337 r., według części
 *     źródeł 1329 [SP]. Nadał HENRYK I JAWORSKI,
 *     na PRAWIE LWÓWECKIM [ZW] — nie magdeburskim
 *     ani średzkim, co jest rzadkością.
 *   ⚠⚠ DATA JEST PRZEDZIAŁEM, NIE PUNKTEM. PODAJĘ JĄ
 *   TAK, JAK JEST, I ZAZNACZAM TO.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIEŻA RATUSZA KOŃCZONA TRZY RAZY,
 *   ZA KAŻDYM RAZEM DŁUGO PO KORPUSIE:
 *   — 5 maja 1546 — początek budowy ratusza;
 *     1597 — ukończono dach wieży. RÓŻNICA 51 LAT.
 *   — 1642 — ratusz zniszczony; wznowienie prac 1644;
 *     4 lipca 1647 — ukończono odbudowę wieży.
 *     RÓŻNICA 5 LAT.
 *   — 8 września 1767 — ratusz zniszczony; korpus gotowy
 *     7 czerwca 1774; wieża dopiero 25 października
 *     1796. RÓŻNICA 22 LATA PO KORPUSIE.
 *   ⚠⚠⚠ TRZY CYKLE, TRZY RÓŻNE STULECIA, TRZY RÓŻNE
 *   EKIPY — I ZA KAŻDYM RAZEM TO SAMO: wieża kończona
 *   osobno i znacznie później. To jest cały kąt.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1597−1546 = 51;
 *   1647−1642 = 5; 1796−1774 = 22.
 *   ⚠⚠ ZNISZCZENIA Z 1642 I 1767 R. TO POŻARY.
 *   PODAJĘ JE WYŁĄCZNIE JAKO DATY, JEDNYM SŁOWEM,
 *   BEZ OPISU ŻYWIOŁU, SZKÓD I ODBUDOWY MIASTA.
 *   ⚠ Zegar zainstalowano w 1599 r., dwa lata po dachu.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — WYSOKOŚĆ WIEŻY: 48 m (źródło podaje też „83 łokcie").
 *   ⚠⚠⚠ PRZELICZENIA ŁOKCI NA METRY NIE ROBIĘ KĄTEM —
 *   „przeliczanie przepisu i skali" to figura ZAJĘTA
 *   (Kowary). PODAJĘ WYŁĄCZNIE 48 M.
 * — KOSZT PIERWOTNEJ BUDOWY: 1500 marek.
 * — POŻARY NA OSI: 23 lipca 1558, 1642, 20 lipca 1699,
 *   8 września 1767. ⚠⚠ WYMIENIAM CO NAJWYŻEJ ODSTĘPY,
 *   NIGDY ŻYWIOŁ. ⚠ Pierwszy wypadł, zanim ratusz był
 *   skończony.
 * — SPIS Z 1849 r.: 275 domów murowanych w mieście,
 *   75 na przedmieściach, 32 warsztaty tkackie.
 *   ⚠⚠ „ROZBICIE NA KATEGORIE" — kąt ZAJĘTY (Bierutów).
 *   PODAJĘ JAKO FAKT, BEZ MORAŁU.
 *   ⚠⚠⚠ POZOSTAŁYCH POZYCJI TEGO SPISU NIE PODAJĘ —
 *   dotyczą warzenia piwa i gospod. ALKOHOL WYKLUCZONY.
 * — KAMIENICE PRZY RYNKU: na kartuszach wyryty rok 1769,
 *   dwa lata po zniszczeniu z 1767. ⚠⚠ PORÓWNANIA
 *   „prywatne wróciły szybciej niż publiczne" NIE ROBIĘ —
 *   ociera się o kąt tego tekstu i byłoby drugim kątem.
 * — SUKIENNICE na rynku zlikwidowano w 1879 r.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: TRZECI RAZ TO JUŻ WŁAŚCIWOŚĆ
 * — o tym, że to, co powtórzyło się trzy razy, przestaje
 * być pechem i staje się cechą rzeczy. Kąt od wieży
 * mirskiego ratusza: kończono ją trzy razy, w trzech
 * stuleciach, i za każdym razem osobno i później
 * niż resztę budynku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ratusz w Mirsku zaczęto budować 5 maja 1546 r.,
 *   a dach wieży ukończono w 1597 — pięćdziesiąt jeden
 *   lat później,
 * — że po zniszczeniu z 1642 r. wieżę odbudowano
 *   do 4 lipca 1647, a po zniszczeniu z 1767 korpus był
 *   gotów 7 czerwca 1774, ale wieża dopiero
 *   25 października 1796 — dwadzieścia dwa lata
 *   po korpusie,
 * — ŻE TRZY RAZY, W TRZECH STULECIACH, PRZY TRZECH
 *   RÓŻNYCH EKIPACH, WYSZŁO TO SAMO. To już nie pech.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MAMY SWOJE WIEŻE: danie, które
 *   przypala się zawsze w tym samym momencie; szuflada,
 *   która zawsze się zacina; krok, który zawsze
 *   wypada z kolejności,
 * — ⚠⚠ ŻE ZA PIERWSZYM RAZEM TO PRZYPADEK, ZA DRUGIM
 *   ZBIEG OKOLICZNOŚCI, A ZA TRZECIM — WŁAŚCIWOŚĆ
 *   UKŁADU, NIE TWOJA WINA,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I JEST NIEOCZYWISTY: po trzecim
 *   razie NIE PRÓBUJ MOCNIEJ. Zmień układ, nie wysiłek —
 *   bo wysiłek już trzy razy zawiódł,
 * — ⚠⚠ ŻE ZMIANA UKŁADU JEST ZWYKLE MAŁA: inne naczynie,
 *   inna kolejność dokładania, przestawiona szuflada.
 *   Nie trzeba przebudowywać kuchni,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: trzy to nie jest liczba
 *   magiczna i czasem naprawdę są to trzy przypadki.
 *   Ale sprawdzenie kosztuje jedną drobną zmianę,
 *   a niesprawdzenie — powtarzanie tego samego bez końca,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie usuwa część przyczyn
 *   układowych (nierówne grzanie, mieszanie bez
 *   pilnowania) i NIE USUWA żadnej innej — źle
 *   postawionej szuflady, za małej deski, ciasnego blatu.
 *   MÓWIĘ WPROST, że najpierw trzeba nazwać, którego
 *   rodzaju jest przyczyna.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna). ⚠⚠⚠ TO LUSTRZANE ODBICIE TEGO KĄTA
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst mówi,
 *   ŻE JEDEN SUKCES TO JESZCZE NIE METODA; ten mówi,
 *   ŻE TRZY NIEPOWODZENIA TO JUŻ WŁAŚCIWOŚĆ.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski).
 * — ⚠⚠⚠ ZERO PRZELICZANIA SKALI — kąt zajęty (Kowary).
 *   Dlatego łokcie nie wchodzą do tekstu.
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ⚠⚠ ZERO NIE KAŻDE PRZĘSŁO — kąt zajęty (Ścinawa).
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt zajęty
 *   (Bierutów). Dlatego spis z 1849 r. zostaje faktem.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNEGO OBWINIANIA CZYTELNIKA — cały sens tego
 *   tekstu jest odwrotny: po trzecim razie to nie jest
 *   jej wina. TWARDA GRANICA TONU.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU. Zniszczenia z 1642
 *   i 1767 r. podaję jednym słowem, jako daty.
 * — ⚠⚠ ZERO ALKOHOLU (pozycje spisu z 1849 r.).
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WĄTKU UZDROWISKOWEGO (Świeradów obok).
 * — ⚠ ZERO UPADKU PRZEMYSŁU I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE CYTUJĘ gęstości miasta z przecinkiem.
 * — NIE PODAJĘ liczby wsi jako pewnej.
 * — NIE PODAJĘ jednej daty praw miejskich — źródła dają
 *   przedział.
 * — NIE TWIERDZĘ, że wzmianka z 1201 r. dotyczy osady —
 *   dotyczy wójta.
 * — NIE PRZELICZAM łokci na metry.
 * — NIE PORÓWNUJĘ tempa odbudowy kamienic i ratusza.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mirsk leży w powiecie lwóweckim; miasto liczy
 *   3 593 mieszkańców (GUS, 31.12.2024) na 14,7 km²,
 *   czyli około 245 osób na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 8 113 osób na 186,5 km²;
 *   na wsi mieszka więcej ludzi niż w mieście,
 * — z 1201 r. pochodzi wzmianka o tutejszym wójcie
 *   Bernardzie Rymie; prawa miejskie nadał Henryk I
 *   Jaworski, na prawie lwóweckim, przed 1337 r.
 *   (część źródeł podaje 1329),
 * — budowę ratusza rozpoczęto 5 maja 1546 r., a dach
 *   wieży ukończono w 1597; zegar zainstalowano w 1599,
 * — po zniszczeniu z 1642 r. prace wznowiono w 1644,
 *   a odbudowę wieży ukończono 4 lipca 1647,
 * — po zniszczeniu z 1767 r. korpus ratusza był gotów
 *   7 czerwca 1774, a wieża 25 października 1796,
 * — wieża ma 48 m wysokości, a pierwotna budowa
 *   kosztowała 1500 marek,
 * — spis z 1849 r. notuje w mieście 275 domów murowanych,
 *   75 domów na przedmieściach i 32 warsztaty tkackie,
 * — na kartuszach kamienic przy rynku wyryto rok 1769,
 *   a sukiennice zlikwidowano w 1879 r.
 */
export const MIRSK: CityContent = {
  slug: "mirsk",
  h1: "Thermomix Mirsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mirsk — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mirsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mirsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mirsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mirska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Mirsk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy razy, w trzech stuleciach, zawsze to samo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mirsku – jak wygląda prezentacja?",
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
      id: "trzeci-raz-to-wlasciwosc",
      heading: "Trzeci raz to już właściwość",
      paragraphs: [
        "Budowę ratusza w Mirsku rozpoczęto 5 maja 1546 roku. Dach wieży ukończono w 1597. Pięćdziesiąt jeden lat.",
        "Po zniszczeniu z 1642 roku prace wznowiono w 1644, a odbudowę wieży ukończono 4 lipca 1647. Pięć lat.",
        "Po zniszczeniu z 1767 korpus ratusza był gotowy 7 czerwca 1774 roku. Wieża — dopiero 25 października 1796. Dwadzieścia dwa lata po korpusie.",
        "Trzy razy. W trzech różnych stuleciach, przy trzech różnych ekipach, z trzema różnymi budżetami. I za każdym razem to samo: wieża kończona osobno i znacznie później niż reszta budynku.",
        "Po trzecim razie to już nie jest pech. To jest właściwość wież.",
        "W kuchni każdy ma swoje wieże i zwykle wie dokładnie, które to.",
        "Danie, które przypala się zawsze w tym samym momencie. Szuflada, która zawsze się zacina, kiedy ma się mokre ręce. Krok, który zawsze wypada z kolejności, bo leży za daleko. Rzecz, o której za każdym razem mówisz „no tak, znowu”.",
        "Za pierwszym razem to przypadek. Za drugim zbieg okoliczności. Za trzecim — właściwość układu, a nie Twoja wina, i to jest najważniejsze zdanie w tym akapicie.",
        "Ruch jest jeden i jest nieoczywisty, bo idzie wbrew odruchowi. Po trzecim razie nie próbuj mocniej. Zmień układ, nie wysiłek — wysiłek już trzy razy zawiódł i czwarty raz też zawiedzie.",
        "Zmiana układu jest zwykle drobna. Inne naczynie. Inna kolejność dokładania. Szuflada przestawiona o jedną w dół. Nie trzeba przebudowywać kuchni ani niczego kupować.",
        "Dopowiem, bo to leży blisko i jest dokładnym odbiciem: gdzie indziej pisałam, że jeden udany raz to jeszcze nie metoda. Tutaj jest odwrotnie — trzy nieudane razy to już nie przypadek. Obie zasady mówią o tej samej rzeczy z dwóch stron: o tym, ile powtórzeń trzeba, żeby coś uznać za regułę.",
        "Uczciwie o drugiej stronie: trzy nie jest liczbą magiczną i czasem naprawdę są to trzy przypadki. Ale sprawdzenie kosztuje jedną drobną zmianę, a niesprawdzenie kosztuje powtarzanie tego samego przez lata. Ta asymetria jest jedynym powodem, dla którego warto zgadywać w tę stronę.",
        "I uczciwie o sprzęcie. Thermomix usuwa część przyczyn układowych: nierówne grzanie, mieszanie, które wymaga stania przy garnku, pilnowanie, żeby nie przywarło. Nie usuwa żadnej innej — źle postawionej szuflady, za małej deski, ciasnego blatu. Dlatego najpierw warto nazwać, którego rodzaju jest Wasza przyczyna, a dopiero potem wydawać pieniądze.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mirsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest u Was coś, co nie wychodzi już trzeci raz z rzędu. To najlepszy materiał na wspólne gotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mirsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mirska",
      paragraphs: [
        "Mirsk leży w powiecie lwóweckim. Samo miasto liczy 3 593 mieszkańców (GUS, 31.12.2024) na czternastu i siedmiu dziesiątych kilometra kwadratowego, czyli około dwustu czterdziestu pięciu osób na kilometr, a cała gmina miejsko-wiejska 8 113 osób na stu osiemdziesięciu sześciu — czyli około czterdziestu czterech na kilometr. Na wsi mieszka tu więcej ludzi niż w mieście: cztery i pół tysiąca wobec trzech i pół. Liczby miejscowości nie podaję jako pewnej, bo serwis deklaruje dwadzieścia jeden, a wymienia siedemnaście nazw. Z 1201 roku pochodzi wzmianka o tutejszym wójcie, Bernardzie Rymie — warto zaznaczyć, że to wzmianka o wójcie, nie o samej osadzie. Prawa miejskie nadał Henryk I Jaworski, i to na prawie lwóweckim, co jest rzadkością; data podawana jest jako przedział, „przed 1337 rokiem”, choć część źródeł wskazuje 1329. Budowę ratusza rozpoczęto 5 maja 1546 roku, dach wieży ukończono w 1597, a zegar zainstalowano dwa lata później. Po zniszczeniu z 1642 roku prace wznowiono w 1644 i ukończono wieżę 4 lipca 1647. Po zniszczeniu z 1767 korpus był gotowy 7 czerwca 1774, a wieża 25 października 1796. Wieża ma czterdzieści osiem metrów wysokości, a pierwotna budowa kosztowała tysiąc pięćset marek. Spis z 1849 roku notuje w mieście dwieście siedemdziesiąt pięć domów murowanych, siedemdziesiąt pięć domów na przedmieściach i trzydzieści dwa warsztaty tkackie. Na kartuszach kamienic przy rynku wyryto rok 1769, a sukiennice zlikwidowano w 1879.",
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

  districtsHeading: "Do których części Mirska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Giebułtowa, Rębiszowa, Krobicy, Przecznicy, Gierczyna, Orłowic, Kwieciszowic, Mroczkowic, Proszowej i pozostałych. Wszędzie bez dopłaty.",
    "Gmina ma sto osiemdziesiąt sześć kilometrów kwadratowych i mieszka w niej więcej ludzi poza miastem niż w nim, więc przy umawianiu warto podać nazwę miejscowości. Uwaga na Proszową — to wieś w tej gminie, nie Prochowice i nie Proszowice.",
  ],
  districts: [],

  nearbyHeading: "Poza Mirsk też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Świeradowa-Zdroju, Gryfowa Śląskiego, Lwówka Śląskiego, Leśnej i Jeleniej Góry — wszędzie bezpłatnie, tak samo jak w samym Mirsku.",
  ],
  nearbyTowns: ["Świeradów-Zdrój", "Gryfów Śląski", "Lwówek Śląski", "Leśna", "Jelenia Góra"],

  about: blokOMnie("do Mirska", "w Mirsku i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mirska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „Mirskiem”, a nie „Mirskim”. I uwaga na wieś Proszowa w tej gminie — myli się i z Proszowicami w Małopolsce, i z Prochowicami w powiecie legnickim. Warto podać pełną nazwę, a najlepiej dodać „gmina Mirsk”.",
    },
    ...faqWspolne("w Mirsku"),
    {
      question: "To samo danie nie wychodzi mi już trzeci raz. Co robię źle?",
      answer:
        "Prawdopodobnie nic — i to jest najważniejsza część odpowiedzi. Wieżę ratusza w Mirsku kończono trzy razy, w trzech stuleciach, przy trzech różnych ekipach, i za każdym razem osobno i długo po reszcie budynku: pięćdziesiąt jeden lat, pięć lat i dwadzieścia dwa lata po korpusie. Po trzecim razie to już nie pech, tylko właściwość. W kuchni działa to tak samo: po trzeciej porażce nie próbuj mocniej, tylko zmień układ — inne naczynie, inna kolejność, przestawiona szuflada. Zastrzeżenie: trzy nie jest liczbą magiczną, ale sprawdzenie kosztuje jedną drobną zmianę, a niesprawdzenie — lata powtarzania.",
    },
    {
      question: "Czy Thermomix rozwiąże problem z daniem, które ciągle mi nie wychodzi?",
      answer:
        "Zależy, jakiego rodzaju jest przyczyna, i warto to nazwać przed zakupem. Urządzenie usuwa część przyczyn: nierówne grzanie, mieszanie wymagające stania przy garnku, przywieranie. Nie usuwa żadnej innej — źle postawionej szuflady, za małej deski, ciasnego blatu ani tego, że zawsze zabieracie się za to o wpół do ósmej wieczorem. Na prezentacji chętnie ugotuję z Wami właśnie to danie, które nie wychodzi; wtedy od razu widać, w którą kategorię wpada problem.",
    },
  ],

  geo: { lat: 50.9705, lng: 15.3859 },
};
