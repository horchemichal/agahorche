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
 * LIPNICA MUROWANA — miejscowość, która była miastem i chce nim znów być.
 *
 * To jedyna gmina w całym zestawie z twardym, sprawdzalnym dziedzictwem
 * światowej rangi: kościół św. Leonarda wchodzi w skład wpisu UNESCO
 * „Drewniane kościoły południowej Małopolski” z 2003 r. Do tego rynek
 * z lokacji Władysława Łokietka z 1326 r., konkurs palm wielkanocnych
 * organizowany nieprzerwanie od 1958 r. i DWA produkty na ministerialnej
 * Liście Produktów Tradycyjnych — jedyne potwierdzone w tym pierścieniu.
 *
 * Oś tekstu: rzeczy robione ręcznie, według przepisu, raz do roku.
 * Palma, chleb na zakwasie, napar z lipy. To gmina, w której argument
 * „urządzenie nie zastąpi umiejętności” jest nie tyle uczciwy, co
 * konieczny — inaczej cały tekst zabrzmi fałszywie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 5 sołectw: Lipnica Murowana, Lipnica Dolna, Lipnica Górna, Rajbrot,
 *   Borówna (lipnicamurowana.pl/o-gminie; harmonogram zebrań wiejskich),
 * — gmina leży w Wiśnicko-Lipnickim Parku Krajobrazowym, głównie na
 *   Pogórzu Wiśnickim, z fragmentem Beskidu Wyspowego w południowym
 *   Rajbrocie; wysokości ok. 300–500 m n.p.m. (lipnicamurowana.pl),
 * — główna rzeka: Uszwica; użytki rolne ok. 52,5%, lasy ok. 38,7%
 *   (lipnicamurowana.pl/o-gminie),
 * — do Bochni ok. 15–16 km; główna oś to droga wojewódzka nr 966
 *   (Wieliczka – Gdów – Łapanów – Muchówka – Lipnica Murowana –
 *   Lipnica Dolna – Tymowa), conadrogach.pl,
 * — kościół św. Leonarda wchodzi w skład wpisu UNESCO „Drewniane
 *   kościoły południowej Małopolski” z 2003 r. (whc.unesco.org/en/list/1053);
 *   UNESCO wyróżnia go jako jedyny bezwieżowy spośród sześciu obiektów
 *   wpisu; w rejestrze zabytków figuruje pod miejscowością Lipnica Dolna
 *   (WUOZ Kraków, A-154),
 * — zwiedzanie kościoła św. Leonarda wyłącznie z przewodnikiem, po
 *   wcześniejszym kontakcie z parafią (lipniczanin.pl; visitmalopolska.pl),
 * — lokacja miasta: 12 marca 1326 r., przywilej Władysława Łokietka;
 *   prawa miejskie utracone 1 lipca 1934 r. (lipnicamurowana.pl; rdn.pl),
 * — w 2026 r. obchodzone jest 700-lecie lokacji (lipnicamurowana.pl),
 * — zespół staromiejski wpisany do rejestru zabytków (A-82, 1976),
 *   datowany na 1326 r.; osobno w rejestrze Dom Starościński przy Rynku 3
 *   oraz domy przy Rynku 22 i nr 30 (WUOZ; zabytek.pl),
 * — Konkurs Lipnickich Palm i Rękodzieła Artystycznego im. Józefa
 *   Piotrowskiego organizowany od 1958 r., rozstrzygany w Niedzielę
 *   Palmową na lipnickim rynku (kulturalipnica.pl); rekordowa palma
 *   mierzyła 37,78 m (2019),
 * — dwa produkty na ministerialnej Liście Produktów Tradycyjnych:
 *   „lipnicka lipina” (napar z kwiatów lipy, wpis z 6 czerwca 2022)
 *   oraz „razowiec lipnicki” (chleb żytnio-pszenny na zakwasie,
 *   wypiekany w Lipnicy Górnej) — gov.pl/web/rolnictwo,
 * — zespół kościoła par. Narodzenia NMP w Rajbrocie w rejestrze zabytków
 *   (A-26, 1968), wraz z murem, kaplicami, dzwonnicą i drzewostanem,
 * — liczba ludności praktycznie bez zmian od 2002 r. (wzrost ok. 1,3%),
 *   gęstość ok. 92 os./km² (polskawliczbach.pl, dane GUS).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zdania, że lipnickie palmy są na krajowej liście niematerialnego
 *   dziedzictwa kulturowego. NIE POTWIERDZONE — w wykazie NID są palmy
 *   KURPIOWSKIE i żywieckie kwiaty bibułkowe. To najczęstszy błąd
 *   w tekstach o Lipnicy,
 * — nazwania Lipnicy Murowanej miastem. Prawa miejskie utracono w 1934 r.;
 *   w 2026 r. trwa oddolna inicjatywa ich odzyskania, ale bez złożonego
 *   wniosku i bez decyzji. Formalnie to wieś,
 * — godzin otwarcia i cennika kościoła św. Leonarda — NIE ISTNIEJĄ jako
 *   dane publikowane. Zwiedzanie umawia się z parafią,
 * — wymiarów rynku i liczby drewnianych domów — brak źródła,
 * — dat 1141 i 1203 przy kościele św. Leonarda. Tradycja lokalna je
 *   podaje, ale są sporne; datowanie naukowe wskazuje przełom XV i XVI w.
 *
 * PUŁAPKA NR 1: Lipnica Dolna i Lipnica Górna to SOŁECTWA wewnątrz
 * gminy Lipnica Murowana, a nie osobne gminy. Nie mylić także
 * z Lipnicą Wielką na Orawie ani z gminą Lipnica na Pomorzu.
 *
 * PUŁAPKA NR 2: kościół św. Leonarda w rejestrze zabytków przypisany
 * jest do LIPNICY DOLNEJ, choć powszechnie mówi się „w Lipnicy
 * Murowanej”, a VisitMałopolska podaje adres w Lipnicy Murowanej.
 */
