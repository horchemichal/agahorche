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
 * ŚWIĄTNIKI GÓRNE — miasteczko rzemieślnicze, w którym dwie wsie są
 * ludniejsze od samego miasta. Oś strony: tradycja ślusarska i kłódkarska
 * (rzeczy robione ręcznie, na lata) plus konkretny, praktyczny fakt — ta
 * gmina NIE leży przy zakopiance, więc remont w Libertowie jej nie dotyczy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — struktura: miasto Świątniki Górne (prawa miejskie od 1997 r.) plus
 *   cztery wsie: Ochojno, Olszowice, Rzeszotary, Wrząsowice
 *   (e-mapa.net, polskawliczbach.pl),
 * — gmina 11 174 mieszkańców (2024); miasto 2 385 (31.12.2024);
 *   Rzeszotary 3 209 i Wrząsowice 2 627 (NSP 2021) — czyli DWIE WSIE SĄ
 *   LUDNIEJSZE OD MIASTA; Ochojno 1 830, Olszowice 861,
 * — wzrost liczby ludności o 32,4% od 2002 r.,
 * — przeciętna powierzchnia mieszkania 109,5 m², średnio 4,84 pokoju;
 *   mieszkania oddane w 2024 r. średnio 155,4 m², z czego 66% na cele
 *   indywidualne (polskawliczbach.pl),
 * — gmina leży ok. 15 km na południe od Krakowa, MIĘDZY krakowskimi
 *   Swoszowicami a węzłem zakopianki w Mogilanach; z węzłem łączy ją
 *   droga powiatowa (ok. 5 km), używana też jako objazd przy korkach na
 *   DK7 (gazetakrakowska.pl),
 * — autobusy aglomeracyjne 215, 225, 285; węzeł przesiadkowy Borek
 *   Fałęcki (busy-krk.pl),
 * — świątnicy wawelscy: mieszkańcy pełnili służbę przy katedrze na Wawelu,
 *   przywileje od królowej Jadwigi, od 1521 r. honorowe prawo dzwonienia
 *   Dzwonem Zygmunta,
 * — Świątniki przez wieki wytwarzały kłódki, zamki, kraty i bramy;
 *   w XVI–XVII w. ośrodek płatnerski,
 * — szkoła ślusarska otwarta pod koniec lat 80. XIX w. (PTTK: 20.09.1888;
 *   inne źródło podaje 1887 — stąd ostrożne sformułowanie),
 * — Muzeum Ślusarstwa im. Marcina Mikuły, wyrosłe z izby regionalnej
 *   założonej w kwietniu 1970 r.,
 * — kościół św. Stanisława Biskupa, budowany 1846–1856, konsekrowany 1858.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zdania, że Świątniki leżą przy zakopiance — NIE LEŻĄ. To najczęstszy
 *   błąd w tekstach o tej gminie,
 * — numeru drogi wojewódzkiej — sprawdzone, DW 964 tędy nie przechodzi,
 *   a innej nie potwierdzono; piszemy „droga powiatowa”,
 * — dzisiejszych producentów kłódek i zakładów ślusarskich — NIE
 *   POTWIERDZONE, więc rzemiosło opisujemy w czasie przeszłym,
 * — roku przekształcenia izby w muzeum (źródła podają 2004 i 2008),
 * — datowania osadnictwa na VIII–IX w. — bez podstawy źródłowej,
 * — produktów z ministerialnej Listy Produktów Tradycyjnych — NIE
 *   POTWIERDZONE,
 * — Rzeszotar Górnych i Zalesia jako osobnych sołectw — to części wsi.
 */
