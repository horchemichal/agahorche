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
 * SKALBMIERZ — miasto w powiecie kazimierskim, 1 186 mieszkańców
 * (31.12.2024, GUS); cała gmina 6 085. Prawa miejskie nadane
 * 20 LUTEGO 1342 r. przez Kazimierza Wielkiego, utracone ukazem
 * carskim z 1 czerwca 1869 r., ODZYSKANE W 1927 r. (tymczasowa
 * rada miejska 31.03.1927, Rada Miejska 27.07.1927).
 * W GMINIE 58,7% AKTYWNYCH ZAWODOWO PRACUJE W SEKTORZE
 * ROLNICZYM — udział rzadko spotykany nawet w Polsce wschodniej.
 *
 * UWAGA — HOMONIM: SKARBIMIERZ to gmina w woj. opolskim
 * (powiat brzeski), z dawnym lotniskiem i strefą ekonomiczną.
 * To INNA miejscowość. Dodatkowo dawna forma nazwy Skalbmierza
 * brzmiała „Skarbimierz" — stąd Stanisław ze Skarbimierza,
 * który pochodził właśnie stąd.
 *
 * KĄT: składniki prosto z gospodarstwa — czyli gotowanie
 * z surowca, którego nikt nie ujednolicił. Miasto, w którym
 * niemal sześciu na dziesięciu pracujących żyje z roli, jest
 * jedynym właściwym miejscem na stronę o tym, że przepis zakłada
 * warzywo ze sklepu, a Wy macie warzywo z pola.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepisy pisze się pod surowiec standardowy: jajko
 *   rozmiaru L, marchewka ze sklepu, ziemniak jednej odmiany,
 * — że surowiec z gospodarstwa jest nierówny i to nie jest wada,
 *   tylko fakt, który trzeba uwzględnić — smakując i poprawiając,
 * — że urządzenie NICZEGO NIE UMYJE ANI NIE OBIERZE, a przy
 *   warzywach z ziemi to jest połowa roboty,
 * — i że przy mleku prosto od krowy NIE DORADZAM — to nie jest
 *   moja dziedzina.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD DOTYCZĄCYCH MLEKA NIEPASTERYZOWANEGO,
 *   surowych jaj ani mięsa z uboju gospodarczego. To jest
 *   bezpieczeństwo żywności i odmowa stoi w tekście wprost.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o jedzeniu „ze wsi",
 *   ani o żywności ze sklepu. Nie przeciwstawiam sobie jednego
 *   i drugiego wartościująco.
 * — ŻADNEJ ROMANTYZACJI PRACY W ROLNICTWIE. Piszę o tym jak
 *   o pracy, którą ci ludzie wykonują, a nie jak o sielance.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Najpierw zakupy, potem
 * przepis" (Kock) dotyczy KOLEJNOŚCI planowania. „Szatkowanie
 * warzyw na surowo" (Pilzno) dotyczy jednej czynności.
 * „Pora roku" (inne miasto) dotyczy sezonowości. Tutaj chodzi
 * o JAKOŚĆ I NIERÓWNOŚĆ SUROWCA — o to, że przepis kłamie,
 * kiedy pisze „jedna marchewka".
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że gmina żyje z warzywnictwa. Potwierdzona jest
 *   dominacja rolnictwa (58,7%), ale nie konkretna specjalizacja
 *   ani żadne grupy producenckie. Piszę „rolnictwo".
 * — NIE PODAJĘ największego pracodawcy. Nie znaleziono żadnego
 *   dużego zakładu.
 * — NIE PISZĘ, że kościół św. Jana Chrzciciela JEST kolegiatą.
 *   Był nią do 1819 r.; dziś to kościół parafialny, a nazwa
 *   „kolegiata" jest zwyczajowa. To rozróżnienie jest świadome.
 * — NIE ROZSTRZYGAM, czy lokacja z 1342 r. była na prawie
 *   średzkim czy magdeburskim. Źródła podają obie wersje.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Skalbmierza nic nie potwierdzono („Fitka kazimierska"
 *   jest przypisana do powiatu, nie do tego miasta).
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA; 23 sołectwa gminy to sołectwa, nie dzielnice.
 *
 * ŚWIADOMIE POMINIĘTE. 5 sierpnia 1944 r. Niemcy przeprowadzili
 * tu pacyfikację — zginęło 86 polskich cywilów, w tym jedenaście
 * kobiet i siedemnaścioro dzieci, a spłonęło około sześćdziesięciu
 * procent zabudowy miasta. To jest prawda o tym mieście, ale
 * strona handlowa o sprzęcie kuchennym nie jest miejscem,
 * w którym wolno tego używać jako tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 20 lutego 1342 r. (Kazimierz Wielki),
 *   utrata ukazem z 1 czerwca 1869 r., odzyskanie w 1927 r.,
 * — 1 186 mieszkańców miasta, 6 085 gminy (31.12.2024),
 * — 58,7% aktywnych zawodowo pracuje w sektorze rolniczym,
 * — Stanisław ze Skarbimierza, syn tutejszego mieszczanina,
 *   w 1400 r. został pierwszym rektorem odnowionej Akademii
 *   Krakowskiej; miasto organizuje coroczny tydzień jego imienia,
 * — kościół św. Jana Chrzciciela: gotycki, XV-wieczny,
 *   z zachowanymi reliktami romańskimi z XII–XIII w.;
 *   kolegiatą był do 1819 r.,
 * — pierwsza wzmianka o miejscowości: 1217 r.
 */
