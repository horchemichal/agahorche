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
 * STRYSZAWA — gmina wiejska, powiat suski. Osiem sołectw, ok. 114 km²,
 * blisko dwanaście tysięcy mieszkańców.
 *
 * OŚ STRONY: ZABAWKARSTWO — i to jest najmocniejszy fakt całej fali
 * suskiej. „Zabawkarstwo żywiecko-suskie” zostało wpisane
 * 14 PAŹDZIERNIKA 2016 R. NA KRAJOWĄ LISTĘ NIEMATERIALNEGO
 * DZIEDZICTWA KULTUROWEGO, prowadzoną przez Narodowy Instytut
 * Dziedzictwa. To wpis państwowy, nie odznaczenie konkursowe
 * ani hasło promocyjne. Wnioskodawcą było Beskidzkie Centrum
 * Zabawki Drewnianej / GOK w Stryszawie.
 *
 * Najlepszym detalem narracyjnym jest RODZINNY PODZIAŁ PRACY:
 * jedni toczyli i strugali, inni cięli elementy, inni malowali.
 * To daje naturalne, niewymuszone przejście do kuchni, w której
 * robota też się dzieli.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — WPIS NA KRAJOWĄ LISTĘ NIEMATERIALNEGO DZIEDZICTWA KULTUROWEGO:
 *   „Zabawkarstwo żywiecko-suskie”, 14 października 2016 r.,
 * — CHRONOLOGIA: pierwsze wzmianki XVIII w.; rozwój od pierwszej
 *   połowy XIX w., najpierw jako dodatek do innych wyrobów
 *   drewnianych; lata 30. XX w. — pojawiają się klepoki (ptaki
 *   klaskające skrzydłami); po 1945 r. mecenat państwowy
 *   i dystrybucja przez Cepelię,
 * — WYROBY: bryczki („karetki”), kołyski („kolybki”), grzechotki
 *   („scyrkowki”), koniki, ptaszki, klepoki,
 * — PODZIAŁ PRACY w rodzinie: jedni toczyli lub strugali, inni cięli
 *   elementy, inni malowali — stąd przekaz międzypokoleniowy,
 * — WSIE OŚRODKA W GMINIE: Stryszawa, Lachowice, Kuków, Kurów.
 *   (Poza gminą: Koszarawa, Pewel Wielka, Przyborów, Kocoń.),
 * — TWÓRCY: Piotr Mentel — zabawkarz czwartego pokolenia, prezes
 *   bielskiego oddziału Stowarzyszenia Twórców Ludowych;
 *   Józef Lasik — twórca ludowy,
 * — BESKIDZKIE CENTRUM ZABAWKI DREWNIANEJ otwarte 18 czerwca 2011 r.
 *   w wyremontowanej XIX-wiecznej leśniczówce, kupionej przez gminę
 *   w 2007 r. Projekt transgraniczny ze słowackimi Gbeľanami,
 *   budżet 398 013 euro,
 * — ŚWIĘTO ZABAWKI LUDOWEJ: pierwsza edycja 1997 r.;
 *   29. edycja 5–7 czerwca 2026 r.,
 * — SOŁECTWA (8) wg strony gminy, z przybliżoną ludnością:
 *   Stryszawa ok. 6 000, Lachowice ok. 2 300, Krzeszów ok. 1 750,
 *   Kuków ok. 1 350, Kurów ok. 750, Hucisko ok. 360, Pewelka ok. 350,
 *   Targoszów ok. 260,
 * — POWIERZCHNIA 114 km²; lasy 45%, grunty orne i sady 30%,
 *   łąki i pastwiska 25%. Gmina leży w zbiegu Beskidu Żywieckiego,
 *   Makowskiego i Małego. Ludność 11 940 (2019),
 * — KOLEJ: linia nr 97 Skawina–Żywiec, stacje Stryszawa i Lachowice
 *   (Lachowice otwarte w 1884 r.). Modernizacja za ponad 360 mln zł;
 *   w trakcie prac kursuje komunikacja zastępcza, powrót pociągów
 *   zapowiadany na wrzesień 2026 r. Żywiec–Kraków Główny ok. 1 h 50,
 * — DROGA WOJEWÓDZKA 946 Żywiec–Sucha Beskidzka przez Kuków
 *   i Stryszawę,
 * — GOSPODARKA: 918 podmiotów REGON (2019) — usługi 769,
 *   budownictwo 198, przemysł 161, rolnictwo 20. Brak dużego zakładu,
 * — KGW: Stowarzyszenie KGW „Siedlisko – Stryszawa Górna”
 *   (I miejsce, polędwiczki w sosie borowikowym) i KGW Stryszawa
 *   Dolna (III miejsce, baba ziemniaczana z żeberkami) w XVII
 *   Powiatowym Konkursie Potraw Regionalnych „O Złotą Warzechę”,
 *   18 listopada 2017 r. Zespół regionalny „Spód Jałowca”.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY DZISIEJSZYCH ZABAWKARZY. Żadne źródło jej nie podaje.
 *   NIE PISAĆ „kilkudziesięciu” ani żadnej innej liczby,
 * — CZASU PRZEJAZDU SAMOCHODEM DO KRAKOWA. Niesprawdzony,
 * — NAZW PRACODAWCÓW. Brak potwierdzonej listy,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Nieznane,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak. Nagroda w konkursie
 *   „O Złotą Warzechę” to co innego i strona to rozróżnia.
 *
 * PUŁAPKI:
 * — TO NIE JEST WPIS NA LISTĘ UNESCO, tylko na KRAJOWĄ listę
 *   niematerialnego dziedzictwa. Media piszą o „staraniach o UNESCO” —
 *   napisanie „UNESCO” byłoby błędem faktograficznym,
 * — NIE PRZYPISYWAĆ ZABAWKARSTWA KRZESZOWOWI ANI PEWELCE.
 *   Źródło gminne ich nie wymienia wśród wsi zabawkarskich,
 * — POCIĄGI NIE JEŻDŻĄ w chwili pisania. Powrót zapowiadany
 *   na wrzesień 2026 r. Piszę o tym w czasie przyszłym
 *   i z zastrzeżeniem,
 * — LICZBA SOŁECTW: gmina podaje 8, GUS 9. Idę za gminą,
 * — LUDNOŚĆ 11 940 to dane z 2019 r. — zawsze z datą albo
 *   „blisko dwanaście tysięcy”.
 */

