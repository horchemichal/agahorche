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
 * ZŁOTORYJA — powiat złotoryjski, woj. dolnośląskie.
 * MIASTO JEST SAMODZIELNĄ GMINĄ MIEJSKĄ.
 * MIASTO: 14 071 mieszkańców (GUS 31.12.2024), 11,5 km²,
 *   gęstość 1 222,5 os./km².
 * ⚠⚠⚠ PUŁAPKA: OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA
 *   ZŁOTORYJA (6 969 osób, 145,1 km²), KTÓRA MIASTA
 *   NIE OBEJMUJE. NIE SUMUJĘ TYCH LICZB.
 *   ⚠⚠ W TEKŚCIE PISZĘ O MIEŚCIE. TWARDA GRANICA.
 * ⚠ GEO: 51,1264 / 15,9247.
 *
 * ⚠⚠⚠ ODMIANA — PUŁAPKA:
 *   D. DO ZŁOTORYI, Ms. W ZŁOTORYI — FORMY IDENTYCZNE.
 *   ⚠⚠⚠ NIGDY „w Złotoryji", „do Złotoryji" (podwójne j).
 *   ⚠⚠ NIGDY „w Złotorii".
 *   PRZYMIOTNIK: ZŁOTORYJSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny ze Złotoryi".
 *   ⚠ UWAGA: „ZE Złotoryi", nie „z Złotoryi".
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY:
 *   ZŁOTORYJA ≠ ZŁOTY STOK (powiat ząbkowicki) —
 *   TO SAMO WOJEWÓDZTWO, też miasto złota, też kopalnia
 *   i trasa turystyczna. Wyniki o „polskim złocie"
 *   masowo mieszają oba miasta. NAJGROŹNIEJSZE.
 *   ≠ ZŁOTORIA (kujawsko-pomorskie) ≠ ZŁOTORIA
 *   (podlaskie) — dwie wsie o niemal identycznej
 *   pisowni. ≠ ZŁOTÓW (wielkopolskie).
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ 1211 — dokument nadający prawo magdeburskie
 *   „gościom ze Złota"; NAJSTARSZY UDOKUMENTOWANY AKT
 *   LOKACJI MIEJSKIEJ NA ŚLĄSKU I W POLSCE.
 *   Nadał książę Henryk Brodaty. 1232 — określenie
 *   „oppidum". ⚠ PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ NIE UŻYWAM JAKO KĄTA — „najstarszy zapisany
 *   dowód" prowadzi w obszar tradycja kontra dowód,
 *   zajęty PIĘCIOKROTNIE (przepisy rodzinne).
 * — ⚠⚠ KOŚCIÓŁ NMP: prezbiterium i transept ok.
 *   1210–1230, PRAWDOPODOBNIE STARSZE NIŻ AKT LOKACJI.
 *   ⚠⚠⚠ TEGO NIE UŻYWAM — ten sam zajęty obszar.
 *   ⚠ WIEŻA: ŹRÓDŁA SPRZECZNE — 63 M ALBO 67 M.
 *   PISZĘ „ponad sześćdziesiąt metrów" albo pomijam.
 *   Wysokość nawy głównej 14,6 m; długość blisko 50 m;
 *   zegar 1888; fasada 1914–1917.
 *   ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 * — Ratusz neorenesansowy z lat 1841–1842.
 * — Fontanna Delfina — 1604.
 * — KOLEJ: linia z Legnicy 1884, do Marciszowa 1895,
 *   do Chojnowa 1906.
 *   ⚠⚠ TRZECH LINII W DWADZIEŚCIA DWA LATA NIE UŻYWAM
 *   JAKO KĄTA — „dokładane po kolei" zajęte (Zamość).
 *
 * ZŁOTO — FAKTY UŻYTE:
 * — Ok. 750 kg złota — szacunek całości wydobycia
 *   w rejonie w średniowieczu. Do 48 kg rocznie
 *   w okresie największej prosperity.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „przelicznik wysiłku
 *   do plonu" prowadzi w obszar odzysku i resztek,
 *   zajęty WIELOKROTNIE (Nasielsk, Rypin, Krośniewice,
 *   Prudnik, Torzym, Kraśnik). Podaję jako fakt.
 *   ⚠⚠ SZCZYTU KONTRA CAŁOŚCI NIE ZESTAWIAM —
 *   kąt zajęty (Węgorzyno).
 * — Początek wydobycia: koniec XII w.
 * — 1224 i 1227 — pierwsze wzmianki o kopalniach
 *   („aurifodinae") w dokumentach.
 * — Nazwy kopalń z XIV–XV w.: „die weisse Zeche" (1320),
 *   „uff der huben" (1331), „czum Resecht" (1404).
 * — Początek XV w. — kopalnie już zalane.
 * — Badania archeologiczne: 1973, kontynuacja do 1980,
 *   dodatkowe 1995. Muzeum Złota utworzone 1973–1977.
 * — Kopalnia Złota „Aurelia": jedna ze sztolni datowana
 *   na ok. 1660 r.; podziemna trasa turystyczna
 *   ok. 100 m.
 * — ⚠⚠⚠ BITWY POD LEGNICĄ (1241) I UDZIAŁU 500 GÓRNIKÓW
 *   NIE UŻYWAM — wątek militarny. TWARDA GRANICA.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MISTRZOSTWA W PŁUKANIU ZŁOTA:
 *   MISTRZOSTWA ŚWIATA W PŁUKANIU ZŁOTA ODBYŁY SIĘ
 *   W ZŁOTORYI TRZY RAZY: W 2000, 2011 I 2022 R.
 *   ⚠ Mistrzostwa Polski odbywają się corocznie;
 *   zawodnicy przyjeżdżają m.in. z Niemiec, Korei
 *   Południowej, Australii i Kanady.
 *   ⚠⚠ ROKU PIERWSZEJ EDYCJI MISTRZOSTW POLSKI
 *   ANI NUMERU BIEŻĄCEJ NIE USTALONO — nie podaję.
 *   ⚠⚠ LICZBY UCZESTNIKÓW I KRAJÓW NIE USTALONO.
 *   ⚠⚠⚠ ZASADA KONKURENCJI: zawodnik dostaje wiadro
 *   materiału z ukrytą znaną liczbą drobin złota
 *   i musi wypłukać WSZYSTKIE.
 *   ⚠⚠ TO JEST MOJE ROZUMIENIE OGÓLNEJ ZASADY
 *   DYSCYPLINY, NIE CYTAT ZE ŹRÓDŁA O TYCH KONKRETNYCH
 *   ZAWODACH. ⚠⚠⚠ FORMUŁUJĘ TO OSTROŻNIE — piszę,
 *   że w tej dyscyplinie liczy się komplet, a nie
 *   podaję regulaminu ani liczby drobin.
 *   TO JEST CAŁY KĄT.
 *
 * WILCZA GÓRA (WILKOŁAK) — FAKTY UŻYTE:
 * — Wysokość 360 m n.p.m.; powierzchnia rezerwatu
 *   1,62 ha; rok utworzenia 1959; bazalt ok. 15,5 mln
 *   lat; „róża bazaltowa" — słupy o średnicy 20–40 cm;
 *   ok. 1 km na południe od zabudowań.
 *   ⚠ CAŁKOWITYCH WYMIARÓW FORMACJI NIE USTALONO.
 *   ⚠⚠ ZESTAWIENIA 1211 R. Z 15,5 MLN LAT NIE UŻYWAM —
 *   „co naprawdę jest stare" to obszar zajęty.
 *
 * ⚠⚠ MURY I BASZTA KOWALSKA: wysokość baszty 22,5 m,
 *   średnica podstawy 9,5 m, grubość muru prawie 2,7 m,
 *   wejście na wysokości 6,6 m; poł. XIV w.
 *   Mury: wysokość do 10 m, grubość u podstawy prawie
 *   2,7 m; dwie bramy główne — Dolna (Legnicka)
 *   i Górna (Kowalska).
 *   ⚠⚠⚠ WEJŚCIA NA WYSOKOŚCI 6,6 M NIE UŻYWAM JAKO
 *   KĄTA — „utrudniony dostęp" to lustrzane odbicie
 *   kąta zajętego (Suchań: każdy krok odsiewa użycie).
 *   Podaję jako fakt. TWARDA GRANICA.
 *   ⚠⚠ MURÓW NIE UŻYWAM JAKO KĄTA — Recz, Moryń, Resko.
 *   ⚠⚠ ZERO WĄTKU OBRONNEGO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NA LIŚCIE MRiRW
 *   NIE MA WPISU ODNOSZĄCEGO SIĘ DO ZŁOTORYI
 *   ANI DO POWIATU ZŁOTORYJSKIEGO.
 *   ⚠⚠⚠ NIE PISZĘ „GMINA NIE MA PRODUKTÓW
 *   TRADYCYJNYCH". TEMAT NIE POJAWIA SIĘ W TEKŚCIE.
 * ⚠ ODLEGŁOŚCI SZACUNKOWE (±3 km): Świerzawa ok. 16 km,
 *   Jawor ok. 19, Chojnów ok. 19, Wojcieszów ok. 22,
 *   Legnica ok. 23, Bolesławiec ok. 40.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: PRZEGRYWA SIĘ PRZEZ PRZEOCZENIE — o tym, że
 * większość domowych niepowodzeń to nie błędy wykonania,
 * tylko rzeczy pominięte.
 * Kąt od mistrzostw w płukaniu złota: w tej dyscyplinie
 * nie wygrywa się przez to, że się coś zrobiło lepiej.
 * Przegrywa się przez to, że się czegoś nie znalazło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Złotoryja trzykrotnie gościła Mistrzostwa Świata
 *   w Płukaniu Złota — w 2000, 2011 i 2022 r. — a Mistrzostwa
 *   Polski odbywają się tu co roku, ze startującymi
 *   z Niemiec, Korei Południowej, Australii i Kanady,
 * — ŻE W TEJ DYSCYPLINIE LICZY SIĘ KOMPLET: zadaniem
 *   jest wypłukać z materiału wszystko, co w nim jest,
 *   a nie wypłukać ładnie. To jest rdzeń,
 * — ⚠⚠ ŻE TO ODWRACA SPOSÓB, W JAKI OCENIA SIĘ WŁASNĄ
 *   PRACĘ. Nie pyta się „czy zrobiłem to dobrze",
 *   tylko „czy czegoś nie zostawiłem",
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO I PRAWIE NIKT TAK
 *   O TYM NIE MYŚLI. Zdecydowana większość niepowodzeń
 *   przy zwykłym obiedzie to nie są błędy wykonania,
 *   tylko rzeczy pominięte: nie posolone, nie wyjęte
 *   wcześniej, nie sprawdzone na koniec, nie zdjęte
 *   w porę,
 * — ⚠⚠ ŻE TO JEST DOBRA WIADOMOŚĆ, BO POMINIĘCIA
 *   NAPRAWIA SIĘ INACZEJ NIŻ BRAK UMIEJĘTNOŚCI —
 *   nie ćwiczeniem, tylko jednym przejściem na końcu.
 *   Trzydzieści sekund zanim się poda,
 * — ⚠⚠ ŻE TO PRZEJŚCIE MA SENS TYLKO WTEDY, GDY JEST
 *   ZAWSZE TAKIE SAMO — zawsze te same trzy albo cztery
 *   rzeczy, w tej samej kolejności. Inaczej sprawdza się
 *   to, co akurat przyjdzie do głowy, czyli to, co się
 *   pamięta, czyli nie to, o czym się zapomniało,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE WSZYSTKO DA SIĘ
 *   URATOWAĆ NA KOŃCU. Część rzeczy trzeba zrobić
 *   wcześniej albo wcale, a lista sprawdzająca nie
 *   cofnie czasu. Ona wyłapuje pominięcia, nie naprawia
 *   przebiegu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie sprawdzi
 *   niczego za Ciebie i nie przypomni o soli. Zmniejsza
 *   za to liczbę rzeczy, o których trzeba pamiętać
 *   jednocześnie — bo mieszanie i temperatura przestają
 *   być jedną z nich. MÓWIĘ TO WPROST i wąsko.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TEMPA I POŚPIECHU — kąt zajęty (Tuczno).
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi o WARUNKI
 *   PRACY I O TO, ŻE POŚPIECH JEST SKŁADNIKIEM;
 *   TUTAJ o KONKRETNĄ CZYNNOŚĆ SPRAWDZAJĄCĄ NA KOŃCU.
 *   Ani słowa o tempie, o dziesięciu minutach wcześniej
 *   i o tym, ile rzeczy dzieje się naraz —
 *   poza jednym zdaniem o sprzęcie. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno). Lista sprawdzająca to nie jest próg
 *   decyzyjny i pilnuję, żeby tak nie zabrzmiała.
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec).
 * — ⚠⚠ ZERO JEDNEJ POZYCJI, KTÓRA ZAJMUJE POŁOWĘ —
 *   kąt zajęty (Pełczyce). Nie piszę o listach jako
 *   o nierównych.
 * — ⚠⚠ ZERO ODEJMOWANIA I WYKREŚLANIA SKŁADNIKÓW —
 *   kąt zajęty (Strzegom, ta sama fala).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty (Kamienna
 *   Góra, ta sama fala).
 * — ⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt zajęty
 *   (Dobrzany).
 * — ⚠⚠ ZERO INNEJ METODY NA INNYM ETAPIE — kąt zajęty
 *   (Golczewo). Nie dzielę gotowania na fazy.
 * — ⚠ ZERO ODZYSKU, RESZTEK I WYTŁOKÓW — obszar zajęty
 *   WIELOKROTNIE. 750 kg złota podaję jako fakt
 *   historyczny, nigdy jako morał o przeliczniku.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ LISTY SPRAWDZAJĄCEJ — podaję
 *   WYŁĄCZNIE zasadę: zawsze te same punkty,
 *   zawsze w tej samej kolejności.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ w szczególności
 *   nic o soli jako o zdrowiu.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ „sprawdzić na koniec" NIE MOŻE zabrzmieć jak
 *   porada o tym, czy coś jest zdatne do jedzenia.
 *   Piszę WYŁĄCZNIE o doprawieniu i o tym, czy nic
 *   nie zostało pominięte w przygotowaniu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO BITWY POD LEGNICĄ I UDZIAŁU GÓRNIKÓW.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza historycznymi nazwami kopalń jako zapisami
 *   źródłowymi — a i tych nie muszę używać).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła nie opisuję.
 * — ⚠⚠ ZERO WYPADKÓW I ZALANIA KOPALŃ JAKO KATASTROFY —
 *   podaję sam fakt, że na początku XV w. były zalane.
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ miasta i gminy wiejskiej o tej samej
 *   nazwie — to dwie odrębne jednostki.
 * — NIE PODAJĘ wysokości wieży kościoła — źródła
 *   podają 63 albo 67 m.
 * — NIE PODAJĘ roku pierwszej edycji Mistrzostw Polski
 *   ani numeru bieżącej — nie ustalono.
 * — NIE PODAJĘ liczby uczestników mistrzostw
 *   ani liczby krajów.
 * — NIE CYTUJĘ REGULAMINU ZAWODÓW ani liczby drobin —
 *   piszę wyłącznie, że w tej dyscyplinie liczy się
 *   komplet.
 * — NIE PODAJĘ wymiarów „róży bazaltowej".
 * — NIE PODAJĘ całkowitej długości murów.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNEJ GOTOWEJ LISTY SPRAWDZAJĄCEJ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Złotoryja leży w powiecie złotoryjskim; miasto liczy
 *   14 071 mieszkańców (GUS, 31.12.2024) na 11,5 km²
 *   i jest samodzielną gminą miejską; obok istnieje
 *   odrębna gmina wiejska o tej samej nazwie, licząca
 *   6 969 osób na 145,1 km²,
 * — w 1211 r. książę Henryk Brodaty nadał tutejszym
 *   mieszkańcom prawo magdeburskie — to najstarszy
 *   udokumentowany akt lokacji miejskiej na Śląsku
 *   i w Polsce; w 1232 r. miejscowość określono
 *   mianem oppidum,
 * — wydobycie złota zaczęło się tu pod koniec XII w.,
 *   a pierwsze wzmianki o kopalniach pochodzą z 1224
 *   i 1227 r.; szacuje się, że przez całe średniowiecze
 *   uzyskano w rejonie około 750 kg złota, do 48 kg
 *   rocznie w najlepszym okresie; na początku XV w.
 *   kopalnie były już zalane,
 * — badania archeologiczne prowadzono od 1973 do 1980 r.
 *   i ponownie w 1995 r., a Muzeum Złota utworzono
 *   w latach 1973–1977; w Kopalni Złota „Aurelia"
 *   jedna ze sztolni datowana jest na około 1660 r.,
 *   a podziemna trasa turystyczna ma około 100 m,
 * — Złotoryja trzykrotnie gościła Mistrzostwa Świata
 *   w Płukaniu Złota: w 2000, 2011 i 2022 r.;
 *   Mistrzostwa Polski odbywają się tu co roku,
 *   a startujący przyjeżdżają między innymi z Niemiec,
 *   Korei Południowej, Australii i Kanady,
 * — z dawnych fortyfikacji zachowała się Baszta
 *   Kowalska z połowy XIV w.: 22,5 m wysokości,
 *   9,5 m średnicy podstawy, mur grubości prawie 2,7 m,
 *   a wejście umieszczono na wysokości 6,6 m; mury
 *   miejskie sięgały 10 m wysokości i prowadziły przez
 *   nie dwie bramy główne — Dolna i Górna,
 * — ratusz pochodzi z lat 1841–1842, a Fontanna Delfina
 *   z 1604 r.,
 * — kolej dotarła tu z Legnicy w 1884 r., linię
 *   do Marciszowa otwarto w 1895 r., a do Chojnowa
 *   w 1906 r.,
 * — około kilometra na południe od zabudowań leży Wilcza
 *   Góra (Wilkołak) — 360 m n.p.m., rezerwat o powierzchni
 *   1,62 ha utworzony w 1959 r.; tworzy ją bazalt sprzed
 *   około 15,5 mln lat, ułożony w słupy o średnicy
 *   od 20 do 40 cm.
 */
