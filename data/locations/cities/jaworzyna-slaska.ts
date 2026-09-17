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
 * JAWORZYNA ŚLĄSKA — powiat świdnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Jaworzyna Śląska — ta sama pułapka
 *   kubełka „pozostałe gminy" co przy Żarowie.
 * MIASTO: 5 020 mieszkańców (GUS 31.12.2024),
 *   gęstość 1 156,7 os./km² — najwyższa w tej fali.
 *   ⚠⚠ POWIERZCHNIĘ PODAJĘ JAKO 4,34 km², NIE 4,3 —
 *   5 020 / 4,34 = 1 156,7 ✔, a 5 020 / 4,3 = 1 167,4 ✘.
 * CAŁA GMINA: 10 229 osób, 67,5 km², gęstość 151 (domyka
 *   się), 12 wsi — Bagieniec, Bolesławice, Czechy,
 *   Milikowice, Nowice, Nowy Jaworów, Pasieczna, Pastuchów,
 *   Piotrowice Świdnickie, Stary Jaworów, Tomkowa, Witków.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚĆ: 220–238 m n.p.m. ⚠ GEO: 50,9129 / 16,4322.
 *
 * ⚠⚠ ODMIANA — NAZWA DWUCZŁONOWA, OBA CZŁONY ODMIENIANE:
 *   D. Jaworzyny Śląskiej · Ms. w Jaworzynie Śląskiej
 *   B. Jaworzynę Śląską · N. Jaworzyną Śląską
 *   ⚠⚠⚠ „W JAWORZYNIE ŚLĄSKA" JEST BŁĘDEM — drugi człon
 *   odmienia się przymiotnikowo. SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM.
 *   Rodzaj żeński, liczba pojedyncza: „Jaworzyna Śląska
 *   LEŻY", „TA Jaworzyna Śląska".
 *   ⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM — forma
 *   „jaworzyński" niepotwierdzona urzędowo [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie ustalono.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠⚠ JAWORZNO (śląskie, miasto ok. 89 tys.) —
 *     najgroźniejsza kolizja, inne województwo.
 *   — ⚠⚠ JAWORZYNA KRYNICKA (szczyt i ośrodek narciarski
 *     w Beskidzie Sądeckim) — silnie przechwytuje wyniki.
 *   — JAWOR — miasto w tym samym województwie, ok. 20 km.
 *   — Jaworzyna Tatrzańska, Jaworzynka.
 *   — „Jaworzyna" jako pospolita nazwa hali i szczytu
 *     w Karpatach.
 *   — Königszelt — nazwa historyczna, pod nią miejscowość
 *     figuruje w starszych katalogach kolejowych.
 *   — ⚠ Witków (wieś w tej gminie) występuje w Polsce
 *     wielokrotnie, m.in. w powiecie polkowickim.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠ PUNKT ZEROWY — RZECZ WYJĄTKOWA W CAŁYM CYKLU:
 *   JAWORZYNA ŚLĄSKA NIE MA „PIERWSZEJ WZMIANKI", BO PRZED
 *   STACJĄ NIE BYŁO TU MIEJSCOWOŚCI. Osada wyrosła przy
 *   węźle kolejowym. ⚠⚠⚠ NIE PISZĘ O PIERWSZEJ WZMIANCE —
 *   piszę o dacie uruchomienia stacji.
 *   STACJA: listopad 1843 r. (podawana data dzienna:
 *   29 października 1843), na linii Wrocław–Świebodzice.
 *   SAMODZIELNA GMINA: 1868 — 25 lat po stacji.
 *   PRAWA MIEJSKIE: 1954 — 111 lat po stacji.
 *   ⚠⚠ DNIA ANI AKTU NADANIA NIE USTALONO — nie podaję.
 *   ⚠⚠⚠ ROKU 1761 (wojska na polach późniejszej Jaworzyny)
 *   NIE WYMIENIAM — wątek wojskowy, mimo że źródła
 *   zaczynają od tego historię miasta. TWARDA GRANICA.
 *
 * WĘZEŁ KOLEJOWY — FAKTY:
 * — 1843 pierwszy kierunek (Wrocław–Świebodzice),
 *   1844 drugi (Świdnica), 1853 linia Wałbrzych–Legnica,
 *   1856 czwarty kierunek. CZTERY KIERUNKI W TRZYNAŚCIE LAT.
 * — ⚠ Elektryfikacja odcinka do Świebodzic: 1 kwietnia 1917
 *   [NP] — podaję ostrożnie albo pomijam.
 * — ⚠⚠ „CZTERY KIERUNKI NA CZTERECH KILOMETRACH
 *   KWADRATOWYCH" JAKO KĄT — NIE UŻYWAM: przepustowość
 *   kontra powierzchnia ociera się o gęstość i przestrzeń
 *   (obszar zajęty wielokrotnie) oraz o sumę kontra
 *   ciągłość (Siechnice). PODAJĘ JAKO FAKT.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PAROWOZOWNIA WACHLARZOWA:
 *   PIERWSZA HALA: koniec lat 80. / początek 90. XIX w.,
 *   6 STANOWISK. Obrotnicę zainstalowano w 1897 r.
 *   DRUGA, OBECNA HALA: 1906–1907, 19 STANOWISK,
 *   OBROTNICA O ŚREDNICY 20 METRÓW. Tory ułożono w 1908.
 *   ⚠⚠⚠ DZIEWIĘTNAŚCIE MIEJSC PRACUJE RÓWNOLEGLE,
 *   ALE WJAZD DO NICH JEST SZEREGOWY — wszystko przechodzi
 *   przez jedną obrotnicę. To jest cały kąt.
 *   ⚠ W latach 20. XX w. zelektryfikowano tor dojazdowy
 *   i 6 z 19 stanowisk [NP].
 *   ⚠ Rozbudowy 1914, 1943, 1970 [NP] — nie podaję.
 *   ⚠⚠ ROK BUDOWY HALI [SP]: 1906–1907 (dwa źródła) /
 *   1907 / 1908 (myli budowę z ułożeniem torów).
 *   PODAJĘ „1906–1907".
 *   ⚠⚠⚠ SUPERLATYWU „największa zachowana parowozownia
 *   wachlarzowa na Dolnym Śląsku" NIE CYTUJĘ — jedno
 *   źródło, brak rankingu.
 * ⚠ WIEŻA CIŚNIEŃ: 1895–1896, pojemność 200 m³;
 *   druga wieża 1908.
 *
 * MUZEUM — FAKTY:
 * — Działalność od 1 sierpnia 2004 r.
 *   ⚠ [SP] en.wikipedia podaje 2005 — najpewniej rok
 *   pełnego otwarcia. PODAJĘ 2004.
 * — Na start przejęto: 34 lokomotywy, 41 wagonów,
 *   8 maszyn warsztatowych (dwa źródła zgodne).
 * — Dziś ponad 150 zabytkowych pojazdów szynowych
 *   (trzy źródła zgodne).
 *   ⚠⚠⚠ ROZBICIA NA PAROWOZY I WAGONY NIE PODAJĘ —
 *   cztery źródła podają cztery różne zestawy liczb.
 *   TWARDA GRANICA.
 * — Powierzchnia: ponad 2,5 ha (źródło własne muzeum).
 *   ⚠ [SP] inne źródła: „ponad 2 ha".
 * — Długość torów: 3 km.
 * — Najstarszy parowóz: Tkh2-12, wyprodukowany w 1890 r. —
 *   starszy od hali, w której stoi.
 * — ⚠ Pozostałych eksponatów (motocykle, drukarnia,
 *   komputer z 1974 r.) NIE WYMIENIAM — [NP].
 *
 * FABRYKA PORCELANY — FAKT DODATKOWY:
 *   Założona 1863. W 1904: 14 pieców, 700 pracowników.
 *   W 1925: 16 pieców, 850 pracowników.
 *   ⚠⚠ NAZWY MARKI NIE PODAJĘ — ZERO NAZW FIRM.
 *   ⚠⚠ „NOWE URZĄDZENIE PRZYNOSI WŁASNĄ PORCJĘ PRACY"
 *   JAKO KĄT — NIE UŻYWAM: ociera się o rozmiar sprzętu
 *   i liczbę tur (Ziębice) oraz o liczenie części
 *   (Pieszyce). PODAJĘ JAKO DWIE PARY LICZB.
 *   ⚠ Przelicznika „osób na piec" NIE PODAJĘ — to mój
 *   rachunek.
 *
 * LUDNOŚĆ HISTORYCZNA — FAKT DODATKOWY:
 *   1847 — 6 pracowników kolei · 1853 — 150 ·
 *   połowa lat 60. XIX w. — 333 · 1885/86 — 1 382 ·
 *   1905 — 3 335.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE TEGO CIĄGU (spójny wewnętrznie).
 *   Drugie źródło podaje „ok. 4 000 w 1900" — [SP]
 *   nieusuwalne, NIE MIESZAM DWÓCH CIĄGÓW.
 *   ⚠ DANYCH PO 1905 R. NIE PODAJĘ — schodzą w demografię.
 *
 * KĄT: DZIEWIĘTNAŚCIE STANOWISK, JEDNA OBROTNICA
 * — o tym, że dokładanie miejsc pracy nie zwiększa
 * przepustowości, jeśli wszystkie dzielą jedno przejście.
 * Kąt od parowozowni z lat 1906–1907: dziewiętnaście
 * stanowisk wachlarzem i jedna obrotnica o średnicy
 * dwudziestu metrów, przez którą trzeba przejechać
 * na każde z nich.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że parowozownia z lat 1906–1907 ma 19 stanowisk
 *   ustawionych wachlarzem i jedną obrotnicę o średnicy
 *   20 m, a poprzednia hala miała stanowisk 6,
 * — ŻE DZIEWIĘTNAŚCIE MIEJSC PRACUJE RÓWNOLEGLE,
 *   A WJAZD DO NICH JEST SZEREGOWY. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ODRUCHOWO DOKŁADAMY MIEJSC: drugi blat,
 *   trzecia deska, czwarty garnek, dodatkowy stolik,
 * — ⚠⚠ ŻE JEŚLI WSZYSTKO PRZECHODZI PRZEZ JEDEN PUNKT —
 *   najczęściej przez zlew — to ten punkt wyznacza tempo
 *   całej roboty, a dołożenie piątego naczynia tylko
 *   wydłuża kolejkę do niego,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN I ROBI SIĘ GO RAZ:
 *   przy jednym obiedzie policz, ile razy wracasz do tego
 *   samego miejsca. Nie ile masz miejsc — ile razy
 *   do jednego wracasz,
 * — ⚠⚠ ŻE DOPIERO TA LICZBA MÓWI, CZY BRAKUJE MIEJSCA,
 *   CZY PRZEPUSTOWOŚCI — i że to dwie różne rzeczy,
 *   które leczy się zupełnie inaczej,
 * — ⚠⚠ ŻE TO NIE JEST TEKST O KOLEJNOŚCI CZYNNOŚCI ANI
 *   O TYM, ILE MIEJSCA POTRZEBA — ROZGRANICZAM WPROST,
 *   BO OBA TE OBSZARY SĄ ZAJĘTE,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część powrotów do jednego
 *   punktu jest nieusuwalna i tak ma być. Obrotnicy nie
 *   dało się zwielokrotnić — dało się natomiast ustawić
 *   stanowiska tak, żeby każde miało do niej równie blisko,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zmniejsza liczbę
 *   naczyń, które trafiają do zlewu, więc realnie odciąża
 *   ten jeden punkt. MÓWIĘ WPROST, że samo w sobie nie
 *   dokłada przepustowości — po prostu mniej przez nią
 *   przepuszcza.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI, STREF I UKŁADU
 *   KUCHNI — obszar zajęty WIELOKROTNIE.
 *   ⚠⚠⚠ TO NAJWIĘKSZE RYZYKO TEGO TEKSTU, BO PISZĘ
 *   O MIEJSCACH PRACY. Piszę WYŁĄCZNIE o LICZBIE POWROTÓW
 *   DO JEDNEGO PUNKTU — nigdy o tym, gdzie co postawić,
 *   ile miejsca potrzeba ani jak rozplanować blat.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO METODY I KOLEJNOŚCI CZYNNOŚCI — kąt zajęty
 *   (Milicz). Nie piszę, co robić po czym.
 * — ⚠⚠⚠ ZERO ROZMIARU SPRZĘTU I LICZBY TUR — kąt zajęty
 *   (Ziębice). Dlatego fabryki porcelany nie używam
 *   jako morału.
 * — ⚠⚠⚠ ZERO SUMY KONTRA CIĄGŁOŚCI — kąt zajęty
 *   (Siechnice). Dlatego czterech kierunków na 4,34 km²
 *   nie używam jako morału.
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty (Mielno).
 * — ⚠⚠ ZERO KRÓTSZEJ DROGI I CZASU W KROKACH BEZCZYNNYCH
 *   — kąt zajęty (Sobótka).
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt zajęty (Pieszyce).
 * — ⚠⚠ ZERO MIEJSCA CELOWO PUSTEGO — kąt zajęty (Wołów).
 * — ⚠⚠ ZERO DWÓCH ODPORNOŚCI — kąt pisany w tej samej fali
 *   (Żarów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO UKŁADU KUCHNI — podaję WYŁĄCZNIE
 *   jeden pomiar: liczbę powrotów.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o zlewie i myciu NIE MÓWIĘ NIC o higienie
 *   ani o bakteriach.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU WOJSKOWEGO — roku 1761 nie wymieniam.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   poza wzmianką, że pod nazwą Königszelt miejscowość
 *   figuruje w starszych katalogach kolejowych.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO DEMOGRAFII PO 1905 R., ZERO BEZROBOCIA.
 * — ⚠ ZERO PRZECIĘTNEGO WYNAGRODZENIA — ⚠⚠ to wartość
 *   POWIATOWA, identyczna z Żarowem. NIE WOLNO PISAĆ
 *   „w Jaworzynie Śląskiej zarabia się…".
 * — ⚠ ZERO SUPERLATYWÓW O PAROWOZOWNI.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ powierzchni miasta jako 4,3 km².
 * — NIE PISZĘ o „pierwszej wzmiance" — przed stacją
 *   nie było tu miejscowości.
 * — NIE PODAJĘ dnia ani aktu nadania praw miejskich.
 * — NIE PODAJĘ rozbicia taboru muzeum na parowozy
 *   i wagony — cztery źródła, cztery różne zestawy.
 * — NIE CYTUJĘ superlatywu o wielkości parowozowni.
 * — NIE PODAJĘ nazwy fabryki porcelany.
 * — NIE MIESZAM dwóch ciągów ludnościowych.
 * — NIE PODAJĘ odległości drogowych — nie zweryfikowano
 *   ani jednej; źródła podają wartości sprzeczne
 *   (Żarów 4,9 albo około 8 km).
 * — NIE PODAJĘ przeciętnego wynagrodzenia.
 * — NIE UŻYWAM przymiotnika od nazwy miasta ani nazwy
 *   mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ Powiat świdnicki nie ma ani jednego
 *   wpisu; „kiełbasa z Przedgórza Sudeckiego" to
 *   oznaczenie regionalne, a produkty niemczańskie
 *   pochodzą z innego powiatu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Jaworzyna Śląska leży w powiecie świdnickim,
 *   na wysokości 220–238 m n.p.m.; miasto liczy 5 020
 *   mieszkańców (GUS, 31.12.2024) na 4,34 km², a cała
 *   gmina miejsko-wiejska 10 229 osób na 67,5 km²,
 *   z dwunastoma wsiami,
 * — miejscowość wyrosła przy kolei: stację uruchomiono
 *   w listopadzie 1843 r. na linii Wrocław–Świebodzice,
 *   w 1844 doszedł kierunek na Świdnicę, w 1853 linia
 *   Wałbrzych–Legnica, a w 1856 czwarty kierunek —
 *   cztery kierunki w trzynaście lat; samodzielną gminą
 *   miejscowość stała się w 1868 r., a prawa miejskie
 *   otrzymała w 1954,
 * — pierwsza parowozownia wachlarzowa miała 6 stanowisk
 *   i powstała na przełomie lat 80. i 90. XIX w.;
 *   obrotnicę zainstalowano w 1897 r. Obecną halę
 *   wzniesiono w latach 1906–1907: ma 19 stanowisk
 *   i obrotnicę o średnicy 20 m, a tory ułożono w 1908.
 *   Wieżę ciśnień o pojemności 200 m³ zbudowano w latach
 *   1895–1896, drugą w 1908,
 * — muzeum działa w tych budynkach od 1 sierpnia 2004 r.;
 *   przejęło na start 34 lokomotywy, 41 wagonów i 8 maszyn
 *   warsztatowych, a dziś ma ponad 150 zabytkowych
 *   pojazdów szynowych na ponad 2,5 ha i 3 km torów;
 *   najstarszy parowóz, Tkh2-12, wyprodukowano w 1890 r.,
 *   czyli wcześniej niż halę, w której stoi,
 * — fabrykę porcelany założono w 1863 r.; w 1904 miała
 *   14 pieców i 700 pracowników, a w 1925 — 16 pieców
 *   i 850 pracowników,
 * — liczba mieszkańców rosła od sześciu pracowników kolei
 *   w 1847 r. przez 150 w 1853 i 333 w połowie lat 60.
 *   XIX w. do 1 382 w 1885 i 3 335 w 1905.
 */
export const JAWORZYNA_SLASKA: CityContent = {
  slug: "jaworzyna-slaska",
  h1: "Thermomix Jaworzyna Śląska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jaworzyna Śląska — prezentacja i cena",
  seoDescription:
    "Thermomix w Jaworzynie Śląskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jaworzyna Śląska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jaworzynie Śląskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jaworzyny Śląskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwunastu wsi w gminie.",

  highlights: highlightyStandardowe("Jaworzyna Śląska"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziewiętnaście stanowisk pracuje równolegle. Wjazd do nich jest szeregowy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jaworzynie Śląskiej – jak wygląda prezentacja?",
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
      id: "jedna-obrotnica",
      heading: "Dziewiętnaście stanowisk, jedna obrotnica",
      paragraphs: [
        "Parowozownia w Jaworzynie Śląskiej, zbudowana w latach 1906–1907, ma dziewiętnaście stanowisk ustawionych wachlarzem. Poprzednia hala miała ich sześć.",
        "I ma jedną obrotnicę o średnicy dwudziestu metrów, przez którą trzeba przejechać, żeby dostać się na którekolwiek z tych dziewiętnastu miejsc.",
        "Czyli: dziewiętnaście stanowisk pracuje równolegle, ale wjazd do nich jest szeregowy. Trzykrotne zwiększenie liczby miejsc nie zwiększyło liczby wjazdów — tych wciąż jest jeden.",
        "W kuchni odruch mamy dokładnie taki sam i dokładnie tak samo kosztowny.",
        "Kiedy robota się nie spina, dokładamy miejsc. Drugi blat. Trzecia deska. Czwarty garnek. Stolik dostawiony na czas świąt. Każde z tych rozwiązań wygląda sensownie i każde coś realnie daje.",
        "Tylko że jeśli wszystko przechodzi przez jeden punkt — a w zdecydowanej większości kuchni jest nim zlew — to ten punkt wyznacza tempo całej roboty. Piąte naczynie nie skraca niczego. Wydłuża kolejkę.",
        "Pomiar, który to rozstrzyga, robi się raz i przy zwykłym obiedzie: policz, ile razy wracasz do tego samego miejsca.",
        "Nie ile masz miejsc. Ile razy do jednego wracasz.",
        "Dopiero ta liczba mówi, czego naprawdę brakuje. Bo „brakuje miejsca” i „brakuje przepustowości” to dwie różne rzeczy, a leczy się je zupełnie inaczej: pierwsze dokładaniem, drugie zmniejszaniem liczby przejazdów. Mylenie ich kończy się kuchnią pełną blatów, w której i tak stoi się w kolejce do kranu.",
        "Dopowiem, żeby nie było nieporozumienia: nie piszę tu o tym, co robić po czym, ani o tym, ile miejsca potrzeba. Piszę o jednej liczbie — ile razy w trakcie jednej potrawy wracasz do tego samego punktu.",
        "Uczciwie o drugiej stronie: część powrotów jest nieusuwalna i tak ma być. Obrotnicy nie dało się zwielokrotnić — dało się natomiast ustawić stanowiska wachlarzem, żeby każde miało do niej równie blisko. To jest właściwa odpowiedź na wąskie gardło, którego nie da się usunąć: nie zwalczać go, tylko skrócić do niego drogę z każdej strony.",
        "Na koniec o urządzeniu, i powiem to precyzyjnie, bo łatwo tu przesadzić.",
        "Thermomix nie dokłada przepustowości. Nie robi drugiego zlewu i nie umie. Robi co innego: zmniejsza liczbę naczyń, które do tego zlewu w ogóle trafiają, bo większość pracy dzieje się w jednym naczyniu. To odciąża wąskie gardło, zamiast je omijać — i to jest cała różnica, ale akurat ta różnica jest odczuwalna.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jaworzynie Śląskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile naczyń zwykle zostaje u Was po obiedzie. To najkrótsza droga do sprawdzenia, czy urządzenie cokolwiek u Was zmieni.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jaworzynie Śląskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Jaworzyny Śląskiej",
      paragraphs: [
        "Jaworzyna Śląska leży w powiecie świdnickim, na wysokości od dwustu dwudziestu do dwustu trzydziestu ośmiu metrów nad poziomem morza. Samo miasto liczy 5 020 mieszkańców (GUS, 31.12.2024) na czterech i jednej trzeciej kilometra kwadratowego, a cała gmina miejsko-wiejska ponad dziesięć tysięcy osób na sześćdziesięciu siedmiu, z dwunastoma wsiami. To miasto bez pierwszej wzmianki — przed koleją nie było tu miejscowości. Stację uruchomiono w listopadzie 1843 roku, na linii z Wrocławia do Świebodzic; w 1844 doszedł kierunek na Świdnicę, w 1853 linia z Wałbrzycha do Legnicy, a w 1856 czwarty kierunek. Cztery kierunki w trzynaście lat. Samodzielną gminą miejscowość stała się w 1868 roku, a prawa miejskie otrzymała w 1954 — sto jedenaście lat po powstaniu stacji. Pierwsza parowozownia wachlarzowa miała sześć stanowisk i powstała na przełomie lat osiemdziesiątych i dziewięćdziesiątych dziewiętnastego wieku; obrotnicę zainstalowano w 1897. Obecną halę wzniesiono w latach 1906–1907: ma dziewiętnaście stanowisk i obrotnicę o średnicy dwudziestu metrów, a tory ułożono rok później. Wieżę ciśnień o pojemności dwustu metrów sześciennych zbudowano w latach 1895–1896, drugą w 1908. Muzeum działa w tych budynkach od 1 sierpnia 2004 roku — przejęło na start trzydzieści cztery lokomotywy, czterdzieści jeden wagonów i osiem maszyn warsztatowych, a dziś ma ponad sto pięćdziesiąt zabytkowych pojazdów szynowych na ponad dwóch i pół hektarach i trzech kilometrach torów. Najstarszy parowóz, Tkh2-12, wyprodukowano w 1890 roku, czyli wcześniej niż halę, w której stoi. Fabrykę porcelany założono w 1863: w 1904 miała czternaście pieców i siedmiuset pracowników, w 1925 — szesnaście pieców i osiemset pięćdziesiąt osób. Liczba mieszkańców rosła od sześciu pracowników kolei w 1847 roku przez sto pięćdziesiąt w 1853 i trzysta trzydzieści trzy w połowie lat sześćdziesiątych do tysiąca trzystu osiemdziesięciu dwóch w 1885 i trzech tysięcy trzystu trzydziestu pięciu w 1905.",
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

  districtsHeading: "Do których części Jaworzyny Śląskiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwunastu wsi w gminie: Bagieńca, Bolesławic, Czech, Milikowic, Nowic, Nowego Jaworowa, Pasiecznej, Pastuchowa, Piotrowic Świdnickich, Starego Jaworowa, Tomkowej i Witkowa. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Jaworzynę Śląską też przyjadę",
  nearbyParagraphs: [
    "Żarów, Świdnica i Strzegom są stąd po kilka–kilkanaście kilometrów. Dojeżdżam też do Marcinowic, Dobromierza i Mietkowa — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Świdnica", "Żarów", "Strzegom", "Dobromierz", "Marcinowice"],

  about: blokOMnie("do Jaworzyny Śląskiej", "w Jaworzynie Śląskiej i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jaworzyny Śląskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwunastu wsi w gminie, łącznie z Pastuchowem, Piotrowicami Świdnickimi i Witkowem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ważne przy umawianiu: chodzi o Jaworzynę Śląską w powiecie świdnickim — nie o Jaworzno w śląskiem, nie o Jaworzynę Krynicką w Beskidzie Sądeckim i nie o Jawor, który leży w tym samym województwie jakieś dwadzieścia kilometrów stąd. Wieś Witków występuje w Polsce wielokrotnie, więc przy niej warto dodać gminę.",
    },
    ...faqWspolne("w Jaworzynie Śląskiej"),
    {
      question: "Dołożyłam blat i drugą deskę, a w kuchni dalej się korkuje. Dlaczego?",
      answer:
        "Bo prawdopodobnie brakuje nie miejsca, tylko przepustowości. Parowozownia w Jaworzynie Śląskiej ma dziewiętnaście stanowisk ustawionych wachlarzem i jedną obrotnicę o średnicy dwudziestu metrów — dziewiętnaście miejsc pracuje równolegle, ale wjazd do nich jest szeregowy. W kuchni tym jednym przejściem jest zwykle zlew. Policz przy jednym obiedzie, ile razy wracasz do tego samego miejsca; nie ile masz miejsc, tylko ile razy do jednego wracasz. Dopiero ta liczba mówi, czy dokładać, czy skracać liczbę przejazdów.",
    },
    {
      question: "Czy Thermomix rozwiązuje problem korkowania się kuchni?",
      answer:
        "Nie dokłada przepustowości i nie zrobi drugiego zlewu. Robi co innego: zmniejsza liczbę naczyń, które do zlewu w ogóle trafiają, bo większość pracy dzieje się w jednym naczyniu. To odciąża wąskie gardło, zamiast je omijać — i akurat ta różnica jest odczuwalna, ale warto ją nazwać precyzyjnie, a nie obiecywać więcej.",
    },
  ],

  geo: { lat: 50.9129, lng: 16.4322 },
};
