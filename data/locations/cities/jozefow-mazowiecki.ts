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
 * JÓZEFÓW w powiecie otwockim — miasto linii otwockiej, dawne letnisko
 * z drewnianą architekturą świdermajer, dziś w jednej czwartej pokryte
 * lasem i rosnące szybciej niż sąsiedzi.
 *
 * UWAGA NA NAZWĘ: Józefowów w Polsce jest kilka. Ten jest w powiecie
 * otwockim na Mazowszu — nie mylić z Józefowem w powiecie biłgorajskim
 * ani z Józefowem nad Wisłą w lubelskim. Tekst nazywa powiat wprost.
 *
 * KĄT: dom letniskowy, który stał się całoroczny. Miasto zbudowane pod
 * lipiec, w którym dziś mieszka się przez dwanaście miesięcy — i kuchnia,
 * która była dostawiana do domu, a nie planowana razem z nim.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — letnisko było funkcją pierwotną: przed wojną bywało tu do trzech
 *   tysięcy letników przy około półtora tysiąca stałych mieszkańców,
 * — konsekwencja, którą widać w kuchniach do dziś: w domach z tamtych
 *   czasów kuchnia była dostawiana, więc bywa wąska, przechodnia albo
 *   na doczepionej werandzie,
 * — co to realnie znaczy przy takim urządzeniu: liczy się blat
 *   i gniazdko, a nie metraż — i mówię, ile miejsca zajmuje,
 * — czego NIE obiecam: że zwolni blat. Zastępuje kilka sprzętów,
 *   ale sam też stoi i trzeba mu to miejsce oddać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD BUDOWLANYCH, INSTALACYJNYCH ANI ELEKTRYCZNYCH.
 *   W starym drewnianym domu pytanie o instalację jest realne i moja
 *   jedyna uczciwa odpowiedź to: zapytajcie elektryka.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO WĄTKU SANATORYJNEGO. Historia linii otwockiej to także
 *   sanatoria przeciwgruźlicze — temat zdrowotny, cudza choroba,
 *   nie mój i nie na stronę sprzedażową. Nie ma go w tekście.
 *
 * ROZGRANICZENIE. Wyszków mówi o kuchni tymczasowej w trakcie remontu,
 * inna strona o tym, ile rzeczy przychodzi razem z urządzeniem i gdzie
 * to trzymać. Tutaj chodzi o KUCHNIĘ, KTÓREJ NIKT NIE PLANOWAŁ —
 * bo dom stawiano na lato.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy 21 239 mieszkańców (GUS, 31.12.2024) na 23,9 km²;
 *   urząd podaje 19 634 zameldowanych na stałe — różnica metodologiczna,
 * — ludność wzrosła o 24,1% w latach 2002–2024, przy ujemnym przyroście
 *   naturalnym: miasto rośnie napływem,
 * — lesistość 24,1% powierzchni miasta (GUS),
 * — przeciętne mieszkanie ma 112,2 m² — bardzo dużo, co wskazuje
 *   na przewagę domów,
 * — funkcja letniskowa od schyłku XIX w., dzięki Drodze Żelaznej
 *   Nadwiślańskiej oddanej w 1877 r.; przed wojną bywało tu do 3 tys.
 *   letników przy ok. 1,5 tys. stałych mieszkańców,
 * — świdermajer to drewniana architektura z ażurowymi ornamentami
 *   werand i szpiczastymi zwieńczeniami dachów; ponad 30 obiektów
 *   w Józefowie jest w ewidencji wojewódzkiego konserwatora zabytków,
 * — Willa Benkówka przy ul. 3 Maja 100 pochodzi z 1896 r.; Willa Irenka
 *   przy ul. Zielonej 1 została wpisana do rejestru zabytków w 2019 r.,
 * — prawa miejskie 7 lipca 1962 r.; pierwsza wzmianka kartograficzna
 *   z 1825 r. (to wzmianka, nie lokacja),
 * — w mieście działa ponad 3,4 tys. podmiotów gospodarczych, prawie same
 *   mikrofirmy — NIE ZNALAZŁAM nazw dużych pracodawców i dlatego
 *   ich w tekście nie ma,
 * — NIE ZNALAZŁAM produktu z tego miasta na ministerialnej Liście
 *   Produktów Tradycyjnych.
 */
