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
 * KNYSZYN — gmina miejsko-wiejska w powiecie monieckim.
 * GMINA 127 km².
 * ⚠⚠ LICZBY MIESZKAŃCÓW NIE PODAJĘ. Najświeższe dostępne
 * dane to 4 607 dla gminy na 31.12.2020 — ZA STARE.
 * Notatka projektowa podawała 2 800 dla miasta — NIE UŻYWAM.
 * Piszę o wielkości WYŁĄCZNIE jakościowo: „niewielkie miasto".
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 *
 * PRAWA MIEJSKIE 1568 r., nadał KRÓL ZYGMUNT AUGUST.
 * Miasto lokowane wcześniej PRZEZ KRÓLOWĄ BONĘ, na północ
 * od majątku Wodziłówka.
 * ⚠⚠ WRAZ Z NADANIEM PRAW W 1568 r. KRÓL USTANOWIŁ CZTERY
 * JARMARKI DOROCZNE I COTYGODNIOWY TARG CZWARTKOWY; wtedy też
 * postawiono RATUSZ, ŁAŹNIE I BUDYNEK WAGI oraz nakazano
 * WYBRUKOWAĆ ULICE.
 * ⚠ NIE PODAJĘ, czy Knyszyn tracił prawa miejskie —
 * żadne źródło miejskie tego nie podaje.
 *
 * ⚠⚠ DWÓR KRÓLEWSKI — PODSTAWA KĄTA.
 * Stał przy dzisiejszej ul. Białostockiej, przy trakcie
 * z Wilna i Grodna na Tykocin i Warszawę.
 * ZESPÓŁ LICZYŁ PIĘĆ DUŻYCH BUDYNKÓW DREWNIANYCH z piecami
 * kaflowymi i murowanymi kominami; najważniejszy był piętrowy
 * dom królewski. W SKŁAD KOMPLEKSU WCHODZIŁY: KUCHNIE
 * KRÓLEWSKIE I PIEKARNIE, BROWAR, ŁAŹNIA, SADY, STAWY
 * Z OGRODAMI WODNYMI, STAJNIE, MŁYN, MOST I TARTAK.
 * Dwór rozebrano; w latach 1923–1926 postawiono tam szkołę.
 * ŚMIERĆ KRÓLA: 7 LIPCA 1572 r. w knyszyńskim dworze.
 * ⚠ NIE ROZWIJAM wątku śmierci ani pochówku — podaję
 * co najwyżej datę jako fakt, a najlepiej pomijam.
 * ⚠ LICZBY POBYTÓW KRÓLA NIE PODAJĘ — sprzeczność
 * (19 pobytów / ok. 500 dni kontra 22 pobyty / ok. 495 dni),
 * obie wersje ze stron tego samego urzędu.
 * KRÓL UTRZYMYWAŁ W SWOICH STAJNIACH OK. 3 000 KONI.
 * ⚠ NIE PRZYPISUJĘ tej liczby samemu Knyszynowi.
 *
 * ⚠⚠ GOSPODARKA STAWOWA — DRUGA PODSTAWA KĄTA.
 * PIOTR CHWALCZEWSKI ROZPOCZĄŁ W 1557 r. BUDOWĘ „STAWU
 * ZYGMUNTA AUGUSTA" W CZECHOWIŹNIE. Rejestr z 1564 r.
 * wymienia ZESPÓŁ 20 SADZAWEK ZBUDOWANY W KNYSZYNIE
 * do racjonalnej gospodarki rybnej.
 * MŁYNARSTWO XVI w.: młyny wodne m.in. w Knyszynie (dwa:
 * zbożowy i tartak), Wodziłówce, Jeleniu, Myśliwcu,
 * DOBRZYNIOWIE (młyn pięciokołowy plus folusz i tartak),
 * Dolistowie i Rudzie.
 * PIWOWARSTWO: cztery browary udokumentowane w XVI w. —
 * przy dworze królewskim, przy folwarku Knyszyn, przy folwarku
 * Dobrzyniów i przy zamku w Goniądzu.
 * ⚠ BROWARY WYMIENIAM WYŁĄCZNIE JAKO FAKT GOSPODARCZY.
 *
 * JEZIORO ZYGMUNTA AUGUSTA — sztucznie podpiętrzany zbiornik,
 * początki w XVI w., powierzchnia 400 ha.
 * RZEKI: BRZOZÓWKA i CZARNA.
 * ⚠ POWIERZCHNI PARKU KRAJOBRAZOWEGO PUSZCZY KNYSZYŃSKIEJ
 * NIE PODAJĘ — sprzeczność (74 447 ha kontra 854,15 km²
 * z otuliną) i sprzeczność w liczbie źródeł (ok. 450 kontra
 * ok. 430 wypływów).
 * ⚠⚠ MIASTO KNYSZYN LEŻY POZA GŁÓWNĄ CZĘŚCIĄ PUSZCZY
 * KNYSZYŃSKIEJ — nazwa puszczy dotyczy innej jednostki
 * niż gmina. FAQ to rozróżnia.
 *
 * ZABYTKI: układ urbanistyczny z XVI w.; KOŚCIÓŁ ŚW. JANA
 * APOSTOŁA I EWANGELISTY z 1520 r. (prezbiterium, chór
 * i wieża dobudowane 1900–1902). ⚠ LAMUSA NIE DATUJĘ —
 * sprzeczność (1818–1820 kontra 1808).
 * W Kalinówce Kościelnej: kościół św. Anny (1776), lamus (1782).
 * Pomnik króla Zygmunta Augusta na rynku.
 * ⚠ DATY ODSŁONIĘCIA POMNIKA NIE PODAJĘ.
 * SZLAK PIESZY „KRÓLOWEJ BONY".
 *
 * LISTA PRODUKTÓW TRADYCYJNYCH:
 * KARP KNYSZYŃSKI — wpisany na Listę.
 * ⚠ DATY WPISU NIE PODAJĘ — źródło prasowe mówi o komunikacie
 * z 23 maja 2022 r., ale karty na gov.pl nie udało się
 * potwierdzić. PISZĘ: „wpisany na Listę Produktów
 * Tradycyjnych", BEZ DATY.
 * ⚠ PIWA DUBELTOWEGO NIE WYMIENIAM — nazwa i data niepewne.
 * ⚠ „KNYSZA" NIE OPISUJĘ — brak opisu potrawy w źródłach.
 * KNYSZYN NIE NALEŻY DO CITTASLOW (nie potwierdzono —
 * nie twierdzę, że należy).
 *
 * KĄT: KUCHNIA OTWARTA CZY ZAMKNIĘTA — gotowanie przy
 * gościach albo z dala od nich.
 * Kąt od dworu królewskiego, w którym KUCHNIE I PIEKARNIE
 * BYŁY OSOBNYMI BUDYNKAMI w zespole pięciu domów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przez większość historii kuchnia była osobnym
 *   budynkiem albo osobnym pomieszczeniem, a otwarta kuchnia
 *   to wynalazek ostatnich kilkudziesięciu lat,
 * — DLACZEGO ODDZIELANO: ogień, zapach, dym, hałas i bałagan
 *   — cztery powody, z których trzy nadal obowiązują,
 * — CO ZYSKUJE KUCHNIA OTWARTA: osoba gotująca nie jest
 *   wykluczona z tego, co się dzieje w domu,
 * — CO TRACI: zapach roznosi się po całym mieszkaniu
 *   i osiada w tkaninach, hałas przeszkadza, a bałagan
 *   jest widoczny cały czas,
 * — że przy otwartej kuchni realnym problemem jest hałas,
 *   a nie estetyka — i że mało kto o tym myśli przed remontem,
 * — PRAKTYCZNIE: co robić przy każdym z układów — wietrzyć
 *   w trakcie, nie po; zamykać naczynia; planować głośne
 *   czynności zanim przyjdą goście,
 * — UCZCIWIE I WPROST: to urządzenie JEST GŁOŚNE przy
 *   wysokich obrotach. Krótko, ale głośno. W otwartej kuchni
 *   podczas rozmowy to bywa realnie uciążliwe i mówię o tym
 *   na każdym spotkaniu,
 * — ALE: gotuje w zamkniętym naczyniu, więc zapachu roznosi
 *   znacznie mniej niż garnek na kuchence — a to jest
 *   przy otwartej kuchni ważniejsze, niż się wydaje.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH DECYBELI ANI LICZB — o hałasie piszę jakościowo.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO rozwijania wątku śmierci i pochówku króla —
 *   temat grobowy, niepotrzebny przy sprzęcie kuchennym.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mała kuchnia i blat"
 * dotyczy metrażu. „Układ kuchni" (Michałowo) dotyczy
 * rozmieszczenia sprzętów. „Zapach i para w mieszkaniu
 * w bloku" dotyczy wentylacji jako problemu technicznego.
 * „Goście, którzy przyjeżdżają bez zapowiedzi" dotyczy
 * improwizacji. Tutaj chodzi o ŚCIANĘ: o to, czy kuchnia
 * jest oddzielona od reszty domu i co z tego wynika.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby mieszkańców ani sołectw.
 * — NIE PODAJĘ liczby pobytów króla w Knyszynie.
 * — NIE PODAJĘ daty wpisu karpia knyszyńskiego na Listę.
 * — NIE WYMIENIAM piwa dubeltowego ani „knysza".
 * — NIE DATUJĘ lamusa ani pomnika.
 * — NIE PODAJĘ powierzchni Parku Krajobrazowego.
 * — NIE PISZĘ, że miasto leży w Puszczy Knyszyńskiej.
 * — NIE PODAJĘ, czy Knyszyn tracił prawa miejskie.
 * — NIE TWIERDZĘ, że należy do Cittaslow.
 * — NIE MYLĘ miasta KNYSZYN z PUSZCZĄ KNYSZYŃSKĄ,
 *   z NADLEŚNICTWEM KNYSZYN ani z KNYSZYNEM-ZAMKIEM.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy 127 km²,
 * — prawa miejskie nadał w 1568 r. król Zygmunt August;
 *   miasto lokowała wcześniej królowa Bona. Wraz z nadaniem
 *   praw król ustanowił cztery jarmarki doroczne i cotygodniowy
 *   targ czwartkowy, postawiono ratusz, łaźnie i budynek wagi,
 *   a ulice nakazano wybrukować,
 * — dwór królewski był zespołem pięciu dużych drewnianych
 *   budynków z piecami kaflowymi i murowanymi kominami;
 *   w skład kompleksu wchodziły kuchnie królewskie i piekarnie,
 *   browar, łaźnia, sady, stawy z ogrodami wodnymi, stajnie,
 *   młyn, most i tartak; dwór rozebrano, a w latach 1923–1926
 *   postawiono w tym miejscu szkołę,
 * — Piotr Chwalczewski rozpoczął w 1557 r. budowę stawu
 *   Zygmunta Augusta, a rejestr z 1564 r. wymienia zespół
 *   dwudziestu sadzawek zbudowanych w Knyszynie do racjonalnej
 *   gospodarki rybnej,
 * — w XVI w. działały tu młyny wodne, m.in. dwa w samym
 *   Knyszynie i pięciokołowy w Dobrzyniowie, oraz cztery
 *   browary,
 * — jezioro Zygmunta Augusta ma 400 ha; przez okolicę płyną
 *   Brzozówka i Czarna,
 * — kościół świętego Jana Apostoła i Ewangelisty z 1520 r.,
 *   z prezbiterium, chórem i wieżą dobudowanymi w latach
 *   1900–1902; w Kalinówce Kościelnej kościół świętej Anny
 *   z 1776 r. i lamus z 1782,
 * — karp knyszyński jest wpisany na Listę Produktów
 *   Tradycyjnych.
 */