export const SKALBMIERZ: CityContent = {
  slug: "skalbmierz",
  h1: "Thermomix Skalbmierz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skalbmierz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Skalbmierzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skalbmierz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skalbmierzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skalbmierza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Skalbmierz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis mówi „jedna marchewka”. Wasza marchewka ma swoje zdanie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skalbmierzu – jak wygląda prezentacja?",
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
      id: "z-gospodarstwa",
      heading: "Miasto, w którym sześciu na dziesięciu pracujących żyje z roli",
      paragraphs: [
        "W gminie Skalbmierz blisko pięćdziesiąt dziewięć procent pracujących zawodowo pracuje w rolnictwie. To udział, jakiego nie ma prawie nigdzie indziej w Polsce — nawet na wschodzie kraju. W praktyce znaczy to tyle, że w bardzo wielu domach warzywo na obiad nie przyjeżdża z centrum handlowego, tylko z własnego pola albo od sąsiada zza miedzy.",
        "I dlatego napiszę tu rzecz, która w książkach kucharskich nie stoi: przepisy pisze się pod surowiec ujednolicony. „Jedna marchewka”, „jedno jajko”, „pół kilo ziemniaków” — to zakłada marchewkę ze sklepu, jajko rozmiaru L i ziemniaka jednej odmiany, wszystko podobne do siebie jak odlewy.",
        "Wasz surowiec taki nie jest. Marchew z pola potrafi być dwa razy grubsza i słodsza, jajka od własnych kur bywają raz małe, raz ogromne, ziemniak z jednej odmiany się rozpada, a z drugiej trzyma kształt do końca. To nie jest wada i nie jest to problem do rozwiązania. To po prostu trzeba wiedzieć i uwzględniać — czyli smakować w trakcie i poprawiać, zamiast wierzyć gramaturze.",
        "Urządzenie w tym pomaga o tyle, że ma wbudowaną wagę, więc zamiast „jednej marchewki” można raz zważyć swoją i zapamiętać, ile to u Was naprawdę jest. Po dwóch, trzech razach przestajecie zgadywać.",
        "Czego natomiast nie zrobi, a przy warzywach z ziemi to jest połowa całej roboty: nie umyje i nie obierze. Ziemia, obieranie, wycinanie — to zostaje przy Waszych rękach i przy zlewie, tak samo jak dotąd. Nie sprzedaję Wam bajki, że to koniec pracy w kuchni; to jest koniec stania nad garnkiem, a to co innego.",
        "I jedna rzecz, przy której nie ustąpię. Jeżeli macie mleko prosto od krowy albo jajka i mięso z własnego gospodarstwa — nie doradzę Wam, co z nimi wolno zrobić, a czego nie. To jest dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową, nie technologiem. Po tę wiedzę idźcie do rzetelnego źródła, nie do osoby, która sprzedaje sprzęt.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skalbmierzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie własne warzywa, przygotujcie kilka sztuk — zrobimy z nich coś na miejscu, zamiast z tego, co przywiozę ze sklepu. To uczciwszy test.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skalbmierzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skalbmierskiej rodziny",
      paragraphs: [
        "Skalbmierz liczy niecałe tysiąc dwieście mieszkańców, a cała gmina ponad sześć tysięcy. Prawa miejskie nadał mu Kazimierz Wielki 20 lutego 1342 roku; miasto straciło je ukazem carskim z 1 czerwca 1869 roku i odzyskało już w 1927 — czyli o ponad dziewięćdziesiąt lat wcześniej niż sąsiednia Pierzchnica czy Nowy Korczyn. Stąd pochodził Stanisław ze Skarbimierza, syn tutejszego mieszczanina, który w 1400 roku został pierwszym rektorem odnowionej Akademii Krakowskiej; miasto co roku organizuje tydzień jego imienia. Gotycki kościół świętego Jana Chrzciciela z XV wieku ma zachowane relikty romańskie z XII–XIII stulecia.",
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

  districtsHeading: "Do których części Skalbmierza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Topoli, Drożejowic, Kobylnik i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Skalbmierz też przyjadę",
  nearbyParagraphs: [
    "Kazimierza Wielka, Działoszyce, Proszowice, Koszyce, Pińczów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kazimierza Wielka", "Działoszyce", "Proszowice", "Koszyce", "Pińczów", "Wiślica"],

  about: blokOMnie("do Skalbmierza", "w Skalbmierzu i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skalbmierza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Skalbmierz w świętokrzyskim, nie o Skarbimierz w opolskim.",
    },
    ...faqWspolne("w Skalbmierzu"),
    {
      question: "Czy Thermomix umyje i obierze warzywa z pola?",
      answer:
        "Nie. Mycie, obieranie i wycinanie zostaje przy Waszych rękach i przy zlewie — a przy warzywach prosto z ziemi to jest połowa całej roboty. Urządzenie odbiera stanie nad garnkiem, nie przygotowanie surowca.",
    },
    {
      question: "Przepisy nie pasują do moich warzyw z ogrodu — co z tym zrobić?",
      answer:
        "Przepisy zakładają surowiec ujednolicony: marchewkę ze sklepu, jajko rozmiaru L, ziemniaka jednej odmiany. Wasz jest nierówny i to normalne. Warto raz zważyć własną marchewkę na wbudowanej wadze i zapamiętać, ile to u Was naprawdę jest — po dwóch, trzech razach przestaje się zgadywać.",
    },
    {
      question: "Mam mleko prosto od krowy i jajka od własnych kur — co mogę z nimi zrobić?",
      answer:
        "Tego nie doradzę i przy tym pytaniu nie ustąpię. To jest dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową, nie technologiem żywności. Po tę wiedzę trzeba pójść do rzetelnego źródła, nie do osoby, która sprzedaje sprzęt.",
    },
  ],

  geo: { lat: 50.3197, lng: 20.3993 },
};
