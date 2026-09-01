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
 * RYTRO — GMINA WIEJSKA w powiecie nowosądeckim.
 * 3 641 mieszkańców (31.12.2024), 41,9 km². LESISTOŚĆ 72,0% —
 * najwyższa w dolinie Popradu. Cała gmina w Popradzkim Parku
 * Krajobrazowym.
 *
 * OŚ STRONY: MAŁA GMINA POD RUINĄ. Kontrast liczbowy (najmniejsza,
 * najbardziej leśna, jedyna wiejska i jedyna bez uzdrowiska w dolinie)
 * plus średniowieczna strażnica i komora celna „castrum Ritter”.
 *
 * ⚠️ NIE DAWAĆ RYTRU OSI FOLKLORYSTYCZNEJ. Czarni Górale obejmują
 * co prawda Suchą Strugę, Obłazy i Roztokę Ryterską, ale ta oś
 * należy do Piwnicznej (`piwniczna-zdroj.ts`).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 1279 — pierwsza wzmianka o warowni, w dokumencie św. Kingi,
 * — 17 KWIETNIA 1312 R. — najstarszy pewny dokument zamkowy:
 *   WŁADYSŁAW ŁOKIETEK i przywilej celny na rzecz klarysek;
 *   określenie „CASTRUM RITTER”,
 * — FUNKCJA: STRAŻNICA I KOMORA CELNA na szlaku handlowym
 *   Polska–Węgry, w przełomie Popradu,
 * — PRZEJAZDY KRÓLEWSKIE NA WĘGRY: 1369 Kazimierz Wielki,
 *   1385 Jadwiga i Jagiełło, 1412, 1471,
 * — 1243–1255 — Piotr Wydżga kasztelanem, w jego rękach m.in. Rytro.
 *   ⚠️ „TESTAMENT PIOTRA WYDŻGI” Z 1224 R. Z LEGENDĄ O UKRYTYM
 *   SKARBIE TO LEGENDA, NIE FAKT. Jeśli w ogóle — wyłącznie
 *   jako podanie,
 * — LESISTOŚĆ 72,0% — najwyższa z całej doliny Popradu,
 * — POPRADZKI PARK KRAJOBRAZOWY — utworzony 1987 r., ok. 52 000 ha
 *   plus otulina; 12 rezerwatów leśnych, m.in. Las Lipowy Obrożyska
 *   (100,38 ha), Baniska (55,52 ha), Żebracze (44,67 ha),
 *   Barnowiec (21,61 ha), Łabowiec (10,30 ha), Lembarczek (47,16 ha),
 * — REGON: 376 podmiotów (2024) — 103 na 1000 mieszkańców,
 *   najniższa przedsiębiorczość w dolinie,
 * — JARMARK ŚREDNIOWIECZNY „U RITTERA” — wydarzenie gminne,
 *   edycja 17 sierpnia 2025 r. ⚠️ NUMER EDYCJI I CYKLICZNOŚĆ
 *   NIE POTWIERDZONE,
 * — Stacja narciarska „Ryterski Raj”,
 * — HOTEL PERŁA POŁUDNIA (Rytro 380) — potwierdzony jako istniejący
 *   obiekt; ⚠️ LICZBA PRACOWNIKÓW NIE POTWIERDZONA,
 * — SĄSIEDZI: Nawojowa, Piwniczna-Zdrój, Stary Sącz oraz Szczawnica.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOKŁADNEJ LICZBY SOŁECTW. ⚠️ Serwisy statystyczne podają
 *   4 miejscowości (Rytro, Sucha Struga, Roztoka Ryterska, Obłazy
 *   Ryterskie), BIP gminy ma osobną stronę „Sołectwo Życzanów”,
 *   a Wikipedia wymienia 5 nazw. NIEROZSTRZYGNIĘTE — w tekście
 *   NIE PODAJĘ LICZBY, tylko nazwy,
 * — RADZIEJOWEJ (1262 m, najwyższy szczyt Beskidu Sądeckiego).
 *   ⚠️ PRZYNALEŻNOŚĆ GMINNA SZCZYTU NIEROZSTRZYGNIĘTA —
 *   NIE PRZYPISYWAĆ RYTRU,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — ROKU ODTWORZENIA GMINY (1995) — jedno źródło.
 *
 * PUŁAPKI:
 * — RUINY ZAMKU BYWAJĄ ADRESOWANE JAKO „SUCHA STRUGA”, nie Rytro,
 * — NIE MYLIĆ Z RYTREM W INNYCH REGIONACH — to gmina nad Popradem,
 *   między Starym Sączem a Piwniczną.
 */

