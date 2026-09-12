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
 * PELPLIN — miasto w powiecie tczewskim, 7 118 mieszkańców
 * (31.12.2024, GUS). Brief mówił 8 000 — zawyżone.
 *
 * BIBLIA GUTENBERGA: jedyny egzemplarz w Polsce. WAŻNA
 * AKTUALIZACJA — ORYGINAŁ TRAFIŁ NA STAŁĄ EKSPOZYCJĘ
 * 26 MAJA 2026 r. Wcześniej przez lata pokazywano wyłącznie
 * kopię, a oryginał leżał w skarbcu. Prawie wszystkie starsze
 * teksty w sieci podają, że „można obejrzeć tylko kopię" —
 * to już nieaktualne.
 *
 * KATEDRA: Pomnik Historii od 2014 r.
 *
 * WYDAWNICTWO DIECEZJALNE z własną drukarnią — Pelplin drukuje
 * do dziś. NAZWY NIE PODAJĘ.
 *
 * CUKROWNIA: zamknięta w 2004 r., rozebrana w 2008 r.
 * Wspominam najwyżej marginalnie i bez robienia tła.
 *
 * KĄT: NIEPRECYZYJNY JĘZYK PRZEPISÓW — „szczypta", „do smaku",
 * „ile ciasto weźmie", „na oko", „średnia cebula". Kąt bierze
 * się WPROST z Biblii Gutenberga: z miasta, w którym leży
 * pierwsza książka drukowana ruchomą czcionką — pierwszy
 * w dziejach tekst, który w każdym egzemplarzu brzmiał
 * IDENTYCZNIE.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że polskie przepisy domowe są napisane językiem, którego
 *   nie da się odtworzyć, i to nie jest niczyja wina,
 * — że „szczypta" i „do smaku" znaczą co innego u każdej osoby,
 * — że urządzenie z wagą wymusza przełożenie tego na liczby
 *   — i że to jest zarazem jego największa zaleta i największa
 *   niedogodność,
 * — że początkującemu liczby pomagają OGROMNIE, a osobie, która
 *   gotuje czterdzieści lat, potrafią przeszkadzać, i mówię to
 *   uczciwie,
 * — że „do smaku" zostaje mimo wszystko: próbowanie jest
 *   nieusuwalne i żadna waga tego nie zastąpi,
 * — że najlepszym użyciem wagi jest ZAPISANIE własnej wersji,
 *   a nie kopiowanie cudzej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PRZELICZNIKÓW „szczypta = X gramów" — bo takich
 *   nie ma i wymyślanie ich byłoby dokładnie tym błędem,
 *   przed którym ostrzegam.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, w szczególności NIC
 *   o ograniczaniu soli i cukru „dla zdrowia".
 * — ŻADNYCH NAZW FIRM.
 * — NIE ROBIĘ tła ze zlikwidowanej cukrowni.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Odtwarzanie przepisu,
 * którego nikt nie zapisał" (Puck) dotyczy DOCHODZENIA
 * do zaginionego dania metodą prób. Tutaj chodzi o SAM JĘZYK
 * przepisów, które ISTNIEJĄ i są zapisane — tylko zapisane
 * tak, że nie da się ich powtórzyć.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Pelplinie można obejrzeć tylko kopię Biblii.
 *   Od 26 maja 2026 r. na stałej ekspozycji jest ORYGINAŁ.
 * — NIE PODAJĘ cen biletów, godzin otwarcia ani wartości
 *   egzemplarza.
 * — NIE PODAJĘ nazwy wydawnictwa ani drukarni.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych.
 * — NIE PODAJĘ przeliczników jednostek domowych na gramy.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 7 118 mieszkańców (31.12.2024, GUS),
 * — jedyny w Polsce egzemplarz Biblii Gutenberga; oryginał
 *   na stałej ekspozycji od 26 maja 2026 r.,
 * — bazylika katedralna uznana za Pomnik Historii w 2014 r.,
 * — działające w mieście wydawnictwo diecezjalne z własną
 *   drukarnią.
 */
