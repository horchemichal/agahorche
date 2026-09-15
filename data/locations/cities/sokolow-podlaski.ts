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
 * SOKOŁÓW PODLASKI — powiat sokołowski, woj. mazowieckie.
 * MIASTO 18 295 (GUS 31.12.2024), 17,5 km², 1044,8 os./km².
 *
 * ⚠⚠ HOMONIMY — KLUCZOWE:
 * SOKOŁÓW PODLASKI ≠ SOKOŁÓW MAŁOPOLSKI (podkarpackie)
 * ≠ SOKOŁÓW — wieś w powiecie gostynińskim (mazowieckie!)
 * ≠ Sokołów pod Warszawą. FAQ to rozróżnia.
 *
 * HISTORIA:
 * — 1415 — drewniany kościół Trójcy Przenajświętszej;
 *   1424 — PRAWA MIEJSKIE OD WIELKIEGO KSIĘCIA WITOLDA;
 *   miasto na trakcie litewskim (Wielki Gościniec Litewski),
 * — właściciele: Sepeński (1424), Kiszka (1508), Radziwiłłowie
 *   (1592), Krasiński (1668), Ogińscy (pocz. XVIII w.),
 *   Kobyliński (1833), Hirschman (przed 1843), od 1867
 *   własność państwa,
 * — 1771 — Stanisław August Poniatowski nadaje przywileje
 *   cechom: kuśnierskiemu, szewskiemu i garncarskiemu;
 *   głównymi towarami handlu były płótna, kapelusze, pasy
 *   słuckie, ocet, mydło i świece; targi wokół rynku
 *   oraz ulic Węgrowskiej, Siedleckiej, Drohickiej
 *   i Kościelnej,
 * — Michał Kleofas Ogiński sprowadził rzemieślników
 *   francuskich (chustki jedwabne, kapelusze, kobierce,
 *   pasy kontuszowe),
 * — ⚠ CUKROWNIA „ELŻBIETÓW" W PRZEŹDZIATCE — źródła podają
 *   1845 ALBO 1848. PISZĘ „w połowie lat czterdziestych
 *   XIX wieku", BEZ DOKŁADNEJ DATY. W 1890 r. zatrudniała
 *   600 robotników; ostatnia kampania w 2003 r.
 *   ⚠⚠ KOŃCA CUKROWNI NIE ROBIĘ TEMATEM — ZERO upadku
 *     przemysłu. TWARDA GRANICA. Kąt „cukier i karmel"
 *     jest zresztą ZAJĘTY.
 * — ⚠ W LATACH 1845–1890 DZIAŁAŁY W MIEŚCIE: fabryka octu
 *   i świec, SZEŚĆ WIATRAKÓW, PIĘĆ GARBARNI, DWIE OLEJARNIE
 *   i cegielnia. ⚠ KĄT „OLEJE — KTÓRY DO CZEGO" ZAJĘTY,
 *   olejarni nie robię tematem.
 * — 1887 — linia kolejowa. Rzeka: CETYNIA.
 *
 * ⚠⚠ WSPÓŁCZESNA GOSPODARKA — PODSTAWA KĄTA:
 * W mieście DOMINUJE PRZEMYSŁ ROLNO-SPOŻYWCZY, a największym
 * zakładem jest BRANŻA MIĘSNA; obok transport, telekomunikacja
 * i konstrukcje stalowe; ponad 1300 mniejszych podmiotów.
 * ⚠⚠ NAZW FIRM NIE PODAJĘ — piszę wyłącznie „branża mięsna"
 *   i „przemysł rolno-spożywczy". TWARDA GRANICA.
 * ⚠ PRZEMYSŁ MIĘSNY TO DOPIERO LATA 70. XX w. — NIE PISZĘ,
 *   że miasto „od zawsze żyło z mięsa". To byłoby nieprawdą:
 *   przez cały XIX w. filarem była cukrownia.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠⚠ „KIEŁBASA CHŁOPSKA" I „WIEPRZOWINA RASY WBP" Z LPT
 *   POCHODZĄ Z MOŚCIBRODÓW, GMINA WIŚNIEW, POWIAT SIEDLECKI
 *   — NIE Z SOKOŁOWA. NIE PRZYPISUJĘ ICH TEMU MIASTU.
 *   TWARDA GRANICA.
 *
 * KĄT: PODROBY — wątróbka, serca, ozorki, nerki: część
 * zwierzęcia, której prawie nikt już nie kupuje.
 * Kąt od tego, że w Sokołowie Podlaskim dominuje przemysł
 * rolno-spożywczy z branżą mięsną na czele — to jedno
 * z niewielu miast w Polsce, gdzie ten temat jest na miejscu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jeszcze dwa pokolenia temu kupowało się całe zwierzę
 *   albo przynajmniej myślało się o nim jako o całości,
 *   a dziś sklepowa lada to głównie schab, pierś i mielone,
 * — ŻE PODROBY SĄ NAJTAŃSZYM MIĘSEM W SKLEPIE i to jest
 *   fakt, a nie zachęta ⚠ BEZ TONU „oszczędzaj",
 * — CZYM SIĘ RÓŻNIĄ MIĘDZY SOBĄ:
 *   — WĄTRÓBKA — najkrótszy czas obróbki ze wszystkiego;
 *     przesmażona twardnieje i robi się sucha,
 *   — SERCA — to jest mięsień, więc zachowuje się jak mięso
 *     do duszenia, a nie jak wątróbka,
 *   — OZORKI — wymagają długiego gotowania i obrania
 *     po ugotowaniu,
 *   — NERKI — wymagają wymoczenia przed obróbką,
 * — ⚠⚠ NAJWAŻNIEJSZA RZECZ PRAKTYCZNA: PODROBY SĄ
 *   NAJBARDZIEJ WRAŻLIWE NA ŚWIEŻOŚĆ ze wszystkiego, co jest
 *   w mięsnym. Kupuje się je na ten sam dzień i nie planuje
 *   „na potem". ⚠ PISZĘ TO JAKO KWESTIĘ SMAKU I ZAPACHU,
 *   NIGDY JAKO OSTRZEŻENIE ZDROWOTNE. TWARDA GRANICA.
 * — ŻE SOLI SIĘ JE NA KOŃCU, NIE NA POCZĄTKU — sól wyciąga
 *   wodę i wątróbka twardnieje,
 * — ŻE MLEKO PRZED SMAŻENIEM to stara praktyka łagodząca
 *   smak; działa, ale nie każdemu jest potrzebna,
 * — ŻE CEBULA JEST TU NIE DODATKIEM, TYLKO CZĘŚCIĄ DANIA,
 *   a jabłko i majeranek to dwa najczęstsze uzupełnienia,
 * — ŻE TO JEST JEDZENIE, KTÓRE DZIELI — i że nie ma sensu
 *   nikogo przekonywać; można ugotować dla siebie,
 * — ⚠ ODSYŁAM DO OSOBNEJ STRONY O FLAKACH — NIE ROZWIJAM,
 *   kąt ZAJĘTY,
 * — UCZCIWIE: urządzenie nie usmaży wątróbki tak jak patelnia
 *   — smażenie na dużym ogniu zostaje patelniowe,
 * — ale sprawdza się przy dwóch rzeczach z tej rodziny:
 *   przy pasztecie i pasztecikach, gdzie miele i miksuje
 *   na gładko, oraz przy sercach i ozorkach, które trzeba
 *   długo dusić bez pilnowania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO tez o żelazie, witaminach, cholesterolu i dnie
 *   moczanowej. ZERO ostrzeżeń o zatruciach. Piszę WYŁĄCZNIE
 *   o SMAKU, ZAPACHU I TECHNICE. TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH NAZW FIRM — ani zakładu mięsnego,
 *   ani cukrowni jako marki. TWARDA GRANICA.
 * — ZERO tematu uboju i hodowli przemysłowej.
 * — ZERO tonu „oszczędzaj, bo tanie".
 * — ZERO moralizowania o niemarnowaniu.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠⚠ ZERO TEMATU KOŃCA CUKROWNI (2003) JAKO UPADKU —
 *   cukrownię opisuję wyłącznie jako fakt XIX-wieczny.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „flaki" dotyczą JEDNEGO DANIA.
 * — „WOŁOWINA", „BARANINA", „KURCZAK", „INDYK" dotyczą
 *   MIĘSA MIĘŚNIOWEGO.
 * — „MIELONE MIĘSO I MASZYNKA DO MIELENIA" dotyczy MIELENIA.
 * — „ILE PRACY JEST W SKŁADNIKU, ZANIM GO KUPISZ" dotyczy
 *   DROGI PRODUKTU DO SKLEPU.
 * — „OBIERKI, SKÓRKI I ŁODYGI" dotyczą ODPADÓW ROŚLINNYCH.
 * TUTAJ chodzi WYŁĄCZNIE O PODROBY — o cztery konkretne
 * produkty i o to, czym się od siebie różnią w obróbce.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnej daty powstania cukrowni (1845/1848).
 * — NIE PISZĘ, że miasto od zawsze żyło z przemysłu mięsnego.
 * — NIE PRZYPISUJĘ miastu produktów z Mościbrodów.
 * — NIE PODAJĘ nazw firm.
 * — NIE WYMYŚLAM święta kulinarnego ani KGW w mieście.
 * — NIE MYLĘ SOKOŁOWA PODLASKIEGO z SOKOŁOWEM MAŁOPOLSKIM
 *   ani z wsią Sokołów w powiecie gostynińskim.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie nadał Sokołowowi w 1424 r. wielki książę
 *   Witold, a miasto leżało na trakcie litewskim; drewniany
 *   kościół Trójcy Przenajświętszej stanął tu w 1415 r.,
 * — kolejnymi właścicielami byli Sepeńscy, Kiszkowie,
 *   Radziwiłłowie, Krasińscy i Ogińscy; Michał Kleofas Ogiński
 *   sprowadził rzemieślników francuskich wyrabiających chustki
 *   jedwabne, kapelusze, kobierce i pasy kontuszowe,
 * — w 1771 r. Stanisław August Poniatowski nadał przywileje
 *   cechom kuśnierskiemu, szewskiemu i garncarskiemu; głównymi
 *   towarami handlu miejskiego były płótna, kapelusze, pasy
 *   słuckie, ocet, mydło i świece, a targi odbywały się wokół
 *   rynku oraz ulic Węgrowskiej, Siedleckiej, Drohickiej
 *   i Kościelnej,
 * — w połowie lat czterdziestych XIX w. w Przeździatce
 *   uruchomiono cukrownię „Elżbietów", jedną z pierwszych
 *   w Królestwie Polskim; w 1890 r. zatrudniała sześciuset
 *   robotników, a przy niej wyrosły osiedla Elżbietów
 *   i Przeździatka,
 * — w latach 1845–1890 działały w mieście fabryka octu
 *   i świec, sześć wiatraków, pięć garbarni, dwie olejarnie
 *   i cegielnia; w 1887 r. doprowadzono linię kolejową,
 * — dziś w mieście dominuje przemysł rolno-spożywczy,
 *   a największym zakładem jest branża mięsna; działa tu
 *   ponad tysiąc trzysta mniejszych podmiotów gospodarczych,
 * — w Przeździatce stoi neorenesansowa rezydencja z 1859 r.
 *   z parkiem krajobrazowym z 1898 r., a w Elżbietowie
 *   i Przeździatce zachowała się zabudowa pocukrownicza
 *   z czerwonej cegły,
 * — przez miasto płynie Cetynia.
 */
