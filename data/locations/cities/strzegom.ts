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
 * STRZEGOM — powiat świdnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ (gmina ZAWIERA
 *   miasto — inaczej niż Kamienna Góra i Złotoryja).
 * MIASTO: 14 867 mieszkańców (GUS 31.12.2024), 20,5 km²,
 *   gęstość 725,6 os./km².
 * CAŁA GMINA: 24 065 osób, 144,6 km², 23 wsie.
 * ⚠⚠ RÓŻNICA: 9 198 osób mieszka poza miastem.
 *   NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠ WYSOKOŚĆ: 230 m n.p.m. Rzeka Strzegomka.
 * ⚠ GEO: 50,9597 / 16,3486.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY:
 *   STRZEGOM ≠ STRZELIN — drugie dolnośląskie „miasto
 *   granitu", stale mylone przy zapytaniach
 *   o kamieniołomy. ⚠ Strzelin jest zresztą w tym samym
 *   serwisie do napisania. ZAWSZE PRECYZUJĘ POWIAT.
 *   ≠ STRZEGOWO (mazowieckie) ≠ wieś STRZEGOM
 *   (świętokrzyskie) ≠ STRZEGOMIANY (wieś pod Sobótką,
 *   w tym samym pasie granitowym) ≠ STRZEGOMKA (rzeka).
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠ ODMIANA: „w STRZEGOMIU", „do STRZEGOMIA".
 *   PRZYMIOTNIK: STRZEGOMSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny ze Strzegomia".
 *   ⚠⚠ UWAGA: „ZE Strzegomia", nie „z Strzegomia".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1155 — pierwsza wzmianka w bulli papieskiej,
 *   forma „gradice Ztrigom".
 *   ⚠ BULLI NIE WYMIENIAM JAKO DOKUMENTU PAPIESKIEGO —
 *   wątek wyznaniowy. Piszę „pierwsza wzmianka z 1155 r."
 * — 1242 — nadanie praw miejskich przez księżną Annę.
 * — ⚠⚠ KLASZTORU BENEDYKTYNÓW (1307) NIE WYMIENIAM.
 * — 1718 i 1719 — dwa największe pożary w historii
 *   miasta, w dwóch kolejnych latach.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „drugi raz nie jest
 *   łatwiejszy" zajęte (Węgorzyno), „co zostało"
 *   (Polanów). Podaję jako fakt.
 * — 1856 — otwarcie połączenia kolejowego.
 * — 1861 — uruchomienie gazowni.
 * — 1888 — rozbiórka zamku piastowskiego.
 * — 1890 — budynek stacji Strzegom Ratusz.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — GRANIT:
 *   PONAD 400 FIRM zajmujących się wydobyciem
 *   i przerobem kamienia; PONAD 4 000 OSÓB zatrudnionych
 *   w klastrze granitowym; KILKANAŚCIE DUŻYCH CZYNNYCH
 *   KAMIENIOŁOMÓW.
 *   ⚠ Wyrobiska w trzynastu lokalizacjach: Strzegom,
 *   Graniczna, Żółkiewka, Borów, Rogoźnica, Grabina,
 *   Gniewków, Czernica, Goczałków, Kostrza, Morawa,
 *   Pożarzysko.
 *   ⚠ Rodzaj kamienia: SZARY GRANIT BIOTYTOWY.
 *   ⚠⚠ KAMIENIOŁOM „ŻBIK": W 1948 R. WYDOBYTO STAMTĄD
 *   MONOLIT O WADZE 30 TON. To jest najmocniejsza
 *   pojedyncza liczba.
 *   ⚠⚠⚠ LICZBY 132 TYS. TON ROCZNIE NIE PODAJĘ JAKO
 *   WYDOBYCIA REJONU — to dane JEDNEGO ZAKŁADU.
 *   ⚠⚠ en.wikipedia podaje historycznie „pięć
 *   kamieniołomów" — sprzeczne ze współczesnym
 *   „kilkanaście". ROZRÓŻNIAM OKRES albo pomijam.
 *   ⚠ POWIERZCHNI MASYWU GRANITOWEGO I WIEKU
 *   GEOLOGICZNEGO NIE USTALONO — nie podaję.
 *
 * BAZYLIKA — FAKTY UŻYTE:
 * — Wysokość budowli 34,2 m; długość nawy środkowej
 *   76 m. ⚠ SZEROKOŚCI NIE USTALONO.
 * — Budowa od 1203; korpus nawowy 1335–1370; mury
 *   transeptu i prezbiterium ok. 1370 – I ćw. XV w.;
 *   sklepienie nawy głównej ok. poł. XV w.; wieża
 *   południowa ukończona 1522.
 * — 22 października 2012 — uznanie za Pomnik Historii
 *   rozporządzeniem Prezydenta RP.
 * — ⚠⚠ DZWONÓW NIE UŻYWAM JAKO KĄTA. Dzwon z 1318 r.
 *   o średnicy 120 cm jest najstarszym nieprzerwanie
 *   działającym dzwonem w Polsce (sandomierski z 1314
 *   milczał wiekami) — to świetny fakt, ALE morał
 *   „liczy się, czy nadal pracuje" ociera się o kąt
 *   zajęty (Polanów: których rzeczy się używa).
 *   ⚠ Wymieniam dzwon JAKO FAKT w sekcji rodzinnej,
 *   nigdy jako morał. WAG DZWONÓW NIE USTALONO.
 * — ⚠⚠ ORGANÓW (33 głosy 1794 → 53 głosy i 5 000
 *   piszczałek 1925) NIE UŻYWAM — wyposażenie kościelne,
 *   a morał o „każdy element wie, kiedy wchodzi"
 *   prowadzi w obszar mise en place (Mirosławiec).
 * — ⚠ BAZYLIKĘ OPISUJĘ WYŁĄCZNIE JAKO BUDOWLĘ
 *   O WYMIARACH I DATACH. Zero wnętrza, zero kultu.
 *
 * MURY MIEJSKIE — FAKTY UŻYTE:
 * — Budowa murów kamiennych 1291, ukończenie ok. 1299
 *   (osiem lat). Grubość dolnej części 1,2–2,4 m;
 *   wysokość 8–9 m; wysokość parapetu 1,8 m.
 *   Pięć bram: Jaworska, Wrocławska, Nowa, Świdnicka,
 *   Grabińska. Drugi pierścień: poł. XV w.
 *   Baszty półokrągłe ok. 1475.
 *   ⚠ CAŁKOWITEJ DŁUGOŚCI NIE USTALONO.
 *   ⚠⚠ MURÓW NIE UŻYWAM JAKO KĄTA — obszar zajęty
 *   (Recz: granica większa niż to, co ogradza;
 *   Moryń: punkty wejścia; Resko: grubość).
 *   Podaję je jako fakt w sekcji rodzinnej.
 *   ⚠⚠ ZERO WĄTKU OBRONNEGO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NA LIŚCIE MRiRW
 *   NIE MA WPISU ODNOSZĄCEGO SIĘ DO STRZEGOMIA
 *   ANI DO POWIATU ŚWIDNICKIEGO. Sprawdzono pełną listę
 *   52 wpisów dolnośląskich.
 *   ⚠⚠⚠ NIE PISZĘ „GMINA NIE MA PRODUKTÓW
 *   TRADYCYJNYCH". TEMAT NIE POJAWIA SIĘ W TEKŚCIE.
 *   ⚠ Wpisy z gminy Niemcza i „Kiełbasa w słoiku
 *   z Przedgórza Sudeckiego" to INNE GMINY — nie
 *   przypisuję ich Strzegomiowi.
 * ⚠ ODLEGŁOŚCI SZACUNKOWE (±3 km) — podaję „około":
 *   Dobromierz ok. 10 km, Jaworzyna Śląska ok. 13,
 *   Żarów ok. 13, Świebodzice ok. 16, Jawor ok. 17,
 *   Świdnica ok. 18, Wrocław ok. 60.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: Z GRANITU SIĘ TYLKO ODEJMUJE — o tym, że dobra
 * wersja dania powstaje przez wykreślanie, a nie przez
 * dokładanie, i że to jest trudniejsze, bo dokładanie
 * czuje się jak praca.
 * Kąt od strzegomskiego granitu: w obróbce kamienia nie
 * da się niczego dodać. Każda decyzja polega na tym,
 * co usunąć — i każda jest nieodwracalna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ze Strzegomia i okolic żyje z granitu ponad
 *   czterysta firm i ponad cztery tysiące osób,
 *   przy kilkunastu dużych czynnych kamieniołomach,
 *   a z wyrobiska „Żbik" wydobyto w 1948 r. monolit
 *   ważący trzydzieści ton,
 * — ŻE W OBRÓBCE KAMIENIA NIE DA SIĘ NICZEGO DODAĆ —
 *   to jest rdzeń. Cała praca polega na odejmowaniu
 *   i każda decyzja jest nieodwracalna,
 * — ⚠⚠ ŻE W KUCHNI MAMY ODWROTNY ODRUCH I JEST ON BARDZO
 *   SILNY: kiedy coś nie smakuje, DOKŁADAMY. Więcej
 *   soli, więcej przypraw, jeszcze jeden składnik,
 *   coś na wierzch,
 * — ⚠⚠ ŻE DOKŁADANIE CZUJE SIĘ JAK PRACA, A ODEJMOWANIE
 *   JAK REZYGNACJA — i to jest jedyny powód, dla którego
 *   robimy to w tę stronę. Nie ma w tym nic
 *   kulinarnego, to jest psychologia,
 * — ⚠⚠ ŻE PRAWDZIWA ROBOTA NAD PRZEPISEM POLEGA NA
 *   WYKREŚLANIU: robi się to samo danie kolejny raz
 *   i za każdym razem czegoś brakuje. Wersja, która
 *   zostaje po kilku takich podejściach, jest krótsza
 *   od pierwszej i lepsza,
 * — ⚠⚠ ŻE TO DZIAŁA TYLKO POD JEDNYM WARUNKIEM —
 *   usuwa się po jednej rzeczy naraz. Wyrzucenie trzech
 *   składników jednocześnie nie mówi nic o żadnym
 *   z nich,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: GRANIT JEST SKRAJNYM
 *   PRZYPADKIEM. W kuchni dużo rzeczy da się cofnąć,
 *   dolać, dogotować — i dobrze, bo inaczej gotowanie
 *   byłoby rzemiosłem dla nielicznych. Chodzi tylko
 *   o kierunek pracy, nie o dramatyzm,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie skraca listy
 *   składników i nie podejmuje takich decyzji. Ułatwia
 *   za to samo powtarzanie — a wykreślanie wymaga
 *   zrobienia tej samej rzeczy kilka razy pod rząd,
 *   co przy dużym nakładzie pracy po prostu się nie
 *   zdarza. MÓWIĘ TO WPROST i wąsko.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt
 *   zajęty (Międzyzdroje). ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   Tam chodzi o TO, ŻEBY ZACZĄĆ OD MINIMUM I DOPIERO
 *   POTEM ROZBUDOWYWAĆ; TUTAJ o TO, ŻEBY OD GOTOWEJ
 *   RZECZY ODEJMOWAĆ. Kierunek jest odwrotny i mówię
 *   to wprost w tekście: nie zaczynam od małego,
 *   tylko skracam duże. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Piszę o składnikach w daniu,
 *   nigdy o sprzęcie w szafce.
 * — ⚠⚠ ZERO PRZEPISÓW RODZINNYCH, ODTWARZANIA
 *   I WŁASNEJ WERSJI — obszar zajęty PIĘCIOKROTNIE.
 *   ⚠⚠ „Wersja, która zostaje" niebezpiecznie ociera się
 *   o ten obszar. NIE PISZĘ ani słowa o babci,
 *   o dziedziczeniu, o zapisywaniu i o tym, czyj
 *   to przepis. Piszę wyłącznie o kierunku pracy.
 * — ⚠⚠ ZERO JEDNEJ DZIWNEJ RZECZY, KTÓRĄ SIĘ ZAPAMIĘTUJE
 *   — kąt zajęty (Drawno).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty (Kamienna
 *   Góra, ta sama fala). Nie piszę o naczyniach
 *   ani o powtarzalności przez rozmiar.
 * — ⚠⚠ ZERO JEDNA POZYCJA ZAJMUJE POŁOWĘ — kąt zajęty
 *   (Pełczyce).
 * — ⚠⚠ ZERO GRUBOŚCI MURÓW I GRANICY — kąty zajęte
 *   (Resko, Recz, Moryń). Mury Strzegomia podaję
 *   wyłącznie jako fakt.
 * — ⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH SKŁADNIKÓW DO WYKREŚLENIA —
 *   podaję WYŁĄCZNIE metodę: po jednym naraz.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ w szczególności nic o soleniu jako o zdrowiu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — bazylikę opisuję jako
 *   budowlę z wymiarami; klasztoru, bulli i wnętrza
 *   nie wprowadzam.
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO.
 * — ⚠⚠ ZERO WYPADKÓW I KATASTROF W KAMIENIOŁOMACH —
 *   opisuję wyłącznie skalę i technikę.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ 132 tys. ton jako wydobycia rejonu —
 *   to dane jednego zakładu.
 * — NIE PODAJĘ liczby kamieniołomów bez wskazania
 *   okresu — źródła rozróżniają historyczne „pięć"
 *   i współczesne „kilkanaście".
 * — NIE PODAJĘ całkowitej długości murów.
 * — NIE PODAJĘ szerokości bazyliki ani wag dzwonów.
 * — NIE PODAJĘ powierzchni masywu granitowego
 *   ani jego wieku geologicznego.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNYCH KONKRETNYCH SKŁADNIKÓW.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Strzegom leży w powiecie świdnickim, nad Strzegomką,
 *   na wysokości 230 m n.p.m.; miasto liczy 14 867
 *   mieszkańców (GUS, 31.12.2024) na 20,5 km², a cała
 *   gmina 24 065 osób na 144,6 km², z dwudziestoma
 *   trzema wsiami,
 * — pierwsza wzmianka o miejscowości pochodzi z 1155 r.
 *   i zapisuje jej nazwę jako „gradice Ztrigom",
 *   a prawa miejskie nadała w 1242 r. księżna Anna,
 * — miasto płonęło w 1718 i 1719 r. — w dwóch
 *   kolejnych latach; połączenie kolejowe otwarto
 *   w 1856 r., gazownię uruchomiono w 1861 r.,
 *   a budynek stacji Strzegom Ratusz powstał w 1890 r.,
 * — mury miejskie budowano od 1291 do około 1299 r.;
 *   mają 8–9 m wysokości, 1,2–2,4 m grubości w dolnej
 *   części i parapet wysoki na 1,8 m, a prowadziło
 *   przez nie pięć bram: Jaworska, Wrocławska, Nowa,
 *   Świdnicka i Grabińska; baszty półokrągłe dostawiono
 *   około 1475 r.,
 * — bazylika ma 34,2 m wysokości i 76 m długości nawy
 *   środkowej; budowę rozpoczęto w 1203 r., korpus
 *   nawowy powstał w latach 1335–1370, a wieżę
 *   południową ukończono w 1522 r.; 22 października
 *   2012 r. obiekt uznano za Pomnik Historii;
 *   wisi w niej dzwon z 1318 r. o średnicy 120 cm,
 *   uchodzący za najstarszy nieprzerwanie działający
 *   dzwon w Polsce,
 * — w Strzegomiu i okolicy działa ponad czterysta firm
 *   zajmujących się wydobyciem i przerobem kamienia,
 *   zatrudniających łącznie ponad cztery tysiące osób,
 *   przy kilkunastu dużych czynnych kamieniołomach;
 *   wydobywa się tu szary granit biotytowy, a wyrobiska
 *   znajdują się między innymi w Granicznej, Borowie,
 *   Rogoźnicy, Goczałkowie, Kostrzy i Morawie;
 *   z kamieniołomu „Żbik" wydobyto w 1948 r. monolit
 *   o wadze trzydziestu ton.
 */