export const KNYSZYN: CityContent = {
  slug: "knyszyn",
  h1: "Thermomix Knyszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Knyszyn — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Knyszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Knyszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Knyszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Knyszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Knyszyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Otwarta kuchnia to wynalazek ostatnich kilkudziesięciu lat. Wcześniej ją oddzielano.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Knyszynie – jak wygląda prezentacja?",
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
      id: "kuchnia-otwarta",
      heading: "Kuchnia jako osobny budynek — czyli otwarta czy zamknięta",
      paragraphs: [
        "Dwór królewski w Knyszynie nie był jednym domem. Był zespołem pięciu dużych drewnianych budynków z piecami kaflowymi i murowanymi kominami, a w skład kompleksu wchodziły — wymieniam za źródłami, bo lista jest sama w sobie ciekawa — kuchnie królewskie i piekarnie, browar, łaźnia, sady, stawy z ogrodami wodnymi, stajnie, młyn, most i tartak. Kuchnia była osobnym budynkiem. Nie kątem, nie pomieszczeniem obok jadalni — budynkiem.",
        "To nie był kaprys. Przez większość historii kuchnię trzymano z dala od tego, gdzie ludzie mieszkali, i robiono to z czterech powodów: ognia, zapachu, hałasu i bałaganu. Ogień przestał być problemem. Pozostałe trzy obowiązują nadal, tylko przestaliśmy o nich myśleć.",
        "Bo otwarta kuchnia, dziś traktowana jako oczywistość, jest wynalazkiem ostatnich kilkudziesięciu lat. I ma bardzo konkretne zalety i bardzo konkretne wady, o których warto wiedzieć, zanim się wyburzy ścianę.",
        "Zaleta jest jedna, ale poważna: osoba gotująca przestaje być wykluczona. Nie stoi sama w osobnym pomieszczeniu, podczas gdy wszyscy inni siedzą i rozmawiają. Kto gotował kiedykolwiek w zamkniętej kuchni w trakcie rodzinnego obiadu, wie, o czym mówię.",
        "Wady są trzy i wszystkie codzienne. Zapach z otwartej kuchni idzie po całym mieszkaniu i osiada w tkaninach — w kanapie, w zasłonach, w ubraniach powieszonych obok. Bałagan jest widoczny cały czas, więc sprząta się częściej i pod presją. A hałas — i to jest ta wada, o której prawie nikt nie myśli przed remontem — okazuje się realnym problemem: okap, blender, mikser i szum gotowania zagłuszają rozmowę i telewizor, bo nie ma już ściany, która by je zatrzymała.",
        "Praktycznie da się z każdym z tych układów żyć dobrze, tylko trzeba trochę inaczej pracować. Przy otwartej kuchni wietrzy się w trakcie gotowania, a nie po nim — po jest już za późno, zapach zdążył osiąść. Warto trzymać naczynia przykryte, bo pokrywka zatrzymuje nie tylko parę, ale i zapach. I warto zaplanować głośne czynności zawczasu: zmielić, zmiksować i zetrzeć wszystko, zanim przyjdą goście, a przy nich robić już tylko rzeczy ciche.",
        "Przy kuchni zamkniętej problemem jest co innego — samotność i to, że trzeba pilnować kilku rzeczy naraz, nie widząc, co dzieje się w domu. Tu z kolei pomaga wszystko, co nie wymaga stania obok.",
        "I teraz muszę powiedzieć rzecz, którą mówię na każdym spotkaniu, bo dotyczy sprzętu, który sprzedaję. To urządzenie jest głośne. Nie przez cały czas — przy gotowaniu i mieszaniu pracuje cicho — ale przy wysokich obrotach, gdy miksuje albo mieli, jest naprawdę głośne. Krótko, ale głośno. W otwartej kuchni, w trakcie rozmowy przy stole, bywa to uciążliwe i nie zamierzam udawać, że nie jest.",
        "Z drugiej strony ma w tym kontekście przewagę, której sama się nie spodziewałam, dopóki nie zaczęłam o to pytać. Gotuje w zamkniętym naczyniu, więc roznosi po domu znacznie mniej zapachu niż odkryty garnek na kuchence. Przy otwartej kuchni to jest ważniejsze, niż się wydaje — zwłaszcza gdy gotuje się kapustę, ryby albo cokolwiek, co zostaje w mieszkaniu na dwa dni.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Knyszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie otwartą kuchnię połączoną z salonem, powiedzcie o tym przy umawianiu — pokażę, jak głośno urządzenie naprawdę pracuje, żebyście ocenili to sami, a nie z opisu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Knyszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla knyszyńskiej rodziny",
      paragraphs: [
        "Knyszyn to niewielkie miasto w gminie liczącej sto dwadzieścia siedem kilometrów kwadratowych, ale z historią zupełnie nieproporcjonalną do wielkości. Lokowała je królowa Bona, a prawa miejskie nadał w 1568 roku król Zygmunt August — i przy tej okazji ustanowił cztery jarmarki doroczne oraz cotygodniowy targ czwartkowy, kazał postawić ratusz, łaźnie i budynek wagi, a ulice wybrukować. Stał tu dwór królewski: zespół pięciu dużych drewnianych budynków, w którym osobno wymieniano kuchnie królewskie i piekarnie, browar, łaźnię, sady, stawy z ogrodami wodnymi, stajnie, młyn, most i tartak; dwór później rozebrano, a w latach 1923–1926 postawiono w tym miejscu szkołę. W 1557 roku Piotr Chwalczewski rozpoczął budowę stawu Zygmunta Augusta, a rejestr z 1564 wymienia dwadzieścia sadzawek zbudowanych w Knyszynie do gospodarki rybnej — z tej tradycji wywodzi się karp knyszyński, wpisany na Listę Produktów Tradycyjnych. Jezioro Zygmunta Augusta ma czterysta hektarów. Kościół świętego Jana Apostoła i Ewangelisty pochodzi z 1520 roku, a jego prezbiterium, chór i wieżę dobudowano w latach 1900–1902.",
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

  districtsHeading: "Do których części gminy Knyszyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy, w tym do Kalinówki Kościelnej. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Knyszyn też przyjadę",
  nearbyParagraphs: [
    "Mońki, Goniądz, Czarna Białostocka, Białystok i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mońki", "Goniądz", "Czarna Białostocka", "Białystok"],

  about: blokOMnie("do Knyszyna", "w Knyszynie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Knyszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy stale się mylą: miasto Knyszyn to nie to samo co Puszcza Knyszyńska — miasto leży poza jej główną częścią, a puszcza rozciąga się na obszarze wielu gmin.",
    },
    ...faqWspolne("w Knyszynie"),
    {
      question: "Czy Thermomix jest głośny?",
      answer:
        "Przy gotowaniu i mieszaniu pracuje cicho, ale przy wysokich obrotach — gdy miksuje albo mieli — jest naprawdę głośny. Krótko, ale głośno. W otwartej kuchni, w trakcie rozmowy przy stole, bywa to uciążliwe i wolę o tym uprzedzić przed zakupem.",
    },
    {
      question: "Czy w otwartej kuchni zapach gotowania jest problemem?",
      answer:
        "Bywa, bo idzie po całym mieszkaniu i osiada w tkaninach — w kanapie, zasłonach, ubraniach. Pomaga wietrzenie w trakcie gotowania, a nie po nim, i trzymanie naczyń przykrytych, bo pokrywka zatrzymuje nie tylko parę. Gotowanie w zamkniętym naczyniu roznosi wyraźnie mniej zapachu niż odkryty garnek — to niedoceniana zaleta tego urządzenia.",
    },
    {
      question: "Otwarta kuchnia czy zamknięta — co lepsze?",
      answer:
        "Zależy, co Wam przeszkadza bardziej. Otwarta sprawia, że osoba gotująca nie jest wykluczona z tego, co dzieje się w domu; zamknięta zatrzymuje zapach, hałas i bałagan. Przez większość historii kuchnie oddzielano właśnie z tych trzech powodów — w knyszyńskim dworze królewskim kuchnia była osobnym budynkiem.",
    },
  ],

  geo: { lat: 53.3125, lng: 22.9236 },
};
