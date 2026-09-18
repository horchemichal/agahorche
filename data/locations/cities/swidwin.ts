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
 * ŚWIDWIN — powiat świdwiński, woj. zachodniopomorskie,
 * nad Regą. ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST SAMODZIELNĄ
 * GMINĄ.
 * MIASTO: 14 470 mieszkańców (GUS 31.12.2024), 22,4 km²,
 * gęstość 646,6 os./km², 79–111 m n.p.m.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA PUŁAPKA TEJ STRONY —
 *   DWIE JEDNOSTKI O TEJ SAMEJ NAZWIE:
 *   ISTNIEJE ODRĘBNA GMINA WIEJSKA ŚWIDWIN:
 *   5 303 mieszkańców, 247,3 km², 51 miejscowości.
 *   OTACZA MIASTO ZE WSZYSTKICH STRON — miasto jest
 *   w niej enklawą. TO SĄ W PEŁNI ROZŁĄCZNE JEDNOSTKI.
 *   ⚠⚠ 14 470 TO MIASTO. 5 303 TO GMINA WIEJSKA.
 *   NIE WOLNO ICH SUMOWAĆ ANI MYLIĆ.
 *   ⚠⚠ NIE PISZĘ „CAŁA GMINA MA…", bo w tym mieście
 *   ta formuła znaczyłaby coś innego niż wszędzie indziej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ GEO: 53,7756 / 15,7740.
 * ⚠ en.wikipedia podaje 15 725 za rok 2018 — różnica
 *   wynika z DATY, nie z metody. NIE PISZĘ o zawyżaniu.
 *
 * ⚠ ODMIANA: RODZAJ MĘSKI. D. ŚWIDWINA,
 *   Ms. W ŚWIDWINIE, przym. ŚWIDWIŃSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — „świdwinianin"
 *   występuje w prasie lokalnej, ale NIE zostało
 *   potwierdzone w PWN. Piszę opisowo.
 * ⚠⚠ RYZYKO POMYŁKI: ŚWIDWIN ≠ ŚWIDNICA (dolnośląskie)
 *   ≠ ŚWIDNIK (lubelskie). Nazwy są fonetycznie bliskie
 *   i wyszukiwarki mieszają je regularnie.
 *   Rozgraniczam w FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1296 — PRAWA MIEJSKIE.
 * — 1319 — pierwsza wzmianka o zamku.
 * — 1455 — Nowa Marchia wykupiona za 40 000 GULDENÓW;
 *   25 WRZEŚNIA 1455 miasto odebrane osobiście.
 *   ⚠ PODAJĘ JAKO CHRONOLOGIĘ, NIE JAKO KĄT —
 *   „umowa kontra jej wykonanie / skończone kontra gotowe
 *   do podania" jest zajęte (Lubień Kujawski).
 * — BASZTA CYLINDRYCZNA ZAMKU: WYSOKOŚĆ 25 M.
 * — ⚠⚠⚠ RDZEŃ KĄTA: 1952 — POŻAR ZAMKU;
 *   1964 — DECYZJA O ODBUDOWIE (dwanaście lat później);
 *   1968 — ZAKOŃCZENIE ODBUDOWY I OTWARCIE DOMU KULTURY.
 *   SALA WIDOWISKOWA: PONAD 200 MIEJSC SIEDZĄCYCH.
 *   Budynek, który przez wieki był siedzibą pojedynczego
 *   gospodarza, zaczął przyjmować dwieście osób naraz —
 *   i to wymagało przebudowy, nie tylko odnowienia.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Świdwina i powiatu świdwińskiego. Strona
 *   urzędu wspomina ogólnie o produktach z Pomorza
 *   Zachodniego, ale NIE WYMIENIA żadnego przypisanego
 *   temu miastu. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: DWIEŚCIE MIEJSC ZAMIAST CZTERECH — co się naprawdę
 * zmienia, gdy gotuje się dla większej liczby osób
 * niż zwykle. Bo nie zmienia się „razy trzy".
 * Kąt od sali na ponad dwieście miejsc w odbudowanym
 * zamku: żeby przyjąć dwieście osób, trzeba było zmienić
 * budynek, a nie tylko go odnowić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zamek spłonął w 1952 r., decyzja o odbudowie
 *   zapadła w 1964, otwarto go w 1968 jako dom kultury
 *   z salą na ponad dwieście miejsc,
 * — ŻE POTROJENIE LICZBY OSÓB NIE JEST POTROJENIEM
 *   PRZEPISU — to jest rdzeń. Skaluje się liczba porcji,
 *   ale NIE skaluje się razem z nią czas, naczynie
 *   ani przyprawa,
 * — ⚠⚠ TRZY RZECZY PODANE JAKOŚCIOWO, BEZ ŻADNYCH LICZB
 *   I BEZ PRZELICZNIKÓW:
 *   (1) CZAS NIE ROŚNIE PROPORCJONALNIE — większa masa
 *       dłużej dochodzi do temperatury, ale potem nie
 *       potrzebuje trzy razy dłużej,
 *   (2) PRZYPRAWA NIE ROŚNIE PROPORCJONALNIE — przy
 *       potrojeniu wychodzi zwykle za mocno, więc dodaje
 *       się mniej, niż każe rachunek, i próbuje na końcu.
 *       ⚠ NIE PODAJĘ ŻADNEGO WSPÓŁCZYNNIKA,
 *   (3) NACZYNIE MA GÓRNĄ GRANICĘ I TO ONA ROZSTRZYGA —
 *       jeśli porcja się nie mieści, robi się dwa razy,
 *       a nie na siłę raz,
 * — ⚠⚠ ŻE NAJWIĘKSZY BŁĄD TO ROBIĆ WSZYSTKO NA RAZ
 *   I NA OSTATNI MOMENT. Część dań znosi zrobienie dzień
 *   wcześniej lepiej niż inne; to, co ma być podane
 *   gorące, zostawia się na koniec,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: przy dużej liczbie osób
 *   ambitne dania są ryzykiem, a nie atutem. Danie zrobione
 *   po raz pierwszy przy dwunastu osobach to kiepski pomysł
 *   niezależnie od sprzętu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE MA JEDNO NACZYNIE
 *   O USTALONEJ POJEMNOŚCI i przy większej liczbie osób
 *   pracuje NA TURY. Mówię o tym wprost, bo to jest
 *   realne ograniczenie. Zaletą jest to, że tura nie
 *   wymaga pilnowania, więc dwie tury nie kosztują
 *   dwa razy tyle uwagi — kosztują dwa razy tyle czasu
 *   urządzenia, a nie Twojego.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO SEZONU I DOMU PEŁNEGO GOŚCI — kąty zajęte
 *   (Lesko, Żywiec). Tam chodzi o PORĘ ROKU i o to,
 *   że dom przyjmuje gości falami; TUTAJ o ARYTMETYKĘ
 *   JEDNEGO POSIŁKU dla większej liczby osób.
 *   Rozgraniczam wprost.
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica). Zrobienie czegoś dzień wcześniej
 *   wymieniam jednym zdaniem i NIE ROZWIJAM.
 * — ⚠⚠ ZERO „ZA DUŻE NACZYNIE DO MAŁEJ PORCJI" — kąt
 *   zajęty (Żnin). Tutaj problem jest odwrotny.
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno,
 *   ta sama fala). Piszę wyłącznie o POJEMNOŚCI.
 * — ⚠ ZERO PRZERWY W ŚRODKU GOTOWANIA — kąt zajęty
 *   (Pasłęk).
 * — ⚠ ZERO PIERWSZEJ I DRUGIEJ PARTII — kąt zajęty
 *   (Barcin). Tury wymieniam przy sprzęcie, bez wchodzenia
 *   w to, czym się różnią.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PRZELICZNIKÓW, WSPÓŁCZYNNIKÓW I PROPORCJI —
 *   ⚠⚠ przy kącie o skalowaniu to najkrótsza droga
 *   do wpadki. NIE PADA ANI JEDNA LICZBA.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy gotowaniu z wyprzedzeniem dla wielu osób
 *   to pokusa oczywista. NIE PISZĘ, jak długo cokolwiek
 *   może stać ani w jakich warunkach.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU WOJSKOWEGO. Świdwin jest siedzibą
 *   dwóch czynnych jednostek Sił Powietrznych. To nie jest
 *   temat dla strony o gotowaniu i pojawia się wysoko
 *   w wynikach. NIE WSPOMINAM.
 * — ⚠⚠ ZERO BITWY Z 1469 R., ZERO ZAJĘCIA MIASTA
 *   PRZEZ SZWEDÓW W 1630 R., ZERO POKOJU WESTFALSKIEGO —
 *   wątki wojenne.
 * — ⚠⚠ ZERO ZAKONU JOANNITÓW JAKO WĄTKU I ZERO
 *   SEKULARYZACJI Z 1810 R. — wątki wyznaniowe.
 *   Zamek wymieniam jako budynek, nie jako siedzibę zakonu.
 * — ⚠⚠ ZERO PRZEJĘCIA MIASTA PRZEZ KRZYŻAKÓW
 *   14 KWIETNIA 1384 — wątek podboju.
 * — ⚠⚠ ZERO ROKU 1945 I ZERO PRZESIEDLEŃ.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI I JEGO PRZYCZYN.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠⚠ NIE SUMUJĘ I NIE MYLĘ liczb miasta (14 470)
 *   i gminy wiejskiej o tej samej nazwie (5 303).
 * — NIE UŻYWAM nazwy mieszkańca — niepotwierdzona w PWN.
 * — NIE PRZYPISUJĘ Świdwinowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE PODAJĘ ŻADNEGO PRZELICZNIKA PRZY SKALOWANIU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Świdwin leży nad Regą w powiecie świdwińskim, jest
 *   gminą miejską i liczy 14 470 mieszkańców
 *   (GUS, 31.12.2024) na 22,4 km², przy rozpiętości
 *   wysokości od 79 do 111 m n.p.m.,
 * — osobną jednostką jest gmina wiejska Świdwin —
 *   5 303 osoby, 247,3 km², 51 miejscowości — która
 *   otacza miasto ze wszystkich stron,
 * — prawa miejskie miasto otrzymało w 1296 r., pierwsza
 *   wzmianka o zamku pochodzi z 1319 r., a cylindryczna
 *   baszta zamku ma 25 m wysokości,
 * — w 1455 r. Nowa Marchia została wykupiona za
 *   40 000 guldenów, a 25 września tego roku miasto
 *   zostało odebrane osobiście,
 * — zamek spłonął w 1952 r., decyzja o odbudowie zapadła
 *   w 1964, a w 1968 otwarto w nim dom kultury z salą
 *   na ponad dwieście miejsc siedzących.
 */
