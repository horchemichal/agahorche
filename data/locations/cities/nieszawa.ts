import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * NIESZAWA — powiat aleksandrowski, woj. kujawsko-pomorskie,
 * KUJAWY, nad Wisłą.
 * ⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ.
 *   To jedyne takie miasto w tej fali. NIE MA odrębnej
 *   gminy wiejskiej o tej nazwie.
 *   ⚠ Istnieje historyczna „gmina Nieszawa" opisywana jako
 *   wiejska — to jednostka nieistniejąca, NIE MYLIĆ.
 * MIASTO = GMINA: 1 748 mieszkańców (GUS 31.12.2024),
 * 9,8 km², gęstość 178,5 os./km² — NAJNIŻSZA Z TEJ FALI.
 * ⚠ SOŁECTW BRAK (gmina miejska). W granicach miasta jest
 *   siedem jego części: Bieńków, Dymiec, Gęsiniec,
 *   Nieszawka, Przytułek, Rybaki, Żabieniec.
 * ⚠ NIE MA CO MIESZAĆ — miasto i gmina to ta sama liczba.
 *   Piszę o tym wprost, bo na wszystkich innych stronach
 *   rozróżniam te dwie wartości.
 * ⚠ GEO: 52,8367 / 18,9014.
 * ⚠ en.wikipedia podaje 1 985 (2014) — liczba przestarzała,
 *   ale WEWNĘTRZNIE SPÓJNA (spadek 16 % w latach
 *   2002–2024). To NIE jest błąd typu „Skępe".
 *   NIE UŻYWAM JEJ JAKO AKTUALNEJ.
 * ⚠ Stowarzyszenie Metropolia Toruńska pisze „około
 *   1 800 mieszkańców" — zaokrąglenie o 3 %, nie błąd.
 * ⚠ ODMIANA (POTWIERDZONA W PWN): D. NIESZAWY,
 *   B. NIESZAWĘ, Ms. W NIESZAWIE, przym. NIESZAWSKI.
 *   Hasło PWN definiuje Nieszawę jako miasto w powiecie
 *   aleksandrowskim nad Wisłą — czyli dotyczy właściwej
 *   miejscowości.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *
 * ⚠⚠⚠ RYZYKA POMYLENIA — NAJGORSZE W CAŁEJ FALI:
 *   NIESZAWKA jest JEDNOCZEŚNIE częścią miasta Nieszawy
 *   ORAZ nazwą dwóch osobnych wsi pod Toruniem:
 *   WIELKA NIESZAWKA i MAŁA NIESZAWKA (z odrębną gminą
 *   wiejską Wielka Nieszawka). To nie przypadek:
 *   PIERWSZA NIESZAWA Z 1228 R. TO DZISIEJSZA MAŁA
 *   NIESZAWKA — historycznie to samo miasto, geograficznie
 *   trzydzieści kilka kilometrów dalej. Zdanie
 *   „w Nieszawce" może dotyczyć trzech różnych miejsc.
 *   Dodatkowo: NIESZAWA w lubelskim i w wielkopolskim
 *   (wsie) oraz NIESZAWA-KOLONIA.
 *   POWIAT NIESZAWSKI istniał w latach 1871–1932 i NIE
 *   pokrywa się z dzisiejszym powiatem aleksandrowskim.
 *   ⚠⚠ SAMA NIESZAWA MIAŁA TRZY RÓŻNE LOKALIZACJE —
 *   zdanie „w Nieszawie w roku X" zawsze wymaga
 *   sprawdzenia, o którą chodzi.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — MIASTO WĘDRUJĄCE, trzy lokacje:
 *   1228 — pierwsza Nieszawa, osada na lewym brzegu Wisły
 *   cztery kilometry poniżej Torunia (dziś Mała Nieszawka);
 *   1424 — druga Nieszawa, lokowana przez Władysława
 *   Jagiełłę naprzeciwko Torunia; 1425 — prawa miejskie;
 *   ⭐ 24 WRZEŚNIA 1460 — dokument lokacyjny TRZECIEJ
 *   Nieszawy, przeniesienie ok. 30–32 km w górę Wisły
 *   (DATA DZIENNA);
 *   jesień 1462 — ukończenie likwidacji drugiej Nieszawy.
 *   ⚠ ŹRÓDŁA ROZBIEŻNE CO DO DYSTANSU (30 albo 32 km) —
 *   piszę „ponad trzydzieści kilometrów".
 * — HANDEL ZBOŻEM — najlepszy materiał liczbowy:
 *   połowa XVII w. — W MIEŚCIE DZIAŁAŁO 25 SPICHLERZY.
 * — ⚠⚠⚠ RDZEŃ KĄTA — REJESTR CELNY Z 1579 R.,
 *   SPŁAW DO GDAŃSKA:
 *   37 SZKUT, 16 DUBASÓW, 27 LICHTANÓW I 1 ŁÓDŹ
 *   = 81 JEDNOSTEK W CZTERECH TYPACH,
 *   ładunek 714,5 łaszta zboża szlacheckiego
 *   i 234,5 łaszta kupieckiego = 949 ŁASZTÓW.
 *   ⚠ ŁASZT to dawna jednostka objętości — WYMIENIAM JĄ,
 *   ale NIE TŁUMACZĘ na dzisiejsze miary i nie robię
 *   z tego tematu: kąt „dawne miary w przepisach"
 *   jest zajęty (Radziejów). TWARDA GRANICA.
 * — 1820 — rozpoczęcie regulacji zabudowy miasta.
 * — 1862 — powstanie stacji kolejowej w WAGAŃCU.
 *   ⚠⚠ ŹRÓDŁO PRZYPISUJE JĄ „Kolei Nadwiślańskiej" —
 *   to nieścisłość, tamta powstała w 1877 r. PODAJĘ ROK,
 *   NIGDY NAZWY LINII. Nieszawa do dziś nie ma własnej
 *   stacji.
 * — 1871 — przeniesienie siedziby powiatu do Nieszawy
 *   i przemianowanie go na nieszawski; 1932 — przeniesienie
 *   siedziby do Aleksandrowa Kujawskiego.
 * — SZKOLNICTWO: 1919–1928 — Szkoła Ogrodniczo-Pszczelarska
 *   (dziewięć lat); 1923–1935 — Seminarium Nauczycielskie
 *   (dwanaście lat).
 * — ARCHITEKTURA: 1425 kościół parafialny Rozesłania
 *   Apostołów; 1468 rozpoczęcie budowy kościoła
 *   św. Jadwigi, 1496 konsekracja — DWADZIEŚCIA OSIEM LAT
 *   BUDOWY. ⚠ WYMIARÓW ŻADNEGO Z BUDYNKÓW NIE USTALONO.
 * — Muzeum Stanisława Noakowskiego, oddział muzeum
 *   włocławskiego, w domu rodzinnym architekta.
 *   ⚠ NOAKOWSKI SPRAWDZONY — postać czysta, bez afer.
 * — ⚠⚠ PO 1815 R. OTWARTO TU WODNĄ KOMORĘ CELNĄ —
 *   FAKTU NIE UŻYWAM, bo kąt „komora celna" jest zajęty
 *   (Kowal). TWARDA GRANICA.
 * — ⚠ GAZOWNI, WODOCIĄGÓW, ELEKTROWNI I MŁYNÓW
 *   NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Nieszawa. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ Nieszawa leży na Kujawach, więc przyciąga
 *   kilkadziesiąt produktów z przymiotnikiem „kujawski".
 *   Wszystkie mają ZASIĘG REGIONALNY, a ich karty
 *   NIE WYMIENIAJĄ ŻADNEJ GMINY. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI NIE USTALONO — districts PUSTE.
 *
 * KĄT: CZTERY TYPY ŁODZI DO JEDNEGO ŁADUNKU —
 * pojemnik dobiera się do porcji, a nie porcję
 * do pojemnika.
 * Kąt od rejestru celnego z 1579 r.: zboże z Nieszawy
 * popłynęło do Gdańska na osiemdziesięciu jeden
 * jednostkach czterech różnych typów. Nikt nie próbował
 * zrobić tego jednym wielkim statkiem ani osiemdziesięcioma
 * jednakowymi łodziami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rejestr z 1579 r. notuje 37 szkut, 16 dubasów,
 *   27 lichtanów i jedną łódź — cztery różne wielkości
 *   do jednego ładunku,
 * — ⚠⚠ ŻE W DOMU KUPUJEMY ODWROTNIE: KOMPLET POJEMNIKÓW
 *   TEJ SAMEJ WIELKOŚCI — I DLATEGO ALBO PRZECHOWUJEMY
 *   POWIETRZE, ALBO NADMIAR SIĘ NIE MIEŚCI.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE ZESTAW MA SENS DOPIERO WTEDY, GDY MA CO NAJMNIEJ
 *   TRZY RÓŻNE ROZMIARY — a nie sześć takich samych,
 * — KONKRETY, KTÓRE ROZSTRZYGAJĄ PRZY WYBORZE:
 *   — NAJCZĘŚCIEJ BRAKUJE NAJMNIEJSZEGO. Resztka sosu,
 *     dwie łyżki pesto, połowa cebuli — to są
 *     najczęstsze zawartości i najrzadziej kupowane
 *     pojemniki,
 *   — KSZTAŁT BIJE POJEMNOŚĆ: prostokątny wchodzi
 *     na półkę, okrągły zostawia narożniki puste,
 *   — WAŻNE JEST, CZY WIDAĆ ZAWARTOŚĆ — to, czego nie
 *     widać, zostaje na później i tym „później" bywa
 *     nigdy,
 *   — POJEMNIK WYPEŁNIONY W POŁOWIE SUSZY ZAWARTOŚĆ
 *     SZYBCIEJ NIŻ PEŁNY,
 * — ⚠ UCZCIWIE: nie namawiam do kupowania nowych
 *   pojemników. Namawiam do sprawdzenia, ilu rozmiarów
 *   naprawdę się używa — zwykle okazuje się, że dwóch,
 *   a stoi ich pięć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie urządzenia ma JEDEN,
 *   NARZUCONY rozmiar i to jest realne ograniczenie.
 *   Bardzo mała porcja w dużym naczyniu miesza się gorzej,
 *   bo nie sięga tam, gdzie powinna. Nie da się tego
 *   obejść i lepiej wiedzieć o tym przed zakupem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO ROZMIARU NACZYNIA DO GOTOWANIA — kąt zajęty.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ piszę WYŁĄCZNIE
 *   o POJEMNIKACH DO PRZECHOWYWANIA, nigdy o garnkach
 *   i patelniach. TWARDA GRANICA.
 * — ⚠⚠ ZERO WARZYW, KTÓRE NIE POWINNY LEŻEĆ W LODÓWCE —
 *   kąt zajęty (Trzciel). Nie piszę, CO gdzie trzymać,
 *   tylko W CZYM.
 * — ⚠⚠ ZERO UKŁADU KUCHNI — kąt zajęty (Michałowo).
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica). Pojemnik to nie jest wątek zamrażarki.
 * — ⚠⚠ ZERO SUCHEGO ZAPASU I SPIŻARNI — kąt zajęty
 *   (Dobiegniew).
 * — ⚠⚠ ZERO DAWNYCH MIAR — kąt zajęty (Radziejów).
 *   Łaszt wymieniam raz, bez przeliczania.
 * — ⚠ ZERO KUCHNI TYMCZASOWEJ I REMONTU — kąt zajęty
 *   (Wyszków). Wątek trzech lokacji miasta zostaje
 *   w sekcji o mieście i NIE staje się kątem.
 * — ⚠ ZERO KOMORY CELNEJ — kąt zajęty (Kowal).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK — ⚠⚠ przy pojemnikach
 *   ryzyko jest podwyższone. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy przechowywaniu to najkrótsza droga do wpadki.
 *   Piszę WYŁĄCZNIE o wysychaniu i o widoczności,
 *   ZERO o psuciu się, terminach, bakteriach i o tym,
 *   co się nadaje do zjedzenia.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z 1939 R. — drugi akapit sekcji
 *   historycznej en.wikipedii mówi o Intelligenzaktion
 *   i o wysiedleniu około tysiąca mieszkańców w grudniu
 *   1939. To pierwsza rzecz po infoboksie.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   w pierwszej ósemce wyników o historii Nieszawy.
 *   ZERO postaci wymienianej przy tym wątku wśród
 *   „słynnych mieszkańców".
 * — ⚠⚠⚠ ZERO FERDYNANDA ANTONIEGO OSSENDOWSKIEGO.
 *   en.wikipedia wiąże go z Nieszawą, ale to postać
 *   sporna — media publikują o nim materiały pod tytułem
 *   „podróżnik budzący kontrowersje", a spór dotyczy
 *   wiarygodności jego relacji i publicystyki. Dokładnie
 *   ten wzorzec, którego pilnujemy: „dumny fakt"
 *   prowadzący do sporu. NIE BUDUJĘ NA NIM NICZEGO.
 * — ⚠⚠ ZERO ZARAZY Z 1662 R. i ZERO ZDOBYCIA ORAZ
 *   SPALENIA MIASTA W 1431 R. — oba w kalendarium,
 *   tuż obok dat lokacji.
 * — ⚠ ZERO „WYZWOLENIA 21 STYCZNIA 1945".
 * — ⚠ ZERO KOŚCIOŁÓW I KLASZTORU jako wątku wyznaniowego
 *   — wyłącznie jako architektury z datą.
 * — ⚠ ZERO STATUTÓW NIESZAWSKICH Z 1454 R. — temat
 *   bezpieczny, ale kuchennie bezużyteczny; nie wpycham
 *   go na siłę.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 * — ZERO bezrobocia, salda migracji i przyrostu
 *   naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ROZMIAR NACZYNIA" dotyczy GARNKA, W KTÓRYM SIĘ
 *   GOTUJE. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ nie ma
 *   ani jednego zdania o gotowaniu — jest wyłącznie
 *   PRZECHOWYWANIE.
 * — „WARZYWA POZA LODÓWKĄ" (Trzciel) dotyczy MIEJSCA.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy TEGO, CO SIĘ TRZYMA.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ZAMRAŻARKI.
 * TUTAJ chodzi o DOBÓR WIELKOŚCI POJEMNIKA DO PORCJI —
 * i o to, że komplet jednakowych pojemników jest
 * najczęstszym zakupem, który nie rozwiązuje niczego.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby 1 985 — pochodzi z 2014 roku.
 * — NIE ROZSTRZYGAM, czy miasto przeniesiono o 30 czy
 *   o 32 kilometry.
 * — NIE PODAJĘ nazwy linii kolejowej przy stacji
 *   w Wagańcu — źródło jest tu nieścisłe.
 * — NIE PRZELICZAM łasztów na dzisiejsze miary.
 * — NIE PODAJĘ wymiarów żadnego budynku — nie ustalono.
 * — NIE PISZĘ o komorze celnej.
 * — NIE WYMIENIAM Ossendowskiego.
 * — NIE PRZYPISUJĘ Nieszawie żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nieszawa leży na Kujawach, nad Wisłą, w powiecie
 *   aleksandrowskim; jest gminą miejską, więc miasto
 *   i gmina to ta sama jednostka: 1 748 mieszkańców
 *   (GUS, 31.12.2024) na 9,8 km², czyli niecałe sto
 *   osiemdziesiąt osób na kilometr kwadratowy,
 * — miasto zmieniało miejsce trzykrotnie: pierwsza
 *   Nieszawa z 1228 roku leżała cztery kilometry poniżej
 *   Torunia, druga — lokowana w 1424 przez Władysława
 *   Jagiełłę — naprzeciwko Torunia, a 24 września 1460
 *   wystawiono dokument lokacyjny trzeciej, przeniesionej
 *   o ponad trzydzieści kilometrów w górę Wisły;
 *   likwidację poprzedniej ukończono jesienią 1462,
 * — prawa miejskie miasto uzyskało w 1425 roku,
 * — w połowie XVII wieku stało tu dwadzieścia pięć
 *   spichlerzy, a rejestr celny z 1579 roku notuje spław
 *   do Gdańska: trzydzieści siedem szkut, szesnaście
 *   dubasów, dwadzieścia siedem lichtanów i jedną łódź —
 *   osiemdziesiąt jeden jednostek, które przewiozły
 *   dziewięćset czterdzieści dziewięć łasztów zboża,
 * — w 1820 roku rozpoczęto regulację zabudowy miasta,
 *   a w 1862 powstała stacja kolejowa w pobliskim
 *   Wagańcu; Nieszawa do dziś nie ma własnej stacji,
 * — w 1871 roku przeniesiono tu siedzibę powiatu, który
 *   przemianowano na nieszawski, a w 1932 siedzibę
 *   przeniesiono do Aleksandrowa Kujawskiego,
 * — działały tu Szkoła Ogrodniczo-Pszczelarska
 *   (1919–1928) i Seminarium Nauczycielskie (1923–1935),
 * — kościół parafialny Rozesłania Apostołów pochodzi
 *   z 1425 roku, a kościół św. Jadwigi budowano
 *   od 1468 do konsekracji w 1496 — dwadzieścia osiem lat,
 * — w domu rodzinnym architekta Stanisława Noakowskiego
 *   działa muzeum, oddział Muzeum Ziemi Kujawskiej
 *   i Dobrzyńskiej we Włocławku.
 */
