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
 * WOLIN — MIASTO, powiat kamieński,
 * woj. zachodniopomorskie, na wyspie Wolin, nad Dziwną.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 617 mieszkańców (GUS 31.12.2024), 14,5 km²,
 * gęstość 319,1 os./km².
 * CAŁA GMINA: 11 622 osoby, 327,9 km², OKOŁO 50
 * MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,8419 / 14,6144.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 *
 * ⚠⚠⚠ TRZY RÓŻNE POJĘCIA — ROZRÓŻNIENIE OBOWIĄZKOWE:
 *   (1) MIASTO WOLIN — 4 617 mieszkańców, siedziba gminy,
 *   (2) WYSPA WOLIN — 265 km², obszar geograficzny,
 *   (3) WOLIŃSKI PARK NARODOWY — ponad 40 % wyspy,
 *       pierwszy polski park narodowy o charakterze
 *       morskim.
 *   ⚠⚠ MIĘDZYZDROJE LEŻĄ NA TEJ SAMEJ WYSPIE, ale to
 *   INNA GMINA — mają własną stronę w serwisie.
 *   ROZGRANICZAM W FAQ.
 *
 * ⭐ ODMIANA — POTWIERDZONA W PWN:
 *   D. WOLINA, Ms. W WOLINIE, N. WOLINEM.
 *   MIESZKANIEC: WOLINIANIN, l.mn. WOLINIANIE —
 *   PWN definiuje to słowo jako „mieszkaniec Wolina —
 *   miasta, wyspy", czyli obejmuje oba obiekty.
 *   ⚠⚠ ALE NIE UŻYWAM TEJ NAZWY W TREŚCI: „Wolinianie"
 *   to także historyczna nazwa plemienia słowiańskiego,
 *   pokonanego przez Mieszka I w 967 r. Dwa znaczenia
 *   naraz to zbędne ryzyko nieporozumienia.
 *   W sekcji rodzinnej piszę „dla rodziny z Wolina".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — IX w. — pierwsze wzmianki pisemne; gród otoczony
 *   umocnieniami drewniano-ziemnymi.
 * — ⚠⚠⚠ RDZEŃ KĄTA — DWIE SKALE W JEDNYM MIEJSCU:
 *   — NABRZEŻE PORTOWE O DŁUGOŚCI OKOŁO 300 M,
 *     stawiające Wolin w czołówce portów Bałtyku,
 *   — PIERWSZE DREWNIANE DOMY O WYMIARACH OKOŁO 5 × 6 M,
 *     z dachem dwuspadowym.
 *   Port w skali międzynarodowej, dom w skali jednego
 *   pomieszczenia.
 * — ⚠⚠ LICZBY 9 000 MIESZKAŃCÓW W X W. NIE UŻYWAM —
 *   zestawiona z dzisiejszymi 4 617 prowadzi wprost
 *   do wątku wyludnienia.
 * — 1278 — PRAWA MIEJSKIE na prawie lubeckim
 *   od księcia Barnima I. ⚠ SAM ROK, bez daty dziennej.
 * — 1365 — wstąpienie do Hanzy.
 * — MOST OBROTOWY — oddany do użytku 22 GRUDNIA 1958 R.
 * — ⚠⚠ „SREBRNEGO WZGÓRZA" I CYTADELI NIE UŻYWAM —
 *   wątek warowny.
 * — ⚠⚠ ROKU 967 I STARCIA Z MIESZKIEM I NIE UŻYWAM —
 *   wątek wojenny.
 *
 * ⚠⚠⚠ TRÓJNIAK WOLIŃSKI LEŚNY — Lista Produktów
 *   Tradycyjnych, wpis 11 maja 2016 r.
 *   ⚠⚠⚠ NIE UŻYWAM GO ANI RAZU. To miód pitny
 *   o zawartości alkoholu 12–14 %. ALKOHOL JEST TEMATEM
 *   WYKLUCZONYM NA CAŁEJ STRONIE.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠ To jedyny potwierdzony wpis z tej gminy, więc
 *   NIE PISZĘ, ŻE GMINA NIE MA PRODUKTU NA LIŚCIE —
 *   po prostu nie poruszam tematu Listy na tej stronie.
 * ⚠⚠ FESTIWALU SŁOWIAN I WIKINGÓW NIE UŻYWAM — wątki
 *   wierzeń przedchrześcijańskich plus rozbieżność
 *   w numeracji edycji (start 1993, a w 2025 podano
 *   trzydziestą edycję — liczby się nie sumują).
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: PRZEPIS NAPISANY DLA INNEJ KUCHNI — czyli dlaczego
 * techniki z restauracji nie przenoszą się do domu
 * jeden do jednego i co z tym zrobić.
 * Kąt od wczesnośredniowiecznego Wolina: nabrzeże portowe
 * mierzyło około trzystu metrów i stawiało miasto
 * w czołówce portów Bałtyku, a pierwsze domy miały około
 * pięciu na sześć metrów. Skala publiczna i skala
 * codzienna w jednym miejscu, i to nie jest sprzeczność.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wczesnośredniowieczny Wolin miał nabrzeże długie
 *   na około trzysta metrów, co stawiało go w czołówce
 *   portów regionu, a jego pierwsze domy miały około
 *   pięciu na sześć metrów,
 * — ŻE TO NIE BYŁA SPRZECZNOŚĆ, TYLKO DWIE RÓŻNE SKALE
 *   OBOK SIEBIE — to jest rdzeń,
 * — ⚠⚠ ŻE PRZEPIS Z RESTAURACJI JEST NAPISANY DLA INNEJ
 *   SKALI I ŻE NIE CHODZI O ILOŚĆ. Chodzi o ZAŁOŻENIA,
 *   których nikt w przepisie nie wypisuje, bo w tamtej
 *   kuchni są oczywiste. Wymieniam TRZY, JAKOŚCIOWO:
 *   (1) że przygotowanie zrobił wcześniej ktoś inny,
 *   (2) że danie idzie na stół natychmiast, a nie czeka,
 *       aż wszyscy usiądą,
 *   (3) że przy jednym daniu pracuje więcej niż jedna
 *       osoba, a każda robi tylko swój fragment,
 *   ⚠⚠⚠ ŻADNYCH KONKRETNYCH TECHNIK ANI DAŃ.
 *   Piszę o założeniach, nie o wykonaniu,
 * — ⚠⚠ ŻE Z TEGO WYNIKA PRAKTYCZNE PYTANIE DO KAŻDEGO
 *   TAKIEGO PRZEPISU: CO TEN PRZEPIS ZAKŁADA, CZEGO
 *   NIE NAPISAŁ. Zwykle odpowiedź brzmi „czas kogoś
 *   innego",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: TO NIE JEST POWÓD,
 *   ŻEBY TAKICH PRZEPISÓW NIE PRÓBOWAĆ. Sporo z nich
 *   działa w domu bez zmian — rzecz w tym, żeby wiedzieć
 *   z góry, że jeśli nie wyjdzie, to często nie z powodu
 *   umiejętności, tylko z powodu założeń,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie domyka JEDNO
 *   z tych trzech założeń — to o przygotowaniu zrobionym
 *   wcześniej przez kogoś innego, bo część pracy dzieje
 *   się bez udziału rąk. NIE DOMYKA DWÓCH POZOSTAŁYCH
 *   i nie będę twierdzić inaczej.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO POJEMNOŚCI I GOTOWANIA NA IMPREZĘ — kąt
 *   zajęty (Gniezno). ⚠⚠ NAJBLIŻSZY KĄT NUMER JEDEN.
 *   Tam odpowiada się na pytanie, CZY DA SIĘ W TYM
 *   UGOTOWAĆ DLA WIELU OSÓB; TUTAJ nie ma ani jednego
 *   zdania o ilości. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO SKALOWANIA PRZEPISU NA WIĘCEJ OSÓB — kąt
 *   zajęty (Świdwin). ⚠⚠ NAJBLIŻSZY KĄT NUMER DWA.
 *   Tam chodzi o ARYTMETYKĘ PORCJI; TUTAJ o ZAŁOŻENIA
 *   ORGANIZACYJNE przepisu. Rozgraniczam wprost.
 * — ⚠⚠ ZERO WĄSKIEGO GARDŁA I JEDNEJ PARY RĄK — kąt
 *   zajęty (Darłowo). Trzecie założenie wymieniam
 *   jednym zdaniem i NIE ROZWIJAM w stronę planowania
 *   kolejności.
 * — ⚠⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn).
 * — ⚠⚠ ZERO PRZEPISÓW W CUDZYCH MIARACH — kąt zajęty
 *   (Zgorzelec).
 * — ⚠⚠ ZERO KROKU ROBIONEGO BEZ POWODU — kąt zajęty
 *   (Drawsko Pomorskie).
 * — ⚠ ZERO WYBORU MIĘDZY METODAMI — kąt zajęty (Łobez).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEJ KONKRETNEJ TECHNIKI RESTAURACYJNEJ
 *   Z NAZWY I ŻADNEGO DANIA. Piszę WYŁĄCZNIE
 *   o założeniach. TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM, MAREK, LOKALI I NAZWISK KUCHARZY.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO TRÓJNIAKA WOLIŃSKIEGO — alkohol.
 *   To najbardziej kuszący fakt kulinarny o tym mieście
 *   i jedyny potwierdzony wpis z gminy na Liście
 *   Produktów Tradycyjnych. NIE WSPOMINAM.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO FESTIWALU SŁOWIAN I WIKINGÓW — wątki
 *   wierzeń przedchrześcijańskich.
 * — ⚠⚠ ZERO ROKU 967 I STARCIA Z MIESZKIEM I.
 * — ⚠⚠ ZERO 4 MAJA 1945 I PRZESIEDLEŃ.
 * — ⚠⚠ ZERO UMOCNIEŃ, CYTADELI I „SREBRNEGO WZGÓRZA" —
 *   wątki warowne. Nabrzeże i domy opisuję jako budowle
 *   portowe i mieszkalne.
 * — ⚠ ZERO PORÓWNANIA LICZBY MIESZKAŃCÓW Z X WIEKIEM.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta, gminy i wyspy.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PISZĘ ANI SŁOWA O ALKOHOLU.
 * — NIE UŻYWAM nazwy mieszkańca — dwuznaczna.
 * — NIE PODAJĘ ŻADNEJ TECHNIKI ANI DANIA Z NAZWY.
 * — NIE PORUSZAM tematu Listy Produktów Tradycyjnych.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wolin to miasto na wyspie Wolin, nad Dziwną,
 *   w powiecie kamieńskim; jest siedzibą gminy
 *   miejsko-wiejskiej i liczy 4 617 mieszkańców
 *   (GUS, 31.12.2024) na 14,5 km², a cała gmina
 *   11 622 osoby na 327,9 km², w około pięćdziesięciu
 *   miejscowościach,
 * — wyspa Wolin ma 265 km², a ponad czterdzieści procent
 *   jej powierzchni zajmuje Woliński Park Narodowy,
 *   pierwszy polski park narodowy o charakterze morskim;
 *   miasto Wolin, wyspa Wolin i park to trzy różne rzeczy,
 * — pierwsze pisemne wzmianki o Wolinie pochodzą
 *   z IX wieku,
 * — wczesnośredniowieczne nabrzeże portowe miało około
 *   300 metrów długości, co stawiało Wolin w czołówce
 *   portów regionu Morza Bałtyckiego, a pierwsze
 *   drewniane domy mierzyły około 5 na 6 metrów i miały
 *   dachy dwuspadowe,
 * — prawa miejskie na prawie lubeckim nadał miastu
 *   w 1278 r. książę Barnim I, a w 1365 Wolin wstąpił
 *   do Hanzy,
 * — most obrotowy oddano do użytku 22 grudnia 1958 r.
 */
