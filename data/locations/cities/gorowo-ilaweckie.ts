import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * GÓROWO IŁAWECKIE — gmina MIEJSKA w powiecie bartoszyckim.
 * MIASTO 3 607 (GUS 31.12.2024), zaledwie 3,3 km².
 * ⚠ ISTNIEJE OSOBNA GMINA WIEJSKA GÓROWO IŁAWECKIE: 6 088
 * osób, 415,9 km². Ma siedzibę w mieście, ale MIASTO DO NIEJ
 * NIE NALEŻY. NIE SUMUJĘ. Układ jak w Braniewie.
 * LICZBY SOŁECTW GMINY WIEJSKIEJ NIE PODAJĘ — BIP niedostępny.
 * ⚠ Wcześniejsza notatka projektowa podawała 4 000 dla
 * miasta — ZAWYŻONE.
 *
 * PRAWA MIEJSKIE 5 LUTEGO 1335 r., nadał ZAKON KRZYŻACKI —
 * komtur HEINRICH VON MURO.
 * PRZYNALEŻNOŚĆ: NATANGIA, dawna kraina pruska. NIE WARMIA,
 * NIE MAZURY.
 * ⚠ OBALONE: „Górowo Iławeckie leży koło Iławy" — Iława jest
 * ok. 120 km na południowy zachód, w innym powiecie.
 * Przymiotnik pochodzi od historycznej ziemi iławeckiej,
 * nie od miasta Iława.
 *
 * MUZEUM GAZOWNICTWA w zabytkowej GAZOWNI KOKSOWEJ Z 1908 r.
 * — obiekt unikatowy w skali kraju. TO JEST OŚ STRONY.
 * NEOGOTYCKI KOŚCIÓŁ NAJŚWIĘTSZEGO SERCA PANA JEZUSA — 1895 r.
 * ŚREDNIOWIECZNY UKŁAD URBANISTYCZNY z gotyckim ratuszem.
 * DATY RATUSZA NIE PODAJĘ — nie potwierdzono.
 * GOTYCKI KOŚCIÓŁ wzniesiony przed 1367 r., główne fazy
 * budowy w końcu XV w., z murowaną dzwonnicą z XV w.
 * ⚠ O JEGO OBECNYM UŻYTKOWNIKU NIE PISZĘ — patrz etyka.
 * MIASTO NALEŻY DO SIECI CITTASLOW.
 * KOLEJ dotarła w 1898 r.
 *
 * ⚠⚠ ETYKA — TO NAJTRUDNIEJSZE MIASTO CAŁEGO WOJEWÓDZTWA.
 * Dwa najbardziej wyróżniające elementy miasta — parafia
 * greckokatolicka i liceum z ukraińskim językiem nauczania —
 * istnieją wskutek przymusowych przesiedleń z 1947 r.
 * NIE DA SIĘ o nich napisać bez dotknięcia akcji „Wisła".
 * DLATEGO POMIJAM OBA CAŁKOWICIE. Gotycki kościół wymieniam
 * wyłącznie jako zabytek architektury, z datą, BEZ ANI SŁOWA
 * o tym, kto go dziś użytkuje i skąd się tu wzięła ta
 * społeczność. Całą stronę buduję na Muzeum Gazownictwa.
 * — NIE UŻYWAM niemieckich nazw miasta ani ziemi iławeckiej.
 * — ZERO granicy z obwodem kaliningradzkim — miasto leży
 *   w pasie przygranicznym, więc ani słowa o granicy,
 *   przejściach ani strefie.
 * — ZERO roku 1945 i wysiedleń ludności niemieckiej.
 * — ZERO kirkutu i wątku żydowskiego.
 * — ZERO Napoleona i kampanii 1807 r.
 * — ZERO willi z runami germańskimi.
 * — NIE ROBIĘ TŁA ze spadku ludności o 22,5%.
 * — ⚠ NIE PISZĘ, że Górowo jest uzdrowiskiem — pojawia się
 *   taka wzmianka w sieci, ale bez potwierdzenia; byłoby to
 *   twierdzenie zdrowotne.
 *
 * KĄT: SOS NA BAZIE WARZYW — bez śmietany i bez mąki.
 * Kąt od gazowni koksowej: zakładu, który z prostego surowca
 * robił coś zupełnie innego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstszy odruch przy sosie to śmietana albo mąka,
 *   a jest trzecia droga: sos zrobiony z samych warzyw,
 * — jak to działa: warzywa gotuje się do miękkości i miksuje
 *   z odrobiną płynu, w którym się gotowały,
 * — że to jedyny rodzaj sosu, przy którym urządzenie daje
 *   przewagę zasadniczą, bo ugotuje i zmiksuje w tym samym
 *   naczyniu, bez przelewania gorącego,
 * — które warzywa nadają się najlepiej: cebula, marchew,
 *   papryka, dynia, cukinia, pomidory, pieczarki, kalafior,
 * — że smak zbudowany na warzywach potrzebuje kwasu na końcu
 *   — inaczej wychodzi mdły, i to jest najczęstszy błąd,
 * — że taki sos gęstnieje przy stygnięciu i że warto zostawić
 *   go rzadszym, niż się wydaje właściwe,
 * — i ODMOWA: nie twierdzę, że jest przez to zdrowszy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI ODŻYWCZYCH — zwłaszcza
 *   że temat kusi „lżejszą wersją". ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ o statusie uzdrowiskowym.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sosy, które się warzą"
 * dotyczą sosów na nabiale i kilku stopni różnicy.
 * „Zasmażka" (Ozorków) dotyczy mąki z tłuszczem.
 * „Zagęszczanie" (Barczewo) dotyczy ratowania rzadkiego
 * dania i wymienia miksowanie jako jedną z czterech dróg —
 * tutaj to jest temat całej strony, od strony smaku, nie
 * ratunku. „Surowe kontra gotowane" (Biała Rawska) dotyczy
 * wyboru obróbki.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ ludności miasta i gminy wiejskiej.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej.
 * — NIE PODAJĘ daty ratusza.
 * — NIE PODAJĘ numeru wpisu do rejestru zabytków.
 * — NIE PISZĘ o uzdrowisku.
 * — NIE PODAJĘ wydarzeń cyklicznych ani znanych osób —
 *   nie potwierdzono.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Górowa Iławeckiego z IŁAWĄ ani z gminą wiejską
 *   o tej samej nazwie. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 607 mieszkańców na 3,3 km²; osobna gmina wiejska
 *   o tej samej nazwie liczy 6 088 osób i 415,9 km²,
 * — prawa miejskie z 5 lutego 1335 r. nadał zakon krzyżacki,
 *   komtur Heinrich von Muro; to historyczna Natangia,
 * — działa tu Muzeum Gazownictwa w zabytkowej gazowni
 *   koksowej z 1908 r. — obiekt unikatowy w skali kraju,
 * — neogotycki kościół Najświętszego Serca Pana Jezusa
 *   z 1895 r.,
 * — zachował się średniowieczny układ urbanistyczny starego
 *   miasta z gotyckim ratuszem oraz gotycki kościół
 *   wzniesiony przed 1367 r. z murowaną dzwonnicą z XV w.,
 * — kolej dotarła tu w 1898 r.,
 * — miasto należy do sieci Cittaslow.
 */
