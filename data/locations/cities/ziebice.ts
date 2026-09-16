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
 * ZIĘBICE — powiat ząbkowicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Ziębice.
 * MIASTO: 7 942 mieszkańców (GUS 31.12.2024), 15,1 km²,
 *   gęstość 527,0 os./km².
 * CAŁA GMINA: 15 455 osób, 222,7 km².
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ CO DO JEDNOŚCI —
 *   15 455 / 222,7 = 69,4, a serwis podaje 71.
 *   PISZĘ „OKOŁO SIEDEMDZIESIĘCIU".
 *   ⚠⚠⚠ LICZBY WSI NIE PODAJĘ JAKO PEWNEJ —
 *   polskawliczbach podaje 33 („wsie i osady"),
 *   en.wikipedia 24 wsie, ale wylicza 28 nazw.
 *   PISZĘ „PONAD TRZYDZIEŚCI MIEJSCOWOŚCI".
 * ⚠ Poza miastem mieszka 7 513 osób — niemal tyle samo,
 *   co w mieście.
 * ⚠ GEO: 50,6 / 17,0333. ⚠ 60 km na południe od Wrocławia.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. Ziębice (te) · D. ZIĘBIC (do Ziębic)
 *   ⚠⚠⚠ „DO ZIĘBICÓW" JEST BŁĘDEM — KOŃCÓWKA ZEROWA.
 *   C. Ziębicom · N. Ziębicami · Ms. w Ziębicach
 *   ⚠⚠⚠ ORZECZENIE W LICZBIE MNOGIEJ: „Ziębice LEŻĄ",
 *   „SĄ", „TE Ziębice".
 *   Przymiotnik: ZIĘBICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ PUŁAPKI HOMONIMICZNE:
 *   — ⚠⚠⚠ ZĘBICE (dolnośląskie, gmina Siechnice pod
 *     Wrocławiem) — RÓŻNICA JEDNEJ LITERY. Autokorekta
 *     zamienia jedno w drugie. SPRAWDZIĆ OSOBNYM
 *     PRZEBIEGIEM.
 *   — Zębowice (opolskie) — osobna gmina, bliska forma.
 *   — ⚠⚠ ZĄBKOWICE ŚLĄSKIE — SIEDZIBA POWIATU,
 *     W KTÓRYM LEŻĄ ZIĘBICE. Stale mylone. Do tego
 *     Ząbkowice są dzielnicą Dąbrowy Górniczej.
 *   — Kolizja z rzeczownikiem pospolitym „zięba".
 *   — Henryków — najbardziej znana wieś w gminie;
 *     w wynikach przesłania samą gminę.
 *   — ⚠⚠ W TEJ SAMEJ GMINIE SĄ TRZY PARY BLIŹNIACZE:
 *     Niedźwiedź i Niedźwiednik, Kalinowice Dolne
 *     i Kalinowice Górne, Osina Mała i Osina Wielka.
 *     PRAWDZIWA PUŁAPKA ADRESOWA.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * PRAWA MIEJSKIE — ⚠⚠ ŹRÓDŁA NIEROZSTRZYGAJĄCE:
 *   pierwsza wzmianka 1234; lokacja najpóźniej 1253,
 *   prawdopodobnie około 1250; nadawca nieustalony
 *   (Bolesław II albo Henryk III).
 *   ⚠⚠⚠ NIE PODAJĘ JEDNEJ DATY ANI NADAWCY.
 *   Piszę: „pierwsza wzmianka 1234, lokacja najpóźniej
 *   w 1253 roku, prawdopodobnie około 1250".
 *   ⚠ Źródło: Atlas Historyczny Miast Polskich (UMK) —
 *   najmocniejsze źródło w całym materiale.
 *
 * UKŁAD URBANISTYCZNY — FAKTY (Atlas Historyczny Miast):
 * — Rynek: 155 × 90 m.
 * — Głębokość bloków zabudowy: około 45 m.
 * — Mury: grubość 1,8 m, wysokość około 6 m.
 *   ⚠⚠ ŹRÓDŁO TURYSTYCZNE PODAJE 12 m — UŻYWAM 6 m,
 *   bo Atlas jest źródłem naukowym. ODNOTOWANE.
 * — Odległość między basztami: 17–19 m, stała na całym
 *   obwodzie. Obwód fortyfikacji około 1,5 km [NP].
 * — Pięć wież bramnych: Nyska, Świdnicka, Wrocławska,
 *   Zamkowa, Paczkowska.
 *   ⚠ Bramę Paczkowską datuję na XV w. — źródła podają
 *   1491 albo początek XIV w.
 * — ⚠⚠ MURÓW NIE UŻYWAM JAKO KĄTA — obszar zajęty
 *   (Recz, Moryń, Resko). ⚠⚠ STAŁEGO ODSTĘPU MIĘDZY
 *   BASZTAMI TEŻ NIE — ociera się o dziewięć tablic
 *   na pięciu kilometrach (Oborniki Śląskie, ta sama
 *   fala) i o próg ustalony z góry (Mielno).
 *   PODAJĘ JAKO FAKTY Z WYMIARAMI.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ORZEŁ PIASTOWSKI:
 *   Ceramiczna rzeźba stojąca na stoku od 1971 r.
 *   WYSOKOŚĆ PONAD 9 m, ROZPIĘTOŚĆ SKRZYDEŁ 12 m.
 *   ZŁOŻONA ZE 122 (albo 157) ELEMENTÓW ważących
 *   OD 700 DO 1 500 kg, z rur ceramicznych o średnicy
 *   80–100 cm, wypalanych w temperaturze POWYŻEJ 1 000°C.
 *   ⚠⚠⚠ RZEŹBY TEJ WIELKOŚCI NIE DA SIĘ WYPALIĆ
 *   W CAŁOŚCI — PIEC MA SWÓJ ROZMIAR. Najpierw trzeba
 *   było podzielić ją na kawałki, które się w nim
 *   mieszczą, a potem złożyć na miejscu. TO JEST CAŁY KĄT.
 *   ⚠⚠ WYMIARY SPORNE: wysokość 9,20 / 8 / około 7 m;
 *   rozpiętość 12 / około 10 m; elementów 122 albo 157
 *   (samo źródło podaje obie).
 *   ⚠⚠⚠ PISZĘ „PONAD DZIEWIĘĆ METRÓW", „DWANAŚCIE
 *   METRÓW ROZPIĘTOŚCI" i „PONAD STO DWADZIEŚCIA
 *   ELEMENTÓW" — za przewodnikiem Geoparku, który jako
 *   jedyny podaje też wagi, średnice i temperaturę.
 *   ⚠ TEMPERATURA DOTYCZY WYPAŁU CERAMIKI, NIE KUCHNI.
 *   ⚠⚠⚠ ANI RAZU NIE ODNOSZĘ JEJ DO PIEKARNIKA
 *   ANI DO GOTOWANIA. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * MUZEUM W RATUSZU — FAKTY:
 * — 1931 — powstanie jako muzeum regionalne;
 *   przełom lat 70. XX w. — zawężenie profilu do sprzętu
 *   gospodarstwa domowego; 2023 — nazwa Muzeum Domu
 *   Śląskiego. Dziesięć sal ekspozycyjnych.
 * — Kolekcja Josepha Langera przekazana miastu w 1937 r.
 * — ⚠⚠⚠ CAŁKOWITEJ LICZBY EKSPONATÓW NIE USTALONO —
 *   pięć prób, wszystkie nieudane. NIE PODAJĘ.
 * — ⚠⚠⚠ „NAJWIĘKSZA KOLEKCJA ŻELAZEK W EUROPIE" —
 *   NIE CYTUJĘ. Źródło blogowe, nieweryfikowalne.
 * — ⚠⚠ DATY NAJSTARSZEGO ŻELAZKA (1655) NIE PODAJĘ —
 *   jedno źródło blogowe.
 * — ⚠⚠ MUZEUM NIE JEST KĄTEM — podaję jako fakt,
 *   bo to rzadka i uczciwa zbieżność tematyczna
 *   (muzeum sprzętu domowego), ale morału z niego
 *   nie robię.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — RATUSZ: 1334–1335 pierwsza siedziba władz miejskich;
 *   1344–1377 rozbudowa; 1561 przebudowa (zachowane
 *   rzeźbione fragmenty); 1887–1890 gruntowna przebudowa
 *   (K. Muehlke i E. Poetsch z Berlina); wieża dołem
 *   czworoboczna, górą przechodząca w ośmiobok.
 *   ⚠ WYSOKOŚCI WIEŻY NIE USTALONO — trzy źródła,
 *   żadne nie podaje. NIE PODAJĘ.
 * — PARK MIEJSKI: ponad 20 ha, 275,4 m n.p.m.,
 *   osiem pomnikowych buków.
 *   ⚠⚠ „OSIEM BUKÓW NA DWUDZIESTU HEKTARACH" JAKO KĄT —
 *   NIE UŻYWAM: „oznacz używane zamiast wyrzucać resztę"
 *   ociera się o krótką listę sprzętu (Polanów)
 *   i o etykiety (Oborniki Śląskie, ta sama fala).
 *   PODAJĘ JAKO FAKT.
 * — ZAKŁAD KONSERW: budowa od 1886 r., produkcja od 1898;
 *   150 robotników, w sezonie nawet 250; zakład na 9 ha
 *   gruntu; gospodarstwo 150-morgowe; 1936 — pięćdziesiąta
 *   rocznica.
 *   ⚠⚠ ZATRUDNIENIA SEZONOWEGO NIE UŻYWAM JAKO KĄTA —
 *   „przesuń pracę przed dzień szczytu" ociera się
 *   o gotowanie na zapas (Stopnica). PODAJĘ JAKO FAKT.
 * — FABRYKA CERAMIKI: założona 1873–1874; w 1904 r.
 *   zatrudniała 900 osób na 75 ha.
 * — CUKROWNIA: 1882–1883.
 * — KOLEJ: 1872 do Strzelina i Wrocławia, 1873
 *   do Kamieńca Ząbkowickiego, 1874 do Kłodzka —
 *   trzy odcinki w trzech kolejnych latach.
 * — ZABUDOWA: 1622 — 460 domów mieszczańskich;
 *   1785 — 274 domy prywatne; 1822 — 267 domów
 *   mieszkalnych i 45 pustych parcel.
 *   ⚠⚠ DANYCH Z 1650 R. NIE UŻYWAM — wątek wyludniania.
 * — ⚠⚠ KOŚCIOŁA ŚW. JERZEGO NIE OPISUJĘ jako obiektu
 *   kultu; wymieniam wyłącznie, że wczesnogotycki korpus
 *   z lat około 1265–1275 był pierwotnie DWUNAWOWY —
 *   rozwiązanie eksperymentalne — a później przekształcono
 *   go w bazylikę trójnawową. ⚠ WYMIARÓW NIE USTALONO.
 *   ⚠ OŁTARZA, AMBONY I KAPLICY NIE WYMIENIAM.
 * — ⚠⚠⚠ BROWARU NIE WYMIENIAM ANI RAZU — alkohol.
 *   To najbardziej rozpoznawalny wyrób miasta i temat
 *   jest wykluczony w całości. TWARDA GRANICA.
 * — ⚠⚠ MUSZKOWICKIEGO LASU BUKOWEGO NIE PRZYPISUJĘ
 *   ZIĘBICOM — leży w gminie Ciepłowody.
 * — ⚠ INWENTARZA Z 1913 R. NIE PODAJĘ — zwierzęta
 *   hodowlane, wątek zbędny.
 *
 * KĄT: PIEC MA SWÓJ ROZMIAR
 * — o tym, że liczbę tur wyznacza sprzęt, a nie przepis
 * ani liczba gości. Kąt od ziębickiego Orła: rzeźby
 * o dwunastometrowej rozpiętości nie da się wypalić
 * w całości, więc powstała ze stu dwudziestu kawałków.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ceramiczny Orzeł Piastowski stoi na stoku od 1971
 *   roku, ma ponad dziewięć metrów wysokości i dwanaście
 *   metrów rozpiętości skrzydeł, a złożono go z ponad
 *   stu dwudziestu elementów ważących od siedmiuset
 *   do tysiąca pięciuset kilogramów,
 * — ŻE POWSTAŁ Z KAWAŁKÓW NIE Z WYBORU, TYLKO DLATEGO,
 *   ŻE PIEC MA SWÓJ ROZMIAR. Najpierw trzeba było
 *   podzielić rzeźbę na części, które się w nim mieszczą,
 *   a potem złożyć ją na miejscu. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI PLANUJEMY OD DRUGIEJ STRONY: od liczby
 *   gości i od przepisu, a dopiero na końcu orientujemy
 *   się, że to się nie mieści,
 * — ⚠⚠ ŻE WYMIARY, KTÓRE DZIELĄ ROBOTĘ NA PARTIE, SĄ
 *   ZAWSZE TE SAME I ZAWSZE WŁASNE: ile blach naraz
 *   mieści piekarnik, jaka jest średnica największego
 *   garnka, ile wchodzi do największej miski. To one
 *   wyznaczają liczbę tur,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN: zanim policzysz
 *   porcje, policz tury. Dwie tury zamiast jednej
 *   to nie porażka — to informacja, którą lepiej mieć
 *   dzień wcześniej niż w trakcie,
 * — ⚠⚠ ŻE TO NIE JEST TO SAMO CO PRZELICZANIE PRZEPISU
 *   — ROZGRANICZAM WPROST. Tam chodzi o to, że nie
 *   wszystko schodzi w tej samej proporcji; tu o to,
 *   że rozmiar sprzętu jest stały i dzieli pracę,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: podział na partie ma
 *   koszt — każda tura to osobne rozgrzewanie, osobne
 *   mycie i osobne pilnowanie. Czasem taniej jest zrobić
 *   mniej, niż zrobić w dwóch turach,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix też ma swój rozmiar
 *   naczynia i też narzuca tury. MÓWIĘ TO WPROST.
 *   ⚠⚠⚠ POJEMNOŚCI W LITRACH NIE PODAJĘ — pokazuję
 *   na prezentacji, nie zmyślam parametrów.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZELICZANIA PRZEPISU I SKALI — kąt zajęty
 *   (Kowary, poprzednia fala). ⚠⚠⚠ TO JEST NAJBLIŻSZY
 *   OBSZAR I NAJWIĘKSZE RYZYKO TEGO TEKSTU.
 *   Tamten tekst mówi „nie wszystko schodzi w tej samej
 *   proporcji"; ten mówi „rozmiar sprzętu jest stały
 *   i to on dzieli robotę na tury".
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno). Nie piszę o tym, że coś wygląda
 *   na większe, niż jest.
 * — ⚠⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra).
 * — ⚠⚠⚠ ZERO GOTOWANIA NA ZAPAS I ODKŁADANIA PORCJI —
 *   kąt zajęty (Stopnica). Dlatego NIE UŻYWAM
 *   zatrudnienia sezonowego w zakładzie konserw.
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno).
 * — ⚠⚠ ZERO CZASU ODTWORZENIA — kąt zajęty (Góra).
 * — ⚠⚠ ZERO METODY I KOLEJNOŚCI — kąt zajęty (Milicz).
 * — ⚠⚠ ZERO USTALONEJ PROCEDURY — kąt pisany w tej samej
 *   fali (Środa Śląska).
 * — ⚠⚠ ZERO ETYKIET — kąt pisany w tej samej fali
 *   (Oborniki Śląskie).
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt pisany w tej samej
 *   fali (Pieszyce).
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH — kąt pisany w tej samej
 *   fali (Kudowa-Zdrój).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA —
 *   ⚠⚠⚠ temperatura 1 000°C dotyczy WYPAŁU CERAMIKI
 *   i ani razu nie odnoszę jej do kuchni.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH LICZB KUCHENNYCH — nie podaję,
 *   ile blach, ile litrów ani ile porcji.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO BROWARU I ALKOHOLU.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WYLUDNIANIA — danych o domach opuszczonych
 *   i spadku ludności nie podaję.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościół wyłącznie jako
 *   budowla o układzie naw.
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO.
 * — ⚠ ZERO SUPERLATYWÓW O MUZEUM.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby wsi jako pewnej — 33 albo 24.
 * — NIE PODAJĘ gęstości gminy co do jedności.
 * — NIE PODAJĘ jednej daty lokacji ani nadawcy praw.
 * — NIE PODAJĘ wysokości Orła co do centymetra —
 *   źródła podają 9,20 / 8 / około 7 m.
 * — NIE ROZSTRZYGAM, czy elementów było 122 czy 157 —
 *   samo źródło podaje obie liczby.
 * — NIE PODAJĘ wysokości murów jako 12 m — Atlas
 *   Historyczny Miast podaje około 6 m.
 * — NIE PODAJĘ wysokości wieży ratusza — nie ustalono.
 * — NIE PODAJĘ liczby eksponatów muzeum — nie ustalono.
 * — NIE CYTUJĘ „największej kolekcji żelazek w Europie".
 * — NIE PODAJĘ daty najstarszego żelazka.
 * — NIE PODAJĘ wymiarów kościoła.
 * — NIE PODAJĘ pojemności naczynia urządzenia.
 * — NIE ODNOSZĘ temperatury wypału ceramiki do gotowania.
 * — NIE PRZYPISUJĘ Ziębicom Muszkowickiego Lasu Bukowego
 *   — leży w gminie Ciepłowody.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Miód lipowy krupiec z Ziemi
 *   Ząbkowickiej" to oznaczenie REGIONU siedmiu gmin,
 *   nie gminy Ziębice. NIE PRZYPISUJĘ.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Ziębice leżą w powiecie ząbkowickim, około 60 km
 *   na południe od Wrocławia; miasto liczy 7 942
 *   mieszkańców (GUS, 31.12.2024) na 15,1 km², a cała
 *   gmina miejsko-wiejska 15 455 osób na 222,7 km²,
 *   z ponad trzydziestoma miejscowościami; pierwsza
 *   wzmianka pochodzi z 1234 r., a lokacja miejska
 *   nastąpiła najpóźniej w 1253, prawdopodobnie
 *   około 1250,
 * — rynek ma 155 × 90 m, bloki zabudowy około 45 m
 *   głębokości, mury miejskie 1,8 m grubości i około 6 m
 *   wysokości, a baszty rozstawiono co 17–19 m na obwodzie
 *   liczącym około 1,5 km; wież bramnych było pięć:
 *   Nyska, Świdnicka, Wrocławska, Zamkowa i Paczkowska,
 * — ceramiczny Orzeł Piastowski stoi na stoku od 1971 r.:
 *   ma ponad 9 m wysokości i 12 m rozpiętości skrzydeł,
 *   a złożono go z ponad stu dwudziestu elementów ważących
 *   od 700 do 1 500 kg, wykonanych z rur ceramicznych
 *   o średnicy 80–100 cm i wypalanych w temperaturze
 *   powyżej 1 000°C,
 * — pierwszą siedzibę władz miejskich odnotowano w latach
 *   1334–1335, rozbudowywano ją w latach 1344–1377,
 *   przebudowano w 1561 (zachowały się rzeźbione
 *   fragmenty), a gruntownie przebudowano w latach
 *   1887–1890 według projektu K. Muehlkego i E. Poetscha
 *   z Berlina; wieża jest u dołu czworoboczna,
 *   a wyżej przechodzi w ośmiobok,
 * — w ratuszu działa muzeum: powstało w 1931 r. jako
 *   regionalne, na przełomie lat siedemdziesiątych zawęziło
 *   profil do sprzętu gospodarstwa domowego, a od 2023 r.
 *   nosi nazwę Muzeum Domu Śląskiego i ma dziesięć sal
 *   ekspozycyjnych; kolekcję Josepha Langera przekazano
 *   miastu w 1937 r.,
 * — park miejski ma ponad 20 ha, leży na wysokości
 *   275,4 m n.p.m. i rośnie w nim osiem pomnikowych buków,
 * — zakład konserw budowano od 1886 r., produkcję
 *   uruchomiono w 1898; zatrudniał 150 robotników,
 *   a w sezonie nawet 250, i zajmował 9 ha gruntu;
 *   fabrykę ceramiki założono w latach 1873–1874
 *   i w 1904 r. pracowało w niej 900 osób na 75 ha,
 *   a cukrownię uruchomiono w latach 1882–1883,
 * — kolej doprowadzono do Strzelina i Wrocławia w 1872 r.,
 *   do Kamieńca Ząbkowickiego w 1873, a do Kłodzka
 *   w 1874; w 1622 r. w mieście stało 460 domów
 *   mieszczańskich, w 1785 — 274 domy prywatne,
 *   a w 1822 — 267 domów i 45 pustych parcel.
 */
