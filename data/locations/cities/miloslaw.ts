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
 * MIŁOSŁAW — powiat wrzesiński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ MIŁOSŁAW NIE MA.
 * MIASTO: 3 374 mieszkańców (GUS 31.12.2024), 4,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   756,5 os./km², iloraz daje 749,8. ROZBIEŻNOŚĆ 6,7.
 *   NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 9 774 osoby, 132,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 75,
 *   iloraz daje 74,0. ROZBIEŻNOŚĆ 1,01, TUŻ POWYŻEJ
 *   PROGU. ⚠⚠ CZTERY ŹRÓDŁA PODAJĄ CZTERY LICZBY
 *   LUDNOŚCI GMINY (9 774 / 9 760 / 9 653 / 9 653) —
 *   ⚠⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM, figura „cztery
 *   rejestry, cztery liczby" ZAJĘTA (Kleczew).
 *   PODAJĘ TYLKO GUS Z DATĄ.
 *   ⚠ Gmina jest DRUGA W POWIECIE pod względem
 *   ludności. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 25 wg jednego wykazu, 29 wg TERYT;
 *   19 obrębów ewidencyjnych.
 *   ⚠⚠⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — rozbieżność.
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   WSIE (wybór): Białe Piątkowo, Biechowo, Bugaj,
 *   Chlebowo, Czeszewo, Gorzyce, Kozubiec, Książno,
 *   Lipie, Mikuszewo, Orzechowo, Pałczyn, Rudki,
 *   Skotniki, Szczodrzejewo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,2031 / 17,4897 (drugie źródło zgodne
 *   do ok. 90 m).
 *
 * ⚠⚠⚠ ODMIANA — NAJWIĘKSZA PUŁAPKA TEJ FALI:
 *   D. do MIŁOSŁAWIA (⚠⚠⚠ NIE „Miłosława") ·
 *   Ms. w MIŁOSŁAWIU (⚠⚠⚠ NIE „w Miłosławie") ·
 *   N. pod MIŁOSŁAWIEM · C. Miłosławiowi.
 *   ⚠⚠⚠ ODMIENIA SIĘ JAK „WROCŁAW → WROCŁAWIA",
 *   NIE JAK IMIĘ MIŁOSŁAW.
 *   ⚠ POTWIERDZENIA: „W najwyższym punkcie
 *   Miłosławia", „Pałac w Miłosławiu", „pod
 *   Miłosławiem".
 *   Przymiotnik: MIŁOSŁAWSKI — potwierdzony
 *   („kosynierów miłosławskich", „dzieciom
 *   miłosławskim").
 *   ⚠⚠⚠ ŹRÓDŁO BŁĘDU: nazwa jest identyczna
 *   ze staropolskim IMIENIEM MĘSKIM MIŁOSŁAW, które
 *   odmienia się inaczej (D. Miłosława, Ms. Miłosławie).
 *   WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ NAZWY MIESZKAŃCA („miłosławianie") NIE UŻYWAM
 *   — mam ją tylko z jednego opracowania.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ MIŁOSŁAW JAKO IMIĘ MĘSKIE — inna odmiana.
 *   — NAZWISKO MIŁOSŁAWSKI — teksty o „Miłosławskich"
 *     dotyczą rodu, nie mieszkańców.
 *   — ⚠⚠⚠ MIROSŁAW — wieś w gminie UJŚCIE (powiat
 *     pilski), o której piszę w tej samej fali.
 *     RÓŻNICA JEDNEJ LITERY. WSPOMINAM.
 *   — W gminie Miłosław leży MIKUSZEWO.
 *   — Innych miejscowości o nazwie Miłosław
 *     NIE USTALONO [NP].
 *
 * ⚠⚠ DATY:
 *   — WZMIANKA W DOKUMENCIE ŁOKIETKA: 1314 R.
 *   — WZMIANKOWANY WÓJT: 1397 R.
 *   — FORMALNA LOKACJA NA PRAWIE MAGDEBURSKIM:
 *     1539 R.
 *     ⚠⚠⚠ DATY PIERWSZEGO NADANIA PRAW MIEJSKICH
 *     NIE ZNA ŻADNE ŹRÓDŁO — ⚠⚠⚠ FIGURA „data
 *     przyjęta, nie znaleziona" ZAJĘTA (Krobia).
 *     PODAJĘ TRZY DATY JAKO FAKTY I NIC Z NICH
 *     NIE BUDUJĘ.
 *   — 1833 R.: status miasta wolnego; jedno z 70 miast
 *     prywatnych w Wielkopolsce. PODAJĘ.
 *   — PAŁAC ROZBUDOWYWANY DWUKROTNIE: 1843–1844
 *     i 1895–1899. PODAJĘ.
 *   — LUDNOŚĆ: 822 (1789), 959 (1800), 2 484 (1900),
 *     2 950 (1939). PODAJĘ CIĄG.
 *     ⚠⚠⚠ PORÓWNANIA Z DZISIEJSZĄ LICZBĄ NIE ROBIĘ
 *     (procent wzrostu od 1939 prowadzi w wątki
 *     demograficzne).
 *   ⚠⚠⚠ POMNIKA Z 1899 R. NIE WYMIENIAM — wzniesiony
 *     pod zaborem, wątek polityczno-narodowy
 *     WYKLUCZONY. Nie wymieniam też uroczystości
 *     ani gościa.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ WYDARZEŃ Z 1848 R. NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NAZWISKO OD MIEJSCA, NIE MIEJSCE
 *   OD NAZWISKA:
 *   Powszechnie sądzi się, że Miłosław wziął nazwę
 *   od rodu Miłosławskich.
 *   JEST ODWROTNIE: ród Doliwów PRZYJĄŁ NAZWISKO
 *   OD SWOICH DZIEDZICZNYCH DÓBR, począwszy
 *   od XIII wieku.
 *   CZYLI: kierunek nazwania biegnie od miejsca
 *   do ludzi, nie od ludzi do miejsca.
 *   ⚠⚠ „DOLIWA" TO NAZWA RODU — PODAJĘ JĄ, bo bez
 *   niej fakt jest niezrozumiały. To nie jest nazwa
 *   firmy ani marki.
 *   ⚠⚠ ŹRÓDŁO JEDNO. MÓWIĘ TO W TEKŚCIE.
 *
 * KĄT: NAZWISKO OD MIEJSCA, NIE MIEJSCE OD NAZWISKA
 * — o tym, że kierunek nazwania bywa odwrotny,
 * niż zakładamy. Kąt z Miłosławia: to ród przyjął
 * nazwisko od dóbr, nie dobra od rodu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że powszechnie sądzi się, iż miasto wzięło nazwę
 *   od rodu,
 * — że jest odwrotnie: ród Doliwów przyjął nazwisko
 *   od swoich dziedzicznych dóbr, od XIII wieku.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ że mam to z jednego opracowania,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „babcine pierogi"
 *   nie są babcine dlatego, że babcia je wymyśliła.
 *   Są babcine, bo robiła je tyle razy, że nazwa
 *   się przykleiła,
 * — ⚠⚠ ŻE TO ZDEJMUJE CIĘŻAR Z PYTANIA „CZY TO
 *   NAPRAWDĘ NASZ PRZEPIS" — autorstwo nie jest
 *   warunkiem,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nazwij po sobie danie,
 *   które robisz najczęściej. Nie dlatego, że je
 *   wymyśliłaś — dlatego, że je robisz,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie działa
 *   w drugą stronę. Nie wolno podpisywać się pod
 *   cudzą pracą, a różnica jest prosta: robić coś
 *   wiele razy to nie to samo co przypisać sobie
 *   czyjeś wykonanie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia
 *   autorstwa. Danie zrobione w nim jest Wasze
 *   dokładnie tak samo jak zrobione w garnku —
 *   ani trochę bardziej, ani trochę mniej.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO „DOMOWE NAZYWA ZŁOŻENIE, NIE POCHODZENIE"
 *   — kąt zajęty (Buk). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o SKŁADNIKI i o to, z ilu rąk pochodzą; TU
 *   o KIERUNEK NAZWANIA — kto od kogo bierze nazwę.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠⚠ ZERO WSZYSTKIEGO NAZWANEGO OD JEDNEJ RZECZY —
 *   kąt zajęty (Kłodawa).
 * — ⚠⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń).
 * — ⚠⚠⚠ ZERO DOWODU W SĄSIEDNIEJ NAZWIE — kąt zajęty
 *   (Skoki).
 * — ⚠⚠⚠ ZERO DATY PRZYJĘTEJ, NIE ZNALEZIONEJ — kąt
 *   zajęty (Krobia). DLATEGO BRAKU DATY LOKACJI
 *   NIE ROZWIJAM.
 * — ⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR —
 *   kąt zajęty (Śmigiel).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ UWAGA: to
 *   sekcja o nazywaniu dań. WOLNO MI WYMIENIĆ NAZWY
 *   POTRAW, ALE NIE WOLNO PODAĆ ANI JEDNEJ PROPORCJI
 *   ANI KROKU WYKONANIA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO ZACHĘCANIA DO PRZYPISYWANIA SOBIE
 *   CUDZEJ PRACY. Sekcja zdejmuje wstyd, nie daje
 *   prawa do zawłaszczania.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   POWSTAŃCZEGO, ZABOROWEGO I POLITYCZNEGO (POMNIKA
 *   NIE WYMIENIAM) · ZERO WĄTKU WYZNANIOWEGO
 *   I OBIEKTÓW SAKRALNYCH · ZERO WĄTKU MILITARNEGO
 *   I ROKU 1848 · ZERO ALKOHOLU · ZERO POŻARÓW ·
 *   ZERO BEZROBOCIA I WYLUDNIANIA · ZERO HERBU ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta ani gminy.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby miejscowości ani sołectw.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ daty pierwszego nadania praw miejskich
 *   — nie zna jej żadne źródło.
 * — NIE PORÓWNUJĘ ludności z 1939 z dzisiejszą.
 * — NIE WYMIENIAM pomnika, obiektów sakralnych
 *   ani wydarzeń z 1848 r.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Miłosław leży w powiecie wrzesińskim i liczy 3 374
 *   mieszkańców (GUS, 31.12.2024) na 4,5 km²; cała
 *   gmina miejsko-wiejska to 9 774 osoby na 132,1 km²
 *   i jest drugą gminą powiatu pod względem ludności,
 * — to nie miasto wzięło nazwę od rodu Miłosławskich,
 *   lecz ród Doliwów przyjął nazwisko od swoich
 *   dziedzicznych dóbr, począwszy od XIII wieku,
 * — Miłosław jest wzmiankowany w dokumencie Władysława
 *   Łokietka z 1314 r., w 1397 r. wzmiankowany jest
 *   tu wójt, a formalna lokacja na prawie magdeburskim
 *   nastąpiła w 1539 r.; daty pierwszego nadania praw
 *   miejskich nie zna żadne źródło,
 * — w 1833 r. Miłosław otrzymał status miasta wolnego
 *   i był jednym z 70 miast prywatnych w Wielkopolsce,
 * — pałac rozbudowywano dwukrotnie: w latach 1843–1844
 *   i 1895–1899,
 * — ludność miasta: 822 osoby w 1789 r., 959 w 1800,
 *   2 484 w 1900 i 2 950 w 1939 r.,
 * — w gminie leżą m.in. Czeszewo, Orzechowo, Pałczyn,
 *   Biechowo, Chlebowo, Gorzyce, Książno, Lipie,
 *   Mikuszewo, Rudki i Skotniki.
 */
export const MILOSLAW: CityContent = {
  slug: "miloslaw",
  h1: "Thermomix Miłosław – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Miłosław — cena i prezentacja",
  seoDescription:
    "Thermomix w Miłosławiu w powiecie wrzesińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Miłosław — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Miłosławiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Miłosławia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Miłosław"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To ród wziął nazwisko od miejsca, nie miejsce nazwę od rodu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miłosławiu – jak wygląda prezentacja?",
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
      id: "kierunek-nazwania",
      heading: "Nazwisko od miejsca, nie miejsce od nazwiska",
      paragraphs: [
        "Przy Miłosławiu prawie każdy zakłada to samo: że miasto wzięło nazwę od rodu Miłosławskich. Brzmi logicznie — możny ród, jego miasto, jego nazwa.",
        "Jest odwrotnie. To ród Doliwów przyjął nazwisko od swoich dziedzicznych dóbr, począwszy od trzynastego wieku. Najpierw było miejsce, potem ludzie zaczęli się od niego nazywać. Mam to z jednego opracowania, więc traktuję ostrożnie — ale kierunek jest tam opisany wprost.",
        "Piszę o tym, bo w kuchni mamy dokładnie ten sam odruch i przez niego bardzo dużo osób czuje się oszustami.",
        "„Babcine pierogi.” „Ciasto cioci Jadzi.” „Zupa mojej mamy.” I potem pytanie, które słyszę regularnie: czy ja mogę to tak nazywać, skoro nie ja to wymyśliłam, a przepis babci pewnie i tak wziął się z gazety albo od sąsiadki.",
        "Możecie. Bo „babcine” nigdy nie znaczyło „wymyślone przez babcię”. Znaczyło „robione przez babcię tyle razy, że nazwa się przykleiła”. Nazwa poszła od praktyki do osoby, nie od osoby do potrawy — dokładnie jak w Miłosławiu, gdzie nazwisko poszło od dóbr do ludzi.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że „domowe” nazywa złożenie, a nie pochodzenie każdego składnika. Tu chodzi o coś innego — nie o składniki, tylko o kierunek nazwania: kto od kogo bierze nazwę.",
        "Ruch jest jeden i jest zaskakująco przyjemny. Nazwijcie po sobie danie, które robicie najczęściej. Nie dlatego, że je wymyśliliście — dlatego, że je robicie. Za dziesięć lat ktoś w rodzinie powie „zrób tamto, no wiesz, twoje” i będzie miał rację.",
        "Uczciwie o drugiej stronie, bo to nie działa w obie strony. Nie wolno podpisywać się pod cudzą pracą i różnica jest prosta: robić coś wiele razy to nie to samo co przypisać sobie czyjeś wykonanie. Jeśli ktoś przyniósł ciasto i to on je upiekł, to jest jego ciasto, nawet jeśli przepis dostał od Was. Nazwa idzie za robieniem, nie za pomysłem — ale też nie za posiadaniem przepisu.",
        "I uczciwie o sprzęcie, bo tu bywa najwięcej niepotrzebnego wstydu. Thermomix nie zmienia autorstwa ani o gram. Danie zrobione w urządzeniu jest Wasze dokładnie tak samo jak zrobione w garnku — ani trochę bardziej, ani trochę mniej. Kto uważa inaczej, myli nazwę z narzędziem, a te dwie rzeczy nigdy nie były tym samym.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miłosławiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie robicie najczęściej — to, o które proszą u Was w domu. Od niego zaczynamy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miłosławiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Miłosławia",
      paragraphs: [
        "Miłosław leży w powiecie wrzesińskim i liczy 3 374 mieszkańców (GUS, 31.12.2024) na 4,5 kilometra kwadratowego; gęstości nie podaję ani dla miasta, ani dla gminy, bo liczby ze źródeł nie zgadzają się z ilorazami. Cała gmina miejsko-wiejska to 9 774 osoby na 132,1 kilometra kwadratowego i jest drugą gminą powiatu pod względem ludności. Miasto jest wzmiankowane w dokumencie Władysława Łokietka z 1314 roku, w 1397 wzmiankowany jest tu wójt, a formalna lokacja na prawie magdeburskim nastąpiła dopiero w 1539 — daty pierwszego nadania praw miejskich nie zna żadne źródło i nie zamierzam żadnej wymyślać. W 1833 roku Miłosław otrzymał status miasta wolnego i był jednym z siedemdziesięciu miast prywatnych w Wielkopolsce. Tutejszy pałac rozbudowywano dwukrotnie: w latach 1843–1844 i 1895–1899. Dla skali historycznej: w 1789 roku mieszkały tu osiemset dwadzieścia dwie osoby, w 1800 — dziewięćset pięćdziesiąt dziewięć, w 1900 — dwa tysiące czterysta osiemdziesiąt cztery, a w 1939 — dwa tysiące dziewięćset pięćdziesiąt. W gminie leżą między innymi Czeszewo, Orzechowo, Pałczyn, Biechowo, Chlebowo, Gorzyce i Mikuszewo.",
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

  districtsHeading: "Do których części Miłosławia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Czeszewa, Orzechowa, Pałczyna, Biechowa, Chlebowa, Gorzyc, Książna, Lipia, Mikuszewa, Rudek, Skotnik i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa, bo to najczęściej mylona nazwa w okolicy: mówi się „do Miłosławia” i „w Miłosławiu”, tak jak „do Wrocławia” i „we Wrocławiu” — a nie „do Miłosława” ani „w Miłosławie”. Błąd bierze się stąd, że Miłosław jest też staropolskim imieniem męskim, które odmienia się inaczej. Przymiotnik brzmi „miłosławski”. I praktyczna: w powiecie pilskim leży wieś Mirosław, różniąca się jedną literą.",
  ],
  districts: [],

  nearbyHeading: "Poza Miłosław też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wrześni, Nekli, Pyzdr, Żerkowa, Środy Wielkopolskiej i Jarocina — wszędzie bezpłatnie, tak samo jak w samym Miłosławiu.",
  ],
  nearbyTowns: ["Września", "Nekla", "Pyzdry", "Żerków", "Środa Wielkopolska", "Jarocin"],

  about: blokOMnie("do Miłosławia", "w Miłosławiu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Miłosławia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa odmienia się jak „Wrocław”, więc poprawnie jest „do Miłosławia” i „w Miłosławiu”, a nie „do Miłosława” ani „w Miłosławie” — błąd bierze się stąd, że Miłosław jest też staropolskim imieniem męskim, a imię odmienia się inaczej. Przymiotnik brzmi „miłosławski”. I praktyczna: w powiecie pilskim jest wieś Mirosław, różniąca się jedną literą.",
    },
    ...faqWspolne("w Miłosławiu"),
    {
      question: "Czy mogę mówić „mój przepis”, skoro go nie wymyśliłam?",
      answer:
        "Możecie, i Miłosław jest tu niezłym argumentem. Prawie każdy zakłada, że miasto wzięło nazwę od rodu Miłosławskich, a było odwrotnie: to ród Doliwów przyjął nazwisko od swoich dziedzicznych dóbr, począwszy od trzynastego wieku. Nazwa poszła od miejsca do ludzi, nie od ludzi do miejsca. „Babcine pierogi” nigdy nie znaczyły „wymyślone przez babcię” — znaczyły „robione przez babcię tyle razy, że nazwa się przykleiła”. Nazwijcie po sobie to, co robicie najczęściej. Jedno zastrzeżenie, bo to nie działa w obie strony: jeśli ktoś przyniósł ciasto i sam je upiekł, jest jego, nawet jeśli przepis dostał od Was.",
    },
    {
      question: "Czy danie zrobione w Thermomiksie to jeszcze moje danie?",
      answer:
        "Tak samo Wasze jak zrobione w garnku — ani trochę bardziej, ani trochę mniej. Urządzenie miesza, pilnuje temperatury, czasem miele i waży; decyzje o tym, co, dla kogo, ile i czy już wystarczy, zostają po Waszej stronie. Kto uważa, że sprzęt odbiera autorstwo, myli nazwę z narzędziem — a przy tej logice trzeba by odmówić autorstwa również każdemu, kto używa miksera albo piekarnika.",
    },
  ],

  geo: { lat: 52.2031, lng: 17.4897 },
};
