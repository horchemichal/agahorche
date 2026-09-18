import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * RAKONIEWICE — powiat grodziski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ RAKONIEWICE NIE MA.
 * MIASTO: 3 582 mieszkańców (GUS 31.12.2024), 3,4 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 062,9 os./km², iloraz daje 1 053,5. ROZBIEŻNOŚĆ
 *   9,4. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. MIASTA NIE USTALONO [NP].
 * CAŁA GMINA: 13 241 osób, 201,0 km², gęstość
 *   66 os./km².
 *   ⚠ [ZW — 13 241 / 201,0 = 65,9 → 66. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NAJLUDNIEJSZA GMINA TEJ FALI.
 *   ⚠ LESISTOŚĆ 40,3% (drugie źródło). PODAJĘ.
 *   ⚠ Gmina zajmuje 31,3% powierzchni powiatu
 *   grodziskiego. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 34 w wykazie. PODAJĘ.
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   WSIE (wybór): Adolfowo, Blinek, Błońsko,
 *   Cegielsko, Drzymałowo, Gnin, Gola, Głodno,
 *   Jabłonna, Kuźnica Zbąska, Rostarzewo, Ruchocice,
 *   Terespol, Wola Jabłońska, Łąkie.
 *   ⚠⚠ PUŁAPKI WEWNĘTRZNE: JABŁONNA / WOLA JABŁOŃSKA
 *   oraz GOLA / GŁODNO. WSPOMINAM.
 *   ⚠⚠ NAJWIĘKSZA WIEŚ: prawdopodobnie ROSTARZEWO,
 *   ok. 1 400 — ⚠⚠⚠ RANKINGU URZĘDOWEGO NIE MAM [NP].
 *   PISZĘ „jedna z największych", NIE „największa",
 *   I NIE PODAJĘ LICZBY 1 400.
 * ⚠ GEO: 52,1388 / 16,2735 (zgodne z drugim źródłem
 *   do ok. 200 m).
 *
 * ⚠⚠⚠ KOLIZJA NAZW — NAJWAŻNIEJSZA:
 *   W GMINIE RAKONIEWICE SĄ DWIE ODRĘBNE MIEJSCOWOŚCI
 *   O NAZWIE RAKONIEWICE:
 *     MIASTO — 3 582 mieszkańców (GUS 31.12.2024),
 *     WIEŚ — 768 mieszkańców (NSP 2021).
 *   TO DWIE RÓŻNE JEDNOSTKI W REJESTRZE, NIE DZIELNICE.
 *   ⚠⚠⚠ WSPOMINAM OBOWIĄZKOWO W CZĘŚCI O DOJAZDACH
 *   I W FAQ — to realna pułapka adresowa.
 *   ⚠⚠⚠ NIE ROBIĘ Z TEGO KĄTU — figura „dwa miejsca,
 *   jedna nazwa" jest zbyt blisko Bochni, Wielenia
 *   i Nowych Skalmierzyc. PODAJĘ JAKO INFORMACJĘ
 *   PRAKTYCZNĄ.
 *   ⚠ „RAKONIEWICE WIELKIE" i „RAKONIEWICE MAŁE"
 *   NIE WYSTĘPUJĄ W REJESTRZE — to formy potoczne
 *   albo historyczne. NIE UŻYWAM ICH.
 *   — ROSTARZEWO, historycznie RZESZOTARZEWO —
 *     dawne miasto.
 *   — Innych Rakoniewic poza gminą NIE USTALONO [NP].
 *
 * ⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. RAKONIEWICE · D. RAKONIEWIC (⚠⚠⚠ nie
 *   „Rakoniewiców") · Ms. w RAKONIEWICACH ·
 *   N. Rakoniewicami · C. Rakoniewicom.
 *   ⚠ POTWIERDZENIA: „Gmina Rakoniewice",
 *   „w Rakoniewicach".
 *   Przymiotnik: RAKONIEWICKI.
 *   ⚠⚠⚠ BŁĄD 1: traktowanie jak liczby pojedynczej
 *   rodzaju żeńskiego — „do Rakoniewicy",
 *   „w Rakoniewicy".
 *   ⚠⚠ BŁĄD 2: „Rakoniewiców" zamiast „Rakoniewic".
 *   ⚠⚠ BŁĄD 3: „rakoniewicowski" zamiast
 *   „rakoniewicki".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1252 R.
 *   — PRAWA MIEJSKIE: 1662 R., nadał wojewoda.
 *     RÓŻNICA 410 LAT.
 *     ⚠⚠ RÓŻNICY NIE ROBIĘ FIGURĄ (kąty daty zajęte).
 *     ⚠ NAZWISKA NADAJĄCEGO NIE PODAJĘ — niepotrzebne.
 *   — NAZWA pochodzi od imienia RAKOŃ, komesa
 *     wielkopolskiego. PODAJĘ.
 *   — ROSTARZEWO: prawa miejskie (magdeburskie)
 *     1752–1934, czyli 182 lata; pierwsza wzmianka
 *     1379 pod nazwą RZESZOTARZEWO; RATUSZ Z 1768 R.
 *     STOI WŁAŚNIE TAM, nie w Rakoniewicach.
 *     PODAJĘ — to mocny fakt o gminie.
 *     ⚠⚠⚠ NIE ROBIĘ Z TEGO KĄTU — figura „siedziba/
 *     obiekt nie tam, gdzie nazwa" zbyt blisko Nowych
 *     Skalmierzyc, a „najmłodszy przy rynku" to
 *     Szamocin. PODAJĘ W CZĘŚCI O RODZINIE.
 *   — Z XVIII-WIECZNEJ ZABUDOWY PODCIENIOWEJ RYNKU
 *     OCALAŁY CZTERY DOMY. PODAJĘ.
 *     ⚠⚠ FIGURY „ocalałe" NIE ROZWIJAM — kąt zajęty
 *     (Sieraków).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIĘCEJ EKSPONATÓW NIŻ MIESZKAŃCÓW:
 *   WIELKOPOLSKIE MUZEUM POŻARNICTWA działa
 *   w Rakoniewicach OD 1974 R. i ma 3 700 EKSPONATÓW.
 *   MIASTO LICZY 3 582 MIESZKAŃCÓW (GUS 31.12.2024).
 *   CZYLI: EKSPONATÓW JEST WIĘCEJ NIŻ LUDZI — o 118.
 *   ⚠⚠⚠ RÓŻNICĘ 118 PODAJĘ, bo to prosta różnica
 *   dwóch podanych liczb, a nie przeliczenie.
 *   ⚠⚠⚠ OBIE LICZBY SĄ Z RÓŻNYCH ŹRÓDEŁ I RÓŻNYCH
 *   MOMENTÓW — liczba eksponatów bez daty. MÓWIĘ TO
 *   WPROST W TEKŚCIE: „obie liczby są z różnych
 *   źródeł i różnych momentów, więc traktuję je jako
 *   rząd wielkości".
 *   ⚠⚠⚠ MUZEUM WYMIENIAM WYŁĄCZNIE JAKO INSTYTUCJĘ
 *   Z LICZBĄ EKSPONATÓW I ROKIEM ZAŁOŻENIA.
 *   ANI SŁOWA O POŻARACH, RATOWNICTWIE, ZAGROŻENIACH
 *   I BEZPIECZEŃSTWIE. To ma być liczba w zbiorze,
 *   nie temat.
 *   ⚠⚠⚠ BUDYNKU, W KTÓRYM MUZEUM SIĘ MIEŚCI,
 *   NIE OPISUJĘ — figura „instytucja młodsza od swoich
 *   ścian" ZAJĘTA (Puszczykowo), a sam budynek wchodzi
 *   w wątek wyznaniowy.
 *
 * KĄT: WIĘCEJ EKSPONATÓW NIŻ MIESZKAŃCÓW
 * — o tym, że zbiór potrafi przerosnąć liczbę ludzi,
 * którzy z niego korzystają. Kąt z Rakoniewic: 3 700
 * eksponatów w muzeum wobec 3 582 mieszkańców miasta.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że muzeum działa od 1974 r. i ma 3 700 eksponatów,
 *   a miasto liczy 3 582 mieszkańców — o 118 mniej.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ że obie liczby są z różnych źródeł i różnych
 *   momentów, więc traktuję je jako rząd wielkości,
 * — ⚠⚠ że w muzeum to jest zaleta: zbiór PO TO ma być
 *   większy od widowni,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO ODWROTNIE: tam, gdzie
 *   rzeczy jest więcej niż ludzi, którzy ich używają,
 *   kuchnia przestaje działać,
 * — ⚠⚠ ŻE PROGIEM NIE JEST LICZBA, TYLKO TO, CZY
 *   TRZEBA CZEGOŚ SZUKAĆ. Jeśli szukacie — jest
 *   za dużo,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: policzcie garnki i patelnie
 *   i porównajcie z liczbą osób, dla których gotujecie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest wezwanie
 *   do wyrzucania. Wystarczy przenieść rzeczy rzadko
 *   używane poza zasięg ręki — do piwnicy, na górną
 *   półkę, do pudła,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma sens wtedy,
 *   gdy ZASTĘPUJE kilka rzeczy, a nie DOKŁADA SIĘ
 *   do nich. MÓWIĘ TO WPROST, choć sprzedaję sprzęt:
 *   jeśli po zakupie nic nie zejdzie z blatu, kuchni
 *   nie będzie lżej.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt
 *   zajęty (Złotów). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam dwie liczby opisywały
 *   TĘ SAMĄ rzecz z dwóch stron; TU porównuję ZBIÓR
 *   PRZEDMIOTÓW z LICZBĄ LUDZI. JEDNO ZDANIE
 *   ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO JEDNEGO MIEJSCA, KTÓRE SKUPIŁO WIĘKSZOŚĆ
 *   JEDNEGO ZAJĘCIA — kąt zajęty (Zduny).
 * — ⚠⚠⚠ ZERO JEDNEJ POZYCJI, KTÓRA WAŻY WIĘCEJ NIŻ
 *   TRZY POZOSTAŁE — kąt zajęty (Jastrowie).
 * — ⚠⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo). DLATEGO BUDYNKU MUZEUM
 *   NIE OPISUJĘ.
 * — ⚠⚠⚠ ZERO OCALAŁEGO, KTÓRE DOSTAŁO NAJMNIEJSZĄ
 *   FUNKCJĘ — kąt zajęty (Sieraków). DLATEGO CZTERECH
 *   DOMÓW PODCIENIOWYCH NIE ROZWIJAM.
 * — ⚠⚠ ZERO CZYNNEGO, NIE TYLKO ZACHOWANEGO — kąt
 *   zajęty (Krajenka, TA SAMA FALA). ⚠⚠⚠ MUSZĘ
 *   UWAŻAĆ: tam chodziło o rzecz UŻYWANĄ, tu o rzecz
 *   LICZONĄ. NIE MIESZAM.
 * — ⚠⚠ ZERO LINII BOCZNEJ — kąt zajęty (Łasin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   I ŻADNYCH PORAD PRZECIWPOŻAROWYCH.
 * — ⚠⚠⚠ ŻADNEGO NAMAWIANIA NA WYRZUCANIE RZECZY
 *   I ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI JAKO
 *   „ZAGRACONEJ".
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO I OBIEKTÓW SAKRALNYCH · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ZDARZEŃ (muzeum
 *   wyłącznie jako instytucja) · ZERO ALKOHOLU ·
 *   ZERO BEZROBOCIA · ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE TWIERDZĘ, która wieś jest największa,
 *   ani nie podaję jej ludności.
 * — NIE PODAJĘ daty, na którą liczono eksponaty.
 * — NIE OPISUJĘ budynku muzeum ani jego tematu.
 * — NIE UŻYWAM nazw „Rakoniewice Wielkie/Małe".
 * — NIE PODAJĘ wysokości n.p.m. miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Rakoniewice leżą w powiecie grodziskim i liczą
 *   3 582 mieszkańców (GUS, 31.12.2024) na 3,4 km²;
 *   cała gmina miejsko-wiejska to 13 241 osób
 *   na 201 km², czyli 66 osób na kilometr kwadratowy,
 *   obejmuje 34 miejscowości, zajmuje 31,3% powierzchni
 *   powiatu, a lasy pokrywają 40,3% jej terenu,
 * — Wielkopolskie Muzeum Pożarnictwa działa
 *   w Rakoniewicach od 1974 r. i ma 3 700 eksponatów,
 * — pierwsza wzmianka o Rakoniewicach pochodzi
 *   z 1252 r., prawa miejskie miasto otrzymało
 *   w 1662 r., a nazwa pochodzi od imienia Rakoń,
 *   komesa wielkopolskiego,
 * — z osiemnastowiecznej zabudowy podcieniowej rynku
 *   ocalały cztery domy,
 * — w tej samej gminie leży Rostarzewo, które miało
 *   prawa miejskie na prawie magdeburskim od 1752
 *   do 1934 r., czyli przez 182 lata; pierwsza wzmianka
 *   o nim pochodzi z 1379 r. pod nazwą Rzeszotarzewo,
 *   a zabytkowy ratusz z 1768 r. stoi właśnie tam,
 *   nie w Rakoniewicach,
 * — w gminie leży też odrębna WIEŚ Rakoniewice,
 *   licząca 768 mieszkańców (NSP 2021).
 */
export const RAKONIEWICE: CityContent = {
  slug: "rakoniewice",
  h1: "Thermomix Rakoniewice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rakoniewice — cena i prezentacja",
  seoDescription:
    "Thermomix w Rakoniewicach w powiecie grodziskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rakoniewice — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rakoniewicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rakoniewic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Rakoniewice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy tysiące siedemset eksponatów. Trzy tysiące pięćset osiemdziesiąt dwie osoby.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rakoniewicach – jak wygląda prezentacja?",
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
      id: "wiecej-eksponatow",
      heading: "Więcej eksponatów niż mieszkańców",
      paragraphs: [
        "W Rakoniewicach od 1974 roku działa Wielkopolskie Muzeum Pożarnictwa. Ma trzy tysiące siedemset eksponatów. Samo miasto liczy trzy tysiące pięćset osiemdziesiąt dwie osoby (GUS, 31 grudnia 2024). Eksponatów jest więc o sto osiemnaście więcej niż ludzi.",
        "Zastrzeżenie od razu, żeby było uczciwie: obie liczby pochodzą z różnych źródeł i z różnych momentów — przy eksponatach nie ma daty — więc traktuję to jako rząd wielkości, a nie jako precyzyjne porównanie na dany dzień.",
        "W muzeum to jest zaleta i tak ma być. Zbiór po to jest zbiorem, żeby był większy od widowni; muzeum, które ma tyle eksponatów, ilu odwiedzających, byłoby po prostu małe.",
        "W kuchni ta sama proporcja działa dokładnie odwrotnie.",
        "Tam, gdzie przedmiotów jest więcej niż ludzi, dla których się gotuje, kuchnia przestaje działać. Nie z powodu bałaganu — z powodu szukania. Osiem garnków przy dwóch używanych. Trzy patelnie, z czego jedna dobra. Foremki, których nie widziano od lat. Przyprawy kupione pod jeden przepis. Każda z tych rzeczy z osobna jest sensowna, a razem sprawiają, że przed ugotowaniem czegokolwiek trzeba najpierw coś odsunąć.",
        "I tu jest właściwy próg, bo liczba sama w sobie nic nie znaczy. Próg brzmi tak: czy musicie czegoś szukać. Jeśli tak, jest za dużo — niezależnie od tego, ile dokładnie tego jest.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch liczbach opisujących tę samą rzecz z dwóch stron. Tu jest inaczej — porównuję zbiór przedmiotów z liczbą ludzi, czyli dwie zupełnie różne rzeczy, i właśnie z tego zestawienia coś widać.",
        "Ruch jest jeden i zajmuje pięć minut. Policzcie garnki i patelnie, a potem liczbę osób, dla których gotujecie. Nic więcej nie trzeba z tą liczbą robić — sama powie, co trzeba.",
        "Uczciwie o drugiej stronie, bo to nie jest wezwanie do wyrzucania. Nie namawiam do pozbywania się niczego i nie uważam, że czyjaś kuchnia jest „zagracona”. Wystarczy przenieść rzeczy rzadko używane poza zasięg ręki: do piwnicy, na górną półkę, do pudła w spiżarni. Zostają, tylko przestają zabierać miejsce tym, których używacie co dzień.",
        "I uczciwie o sprzęcie, bo tu mam interes i nie zamierzam go ukrywać. Thermomix ma sens wtedy, gdy zastępuje kilka rzeczy, a nie gdy się do nich dokłada. Miesza, podgrzewa, miele, waży i gotuje na parze w jednym naczyniu, więc u wielu osób schodzą z blatu dwa albo trzy sprzęty. Ale jeśli po zakupie nie zejdzie nic, kuchni nie będzie lżej — przybędzie tylko jedna duża rzecz do omijania. Warto to przemyśleć przed, nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rakoniewicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ilu garnków i patelni naprawdę używacie. Nie ile ich macie — ilu używacie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rakoniewicach"),
    sekcjaRaty("w Rakoniewicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Rakoniewic",
      paragraphs: [
        "Rakoniewice leżą w powiecie grodziskim i liczą 3 582 mieszkańców (GUS, 31.12.2024) na 3,4 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła policzona jest od powierzchni niezaokrąglonej. Cała gmina miejsko-wiejska to 13 241 osób na dwustu jeden kilometrach kwadratowych, czyli sześćdziesiąt sześć osób na kilometr — to najludniejsza gmina, o jakiej pisałam w tej okolicy; zajmuje niecałą jedną trzecią powierzchni powiatu, a lasy pokrywają czterdzieści procent jej terenu. Wykaz wymienia w niej trzydzieści cztery miejscowości. Pierwsza wzmianka pochodzi z 1252 roku, prawa miejskie miasto otrzymało w 1662, a sama nazwa wzięła się od imienia Rakoń, wielkopolskiego komesa. Z osiemnastowiecznej zabudowy podcieniowej rynku ocalały cztery domy. Ciekawostka o gminie: leżące w niej Rostarzewo miało prawa miejskie na prawie magdeburskim od 1752 do 1934 roku, czyli przez sto osiemdziesiąt dwa lata, a zabytkowy ratusz z 1768 roku stoi właśnie tam, nie w Rakoniewicach; pierwsza wzmianka o Rostarzewie pochodzi z 1379 roku, pod nazwą Rzeszotarzewo.",
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

  districtsHeading: "Do których części Rakoniewic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Rostarzewa, Ruchocic, Gnina, Jabłonnej, Woli Jabłońskiej, Błońska, Cegielska, Terespola, Kuźnicy Zbąskiej, Łąkiego i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi, obie ważne przy adresie. Praktyczna: w tej gminie są dwie odrębne miejscowości o nazwie Rakoniewice — miasto liczące 3 582 mieszkańców i wieś licząca 768 (spis 2021). To nie jest dzielnica, tylko osobna jednostka w rejestrze, więc przy umawianiu warto powiedzieć, o którą chodzi. Są tu też mylące pary: Jabłonna i Wola Jabłońska oraz Gola i Głodno. I językowa: nazwa występuje tylko w liczbie mnogiej — „do Rakoniewic”, „w Rakoniewicach”, nigdy „do Rakoniewicy”; przymiotnik brzmi „rakoniewicki”.",
  ],
  districts: [],

  nearbyHeading: "Poza Rakoniewice też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Grodziska Wielkopolskiego, Wolsztyna, Zbąszynia, Opalenicy, Śmigla i Nowego Tomyśla — wszędzie bezpłatnie, tak samo jak w samych Rakoniewicach.",
  ],
  nearbyTowns: ["Grodzisk Wielkopolski", "Wolsztyn", "Zbąszyń", "Opalenica", "Śmigiel", "Nowy Tomyśl"],

  about: blokOMnie("do Rakoniewic", "w Rakoniewicach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rakoniewic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Praktyczna i naprawdę istotna: w tej gminie są dwie odrębne miejscowości o nazwie Rakoniewice — miasto z 3 582 mieszkańcami i wieś z 768 (spis 2021), osobna jednostka w rejestrze, nie dzielnica — więc przy umawianiu warto powiedzieć, o którą chodzi. I językowa: nazwa występuje tylko w liczbie mnogiej, poprawnie jest „do Rakoniewic” i „w Rakoniewicach”, a nie „do Rakoniewiców” ani „w Rakoniewicy”; przymiotnik brzmi „rakoniewicki”.",
    },
    ...faqWspolne("w Rakoniewicach"),
    {
      question: "Mam pełne szafki sprzętu, a i tak gotowanie mnie męczy. Od czego zacząć?",
      answer:
        "Od policzenia. W Rakoniewicach od 1974 roku działa muzeum, które ma trzy tysiące siedemset eksponatów, a samo miasto liczy trzy tysiące pięćset osiemdziesiąt dwie osoby — przedmiotów jest więcej niż ludzi. W muzeum to zaleta, bo zbiór ma być większy od widowni. W kuchni ta sama proporcja oznacza kłopot: gdy rzeczy jest więcej niż osób, dla których gotujecie, przed każdym daniem trzeba najpierw coś odsunąć. Próg nie jest liczbowy, tylko taki: czy musicie czegoś szukać. Jeśli tak, jest za dużo. I od razu zastrzeżenie — nie namawiam do wyrzucania, wystarczy przenieść rzeczy rzadko używane poza zasięg ręki, do piwnicy albo na górną półkę.",
    },
    {
      question: "Czy Thermomix nie będzie kolejnym sprzętem zabierającym miejsce?",
      answer:
        "Będzie, jeśli nic po jego zakupie nie zejdzie z blatu — i wolę to powiedzieć wprost, choć sprzedaję urządzenia. Ma sens wtedy, gdy zastępuje kilka rzeczy: miesza, podgrzewa, miele, waży i gotuje na parze w jednym naczyniu, więc u wielu osób znikają z blatu dwa albo trzy inne sprzęty i część naczyń. Jeśli u Was nie zniknie nic, kuchni nie będzie lżej — przybędzie tylko jedna duża rzecz do omijania. To warto przemyśleć przed zakupem.",
    },
  ],

  geo: { lat: 52.1388, lng: 16.2735 },
};
