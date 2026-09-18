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
 * OBORNIKI ŚLĄSKIE — powiat trzebnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Oborniki Śląskie.
 * MIASTO: 8 950 mieszkańców (GUS 31.12.2024), 14,5 km²,
 *   gęstość 618,9 os./km².
 * CAŁA GMINA: 21 145 osób, 154,3 km², 23 wsie.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠ POZA MIASTEM MIESZKA 12 195 OSÓB — WIĘCEJ NIŻ
 *   W SAMYM MIEŚCIE. Miasto to 42,3 % ludności gminy.
 *   ⚠⚠⚠ PODAJĘ JAKO FAKT, NIE ROBIĘ Z TEGO KĄTA —
 *   proporcje miasta do gminy to obszar ograny.
 * ⚠ WYSOKOŚĆ: 170–220 m n.p.m. ⚠ Góra Holteia („Grzybek")
 *   217 m, Góra Gnieźniec 226 m.
 *   ⚠ Drugie źródło podaje dla centrum 173 m — mieści się
 *   w zakresie, więc podaję zakres.
 * ⚠ GEO: 51,3 / 16,9167.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM, OBA CZŁONY:
 *   M. Oborniki Śląskie (te) · D. OBORNIK ŚLĄSKICH
 *   ⚠⚠⚠ „DO OBORNIKÓW ŚLĄSKICH" JEST BŁĘDEM —
 *   KOŃCÓWKA ZEROWA. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Ms. w Obornikach Śląskich · N. Obornikami Śląskimi
 *   ⚠⚠⚠ ORZECZENIE W LICZBIE MNOGIEJ: „Oborniki Śląskie
 *   LEŻĄ", „SĄ", „TE Oborniki Śląskie".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI — PRZYMIOTNIK „OBORNICKI":
 *   1) jest WSPÓLNY z wielkopolskimi OBORNIKAMI, przy czym
 *      POWIAT OBORNICKI ISTNIEJE TYLKO W WIELKOPOLSCE —
 *      Oborniki Śląskie leżą w powiecie TRZEBNICKIM;
 *   2) ⚠⚠⚠ KOLIDUJE Z RZECZOWNIKIEM POSPOLITYM „OBORNIK"
 *      (nawóz naturalny). W TEKŚCIE O GOTOWANIU
 *      NIE UŻYWAM PRZYMIOTNIKA ANI RAZU.
 *      PISZĘ „w Obornikach Śląskich", „z Obornik Śląskich",
 *      ZAWSZE Z CZŁONEM „ŚLĄSKIE". TWARDA GRANICA.
 *   ⚠ Nazwa miasta pochodzi od „Obory" (wzmianka 1305).
 *   ⚠ Forma „Oborniki Wielkopolskie" NIE ISTNIEJE —
 *     tamto miasto nazywa się po prostu Oborniki.
 *   ⚠ Trzebnica (14 km) — siedziba powiatu, stale mylona.
 *   ⚠ „Grzybek" jako obiekt widokowy istnieje także
 *     w Borowym Jarze w Jeleniej Górze.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ok. 1300 — lokacja wsi na prawie magdeburskim.
 * — 1305 — pierwsza wzmianka pisana, forma „Obora",
 *   w spisie uposażeń biskupstwa wrocławskiego.
 * — ⚠⚠ PRAW MIEJSKICH Z ROKU 1945 NIE PODAJĘ —
 *   rok wykluczony. Piszę „prawa miejskie w połowie
 *   dwudziestego wieku". ⚠ Kontrola: w 2005 r. obchodzono
 *   jednocześnie 700 lat od wzmianki i 60 lat praw
 *   miejskich — obie daty domykają się.
 * — 1835 — początek rozbudowy miejscowości (Karol
 *   Wolfgang Schaubert).
 * — 1856 — otwarcie linii kolejowej Wrocław–Poznań
 *   i budowa dworca (neoklasycystycznego z elementami
 *   neoromańskimi).
 * — 1864–1865 — pałac Schaubertów, projekt Wilhelma
 *   Grapowa, na miejscu obiektu z XVII w.
 *   ⚠ Z części historycznej zachowała się właściwie
 *   tylko ośmioboczna wieża.
 *   ⚠⚠ „Z CAŁEGO PAŁACU ZOSTAŁA JEDNA WIEŻA" JAKO KĄT —
 *   ⚠⚠⚠ NIE UŻYWAM. Morał „kupuj to, czego nie da się
 *   zastąpić" ociera się o krótką listę sprzętu (Polanów)
 *   i o liczenie części (Pieszyce, ta sama fala).
 *   PODAJĘ JAKO FAKT.
 *   ⚠ WYMIARÓW PAŁACU I WIEŻY NIE USTALONO.
 * — 1895 — secesyjna poczta przy ul. Dworcowej.
 * — 1898 — budowa drugiego toru, 42 lata po pierwszym.
 * — 1915 — most kamienny w Bagnie.
 * — 1969–1970 — zakończenie elektryfikacji linii.
 * — 21.11.1999 — krzyż milenijny na Górze Holteia.
 *   ⚠⚠ NIE WYMIENIAM — wątek wyznaniowy.
 * — luty 2023 — otwarcie altany widokowej „Grzybek".
 * — ⚠⚠ OBIEKTU SANATORYJNEGO Z 1880 R. NIE WYMIENIAM —
 *   wątek leczniczy. TWARDA GRANICA.
 * — ⚠⚠ KOŚCIOŁÓW (1403, 1901 arch. Alexis Langer,
 *   1907–08) NIE OPISUJĘ — wątek wyznaniowy.
 * — ⚠ MAUZOLEUM W WILCZYNIE (1868) NIE WYMIENIAM —
 *   wątek pogrzebowy.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWA POMNIKI PRZYRODY, DWA RÓŻNE
 *   SPOSOBY OPISU:
 *   Karta gminy wymienia obok siebie ERATYK i DĄB
 *   „CESARZ" — i opisuje je zupełnie inaczej.
 *   ERATYK: obwód 12,25 m, wymiary 4,64 × 2,90 × 1,01 m
 *     — cztery liczby, wszystkie do centymetra.
 *   DĄB „CESARZ": około 400 lat — JEDNA liczba, i to
 *     nie wymiar, tylko wiek.
 *   ⚠⚠ KAMIEŃ NIE ROŚNIE, WIĘC SIĘ GO MIERZY.
 *   DĄB ROŚNIE, WIĘC SIĘ GO LICZY W LATACH.
 *   To jest cały kąt.
 *   ⚠ OBWODU PNIA DĘBU NIE USTALONO — i to jest
 *   wymowne, ale NIE ROBIĘ Z TEGO ARGUMENTU
 *   (brak danych to brak danych, nie dowód).
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — Wzgórze Grzybek: ponad 100 ha powierzchni, ścieżka
 *   5 km, 9 stanowisk opisanych tablicami, 217 m n.p.m.;
 *   altana drewniana w kształcie grzyba, leżanki
 *   kamienno-drewniane i miejsce na ognisko — otwarte
 *   w lutym 2023 r.
 *   ⚠ WYSOKOŚCI ALTANY NIE USTALONO — to altana,
 *   nie wieża. NIE PODAJĘ.
 *   ⚠⚠ DZIEWIĘCIU TABLIC NA PIĘCIU KILOMETRACH NIE UŻYWAM
 *   JAKO KĄTA — „ile razy zaglądać" ociera się o próg
 *   ustalony z góry (Mielno). PODAJĘ JAKO FAKT.
 * — Staw Leśny w Jarach: około 5 ha. Staw w Wilczynie:
 *   17 ha łącznej powierzchni.
 * — Szlak Wzgórz Trzebnickich około 12 km, Trasa Parkowa
 *   5 km. ⚠ ŹRÓDŁO TURYSTYCZNE [NP] — podaję opisowo.
 * — ⚠⚠ LICZBY ZABYTKOWYCH WILLI NIE USTALONO mimo że
 *   miasto bywa opisywane jako willowe. NIE PODAJĘ
 *   ANI LICZBY, ANI OKREŚLENIA.
 *
 * KĄT: OPISUJ TĄ WIELKOŚCIĄ, KTÓRA SIĘ ZMIENIA
 * — o tym, że podpis na słoiku, pojemniku czy torebce
 * jest użyteczny tylko wtedy, gdy podaje wielkość ruchomą.
 * Kąt od dwóch obornickich pomników przyrody: kamień
 * zmierzono do centymetra, a dąb opisano wyłącznie wiekiem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie stoją obok siebie dwa pomniki przyrody
 *   i że opisano je zupełnie inaczej: eratyk przez
 *   wymiary (obwód 12,25 m, 4,64 × 2,90 × 1,01 m),
 *   a dąb „Cesarz" przez wiek (około 400 lat),
 * — ŻE TO NIE JEST NIEDBAŁOŚĆ, TYLKO WŁAŚCIWY WYBÓR:
 *   kamień nie rośnie, więc mierzy się go; dąb rośnie,
 *   więc liczy się go w latach. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI PODPISUJEMY ODWROTNIE: na pojemniku
 *   ląduje pojemność, na torebce gramatura, na słoiku
 *   nazwa — czyli wielkości, które się nie zmieniają
 *   i które i tak widać,
 * — ⚠⚠ ŻE INFORMUJE WYŁĄCZNIE TA WIELKOŚĆ, KTÓRA JEST
 *   RUCHOMA: na zakwasie data, nie pojemność.
 *   Na otwartej przyprawie data otwarcia, nie gramatura.
 *   Na mrożonce data włożenia, nie waga. Na garnku
 *   pojemność — bo w garnku nic się nie zmienia,
 * — ⚠⚠ ŻE ETYKIETA PODAJĄCA WIELKOŚĆ STAŁĄ JEST OZDOBĄ:
 *   ładnie wygląda, a zajrzeć i tak trzeba,
 * — ⚠⚠ ŻE TEST JEST JEDEN I TRWA SEKUNDĘ: czy ta liczba
 *   będzie inna za miesiąc? Jeśli nie — nie warto
 *   jej pisać,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem stała wielkość
 *   jest potrzebna, bo jej po prostu nie widać — przy
 *   przesypanych produktach albo w nieprzezroczystym
 *   pojemniku. Wtedy pisze się obie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z wagą pokazuje
 *   masę w trakcie pracy, więc część rzeczy nie wymaga
 *   już przepisywania. MÓWIĘ WPROST, że to drobiazg,
 *   a nie powód do zakupu.
 *   ⚠⚠⚠ ŻADNYCH USTAWIEŃ ANI PARAMETRÓW WAGI.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt
 *   zajęty (Dobrzany). ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR:
 *   tamten tekst mówi „nie wszystko da się policzyć",
 *   ten mówi „policz to, co się zmienia, i to zapisz".
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO GOTOWANIA NA ZAPAS, ODKŁADANIA PORCJI
 *   I ZAMRAŻARKI JAKO TEMATU — kąt zajęty (Stopnica).
 *   Mrożonkę wymieniam JEDNYM PÓŁZDANIEM jako przykład
 *   etykiety i nie rozwijam.
 * — ⚠⚠⚠ ZERO PRZECHOWYWANIA, TERMINÓW PRZYDATNOŚCI
 *   I ŚWIEŻOŚCI — ⚠⚠⚠ TO NAJWIĘKSZE RYZYKO TEGO TEKSTU,
 *   BO PISZĘ O DATACH. Piszę WYŁĄCZNIE o tym, CO
 *   ZAPISAĆ NA ETYKIECIE, nigdy o tym, JAK DŁUGO coś
 *   trzymać, kiedy wyrzucić ani co jest bezpieczne.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO POD RĘKĄ KONTRA SCHOWANE — kąt zajęty (Płoty).
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno). Dlatego NIE UŻYWAM dziewięciu tablic
 *   na pięciu kilometrach.
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH I PLANOWANIA — kąt pisany
 *   w tej samej fali (Kudowa-Zdrój).
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt pisany w tej samej
 *   fali (Pieszyce).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO SYSTEMU OZNACZEŃ — podaję
 *   WYŁĄCZNIE zasadę i jeden test.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PRZYMIOTNIKA „OBORNICKI" W KONTEKŚCIE
 *   KUCHENNYM — kolizja z nazwą nawozu.
 * — ⚠⚠⚠ ZERO TERMINÓW PRZYDATNOŚCI I BEZPIECZEŃSTWA
 *   ŻYWNOŚCI, mimo że tekst jest o datach.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów i krzyża
 *   milenijnego nie wymieniam.
 * — ⚠⚠ ZERO WĄTKU LECZNICZEGO — obiektu sanatoryjnego
 *   z 1880 r. nie wymieniam.
 * — ⚠ ZERO MAUZOLEUM I WĄTKU POGRZEBOWEGO.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — opisu nie ustalono.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ obwodu pnia dębu „Cesarz" —
 *   nie ustalono.
 * — NIE PODAJĘ wymiarów pałacu Schaubertów ani wysokości
 *   jego ośmiobocznej wieży.
 * — NIE PODAJĘ powierzchni parku pałacowego.
 * — NIE PODAJĘ wysokości altany „Grzybek".
 * — NIE PODAJĘ liczby zabytkowych willi ani nie nazywam
 *   miasta willowym — nie ustalono.
 * — NIE PODAJĘ dokładnego roku elektryfikacji —
 *   źródło podaje przedział 1969–1970.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Jabłecznik trzebnicki" pochodzi
 *   z gminy Trzebnica — TEN SAM POWIAT, INNA GMINA,
 *   a przy tym produkt alkoholowy. Wpisy „z Doliny
 *   Baryczy" są oznaczeniem regionalnym.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Oborniki Śląskie leżą w powiecie trzebnickim,
 *   na wysokości od 170 do 220 m n.p.m.; miasto liczy
 *   8 950 mieszkańców (GUS, 31.12.2024) na 14,5 km²,
 *   a cała gmina miejsko-wiejska 21 145 osób na 154,3 km²,
 *   z dwudziestoma trzema wsiami — poza miastem mieszka
 *   więcej ludzi niż w nim samym,
 * — wieś lokowano na prawie magdeburskim około 1300 r.,
 *   pierwsza wzmianka pisana pochodzi z 1305 i zapisuje
 *   nazwę jako „Obora"; prawa miejskie miejscowość
 *   otrzymała dopiero w połowie XX w.,
 * — pomnikiem przyrody jest tu eratyk o obwodzie 12,25 m
 *   i wymiarach 4,64 × 2,90 × 1,01 m oraz dąb „Cesarz"
 *   liczący około 400 lat,
 * — wzgórze Grzybek ma ponad 100 ha, wznosi się na 217 m
 *   n.p.m., prowadzi przez nie ścieżka o długości 5 km
 *   z dziewięcioma stanowiskami opisanymi tablicami,
 *   a w lutym 2023 r. stanęła na nim drewniana altana
 *   widokowa; sąsiednia Góra Gnieźniec ma 226 m n.p.m.,
 * — Staw Leśny w Jarach ma około 5 ha, a staw w Wilczynie
 *   17 ha,
 * — rozbudowa miejscowości ruszyła w 1835 r. z inicjatywy
 *   Karola Wolfganga Schauberta; pałac Schaubertów
 *   wzniesiono w latach 1864–1865 według projektu
 *   Wilhelma Grapowa, na miejscu obiektu z XVII w.,
 *   a z części historycznej zachowała się właściwie
 *   tylko ośmioboczna wieża,
 * — linię kolejową Wrocław–Poznań otwarto w 1856 r. wraz
 *   z dworcem, drugi tor dobudowano w 1898 — czterdzieści
 *   dwa lata później — a elektryfikację zakończono
 *   na przełomie lat 1969 i 1970; secesyjna poczta przy
 *   ul. Dworcowej pochodzi z 1895 r., a kamienny most
 *   w Bagnie z 1915.
 */
