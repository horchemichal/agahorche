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
 * GROMNIK — GMINA WIEJSKA w powiecie tarnowskim.
 * 8 737 mieszkańców (GUS, 31.12.2024), 69,7 km², 125 os./km²,
 * +4,8% od 2002, średni wiek 39,2, saldo migracji −28,
 * REGON 722 (636 osób fizycznych).
 * 7 SOŁECTW: Brzozowa, Chojnik, Golanka, Gromnik, Polichty,
 * Rzepiennik Marciszewski, Siemiechów.
 *
 * OŚ STRONY: WIEŚ, KTÓRA PEŁNI FUNKCJE MIASTA — I JAKO JEDYNA
 * W OKOLICY NIE TRACI LUDZI. W czwórce pogórzańskiej Gromnik jest
 * jedynym, który urósł: +4,8% od 2002, przy Ryglicach −1,8%,
 * Rzepienniku −4,5% i Szerzynach −9,7%. Ma też najniższy średni wiek
 * (39,2) i najwyższą gęstość (125 os./km²). Powód, który się nasuwa:
 * sama wieś Gromnik (3 441 mieszk., NSP 2021) ma komplet szkół
 * ponadpodstawowych — LICEUM I TECHNIKUM — jakiego nie ma żadna
 * z pozostałych trzech gmin, plus czynną stację kolejową i skrzyżowanie
 * dwóch dróg wojewódzkich. Wieś bez praw miejskich, która robi za
 * miasteczko dla okolicy.
 * ⚠️⚠️ PRZYCZYNOWOŚĆ NIEPOTWIERDZONA. Nie znaleziono źródła, które
 * wprost tłumaczy wzrost. NIE PISAĆ „gmina rośnie, bo ma liceum” —
 * w treści zestawienie faktów, nie teza przyczynowa.
 * ⚠️⚠️ KOLEJ NIE MOŻE BYĆ OSIĄ — to oś ZABIERZOWA. Wchodzi jako
 * element, nie jako teza.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SZKOŁY (polskawliczbach, wieś Gromnik): przedszkole publiczne
 *   (7 oddziałów, 137 dzieci), szkoła podstawowa im. Wincentego Witosa
 *   (16 oddziałów, 390 uczniów), LICEUM OGÓLNOKSZTAŁCĄCE (12 oddziałów,
 *   306 uczniów), SZKOŁA ZAWODOWA/TECHNIKUM (3 oddziały, 82 uczniów).
 *   Placówka ponadpodstawowa: Zespół Szkół Ogólnokształcących
 *   i Zawodowych im. Jana Pawła II w Gromniku, ul. Witosa 4 — jednostka
 *   POWIATU TARNOWSKIEGO. ⚠️ Dane o gimnazjum pochodzą sprzed reformy
 *   2017; liczby uczniów traktować jako orientacyjne,
 * — WIEŚ GROMNIK: 3 441 mieszkańców (NSP 2021) — 39,4% ludności gminy;
 *   312 podmiotów REGON w samej wsi (256 osób fizycznych),
 * — KOLEJ: stacja Gromnik (km 31,826) ORAZ przystanek Chojnik na linii
 *   nr 96 Tarnów–Leluchów, jednotorowej i zelektryfikowanej. Ruch
 *   pasażerski działa — przewoźnicy POLREGIO i Koleje Małopolskie;
 *   kierunki: Kraków, Katowice, Tarnów, Nowy Sącz, Krynica-Zdrój,
 *   Muszyna, Piwniczna-Zdrój, Jasło,
 * — DROGI: skrzyżowanie DW 977 i DW 980 plus ok. 50 km dróg gminnych.
 *   ⚠️ KOREKTA: przez Gromnik NIE przebiega DK75. Od 2 września 2026
 *   nowa gminna linia autobusowa Polichty–Gromnik i Brzozowa–Gromnik,
 * — RZEKA: przez gminę płynie BIAŁA (Biała Tarnowska), nie Dunajec.
 *   Biała to prawobrzeżny dopływ Dunajca, uchodzi do niego dopiero
 *   w okolicach Tarnowa. Długość 101,8 km, źródła w Beskidzie Niskim
 *   na stoku Lackowej, zlewnia 983,3 km², obszar Natura 2000
 *   PLH120090; JEDNO Z NAJWAŻNIEJSZYCH TARLISK RYB WĘDROWNYCH
 *   W DORZECZU WISŁY, objęte programem restytucji,
 * — POLICHTY: najmniejsze sołectwo gminy, 274 mieszkańców (NSP 2021);
 *   CAŁE SOŁECTWO leży w Ciężkowicko-Rożnowskim Parku Krajobrazowym,
 *   w paśmie Suchej Góry. Ośrodek edukacyjny Zespołu Parków
 *   Krajobrazowych z 1,5-kilometrową ścieżką przyrodniczą, ok. 30
 *   gatunków roślin chronionych, staw z drewnianym mostem,
 *   TRZY ŹRÓDŁA WÓD MINERALNYCH SIARCZKOWYCH — największy naturalny
 *   wypływ powierzchniowy na tym terenie. Współrzędne 49,821389 /
 *   20,903611,
 * — HISTORIA (gromnik.pl): 1288 pierwsza wzmianka — Gromnik otrzymuje
 *   prawo osady od OPACTWA BENEDYKTYNÓW W TYŃCU; 1334 dokumenty
 *   potwierdzają sołectwo; 1480 Jan Długosz opisuje drewnianą świątynię
 *   pw. św. Marcina, własność benedyktynów, do parafii należą Chojnik
 *   i Golanka; XVI w. ziemia przechodzi do WIELOPOLSKICH, 1581 przy
 *   dworze stawy, młyn, ogrody; 1780 właścicielem Joachim Sobolewski;
 *   EDWARD DZWONKOWSKI (1819–1887) — galicyjski pozytywista, POSEŁ DO
 *   SEJMU KRAJOWEGO I CZŁONEK RADY PAŃSTWA W WIEDNIU, prowadził
 *   STADNINY KONI ZNANE W CAŁEJ MONARCHII; 15 listopada 1914 wojska
 *   rosyjskie zajmują Gromnik, wiele domów spalonych; 1945 parcelacja
 *   majątku dworskiego, budynek dworski na szkołę,
 * — DOŻYNKI POWIATU TARNOWSKIEGO odbyły się w Gromniku w sierpniu
 *   2026 r. (powiattarnowski.pl); dożynki gminne jako impreza cykliczna,
 * — ODLEGŁOŚCI POTWIERDZONE: 5,9 km do Ciężkowic, 9,1 km do Tuchowa,
 * — ADRES: Urząd Gminy Gromnik, ul. Witosa 2, 33-180 Gromnik.
 *   Współrzędne wsi: 49,838056 / 20,961944.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KOLEI JAKO OSI. To oś ZABIERZOWA (przystanki kolejowe). Tu element,
 * — PRZYCZYNY WZROSTU LUDNOŚCI PODANEJ WPROST. Nie znaleziono źródła.
 *   Zestawienie faktów, nie teza przyczynowa,
 * — WZROSTU LUDNOŚCI JAKO OSI DEMOGRAFICZNEJ W STYLU ZIELONEK. Tam osią
 *   jest przeprowadzka z mieszkania do domu; tu — kontrast z sąsiadami
 *   i funkcje ośrodka,
 * — WYSOKOŚCI NAD POZIOMEM MORZA I KLIMATU. To oś
 *   JERZMANOWIC-PRZEGINI. Nie użyte,
 * — NAZWANYCH PRYWATNYCH PRACODAWCÓW. Strona gminy wymienia wyłącznie
 *   podmioty publiczne. Nie potwierdzono żadnego,
 * — ROKU UTWORZENIA I POWIERZCHNI Ciężkowicko-Rożnowskiego PK.
 *   Strona ZPKWM niedostępna,
 * — DOKŁADNEJ NAZWY I STATUSU ośrodka w Polichtach. Źródła używają
 *   trzech różnych nazw,
 * — ODLEGŁOŚCI GROMNIK–TARNÓW I GROMNIK–KRAKÓW. Kalkulatory tras
 *   zwróciły puste dane. NIE PODANE,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA.
 *
 * PUŁAPKI:
 * — ⭐ RZEPIENNIK MARCISZEWSKI NALEŻY DO TEJ GMINY, a Rzepiennik
 *   Strzyżewski, Biskupi i Suchy do gminy Rzepiennik Strzyżewski.
 *   INNY JEST TEŻ KOD POCZTOWY: Marciszewski 33-180 (poczta Gromnik),
 *   pozostałe 33-163,
 * — PRZEZ GMINĘ PŁYNIE BIAŁA, NIE DUNAJEC. Portal powiattarnowski.pl
 *   opisuje potoki jako spływające do „White Dunajec River” — to błąd
 *   translacyjny mieszający obie rzeki,
 * — NIE MA TU DK75. Skrzyżowanie tworzą DW 977 i DW 980,
 * — SOŁECTWA pochodzą ze strony urzędu, nie ze statutu.
 */

