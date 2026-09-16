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
 * SIANÓW — powiat koszaliński, woj. zachodniopomorskie,
 * nad Unieścią. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 6 663 mieszkańców (GUS 31.12.2024), 15,9 km²,
 * gęstość 419,6 os./km².
 * CAŁA GMINA: 14 035 osób, 226,8 km², OKOŁO 45
 * MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 54,2265 / 16,2916.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA SIANÓW.
 *
 * ⚠ ODMIANA: D. SIANOWA, Ms. W SIANOWIE,
 *   przym. SIANOWSKI. Odmiana regularna dla nazw na -ów.
 *   ⚠⚠ NIE POTWIERDZONE W PORADNI PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — „sianowianin"
 *   występuje w słownikach ogólnych, nie w PWN.
 * ⚠⚠ HOMONIM: SIANÓW (zachodniopomorskie, powiat
 *   koszaliński) ≠ SIANOWO (wieś w pomorskiem, powiat
 *   kartuski). ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — pierwsze wzmianki: 1311, 1330, 1335.
 * — 11 LUTEGO 1343 — PRAWA MIEJSKIE (prawo lubeckie)
 *   od Piotra Święcy z Polanowa. ⚠ DATA DZIENNA, PEWNA.
 * — ⚠⚠⚠ RDZEŃ KĄTA — TRZY FABRYKI ZAPAŁEK NARAZ
 *   W JEDNYM MAŁYM MIEŚCIE:
 *   — 1 PAŹDZIERNIKA 1845 — fabryka Augusta Kolbego,
 *     START Z DWOMA PRACOWNIKAMI; do 1861 r. OSIEMDZIESIĘCIU,
 *   — 1871 — druga fabryka, braci Pohl,
 *   — 1899 — trzecia, przerobiona z mydlarni.
 *   ⚠⚠ ROKU 1984 (40 % KRAJOWEGO RYNKU, 2,5 MLN PUDEŁEK
 *   DZIENNIE, 600 PRACOWNIKÓW) NIE UŻYWAM — liczba
 *   pracowników prowadzi wprost do wątku zamknięcia
 *   zakładu w 2007 r. TWARDA GRANICA.
 * — 1869 — linia kolejowa Koszalin–Gdańsk;
 *   1877 — droga do stacji w Skibnie.
 * — RATUSZ Z 1879 R.; szkoła z dwunastoma salami
 *   z lat 1896–1897.
 * — KOŚCIÓŁ: nawa o konstrukcji ryglowej z ceglanym
 *   wypełnieniem z początku XVIII w.; wieża restaurowana
 *   w 1679 r. ⚠ OPISUJĘ JAKO BUDOWLĘ, bez wątku
 *   wyznaniowego.
 * — ⚠⚠ ZAMKU SPRZED 1330 R. NIE UŻYWAM JAKO KĄTA —
 *   jego lokalizacja jest nieznana i istnieją co najmniej
 *   cztery hipotezy. „Cztery wersje, żadnej pewnej"
 *   prowadzi prosto w obszar przepisu rodzinnego,
 *   zajęty pięciokrotnie. Wymieniam sam fakt istnienia
 *   zamku w bloku faktograficznym.
 * — ⚠⚠ SPISU RZEMIEŚLNIKÓW Z 1770 R. NIE UŻYWAM WCALE:
 *   po pierwsze „spis rzemiosł jako miara proporcji"
 *   to kąt zajęty (Górzno), po drugie liczba
 *   czterdziestu kołodziejów jest podejrzanie wysoka
 *   jak na miasto tej wielkości i NIE ZOSTAŁA
 *   ZWERYFIKOWANA W ŹRÓDLE PIERWOTNYM.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu dla Sianowa ani gminy. Strona gminy wymienia
 *   miody z trzech pasiek i pstrąga jako „dziedzictwo
 *   kulinarne", ale BEZ potwierdzenia wpisu na listę
 *   ministerialną. NIE PRZYPISUJĘ ŻADNEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: DWIE TAKIE SAME RZECZY — kiedy duplikat w kuchni
 * ma sens, a kiedy jest tylko zajętą półką.
 * Kąt od trzech fabryk zapałek działających w Sianowie
 * jednocześnie: 1845, 1871 i 1899. Jedno małe miasto,
 * trzy zakłady robiące dokładnie to samo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pierwszą fabrykę zapałek założył tu 1 października
 *   1845 r. August Kolbe, zaczynając od dwóch pracowników,
 *   a w 1861 r. było ich osiemdziesięciu; że w 1871 r.
 *   powstała druga fabryka, a w 1899 trzecia,
 * — ŻE POWIELENIE MA SENS TAM, GDZIE RZECZ JEST
 *   W CIĄGŁYM UŻYCIU — to jest rdzeń. Trzy zakłady
 *   utrzymywały się obok siebie, bo zapałka schodziła
 *   bez przerwy,
 * — ⚠⚠ ŻE W KUCHNI TEST JEST JEDEN I BRZMI: CZY ZDARZA
 *   SIĘ, ŻE POTRZEBUJESZ DWÓCH NARAZ. Nie „czy się
 *   przyda", nie „czy warto mieć zapas" — tylko czy
 *   dwie sztuki bywają potrzebne W TYM SAMYM MOMENCIE,
 * — ⚠⚠ ŻE TEN TEST PRZECHODZI ZASKAKUJĄCO NIEWIELE
 *   RZECZY, ale te, które przechodzą, zmieniają wieczór
 *   bardziej niż jakikolwiek nowy sprzęt. ⚠⚠⚠ NIE
 *   WYMIENIAM, KTÓRE TO RZECZY — to zależy od tego,
 *   co kto gotuje, i wskazanie listy byłoby zgadywaniem,
 * — ⚠⚠ ŻE DRUGA SZTUKA NIE MUSI BYĆ TAKA SAMA JAK
 *   PIERWSZA ANI RÓWNIE DOBRA. Ma być dostępna, gdy
 *   pierwsza jest zajęta — i to jest cała jej rola,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: DUPLIKAT RZECZY UŻYWANEJ
 *   RZADKO TO ZAJĘTA PÓŁKA I NIC WIĘCEJ. Miejsce
 *   w kuchni jest skończone, a rzecz, po którą sięga się
 *   dwa razy w roku, nie potrzebuje bliźniaka,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TEGO URZĄDZENIA NIKT NIE
 *   KUPUJE W DWÓCH SZTUKACH i nie o to tu chodzi.
 *   Ono działa odwrotnie: część rzeczy, które trzeba było
 *   mieć podwójnie, przestaje być potrzebna podwójnie,
 *   bo jedna czynność dzieje się bez udziału rąk.
 *   NIE ZNIKA ZA TO NIC, CO MUSI ISTNIEĆ FIZYCZNIE
 *   W DWÓCH EGZEMPLARZACH NARAZ.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PROPORCJI ZAPASU W SZAFCE — kąt zajęty
 *   (Górzno). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o ILE CZEGO KUPOWAĆ DO JEDZENIA; TUTAJ wyłącznie
 *   o SPRZĘTY I NACZYNIA, i to o jednym pytaniu: czy
 *   bywają potrzebne dwa naraz. Ani jednego zdania
 *   o produktach spożywczych. TWARDA GRANICA —
 *   rozgraniczam wprost.
 * — ⚠⚠ ZERO SPRZĘTU JEDNOZADANIOWEGO I DECYZJI
 *   O ZAKUPIE — kąt zajęty (Łasin). Tam rozstrzyga się,
 *   CZY KUPIĆ COŚ NOWEGO; TUTAJ czy mieć DWIE SZTUKI
 *   czegoś, co już się ma.
 * — ⚠⚠ ZERO RZECZY NIEUŻYWANYCH — kąt zajęty (Nowogard).
 * — ⚠⚠ ZERO UKŁADU KUCHNI I MIEJSCA NA PÓŁKACH — kąt
 *   zajęty (Myślibórz). Wspominam o zajętej półce jednym
 *   zdaniem i nie rozwijam.
 * — ⚠⚠ ZERO GARNKÓW ODZIEDZICZONYCH — kąt zajęty
 *   (Krośniewice).
 * — ⚠ ZERO POJEMNOŚCI I KSZTAŁTU NACZYNIA — kąty zajęte
 *   (Gniezno, Choszczno, Żnin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNEJ LISTY SPRZĘTÓW DO PODWOJENIA — podaję
 *   wyłącznie TEST, nigdy gotową listę.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZAMKNIĘCIA FABRYKI ZAPAŁEK W 2007 R.
 *   i zero liczby zatrudnionych w latach osiemdziesiątych.
 *   Zakład działał sto sześćdziesiąt dwa lata i upadł —
 *   to jest wątek upadłości i bezrobocia w mieście, które
 *   z tej fabryki żyło. NIE WSPOMINAM ANI JEDNYM SŁOWEM.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO POŻARU DRUGIEJ FABRYKI Z 1884 R.
 * — ⚠⚠ ZERO CMENTARZY — zarówno komunalnego z 1844 r.,
 *   jak i cmentarza żydowskiego. Ten drugi to wątek
 *   wyznaniowy prowadzący do Zagłady.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠ ZERO REZYDENCJI BISKUPIEJ W ZAMKU — wątek
 *   wyznaniowy. Zamek wymieniam raz, jako budowlę.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ spisu rzemieślników z 1770 r.
 * — NIE PODAJĘ lokalizacji zamku — nie jest znana.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PRZYPISUJĘ Sianowowi produktu z Listy.
 * — NIE PODAJĘ LISTY SPRZĘTÓW DO PODWOJENIA.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sianów leży nad Unieścią w powiecie koszalińskim,
 *   jest miastem w gminie miejsko-wiejskiej i liczy
 *   6 663 mieszkańców (GUS, 31.12.2024) na 15,9 km²;
 *   cała gmina ma 14 035 osób na 226,8 km² i obejmuje
 *   około czterdziestu pięciu miejscowości,
 * — pierwsze wzmianki o osadzie pochodzą z lat 1311,
 *   1330 i 1335, a prawa miejskie na prawie lubeckim
 *   nadał jej 11 lutego 1343 r. Piotr Święca z Polanowa;
 *   przed 1330 r. stał tu zamek, którego lokalizacji
 *   do dziś nie ustalono,
 * — 1 października 1845 r. August Kolbe założył w Sianowie
 *   fabrykę zapałek, zaczynając od dwóch pracowników;
 *   w 1861 r. pracowało w niej osiemdziesiąt osób.
 *   W 1871 r. powstała druga fabryka zapałek, założona
 *   przez braci Pohl, a w 1899 trzecia, przerobiona
 *   z dawnej mydlarni,
 * — linia kolejowa z Koszalina do Gdańska ruszyła
 *   w 1869 r., a w 1877 zbudowano drogę do stacji
 *   w Skibnie,
 * — ratusz stanął w 1879 r., a szkoła z dwunastoma salami
 *   w latach 1896–1897; nawa miejscowego kościoła ma
 *   konstrukcję ryglową z ceglanym wypełnieniem z początku
 *   XVIII w., a wieżę restaurowano w 1679 r.
 */
export const SIANOW: CityContent = {
  slug: "sianow",
  h1: "Thermomix Sianów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sianów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sianowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sianów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sianowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sianowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Sianów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Duplikat ma sens tylko wtedy, gdy bywa potrzebny w tym samym momencie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sianowie – jak wygląda prezentacja?",
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
      id: "dwie-takie-same",
      heading: "Trzy fabryki zapałek w jednym mieście",
      paragraphs: [
        "Pierwszego października 1845 roku August Kolbe założył w Sianowie fabrykę zapałek. Zaczynał z dwoma pracownikami. Szesnaście lat później pracowało w niej osiemdziesiąt osób.",
        "W 1871 roku powstała w tym samym mieście druga fabryka zapałek, założona przez braci Pohl. W 1899 — trzecia, przerobiona z dawnej mydlarni.",
        "Trzy zakłady robiące dokładnie to samo, w jednym niedużym mieście, jednocześnie. I to nie był błąd ani nadmiar: zapałka schodziła bez przerwy, więc trzy fabryki miały co robić.",
        "Na tym polega cała zasada powielania i ona przekłada się na kuchnię jeden do jednego.",
        "Duplikat ma sens tam, gdzie rzecz jest w ciągłym użyciu. Nigdzie indziej.",
        "Test jest jeden i jest krótki: czy zdarza się, że potrzebujesz dwóch naraz. Nie „czy się przyda”. Nie „czy warto mieć na wszelki wypadek”. Tylko czy bywają potrzebne w tym samym momencie — bo jedna jest właśnie zajęta, brudna albo stoi na ogniu, a rzecz trzeba zrobić teraz.",
        "Ten test przechodzi zaskakująco niewiele rzeczy. Ale te, które go przechodzą, zmieniają wieczór bardziej niż jakikolwiek nowy sprzęt, bo usuwają przestój, który wraca co tydzień. Nie napiszę, co to u Was będzie — to zależy wyłącznie od tego, co gotujecie, a zgadywanie za kogoś byłoby tu bez sensu. Wystarczy przez tydzień zauważać momenty, w których czekacie, aż coś się zwolni.",
        "I rzecz, która ludzi zwykle zaskakuje: druga sztuka nie musi być taka sama jak pierwsza ani równie dobra. Ma być dostępna, kiedy pierwsza jest zajęta. Tyle. Ta gorsza, starsza, mniej ładna zupełnie wystarczy do roli, do której jest potrzebna.",
        "Teraz druga strona, bo bez niej brzmiałoby to jak zachęta do kupowania. Duplikat rzeczy używanej rzadko to zajęta półka i nic więcej. Miejsce w kuchni jest skończone, a rzecz, po którą sięgacie dwa razy w roku, nie potrzebuje bliźniaka — potrzebuje tylko tego, żeby dało się ją znaleźć.",
        "Uczciwie o urządzeniu, bo tutaj akurat sprawa jest prosta i nie ma w niej nic do sprzedania. Nikt nie kupuje go w dwóch sztukach i nie o tym jest ta strona.",
        "Ono działa zresztą odwrotnie. Część rzeczy, które trzeba było mieć podwójnie, przestaje być potrzebna podwójnie — bo jedna czynność dzieje się bez udziału rąk, więc nie blokuje kolejnej. Za to nie znika nic, co po prostu musi istnieć fizycznie w dwóch egzemplarzach naraz, i tego żaden sprzęt nie załatwi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sianowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, na co u Was najczęściej trzeba czekać, aż się zwolni — to zwykle najciekawszy punkt całej rozmowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sianowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sianowskiej rodziny",
      paragraphs: [
        "Sianów leży nad Unieścią w powiecie koszalińskim i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad sześć i pół tysiąca mieszkańców na piętnastu i dziewięciu dziesiątych kilometra kwadratowego, a cała gmina ponad czternaście tysięcy osób na dwustu dwudziestu sześciu kilometrach kwadratowych, w około czterdziestu pięciu miejscowościach. Pierwsze wzmianki o osadzie pochodzą z lat 1311, 1330 i 1335, a prawa miejskie na prawie lubeckim nadał jej jedenastego lutego 1343 roku Piotr Święca z Polanowa. Przed 1330 rokiem stał tu zamek, którego lokalizacji do dziś nie udało się ustalić — istnieje kilka konkurencyjnych hipotez i żadnej nie potwierdzono. Pierwszego października 1845 roku August Kolbe założył w mieście fabrykę zapałek, zaczynając od dwóch pracowników; w 1861 pracowało w niej osiemdziesiąt osób. W 1871 powstała druga fabryka zapałek, braci Pohl, a w 1899 trzecia, przerobiona z dawnej mydlarni. Linia kolejowa z Koszalina do Gdańska ruszyła w 1869 roku, a w 1877 zbudowano drogę do stacji w Skibnie. Ratusz stanął w 1879, szkoła z dwunastoma salami w latach 1896–1897, a nawa miejscowego kościoła ma konstrukcję ryglową z ceglanym wypełnieniem z początku osiemnastego wieku; wieżę restaurowano w 1679 roku.",
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

  districtsHeading: "Do których części Sianowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie — jest ich około czterdziestu pięciu. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Sianów też przyjadę",
  nearbyParagraphs: [
    "Koszalin jest dziesięć kilometrów stąd, a Darłowo, Kołobrzeg i Białogard mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Koszalin", "Darłowo", "Kołobrzeg", "Białogard"],

  about: blokOMnie("do Sianowa", "w Sianowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sianowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie — jest ich około czterdziestu pięciu. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Sianów w powiecie koszalińskim, nie o Sianowo w pomorskiem.",
    },
    ...faqWspolne("w Sianowie"),
    {
      question: "Czy warto mieć w kuchni dwie takie same rzeczy?",
      answer:
        "Tylko wtedy, gdy bywają potrzebne w tym samym momencie. Nie „czy się przyda” i nie „na wszelki wypadek” — tylko czy zdarza się, że musicie czekać, aż jedna się zwolni. Ten test przechodzi zaskakująco niewiele rzeczy, ale te, które go przechodzą, usuwają przestój wracający co tydzień. Duplikat czegoś używanego dwa razy w roku to zajęta półka i nic więcej.",
    },
    {
      question: "Czy druga sztuka musi być taka sama jak pierwsza?",
      answer:
        "Nie musi i to zwykle najbardziej zaskakuje. Ma być dostępna, kiedy pierwsza jest zajęta — i to cała jej rola. Starsza, gorsza albo mniej ładna w zupełności wystarczy, bo nie o jakość tu chodzi, tylko o to, żeby nie trzeba było czekać.",
    },
  ],

  geo: { lat: 54.2265, lng: 16.2916 },
};
