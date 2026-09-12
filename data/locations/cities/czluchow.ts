import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * CZŁUCHÓW — miasto powiatowe, 12 958 mieszkańców (31.12.2024,
 * GUS). W briefie było 14 000 — zawyżone.
 *
 * ZAMEK KRZYŻACKI: druga co do wielkości warownia zakonu po
 * Malborku. Spłonął w 1793 r., a potem — i to jest fakt, którego
 * nie wymyśliłam — został ROZEBRANY PRZEZ SAMYCH MIESZKAŃCÓW
 * na materiał budowlany. Została WIEŻA GŁÓWNA, ok. 46 m,
 * jedyny zachowany element. Dziś w niej i w skrzydle
 * przyzamkowym działa muzeum regionalne.
 *
 * CZTERY JEZIORA w granicach miasta.
 *
 * GOSPODARKA: NIE ZNALAZŁAM dużego pracodawcy. Miasto żyje
 * z usług, administracji powiatowej i drobnych firm. To jest
 * ustalenie negatywne i tak je traktuję — NIE WYMYŚLAM zakładu,
 * którego nie ma.
 *
 * KĄT: ODGRZEWANIE. Co się dzieje z jedzeniem, które się odgrzewa
 * — i co z tym robi urządzenie, a czego nie zrobi. Kąt bierze się
 * wprost z historii miasta: Człuchów jest miejscem, gdzie coś
 * dobrego zostało rozebrane na części i użyte drugi raz, do
 * czegoś innego. Odgrzewanie to dokładnie to samo, tylko
 * w kuchni — i najczęściej wychodzi gorzej niż za pierwszym
 * razem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że odgrzewanie w mikrofalówce i odgrzewanie w garnku to dwie
 *   różne rzeczy i dają dwa różne efekty,
 * — że to urządzenie odgrzewa dobrze rzeczy MOKRE (zupy, sosy,
 *   gulasze, kasze z sosem), bo grzeje z mieszaniem i od dołu,
 *   a nie punktowo,
 * — że kotleta, pizzy ani niczego, co ma być chrupiące, nie
 *   odgrzeje i nie będę udawać, że odgrzeje,
 * — że część potraw naprawdę jest lepsza drugiego dnia, a część
 *   nie i żaden sprzęt tego nie zmieni,
 * — że najlepszym rozwiązaniem nie jest lepsze odgrzewanie, tylko
 *   gotowanie od razu w porcjach.
 *
 * TWARDE GRANICE — TU SZCZEGÓLNIE OSTRE:
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI. Ile dni jedzenie
 *   może stać w lodówce, ile razy wolno odgrzewać, co z ryżem,
 *   co z drobiem — TEGO NIE PISZĘ. To jest realne ryzyko
 *   zatrucia i odmowa musi stać w tekście wyraźnie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie na zapas
 * i mrożenie" (Stopnica) dotyczy PLANOWANIA i zamrażarki.
 * „Czerstwy chleb" (Bodzentyn) dotyczy jednego produktu
 * i marnowania. „Jedzenie zabrane w drogę" (Daleszyce) dotyczy
 * transportu i termosu. Tutaj chodzi o sam MOMENT PODGRZANIA
 * i o to, co ciepło robi z jedzeniem za drugim razem.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że zamek zniszczyli Szwedzi, Prusacy ani wojna.
 *   Rozebrali go mieszkańcy po pożarze 1793 r.
 * — NIE PODAJĘ dokładnej wysokości wieży jako pewnej — źródła
 *   podają około 46 m i tak to zapisuję.
 * — NIE WYMIENIAM żadnego zakładu pracy, bo dużego nie ma.
 * — NIE PODAJĘ nazw ani liczby jezior jako atrakcji turystycznej
 *   z frekwencją.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych — dla
 *   Człuchowa nie potwierdziłam żadnego.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 12 958 mieszkańców (31.12.2024, GUS),
 * — zamek krzyżacki, druga po Malborku warownia zakonu; pożar
 *   1793 r., rozbiórka przez mieszkańców, zachowana wieża
 *   ok. 46 m, dziś muzeum,
 * — cztery jeziora w granicach miasta,
 * — miasto powiatowe bez dużego zakładu przemysłowego.
 */