export const STRZEGOM: CityContent = {
  slug: "strzegom",
  h1: "Thermomix Strzegom – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Strzegom — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Strzegomiu (powiat świdnicki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Strzegom — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strzegomiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Strzegomia w powiecie świdnickim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu trzech wsi w gminie.",

  highlights: highlightyStandardowe("Strzegom"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W kamieniu nie da się niczego dodać. Cała praca polega na odejmowaniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strzegomiu – jak wygląda prezentacja?",
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
      id: "tylko-odejmowanie",
      heading: "W kamieniu nie da się niczego dodać",
      paragraphs: [
        "Strzegom żyje z granitu i nie jest to przenośnia. W mieście i okolicy działa ponad czterysta firm zajmujących się wydobyciem i przerobem kamienia, zatrudniają razem ponad cztery tysiące osób, a dużych czynnych kamieniołomów jest kilkanaście — w Granicznej, Borowie, Rogoźnicy, Goczałkowie, Kostrzy, Morawie i dalej. Z wyrobiska „Żbik” wyjęto w 1948 roku monolit ważący trzydzieści ton.",
        "W obróbce kamienia obowiązuje jedna zasada, której nie da się obejść: nie można nic dodać.",
        "Każda decyzja polega na tym, co usunąć. I każda jest nieodwracalna — odłupanego kawałka nie przykleja się z powrotem. Cała umiejętność sprowadza się do tego, żeby wiedzieć, czego już nie ruszać.",
        "W kuchni mamy odruch dokładnie odwrotny i jest bardzo silny.",
        "Kiedy coś nie smakuje, dokładamy. Więcej soli. Jeszcze jedna przyprawa. Coś dla koloru. Jeszcze jeden składnik, bo może tego brakowało. Rzadko kiedy pierwszą myślą jest, że czegoś jest po prostu za dużo.",
        "Powód jest przy tym całkiem nieskomplikowany i nie ma nic wspólnego z gotowaniem: dokładanie czuje się jak praca, a odejmowanie jak rezygnacja. Dosypanie czegoś to działanie. Pominięcie czegoś wygląda jak zaniechanie, nawet kiedy jest decyzją.",
        "Tymczasem prawdziwa robota nad daniem, które chce się robić często, polega właśnie na wykreślaniu.",
        "Robi się to samo kolejny raz i za każdym razem czegoś brakuje — jednej rzeczy. Wersja, która zostaje po kilku takich podejściach, jest krótsza od pierwszej i prawie zawsze lepsza. Nie dlatego, że mniej znaczy lepiej, tylko dlatego, że to, co zostało, naprawdę tam pracuje.",
        "Jest jeden warunek, bez którego to nie działa: usuwa się po jednej rzeczy naraz. Wyrzucenie trzech składników jednocześnie nie mówi nic o żadnym z nich — wiadomo tylko, że wyszło inaczej, i nie wiadomo, przez co.",
        "Uczciwie o drugiej stronie: granit jest przypadkiem skrajnym. W kuchni mnóstwo rzeczy da się cofnąć, dolać i dogotować — i całe szczęście, bo inaczej gotowanie byłoby rzemiosłem dla nielicznych. Chodzi wyłącznie o kierunek pracy, nie o to, żeby traktować obiad jak blok kamienia.",
        "Na koniec o urządzeniu, wąsko i bez naciągania. Ono nie skróci listy składników i nie podejmie za nikogo takiej decyzji.",
        "Robi natomiast jedną rzecz, która tu ma znaczenie: obniża koszt powtórzenia. A wykreślanie wymaga zrobienia tej samej rzeczy kilka razy pod rząd — i to jest właśnie ten moment, w którym przy dużym nakładzie pracy większość ludzi po prostu odpuszcza.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strzegomiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie robicie najczęściej. Dobrze jest zobaczyć różnicę właśnie na czymś, co znacie na pamięć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strzegomiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Strzegomia",
      paragraphs: [
        "Strzegom leży w powiecie świdnickim, nad Strzegomką, na wysokości dwustu trzydziestu metrów nad poziomem morza. Samo miasto liczy blisko piętnaście tysięcy mieszkańców (GUS, 31.12.2024) na dwudziestu i pół kilometra kwadratowego, a cała gmina ponad dwadzieścia cztery tysiące osób na stu czterdziestu czterech, z dwudziestoma trzema wsiami. Pierwsza wzmianka pochodzi z 1155 roku i zapisuje nazwę jako „gradice Ztrigom”, a prawa miejskie nadała w 1242 księżna Anna. Miasto płonęło w 1718 i 1719 — w dwóch kolejnych latach; połączenie kolejowe otwarto w 1856, gazownię uruchomiono w 1861, a budynek stacji Strzegom Ratusz powstał w 1890. Mury miejskie budowano od 1291 do około 1299: mają osiem do dziewięciu metrów wysokości, od metra dwudziestu do dwóch metrów czterdziestu grubości w dolnej części, a prowadziło przez nie pięć bram — Jaworska, Wrocławska, Nowa, Świdnicka i Grabińska. Bazylika ma trzydzieści cztery metry dwadzieścia wysokości i siedemdziesiąt sześć metrów długości nawy środkowej; budowę rozpoczęto w 1203, wieżę południową ukończono w 1522, a 22 października 2012 obiekt uznano za Pomnik Historii. Wisi w nim dzwon z 1318 roku o średnicy stu dwudziestu centymetrów, uchodzący za najstarszy nieprzerwanie działający dzwon w Polsce.",
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

  districtsHeading: "Do których części Strzegomia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech wsi w gminie — także tych, przy których leżą wyrobiska: Granicznej, Rogoźnicy, Goczałkowa, Kostrzy i Morawy. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Strzegom też przyjadę",
  nearbyParagraphs: [
    "Dobromierz jest około dziesięciu kilometrów stąd, Jaworzyna Śląska i Żarów po trzynaście, Świebodzice szesnaście, Jawor siedemnaście, a Świdnica osiemnaście. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Świdnica", "Jawor", "Żarów", "Jaworzyna Śląska", "Świebodzice"],

  about: blokOMnie("do Strzegomia", "w Strzegomiu", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strzegomia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Strzegom w powiecie świdnickim — nie o Strzelin, drugie dolnośląskie miasto granitu, z którym bywa mylony, ani o Strzegowo na Mazowszu. W tym samym pasie granitowym leżą też Strzegomiany pod Sobótką.",
    },
    ...faqWspolne("w Strzegomiu"),
    {
      question: "Danie mi nie smakuje — co zwykle warto zrobić?",
      answer:
        "Częściej sprawdza się odjęcie niż dodanie, choć odruch mamy odwrotny. Dokładanie czuje się jak praca, a pominięcie czegoś jak rezygnacja — i tylko dlatego prawie zawsze sypiemy coś jeszcze. Warto zrobić to samo danie kolejny raz, opuszczając jedną rzecz, i zobaczyć, czy czegoś brakuje. Jedną naraz, bo przy trzech naraz nie wiadomo, przez którą wyszło inaczej.",
    },
    {
      question: "Czy Thermomix pomaga dopracować przepis?",
      answer:
        "Nie skróci listy składników i nie podejmie takiej decyzji za nikogo. Obniża natomiast koszt powtórzenia — a dopracowanie czegokolwiek wymaga zrobienia tej samej rzeczy kilka razy pod rząd. To jest właśnie ten moment, w którym przy dużym nakładzie pracy większość ludzi odpuszcza, i tam ta różnica ma znaczenie.",
    },
  ],

  geo: { lat: 50.9597, lng: 16.3486 },
};
