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
 * LIPSK — gmina miejsko-wiejska w powiecie AUGUSTOWSKIM,
 * nad BIEBRZĄ, w sąsiedztwie Biebrzańskiego Parku Narodowego.
 * ⚠⚠ TO NAJSŁABIEJ UDOKUMENTOWANE MIASTO W CAŁYM PROJEKCIE.
 * NIE PODAJĘ: liczby mieszkańców, powierzchni gminy,
 * liczby sołectw, praw miejskich (roku, nadawcy, prawa),
 * ani żadnych zabytków. ŻADNEGO Z TYCH FAKTÓW NIE UDAŁO SIĘ
 * POTWIERDZIĆ. Notatka projektowa podawała 2 400 — NIE UŻYWAM.
 * Strona opiera się w całości na jednym, ale bardzo dobrze
 * udokumentowanym wątku: PISANCE LIPSKIEJ.
 *
 * ⚠⚠ PISANKA LIPSKA — LISTA PRODUKTÓW TRADYCYJNYCH.
 * Karta gov.pl potwierdzona bezpośrednio.
 * DOKŁADNA NAZWA: „PISANKA LIPSKA".
 * DATA WPISU: 21 GRUDNIA 2012 r. KATEGORIA: „INNE".
 * Wygląd wg karty: wielobarwne jajo z tradycyjnymi wzorami
 * charakterystycznymi dla okolic Lipska i Puszczy
 * Augustowskiej; ornamenty z KROPEK, PRZECINKÓW
 * I ROZCIĄGNIĘTYCH ŁEZEK, tworzące słońca, gwiazdy, róże
 * oraz formy roślinne i geometryczne.
 * ROZMIARY WG KARTY: jaja kurze 40–60 mm, gęsie 80–100 mm,
 * strusie 160–200 mm.
 * Barwy: żółta, pomarańczowa, czerwona, niebieska, fioletowa,
 * zielona, granatowa, czarna, brązowa.
 * Konsystencja wg karty: jajo ugotowane na twardo, sprężyste,
 * skorupa twarda, powierzchnia gładka, aksamitna w dotyku.
 *
 * ⚠⚠ TECHNIKA — PODSTAWA KĄTA:
 * BATIK SZPILKOWY, znany na Podlasiu OD POŁOWY XIX w.
 * SZPILKA WBITA W DREWNIANY KIJEK, zanurzana w ROZGRZANYM
 * WOSKU PSZCZELIM; wzór powstaje z kresek przypominających
 * przecinki albo rozciągnięte łezki, układanych symetrycznie.
 * CZAS PRACY: OK. GODZINA NA JAJU KURZYM, OK. DWA DNI
 * NA JAJU STRUSIM.
 * Dawniej barwniki naturalne — OPIŁKI ŻELAZA, ŁUPINY CEBULI;
 * dziś głównie barwniki chemiczne.
 * Dawniej pisano na jajach gotowanych, dziś głównie
 * na wydmuszkach.
 * ⚠ WOSK JAKO OSŁONA: to jest istota batiku — wosk chroni
 * to, co pod nim, przed barwnikiem. TO JEST ZAKOTWICZENIE.
 *
 * KTO TO ROBI: wniosek o wpis złożyło STOWARZYSZENIE
 * MIŁOŚNIKÓW LIPSKIEJ PISANKI I TRADYCJI. Obecnie pracuje
 * ok. 20 TWÓRCZYŃ. W latach 70. XX w. OK. 15 ZAWODOWYCH
 * TWÓRCZYŃ WYTWARZAŁO 6 000–8 000 PISANEK ROCZNIE.
 * MUZEUM LIPSKIEJ PISANKI I TRADYCJI DZIAŁA OD 2007 r.
 * ⚠ WIELKOŚCI KOLEKCJI NIE PODAJĘ — sprzeczność
 * („blisko pół tysiąca" kontra „około tysiąca").
 * FESTIWAL LIPSKIEJ PISANKI — PIERWSZA EDYCJA 16 MARCA 2026 r.
 * ⚠ WIEKU TRADYCJI NIE OKREŚLAM NA „PONAD DWIEŚCIE LAT" —
 * to wersja z materiałów promocyjnych, bez oparcia
 * w źródłach pisanych. Piszę za kartą gov.pl:
 * „tradycja dziewiętnastowieczna".
 * ⚠ WŁAŚCIWOŚCI MAGICZNYCH PISANEK NIE PRZYWOŁUJĘ.
 * ⚠ LIPSK NIE NALEŻY DO CITTASLOW (nie potwierdzono —
 * nie twierdzę, że należy).
 *
 * KĄT: OSŁONA — po co się przykrywa jedzenie.
 * Kąt od batiku: techniki, w której gorący wosk kładzie się
 * po to, żeby to, co pod nim, zostało nietknięte.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pokrywka jest najbardziej niedocenianym narzędziem
 *   w kuchni i że przepisy prawie nigdy nie mówią, czy
 *   przykrywać,
 * — CO ROBI POKRYWKA: zatrzymuje parę, więc płyn nie odparowuje;
 *   utrzymuje temperaturę; przyspiesza; ale UNIEMOŻLIWIA
 *   ZRUMIENIENIE, bo pod nią jest wilgotno,
 * — KIEDY PRZYKRYWAĆ: gotowanie w wodzie, duszenie,
 *   wszystko, co ma zmięknąć,
 * — KIEDY NIE: gdy sos ma zgęstnieć (woda musi odparować),
 *   gdy coś ma się przyrumienić, przy smażeniu,
 * — że najczęstszy błąd to duszenie pod przykryciem czegoś,
 *   co miało być zarumienione — i odwrotnie,
 * — INNE OSŁONY I ICH SENS: ciasto wokół pieczeni, liść,
 *   folia na blasze, mokry papier na powierzchni kremu
 *   (żeby nie zrobił się kożuch), ściereczka na wyrastającym
 *   cieście,
 * — że wspólna zasada brzmi: osłona chroni wilgoć
 *   albo ją zatrzymuje w środku,
 * — UCZCIWIE: to urządzenie gotuje ZAWSZE POD PRZYKRYCIEM
 *   i to jest jego cecha, nie zaleta. Znaczy to, że nic
 *   się w nim nie zrumieni i płyn odparowuje znacznie wolniej
 *   niż w garnku,
 * — dlatego przepisy pisane pod nie mają MNIEJ PŁYNU niż
 *   te same przepisy garnkowe — i to jest najczęstsza
 *   przyczyna zbyt rzadkiej zupy u kogoś, kto przenosi
 *   przepis wprost.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO instrukcji robienia pisanek — to nie jest strona
 *   o rękodziele, a technika należy do twórczyń.
 * — ⚠ ZERO wątku magicznego i obrzędowego.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠ ZERO GRANICY — Lipsk leży blisko granicy państwa.
 *   Żadnej wzmianki, w żadnym kontekście. TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Panierka" (Kutno)
 * dotyczy trzech misek i oblepiania. „Ciepło, które zostaje"
 * (Błaszki) dotyczy stygnięcia. „Zagęszczanie" (Barczewo)
 * dotyczy dodawania zagęstnika. „Ile wody naprawdę potrzeba"
 * (Warta) dotyczy ilości dolewanej wody. Tutaj chodzi
 * o POKRYWKĘ i inne osłony: o to, czy naczynie jest zamknięte,
 * i co z tego wynika.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby mieszkańców, powierzchni ani sołectw.
 * — NIE PODAJĘ praw miejskich Lipska.
 * — NIE WYMIENIAM zabytków Lipska.
 * — NIE PODAJĘ wielkości kolekcji muzeum.
 * — NIE OKREŚLAM wieku tradycji na „ponad dwieście lat".
 * — NIE PRZYPISUJĘ Lipskowi sękacza jako produktu lokalnego.
 * — NIE TWIERDZĘ, że należy do Cittaslow.
 * — ⚠⚠ NIE MYLĘ LIPSKA NAD BIEBRZĄ z LIPSKIEM W NIEMCZECH
 *   ani z LIPSKIEM w mazowieckiem. W tekście PISZĘ
 *   KONSEKWENTNIE „Lipsk nad Biebrzą" albo „podlaski Lipsk".
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lipsk leży w powiecie augustowskim, nad Biebrzą,
 *   w sąsiedztwie Biebrzańskiego Parku Narodowego,
 * — „Pisanka lipska" została wpisana na Listę Produktów
 *   Tradycyjnych 21 grudnia 2012 r.; wzory składają się
 *   z kropek, przecinków i rozciągniętych łezek układających
 *   się w słońca, gwiazdy, róże oraz formy roślinne
 *   i geometryczne; karta wymienia jaja kurze o długości
 *   40–60 mm, gęsie 80–100 mm i strusie 160–200 mm,
 * — technika to batik szpilkowy, znany na Podlasiu od połowy
 *   XIX w.: szpilkę wbitą w drewniany kijek zanurza się
 *   w rozgrzanym wosku pszczelim i nanosi kreski,
 * — jedna pisanka na jaju kurzym to około godziny pracy,
 *   a na jaju strusim około dwóch dni,
 * — dawniej barwiono opiłkami żelaza i łupinami cebuli,
 *   dziś głównie barwnikami chemicznymi; dawniej pisano
 *   na jajach gotowanych, dziś głównie na wydmuszkach,
 * — w latach 70. XX w. około piętnastu zawodowych twórczyń
 *   wytwarzało od sześciu do ośmiu tysięcy pisanek rocznie;
 *   dziś pracuje ich około dwudziestu,
 * — Muzeum Lipskiej Pisanki i Tradycji działa od 2007 r.,
 *   a pierwszy Festiwal Lipskiej Pisanki odbył się
 *   16 marca 2026 r.
 */
