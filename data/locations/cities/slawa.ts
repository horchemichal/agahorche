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
 * SŁAWA — gmina miejsko-wiejska w powiecie wschowskim.
 * MIASTO 4 103, GMINA 12 414 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 14,9 km², GMINY 327,1 km², 21 SOŁECTW.
 * ⚠ Portal statystyczny wymienia 24 wsie i osady — podaję
 *   TYLKO liczbę sołectw ze strony gminy.
 * UŻYTKI ROLNE TO 41% POWIERZCHNI GMINY (13 364 ha).
 *
 * ⚠⚠ PRAW MIEJSKICH NIE PODAJĘ. Jedno źródło podaje
 * jednocześnie „początki jako miasta — 1312" i „status miasta
 * w 1913", co jest oczywiście sprzeczne. PISZĘ TYLKO,
 * że pierwsze wzmianki o Sławie jako mieście pochodzą
 * z 1312 r. i że w średniowieczu należała do księstwa
 * głogowskiego.
 *
 * ⚠ HOMONIMY: SŁAWA ≠ SŁAWNO (zachodniopomorskie)
 * ≠ SŁAWKÓW (śląskie) ≠ SŁAWOBORZE. FAQ to rozróżnia.
 *
 * GEOGRAFIA: JEZIORO SŁAWSKIE — NAJWIĘKSZE JEZIORO
 * WOJEWÓDZTWA LUBUSKIEGO, zwane „Śląskim Morzem".
 * ⚠⚠ POWIERZCHNI JEZIORA NIE PODAJĘ LICZBĄ — cztery różne
 *   wartości w źródłach (817,3 / 817 / 813 / „ponad 850" ha).
 *   Piszę „ponad osiemset hektarów". Głębokość maksymalna
 *   12,3 m podana zgodnie przez dwa źródła.
 * ⚠ LICZBY WYSP NIE PODAJĘ — sprzeczność (kilka / cztery / pięć).
 * Jezioro należy do obrębu Sława Śląska liczącego 14 JEZIOR.
 * OBSZAR CHRONIONEGO KRAJOBRAZU „POJEZIERZE
 * SŁAWSKO-PRZEMĘCKIE": ok. 15 000 ha, lasy 66%, jeziora 8%.
 * ⚠ DATY UTWORZENIA OChK NIE PODAJĘ — nieustalona.
 * ⚠ PRZYNALEŻNOŚCI DO PRZEMĘCKIEGO PARKU KRAJOBRAZOWEGO
 *   NIE TWIERDZĘ — niepotwierdzona.
 * PARK MIEJSKI ok. 30 ha z połowy XIX w., z rzadkimi sosnami
 * czarnymi. Wieża widokowa „Joanna" 40 m nad jez. Tarnowskim
 * Dużym.
 *
 * ⚠⚠ INDYK — PODSTAWA KĄTA. NAJBOGATSZY MATERIAŁ W CAŁYM
 * WOJEWÓDZTWIE:
 * Gmina Sława ma na ministerialnej Liście Produktów
 * Tradycyjnych szereg wyrobów Z INDYKA: kiełbasę sławską
 * z indykiem, kiełbasę podsuszaną sławską z indykiem,
 * serdelki sławskie z indykiem, kiełbasę szynkową sławską
 * z indykiem, kiełbasę myśliwską z indyka, a w kategorii
 * wojewódzkiej także szynkę indyczą, polędwicę z indyka
 * i kiełbasę suchą z indyka. Osobno — MASŁO SŁAWSKIE
 * (kategoria: oleje i tłuszcze).
 * ⚠⚠ DAT WPISU NIE PODAJĘ — SERWIS gov.pl SAM SOBIE PRZECZY:
 *   indeks podaje 23.11.2018, karty produktów 16.11.2018;
 *   indeks 03.06.2018, karta 11.05.2016. PISZĘ BEZ DAT.
 * ⚠ „gmina Sława" figuruje wprost tylko przy TRZECH wpisach
 *   — przy pozostałych karta podaje samo województwo.
 *   Piszę ogólnie „wyroby z indyka spod Sławy".
 * ⚠⚠ FAKT HISTORYCZNY KLUCZOWY: LUBUSKIE TO DRUGI PO
 * OLSZTYŃSKIM OŚRODEK HODOWLI DROBIU W POLSCE, POWSTAŁY
 * W 1986 r.; początkowo mięso indycze szło do celów
 * kulinarnych, z czasem zaczęto z niego wyrabiać wędliny.
 * W gminie niewielkie gospodarstwa zajmują się hodowlą drobiu.
 * ⚠ MASŁO SŁAWSKIE podaję jako fakt — KĄT „masło" ZAJĘTY.
 *   Tradycja wyrobu masła sięga tu XVIII w., ubijano je
 *   ręcznie w drewnianych maselnicach.
 * ⚠⚠ NAZW ZAKŁADÓW I NAZWISK NIE PODAJĘ — ŻADNYCH NAZW FIRM.
 *   Piszę „trzy duże zakłady przetwórcze" i „mleczarnia".
 *
 * RYBACTWO: gospodarstwo rybackie prowadzi gospodarkę na
 * jeziorach gminy i dystrybuuje zezwolenia wędkarskie;
 * w Jeziorze Sławskim żyją szczupak, okoń, leszcz i węgorz.
 * ⚠ KĄTA RYBNEGO NIE UŻYWAM — „ryba" i „ryby" ZAJĘTE.
 *
 * IMPREZY: „JARMARK PRODUKTU LOKALNEGO" — 1 maja, Stary
 * Rynek. Gmina publikuje kalendarz ponad 50 imprez rocznie:
 * Festiwal Bluesowy „Las, Woda & Blues", „Rap Stacja
 * Festiwal", Festiwal Muzyki Chóralnej, Dni Sławy.
 * ⚠ DAT DNI SŁAWY NIE PODAJĘ — rozbieżne. ⚠ NUMERÓW EDYCJI
 *   NIE PODAJĘ. ⚠ NIE TWIERDZĘ, że na Dniach Sławy są
 *   atrakcje kulinarne — brak źródła.
 *
 * ZABYTKI: kościół świętego Michała Archanioła, późnorenesansowy,
 * z amboną z początku XVII w.; kościół przy rynku z wieżą 46 m;
 * pałac barokowy.
 * ⚠ DATOWAŃ KOŚCIOŁÓW I PAŁACU NIE PODAJĘ — wersje rozbieżne.
 *
 * KĄT: INDYK — DRUGIE MIĘSO DROBIOWE, KTÓRE W POLSCE JADA SIĘ
 * PRAWIE WYŁĄCZNIE OD ŚWIĄTA.
 * Kąt od gminy, w której hodowla indyków to gospodarka,
 * a wyroby z indyka trafiły na ministerialną listę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że indyk w polskim domu funkcjonuje jako mięso od święta
 *   albo jako wędlina — a jako obiad prawie wcale,
 * — ŻE TO SIĘ BIERZE Z JEDNEGO STRACHU: że wyjdzie suchy,
 *   i że ten strach jest uzasadniony, ale łatwy do usunięcia,
 * — ŻE INDYK JEST JESZCZE BARDZIEJ CHUDY NIŻ PIERŚ Z KURCZAKA
 *   i dlatego wybacza jeszcze mniej,
 * — ŻE ROZWIĄZANIEM NIE JEST KRÓTSZE GOTOWANIE, tylko
 *   WILGOTNE: duszenie, sos, para, coś mokrego obok,
 * — ŻE UDO INDYCZE TO ZUPEŁNIE INNE MIĘSO NIŻ PIERŚ —
 *   ciemniejsze, tłustsze, znacznie wdzięczniejsze
 *   i wielokrotnie tańsze,
 * — ŻE CAŁY INDYK W DOMOWYM PIEKARNIKU TO ZADANIE TRUDNE
 *   i nie udaję inaczej — bo pierś i uda potrzebują różnego
 *   czasu, a piecze się je razem,
 * — ŻE DLA DWÓCH, TRZECH OSÓB CAŁY PTAK NIE MA SENSU
 *   i lepiej kupić kawałek,
 * — ŻE INDYK JEST WDZIĘCZNY W MIELONYM — daje zwartą,
 *   lekką masę i dobrze przyjmuje przyprawy,
 * — ŻE JEST TEŻ WDZIĘCZNY NA ZIMNO: pieczony i pokrojony
 *   następnego dnia bywa lepszy niż ciepły,
 * — UCZCIWIE: urządzenie nie upiecze indyka i nie zrobi
 *   skórki,
 * — ale robi dokładnie to, czego indyk potrzebuje: gotowanie
 *   w sosie i na parze w pilnowanej temperaturze — czyli
 *   metody, przy których to mięso przestaje być suche.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ PRZY MIĘSIE
 *   PODWÓJNIE. Zero stopni, mimo że karty produktów je podają.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ZERO TEMATÓW BEZPIECZEŃSTWA ŻYWNOŚCI I ZDROWIA.
 *   Zero surowego drobiu jako zagrożenia, zero „chude, więc
 *   zdrowsze", zero białka i kalorii. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM, MAREK ANI NAZWISK.
 * — ZERO tematów hodowli przemysłowej i etyki jedzenia mięsa.
 * — ZERO cen w złotówkach.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kurczak" (Kostrzyn
 * nad Odrą) dotyczy innego ptaka i różnicy między piersią
 * a udkiem. „Wołowina" (Szprotawa) i „baranina" (Kożuchów)
 * dotyczą innych gatunków. „Tłuste kontra chude" dotyczy
 * zawartości tłuszczu jako zasady. „Mielone mięso" dotyczy
 * jednej postaci. „Wędzenie i peklowanie" dotyczą techniki
 * konserwacji. Tutaj chodzi o INDYKA i o powód, dla którego
 * jada się go u nas prawie wyłącznie od święta.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ dat wpisów na Listę Produktów Tradycyjnych.
 * — NIE PODAJĘ powierzchni jeziora liczbą ani liczby wysp.
 * — NIE PODAJĘ nazw zakładów przetwórczych.
 * — NIE DATUJĘ kościołów ani pałacu.
 * — NIE PODAJĘ dat i numeru edycji Dni Sławy.
 * — NIE MYLĘ SŁAWY ze SŁAWNEM, SŁAWKOWEM ani SŁAWOBORZEM.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad cztery tysiące mieszkańców na 14,9 km²,
 *   cała gmina ponad dwanaście tysięcy na 327,1 km²,
 *   z dwudziestoma jeden sołectwami; użytki rolne zajmują 41%
 *   powierzchni gminy, czyli ponad trzynaście tysięcy hektarów,
 * — pierwsze wzmianki o Sławie jako mieście pochodzą z 1312 r.,
 *   a w średniowieczu należała ona do księstwa głogowskiego,
 * — Jezioro Sławskie jest największym jeziorem województwa
 *   lubuskiego — ma ponad osiemset hektarów i 12,3 m
 *   głębokości — i bywa nazywane „Śląskim Morzem”; należy
 *   do obrębu liczącego czternaście jezior, a okolicę chroni
 *   Obszar Chronionego Krajobrazu „Pojezierze
 *   Sławsko-Przemęckie” o powierzchni około piętnastu tysięcy
 *   hektarów, w dwóch trzecich zalesiony; w mieście jest
 *   trzydziestohektarowy park z połowy XIX w. z rzadkimi
 *   sosnami czarnymi, a nad Jeziorem Tarnowskim Dużym stoi
 *   czterdziestometrowa wieża widokowa „Joanna”,
 * — lubuskie jest drugim po olsztyńskim ośrodkiem hodowli
 *   drobiu w Polsce, powstałym w 1986 r.; w gminie Sława
 *   hodowlą drobiu zajmują się niewielkie gospodarstwa,
 *   działają trzy duże zakłady przetwórcze i mleczarnia,
 *   a na ministerialnej Liście Produktów Tradycyjnych
 *   znalazły się stąd kiełbasy, serdelki i szynki z indyka
 *   oraz masło sławskie, którego tradycja wyrobu sięga XVIII w.,
 *   gdy ubijano je ręcznie w drewnianych maselnicach,
 * — na jeziorach gminy gospodarkę rybacką prowadzi
 *   gospodarstwo rybackie, a w Jeziorze Sławskim żyją
 *   szczupak, okoń, leszcz i węgorz,
 * — 1 maja na Starym Rynku odbywa się „Jarmark Produktu
 *   Lokalnego”, a gmina publikuje kalendarz ponad pięćdziesięciu
 *   imprez rocznie, w tym festiwal bluesowy „Las, Woda
 *   & Blues” i Festiwal Muzyki Chóralnej,
 * — z zabytków: późnorenesansowy kościół świętego Michała
 *   Archanioła z amboną z początku XVII w., kościół przy rynku
 *   z wieżą wysoką na czterdzieści sześć metrów oraz barokowy
 *   pałac.
 */
