import type { CityContent } from "../city-content";
import {
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
 * RADZIEMICE — gmina wiejska, powiat proszowicki, Płaskowyż
 * Proszowicki / Wyżyna Miechowska. 3 169 mieszkańców (31.12.2024,
 * GUS) na 58,0 km², 55 os./km². SZESNAŚCIE SOŁECTW.
 * NAJMNIEJSZA LUDNOŚCIOWO GMINA POWIATU PROSZOWICKIEGO.
 *
 * OŚ STRONY: CZOSNEK. Małopolskie Święto Czosnku odbywa się od 2007 r.
 * NAPRZEMIENNIE w gminach Radziemice i Słomniki; XVI edycja
 * 26 lipca 2026 w OBRAŻEJOWICACH, z konkursem „Superwiązka polskiego
 * czosnku".
 *
 * DRUGA OŚ: GMINA PRAKTYCZNIE BEZLEŚNA. Użytki rolne ok. 94%
 * powierzchni, LASY OK. 1% — 46 ha, jeden jedyny kompleks
 * w sołectwie Wrocimowice. Czarnoziemy „ziemi proszowickiej",
 * klasy I–III. 665 gospodarstw, ŚREDNIA POWIERZCHNIA 6,3 HA,
 * z tego 321 (48,3%) ma 1–5 ha.
 *
 * TRZECIA: NIE MA TU ŻADNEJ DROGI KRAJOWEJ ANI WOJEWÓDZKIEJ —
 * cytat wprost z gminnej Diagnozy stanu gminy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 3 169
 *   mieszkańców, 55 os./km² (przy średniej powiatu 101), średni wiek
 *   42,7 lat; SPADEK O 8,8% w latach 2002–2024; 23 urodzenia,
 *   37 zgonów (−14),
 * — NAJMNIEJSZA LUDNOŚCIOWO GMINA POWIATU PROSZOWICKIEGO:
 *   3 169 wobec Pałecznicy 3 436, Koszyc 5 212. ⚠️ NIE jest najmniejsza
 *   w Małopolsce (sąsiednie Racławice mają 2 426) — tego nie piszę,
 * — SOŁECTWA (16, lista sołtysów gminy): Błogocice, Dodów, Kaczowice,
 *   Kąty, Kowary, Lelowice, Łętkowice, Łętkowice-Kolonia,
 *   Obrażejowice, Przemęczanki, Przemęczany, Radziemice, Smoniowice,
 *   Wierzbica, Wrocimowice, Zielenice. ⚠️ Gminna Diagnoza podaje 17,
 *   dodając Wolę Gruszowską — opisuję ją jako miejscowość,
 * — POŁOŻENIE: styk Płaskowyżu Proszowickiego i Wyżyny Miechowskiej;
 *   północna część to tzw. PADÓŁ RACŁAWICKI; gleby lessowe, teren
 *   pagórkowaty,
 * — ROLNICTWO (gminna Diagnoza): UŻYTKI ROLNE ~94% powierzchni;
 *   LASY ~1%, ok. 46 ha, jedyny kompleks (grąd z grabem i dębem
 *   szypułkowym) w sołectwie WROCIMOWICE; gleby: CZARNOZIEMY „ziemi
 *   proszowickiej", klasy I–III; 665 GOSPODARSTW, z tego 321 (48,3%)
 *   o powierzchni 1–5 ha; ŚREDNIA POWIERZCHNIA GOSPODARSTWA 6,3 HA.
 *   Uprawy: zboża, motylkowe, okopowe, silne WARZYWNICTWO — cebula,
 *   pietruszka, ziemniaki, buraki; do tego CZOSNEK. Produkcja
 *   zwierzęca oparta na trzodzie chlewnej,
 * — GOSPODARKA: 348 podmiotów REGON; bezrobocie 5,5%; SALDO DOJAZDÓW
 *   DO PRACY −113; 50,9% pracujących w sektorze rolniczym,
 * — MAŁOPOLSKIE ŚWIĘTO CZOSNKU: od 2007 r., NAPRZEMIENNIE Radziemice
 *   i Słomniki; XVI edycja 26 lipca 2026 w OBRAŻEJOWICACH, konkurs
 *   „Superwiązka polskiego czosnku"; XIV/2024 Obrażejowice,
 *   XV/2025 Prandocin (gm. Słomniki),
 * — KOŚCIOŁY (wszystkie MUROWANE): św. Stanisława BM w Radziemicach
 *   (1631–1653, murowany z cegły, otynkowany); św. Andrzeja Apostoła
 *   we Wrocimowicach (1748–1754, późny barok); sanktuarium
 *   w Zielenicach (kościół 1681–1691); św. Trójcy w Łętkowicach
 *   (1902, neogotyk). DWÓR W KOWARACH, XIX w.,
 * — ORGANIZACJE: 13 KÓŁ GOSPODYŃ WIEJSKICH, 8 jednostek OSP,
 *   orkiestry dęte (m.in. „Sygnał" w Zielenicach, orkiestra
 *   we Wrocimowicach),
 * — DOŻYNKI GMINNE — ROTACJA PO SOŁECTWACH: 2022 Radziemice (28.08),
 *   2023 Łętkowice (31.08), 2024 Wrocimowice (25.08), 2025
 *   Przemęczanki (27.08), 2026 BŁOGOCICE,
 * — TRANSPORT: „przez gminę nie przebiegają żadne drogi krajowe ani
 *   wojewódzkie" (gminna Diagnoza i Strategia 2023–2033); obsługa —
 *   drogi powiatowe (m.in. trasa Kocmyrzów–Racławice) i 52 km dróg
 *   gminnych; BRAK STACJI I LINII KOLEJOWEJ, najbliższa stacja
 *   w Słomnikach,
 * — OBSZARY CHRONIONE: 15,9% powierzchni gminy (bez nazw),
 * — SĄSIEDZI: Racławice i Miechów (pow. miechowski), Pałecznica,
 *   Koniusza i Proszowice (proszowicki), Słomniki (krakowski).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — MARCINA Z WROCIMOWIC I GRUNWALDU. Potwierdzone jest TYLKO
 *   istnienie „Stowarzyszenia Marcina z Wrocimowic". Sama biografia
 *   — chorąży, Grunwald, daty — NIE POTWIERDZONA. Nie piszę o niej
 *   ani słowa, choć byłby to świetny akapit,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzony,
 * — NUMERÓW DRÓG POWIATOWYCH. Nie potwierdzone,
 * — ODLEGŁOŚCI DROGOWYCH do Krakowa, Proszowic, Słomnik, Miechowa.
 *   Nie potwierdzone — nie podaję liczb,
 * — NAZW OBSZARÓW NATURA 2000. Nie potwierdzone,
 * — KONKRETNYCH POTRAW LOKALNYCH I NAZW POSZCZEGÓLNYCH KGW.
 *   Nie potwierdzone,
 * — NAZWY SANKTUARIUM W ZIELENICACH. Źródła podają dwie różne wersje
 *   — piszę „sanktuarium w Zielenicach", bez wezwania.
 *
 * PUŁAPKI:
 * — „DOLINA SZRENIAWY" TO BŁĄD. Szreniawa nie przepływa przez tę
 *   gminę. Płyną tu ŚCIEKLEC (największy lewostronny dopływ Szreniawy)
 *   i KNIEJÓWKA. Poprawnie: „w dorzeczu Szreniawy, nad Ścieklcem",
 * — NIE MA TU DRÓG WOJEWÓDZKICH. Częsty błąd: przypisywanie DW 775
 *   (Słomniki–Proszowice) jako przechodzącej przez Radziemice,
 * — WSZYSTKIE KOŚCIOŁY SĄ MUROWANE. Gmina nie ma obiektu na Szlaku
 *   Architektury Drewnianej,
 * — NAJMNIEJSZA W POWIECIE — TAK. W MAŁOPOLSCE — NIE (Racławice
 *   mają 2 426 mieszkańców),
 * — 16 CZY 17 SOŁECTW: lista sołtysów podaje 16, Diagnoza 17 (z Wolą
 *   Gruszowską). Piszę 16,
 * — LELOWICE (gm. Radziemice) ≠ LELOWICE-KOLONIA (gm. Pałecznica),
 * — ŁĘTKOWICE ≠ ŁĘTKOWICE-KOLONIA — dwa odrębne sołectwa,
 * — PADÓŁ RACŁAWICKI to jednostka fizycznogeograficzna, NIE MA
 *   ZWIĄZKU z bitwą racławicką (ta była w gm. Racławice),
 * — GMINA RADZIEMICE ≠ GMINA RACŁAWICE.
 */

export const RADZIEMICE: CityContent = {
  slug: "radziemice",
  h1: "Thermomix Radziemice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Radziemice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Radziemice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Radziemice, Łętkowice, Obrażejowice, Wrocimowice, Zielenice. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radziemice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Radziemice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Radziemice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich szesnastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 16 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Radziemice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Radziemicach, jak w Łętkowicach, Obrażejowicach, Wrocimowicach czy Zielenicach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "Przez gminę nie przechodzi żadna droga krajowa ani wojewódzka, więc dojeżdżam tu drogami powiatowymi i gminnymi. Dla mnie to bez różnicy, ale przy umawianiu warto podać punkt orientacyjny.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina, w której lasu jest jeden procent, a czosnek ma własne święto",
      paragraphs: [
        "Radziemice to gmina, która jest polem. Użytki rolne zajmują tu około dziewięćdziesięciu czterech procent powierzchni, a lasy około jednego — czterdzieści sześć hektarów, jeden jedyny kompleks, w sołectwie Wrocimowice. Grąd z grabem i dębem szypułkowym. Tyle.",
        "Ziemia to czarnoziemy „ziemi proszowickiej”, klasy od pierwszej do trzeciej, na podłożu lessowym. Gospodarstw jest sześćset sześćdziesiąt pięć, ale drobnych: prawie połowa z nich ma od hektara do pięciu, a średnia powierzchnia to sześć i trzy dziesiąte hektara.",
        "Uprawia się tu zboża, rośliny motylkowe i okopowe, dużo warzyw — cebulę, pietruszkę, ziemniaki, buraki — i czosnek. Ten ostatni na tyle poważnie, że ma własne święto.",
        "Małopolskie Święto Czosnku odbywa się od dwa tysiące siódmego roku, naprzemiennie w Radziemicach i w Słomnikach. Szesnasta edycja przypadła na dwudziestego szóstego lipca dwa tysiące dwudziestego szóstego roku w Obrażejowicach, z konkursem na — cytuję nazwę — „Superwiązkę polskiego czosnku”.",
        "To najmniejsza ludnościowo gmina powiatu proszowickiego: trzy tysiące sto sześćdziesiąt dziewięć osób na pięćdziesięciu ośmiu kilometrach kwadratowych, czyli pięćdziesiąt pięć na kilometr przy stu jeden dla całego powiatu. Ludności ubywa — o osiem i osiem dziesiątych procent od dwa tysiące drugiego roku. Nie ma sensu tego upiększać.",
        "Zabytki są tu murowane i to warto powiedzieć od razu, bo okolica kojarzy się ze szlakiem drewnianej architektury. Kościół świętego Stanisława w Radziemicach z lat tysiąc sześćset trzydziestych i pięćdziesiątych, świętego Andrzeja Apostoła we Wrocimowicach z połowy osiemnastego wieku, sanktuarium w Zielenicach z końca siedemnastego, kościół świętej Trójcy w Łętkowicach z tysiąc dziewięćset drugiego. Do tego dziewiętnastowieczny dwór w Kowarach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Radziemice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, bo jest ich szesnaście: Radziemice, Łętkowice, Łętkowice-Kolonia, Obrażejowice, Wrocimowice, Zielenice, Błogocice, Kowary, Przemęczany, Przemęczanki, Smoniowice, Kaczowice, Wierzbica, Lelowice, Kąty albo Dodów.",
        "Przy Łętkowicach warto dopisać, czy chodzi o Łętkowice, czy o Łętkowice-Kolonię — to dwa osobne sołectwa. Dopłaty za odległość nie ma w żadnym z nich.",
        "W lipcu, w okolicach Święta Czosnku, i pod koniec sierpnia, przy dożynkach, warto umówić się z wyprzedzeniem — w tak małej gminie te dwa terminy angażują naprawdę wielu ludzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Radziemice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sześć hektarów, warzywa i rok podzielony sezonem",
      paragraphs: [
        "Ponad połowa pracujących mieszkańców tej gminy pracuje w rolnictwie, a gospodarstwa są drobne — średnio sześć i trzy dziesiąte hektara, prawie połowa poniżej pięciu. To znaczy praca własnymi rękami i rok podzielony sezonem, a nie kalendarzem.",
        "W takim domu kuchnia robi wszystko od podstaw. Warzywa nie przychodzą w opakowaniu — przychodzą z pola i trzeba je obrać, pokroić, ugotować, zmiksować, wekować. Urządzenie zabiera z tego rozdrabnianie, gotowanie w stałej temperaturze i mieszanie, którego nie trzeba pilnować.",
        "Konkretnie przy tutejszych uprawach: zupa i krem z buraka, purée z ziemniaków, sos i pasta z pietruszki, przecier z cebuli, przetwory do słoików. Wszystko to jest miksowanie plus podgrzewanie, a przy jednym naczyniu robi się to seryjnie.",
        "Czosnek zasługuje na osobne zdanie, bo to lokalna specjalność. Rozdrobni go, wmiesza w masło, zrobi pastę, sos czy oliwę czosnkową bez tarcia na tarce i bez zapachu na rękach przez trzy dni. Nie obierze go natomiast ząbek po ząbku — to zostaje po Waszej stronie.",
        "Druga rzecz to gotowanie na zapas. W sezonie po prostu nie ma godziny na obiad. Zupa albo danie jednogarnkowe wstawione rano gotuje się samo, wyłącza i czeka ciepłe — wracacie z pola o dowolnej porze i jest gotowe.",
        "I trzecia: koła gospodyń, których działa tu trzynaście, do tego osiem jednostek straży i orkiestry dęte. Kto piecze na dożynki albo na Święto Czosnku, ten wie, ile godzin idzie na samo wyrobienie ciasta. Urządzenie wyrobi je i zmieli mak — piec i lepić trzeba samemu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Radziemice i gotowanie — czosnek, cebula i trzynaście kół gospodyń",
    paragraphs: [
      "Trudno o gminę, w której związek między polem a kuchnią byłby bardziej bezpośredni. Dziewięćdziesiąt cztery procent powierzchni to użytki rolne, jeden procent to las. Czarnoziemy klasy od pierwszej do trzeciej. Uprawia się tu cebulę, pietruszkę, ziemniaki, buraki i czosnek.",
      "Czosnek doczekał się własnego święta. Małopolskie Święto Czosnku odbywa się od dwa tysiące siódmego roku naprzemiennie w Radziemicach i Słomnikach, a szesnasta edycja przypadła dwudziestego szóstego lipca dwa tysiące dwudziestego szóstego roku w Obrażejowicach. Konkurs nosi nazwę „Superwiązka polskiego czosnku” — i to jest miara tego, jak poważnie się to tu traktuje.",
      "Dożynki gminne krążą tu po sołectwach: dwa tysiące dwudziesty drugi Radziemice, dwudziesty trzeci Łętkowice, dwudziesty czwarty Wrocimowice, dwudziesty piąty Przemęczanki, dwudziesty szósty Błogocice. Kół gospodyń wiejskich działa trzynaście — na szesnaście sołectw.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie potwierdziłam, czy z tej gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych, i nie znam nazw konkretnych tutejszych potraw. Nie wymyślę ich, żeby strona brzmiała bogaciej.",
      "Dla urządzenia najwięcej pracy jest przy warzywach i przy czosnku. Kremy, zupy, purée, pasty, przeciery, sosy i oliwa czosnkowa — rozdrabnianie plus podgrzewanie w stałej temperaturze, bez tarcia na tarce i bez stania przy garnku. Do tego ciasto drożdżowe i mielenie maku przed każdą imprezą.",
      "Czego nie zrobi: nie obierze warzyw ani czosnku, nie ulepi pierogów i nie upiecze. Zrobi ciasto, zmieli farsz, ugotuje — reszta zostaje przy stole i przy piekarniku.",
    ],
  },

  districtsHeading: "Gdzie w gminie Radziemice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich szesnastu sołectw: Radziemic, Łętkowic, Łętkowic-Kolonii, Obrażejowic, Wrocimowic, Zielenic, Błogocic, Kowar, Przemęczan, Przemęczanek, Smoniowic, Kaczowic, Wierzbicy, Lelowic, Kątów i Dodowa. Dopłaty za odległość nie ma nigdzie.",
    "To najmniejsza ludnościowo gmina powiatu proszowickiego — trzy tysiące sto sześćdziesiąt dziewięć osób na pięćdziesięciu ośmiu kilometrach kwadratowych. Pięćdziesiąt pięć osób na kilometr kwadratowy oznacza zabudowę bardzo rozrzuconą, więc przy umawianiu proszę o nazwę wsi.",
    "Przez gminę nie przechodzi żadna droga krajowa ani wojewódzka — sama gmina stwierdza to wprost w swoich dokumentach. Dojazd prowadzi drogami powiatowymi, w tym trasą od strony Kocmyrzowa i Racławic, oraz pięćdziesięcioma dwoma kilometrami dróg gminnych. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Kolei tu nie ma; najbliższa stacja jest w Słomnikach, już poza gminą. Warto o tym wiedzieć, planując dojazd bez samochodu — do Was przyjeżdżam ja, więc dla prezentacji to nie ma znaczenia.",
    "Dwa rozstrzygnięcia, o które warto zadbać. Łętkowice i Łętkowice-Kolonia to dwa osobne sołectwa. A Lelowice leżą w gminie Radziemice — Lelowice-Kolonia to już gmina Pałecznica.",
  ],
  districts: [
    "Radziemice",
    "Łętkowice",
    "Łętkowice-Kolonia",
    "Obrażejowice",
    "Wrocimowice",
    "Zielenice",
    "Błogocice",
    "Kowary",
    "Przemęczany",
    "Przemęczanki",
    "Smoniowice",
    "Kaczowice",
    "Wierzbica",
    "Lelowice",
    "Kąty",
    "Dodów",
  ],

  nearbyHeading: "Słomniki, Proszowice, Racławice i Miechów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Radziemice graniczy z Racławicami i Miechowem w powiecie miechowskim, z Pałecznicą, Koniuszą i Proszowicami w proszowickim oraz ze Słomnikami w krakowskim. Do żadnej z nich nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Radziemice, czy już Słomniki albo Pałecznica — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Słomniki",
    "Proszowice",
    "Racławice",
    "Miechów",
    "Pałecznica",
    "Koszyce",
    "Kraków",
  ],

  about: blokOMnie("do gminy Radziemice", "w powiecie proszowickim"),

  faq: [
    {
      question: "Uprawiamy czosnek. Czy urządzenie coś przy nim daje?",
      answer:
        "Daje, i w tej gminie pytają o to najczęściej. Rozdrobni czosnek, wmiesza go w masło, zrobi pastę, sos albo oliwę czosnkową — bez tarcia na tarce i bez zapachu na rękach przez trzy dni. Nie obierze go natomiast ząbek po ząbku; ta robota zostaje po Waszej stronie i nie będę obiecywać inaczej.",
    },
    ...faqWspolne("w gminie Radziemice"),
    {
      question: "Mieszkam w Łętkowicach-Kolonii. To to samo co Łętkowice?",
      answer:
        "Nie — to dwa osobne sołectwa i dlatego przy umawianiu zawsze dopytuję. Dojeżdżam do obu bez dopłat, tak samo jak do pozostałych czternastu. Przy okazji: Lelowice to gmina Radziemice, a Lelowice-Kolonia to już gmina Pałecznica; też potrafi to zmylić.",
    },
    {
      question: "Kiedy najlepiej się umówić, jeśli pracujemy w polu?",
      answer:
        "Poza sezonem, czyli najspokojniej zimą i wczesną wiosną — i sama to proponuję, zamiast namawiać kogokolwiek w środku żniw albo zbioru. Warto też ominąć lipiec w okolicach Święta Czosnku i koniec sierpnia z dożynkami, bo w tak małej gminie angażują one naprawdę wielu ludzi. Powiedzcie po prostu, kiedy macie spokojne dwie godziny.",
    },
  ],

  geo: { lat: 50.2536, lng: 20.2106 },
};
