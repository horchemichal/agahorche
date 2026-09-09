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
 * HRUBIESZÓW — miasto Kotliny Hrubieszowskiej, na czarnoziemach
 * zaliczanych do I klasy bonitacyjnej. Piętnaście tysięcy mieszkańców,
 * trend spadkowy.
 *
 * KĄT: kilogramy zamiast porcji. Przepisy pisze się na cztery osoby,
 * a ogród wydaje trzydzieści kilo naraz i wszystko w jednym tygodniu.
 * Strona jest o TEJ różnicy — o robocie, która polega na ilości,
 * a nie na trudności.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — co się realnie zmienia: rozdrabnianie, siekanie i miksowanie
 *   dużych ilości warzyw, czyli ta część pracy, która jest nudna
 *   i długa, a nie trudna,
 * — czego urządzenie NIE robi: nie obierze, nie umyje, nie wypestkuje
 *   i nie zmieści w sobie skrzynki pomidorów — misa ma swoją
 *   pojemność i to jest twarda granica,
 * — że przy dużej ilości pracuje się seriami i to jest normalne,
 *   a nie obejście problemu,
 * — i odmowa: ani słowa o przetworach.
 *
 * TWARDE GRANICE — TU NAJWAŻNIEJSZE W CAŁEJ STRONIE:
 * — ŻADNYCH PORAD O PRZETWORACH, PASTERYZACJI, KISZENIU, WEKOWANIU
 *   I PRZECHOWYWANIU. To jest ta sama zasada co w Zambrowie przy
 *   wędzeniu i peklowaniu, z tego samego powodu: błąd w tej dziedzinie
 *   kończy się zatruciem, a nie niesmacznym obiadem. W mieście
 *   na najlepszych glebach w Polsce ta odmowa musi paść WPROST
 *   i na początku sekcji, a nie w przypisie na końcu.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o warzywach „z własnego ogrodu”.
 * — ŻADNYCH WYLICZEŃ, ile się oszczędza, mając ogród.
 *
 * ROZGRANICZENIE. Gryfino mówi o działce jako o miejscu kilka
 * kilometrów od kuchni. Tutaj chodzi o coś innego: o SKALĘ, w jakiej
 * jedzenie wchodzi do kuchni w sezonie. Istnieje też strona
 * o gotowaniu MNIEJSZYCH porcji, niż podaje przepis — ta jest jej
 * dokładnym odwróceniem i dlatego się nie dubluje.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — nie piszę, że Hrubieszów jest „najdalej na wschód wysuniętym
 *   miastem Polski”. Twierdzenie krąży w mediach, ale ŻADNE źródło
 *   nie porównuje go z innymi miastami ani nie podaje metodyki.
 *   Najdalej wysunięty PUNKT Polski to wieś Zosin w gminie
 *   Dołhobyczów — to co innego i tekst tego nie miesza,
 * — nie podaję żadnego wskaźnika punktowego jakości gleb dla powiatu.
 *   Liczba „99,2 pkt” nie potwierdziła się przy sprawdzeniu i została
 *   odrzucona. Zostaje to, co jest w recenzowanej pracy Polskiego
 *   Towarzystwa Gleboznawczego: I klasa bonitacyjna,
 * — nie piszę „przepisy z Hrubieszowa”. Zupa jabłkowa hrubieszowska,
 *   masłomęcki chleb na zakwasie i kryzysówki pochodzą ze
 *   Stefankowic, Masłomęcza i Kułakowic Trzecich, czyli z GMINY
 *   WIEJSKIEJ Hrubieszów — osobnej jednostki niż miasto. W tekście
 *   jest „z okolic”, i to jest jedyna uczciwa forma,
 * — nie podaję receptury żadnego z tych trzech produktów.
 *
 * ODRZUCONE KĄTY:
 * — przygranicze i przejście w Zosinie — kąt pogranicza zajęty,
 *   a przy granicy wschodniej doszłaby jeszcze polityka, której na tej
 *   stronie nie ma,
 * — cukrownia — Krajowa Spółka Cukrowa ma zakład w WERBKOWICACH,
 *   sąsiedniej gminie, nie w mieście. Przypisanie go Hrubieszowowi
 *   byłoby dokładnie tym błędem, który tępię w innych plikach.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — czarnoziemy Kotliny Hrubieszowskiej zaliczane są do I klasy
 *   bonitacyjnej (Soil Science Annual 2019, Polskie Towarzystwo
 *   Gleboznawcze); miejskie studium uwarunkowań mówi o siedliskach
 *   pszennych bardzo dobrych i dobrych na wierzchowinach,
 * — województwo lubelskie ma wskaźnik waloryzacji rolniczej
 *   przestrzeni produkcyjnej 74,1 pkt przy średniej krajowej
 *   66,6 pkt (IUNG-PIB, 2022) — podaję to jako wskaźnik WOJEWÓDZKI
 *   i tylko tak,
 * — uprawia się tu przede wszystkim zboża, buraki cukrowe, strączkowe
 *   i ziemniaki; dokładnej struktury zasiewów NIE ZNALAZŁAM i jej
 *   nie podaję,
 * — miasto liczy około piętnastu tysięcy mieszkańców i traci ludność —
 *   dwa źródła podają 15 270 i 15 811 dla zbliżonych okresów, więc
 *   w tekście jest „około piętnastu tysięcy”, bez fałszywej precyzji,
 * — miasto publikuje oficjalny wykaz jednostek pomocniczych: jest ich
 *   jedenaście,
 * — trzy produkty z Listy Produktów Tradycyjnych pochodzą z gminy
 *   wiejskiej, nie z miasta.
 */
