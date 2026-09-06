import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * OPATÓW — miasto powiatowe na skrzyżowaniu dwóch dróg krajowych, między
 * Ostrowcem, Sandomierzem i Ożarowem. Stoi tu romańska kolegiata św. Marcina
 * z renesansową płytą zwaną Lamentem opatowskim, zachowała się Brama
 * Warszawska, a pod miastem biegnie podziemna trasa w dawnych piwnicach.
 *
 * KĄT: „po drodze". Piwnice odpadają — o mieście piwnic pisałam już przy
 * Jarosławiu i drugi raz byłoby to powtórzeniem. Zostaje rzecz banalna
 * i naprawdę użyteczna: przez Opatów przechodzą dwie drogi krajowe, więc
 * JA TĘDY PO PROSTU JEŻDŻĘ. Dla klientki oznacza to trzy konkretne rzeczy:
 * krótszy czas oczekiwania na termin, łatwiejsze przełożenie spotkania
 * i realną możliwość, że wpadnę później z drobną pomocą. To jest obietnica,
 * której NIE mogę złożyć w Bieszczadach ani na Ponidziu — i właśnie dlatego
 * warto ją tu złożyć wprost.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — przez Opatów przechodzą dwie drogi krajowe i miasto jest węzłem
 *   drogowym między Ostrowcem, Sandomierzem, Ożarowem i Lublinem,
 * — jest tu romańska kolegiata św. Marcina z renesansową płytą nagrobną
 *   nazywaną Lamentem opatowskim,
 * — zachowała się Brama Warszawska, a pod miastem prowadzi podziemna trasa
 *   w dawnych piwnicach,
 * — do gminy należą m.in. Adamów, Brzezie, Jurkowice, Kobylany, Tudorów,
 *   Wąworków, Marcinkowice.
 *
 * CZEGO NIE MA: natężenia ruchu, czasów przejazdu, obietnicy konkretnego
 * terminu ani deklaracji, że „przyjadę w każdej chwili".
 */
export const OPATOW: CityContent = {
  slug: "opatow",
  h1: "Thermomix Opatów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Opatów — prezentacja i cena",
  seoDescription:
    "Thermomix w Opatowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina, szybkie terminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Opatów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Opatowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Opatowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Adamowa, Jurkowic, Tudorowa i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Opatów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Opatowie – jak wygląda prezentacja?",
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
      id: "po-drodze",
      heading: "Miasto na skrzyżowaniu — czyli po prostu tędy jeżdżę",
      paragraphs: [
        "Opatów leży na skrzyżowaniu dwóch dróg krajowych, między Ostrowcem, Sandomierzem i Ożarowem. Ma romańską kolegiatę z płytą nazywaną Lamentem opatowskim i Bramę Warszawską, ale dla tej strony ważniejsze jest coś znacznie mniej dostojnego: przez to miasto się przejeżdża. Ja też.",
        "Piszę o tym, bo to nie jest ciekawostka, tylko różnica, którą klientka odczuwa w trzech miejscach. Pierwsza: termin. Do miejsc leżących na moich trasach umawiam się szybciej, bo nie muszę na to rezerwować osobnego dnia. Do Opatowa jest mi po drodze przy każdym wyjeździe w tę stronę.",
        "Druga: przekładanie. Jeśli coś Wam wypadnie — dziecko zachoruje, praca się przeciągnie — przełożenie spotkania nie kosztuje mnie tu całego dnia, więc mogę powiedzieć „to umówmy się na czwartek” zamiast „to za trzy tygodnie”. Nie każde miejsce, do którego jeżdżę, na to pozwala i nie będę udawać, że jest inaczej.",
        "Trzecia i najważniejsza: to, co dzieje się po zakupie. Kiedy ktoś dzwoni, że nie wychodzi mu chleb albo że nie wie, jak coś ustawić, w miejscu leżącym przy trasie mogę po prostu wpaść na kwadrans przy okazji następnego przejazdu. Zwykle wystarczy telefon — ale dobrze wiedzieć, że drugie wyjście też istnieje.",
        "Czego nie obiecuję: że będę pod ręką w każdej chwili i że przyjadę tego samego dnia. Jestem jedną osobą, a nie serwisem miejskim. Obiecuję za to, że nie zniknę po sprzedaży, i że tutaj akurat mam ku temu wyjątkowo łatwe warunki.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Opatowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Opatowem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Opatowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla opatowskiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach praca jest w Ostrowcu albo w Sandomierzu, więc dzień kończy się po dojeździe, a obiad powstaje wtedy, gdy sił jest najmniej.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Opatów",
    "Adamów",
    "Brzezie",
    "Jurkowice",
    "Kobylany",
    "Tudorów",
    "Wąworków",
    "Marcinkowice",
    "Czerników",
    "Zochcinek",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Ostrowiec Świętokrzyski, Sandomierz, Ożarów, Ćmielów, Klimontów i Łagów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Ostrowiec Świętokrzyski",
    "Sandomierz",
    "Ożarów",
    "Ćmielów",
    "Klimontów",
    "Łagów",
    "Nowa Słupia",
  ],

  about: blokOMnie("do Opatowa", "w gminie Opatów i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Opatowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Opatowie"),
    {
      question: "Jak szybko można się u Was umówić?",
      answer:
        "W Opatowie zwykle szybciej niż w miejscach położonych na uboczu, bo tędy i tak jeżdżę. Zadzwoń i podaj kilka pasujących terminów — powiem od razu, co realnie mogę zaproponować, bez trzymania Cię w niepewności.",
    },
    {
      question: "Czy po zakupie mogę liczyć na pomoc na miejscu?",
      answer:
        "Zwykle wystarcza telefon i przez telefon rozwiązujemy większość spraw. Ale skoro tędy przejeżdżam, przy okazji mogę też wpaść na kwadrans, jeśli coś trzeba pokazać na żywo. Nie obiecuję tego samego dnia — obiecuję, że nie zniknę.",
    },
  ],

  geo: { lat: 50.8022, lng: 21.4258 },
};
