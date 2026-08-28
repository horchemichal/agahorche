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
 * BUKOWNO — GMINA MIEJSKA (nie miejsko-wiejska!), 9 104 mieszkańców
 * (GUS BDL, 31.12.2025). Czwarta gmina powiatu olkuskiego.
 *
 * OŚ STRONY: najbardziej zielone miasto powiatu — około trzy czwarte
 * powierzchni to las — i jednocześnie najstarsze demograficznie.
 * Mediana wieku 46,2 lat jest najwyższa w powiecie (Małopolska 41,5,
 * Polska 42,7). W 2024 r. urodzeń było 44, zgonów 169.
 *
 * KONSEKWENCJA DLA TREŚCI, NAJWAŻNIEJSZA NA TEJ STRONIE:
 * to jedyna z sześciu gmin powiatu, gdzie strona ma mówić przede
 * wszystkim do gospodarstw jedno- i dwuosobowych oraz do osób po
 * pięćdziesiątce, a nie głównie do rodzin z małymi dziećmi. Dokładnie
 * ta sama decyzja co przy Oświęcimiu w fali zachodniej. Sekcja
 * „jedna-osoba” jest tu główna, a nie dodatkowa.
 *
 * ŚWIADOMIE BEZ SEKCJI `culinary`: nie znalazłam ANI JEDNEGO
 * udokumentowanego lokalnego dania, produktu ani święta kulinarnego
 * przypisanego Bukownu. Wymyślenie „bukowieńskiej” potrawy byłoby
 * dokładnie tym rodzajem wypełniacza, którego w tej bazie nie ma.
 * Lepiej krótsza strona niż zmyślona tradycja.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — USTRÓJ: gmina miejska, prawa miejskie dopiero w 1962 r., choć wieś
 *   wzmiankowana już w XV w. BRAK SOŁECTW,
 * — jednostki osadnicze wg oficjalnej strony miasta (6): Podlesie,
 *   Bór z Przeniem, Stare Bukowno z Przymiarkami, Wodąca,
 *   Centrum Południe, Centrum Północ. Nazwy potoczne (Wygiełza,
 *   Bór Biskupi, Starczynów, Podpolis, Skotnica, Stara Wieś, Jeziorki,
 *   Kleparz) są NIEOFICJALNE — używam ostrożnie i tylko opisowo,
 * — powierzchnia 63–64 km², z czego ok. 73% lasów; kształt zbliżony
 *   do trapezu, ok. 7,5 km z północy na południe i 13,2 km ze wschodu
 *   na zachód; wysokości 270–400 m n.p.m.,
 * — położenie: ok. 40 km od Krakowa i ok. 40 km od Katowic; graniczy
 *   z Olkuszem, gminą Bolesław, Sławkowem, Jaworznem i Trzebinią,
 * — KOLEJ CZYNNA: stacja Bukowno na linii 62, pociągi w kierunku
 *   Olkusza i Krakowa oraz Sosnowca. Historycznie węzeł Kolei
 *   Iwangorodzko-Dąbrowskiej (1882–1885). Przez miasto biegnie też
 *   Linia Hutnicza Szerokotorowa — towarowa,
 * — krajobraz: granica Wyżyny Krakowsko-Częstochowskiej i Wyżyny
 *   Śląskiej; południowa część miasta w Parku Krajobrazowym
 *   Dolinki Krakowskie (wg UM Bukowno),
 * — ZGH „Bolesław” S.A. MAJĄ SIEDZIBĘ W BUKOWNIE. Od listopada 2012 r.
 *   86,92% udziałów należy do Stalproduktu. Produkcja: cynk
 *   elektrolityczny i stopy cynku, kwas siarkowy. BOLTECH Sp. z o.o.,
 *   ul. Kolejowa 37 — spółka grupy,
 * — wskaźnik zatrudnienia wysoki jak na miasto tej wielkości:
 *   341 pracujących na 1 000 mieszkańców (2021),
 * — Szlak Kordonów Granicznych: 13 km, czarny, biegnie śladem
 *   XIX-wiecznej granicy rosyjsko-austriackiej; Szlak Podlesia
 *   (5,75 km) tworzy z nim 12-kilometrową pętlę i prowadzi do miejsca,
 *   gdzie powstańcy styczniowi przekraczali granicę w 1863 r.,
 * — Szlak Okrężny Olkuski, 38 km, łączy Bukowno z Olkuszem,
 * — bory sosnowe z borówką, dawne piaskownie w trakcie zalesiania,
 * — Dni Bukowna: 13–14 czerwca 2026, stadion MOSiR; zespoły lokalne
 *   Animato, Bukowiacy, Spod Buczyny; XX Ogólnopolski Bieg Uliczny,
 * — Bukowno należy do LGD „Nad Białą Przemszą”.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WYSCHNIĘCIE RZEKI SZTOŁY. To temat numer jeden w Bukownie.
 *   Ok. 14 km koryta wyschło po wyłączeniu pomp głównego odwadniania
 *   kopalni; woda może wrócić za ok. 60 lat. Rzeka była turkusowa
 *   i popularna wśród kajakarzy, dziś jest piaszczyste koryto; był
 *   protest i sprawa sądowa. ANI SŁOWA o „malowniczej Sztole” —
 *   to zdanie obraziłoby każdego mieszkańca,
 * — ZANIK RZEK BABA I BIAŁA, spadek przepływu Białej Przemszy,
 * — ZAMKNIĘCIE KOPALNI „OLKUSZ-POMORZANY” i utrata pracy,
 * — SKAŻENIE WÓD PODZIEMNYCH — strefa ok. 450 km² zanieczyszczonych
 *   wód, potencjalnie groźna dla ujęć Dąbrowy Górniczej, Sławkowa
 *   i Jaworzna. W tekście o gotowaniu absolutnie nie do ruszenia,
 * — METALE CIĘŻKIE W GLEBACH. Bukowno to jeden z klasycznych punktów
 *   badań nad ołowiem i cynkiem w środowisku. Jak w całym powiecie:
 *   ŻADNYCH „warzyw z własnego ogrodu”, „przetworów z działki”,
 *   „tego, co wyrosło za domem”,
 * — WYLUDNIANIE (−13,7% w latach 2002–2024, najszybciej w powiecie)
 *   i najwyższa mediana wieku. Adresuję to POŚREDNIO — treścią
 *   o gotowaniu dla jednej i dwóch osób — ale nigdy nie nazywam wprost,
 * — PRZYNALEŻNOŚĆ REGIONALNA. Bukowno w latach 1975–1998 należało
 *   do województwa katowickiego i tożsamość śląsko-małopolska bywa tu
 *   punktem sporu. Nie przesądzam, „czy to Śląsk, czy Małopolska”.
 *
 * PUŁAPKA:
 * — BUKOWNO TO GMINA MIEJSKA, nie miejsko-wiejska. Nie ma sołectw ani
 *   „obszaru wiejskiego”. To najczęstszy błąd w tekstach o tym powiecie,
 * — ZGH „BOLESŁAW” MIESZCZĄ SIĘ W BUKOWNIE, nie w gminie Bolesław.
 *   Pełna nazwa: „ZGH Bolesław S.A. w Bukownie”. Boltech również,
 *   ul. Kolejowa 37, 32-332 Bukowno,
 * — KOPALNIA ZAMKNIĘTA ≠ HUTA ZAMKNIĘTA. Huta cynku i zakłady
 *   przetwórcze pracują,
 * — Bukowno NIE LEŻY przy DK94 (droga biegnie ok. 5 km na północ),
 * — Bukowno NIE LEŻY na Pustyni Błędowskiej (to gmina Klucze),
 * — kod pocztowy 32-332 (Olkusz 32-300, Klucze 32-310).
 */

