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
 * CZERNICHÓW — GMINA WIEJSKA w POWIECIE KRAKOWSKIM, województwo małopolskie.
 * ⚠️⚠️ NIE MYLIĆ z Czernichowem w powiecie żywieckim (woj. śląskie, nad
 * Jeziorem Żywieckim, domena czernichow.com.pl). TERYT tej gminy: 1206012.
 * 15 453 mieszkańców (GUS, 31.12.2024), ok. 84 km².
 * 12 SOŁECTW: Czernichów (siedziba), Czułówek, Dąbrowa Szlachecka, Kamień,
 * Kłokoczyn, Nowa Wieś Szlachecka, Przeginia Duchowna, Przeginia Narodowa,
 * Rusocice, Rybna, Wołowice, Zagacie.
 *
 * OŚ STRONY: DWIE INSTYTUCJE-PIERWOWZORY W JEDNEJ WSI, POWIĄZANE JEDNĄ
 * OSOBĄ. Najstarsza działająca nieprzerwanie szkoła rolnicza w Polsce
 * (inauguracja 20.06.1860) i PIERWSZA NA ZIEMIACH POLSKICH spółdzielcza
 * kasa oszczędnościowo-pożyczkowa (listopad 1889 / rejestracja 26.01.1890),
 * założona przez Franciszka Stefczyka — nauczyciela tej szkoły — i ks.
 * Edwarda Królikowskiego.
 * ⚠️ OŚ CELOWO NIE-KULINARNA, bo gmina dzieli z LISZKAMI obszar kiełbasy
 * lisieckiej. Wędliny wchodzą wyłącznie w sekcji kulinarnej, jako ciąg
 * dalszy „umiejętności gospodarowania”, a nie jako oś.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SZKOŁA ROLNICZA: Archiwum PAN, inwentarz zespołu „Szkoła Rolnicza
 *   w Czernichowie”: „jest najstarszą szkołą rolniczą w Polsce”.
 *   1846 — uchwała Krakowskiego Towarzystwa Gospodarczo-Rolniczego
 *   o potrzebie założenia; 20.06.1860 — UROCZYSTA INAUGURACJA;
 *   1880 zarząd Sejmu Krajowego we Lwowie; od 1884 uczy tu Franciszek
 *   Stefczyk; 1922 przejęcie przez MWRiOP; 1927 sztandar; 1949 koedukacja.
 *   Dziś: Zespół Szkół Rolnicze Centrum Kształcenia Ustawicznego
 *   im. Franciszka Stefczyka,
 * — PIERWSZA KASA STEFCZYKA: Spółkowa Kasa Oszczędności i Pożyczek,
 *   pierwsza na ziemiach polskich; działa od listopada 1889, oficjalnie
 *   zarejestrowana i otwarta 26.01.1890. Założyciele: Franciszek Stefczyk
 *   i ks. Edward Królikowski, miejscowy proboszcz. Stefczyk wyjeżdżał
 *   wcześniej do Münster w Westfalii poznać system Raiffeisena.
 *   Zasady: niskie udziały, JEDEN CZŁONEK — JEDEN GŁOS, niepodzielny zysk.
 *   Cel: obrona przed lichwą. Źródło: kasastefczyka.pl,
 * — HISTORIA: 1229 pierwsza wzmianka (Cirnechowo), część należy do
 *   benedyktynów tynieckich; 1286 Czernechow; 1367 KAZIMIERZ WIELKI
 *   nadaje prawo magdeburskie; XVI w. Jan Boner zakłada stawy rybne,
 *   siedziba klucza dóbr królewskich (10 wsi); XVII w. powódź zmusza do
 *   przeniesienia osady wyżej; 1655–1657 kościół spalony w potopie,
 *   odbudowany 1680, korpus trójnawowy 1791; 1815 gmina w Rzeczypospolitej
 *   Krakowskiej; 1817 kasata i rozdanie ziem chłopom; pocz. XX w. warsztaty
 *   tkackie, konsultantem STANISŁAW WYSPIAŃSKI; 1973 obecny kształt gminy,
 * — PRODUKTY TRADYCYJNE: PIĘĆ WPISÓW na krajową Listę Produktów
 *   Tradycyjnych, wszystkie 27.02.2018 — wędzony boczek, kiełbasa schabowa
 *   tradycyjna, kiełbasa wiejska, wędzona polędwica, tradycyjna szynka
 *   z Czernichowa. Rekomendacja Małopolskiej Rady latem 2017,
 * — KIEŁBASA LISIECKA: ChOG, rozp. (UE) 918/2010; obszar to granice
 *   administracyjne gmin Liszki I CZERNICHÓW. Dziennik Polski nazywa
 *   Czernichów „głównym zagłębiem masarskim”. Konsorcjum Producentów
 *   Kiełbasy Lisieckiej ma siedzibę w Nowej Wsi Szlacheckiej 77
 *   (kod pocztowy 32-060 Liszki, ale wieś należy do gminy Czernichów),
 * — PROM: przeprawa Czernichów (przysiółek Kępa) – Brzeźnica (Pasieka),
 *   zarządca Zarząd Dróg Powiatu Krakowskiego, godziny 5:00–21:00, Wisła
 *   w tym miejscu ok. 40 m szerokości. Jeden z dwóch promów między
 *   stopniami wodnymi w Łączanach i w Tyńcu; drugi to Jeziorzany
 *   (gmina Liszki). Utrzymanie ok. 470 tys. zł rocznie,
 * — REZERWAT KAJASÓWKA: utworzony 1962, ok. 12 ha, w sołectwie Przeginia
 *   Duchowna, zrąb tektoniczny z wapieni jurajskich, ok. 2,5 km długości,
 * — GOSPODARKA: 2 023 podmioty REGON (2024); firmy wskazane przez gminę:
 *   Konsorcjum Producentów Kiełbasy Lisieckiej, Marabut, AQForm Lighting,
 *   Star-Kop; planowane strefy aktywności w Czernichowie i Rybnej,
 * — DEMOGRAFIA: +20,9% od 2002; średni wiek 40,0; przyrost naturalny
 *   minus 40; lesistość 17,2%,
 * — DOJAZD: 20 km na zachód od Krakowa, na LEWYM brzegu Wisły; autobusy
 *   MPK 249, 259, 229, 239, 209, 269 (Czernichów Rynek – Salwator);
 *   KOLEI W GMINIE BRAK,
 * — WSPÓŁRZĘDNE (UG, ul. Gminna 1): 49,98907 / 19,67788.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ROKU 1857 jako daty założenia szkoły. Podaje go strona gminy, ale
 *   Archiwum PAN i LGD wskazują 1860 jako rok rozpoczęcia działalności
 *   (decyzja 1846). Użyta data 20.06.1860,
 * — ZAPEWNIENIA, ŻE PROM KURSUJE CODZIENNIE BEZ ZASTRZEŻEŃ. Jest
 *   regularnie wstrzymywany przy wysokim stanie wody i zlodzeniu —
 *   ostatnio od 24.02.2026. Zawsze z zastrzeżeniem,
 * — CENY ZA PRZEPRAWĘ. Źródła są sprzeczne (2 zł vs bezpłatnie dla
 *   pieszych). Nie podana,
 * — NAZW WINNIC. Gmina je wymienia, ale bez nazw. Niepotwierdzone,
 * — NAZW CERTYFIKOWANYCH PRODUCENTÓW KIEŁBASY. Brak publicznego,
 *   aktualnego wykazu; status bywa zawieszany,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — CZERNICHÓW ŚLĄSKI (powiat żywiecki). Zawsze sprawdzać TERYT 1206012,
 * — PIĘĆ WĘDLIN Z CZERNICHOWA to KRAJOWA Lista Produktów Tradycyjnych,
 *   a NIE unijna ochrona. Nie mylić z ChOG kiełbasy lisieckiej,
 * — ChOG TO NIE ChNP. Kiełbasa lisiecka ma Chronione OZNACZENIE
 *   GEOGRAFICZNE, mimo że krakow.pl pisze inaczej,
 * — NOWA WIEŚ SZLACHECKA ma kod pocztowy 32-060 Liszki, ale NALEŻY DO
 *   GMINY CZERNICHÓW. Nie wnioskować o przynależności z kodu pocztowego,
 * — PRZEGINIA DUCHOWNA i PRZEGINIA NARODOWA to sołectwa TEJ gminy;
 *   PRZEGINIA bez przydomka to zupełnie inna wieś, w gminie
 *   Jerzmanowice-Przeginia,
 * — TYNIEC LEŻY W KRAKOWIE, nie w gminie wiejskiej,
 * — TARGEO podaje dla tej gminy błędne współrzędne (50,128 / 19,862 —
 *   punkt poza gminą) i stary adres urzędu „Czernichów 2”.
 */

