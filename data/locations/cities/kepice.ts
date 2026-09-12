import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * KĘPICE — miasto w powiecie słupskim, 3 254 mieszkańców
 * (31.12.2024, GUS); gmina ok. 7 900. Brief mówił 3 600 —
 * zawyżone.
 *
 * PRAWA MIEJSKIE — DATA SPORNA: archiwum starostwa słupskiego
 * podaje 1960 r., inne źródła 1967 r. W TEKŚCIE NIE PODAJĘ
 * ŻADNEJ DATY. Piszę „w drugiej połowie XX wieku".
 *
 * OBALONE: Kępice NIE SĄ starym pomorskim miasteczkiem.
 * MIEJSCOWOŚĆ POWSTAŁA W 1868 r. wraz z uruchomieniem fabryki
 * papieru i celulozy oraz budową linii kolejowej. To osada
 * przemysłowa z XIX wieku.
 *
 * GEOGRAFIA: miasto leży w dolinie rzeki WIEPRZY, ok. 27 km na
 * południe od Słupska. Gmina 293,43 km², z czego LASY 173,64 km²
 * (ok. 59%), użytki rolne 92,43 km². Jeziora: Obłęże, Korzybie,
 * Przyjezierze, Lipnik, Mzdówko.
 *
 * WARCINO: zespół pałacowo-parkowy z Aleją Lipową, historycznie
 * związany z Ottonem von Bismarckiem. TEMAT POLITYCZNIE
 * DRAŻLIWY — wspominam najwyżej neutralnie, jednym zdaniem,
 * albo wcale.
 *
 * TEMATY BEZWZGLĘDNIE WYŁĄCZONE: w okolicy Kępic Niemcy
 * utworzyli podobozy pracy przymusowej. TEGO TEMATU NIE
 * DOTYKAM W ŻADNEJ FORMIE.
 *
 * TEMATY WRAŻLIWE — NIE UŻYWAĆ JAKO TŁA: największa depopulacja
 * w okolicy (−16,8% w latach 2002–2024); bezrobocie 7,6%;
 * wynagrodzenia ok. 83% średniej krajowej; najstarsza struktura
 * wieku (dzieci 0–14 to tylko 11,9%, seniorzy 65+ to 23,6%,
 * mediana 44,5). O tej ostatniej piszę WYŁĄCZNIE neutralnie,
 * jako o fakcie demograficznym, i NIE robię z niej smutnej
 * scenografii.
 *
 * NIEPOTWIERDZONE — NIE UŻYWAĆ: hodowla pstrąga (zero źródeł),
 * los fabryki papieru po XX w., jakikolwiek dzisiejszy
 * pracodawca, lista sołectw na 2026, osiedla statutowe,
 * produkty z Listy Produktów Tradycyjnych.
 *
 * KĄT: DYNIA. Warzywo jesienne, wielkie, twarde i kłopotliwe,
 * którego nikt nie kupuje w całości, bo nie wie, co z nim
 * zrobić. Kąt czysty, sezonowy, nieobciążony, pasujący do gminy
 * rolniczo-leśnej nad Wieprzą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dynia jest za twarda, żeby wrzucić ją do urządzenia
 *   w kawałkach z łupiną — trzeba ją najpierw obrać i pokroić
 *   nożem, i tego nie da się obejść,
 * — że to jest praca fizyczna i urządzenie jej nie wykonuje,
 * — co robi za to bardzo dobrze: zupa krem bez blendera,
 *   przecier, farsz, masa do ciasta, mus dla dziecka, sos,
 * — że przecier z dyni to najprostszy sposób, żeby duża dynia
 *   nie zmarnowała się w tydzień,
 * — że pestek nie zrobi — prażenie jest w piekarniku,
 * — i ODMOWA: nic o zdrowiu, nic o dietach, nic o przetworach
 *   w słoikach.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — dynia, witaminy, „lekka
 *   dieta", olej z pestek. MÓWIĘ NIE.
 * — ŻADNYCH PORAD O PRZETWORACH, PASTERYZACJI I MROŻENIU.
 * — ŻADNYCH PORAD ŻYWIENIOWYCH DLA OSÓB STARSZYCH mimo
 *   struktury wieku miasta. To jest granica, której pilnuję.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ DATY PRAW MIEJSKICH.
 * — ŻADNEJ WZMIANKI o podobozach ani o wojnie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kompoty i musy" (Biała)
 * dotyczą owoców. „Zupa krem" nie jest niczyim kątem. „Jedzenie
 * dla najmłodszych" (Morawica) dotyczy niemowląt. Tutaj chodzi
 * o JEDNO KONKRETNE WARZYWO, sezonowe i kłopotliwe — i o to,
 * że urządzenie nie zdejmuje z człowieka tej części pracy,
 * która jest najcięższa.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty praw miejskich. Źródła są sprzeczne
 *   (1960 vs 1967).
 * — NIE PISZĘ, że Kępice to stare miasto. Powstały w 1868 r.
 * — NIE PISZĘ o hodowli pstrąga. Zero potwierdzenia.
 * — NIE PODAJĘ nazwy żadnego pracodawcy ani losu fabryki
 *   papieru.
 * — NIE PODAJĘ listy sołectw — archiwalna lista 15 jest
 *   nieaktualna, a gmina ma 43–45 miejscowości.
 * — NIE ROZWIJAM wątku Warcina i Bismarcka.
 * — districts: PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 3 254 mieszkańców miasta (31.12.2024, GUS), gmina ok. 7 900,
 * — miejscowość powstała w 1868 r. wraz z fabryką papieru
 *   i celulozy oraz linią kolejową; prawa miejskie w drugiej
 *   połowie XX w. (data sporna),
 * — miasto w dolinie Wieprzy, ok. 27 km na południe od Słupska,
 * — gmina 293,43 km², lasy 173,64 km² (ok. 59%), użytki rolne
 *   92,43 km²,
 * — jeziora Obłęże, Korzybie, Przyjezierze, Lipnik, Mzdówko,
 * — zespół pałacowo-parkowy w Warcinie z Aleją Lipową.
 */
