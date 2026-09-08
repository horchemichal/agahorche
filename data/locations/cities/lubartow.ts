import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * LUBARTÓW — miasto nad Wieprzem, dwadzieścia sześć kilometrów od Lublina,
 * z dwoma wpisami na ministerialnej Liście Produktów Tradycyjnych: lodami
 * lubartowskimi i makowcem lubartowskim. Oba z jednej rodzinnej cukierni,
 * prowadzonej najpierw przez matkę, dziś przez córkę.
 *
 * KĄT: mak. Co urządzenie robi z makiem — i czego przy cieście
 * drożdżowym nie zrobi. To jedyne miejsce w serwisie, w którym mak jest
 * tematem, a nie wzmianką.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — mielenie maku to najbardziej znojna czynność w całym polskim
 *   cukiernictwie domowym i jedna z niewielu, w których urządzenie
 *   zastępuje sprzęt, którego dziś prawie nikt nie ma (maszynka
 *   z sitkiem do maku),
 * — realnie: mielenie, wyrabianie ciasta drożdżowego, masa makowa
 *   — wszystko w jednym naczyniu,
 * — czego NIE zrobi: nie wyrośnie ciasta za Was i nie upiecze go.
 *   Wyrastanie to czas, a pieczenie to piekarnik,
 * — i granica: nie podaję czasów ani ustawień, a przepis na makowiec
 *   z Listy Produktów Tradycyjnych należy do konkretnej rodziny
 *   i nie jest mój do rozdawania.
 *
 * TWARDE GRANICE:
 * — NIE PODAJĘ ANI NIE STRESZCZAM RECEPTURY makowca lubartowskiego
 *   ani lodów lubartowskich. To są wyroby konkretnej cukierni. Wymieniam
 *   je z nazwy jako fakt o mieście i odsyłam do źródła, nie kopiuję.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU CIAST.
 *
 * ROZGRANICZENIE. Kilka stron mówi o wypiekach ogólnie; Chmielnik
 * o zapisywaniu przepisów. Tutaj chodzi wyłącznie o MAK i o ciasto
 * drożdżowe.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy ok. dziewiętnastu i pół tysiąca mieszkańców
 *   (GUS, 31.12.2024); 65+ stanowi 24% mieszkańców,
 * — leży 26 km na północ od Lublina, nad Wieprzem,
 * — lody lubartowskie wpisano na Listę Produktów Tradycyjnych
 *   30 czerwca 2016 r.; zgłaszała je Maria Siej, prowadząca cukiernię
 *   od 1980 r.; jej matka robiła lody w Ostrowie Lubelskim od 1956 r.,
 *   mrożąc je lodem wyrąbywanym zimą z jezior,
 * — makowiec lubartowski też jest na tej liście; dziś piecze go
 *   Agnieszka Siej, córka Marii,
 * — miasto założono na mocy przywileju z 29 maja 1543 r. jako Lewartów;
 *   nazwę zmieniono na Lubartów w 1744 r. za zgodą Augusta III,
 * — bazylika św. Anny: budowa 1733–1738 wg projektu Pawła Antoniego
 *   Fontany, konsekracja 1738, tytuł bazyliki mniejszej od 2008 r.,
 * — w pałacu, dawnej rezydencji Sanguszków, od 1999 r. mieści się
 *   starostwo powiatowe,
 * — komunikacja miejska w mieście jest bezpłatna,
 * — bezrobocie w 2024 r. wyniosło 11,5%, wyraźnie powyżej krajowego.
 */
