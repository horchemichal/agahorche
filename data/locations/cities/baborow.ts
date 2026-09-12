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
 * BABORÓW — miasto w powiecie głubczyckim, 2 793 mieszkańców
 * (31.12.2024, GUS); cała gmina 5 633. Prawa miejskie przed
 * 1340 r., UTRACONE W 1575 r. i ODZYSKANE DOPIERO W 1718 r.,
 * gdy cesarz Karol VI podniósł Baborów do rangi miasta —
 * czyli po 143 latach przerwy. Miasto należy do obszaru
 * nazywanego „POLSKIMI MORAWAMI": w spisie z 1890 r. CZESI
 * STANOWILI TU 82% MIESZKAŃCÓW (2 220 z 2 707), a miejscowa
 * gwara zaliczana jest do dialektu laskiego.
 *
 * KĄT: knedle — kuchnia morawska i czeska na parze. Miasto,
 * w którym jeszcze pod koniec XIX w. cztery piąte mieszkańców
 * mówiło po czesku, jest jedynym właściwym miejscem w serwisie
 * na danie, które w Polsce zna każdy, ale mało kto robi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że knedle gotuje się na parze albo we wrzątku i że urządzenie
 *   ma tu przewagę realną: Varoma robi to bez pilnowania
 *   i bez rozpadania się w garnku,
 * — że ciasto na knedle wyrabia się w naczyniu, a formuje
 *   rękami — i tego nie zdejmie,
 * — że knedle drożdżowe potrzebują czasu na wyrośnięcie i tego
 *   nie da się przyspieszyć,
 * — i że knedli nie wolno gotować pod ciężką pokrywą bez dostępu
 *   pary — sflaczeją.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI PRZEPISU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO ORZEKANIA, CZYJE SĄ KNEDLE. Piszę o czeskojęzycznej
 *   przeszłości tego konkretnego miasta, bo to fakt spisowy —
 *   a nie o tym, do kogo „należy" potrawa.
 * — ŻADNEGO POLITYKOWANIA WOKÓŁ TOŻSAMOŚCI. Morawianie nie są
 *   w Polsce uznaną mniejszością i w spisach nikt narodowości
 *   morawskiej nie zadeklarował; podaję to jako fakt i nie
 *   komentuję.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Pyzy i kluski ziemniaczane"
 * (Praszka) dotyczą CIASTA ZIEMNIACZANEGO i pułapki przemieszania.
 * „Pierogi" (Oleszyce) dotyczą lepienia i farszu. „Makaron"
 * (Radymno) dotyczy ciasta z mąki i jajek. Tutaj chodzi o KNEDLE
 * — ciasto drożdżowe albo bułczane, gotowane na parze — i o to,
 * że Varoma jest do nich stworzona.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnej daty pierwszych praw miejskich.
 *   Źródła podają trzy wersje (przed 1340, 1340, 1405).
 *   Pewna jest utrata w 1575 r. i przywrócenie w 1718 r.
 * — NIE PISZĘ, że działa tu cukrownia. NIE DZIAŁA: ostatnia
 *   kampania odbyła się w 2002 r., zakład zamknięto w 2004 r.
 *   po 132 latach, a spółka jest w likwidacji. Mimo to jedno
 *   ze źródeł internetowych wciąż twierdzi, że cukrownia
 *   „działa do dziś" — to nieprawda.
 * — NIE PODAJĘ NAZW FIRM ani liczby zatrudnionych; lista
 *   pracodawców na stronie gminy pochodzi z czerwca 2023 r.
 * — NIE PISZĘ, że Baborów ma dwujęzyczne tablice. NIE MA.
 *   Nazwa Bauerwitz jest historyczna, nie urzędowa.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak
 *   wpisu dla Baborowa; w powiecie jest olej głubczycki,
 *   ale to nie ta gmina.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * ŚWIADOMIE POMINIĘTE. W czasie wojny działały tu obozy pracy
 * jeńców brytyjskich i Commonwealthu. To prawda o tym mieście,
 * ale nie materiał na tło oferty handlowej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie przed 1340 r., utrata 1575 r., przywrócenie
 *   1718 r. przez cesarza Karola VI,
 * — spis z 1890 r.: 2 220 Czechów na 2 707 mieszkańców, czyli 82%;
 *   miasto należy do obszaru zwanego polskimi Morawami, a gwara
 *   do dialektu laskiego; narodowości morawskiej nie deklaruje
 *   dziś w spisach nikt, bo nie jest uznaną mniejszością,
 * — miasto założone prawdopodobnie przez czeskiego możnego
 *   Bavora, od którego imienia pochodzi nazwa,
 * — gleby klas I–III stanowią ponad 75% powierzchni gminy,
 * — cukrownia działała od 1872 r. do 2004 r.; po niej został
 *   klub sportowy „Cukrownik" założony w 1946 r.,
 * — kolej Głubczyce–Racibórz otwarto 15 października 1856 r.,
 * — 2 793 mieszkańców miasta, 5 633 gminy (31.12.2024).
 */
