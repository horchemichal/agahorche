import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * LEWIN BRZESKI — miasto w powiecie brzeskim, 5 560 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 386. Prawa miejskie na prawie
 * magdeburskim już w połowie XIII w., przywilej potwierdzony
 * w 1333 r.; nieprzerwanie do dziś. Urodził się tu GUSTAV HELLMANN
 * (1854–1939), dyrektor Pruskiego Instytutu Meteorologicznego.
 *
 * UWAGA — HOMONIM: nie mylić z LEWINEM KŁODZKIM (woj. dolnośląskie,
 * powiat kłodzki). To dwie różne miejscowości.
 *
 * KĄT: pogoda w kuchni — czyli dlaczego to samo ciasto raz wychodzi,
 * a raz nie. Miasto, w którym urodził się dyrektor Pruskiego
 * Instytutu Meteorologicznego, jest jedynym właściwym miejscem
 * na stronę o wilgotności powietrza, temperaturze pokoju i o tym,
 * że przepis milczy o obu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że mąka chłonie wilgoć z powietrza, więc ta sama szklanka
 *   waży inaczej w styczniu i w lipcu,
 * — że temperatura kuchni zmienia tempo wyrastania ciasta
 *   i zachowanie tłuszczu,
 * — że urządzenie usuwa część tej zmienności, bo waży zamiast
 *   odmierzać objętością i trzyma zadaną temperaturę,
 * — ale że pogody nie wyłączy — i że dobra kucharka poprawia
 *   na oko, a nie trzyma się przepisu wbrew temu, co widzi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO UŻYWANIA POWODZI Z 2024 R. JAKO TŁA DLA OFERTY.
 *   We wrześniu 2024 r. zalane zostało 80–90% powierzchni miasta,
 *   a odbudowa trwa do dziś. To jest prawda o tym mieście i nie
 *   zaprzeczam jej — ale przedstawicielka handlowa, która przy
 *   sprzedaży drogiego sprzętu buduje przekaz na cudzym
 *   nieszczęściu, robi rzecz nieprzyzwoitą. W treści strony NIE MA
 *   o tym ani słowa, mimo że kąt „pogoda" aż się o to prosi —
 *   i właśnie dlatego pilnuję granicy między pogodą w kuchni
 *   a pogodą, która zabrała ludziom domy.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU MĄKI w wilgotnych warunkach
 *   ani o tym, kiedy się psuje. Bezpieczeństwo żywności.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Precyzja — i to, gdzie ona
 * NIE jest potrzebna" (inne miasto) dotyczy dokładności
 * odmierzania jako zasady. „Zamienniki" dotyczą braku składnika.
 * „Pora roku" dotyczy sezonowości warzyw. Tutaj chodzi
 * o WARUNKI W POMIESZCZENIU — wilgotność i temperaturę — i o to,
 * że są niewidzialną zmienną każdego przepisu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM, kto potwierdził przywilej w 1333 r.
 *   Źródła podają raz Bolesława III brzeskiego, raz „księcia
 *   Bogusława". Piszę bezosobowo.
 * — NIE PODAJĘ NAZW FIRM ani liczby zatrudnionych.
 * — NIE POWTARZAM tezy o „cukrowni Wróblin jako największym
 *   przemyśle Lewina" — jest niepotwierdzona i budzi podejrzenie
 *   pomyłki z inną miejscowością.
 * — NIE PISZĘ, że Lewin Brzeski ma dwujęzyczne tablice. NIE MA.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — districts: gmina ma 21 jednostek pomocniczych, ale miasto
 *   stanowi JEDNĄ z nich w całości („Samorząd Miasta Lewina
 *   Brzeskiego") i NIE dzieli się na osiedla. districts to PUSTA
 *   TABLICA, a w tekście jest to powiedziane wprost.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — osada założona ok. 1250 r. przez Bogusza z Pogorzeli, prawo
 *   magdeburskie w połowie XIII w., przywilej potwierdzony
 *   w 1333 r.,
 * — Gustav Hellmann (1854–1939), dyrektor Pruskiego Instytutu
 *   Meteorologicznego, urodził się w Lewinie Brzeskim,
 * — ratusz z ok. 1500 r.; kościół św. Piotra i Pawła z 1310 r.
 *   z renesansowym ołtarzem z 1613 r.; krzyż pokutny z 1617 r.
 *   nad Nysą Kłodzką,
 * — kolej dotarła w 1843 r.,
 * — część gminy leży w Stobrawskim Parku Krajobrazowym,
 * — 5 560 mieszkańców miasta, 12 386 gminy (31.12.2024).
 */
export const LEWIN_BRZESKI: CityContent = {
  slug: "lewin-brzeski",
  h1: "Thermomix Lewin Brzeski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lewin Brzeski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Lewinie Brzeskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lewin Brzeski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lewinie Brzeskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lewina Brzeskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Lewin Brzeski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta sama szklanka mąki waży zimą co innego niż latem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lewinie Brzeskim – jak wygląda prezentacja?",
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
      id: "pogoda",
      heading: "Miasto, w którym urodził się dyrektor instytutu meteorologicznego — czyli o pogodzie w kuchni",
      paragraphs: [
        "W Lewinie Brzeskim urodził się w 1854 roku Gustav Hellmann, późniejszy dyrektor Pruskiego Instytutu Meteorologicznego. Trudno o lepszy pretekst, żeby napisać o rzeczy, o której nie mówi żaden przepis, a która decyduje o połowie kuchennych niepowodzeń: o powietrzu w Waszej kuchni.",
        "Bo przepisy są pisane tak, jakby warunki były zawsze te same. A nie są.",
        "Mąka chłonie wilgoć z powietrza. W wilgotny listopadowy dzień ta sama szklanka mąki waży zauważalnie więcej niż w suchy mroźny styczeń albo w upalny lipiec — a to znaczy, że w cieście jest jej realnie inna ilość, choć odmierzyliście dokładnie tak samo. Stąd bierze się słynne „przecież robiłam identycznie, a wyszło inaczej”.",
        "Temperatura pokoju robi drugą połowę roboty. Ciasto drożdżowe w chłodnej kuchni wyrasta półtora raza dłużej i można je uznać za nieudane, choć potrzebowało tylko czasu. Masło w ciepłym pomieszczeniu rozmięka szybciej, niż zdążycie je wyrobić. Śmietana ubija się gorzej. Czekolada zachowuje się zupełnie inaczej w styczniu i w sierpniu.",
        "Co z tym zrobić i gdzie urządzenie realnie pomaga.",
        "Po pierwsze: waży, zamiast odmierzać objętością. „Szklanka mąki” to miara powietrza, „dwieście gramów mąki” to miara mąki. Wbudowana waga usuwa z tego równania największe źródło błędu — i to jest cała, prosta prawda, dla której warto tę stronę przeczytać.",
        "Po drugie: trzyma zadaną temperaturę, więc etapy, które zależą od ciepła, przestają zależeć od tego, czy w kuchni jest osiemnaście stopni, czy dwadzieścia sześć.",
        "A czego nie zrobi: nie wyłączy pogody. Jeśli mąka w Waszej szafce nabrała wilgoci, to nabrała jej także na wadze. Dlatego zdanie, którym kończę: patrzcie na ciasto, nie na przepis. Jeśli wygląda na zbyt luźne, jest zbyt luźne — dosypcie. Jeśli na zbyt zbite, dolejcie. Osoby, które gotują dobrze, nie mają lepszych przepisów. One po prostu patrzą.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lewinie Brzeskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie przepis, który raz wychodzi, a raz nie, weźcie go na spotkanie — to zwykle najciekawsza część rozmowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lewinie Brzeskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lewińskiej rodziny",
      paragraphs: [
        "Lewin Brzeski liczy nieco ponad pięć i pół tysiąca mieszkańców, a cała gmina ponad dwanaście tysięcy. Osadę założono około 1250 roku, prawo magdeburskie miasto miało już w połowie XIII wieku, a przywilej potwierdzono w 1333. Stoi tu ratusz z około 1500 roku i kościół świętych Piotra i Pawła z 1310, z renesansowym ołtarzem z 1613 roku; nad Nysą Kłodzką zachował się krzyż pokutny z 1617. Kolej dotarła w 1843 roku i to ona uruchomiła tutejszy przemysł. Część gminy leży w Stobrawskim Parku Krajobrazowym.",
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

  districtsHeading: "Do których części Lewina Brzeskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — w tym Łosiowa i Skorogoszczy — bez dopłaty za dojazd.",
    "Miasto stanowi jedną jednostkę pomocniczą i nie dzieli się na osiedla, więc nie będę wymyślać nazw dzielnic; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Lewin Brzeski też przyjadę",
  nearbyParagraphs: [
    "Brzeg, Opole, Niemodlin, Grodków i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Brzeg", "Opole", "Niemodlin", "Grodków", "Namysłów", "Nysa"],

  about: blokOMnie("do Lewina Brzeskiego", "w Lewinie Brzeskim i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lewina Brzeskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Lewin Brzeski w opolskim, nie o Lewin Kłodzki.",
    },
    ...faqWspolne("w Lewinie Brzeskim"),
    {
      question: "Dlaczego to samo ciasto raz wychodzi, a raz nie?",
      answer:
        "Najczęściej przez powietrze w kuchni. Mąka chłonie wilgoć, więc ta sama szklanka waży inaczej w wilgotny listopad i w suchy styczeń, a temperatura pokoju zmienia tempo wyrastania i zachowanie masła. Przepis o tym milczy.",
    },
    {
      question: "Czy waga w urządzeniu naprawdę robi różnicę?",
      answer:
        "Tak, i to największą z całej listy. „Szklanka mąki” to miara powietrza, „dwieście gramów mąki” to miara mąki. Ważenie zamiast odmierzania objętością usuwa główne źródło błędu.",
    },
    {
      question: "Czy sprzęt sprawi, że wszystko będzie wychodzić za każdym razem?",
      answer:
        "Nie wyłączy pogody. Jeśli mąka nabrała wilgoci, nabrała jej też na wadze. Dlatego najważniejsza rada jest darmowa: patrzcie na ciasto, nie na przepis — jeśli wygląda na zbyt luźne, dosypcie; jeśli na zbyt zbite, dolejcie.",
    },
  ],

  geo: { lat: 50.7497, lng: 17.6189 },
};
