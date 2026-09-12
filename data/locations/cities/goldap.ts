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
 * GOŁDAP — gmina miejsko-wiejska w powiecie gołdapskim.
 * MIASTO 13 148, GMINA 18 961 (GUS 31.12.2024).
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * ZAŁOŻENIE 1565 r., PRZYWILEJ MIEJSKI 1570 r. w Królewcu,
 * nadał KSIĄŻĘ ALBRECHT HOHENZOLLERN.
 * OBALONE: „Gołdap to miasto krzyżackie" — powstała czterdzieści
 * lat PO sekularyzacji zakonu (1525).
 * PRZYNALEŻNOŚĆ: MAZURY (Prusy Książęce). NIE WARMIA.
 *
 * UZDROWISKO: status od 2000 r. (rozporządzenie z 31 sierpnia
 * 2000 r., weszło w życie 18 października 2000 r.); profil
 * BOROWINOWO-KLIMATYCZNY. Statut uzdrowiska: uchwała
 * nr XXXVI/237/2013 Rady Miejskiej z 29 maja 2013 r.
 * NUMERU DZ.U. NIE PODAJĘ — nie potwierdzono.
 * OBALONE: „uzdrowisko od lat 80." — badania owszem, ale status
 * prawny dopiero w 2000 r.
 *
 * ⚠⚠ ZAKAZ BEZWZGLĘDNY — TWIERDZENIA ZDROWOTNE.
 * Status uzdrowiska podaję WYŁĄCZNIE jako fakt administracyjny.
 * ZAKAZANE SŁOWA I ZWROTY: „leczy", „wyleczy", „terapia",
 * „kuracja", „właściwości lecznicze", „wspomaga leczenie",
 * „borowina na stawy", „solanka na drogi oddechowe", „tężnia
 * poprawia odporność", „mikroklimat leczniczy", „detoks",
 * „wzmacnia odporność", „poprawia krążenie", „zalecane przy",
 * „wskazania lecznicze".
 * NIGDY nie łączę uzdrowiska z Thermomixem, dietą ani
 * ze „zdrowym gotowaniem jako metodą leczenia".
 *
 * PRODUKT TRADYCYJNY: „SĘKACZ Z PUSZCZY ROMINCKIEJ" —
 * Lista Produktów Tradycyjnych MRiRW, ogłoszenie 29.10.2020,
 * okolice Gołdapi. TO JEST OŚ STRONY.
 * Osobno na liście figuruje „sękacz mazurski" (wykaz 2016).
 *
 * PRZYRODA: Park Krajobrazowy Puszczy Rominckiej utworzony
 * w 1998 r. POWIERZCHNI NIE PODAJĘ — źródła rozbieżne
 * (14 620 ha vs 14 865,11 ha). Pięć rezerwatów: Żytkiejmska
 * Struga, Czerwona Struga, Dziki Kąt, Boczki, Mechacz Wielki.
 * DAT ICH UTWORZENIA NIE PODAJĘ.
 * JEZIORO GOŁDAP — 149 ha, maks. głębokość 12 m.
 * WIEŻA CIŚNIEŃ — 1905 r., wysokość 23 m, renowacja 2013,
 * punkt widokowy.
 * POMNIK IMMANUELA KANTA przy ul. Lipowej.
 * PIRAMIDA W RAPIE (1811, ok. 15 m) LEŻY W GMINIE BANIE
 * MAZURSKIE — NIE PRZYPISUJĘ JEJ GOŁDAPI.
 *
 * KĄT: SĘKACZ — ciasto, którego to urządzenie nie zrobi,
 * i co z tego wynika. Produkt z ministerialnej listy
 * przypisany wprost okolicom Gołdapi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że sękacza w tym urządzeniu nie da się zrobić i nie
 *   udaję inaczej — bo powstaje na obracającym się wałku
 *   nad ogniem, warstwa po warstwie,
 * — że to nie jest wada sprzętu, tylko inna technologia,
 * — że urządzenie realnie pomaga w JEDNEJ części tej pracy:
 *   w masie, bo sękaczowa masa to bardzo dużo jajek i bardzo
 *   długie ubijanie,
 * — że to jest właściwy sposób myślenia o całym sprzęcie:
 *   nie „co zastąpi", tylko „który etap przejmie",
 * — że przy każdej potrawie warto zapytać, gdzie leży
 *   naprawdę ciężka praca — i że rzadko jest nią samo
 *   gotowanie,
 * — że są potrawy, w których urządzenie nie pomoże w niczym,
 *   i że warto to wiedzieć przed zakupem,
 * — i ODMOWA: nie podaję przepisu na sękacz i nie doradzam
 *   nic o pieczeniu nad ogniem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — patrz zakaz wyżej.
 * — ŻADNYCH PORAD o pieczeniu nad otwartym ogniem.
 * — ŻADNEGO PRZEPISU na sękacz ani proporcji.
 * — ŻADNYCH NAZW FIRM ani wytwórni.
 * — NIE PODAJĘ liczby sołectw ani powierzchni parku.
 *
 * ⚠ ETYKA — GOŁDAP MA NAJTRUDNIEJSZY ZESTAW:
 * — ZERO GRANICY z obwodem kaliningradzkim: żadnego przejścia,
 *   żadnego małego ruchu granicznego, żadnej odległości do
 *   granicy, żadnego „miasta przygranicznego".
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945.
 * — ZERO grobu generała nad jeziorem i głazów cesarskich
 *   w Puszczy Rominckiej — obiekty obciążone.
 * — ZERO wysiedleń i akcji „Wisła".
 * — ZERO poligonów i jednostek wojskowych.
 * — NIE ROBIĘ TŁA z bezrobocia ani z ruchu turystycznego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Brak piekarnika" dotyczy
 * pieczenia jako funkcji, której urządzenie nie ma. „Kołocz
 * śląski" dotyczy ciasta weselnego jako obyczaju. „Pierniki"
 * (Sztum) dotyczą czasu jako składnika. „Kruche ciasto"
 * (Braniewo) dotyczy techniki, w której urządzenie szkodzi.
 * Tutaj chodzi o PODZIAŁ PRACY przy potrawie, której sprzęt
 * nie wykona — i o to, co z tego wynika dla myślenia o nim.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ numeru Dz.U. rozporządzenia o uzdrowisku.
 * — NIE PODAJĘ powierzchni parku krajobrazowego.
 * — NIE PODAJĘ dat utworzenia rezerwatów.
 * — NIE PISZĘ o tężni ani o wyciągu na Pięknej Górze —
 *   nie potwierdzono parametrów.
 * — NIE UŻYWAM superlatywów wysokościowych o okolicznych
 *   wzniesieniach.
 * — NIE PRZYPISUJĘ Gołdapi piramidy w Rapie.
 * — NIE MYLĘ Gołdapi z Gołdapią jako gminą — FAQ rozróżnia
 *   miasto i gminę.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 13 148, gmina 18 961 mieszkańców,
 * — miasto założone w 1565 r., przywilej miejski nadany
 *   w 1570 r. w Królewcu przez księcia Albrechta
 *   Hohenzollerna; Gołdap leży na Mazurach,
 * — od 2000 r. Gołdap ma status uzdrowiska o profilu
 *   borowinowo-klimatycznym,
 * — „Sękacz z Puszczy Rominckiej" figuruje na Liście
 *   Produktów Tradycyjnych Ministerstwa Rolnictwa
 *   od października 2020 r.,
 * — Park Krajobrazowy Puszczy Rominckiej utworzono w 1998 r.;
 *   są w nim rezerwaty Żytkiejmska Struga, Czerwona Struga,
 *   Dziki Kąt, Boczki i Mechacz Wielki,
 * — jezioro Gołdap ma 149 ha i do 12 m głębokości,
 * — wieża ciśnień z 1905 r. ma 23 m i jest punktem widokowym
 *   po renowacji z 2013 r.,
 * — w mieście stoi pomnik Immanuela Kanta.
 */
