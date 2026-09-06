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
 * RACIBÓRZ — najdalej wysunięte na zachód miasto tej fali, nad Odrą,
 * przy granicy z Czechami. Dawna stolica Księstwa Raciborskiego, otoczona
 * żyzną i rolniczą Kotliną Raciborską — a nie kopalniami.
 *
 * KĄT: to jest miasto, w którym obiad WCIĄŻ JEST O JEDNEJ PORZE. Wszystkie
 * poprzednie strony tej fali zakładały rozbity rytm dnia: różne godziny
 * powrotu, praca zmianowa, obiad jako seria talerzy. W Raciborzu ta
 * przesłanka po prostu nie działa — większość ludzi pracuje na miejscu,
 * a nie dojeżdża do Katowic. Uczciwa strona musi to przyznać, bo inaczej
 * sprzedaje rozwiązanie problemu, którego tu nie ma. Argument jest wtedy
 * inny i słabszy, ale prawdziwy: nie „zdąży się", tylko „nie trzeba stać".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Racibórz był stolicą Księstwa Raciborskiego i należy do najstarszych
 *   miast Górnego Śląska,
 * — leży nad Odrą, w Kotlinie Raciborskiej, na terenach rolniczych,
 * — miasto ucierpiało w powodzi w 1997 roku; powyżej niego zbudowano
 *   później suchy zbiornik przeciwpowodziowy Racibórz Dolny,
 * — Racibórz leży blisko granicy z Czechami i ma silne tradycje związane
 *   z morawskim pograniczem,
 * — dzielnice takie jak Markowice, Sudół, Brzezie czy Miedonia były
 *   wcześniej samodzielnymi miejscowościami.
 *
 * CZEGO NIE MA: danych o powodzi podanych jako liczby, statystyk
 * zatrudnienia i dojazdów, twierdzeń o dochodach.
 */
export const RACIBORZ: CityContent = {
  slug: "raciborz",
  h1: "Thermomix Racibórz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Racibórz — prezentacja i cena",
  seoDescription:
    "Thermomix w Raciborzu: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat raciborski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Racibórz — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Raciborzu i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Raciborza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Ostrogu, Płoni, w Brzeziu czy Markowicach. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Racibórz i cały powiat raciborski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Raciborzu – jak wygląda prezentacja?",
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
      id: "obiad-o-jednej-porze",
      heading: "Tu obiad wciąż bywa o jednej porze — i to zmienia rozmowę",
      paragraphs: [
        "Większości tekstów o Thermomiksie przyświeca ta sama przesłanka: nikt nie ma czasu, każdy wraca o innej godzinie, obiad jest serią talerzy odgrzewanych przez cztery godziny. W Katowicach czy Sosnowcu to prawda. W Raciborzu — często nie.",
        "To miasto leży na uboczu wielkiej konurbacji, w rolniczej kotlinie nad Odrą, i większość ludzi pracuje tu na miejscu, a nie dojeżdża godzinę w jedną stronę. Obiad bywa więc jednym wspólnym posiłkiem o mniej więcej stałej porze — dokładnie tak, jak było zawsze.",
        "Uczciwie: to znaczy, że najmocniejszy argument za tym urządzeniem u Was nie działa. Nie sprzedam Wam „zdążysz z obiadem”, skoro zdążacie. Zostaje argument słabszy, ale prawdziwy: nie chodzi o to, żeby zdążyć, tylko o to, żeby nie trzeba było przy tym stać. Zupa gotuje się sama z ustawioną temperaturą i mieszaniem, ciasto wyrabia się bez rąk, a po wszystkim jest jedno naczynie zamiast trzech. To godzina odzyskana w kuchni, nie godzina wyrwana z doby.",
        "Jeśli to za mało, żeby wydać takie pieniądze — powiem Wam to sama, na miejscu, po zobaczeniu, jak gotujecie. Wolę stracić sprzedaż niż namówić kogoś na urządzenie argumentem, który go nie dotyczy.",
      ],
    },
    {
      id: "powiat",
      heading: "Cały powiat raciborski",
      paragraphs: [
        "Jeżdżę też do Kuźni Raciborskiej, Krzanowic, Krzyżanowic, Rudnika, Nędzy, Pietrowic Wielkich i Kornowaca. To okolica rolnicza, więc częściej niż gdzie indziej gotuje się tu z tego, co własne albo kupione od sąsiada — i częściej robi się przetwory.",
        "Przy umawianiu wystarczy podać miejscowość. Dojazd jest wszędzie bezpłatny i wpływa tylko na godzinę, którą mogę zaproponować.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Raciborzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy ugotowali coś konkretnego — danie, które robisz co niedzielę, albo ciasto, które nie wychodzi — powiedz o tym wcześniej, a przywiozę pod to składniki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Raciborzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla raciborskiej rodziny",
      paragraphs: [
        "W raciborskich domach obiad częściej jest wydarzeniem niż serią talerzy — i zwykle przygotowuje go ta sama osoba, dzień po dniu, przez lata. To nie jest problem czasu, tylko powtarzalności.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których dzielnic Raciborza dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dzielnic po drugiej stronie Odry.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Ostróg",
    "Płonia",
    "Nowe Zagrody",
    "Ocice",
    "Markowice",
    "Miedonia",
    "Brzezie nad Odrą",
    "Sudół",
    "Studzienna",
    "Proszowiec",
    "Obora",
  ],

  nearbyHeading: "Cały powiat raciborski i okolice",
  nearbyParagraphs: [
    "Kuźnia Raciborska, Krzanowice, Krzyżanowice, Rudnik, Nędza, Pietrowice Wielkie i Kornowac są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Kuźnia Raciborska",
    "Krzanowice",
    "Krzyżanowice",
    "Rudnik",
    "Nędza",
    "Pietrowice Wielkie",
    "Wodzisław Śląski",
    "Rybnik",
  ],

  about: blokOMnie("do Raciborza", "w Raciborzu i całym powiecie raciborskim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Raciborza bez dodatkowej opłaty?",
      answer:
        "Tak, do Raciborza i do całego powiatu raciborskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Raciborzu"),
    {
      question: "Mam czas na gotowanie i lubię je — czy Thermomix nie odbierze mi tej przyjemności?",
      answer:
        "To dobre pytanie i nie mam na nie jednej odpowiedzi. Urządzenie zabiera z gotowania pilnowanie, mieszanie i zmywanie — a nie decydowanie, doprawianie i smakowanie. Dla części osób to zysk, dla części strata, bo lubią właśnie stać przy garnku. Na prezentacji zobaczysz to na własnym daniu i sama ocenisz. Jeśli powiesz „wolę po swojemu”, uznam to za dobrą odpowiedź, a nie za obiekcję do zbijania.",
    },
    {
      question: "Czy Thermomix przyda się przy przetworach z ogrodu?",
      answer:
        "Tak. Przeciery, dżemy i powidła gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całą sobotę.",
    },
  ],

  geo: { lat: 50.0918, lng: 18.2196 },
};