export const WOLIN: CityContent = {
  slug: "wolin",
  h1: "Thermomix Wolin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wolin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Wolinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wolin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wolinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wolina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Wolin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis z restauracji zwykle zakłada czas kogoś innego. Tego nigdzie nie napisano.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wolinie – jak wygląda prezentacja?",
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
      id: "inna-skala",
      heading: "Trzysta metrów nabrzeża i dom pięć na sześć",
      paragraphs: [
        "Wczesnośredniowieczny Wolin miał nabrzeże portowe długie na około trzysta metrów. Jak na dziewiąty i dziesiąty wiek stawiało go to w czołówce portów całego Bałtyku — to była infrastruktura w skali międzynarodowej.",
        "A pierwsze drewniane domy w tym samym mieście miały około pięciu na sześć metrów, z dachem dwuspadowym. Trzydzieści metrów kwadratowych na całe życie rodziny.",
        "Trzysta metrów nabrzeża i trzydzieści metrów kwadratowych domu, w tym samym miejscu i w tym samym czasie. To nie jest sprzeczność ani czyjeś niedopatrzenie — to po prostu dwie różne skale, z których każda była właściwa dla swojego zadania.",
        "Do tego się zmierzam, bo w kuchni mylimy te dwie skale bez przerwy.",
        "Przepis wzięty z restauracji jest napisany dla innej skali. I nie chodzi tu wcale o ilość — to akurat najmniejszy problem. Chodzi o założenia, których nikt w takim przepisie nie wypisuje, bo w tamtej kuchni są tak oczywiste, że nikomu nie przyszłoby do głowy ich zapisywać.",
        "Pierwsze: że przygotowanie zrobił wcześniej ktoś inny. Przepis zaczyna się w momencie, w którym wszystko jest już pokrojone, odmierzone i stoi w zasięgu ręki — a to jest zwykle większa część całej pracy.",
        "Drugie: że danie idzie na stół natychmiast po skończeniu. Nie czeka, aż wszyscy usiądą, aż ktoś wróci, aż skończy się rozmowa w przedpokoju.",
        "Trzecie: że przy jednym daniu pracuje więcej niż jedna osoba i każda robi tylko swój fragment, nie oglądając się na resztę.",
        "Stąd bierze się pytanie, które warto zadać każdemu takiemu przepisowi, zanim się go zacznie: co on zakłada, czego nie napisał. W ośmiu przypadkach na dziesięć odpowiedź brzmi „czas kogoś innego”.",
        "Uczciwie o drugiej stronie, bo to nie jest zachęta do trzymania się z daleka. Sporo takich przepisów działa w domu bez żadnych zmian i szkoda byłoby ich nie próbować. Rzecz w tym, żeby wiedzieć z góry: jeśli nie wyjdzie, to bardzo często nie z powodu umiejętności, tylko z powodu założeń, których nikt nie wypisał. To są dwie zupełnie różne diagnozy i tylko jedna z nich jest prawdziwa.",
        "Na koniec o urządzeniu, konkretnie. Domyka ono jedno z tych trzech założeń — pierwsze. Część przygotowania dzieje się bez udziału rąk, więc w domowej kuchni pojawia się coś na kształt tego kogoś, kto wcześniej wszystko przygotował.",
        "Dwóch pozostałych nie domyka i nie będę twierdzić, że domyka. Danie dalej czeka, aż wszyscy usiądą, a przy garnku dalej stoi jedna osoba. Jedno z trzech to i tak dużo, ale to nie jest wszystko.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wolinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy próbowaliście u siebie przepisu, który wyglądał prosto, a okazał się robotą na pół dnia — to zwykle najlepszy punkt wyjścia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wolinie"),
    sekcjaRaty("w Wolinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wolina",
      paragraphs: [
        "Wolin to miasto na wyspie Wolin, nad Dziwną, w powiecie kamieńskim; jest siedzibą gminy miejsko-wiejskiej i liczy ponad cztery i pół tysiąca mieszkańców na czternastu i pięciu dziesiątych kilometra kwadratowego, a cała gmina ponad jedenaście i pół tysiąca osób na trzystu dwudziestu siedmiu kilometrach kwadratowych, w około pięćdziesięciu miejscowościach. Sama wyspa ma dwieście sześćdziesiąt pięć kilometrów kwadratowych, a ponad czterdzieści procent jej powierzchni zajmuje Woliński Park Narodowy — pierwszy polski park narodowy o charakterze morskim. Miasto Wolin, wyspa Wolin i park to trzy różne rzeczy o podobnych nazwach. Pierwsze pisemne wzmianki o Wolinie pochodzą z dziewiątego wieku. Wczesnośredniowieczne nabrzeże portowe miało około trzystu metrów długości, co stawiało miasto w czołówce portów regionu Morza Bałtyckiego, a pierwsze drewniane domy mierzyły około pięciu na sześć metrów i miały dachy dwuspadowe. Prawa miejskie na prawie lubeckim nadał Wolinowi w 1278 roku książę Barnim I, a w 1365 miasto wstąpiło do Hanzy. Most obrotowy oddano do użytku dwudziestego drugiego grudnia 1958 roku.",
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

  districtsHeading: "Do których części Wolina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Dziwnej — i do wszystkich miejscowości w gminie, a jest ich około pięćdziesięciu. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Wolin też przyjadę",
  nearbyParagraphs: [
    "Międzyzdroje i Kamień Pomorski są tuż obok, a Świnoujście i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Międzyzdroje", "Kamień Pomorski", "Świnoujście", "Szczecin"],

  about: blokOMnie("do Wolina", "w Wolinie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wolina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie — jest ich około pięćdziesięciu. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te nazwy mylą się nagminnie: miasto Wolin, wyspa Wolin i Woliński Park Narodowy to trzy różne rzeczy. Międzyzdroje leżą na tej samej wyspie, ale to osobna gmina — tam też przyjeżdżam.",
    },
    ...faqWspolne("w Wolinie"),
    {
      question: "Dlaczego przepis z restauracji rzadko wychodzi w domu tak samo?",
      answer:
        "Nie przez ilość, tylko przez założenia, których nikt w nim nie wypisał, bo w tamtej kuchni są oczywiste. Trzy najważniejsze: że przygotowanie zrobił wcześniej ktoś inny, że danie idzie na stół natychmiast po skończeniu i że przy jednym daniu pracuje więcej niż jedna osoba. Warto zadać każdemu takiemu przepisowi pytanie: co on zakłada, czego nie napisał. W ośmiu przypadkach na dziesięć odpowiedź brzmi „czas kogoś innego”.",
    },
    {
      question: "Czy Thermomix wyrównuje tę różnicę?",
      answer:
        "Domyka jedno z tych trzech założeń — to o przygotowaniu zrobionym wcześniej, bo część pracy dzieje się bez udziału rąk. Dwóch pozostałych nie domyka i nie będę twierdzić inaczej: danie dalej czeka, aż wszyscy usiądą, a przy garnku dalej stoi jedna osoba. Jedno z trzech to sporo, ale to nie jest wszystko.",
    },
  ],

  geo: { lat: 53.8419, lng: 14.6144 },
};
