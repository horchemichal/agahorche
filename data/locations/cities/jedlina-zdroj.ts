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
 * JEDLINA-ZDRÓJ — powiat wałbrzyski, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Brak wsi.
 * MIASTO/GMINA: 4 617 mieszkańców (GUS 31.12.2024),
 *   17,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI 264,6 NIE CYTUJĘ OBOK POWIERZCHNI
 *   17,5 km²: 4 617 / 17,5 = 263,8. Podana wartość
 *   wymaga 17,45 km². PISZĘ „OKOŁO DWUSTU SZEŚĆDZIESIĘCIU
 *   CZTERECH" — czytelnik z kalkulatorem inaczej to
 *   wyłapie.
 * ⚠ GEO: 50,7197 / 16,3455.
 *
 * ⚠⚠ ODMIANA — OBA CZŁONY, ŁĄCZNIK OBOWIĄZKOWY:
 *   D. do Jedliny-Zdroju · Ms. w Jedlinie-Zdroju ·
 *   B. Jedlinę-Zdrój · N. Jedliną-Zdrojem.
 *   ⚠⚠⚠ BŁĘDY: „w Jedlina-Zdrój" (nieodmieniony pierwszy
 *   człon), „Jedlina Zdrój" (bez łącznika — dominuje
 *   w serwisach noclegowych). SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM.
 *   Przymiotnik: JEDLIŃSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — zgodnie z zasadą
 *   całego cyklu.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — JEDLINA — wieś w woj. śląskim.
 *   — ⚠⚠ JEDLINKA — DZIELNICA SAMEJ JEDLINY-ZDROJU,
 *     osobna nazwa, NIE zdrobnienie nazwy miasta.
 *     KOLIZJA WEWNĘTRZNA.
 *   — JEDLNIA i JEDLNIA-LETNISKO (mazowieckie),
 *     JEDLICZE (podkarpackie).
 *   — „jedlina" = las jodłowy, rzeczownik pospolity.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠⚠⚠ JEDLINA BYWA OPISYWANA ŁĄCZNIE ZE SZCZAWNEM-
 *   -ZDROJEM (wspólny operator). SZCZAWNO MA JUŻ STRONĘ.
 *   KAŻDĄ LICZBĘ PRZYPISUJĘ DO KONKRETNEGO MIASTA.
 *
 * ⚠⚠⚠⚠ CAŁY WĄTEK UZDROWISKOWY WYKLUCZONY — tak jak
 *   w Dusznikach-Zdroju, Kudowie-Zdroju, Polanicy-Zdroju,
 *   Lądku-Zdroju i Szczawnie-Zdroju. Człon „-Zdrój"
 *   w nazwie własnej ZOSTAJE.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1768 r. [SP — dwa źródła zgodne
 *     co do roku, NADAWCA NIEUSTALONY]. ⚠ Oficjalny
 *     portal miasta roku w ogóle nie podaje.
 *   — ⚠⚠⚠ PIERWSZEJ WZMIANKI NIE PODAJĘ: trzy sprzeczne
 *     wersje (XIII w. / przełom XIII i XIV w. / koniec
 *     XVII w.). PISZĘ WPROST, ŻE ŹRÓDŁA SIĘ RÓŻNIĄ
 *     I NIE WYBIERAM.
 *   — 1970 — granice miasta powiększono o Jedlinkę,
 *     Suliszów, Glinicę i Kamieńsk [ZW].
 *   ⚠⚠ „MIASTO MŁODSZE OD SWOICH DZIELNIC" JAKO KĄT —
 *   NIE UŻYWAM: ociera się o „przyłączone nie znaczy
 *   wrośnięte" (Piechowice) i „jedna nazwa obejmująca
 *   kilka miejsc" (Szczytna). PODAJĘ JAKO FAKT.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWA TUNELE POD MAŁYM WOŁOWCEM:
 *   — dwa RÓWNOLEGŁE tunele kolejowe: 1601 m i 1560 m
 *     (różnica 41 m),
 *   — oba wydrążone w 1876 r., ale drugi oddano
 *     do użytku dopiero w 1912 r. — 36 lat później,
 *   — przekrój eliptyczny, szyby wentylacyjne,
 *   — ⚠⚠⚠ TRZY KORYTARZE ŁĄCZĄCE między nimi,
 *   — od początku lat 90. XX w. krótszy jest nieczynny.
 *   ⚠⚠⚠ TO TRZY KORYTARZE SĄ KĄTEM, NIE DŁUGOŚCI.
 *   Bez nich byłyby to dwa osobne tunele, które akurat
 *   biegną obok siebie. To przejścia czynią z nich
 *   jeden obiekt.
 *   ⚠⚠ NIE TWIERDZĘ, po co dokładnie zbudowano korytarze
 *   — źródło tego nie podaje. Twierdzę WYŁĄCZNIE, że są
 *   i że jest ich trzy.
 *   ⚠⚠ RÓŻNICY 41 M I ODSTĘPU 36 LAT NIE ROBIĘ KĄTEM —
 *   pierwsze ociera się o „nie musi wyglądać jednolicie"
 *   (Głuszyca), drugie o „dołożone po latach używania"
 *   (Syców). PODAJĘ JAKO FAKTY.
 *   ⚠ „Najdłuższy tunel kolejowy w Polsce" — TEGO
 *   SUPERLATYWU NIE POWTARZAM, nieweryfikowany.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — SPIS Z 1748 r.: 26 kmieci i 66 zagrodników — 92
 *   gospodarstwa w dwóch klasach [SP — jedno źródło].
 *   ⚠⚠ „LICZONO PRZEZ KATEGORIĘ POSIADANIA, NIE PRZEZ
 *   GŁOWY" — kąt ZAJĘTY (Bierutów). PODAJĘ LICZBY
 *   JAKO FAKT, BEZ MORAŁU.
 * — DREWNIANA REMIZA STRAŻACKA: 1910 r.
 * — ⚠⚠ KOŚCIOŁA NA PLANIE ROTUNDY (1934) NIE OPISUJĘ —
 *   wyznaniowe.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. ANI JEDNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: RÓWNOLEGŁE POTRZEBUJE PRZEJŚĆ
 * — o tym, że dwie rzeczy robione naraz oszczędzają czas
 * tylko tam, gdzie się stykają. Kąt od tuneli pod Małym
 * Wołowcem: dwa równoległe przebicia i trzy korytarze
 * łączące, bez których byłyby to dwa osobne tunele obok
 * siebie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pod Małym Wołowcem biegną dwa równoległe tunele,
 *   1601 i 1560 m, oba wydrążone w 1876 r., drugi oddany
 *   w 1912, z szybami wentylacyjnymi i TRZEMA korytarzami
 *   łączącymi,
 * — ŻE TO TE TRZY PRZEJŚCIA CZYNIĄ Z NICH JEDEN OBIEKT.
 *   Bez nich byłyby to dwa osobne tunele, które akurat
 *   biegną obok. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI „ROBIĘ DWIE RZECZY NARAZ" ZWYKLE
 *   ZNACZY „STOJĘ DWA RAZY DŁUŻEJ" — bo te dwie rzeczy
 *   nigdzie się nie stykają,
 * — ⚠⚠ ŻE PRZEJŚCIA SĄ ZWYKLE TRZY I ZAWSZE TE SAME:
 *   wspólna baza (to samo pokrojone), wspólne ciepło
 *   (piekarnik już nagrzany) i wspólne czekanie (jedno
 *   danie przez kwadrans nie potrzebuje nikogo),
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO PRZED: zanim
 *   zaczniesz dwie rzeczy naraz, nazwij choć jedno
 *   przejście między nimi. Jeśli żadnego nie ma —
 *   rób po kolei,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: równolegle bez przejść
 *   jest GORSZE niż po kolei. Więcej naczyń, podzielona
 *   uwaga i dwie rzeczy do pilnowania zamiast jednej,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Varoma jest właśnie takim
 *   przejściem — ta sama para gotuje na dole i na górze.
 *   MÓWIĘ WPROST, że poza tym urządzenie ma jedno
 *   naczynie, więc dwa dania to dwa przebiegi, i że
 *   prawdziwą oszczędnością jest wspólne przygotowanie,
 *   a nie jednoczesność.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KOLEJNOŚCI OPERACJI — kąt zajęty (Milicz).
 *   ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tamten tekst mówi, W JAKIEJ KOLEJNOŚCI robić;
 *   ten mówi, KIEDY W OGÓLE OPŁACA SIĘ ROBIĆ DWIE RZECZY
 *   NARAZ. JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów). Dwa równoległe tunele ocierają się o to
 *   wprost. MORAŁ NIE MOŻE DOTYCZYĆ REZERWY.
 * — ⚠⚠⚠ ZERO NIE KAŻDE PRZĘSŁO MA TĘ SAMĄ ROZPIĘTOŚĆ —
 *   kąt zajęty (Ścinawa).
 * — ⚠⚠ ZERO NIE MUSI WYGLĄDAĆ JEDNOLICIE — kąt zajęty
 *   (Głuszyca).
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt zajęty
 *   (Bierutów). Dlatego spis z 1748 r. zostaje faktem.
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNYCH LICZB MINUTOWYCH PRZY CZYNNOŚCIACH
 *   KUCHENNYCH — „kwadrans" przy czekaniu to jedyne
 *   dopuszczone przybliżenie i nie dotyczy żadnej potrawy.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WYPADKÓW I ZAGROŻEŃ W TUNELACH.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I DEMOGRAFII
 *   WSPÓŁCZESNEJ — o wyłączeniu krótszego tunelu piszę
 *   WYŁĄCZNIE jako o dacie.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE CYTUJĘ gęstości 264,6 obok powierzchni 17,5 km².
 * — NIE PODAJĘ daty pierwszej wzmianki — trzy sprzeczne
 *   wersje.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE TWIERDZĘ, po co zbudowano korytarze łączące.
 * — NIE POWTARZAM superlatywu o najdłuższym tunelu.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Jedlina-Zdrój jest gminą miejską w powiecie
 *   wałbrzyskim; liczy 4 617 mieszkańców (GUS,
 *   31.12.2024) na 17,5 km², czyli około 264 osoby
 *   na kilometr kwadratowy,
 * — prawa miejskie miasto otrzymało w 1768 r.; źródła
 *   różnią się co do pierwszej wzmianki i podają trzy
 *   różne wersje,
 * — w 1970 r. granice miasta powiększono o Jedlinkę,
 *   Suliszów, Glinicę i Kamieńsk,
 * — pod Małym Wołowcem biegną dwa równoległe tunele
 *   kolejowe o długości 1601 i 1560 m; oba wydrążono
 *   w 1876 r., drugi oddano do użytku w 1912; mają
 *   przekrój eliptyczny, szyby wentylacyjne i trzy
 *   korytarze łączące, a od początku lat 90. XX w.
 *   krótszy jest nieczynny,
 * — spis z 1748 r. notuje tu 26 kmieci i 66 zagrodników,
 *   razem 92 gospodarstwa,
 * — drewniana remiza strażacka pochodzi z 1910 r.
 */
