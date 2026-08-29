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
 * ZEMBRZYCE — gmina wiejska, powiat suski. Pięć sołectw,
 * ok. 5,4 tys. mieszkańców na ok. 39 km².
 *
 * OŚ STRONY: PRZEŁOŻENIE LINII KOLEJOWEJ. Gmina leży przy cofce
 * Jeziora Mucharskiego, ale — inaczej niż Mucharz — nic tu nie zalano
 * i nikogo nie przesiedlono. Zamiast tego przeniesiono infrastrukturę:
 * dziewięć kilometrów torów, dwa mosty i obwodnicę.
 *
 * ⚠️ ŚWIADOME ODRÓŻNIENIE OD MUCHARZA (`mucharz.ts`), który opisuje
 * ten sam zbiornik. Tam osią jest znikanie: Skawce pod wodą,
 * Zagórze ze 114 mieszkańców na 25, rozebrany most. TUTAJ osią jest
 * odwrotność: to, co zbudowano, żeby wieś została na miejscu.
 * NIE POWTARZAĆ narracji o przesiedleniach — w Zembrzycach ich nie było.
 *
 * Druga oś: TU POCIĄGI JEŻDŻĄ. To wyróżnia Zembrzyce w całej fali
 * suskiej — w Jordanowie i Stryszawie ruch jest zawieszony,
 * a w Zawoi kolei nie ma wcale.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PRZEŁOŻENIE LINII KOLEJOWEJ NR 97 na odcinku Stryszów–Zembrzyce:
 *   9 km nowego torowiska, oddane 15 grudnia 2014 r., koszt ponad
 *   514 mln zł — blisko jedna czwarta całego budżetu budowy zbiornika.
 *   Nowy tor ułożono na nasypie hydrotechnicznym stabilizującym
 *   osuwiskowe zbocza,
 * — MOSTY: siedmioprzęsłowy w Zembrzycach o długości blisko 400 m
 *   (opisywany w 2014 r. jako największy budowany wówczas most
 *   kolejowy w Polsce) oraz 234-metrowy czteroprzęsłowy nad Stryszawką,
 * — OBWODNICA ZEMBRZYC: 1 785 m z mostem o rozpiętości 105 m;
 *   nowy odcinek DK28 Tarnawa Dolna–Jaszczurowa budowany 2006–2011,
 * — PIERWSZA WZMIANKA: 1333 r. Śleszowice i Tarnawa Dolna również
 *   z nadań księcia Jana I oświęcimskiego z tego roku,
 * — SOŁECTWA (5), stan 31.12.2025 wg raportu o stanie gminy:
 *   Zembrzyce 1 996, Tarnawa Dolna 1 433, Śleszowice 862,
 *   Marcówka 761, Tarnawa Górna 360. Razem 5 412,
 * — KOLEJ: przystanek Zembrzyce JEST CZYNNY, linia 97, obsługa
 *   POLREGIO, kierunki Kraków / Sucha Beskidzka. Zembrzyce leżą
 *   na ruchowo czynnym odcinku Skawina–Sucha,
 * — DROGA: DK28 przez gminę, z obwodnicą Zembrzyc,
 * — GOSPODARKA: 582 podmioty REGON, w tym 568 mikrofirm;
 *   przetwórstwo i budownictwo to 41,9% firm. Bezrobocie
 *   rejestrowane 4,4%. 115 pracujących na 1000 mieszkańców (2021) —
 *   bardzo nisko,
 * — KGW: KGW Tarnawa Dolna (2002, 15 członkiń), Zembrzyckie Koło
 *   Gospodyń „Mioduszyna” — zespół regionalny od 2007 r., stroje
 *   rekonstruowane z XIX w.; KGW „Marcowianki” (2011, reaktywacja
 *   koła z lat 60.); KGW „Redz” Tarnawa Górna (reaktywacja 2011,
 *   izba regionalna); Stowarzyszenie Nasza Wieś Śleszowice,
 *   Gaździny z Marcówki, Ojcowizna z Tarnawy Dolnej,
 * — ROLADA SEROWA Z RYDZAMI — „Mioduszyna”, 3. miejsce w kategorii
 *   potraw współczesnych, Powiatowy Konkurs Potraw Regionalnych
 *   „O Złotą Warzechę”, 16 listopada 2024 r. w Stryszawie,
 * — DNI GMINY ZEMBRZYCE: 13–14 czerwca 2026 r., II edycja,
 *   w programie polsko-słowacki festiwal „Regionalne smaki
 *   bez granic”, współpraca z gminą Beňadovo,
 * — DOŻYNKI POWIATOWE organizowane w Zembrzycach.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOKŁADNEGO CZASU PRZEJAZDU Z ZEMBRZYC DO KRAKOWA. Znam czas
 *   z Suchej Beskidzkiej (1 h 27 – 1 h 34), a Zembrzyce leżą jeden
 *   przystanek bliżej. Piszę „nieco ponad godzina z kwadransem”
 *   i odsyłam do rozkładu, zamiast podawać wymyśloną minutę,
 * — POWIERZCHNI GMINY CO DO DZIESIĘTNEJ. Trzy źródła podają 39,
 *   39,2 i 39,9 km². Piszę „około czterdziestu”,
 * — NAZW PRACODAWCÓW. Nie zweryfikowałam żadnej działającej firmy —
 *   ryzyko wskazania podmiotu upadłego,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak. Rolada serowa
 *   z rydzami to laureatka konkursu, nie wpis prawny,
 * — STROJÓW KLISZCZACKICH z Marcówki. Temat Kliszczaków należy
 *   do strony Budzowa (`budzow.ts`) — nie dublować.
 *
 * PUŁAPKI:
 * — NIE PISAĆ, ŻE ZEMBRZYCE ZALANO ani że kogoś stąd przesiedlano.
 *   To historia Mucharza i Świnnej Poręby. Bezpieczna teza:
 *   gmina straciła grunty w rejonie cofki i przeszła przebudowę
 *   kolei oraz drogi,
 * — MOST „NAJWIĘKSZY W POLSCE” to sformułowanie z 2014 r.
 *   i dotyczy mostów wówczas budowanych. Nie pisać w czasie
 *   teraźniejszym,
 * — LINIA 97: odcinek Skawina–Sucha ma ruch, odcinek Sucha–Żywiec
 *   nie. Zembrzyce są na tym pierwszym — nie przenosić na nie
 *   narracji o martwej linii,
 * — ETYMOLOGIA OD ŻUBRA pochodzi z materiału promocyjnego gminy,
 *   nie z opracowania językoznawczego. Podawać jako „wywodzona”.
 */

