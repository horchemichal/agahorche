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
 * JORDANÓW — GMINA WIEJSKA, powiat suski. Pięć sołectw, ponad
 * jedenaście tysięcy mieszkańców na ok. 92,5 km².
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje MIASTO JORDANÓW (plik
 * `jordanow.ts`, slug `jordanow`) — osobna gmina miejska, ok. 5,4 tys.
 * mieszkańców. URZĄD GMINY WIEJSKIEJ MIEŚCI SIĘ W MIEŚCIE, przy
 * Rynku 2, obok ratusza pod numerem 1. NIE MA WSI JORDANÓW.
 * Osie obu stron są rozłączne i mają takie pozostać:
 *   — MIASTO: rynek, neogotyk Zubrzyckiego, handel, gotowanie we dwoje,
 *   — GMINA WIEJSKA: Wysoka i wrzesień 1939, stulecie koła gospodyń.
 *
 * OŚ STRONY: STULECIE KOŁA GOSPODYŃ W ŁĘTOWNI (1925–2025) jako
 * domknięcie, a jako otwarcie — WYSOKA I PIERWSZE DNI WRZEŚNIA 1939.
 * Dwie rzeczy, których nie da się przenieść na stronę miasta, bo obie
 * wydarzyły się we wsiach tej gminy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SOŁECTWA (5): Łętownia, Naprawa, Osielec, Toporzysko, Wysoka.
 *   Siedziba: Jordanów, Rynek 2,
 * — BITWA 1–3 września 1939 r., płk Stanisław Maczek, 10 Brygada
 *   Kawalerii, przeciw XXII Korpusowi Pancernemu. Kluczowe walki
 *   toczyły się o WYSOKĄ i NAPRAWĘ. Wysoka odznaczona Orderem
 *   Krzyża Grunwaldu w 1946 r. Przy wsi stoi witacz z napisem
 *   „Bitwa o Wysoką 1–3 września 1939 r.”, ponad 4 m wysokości,
 *   konsultowany z IPN,
 * — KGW ŁĘTOWNIA: założone w 1925 r., jubileusz stulecia
 *   28 czerwca 2025 r., przewodnicząca Halina Grubarek,
 * — KGW OSIELEC: II miejsce ex aequo w konkursie wieńca na dożynkach
 *   powiatowych w Zembrzycach 8 września 2024 r.; III miejsce
 *   w powiecie w 2025 r. Koła działają we wszystkich pięciu sołectwach,
 * — KOPALNIA KAMIENIA „OSIELEC” S.A., KRS 0000583886, zakład
 *   w Osielcu — DZIAŁA (zweryfikowane),
 * — LUDNOŚĆ: dwa źródła podają 11 186 i 11 057 na tę samą datę
 *   31.12.2024. Powierzchnia 92,5 albo 92,65 km². Średni wiek 38,9,
 *   3 235 budynków mieszkalnych, 76 pracujących na 1000 mieszkańców,
 *   bezrobocie 4,8%,
 * — TOPORZYSKO: pozostałości parku dworskiego, Ośrodek Jeździecki
 *   „Bór” z sekcją kawaleryjską tradycji 3. Pułku Strzelców Konnych,
 * — NAPRAWA: kryty basen,
 * — XXX Rejonowy Przegląd Orkiestr Dętych „Echo”, 8 czerwca 2025 r.,
 *   Łętownia. Zespół regionalny „Gronie”, chór „Vox Altisono”,
 * — KOLEJ: stacja OSIELEC leży w gminie wiejskiej, na linii nr 98.
 *   RUCH PASAŻERSKI ZAWIESZONY — modernizacja, komunikacja zastępcza,
 * — DROGI: przez teren gminy przechodzi DK7 (zakopianka) oraz DK28.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LUDNOŚCI POSZCZEGÓLNYCH SOŁECTW. Urząd publikuje tylko sumę,
 *   rozbicia nie znalazłam. NIE ZMYŚLAM liczb — wymieniam wsie
 *   bez podawania, która jest większa,
 * — DOKŁADNEJ LICZBY MIESZKAŃCÓW GMINY. Dwa źródła, ta sama data,
 *   różnica 129 osób. Piszę „ponad jedenaście tysięcy”,
 * — POTRAWY LOKALNEJ Z NAZWY. Brak wpisu na Liście Produktów
 *   Tradycyjnych i brak udokumentowanego dania. Wieniec dożynkowy
 *   KGW Osielec to nagroda konkursowa, nie wpis prawny,
 * — INNYCH PRACODAWCÓW poza kopalnią w Osielcu. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — „FOLWARK” NIE JEST SOŁECTWEM. Jedno źródło wymienia go jako
 *   szóstą miejscowość; urząd zna pięć sołectw,
 * — RUCH POCIĄGÓW ZAWIESZONY. Nie pisać „dojedziesz pociągiem
 *   do Osielca”,
 * — NIE PRZENOSIĆ NA STRONĘ MIASTA bitwy 1939 ani kół gospodyń,
 * — Wysoka w tej gminie to nie Wysoka w innych powiatach.
 */

