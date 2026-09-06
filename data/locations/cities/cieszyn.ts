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
 * CIESZYN — miasto podzielone granicą państwową. Po 1920 roku Olza stała się
 * granicą i od tej pory jedna połowa to Cieszyn, a druga Czeski Cieszyn.
 * Most przez rzekę przechodzi się pieszo w kilka minut.
 *
 * KĄT: Cieszyn nie leży na Górnym Śląsku. To Śląsk Cieszyński — region
 * o osobnej historii (Księstwo Cieszyńskie, potem Austria, nie Prusy),
 * osobnej tradycji i osobnej kuchni. Mówienie tu o „śląskiej roladzie
 * i kluskach" jest mniej więcej tak trafne, jak częstowanie kogoś
 * w Krakowie pyzami. To jedyna strona w tej fali, na której kątem jest
 * TO, CO SIĘ GOTUJE — a nie rytm dnia, mieszkanie czy dojazdy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Cieszyn i Czeski Cieszyn to jedno historyczne miasto podzielone w 1920
 *   roku granicą biegnącą Olzą,
 * — Śląsk Cieszyński był Księstwem Cieszyńskim, a następnie należał do
 *   monarchii habsburskiej — inaczej niż Górny Śląsk, który trafił do Prus,
 * — Wzgórze Zamkowe z Rotundą św. Mikołaja to jeden z najstarszych zabytków
 *   architektury romańskiej w Polsce,
 * — miasto jest siedzibą powiatu cieszyńskiego, do którego należą m.in.
 *   Ustroń, Wisła, Skoczów, Strumień i Zebrzydowice,
 * — Wisła i Ustroń to ośrodki turystyczne w Beskidzie Śląskim.
 *
 * CZEGO NIE MA: przepisów podanych jako „oryginalne", nazw dań, których
 * nie umiem potwierdzić jako miejscowe, ani twierdzeń o tym, co „każdy tu
 * gotuje" — o to pytam na miejscu.
 */
