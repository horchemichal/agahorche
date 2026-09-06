import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * TARNOWSKIE GÓRY — miasto, które nie jest ani hutnicze, ani górnicze
 * w potocznym sensie, choć wyrosło ze srebra. Zabytkowa Kopalnia Srebra
 * i Sztolnia Czarnego Pstrąga są na liście UNESCO. Do tego rynek
 * z kamienicami, park w Reptach i lasy dookoła.
 *
 * KĄT: to jest miasto, do którego się PRZEPROWADZA. Ludzie wyjeżdżają
 * z konurbacji na północ — po dom, ogród i ciszę, zostając w zasięgu
 * dojazdu do Katowic czy Gliwic. Kuchennie daje to sytuację dokładnie
 * odwrotną niż w Bytomiu czy Będzinie: nie ciasna kuchnia po rodzicach,
 * tylko kuchnia NOWA, zaplanowana od zera — i pytanie, co w niej
 * naprawdę postawić, żeby nie stało bezużytecznie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Zabytkowa Kopalnia Srebra i Sztolnia Czarnego Pstrąga w Tarnowskich
 *   Górach zostały wpisane na Listę światowego dziedzictwa UNESCO w 2017 r.,
 * — miasto wyrosło na wydobyciu srebra i ołowiu, a nie węgla,
 * — Park w Reptach Śląskich i lasy na północ od miasta to duży teren
 *   rekreacyjny na granicy metropolii,
 * — Tarnowskie Góry są siedzibą powiatu tarnogórskiego i graniczą m.in.
 *   z Bytomiem, Piekarami Śląskimi, Zabrzem i Gliwicami,
 * — dzielnice takie jak Repty Śląskie, Strzybnica, Lasowice czy Rybna
 *   były wcześniej odrębnymi miejscowościami.
 *
 * CZEGO NIE MA: liczb dotyczących migracji do miasta, cen nieruchomości,
 * dat wydobycia srebra podanych z dokładnością, której nie mam.
 */
export const TARNOWSKIE_GORY: CityContent = {
  slug: "tarnowskie-gory",
  h1: "Thermomix Tarnowskie Góry – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Tarnowskie Góry — prezentacja i cena",
  seoDescription:
    "Thermomix w Tarnowskich Górach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice i powiat. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tarnowskie Góry — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tarnowskich Górach. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Tarnowskich Gór z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, Reptach, Strzybnicy, Lasowicach czy Rybnej. Prezentacja i dojazd są bezpłatne, także do okolicznych gmin powiatu.",

  highlights: highlightyStandardowe("Tarnowskie Góry i cały powiat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tarnowskich Górach – jak wygląda prezentacja?",
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
      id: "nowa-kuchnia",
      heading: "Nowa kuchnia i pytanie, co w niej naprawdę postawić",
      paragraphs: [
        "Tarnowskie Góry to miasto, do którego się przeprowadza. Ludzie wyjeżdżają tu z konurbacji po dom, ogród i ciszę, zostając w zasięgu dojazdu do Katowic czy Gliwic. Jest tu też zupełnie inny rodzaj miejsca niż w metropolii: rynek z kamienicami, park w Reptach, lasy i kopalnia srebra na liście UNESCO — miasto, które wyrosło ze srebra, a nie z węgla.",
        "W kuchni oznacza to sytuację odwrotną niż w starych blokach metropolii. Tu kuchnia bywa nowa, zaplanowana od zera i z miejscem na sprzęt. Problemem nie jest „gdzie to postawić”, tylko „co postawić, żeby faktycznie było używane” — bo w nowej kuchni bardzo łatwo zapełnić blat rzeczami, które po pół roku stoją nietknięte.",
        "Uczciwa odpowiedź jest taka: to zależy od tego, jak gotujesz, a nie od tego, ile masz miejsca. Dlatego na prezentacji nie pokazuję trzydziestu funkcji, tylko pytam, co robicie najczęściej, i to właśnie gotujemy. Jeśli okaże się, że urządzenie nie wnosi u Was wiele, powiem to wprost — wolę stracić sprzedaż niż sprzedać coś, co za rok będzie kurzem na blacie.",
      ],
    },
    {
      id: "powiat",
      heading: "Cały powiat tarnogórski, nie tylko miasto",
      paragraphs: [
        "Jeżdżę też do okolicznych gmin — Radzionkowa, Miasteczka Śląskiego, Świerklańca, Zbrosławic, Tworoga, Krupskiego Młyna i Kalet. To zwykle domy z ogrodem i kuchnie większe niż w mieście, ale rytm dnia bywa trudniejszy: dojazd do pracy zabiera więcej czasu, więc obiad przesuwa się na późno.",
        "W takich domach częściej niż w mieście robi się przetwory i większe porcje na kilka dni. Chętnie pokażę to na prezentacji na tym, co akurat rośnie u Was w ogrodzie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tarnowskich Górach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Strzybnica i Rybna to inny kierunek niż Repty, a od tego zależy tylko godzina spotkania — nigdy jego cena.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tarnowskich Górach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tarnogórskiej rodziny",
      paragraphs: [
        "Rodziny, które przeprowadziły się tu z metropolii, zwykle zyskały metry, a straciły czas — dojazd w jedną stronę potrafi zjeść godzinę dziennie. Obiad robi się wtedy późno albo z wyprzedzeniem.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Większa porcja nie oznacza większego pilnowania, więc gotowanie na dwa dni przestaje być wyczynem.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których dzielnic Tarnowskich Gór dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — także do tych położonych przy lesie, daleko od rynku.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Osada Jana",
    "Lasowice",
    "Repty Śląskie",
    "Strzybnica",
    "Rybna",
    "Bobrowniki Śląskie-Piekary Rudne",
    "Pniowiec",
    "Sowice",
    "Stare Tarnowice",
    "Opatowice",
  ],

  nearbyHeading: "Cały powiat tarnogórski i okolice",
  nearbyParagraphs: [
    "Radzionków, Miasteczko Śląskie, Świerklaniec, Zbrosławice, Tworóg, Kalety i Krupski Młyn są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Radzionków",
    "Miasteczko Śląskie",
    "Świerklaniec",
    "Zbrosławice",
    "Tworóg",
    "Kalety",
    "Bytom",
    "Piekary Śląskie",
    "Gliwice",
  ],

  about: blokOMnie("do Tarnowskich Gór", "w Tarnowskich Górach i całym powiecie", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tarnowskich Gór bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do gmin powiatu tarnogórskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tarnowskich Górach"),
    {
      question: "Mam nową, dobrze wyposażoną kuchnię — czy Thermomix coś do niej wniesie?",
      answer:
        "To zależy od tego, jak gotujesz, i powiem Ci to szczerze na miejscu. Jeśli masz już dobry robot planetarny i blender kielichowy, a piekarnik chodzi codziennie, największą zmianą będzie gotowanie z mieszaniem bez pilnowania i gotowanie na parze — a nie sam fakt, że urządzenie „wszystko potrafi”. Zobaczymy to na Waszym daniu, nie na demonstracji z folderu.",
    },
    {
      question: "Przyjedziesz też do Radzionkowa albo Świerklańca?",
      answer:
        "Tak, jeżdżę po całym powiecie tarnogórskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
  ],

  geo: { lat: 50.4453, lng: 18.8611 },
};
