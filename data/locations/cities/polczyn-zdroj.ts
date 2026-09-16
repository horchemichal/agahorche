import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * POŁCZYN-ZDRÓJ — powiat świdwiński,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 7 193 mieszkańców (GUS 31.12.2024), 7,2 km²,
 * gęstość 997,6 os./km² — NAJWYŻSZA W TEJ FALI.
 * CAŁA GMINA: 13 632 osoby, 344,3 km² — PONAD
 * OSIEMDZIESIĄT MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,7674 / 16,0917.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 * ⚠ ROZBIEŻNOŚĆ: serwis geoportalowy podaje dla gminy
 *   13 532 (różnica ok. 100 osób). Używam 13 632
 *   za polskawliczbach/GUS.
 * ⚠⚠ DOKŁADNEJ LICZBY SOŁECTW NIE USTALONO — źródło
 *   wylicza nazwy, nie sumę. Piszę „ponad osiemdziesiąt
 *   miejscowości".
 *
 * ⚠ ODMIANA: ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   D. POŁCZYNA-ZDROJU, Ms. W POŁCZYNIE-ZDROJU.
 *   ⚠⚠ NIE POTWIERDZONE BEZPOŚREDNIO W PWN w sesji
 *   researchu, ale wzór jest ten sam co w Krynicy-Zdroju
 *   i Iwoniczu-Zdroju.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠ PUŁAPKA: mylenie z innymi miejscowościami „-Zdrój"
 *   (Polanica-Zdrój, Duszniki-Zdrój). Doprecyzowuję
 *   województwo w FAQ.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA GRANICA TEJ STRONY:
 *   ZERO TWIERDZEŃ ZDROWOTNYCH O WODACH, SOLANCE,
 *   BOROWINIE I ZABIEGACH. ANI JEDNEGO SŁOWA
 *   O LECZENIU, WSKAZANIACH, DOLEGLIWOŚCIACH
 *   CZY KORZYŚCIACH. Uzdrowisko opisuję WYŁĄCZNIE
 *   jako fakty techniczne i daty.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 *
 * HISTORIA I FAKTY TECHNICZNE — UŻYTE:
 * — ⚠⚠⚠ RDZEŃ KĄTA — DWIE DATY ODDALONE O 277 LAT:
 *   — 1688 — ODKRYCIE ŹRÓDEŁ MINERALNYCH I ZŁÓŻ TORFU
 *     NA POWIERZCHNI. ⚠ OKOLICZNOŚCI ODKRYCIA ŹRÓDŁO
 *     PODAJE Z WĄTKIEM ZDROWOTNYM — PODAJĘ WYŁĄCZNIE
 *     SAM FAKT I ROK,
 *   — 1965 — PIERWSZE ODWIERTY GŁĘBINOWE SOLANKI,
 *   — GŁĘBOKOŚĆ WYDOBYCIA OKOŁO 1 200 M.
 *     ⚠⚠ ŹRÓDŁA NIE ŁĄCZĄ TEJ GŁĘBOKOŚCI WPROST
 *     Z ROKIEM 1965 — możliwe, że dotyczą różnych
 *     odwiertów. PISZĘ O NICH JAKO O DWÓCH ODDZIELNYCH
 *     FAKTACH, NIE ŁĄCZĘ ICH W JEDNO ZDANIE.
 * — 1705 — budowa pierwszego domu zdrojowego
 *   przez Jakuba von Krockow.
 * — 1870–1908 — powstały obiekty uzdrowiskowe
 *   o nazwach Gryf, Borkowo, Irena, Podhale.
 * — SKŁAD SOLANKI: stężenie składników mineralnych
 *   na poziomie około 8 %. ⚠ PODAJĘ JAKO LICZBĘ,
 *   BEZ WYMIENIANIA PIERWIASTKÓW I BEZ ŻADNEGO
 *   KOMENTARZA O DZIAŁANIU.
 * — LINIA KOLEJOWA NR 421 POŁCZYN-ZDRÓJ–ŚWIDWIN:
 *   budowana odcinkami — 16.11.1896, 22.12.1896,
 *   17.03.1897 i 1.04.1897; tor normalny 1 435 mm,
 *   jednotorowa, prędkość po 1979 r. 50 km/h;
 *   ruch pasażerski zawieszony 25.03.1996, towarowy
 *   zakończony 1.05.1999, tory rozebrane od 25.11.2013
 *   do stycznia 2014. Dziś na tej trasie jest droga
 *   rowerowa.
 *   ⚠⚠ TO JEST DRUGA NOGA KĄTA: budowa w pięć miesięcy,
 *   użytkowanie przez dziewięćdziesiąt dziewięć lat,
 *   rozbiórka w dwa miesiące.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu. NIE TWIERDZĘ ANI ŻE JEST, ANI ŻE NIE MA.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: POWIERZCHNIA I GŁĘBIA — czyli różnica między
 * „znam to danie" a „wiem o nim wszystko", i dlaczego
 * warto pogłębiać to, co się już robi, zamiast dokładać
 * nowe pozycje.
 * Kąt od dwóch dat: źródła na powierzchni zauważono
 * w 1688 roku, a pierwsze odwierty głębinowe wykonano
 * w 1965. Dwieście siedemdziesiąt siedem lat między
 * zauważeniem czegoś na wierzchu a sięgnięciem głębiej
 * — w tym samym miejscu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że źródła zauważono na powierzchni w 1688 r.,
 *   pierwszy dom zdrojowy powstał w 1705, a pierwsze
 *   odwierty głębinowe wykonano dopiero w 1965;
 *   solankę wydobywa się z głębokości około 1 200 m,
 * — ŻE MIĘDZY POWIERZCHNIĄ A GŁĘBIĄ MINĘŁO 277 LAT
 *   W TYM SAMYM MIEJSCU — to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO TAK SAMO: repertuar rośnie
 *   wszerz, bo dokładanie nowego dania jest łatwe
 *   i przyjemne, a pogłębianie tego, co się już robi,
 *   nie daje się pochwalić i dlatego prawie nikt tego
 *   nie robi,
 * — ⚠⚠ ŻE „ZNAM TO DANIE" ZWYKLE ZNACZY „UMIEM JE
 *   POWTÓRZYĆ", a to jest co innego niż wiedzieć,
 *   co się w nim zmienia, gdy zmieni się jedna rzecz,
 * — ⚠⚠ ŻE KONKRETNY SPOSÓB JEST JEDEN: wybrać JEDNO
 *   danie, które robicie najczęściej, i przez najbliższe
 *   kilka razy zmieniać w nim za każdym razem JEDNĄ
 *   RZECZ. Po czterech, pięciu podejściach wie się
 *   o tym daniu więcej niż po dziesięciu latach robienia
 *   go zawsze tak samo.
 *   ⚠⚠⚠ NIE PODAJĘ, CO ZMIENIAĆ — to byłaby instrukcja
 *   kulinarna. Piszę WYŁĄCZNIE o zasadzie: jedno danie,
 *   jedna zmiana naraz,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: TO NIE JEST ARGUMENT
 *   PRZECIWKO NOWYM DANIOM. Repertuar wszerz i wgłąb
 *   to dwie różne rzeczy i obie są potrzebne —
 *   ale tylko o pierwszej ktokolwiek przypomina,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie sprzyja
 *   dokładaniu wszerz, bo przychodzi z gotowymi
 *   przepisami, i łatwo przy nim zostać na poziomie
 *   powierzchni. Mówię to wprost, bo to realne ryzyko,
 *   a nie zaleta. Do pogłębiania trzeba się zabrać samemu
 *   — sprzęt daje tu tylko jedno: powtarzalność, dzięki
 *   której widać, co zmieniła wprowadzona zmiana.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WÓD LECZNICZYCH, ZABIEGÓW, WSKAZAŃ
 *   I KORZYŚCI. Patrz wyżej. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO BOROWINY JAKO TEMATU — nazwa potoczna
 *   „czarne złoto" kusi, ale każde zdanie o borowinie
 *   prowadzi do wskazań. NIE WSPOMINAM BOROWINY WCALE.
 * — ⚠⚠ ZERO PORÓWNANIA DWÓCH WERSJI JEDNEGO DANIA —
 *   kąty zajęte (Drawsko Pomorskie i Kamień Pomorski,
 *   ta sama fala). ⚠⚠ TO JEST NAJBLIŻSZE SĄSIEDZTWO
 *   I RÓŻNICA MUSI BYĆ WIDOCZNA: tam porównuje się DWIE
 *   WERSJE, ŻEBY COŚ ROZSTRZYGNĄĆ (czy krok potrzebny,
 *   co jest rdzeniem); TUTAJ chodzi o WYBÓR MIĘDZY
 *   ROZSZERZANIEM REPERTUARU A JEGO POGŁĘBIANIEM.
 *   Ani jednego zdania o wycinaniu kroków ani
 *   o dodatkach. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO OKRESU PRÓBNEGO I LICZBY PODEJŚĆ — kąt
 *   zajęty (Sławno, ta sama fala).
 * — ⚠ ZERO WYBORU MIĘDZY METODAMI — kąt zajęty (Łobez,
 *   ta sama fala).
 * — ⚠ ZERO NUDY I ZAPAŁU PIERWSZYCH TYGODNI — kąty
 *   zajęte (Konin, Żyrardów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEJ PODPOWIEDZI, CO ZMIENIAĆ W DANIU.
 *   Piszę WYŁĄCZNIE zasadę „jedno danie, jedna zmiana".
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WSKAZAŃ ZDROWOTNYCH W JAKIEJKOLWIEK
 *   POSTACI — także w formie historycznej albo legendy.
 *   Źródło opisuje okoliczności odkrycia z 1688 r.
 *   z wątkiem dolegliwości; PODAJĘ WYŁĄCZNIE ROK I FAKT
 *   ODKRYCIA.
 * — ⚠⚠ ZERO KONTROLI NIK Z 2019 R. — dotyczy statusu
 *   uzdrowiskowego i prowadzi wprost do tematu leczenia.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠ ZERO PIERWIASTKÓW I SKŁADU SZCZEGÓŁOWEGO SOLANKI —
 *   podaję wyłącznie stężenie ogólne w procentach.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby sołectw ani wysokości n.p.m.
 * — NIE ŁĄCZĘ roku 1965 z głębokością 1 200 m w jedno
 *   zdanie — źródła tego nie łączą.
 * — NIE PISZĘ ANI SŁOWA O DZIAŁANIU WÓD I SOLANKI.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że gmina ma albo nie ma wpisu na Liście
 *   Produktów Tradycyjnych.
 * — NIE PODAJĘ, co zmieniać w daniu.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Połczyn-Zdrój leży w powiecie świdwińskim, jest
 *   miastem w gminie miejsko-wiejskiej i liczy
 *   7 193 mieszkańców (GUS, 31.12.2024) na 7,2 km²,
 *   przy gęstości blisko tysiąca osób na kilometr
 *   kwadratowy; cała gmina ma 13 632 osoby na 344,3 km²
 *   i obejmuje ponad osiemdziesiąt miejscowości,
 * — źródła mineralne i złoża torfu odkryto tu w 1688 r.,
 *   a pierwszy dom zdrojowy wzniósł w 1705 r. Jakub
 *   von Krockow,
 * — w latach 1870–1908 powstały obiekty uzdrowiskowe
 *   o nazwach Gryf, Borkowo, Irena i Podhale,
 * — pierwsze odwierty głębinowe wykonano w 1965 r.,
 *   a solankę o stężeniu składników mineralnych około 8 %
 *   wydobywa się z głębokości około 1 200 m,
 * — linię kolejową numer 421 do Świdwina budowano
 *   odcinkami od 16 listopada 1896 do 1 kwietnia 1897 r.;
 *   była jednotorowa, o rozstawie 1 435 mm, a po 1979 r.
 *   prędkość ustalono na 50 km/h; ruch pasażerski
 *   zawieszono 25 marca 1996 r., towarowy zakończono
 *   1 maja 1999 r., a tory rozebrano między 25 listopada
 *   2013 a styczniem 2014 — dziś biegnie tamtędy droga
 *   rowerowa.
 */
export const POLCZYN_ZDROJ: CityContent = {
  slug: "polczyn-zdroj",
  h1: "Thermomix Połczyn-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Połczyn-Zdrój — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Połczynie-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Połczyn-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Połczynie-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Połczyna-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Połczyn-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Repertuar rośnie wszerz sam. Wgłąb rośnie tylko wtedy, gdy ktoś tego chce.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Połczynie-Zdroju – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "powierzchnia-i-glebia",
      heading: "Dwieście siedemdziesiąt siedem lat między powierzchnią a głębią",
      paragraphs: [
        "Źródła mineralne w Połczynie zauważono na powierzchni w 1688 roku. W 1705 stanął tu pierwszy dom zdrojowy, a w latach 1870–1908 powstały kolejne obiekty — Gryf, Borkowo, Irena, Podhale.",
        "Pierwsze odwierty głębinowe wykonano natomiast dopiero w 1965 roku. Solankę o stężeniu składników mineralnych na poziomie około ośmiu procent wydobywa się tu z głębokości około tysiąca dwustu metrów.",
        "Między zauważeniem czegoś na wierzchu a sięgnięciem głębiej — w tym samym miejscu, po to samo — minęło dwieście siedemdziesiąt siedem lat.",
        "Domowe gotowanie rozwija się dokładnie w tym rytmie i to jest jedyna rzecz, którą chcę tu powiedzieć.",
        "Repertuar rośnie wszerz sam z siebie. Nowy przepis, nowe danie, coś, czego się jeszcze nie robiło — to jest łatwe, przyjemne i od razu widać efekt. Pogłębianie tego, co się już robi, nie ma w sobie nic z tego. Nie da się tym pochwalić, nikt tego nie zauważy i dlatego prawie nikt tego nie robi.",
        "A „znam to danie” zwykle znaczy tylko tyle, że umiem je powtórzyć. To jest co innego niż wiedzieć, co się w nim zmienia, kiedy zmieni się w nim jedna rzecz — i właśnie ta druga wiedza jest tą, która zostaje na lata i przenosi się na inne dania.",
        "Sposób jest banalnie prosty i mieści się w jednym zdaniu. Wybierz jedno danie, które robisz najczęściej, i przez najbliższe kilka razy zmieniaj w nim za każdym razem jedną rzecz. Jedną, nie dwie.",
        "Po czterech, pięciu takich podejściach wiesz o tym daniu więcej niż po dziesięciu latach robienia go zawsze tak samo. Nie napiszę, co zmieniać — nie jestem od dawania instrukcji kulinarnych i to jest zresztą całe sedno: przy własnym daniu sama wiesz, co Cię w nim kiedykolwiek kusiło.",
        "Uczciwie o drugiej stronie, bo to nie jest argument przeciwko nowym przepisom. Repertuar wszerz i repertuar wgłąb to dwie różne rzeczy i obie są potrzebne. Rzecz w tym, że o pierwszej przypomina każda gazeta, każdy program i każda aplikacja, a o drugiej nie przypomina nikt.",
        "I na koniec o urządzeniu — tym razem nie na jego korzyść, bo tak jest uczciwiej.",
        "Ono sprzyja rozszerzaniu wszerz. Przychodzi z gotowymi przepisami, podpowiada kolejne i naprawdę łatwo jest przy nim zostać na poziomie powierzchni przez rok — robiąc co tydzień coś nowego i nie wiedząc o żadnym z tych dań nic ponad to, że wyszło.",
        "Do pogłębiania trzeba się zabrać samemu i żaden sprzęt tego nie zrobi. Daje tylko jedno, za to akurat niezbędne: powtarzalność, dzięki której po zmianie jednej rzeczy widać, że to właśnie ta rzecz coś zmieniła — a nie pogoda, pośpiech albo inny dzień tygodnia.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Połczynie-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, które danie robicie u siebie najczęściej — wolę ugotować z Wami właśnie je niż coś, czego już nigdy nie powtórzycie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Połczynie-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla połczyńskiej rodziny",
      paragraphs: [
        "Połczyn-Zdrój leży w powiecie świdwińskim i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad siedem tysięcy mieszkańców na siedmiu i dwóch dziesiątych kilometra kwadratowego — przy gęstości blisko tysiąca osób na kilometr kwadratowy, najwyższej w okolicy — a cała gmina ponad trzynaście i pół tysiąca osób na trzystu czterdziestu czterech kilometrach kwadratowych, w ponad osiemdziesięciu miejscowościach. Źródła mineralne i złoża torfu odkryto tu w 1688 roku, a pierwszy dom zdrojowy wzniósł w 1705 Jakub von Krockow; w latach 1870–1908 powstały obiekty o nazwach Gryf, Borkowo, Irena i Podhale. Pierwsze odwierty głębinowe wykonano dopiero w 1965 roku, a solankę o stężeniu składników mineralnych około ośmiu procent wydobywa się z głębokości około tysiąca dwustu metrów. Linię kolejową numer 421 do Świdwina budowano odcinkami od szesnastego listopada 1896 do pierwszego kwietnia 1897 roku; była jednotorowa, o rozstawie tysiąca czterystu trzydziestu pięciu milimetrów, a po 1979 roku prędkość ustalono na pięćdziesiąt kilometrów na godzinę. Ruch pasażerski zawieszono dwudziestego piątego marca 1996 roku, towarowy zakończono pierwszego maja 1999, a tory rozebrano między listopadem 2013 a styczniem 2014 — dziś biegnie tamtędy droga rowerowa.",
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

  districtsHeading: "Do których części Połczyna-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — także do części zdrojowej — i do wszystkich miejscowości w gminie, a jest ich ponad osiemdziesiąt. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Połczyn-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Świdwin jest około dwudziestu kilometrów stąd, a Białogard, Koszalin i Złocieniec mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdwin", "Białogard", "Koszalin", "Złocieniec"],

  about: blokOMnie("do Połczyna-Zdroju", "w Połczynie-Zdroju", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Połczyna-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich ponad osiemdziesięciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo miejscowości z członem „Zdrój” bywają mylone: chodzi o Połczyn-Zdrój w powiecie świdwińskim w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Połczynie-Zdroju"),
    {
      question: "Jak poprawić danie, które robi się od lat?",
      answer:
        "Wybrać jedno danie, które robicie najczęściej, i przez najbliższe kilka razy zmieniać w nim za każdym razem jedną rzecz — jedną, nie dwie. Po czterech, pięciu podejściach wie się o tym daniu więcej niż po dziesięciu latach robienia go zawsze tak samo. „Znam to danie” zwykle znaczy tylko „umiem je powtórzyć”, a to jest co innego niż wiedzieć, co się w nim zmienia po zmianie jednej rzeczy.",
    },
    {
      question: "Czy Thermomix rozwija gotowanie sam z siebie?",
      answer:
        "Wszerz tak, wgłąb nie — i wolę powiedzieć to wprost. Przychodzi z gotowymi przepisami i naprawdę łatwo jest przy nim przez rok robić co tydzień coś nowego, nie wiedząc o żadnym z tych dań nic ponad to, że wyszło. Do pogłębiania trzeba się zabrać samemu. Sprzęt daje tu jedno, za to niezbędne: powtarzalność, dzięki której widać, że zmianę spowodowała właśnie ta rzecz, którą zmieniliście.",
    },
  ],

  geo: { lat: 53.7674, lng: 16.0917 },
};
