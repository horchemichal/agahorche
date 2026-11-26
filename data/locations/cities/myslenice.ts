import type { CityContent } from "../city-content";
import { faqWspolne, highlightyStandardowe, sekcjaTm7 } from "./wspolne";

/**
 * MYŚLENICE — najbliżej Krakowa z całego tego zestawu (ok. 35 km zakopianką)
 * i jednocześnie miasto z własnym przemysłem, więc nie jest wyłącznie
 * sypialnią. Motyw przewodni tekstu: zakopianka, która daje bliskość
 * Krakowa, ale w szczycie potrafi tę bliskość odebrać. To jest realne
 * doświadczenie mieszkańców i lepiej z niego korzystać niż z ogólników.
 *
 * Fakty użyte w tekście:
 * — 17 sołectw gminy (miasto nie ma potwierdzonych formalnych osiedli jako
 *   jednostek pomocniczych, dlatego lista „dzielnic” wymienia sołectwa
 *   i nazwy zwyczajowe, bez udawania, że to podział urzędowy),
 * — Zarabie jako dzielnica wypoczynkowa od okresu międzywojennego,
 * — góra Chełm z wieżą widokową, Zalew Dobczycki w sąsiedztwie,
 * — duzi pracodawcy: Tele-Fonika Kable, Cooper Standard.
 * Sekcji kulinarnej NIE ma: w gminie Myślenice nie ma ani jednego produktu
 * na ministerialnej Liście Produktów Tradycyjnych, a „kuchnia myślenicka”
 * byłaby wymyślona. Jabłka z Raciechowic są z sąsiedniej gminy i nie
 * przypisuję ich Myślenicom.
 */