export const KEPICE: CityContent = {
  slug: "kepice",
  h1: "Thermomix Kępice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kępice (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kępicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kępice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kępicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kępic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Kępice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dyni za was nie obierze. Reszta owszem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kępicach – jak wygląda prezentacja?",
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
      id: "dynia",
      heading: "Gmina, w której lasy zajmują więcej niż pola — czyli o dyni",
      paragraphs: [
        "Kępice są młodsze, niż wyglądają. Miejscowość powstała dopiero w 1868 roku, razem z fabryką papieru i celulozy oraz z linią kolejową — to nie jest stare pomorskie miasteczko, tylko dziewiętnastowieczna osada przemysłowa. Prawa miejskie dostała w drugiej połowie dwudziestego wieku; daty nie podaję, bo źródła podają dwie różne i nie będę zgadywać. Miasto leży w dolinie Wieprzy, jakieś dwadzieścia siedem kilometrów na południe od Słupska, a w gminie lasy zajmują więcej powierzchni niż pola: sto siedemdziesiąt kilometrów kwadratowych wobec dziewięćdziesięciu.",
        "Napiszę o dyni. To warzywo, które co roku kupujemy oczami, a potem dwa tygodnie stoi w kącie kuchni, bo nikt nie ma serca się za nie zabrać.",
        "I zacznę od tego, czego urządzenie nie zrobi, bo to najważniejsza część tej strony. Dyni Wam nie obierze i nie pokroi. Jest za twarda i za duża — trzeba wziąć duży nóż, przeciąć ją, wybrać środek łyżką, pokroić na kawałki i obrać. To jest ta część, która wymaga siły, i to jest dokładnie ta część, po której ludzie odpuszczają. Sprzęt jej z Was nie zdejmie i żaden sprzęt domowy nie zdejmie.",
        "Za to wszystko, co jest po tym momencie, robi lepiej niż cokolwiek innego w kuchni.",
        "Zupa krem — bez przelewania do blendera, bez chlapania, bez trzeciego naczynia. Wrzucacie obrane kawałki, gotuje się i miksuje w tym samym miejscu.",
        "Przecier — i to jest moim zdaniem najsensowniejsza rzecz, jaką można zrobić z dużą dynią. Zamiast zastanawiać się przez tydzień, co z niej ugotować, robicie od razu przecier z całości. Z niego wychodzi potem zupa, masa do ciasta, sos, farsz, nadzienie do naleśników i mus dla małego dziecka. Jedno popołudnie zamiast siedmiu wieczorów wyrzutów sumienia.",
        "Do tego dochodzi cała drobnica: starta dynia do placków, posiekana cebula i imbir do zupy, mielone przyprawy.",
        "Czego jeszcze nie zrobi: pestek. Prażone pestki robi się w piekarniku i tak zostanie.",
        "I dwie granice. Nie doradzę Wam nic o przetworach w słoikach ani o pasteryzacji — to bezpieczeństwo żywności i osobna wiedza. I nie napiszę ani słowa o tym, że dynia jest zdrowa, lekka albo dobra na cokolwiek. Wiem, że przy tym warzywie mówi się tak najczęściej. Ja sprzedaję urządzenie kuchenne i o zdrowiu się nie wypowiadam — od tego są lekarz i dietetyk.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kępicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie dynię, która stoi w kuchni od dwóch tygodni — powiedzcie przy umawianiu. Zrobimy z niej zupę i przecier na miejscu, a resztę zabierzecie do lodówki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kępicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kępickiej rodziny",
      paragraphs: [
        "Kępice liczą nieco ponad trzy tysiące mieszkańców, a cała gmina blisko osiem. Miejscowość powstała w 1868 roku wraz z fabryką papieru i celulozy oraz koleją, a prawa miejskie otrzymała w drugiej połowie dwudziestego wieku. Leży w dolinie Wieprzy, około dwudziestu siedmiu kilometrów na południe od Słupska. Gmina ma prawie dwieście dziewięćdziesiąt trzy kilometry kwadratowe, z czego niemal sześćdziesiąt procent to lasy, a w jej granicach leżą jeziora Obłęże, Korzybie, Przyjezierze, Lipnik i Mzdówko. W Warcinie zachował się zespół pałacowo-parkowy ze słynną Aleją Lipową.",
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

  districtsHeading: "Do których części gminy Kępice dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Barcina, Biesowic, Korzybia, Obłęża, Przytocka, Warcina, Żelic i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kępice też przyjadę",
  nearbyParagraphs: [
    "Słupsk, Miastko, Sławno, Ustka, Polanów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Słupsk", "Miastko", "Sławno", "Ustka", "Bytów"],

  about: blokOMnie("do Kępic", "w Kępicach i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kępic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy, w tym do Korzybia, Biesowic i Warcina. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Kępice w powiecie słupskim, nie o wieś Kępice na Mazowszu ani o Kępno w wielkopolskim.",
    },
    ...faqWspolne("w Kępicach"),
    {
      question: "Czy urządzenie poradzi sobie z dynią?",
      answer:
        "Z całą dynią nie. Nie obierze jej i nie pokroi — jest za twarda i za duża, więc trzeba wziąć nóż, przeciąć, wybrać środek i obrać. Sprzęt tej pracy z Was nie zdejmie i żaden domowy sprzęt nie zdejmie.",
    },
    {
      question: "To co z nią zrobi?",
      answer:
        "Wszystko po tym etapie, i robi to lepiej niż cokolwiek w kuchni: zupa krem bez przelewania do blendera, przecier z całej dyni na zapas, masa do ciasta, sos, farsz, nadzienie, mus dla dziecka. Przecier z całości to najsensowniejsze wyjście — jedno popołudnie zamiast tygodnia wyrzutów sumienia.",
    },
    {
      question: "A pestki?",
      answer:
        "Prażone pestki robi się w piekarniku i tak zostanie. Nie doradzę też nic o przetworach w słoikach ani o pasteryzacji, i nie napiszę, że dynia jest na cokolwiek dobra — od zdrowia są lekarz i dietetyk.",
    },
  ],

  geo: { lat: 54.2405, lng: 16.8898 },
};
