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
 * ŁOMIANKI — powiat warszawski zachodni, woj. mazowieckie.
 * MIASTO 18 258 (GUS 31.12.2024), 8,4 km², ok. 2174 os./km²
 * — jedno z najgęściej zaludnionych miast w serwisie.
 * PRAWA MIEJSKIE 1989 r.
 *
 * ⚠ HOMONIMY: ŁOMIANKI ≠ ŁOMŻA ≠ ŁOMNICA. FAQ to rozróżnia.
 *
 * ⚠⚠ KĘPA KIEŁPIŃSKA — PODSTAWA KĄTA:
 * — założona w 1803 r. przez Jerzego Fryderyka Pothsa
 *   na podmokłym terenie przy Wiśle; osadnicy polscy
 *   i niemieckojęzyczni (olędrzy) z Prus i Meklemburgii,
 * — w latach 60. XIX w. ok. 22 GOSPODARZY NA 414 MORGACH,
 * — ⚠⚠ GOSPODARKA: HODOWLA, SADOWNICTWO I RYBOŁÓWSTWO;
 *   „produkty cieszyły się popularnością na warszawskich
 *   targach". TO JEST KOTWICA — towar świeży, o krótkim
 *   życiu, wożony codziennie do miasta,
 * — niemieccy koloniści budowali LANGHOFY — dom, obora
 *   i stodoła pod jednym dachem, ustawione prostopadle
 *   do rzeki; krajobraz znaczyły wierzby i płoty z wikliny,
 *   praktyczne przy wiosennych powodziach,
 * — ⚠ JEDYNY MATERIALNY ŚLAD po Kępie Kiełpińskiej
 *   to cmentarz kolonistów przy ul. 6 Pułku Piechoty.
 *   ⚠⚠ O LOSACH KOLONISTÓW NIE PISZĘ — TWARDA GRANICA.
 *
 * ⚠ KĄT WIKLINOWY ODRZUCONY — „miasto pracy wykonywanej
 *   w domu. Wiklinę plecie się…" (Rudnik nad Sanem)
 *   i „WARZYWA POZA LODÓWKĄ" (Trzciel) SĄ ZAJĘTE.
 * ⚠ KĄT ZAPACHOWY ODRZUCONY — „zapach i para w mieszkaniu
 *   w bloku" (Białystok) ZAJĘTY.
 *
 * DALSZE FAKTY:
 * — od XVI w. przybywali osadnicy holenderscy i niemieccy,
 *   zakładając młyny i gospodarstwa,
 * — ⚠ KIERUNEK UŻYTKOWANIA ZIEMI GMINY wg opracowania
 *   IGiPZ PAN to „pszenno-żytni z udziałem jęczmienia
 *   i ziemniaków" — NIE warzywniczy. NIE PISZĘ, że gmina
 *   była monokulturą ogrodniczą,
 * — gmina miała 32,9 osoby zatrudnione w rolnictwie
 *   na 100 ha użytków rolnych — jeden z najwyższych
 *   wskaźników w dawnym woj. warszawskim (praca ludzka,
 *   nie maszyny),
 * — ⚠ DATY KOLEJKI WĄSKOTOROWEJ NIE PODAJĘ — źródła
 *   sprzeczne (1900 wg broszury gminnej, 1929 wg opracowania
 *   o kolei młocińskiej). TWARDA GRANICA.
 *
 * GEOGRAFIA: Dolina Łomiankowska; gmina 3810 ha w otulinie
 * Kampinoskiego Parku Narodowego, w obszarach Natura 2000;
 * trzy jeziora ciągu Strugi Dziekanowskiej — Dziekanowskie,
 * Kiełpińskie (rezerwat) i Fabryczne — oraz starorzecza
 * Wisły; co najmniej 37 gatunków ssaków, 194 gatunki ptaków
 * (109 lęgowych), 12 gatunków płazów.
 * KAMPINOSKI PARK NARODOWY: utworzony 1959, Rezerwat
 * Biosfery UNESCO od 2000, 38 544 ha, 350 km szlaków.
 *
 * ZABYTKI (rejestr liczy tylko 3 obiekty, wszystkie XX-wieczne):
 * dworek „Łukaszówek" (1935, ul. Racławicka 21); dawny
 * pensjonat Stowarzyszenia Urzędników Państwowych RP
 * (proj. Zdzisław Celarski, Dąbrowa Leśna); willa z lat 30.
 * ⚠ NIE PISZĘ o „zabytkowych chałupach olęderskich" —
 *   NIE ZACHOWAŁY SIĘ.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 *
 * KĄT: CO PSUJE SIĘ NAJPIERW — w jakiej kolejności zjadać
 * to, co się przyniosło ze sklepu.
 * Kąt od gospodarzy Kępy Kiełpińskiej, którzy od 1803 roku
 * wozili do Warszawy nabiał, owoce i ryby — towar, który
 * miał jeden dzień życia i nie znosił żadnej zwłoki.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że większość ludzi robi zakupy raz na kilka dni,
 *   a potem je „co się chce" — i stąd bierze się prawie
 *   całe marnowanie jedzenia w domu,
 * — ŻE KOLEJNOŚĆ JEST WAŻNIEJSZA NIŻ ILOŚĆ: te same zakupy
 *   zjedzone w innej kolejności dają albo pełen tydzień,
 *   albo trzy dni i wyrzucanie,
 * — PRAKTYCZNA HIERARCHIA, OD NAJKRÓTSZEGO ŻYCIA:
 *   — TEGO SAMEGO DNIA: ryba, podroby, mielone mięso,
 *     sałata i roszponka, świeże zioła miękkie, maliny
 *     i truskawki, gotowe dania na wagę,
 *   — DWA–TRZY DNI: mięso w kawałku, twaróg, awokado
 *     po dojrzeniu, brokuł, kalafior, ogórek,
 *   — TYDZIEŃ I DŁUŻEJ: marchew, seler, kapusta, jabłka,
 *     cytrusy, jajka, sery twarde,
 *   — TYGODNIE: ziemniaki, cebula, czosnek, dynia
 *     — w ciemnym i chłodnym miejscu,
 * — ŻE MIĘSO MIELONE PSUJE SIĘ ZNACZNIE SZYBCIEJ NIŻ TEN SAM
 *   KAWAŁEK W CAŁOŚCI, bo ma wielokrotnie większą powierzchnię
 *   ⚠ ODSYŁAM DO OSOBNEJ STRONY O POWIERZCHNI, NIE ROZWIJAM,
 * — ŻE NAJPROSTSZY SYSTEM TO UŁOŻENIE ZAKUPÓW W LODÓWCE
 *   „OD LEWEJ DO PRAWEJ" WEDŁUG TERMINU, a nie według
 *   kategorii,
 * — ŻE PLANUJE SIĘ TYLKO PIERWSZE DWA DNI, resztę zostawiając
 *   luźno — bo produkty o długim życiu poczekają,
 * — ŻE MROŻENIE JEST DECYZJĄ NA ZAKUPACH, nie ratunkiem
 *   w ostatniej chwili: część mięsa dzieli się i mrozi
 *   od razu po powrocie,
 * — ŻE DATA NA OPAKOWANIU MÓWI MNIEJ NIŻ TO, CZY PRODUKT
 *   BYŁ JUŻ OTWARTY ⚠ BEZ TEZ O BEZPIECZEŃSTWIE ŻYWNOŚCI,
 * — UCZCIWIE: urządzenie nie przedłuża trwałości niczego,
 * — ale zmienia jedną rzecz realnie: skraca drogę od „to się
 *   zaraz zmarnuje" do „to już jest zupą albo pastą",
 *   a właśnie ta droga jest zwykle za długa.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I SANITARNYCH.
 *   ZERO tez o bakteriach, zatruciach i o tym, co „można",
 *   a czego „nie można" zjeść. ZERO instrukcji, jak rozpoznać
 *   zepsute jedzenie. Piszę WYŁĄCZNIE o TRWAŁOŚCI, SMAKU
 *   I PLANOWANIU. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO MORALIZOWANIA. Kąt „MARNOWANIE JEDZENIA"
 *   (Rawa Mazowiecka) jest ZAJĘTY i dotyczy właśnie strony
 *   moralnej — tutaj piszę wyłącznie o KOLEJNOŚCI.
 * — ZERO tonu „oszczędzaj".
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ⚠⚠ ZERO LOSÓW KOLONISTÓW I ZERO TEMATU WYSIEDLEŃ.
 *   Kępę Kiełpińską opisuję WYŁĄCZNIE jako fakt gospodarczy
 *   z XIX w. TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „MARNOWANIE JEDZENIA" (Rawa Mazowiecka) dotyczy TEGO,
 *   CO LĄDUJE W KOSZU, i strony moralnej.
 * — „LODÓWKA" (Witnica) dotyczy UKŁADU PÓŁEK I STREF.
 * — „WARZYWA POZA LODÓWKĄ" (Trzciel) dotyczy PRODUKTÓW,
 *   KTÓRYM CHŁÓD SZKODZI.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy PRODUKTÓW SYPKICH.
 * — „resztki" dotyczą TEGO, CO ZOSTAŁO PO OBIEDZIE.
 * — „planowanie tygodnia" dotyczy UKŁADANIA JADŁOSPISU.
 * TUTAJ chodzi o KOLEJNOŚĆ ZJADANIA ZAKUPÓW — o hierarchię
 * trwałości świeżych produktów i o to, co jeść pierwszego dnia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty kolejki wąskotorowej (źródła sprzeczne).
 * — NIE PISZĘ o zachowanych chałupach olęderskich — nie ma ich.
 * — NIE NAZYWAM gminy monokulturą ogrodniczą.
 * — NIE PISZĘ o losach kolonistów.
 * — NIE PODAJĘ, jak rozpoznać zepsute jedzenie.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE MYLĘ ŁOMIANEK z ŁOMŻĄ ani ŁOMNICĄ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kępę Kiełpińską założył w 1803 r. Jerzy Fryderyk Pothsa
 *   na podmokłym terenie przy Wiśle; osiedlili się tam
 *   osadnicy polscy i niemieckojęzyczni z Prus i Meklemburgii,
 *   a w latach sześćdziesiątych XIX w. gospodarowało tu
 *   około dwudziestu dwóch gospodarzy na 414 morgach,
 * — utrzymywali się z hodowli, sadownictwa i rybołówstwa,
 *   a ich produkty cieszyły się popularnością na warszawskich
 *   targach,
 * — koloniści budowali langhofy — dom, oborę i stodołę pod
 *   jednym dachem — ustawiane prostopadle do rzeki; krajobraz
 *   znaczyły wierzby i płoty z wikliny, praktyczne przy
 *   wiosennych powodziach,
 * — osadnicy holenderscy i niemieccy przybywali tu już
 *   od XVI w., zakładając młyny i gospodarstwa; prawa miejskie
 *   Łomianki otrzymały dopiero w 1989 r.,
 * — gmina zajmuje 3810 ha w otulinie Kampinoskiego Parku
 *   Narodowego i w obszarach Natura 2000; leżą w niej trzy
 *   jeziora ciągu Strugi Dziekanowskiej — Dziekanowskie,
 *   Kiełpińskie i Fabryczne — oraz starorzecza Wisły,
 *   a stwierdzono tu co najmniej 37 gatunków ssaków,
 *   194 gatunki ptaków i 12 gatunków płazów,
 * — Kampinoski Park Narodowy utworzono w 1959 r., od 2000 r.
 *   jest Rezerwatem Biosfery UNESCO, ma 38 544 ha
 *   i 350 km szlaków pieszych,
 * — w rejestrze zabytków miasta figurują trzy obiekty
 *   z XX w.: dworek „Łukaszówek" z 1935 r., dawny pensjonat
 *   Stowarzyszenia Urzędników Państwowych projektu Zdzisława
 *   Celarskiego w Dąbrowie Leśnej i willa z lat trzydziestych.
 */
