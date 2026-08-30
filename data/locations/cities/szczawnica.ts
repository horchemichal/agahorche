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
 * SZCZAWNICA — GMINA MIEJSKO-WIEJSKA w powiecie nowotarskim.
 * 6 623 mieszkańców (31.12.2024). Powierzchnia gminy 87,9 km²,
 * samego miasta 32,9 km². Lesistość 66,7% — najwyższa w okolicy.
 *
 * OŚ STRONY: RUŚ SZLACHTOWSKA — dwa sołectwa gminy, Jaworki
 * i Szlachtowa, to najdalej na zachód wysunięta wyspa osadnictwa
 * rusińskiego w Karpatach, i idące za tym dziedzictwo pasterskie:
 * redyk wiosenny i jesienny, owce, jagnięcina, bryndza.
 *
 * ⚠️ NIE DAWAĆ SZCZAWNICY OSI „PIENINY / SPŁYW DUNAJCEM” —
 * kolidowałaby z Krościenkiem (`kroscienko.ts`). NIE DAWAĆ OSI
 * „UZDROWISKO” — kolidowałaby z Rabką (`rabka-zdroj.ts`).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 2 SOŁECTWA: Jaworki i Szlachtowa. Od 1.01.2008 Szczawnica jest
 *   gminą MIEJSKO-WIEJSKĄ (wcześniej miejską) — te dwie wsie stały
 *   się wtedy sołectwami,
 * — RUŚ SZLACHTOWSKA: termin ukuty w latach 30. XX w.; cztery wsie
 *   w dolinie Ruskiego Potoku — Biała Woda, Czarna Woda, Jaworki,
 *   Szlachtowa. Osadnictwo wołoskie od XIV–XV w. z dominującym
 *   elementem rusińskim. Geograficznie oddzielone od zwartej
 *   Łemkowszczyzny,
 * — ⚠️ BIAŁA WODA NIE ISTNIEJE DZIŚ JAKO WIEŚ — to dolina i rezerwat.
 *   CZARNA WODA należy administracyjnie do Jaworek. NIE PISAĆ O NICH
 *   JAK O DZIAŁAJĄCYCH MIEJSCOWOŚCIACH,
 * — WYSIEDLENIA: 1945 — 1857 osób wyjeżdża do USRR; 1947 — akcja
 *   „Wisła”, przymusowe wysiedlenie pozostałych; 1950 — kolejne
 *   103 osoby. Tereny zasiedliła ludność z Podhala i Spisza.
 *   ⚠️ PISAĆ RZECZOWO I BEZ OCEN POLITYCZNYCH,
 * — MUZEUM PIENIŃSKIE IM. JÓZEFA SZALAYA W SZLACHTOWEJ — oddział
 *   Muzeum Ziemi Sądeckiej, ekspozycja „Ruś Szlachtowska i jej
 *   mieszkańcy”,
 * — HISTORIA UZDROWISKA (TŁO, NIE OŚ): 1828 odkrycie źródła „Stefan”;
 *   1839 Józef Stefan Szalay; 1857 wizyta dr. Józefa Dietla;
 *   1909 hrabia Adam Stadnicki; 2005 reprywatyzacja — uzdrowisko
 *   wraca do spadkobierców Stadnickiego (rodzina Mańkowskich),
 * — WODY MINERALNE: 9 ujęć — Józefina, Stefan, Józef, Magdalena,
 *   Jan, Helena, Wanda, Szymon, Pitoniakówka,
 * — PRACODAWCA: Grupa Thermaleo i Uzdrowisko Szczawnica S.A.,
 *   ok. 240 zatrudnionych,
 * — REGON: 1 139 podmiotów (2024) — ok. 172 na 1000 mieszkańców,
 *   bardzo dużo jak na tę wielkość gminy,
 * — KGW W JAWORKACH — potwierdzone,
 * — REDYK JESIENNY i REDYK WIOSENNY — organizuje Centrum Kultury,
 *   Sportu i Promocji w Szczawnicy; pokazy wyrobu oscypka,
 *   przemarsz owiec,
 * — KOLEJ LINOWA NA PALENICĘ (⚠️ to kolej linowa, nie żelazna).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY PRAW MIEJSKICH. Źródła podają 18.07.1962 albo 1.01.1973
 *   i sprzeczności nie udało się rozstrzygnąć. POMINIĘTA,
 * — LICZB Z LAMB FESTIWALU (777 litrów bryndzówki, 3000 porcji
 *   gulaszu). Jedno źródło, nieweryfikowane,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — BEZROBOCIA I WYNAGRODZEŃ. To dane POWIATOWE, identyczne dla
 *   wszystkich gmin powiatu. NIE CYTOWAĆ.
 *
 * PUŁAPKI:
 * — PRZYSTAŃ SPŁYWU DUNAJCEM JEST W SROMOWCACH/KĄTACH, GMINA
 *   CZORSZTYN — nie w Szczawnicy. Szczawnica bywa metą,
 * — DYREKCJA PIENIŃSKIEGO PARKU NARODOWEGO JEST W KROŚCIENKU,
 *   nie tutaj,
 * — ŹRÓDŁO „STEFAN” ISTNIEJE I W SZCZAWNICY, I W KROŚCIENKU,
 * — POWIERZCHNIA: 87,9 km² to gmina, 32,9 km² samo miasto.
 */

