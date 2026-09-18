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
 * SIECHNICE — powiat wrocławski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Siechnice.
 * MIASTO: 11 207 mieszkańców (GUS 31.12.2024), 15,6 km²,
 *   gęstość 717,0 os./km² (domyka się, 0,2 %).
 * CAŁA GMINA: 30 737 osób, 98,8 km², 21 wsi i osad.
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 30 737 / 98,8 = 311,1,
 *   a serwis podaje 297 — ROZBIEŻNOŚĆ 4,5 %, NAJWIĘKSZA
 *   W CAŁEJ FALI. Najprostsze wyjaśnienie: wskaźnik
 *   pochodzi z wcześniejszego rocznika i nie nadąża
 *   za przyrostem. TWARDA GRANICA.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠⚠ STRONA URZĘDU MYLI MIASTO Z GMINĄ — podaje 15,6 km²
 *   jako „powierzchnię gminy". NIE CYTUJĘ JEJ W TEJ
 *   KWESTII.
 * ⚠ Odległość od centrum Wrocławia: 13 km. Rzeka: Oława.
 *   Droga krajowa 94 (Wrocław–Opole) i linia kolejowa
 *   Wrocław–Jelcz-Laskowice.
 * ⚠ GEO: 51,0333 / 17,1333.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. Siechnice (te) · D. SIECHNIC (do Siechnic)
 *   ⚠⚠⚠ „DO SIECHNICÓW" JEST BŁĘDEM — KOŃCÓWKA ZEROWA.
 *   C. Siechnicom · N. Siechnicami · Ms. w Siechnicach
 *   ⚠⚠⚠ ORZECZENIE W LICZBIE MNOGIEJ: „Siechnice LEŻĄ",
 *   „SĄ", „ZOSTAŁY miastem", „TE Siechnice".
 *   ⚠⚠ UWAGA NA RÓŻNICĘ Z KĄTAMI WROCŁAWSKIMI (ta sama
 *   fala!): Siechnice → do Siechnic (końcówka zerowa),
 *   ale Kąty Wrocławskie → do Kątów Wrocławskich (-ów).
 *   SPRAWDZIĆ KAŻDE WYSTĄPIENIE OSOBNO.
 *   ⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM —
 *   forma „siechnicki" niepotwierdzona urzędowo, a powiat
 *   nazywa się wrocławski.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ PUŁAPKI:
 *   — ⚠⚠⚠ MYLENIE Z WROCŁAWIEM. 13 km od centrum, przy
 *     wylotowej drodze krajowej — w potocznym użyciu
 *     Siechnice bywają brane za dzielnicę. TO ODRĘBNE
 *     MIASTO I SIEDZIBA ODRĘBNEJ GMINY. Piszę
 *     „Siechnice, miasto pod Wrocławiem", NIGDY
 *     „wrocławskie Siechnice".
 *   — ⚠⚠ Wrocław NIE NALEŻY do powiatu wrocławskiego,
 *     choć jest jego siedzibą. NIE PISZĘ INACZEJ.
 *   — ⚠⚠ TRZY MIASTA Z TEJ FALI LEŻĄ W POWIECIE
 *     WROCŁAWSKIM: Siechnice, Kąty Wrocławskie i Sobótka.
 *     NIGDY NIE PISZĘ SAMEGO „W POWIECIE".
 *   — ⚠ Kolizje: Siechnów, Sichów, Sieciechowice.
 *     Drugiej miejscowości o nazwie dokładnie „Siechnice"
 *     nie znalazłem [NP].
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ ZMIANA NAZWY GMINY: do końca 2009 r. gmina nosiła
 *   inną nazwę i miała siedzibę w innej miejscowości;
 *   1 stycznia 2010 przeniosła siedzibę do Siechnic
 *   i przyjęła ich nazwę.
 *   ⚠⚠⚠ DAWNEJ NAZWY NIE PODAJĘ — jest wyznaniowa.
 *   Piszę o samym fakcie przeniesienia siedziby i zmiany
 *   nazwy. TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1253 — pierwsza wzmianka (dokumenty Henryka III
 *   Białego).
 * — XVI w. — młyn i wiatrak we wsi.
 * — 1909 — budowa elektrowni i doprowadzenie linii
 *   kolejowej.
 * — 1982 — uruchomienie przedsiębiorstwa produkcji
 *   ogrodniczej.
 * — 1 STYCZNIA 1997 — NADANIE PRAW MIEJSKICH.
 * — 1 STYCZNIA 2010 — przeniesienie siedziby gminy
 *   do Siechnic i zmiana nazwy gminy.
 *   ⚠⚠ DOKŁADNIE TRZYNAŚCIE LAT PÓŹNIEJ, CO DO DNIA.
 *   ⚠⚠ PODAJĘ JAKO FAKT, ale NIE ROBIĘ Z TEGO KĄTA —
 *   „centrum jest tam, gdzie ruch" to w prostej linii
 *   układ kuchni, obszar zajęty wielokrotnie.
 * — ⚠ ROZPIĘTOŚĆ: 744 lata jako wieś (1253 → 1997).
 * — ⚠⚠⚠ HUTY, KOŃCA PRODUKCJI (1995) I ROZBIÓRKI
 *   (1989–1996) NIE PODAJĘ — ciąg prowadzi wprost
 *   do wykluczonego wątku upadku przemysłu.
 * — ⚠⚠ ZMIANY WŁAŚCICIELA W 1323 R. NIE OPISUJĘ —
 *   wątek zakonny.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SŁOWO „JEDNOLITA":
 *   O tutejszym gospodarstwie ogrodniczym, działającym
 *   od 1982 r., mówi się w miejscowych opisach nie
 *   „największa powierzchnia pod szkłem", tylko
 *   „największa JEDNOLITA powierzchnia pod szkłem".
 *   ⚠⚠⚠ SUPERLATYWU („w Europie") NIE CYTUJĘ I NIE
 *   POWTARZAM JAKO FAKTU — żadne źródło nie podaje
 *   rankingu ani liczby hektarów. MÓWIĘ W TEKŚCIE WPROST,
 *   ŻE TEGO NIE SPRAWDZIŁAM. TWARDA GRANICA.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE SAMEGO ROZRÓŻNIENIA, KTÓRE TO
 *   SFORMUŁOWANIE NIESIE: powierzchnia zsumowana
 *   to co innego niż powierzchnia nieprzedzielona.
 *   To jest cały kąt.
 *   ⚠⚠ POWIERZCHNI W HEKTARACH NIE USTALONO —
 *   NIE PODAJĘ ŻADNEJ LICZBY dla szklarni.
 *
 * KĄT: SUMA I CIĄGŁOŚĆ TO DWIE RÓŻNE LICZBY
 * — o tym, że tę samą powierzchnię opisują dwie liczby,
 * które dają przeciwne odpowiedzi, i że do pracy liczy się
 * ta druga. Kąt od siechnickich szklarni: operatywne
 * słowo w ich opisie to nie „największa", tylko
 * „jednolita".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że o gospodarstwie ogrodniczym działającym tu od 1982
 *   roku mówi się w miejscowych opisach „największa
 *   jednolita powierzchnia pod szkłem",
 * — ⚠⚠⚠ ŻE SUPERLATYWU NIE SPRAWDZIŁAM I NIE POWTARZAM,
 *   BO ŻADNE ŹRÓDŁO NIE PODAJE ANI RANKINGU, ANI LICZBY
 *   HEKTARÓW — MÓWIĘ TO W TEKŚCIE OTWARCIE,
 * — ŻE OPERATYWNE SŁOWO TO „JEDNOLITA": nie suma
 *   szklarni, tylko jedna nieprzedzielona powierzchnia.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI TĘ SAMĄ POWIERZCHNIĘ OPISUJĄ DWIE
 *   LICZBY: suma długości blatu i najdłuższy odcinek
 *   bez przerwy. „Cztery metry blatu" poprzecinane
 *   zlewem, płytą i słupkiem mogą mieć najdłuższy ciągły
 *   kawałek długi na sześćdziesiąt centymetrów,
 * — ⚠⚠ ŻE TO TEN DRUGI WYMIAR DECYDUJE O TYM, CO DA SIĘ
 *   ZROBIĆ: czy zmieści się rozwałkowane ciasto, czy
 *   staną obok siebie deska, miska i to, co czeka
 *   na dołożenie,
 * — ⚠⚠ ŻE MIERZY SIĘ TO RAZ, TAŚMĄ, I ZAJMUJE MINUTĘ,
 * — ⚠⚠ ŻE SUMA JEST WIELKOŚCIĄ OGŁOSZENIOWĄ,
 *   A CIĄGŁOŚĆ ROBOCZĄ — i że to rozróżnienie działa
 *   też poza blatem: półka poprzecinana słupkami,
 *   szuflada z przegrodami, wolny czas pocięty
 *   na kwadranse,
 * — ⚠⚠ ŻE TO NIE JEST TEKST O TYM, ILE MIEJSCA POTRZEBA
 *   ANI GDZIE CO POSTAWIĆ — ROZGRANICZAM WPROST, BO OBA
 *   TE OBSZARY SĄ ZAJĘTE. To tekst o TYM, KTÓRĄ LICZBĄ
 *   MIERZYĆ,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ciągłość nie zawsze jest
 *   ważniejsza. Przy czynnościach rozdzielonych w czasie
 *   suma wystarczy, a przegrody bywają pomocne.
 *   Rozróżnienie służy do wyboru liczby, nie do tego,
 *   żeby jedna zawsze wygrywała,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zajmuje kawałek
 *   blatu na stałe i jeśli stanie w środku najdłuższego
 *   odcinka, przetnie go na dwa krótsze. MÓWIĘ TO WPROST
 *   — to realny koszt i warto zmierzyć go przed zakupem,
 *   a nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI, STREF I UKŁADU
 *   KUCHNI — obszar zajęty WIELOKROTNIE (Koluszki,
 *   Tychowo, Cedynia, Nowe Warpno, Chojnów, Wołów).
 *   ⚠⚠⚠ TO JEST NAJWIĘKSZE RYZYKO TEGO TEKSTU, BO PISZĘ
 *   O BLACIE. Piszę WYŁĄCZNIE o DWÓCH SPOSOBACH
 *   MIERZENIA tej samej powierzchni — nigdy o tym,
 *   ile miejsca potrzeba, co gdzie postawić, jaka strefa
 *   jest najważniejsza ani jak urządzić kuchnię.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO MIEJSCA CELOWO PUSTEGO — kąt zajęty
 *   (Wołów). Nie piszę o rezerwie.
 * — ⚠⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno).
 * — ⚠⚠ ZERO OPISYWANIA WIELKOŚCIĄ, KTÓRA SIĘ ZMIENIA —
 *   kąt zajęty (Oborniki Śląskie, poprzednia fala).
 *   ⚠⚠ TO DRUGI BLISKI OBSZAR: tamten tekst mówi, KTÓRĄ
 *   WIELKOŚĆ ZAPISAĆ NA ETYKIECIE; ten mówi, KTÓRĄ
 *   LICZBĄ MIERZYĆ POWIERZCHNIĘ. ROZGRANICZAM.
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH I PLANOWANIA — kąt zajęty
 *   (Kudowa-Zdrój).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra).
 * — ⚠⚠ ZERO ROZMIARU SPRZĘTU I LICZBY TUR — kąt zajęty
 *   (Ziębice).
 * — ⚠⚠ ZERO UNIKATÓW I STAŁYCH ADRESÓW — kąt pisany
 *   w tej samej fali (Lwówek Śląski).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH ZALECANYCH DŁUGOŚCI BLATU — podaję jeden
 *   przykład liczbowy jako ilustrację, nie jako normę.
 * — ŻADNYCH NAZW FIRM I MAREK — gospodarstwo ogrodnicze
 *   opisuję bez nazwy.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SUPERLATYWU O SZKLARNIACH JAKO FAKTU —
 *   mówię wprost, że go nie sprawdziłam.
 * — ⚠⚠ ZERO UPADKU PRZEMYSŁU, ZAMKNIĘCIA ZAKŁADU
 *   I ROZBIÓRKI.
 * — ⚠⚠ ZERO DAWNEJ NAZWY GMINY — wyznaniowa.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU ZAKONNEGO I WYZNANIOWEGO.
 * — ⚠ ZERO DEMOGRAFII I WSPÓŁCZYNNIKA FEMINIZACJI.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — rozbieżność 4,5 %.
 * — NIE PODAJĘ powierzchni szklarni — nie ustalono
 *   ani jednej liczby.
 * — NIE POWTARZAM, że to największa taka powierzchnia
 *   w Europie — nie sprawdziłam i mówię to w tekście.
 * — NIE PODAJĘ dawnej nazwy gminy.
 * — NIE PISZĘ o zamknięciu ani rozbiórce zakładu.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, że Siechnice są częścią Wrocławia —
 *   to odrębne miasto i siedziba odrębnej gminy.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pierogi ruskie z Chrząstawy"
 *   pochodzą z gminy Czernica — TEN SAM POWIAT
 *   WROCŁAWSKI, INNA GMINA. ⚠ Kapusta i ogórki
 *   „ślężańskie" to oznaczenie masywu, nie powiatu.
 *   NIE PRZYPISUJĘ ICH SIECHNICOM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Siechnice leżą nad Oławą, 13 km od centrum Wrocławia,
 *   w powiecie wrocławskim, przy drodze krajowej 94
 *   i na linii kolejowej Wrocław–Jelcz-Laskowice; miasto
 *   liczy 11 207 mieszkańców (GUS, 31.12.2024) na 15,6 km²,
 *   a cała gmina miejsko-wiejska 30 737 osób na 98,8 km²,
 *   z dwudziestoma jeden wsiami i osadami,
 * — pierwsza wzmianka pochodzi z 1253 r., z dokumentów
 *   Henryka III Białego; w XVI w. działały tu młyn
 *   i wiatrak, w 1909 zbudowano elektrownię i doprowadzono
 *   linię kolejową, a w 1982 uruchomiono przedsiębiorstwo
 *   produkcji ogrodniczej,
 * — prawa miejskie Siechnice otrzymały 1 stycznia 1997 r.,
 *   po ponad siedmiu wiekach jako wieś; 1 stycznia 2010,
 *   dokładnie trzynaście lat później co do dnia, gmina
 *   przeniosła do nich swoją siedzibę i przyjęła ich
 *   nazwę,
 * — o tutejszym gospodarstwie ogrodniczym miejscowe opisy
 *   mówią „największa jednolita powierzchnia pod szkłem";
 *   powierzchni w hektarach nie podaje żadne dostępne
 *   źródło, a samego superlatywu nie da się zweryfikować.
 */
