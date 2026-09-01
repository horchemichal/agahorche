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
 * SZCZUCIN — GMINA MIEJSKO-WIEJSKA w powiecie dąbrowskim.
 * 12 392 mieszkańców (31.12.2024) — 20,9% ludności powiatu.
 * 119,5 km² — 22,5% powierzchni powiatu. Miasto 4 069.
 * SPADEK LUDNOŚCI 8,0% (2002–2024). REGON: 1 042 podmioty.
 *
 * OŚ STRONY: MIASTO, KTÓRE PRZECHOWUJE HISTORIĘ POLSKICH DRÓG.
 * Muzeum Drogownictwa — jedyne takie w Polsce. Oś zupełnie nowa
 * w serwisie.
 *
 * ⚠️⚠️ AZBEST: TEMAT ZDROWOTNY, NIE CIEKAWOSTKA. Wchodzi jako
 * OSOBNA, RZECZOWA SEKCJA — bez sensacji, bez niepotwierdzonych
 * liczb, bez przemilczania. Zasady niżej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ MUZEUM DROGOWNICTWA: zorganizowane w 1982 R. w Rejonie Dróg
 *   Publicznych w Tarnowie, przeniesione do Szczucina. Prowadzi je
 *   ZESPÓŁ HISTORII DROGOWNICTWA GDDKiA (powołany 2005).
 *   Zbiory: dokumentacje, mapy i projekty dróg i mostów, archiwum,
 *   biblioteka, OK. 4,8 TYS. SKATALOGOWANYCH EKSPONATÓW
 *   i 62 ZABYTKOWE MASZYNY, teren prawie 2 HA.
 *   GDDKiA: „jedyna tego typu jednostka w Polsce i nieliczna
 *   w Europie”. Współpraca z Nord-Balt Road Museums.
 *   Cykliczne NOCNE ZWIEDZANIE MUZEUM DROGOWNICTWA (co najmniej
 *   VIII edycji),
 * — ⚠️⚠️ AZBEST — TYLKO POTWIERDZONE FAKTY:
 *   ZAKŁAD WYROBÓW AZBESTOWO-CEMENTOWYCH URUCHOMIONY W 1959 R.
 *   (źródło: szczucin.pl). Produkował płyty dachowe (eternit)
 *   i rury. Działał ok. 40 lat, ZAMKNIĘTY W LATACH 90.
 *   W latach 70. duże zakłady gminy zatrudniały ok. 45% pracujących
 *   powiatu dąbrowskiego.
 *   Odpady azbestowe wykorzystywano do utwardzania dróg lokalnych,
 *   boisk i podwórek, później pokrywanych asfaltem.
 *   PROGRAM AMIANTUS (Instytut Medycyny Pracy im. J. Nofera
 *   w Łodzi, od 2000): ⚠️⚠️ Z ZAKŁADU W SZCZUCINIE PRZEBADANO
 *   708 OSÓB. TO JEDYNA LICZBA SZCZUCIŃSKA.
 *   ⚠️⚠️ DANE 8 379 osób / 35 323 badania / 124 raki płuca /
 *   77 międzybłoniaków SĄ OGÓLNOPOLSKIE — NIE WOLNO ICH PRZYPISAĆ
 *   SZCZUCINOWI. NIE MIESZAĆ.
 *   ⚠️⚠️ POWTARZANA W MEDIACH LICZBA „ryzyko międzybłoniaka
 *   60× wyższe niż gdzie indziej” POJAWIA SIĘ BEZ WSKAZANIA
 *   PUBLIKACJI ŹRÓDŁOWEJ. NIE CYTOWAĆ JAKO FAKTU.
 *   HAŁDA: w 2016 zrezygnowano z betonowego sarkofagu na rzecz
 *   przykrycia warstwą ziemi. W 2025 hałda ok. 400 m od wałów Wisły
 *   wciąż wskazywana jako sprawa nierozwiązana.
 *   ⭐ SZWAJCARSKO-POLSKI PROGRAM „MAŁOPOLSKA WOLNA OD AZBESTU”
 *   — GMINA SZCZUCIN BYŁA LIDEREM PROJEKTU: 69 GMIN MAŁOPOLSKI,
 *   PRAWIE 35 000 T azbestu w 4 lata, ok. 24 mln zł.
 *   TO WAŻNE: gmina nie tylko ma problem, ale przewodziła jego
 *   rozwiązywaniu w skali województwa,
 * — HISTORIA: pierwsza wzmianka 1326; nazwa prawdopodobnie
 *   od właściciela SZCZUKI (XIV w.). Historycznie PORT RZECZNY
 *   I PRZEPRAWA HANDLOWA NA WIŚLE.
 *   PRAWA MIEJSKIE 1780 → UTRACONE 1934 (spadek poniżej 3 tys.
 *   mieszkańców) → ODZYSKANE 1 STYCZNIA 2009 R.
 *   1939 — mord ok. 70 jeńców i cywilów. Barokowy kościół
 *   św. Marii Magdaleny przy Rynku,
 * — PRACODAWCY POTWIERDZENI (strona gminy): KRAK-OLD ZAKŁAD
 *   REZYSTORÓW S.A. (Zakład Rezystorów uruchomiony 1971, działa
 *   do dziś), Tankpol sp.j., Katpol sp.j., Complex-Bud sp. z o.o.,
 *   Rol-Mech Szczucin,
 * — 27 MIEJSCOWOŚCI (⚠️ to lista MIEJSCOWOŚCI, nie sołectw —
 *   oficjalnego wykazu sołectw NIE POTWIERDZONO): Borki, Brzezówka,
 *   Czajków, Dąbrowica, Delastowice, Kąty, Kępa, Łabuzówka,
 *   Laskówka Delastowska, Lechówka, Łęka Szczucińska, Lubasz,
 *   Maniów, Podlesie, Podradwanie, Radwan, Rynek, Skrzynka, Słupiec,
 *   Suchy Grunt, Świdrówka, Wieżyce, Wola Szczucińska, Zabrnie,
 *   Zakępie, Zalesie, Załuże,
 * — DK73 — MOST STALOWY NA WIŚLE Z LAT 50., ok. 400 m, ostatni
 *   gruntowny remont 2012–2013, ok. 6 TYS. POJAZDÓW NA DOBĘ,
 *   wąskie gardło; planowana obwodnica z nowym mostem. DW982.
 *   STACJA KOŃCOWA LINII 115 — ⚠️ BEZ RUCHU PASAŻERSKIEGO
 *   (zawieszony 2000, towarowy 2006).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (11,4%, 7 161,93 zł),
 * — LICZBY 1 800 T azbestu usuniętych z samej gminy — pojedyncze
 *   źródło, niepotwierdzone.
 *
 * PUŁAPKI:
 * — PRAWA MIEJSKIE: 1780 → 1934 → 2009. Nie pisać „miasto
 *   od XVIII wieku” bez zastrzeżenia.
 */

