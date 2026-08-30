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
 * RZEPIENNIK STRZYŻEWSKI — GMINA WIEJSKA w powiecie tarnowskim.
 * 6 505 mieszkańców (GUS, 31.12.2024), 70,7 km², 93 os./km²,
 * −4,5% od 2002, średni wiek 40,1, REGON 455 (390 osób fizycznych).
 * 6 SOŁECTW: Kołkówka, Olszyny, Rzepiennik Biskupi, Rzepiennik
 * Strzyżewski (siedziba), Rzepiennik Suchy, Turza.
 *
 * OŚ STRONY: CZTERY RZEPIENNIKI, DWIE GMINY, DWA KODY POCZTOWE.
 * Rzepiennik Strzyżewski, Biskupi i Suchy należą do tej gminy
 * (kod 33-163), ale RZEPIENNIK MARCISZEWSKI NALEŻY DO GMINY GROMNIK
 * i ma kod 33-180, obsługiwany przez inny urząd pocztowy. Cztery wsie
 * o tym samym pierwszym członie nazwy, w promieniu ok. 10 km, w dwóch
 * gminach i dwóch obszarach pocztowych. Dla kogoś, kto dowozi sprzęt
 * pod konkretny adres, to realny problem, nie ciekawostka.
 * ⚠️⚠️ ROZDZIELENIE OD OSI SUŁOSZOWEJ: tam problemem był BRAK NAZW
 * ULIC (adres = sam numer domu). Tutaj adresy też są numeryczne, ale
 * istotą jest POWTARZALNOŚĆ CZŁONU NAZWY WSI PRZEZ GRANICĘ GMINY
 * I OBSZARU POCZTOWEGO. To różne rzeczy i tekst musi to rozdzielać.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — CZTERY RZEPIENNIKI (potwierdzone trzema źródłami: polskawliczbach,
 *   gromnik.pl, rzepiennik.pl):
 *   Rzepiennik MARCISZEWSKI — gmina GROMNIK, kod 33-180, UP Gromnik
 *   ul. Pogórze 2, 660 mieszkańców (NSP 2021);
 *   Rzepiennik BISKUPI — ta gmina, kod 33-163, 1 389 mieszkańców;
 *   Rzepiennik STRZYŻEWSKI — ta gmina, kod 33-163, UP Ciężkowice
 *   Rynek 16;
 *   Rzepiennik SUCHY — ta gmina, kod 33-163.
 *   ⚠️ Nie ustalono, czy w Polsce istnieją Rzepienniki poza tymi
 *   czterema — wykaz TERYT był niedostępny. To argument z milczenia
 *   ośmiu źródeł, nie dowód,
 * — SIEDZIBA URZĘDU: Rzepiennik Strzyżewski 400, 33-163 — POTWIERDZONE
 *   (rzepiennik.pl). Żadnego przeniesienia. ⚠️ Ale RZEPIENNIK BISKUPI
 *   (1 389 mieszk.) JEST LUDNIEJSZY OD SIEDZIBY i to on ma zabytkowy
 *   kościół drewniany oraz historyczne pierwszeństwo parafialne,
 * — ETYMOLOGIA „BISKUPI”: 1347 przywilej lokacyjny KAZIMIERZA WIELKIEGO
 *   dla Rzepiennika Biskupiego: „przydzielamy jeden łan, który powinien
 *   być wolny od czynszu” na rzecz przyszłego kościoła — stąd nazwa,
 *   własność biskupia. ⚠️ Etymologii nazw „Suchy”, „Strzyżewski”
 *   i „Marciszewski” NIE POTWIERDZONO,
 * — HISTORIA (rzepiennik.pl): osadnictwo od neolitu; 1288 TURZA
 *   wymieniona w przywileju jako posiadłość benedyktynów tynieckich;
 *   1344 biskup krakowski Jan Radlica zezwala założyć wieś w lasach nad
 *   Czerwonym Potokiem, KOŁKÓWKA od sołtysa Jana Kołka; 1347 przywilej
 *   dla Rzepiennika Biskupiego; przed 1480 Długosz wymienia drewniany
 *   kościół pw. św. Klemensa; parafia w Rzepienniku Biskupim przez PIĘĆ
 *   WIEKÓW obejmowała SZEŚĆ WSI na przestrzeni 20 KM, pierwszy podział
 *   dopiero 1840; 1755–1758 „powstanie libuskie” przeciwko pańszczyźnie;
 *   1846 rabacja dotknęła ok. 20 wsi, w tym Rzepiennik Marciszewski,
 *   Turzę i Olszyny; klęska głodu 1847–1848 — ok. 2 000 ofiar,
 * — KOŚCIOŁY DREWNIANE: św. Jana Chrzciciela w RZEPIENNIKU BISKUPIM,
 *   XVI w. (ok. 1550), zrąb z bali modrzewiowych i sosnowych,
 *   jednonawowy, gotycki; Podwyższenia św. Krzyża w OLSZYNACH, 1900,
 *   zrębowy, trzynawowy, chrzcielnica neogotycka 1910. Kościół
 *   Miłosierdzia Bożego w Rzepienniku Strzyżewskim 1947–1949, rejestr
 *   A-354, wpis 12 maja 1993, muzeum parafialne od 1992,
 * — LAS DĄBRY: 11 SIERPNIA 1942 Niemcy rozstrzelali 364 OSOBY;
 *   ofiary z Rzepiennika i okolicznych miejscowości, w ramach
 *   likwidacji getta. UPAMIĘTNIONE: pomnik w miejscu egzekucji
 *   i zbiorowej mogiły, z Gwiazdą Dawida, napisy po hebrajsku
 *   i po polsku; inskrypcja „Ku pamięci 364 ofiar pomordowanych przez
 *   zbirów Niemieckich. Za komitet Gorlicki J. Peller”. Lokalizacja:
 *   ok. 2 km na wschód od kościoła w kierunku Ciężkowic, dojście
 *   niebieskim szlakiem. W gminie także cmentarz żydowski,
 * — ŚRODOWISKO (rzepiennik.pl): gmina leży „pomiędzy rzekami Ropą
 *   i Białą”, w dolinie RZEPIANKI (zlewnia Białej) i OLSZYNKI
 *   (zlewnia Ropy) — czyli NA DZIALE WODNYM DWÓCH ZLEWNI.
 *   Lasy ok. 19%; 92% terenu pod ochroną; 8 pomników przyrody
 *   (głównie wiekowe dęby); ~140 gatunków ptaków, w tym bocian czarny,
 * — ROLNICTWO: 1 513 GOSPODARSTW, z czego 1 002 (66%) o powierzchni
 *   1–5 ha; ŚREDNIA 3,2 HA. Uprawy: ZIEMNIAKI W 84,7% GOSPODARSTW,
 *   zboża (pszenica i owies) w 81,6%. Sadownictwo 14 ha, przewaga
 *   jabłoni (58,5%) i śliw (22,2%). Grunty orne 3 759 ha, ugorowane
 *   835 ha. GLEBY: KLASA IV — 82,8%, klasy III — 10,7%, V–VI — 6,5%.
 *   73% powierzchni gminy to użytki rolne,
 * — PRACODAWCY (rzadkość w tej okolicy — nazwani z nazwy):
 *   Firma Handlowo-Produkcyjna „BARBARA” Sp. z o.o. (Turza),
 *   Osika Meble Spółka Jawna (Rzepiennik Biskupi), Gminna Spółdzielnia
 *   „Samopomoc Chłopska”, Urząd Gminy. Dominują usługi, handel,
 *   budownictwo i PRODUKCJA WYROBÓW DREWNIANYCH,
 * — INFRASTRUKTURA: 133 km dróg gminnych, OK. 40% GRUNTOWYCH.
 *   Wszystkie miejscowości zgazyfikowane. Połączenia z Krakowem,
 *   Gorlicami i Tarnowem obsługują przewoźnicy prywatni,
 * — WSPÓŁRZĘDNE: ok. 49,8072 / 21,0352. ⚠️ ORIENTACYJNE — do
 *   zweryfikowania.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — CMENTARZY WOJENNYCH Z I WOJNY JAKO OSI. W gminie są cmentarz
 *   nr 114 w Rzepienniku Strzyżewskim (139 grobów) i nr 113
 *   w Olszynach (179 pochowanych, proj. J. Szczepkowskiego), ale OŚ
 *   CMENTARNA NALEŻY DO ŁUŻNEJ i MOSZCZENICY. Najwyżej wzmianka,
 * — WYSOKOŚCI NAD POZIOMEM MORZA I KLIMATU. To oś
 *   JERZMANOWIC-PRZEGINI. Wzniesienia 300–500 m, średnia 7,5 °C,
 *   opady 750 mm — NIE UŻYTE,
 * — LICZBY MIESZKAŃCÓW SAMEGO Rzepiennika Strzyżewskiego. Nie ustalona,
 * — CZY KOŚCIÓŁ W RZEPIENNIKU BISKUPIM należy do Szlaku Architektury
 *   Drewnianej i jaki ma numer rejestru. Serwis wpadał w pętlę
 *   przekierowań,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Strona „Rejestracja KGW” istnieje,
 *   ale bez wykazu,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — ETYMOLOGII NAZW poza „Biskupim”,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA.
 *
 * PUŁAPKI:
 * — ⭐ CZTERY RZEPIENNIKI, DWIE GMINY, DWA KODY. To jest oś tej strony,
 * — SIEDZIBA GMINY NIE JEST JEJ NAJWIĘKSZĄ WSIĄ — Rzepiennik Biskupi
 *   jest ludniejszy,
 * — OŚ SUŁOSZOWEJ (brak nazw ulic) to CO INNEGO. Nie mieszać,
 * — ROZBIEŻNOŚĆ REGON: 340 podmiotów na koniec 2015, GUS 2024 daje 455.
 */

