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
 * TARNÓW — drugie miasto Małopolski i jedyne w tym zestawie, które NIE jest
 * sypialnią Krakowa. Do Krakowa jest stąd autostradą ok. 85 km i mniej
 * więcej godzina jazdy, więc codzienne dojazdy zdarzają się, ale nie są
 * regułą; to raczej do Tarnowa dojeżdża się z całego powiatu. Cała treść jest napisana z tego założenia — pisanie
 * o „szybkim dojeździe do Krakowa”, które pasuje do Bochni czy Wieliczki,
 * byłoby tu po prostu nieprawdą.
 *
 * Fakty użyte w tekście i skąd pochodzą:
 * — 16 osiedli jako jednostki pomocnicze z radami osiedli (tarnow.pl),
 * — Grupa Azoty w Mościcach, Zakłady Mechaniczne Tarnów — najwięksi pracodawcy,
 * — Mościce jako „dzielnica-ogród” budowana od 1927 r. razem z fabryką,
 *   w rejestrze zabytków od 1979 r., ulice nazwane od drzew,
 * — ponad połowa mieszkańców w blokach z wielkiej płyty,
 * — siuśpaj z Woli Rzędzińskiej na ministerialnej Liście Produktów
 *   Tradycyjnych (wpis 26.11.2012),
 * — fasola „Piękny Jaś” z Doliny Dunajca ze statusem ChNP.
 * Świadomie NIE ma tu liczby mieszkańców ani cen dań w tarnowskich lokalach.
 */
