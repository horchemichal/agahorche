import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * TORZYM — powiat sulęciński, woj. lubuskie.
 * MIASTO 2 377 (GUS 31.12.2024), 9,1 km².
 * Gmina miejsko-wiejska, 375 km², 21 sołectw, 32 miejscowości.
 *
 * ⚠ HOMONIMY: TORZYM ≠ TORUŃ ≠ TARNÓW. FAQ to rozróżnia.
 * Nazwa niemiecka: Sternberg — od arcybiskupa magdeburskiego
 * Konrada von Sternberg.
 *
 * ⚠ PRAWA MIEJSKIE — RZECZ NIETYPOWA:
 * 1375 — nadanie; PO 1945 r. UTRATA; 1994 — PRZYWRÓCENIE.
 * W marcu 2024 r. gmina obchodziła 30-lecie przywrócenia
 * praw miejskich. Torzym jest jednym z najmłodszych miast
 * województwa lubuskiego.
 * ⚠ PRZYCZYN UTRATY PRAW NIE OPISUJĘ — prowadziłyby
 *   do tematów powojennych. TWARDA GRANICA.
 *
 * ⚠⚠ HISTORII GOSPODARCZEJ TORZYMIA NIE PODAJĘ.
 * Jedyne znalezione źródło o handlu bydłem, browarnictwie
 * i gorzelnictwie to angielska Wikipedia; strony gminne
 * i studium uwarunkowań były niedostępne. NIE UŻYWAM
 * TYCH FAKTÓW. TWARDA GRANICA.
 *
 * GEOGRAFIA I INFRASTRUKTURA — DRUGA CZĘŚĆ KOTWICY:
 * — lasy 23 534 ha = 63% powierzchni gminy — Puszcza
 *   nad Pliszką i Puszcza Rzepińska, dominuje sosna,
 * — rzeki PLISZKA i ILANKA, jezioro ILNO,
 * — przez gminę przebiega autostrada A2 i linia kolejowa
 *   Warszawa–Berlin,
 * — Święto Chleba w gminie Torzym; dożynki gminne
 *   w Gądkowie Wielkim,
 * — kościół ewangelicki przebudowany 1831–1834 według
 *   projektu KARLA FRIEDRICHA SCHINKLA,
 * — ⚠⚠ ZAMEK FUNDOWANY PRZEZ ARCYBISKUPA MAGDEBURSKIEGO
 *   KONRADA STERNBERGA W LATACH 1266–1276 — ZACHOWANY
 *   JAKO RELIKT. TO JEST KOTWICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ „MIKROKLIMATU LECZNICZEGO" NIE POWTARZAM — to teza
 *   zdrowotna. TWARDA GRANICA.
 * ⚠ PSTRĄGA W PLISZCE I ILANCE NIE UŻYWAM — kąt „ryba"
 *   ZAJĘTY.
 * ⚠⚠ KĄTA DROŻDŻOWEGO NIE UŻYWAM — „DROŻDŻE ŚWIEŻE KONTRA
 *   SUSZONE" i „ciasto drożdżowe — wyrabianie i rozczyn"
 *   SĄ ZAJĘTE. Święto Chleba pojawia się WYŁĄCZNIE jako
 *   fakt w bloku o mieście.
 *
 * KĄT: DEGLASOWANIE — sos z tego, co przywarło do dna
 * patelni.
 * Kąt od zamku fundowanego przez arcybiskupa magdeburskiego
 * Konrada Sternberga w latach 1266–1276, z którego został
 * dziś tylko relikt: to, co zostaje na dnie, bywa
 * najcenniejsze.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że brązowy osad, który zostaje na dnie patelni
 *   po usmażeniu mięsa albo warzyw, to nie brud
 *   do wyszorowania, tylko najbardziej skoncentrowany
 *   smak, jaki w tym daniu powstał,
 * — ŻE DEGLASOWANIE TO JEDNA CZYNNOŚĆ: wlać płyn
 *   na gorącą patelnię i zeskrobać dno, aż osad się
 *   rozpuści. Tyle. Zajmuje pół minuty,
 * — CZYM SIĘ DEGLASUJE: wodą, bulionem, winem, piwem,
 *   sokiem, śmietaną — i że każdy z tych płynów daje
 *   inny efekt, ⚠ ALKOHOL WYMIENIAM WYŁĄCZNIE JAKO JEDEN
 *   ZE SKŁADNIKÓW NA LIŚCIE, BEZ ZACHĘTY I BEZ ROZWIJANIA.
 *   TWARDA GRANICA,
 * — ŻE PŁYN MA BYĆ WLANY NA GORĄCĄ PATELNIĘ, a nie
 *   na wystudzoną — na zimnej osad już nie zejdzie,
 * — ŻE TO JEST CAŁA RÓŻNICA MIĘDZY KOTLETEM A KOTLETEM
 *   Z SOSEM, i że nie wymaga żadnego dodatkowego składnika
 *   poza tym, co i tak stoi w kuchni,
 * — KIEDY TEGO NIE ROBIĆ: kiedy osad jest CZARNY, a nie
 *   brązowy — przypalony osad daje gorzki sos i wtedy
 *   patelnię trzeba po prostu umyć,
 * — ŻE NA PATELNI NIEPRZYWIERAJĄCEJ OSAD PRAWIE NIE POWSTAJE
 *   — to jest realna cena wygody i warto to wiedzieć,
 *   wybierając patelnię do smażenia mięsa,
 * — ŻE TEN SAM MECHANIZM DZIAŁA W BRYTFANNIE PO PIECZENIU
 *   — a tam osadu jest zwykle najwięcej,
 * — ⚠⚠ UCZCIWIE I NA NIEKORZYŚĆ URZĄDZENIA: THERMOMIX
 *   NIE RUMIENI TAK JAK PATELNIA i nie tworzy takiego osadu.
 *   Deglasowanie zostaje czynnością patelniową. TO JEST
 *   REALNE OGRANICZENIE I NIE UKRYWAM GO,
 * — ale sensownie się z nim łączy: zeskrobany z patelni sos
 *   można przelać do urządzenia i tam dokończyć — odparować,
 *   zmiksować na gładko, dodać śmietanę bez warzenia się,
 *   utrzymać ciepły do podania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ZERO ZACHĘT DO ALKOHOLU. Wino i piwo pojawiają się
 *   WYŁĄCZNIE jako pozycje na liście płynów do deglasowania,
 *   bez rozwijania. TWARDA GRANICA.
 * — ⚠ ZERO TEZ O POWŁOKACH PATELNI I ICH BEZPIECZEŃSTWIE.
 *   Piszę wyłącznie, że na patelni nieprzywierającej osad
 *   prawie nie powstaje. TWARDA GRANICA.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠⚠ UTRATA PRAW MIEJSKICH — PODAJĘ SAM FAKT I ROK
 *   PRZYWRÓCENIA, BEZ PRZYCZYN. TWARDA GRANICA.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „DNO NACZYNIA — przywieranie i przypalanie" dotyczy
 *   ZAPOBIEGANIA PRZYWIERANIU.
 * — „sosy, które się warzą" dotyczą WARZENIA SIĘ NABIAŁU.
 * — „ZAGĘSZCZANIE" dotyczy ZBYT RZADKIEGO DANIA.
 * — „OBIERKI, SKÓRKI I ŁODYGI" dotyczą ODPADÓW
 *   PRZED GOTOWANIEM.
 * — „WODA PO GOTOWANIU — czy wylewać" dotyczy WYWARU.
 * TUTAJ chodzi o JEDNĄ CZYNNOŚĆ: o rozpuszczenie osadu
 * z dna gorącej patelni i zrobienie z niego sosu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ historii gospodarczej miasta (brak źródeł).
 * — NIE PODAJĘ przyczyn utraty praw miejskich.
 * — NIE POWTARZAM tezy o „mikroklimacie leczniczym".
 * — NIE PODAJĘ nazw jezior poza Ilnem — nieustalone.
 * — NIE WYMYŚLAM produktu lokalnego.
 * — NIE MYLĘ TORZYMIA z TORUNIEM ani TARNOWEM.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Torzym otrzymał prawa miejskie w 1375 r., utracił je
 *   po 1945 r. i odzyskał w 1994 r., a w marcu 2024 r.
 *   gmina obchodziła trzydziestolecie tego wydarzenia;
 *   jest jednym z najmłodszych miast województwa,
 * — gmina liczy 375 km², ma 21 sołectw, a lasy zajmują
 *   23 534 ha, czyli 63% jej powierzchni — to Puszcza
 *   nad Pliszką i Puszcza Rzepińska, z przewagą sosny,
 * — przez gminę płyną Pliszka i Ilanka, a miasto leży
 *   nad jeziorem Ilno,
 * — przez gminę przebiegają autostrada A2 i linia kolejowa
 *   Warszawa–Berlin,
 * — gmina organizuje Święto Chleba, a dożynki gminne
 *   odbywają się w Gądkowie Wielkim,
 * — tutejszy kościół ewangelicki przebudowano w latach
 *   1831–1834 według projektu Karla Friedricha Schinkla,
 * — z zamku fundowanego przez arcybiskupa magdeburskiego
 *   Konrada Sternberga w latach 1266–1276 zachował się
 *   relikt.
 */
