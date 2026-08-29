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
 * BYSTRA-SIDZINA — gmina wiejska, powiat suski. DWA sołectwa,
 * dwie wsie, ok. 6,8–6,9 tys. mieszkańców na 80,5 km².
 * Gmina powstała w 1992 r. przez wydzielenie z gminy Jordanów.
 *
 * OŚ STRONY: SKANSEN W SIDZINIE, założony w 1963 r. dlatego,
 * że ELEKTRYFIKACJA WSI WYPIERAŁA DAWNE SPRZĘTY. To jest najlepszy
 * możliwy materiał na tę konkretną stronę, bo pozwala uczciwie
 * postawić pytanie, które i tak wisi w powietrzu przy sprzedaży
 * elektrycznego urządzenia kuchennego. Strona nie ucieka od niego
 * i nie robi z tego taniego morału.
 *
 * Druga oś: GMINA BEZ ŚRODKA. Dwie wsie, dwa sołectwa, dwie szkoły,
 * dwie organizacje gospodyń, dwie osobne imprezy — a urząd stoi
 * w BYSTREJ, choć SIDZINA jest większa i ludnościowo, i obszarowo.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SOŁECTWA (2): Bystra Podhalańska (2 319 ha) i Sidzina (5 724 ha).
 *   Siedziba urzędu: 34-235 Bystra Podhalańska 467,
 * — SKANSEN W SIDZINIE – MUZEUM KULTURY LUDOWEJ. Założony w 1963 r.
 *   przy okazji obchodów 400-lecia lokacji Sidziny (lokacja ok. 1563).
 *   Założyciele: ADAM LEŚNIAK (nauczyciel, regionalista)
 *   i ks. JÓZEF ŚWISTEK (proboszcz, ofiarował grunt).
 *   POWÓD ZAŁOŻENIA: elektryfikacja wsi wypierała dawne sprzęty.
 *   OSIEM OBIEKTÓW: chałupa Banasika (1807), chałupa Anny Kozioł
 *   (1901), lamus/spichlerz (1897), kuźnia (koniec XIX w.), chałupa
 *   wójta Maja (2. poł. XVIII w.), dzwonnica loretańska (1937),
 *   młyn wodny (pocz. XX w.), chałupa Gałki (koniec XIX w.).
 *   Do 2009 r. oddział Orawskiego Parku Etnograficznego; od 2009 r.
 *   samodzielna samorządowa instytucja kultury gminy.
 *   Sezon: maj – 15 października,
 * — LUDNOŚĆ: 6 811 (GUS) i 6 920 (2019). Sidzina 3 514,
 *   Bystra Podhalańska 3 306 (NSP 2021). SIDZINA JEST WIĘKSZA
 *   — o ok. 200 osób i ponad dwukrotnie obszarowo,
 * — POWIERZCHNIA 80,5 km² (8 043 ha): 3 066 ha użytków rolnych,
 *   4 361 ha lasów. Średni wiek 38,4 lat,
 * — GOSPODARKA: 785 podmiotów REGON (2024), 688 osób fizycznych;
 *   przetwórstwo i budownictwo razem 55,4%. Bystra: 364 podmioty
 *   (budownictwo 52,2%). Sidzina: 421 podmiotów, z tego 413 mikro
 *   (przetwórstwo 42,4%). Dominuje STOLARSTWO I OBRÓBKA DREWNA.
 *   72 pracujących na 1000 mieszkańców. Bezrobocie 4,4%,
 * — KGW „BYSTRZANKI” w Bystrej Podhalańskiej — założone 1967 r.,
 *   początkowo ok. 100 członkiń, 40-lecie w 2007 r.,
 * — STOWARZYSZENIE GOSPODYŃ „SIDZINIANKI” — korzenie w kole z końca
 *   lat 50., reaktywacja 2001, zespół śpiewaczy od 2006,
 *   rejestracja jako stowarzyszenie 2011, ok. 40 członkiń,
 * — PRODUKTY LOKALNE: SYREK WĘDZONY (ser krowi, „tradycja ponad
 *   100-letnia”) i KOŁOC SIDZIŃSKI (pieczywo z dwóch ciast:
 *   serowego i chlebowego), miód wielokwiatowy i spadziowy.
 *   ⚠️ To znak promocyjny „Łączy nas Babia Góra”, konkurs Grupy
 *   Partnerskiej — NIE wpis na Listę Produktów Tradycyjnych,
 * — JUZYNA NA HOLI — Hala Krupowa, pierwsza niedziela sierpnia.
 *   XXVII edycja w sierpniu 2026 r., XXV w 2024 r. Msza po góralsku,
 *   kapele, Związek Podhalan; organizator GOK Bystra-Sidzina,
 * — ŚWIĘTO BYSTREJ PODHALAŃSKIEJ — coroczne, ku czci
 *   bł. ks. Stanisława Pyrtka. Numeracji edycji brak,
 * — DOJAZD: przystanek Bystra Podhalańska na linii nr 98.
 *   ⚠️ LINIA 98 JEST W MODERNIZACJI (patrz `jordanow.ts`) i ruch
 *   pasażerski bywa zawieszony, kursuje komunikacja zastępcza.
 *   Dwa źródła podają sprzeczne informacje o kursowaniu, dlatego
 *   strona NIE OBIECUJE POCIĄGU, tylko odsyła do rozkładu.
 *   SIDZINA NIE MA KOLEI W OGÓLE.
 *   Drogą: ok. 54 km z Krakowa przez Jordanów; teren górski.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — OBIETNICY DOJAZDU KOLEJĄ. Patrz wyżej — sprzeczne źródła
 *   plus trwająca modernizacja. Strona mówi wprost, żeby sprawdzić
 *   rozkład, i przypomina, że Sidzina kolei nie ma wcale,
 * — NAZWANIA SYRKA I KOŁOCA „PRODUKTEM TRADYCYJNYM” w sensie
 *   prawnym. To znak promocyjny lokalnej grupy partnerskiej,
 * — DOKŁADNEJ LICZBY MIESZKAŃCÓW. Dwie liczby z różnych lat,
 * — ROKU LOKACJI BYSTREJ. Niepotwierdzony,
 * — LICZBY PRZYSIÓŁKÓW. Niepotwierdzona.
 *
 * PUŁAPKI:
 * — BYSTRA ≠ BYSTRA. Nasza to BYSTRA PODHALAŃSKA, powiat suski,
 *   kod 34-235. Bystra w powiecie bielskim (gmina Wilkowice,
 *   woj. śląskie) to inna wieś — tam jest sanatorium i grób
 *   Juliusza Kossaka. Jeśli źródło wspomina Bielsko-Białą,
 *   Wilkowice, Szczyrk albo Klimczok — złe źródło,
 * — SIDZINA ≠ SIDZINA. Jest też Sidzina w woj. opolskim,
 * — NIE MA MIEJSCOWOŚCI O NAZWIE „BYSTRA-SIDZINA”. To nazwa gminy
 *   złożona z dwóch wsi,
 * — BABIA GÓRA NIE LEŻY W TEJ GMINIE. Gmina sięga Pasma Policy
 *   i Hali Krupowej; sąsiaduje z terenem babiogórskim, ale szczytu
 *   nie ma,
 * — „SUSKA SECHLOŃSKA” nie pochodzi ani stąd, ani z Suchej
 *   Beskidzkiej — to Sechna w powiecie limanowskim.
 */

