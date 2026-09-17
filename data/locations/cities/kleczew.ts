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
 * KLECZEW — powiat koniński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ KLECZEW NIE MA
 *   (GUS Vademecum).
 * MIASTO: 3 858 mieszkańców (GUS 31.12.2024), 7,8 km²,
 *   gęstość 494,6 os./km².
 *   ⚠ [ZW — 3 858 / 7,8 = 494,6. ZGODNOŚĆ CO DO
 *   SETNEJ (0,02). PODAJĘ OBIE LICZBY OBOK SIEBIE.]
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 9 569 osób, 110,3 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 88,
 *   iloraz daje 86,8. ROZBIEŻNOŚĆ 1,25. Inne źródło
 *   podaje 9 531 osób i 86,4, co się domyka, ale to
 *   inna ludność. NIE PODAJĘ ŻADNEJ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * UŻYTKI ROLNE: 7 200 ha (powiat). PODAJĘ.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CZTERY REJESTRY, CZTERY LICZBY:
 *   NA PYTANIE, ILE MIEJSCOWOŚCI MA GMINA KLECZEW:
 *     GUS Vademecum ............ 38
 *     polskawliczbach .......... 43
 *     powiat koniński .......... 47
 *     ewidencja gruntów ........ 48
 *   ROZSTĘP: 10 POZYCJI.
 *   TA SAMA ROZBIEŻNOŚĆ W SOŁECTWACH:
 *     GUS ...................... 19
 *     powiat ................... 20
 *   ⚠ Ewidencja gruntów podaje przy tym 25 OBRĘBÓW.
 *   ⚠⚠⚠ ŻADNEJ Z TYCH LICZB NIE PODAJĘ JAKO
 *   „PRAWDZIWEJ". PODAJĘ WSZYSTKIE CZTERY JAKO CZTERY
 *   ODCZYTY I MÓWIĘ, ŻE NIE ROZSTRZYGAM.
 *   ⚠⚠⚠ NIE SUGERUJĘ, ŻE KTOŚ SIĘ POMYLIŁ ANI ŻE
 *   KTÓREŚ ŹRÓDŁO JEST NIERZETELNE. Rejestry liczą
 *   różne rzeczy — jeden miejscowości urzędowe, inny
 *   obręby, inny osady — I WŁAŚNIE TO JEST TREŚCIĄ
 *   KĄTA.
 *   FAKT WSPIERAJĄCY: ten sam zabytkowy WIATRAK KOŹLAK
 *   z 1858 r. jest w jednym rejestrze lokowany
 *   w BUDZISŁAWIU GÓRNYM, a w drugim w BUDZISŁAWIU
 *   KOŚCIELNYM — to dwie różne wsie tej gminy.
 *   ⚠⚠ PODAJĘ TĘ ROZBIEŻNOŚĆ, ALE NIE ROZSTRZYGAM,
 *   GDZIE WIATRAK STOI.
 *   ⚠ „Budzisław Kościelny" to nazwa własna wsi —
 *   NIE JEST TO WĄTEK WYZNANIOWY.
 * ⚠ GEO: 52,3705 / 18,1772.
 *   ⚠ POTWIERDZONE DWOMA ŹRÓDŁAMI (rozbieżność
 *   poniżej 100 m) — jedyne takie w tej fali.
 *
 * ⚠⚠ ODMIANA — TYP NA -EW:
 *   D. do KLECZEWA · Ms. w KLECZEWIE ·
 *   N. Kleczewem · C. Kleczewowi.
 *   ⚠ POTWIERDZENIE: „informacje o Kleczewie",
 *   nazwa urzędowa „Miasto i Gmina Kleczew".
 *   ⚠⚠⚠ BŁĄD 1: zmiękczenie — „do Kleczewia",
 *   „w Kleczewiu". BŁĄD 2: „do Kleczowa".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — „kleczewski"
 *   bez cytatu urzędowego [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — Innych miejscowości o nazwie Kleczew
 *     NIE WYKRYTO, ale weryfikacji nie mam [NP].
 *     NIE TWIERDZĘ, ŻE JEST JEDYNA.
 *   — W gminie są BUDZISŁAW GÓRNY i BUDZISŁAW
 *     KOŚCIELNY — dwie różne wsie o wspólnym
 *     pierwszym członie. WSPOMINAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — LOKACJA NA PRAWIE MAGDEBURSKIM: 12 STYCZNIA
 *     1366 R. Rok potwierdzony drugim źródłem.
 *     PODAJĘ Z DNIEM.
 *   — UTRATA 1870, ODZYSKANIE 1919 — 49 LAT.
 *     PODAJĘ. ⚠⚠ NIE ROBIĘ Z TEGO KĄTU — figury
 *     „przerwa nie kasuje początku" (Trzcianka)
 *     i „nadane dwa razy" (Wyrzysk) ZAJĘTE.
 *   — DATOWANE OBIEKTY: budynek sądu grodzkiego
 *     1928 r.; wiatrak koźlak 1858 r.
 *     ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM —
 *     dotyczy to również kościoła z połowy XIV w.
 *     i kościoła w Złotkowie z 1880 r.
 *   — LUDNOŚĆ HISTORYCZNA: spis 1921 — 2 744;
 *     2006 — 4 173. PODAJĘ.
 *   ⚠⚠⚠ LICZBY OBIEKTÓW W REJESTRZE ZABYTKÓW NIE MAM
 *     [NP] — źródło publikuje ją wyłącznie jako
 *     grafikę. ⚠ TO SAMO W SOBIE JEST FAKTEM
 *     WSPIERAJĄCYM KĄT i mogę o tym napisać.
 *
 * KĄT: CZTERY REJESTRY, CZTERY LICZBY
 * — o tym, że rozbieżność w liczbie zwykle nie jest
 * błędem, a różnicą w tym, co się liczy. Kąt
 * z Kleczewa: cztery rejestry podają 38, 43, 47 i 48
 * miejscowości tej samej gminy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cztery rejestry podają dla gminy Kleczew 38, 43,
 *   47 i 48 miejscowości, a przy sołectwach 19 i 20.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ że nie rozstrzygam i nikogo nie oskarżam
 *   o błąd: rejestry liczą różne rzeczy,
 * — że ten sam wiatrak z 1858 r. jest w dwóch
 *   rejestrach przypisany do dwóch różnych wsi,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „ile razy
 *   w tygodniu gotujesz" ma tyle odpowiedzi, ile
 *   definicji gotowania,
 * — ⚠⚠ ŻE SPÓR W DOMU O TO, KTO ILE ROBI, JEST PRAWIE
 *   ZAWSZE SPOREM O TO, CO SIĘ LICZY — a nie o to,
 *   kto kłamie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przed policzeniem ustalcie
 *   na głos, co wchodzi do liczby,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie każda rozbieżność
 *   jest niewinna. Jeśli po ustaleniu definicji liczby
 *   nadal się nie zgadzają, to jest różnica w faktach
 *   i wtedy trzeba o niej porozmawiać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zmienia liczbę
 *   tylko przy jednej definicji — tej, w której liczy
 *   się stanie przy garnku. Przy innych nie zmienia
 *   nic.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ BARDZO
 *   WYRAŹNIE: tam były DWIE liczby i spór o to, którą
 *   uznać; TU są CZTERY odczyty tej samej rzeczy i nie
 *   ma między nimi sporu — nikt się z nikim nie
 *   licytuje, po prostu każdy rejestr liczy inaczej.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO,
 *   I MUSI BYĆ MOCNE.
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ, KTÓRA NIE JEST SPISEM
 *   — kąt zajęty (Mosina).
 * — ⚠⚠⚠ ZERO OPISANYCH TYLKO NAJWIĘKSZYCH — kąt
 *   zajęty (Wronki).
 * — ⚠⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt
 *   zajęty (Złotów).
 * — ⚠⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR
 *   — kąt zajęty (Śmigiel). Tu wszystkie cztery liczby
 *   są z rejestrów, żadna z opowieści.
 * — ⚠⚠ ZERO ŚREDNIEJ, KTÓRA OPISUJE CIĄG, KTÓREGO
 *   NIE BYŁO — kąt zajęty (Oborniki). ŻADNEJ ŚREDNIEJ
 *   Z CZTERECH LICZB NIE LICZĘ.
 * — ⚠⚠ ZERO DOKUMENTU, KTÓRY ZOSTAŁ, A RZECZY NIE —
 *   kąt zajęty (Golina, TA SAMA FALA).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO ROZSTRZYGANIA DOMOWYCH SPORÓW
 *   O PODZIAŁ OBOWIĄZKÓW NA CZYJĄŚ KORZYŚĆ.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO · ZERO WĄTKU WYZNANIOWEGO I OBIEKTÓW
 *   SAKRALNYCH · ZERO WĄTKU MILITARNEGO · ZERO
 *   GÓRNICTWA, ODKRYWEK I ZWAŁOWISK · ZERO ALKOHOLU ·
 *   ZERO POŻARÓW · ZERO BEZROBOCIA · ZERO HERBU ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości gminy.
 * — NIE ROZSTRZYGAM, ile gmina ma miejscowości.
 * — NIE TWIERDZĘ, że któryś rejestr się myli.
 * — NIE LICZĘ średniej z czterech liczb.
 * — NIE ROZSTRZYGAM, w której wsi stoi wiatrak.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE WYMIENIAM obiektów sakralnych.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE TWIERDZĘ, że nazwa Kleczew jest w Polsce
 *   jedyna.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kleczew leży w powiecie konińskim, liczy 3 858
 *   mieszkańców (GUS, 31.12.2024) na 7,8 km², czyli
 *   494,6 osoby na kilometr kwadratowy; cała gmina
 *   miejsko-wiejska to 9 569 osób na 110,3 km²,
 *   a użytki rolne zajmują w niej 7 200 ha,
 * — cztery rejestry podają dla gminy różną liczbę
 *   miejscowości: GUS 38, polskawliczbach 43, powiat
 *   koniński 47, ewidencja gruntów 48; ewidencja
 *   podaje przy tym 25 obrębów, a sołectw jest według
 *   GUS 19, a według powiatu 20,
 * — ten sam wiatrak koźlak z 1858 r. jest w jednym
 *   rejestrze przypisany do Budzisławia Górnego,
 *   a w drugim do Budzisławia Kościelnego,
 * — lokacja na prawie magdeburskim nosi datę
 *   12 stycznia 1366 r.,
 * — miasto utraciło prawa miejskie w 1870 r.,
 *   a odzyskało je w 1919 — po 49 latach,
 * — budynek sądu grodzkiego pochodzi z 1928 r.,
 * — w spisie z 1921 r. Kleczew liczył 2 744 osoby,
 *   a w 2006 — 4 173.
 */
export const KLECZEW: CityContent = {
  slug: "kleczew",
  h1: "Thermomix Kleczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kleczew — cena i prezentacja",
  seoDescription:
    "Thermomix w Kleczewie w powiecie konińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kleczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kleczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kleczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Kleczew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzydzieści osiem, czterdzieści trzy, czterdzieści siedem, czterdzieści osiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kleczewie – jak wygląda prezentacja?",
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
      id: "cztery-rejestry",
      heading: "Cztery rejestry, cztery liczby",
      paragraphs: [
        "Ile miejscowości ma gmina Kleczew? GUS podaje trzydzieści osiem. Serwis statystyczny — czterdzieści trzy. Powiat koniński — czterdzieści siedem. Ewidencja gruntów — czterdzieści osiem, przy dwudziestu pięciu obrębach. Rozstęp: dziesięć pozycji.",
        "Przy sołectwach to samo, tylko w mniejszej skali: GUS mówi o dziewiętnastu, powiat o dwudziestu.",
        "Dorzucę jeszcze jeden szczegół, bo jest rozczulający. Ten sam zabytkowy wiatrak koźlak z 1858 roku w jednym rejestrze stoi w Budzisławiu Górnym, a w drugim w Budzisławiu Kościelnym. To dwie różne wsie tej gminy.",
        "I teraz rzecz najważniejsza: nikt tu nikogo nie oszukuje i żaden z tych rejestrów nie jest nierzetelny. Jeden liczy miejscowości urzędowe, drugi obręby ewidencyjne, trzeci osady, czwarty coś jeszcze innego. Cztery liczby, jedna gmina, cztery różne definicje tego, co jest „miejscowością”. Nie rozstrzygam, która jest prawdziwa, bo pytanie jest źle zadane.",
        "Piszę o tym, bo to jest najczęstszy domowy spór, jaki znam — i prawie nikt nie zauważa, o co tak naprawdę idzie.",
        "„Ile razy w tygodniu gotujesz?” Ta liczba ma tyle odpowiedzi, ile definicji. Czy odgrzana zupa z wczoraj to gotowanie? A kanapki dla trzech osób do szkoły? A zrobienie makaronu z sosem ze słoika? A zaplanowanie zakupów i wyjęcie mięsa z zamrażalnika dzień wcześniej — czyli praca, bez której nic by się nie ugotowało?",
        "Dwie osoby w jednym domu podają dwie różne liczby i obie są szczere. Bo jedna liczy to, co stało przy garnku, a druga to, co zostało zaplanowane, kupione, wyjęte i posprzątane.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch liczbach i o sporze, którą z nich uznać za właściwą. Tu jest inaczej i to jest istotna różnica — tu nie ma żadnego sporu. Cztery rejestry nie licytują się ze sobą, każdy po prostu liczy co innego i każdy ma rację w swoich granicach.",
        "Ruch jest jeden i trwa dwie minuty. Przed policzeniem czegokolwiek ustalcie na głos, co wchodzi do liczby. Nie po to, żeby wygrać, tylko po to, żeby dwie liczby dały się w ogóle porównać.",
        "Uczciwie o drugiej stronie, bo nie każda rozbieżność jest niewinna. Jeśli po ustaleniu definicji liczby nadal się nie zgadzają, to nie jest już różnica w liczeniu, tylko różnica w faktach — i wtedy trzeba o niej porozmawiać, a nie zamiatać jej definicją. Taka rozmowa bywa nieprzyjemna, ale bez niej podział pracy w domu się nie zmieni.",
        "I uczciwie o sprzęcie. Thermomix zmienia tę liczbę tylko przy jednej definicji — tej, w której liczy się stanie przy garnku i pilnowanie, bo temperaturę i mieszanie prowadzi sam. Przy definicji „zaplanować, kupić, wyjąć, posprzątać” nie zmienia prawie nic. Warto wiedzieć, która definicja boli u Was bardziej, bo tylko jedną z nich urządzenie rusza.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kleczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was liczy się jako „ugotowany obiad”. Pytam serio — u każdego wychodzi z tego inna liczba.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kleczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kleczewa",
      paragraphs: [
        "Kleczew leży w powiecie konińskim i liczy 3 858 mieszkańców (GUS, 31.12.2024) na 7,8 kilometra kwadratowego, czyli czterystu dziewięćdziesięciu pięciu na kilometr — obie liczby podaję bez zastrzeżeń, bo zgadzają się z ilorazem co do setnej części. Cała gmina miejsko-wiejska to 9 569 osób na 110,3 kilometra kwadratowego, a użytki rolne zajmują w niej siedem tysięcy dwieście hektarów; gęstości dla gminy nie podaję, bo źródła rozchodzą się z ilorazem. Lokacja na prawie magdeburskim nosi dokładną datę: 12 stycznia 1366 roku. Prawa miejskie miasto utraciło w 1870, a odzyskało w 1919 — po czterdziestu dziewięciu latach. Budynek sądu grodzkiego pochodzi z 1928 roku. Dla skali historycznej: w spisie z 1921 roku Kleczew liczył dwa tysiące siedemset czterdzieści cztery osoby, a w 2006 — cztery tysiące sto siedemdziesiąt trzy.",
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

  districtsHeading: "Do których części Kleczewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — a ile ich dokładnie jest, zależy od rejestru, bo cztery podają cztery różne liczby. Dla mnie to nie ma znaczenia: dojeżdżam wszędzie i bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Kleczewa” i „w Kleczewie”, a nie „do Kleczewia” ani „w Kleczewiu”; przymiotnika od nazwy miasta nie używam, bo nie udało mi się go potwierdzić w źródle urzędowym. I praktyczna: w gminie są dwie różne wsie o wspólnym pierwszym członie — Budzisław Górny i Budzisław Kościelny — więc przy adresie warto podać oba członki.",
  ],
  districts: [],

  nearbyHeading: "Poza Kleczew też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Konina, Goliny, Ślesina, Sompolna, Kłodawy i Witkowa — wszędzie bezpłatnie, tak samo jak w samym Kleczewie.",
  ],
  nearbyTowns: ["Konin", "Golina", "Ślesin", "Sompolno", "Kłodawa", "Witkowo"],

  about: blokOMnie("do Kleczewa", "w Kleczewie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kleczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Kleczewa” i „w Kleczewie”, a nie „do Kleczewia”, „w Kleczewiu” ani „do Kleczowa”; przymiotnika od nazwy miasta nie używam, bo nie mam dla niego potwierdzenia w źródle urzędowym. I praktyczna: w gminie są Budzisław Górny i Budzisław Kościelny — dwie różne wsie — więc przy adresie warto podać drugi członek nazwy.",
    },
    ...faqWspolne("w Kleczewie"),
    {
      question: "U nas w domu ciągle wychodzi spór o to, kto ile gotuje. Jak to rozstrzygnąć?",
      answer:
        "Najpierw ustalając, co wchodzi do liczby — bo to prawie zawsze spór o definicję, nie o fakty. Kleczew jest tu pouczający: na pytanie, ile miejscowości ma ta gmina, cztery rejestry podają trzydzieści osiem, czterdzieści trzy, czterdzieści siedem i czterdzieści osiem, a żaden z nich nie jest nierzetelny — po prostu jeden liczy miejscowości urzędowe, drugi obręby ewidencyjne, trzeci osady. W domu jest identycznie: czy odgrzana zupa to gotowanie, czy kanapki do szkoły, czy zaplanowanie zakupów i wyjęcie mięsa dzień wcześniej. Dwie osoby podają dwie liczby i obie są szczere. Ustalcie na głos, co się liczy, zanim zaczniecie liczyć. Jedno zastrzeżenie: jeśli po ustaleniu definicji liczby nadal się rozjeżdżają, to jest już różnica w faktach i wtedy trzeba o niej porozmawiać.",
    },
    {
      question: "Czy Thermomix zmniejszy moją część obowiązków w kuchni?",
      answer:
        "Tylko jedną jej część i wolę powiedzieć którą. Zdejmuje stanie przy garnku i pilnowanie, bo temperaturę i mieszanie prowadzi samo urządzenie, a danie powstaje w jednym naczyniu, więc zmywania jest mniej. Nie zdejmuje planowania, zakupów, decydowania, co jeść, ani sprzątania kuchni. Jeśli u Was najcięższa jest właśnie ta druga część, to urządzenie pomoże mniej, niż się spodziewacie — i lepiej to wiedzieć przed zakupem niż po.",
    },
  ],

  geo: { lat: 52.3705, lng: 18.1772 },
};
