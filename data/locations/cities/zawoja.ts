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
 * ZAWOJA — gmina wiejska, powiat suski. Dwie wsie (Zawoja i Skawica),
 * osiem sołectw, ok. 129 km², z czego blisko dwie trzecie to lasy.
 *
 * OŚ STRONY: PASTERSTWO I JESIENNY REDYK. Świadomie NIE „najdłuższa
 * wieś w Polsce” jako główny temat — to teza sporna (patrz PUŁAPKI),
 * a poza tym ograna. Redyk z Hali Barankowej odbywany co roku podczas
 * Babiogórskiej Jesieni jest żywy, udokumentowany i niepowtarzalny.
 *
 * Druga oś: UCZCIWY DOJAZD. Gmina nie ma kolei, do Krakowa jedzie się
 * półtorej godziny, a saldo dojazdów do pracy wynosi minus 476 osób.
 * Strona mówi to wprost, zamiast udawać, że jest blisko.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SOŁECTWA (8): Zawoja Centrum, Zawoja Dolna, Zawoja Górna,
 *   Zawoja Mosorne, Zawoja Przysłop, Zawoja Wełcza, Skawica Centrum,
 *   Skawica Sucha Góra. Miejscowości są dwie: Zawoja i Skawica,
 * — POWIERZCHNIA 129 km², lasy 65,8%, użytki rolne 30,8%.
 *   1 657 gospodarstw indywidualnych o średniej powierzchni 2,7 ha.
 *   Uprawy: ziemniaki 39,1%, owies 29,6%, żyto 14,8%,
 * — BABIA GÓRA 1725 m n.p.m. Siedziba Babiogórskiego Parku
 *   Narodowego mieści się w Zawoi pod numerem 1403,
 * — REZERWAT BIOSFERY UNESCO od czerwca 1976 r. (jeden z pierwszych
 *   na świecie), poszerzony we wrześniu 2001 r.; strefa przejściowa
 *   ok. 8 400 ha,
 * — NAZWA WSI jest pochodzenia wołoskiego, od dacko-rumuńskiego
 *   „zavoiu”. Gmina podaje, że w XIX w. pasterstwo było podstawą
 *   gospodarki, rolnictwo w mniejszym stopniu,
 * — BABIOGÓRSKA JESIEŃ / ŚWIĘTO GÓRALI BABIOGÓRSKICH: 41. edycja
 *   26–28 września 2025 r., hasło „Wzrastanie”. Organizator:
 *   Babiogórskie Centrum Kultury im. dr Urszuli Janickiej-Krzywdy.
 *   W programie jesienny redyk z Hali Barankowej, XI konferencja
 *   naukowa, kiermasz rękodzieła. Potwierdzone w dwóch źródłach,
 * — TURYSTYKA: 36 obiektów hotelowych i ośrodków, 48 gospodarstw
 *   agroturystycznych, 1 859 miejsc hotelowych i 747 w kwaterach
 *   prywatnych, 4 karczmy, 6 restauracji, 3 pizzerie,
 * — DOJAZDY DO PRACY: 625 osób wyjeżdża, 149 przyjeżdża.
 *   Saldo minus 476. 1 020 podmiotów REGON, 835 samozatrudnionych.
 *   Bezrobocie rejestrowane 4,4%,
 * — DOJAZD: gmina NIE MA KOLEI. Koleje Małopolskie obsługują ją
 *   linią autobusową A53 (przystanki „Zawoja”, „Zawoja Krowiarki”).
 *   Najbliższe stacje: Maków Podhalański i Sucha Beskidzka.
 *   Samochodem z Krakowa 73–87 km, ok. 1 h 26 – 1 h 30 min.
 *   Busem ok. 1 h 55 min,
 * — KUCHNIA GÓRALI BABIOGÓRSKICH wg Małopolskiego Centrum Kultury
 *   SOKÓŁ (oprac. Krystyna Reinfuss-Janusz): żur owsiany, kwaśnica,
 *   hałuski, kluski wykładane, moskole, szulki, kołacze,
 *   bundz, żentyca.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOKŁADNEJ LICZBY MIESZKAŃCÓW. Gmina podaje 9 122, GUS 8 774
 *   na 31.12.2024. Piszę „blisko dziewięć tysięcy”,
 * — TWIERDZENIA „NAJDŁUŻSZA WIEŚ W POLSCE” BEZ ZASTRZEŻENIA.
 *   Sama gmina pisze „największa pod względem powierzchni”.
 *   Biuro Rekordów uznaje za najdłuższą Ochotnicę (ok. 25 km),
 *   Zawoję stawia na drugim miejscu (ok. 18–19 km). Strona
 *   przedstawia ten spór, zamiast go rozstrzygać,
 * — NAZWANIA MOSKOLI CZY SERÓW „PRODUKTEM TRADYCYJNYM”.
 *   Brak potwierdzonego wpisu na Liście Produktów Tradycyjnych,
 * — DAT I EDYCJI BABIOGÓRSKIEJ JESIENI NA 2026 R. Nieogłoszone,
 * — NAZW PRACODAWCÓW poza parkiem narodowym i gminą,
 * — KÓŁ GOSPODYŃ. Nie znalazłam potwierdzonych dat ani nazw.
 *
 * PUŁAPKI:
 * — NIE SUGEROWAĆ SZYBKIEGO DOJAZDU. Realnie półtorej do dwóch
 *   godzin z Krakowa i brak kolei. Strona mówi to wprost,
 * — REZERWAT BIOSFERY: 1976, poszerzenie 2001 — nie 1997,
 * — „PONAD 100 km²” u Biura Rekordów dotyczy samej WSI Zawoja,
 *   a nie gminy (129 km²). Nie mieszać,
 * — BABIA GÓRA leży w gminie, ale nie cały masyw — nie przypisywać
 *   gminie całego pasma.
 */

