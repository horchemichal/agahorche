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
 * SKRZYSZÓW — GMINA WIEJSKA w powiecie tarnowskim.
 * 14 180 mieszkańców (GUS, 31.12.2024), 86,0 km², 165 os./km²,
 * +11,5% od 2002, średni wiek 40,1, saldo migracji +27.
 * TYLKO 5 SOŁECTW: Ładna, Łękawica, Pogórska Wola, Skrzyszów
 * (siedziba), Szynwałd — czyli średnio 17,2 km² na wieś.
 * Wójt: Marcin Kiwior.
 *
 * OŚ STRONY: PIĘĆ WSI I CZTERDZIEŚCI PROCENT POLSKIEGO GAZU.
 * Najmniej rozdrobniona gmina okolicy (pięć bardzo dużych wsi) plus
 * WĘZEŁ PRZESYŁOWY GAZ-SYSTEM W POGÓRSKIEJ WOLI, przez który Oddział
 * Tarnów przesyła 40% GAZU W POLSCE, spinający Baltic Pipe, terminal
 * LNG w Świnoujściu oraz kierunki słowacki i ukraiński.
 * ⚠️⚠️ TO NIE JEST OŚ DOJAZDOWA (Wojnicz) ANI DEMOGRAFICZNA (Zielonki).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — GAZ-SYSTEM w Pogórskiej Woli: węzeł przesyłowy i centrum
 *   zarządzania gazem — laboratorium pomiaru jakości gazu, węzeł
 *   przesyłowy nowych gazociągów, siedziba pogotowia gazowego;
 *   uruchamiane w 2019 r., przeprowadzka Oddziału Tarnów planowana
 *   na 2020. PRZEZ ODDZIAŁ TARNÓW PRZECHODZI 40% GAZU W POLSCE.
 *   Węzeł łączy Baltic Pipe, terminal LNG w Świnoujściu oraz
 *   połączenia ze Słowacją i Ukrainą (BiznesAlert).
 *   GAZOCIĄG POGÓRSKA WOLA – TWORZEŃ: średnica 1000 mm, ciśnienie
 *   robocze 8,4 MPa, długość ok. 168 km, trzy odcinki; odbiory
 *   listopad 2021 (odc. I–II) i lipiec 2022 (odc. III); dofinansowanie
 *   UE ok. 616,6 mln zł, status PCI, element Korytarza Północ–Południe
 *   (gaz-system.pl).
 *   ⚠️⚠️ TO WĘZEŁ PRZESYŁOWY, NIE „TŁOCZNIA GAZU”. Żadne źródło nie
 *   użyło słowa „tłocznia”. NIE PISAĆ „tłocznia”,
 * — 5 SOŁECTW z powierzchniami (szynwald.pl): Szynwałd 23,2 km²,
 *   Pogórska Wola 20,8 km², Łękawica 15,8 km², Ładna 13,3 km²,
 *   Skrzyszów 13,1 km². Gmina podaje własną powierzchnię 86,2 km²,
 * — ⭐ KOŚCIÓŁ ŚW. STANISŁAWA BISKUPA W SKRZYSZOWIE: ROK BUDOWY 1517,
 *   FUNDACJA JANA AMORA TARNOWSKIEGO, hetmana wielkiego koronnego;
 *   budowniczy CIEŚLA JAN Z CZCHOWA. Styl późnogotycki, konstrukcja
 *   zrębowa; opisywany jako NAJWIĘKSZY DREWNIANY KOŚCIÓŁ PÓŹNOGOTYCKI
 *   KONSTRUKCJI ZRĘBOWEJ W MAŁOPOLSCE. NALEŻY DO SZLAKU ARCHITEKTURY
 *   DREWNIANEJ. Wieża słupowo-ramowa z nadwieszoną hurdycją, hełm
 *   namiotowy, wzniesiona 1893–1894. Wyposażenie: barokowy ołtarz
 *   główny XVIII w., STALLE GOTYCKIE Z XV W., późnogotycki KRUCYFIKS
 *   Z XV W. na belce tęczowej (malopolska.szlaki.pttk.pl).
 *   ⚠️⚠️ NIE JEST NA LIŚCIE UNESCO. Wpis „Drewniane kościoły
 *   południowej Małopolski” obejmuje dokładnie SZEŚĆ kościołów:
 *   Binarowa, Blizne, Dębno Podhalańskie, Haczów, Lipnica Murowana,
 *   Sękowa. Skrzyszowa tam NIE MA. Wolno pisać „Szlak Architektury
 *   Drewnianej”, NIE WOLNO „UNESCO”,
 * — HISTORIA (skrzyszow.pl): SKRZYSZÓW najstarszą miejscowością gminy,
 *   pierwsze informacje z 1327 r.; ŁADNA NAJMŁODSZA — POWSTAŁA
 *   W 1949 R.; gmina w obecnym kształcie utworzona 1 stycznia 1973 r.
 *   z połączenia gromad Skrzyszów (z Ładną, Pogórską Wolą, Łękawicą)
 *   i Szynwałd; 89 STANOWISK ARCHEOLOGICZNYCH, osadnictwo z IX–X w.,
 * — SZYNWAŁD (tuszynwald.pl): 1344 Kazimierz Wielki potwierdza dobra
 *   nadane kasztelanowi krakowskiemu Spicymirowi, wśród nich Szynwałd;
 *   NAZWA Z NIEMIECKIEGO „SCHÖNWALD” — PIĘKNY LAS; forma „Szynwałd”
 *   po raz pierwszy w 1542 r.; właściciele kolejno: Tarnowscy,
 *   Ostrogscy, Zamojscy, Koniecpolscy, Walewscy, Lubomirscy, wreszcie
 *   SANGUSZKOWIE DO 1945 R.; 1783/1787 ok. 1 100–1 198 mieszkańców,
 * — ZBIORNIK RETENCYJNY na potoku Korzeń w Skrzyszowie, funkcja
 *   przeciwpowodziowa dla rejonu Tarnowa. ŚCIEŻKA PIESZO-ROWEROWA
 *   BLISKO 4,5 KM, pełne okrążenie możliwe od WRZEŚNIA 2024 R.,
 *   dofinansowanie 1,3 mln zł z Polskiego Ładu,
 * — STREFA GOSPODARCZA: gmina uwolniła setki hektarów pod zabudowę
 *   przemysłową i usługową; tereny przy drodze między Ładną
 *   a Skrzyszowem i przy DK94 między Ładną a Pogórską Wolą. Firmy
 *   wymienione z nazwy: Mateo, Merkury. Powstają hale magazynowe,
 *   farma fotowoltaiczna, market budowlany, produkcja domów
 *   modułowych. SKRZYSZÓW ZAJĄŁ 3. MIEJSCE W SUBREGIONIE TARNOWSKIM
 *   pod względem dochodów podatkowych na mieszkańca — ponad 2 000 zł
 *   per capita (dane MF wg tarnowska.tv),
 * — KGW: Ładna, Łękawica, Szynwałd, Pogórska Wola („Pogórzanki”).
 *   KAPELA SZYNWAŁDZIANIE. DOŻYNKI GMINY SKRZYSZÓW — w 2026 r.
 *   EDYCJA 30., JUBILEUSZOWA: 15 sierpnia zabawa od 19:00,
 *   16 sierpnia msza o 14:00 w kościele św. Stanisława BM, obrzęd
 *   chleba, prezentacja wieńców, stoiska KGW,
 * — ADRES: Skrzyszów 642, 33-156 Skrzyszów; współrzędne
 *   49,99673 / 21,05654.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — „UNESCO” PRZY KOŚCIELE W SKRZYSZOWIE. NIE JEST NA LIŚCIE.
 *   Sprawdzone wobec pełnego wykazu sześciu obiektów,
 * — „TŁOCZNI GAZU”. To WĘZEŁ PRZESYŁOWY,
 * — WĘZŁA AUTOSTRADY A4 W POGÓRSKIEJ WOLI ANI W ŁADNEJ. NIE MA GO.
 *   Węzły w rejonie Tarnowa są dwa: Tarnów Zachód (Wierzchosławice)
 *   i Tarnów Północ (Krzyż). ⚠️ NIE POTWIERDZONO NAWET, czy A4
 *   fizycznie przecina gminę Skrzyszów — nie znaleziono źródła
 *   wymieniającego ją wśród gmin na trasie. Osią komunikacyjną
 *   jest DK94, lokalnie zwana „starą czwórką”. NIE PISAĆ, że A4
 *   przechodzi przez gminę,
 * — DOJAZDÓW DO TARNOWA JAKO OSI (Wojnicz) ANI WZROSTU LUDNOŚCI
 *   (Zielonki),
 * — DREWNIANEGO KOŚCIOŁA JAKO OSI. ⚠️ Drewniany kościół z XV w. ma
 *   też ZAWADA w gminie wiejskiej Tarnów. Tu kościół jest MOCNYM
 *   ELEMENTEM, nie osią — oś to gaz i struktura pięciu wsi,
 * — NUMERU I DATY WPISU kościoła do rejestru zabytków.
 *   Niepotwierdzone,
 * — PARAMETRÓW ZBIORNIKA (powierzchnia, pojemność). Niepotwierdzone,
 * — PRODUKTU TRADYCYJNEGO ZE SKRZYSZOWA. Istnieje ślad artykułu
 *   gminy z 2015 r. pod takim tytułem, ale strona zwraca 404 i nie
 *   wiadomo, o jaki produkt chodzi. NIE ZGADYWAĆ,
 * — „DOŻYNEK WOJEWÓDZTWA MAŁOPOLSKIEGO W SKRZYSZOWIE”. XXVIII
 *   Dożynki Województwa odbywają się 6 września 2026 po raz pierwszy
 *   w Krakowie. Prawdopodobnie chodziło o udział delegacji gminy.
 *   NIE PISAĆ, że Skrzyszów je gości,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA;
 *   bezrobocie 7,1% serwis oznacza jako szacunek.
 *
 * PUŁAPKI:
 * — ratusz.pl błędnie przypisuje Pogórską Wolę do POWIATU
 *   LIMANOWSKIEGO. Reszta danych z tej strony wygląda poprawnie,
 *   ale traktować ostrożnie,
 * — ŁADNA to nazwa wsi, nie przymiotnik. Powstała w 1949 r.,
 * — SZYNWAŁD jest największym sołectwem powierzchniowo (23,2 km²),
 *   większym od siedziby gminy (13,1 km²).
 */