export const ZLOTORYJA: CityContent = {
  slug: "zlotoryja",
  h1: "Thermomix Złotoryja – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Złotoryja — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Złotoryi: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Złotoryja — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Złotoryi. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Złotoryi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w okolicy.",

  highlights: highlightyStandardowe("Złotoryja"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W płukaniu złota nie wygrywa się ładnie. Przegrywa się przez to, czego się nie znalazło.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Złotoryi – jak wygląda prezentacja?",
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
      id: "przeoczenie",
      heading: "Dyscyplina, w której liczy się komplet",
      paragraphs: [
        "Złotoryja trzykrotnie gościła Mistrzostwa Świata w Płukaniu Złota: w 2000, 2011 i 2022 roku. Mistrzostwa Polski odbywają się tu co roku, a startujący przyjeżdżają między innymi z Niemiec, Korei Południowej, Australii i Kanady.",
        "To jest dyscyplina zbudowana wokół jednej zasady: liczy się komplet. Zadanie nie polega na tym, żeby wypłukać ładnie ani szybciej od sąsiada. Polega na tym, żeby wyjąć z materiału wszystko, co w nim jest.",
        "A to odwraca sposób, w jaki ocenia się własną pracę. Pytanie nie brzmi „czy zrobiłem to dobrze”, tylko „czy czegoś nie zostawiłem”.",
        "W kuchni działa dokładnie to samo i prawie nikt tak o tym nie myśli.",
        "Zdecydowana większość niepowodzeń przy zwykłym obiedzie to nie są błędy wykonania. Nikt nie przypala, bo nie umie. Nie posolone. Nie wyjęte wcześniej. Nie sprawdzone przed podaniem. Nie zdjęte w porę, bo akurat zadzwonił telefon. To nie są rzeczy zrobione źle — to są rzeczy niezrobione wcale.",
        "I to akurat jest dobra wiadomość, bo pominięcia naprawia się zupełnie inaczej niż braki w umiejętnościach.",
        "Umiejętności ćwiczy się miesiącami. Pominięcia wyłapuje się jednym przejściem na końcu — trzydzieści sekund, zanim się poda. Nie trzeba do tego nic umieć, trzeba tylko w ogóle to przejście zrobić.",
        "Tylko że ma ono sens pod jednym warunkiem: musi być zawsze takie samo. Zawsze te same trzy albo cztery punkty, zawsze w tej samej kolejności. Jeśli za każdym razem sprawdza się to, co akurat przyjdzie do głowy, to sprawdza się to, co się pamięta — czyli dokładnie nie to, o czym się zapomniało.",
        "Uczciwie o drugiej stronie: nie wszystko da się uratować na końcu. Część rzeczy trzeba było zrobić wcześniej albo wcale, i żadne przejście po liście tego nie cofnie. Ono wyłapuje pominięcia — nie naprawia przebiegu i nie zastępuje planu.",
        "Na koniec o urządzeniu, wąsko. Ono niczego nie sprawdzi za nikogo i nie przypomni o soli — to nie jest jego rola i nie będę udawać, że jest.",
        "Robi jedną rzecz, która tu ma znaczenie: zmniejsza liczbę spraw, o których trzeba pamiętać jednocześnie. Mieszanie i temperatura przestają być jedną z nich, a im mniej rzeczy pilnuje się naraz, tym mniej się ich pomija.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Złotoryi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was najczęściej „umyka” przy gotowaniu. To zwykle mówi więcej niż lista dań, które chcielibyście zobaczyć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Złotoryi"),
    sekcjaRaty("w Złotoryi"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Złotoryi",
      paragraphs: [
        "Złotoryja leży w powiecie złotoryjskim i liczy ponad czternaście tysięcy mieszkańców (GUS, 31.12.2024) na jedenastu i pół kilometra kwadratowego; jest samodzielną gminą miejską, a obok istnieje odrębna gmina wiejska o tej samej nazwie, licząca blisko siedem tysięcy osób na stu czterdziestu pięciu kilometrach. W 1211 roku książę Henryk Brodaty nadał tutejszym mieszkańcom prawo magdeburskie — to najstarszy udokumentowany akt lokacji miejskiej na Śląsku i w Polsce; w 1232 miejscowość określono mianem oppidum. Wydobycie złota zaczęło się pod koniec dwunastego wieku, pierwsze wzmianki o kopalniach pochodzą z 1224 i 1227, a przez całe średniowiecze uzyskano w rejonie około siedmiuset pięćdziesięciu kilogramów kruszcu — do czterdziestu ośmiu kilogramów rocznie w najlepszym okresie. Na początku piętnastego wieku kopalnie były już zalane. Badania archeologiczne prowadzono od 1973 do 1980 i ponownie w 1995, a Muzeum Złota utworzono w latach 1973–1977. Z dawnych fortyfikacji zachowała się Baszta Kowalska z połowy czternastego wieku: dwadzieścia dwa i pół metra wysokości, dziewięć i pół metra średnicy podstawy, mur grubości prawie dwóch metrów siedemdziesięciu, a wejście umieszczono sześć metrów sześćdziesiąt nad ziemią. Ratusz pochodzi z lat 1841–1842, a Fontanna Delfina z 1604. Kolej dotarła tu z Legnicy w 1884, linię do Marciszowa otwarto w 1895, a do Chojnowa w 1906. Kilometr na południe od zabudowań leży Wilcza Góra — trzysta sześćdziesiąt metrów nad poziomem morza, rezerwat utworzony w 1959 roku, zbudowany z bazaltu sprzed około piętnastu i pół miliona lat, ułożonego w słupy o średnicy od dwudziestu do czterdziestu centymetrów.",
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

  districtsHeading: "Do których części Złotoryi dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi w okolicznej gminie wiejskiej. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Złotoryję też przyjadę",
  nearbyParagraphs: [
    "Świerzawa jest około szesnastu kilometrów stąd, Jawor i Chojnów po dziewiętnaście, Wojcieszów dwadzieścia dwa, a Legnica dwadzieścia trzy. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Legnica", "Jawor", "Chojnów", "Świerzawa", "Wojcieszów"],

  about: blokOMnie("do Złotoryi", "w Złotoryi", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Złotoryi bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Złotoryję w powiecie złotoryjskim — nie o Złoty Stok, drugie dolnośląskie miasto złota, z którym bywa mylona, ani o Złotorię w kujawsko-pomorskiem czy podlaskiem.",
    },
    ...faqWspolne("w Złotoryi"),
    {
      question: "Dlaczego obiad czasem „nie wychodzi”, choć wszystko zrobiłam jak zwykle?",
      answer:
        "Bo większość domowych niepowodzeń to nie błędy wykonania, tylko rzeczy pominięte: nie posolone, nie wyjęte wcześniej, nie zdjęte w porę, nie sprawdzone przed podaniem. To dobra wiadomość, bo pominięcia naprawia się inaczej niż braki w umiejętnościach — jednym przejściem na końcu, zawsze po tych samych trzech albo czterech punktach i zawsze w tej samej kolejności.",
    },
    {
      question: "Czy Thermomix pilnuje czegoś za mnie?",
      answer:
        "Nie przypomni o soli i niczego nie sprawdzi — to nie jest jego rola. Zmniejsza natomiast liczbę spraw, o których trzeba pamiętać jednocześnie, bo mieszanie i temperatura przestają być jedną z nich. A im mniej rzeczy pilnuje się naraz, tym mniej się ich pomija.",
    },
  ],

  geo: { lat: 51.1264, lng: 15.9247 },
};
