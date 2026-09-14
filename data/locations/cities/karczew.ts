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
 * KARCZEW — powiat otwocki, woj. mazowieckie.
 * MIASTO 9 214 (GUS 31.12.2024), 28,1 km², 327,7 os./km².
 *
 * ⚠ HOMONIMY: KARCZEW ≠ KARCZMISKA ≠ KARCZÓW.
 *   FAQ to rozróżnia.
 * ⚠⚠ NAZWA NIE POCHODZI OD KARCZMY, TYLKO OD KARCZOWANIA
 *   LASU: gdy pod koniec XIV w. Wisła odsunęła się od Czerska
 *   o dwa kilometry, właściciele karczowali las na wyższym
 *   terenie — „od karczowanego terenu nowe osiedle przyjęło
 *   nazwę Karczewie". TO WAŻNE, BO INTUICJA MYLI.
 *
 * HISTORIA:
 * — początki osady opierały się na polowaniach, zbieractwie
 *   owoców leśnych, dostatku drewna i rybołówstwie,
 * — 1539 r. — Karczew wszedł w skład powiatu garwolińskiego,
 * — ⚠ PRAWA MIEJSKIE: SOBOTA 21 STYCZNIA 1548 r., nadane
 *   na Sejmie w Piotrkowie, na prawie chełmińskim; zwolnienie
 *   od szosu i innych podatków (poza czopowym) na 20 lat;
 *   TARG RAZ W TYGODNIU, W KAŻDĄ SOBOTĘ; DWA JARMARKI
 *   ROCZNIE: na św. Wita (15 czerwca) i św. Bartłomieja
 *   (24 sierpnia). Dokument wymienia branże handlarzy
 *   przybywających na jarmarki: spożywczą, kołodziejską,
 *   szewską, browarniczą, kowalską, krawiecką. Miasto
 *   lokowano na surowym korzeniu, z rynkiem wytyczonym
 *   na pustym polu,
 *   ⚠ KĄT „targ" ZAJĘTY — podaję jako fakt.
 *   ⚠ ZERO ALKOHOLU — branża browarnicza to tylko nazwa
 *     z listy.
 * — ⚠ W 1869 r. KARCZEW STRACIŁ PRAWA MIEJSKIE, a urząd gminy
 *   przeniesiono do Otwocka Wielkiego. ⚠ PODAJĘ JAKO SUCHY
 *   FAKT, BEZ PRZYCZYN I BEZ TONU UPADKU. TWARDA GRANICA.
 * — 1877 r. — otwarcie linii kolejowej nadnarwiańskiej
 *   przyspieszyło rozwój Otwocka, Józefowa i Celestynowa,
 * — w XIX w. działały tu WARSZTATY PASÓW WEŁNIANYCH (jeden
 *   zatrudniał trzech pracowników, inny jednego).
 *
 * ⚠⚠ SAD KURTZA — PODSTAWA KĄTA:
 * W 1884 r. ZYGMUNT KURTZ ZAŁOŻYŁ W KARCZEWIE „OGROMNY SAD,
 * LICZĄCY 20 TYS. DRZEWEK", określany jako „największy
 * i stojący na wysokim poziomie sad w Królestwie Polskim",
 * który DOSTARCZAŁ OWOCE DO WARSZAWY, A NAWET DO PETERSBURGA.
 * ⚠ LOSÓW SADU PO 1900 r. NIE USTALONO — NIE PISZĘ O NICH.
 * ⚠ KĄTY „jabłko", „odmiany", „soki", „kompoty i musy"
 *   SĄ ZAJĘTE — sad jest KOTWICĄ, nie tematem owocowym.
 *
 * GEOGRAFIA: rzeka WISŁA; w pobliżu Mazowiecki Park
 * Krajobrazowy. Sołectwa gminy: Brzezinka, Całowanie, Glinki,
 * Janów, Kępa Nadbrzeska i Władysławów, Kosumce, Łukówiec,
 * Nadbrzeż, Ostrówek, Ostrówiec, Otwock Mały, Otwock Wielki,
 * Piotrowice, Sobiekursk, Wygoda. W sąsiednim Otwocku Wielkim
 * zespół pałacowo-parkowy z XVIII w.
 *
 * ⚠ DAT BUDOWY KOŚCIOŁA PARAFIALNEGO ŚW. WITA NIE PODAJĘ —
 *   nieustalone. ⚠ NAZW OSIEDLI MIEJSKICH NIE USTALONO
 *   (miasto ma osiedla numerowane 1–9) — districts PUSTE.
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH (weryfikacja niepełna).
 *
 * KĄT: DOJRZEWANIE PO ZERWANIU — co dojrzewa w domu,
 * a co już nigdy.
 * Kąt od sadu Zygmunta Kurtza z 1884 roku — dwudziestu tysięcy
 * drzew, z których owoce jechały do Warszawy, a nawet
 * do Petersburga. Takich owoców nie można było zrywać
 * dojrzałych; dojrzewały w drodze.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dla części produktów MOMENT ZBIORU I MOMENT GOTOWOŚCI
 *   TO DWIE RÓŻNE DATY — i że to wyjaśnia, dlaczego czasem
 *   lepiej kupić twarde niż miękkie,
 * — ⚠⚠ PODZIAŁ, KTÓRY WARTO ZNAĆ:
 *   CO DOJRZEWA PO ZERWANIU: banan, awokado, gruszka,
 *   brzoskwinia, morela, śliwka, kiwi, mango, pomidor,
 *   melon (część odmian),
 *   CZEGO JUŻ NIE BĘDZIE: truskawka, malina, borówka,
 *   czereśnia, wiśń, winogrono, arbuz, ogórek, cytrusy,
 *   ananas — zerwane niedojrzałe zostaną niedojrzałe
 *   do końca,
 * — ŻE STĄD BIERZE SIĘ NAJCZĘSTSZE ROZCZAROWANIE ZAKUPOWE:
 *   twarde truskawki nie „dojdą na oknie", a twarde awokado
 *   tak,
 * — ŻE PRZY OWOCACH DOJRZEWAJĄCYCH TWARDE JEST CZĘSTO
 *   LEPSZYM WYBOREM — bo dojrzeją w domu, a nie w skrzynce
 *   w transporcie,
 * — JAK PRZYSPIESZYĆ: położyć obok jabłka albo banana,
 *   w papierowej torbie, w temperaturze pokojowej
 *   ⚠ ODSYŁAM DO STRONY, NA KTÓREJ PISAŁAM O SĄSIEDZTWIE,
 *     JEDNYM ZDANIEM,
 * — JAK ZATRZYMAĆ: przenieść do lodówki, gdy osiągnie
 *   pożądany stan,
 * — ŻE POMIDOR JEST TU SZCZEGÓLNYM PRZYPADKIEM: dojrzewa
 *   dalej, ale w lodówce traci aromat, więc trzyma się go
 *   na blacie ⚠ ODSYŁAM DO STRONY O WARZYWACH POZA LODÓWKĄ,
 * — ŻE DOJRZEWANIE TO NIE TYLKO MIĘKNIĘCIE: zmienia się też
 *   słodycz i zapach, a przy niektórych owocach tylko
 *   miękkość — i dlatego zerwane zbyt wcześnie bywają miękkie,
 *   a wciąż bez smaku,
 * — ŻE TO SAMO DOTYCZY PIECZYWA I SERÓW, tylko nazywa się
 *   inaczej ⚠ JEDNYM ZDANIEM, BEZ ROZWIJANIA,
 * — UCZCIWIE: urządzenie nie przyspieszy dojrzewania i niczego
 *   nie cofnie,
 * — ale rozwiązuje problem odwrotny, który przy tym temacie
 *   jest realny: kiedy wszystko dojrzeje naraz — a przy
 *   owocach dojrzewających zdarza się to prawie zawsze —
 *   w kilka minut robi z tego mus albo przecier do zamrożenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO tez o witaminach, etylenie jako substancji, dietach
 *   i „dojrzewaniu sztucznym". TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO ALKOHOLU.
 * — ZERO tematu importu, transportu i „owoców z daleka"
 *   jako sprawy ekologicznej. TWARDA GRANICA.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ UTRATĘ PRAW MIEJSKICH W 1869 r. PODAJĘ JAKO SUCHY
 *   FAKT, BEZ PRZYCZYN.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „WARZYWA, KTÓRE NIE POWINNY LEŻEĆ W LODÓWCE" (Trzciel)
 *   dotyczy MIEJSCA PRZECHOWYWANIA. Wspomniano tam o jabłku
 *   przyspieszającym dojrzewanie sąsiadów — ⚠ DLATEGO TUTAJ
 *   PISZĘ O TYM JEDNYM ZDANIEM I ODSYŁAM.
 * — „CO OBOK CZEGO" (Góra Kalwaria) dotyczy WPŁYWU PRODUKTÓW
 *   NA SIEBIE.
 * — „CO PSUJE SIĘ NAJPIERW" (Łomianki) dotyczy TRWAŁOŚCI
 *   I KOLEJNOŚCI ZJADANIA.
 * — „POWIETRZE" (Grójec) dotyczy TLENU I ODCINANIA GO.
 * — „odmiany" (Józefów nad Wisłą) dotyczy WYBORU ODMIANY.
 * — „kompoty i musy z własnych owoców" dotyczą PRZETWORÓW.
 * TUTAJ chodzi o JEDNO PYTANIE: czy dany produkt dojrzeje
 * jeszcze w domu, czy już nie — i co z tego wynika przy
 * kupowaniu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE WYWODZĘ nazwy miasta od karczmy.
 * — NIE PODAJĘ losów sadu Kurtza po 1900 r.
 * — NIE PODAJĘ dat budowy kościoła ani nazw osiedli.
 * — NIE PODAJĘ przyczyn utraty praw miejskich.
 * — NIE PISZĘ o etylenie jako substancji ani o dojrzewaniu
 *   sztucznym.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE MYLĘ KARCZEWA z KARCZMISKAMI ani KARCZOWEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — nazwa Karczewa pochodzi od karczowania lasu: gdy pod
 *   koniec XIV w. Wisła odsunęła się od Czerska o dwa
 *   kilometry, właściciele karczowali las na wyższym terenie,
 *   a od karczowanego terenu nowe osiedle przyjęło nazwę,
 * — początki osady opierały się na polowaniach, zbieractwie
 *   owoców leśnych, dostatku drewna i rybołówstwie,
 *   a w 1539 r. Karczew wszedł w skład powiatu garwolińskiego,
 * — prawa miejskie na prawie chełmińskim nadano tu w sobotę
 *   21 stycznia 1548 r. na Sejmie w Piotrkowie, ze zwolnieniem
 *   od podatków na dwadzieścia lat, targiem w każdą sobotę
 *   i dwoma jarmarkami rocznie — na świętego Wita
 *   piętnastego czerwca i świętego Bartłomieja dwudziestego
 *   czwartego sierpnia; dokument wymienia branże handlarzy
 *   przybywających na jarmarki, a miasto lokowano na surowym
 *   korzeniu, z rynkiem wytyczonym na pustym polu,
 * — w 1869 r. Karczew utracił prawa miejskie, a urząd gminy
 *   przeniesiono do Otwocka Wielkiego; w 1877 r. otwarcie
 *   linii kolejowej przyspieszyło rozwój Otwocka, Józefowa
 *   i Celestynowa,
 * — w XIX w. działały tu warsztaty pasów wełnianych,
 * — w 1884 r. Zygmunt Kurtz założył w Karczewie sad liczący
 *   dwadzieścia tysięcy drzew, określany jako największy
 *   i stojący na wysokim poziomie sad w Królestwie Polskim;
 *   jego owoce trafiały do Warszawy, a nawet do Petersburga,
 * — miasto leży nad Wisłą, w pobliżu Mazowieckiego Parku
 *   Krajobrazowego, a do gminy należą między innymi
 *   Całowanie, Glinki, Janów, Nadbrzeż, Otwock Mały i Wielki,
 *   Sobiekursk i Łukówiec; w Otwocku Wielkim zachował się
 *   zespół pałacowo-parkowy z XVIII w.
 */
