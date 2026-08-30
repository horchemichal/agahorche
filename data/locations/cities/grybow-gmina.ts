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
 * GMINA WIEJSKA GRYBÓW — powiat nowosądecki.
 * 25 344 mieszkańców (31.12.2024), 153,2 km², 16 SOŁECTW.
 * Ok. 1/10 obszaru powiatu. Otacza miasto Grybów ze wszystkich stron.
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje GMINA MIEJSKA GRYBÓW
 * (plik `grybow.ts`) — 17 km², 5 928 mieszkańców, 5 osiedli.
 * Urząd TEJ gminy mieści się W MIEŚCIE, ul. Jakubowskiego 33.
 * WSI O NAZWIE GRYBÓW NIE ISTNIEJE.
 *
 * OŚ STRONY: FLORYNKA — WIEŚ, KTÓRA PRZEZ 16 MIESIĘCY BYŁA STOLICĄ
 * PAŃSTWA. Oś unikalna w skali całego serwisu.
 * ⚠️ ŚWIADOMY WYBÓR: Sądecki Bartnik w Stróżach jest materiałem
 * mocniejszym kulinarnie, ale oś „pszczoły i miód” jest już zajęta
 * przez Spytkowice nowotarskie (`spytkowice-nowotarskie.ts`).
 * Dlatego BARTNIK WCHODZI TU JAKO SEKCJA KULINARNA, a nie jako oś —
 * i jest wtedy wyraźnie odróżniony: tam mały skansen jako pamiątka,
 * tu żywy zakład eksportowy. NIE ODWRACAĆ TEGO PODZIAŁU.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — FLORYNKA: 5 GRUDNIA 1918 R. proklamowano tu RUSKĄ LUDOWĄ
 *   (NARODOWĄ) REPUBLIKĘ ŁEMKÓW; powołano Naczelną Radę
 *   Łemkowszczyzny. FLORYNKA BYŁA STOLICĄ.
 *   12 MARCA 1920 R. — powołano Komitet Wykonawczy pełniący funkcję
 *   rządu: premier JAROSŁAW KACZMARCZYK, spraw wewnętrznych
 *   ks. DMYTRO CHYLAK, rolnictwo MYKOŁA HROMOSIAK, spraw
 *   zagranicznych ks. WASILIJ KURYŁŁO.
 *   STYCZEŃ 1921 — aresztowanie członków rządu pod zarzutem zdrady
 *   stanu; UNIEWINNIENI W PROCESIE, ale to faktyczny koniec.
 *   REPUBLIKA ISTNIAŁA 16 MIESIĘCY.
 *   ⚠️ PISAĆ RZECZOWO, BEZ OCEN POLITYCZNYCH,
 * — FLORYNKA — historia wsi: pierwsza wzmianka 1391 (nadanie
 *   Władysława Jagiełły dla biskupstwa krakowskiego); 1574 osadzenie
 *   na prawie wołoskim; pod koniec XIX w. ok. 3 025 mieszkańców.
 *   Cerkiew greckokatolicka św. Michała Archanioła z 1875 r.
 *   Cmentarz wojenny z I wojny światowej. Rodacy: WALERY JAWORSKI
 *   (lekarz), EMILIAN CZYRNIAŃSKI (chemik). Po II wojnie ludność
 *   łemkowska wysiedlona, głównie na Ziemie Zachodnie,
 * — SĄDECKI BARTNIK, STRÓŻE 235: Gospodarstwo Pasieczne sp. z o.o.,
 *   ZAŁOŻONE 1973 przez rodzinę KASZTELEWICZÓW (Anna i Janusz);
 *   prezes obecnie KRZYSZTOF KASZTELEWICZ. 1 500 RODZIN PSZCZELICH;
 *   w szczycie sezonu do 160 mln pszczół. PRZYCHODY BLISKO
 *   118 MLN ZŁ (2025). EKSPORT DO OK. 30 PAŃSTW.
 *   ⚠️ FIRMA SAMA PISZE, ŻE „NALEŻY DO GRONA NAJWIĘKSZYCH
 *   W POLSCE” — NIE TWIERDZI, ŻE JEST NAJWIĘKSZA.
 *   NIE PISAĆ „największa pasieka w Polsce”,
 * — MUZEUM PSZCZELARSTWA — otwarte 2000 r. PONAD 100 ULI: kłody
 *   bartne, ule figuralne, koszki słomiane. Kłoda z 1822 r. zwana
 *   „KRÓL”. ⚠️ FRAZY „NAJWYŻSZA W POLSCE” o Bartnej Kłodzie
 *   Karpackiej NIE UŻYWAĆ — marketing,
 * — „BIESIADA U BARTNIKA” — PIERWSZA NIEDZIELA LIPCA. Wykłady
 *   pszczelarskie, miodobranie z degustacją, kuchnia regionalna,
 * — MADONNA Z KRUŻLOWEJ — ok. 1410 r., pochodzi z kościoła
 *   parafialnego Narodzenia NMP w KRUŻLOWEJ WYŻNEJ (drewniany,
 *   1520, fundacja Jana Pieniążka). Dziś w Muzeum Narodowym
 *   w Krakowie, oddział Ciołek. MNK: „najsławniejszy przykład
 *   pięknego stylu w rzeźbie z początku XV wieku”,
 * — 16 SOŁECTW: Biała Niżna, Binczarowa, Chodorowa, Cieniawa,
 *   Florynka, Gródek, Kąclowa, Krużlowa Niżna, Krużlowa Wyżna,
 *   Polna, Ptaszkowa, Siołkowa, Stara Wieś, Stróże, Wawrzka,
 *   Wyskitna,
 * — SZLAK ARCHITEKTURY DREWNIANEJ: Ptaszkowa — kościół Wszystkich
 *   Świętych z 1555 r.; Polna — kościół św. Andrzeja Ap., XVI w.;
 *   Binczarowa — cerkiew greckokatolicka św. Dymitra z 1760/1797,
 *   dziś kościół rzymskokatolicki,
 * — CENTRUM SPORTÓW ZIMOWYCH W PTASZKOWEJ: dwie trasy
 *   narto-rolkowe/biegowe 1 000 m i 1 600 m, nawierzchnia asfaltowa,
 *   oświetlenie, naśnieżanie, HOMOLOGACJA POLSKIEGO ZWIĄZKU
 *   NARCIARSKIEGO. ⚠️ WYCIĄG NARCIARSKI JEST NIECZYNNY —
 *   NIE PISAĆ O WYCIĄGU,
 * — REGON: 2 016 podmiotów (31.12.2024); urząd podaje 693 podmioty
 *   w budownictwie (2021),
 * — GÓRY GRYBOWSKIE (Beskid Niski): JAWORZE 882 M, Czerszla 877 m,
 *   Ubocz 820 m, Chełm 779 m,
 * — KOLEJ: linia 96 Tarnów–Leluchów, czynna od 1876; STRÓŻE
 *   TO WĘZEŁ KOLEJOWY. ⚠️ NUMERU DRUGIEJ LINII NIE POTWIERDZONO —
 *   nie podawać.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY PRACOWNIKÓW SĄDECKIEGO BARTNIKA. Nie potwierdzona,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanego tej gminie.
 *   Istnieje wpis „sądecki miód spadziowy”, ale JEGO OBSZARU
 *   I PRZYPISANIA DO GMINY NIE POTWIERDZONO. NIE PISAĆ, ŻE TO
 *   PRODUKT TEJ GMINY,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — RANKINGU „jedna z największych gmin wiejskich w Polsce”.
 *   Nie potwierdzony,
 * — ROKU ZAŁOŻENIA ZESPOŁU „ECHO JAWORZA” z Ptaszkowej.
 *
 * PUŁAPKI:
 * — BIAŁA NIŻNA to sołectwo TEJ gminy; BIAŁA WYŻNA to osiedle MIASTA,
 * — MADONNA I KOŚCIÓŁ Z 1520 R. SĄ W KRUŻLOWEJ WYŻNEJ, nie Niżnej,
 * — STRÓŻE — jest kilka wsi o tej nazwie w Polsce. Ta jest tutaj.
 */

