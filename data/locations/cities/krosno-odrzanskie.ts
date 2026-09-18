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
 * KROSNO ODRZAŃSKIE — gmina miejsko-wiejska, siedziba powiatu
 * krośnieńskiego (LUBUSKIEGO).
 * MIASTO 10 435, GMINA 16 822 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 8,2 km², GMINY 211,5 km².
 * LESISTOŚĆ 48,7%.
 * ⚠⚠ LICZBY SOŁECTW NIE PODAJĘ — jedyne źródło (19) podaje
 *   jednocześnie mocno nieaktualne dane ludnościowe.
 *
 * ⚠⚠ HOMONIM PODWÓJNY: KROSNO ODRZAŃSKIE (lubuskie)
 * ≠ KROSNO (podkarpackie, miasto na prawach powiatu, ~46 tys.).
 * ISTNIEJĄ TEŻ DWA POWIATY KROŚNIEŃSKIE — lubuski
 * i podkarpacki. FAQ to rozróżnia.
 *
 * ⚠ PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE: „przed 1238" kontra
 * „między 1217 a 1232, od Henryka I Brodatego". Obie wersje
 * mieszczą się w pierwszej połowie XIII w.
 * ⚠ NIE ROZSTRZYGAM — piszę „w pierwszej połowie XIII wieku,
 *   za Henryka Brodatego".
 * NAJSTARSZA WZMIANKA: 1005 r.; gród datowany archeologicznie
 * na VII w.
 * ETYMOLOGIA: prawdopodobnie od słowa „chrost" — wiklina,
 * pręcie.
 *
 * GEOGRAFIA: U UJŚCIA BOBRU DO ODRY. JEZIORO RADUSZECKIE
 * (160,7 ha), JEZIORO DĄBIE. ELEKTROWNIA WODNA W STARYM
 * RADUSZCU z 1935 r.
 * ⚠ KĄTA „SKRZYŻOWANIE RZEK" NIE UŻYWAM — ZAJĘTY przez inne
 *   miasto. Ujście podaję jako fakt.
 *
 * ⚠⚠ RYBOBRANIE — święto miasta, dawne „Dni Krosna",
 * organizowane przez Centrum Artystyczno-Kulturalne „Zamek".
 * RYTUAŁ OTWARCIA: korowód, podczas którego BURMISTRZ
 * SYMBOLICZNIE PRZEKAZUJE WŁADZĘ NAD MIASTEM WODNIKOWI.
 * W 2025 r. zmieniono formułę: zamiast dwóch dni — dziesięć
 * weekendów od 27 czerwca do 31 sierpnia w Parku Tysiąclecia.
 * ⚠⚠ NUMERU EDYCJI ANI ROKU PIERWSZEJ NIE PODAJĘ — nieznane.
 * ⚠⚠ NIE PISZĘ, że na Rybobraniu są konkursy potraw rybnych
 *   ani stoiska z rybą — TEGO NIE POTWIERDZONO. Wodnik i nazwa
 *   to nie dowód.
 * ⚠ KĄTA RYBNEGO NIE UŻYWAM — „ryba" i „ryby" ZAJĘTE.
 *
 * WINNICE W GMINIE: Gostchorze (wina musujące metodą
 * tradycyjną), Aris (Osiecznica), Nadodrzańskie Wzgórze.
 * ⚠⚠ WINNIC NIE OPISUJĘ SZCZEGÓŁOWO — źródła sprzeczne
 *   (rok założenia, powierzchnia), a ZERO ZACHĘTY DO ALKOHOLU
 *   to twarda zasada. Wspominam JEDNYM ZDANIEM jako fakt
 *   gospodarczy. ⚠ KĄT „winiarski" JEST ZAJĘTY.
 * ⚠ FERMY STRUSI W KAMIENIU NIE WYMIENIAM — niepotwierdzona.
 *
 * ZAMEK PIASTOWSKI — siedziba Centrum Artystyczno-Kulturalnego.
 * ⚠ DAT BUDOWY ZAMKU NIE PODAJĘ — nie zweryfikowano.
 *
 * KĄT: OSTROŚĆ — PIEPRZ, PAPRYKA, CHILI.
 * Kąt od miasta, które raz w roku z rozmysłem oddaje władzę
 * komuś, kogo się trochę boi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ostrość jest jedyną rzeczą w kuchni, której NIE DA SIĘ
 *   COFNĄĆ — soli można dodać wody, ostrości nie odejmiesz,
 * — ŻE OSTROŚĆ TO NIE SMAK, tylko wrażenie — i dlatego
 *   zachowuje się inaczej niż sól czy kwas,
 * — ŻE ROZKŁADA SIĘ W CZASIE: danie po godzinie jest ostrzejsze
 *   niż zaraz po zrobieniu, a następnego dnia jeszcze bardziej,
 * — WNIOSEK: dodawać mniej, niż się chce, i dosypywać na końcu
 *   albo na talerzu,
 * — ŻE W DOMU, W KTÓRYM JEDZĄ RÓŻNI LUDZIE, OSTROŚĆ POWINNA
 *   BYĆ DODAWANA OSOBNO — to jedyny sposób, żeby jedno danie
 *   pasowało wszystkim,
 * — RÓŻNICE MIĘDZY ŹRÓDŁAMI OSTROŚCI: pieprz jest ostry
 *   i aromatyczny naraz, papryka ostra bywa też słodka,
 *   chili bywa wyłącznie ostre,
 * — ŻE PIEPRZ TRACI AROMAT PO ZMIELENIU — i to jest cała
 *   różnica między pieprzem z młynka a z torebki,
 * — ŻE OSTROŚĆ ROZPUSZCZA SIĘ W TŁUSZCZU, NIE W WODZIE —
 *   stąd praktyczny wniosek: po zbyt ostrym kęsie pomaga
 *   coś tłustego, a nie szklanka wody,
 * — CO ZROBIĆ Z DANIEM ZA OSTRYM: dołożyć objętości, dodać
 *   tłuszczu lub czegoś słodkiego; nie da się tego cofnąć,
 *   tylko rozcieńczyć,
 * — UCZCIWIE: urządzenie nie ma pojęcia, czy danie jest ostre,
 *   i nie ostrzeże,
 * — ale robi jedną rzecz, która przy ostrości jest cenna:
 *   miele pieprz i suszone papryczki na miejscu, tuż przed
 *   dodaniem — a świeżo zmielony pieprz to inny składnik
 *   niż ten z gotowej torebki.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I ŻADNYCH SKAL OSTROŚCI W LICZBACH.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO metabolizmu,
 *   ZERO żołądka, ZERO „ostre szkodzi/pomaga", ZERO kapsaicyny
 *   jako tematu medycznego. Piszę o SMAKU i o WRAŻENIU.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO ZACHĘTY DO ALKOHOLU przy wątku winnic.
 * — ZERO egzotyzowania obcych kuchni.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Równowaga smaków" dotyczy
 * słonego, kwaśnego, słodkiego i gorzkiego jako teorii.
 * „Gorycz w kuchni" dotyczy piątego smaku. „Doprawianie"
 * dotyczy próbowania i korygowania. „Przyprawy całe kontra
 * mielone" dotyczą techniki mielenia. „Sól w gotowaniu"
 * dotyczy soli. Tutaj chodzi o OSTROŚĆ jako o zjawisko,
 * które NIE JEST SMAKIEM i którego nie da się cofnąć.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM roku praw miejskich.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ numeru edycji Rybobrania.
 * — NIE PISZĘ o konkursach potraw rybnych na Rybobraniu.
 * — NIE OPISUJĘ winnic szczegółowo.
 * — NIE WYMIENIAM fermy strusi.
 * — NIE MYLĘ KROSNA ODRZAŃSKIEGO z KROSNEM PODKARPACKIM.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad dziesięć tysięcy mieszkańców na 8,2 km²,
 *   cała gmina blisko siedemnaście tysięcy na 211,5 km²;
 *   lasy zajmują blisko połowę powierzchni gminy,
 * — najstarsza pisemna wzmianka o Krośnie pochodzi z 1005 r.,
 *   a badania archeologiczne datują gród na VII wiek; prawa
 *   miejskie nadano w pierwszej połowie XIII wieku, za Henryka
 *   Brodatego; nazwę wywodzi się prawdopodobnie od słowa
 *   „chrost”, czyli wikliny,
 * — miasto leży u ujścia Bobru do Odry; w gminie są jeziora
 *   Raduszeckie o powierzchni ponad stu sześćdziesięciu
 *   hektarów i Dąbie, a w Starym Raduszcu działa elektrownia
 *   wodna z 1935 r.,
 * — świętem miasta jest Rybobranie, dawne Dni Krosna,
 *   organizowane przez Centrum Artystyczno-Kulturalne „Zamek”;
 *   otwiera je korowód, w którym burmistrz symbolicznie
 *   przekazuje władzę nad miastem wodnikowi; w 2025 r. zamiast
 *   dwóch dni odbyło się dziesięć weekendów w Parku Tysiąclecia,
 *   od 27 czerwca do 31 sierpnia,
 * — w gminie działają winnice, między innymi w Gostchorzu
 *   i Osiecznicy.
 */
