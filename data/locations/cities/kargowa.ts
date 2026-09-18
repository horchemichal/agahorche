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
 * KARGOWA — gmina miejsko-wiejska w powiecie zielonogórskim.
 * MIASTO 3 834, GMINA 5 925 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 4,6 km², GMINY 128,5 km², 9 WSI:
 * Dąbrówka, Chwalim, Karszyn, Nowy Jaromierz, Obra Dolna,
 * Stary Jaromierz, Smolno Małe, Smolno Wielkie, Wojnowo.
 * ⚠ Dane ze strony gminy („ok. 5 800 mieszkańców",
 *   „ok. 340 podmiotów") SĄ PRZESTARZAŁE — GUS podaje 5 925
 *   i 756 podmiotów. NIE CYTUJĘ danych gminnych.
 *
 * ⚠ HOMONIMY: KARGOWA ≠ KARGÓW (wieś w gminie Tuczępy,
 * powiat buski, świętokrzyskie). FAQ to rozróżnia.
 *
 * ⚠ PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE: 1661 r. (dwa źródła,
 * w tym strona gminy — przywilej Jana Kazimierza w uznaniu
 * zasług KRZYSZTOFA UNRUGA) kontra 1655 r. (jedno źródło).
 * PISZĘ 1661, ZA PRZEWAGĄ ŹRÓDEŁ, ale bez rozstrzygania sporu.
 * ⚠ WCZEŚNIEJSZY PRZYWILEJ 1637 r.: PRAWO DO CZTERECH
 * JARMARKÓW ROCZNIE I JEDNEGO TARGU TYGODNIOWO.
 * 1360 — pierwsza wzmianka. 1641 — Unrugowie nabywają miasto.
 * ⚠ IMIENIA NABYWCY NIE PODAJĘ — sprzeczność (Jerzy kontra
 *   Krzysztof).
 * 1837 — rząd pruski wykupuje miasto. 1855 — pożar; DOMY PRZY
 * RYNKU POCHODZĄ Z POŁOWY XIX w., z odbudowy po nim.
 * Kargowa była NADGRANICZNYM OŚRODKIEM TARGOWYM z wielkimi
 * jarmarkami, na które zjeżdżali handlarze bydłem.
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW NIE PODAJĘ — brak wzmianek.
 *
 * GEOGRAFIA: KOTLINA KARGOWSKA, południowo-wschodnia część
 * Wysoczyzny Lubuskiej, ok. 40 km od Zielonej Góry.
 * Rzeka OBRZYCA. JEZIORO LINY (28 ha, gł. maks. 10,8 m,
 * systematycznie zarybiane), JEZIORO WOJNOWSKIE (241,78 ha),
 * JEZIORO ZACISZE koło Chwalimia.
 * ⚠ Jezioro Wojnowskie leży na styku gmin Kargowa i Babimost
 *   — piszę „na granicy gmin".
 * Lasy 62,62 km² z 128,47 km² — blisko połowa gminy.
 * ŚCIEŻKA PRZYRODNICZA KARSZYN (3,6 km) z pomnikiem przyrody
 * „Długosz królewski"; ścieżka edukacyjna Wojnowo (1 km,
 * siedem przystanków).
 * Gmina należy do REGIONU KOZŁA — stowarzyszenia sześciu gmin
 * zawiązanego w 1995 r., którego nazwa pochodzi od kozła,
 * instrumentu typu dudy.
 * ⚠ Region Kozła jest już opisany przy Zbąszynku — TU PODAJĘ
 *   GO JEDNYM ZDANIEM, BEZ ROZWIJANIA.
 *
 * ⚠⚠ FABRYKA CZEKOLADY — PODSTAWA KĄTA:
 * Powstała w 1912 albo 1914 r. ⚠ DATY NIE PODAJĘ — sprzeczność.
 * Działała jako fabryka czekolady, kakao i słodyczy założona
 * przez fabrykanta przybyłego z Koblencji; zatrudniała okresowo
 * do 400 osób. Po 1945 filia poznańskich zakładów cukierniczych
 * — landrynki, krówki, WAFLE W MASIE CZEKOLADOWEJ, drażetki.
 * OD 1994 r. należy do międzynarodowego koncernu; wtedy ok. 100
 * pracowników, DZIŚ PONAD 600. Produkuje WAFLE I BATONY,
 * OK. 75% NA EKSPORT — do Wielkiej Brytanii, Niemiec, Włoch
 * i Francji. W 2024 r. świętowała trzydziestolecie w obecnej
 * grupie.
 * ⚠⚠ ŻADNYCH NAZW FIRM ANI MAREK — ani dawnych, ani dzisiejszych.
 *   Piszę „fabryka słodyczy", „wafle i batony". TWARDA ZASADA.
 * ⚠ NAZWISK NIE PODAJĘ.
 * MIĘDZYNARODOWE ŚWIĘTO CZEKOLADY W KARGOWEJ — pierwsza edycja
 * w 2011 r.; w programie zwiedzanie fabryki z degustacją.
 * ⚠ NUMERU BIEŻĄCEJ EDYCJI NIE PODAJĘ.
 * ⚠ KĄTA CZEKOLADOWEGO NIE UŻYWAM — „czekolada" i „czekolada
 *   i polewy" są ZAJĘTE. Biorę WAFEL, nie czekoladę.
 * ⚠ SADÓW WIŚNIOWYCH I PLANTACJI JABŁONI NIE PODAJĘ —
 *   jedno źródło, brak potwierdzenia.
 * ⚠ UBOJNI DROBIU NIE OPISUJĘ — data powstania nieustalona,
 *   dwa podmioty o tej samej nazwie.
 *
 * ZABYTKI: PAŁAC UNRUGÓW (XVII w.), RATUSZ z 1856 r.,
 * kościół parafialny świętego Wojciecha z 1892 r.
 * IMPREZY: Dni Kargowej (czerwiec), Bieg Kargowiaka, dożynki
 * gminne, Spotkania Bożonarodzeniowe, Konkurs Literacki.
 * ⚠ NUMERÓW EDYCJI I DAT PIERWSZYCH EDYCJI NIE PODAJĘ.
 *
 * KĄT: CHRUPKOŚĆ — DLACZEGO WSZYSTKO, CO CHRUPIĄCE, MIĘKNIE.
 * Kąt od miasta, które od ponad stu lat robi wafle — czyli
 * produkt, którego cała wartość polega na jednej, najbardziej
 * nietrwałej cesze w całej kuchni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że chrupkość jest najbardziej ulotną cechą jedzenia —
 *   trwa krócej niż ciepło i krócej niż zapach,
 * — ŻE PSUJE JĄ ZAWSZE JEDNO: WODA. Albo ta z zewnątrz
 *   (wilgotne powietrze), albo ta z wewnątrz (para z samego
 *   dania),
 * — DLATEGO NIGDY NIE PRZYKRYWA SIĘ CZEGOŚ CHRUPIĄCEGO,
 *   dopóki nie ostygnie — pod pokrywką powstaje para, która
 *   nie ma dokąd uciec,
 * — ŻE TO SAMO DOTYCZY PAPIEROWEGO RĘCZNIKA POD SPODEM:
 *   lepsza jest kratka, po której powietrze chodzi dookoła,
 * — ŻE PANIERKA I SKÓRKA MIĘKNĄ OD ŚRODKA, jeśli danie
 *   leży na talerzu z sosem — dlatego sos podaje się obok
 *   albo pod spodem, nigdy na wierzchu,
 * — ŻE CIASTKA I WAFLE MIĘKNĄ OD POWIETRZA W SZAFCE,
 *   a chleb odwrotnie — czerstwieje, tracąc wodę; to dwa
 *   przeciwne procesy i dlatego nie trzyma się ich razem,
 * — ŻE COŚ, CO ZMIĘKŁO, CZĘSTO DA SIĘ URATOWAĆ KRÓTKIM
 *   PODGRZANIEM w suchym cieple — nie w mikrofalowym
 *   urządzeniu, bo tam wilgoć zostaje,
 * — ŻE SÓL WYCIĄGA WODĘ, więc solenie z góry tuż przed
 *   podaniem jest lepsze niż wcześniej,
 * — ŻE NAJLEPSZA STRATEGIA JEST ORGANIZACYJNA: rzeczy
 *   chrupiące robi się na końcu i podaje od razu,
 * — UCZCIWIE I MOCNO: ⚠ TO URZĄDZENIE NIE ROBI NICZEGO
 *   CHRUPIĄCEGO. Nie panieruje, nie smaży, nie piecze,
 *   nie rumieni. To jest jego najpoważniejsze ograniczenie
 *   i mówię o tym wprost przed zakupem,
 * — ale robi to, co chrupiące rzeczy TOWARZYSZY: sosy,
 *   pasty, kremy i masy — czyli drugą połowę takiego dania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO cukru jako tematu
 *   dietetycznego, ZERO słodyczy jako problemu. TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH NAZW FIRM I MAREK — przy tym mieście
 *   to najważniejsza zasada, bo cała jego gospodarka to jedna
 *   rozpoznawalna marka. Piszę „fabryka słodyczy".
 * — ZERO porad o bezpieczeństwie i pożarach przy smażeniu.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ⚠ Historię fabryki podaję WYŁĄCZNIE jako ciąg gospodarczy,
 *   bez wątków własnościowych sprzed 1945 r. poza suchym faktem.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Panierka" dotyczy trzech
 * misek i otoczki. „Smażyć czy piec" dotyczy wyboru obróbki.
 * „Smażenie w głębokim tłuszczu" (Sulęcin) dotyczy techniki
 * i temperatury tłuszczu. „Czerstwy chleb" dotyczy pieczywa.
 * „Odgrzewanie" dotyczy dania z poprzedniego dnia. „Osłona
 * — po co się przykrywa jedzenie" dotyczy przykrywania
 * w trakcie gotowania. Tutaj chodzi o CHRUPKOŚĆ JAKO CECHĘ:
 * dlaczego znika i co naprawdę ją niszczy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku powstania fabryki (1912 kontra 1914)
 *   ani jej adresu (sprzeczny).
 * — NIE PODAJĘ nazw firm ani marek.
 * — NIE PODAJĘ imienia Unruga, który kupił miasto.
 * — NIE CYTUJĘ przestarzałych danych ze strony gminy.
 * — NIE PISZĘ o sadach wiśniowych — jedno źródło.
 * — NIE OPISUJĘ ubojni drobiu.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ KARGOWEJ z KARGOWEM w świętokrzyskiem.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko cztery tysiące mieszkańców na 4,6 km²,
 *   cała gmina blisko sześć tysięcy na 128,5 km², z dziewięcioma
 *   wsiami; lasy zajmują tu blisko połowę powierzchni,
 * — pierwsza wzmianka pochodzi z 1360 r.; w 1637 miasto
 *   otrzymało prawo do czterech jarmarków rocznie i targu
 *   tygodniowego, w 1641 nabyli je Unrugowie, a w 1661 r.
 *   król Jan Kazimierz nadał prawa miejskie w uznaniu zasług
 *   Krzysztofa Unruga; w 1837 miasto wykupił rząd pruski,
 *   a po pożarze z 1855 r. odbudowano rynek — stąd
 *   dziewiętnastowieczna zabudowa. Kargowa była nadgranicznym
 *   ośrodkiem targowym z wielkimi jarmarkami, na które
 *   zjeżdżali handlarze bydłem,
 * — leży w Kotlinie Kargowskiej, nad Obrzycą, około czterdziestu
 *   kilometrów od Zielonej Góry; w gminie są jeziora Liny
 *   (28 ha, blisko jedenaście metrów głębokości, systematycznie
 *   zarybiane), Wojnowskie (ponad 240 ha, na granicy gmin)
 *   i Zacisze koło Chwalimia, a także ścieżka przyrodnicza
 *   Karszyn z pomnikiem przyrody „Długosz królewski” i ścieżka
 *   edukacyjna w Wojnowie; gmina należy do Regionu Kozła
 *   — stowarzyszenia sześciu gmin zawiązanego w 1995 r.,
 * — fabryka słodyczy działa w Kargowej od początku XX wieku:
 *   założył ją fabrykant przybyły z Koblencji, a zatrudniała
 *   okresowo do czterystu osób; po 1945 r. jako filia
 *   poznańskich zakładów cukierniczych wytwarzała landrynki,
 *   krówki, drażetki i wafle w masie czekoladowej, a od 1994 r.
 *   należy do międzynarodowego koncernu — wtedy pracowało w niej
 *   około stu osób, dziś ponad sześćset. Produkuje wafle
 *   i batony, z czego około trzech czwartych na eksport,
 *   głównie do Wielkiej Brytanii, Niemiec, Włoch i Francji,
 *   a w 2024 r. świętowała trzydziestolecie w obecnej grupie,
 * — od 2011 r. organizowane jest Międzynarodowe Święto
 *   Czekolady w Kargowej, ze zwiedzaniem fabryki i degustacją;
 *   do kalendarza gminy należą też Dni Kargowej, Bieg
 *   Kargowiaka, dożynki gminne i konkurs literacki,
 * — z zabytków: siedemnastowieczny pałac Unrugów, ratusz
 *   z 1856 r. i kościół świętego Wojciecha z 1892.
 */