export const GROMNIK: CityContent = {
  slug: "gromnik",
  h1: "Thermomix Gromnik – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Gromnik — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Gromnik: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich siedmiu sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Gromnik — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Gromnik. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Gromnika, Siemiechowa, Brzozowej, Chojnika i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gromniku – jak wygląda prezentacja?",
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
      heading: "Wieś, która nie traci ludzi",
      paragraphs: [
        "W tej części pogórza demografia idzie w jedną stronę i nie jest to strona optymistyczna. Sąsiednie Szerzyny straciły od dwa tysiące drugiego roku prawie dziesięć procent mieszkańców, Rzepiennik Strzyżewski cztery i pół, Ryglice niecałe dwa. Gromnik w tym samym czasie urósł o cztery i osiem dziesiątych procenta.",
        "Ma też najniższy średni wiek w całej czwórce — trzydzieści dziewięć lat i dwie dziesiąte — i najwyższą gęstość zaludnienia, sto dwadzieścia pięć osób na kilometr kwadratowy.",
        "Nie będę udawać, że znam przyczynę, bo żadne źródło jej wprost nie podaje. Ale kilka faktów układa się obok siebie w sposób, który trudno przeoczyć.",
        "Sama wieś Gromnik liczy około trzech i pół tysiąca mieszkańców, czyli blisko czterdzieści procent całej gminy, i ma coś, czego nie ma żadna z pozostałych trzech gmin: pełny komplet szkół. Przedszkole, szkołę podstawową imienia Wincentego Witosa i — co najważniejsze — liceum ogólnokształcące oraz technikum, prowadzone przez powiat tarnowski w Zespole Szkół imienia Jana Pawła Drugiego przy ulicy Witosa.",
        "Do tego stacja kolejowa na czynnej linii z Tarnowa do Leluchowa, z przystankiem także w Chojniku, skąd jeżdżą pociągi do Krakowa, Katowic, Nowego Sącza i Krynicy. I skrzyżowanie dwóch dróg wojewódzkich w środku wsi.",
        "To wieś, która nie ma praw miejskich, ale robi za miasteczko dla całej okolicy: tu się chodzi do liceum, stąd się wyjeżdża pociągiem, tu się załatwia sprawy. W sierpniu dwa tysiące dwudziestego szóstego roku odbyły się tu zresztą dożynki całego powiatu tarnowskiego.",
        "Historia sięga tysiąc dwieście osiemdziesiątego ósmego roku, kiedy Gromnik otrzymał prawo osady od benedyktynów z Tyńca. W tysiąc czterysta osiemdziesiątym Jan Długosz opisał tu drewniany kościół świętego Marcina. Najbarwniejszą postacią był jednak Edward Dzwonkowski, żyjący w latach tysiąc osiemset dziewiętnaście do osiemdziesiąt siedem — galicyjski pozytywista, poseł do Sejmu Krajowego i członek Rady Państwa w Wiedniu, który prowadził tu stadniny koni znane w całej monarchii.",
        "Warto jeszcze wiedzieć, że przez gminę płynie Biała, nazywana też Białą Tarnowską — a nie Dunajec, do którego uchodzi dopiero pod Tarnowem. Biała jest objęta programem ochrony jako jedno z najważniejszych tarlisk ryb wędrownych w dorzeczu Wisły.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gromnik?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich siedem: Gromnik, Siemiechów, Brzozowa, Chojnik, Golanka, Polichty i Rzepiennik Marciszewski.",
        "Przy tym ostatnim jedna ważna uwaga. Rzepiennik Marciszewski należy do gminy Gromnik i ma kod pocztowy trzydzieści trzy sto osiemdziesiąt, obsługiwany przez pocztę w Gromniku. Trzy pozostałe Rzepienniki — Strzyżewski, Biskupi i Suchy — leżą w sąsiedniej gminie i mają kod trzydzieści trzy sto sześćdziesiąt trzy. Warto podać pełną nazwę, bo nawigacja i przesyłki potrafią trafić nie tam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Gromnik"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Śniadanie przed siódmą i coś do plecaka",
      paragraphs: [
        "W gminie, w której działa liceum i technikum, w wielu domach poranek wygląda tak samo: ktoś wychodzi przed siódmą, ktoś inny idzie na pociąg, a między jednym a drugim trzeba zrobić śniadanie i coś do plecaka.",
        "Nastolatek zjada dużo i zjada nieregularnie. Kupowanie drugiego śniadania na mieście przez pięć dni w tygodniu jest kosztowne, a to, co da się kupić po drodze, rzadko bywa sensowne.",
        "Pierwsza rzecz, która to zmienia, to pasty. Z jajek, z fasoli, z ryby, z pieczonej papryki albo z twarogu — każda powstaje w kilkadziesiąt sekund, z rzeczy, które i tak są w lodówce, i starcza na kilka dni. Kanapka z domową pastą jest tańsza i syci dłużej niż bułka ze sklepu.",
        "Druga to koktajle i owsianki, robione wieczorem albo rano w kilka minut. Dla kogoś, kto o siódmej nie ma ochoty jeść, to często jedyna forma śniadania, która wchodzi.",
        "Trzecia to obiad, który czeka. Kiedy jedno dziecko wraca o czternastej, drugie o szesnastej, a rodzice po siedemnastej, danie jednogarnkowe nastawione rano i wyłączające się samo jest rozwiązaniem prostszym niż jakikolwiek grafik. Każdy nakłada sobie, kiedy wraca.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Gromnik i gotowanie — Biała, źródła siarczkowe i kuchnia pogórzańska",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z gminy Gromnik na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń. Nie będę więc wymieniać rzeczy, których nie sprawdziłam — sąsiednie Ryglice mają dwa takie wpisy i łatwo byłoby je tu przepisać.",
      "To, co o tutejszej okolicy da się powiedzieć na pewno, dotyczy przede wszystkim przyrody. Przez gminę płynie Biała Tarnowska, jedno z najważniejszych tarlisk ryb wędrownych w dorzeczu Wisły, objęte programem restytucji gatunków. W Polichtach, najmniejszym sołectwie gminy, biją trzy źródła wód mineralnych siarczkowych — największy naturalny wypływ powierzchniowy w tej okolicy.",
      "Całe sołectwo Polichty leży w Ciężkowicko-Rożnowskim Parku Krajobrazowym i działa tam ośrodek edukacyjny Zespołu Parków Krajobrazowych z półtorakilometrową ścieżką przyrodniczą i około trzydziestoma gatunkami roślin chronionych.",
      "Kuchnia jest tu pogórzańska i solidna: ziemniaki, kapusta, fasola, gęste zupy, kluski, ciasto drożdżowe na niedzielę, przetwory z jesieni. Z tą różnicą, że w gminie z liceum i technikum gotuje się częściej dla nastolatków niż dla emerytów — średni wiek mieszkańca jest tu najniższy w całej okolicy.",
      "Dla urządzenia najsensowniejsze są tu pasty kanapkowe i koktajle robione na poranny pośpiech oraz dania jednogarnkowe czekające na wracających o różnych porach. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Gromnik dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu, bez żadnej dopłaty za odległość. Gmina liczy blisko dziewięć tysięcy mieszkańców na siedemdziesięciu kilometrach kwadratowych, z czego w samym Gromniku mieszka około trzech i pół tysiąca.",
    "Sołectwa to: Gromnik, Siemiechów, Brzozowa, Chojnik, Golanka, Polichty i Rzepiennik Marciszewski.",
    "Rzepiennik Marciszewski wymaga osobnej uwagi: należy do tej gminy, choć trzy inne Rzepienniki — Strzyżewski, Biskupi i Suchy — leżą w gminie sąsiedniej. Różnią się nawet kodem pocztowym i urzędem, który je obsługuje.",
    "Polichty to najmniejsze sołectwo gminy, liczące niespełna trzysta osób, i całe leży w Ciężkowicko-Rożnowskim Parku Krajobrazowym. Działa tam ośrodek edukacyjny ze ścieżką przyrodniczą, a w okolicy biją trzy źródła wód mineralnych siarczkowych.",
    "Dojazd: przez gminę przechodzi linia kolejowa numer dziewięćdziesiąt sześć z Tarnowa do Leluchowa, ze stacją w Gromniku i przystankiem w Chojniku; kursują tu pociągi Polregio i Kolei Małopolskich. W środku wsi krzyżują się dwie drogi wojewódzkie. Od września dwa tysiące dwudziestego szóstego roku działają też dwie gminne linie autobusowe.",
  ],
  districts: [
    "Gromnik",
    "Siemiechów",
    "Brzozowa",
    "Chojnik",
    "Golanka",
    "Rzepiennik Marciszewski",
    "Polichty",
  ],

  nearbyHeading: "Ciężkowice, Tuchów i Rzepiennik też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Ciężkowicami, Tuchowem, Rzepiennikiem Strzyżewskim, Pleśną i Zakliczynem. Do Ciężkowic jest stąd niecałe sześć kilometrów, do Tuchowa nieco ponad dziewięć. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo myli się nagminnie: Rzepiennik Marciszewski leży w gminie Gromnik, a nie w gminie Rzepiennik Strzyżewski. Rzepienników jest w sumie cztery i rozdzielone są między dwie gminy.",
  ],
  nearbyTowns: [
    "Ciężkowice",
    "Tuchów",
    "Rzepiennik Strzyżewski",
    "Pleśna",
    "Zakliczyn",
    "Ryglice",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Gromnik", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Siemiechowie albo w Rzepienniku Marciszewskim. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie siedem sołectw traktuję dokładnie tak samo. Przy Rzepienniku warto podać pełną nazwę — Marciszewski — bo trzy pozostałe Rzepienniki leżą w sąsiedniej gminie i mają inny kod pocztowy. Nawigacja potrafi to pomylić.",
    },
    ...faqWspolne("w gminie Gromnik"),
    {
      question: "Mamy w domu nastolatków. Czy to się przy nich sprawdza?",
      answer:
        "Sprawdza się, ale nie tam, gdzie się zwykle spodziewamy. Nastolatek nie zacznie gotować obiadów dlatego, że w kuchni stanął nowy sprzęt. Realna zmiana dotyczy dwóch rzeczy: śniadań i drugich śniadań. Pasty kanapkowe robione w kilkadziesiąt sekund wychodzą taniej i sycą dłużej niż bułka ze sklepu po drodze, a koktajl albo owsianka to często jedyna forma śniadania, która o siódmej rano w ogóle wchodzi. Druga rzecz to obiad, który czeka — kiedy każdy wraca o innej porze, danie nastawione rano i wyłączające się samo rozwiązuje problem lepiej niż jakikolwiek grafik.",
    },
  ],

  geo: { lat: 49.838056, lng: 20.961944 },
};