export const SWIATNIKI_GORNE: CityContent = {
  slug: "swiatniki-gorne",
  h1: "Thermomix Świątniki Górne – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Świątniki Górne — prezentacja",
  seoDescription:
    "Thermomix w gminie Świątniki Górne: bezpłatna prezentacja TM7 u Ciebie w kuchni — Rzeszotary, Wrząsowice, Ochojno, Olszowice. Tel. 517 185 691.",
  ogTitle: "Thermomix Świątniki Górne — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Świątniki Górne. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do Świątnik Górnych i wszystkich wsi gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Przywożę urządzenie i składniki. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina Świątniki Górne, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świątnikach Górnych – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, składnikami i naczyniami, gdyby były potrzebne. Ty przygotowujesz wolny kawałek blatu i gniazdko. Tak samo w Świątnikach, jak w Rzeszotarach czy Olszowicach.",
        "Potem gotujemy pełne dania. Zwykle coś obiadowego, coś słodkiego i — jeśli chcesz — coś z tego, co masz akurat pod ręką. To ostatnie mówi najwięcej, bo pokazuje urządzenie na Waszym jedzeniu.",
        "Liczby zostawiam na koniec: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. „Przemyślę” jest odpowiedzią, którą słyszę często i która nic nie kosztuje.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Miasteczko, które robiło rzeczy ręcznie — i co to ma do gotowania",
      paragraphs: [
        "Świątniki Górne wzięły nazwę od świątników wawelskich, czyli mieszkańców pełniących służbę przy katedrze na Wawelu; przywileje nadała im królowa Jadwiga, a od 1521 roku mieli honorowe prawo dzwonienia Dzwonem Zygmunta. Przez następne wieki miasteczko żyło z metalu: kłódek, zamków, krat i bram, a w XVI i XVII wieku było ośrodkiem płatnerskim. Pod koniec lat osiemdziesiątych XIX wieku powstała tu szkoła ślusarska, a dziś tę historię pokazuje Muzeum Ślusarstwa, które wyrosło z izby regionalnej założonej w 1970 roku.",
        "Piszę o tym nie dla ozdoby, tylko dlatego, że w takim miejscu słyszę na prezentacjach inne pytanie niż gdzie indziej. Nie „czy to szybko działa”, tylko „czy to nie jest kolejny sprzęt, który zrobi za mnie coś, co powinnam umieć sama”.",
        "Odpowiadam uczciwie i zawsze tak samo: Thermomix nie robi z nikogo kucharza i nie zastępuje umiejętności. Zastępuje pilnowanie. Nadal Ty decydujesz, co i jak przyprawić, nadal Ty próbujesz. Znika natomiast to, co i tak nie jest rzemiosłem: siekanie, tarcie, ucieranie i mieszanie sosu, żeby się nie przypalił.",
        "Są zresztą rzeczy, w których patelnia wygrywa i nie ma sensu tego ukrywać — naleśniki czy porządnie przysmażone mięso nadal robi się szybciej po staremu. Powiem o tym na spotkaniu tak samo wprost, jak piszę tutaj.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Świątniki Górne?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — jedna rozmowa zwykle wystarczy, żeby ustalić dzień i godzinę. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której miejscowości mieszkasz — Rzeszotary i Wrząsowice są duże i rozciągnięte, więc sama nazwa gminy niewiele mi mówi przy układaniu trasy. Przyda się też liczba osób na spotkaniu, żebym dobrała przepisy i wzięła odpowiednio więcej składników.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świątnikach Górnych"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Świątniki Górne",
      paragraphs: [
        "To gmina domów budowanych dla siebie: dwie trzecie mieszkań oddawanych tu w ostatnich latach powstaje na własne potrzeby, a nie na sprzedaż. Przeciętne mieszkanie ma prawie sto dziesięć metrów i blisko pięć pokoi. W takich kuchniach miejsce na blacie prawie nigdy nie jest tematem rozmowy.",
        "Tematem jest obiad dla kilku osób w domu, w którym każdy wraca o innej porze — bo praca zwykle jest w Krakowie, a droga zajmuje swoje. Danie ugotowane wcześniej czeka i odgrzewa się w tym samym naczyniu, w którym powstało, bez brudzenia kolejnych garnków.",
        "Przy małych dzieciach najbardziej praktyczne jest gotowanie na dwóch poziomach: obiad dla dorosłych w naczyniu, porcja dla dziecka na parze w Varomie. Ugotowanie i zmiksowanie odbywa się w jednym naczyniu, bez przelewania gorących rzeczy między miskami.",
        "W domach z ogrodem wraca latem temat przetworów. Konfitury i przeciery gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć — bez godziny stania nad garnkiem i bez pilnowania.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Świątniki Górne dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich czterech wsi: Rzeszotar, Wrząsowic, Ochojna i Olszowic. Bez dopłaty za odległość i bez różnicy, czy to sam rynek w Świątnikach, czy koniec Rzeszotar.",
    "Warto wiedzieć o tej gminie coś, co zaskakuje nawet sąsiadów: Rzeszotary i Wrząsowice są ludniejsze niż samo miasto Świątniki Górne. Miasto ma około dwóch i pół tysiąca mieszkańców, a same Rzeszotary ponad trzy tysiące. Dlatego przy umawianiu proszę o nazwę miejscowości — „gmina Świątniki” to przy układaniu trasy za mało.",
    "Druga rzecz jest czysto praktyczna i dotyczy dojazdu. Świątniki Górne nie leżą przy zakopiance, tylko kilka kilometrów na wschód od niej — z węzłem w Mogilanach łączy je droga powiatowa, używana zresztą jako objazd, kiedy na krajowej siódemce coś się dzieje. W praktyce znaczy to, że trwający remont zakopianki w Libertowie w ogóle nie dotyczy dojazdu do Ciebie.",
  ],
  districts: [
    "Świątniki Górne",
    "Rzeszotary",
    "Wrząsowice",
    "Ochojno",
    "Olszowice",
  ],

  nearbyHeading: "Południe pod Krakowem też obsługuję",
  nearbyParagraphs: [
    "Świątniki sąsiadują z Mogilanami i z krakowskimi Swoszowicami, a stamtąd trasy rozchodzą się dalej — do Wieliczki, Skawiny i Myślenic. Do żadnej z tych miejscowości nie doliczam opłaty za dojazd.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin dogodny dla wszystkich.",
  ],
  nearbyTowns: [
    "Kraków",
    "Mogilany",
    "Wieliczka",
    "Skawina",
    "Myślenice",
    "Dobczyce",
    "Gdów",
  ],

  about: blokOMnie("do Świątnik Górnych", "w gminach na południe od Krakowa"),

  faq: [
    {
      question: "Czy dojeżdżasz do Rzeszotar, Wrząsowic, Ochojna i Olszowic?",
      answer:
        "Tak, do wszystkich miejscowości gminy. Rzeszotary i Wrząsowice są zresztą ludniejsze od samego miasta, więc jeżdżę tam często. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w Świątnikach Górnych"),
    {
      question: "Czy remont zakopianki utrudnia dojazd do Świątnik Górnych?",
      answer:
        "Nie. Świątniki nie leżą przy zakopiance, tylko kilka kilometrów na wschód od niej — dojeżdżam tu drogą powiatową od strony Swoszowic. Remont w Libertowie na to nie wpływa.",
    },
    {
      question: "Lubię gotować od podstaw. Czy Thermomix mi tego nie odbierze?",
      answer:
        "Nie i nie namawiam nikogo, żeby przestał gotować po swojemu. Urządzenie zabiera siekanie, tarcie, ucieranie i mieszanie, żeby się nie przypaliło — czyli te czynności, które zjadają czas, a nie decydują o smaku. Doprawianie, próbowanie i decyzje zostają po Twojej stronie.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki albo rodzinę?",
      answer:
        "Jak najbardziej i w mniejszych miejscowościach często tak to wygląda. Powiedz tylko przy umawianiu, ile osób będzie, żebym wzięła więcej składników i dobrała dania pod większą grupę.",
    },
  ],

  geo: { lat: 49.9256, lng: 19.9528 },
};