export const STRYSZAWA: CityContent = {
  slug: "stryszawa",
  h1: "Thermomix Stryszawa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Stryszawa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Stryszawa: bezpłatna prezentacja TM7 u Ciebie w kuchni — Stryszawa, Lachowice, Krzeszów, Kuków. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stryszawa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Stryszawa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Stryszawa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich ośmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie osiem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Stryszawa – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Stryszawie, jak w Lachowicach, Krzeszowie czy Kukowie.",
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
      heading: "Gmina wpisana na krajową listę dziedzictwa — za drewniane zabawki",
      paragraphs: [
        "Czternastego października dwa tysiące szesnastego roku zabawkarstwo żywiecko-suskie zostało wpisane na Krajową listę niematerialnego dziedzictwa kulturowego. To nie jest nagroda w konkursie ani hasło z folderu — to państwowy rejestr prowadzony przez Narodowy Instytut Dziedzictwa, a wniosek złożyło Beskidzkie Centrum Zabawki Drewnianej ze Stryszawy.",
        "Zaraz jednak sprostuję, bo to częsty błąd: to jest lista krajowa, nie lista UNESCO. Piszę o tym, bo w tekstach o Stryszawie UNESCO pojawia się regularnie, a starania o taki wpis to zupełnie osobna sprawa.",
        "Tradycja jest stara. Pierwsze wzmianki sięgają osiemnastego wieku, a rozwinęła się na dobre w pierwszej połowie dziewiętnastego — początkowo jako dodatek do innych wyrobów z drewna, potem jako samodzielne zajęcie rodzinne. W latach trzydziestych dwudziestego wieku pojawiły się klepoki, ptaki klaskające skrzydłami. Po wojnie zabawki rozchodziły się przez Cepelię. Robi się tu koniki, ptaszki, bryczki nazywane karetkami, kołyski zwane kolybkami i grzechotki, czyli scyrkowki.",
        "Najciekawszy jest jednak sposób, w jaki to się robiło, bo to jest opis całego domu, nie warsztatu. Robota dzieliła się w rodzinie: jedni toczyli i strugali, inni cięli elementy, inni malowali. Nikt nie robił zabawki od początku do końca sam. Dzięki temu fach przechodził z pokolenia na pokolenie, bo dziecko wchodziło w niego naturalnie, siadając przy jednej z czynności.",
        "Zatrzymam się przy tym, bo to jest dokładnie ten sam mechanizm, który widzę w kuchniach. W domu, w którym gotowanie jest robotą jednej osoby, nikt się przy nim nie uczy. W domu, w którym coś się dzieli — ktoś obiera, ktoś miesza, ktoś nakrywa — dzieci wchodzą w to same. Urządzenie prowadzące przepis krok po kroku działa podobnie: przesuwa gotowanie z „mama wie, jak to się robi” na „każdy może zacząć”.",
        "Od razu uczciwie, czego nie zrobi: nie zastąpi wprawy i nie ugotuje bez Ciebie. Zabiera siekanie, ucieranie, mieszanie i pilnowanie, żeby nie przywarło — czyli to, co trwa, a nie to, co wymaga umiejętności.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Stryszawa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa. Różnice są tu duże: sama Stryszawa to około sześciu tysięcy osób, czyli mniej więcej połowa gminy, a Targoszów czy Pewelka liczą po dwie–trzy setki mieszkańców. Dojazd wszędzie jest bez dopłaty, ale trasę planuję inaczej.",
        "Wieczory w tygodniu i weekendy są tu najczęstszymi terminami. Jeśli dojeżdżasz do pracy do Żywca albo Suchej, powiedz o której wracasz — dopasuję się.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Stryszawa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kuchnia, w której robota się dzieli",
      paragraphs: [
        "Wróćmy na chwilę do tego rodzinnego warsztatu, bo z niego wynika coś praktycznego. Fach zabawkarski przetrwał tu dwa stulecia nie dlatego, że ktoś go chronił, tylko dlatego, że robota była podzielona i każdy miał w niej swój kawałek. Dziecko nie uczyło się na kursie — siadało obok i malowało.",
        "Z gotowaniem jest dokładnie odwrotnie i to jest, moim zdaniem, największy cichy problem dzisiejszych kuchni. Gotuje jedna osoba, zwykle ta sama, i robi to od początku do końca. Reszta domu przychodzi na gotowe. W efekcie nikt się nie uczy, a ta jedna osoba nie ma jak przestać.",
        "Urządzenie prowadzące przepis krok po kroku zmienia to bardziej, niż wygląda na papierze. Nastolatek jest w stanie zrobić obiad sam, bo nie musi wiedzieć, „ile to ma być” — na ekranie stoi napisane. Mąż, który dotąd nie gotował, robi zupę, bo nie ma czego przypalić. To nie jest argument o oszczędności czasu. To argument o tym, kto w domu może ugotować.",
        "Praktyczna korzyść jest przy tym całkiem zwyczajna: danie jednogarnkowe gotuje się, kiedy Ty robisz coś innego, i samo się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie i mieszanie dzieją się bez Twojej obecności.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. A ponieważ przepis prowadzi krok po kroku, starsze rodzeństwo często zaczyna gotować samo — i to jest ta sama historia co z zabawkami, tylko sto lat później.",
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
    heading: "Stryszawa i gotowanie — konkurs zamiast listy ministerialnej",
    paragraphs: [
      "Zacznę od uczciwego rozróżnienia. Nie znalazłam żadnego wpisu z gminy Stryszawa na ministerialnej Liście Produktów Tradycyjnych. Znalazłam za to coś realnego: powiatowy konkurs potraw regionalnych „O Złotą Warzechę”, który odbywa się właśnie tutaj, w Stryszawie, i ściąga koła gospodyń z całego powiatu suskiego.",
      "Miejscowe koła wypadają w nim dobrze. Stowarzyszenie z Stryszawy Górnej wygrało kiedyś pierwsze miejsce polędwiczkami w sosie borowikowym, a koło ze Stryszawy Dolnej zajęło trzecie babą ziemniaczaną z żeberkami. Występuje przy tym zespół regionalny z gminy.",
      "Powtórzę jednak to, co mówię na każdej takiej stronie: nagroda w konkursie to nie wpis na listę ministerialną. Baba ziemniaczana jest tutejsza i pyszna, ale nazywanie jej „produktem tradycyjnym” w sensie prawnym byłoby nadużyciem. W sensie potocznym — proszę bardzo.",
      "Co z tego wynika dla urządzenia? Popatrzmy na tę babę ziemniaczaną. Ziemniaki trzeba zetrzeć, i to sporo. Odcisnąć. Wymieszać. Cała trudność tego dania nie leży w umiejętności, tylko w tarce i w tym, ile przy niej stoisz. Tarcie urządzenie przejmuje w całości, pieczenie zostaje przy piekarniku — i tak właśnie wygląda uczciwy podział ról między nim a Twoją kuchnią.",
    ],
  },

  districtsHeading: "Gdzie w gminie Stryszawa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu sołectw, bez żadnej dopłaty za odległość: Stryszawy, Lachowic, Krzeszowa, Kukowa, Kurowa, Huciska, Pewelki i Targoszowa.",
    "Skala jest tu bardzo nierówna i warto o tym wiedzieć. Sama Stryszawa to około sześciu tysięcy mieszkańców, czyli mniej więcej połowa gminy. Lachowice mają około dwóch i pół tysiąca, Krzeszów blisko tysiąca ośmiuset, a Targoszów niecałe trzysta. Cała gmina zajmuje sto czternaście kilometrów kwadratowych i leży w zbiegu trzech pasm: Beskidu Żywieckiego, Makowskiego i Małego. Lasy zajmują blisko połowę powierzchni.",
    "O dojeździe koleją muszę powiedzieć wprost, jak jest dziś. Przez gminę biegnie linia numer dziewięćdziesiąt siedem ze Skawiny do Żywca, a stacje są dwie: Stryszawa i Lachowice, ta druga działa od tysiąc osiemset osiemdziesiątego czwartego roku. Linia jest jednak w modernizacji za ponad trzysta sześćdziesiąt milionów złotych i w czasie prac kursuje komunikacja zastępcza. Powrót pociągów zapowiadano na wrzesień dwa tysiące dwudziestego szóstego roku — sprawdź aktualny rozkład, zanim zaplanujesz podróż.",
    "Drogą jedzie się tu wojewódzką numer dziewięćset czterdzieści sześć z Żywca do Suchej Beskidzkiej, przez Kuków i Stryszawę, a dalej krajową dwadzieścia osiem. Świadomie nie podaję czasu przejazdu do Krakowa, bo nie mam go z wiarygodnego źródła, a wolę nie zmyślać minut.",
  ],
  districts: [
    "Stryszawa",
    "Lachowice",
    "Krzeszów",
    "Kuków",
    "Kurów",
    "Hucisko",
    "Pewelka",
    "Targoszów",
  ],

  nearbyHeading: "Sucha Beskidzka, Zawoja i Zembrzyce też są na mojej trasie",
  nearbyParagraphs: [
    "Do Suchej Beskidzkiej mam stąd kilkanaście minut drogą wojewódzką, dalej są Zembrzyce, Zawoja i Maków Podhalański. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Kukowie albo Pewelce, czyli po zachodniej stronie gminy, i bliżej Ci do Żywca niż do Suchej — to bez znaczenia dla umówienia terminu. Przyjeżdżam tak samo.",
  ],
  nearbyTowns: [
    "Sucha Beskidzka",
    "Zembrzyce",
    "Zawoja",
    "Maków Podhalański",
    "Budzów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Stryszawa", "w powiecie suskim"),

  faq: [
    {
      question: "Mieszkam w Targoszowie. To mała wieś na końcu gminy — dojedziesz?",
      answer:
        "Dojadę i bez dopłaty, tak samo jak do Stryszawy. Targoszów, Pewelka i Hucisko to najmniejsze sołectwa, po dwie–trzy setki mieszkańców, ale odległość nie ma dla mnie znaczenia cenowego. Proszę tylko o punkt orientacyjny, bo zabudowa bywa tu rozproszona.",
    },
    ...faqWspolne("w gminie Stryszawa"),
    {
      question: "Czy do Stryszawy dojadę pociągiem?",
      answer:
        "Stacje są dwie — Stryszawa i Lachowice — ale linia ze Skawiny do Żywca jest w modernizacji i w czasie prac kursuje komunikacja zastępcza. Powrót pociągów zapowiadano na wrzesień dwa tysiące dwudziestego szóstego roku, więc sprawdź aktualny rozkład przed podróżą. Ja przyjeżdżam samochodem, więc dla umówienia prezentacji to bez znaczenia.",
    },
    {
      question: "Czy zabawkarstwo ze Stryszawy jest na liście UNESCO?",
      answer:
        "Nie i warto to sprostować, bo pomyłka jest częsta. Zabawkarstwo żywiecko-suskie zostało wpisane w październiku dwa tysiące szesnastego roku na Krajową listę niematerialnego dziedzictwa kulturowego, prowadzoną przez Narodowy Instytut Dziedzictwa. To wpis państwowy, ale krajowy — starania o listę UNESCO to osobna sprawa.",
    },
  ],

  geo: { lat: 49.7261, lng: 19.4767 },
};