export const SKRZYSZOW: CityContent = {
  slug: "skrzyszow",
  h1: "Thermomix Skrzyszów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Skrzyszów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Skrzyszów: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0%. Dojazd do Szynwałdu, Pogórskiej Woli i reszty gminy. Tel. 517 185 691.",
  ogTitle: "Thermomix Skrzyszów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Skrzyszów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Skrzyszowa, Szynwałdu, Pogórskiej Woli, Łękawicy i Ładnej przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Skrzyszowie – jak wygląda prezentacja?",
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
      heading: "Pięć wsi i czterdzieści procent polskiego gazu",
      paragraphs: [
        "Gmina Skrzyszów ma pięć sołectw. Nie piętnaście jak sąsiednia gmina Tarnów i nie jedenaście jak Lisia Góra — pięć. Przy powierzchni osiemdziesięciu sześciu kilometrów kwadratowych wypada średnio siedemnaście kilometrów na wieś, a największe sołectwo, Szynwałd, ma dwadzieścia trzy kilometry kwadratowe i jest niemal dwa razy większe od siedziby gminy.",
        "To wsie rozległe, w których do sąsiada bywa daleko. I w jednej z nich, w Pogórskiej Woli, stoi coś, o czym rzadko się mówi, a co ma znaczenie w skali kraju.",
        "Gaz-System zbudował tam węzeł przesyłowy i centrum zarządzania gazem: laboratorium pomiaru jakości gazu, węzeł nowych gazociągów, siedzibę pogotowia gazowego. Przez tarnowski oddział przechodzi około czterdziestu procent gazu w Polsce, a węzeł spina trzy kierunki naraz — Baltic Pipe, terminal skroplonego gazu w Świnoujściu oraz połączenia ze Słowacją i Ukrainą.",
        "Stąd wychodzi też gazociąg Pogórska Wola–Tworzeń: rura o średnicy metra, długa na sto sześćdziesiąt osiem kilometrów, oddawana do użytku w latach dwa tysiące dwadzieścia jeden i dwa tysiące dwadzieścia dwa, dofinansowana przez Unię kwotą ponad sześciuset milionów złotych jako element Korytarza Północ–Południe.",
        "Gmina ma z tego wymierny pożytek: pod względem dochodów podatkowych na mieszkańca zajmuje trzecie miejsce w subregionie tarnowskim, z kwotą powyżej dwóch tysięcy złotych na osobę. Przy drodze krajowej dziewięćdziesiąt cztery, którą w okolicy nazywa się starą czwórką, wyrastają hale magazynowe, farma fotowoltaiczna i zakład produkujący domy modułowe.",
        "Ale najstarsza rzecz w tej gminie jest z drewna. W Skrzyszowie stoi kościół świętego Stanisława Biskupa, zbudowany w tysiąc pięćset siedemnastym roku z fundacji Jana Amora Tarnowskiego, hetmana wielkiego koronnego, przez cieślę Jana z Czchowa. Późnogotycki, w konstrukcji zrębowej — i opisywany jako największa taka świątynia w Małopolsce. W środku zachowały się gotyckie stalle z piętnastego wieku i późnogotycki krucyfiks na belce tęczowej. Kościół należy do Szlaku Architektury Drewnianej; od razu sprostuję, bo bywa mylony — na liście UNESCO go nie ma, ta obejmuje sześć innych drewnianych kościołów Małopolski.",
        "Historia gminy jest zresztą nierówna w sposób, który trudno spotkać gdzie indziej. Skrzyszów pojawia się w dokumentach w tysiąc trzysta dwudziestym siódmym roku, Szynwałd w tysiąc trzysta czterdziestym czwartym — nazwę wziął z niemieckiego Schönwald, czyli piękny las, a należał kolejno do Tarnowskich, Ostrogskich, Zamojskich, Koniecpolskich i Sanguszków, aż do tysiąc dziewięćset czterdziestego piątego. Ładna natomiast powstała dopiero w tysiąc dziewięćset czterdziestym dziewiątym. Sześćset lat różnicy między najstarszą a najmłodszą wsią jednej gminy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Skrzyszów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo i numer domu. Sołectw jest tylko pięć, ale są bardzo duże — Szynwałd zajmuje dwadzieścia trzy kilometry kwadratowe, a Pogórska Wola dwadzieścia jeden, z przysiółkami rozrzuconymi na sporym obszarze. Sama nazwa wsi to często za mało.",
        "Ładna i Pogórska Wola leżą przy drodze krajowej, więc dojazd jest tam prosty o każdej porze. Do wsi położonych dalej od trasy wolę wyjechać z zapasem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Skrzyszów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gaz płynie tędy, a urządzenie i tak działa na prąd",
      paragraphs: [
        "To jest chyba jedyna gmina w Małopolsce, w której trzeba postawić sprawę wprost: przez Pogórską Wolę przesyła się czterdzieści procent polskiego gazu, a Thermomix działa na prąd. Nie na gaz. Trzysta pięćdziesiąt watów silnika i tysiąc pięćset watów grzania, ze zwykłego gniazdka.",
        "To nie jest przytyk, tylko praktyczna informacja. W domach, w których gotuje się na gazie, ludzie pytają, czy nowe urządzenie nie podniesie im rachunku za prąd, i pytają słusznie. Odpowiedź jest taka: podniesie, ale mniej, niż się wydaje, bo naczynie jest izolowane i grzeje tylko tyle, ile trzeba — inaczej niż palnik, który ogrzewa też powietrze wokół garnka.",
        "Praktyczniejsza różnica dotyczy czegoś innego. Na gazie trzeba stać i patrzeć, bo płomień nie wie, że mleko właśnie kipi. Tutaj ustawia się temperaturę i czas, urządzenie samo się wyłącza, a kuchnia zostaje wolna. Przy pięciu palnikach zajętych w niedzielę to jest realny zysk miejsca.",
        "Druga rzecz, praktyczna w tak rozległych wsiach: dania jednogarnkowe nastawione przed wyjazdem. Kiedy do sąsiada jest kilometr, a do sklepu kilka, obiad, który czeka i sam się wyłączył, ma inną wartość niż w mieście.",
        "Trzecia to przetwory i wypieki na dożynki — a te obchodzi się tu wyjątkowo poważnie, bo w dwa tysiące dwudziestym szóstym roku odbyła się już trzydziesta edycja. Cztery koła gospodyń przygotowują stoiska, a ciasto i pasty da się zrobić dzień wcześniej.",
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
    heading: "Skrzyszów i gotowanie — cztery koła gospodyń i trzydzieste dożynki",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych. Na stronie gminy jest ślad artykułu sprzed lat zatytułowanego „Produkt tradycyjny ze Skrzyszowa”, ale strona już nie działa i nie wiadomo, o co chodziło. Nie będę zgadywać.",
      "Potwierdzone jest za to, że koła gospodyń wiejskich działają tu w czterech z pięciu sołectw: w Ładnej, Łękawicy, Szynwałdzie i Pogórskiej Woli, gdzie noszą nazwę Pogórzanki. Działa też Kapela Szynwałdzianie.",
      "Raz w roku wszystkie spotykają się na dożynkach gminnych — i to nie jest impreza nowa. W dwa tysiące dwudziestym szóstym roku odbyła się trzydziesta, jubileuszowa edycja: piętnastego sierpnia zabawa, szesnastego msza w kościele świętego Stanisława, obrzęd chleba, prezentacja wieńców i stoiska kół gospodyń.",
      "Trzydzieści lat nieprzerwanej tradycji w gminie liczącej pięć wsi mówi coś o tym, jak silne są tu więzi sołeckie — i o tym, że gotowanie dla większej grupy jest tu regularną praktyką, nie wyjątkiem.",
      "Poza tym kuchnia jest podtarnowska i zwyczajna: rosół, ziemniaki, kluski, kotlety, ciasto drożdżowe, przetwory z ogrodu.",
      "Dla urządzenia najsensowniejsze są tu wypieki i pasty robione dzień wcześniej na wiejskie uroczystości oraz dania jednogarnkowe gotujące się bez nadzoru. Czego nie zrobi, mówię wprost: nie upiecze chleba na obrzęd i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Skrzyszów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu, bez żadnej dopłaty za odległość. Gmina liczy ponad czternaście tysięcy mieszkańców na osiemdziesięciu sześciu kilometrach kwadratowych.",
    "Sołectwa to: Skrzyszów, Szynwałd, Pogórska Wola, Łękawica i Ładna. To niewiele jak na taką powierzchnię — Szynwałd zajmuje dwadzieścia trzy kilometry kwadratowe, Pogórska Wola prawie dwadzieścia jeden, a sam Skrzyszów trzynaście.",
    "W Skrzyszowie stoi drewniany kościół świętego Stanisława Biskupa z tysiąc pięćset siedemnastego roku, ufundowany przez hetmana Jana Amora Tarnowskiego. To największy późnogotycki kościół drewniany konstrukcji zrębowej w Małopolsce, należący do Szlaku Architektury Drewnianej. Zachowały się w nim gotyckie stalle i krucyfiks z piętnastego wieku.",
    "W Pogórskiej Woli działa węzeł przesyłowy gazu Gaz-Systemu z laboratorium pomiaru jakości gazu i pogotowiem gazowym — przez tarnowski oddział przesyła się około czterdziestu procent gazu w Polsce.",
    "W Skrzyszowie jest też zbiornik retencyjny na potoku Korzeń, chroniący rejon Tarnowa przed powodzią, a wokół niego ścieżka pieszo-rowerowa licząca blisko cztery i pół kilometra — pełne okrążenie możliwe od września dwa tysiące dwudziestego czwartego roku.",
    "Dojazd: kolei w gminie nie ma. Główną osią jest droga krajowa dziewięćdziesiąt cztery, nazywana tu starą czwórką, biegnąca przez Ładną i Pogórską Wolę w stronę Dębicy. Najbliższy węzeł autostrady A4 to Tarnów Północ w Krzyżu.",
  ],
  districts: [
    "Skrzyszów",
    "Szynwałd",
    "Pogórska Wola",
    "Łękawica",
    "Ładna",
  ],

  nearbyHeading: "Ryglice, Tarnów i Lisia Góra też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z gminą wiejską Tarnów, Lisią Górą, Ryglicami i Tuchowem, a od zachodu z samym miastem Tarnowem. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno sprostowanie, bo pojawia się w opisach turystycznych: drewniany kościół w Skrzyszowie należy do Szlaku Architektury Drewnianej, ale nie jest wpisany na listę UNESCO. Ta obejmuje sześć innych kościołów południowej Małopolski, między innymi w Sękowej, Binarowej i Lipnicy Murowanej.",
  ],
  nearbyTowns: [
    "Lisia Góra",
    "Ryglice",
    "Tuchów",
    "Tarnów",
    "Pleśna",
  ],

  about: blokOMnie("do gminy Skrzyszów", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Szynwałdzie albo w Pogórskiej Woli. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie pięć sołectw traktuję dokładnie tak samo. Przy umawianiu podaj proszę numer domu, a nie samą nazwę wsi — sołectwa są tu bardzo duże, Szynwałd ma dwadzieścia trzy kilometry kwadratowe, a Pogórska Wola kilka przysiółków.",
    },
    ...faqWspolne("w gminie Skrzyszów"),
    {
      question: "Gotujemy na gazie. Czy Thermomix bardzo podniesie rachunek za prąd?",
      answer:
        "Podniesie, ale mniej, niż większość osób zakłada. Urządzenie ma około trzystu pięćdziesięciu watów mocy silnika i tysiąca pięciuset watów grzania, czyli mniej więcej tyle co czajnik — z tą różnicą, że naczynie jest izolowane i grzeje tylko zawartość, a nie powietrze wokół garnka jak palnik gazowy. Przy typowym gotowaniu kilka razy w tygodniu różnica na rachunku jest niewielka. Realny zysk jest gdzie indziej: na gazie trzeba stać i pilnować, tu ustawia się czas i temperaturę, a urządzenie samo się wyłącza i zwalnia palnik dla czegoś innego.",
    },
  ],

  geo: { lat: 49.99673, lng: 21.05654 },
};
