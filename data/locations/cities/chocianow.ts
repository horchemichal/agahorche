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
 * CHOCIANÓW — powiat polkowicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Chocianów.
 * MIASTO: 7 316 mieszkańców (GUS 31.12.2024), 9,0 km²,
 *   gęstość 812,9 os./km².
 *   ⚠ KONTROLA: 9,0 × 812,9 = 7 316,1 — DOMYKA SIĘ
 *   IDEALNIE. Najlepiej zweryfikowana para w tej fali.
 * CAŁA GMINA: 12 351 osób, 221,7 km², 13 wsi —
 *   Brunów, Chocianowiec, Jabłonów, Kąty, Michałów,
 *   Ogrodzisko, Parchów, Pogorzeliska, Raków, Szklary
 *   Dolne, Trzebnice, Trzmielów, Żabice.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Miasto zajmuje 4,1 % powierzchni gminy, a mieszka
 *   w nim 59,2 % jej ludności. PODAJĘ JAKO FAKT,
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — proporcje miasta do gminy
 *   to obszar ograny.
 * ⚠ GEO: 51,4 / 15,9.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI — CHOCIANÓW ≠ CHOJNÓW.
 *   Oba miasta są dolnośląskie, leżą w sąsiednich
 *   powiatach (polkowicki / legnicki) i — co najgorsze —
 *   STOJĄ NA TEJ SAMEJ TRASIE KOLEJOWEJ. Nazwa relacji
 *   brzmi dosłownie „Legnica – Chojnów – Chocianów".
 *   ⚠⚠⚠ CHOJNÓW JEST JUŻ OPISANY W TYM CYKLU.
 *   ⚠⚠⚠ ZAWSZE PISZĘ „CHOCIANÓW W POWIECIE POLKOWICKIM"
 *   PRZY PIERWSZYM WYSTĄPIENIU. NIGDY NIE SKRACAM.
 *   ⚠⚠⚠ PRZY KOREKCIE ZROBIĆ OSOBNY PRZEBIEG
 *   WYSZUKIWANIA CIĄGU „Choj".
 *   ⚠⚠ Nie mylić też przymiotników: „chocianowski"
 *   kontra „chojnowski" — jak „kowarski/kowalski".
 *   ⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM —
 *   forma niepotwierdzona urzędowo, a ryzyko kolizji
 *   zbyt duże. Piszę pełną nazwą.
 *
 * ⚠⚠ DRUGA PUŁAPKA — PARA W TEJ SAMEJ GMINIE:
 *   CHOCIANÓW i CHOCIANOWIEC (wieś 5 km od miasta).
 *   ⚠ Chocianowiec ma wzmiankę z 1286 r. — o jedenaście
 *   lat WCZEŚNIEJSZĄ niż wzmianka o samym Chocianowie.
 *   Wieś w gminie jest w źródłach starsza niż miasto,
 *   od którego gmina bierze nazwę. PODAJĘ JAKO FAKT.
 *
 * ⚠⚠ TRZECIA PUŁAPKA — KOLIZJE WEWNĄTRZ TEJ SAMEJ FALI:
 *   — wieś KĄTY w gminie Chocianów, a KĄTY WROCŁAWSKIE
 *     to osobne miasto pisane w tej samej fali;
 *   — wieś BRUNÓW w gminie Chocianów ORAZ wieś BRUNÓW
 *     w gminie Lwówek Śląski — też pisanej w tej fali.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ Szklary Dolne — nazwa sugeruje hutę szkła.
 *   POTWIERDZONA JEST WYŁĄCZNIE HUTA ŻELAZA (1854).
 *   NIE WYPROWADZAM WĄTKU SZKLARSKIEGO Z NAZWY WSI.
 *
 * ⚠⚠ ODMIANA — WYMIANA ó → o W PRZYPADKACH ZALEŻNYCH:
 *   M. Chocianów · D. CHOCIANOWA · Ms. W CHOCIANOWIE
 *   N. Chocianowem
 *   ⚠⚠⚠ „W CHOCIANÓWIE" JEST BŁĘDEM ORTOGRAFICZNYM.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM. To ta sama pułapka
 *   co przy Sycowie.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠⚠ ŹRÓDŁO ODRZUCONE: infodlapolaka.pl podaje dla
 *   Chocianowa ludność 3 604 przy zweryfikowanych 7 316 —
 *   MNIEJ NIŻ POŁOWĘ. Podana przez nie data praw
 *   miejskich (1298) jest przez to bezwartościowa.
 *   NIE CYTUJĘ TEGO ŹRÓDŁA W ŻADNEJ KWESTII.
 *
 * PRAWA MIEJSKIE — ⚠⚠ STAN NIEPEŁNY:
 *   Źródło podaje „PONOWNE uzyskanie praw miejskich
 *   w 1894 r." — co znaczy, że miasto prawa miało
 *   wcześniej i je utraciło. ⚠⚠⚠ ANI ROKU PIERWOTNEGO
 *   NADANIA, ANI ROKU UTRATY NIE USTALONO (kalendarium
 *   na cosanow.pl wpadało w pętlę przekierowań).
 *   ⚠⚠⚠ PISZĘ WYŁĄCZNIE: „odzyskał prawa miejskie
 *   w 1894 roku". NIE TWIERDZĘ, że był miastem od 1297.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1297 — pierwsza wzmianka; w tym samym roku książę
 *   Bolko I Surowy rozpoczyna budowę warowni, ukończonej
 *   w 1299.
 * — 1286 — pierwsza wzmianka o Chocianowcu jako zameczku
 *   myśliwskim.
 * — 1444–1507 — warownia w rękach Dornheimów.
 * — 1599 — nowa siedziba nowożytna; około 1600 gruntowna
 *   przebudowa, po której obiekt traci charakter zamkowy.
 * — 1728–1732 — przebudowa na barokowy pałac, inwestor
 *   Melchior Gottlob von Redern; korpus dwukondygnacyjny,
 *   dwie piętrowe oficyny, osiowe założenie parkowe
 *   z alejami i prostokątnym stawem.
 *   ⚠⚠ NAZWISKA ARCHITEKTA NIE PODAJĘ — źródła
 *   rozchodzą się, czy był projektantem, czy kierownikiem
 *   prac.
 *   ⚠⚠ LICZBY OSI NIE PODAJĘ — 9 dla fasady głównej
 *   i 7 dla parkowej mogą opisywać różne elewacje,
 *   ale źródła tego nie mówią wprost.
 *   ⚠⚠ POWIERZCHNI PARKU NIE USTALONO.
 *   ⭐ KWADRATOWA WIEŻA GOTYCKA — pozostałość warowni
 *   z lat 1297–1299 — STOI WEWNĄTRZ BAROKOWEGO PAŁACU
 *   i jest zwieńczona rokokowym hełmem z latarnią.
 *   Różnica wieku między wieżą a pałacem to około
 *   430 lat. PODAJĘ JAKO FAKT.
 *   ⚠⚠ CZTERECH KAMPANII REMONTOWYCH PAŁACU (1913,
 *   1937–1939, 1954–1959, 1965–1966) NIE UŻYWAM —
 *   to niemal dokładnie zajęty kąt „cykle renowacji
 *   i powroty do naprawy" (Chojnów — czyli akurat
 *   to miasto, z którym Chocianów się myli!).
 *   TWARDA GRANICA.
 * — 1854 — huta żelaza.
 * — 1894 — ODZYSKANIE PRAW MIEJSKICH.
 * — 1951 — fabryka obrabiarek.
 * — 1973 — uruchomienie pierwszej w Polsce produkcji
 *   tokarki sterowanej numerycznie.
 *   ⚠⚠ NAZW ZAKŁADÓW NIE PODAJĘ — ZERO NAZW FIRM.
 *   ⚠⚠ CIĄGU „materiał → narzędzie → zapis procedury"
 *   NIE UŻYWAM JAKO KĄTA — ociera się o ustaloną
 *   procedurę (Środa Śląska, poprzednia fala).
 *   PODAJĘ JAKO TRZY DATY.
 * — 2007–2008 — rewaloryzacja rynku i odnowienie parku.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — STACJA I DWIE LINIE:
 *   Stację otwarto 1 PAŹDZIERNIKA 1890 r. i obsługiwały
 *   ją DWIE RÓŻNE LINIE KOLEJOWE.
 *   Jedną z nich — Lubin–Chocianów — ZAMKNIĘTO W 1987
 *   i FIZYCZNIE ROZEBRANO W 1992. Nie wróciła.
 *   A mimo to stacja WZNOWIŁA RUCH PASAŻERSKI
 *   11 GRUDNIA 2022 — sto trzydzieści dwa lata
 *   po otwarciu — bo dochodziła do niej DRUGA,
 *   ZUPEŁNIE INNA LINIA, z innego kierunku.
 *   ⚠ Stacja ma jeden peron.
 *   ⚠⚠⚠ NAZWY RELACJI „Legnica – Chojnów – Chocianów"
 *   W TEKŚCIE NIE UŻYWAM — czytelnik pomyli oba miasta.
 *   Piszę „oba czynne połączenia prowadzą przez Legnicę".
 *   PUNKT PRZETRWAŁ NIE DLATEGO, ŻE MIAŁ ZAPASOWY TOR
 *   TEGO SAMEGO RODZAJU, TYLKO DLATEGO, ŻE DOCHODZIŁY
 *   DO NIEGO DWIE RÓŻNE DROGI. To jest cały kąt.
 *
 * KĄT: ZAPASOWE POWINNO BYĆ INNE, NIE TAKIE SAMO
 * — o tym, że duplikat nie jest zabezpieczeniem, bo dzieli
 * los oryginału. Kąt od chocianowskiej stacji: jedna
 * z dwóch linii zniknęła na zawsze, a ruch wrócił
 * po stu trzydziestu dwóch latach dzięki tej drugiej,
 * zupełnie innej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że stację otwarto 1 października 1890 roku i że
 *   obsługiwały ją dwie różne linie,
 * — że linię Lubin–Chocianów zamknięto w 1987
 *   i rozebrano w 1992, a mimo to 11 grudnia 2022 ruch
 *   pasażerski wrócił — dzięki tej drugiej,
 * — ŻE PUNKT PRZETRWAŁ NIE DZIĘKI ZAPASOWEMU TOROWI
 *   TEGO SAMEGO RODZAJU, TYLKO DZIĘKI DRODZE Z INNEGO
 *   KIERUNKU. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI BUDUJEMY ZAPAS PRZEZ DUPLIKAT:
 *   drugi taki sam nóż, druga taka sama deska, dwie
 *   identyczne miski,
 * — ⚠⚠ ŻE TO NIE JEST ZABEZPIECZENIE, TYLKO TA SAMA
 *   DROGA POŁOŻONA DWA RAZY OBOK SIEBIE: gdy deska jest
 *   w zmywarce, druga deska też jest w zmywarce,
 *   bo używa się ich razem i myje razem,
 * — ⚠⚠ ŻE PRAWDZIWY ZAPAS TO DRUGA, INNA DROGA DO TEJ
 *   SAMEJ CZYNNOŚCI: nie druga deska, tylko duży talerz
 *   albo odwrócona blacha; nie drugi nóż, tylko nożyczki
 *   kuchenne; nie drugie sitko, tylko czysta ściereczka,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN: przejrzyj rzeczy,
 *   które masz w dwóch sztukach, i przy każdej zapytaj,
 *   czy to zapas, czy tylko ten sam tor położony
 *   podwójnie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: duplikaty bywają
 *   potrzebne z zupełnie innego powodu — bo czegoś
 *   używa się DWÓCH NARAZ, a nie na zmianę. Dwie
 *   jednakowe blachy to nie zapas, tylko komplet,
 *   i to jest w porządku. Chodzi tylko o to, żeby
 *   nie mylić kompletu z zabezpieczeniem,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie ma duplikatu
 *   i nie będzie miało. MÓWIĘ TO WPROST: dlatego warto
 *   zostawić sobie drugą, inną drogę do rzeczy, które
 *   robi się w nim najczęściej — nie po to, żeby jej
 *   używać, tylko żeby istniała.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CYKLI RENOWACJI I POWROTÓW DO NAPRAWY —
 *   kąt zajęty (CHOJNÓW, czyli miasto, z którym
 *   Chocianów się myli). Dlatego NIE UŻYWAM czterech
 *   kampanii remontowych pałacu.
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie mówię, ile rzeczy mieć.
 * — ⚠⚠⚠ ZERO MIEJSCA CELOWO PUSTEGO JAKO REZERWY —
 *   kąt zajęty (Wołów). ⚠⚠ TO NAJBLIŻSZY OBSZAR:
 *   tamten tekst mówi o REZERWIE MIEJSCA, ten
 *   o REZERWIE DROGI. ROZGRANICZAM JAWNIE.
 * — ⚠⚠ ZERO UNIKATÓW I STAŁYCH ADRESÓW — kąt pisany
 *   w tej samej fali (Lwówek Śląski). Tamten mówi,
 *   co ginie; ten mówi, czym to zastąpić.
 *   ROZGRANICZAM.
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt zajęty (Pieszyce).
 * — ⚠⚠ ZERO USTALONEJ PROCEDURY — kąt zajęty
 *   (Środa Śląska). Dlatego NIE UŻYWAM ciągu
 *   huta → obrabiarki → sterowanie numeryczne.
 * — ⚠⚠ ZERO STAREGO I NOWEGO OBOK SIEBIE — kąt zajęty
 *   (Brzeg Dolny). Dlatego wieżę gotycką w barokowym
 *   pałacu podaję JAKO FAKT, bez morału.
 * — ⚠⚠ ZERO DOKŁADANIA PO OKRESIE UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY ZALECANYCH ZAMIENNIKÓW — podaję trzy
 *   przykłady i zasadę, nie katalog.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o desce i ściereczce NIE MÓWIĘ NIC
 *   o higienie, bakteriach ani o tym, czego na czym
 *   wolno kroić.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza formą „Kotzenau" — ⚠⚠⚠ której też NIE PODAJĘ).
 * — ⚠⚠ ZERO WĄTKU OBRONNEGO — warownię podaję jako datę
 *   i jako wieżę, nigdy jako fortyfikację.
 * — ⚠⚠ ZERO UPADKU PRZEMYSŁU I BEZROBOCIA.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku pierwotnego nadania praw miejskich
 *   ani roku ich utraty — nie ustalono.
 * — NIE TWIERDZĘ, że Chocianów był miastem od 1297 roku.
 * — NIE PODAJĘ nazwiska architekta pałacu — źródła
 *   rozchodzą się co do jego roli.
 * — NIE PODAJĘ liczby osi elewacji.
 * — NIE PODAJĘ powierzchni parku.
 * — NIE PODAJĘ nazw zakładów przemysłowych.
 * — NIE WYPROWADZAM wątku szklarskiego z nazwy wsi
 *   Szklary Dolne — potwierdzona jest huta żelaza.
 * — NIE CYTUJĘ serwisu infodlapolaka.pl.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Miodowe pierniczki z Przemkowa"
 *   pochodzą z innej gminy tego samego powiatu,
 *   a „miód wrzosowy z Borów Dolnośląskich" to oznaczenie
 *   kompleksu leśnego. NIE PRZYPISUJĘ ICH CHOCIANOWOWI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chocianów leży w powiecie polkowickim; miasto liczy
 *   7 316 mieszkańców (GUS, 31.12.2024) na 9,0 km²,
 *   a cała gmina miejsko-wiejska 12 351 osób na 221,7 km²,
 *   z trzynastoma wsiami,
 * — pierwsza wzmianka pochodzi z 1297 r.; w tym samym
 *   roku książę Bolko I Surowy rozpoczął budowę warowni,
 *   ukończonej w 1299; wieś Chocianowiec, leżąca 5 km
 *   od miasta, ma wzmiankę starszą — z 1286 r.,
 * — w latach 1444–1507 warownia należała do Dornheimów,
 *   w 1599 powstała nowa siedziba, a około 1600 obiekt
 *   stracił charakter zamkowy; w latach 1728–1732
 *   przebudowano go na barokowy pałac z inicjatywy
 *   Melchiora Gottloba von Redern — z dwukondygnacyjnym
 *   korpusem, dwiema piętrowymi oficynami i osiowym
 *   założeniem parkowym z prostokątnym stawem;
 *   kwadratowa gotycka wieża, pozostałość warowni
 *   z lat 1297–1299, stoi wewnątrz pałacu i ma rokokowy
 *   hełm z latarnią,
 * — hutę żelaza zbudowano w 1854 r., prawa miejskie
 *   miasto odzyskało w 1894, fabrykę obrabiarek
 *   uruchomiono w 1951, a w 1973 ruszyła w niej pierwsza
 *   w Polsce produkcja tokarki sterowanej numerycznie;
 *   rynek i park odnowiono w latach 2007–2008,
 * — stację kolejową otwarto 1 października 1890 r.
 *   i obsługiwały ją dwie linie; linię Lubin–Chocianów
 *   zamknięto w 1987 i rozebrano w 1992, a ruch
 *   pasażerski wrócił na stację 11 grudnia 2022 —
 *   dzięki drugiej z nich; stacja ma jeden peron,
 *   a oba czynne połączenia prowadzą przez Legnicę.
 */
