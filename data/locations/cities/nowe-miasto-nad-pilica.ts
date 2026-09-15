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
 * NOWE MIASTO NAD PILICĄ — powiat grójecki, woj. mazowieckie.
 * MIASTO 3 475 (GUS 31.12.2024), 11,3 km², 308,9 os./km².
 * Gmina miejsko-wiejska: 7 100 osób, 158,5 km².
 *
 * ⚠⚠ HOMONIMY — GĘSTO I GROŹNIE:
 * — NOWE MIASTO (bez „nad Pilicą") — wieś gminna w powiecie
 *   PŁOŃSKIM, to samo województwo,
 * — NOWE MIASTO LUBAWSKIE — warmińsko-mazurskie, stolica
 *   powiatu nowomiejskiego,
 * — NOWE MIASTO NAD WARTĄ — wielkopolskie, i to WIEŚ,
 * — „Nowe Miasto" to też dzielnice Warszawy, Poznania,
 *   Krakowa, Szczecina, Białegostoku i Wałbrzycha.
 *   ⚠ FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 * ⚠⚠ ODMIANA: „do Nowego Miasta nad Pilicą",
 *   „w Nowym Mieście nad Pilicą" — człon „nad Pilicą"
 *   JEST NIEODMIENNY.
 *   ⚠ PRZYMIOTNIKA „nowomiejski" NIE UŻYWAM — jest zajęty
 *   przez powiat nowomiejski przy Nowym Mieście Lubawskim.
 *   PISZĘ OPISOWO. TWARDA GRANICA.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM JEJ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 27 GRUDNIA 1400 — akt lokacyjny Siemowita IV, prawo
 *   chełmińskie; miasto prywatne rycerza Prandoty,
 * — CZWARTKOWE JARMARKI i targi na św. Marcina, przyciągające
 *   kupców z całego kraju; handel końmi, bydłem i skórami,
 * — cechy międzywojenne: krawcy, rzeźnicy, szewcy,
 *   cholewkarze, kowale, ślusarze,
 *   ⚠ ŹRÓDŁO PODAJE, ŻE CECHY BYŁY ODRĘBNE DLA DWÓCH
 *   WYZNAŃ — TEGO NIE PISZĘ ANI SŁOWA. TWARDA GRANICA.
 * — uprawy warzywne i sady na 229 hektarach,
 * — ⚠⚠ PODSTAWA KĄTA: w 1874 r. dr JAN BIELIŃSKI założył tu
 *   ZAKŁAD WODOLECZNICZY — drugie w Polsce uzdrowisko oparte
 *   na podstawach naukowych; w 1877 r. przyjmowało ponad
 *   400 kuracjuszy rocznie; działało do I wojny światowej,
 *   ⚠ ŹRÓDŁO WYMIENIA, JAKIE DOLEGLIWOŚCI LECZONO —
 *   NIE PISZĘ O TYM. ZERO TREŚCI MEDYCZNYCH.
 *   TWARDA GRANICA.
 * — zabytkowy młyn zbożowy przy ul. Warszawskiej 73,
 * — pałac Granowskich (Małachowskich) z parkiem,
 * — most na Pilicy z 1934 r.,
 * — ⚠ KOLEJ WĄSKOTOROWA — ROZBIEŻNOŚĆ: strona gminy podaje
 *   1924, serwis kolejowy 1926. ⚠ PISZĘ „w latach
 *   dwudziestych XX wieku". NIE PODAJĘ ROKU.
 * — Nowe Miasto jest punktem startowym 79-kilometrowego
 *   szlaku kajakowego Pilicy do Mniszewa nad Wisłą.
 *
 * DZIŚ: powiat grójecki to największe zagłębie sadownicze
 * Europy — około 40% krajowej produkcji jabłek.
 * ⚠⚠ KĄT „JABŁKO" (annopol.ts) I „ODMIANY" SĄ ZAJĘTE.
 *   PODAJĘ JAKO FAKT O POWIECIE. TWARDA GRANICA.
 * ⚠ Do Warszawy około 90 km — TO NIE JEST SYPIALNIA
 *   WARSZAWY. Nie piszę o dojazdach do stolicy.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: „jabłka grójeckie"
 *   (wpis 28.04.2008, od 2011 także oznaczenie unijne)
 *   dotyczą POWIATU, ale NIE POTWIERDZONO, czy gmina Nowe
 *   Miasto nad Pilicą mieści się w obszarze oznaczenia.
 *   ⚠ NIE PRZYPISUJĘ ICH TEMU MIASTU. TWARDA GRANICA.
 * ⚠ SOŁECTW NIE USTALONO (rozbieżność 28 vs 33), osiedli
 *   też nie — districts PUSTE.
 *
 * KĄT: DRUGI RAZ — podgrzewanie dania nazajutrz.
 * Kąt od zakładu wodoleczniczego doktora Bielińskiego,
 * którego cała metoda polegała na tym, że ta sama woda
 * w innej temperaturze i przez inny czas robi co innego.
 * W kuchni dokładnie tak jest z drugim podgrzaniem: to samo
 * danie, druga porcja ciepła — i albo je ratuje, albo psuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1874 r. powstał tu zakład wodoleczniczy, drugie
 *   w Polsce uzdrowisko oparte na podstawach naukowych,
 *   a cała jego metoda opierała się na dwóch rzeczach:
 *   TEMPERATURZE I CZASIE,
 * — ŻE W KUCHNI DRUGIE PODGRZANIE TO OSOBNA CZYNNOŚĆ,
 *   a nie „to samo, tylko później" — i że decyduje o niej
 *   dokładnie to samo: jak mocno i jak długo,
 * — ⚠⚠ ŻE JEDNE DANIA NA DRUGI DZIEŃ SĄ LEPSZE, A INNE
 *   BEZPOWROTNIE GORSZE, I ŻE DA SIĘ POWIEDZIEĆ, KTÓRE SĄ
 *   KTÓRE. TO JEST RDZEŃ CAŁEGO TEKSTU:
 *   — LEPSZE: dania duszone, gulasze, sosy, dania z długo
 *     gotowanych warzyw, wszystko, co ma dużo składników
 *     i płyn — bo smaki mają czas się wymieszać,
 *   — GORSZE: wszystko chrupiące i panierowane, ryba,
 *     makaron w sosie, ziemniaki, dania z jajkiem,
 *     sałatki — bo tracą to, co w nich najlepsze,
 * — ŻE PODGRZEWA SIĘ WOLNIEJ, NIŻ SIĘ GOTOWAŁO —
 *   mocny ogień pod czymś, co już jest ugotowane, robi
 *   z tego papkę na zewnątrz i zimno w środku,
 * — ⚠⚠ ŻE NAJCZĘSTSZY BŁĄD TO PODGRZEWANIE CAŁOŚCI
 *   ZAMIAST PORCJI: każde kolejne ogrzanie i ostudzenie
 *   pogarsza danie, a przy jednej porcji naraz reszta
 *   przechodzi przez ten cykl tylko raz,
 * — ŻE DANIU, KTÓRE STAŁO, PRAWIE ZAWSZE TRZEBA COŚ DODAĆ
 *   NA KOŃCU — odrobinę płynu, świeżej zieleniny, kwasu —
 *   bo przez noc smak się spłaszcza,
 * — ŻE ZUPA Z MAKARONEM TO OSOBNA HISTORIA
 *   ⚠ ODSYŁAM DO STRONY O PĘCZNIENIU, NIE ROZWIJAM,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie podgrzeje danie
 *   równo i bez przypalania, bo pilnuje temperatury
 *   i miesza — i to akurat robi lepiej niż garnek
 *   na palniku. ALE nie przywróci chrupkości, nie odratuje
 *   panierki i nie cofnie tego, co makaron zrobił z zupą.
 *   To są dwie różne rzeczy i mówię o tym wprost.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI:
 *   ile dni danie może stać, ile razy wolno je odgrzewać,
 *   w jakiej temperaturze przechowywać, czego nie wolno
 *   podgrzewać ponownie. TO JEST DZIEDZINA SANEPIDU
 *   I LEKARZY, NIE MOJA. Piszę WYŁĄCZNIE o SMAKU
 *   I KONSYSTENCJI. TO JEST NAJWAŻNIEJSZA GRANICA
 *   NA TEJ STRONIE I OBOWIĄZUJE BEZWZGLĘDNIE.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ⚠⚠ ŻADNYCH TREŚCI MEDYCZNYCH I ZDROWOTNYCH —
 *   w szczególności ZERO o tym, co leczono w zakładzie
 *   wodoleczniczym i czy woda cokolwiek leczy.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ KRYTYKI GOTOWYCH DAŃ — zasada z Mrągowa.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO LOTNISKA WOJSKOWEGO I JEDNOSTKI WOJSKOWEJ,
 *   także przy opisie gospodarki gminy. TWARDA GRANICA.
 * — ⚠⚠ ZERO wątku zgromadzeń zakonnych i sanktuarium —
 *   to dominująca narracja tożsamościowa miasta i nie
 *   nadaje się na stronę o gotowaniu. TWARDA GRANICA.
 * — ZERO odrębnych cechów dla dwóch wyznań.
 * — ZERO zniszczeń wojennych i spadku ludności po I wojnie.
 * — ZERO emigracji zarobkowej i braku przemysłu.
 * — ZERO powstania styczniowego.
 * — ZERO depopulacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CIEPŁE NA STÓŁ" (Węgrów) dotyczy STYGNIĘCIA MIĘDZY
 *   KUCHNIĄ A STOŁEM, czyli minut, nie doby.
 * — „CIEPŁO, KTÓRE ZOSTAJE" (Błaszki) dotyczy DOCHODZENIA
 *   DANIA PO WYŁĄCZENIU — czyli tego samego gotowania.
 * — „RESZTKI Z OBIADU" (Marki) dotyczą TEGO, CO ZROBIĆ
 *   Z NADMIARU — czyli pomysłu na danie.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy MROŻENIA
 *   I ODKŁADANIA PORCJI.
 * — „BLANSZOWANIE" (Olecko) dotyczy KRÓTKIEGO ZANURZENIA
 *   WE WRZĄTKU.
 * — „PRZECHOWYWANIE" (Skierniewice) dotyczy TEGO, ŻE
 *   URZĄDZENIE NICZEGO NIE KONSERWUJE.
 * TUTAJ chodzi o DRUGIE PODGRZANIE TEGO SAMEGO DANIA
 * i o to, komu ono służy, a komu szkodzi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MYLĘ Nowego Miasta nad Pilicą z Nowym Miastem
 *   w powiecie płońskim, Lubawskim ani nad Wartą.
 * — NIE UŻYWAM przymiotnika „nowomiejski".
 * — NIE PRZYPISUJĘ temu miastu jabłek grójeckich.
 * — NIE PODAJĘ roku dotarcia kolei wąskotorowej.
 * — NIE PISZĘ, co leczono w zakładzie wodoleczniczym.
 * — NIE DORADZAM nic w sprawie bezpieczeństwa żywności.
 * — NIE PODAJĘ nazw sołectw ani osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowe Miasto nad Pilicą liczy 3 475 mieszkańców (GUS,
 *   31.12.2024) na 11,3 km², a cała gmina miejsko-wiejska
 *   7 100 osób na 158,5 km²,
 * — akt lokacyjny wydał 27 grudnia 1400 roku Siemowit IV,
 *   na prawie chełmińskim; było to miasto prywatne rycerza
 *   Prandoty,
 * — odbywały się tu czwartkowe jarmarki oraz targi
 *   na świętego Marcina, przyciągające kupców z całego
 *   kraju; handlowano końmi, bydłem i skórami,
 * — w okresie międzywojennym działały cechy krawców,
 *   rzeźników, szewców, cholewkarzy, kowali i ślusarzy,
 *   a uprawy warzywne i sady zajmowały dwieście dwadzieścia
 *   dziewięć hektarów,
 * — w 1874 roku doktor Jan Bieliński założył tu zakład
 *   wodoleczniczy — drugie w Polsce uzdrowisko oparte
 *   na podstawach naukowych; w 1877 roku przyjmowało ponad
 *   czterystu kuracjuszy rocznie i działało do pierwszej
 *   wojny światowej,
 * — w mieście zachowały się zabytkowy młyn zbożowy przy
 *   ulicy Warszawskiej, pałac Granowskich z parkiem oraz
 *   most na Pilicy z 1934 roku; w latach dwudziestych
 *   XX wieku dotarła tu kolej wąskotorowa,
 * — Nowe Miasto jest punktem startowym siedemdziesięcio-
 *   dziewięciokilometrowego szlaku kajakowego Pilicy
 *   do Mniszewa nad Wisłą,
 * — powiat grójecki, w którym leży miasto, jest największym
 *   zagłębiem sadowniczym Europy i daje około czterdziestu
 *   procent krajowej produkcji jabłek.
 */
export const NOWE_MIASTO_NAD_PILICA: CityContent = {
  slug: "nowe-miasto-nad-pilica",
  h1: "Thermomix Nowe Miasto nad Pilicą – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowe Miasto nad Pilicą — przedstawiciel",
  seoDescription:
    "Thermomix w Nowym Mieście nad Pilicą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowe Miasto nad Pilicą — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Mieście nad Pilicą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Miasta nad Pilicą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Nowe Miasto nad Pilicą"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Podgrzewa się wolniej, niż się gotowało — i tylko tę porcję, którą się zje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Mieście nad Pilicą – jak wygląda prezentacja?",
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
      id: "drugi-raz",
      heading: "Drugi raz — o podgrzewaniu dania nazajutrz",
      paragraphs: [
        "W 1874 roku doktor Jan Bieliński założył w Nowym Mieście nad Pilicą zakład wodoleczniczy — drugie w Polsce uzdrowisko oparte na podstawach naukowych. W 1877 roku przyjmowało ponad czterystu kuracjuszy rocznie i działało aż do pierwszej wojny światowej.",
        "Nie będę się wypowiadać o medycynie, bo się na niej nie znam. Zwracam uwagę na coś innego: cała metoda opierała się na dwóch rzeczach — na temperaturze i na czasie. Ta sama woda, podana inaczej, miała robić co innego.",
        "W kuchni jest jedna czynność, przy której działa dokładnie ta sama zasada, a której prawie nikt nie traktuje jak osobnej czynności. Podgrzewanie dania na drugi dzień.",
        "Traktujemy je jak „to samo, tylko później”. A to jest drugie podanie ciepła — i o wyniku decyduje, jak mocno i jak długo.",
        "Zacznijmy od rzeczy najbardziej praktycznej, czyli od tego, że jedne dania nazajutrz są lepsze, a inne bezpowrotnie gorsze. I da się powiedzieć, które są które.",
        "Lepsze są dania duszone, gulasze, sosy, potrawy z długo gotowanych warzyw i w ogóle wszystko, co ma dużo składników i płyn. One przez noc po prostu robią dalej to, co robiły w garnku: smaki przechodzą jedne w drugie, a to wymaga czasu, którego przy obiedzie nikt im nie daje.",
        "Gorsze — i to nieodwracalnie — jest wszystko chrupiące i panierowane, ryba, makaron w sosie, ziemniaki i dania z jajkiem. Tu nie ma czego poprawiać: chrupkość i świeżość to nie są smaki, tylko stany, a one po prostu mijają.",
        "Druga zasada: podgrzewa się wolniej, niż się gotowało. Mocny ogień pod czymś, co już jest ugotowane, robi papkę na zewnątrz i zostawia zimno w środku. To nie jest sprint do temperatury, tylko dochodzenie do niej.",
        "Trzecia i moim zdaniem najważniejsza: podgrzewa się porcję, nie całość. Każde ogrzanie i ostudzenie pogarsza danie o kawałek. Jeśli garnek wraca na ogień trzy dni z rzędu w całości, to za trzecim razem jest to już coś zupełnie innego niż w niedzielę. Jeśli za każdym razem wyjmuje się tylko tę porcję, którą ktoś zaraz zje, reszta przechodzi przez ten cykl raz.",
        "I czwarta: daniu, które stało, prawie zawsze trzeba coś dodać na końcu. Odrobinę płynu, żeby nie było zbite. Trochę świeżej zieleniny albo kropelkę czegoś kwaśnego, bo przez noc smak się spłaszcza i robi się jednolity — wszystko smakuje tak samo mocno i przez to niczym konkretnym.",
        "Zupa z makaronem albo z kaszą to osobna historia, o której pisałam przy innym mieście — tam problem nie polega na podgrzewaniu, tylko na tym, co składnik zrobił z płynem przez noc.",
        "Teraz uczciwie o sprzęcie, bo tu podział jest wyjątkowo czysty. Thermomix podgrzeje danie równo i bez przypalania, bo pilnuje temperatury i miesza — i akurat to robi lepiej niż garnek na palniku, przy którym zawsze coś przywiera do dna, zanim góra się ogrzeje.",
        "Ale nie przywróci chrupkości, nie odratuje panierki i nie cofnie tego, co makaron zrobił z zupą. Te rzeczy są nie do odzyskania żadnym sprzętem. Urządzenie dobrze podaje ciepło — i to wszystko, czego się po nim w tej sprawie należy spodziewać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Mieście nad Pilicą?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was domownicy jedzą o różnych porach i sporo dań musi poczekać — powiedzcie to przy umawianiu. Dobiorę takie, które to znoszą.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Mieście nad Pilicą"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowego Miasta nad Pilicą",
      paragraphs: [
        "Nowe Miasto nad Pilicą liczy blisko trzy i pół tysiąca mieszkańców na jedenastu kilometrach kwadratowych, a cała gmina miejsko-wiejska siedem tysięcy osób na stu pięćdziesięciu ośmiu kilometrach. Akt lokacyjny wydał 27 grudnia 1400 roku Siemowit IV, na prawie chełmińskim; było to miasto prywatne rycerza Prandoty. Odbywały się tu czwartkowe jarmarki oraz targi na świętego Marcina, przyciągające kupców z całego kraju — handlowano końmi, bydłem i skórami. W okresie międzywojennym działały cechy krawców, rzeźników, szewców, cholewkarzy, kowali i ślusarzy, a uprawy warzywne i sady zajmowały dwieście dwadzieścia dziewięć hektarów. W 1874 roku doktor Jan Bieliński założył tu zakład wodoleczniczy, drugie w Polsce uzdrowisko oparte na podstawach naukowych; w 1877 roku przyjmowało ponad czterystu kuracjuszy rocznie i działało do pierwszej wojny światowej. Zachowały się zabytkowy młyn zbożowy przy ulicy Warszawskiej, pałac Granowskich z parkiem i most na Pilicy z 1934 roku, a w latach dwudziestych XX wieku dotarła tu kolej wąskotorowa. Miasto jest punktem startowym siedemdziesięciodziewięciokilometrowego szlaku kajakowego Pilicy do Mniszewa nad Wisłą, a powiat grójecki, w którym leży, jest największym zagłębiem sadowniczym Europy i daje około czterdziestu procent krajowej produkcji jabłek.",
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

  districtsHeading: "Do których części Nowego Miasta nad Pilicą dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i okolic pałacu z parkiem po domy nad Pilicą i przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowe Miasto nad Pilicą też przyjadę",
  nearbyParagraphs: [
    "Mogielnica, Białobrzegi, Warka, Grójec, Rawa Mazowiecka, Tomaszów Mazowiecki i Nowe Miasto w okolicy Drzewicy są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mogielnica", "Białobrzegi", "Grójec", "Rawa Mazowiecka"],

  about: blokOMnie("do Nowego Miasta nad Pilicą", "w Nowym Mieście nad Pilicą", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Miasta nad Pilicą bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Nowe Miasto nad Pilicą w powiecie grójeckim — nie o Nowe Miasto w powiecie płońskim, nie o Nowe Miasto Lubawskie i nie o Nowe Miasto nad Wartą.",
    },
    ...faqWspolne("w Nowym Mieście nad Pilicą"),
    {
      question: "Które dania są na drugi dzień lepsze, a które gorsze?",
      answer:
        "Lepsze są dania duszone, gulasze, sosy i potrawy z długo gotowanych warzyw — wszystko, co ma dużo składników i płyn, bo smaki mają czas przejść jedne w drugie. Bezpowrotnie gorsze jest wszystko chrupiące i panierowane, ryba, makaron w sosie, ziemniaki i dania z jajkiem. Chrupkość to nie smak, tylko stan, a on po prostu mija.",
    },
    {
      question: "Jak podgrzewać, żeby danie nie ucierpiało?",
      answer:
        "Wolniej, niż się je gotowało — mocny ogień pod czymś już ugotowanym robi papkę na zewnątrz i zostawia zimno w środku. I najlepiej podgrzewać tylko tę porcję, którą ktoś zaraz zje, bo każde ogrzanie całego garnka pogarsza go o kawałek. Daniu, które stało, warto na koniec dodać odrobinę płynu i czegoś świeżego, bo przez noc smak się spłaszcza.",
    },
    {
      question: "Czy Thermomix dobrze odgrzewa?",
      answer:
        "Podgrzewa równo i bez przypalania, bo pilnuje temperatury i miesza — w tym akurat wypada lepiej niż garnek na palniku, przy którym zwykle coś przywiera do dna, zanim góra się ogrzeje. Nie przywróci natomiast chrupkości ani panierki i nie cofnie tego, co makaron zrobił z zupą. Tych rzeczy nie odzyska żaden sprzęt.",
    },
  ],

  geo: { lat: 51.6176, lng: 20.5766 },
};
