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
 * PSZCZEW — ⚠ WIEŚ GMINNA (nie miasto), powiat międzyrzecki,
 * woj. lubuskie.
 * WIEŚ 1 973 mieszkańców (NSP 2021 — GUS nie publikuje
 * danych rocznych dla wsi).
 * GMINA 4 159 (GUS 31.12.2024), 177,6 km².
 * ⚠⚠ PISZĘ „WIEŚ" I „GMINA", NIGDY „MIASTO".
 * ⚠ PRAWA MIEJSKIE: 1288–1946. Utratę podaję jako suchy
 *   fakt, BEZ PRZYCZYN.
 *
 * ⚠⚠ HOMONIMY: PSZCZEW ≠ PSZCZYNA (śląskie)
 *   ≠ PSZCZÓŁKI (pomorskie). FAQ to rozróżnia.
 * ⚠ PSZCZEW ≠ TRZCIEL — sąsiednia, ODRĘBNA gmina z własną
 *   stroną w serwisie. NIE MIESZAM FAKTÓW.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — Pszczew był WŁASNOŚCIĄ BISKUPÓW POZNAŃSKICH,
 * — 1288 — lokacja miejska z rąk biskupa poznańskiego
 *   Jana Gerbicza; 1407 — potwierdzenie przywileju
 *   po zniszczeniu dokumentu lokacyjnego,
 * — miejscowość pełniła funkcję ZAPLECZA ZAOPATRZENIOWEGO
 *   BISKUPÓW i miejsca wypoczynku, na starym szlaku
 *   handlowym z Poznania do Lubusza,
 * — ⚠⚠ DZIAŁAŁY CECHY KRAWCÓW, SZEWCÓW I PIWOWARÓW —
 *   TO JEST KOTWICA: rzemiosła poprawiania i naprawiania;
 *   jarmarki dziewięć razy do roku. ⚠ TERMINÓW JARMARKÓW
 *   NIE PODAJĘ — nieustalone. ⚠ PIWOWARÓW WYMIENIAM
 *   WYŁĄCZNIE JAKO NAZWĘ CECHU, ZERO TEMATU ALKOHOLU.
 * — 1654 — barokowy PAŁAC BISKUPI,
 * — 1793 — konfiskata dóbr biskupich przez Prusy,
 * — ⚠⚠ DOM SZEWCA — muzeum otwarte w 1984 r. TO JEST
 *   DRUGA CZĘŚĆ KOTWICY: rzemiosła, w których wszystko
 *   zależy od miary i kroju.
 *
 * ⚠⚠ SKANSENU PSZCZELARSKIEGO I ETYMOLOGII OD PSZCZÓŁ
 *   NIE ROBIĘ TEMATEM — kąt „miód" ZAJĘTY. Wymieniam
 *   skansen wyłącznie w bloku o miejscowości.
 * ⚠⚠ WINNICY W GMINIE NIE UŻYWAM — kąt „wino" ZAJĘTY.
 *   NIE WYMIENIAM JEJ W OGÓLE.
 * ⚠ JARMARKU MAGDALEŃSKIEGO NIE ROBIĘ TEMATEM — kąt „targ"
 *   ZAJĘTY.
 *
 * GEOGRAFIA: Rynna Jezior Pszczewskich z doliną OBRY,
 * ok. 20 jezior polodowcowych; PSZCZEWSKI PARK KRAJOBRAZOWY
 * utworzony w 1986 r.; jezioro SZARCZ ok. 170 ha, jezioro
 * PSZCZEWSKIE; miejscowość leży na przesmyku między dwoma
 * jeziorami; kemy w okolicy Pszczewa i Borowego Młyna;
 * ochrona rezerwatowa rejonu Jezior Gołyńskich.
 * ⚠ POWIERZCHNI LUBUSKIEJ CZĘŚCI PARKU NIE PODAJĘ —
 *   nieustalona.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: RATOWANIE NIEUDANEGO DANIA — co da się odkręcić,
 * a czego nie.
 * Kąt od cechów szewców i krawców i od Domu Szewca —
 * od rzemiosł, które w połowie żyły z poprawiania
 * i naprawiania tego, co już istniało.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w kuchennych wpadkach najważniejsza jest jedna
 *   umiejętność: rozpoznać, czy danie da się jeszcze
 *   uratować, czy już nie — bo próba ratowania
 *   nieodwracalnego zwykle pogarsza sprawę,
 * — DA SIĘ URATOWAĆ:
 *   — PRZESOLONE — rozcieńczeniem: dolać płynu, dosypać
 *     ziemniaka, kaszy, ryżu albo po prostu zwiększyć
 *     objętość dania; ⚠ SAM ZIEMNIAK WRZUCONY DO ZUPY
 *     NIE „WYCIĄGA SOLI" — pomaga dlatego, że zwiększa
 *     objętość. PISZĘ TO WPROST,
 *   — ZA KWAŚNE — tłuszczem, odrobiną słodyczy albo
 *     większą objętością,
 *   — MDŁE — nie tylko solą, ale też kwasem; ⚠ ODSYŁAM
 *     DO ODRĘBNEJ STRONY, NIE ROZWIJAM,
 *   — ZA TŁUSTE — odstawieniem i zebraniem tłuszczu
 *     z wierzchu, gdy ostygnie,
 *   — ROZGOTOWANE WARZYWA — zmiksowaniem na krem,
 *     czyli zmianą dania na inne,
 * — NIE DA SIĘ URATOWAĆ:
 *   — PRZYPALONEGO — gorycz przechodzi na całość,
 *     a przelanie do innego garnka jej nie usuwa;
 *     ratuje się najwyżej to, co NIE dotknęło dna,
 *     zlewając z wierzchu i NIE MIESZAJĄC,
 *   — ROZGOTOWANEGO MAKARONU I MIĘSA WYSUSZONEGO
 *     NA PIECZENIU,
 *   — CIASTA, KTÓRE NIE WYROSŁO,
 * — ⚠⚠ ZASADA NADRZĘDNA: NIE RATUJE SIĘ DANIA PRZEZ
 *   DOKŁADANIE KOLEJNYCH RZECZY. Każdy dodatek to nowy
 *   problem; lepiej zrobić jedną świadomą korektę
 *   i spróbować, niż pięć odruchowych,
 * — ŻE CZĘŚĆ WPADEK NIE JEST WPADKAMI, TYLKO INNYM DANIEM:
 *   rozpadnięte warzywa to krem, za rzadki sos to zalewa
 *   do makaronu, zbyt gęsta zupa to sos,
 * — ŻE NAJTAŃSZA NAPRAWA TO TA, KTÓREJ SIĘ NIE ROBI:
 *   próbowanie w trakcie zamiast na końcu,
 * — UCZCIWIE: urządzenie nie cofnie przesolenia
 *   ani przypalenia,
 * — ale usuwa dwie najczęstsze przyczyny wpadek: pilnowanie
 *   temperatury, przez co nie ma jak przypalić ani zagotować
 *   tego, co miało tylko dojść, oraz powtarzalność — danie,
 *   które raz wyszło, wychodzi tak samo za drugim razem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI WYMIARÓW W CENTYMETRACH.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ŻADNYCH TEZ O BEZPIECZEŃSTWIE ŻYWNOŚCI. Nie piszę,
 *   co wolno, a czego nie wolno zjeść — piszę wyłącznie
 *   o SMAKU i o tym, czy danie da się poprawić.
 *   TWARDA GRANICA.
 * — ZERO tematu alkoholu (cech piwowarów to tylko nazwa).
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ UTRATĘ PRAW MIEJSKICH W 1946 r. PODAJĘ JAKO SUCHY
 *   FAKT, BEZ PRZYCZYN. TWARDA GRANICA.
 * — ⚠ KONFISKATĘ DÓBR BISKUPICH W 1793 r. PODAJĘ JAKO
 *   SUCHY FAKT WŁASNOŚCIOWY.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ZAGĘSZCZANIE" dotyczy ZBYT RZADKIEGO DANIA.
 * — „sosy, które się warzą" dotyczą WARZENIA SIĘ NABIAŁU.
 * — „DOPRAWIANIE — próbować, korygować" dotyczy
 *   DOPRAWIANIA W TRAKCIE.
 * — „NADMIAR JEDNEGO SKŁADNIKA" dotyczy ZA DUŻEJ ILOŚCI
 *   PRODUKTU W DOMU.
 * — „błędy pierwszego tygodnia" dotyczą OBSŁUGI URZĄDZENIA.
 * TUTAJ chodzi o TRIAŻ: o rozpoznanie, które wpadki
 * są odwracalne, a które nie — i o zasadę, żeby nie ratować
 * dania przez dokładanie kolejnych rzeczy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Pszczewa miastem.
 * — NIE PODAJĘ terminów dziewięciu jarmarków.
 * — NIE PISZĘ, CO WOLNO, A CZEGO NIE WOLNO ZJEŚĆ.
 * — NIE PODAJĘ powierzchni lubuskiej części parku.
 * — NIE PISZĘ O WINNICY ANI O PSZCZELARSTWIE JAKO TEMACIE.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE MYLĘ PSZCZEWA z PSZCZYNĄ, PSZCZÓŁKAMI ani TRZCIELEM.
 * — districts: brak osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pszczew był własnością biskupów poznańskich; lokacji
 *   miejskiej dokonał w 1288 r. biskup poznański Jan Gerbicz,
 *   a w 1407 r. przywilej potwierdzono po zniszczeniu
 *   dokumentu lokacyjnego,
 * — miejscowość pełniła funkcję zaplecza zaopatrzeniowego
 *   biskupów i miejsca wypoczynku, leżąc na starym szlaku
 *   handlowym z Poznania do Lubusza; działały tu cechy
 *   krawców, szewców i piwowarów, a jarmarki odbywały się
 *   dziewięć razy do roku,
 * — w 1654 r. powstał barokowy pałac biskupi, a w 1793 r.
 *   dobra biskupie przejęły Prusy; prawa miejskie Pszczew
 *   utracił w 1946 r.,
 * — w 1984 r. otwarto tu muzeum zwane Domem Szewca; działa
 *   również Skansen Pszczelarski,
 * — miejscowość leży na przesmyku między dwoma jeziorami,
 *   w Rynnie Jezior Pszczewskich z doliną Obry, gdzie
 *   znajduje się około dwudziestu jezior polodowcowych;
 *   jezioro Szarcz ma około 170 ha, a w 1986 r. utworzono
 *   Pszczewski Park Krajobrazowy,
 * — kościół pw. św. Marii Magdaleny jest renesansowy,
 *   z lat 1632–1654, z barokowym wyposażeniem; zachowały się
 *   też barokowa plebania, kamienica z XVIII w.
 *   i klasycystyczny dwór z XIX w. z parkiem krajobrazowym.
 */
