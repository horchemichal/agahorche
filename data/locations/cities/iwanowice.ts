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
 * IWANOWICE — GMINA WIEJSKA w powiecie krakowskim.
 * 9 843 mieszkańców (GUS, 31.12.2024; ewidencja gminy 9 152 na 31.12.2022),
 * 71,1 km². 22 SOŁECTWA.
 * ⚠️ SIEDZIBA URZĘDU: IWANOWICE WŁOŚCIAŃSKIE, ul. Ojcowska 11. Istnieje
 * też osobna wieś IWANOWICE DWORSKIE (muzeum). Nigdy nie pisać samego
 * „Iwanowice” jako adresu.
 * ⚠️ JAKO JEDYNA Z TEJ FALI GMINA NIE GRANICZY Z KRAKOWEM.
 *
 * OŚ STRONY: MAŁY OJCÓW — DOLINA DŁUBNI. Odcinek doliny między Maszkowem
 * a Iwanowicami bywa nazywany „Małym Ojcowem” ze względu na wapienne
 * skałki i źródła; sama gmina uważa swój fragment Dłubniańskiego Parku
 * Krajobrazowego za najpiękniejszy w całym parku. Gmina leży na pograniczu
 * Wyżyny Miechowskiej i Jury, 20 km na północ od Krakowa — własna dolina,
 * a nie przedmieście.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — „MAŁY OJCÓW”: odcinek doliny Dłubni MIĘDZY MASZKOWEM A IWANOWICAMI.
 *   POTWIERDZONE DWOMA ŹRÓDŁAMI: UG Iwanowice („Położenie gminy” oraz
 *   podstrona o DPK) i jurajskakraina.pl. Gmina określa dolinę Dłubni
 *   i Minóżki koło Iwanowic jako najpiękniejszy fragment całego parku,
 * — DŁUBNIAŃSKI PARK KRAJOBRAZOWY: utworzony 1981, powierzchnia
 *   10 959,6 ha, obejmuje SZEŚĆ GMIN (Gołcza, Iwanowice, Michałowice,
 *   Skała, Trzyciąż, Zielonki); struktura: 79% pola uprawne, 17% lasy,
 *   3% łąki; 158 chronionych gatunków bezkręgowców, bobry, murawy
 *   kserotermiczne, storczyki (ZPKWM),
 * — POŁOŻENIE: pogranicze Wyżyny Miechowskiej i Jury Krakowsko-
 *   Częstochowskiej, ok. 20 km na północ od Krakowa,
 * — 22 SOŁECTWA (iwanowice.pl): Biskupice, Celiny, Damice, Domiarki,
 *   Grzegorzowice Małe, Grzegorzowice Wielkie, Iwanowice Dworskie,
 *   Iwanowice Włościańskie, Krasieniec Stary, Krasieniec Zakupny,
 *   Lesieniec, Maszków, Narama, Poskwitów Nowy, Poskwitów Stary,
 *   Przestańsko, Sieciechowice, Sułkowice, Widoma, Władysław, Zagaje,
 *   Żerkowice,
 * — BABIA GÓRA (archeologia): osada KULTURY MIERZANOWICKIEJ, wczesna
 *   epoka brązu, 2300–1600 p.n.e.; NAJWIĘKSZA ZNANA OSADA TEJ KULTURY
 *   z zachowanymi strukturami; ponad 150 grobów; stanowisko dostarczyło
 *   ok. 50% wszystkich znanych materiałów tej kultury; badania IHKM PAN
 *   + State University of New York w Buffalo, 1967–1979; prof. Jan Machnik
 *   kierował badaniami 1967–1969 i 1971–1973,
 * — HISTORIA: 1293 erygowanie parafii przez bp. Prokopa; 1294 pierwsza
 *   pewna wzmianka (konfiskata dóbr przez Przemysła II); 1314 w spisie
 *   dóbr arcybiskupów gnieźnieńskich; 1326–1327 parafia w rejestrach
 *   świętopietrza; 1392 pierwsze imiona mieszkańców; 1408 fundacja
 *   drewnianego kościoła Wszystkich Świętych przez Mikołaja Pieniążka;
 *   XVI w. rozkwit dzięki prawom targowym; 1633 WŁADYSŁAW IV POTWIERDZA
 *   PRAWA MIEJSKIE; 1655–1657 potop; 1745–1746 budowa istniejącego
 *   DREWNIANEGO KOŚCIOŁA ŚWIĘTEJ TRÓJCY; 1869 CAR ALEKSANDER II ODBIERA
 *   PRAWA MIEJSKIE (populacja poniżej 1000),
 * — PARAFIA IWANOWICE NALEŻY DO DIECEZJI KIELECKIEJ, nie krakowskiej —
 *   ślad granicy zaborów (Królestwo Polskie / zabór rosyjski),
 * — MUZEUM REGIONALNE: Iwanowice Dworskie 76, w budynku DAWNEJ KARCZMY
 *   z początku XVIII w.; izba regionalna od 1977, status muzeum 1988,
 *   otwarcie w karczmie 1992; ok. 400 eksponatów,
 * — DROGI (Raport o stanie gminy za 2022): 68 km gminnych, 55,2 km
 *   powiatowych, 8,31 km wojewódzkich, 3,18 km krajowych. DW773 przez
 *   Iwanowice Włościańskie. KOLEI W GMINIE BRAK,
 * — WĘZEŁ WIDOMA NA S7: Widoma to sołectwo tej gminy; odcinek S7 węzeł
 *   Widoma – węzeł Mistrzejowice (ok. 12 km) udostępniono 23.12.2024,
 * — SĄSIEDZI: Gołcza, Kocmyrzów-Luborzyca, Michałowice, Skała, Słomniki,
 *   Zielonki. GMINA NIE GRANICZY Z KRAKOWEM,
 * — GOSPODARKA: sadownictwo i ogrodnictwo rozwinięte szczególnie
 *   w POŁUDNIOWEJ części gminy (UG, jurajskakraina.pl); 1 175 podmiotów
 *   REGON, w tym 983 osoby fizyczne,
 * — DEMOGRAFIA: +21,6% od 2002; średni wiek 40,3; saldo migracji +49,
 * — WSPÓŁRZĘDNE: 50,22722 / 19,95694.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — „KULTURY IWANOWICKIEJ”. TAKA NIE ISTNIEJE. Poprawna nazwa to KULTURA
 *   MIERZANOWICKA, a Iwanowice są jej najważniejszym stanowiskiem.
 *   Termin „grupa iwanowicka” niepotwierdzony. Błąd merytoryczny,
 * — PROCENTU POWIERZCHNI GMINY W PARKU. Gmina pisze tylko „znaczna
 *   część”. NIE PODAWAĆ liczby,
 * — POWIERZCHNI SADÓW I GATUNKÓW OWOCÓW. Brak danych. Nie podawać liczb,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — NAZWANYCH PRACODAWCÓW. Strona „Firmy w naszej gminie” nie zawiera
 *   wykazu. 1 175 podmiotów, z czego 983 to osoby fizyczne,
 * — DATY „OK. 1212 — RYCERZ IWAN”. To hipoteza podana przez parafię,
 *   nie fakt. Pominięta,
 * — UTRATY PRAW MIEJSKICH JAKO OSI. Fakt użyty, ale oś „miasto, które
 *   przestało być miastem” należy do SKAŁY z tej samej fali. Tutaj
 *   wyłącznie jako element historii, nie jako teza strony,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — IWANOWICE WŁOŚCIAŃSKIE (urząd, kościół) vs IWANOWICE DWORSKIE
 *   (muzeum) — to DWIE ODRĘBNE WSIE,
 * — 22 SOŁECTWA wg urzędu, ale Wikipedia i polskawliczbach podają
 *   23 miejscowości. Miejscowość to nie sołectwo,
 * — DOLINA DŁUBNI przechodzi przez SZEŚĆ gmin. Nie zawłaszczać całej —
 *   „Małym Ojcowem” nazywany jest konkretny odcinek między Maszkowem
 *   a Iwanowicami,
 * — ROZBIEŻNOŚĆ LUDNOŚCI: GUS 9 843, ewidencja gminy 9 152. GUS liczy
 *   ludność faktycznie zamieszkałą, gmina — zameldowanych,
 * — GMINA NIE GRANICZY Z KRAKOWEM, w odróżnieniu od większości gmin
 *   pierścienia. Nie pisać „podkrakowska sypialnia”.
 */