export const SLAWA: CityContent = {
  slug: "slawa",
  h1: "Thermomix Sława – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sława — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sławie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sława — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sławie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sławy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Sława i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na suchego indyka nie pomaga krótsze pieczenie, tylko wilgotne.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sławie – jak wygląda prezentacja?",
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
      id: "indyk",
      heading: "Kiełbasy i serdelki z indyka na ministerialnej liście — czyli o mięsie jadanym od święta",
      paragraphs: [
        "Lubuskie jest drugim po olsztyńskim ośrodkiem hodowli drobiu w Polsce i powstało to nie tak dawno, bo w 1986 roku. W gminie Sława hodowlą zajmują się niewielkie gospodarstwa, działają trzy duże zakłady przetwórcze i mleczarnia, a na ministerialnej Liście Produktów Tradycyjnych znalazły się stąd kiełbasy, serdelki i szynki z indyka — obok masła sławskiego, którego tradycja sięga XVIII wieku.",
        "To dobry powód, żeby napisać o indyku. Bo w polskim domu funkcjonuje on właściwie w dwóch postaciach: jako wędlina w lodówce i jako mięso od święta. Jako zwykły obiad w środę — prawie wcale.",
        "Za tym stoi jeden konkretny strach: że wyjdzie suchy. I nie jest to strach bezpodstawny — indyk naprawdę wysycha łatwo, łatwiej nawet niż pierś z kurczaka, bo jest od niej jeszcze bardziej chudy. Wybacza mniej, a kosztuje więcej, więc porażka boli podwójnie.",
        "Odruch podpowiada wtedy: piec krócej. To jest jednak zła odpowiedź, bo z niedopieczonym mięsem mamy inny kłopot. Właściwa odpowiedź brzmi: piec wilgotno. Dusić, gotować w sosie, robić na parze, dawać obok coś mokrego — cokolwiek, co nie pozwala mięsu oddać całej wilgoci powietrzu.",
        "Druga rzecz, którą warto znać, to podział, o którym mało kto myśli przy indyku. Udo indycze to zupełnie inne mięso niż pierś: ciemniejsze, tłustsze, o wyraźniejszym smaku, znacznie wdzięczniejsze w gotowaniu i wielokrotnie tańsze. Kto chce spróbować indyka poza świętami, powinien zacząć właśnie od uda, a nie od piersi.",
        "Nie będę też udawać, że upieczenie całego indyka w domowym piekarniku jest proste. Nie jest. Pierś i uda potrzebują różnego czasu, a piecze się je razem — więc albo pierś wyschnie, albo uda będą niedopieczone. Da się to obejść, ale to nie jest zadanie na pierwszy raz.",
        "Dla dwóch czy trzech osób cały ptak nie ma zresztą sensu. Lepiej kupić kawałek, zrobić go dobrze i zjeść z przyjemnością, niż walczyć przez pół dnia z czymś, co i tak zostanie na trzy dni w lodówce.",
        "Bardzo wdzięczny jest natomiast indyk mielony i to jest moim zdaniem najbardziej niedoceniana jego postać. Daje zwartą, lekką masę, dobrze przyjmuje przyprawy i sprawdza się wszędzie tam, gdzie wieprzowina byłaby zbyt ciężka — w klopsikach, pulpetach, farszu.",
        "I rzecz ostatnia: indyk jest doskonały na zimno. Upieczony i pokrojony następnego dnia bywa lepszy niż ciepły — to jedno z niewielu mięs, o których można to powiedzieć bez zastrzeżeń.",
        "Teraz uczciwie o sprzęcie. Thermomix nie upiecze indyka i nie zrobi rumianej skórki. Święta nadal będą należeć do piekarnika i nic tego nie zmieni.",
        "Robi natomiast dokładnie to, czego indyk potrzebuje przez resztę roku: gotuje w sosie i na parze, w temperaturze, która nie skacze, i bez konieczności stania obok. A ponieważ cały problem z tym mięsem sprowadza się do wysychania, metoda, która trzyma wilgoć, jest tu warta więcej niż jakikolwiek przepis.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sławie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jakie mięso najczęściej u Was ląduje na obiad. Pod to dobiorę dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sławie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sławskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad cztery tysiące mieszkańców na piętnastu kilometrach kwadratowych, a cała gmina ponad dwanaście tysięcy na trzystu dwudziestu siedmiu, z dwudziestoma jeden sołectwami; użytki rolne zajmują tu czterdzieści jeden procent powierzchni. Pierwsze wzmianki o Sławie jako mieście pochodzą z 1312 roku, a w średniowieczu należała ona do księstwa głogowskiego. Jezioro Sławskie jest największym jeziorem województwa — ma ponad osiemset hektarów i przeszło dwanaście metrów głębokości — i bywa nazywane „Śląskim Morzem”; należy do obrębu liczącego czternaście jezior, a okolicę chroni Obszar Chronionego Krajobrazu „Pojezierze Sławsko-Przemęckie”, w dwóch trzecich zalesiony. W mieście jest trzydziestohektarowy park z połowy XIX wieku z rzadkimi sosnami czarnymi, a nad Jeziorem Tarnowskim Dużym stoi czterdziestometrowa wieża widokowa „Joanna”. Lubuskie jest drugim po olsztyńskim ośrodkiem hodowli drobiu w Polsce, powstałym w 1986 roku; w gminie hodowlą zajmują się niewielkie gospodarstwa, działają trzy duże zakłady przetwórcze i mleczarnia, a na ministerialnej Liście Produktów Tradycyjnych znalazły się stąd kiełbasy, serdelki i szynki z indyka oraz masło sławskie, ubijane dawniej ręcznie w drewnianych maselnicach. Na jeziorach gospodarkę prowadzi gospodarstwo rybackie, a w Sławskim żyją szczupak, okoń, leszcz i węgorz. 1 maja na Starym Rynku odbywa się „Jarmark Produktu Lokalnego”, a gmina publikuje kalendarz ponad pięćdziesięciu imprez rocznie. Z zabytków zostały późnorenesansowy kościół świętego Michała Archanioła z amboną z początku XVII wieku, kościół przy rynku z czterdziestosześciometrową wieżą i barokowy pałac.",
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

  districtsHeading: "Do których części gminy Sława dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu jeden sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Sławę też przyjadę",
  nearbyParagraphs: [
    "Wschowa, Nowa Sól, Szlichtyngowa, Kolsko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wschowa", "Nowa Sól", "Szlichtyngowa", "Kolsko"],

  about: blokOMnie("do Sławy", "w Sławie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sławy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu jeden sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Sława nad Jeziorem Sławskim w powiecie wschowskim to nie Sławno ani Sławków.",
    },
    ...faqWspolne("w Sławie"),
    {
      question: "Dlaczego indyk wychodzi suchy?",
      answer:
        "Bo jest jeszcze bardziej chudy niż pierś z kurczaka i wybacza jeszcze mniej. Odruch podpowiada piec krócej, ale właściwa odpowiedź brzmi: piec wilgotno — dusić, gotować w sosie, robić na parze, dawać obok coś mokrego.",
    },
    {
      question: "Od czego zacząć, jeśli indyk kojarzy się tylko ze świętami?",
      answer:
        "Od uda, nie od piersi. Udo indycze to zupełnie inne mięso: ciemniejsze, tłustsze, o wyraźniejszym smaku, wdzięczniejsze w gotowaniu i wielokrotnie tańsze. Dla dwóch czy trzech osób cały ptak i tak nie ma sensu.",
    },
    {
      question: "Czy indyk nadaje się na co dzień?",
      answer:
        "Bardzo — zwłaszcza mielony, bo daje zwartą, lekką masę i dobrze przyjmuje przyprawy tam, gdzie wieprzowina byłaby zbyt ciężka. Jest też jednym z niewielu mięs, które pokrojone na zimno następnego dnia bywają lepsze niż ciepłe.",
    },
  ],

  geo: { lat: 51.8781, lng: 16.0672 },
};