export const BYSTRA_SIDZINA: CityContent = {
  slug: "bystra-sidzina",
  h1: "Thermomix Bystra-Sidzina – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Bystra-Sidzina — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Bystra-Sidzina: bezpłatna prezentacja TM7 u Ciebie w kuchni — Bystra Podhalańska i Sidzina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bystra-Sidzina — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Bystra-Sidzina. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Bystra-Sidzina przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam i do Bystrej, i do Sidziny, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("Bystra i Sidzina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Bystra-Sidzina – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Bystrej, jak w Sidzinie.",
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
      heading: "Skansen założony dlatego, że do wsi przyszedł prąd",
      paragraphs: [
        "W tysiąc dziewięćset sześćdziesiątym trzecim roku Sidzina obchodziła czterysta lat od lokacji. Przy tej okazji dwóch ludzi — nauczyciel i regionalista Adam Leśniak oraz proboszcz, ksiądz Józef Świstek, który oddał na ten cel grunt — założyło skansen. Powód był całkiem konkretny i nie miał w sobie nic z sentymentu: do wsi przyszła elektryczność i dawne sprzęty zaczęły znikać z domów szybciej, niż ktokolwiek nadążał je opisać.",
        "Zebrali osiem obiektów, które stoją tam do dziś. Najstarsza jest chałupa wójta Maja z drugiej połowy osiemnastego wieku. Jest chałupa Banasika z tysiąc osiemset siódmego, spichlerz z tysiąc osiemset dziewięćdziesiątego siódmego, kuźnia z końca dziewiętnastego wieku, młyn wodny, dzwonnica loretańska z tysiąc dziewięćset trzydziestego siódmego. Do dwa tysiące dziewiątego roku skansen był oddziałem Orawskiego Parku Etnograficznego, potem stał się samodzielną instytucją gminy.",
        "Piszę o tym na stronie, na której sprzedaję elektryczne urządzenie kuchenne, i mam pełną świadomość, jak to wygląda. Więc powiem wprost, co o tym myślę, zamiast udawać, że nie widzę problemu.",
        "Ten skansen nie powstał przeciw prądowi. Powstał dlatego, że ktoś zauważył, iż zmiana idzie szybko i warto zapisać, co było przedtem. Nikt w Sidzinie nie wrócił do żaren ani do prania w potoku, bo nikt nie tęsknił za robotą, która zabierała cały dzień. Tęskni się za smakiem i za tym, że wszyscy siadali razem — a nie za tym, ile godzin trzeba było przy tym stać.",
        "I to jest dokładnie ta granica, po której chcę stać. Urządzenie nie zastąpi przepisu po babci ani wprawy w rękach. Zabiera tarcie, ucieranie, mieszanie i pilnowanie, żeby nie przywarło — czyli te same czynności, których pozbyto się tu sześćdziesiąt lat temu razem z żarnami. Jeśli w efekcie ktoś ugotuje w tygodniu obiad zamiast go odpuścić, to jest to zmiana w tę stronę, w którą szedł ten skansen, a nie przeciw niej.",
        "Nie będę udawać, że to argument sprzedażowy. To raczej rzecz, którą wolę powiedzieć od razu, niż zostawić niedopowiedzianą.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Bystra-Sidzina?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy to Bystra, czy Sidzina, i podaj punkt orientacyjny. Sidzina zajmuje ponad pięć i pół tysiąca hektarów, ciągnie się w stronę Pasma Policy i zabudowa jest tam mocno rozproszona — sam numer domu bywa mylący.",
        "Zimą uprzedź mnie, jeśli podjazd pod dom bywa trudny. Nie po to, żeby odmówić — po to, żeby wyjechać wcześniej. To teren górski i wolę doliczyć sobie pół godziny, niż spóźnić się na umówioną wizytę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Bystra-Sidzina"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której co drugą firmę stanowi warsztat",
      paragraphs: [
        "Na siedemset osiemdziesiąt pięć zarejestrowanych podmiotów w tej gminie ponad połowa działa w przetwórstwie i budownictwie, a wśród nich dominuje stolarstwo i obróbka drewna. W Bystrej ponad połowa firm to budownictwo, w Sidzinie ponad czterdzieści procent to przetwórstwo. Prawie wszystkie są mikroskopijne — sześćset osiemdziesiąt osiem prowadzą osoby fizyczne.",
        "To znaczy, że jeżdżę tu do domów, w których praca jest za ścianą albo na podwórku. Warsztat stolarski przy domu ma swój rytm: robota od rana, przerwa wtedy, kiedy wypada, i obiad, który musi być gotowy, gdy ktoś wejdzie do kuchni w zakurzonych ubraniach na dwadzieścia minut.",
        "Praktyczna korzyść jest tu bardzo konkretna. Danie można wstawić rano i wrócić do niego, kiedy się da — gotuje się bez pilnowania i samo wyłącza. Nie stygnie w garnku od dziesiątej, nie przypala się, bo ktoś zapomniał zejść z drabiny. To brzmi drobno, ale w domu z warsztatem jest to codzienna sprawa.",
        "Druga rzecz to gotowanie z zapasem, bo tu obiad rzadko jada się o jednej porze. Podwójna porcja zupy, sos na kilka dni, pasty kanapkowe, chleb. W jednym naczyniu, seriami — a potem tylko odgrzewane, kiedy komu wypadnie.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w domu, w którym oboje rodzice pracują na miejscu, ale są zajęci, to bywa realnie potrzebne.",
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
    heading: "Kołoc sidziński i syrek wędzony — z jednym zastrzeżeniem",
    paragraphs: [
      "Ta gmina ma dwie rzeczy, o których da się napisać coś konkretnego, i to rzadkość. Pierwsza to kołoc sidziński — pieczywo robione z dwóch ciast naraz, serowego i chlebowego. Druga to syrek wędzony, ser krowi, którego tradycję określa się tu na ponad sto lat.",
      "I od razu zastrzeżenie, bez którego byłoby to nieuczciwe: oba noszą znak promocyjny „Łączy nas Babia Góra”, przyznawany w konkursie lokalnej grupy partnerskiej. To nie jest wpis na ministerialną Listę Produktów Tradycyjnych — żadnego wpisu z tej gminy nie znalazłam. Różnica jest realna i wolę ją nazwać, niż zatrzeć.",
      "Kołoc jest przy tym ciekawy sam w sobie, bo pokazuje logikę tutejszej kuchni. Dwa ciasta w jednym wypieku to sposób na to, żeby ser, którego było pod dostatkiem, i mąka, której było mniej, dały razem coś sytego. Cała kuchnia beskidzkiego podgórza jest zbudowana na takich kompromisach.",
      "Podtrzymują to dziś dwie organizacje gospodyń, po jednej na wieś. Bystrzanki działają od tysiąc dziewięćset sześćdziesiątego siódmego roku, a początkowo liczyły około stu członkiń. Sidzinianki mają korzenie w kole z końca lat pięćdziesiątych, reaktywowały się w dwa tysiące pierwszym, od dwa tysiące szóstego prowadzą zespół śpiewaczy i liczą dziś około czterdziestu osób.",
      "Co z tego wynika dla urządzenia? Przy kołocu — mniej, niż mogłoby się wydawać, i mówię to wprost. Wypiek zostaje w piekarniku, a wprawa w rękach. Ale ciasto wyrabia się samo, masa serowa powstaje bez ucierania, a przy robieniu na większą liczbę osób to właśnie te dwie czynności zabierają najwięcej czasu. Sera wędzonego urządzenie nie zrobi w ogóle i nie będę twierdzić inaczej.",
    ],
  },

  districtsHeading: "Gdzie w gminie Bystra-Sidzina dojeżdżam?",
  districtsParagraphs: [
    "Do obu wsi, bez żadnej dopłaty za odległość: do Bystrej Podhalańskiej i do Sidziny. To cała gmina — nie ma tu trzeciego sołectwa ani miejscowości o nazwie Bystra-Sidzina. Sama nazwa gminy jest złożona z dwóch wsi i bywa myląca.",
    "Warto znać jeden szczegół, bo dużo o tej gminie mówi. Urząd stoi w Bystrej, ale Sidzina jest większa: ma około trzech i pół tysiąca mieszkańców wobec trzech tysięcy trzystu w Bystrej i zajmuje ponad dwukrotnie większy obszar — pięć tysięcy siedemset hektarów wobec dwóch tysięcy trzystu. To gmina bez wyraźnego środka: dwie szkoły, dwa przedszkola, dwie organizacje gospodyń, dwie osobne doroczne imprezy. Powstała zresztą dopiero w tysiąc dziewięćset dziewięćdziesiątym drugim roku, przez wydzielenie z gminy Jordanów.",
    "Cała gmina zajmuje osiemdziesiąt i pół kilometra kwadratowego, z czego ponad połowę stanowią lasy. Sidzina sięga Pasma Policy i Hali Krupowej — to tam odbywa się co roku, w pierwszą niedzielę sierpnia, Juzyna na Holi, impreza obchodząca w dwa tysiące dwudziestym szóstym roku dwudziestą siódmą edycję.",
    "O dojeździe uczciwie i bez obiecywania. W Bystrej Podhalańskiej jest przystanek kolejowy na linii z Suchej Beskidzkiej do Chabówki, ale linia ta przechodzi modernizację i kursowanie bywa zawieszane na rzecz komunikacji zastępczej — sprawdź rozkład przed podróżą, bo źródła podają sprzeczne informacje. Sidzina nie ma kolei w ogóle. Samochodem z Krakowa jest tu około pięćdziesięciu czterech kilometrów przez Jordanów, ale to teren górski i realnie trzeba liczyć od godziny do półtorej.",
  ],
  districts: [
    "Bystra Podhalańska",
    "Sidzina",
  ],

  nearbyHeading: "Jordanów, Zawoja i Maków Podhalański też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina powstała z wydzielenia z gminy Jordanów i do miasta oraz do okolicznych wsi — Osielca, Toporzyska, Naprawy — mam stąd najbliżej. Dalej są Zawoja, Maków Podhalański i Sucha Beskidzka. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Sidzinie, w części sięgającej w stronę Policy, i wydaje Ci się, że to już koniec świata — powiem tak: dojeżdżam tam tak samo jak wszędzie indziej, tylko wyjeżdżam wcześniej.",
  ],
  nearbyTowns: [
    "Jordanów",
    "Osielec",
    "Toporzysko",
    "Zawoja",
    "Maków Podhalański",
    "Sucha Beskidzka",
    "Kraków",
  ],

  about: blokOMnie("do gminy Bystra-Sidzina", "w powiecie suskim"),

  faq: [
    {
      question: "Czy to ta Bystra koło Bielska-Białej?",
      answer:
        "Nie i warto to od razu rozróżnić, bo pomyłka jest bardzo częsta. Ta Bystra to Bystra Podhalańska w powiecie suskim, kod pocztowy 34-235, w gminie Bystra-Sidzina. Bystra koło Bielska-Białej leży w gminie Wilkowice w województwie śląskim — to tam jest sanatorium i grób Juliusza Kossaka. Dwie różne wsie o tej samej nazwie.",
    },
    ...faqWspolne("w gminie Bystra-Sidzina"),
    {
      question: "Czy do Sidziny dojadę pociągiem?",
      answer:
        "Do Sidziny nie — ta wieś nie ma kolei w ogóle. Przystanek jest w Bystrej Podhalańskiej, na linii z Suchej Beskidzkiej do Chabówki, ale linia przechodzi modernizację i kursowanie bywa zawieszane na rzecz komunikacji zastępczej. Sprawdź rozkład przed podróżą. Ja przyjeżdżam samochodem, więc dla umówienia prezentacji to bez znaczenia.",
    },
    {
      question: "Mieszkam w Sidzinie, wysoko, daleko od drogi. Dojedziesz zimą?",
      answer:
        "Dojadę i bez dopłaty. Sidzina zajmuje ponad pięć i pół tysiąca hektarów i ciągnie się w stronę Pasma Policy, więc proszę tylko o punkt orientacyjny obok adresu i o uprzedzenie, jeśli podjazd bywa trudny. Wtedy po prostu wyjeżdżam wcześniej — to teren górski i mam to policzone.",
    },
  ],

  geo: { lat: 49.6906, lng: 19.755 },
};
