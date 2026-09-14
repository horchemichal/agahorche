import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * GARWOLIN — powiat garwoliński, woj. mazowieckie.
 * MIASTO 17 267 (GUS 31.12.2024), 22,1 km², 782,0 os./km².
 *
 * ⚠ HOMONIMY: GARWOLIN ≠ GARBÓW ≠ GAWŁÓW. FAQ to rozróżnia.
 *
 * HISTORIA:
 * — 1386 — pierwsza wzmianka (Andrzej Ciołek, chorąży płocki);
 *   1407 — kupiony przez ks. Janusza I; PRZYWILEJ LOKACYJNY
 *   20 LIPCA 1423; od 1526 miasto królewskie; od 1539 stolica
 *   powiatu w ziemi czerskiej,
 * — na przełomie XVI/XVII w. 262 RZEMIEŚLNIKÓW, W TYM
 *   160 PIWOWARÓW; cechy zrzeszały 230 rzemieślników;
 *   w 1583 r. Jan Zamoyski przeniósł słodownie i browar
 *   do Zamościa,
 *   ⚠ 160 PIWOWARÓW PODAJĘ WYŁĄCZNIE JAKO LICZBĘ HISTORYCZNĄ.
 *     ZERO TEMATU ALKOHOLU. TWARDA GRANICA.
 * — ⚠⚠ W XIX w. GARWOLIN SŁYNĄŁ Z PRODUKCJI KOŻUCHÓW
 *   I UPRZĘŻY. W LATACH 30. XX w. CECH KUŚNIERZY LICZYŁ
 *   196 MAJSTRÓW I OK. 800 CZELADNIKÓW. TO JEST KOTWICA.
 * — trakt lubelski 1835; kolej Warszawa–Lublin 1877,
 * — dziś branże wiodące: kosmetyczna (największy zakład,
 *   ponad 3000 pracowników), odzież skórzana — bezpośrednia
 *   kontynuacja kuśnierstwa — mleczarska, opakowaniowa
 *   i papiernicza; Strefa Aktywności Gospodarczej 60 ha,
 *   ⚠ NAZW FIRM NIE PODAJĘ. TWARDA GRANICA.
 * — miasto leży nad rzeką WILGĄ, 60 km od Warszawy.
 *
 * ⚠⚠ MIASTO ZOSTAŁO W XX w. ZNISZCZONE W PONAD 70%.
 * ⚠⚠ TEGO FAKTU NIE PODAJĘ — temat wojenny. Piszę jedynie,
 *   że substancja zabytkowa jest skromna, BEZ PODAWANIA
 *   PRZYCZYNY. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH (sprawdzone w kategoriach
 *   warzywa i owoce oraz gotowe dania).
 * ⚠ NAZW OSIEDLI MIEJSKICH NIE POTWIERDZONO — districts PUSTE.
 *
 * KĄT: KOŻUCH — błona, która ścina się na wierzchu mleka,
 * budyniu i sosu.
 * Kąt od kuśnierstwa: Garwolin przez pokolenia żył z kożuchów,
 * a dziś kontynuuje to przemysł odzieży skórzanej. To jedyne
 * miasto w serwisie, w którym ta gra słów jest uczciwa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kożuch na mleku dzieli ludzi jak mało co i że to jedna
 *   z pierwszych rzeczy, które się w kuchni zauważa
 *   w dzieciństwie,
 * — SKĄD SIĘ BIERZE: to nie jest „brud" ani oznaka zepsucia,
 *   tylko BIAŁKO ŚCIĘTE OD CIEPŁA, które zbiera się
 *   na powierzchni razem z tłuszczem, bo z powierzchni
 *   odparowuje woda,
 *   ⚠ PISZĘ TO JAKO OPIS ZJAWISKA, BEZ CHEMII I BEZ TEZ
 *     ZDROWOTNYCH. TWARDA GRANICA.
 * — GDZIE POWSTAJE: mleko, kakao, budyń, kisiel, sos
 *   beszamelowy, zupa krem, sos z dodatkiem śmietany,
 *   masa serowa,
 * — ⚠⚠ JAK MU ZAPOBIEC — TRZY SPOSOBY, KTÓRE DZIAŁAJĄ:
 *   — MIESZAĆ (kożuch nie zdąży się zebrać),
 *   — POŁOŻYĆ FOLIĘ ALBO PAPIER BEZPOŚREDNIO NA POWIERZCHNI,
 *     a nie naciągnąć na brzegi naczynia — to jest ta jedna
 *     rzecz, której prawie nikt nie robi, a która rozwiązuje
 *     problem całkowicie,
 *   — DODAĆ NA WIERZCH ODROBINĘ TŁUSZCZU albo posypać
 *     cukrem przy słodkich masach,
 * — ŻE KOŻUCH ZDJĘTY Z BUDYNIU ZABIERA ZE SOBĄ CZĘŚĆ MASY
 *   — dlatego lepiej mu zapobiec niż go potem usuwać,
 * — ŻE PRZY SOSACH KOŻUCH JEST OSTRZEŻENIEM: znaczy, że sos
 *   stoi za długo bez mieszania albo że jest za gorący,
 * — ŻE TO SAMO ZJAWISKO W INNEJ SKALI TWORZY SKÓRKĘ
 *   NA ZAPIEKANCE I NA CHLEBIE — tam jest pożądane,
 * — ŻE CZĘŚĆ LUDZI KOŻUCH LUBI i że to nie jest dziwactwo:
 *   na kakao i na pieczonym mleku bywa najlepszą częścią,
 * — UCZCIWIE: urządzenie nie sprawi, że kożuch przestanie
 *   powstawać — to fizyka, nie funkcja,
 * — ale usuwa jego najczęstszą przyczynę: skoro miesza
 *   bez przerwy i trzyma temperaturę, mleko ani budyń
 *   nie stoją nieruszane na gorącym dnie, a to jest dokładnie
 *   ten moment, w którym kożuch się robi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO tez o białku, wapniu, laktozie i wartościach
 *   odżywczych. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO ALKOHOLU — 160 piwowarów to tylko liczba
 *   historyczna w bloku o mieście.
 * — ⚠ ZERO TEMATU WYPRAWIANIA SKÓR I GARBARSTWA jako
 *   procesu — kuśnierstwo wchodzi wyłącznie jako fakt
 *   gospodarczy i jako źródło słowa.
 *
 * ⚠ ETYKA:
 * — ⚠⚠ ZERO ZNISZCZENIA MIASTA W XX w. I ZERO TEMATÓW
 *   WOJENNYCH. TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „TO, CO ZBIERA SIĘ NA POWIERZCHNI — piana, szumowiny"
 *   (Orneta) dotyczy PIANY I SZUMOWIN PRZY GOTOWANIU MIĘSA
 *   I STRĄCZKÓW — czyli zbierania zanieczyszczeń.
 *   ⚠⚠ TUTAJ CHODZI O BŁONĘ BIAŁKOWĄ NA NABIALE I MASACH.
 *   TO INNE ZJAWISKO I TAK TO W TEKŚCIE ROZGRANICZAM.
 * — „sosy, które się warzą" (Sędziszów Małopolski) dotyczy
 *   ZWARZENIA SIĘ NABIAŁU.
 * — „mleko i nabiał" dotyczy NABIAŁU JAKO SKŁADNIKA.
 * — „KONSYSTENCJA" dotyczy GŁADKOŚCI EFEKTU KOŃCOWEGO.
 * — „POWIERZCHNIA STYKU" (Konstancin) dotyczy STOSUNKU
 *   POWIERZCHNI DO OBJĘTOŚCI.
 * TUTAJ chodzi o JEDNO ZJAWISKO — kożuch — i o trzy sposoby,
 * żeby mu zapobiec.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ przyczyny skromnej substancji zabytkowej.
 * — NIE PODAJĘ nazw firm ani osiedli.
 * — NIE WYMYŚLAM produktu lokalnego ani święta kulinarnego.
 * — NIE PISZĘ o wartościach odżywczych nabiału.
 * — NIE MYLĘ GARWOLINA z GARBOWEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Garwolinie pochodzi z 1386 r.,
 *   w 1407 r. kupił go książę Janusz I, przywilej lokacyjny
 *   miasto otrzymało 20 lipca 1423 r., od 1526 r. było
 *   królewskie, a od 1539 r. stolicą powiatu w ziemi czerskiej,
 * — na przełomie XVI i XVII w. pracowało tu 262 rzemieślników,
 *   a cechy zrzeszały dwustu trzydziestu z nich,
 * — w XIX w. Garwolin słynął z produkcji kożuchów i uprzęży,
 *   a w latach trzydziestych XX w. sam cech kuśnierzy liczył
 *   196 majstrów i około ośmiuset czeladników,
 * — trakt lubelski zbudowano w 1835 r., a kolej z Warszawy
 *   do Lublina uruchomiono w 1877 r.,
 * — dziś wiodącymi branżami są kosmetyczna, odzież skórzana
 *   — bezpośrednia kontynuacja kuśnierstwa — mleczarska,
 *   opakowaniowa i papiernicza, a Strefa Aktywności
 *   Gospodarczej zajmuje 60 ha,
 * — miasto leży nad Wilgą, sześćdziesiąt kilometrów
 *   od Warszawy.
 */