export const CHOCIANOW: CityContent = {
  slug: "chocianow",
  h1: "Thermomix Chocianów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chocianów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chocianowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chocianów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chocianowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chocianowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzynastu wsi w gminie.",

  highlights: highlightyStandardowe("Chocianów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedna linia zniknęła na zawsze. Ruch wrócił po stu trzydziestu dwóch latach — drugą.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chocianowie – jak wygląda prezentacja?",
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
      id: "zapas-inna-droga",
      heading: "Zapasowe powinno być inne, nie takie samo",
      paragraphs: [
        "Stację w Chocianowie otwarto 1 października 1890 roku i obsługiwały ją dwie różne linie kolejowe.",
        "Jedną z nich, tę z Lubina, zamknięto w 1987 roku, a w 1992 fizycznie rozebrano. Nie wróciła i nie wróci — po torze nie ma śladu.",
        "A mimo to 11 grudnia 2022 roku na stację wrócił ruch pasażerski. Sto trzydzieści dwa lata po otwarciu. Dzięki drugiej linii, z zupełnie innego kierunku.",
        "Punkt przetrwał nie dlatego, że miał zapasowy tor tego samego rodzaju. Przetrwał, bo dochodziły do niego dwie różne drogi.",
        "W kuchni robimy to odwrotnie i prawie zawsze.",
        "Zapas budujemy przez duplikat: drugi taki sam nóż, druga taka sama deska, dwie identyczne miski, dwie jednakowe łopatki. Wygląda to rozsądnie i daje poczucie zabezpieczenia.",
        "Tylko że to nie jest zabezpieczenie. To ta sama droga położona dwa razy obok siebie.",
        "Bo kiedy deska jest w zmywarce, druga deska też jest w zmywarce. Używa się ich razem, brudzą się razem i razem trafiają do mycia — a potem obie stoją mokre. Duplikat dzieli los oryginału, bo dzieli z nim cały cykl użycia.",
        "Prawdziwy zapas wygląda inaczej: do tej samej czynności musi prowadzić druga, inna droga.",
        "Nie druga deska, tylko duży płaski talerz albo odwrócona blacha. Nie drugi nóż, tylko nożyczki kuchenne. Nie drugie sitko, tylko czysta ściereczka rozpięta na misce. Żadna z tych rzeczy nie jest tak dobra jak oryginał — i nie musi być. Ma być dostępna wtedy, gdy oryginału nie ma.",
        "Ruch jest prosty: przejrzyj rzeczy, które masz w dwóch sztukach, i przy każdej zapytaj, czy to naprawdę zapas, czy tylko ten sam tor położony podwójnie.",
        "Uczciwie o drugiej stronie, bo łatwo tę zasadę przegiąć: duplikaty bywają potrzebne z zupełnie innego powodu — bo czegoś używa się dwóch naraz, a nie na zmianę. Dwie jednakowe blachy to nie zapas, tylko komplet, i nikt nie powinien z tego rezygnować. Chodzi wyłącznie o to, żeby nie mylić kompletu z zabezpieczeniem.",
        "Na koniec o urządzeniu, i to nie brzmi jak reklama, bo nią nie jest.",
        "Thermomix nie ma duplikatu i nie będzie miał — nikt nie kupuje drugiego na zapas. Dlatego warto świadomie zostawić sobie drugą, inną drogę do tych rzeczy, które robi się w nim najczęściej. Nie po to, żeby jej używać. Po to, żeby istniała.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chocianowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co robicie w kuchni najczęściej. Z tego wynika, dla czego w ogóle warto mieć drugą drogę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chocianowie"),
    sekcjaRaty("w Chocianowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chocianowa",
      paragraphs: [
        "Chocianów leży w powiecie polkowickim. Samo miasto liczy 7 316 mieszkańców (GUS, 31.12.2024) na dziewięciu kilometrach kwadratowych — to jedna z nielicznych par liczb, które domykają się co do jedności — a cała gmina miejsko-wiejska ponad dwanaście tysięcy osób na dwustu dwudziestu jeden, z trzynastoma wsiami. Pierwsza wzmianka pochodzi z 1297 roku; w tym samym roku książę Bolko I Surowy rozpoczął tu budowę warowni, ukończonej dwa lata później. Ciekawostka: wieś Chocianowiec, leżąca pięć kilometrów od miasta, ma wzmiankę starszą — z 1286 roku. W latach 1444–1507 warownia należała do Dornheimów, w 1599 powstała nowa siedziba, a około 1600 obiekt stracił charakter zamkowy. W latach 1728–1732 przebudowano go na barokowy pałac z inicjatywy Melchiora Gottloba von Redern: dwukondygnacyjny korpus, dwie piętrowe oficyny, osiowe założenie parkowe z alejami i prostokątnym stawem. Kwadratowa gotycka wieża, pozostałość warowni sprzed czterystu trzydziestu lat wcześniejszej, stoi wewnątrz tego pałacu i ma rokokowy hełm z latarnią. Hutę żelaza zbudowano w 1854 roku, prawa miejskie miasto odzyskało w 1894 — źródła mówią wyraźnie o odzyskaniu, ale ani roku pierwotnego nadania, ani roku utraty nie podają, więc ich tu nie wpiszę. Fabrykę obrabiarek uruchomiono w 1951 roku, a w 1973 ruszyła w niej pierwsza w Polsce produkcja tokarki sterowanej numerycznie. Rynek i park odnowiono w latach 2007–2008.",
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

  districtsHeading: "Do których części Chocianowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzynastu wsi w gminie — a gmina jest duża, ponad dwieście dwadzieścia kilometrów kwadratowych. Do Chocianowca, Parchowa, Szklar Dolnych i najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chocianów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Polkowic, Lubina, Przemkowa, Legnicy i Bolesławca — wszędzie bezpłatnie, tak samo jak w samym mieście. Oba czynne połączenia kolejowe z Chocianowa prowadzą zresztą przez Legnicę.",
  ],
  nearbyTowns: ["Polkowice", "Lubin", "Przemków", "Legnica", "Bolesławiec"],

  about: blokOMnie("do Chocianowa", "w Chocianowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chocianowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzynastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ważne przy umawianiu: chodzi o Chocianów w powiecie polkowickim, nie o Chojnów w powiecie legnickim — oba miasta są dolnośląskie, obie nazwy zaczynają się tak samo i kończą tak samo, a do tego stoją na tej samej trasie kolejowej. W gminie leżą też wieś Kąty (co nie ma związku z Kątami Wrocławskimi) i wieś Brunów — wieś o tej samej nazwie jest również w gminie Lwówek Śląski. A pięć kilometrów od miasta leży Chocianowiec, który też bywa mylony z samym Chocianowem.",
    },
    ...faqWspolne("w Chocianowie"),
    {
      question: "Czy warto mieć w kuchni drugi taki sam nóż albo drugą deskę na zapas?",
      answer:
        "Zwykle nie, bo duplikat dzieli los oryginału: kiedy deska jest w zmywarce, druga deska też jest w zmywarce. Chocianowską stację otwarto w 1890 roku i obsługiwały ją dwie różne linie; jedną rozebrano w 1992 i nie wróciła, a ruch pasażerski wrócił na stację w grudniu 2022 dzięki tej drugiej, z zupełnie innego kierunku. W kuchni działa to tak samo: zapasem jest nie druga deska, tylko duży płaski talerz albo odwrócona blacha; nie drugi nóż, tylko nożyczki kuchenne. Wyjątek: dwie jednakowe blachy to nie zapas, tylko komplet — używa się ich naraz i to zupełnie inna sprawa.",
    },
    {
      question: "Co jeśli Thermomix akurat jest zajęty albo niedostępny?",
      answer:
        "Nie ma drugiego i nikt nie kupuje zapasowego, więc warto mieć świadomie zostawioną inną drogę do tych rzeczy, które robi się w nim najczęściej — nie po to, żeby jej używać, tylko żeby istniała. Na prezentacji zwykle się to okazuje samo: gotujemy naprawdę i widać, które czynności całkiem przenoszą się do urządzenia, a które i tak zostają na blacie.",
    },
  ],

  geo: { lat: 51.4, lng: 15.9 },
};