export const GRYBOW_GMINA: CityContent = {
  slug: "grybow-gmina",
  h1: "Thermomix gmina Grybów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Grybów — cena i prezentacja",
  seoDescription:
    "Thermomix w gminie wiejskiej Grybów: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich 16 sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Grybów — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Grybów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do wszystkich szesnastu sołectw gminy wiejskiej Grybów — od Stróż i Ptaszkowej po Florynkę i Krużlową — przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie szesnaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Grybów – jak wygląda prezentacja?",
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
      heading: "Wieś, która przez szesnaście miesięcy była stolicą",
      paragraphs: [
        "Florynka jest dziś jednym z szesnastu sołectw tej gminy, wsią jak każda inna. Sto lat temu była stolicą państwa — i to nie jest przenośnia ani lokalna legenda.",
        "Piątego grudnia tysiąc dziewięćset osiemnastego roku, kilka tygodni po odzyskaniu przez Polskę niepodległości, proklamowano tu Ruską Ludową Republikę Łemków i powołano Naczelną Radę Łemkowszczyzny. Florynka została jej siedzibą.",
        "Dwunastego marca tysiąc dziewięćset dwudziestego roku powstał komitet wykonawczy pełniący funkcję rządu. Premierem został Jarosław Kaczmarczyk, sprawy wewnętrzne objął ksiądz Dmytro Chylak, rolnictwo Mykoła Hromosiak, a sprawy zagraniczne ksiądz Wasilij Kuryłło. To były cztery konkretne teki i czterech konkretnych ludzi.",
        "Skończyło się w styczniu tysiąc dziewięćset dwudziestego pierwszego. Członków rządu aresztowano pod zarzutem zdrady stanu i w procesie ich uniewinniono — ale republika już nie wróciła. Przetrwała szesnaście miesięcy.",
        "Sama wieś jest dużo starsza. Pierwsza wzmianka pochodzi z tysiąc trzysta dziewięćdziesiątego pierwszego roku, kiedy Władysław Jagiełło nadał te ziemie biskupstwu krakowskiemu; w tysiąc pięćset siedemdziesiątym czwartym osadzono ją na prawie wołoskim. Pod koniec dziewiętnastego wieku mieszkało tu ponad trzy tysiące osób. Stoi tu murowana cerkiew świętego Michała Archanioła z tysiąc osiemset siedemdziesiątego piątego roku i cmentarz z pierwszej wojny światowej.",
        "Po drugiej wojnie ludność łemkowską wysiedlono, w większości na Ziemie Zachodnie. Dzisiejsza Florynka to inni ludzie i ten sam krajobraz.",
        "Gmina ma zresztą więcej takich miejsc, o których nikt nie pamięta, że są tutaj. W Krużlowej Wyżnej stał drewniany kościół z tysiąc pięćset dwudziestego roku, a z niego pochodzi Madonna z Krużlowej — rzeźba z około tysiąc czterysta dziesiątego roku, którą Muzeum Narodowe w Krakowie nazywa najsławniejszym przykładem pięknego stylu w polskiej rzeźbie. Dziś stoi w Krakowie, ale zaczynała tutaj.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Grybów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Koniecznie podaj sołectwo. Gmina ma sto pięćdziesiąt trzy kilometry kwadratowe — mniej więcej jedną dziesiątą całego powiatu — i szesnaście wsi rozrzuconych po Górach Grybowskich. Jazda do Florynki to zupełnie co innego niż do Cieniawy.",
        "Powiedz też od razu, czy chodzi o gminę wiejską, czy o miasto Grybów. To dwie osobne jednostki o tej samej nazwie i obie obsługuję, ale miasto ma u mnie własną stronę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/grybow",
          label: "Mieszkasz w mieście Grybów? Tu jest jego strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Grybów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Miasto powiatowe rozsypane na szesnaście wsi",
      paragraphs: [
        "W tej gminie mieszka ponad dwadzieścia pięć tysięcy osób — tyle co w niejednym mieście powiatowym — tylko że nie ma tu centrum. Wszystko rozkłada się na szesnaście wsi na stu pięćdziesięciu trzech kilometrach kwadratowych, a urząd stoi w mieście, które do gminy nie należy.",
        "Ma to jeden bardzo praktyczny skutek: życie nie skupia się w jednym punkcie. Szkoła jest w jednej wsi, przychodnia w drugiej, praca w trzeciej albo w Nowym Sączu, a pociąg ze Stróż — bo Stróże są węzłem kolejowym — jedzie w kilku kierunkach naraz.",
        "Dzień jest więc poszatkowany dojazdami i to widać przy stole. Ktoś wraca o czwartej ze szkoły, ktoś o szóstej z pociągu, ktoś o ósmej z budowy. Jeden wspólny obiad o stałej porze zdarza się głównie w niedzielę.",
        "Najbardziej praktyczna rzecz jest przy takim rozkładzie jedna. Danie jednogarnkowe gotuje się bez człowieka, samo się wyłącza i czeka — nie stygnie w garnku od południa i nie przypala się, bo nikt nie zszedł na dół.",
        "Druga to gotowanie z zapasem, sensowne przy każdym poszatkowanym tygodniu. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek na drogę — robione seriami w niedzielę, w jednym naczyniu.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może przygotować nastolatek wracający pierwszy. W domu, z którego wszyscy wyjeżdżają w różne strony, to nie jest ciekawostka, tylko odciążenie.",
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
    heading: "Stróże i miód — pszczelarstwo, które stało się branżą",
    paragraphs: [
      "W Stróżach działa od tysiąc dziewięćset siedemdziesiątego trzeciego roku gospodarstwo pasieczne założone przez rodzinę Kasztelewiczów, dziś prowadzone przez drugie pokolenie. Skala jest tu zupełnie inna, niż zwykle bywa w pszczelarstwie: półtora tysiąca rodzin pszczelich, w szczycie sezonu do stu sześćdziesięciu milionów owadów, przychody sięgające stu osiemnastu milionów złotych i eksport do około trzydziestu krajów.",
      "Piszę o tym, bo to nietypowe. W Polsce pszczelarstwo jest w przygniatającej większości zajęciem hobbystycznym — kilka uli w ogrodzie, miód dla rodziny i sąsiadów. Tutaj wyrosło z tego przedsiębiorstwo z rozlewnią, laboratorium i skupem od pszczelarzy z kilku krajów.",
      "Obok firmy działa od dwa tysiące roku muzeum pszczelarstwa z ponad setką uli: kłodami bartnymi, ulami figuralnymi, koszkami słomianymi. Najstarsza kłoda pochodzi z tysiąc osiemset dwudziestego drugiego roku i nazywa się „Król”. W pierwszą niedzielę lipca odbywa się tu Biesiada u Bartnika — z wykładami, miodobraniem, degustacją i kuchnią regionalną.",
      "Powiem uczciwie, czego nie potwierdziłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie. Istnieje wprawdzie wpis dla sądeckiego miodu spadziowego, ale jego obszaru nie umiem przypisać konkretnej gminie, więc nie będę tego robić.",
      "Miód jest za to w kuchni składnikiem wdzięcznym i konkretnym. Wchodzi do ciast, pierników, marynat do mięsa, dressingów, napojów. Urządzenie robi z nim wszystko, co wymaga równomiernego rozprowadzenia w cieple — ciasta miodowe, kremy, sosy, karmelizowanie. Czego nie zrobi, mówię wprost: nie odwiruje miodu z ramek i nie zastąpi pszczół. Zabiera ucieranie, wyrabianie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Grybów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich szesnastu, bez żadnej dopłaty za odległość. Gmina zajmuje sto pięćdziesiąt trzy kilometry kwadratowe — mniej więcej jedną dziesiątą powiatu nowosądeckiego — i liczy ponad dwadzieścia pięć tysięcy mieszkańców.",
    "Sołectwa to: Biała Niżna, Binczarowa, Chodorowa, Cieniawa, Florynka, Gródek, Kąclowa, Krużlowa Niżna, Krużlowa Wyżna, Polna, Ptaszkowa, Siołkowa, Stara Wieś, Stróże, Wawrzka i Wyskitna. Miasta w gminie nie ma — Grybów, w którym mieści się urząd, to osobna jednostka.",
    "Teren to Góry Grybowskie w Beskidzie Niskim; najwyższy szczyt, Jaworze, ma osiemset osiemdziesiąt dwa metry. Na Szlaku Architektury Drewnianej stoją tu trzy obiekty: kościół Wszystkich Świętych w Ptaszkowej z tysiąc pięćset pięćdziesiątego piątego roku, kościół świętego Andrzeja w Polnej z szesnastego wieku i dawna cerkiew świętego Dymitra w Binczarowej.",
    "W Ptaszkowej działa centrum sportów zimowych z dwiema trasami narto-rolkowymi i biegowymi, o długości kilometra i tysiąca sześciuset metrów, z oświetleniem, naśnieżaniem i homologacją Polskiego Związku Narciarskiego. Wyciągu narciarskiego tam nie ma — jest nieczynny, więc nie będę o nim pisać.",
    "Dojazd: przez gminę biegnie linia kolejowa z Tarnowa do Leluchowa, czynna od tysiąc osiemset siedemdziesiątego szóstego roku, a Stróże są węzłem kolejowym. Samochodem prowadzą tędy drogi w kierunku Nowego Sącza, Gorlic, Tarnowa i Krynicy.",
  ],
  districts: [
    "Stróże",
    "Ptaszkowa",
    "Biała Niżna",
    "Florynka",
    "Kąclowa",
    "Cieniawa",
    "Krużlowa Wyżna i Niżna",
    "Siołkowa, Polna, Binczarowa",
  ],

  nearbyHeading: "Miasto Grybów, Korzenna i Krynica też są na mojej trasie",
  nearbyParagraphs: [
    "W środku gminy leży miasto Grybów — osobna jednostka, w której mieści się zresztą urząd tej gminy. Dojeżdżam do obu tak samo, bez dopłaty; miasto ma u mnie własną stronę.",
    "Gmina graniczy też z Krynicą-Zdrojem, Łabową, Kamionką Wielką, Chełmcem i Korzenną. Do żadnej z nich nie doliczam kosztu dojazdu.",
  ],
  nearbyTowns: [
    "Grybów",
    "Korzenna",
    "Kamionka Wielka",
    "Krynica-Zdrój",
    "Łabowa",
    "Nowy Sącz",
  ],

  about: blokOMnie("do gminy Grybów", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Czym gmina Grybów różni się od miasta Grybów?",
      answer:
        "To dwie osobne gminy o tej samej nazwie. Gmina wiejska ma sto pięćdziesiąt trzy kilometry kwadratowe, ponad dwadzieścia pięć tysięcy mieszkańców i szesnaście sołectw — od Stróż i Ptaszkowej po Florynkę. Miasto ma siedemnaście kilometrów i niecałe sześć tysięcy mieszkańców. Urząd gminy wiejskiej mieści się w mieście, a wsi o nazwie Grybów nie ma wcale. Dojeżdżam i tu, i tam, bez dopłaty.",
    },
    ...faqWspolne("w gminie Grybów"),
    {
      question: "Mieszkam we Florynce, na końcu gminy. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie szesnaście sołectw traktuję tak samo, niezależnie od tego, jak daleko od Grybowa leżą. Przy umawianiu podaj tylko nazwę wsi, żebym dobrze rozplanowała trasę.",
    },
  ],

  geo: { lat: 49.6241, lng: 20.9479 },
};
