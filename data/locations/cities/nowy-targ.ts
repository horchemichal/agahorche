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
 * NOWY TARG — GMINA MIEJSKA, stolica powiatu nowotarskiego.
 * Ok. 33 tys. mieszkańców na 51,1 km².
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje GMINA WIEJSKA NOWY TARG
 * (plik `nowy-targ-gmina.ts`) — 21 sołectw, ponad 23 tys. mieszkańców,
 * a jej urząd mieści się W TYM MIEŚCIE, przy ul. Bulwarowej.
 * WIEŚ O NAZWIE NOWY TARG NIE ISTNIEJE. Osie obu stron są rozłączne:
 *   — MIASTO: rytm targowy i branża skórzana po kombinacie,
 *   — GMINA WIEJSKA: obwarzanek bez stolicy, spinający Podhale ze Spiszem.
 * To ten sam układ co przy dwóch Jordanowach (`jordanow.ts`
 * i `jordanow-gmina.ts`) — trzymać się tego samego rozdziału.
 *
 * OŚ STRONY: MIASTO, KTÓRE TARGUJE OD 1346 ROKU — i które po upadku
 * jednego wielkiego zakładu odbudowało tę samą branżę w kilkudziesięciu
 * małych warsztatach.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — LOKACJA 22 czerwca 1346 r., Kazimierz Wielki, prawo magdeburskie.
 *   Przywilej jednego jarmarku (św. Katarzyny, 25 listopada);
 *   w XVI w. prawo składu soli i cło od towarów węgierskich;
 *   w 1772 r. już dwanaście jarmarków rocznie,
 * — NOWA TARGOWICA: jarmark w CZWARTKI I SOBOTY, godz. 6:00–15:00,
 * — NZPS „PODHALE”: w szczycie PONAD 4 TYS. ZATRUDNIONYCH,
 *   UPADŁOŚĆ OGŁOSZONA W 1992 R. ⚠️ WYŁĄCZNIE W CZASIE PRZESZŁYM,
 * — BRANŻA PRZETRWAŁA W ROZDROBNIENIU: garbarnie Leja (od 1992)
 *   i WS Stołowski (od 1992), Skóry Janosik, kożuchy i futra
 *   Korczak i Syn (od 1983), Alaska (od 1988), Gena, obuwie Mrugała
 *   i Vanuba, odzież robocza Kegel-Błażusiak, silniki elektryczne
 *   EL-TP Gołębiowska,
 * — LOTNISKO EPNT DZIAŁA — Aeroklub Nowy Targ, ul. Lotników 1:
 *   szkolenia PPL(A) i LAPL(A), szybowce, balony, spadochrony,
 *   loty widokowe,
 * — W 2012 R. ODKRYTO RELIKTY monumentalnego ratusza z XV w.,
 * — GOSPODARKA: 5 719 podmiotów REGON, w tym 4 322 osoby fizyczne.
 *   Bezrobocie ok. 4,8%,
 * — KOLEJ: stacja Nowy Targ, linia 99 Chabówka–Zakopane, km 22,595;
 *   dalej linią 98 przez Suchą Beskidzką,
 * — JARMARK PODHALAŃSKI: 23. edycja w 2025 r., 24. EDYCJA
 *   14–16 SIERPNIA 2026 R., Rynek, organizator Miasto Nowy Targ.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE NZPS BYŁY „NAJWIĘKSZYM PRODUCENTEM OBUWIA
 *   W EUROPIE”. ŻADNE sprawdzone źródło tego nie potwierdza —
 *   to fraza krążąca po internecie. NIE UŻYWAĆ,
 * — TWIERDZENIA, ŻE TARGOWICA JEST „NAJWIĘKSZYM TARGIEM W POLSCE
 *   ALBO W EUROPIE”. Sama reklamuje się jako „najpiękniejszy polski
 *   jarmark”, nie największy,
 * — CZASÓW PRZEJAZDU KOLEJĄ DO KRAKOWA. Dostępne dane dotyczą
 *   relacji Kraków–Zakopane i są sprzed kilku lat,
 * — PROCENTÓW STRUKTURY ZATRUDNIENIA. Dane dla miasta były
 *   IDENTYCZNE co do dziesiętnej z danymi dla gminy Raba Wyżna —
 *   podejrzenie błędu w źródle. NIE CYTOWAĆ,
 * — PODZIAŁU MIASTA NA OSIEDLA jako listy z ludnością.
 *   Niepotwierdzony,
 * — KÓŁ GOSPODYŃ. W mieście brak — to struktura wiejska,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanego miastu.
 *
 * PUŁAPKI:
 * — DWA RÓŻNE JARMARKI: Nowa Targowica (czwartek i sobota, handel)
 *   to CO INNEGO niż Jarmark Podhalański (sierpniowa impreza
 *   kulturalna na Rynku). NIE MIESZAĆ,
 * — NZPS NIE DZIAŁAJĄ OD 1992 R.,
 * — MOSKOL, BRYNDZA PODHALAŃSKA I OSCYPEK są regionalne, nie
 *   nowotarskie,
 * — GMINA WIEJSKA NOWY TARG TO OSOBNA JEDNOSTKA (patrz wyżej).
 */