export const ZEMBRZYCE: CityContent = {
  slug: "zembrzyce",
  h1: "Thermomix Zembrzyce – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Zembrzyce — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Zembrzyce: bezpłatna prezentacja TM7 u Ciebie w kuchni — Zembrzyce, Tarnawa Dolna, Śleszowice, Marcówka. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zembrzyce — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Zembrzyce. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Zembrzyce przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich pięciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie pięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Zembrzyce – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Zembrzycach, jak w Tarnawie, Śleszowicach czy Marcówce.",
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
      heading: "Pół miliarda złotych, żeby przesunąć tory o kilka kilometrów",
      paragraphs: [
        "Kiedy budowano zbiornik na Skawie, okazało się, że stara linia kolejowa ze Skawiny do Żywca znajdzie się pod wodą. Można było ją po prostu zamknąć. Zamiast tego przełożono dziewięć kilometrów torów na odcinku Stryszów–Zembrzyce i oddano je do użytku w grudniu dwa tysiące czternastego roku.",
        "Ta operacja kosztowała ponad pięćset czternaście milionów złotych, czyli blisko jedną czwartą całego budżetu budowy zbiornika. Nowy tor położono na nasypie hydrotechnicznym, bo zbocza są tu osuwiskowe i sam nasyp musiał je stabilizować. Powstały przy tym dwa mosty: siedmioprzęsłowy w Zembrzycach o długości blisko czterystu metrów — opisywano go wtedy jako największy budowany wówczas most kolejowy w Polsce — i drugi, ponaddwustumetrowy, nad Stryszawką.",
        "Chwilę wcześniej zbudowano jeszcze obwodnicę Zembrzyc, prawie dwa kilometry drogi z mostem o rozpiętości stu pięciu metrów, oraz nowy odcinek drogi krajowej. W ciągu kilkunastu lat cała komunikacja tej gminy została w praktyce zbudowana od nowa.",
        "Chcę powiedzieć wprost, co to znaczy, bo o tym zbiorniku pisze się zwykle od strony strat. W sąsiednim Mucharzu woda zabrała zabudowę i zmieniła mapę tak, że jedno sołectwo skurczyło się do dwudziestu kilku osób. W Zembrzycach nie zalano wsi i nikogo stąd nie przesiedlano — tutaj wydano pół miliarda na to, żeby wieś licząca dwa tysiące ludzi nie straciła pociągu.",
        "I nie straciła. To jest zresztą rzecz, która odróżnia Zembrzyce od większości gmin tego powiatu: tutaj pociągi jeżdżą. W Jordanowie i Stryszawie ruch jest w tej chwili zawieszony przez remonty, w Zawoi kolei nie ma w ogóle, a z Zembrzyc jedzie się do Krakowa bezpośrednio, nieco ponad godzinę z kwadransem.",
        "Dla mnie ma to bardzo praktyczne przełożenie: jeżdżę tu do domów, z których ktoś codziennie dojeżdża. A dzień rozciągnięty dojazdem z obu stron ma w środku dokładnie tę dziurę, w której powinien powstawać obiad.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Zembrzyce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa. Gmina jest niewielka, niecałe czterdzieści kilometrów kwadratowych, ale rozpiętość jest spora: same Zembrzyce to blisko dwa tysiące osób, a Tarnawa Górna trzysta sześćdziesiąt. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli dojeżdżasz pociągiem, powiedz o której wracasz — umawiam się na wieczory bez problemu. Weekendy są tu równie normalnym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Zembrzyce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, która pracuje gdzie indziej",
      paragraphs: [
        "Jest tu liczba, która mówi o codzienności więcej niż cokolwiek innego: na tysiąc mieszkańców przypada sto piętnaście osób pracujących na miejscu. To bardzo mało. W gminie działa blisko sześćset firm, ale prawie wszystkie to mikroprzedsiębiorstwa — nie ma tu jednego dużego zakładu, który zatrudniałby ludzi z całej okolicy.",
        "Praca jest więc w Suchej Beskidzkiej, w Wadowicach, w Krakowie. I stąd bierze się kształt dnia, który widzę w tutejszych kuchniach: wyjście rano, powrót po siedemnastej albo później, a między jednym a drugim pytanie, kto ugotuje obiad i kiedy.",
        "Praktyczna korzyść jest tu bardzo konkretna. Danie jednogarnkowe można wstawić i wyjść — gotuje się bez nikogo i samo wyłącza. Albo odwrotnie: wracasz, wstawiasz, idziesz się przebrać i zająć dziećmi, a obiad w tym czasie się robi. Nie trzeba stać ani wracać co dziesięć minut zamieszać.",
        "Druga rzecz to gotowanie na zapas w weekend. Podwójna porcja zupy, sos na kilka dni, ciasto na pierogi, pasty kanapkowe, chleb. W jednym naczyniu, seriami. W domu, z którego dwie osoby dojeżdżają, zapas w lodówce jest wart więcej niż codzienne świeże gotowanie, na które i tak nie ma czasu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a gdy oboje rodzice wracają wieczorem, to bywa realnie potrzebne.",
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
    heading: "Zembrzyce i gotowanie — sześć organizacji gospodyń na pięć wsi",
    paragraphs: [
      "Na pięć sołectw przypada tu sześć kół i stowarzyszeń gospodyń — więcej niż wsi. Najstarsze, w Tarnawie Dolnej, działa od dwa tysiące drugiego roku i liczy piętnaście członkiń. Zembrzyckie koło „Mioduszyna” prowadzi od dwa tysiące siódmego zespół regionalny w strojach rekonstruowanych na podstawie dziewiętnastowiecznych wzorów. „Marcowianki” z Marcówki reaktywowano w dwa tysiące jedenastym, wracając do koła z lat sześćdziesiątych, a koło z Tarnawy Górnej prowadzi izbę regionalną.",
      "To nie jest ozdobnik. W gminie liczącej pięć i pół tysiąca osób sześć takich organizacji oznacza, że gotowanie na wspólne okazje jest tu wciąż normalną częścią roku: dożynki, konkursy, festyny. W Zembrzycach odbywają się zresztą dożynki powiatowe, a od dwa tysiące dwudziestego piątego roku także Dni Gminy z polsko-słowackim festiwalem kulinarnym.",
      "Konkretna potrawa, którą mogę wskazać z nazwiskiem i datą, to rolada serowa z rydzami — „Mioduszyna” zdobyła nią trzecie miejsce w powiatowym konkursie potraw regionalnych w listopadzie dwa tysiące dwudziestego czwartego roku. I tu, jak zwykle, muszę dodać uczciwe zastrzeżenie: to nagroda w konkursie, nie wpis na ministerialną Listę Produktów Tradycyjnych. Żadnego wpisu z tej gminy nie znalazłam.",
      "Co z tego wynika dla urządzenia? Tyle, że gotowanie na dwadzieścia czy pięćdziesiąt osób różni się od domowego nie trudnością, lecz liczbą godzin przy blacie. Masę serową trzeba utrzeć, ciasto wyrobić, farsz posiekać — wszystko po wielokroć. Urządzenie zabiera dokładnie tę część roboty. Smaku i przepisu nie zabiera, bo nie ma jak.",
    ],
  },

  districtsHeading: "Gdzie w gminie Zembrzyce dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu sołectw, bez żadnej dopłaty za odległość: Zembrzyc, Tarnawy Dolnej, Śleszowic, Marcówki i Tarnawy Górnej.",
    "Same Zembrzyce liczą blisko dwa tysiące mieszkańców, czyli około trzydziestu siedmiu procent gminy — siedziba jest tu największą miejscowością, co wcale nie jest regułą w tej okolicy. Tarnawa Dolna ma ponad tysiąc czterysta osób, Śleszowice i Marcówka po kilkaset, Tarnawa Górna trzysta sześćdziesiąt. Cała gmina zajmuje około czterdziestu kilometrów kwadratowych i jest jedną z mniejszych w powiecie.",
    "Historia sięga tu głęboko: Zembrzyce są udokumentowane aktem z tysiąc trzysta trzydziestego trzeciego roku, tak jak Śleszowice i Tarnawa Dolna. Nazwę wywodzi się od żubra — choć to etymologia z materiałów gminnych, nie z opracowania językoznawczego, więc podaję ją z zastrzeżeniem.",
    "Dojazd jest tu naprawdę dobry i to rzadkość w tym powiecie. Przystanek kolejowy w Zembrzycach jest czynny, na linii ze Skawiny do Suchej Beskidzkiej, obsługiwanej przez Polregio. Do Krakowa jedzie się bezpośrednio nieco ponad godzinę z kwadransem — dokładny czas sprawdź w rozkładzie, bo się zmienia. Samochodem prowadzi tędy droga krajowa numer dwadzieścia osiem, z obwodnicą wsi.",
  ],
  districts: [
    "Zembrzyce",
    "Tarnawa Dolna",
    "Śleszowice",
    "Marcówka",
    "Tarnawa Górna",
  ],

  nearbyHeading: "Sucha Beskidzka, Mucharz i Stryszawa też są na mojej trasie",
  nearbyParagraphs: [
    "Do Suchej Beskidzkiej mam stąd kilkanaście minut, do Mucharza i Stryszowa — czyli nad samo Jezioro Mucharskie — podobnie. Dalej są Stryszawa, Budzów i Maków Podhalański. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Marcówce, czyli po wschodniej stronie gminy, bliżej Ci może być do Budzowa niż do samych Zembrzyc. Dla umówienia terminu to bez znaczenia — przyjeżdżam tak samo.",
  ],
  nearbyTowns: [
    "Sucha Beskidzka",
    "Mucharz",
    "Stryszów",
    "Stryszawa",
    "Budzów",
    "Maków Podhalański",
    "Kraków",
  ],

  about: blokOMnie("do gminy Zembrzyce", "w powiecie suskim"),

  faq: [
    {
      question: "Czy do Zembrzyc dojadę pociągiem z Krakowa?",
      answer:
        "Tak i jest to jedna z niewielu gmin w tym powiecie, o której mogę to dziś napisać. Przystanek w Zembrzycach jest czynny, na linii ze Skawiny do Suchej Beskidzkiej, obsługiwanej przez Polregio. Przejazd trwa nieco ponad godzinę z kwadransem — dokładny czas sprawdź w rozkładzie, bo się zmienia z każdą korektą.",
    },
    ...faqWspolne("w gminie Zembrzyce"),
    {
      question: "Czy Zembrzyce zostały zalane przy budowie zbiornika?",
      answer:
        "Nie i warto to sprostować, bo bywa mylone z sąsiednim Mucharzem. W gminie Zembrzyce nie zalano zabudowy i nikogo stąd nie przesiedlano. Gmina straciła grunty w rejonie cofki zbiornika, a przy okazji inwestycji przełożono tu dziewięć kilometrów linii kolejowej i zbudowano obwodnicę. Historia przesiedleń dotyczy Skawiec w gminie Mucharz.",
    },
    {
      question: "Mieszkam w Tarnawie Górnej. To najmniejsza wieś — dojedziesz?",
      answer:
        "Dojadę i bez dopłaty. Tarnawa Górna liczy około trzystu sześćdziesięciu osób, ale odległość nie ma dla mnie znaczenia cenowego — do żadnego sołectwa tej gminy nie doliczam kosztu dojazdu. Proszę tylko o punkt orientacyjny przy umawianiu.",
    },
  ],

  geo: { lat: 49.8156, lng: 19.6006 },
};