export const TARNOW: CityContent = {
  slug: "tarnow",
  h1: "Thermomix Tarnów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Tarnów — prezentacja i cena",
  seoDescription:
    "Thermomix w Tarnowie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena, raty 0% i pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tarnów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Tarnowie — od Mościc po Klikową. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Do Tarnowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam na wszystkie osiedla, od Mościc po Klikową.",

  highlights: highlightyStandardowe("cały Tarnów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tarnowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam do Ciebie ze wszystkim: z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu i gniazdko. To działa tak samo w mieszkaniu na Jasnej, jak w domu w Mościcach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i zwykle coś z tego, co akurat masz w lodówce, bo to najlepiej pokazuje, czy urządzenie pasuje do Waszego jedzenia. Powiedz mi wcześniej, ile osób jest w domu i czego nie jecie — dobiorę dania tak, żeby spotkanie miało sens akurat u Was.",
        "Na koniec liczby: aktualna cena, promocja, która akurat obowiązuje, i wysokość raty przy różnych okresach spłaty. Nie namawiam i nie zostawiam nikogo z poczuciem, że musi coś zdecydować dziś — „przemyślę” jest odpowiedzią, którą słyszę często i która nic nie kosztuje.",
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
      heading: "Tarnów pracuje na zmiany — i to widać w kuchni",
      paragraphs: [
        "Tarnów jest miastem przemysłowym i to nie jest ozdobnik z folderu. Grupa Azoty w Mościcach i Zakłady Mechaniczne to zakłady, w których pracuje się w systemie zmianowym, a dom, w którym ktoś wychodzi na szóstą albo wraca po dwudziestej drugiej, ma inny rytm kuchni niż dom z jednym powrotem o siedemnastej.",
        "Przy takim grafiku najbardziej przeszkadza nie brak umiejętności, tylko brak jednoczesności — nie ma godziny, o której wszyscy siedzą przy stole. Thermomix pomaga w tym konkretnie: potrawa ugotowana rano czeka, a wieczorem odgrzewa się w tym samym naczyniu, w którym powstała. Da się też zrobić większy garnek raz i rozdzielić go na dwa dni bez poczucia, że drugiego dnia je się resztki.",
        "Druga rzecz to gotowanie bez pilnowania. Kiedy ktoś w domu śpi po nocce, ważne bywa nie to, jak szybko coś się ugotuje, tylko to, jak cicho — TM7 pracuje ciszej od poprzednika i nie wymaga stania nad garnkiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tarnowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej rozmowie. Jeżeli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, na którym osiedlu mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać, co ugotujemy. Jeśli pracujesz zmianowo, podaj po prostu, które dni odpadają; łatwiej mi dopasować się do grafiku niż Tobie do mojego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tarnowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Tarnowa",
      paragraphs: [
        "Duża część tarnowian mieszka w blokach, często w kuchniach projektowanych w latach siedemdziesiątych, które mają dokładnie tyle blatu, ile trzeba na jedną deskę. To bywa argument przeciw — a w praktyce jest argumentem za, bo Thermomix zajmuje miejsce jednego urządzenia i zastępuje kilka: miksuje, gotuje, waży, wyrabia ciasto i gotuje na parze w jednym miejscu.",
        "Na obrzeżach — w Rzędzinie, Klikowej czy Chyszowie — sytuacja jest inna, bo tam są domy z większymi kuchniami i częściej ogród. Wtedy na pierwszy plan wychodzi Varoma i przetwory, a nie oszczędność blatu.",
        "W obu przypadkach wąskie gardło jest to samo: obiad dla kilku osób, który trzeba zrobić po pracy. Thermomix ugotuje i zmiksuje w jednym naczyniu, bez przekładania gorących rzeczy, a na parze zrobi równolegle porcję dla dziecka.",
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

  costs: {
    heading: "Domowy obiad czy jedzenie na mieście w Tarnowie – co się bardziej opłaca?",
    paragraphs: [
      "To pytanie pada na prezentacjach częściej niż pytanie o funkcje. Nie da się na nie odpowiedzieć jedną liczbą, ale da się je policzyć — na Twoich cenach, nie na moich.",
      "Poniżej szkielet dla czteroosobowej rodziny. Podstaw własne kwoty; to nie jest cennik, tylko sposób liczenia.",
    ],
    rows: [
      { label: "Obiad w środku tygodnia (4 osoby)", home: "koszt składników", out: "4 × cena dania na mieście" },
      { label: "Zamawiane jedzenie z dowozem", home: "—", out: "cena dań + dostawa + napiwek" },
      { label: "Ile razy w miesiącu", home: "policz swoje dni", out: "policz swoje dni" },
      { label: "Czas przygotowania", home: "gotuje bez pilnowania", out: "dojazd albo czekanie na kuriera" },
    ],
    note:
      "Świadomie nie wpisuję tu kwot za dania w tarnowskich lokalach — zmieniają się z miesiąca na miesiąc i różnią się między Starówką a osiedlami, a cena podana „na sztywno” szybko stałaby się nieprawdą. Weź ostatnie trzy paragony i wpisz swoje liczby; wynik będzie wtedy Twój, a nie mój.",
    closing:
      "Sedno nie jest takie, że Thermomix „zwraca się po X miesiącach” — nie obiecuję żadnej takiej liczby. Sedno jest takie, że zmienia nawyk: gotujesz w dni, w które wcześniej zamawiałaś, bo obiad przestaje wymagać stania przy garnku. Oszczędność bierze się z tej zmiany, a nie z samego sprzętu.",
  },

  culinary: {
    heading: "Tarnów, Pogórze i to, co się tu je",
    paragraphs: [
      "Okolice Tarnowa mają swoje udokumentowane rzeczy na talerzu. Siuśpaj — kasza jęczmienna z suszonymi śliwkami i gruszkami, słodzona miodem — pochodzi z Woli Rzędzińskiej pod miastem i jest wpisany na ministerialną Listę Produktów Tradycyjnych. Z doliny Dunajca pochodzi fasola „Piękny Jaś”, która ma unijną Chronioną Nazwę Pochodzenia; to nie jest marketingowa etykieta, tylko rejestr z konkretnym obszarem i specyfikacją.",
      "Obie te rzeczy łączy jedno: wymagają czasu, nie umiejętności. Suszone owoce trzeba namoczyć i powoli dojść do odpowiedniej konsystencji, fasola potrzebuje długiego, spokojnego gotowania. To jest dokładnie ta praca, którą Thermomix przejmuje w całości — ustawiona temperatura, ustawiony czas, mieszanie, które nie pozwala przywrzeć.",
      "Na co dzień w tarnowskich domach gotuje się to samo, co w całej Małopolsce: rosół, żurek, pierogi wtedy, gdy ktoś ma cierpliwość je lepić. Jeśli powiesz mi wcześniej, na czym Ci zależy, chętnie ugotuję coś z tej półki — zwykle to lepszy test niż kolejne smoothie.",
    ],
  },

  districtsHeading: "Gdzie w Tarnowie umówisz prezentację?",
  districtsParagraphs: [
    "Dojeżdżam na wszystkie osiedla Tarnowa i nie doliczam za to ani złotówki — bez różnicy, czy mieszkasz na Starówce, w Mościcach, czy na Klikowej.",
    "Tarnów jest miastem o bardzo różnej zabudowie: obok blokowisk Jasnej, Westerplatte czy Zielonego stoją Mościce, budowane od 1927 roku razem z fabryką jako dzielnica-ogród, z willami przy ulicach nazwanych od drzew i wpisane do rejestru zabytków. Dla prezentacji to nie ma znaczenia — wystarczy blat i gniazdko — ale ma znaczenie dla trasy, więc powiedz przy umawianiu, gdzie dokładnie mieszkasz.",
  ],
  districts: [
    "Starówka",
    "Strusina",
    "Piaskówka",
    "Grabówka",
    "Rzędzin",
    "Gumniska-Zabłocie",
    "Krakowska",
    "Mościce",
    "Chyszów",
    "Klikowa",
    "Krzyż",
    "Jasna",
    "Westerplatte",
    "Legionów H. Dąbrowskiego",
    "Koszyce",
    "Zielone",
  ],

  nearbyHeading: "Powiat tarnowski też obsługuję",
  nearbyParagraphs: [
    "Tarnów jest dla mnie punktem, z którego rozchodzą się trasy po wschodniej Małopolsce. Do gmin wokół miasta dojeżdżam normalnie, a przy dalszych kierunkach umawiam kilka spotkań w jednym rejonie tego samego dnia — dlatego czasem zaproponuję termin kilka dni później, ale za to dogodny.",
  ],
  nearbyTowns: [
    "Wojnicz",
    "Zakliczyn",
    "Wierzchosławice",
    "Skrzyszów",
    "Lisia Góra",
    "Tuchów",
    "Pleśna",
    "Żabno",
    "Radłów",
    "Brzesko",
    "Bochnia",
  ],

  about: blokOMnie("do Tarnowa", "w Tarnowie, Brzesku, Bochni"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Tarnowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Tarnowa i okolicznych gmin jest bezpłatny, tak samo jak sama prezentacja. Nie ma dopłaty za odległość od Krakowa.",
    },
    ...faqWspolne("w Tarnowie"),
    {
      question: "Czy dojeżdżasz do Mościc i na dalsze osiedla?",
      answer:
        "Tak, na wszystkie osiedla Tarnowa — Mościce, Klikowa, Rzędzin, Chyszów i pozostałe. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Pracuję zmianowo. Czy da się umówić na nietypową porę?",
      answer:
        "Tak i w Tarnowie zdarza się to często. Podaj przy umawianiu, które dni albo godziny odpadają — łatwiej mi ułożyć trasę wokół Twojego grafiku niż odwrotnie.",
    },
    {
      question: "Mam małą kuchnię w bloku. Czy Thermomix się zmieści?",
      answer:
        "Zajmuje miejsce mniej więcej jednego większego urządzenia, a zastępuje kilka — miksuje, gotuje, waży, wyrabia ciasto i gotuje na parze. Na prezentacji od razu zobaczysz, ile realnie zajmuje na Twoim blacie.",
    },
    {
      question: "Czy Thermomix poradzi sobie z fasolą „Piękny Jaś” i podobnymi potrawami?",
      answer:
        "Tak. Długie, spokojne gotowanie z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć, to jedna z rzeczy, w których urządzenie sprawdza się najlepiej. Namoczoną fasolę gotuje bez pilnowania.",
    },
  ],

  geo: { lat: 50.0121, lng: 20.9858 },
};