export const LIPNICA_MUROWANA: CityContent = {
  slug: "lipnica-murowana",
  h1: "Thermomix Lipnica Murowana – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Lipnica Murowana — prezentacja",
  seoDescription:
    "Thermomix w gminie Lipnica Murowana: bezpłatna prezentacja TM7 u Ciebie w kuchni — Rajbrot, Borówna, Lipnica Dolna i Górna. Tel. 517 185 691.",
  ogTitle: "Thermomix Lipnica Murowana — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Lipnica Murowana. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Lipnica Murowana przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich pięciu sołectw, łącznie z Rajbrotem i Borówną.",

  highlights: highlightyStandardowe("cała gmina Lipnica Murowana, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lipnicy Murowanej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu przy rynku, jak w Rajbrocie pod lasem.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Miejscowość, w której rzeczy robi się ręcznie i raz do roku",
      paragraphs: [
        "Lipnica Murowana ma rynek z przywileju lokacyjnego Władysława Łokietka z 1326 roku — w tym roku obchodzi się tu siedemsetlecie. Prawa miejskie straciła w 1934 roku i formalnie jest dziś wsią, choć układ przestrzenny został miejski i widać to od pierwszego wjazdu. Na skraju, w Lipnicy Dolnej, stoi drewniany kościół świętego Leonarda, który wchodzi w skład wpisu UNESCO obejmującego drewniane kościoły południowej Małopolski.",
        "Piszę o tym nie dlatego, że sprzedaję wycieczki, tylko dlatego, że to najlepiej tłumaczy, z jaką gminą mamy do czynienia. To miejsce, w którym rzeczy robi się ręcznie, według przepisu i w swoim czasie. Najlepiej widać to w Niedzielę Palmową: konkurs lipnickich palm odbywa się nieprzerwanie od 1958 roku, a najwyższa palma w historii mierzyła prawie trzydzieści osiem metrów. Nikt jej nie zrobił na skróty.",
        "Ta sama logika dotyczy jedzenia. Z tej gminy pochodzą dwa produkty wpisane na ministerialną Listę Produktów Tradycyjnych — napar z kwiatów lipy i razowy chleb na zakwasie wypiekany w Lipnicy Górnej. To jedyne potwierdzone wpisy w całym pierścieniu wokół Bochni; sąsiednie gminy takich nie mają.",
        "I właśnie dlatego mówię tutaj coś, czego nie mówię wszędzie tak dobitnie: to urządzenie nie zastąpi umiejętności i nie zrobi za nikogo chleba, który ktoś piecze od czterdziestu lat. Byłoby to zwyczajnie nieprawdą, a w tej gminie usłyszałabym to od razu. Thermomix robi co innego — zdejmuje mieszanie, wyrabianie i pilnowanie temperatury. Ciasto na chleb wyrobi, ale przepis, zakwas i wyczucie zostają po Waszej stronie.",
        "W praktyce najczęściej sprawdza się tu przy tym, co i tak powstaje sezonowo: przy powidłach ze śliwek, przy sokach, przy zupach mrożonych na zimę. Wszędzie tam, gdzie normalnie trzeba stać nad garnkiem i mieszać przez godzinę, żeby się nie przypaliło.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Lipnica Murowana?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Rajbrot i Borówna leżą wyraźnie na uboczu względem samej Lipnicy, więc od tego zależy, jak układam trasę i ile czasu rezerwuję.",
        "Jednego terminu unikam z góry: Wielkiego Tygodnia i Niedzieli Palmowej. Wtedy w tej gminie dzieje się co innego i nikt nie ma głowy do prezentacji — a ja wolę przyjechać wtedy, kiedy jest na to spokój.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Lipnica Murowana"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny, która gotuje według przepisu babci",
      paragraphs: [
        "W domach, w których gotuje się z przekazu, największą obawą nie jest cena, tylko to, czy urządzenie „popsuje smak”. Rozumiem to i nie zbywam tego jednym zdaniem. Na prezentacji zwykle robimy dokładnie to, co u Was jest robione od zawsze — i sami oceniacie wynik, zamiast wierzyć mi na słowo.",
        "Najbardziej praktyczne bywa to, że zupa albo danie jednogarnkowe może się gotować bez pilnowania, kiedy Ty zajmujesz się czymś innym. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — a przy okazji uczą się rzeczy, które w tym domu robi się od pokoleń.",
        "Wielu osobom przydaje się też to, że własny przepis można zapisać i mieć go potem pod ręką w tej samej formie co wszystkie inne. Nie zastępuje to zeszytu z kuchni, ale sprawia, że przepis nie znika razem z zeszytem.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Lipnica Murowana dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu sołectw i bez żadnej dopłaty za odległość — do Lipnicy Murowanej, Lipnicy Dolnej, Lipnicy Górnej, Rajbrotu i Borównej.",
    "Trzy Lipnice leżą blisko siebie wzdłuż doliny Uszwicy i drogi wojewódzkiej, więc tam dojazd jest prosty. Rajbrot to zupełnie inna sprawa: to duża, samodzielna wieś z własnym zabytkowym zespołem kościelnym, położona wyżej i na uboczu, już przy granicy Beskidu Wyspowego. Traktuję ją jak drugi biegun gminy i rezerwuję na nią osobny czas w trasie.",
    "Przy umawianiu proszę o nazwę sołectwa, bo samo „Lipnica” nie wystarcza — są trzy i leżą w trzech różnych miejscach. Rynek w Lipnicy Murowanej jest najprostszym punktem orientacyjnym dla całej gminy.",
    "Jeśli ktoś pyta mnie po drodze o kościół świętego Leonarda: stoi na cmentarzu w Lipnicy Dolnej, a zwiedza się go z przewodnikiem, po wcześniejszym umówieniu z parafią. Nie ma stałych godzin otwarcia, więc nie warto jechać tam bez telefonu.",
  ],
  districts: ["Lipnica Murowana", "Lipnica Dolna", "Lipnica Górna", "Rajbrot", "Borówna"],

  nearbyHeading: "Okoliczne gminy też są na mojej trasie",
  nearbyParagraphs: [
    "Lipnica Murowana leży przy drodze, którą jeżdżę z Bochni przez Nowy Wiśnicz w stronę Tymowej, więc jest naturalnie na mojej trasie. Do Bochni jest stąd kilkanaście kilometrów, do Brzeska podobnie.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Nowy Wiśnicz",
    "Żegocina",
    "Trzciana",
    "Brzesko",
    "Łapanów",
    "Limanowa",
    "Kraków",
  ],

  about: blokOMnie("do Lipnicy Murowanej", "w gminach wokół Bochni"),

  faq: [
    {
      question: "Czy dojeżdżasz do Rajbrotu i Borównej?",
      answer:
        "Tak, tak samo jak do samej Lipnicy Murowanej. Rajbrot leży najdalej i najwyżej w gminie, więc rezerwuję na niego więcej czasu w trasie — ale dojazd jest bezpłatny i nie zależy od odległości.",
    },
    ...faqWspolne("w gminie Lipnica Murowana"),
    {
      question: "Piekę chleb na zakwasie od lat. Czy Thermomix ma mi coś do zaoferowania?",
      answer:
        "Nie zastąpi Ci przepisu ani zakwasu i nie będę tego twierdzić. Wyręczy Cię w wyrabianiu ciasta i w pilnowaniu temperatury przy rozczynie — to jest cała różnica, ani mniejsza, ani większa. Jeśli lubisz sam moment wyrabiania rękami, powiem wprost: prawdopodobnie nie kupuj go dla chleba.",
    },
    {
      question: "Robimy dużo przetworów ze śliwek. Czy to widać na prezentacji?",
      answer:
        "Jeśli jest sezon i macie ochotę, to najlepszy możliwy pokaz w tej okolicy. Powidła i przeciery to dokładnie ten rodzaj pracy, gdzie normalnie trzeba mieszać godzinami — a tu urządzenie robi to samo i samo pilnuje, żeby nic się nie przypaliło.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 49.8532, lng: 20.5265 },
};
