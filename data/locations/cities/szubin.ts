import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * SZUBIN — powiat nakielski, woj. kujawsko-pomorskie,
 * PAŁUKI (północno-wschodni skraj).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 9 365 mieszkańców (GUS 31.12.2024), 7,7 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 25 172 osoby, 332,3 km².
 * ⚠⚠ GMINA MA PRAWIE TRZY RAZY WIĘCEJ MIESZKAŃCÓW
 *   NIŻ SAMO MIASTO. NIE MIESZAM TYCH LICZB.
 *   TWARDA GRANICA.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ SZUBIN.
 * ⚠ ODMIANA: D. SZUBINA, Ms. W SZUBINIE,
 *   przym. SZUBIŃSKI.
 * ⚠ SZUBIN-WIEŚ to ODRĘBNA MIEJSCOWOŚĆ w gminie,
 *   nie dzielnica miasta. SZUBINA to wieś w łódzkiem.
 * ⚠⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 * ⚠ STRONA URZĘDU BYŁA NIEDOSTĘPNA PRZY RESEARCHU —
 *   część danych historycznych pozostała nieustalona
 *   i tego NIE UZUPEŁNIAM ZGADYWANIEM.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA PODAJĄ 1365, 1434
 *   ALBO OK. 1458 — TRZY SPRZECZNE WERSJE.
 *   ⚠⚠ W TEKŚCIE UŻYWAM WYŁĄCZNIE FORMUŁY
 *   „PIERWSZA WZMIANKA: 1365 R." — to jedyna data
 *   zgodna w źródłach. TWARDA GRANICA.
 * — ⚠⚠⚠ RDZEŃ KĄTA — ZAMEK SĘDZIWOJA PAŁUKI:
 *   PLAN REGULARNEGO CZWOROBOKU O BOKU 42 × 42 M,
 *   POWIERZCHNIA OK. 1 100 M², ⚠ ZE ŚCIĘTYM NAROŻNIKIEM.
 *   Cegła gotycka na fundamencie z GŁAZÓW GRANITOWYCH.
 *   Zachowane fragmenty murów sięgają 7 M WYSOKOŚCI.
 *   Okres budowy najprawdopodobniej 1361–1377.
 *   Fosa, most i wał.
 *   ⚠ WYMIAR 42 × 42 M POTWIERDZAJĄ TRZY NIEZALEŻNE
 *   ŹRÓDŁA — to najlepiej poświadczona liczba
 *   w całym tym researchu.
 * — ⚠ DWA RYNKI: stary to PLAC KOŚCIELNY — KWADRATOWY,
 *   najstarsza część miasta, z XV-wiecznym kościołem;
 *   NOWY RYNEK WYTYCZONO W 1780 R.
 * — 1783 r.: 1 170 mieszkańców,
 * — 1818–1975 — Szubin był siedzibą powiatu,
 * — 1912 — Dom Polski zbudowany ze składek społecznych;
 *   dziś siedziba Muzeum Ziemi Szubińskiej
 *   ⚠⚠ MUZEUM WOLNO WYMIENIĆ JAKO INSTYTUCJĘ,
 *   ALE ZERO OPISU ZBIORÓW I WYSTAW — patrz etyka.
 * — GEOGRAFIA: miasto leży NA ZBOCZU WZNIESIENIA
 *   ZWANEGO DZIEWICZĄ GÓRĄ; płyną tu DWIE RZEKI —
 *   GĄSAWKA I BIAŁA STRUGA; miasto rozwinęło się
 *   po prawej stronie Gąsawki, obok zamku.
 *   ⚠ BYŁO MIASTEM SZLACHECKIM I POZA ZAMKIEM NIE MIAŁO
 *   MURÓW OBRONNYCH.
 * — HERB: PELIKAN; pomnik pelikana na odnowionym rynku
 *   z fontannami.
 *   ⚠⚠ ZERO LEGENDY HERBOWEJ — jest krwawa. Sam pelikan
 *   i pomnik są bezpieczne. TWARDA GRANICA.
 * — ⚠⚠ ETYMOLOGIA OD „SZUBY" (kożucha) — JEDNO SŁABE
 *   ŹRÓDŁO, DO TEGO WIEDZIE DO SKÓR I GARBARSTWA.
 *   NIE UŻYWAM W OGÓLE. TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Szubin.
 *   ⚠⚠ PUŁAPKA POWIATOWA: w powiecie nakielskim są
 *   produkty z listy, ale WSZYSTKIE Z INNYCH GMIN —
 *   „piwo nakielskie" i „karp nakielski" to gmina Nakło
 *   nad Notecią, a „musztarda kcyńska sarepska"
 *   (wpis 26.05.2025) to GMINA KCYNIA, która sąsiaduje
 *   z gminą Szubin. NIE PRZYPISUJĘ ICH SZUBINOWI.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 * ⚠ DNI TARGOWYCH, DAT JARMARKÓW, SPISU RZEMIEŚLNIKÓW
 *   I WYKAZU CECHÓW NIE USTALONO — NIE WYMYŚLAM.
 *
 * KĄT: ŚCIĘTY NAROŻNIK — kształt naczynia decyduje
 * o tym, co się w nim uda.
 * Kąt od zamku: czworobok 42 na 42 metry, czyli kwadrat —
 * z jednym narożnikiem ściętym. Ktoś zrezygnował
 * z kawałka idealnej figury, bo teren tego wymagał.
 * W kuchni kształt naczynia robi to samo, tylko odwrotnie:
 * to on narzuca warunki, a nie my jemu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zamek w Szubinie zbudowano na planie regularnego
 *   czworoboku o boku czterdziestu dwóch metrów,
 *   o powierzchni około tysiąca stu metrów kwadratowych —
 *   ale z jednym narożnikiem ściętym; że mury stoją
 *   na fundamencie z głazów granitowych i sięgają
 *   siedmiu metrów,
 * — ŻE TEN ŚCIĘTY NAROŻNIK TO USTĘPSTWO: ktoś zrezygnował
 *   z kawałka idealnej figury, bo teren tak kazał,
 * — ⚠⚠ ŻE W KUCHNI JEST ODWROTNIE — TO KSZTAŁT NACZYNIA
 *   DYKTUJE WARUNKI, A NIE MY JEMU — TO JEST RDZEŃ,
 * — CO KONKRETNIE ROBI KSZTAŁT:
 *   — WYSOKA WĄSKA FORMA (KEKSÓWKA) piecze się dłużej
 *     i inaczej niż płaska o tej samej pojemności, bo
 *     ciepło ma dalej do środka; ta sama masa w płaskiej
 *     formie będzie gotowa wcześniej i będzie miała
 *     więcej skórki,
 *   — OKRĄGŁA TORTOWNICA A KWADRATOWA BLACHA: przy tej
 *     samej masie kwadratowa ma NAROŻNIKI, które zawsze
 *     zrobią się szybciej. Dlatego rogi są suchsze
 *     i dlatego nikt się o nie nie bije,
 *   — ⚠ TO JEST DOKŁADNIE POWÓD, DLA KTÓREGO ŚCINA SIĘ
 *     NAROŻNIKI W BUDOWNICTWIE I DLA KTÓREGO NAROŻNIK
 *     JEST PROBLEMEM TAKŻE W CIEŚCIE: ma dwie strony
 *     wystawione na ciepło zamiast jednej,
 *   — WĄSKI WYSOKI GARNEK A SZEROKI PŁASKI — o tym
 *     pisałam osobno ⚠ ODSYŁAM, NIE ROZWIJAM,
 * — ŻE DLATEGO ZAMIANA FORMY NA „TAKĄ SAMĄ, TYLKO INNĄ"
 *   NIE JEST NEUTRALNA — a przepisy podają pojemność
 *   albo średnicę i milczą o reszcie,
 * — ŻE JEDYNA UCZCIWA REGUŁA BRZMI: jeśli zmieniasz
 *   kształt formy, zmienia się grubość warstwy — i to
 *   grubość warstwy, a nie objętość, decyduje o czasie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie Thermomixa ma jeden
 *   kształt i to jest realne ograniczenie, o którym
 *   mówię wprost. Jest wąskie i wysokie, więc świetnie
 *   sprawdza się tam, gdzie trzeba mieszać i podgrzewać
 *   równo, a nie nadaje się tam, gdzie potrzebna jest
 *   duża powierzchnia. Piec i tak piecze piekarnik —
 *   urządzenie przygotowuje masę, nie zastępuje formy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OBOZÓW, JEŃCÓW, OFLAGÓW I STALAGÓW —
 *   patrz etyka. BEZWZGLĘDNIE.
 * — ⚠⚠ ZERO LEGENDY HERBOWEJ O PELIKANIE.
 * — ⚠⚠ ZERO ETYMOLOGII OD „SZUBY".
 * — ⚠ ZERO ROZMIARU NACZYNIA WZGLĘDEM ILOŚCI JEDZENIA —
 *   kąt zajęty (Żnin). Tutaj chodzi o KSZTAŁT, nie
 *   o rozmiar. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEJ ZACHĘTY DO ALKOHOLU.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ OBOZY JENIECKIE W SZUBINIE — TEMAT WYŁĄCZONY
 *   CAŁKOWICIE. To najlepiej udokumentowany i najczęściej
 *   wyszukiwany temat związany z tym miastem, a w źródłach
 *   obcojęzycznych praktycznie wypiera wszystko inne.
 *   ŻADNYCH SŁÓW „obóz", „jeniec", „oflag", „stalag".
 *   Muzeum wymieniam wyłącznie jako instytucję —
 *   BEZ OPISU ZBIORÓW. TWARDA GRANICA BEZWZGLĘDNA,
 *   NAJWAŻNIEJSZA W CAŁEJ TEJ FALI.
 * — ⚠⚠ ZERO OKUPACJI I ZERO LICZB OFIAR.
 * — ⚠⚠ ZERO SCHRONÓW Z 1939 R.
 * — ZERO powstań i walk (wielkopolskie, kościuszkowskie,
 *   listopadowe, styczniowe).
 * — ZERO wielkiego pożaru z 1840 r. i pożaru zamku.
 * — ZERO rozbiórki zamku w latach 30. XX w., zadłużenia
 *   i licytacyjnej sprzedaży dóbr.
 * — ZERO struktury narodowościowej z 1783 r.
 * — ZERO bezrobocia i demografii.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ZA DUŻE NACZYNIE DO MAŁEJ PORCJI" (Żnin) dotyczy
 *   ROZMIARU NACZYNIA WZGLĘDEM ILOŚCI.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi o KSZTAŁT
 *   przy tej samej ilości. Odsyłam tam wprost.
 * — „POWIERZCHNIA STYKU" (Konstancin-Jeziorna) dotyczy
 *   CIENKIEJ WARSTWY.
 * — „SKALA I POJEMNOŚĆ" (Gniezno) dotyczy DUŻYCH ILOŚCI.
 * — „DANIA UKŁADANE WARSTWAMI" (Nowe Miasto Lubawskie)
 *   dotyczy KOLEJNOŚCI WARSTW.
 * TUTAJ chodzi o KSZTAŁT FORMY I O GRUBOŚĆ WARSTWY,
 * KTÓRA Z NIEGO WYNIKA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty praw miejskich — źródła są sprzeczne.
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PRZYPISUJĘ Szubinowi produktów z Nakła ani
 *   z Kcyni.
 * — NIE ROZWIJAM etymologii nazwy ani legendy herbowej.
 * — NIE OPISUJĘ zbiorów muzeum.
 * — NIE PODAJĘ dni targowych ani cechów — nie ustalono.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szubin leży na Pałukach, w powiecie nakielskim,
 *   dwadzieścia cztery kilometry od Bydgoszczy; samo
 *   miasto liczy 9 365 mieszkańców (GUS, 31.12.2024)
 *   na siedmiu i siedmiu dziesiątych kilometra
 *   kwadratowego, a cała gmina miejsko-wiejska ma
 *   25 172 osoby — prawie trzy razy więcej niż miasto,
 * — pierwsza wzmianka o osadzie pochodzi z 1365 roku;
 *   daty nadania praw miejskich podawane są w źródłach
 *   rozbieżnie,
 * — zamek wzniesiony przez Sędziwoja Pałukę, budowany
 *   najprawdopodobniej w latach 1361–1377, stanął
 *   na planie regularnego czworoboku o boku czterdziestu
 *   dwóch metrów i powierzchni około tysiąca stu metrów
 *   kwadratowych — z jednym narożnikiem ściętym; zbudowano
 *   go z cegły gotyckiej na fundamencie z głazów
 *   granitowych, a zachowane mury sięgają siedmiu metrów;
 *   zamek otaczały fosa, most i wał,
 * — miasto ma dwa rynki: starym jest kwadratowy Plac
 *   Kościelny z XV-wiecznym kościołem, nowy wytyczono
 *   w 1780 roku,
 * — w 1783 roku mieszkało tu 1 170 osób, a w latach
 *   1818–1975 Szubin był siedzibą powiatu,
 * — Dom Polski zbudowano w 1912 roku ze składek
 *   społecznych; dziś mieści się w nim Muzeum Ziemi
 *   Szubińskiej,
 * — miasto leży na zboczu wzniesienia zwanego Dziewiczą
 *   Górą, między Gąsawką a Białą Strugą, i rozwinęło się
 *   po prawej stronie Gąsawki, obok zamku; jako miasto
 *   szlacheckie poza zamkiem nie miało murów obronnych,
 * — w herbie miasta jest pelikan, a jego pomnik stoi
 *   na odnowionym rynku z fontannami.
 */
