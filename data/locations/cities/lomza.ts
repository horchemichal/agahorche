import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * ŁOMŻA — miasto nad Narwią, przy Łomżyńskim Parku Krajobrazowym Doliny
 * Narwi. Rzeka, która płynie tym samym korytem od zawsze.
 *
 * OBOWIĄZUJE ZASADA PODLASKA W NAJOSTRZEJSZEJ WERSJI: NIE PISZEMY
 * O TOŻSAMOŚCI, WYZNANIU ANI HISTORII MIESZKAŃCÓW. Hak jest wyłącznie
 * przyrodniczy — rzeka i dolina.
 *
 * KĄT: rodzinny przepis przeniesiony do urządzenia. Pytanie, które pada
 * na prawie każdym spotkaniu i którego nie ma nigdzie w serwisie:
 * „CZY ZROBIĘ W TYM TO, CO ROBIŁA MOJA MAMA?".
 *
 * SEKCJA MA ODPOWIEDZIEĆ RZECZOWO I W OBIE STRONY:
 * — co przenosi się łatwo: wszystko, co powstaje w jednym naczyniu
 *   z mieszaniem i temperaturą — zupy, sosy, farsze, ciasta na drożdżach,
 * — co przenosi się źle albo wcale: rzeczy, których istota polega na
 *   smażeniu, pieczeniu albo na długim, otwartym garnku,
 * — i rzecz najważniejsza, o której nikt nie mówi: RODZINNY PRZEPIS
 *   PRAWIE NIGDY NIE MA LICZB. Ma „na oko", „aż będzie gęste", „ile
 *   weźmie". Przeniesienie go polega na tym, żeby te rzeczy raz zmierzyć
 *   — i to jest robota do wykonania samemu, nie przez sprzęt.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH KONKRETNYCH USTAWIEŃ. Ani stopni, ani czasów, ani prędkości.
 *   Nie znam Waszego przepisu i nie będę zgadywać.
 * — ŻADNYCH KULINARNYCH OPOWIEŚCI O REGIONIE ani przypisywania komukolwiek
 *   „tutejszej kuchni". Przepis jest RODZINNY, nie regionalny.
 *
 * ROZGRANICZENIE. Turek mówi „kiedy wolno odejść od przepisu", Zgorzelec
 * o przeliczaniu obcych jednostek, Włocławek o nauce gotowania od zera.
 * Tutaj chodzi o JEDEN KONKRETNY PRZEPIS, który ktoś ma w głowie
 * albo w zeszycie, i o to, czy da się go tam wsadzić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Łomża leży nad Narwią, przy dolinie objętej ochroną krajobrazową.
 */
export const LOMZA: CityContent = {
  slug: "lomza",
  h1: "Thermomix Łomża – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łomża — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Łomży: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łomża — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łomży. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łomży z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Łomża i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na spotkaniu chętnie ugotujemy Wasz przepis, a nie mój.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łomży – jak wygląda prezentacja?",
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
      id: "przepis-rodzinny",
      heading: "Rzeka płynie tak samo od zawsze — a czy da się w tym zrobić przepis mamy?",
      paragraphs: [
        "Łomża leży nad Narwią, w dolinie, która wygląda tak samo od bardzo dawna. Wykorzystam to do pytania, które pada na prawie każdym spotkaniu, a którego nie porusza żaden materiał sprzedażowy: czy zrobię w tym to, co robiła moja mama.",
        "Odpowiedź jest częściowa i taka ją podam. Przenosi się dobrze wszystko, co w domowej kuchni powstaje w jednym naczyniu, z mieszaniem i z temperaturą: zupy, sosy, farsze, kremy, ciasta drożdżowe, pasty. To jest w praktyce większość tego, co ludzie mają zapisane w zeszytach.",
        "Nie przeniesie się to, czego istota polega na czymś innym. Kotlet ma być smażony i będzie smażony na patelni. Ciasto ma być pieczone i pójdzie do piekarnika. Danie, które babcia dusiła cztery godziny w odkrytym garnku, żeby odparowało, w zamkniętym naczyniu wyjdzie inaczej — i lepiej wiedzieć to zawczasu niż odkryć w niedzielę.",
        "Ale najważniejsza jest trzecia rzecz, o której nikt nie uprzedza. Rodzinny przepis prawie nigdy nie ma liczb. Ma „na oko”, „aż będzie gęste”, „ile mąki weźmie” i „do smaku”. Urządzenie tego nie rozumie — ono potrzebuje ilości. Przeniesienie takiego przepisu polega więc na tym, żeby raz, jeden jedyny raz, ugotować go po staremu i przy okazji wszystko zważyć. To jest praca do wykonania ręką i głową, nie przez sprzęt, i zajmuje jedno popołudnie.",
        "Powiem też, czego tu nie znajdziecie: konkretnych ustawień. Nie podam Wam stopni ani czasów do Waszego przepisu, bo go nie znam, a zgadywanie skończyłoby się zmarnowanymi składnikami. To ustala się na własnym daniu, metodą prób — i pierwsza próba bywa gorsza od oryginału. Druga zwykle już nie.",
        "Na spotkaniu chętnie ugotujemy właśnie Wasz przepis zamiast mojego, jeśli tylko powiecie o tym wcześniej i będziecie mieć składniki. To jest uczciwszy test niż cokolwiek, co przywiozę ze sobą — bo pokazuje, czy ten sprzęt poradzi sobie z Waszą kuchnią, a nie z moją.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łomży?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz sprawdzić konkretny rodzinny przepis, powiedz o tym przy umawianiu — przygotuję się i zrobimy go razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łomży"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łomżyńskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Łomży dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Konstytucji 3 Maja",
    "Maria",
    "Bohaterów Monte Cassino",
    "Łomżyca",
    "Skowronki",
    "Zawady",
    "Piaski",
    "Jantar",
  ],

  nearbyHeading: "Poza Łomżę też przyjadę",
  nearbyParagraphs: [
    "Zambrów, Kolno, Jedwabne i Nowogród są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zambrów", "Kolno", "Nowogród", "Śniadowo", "Białystok"],

  about: blokOMnie("do Łomży", "w Łomży i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łomży bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łomży"),
    {
      question: "Czy zrobię w tym rodzinne przepisy?",
      answer:
        "Większość tak — wszystko, co powstaje w jednym naczyniu z mieszaniem i temperaturą: zupy, sosy, farsze, ciasta drożdżowe. Nie przeniesie się to, czego istotą jest smażenie albo pieczenie, ani danie duszone godzinami w odkrytym garnku, żeby odparowało.",
    },
    {
      question: "Mój przepis nie ma podanych ilości, tylko „na oko”.",
      answer:
        "To najczęstsza przeszkoda i da się ją pokonać raz na zawsze: ugotować przepis jeszcze raz po staremu i przy okazji wszystko zważyć. Urządzenie potrzebuje ilości, więc tę jedną robotę trzeba wykonać ręką. Zajmuje jedno popołudnie i wystarcza na lata.",
    },
  ],

  geo: { lat: 53.1783, lng: 22.0592 },
};