export const SOKOLOW_PODLASKI: CityContent = {
  slug: "sokolow-podlaski",
  h1: "Thermomix Sokołów Podlaski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sokołów Podlaski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sokołowie Podlaskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sokołów Podlaski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sokołowie Podlaskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sokołowa Podlaskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Sokołów Podlaski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wątróbka, serca, ozorki i nerki to cztery różne produkty, nie jedna kategoria.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sokołowie Podlaskim – jak wygląda prezentacja?",
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
      id: "podroby",
      heading: "Miasto przemysłu rolno-spożywczego — czyli o podrobach",
      paragraphs: [
        "W Sokołowie Podlaskim dominuje dziś przemysł rolno-spożywczy, a największym zakładem jest branża mięsna. To ciekawe o tyle, że wcale nie jest tak od zawsze — przez cały XIX wiek filarem miasta była cukrownia w Przeździatce, uruchomiona w połowie lat czterdziestych, a obok niej pracowało sześć wiatraków, pięć garbarni i dwie olejarnie. Mięso przyszło tu dopiero w latach siedemdziesiątych XX wieku. Ale skoro przyszło, to jest to jedno z niewielu miast w Polsce, gdzie temat, o którym chcę napisać, jest naprawdę na miejscu.",
        "Chodzi o podroby. Jeszcze dwa pokolenia temu kupowało się całe zwierzę albo przynajmniej myślało o nim jako o całości. Dziś sklepowa lada to w praktyce schab, pierś z kurczaka i mielone, a wątróbka leży w rogu i zwykle czeka dłużej, niż powinna.",
        "Pierwsza rzecz, którą warto powiedzieć, to że „podroby” nie są jedną kategorią. To cztery bardzo różne produkty, które zachowują się w kuchni zupełnie inaczej — i większość nieudanych prób bierze się z traktowania ich jednakowo.",
        "Wątróbka ma najkrótszy czas obróbki ze wszystkiego, co da się kupić w mięsnym. Dosłownie chwila za długo i robi się twarda, sucha i ziarnista — a tego już nie da się cofnąć. Jeśli ktoś ma wątróbkę w złej pamięci, to w dziewięciu przypadkach na dziesięć jadł ją przesmażoną.",
        "Serca to co innego: to mięsień, więc zachowuje się jak mięso do duszenia. Potrzebuje czasu, nie szybkości. Duszone długo robią się miękkie i mają smak bliższy wołowinie niż czemukolwiek innemu.",
        "Ozorki wymagają długiego gotowania, a potem obrania — skórę zdejmuje się po ugotowaniu, na ciepło, bo wtedy schodzi sama. Na zimno już nie zejdzie.",
        "Nerki wymagają wymoczenia przed obróbką i to jest warunek, a nie zalecenie. Bez tego smak jest taki, jaki ludzie mają na myśli, kiedy mówią, że nie lubią podrobów.",
        "Najważniejsza rzecz praktyczna dotyczy jednak zakupów, nie gotowania. Podroby są ze wszystkiego, co leży w mięsnym, najbardziej wrażliwe na świeżość. Ich smak i zapach zmieniają się szybciej niż w kawałku schabu — dlatego kupuje się je na ten sam dzień i nie planuje „na potem”. Wątróbka kupiona w czwartek na niedzielę to przepis na rozczarowanie, nawet jeśli formalnie wszystko jest w porządku.",
        "Dwie drobne rzeczy, które zmieniają wynik. Soli się na końcu, nie na początku — sól wyciąga wodę i wątróbka twardnieje jeszcze przed właściwym smażeniem. A namoczenie w mleku przed smażeniem to stara praktyka łagodząca smak; działa naprawdę, choć nie każdemu jest potrzebna.",
        "Cebula nie jest tu dodatkiem, tylko częścią dania — smażona osobno, dłużej i wolniej niż sama wątróbka. A dwa najczęstsze uzupełnienia to jabłko i majeranek; oba są w tym zestawieniu z tego samego powodu, dla którego do tłustych dań dodaje się kwas.",
        "Warto też powiedzieć rzecz oczywistą: to jest jedzenie, które dzieli. Część rodziny nie tknie i nie ma sensu nikogo przekonywać ani tłumaczyć, że „to przecież dobre”. Można po prostu ugotować dla siebie i dla tych, którzy jedzą. O flakach, które dzielą ludzi jeszcze mocniej, pisałam osobno.",
        "Teraz uczciwie o sprzęcie. Thermomix nie usmaży wątróbki tak jak patelnia. Smażenie na dużym ogniu, z rumienieniem, zostaje czynnością patelniową i nie ma sensu udawać inaczej.",
        "Sprawdza się natomiast przy dwóch rzeczach z tej samej rodziny. Pierwsza to pasztet i pasztecik — miele i miksuje na gładko, a to jest przy pasztecie cała robota. Druga to serca i ozorki, które trzeba dusić albo gotować długo: tam urządzenie po prostu pilnuje za nas, a danie i tak potrzebuje swojego czasu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sokołowie Podlaskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć domowy pasztet — powiedzcie przy umawianiu. To jedna z tych rzeczy, przy których różnica między domowym a sklepowym jest największa.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sokołowie Podlaskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sokołowskiej rodziny",
      paragraphs: [
        "Sokołów Podlaski liczy ponad osiemnaście tysięcy mieszkańców na siedemnastu i pół kilometra kwadratowego i należy do gęściej zabudowanych miast Mazowsza. Prawa miejskie nadał mu w 1424 roku wielki książę Witold, a miasto leżało na trakcie litewskim; drewniany kościół Trójcy Przenajświętszej stanął tu dziewięć lat wcześniej. Kolejnymi właścicielami byli Sepeńscy, Kiszkowie, Radziwiłłowie, Krasińscy i Ogińscy — Michał Kleofas Ogiński sprowadził rzemieślników francuskich wyrabiających chustki jedwabne, kapelusze, kobierce i pasy kontuszowe. W 1771 roku Stanisław August Poniatowski nadał przywileje cechom kuśnierskiemu, szewskiemu i garncarskiemu; głównymi towarami handlu miejskiego były płótna, kapelusze, pasy słuckie, ocet, mydło i świece, a targi odbywały się wokół rynku oraz ulic Węgrowskiej, Siedleckiej, Drohickiej i Kościelnej. W połowie lat czterdziestych XIX wieku w Przeździatce uruchomiono cukrownię „Elżbietów”, jedną z pierwszych w Królestwie Polskim — w 1890 zatrudniała sześciuset robotników, a przy niej wyrosły osiedla Elżbietów i Przeździatka. W latach 1845–1890 działały w mieście fabryka octu i świec, sześć wiatraków, pięć garbarni, dwie olejarnie i cegielnia; w 1887 doprowadzono kolej. Dziś dominuje tu przemysł rolno-spożywczy, a działa ponad tysiąc trzysta mniejszych podmiotów gospodarczych. W Przeździatce stoi neorenesansowa rezydencja z 1859 roku z parkiem krajobrazowym z 1898, a w obu osiedlach zachowała się zabudowa pocukrownicza z czerwonej cegły. Przez miasto płynie Cetynia.",
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

  districtsHeading: "Do których części Sokołowa Podlaskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z Elżbietowem i Przeździatką, dawnymi osiedlami przy cukrowni. Dojeżdżam też do wsi w gminie: Przeździatki-Kolonii, Nowej Wsi, Grochowa, Karlusina, Ząbkowa, Kostek, Krasnodębów-Sypytek, Skibniewa-Podawiec i Podkupientyna.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Elżbietów", "Przeździatka"],

  nearbyHeading: "Poza Sokołów Podlaski też przyjadę",
  nearbyParagraphs: [
    "Węgrów, Siedlce, Łosice, Drohiczyn i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Węgrów", "Siedlce", "Łosice", "Drohiczyn"],

  about: blokOMnie("do Sokołowa Podlaskiego", "w Sokołowie Podlaskim", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sokołowa Podlaskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie z Elżbietowem i Przeździatką — oraz do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Sokołów Podlaski w powiecie sokołowskim, a nie o Sokołów Małopolski ani o wieś Sokołów w powiecie gostynińskim.",
    },
    ...faqWspolne("w Sokołowie Podlaskim"),
    {
      question: "Dlaczego wątróbka wychodzi twarda?",
      answer:
        "Bo została przesmażona — ma najkrótszy czas obróbki ze wszystkiego, co da się kupić w mięsnym, a chwila za długo daje mięso twarde, suche i ziarniste, czego nie można już cofnąć. Drugi powód to sól dodana na początku: wyciąga wodę i wątróbka twardnieje jeszcze przed smażeniem.",
    },
    {
      question: "Czy podroby to jedna kategoria?",
      answer:
        "Nie, i to jest źródło większości nieudanych prób. Wątróbka potrzebuje szybkości, serca to mięsień do długiego duszenia, ozorki wymagają gotowania i obrania na ciepło, a nerki — wymoczenia przed obróbką. Traktowane jednakowo wychodzą źle.",
    },
    {
      question: "Jak kupować podroby?",
      answer:
        "Na ten sam dzień. Są ze wszystkiego, co leży w mięsnym, najbardziej wrażliwe na świeżość — smak i zapach zmieniają się w nich szybciej niż w kawałku schabu, więc wątróbka kupiona z kilkudniowym wyprzedzeniem to przepis na rozczarowanie.",
    },
  ],

  geo: { lat: 52.407, lng: 22.2534 },
};