export const GOLDAP: CityContent = {
  slug: "goldap",
  h1: "Thermomix Gołdap – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gołdap (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Gołdapi: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gołdap — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gołdapi. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gołdapi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Gołdap i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sękacza to urządzenie nie zrobi. I dobrze o tym wiedzieć wcześniej.",
  },

  sections: [
    {
      id: "sekacz",
      heading: "Sękacz z Puszczy Rominckiej — czyli ciasto, którego to urządzenie nie zrobi",
      paragraphs: [
        "Na ministerialnej Liście Produktów Tradycyjnych figuruje od października 2020 roku „Sękacz z Puszczy Rominckiej” — produkt przypisany wprost okolicom Gołdapi. Sama Gołdap jest miastem stosunkowo młodym: założono ją w 1565 roku, a przywilej miejski nadał jej w 1570 w Królewcu książę Albrecht Hohenzollern. To dlatego nie jest to miasto krzyżackie, choć wielu tak zakłada — powstała czterdzieści lat po sekularyzacji zakonu. Od 2000 roku Gołdap ma status uzdrowiska o profilu borowinowo-klimatycznym.",
        "Zacznę od zdania, którego sprzedawca zwykle nie mówi na własnej stronie: sękacza w tym urządzeniu nie zrobicie. Nie da się. I nie zamierzam udawać, że jest inaczej.",
        "Sękacz powstaje na obracającym się wałku nad otwartym ogniem. Masę polewa się warstwa po warstwie, każda się przypieka, spływa i zastyga w charakterystyczne sople — i właśnie od nich wzięła się nazwa. Nie ma tu żadnego etapu, który da się zamknąć w naczyniu. To po prostu inna technologia, starsza od wszystkich urządzeń kuchennych razem wziętych.",
        "Ale jest w tym coś, co uważam za najważniejszą rzecz do zrozumienia przy tym sprzęcie w ogóle. Bo urządzenie pomaga przy sękaczu — tylko nie tam, gdzie się wydaje. Masa sękaczowa to bardzo dużo jajek, sporo tłuszczu i bardzo długie ubijanie: godzina pracy, przy której ręka odpada, a mikser się grzeje. Tę część sprzęt bierze na siebie w całości. Piecze ogień, ale masę może przygotować maszyna.",
        "I to jest właściwy sposób myślenia o całym urządzeniu. Nie „co ono zastąpi”, tylko „który etap przejmie”. Przy prawie każdej potrawie da się wskazać jeden etap, który jest naprawdę ciężki — i bardzo rzadko jest nim samo gotowanie. Zwykle jest to rozdrabnianie, ubijanie, mieszanie bez przerwy albo pilnowanie, żeby się nie przypaliło. Właśnie te etapy sprzęt zdejmuje z rąk.",
        "Warto też zapytać odwrotnie, zanim się coś kupi: czy w Waszej kuchni są potrawy, przy których to urządzenie nie pomoże w niczym? Bywają takie i to nie jest wstyd. Wszystko pieczone w formie, wszystko smażone na patelni, wszystko grillowane, wszystko wymagające otwartego ognia. Jeśli Wasze gotowanie składa się głównie z takich rzeczy, uczciwa odpowiedź brzmi, że sprzęt zmieni Wam mniej, niż obiecuje ulotka.",
        "I granica: nie podam Wam przepisu na sękacz ani nie będę doradzać niczego o pieczeniu nad ogniem. W okolicy, w której robi się go od pokoleń i w której ma on urzędowy wpis na liście produktów tradycyjnych, byłoby to zwyczajnie bezczelne. Przyjeżdżam z urządzeniem, a nie z lekcją miejscowej cukierni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Gołdapi – jak wygląda prezentacja?",
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
      heading: "Jak umówić prezentację w Gołdapi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, co gotujecie najczęściej. Jeśli okaże się, że przy Waszych daniach urządzenie pomoże niewiele, powiem to na miejscu — wolę to niż sprzedaż, której ktoś potem żałuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gołdapi"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gołdapskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad trzynaście tysięcy mieszkańców, a cała gmina blisko dziewiętnaście. Gołdap założono w 1565 roku, a przywilej miejski dostała pięć lat później od księcia Albrechta Hohenzollerna — leży na Mazurach, nie na Warmii. Od 2000 roku ma status uzdrowiska o profilu borowinowo-klimatycznym; jest to fakt administracyjny i tak go podaję, bo o działaniu czegokolwiek na zdrowie nie wypowiadam się w ogóle. Nad miastem leży jezioro Gołdap o powierzchni stu czterdziestu dziewięciu hektarów, w centrum stoi wieża ciśnień z 1905 roku, wysoka na dwadzieścia trzy metry i pełniąca po renowacji funkcję punktu widokowego, a przy ulicy Lipowej — pomnik Immanuela Kanta. W 1998 roku utworzono Park Krajobrazowy Puszczy Rominckiej z pięcioma rezerwatami.",
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

  districtsHeading: "Do których części gminy Gołdap dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — także tych leżących w granicach Parku Krajobrazowego Puszczy Rominckiej. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Gołdap też przyjadę",
  nearbyParagraphs: [
    "Olecko, Węgorzewo, Suwałki, Ełk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Olecko", "Węgorzewo", "Ełk"],

  about: blokOMnie("do Gołdapi", "w Gołdapi i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Gołdapi bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto liczy około trzynastu tysięcy mieszkańców, a liczba dziewiętnastu tysięcy, którą czasem się je opisuje, dotyczy całej gminy.",
    },
    ...faqWspolne("w Gołdapi"),
    {
      question: "Czy zrobię w Thermomixie sękacz?",
      answer:
        "Nie i nie będę udawać, że tak. Sękacz powstaje na obracającym się wałku nad otwartym ogniem, warstwa po warstwie — nie ma tu etapu, który da się zamknąć w naczyniu. Urządzenie pomaga tylko przy masie, a ta przy sękaczu jest bardzo pracochłonna: dużo jajek i bardzo długie ubijanie.",
    },
    {
      question: "Skoro nie wszystko zrobi, to po co je kupować?",
      answer:
        "Bo właściwe pytanie brzmi nie „co zastąpi”, tylko „który etap przejmie”. Przy prawie każdej potrawie jeden etap jest naprawdę ciężki i rzadko jest nim samo gotowanie — zwykle rozdrabnianie, ubijanie, mieszanie bez przerwy albo pilnowanie, żeby się nie przypaliło. To te etapy sprzęt zdejmuje z rąk.",
    },
    {
      question: "Czy Thermomix wspiera zdrowie albo dietę?",
      answer:
        "O zdrowiu nie wypowiadam się w ogóle i to samo dotyczy statusu uzdrowiskowego Gołdapi, który podaję wyłącznie jako fakt administracyjny. Mówię o smaku, o konsystencji i o tym, ile pracy urządzenie zdejmuje z rąk. Twierdzenia zdrowotne zostawiam ludziom z odpowiednim wykształceniem.",
    },
  ],

  geo: { lat: 54.3069, lng: 22.3035 },
};