export const KARCZEW: CityContent = {
  slug: "karczew",
  h1: "Thermomix Karczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Karczew — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Karczewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Karczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Karczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Karczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Karczew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Moment zbioru i moment gotowości to przy wielu owocach dwie różne daty.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Karczewie – jak wygląda prezentacja?",
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
      id: "dojrzewanie",
      heading: "Sad, z którego owoce jechały do Petersburga — czyli o dojrzewaniu po zerwaniu",
      paragraphs: [
        "W 1884 roku Zygmunt Kurtz założył w Karczewie sad liczący dwadzieścia tysięcy drzew — opisywany jako największy i stojący na najwyższym poziomie sad w Królestwie Polskim. Jego owoce trafiały do Warszawy, a nawet do Petersburga.",
        "Wyobraźcie sobie tę trasę w latach osiemdziesiątych XIX wieku i od razu widać, co z niej wynika: takich owoców nie można było zrywać dojrzałych. Musiały wyjechać twarde i dojrzeć po drodze. Sadownik, który tego nie rozumiał, dostarczał do Petersburga skrzynkę czegoś, czego nikt nie chciał kupić.",
        "To prowadzi do pytania, które warto sobie zadawać przy każdych zakupach, a prawie nikt go nie zadaje: czy ten produkt dojrzeje jeszcze w domu, czy już nigdy?",
        "Podział jest ostry i warto go po prostu znać. Dojrzewają po zerwaniu: banany, awokado, gruszki, brzoskwinie, morele, śliwki, kiwi, mango, pomidory i część odmian melona. Nie dojrzeją już nigdy: truskawki, maliny, borówki, czereśnie, wiśnie, winogrona, arbuz, ogórek, cytrusy i ananas. Zerwane niedojrzałe zostaną takie do końca — można je trzymać na oknie choćby i tydzień.",
        "Stąd bierze się chyba najczęstsze rozczarowanie zakupowe w polskiej kuchni. Twarde, jasne truskawki nie „dojdą” w misce. Nie zrobią się słodsze, nie nabiorą zapachu, najwyżej zmiękną i przejdą. A twarde awokado — owszem, dojdzie, i to doskonale.",
        "Odwrotna strona tej zasady jest dużo bardziej użyteczna: przy owocach dojrzewających twarde bywa lepszym wyborem niż miękkie. Owoc, który dojrzewa u Was na blacie, nie odbył tej drogi w skrzynce, obijany o sąsiadów. Kupowanie miękkiego awokado „na dziś” to zwykle kupowanie owocu, który dojrzewał w transporcie, czyli w najgorszych możliwych warunkach.",
        "Przyspieszyć dojrzewanie da się bardzo prosto: położyć owoc obok jabłka albo banana, najlepiej w papierowej torbie, w temperaturze pokojowej. Pisałam o tym sąsiedztwie osobno. Zatrzymać można równie prosto — przenieść do lodówki, kiedy owoc osiągnie stan, o który nam chodziło.",
        "Pomidor jest tu przypadkiem szczególnym i wart osobnego zdania. Dojrzewa dalej po zerwaniu, ale w lodówce traci aromat i robi się mączysty, więc trzyma się go na blacie — nawet jeśli jest już dojrzały. O tym, czego lodówka nie lubi, pisałam gdzie indziej.",
        "Warto też wiedzieć, że dojrzewanie to nie jest po prostu mięknięcie. Przy jednych owocach zmienia się słodycz i zapach, przy innych właściwie tylko miękkość. Dlatego owoc zerwany zdecydowanie za wcześnie potrafi być miękki i jednocześnie bez smaku — i to jest ta gruszka, która wygląda dobrze, a smakuje jak nic.",
        "Na marginesie: to samo zjawisko dotyczy pieczywa i serów dojrzewających, tylko nazywa się inaczej i rządzi się własnymi prawami.",
        "Teraz uczciwie o sprzęcie. Thermomix nie przyspieszy dojrzewania i niczego nie cofnie. Z niedojrzałych truskawek nie zrobi dojrzałych — to jest poza zasięgiem jakiegokolwiek urządzenia.",
        "Rozwiązuje natomiast problem odwrotny, który przy owocach dojrzewających jest bardzo realny: one dochodzą wszystkie naraz. Cztery awokado kupione w poniedziałek są gotowe w czwartek — wszystkie cztery, tego samego dnia. To samo dotyczy gruszek, brzoskwiń i śliwek. I wtedy w kilka minut robi się z nich mus albo przecier, który idzie do zamrażarki zamiast do kosza. Bo o ile moment dojrzałości trudno przewidzieć, o tyle bardzo łatwo go przegapić.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Karczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie owoce, które dojrzały wszystkie naraz — powiedzcie przy umawianiu. Chętnie zrobię z nich mus zamiast przywozić swoje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Karczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla karczewskiej rodziny",
      paragraphs: [
        "Karczew liczy ponad dziewięć tysięcy mieszkańców na dwudziestu ośmiu kilometrach kwadratowych i leży nad Wisłą, w pobliżu Mazowieckiego Parku Krajobrazowego. Wbrew intuicji nazwa nie pochodzi od karczmy, tylko od karczowania lasu: gdy pod koniec XIV wieku Wisła odsunęła się od Czerska o dwa kilometry, właściciele karczowali las na wyższym terenie i od karczowanego terenu nowe osiedle przyjęło nazwę. Początki osady opierały się na polowaniach, zbieractwie owoców leśnych, dostatku drewna i rybołówstwie, a w 1539 roku Karczew wszedł w skład powiatu garwolińskiego. Prawa miejskie na prawie chełmińskim nadano tu w sobotę 21 stycznia 1548 roku na Sejmie w Piotrkowie, ze zwolnieniem od podatków na dwadzieścia lat, targiem w każdą sobotę i dwoma jarmarkami rocznie — na świętego Wita i świętego Bartłomieja; dokument lokacyjny wymienia branże handlarzy przybywających na jarmarki, a miasto zakładano na surowym korzeniu, z rynkiem wytyczonym na pustym polu. W 1869 roku Karczew utracił prawa miejskie, a urząd gminy przeniesiono do Otwocka Wielkiego; otwarcie linii kolejowej w 1877 przyspieszyło rozwój Otwocka, Józefowa i Celestynowa. W XIX wieku działały tu warsztaty pasów wełnianych, a w 1884 roku Zygmunt Kurtz założył sad liczący dwadzieścia tysięcy drzew — określany jako największy i stojący na wysokim poziomie sad w Królestwie Polskim, którego owoce trafiały do Warszawy, a nawet do Petersburga. Do gminy należą między innymi Całowanie, Glinki, Janów, Nadbrzeż, Otwock Mały i Wielki, Sobiekursk oraz Łukówiec; w Otwocku Wielkim zachował się zespół pałacowo-parkowy z XVIII wieku.",
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

  districtsHeading: "Do których części Karczewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do okolic Rynku i na wszystkie osiedla. Dojeżdżam też do sołectw gminy: Całowania, Glinek, Janowa, Nadbrzeża, Ostrówka, Otwocka Małego i Wielkiego, Piotrowic, Sobiekurska, Łukówca i Wygody.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Karczew też przyjadę",
  nearbyParagraphs: [
    "Otwock, Józefów, Celestynów, Góra Kalwaria i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Otwock", "Józefów", "Celestynów", "Góra Kalwaria"],

  about: blokOMnie("do Karczewa", "w Karczewie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Karczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy — Całowania, Glinek, Nadbrzeża, Otwocka Małego i Wielkiego oraz pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Karczew nad Wisłą w powiecie otwockim, a nie o Karczmiska czy Karczów.",
    },
    ...faqWspolne("w Karczewie"),
    {
      question: "Które owoce dojrzewają po zerwaniu?",
      answer:
        "Banany, awokado, gruszki, brzoskwinie, morele, śliwki, kiwi, mango, pomidory i część odmian melona. Nie dojrzeją już nigdy truskawki, maliny, borówki, czereśnie, wiśnie, winogrona, arbuz, ogórek, cytrusy i ananas — zerwane niedojrzałe zostaną takie do końca.",
    },
    {
      question: "Czy lepiej kupować owoce twarde czy miękkie?",
      answer:
        "Przy owocach dojrzewających twarde bywa lepszym wyborem: dojdą u Was na blacie, a nie w skrzynce, obijane w transporcie. Przyspieszyć można, kładąc owoc obok jabłka albo banana w papierowej torbie; zatrzymać — przenosząc do lodówki, gdy osiągnie pożądany stan.",
    },
    {
      question: "Dlaczego miękka gruszka bywa bez smaku?",
      answer:
        "Bo dojrzewanie to nie jest po prostu mięknięcie. Przy jednych owocach zmienia się słodycz i zapach, przy innych właściwie tylko miękkość — więc owoc zerwany zdecydowanie za wcześnie potrafi być miękki i jednocześnie pozbawiony smaku.",
    },
  ],

  geo: { lat: 52.0758, lng: 21.25 },
};