export const LOMIANKI: CityContent = {
  slug: "lomianki",
  h1: "Thermomix Łomianki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łomianki — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łomiankach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łomianki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łomiankach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łomianek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Łomianki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Te same zakupy zjedzone w innej kolejności to albo pełen tydzień, albo trzy dni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łomiankach – jak wygląda prezentacja?",
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
      id: "co-psuje-sie-najpierw",
      heading: "Kępa Kiełpińska i warszawskie targi — czyli co psuje się najpierw",
      paragraphs: [
        "Kępę Kiełpińską założono w 1803 roku na podmokłym terenie przy Wiśle. W latach sześćdziesiątych XIX wieku gospodarowało tam około dwudziestu dwóch gospodarzy na czterystu czternastu morgach, a utrzymywali się z hodowli, sadownictwa i rybołówstwa. Ich produkty — nabiał, owoce, ryby — cieszyły się popularnością na warszawskich targach. Wszystkie miały jedną wspólną cechę: nie znosiły zwłoki. Towar, który jedzie do miasta rano, musi być sprzedany tego samego dnia, bo następnego już nie jest tym samym towarem.",
        "My tego napięcia nie mamy — mamy lodówkę. Ale przenieśliśmy się w drugą skrajność: robimy zakupy raz na kilka dni, wkładamy wszystko razem i potem jemy „to, na co mamy ochotę”. I stąd bierze się prawie całe wyrzucanie jedzenia w domach.",
        "Rzecz, którą warto sobie uświadomić, brzmi: kolejność jest ważniejsza niż ilość. Te same zakupy, zjedzone w innej kolejności, dają albo pełen tydzień, albo trzy dni i sporo w koszu. To nie jest kwestia dyscypliny ani planowania jadłospisu — wystarczy wiedzieć, co ma ile czasu.",
        "Hierarchia jest w praktyce prosta i warto ją mieć w głowie przy rozpakowywaniu siatek.",
        "Tego samego dnia albo najpóźniej następnego: ryba, podroby, mielone mięso, sałata i roszponka, miękkie zioła, maliny i truskawki, wszystko kupione na wagę jako gotowe. To jest lista rzeczy, które planuje się na pierwszy obiad, a nie na „kiedyś w tygodniu”.",
        "Dwa, trzy dni: mięso w kawałku, twaróg, dojrzałe awokado, brokuł, kalafior, ogórek. Tydzień i dłużej: marchew, seler, kapusta, jabłka, cytrusy, jajka, sery twarde. A tygodniami, w ciemnym i chłodnym miejscu: ziemniaki, cebula, czosnek, dynia.",
        "Jedna rzecz z tej listy zaskakuje ludzi najczęściej: mięso mielone psuje się znacznie szybciej niż dokładnie ten sam kawałek w całości. Powód jest czysto fizyczny — po zmieleniu ma wielokrotnie większą powierzchnię. To ta sama zasada, o której pisałam przy innym mieście, i dlatego mielone kupuje się na dziś, a nie na pojutrze.",
        "Najprostszy system, jaki znam, nie wymaga żadnych list. Wystarczy układać zakupy w lodówce od lewej do prawej według tego, co trzeba zjeść najpierw — a nie według kategorii, jak w sklepie. Wtedy sama lodówka podpowiada, co dziś ugotować, i nic nie ginie z tyłu półki.",
        "Warto też planować tylko pierwsze dwa dni, a resztę zostawić luźno. Produkty o długim życiu i tak poczekają, a sztywny jadłospis na siedem dni rozpada się zwykle w środę.",
        "Mrożenie jest przy tym decyzją podejmowaną na zakupach, nie ratunkiem w ostatniej chwili. Jeśli kupujecie mięso na kilka obiadów, dzieli się je i mrozi od razu po powrocie — wtedy jest w najlepszym stanie. Mrożenie czegoś, co „zaraz się zmarnuje”, ratuje mniej, niż się wydaje.",
        "I jeszcze jedno: data na opakowaniu mówi znacznie mniej niż to, czy produkt był już otwarty. Otwarty jogurt, otwarta śmietana i otwarta wędlina żyją własnym kalendarzem, którego na wieczku nie ma.",
        "Teraz uczciwie o sprzęcie. Thermomix nie przedłuża trwałości niczego. Nie ma takiej funkcji i nie będzie.",
        "Zmienia natomiast jedną rzecz, która w praktyce decyduje o wszystkim: skraca drogę między „to się zaraz zmarnuje” a „to już jest zupą, pastą albo przecierem”. Ta droga jest w domowej kuchni zwykle za długa — wieczorem nikt nie ma siły zaczynać gotowania od zera, więc warzywa zostają na jutro, a jutro jest już za późno. Kiedy zajmuje to kilka minut i jedno naczynie, decyzja zapada inaczej. To jest cały mechanizm i nie ma w nim nic magicznego.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łomiankach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie warzywa, które trzeba zużyć w tym tygodniu — powiedzcie przy umawianiu. Chętnie z nich ugotuję zamiast przywozić swoje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łomiankach"),
    sekcjaRaty("w Łomiankach"),
    {
      id: "rodzina",
      heading: "Thermomix dla łomiankowskiej rodziny",
      paragraphs: [
        "Łomianki liczą ponad osiemnaście tysięcy mieszkańców na zaledwie ośmiu i pół kilometra kwadratowego, co czyni je jednym z najgęściej zaludnionych miast w okolicy; prawa miejskie otrzymały dopiero w 1989 roku. Osadnicy holenderscy i niemieccy przybywali tu jednak już od XVI wieku, zakładając młyny i gospodarstwa. W 1803 roku Jerzy Fryderyk Pothsa założył przy Wiśle Kępę Kiełpińską, gdzie w latach sześćdziesiątych XIX wieku gospodarowało około dwudziestu dwóch gospodarzy na czterystu czternastu morgach; utrzymywali się z hodowli, sadownictwa i rybołówstwa, a ich produkty cieszyły się popularnością na warszawskich targach. Budowali langhofy — dom, oborę i stodołę pod jednym dachem — ustawiane prostopadle do rzeki, a krajobraz znaczyły wierzby i płoty z wikliny, praktyczne przy wiosennych powodziach. Gmina zajmuje trzy tysiące osiemset dziesięć hektarów w otulinie Kampinoskiego Parku Narodowego i w obszarach Natura 2000; leżą w niej trzy jeziora ciągu Strugi Dziekanowskiej — Dziekanowskie, Kiełpińskie i Fabryczne — oraz starorzecza Wisły, a stwierdzono tu co najmniej trzydzieści siedem gatunków ssaków, sto dziewięćdziesiąt cztery gatunki ptaków i dwanaście gatunków płazów. Sam Kampinoski Park Narodowy utworzono w 1959 roku, od 2000 jest Rezerwatem Biosfery UNESCO, ma trzydzieści osiem i pół tysiąca hektarów i trzysta pięćdziesiąt kilometrów szlaków pieszych. W rejestrze zabytków miasta figurują trzy obiekty z XX wieku: dworek „Łukaszówek” z 1935 roku, dawny pensjonat Stowarzyszenia Urzędników Państwowych projektu Zdzisława Celarskiego w Dąbrowie Leśnej i willa z lat trzydziestych.",
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

  districtsHeading: "Do których części Łomianek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na Buraków, do Dąbrowy Leśnej, Rajskiej i Zachodniej, do Łomianek Centralnych, Górnych, Starych, Majowych i Prochowni. Dojeżdżam też do sołectw gminy: Łomianek Dolnych, Dziekanowa Leśnego, Kiełpina i Kępy Kiełpińskiej.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Buraków", "Dąbrowa Leśna", "Łomianki Centralne", "Łomianki Górne", "Łomianki Stare", "Prochownia"],

  nearbyHeading: "Poza Łomianki też przyjadę",
  nearbyParagraphs: [
    "Warszawa, Izabelin, Czosnów, Dziekanów Leśny i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Warszawa", "Izabelin", "Czosnów", "Jabłonna"],

  about: blokOMnie("do Łomianek", "w Łomiankach", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łomianek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — Burakowa, Dąbrowy Leśnej, Łomianek Centralnych, Górnych i Starych — oraz do sołectw gminy, w tym Dziekanowa Leśnego i Kiełpina. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Łomianki pod Warszawą, a nie o Łomżę.",
    },
    ...faqWspolne("w Łomiankach"),
    {
      question: "Co ze świeżych zakupów zjeść pierwszego dnia?",
      answer:
        "Rybę, podroby, mielone mięso, sałatę i roszponkę, miękkie zioła, maliny i truskawki oraz wszystko kupione na wagę jako gotowe. Dwa, trzy dni wytrzymają mięso w kawałku, twaróg, brokuł, kalafior i ogórek; tydzień i dłużej marchew, seler, kapusta, jabłka, jajka i sery twarde.",
    },
    {
      question: "Dlaczego mielone mięso psuje się szybciej niż kawałek?",
      answer:
        "Bo po zmieleniu ma wielokrotnie większą powierzchnię — to czysta fizyka, ta sama, która sprawia, że cienka warstwa szybciej paruje i szybciej stygnie. Dlatego mielone kupuje się na ten sam dzień, a nie na pojutrze.",
    },
    {
      question: "Jak układać zakupy w lodówce?",
      answer:
        "Od lewej do prawej według tego, co trzeba zjeść najpierw — a nie według kategorii, jak w sklepie. Wtedy lodówka sama podpowiada, co dziś ugotować, i nic nie ginie z tyłu półki. Warto też planować tylko pierwsze dwa dni, bo sztywny jadłospis na cały tydzień zwykle rozpada się w środę.",
    },
  ],

  geo: { lat: 52.3337, lng: 20.887 },
};
