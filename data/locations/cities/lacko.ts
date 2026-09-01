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
 * ŁĄCKO — GMINA WIEJSKA w powiecie nowosądeckim.
 * 16 670 mieszkańców (31.12.2024), 133,0 km². Mediana wieku 36,9 lat,
 * przyrost naturalny +59 (2024).
 *
 * OŚ STRONY: SAD JAKO POKUTA. Nie „mamy jabłka” (strona Nowego Sącza
 * już wymienia jabłka łąckie i śliwowicę jako produkty regionalne
 * Sądecczyzny), tylko KTO, KIEDY I JAK je tu wprowadził — dwa
 * nazwiska i szkolny ogródek.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KS. JAN PIASKOWY — proboszcz Łącka 1898–1923 (25 lat); NAKŁADAŁ
 *   NA PARAFIAN SADZENIE DRZEWEK OWOCOWYCH JAKO POKUTĘ; zakładał
 *   Kółka Rolnicze,
 * — STANISŁAW WILKOWICZ — dyrektor/nauczyciel szkoły; zbadał warunki
 *   klimatyczne i geologiczne, WYHODOWAŁ Z UCZNIAMI PIERWSZE SADZONKI
 *   W OGRÓDKU SZKOLNYM, uczył szczepienia,
 * — TRADYCJA ŚREDNIOWIECZNA: suszone jabłka i śliwki spławiano
 *   Dunajcem do Wisły i dalej do Gdańska. XVI-wieczne dokumenty
 *   wspominają sady folwarczne i parafialne,
 * — MIKROKLIMAT KOTLINY ŁĄCKIEJ; większość sadów na stokach
 *   o nachyleniu ok. 15°,
 * — SKALA: po wiosennych przymrozkach 2026 oszacowano straty
 *   w 224 GOSPODARSTWACH SADOWNICZYCH gminy,
 * — SĄDECKA GRUPA PRODUCENTÓW OWOCÓW I WARZYW „OWOC ŁĄCKI” Sp. z o.o.,
 *   Łącko 761; Stowarzyszenie „Łącka Droga Owocowa”,
 * — JABŁKA ŁĄCKIE — Lista Produktów Tradycyjnych 10 PAŹDZIERNIKA
 *   2005 R.; CHRONIONE OZNACZENIE GEOGRAFICZNE UE 5 LISTOPADA 2010 R.,
 *   23. polski produkt w rejestrze ChOG. ⚠️ OBSZAR ChOG OBEJMUJE
 *   CZTERY GMINY: Łącko, Podegrodzie, Stary Sącz i Łukowicę —
 *   NIE BUDOWAĆ NARRACJI O WYŁĄCZNOŚCI. Dopuszczonych 14 odmian,
 * — ŚLIWOWICA ŁĄCKA — Lista Produktów Tradycyjnych 10.10.2005,
 *   kategoria napoje. ⚠️ NIE MA STATUSU ChOG UE. NIE MYLIĆ Z JABŁKAMI.
 *   Historia: 1882–1912 gorzelnia Samuela Grossbarda i Salomona
 *   Goldcheina; przed II wojną Inkaso Ferber, ok. 2000 dm³ rocznie,
 *   eksport głównie do Palestyny,
 * — ⚠️⚠️ LEGALNOŚĆ: DOMOWA DESTYLACJA JEST W POLSCE NIELEGALNA
 *   (stan potwierdzony na 30.10.2023). Legalny producent w gminie:
 *   Krzysztof Maurer / Manufaktura Maurera. ⚠️ DATA ZEZWOLENIA
 *   SPORNA (2012 vs 2021) — pisać „od kilkunastu lat”.
 *   NIE ROMANTYZOWAĆ BIMBRU. NIE PISAĆ „legalna od 20xx”,
 * — ⚠️ TWIERDZENIE O „NIEMATERIALNYM DZIEDZICTWIE KULTUROWYM
 *   W 1989 R.” JEST FAŁSZYWE — krajowa lista NDK powstała w 2013 r.
 *   NIE POWTARZAĆ,
 * — ŚWIĘTO KWITNĄCEJ JABŁONI — PIERWSZA EDYCJA 18 MAJA 1947 R.
 *   z inicjatywy wójta MACIEJA TALARA; reaktywowane 1958. Odbywa się
 *   na stoku Góry Jeżowej; korowód z Orkiestrą Dętą im. T. Moryto,
 * — ETNOGRAFIA: mieszkańcy to GÓRALE ŁĄCCY, zaliczani do GÓRALI
 *   BIAŁYCH — NIE Lachy Sądeckie. To realna granica etnograficzna
 *   między Łąckiem a Podegrodziem,
 * — 16 SOŁECTW: Brzyna, Czarny Potok, Czerniec, Jazowsko, Kadcza,
 *   Kicznia, Łazy Brzyńskie, Łącko, Maszkowice, Obidza, Szczereż,
 *   Wola Kosnowa, Wola Piskulina, Zabrzeż, Zagorzyn, Zarzecze,
 * — REGON: 1 505 podmiotów (31.12.2024), 1 267 osób fizycznych,
 * — POŁOŻENIE: styk trzech pasm — Beskid Wyspowy, Beskid Sądecki,
 *   Gorce. Od 1257 do 1772 właścicielem ziem były klaryski,
 * — OBWODNICA ŁĄCKA: ok. 3 km, dwa ronda, realizacja 1.06.2025 –
 *   30.03.2029.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — POWIERZCHNI SADÓW W HEKTARACH. NIE POTWIERDZONO żadnym źródłem.
 *   NIE ZGADYWAĆ,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW poza „Owoc Łącki” i Manufakturą
 *   Maurera.
 *
 * PUŁAPKI:
 * — BRAK KOLEI W GMINIE,
 * — GÓRA ZYNDRAMA W MASZKOWICACH — stanowisko archeologiczne
 *   z kamiennym murem; ŚWIADOMIE POMINIĘTE, bo nie zweryfikowane.
 */