export const JOZEFOW_MAZOWIECKI: CityContent = {
  slug: "jozefow-mazowiecki",
  h1: "Thermomix Józefów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Józefów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Józefowie pod Otwockiem: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Józefów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Józefowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Józefowa w powiecie otwockim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Józefów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Liczy się blat i gniazdko, a nie metraż kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Józefowie – jak wygląda prezentacja?",
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
      id: "letnisko",
      heading: "Miasto zbudowane pod lipiec, w którym mieszka się cały rok",
      paragraphs: [
        "Józefów wyrósł jako letnisko. Kolej nadwiślańską oddano w tysiąc osiemset siedemdziesiątym siódmym roku i to ona zrobiła z tych piaszczystych, sosnowych terenów miejsce, do którego jeździło się na lato. Przed wojną bywało tu do trzech tysięcy letników przy około półtora tysiąca stałych mieszkańców — czyli latem miejscowość podwajała się i potrajała.",
        "Zostało po tym najbardziej rozpoznawalne, co Józefów ma: świdermajery. Drewniane domy z ażurowymi werandami i spiczastymi zwieńczeniami dachów, ponad trzydzieści obiektów w ewidencji konserwatora, najstarsze z końca dziewiętnastego wieku. Willa Benkówka przy Trzeciego Maja jest z tysiąc osiemset dziewięćdziesiątego szóstego.",
        "Ale mnie interesuje coś, o czym przewodniki nie piszą, a co widzę za każdym razem, kiedy wchodzę do takiego domu. Te domy stawiano pod lipiec. Kuchnia nie była w nich najważniejszym pomieszczeniem, bo latem jadało się inaczej i często na zewnątrz. W efekcie kuchnia bywa tu dostawiona: wąska, przechodnia, na doczepionej werandzie albo w miejscu, które kiedyś było czymś innym.",
        "Dziś w tych domach mieszka się przez dwanaście miesięcy — miasto urosło od dwa tysiące drugiego roku o prawie jedną czwartą, i to wyłącznie napływem. Ludzie kupują stare domy i zostają w nich na stałe. A kuchnia zostaje taka, jaka była.",
        "Praktyczny wniosek jest prostszy, niż się wydaje: przy tym urządzeniu nie liczy się metraż kuchni, tylko dwie rzeczy — kawałek wolnego blatu i gniazdko. Ono zajmuje mniej więcej tyle miejsca co czajnik z podstawką i tyle właśnie trzeba mu oddać. W wąskiej kuchni to bywa różnica między „zmieści się” a „nie ma mowy”, więc mówię o tym wprost i pokazuję na miejscu, zanim cokolwiek ustalimy.",
        "Nie obiecam natomiast rzeczy, którą w tej branży słyszy się często: że zwolni Wam blat. To prawda, że zastępuje kilka sprzętów — blender, malakser, mikser i część garnków — ale sam też stoi i sam też zajmuje. Jeśli ktoś Wam mówi, że po zakupie w kuchni będzie luźniej, sprawdźcie to na własnym blacie, a nie na zdjęciu.",
        "I jedna rzecz, o którą pytają mnie w starych drewnianych domach częściej niż gdzie indziej: czy instalacja to wytrzyma. Odpowiedź jest zawsze ta sama i zawsze taka sama będzie — nie wiem, nie oceniam tego i nie jestem od tego. Od instalacji jest elektryk i to jego trzeba zapytać przed zakupem, a nie mnie.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Józefowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie wąską kuchnię, powiedzcie to od razu — przyjadę i zmierzymy blat, zanim w ogóle zaczniemy rozmawiać o cenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Józefowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla józefowskiej rodziny",
      paragraphs: [
        "Prawie jedna czwarta powierzchni miasta to las, a przeciętne mieszkanie ma tu ponad sto dziesięć metrów — to miasto domów, do których się wprowadza, a nie z których się wyprowadza. Do Warszawy jedzie się koleją, więc w wielu domach ktoś codziennie dojeżdża i obiad powstaje po powrocie.",
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

  districtsHeading: "Do których części Józefowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto składa się z kilkunastu części o własnych nazwach — od Michalina i Świdrów Małych po Rycice i Emilianów. Przy umawianiu wystarczy podać część miasta albo ulicę.",
  ],
  districts: ["Michalin", "Emilianów", "Dębinka", "Nowa Wieś", "Świdry Małe", "Rycice"],

  nearbyHeading: "Poza Józefów też przyjadę",
  nearbyParagraphs: [
    "Otwock, Karczew, Wiązowna i warszawska Falenica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Otwock", "Karczew", "Wiązowna", "Warszawa", "Kołbiel", "Celestynów"],

  about: blokOMnie("do Józefowa", "w Józefowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Józefowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Chodzi o Józefów w powiecie otwockim, na linii otwockiej — nie o Józefów w Lubelskiem. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Józefowie"),
    {
      question: "Mam bardzo wąską kuchnię. Czy to się w ogóle zmieści?",
      answer:
        "Nie liczy się metraż, tylko kawałek wolnego blatu i gniazdko — urządzenie zajmuje mniej więcej tyle miejsca co czajnik z podstawką. Powiedzcie o tym przy umawianiu, to przyjadę i zmierzymy blat, zanim zaczniemy rozmawiać o cenie.",
    },
    {
      question: "Czy po zakupie zrobi się w kuchni luźniej?",
      answer:
        "Niekoniecznie i nie będę tego obiecywać. Urządzenie zastępuje blender, malakser, mikser i część garnków, ale samo też stoi i też zajmuje miejsce. Sprawdźcie to na własnym blacie, a nie na zdjęciu z folderu.",
    },
    {
      question: "Czy stara instalacja w drewnianym domu to wytrzyma?",
      answer:
        "Nie wiem i nie jestem od tego, żeby to oceniać. To pytanie do elektryka i warto je zadać przed zakupem, a nie po. Ja mogę powiedzieć tylko, czego urządzenie potrzebuje — i to znajdziecie w jego dokumentacji.",
    },
  ],

  geo: { lat: 52.1417, lng: 21.2333 },
};
