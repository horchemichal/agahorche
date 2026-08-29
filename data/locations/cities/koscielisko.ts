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
 * KOŚCIELISKO — gmina wiejska, powiat tatrzański. Trzy sołectwa,
 * 9 095 mieszkańców (31.12.2024) na 136,7 km². Gmina w obecnym
 * kształcie od 1994 r.
 *
 * OŚ STRONY: DWIE NAJWIĘKSZE DOLINY TATR ZACHODNICH I JEDYNE
 * UDOSTĘPNIONE JASKINIE W TATRACH. Dolina Kościeliska i Dolina
 * Chochołowska leżą w całości w tej gminie, a w Kościeliskiej
 * znajdują się cztery jaskinie otwarte dla turystów — w tym Mroźna,
 * jedyna oświetlona elektrycznie jaskinia w całych Tatrach.
 * To fakt wyłącznie kościeliski, niekolidujący z niczym.
 *
 * Druga oś: NARCIARSTWO BIEGOWE. Stadion biathlonowy Kościelisko-Kiry
 * i Puchar Kościeliska im. Stanisława Bukowskiego „Oćca”. To najmocniej
 * odróżnia gminę od Zakopanego, które kojarzy się ze skokami.
 *
 * ⚠️ NAJWAŻNIEJSZA KOREKTA: CHOCHOŁÓW NIE NALEŻY DO TEJ GMINY.
 * Chochołów jest sołectwem gminy CZARNY DUNAJEC (powiat nowotarski).
 * Powstanie chochołowskie 1846, zabytkowa zabudowa i „mycie domów”
 * to tamta gmina. TERMY CHOCHOŁOWSKIE również leżą w Czarnym Dunajcu
 * (adres: Chochołów 400). ALE DOLINA CHOCHOŁOWSKA LEŻY W GMINIE
 * KOŚCIELISKO (obręb Witów) — i to jest odwrotna pułapka, źródło
 * ciągłych pomyłek w obie strony.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — JASKINIE udostępnione turystom w Dolinie Kościeliskiej:
 *   MROŹNA (ok. 570 m, JEDYNA OŚWIETLONA ELEKTRYCZNIE JASKINIA
 *   W TATRACH), MYLNA (ok. 1 300 m korytarzy, 300 m udostępnione),
 *   RAPTAWICKA, SMOCZA JAMA (37 m),
 * — GÓRNICTWO I HUTNICTWO: srebro, miedź i antymon wydobywane
 *   od końca XV w.; w XVIII w. ruda żelaza przetapiana na Starych
 *   Kościeliskach. Nazwa doliny pochodzi od kościółka zbudowanego
 *   dla hutników. ⚠️ Źródła popularne, nie naukowe — piszę o tym
 *   ostrożnie i bez szczegółowych dat,
 * — NARCIARSTWO BIEGOWE: trasy w Kirach i na Chotarzu, ok. 7 km
 *   nowych oświetlonych tras; stadion biathlonowy Kościelisko-Kiry.
 *   PUCHAR KOŚCIELISKA im. STANISŁAWA BUKOWSKIEGO „OĆCA”
 *   (1923–2002) — dwunastokrotnego mistrza Polski, olimpijczyka
 *   ze Sankt Moritz 1948 i Cortiny 1956,
 * — SOŁECTWA (3) wg NSP 2021: Kościelisko 4 903 (54,1%),
 *   Dzianisz 2 411 (26,6%), Witów 1 714 (18,9%). Siedziba
 *   jest największa,
 * — POWIERZCHNIA 136,7 km², 66 os./km². Większość obszaru gminy
 *   leży w Tatrzańskim Parku Narodowym,
 * — GOSPODARKA: 1 485 podmiotów REGON (31.12.2024) na 9 095
 *   mieszkańców — bardzo wysoka gęstość, typowa dla gospodarki
 *   turystyczno-usługowej. Kolej krzesełkowa Butorowy Wierch.
 *   Po gminnej abolicji dla kwaterodawców przybyło ok. 600
 *   zgłoszonych miejsc noclegowych,
 * — WYPAS KULTUROWY na Hali Ornak i Polanie Chochołowskiej
 *   w ramach TPN; Witów opisywany jako sołectwo o żywej tradycji
 *   szałaśniczej,
 * — KGW W KOŚCIELISKU: zarejestrowane w maju 2014 r. jako
 *   kontynuacja koła z lat 50. XX w., ponad 25 członkiń.
 *   Organizuje konkursy „Góralskie Słodkości” (ciasta) i „Smaki
 *   Babiego Lata” (nalewki) oraz konkurs bukietów zielnych,
 * — DNI GMINY KOŚCIELISKO: Siwa Polana u wylotu Doliny
 *   Chochołowskiej; edycja 2025: 27–30 czerwca,
 * — DOJAZD: BRAK STACJI KOLEJOWEJ. Najbliższa — Zakopane,
 *   ok. 8–10 km. Droga wojewódzka 958 (Zakopane–Chabówka przez Kiry,
 *   Witów i Dzianisz), dalej zakopianka.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOKŁADNEJ LICZBY POŁĄCZEŃ I CZASU PRZEJAZDU DO KRAKOWA.
 *   Dane sprzed remontów są nieaktualne — piszę opisowo,
 * — NUMERU EDYCJI I DATY NAJBLIŻSZEGO PUCHARU KOŚCIELISKA.
 *   Źródła podają sprzeczne terminy (14.12.2025 vs 4.01.2026),
 *   prawdopodobnie przez brak śniegu. Piszę o imprezie, nie o dacie,
 * — DATY ZAŁOŻENIA KGW JAKO JEDNOZNACZNEJ. Rejestracja 2014,
 *   ale kanał wideo koła nosi w nazwie rok 1967. Piszę o rejestracji
 *   i o kontynuacji dawniejszego koła,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanego tej gminie.
 *   Nie znalazłam,
 * — LICZBY MIEJSC NOCLEGOWYCH OGÓŁEM.
 *
 * PUŁAPKI:
 * — CHOCHOŁÓW I TERMY CHOCHOŁOWSKIE ≠ TA GMINA (patrz wyżej).
 *   Portale noclegowe reklamują termy jako „atrakcję Kościeliska” —
 *   to marketing, nie administracja,
 * — DOLINA CHOCHOŁOWSKA *JEST* W TEJ GMINIE mimo nazwy,
 * — WILLA POD JEDLAMI Witkiewicza stoi w ZAKOPANEM (Koziniec),
 *   nie w Kościelisku,
 * — BUTOROWY WIERCH bywa opisywany jako „Zakopane” — kolej leży
 *   w Kościelisku,
 * — OSCYPEK, BRYNDZA I REDYKOŁKA są podhalańskie, nie kościeliskie,
 * — SABAŁA (Jan Krzeptowski) pochodził stąd — ale jest patronem
 *   festiwalu w BUKOWINIE TATRZAŃSKIEJ. Nie mieszać wątków,
 * — LUDNOŚĆ: 9 095 (GUS 31.12.2024) vs 8 893 (inne źródło bez daty).
 *   Używać pierwszej, z datą.
 */

