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
 * JASTROWIE — powiat złotowski, woj. wielkopolskie.
 * ⚠ ZŁOTÓW, siedziba tego powiatu, JEST OPISANY
 *   W TYM CYKLU (fala 1 wielkopolskiego).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ JASTROWIE NIE MA —
 *   w powiecie złotowskim taki dublet dotyczy ZŁOTOWA,
 *   nie Jastrowia. SPRAWDZONE.
 * MIASTO: 8 228 mieszkańców (GUS 31.12.2024), 72,3 km²,
 *   gęstość 113,8 os./km²
 *   ⚠ [ZW — DOMYKA SIĘ DO TRZECIEGO MIEJSCA PO
 *   PRZECINKU: 8 228 ÷ 72,3 = 113,804. Powierzchnia
 *   potwierdzona trzema źródłami: 72,3 / 72,30 / 72,27].
 *   PODAJĘ.
 *   ⚠⚠ URZĄD PODAJE 7 991 OSÓB NA TĘ SAMĄ DATĘ.
 *   NIE UŻYWAM I NIE KOMENTUJĘ.
 * CAŁA GMINA: 10 762 osoby, 353,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (31 w źródle, 30,48 z dzielenia; niezależny
 *   geoportal podaje 30,4).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 7 — Brzeźnica, Brzeźnica-Kolonia, Budy,
 *   Nadarzyce, Samborsko, Sypniewko, Sypniewo.
 *   ⚠ Miejscowości źródła podają 11 albo 12 —
 *   LICZBY NIE PODAJĘ.
 * LESISTOŚĆ: ponad 70 % (źródła: 71,2 % GUS 2019,
 *   „ponad 73 %" urząd). PISZĘ „ponad siedemdziesiąt
 *   procent".
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 53,4217 / 16,8156. Rzeki: GWDA (miasto
 *   na skraju doliny Gwdy) i MŁYNÓWKA.
 * ⚠ MIASTO ZAJMUJE 20,5 % POWIERZCHNI SWOJEJ GMINY
 *   — bardzo wysoki udział. ⚠⚠ PROPORCJI NIE ROBIĘ
 *   KĄTEM.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ NIJAKI, NIE PLURALE TANTUM:
 *   D. do JASTROWIA · Ms. w JASTROWIU ·
 *   N. Jastrowiem.
 *   ⚠⚠⚠ BŁĘDY: „do Jastrowi", „w Jastrowie",
 *   „Jastrowia leżą" (orzeczenie MUSI być w liczbie
 *   pojedynczej: „Jastrowie leży"). Nie mylić z formą
 *   „Jastrów". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: JASTROWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠ CIEKAWOSTKA URZĘDOWA: jednostka nosi nazwę
 *   „Urząd Gminy i Miasta Jastrowie" — odwrotnie niż
 *   w większości polskich gmin miejsko-wiejskich
 *   („Miasta i Gminy"). PODAJĘ TO JAKO FAKT.
 *   ⚠⚠ KOLEJNOŚCI W NAZWIE NIE ROBIĘ KĄTEM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1363 r., w formie „Jastrobe".
 *     ⚠⚠ Strona urzędu podaje natomiast 1560 r. jako
 *     założenie wsi [SP]. PISZĘ OBIE I MÓWIĘ, ŻE
 *     ŹRÓDŁA SIĘ RÓŻNIĄ.
 *   — Forma pisana „Jastrowo": 1530 r.
 *   — PRAWA MIEJSKIE: 1602 r. ⚠⚠⚠ [SP co do dnia
 *     i nadającego: urząd — 5 maja 1602, Piotr
 *     Potulicki, potwierdzenie Zygmunta III; muzeum —
 *     nadał wojewoda kaliski, potwierdzenie 5 marca
 *     1603]. PODAJĘ TYLKO ROK 1602 I POTWIERDZENIE
 *     PRZEZ ZYGMUNTA III, BEZ DATY DZIENNEJ.
 *   — 2002 r. — obchody 400-lecia praw miejskich.
 *     ⚠⚠ ROCZNICY NIE ROBIĘ KĄTEM — figura „od czego
 *     liczymy" zajęta (Wojcieszów).
 *   — 1604 r. — miasto wydało 99 florenów na wytyczanie
 *     granicy. PODAJĘ JAKO GOŁY FAKT.
 *   — Utraty praw nie ustalono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SPIS RZEMIOSŁ Z 1860 R.:
 *   — warsztaty SZEWSKIE: 119,
 *   — SUKIENNICZE: 81,
 *   — KOWALSKIE: 21,
 *   — KRAWIECKIE: 19,
 *   — STOLARSKIE: 16,
 *   — kupców: 28.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 21 + 19 + 16 = 56;
 *   119 ÷ 56 = 2,125. SZEWCÓW BYŁO PONAD DWA RAZY
 *   WIĘCEJ NIŻ KOWALI, KRAWCÓW I STOLARZY RAZEM.
 *   To jest cały kąt.
 *   ⚠⚠ NIE SUMUJĘ CAŁEGO SPISU I NIE LICZĘ UDZIAŁÓW
 *   PROCENTOWYCH — figura „spis, który się nie sumuje"
 *   zajęta (Międzybórz).
 *   ⚠⚠ PRZYCZYN TEJ PROPORCJI NIE ZNAM I NIE ZGADUJĘ.
 *   ⚠⚠⚠ ANI SŁOWA O UPADKU RZEMIOSŁA CZY PRZEMYSŁU —
 *   WĄTEK WYKLUCZONY. PODAJĘ SPIS Z JEDNEGO ROKU.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — drogi krajowe w gminie: DK 11 — 12 km, DK 22 —
 *   26 km.
 *   ⚠⚠ SUMY 38 km NIE ROBIĘ KĄTEM.
 * — ⚠⚠ JARMARKÓW NIE UŻYWAM — źródła sprzeczne
 *   (siedem vs wyliczenie dające dziesięć vs trzy).
 * — ⚠⚠ FABRYK I ELEKTROWNI SPRZED 1939 R. NIE OPISUJĘ
 *   — wątek przemysłowy.
 * — ⚠⚠ KOLEI I MASZYNY PAROWEJ NIE OPISUJĘ.
 * — ⚠ ODLEGŁOŚCI: jedno źródło podaje ok. 30 km do
 *   Piły, bez konwencji. NIE PODAJĘ.
 *
 * KĄT: JEDNA POZYCJA WAŻY WIĘCEJ NIŻ TRZY POZOSTAŁE
 * — o tym, że w kuchni jedna czynność zjada więcej
 * czasu niż wszystkie inne razem. Kąt ze spisu rzemiosł
 * Jastrowia z 1860 r.: stu dziewiętnastu szewców wobec
 * pięćdziesięciu sześciu kowali, krawców i stolarzy
 * łącznie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że spis z 1860 r. wykazał 119 warsztatów szewskich,
 *   81 sukienniczych, 21 kowalskich, 19 krawieckich
 *   i 16 stolarskich,
 * — ŻE SZEWCÓW BYŁO PONAD DWA RAZY WIĘCEJ NIŻ KOWALI,
 *   KRAWCÓW I STOLARZY RAZEM. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE PRZYCZYN NIE ZNAM I NIE ZGADUJĘ,
 * — ⚠⚠ ŻE W KUCHNI KAŻDY DOM MA TAKĄ JEDNĄ POZYCJĘ:
 *   zwykle zmywanie albo wymyślanie, co ugotować,
 * — ⚠⚠ ŻE ROZKŁAD NIE JEST RÓWNY I ŻE WŁAŚNIE DLATEGO
 *   ogólne porządkowanie kuchni nic nie daje,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przez trzy dni notuj czas
 *   przy każdej czynności osobno. Jedna z nich będzie
 *   dwa razy większa od trzech następnych. Zajmij się
 *   tylko nią,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ta pozycja bywa nie do
 *   ruszenia. Jeśli największą jest dowożenie dzieci,
 *   żadna zmiana w kuchni tego nie tknie — i wtedy
 *   trzeba to powiedzieć, a nie kupować sprzęt,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie uderza w jedną
 *   konkretną pozycję — pilnowanie i mieszanie. MÓWIĘ
 *   WPROST, że jeśli to nie jest Wasza największa
 *   pozycja, zysk będzie mniejszy, niż się spodziewacie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o TRZY punkty,
 *   przez które przechodzi wszystko, i o pieniądze;
 *   tu o JEDNĄ pozycję, która waży więcej niż reszta,
 *   i o czas. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ
 *   KATEGORII — kąt zajęty (Międzybórz). DLATEGO
 *   NIE SUMUJĘ SPISU.
 * — ⚠⚠ ZERO OPISANE SĄ TYLKO NAJWIĘKSZE — kąt zajęty
 *   (Wronki).
 * — ⚠⚠ ZERO ILE UTRZYMANIA NA OSOBĘ — kąt zajęty
 *   (Słupca).
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ⚠⚠ ZERO ŚREDNIA OPISUJE CIĄG, KTÓREGO NIE BYŁO —
 *   kąt zajęty (Oborniki). ŻADNYCH ŚREDNICH.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA PODZIAŁU OBOWIĄZKÓW W DOMU.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO UPADKU RZEMIOSŁA I PRZEMYSŁU ·
 *   ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ liczby miejscowości.
 * — NIE PODAJĘ ludności miasta w wersji urzędu.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE SUMUJĘ spisu rzemiosł.
 * — NIE PODAJĘ liczby jarmarków.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Jastrowie leży w powiecie złotowskim, na skraju
 *   doliny Gwdy; przez gminę płynie też Młynówka.
 *   Miasto liczy 8 228 mieszkańców (GUS, 31.12.2024)
 *   na 72,3 km², czyli 113,8 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 10 762
 *   osoby na 353,1 km² i dzieli się na siedem sołectw:
 *   Brzeźnicę, Brzeźnicę-Kolonię, Budy, Nadarzyce,
 *   Samborsko, Sypniewko i Sypniewo,
 * — lasy zajmują ponad 70 % powierzchni gminy, a samo
 *   miasto 20,5 % jej obszaru,
 * — pierwsza wzmianka pochodzi z 1363 r. w formie
 *   „Jastrobe", choć strona urzędu podaje 1560 r. jako
 *   założenie wsi; forma „Jastrowo" zapisana jest
 *   w 1530 r.,
 * — prawa miejskie miasto otrzymało w 1602 r.,
 *   a potwierdził je Zygmunt III Waza; w 1604 r.
 *   Jastrowie wydało 99 florenów na wytyczanie granicy,
 *   a w 2002 r. obchodzono 400-lecie praw miejskich,
 * — spis rzemiosł z 1860 r. wykazał 119 warsztatów
 *   szewskich, 81 sukienniczych, 21 kowalskich,
 *   19 krawieckich i 16 stolarskich oraz 28 kupców,
 * — przez gminę biegnie 12 km drogi krajowej nr 11
 *   i 26 km drogi krajowej nr 22,
 * — jednostka nosi nazwę „Urząd Gminy i Miasta
 *   Jastrowie" — odwrotnie niż w większości polskich
 *   gmin miejsko-wiejskich.
 */
export const JASTROWIE: CityContent = {
  slug: "jastrowie",
  h1: "Thermomix Jastrowie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jastrowie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Jastrowiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jastrowie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jastrowiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jastrowia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedmiu sołectw w gminie.",

  highlights: highlightyStandardowe("Jastrowie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Stu dziewiętnastu szewców. Pięćdziesięciu sześciu pozostałych.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jastrowiu – jak wygląda prezentacja?",
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
      id: "jedna-pozycja",
      heading: "Jedna pozycja waży więcej niż trzy pozostałe",
      paragraphs: [
        "Spis rzemiosł w Jastrowiu z 1860 roku wygląda tak: 119 warsztatów szewskich, 81 sukienniczych, 21 kowalskich, 19 krawieckich, 16 stolarskich. Do tego 28 kupców.",
        "Kowale, krawcy i stolarze razem to pięćdziesiąt sześć warsztatów. Szewców było sto dziewiętnaście — ponad dwa razy więcej niż te trzy rzemiosła łącznie.",
        "Dlaczego tak było, nie wiem i nie będę zgadywać. Interesuje mnie sam kształt tej listy, bo w każdej kuchni wygląda ona identycznie.",
        "Bo rozkład pracy w kuchni nigdy nie jest równy. Jest jedna pozycja, która waży więcej niż trzy następne razem, i prawie zawsze jest to jedna z dwóch rzeczy: zmywanie albo wymyślanie, co ugotować. Nie samo gotowanie. Gotowanie zwykle jest w tej liście trzecie albo czwarte.",
        "I właśnie dlatego ogólne porządkowanie kuchni nic nie daje. Kupuje się organizery do szuflad, przestawia przyprawy, wymienia deski — a sto dziewiętnaście warsztatów szewskich zostaje nietkniętych, bo nikt nie sprawdził, gdzie one są.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o trzech punktach, przez które przechodzi każdy posiłek, i o tym, że tylko tam warto wydawać pieniądze. To było o pieniądzach i o trzech miejscach. Tu jest o czasie i o jednym.",
        "Ruch jest jeden i wymaga trzech dni. Notuj czas przy każdej czynności osobno — krojenie, gotowanie, zmywanie, wymyślanie, chowanie, zakupy. Jedna z nich wyjdzie dwa razy większa od trzech następnych. Zajmij się tylko nią i zostaw resztę w spokoju.",
        "Uczciwie o drugiej stronie: ta największa pozycja bywa nie do ruszenia. Jeśli po zsumowaniu wyjdzie, że najwięcej czasu zjada dowożenie dzieci albo dojazd do pracy, to żadna zmiana w kuchni tego nie tknie. Wtedy trzeba to powiedzieć wprost — a nie kupować sprzęt w nadziei, że rozwiąże coś, co się w kuchni nie dzieje.",
        "I uczciwie o sprzęcie. Thermomix uderza w jedną konkretną pozycję: pilnowanie i mieszanie, czyli ten czas, w którym trzeba stać przy garnku i nie można robić nic innego. Jeśli to jest Wasza pozycja numer jeden, zmiana będzie wyraźna. Jeśli nie — zysk będzie mniejszy, niż się spodziewacie, i wolę powiedzieć to przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jastrowiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która czynność w kuchni męczy Was najbardziej. Jeśli jeszcze nie wiecie — to też jest odpowiedź, i wtedy zaczniemy od jej ustalenia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jastrowiu"),
    sekcjaRaty("w Jastrowiu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Jastrowia",
      paragraphs: [
        "Jastrowie leży w powiecie złotowskim, na skraju doliny Gwdy; przez gminę płynie też Młynówka. Samo miasto liczy 8 228 mieszkańców (GUS, 31.12.2024) na 72,3 kilometra kwadratowego, czyli sto czternaście osób na kilometr — to jedno z najluźniej zabudowanych miast, o jakich pisałam, bo samo miasto zajmuje ponad dwadzieścia procent obszaru swojej gminy. Cała gmina miejsko-wiejska to 10 762 osoby na 353,1 kilometra i siedem sołectw: Brzeźnica, Brzeźnica-Kolonia, Budy, Nadarzyce, Samborsko, Sypniewko i Sypniewo. Gęstości dla gminy nie podaję, bo liczba ze źródła się nie domyka. Lasy zajmują ponad siedemdziesiąt procent powierzchni gminy. Pierwsza wzmianka pochodzi z 1363 roku, w formie „Jastrobe”, choć strona urzędu podaje 1560 jako założenie wsi; forma „Jastrowo” zapisana jest w 1530. Prawa miejskie miasto otrzymało w 1602 roku, a potwierdził je Zygmunt III Waza; w 1604 Jastrowie wydało dziewięćdziesiąt dziewięć florenów na wytyczanie granicy. Przez gminę biegnie dwanaście kilometrów drogi krajowej numer jedenaście i dwadzieścia sześć kilometrów drogi numer dwadzieścia dwa. Ciekawostka: jednostka nazywa się „Urząd Gminy i Miasta Jastrowie” — odwrotnie niż w większości polskich gmin miejsko-wiejskich.",
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

  districtsHeading: "Do których części Jastrowia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedmiu sołectw: Brzeźnicy i Brzeźnicy-Kolonii, Bud, Nadarzyc, Samborska, Sypniewka i Sypniewa. Wszędzie bez dopłaty.",
    "Gmina ma ponad trzysta pięćdziesiąt kilometrów kwadratowych i lasy na ponad siedemdziesięciu procentach tego obszaru, więc przy umawianiu warto podać nazwę miejscowości — zwłaszcza że Sypniewo i Sypniewko to dwie różne wsie.",
  ],
  districts: [],

  nearbyHeading: "Poza Jastrowie też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Złotowa, Okonka, Krajenki, Piły i Wałcza — wszędzie bezpłatnie, tak samo jak w samym Jastrowiu.",
  ],
  nearbyTowns: ["Złotów", "Okonek", "Krajenka", "Piła", "Wałcz"],

  about: blokOMnie("do Jastrowia", "w Jastrowiu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jastrowia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedmiu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: mówi się „do Jastrowia” i „w Jastrowiu”, a nie „do Jastrowi” czy „w Jastrowie”. Nazwa jest rodzaju nijakiego i liczby pojedynczej, więc „Jastrowie leży”, nie „leżą”.",
    },
    ...faqWspolne("w Jastrowiu"),
    {
      question: "Porządkuję kuchnię od miesięcy i nic z tego nie wynika. Dlaczego?",
      answer:
        "Prawdopodobnie porządkujesz wszystko naraz, a rozkład pracy nie jest równy. Spis rzemiosł w Jastrowiu z 1860 roku wykazał 119 warsztatów szewskich i tylko 56 kowalskich, krawieckich i stolarskich razem — jedna pozycja ważyła dwa razy więcej niż trzy pozostałe. W kuchni jest tak samo i tą jedną pozycją prawie zawsze jest zmywanie albo wymyślanie, co ugotować. Notuj czas przez trzy dni osobno przy każdej czynności, a potem zajmij się tylko największą.",
    },
    {
      question: "Czy Thermomix rozwiąże mój największy problem w kuchni?",
      answer:
        "Tylko jeśli tym problemem jest stanie nad garnkiem. Urządzenie uderza w jedną konkretną pozycję — pilnowanie i mieszanie — i robi to skutecznie. Jeśli Waszą największą pozycją jest zmywanie albo wymyślanie posiłków, zysk będzie mniejszy, choć nadal realny. A jeśli najwięcej czasu zjada coś, co dzieje się poza kuchnią, to żaden sprzęt tego nie ruszy i powiem to wprost na spotkaniu.",
    },
  ],

  geo: { lat: 53.4217, lng: 16.8156 },
};
