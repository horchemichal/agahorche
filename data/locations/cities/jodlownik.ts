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
 * JODŁOWNIK — gmina bez własnej pracy i bez drogi wyższej kategorii,
 * za to z najmłodszą ludnością w okolicy i z ciastem, które ma
 * ministerialny wpis. To są dwie osie tej strony.
 *
 * Nie przechodzi tędy ani droga krajowa, ani wojewódzka. Nie ma tu
 * żadnego dużego zakładu. Ludzie dojeżdżają — najczęściej do Tymbarku
 * i do Limanowej — i wracają wieczorem do dwunastu rozrzuconych
 * sołectw. A jednocześnie to gmina, która rośnie najszybciej z całego
 * korytarza i ma najniższy średni wiek. Tekst jest pisany dla młodych
 * rodzin w domach na sadach, nie dla „mieszkańców gminy wiejskiej”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 8 792 mieszkańców, GUS, stan na 31.12.2024; wzrost o 10,0%
 *   w latach 2002–2024; przyrost naturalny 2024 dodatni (+7),
 * — średni wiek 37,9 lat, udział osób 65+ tylko 15,3% przy 19,8%
 *   dla Polski — najmłodsza gmina z tej trójki,
 * — 12 sołectw; liczby wg NSP 2021: Wilkowisko 1 295, Jodłownik 1 130,
 *   Szyk 1 064, Janowice 966, Szczyrzyc 789, Pogorzany 780,
 *   Krasne-Lasocice 702, Sadek 508, Mstów 442, Kostrza 410,
 *   Góra Świętego Jana 319, Słupia 306,
 * — powierzchnia 72,2 km², gęstość 121 os./km², lesistość 19,1%
 *   (GUS 2019) — najniższa w okolicy; szczyty Ciecień 829 m
 *   i Kostrza 719 m,
 * — sady zajmują ponad 30% użytków rolnych (jodlownik.pl),
 * — opactwo Cystersów w Szczyrzycu: fundacja 1234 r. (Teodor Gryfita),
 *   jedyny nieprzerwanie istniejący klasztor cystersów w Polsce;
 *   muzeum klasztorne działa od ponad 60 lat; Szczyrzyc miał prawa
 *   miejskie od 1417 r.,
 * — Szlak Architektury Drewnianej: kościół Narodzenia NMP w Jodłowniku
 *   (1585, rokokowa polichromia z 2. poł. XVIII w.), kościół w Szyku
 *   (1633), kościół w Wilkowisku (1921–1927),
 * — Lachy Szczyrzyckie — grupa etnograficzna ze stolicą w Szczyrzycu;
 *   Związek Szczyrzycan i zespół regionalny od 1926 r.,
 * — zespoły: „Szczyrzycanie” i „Mali Szczyrzycanie”, „Pnioki” (Kostrza),
 *   „Śwarni Łojce” i „Sami Swoi” (Krasne-Lasocice), „Wilkowicanie”,
 *   dwie parafialne orkiestry dęte,
 * — „jodłownicki kołacz z serem” — ministerialna Lista Produktów
 *   Tradycyjnych, wpis z 24.04.2006; otoka z ciasta drożdżowego
 *   i miąższ z sera, pieczony na wesela i święta,
 * — Święto Owocobrania z Jarmarkiem Cysterskim — Szczyrzyc, 15 sierpnia,
 * — przez wieś Jodłownik nie przebiega żadna droga krajowa ani
 *   wojewódzka; do Limanowej ok. 18 km, do Krakowa ok. 52 km,
 * — budowana linia kolejowa nr 622 Szczyrzyc–Tymbark: 8 km, dwa tunele,
 *   nowa stacja Szczyrzyc, zakończenie zapowiadane na połowę 2029 r.
 *   (PKP PLK, umowa z 6.10.2025).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — bezrobocia w powiecie (7,6% w X.2025 przy 4,6% w Małopolsce,
 *   56,4% bezrobotnych to kobiety) i wynagrodzeń na poziomie 80%
 *   średniej krajowej. To kontekst, w którym trzeba rozmawiać o cenie
 *   i racie — ale nie treść na stronę,
 * — zdania, że „gmina się wyludnia”. Nieprawda: rośnie od dwóch dekad,
 * — obietnicy, że „dojedziesz pociągiem”. Linia 622 jest w budowie,
 *   pierwsze pociągi najwcześniej pod koniec dekady,
 * — smogu i dotacji na wymianę kotłów. Temat realny, ale mieszkańcy
 *   odbierają go jako oskarżenie z zewnątrz,
 * — powodzi i osuwisk. W tej akurat gminie nie znalazłam twardych
 *   danych, a bez nich to byłoby straszenie,
 * — emigracji zarobkowej. Żadne źródło nie podaje skali; „mężowie
 *   na saksach” byłby stereotypem bez pokrycia,
 * — kto zgłosił kołacz na Listę Produktów Tradycyjnych — brak w MRiRW.
 *
 * PUŁAPKA: przez gminę NIE przechodzi DK28. Ona zaczyna się dopiero
 * w Tymbarku. Nie wolno napisać „przy krajowej dwudziestce ósmej”.
 */