export const SWIDWIN: CityContent = {
  slug: "swidwin",
  h1: "Thermomix Świdwin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Świdwin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Świdwinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świdwin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świdwinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świdwina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd nic nie kosztują — ani w mieście, ani w okolicznych miejscowościach.",

  highlights: highlightyStandardowe("Świdwin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gotowanie dla dwunastu osób to nie to samo co gotowanie dla czterech razy trzy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świdwinie – jak wygląda prezentacja?",
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
      id: "dwiescie-miejsc",
      heading: "Dwieście miejsc zamiast czterech",
      paragraphs: [
        "Świdwiński zamek spłonął w 1952 roku. Decyzja o odbudowie zapadła dwanaście lat później, w 1964, a otwarto go w 1968 — już nie jako czyjąś siedzibę, tylko jako dom kultury z salą na ponad dwieście miejsc siedzących.",
        "I to jest właśnie ten szczegół, który mnie w tej historii interesuje. Żeby budynek przyjął dwieście osób naraz, nie wystarczyło go odnowić. Trzeba go było przebudować, bo dwieście osób to nie jest „jedna osoba razy dwieście”.",
        "W kuchni działa dokładnie to samo prawo i mało kto o nim uprzedza.",
        "Gotowanie dla dwunastu osób nie jest gotowaniem dla czterech pomnożonym przez trzy. Mnoży się liczba porcji — i to wszystko. Razem z nią nie mnoży się ani czas, ani naczynie, ani przyprawa.",
        "Czas nie rośnie proporcjonalnie. Większa masa dłużej dochodzi do temperatury, to prawda, ale gdy już do niej dojdzie, nie potrzebuje trzy razy dłużej. Kto liczy czas przez mnożenie, ten przegotowuje.",
        "Przyprawa nie rośnie proporcjonalnie i to jest najczęstsza wpadka przy większym garnku. Potrojona ilość zwykle wychodzi za mocno. Dlatego dodaje się mniej, niż każe rachunek, i próbuje pod koniec — dosolić zawsze można, odsolić już nie.",
        "Naczynie ma górną granicę i to ona tak naprawdę rozstrzyga. Jeśli porcja się nie mieści, robi się dwa razy, a nie na siłę raz. Przepełnione naczynie gotuje inaczej niż wypełnione i to widać w wyniku, a nie tylko na blacie.",
        "Największy błąd przy większej liczbie osób nie jest jednak żaden z powyższych. Największym błędem jest robienie wszystkiego naraz i na ostatnią chwilę. Część dań spokojnie znosi zrobienie dzień wcześniej; to, co koniecznie ma być podane gorące, zostawia się na sam koniec. Rozłożenie tego na dwa dni zmienia więcej niż jakakolwiek sztuczka przy garnku.",
        "I rzecz, której nie powie żaden sprzedawca: przy dużej liczbie osób ambitne danie jest ryzykiem, nie atutem. Coś, co robicie po raz pierwszy w życiu przy dwunastu osobach przy stole, to kiepski pomysł — niezależnie od tego, jaki sprzęt stoi na blacie. Lepsze jest danie znane, zrobione spokojnie, w większej ilości.",
        "Uczciwie o urządzeniu, bo tu jest konkretne ograniczenie. Ono ma jedno naczynie o ustalonej pojemności, więc przy większej liczbie osób pracuje na tury. Nie zrobi obiadu dla dwunastu osób za jednym razem i nie będę twierdzić inaczej.",
        "Różnica polega na czym innym. Tura nie wymaga pilnowania — mieszanie i temperatura trzymają się same — więc dwie tury nie kosztują dwa razy tyle Twojej uwagi. Kosztują dwa razy tyle czasu urządzenia, w którym Ty robisz coś innego. Przy gotowaniu dla wielu osób to akurat jest ta waluta, której brakuje najbardziej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świdwinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie najczęściej i dla ilu przy większej okazji — to dwie różne kuchnie i wolę wiedzieć o obu z góry.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świdwinie"),
    sekcjaRaty("w Świdwinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla świdwińskiej rodziny",
      paragraphs: [
        "Świdwin leży nad Regą w powiecie świdwińskim i jest gminą miejską — czyli samodzielną jednostką, bez wsi w swoich granicach. Liczy czternaście i pół tysiąca mieszkańców na dwudziestu dwóch i czterech dziesiątych kilometra kwadratowego, przy rozpiętości wysokości od siedemdziesięciu dziewięciu do stu jedenastu metrów nad poziomem morza. Osobną jednostką jest gmina wiejska Świdwin: ponad pięć tysięcy osób, dwieście czterdzieści siedem kilometrów kwadratowych i pięćdziesiąt jeden miejscowości — otacza miasto ze wszystkich stron, tak że miasto leży w niej jak enklawa. Prawa miejskie Świdwin otrzymał w 1296 roku, pierwsza wzmianka o zamku pochodzi z 1319, a cylindryczna baszta zamku ma dwadzieścia pięć metrów wysokości. W 1455 roku Nowa Marchia została wykupiona za czterdzieści tysięcy guldenów, a dwudziestego piątego września tego samego roku miasto zostało odebrane osobiście — dwie różne daty dla dwóch etapów jednej transakcji. Zamek spłonął w 1952 roku, decyzja o odbudowie zapadła w 1964, a w 1968 otwarto w nim dom kultury z salą na ponad dwieście miejsc siedzących.",
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

  districtsHeading: "Do których części Świdwina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Regi — a także do miejscowości w otaczającej je gminie wiejskiej Świdwin, których jest pięćdziesiąt jeden. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Świdwin też przyjadę",
  nearbyParagraphs: [
    "Białogard, Kołobrzeg, Koszalin i Szczecinek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Białogard", "Kołobrzeg", "Koszalin", "Szczecinek"],

  about: blokOMnie("do Świdwina", "w Świdwinie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świdwina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwa doprecyzowania, bo obie pomyłki zdarzają się często: Świdwin to nie Świdnica w dolnośląskiem ani Świdnik w lubelskiem — a samo miasto jest gminą miejską, odrębną od gminy wiejskiej Świdwin, która je otacza. Do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Świdwinie"),
    {
      question: "Jak przeliczyć przepis na większą liczbę osób?",
      answer:
        "Mnoży się liczba porcji i tylko ona. Czas nie rośnie proporcjonalnie: większa masa dłużej dochodzi do temperatury, ale potem nie potrzebuje wielokrotnie dłużej. Przyprawa też nie — potrojona zwykle wychodzi za mocno, więc lepiej dać mniej, niż każe rachunek, i spróbować pod koniec. A jeśli porcja nie mieści się w naczyniu, robi się dwa razy zamiast na siłę raz.",
    },
    {
      question: "Czy Thermomix ugotuje obiad dla dwunastu osób za jednym razem?",
      answer:
        "Nie — ma jedno naczynie o ustalonej pojemności i przy takiej liczbie osób pracuje na tury. Różnica polega na czym innym: tura nie wymaga pilnowania, bo mieszanie i temperatura trzymają się same, więc dwie tury nie kosztują dwa razy tyle Twojej uwagi, tylko dwa razy tyle czasu urządzenia. Przy gotowaniu dla wielu osób to akurat ta waluta, której brakuje najbardziej.",
    },
  ],

  geo: { lat: 53.7756, lng: 15.774 },
};