export const TORZYM: CityContent = {
  slug: "torzym",
  h1: "Thermomix Torzym – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Torzym — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Torzymiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Torzym — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Torzymiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Torzymia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Torzym"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Brązowy osad na dnie patelni to nie brud, tylko najgęstszy smak dania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Torzymiu – jak wygląda prezentacja?",
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
      id: "deglasowanie",
      heading: "Zamek, po którym został relikt — czyli o tym, co zostaje na dnie patelni",
      paragraphs: [
        "Zamek w Torzymiu fundował arcybiskup magdeburski Konrad Sternberg w latach 1266–1276. Została po nim właściwie resztka — relikt, obok którego przechodzi się nie zauważając. A jednak to ona jest najstarszą rzeczą w mieście i jedynym śladem po tamtym założeniu. W kuchni zdarza się coś bardzo podobnego: najcenniejsza część dania zostaje przyklejona do dna patelni, a my ją zmywamy.",
        "Chodzi o brązowy osad, który zostaje po usmażeniu mięsa, cebuli albo warzyw. To nie jest brud i nie jest to spalenizna. To najbardziej skoncentrowany smak, jaki w tym daniu w ogóle powstał — i wystarczy pół minuty, żeby go odzyskać.",
        "Czynność nazywa się deglasowaniem i sprowadza się do dwóch ruchów: wlać płyn na gorącą patelnię i zeskrobać dno łopatką, aż osad się rozpuści. Tyle. Nie ma w tym żadnej tajemnicy ani dodatkowego składnika, którego trzeba by kupić.",
        "Deglasować można właściwie wszystkim. Zwykłą wodą, bulionem, sokiem, śmietaną, winem albo piwem — każdy z tych płynów daje trochę inny efekt i inny ciężar sosu. Najprostszy wariant to kilka łyżek wody albo bulionu i to wystarczy, żeby na talerzu pojawiła się rzecz, której wcześniej nie było.",
        "Jeden warunek jest jednak twardy: płyn wlewa się na patelnię gorącą. Na wystudzonej osad już nie zejdzie i zostanie tylko szorowanie. Dlatego robi się to zaraz po zdjęciu mięsa, a nie po podaniu obiadu.",
        "I to jest w gruncie rzeczy cała różnica między kotletem a kotletem z sosem. Nie trzeba niczego dokupować, nie trzeba drugiego garnka, nie trzeba śmietany ani zagęszczacza. Wystarczy nie wylać tego, co już jest.",
        "Jest jedna sytuacja, w której nie należy tego robić: kiedy osad jest czarny, a nie brązowy. Przypalony daje sos gorzki i nie da się tego uratować żadnym dodatkiem — wtedy patelnię po prostu się myje i zaczyna od nowa. Granica między brązowym a czarnym jest wyraźna i widać ją gołym okiem.",
        "Warto też wiedzieć rzecz, która bywa zaskoczeniem: na patelni nieprzywierającej osad prawie nie powstaje. To jest realna cena wygody. Jeśli komuś zależy na sosach z patelni, do smażenia mięsa lepiej mieć patelnię, która pozwala czemuś przywrzeć.",
        "Ten sam mechanizm działa w brytfannie po pieczeniu, i tam osadu jest zwykle najwięcej. Kilka łyżek wody wlanych do gorącej brytfanny po pieczeni to najprostszy sos, jaki istnieje, a mimo to najczęściej ląduje w zlewie razem z naczyniem.",
        "Teraz uczciwie o sprzęcie i będzie to na jego niekorzyść. Thermomix nie rumieni tak jak patelnia i nie tworzy takiego osadu. Deglasowanie pozostaje czynnością patelniową i żadna funkcja tego nie zastąpi — kto liczy, że urządzenie zrobi sos z niczego, ten się rozczaruje.",
        "Sensownie się z nim natomiast łączy. Zeskrobany z patelni sos można przelać do naczynia i tam go dokończyć: odparować do właściwej gęstości, zmiksować na gładko, dodać śmietanę bez ryzyka, że się zwarzy, i utrzymać ciepły do podania. Patelnia robi to, co potrafi najlepiej, urządzenie resztę — i to jest chyba najuczciwszy podział pracy w całej kuchni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Torzymiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć, co da się zrobić z dna patelni po mięsie — powiedzcie przy umawianiu, zaplanuję danie, przy którym to widać najlepiej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Torzymiu"),
    sekcjaRaty("w Torzymiu"),
    {
      id: "rodzina",
      heading: "Thermomix dla torzymskiej rodziny",
      paragraphs: [
        "Torzym liczy blisko dwa tysiące czterysta mieszkańców i jest siedzibą rozległej gminy o powierzchni trzystu siedemdziesięciu pięciu kilometrów kwadratowych z dwudziestoma jeden sołectwami. Prawa miejskie otrzymał w 1375 roku, utracił je po 1945 roku i odzyskał w 1994 — w marcu 2024 roku gmina obchodziła trzydziestolecie tego wydarzenia, a Torzym jest przez to jednym z najmłodszych miast województwa. Lasy zajmują tu dwadzieścia trzy i pół tysiąca hektarów, czyli sześćdziesiąt trzy procent powierzchni gminy: to Puszcza nad Pliszką i Puszcza Rzepińska, z przewagą sosny. Przez gminę płyną Pliszka i Ilanka, miasto leży nad jeziorem Ilno, a obok przebiegają autostrada A2 i linia kolejowa Warszawa–Berlin. Gmina organizuje Święto Chleba, a dożynki gminne odbywają się w Gądkowie Wielkim. Tutejszy kościół ewangelicki przebudowano w latach 1831–1834 według projektu Karla Friedricha Schinkla, a z zamku fundowanego przez arcybiskupa magdeburskiego Konrada Sternberga w latach 1266–1276 zachował się relikt.",
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

  districtsHeading: "Do których części Torzymia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi w gminie — Boczowa, Gądkowa Wielkiego i Małego, Garbicza, Bielic, Debrznicy, Drzewiec, Kownat, Lubina, Mierczan, Tarnawy Rzepińskiej, Walewic, Wystoku i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Torzym też przyjadę",
  nearbyParagraphs: [
    "Sulęcin, Rzepin, Ośno Lubuskie, Świebodzin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sulęcin", "Rzepin", "Ośno Lubuskie", "Świebodzin"],

  about: blokOMnie("do Torzymia", "w Torzymiu", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Torzymia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Torzym w powiecie sulęcińskim, a nie o Toruń czy Tarnów.",
    },
    ...faqWspolne("w Torzymiu"),
    {
      question: "Co to jest deglasowanie?",
      answer:
        "Wlanie płynu na gorącą patelnię i zeskrobanie dna, aż rozpuści się brązowy osad po smażeniu. Ten osad to nie brud, tylko najbardziej skoncentrowany smak dania — a cała czynność zajmuje pół minuty i nie wymaga żadnego dodatkowego składnika.",
    },
    {
      question: "Czym deglasować patelnię?",
      answer:
        "Wystarczy zwykła woda albo bulion; można też sokiem, śmietaną, winem czy piwem — każdy płyn daje trochę inny ciężar sosu. Warunek jest jeden: patelnia musi być gorąca. Na wystudzonej osad już nie zejdzie.",
    },
    {
      question: "Kiedy nie robić sosu z dna patelni?",
      answer:
        "Kiedy osad jest czarny, a nie brązowy. Przypalony daje sos gorzki i nie da się tego uratować żadnym dodatkiem — wtedy patelnię po prostu się myje. Warto też wiedzieć, że na patelni nieprzywierającej osad prawie nie powstaje.",
    },
    {
      question: "Czy Thermomix zrobi sos z patelni?",
      answer:
        "Nie — nie rumieni tak jak patelnia i nie tworzy takiego osadu, więc deglasowanie zostaje czynnością patelniową. Zeskrobany sos można natomiast przelać do urządzenia i tam dokończyć: odparować, zmiksować na gładko, dodać śmietanę bez warzenia i utrzymać ciepły do podania.",
    },
  ],

  geo: { lat: 52.3124, lng: 15.0822 },
};