export const BABOROW: CityContent = {
  slug: "baborow",
  h1: "Thermomix Baborów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Baborów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Baborowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Baborów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Baborowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Baborowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Baborów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Knedle na parze. Jedno danie, do którego Varoma jest stworzona.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Baborowie – jak wygląda prezentacja?",
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
      id: "knedle",
      heading: "Miasto, w którym w 1890 roku cztery piąte ludzi mówiło po czesku",
      paragraphs: [
        "To nie jest ciekawostka z folderu, tylko liczba ze spisu: w 1890 roku w Baborowie mieszkało dwa tysiące dwieście dwadzieścia osób czeskojęzycznych na dwa tysiące siedemset siedem mieszkańców. Osiemdziesiąt dwa procent. Miasto należy do obszaru, który geografowie historyczni nazywają polskimi Morawami, a miejscowa gwara zaliczana jest do dialektu laskiego. Samo miasto założył prawdopodobnie czeski możny Bavor i od jego imienia wzięło nazwę.",
        "Trudno więc o lepsze miejsce, żeby napisać o knedlach — daniu, które w Polsce zna każdy, a robi mało kto.",
        "I zacznę od dobrej wiadomości, bo tu akurat jest o czym mówić: knedle to jedno z bardzo niewielu dań, do których funkcja gotowania na parze w tym urządzeniu jest wręcz stworzona.",
        "Powód jest praktyczny. Knedle gotowane we wrzątku lubią się rozpaść, nasiąknąć wodą albo skleić w jedną bryłę — i trzeba przy nich stać, obracać je i wyławiać. Na parze nic tego nie robi: leżą spokojnie w koszu, para dochodzi ze wszystkich stron, żaden nie dotyka drugiego i nic nie nasiąka. Wkładacie, zamykacie, wracacie po nie później. To jest różnica między daniem, które trzeba pilnować, a daniem, które robi się samo.",
        "Ciasto wyrabia się w naczyniu — i przy knedlach drożdżowych albo bułczanych to jest ta sama pomoc co przy każdym cieście drożdżowym: kilka minut maszyny zamiast dziesięciu minut rąk.",
        "Czego nie zdejmie: formowania. Dzielenie ciasta, toczenie kulek, zawijanie owoców w środku — to zostaje przy Waszych dłoniach i tak już będzie.",
        "Czego nie przyspieszy: wyrastania. Knedle drożdżowe muszą swoje odstać i to jest właściwość drożdży, nie sprzętu.",
        "I jedna rzecz techniczna, na której ludzie się przewracają: knedli nie wolno gotować w szczelnie zamkniętym naczyniu bez swobodnego przepływu pary. Para musi krążyć i uchodzić; jeśli nie ma tego jak zrobić, knedle zamiast urosnąć — sflaczeją i zrobią się gumowate. W koszu do gotowania na parze przepływ jest właśnie taki, jak trzeba.",
        "Nie podam Wam za to przepisu ani proporcji. W tej okolicy knedle robi się od pokoleń i są to receptury konkretnych domów — nie moja własność i nie moja rola, żeby rozstrzygać, które są właściwe.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Baborowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu robi się knedle, powiedzcie to przy umawianiu — ugotujemy je na parze i porównacie z tym, co wychodzi z garnka.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Baborowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla baborowskiej rodziny",
      paragraphs: [
        "Baborów liczy niecałe dwa tysiące osiemset mieszkańców, a cała gmina ponad pięć i pół tysiąca. Historia praw miejskich jest tu nietypowa: miasto miało je przed 1340 rokiem, straciło w 1575 i odzyskało dopiero w 1718, gdy cesarz Karol VI podniósł je z powrotem do rangi miasta — czyli po stu czterdziestu trzech latach przerwy. Gmina leży na jednych z najlepszych gleb w Polsce: klasy od pierwszej do trzeciej zajmują ponad trzy czwarte jej powierzchni. Przez sto trzydzieści dwa lata pracowała tu cukrownia; ostatnią kampanię przeprowadziła w 2002 roku, a w 2004 zamknięto ją na dobre. Została po niej między innymi nazwa miejscowego klubu sportowego, założonego w 1946 roku.",
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

  districtsHeading: "Do których części Baborowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Sułkowa, Dziećmarowa, Raków, Suchej Psiny i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Baborów też przyjadę",
  nearbyParagraphs: [
    "Głubczyce, Kietrz, Racibórz, Kędzierzyn-Koźle i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Głubczyce", "Kietrz", "Racibórz", "Kędzierzyn-Koźle", "Prudnik", "Opole"],

  about: blokOMnie("do Baborowa", "w Baborowie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Baborowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Baborowie"),
    {
      question: "Czy Thermomix nadaje się do knedli?",
      answer:
        "To jedno z bardzo niewielu dań, do których funkcja gotowania na parze jest wręcz stworzona. W koszu knedle leżą spokojnie, para dochodzi ze wszystkich stron, żaden nie dotyka drugiego i nic nie nasiąka wodą — w przeciwieństwie do gotowania we wrzątku, przy którym trzeba stać i obracać.",
    },
    {
      question: "Czego nie zrobi przy knedlach?",
      answer:
        "Nie uformuje ich — dzielenie ciasta, toczenie kulek i zawijanie owoców zostaje przy Waszych rękach. Nie przyspieszy też wyrastania ciasta drożdżowego; to właściwość drożdży, nie sprzętu.",
    },
    {
      question: "Dlaczego knedle czasem wychodzą gumowate?",
      answer:
        "Najczęściej dlatego, że gotowały się bez swobodnego przepływu pary. Para musi krążyć i uchodzić — w szczelnie zamkniętym naczyniu knedle zamiast urosnąć, sflaczeją. Kosz do gotowania na parze daje dokładnie taki przepływ, jaki trzeba.",
    },
  ],

  geo: { lat: 50.1575, lng: 17.9853 },
};