export const KARGOWA: CityContent = {
  slug: "kargowa",
  h1: "Thermomix Kargowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kargowa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kargowej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kargowa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kargowej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kargowej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Kargowa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Chrupkość psuje zawsze woda — z zewnątrz albo z samego dania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kargowej – jak wygląda prezentacja?",
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
      id: "chrupkosc",
      heading: "Miasto, które od stu lat robi wafle — czyli o chrupkości",
      paragraphs: [
        "Fabryka słodyczy działa w Kargowej od początku XX wieku. Założył ją fabrykant przybyły z Koblencji, po wojnie produkowano tu landrynki, krówki, drażetki i wafle w masie czekoladowej, a od 1994 roku zakład należy do międzynarodowego koncernu — zatrudnienie wzrosło z około stu osób do ponad sześciuset, a trzy czwarte produkcji jedzie na eksport. Od 2011 roku odbywa się tu Międzynarodowe Święto Czekolady.",
        "Wafel jest przy tym produktem osobliwym: cała jego wartość polega na jednej cesze, i to na najbardziej nietrwałej cesze w całej kuchni. Na chrupkości.",
        "Chrupkość trwa krócej niż ciepło i krócej niż zapach. Danie może być ciepłe godzinę, pachnieć przez pół dnia, ale chrupać przestaje czasem po pięciu minutach.",
        "Psuje ją zawsze jedno i to samo: woda. Albo ta z zewnątrz — z wilgotnego powietrza w kuchni — albo ta z wewnątrz, czyli para z samego dania. Jeśli zapamiętasz tylko to jedno zdanie, reszta wynika z niego sama.",
        "Stąd pierwsza zasada: nie przykrywaj niczego chrupiącego, dopóki nie ostygnie. Pod pokrywką powstaje para, która nie ma dokąd uciec, więc skrapla się na tym, co miało zostać suche. Kwadrans pod przykryciem wystarczy, żeby zniszczyć efekt całego smażenia.",
        "To samo dotyczy papierowego ręcznika, na którym odsączamy. Pod spodem zbiera się wilgoć i danie stoi we własnej parze. Kratka, po której powietrze chodzi dookoła, działa nieporównanie lepiej i nic nie kosztuje.",
        "Druga zasada dotyczy talerza. Panierka i skórka miękną od środka, jeśli danie leży w sosie. Dlatego sos podaje się obok albo wylewa na talerz pod spód — nigdy na wierzch. To jedna z tych drobnych rzeczy, które w restauracjach robi się odruchowo, a w domu prawie nigdy.",
        "Ciekawa jest różnica między ciastkami a chlebem, bo to procesy przeciwne. Ciastka i wafle miękną, bo pobierają wodę z powietrza. Chleb czerstwieje, bo ją traci. Dlatego trzymanie ich razem w jednej szafce służy obu jak najgorzej.",
        "Rzecz pocieszająca: to, co zmiękło, często da się uratować krótkim podgrzaniem w suchym cieple — w piekarniku albo na suchej patelni. Nie w mikrofalowym urządzeniu, bo tam wilgoć zostaje w środku i efekt jest odwrotny do zamierzonego.",
        "Warto też pamiętać, że sól wyciąga wodę. Posolone wcześniej frytki czy placki puszczają wilgoć i miękną szybciej, więc solić lepiej z góry, tuż przed podaniem.",
        "Najlepsza strategia jest jednak organizacyjna, nie techniczna: rzeczy chrupiące robi się na końcu i podaje od razu. Cała reszta obiadu może poczekać — one nie mogą.",
        "Teraz uczciwie o sprzęcie i tym razem stanowczo. Thermomix nie robi niczego chrupiącego. Nie panieruje, nie smaży, nie piecze, nie rumieni. To jest jego najpoważniejsze ograniczenie i uważam, że trzeba o nim mówić przed zakupem, a nie po.",
        "Robi natomiast to, co chrupiącym rzeczom towarzyszy: sosy, pasty, kremy i masy. A ponieważ dobre danie z chrupiącym elementem to zwykle dwie części — ta chrupiąca i ta miękka obok — urządzenie bierze na siebie jedną z nich w całości. Drugą trzeba zrobić samemu, na patelni albo w piekarniku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kargowej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy zależy Wam na daniach smażonych. Wtedy od razu powiem, co urządzenie zrobi, a czego nie — zanim przyjadę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kargowej"),
    sekcjaRaty("w Kargowej"),
    {
      id: "rodzina",
      heading: "Thermomix dla kargowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców na niecałych pięciu kilometrach kwadratowych, a cała gmina blisko sześć tysięcy na stu dwudziestu ośmiu, z dziewięcioma wsiami; lasy zajmują tu blisko połowę powierzchni. Pierwsza wzmianka o Kargowej pochodzi z 1360 roku; w 1637 miasto otrzymało prawo do czterech jarmarków rocznie i targu tygodniowego, w 1641 nabyli je Unrugowie, a w 1661 król Jan Kazimierz nadał prawa miejskie w uznaniu zasług Krzysztofa Unruga. W 1837 miasto wykupił rząd pruski, a po pożarze z 1855 odbudowano rynek — stąd dziewiętnastowieczna zabudowa. Kargowa była nadgranicznym ośrodkiem targowym z wielkimi jarmarkami, na które zjeżdżali handlarze bydłem. Leży w Kotlinie Kargowskiej, nad Obrzycą, około czterdziestu kilometrów od Zielonej Góry; w gminie są jeziora Liny, Wojnowskie na granicy gmin i Zacisze koło Chwalimia, a także ścieżka przyrodnicza Karszyn z pomnikiem przyrody „Długosz królewski”. Gmina należy do Regionu Kozła — stowarzyszenia sześciu gmin zawiązanego w 1995 roku. Fabryka słodyczy działa tu od początku XX wieku: po 1945 wytwarzała landrynki, krówki, drażetki i wafle w masie czekoladowej, a od 1994 należy do międzynarodowego koncernu — zatrudnienie wzrosło ze stu osób do ponad sześciuset, produkuje wafle i batony, z czego około trzech czwartych na eksport. Od 2011 roku organizowane jest Międzynarodowe Święto Czekolady w Kargowej, ze zwiedzaniem fabryki i degustacją. Z zabytków zostały siedemnastowieczny pałac Unrugów, ratusz z 1856 roku i kościół świętego Wojciecha z 1892.",
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

  districtsHeading: "Do których części gminy Kargowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewięciu wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kargową też przyjadę",
  nearbyParagraphs: [
    "Babimost, Sulechów, Zbąszynek, Wolsztyn i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Babimost", "Sulechów", "Zbąszynek", "Wolsztyn"],

  about: blokOMnie("do Kargowej", "w Kargowej i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kargowej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewięciu wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Kargowa w powiecie zielonogórskim to nie Kargów w świętokrzyskiem.",
    },
    ...faqWspolne("w Kargowej"),
    {
      question: "Dlaczego smażone danie przestaje chrupać?",
      answer:
        "Bo dopadła je woda — z wilgotnego powietrza albo para z samego dania. Dlatego nie przykrywa się niczego chrupiącego, dopóki nie ostygnie: pod pokrywką powstaje para, która nie ma dokąd uciec. Zamiast papierowego ręcznika lepsza jest kratka, po której powietrze chodzi dookoła.",
    },
    {
      question: "Jak podawać danie z panierką, żeby nie zmiękła?",
      answer:
        "Sos obok albo na talerzu pod spodem, nigdy na wierzchu — panierka mięknie od środka, kiedy leży w sosie. Warto też solić z góry, tuż przed podaniem, bo sól wyciąga wodę. I robić rzeczy chrupiące na końcu: reszta obiadu może poczekać, one nie mogą.",
    },
    {
      question: "Czy Thermomix zrobi coś chrupiącego?",
      answer:
        "Nie — i to jest jego najpoważniejsze ograniczenie. Nie panieruje, nie smaży, nie piecze i nie rumieni. Robi natomiast to, co takim daniom towarzyszy: sosy, pasty, kremy i masy. Część chrupiącą trzeba zrobić samemu, na patelni albo w piekarniku.",
    },
  ],

  geo: { lat: 52.0658, lng: 15.8547 },
};