export const LACKO: CityContent = {
  slug: "lacko",
  h1: "Thermomix Łącko – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łącko — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Łącko: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łącko — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łącko. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łącka i wszystkich szesnastu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łącku – jak wygląda prezentacja?",
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
      heading: "Sad zadawany przy konfesjonale",
      paragraphs: [
        "O Łącku wiadomo powszechnie, że są tu jabłka. Znacznie ciekawsze jest to, skąd się wzięły — bo nie wyrosły same i nie były tu od zawsze w dzisiejszej skali. Wprowadzili je dwaj konkretni ludzie na przełomie dziewiętnastego i dwudziestego wieku.",
        "Pierwszy to ksiądz Jan Piaskowy, proboszcz Łącka przez dwadzieścia pięć lat, od tysiąc osiemset dziewięćdziesiątego ósmego do tysiąc dziewięćset dwudziestego trzeciego roku. Zakładał kółka rolnicze, prowadził działalność oświatową — i, jak podaje parafia, nakładał na parafian sadzenie drzewek owocowych jako pokutę przy konfesjonale. Trudno o skuteczniejszy program rolny.",
        "Drugi to Stanisław Wilkowicz, ówczesny dyrektor tutejszej szkoły. Zbadał warunki klimatyczne i geologiczne kotliny, a pierwsze sadzonki wyhodował z uczniami w ogródku szkolnym. Uczył ich też szczepienia drzewek. Dzisiejsze sady na piętnastostopniowych stokach zaczęły się w szkolnym warzywniku.",
        "Handel owocami był tu zresztą starszy. Już w średniowieczu suszone jabłka i śliwki spławiano stąd Dunajcem do Wisły i dalej do Gdańska, a szesnastowieczne dokumenty wspominają sady folwarczne i parafialne. Nowością na przełomie wieków nie był owoc, tylko metoda i skala.",
        "Dziś to nadal główny zawód okolicy. Po wiosennych przymrozkach w dwa tysiące dwudziestym szóstym roku straty szacowano w dwustu dwudziestu czterech gospodarstwach sadowniczych samej gminy Łącko. Działa tutejsza grupa producencka i stowarzyszenie skupiające sadowników.",
        "Święto Kwitnącej Jabłoni odbyło się po raz pierwszy osiemnastego maja tysiąc dziewięćset czterdziestego siódmego roku z inicjatywy ówczesnego wójta Macieja Talara, a od pięćdziesiątego ósmego trwa nieprzerwanie. Korowód prowadzi orkiestra dęta, a całość odbywa się na stoku Góry Jeżowej.",
        "Warto jeszcze wiedzieć, że mieszkańcy Łącka to Górale Łąccy, zaliczani do Górali Białych — a nie Lachy Sądeckie, jak w sąsiednim Podegrodziu. Granica etnograficzna biegnie tu naprawdę, nie tylko w folderach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łącko?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma sto trzydzieści trzy kilometry kwadratowe i szesnaście sołectw rozrzuconych po trzech pasmach górskich — jazda do Obidzy to zupełnie co innego niż do Jazowska. Na cenę to nie wpływa.",
        "Jeśli masz sad, powiedz to od razu. W szczycie zbiorów nie ma sensu umawiać się na dwie godziny w kuchni; luty, marzec i listopad są u Was zwykle znacznie spokojniejsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łącko"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Rok, który dzieli się na zbiory i resztę",
      paragraphs: [
        "W gminie zarejestrowanych jest ponad tysiąc pięćset podmiotów gospodarczych, ale najważniejsza liczba jest inna: dwieście dwadzieścia cztery gospodarstwa sadownicze. To znaczy, że w bardzo wielu domach rok nie dzieli się na miesiące, tylko na kwitnienie, opryski, zbiory i zimę.",
        "Sad ma tę cechę, że nie da się go przełożyć. Kiedy owoc dojrzewa, pracuje się od świtu do zmroku i nikt wtedy nie stoi przy garnku. Kiedy sezon się kończy, czasu jest nagle bardzo dużo. Kuchnia musi obsłużyć oba te tryby.",
        "W sezonie najbardziej praktyczne jest danie jednogarnkowe. Wstawia się je rano i wychodzi do sadu — gotuje się bez pilnowania, samo się wyłącza i czeka. Nie trzeba wracać, żeby zamieszać, i nic się nie przypala.",
        "Poza sezonem opłaca się odwrotne podejście: gotowanie z zapasem i do zamrażarki. Zupy, sosy, pasty, ciasto na pierogi — robione seriami, kiedy jest spokój, a odbierane wtedy, gdy nie ma czasu na nic.",
        "Trzecia rzecz to owoce, i tu Łącko jest szczególnym przypadkiem. Przecier, mus, powidła, sok, ciasto — wszystko to są czynności powtarzalne, wykonywane w dużych partiach, oparte na rozdrabnianiu i długim mieszaniu w cieple. Akurat tego urządzenie zdejmuje najwięcej.",
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
    heading: "Łącko i gotowanie — jabłka z unijną ochroną i śliwka",
    paragraphs: [
      "Jabłka łąckie trafiły na ministerialną Listę Produktów Tradycyjnych dziesiątego października dwa tysiące piątego roku, a pięć lat później, piątego listopada dwa tysiące dziesiątego, dostały unijne chronione oznaczenie geograficzne — jako dwudziesty trzeci polski produkt w tym rejestrze. Dopuszczonych jest czternaście odmian.",
      "Powiem od razu rzecz, która bywa przemilczana: to oznaczenie nie należy wyłącznie do Łącka. Obszar obejmuje cztery gminy — Łącko, Podegrodzie, Stary Sącz i Łukowicę. Jabłko z Podegrodzia jest tak samo łąckie w rozumieniu prawa jak to z Czerńca.",
      "Śliwowica łącka jest na tej samej krajowej liście, wpisana tego samego dnia, w kategorii napojów. Nie ma natomiast unijnej ochrony nazwy — to dwie różne rzeczy i często się je myli. Historia jest tu udokumentowana: w latach tysiąc osiemset osiemdziesiątych działała gorzelnia Grossbarda i Goldcheina, a przed wojną wytwarzano tu około dwóch tysięcy litrów rocznie, z eksportem głównie do Palestyny.",
      "I rzecz, której nie przemilczę, choć popsuje trochę romantyzm. Domowa destylacja jest w Polsce nielegalna i była taka również według stanu z dwa tysiące dwudziestego trzeciego roku. W gminie działa od kilkunastu lat legalna manufaktura z koncesją. Krążącemu w sieci twierdzeniu, jakoby nazwa została uznana za niematerialne dziedzictwo kulturowe w tysiąc dziewięćset osiemdziesiątym dziewiątym roku, też nie dam wiary — krajowa lista takiego dziedzictwa powstała dopiero w dwa tysiące trzynastym.",
      "Dla domowej kuchni najważniejsze są tu owoce w postaci, w jakiej rzeczywiście się je przerabia: powidła, musy, soki, przeciery, szarlotki, ciasta ze śliwkami. To wszystko są czynności długie i powtarzalne — smażenie powideł potrafi trwać godzinami i wymaga ciągłego mieszania. Właśnie tę część urządzenie przejmuje w całości. Czego nie zrobi: nie zerwie owocu, nie oceni, czy jest dojrzały, i nie zastąpi wprawy. Zabiera tylko czas.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Łącko dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich szesnastu, bez żadnej dopłaty za odległość. Gmina zajmuje sto trzydzieści trzy kilometry kwadratowe i liczy ponad szesnaście i pół tysiąca mieszkańców.",
    "Sołectwa to: Brzyna, Czarny Potok, Czerniec, Jazowsko, Kadcza, Kicznia, Łazy Brzyńskie, Łącko, Maszkowice, Obidza, Szczereż, Wola Kosnowa, Wola Piskulina, Zabrzeż, Zagorzyn i Zarzecze.",
    "Położenie jest tu nietypowe: gmina leży na styku trzech pasm — Beskidu Wyspowego, Beskidu Sądeckiego i Gorców. Od tysiąc dwieście pięćdziesiątego siódmego do tysiąc siedemset siedemdziesiątego drugiego roku właścicielem tych ziem były starosądeckie klaryski.",
    "Dojazd: kolei w gminie nie ma. Prowadzi tędy droga wojewódzka z Nowego Targu przez Krościenko do Starego Sącza — dziś mocno obciążona, bo przejeżdża nią ponad dwanaście tysięcy pojazdów na dobę. Od dwa tysiące dwudziestego piątego roku budowana jest obwodnica Łącka; ma mieć około trzech kilometrów i dwa ronda, a termin zakończenia przewidziano na dwa tysiące dwudziesty dziewiąty rok.",
  ],
  districts: [
    "Łącko",
    "Jazowsko",
    "Czerniec",
    "Zagorzyn",
    "Zabrzeż",
    "Maszkowice",
    "Czarny Potok",
    "Obidza i Brzyna",
  ],

  nearbyHeading: "Stary Sącz, Krościenko i Podegrodzie też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy ze Starym Sączem, Podegrodziem, Krościenkiem, Ochotnicą Dolną i Kamienicą. Dojeżdżam do wszystkich, bez doliczania kosztu dojazdu.",
    "Trzy z tych gmin — Łącko, Podegrodzie i Stary Sącz — leżą w obszarze tego samego unijnego oznaczenia dla jabłek łąckich. Przy umawianiu wystarczy, że podasz sołectwo.",
  ],
  nearbyTowns: [
    "Stary Sącz",
    "Podegrodzie",
    "Krościenko",
    "Ochotnica Dolna",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Łącko", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mam sad. Kiedy najlepiej się umówić?",
      answer:
        "Poza szczytem prac — najlepiej zimą albo późną jesienią, kiedy macie w domu dwie spokojne godziny. W sezonie zbiorów nie ma to sensu i nie będę nalegać. Jeśli chcesz, mogę wtedy ugotować coś z Waszych owoców: mus, powidła albo ciasto, żeby było widać, jak to działa na tym, co i tak macie.",
    },
    ...faqWspolne("w gminie Łącko"),
    {
      question: "Robimy powidła i przeciery. To urządzenie w tym pomoże?",
      answer:
        "Pomoże i to jest chyba jego najmocniejsza strona w takiej gminie jak Wasza. Smażenie powideł polega na wielu godzinach mieszania w niskiej temperaturze — a to urządzenie robi bez człowieka i bez ryzyka przypalenia. Tak samo przy musach, sokach i przecierach. Nie zerwie owocu i nie oceni, czy jest dojrzały, ale zabiera całą powtarzalną część roboty.",
    },
  ],

  geo: { lat: 49.5583, lng: 20.4344 },
};