export const NOWY_TARG: CityContent = {
  slug: "nowy-targ",
  h1: "Thermomix Nowy Targ – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Nowy Targ — prezentacja i cena",
  seoDescription:
    "Thermomix w Nowym Targu: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Targ — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Nowym Targu. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Nowego Targu przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Umawiam się też w dni targowe, po zamknięciu stoisk.",

  highlights: highlightyStandardowe("całe miasto, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Targu – jak wygląda prezentacja?",
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
      heading: "Czwartek i sobota — od tysiąc trzysta czterdziestego szóstego roku",
      paragraphs: [
        "Nowy Targ ma w nazwie to, z czego żyje. Kazimierz Wielki lokował miasto dwudziestego drugiego czerwca tysiąc trzysta czterdziestego szóstego roku i dał mu przywilej jednego jarmarku w roku. W szesnastym wieku doszło prawo składu soli i cło od towarów węgierskich, a do rozbiorów jarmarków było już dwanaście rocznie.",
        "Dziś targ odbywa się dwa razy w tygodniu, w czwartki i soboty, od szóstej rano do trzeciej po południu. To znaczy, że rytm tego miasta jest tygodniowy, a nie sezonowy — i to je zasadniczo odróżnia od Zakopanego czy Bukowiny, gdzie wszystko podlega zimie i latu.",
        "Druga rzecz jest trudniejsza i warto ją opowiedzieć uczciwie. Przez dekady Nowy Targ był miastem jednego zakładu: Nowotarskie Zakłady Przemysłu Skórzanego zatrudniały w szczycie ponad cztery tysiące osób. W tysiąc dziewięćset dziewięćdziesiątym drugim ogłoszono ich upadłość. W mieście liczącym trzydzieści kilka tysięcy mieszkańców to była katastrofa.",
        "Dodam od razu, że nie powtórzę popularnego zdania, jakoby były to największe zakłady obuwnicze w Europie. Krąży ono po internecie, ale nie znalazłam żadnego wiarygodnego źródła, które by je potwierdzało. Cztery tysiące etatów w miasteczku i tak wystarczą za opis skali.",
        "Ciekawsze jest jednak to, co stało się potem. Branża nie zniknęła — rozpadła się. Dziś w Nowym Targu działa kilkanaście osobnych, w większości rodzinnych firm: dwie garbarnie założone jeszcze w dziewięćdziesiątym drugim, wytwórnie kożuchów i futer, dwa zakłady obuwnicze, producent odzieży roboczej. Jedna wielka fabryka zamieniła się w wiele małych warsztatów.",
        "W liczbach wygląda to tak: pięć tysięcy siedemset dziewiętnaście zarejestrowanych podmiotów, z czego cztery i pół tysiąca to działalności osób fizycznych. Bezrobocie poniżej pięciu procent. To miasto drobnych przedsiębiorców — i to jest chyba najtrwalsza rzecz, jaką po sobie zostawił tamten kombinat.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Targu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Jeśli handlujesz na targowicy albo prowadzisz warsztat, powiedz to od razu. Czwartek i sobota to u Was dni pracy od szóstej rano — umawiam się więc chętnie na późne popołudnia tych dni albo na dowolny inny dzień tygodnia.",
        "Powiedz też, w której części miasta mieszkasz i czy to blok, czy dom. Od tego zależy tylko tyle, gdzie zaparkuję i którędy wniosę sprzęt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Targu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Miasto drobnych przedsiębiorców",
      paragraphs: [
        "Na pięć tysięcy siedemset zarejestrowanych podmiotów w Nowym Targu cztery i pół tysiąca prowadzą osoby fizyczne. To znaczy, że w bardzo wielu domach ktoś prowadzi własną działalność — warsztat, sklep, stoisko, usługę. A własna działalność ma to do siebie, że nie kończy się o siedemnastej.",
        "W takim domu obiad rzadko jada się o stałej porze. Ktoś wraca z targowicy o czwartej, ktoś inny siedzi w warsztacie do siódmej, a dzieci wracają ze szkoły znacznie wcześniej. Kuchnia musi obsłużyć kilka różnych rozkładów dnia naraz.",
        "Praktyczna korzyść jest tu bardzo konkretna. Danie jednogarnkowe wstawia się i wychodzi — gotuje się bez nikogo, samo się wyłącza i czeka. Nie stygnie w garnku od południa i nie przypala się, bo ktoś zapomniał zejść na dół.",
        "Druga rzecz to gotowanie z zapasem, sensowne wszędzie, ale tutaj wręcz konieczne w dni targowe. Podwójna porcja zupy, sos na kilka dni, pasty kanapkowe, chleb — robione w niedzielę na cały tydzień, seriami, w jednym naczyniu.",
        "Trzecia rzecz dotyczy tego, kto gotuje. Ponieważ przepis prowadzi krok po kroku, obiad może zrobić ktokolwiek — także nastolatek, który wraca do domu pierwszy. W domu, w którym oboje rodzice prowadzą działalność, to bywa realnym odciążeniem, a nie ciekawostką.",
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
    heading: "Nowy Targ i gotowanie — targ dwa razy w tygodniu",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu przypisanego wprost Nowemu Targowi na ministerialnej Liście Produktów Tradycyjnych. Moskol, bryndza podhalańska i oscypek są produktami regionalnymi — te dwa ostatnie mają wprawdzie unijną ochronę nazwy, ale obejmuje ona całe Podhale, nie to miasto.",
      "Za to ma Nowy Targ coś, czego nie ma prawie żadna inna gmina, o której pisałam: targ dwa razy w tygodniu, w czwartki i soboty, od szóstej rano. To jest infrastruktura kulinarna w najbardziej dosłownym sensie — miejsce, gdzie kupuje się warzywa, nabiał i mięso od ludzi, którzy je przywieźli.",
      "Dla gotowania ma to konkretne przełożenie i chcę je nazwać. Kiedy kupujesz raz albo dwa razy w tygodniu, i to większymi partiami, gotowanie musi być planowane. Nie robi się „czegoś na dziś” — robi się zapas. Zupa na trzy dni, sos, pasty, mrożonki. Ten rytm jest starszy niż lodówki i tutaj wciąż działa.",
      "I dokładnie w takim rytmie urządzenie sprawdza się najlepiej. Nie przy jednym obiedzie, tylko przy serii: dwie zupy, sos, ciasto na pierogi i pasta kanapkowa zrobione jednego popołudnia, w jednym naczyniu, bez rozstawiania połowy kuchni i bez pilnowania, żeby coś nie przywarło.",
      "Czego nie zrobi, powiem wprost: nie wybierze za Ciebie dobrego twarogu na targu i nie zastąpi wprawy. Zabiera tę część, która jest tylko czasem — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Gdzie w Nowym Targu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez żadnej dopłaty za odległość. Nowy Targ jest gminą miejską i nie ma sołectw; przy umawianiu wystarczy adres i informacja, czy to blok, czy dom.",
    "Miasto liczy około trzydziestu trzech tysięcy mieszkańców i jest największym ośrodkiem Podhala — większym niż Zakopane. Zajmuje pięćdziesiąt jeden kilometrów kwadratowych, leży w Kotlinie Orawsko-Nowotarskiej, u zbiegu Białego i Czarnego Dunajca.",
    "Warto od razu rozróżnić dwie rzeczy, bo obie nazywa się tu jarmarkiem. Nowa Targowica to handel: czwartki i soboty, od szóstej do piętnastej. Jarmark Podhalański to co innego — sierpniowa impreza kulturalna na Rynku, w dwa tysiące dwudziestym szóstym roku w dwudziestej czwartej edycji. Pod Rynkiem odkryto zresztą w dwa tysiące dwunastym relikty monumentalnego ratusza z piętnastego wieku.",
    "Dojazd: stacja kolejowa w mieście leży na linii z Chabówki do Zakopanego, a dalej jedzie się przez Suchą Beskidzką. Świadomie nie podaję czasu przejazdu do Krakowa, bo dane, do których dotarłam, są sprzed kilku lat i po remontach nieaktualne. Samochodem prowadzi tu zakopianka. Działa też lotnisko sportowe z aeroklubem — szkolenia, szybowce, balony i loty widokowe.",
  ],
  districts: [
    "Centrum i Rynek",
    "Okolice Nowej Targowicy",
    "Okolice dworca",
    "Osiedla mieszkaniowe",
    "Zabudowa jednorodzinna",
  ],

  nearbyHeading: "Gmina wiejska Nowy Targ, Szaflary i Rabka też są na mojej trasie",
  nearbyParagraphs: [
    "Wokół miasta leży gmina wiejska o tej samej nazwie — dwadzieścia jeden sołectw, od Ludźmierza i Waksmunda po spiskie Krempachy i Nową Białą. To osobna jednostka, której urząd mieści się zresztą w tym mieście. Nie ma natomiast wsi o nazwie Nowy Targ.",
    "Dalej są Szaflary, Rabka-Zdrój, Czarny Dunajec i Raba Wyżna. Do żadnej z tych gmin nie doliczam kosztu dojazdu — Nowy Targ jest dla mnie naturalnym punktem, z którego rozjeżdżam się po całym powiecie.",
  ],
  nearbyTowns: [
    "Szaflary",
    "Biały Dunajec",
    "Poronin",
    "Zakopane",
    "Czorsztyn",
    "Kraków",
  ],

  about: blokOMnie("do Nowego Targu", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Handluję na targowicy. Kiedy da się umówić?",
      answer:
        "W dowolny dzień poza czwartkiem i sobotą rano albo w te dni po zamknięciu stoisk. Targ działa od szóstej do piętnastej, więc późne popołudnie jest zwykle najlepszym terminem. Powiedz po prostu, kiedy masz dwie spokojne godziny — dopasowuję się do Twojego tygodnia, nie odwrotnie.",
    },
    ...faqWspolne("w Nowym Targu"),
    {
      question: "Czym miasto Nowy Targ różni się od gminy Nowy Targ?",
      answer:
        "To dwie osobne gminy o tej samej nazwie. Miasto liczy około trzydziestu trzech tysięcy mieszkańców, a gmina wiejska ponad dwadzieścia trzy tysiące w dwudziestu jeden sołectwach — od Ludźmierza i Łopusznej po spiskie Krempachy i Nową Białą. Urząd gminy wiejskiej mieści się w mieście, a wsi o nazwie Nowy Targ nie ma wcale. Dojeżdżam i tu, i tam, bez dopłaty.",
    },
    {
      question: "Mieszkam w bloku, mam małą kuchnię. Zmieści się?",
      answer:
        "Zmieści. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków — w małej kuchni zwykle zwalnia blat, zamiast go zajmować. Na prezentacji zobaczysz to na własnym blacie, a nie na zdjęciu.",
    },
  ],

  geo: { lat: 49.4772, lng: 20.0322 },
};