export const CIESZYN: CityContent = {
  slug: "cieszyn",
  h1: "Thermomix Cieszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Cieszyn — prezentacja i cena",
  seoDescription:
    "Thermomix w Cieszynie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat cieszyński. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Cieszyn — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Cieszynie i w całym powiecie. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Cieszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Podgórzu, Bobrku, Krasnej czy Mnisztwie. Prezentacja i dojazd są bezpłatne, także do Ustronia, Skoczowa i Wisły.",

  highlights: highlightyStandardowe("Cieszyn i cały powiat cieszyński"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Cieszynie – jak wygląda prezentacja?",
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
      id: "cieszynskie-nie-gornoslaskie",
      heading: "To jest Śląsk Cieszyński — i to znaczy inną kuchnię",
      paragraphs: [
        "Cieszyn leży w województwie śląskim, ale nie na Górnym Śląsku. To Śląsk Cieszyński: dawne Księstwo Cieszyńskie, przez stulecia po austriackiej stronie, podczas gdy Górny Śląsk trafił do Prus. Granice państw zmieniały się tu tyle razy, że w 1920 roku podzieliły samo miasto — jedna połowa została po polskiej stronie Olzy, druga jest dziś Czeskim Cieszynem.",
        "Dla kogoś, kto przyjeżdża tu z prezentacją, ma to bardzo praktyczne znaczenie. Gdybym przywiozła „zestaw śląski” z roladą, kluskami i modrą kapustą, byłoby to mniej więcej tak trafione, jak częstowanie kogoś w Krakowie pyzami. Kuchnia cieszyńska jest własna — z wpływami austriackimi, czeskimi i beskidzkimi — i różni się od tej z Katowic czy Bytomia bardziej, niż wynikałoby to z odległości.",
        "Dlatego na prezentacji w Cieszynie pytam wprost, co u Was się gotuje, i to właśnie robimy. Nie przywożę gotowej opowieści o regionie — przywożę urządzenie i chcę zobaczyć, czy sprawdzi się przy Waszych daniach, a nie przy moich.",
      ],
    },
    {
      id: "powiat-i-gory",
      heading: "Cały powiat, także Ustroń, Wisła i Skoczów",
      paragraphs: [
        "Jeżdżę po całym powiecie cieszyńskim — do Ustronia, Wisły, Skoczowa, Strumienia, Zebrzydowic, Goleszowa, Brennej i Istebnej. Dojazd jest wszędzie bezpłatny, także w góry.",
        "W Beskidzie Śląskim dochodzi jeszcze jedna rzecz: bardzo wiele domów przyjmuje gości. Przy agroturystyce albo pokojach na wynajem gotowanie przestaje być prywatną sprawą i staje się częścią pracy — a wtedy liczy się powtarzalność i to, żeby śniadanie dla ośmiu osób nie zjadało całego poranka.",
        "Jeśli tak u Was jest, powiedz o tym przy umawianiu. Prezentacja wygląda wtedy inaczej: mniej o rodzinnym obiedzie, więcej o tym, co da się przygotować wcześniej i powtarzać bez pilnowania.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Cieszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość i dzielnicę — Wisła to inny kierunek niż Zebrzydowice, a od tego zależy tylko godzina, którą mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Cieszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla cieszyńskiej rodziny",
      paragraphs: [
        "W Cieszynie i okolicy rodziny częściej niż w konurbacji mieszkają w domach, a obiad wciąż bywa jednym wspólnym posiłkiem, a nie serią talerzy. To dobra wiadomość — i jednocześnie oznacza, że ktoś musi ten obiad przygotować na konkretną godzinę.",
        "Thermomix zdejmuje z tego konieczność stania przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy robisz coś innego, a wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
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

  districtsHeading: "Do których dzielnic Cieszyna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Miasto jest niewielkie i zwarte, więc dojazd nie wpływa nawet na porę spotkania — wystarczy, że powiesz, gdzie mieszkasz.",
  ],
  districts: [
    "Śródmieście",
    "Podgórze",
    "Bobrek",
    "Krasna",
    "Mnisztwo",
    "Pastwiska",
    "Kalembice",
    "Marklowice Górne",
    "Boguszowice",
    "Gułdowy",
    "Sibica",
  ],

  nearbyHeading: "Cały powiat cieszyński",
  nearbyParagraphs: [
    "Ustroń, Wisła, Skoczów, Strumień, Goleszów, Brenna, Istebna i Zebrzydowice — jeżdżę wszędzie na tych samych zasadach, także w góry.",
  ],
  nearbyTowns: [
    "Ustroń",
    "Wisła",
    "Skoczów",
    "Strumień",
    "Goleszów",
    "Brenna",
    "Istebna",
    "Zebrzydowice",
    "Bielsko-Biała",
  ],

  about: blokOMnie("do Cieszyna", "w Cieszynie i całym powiecie cieszyńskim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Cieszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do Cieszyna i do całego powiatu cieszyńskiego, łącznie z Wisłą i Istebną. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Cieszynie"),
    {
      question: "Czy Thermomix poradzi sobie z tym, co gotuje się u nas w domu?",
      answer:
        "Na to nie odpowiem uczciwie przez internet, bo nie wiem jeszcze, co u Was się gotuje. Powiedz mi to przy umawianiu, a przywiozę składniki właśnie na to danie i zobaczymy razem, gdzie urządzenie pomaga, a gdzie nie zmienia nic. Wolę pokazać dwie rzeczy, które faktycznie robicie, niż dziesięć z folderu.",
    },
    {
      question: "Prowadzę pokoje gościnne — czy prezentacja może być pod tym kątem?",
      answer:
        "Jak najbardziej, powiedz o tym przy umawianiu. Wtedy rozmawiamy o śniadaniach dla kilku osób, o tym, co da się przygotować wieczorem, i o powtarzalności — a nie o rodzinnym obiedzie.",
    },
  ],

  geo: { lat: 49.7493, lng: 18.6329 },
};