export const SIECHNICE: CityContent = {
  slug: "siechnice",
  h1: "Thermomix Siechnice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Siechnice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Siechnicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Siechnice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Siechnicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Siechnic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu jeden wsi i osad w gminie.",

  highlights: highlightyStandardowe("Siechnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najważniejsze słowo w opisie tutejszych szklarni to nie „największa”, tylko „jednolita”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Siechnicach – jak wygląda prezentacja?",
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
      id: "suma-i-ciaglosc",
      heading: "Suma i ciągłość to dwie różne liczby",
      paragraphs: [
        "O gospodarstwie ogrodniczym działającym w Siechnicach od 1982 roku miejscowe opisy mówią: największa jednolita powierzchnia pod szkłem.",
        "Zacznę od tego, czego nie zrobię. Nie powtórzę tego superlatywu jako faktu, bo żadne dostępne źródło nie podaje ani rankingu, ani liczby hektarów — a rzucanie wielkością, której nie sprawdziłam, byłoby dokładnie tym, czego nie robię na tej stronie.",
        "Ale jedno słowo z tego zdania warto pożyczyć, i to nie jest słowo „największa”.",
        "Jest nim „jednolita”. Nie suma szklarni, tylko jedna powierzchnia, której nic nie przedziela.",
        "Bo to samo rozróżnienie rozstrzyga o kuchni, a prawie nikt go nie robi.",
        "Tę samą powierzchnię opisują dwie liczby. Pierwsza to suma: „cztery metry blatu”. Druga to najdłuższy odcinek bez przerwy. W kuchni, w której blat jest pocięty zlewem, płytą i słupkiem zabudowy, te cztery metry potrafią mieć najdłuższy ciągły kawałek długi na sześćdziesiąt centymetrów.",
        "I to ta druga liczba decyduje o tym, co da się w tej kuchni zrobić. Czy zmieści się rozwałkowane ciasto. Czy staną obok siebie deska, miska i to, co czeka na dołożenie. Czy da się rozłożyć rzeczy do jednej roboty, nie przekładając niczego w połowie.",
        "Zmierzenie tego zajmuje minutę. Raz, taśmą, najdłuższy odcinek bez przerwy — i ta jedna liczba mówi o kuchni więcej niż jej metraż.",
        "Suma jest wielkością ogłoszeniową. Ciągłość jest wielkością roboczą. I działa to nie tylko przy blacie: półka poprzecinana słupkami, szuflada z przegrodami, a nawet wolny czas pocięty na kwadranse — wszędzie tam dwie liczby opisują to samo i dają przeciwne odpowiedzi.",
        "Dopowiem od razu, bo temat leży blisko: nie piszę tu o tym, ile miejsca potrzeba ani gdzie co postawić. Piszę o czymś węższym — o tym, którą liczbą tę samą powierzchnię w ogóle mierzyć.",
        "Uczciwie o drugiej stronie: ciągłość nie zawsze wygrywa. Przy czynnościach rozdzielonych w czasie suma zupełnie wystarczy, a przegrody potrafią pomagać — w szufladzie z drobiazgami przedzielenie jest zaletą, nie wadą. Rozróżnienie służy do wybrania właściwej liczby, a nie do tego, żeby jedna z nich zawsze była ważniejsza.",
        "Na koniec o urządzeniu i to działa przeciwko mnie.",
        "Thermomix zajmuje kawałek blatu na stałe. Jeśli stanie w środku najdłuższego ciągłego odcinka, przetnie go na dwa krótsze — i wtedy kuchnia realnie traci, mimo że suma blatu się nie zmieniła. To jest koszt, który warto zmierzyć taśmą przed zakupem, a nie po. Na prezentacji stawiamy urządzenie tam, gdzie miałoby stać naprawdę, więc widać to od razu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Siechnicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie najdłuższego kawałka blatu bez przerwy — nie sumy, tylko jednego odcinka. To najbardziej praktyczna liczba przed takim zakupem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Siechnicach"),
    sekcjaRaty("w Siechnicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Siechnic",
      paragraphs: [
        "Siechnice leżą nad Oławą, trzynaście kilometrów od centrum Wrocławia, w powiecie wrocławskim — przy drodze krajowej numer 94 i na linii kolejowej do Jelcza-Laskowic. To odrębne miasto i siedziba odrębnej gminy, nie dzielnica Wrocławia, choć bywają tak traktowane. Samo miasto liczy 11 207 mieszkańców (GUS, 31.12.2024) na piętnastu i pół kilometra kwadratowego, a cała gmina miejsko-wiejska ponad trzydzieści tysięcy osób na dziewięćdziesięciu ośmiu, z dwudziestoma jeden wsiami i osadami. Pierwsza wzmianka pochodzi z 1253 roku, z dokumentów Henryka III Białego; w szesnastym wieku działały tu młyn i wiatrak, w 1909 zbudowano elektrownię i doprowadzono linię kolejową, a w 1982 uruchomiono przedsiębiorstwo produkcji ogrodniczej. Prawa miejskie Siechnice otrzymały 1 stycznia 1997 roku — po ponad siedmiu wiekach jako wieś. A 1 stycznia 2010, dokładnie trzynaście lat później co do dnia, gmina przeniosła do nich swoją siedzibę i przyjęła ich nazwę.",
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

  districtsHeading: "Do których części Siechnic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu jeden wsi i osad w gminie. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Siechnice też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd trzynaście kilometrów. Dojeżdżam też do Oławy, Jelcza-Laskowic, Czernicy i Żórawiny — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Wrocław", "Oława", "Jelcz-Laskowice", "Czernica", "Żórawina"],

  about: blokOMnie("do Siechnic", "w Siechnicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Siechnic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu jeden wsi i osad w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto przy tym pamiętać, że Siechnice to odrębne miasto i siedziba odrębnej gminy w powiecie wrocławskim, a nie dzielnica Wrocławia — dzieli je trzynaście kilometrów. Sam Wrocław zresztą do powiatu wrocławskiego nie należy, choć jest jego siedzibą.",
    },
    ...faqWspolne("w Siechnicach"),
    {
      question: "Mam cztery metry blatu, a i tak nie mam gdzie pracować. Dlaczego?",
      answer:
        "Bo cztery metry to suma, a do pracy liczy się najdłuższy odcinek bez przerwy. Blat pocięty zlewem, płytą i słupkiem zabudowy potrafi mieć przy tej sumie ciągły kawałek długi na sześćdziesiąt centymetrów — i to on rozstrzyga, czy zmieści się rozwałkowane ciasto albo czy staną obok siebie deska, miska i to, co czeka na dołożenie. O gospodarstwie ogrodniczym działającym w Siechnicach mówi się nie „największa powierzchnia pod szkłem”, tylko „największa jednolita” — i to drugie słowo jest całą różnicą. Zmierz swój najdłuższy odcinek raz, taśmą; zajmie to minutę.",
    },
    {
      question: "Czy Thermomix zabierze mi miejsce na blacie?",
      answer:
        "Zajmuje kawałek blatu na stałe i jeśli stanie w środku najdłuższego ciągłego odcinka, przetnie go na dwa krótsze — kuchnia realnie traci, mimo że suma się nie zmienia. To uczciwy koszt i lepiej zmierzyć go przed zakupem niż po. Na prezentacji stawiamy urządzenie tam, gdzie miałoby stać naprawdę, więc widać to od razu, a nie z broszury.",
    },
  ],

  geo: { lat: 51.0333, lng: 17.1333 },
};
