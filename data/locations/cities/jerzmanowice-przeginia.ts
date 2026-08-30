import type { CityContent } from "../city-content";
import {
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
 * JERZMANOWICE-PRZEGINIA — GMINA WIEJSKA w powiecie krakowskim.
 * ok. 11 tys. mieszkańców (GUS 31.12.2024: 11 170; ewidencja gminy
 * 31.12.2025: 10 824), 68,2 km².
 * 8 SOŁECTW: Czubrowice, Gotkowice, Jerzmanowice (siedziba UG),
 * Łazy, Przeginia, Racławice, Sąspów, Szklary.
 *
 * OŚ STRONY: WIERZCHOWINA. Gmina leży na jurajskim płaskowyżu 400–450 m
 * n.p.m., z najwyższym punktem POŁUDNIOWEJ Jury (ok. 512 m). To realnie
 * zmienia codzienność: dłuższa i mroźniejsza zima, dłużej zalega śnieg,
 * średnia roczna ok. 7,5 °C, opady ok. 700 mm, woda w studniach nawet 95 m
 * pod ziemią i twarda wapienna, potoki płyną tylko dnami wąskich dolin.
 * Jedyna gmina pierścienia, która się NIE zsuburbanizowała: +7,9% ludności
 * od 2002 przy średnim wieku 41,0 (dla kontrastu Wielka Wieś +92,8%).
 *
 * FAKTY UŻYTE I ŹRÓDŁA (wszystko z podstron UG jerzmanowice-przeginia.pl,
 * o ile nie zaznaczono inaczej):
 * — KLIMAT: wierzchowina 400–450 m n.p.m.; „zima jest dłuższa i bardziej
 *   mroźna w porównaniu do otaczających regionów, a dłuższemu zaleganiu
 *   pokrywy śnieżnej sprzyja większa wysokość”; średnia roczna ok. 7,5 °C
 *   (w dnach dolin ok. 6 °C); opady ok. 700 mm/rok,
 * — HYDROGRAFIA: zwierciadło wód podziemnych od 1,5 do 95 m, „w okolicach
 *   Jerzmanowic znacznie głębsze”; gęstość sieci rzecznej ok. 0,5 km/km²;
 *   potoki Będkówka, Szklarka, Racławka płyną tylko dnami wąskich dolin;
 *   wywierzysko krasowe źródło Pióro w Dolinie Szklarki, wydajność
 *   do 60 l/s,
 * — NAJWYŻSZY PUNKT: Grodzisko / Skała 502, ok. 512 m n.p.m. — NAJWYŻSZY
 *   PUNKT POŁUDNIOWEJ CZĘŚCI JURY i drugie co do wysokości wzniesienie
 *   całej Jury Krakowsko-Częstochowskiej (PolskieSzlaki.pl). Nazwa „502”
 *   pochodzi od pomiaru z początku XX w.,
 * — LUDNOŚĆ SOŁECTW (31.12.2025, meldunki): Jerzmanowice 2 985,
 *   Przeginia 2 417, Racławice 1 453, Sąspów 1 305, Czubrowice 1 079,
 *   Szklary 570, Łazy 552, Gotkowice 463,
 * — HISTORIA JERZMANOWIC: 1335 pierwsza wzmianka (dziesięcina papieska,
 *   „villa Hermanni”); ewolucja nazwy do formy Jerzmanowice w 1877;
 *   1356 przywilej Kazimierza Wielkiego; 1406 królewskie starostwo
 *   ojcowskie; 1598 pierwsza wzmianka o szkole; 1696 kościół szpitalny
 *   św. Jana Chrzciciela; 1827–1830 kościół św. Bartłomieja,
 * — HISTORIA PRZEGINI: 29.09.1228 pierwsza wzmianka (dziesięcina dla
 *   norbertanek); 1276 przeniesienie na prawo niemieckie przez Bolesława
 *   Wstydliwego; 1325–1327 parafia; 1422 Władysław Jagiełło potwierdza
 *   Szafrańcowi zamek Pieskowa Skała wraz z Przeginią; 1550–1555 kościół
 *   zbór kalwiński, 1602 zwrócony katolikom; 1662 nowy kościół murowany;
 *   28.09.2003 podniesienie do godności Sanktuarium Najświętszego Zbawiciela,
 * — JASKINIA NIETOPEROWA (Jerzmanowice): długość 326 m, deniwelacja 23 m;
 *   badania W. Chmielewskiego 1956–1962; podczas eksploatacji namuliska
 *   1872–1879 znaleziono ok. 4000 kłów niedźwiedzia jaskiniowego; kręcono
 *   tu zdjęcia do „Ogniem i mieczem”. Inne jaskinie: Szeroki Aven 270 m,
 *   Racławicka 168 m, Ciasny Aven 150 m, Koziarnia 90 m, Sadlana 89 m,
 * — REZERWATY: Dolina Racławki 473,66 ha — NAJWIĘKSZY REZERWAT
 *   W MAŁOPOLSCE (gmina + Krzeszowice); Dolina Szklarki 46,69 ha (1989).
 *   Park Krajobrazowy Dolinki Krakowskie 20 686,1 ha na 9 gmin;
 *   38 pomników przyrody,
 * — OPN: 300,10 ha = 13,99% powierzchni parku (opn.gov.pl / BIP OPN),
 * — GOSPODARKA: 1 295 podmiotów REGON, w tym budownictwo 250 z 1 097
 *   (GUS 2019). Bardzo wysoki udział budownictwa,
 * — DOJAZD: DK94 przez Przeginię, Gotkowice i Jerzmanowice; MPK LINIA 200
 *   uruchomiona 4 GRUDNIA 2023 (Przeginia Kościół – Bronowice Małe,
 *   19 kursów, co godzinę w dni robocze); 3 linie komunikacji gminnej;
 *   KOLEI W GMINIE BRAK; ok. 22 km na płn.-zach. od Krakowa,
 * — ROZBUDOWA DK94, odc. Zederman–Jerzmanowice: 8 km, 724 zjazdy do
 *   posesji, 92,2 mln zł, ZRID XII 2025, prace od III 2026, koniec
 *   jesień 2027; natężenie ponad 17 tys. pojazdów na dobę,
 * — WSPÓŁRZĘDNE (UG, ul. Rajska 22): 50,215113 / 19,745157 — podane
 *   wprost na stronie Kontakt gminy.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — „NAJWYŻSZY PUNKT JURY”. TO NIEPRAWDA. Skała 502 jest najwyższa
 *   w POŁUDNIOWEJ części Jury i druga w całym paśmie; wyższa jest Góra
 *   Janowskiego w Podzamczu (woj. śląskie), ok. 515 m,
 * — DOKŁADNEJ WYSOKOŚCI SKAŁY 502. Własne źródła gminy podają 512,4;
 *   512,8 i 513 m. Użyte „około pięciuset dwunastu”,
 * — WYSOKOŚCI SOKOLICY. Trzy sprzeczne liczby (70 / 80 / ponad 100 m).
 *   Użyta formuła bez liczby,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Podstrona gminy zapętla się
 *   w przekierowaniu — listy nie udało się pobrać. NIE PODAWAĆ,
 * — NAZW IMPREZ CYKLICZNYCH. Lista pochodzi z pojedynczego odczytu,
 *   niepotwierdzona drugim źródłem. NIE UŻYWAĆ nazw typu „Święto Baby”,
 * — DANYCH O UPRAWACH. Strony „Rolnictwo” i „PSR” gminy ich nie zawierają,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — NAZWANYCH PRACODAWCÓW. Strona „Gospodarka” nie zawiera treści,
 * — „PRZEMYSŁU JERZMANOWICKIEGO” (jednostka archeologiczna). Wzmiankowany
 *   w literaturze, ale niepotwierdzony w zebranych źródłach,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE,
 * — ROZBUDOWY DK94 JAKO OSI. Oś „droga i jej remont” należy do MOGILAN
 *   (zakopianka, DK7 w Libertowie). Tu tylko wzmianka.
 *
 * PUŁAPKI:
 * — DOLINA KOBYLAŃSKA NALEŻY DO GMINY ZABIERZÓW. Nie przypisywać jej tutaj,
 * — DOLINA BĘDKOWSKA leży w TRZECH gminach: górny odcinek z Jaskinią
 *   Nietoperzową tutaj, środkowy w Będkowicach (Wielka Wieś), wylot pod
 *   Kobylanami (Zabierzów). Obie gminy opisują ją jako „swoją”,
 * — DOLINA KLUCZWODY NALEŻY DO WIELKIEJ WSI,
 * — RACŁAWICE to sołectwo TEJ gminy, ale istnieje też GMINA Racławice
 *   w powiecie miechowskim. NIE UMIESZCZAĆ w nearbyTowns,
 * — PRZEGINIA bez przydomka to ta gmina; PRZEGINIA DUCHOWNA i PRZEGINIA
 *   NARODOWA to sołectwa gminy Czernichów,
 * — GRODZISKO tutaj (Skała 502) to nie to samo co GRODZISKO w gminie
 *   Skała (pustelnia bł. Salomei),
 * — SZLAK ORLICH GNIAZD biegnie GRANICĄ Przegini i Sułoszowej, nie
 *   środkiem gminy. Nie pisać „przecina gminę”.
 */

export const JERZMANOWICE_PRZEGINIA: CityContent = {
  slug: "jerzmanowice-przeginia",
  h1: "Thermomix Jerzmanowice-Przeginia – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Jerzmanowice-Przeginia — prezentacja",
  seoDescription:
    "Thermomix w gminie Jerzmanowice-Przeginia: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich ośmiu sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jerzmanowice-Przeginia — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Jerzmanowice-Przeginia. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Jerzmanowic, Przegini, Sąspowa, Czubrowic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie osiem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Jerzmanowice-Przeginia – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Czterysta pięćdziesiąt metrów nad Krakowem",
      paragraphs: [
        "Ta gmina leży na jurajskiej wierzchowinie, na wysokości od czterystu do czterystu pięćdziesięciu metrów nad poziomem morza. Najwyższy punkt, Grodzisko zwane też Skałą pięćset dwa, ma około pięciuset dwunastu metrów — to najwyższe wzniesienie południowej części Jury i drugie w całym paśmie. Najwyższe jest w Podzamczu, już w województwie śląskim.",
        "To nie jest ciekawostka dla turystów, tylko coś, co widać w kalendarzu. Opis klimatu na stronie gminy jest w tej sprawie bardzo konkretny: zima trwa tu dłużej i jest mroźniejsza niż w okolicznych regionach, a śnieg zalega dłużej właśnie ze względu na wysokość. Średnia roczna temperatura to około siedmiu i pół stopnia, w dnach dolin nawet sześciu. Opady sięgają siedmiuset milimetrów rocznie.",
        "Druga rzecz, która wynika z wapienia pod nogami, dotyczy wody. Zwierciadło wód podziemnych leży tu od półtora do dziewięćdziesięciu pięciu metrów pod powierzchnią, a w okolicach samych Jerzmanowic — jak pisze gmina — znacznie głębiej. Potoki nie płyną przez wsie, tylko dnami wąskich dolin: Będkówka, Szklarka, Racławka. Gęstość sieci rzecznej to około pół kilometra na kilometr kwadratowy, czyli bardzo mało.",
        "Za to woda, kiedy się już pojawia, potrafi zrobić wrażenie. W Dolinie Szklarki bije wywierzysko krasowe zwane źródłem Pióro, o wydajności dochodzącej do sześćdziesięciu litrów na sekundę.",
        "Wierzchowina ma jeszcze jedną konsekwencję, tym razem społeczną. Ta gmina jako jedyna w podkrakowskim pierścieniu praktycznie się nie zsuburbanizowała: od dwa tysiące drugiego roku przybyło tu niecałe osiem procent mieszkańców, a średnia wieku wynosi czterdzieści jeden lat. Dla porównania — sąsiednia Wielka Wieś urosła w tym samym czasie o ponad dziewięćdziesiąt procent. Tu się mieszka, a nie wprowadza.",
        "Pod ziemią jest natomiast bardzo tłoczno. W gminie leży kilkanaście jaskiń, z Jaskinią Nietoperzową na czele — trzysta dwadzieścia sześć metrów korytarzy, badania archeologiczne z przełomu lat pięćdziesiątych i sześćdziesiątych, a w dziewiętnastym wieku, przy eksploatacji namuliska na nawóz, wydobyto stąd około czterech tysięcy kłów niedźwiedzia jaskiniowego. Kręcono w niej zdjęcia do Ogniem i mieczem.",
        "Do gminy należy też największy rezerwat w Małopolsce — Dolina Racławki, blisko czterysta siedemdziesiąt cztery hektary — oraz czternaście procent powierzchni Ojcowskiego Parku Narodowego. Historia sięga tu głęboko: Przeginia po raz pierwszy pojawia się w dokumentach dwudziestego dziewiątego września tysiąc dwieście dwudziestego ósmego roku, Jerzmanowice w tysiąc trzysta trzydziestym piątym.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Jerzmanowice-Przeginia?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich osiem: Jerzmanowice, Przeginia, Racławice, Sąspów, Czubrowice, Szklary, Łazy i Gotkowice. Sąspów leży w dolinie, reszta na wierzchowinie, więc trasy różnią się bardziej, niż wynikałoby z odległości na mapie.",
        "Zimą warto uprzedzić, jeśli dojazd pod dom jest stromy albo nieodśnieżony. Nie po to, żeby odwoływać — po to, żeby wyjechać kwadrans wcześniej i nie kazać nikomu czekać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Jerzmanowice-Przeginia"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dłuższa zima w kuchni",
      paragraphs: [
        "Kiedy zima trwa dłużej i jest mroźniejsza, kuchnia wygląda inaczej niż trzydzieści kilometrów niżej. Sezon na świeże warzywa z własnego ogrodu zaczyna się później i kończy wcześniej, a między jednym a drugim trzeba czymś ten czas wypełnić.",
        "Stąd pierwsza rzecz, która ma tu sens: przetwory robione jesienią na zapas. Przecier pomidorowy, powidła, kompoty, mrożone zupy w porcjach. Gotują się bez pilnowania i bez mieszania, a przy większych ilościach to jest różnica między jednym popołudniem a całym dniem stania przy kuchni.",
        "Druga to dania, które grzeją i syczą przez pół dnia same z siebie. Gulasz, fasolka, kapuśniak, grochówka — rzeczy, które w domu na czterystu pięćdziesięciu metrach jada się od października do kwietnia i które robi się dużym garnkiem, a nie na jeden posiłek. Urządzenie gotuje je bez nadzoru i samo się wyłącza, więc można nastawić przed wyjściem i wrócić do gotowego.",
        "Trzecia rzecz jest mniej oczywista i dotyczy wody. Na wapieniu woda jest twarda, co widać po czajniku i po tym, że herbata smakuje inaczej niż u znajomych z doliny. Urządzenie też się od tego zakamienia i po prostu trzeba je co jakiś czas odkamienić — to jedna z rzeczy, o których uprzedzam od razu, żeby nie było niespodzianki po roku.",
        "Czwarta jest zupełnie prozaiczna: chleb. W gminie, gdzie zimą nie zawsze chce się wyjeżdżać po pieczywo, wyrobienie ciasta w kilka minut zamiast kwadransa ręcznie zmienia rachunek na tyle, że wiele osób zaczyna piec regularnie.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Jerzmanowice-Przeginia i gotowanie — krótsze lato, dłuższa spiżarnia",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazw działających tu kół gospodyń — podstrona gminy z ich listą jest niedostępna. Nie będę więc wymieniać nazw ani liczb, których nie sprawdziłam.",
      "To, co o tutejszej kuchni da się powiedzieć z pewnością, wynika z geografii. Gmina leży na wierzchowinie czterysta do czterystu pięćdziesięciu metrów nad poziomem morza, ma dłuższą i mroźniejszą zimę niż okoliczne regiony i około siedmiuset milimetrów opadów rocznie. To nie jest klimat pod wczesne warzywa — to klimat pod spiżarnię.",
      "Kuchnia takich miejsc w całej Polsce wygląda podobnie i nie ma w tym nic wstydliwego: kapusta, ziemniaki, fasola, gęste zupy na kościach, kiszonki, przetwory z jesieni, ciasto drożdżowe. Rzeczy, które się przechowuje i które grzeją.",
      "Gmina zachowuje tradycje etnograficzne Krakowiaków Zachodnich — tak opisuje to sama, przy okazji działalności kół gospodyń — i to jest ten sam krąg kulinarny co w reszcie zachodniej części powiatu, tylko przesunięty o kilka tygodni w sezonie i o kilka stopni w termometrze.",
      "Dla urządzenia najsensowniejsze jest tu jedno i drugie: jesienne przetwory robione w większych ilościach bez stania przy garnku oraz zimowe dania jednogarnkowe, które gotują się same. Czego nie zrobi, mówię wprost: nie zastąpi wprawy przy cieście i nie skróci zimy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Jerzmanowice-Przeginia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu, bez żadnej dopłaty za odległość. Gmina liczy około jedenastu tysięcy mieszkańców na sześćdziesięciu ośmiu kilometrach kwadratowych, około dwudziestu dwóch kilometrów na północny zachód od Krakowa.",
    "Sołectwa to: Jerzmanowice, Przeginia, Racławice, Sąspów, Czubrowice, Szklary, Łazy i Gotkowice. Dwa największe są niemal równe — Jerzmanowice liczą blisko trzy tysiące mieszkańców, Przeginia ponad dwa i pół — i stąd dwuczłonowa nazwa gminy. Urząd stoi w Jerzmanowicach, przy ulicy Rajskiej.",
    "Na terenie gminy leży największy rezerwat przyrody w Małopolsce, Dolina Racławki, oraz Dolina Szklarki ze źródłem Pióro. Do gminy należy też blisko czternaście procent powierzchni Ojcowskiego Parku Narodowego, głównie w rejonie Sąspowa.",
    "Jaskiń jest tu kilkanaście. Największa i jedyna udostępniona z przewodnikiem to Jaskinia Nietoperzowa w górnej części Doliny Będkowskiej — sama dolina ciągnie się zresztą przez trzy gminy, bo jej środkowy odcinek leży w Będkowicach koło Wielkiej Wsi, a wylot pod Kobylanami w gminie Zabierzów.",
    "Dojazd: kolei w gminie nie ma. Główną osią jest droga krajowa dziewięćdziesiąt cztery, biegnąca przez Przeginię, Gotkowice i Jerzmanowice. Od grudnia dwa tysiące dwudziestego trzeciego roku kursuje tu krakowska linia dwieście, co godzinę w dni robocze; działają też trzy linie komunikacji gminnej.",
  ],
  districts: [
    "Jerzmanowice",
    "Przeginia",
    "Racławice",
    "Sąspów",
    "Czubrowice",
    "Szklary",
    "Łazy",
    "Gotkowice",
  ],

  nearbyHeading: "Sułoszowa, Wielka Wieś i Krzeszowice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Sułoszową, Skałą, Wielką Wsią, Zabierzowem, Krzeszowicami i Olkuszem. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylące: Racławice w tej gminie to sołectwo, a nie gmina Racławice z powiatu miechowskiego. To dwie różne miejscowości o tej samej nazwie.",
  ],
  nearbyTowns: [
    "Sułoszowa",
    "Skała",
    "Wielka Wieś",
    "Zabierzów",
    "Krzeszowice",
    "Olkusz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Jerzmanowice-Przeginia", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Sąspowie albo w Gotkowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie osiem sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy, bo dojazd na wierzchowinę i do doliny wygląda inaczej.",
    },
    ...faqWspolne("w gminie Jerzmanowice-Przeginia"),
    {
      question: "Mamy tu twardą wodę. Czy to problem dla Thermomixa?",
      answer:
        "Nie problem, ale rzecz do wiedzenia. Na wapiennym podłożu woda jest twarda i osadza kamień na wszystkim, co ją podgrzewa — na czajniku, na pralce i również w naczyniu Thermomixa. Rozwiązanie jest zwyczajne: co jakiś czas odkamieniacz, dokładnie tak jak w czajniku. Pokazuję to przy pierwszym uruchomieniu i mówię o tym od razu, żeby nikt nie był zaskoczony po roku.",
    },
  ],

  geo: { lat: 50.215113, lng: 19.745157 },
};
