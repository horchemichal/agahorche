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
 * KRYNICA-ZDRÓJ — GMINA MIEJSKO-WIEJSKA w powiecie nowosądeckim.
 * 15 521 mieszkańców (31.12.2024), 145,3 km².
 *
 * OŚ STRONY: KURORT, KTÓRY WYCHOWAŁ ARTYSTÓW. Nikifor i Kiepura.
 * ⚠️ NIE DAWAĆ OSI „UZDROWISKO I WODY MINERALNE” — kolidowałaby
 * z Rabką (`rabka-zdroj.ts`, oś: sól i solanka) oraz z trzema
 * sąsiadkami w dolinie Popradu. Wody są tu TŁEM, nie osią.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — NIKIFOR KRYNICKI, właśc. EPIFANIUSZ DROWNIAK, 21.05.1895 –
 *   10.10.1968. ⚠️ BYŁ ŁEMKIEM; w 1947 deportowany w ramach akcji
 *   „Wisła”, TRZYKROTNIE WRACAŁ do Krynicy. Zostawił PONAD 2000
 *   AKWAREL. MUZEUM NIKIFORA w willi „ROMANÓWKA”, Bulwary Dietla 19 —
 *   otwarte 1995, kolekcja 77 PRAC. Film „Mój Nikifor” Krzysztofa
 *   Krauzego (2004), rolę zagrała Krystyna Feldman,
 * — JAN KIEPURA (1902–1966). FESTIWAL IM. JANA KIEPURY —
 *   58. EDYCJA 9–16 SIERPNIA 2025 R. ⚠️ ROKU PIERWSZEJ EDYCJI
 *   NIE POTWIERDZONO — nie liczyć wstecz z numeru,
 * — 8 SOŁECTW: Berest, Czyrna, Mochnaczka Niżna, Mochnaczka Wyżna,
 *   Muszynka, Piorunka, Polany, TYLICZ,
 * — HISTORIA (TŁO): 1547 pierwsza wzmianka, wieś Krzenycze;
 *   1788 pierwsza analiza chemiczna wody (prof. Baltazar Hacquet);
 *   1806 Pijalnia Słotwinka; 1807 reskrypt powołujący Zakład
 *   Zdrojowo-Kąpielowy; 1808 PIERWSZA ROZLEWNIA WÓD MINERALNYCH
 *   W POLSCE; 1832 upadek; 1856/57 przyjazd komisji prof. JÓZEFA
 *   DIETLA, „wskrzesiciela” Krynicy; 1900 pomnik Dietla,
 * — 1912–1914 — odkrycie „ZUBERA” (odwiert 810 m),
 * — 1931 — MISTRZOSTWA ŚWIATA W HOKEJU NA LODZIE; 1935 ME
 *   w saneczkarstwie; 1958 i 1962 MŚ w saneczkarstwie,
 * — 8 GRUDNIA 1937 R. — oddanie KOLEI LINOWO-TERENOWEJ NA GÓRĘ
 *   PARKOWĄ, NAJSTARSZEJ KOLEI LINOWO-TERENOWEJ W POLSCE
 *   (spółka „Kolej Górska w Krynicy”, zał. 10.09.1936),
 * — 1997 — KOLEJ GONDOLOWA NA JAWORZYNĘ KRYNICKĄ, 2 211 m,
 *   ok. 7 minut, szczyt 1 114 m n.p.m.,
 * — 1945–1947/48 — WYSIEDLENIA ŁEMKÓW,
 * — COCA-COLA HBC POLSKA, ZAKŁAD W TYLICZU (sołectwo tej gminy),
 *   działa od 1992 r., produkuje „Kroplę Beskidu” z odwiertów 137 m.
 *   ⚠️ LICZBY PRACOWNIKÓW NIE POTWIERDZONO,
 * — UZDROWISKO KRYNICA-ŻEGIESTÓW S.A.; marki wód: Kryniczanka,
 *   Zuber, Jan, Józef, Słotwinka, Tadeusz, Mieczysław,
 * — REGON: 2 310 podmiotów (2024) — 150 na 1000 mieszkańców,
 *   najwyższa przedsiębiorczość w okolicy; 96 OBIEKTÓW NOCLEGOWYCH,
 * — PRZEJŚCIE GRANICZNE MUSZYNKA–KUROV LEŻY W TEJ GMINIE
 *   (Muszynka to sołectwo Krynicy), ograniczenie do 7,5 t,
 * — KOLEJ: Krynica leży na LINII 105 (Muszyna–Krynica-Zdrój),
 *   NIE na linii 96.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — FORUM EKONOMICZNEGO. ⚠️ OD 2020 R. ODBYWA SIĘ W KARPACZU,
 *   nie w Krynicy. Mnóstwo tekstów pisze o nim w czasie
 *   teraźniejszym. KATEGORYCZNIE NIE PISAĆ, ŻE JEST W KRYNICY,
 * — ROKU NADANIA PRAW MIEJSKICH. Źródła podają 1889, 1911 albo
 *   18.10.1933 — sprzeczne. POMINIĘTE,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — SUPERLATYWU O ZUBERZE („najsilniej zmineralizowana w Europie”).
 *   Powtarzany przez źródła branżowe — użyty ostrożnie, bez „Europy”.
 *
 * PUŁAPKI:
 * — KROPLA BESKIDU TO TYLICZ, CZYLI TA GMINA — nie Muszyna,
 * — MUSZYNIANKA MA ZARZĄD W KRYNICY, A ZAKŁAD W MUSZYNIE —
 *   nie przypisywać jej jednoznacznie żadnej z gmin,
 * — NIKIFOR BYŁ ŁEMKIEM I ZOSTAŁ WYSIEDLONY — podać dokładnie,
 *   ale bez przekształcania strony w oś łemkowską (ta jest inaczej
 *   ustawiona w `szczawnica.ts` i `labowa.ts`).
 */