export const OBORNIKI_SLASKIE: CityContent = {
  slug: "oborniki-slaskie",
  h1: "Thermomix Oborniki Śląskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Oborniki Śląskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Obornikach Śląskich: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Oborniki Śląskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Obornikach Śląskich. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Obornik Śląskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu trzech wsi w gminie.",

  highlights: highlightyStandardowe("Oborniki Śląskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kamień zmierzono do centymetra. Dąb opisano wyłącznie wiekiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Obornikach Śląskich – jak wygląda prezentacja?",
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
      id: "wielkosc-ktora-sie-zmienia",
      heading: "Kamień zmierzono, dąb policzono w latach",
      paragraphs: [
        "W gminie stoją dwa pomniki przyrody i opisano je zupełnie inaczej.",
        "Eratyk — głaz narzutowy — ma obwód dwunastu metrów i dwudziestu pięciu centymetrów, a jego wymiary podano jako cztery metry sześćdziesiąt cztery na dwa dziewięćdziesiąt na metr i centymetr. Cztery liczby, wszystkie do centymetra.",
        "Dąb „Cesarz” ma około czterystu lat. Jedna liczba, i to nie wymiar, tylko wiek.",
        "To nie jest niedbałość opisu. To jest właściwy wybór: kamień nie rośnie, więc się go mierzy. Dąb rośnie, więc liczy się go w latach — bo za dwadzieścia lat obwód pnia będzie inny, a wiek będzie wciąż tą samą, poprawnie rosnącą liczbą.",
        "W kuchni podpisujemy dokładnie odwrotnie.",
        "Na pojemniku ląduje pojemność. Na przesypanej torebce gramatura. Na słoiku nazwa tego, co w nim jest. Czyli same wielkości, które się nie zmieniają — a więc takie, których zapisywanie niczego nie wnosi, bo albo widać je przez szkło, albo i tak są zawsze takie same.",
        "Informuje wyłącznie wielkość ruchoma.",
        "Na zakwasie data, nie pojemność słoika. Na otwartej przyprawie data otwarcia, nie gramatura, którą i tak widać na etykiecie producenta. Na czymś schowanym do zamrażarki data włożenia, nie waga. Na garnku pojemność — bo w garnku rzeczywiście nic się nie zmienia i tu stała liczba jest na miejscu.",
        "Etykieta podająca wielkość stałą jest ozdobą. Ładnie wygląda na zdjęciu, a i tak trzeba zajrzeć.",
        "Test jest jeden i trwa sekundę: czy ta liczba będzie inna za miesiąc? Jeśli nie — nie warto jej pisać, bo zajmie miejsce tej, która będzie.",
        "Dopowiem, bo to leży blisko innej rzeczy: nie chodzi o to, że wszystko trzeba policzyć. Chodzi o to, żeby z tego, co i tak liczysz, zapisywać tę jedną wielkość, która się rusza.",
        "Uczciwie o drugiej stronie: czasem stałej wielkości po prostu nie widać — przy produkcie przesypanym do nieprzezroczystego pojemnika trzeba napisać i co to jest, i kiedy tam trafiło. Dwie informacje zamiast jednej, i to jest w porządku. Reguła mówi tylko tyle, że jeśli masz napisać jedną, wybierz ruchomą.",
        "Na koniec o urządzeniu, choć to drobiazg i nie zamierzam z niego robić argumentu.",
        "Thermomix ma wbudowaną wagę, która pokazuje masę w trakcie pracy, więc część rzeczy przestaje wymagać przepisywania na karteczkę — odczytujesz w momencie, w którym to potrzebne. To wygodne i tyle. Nikomu nie polecam kupowania urządzenia dla wagi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Obornikach Śląskich?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy gotujecie raczej z wagą, czy na oko. To zmienia dobór dań na spotkanie bardziej, niż się wydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Obornikach Śląskich"),
    sekcjaRaty("w Obornikach Śląskich"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Obornik Śląskich",
      paragraphs: [
        "Oborniki Śląskie leżą w powiecie trzebnickim, na wysokości od stu siedemdziesięciu do dwustu dwudziestu metrów nad poziomem morza. Samo miasto liczy 8 950 mieszkańców (GUS, 31.12.2024) na czternastu i pół kilometra kwadratowego, a cała gmina miejsko-wiejska ponad dwadzieścia jeden tysięcy osób na stu pięćdziesięciu czterech, z dwudziestoma trzema wsiami — poza miastem mieszka tu więcej ludzi niż w nim samym. Wieś lokowano na prawie magdeburskim około 1300 roku, a pierwsza wzmianka pisana pochodzi z 1305 i zapisuje nazwę jako „Obora”; prawa miejskie miejscowość otrzymała dopiero w połowie dwudziestego wieku. Pomnikami przyrody są tu głaz narzutowy o obwodzie dwunastu metrów i dwudziestu pięciu centymetrów oraz dąb „Cesarz” liczący około czterystu lat. Wzgórze Grzybek ma ponad sto hektarów i wznosi się na dwieście siedemnaście metrów nad poziomem morza; prowadzi przez nie ścieżka o długości pięciu kilometrów z dziewięcioma stanowiskami opisanymi tablicami, a w lutym 2023 roku stanęła na nim drewniana altana widokowa. Sąsiednia Góra Gnieźniec ma dwieście dwadzieścia sześć metrów. Staw Leśny w Jarach liczy około pięciu hektarów, a staw w Wilczynie siedemnaście. Rozbudowa miejscowości ruszyła w 1835 roku z inicjatywy Karola Wolfganga Schauberta, a pałac Schaubertów wzniesiono w latach 1864–1865 według projektu Wilhelma Grapowa, na miejscu obiektu z siedemnastego wieku — z części historycznej zachowała się właściwie tylko ośmioboczna wieża. Linię kolejową Wrocław–Poznań otwarto w 1856 roku wraz z dworcem, drugi tor dobudowano czterdzieści dwa lata później, w 1898, a elektryfikację zakończono na przełomie lat 1969 i 1970. Secesyjna poczta przy ulicy Dworcowej pochodzi z 1895 roku, a kamienny most w Bagnie z 1915.",
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

  districtsHeading: "Do których części Obornik Śląskich dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech wsi w gminie — a gmina ma ponad sto pięćdziesiąt kilometrów kwadratowych i mieszka w niej więcej ludzi poza miastem niż w nim. Do Bagna, Pęgowa, Wielkiej Lipy, Wilczyna i Siemianic też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Oborniki Śląskie też przyjadę",
  nearbyParagraphs: [
    "Trzebnica jest stąd około czternastu kilometrów, Brzeg Dolny i Prusice po osiemnaście, Wołów dwadzieścia dwa, a Wrocław dwadzieścia sześć. Wszędzie dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Trzebnica", "Brzeg Dolny", "Prusice", "Wołów", "Wrocław"],

  about: blokOMnie("do Obornik Śląskich", "w Obornikach Śląskich i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Obornik Śląskich bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech wsi w gminie, łącznie z Bagnem, Pęgowem, Wielką Lipą, Wilczynem i Siemianicami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ważne, żeby przy umawianiu podać pełną nazwę z członem „Śląskie”: Oborniki bez tego członu to miasto w Wielkopolsce, siedziba powiatu obornickiego — a Oborniki Śląskie leżą w powiecie trzebnickim. Nie chodzi też o samą Trzebnicę, do której jest stąd czternaście kilometrów.",
    },
    ...faqWspolne("w Obornikach Śląskich"),
    {
      question: "Co właściwie warto pisać na pojemnikach i słoikach?",
      answer:
        "Tę wielkość, która się zmienia. W gminie Oborniki Śląskie stoją dwa pomniki przyrody opisane zupełnie inaczej: głaz narzutowy przez wymiary, co do centymetra, a dąb „Cesarz” wyłącznie przez wiek — bo kamień nie rośnie, a dąb rośnie. W kuchni robimy odwrotnie i zapisujemy wielkości stałe: pojemność, gramaturę, nazwę tego, co i tak widać przez szkło. Test trwa sekundę: czy ta liczba będzie inna za miesiąc? Jeśli nie, zajmuje miejsce tej, która będzie. Wyjątek jest jeden — gdy produkt jest przesypany do nieprzezroczystego pojemnika, pisze się obie.",
    },
    {
      question: "Czy Thermomix ma wagę?",
      answer:
        "Ma wbudowaną wagę, która pokazuje masę w trakcie pracy, więc część rzeczy nie wymaga już przepisywania na karteczkę — odczytujesz wtedy, kiedy to potrzebne. To wygodne i tyle; nikomu nie polecam kupowania urządzenia dla samej wagi. Na prezentacji widać to zresztą od razu, bo ważymy na bieżąco podczas gotowania.",
    },
  ],

  geo: { lat: 51.3, lng: 16.9167 },
};
