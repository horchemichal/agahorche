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
 * LUBSKO — gmina miejsko-wiejska w powiecie żarskim.
 * MIASTO 12 780, GMINA 17 148 (GUS 31.12.2024).
 * POWIERZCHNIA GMINY 183,0 km², 18 SOŁECTW.
 * ⚠ POWIERZCHNI MIASTA NIE PODAJĘ — źródła sprzeczne
 *   (12,5 km² kontra 13 km²).
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — sprzeczność
 *   (28 kontra 22). Podaję TYLKO liczbę sołectw.
 *
 * PRAWA MIEJSKIE 1283 r. — przywilej margrabiego Miśni
 * Henryka Dostojnego, prawo magdeburskie. Wzmianka o nazwie
 * „Zommerfeld" z 1253 r.; najstarsza prawdopodobna nazwa
 * grodu „Żemrje".
 * ⚠ BRAK INFORMACJI o utracie i przywróceniu praw —
 *   NIE PISZĘ o tym nic.
 * ⚠⚠ OD 1411 DO 1808 r. MIASTO POZOSTAWAŁO W RĘKACH
 * WŁAŚCICIELI PRYWATNYCH — blisko czterysta lat. Rzadkość.
 *
 * GEOGRAFIA: nad RZEKĄ LUBSZĄ. Rzeźba ukształtowana przez
 * lodowiec. LASY TO 45% POWIERZCHNI GMINY, dominuje sosna.
 * ⚠ „PRADOLINY WROCŁAWSKO-GŁOGOWSKIEJ" NIE POWTARZAM —
 *   nazwa niezweryfikowana wobec regionalizacji.
 * ⚠ PRZYNALEŻNOŚCI DO DOLNYCH ŁUŻYC NIE TWIERDZĘ —
 *   niepotwierdzona drugim źródłem. Piszę tylko o tym,
 *   co podaje gmina: dolnołużycka grupa plemienna Nice.
 * ZALEW „KARAŚ" z przystanią kajakową, ZALEW NOWINIEC.
 * REZERWAT MIERKOWSKIE SUCHE BORY.
 * Rzędy PLATANÓW KLONOLISTNYCH nad Lubszą.
 *
 * ⚠⚠ OLEJ LUBUSKI — PODSTAWA KĄTA:
 * Gospodarstwo Rolne przy ul. Kieleckiej w Lubsku, rodzinna
 * manufaktura, oleje TŁOCZONE NA ZIMNO, surowiec Z WŁASNEGO
 * GOSPODARSTWA. Asortyment: LNIANY, SŁONECZNIKOWY, RZEPAKOWY,
 * Z PESTEK DYNI, Z CZARNUSZKI.
 * ⚠⚠ KĄTA OLEJOWEGO NIE UŻYWAM — „oleje: który do czego"
 *   ZAJĘTE (Szepietowo). Biorę SUROWIEC, nie olej:
 *   NASIONA I ZIARNA JAKO SKŁADNIK.
 * ⚠ NAZWISK WŁAŚCICIELI ANI NAZWY GOSPODARSTWA NIE PODAJĘ.
 * Inni producenci: gospodarstwo ekologiczne sprzedające
 * na targowiskach miejskich, dwie pasieki.
 *
 * RZEMIOSŁO ŚREDNIOWIECZNE: sukno, płótno, szewstwo,
 * garncarstwo i PIWOWARSTWO.
 * ⚠ O PIWOWARSTWIE piszę JEDNYM ZDANIEM, bez konkretów —
 *   nie ma nazw, dat ani budynków. ZERO zachęty do alkoholu.
 * RATUSZ RENESANSOWY 1580–1582, arch. ANTONIO ALBERTI,
 * oryginalne ŻELAZNE DRZWI Z 1582 r.; renowacja 2009 r.
 * WIEŻA BRAMY ŻARSKIEJ (Baszta Pachołków Miejskich), późny
 * XV w., ceglana, siedmiopiętrowa. MURY z początku XIV w.,
 * 16 baszt, Brama Żarska i Brama Gubińska.
 * KOŚCIÓŁ NAWIEDZENIA NMP — poł. XIII w. KOŚCIÓŁ
 * NAJŚWIĘTSZEGO SERCA PANA JEZUSA 1908 r.
 * REGIONALNA IZBA PAMIĘCI od 2023 r. POMNIK CERAMIKI
 * odsłonięty 29 MAJA 2023 r.
 * ⚠ O LUBSKICH ZAKŁADACH CERAMICZNYCH nie znam ani dat,
 *   ani profilu — piszę TYLKO o pomniku.
 * ⚠ DNI LUBSKA — nie znam terminu ani numeru edycji.
 *   NIE UŻYWAM.
 * ⚠⚠ ŻADNEGO ŚWIĘTA KULINARNEGO ANI JARMARKU W LUBSKU
 *   NIE UDOKUMENTOWANO. NIE WYMYŚLAM TAKIEJ IMPREZY.
 * ⚠ „Kiełbasa żarska" to MIASTO ŻARY, nie Lubsko.
 *   NIE PRZYPISUJĘ.
 *
 * KĄT: NASIONA I ZIARNA — SIEMIĘ, SŁONECZNIK, PESTKI DYNI,
 * CZARNUSZKA, SEZAM.
 * Kąt od rodzinnej tłoczni, która uprawia te rośliny sama.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nasiona leżą w wielu kuchniach w torebkach od miesięcy
 *   i używa się ich „do posypania", czyli prawie wcale,
 * — ŻE NAJWIĘKSZA RÓŻNICA TO PRAŻENIE. Surowe nasiono jest
 *   mdłe, uprażone pachnie — i to jest cała tajemnica,
 * — że praży się je krótko i bez tłuszczu, i że pilnowanie
 *   jest konieczne, bo z uprażonych na spalone przechodzą
 *   nagle,
 * — DRUGA RÓŻNICA: CAŁE KONTRA ZMIELONE. Całe siemię
 *   przechodzi przez człowieka nietknięte i jest wtedy
 *   wyłącznie dekoracją — dopiero rozdrobnione cokolwiek daje,
 * — GDZIE ICH UŻYĆ POZA POSYPANIEM: do ciasta i chleba,
 *   do farszu, do surówek, jako zagęszczenie past,
 * — ŻE SIĘ PSUJĄ — są tłuste, więc jełczeją; stara torebka
 *   pachnie kurzem i taką trzeba wyrzucić,
 * — jak przechowywać: szczelnie, w ciemności, w chłodzie,
 *   i kupować małymi porcjami zamiast wielkich opakowań,
 * — ŻE CZARNUSZKA I SEZAM MAJĄ WYRAŹNY SMAK, więc nie są
 *   dodatkiem obojętnym — to składnik, nie dekoracja,
 * — UCZCIWIE: urządzenie nie upraży nasion tak jak patelnia
 *   ani nie wytłoczy z nich oleju,
 * — ale miele je na mąkę i na pastę, a to jest jedyna forma,
 *   w której nasiona naprawdę wchodzą do dania, zamiast
 *   po nim się ześlizgiwać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO omega-3,
 *   ZERO błonnika, ZERO „superfood", ZERO trawienia.
 *   ⚠ Zdanie o całym siemieniu piszę WYŁĄCZNIE jako fakt
 *   kulinarny (nie daje smaku), NIGDY jako twierdzenie
 *   o przyswajaniu i zdrowiu. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI NAZWISK PRODUCENTÓW.
 * — ZERO zachęty do alkoholu przy wątku piwowarskim.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Oleje: który do czego"
 * (Szepietowo) dotyczą oleju jako produktu — tutaj chodzi
 * o NASIONO, nie o olej. „Orzechy" dotyczą innego surowca.
 * „Przyprawy całe kontra mielone" dotyczą przypraw
 * korzennych. „Mąka i mielenie" dotyczą zboża. „Strączki"
 * dotyczą fasoli i grochu. „Mak" dotyczy jednego nasiona
 * w cieście. Tutaj chodzi o NASIONA OLEISTE JAKO OSOBNĄ
 * KATEGORIĘ SKŁADNIKÓW.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni miasta ani liczby miejscowości.
 * — NIE TWIERDZĘ przynależności Lubska do Dolnych Łużyc.
 * — NIE POWTARZAM nazwy „Pradolina Wrocławsko-Głogowska".
 * — NIE OPISUJĘ Lubskich Zakładów Ceramicznych.
 * — NIE PODAJĘ terminu ani numeru edycji Dni Lubska.
 * — NIE WYMYŚLAM święta kulinarnego — nie ma takiego.
 * — NIE PRZYPISUJĘ Lubsku kiełbasy żarskiej.
 * — NIE MYLĘ LUBSKA z LUBINEM, LUBANIEM ani LUBSZĄ (wsią).
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko trzynaście tysięcy mieszkańców,
 *   cała gmina ponad siedemnaście tysięcy na 183 km²,
 *   z osiemnastoma sołectwami,
 * — prawa miejskie w 1283 r. na mocy przywileju margrabiego
 *   Miśni Henryka Dostojnego; nazwa „Zommerfeld” notowana
 *   od 1253 r.; od 1411 do 1808 r. miasto pozostawało
 *   w rękach właścicieli prywatnych,
 * — miasto leży nad Lubszą, w terenie ukształtowanym przez
 *   lodowiec; lasy zajmują czterdzieści pięć procent
 *   powierzchni gminy, z przewagą sosny; są tu zalewy Karaś
 *   i Nowiniec, rezerwat Mierkowskie Suche Bory, a nad rzeką
 *   rzędy platanów klonolistnych,
 * — w Lubsku działa rodzinna manufaktura tłocząca oleje
 *   na zimno z surowca z własnego gospodarstwa: lnianego,
 *   słonecznikowego, rzepakowego, z pestek dyni i z czarnuszki;
 *   jest też gospodarstwo ekologiczne sprzedające
 *   na targowiskach miejskich oraz pasieki,
 * — gospodarka średniowiecznego miasta opierała się
 *   na suknie, płótnie, szewstwie, garncarstwie i piwowarstwie,
 * — renesansowy ratusz z lat 1580–1582 zbudował włoski
 *   architekt Antonio Alberti; zachowały się w nim oryginalne
 *   żelazne drzwi z 1582 r., a elewację odnowiono w 2009,
 * — Wieża Bramy Żarskiej, zwana Basztą Pachołków Miejskich,
 *   pochodzi z późnego XV w. i jest ceglana, siedmiopiętrowa;
 *   mury miejskie z początku XIV w. wzmacniało szesnaście
 *   baszt, a główne przejścia prowadziły przez Bramę Żarską
 *   i Gubińską,
 * — kościół Nawiedzenia NMP pochodzi z połowy XIII w.,
 *   a kościół Najświętszego Serca Pana Jezusa z 1908 r.,
 * — Regionalna Izba Pamięci działa od 2023 r., a 29 maja
 *   2023 r. odsłonięto Pomnik Ceramiki.
 */