export const ZIEBICE: CityContent = {
  slug: "ziebice",
  h1: "Thermomix Ziębice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ziębice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Ziębicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ziębice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ziębicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ziębic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie, a jest ich ponad trzydzieści.",

  highlights: highlightyStandardowe("Ziębice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwanaście metrów rozpiętości, złożone ze stu dwudziestu kawałków — bo piec ma swój rozmiar.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ziębicach – jak wygląda prezentacja?",
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
      id: "piec-ma-swoj-rozmiar",
      heading: "Piec ma swój rozmiar",
      paragraphs: [
        "Na stoku nad Ziębicami stoi od 1971 roku ceramiczny Orzeł Piastowski: ponad dziewięć metrów wysokości, dwanaście metrów rozpiętości skrzydeł.",
        "Złożono go z ponad stu dwudziestu elementów. Każdy waży od siedmiuset do tysiąca pięciuset kilogramów, wykonano je z rur ceramicznych o średnicy osiemdziesięciu do stu centymetrów, a wypalono w temperaturze powyżej tysiąca stopni.",
        "Nie podzielono tej rzeźby na kawałki dla efektu. Podzielono ją, bo piec ma swój rozmiar. Najpierw trzeba było ustalić, co się w nim mieści, potem pociąć na to całą konstrukcję, a dopiero na końcu złożyć wszystko na miejscu.",
        "W kuchni planujemy od drugiej strony i dlatego tak często się nie mieści.",
        "Najpierw liczba gości. Potem przepis. Potem zakupy. A dopiero przy blacie okazuje się, że to nie wejdzie na raz — że blachy są dwie, a piekarnik mieści jedną, że garnek jest za mały o dwa litry, że miska nie pomieści podwojonego ciasta.",
        "Wymiary, które naprawdę dzielą robotę, są zawsze te same i zawsze własne. Ile blach naraz mieści Wasz piekarnik. Jaka jest średnica największego garnka. Ile wchodzi do największej miski, którą macie. Nie ambicja i nie przepis — te trzy liczby.",
        "Ruch jest prosty i robi się go dzień wcześniej: zanim policzysz porcje, policz tury.",
        "Dwie tury zamiast jednej to nie porażka. To informacja — i zdecydowanie lepiej mieć ją w przeddzień niż w połowie roboty, kiedy pierwsza blacha już stygnie, a druga czeka.",
        "Dopowiem, bo to leży blisko: nie chodzi tu o przeliczanie przepisu w dół czy w górę i o to, że nie wszystko schodzi w tej samej proporcji. Chodzi o coś prostszego i twardszego — rozmiar sprzętu jest stały i to on dzieli pracę na partie.",
        "Uczciwie o drugiej stronie: podział na tury ma swój koszt i nie zawsze się opłaca. Każda tura to osobne rozgrzewanie, osobne mycie, osobne pilnowanie i osobne stygnięcie tego, co już gotowe. Czasem taniej jest zrobić mniej albo zrobić coś innego, niż robić to samo dwa razy.",
        "Na koniec o moim urządzeniu, uczciwie.",
        "Thermomix też ma swój rozmiar naczynia i też narzuca tury — powyżej pewnej ilości robi się dwa razy i nie ma na to sposobu. Nie podam pojemności z pamięci, bo nie chcę rzucać liczbą, której nie sprawdzę przy Was. Na prezentacji widać to najlepiej: gotujemy dokładnie na tyle osób, ile siada u Was do stołu, i od razu wiadomo, czy mieści się w jednej turze.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ziębicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób siada u Was do stołu na co dzień, a ile przy gościach. Te dwie liczby decydują o tym, co ma sens gotować na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ziębicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Ziębic",
      paragraphs: [
        "Ziębice leżą w powiecie ząbkowickim, około sześćdziesięciu kilometrów na południe od Wrocławia. Samo miasto liczy 7 942 mieszkańców (GUS, 31.12.2024) na piętnastu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad piętnaście tysięcy osób na dwustu dwudziestu dwóch, z ponad trzydziestoma miejscowościami. Pierwsza wzmianka pochodzi z 1234 roku, a lokacja miejska nastąpiła najpóźniej w 1253 — prawdopodobnie około 1250, choć źródła nie rozstrzygają ani roku, ani nadawcy, więc nie będę tego rozstrzygać za nie. Rynek ma sto pięćdziesiąt pięć na dziewięćdziesiąt metrów, bloki zabudowy około czterdziestu pięciu metrów głębokości, mury miejskie metr osiemdziesiąt grubości i około sześciu metrów wysokości, a baszty rozstawiono co siedemnaście do dziewiętnastu metrów na obwodzie liczącym mniej więcej półtora kilometra; wież bramnych było pięć — Nyska, Świdnicka, Wrocławska, Zamkowa i Paczkowska. Ceramiczny Orzeł Piastowski stoi na stoku od 1971 roku: ponad dziewięć metrów wysokości, dwanaście metrów rozpiętości skrzydeł, ponad sto dwadzieścia elementów po siedemset do tysiąca pięciuset kilogramów. Pierwszą siedzibę władz miejskich odnotowano w latach 1334–1335, rozbudowywano ją do 1377, przebudowano w 1561 i gruntownie w latach 1887–1890 według projektu K. Muehlkego i E. Poetscha z Berlina — wieża jest u dołu czworoboczna i wyżej przechodzi w ośmiobok. W ratuszu działa muzeum: powstało w 1931 roku jako regionalne, na przełomie lat siedemdziesiątych zawęziło profil do sprzętu gospodarstwa domowego, a od 2023 nosi nazwę Muzeum Domu Śląskiego i ma dziesięć sal ekspozycyjnych; kolekcję Josepha Langera przekazano miastu w 1937 roku. Park miejski ma ponad dwadzieścia hektarów, leży na wysokości dwustu siedemdziesięciu pięciu metrów nad poziomem morza i rośnie w nim osiem pomnikowych buków. Zakład konserw budowano od 1886 roku, produkcję uruchomiono w 1898; zatrudniał stu pięćdziesięciu robotników, a w sezonie nawet dwustu pięćdziesięciu, i zajmował dziewięć hektarów. Fabrykę ceramiki założono w latach 1873–1874 i w 1904 pracowało w niej dziewięćset osób na siedemdziesięciu pięciu hektarach, a cukrownię uruchomiono w latach 1882–1883. Kolej doprowadzono do Strzelina i Wrocławia w 1872 roku, do Kamieńca Ząbkowickiego w 1873, a do Kłodzka w 1874.",
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

  districtsHeading: "Do których części Ziębic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie — a jest ich ponad trzydzieści, na ponad dwustu dwudziestu kilometrach kwadratowych. Do Henrykowa i do najdalszych wsi też przyjadę, bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę miejscowości: w tej samej gminie leżą Niedźwiedź i Niedźwiednik, Kalinowice Dolne i Kalinowice Górne oraz Osina Mała i Osina Wielka. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Ziębice też przyjadę",
  nearbyParagraphs: [
    "Henryków jest stąd około dziewięciu kilometrów, Ząbkowice Śląskie szesnaście, Kamieniec Ząbkowicki osiemnaście, Strzelin i Paczków po dwadzieścia pięć, a Wrocław sześćdziesiąt. Wszędzie dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Ząbkowice Śląskie", "Kamieniec Ząbkowicki", "Strzelin", "Paczków", "Wrocław"],

  about: blokOMnie("do Ziębic", "w Ziębicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ziębic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie, a jest ich ponad trzydzieści — łącznie z Henrykowem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Ziębice w powiecie ząbkowickim, nie o Zębice w gminie Siechnice pod Wrocławiem ani o Zębowice w opolskiem — różnica to jedna litera i autokorekta chętnie ją zamienia. Nie chodzi też o same Ząbkowice Śląskie, choć to siedziba naszego powiatu. W gminie są trzy pary bliźniaczych nazw, więc warto podać pełną nazwę wsi.",
    },
    ...faqWspolne("w Ziębicach"),
    {
      question: "Gotuję dla większej grupy i wiecznie coś się nie mieści. Jak to zaplanować?",
      answer:
        "Zanim policzysz porcje, policz tury. Ceramiczny Orzeł Piastowski nad Ziębicami ma dwanaście metrów rozpiętości i złożono go z ponad stu dwudziestu elementów — nie dla efektu, tylko dlatego, że piec ma swój rozmiar i najpierw trzeba było ustalić, co się w nim mieści. W kuchni działają trzy własne liczby: ile blach naraz mieści Wasz piekarnik, jaka jest średnica największego garnka i ile wchodzi do największej miski. Dwie tury zamiast jednej to nie porażka, tylko informacja — lepiej mieć ją dzień wcześniej. Uczciwie: każda tura kosztuje osobne rozgrzewanie i mycie, więc czasem taniej zrobić mniej.",
    },
    {
      question: "Ile osób da się obsłużyć jednym gotowaniem w Thermomixie?",
      answer:
        "Do pewnej ilości za jednym razem, powyżej robi się dwie tury — naczynie ma swój rozmiar, tak samo jak każdy garnek. Nie podam pojemności z pamięci, bo nie chcę rzucać liczbą, której nie sprawdzę przy Was. Na prezentacji widać to najlepiej, bo gotujemy dokładnie na tyle osób, ile siada u Was do stołu.",
    },
  ],

  geo: { lat: 50.6, lng: 17.0333 },
};