export const JEDLINA_ZDROJ: CityContent = {
  slug: "jedlina-zdroj",
  h1: "Thermomix Jedlina-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jedlina-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Jedlinie-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jedlina-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jedlinie-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jedliny-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, łącznie z Jedlinką, Suliszowem, Glinicą i Kamieńskiem.",

  highlights: highlightyStandardowe("Jedlina-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwa tunele obok siebie. Jednym obiektem czynią je trzy przejścia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jedlinie-Zdroju – jak wygląda prezentacja?",
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
      id: "rownolegle-potrzebuje-przejsc",
      heading: "Równoległe potrzebuje przejść",
      paragraphs: [
        "Pod Małym Wołowcem biegną dwa równoległe tunele kolejowe. Jeden ma tysiąc sześćset jeden metrów, drugi tysiąc pięćset sześćdziesiąt. Oba wydrążono w 1876 roku, ale drugi oddano do użytku dopiero w 1912.",
        "Mają przekrój eliptyczny, szyby wentylacyjne i — to jest najciekawsze — trzy korytarze łączące.",
        "Bez tych trzech przejść byłyby to dwa osobne tunele, które akurat biegną obok siebie. To korytarze czynią z nich jeden obiekt.",
        "W kuchni „robię dwie rzeczy naraz” bardzo często znaczy po prostu „stoję dwa razy dłużej”.",
        "Bo te dwie rzeczy nigdzie się nie stykają. Każda ma własne naczynie, własny moment, własne pilnowanie. Biegną obok siebie i nic z tego nie wynika.",
        "Przejścia między równoległymi daniami są zwykle trzy i prawie zawsze te same. Wspólna baza: ta sama pokrojona cebula, ta sama podsmażona włoszczyzna, to samo starte jabłko. Wspólne ciepło: piekarnik jest już nagrzany, więc druga rzecz wchodzi za darmo. Wspólne czekanie: jedno danie przez kwadrans nie potrzebuje nikogo, i to jest okno na drugie.",
        "Ruch jest jeden i robi się go przed. Zanim zaczniesz dwie rzeczy naraz, nazwij choć jedno przejście między nimi. Jeśli żadnego nie ma — rób po kolei.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, w jakiej kolejności robić kroki jednego dania. To osobna sprawa. Tu chodzi o coś wcześniejszego — o to, czy w ogóle warto zaczynać dwa dania naraz.",
        "Uczciwie o drugiej stronie, bo to ważniejsze niż sama zasada: równolegle bez przejść jest gorsze niż po kolei. Więcej naczyń, podzielona uwaga, dwie rzeczy do pilnowania zamiast jednej i zwykle jedna z nich przypalona. Jednoczesność sama w sobie nie jest oszczędnością.",
        "I uczciwie o sprzęcie. Varoma jest właśnie takim przejściem — ta sama para gotuje na dole i na górze, więc dwie rzeczy dzielą jedno źródło ciepła. Poza tym urządzenie ma jedno naczynie, więc dwa dania to po prostu dwa przebiegi. Prawdziwą oszczędnością jest tu wspólne przygotowanie, a nie to, że coś dzieje się jednocześnie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jedlinie-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy u Was obiad to zwykle jedno danie, czy dwa robione równolegle. Dobiorę wtedy dania tak, żeby dało się na nich pokazać wspólne przygotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jedlinie-Zdroju"),
    sekcjaRaty("w Jedlinie-Zdroju"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Jedliny-Zdroju",
      paragraphs: [
        "Jedlina-Zdrój jest gminą miejską w powiecie wałbrzyskim — miasto jest tu całą gminą, bez wsi. Liczy 4 617 mieszkańców (GUS, 31.12.2024) na siedemnastu i pół kilometra kwadratowego, czyli około dwustu sześćdziesięciu czterech osób na kilometr; podaję tę wartość zaokrągloną, bo publikowana liczba z przecinkiem nie zgadza się z zaokrągloną powierzchnią i nie chcę udawać precyzji, której tu nie ma. Prawa miejskie miasto otrzymało w 1768 roku. Daty pierwszej wzmianki nie podaję — źródła dają trzy różne wersje i żadna nie ma przewagi nad pozostałymi. W 1970 roku granice miasta powiększono o Jedlinkę, Suliszów, Glinicę i Kamieńsk, więc większość dzisiejszej powierzchni to teren, który w chwili nadania praw miejskich do miasta nie należał. Pod Małym Wołowcem biegną dwa równoległe tunele kolejowe o długości tysiąca sześciuset jeden i tysiąca pięciuset sześćdziesięciu metrów; oba wydrążono w 1876 roku, drugi oddano do użytku w 1912. Mają przekrój eliptyczny, szyby wentylacyjne i trzy korytarze łączące, a od początku lat dziewięćdziesiątych krótszy z nich jest nieczynny. Spis z 1748 roku notuje tu dwudziestu sześciu kmieci i sześćdziesięciu sześciu zagrodników — razem dziewięćdziesiąt dwa gospodarstwa. Drewniana remiza strażacka pochodzi z 1910 roku.",
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

  districtsHeading: "Do których części Jedliny-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, łącznie z Jedlinką, Suliszowem, Glinicą i Kamieńskiem — od 1970 roku są to części miasta, a nie osobne wsie. Wszędzie bez dopłaty.",
    "Przy umawianiu warto powiedzieć, o którą część chodzi. Jedlinka to nazwa dzielnicy, a nie skrót od nazwy miasta — przez telefon łatwo to pomylić.",
  ],
  districts: [],

  nearbyHeading: "Poza Jedlinę-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wałbrzycha, Świdnicy, Głuszycy, Szczawna-Zdroju i Boguszowa-Gorc — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Wałbrzych", "Świdnica", "Głuszyca", "Szczawno-Zdrój", "Boguszów-Gorce"],

  about: blokOMnie("do Jedliny-Zdroju", "w Jedlinie-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jedliny-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie z Jedlinką, Suliszowem, Glinicą i Kamieńskiem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: pisze się z łącznikiem i odmienia oba człony — „do Jedliny-Zdroju”, „w Jedlinie-Zdroju”, a nie „w Jedlina-Zdrój”. I uwaga na zbieżność: Jedlinka to dzielnica tego miasta, a nie zdrobnienie jego nazwy; Jedlina bez drugiego członu to wieś w województwie śląskim.",
    },
    ...faqWspolne("w Jedlinie-Zdroju"),
    {
      question: "Gotuję dwie rzeczy naraz i wcale nie wychodzi szybciej. Dlaczego?",
      answer:
        "Bo prawdopodobnie te dwie rzeczy nigdzie się nie stykają. Pod Małym Wołowcem biegną dwa równoległe tunele i to nie równoległość czyni z nich jeden obiekt, tylko trzy korytarze łączące. W kuchni przejścia są zwykle trzy: wspólna baza (ta sama pokrojona cebula), wspólne ciepło (piekarnik już nagrzany) i wspólne czekanie (jedno danie przez kwadrans nie potrzebuje nikogo). Zanim zaczniesz dwie rzeczy naraz, nazwij choć jedno takie przejście. Jeśli żadnego nie ma, rób po kolei — będzie szybciej i mniej się przypali.",
    },
    {
      question: "Czy Thermomix pozwala gotować dwie rzeczy jednocześnie?",
      answer:
        "Częściowo i warto wiedzieć, gdzie leży granica. Varoma pozwala, żeby ta sama para gotowała na dole i na górze — to jest realne przejście między dwoma daniami. Poza tym urządzenie ma jedno naczynie, więc dwa dania oznaczają dwa przebiegi. Prawdziwa oszczędność bierze się tu ze wspólnego przygotowania, a nie z jednoczesności. Na prezentacji pokazuję to na zwykłym obiedzie, żeby było widać, co się faktycznie nakłada, a co nie.",
    },
  ],

  geo: { lat: 50.7197, lng: 16.3455 },
};