export const SZCZAWNICA: CityContent = {
  slug: "szczawnica",
  h1: "Thermomix Szczawnica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Szczawnica — prezentacja i cena",
  seoDescription:
    "Thermomix w Szczawnicy: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do miasta, Jaworek i Szlachtowej bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczawnica — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Szczawnicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Szczawnicy, Jaworek i Szlachtowej przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i oba sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczawnicy – jak wygląda prezentacja?",
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
      heading: "Jaworki i Szlachtowa — dolina, która nazywała się Rusią",
      paragraphs: [
        "Gmina Szczawnica ma dwa sołectwa i oba mają historię, jakiej nie ma nigdzie indziej w Małopolsce. Jaworki i Szlachtowa, razem z nieistniejącą już Białą Wodą i z Czarną Wodą, tworzyły region nazywany od lat trzydziestych dwudziestego wieku Rusią Szlachtowską.",
        "Osadnictwo przyszło tu wraz z wędrówką wołoską, czyli pasterską, w czternastym i piętnastym wieku, z przeważającym elementem rusińskim. Najciekawsze jest jednak położenie: te cztery wsie leżały w oderwaniu od zwartej Łemkowszczyzny, jako jej najdalej na zachód wysunięta wyspa. Kilkanaście kilometrów dalej zaczynało się już Podhale.",
        "Ta historia skończyła się w latach czterdziestych. W tysiąc dziewięćset czterdziestym piątym roku prawie tysiąc dziewięćset osób wyjechało za wschodnią granicę, w czterdziestym siódmym przeprowadzono przymusowe wysiedlenie pozostałych, a w pięćdziesiątym wyjechały ostatnie sto trzy osoby. Doliny zasiedlili potem ludzie z Podhala i ze Spisza.",
        "Piszę o tym, bo to nie jest ciekawostka z folderu — to wyjaśnia, dlaczego dzisiejsze Jaworki i Szlachtowa wyglądają, jak wyglądają. Zostały cerkwie, została nazwa Ruski Potok, zostało Muzeum Pienińskie w Szlachtowej z ekspozycją poświęconą właśnie tym mieszkańcom. Ludzie są inni, krajobraz ten sam.",
        "Co przetrwało bez przerwy, to owce. Pasterstwo wołoskie było tu podstawą gospodarki od sześciuset lat i nigdy nie zniknęło — zmienili się tylko ci, którzy je prowadzą. Do dziś w Szczawnicy i Jaworkach odbywają się dwa redyki, wiosenny i jesienny, z przemarszem owiec i pokazami wyrobu oscypka.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczawnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o Szczawnicę, Jaworki czy Szlachtową. Jaworki leżą kilka kilometrów w górę doliny i jeżdżę tam tak samo chętnie, tylko trasę planuję inaczej.",
        "Jeśli prowadzisz kwatery albo pracujesz w uzdrowisku, wspomnij o tym od razu. Lipiec i sierpień są u Was zwykle nie do ruszenia — a maj, czerwiec albo wrzesień są zupełnie spokojne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczawnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy dom jest jednocześnie miejscem pracy",
      paragraphs: [
        "W Szczawnicy zarejestrowanych jest ponad tysiąc sto podmiotów gospodarczych przy sześciu i pół tysiąca mieszkańców. To bardzo wysoki wskaźnik i mówi wprost, co się tu robi: prowadzi się kwatery, pensjonaty, wypożyczalnie, punkty gastronomiczne. Do tego dochodzi uzdrowisko, zatrudniające około dwustu czterdziestu osób.",
        "W praktyce oznacza to, że w wielu domach parter albo piętro jest wynajęte, a rodzina mieszka obok. Kuchnia bywa wtedy dwiema kuchniami naraz — jedną dla gości, drugą dla siebie — i to ta druga zwykle przegrywa.",
        "Najbardziej praktyczna rzecz jest tu bardzo konkretna. Danie jednogarnkowe wstawia się i idzie posprzątać pokoje. Gotuje się bez pilnowania, samo się wyłącza i czeka. Nie trzeba wracać co dziesięć minut ani prosić kogoś, żeby zamieszał.",
        "Druga to gotowanie w większych porcjach. Jeśli robisz gościom śniadania, ta sama logika działa i dla domu: jedna duża porcja zupy, sos na kilka dni, pasty, ciasto — zrobione seriami, w jednym naczyniu, wtedy kiedy akurat jest chwila.",
        "Trzecia dotyczy sezonu. Od maja do września dzień w Szczawnicy nie ma stałych godzin, więc obiad musi umieć poczekać albo powstać szybko. W zimie jest odwrotnie i wtedy najczęściej gotuje się do zamrażarki. Urządzenie obsługuje oba te tryby tak samo.",
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
    heading: "Szczawnica i gotowanie — owce, redyk i jagnięcina",
    paragraphs: [
      "Tutejsza kuchnia ma jedno bardzo wyraźne źródło i jest nim pasterstwo. Sześćset lat wypasu w dolinach Ruskiego Potoku zostawiło po sobie nie tylko krajobraz, ale i to, co się je: sery owcze, bundz, bryndzę, żentycę i baraninę.",
      "Widać to do dziś w kalendarzu. Wiosną odbywa się redyk wiosenny, jesienią redyk jesienny — z przemarszem owiec, pokazami wyrobu oscypka i muzyką pasterską. Do tego dochodzą imprezy poświęcone wprost jagnięcinie, na których gotuje między innymi koło gospodyń z Jaworek.",
      "Powiem uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost gminie Szczawnica. Oscypek i bryndza mają unijną ochronę nazwy, ale obejmuje ona cały region, nie to miasto. Nie będę dopisywać gminie dorobku, którego nie umiem wskazać źródłem.",
      "Dla domowego gotowania najciekawsza jest tu baranina i jagnięcina, bo obie są mięsem wymagającym. Potrzebują długiego, powolnego duszenia w niskiej temperaturze — a to jest dokładnie ta czynność, przy której najbardziej przeszkadza konieczność pilnowania garnka. Gulasz, który dusi się dwie godziny bez człowieka i sam się wyłącza, to nie jest drobiazg.",
      "Czego urządzenie nie zrobi, mówię wprost: nie zrobi oscypka i nie zastąpi bacy. Nie uwędzi sera i nie nauczy się rozpoznawać, kiedy bundz jest gotowy. Zabiera tę część roboty, która jest tylko czasem — rozdrabnianie, siekanie, mieszanie i stanie przy kuchni.",
    ],
  },

  districtsHeading: "Gdzie w gminie Szczawnica dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do obu sołectw — Jaworek i Szlachtowej — bez żadnej dopłaty za odległość.",
    "Gmina liczy około sześciu i pół tysiąca mieszkańców na osiemdziesięciu ośmiu kilometrach kwadratowych, z czego samo miasto zajmuje trzydzieści trzy. Dwie trzecie powierzchni to lasy, co jest tu najwyższym wskaźnikiem w okolicy.",
    "Warto wiedzieć o jednej zmianie administracyjnej, bo starsze teksty jej nie uwzględniają. Do końca dwa tysiące siódmego roku Szczawnica była gminą miejską; od pierwszego stycznia dwa tysiące ósmego jest miejsko-wiejska, a Jaworki i Szlachtowa są jej sołectwami.",
    "Dojazd: kolei w gminie nie ma. Prowadzi tu droga wojewódzka z Nowego Targu przez Czorsztyn i Krościenko, a z Krakowa jedzie się zakopianką i dalej w stronę Pienin. Kolej linowa na Palenicę to kolej linowa, nie żelazna — wspominam, bo nazwa myli.",
  ],
  districts: ["Szczawnica — centrum", "Szczawnica Niżna i Wyżna", "Jaworki", "Szlachtowa"],

  nearbyHeading: "Krościenko, Czorsztyn i Ochotnica też są na mojej trasie",
  nearbyParagraphs: [
    "Tuż obok leży Krościenko nad Dunajcem — osobna gmina, choć przez dziewięć lat, od tysiąc dziewięćset siedemdziesiątego trzeciego do osiemdziesiątego drugiego, obie tworzyły jeden organizm administracyjny. Dziś to dwie różne gminy i dojeżdżam do obu.",
    "Dalej są Czorsztyn, Ochotnica Dolna i Łapsze Niżne. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
  ],
  nearbyTowns: [
    "Krościenko",
    "Czorsztyn",
    "Ochotnica Dolna",
    "Łapsze Niżne",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do Szczawnicy", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w Jaworkach. Dojedziesz tam?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Jaworki i Szlachtowa to sołectwa gminy Szczawnica i traktuję je tak samo jak samo miasto. Przy umawianiu powiedz tylko, w której miejscowości mieszkasz, żebym dobrze rozplanowała trasę.",
    },
    ...faqWspolne("w Szczawnicy"),
    {
      question: "Prowadzę kwatery. Czy to urządzenie ma sens przy gościach?",
      answer:
        "Zależy, co dla nich robisz. Przy śniadaniach dobrze sprawdza się w powtarzalnych rzeczach: pastach, twarożkach, dżemach, cieście na bułki, zupach na zapas. Nie jest to sprzęt gastronomiczny i nie będę udawać, że zastąpi kuchnię hotelową — ale w domu, w którym gotuje się i dla siebie, i dla kilku gości, zdejmuje sporo powtarzalnej roboty. Na prezentacji chętnie pokażę to na tym, co akurat podajesz.",
    },
  ],

  geo: { lat: 49.425, lng: 20.4833 },
};