export const JODLOWNIK: CityContent = {
  slug: "jodlownik",
  h1: "Thermomix Jodłownik – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Jodłownik — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Jodłownik: bezpłatna prezentacja TM7 u Ciebie w kuchni — Szczyrzyc, Wilkowisko, Szyk, Janowice i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Jodłownik — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Jodłownik. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Jodłownik przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwunastu sołectw.",

  highlights: highlightyStandardowe("cała gmina Jodłownik, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jodłowniku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu w Szczyrzycu, jak na końcu Krasnego-Lasocic.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina, w której piecze się od dawna i na wyścigi",
      paragraphs: [
        "W Jodłowniku jest coś, czego nie ma żadna sąsiednia gmina: własny wpis na ministerialnej Liście Produktów Tradycyjnych. Jodłownicki kołacz z serem — okrągły, z otoką z ciasta drożdżowego i grubym serowym miąższem — pieczono tu na wesela i święta, a w opisie produktu zapisano wprost, że gospodynie rywalizowały, która upiecze lepszy. To nie jest folklor sprzed stu lat. To wciąż ta sama kuchnia i te same domy.",
        "Wokół są sady. Ponad trzydzieści procent użytków rolnych w tej gminie to jabłonie, grusze i śliwy — przy niecałych dwudziestu procentach lasu, czyli najmniej w całej okolicy. Sierpień i wrzesień wyglądają tu inaczej niż w Beskidzie: to miesiące zbiorów, przetworów i słoików, a nie wypadów w góry.",
        "Druga rzecz, którą widać w liczbach: to najmłodsza gmina w korytarzu. Średni wiek poniżej trzydziestu ośmiu lat, ludzi przybywa od dwóch dekad, a urodzeń jest więcej niż zgonów. Mówiąc wprost — bardzo dużo tu małych dzieci i bardzo dużo kuchni, w których gotuje się codziennie i dla kilku osób naraz.",
        "Trzecia to praca. W gminie nie ma dużego zakładu i nie przechodzi tędy ani droga krajowa, ani wojewódzka. Do Tymbarku, gdzie jest zakład sokowy, jest kilkanaście kilometrów; do Limanowej podobnie; do Krakowa nieco ponad godzina. To znaczy, że w większości domów ktoś codziennie wyjeżdża rano i wraca po siedemnastej.",
        "Dla kuchni te trzy rzeczy składają się w jedno pytanie: jak zrobić porządny obiad dla rodziny z dziećmi, wieczorem, po dniu poza domem, w sezonie, w którym połowa blatu i tak jest zajęta przez owoce. Odpowiadam na nie uczciwie — Thermomix nie gotuje za nikogo i nie zastąpi wprawy. Zabiera co innego: konieczność stania obok i pilnowania. Zupa może się gotować, kiedy Ty rozpakowujesz zakupy albo odbierasz dziecko, i sama się wyłączy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Jodłownik?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, w którym sołectwie mieszkasz. W tej gminie to nie jest formalność: sołectw jest dwanaście, są rozrzucone po wzgórzach i dojeżdża się do nich drogami powiatowymi, a nie jedną główną trasą. Od nazwy miejscowości zależy, którego dnia w ogóle jestem w Waszej części gminy.",
        "Podaj też, ile osób będzie na spotkaniu i czy w domu są małe dzieci. Pierwsze pozwala mi dobrać przepisy i wziąć więcej składników, drugie — zaplanować godzinę tak, żeby nie wypadła w porze snu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Jodłownik"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu z małymi dziećmi i z sadem za oknem",
      paragraphs: [
        "W gminie o takiej strukturze wieku najczęstsza sytuacja jest prosta: dwoje dorosłych, z czego przynajmniej jedno dojeżdża, i dwójka albo trójka dzieci w różnym wieku. Obiad musi powstać między siedemnastą a osiemnastą, być zjadalny dla wszystkich i najlepiej wystarczyć jeszcze na jutro.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować bez nadzoru i po prostu poczekać. Nie trzeba stać obok, nie trzeba mieszać, urządzenie samo wyłącza się w odpowiednim momencie — a Ty w tym czasie robisz to, czego i tak nie da się odłożyć.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — w domu, gdzie rodzic wraca po siedemnastej, to bywa realną pomocą, nie ciekawostką.",
        "Osobno warto powiedzieć o sezonie. Przy takiej ilości sadów jak tutaj wrzesień to miesiąc słoików: musy, powidła, soki, mrożonki. Wszystko to da się robić partiami, bez stania nad garnkiem, i to jest chyba najczęściej wymieniany powód, dla którego ktoś w tej gminie w ogóle zaczyna się nad urządzeniem zastanawiać.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Jodłownik dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwunastu sołectw i bez żadnej dopłaty za odległość: Jodłownika, Szczyrzyca, Wilkowiska, Szyku, Janowic, Pogorzan, Krasnego-Lasocic, Sadku, Mstowa, Kostrzy, Góry Świętego Jana i Słupi.",
    "To jedna z bardziej rozdrobnionych gmin w okolicy — żadna miejscowość nie skupia nawet piętnastu procent mieszkańców, a największe są Wilkowisko i sam Jodłownik. Nie ma tu jednego centrum, przez które wszystko przechodzi, i nie ma drogi wyższej kategorii. Dlatego przy umawianiu proszę o nazwę sołectwa, a nie o samą „gminę Jodłownik”: od tego zależy trasa i godzina.",
    "Osobno zaznaczam Szczyrzyc, bo to miejsce, do którego przyjeżdżają ludzie z całej okolicy. Opactwo Cystersów działa tu nieprzerwanie od trzynastego wieku — jako jedyne w Polsce — a sam Szczyrzyc był kiedyś miastem. Piętnastego sierpnia odbywa się tu Święto Owocobrania z Jarmarkiem Cysterskim i tego dnia dojazd wygląda zupełnie inaczej niż zwykle. Jeśli umawiamy się w okolicach tej daty, powiedzcie od razu.",
    "W Jodłowniku, Szyku i Wilkowisku stoją drewniane kościoły ze Szlaku Architektury Drewnianej — ten w Jodłowniku pochodzi z 1585 roku i ma rokokową polichromię. Wspominam o tym, bo bywają dni odpustów i uroczystości, kiedy wolę nie wchodzić z prezentacją w środek parafialnego kalendarza.",
  ],
  districts: [
    "Jodłownik",
    "Szczyrzyc",
    "Wilkowisko",
    "Szyk",
    "Janowice",
    "Pogorzany",
    "Krasne-Lasocice",
    "Sadek",
    "Mstów",
    "Kostrza",
    "Góra Świętego Jana",
    "Słupia",
  ],

  nearbyHeading:
    "Tymbark, Limanowa i gminy wokół Bochni też są na mojej trasie",
  nearbyParagraphs: [
    "Jodłownik leży dokładnie pomiędzy dwiema moimi trasami: tą wokół Bochni, przez Łapanów i Żegocinę, i tą limanowską, przez Tymbark i Dobrą. Do każdej z tych gmin dojeżdżam bez dopłaty i granica powiatu nie zmienia niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim — a przy takiej rozrzuconej zabudowie jak tutaj to naprawdę pomaga.",
  ],
  nearbyTowns: [
    "Tymbark",
    "Dobra",
    "Limanowa",
    "Łapanów",
    "Żegocina",
    "Trzciana",
    "Bochnia",
    "Kraków",
  ],

  about: blokOMnie("do Jodłownika", "w powiecie limanowskim"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Jodłownik?",
      answer:
        "Tak — do wszystkich dwunastu, od Szczyrzyca i Wilkowiska po Słupię, Mstów i Górę Świętego Jana. Dojazd jest bezpłatny i nie zależy od tego, jak daleko od głównej drogi mieszkasz. W tej gminie i tak jedzie się wszędzie drogami powiatowymi.",
    },
    ...faqWspolne("w gminie Jodłownik"),
    {
      question: "Mam małe dzieci i nie chcę wychodzić z domu. Czy to problem?",
      answer:
        "Przeciwnie — to najczęstszy powód, dla którego przyjeżdżam do domu, a nie zapraszam do siebie. Dzieci mogą kręcić się przy stole, a jeśli któreś zechce pomóc przy gotowaniu, to jeszcze lepiej. Powiedz tylko przy umawianiu, w jakim są wieku, żebym dobrała godzinę i coś, co da się z nimi zrobić.",
    },
    {
      question: "Czy poradzę sobie z przetworami z własnego sadu?",
      answer:
        "Tak i w tej gminie pytają o to najczęściej. Musy, powidła, soki i pasty owocowe robi się partiami, bez stania nad garnkiem i bez mieszania. Jeśli chcesz, na prezentacji zrobimy coś dokładnie z tego, co masz akurat w domu — to lepszy sprawdzian niż jakikolwiek przepis z ulotki.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 49.7775, lng: 20.240833 },
};
