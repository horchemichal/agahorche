import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * ZIELONKA — powiat wołomiński, woj. mazowieckie.
 * MIASTO 18 126 (GUS 31.12.2024), 79,5 km² (!), 228,1 os./km².
 * ⚠ POWIERZCHNIA JEST OGROMNA JAK NA LICZBĘ MIESZKAŃCÓW —
 *   miasto to w większości lasy i teren poligonu.
 *   ⚠⚠ POLIGONU NIE WYMIENIAM — temat wojskowy.
 *   Piszę wyłącznie „w większości lasy".
 * PRAWA OSIEDLA 1956, PRAWA MIEJSKIE 1960/1961.
 * ⚠ DATY PRAW MIEJSKICH PODAJĘ JAKO „na przełomie lat
 *   pięćdziesiątych i sześćdziesiątych" — źródła rozbieżne.
 *
 * ⚠⚠ HOMONIMY — KLUCZOWE:
 * ZIELONKA (miasto, powiat wołomiński)
 * ≠ ZIELONKI (gmina pod Krakowem, małopolskie!)
 * ≠ rezerwat „Zielonka" w Czyżowie Szlacheckim (świętokrzyskie)
 * ≠ PUSZCZA ZIELONKA (wielkopolskie)
 * ≠ ZIELONA GÓRA ≠ ZIELUŃ.
 * FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 * Rezerwaty faktycznie związane z tym miastem to BAGNO JACKA
 * i HOROWE BAGNO.
 *
 * HISTORIA:
 * — lustracja 1564 — rozległa puszcza królewska z cennym
 *   drewnem i zwierzyną,
 * — nazwa miasta od FOLWARKU I KARCZMY „NUTKA-ZIELONKA"
 *   z początku XVIII w.; międzywojenne miasto powstało
 *   ze zrośnięcia majątków Nutka-Zielonka, Zosinek i Bankowa,
 * — 1862 — otwarcie stacji kolei warszawsko-petersburskiej;
 *   początek rozwoju letniskowego,
 * — 1921: 78 domów i 471 mieszkańców; ok. 75 drewnianych
 *   domów letniskowych i pensjonatów,
 * — 1922–1923 — parcelacja folwarku na działki budowlane;
 *   do 1933 r. ok. 160 willi, głównie drewnianych.
 *   ⚠ NIE NAZYWAM TEGO „MIASTEM-OGRODEM" — to była żywiołowa
 *     parcelacja, nie projekt urbanistyczny. TWARDA GRANICA.
 * — ⚠ POD KONIEC XIX w. majątek Zielonka to zaledwie 195 mórg
 *   dworskich i ok. 40 mieszkańców — miasto NIE wyrosło
 *   z rolnictwa, tylko z letniska i cegielni.
 * — ⚠ KĄTU LETNISKOWEGO NIE UŻYWAM — „dom letniskowy, który
 *   stał się całoroczny" (Józefów) i „GOTOWANIE W OBCEJ
 *   KUCHNI" SĄ ZAJĘTE.
 * — ⚠ KĄTU KARCZEMNEGO NIE UŻYWAM — „jedzenie na mieście
 *   kontra gotowanie w domu" (Sopot) ZAJĘTE.
 *
 * ⚠⚠ CEGIELNIE — PODSTAWA KĄTA:
 * — w szczycie działały w Zielonce TRZY CEGIELNIE (m.in.
 *   Cegielnia Towarzystwa Akcyjnego, zakład zatrudniający
 *   ponad 200 osób sezonowo, „Helenów", cegielnia Mamki),
 * — GLINA ZALEGAŁA TUŻ POD POWIERZCHNIĄ,
 * — ⚠⚠ TECHNOLOGIA: NAJPIERW PIECE POLOWE, PÓŹNIEJ PIECE
 *   KRĘGOWE HOFFMANNA — rzadkie w województwach centralnych.
 *   TO JEST KOTWICA: cała historia wypału cegły to historia
 *   walki o RÓWNOMIERNE CIEPŁO,
 * — w 1950 r. pisano o planach cegielni na ok. 40 mln cegieł
 *   rocznie dla odbudowy Warszawy,
 *   ⚠ ODBUDOWY WARSZAWY NIE ROZWIJAM — temat powojenny.
 *   Podaję wyłącznie liczbę jako skalę produkcji.
 * — dawne GLINIANKI po cegielniach służą dziś rekreacji
 *   i ornitologii — stwierdzono w nich kilkadziesiąt gatunków
 *   ptaków.
 * ⚠ KĄT „NACZYNIA DO PIECZENIA — GLINA, SZKŁO, METAL"
 *   (Czarna Białostocka) JEST ZAJĘTY — o materiale naczyń
 *   NIE PISZĘ.
 *
 * GEOGRAFIA: rzeka DŁUGA (47 km), poniżej Marek jako Kanał
 * Markowski; dopływy Czarna Struga i Zonza. Warszawski Obszar
 * Chronionego Krajobrazu, rezerwaty Bagno Jacka i Horowe
 * Bagno, wydmy (Góra Horowa), dziesiątki dębów-pomników
 * przyrody o obwodach powyżej 400 cm.
 *
 * ZABYTKI: dawne Schronisko dla Nauczycieli (1902),
 * czterokondygnacyjny neogotyk proj. Stefana Szyllera;
 * drewniane domy letniskowe z przełomu XIX/XX w.
 * przy ul. Mickiewicza.
 * ⚠ MŁYNA PRZY UL. WOLNOŚCI (datowanego na XVI w.)
 *   NIE WYMIENIAM — jedno źródło, brak potwierdzenia.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 *
 * KĄT: NIERÓWNE PIECZENIE — dlaczego piekarnik piecze
 * z jednej strony mocniej.
 * Kąt od cegielni Zielonki: od pieców polowych, w których
 * cegła wychodziła nierówno, do pieców kręgowych Hoffmanna,
 * których cały sens polegał na tym, żeby ciepło rozkładało
 * się równo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że praktycznie każdy domowy piekarnik piecze nierówno
 *   i to nie jest usterka — tak po prostu jest,
 * — SKĄD SIĘ TO BIERZE: grzałki są z góry i z dołu, drzwi
 *   tracą ciepło, a tył jest cieplejszy niż front,
 * — ŻE DLATEGO CIASTO Z JEDNEJ STRONY BYWA CIEMNE, A Z DRUGIEJ
 *   BLADE, i że to najczęstsza skarga przy wypiekach,
 * — CO Z TYM ROBIĆ, PO KOLEI:
 *   — OBRÓCIĆ BLACHĘ w połowie pieczenia — jedna czynność,
 *     która rozwiązuje większość przypadków,
 *   — PIEC NA JEDNYM POZIOMIE, nie na dwóch naraz, jeśli
 *     piekarnik nie ma termoobiegu,
 *   — NIE ZASTAWIAĆ CAŁEJ BLACHY DO SAMYCH KRAWĘDZI,
 *     bo przy ściankach zawsze jest goręcej,
 *   — NIE OTWIERAĆ DRZWI BEZ POTRZEBY — każde otwarcie
 *     to strata ciepła i opadające ciasto,
 * — ŻE WARTO POZNAĆ SWÓJ PIEKARNIK: zrobić raz blachę
 *   zwykłych ciastek i zobaczyć, który róg rumieni się
 *   pierwszy — to jest mapa, która służy latami,
 * — ŻE TERMOOBIEG WYRÓWNUJE TEMPERATURĘ, ale też mocniej
 *   suszy, więc nie do wszystkiego jest lepszy,
 * — ŻE WSKAZANIE POKRĘTŁA I RZECZYWISTA TEMPERATURA
 *   TO CZĘSTO DWIE RÓŻNE LICZBY, i że dlatego przepis
 *   z internetu bywa niewinny,
 * — ⚠⚠ ŻADNYCH KONKRETNYCH TEMPERATUR ANI CZASÓW
 *   — piszę o zjawisku, nie o liczbach. TWARDA GRANICA,
 * — ŻE POZYCJA BLACHY ZMIENIA WYNIK: niżej — mocniejszy spód,
 *   wyżej — mocniejsza góra; przy cieście z wilgotnym
 *   nadzieniem to decyduje,
 * — UCZCIWIE: THERMOMIX NIE PIECZE i tego problemu nie
 *   rozwiąże. Piekarnik zostaje piekarnikiem,
 * — ale robi rzecz odwrotną i wartą uwagi: w naczyniu, które
 *   stale miesza i trzyma ustawioną temperaturę, nierówności
 *   ciepła po prostu nie ma — dlatego to, co w garnku lubi
 *   się przypalić od dna, tam wychodzi za każdym razem
 *   tak samo.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH TEMPERATUR W STOPNIACH ANI CZASÓW W MINUTACH.
 * — ŻADNYCH USTAWIEŃ URZĄDZENIA.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ANI MAREK PIEKARNIKÓW.
 * — ZERO porad dotyczących naprawy i regulacji piekarnika.
 * — ⚠ ZERO TEMATU MATERIAŁU NACZYŃ — kąt ZAJĘTY.
 *
 * ⚠ ETYKA:
 * — ⚠⚠ ZERO TEMATU POLIGONU I WOJSKA. TWARDA GRANICA.
 * — ZERO tematów wojennych i odbudowy Warszawy.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO upadku cegielni.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „brak piekarnika" (Zdzieszowice) dotyczy TEGO, CZEGO
 *   URZĄDZENIE NIE UPIECZE.
 * — „PIEC I OGIEŃ" (Łęczyca) dotyczy OGNIA I PIECA
 *   JAKO ŹRÓDŁA CIEPŁA.
 * — „NACZYNIA DO PIECZENIA" (Czarna Białostocka) dotyczy
 *   MATERIAŁU FORM.
 * — „MOC" (Bledzew) dotyczy SIŁY GRZANIA NA PALNIKU.
 * — „ZAPIEKANKA" (Szlichtyngowa) dotyczy JEDNEGO DANIA.
 * TUTAJ chodzi o NIERÓWNY ROZKŁAD CIEPŁA W PIEKARNIKU
 * — o zjawisko i o cztery czynności, które je nadrabiają.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Zielonki miastem-ogrodem.
 * — NIE WYMIENIAM młyna przy ul. Wolności (jedno źródło).
 * — NIE PODAJĘ dokładnej daty praw miejskich.
 * — NIE WYMIENIAM poligonu.
 * — NIE PODAJĘ temperatur ani czasów pieczenia.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE MYLĘ ZIELONKI z ZIELONKAMI pod Krakowem, rezerwatem
 *   „Zielonka" w świętokrzyskiem ani Puszczą Zielonką
 *   w wielkopolskiem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lustracja z 1564 r. opisywała tu rozległą puszczę
 *   królewską z cennym drewnem i zwierzyną, a nazwa miasta
 *   pochodzi od folwarku i karczmy „Nutka-Zielonka"
 *   z początku XVIII w.; międzywojenne miasto powstało
 *   ze zrośnięcia majątków Nutka-Zielonka, Zosinek i Bankowa,
 * — w 1862 r. otwarto stację kolei warszawsko-petersburskiej,
 *   co uruchomiło rozwój letniskowy; w 1921 r. było tu
 *   78 domów i 471 mieszkańców, w latach 1922–1923
 *   rozparcelowano folwark na działki budowlane, a do 1933 r.
 *   stanęło około stu sześćdziesięciu willi, głównie
 *   drewnianych,
 * — w szczycie działały w Zielonce trzy cegielnie, a glina
 *   zalegała tuż pod powierzchnią; wypalano najpierw
 *   w piecach polowych, później w piecach kręgowych
 *   Hoffmanna, rzadkich w województwach centralnych;
 *   jeden z zakładów zatrudniał sezonowo ponad dwieście osób,
 * — dawne glinianki po cegielniach służą dziś rekreacji
 *   i ornitologii — stwierdzono w nich kilkadziesiąt
 *   gatunków ptaków,
 * — przez miasto płynie Długa, rzeka o długości 47 km,
 *   która poniżej Marek nosi nazwę Kanału Markowskiego;
 *   jej dopływami są Czarna Struga i Zonza,
 * — w granicach miasta leżą rezerwaty Bagno Jacka i Horowe
 *   Bagno, wydmy z Górą Horową oraz dziesiątki dębów
 *   będących pomnikami przyrody o obwodach powyżej czterystu
 *   centymetrów,
 * — z zabytków zachowało się dawne Schronisko dla Nauczycieli
 *   z 1902 r., czterokondygnacyjny neogotycki budynek
 *   projektu Stefana Szyllera, oraz drewniane domy
 *   letniskowe z przełomu XIX i XX w. przy ulicy Mickiewicza.
 */
export const ZIELONKA: CityContent = {
  slug: "zielonka",
  h1: "Thermomix Zielonka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zielonka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zielonce pod Warszawą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zielonka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zielonce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zielonki w powiecie wołomińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Zielonka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prawie każdy domowy piekarnik piecze nierówno. To nie usterka.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zielonce – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "nierowne-pieczenie",
      heading: "Piece cegielni w Zielonce — czyli o piekarniku, który piecze nierówno",
      paragraphs: [
        "Zielonka wyrosła nie z rolnictwa, tylko z letniska i z cegielni. Glina zalegała tu tuż pod powierzchnią, więc w szczycie pracowały trzy zakłady, a jeden zatrudniał sezonowo ponad dwieście osób. Najpierw wypalano w piecach polowych — prowizorycznych stosach cegły przykrytych ziemią. Potem pojawiły się piece kręgowe Hoffmanna, w tych stronach rzadkie.",
        "Cała różnica między jednym a drugim sprowadza się do rzeczy, która brzmi zaskakująco kuchennie: do równomierności ciepła. W piecu polowym cegła bliżej ognia wychodziła przepalona, dalej — niedopieczona, i z jednego wypału dostawało się kilka gatunków towaru. Piec kręgowy wymyślono właśnie po to, żeby wszystko w środku dostawało tyle samo.",
        "Wasz piekarnik jest pod tym względem bliżej pieca polowego, niż chcielibyście wiedzieć. Praktycznie każdy domowy piekarnik piecze nierówno — i to nie jest usterka, tylko konstrukcja. Grzałki są z góry i z dołu, drzwi tracą ciepło, a tył komory jest cieplejszy niż front. Stąd bierze się najczęstsza skarga przy wypiekach: ciasto z jednej strony ciemne, z drugiej blade.",
        "Najprostsze rozwiązanie jest jedno i załatwia większość przypadków: obrócić blachę w połowie pieczenia. Przód do tyłu. To wszystko. Jedna czynność, żadnego sprzętu, a różnica jest natychmiastowa.",
        "Reszta to cztery drobne nawyki. Piec na jednym poziomie, a nie na dwóch naraz, jeśli piekarnik nie ma termoobiegu — na dwóch zawsze jedna blacha przegra. Nie zastawiać blachy do samych krawędzi, bo przy ściankach komory jest zawsze goręcej i to tam wszystko przypala się najpierw. Nie otwierać drzwi bez potrzeby, bo każde otwarcie to strata ciepła, a przy cieście rosnącym — także opadnięcie. I pamiętać, że pozycja blachy zmienia wynik: niżej znaczy mocniejszy spód, wyżej — mocniejsza góra. Przy tartach i cieście z wilgotnym nadzieniem to decyduje o tym, czy spód będzie upieczony.",
        "Najbardziej wartościowa rzecz, jaką można w tym temacie zrobić, zajmuje jeden wieczór: upiec blachę zwykłych ciastek, ustawionych równo, i zobaczyć, który róg zrumieni się pierwszy. To jest mapa Waszego piekarnika i służy przez lata. Każdy piekarnik ma swój charakter i żaden przepis tego za Was nie sprawdzi.",
        "Warto też wiedzieć, że termoobieg rzeczywiście wyrównuje temperaturę — ale jednocześnie mocniej osusza. Nie do wszystkiego jest więc lepszy; przy delikatnych ciastach bywa gorszy niż zwykłe grzanie.",
        "I rzecz, która tłumaczy sporo nieporozumień z przepisami z internetu: wskazanie pokrętła i rzeczywista temperatura w komorze to bardzo często dwie różne liczby. Przepis może być w porządku, a piekarnik po prostu grzeje inaczej, niż deklaruje. To kolejny powód, żeby raz poznać swój sprzęt zamiast szukać winy w przepisie.",
        "Teraz uczciwie o sprzęcie. Thermomix nie piecze i tego problemu nie rozwiąże. Piekarnik zostaje piekarnikiem, a wypieki zostają w nim — to jest ograniczenie, o którym mówię na każdej prezentacji.",
        "Robi natomiast rzecz dokładnie odwrotną i wartą uwagi. W jego naczyniu, które stale miesza i trzyma ustawioną temperaturę, nierówności ciepła po prostu nie ma — nie istnieje gorący róg ani zimniejszy front. Dlatego wszystko, co w garnku lubi się przypalić od dna albo zwarzyć od nierównego grzania — budyń, gęsty sos, masa do serników, karmel — wychodzi tam za każdym razem tak samo. To jest mniej więcej to, co piece kręgowe zrobiły dla cegły.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zielonce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie masę albo krem, które regularnie się przypalają — powiedzcie przy umawianiu. To jest akurat ta część, w której urządzenie robi największą różnicę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zielonce"),
    sekcjaRaty("w Zielonce"),
    {
      id: "rodzina",
      heading: "Thermomix dla zielonkowskiej rodziny",
      paragraphs: [
        "Zielonka liczy ponad osiemnaście tysięcy mieszkańców, ale zajmuje aż siedemdziesiąt dziewięć i pół kilometra kwadratowego — to jedno z najmniej gęsto zabudowanych miast w okolicy, bo w większości są to lasy. Lustracja z 1564 roku opisywała tu rozległą puszczę królewską z cennym drewnem i zwierzyną, a nazwa miasta pochodzi od folwarku i karczmy „Nutka-Zielonka” z początku XVIII wieku; międzywojenne miasto powstało ze zrośnięcia majątków Nutka-Zielonka, Zosinek i Bankowa. W 1862 roku otwarto stację kolei warszawsko-petersburskiej, co uruchomiło rozwój letniskowy: w 1921 było tu siedemdziesiąt osiem domów i czterystu siedemdziesięciu jeden mieszkańców, w latach 1922–1923 rozparcelowano folwark na działki budowlane, a do 1933 stanęło około stu sześćdziesięciu willi, głównie drewnianych. Drugim filarem miasta były cegielnie — w szczycie trzy, a glina zalegała tuż pod powierzchnią; wypalano najpierw w piecach polowych, później w rzadkich w tych stronach piecach kręgowych Hoffmanna, a jeden z zakładów zatrudniał sezonowo ponad dwieście osób. Dawne glinianki służą dziś rekreacji i ornitologii — stwierdzono w nich kilkadziesiąt gatunków ptaków. Przez miasto płynie Długa, rzeka o długości czterdziestu siedmiu kilometrów, poniżej Marek nosząca nazwę Kanału Markowskiego; w granicach Zielonki leżą rezerwaty Bagno Jacka i Horowe Bagno, wydmy z Górą Horową oraz dziesiątki dębów-pomników przyrody o obwodach powyżej czterystu centymetrów. Z zabytków zachowało się dawne Schronisko dla Nauczycieli z 1902 roku, czterokondygnacyjny neogotycki budynek projektu Stefana Szyllera, oraz drewniane domy letniskowe z przełomu XIX i XX wieku przy ulicy Mickiewicza.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Zielonki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do Bankowej, Zosinka, dawnej Nutki, okolic stacji i zabudowy letniskowej przy ulicy Mickiewicza.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Bankowa", "Zosinek"],

  nearbyHeading: "Poza Zielonkę też przyjadę",
  nearbyParagraphs: [
    "Marki, Kobyłka, Wołomin, Ząbki, Warszawa i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Marki", "Kobyłka", "Wołomin", "Ząbki", "Warszawa"],

  about: blokOMnie("do Zielonki", "w Zielonce", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zielonki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Nazwa jest częsta, więc dla porządku: chodzi o Zielonkę w powiecie wołomińskim pod Warszawą, a nie o gminę Zielonki pod Krakowem, rezerwat „Zielonka” w świętokrzyskiem ani Puszczę Zielonkę w Wielkopolsce.",
    },
    ...faqWspolne("w Zielonce"),
    {
      question: "Dlaczego ciasto piecze się z jednej strony mocniej?",
      answer:
        "Bo prawie każdy domowy piekarnik grzeje nierówno — grzałki są z góry i z dołu, drzwi tracą ciepło, a tył komory jest cieplejszy niż front. To nie usterka, tylko konstrukcja. Najprostsze rozwiązanie to obrócić blachę przodem do tyłu w połowie pieczenia.",
    },
    {
      question: "Jak poznać swój piekarnik?",
      answer:
        "Upiec blachę zwykłych ciastek ustawionych równo i zobaczyć, który róg zrumieni się pierwszy. To jest mapa, która służy latami. Warto też wiedzieć, że wskazanie pokrętła i rzeczywista temperatura w komorze to często dwie różne liczby — przepis bywa w porządku, a piekarnik grzeje inaczej, niż deklaruje.",
    },
    {
      question: "Czy termoobieg zawsze jest lepszy?",
      answer:
        "Nie. Wyrównuje temperaturę w komorze, ale jednocześnie mocniej osusza, więc przy delikatnych ciastach bywa gorszy niż zwykłe grzanie. Przydaje się natomiast wtedy, gdy trzeba piec na dwóch poziomach naraz — bez niego jedna blacha zawsze przegrywa.",
    },
  ],

  geo: { lat: 52.3034, lng: 21.1607 },
};