export const PSZCZEW: CityContent = {
  slug: "pszczew",
  h1: "Thermomix Pszczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pszczew — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pszczewie: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pszczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pszczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pszczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy.",

  highlights: highlightyStandardowe("Pszczew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najważniejsze przy kuchennej wpadce: rozpoznać, czy jest jeszcze co ratować.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pszczewie – jak wygląda prezentacja?",
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
      id: "ratowanie-dania",
      heading: "Dom Szewca i cech krawców — czyli co da się w kuchni odkręcić",
      paragraphs: [
        "W Pszczewie działały cechy krawców, szewców i piwowarów, a od 1984 roku mieści się tu muzeum zwane Domem Szewca. Krawiectwo i szewstwo to rzemiosła, które w połowie żyły z poprawiania: przerobić, nadsztukować, zelować, wypuścić w szwach. Umiejętnością nie było samo szycie, tylko ocena, czy rzecz da się jeszcze uratować, czy szkoda pracy.",
        "W kuchni jest dokładnie tak samo i to jest, moim zdaniem, najbardziej niedoceniana umiejętność ze wszystkich. Nie chodzi o to, żeby nic się nigdy nie udawało — to niemożliwe. Chodzi o to, żeby w pierwszej minucie rozpoznać, czy danie jest jeszcze do odratowania. Bo ratowanie czegoś nieodwracalnego zwykle kończy się tym, że zamiast jednego problemu są trzy.",
        "Zacznijmy od rzeczy, które da się odkręcić. Przesolone danie ratuje się rozcieńczeniem: dolaniem płynu, dosypaniem ryżu, kaszy albo ziemniaka, zwiększeniem objętości. I od razu prostuję najpopularniejszy mit polskiej kuchni: ziemniak wrzucony do zupy nie „wyciąga soli”. Pomaga wyłącznie dlatego, że zwiększa objętość i sam trochę soli przejmuje. Ten sam efekt da dolanie wody z odrobiną bulionu, tylko szybciej.",
        "Za kwaśne danie łagodzi się czymś tłustym — śmietaną, masłem, oliwą — albo odrobiną słodyczy, ewentualnie znowu objętością. Mdłe zwykle nie potrzebuje kolejnej porcji soli, tylko kwasu, ale to osobny temat, o którym pisałam gdzie indziej. Za tłuste najprościej odstawić: kiedy przestygnie, tłuszcz zbiera się na wierzchu i schodzi łyżką w kilkanaście sekund. A rozgotowane warzywa nie są porażką, tylko innym daniem — blender robi z nich krem i nikt się nie dowie.",
        "Teraz rzeczy, których uratować się nie da, i lepiej to wiedzieć od razu. Przypalone. Gorycz przechodzi na całą zawartość garnka i przelanie do innego naczynia jej nie usuwa — to kolejny popularny mit. Jedyne, co czasem działa, to zlać z wierzchu tę część, która nie dotknęła dna, nie mieszając i nie zeskrobując. Jeśli już się zamieszało, jest po wszystkim.",
        "Nie da się też cofnąć rozgotowanego makaronu ani pieczeni, która wyschła. W obu przypadkach zmieniła się struktura, a struktury nie przywraca żaden dodatek. Ciasto, które nie wyrosło, też już nie wyrośnie, jeśli drożdże były martwe.",
        "Nad tym wszystkim stoi jedna zasada, ważniejsza niż cała reszta: nie ratuje się dania przez dokładanie kolejnych rzeczy. Każdy dodatek wprowadza nowy problem. Dolana śmietana rozcieńcza smak, dosypany cukier maskuje jedno i psuje drugie, dorzucone przyprawy robią chaos. Lepiej zrobić jedną świadomą korektę i spróbować, niż pięć odruchowych i skończyć z czymś, czego już nikt nie rozgryzie.",
        "Warto też przestawić się na myślenie, które oszczędza sporo nerwów: część wpadek to wcale nie wpadki, tylko inne danie. Rozpadnięte warzywa to krem. Za rzadki sos to zalewa do makaronu. Za gęsta zupa to sos do kaszy. Nieudany biszkopt to spód do deseru w pucharkach. Nikt przy stole nie wie, co miało być pierwotnie.",
        "I rzecz najtańsza ze wszystkich: najlepsza naprawa to ta, której nie trzeba robić. Próbowanie w trakcie, a nie na końcu, wyłapuje dziewięć na dziesięć problemów wtedy, kiedy jeszcze kosztują pół łyżeczki czegoś, a nie cały obiad.",
        "Teraz uczciwie o sprzęcie. Thermomix nie cofnie przesolenia ani przypalenia. Żadne urządzenie tego nie robi i nikt nie powinien obiecywać inaczej.",
        "Usuwa natomiast dwie najczęstsze przyczyny wpadek. Pierwsza: pilnuje temperatury, więc nie ma jak przypalić dna ani zagotować czegoś, co miało tylko dojść — a to są dwa z trzech najczęstszych sposobów zepsucia obiadu. Druga: powtarzalność. Danie, które raz wyszło dobrze, wychodzi tak samo za drugim i dziesiątym razem, bo nie zależy od tego, czy akurat ktoś zadzwonił w trakcie. To nie jest naprawianie — to jest po prostu mniej rzeczy do naprawiania.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pszczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest danie, które regularnie Wam nie wychodzi — powiedzcie przy umawianiu. Zrobimy właśnie je i poszukamy, na którym etapie coś się rozjeżdża.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pszczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pszczewskiej rodziny",
      paragraphs: [
        "Pszczew jest wsią i siedzibą gminy liczącej ponad cztery tysiące mieszkańców na stu siedemdziesięciu siedmiu kilometrach kwadratowych. Przez stulecia był własnością biskupów poznańskich: lokacji miejskiej dokonał w 1288 roku biskup Jan Gerbicz, a w 1407 przywilej potwierdzono po zniszczeniu dokumentu lokacyjnego. Miejscowość pełniła funkcję zaplecza zaopatrzeniowego biskupów i miejsca wypoczynku, leżąc na starym szlaku handlowym z Poznania do Lubusza; działały tu cechy krawców, szewców i piwowarów, a jarmarki odbywały się dziewięć razy do roku. W 1654 roku powstał barokowy pałac biskupi, w 1793 dobra biskupie przejęły Prusy, a prawa miejskie Pszczew utracił w 1946 roku. W 1984 otwarto tutaj muzeum zwane Domem Szewca; działa również Skansen Pszczelarski. Miejscowość leży na przesmyku między dwoma jeziorami, w Rynnie Jezior Pszczewskich z doliną Obry, gdzie znajduje się około dwudziestu jezior polodowcowych — jezioro Szarcz ma około stu siedemdziesięciu hektarów — a w 1986 roku utworzono Pszczewski Park Krajobrazowy. Kościół pod wezwaniem świętej Marii Magdaleny jest renesansowy, z lat 1632–1654, z barokowym wyposażeniem; zachowały się też barokowa plebania, kamienica z XVIII wieku i klasycystyczny dwór z XIX stulecia z parkiem krajobrazowym.",
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

  districtsHeading: "Do których miejscowości gminy Pszczew dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — Pszczewa, Bierczy, Borowego Młyna, Janowa, Nowego Gorzycka, Policka, Rańska, Silnej, Stoków, Stołunia, Szarcza, Świechocina i Zielomyśla.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza gminę Pszczew też przyjadę",
  nearbyParagraphs: [
    "Międzyrzecz, Trzciel, Skwierzyna, Międzychód i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Międzyrzecz", "Trzciel", "Skwierzyna", "Międzychód"],

  about: blokOMnie("do Pszczewa", "w Pszczewie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pszczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do Pszczewa i do wszystkich miejscowości gminy — Silnej, Stołunia, Szarcza, Borowego Młyna i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Pszczew w powiecie międzyrzeckim, a nie o Pszczynę czy Pszczółki.",
    },
    ...faqWspolne("w Pszczewie"),
    {
      question: "Czy ziemniak wyciąga sól z zupy?",
      answer:
        "Nie. Pomaga wyłącznie dlatego, że zwiększa objętość dania i sam trochę soli przejmuje — ten sam efekt da dolanie płynu, dosypanie ryżu czy kaszy, tylko szybciej. Przesolenie ratuje się rozcieńczeniem, a nie żadnym pochłaniaczem.",
    },
    {
      question: "Czy da się uratować przypalone danie?",
      answer:
        "Zwykle nie — gorycz przechodzi na całą zawartość garnka, a przelanie do innego naczynia jej nie usuwa. Jedyne, co czasem działa, to zlać z wierzchu tę część, która nie dotknęła dna, nie mieszając i nie zeskrobując. Po zamieszaniu nie ma już czego ratować.",
    },
    {
      question: "Co zrobić, gdy danie jest za kwaśne albo za tłuste?",
      answer:
        "Za kwaśne łagodzi się czymś tłustym — śmietaną, masłem, oliwą — albo odrobiną słodyczy, ewentualnie większą objętością. Za tłuste najprościej odstawić: gdy przestygnie, tłuszcz zbiera się na wierzchu i schodzi łyżką. Zasada nadrzędna brzmi: jedna świadoma korekta zamiast pięciu odruchowych.",
    },
    {
      question: "Czego nie da się w kuchni odkręcić?",
      answer:
        "Przypalenia, rozgotowanego makaronu, wysuszonej pieczeni i ciasta, które nie wyrosło z martwych drożdży — w każdym z tych przypadków zmieniła się struktura, a tej nie przywraca żaden dodatek. Za to część wpadek to nie wpadki, tylko inne danie: rozpadnięte warzywa to krem, za gęsta zupa to sos.",
    },
  ],

  geo: { lat: 52.4781, lng: 15.7811 },
};