export const LIPSK: CityContent = {
  slug: "lipsk",
  h1: "Thermomix Lipsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lipsk nad Biebrzą — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Lipsku nad Biebrzą, powiat augustowski: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lipsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lipsku nad Biebrzą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lipska nad Biebrzą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Lipsk i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pokrywka to najbardziej niedoceniane narzędzie w kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lipsku – jak wygląda prezentacja?",
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
      id: "oslona",
      heading: "Wosk, który chroni to, co pod nim — czyli po co się przykrywa",
      paragraphs: [
        "Lipsk nad Biebrzą jest miastem znanym z jednej rzeczy i jest to rzecz naprawdę niezwykła. „Pisanka lipska” trafiła na Listę Produktów Tradycyjnych 21 grudnia 2012 roku, a robi się ją techniką zwaną batikiem szpilkowym, znaną na Podlasiu od połowy dziewiętnastego wieku: szpilkę wbitą w drewniany kijek zanurza się w rozgrzanym wosku pszczelim i nanosi na skorupkę kreski przypominające przecinki albo rozciągnięte łezki, które układają się w słońca, gwiazdy i róże. Jedna pisanka na jaju kurzym to około godziny pracy. Na jaju strusim — około dwóch dni. W latach siedemdziesiątych piętnaście zawodowych twórczyń wytwarzało tu od sześciu do ośmiu tysięcy pisanek rocznie; dziś pracuje ich około dwudziestu.",
        "Cała ta technika opiera się na jednym pomyśle: wosk nie jest ozdobą. Wosk jest osłoną. Barwnik nie dochodzi tam, gdzie leży wosk, więc to, co pod nim, zostaje nietknięte.",
        "I dokładnie o osłonie chciałabym napisać, bo w kuchni mamy jej najprostszą wersję i najbardziej niedocenianą: pokrywkę.",
        "Przepisy prawie nigdy nie mówią, czy przykrywać. A to jest decyzja, która zmienia danie bardziej niż większość rzeczy, o których przepisy piszą szczegółowo.",
        "Pokrywka robi trzy rzeczy naraz. Zatrzymuje parę, więc płyn nie odparowuje i danie nie wysycha. Utrzymuje temperaturę, więc gotuje się szybciej i równiej. I — to jest ta trzecia, o której się zapomina — uniemożliwia zrumienienie, bo pod przykryciem jest wilgotno, a nic nie brązowieje w wilgoci.",
        "Z tego wynika prosty podział. Przykrywa się wszystko, co gotuje się w wodzie, wszystko, co dusicie, i wszystko, co ma zmięknąć. Nie przykrywa się, gdy sos ma zgęstnieć — bo gęstnienie to po prostu odparowanie wody, a pod pokrywką woda nie ma dokąd uciec. Nie przykrywa się też niczego, co ma mieć skórkę, i nie przykrywa się smażenia.",
        "Najczęstszy błąd, jaki widzę, to duszenie pod przykryciem czegoś, co miało być zarumienione. Mięso wrzucone na patelnię i od razu nakryte nie usmaży się — ono się ugotuje we własnym soku, będzie szare i nikt nie zrozumie dlaczego. Błąd odwrotny jest równie częsty: gulasz gotowany bez pokrywki przez dwie godziny, po których zostaje sam tłuszcz i trochę mięsa.",
        "Osłon jest zresztą w kuchni więcej i wszystkie działają na tej samej zasadzie. Ciasto owinięte wokół pieczeni, żeby soki zostały w środku. Liść, na którym coś się piecze albo w który się coś zawija. Folia na blasze. Mokry papier położony wprost na powierzchni kremu, żeby nie zrobił się kożuch. Ściereczka na misce z wyrastającym ciastem, żeby wierzch nie obsechł. Za każdym razem chodzi o to samo: zatrzymać wilgoć tam, gdzie ma być, albo nie wpuścić jej tam, gdzie przeszkadza.",
        "Teraz o urządzeniu i to jest jedna z ważniejszych rzeczy, jakie mam do powiedzenia o nim w ogóle. Ono gotuje zawsze pod przykryciem. Zawsze. To nie jest zaleta ani wada — to jest jego cecha konstrukcyjna i wynikają z niej dwie konsekwencje.",
        "Pierwsza: nic się w nim nie zrumieni. Ani mięso, ani cebula, ani nic innego. Zarumienienie robi się na patelni, przed albo po, i to zostaje po Waszej stronie.",
        "Druga jest praktyczniejsza i odpowiada za bardzo wiele rozczarowań. Płyn odparowuje w zamkniętym naczyniu znacznie wolniej niż w garnku. Dlatego przepisy pisane pod ten sprzęt mają mniej płynu niż te same przepisy garnkowe — i dlatego zupa zrobiona z przepisu przepisanego wprost z internetu wychodzi za rzadka. To nie jest wina przepisu ani urządzenia. To jest pokrywka, o której nikt nie pomyślał.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lipsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli zdarzyło Wam się, że zupa z przepisu wyszła za rzadka, powiedzcie o tym przy umawianiu — to akurat jest problem, który wyjaśnia się w jednym zdaniu i naprawia od razu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lipsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lipskiej rodziny",
      paragraphs: [
        "Lipsk leży w powiecie augustowskim, nad Biebrzą, w sąsiedztwie Biebrzańskiego Parku Narodowego. Najbardziej znany jest z pisanki lipskiej, wpisanej na Listę Produktów Tradycyjnych 21 grudnia 2012 roku. Powstaje ona techniką batiku szpilkowego, znaną na Podlasiu od połowy dziewiętnastego wieku: szpilkę osadzoną w drewnianym kijku zanurza się w rozgrzanym wosku pszczelim i nanosi kreski przypominające przecinki, które układają się w słońca, gwiazdy i róże. Jedna pisanka na jaju kurzym zajmuje około godziny, na jaju strusim około dwóch dni. Dawniej barwiono je opiłkami żelaza i łupinami cebuli i pisano na jajach gotowanych; dziś używa się barwników chemicznych i najczęściej wydmuszek. W latach siedemdziesiątych piętnaście zawodowych twórczyń wytwarzało od sześciu do ośmiu tysięcy pisanek rocznie, dziś pracuje ich około dwudziestu. Od 2007 roku działa tu Muzeum Lipskiej Pisanki i Tradycji, a 16 marca 2026 odbył się pierwszy Festiwal Lipskiej Pisanki.",
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

  districtsHeading: "Do których części gminy Lipsk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Lipsk też przyjadę",
  nearbyParagraphs: [
    "Augustów, Dąbrowa Białostocka, Sztabin, Suchowola i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Augustów", "Dąbrowa Białostocka", "Sztabin", "Suchowola"],

  about: blokOMnie("do Lipska", "w Lipsku i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lipska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to najczęstsza pomyłka w wyszukiwarkach: chodzi o Lipsk nad Biebrzą w powiecie augustowskim, a nie o niemiecki Lipsk ani o Lipsko w województwie mazowieckim.",
    },
    ...faqWspolne("w Lipsku"),
    {
      question: "Kiedy przykrywać garnek, a kiedy nie?",
      answer:
        "Przykrywa się wszystko, co gotuje się w wodzie, co się dusi i co ma zmięknąć. Nie przykrywa się, gdy sos ma zgęstnieć — gęstnienie to po prostu odparowanie wody, a pod pokrywką woda nie ma dokąd uciec. Nie przykrywa się też niczego, co ma mieć skórkę, ani smażenia: nic nie brązowieje w wilgoci.",
    },
    {
      question: "Dlaczego mięso na patelni robi mi się szare zamiast zarumienione?",
      answer:
        "Najczęściej dlatego, że zostało nakryte pokrywką od razu po wrzuceniu. Pod przykryciem jest wilgotno, więc mięso gotuje się we własnym soku zamiast smażyć. To jeden z najczęstszych i najłatwiejszych do naprawienia błędów.",
    },
    {
      question: "Dlaczego zupa z przepisu z internetu wychodzi mi w Thermomixie za rzadka?",
      answer:
        "Bo urządzenie gotuje zawsze pod przykryciem, a wtedy płyn odparowuje znacznie wolniej niż w otwartym garnku. Przepisy pisane pod ten sprzęt mają z tego powodu mniej płynu. Przy okazji: z tego samego powodu nic się w nim nie zrumieni — zarumienienie robi się na patelni, przed albo po.",
    },
  ],

  geo: { lat: 53.7369, lng: 23.4056 },
};