export const BUKOWNO: CityContent = {
  slug: "bukowno",
  h1: "Thermomix Bukowno – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Bukowno — prezentacja i cena",
  seoDescription:
    "Thermomix w Bukownie: bezpłatna prezentacja TM7 u Ciebie w kuchni, także dla jednej lub dwóch osób. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bukowno — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Bukownie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Bukowna przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich części miasta, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("całe Bukowno, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bukownie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Centrum, jak w Podlesiu czy na Wodącej.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Ciebie powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Najmniejsze i najbardziej zielone miasto w powiecie",
      paragraphs: [
        "Bukowno jest jedynym miastem w powiecie olkuskim, które nie ma wokół siebie wsi — to gmina miejska, bez sołectw, i cały jej obszar to jedno miasto. Nie każdy o tym wie, łącznie z częścią serwisów w internecie, ale mieszkańcy wiedzą doskonale.",
        "Druga rzecz, którą widać od razu po wjeździe: około trzy czwarte powierzchni gminy to las. Bory sosnowe, dawne piaskownie, które od lat się zalesia, i szlaki, których w miasteczku tej wielkości nikt by się nie spodziewał. Jeden z nich biegnie śladem dziewiętnastowiecznej granicy między zaborem rosyjskim a austriackim — tędy w tysiąc osiemset sześćdziesiątym trzecim roku przechodzili powstańcy.",
        "Prawa miejskie Bukowno dostało dopiero w tysiąc dziewięćset sześćdziesiątym drugim roku, czyli później, niż postawiono większość jego domów. To miasto młodsze od swoich mieszkańców i widać to w układzie: nie ma tu rynku ani starówki, jest kilka osiedli rozrzuconych między lasem.",
        "Praca jest tu w większym stopniu na miejscu niż w sąsiednich gminach — zakłady górniczo-hutnicze mają siedzibę właśnie w Bukownie, choć nazwa myli, bo brzmi jak sąsiednia gmina. Wskaźnik zatrudnienia jest wysoki jak na miasto tej wielkości. Reszta dojeżdża: do Olkusza kwadrans, do Krakowa i do Katowic po czterdzieści kilometrów w obie strony.",
        "Kto woli nie prowadzić, jedzie pociągiem — stacja jest w mieście, na linii przez Olkusz do Krakowa. To kolejowe miasto z tradycją: węzeł powstał tu jeszcze w latach osiemdziesiątych dziewiętnastego wieku.",
        "Na prezentacji pokazuję rzecz prostą: że obiad może się gotować sam, kiedy Ty robisz coś innego, i że nie trzeba przy tym stać. Mówię też wprost, czego Thermomix nie zrobi — nie zastąpi wprawy ani nie nauczy nikogo gotować z niczego. Zabiera stanie obok garnka i te czynności, przez które gotowanie odkłada się na później.",
      ],
    },
    {
      id: "jedna-osoba",
      heading: "Czy Thermomix ma sens, gdy gotuje się dla jednej lub dwóch osób?",
      paragraphs: [
        "To jest najczęstsze pytanie, jakie słyszę w Bukownie, i jest całkowicie uczciwe. Odpowiadam na nie na początku, a nie na końcu rozmowy, bo od niego zależy, czy w ogóle warto rozmawiać dalej.",
        "Odpowiedź brzmi: ma, ale z innego powodu niż w domu z czwórką dzieci. Tam chodzi o ilość i o czas. Tutaj o to, żeby w ogóle chciało się ugotować — bo gotowanie dla jednej osoby przegrywa najczęściej nie z brakiem umiejętności, tylko z rachunkiem: pół godziny przy garnku i zlew pełen naczyń dla jednego talerza.",
        "Kiedy nastawienie zupy zajmuje pięć minut, a naczynie jest jedno, ten rachunek wygląda inaczej. To brzmi banalnie, ale w praktyce jest różnicą między „coś sobie ugotuję” a „zjem kanapkę, bo mi się nie chce” — i to właśnie tę różnicę widać po kilku tygodniach.",
        "Druga rzecz to porcje. Da się ugotować mało i naprawdę mało, bez kombinowania i bez wyrzucania połowy. A jeśli akurat wygodniej ugotować więcej i odłożyć na trzy dni — to też jest normalny sposób używania tego urządzenia, a nie tryb awaryjny.",
        "Trzecia rzecz, o której mówi się rzadziej: przepis prowadzi krok po kroku i pilnuje czasu za Ciebie. Dla części osób to jest główny powód zakupu — nie oszczędność czasu, tylko to, że nie trzeba niczego pamiętać ani niczego pilnować.",
        "Na prezentacji pokazuję to wprost: gotuję jedną małą porcję, żeby było widać, jak to wygląda naprawdę, a nie jak na zdjęciu z książki kucharskiej. Jeśli po tym uznasz, że u Ciebie nie ma to sensu — powiem to samo i nie będę przekonywać. Wolę nie sprzedać niż sprzedać coś, co potem stoi w szafce.",
      ],
      links: [
        {
          href: "/thermomix/dla-poczatkujacych",
          label: "Thermomix dla początkujących",
        },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bukownie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której części miasta mieszkasz: Centrum, Podlesie, Wodąca, Stare Bukowno czy Bór. Miasto jest rozciągnięte — trzynaście kilometrów ze wschodu na zachód — więc to realnie wpływa na godzinę, o której u Ciebie jestem.",
        "Jeśli wolisz spotkanie w ciągu dnia, a nie wieczorem, po prostu powiedz. W Bukownie umawiam sporo prezentacji na przedpołudnia i to zwykle najspokojniejsza pora. Weekendy też są normalnym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bukownie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy dzieci są dorosłe, a gotuje się nadal dla wszystkich",
      paragraphs: [
        "W Bukownie często trafiam do domów, w których na co dzień mieszkają dwie osoby, ale w niedzielę albo w święta zjeżdża się cała rodzina — dzieci z Krakowa, z Katowic, czasem z dalszych stron. To dwa zupełnie różne tryby gotowania w jednej kuchni.",
        "W tygodniu chodzi o to, żeby ugotować mało i bez wysiłku. W weekend odwrotnie: nagle trzeba obiad dla ośmiu osób, ciasto i coś, co da się przygotować dzień wcześniej. Praktyczne bywa to, że oba tryby wychodzą tym samym urządzeniem i tym samym naczyniem.",
        "Przy takich okazjach największą różnicę robią rzeczy najbardziej żmudne: ciasto drożdżowe, którego nie trzeba wyrabiać ręcznie, sosy, których nie trzeba pilnować, i zupa, która gotuje się, kiedy Ty nakrywasz do stołu. To nie jest oszczędność godziny — to jest różnica między przyjemnym przedpołudniem a bieganiem.",
        "Wnukom, jeśli są, zwykle najbardziej podoba się to, że mogą coś zrobić same. Przepis prowadzi krok po kroku, więc dziecko realnie gotuje, a nie tylko miesza łyżką pod nadzorem. Na prezentacji chętnie to pokazuję, jeśli akurat ktoś młodszy jest w domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Przepis prowadzi krok po kroku, więc przy gotowaniu realnie pomaga też ktoś młodszy.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w Bukownie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i bez żadnej dopłaty za odległość. Bukowno jest gminą miejską — nie ma tu sołectw ani obszaru wiejskiego, choć części miasta leżą od siebie naprawdę daleko.",
    "Oficjalnie miasto dzieli się na sześć jednostek: Centrum Północ, Centrum Południe, Podlesie, Bór z Przeniem, Stare Bukowno z Przymiarkami oraz Wodącą. W mowie potocznej krąży jeszcze kilka innych nazw, ale te sześć to podział, którym posługuje się urząd.",
    "Miasto ma kształt zbliżony do trapezu: około siedmiu i pół kilometra z północy na południe i ponad trzynaście ze wschodu na zachód. Przy takim rozciągnięciu i przy lesie zajmującym większość powierzchni odległości bywają mylące, więc przy umawianiu warto podać ulicę, a nie tylko dzielnicę.",
    "Dojazd: droga krajowa numer dziewięćdziesiąt cztery przebiega około pięciu kilometrów na północ od miasta, więc do Bukowna wjeżdża się z niej zjazdem. Jest za to kolej — stacja w mieście, na linii przez Olkusz do Krakowa. Do Olkusza mam stąd kwadrans, do Krakowa i do Katowic po czterdzieści kilometrów.",
  ],
  districts: [
    "Centrum Północ",
    "Centrum Południe",
    "Podlesie",
    "Bór z Przeniem",
    "Stare Bukowno z Przymiarkami",
    "Wodąca",
  ],

  nearbyHeading: "Olkusz, Bolesław i Trzebinia też są na mojej trasie",
  nearbyParagraphs: [
    "Bukowno leży na granicy powiatu, więc trasy układam stąd w obie strony. Do Olkusza mam kwadrans, do gminy Bolesław jeszcze bliżej, do Klucz i Trzebini pół godziny. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Na południe zaczyna się Trzebinia i Chrzanów, a stamtąd już pierścień krakowski, w którym pracuję od dawna. Jeśli mieszkasz przy granicy miasta i nie masz pewności, po której stronie jesteś — po prostu zapytaj, wszędzie tam jeżdżę tak samo.",
  ],
  nearbyTowns: [
    "Olkusz",
    "Bolesław",
    "Klucze",
    "Trzebinia",
    "Chrzanów",
    "Wolbrom",
    "Kraków",
  ],

  about: blokOMnie("do Bukowna", "w powiecie olkuskim"),

  faq: [
    {
      question: "Mieszkam sama. Czy Thermomix nie jest urządzeniem dla dużych rodzin?",
      answer:
        "Nie tylko. Przy jednej osobie chodzi o co innego niż ilość — o to, żeby w ogóle chciało się ugotować, kiedy rachunek „pół godziny przy garnku i zlew naczyń za jeden talerz” wypada źle. Da się gotować naprawdę małe porcje, bez kombinowania i bez wyrzucania. Na prezentacji pokazuję to wprost, gotując jedną małą porcję.",
    },
    ...faqWspolne("w Bukownie"),
    {
      question: "Wolę spotkanie w ciągu dnia niż wieczorem. Da się?",
      answer:
        "Jak najbardziej — w Bukownie umawiam sporo prezentacji na przedpołudnia i zwykle jest to najspokojniejsza pora. Powiedz przy umawianiu, jaka godzina Ci odpowiada, a ja ułożę wokół niej resztę dnia. Prezentacja trwa około dwóch godzin.",
    },
    {
      question: "W niedzielę zjeżdża się cała rodzina. Czy to urządzenie na taki obiad?",
      answer:
        "Tak i akurat przy takich okazjach różnica jest największa. Ciasta nie trzeba wyrabiać ręcznie, sosów nie trzeba pilnować, a zupa gotuje się, kiedy Ty nakrywasz do stołu. Część rzeczy da się przygotować dzień wcześniej. Jeśli powiesz przy umawianiu, co zwykle robisz na takie obiady, pokażę to na prezentacji.",
    },
    {
      question: "Czy dojeżdżasz do Podlesia i na Wodącą, czy tylko do centrum?",
      answer:
        "Do całego miasta i bez dopłaty za odległość. Bukowno jest rozciągnięte na ponad trzynaście kilometrów ze wschodu na zachód, więc przy umawianiu najlepiej podaj ulicę, a nie samą dzielnicę — wtedy ustawię godzinę realnie, a nie na oko.",
    },
  ],

  geo: { lat: 50.2647, lng: 19.4553 },
};
