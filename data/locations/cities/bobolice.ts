import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * BOBOLICE — powiat koszaliński,
 * woj. zachodniopomorskie, Pojezierze
 * Bobolicko-Polanowskie, nad Chocielą.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 680 mieszkańców (GUS 31.12.2024), 4,8 km²,
 * gęstość 771,5 os./km².
 * CAŁA GMINA: 8 189 osób, 367,5 km².
 * ⚠ ROZBIEŻNOŚĆ POWIERZCHNI GMINY: 367,5 km²
 *   (polskawliczbach) kontra 363,12 km² (strona gminy).
 *   Piszę „ponad trzysta sześćdziesiąt" — bez
 *   rozstrzygania.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,9549 / 16,5877.
 * ⚠ WYSOKOŚCI N.P.M. SAMEGO MIASTA NIE USTALONO —
 *   podaję wyłącznie rozpiętość w gminie.
 * ⚠⚠ LICZBY SOŁECTW NIE USTALONO — piszę opisowo.
 *
 * ⚠ ODMIANA: PLURALE TANTUM, jak Katowice.
 *   D. BOBOLIC, Ms. W BOBOLICACH.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie potwierdzona.
 *   ⚠ PRZYMIOTNIKA TEŻ NIE UŻYWAM — w sekcji rodzinnej
 *   piszę „dla rodziny z Bobolic".
 * ⚠⚠⚠ HOMONIM O DUŻYM ZASIĘGU:
 *   BOBOLICE (zachodniopomorskie, powiat koszaliński)
 *   ≠ BOBOLICE na Jurze Krakowsko-Częstochowskiej,
 *   znane z odbudowanego zamku na Szlaku Orlich Gniazd.
 *   ⚠⚠⚠ DLATEGO NA TEJ STRONIE NIE PADA SŁOWO „ZAMEK"
 *   ANI RAZU. W Bobolicach zachodniopomorskich takiego
 *   obiektu nie ma, a każde użycie tego słowa ściąga
 *   skojarzenie z zupełnie innym miejscem.
 *   TWARDA GRANICA BEZWZGLĘDNA. ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 12 SIERPNIA 1320 — pierwsza udokumentowana wzmianka.
 * — 17 KWIETNIA 1340 — PRAWA MIEJSKIE (prawo lubeckie)
 *   i herb, nadane przez biskupa kamieńskiego Fryderyka
 *   von Eickstädt. ⚠ NADAWCĘ WYMIENIAM JAKO OSOBĘ
 *   NADAJĄCĄ PRAWA, bez rozwijania wątku wyznaniowego.
 * — 1 STYCZNIA 1958 — PONOWNE UZYSKANIE PRAW MIEJSKICH.
 *   ⚠⚠ BEZ PODAWANIA PRZYCZYNY UTRATY — prowadzi
 *   do roku 1945. TWARDA GRANICA.
 * — 1903–1905 — budowa KOLEI WĄSKOTOROWEJ łączącej
 *   Bobolice z Koszalinem i Białogardem.
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — wąskotorówka jest zajęta
 *   (Żnin). Podaję jako datę w bloku faktograficznym.
 * — KOŚCIÓŁ Wniebowzięcia NMP z lat 1882–1886.
 *   ⚠ WYMIENIAM JAKO BUDOWLĘ Z DATĄ.
 * — ⚠ HERBU NIE OPISUJĘ — motyw jest religijny.
 * — RZEŹBA TERENU GMINY: OD 65,0 DO 216,6 M N.P.M.,
 *   czyli ponad sto pięćdziesiąt metrów różnicy;
 *   wzgórza moreny czołowej, doliny, wąwozy.
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — „różnica wysokości"
 *   jest zajęta (Górzno), a „wysokość blatu" (Piotrków
 *   Kujawski).
 * — DZIŚ: sześć tras rowerowych w gminie.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — RADEW I JEJ DOPŁYWY:
 *   Główna rzeka gminy to RADEW, a źródła wymieniają
 *   z nazwy DZIESIĘĆ jej dopływów: Chociel, Chotła,
 *   Łęczna, Drezdrzyca, Dreźnianka, Łozica, Trzebiegoszcz,
 *   Leśnica, Darginka i Bielica. Sama Radew jest
 *   dopływem Parsęty — przez Chociel.
 *   Żaden z tych dziesięciu strumieni nie jest rzeką,
 *   o której ktokolwiek słyszał. Razem tworzą rzekę,
 *   która tworzy większą rzekę.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy
 *   Bobolice. NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: DZIESIĘĆ DOPŁYWÓW — o tym, że w kuchni czeka się
 * na jedno duże usprawnienie, a działa suma drobnych.
 * Kąt od Radwi: zasilają ją strumienie, z których żaden
 * nie ma własnej sławy, a razem tworzą rzekę na tyle
 * dużą, że sama zasila kolejną.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że główną rzeką gminy jest Radew i że źródła wymieniają
 *   z nazwy dziesięć jej dopływów, z których żaden nie jest
 *   znany poza okolicą, a sama Radew zasila potem Parsętę,
 * — ŻE WIELKOŚĆ RZEKI NIE BIERZE SIĘ Z JEDNEGO ŹRÓDŁA —
 *   to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI SZUKAMY ODWROTNIE: jednego dużego
 *   rozwiązania, które „w końcu" załatwi sprawę. Nowego
 *   sprzętu, nowego systemu, nowego planu tygodnia.
 *   A realna zmiana prawie zawsze składa się z rzeczy
 *   zbyt drobnych, żeby ktokolwiek chciał o nich mówić,
 * — ⚠⚠ ŻE DROBNE MA JEDNĄ PRZEWAGĘ NAD DUŻYM, KTÓREJ
 *   SIĘ NIE DOCENIA: nie wymaga decyzji. Duże usprawnienie
 *   trzeba postanowić, kupić, wdrożyć i utrzymać. Drobne
 *   po prostu się zaczyna i zostaje,
 * — ⚠⚠ ŻE Z TEGO WYNIKA SPOSÓB LICZENIA: nie „ile mi to
 *   oszczędzi dzisiaj", tylko „ile razy w miesiącu to się
 *   powtarza". Rzecz oszczędzająca dwie minuty raz
 *   w miesiącu jest nieistotna; ta sama rzecz przy
 *   codziennym powtórzeniu jest jedną z tych dziesięciu
 *   strug,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRZYKŁADU DROBNEGO
 *   USPRAWNIENIA — to byłaby instrukcja kuchenna.
 *   Podaję WYŁĄCZNIE sposób liczenia,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: SĄ SYTUACJE, W KTÓRYCH
 *   DROBNE NIE WYSTARCZY I POTRZEBNA JEST JEDNA DUŻA
 *   ZMIANA. Sumowanie drobiazgów bywa też sposobem
 *   na unikanie decyzji, której i tak trzeba będzie podjąć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO URZĄDZENIE JEST TĄ JEDNĄ
 *   DUŻĄ RZECZĄ, nie jedną ze strug — i nie będę udawać,
 *   że jest inaczej. ⚠⚠ ALE MÓWIĘ TEŻ, ŻE JEGO WARTOŚĆ
 *   I TAK LICZY SIĘ TAK SAMO: przez to, ile razy
 *   w miesiącu coś się powtarza. Kto gotuje dwa razy
 *   w tygodniu, dostanie z niego dwa razy tyle,
 *   ile z niego weźmie — a nie tyle, ile obiecuje folder.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SŁOWA „ZAMEK" — patrz homonim wyżej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO PROPORCJI ZAPASU — kąt zajęty (Górzno).
 * — ⚠⚠ ZERO UKŁADU KUCHNI — kąt zajęty (Myślibórz).
 * — ⚠⚠ ZERO NAJWĘŻSZEGO MIEJSCA I PLANOWANIA
 *   KOLEJNOŚCI — kąt zajęty (Darłowo). Tam chodzi
 *   o TO, CO BLOKUJE CAŁOŚĆ; TUTAJ o SUMOWANIE SIĘ
 *   DROBNYCH ZYSKÓW. Rozgraniczam wprost.
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt zajęty
 *   (Międzyzdroje). Tam chodzi o ZACZYNANIE OD KAWAŁKA;
 *   TUTAJ o SUMOWANIE SIĘ POWTÓRZEŃ.
 * — ⚠⚠ ZERO WĄSKOTORÓWKI I ROZSTAWU TORU — kąt zajęty
 *   (Żnin).
 * — ⚠ ZERO RÓŻNICY WYSOKOŚCI JAKO METAFORY — kąt zajęty
 *   (Górzno).
 * — ⚠ ZERO MIASTA, KTÓRE WRÓCIŁO NA MAPĘ — kąty zajęte
 *   (Czarny Dunajec, Książ Wielki, Miłakowo). Rok 1958
 *   podaję jako fakt administracyjny w bloku
 *   faktograficznym, bez morału.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO PRZYKŁADU DROBNEGO USPRAWNIENIA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO PRZYCZYNY UTRATY PRAW MIEJSKICH.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠⚠ ZERO SPADKU LICZBY LUDNOŚCI GMINY (−18,0 %
 *   w latach 2002–2024) I JEGO PRZYCZYN.
 * — ⚠ ZERO OPISU HERBU — motyw religijny.
 * — ⚠ ZERO WĄTKU BISKUPIEGO — nadawcę praw wymieniam
 *   raz, jako osobę.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ jednej powierzchni gminy — źródła się
 *   rozchodzą.
 * — NIE PODAJĘ wysokości n.p.m. miasta ani liczby sołectw.
 * — NIE UŻYWAM SŁOWA „ZAMEK".
 * — NIE UŻYWAM przymiotnika ani nazwy mieszkańca.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ PRZYKŁADÓW USPRAWNIEŃ.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Bobolice leżą nad Chocielą, na Pojezierzu
 *   Bobolicko-Polanowskim, w powiecie koszalińskim;
 *   są miastem w gminie miejsko-wiejskiej i liczą
 *   3 680 mieszkańców (GUS, 31.12.2024) na 4,8 km²,
 *   a cała gmina 8 189 osób na ponad trzystu
 *   sześćdziesięciu kilometrach kwadratowych,
 * — pierwsza udokumentowana wzmianka o miejscowości
 *   pochodzi z 12 sierpnia 1320 r., a prawa miejskie
 *   na prawie lubeckim wraz z herbem nadał jej
 *   17 kwietnia 1340 r. Fryderyk von Eickstädt;
 *   ponownie miasto uzyskało prawa miejskie
 *   1 stycznia 1958 r.,
 * — teren gminy sięga od 65 do 216,6 m n.p.m. — ponad
 *   sto pięćdziesiąt metrów różnicy — z wzgórzami moreny
 *   czołowej, dolinami i wąwozami,
 * — w latach 1903–1905 zbudowano kolej wąskotorową
 *   łączącą Bobolice z Koszalinem i Białogardem,
 *   a w latach 1882–1886 wzniesiono miejscowy kościół,
 * — główną rzeką gminy jest Radew, którą zasilają między
 *   innymi Chociel, Chotła, Łęczna, Drezdrzyca,
 *   Dreźnianka, Łozica, Trzebiegoszcz, Leśnica, Darginka
 *   i Bielica; sama Radew jest dopływem Parsęty,
 * — w gminie wytyczono sześć tras rowerowych.
 */
