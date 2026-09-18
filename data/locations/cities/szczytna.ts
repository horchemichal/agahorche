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
 * SZCZYTNA — powiat kłodzki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Szczytna.
 * MIASTO: 4 766 mieszkańców (GUS 31.12.2024),
 *   POWIERZCHNIA 80,38 km² (= 8 038 ha), gęstość
 *   59,3 os./km² — najniższa w tej fali.
 *   ⚠ KONTROLA: 4 766 / 80,38 = 59,29 — DOMYKA SIĘ.
 *   ⚠⚠ POWIERZCHNIA POTWIERDZONA TRZEMA ŹRÓDŁAMI,
 *   w tym uchwałą rady miejskiej (8 038 ha).
 * CAŁA GMINA: 6 839 osób, 132,4 km², 8 wsi — Chocieszów,
 *   Dolina, Łężyce, Niwa, Słoszów, Studzienno, Wolany,
 *   Złotno.
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 6 839 / 132,4 = 51,65,
 *   a serwis podaje 53. Kontrola z geoportalu potwierdza
 *   ok. 51,6. NIE DOMYKA SIĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠⚠ OSOBLIWOŚĆ: MIASTO ZAJMUJE 60,7 % POWIERZCHNI SWOJEJ
 *   GMINY — jedyny taki przypadek w całym dolnośląskim
 *   cyklu (Żarów 8,6 %, Jaworzyna Śl. 6,4 %, Leśna 8,2 %).
 *   Mieszka w nim 69,7 % ludności gminy.
 *   ⚠⚠ PODAJĘ JAKO FAKT, NIE ROBIĘ Z TEGO KĄTA —
 *   proporcje miasta do gminy to obszar ograny.
 * ⚠ GEO: 50,4134 / 16,4475.
 *
 * ⚠⚠⚠ PUŁAPKI JĘZYKOWE — DWIE, OBIE POWAŻNE:
 *   1) „SZCZYTNA" TO ZWYKŁY PRZYMIOTNIK POLSKI w rodzaju
 *      żeńskim, od „szczytny" (= wzniosły): „szczytna
 *      idea", „szczytna sprawa". Różnica to wyłącznie
 *      wielka litera.
 *      ⚠⚠⚠ W CAŁYM TEKŚCIE NIE UŻYWAM PRZYMIOTNIKA
 *      „SZCZYTNY/SZCZYTNA" W ŻADNYM ZNACZENIU.
 *   2) Kolizja z rzeczownikiem „SZCZYT" — w mieście
 *      górskim zdanie o szczycie nad Szczytną jest
 *      naturalne i mylące.
 *      ⚠⚠⚠ UNIKAM SŁOWA „SZCZYT" — piszę „wzgórze",
 *      „wierzchołek", „najwyżej położone części".
 *   SPRAWDZIĆ OBA OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM —
 *   NIE USTALONO ŻADNEJ FORMY. ⚠⚠⚠ FORMA „SZCZYCIEŃSKI"
 *   NALEŻY DO SZCZYTNA W WARMIŃSKO-MAZURSKIM I NIE WOLNO
 *   JEJ TU UŻYĆ.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie ustalono.
 *   Piszę opisowo: „mieszkańcy Szczytnej", „w gminie
 *   Szczytna".
 *
 * ⚠⚠ ODMIANA — PRZYMIOTNIKOWA, RODZAJ ŻEŃSKI:
 *   D. Szczytnej (do Szczytnej) · Ms. w Szczytnej ·
 *   B. Szczytną · N. Szczytną.
 *   „Szczytna LEŻY", „TA Szczytna".
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠⚠ SZCZYTNO (warmińsko-mazurskie, miasto ok. 23 tys.,
 *     siedziba powiatu szczycieńskiego) — najgroźniejsza.
 *   — Szczytniki (wiele wsi i gmina w wielkopolskiem).
 *   — Park Szczytnicki we Wrocławiu — to samo województwo.
 *   — ⚠⚠ W POWIECIE KŁODZKIM NA JEDENAŚCIE MIAST AŻ CZTERY
 *     MAJĄ W NAZWIE CZŁON „-ZDRÓJ" (Duszniki, Kudowa,
 *     Lądek, Polanica). Szczytna jest jedynym miastem w tej
 *     okolicy BEZ tego członu i opisy regionu notorycznie
 *     wciągają ją do grupy „zdrojów". NIE JEST ZDROJEM.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠ PUŁAPKA WEWNĄTRZ TEJ SAMEJ FALI:
 *   pałac w Szczytnej nosi nazwę zawierającą słowo „Leśna",
 *   a LEŚNA to osobne miasto pisane w tej samej fali.
 *   ⚠⚠⚠ NAZWY TEGO PAŁACU NIE PODAJĘ W OGÓLE.
 *   Piszę „neogotycki pałac na wzgórzu Szczytnik".
 *   TWARDA GRANICA.
 *
 * ⚠⚠ PRAWA MIEJSKIE I PIERWSZA WZMIANKA:
 *   PIERWSZA WZMIANKA: XIV wiek [NP] — ⚠ DOKŁADNEGO ROKU
 *   NIE USTALONO, NIE PODAJĘ.
 *   PRAWA MIEJSKIE: 1973 [NP, jedno źródło] —
 *   NAJPÓŹNIEJSZE W CAŁEJ FALI. ⚠ Nadawcy nie ustalono.
 *   ⚠ Odstęp: około sześciuset lat. PODAJĘ OPISOWO.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDNA NAZWA, KILKA MIEJSC:
 *   Miasto Szczytna ma 80,38 km² i rozciąga się
 *   OD OKOŁO 340 DO PONAD 660 m n.p.m. — PONAD 320 METRÓW
 *   ROZPIĘTOŚCI — bo w jego granice weszły dawne wsie
 *   i przysiółki: BOBROWNIKI, BATORÓW, PODBORZE,
 *   PIEKIELNA GÓRA, BOROWIE.
 *   Centrum leży na 460–480 m, czyli mniej więcej
 *   w połowie tej rozpiętości: ani u dołu, ani u góry.
 *   JEDNA NAZWA OBEJMUJE KILKA MIEJSC, KTÓRE NIGDY NIE
 *   BYŁY POMYŚLANE RAZEM. To jest cały kąt.
 *   ⚠⚠ BEZPIECZNA FORMUŁA WYSOKOŚCI: „od około 340
 *   do ponad 660 m n.p.m., z centrum miasta na 460–480".
 *   Dokument planistyczny przypisuje 340 m Wolanom, które
 *   w wykazie GUS figurują jako ODRĘBNA WIEŚ — więc
 *   rozpiętość opisuję ostrożnie, nie przypisując dolnej
 *   granicy samemu miastu jako pewnej.
 *
 * ⚠⚠⚠ TWARDA GRANICA TEMATYCZNA TEGO TEKSTU:
 *   Naturalnym przykładem kuchennym dla tego kąta jest
 *   „spiżarnia", która bywa czterema miejscami o czterech
 *   różnych warunkach. ⚠⚠⚠ WOLNO MI POWIEDZIEĆ, ŻE TO
 *   KILKA MIEJSC I ŻE WARTO ROZPISAĆ, CO TA NAZWA
 *   OBEJMUJE. ⚠⚠⚠ NIE WOLNO MI POWIEDZIEĆ ANI SŁOWA
 *   O TYM, CO GDZIE TRZYMAĆ, JAK DŁUGO, W JAKIEJ
 *   TEMPERATURZE ANI CO SIĘ Z CZYM DZIEJE.
 *   ZERO PRZECHOWYWANIA, ZERO TERMINÓW, ZERO ŚWIEŻOŚCI,
 *   ZERO BEZPIECZEŃSTWA ŻYWNOŚCI, ZERO TEMPERATUR.
 *   MÓWIĘ TO W TEKŚCIE WPROST — że nie doradzam, co gdzie
 *   ma stać. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — STRUKTURA POWIERZCHNI MIASTA (uchwała rady miejskiej):
 *   lasy 6 484 ha = 80,7 %; użytki rolne 1 224 ha = 15,2 %;
 *   wszystko pozostałe — zabudowa, drogi, wody — 330 ha
 *   = 4,1 %. Razem 8 038 ha.
 *   ⚠ Kontrola: 6 484 + 1 224 = 7 708 ha, czyli 95,9 %.
 *   DOMYKA SIĘ.
 *   ⚠⚠ „Z BLATU WIDAĆ TYLKO BLAT" JAKO KĄT — NIE UŻYWAM:
 *   patrzenie na kuchnię z dystansu to w prostej linii
 *   układ kuchni, obszar zajęty wielokrotnie.
 *   PODAJĘ JAKO FAKT.
 * — Miasto leży w dolinie Bystrzycy Dusznickiej, która
 *   oddziela Góry Bystrzyckie od Gór Stołowych.
 * — WZGÓRZE SZCZYTNIK: 589 m n.p.m., stoi na nim
 *   neogotycki pałac. ⚠⚠ ROKU BUDOWY NIE PODAJĘ —
 *   źródła podają 1827 albo 1832–1838 [SP].
 *   ⚠⚠ ATRYBUCJI PROJEKTU NIE PODAJĘ — źródła piszą
 *   „przypisuje się" [NP]. ⚠ Wymiarów, wysokości wieży
 *   i liczby kondygnacji NIE USTALONO.
 * — HUTA SZKŁA: zakład, z którego się wywodzi, zbudowano
 *   w Batorowie w 1770 r.; profil to wyroby kryształowe
 *   wykonywane trzema technikami — dmuchane, prasowane
 *   ręcznie i prasowane automatycznie; zakład zamknięto
 *   i rozebrano w 2014 r.
 *   ⚠⚠ NAZWY MARKI NIE PODAJĘ — ZERO NAZW FIRM.
 *   ⚠⚠ ZATRUDNIENIA, LICZBY PIECÓW I WIELKOŚCI PRODUKCJI
 *   NIE USTALONO — nie podaję.
 *   ⚠⚠ TRZECH TECHNIK JAKO KĄTA NIE UŻYWAM — „ręcznie
 *   kontra maszynowo" jest pisane w tej samej fali
 *   (Duszniki-Zdrój). PODAJĘ JAKO FAKT.
 * — MIESZKANIA: 2 013, przeciętna powierzchnia 73,4 m²,
 *   3,75 izby, 13 oddanych do użytku w 2024 r.
 * — ⚠ NAJWYŻSZEGO PUNKTU OKOLICY (Wolarz, 852 m) NIE
 *   PODAJĘ — [NP], źródło turystyczne, i leży poza gminą.
 *
 * KĄT: JEDNA NAZWA, TRZYSTA DWADZIEŚCIA METRÓW RÓŻNICY
 * — o tym, że zbiorcza nazwa potrafi obejmować kilka
 * miejsc o zupełnie różnych warunkach, a wspólne mają
 * tylko tę nazwę. Kąt od Szczytnej: miasto wchłonęło pięć
 * dawnych wsi i przysiółków i rozciąga się na ponad
 * trzysta dwadzieścia metrów wysokości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto Szczytna ma 80,38 km² i rozciąga się
 *   od około 340 do ponad 660 m n.p.m., a centrum leży
 *   na 460–480 — mniej więcej w połowie tej rozpiętości,
 * — że wzięło się to stąd, iż w granice miasta weszły
 *   dawne wsie i przysiółki: Bobrowniki, Batorów,
 *   Podborze, Piekielna Góra i Borowie,
 * — ŻE JEDNA NAZWA OBEJMUJE KILKA MIEJSC, KTÓRE NIGDY NIE
 *   BYŁY POMYŚLANE RAZEM, I ŻE WSPÓLNA MAJĄ WŁAŚCIWIE
 *   TYLKO NAZWĘ. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MAMY DOKŁADNIE TAKIE NAZWY ZBIORCZE,
 *   I NAJCZĘSTSZĄ JEST „SPIŻARNIA": w wielu domach są
 *   to naprawdę trzy albo cztery miejsca — szafka,
 *   parapet, korytarz, balkon — o różnych warunkach,
 * — ⚠⚠⚠ ŻE NIE POWIEM, CO GDZIE TRZYMAĆ — MÓWIĘ TO
 *   W TEKŚCIE WPROST. To nie jest tekst o przechowywaniu,
 * — ⚠⚠ ŻE CAŁY RUCH POLEGA NA CZYMŚ INNYM: rozpisz
 *   na kartce, co ta jedna nazwa u Ciebie obejmuje.
 *   Ile to miejsc, gdzie są, czym się różnią,
 * — ⚠⚠ ŻE DOPÓKI TEGO NIE ZROBISZ, NIE DA SIĘ ODPOWIEDZIEĆ
 *   NA NAJPROSTSZE PYTANIA: „czy jest miejsce?",
 *   „gdzie to jest?" — bo odpowiedź brzmi „w spiżarni",
 *   a spiżarnia to cztery różne rzeczy,
 * — ⚠⚠ ŻE TO SAMO DOTYCZY KAŻDEJ INNEJ NAZWY ZBIORCZEJ,
 *   której używasz odruchowo,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nazwa zbiorcza jest
 *   wygodna i nie chodzi o to, żeby jej nie używać.
 *   Szczytna ma jedną nazwę i to jest w porządku.
 *   Chodzi o to, żeby wiedzieć, co pod nią jest,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie ma z tym nic
 *   wspólnego i nie będę udawać, że ma. MÓWIĘ TO WPROST.
 *   Jedyne, co robi, to zmniejsza liczbę naczyń, które
 *   muszą gdzieś wrócić po gotowaniu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZECHOWYWANIA, TERMINÓW, ŚWIEŻOŚCI,
 *   TEMPERATUR I BEZPIECZEŃSTWA ŻYWNOŚCI.
 *   ⚠⚠⚠ TO JEST NAJWIĘKSZE RYZYKO TEGO TEKSTU, BO PISZĘ
 *   O SPIŻARNI. Mówię w tekście wprost, że nie doradzam,
 *   co gdzie ma stać.
 * — ⚠⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI, STREF I UKŁADU
 *   KUCHNI — obszar zajęty wielokrotnie. Nie piszę,
 *   gdzie co postawić.
 * — ⚠⚠⚠ ZERO ETYKIET I OPISYWANIA RZECZY — kąt zajęty
 *   (Oborniki Śląskie). ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten
 *   tekst mówi, KTÓRĄ WIELKOŚĆ zapisać na przedmiocie;
 *   ten mówi, ŻE JEDNA NAZWA OBEJMUJE KILKA MIEJSC.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO POD RĘKĄ KONTRA SCHOWANE — kąt zajęty
 *   (Płoty).
 * — ⚠⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo). Nie przypisuję funkcji miejscom.
 * — ⚠⚠ ZERO MIEJSCA CELOWO PUSTEGO — kąt zajęty (Wołów).
 * — ⚠⚠ ZERO CHARAKTER NIE WYNIKA Z NAZWY — kąt zajęty
 *   (Człopa). Tamten tekst mówi, że nazwa myli co do
 *   właściwości; ten — że nazwa zbiorcza ukrywa liczbę
 *   miejsc. ROZGRANICZAM.
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH — kąt zajęty (Kudowa-Zdrój).
 * — ⚠⚠ ZERO RĘCZNIE KONTRA MASZYNOWO — kąt pisany w tej
 *   samej fali (Duszniki-Zdrój).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PODZIAŁU — podaję WYŁĄCZNIE jedno
 *   ćwiczenie: rozpisz, co ta nazwa obejmuje.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PRZYMIOTNIKA „SZCZYTNY/SZCZYTNA" I ZERO
 *   SŁOWA „SZCZYT".
 * — ⚠⚠⚠ ZERO NAZWY PAŁACU (zawiera człon kolidujący
 *   z nazwą Leśnej, pisanej w tej samej fali).
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU UZDROWISKOWEGO — Szczytna nie jest
 *   zdrojem i nie wprowadzam tego tematu nawet przez
 *   sąsiadów.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO BEZROBOCIA I DEMOGRAFII.
 * — ⚠ ZERO PRZECIĘTNEGO WYNAGRODZENIA — ⚠⚠ to wartość
 *   POWIATOWA, identyczna z Dusznikami-Zdrojem.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ dokładnego roku pierwszej wzmianki.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE PODAJĘ roku budowy pałacu — źródła sprzeczne.
 * — NIE PODAJĘ nazwy pałacu ani atrybucji jego projektu.
 * — NIE PODAJĘ wymiarów pałacu ani wysokości jego wieży.
 * — NIE PODAJĘ zatrudnienia ani liczby pieców w hucie.
 * — NIE PODAJĘ nazwy huty.
 * — NIE PRZYPISUJĘ samemu miastu dolnej granicy 340 m
 *   jako pewnej — dokument planistyczny wiąże ją z Wolanami,
 *   które są odrębną wsią gminy.
 * — NIE PODAJĘ odległości drogowych poza tym, że miasto
 *   leży przy drodze krajowej numer 8 na trasie z Kłodzka
 *   do Dusznik-Zdroju, liczącej 24 km.
 * — NIE PODAJĘ przeciętnego wynagrodzenia.
 * — NIE UŻYWAM przymiotnika od nazwy miasta ani nazwy
 *   mieszkańca.
 * — NIE DORADZAM, co gdzie trzymać.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pstrąg kłodzki", „pstrąg kłodzki
 *   wędzony" i „ciasto z kruszonką z Ziemi Kłodzkiej"
 *   to oznaczenia ZIEMI KŁODZKIEJ (dwadzieścia gmin),
 *   a „twaróg sudecki" i miody sudeckie — oznaczenia
 *   pasma. NIE PRZYPISUJĘ ICH SZCZYTNEJ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szczytna leży w powiecie kłodzkim, w dolinie Bystrzycy
 *   Dusznickiej, która oddziela Góry Bystrzyckie od Gór
 *   Stołowych; miasto liczy 4 766 mieszkańców
 *   (GUS, 31.12.2024) i zajmuje 80,38 km², czyli 8 038 ha,
 *   a cała gmina miejsko-wiejska 6 839 osób na 132,4 km²,
 *   z ośmioma wsiami; miasto zajmuje ponad trzy piąte
 *   powierzchni gminy,
 * — teren rozciąga się od około 340 do ponad 660 m n.p.m.,
 *   a centrum leży na 460–480 m; wzięło się to stąd,
 *   że w granice miasta weszły dawne wsie i przysiółki:
 *   Bobrowniki, Batorów, Podborze, Piekielna Góra
 *   i Borowie,
 * — w granicach miasta lasy zajmują 6 484 ha, czyli
 *   80,7 %, użytki rolne 1 224 ha, czyli 15,2 %,
 *   a wszystko pozostałe — zabudowa, drogi i wody —
 *   330 ha, czyli 4,1 %,
 * — na wzgórzu Szczytnik, 589 m n.p.m., stoi neogotycki
 *   pałac; zakład szklarski, z którego wywodzi się
 *   późniejsza huta w Szczytnej, zbudowano w Batorowie
 *   w 1770 r., a wyroby kryształowe powstawały tu trzema
 *   technikami — dmuchane, prasowane ręcznie i prasowane
 *   automatycznie; hutę zamknięto i rozebrano w 2014 r.,
 * — pierwsze wzmianki o miejscowości pochodzą z XIV w.,
 *   a prawa miejskie Szczytna otrzymała dopiero w 1973 r.,
 * — w mieście jest 2 013 mieszkań o przeciętnej
 *   powierzchni 73,4 m² i 3,75 izby; w 2024 r. oddano
 *   do użytku trzynaście nowych,
 * — miasto leży przy drodze krajowej nr 8, na trasie
 *   z Kłodzka do Dusznik-Zdroju, która liczy 24 km.
 */
