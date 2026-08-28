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
 * DOBCZYCE — małe miasto z nieproporcjonalnie dużym przemysłem: strefa
 * przemysłowa przy drodze wojewódzkiej, w niej kilkanaście zakładów,
 * z fabryką słodyczy Wawel na czele. Do tego Zbiornik Dobczycki, który
 * jest ujęciem wody pitnej dla Krakowa, a nie kąpieliskiem — obowiązuje
 * tam zakaz kąpieli i sportów wodnych. Ta druga rzecz jest w tekście
 * potraktowana ostrożnie właśnie dlatego, że łatwo o niej napisać
 * nieprawdę.
 *
 * Fakty użyte w tekście:
 * — strefa przemysłowa i fabryka Wawelu uruchomiona w 2006 r. po zamknięciu
 *   zakładów w Krakowie,
 * — zbiornik jako źródło wody pitnej dla aglomeracji krakowskiej, z zakazem
 *   kąpieli; korona zapory udostępniona pieszym,
 * — zamek z XIV w. i skansen przy nim,
 * — 13 sołectw gminy; miasto nie ma osiedli jako jednostek pomocniczych,
 *   więc lista podaje nazwy części miasta i sołectwa bez udawania podziału
 *   urzędowego.
 * Sekcji kulinarnej NIE ma — w gminie nie ma produktów na Liście Produktów
 * Tradycyjnych, a fabryka czekolady to przemysł, nie tradycja kulinarna.
 */
export const DOBCZYCE: CityContent = {
  slug: "dobczyce",
  h1: "Thermomix Dobczyce – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Dobczyce — prezentacja i cena",
  seoDescription:
    "Thermomix w Dobczycach: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobczyce — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobczycach lub w gminie. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Dobczyc i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Dobczyce i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobczycach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze wszystkimi produktami, a jeśli okaże się, że czegoś brakuje w kuchni — także z naczyniami. Do Ciebie należy tylko udostępnienie kawałka blatu i gniazdka.",
        "Następnie gotujemy: pełne danie obiadowe, coś słodkiego i zwykle coś dodatkowego z Twoich zapasów. To ostatnie jest najważniejsze, bo dopiero na własnych produktach widać, czy urządzenie pasuje do Waszego jedzenia. Napisz wcześniej, ile osób jada w domu i czego nie jecie.",
        "Rozmowa o kosztach jest ostatnim punktem: cena, aktualna promocja, rata przy różnych okresach spłaty. Nie oczekuję decyzji tego samego dnia i za spotkanie nic nie płacisz.",
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
      heading: "Praca na miejscu, dom kilka minut dalej",
      paragraphs: [
        "Dobczyce są nietypowe jak na miasteczko tej wielkości: mają własną strefę przemysłową przy drodze wojewódzkiej, a w niej kilkanaście zakładów — z fabryką Wawelu, która powstała tu w 2006 roku po zamknięciu krakowskich zakładów. Sporo osób ma więc pracę w promieniu kilku kilometrów od domu, a nie po godzinie jazdy.",
        "To zmienia problem, jaki ma kuchnia. Nie chodzi o to, że nikogo nie ma w domu do osiemnastej — chodzi o to, że jest się w domu zmęczonym i że wieczór jest krótki. Wtedy decyduje nie czas gotowania, tylko liczba czynności: ile trzeba posiekać, ile razy przełożyć, ile garnków potem umyć.",
        "Thermomix skraca tę listę do minimum, bo sieka, gotuje i miksuje w jednym naczyniu. Nastawiasz i możesz odejść — urządzenie miesza samo i trzyma temperaturę. To jest cała różnica między obiadem zrobionym a obiadem odłożonym na jutro.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobczycach?",
      paragraphs: [
        "Wystarczy telefon albo SMS — termin ustalamy zwykle od ręki. Jeśli wolisz nie dzwonić, na dole strony jest formularz; podaj w nim godzinę, o której mam oddzwonić.",
        "Powiedz od razu, gdzie mieszkasz i ile osób będzie na spotkaniu. Gmina rozciąga się wokół zbiornika i po stokach nad Rabą, więc Brzezowa czy Stadniki to inny dojazd niż osiedle w mieście — konkret pozwala mi ułożyć realny plan dnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobczycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Dobczyc",
      paragraphs: [
        "W mieście jest kilka bloków, ale większość gminy to domy jednorodzinne z ogrodem, rozłożone na stokach nad Rabą i wokół zbiornika. Kuchnie są tu więc zwykle większe niż w mieście, a problemem nie jest miejsce na blacie, tylko liczba rzeczy do zrobienia w ciągu dnia.",
        "Dla rodziny najbardziej liczy się to, że Thermomix pracuje bez nadzoru. Obiad może się gotować, gdy odbierasz dziecko albo kończysz coś w ogrodzie; większa porcja robi się tym samym nakładem pracy co mniejsza. Latem dochodzą przetwory — przeciery i dżemy z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć.",
        "Przy małym dziecku przydaje się Varoma: posiłek na parze powstaje równolegle z obiadem dla reszty domu, w jednym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Warzywa z ogrodu i obiad, którego nie trzeba pilnować.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Dobczyce dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich trzynastu sołectw. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz na osiedlu Jagiellońskim, czy w Kornatce.",
    "Jeżeli nie widzisz swojej miejscowości, napisz albo zadzwoń. Dobczyce leżą przy trasie z Myślenic do Gdowa, więc w tym rejonie bywam regularnie i zwykle da się znaleźć dogodny termin bez długiego czekania.",
  ],
  districts: [
    "Dobczyce — Stare Miasto",
    "Osiedle Jagiellońskie",
    "Osiedle Piastowskie",
    "Zarabie",
    "Podgórze",
    "Jałowcowa Góra",
    "Bieńkowice",
    "Brzączowice",
    "Brzezowa",
    "Dziekanowice",
    "Kędzierzynka",
    "Kornatka",
    "Niezdów",
    "Nowa Wieś",
    "Rudnik",
    "Sieraków",
    "Skrzynka",
    "Stadniki",
    "Stojowice",
  ],

  nearbyHeading: "Okolica zbiornika i dalej",
  nearbyParagraphs: [
    "Dobczyce leżą na trasie między Myślenicami a Gdowem, więc okolicę obsługuję przy okazji przejazdów. Dojeżdżam też w stronę Raciechowic, Wiśniowej i Sieprawia, a dalej do Wieliczki i Krakowa.",
  ],
  nearbyTowns: [
    "Myślenice",
    "Gdów",
    "Siepraw",
    "Raciechowice",
    "Wiśniowa",
    "Wieliczka",
    "Łapanów",
    "Skawina",
    "Kraków",
  ],

  about: blokOMnie("do Dobczyc", "w Dobczycach, Myślenicach i Wieliczce"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Dobczyc bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Dobczyc i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dobczycach"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład do Brzezowej albo Stadnik?",
      answer:
        "Tak, do wszystkich trzynastu sołectw gminy. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów z ogrodu?",
      answer:
        "Tak. Przeciery, dżemy i pasty robią się z ustawioną temperaturą i czasem, z mieszaniem, które nie pozwala przywrzeć do dna — bez stania nad garnkiem.",
    },
    {
      question: "Czy da się umówić po pracy?",
      answer:
        "Tak. Wieczory w tygodniu i sobotnie przedpołudnia to najczęściej wybierane terminy; w Dobczycach sporo osób pracuje na miejscu, więc spotkania po siedemnastej są tu regułą.",
    },
  ],

  geo: { lat: 49.8812, lng: 20.0891 },
};