export const JORDANOW_GMINA: CityContent = {
  slug: "jordanow-gmina",
  h1: "Thermomix gmina Jordanów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Jordanów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie wiejskiej Jordanów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Łętownia, Naprawa, Osielec, Toporzysko, Wysoka. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Jordanów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Jordanów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy wiejskiej Jordanów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich pięciu sołectw, bez dopłaty za odległość.",

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
      heading: "Thermomix w gminie Jordanów – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Łętowni, jak w Naprawie, Osielcu, Toporzysku czy Wysokiej.",
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
      heading: "Wieś, która dostała order za trzy dni września",
      paragraphs: [
        "Pierwszego września tysiąc dziewięćset trzydziestego dziewiątego roku dziesiąta brygada kawalerii pułkownika Stanisława Maczka zatrzymała tu niemiecki korpus pancerny. Bój trwał trzy dni. Historia zapisała go jako bitwę pod Jordanowem, ale walczono nie w mieście — walczono o Wysoką i o Naprawę, czyli o dwie wsie tej gminy.",
        "W tysiąc dziewięćset czterdziestym szóstym roku Wysoka została za to odznaczona Orderem Krzyża Grunwaldu. Nie osoba — wieś. Przy wjeździe stoi dziś ponadczterometrowy witacz z napisem „Bitwa o Wysoką 1–3 września 1939 r.”, przygotowany w konsultacji z Instytutem Pamięci Narodowej.",
        "Piszę o tym, bo to jest różnica między tą gminą a sąsiadującym z nią miastem, choć nazywają się tak samo i mają urzędy przy tym samym rynku. Miasto ma neogotycki ratusz i plac po targach bydła. Gmina ma pięć wsi rozłożonych po stokach, order za wrzesień i kamieniołom w Osielcu, który pracuje do dziś.",
        "Gmina jest przy tym młodsza od miasta: średnia wieku to niecałe trzydzieści dziewięć lat wobec prawie czterdziestu jeden w Jordanowie. To znaczy, że jeżdżę tu do domów z dziećmi częściej niż kilka kilometrów dalej, do miasta.",
        "Jest tu też coś, czego w mieście nie ma w tej skali: koła gospodyń działają we wszystkich pięciu sołectwach, a to w Łętowni obchodziło w dwa tysiące dwudziestym piątym roku stulecie istnienia. Sto lat kobiet, które organizują się wokół jedzenia i wspólnej roboty. Piszę o tym osobno, niżej.",
        "Od razu uczciwie, czego urządzenie nie zrobi: nie zastąpi wprawy i nie ugotuje bez Ciebie. Zabiera siekanie, ucieranie, mieszanie i pilnowanie, żeby nie przywarło — czyli te czynności, przez które gotowanie dla większego stołu odkłada się na dzień, w którym będzie czas.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Jordanów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa i, jeśli możesz, jakiś punkt orientacyjny. Wsie tej gminy są rozciągnięte po stokach i rozproszone — Łętownia, Osielec czy Toporzysko ciągną się kilometrami wzdłuż dolin, a sam numer domu bywa mylący. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli w domu jest gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do obrządku, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Jordanów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom rozciągnięty po stoku, obiad dla całego stołu",
      paragraphs: [
        "Wsie tej gminy są rozproszone — zabudowa ciągnie się wzdłuż dolin i pnie po stokach, a do sąsiada bywa dalej niż w mieście do drugiego końca ulicy. To układ osadniczy, w którym dom jest samowystarczalny: piecze się, kisi i gotuje u siebie, bo po większość rzeczy nie skoczy się na róg.",
        "Gotowanie ma tu inną skalę niż w bloku. To nie są dwie porcje, tylko garnek — na rodzinę, często wielopokoleniową, czasem z kimś, kto akurat pomaga w gospodarstwie. I właśnie przy takim garnku najbardziej przeszkadza to, że trzeba przy nim stać.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe gotuje się, kiedy Ty jesteś przy zwierzętach, w ogrodzie albo z dziećmi, i samo się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie i mieszanie, żeby nie przywarło, dzieją się bez Twojej obecności.",
        "Druga rzecz to zapasy i przetwory. Ciasto na pierogi, sosy, zupy do zamrożenia, pasty kanapkowe, powidła, chleb. Da się to robić seriami, w jednym naczyniu. W domu, w którym i tak gotuje się większymi partiami i przerabia własne owoce, ta różnica jest odczuwalna od pierwszego tygodnia.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a przy rozproszonej zabudowie i dojazdach do szkoły to bywa realnie potrzebne.",
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
    heading: "Sto lat koła gospodyń w Łętowni",
    paragraphs: [
      "Koło gospodyń wiejskich w Łętowni powstało w tysiąc dziewięćset dwudziestym piątym roku. W czerwcu dwa tysiące dwudziestego piątego obchodziło stulecie. Sto lat to kawał czasu jak na organizację, która nie ma budżetu, biura ani etatów — a przetrwała dwie okupacje, zmianę ustroju i wyludnianie się wsi.",
      "Koła działają we wszystkich pięciu sołectwach tej gminy. Robią to, co koła gospodyń robią od stu lat: gotują na dożynki, plotą wieńce, wystawiają stoiska. Koło z Osielca zajęło w dwa tysiące dwudziestym czwartym roku drugie miejsce w konkursie wieńca na dożynkach powiatowych w Zembrzycach, rok później trzecie w powiecie.",
      "Muszę tu jednak powiedzieć rzecz, którą mówię na każdej takiej stronie: to są nagrody w konkursach, nie wpisy na ministerialną Listę Produktów Tradycyjnych. Żadnego wpisu z tej gminy nie znalazłam. Nie nazwę więc niczego stąd „produktem tradycyjnym” w sensie prawnym, bo to co innego niż w sensie potocznym.",
      "Co z tego wynika dla urządzenia? Rzecz mało romantyczna, ale prawdziwa: gotowanie na dwadzieścia osób i gotowanie na cztery różni się nie trudnością, tylko liczbą godzin przy blacie. Ciasto trzeba wyrobić, farsz posiekać, masę utrzeć. Kiedy robi się to seriami — a na dożynki robi się seriami — te godziny się sumują. Urządzenie zabiera dokładnie tę część, nie tę, w której liczy się wprawa i przepis po babci.",
    ],
  },

  districtsHeading: "Gdzie w gminie Jordanów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu sołectw, bez żadnej dopłaty za odległość: Łętowni, Naprawy, Osielca, Toporzyska i Wysokiej.",
    "Nie podaję, które sołectwo jest największe, i chcę powiedzieć dlaczego. Urząd publikuje wyłącznie sumę mieszkańców gminy, a rozbicia na wsie nie znalazłam w żadnym wiarygodnym źródle. Wolę nie napisać nic, niż napisać liczbę, której nie sprawdziłam. Cała gmina liczy ponad jedenaście tysięcy osób na przeszło dziewięćdziesięciu kilometrach kwadratowych.",
    "Kilka rzeczy, które warto wiedzieć o poszczególnych wsiach. W Toporzysku zachowały się pozostałości parku dworskiego, a przy wsi działa ośrodek jeździecki nawiązujący do tradycji kawaleryjskiej. W Naprawie jest kryty basen — rzecz nieoczywista w gminie wiejskiej. W Osielcu pracuje kopalnia kamienia, jeden z niewielu większych zakładów w okolicy.",
    "O dojeździe uczciwie: stacja kolejowa w Osielcu leży w granicach tej gminy, ale linia z Suchej Beskidzkiej do Chabówki jest w trakcie modernizacji i ruch pasażerski został zawieszony — kursuje komunikacja zastępcza. Przez teren gminy przechodzi natomiast zakopianka oraz droga krajowa numer dwadzieścia osiem.",
  ],
  districts: [
    "Łętownia",
    "Naprawa",
    "Osielec",
    "Toporzysko",
    "Wysoka",
  ],

  nearbyHeading: "Jordanów, Bystra-Sidzina i Maków Podhalański też są na mojej trasie",
  nearbyParagraphs: [
    "Miasto Jordanów leży w środku tej gminy i jest osobną jednostką — urząd gminy wiejskiej mieści się zresztą przy tym samym rynku, pod sąsiednim numerem. Dojeżdżam i tu, i tam, bez dopłaty.",
    "Dalej mam Bystrą-Sidzinę, Maków Podhalański i Suchą Beskidzką. Jeśli mieszkasz na granicy i nie masz pewności, czy to już miasto, czy jeszcze gmina wiejska — po prostu zapytaj. Dla mnie to nie ma znaczenia, dla umówienia terminu też nie.",
  ],
  nearbyTowns: [
    "Jordanów",
    "Bystra-Sidzina",
    "Maków Podhalański",
    "Sucha Beskidzka",
    "Zawoja",
    "Kraków",
  ],

  about: blokOMnie("do gminy Jordanów", "w powiecie suskim"),

  faq: [
    {
      question: "Mieszkam na końcu wsi, daleko od drogi głównej. Dojedziesz?",
      answer:
        "Dojadę i bez dopłaty. Wsie tej gminy ciągną się kilometrami wzdłuż dolin, więc proszę tylko o punkt orientacyjny albo o nazwę części wsi — sam numer domu bywa tu mylący, a ja wolę trafić za pierwszym razem. Zimą uprzedź mnie, jeśli dojazd jest stromy, to wyjadę wcześniej.",
    },
    ...faqWspolne("w gminie Jordanów"),
    {
      question: "Czym gmina wiejska Jordanów różni się od miasta Jordanów?",
      answer:
        "To dwie osobne gminy o tej samej nazwie. Miasto liczy około pięciu i pół tysiąca mieszkańców, gmina wiejska ponad jedenaście tysięcy w pięciu sołectwach: Łętownia, Naprawa, Osielec, Toporzysko i Wysoka. Urząd gminy wiejskiej mieści się w mieście, przy tym samym rynku — nie istnieje wieś o nazwie Jordanów. Dla umówienia prezentacji to bez znaczenia, dojeżdżam wszędzie.",
    },
    {
      question: "Czy do Osielca dojadę pociągiem?",
      answer:
        "Dziś nie. Stacja w Osielcu jest i leży w granicach gminy, ale linia z Suchej Beskidzkiej do Chabówki jest w trakcie modernizacji, a ruch pasażerski został zawieszony — kursuje komunikacja zastępcza. Piszę to wprost, żebyś nie planowała podróży pociągiem.",
    },
  ],

  geo: { lat: 49.6733, lng: 19.8286 },
};