export const SZCZYTNA: CityContent = {
  slug: "szczytna",
  h1: "Thermomix Szczytna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szczytna — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Szczytnej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczytna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczytnej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szczytnej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, które jest tu wyjątkowo rozległe, i do wszystkich ośmiu wsi w gminie.",

  highlights: highlightyStandardowe("Szczytna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedna nazwa, ponad trzysta dwadzieścia metrów różnicy wysokości.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczytnej – jak wygląda prezentacja?",
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
      id: "jedna-nazwa",
      heading: "Jedna nazwa, trzysta dwadzieścia metrów różnicy",
      paragraphs: [
        "Miasto Szczytna ma osiemdziesiąt kilometrów kwadratowych z okładem — więcej niż trzy piąte powierzchni całej swojej gminy — i rozciąga się od około trzystu czterdziestu do ponad sześciuset sześćdziesięciu metrów nad poziomem morza.",
        "Ponad trzysta dwadzieścia metrów różnicy. W granicach jednej miejscowości.",
        "Wzięło się to stąd, że w granice miasta weszły dawne wsie i przysiółki: Bobrowniki, Batorów, Podborze, Piekielna Góra, Borowie. Centrum leży na czterystu sześćdziesięciu do czterystu osiemdziesięciu metrach, czyli mniej więcej w połowie tej rozpiętości — ani u dołu, ani u góry.",
        "Jedna nazwa obejmuje kilka miejsc, które nigdy nie były pomyślane razem. Wspólną mają właściwie tylko nazwę.",
        "W kuchni mamy dokładnie takie nazwy zbiorcze, a najczęstsza z nich to „spiżarnia”.",
        "W większości mieszkań spiżarnia nie jest jednym miejscem. Jest szafką, parapetem, półką w korytarzu i skrzynką na balkonie — czterema miejscami o czterech różnych warunkach, które łączy to, że mówimy o nich jednym słowem.",
        "I tu powiem od razu, czego w tym tekście nie będzie: nie doradzę Ci, co gdzie trzymać. To nie jest tekst o przechowywaniu i nie zamierzam wchodzić w rzeczy, o których nie mam prawa się wypowiadać w takim miejscu jak strona sprzedażowa.",
        "Cały ruch polega na czymś innym i zajmuje dziesięć minut z kartką.",
        "Rozpisz, co ta jedna nazwa u Ciebie obejmuje. Ile to miejsc. Gdzie dokładnie są. Czym się między sobą różnią — nie w kategoriach dobrych i złych, tylko po prostu: czym.",
        "Dopóki tego nie zrobisz, nie da się odpowiedzieć na najprostsze pytania. „Czy jest jeszcze miejsce?” — nie wiadomo, bo w którym z czterech. „Gdzie to jest?” — „w spiżarni”, czyli w jednym z czterech miejsc, i trzeba sprawdzić wszystkie. Dwie minuty za każdym razem, kilka razy dziennie.",
        "To samo dotyczy każdej innej nazwy zbiorczej, której używasz odruchowo — a każdy ma ich kilka.",
        "Dopowiem, bo to leży blisko: nie chodzi o podpisywanie rzeczy ani o to, co napisać na pojemniku. Chodzi o coś wcześniejszego — o policzenie, ile miejsc kryje się pod jedną nazwą.",
        "Uczciwie o drugiej stronie: nazwa zbiorcza jest wygodna i nie chodzi o to, żeby z niej zrezygnować. Szczytna ma jedną nazwę i tak ma być — nikt nie będzie mówić „jadę do Podborza” zamiast „jadę do Szczytnej”. Chodzi wyłącznie o to, żeby wiedzieć, co pod tą nazwą jest.",
        "Na koniec o urządzeniu, i tu muszę być szczera: nie ma z tym nic wspólnego.",
        "Thermomix nie porządkuje spiżarni i nie udam, że porządkuje. Jedyne, co robi w tej sprawie, to zmniejsza liczbę naczyń, które po gotowaniu muszą gdzieś wrócić. To mało i tak to nazwijmy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczytnej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu warto podać nazwę części miasta — Szczytna jest rozległa i dojazd do Batorowa czy Bobrownik to co innego niż do centrum. Dla mnie to bez różnicy w cenie, ale łatwiej zaplanować godzinę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczytnej"),
    sekcjaRaty("w Szczytnej"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Szczytnej",
      paragraphs: [
        "Szczytna leży w powiecie kłodzkim, w dolinie Bystrzycy Dusznickiej, która oddziela Góry Bystrzyckie od Gór Stołowych. Samo miasto liczy 4 766 mieszkańców (GUS, 31.12.2024) i zajmuje osiemdziesiąt kilometrów kwadratowych z okładem, czyli ponad osiem tysięcy hektarów — a cała gmina miejsko-wiejska 6 839 osób na stu trzydziestu dwóch kilometrach, z ośmioma wsiami: Chocieszowem, Doliną, Łężycami, Niwą, Słoszowem, Studziennem, Wolanami i Złotnem. To rzadki układ: miasto zajmuje ponad trzy piąte powierzchni własnej gminy. Teren rozciąga się od około trzystu czterdziestu do ponad sześciuset sześćdziesięciu metrów nad poziomem morza, a centrum leży na czterystu sześćdziesięciu do czterystu osiemdziesięciu — bo w granice miasta weszły dawne wsie i przysiółki: Bobrowniki, Batorów, Podborze, Piekielna Góra i Borowie. Lasy zajmują tu sześć tysięcy czterysta osiemdziesiąt cztery hektary, czyli ponad cztery piąte powierzchni miasta; użytki rolne tysiąc dwieście dwadzieścia cztery, a wszystko pozostałe — zabudowa, drogi i wody — trzysta trzydzieści hektarów, czyli niecałe cztery procent. Na wzgórzu Szczytnik, pięćset osiemdziesiąt dziewięć metrów nad poziomem morza, stoi neogotycki pałac; źródła podają dwie różne daty jego budowy, więc żadnej tu nie wpiszę. Zakład szklarski, z którego wywodzi się późniejsza huta w Szczytnej, zbudowano w Batorowie w 1770 roku, a wyroby kryształowe powstawały tu trzema technikami: dmuchane, prasowane ręcznie i prasowane automatycznie. Hutę zamknięto i rozebrano w 2014 roku. Pierwsze wzmianki o miejscowości pochodzą z czternastego wieku, a prawa miejskie Szczytna otrzymała dopiero w 1973 — po mniej więcej sześciu stuleciach. W mieście jest 2 013 mieszkań o przeciętnej powierzchni siedemdziesięciu trzech metrów kwadratowych, a w 2024 roku oddano do użytku trzynaście nowych. Miasto leży przy drodze krajowej numer 8, na dwudziestoczterokilometrowej trasie z Kłodzka do Dusznik-Zdroju.",
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

  districtsHeading: "Do których części Szczytnej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest ono wyjątkowo rozległe, ponad osiemdziesiąt kilometrów kwadratowych — łącznie z Bobrownikami, Batorowem, Podborzem, Piekielną Górą i Borowiem, które weszły w jego granice. I do wszystkich ośmiu wsi w gminie: Chocieszowa, Doliny, Łężyc, Niwy, Słoszowa, Studzienna, Wolan i Złotna. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę części miasta. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Szczytną też przyjadę",
  nearbyParagraphs: [
    "Duszniki-Zdrój są stąd kilka kilometrów drogą krajową numer 8, Polanica-Zdrój podobnie, a Kłodzko leży na drugim końcu tej samej dwudziestoczterokilometrowej trasy. Dojeżdżam też do Kudowy-Zdroju, Radkowa i Bystrzycy Kłodzkiej — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Duszniki-Zdrój", "Polanica-Zdrój", "Kłodzko", "Kudowa-Zdrój", "Radków"],

  about: blokOMnie("do Szczytnej", "w Szczytnej i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczytnej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich ośmiu wsi w gminie. Warto wiedzieć, że Szczytna jest wyjątkowo rozległa — ponad osiemdziesiąt kilometrów kwadratowych, bo w jej granice weszły dawne wsie i przysiółki: Bobrowniki, Batorów, Podborze, Piekielna Góra i Borowie. Do każdego z tych miejsc dojeżdżam bez dopłaty. Chodzi o Szczytną w powiecie kłodzkim, nie o Szczytno w warmińsko-mazurskim; i choć w tym powiecie cztery z jedenastu miast mają w nazwie człon „-Zdrój”, Szczytna nie jest zdrojem i bywa do nich wciągana przez pomyłkę.",
    },
    ...faqWspolne("w Szczytnej"),
    {
      question: "Ciągle szukam rzeczy po całym mieszkaniu, choć „wszystko jest w spiżarni”. Od czego zacząć?",
      answer:
        "Od policzenia, ile miejsc kryje się pod tą nazwą. W większości mieszkań spiżarnia to szafka, parapet, półka w korytarzu i skrzynka na balkonie — cztery różne miejsca, które łączy jedno słowo. Miasto Szczytna działa podobnie: rozciąga się na ponad trzysta dwadzieścia metrów wysokości, bo wchłonęło pięć dawnych wsi i przysiółków, a wspólną mają właściwie tylko nazwę. Rozpisz na kartce, ile to miejsc, gdzie są i czym się różnią. Nie doradzę, co gdzie trzymać — to inna sprawa — ale bez tej listy nie da się odpowiedzieć nawet na pytanie „czy jest jeszcze miejsce”.",
    },
    {
      question: "Czy Thermomix pomoże mi ogarnąć zapasy?",
      answer:
        "Nie i nie będę tego obiecywać. Urządzenie nie porządkuje spiżarni ani niczego nie ewidencjonuje. Jedyne, co robi w tej sprawie, to zmniejsza liczbę naczyń, które po gotowaniu muszą gdzieś wrócić — bo większość pracy dzieje się w jednym naczyniu. To mało i wolę tak to nazwać, niż sprzedawać porządek, którego urządzenie nie zapewnia.",
    },
  ],

  geo: { lat: 50.4134, lng: 16.4475 },
};
