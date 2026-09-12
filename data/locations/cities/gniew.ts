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
 * GNIEW — miasto w powiecie tczewskim, na Kociewiu, 6 098
 * mieszkańców (31.12.2024, GUS); gmina 14 230. Brief mówił
 * 6 800 — zawyżone.
 *
 * PRAWA MIEJSKIE 1297 r., prawo chełmińskie, od Zakonu
 * Krzyżackiego. BRAK DATY DZIENNEJ — nie zmyślam jej.
 *
 * FAKT OSIOWY: w 1282 r., na mocy układu w Miliczu, książę
 * MŚCIWÓJ II przekazał Gniew Krzyżakom. To był PIERWSZY
 * PRZYCZÓŁEK ZAKONU NA LEWYM BRZEGU WISŁY — punkt wyjścia,
 * z którego wyrosło wszystko, co potem. Zamek ukończono
 * ok. 1330 r.
 *
 * MURY MIEJSKIE: obwód ok. 950 m, 16 baszt, 4 bramy.
 * OD 1667 r. JAN III SOBIESKI był starostą gniewskim.
 * Od 1992 r. w mieście odbywają się inscenizacje historyczne,
 * w sierpniu „Vivat Vasa!" z rekonstrukcją bitwy pod Gniewem
 * z 1626 r.
 *
 * OBALONE: zamek NIE jest ruiną i NIE należy do fundacji —
 * od 2010 r. właścicielem jest duża grupa mleczarska.
 * NAZWY FIRMY NIE PODAJĘ. Prawa miejskie dostało MIASTO,
 * a nie zamek (częsty błąd w sieci).
 * OBALONE: Gniew NIE ROŚNIE dzięki turystyce — ludność gminy
 * spadła od 1995 r. o 14,1%.
 *
 * KĄT: ROSÓŁ I WYWAR — podstawa, z której robi się wszystko
 * inne. Kąt bierze się z tego, czym Gniew był: przyczółkiem,
 * punktem wyjścia. W kuchni takim punktem wyjścia jest wywar.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rosół z tego urządzenia NIE JEST lepszy niż z garnka
 *   i nie będę tego twierdzić,
 * — że jedyna realna przewaga jest taka, że urządzenie TRZYMA
 *   temperaturę zamiast bulgotać — a rosół nie lubi mocnego
 *   wrzenia i to jest wiedza starsza ode mnie,
 * — że druga przewaga to cała robota WOKÓŁ wywaru: obieranie,
 *   siekanie, przecieranie, i to, że nie trzeba stać,
 * — że dobry wywar to nie kwestia sprzętu, tylko składników
 *   i czasu,
 * — że z jednego wywaru robi się potem pięć różnych rzeczy
 *   i to jest sens gotowania go większą ilością,
 * — i że ODMAWIAM porad o przechowywaniu wywaru.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I MROŻENIU WYWARU, ile dni
 *   może stać, czy wolno zamrozić powtórnie. To bezpieczeństwo
 *   żywności. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD O SUROWYM MIĘSIE I DROBIU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — rosół „na przeziębienie"
 *   jest tu największą pokusą i mówię NIE.
 * — ŻADNYCH NAZW FIRM, w tym właściciela zamku.
 * — ŻADNEJ DATY DZIENNEJ praw miejskich.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zupa" jako taka nie jest
 * niczyim kątem. „Kasza" i „ryż" mają własne strony. „Gotowanie
 * na zapas i mrożenie" (Stopnica) dotyczy planowania i
 * zamrażarki jako magazynu. Tutaj chodzi o JEDEN KONKRETNY
 * PÓŁPRODUKT — wywar — i o to, co z niego dalej wychodzi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nazwy właściciela zamku ani cen biletów.
 * — NIE PISZĘ, że zamek jest ruiną. Nie jest.
 * — NIE PODAJĘ daty dziennej praw miejskich 1297 r.
 * — NIE PISZĘ, że Gniew rośnie. Traci ludność.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych jako
 *   „gniewskiego" — wpisy kociewskie są regionalne i żaden nie
 *   jest przypisany wprost temu miastu.
 * — NIE PODAJĘ nazw sołectw jako listy sołectw — znam wykaz
 *   miejscowości, a to nie to samo.
 * — districts: nie potwierdziłam istnienia osiedli statutowych,
 *   więc districts to PUSTA TABLICA i w tekście o osiedlach
 *   nie piszę.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 6 098 mieszkańców miasta, 14 230 gminy (31.12.2024, GUS),
 * — prawa miejskie 1297 r. na prawie chełmińskim,
 * — 1282 r. — układ w Miliczu, Mściwój II oddaje Gniew
 *   Krzyżakom; pierwszy przyczółek Zakonu na lewym brzegu Wisły,
 * — zamek ukończony ok. 1330 r., od 2010 r. w rękach prywatnych,
 *   z hotelem i muzeum,
 * — mury miejskie ok. 950 m z 16 basztami,
 * — od 1667 r. Jan III Sobieski starostą gniewskim,
 * — od 1992 r. inscenizacje historyczne; w sierpniu
 *   rekonstrukcja bitwy pod Gniewem z 1626 r.,
 * — ludność gminy spadła o 14,1% od 1995 r.
 */