export const KROSNO_ODRZANSKIE: CityContent = {
  slug: "krosno-odrzanskie",
  h1: "Thermomix Krosno Odrzańskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krosno Odrzańskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Krośnie Odrzańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krosno Odrzańskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krośnie Odrzańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krosna Odrzańskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Krosno Odrzańskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ostrości jako jedynej rzeczy w kuchni nie da się cofnąć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krośnie Odrzańskim – jak wygląda prezentacja?",
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
      id: "ostrosc",
      heading: "Miasto, które raz w roku oddaje władzę wodnikowi — czyli o ostrości",
      paragraphs: [
        "Święto Krosna nazywa się Rybobranie i zaczyna się od korowodu, w którym burmistrz symbolicznie przekazuje władzę nad miastem wodnikowi. Podoba mi się ten pomysł: raz do roku oddać ster komuś, kogo się odrobinę boi. W kuchni jest jeden składnik, który działa dokładnie tak samo — ostrość.",
        "Ostrość jest jedyną rzeczą w kuchni, której nie da się cofnąć. Za słone danie można rozcieńczyć, za kwaśne dosłodzić, za mdłe doprawić. Za ostre można tylko rozcieńczyć objętością i pogodzić się ze stratą.",
        "Bierze się to stąd, że ostrość w ogóle nie jest smakiem. To jest wrażenie — coś, co odbieramy inaczej niż słodycz czy kwas — i dlatego zachowuje się w daniu inaczej niż sól.",
        "Najważniejsza konsekwencja praktyczna: ostrość rozkłada się w czasie. Danie godzinę po zrobieniu jest ostrzejsze niż zaraz po zdjęciu z ognia, a następnego dnia jeszcze ostrzejsze. Doprawianie „do smaku” w trakcie gotowania prowadzi więc regularnie na manowce.",
        "Zasada, którą sobie z tego wyprowadziłam, jest prosta. Dodawać mniej, niż się chce, i dosypywać na końcu — a najlepiej już na talerzu.",
        "W domu, w którym jedzą różni ludzie, to zresztą jedyne rozsądne rozwiązanie. Ostrość powinna być dodawana osobno, na talerzu, a nie w garnku. Wtedy jedno danie pasuje wszystkim: dzieciom, komuś, kto nie znosi ostrego, i komuś, kto sypie chili na wszystko.",
        "Warto też wiedzieć, że źródła ostrości nie są wymienne. Pieprz jest ostry i aromatyczny naraz — daje zapach, nie tylko pieczenie. Papryka ostra bywa jednocześnie słodkawa i wnosi kolor. Chili często jest wyłącznie ostre i nie daje daniu nic poza tym. To trzy różne narzędzia, nie trzy nazwy jednego.",
        "Przy pieprzu jest jedna rzecz, o której warto pamiętać: po zmieleniu bardzo szybko traci aromat. Cała różnica między pieprzem z młynka a tym z gotowej torebki polega właśnie na tym — ten drugi jest już tylko ostry, bo zapach ulotnił się w drodze do sklepu.",
        "I ratunek na złą chwilę, bo warto go znać. Ostrość rozpuszcza się w tłuszczu, a nie w wodzie. Po zbyt ostrym kęsie szklanka wody rozprowadzi ją tylko po całych ustach — pomaga coś tłustego: łyżka jogurtu, kawałek sera, chleb z masłem.",
        "Z całym daniem jest podobnie. Za ostrą zupę ratuje dołożenie objętości, dodanie czegoś tłustego albo odrobiny słodyczy. Nie cofniemy ostrości — możemy ją tylko rozłożyć na większą ilość jedzenia.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma pojęcia, czy danie jest ostre, i nigdy Cię przed niczym nie ostrzeże. Próbowanie i decyzja zostają po Twojej stronie, i tak powinno być.",
        "Robi natomiast rzecz, która akurat przy ostrości ma znaczenie: miele pieprz i suszone papryczki na miejscu, tuż przed dodaniem. Świeżo zmielony pieprz to po prostu inny składnik niż ten z torebki — i jest to jedna z niewielu różnic w kuchni, które słychać od pierwszego kęsa.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krośnie Odrzańskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy ktoś w domu nie znosi ostrego. Wtedy pokażę dania, w których ostrość dodaje się osobno, na talerzu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krośnie Odrzańskim"),
    sekcjaRaty("w Krośnie Odrzańskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla krośnieńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad dziesięć tysięcy mieszkańców na ośmiu kilometrach kwadratowych, a cała gmina blisko siedemnaście tysięcy na dwustu jedenastu; lasy zajmują tu blisko połowę powierzchni. Najstarsza pisemna wzmianka o Krośnie pochodzi z 1005 roku, a badania archeologiczne datują gród na VII wiek; prawa miejskie nadano w pierwszej połowie XIII wieku, za Henryka Brodatego, a samą nazwę wywodzi się prawdopodobnie od słowa „chrost”, czyli wikliny. Miasto stoi u ujścia Bobru do Odry; w gminie leżą jeziora Raduszeckie o powierzchni ponad stu sześćdziesięciu hektarów oraz Dąbie, a w Starym Raduszcu działa elektrownia wodna z 1935 roku. Świętem miasta jest Rybobranie — dawne Dni Krosna — organizowane przez Centrum Artystyczno-Kulturalne „Zamek”; otwiera je korowód, w którym burmistrz symbolicznie przekazuje władzę nad miastem wodnikowi, a w 2025 roku zamiast dwóch dni odbyło się dziesięć weekendów w Parku Tysiąclecia, od 27 czerwca do 31 sierpnia. W gminie działają też winnice, między innymi w Gostchorzu i Osiecznicy.",
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

  districtsHeading: "Do których części gminy Krosno Odrzańskie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Krosno Odrzańskie też przyjadę",
  nearbyParagraphs: [
    "Gubin, Cybinka, Czerwieńsk, Bytnica i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gubin", "Cybinka", "Czerwieńsk", "Bytnica"],

  about: blokOMnie("do Krosna Odrzańskiego", "w Krośnie Odrzańskim i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krosna Odrzańskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo mylą się nie tylko miasta, ale i powiaty: chodzi o Krosno Odrzańskie w lubuskiem, a nie o Krosno na Podkarpaciu.",
    },
    ...faqWspolne("w Krośnie Odrzańskim"),
    {
      question: "Dlaczego danie robi się ostrzejsze następnego dnia?",
      answer:
        "Bo ostrość rozkłada się w czasie — godzinę po ugotowaniu danie jest ostrzejsze niż zaraz po zdjęciu z ognia, a nazajutrz jeszcze bardziej. Dlatego lepiej dodać mniej, niż się chce, i dosypać na końcu albo już na talerzu. Ostrość jest jedyną rzeczą w kuchni, której nie da się cofnąć.",
    },
    {
      question: "Jak ugotować jedno danie dla kogoś, kto lubi ostre, i kogoś, kto nie znosi?",
      answer:
        "Dodając ostrość osobno, na talerzu, a nie w garnku. To jedyny sposób, żeby jedno danie pasowało wszystkim — dzieciom, osobie wrażliwej i komuś, kto sypie chili na wszystko.",
    },
    {
      question: "Co pomaga po zbyt ostrym kęsie?",
      answer:
        "Coś tłustego, a nie woda. Ostrość rozpuszcza się w tłuszczu, więc szklanka wody rozprowadzi ją tylko po całych ustach — pomaga łyżka jogurtu, kawałek sera albo chleb z masłem. Z całym daniem działa to samo: objętość, tłuszcz, odrobina słodyczy.",
    },
  ],

  geo: { lat: 52.0533, lng: 15.0994 },
};