export const SZCZUCIN: CityContent = {
  slug: "szczucin",
  h1: "Thermomix Szczucin – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Szczucin — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Szczucin: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do miasta i wszystkich wsi bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczucin — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Szczucin. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Szczucina i wszystkich miejscowości gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczucinie – jak wygląda prezentacja?",
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
      heading: "Jedyne muzeum drogownictwa w Polsce",
      paragraphs: [
        "W Szczucinie działa muzeum, jakiego nie ma nigdzie indziej w kraju. Zbiory zaczęto gromadzić w tysiąc dziewięćset osiemdziesiątym drugim roku, a dziś prowadzi je Zespół Historii Drogownictwa Generalnej Dyrekcji Dróg Krajowych i Autostrad.",
        "Na prawie dwóch hektarach zebrano około czterech tysięcy ośmiuset skatalogowanych eksponatów i sześćdziesiąt dwie zabytkowe maszyny drogowe — walce, rozściełacze, sprzęt, którym budowano polskie drogi przez ostatnie stulecie. Do tego archiwum, biblioteka oraz dokumentacje, mapy i projekty dróg i mostów. Sama Dyrekcja pisze o nim, że jest jedyną tego typu jednostką w Polsce i jedną z nielicznych w Europie.",
        "Kilka razy w roku organizuje się tu nocne zwiedzanie, które doczekało się już co najmniej ósmej edycji. To rzadki przypadek muzeum technicznego, które ma wierną publiczność w małym mieście.",
        "Szczucin ma zresztą do dróg i przepraw stosunek szczególny, bo od tego się zaczął. Pierwsza wzmianka pochodzi z tysiąc trzysta dwudziestego szóstego roku, a przez wieki było to miejsce portu rzecznego i przeprawy handlowej przez Wisłę. Do dziś przez miasto biegnie droga krajowa, a most stalowy z lat pięćdziesiątych, długi na jakieś czterysta metrów, przenosi około sześciu tysięcy pojazdów na dobę i jest wąskim gardłem całej trasy. Planowana jest obwodnica z nową przeprawą.",
        "Prawa miejskie to tu osobna historia z trzema datami. Szczucin dostał je w tysiąc siedemset osiemdziesiątym, stracił w tysiąc dziewięćset trzydziestym czwartym, kiedy liczba mieszkańców spadła poniżej trzech tysięcy, i odzyskał pierwszego stycznia dwa tysiące dziewiątego roku — po siedemdziesięciu pięciu latach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Szczucin?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość. Gmina ma dwadzieścia siedem wsi na stu dwudziestu kilometrach kwadratowych i rozciąga się wzdłuż Wisły — jazda do Maniowa to co innego niż do Zabrnia. Na cenę to nie wpływa.",
        "Jeśli pracujesz na zmiany, powiedz to od razu. Umawiam się wieczorami i w weekendy; wolę wiedzieć wcześniej, kiedy naprawdę macie w domu dwie spokojne godziny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczucinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina po przemyśle i po azbeście",
      paragraphs: [
        "O jednej rzeczy trzeba w Szczucinie powiedzieć wprost, bo mieszkańcy i tak ją znają lepiej ode mnie. W tysiąc dziewięćset pięćdziesiątym dziewiątym roku uruchomiono tu zakład wyrobów azbestowo-cementowych, produkujący płyty dachowe i rury. Działał czterdzieści lat i zamknięto go w latach dziewięćdziesiątych. W latach siedemdziesiątych tutejsze zakłady dawały pracę mniej więcej połowie pracujących całego powiatu.",
        "Skutki są znane i badane. Odpady wykorzystywano do utwardzania dróg, boisk i podwórek, a eternit został na wielu dachach. Instytut Medycyny Pracy w Łodzi prowadzi od dwutysięcznego roku program badań byłych pracowników zakładów azbestowych; ze szczucińskiego zakładu przebadano siedemset osiem osób. Podaję tę jedną liczbę, bo pozostałe, które krążą w mediach, dotyczą całego kraju albo nie mają wskazanego źródła — a przy temacie zdrowia nie chcę zgadywać.",
        "Warto natomiast wiedzieć o czymś, o czym pisze się rzadziej. To właśnie gmina Szczucin była liderem szwajcarsko-polskiego programu „Małopolska wolna od azbestu”, w którym w cztery lata usunięto z sześćdziesięciu dziewięciu gmin województwa prawie trzydzieści pięć tysięcy ton azbestu. Gmina, która ma ten problem najmocniej, poprowadziła jego rozwiązywanie dla całej Małopolski.",
        "Reszta życia toczy się tu normalnie i to też trzeba powiedzieć. Działa zakład rezystorów uruchomiony jeszcze w tysiąc dziewięćset siedemdziesiątym pierwszym, kilka firm budowlanych i usługowych, a przez miasto przechodzi ruch tranzytowy. Praca bywa zmianowa, dzień kończy się o różnych porach.",
        "W kuchni oznacza to jedno bardzo praktyczne rozwiązanie: danie jednogarnkowe, które wstawia się rano i wychodzi. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy — nie stygnie i nie przypala się. Do tego gotowanie z zapasem: podwójna porcja zupy, sos na kilka dni, pasty do kanapek, robione seriami w jednym naczyniu.",
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
    heading: "Szczucin i gotowanie — kuchnia nadwiślańska",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Sąsiednie gminy Powiśla Dąbrowskiego mają takie wpisy, ale nie będę ich przypisywać Szczucinowi.",
      "To, co jest tu pewne, wynika z położenia. Gmina leży nad Wisłą, na terenie płaskim i rolniczym, a przez wieki była miejscem przeprawy i portu rzecznego. To kuchnia nizinna, a nie górska: zboża, ziemniaki, kapusta, fasola, warzywa korzeniowe, mleko i to, co daje własne gospodarstwo.",
      "Rzeka dodaje do tego jedną rzecz, o której warto pamiętać — ryby. W gospodarstwach nadwiślańskich karp, szczupak i lin bywały na stole częściej niż gdzie indziej, zwłaszcza przy okazjach.",
      "Ryba jest przy tym najbardziej wymagającym produktem w domowej kuchni: łatwo ją przesuszyć i łatwo rozgotować. Gotowanie na parze w kontrolowanej temperaturze rozwiązuje dokładnie ten problem, bo temperatura jest trzymana, a nie zgadywana.",
      "Poza tym urządzenie daje najwięcej przy rzeczach powtarzalnych: farszach, pastach, ciastach, zupach na zapas i przetworach z ogrodu. Czego nie zrobi, mówię wprost: nie oczyści ryby, nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Szczucin dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich wsi gminy, bez żadnej dopłaty za odległość. Gmina liczy ponad dwanaście tysięcy mieszkańców na stu dwudziestu kilometrach kwadratowych — to blisko dwadzieścia jeden procent ludności i dwadzieścia dwa procent powierzchni całego powiatu dąbrowskiego. W samym mieście mieszka nieco ponad cztery tysiące osób.",
    "Miejscowości jest dwadzieścia siedem, między innymi: Borki, Brzezówka, Czajków, Dąbrowica, Delastowice, Kąty, Kępa, Łabuzówka, Laskówka Delastowska, Łęka Szczucińska, Lubasz, Maniów, Podlesie, Radwan, Skrzynka, Słupiec, Wola Szczucińska, Zabrnie, Zakępie, Zalesie i Załuże.",
    "Najciekawszym miejscem gminy jest Muzeum Drogownictwa na terenie o powierzchni prawie dwóch hektarów: około czterech tysięcy ośmiuset eksponatów i sześćdziesiąt dwie zabytkowe maszyny. Kilka razy w roku odbywa się tam nocne zwiedzanie. W samym mieście, przy Rynku, stoi barokowy kościół świętej Marii Magdaleny.",
    "Dojazd: przez Szczucin biegnie droga krajowa z Warszawy do Jasła, a most stalowy na Wiśle z lat pięćdziesiątych ma około czterystu metrów i przenosi około sześciu tysięcy pojazdów na dobę. Planowana jest obwodnica z nową przeprawą. Szczucin jest też stacją końcową linii kolejowej z Tarnowa, otwartej w tysiąc dziewięćset szóstym roku — ruch pasażerski zawieszono jednak w dwutysięcznym, a towarowy w dwa tysiące szóstym. Rewitalizacja tej linii jest zapowiedziana, ale to na razie plan.",
  ],
  districts: [
    "Szczucin — miasto",
    "Maniów i Radwan",
    "Delastowice i Laskówka Delastowska",
    "Zabrnie i Zakępie",
    "Słupiec i Skrzynka",
    "Borki, Brzezówka, Czajków",
    "Łęka Szczucińska i Wola Szczucińska",
    "Lubasz, Podlesie, Zalesie",
  ],

  nearbyHeading: "Dąbrowa Tarnowska, Bolesław i Mędrzechów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Dąbrową Tarnowską, Bolesławiem, Mędrzechowem i Radgoszczą, a przez Wisłę sąsiaduje z województwem świętokrzyskim. Dojeżdżam do wszystkich gmin powiatu bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz nazwę miejscowości. Resztę zaplanuję sama.",
  ],
  nearbyTowns: [
    "Dąbrowa Tarnowska",
    "Bolesław",
    "Mędrzechów",
    "Radgoszcz",
    "Olesno",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Szczucin", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "Mieszkam w Maniowie albo Zabrniu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie miejscowości gminy traktuję dokładnie tak samo jak samo miasto. Przy umawianiu podaj nazwę wsi — gmina jest rozciągnięta wzdłuż Wisły i chodzi wyłącznie o zaplanowanie trasy.",
    },
    ...faqWspolne("w Szczucinie"),
    {
      question: "Często robimy rybę. Ten sprzęt się do tego nada?",
      answer:
        "Nada się i to lepiej, niż mogłoby się wydawać. Ryba najczęściej wychodzi źle dlatego, że się ją przesuszy — a gotowanie na parze w kontrolowanej temperaturze rozwiązuje dokładnie ten problem, bo temperatura jest trzymana, a nie zgadywana. Do tego sosy, farsze i pasty rybne. Ryby za Was nie oczyści, ale całą resztę bierze na siebie.",
    },
  ],

  geo: { lat: 50.3093, lng: 21.0765 },
};