export const GNIEW: CityContent = {
  slug: "gniew",
  h1: "Thermomix Gniew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gniew (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Gniewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gniew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gniewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gniewu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Gniew i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Lepszego rosołu nie zrobi. Ale nie da mu wrzeć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gniewie – jak wygląda prezentacja?",
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
      id: "wywar",
      heading: "Miasto, które było punktem wyjścia — czyli o rosole i wywarze",
      paragraphs: [
        "W 1282 roku książę Mściwój II przekazał Gniew Krzyżakom. To był pierwszy przyczółek Zakonu na lewym brzegu Wisły — miejsce, z którego zaczęło się wszystko, co potem. Zamek ukończono około 1330 roku, mury miejskie mają blisko dziewięćset pięćdziesiąt metrów obwodu i szesnaście baszt, a w 1667 roku starostą gniewskim został Jan III Sobieski. Miasto, które było czyimś punktem wyjścia.",
        "W kuchni takim punktem wyjścia jest wywar. Więc o nim napiszę — i zacznę od zdania, którego nie usłyszycie na żadnej prezentacji.",
        "Rosół z tego urządzenia nie jest lepszy niż rosół z garnka. Kropka. Kto Wam powie inaczej, ten nigdy nie gotował rosołu u babci. Smak wywaru bierze się ze składników i z czasu, a nie ze sprzętu, i żaden silnik tego nie zmieni.",
        "Jest natomiast jedna rzecz, którą urządzenie robi naprawdę dobrze i która ma znaczenie akurat przy rosole: trzyma temperaturę zamiast bulgotać. Każdy, kto gotował rosół, wie, że nie może on mocno wrzeć — od wrzenia robi się mętny i traci smak. Na kuchence pilnuje się tego przez cały czas, przekręcając pokrętło w tę i z powrotem. Tutaj po prostu ustawia się temperaturę i ona się trzyma. To nie jest rewolucja, ale to jest dokładnie ta jedna rzecz, przy której na kuchence najczęściej się poślizgniemy.",
        "Druga rzecz jest większa i mniej efektowna: cała robota wokół wywaru. Obrana i pokrojona włoszczyzna, przetarta zupa krem, zmielona natka, rozdrobniony seler, uszka i lane kluski. To jest ta połowa pracy, o której nikt nie mówi, bo mówi się o samym rosole. A ona zajmuje więcej czasu niż gotowanie.",
        "I trzecia, dla mnie najważniejsza. Wywar to jedyny półprodukt w polskiej kuchni, z którego wychodzi potem pięć różnych rzeczy: rosół z makaronem w niedzielę, krupnik we wtorek, sos do mięsa, baza pod zupę krem, płyn do risotta. Dlatego gotuje się go większą ilością, a nie „na jeden raz”. Tu urządzenie pomaga w sposób bardzo prozaiczny — nie musisz przy nim stać, więc te trzy godziny nie są stracone.",
        "Czego natomiast nie zrobię. Nie doradzę Wam, ile dni wywar może stać w lodówce, czy wolno go zamrozić powtórnie ani jak schłodzić przed schowaniem. To jest bezpieczeństwo żywności, ryzyko jest realne i nie mam do tego kompetencji. I nie napiszę ani słowa o tym, że rosół na cokolwiek pomaga — mówię o smaku, nie o zdrowiu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gniewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcesz porównać wywar z garnka i z urządzenia — ugotuj swój wcześniej, a ja przywiozę składniki na drugi. Sami ocenicie różnicę, także wtedy, gdyby jej nie było.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gniewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gniewskiej rodziny",
      paragraphs: [
        "Gniew liczy nieco ponad sześć tysięcy mieszkańców, a cała gmina ponad czternaście. Prawa miejskie na prawie chełmińskim otrzymał w 1297 roku, ale ważniejszy jest rok 1282: wtedy książę Mściwój II przekazał Gniew Krzyżakom i miasto stało się pierwszym przyczółkiem Zakonu na lewym brzegu Wisły. Zamek, ukończony około 1330 roku, nie jest ruiną — od 2010 roku ma prywatnego właściciela, działa w nim hotel i muzeum, a od 1992 roku miasto żyje rekonstrukcjami historycznymi, w tym sierpniową inscenizacją bitwy pod Gniewem z 1626 roku. Trzeba jednak dodać rzecz mniej efektowną: mimo turystyki gmina od 1995 roku straciła ponad czternaście procent mieszkańców.",
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

  districtsHeading: "Do których części Gniewu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do starówki w obrębie murów, pod zamek i do zabudowy poza nimi — oraz do wsi gminy, w tym Opalenia, Piaseczna, Wielkich Walichnów, Tymawy, Gogolewa i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Gniew też przyjadę",
  nearbyParagraphs: [
    "Pelplin, Tczew, Starogard Gdański, Kwidzyn, Sztum i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pelplin", "Tczew", "Starogard Gdański", "Kwidzyn", "Sztum"],

  about: blokOMnie("do Gniewu", "w Gniewie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gniewu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy, w tym do Opalenia i Wielkich Walichnów. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gniewie"),
    {
      question: "Czy rosół z Thermomiksa jest lepszy niż z garnka?",
      answer:
        "Nie i nie będę tego twierdzić. Smak wywaru bierze się ze składników i z czasu, nie ze sprzętu. Jedyna realna przewaga jest taka, że urządzenie trzyma temperaturę zamiast bulgotać — a rosół od mocnego wrzenia robi się mętny.",
    },
    {
      question: "To po co gotować w nim wywar?",
      answer:
        "Bo nie musisz przy nim stać przez trzy godziny, i bo cała robota wokół — włoszczyzna, przetarcie na krem, natka, lane kluski — dzieje się w tym samym naczyniu. Z jednego wywaru wychodzi potem rosół, krupnik, sos i baza pod zupę krem.",
    },
    {
      question: "Ile wywar może stać w lodówce?",
      answer:
        "Tego nie powiem. To bezpieczeństwo żywności, a nie obsługa sprzętu — ryzyko jest realne i nie mam tu kompetencji. Nie napiszę też, że rosół na cokolwiek pomaga; mówię o smaku, nie o zdrowiu.",
    },
  ],

  geo: { lat: 53.8355, lng: 18.8225 },
};