export const IWANOWICE: CityContent = {
  slug: "iwanowice",
  h1: "Thermomix Iwanowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Iwanowice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Iwanowice: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich 22 sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Iwanowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Iwanowice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Iwanowic Włościańskich, Iwanowic Dworskich, Sieciechowic, Naramy i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia dwa sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Iwanowice – jak wygląda prezentacja?",
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
      heading: "Mały Ojców — dolina Dłubni",
      paragraphs: [
        "Odcinek doliny Dłubni między Maszkowem a Iwanowicami nazywa się tu Małym Ojcowem. Nazwa nie jest oficjalna, ale używa jej sama gmina i przewodniki po Jurajskiej Krainie — i jest zasłużona, bo są tu wapienne skałki, źródła i wąska, kręta dolina, tyle że na mniejszą skalę niż ta w Ojcowie.",
        "Cały Dłubniański Park Krajobrazowy zajmuje niecałe jedenaście tysięcy hektarów i rozciąga się przez sześć gmin. Iwanowice uważają swój fragment — dolinę Dłubni i Minóżki — za najpiękniejszą część całego parku i piszą to wprost na swojej stronie. Ciekawe jest zresztą, jak ten park wygląda w liczbach: prawie osiemdziesiąt procent jego powierzchni to pola uprawne, lasów jest siedemnaście procent, łąk trzy. To krajobraz zrobiony przez ludzi, a nie dzicz.",
        "Gmina leży na pograniczu Wyżyny Miechowskiej i Jury, dwadzieścia kilometrów na północ od Krakowa. I jako jedna z niewielu w tym pierścieniu nie graniczy z miastem — sąsiaduje z Gołczą, Kocmyrzowem-Luborzycą, Michałowicami, Skałą, Słomnikami i Zielonkami. To dwadzieścia dwa sołectwa rozsiane po zboczach doliny, a nie przedmieście, które ktoś dorysował do Krakowa.",
        "Ludzie mieszkają tu zresztą bardzo długo. Na Babiej Górze w Iwanowicach odkryto największą znaną osadę kultury mierzanowickiej z wczesnej epoki brązu, datowaną między dwa tysiące trzysta a tysiąc sześćset rokiem przed naszą erą. Ponad sto pięćdziesiąt grobów, badania prowadzone od tysiąc dziewięćset sześćdziesiątego siódmego roku wspólnie przez Polską Akademię Nauk i uniwersytet stanu Nowy Jork w Buffalo. Ze stanowiska pochodzi mniej więcej połowa wszystkiego, co o tej kulturze wiadomo.",
        "Iwanowice były przez pewien czas miastem. Parafię erygowano w tysiąc dwieście dziewięćdziesiątym trzecim roku, w szesnastym wieku wieś rozkwitła dzięki prawom targowym, a w tysiąc sześćset trzydziestym trzecim Władysław Czwarty potwierdził prawa miejskie. Odebrał je car Aleksander Drugi w tysiąc osiemset sześćdziesiątym dziewiątym — miejscowość miała wtedy poniżej tysiąca mieszkańców.",
        "Po tamtych czasach zostały dwa budynki, które warto zobaczyć. Drewniany kościół Świętej Trójcy z lat tysiąc siedemset czterdziestych i dawna karczma z początku osiemnastego wieku w Iwanowicach Dworskich, w której od tysiąc dziewięćset dziewięćdziesiątego drugiego roku mieści się muzeum regionalne z około czterystoma eksponatami.",
        "I ślad, którego się nie spodziewa nikt spoza okolicy: tutejsza parafia należy do diecezji kieleckiej, a nie krakowskiej. To pozostałość po granicy zaborów, która biegła właśnie tędy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Iwanowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj pełną nazwę sołectwa. To jest gmina, w której obok siebie leżą Iwanowice Włościańskie i Iwanowice Dworskie, Poskwitów Nowy i Poskwitów Stary, Krasieniec Stary i Krasieniec Zakupny, Grzegorzowice Małe i Wielkie. Samo „Iwanowice” albo samo „Poskwitów” to za mało dla nawigacji.",
        "Sołectw jest dwadzieścia dwa i są rozrzucone po zboczach doliny, więc trasa z jednego końca gminy na drugi zajmuje sporo. Kosztu to nie zmienia — dojazd jest bez dopłat wszędzie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Iwanowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sad, który rodzi wszystko naraz",
      paragraphs: [
        "Sadownictwo i ogrodnictwo są tu rozwinięte szczególnie w południowej części gminy — tak opisuje to sama gmina i tak wygląda to na miejscu. A sad ma jedną cechę, przez którą bywa udręką: rodzi wszystko naraz, w ciągu dwóch, trzech tygodni, i przez ten czas trzeba zdecydować, co z tym zrobić.",
        "Część idzie do sprzedaży, część zostaje. I to ta część zostająca jest problemem, bo za tydzień nie będzie się już nadawać, a wyrzucić szkoda.",
        "Pierwsza rzecz, która wtedy pomaga, to przetwarzanie bez stania nad garnkiem. Powidła, mus, konfitura czy przecier gotują się same, bez mieszania, żeby nie przywarło — a przy owocach z cukrem przywiera bardzo chętnie. Można nastawić i wyjść z domu.",
        "Druga to mrożenie w formie, która potem coś ułatwia. Owoce zmiksowane na mus i rozlane do pojemników zajmują w zamrażarce ułamek miejsca w porównaniu z całymi i zimą wchodzą prosto do ciasta, do jogurtu albo do owsianki, bez rozmrażania przez pół dnia.",
        "Trzecia dotyczy soku i kompotu — rzeczy, które w tej okolicy robi się od pokoleń i które w wersji kupnej mają zwykle o wiele więcej cukru, niż ktokolwiek by dosypał sam.",
        "Poza sezonem gotuje się tu jak w całej północnej części powiatu: rosół, ziemniaki, kapusta, zupy, ciasto drożdżowe na niedzielę. Sad wraca do rozmowy dopiero późnym latem, ale wtedy wraca na całego.",
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
    heading: "Iwanowice i gotowanie — sady, dolina i cztery tysiące lat osadnictwa",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń. Nie będę więc wymieniać rzeczy, których nie sprawdziłam — a sąsiednie gminy mają takie wpisy i łatwo byłoby je tu przepisać.",
      "To, co o kuchni tej gminy da się powiedzieć z pewnością, wynika z ziemi. Sadownictwo i ogrodnictwo są tu rozwinięte, zwłaszcza w południowej części gminy, i to one wyznaczają rytm późnego lata. Dłubniański Park Krajobrazowy, który obejmuje sporą część gminy, to w prawie osiemdziesięciu procentach pola uprawne — krajobraz zrobiony przez rolników, a nie zostawiony samemu sobie.",
      "Ludzie uprawiają tu ziemię niewiarygodnie długo. Na Babiej Górze w Iwanowicach leży największa znana osada kultury mierzanowickiej, zamieszkana między dwa tysiące trzysta a tysiąc sześćset rokiem przed naszą erą — czyli przez blisko siedemset lat. Ze stanowiska pochodzi około połowy wszystkiego, co o tej kulturze wiadomo.",
      "W Iwanowicach Dworskich stoi dawna karczma z początku osiemnastego wieku, dziś muzeum regionalne, a w niej zrekonstruowane dziewiętnastowieczne wnętrze chłopskie z tej okolicy — z paleniskiem, naczyniami i sprzętami, które robiły dokładnie to, co dziś robi urządzenie stojące na blacie.",
      "Dla tego urządzenia najsensowniejsze są tu przetwory z owoców: powidła, musy, konfitury, soki i przeciery do mrożenia. Czego nie zrobi, mówię wprost: nie zbierze jabłek i nie zastąpi wprawy przy cieście. Zabiera tę część roboty, która jest wyłącznie czasem i staniem przy garnku.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Iwanowice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu dwóch, bez żadnej dopłaty za odległość. Gmina liczy blisko dziesięć tysięcy mieszkańców na siedemdziesięciu jeden kilometrach kwadratowych i leży dwadzieścia kilometrów na północ od Krakowa.",
    "Sołectwa to: Biskupice, Celiny, Damice, Domiarki, Grzegorzowice Małe, Grzegorzowice Wielkie, Iwanowice Dworskie, Iwanowice Włościańskie, Krasieniec Stary, Krasieniec Zakupny, Lesieniec, Maszków, Narama, Poskwitów Nowy, Poskwitów Stary, Przestańsko, Sieciechowice, Sułkowice, Widoma, Władysław, Zagaje i Żerkowice.",
    "Urząd gminy mieści się w Iwanowicach Włościańskich przy ulicy Ojcowskiej. Muzeum regionalne jest w Iwanowicach Dworskich — to dwie osobne wsie, nie dwie części jednej, i warto o tym pamiętać przy podawaniu adresu.",
    "Przez gminę przechodzi dolina Dłubni, której odcinek między Maszkowem a Iwanowicami nazywany jest Małym Ojcowem. Cały Dłubniański Park Krajobrazowy powstał w tysiąc dziewięćset osiemdziesiątym pierwszym roku i obejmuje sześć gmin.",
    "Dojazd: kolei w gminie nie ma. Główną osią jest droga wojewódzka siedemset siedemdziesiąt trzy, przy której stoi urząd. W Widomej, jednym z sołectw gminy, znajduje się węzeł drogi ekspresowej S7 — odcinek do Mistrzejowic udostępniono w grudniu dwa tysiące dwudziestego czwartego roku.",
  ],
  districts: [
    "Iwanowice Włościańskie",
    "Iwanowice Dworskie",
    "Sieciechowice",
    "Narama",
    "Widoma",
    "Maszków",
    "Poskwitów Stary",
    "Poskwitów Nowy",
    "Damice",
    "Celiny",
    "Biskupice",
    "Sułkowice",
    "Grzegorzowice Wielkie",
    "Grzegorzowice Małe",
    "Krasieniec Stary",
    "Krasieniec Zakupny",
    "Żerkowice",
    "Władysław",
    "Zagaje",
    "Lesieniec",
    "Domiarki",
    "Przestańsko",
  ],

  nearbyHeading: "Słomniki, Skała i Michałowice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje ze Słomnikami, Skałą, Michałowicami, Zielonkami, Kocmyrzowem-Luborzycą i Gołczą. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "W odróżnieniu od większości gmin tego pierścienia Iwanowice nie graniczą bezpośrednio z Krakowem — między nimi a miastem leżą jeszcze Zielonki i Michałowice.",
  ],
  nearbyTowns: [
    "Słomniki",
    "Skała",
    "Michałowice",
    "Zielonki",
    "Kocmyrzów-Luborzyca",
    "Gołcza",
    "Kraków",
  ],

  about: blokOMnie("do gminy Iwanowice", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Sieciechowicach albo w Naramie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwadzieścia dwa sołectwa traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Iwanowice"),
    {
      question: "Iwanowice Włościańskie czy Dworskie — czy to ma znaczenie?",
      answer:
        "Ma, i to spore, bo to dwie osobne wsie leżące obok siebie. Urząd gminy i kościół są we Włościańskich, muzeum regionalne w Dworskich. Nawigacja po samym haśle „Iwanowice” potrafi zawieźć w niewłaściwe miejsce, więc przy umawianiu warto podać pełną nazwę razem z numerem domu. Ta sama uwaga dotyczy Poskwitowa Starego i Nowego oraz obu Krasieńców.",
    },
  ],

  geo: { lat: 50.22722, lng: 19.95694 },
};