export const MYSLENICE: CityContent = {
  slug: "myslenice",
  zaktualizowano: "2026-11-26",
  h1: "Thermomix Myślenice – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Myślenice — prezentacja i cena",
  seoDescription:
    "Thermomix w Myślenicach: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Myślenice — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Myślenicach lub w gminie. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Myślenic i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Myślenice i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Paluchy z sezamem i czarnuszką upieczone z ciasta przygotowanego w Thermomixie TM7",
    caption: "Pieczywo z własnego ciasta to jedna z rzeczy, które najszybciej wchodzą w tygodniowy rytm.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Myślenicach – jak wygląda prezentacja?",
      paragraphs: [
        "Myślenice dzieli od Bochni w linii prostej około 40 km, więc przywożę komplet: Thermomix TM7, produkty i w razie potrzeby naczynia. Po Twojej stronie jest tylko kawałek blatu i gniazdko — w bloku na Osiedlu 1000-lecia tak samo jak w domu w Jaworniku czy Bęczarce.",
        "Gotujemy obiad, coś słodkiego i coś z Twojej lodówki, w porcji, jaką robisz na co dzień. Cenę i ratę omawiamy na końcu, bez decyzji na miejscu — prezentacja jest bezpłatna.",
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
      heading: "Trzydzieści pięć kilometrów, które czasem trwają godzinę",
      paragraphs: [
        "Z Myślenic do Krakowa jest około trzydziestu pięciu kilometrów i przy pustej zakopiance jakieś czterdzieści minut. Przy pełnej — każdy, kto tu mieszka, zna dalszy ciąg tego zdania. To sprawia, że w Myślenicach dojazd bywa rzeczą, której nie da się zaplanować co do kwadransa, i że wieczorna godzina powrotu jest ruchoma.",
        "Kuchnia, w której nie wiadomo, o której wszyscy będą w domu, potrzebuje czegoś innego niż kuchnia z regularnym rytmem. Potrzebuje dania, które może być gotowe wcześniej i poczekać, albo powstać szybko po powrocie — i w obu przypadkach nie może wymagać, żeby ktoś przy nim stał.",
        "Tym właśnie jest Thermomix w takim domu. Ustawiasz i odchodzisz; urządzenie miesza samo i trzyma temperaturę. Danie ugotowane w jednym naczyniu w tym samym naczyniu się potem odgrzewa, więc nie mnożą się garnki dla osób, które wróciły o różnych porach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Myślenicach?",
      paragraphs: [
        "Zadzwoń albo wyślij SMS na 517 185 691 — termin ustalimy od razu. Wolisz pisać? Formularz jest na dole strony.",
        "Powiedz od razu, w którym rejonie gminy mieszkasz i ile osób będzie na spotkaniu. Gmina jest rozległa i idzie w góry — Trzemeśnia czy Poręba to inny dojazd niż centrum — więc konkret pozwala mi ułożyć realny plan dnia zamiast obiecywać godzinę, której nie dotrzymam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    {
      ...sekcjaTm7(),
      heading: "Thermomix TM7 — co pokażę na spotkaniu",
      paragraphs: [
        "TM7 ma duży ekran dotykowy, izolowane naczynie, większą Varomę i gotowanie bez pokrywki. Pokażę go na daniu, które gotujesz na co dzień — także w dużej porcji, jeśli przy stole siada sześć czy osiem osób. Patelni przy smażeniu nie zastąpi; przejmuje siekanie, mieszanie i pilnowanie temperatury.",
      ],
      links: [
        { href: "/thermomix/tm7", label: "Wszystko o Thermomix TM7" },
        { href: "/thermomix/tm7-vs-tm6", label: "Porównanie TM7 i TM6" },
        { href: "/thermomix/funkcje", label: "Pełna lista funkcji" },
        { href: "/diety", label: "Gotowe jadłospisy i diety — pobierz bezpłatny PDF" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety Thermomixa — bez lukru" },
      ],
    },
    {
      id: "cena",
      heading: "Ile kosztuje Thermomix TM7 w Myślenicach?",
      paragraphs: [
        "Tyle samo co w Krakowie, oddalonym o około 35 km zakopianką: cenę ustala Vorwerk dla całej Polski, a dojazd do miasta i siedemnastu sołectw nic nie kosztuje. Aktualna kwota i promocja miesiąca są w sekcji z ofertą powyżej.",
      ],
      links: [{ href: "/oferta", label: "Aktualna cena i promocje" }],
    },
    {
      id: "raty",
      heading: "Thermomix na raty w Myślenicach — jak to policzyć",
      paragraphs: [
        "Finansowanie ratalne jest dostępne, okresowo z RRSO 0%. Kalkulator poniżej liczy od aktualnej ceny — sprawdź kilka okresów spłaty, zanim przyjadę. Wynik jest orientacyjny: o warunkach decyduje oferta z danego miesiąca i instytucja finansująca, więc w Myślenicach przeliczymy go na dokładnych danych.",
      ],
      links: [{ href: "/finansowanie", label: "Więcej o ratach 0%" }],
    },
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Myślenic",
      paragraphs: [
        "Myślenice są miastem w dolinie Raby, otoczonym siedemnastoma sołectwami rozłożonymi po stokach. W mieście jest zabudowa blokowa, w sołectwach — domy jednorodzinne, często z ogrodem i często kilkupokoleniowe. Obiad gotuje się tu więc nierzadko dla większej liczby osób, niż wynikałoby z liczby mieszkańców domu.",
        "Przy gotowaniu na sześć czy osiem osób najbardziej męczy nie samo gotowanie, tylko skala: większe garnki, dłuższe mieszanie, więcej siekania. To są dokładnie te czynności, które Thermomix przejmuje w całości — sieka, miesza, trzyma temperaturę i nie pozwala przywrzeć.",
        "Jeśli w domu jest małe dziecko, dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla reszty, w jednym urządzeniu. A skoro do Zarabia czy w góry jedzie się tu często, przydaje się też to, że jedzenie da się przygotować rano i zabrać ze sobą.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
      },
    },
  ],

  districtsHeading: "Gdzie w gminie Myślenice dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich siedemnastu sołectw. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz przy Rynku, na Zarabiu, czy w Trzemeśni.",
    "Lista poniżej zaczyna się od nazw, których w samych Myślenicach używa się na co dzień — Zarabie czy Górne Przedmieście to określenia zwyczajowe, a nie urzędowy podział miasta, ale przy umawianiu spotkania są najbardziej praktyczne. Dalej idą wszystkie sołectwa gminy, w kolejności alfabetycznej.",
  ],
  districts: [
    "Myślenice — centrum",
    "Zarabie",
    "Górne Przedmieście",
    "Dolne Przedmieście",
    "Osiedle 1000-lecia",
    "Bęczarka",
    "Borzęta",
    "Bulina",
    "Bysina",
    "Chełm",
    "Droginia",
    "Głogoczów",
    "Jasienica",
    "Jawornik",
    "Krzyszkowice",
    "Łęki",
    "Osieczany",
    "Polanka",
    "Poręba",
    "Trzemeśnia",
    "Zasań",
    "Zawada",
  ],

  nearbyHeading: "Powiat myślenicki i okolica",
  nearbyParagraphs: [
    "Myślenice leżą przy zakopiance, więc okolicę obsługuję przy okazji przejazdów: Dobczyce i Siepraw po drodze na wschód, Sułkowice i Skawinę na zachód, a przy dalszych kierunkach umawiam kilka spotkań w jednym rejonie tego samego dnia.",
  ],
  nearbyTowns: [
    "Dobczyce",
    "Siepraw",
    "Sułkowice",
    "Pcim",
    "Raciechowice",
    "Wiśniowa",
    "Tokarnia",
    "Lubień",
    "Skawina",
    "Wieliczka",
    "Kraków",
  ],

  about: {
    heading: "Kto poprowadzi Twoją prezentację",
    paragraphs: [
      "Prezentację prowadzę osobiście, bez call center: Aga Horche, oficjalna przedstawicielka Thermomix® w Małopolsce. Kupujesz z gwarancją producenta i z bieżącą promocją, a ten sam numer działa po zakupie — przy pierwszym uruchomieniu, koncie Cookidoo i zgłoszeniu serwisowym.",
    ],
    bullets: [
      "dojazd do Myślenic, Dobczyc i Skawiny bez dopłat",
      "7-dniowe jadłospisy z listami zakupów dla klientek i klientów",
    ],
    photo: {
      src: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
      alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
      caption: "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce.",
    },
  },

  faq: [
    {
      question: "Czy przyjeżdżasz do Myślenic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Myślenic i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Myślenicach"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład Trzemeśni albo Jawornika?",
      answer:
        "Tak, do wszystkich siedemnastu sołectw gminy. Przy umawianiu podaj miejscowość — gmina jest rozległa i wchodzi w góry, więc trasę układam z wyprzedzeniem.",
    },
    {
      question: "Nie wiem, o której wrócę z Krakowa. Czy to problem?",
      answer:
        "Nie. Podaj widełki zamiast jednej godziny, a przy zakopiance to i tak najrozsądniejsze podejście. Umawiam się tak, żeby spotkanie nie zaczynało się w biegu.",
    },
    {
      question: "Gotuję dla większej rodziny. Czy Thermomix to udźwignie?",
      answer:
        "Na prezentacji ugotujemy porcję zbliżoną do tej, którą robisz na co dzień, więc sama zobaczysz. Przy większym gotowaniu najbardziej pomaga to, że urządzenie sieka, miesza i pilnuje temperatury samo — czyli znika ta część, która przy dużych garnkach męczy najbardziej.",
    },
  ],

  geo: { lat: 49.8335, lng: 19.9397 },
};
