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
 * NASIELSK — powiat nowodworski, woj. mazowieckie.
 * MIASTO 7 301 (GUS 31.12.2024), 12,6 km², 580,8 os./km².
 * Gmina: 19 139 mieszkańców, 206 km².
 * ⚠ en.wikipedia podaje 7 650 (2020) — UŻYWAM GUS.
 *
 * ⚠ HOMONIMY: NASIELSK ≠ NASIŁÓW ≠ NISKO. FAQ to rozróżnia.
 *
 * ⚠⚠ OLEJARNIE — PODSTAWA KĄTA:
 * — OLEJARNIE WE WSI NOWA WIEŚ (dziś dzielnica Nasielska)
 *   WZMIANKOWANE SĄ OD 1474 ROKU,
 * — po II wojnie olejarnie w Nasielsku przerabiały MIEJSCOWY
 *   SUROWIEC i dostarczały olej lniany do Warszawy,
 * — „OLEJ LNIANY TŁOCZONY NA ZIMNO" figuruje na mazowieckiej
 *   Liście Produktów Tradycyjnych (publikacja Urzędu
 *   Marszałkowskiego 04.04.2017); produkt to 100% oleju
 *   lnianego, bez dodatków; tradycyjne zastosowanie:
 *   DO ZIEMNIAKÓW, SOSÓW I SAŁATEK,
 * — ⚠⚠ PUŁAPKA: POD TĄ SAMĄ NAZWĄ NA gov.pl FIGURUJE
 *   PRODUKT Z WOJ. LUBUSKIEGO (wpis 28.08.2015, rejon Odry,
 *   odmiana lnu „szafir"). TO DWA RÓŻNE WPISY.
 *   NIE MYLIĆ. TWARDA GRANICA.
 * — ⚠ DOKŁADNEJ DATY WPISU NASIELSKIEGO OLEJU NIE PODAJĘ
 *   — znana jest tylko data publikacji.
 * ⚠⚠ KĄTY „OLEJE — KTÓRY DO CZEGO" (Szepietowo) i „NASIONA
 *   I ZIARNA — SIEMIĘ…" (Lubsko) SĄ ZAJĘTE. ANI OLEJU, ANI
 *   SIEMIENIA NIE ROBIĘ TEMATEM. TWARDA GRANICA.
 *
 * FABRYKA GUZIKÓW (fakt w bloku o mieście):
 * — fabryka guzików braci Arona i Barucha Filarów, założona
 *   1897 — jedna z najstarszych w Polsce w tej branży;
 *   szczyt w latach 20. XX w.; w 1930 r. ok. 200 pracowników,
 *   znaczną część zespołu stanowiły kobiety; zarząd główny
 *   w Warszawie; w 1928 r. eksport guzików do Rosji za ok.
 *   15 tys. dolarów; produkowano też grzebienie, klamry
 *   i klipsy oraz sprzęt radiowy,
 * — wyrabiano z GALALITU, BAKELITU, SZTUCZNEGO ROGU I MASY
 *   PERŁOWEJ; surowce sprowadzano głównie z Niemiec i Japonii,
 * — ⚠ GALALIT WYTWARZANO Z KAZEINY MLEKA — ciekawostka,
 *   ale kąty „mleko i nabiał", „sery", „twaróg" SĄ ZAJĘTE.
 *   UŻYWAM JEJ JAKO JEDNEGO ZDANIA, NIE JAKO TEMATU.
 *
 * DALSZE FAKTY:
 * — pierwsza wzmianka 1065 jako „Nosidlsk"; osada obronna
 *   od IX w.; PRAWA MIEJSKIE 1386 (Janusz I nadał pozostałą
 *   część miasta rycerzowi Jakuszowi z Radzanowa); 1440 pożar
 *   drewnianego kościoła, murowany pięć lat później,
 * — XIX w.: OSIEM JARMARKÓW ROCZNIE; w latach 20. XIX w.
 *   nasielskie garbarnie i fabryki znane z dobrej jakości
 *   skór i sukna, z popytem z odległych miast mazowieckich;
 *   liczba karczem spadła z 12 (1844) do 7 (1857),
 *   ⚠ ZERO TEMATU ALKOHOLU — karczmy i gorzelnictwo pomijam.
 * — ⚠ WĘZŁEM KOLEJOWYM Nasielsk stał się w 1924 r. — kąt
 *   „węzeł kolejowy" ZAJĘTY, podaję tylko jako datę.
 *
 * ZABYTKI: kościół murowany wzniesiony ok. 1445 (po pożarze
 * drewnianego w 1440); synagoga z poł. XVIII w.; cmentarz
 * żydowski przy ul. Kwiatowej; dwór w Chrcynnie (gmina
 * Nasielsk).
 * ⚠ WĄTKÓW WYZNANIOWYCH NIE ROZWIJAM — obiekty wymieniam
 *   wyłącznie jako zabytki. TWARDA GRANICA.
 * ⚠ PEŁNEJ LISTY ZABYTKÓW Z DATAMI NIE USTALONO.
 * ⚠ NAZW OSIEDLI POZA NOWĄ WSIĄ NIE USTALONO.
 *
 * KĄT: WYTŁOKI — druga połowa tego, co się wycisnęło.
 * Kąt od nasielskich olejarni wzmiankowanych od 1474 roku:
 * przy tłoczeniu oleju powstaje makuch, który nigdy nie był
 * odpadem. W domowej kuchni wyciskamy stale, a to, co zostaje,
 * zwykle ląduje w koszu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że każde wyciskanie dzieli produkt na dwie części,
 *   a my myślimy tylko o jednej,
 * — ŻE W TŁOCZNI OLEJU TO, CO ZOSTAJE — MAKUCH — nigdy nie
 *   było odpadem; miało własną nazwę, własną cenę i własne
 *   zastosowanie,
 * — GDZIE TO SAMO DZIEJE SIĘ W DOMU:
 *   — MIĄŻSZ PO SOKU Z MARCHWI, BURAKA, JABŁEK — to jest
 *     gotowy składnik do ciasta, kotletów warzywnych, farszu
 *     i zup,
 *   — MIĄŻSZ PO MLEKU ROŚLINNYM Z ORZECHÓW I MIGDAŁÓW —
 *     po podsuszeniu zachowuje się jak grubo mielona mąka,
 *   — SKÓRKI I PESTKI PO PRZECIERANIU PRZEZ SITO — z części
 *     da się zrobić syrop albo wywar,
 *   — SERWATKA PO SERZE — płyn, nie wytłok, ale z tej samej
 *     rodziny rzeczy odkładanych na bok,
 *   — WODA PO NAMACZANIU SUSZONYCH GRZYBÓW
 *     ⚠ ODSYŁAM DO STRONY O WODZIE PO GOTOWANIU,
 *       NIE ROZWIJAM,
 * — ⚠⚠ ZASADA, KTÓRA PORZĄDKUJE TEMAT: WYTŁOK MA MNIEJ SMAKU
 *   I WIĘCEJ STRUKTURY, a sok odwrotnie. Dlatego wytłok
 *   sprawdza się tam, gdzie potrzebna jest treść: w cieście,
 *   w kotlecie, w farszu — a nie tam, gdzie liczy się smak,
 * — ŻE NIE WSZYSTKO DA SIĘ WYKORZYSTAĆ i nie ma sensu
 *   udawać inaczej: wytłok z cytrusów jest gorzki, a z selera
 *   włóknisty,
 * — ŻE WYTŁOKI TRZYMAJĄ SIĘ KRÓCEJ NIŻ SUROWIEC, bo mają
 *   ogromną powierzchnię ⚠ ODSYŁAM DO STRONY O POWIERZCHNI,
 * — ŻE NAJROZSĄDNIEJ JEST ZDECYDOWAĆ OD RAZU: albo się je
 *   od razu użyje, albo mrozi w płaskiej torebce, albo się
 *   je wyrzuca bez wyrzutów sumienia,
 * — ⚠ ZERO MORALIZOWANIA — kąt „MARNOWANIE JEDZENIA" jest
 *   ZAJĘTY i tam jest strona moralna. TWARDA GRANICA.
 * — UCZCIWIE: urządzenie nie wyciska soku — nie ma
 *   wyciskarki ani prasy, więc wytłoków samo nie produkuje,
 * — ale robi drugą połowę roboty: to właśnie w nim wytłok
 *   staje się ciastem, kotletem albo farszem, bo wymaga
 *   dokładnego wymieszania z resztą i rozdrobnienia
 *   do końca.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO tez o błonniku, witaminach i „zero waste"
 *   jako filozofii. TWARDA GRANICA.
 * — ⚠ ZERO TEMATU OLEJU JAKO SKŁADNIKA — kąt ZAJĘTY.
 *   Olejarnie są KOTWICĄ, nie tematem.
 * — ⚠ ZERO TEMATU SIEMIENIA LNIANEGO — kąt ZAJĘTY.
 * — ŻADNYCH NAZW FIRM WSPÓŁCZESNYCH.
 * — ⚠ ZERO ALKOHOLU.
 * — ⚠ ZERO WĄTKÓW WYZNANIOWYCH.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu końca fabryki guzików.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „OBIERKI, SKÓRKI I ŁODYGI" (Wieruszów) dotyczy TEGO,
 *   CO WYRZUCAMY PRZED GOTOWANIEM.
 *   ⚠⚠ TUTAJ CHODZI O TO, CO POWSTAJE W TRAKCIE — o wytłok
 *     po wyciśnięciu, nie o odpad przed obróbką.
 * — „MARNOWANIE JEDZENIA" (Rawa Mazowiecka) dotyczy STRONY
 *   MORALNEJ I KOSZA.
 * — „ODSĄCZANIE I ODCISKANIE" (Łapy) dotyczy USUWANIA WODY
 *   ZE SKŁADNIKA, KTÓRY POTEM SIĘ GOTUJE.
 * — „WODA PO GOTOWANIU — czy wylewać" (Ryn) dotyczy WYWARU.
 * — „resztki" dotyczą TEGO, CO ZOSTAŁO PO OBIEDZIE.
 * — „NADMIAR JEDNEGO SKŁADNIKA" dotyczy ZA DUŻEJ ILOŚCI.
 * TUTAJ chodzi o DRUGĄ CZĘŚĆ PRODUKTU PO WYCIŚNIĘCIU —
 * o miąższ, który zostaje, i o to, do czego się nadaje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MYLĘ nasielskiego wpisu LPT z lubuskim.
 * — NIE PODAJĘ dokładnej daty wpisu nasielskiego oleju.
 * — NIE TWIERDZĘ, czy len jest dziś uprawiany w gminie.
 * — NIE PODAJĘ pełnej listy zabytków ani osiedli.
 * — NIE PISZĘ o karczmach i gorzelnictwie.
 * — NIE MYLĘ NASIELSKA z NASIŁOWEM ani NISKIEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Nasielsku pochodzi z 1065 r. jako
 *   „Nosidlsk", a osada obronna istniała tu od IX w.;
 *   prawa miejskie miasto otrzymało w 1386 r. od Janusza I,
 *   a po pożarze drewnianego kościoła w 1440 r. murowany
 *   wzniesiono około 1445,
 * — olejarnie we wsi Nowa Wieś, dziś dzielnicy Nasielska,
 *   wzmiankowane są od 1474 r.; po drugiej wojnie tutejsze
 *   olejarnie przerabiały miejscowy surowiec i dostarczały
 *   olej lniany do Warszawy, a „olej lniany tłoczony
 *   na zimno" figuruje na mazowieckiej Liście Produktów
 *   Tradycyjnych jako produkt bez żadnych dodatków, tradycyjnie
 *   używany do ziemniaków, sosów i sałatek,
 * — w XIX w. odbywało się tu osiem jarmarków rocznie,
 *   a w latach dwudziestych tego stulecia nasielskie garbarnie
 *   i fabryki były znane z dobrej jakości skór i sukna,
 *   na które był popyt w odległych miastach Mazowsza,
 * — w 1897 r. bracia Aron i Baruch Filarowie założyli tu
 *   fabrykę guzików — jedną z najstarszych w Polsce w tej
 *   branży; w 1930 r. zatrudniała około dwustu osób, w tym
 *   wiele kobiet, a w 1928 r. wyeksportowała guziki do Rosji
 *   za około piętnaście tysięcy dolarów; wyrabiano je
 *   z galalitu, bakelitu, sztucznego rogu i masy perłowej,
 *   a surowce sprowadzano głównie z Niemiec i Japonii —
 *   galalit wytwarzano przy tym z kazeiny mleka,
 * — w 1924 r. Nasielsk stał się ważnym węzłem kolejowym,
 * — w mieście zachowała się synagoga z połowy XVIII w.,
 *   a w Chrcynnie w gminie Nasielsk — dwór.
 */
export const NASIELSK: CityContent = {
  slug: "nasielsk",
  h1: "Thermomix Nasielsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nasielsk — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Nasielsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nasielsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nasielsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nasielska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Nasielsk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Każde wyciskanie dzieli produkt na dwie części. Myślimy tylko o jednej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nasielsku – jak wygląda prezentacja?",
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
      id: "wytloki",
      heading: "Olejarnie od 1474 roku — czyli o tym, co zostaje po wyciśnięciu",
      paragraphs: [
        "Olejarnie we wsi Nowa Wieś, dziś dzielnicy Nasielska, wzmiankowane są od 1474 roku. Po wojnie tutejsze tłocznie przerabiały miejscowy surowiec i dostarczały olej lniany do Warszawy, a „olej lniany tłoczony na zimno” trafił na mazowiecką Listę Produktów Tradycyjnych — jako produkt bez żadnych dodatków, tradycyjnie używany do ziemniaków, sosów i sałatek.",
        "W tłoczni olej jest tylko połową tego, co wychodzi z prasy. Druga połowa to makuch — zbity placek tego, co zostało po wyciśnięciu. I rzecz, która mnie w tym zawsze uderzała: makuch nigdy nie był odpadem. Miał własną nazwę, własną cenę i własne zastosowanie. Nikt w tłoczni nie mówił o nim „resztka”.",
        "W domowej kuchni wyciskamy właściwie stale — i prawie zawsze myślimy tylko o jednej połowie.",
        "Najbardziej oczywisty przykład to sok. Miąższ, który zostaje po wyciśnięciu soku z marchwi, buraka czy jabłek, to gotowy składnik: idzie do ciasta, do kotletów warzywnych, do farszu, do zupy. Jest już rozdrobniony i odwodniony, czyli ma za sobą pracę, którą i tak trzeba by wykonać.",
        "Drugi to mleko roślinne. Po odcedzeniu migdałów czy orzechów zostaje miąższ, który po podsuszeniu zachowuje się jak grubo mielona mąka — i tak właśnie warto go traktować.",
        "Trzeci to przecieranie przez sito: skórki i pestki, z których części da się jeszcze zrobić syrop albo wywar. A czwarty, z tej samej rodziny rzeczy odkładanych na bok, to serwatka po domowym serze — nie wytłok, ale dokładnie ta sama sytuacja.",
        "Warto przy tym znać zasadę, która porządkuje cały temat: wytłok ma mniej smaku i więcej struktury, a sok odwrotnie. To brzmi banalnie, ale ma bardzo praktyczną konsekwencję. Wytłok sprawdza się tam, gdzie potrzebna jest treść — w cieście, w kotlecie, w farszu, w pulpecie. Nie sprawdza się tam, gdzie liczy się smak; dodany do sosu nie wniesie prawie nic poza gęstością.",
        "Trzeba też uczciwie powiedzieć, że nie wszystko da się wykorzystać i nie ma sensu udawać inaczej. Wytłok z cytrusów jest gorzki. Z selera włóknisty. Z niektórych warzyw po prostu niesmaczny. To nie jest temat, w którym wszystko nadaje się na wszystko.",
        "Rzecz, o której warto pamiętać praktycznie: wytłoki psują się szybciej niż surowiec, z którego powstały, bo mają ogromną powierzchnię — pisałam o tym osobno. Dlatego najrozsądniej jest zdecydować od razu, jeszcze przy blacie: albo się ich użyje dzisiaj, albo zamrozi w płaskiej torebce, albo wyrzuci bez rozterek. Miseczka miąższu odstawiona „na później” prawie zawsze kończy tak samo, tylko dwa dni później.",
        "Teraz uczciwie o sprzęcie. Thermomix nie wyciska soku. Nie ma wyciskarki ani prasy, więc sam wytłoków nie produkuje — jeśli ich u Was nie ma, to ten tekst jest raczej o sokowirówce niż o nim.",
        "Robi natomiast drugą połowę roboty, i to właśnie tę, w której wytłok staje się jedzeniem. Bo miąższ sam z siebie nie jest daniem: musi zostać dokładnie wymieszany z resztą i rozdrobniony do końca, inaczej w cieście zostaną włókniste grudki. To jest dokładnie ta czynność, przy której ręka się poddaje, a urządzenie nie ma z nią problemu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nasielsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli robicie w domu soki albo mleko roślinne — powiedzcie przy umawianiu. Pokażę, co zrobić z tym, co zostaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nasielsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nasielskiej rodziny",
      paragraphs: [
        "Nasielsk liczy ponad siedem tysięcy mieszkańców na niespełna trzynastu kilometrach kwadratowych i jest siedzibą gminy zamieszkanej przez ponad dziewiętnaście tysięcy osób. Pierwsza wzmianka o miejscowości pochodzi z 1065 roku, jako „Nosidlsk”, a osada obronna istniała tu już od IX wieku; prawa miejskie miasto otrzymało w 1386 roku od Janusza I, a po pożarze drewnianego kościoła w 1440 murowany wzniesiono około 1445. Olejarnie we wsi Nowa Wieś, dziś dzielnicy Nasielska, wzmiankowane są od 1474 roku — po wojnie tutejsze tłocznie przerabiały miejscowy surowiec i dostarczały olej lniany do Warszawy, a „olej lniany tłoczony na zimno” figuruje na mazowieckiej Liście Produktów Tradycyjnych jako produkt bez dodatków, używany tradycyjnie do ziemniaków, sosów i sałatek. W XIX wieku odbywało się tu osiem jarmarków rocznie, a nasielskie garbarnie i fabryki były znane z dobrej jakości skór i sukna, na które był popyt w odległych miastach Mazowsza. W 1897 roku bracia Aron i Baruch Filarowie założyli fabrykę guzików — jedną z najstarszych w Polsce w tej branży; w 1930 zatrudniała około dwustu osób, w tym wiele kobiet, a dwa lata wcześniej wyeksportowała guziki do Rosji za około piętnaście tysięcy dolarów. Wyrabiano je z galalitu, bakelitu, sztucznego rogu i masy perłowej, a surowce sprowadzano głównie z Niemiec i Japonii — sam galalit wytwarzano z kazeiny mleka. W 1924 roku Nasielsk stał się ważnym węzłem kolejowym. Zachowała się tu synagoga z połowy XVIII wieku, a w Chrcynnie w gminie Nasielsk — dwór.",
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

  districtsHeading: "Do których części Nasielska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z Nową Wsią, dawną wsią, a dziś dzielnicą. Dojeżdżam też do miejscowości w gminie, między innymi do Chrcynna i Cieksyna.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Nowa Wieś"],

  nearbyHeading: "Poza Nasielsk też przyjadę",
  nearbyParagraphs: [
    "Nowy Dwór Mazowiecki, Pułtusk, Serock, Płońsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowy Dwór Mazowiecki", "Pułtusk", "Serock", "Płońsk"],

  about: blokOMnie("do Nasielska", "w Nasielsku", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nasielska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie z Nową Wsią — oraz do miejscowości w gminie, w tym Chrcynna i Cieksyna. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Nasielsk w powiecie nowodworskim, a nie o Nasiłów czy Nisko.",
    },
    ...faqWspolne("w Nasielsku"),
    {
      question: "Co zrobić z miąższem po wyciśnięciu soku?",
      answer:
        "Użyć go tam, gdzie potrzebna jest treść: w cieście, w kotletach warzywnych, w farszu, w pulpetach. Miąższ po soku z marchwi, buraka czy jabłek jest już rozdrobniony i odwodniony, czyli ma za sobą pracę, którą i tak trzeba by wykonać. Podobnie miąższ po mleku roślinnym — po podsuszeniu zachowuje się jak grubo mielona mąka.",
    },
    {
      question: "Czy każdy wytłok da się wykorzystać?",
      answer:
        "Nie. Wytłok z cytrusów jest gorzki, z selera włóknisty, a z niektórych warzyw po prostu niesmaczny. Zasada jest taka, że wytłok ma mniej smaku i więcej struktury niż sok — więc sprawdza się tam, gdzie potrzebna jest treść, a nie tam, gdzie liczy się smak.",
    },
    {
      question: "Jak długo można przechowywać wytłoki?",
      answer:
        "Krócej niż surowiec, z którego powstały — mają ogromną powierzchnię, więc szybko przechodzą. Najrozsądniej zdecydować od razu przy blacie: użyć tego samego dnia, zamrozić w płaskiej torebce albo wyrzucić bez rozterek. Miseczka odstawiona „na później” zwykle kończy tak samo, tylko dwa dni później.",
    },
  ],

  geo: { lat: 52.5899, lng: 20.8057 },
};