export const KRYNICA_ZDROJ: CityContent = {
  slug: "krynica-zdroj",
  h1: "Thermomix Krynica-Zdrój – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Krynica-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Krynicy-Zdroju: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do miasta i sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krynica-Zdrój — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Krynicy-Zdroju. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Krynicy-Zdroju, Tylicza i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krynicy-Zdroju – jak wygląda prezentacja?",
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
      heading: "Malarz, który wracał trzy razy",
      paragraphs: [
        "O Krynicy najczęściej pisze się jako o uzdrowisku i to prawda, ale nie najciekawsza. Ciekawsze jest to, kto się tu urodził i kto stąd nie chciał wyjechać.",
        "Epifaniusz Drowniak, znany jako Nikifor Krynicki, urodził się dwudziestego pierwszego maja tysiąc osiemset dziewięćdziesiątego piątego roku. Był Łemkiem, malował akwarelami i zostawił po sobie ponad dwa tysiące prac. W tysiąc dziewięćset czterdziestym siódmym roku wysiedlono go w ramach akcji „Wisła” — i wracał do Krynicy trzy razy, za każdym razem pieszo albo z uporem, aż mu wreszcie pozwolono zostać.",
        "Jego prace można oglądać w willi Romanówka na Bulwarach Dietla, gdzie od tysiąc dziewięćset dziewięćdziesiątego piątego roku działa Muzeum Nikifora z kolekcją siedemdziesięciu siedmiu obrazów. Szerszej publiczności przypomniał go film Krzysztofa Krauzego z dwa tysiące czwartego roku, w którym Nikifora zagrała Krystyna Feldman.",
        "Druga postać to Jan Kiepura, śpiewak, który śpiewał tu z balkonu hotelu. Festiwal jego imienia odbywa się co roku w sierpniu — w dwa tysiące dwudziestym piątym miał pięćdziesiątą ósmą edycję. Nie podaję roku pierwszej, bo nie udało mi się go potwierdzić, a liczenie wstecz z numeru edycji bywa zwodnicze.",
        "Jak to miasto w ogóle powstało, warto powiedzieć krótko, bo tłumaczy resztę. Wieś Krzenycze wzmiankowano w tysiąc pięćset czterdziestym siódmym roku, pierwszą analizę wody zrobiono w tysiąc siedemset osiemdziesiątym ósmym, a zakład zdrojowy powołano w tysiąc osiemset siódmym. W tysiąc osiemset ósmym ruszyła tu pierwsza rozlewnia wód mineralnych w Polsce. Po latach upadku uzdrowisko podniósł profesor Józef Dietl, który przyjechał z komisją w tysiąc osiemset pięćdziesiątym szóstym; jego pomnik stoi tu od tysiąc dziewięćsetnego roku.",
        "Krynica ma też sportową przeszłość, o której się dziś rzadziej mówi: mistrzostwa świata w hokeju w tysiąc dziewięćset trzydziestym pierwszym i dwukrotnie mistrzostwa świata w saneczkarstwie. A ósmego grudnia tysiąc dziewięćset trzydziestego siódmego roku uruchomiono tu kolej linowo-terenową na Górę Parkową — najstarszą tego typu w Polsce, działającą do dziś.",
        "Dodam jeszcze jedno sprostowanie, bo krąży w czasie teraźniejszym: Forum Ekonomiczne od dwa tysiące dwudziestego roku odbywa się w Karpaczu, nie w Krynicy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krynicy-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o samo miasto, czy o jedno z sołectw. Gmina ma ich osiem — Tylicz, Berest, Polany, Piorunka, Czyrna, Muszynka i obie Mochnaczki — a to zmienia wyłącznie planowanie trasy.",
        "Jeśli pracujesz w uzdrowisku, w hotelarstwie albo prowadzisz kwatery, wspomnij o tym od razu. Wasze grafiki bywają zmianowe i sezonowe, więc luty albo listopad są zwykle znacznie spokojniejsze niż lipiec.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krynicy-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sto pięćdziesiąt firm na tysiąc mieszkańców",
      paragraphs: [
        "Krynica ma ponad dwa tysiące trzysta zarejestrowanych podmiotów gospodarczych przy piętnastu i pół tysiąca mieszkańców — to sto pięćdziesiąt firm na każdy tysiąc osób i najwyższy taki wskaźnik w okolicy. Do tego prawie sto obiektów noclegowych, cztery razy więcej niż w sąsiedniej Muszynie.",
        "W praktyce znaczy to, że w bardzo wielu domach ktoś prowadzi coś swojego albo pracuje w obsłudze gości. A praca przy gościach ma jedną cechę, którą znają wszyscy, którzy ją wykonują: dzień nie ma stałych godzin, a sezon i martwy okres różnią się jak dzień i noc.",
        "Najbardziej praktyczna rzecz jest tu prosta. Danie jednogarnkowe wstawia się i wychodzi z domu. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nie stygnie w garnku od południa.",
        "Druga to gotowanie z zapasem, w sezonie wręcz konieczne. Podwójna porcja zupy, sos na kilka dni, pasty, ciasto — robione seriami w spokojne przedpołudnie, w jednym naczyniu. W szczycie lipca to często jedyny sposób, żeby w domu w ogóle było ciepłe jedzenie.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek inny, kto akurat jest w domu. Nie trzeba do tego wprawy ani obecności tej jednej osoby, która zwykle stoi przy kuchni.",
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
    heading: "Krynica i gotowanie — wody się pije, obiad się gotuje",
    paragraphs: [
      "Zacznę od zastrzeżenia, żeby nie robić nieporozumienia. Krynickie wody — Kryniczanka, Zuber, Jan, Słotwinka — są wodami leczniczymi. Pije się je w pijalni, w odmierzonych porcjach, i nie są to wody, na których gotuje się obiad. Nie będę udawać, że są.",
      "Powiem też uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie ani nazwy żadnego koła gospodyń. Krynica jest miastem uzdrowiskowym, a struktury wiejskie ma tylko w ośmiu sołectwach.",
      "To, co jest tu naprawdę ciekawe kulinarnie, wynika z gości. Kuchnia w mieście, do którego od dwustu lat przyjeżdżają ludzie z całej Polski, zawsze była kuchnią mieszaną — trochę galicyjską, trochę łemkowską, trochę pensjonatową. Nie ma jednej listy „naszych dań” i nie będę takiej wymyślać.",
      "Za to jest bardzo konkretna praktyka domowa: gotowanie w dwóch trybach. W sezonie szybko i z zapasem, poza sezonem spokojnie i do zamrażarki. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami wtedy, kiedy jest chwila.",
      "I dokładnie w takim rytmie urządzenie ma sens. Nie przy jednym obiedzie, tylko przy serii — dwie zupy, sos, ciasto i pasta zrobione jednego popołudnia w jednym naczyniu. Czego nie zrobi, mówię wprost: nie zastąpi wprawy i nie ulepi pierogów. Zabiera tę część roboty, która jest tylko czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Krynica-Zdrój dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich ośmiu sołectw, bez żadnej dopłaty za odległość. Gmina zajmuje sto czterdzieści pięć kilometrów kwadratowych i liczy ponad piętnaście tysięcy mieszkańców.",
    "Sołectwa to: Berest, Czyrna, Mochnaczka Niżna, Mochnaczka Wyżna, Muszynka, Piorunka, Polany i Tylicz. Warto wiedzieć, że w Tyliczu od tysiąc dziewięćset dziewięćdziesiątego drugiego roku działa zakład butelkujący wodę z odwiertów o głębokości stu trzydziestu siedmiu metrów — to jeden z większych pracodawców gminy.",
    "W samym mieście najciekawsze rzeczy stoją blisko siebie: deptak, pijalnie, Muzeum Nikifora w willi Romanówka i pomnik profesora Dietla z tysiąc dziewięćsetnego roku. Na Górę Parkową jeździ od tysiąc dziewięćset trzydziestego siódmego roku najstarsza w Polsce kolej linowo-terenowa, a od tysiąc dziewięćset dziewięćdziesiątego siódmego działa kolej gondolowa na Jaworzynę Krynicką — dwa i dwie dziesiąte kilometra w siedem minut.",
    "Dojazd: stacja kolejowa w mieście leży na linii z Muszyny, odgałęzieniu od głównej trasy z Tarnowa do Leluchowa. Samochodem prowadzi tu droga krajowa od Nowego Sącza, która kończy się na przejściu granicznym w Muszynce — a Muszynka, mimo nazwy, jest sołectwem tej gminy, nie Muszyny.",
  ],
  districts: [
    "Krynica-Zdrój — deptak i strefa zdrojowa",
    "Krynica-Zdrój — pozostałe osiedla",
    "Tylicz",
    "Berest i Polany",
    "Mochnaczka Niżna i Wyżna",
    "Piorunka, Czyrna, Muszynka",
  ],

  nearbyHeading: "Muszyna, Nawojowa i Łabowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Muszyną, Łabową i gminą wiejską Grybów, a od południa ze Słowacją. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylone: Muszynka to sołectwo gminy Krynica-Zdrój, a nie część Muszyny. Przejście graniczne o tej nazwie leży więc w tej gminie.",
  ],
  nearbyTowns: [
    "Muszyna",
    "Łabowa",
    "Nawojowa",
    "Piwniczna-Zdrój",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do Krynicy-Zdroju", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Tyliczu albo Mochnaczce. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie osiem sołectw gminy traktuję dokładnie tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości, bo od tego zależy tylko to, jak zaplanuję trasę.",
    },
    ...faqWspolne("w Krynicy-Zdroju"),
    {
      question: "Prowadzę pensjonat. Kiedy najlepiej się umówić?",
      answer:
        "Poza szczytem sezonu — listopad, luty i przełom kwietnia z majem są u Was zwykle najspokojniejsze. Ale umawiam się też wieczorami w sezonie, jeśli tak Wam wygodniej. Jeśli gotujesz dla gości, powiedz o tym: pokażę wtedy raczej rzeczy robione seriami niż jeden obiad na dwie osoby.",
    },
  ],

  geo: { lat: 49.4167, lng: 20.9667 },
};