export const LUBSKO: CityContent = {
  slug: "lubsko",
  h1: "Thermomix Lubsko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubsko — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lubsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubsko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Lubsko i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Surowe nasiono jest mdłe, uprażone pachnie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubsku – jak wygląda prezentacja?",
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
      id: "nasiona",
      heading: "Manufaktura, która sama uprawia to, co tłoczy — czyli o nasionach i ziarnach",
      paragraphs: [
        "W Lubsku działa rodzinna manufaktura tłocząca oleje na zimno, a surowiec bierze z własnego gospodarstwa: len, słonecznik, rzepak, pestki dyni, czarnuszkę. Napiszę jednak nie o oleju, tylko o tym, co jest przed nim — o samych nasionach, bo one w większości kuchni leżą w torebkach od miesięcy i używa się ich „do posypania”, czyli praktycznie wcale.",
        "Największa różnica, jaką można z nimi zrobić, jest jedna i zajmuje kilka minut: prażenie. Surowe nasiono jest mdłe i właściwie bez zapachu. Uprażone pachnie tak, że słychać je w całym mieszkaniu — i to jest cała tajemnica, żadnej innej nie ma.",
        "Praży się je krótko i bez tłuszczu, na suchej patelni, i trzeba przy tym stać. Nasiona przechodzą z uprażonych na spalone nagle, w kilkanaście sekund, i nie ma między tymi stanami żadnego ostrzeżenia. To jedna z niewielu czynności w kuchni, przy których naprawdę nie warto odchodzić.",
        "Druga różnica to całe kontra zmielone. Całe siemię lniane przechodzi przez danie i przez człowieka praktycznie nietknięte — leży na wierzchu jako ozdoba i tyle. Dopiero rozdrobnione zaczyna cokolwiek dawać: wiąże, zagęszcza i wnosi smak. To samo dotyczy w mniejszym stopniu pozostałych nasion.",
        "Gdzie ich używać poza posypywaniem? Do ciasta i do chleba, gdzie zmienią i smak, i strukturę. Do farszu, gdzie dodają gęstości. Do surówek, ale uprażone, bo surowe niczego tam nie wnoszą. I jako zagęszczenie past do chleba, gdzie zmielone nasiona zastępują sporo tłuszczu, nie zmieniając charakteru pasty.",
        "Rzecz, o której się nie pamięta: nasiona się psują. Są tłuste, więc jełczeją, i to szybciej, niż wygląda na to sucha torebka w szafce. Stare nasiona pachną kurzem i lekko drapią w gardło — takie trzeba po prostu wyrzucić, bo zepsują wszystko, do czego się je doda.",
        "Stąd dwie praktyczne zasady. Przechowywać szczelnie, w ciemności i w chłodzie, a nie w otwartej torebce na widoku. I kupować małymi porcjami zamiast wielkich, opłacalnych opakowań, które i tak nie zostaną zużyte przed zjełczeniem.",
        "Warto też wiedzieć, że nie wszystkie nasiona są neutralne. Czarnuszka i sezam mają wyraźny, własny smak i potrafią zdominować delikatne danie. To nie jest dekoracja, którą można dosypać wszędzie bez konsekwencji — to pełnoprawny składnik i tak trzeba je traktować.",
        "Teraz uczciwie o sprzęcie. Thermomix nie upraży nasion tak jak sucha patelnia — do prażenia nadal potrzebna jest patelnia i Twoja uwaga. Oleju z nich też nie wytłoczy; to zupełnie inna maszyna i inny proces.",
        "Robi natomiast to, co przy nasionach ma największe znaczenie: miele je na mąkę i na gładką pastę. A to jest jedyna forma, w której nasiona naprawdę wchodzą w danie, zamiast leżeć na jego powierzchni. Zmielone siemię w chlebie, zmielony słonecznik w paście, zmielona dynia w cieście — dopiero wtedy widać, po co się je w ogóle kupuje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu ktoś piecze chleb albo robi pasty do pieczywa. Wtedy pokażę mielenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko trzynaście tysięcy mieszkańców, a cała gmina ponad siedemnaście tysięcy na stu osiemdziesięciu trzech kilometrach kwadratowych, z osiemnastoma sołectwami. Prawa miejskie Lubsko otrzymało w 1283 roku na mocy przywileju margrabiego Miśni Henryka Dostojnego, a nazwę „Zommerfeld” notowano już trzydzieści lat wcześniej; od 1411 do 1808 roku, czyli blisko czterysta lat, miasto pozostawało w rękach właścicieli prywatnych. Leży nad Lubszą, w terenie ukształtowanym przez lodowiec; lasy zajmują czterdzieści pięć procent powierzchni gminy, z przewagą sosny, są tu zalewy Karaś i Nowiniec, rezerwat Mierkowskie Suche Bory, a nad rzeką rzędy platanów klonolistnych. Gospodarka średniowiecznego miasta opierała się na suknie, płótnie, szewstwie, garncarstwie i piwowarstwie. Renesansowy ratusz z lat 1580–1582 zbudował włoski architekt Antonio Alberti — zachowały się w nim oryginalne żelazne drzwi z 1582 roku, a elewację odnowiono w 2009. Wieża Bramy Żarskiej, zwana Basztą Pachołków Miejskich, pochodzi z późnego XV wieku i jest ceglana, siedmiopiętrowa; mury miejskie z początku XIV wieku wzmacniało szesnaście baszt. Kościół Nawiedzenia NMP sięga połowy XIII wieku, kościół Najświętszego Serca Pana Jezusa powstał w 1908, a od 2023 roku działa Regionalna Izba Pamięci — 29 maja tego samego roku odsłonięto Pomnik Ceramiki.",
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

  districtsHeading: "Do których części gminy Lubsko dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubsko też przyjadę",
  nearbyParagraphs: [
    "Żary, Jasień, Gubin, Brody i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żary", "Jasień", "Gubin", "Brody"],

  about: blokOMnie("do Lubska", "w Lubsku i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Lubsko w powiecie żarskim to nie Lubin ani Lubań na Dolnym Śląsku.",
    },
    ...faqWspolne("w Lubsku"),
    {
      question: "Po co prażyć nasiona i ziarna?",
      answer:
        "Bo surowe są mdłe i prawie bez zapachu, a uprażone pachną tak, że słychać je w całym mieszkaniu. Praży się krótko, bez tłuszczu, na suchej patelni — i trzeba przy tym stać, bo z uprażonych na spalone przechodzą nagle, w kilkanaście sekund.",
    },
    {
      question: "Dlaczego warto mielić siemię lniane?",
      answer:
        "Bo całe leży na wierzchu jako ozdoba i niczego daniu nie daje. Dopiero rozdrobnione wiąże, zagęszcza i wnosi smak — sprawdza się w chlebie, w cieście, w farszu i jako zagęszczenie past do pieczywa.",
    },
    {
      question: "Jak przechowywać nasiona, żeby się nie zepsuły?",
      answer:
        "Szczelnie, w ciemności i w chłodzie — nie w otwartej torebce na widoku. Nasiona są tłuste, więc jełczeją; stare pachną kurzem i lekko drapią w gardło, i takie trzeba wyrzucić. Lepiej kupować małe porcje niż duże opakowania, które i tak nie zdążą się zużyć.",
    },
  ],

  geo: { lat: 51.7889, lng: 14.9694 },
};