export const ZAWOJA: CityContent = {
  slug: "zawoja",
  h1: "Thermomix Zawoja – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Zawoja — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Zawoja: bezpłatna prezentacja TM7 u Ciebie w kuchni — Zawoja i Skawica, wszystkie sołectwa. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zawoja — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Zawoja. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Zawoja przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich ośmiu sołectw, aż po Przysłop i Sucha Górę, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina, aż po przysiółki, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Zawoja – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Zawoi Centrum, jak w Skawicy, na Przysłopiu czy na Wełczy.",
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
      heading: "Wieś, do której owce co roku schodzą z hali",
      paragraphs: [
        "Pod koniec września w Zawoi odbywa się redyk — zejście owiec z Hali Barankowej do wsi. Nie inscenizacja dla turystów w strojach z wypożyczalni, tylko domknięcie sezonu pasterskiego, które jest częścią Babiogórskiej Jesieni, święta obchodzonego tu od czterdziestu z górą lat. W dwa tysiące dwudziestym piątym roku była to czterdziesta pierwsza edycja.",
        "Pasterstwo nie jest tu doklejonym folklorem. Sama nazwa wsi pochodzi z wołoskiego, a więc od ludzi, którzy przyszli w te góry z owcami. Jeszcze w dziewiętnastym wieku, jak podaje gmina, to pasterstwo było podstawą tutejszej gospodarki, a rolnictwo dopiero w drugiej kolejności — i widać, dlaczego: dwie trzecie gminy to las, a przeciętne gospodarstwo ma dziś dwa i siedem dziesiątych hektara. Na takim kawałku nie da się żyć z pola.",
        "Uprawia się tu głównie ziemniaki i owies — prawie siedemdziesiąt procent zasiewów. To nie jest przypadek ani zacofanie, tylko odpowiedź na wysokość i klimat. I to jest zarazem dokładny opis tutejszej kuchni: mąka owsiana, ziemniaki, kwaśne mleko, ser. Nic wymyślnego, wszystko pracochłonne.",
        "Muszę też powiedzieć rzecz mniej malowniczą, bo ona kształtuje codzienność bardziej niż redyk. Z tej gminy sześćset dwadzieścia pięć osób wyjeżdża do pracy, a przyjeżdża sto czterdzieści dziewięć. Saldo to minus czterysta siedemdziesiąt sześć. To znaczy: turystyka daje sezon, ale stałą pracę większość ludzi ma gdzie indziej, po drugiej stronie długiego dojazdu.",
        "I stąd bierze się to, co widzę w kuchniach: dzień rozciągnięty dojazdem z obu stron. Wyjście przed świtem, powrót po zmroku, a pomiędzy — pytanie, kto i kiedy ugotuje obiad. Urządzenie, które gotuje bez nikogo i samo się wyłącza, jest tu odpowiedzią na bardzo konkretny problem, a nie na wygodę.",
        "Od razu uczciwie, czego nie zrobi: nie zastąpi wprawy, nie ugotuje bez Ciebie i nie skróci drogi do pracy. Zabiera stanie przy garnku i te czynności, które trwają, a nie wymagają umiejętności.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Zawoja?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz i podaj punkt orientacyjny. Zawoja ciągnie się doliną kilkanaście kilometrów, a numeracja domów idzie tu do czterocyfrowych — sam numer bez wskazówki niewiele mi mówi. Dojazd wszędzie jest bez dopłaty, także na Przysłop i Sucha Górę.",
        "Zimą uprzedź mnie, jeśli dojazd pod dom bywa trudny. Nie po to, żeby odmówić — po to, żeby wyjechać wcześniej i przyjechać na czas.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Zawoja"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym jednocześnie mieszka się i przyjmuje gości",
      paragraphs: [
        "W gminie Zawoja działa czterdzieści osiem gospodarstw agroturystycznych i trzydzieści sześć obiektów noclegowych. Razem daje to ponad dwa i pół tysiąca miejsc do spania — w gminie liczącej blisko dziewięć tysięcy mieszkańców. To znaczy, że w wielu domach kuchnia pracuje na dwa fronty: dla rodziny i dla gości.",
        "To bardzo specyficzna sytuacja i rzadko się o niej pisze. Śniadanie dla ośmiu osób z noclegu, a zaraz potem obiad dla własnych dzieci. Sezon, w którym przez trzy miesiące gotuje się dwa razy więcej, a potem pół roku normalnie. Skala zmienia się w ciągu tygodnia, nie w ciągu lat.",
        "Praktyczne bywa tu przede wszystkim to, że danie można wstawić i wyjść. Zupa gotuje się sama i sama się wyłącza, kiedy Ty ścielisz pokoje albo odbierasz kogoś z parkingu. Nie trzeba wracać co dziesięć minut zamieszać, a to przy dwóch równoległych zestawach obowiązków jest różnicą odczuwalną od pierwszego dnia.",
        "Druga rzecz to powtarzalność. Ciasto na chleb, ciasto na kluski, sos, dżem z własnych owoców — robione seriami, zawsze tak samo. Kiedy karmi się nie tylko rodzinę, powtarzalność przestaje być wygodą, a zaczyna być warunkiem, żeby dało się to w ogóle utrzymać.",
        "Jeśli nie prowadzisz noclegów, tylko masz zwykły dom z dziećmi, to działa dokładnie tak, jak się spodziewasz: da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy, a posiłek dla najmłodszego powstaje równolegle z obiadem dla reszty.",
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
    heading: "Kuchnia babiogórska — owies, ziemniak i kwaśne mleko",
    paragraphs: [
      "Kuchnia górali babiogórskich jest opisana etnograficznie i to jest rzadkość, którą warto docenić. Wymienia się w niej żur owsiany, kwaśnicę, hałuski, kluski wykładane, moskole, szulki, kołacze, a z nabiału bundz i żentycę. To nie jest lista wymyślona na potrzeby menu — to opis tego, co dawało się tu wyprodukować.",
      "Widać w niej wprost geografię gminy. Owies i ziemniaki to prawie siedemdziesiąt procent tutejszych zasiewów, bo na tej wysokości pszenica nie ma czego szukać. Nabiał brał się z owiec i krów wypasanych na halach. Kapusta kisiła się w beczce, bo inaczej nie przetrwałaby zimy. Cała ta kuchnia jest odpowiedzią na krótkie lato i kiepską ziemię.",
      "Muszę tu jednak powiedzieć to, co mówię na każdej takiej stronie: nie znalazłam żadnego wpisu z gminy Zawoja na ministerialnej Liście Produktów Tradycyjnych. Moskole i tutejsze sery bywają nazywane „produktem tradycyjnym”, ale w znaczeniu potocznym, nie prawnym. Wolę to rozróżnić, niż udawać, że go nie ma.",
      "Co z tego wynika dla urządzenia? Mniej, niż mogłoby się wydawać, i chcę to powiedzieć uczciwie. Moskola trzeba upiec na blasze, a oscypka zrobić rękami — tego żadne urządzenie nie zastąpi i nie będę twierdzić inaczej. Ale ciasto na kluski wyrabia się samo, żur nie wymaga pilnowania, a kapuśniak czy kwaśnica gotują się bez stania nad garnkiem. To nie jest zmiana tej kuchni. To jest odzyskanie tych godzin, które ona zabiera.",
    ],
  },

  districtsHeading: "Gdzie w gminie Zawoja dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu sołectw, bez żadnej dopłaty za odległość: Zawoi Centrum, Dolnej, Górnej, Mosornego, Przysłopu i Wełczy oraz Skawicy Centrum i Skawicy Sucha Góra.",
    "Warto wiedzieć, jak ta gmina jest zbudowana, bo to nie są dwie zwarte wsie. Zawoja ciągnie się doliną kilkanaście kilometrów i sama gmina określa ją jako największą powierzchniowo wieś w Polsce. Bywa też nazywana najdłuższą — i tu należy się uczciwość: to teza sporna, bo Ochotnica liczy według Biura Rekordów około dwudziestu pięciu kilometrów, a Zawoja osiemnaście do dziewiętnastu. Nikt tego formalnie nie rozstrzygnął, bo nikt takiego rejestru nie prowadzi.",
    "Cała gmina zajmuje sto dwadzieścia dziewięć kilometrów kwadratowych, z czego blisko dwie trzecie to lasy. Nad wszystkim stoi Babia Góra, tysiąc siedemset dwadzieścia pięć metrów, a w Zawoi mieści się siedziba Babiogórskiego Parku Narodowego. Masyw ma status rezerwatu biosfery UNESCO od tysiąc dziewięćset siedemdziesiątego szóstego roku — był jednym z pierwszych na świecie.",
    "O dojeździe powiem wprost, bo nie ma sensu udawać. W gminie Zawoja nie ma kolei i najbliższe stacje to Maków Podhalański oraz Sucha Beskidzka. Koleje Małopolskie dowożą tu autobusem linii A53. Samochodem z Krakowa jest siedemdziesiąt kilka do osiemdziesięciu kilku kilometrów, czyli około półtorej godziny; busem blisko dwie. Ja tę drogę pokonuję i nie doliczam za nią ani złotówki — ale wolę, żebyś wiedziała, ile trwa.",
  ],
  districts: [
    "Zawoja Centrum",
    "Zawoja Dolna",
    "Zawoja Górna",
    "Zawoja Mosorne",
    "Zawoja Przysłop",
    "Zawoja Wełcza",
    "Skawica Centrum",
    "Skawica Sucha Góra",
  ],

  nearbyHeading: "Maków Podhalański, Sucha Beskidzka i Stryszawa też są na mojej trasie",
  nearbyParagraphs: [
    "Do Makowa Podhalańskiego mam stąd kilkanaście kilometrów, dalej jest Sucha Beskidzka, Stryszawa i Bystra-Sidzina. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Maków jest zresztą dla Zawoi naturalną stacją kolejową — jeśli jedziesz stąd pociągiem do Krakowa, to właśnie tam wsiadasz. Najszybszy pociąg pokonuje potem trasę w godzinę i minutę.",
  ],
  nearbyTowns: [
    "Maków Podhalański",
    "Sucha Beskidzka",
    "Stryszawa",
    "Bystra-Sidzina",
    "Zembrzyce",
    "Kraków",
  ],

  about: blokOMnie("do gminy Zawoja", "w powiecie suskim"),

  faq: [
    {
      question: "Mieszkam w Zawoi, ale wysoko, daleko od centrum. Dojedziesz?",
      answer:
        "Dojadę i bez dopłaty — także na Przysłop, Wełczę czy Sucha Górę. Proszę tylko o punkt orientacyjny obok numeru domu, bo Zawoja ciągnie się kilkanaście kilometrów doliną, a numeracja idzie tu wysoko. Zimą uprzedź mnie, jeśli podjazd bywa trudny, to wyjadę odpowiednio wcześniej.",
    },
    ...faqWspolne("w gminie Zawoja"),
    {
      question: "Czy do Zawoi dojadę pociągiem?",
      answer:
        "Nie, w gminie nie ma kolei. Najbliższe stacje to Maków Podhalański i Sucha Beskidzka, a Koleje Małopolskie dowożą tu autobusem linii A53. Samochodem z Krakowa jedzie się około półtorej godziny, busem blisko dwie. Piszę to wprost, bo wolę, żebyś wiedziała wcześniej.",
    },
    {
      question: "Prowadzę agroturystykę. Czy Thermomix nada się do gotowania dla gości?",
      answer:
        "Do śniadań, wypieków, past, zup i sosów — tak, i to jest częsty scenariusz w tej gminie. Powiem jednak uczciwie: to nie jest urządzenie gastronomiczne i przy większej liczbie gości gotuje się partiami. Na prezentacji chętnie policzę to na Waszych realnych ilościach, a nie na przepisie dla czterech osób, żebyś wiedziała, na czym stoisz.",
    },
  ],

  geo: { lat: 49.6417, lng: 19.5583 },
};
