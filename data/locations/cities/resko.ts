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
 * RESKO — powiat łobeski, woj. zachodniopomorskie,
 * nad Regą. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 853 mieszkańców (GUS 31.12.2024), 4,5 km²,
 * gęstość 858,1 os./km², 42 M N.P.M.
 * CAŁA GMINA: 7 158 osób, 285,2 km², 39 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,7730 / 15,4062.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Resko".
 *   D. RESKA, C. RESKU, Ms. W RESKU.
 *   ⚠⚠ NIE POTWIERDZONE W PWN, ale wzór jest standardowy.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   źródła podają „reszczanin" i „reski" tylko
 *   w serwisach nieautorytatywnych. W sekcji rodzinnej
 *   piszę „dla rodziny z Reska".
 * ⚠ PUŁAPKA: dopełniacz „Reska" brzmi jak osobna nazwa
 *   własna; uważać też na wsie „Reszki" w innych
 *   województwach.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠ PRAWA MIEJSKIE: 1288 R. Jedno źródło podaje wariant
 *   „1280 lub 1288". Piszę „w 1288 roku", bez daty
 *   dziennej.
 * — XII w. — na wzgórzu nad Regą gród książąt pomorskich;
 *   rzeka stanowiła naturalną linię obrony.
 * — 1295 — pierwsza wzmianka dokumentalna o warowni
 *   („Castrum Regenwalde"); wcześniej, w 2. połowie
 *   XIII w., warownia drewniano-ziemna z inicjatywy
 *   Jakuba Borka.
 * — ⚠⚠⚠ RDZEŃ KĄTA — WYMIARY MURÓW WARÓWNI:
 *   KURTYNA PÓŁNOCNA 36 M DŁUGOŚCI,
 *   GRUBOŚĆ MURÓW OD 70 DO 125 CM,
 *   kopiec około 3,5 M wysokości.
 *   Grubość zmienia się w obrębie jednej budowli
 *   niemal dwukrotnie — bo różne odcinki miały różne
 *   zadania.
 *   ⚠ PRZEBUDOWA NA MUROWANĄ około 1365 r.
 * — 1774 — na gruzach wzniesiono dwór szachulcowy
 *   (konstrukcja ryglowa).
 *   ⚠⚠ ZNISZCZEŃ Z LAT 1756–1763 NIE PODAJĘ — wojna
 *   siedmioletnia.
 * — ⚠⚠ RODU VON BORCKE (367 LAT, 1441–1808) NIE ROBIĘ
 *   KĄTEM — „jedna rodzina przez wieki" prowadzi prosto
 *   w obszar przepisu przekazywanego w rodzinie, zajęty
 *   pięciokrotnie. Wymieniam sam fakt w bloku
 *   faktograficznym.
 * — KOŚCIÓŁ MARIACKI, gotycki; WIEŻĘ PODWYŻSZONO
 *   W 1881 R. DO 66 METRÓW.
 * — RATUSZ Z 1841 R.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy Resko.
 *   NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: GRUBOŚĆ DNA — dlaczego dwa garnki tej samej
 * wielkości zachowują się zupełnie inaczej.
 * Kąt od murów reskiej warowni: w jednej budowli grubość
 * wynosi od siedemdziesięciu do stu dwudziestu pięciu
 * centymetrów. Nie dlatego, że budowano niedbale —
 * dlatego, że różne odcinki miały różne zadania.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kurtyna północna ma trzydzieści sześć metrów
 *   długości, a grubość murów waha się od siedemdziesięciu
 *   do stu dwudziestu pięciu centymetrów — niemal
 *   dwukrotna różnica w obrębie jednego obiektu,
 * — ŻE GRUBOŚĆ NIE JEST OZDOBĄ ANI NIEDBAŁOŚCIĄ, TYLKO
 *   ODPOWIEDZIĄ NA ZADANIE — to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI DNO NACZYNIA DZIAŁA TAK SAMO
 *   I ŻE TO JEST NAJCZĘŚCIEJ POMIJANA CECHA GARNKA.
 *   Dwa naczynia tej samej wielkości, o różnej grubości
 *   dna, zachowują się inaczej — i to jest różnica
 *   fizyczna, nie kwestia gustu,
 * — ⚠⚠ ŻE RÓŻNICA SPROWADZA SIĘ DO DWÓCH RZECZY, PODANYCH
 *   JAKOŚCIOWO, BEZ ŻADNYCH LICZB:
 *   (1) GRUBE DNO WOLNIEJ SIĘ NAGRZEWA I WOLNIEJ STYGNIE
 *       — czyli wybacza chwilę nieuwagi i trudniej
 *       je przegrzać,
 *   (2) CIENKIE DNO REAGUJE NATYCHMIAST — czyli daje
 *       kontrolę temu, kto stoi obok, i karze tego,
 *       kto odszedł,
 * — ⚠⚠ ŻE ŻADNE Z NICH NIE JEST LEPSZE — są do czego
 *   innego, dokładnie jak odcinki muru. Pytanie brzmi:
 *   czy przy tym daniu będziesz stać, czy nie,
 * — ⚠⚠ ŻE Z TEGO WYNIKA TŁUMACZENIE CZĘSTEJ SYTUACJI:
 *   to samo danie, ten sam przepis, a raz przywiera,
 *   a raz nie. Bardzo często rozstrzyga o tym po prostu
 *   inny garnek,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEJ LICZBY MILIMETRÓW,
 *   ŻADNEGO MATERIAŁU Z NAZWY I ŻADNEGO DANIA.
 *   To byłyby porady zakupowe albo kulinarne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE MA JEDNO NACZYNIE
 *   O USTALONEJ KONSTRUKCJI I NIE DA SIĘ GO WYMIENIĆ
 *   NA GRUBSZE ANI CIEŃSZE. To jest ograniczenie i mówię
 *   je wprost. Za to znika druga strona problemu:
 *   przy stałym mieszaniu i trzymanej temperaturze
 *   „odejście od garnka" przestaje być czynnikiem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi o PROPORCJE
 *   NACZYNIA (szerokie i płaskie kontra wąskie i wysokie)
 *   i o powierzchnię styku z powietrzem; TUTAJ wyłącznie
 *   o GRUBOŚĆ DNA i bezwładność cieplną. Ani jednego
 *   zdania o kształcie, szerokości ani odparowaniu.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO POJEMNOŚCI I SKALOWANIA — kąty zajęte
 *   (Gniezno, Świdwin, Żnin).
 * — ⚠⚠ ZERO DWÓCH TAKICH SAMYCH NACZYŃ — kąt zajęty
 *   (Sianów, ta sama fala).
 * — ⚠⚠ ZERO PRZYWIERANIA JAKO TEMATU SAMEGO W SOBIE
 *   I ZERO DEGLASOWANIA — kąt zajęty (Torzym).
 *   Przywieranie wymieniam JEDNYM ZDANIEM jako objaw,
 *   nie jako temat.
 * — ⚠⚠ ZERO PRAŻENIA I SUCHEJ PATELNI — kąt zajęty
 *   (Zakroczym).
 * — ⚠⚠ ZERO NIERÓWNEGO PIECZENIA — kąt zajęty (Zielonka).
 * — ⚠ ZERO GARNKÓW ODZIEDZICZONYCH — kąt zajęty
 *   (Krośniewice).
 * — ⚠ ZERO PRZEPISU RODZINNEGO I RODU VON BORCKE JAKO
 *   METAFORY — obszar zajęty pięciokrotnie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNYCH MILIMETRÓW DNA, ŻADNEGO MATERIAŁU
 *   Z NAZWY I ŻADNEJ PORADY ZAKUPOWEJ DOTYCZĄCEJ GARNKÓW.
 *   Piszę WYŁĄCZNIE jakościowo: grube kontra cienkie.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ przy materiałach
 *   naczyń to pokusa oczywista. NIE PISZĘ ANI SŁOWA
 *   o tym, co z czego się wydziela.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO WOJNY SIEDMIOLETNIEJ I ZNISZCZEŃ WARÓWNI.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠⚠ ZERO WARÓWNI JAKO TEMATU OBRONNEGO — mury
 *   opisuję WYŁĄCZNIE jako konstrukcję z wymiarami.
 * — ⚠ ZERO KOŚCIOŁA JAKO WĄTKU WYZNANIOWEGO — wieżę
 *   wymieniam jako budowlę z datą i wysokością.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE UŻYWAM przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ GRUBOŚCI DNA W MILIMETRACH.
 * — NIE WYMIENIAM ŻADNEGO MATERIAŁU NACZYŃ.
 * — NIE DORADZAM, JAKI GARNEK KUPIĆ.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Resko leży nad Regą w powiecie łobeskim; jest miastem
 *   w gminie miejsko-wiejskiej i liczy 3 853 mieszkańców
 *   (GUS, 31.12.2024) na 4,5 km², czterdzieści dwa metry
 *   nad poziomem morza, a cała gmina 7 158 osób
 *   na 285,2 km² w 39 miejscowościach,
 * — w XII w. na wzgórzu nad Regą stał gród książąt
 *   pomorskich, a rzeka stanowiła jego naturalną linię
 *   obrony; prawa miejskie miasto otrzymało w 1288 r.,
 * — w 2. połowie XIII w. powstała tu warownia
 *   drewniano-ziemna z inicjatywy Jakuba Borka,
 *   wzmiankowana w 1295 r. jako „Castrum Regenwalde",
 *   a około 1365 r. przebudowana na murowaną: kurtyna
 *   północna ma 36 m długości, grubość murów waha się
 *   od 70 do 125 cm, a kopiec liczy około 3,5 m wysokości,
 * — w 1774 r. na gruzach wzniesiono dwór o konstrukcji
 *   szachulcowej,
 * — ród von Borcke władał miastem i okolicą przez
 *   trzysta sześćdziesiąt siedem lat, od 1441 do 1808 r.,
 * — wieżę gotyckiego kościoła Mariackiego podwyższono
 *   w 1881 r. do 66 metrów, a ratusz stanął w 1841 r.
 */
export const RESKO: CityContent = {
  slug: "resko",
  h1: "Thermomix Resko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Resko — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Resku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Resko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Resku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Reska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Resko"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Grube dno wybacza chwilę nieuwagi. Cienkie daje kontrolę temu, kto stoi obok.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Resku – jak wygląda prezentacja?",
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
      id: "grubosc-dna",
      heading: "Od siedemdziesięciu do stu dwudziestu pięciu centymetrów",
      paragraphs: [
        "Reska warownia, wzmiankowana w 1295 roku, a około 1365 przebudowana na murowaną, ma kurtynę północną o długości trzydziestu sześciu metrów. Ale najciekawsza liczba jest inna: grubość murów waha się w niej od siedemdziesięciu do stu dwudziestu pięciu centymetrów.",
        "Niemal dwukrotna różnica w obrębie jednej budowli. Nie dlatego, że budowano niedbale albo że zabrakło kamienia. Dlatego, że różne odcinki miały różne zadania — i grubość była na to odpowiedzią, a nie ozdobą.",
        "W kuchni dokładnie to samo dotyczy dna naczynia. I jest to chyba najczęściej pomijana cecha garnka: patrzymy na wielkość, czasem na kształt, prawie nigdy na to, jak grube jest dno.",
        "A dwa naczynia tej samej wielkości, o różnej grubości dna, zachowują się zupełnie inaczej. To jest różnica fizyczna, nie kwestia gustu ani ceny.",
        "Sprowadza się ona do dwóch rzeczy. Grube dno wolniej się nagrzewa i wolniej stygnie — czyli wybacza chwilę nieuwagi i trudniej je przegrzać, ale też dłużej trzeba czekać, aż zareaguje na to, co się zmieniło. Cienkie dno reaguje natychmiast — daje pełną kontrolę temu, kto stoi obok, i karze tego, kto odszedł do drugiego pokoju.",
        "Żadne z nich nie jest lepsze. Są do czego innego, dokładnie jak odcinki tamtego muru. Pytanie, które to rozstrzyga, jest jedno i brzmi zupełnie prozaicznie: czy przy tym daniu będziesz stać, czy nie.",
        "I stąd bierze się wyjaśnienie sytuacji, którą zna każdy. To samo danie, ten sam przepis, te same składniki — a raz przywiera, a raz nie. Bardzo często nie chodzi ani o rękę, ani o dzień. Chodzi o to, że użyto innego garnka.",
        "Nie podam żadnych milimetrów, nie wymienię materiałów i nie powiem, co kupić — to byłyby porady zakupowe, a nie o tym jest ta strona. Wystarczy wiedzieć, że ta różnica istnieje i że warto wiedzieć, które ze swoich naczyń jest które.",
        "Uczciwie o urządzeniu, bo tu jest realne ograniczenie. Ma jedno naczynie o ustalonej konstrukcji i nie da się go wymienić na grubsze ani cieńsze. Nie ma tu żadnego wyboru i nie będę udawać, że jest.",
        "Za to znika druga strona tego problemu. Przy stałym mieszaniu i trzymanej temperaturze „odejście od garnka” przestaje być czynnikiem — a przecież właśnie z niego bierze się większość różnic między jednym a drugim razem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Resku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was lubi przywierać — bardzo często to najkrótsza droga do tego, co warto zmienić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Resku"),
    sekcjaRaty("w Resku"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Reska",
      paragraphs: [
        "Resko leży nad Regą w powiecie łobeskim i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko cztery tysiące mieszkańców na czterech i pięciu dziesiątych kilometra kwadratowego, czterdzieści dwa metry nad poziomem morza, a cała gmina ponad siedem tysięcy osób na dwustu osiemdziesięciu pięciu kilometrach kwadratowych, w trzydziestu dziewięciu miejscowościach. W dwunastym wieku na wzgórzu nad Regą stał gród książąt pomorskich, a rzeka stanowiła jego naturalną linię obrony; prawa miejskie Resko otrzymało w 1288 roku. W drugiej połowie trzynastego wieku powstała tu warownia drewniano-ziemna z inicjatywy Jakuba Borka, wzmiankowana w 1295 jako „Castrum Regenwalde”, a około 1365 przebudowana na murowaną: kurtyna północna ma trzydzieści sześć metrów długości, grubość murów waha się od siedemdziesięciu do stu dwudziestu pięciu centymetrów, a kopiec liczy około trzech i pół metra wysokości. W 1774 roku na gruzach wzniesiono dwór o konstrukcji szachulcowej. Ród von Borcke władał miastem i okolicą przez trzysta sześćdziesiąt siedem lat, od 1441 do 1808 roku. Wieżę gotyckiego kościoła Mariackiego podwyższono w 1881 roku do sześćdziesięciu sześciu metrów, a ratusz stanął w 1841.",
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

  districtsHeading: "Do których części Reska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Regi — i do wszystkich trzydziestu dziewięciu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Resko też przyjadę",
  nearbyParagraphs: [
    "Łobez i Płoty są tuż obok, a Nowogard i Gryfice mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łobez", "Płoty", "Nowogard", "Gryfice"],

  about: blokOMnie("do Reska", "w Resku", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Reska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu dziewięciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Resko nad Regą w powiecie łobeskim w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Resku"),
    {
      question: "Dlaczego to samo danie raz przywiera, a raz nie?",
      answer:
        "Bardzo często rozstrzyga o tym po prostu inny garnek, a nie ręka ani dzień. Dwa naczynia tej samej wielkości, o różnej grubości dna, zachowują się inaczej: grube wolniej się nagrzewa i wolniej stygnie, więc wybacza chwilę nieuwagi; cienkie reaguje natychmiast, więc daje kontrolę temu, kto stoi obok, i karze tego, kto odszedł. Żadne nie jest lepsze — są do czego innego.",
    },
    {
      question: "Czy w Thermomixie da się wybrać grubsze albo cieńsze dno?",
      answer:
        "Nie — ma jedno naczynie o ustalonej konstrukcji i nie ma tu żadnego wyboru. To jest realne ograniczenie i mówię o nim wprost. Za to znika druga strona problemu: przy stałym mieszaniu i trzymanej temperaturze „odejście od garnka” przestaje być czynnikiem, a właśnie z niego bierze się większość różnic między jednym a drugim razem.",
    },
  ],

  geo: { lat: 53.773, lng: 15.4062 },
};