export const GARWOLIN: CityContent = {
  slug: "garwolin",
  h1: "Thermomix Garwolin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Garwolin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Garwolinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Garwolin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Garwolinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Garwolina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Garwolin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kożuch na mleku to nie brud, tylko ścięte białko. I da się mu zapobiec.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Garwolinie – jak wygląda prezentacja?",
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
      id: "kozuch",
      heading: "Miasto kuśnierzy — czyli o kożuchu, tym w garnku",
      paragraphs: [
        "W XIX wieku Garwolin słynął z produkcji kożuchów i uprzęży, a w latach trzydziestych XX wieku sam cech kuśnierzy liczył tu stu dziewięćdziesięciu sześciu majstrów i około ośmiuset czeladników. To była tożsamość miasta i po części jest nią do dziś — odzież skórzana pozostaje jedną z wiodących branż. Trudno o lepszy pretekst, żeby napisać o drugim znaczeniu tego słowa: o kożuchu, który zbiera się na wierzchu mleka.",
        "Bo to jedna z pierwszych rzeczy, które człowiek w kuchni zauważa w dzieciństwie, i jedna z niewielu, które dzielą ludzi zupełnie na pół. Jedni odsuwają szklankę. Drudzy zbierają go łyżeczką jako najlepszą część.",
        "Zacznijmy od tego, czym on jest, bo panuje w tej sprawie niejasność. Kożuch to nie jest brud ani oznaka, że coś jest nie tak z mlekiem. To białko ścięte od ciepła, które zbiera się na powierzchni razem z tłuszczem — właśnie na powierzchni, bo stamtąd odparowuje woda. Im dłużej coś stoi gorące i nieruszane, tym grubszy się robi.",
        "Powstaje wszędzie tam, gdzie jest nabiał i ciepło: na mleku, na kakao, na budyniu, na kisielu, na sosie beszamelowym, na zupie krem ze śmietaną, na masie serowej stygnącej w misce.",
        "Zapobiec mu można na trzy sposoby i wszystkie działają.",
        "Pierwszy to mieszać. Kożuch potrzebuje spokoju, żeby się zebrać; mieszany po prostu nie zdąży.",
        "Drugi jest najważniejszy i prawie nikt go nie stosuje: położyć folię albo papier bezpośrednio na powierzchni, dotykając jej, a nie naciągnąć na brzegi naczynia. Ta jedna zmiana rozwiązuje problem całkowicie — budyń przykryty w ten sposób nie ma kożucha w ogóle, bo powietrze nie ma do niego dostępu i nic nie odparowuje. Naciągnięcie folii na miskę nie robi nic; para i tak zostaje w środku i skrapla się nad masą.",
        "Trzeci: odrobina tłuszczu na wierzchu albo, przy słodkich masach, cienka warstwa cukru. Jedno i drugie przerywa kontakt powierzchni z powietrzem.",
        "Warto też wiedzieć, dlaczego lepiej zapobiegać, niż potem zdejmować. Kożuch zdjęty z budyniu zabiera ze sobą część masy, i to nie tę najmniejszą — zwykle razem z nim ląduje w koszu solidna łyżka deseru.",
        "Przy sosach kożuch jest przy tym pożytecznym ostrzeżeniem. Znaczy, że sos stoi za długo bez mieszania albo że jest za gorący. To sygnał, a nie wada sama w sobie.",
        "I rzecz, która porządkuje cały temat: to samo zjawisko w innej skali tworzy skórkę na zapiekance i na chlebie — tam jest pożądane i nikt się nie skarży. Różnica jest wyłącznie w tym, czy tej warstwy chcemy. Dlatego osoby, które lubią kożuch na kakao albo na pieczonym mleku, mają zupełnie tyle samo racji co ci, którzy go odsuwają.",
        "Na marginesie: to co innego niż piana i szumowiny zbierające się przy gotowaniu mięsa czy strączków. Tamto to zanieczyszczenia wypychane na wierzch i pisałam o tym osobno. Kożuch jest z samego produktu, nie obok niego.",
        "Teraz uczciwie o sprzęcie. Thermomix nie sprawi, że kożuch przestanie powstawać. To fizyka, a nie funkcja, i żadne urządzenie jej nie wyłączy.",
        "Usuwa natomiast jego najczęstszą przyczynę. Skoro miesza bez przerwy i trzyma ustawioną temperaturę, mleko, budyń czy krem nie stoją nieruszane na gorącym dnie — a to jest dokładnie ten moment, w którym kożuch się robi. Zostaje jeszcze stygnięcie w misce, ale tam wystarczy już tylko ta folia położona wprost na powierzchni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Garwolinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu ktoś nie znosi kożucha, a ktoś inny go uwielbia — powiedzcie przy umawianiu. Zrobimy budyń i pokażę, jak ugotować go tak, żeby obie strony były zadowolone.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Garwolinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla garwolińskiej rodziny",
      paragraphs: [
        "Garwolin liczy ponad siedemnaście tysięcy mieszkańców na dwudziestu dwóch kilometrach kwadratowych i leży nad Wilgą, sześćdziesiąt kilometrów od Warszawy. Pierwsza wzmianka o mieście pochodzi z 1386 roku, w 1407 kupił je książę Janusz I, przywilej lokacyjny otrzymało 20 lipca 1423, od 1526 było miastem królewskim, a od 1539 stolicą powiatu w ziemi czerskiej. Na przełomie XVI i XVII wieku pracowało tu dwustu sześćdziesięciu dwóch rzemieślników, a cechy zrzeszały dwustu trzydziestu z nich. W XIX wieku Garwolin słynął z produkcji kożuchów i uprzęży — w latach trzydziestych XX wieku sam cech kuśnierzy liczył stu dziewięćdziesięciu sześciu majstrów i około ośmiuset czeladników. Trakt lubelski zbudowano w 1835 roku, a kolej z Warszawy do Lublina uruchomiono w 1877. Dziś wiodącymi branżami są kosmetyczna, odzież skórzana będąca bezpośrednią kontynuacją dawnego kuśnierstwa, mleczarska, opakowaniowa i papiernicza, a Strefa Aktywności Gospodarczej zajmuje sześćdziesiąt hektarów. Substancja zabytkowa miasta jest skromna — najważniejszym obiektem pozostaje kościół parafialny Przemienienia Pańskiego, a układ urbanistyczny sięga przywileju z 1423 roku.",
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

  districtsHeading: "Do których części Garwolina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic Rynku po osiedla przy trakcie lubelskim i nad Wilgą. Dojeżdżam też do wsi w gminie: Woli Rębkowskiej, Rębkowa, Sulbin, Miętnego, Rudy Talubskiej, Górek, Taluby, Jagodnego i Wilkowyi.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Garwolin też przyjadę",
  nearbyParagraphs: [
    "Żelechów, Pilawa, Łaskarzew, Otwock, Mińsk Mazowiecki i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żelechów", "Pilawa", "Łaskarzew", "Otwock"],

  about: blokOMnie("do Garwolina", "w Garwolinie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Garwolina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — Woli Rębkowskiej, Miętnego, Rudy Talubskiej i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Garwolin nad Wilgą, a nie o Garbów.",
    },
    ...faqWspolne("w Garwolinie"),
    {
      question: "Skąd bierze się kożuch na mleku?",
      answer:
        "To białko ścięte od ciepła, które zbiera się na powierzchni razem z tłuszczem — właśnie tam, bo stamtąd odparowuje woda. Nie jest to brud ani oznaka, że coś jest nie tak z mlekiem; im dłużej coś stoi gorące i nieruszane, tym grubszy się robi.",
    },
    {
      question: "Jak nie dopuścić do kożucha na budyniu?",
      answer:
        "Położyć folię albo papier bezpośrednio na powierzchni masy, dotykając jej — a nie naciągnąć na brzegi naczynia. To jedna zmiana, która rozwiązuje problem całkowicie. Działa też mieszanie oraz odrobina tłuszczu lub cienka warstwa cukru na wierzchu.",
    },
    {
      question: "Czy kożuch to to samo co szumowiny?",
      answer:
        "Nie. Szumowiny i piana przy gotowaniu mięsa czy strączków to zanieczyszczenia wypychane na wierzch, a kożuch powstaje z samego produktu — ze ściętego białka i tłuszczu. To samo zjawisko w innej skali tworzy skórkę na zapiekance i na chlebie, tylko tam jest pożądane.",
    },
  ],

  geo: { lat: 51.8972, lng: 21.6149 },
};