export const NIESZAWA: CityContent = {
  slug: "nieszawa",
  h1: "Thermomix Nieszawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nieszawa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Nieszawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nieszawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nieszawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nieszawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Nieszawa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zestaw pojemników ma sens wtedy, gdy ma trzy rozmiary, a nie sześć takich samych.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nieszawie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "cztery-typy-lodzi",
      heading: "Osiemdziesiąt jeden łodzi w czterech wielkościach",
      paragraphs: [
        "Rejestr celny z 1579 roku zapisał, czym popłynęło z Nieszawy zboże do Gdańska: trzydzieści siedem szkut, szesnaście dubasów, dwadzieścia siedem lichtanów i jedna łódź. Osiemdziesiąt jeden jednostek, cztery różne wielkości, dziewięćset czterdzieści dziewięć łasztów ładunku.",
        "Zwróć uwagę, czego tam nie ma. Nikt nie próbował zrobić tego jednym wielkim statkiem. I nikt nie wysłał osiemdziesięciu jeden jednakowych łodzi.",
        "W domu kupujemy odwrotnie i stąd bierze się rzecz, na którą narzeka każda kuchnia: komplet pojemników tej samej wielkości. Efekt jest zawsze ten sam — albo przechowujemy powietrze, albo nadmiar się nie mieści.",
        "Zestaw ma sens dopiero wtedy, gdy ma co najmniej trzy różne rozmiary. Sześć jednakowych to nie jest zestaw, tylko sześć razy to samo.",
        "Najczęściej brakuje najmniejszego. Resztka sosu, dwie łyżki pesto, połowa cebuli, ostatnia porcja dla dziecka — to są realne zawartości domowej lodówki, a pojemniki tej wielkości kupuje się najrzadziej. Wielka miska z łyżką czegoś na dnie to widok, który zna każdy.",
        "Druga rzecz: kształt bije pojemność. Prostokątny pojemnik wchodzi na półkę i nie zostawia pustych narożników; okrągły o tej samej pojemności zajmuje więcej miejsca i wyrzuca resztę przestrzeni. Przy małej lodówce to różnica na całą półkę.",
        "Trzecia, o której się nie mówi: czy widać zawartość. To, czego nie widać, zostaje na później — a tym „później” bywa nigdy. Przezroczysty pojemnik to nie fanaberia, tylko jedyny sposób, żeby coś w ogóle wróciło na stół.",
        "I czwarta, praktyczna: pojemnik wypełniony w połowie suszy zawartość szybciej niż pełny. Jeśli masz wybór między dużym w połowie a małym po brzegi, mały wygrywa.",
        "Nie namawiam przy tym do kupowania nowych. Namawiam do sprawdzenia, ilu rozmiarów naprawdę używacie — zwykle okazuje się, że dwóch, a stoi ich pięć, i że brakuje akurat tego szóstego, najmniejszego.",
        "Uczciwie o sprzęcie, bo tu akurat jest ograniczenie. Naczynie urządzenia ma jeden, narzucony rozmiar i nie ma od tego wyjątku. Bardzo mała porcja w dużym naczyniu miesza się gorzej, bo po prostu nie sięga tam, gdzie powinna.",
        "Tego się nie obejdzie i lepiej wiedzieć o tym przed zakupem niż po. Przy gotowaniu dla jednej osoby warto to sprawdzić na spotkaniu, na własnej porcji, a nie na zapewnieniu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nieszawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie na co dzień — przy jednej albo dwóch pokażę od razu, jak zachowuje się mała porcja, zamiast o tym opowiadać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nieszawie"),
    sekcjaRaty("w Nieszawie"),
    {
      id: "rodzina",
      heading: "Thermomix dla nieszawskiej rodziny",
      paragraphs: [
        "Nieszawa leży na Kujawach, nad Wisłą, w powiecie aleksandrowskim; jest gminą miejską, więc miasto i gmina to ta sama jednostka — tysiąc siedemset czterdzieści osiem osób na dziewięciu i ośmiu dziesiątych kilometra kwadratowego, czyli niecałe sto osiemdziesiąt osób na kilometr. Miasto zmieniało miejsce trzykrotnie: pierwsza Nieszawa z 1228 roku leżała cztery kilometry poniżej Torunia, druga — lokowana w 1424 przez Władysława Jagiełłę — naprzeciwko Torunia, a 24 września 1460 wystawiono dokument lokacyjny trzeciej, przeniesionej o ponad trzydzieści kilometrów w górę rzeki; likwidację poprzedniej ukończono jesienią 1462. Prawa miejskie miasto uzyskało w 1425 roku. W połowie XVII wieku stało tu dwadzieścia pięć spichlerzy, a rejestr celny z 1579 notuje spław do Gdańska: trzydzieści siedem szkut, szesnaście dubasów, dwadzieścia siedem lichtanów i jedną łódź, które przewiozły dziewięćset czterdzieści dziewięć łasztów zboża. W 1820 roku rozpoczęto regulację zabudowy, a w 1862 powstała stacja kolejowa w pobliskim Wagańcu — własnej Nieszawa nie ma do dziś. W 1871 przeniesiono tu siedzibę powiatu, który przemianowano na nieszawski, a w 1932 siedzibę przeniesiono do Aleksandrowa Kujawskiego. Działały tu Szkoła Ogrodniczo-Pszczelarska w latach 1919–1928 i Seminarium Nauczycielskie w latach 1923–1935. Kościół parafialny Rozesłania Apostołów pochodzi z 1425 roku, a kościół św. Jadwigi budowano od 1468 do konsekracji w 1496 — dwadzieścia osiem lat. W domu rodzinnym architekta Stanisława Noakowskiego działa dziś muzeum.",
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

  districtsHeading: "Do których części Nieszawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich jego części — Bieńkowa, Dymca, Gęsińca, Nieszawki, Przytułku, Rybaków i Żabieńca.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Nieszawę też przyjadę",
  nearbyParagraphs: [
    "Aleksandrów Kujawski, Ciechocinek, Radziejów, Włocławek i Toruń są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Aleksandrów Kujawski", "Ciechocinek", "Radziejów", "Toruń"],

  about: blokOMnie("do Nieszawy", "w Nieszawie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nieszawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich jego części. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Nieszawa jest gminą miejską w powiecie aleksandrowskim — miasto i gmina to ta sama jednostka. I nie należy jej mylić z Wielką ani Małą Nieszawką pod Toruniem.",
    },
    ...faqWspolne("w Nieszawie"),
    {
      question: "Jakie pojemniki naprawdę przydają się w kuchni?",
      answer:
        "Przede wszystkim różnej wielkości — zestaw sześciu jednakowych to nie zestaw, tylko sześć razy to samo. Najczęściej brakuje najmniejszego, bo realną zawartością lodówki jest resztka sosu albo połowa cebuli, a nie pełna porcja. Poza tym kształt bije pojemność (prostokątny nie zostawia pustych narożników), a to, czego nie widać, zwykle nie wraca na stół.",
    },
    {
      question: "Czy w Thermomixie da się ugotować bardzo małą porcję?",
      answer:
        "Da się, ale z ograniczeniem i wolę powiedzieć to wprost. Naczynie ma jeden, narzucony rozmiar, więc bardzo mała ilość miesza się w nim gorzej — po prostu nie sięga tam, gdzie powinna. Tego nie da się obejść. Jeśli gotujecie dla jednej albo dwóch osób, najlepiej sprawdzić to na spotkaniu, na własnej porcji.",
    },
  ],

  geo: { lat: 52.8367, lng: 18.9014 },
};
