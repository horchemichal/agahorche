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
 * KŁECKO — powiat gnieźnieński, woj. wielkopolskie.
 * ⚠⚠⚠ NIE MYLIĆ Z KŁODZKIEM (dolnośląskie, siedziba
 *   powiatu). RÓŻNICA DWÓCH LITER W ŚRODKU, ODMIANA
 *   IDENTYCZNA („w Kłecku" / „w Kłodzku"), obie metryki
 *   średniowieczne. WSPOMINAM OBOWIĄZKOWO.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA.
 * MIASTO: 2 496 mieszkańców (GUS 31.12.2024),
 *   9,6 km², gęstość 259,5 os./km², 106 m n.p.m.
 *   ⚠ [ZW — 2 496 / 9,6 = 260,0. Różnica 0,5.
 *   DOMYKA SIĘ. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 * CAŁA GMINA: 7 084 osoby, 131,9 km², gęstość
 *   54 os./km².
 *   ⚠ [ZW — 7 084 / 131,9 = 53,7. Różnica 0,3.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 23 SOŁECTWA i 25 MIEJSCOWOŚCI
 *   (GUS Vademecum).
 *   ⚠⚠⚠ FIGURY „PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ
 *   GŁOS" NIE ROBIĘ — kąt ZAJĘTY (Gołańcz), a tu
 *   proporcja jest nawet ostrzejsza. PODAJĘ OBIE
 *   LICZBY JAKO FAKT, BEZ FIGURY.
 *   ⚠⚠ OBRĘBÓW NIE USTALONO [NP].
 *   MIEJSCOWOŚCI (część): Czechy, Polska Wieś,
 *   Wilkowyja, Dębnica, Działyń, Dziećmiarki,
 *   Charbowo, Michalcza, Sulin, Świniary, Waliszewo,
 *   Zakrzewo, Kamieniec, Komorowo, Kopydłowo,
 *   Pomarzany, Brzozogaj, Bojanice, Ułanowo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 5,1 % (GUS).
 *   ⚠⚠ ŹRÓDŁO DRUGIE PODAJE 5,2 % — RÓŻNICY NIE
 *   OPISUJĘ, PODAJĘ 5,1 % ZA GUS.
 *   ⚠⚠⚠ POWIERZCHNI LASÓW W km² NIE LICZĘ
 *   I NIE PORÓWNUJĘ Z MIASTEM — to byłby wniosek
 *   z liczby spornej.
 *   ⚠⚠⚠ LESISTOŚCI SĄSIEDNIEJ GMINY NIE PRZYWOŁUJĘ —
 *   porównania między jednostkami mam zajęte (Stęszew).
 * ⚠ GEO: 52,6316 / 17,4306 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI, TEMAT NA -k-:
 *   D. do KŁECKA · Ms. w KŁECKU (⚠⚠⚠ nie „w Kłeckie") ·
 *   N. Kłeckiem · C. Kłecku.
 *   ⚠ POTWIERDZENIA: „informacje o Kłecku",
 *   „pierwsze informacje o Kłecku pojawiają się
 *   w XIII wieku".
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: „w Kłeckie" przez analogię
 *   do „miasto → w mieście". WSPOMINAM.
 *   ⚠⚠ BŁĄD DRUGI: nieodmienianie — „do Kłecko".
 *   ⚠⚠⚠ BŁĄD TRZECI, NAJGROŹNIEJSZY: traktowanie
 *   nazwy jak „Kłodzko" — zdanie odmienione poprawnie
 *   może dotyczyć NIE TEGO MIASTA.
 *   ⚠⚠⚠ PRZYMIOTNIKA „KŁECKI" NIE UŻYWAM —
 *   niepotwierdzony [NP], a do tego myli się
 *   z „kłodzkim". UŻYWAM FORM OPISOWYCH.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — GRÓD: „musiał istnieć już w IX wieku".
 *     ⚠⚠⚠ TO WNIOSEK BADACZY, NIE ZAPIS W DOKUMENCIE.
 *     MÓWIĘ TO WPROST — I TO JEST CZĘŚĆ KĄTA.
 *   — PIERWSZA WZMIANKA PISANA: XIII W.
 *   — PRAWA MIEJSKIE: 1265 R. Potwierdzone
 *     niezależnie przez serwis gminy („760 lat
 *     tradycji"; 2025 − 760 = 1265). PODAJĘ.
 *     ⚠⚠ NADAWCY NIE USTALONO [NP] I NIE WYMIENIAM.
 *   ⚠⚠⚠ POTWIERDZEŃ PRZYWILEJU (1450, 1527, 1668)
 *     NIE UŻYWAM JAKO KĄTA — sąsiaduje z zajętą
 *     figurą „nadane dwa razy" (Wyrzysk), a wymaga
 *     wymienienia trzech monarchów.
 *     ZERO POSTACI POLITYCZNYCH.
 *   ⚠⚠⚠ ROKU 1331 I DATY 7 MAJA 1656 NIE WSPOMINAM —
 *     wątek militarny i zniszczenia.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ JEZIORA, RZEKI, RATUSZA I RYNKU NIE USTALONO
 *     [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ISTNIAŁO DŁUGO, ZANIM KTOKOLWIEK
 *   TO ZAPISAŁ:
 *   Źródło pisze, że gród w Kłecku MUSIAŁ ISTNIEĆ
 *   JUŻ W IX WIEKU. Pierwsza WZMIANKA PISANA pochodzi
 *   z XIII w., a prawa miejskie miasto dostało
 *   w 1265 r.
 *   MIĘDZY ISTNIENIEM A ZAPISANIEM LEŻY OKOŁO
 *   CZTERECH STULECI.
 *   ⚠⚠⚠ I NAJWAŻNIEJSZE: TA WCZEŚNIEJSZA DATA
 *   NIE JEST ZAPISEM, TYLKO WNIOSKIEM — odtworzonym
 *   z tego, co zostało w ziemi. Rzecz istniała,
 *   dokumentu nie ma, więc istnienie trzeba było
 *   ODTWORZYĆ.
 *   ⚠⚠ NIE PODAJĘ, NA JAKIEJ PODSTAWIE — nie ustalono.
 *
 * KĄT: TO, CZEGO NIE ZAPISALIŚCIE, TRZEBA BĘDZIE
 * ODTWARZAĆ — o domowych sposobach gotowania, których
 * nikt nigdy nie spisał. Kąt z Kłecka: gród o cztery
 * wieki starszy od pierwszego zapisu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gród miał istnieć już w IX w., a pierwszy zapis
 *   jest z XIII — i że ta wcześniejsza data to wniosek,
 *   nie dokument. TO JEST RDZEŃ,
 * — że prawa miejskie są z 1265 r.,
 * — ⚠⚠ ŻE W KUCHNI JEST TAK SAMO: najczęściej gotowane
 *   dania nie mają zapisu. „Robię to tak od dwudziestu
 *   lat" i nikt poza tą jedną osobą nie umie tego
 *   powtórzyć,
 * — ⚠⚠ ŻE ZAPISUJEMY RZECZY ODŚWIĘTNE, A CODZIENNE
 *   NIGDY — bo wydają się zbyt oczywiste, żeby je
 *   notować,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: spisać trzy dania robione
 *   najczęściej — kolejność i ilości, jednym zdaniem
 *   każde. Nie dla siebie, tylko dla kogoś, kto będzie
 *   musiał to zrobić,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko da się
 *   zapisać. „Aż będzie dobre" to nie jest lenistwo,
 *   tylko realna wiedza, której nie da się przenieść
 *   na kartkę. Zapis nie zastąpi wprawy,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zapisuje
 *   przebieg, ale zapis to nie to samo co sposób.
 *   NIE TWIERDZĘ, ŻE ZASTĄPI CZYJĄŚ RĘKĘ.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DOKUMENT ZOSTAŁ, RZECZY NIE — kąt zajęty
 *   (Golina). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam został DOKUMENT, a nie
 *   przetrwały RZECZY; tu jest ODWROTNIE — rzecz
 *   istniała, a dokumentu nie ma. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO LEGENDA LICZY WIĘCEJ NIŻ REJESTR — kąt
 *   zajęty (Śmigiel). Tam pamięć ZAWYŻAŁA; tu nie ma
 *   żadnej liczby do zawyżenia. ROZGRANICZAM DRUGIM
 *   ZDANIEM.
 * — ⚠⚠ ZERO DATA PRZYJĘTA, NIE ZNALEZIONA — kąt zajęty
 *   (Krobia).
 * — ⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz).
 * — ⚠⚠ ZERO ZGODA WCZEŚNIEJ, DOKUMENT PÓŹNIEJ — kąt
 *   zajęty (Zagórów). Tam były DWA AKTY; tu pierwszego
 *   aktu w ogóle nie ma.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW — ⚠⚠⚠ TU RYZYKO
 *   JEST PODWYŻSZONE, BO KĄT DOTYCZY SPISYWANIA
 *   PRZEPISÓW. PISZĘ O TYM, ŻE WARTO SPISAĆ,
 *   NIGDY O TYM, CO MA BYĆ W ZAPISIE.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni lasów w kilometrach.
 * — NIE PORÓWNUJĘ lesistości z sąsiednią gminą.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE OPISUJĘ potwierdzeń przywileju.
 * — NIE PODAJĘ, skąd wiadomo o grodzie z IX wieku.
 * — NIE UŻYWAM przymiotnika „kłecki".
 * — NIE PODAJĘ największej wsi, jeziora ani rzeki.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kłecko leży w powiecie gnieźnieńskim, liczy
 *   2 496 mieszkańców (GUS, 31.12.2024) na 9,6 km²,
 *   czyli 259,5 osoby na kilometr kwadratowy,
 *   i leży 106 m n.p.m.,
 * — cała gmina miejsko-wiejska to 7 084 osoby
 *   na 131,9 km², czyli 54 osoby na kilometr
 *   kwadratowy, przy lesistości 5,1 %,
 * — gmina ma 23 sołectwa i 25 miejscowości,
 * — źródło pisze, że gród musiał istnieć już
 *   w IX wieku, a pierwsza wzmianka pisana pochodzi
 *   z XIII wieku,
 * — prawa miejskie Kłecko otrzymało w 1265 r.,
 *   co serwis gminy potwierdza formułą „760 lat
 *   tradycji",
 * — w gminie leżą m.in. Czechy, Polska Wieś,
 *   Wilkowyja, Dębnica, Działyń, Dziećmiarki,
 *   Charbowo, Michalcza, Sulin i Waliszewo,
 * — odrębne Kłodzko leży w województwie dolnośląskim.
 */
export const KLECKO: CityContent = {
  slug: "klecko",
  h1: "Thermomix Kłecko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kłecko — cena i prezentacja",
  seoDescription:
    "Thermomix w Kłecku w powiecie gnieźnieńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kłecko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kłecku pod Gnieznem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kłecka w powiecie gnieźnieńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie.",

  highlights: highlightyStandardowe("Kłecko"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Istniało w IX wieku. Zapisano je cztery stulecia później.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kłecku – jak wygląda prezentacja?",
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
      id: "niezapisane",
      heading: "To, czego nie zapisaliście, trzeba będzie odtwarzać",
      paragraphs: [
        "O grodzie w Kłecku źródło pisze, że musiał istnieć już w IX wieku. Pierwsza wzmianka pisana pochodzi z XIII wieku, a prawa miejskie Kłecko otrzymało w 1265 roku.",
        "Zwróćcie uwagę na słowo „musiał”. Ta wcześniejsza data nie jest zapisem — jest wnioskiem, odtworzonym z tego, co zostało w ziemi. Miejsce istniało, ludzie tam mieszkali, tylko że nikt tego wtedy nie zanotował. Między istnieniem a zapisaniem leży jakieś cztery stulecia, które ktoś musiał później zrekonstruować.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, po którym został dokument, a nie zostały rzeczy. Tutaj jest dokładnie odwrotnie — rzeczy zostały, a dokumentu nie ma. I jeszcze jedno rozróżnienie: pisałam też o mieście, w którym pamięć podawała większą liczbę niż rejestr; tu nie ma żadnej liczby do zawyżenia, jest tylko cisza tam, gdzie mógłby być zapis.",
        "Piszę o tym, bo w każdej kuchni jest dokładnie taka cisza i wszyscy o niej wiemy.",
        "Zapisujemy rzeczy odświętne. Ciasto na Wielkanoc, sposób na wigilijne danie, coś, co robi się raz w roku i za każdym razem trzeba sprawdzić, jak to było. A to, co gotujemy w każdy wtorek od dwudziestu lat, nie ma zapisu nigdzie. Wydaje się zbyt oczywiste, żeby je notować.",
        "Tyle że oczywiste jest wyłącznie dla tej jednej osoby, która to robi. Dla wszystkich innych to wiedza, której nie ma. I okazuje się to zwykle w najmniej wygodnym momencie: ktoś wyjeżdża na dłużej, ktoś przestaje gotować, ktoś po prostu nie ma jak — i nagle najczęściej jedzone danie w domu nie ma żadnego opisu. Zostaje odtwarzanie z pamięci i zdanie „u mamy wychodziło inaczej”.",
        "Ruch jest jeden i naprawdę zajmuje jedno popołudnie. Wybierzcie trzy dania, które robicie najczęściej, i spiszcie je — kolejność i ilości, po kilka linijek każde. Nie dla siebie, bo Wy pamiętacie. Dla kogoś, kto kiedyś będzie musiał to zrobić bez Was. Kartka w szufladzie wystarczy.",
        "Uczciwie o drugiej stronie, bo nie wszystko da się zapisać i nie ma sensu udawać, że da. „Aż będzie dobre”, „aż zgęstnieje”, „aż zapachnie” — to nie jest lenistwo ani tajemniczość, tylko realna wiedza, której kartka nie przenosi. Takich rzeczy uczy się przez patrzenie i przez robienie obok kogoś. Zapis nie zastąpi wprawy i nigdy nie zastąpił.",
        "I uczciwie o sprzęcie, bo tu też nie chcę obiecywać za dużo. Thermomix prowadzi przez przebieg krok po kroku i pod tym względem faktycznie przechowuje „jak to było”. Ale przechowuje przebieg, a nie sposób — nie odda tego, co ktoś robi ręką, wyczuciem i z przyzwyczajenia. To dobre narzędzie do tego, żeby domowe dania dały się powtórzyć, a nie do tego, żeby zastąpić osobę, która je wymyśliła.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kłecku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kłecku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kłecka",
      paragraphs: [
        "Kłecko leży w powiecie gnieźnieńskim, liczy 2 496 mieszkańców (GUS, 31.12.2024) na dziewięciu i sześciu dziesiątych kilometra kwadratowego, czyli dwieście pięćdziesiąt dziewięć i pół osoby na kilometr kwadratowy, i leży sto sześć metrów nad poziomem morza. Cała gmina miejsko-wiejska to 7 084 osoby na stu trzydziestu jeden i dziewięciu dziesiątych kilometra kwadratowego, czyli pięćdziesiąt cztery osoby na kilometr, przy lesistości pięciu i jednej dziesiątej procenta. Ma dwadzieścia trzy sołectwa i dwadzieścia pięć miejscowości. Prawa miejskie Kłecko otrzymało w 1265 roku, a serwis gminy opisuje to jako siedemset sześćdziesiąt lat tradycji; gród miał tu istnieć już w IX wieku, choć to wniosek badaczy, a nie zapis w dokumencie.",
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

  districtsHeading: "Do których części Kłecka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Nazywają się między innymi: Czechy, Polska Wieś, Wilkowyja, Dębnica, Działyń, Dziećmiarki, Charbowo, Michalcza, Sulin, Świniary, Waliszewo, Zakrzewo, Kamieniec, Komorowo, Kopydłowo, Pomarzany i Brzozogaj. Wszędzie bez dopłaty.",
    "Dwie uwagi, bo to nazwy z pułapkami. Pierwsza, adresowa i dość zabawna: w tej jednej gminie leżą obok siebie wieś Czechy i wieś Polska Wieś, a do tego Wilkowyja — nazwa, która w mowie potocznej znaczy coś zupełnie innego, a tutaj jest po prostu urzędową nazwą miejscowości. Zdanie „jadę do Czech w gminie Kłecko” jest całkowicie poprawne. Druga, językowa i ważniejsza: Kłecko to nie Kłodzko. Nazwy różnią się dwiema literami w środku i odmieniają się identycznie — „w Kłecku” i „w Kłodzku” — więc zdanie poprawne gramatycznie może dotyczyć nie tego miasta. Przy umawianiu warto powiedzieć „Kłecko w powiecie gnieźnieńskim”. I jeszcze: mówi się „w Kłecku”, nie „w Kłeckie”, oraz „do Kłecka”, nie „do Kłecko”.",
  ],
  districts: [],

  nearbyHeading: "Poza Kłecko też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gniezna, Skoków, Wągrowca, Trzemeszna, Czerniejewa i Pobiedzisk — wszędzie bezpłatnie, tak samo jak w samym Kłecku.",
  ],
  nearbyTowns: ["Gniezno", "Skoki", "Wągrowiec", "Trzemeszno", "Czerniejewo", "Pobiedziska"],

  about: blokOMnie("do Kłecka", "w Kłecku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kłecka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga przy umawianiu, za to ważna: Kłecko to nie Kłodzko — nazwy różnią się dwiema literami w środku i odmieniają identycznie, więc warto powiedzieć „Kłecko w powiecie gnieźnieńskim”. Poprawnie mówi się też „do Kłecka” i „w Kłecku”, a nie „do Kłecko” ani „w Kłeckie”.",
    },
    ...faqWspolne("w Kłecku"),
    {
      question: "Czy warto spisywać przepisy, skoro i tak wszystko pamiętam?",
      answer:
        "Warto, tylko nie dla siebie. Kłecko jest tu dobrym obrazem: gród miał tu istnieć już w IX wieku, ale pierwszy zapis jest z XIII — ta wcześniejsza data nie jest dokumentem, tylko wnioskiem, który ktoś musiał odtworzyć z tego, co zostało w ziemi. W kuchni działa to identycznie: zapisujemy rzeczy odświętne, a to, co gotujemy w każdy wtorek od dwudziestu lat, nie ma zapisu nigdzie, bo wydaje się zbyt oczywiste. I sprawdza się to zawsze w najgorszym momencie — gdy ktoś wyjeżdża na dłużej albo przestaje gotować, a najczęściej jedzone danie w domu nie ma żadnego opisu. Ruch zajmuje jedno popołudnie: wybierzcie trzy dania robione najczęściej i spiszcie kolejność i ilości, po kilka linijek każde. Nie wszystko się przeniesie — „aż będzie dobre” zostaje w rękach, nie na kartce — ale reszta owszem.",
    },
    {
      question: "Czy Thermomix zastąpi domowy sposób gotowania?",
      answer:
        "Nie zastąpi i nie będę tego obiecywać. Prowadzi przez przebieg krok po kroku, więc pod tym względem faktycznie przechowuje „jak to było” i sprawia, że danie da się powtórzyć tak samo — również komuś, kto nigdy tego nie robił. Ale przechowuje przebieg, a nie sposób: tego, co ktoś robi ręką, wyczuciem i z przyzwyczajenia, żadne urządzenie nie przepisze. Najlepiej działa jako narzędzie do utrwalania tego, co w domu już jest, a nie do zastępowania osoby, która to wymyśliła.",
    },
  ],

  geo: { lat: 52.6316, lng: 17.4306 },
};
