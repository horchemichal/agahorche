import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * GONIĄDZ — gmina miejsko-wiejska w powiecie monieckim.
 * MIASTO 1 714, GMINA 4 571 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 4,3 km² (gęstość 400,5 os./km²),
 * GMINY 376,6 km² (gęstość 12 os./km²).
 * ⚠ Notatka projektowa podawała 1 800 — ZAWYŻONE.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 * ⚠⚠ KONTRAST ADMINISTRACYJNY — PODSTAWA KĄTA:
 * zwarte miasteczko o gęstości 400 os./km² otoczone gminą
 * o gęstości 12 os./km², jedną z najniższych w Polsce.
 *
 * PRAWA MIEJSKIE 1547 r., NA PRAWIE MAGDEBURSKIM.
 * ⚠ NADAWCY NIE PODAJĘ — nie potwierdzono.
 * ⚠⚠ GONIĄDZ NIGDY NIE STRACIŁ PRAW MIEJSKICH: był jednym
 * z zaledwie CZTERECH ośrodków na obecnym terytorium Polski,
 * które zachowały status miasta po wejściu w życie nowego
 * Statutu Miejskiego 11 CZERWCA 1892 r. — obok Białegostoku,
 * Bielska i Sokółki.
 *
 * GEOGRAFIA: miasto leży NA WZNIESIENIU tworzącym krawędź
 * WYSOCZYZNY GONIĄDZKIEJ, stromo opadającą ku brzegowi
 * BIEBRZY.
 * ⚠ WYSOKOŚCI SKARPY NIE PODAJĘ.
 * ⚠⚠ BIEBRZAŃSKI PARK NARODOWY ZAJMUJE 22 087 ha NA TERENIE
 * GMINY — 61,9% JEJ POWIERZCHNI.
 * BbPN utworzony rozporządzeniem Rady Ministrów 9 WRZEŚNIA
 * 1993 r. jako 18. polski park narodowy; NAJWIĘKSZY PARK
 * NARODOWY W POLSCE. SIEDZIBA: OSOWIEC-TWIERDZA 8,
 * 19-110 GONIĄDZ — a więc w gminie Goniądz.
 * ⚠⚠ OSOWIEC-TWIERDZĘ WYMIENIAM WYŁĄCZNIE JAKO ADRES
 * DYREKCJI PARKU. ZERO twierdzy jako obiektu militarnego,
 * ZERO fortyfikacji. TWARDA GRANICA.
 * ⚠ POWIERZCHNI PARKU OGÓŁEM NIE PODAJĘ — strona parku
 * jej nie podaje.
 *
 * ⚠⚠ GOSPODARKA HISTORYCZNA — DRUGA PODSTAWA KĄTA:
 * Goniądz funkcjonował jako PORT RZECZNY. Udokumentowane
 * CECHY PIWOWARÓW, RYBAKÓW I SZEWCÓW.
 * W XVII w. NA TERENIE MIASTA DZIAŁAŁO 7 MŁYNÓW ORAZ FOLUSZ.
 *
 * ZABYTKI: zachowany historyczny układ urbanistyczny
 * z DUŻYM RYNKIEM; kościół parafialny NEOBAROKOWY 1922–24;
 * kaplica cmentarna NEOGOTYCKA 1907; KAPLICA ŚW. FLORIANA
 * 1864; DREWNIANY MŁYN Z KOŃCA XIX w.; zabudowa mieszkalna
 * XIX–XX w.
 *
 * ⚠⚠ „BIEBRZAŃSKIE SIANOKOSY" — HIPOTEZA ZABITA.
 * Mistrzostwa Świata w Koszeniu Bagiennych Łąk odbywają się
 * we wsi ZAJKI, GMINA TRZCIANNE — NIE w gminie Goniądz.
 * Pierwsza edycja 2005 r. NIE PRZYPISUJĘ TEGO GONIĄDZOWI.
 * Wspominam wyłącznie o ręcznym koszeniu łąk jako praktyce
 * ochronnej doliny Biebrzy, bez nazwy imprezy i bez miejsca.
 * GONIĄDZ NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 * ⚠ NIE PRZYPISUJĘ Goniądzowi produktu z Listy Produktów
 * Tradycyjnych — nie ma takiego.
 *
 * KĄT: GOTOWANIE, GDY DO SKLEPU JEST DALEKO.
 * Kąt od gminy o gęstości dwunastu osób na kilometr
 * kwadratowy, w której blisko dwie trzecie powierzchni
 * zajmuje park narodowy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cała popularna wiedza o gotowaniu pisana jest
 *   dla kogoś, kto ma sklep za rogiem, a to nie jest
 *   sytuacja większości Polski,
 * — CO SIĘ ZMIENIA, gdy zakupy robi się raz w tygodniu:
 *   przepis przestaje być punktem wyjścia, a staje się nim
 *   zapas,
 * — TRZY POZIOMY ZAPASU: rzeczy trwałe (kasze, makarony,
 *   strączki, konserwy, mąka), rzeczy o średniej trwałości
 *   (korzeniowe, kapusta, cebula, jabłka, jajka), rzeczy
 *   nietrwałe (mięso, ryby, sałata, nabiał),
 * — że kolejność zużywania jest odwrotna do kolejności
 *   kupowania: najpierw je się to, co się psuje,
 * — że najczęstszy błąd to planowanie tygodnia od poniedziałku
 *   równo, zamiast od tego, co zniknie najszybciej,
 * — MROŻENIE jako właściwe rozwiązanie, ale w porcjach,
 *   nie w bryłach,
 * — że warto mieć dwa albo trzy dania „ratunkowe" wyłącznie
 *   ze składników trwałych, na czwartek, kiedy lodówka
 *   jest już pusta,
 * — UCZCIWIE: to urządzenie nie skraca drogi do sklepu
 *   i nie robi jedzenia z niczego,
 * — ALE robi jedną rzecz istotną akurat tutaj: z tego,
 *   co zostało na dnie, robi zupę albo pastę bez wysiłku —
 *   a to jest dokładnie problem czwartku.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI SANITARNYCH —
 *   NIC o terminach przydatności i bezpieczeństwie żywności.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI SIECI SKLEPÓW.
 * — ⚠ ZERO SUGESTII, ŻE MIESZKANIE DALEKO OD SKLEPU
 *   JEST GORSZE. Piszę o innej sytuacji, nie o gorszej.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠⚠ ZERO TWIERDZY OSOWIEC jako obiektu militarnego,
 *   ZERO fortyfikacji, ZERO wojska. Osowiec-Twierdza
 *   wyłącznie jako adres dyrekcji parku.
 * — ZERO granicy i podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania — a gmina ma bardzo niską
 *   gęstość zaludnienia, więc pilnuję, żeby pisać o niej
 *   jako o przestrzeni, nigdy jako o pustce społecznej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Małe zakupy, częściej"
 * (Opole) dotyczy miasta, w którym sklep jest blisko.
 * „Zakupy z dowozem" dotyczą dostawy. „Najpierw zakupy,
 * potem przepis" dotyczy odwróconej kolejności planowania.
 * „Gotowanie na zapas i odkładanie porcji do zamrażarki"
 * dotyczy gotowych dań. „Przechowywanie" dotyczy trzymania
 * gotowego jedzenia. Tutaj chodzi o ODLEGŁOŚĆ: o kuchnię,
 * w której uzupełnienie czegokolwiek zajmuje pół dnia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE PODAJĘ liczby sołectw ani powierzchni BbPN ogółem.
 * — NIE PRZYPISUJĘ Goniądzowi „Biebrzańskich Sianokosów".
 * — NIE OPISUJĘ Osowca jako twierdzy.
 * — NIE PRZYPISUJĘ Goniądzowi produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE TWIERDZĘ, że należy do Cittaslow.
 * — NIE MYLĘ GONIĄDZA z GRAJEWEM ani z MOŃKAMI (siedzibą
 *   powiatu). FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 714 mieszkańców na 4,3 km², gmina 4 571
 *   na 376,6 km² — dwanaście osób na kilometr kwadratowy,
 *   jedna z najniższych gęstości w kraju,
 * — prawa miejskie na prawie magdeburskim z 1547 r.; Goniądz
 *   był jednym z zaledwie czterech ośrodków na dzisiejszym
 *   terytorium Polski, które zachowały status miasta
 *   po wejściu w życie nowego Statutu Miejskiego 11 czerwca
 *   1892 r., obok Białegostoku, Bielska i Sokółki,
 * — miasto leży na krawędzi Wysoczyzny Goniądzkiej, stromo
 *   opadającej ku Biebrzy,
 * — Biebrzański Park Narodowy zajmuje 22 087 ha na terenie
 *   gminy, czyli 61,9% jej powierzchni; park utworzono
 *   9 września 1993 r. jako osiemnasty w Polsce i jest
 *   największym parkiem narodowym w kraju, a jego dyrekcja
 *   mieści się w gminie Goniądz,
 * — Goniądz funkcjonował jako port rzeczny; udokumentowane
 *   są cechy piwowarów, rybaków i szewców, a w XVII w.
 *   działało tu siedem młynów oraz folusz,
 * — zachowany historyczny układ urbanistyczny z dużym rynkiem;
 *   neobarokowy kościół parafialny z lat 1922–24, neogotycka
 *   kaplica cmentarna z 1907 r., kaplica świętego Floriana
 *   z 1864 r. i drewniany młyn z końca XIX w.
 */