export const LUBARTOW: CityContent = {
  slug: "lubartow",
  h1: "Thermomix Lubartów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubartów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Lubartowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubartów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubartowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubartowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Lubartów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mak zmieli. Ciasta za Was nie wyrośnie.",
  },

  sections: [
    {
      id: "mak",
      heading: "Miasto makowca — i co urządzenie robi z makiem",
      paragraphs: [
        "Lubartów ma na ministerialnej Liście Produktów Tradycyjnych dwie pozycje i obie pochodzą z jednej rodzinnej cukierni. Lody lubartowskie zgłosiła Maria Siej, prowadząca cukiernię od tysiąc dziewięćset osiemdziesiątego roku — jej matka robiła lody jeszcze w Ostrowie Lubelskim od pięćdziesiątego szóstego, mrożąc je lodem wyrąbywanym zimą z jezior. Makowiec lubartowski piecze dziś Agnieszka Siej, córka Marii.",
        "Od razu zaznaczam jedną rzecz, żeby było jasno: nie podam Wam tej receptury ani jej nie streszczę. To jest wyrób konkretnej rodziny, robiony od pokoleń, i nie jest mój do rozdawania. Piszę o maku dlatego, że to jest w tym mieście temat, a nie dlatego, żeby podpiąć się pod cudzą pracę.",
        "A mak jest tematem wdzięcznym, bo mielenie maku to prawdopodobnie najbardziej znojna czynność w całym polskim cukiernictwie domowym. Robi się to maszynką z drobnym sitkiem, przepuszczając masę dwa albo trzy razy, i zajmuje to tyle, że wiele osób po prostu kupuje gotową masę. Maszynki z sitkiem do maku prawie nikt już nie ma, a ta, która jest, zwykle stoi u kogoś w piwnicy.",
        "To jest jedna z niewielu czynności, w których to urządzenie naprawdę zastępuje sprzęt, a nie tylko wygodę. Mak da się w nim zmielić, a potem w tym samym naczyniu połączyć z resztą składników na masę. Nie trzeba przekładać, nie trzeba myć trzech rzeczy i nie trzeba szukać maszynki.",
        "Druga rzecz to ciasto drożdżowe. Wyrabianie jest tu robione mechanicznie, więc nie trzeba go wybijać ręką przez kwadrans — i to jest realna różnica, zwłaszcza przy większej porcji. Ale zaraz za tym idzie granica, o której trzeba powiedzieć wprost.",
        "Urządzenie nie wyrośnie ciasta za Was. Wyrastanie to czas i temperatura w Waszej kuchni, a nie funkcja w menu — ciasto drożdżowe potrzebuje swojego, tak samo jak potrzebowało sto lat temu. I nie upiecze go: pieczenie to piekarnik i tak zostanie. Kto obiecuje, że to urządzenie „robi ciasta”, mówi o jednym etapie, udając, że mówi o wszystkich.",
        "Nie podam też czasów ani ustawień — po pierwsze dlatego, że w ogóle tego na tej stronie nie robię, a po drugie dlatego, że przy cieście drożdżowym każda kuchnia jest inna i przepisane z internetu minuty nic tu nie dają.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Lubartowie – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubartowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu swój przepis na ciasto z makiem, weźmy go na spotkanie. Zobaczycie na własnym cieście, co się skraca, a co zostaje bez zmian.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubartowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubartowskiej rodziny",
      paragraphs: [
        "Do Lublina jest stąd dwadzieścia sześć kilometrów i sporo osób tam pracuje, więc obiad powstaje po powrocie i przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Lubartowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle albo ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Kopernika", "3 Maja", "Garbarskie", "Parkowa", "Popiełuszki"],

  nearbyHeading: "Poza Lubartów też przyjadę",
  nearbyParagraphs: [
    "Kamionka, Firlej, Niedźwiada i wsie gminy wiejskiej są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kamionka", "Firlej", "Niedźwiada", "Ostrów Lubelski", "Kock", "Niemce"],

  about: blokOMnie("do Lubartowa", "w Lubartowie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubartowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lubartowie"),
    {
      question: "Zmieli w tym mak na makowiec?",
      answer:
        "Tak i to jedna z tych czynności, w których urządzenie realnie zastępuje sprzęt, którego dziś prawie nikt nie ma — maszynkę z drobnym sitkiem. Mak mieli się, a potem w tym samym naczyniu łączy z resztą składników na masę, bez przekładania.",
    },
    {
      question: "Czy to zrobi za mnie ciasto drożdżowe?",
      answer:
        "Wyrabianie tak — mechanicznie, bez wybijania ręką. Ale wyrastania nie przyspieszy i ciasta nie upiecze. Wyrastanie to czas i temperatura w Waszej kuchni, a pieczenie to piekarnik i tak zostanie. Kto mówi, że urządzenie „robi ciasta”, opisuje jeden etap tak, jakby to były wszystkie.",
    },
    {
      question: "Dostanę przepis na makowiec lubartowski?",
      answer:
        "Nie ode mnie. To wyrób konkretnej rodzinnej cukierni, wpisany na ministerialną Listę Produktów Tradycyjnych, i nie jest mój do rozdawania. Chętnie za to pokażę, co urządzenie robi z makiem na Waszym własnym, domowym przepisie.",
    },
  ],

  geo: { lat: 51.4597, lng: 22.6103 },
};