export const BOBOLICE: CityContent = {
  slug: "bobolice",
  h1: "Thermomix Bobolice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bobolice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Bobolicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bobolice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bobolicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bobolic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Bobolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Żaden z dziesięciu dopływów Radwi nie jest znany. Razem tworzą rzekę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bobolicach – jak wygląda prezentacja?",
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
      id: "dziesiec-doplywow",
      heading: "Dziesięć dopływów jednej rzeki",
      paragraphs: [
        "Główną rzeką gminy Bobolice jest Radew. Zasilają ją między innymi Chociel, Chotła, Łęczna, Drezdrzyca, Dreźnianka, Łozica, Trzebiegoszcz, Leśnica, Darginka i Bielica.",
        "Dziesięć nazw, z których żadna nie jest znana poza okolicą. Żaden z tych strumieni nie jest rzeką, o której ktokolwiek słyszał, i żaden sam z siebie niczego nie zmienia.",
        "A Radew, którą razem tworzą, jest już na tyle dużą rzeką, że sama zasila kolejną — Parsętę.",
        "W kuchni szukamy odwrotnie i to jest cała rzecz, o którą tu chodzi.",
        "Szukamy jednego dużego rozwiązania, które w końcu załatwi sprawę. Nowego sprzętu. Nowego systemu na tydzień. Nowego planu, nowej aplikacji, nowej metody. A realna zmiana w domowej kuchni prawie zawsze składa się z rzeczy zbyt drobnych, żeby ktokolwiek chciał o nich opowiadać — i dlatego nikt o nich nie opowiada.",
        "Drobne ma przy tym jedną przewagę nad dużym, której się nie docenia: nie wymaga decyzji. Duże usprawnienie trzeba postanowić, kupić, wdrożyć, a potem jeszcze utrzymać przy życiu. Drobne po prostu się zaczyna i zostaje, bo nie ma czego porzucać.",
        "Z tego wynika sposób liczenia, który warto sobie przyswoić, bo zmienia całą ocenę. Nie pytaj „ile mi to oszczędzi dzisiaj”. Pytaj „ile razy w miesiącu to się powtarza”.",
        "Rzecz oszczędzająca dwie minuty raz w miesiącu jest nieistotna i nie warto o niej myśleć. Dokładnie ta sama rzecz, powtarzana codziennie, jest już jedną z tych dziesięciu strug. Nie podam przykładów — zależą od tego, co i jak często gotujecie, a moja lista byłaby instrukcją, której nikt nie prosił. Sposób liczenia jest ważniejszy od listy.",
        "Uczciwie o drugiej stronie, i to ważne zastrzeżenie. Są sytuacje, w których drobne nie wystarczy i potrzebna jest jedna duża zmiana. Sumowanie drobiazgów bywa też wygodnym sposobem na odkładanie decyzji, którą i tak trzeba będzie podjąć — tylko później i drożej.",
        "I na koniec uczciwie o urządzeniu: ono jest tą jedną dużą rzeczą, nie jedną ze strug. Nie będę udawać, że jest inaczej — to zakup, decyzja i wydatek.",
        "Ale jego wartość liczy się dokładnie tą samą miarą: przez to, ile razy w miesiącu coś się powtarza. Kto gotuje dwa razy w tygodniu, dostanie z niego dokładnie tyle, ile z niego weźmie — a nie tyle, ile obiecuje folder. To jest jedyna uczciwa arytmetyka, jaką tu znam, i mówię ją przed zakupem, a nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bobolicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu gotujecie naprawdę — nie ile byście chcieli. Od tej jednej liczby zależy, czy w ogóle warto.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bobolicach"),
    sekcjaRaty("w Bobolicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Bobolic",
      paragraphs: [
        "Bobolice leżą nad Chocielą, na Pojezierzu Bobolicko-Polanowskim, w powiecie koszalińskim, i są miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad trzy i pół tysiąca mieszkańców na czterech i ośmiu dziesiątych kilometra kwadratowego, a cała gmina ponad osiem tysięcy osób na ponad trzystu sześćdziesięciu kilometrach kwadratowych. Pierwsza udokumentowana wzmianka o miejscowości pochodzi z dwunastego sierpnia 1320 roku, a prawa miejskie na prawie lubeckim wraz z herbem nadał jej siedemnastego kwietnia 1340 Fryderyk von Eickstädt; ponownie miasto uzyskało prawa miejskie pierwszego stycznia 1958 roku. Teren gminy sięga od sześćdziesięciu pięciu do dwustu szesnastu i sześciu dziesiątych metra nad poziomem morza — to ponad sto pięćdziesiąt metrów różnicy — a krajobraz tworzą wzgórza moreny czołowej, doliny i wąwozy. W latach 1903–1905 zbudowano kolej wąskotorową łączącą Bobolice z Koszalinem i Białogardem, a w latach 1882–1886 wzniesiono miejscowy kościół. Główną rzeką gminy jest Radew, którą zasilają między innymi Chociel, Chotła, Łęczna, Drezdrzyca, Dreźnianka, Łozica, Trzebiegoszcz, Leśnica, Darginka i Bielica; sama Radew jest dopływem Parsęty. W gminie wytyczono sześć tras rowerowych.",
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

  districtsHeading: "Do których części Bobolic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — a gmina jest rozległa i pofałdowana, z różnicą wysokości sięgającą stu pięćdziesięciu metrów. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Bobolice też przyjadę",
  nearbyParagraphs: [
    "Koszalin i Szczecinek są w zasięgu jednej trasy, podobnie jak Białogard i Sianów — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Koszalin", "Szczecinek", "Białogard", "Sianów"],

  about: blokOMnie("do Bobolic", "w Bobolicach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bobolic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzowanie jest tu naprawdę potrzebne: chodzi o Bobolice nad Chocielą, w powiecie koszalińskim w województwie zachodniopomorskim — a nie o miejscowość o tej samej nazwie na Jurze Krakowsko-Częstochowskiej, którą wyszukiwarki podpowiadają znacznie częściej.",
    },
    ...faqWspolne("w Bobolicach"),
    {
      question: "Czy lepiej szukać jednego dużego usprawnienia, czy wielu drobnych?",
      answer:
        "Realna zmiana w domowej kuchni prawie zawsze składa się z rzeczy zbyt drobnych, żeby ktokolwiek chciał o nich opowiadać. Drobne ma przy tym przewagę, której się nie docenia: nie wymaga decyzji — po prostu się zaczyna i zostaje. Ale uczciwie: bywa też wygodnym sposobem na odkładanie decyzji, którą i tak trzeba będzie podjąć, tylko później i drożej.",
    },
    {
      question: "Jak policzyć, czy Thermomix mi się opłaci?",
      answer:
        "Nie przez to, ile oszczędza przy jednym daniu, tylko przez to, ile razy w miesiącu coś się u Was powtarza. To urządzenie jest tą jedną dużą rzeczą — zakupem i decyzją — i nie będę udawać, że jest inaczej. Kto gotuje dwa razy w tygodniu, dostanie z niego dokładnie tyle, ile z niego weźmie, a nie tyle, ile obiecuje folder.",
    },
  ],

  geo: { lat: 53.9549, lng: 16.5877 },
};
