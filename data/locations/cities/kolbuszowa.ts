import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * KOLBUSZOWA — niewielkie miasto w środku Puszczy Sandomierskiej,
 * między Rzeszowem, Mielcem i Tarnobrzegiem. Siedziba powiatu
 * kolbuszowskiego i Muzeum Kultury Lasowiackiej — skansenu poświęconego
 * Lasowiakom, grupie etnograficznej tych terenów.
 *
 * KĄT: skansen jest tu ważny nie jako atrakcja, tylko jako punkt
 * odniesienia. To muzeum pokazuje, jak gotowano tu sto lat temu —
 * a strona sprzedażowa może z tego zrobić jedną uczciwą rzecz:
 * przyznać, że NOWOCZESNE URZĄDZENIE NIE JEST WROGIEM STAREGO PRZEPISU.
 * To jest realna obiekcja, którą słyszy się w takich okolicach częściej
 * niż gdziekolwiek: „u nas się gotuje po swojemu". I zasługuje na
 * odpowiedź, a nie na zbywanie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kolbuszowa leży w Puszczy Sandomierskiej, między Rzeszowem, Mielcem
 *   i Tarnobrzegiem,
 * — działa tu Muzeum Kultury Lasowiackiej — skansen poświęcony Lasowiakom,
 *   grupie etnograficznej zamieszkującej Puszczę Sandomierską,
 * — miasto jest siedzibą powiatu kolbuszowskiego (m.in. Cmolas, Majdan
 *   Królewski, Raniżów, Niwiska, Dzikowiec),
 * — okolica ma charakter rolniczo-leśny, z rozproszoną zabudową.
 *
 * CZEGO NIE MA: przepisów lasowiackich podanych jako autentyczne,
 * twierdzeń o tym, co „każdy tu gotuje", danych o muzeum.
 */
export const KOLBUSZOWA: CityContent = {
  slug: "kolbuszowa",
  h1: "Thermomix Kolbuszowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kolbuszowa — prezentacja i cena",
  seoDescription:
    "Thermomix w Kolbuszowej: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat kolbuszowski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kolbuszowa — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kolbuszowej i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Kolbuszowej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Cmolasu, Majdanu Królewskiego, Raniżowa i Niwisk.",

  highlights: highlightyStandardowe("Kolbuszowa i cały powiat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kolbuszowej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "po-swojemu",
      heading: "„U nas się gotuje po swojemu” — i to jest dobry argument",
      paragraphs: [
        "W Kolbuszowej działa skansen kultury lasowiackiej, który pokazuje, jak w tej okolicy żyto i gotowano sto lat temu. Nie przywołuję tego dla ozdoby, tylko dlatego, że w takich stronach słyszę częściej niż gdziekolwiek jedno zdanie: „u nas się gotuje po swojemu”.",
        "I to jest dobry argument, a nie obiekcja do zbijania. Przepis po babci, który wychodzi za każdym razem, jest wart więcej niż jakakolwiek funkcja z folderu. Nie przyjeżdżam tu nikogo przekonywać, że dotychczasowe gotowanie było złe, bo nie było.",
        "Rzecz, którą chcę pokazać, jest inna i znacznie skromniejsza: urządzenie nie zmienia przepisu, tylko wykonanie. Ciasto ma te same składniki, ale wyrabia się bez rąk. Zupa ma ten sam smak, ale nie trzeba przy niej stać. Powidła są takie same, tylko nie przywierają do dna, gdy ktoś odejdzie na dziesięć minut.",
        "Dlatego na prezentacji najchętniej gotuję właśnie to, co u Was się robi od lat. Jeśli po tym powiecie, że wolicie po swojemu — uznam to za dobrą odpowiedź, a nie za coś do przełamania. Nie każdemu to urządzenie jest do czegokolwiek potrzebne i lepiej, żebyśmy oboje wiedzieli to przed zakupem niż po.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kolbuszowej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie chcecie zobaczyć — przywiozę pod nie składniki, także jeśli to coś, czego nie ma w żadnej książce kucharskiej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kolbuszowej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kolbuszowskiej rodziny",
      paragraphs: [
        "W tej okolicy dużo osób dojeżdża do pracy do Rzeszowa, Mielca albo Tarnobrzega, a domy mają ogrody i piwnice. Gotuje się z zapasu i większe porcje, ale czasu na to jest wieczorem tyle samo co wszędzie.",
        "Thermomix zdejmuje z tego stanie przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których części Kolbuszowej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Kolbuszowa Dolna",
    "Kolbuszowa Górna",
    "Nowa Wieś",
    "Werynia",
    "Świerczów",
    "Zarębki",
    "Bukowiec",
    "Kupno",
  ],

  nearbyHeading: "Cały powiat kolbuszowski i okolice",
  nearbyParagraphs: [
    "Cmolas, Majdan Królewski, Raniżów, Niwiska i Dzikowiec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Rzeszowa, Mielca, Nowej Dęby i Sokołowa.",
  ],
  nearbyTowns: [
    "Mielec",
    "Nowa Dęba",
    "Sokołów Małopolski",
    "Rzeszów",
    "Głogów Małopolski",
    "Tarnobrzeg",
  ],

  about: blokOMnie("do Kolbuszowej", "w Kolbuszowej i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kolbuszowej bez dodatkowej opłaty?",
      answer:
        "Tak, do Kolbuszowej i do całego powiatu kolbuszowskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kolbuszowej"),
    {
      question: "Gotuję po swojemu od lat i nie chcę tego zmieniać — czy jest sens?",
      answer:
        "Sens jest tylko wtedy, gdy urządzenie ułatwi to, co i tak robisz — a nie gdy zmusi Cię do gotowania inaczej. Przepis zostaje ten sam; zmienia się wykonanie: ciasto wyrabia się bez rąk, zupy nie trzeba pilnować, powidła nie przywierają do dna. Na prezentacji ugotujemy Twoje danie, nie moje. A jeśli powiesz, że wolisz po swojemu, uznam to za dobrą odpowiedź.",
    },
    {
      question: "Czy przyjedziesz do Cmolasu albo Raniżowa?",
      answer:
        "Tak, jeżdżę po całym powiecie kolbuszowskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.2436, lng: 21.7778 },
};