export const GONIADZ: CityContent = {
  slug: "goniadz",
  h1: "Thermomix Goniądz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Goniądz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Goniądzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Goniądz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Goniądzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Goniądza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy, także do najdalszych wsi.",

  highlights: highlightyStandardowe("Goniądz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gdy zakupy są raz w tygodniu, punktem wyjścia przestaje być przepis.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Goniądzu – jak wygląda prezentacja?",
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
      id: "daleko-do-sklepu",
      heading: "Dwanaście osób na kilometr kwadratowy — czyli kuchnia z dala od sklepu",
      paragraphs: [
        "Gmina Goniądz ma trzysta siedemdziesiąt sześć kilometrów kwadratowych i cztery i pół tysiąca mieszkańców. To dwanaście osób na kilometr — jedna z najniższych gęstości zaludnienia w kraju. Blisko dwie trzecie tej powierzchni, dokładnie 22 087 hektarów, zajmuje Biebrzański Park Narodowy. Samo miasteczko jest za to zwarte: cztery kilometry kwadratowe i czterysta osób na kilometr, na krawędzi wysoczyzny opadającej stromo ku Biebrzy.",
        "Chcę napisać o czymś, o czym nie pisze prawie żaden serwis kulinarny, bo prawie wszystkie pisane są przez ludzi mających sklep za rogiem: jak wygląda gotowanie, gdy do sklepu jest daleko.",
        "To nie jest sytuacja gorsza. To jest sytuacja inna i wymaga innego myślenia. Bo gdy zakupy robi się raz w tygodniu albo rzadziej, przepis przestaje być punktem wyjścia. Punktem wyjścia staje się to, co jest w domu.",
        "Warto wtedy myśleć o spiżarni w trzech poziomach. Poziom pierwszy to rzeczy trwałe: kasze, ryż, makarony, suche strączki, mąka, konserwy, przetwory. One czekają miesiącami i to jest fundament. Poziom drugi to rzeczy o średniej trwałości: warzywa korzeniowe, kapusta, cebula, czosnek, ziemniaki, jabłka, jajka. Wytrzymują tygodnie. Poziom trzeci to rzeczy nietrwałe: mięso, ryby, nabiał, sałata, świeże zioła — te mają kilka dni i nic tego nie zmieni.",
        "Z tego wynika zasada, która wydaje się oczywista, a łamie ją prawie każdy: kolejność jedzenia jest odwrotna do kolejności kupowania. Najpierw zjada się to, co się najszybciej zepsuje, a nie to, na co akurat ma się ochotę. Świeże na początku tygodnia, trwałe na koniec.",
        "Najczęstszy błąd polega na planowaniu tygodnia równo — od poniedziałku do piątku, po jednym daniu dziennie, jakby wszystkie składniki starzały się w tym samym tempie. Nie starzeją się. Tydzień w domu oddalonym od sklepu ma naturalny kształt: bogaty początek i oszczędny koniec, i lepiej ten kształt zaakceptować, niż z nim walczyć.",
        "Mrożenie jest tu oczywistym rozwiązaniem i jedyna rzecz warta powiedzenia to ta, że mrozi się w porcjach odpowiadających jednemu daniu, nigdy w jednej bryle. Zamrożone pięć kilogramów w jednym worku to nie jest zapas, tylko problem odłożony na później.",
        "I rada, która sprawdza się najlepiej: warto mieć dwa albo trzy dania „ratunkowe”, zbudowane wyłącznie ze składników trwałych, których nigdy nie brakuje. Zupa z suchych strączków. Coś z kaszą i cebulą. Makaron z tym, co stoi w słoiku. Te dania są na czwartek, kiedy lodówka jest już pusta, a do sklepu nikomu się nie chce jechać — i dobrze mieć je opanowane na pamięć, zanim będą potrzebne.",
        "Teraz uczciwie o sprzęcie. On nie skraca drogi do sklepu i nie zrobi jedzenia z niczego. Żadne urządzenie tego nie potrafi i nie warto obiecywać inaczej.",
        "Jedną rzecz robi natomiast dobrze i akurat tutaj ma ona znaczenie: z resztek, z końcówek warzyw, z tego, co zostało na dnie skrzynki, robi zupę albo pastę bez żadnego wysiłku i bez stania nad garnkiem. A to jest dokładnie problem czwartku. Nie chodzi o to, że nie da się tego zrobić ręcznie — chodzi o to, że w czwartek wieczorem nikomu się nie chce, i wtedy rzeczy lądują w koszu zamiast w zupie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Goniądzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jak często robicie duże zakupy. To zmienia większość tego, co warto pokazać — inne dania mają sens przy zakupach codziennych, a inne przy jednym wyjeździe na tydzień.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Goniądzu"),
    sekcjaRaty("w Goniądzu"),
    {
      id: "rodzina",
      heading: "Thermomix dla goniądzkiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc siedemset mieszkańców na czterech kilometrach kwadratowych, a cała gmina blisko cztery i pół tysiąca na trzystu siedemdziesięciu sześciu — czyli dwanaście osób na kilometr kwadratowy. Goniądz ma rzadką historię administracyjną: prawa miejskie na prawie magdeburskim dostał w 1547 roku i nigdy ich nie stracił. Był jednym z zaledwie czterech ośrodków na dzisiejszym terytorium Polski, które zachowały status miasta po wejściu w życie nowego Statutu Miejskiego 11 czerwca 1892 roku — obok Białegostoku, Bielska i Sokółki. Miasto stoi na krawędzi Wysoczyzny Goniądzkiej, opadającej stromo ku Biebrzy. Na terenie gminy Biebrzański Park Narodowy zajmuje 22 087 hektarów, czyli blisko dwie trzecie jej powierzchni; park utworzono 9 września 1993 roku i jest największy w Polsce, a jego dyrekcja mieści się właśnie w tej gminie. Historycznie Goniądz był portem rzecznym z cechami piwowarów, rybaków i szewców, a w siedemnastym wieku działało tu siedem młynów i folusz. Zachował się duży rynek, neobarokowy kościół z lat 1922–24, kaplica świętego Floriana z 1864 roku i drewniany młyn z końca dziewiętnastego wieku.",
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

  districtsHeading: "Do których części gminy Goniądz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy — a gmina jest rozległa, więc dotyczy to także wsi położonych daleko od centrum. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Goniądz też przyjadę",
  nearbyParagraphs: [
    "Mońki, Knyszyn, Rajgród, Grajewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mońki", "Knyszyn", "Rajgród", "Grajewo"],

  about: blokOMnie("do Goniądza", "w Goniądzu i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Goniądza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy, także tych najdalszych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Goniądz leży w powiecie monieckim, którego siedzibą są Mońki, i nie jest tym samym co Grajewo.",
    },
    ...faqWspolne("w Goniądzu"),
    {
      question: "Jak gotować, gdy zakupy robi się raz w tygodniu?",
      answer:
        "Punktem wyjścia przestaje być przepis, a staje się spiżarnia. Warto myśleć trzema poziomami: rzeczy trwałe (kasze, makarony, strączki, mąka, konserwy), średnio trwałe (korzeniowe, kapusta, cebula, jajka, jabłka) i nietrwałe (mięso, ryby, nabiał, sałata). Kolejność jedzenia jest odwrotna do kolejności kupowania — najpierw to, co się najszybciej zepsuje.",
    },
    {
      question: "Co zrobić z czwartkiem, kiedy lodówka jest pusta?",
      answer:
        "Mieć dwa albo trzy dania „ratunkowe” zbudowane wyłącznie ze składników trwałych i opanowane na pamięć: zupę z suchych strączków, coś z kaszą i cebulą, makaron z tym, co stoi w słoiku. Warto je ćwiczyć wtedy, gdy nie są potrzebne.",
    },
    {
      question: "Czy Thermomix pomaga, gdy do sklepu jest daleko?",
      answer:
        "Nie skraca drogi do sklepu i nie zrobi jedzenia z niczego. Pomaga w jednym: z końcówek warzyw i tego, co zostało na dnie skrzynki, robi zupę albo pastę bez wysiłku i bez stania nad garnkiem. To akurat rozwiązuje problem czwartku, kiedy nikomu się już nie chce, a rzeczy lądują w koszu.",
    },
  ],

  geo: { lat: 53.4886, lng: 22.7369 },
};