export const PELPLIN: CityContent = {
  slug: "pelplin",
  h1: "Thermomix Pelplin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pelplin (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pelplinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pelplin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pelplinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pelplina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Pelplin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Szczypta” u każdego znaczy co innego. I na tym polega problem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pelplinie – jak wygląda prezentacja?",
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
      id: "jezyk-przepisow",
      heading: "Miasto pierwszej drukowanej książki — czyli o „szczypcie” i „do smaku”",
      paragraphs: [
        "W Pelplinie leży jedyny w Polsce egzemplarz Biblii Gutenberga. Od 26 maja 2026 roku pokazywany jest oryginał, a nie — jak przez wiele wcześniejszych lat — kopia; warto to napisać, bo w sieci nadal krąży stara informacja. A rzecz w tej książce jest taka: to był pierwszy w dziejach tekst, który w każdym egzemplarzu brzmiał dokładnie tak samo. Wcześniej każdy odpis różnił się od poprzedniego, bo przepisywał go człowiek.",
        "Polskie przepisy domowe wciąż są na etapie sprzed Gutenberga.",
        "„Szczypta soli”. „Cukru do smaku”. „Mąki, ile ciasto weźmie”. „Średnia cebula”. „Szklanka mleka” — ale szklanka czyja? „Łyżka mąki” — czubata czy płaska? Każdy z nas czytał taki przepis i każdy z nas coś sobie dopowiedział. Dlatego to samo ciasto u dwóch osób z tej samej rodziny wychodzi inaczej, choć obie mają „ten sam” przepis.",
        "To nie jest niczyja wina. Tak się pisało przepisy, kiedy gotowało się codziennie i ręka wiedziała sama. Ale skutek jest taki, że dziś połowa tych przepisów jest praktycznie nie do odtworzenia przez kogoś, kto nie stał obok autorki.",
        "I tu jest realna zmiana, jaką wprowadza to urządzenie: ma wbudowaną wagę. Wszystko odmierza się bezpośrednio w naczyniu i wszystko trzeba wyrazić liczbą. Powiem uczciwie, jak to działa w obie strony.",
        "Dla kogoś, kto zaczyna, to jest ogromna pomoc. Nie ma pytania „ile to jest szczypta”, nie ma pomyłki o pół szklanki, nie ma ciasta, które wyszło za rzadkie i już nie wiadomo dlaczego. Wychodzi tak samo za pierwszym i za dziesiątym razem.",
        "Dla kogoś, kto gotuje czterdzieści lat, bywa odwrotnie — i to jest ta część, której sprzedawcy nie mówią. Osoba, która całe życie sypała ręką, przez pierwsze tygodnie czuje się spętana. Wszystko trzeba wpisać, wszystko trzeba odmierzyć, a przecież ona wie, ile ma być. To mija, ale mija po kilku tygodniach, nie po dwóch dniach, i warto o tym wiedzieć przed zakupem, a nie po.",
        "Jednej rzeczy waga nie usunie nigdy: „do smaku” zostaje. Próbowania nie zastąpi żadna liczba, bo pomidory mają różną kwasowość, ser różną słoność, a Wasz smak jest Wasz. I dobrze.",
        "Najlepsze zastosowanie tej wagi nie polega zresztą na kopiowaniu cudzych przepisów z internetu. Polega na tym, żeby raz zważyć TO, CO ROBICIE SAMI — i wreszcie to zapisać. Zrobić rodzinne ciasto z wagą pod ręką, spisać liczby i mieć je na papierze. Wtedy przepis przestaje być odpisem, który za każdym razem wychodzi inaczej, i staje się drukiem. Tak jak w Pelplinie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pelplinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie rodzinny przepis pisany „na oko” — weźcie go na spotkanie. Spróbujemy przy okazji zważyć to, co dotąd sypaliście ręką.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pelplinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pelplińskiej rodziny",
      paragraphs: [
        "Pelplin liczy nieco ponad siedem tysięcy mieszkańców i jest miastem, które zna cała Polska z jednego powodu: leży tu jedyny w kraju egzemplarz Biblii Gutenberga, od 26 maja 2026 roku pokazywany w oryginale na stałej ekspozycji. Tutejsza bazylika katedralna została w 2014 roku uznana za Pomnik Historii, a w mieście do dziś działa wydawnictwo diecezjalne z własną drukarnią — Pelplin drukuje więc nieprzerwanie od stuleci.",
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

  districtsHeading: "Do których części Pelplina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Rajkowów, Ropuch, Rudna, Małych Walichnów, Bielawek i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Pelplin też przyjadę",
  nearbyParagraphs: [
    "Tczew, Starogard Gdański, Gniew, Skarszewy, Malbork i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Tczew", "Starogard Gdański", "Gniew", "Skarszewy", "Malbork"],

  about: blokOMnie("do Pelplina", "w Pelplinie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pelplina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pelplinie"),
    {
      question: "Czy waga w urządzeniu naprawdę coś zmienia?",
      answer:
        "Tak, i to w obie strony. Komuś, kto zaczyna, bardzo pomaga: nie ma pytania „ile to jest szczypta” i ciasto wychodzi tak samo za pierwszym i za dziesiątym razem. Komuś, kto gotuje czterdzieści lat i sypie ręką, przez pierwsze tygodnie potrafi przeszkadzać. To mija, ale po tygodniach, nie po dwóch dniach.",
    },
    {
      question: "Czy „do smaku” zniknie?",
      answer:
        "Nie. Próbowania nie zastąpi żadna liczba — pomidory mają różną kwasowość, ser różną słoność, a Wasz smak jest Wasz. Waga rozwiązuje problem odtwarzalności, nie problem smaku.",
    },
    {
      question: "Do czego najlepiej użyć wagi?",
      answer:
        "Nie do kopiowania przepisów z internetu, tylko do zważenia tego, co robicie sami. Raz zróbcie rodzinne ciasto z wagą pod ręką i spiszcie liczby — od tej chwili przepis przestaje być odpisem, który wychodzi za każdym razem inaczej.",
    },
  ],

  geo: { lat: 53.9281, lng: 18.6969 },
};