export const CZERNICHOW: CityContent = {
  slug: "czernichow",
  h1: "Thermomix Czernichów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Czernichów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Czernichów pod Krakowem: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czernichów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Czernichów pod Krakowem. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Czernichowa, Rybnej, Rusocic, Wołowic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dwanaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czernichowie – jak wygląda prezentacja?",
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
      heading: "Wieś, w której nauczyciel wymyślił polską spółdzielczość",
      paragraphs: [
        "Dwudziestego czerwca tysiąc osiemset sześćdziesiątego roku otwarto w Czernichowie szkołę rolniczą. Decyzja o jej powołaniu zapadła czternaście lat wcześniej, w tysiąc osiemset czterdziestym szóstym, na posiedzeniu Krakowskiego Towarzystwa Gospodarczo-Rolniczego. Szkoła działa do dziś i jest — cytując inwentarz Archiwum Polskiej Akademii Nauk — najstarszą szkołą rolniczą w Polsce.",
        "To już byłoby dużo jak na jedną wieś. Ale najciekawsze jest to, co wydarzyło się dwadzieścia dziewięć lat później.",
        "Od tysiąc osiemset osiemdziesiątego czwartego roku uczył w tej szkole Franciszek Stefczyk. Widział z bliska, jak wygląda wieś zadłużona u lichwiarzy, i pojechał do Münster w Westfalii, żeby zobaczyć, jak działają tamtejsze kasy Raiffeisena. Po powrocie, razem z miejscowym proboszczem księdzem Edwardem Królikowskim, założył w Czernichowie Spółkową Kasę Oszczędności i Pożyczek. Zaczęła funkcjonować w listopadzie tysiąc osiemset osiemdziesiątego dziewiątego roku, a oficjalnie zarejestrowano ją dwudziestego szóstego stycznia roku następnego.",
        "Była pierwsza na ziemiach polskich. Zasady były proste i celowo niemiłe dla bogatych: niskie udziały, żeby stać było każdego, niepodzielny zysk, żeby nikt się nie wzbogacił na sąsiadach, i jeden członek — jeden głos, niezależnie od tego, ile kto wniósł.",
        "Nauczyciel najstarszej polskiej szkoły rolniczej zakłada w tej samej wsi pierwszą polską kasę spółdzielczą. Dwie instytucje, od których zaczęły się dwie osobne dziedziny, jedna obok drugiej, na jednym rynku.",
        "Czernichów nie był zresztą przypadkową wsią. Prawo magdeburskie nadał mu Kazimierz Wielki w tysiąc trzysta sześćdziesiątym siódmym roku, w szesnastym wieku Jan Boner założył tu stawy rybne, a sama miejscowość była siedzibą klucza dóbr królewskich obejmującego dziesięć wsi. Dlatego ma rynek — i dlatego przy tym rynku stanęła potem szkoła.",
        "Ciąg dalszy tej historii da się dziś zjeść. Pięć czernichowskich wędlin trafiło dwudziestego siódmego lutego dwa tysiące osiemnastego roku na ministerialną Listę Produktów Tradycyjnych, a większość zakładów wytwarzających kiełbasę lisiecką — chronioną w Unii, w obszarze obejmującym tę gminę i sąsiednie Liszki — działa właśnie tutaj. Umiejętność gospodarowania nie skończyła się w dziewiętnastym wieku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Czernichów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich dwanaście, a gmina rozciąga się wzdłuż Wisły na osiemdziesięciu czterech kilometrach kwadratowych. Z Kamienia do Rusocic jedzie się zauważalnie dłużej niż z Czernichowa do Wołowic, ale koszt jest ten sam, czyli żaden.",
        "Jeśli mieszkasz po drugiej stronie Wisły i myślisz o przeprawie promowej, lepiej uprzedź. Prom bywa wstrzymywany przy wysokim stanie wody, więc w takich przypadkach wolę od razu zaplanować trasę mostem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Czernichów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Policzyć, zanim się kupi",
      paragraphs: [
        "Kasa Stefczyka powstała z bardzo praktycznego powodu: żeby ludzie mogli policzyć, ile naprawdę kosztuje pożyczka, zanim ją wezmą. To jest w gruncie rzeczy ta sama rozmowa, którą prowadzę przy każdej prezentacji, tylko o mniejszej kwocie.",
        "Dlatego kalkulator raty stoi na tej stronie, a nie w mojej teczce. Możesz go przeliczyć wieczorem, bez nikogo nad głową, zmienić okres spłaty i wkład własny i zobaczyć, jak zmienia się miesięczna kwota. Na spotkaniu wracamy do tych samych liczb, tylko z dokładnymi danymi.",
        "Druga rzecz, którą warto policzyć, dotyczy nie ceny, lecz jedzenia. Domowe gotowanie z surowców jest tańsze od gotowego, ale tylko wtedy, gdy nic się nie marnuje — a marnuje się zwykle wtedy, gdy nie ma pomysłu, co zrobić z resztą.",
        "Tu najbardziej pomagają dwie rzeczy. Pierwsza to gotowanie większych porcji: zupa czy danie jednogarnkowe na kilka dni, zrobione raz, bez stania przy garnku, bo urządzenie samo się wyłącza. Druga to przerabianie tego, co zostało — z warzyw robi się krem, z resztek pieczywa bułka tarta, z owoców, które zaczynają się psuć, mus do zamrożenia.",
        "Trzecia rzecz jest sezonowa i dotyczy jesieni: przetwory. Konfitura, powidła czy sok gotują się tu bez pilnowania i bez mieszania, co przy większych ilościach jest różnicą między jednym popołudniem a całym dniem w kuchni.",
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
    heading: "Czernichów i gotowanie — pięć wędlin z rejestru i szkoła rolnicza",
    paragraphs: [
      "Ta gmina ma na ministerialnej Liście Produktów Tradycyjnych pięć własnych pozycji, wszystkie wpisane dwudziestego siódmego lutego dwa tysiące osiemnastego roku: wędzony boczek, kiełbasę schabową tradycyjną, kiełbasę wiejską, wędzoną polędwicę i tradycyjną szynkę z Czernichowa. To krajowy rejestr, nie unijny — daje potwierdzenie co najmniej dwudziestopięcioletniej tradycji wytwarzania, ale nie chroni prawnie samej nazwy.",
      "Osobno jest kiełbasa lisiecka, która ma unijne Chronione Oznaczenie Geograficzne od dwa tysiące dziesiątego roku. Nosi nazwę od sąsiednich Liszek, ale obszar chroniony obejmuje dokładnie dwie gminy — Liszki i Czernichów — a Dziennik Polski określa właśnie Czernichów mianem głównego zagłębia masarskiego tej okolicy. Siedziba Konsorcjum Producentów mieści się w Nowej Wsi Szlacheckiej, która należy do tej gminy, choć ma kod pocztowy Liszek.",
      "Tradycja jest tu zresztą starsza niż rejestry. Do końca siedemnastego wieku przez tę okolicę biegł szlak wołowy, a w tysiąc osiemset dziewięćdziesiątym czwartym roku w Liszkach i Czernichowie razem pracowało trzydziestu czterech z osiemdziesięciu siedmiu rzeźników całego powiatu krakowskiego.",
      "Do tego dochodzi szesnastowieczna hodowla ryb w stawach Jana Bonera, kilka winnic działających w gminie i szkoła rolnicza, która od stu sześćdziesięciu lat uczy tu, jak się gospodaruje na roli.",
      "Dla urządzenia najsensowniejsze są tu rzeczy, które robi się obok wędliny: pasty, sosy, chrzan, ćwikła, zupy, przetwory z ogrodu i domowy nabiał. Czego nie zrobi, mówię wprost: nie uwędzi szynki i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Czernichów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwunastu, bez żadnej dopłaty za odległość. Gmina liczy ponad piętnaście tysięcy mieszkańców na około osiemdziesięciu czterech kilometrach kwadratowych i leży dwadzieścia kilometrów na zachód od Krakowa, na lewym brzegu Wisły.",
    "Sołectwa to: Czernichów, Czułówek, Dąbrowa Szlachecka, Kamień, Kłokoczyn, Nowa Wieś Szlachecka, Przeginia Duchowna, Przeginia Narodowa, Rusocice, Rybna, Wołowice i Zagacie.",
    "Dwa rozróżnienia, bo obydwa bywają mylące. Po pierwsze: Przeginia Duchowna i Przeginia Narodowa należą do tej gminy, a sama Przeginia bez przydomka to zupełnie inna wieś, w gminie Jerzmanowice-Przeginia. Po drugie: Nowa Wieś Szlachecka ma kod pocztowy Liszek, ale jest sołectwem Czernichowa.",
    "W Przegini Duchownej leży rezerwat Kajasówka — zrąb tektoniczny z wapieni jurajskich, długi na około dwa i pół kilometra, chroniony od tysiąc dziewięćset sześćdziesiątego drugiego roku.",
    "Dojazd: kolei w gminie nie ma. Kursują natomiast krakowskie autobusy podmiejskie z Salwatora do Czernichowa i okolicznych wsi. Przez Wisłę działa przeprawa promowa do Brzeźnicy, czynna od piątej do dwudziestej pierwszej — o ile pozwala na to stan wody, bo przy wysokim poziomie albo zlodzeniu bywa wstrzymywana.",
  ],
  districts: [
    "Czernichów",
    "Rybna",
    "Rusocice",
    "Wołowice",
    "Kamień",
    "Nowa Wieś Szlachecka",
    "Przeginia Duchowna",
    "Przeginia Narodowa",
    "Dąbrowa Szlachecka",
    "Kłokoczyn",
    "Czułówek",
    "Zagacie",
  ],

  nearbyHeading: "Liszki, Alwernia i Skawina też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Liszkami, Krzeszowicami, Skawiną, Alwernią i — przez Wisłę — z Brzeźnicą w powiecie wadowickim. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: to Czernichów w powiecie krakowskim, a nie Czernichów nad Jeziorem Żywieckim w województwie śląskim. To dwie zupełnie różne gminy.",
  ],
  nearbyTowns: [
    "Liszki",
    "Krzeszowice",
    "Skawina",
    "Alwernia",
    "Brzeźnica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Czernichów", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Rusocicach albo w Kamieniu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwanaście sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Czernichów"),
    {
      question: "Czy to ten Czernichów pod Krakowem, czy ten nad Jeziorem Żywieckim?",
      answer:
        "Ten pod Krakowem, w powiecie krakowskim, dwadzieścia kilometrów na zachód od miasta, na lewym brzegu Wisły. Czernichów w powiecie żywieckim to inna gmina i innego województwa — obsługuję wyłącznie Małopolskę, a więc ten pierwszy.",
    },
  ],

  geo: { lat: 49.98907, lng: 19.67788 },
};
