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
 * BYCZYNA — miasto w powiecie kluczborskim, 3 340 mieszkańców
 * (31.12.2024, GUS); cała gmina 8 526. Prawa miejskie przed
 * 1268 r. Zachowany niemal pełny pierścień MURÓW MIEJSKICH
 * o obwodzie 912,5 m — badania z lat 2009–2010 przesunęły ich
 * metrykę z XV–XVI w. na POŁOWĘ XIII w. 24 stycznia 1588 r.
 * pod murami miasta rozegrała się BITWA POD BYCZYNĄ, w której
 * hetman Jan Zamoyski pokonał arcyksięcia Maksymiliana Habsburga.
 *
 * UWAGA — HOMONIMY: istnieją też Byczyna — dzielnica Jaworzna
 * (śląskie) oraz wieś Byczyna w małopolskim.
 *
 * KĄT: tort i ciasta na okazję — czyli komunia, wesele,
 * osiemnastka. Miasto tak małe i tak zwarte, że każda rodzinna
 * uroczystość jest w nim wydarzeniem publicznym, jest właściwym
 * miejscem na stronę o cieście, które musi wyjść.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie robi MASY: biszkopt, kremy, nadzienia, polewy,
 *   i że to jest największa część pracy,
 * — że nie upiecze blatów — piekarnik zostaje,
 * — że dekorowanie to osobne rzemiosło i nie będę udawać,
 *   że sprzęt czyni z kogokolwiek cukiernika,
 * — że przy kremach z masłem decyduje temperatura składników,
 * — i uczciwie: przy jednym torcie w roku nie warto się
 *   męczyć — od tego są cukiernie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PRZEPISÓW ANI PROPORCJI.
 * — ŻADNYCH PORAD O TRWAŁOŚCI tortów z kremem ani o tym,
 *   jak długo mogą stać poza lodówką. Bezpieczeństwo żywności.
 * — ŻADNEJ KRYTYKI cukierni. Wprost przeciwnie — strona mówi,
 *   kiedy lepiej po prostu zamówić.
 * — ŻADNEGO UŻYWANIA SYTUACJI FINANSOWEJ GMINY. Byczyna była
 *   w 2017 r. drugą najbardziej zadłużoną gminą w Polsce
 *   i spłaca zobowiązania do 2034 r. To jest fakt, ale
 *   przedstawicielka handlowa, która przy sprzedaży drogiego
 *   sprzętu wypomina ludziom długi ich gminy, robi rzecz
 *   nieprzyzwoitą. W treści strony NIE MA o tym ani słowa.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sernik i masy na ciasto"
 * (inne miasto) dotyczy konkretnego wypieku i granicy urządzenia.
 * „Bita śmietana" (Kietrz) to jedna czynność. „Kołocz śląski"
 * (Głogówek) to konkretne ciasto regionalne. „Wesele i przyjęcie
 * w domu" (Ujazd) dotyczy CAŁEGO przyjęcia i jego skali. Tutaj
 * chodzi o JEDEN TORT na jedną uroczystość i o to, co się przy
 * nim naprawdę udaje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty ani nadawcy praw miejskich („przed 1268").
 * — NIE PISZĘ, że gród rycerski jest w Byczynie. Jest
 *   w BISKUPICACH, sołectwie tej gminy, a jego przyszłość
 *   od 2024 r. jest niepewna — dlatego wspominam o nim
 *   ostrożnie albo wcale.
 * — NIE WYMIENIAM pracodawców ze Studium z 2012 r. Wszyscy
 *   wymagają weryfikacji i wszyscy działali poza miastem.
 * — NIE POWTARZAM niezweryfikowanych tez z Wikipedii
 *   (o masakrze w 1945 r. i o siedzibie biskupstwa w 1054 r.).
 * — NIE PISZĘ, że Byczyna ma dwujęzyczne tablice. NIE MA.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — NIE wymyślam osiedli. Statut wymienia wyłącznie sołectwa;
 *   miasto nie ma jednostek pomocniczych. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie przed 1268 r.; pierwsza wzmianka 1054 r.,
 * — mury miejskie: eliptyczny obwód 912,5 m, wysokość 4,5–6 m,
 *   grubość 1,4–1,9 m; zachowane Wieża Bramy Polskiej, Wieża
 *   Bramy Niemieckiej i Baszta Piaskowa; badania z lat 2009–2010
 *   przesunęły datowanie na połowę XIII w.; odcinek przy ulicach
 *   Zamojskiego i Wąskiej wyremontowano w latach 2023–2024,
 * — bitwa pod Byczyną 24 stycznia 1588 r., pod murami miasta,
 *   między Byczyną a Roszkowicami; hetman Jan Zamoyski pokonał
 *   arcyksięcia Maksymiliana III Habsburga w niecałe półtorej
 *   godziny; w ratuszu wisi kopia obrazu Matejki,
 * — najgęściej zaludnione miasto okolicy: 3 340 osób na 5,8 km²,
 * — 3 340 mieszkańców miasta, 8 526 gminy (31.12.2024).
 */
export const BYCZYNA: CityContent = {
  slug: "byczyna",
  h1: "Thermomix Byczyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Byczyna — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Byczynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Byczyna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Byczynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Byczyny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Byczyna i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Masy zrobi. Blatów nie upiecze. Dekorować i tak trzeba samemu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Byczynie – jak wygląda prezentacja?",
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
      id: "tort",
      heading: "Trzy tysiące osób w pierścieniu murów — czyli o torcie, który musi wyjść",
      paragraphs: [
        "Byczyna mieści się prawie w całości wewnątrz owalu murów miejskich o obwodzie dziewięciuset dwunastu metrów — trzy tysiące trzysta osób na niecałych sześciu kilometrach kwadratowych. To najgęściej zabudowane miasteczko w okolicy i takie, w którym każda komunia, każda osiemnastka i każde wesele są wydarzeniem, o którym wie pół miasta. A wtedy tort przestaje być deserem i staje się zobowiązaniem.",
        "Powiem więc wprost, co przy nim robi to urządzenie, a czego nie.",
        "Robi masy — i to jest realnie największa część pracy. Ciasto biszkoptowe ubite tak, jak trzeba, bez trzymania miksera przez dziesięć minut. Krem budyniowy podgrzewany z mieszaniem, czyli bez grudek i bez przypalenia na dnie. Krem na maśle. Masa serowa na gładko. Nadzienie owocowe. Polewa. Mielone orzechy, herbatniki na spód, kajmak. Wszystko w jednym naczyniu, po kolei, bez czterech misek i bez zmywania między jednym a drugim.",
        "Nie upiecze. Blaty wędrują do piekarnika i to się nie zmieni.",
        "I nie ozdobi. To jest zdanie, którego nie ominę, bo w reklamach sprzętu kuchennego znika najczęściej: dekorowanie tortu to osobne rzemiosło. Równe przełożenie, wypoziomowanie, gładki bok, kwiatki z kremu — tego się uczy latami i żadne urządzenie nie robi z człowieka cukiernika. Jeśli tort ma wyglądać jak z pracowni, to trzeba albo lat wprawy, albo pójść do cukierni. Nie ma trzeciej drogi i nie będę udawać, że jest.",
        "Jedna rzecz praktyczna, na której wykłada się najwięcej osób: kremy na maśle są kapryśne. Jeśli masło i ugotowana masa mają różną temperaturę, krem się zwarzy — rozdzieli na tłuszcz i płyn — i wygląda to na katastrofę. Zwykle da się to uratować, ale najprościej po prostu wyjąć masło z lodówki odpowiednio wcześnie. Urządzenie pilnuje temperatury masy; temperatury masła musicie przypilnować sami.",
        "I na koniec uczciwie, choć to psuje sprzedaż: jeśli tort robicie raz w roku, nie warto się męczyć. Cukiernia zrobi to lepiej i taniej, niż wyjdzie Wam pierwsze podejście. To urządzenie ma sens przy tych, którzy pieką co miesiąc — a nie przy jednej komunii.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Byczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie przed sobą uroczystość, powiedzcie to przy umawianiu — zrobimy krem i zobaczycie, ile z tego naprawdę schodzi z głowy, a ile zostaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Byczynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla byczyńskiej rodziny",
      paragraphs: [
        "Byczyna liczy trzy tysiące trzysta mieszkańców, a cała gmina ponad osiem i pół tysiąca. Prawa miejskie ma sprzed 1268 roku, a pierwsza wzmianka o miejscowości pochodzi z 1054. Największym skarbem miasta są mury: eliptyczny pierścień o obwodzie dziewięciuset dwunastu metrów, zachowany niemal w całości, z Wieżą Bramy Polskiej, Wieżą Bramy Niemieckiej i Basztą Piaskową. Badania archeologiczne z lat 2009–2010 przyniosły niespodziankę — mury okazały się o dwa stulecia starsze, niż figurowało w rejestrze zabytków, i sięgają połowy XIII wieku. Same nazwy bram mówią o położeniu miasta: Byczyna leżała na granicy Śląska i Rzeczypospolitej. To pod tymi murami, 24 stycznia 1588 roku, hetman Jan Zamoyski w niecałe półtorej godziny pokonał arcyksięcia Maksymiliana Habsburga; kopia obrazu Matejki upamiętniającego bitwę wisi w ratuszu.",
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

  districtsHeading: "Do których części Byczyny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w murach i poza nimi — oraz do sołectw gminy, w tym Roszkowic, Biskupic i Polanowic, bez dopłaty za dojazd.",
    "Statut gminy przewiduje wyłącznie sołectwa, a miasto nie ma jednostek pomocniczych, więc nie będę wymyślać nazw dzielnic; przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Byczynę też przyjadę",
  nearbyParagraphs: [
    "Kluczbork, Wołczyn, Namysłów, Olesno i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kluczbork", "Wołczyn", "Namysłów", "Olesno", "Praszka", "Opole"],

  about: blokOMnie("do Byczyny", "w Byczynie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Byczyny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Byczynę w powiecie kluczborskim, nie o dzielnicę Jaworzna.",
    },
    ...faqWspolne("w Byczynie"),
    {
      question: "Co Thermomix robi przy torcie?",
      answer:
        "Masy, czyli największą część pracy: ciasto biszkoptowe, krem budyniowy podgrzewany z mieszaniem (bez grudek i bez przypalenia), krem na maśle, masę serową, nadzienia, polewy, mielone orzechy i spody z herbatników. Wszystko w jednym naczyniu, po kolei.",
    },
    {
      question: "Czy dzięki niemu tort będzie wyglądał jak z cukierni?",
      answer:
        "Nie. Dekorowanie to osobne rzemiosło — równe przełożenie, gładki bok, kwiatki z kremu — i uczy się tego latami. Żadne urządzenie nie robi z człowieka cukiernika i nie będę udawać, że jest inaczej.",
    },
    {
      question: "Dlaczego krem na maśle mi się warzy?",
      answer:
        "Najczęściej dlatego, że masło i ugotowana masa mają różną temperaturę — wtedy krem rozdziela się na tłuszcz i płyn. Urządzenie pilnuje temperatury masy, ale masło trzeba wyjąć z lodówki odpowiednio wcześnie samemu.",
    },
  ],

  geo: { lat: 51.1167, lng: 18.2167 },
};