export const CZLUCHOW: CityContent = {
  slug: "czluchow",
  h1: "Thermomix Człuchów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Człuchów (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Człuchowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i powiat. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Człuchów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Człuchowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Człuchowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do gminy.",

  highlights: highlightyStandardowe("Człuchów i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zupa drugiego dnia — tak. Kotlet drugiego dnia — nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Człuchowie – jak wygląda prezentacja?",
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
      id: "odgrzewanie",
      heading: "Miasto, które rozebrało własny zamek — czyli o odgrzewaniu",
      paragraphs: [
        "W Człuchowie stała druga po Malborku warownia zakonu krzyżackiego. W 1793 roku spłonęła, a potem mieszkańcy rozebrali ją na materiał budowlany. Nie Szwedzi, nie wojna — sami. Została wieża, około czterdziestu sześciu metrów, i w niej jest dziś muzeum. Coś dobrego zostało użyte drugi raz, do czegoś zupełnie innego, i nikt nie udaje, że wyszło tak samo jak oryginał.",
        "To jest dokładnie historia odgrzewania. Więc o odgrzewaniu napiszę — bo to jest rzecz, którą robimy wszyscy, kilka razy w tygodniu, i której nikt nie tłumaczy uczciwie.",
        "Zacznę od tego, czego to urządzenie NIE zrobi. Nie odgrzeje kotleta. Nie odgrzeje pizzy, nie odgrzeje frytek, nie odgrzeje niczego, co ma być chrupiące. To jest naczynie z podgrzewanym dnem i mieszadłem — nie ma jak wysuszyć powierzchni, więc panierka wyjdzie z niego miękka. Kto Wam powie inaczej, ten sprzedaje. Do chrupiących rzeczy jest piekarnik albo patelnia i tak zostanie.",
        "Teraz to, co robi dobrze — i robi naprawdę dobrze. Wszystko, co jest mokre. Zupa, sos, gulasz, leczo, kasza z sosem, danie jednogarnkowe, budyń, mleko. Grzeje od dna i jednocześnie miesza, więc nie ma miejsca, gdzie się przypali, i nie ma miejsca, które zostanie zimne. Kto kiedykolwiek jadł zupę odgrzaną w mikrofalówce — gorącą na brzegach, letnią w środku — wie, o czym mówię. Tutaj ten problem po prostu nie występuje.",
        "Druga zaleta jest cicha, ale realna: odgrzewa się w tym samym naczyniu, w którym się gotowało. Zero przekładania z pojemnika do garnka i z powrotem, jeden komplet do umycia zamiast trzech.",
        "Trzecia rzecz, którą powiem szczerze: część potraw jest drugiego dnia lepsza, a część gorsza, i żadne urządzenie tego nie odwróci. Bigos, gulasz, sos pomidorowy, curry — im dłużej stoją, tym są lepsze. Naleśniki, kluski, pieczone mięso, sałatka — nie. Odgrzewanie nie jest umiejętnością, tylko wyborem, co w ogóle warto ugotować z zapasem.",
        "I dlatego najsensowniejsze rozwiązanie nie polega na lepszym odgrzewaniu, tylko na gotowaniu od razu w porcjach. Podwójna porcja zupy w niedzielę to nie jest to samo co odgrzewane resztki — to jest jedzenie zaplanowane na dwa dni, i różnica jest wyczuwalna.",
        "Czego natomiast nie napiszę pod żadnym pozorem: nie doradzę Ci, ile dni jedzenie może stać w lodówce, ile razy wolno je odgrzewać ani co z ryżem i drobiem. To jest bezpieczeństwo żywności, ryzyko jest realne, a ja jestem sprzedawczynią sprzętu kuchennego, nie sanepidem. Po tę wiedzę trzeba pójść do właściwego źródła i nie będę udawać, że ją mam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Człuchowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcesz, żebym pokazała odgrzewanie na Waszym własnym jedzeniu z lodówki — powiedz przy umawianiu. Zrobię to.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Człuchowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla człuchowskiej rodziny",
      paragraphs: [
        "Człuchów liczy prawie trzynaście tysięcy mieszkańców i jest miastem powiatowym z czterema jeziorami w granicach. Nie ma tu jednego wielkiego zakładu, który zatrudniałby połowę miasta — jest administracja, usługi i mnóstwo małych firm, i to też jest jakaś odpowiedź na pytanie, jak wygląda tutaj tydzień. Nad wszystkim stoi wieża zamkowa: jedyne, co zostało z drugiej po Malborku warowni zakonu krzyżackiego, spalonej w 1793 roku i rozebranej przez samych mieszkańców na budulec. Dziś mieści się w niej muzeum regionalne.",
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

  districtsHeading: "Do których części Człuchowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do starówki przy zamku, do osiedli bloków i do zabudowy jednorodzinnej nad jeziorami — oraz do sołectw gminy Człuchów. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Człuchów też przyjadę",
  nearbyParagraphs: [
    "Chojnice, Debrzno, Czarne, Miastko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chojnice", "Debrzno", "Miastko", "Bytów", "Czarne"],

  about: blokOMnie("do Człuchowa", "w Człuchowie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Człuchowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy Człuchów. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Człuchowie"),
    {
      question: "Odgrzeje mi kotlet albo pizzę?",
      answer:
        "Nie i nie będę udawać, że tak. To naczynie z podgrzewanym dnem i mieszadłem — panierka wyjdzie z niego miękka. Do chrupiących rzeczy jest piekarnik albo patelnia.",
    },
    {
      question: "To co odgrzewa dobrze?",
      answer:
        "Wszystko mokre: zupy, sosy, gulasze, leczo, kaszę z sosem, dania jednogarnkowe, mleko, budyń. Grzeje od dna i jednocześnie miesza, więc nic się nie przypala i nic nie zostaje zimne w środku. I odgrzewa w tym samym naczyniu, w którym gotowałaś.",
    },
    {
      question: "Ile razy mogę odgrzewać jedzenie i ile dni może stać w lodówce?",
      answer:
        "Tego Ci nie powiem. To jest bezpieczeństwo żywności, a nie sprzęt kuchenny — ryzyko jest realne i nie będę udawać, że mam tu kompetencje. Po taką wiedzę trzeba pójść do właściwego źródła.",
    },
  ],

  geo: { lat: 53.6733, lng: 17.3597 },
};
