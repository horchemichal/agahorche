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
 * WĄSOSZ — powiat górowski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 528 mieszkańców (GUS 31.12.2024), 3,2 km²,
 *   gęstość 780,2 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 6 703 osoby, 197,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (34,0 z dzielenia wobec 35 w źródle). REGUŁA
 *   POTWIERDZONA W TRZYNASTU FALACH.
 *   ⚠ Miasto to 1,6 % powierzchni gminy przy 37,7 % jej
 *   ludności. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 33 — miasto i 32 wsie (m.in. Pobiel,
 *   Czeladź Wielka, Sułów Wielki, Drozdowice Małe
 *   i Wielkie, Zbaków Dolny i Górny, Gola Wąsoska,
 *   Górka Wąsoska, Kamień Górowski, Świniary, Ługi).
 * WYSOKOŚĆ: 83–108 m n.p.m.
 * ⚠ GEO: 51,5617 / 16,6906.
 *
 * ⚠⚠ ODMIANA:
 *   D. do WĄSOSZA · Ms. w WĄSOSZU · N. Wąsoszem.
 *   Przymiotnik: WĄSOSKI (NIE „wąsoszski").
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW — SPRAWDZONA:
 *   — WĄSOSZ dolnośląski (ten) — wasosz.eu,
 *   — WĄSOSZ podlaski (gmina wiejska, pow. grajewski) —
 *     gminawasosz.pl,
 *   — WĄSOSZ GÓRNY (woj. śląskie).
 *   ⚠⚠ ŻADNEGO ODNIESIENIA DO TAMTYCH — ale przy
 *   weryfikacji nie mylić źródeł.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — LOKACJA I PRAWA MIEJSKIE: 1290 r., prawo
 *     magdeburskie, Henryk III głogowski; dokument
 *     wystawiony 22 listopada 1290 r. w Ścinawie
 *     [SP — jedno źródło podaje pełną datę dzienną.
 *     PODAJĘ Z ZASTRZEŻENIEM „według zachowanego
 *     dokumentu"].
 *   — UTRATA PRAW: w XX w. ⚠⚠⚠ ROKU NIE PODAJĘ —
 *     to rok wykluczony jako wątek w całym cyklu.
 *     PISZĘ „w XX wieku".
 *   — ODZYSKANIE PRAW: 1984 r.
 *   ⚠⚠ UTRATY I ODZYSKANIA NIE ROBIĘ KĄTEM — figura
 *   zajęta wielokrotnie (Szklarska Poręba, Świerzawa
 *   w tej samej fali, Prusice w tej samej fali).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SUMA STOI, ZAWARTOŚĆ SIĘ ZMIENIŁA:
 *   — 1933 r. — 2 530 mieszkańców,
 *   — 31.12.2024 r. — 2 528 mieszkańców.
 *   ⚠⚠⚠ RÓŻNICA: DWIE OSOBY PO DZIEWIĘĆDZIESIĘCIU
 *   JEDEN LATACH. ARYTMETYKA SPRAWDZONA:
 *   2 530 − 2 528 = 2; 2024 − 1933 = 91.
 *   ⚠⚠ NIE TWIERDZĘ, że przez te lata liczba stała
 *   w miejscu — twierdzę tylko, że punkt startowy
 *   i punkt końcowy są niemal identyczne. PISZĘ TO
 *   WPROST W TEKŚCIE.
 *   ⚠ DLA TŁA: 1557 r. — ok. 400 osób.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — kolej dotarła tu w 1886 i 1898 r. ⚠⚠ KOLEJ JEST
 *   WYŁĄCZNIE DATĄ W TLE — kąt kolejowy zajęty
 *   (Węgliniec, ta sama fala; Pieńsk).
 * — wieża ciśnień z 1912 r. ⚠ [SP — źródła nie są
 *   zgodne, czy obiekt jest jeden, czy dwa. PISZĘ
 *   „wieża ciśnień z 1912 roku", BEZ LICZBY OBIEKTÓW].
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wyznaniowe.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: STABILNA SUMA, ZMIENIONA ZAWARTOŚĆ
 * — o tym, że ta sama liczba na początku i na końcu
 * nie znaczy, że nic się nie wydarzyło. Kąt z dwóch
 * spisów Wąsosza: 2 530 osób w 1933 r. i 2 528
 * w 2024 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1933 r. mieszkało tu 2 530 osób, a 31 grudnia
 *   2024 r. — 2 528,
 * — ŻE TO DWIE OSOBY RÓŻNICY PO DZIEWIĘĆDZIESIĘCIU
 *   JEDEN LATACH. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE SUMA NIC NIE MÓWI O ZAWARTOŚCI: między tymi
 *   dwoma pomiarami zmieniło się tu praktycznie
 *   wszystko, a liczba wróciła na to samo miejsce,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: liczy się „ile godzin
 *   tygodniowo" albo „ile obiadów", suma wychodzi taka
 *   sama jak pięć lat temu i zapada wniosek, że nic
 *   się nie zmieniło — a zmieniło się to, CO jest
 *   w środku tej sumy,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: kiedy suma stoi, nie pytaj
 *   o sumę. Pytaj, co się w niej mieści — i czy
 *   zamieniłabyś to z powrotem,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem suma stoi,
 *   bo naprawdę nic się nie zmieniło. Rozróżnik jest
 *   prosty — wypisz trzy rzeczy, które robisz inaczej
 *   niż wtedy. Jeśli nie ma trzech, suma mówi prawdę,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie rzadko zmienia
 *   sumę. MÓWIĘ WPROST, że kto mierzy wyłącznie
 *   godzinami tygodniowo, może się rozczarować,
 *   bo zmienia się głównie zawartość tych godzin.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SKOKU, KTÓRY NIE BYŁ WZROSTEM — kąt
 *   zajęty (Twardogóra). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam liczba
 *   podskoczyła, choć nic realnego nie przybyło;
 *   tu liczba nie drgnęła, choć zmieniło się wszystko.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty
 *   (Stronie Śląskie).
 * — ⚠⚠⚠ ZERO PRZERWY ROSNĄ i ZERO KAŻDY KOLEJNY KROK
 *   IDZIE SZYBCIEJ — kąty zajęte (Węgliniec, Niemcza).
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ⚠⚠ ZERO X LAT BEZ STATUSU MIEJSKIEGO — kąt zajęty
 *   (Szklarska Poręba).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WYLUDNIENIA
 *   I BEZROBOCIA (liczby są tu materiałem na kąt
 *   o mierzeniu, NIE na diagnozę społeczną — PILNUJĘ
 *   TEGO W KAŻDYM ZDANIU) · ZERO POWODZI I POŻARÓW
 *   JAKO ŻYWIOŁU · ZERO ALKOHOLU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE TWIERDZĘ, że liczba ludności przez 91 lat
 *   stała w miejscu — porównuję dwa punkty.
 * — NIE NAZYWAM roku utraty praw miejskich.
 * — NIE PODAJĘ, ile jest wież ciśnień.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wąsosz leży w powiecie górowskim; miasto liczy
 *   2 528 mieszkańców (GUS, 31.12.2024) na 3,2 km²,
 *   czyli 780,2 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 6 703 osoby na 197,1 km²,
 * — gmina obejmuje 33 miejscowości: miasto i 32 wsie,
 * — miasto leży na wysokości od 83 do 108 m n.p.m.,
 * — prawa miejskie na prawie magdeburskim nadał
 *   Henryk III głogowski w 1290 r.; miasto utraciło
 *   je w XX w. i odzyskało w 1984 r.,
 * — w 1557 r. mieszkało tu ok. 400 osób, w 1933 r.
 *   2 530, a 31 grudnia 2024 r. — 2 528,
 * — kolej dotarła tu w 1886 i 1898 r.; wieża ciśnień
 *   pochodzi z 1912 r.
 */
export const WASOSZ: CityContent = {
  slug: "wasosz",
  h1: "Thermomix Wąsosz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wąsosz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Wąsoszu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wąsosz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wąsoszu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wąsosza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzydziestu dwóch wsi w gminie.",

  highlights: highlightyStandardowe("Wąsosz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwie osoby różnicy po dziewięćdziesięciu jeden latach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wąsoszu – jak wygląda prezentacja?",
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
      id: "stabilna-suma",
      heading: "Stabilna suma, zmieniona zawartość",
      paragraphs: [
        "W 1933 roku w Wąsoszu mieszkało 2 530 osób. Trzydziestego pierwszego grudnia 2024 roku — 2 528.",
        "Dwie osoby różnicy. Po dziewięćdziesięciu jeden latach.",
        "Nie twierdzę, że przez te lata liczba stała w miejscu — na pewno nie stała. Twierdzę coś węższego i moim zdaniem ciekawszego: punkt startowy i punkt końcowy są niemal identyczne, a między nimi zmieniło się w tym mieście praktycznie wszystko. Domy, praca, drogi, sposób życia. Suma wróciła tam, skąd wyszła.",
        "To jest dokładnie ta pułapka, w którą wpada się przy własnej kuchni.",
        "Liczy się godziny. Albo obiady w tygodniu. Wychodzi mniej więcej tyle samo co pięć lat temu i zapada wniosek: nic się nie zmieniło, nie warto było.",
        "A zmieniło się to, co jest w środku tej sumy. Te same trzy godziny, tylko już nie na stanie i pilnowaniu, tylko na pokrojeniu i wstawieniu. Ta sama liczba obiadów, tylko bez wieczornego wyliczania, co jutro. Suma nie drgnęła. Zawartość owszem.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o liczbie, która podskoczyła, choć nic realnego nie przybyło. Tu jest odwrotnie — liczba nie drgnęła, choć zmieniło się wszystko. Błąd jest w obu przypadkach ten sam: wzięcie liczby za rzecz, którą miała opisać.",
        "Ruch jest jeden. Kiedy suma stoi, nie pytaj o sumę. Zapytaj, co się w niej mieści — i czy zamieniłabyś to z powrotem.",
        "Uczciwie o drugiej stronie: czasem suma stoi, bo naprawdę nic się nie zmieniło, a my sobie wmawiamy, że jednak tak. Rozróżnik jest prosty i nieprzyjemny. Wypisz trzy konkretne rzeczy, które robisz dziś inaczej niż wtedy. Jeśli nie zbierze się trzech, suma mówi prawdę.",
        "I uczciwie o sprzęcie. Thermomix rzadko zmienia sumę. Gotować będziesz codziennie, prawdopodobnie mniej więcej tyle samo czasu. Zmienia się to, która część tego czasu należy do Ciebie, a którą urządzenie przepracuje samo. Kto mierzy wyłącznie godzinami w tygodniu, ma spore szanse się rozczarować — i wolę to powiedzieć teraz niż po dostawie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wąsoszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile czasu w tygodniu schodzi Wam dziś na gotowanie i na co dokładnie. Druga część tego pytania jest ważniejsza niż pierwsza.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wąsoszu"),
    sekcjaRaty("w Wąsoszu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wąsosza",
      paragraphs: [
        "Wąsosz leży w powiecie górowskim, na wysokości od osiemdziesięciu trzech do stu ośmiu metrów nad poziomem morza. Samo miasto liczy 2 528 mieszkańców (GUS, 31.12.2024) na 3,2 kilometra kwadratowego, czyli siedemset osiemdziesiąt osób na kilometr, a cała gmina miejsko-wiejska 6 703 osoby na 197,1 kilometra i obejmuje trzydzieści trzy miejscowości — miasto i trzydzieści dwie wsie, wśród nich Pobiel, Czeladź Wielką, Sułów Wielki, Drozdowice Małe i Wielkie, Zbaków Dolny i Górny, Golę Wąsoską, Górkę Wąsoską, Kamień Górowski, Świniary i Ługi. Gęstości dla całej gminy nie podaję, bo liczby ze źródeł się nie domykają. Prawa miejskie na prawie magdeburskim nadał tu Henryk III głogowski w 1290 roku — według zachowanego dokumentu 22 listopada, wystawionego w Ścinawie. Miasto utraciło je w XX wieku i odzyskało w 1984. Dla skali: w 1557 roku mieszkało tu około czterystu osób, w 1933 — 2 530. Kolej dotarła w 1886 i 1898 roku, wieża ciśnień pochodzi z 1912.",
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

  districtsHeading: "Do których części Wąsosza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu dwóch wsi w gminie: Pobiela, Czeladzi Wielkiej, Sułowa Wielkiego, Drozdowic Małych i Wielkich, Zbakowa Dolnego i Górnego, Goli Wąsoskiej, Górki Wąsoskiej, Kamienia Górowskiego, Świniar, Ługów i pozostałych. Wszędzie bez dopłaty.",
    "Gmina ma blisko dwieście kilometrów kwadratowych, więc przy umawianiu warto podać nazwę miejscowości — zwłaszcza że kilka z nich występuje w parach Małe i Wielkie albo Dolny i Górny.",
  ],
  districts: [],

  nearbyHeading: "Poza Wąsosz też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Góry, Żmigrodu, Milicza, Rawicza i Wołowa — wszędzie bezpłatnie, tak samo jak w samym Wąsoszu.",
  ],
  nearbyTowns: ["Góra", "Żmigród", "Milicz", "Rawicz", "Wołów"],

  about: blokOMnie("do Wąsosza", "w Wąsoszu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wąsosza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu dwóch wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Wąsosza” i „w Wąsoszu”, a przymiotnik brzmi „wąsoski”. I przy szukaniu w internecie łatwo trafić na Wąsosz w województwie podlaskim — to inna miejscowość.",
    },
    ...faqWspolne("w Wąsoszu"),
    {
      question: "Liczyłam godziny i wychodzi tyle samo co kiedyś. To znaczy, że nic się nie zmieniło?",
      answer:
        "Niekoniecznie — to znaczy tylko tyle, że suma stoi. W Wąsoszu w 1933 roku mieszkało 2 530 osób, a 31 grudnia 2024 roku 2 528: dwie osoby różnicy po dziewięćdziesięciu jeden latach, choć między tymi dwoma pomiarami zmieniło się w mieście praktycznie wszystko. Kiedy suma nie drga, trzeba pytać o jej zawartość. Sprawdzian jest prosty: wypisz trzy konkretne rzeczy, które robisz dziś inaczej niż wtedy. Jeśli nie zbierze się trzech, to rzeczywiście nic się nie zmieniło.",
    },
    {
      question: "Czy Thermomix skróci mi czas spędzany w kuchni?",
      answer:
        "Czasem tak, ale to nie jest jego główna zaleta i nie chcę tego obiecywać. Gotować będziesz codziennie, prawdopodobnie mniej więcej tyle samo czasu co teraz. Zmienia się to, która część tego czasu należy do Ciebie — krojenie i wstawienie zostaje, stanie nad garnkiem i pilnowanie w dużej mierze odpada. Jeśli mierzysz wyłącznie godzinami w tygodniu, możesz się rozczarować. Na prezentacji staram się pokazać, gdzie różnica siedzi naprawdę.",
    },
  ],

  geo: { lat: 51.5617, lng: 16.6906 },
};