export const GOROWO_ILAWECKIE: CityContent = {
  slug: "gorowo-ilaweckie",
  h1: "Thermomix Górowo Iławeckie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Górowo Iławeckie (pow. bartoszycki) — przedstawiciel",
  seoDescription:
    "Thermomix w Górowie Iławeckim: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Górowo Iławeckie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Górowie Iławeckim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Górowa Iławeckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi wokół niego.",

  highlights: highlightyStandardowe("Górowo Iławeckie i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sos nie musi stać na śmietanie ani na mące. Jest trzecia droga.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Górowie Iławeckim – jak wygląda prezentacja?",
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
      id: "sos-warzywny",
      heading: "Gazownia koksowa z 1908 roku — czyli o sosie zrobionym z samych warzyw",
      paragraphs: [
        "W Górowie Iławeckim działa Muzeum Gazownictwa, mieszczące się w zabytkowej gazowni koksowej z 1908 roku — obiekcie unikatowym w skali kraju. Gazownia robiła rzecz, która dziś brzmi nieoczywiście: z węgla, czyli z surowca najprostszego z możliwych, wytwarzała gaz do oświetlania i ogrzewania miasta. Samo miasto jest znacznie starsze — prawa miejskie dostało 5 lutego 1335 roku od zakonu krzyżackiego, a historycznie leży w Natangii, ani na Warmii, ani na Mazurach. Zajmuje przy tym zaledwie trzy i trzy dziesiąte kilometra kwadratowego.",
        "Zakład, który z prostego surowca robił coś zupełnie innego, jest dobrym pretekstem do sosu, o którym mało kto pamięta: takiego, który nie stoi ani na śmietanie, ani na mące.",
        "Bo odruch jest zawsze ten sam. Sos ma być gęsty i gładki, więc albo zasmażka, albo śmietana. Tymczasem jest trzecia droga i w tym urządzeniu wychodzi ona najlepiej ze wszystkich: sos zrobiony z samych warzyw.",
        "Zasada jest prosta aż do rozczarowania. Warzywa gotuje się do miękkości, a potem miksuje z odrobiną płynu, w którym się gotowały. To wszystko. Gęstość bierze się z rozdrobnionego warzywa, a nie z niczego dosypanego — i dlatego smak jest wyraźniejszy, a nie rozcieńczony.",
        "To jest zresztą jedyny rodzaj sosu, przy którym powiem bez zastrzeżeń, że urządzenie daje przewagę zasadniczą. Ugotuje i zmiksuje w tym samym naczyniu, bez przelewania gorącej zawartości do blendera i z powrotem — a każdy, kto kiedyś przelewał wrzącą zupę do kielicha, wie, dlaczego to się liczy.",
        "Najlepiej sprawdzają się warzywa, które po ugotowaniu robią się aksamitne: cebula, marchew, papryka, dynia, cukinia, pomidory, pieczarki, kalafior. Cebula gotowana długo i zmiksowana daje sos gęsty i słodkawy, na którym można zbudować całe danie.",
        "Jest jednak jeden błąd, który psuje ten sos w dziewięciu przypadkach na dziesięć: brak kwasu. Sos zbudowany na samych warzywach bywa mdły, bo nie ma w nim niczego, co przecinałoby słodycz. Łyżka soku z cytryny, odrobina octu albo pomidory na końcu zmieniają go nie do poznania. To nie jest dodatek dla smaku — to element konstrukcji.",
        "Druga rzecz warta zapamiętania: taki sos gęstnieje przy stygnięciu, bo warzywa dalej wiążą płyn. To, co w naczyniu wygląda na w sam raz, na talerzu bywa za gęste — więc lepiej zostawić go rzadszym, niż się wydaje właściwe.",
        "I granica: nie napiszę, że taki sos jest przez to zdrowszy ani lżejszy. Piszę o nim, bo ma wyraźniejszy smak warzyw i bo urządzenie robi go wygodnie. Twierdzenia o wartościach odżywczych zostawiam ludziom, którzy się na tym znają.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Górowie Iławeckim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć coś zwyczajnego, a nie popisowego — powiedzcie przy umawianiu. Sos z warzyw robię chętnie, bo pokazuje dokładnie to, do czego to urządzenie służy na co dzień.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Górowie Iławeckim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla górowskiej rodziny",
      paragraphs: [
        "Miasto liczy nieco ponad trzy i pół tysiąca mieszkańców i zajmuje zaledwie trzy kilometry kwadratowe. Ważna uwaga, bo pomyłka jest tu częsta: gmina wiejska Górowo Iławeckie to odrębna jednostka z ponad sześcioma tysiącami mieszkańców i powierzchnią przeszło stukrotnie większą — ma siedzibę w mieście, ale samego miasta nie obejmuje. Prawa miejskie nadał tu 5 lutego 1335 roku zakon krzyżacki; historycznie to Natangia, dawna kraina pruska. Zachował się średniowieczny układ starego miasta z gotyckim ratuszem oraz gotycki kościół wzniesiony przed 1367 rokiem, z murowaną dzwonnicą z piętnastego wieku; z późniejszych czasów pochodzi neogotycki kościół Najświętszego Serca Pana Jezusa z 1895 roku. Najbardziej niezwykłe jest jednak Muzeum Gazownictwa w zabytkowej gazowni koksowej z 1908 roku. Miasto należy do sieci Cittaslow.",
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

  districtsHeading: "Do których części Górowa Iławeckiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, a także do wsi leżących wokół niego, w gminie wiejskiej Górowo Iławeckie. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Górowo Iławeckie też przyjadę",
  nearbyParagraphs: [
    "Bartoszyce, Lidzbark Warmiński, Pieniężno, Sępopol i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lidzbark Warmiński", "Pieniężno", "Sępopol", "Korsze"],

  about: blokOMnie("do Górowa Iławeckiego", "w Górowie Iławeckim i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Górowa Iławeckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi wokół niego. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwa rozróżnienia dla porządku: Górowo Iławeckie leży w powiecie bartoszyckim i nie ma nic wspólnego z Iławą, oddaloną o sto dwadzieścia kilometrów — przymiotnik pochodzi od historycznej ziemi iławeckiej. A miasto i gmina wiejska o tej samej nazwie to dwie odrębne jednostki.",
    },
    ...faqWspolne("w Górowie Iławeckim"),
    {
      question: "Czy da się zrobić sos bez śmietany i bez mąki?",
      answer:
        "Da się i w tym urządzeniu wychodzi najlepiej. Warzywa gotuje się do miękkości i miksuje z odrobiną płynu, w którym się gotowały. Gęstość bierze się z samego warzywa, więc smak jest wyraźniejszy, a nie rozcieńczony. Najlepsze są cebula, marchew, papryka, dynia, cukinia, pomidory, pieczarki i kalafior.",
    },
    {
      question: "Dlaczego mój sos z warzyw jest mdły?",
      answer:
        "Bo brakuje w nim kwasu. Sos zbudowany na samych warzywach nie ma niczego, co przecinałoby słodycz. Łyżka soku z cytryny, odrobina octu albo pomidory na końcu zmieniają go nie do poznania — to nie dodatek, tylko element konstrukcji.",
    },
    {
      question: "Czy taki sos jest zdrowszy?",
      answer:
        "Tego nie powiem. Piszę o nim, bo ma wyraźniejszy smak warzyw i bo urządzenie ugotuje i zmiksuje go w jednym naczyniu, bez przelewania gorącej zawartości. Twierdzenia o wartościach odżywczych zostawiam dietetykom. Warto natomiast wiedzieć, że taki sos gęstnieje przy stygnięciu, więc lepiej zostawić go rzadszym.",
    },
  ],

  geo: { lat: 54.2853, lng: 20.493 },
};
