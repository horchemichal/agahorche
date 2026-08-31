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
 * LISZKI — GMINA WIEJSKA w powiecie krakowskim.
 * 18 690 mieszkańców (GUS, 31.12.2024), 72,1 km².
 * 14 SOŁECTW: Baczyn, Budzyń, Cholerzyn, Chrosna, Czułów, Jeziorzany,
 * Kaszów, Kryspinów, Liszki (siedziba), Mników, Morawica, Piekary,
 * Rączna, Ściejowice.
 *
 * OŚ STRONY: SIEDEM WIEKÓW ROBIENIA JEDZENIA DLA KRAKOWA — zawód i skład,
 * a NIE unijny certyfikat. Piekary jako osada piekarzy (1286), kukiełka
 * lisiecka sprzedawana pod Mariackim, 34 z 87 rzeźników całego powiatu
 * w 1894 r. Kiełbasa lisiecka wchodzi jako LEKCJA CZYTANIA SKŁADU
 * (85% mięsa klasy I z szynki, do 5% tłuszczu, trzy przyprawy),
 * a nie jako „mamy unijny znak”.
 * ⚠️⚠️ OŚ „NASZ PRODUKT MA UNIJNĄ OCHRONĘ” NALEŻY DO SŁOMNIK (czosnek
 * galicyjski). Tutaj ChOG jest DOWODEM, nie tematem. Nie zaczynać od niego,
 * nie budować wokół niego akapitu otwierającego.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KIEŁBASA LISIECKA: Chronione Oznaczenie Geograficzne (ChOG/PGI, NIE
 *   ChNP!), rozporządzenie Komisji (UE) nr 918/2010 z 12.10.2010,
 *   opublikowane 13.10.2010. 20. polski produkt z unijną ochroną.
 *   OBSZAR: wyłącznie granice administracyjne gmin LISZKI i CZERNICHÓW
 *   (cytat ze specyfikacji). Wpis na krajową LPT: 2005 r.;
 *   Perła w konkursie „Nasze Kulinarne Dziedzictwo” 2003,
 * — SPECYFIKACJA (ze specyfikacji produktu): 85% wieprzowina klasy I
 *   wyłącznie z szynki (mięśnie semimembranosus, biceps, semitendinosus,
 *   gluteus), 10% klasy II, 5% klasy III; woda maks. 5%; na 100 kg surowca
 *   1,5 kg peklosoli, 400 g świeżego czosnku, 300 g pieprzu białego;
 *   kaliber 45–55 mm (średnio 52); długość 35–40 cm, formowana w wieniec;
 *   TŁUSZCZ SUROWY DO 5%; kawałki mięsa 3–5 cm; wędzenie 3,5–4,5 h
 *   w trzech fazach na drewnie liściastym,
 * — KUKIEŁKA LISIECKA: Lista Produktów Tradycyjnych, wpis 24.06.2010,
 *   kategoria wyroby piekarnicze. Długość 25–30 cm, szerokość do 7 cm,
 *   waga ok. 250 g, kształt wrzecionowaty, miękisz mlecznobiały.
 *   AMBROŻY GRABOWSKI (ur. 1782) zapisał, że sprzedawano ją „w dnie
 *   targowe (…) w rynku przed kościołem Panny Maryi” — czyli na Rynku
 *   Głównym pod Mariackim,
 * — RZEŹNICY: 1894 — 87 rzeźników w powiecie krakowskim, z czego 34
 *   (39,1%) w gminach Liszki i Czernichów. 1949 — 45 prywatnych masarzy
 *   w powiecie, 18 (40%) w tych dwóch gminach. 1903–1936: 14 nowych
 *   koncesji rzeźniczych w Liszkach. Do końca XVII w. przez obie gminy
 *   biegł szlak wołowy,
 * — PIEKARY: pierwsza wzmianka 1286 („Pekare”), dokument Leszka Czarnego;
 *   osada piekarzy obsługujących opactwo w Tyńcu po drugiej stronie Wisły;
 *   prawo niemieckie 1456. 1793 — spotkanie Kościuszki z gen. Wodzickim,
 * — HISTORIA: 1123–1125 nadanie ziem opactwu tynieckiemu (pierwsza
 *   wzmianka o Liszkach); ok. 1280 pierwszy drewniany kościół;
 *   1325 ok. 2000 mieszkańców; 1444 fundacja kaplicy; 1585 konsekracja
 *   kościoła murowanego; 1605 Mikołaj Wolski daruje Mników kamedułom;
 *   1873 budowa obecnego kościoła św. Mikołaja, konsekracja 1888,
 *   wieża 52 m,
 * — WIKLINA: 1874 — Maksymilian Machalski zakłada szkołę koszykarską.
 *   Studium gminy wymienia wiklinę obok kiełbasy jako produkt rozpoznawalny,
 * — DOLINA MNIKOWSKA: rezerwat 20,89 ha, wąwóz ok. 2 km w dolinie Sanki,
 *   ściany do 80 m; obraz Matki Boskiej Skalskiej z 1863 r. we wnęce
 *   skalnej, przypisywany Waleremu Eljaszowi-Radzikowskiemu,
 * — GOSPODARKA (Studium 2023): przetwórstwo przemysłowe 20,4%,
 *   handel 20,3%, budownictwo 13,8%, działalność profesjonalna 11,3%,
 * — DEMOGRAFIA: +24,3% od 2002; średni wiek 39,4; saldo migracji +169,
 * — DOJAZD: A4 przez gminę dwoma odcinkami, zjazd w rejonie Piekar;
 *   DW 780 i DW 774 (do lotniska Balice); KOLEI W GMINIE BRAK;
 *   MPK linie 219, 229, 239, 249, 279 do przystanku Liszki Urząd Gminy,
 * — WSPÓŁRZĘDNE: 50,03836 / 19,76703.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW PRODUCENTÓW KIEŁBASY. Nie ma publicznego, aktualnego wykazu
 *   certyfikowanych zakładów; status bywa zawieszany. NIE WYMIENIAĆ,
 * — LICZBY PRODUCENTÓW. Gmina Czernichów podaje dziewięć firm, ale bez
 *   daty. Nie użyte jako liczba twarda,
 * — NAZWANYCH PRACODAWCÓW. Brak wiarygodnej listy,
 * — STYLU KOŚCIOŁA Z 1873 R. Parafia pisze „romański”, źródła turystyczne
 *   „neogotycki”. Pominięte,
 * — TWIERDZENIA, ŻE BANK W LISZKACH BYŁ DRUGI W POLSCE. Strona gminy tak
 *   pisze, ale historia Krakowskiego Banku Spółdzielczego tego nie
 *   potwierdza. NIE POWTARZAĆ,
 * — PRZEPRAWY PIEKARY–TYNIEC jako działającej. To projekt z budżetu
 *   obywatelskiego z 2016 r.; brak potwierdzenia uruchomienia,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — ChOG TO NIE ChNP. Nawet krakow.pl podaje błędnie „Chroniona Nazwa
 *   Pochodzenia”. Kiełbasa lisiecka ma Chronione OZNACZENIE GEOGRAFICZNE,
 * — „ŚREDNICA 35–40 cm” w źródłach wtórnych to DŁUGOŚĆ/wieniec. Kaliber
 *   to 45–55 mm. Błąd kompromitujący — nie powielać,
 * — TYNIEC LEŻY W KRAKOWIE (Dzielnica VIII Dębniki), nie w gminie
 *   wiejskiej. Piekary są naprzeciw niego, na drugim brzegu Wisły,
 * — „ZALEW KRYSPINÓW” leży w sołectwach BUDZYŃ i CHOLERZYN, nie
 *   w Kryspinowie. Oficjalna nazwa: Zalew na Piaskach,
 * — AKTUALNY ADRES URZĘDU to ul. Mały Rynek 2. Katalogi podają stary
 *   „Liszki 230”,
 * — KIEŁBASA NOSI NAZWĘ OD LISZEK, ale większość zakładów masarskich
 *   działa w CZERNICHOWIE. Nie zawłaszczać jej dla jednej gminy.
 */