export const SZUBIN: CityContent = {
  slug: "szubin",
  h1: "Thermomix Szubin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szubin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Szubinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szubin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szubinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szubina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Szubin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "O czasie pieczenia decyduje grubość warstwy, nie objętość formy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szubinie – jak wygląda prezentacja?",
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
      id: "sciety-naroznik",
      heading: "Czterdzieści dwa na czterdzieści dwa, z jednym rogiem ściętym",
      paragraphs: [
        "Zamek w Szubinie zbudowano na planie regularnego czworoboku o boku czterdziestu dwóch metrów — około tysiąca stu metrów kwadratowych, cegła gotycka na fundamencie z granitowych głazów, mury zachowane do siedmiu metrów, fosa, most i wał. Wymiar czterdzieści dwa na czterdzieści dwa podają zgodnie trzy niezależne źródła, co przy średniowiecznych budowlach zdarza się rzadko.",
        "Tylko że to nie jest kwadrat. Jeden narożnik jest ścięty.",
        "Ktoś świadomie zrezygnował z kawałka idealnej figury, bo teren tak kazał. Nie było w tym przegranej — było dostosowanie się do warunku, którego nie dało się zmienić.",
        "W kuchni jest odwrotnie i to jest cała rzecz: to kształt naczynia dyktuje warunki, a nie my jemu. I prawie nikt o tym nie myśli, bo przepisy podają pojemność albo średnicę, a o kształcie milczą.",
        "Wysoka, wąska keksówka piecze się dłużej niż płaska forma o tej samej pojemności, bo ciepło ma dalej do środka. Ta sama masa rozlana w płaskiej formie będzie gotowa wcześniej i będzie miała więcej skórki, a mniej wilgotnego środka. To jest inne ciasto, choć składniki są co do grama te same.",
        "Okrągła tortownica i kwadratowa blacha przy tej samej masie też dają dwie różne rzeczy — bo kwadratowa ma narożniki. Narożnik zawsze zrobi się szybciej niż reszta, bo ma dwie strony wystawione na ciepło zamiast jednej. Dlatego rogi są suchsze i twardsze, i dlatego przy stole nikt się o nie nie bije.",
        "Co jest zabawne, bo dokładnie z tego samego powodu ścina się narożniki w budownictwie. Róg to miejsce, które dostaje wszystkiego z dwóch stron naraz.",
        "O tym, co się dzieje, gdy naczynie jest po prostu za duże do ilości jedzenia, pisałam osobno przy innym mieście. Tu chodzi o coś innego: o kształt przy tej samej ilości.",
        "Wniosek jest jeden i jest uczciwy: zamiana formy na „taką samą, tylko inną” nigdy nie jest neutralna. Jeśli zmieniasz kształt, zmienia się grubość warstwy — a to grubość warstwy, a nie objętość, decyduje o tym, ile to będzie trwało. Cieńsza warstwa to krócej i więcej skórki, grubsza to dłużej i więcej środka.",
        "I uczciwie o sprzęcie, bo tu jest realne ograniczenie i lepiej je powiedzieć niż przemilczeć. Naczynie Thermomixa ma jeden kształt: wąskie i wysokie. To jest świetne tam, gdzie trzeba mieszać i podgrzewać równo — masa ma mały kontakt z powietrzem i duży z mieszadłem. To jest złe tam, gdzie potrzebna jest duża powierzchnia, i nic tego nie obejdzie.",
        "Piecze i tak piekarnik. Urządzenie przygotowuje masę — formy nie zastąpi i nie udaje, że zastępuje.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szubinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczesz i chcesz wiedzieć, gdzie kończy się rola urządzenia, a zaczyna rola piekarnika — powiedz to przy umawianiu. To dobra rzecz do przejścia na spokojnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szubinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szubińskiej rodziny",
      paragraphs: [
        "Szubin leży na Pałukach, w powiecie nakielskim, dwadzieścia cztery kilometry od Bydgoszczy; samo miasto liczy ponad dziewięć tysięcy mieszkańców na niecałych ośmiu kilometrach kwadratowych, a cała gmina miejsko-wiejska ma ponad dwadzieścia pięć tysięcy osób — prawie trzy razy więcej niż miasto. Pierwsza wzmianka o osadzie pochodzi z 1365 roku, choć daty nadania praw miejskich podawane są w źródłach rozbieżnie. Zamek wzniesiony przez Sędziwoja Pałukę, budowany najprawdopodobniej w latach 1361–1377, stanął na planie regularnego czworoboku o boku czterdziestu dwóch metrów i powierzchni około tysiąca stu metrów kwadratowych — z jednym narożnikiem ściętym; zbudowano go z cegły gotyckiej na fundamencie z głazów granitowych, a zachowane mury sięgają siedmiu metrów. Miasto ma dwa rynki: starym jest kwadratowy Plac Kościelny z piętnastowiecznym kościołem, nowy wytyczono w 1780 roku. W 1783 roku mieszkało tu tysiąc sto siedemdziesiąt osób, a w latach 1818–1975 Szubin był siedzibą powiatu. Dom Polski zbudowano w 1912 roku ze składek społecznych; dziś mieści się w nim Muzeum Ziemi Szubińskiej. Miasto leży na zboczu wzniesienia zwanego Dziewiczą Górą, między Gąsawką a Białą Strugą, a w jego herbie jest pelikan — jego pomnik stoi na odnowionym rynku z fontannami.",
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

  districtsHeading: "Do których części Szubina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od obu rynków i okolic zamku po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie, a gmina jest rozległa.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Szubin też przyjadę",
  nearbyParagraphs: [
    "Nakło nad Notecią, Kcynia, Łabiszyn, Barcin, Żnin, Mrocza i Bydgoszcz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nakło nad Notecią", "Kcynia", "Łabiszyn", "Barcin"],

  about: blokOMnie("do Szubina", "w Szubinie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szubina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Szubin jest miastem w gminie miejsko-wiejskiej, a sama gmina ma prawie trzy razy więcej mieszkańców niż miasto — przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Szubinie"),
    {
      question: "Czy można upiec to samo ciasto w innej formie?",
      answer:
        "Można, ale efekt nie będzie ten sam i warto to wiedzieć z góry. Zmiana kształtu zmienia grubość warstwy, a to właśnie grubość warstwy — nie objętość formy — decyduje o czasie. Cieńsza warstwa to krócej i więcej skórki, grubsza to dłużej i więcej wilgotnego środka. Przepisy podają zwykle pojemność i o kształcie milczą.",
    },
    {
      question: "Dlaczego rogi ciasta z kwadratowej blachy są suchsze?",
      answer:
        "Bo narożnik ma dwie strony wystawione na ciepło zamiast jednej, więc robi się szybciej niż reszta. Z dokładnie tego samego powodu ścina się narożniki w budownictwie — róg dostaje wszystkiego z dwóch stron naraz.",
    },
  ],

  geo: { lat: 53.0094, lng: 17.7398 },
};