export const KOSCIELISKO: CityContent = {
  slug: "koscielisko",
  h1: "Thermomix Kościelisko – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kościelisko — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Kościelisko: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kościelisko, Dzianisz, Witów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kościelisko — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kościelisko. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Kościelisko przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Kościeliska, Dzianisza i Witowa, bez dopłaty za odległość.",

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
      heading: "Thermomix w gminie Kościelisko – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Kościelisku, jak w Dzianiszu czy w Witowie.",
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
      heading: "Gmina dwóch dolin i jedynych jaskiń, do których można wejść",
      paragraphs: [
        "Dwie największe doliny Tatr Zachodnich — Kościeliska i Chochołowska — leżą w całości w granicach tej gminy. I to jest pierwsza rzecz, którą trzeba tu sprostować, bo pomyłka jest nagminna: Dolina Chochołowska należy do Kościeliska, mimo nazwy. Sam Chochołów, ze swoją zabytkową zabudową i termami, jest już zupełnie inną gminą, w innym powiecie.",
        "W Dolinie Kościeliskiej znajdują się cztery jaskinie udostępnione turystom — jedyne takie w całych Tatrach. Najbardziej znana jest Mroźna, około pięciuset siedemdziesięciu metrów długości i jedyna w Tatrach oświetlona elektrycznie. Do tego Mylna, mająca ponad kilometr korytarzy, z czego trzysta metrów jest otwarte, Raptawicka i niewielka Smocza Jama.",
        "Warto też wiedzieć, że ta dolina przez wieki nie była miejscem wypoczynku, tylko pracy. Od końca piętnastego wieku wydobywano tu srebro, miedź i antymon, a w osiemnastym przetapiano rudę żelaza na Starych Kościeliskach. Sama nazwa doliny pochodzi od kościółka, który postawiono dla hutników. Dodam uczciwie, że opieram się tu na źródłach popularnych, więc traktuję to jako opowieść dobrze ugruntowaną, a nie jako ustalenie naukowe.",
        "Druga rzecz, która tę gminę odróżnia od sąsiadów, dotyczy sportu. Zakopane kojarzy się ze skokami — Kościelisko z bieganiem. Jest tu stadion biathlonowy w Kirach, kilka kilometrów oświetlonych tras biegowych i doroczny Puchar Kościeliska imienia Stanisława Bukowskiego, zwanego Oćcem: dwunastokrotnego mistrza Polski i olimpijczyka ze Sankt Moritz i Cortiny.",
        "Gmina jest przy tym niewielka ludnościowo — nieco ponad dziewięć tysięcy osób na stu trzydziestu sześciu kilometrach kwadratowych, z czego większość leży w parku narodowym — a zarazem bardzo przedsiębiorcza: prawie tysiąc pięćset zarejestrowanych podmiotów. To gospodarka rozdrobniona, oparta na kwaterach prywatnych, a nie na dużych obiektach.",
        "W Kościelisku, jako gminie samodzielnej, mieszka się dopiero od tysiąc dziewięćset dziewięćdziesiątego czwartego roku — wcześniej to była część Zakopanego. Trzydzieści lat to niedużo jak na gminę i sporo tłumaczy w tym, jak mocno podkreśla się tu własną odrębność.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kościelisko?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy to Kościelisko, Dzianisz czy Witów, i dodaj punkt orientacyjny. Sołectwa są tu rozciągnięte wzdłuż drogi wojewódzkiej, a zabudowa rozproszona po stokach — sam numer domu bywa mylący. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli prowadzisz kwatery, powiedz to od razu. Poza sezonem, w listopadzie i kwietniu, umawiamy się najspokojniej. W sezonie też przyjadę, tylko wtedy najlepiej sprawdzają się przedpołudnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kościelisko"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Tysiąc pięćset firm na dziewięć tysięcy mieszkańców",
      paragraphs: [
        "W gminie liczącej nieco ponad dziewięć tysięcy mieszkańców zarejestrowanych jest blisko tysiąc pięćset podmiotów gospodarczych. To bardzo dużo — jedna firma na sześć osób, licząc razem z dziećmi i emerytami. Za tą liczbą nie stoją jednak duże przedsiębiorstwa, tylko kwatery prywatne, wynajem, drobne usługi i budowlanka.",
        "To oznacza bardzo konkretny typ domu: taki, w którym praca i mieszkanie są tym samym adresem. Goście śpią piętro wyżej albo w budynku obok, a kuchnia obsługuje jedno i drugie. Po gminnej abolicji dla kwaterodawców przybyło tu zresztą około sześciuset zgłoszonych miejsc noclegowych — co pokazuje, jak wiele z tego działo się wcześniej po cichu.",
        "Praktycznie najbardziej przydaje się to, że danie można wstawić i wyjść. Zupa gotuje się sama i sama się wyłącza, kiedy Ty sprzątasz pokoje, odbierasz gości albo odśnieżasz podjazd. Nie trzeba wracać co dziesięć minut zamieszać, a przy dwóch równoległych zestawach obowiązków to jest różnica odczuwalna od pierwszego dnia.",
        "Druga rzecz to sezonowość, tu bardzo ostra. Zima i lato to praca po kilkanaście godzin, listopad i kwiecień to nagle wolne. Poza sezonem opłaca się robić zapasy: zupy do zamrożenia, sosy, pasty kanapkowe, ciasto na pierogi, chleb — seriami, w jednym naczyniu, na czas, kiedy nie będzie chwili.",
        "Trzecia rzecz to wypas, wciąż tu żywy — na Hali Ornak i Polanie Chochołowskiej prowadzony jest wypas kulturowy w porozumieniu z parkiem narodowym, a Witów uchodzi za sołectwo o najbardziej żywej tradycji szałaśniczej. W domach, w których jest nabiał z własnego albo sąsiedzkiego chowu, przydaje się przede wszystkim to, że masy serowe i sosy na śmietanie robi się bez ucierania i bez ryzyka, że się zwarzą.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a w domu, w którym rodzice w sezonie pracują do późna, to bywa realnie potrzebne.",
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
    heading: "Kościelisko i gotowanie — ciasta, nalewki i bukiety zielne",
    paragraphs: [
      "Zacznę od zastrzeżenia, które powtarzam na każdej podhalańskiej stronie. Oscypek, bryndza podhalańska i redykołka mają chronione nazwy pochodzenia w Unii Europejskiej, ale obszar tej ochrony to całe Podhale i część Śląska. To nie są produkty tej gminy — Zakopane, Poronin i Bukowina mają do nich takie samo prawo. Wpisu przypisanego wprost Kościelisku na ministerialnej Liście Produktów Tradycyjnych nie znalazłam.",
      "To, co tu naprawdę jest, to koło gospodyń wiejskich zarejestrowane w dwa tysiące czternastym roku jako kontynuacja koła działającego jeszcze w latach pięćdziesiątych. Ponad dwadzieścia pięć członkiń, a przy nim trzy doroczne konkursy: „Góralskie Słodkości” na ciasta, „Smaki Babiego Lata” na nalewki i konkurs bukietów zielnych na Wniebowzięcie.",
      "Zwracam na to uwagę, bo pokazuje coś, o czym przy Podhalu rzadko się pisze. W folderach kuchnia góralska to bacówka, ser i mięso przy ognisku — czyli domena mężczyzn. A tutejsze konkursy dotyczą ciast, nalewek i ziół, czyli tego, co przez cały rok dzieje się w domowych kuchniach i o czym nikt nie robi programów telewizyjnych.",
      "I dokładnie w tym miejscu urządzenie coś wnosi. Ciasto drożdżowe wyrabia się samo — a to jest ta czynność, która przy wypiekach zabiera najwięcej siły. Masy serowe i orzechowe powstają bez ucierania. Nalewek nie zrobi, bo tam pracuje czas i alkohol, ale syropy, konfitury i przeciery z tego, co rośnie za domem, gotują się bez pilnowania i bez mieszania.",
      "Czego nie zrobi, powiem wprost: sera z owczego mleka, moskola z blachy ani pieczonej jagnięciny. Wprawy nie zastąpi. Zabiera te czynności, które trwają, a nie te, które trzeba umieć.",
    ],
  },

  districtsHeading: "Gdzie w gminie Kościelisko dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzech sołectw, bez żadnej dopłaty za odległość: Kościeliska, Dzianisza i Witowa. Samo Kościelisko liczy blisko pięć tysięcy mieszkańców, czyli ponad połowę gminy; Dzianisz około dwóch i pół tysiąca, Witów ponad tysiąc siedemset.",
    "Gmina zajmuje sto trzydzieści sześć i siedem dziesiątych kilometra kwadratowego, ale większość tego obszaru leży w Tatrzańskim Parku Narodowym, więc zabudowa mieści się na stosunkowo wąskim pasie. Jako samodzielna gmina Kościelisko istnieje od tysiąc dziewięćset dziewięćdziesiątego czwartego roku.",
    "Warto wiedzieć, co do tej gminy należy, a co nie, bo pomyłki idą w obie strony. Dolina Kościeliska i Dolina Chochołowska leżą tutaj, podobnie jak kolej krzesełkowa na Butorowy Wierch, którą wiele serwisów przypisuje Zakopanemu. Za to sam Chochołów i Termy Chochołowskie to już gmina Czarny Dunajec w powiecie nowotarskim — mimo że portale noclegowe reklamują je jako atrakcję Kościeliska.",
    "O dojeździe uczciwie: w gminie nie ma stacji kolejowej. Najbliższa to Zakopane, osiem do dziesięciu kilometrów stąd. Drogą prowadzi tędy wojewódzka numer dziewięćset pięćdziesiąt osiem z Zakopanego do Chabówki, przez Kiry, Witów i Dzianisz, a dalej zakopianka. Czasów przejazdu do Krakowa nie podaję — po remontach linii i przy zmiennym ruchu na zakopiance każda liczba szybko się dezaktualizuje.",
  ],
  districts: [
    "Kościelisko",
    "Dzianisz",
    "Witów",
    "Kiry",
  ],

  nearbyHeading: "Zakopane, Czarny Dunajec i Poronin też są na mojej trasie",
  nearbyParagraphs: [
    "Do Zakopanego mam stąd kilkanaście minut, do Czarnego Dunajca i Poronina trochę dalej. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli wybierasz się do Term Chochołowskich albo do samego Chochołowa, to formalnie jedziesz już do gminy Czarny Dunajec, w powiecie nowotarskim — o niej piszę osobno. Dolina Chochołowska natomiast, mimo nazwy, jest tutaj.",
  ],
  nearbyTowns: [
    "Zakopane",
    "Czarny Dunajec",
    "Poronin",
    "Biały Dunajec",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do gminy Kościelisko", "w powiecie tatrzańskim"),

  faq: [
    {
      question: "Czy Chochołów i Termy Chochołowskie są w gminie Kościelisko?",
      answer:
        "Nie — Chochołów jest sołectwem gminy Czarny Dunajec w powiecie nowotarskim, i tam też leżą Termy Chochołowskie. Portale noclegowe reklamują je jako atrakcję Kościeliska, ale to marketing, nie administracja. Odwrotnie za to jest z Doliną Chochołowską: ta, mimo nazwy, leży właśnie w gminie Kościelisko.",
    },
    ...faqWspolne("w gminie Kościelisko"),
    {
      question: "Prowadzę kwatery. Kiedy najlepiej umówić prezentację?",
      answer:
        "Poza sezonem, czyli w listopadzie albo kwietniu — wtedy jest tu najspokojniej i mamy dwie godziny bez telefonów. W sezonie też przyjadę, ale wtedy najlepiej sprawdzają się przedpołudnia. Powiedz po prostu, kiedy masz spokojny czas; w tej gminie prawie każdy dom coś wynajmuje, więc znam ten rytm.",
    },
    {
      question: "Mieszkam w Witowie, daleko od drogi. Dojedziesz?",
      answer:
        "Dojadę i bez dopłaty. Sołectwa są tu rozciągnięte wzdłuż drogi wojewódzkiej, a zabudowa rozproszona po stokach, więc proszę tylko o punkt orientacyjny obok numeru domu. Zimą uprzedź mnie, jeśli podjazd bywa trudny — wtedy wyjeżdżam wcześniej.",
    },
  ],

  geo: { lat: 49.2833, lng: 19.8833 },
};