export const HRUBIESZOW: CityContent = {
  slug: "hrubieszow",
  h1: "Thermomix Hrubieszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Hrubieszów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Hrubieszowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Hrubieszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Hrubieszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Hrubieszowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Hrubieszów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W sezonie problemem nie jest trudność. Problemem jest ilość.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Hrubieszowie – jak wygląda prezentacja?",
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
      id: "kilogramy",
      heading: "Miasto na czarnoziemach — czyli kuchnia liczona w kilogramach, nie w porcjach",
      paragraphs: [
        "Hrubieszów leży w Kotlinie Hrubieszowskiej, na czarnoziemach, które w pracach gleboznawczych zaliczane są do pierwszej klasy bonitacyjnej — najwyższej, jaka istnieje. Całe województwo lubelskie ma wskaźnik jakości rolniczej przestrzeni produkcyjnej wyraźnie powyżej średniej krajowej. To nie jest slogan z folderu; to jest powód, dla którego kuchnia wygląda tu inaczej niż w mieście, w którym warzywa przychodzą w siatce ze sklepu.",
        "Zacznę jednak od zdania, którego nie napiszę nigdzie indziej na tej stronie, bo musi paść na początku, a nie na końcu: nie doradzam nic o przetworach. Ani o pasteryzacji, ani o kiszeniu, ani o wekowaniu, ani o tym, ile co stoi i w jakich warunkach. Nie podam proporcji, czasów ani „u nas w domu robiło się tak”. Powód jest bardzo konkretny i nie jest asekuracją: pomyłka w tej dziedzinie kończy się zatruciem, a nie niesmacznym obiadem. Jestem przedstawicielką handlową, nie technologiem żywności — a w mieście, w którym słoiki robi pół ulicy, akurat tutaj brak kompetencji trzeba powiedzieć głośno, nie przemilczeć.",
        "Zostaje to, o czym mogę mówić uczciwie, i tego jest sporo. W sezonie problemem w tej kuchni nie jest trudność — nikt tu nie potrzebuje tłumaczyć, co zrobić z cebulą. Problemem jest ILOŚĆ. Przepis pisze się na cztery osoby, a grządka nie zna umiaru i wydaje wszystko w jednym tygodniu. Robota, która zostaje, jest nudna i długa: posiekać, zetrzeć, zmiksować, zmielić. Godzina przy desce, po której bolą ręce, a na stole dalej stoi połowa skrzynki.",
        "I dokładnie w tym miejscu urządzenie coś zmienia. Rozdrabnianie, siekanie, ścieranie i miksowanie to jest ta część pracy, którą maszyna robi lepiej od człowieka, bo nie męczy jej powtarzalność. Zupa krem z tego, co akurat obrodziło, powstaje w jednym naczyniu od surowego warzywa do gotowego dania. Bazy do sosów, mielone warzywa, ciasta — to samo.",
        "Czego nie zrobi, i lepiej wiedzieć to przed zakupem niż po. Nie obierze, nie umyje, nie wypestkuje i nie usunie szypułek — cała brudna, ręczna część zostaje po Waszej stronie. Nie zmieści też w sobie skrzynki naraz: misa ma określoną pojemność i przy dużej ilości pracuje się seriami. To nie jest obejście problemu ani wada, którą zamiatam pod dywan — to normalny sposób pracy, tylko trzeba go założyć z góry, zamiast się nim rozczarować w sierpniu.",
        "Jeszcze jedno, na marginesie, bo nazwy potrafią mylić. Zupa jabłkowa hrubieszowska, masłomęcki chleb na zakwasie i pierogi zwane kryzysówkami są na ministerialnej Liście Produktów Tradycyjnych, ale pochodzą ze Stefankowic, Masłomęcza i Kułakowic Trzecich — czyli z gminy wiejskiej, nie z miasta. Piszę więc „z okolic Hrubieszowa”, bo tak jest, i nie podaję żadnej z tych receptur: to są wyroby konkretnych ludzi i kół gospodyń, a nie moja własność.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Hrubieszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie ogród i chodzi Wam głównie o sezon, powiedzcie to przy umawianiu — pokażę wtedy pracę na większej ilości warzyw, a nie danie, które ładnie wygląda na pokazie. Zobaczycie od razu, ile się mieści i ile trwa jedna seria.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Hrubieszowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla hrubieszowskiej rodziny",
      paragraphs: [
        "Hrubieszów jest miastem piętnastotysięcznym i od lat traci mieszkańców. Ubywa domów, w których gotuje się dla sześciu osób, a przybywa takich, gdzie w tygodniu je się we dwoje, a w weekend zjeżdża pół rodziny. To dwie różne kuchnie w tym samym mieszkaniu.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu — co przy dużym obiedzie znaczy też mniej zmywania.",
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

  districtsHeading: "Do których części Hrubieszowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto dzieli się na jedenaście jednostek pomocniczych i przy umawianiu wystarczy podać osiedle albo ulicę.",
  ],
  districts: [
    "Śródmieście",
    "Podgórze",
    "Pobereżany",
    "Polna",
    "Jagiellońskie",
    "Piłsudskiego",
    "Żeromskiego",
    "Kolejarz",
    "Zielone",
    "Garnizon",
  ],

  nearbyHeading: "Poza Hrubieszów też przyjadę",
  nearbyParagraphs: [
    "Werbkowice, Uchanie, Trzeszczany, Mircze, Horodło i Dołhobyczów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Werbkowice", "Uchanie", "Trzeszczany", "Mircze", "Horodło", "Zamość"],

  about: blokOMnie("do Hrubieszowa", "w Hrubieszowie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Hrubieszowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Hrubieszowie"),
    {
      question: "Zrobię w tym przetwory na zimę?",
      answer:
        "Nie doradzam nic o przetworach — ani o pasteryzacji, ani o kiszeniu, ani o wekowaniu, ani o tym, jak długo co stoi. Nie podam proporcji ani czasów. Błąd w tej dziedzinie kończy się zatruciem, a ja jestem przedstawicielką handlową, nie technologiem żywności. Mogę powiedzieć tylko tyle, że rozdrabnianie i miksowanie dużych ilości warzyw to jest praca, którą urządzenie realnie skraca.",
    },
    {
      question: "Ile warzyw zmieści się naraz?",
      answer:
        "Mniej, niż zwykle chcecie w sezonie — misa ma określoną pojemność i przy skrzynce pracuje się seriami. Mówię o tym przed zakupem, a nie po, bo to jest najczęstsze rozczarowanie u osób z własnym ogrodem. Urządzenie nie obierze też, nie umyje ani nie wypestkuje — ta część roboty zostaje ręczna.",
    },
  ],

  geo: { lat: 50.8093, lng: 23.8917 },
};