export const LISZKI: CityContent = {
  slug: "liszki",
  h1: "Thermomix Liszki – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Liszki — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Liszki: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich czternastu sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Liszki — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Liszki. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Liszek, Kaszowa, Morawicy, Kryspinowa i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie czternaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Liszkach – jak wygląda prezentacja?",
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
      heading: "Siedemset lat robienia jedzenia dla Krakowa",
      paragraphs: [
        "Sołectwo Piekary nazywa się tak, bo mieszkali w nim piekarze. Nie jest to domysł: pierwsza wzmianka pochodzi z tysiąc dwieście osiemdziesiątego szóstego roku, z dokumentu Leszka Czarnego, a wieś powstała jako osada obsługująca opactwo benedyktynów w Tyńcu, leżące naprzeciwko, po drugiej stronie Wisły.",
        "Chleb stąd trafiał zresztą dalej niż do klasztoru. Ambroży Grabowski, krakowski księgarz i historyk urodzony w tysiąc siedemset osiemdziesiątym drugim roku, zapisał, że kukiełki lisieckie sprzedawano w dni targowe na Rynku Głównym, przed kościołem Mariackim — włościanie siedzieli z nimi na ziemi, rzędem. Kukiełka lisiecka jest dziś na ministerialnej Liście Produktów Tradycyjnych, wpisana dwudziestego czwartego czerwca dwa tysiące dziesiątego roku.",
        "Drugim zawodem tej gminy było masarstwo, i tu liczby robią wrażenie. W tysiąc osiemset dziewięćdziesiątym czwartym roku w całym powiecie krakowskim pracowało osiemdziesięciu siedmiu rzeźników — z czego trzydziestu czterech, czyli blisko czterdzieści procent, w Liszkach i sąsiednim Czernichowie. Pół wieku później, w tysiąc dziewięćset czterdziestym dziewiątym, proporcja była taka sama: osiemnastu z czterdziestu pięciu.",
        "Z tego wyrosła kiełbasa lisiecka. I tu chciałabym zatrzymać się nie na certyfikacie, tylko na tym, co w niej naprawdę jest — bo to jest w gruncie rzeczy lekcja czytania składu.",
        "Osiemdziesiąt pięć procent surowca to mięso klasy pierwszej i to nie „mięso wieprzowe” w ogóle, tylko cztery konkretne mięśnie z szynki, wymienione w specyfikacji z nazwy. Tłuszczu surowego może być najwyżej pięć procent. Przypraw są trzy: sól peklująca, świeży czosnek i biały pieprz — czterysta gramów czosnku na sto kilogramów mięsa. Kawałki widoczne na przekroju mają od trzech do pięciu centymetrów, bo mięso się kroi, a nie miele na farsz.",
        "Kiedy się to przeczyta, zwykła kiełbasa z półki zaczyna wyglądać inaczej. I o to mi chodzi bardziej niż o unijny znak: że da się dokładnie wiedzieć, co się je, jeśli ktoś zadał sobie trud spisania tego na papierze.",
        "Warto przy okazji sprostować dwie rzeczy. Po pierwsze, kiełbasa nosi nazwę od Liszek, ale obszar chroniony obejmuje dwie gminy — Liszki i Czernichów — a większość zakładów działa po tej drugiej stronie. Po drugie, to Chronione Oznaczenie Geograficzne, a nie Chroniona Nazwa Pochodzenia; mylą to nawet oficjalne serwisy.",
        "Na koniec rzecz spoza kuchni, żeby obraz był pełny: w tysiąc osiemset siedemdziesiątym czwartym roku Maksymilian Machalski założył w Liszkach szkołę koszykarską, a wiklina do dziś figuruje w dokumentach gminy obok kiełbasy jako drugi tutejszy wyrób rozpoznawalny.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Liszki?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich czternaście, od Kryspinowa i Cholerzyna przy samej granicy Krakowa po Czułów i Chrosną na zachodzie. Trasa wygląda inaczej, koszt jest ten sam, czyli żaden.",
        "Gmina leży tuż przy autostradzie i przy drodze na lotnisko, więc dużo osób wraca tu do domu późno. Wieczorne terminy w tygodniu są u mnie standardem, nie wyjątkiem — jeśli pasuje Ci dziewiętnasta, powiedz to od razu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Liszki"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Wiedzieć, co się je",
      paragraphs: [
        "W gminie, w której specyfikacja lokalnej kiełbasy wymienia mięśnie z nazwy łacińskiej, temat składu nie jest abstrakcyjny. Ludzie tutaj wiedzą, czym różni się mięso kruszone od mielonego i dlaczego dobra wędlina nie może kosztować tyle, co tania.",
        "Ta sama uwaga zaczyna się przydawać przy zwykłych, codziennych rzeczach — i to jest miejsce, w którym urządzenie faktycznie coś zmienia. Nie dlatego, że gotuje lepiej, tylko dlatego, że pozwala zrobić samemu to, co zwykle się kupuje gotowe, i wtedy skład jest po prostu znany.",
        "Najbardziej oczywiste są pasty i smarowidła. Pasta z fasoli, z jajek, z ryby albo z pieczonej papryki powstaje w kilka minut z rzeczy, które i tak są w domu — i nie ma w niej stabilizatorów ani cukru dodanego tam, gdzie nikt by się go nie spodziewał.",
        "Druga rzecz to jogurt i twarożek. Robi się je z jednego składnika, czyli z mleka, i to zwykle pierwsza rzecz, którą klientki zaczynają robić same, kiedy przeczytają etykietę kubka ze sklepu.",
        "Trzecia dotyczy dzieci. Zupy i przeciery dla najmłodszych gotuje się i miksuje w jednym naczyniu, bez soli i bez przelewania gorących rzeczy między garnkiem a blenderem. Rodzice zwykle właśnie tu zaczynają czytać składy najuważniej.",
        "I zastrzeżenie, żeby nie było nieporozumienia: kiełbasy lisieckiej urządzenie nie zrobi i nie ma takiego zamiaru. Tę robi się w wędzarni, przez trzy i pół do czterech i pół godziny, na drewnie liściastym, i lepiej ją po prostu kupić od kogoś, kto ma do tego papiery.",
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
    heading: "Liszki i gotowanie — kukiełka, kiełbasa i sztuka czytania składu",
    paragraphs: [
      "Kukiełka lisiecka to pieczywo o kształcie wrzecionowatym, długie na dwadzieścia pięć do trzydziestu centymetrów i ważące około dwustu pięćdziesięciu gramów, o cienkiej, lekko chrupiącej skórce i mlecznobiałym miękiszu z dużymi porami. W opisie z rejestru jest jeszcze jeden detal, który mówi wszystko o tym, jak ją robiono: na spodzie mogą zostać ślady węgla drzewnego z pieca opalanego drewnem.",
      "Kiełbasa lisiecka to druga rzecz, z której gmina jest znana, i warto ją znać nie od strony znaku, tylko od strony specyfikacji. Osiemdziesiąt pięć procent mięsa klasy pierwszej wyłącznie z szynki, do pięciu procent tłuszczu, trzy przyprawy, kawałki mięsa od trzech do pięciu centymetrów, kaliber osłonki pięćdziesiąt dwa milimetry. Wędzi się ją od trzech i pół do czterech i pół godziny w trzech fazach, na drewnie olchowym, bukowym lub owocowym.",
      "Obszar chroniony to dokładnie dwie gminy: Liszki i Czernichów. Nie okolice Krakowa, nie powiat — te dwie, w granicach administracyjnych, tak zapisano w dokumencie rejestracyjnym.",
      "Poza tym gotuje się tu normalnie, po podkrakowsku: rosół, ziemniaki, kapusta, ciasto drożdżowe, przetwory z ogrodu. Z tą różnicą, że jak ktoś ma pod ręką dobrą wędlinę i dobry chleb, to śniadanie i kolacja robią się same, a gotować trzeba właściwie tylko obiad.",
      "Dla urządzenia najciekawsze są tu pasty, domowy nabiał i zupy — czyli dokładnie te rzeczy, przy których skład kupnego produktu bywa najbardziej rozczarowujący. Czego nie zrobi, mówię wprost: nie uwędzi kiełbasy i nie upiecze kukiełki w piecu opalanym drewnem. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Liszki dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czternastu, bez żadnej dopłaty za odległość. Gmina liczy blisko dziewiętnaście tysięcy mieszkańców na siedemdziesięciu dwóch kilometrach kwadratowych i graniczy z Krakowem od zachodu.",
    "Sołectwa to: Baczyn, Budzyń, Cholerzyn, Chrosna, Czułów, Jeziorzany, Kaszów, Kryspinów, Liszki, Mników, Morawica, Piekary, Rączna i Ściejowice.",
    "Jedna rzecz do sprostowania, bo nazwa myli: popularny Zalew Kryspinów leży w sołectwach Budzyń i Cholerzyn, a nie w Kryspinowie. Oficjalnie nazywa się Zalew na Piaskach.",
    "W Mnikowie jest rezerwat Dolina Mnikowska — niespełna dwukilometrowy wąwóz w dolinie Sanki, ze ścianami do osiemdziesięciu metrów i obrazem Matki Boskiej namalowanym we wnęce skalnej w tysiąc osiemset sześćdziesiątym trzecim roku. Drugi rezerwat to Zimny Dół.",
    "Dojazd: kolei w gminie nie ma, ale przez jej teren przechodzi autostrada A4 ze zjazdem w rejonie Piekar, a do lotniska w Balicach jest kilkanaście minut. Do Liszek dojeżdżają też krakowskie autobusy podmiejskie.",
  ],
  districts: [
    "Liszki",
    "Kaszów",
    "Morawica",
    "Kryspinów",
    "Cholerzyn",
    "Piekary",
    "Mników",
    "Rączna",
    "Czułów",
    "Jeziorzany",
    "Ściejowice",
    "Budzyń",
    "Baczyn",
    "Chrosna",
  ],

  nearbyHeading: "Czernichów, Zabierzów i Skawina też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Czernichowem, Zabierzowem, Skawiną, Krzeszowicami i z samym Krakowem. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Warto wiedzieć, że obszar chroniony kiełbasy lisieckiej obejmuje dwie gminy — tę i Czernichów. To nie jest wyłączna własność Liszek, mimo nazwy.",
  ],
  nearbyTowns: [
    "Czernichów",
    "Zabierzów",
    "Skawina",
    "Krzeszowice",
    "Kraków",
    "Alwernia",
  ],

  about: blokOMnie("do gminy Liszki", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Kryspinowie albo w Ściejowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie czternaście sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Liszki"),
    {
      question: "Czy w Thermomixie da się zrobić własne wędliny?",
      answer:
        "Uczciwa odpowiedź brzmi: nie w takim sensie, w jakim robi się je tutaj. Kiełbasa lisiecka wędzi się od trzech i pół do czterech i pół godziny w trzech fazach, na drewnie liściastym — do tego potrzebna jest wędzarnia i nic tego nie zastąpi. Urządzenie robi natomiast dobrze wszystko to, co idzie obok wędliny: pasty kanapkowe, pieczone smarowidła, domowy twarożek i chrzan, a przy okazji sosy i zupy. Jeśli zależy Ci na kontroli składu, to właśnie tam jest największa różnica.",
    },
  ],

  geo: { lat: 50.03836, lng: 19.76703 },
};