export const RYTRO: CityContent = {
  slug: "rytro",
  h1: "Thermomix Rytro – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Rytro — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Rytro: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich miejscowości bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rytro — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Rytro. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Rytra, Suchej Strugi, Roztoki i Obłazów Ryterskich przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rytrze – jak wygląda prezentacja?",
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
      heading: "Zamek, który pobierał cło od Węgrów",
      paragraphs: [
        "Rytro jest najmniejszą gminą w całej dolinie Popradu: trzy tysiące sześćset mieszkańców na czterdziestu dwóch kilometrach kwadratowych. Jest też jedyną wiejską i jedyną, która nigdy nie żyła z wód mineralnych. Za to siedemdziesiąt dwa procent jej powierzchni to las — najwięcej w okolicy — a cała leży w Popradzkim Parku Krajobrazowym.",
        "Nad wsią stoją ruiny zamku i to jest właściwa historia tego miejsca. Warownię wzmiankuje już dokument świętej Kingi z tysiąc dwieście siedemdziesiątego dziewiątego roku, ale najstarszy pewny zapis pochodzi z siedemnastego kwietnia tysiąc trzysta dwunastego. Władysław Łokietek nadał wtedy przywilej celny na rzecz starosądeckich klarysek, a zamek nazwano w nim castrum Ritter.",
        "Funkcja była podwójna: strażnica i komora celna. Przez przełom Popradu biegł szlak handlowy z Polski na Węgry i wszystko, co nim jechało, płaciło tutaj. Zamek stał w miejscu, którego nie dało się ominąć — dolina jest w tym punkcie wąska i stroma.",
        "Tędy jeździli też królowie. W tysiąc trzysta sześćdziesiątym dziewiątym Kazimierz Wielki, w tysiąc trzysta osiemdziesiątym piątym Jadwiga z Jagiełłą, później jeszcze dwukrotnie w piętnastym wieku. Rytro nie było celem żadnej z tych podróży — było punktem, przez który trzeba było przejechać.",
        "Krąży tu również opowieść o testamencie Piotra Wydżgi z tysiąc dwieście dwudziestego czwartego roku i o ukrytym skarbie. Piotr Wydżga rzeczywiście był w połowie trzynastego wieku kasztelanem i trzymał między innymi Rytro — ale sam testament ze skarbem to legenda, nie dokument, i tak go tu podaję.",
        "Dzisiejsza gmina jest wciąż bardzo mała: trzysta siedemdziesiąt sześć zarejestrowanych firm, sto trzy na tysiąc mieszkańców. Żadnego zakładu przemysłowego, żadnej rozlewni. Żyje się tu z turystyki, agroturystyki i pracy w Starym albo Nowym Sączu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Rytro?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość — Rytro, Suchą Strugę, Roztokę czy Obłazy. Gmina jest mała, ale rozciągnięta wzdłuż doliny i po bocznych potokach, więc trasa wygląda inaczej. Na cenę to nie wpływa.",
        "Jeśli prowadzisz agroturystykę albo pracujesz w hotelu, wspomnij o tym od razu. Ferie i lato są u Was zwykle zajęte, a listopad albo kwiecień zupełnie spokojne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rytrze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której najbliższy duży sklep jest w innej gminie",
      paragraphs: [
        "Rytro liczy trzy tysiące sześćset mieszkańców i trzysta siedemdziesiąt sześć zarejestrowanych firm — prawie wyłącznie jedno- i dwuosobowych. Nie ma tu zakładu, do którego chodzi się do pracy; ludzie dojeżdżają do Starego Sącza, Nowego Sącza albo pracują u siebie przy gościach.",
        "Ma to jedną bardzo konkretną konsekwencję dla kuchni. Po większe zakupy jedzie się do sąsiedniej gminy, więc robi się je rzadziej i większymi partiami. A kiedy kupuje się raz na kilka dni, gotowanie musi być planowane — nie robi się „czegoś na dziś”, tylko zapas.",
        "W takim rytmie najlepiej sprawdza się gotowanie jednogarnkowe i seriami. Zupa albo duszone mięso gotuje się bez pilnowania, samo się wyłącza i czeka. Jedna duża porcja podzielona na pojemniki obsługuje kilka dni bez żadnej dodatkowej pracy.",
        "Druga rzecz to zamrażarka. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione w spokojne popołudnie, seriami, w jednym naczyniu. Zimą, kiedy dojazd bywa trudniejszy, to nie wygoda, tylko rozsądek.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto akurat jest w domu. W rodzinie, w której dorośli dojeżdżają kilkanaście kilometrów w jedną stronę, to bywa realnym odciążeniem.",
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
    heading: "Rytro i gotowanie — las, grzyby i kuchnia bez rejestru",
    paragraphs: [
      "Zacznę uczciwie, bo tak jest rzetelniej. Nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy żadnego działającego koła gospodyń. Rytro jest małe i nie ma tu instytucji, które takie wnioski składają.",
      "To, co jest tu pewne, wynika z lasu. Siedemdziesiąt dwa procent powierzchni gminy to drzewa, a wokół leży Popradzki Park Krajobrazowy z kilkunastoma rezerwatami. W takiej gminie kuchnia domowa zawsze opierała się w części na tym, co się zbiera — na grzybach, jagodach i ziołach.",
      "Poza tym gotuje się tu tak, jak w całej dolinie Popradu: ziemniaki, kapusta, kwaśne zupy, biały ser, mięso duszone długo i powoli. Bez listy „naszych dań”, bo takiej listy po prostu nie ma — jest za to konkretny sposób gotowania w konkretnym domu.",
      "Dla urządzenia najciekawsze są dwie rzeczy. Pierwsza to dania długie: gulasz, kwaśnica, duszone mięso, które potrzebują godziny albo dwóch w niskiej temperaturze — a to prowadzi bez człowieka i samo się wyłącza. Druga to przetwory: grzyby, powidła, przeciery, dżemy robione seriami jesienią.",
      "Czego nie zrobi, powiem wprost: nie znajdzie grzyba w lesie i nie zastąpi wprawy. Nie ulepi pierogów i nie doprawi zupy tak, jak Wy ją doprawiacie. Zabiera tę część, która jest wyłącznie czasem — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Gdzie w gminie Rytro dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do Rytra, Suchej Strugi, Roztoki Ryterskiej i Obłazów Ryterskich — bez żadnej dopłaty za odległość. Gmina liczy trzy tysiące sześćset mieszkańców na czterdziestu dwóch kilometrach kwadratowych i jest najmniejsza w całej dolinie Popradu.",
    "Z liczbą sołectw jest tu drobne zamieszanie: statystyka publiczna wymienia cztery miejscowości, a biuletyn informacji publicznej gminy prowadzi osobną stronę sołectwa Życzanów. Nie umiem tego rozstrzygnąć, więc podaję nazwy, a nie liczbę.",
    "Siedemdziesiąt dwa procent powierzchni to lasy — najwięcej w okolicy — a cała gmina leży w Popradzkim Parku Krajobrazowym, utworzonym w tysiąc dziewięćset osiemdziesiątym siódmym roku. W parku jest kilkanaście rezerwatów leśnych; największy, Las Lipowy Obrożyska, ma ponad sto hektarów. Nad wsią stoją ruiny średniowiecznego zamku, a zimą działa stacja narciarska.",
    "Dojazd: przez gminę biegnie linia kolejowa z Tarnowa do Leluchowa i droga krajowa z Nowego Sącza do Piwnicznej. Do Starego Sącza jest stąd kilkanaście kilometrów.",
  ],
  districts: [
    "Rytro",
    "Sucha Struga",
    "Roztoka Ryterska",
    "Obłazy Ryterskie",
  ],

  nearbyHeading: "Piwniczna, Stary Sącz i Nawojowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Piwniczną-Zdrojem, Starym Sączem, Nawojową i Szczawnicą. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Warto wiedzieć, że mieszkańcy Suchej Strugi, Obłazów i Roztoki należą do tej samej grupy etnograficznej co Piwniczna — do Czarnych Górali, zwanych też Nadpopradzkimi. Granica administracyjna biegnie tu inaczej niż kulturowa.",
  ],
  nearbyTowns: [
    "Piwniczna-Zdrój",
    "Stary Sącz",
    "Nawojowa",
    "Szczawnica",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Rytro", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Roztoce albo Obłazach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Cała gmina jest dla mnie jednym obszarem, niezależnie od tego, jak daleko w bok od doliny trzeba skręcić. Przy umawianiu podaj nazwę miejscowości — to potrzebne wyłącznie do trasy.",
    },
    ...faqWspolne("w Rytrze"),
    {
      question: "Dużo mrozimy i robimy przetwory. To urządzenie w tym pomoże?",
      answer:
        "Pomoże i to jest w takiej gminie jak Wasza jego najmocniejsza strona. Przy przetworach cała robota polega na rozdrabnianiu i długim mieszaniu w cieple — powidła czy przecier trzeba pilnować godzinami, żeby nie przywarły. To urządzenie robi bez człowieka i samo się wyłącza. Grzyba w lesie za Was nie znajdzie, ale wszystko, co dzieje się potem w kuchni, przejmuje.",
    },
  ],

  geo: { lat: 49.49, lng: 20.6678 },
};