export const RZEPIENNIK_STRZYZEWSKI: CityContent = {
  slug: "rzepiennik-strzyzewski",
  h1: "Thermomix Rzepiennik Strzyżewski – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Rzepiennik Strzyżewski — prezentacja",
  seoDescription:
    "Thermomix w gminie Rzepiennik Strzyżewski: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rzepiennik Strzyżewski — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Rzepiennik Strzyżewski. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Rzepiennika Strzyżewskiego, Rzepiennika Biskupiego, Olszyn, Turzy i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sześć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rzepienniku Strzyżewskim – jak wygląda prezentacja?",
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
      heading: "Cztery Rzepienniki, dwie gminy, dwa kody pocztowe",
      paragraphs: [
        "Rzepienników jest cztery. Strzyżewski, Biskupi i Suchy leżą w tej gminie i mają kod pocztowy trzydzieści trzy sto sześćdziesiąt trzy. Czwarty, Marciszewski, leży w gminie Gromnik i ma kod trzydzieści trzy sto osiemdziesiąt, a obsługuje go urząd pocztowy w Gromniku.",
        "Wszystkie cztery mieszczą się w promieniu mniej więcej dziesięciu kilometrów. Trzy z nich wyglądają na mapie jak jedna rozciągnięta wieś. A jednak przebiega przez nie granica gminy i granica obszaru pocztowego.",
        "To nie jest ciekawostka dla kolekcjonerów nazw. Adres zapisany jako sam Rzepiennik, bez przymiotnika, trafia w tej okolicy na chybił trafił. Kurier jedzie do złej wsi, przesyłka wraca, a nawigacja pokazuje punkt oddalony o kwadrans jazdy od miejsca, w którym ktoś czeka.",
        "Sama nazwa Biskupi ma zresztą konkretne pochodzenie. W tysiąc trzysta czterdziestym siódmym roku Kazimierz Wielki wydał przywilej lokacyjny, w którym przydzielił jeden łan wolny od czynszu na rzecz przyszłego kościoła — wieś była własnością biskupią i stąd przydomek. Pochodzenia trzech pozostałych przymiotników nie udało mi się potwierdzić i nie będę zgadywać.",
        "Jest tu jeszcze jeden zaskakujący szczegół. Siedziba gminy nie jest jej największą miejscowością — w Rzepienniku Biskupim mieszka blisko tysiąc czterysta osób, więcej niż w Strzyżewskim. To Biskupi ma też najstarszy zabytek okolicy: drewniany, gotycki kościół świętego Jana Chrzciciela z około tysiąc pięćset pięćdziesiątego roku, zbudowany z bali modrzewiowych i sosnowych. I to tamtejsza parafia przez pięć wieków obejmowała sześć wsi rozrzuconych na dwudziestu kilometrach; pierwszy podział nastąpił dopiero w tysiąc osiemset czterdziestym.",
        "Gmina leży na dziale wodnym: Rzepianka płynie do Białej, Olszynka do Ropy. To znaczy, że woda z jednego końca gminy trafia do innej rzeki niż woda z drugiego. Dziewięćdziesiąt dwa procent terenu jest objęte jakąś formą ochrony przyrody, rośnie tu osiem pomnikowych dębów i gniazduje około stu czterdziestu gatunków ptaków, w tym bocian czarny.",
        "Jedenastego sierpnia tysiąc dziewięćset czterdziestego drugiego roku w lesie Dąbry, dwa kilometry na wschód od kościoła, Niemcy rozstrzelali trzysta sześćdziesiąt cztery osoby. Miejsce jest upamiętnione: nad zbiorową mogiłą stoi pomnik z Gwiazdą Dawida i napisami po hebrajsku i po polsku. Prowadzi do niego niebieski szlak.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Rzepiennik Strzyżewski?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj pełną nazwę wsi, z przymiotnikiem. Strzyżewski, Biskupi czy Suchy — to trzy różne miejscowości, a czwarty Rzepiennik, Marciszewski, leży w ogóle w innej gminie. Samo słowo Rzepiennik nie wystarczy nikomu: ani mnie, ani nawigacji, ani kurierowi.",
        "Warto też podać numer domu i ewentualnie najbliższy punkt orientacyjny. Czterdzieści procent dróg gminnych to nadal drogi gruntowe, więc czasem lepiej wiedzieć z góry, gdzie skręcić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Rzepiennik Strzyżewski"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Ziemniak w osiemdziesięciu pięciu procentach gospodarstw",
      paragraphs: [
        "W tej gminie jest tysiąc pięćset trzynaście gospodarstw rolnych, z czego dwie trzecie ma od jednego do pięciu hektarów. Średnia to trzy przecinek dwa hektara. To nie są gospodarstwa towarowe — to ziemia, z której się je.",
        "I jedna uprawa dominuje bezwzględnie: ziemniaki sadzi osiemdziesiąt pięć procent tutejszych gospodarstw. Więcej niż zboża. Na glebach czwartej klasy, które stanowią ponad cztery piąte gruntów gminy, akurat ziemniak radzi sobie najlepiej.",
        "Ziemniak ma jednak w kuchni jedną wadę: jest nudny, jeśli robi się z niego tylko puree i wodziankę. A robienia z niego czegoś więcej zwykle nie chce się podjąć, bo to praca — tarcie, odciskanie, wyrabianie.",
        "Tu urządzenie zdejmuje dokładnie tę część. Placki ziemniaczane, kopytka, kluski śląskie, knedle — wszystko zaczyna się od utarcia albo zmielenia ziemniaków, a to jest kwestia kilkunastu sekund zamiast kwadransa nad tarką. Ciasto na kopytka wyrabia się w tym samym naczyniu.",
        "Druga rzecz to zupy. Krem z ziemniaków z porem, żurek zabielany, kartoflanka — gotują się bez pilnowania i miksują w tym samym naczyniu, bez przelewania do blendera. Przy dużym garnku to różnica między jednym naczyniem do zmywania a czterema.",
        "Trzecia dotyczy sadu, bo choć niewielkiego, to jednak jest — czternaście hektarów, w większości jabłonie i śliwy. Powidła i mus jabłkowy gotują się tu bez mieszania i bez przywierania, a to akurat przy powidłach jest cała trudność.",
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
    heading: "Rzepiennik i gotowanie — ziemniaki, jabłonie i drewno",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń. Sąsiednie Ryglice mają dwa takie wpisy — gomółki kowalowskie i prołziok — ale to ich produkty, nie tutejsze, i nie będę ich przepisywać.",
      "To, co o kuchni tej gminy da się powiedzieć z liczbami w ręku, jest bardzo konkretne. Gospodarstw rolnych jest tysiąc pięćset trzynaście, dwie trzecie z nich ma poniżej pięciu hektarów, a średnia wynosi nieco ponad trzy hektary. Ziemniaki uprawia osiemdziesiąt pięć procent gospodarstw, zboża osiemdziesiąt dwa. Sadów jest czternaście hektarów, w większości jabłonie i śliwy.",
      "Gleby są tu czwartej klasy w ponad osiemdziesięciu procentach, a użytki rolne zajmują niemal trzy czwarte powierzchni gminy. To znaczy, że ziemia rodzi solidnie, ale bez fajerwerków — i że kuchnia jest tu prosta, ziemniaczano-zbożowa, z jabłkami i śliwami jesienią.",
      "Osobno warto wiedzieć o drewnie: w gminie działa firma meblarska w Rzepienniku Biskupim, a produkcja wyrobów drewnianych jest tu jedną z wiodących branż. Drewniane są też dwa tutejsze kościoły — ten z Rzepiennika Biskupiego ma około czterystu siedemdziesięciu pięciu lat.",
      "Dla urządzenia najsensowniejsze są tu wszystkie rzeczy z ziemniaków, przy których najwięcej roboty: placki, kopytka, kluski, zupy krem. Do tego powidła i musy z własnego sadu. Czego nie zrobi, mówię wprost: nie usmaży placków i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i tarciem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Rzepiennik Strzyżewski dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu, bez żadnej dopłaty za odległość. Gmina liczy około sześciu i pół tysiąca mieszkańców na siedemdziesięciu kilometrach kwadratowych.",
    "Sołectwa to: Rzepiennik Strzyżewski, Rzepiennik Biskupi, Rzepiennik Suchy, Olszyny, Kołkówka i Turza. Największą wsią nie jest siedziba gminy, tylko Rzepiennik Biskupi, liczący blisko tysiąc czterysta osób.",
    "Czwarty Rzepiennik — Marciszewski — leży w sąsiedniej gminie Gromnik i ma inny kod pocztowy. Przy podawaniu adresu zawsze warto dodać przymiotnik.",
    "W Rzepienniku Biskupim stoi drewniany, gotycki kościół świętego Jana Chrzciciela z około tysiąc pięćset pięćdziesiątego roku, zbudowany z bali modrzewiowych i sosnowych. Drugi drewniany kościół, z tysiąc dziewięćsetnego roku, jest w Olszynach.",
    "W lesie Dąbry, około dwóch kilometrów na wschód od kościoła w kierunku Ciężkowic, znajduje się miejsce egzekucji z jedenastego sierpnia tysiąc dziewięćset czterdziestego drugiego roku, w której zginęły trzysta sześćdziesiąt cztery osoby. Nad zbiorową mogiłą stoi pomnik; prowadzi do niego niebieski szlak.",
    "Dojazd: kolei w gminie nie ma. Dróg gminnych jest sto trzydzieści trzy kilometry, z czego około czterdziestu procent to drogi gruntowe. Połączenia z Tarnowem, Gorlicami i Krakowem obsługują przewoźnicy prywatni.",
  ],
  districts: [
    "Rzepiennik Strzyżewski",
    "Rzepiennik Biskupi",
    "Rzepiennik Suchy",
    "Olszyny",
    "Kołkówka",
    "Turza",
  ],

  nearbyHeading: "Gromnik, Ciężkowice i Szerzyny też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Gromnikiem, Ciężkowicami, Szerzynami, Tuchowem i Bobową. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, od którego zależy, czy trafię pod właściwy adres: Rzepiennik Marciszewski należy do gminy Gromnik, a nie do tej. Trzy Rzepienniki są tutaj, czwarty za granicą gminy — i ma inny kod pocztowy oraz inny urząd pocztowy.",
  ],
  nearbyTowns: [
    "Gromnik",
    "Ciężkowice",
    "Szerzyny",
    "Tuchów",
    "Bobowa",
    "Ryglice",
  ],

  about: blokOMnie("do gminy Rzepiennik Strzyżewski", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Który Rzepiennik? Jest ich kilka i ciągle się mylą.",
      answer:
        "Są cztery i to jest realny problem, nie przesada. Rzepiennik Strzyżewski, Biskupi i Suchy leżą w tej gminie i mają kod trzydzieści trzy sto sześćdziesiąt trzy. Czwarty, Marciszewski, należy do gminy Gromnik i ma kod trzydzieści trzy sto osiemdziesiąt, obsługiwany przez inny urząd pocztowy. Wszystkie cztery są w promieniu około dziesięciu kilometrów. Przy umawianiu podaj proszę pełną nazwę z przymiotnikiem i numer domu — dojadę wszędzie, bez dopłat, ale wolę wiedzieć, gdzie skręcić.",
    },
    ...faqWspolne("w gminie Rzepiennik Strzyżewski"),
    {
      question: "Mamy własne ziemniaki. Czy to coś zmienia?",
      answer:
        "Zmienia, bo najwięcej roboty przy ziemniakach jest nie w gotowaniu, tylko w tarciu i wyrabianiu. Placki, kopytka, kluski śląskie i knedle zaczynają się od utarcia albo zmielenia — a to jest kwestia kilkunastu sekund zamiast kwadransa nad tarką, i bez obtartych kostek. Ciasto na kopytka wyrabia się w tym samym naczyniu. Uczciwie dodam: placków urządzenie nie usmaży, patelnia zostaje. Zabiera tę część, która jest wyłącznie pracą rąk.",
    },
  ],

  geo: { lat: 49.8072, lng: 21.0352 },
};
