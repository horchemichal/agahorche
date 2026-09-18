import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * SULMIERZYCE — powiat krotoszyński, woj. wielkopolskie.
 * ⚠⚠⚠ GMINA MIEJSKA. MIASTO = GMINA.
 *   ⚠⚠⚠ JEDYNA GMINA MIEJSKA W CAŁYM POWIECIE
 *   KROTOSZYŃSKIM (pozostałe: Krotoszyn, Koźmin
 *   Wielkopolski, Kobylin, Zduny — miejsko-wiejskie,
 *   Rozdrażew — wiejska).
 *   ⚠⚠⚠ NIE MA TU SOŁECTW. NIE PISZĘ „wszystkie wsie
 *   w gminie", „sołectwa", „obszar wiejski gminy".
 *   ⚠⚠⚠ NIE MA ODRĘBNYCH LICZB MIASTA I GMINY —
 *   TO JEDNA I TA SAMA JEDNOSTKA.
 * LUDNOŚĆ (miasto = gmina): 2 729 (GUS 31.12.2024).
 * POWIERZCHNIA: 29,3 km². GĘSTOŚĆ: 93,2 os./km².
 *   ⚠ [ZW — 2 729 / 29,3 = 93,1. Różnica 0,1.
 *   DOMYKA SIĘ. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * PODZIAŁ WEWNĘTRZNY: 1 OBRĘB EWIDENCYJNY
 *   (0001 Miasto Sulmierzyce), 1 MIEJSCOWOŚĆ,
 *   3 CZĘŚCI MIASTA: BŁONIE, GRANOWICE,
 *   NOWE OSIEDLE.
 *   ⚠⚠ CZĘŚCI MIASTA NIE SĄ ODRĘBNYMI
 *   MIEJSCOWOŚCIAMI, choć brzmią jak wsie.
 *   MÓWIĘ TO WPROST.
 * PRAWA MIEJSKIE: 1457 R. PIERWSZA WZMIANKA: 1420 R.
 *   ⚠⚠⚠ UTRATY I PRZYWRÓCENIA PRAW W 1972 R.
 *   NIE WSPOMINAM — sąsiaduje z zajętą figurą
 *   „przerwa nie kasuje początku", a daty dziennej
 *   nie ustalono.
 * RATUSZ: DREWNIANY, 1743 R., NA ŚRODKU RYNKU,
 *   JEDYNY ZACHOWANY DREWNIANY RATUSZ W POLSCE.
 *   PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ WĄTKU „MUZEUM DZIAŁA W BUDYNKU STARSZYM
 *   OD SIEBIE" NIE UŻYWAM — kąt „instytucja młodsza
 *   od swoich ścian" JEST ZAJĘTY. O muzeum NIE PISZĘ
 *   W OGÓLE.
 * ⚠ GEO: 51,6059 / 17,5307 (miasto i gmina tożsame
 *   z definicji).
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM (LICZBA MNOGA!):
 *   M. SULMIERZYCE LEŻĄ, OTRZYMAŁY, MAJĄ ·
 *   D. do SULMIERZYC (⚠⚠⚠ nie „Sulmierzyców") ·
 *   Ms. w SULMIERZYCACH · N. Sulmierzycami ·
 *   C. Sulmierzycom.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: ORZECZENIE W LICZBIE
 *   POJEDYNCZEJ — „Sulmierzyce leży", „Sulmierzyce
 *   otrzymało prawa miejskie". POPRAWNIE: LEŻĄ,
 *   OTRZYMAŁY, ZOSTAŁY.
 *   ⚠⚠⚠ SPRAWDZIĆ KAŻDE ORZECZENIE W TEKŚCIE.
 *   ⚠ POTWIERDZENIE: „Prawa miejskie otrzymały
 *   Sulmierzyce w 1457 r."; „burmistrz Sulmierzyc";
 *   „w Sulmierzycach".
 *   PRZYMIOTNIK: SULMIERZYCKI — potwierdzony
 *   („Ziemi Sulmierzyckiej"). UŻYWAM OSZCZĘDNIE.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW — NAJWIĘKSZE RYZYKO CAŁEJ FALI:
 *   — ⚠⚠⚠ SULMIERZYCE W WOJEWÓDZTWIE ŁÓDZKIM:
 *     WIEŚ i SIEDZIBA GMINY WIEJSKIEJ SULMIERZYCE,
 *     powiat PAJĘCZAŃSKI. ODMIENIA SIĘ IDENTYCZNIE
 *     („w Sulmierzycach") — NAZWA SAMA NIE ROZRÓŻNIA.
 *     ⚠⚠⚠ WSPOMINAM OBOWIĄZKOWO I ZALECAM DOPISYWANIE
 *     POWIATU PRZY UMAWIANIU.
 *     ⚠⚠⚠ LICZB GMINY ŁÓDZKIEJ NIE PODAJĘ
 *     I NIE PORÓWNUJĘ — porównania liczbowe między
 *     miejscowościami mam zajęte (Stęszew).
 *     WYMIENIAM SAMĄ NAZWĘ, TYP JEDNOSTKI,
 *     POWIAT I WOJEWÓDZTWO.
 *   — ⚠⚠ W GMINIE ŁÓDZKIEJ ISTNIEJE DODATKOWO
 *     SULMIERZYCE-KOLONIA — odrębna wieś. WSPOMINAM
 *     JEDNYM ZDANIEM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DUŻO MIEJSCA, MAŁO ZAGĘSZCZENIA:
 *   SULMIERZYCE ZAJMUJĄ 29,3 km² — i na całym tym
 *   obszarze jest JEDNA MIEJSCOWOŚĆ, JEDEN OBRĘB
 *   EWIDENCYJNY I ANI JEDNA WIEŚ.
 *   GĘSTOŚĆ WYNOSI 93,2 OSOBY NA KILOMETR KWADRATOWY —
 *   TYLE, ILE MIEWAJĄ CAŁE GMINY WIEJSKIE.
 *   To jest miasto z prawami z 1457 r., które ma
 *   powierzchnię większą od niejednego miasta
 *   dziesięć razy ludniejszego — bo w jego granicach
 *   mieszczą się pola, a nie zabudowa.
 *   ⚠⚠ NIE TWIERDZĘ, CO KONKRETNIE LEŻY NA TYCH
 *   POLACH — struktury użytkowania gruntów
 *   nie ustalono [NP].
 *
 * KĄT: DUŻO MIEJSCA TO NIE TO SAMO CO WYGODA
 * — o tym, że w kuchni liczy się nie metraż, tylko
 * odległość między rzeczami, których używa się razem.
 * Kąt z Sulmierzyc: 29,3 km² i jedna miejscowość.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Sulmierzyce mają 29,3 km² przy jednej
 *   miejscowości i jednym obrębie, a gęstość 93,2
 *   osoby na kilometr kwadratowy jest gęstością
 *   wiejską. TO JEST RDZEŃ,
 * — że to gmina miejska, więc nie ma tu żadnej wsi
 *   ani sołectwa — całe „wokół" jest w granicach
 *   miasta,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: duża kuchnia
 *   bywa mniej wygodna od małej, bo rzeczy używane
 *   razem leżą daleko od siebie,
 * — ⚠⚠ ŻE LICZY SIĘ LICZBA KROKÓW MIĘDZY ZLEWEM,
 *   PŁYTĄ I MIEJSCEM, GDZIE SIĘ KROI — a nie liczba
 *   metrów i szafek,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: rzeczy mają leżeć tam,
 *   gdzie się ich używa, a nie tam, gdzie akurat było
 *   miejsce. Sitko przy zlewie, przyprawy przy płycie,
 *   deska przy nożu,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: mała kuchnia ma swój
 *   własny problem, którego duża nie ma — nie ma gdzie
 *   odstawić. To nie jest tak, że ciasno zawsze znaczy
 *   sprawnie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie skupia kilka
 *   czynności w jednym punkcie, więc skraca drogę —
 *   ale zajmuje ten jeden punkt na stałe. W bardzo
 *   małej kuchni to może być za dużo.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MAŁA CAŁOŚĆ, DUŻA ROZPIĘTOŚĆ W ŚRODKU —
 *   kąt zajęty (Ujście). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o RÓŻNICĘ WYSOKOŚCI na małym obszarze; tu o to,
 *   że DUŻY OBSZAR MIEŚCI JEDNĄ RZECZ.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO WIĘCEJ EKSPONATÓW NIŻ MIESZKAŃCÓW —
 *   kąt zajęty (Rakoniewice).
 * — ⚠⚠⚠ ZERO INSTYTUCJA MŁODSZA OD SWOICH ŚCIAN —
 *   kąt zajęty. DLATEGO O MUZEUM NIE PISZĘ.
 * — ⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz). Tu miejscowość jest JEDNA,
 *   więc temat i tak nie istnieje.
 * — ⚠⚠ ZERO JEDNA LICZBA, DWA RÓŻNE MIASTA — kąt
 *   zajęty (Stęszew). PORÓWNAŃ LICZBOWYCH MIĘDZY
 *   MIEJSCOWOŚCIAMI NIE ROBIĘ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT. ⚠⚠⚠ TU RYZYKO JEST
 *   NAJWIĘKSZE W CAŁEJ SERII, bo kąt dotyczy
 *   rozplanowania. PISZĘ O PRZESTAWIANIU RZECZY,
 *   NIGDY O PRZESTAWIANIU ŚCIAN.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o sołectwach ani wsiach — tu ich nie ma.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczb gminy Sulmierzyce w łódzkiem.
 * — NIE PISZĘ o muzeum.
 * — NIE PISZĘ o utracie i przywróceniu praw miejskich.
 * — NIE TWIERDZĘ, co leży na terenach niezabudowanych.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE UŻYWAM orzeczeń w liczbie pojedynczej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sulmierzyce leżą w powiecie krotoszyńskim
 *   i są gminą miejską — jedyną w tym powiecie,
 * — liczą 2 729 mieszkańców (GUS, 31.12.2024)
 *   na 29,3 kilometra kwadratowego, czyli 93,2 osoby
 *   na kilometr kwadratowy,
 * — mają jeden obręb ewidencyjny, jedną miejscowość
 *   i ani jednego sołectwa,
 * — w granicach miasta wyodrębniono trzy części:
 *   Błonie, Granowice i Nowe Osiedle,
 * — pierwsza wzmianka pochodzi z 1420 r., a prawa
 *   miejskie Sulmierzyce otrzymały w 1457 r.,
 * — na środku Rynku stoi drewniany ratusz z 1743 r. —
 *   jedyny zachowany drewniany ratusz w Polsce,
 * — odrębne Sulmierzyce, wieś i siedziba gminy
 *   wiejskiej, leżą w powiecie pajęczańskim
 *   w województwie łódzkim; jest tam także wieś
 *   Sulmierzyce-Kolonia.
 */
export const SULMIERZYCE: CityContent = {
  slug: "sulmierzyce",
  h1: "Thermomix Sulmierzyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sulmierzyce — cena i prezentacja",
  seoDescription:
    "Thermomix w Sulmierzycach w powiecie krotoszyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sulmierzyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sulmierzycach pod Krotoszynem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sulmierzyc w powiecie krotoszyńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, a że to gmina miejska, to znaczy do całej gminy.",

  highlights: highlightyStandardowe("Sulmierzyce"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia dziewięć kilometrów kwadratowych i jedna miejscowość.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sulmierzycach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "duzo-miejsca",
      heading: "Dużo miejsca to nie to samo co wygoda",
      paragraphs: [
        "Sulmierzyce zajmują dwadzieścia dziewięć i trzy dziesiąte kilometra kwadratowego. Na całym tym obszarze jest jedna miejscowość, jeden obręb ewidencyjny i ani jedna wieś, bo to gmina miejska — miasto i gmina to tutaj dokładnie to samo.",
        "Wychodzi z tego dziewięćdziesiąt trzy i dwie dziesiąte osoby na kilometr kwadratowy. To gęstość, jaką miewają całe gminy wiejskie, a nie miasta z prawami miejskimi od 1457 roku. Powierzchnia jest duża, bo w granicach mieszczą się tereny niezabudowane — co dokładnie na nich leży, nie sprawdzałam i nie będę zgadywać.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, które na małej powierzchni mieści dużą różnicę wysokości. Tam rzecz była w tym, co dzieje się w pionie; tu w tym, że duży obszar mieści jedną jedyną rzecz.",
        "Piszę o tym, bo w kuchni mylimy dokładnie te dwie wielkości: ile jest miejsca i jak się w nim pracuje.",
        "Duża kuchnia potrafi być mniej wygodna od małej. Nie dlatego, że coś z nią nie tak, tylko dlatego, że rzeczy używane razem leżą daleko od siebie. Zlew przy oknie, płyta pod ścianą naprzeciwko, deska w szufladzie przy drzwiach, przyprawy w szafce nad lodówką. Każda z tych rzeczy stoi w sensownym miejscu i cały układ jest nie do przejścia.",
        "Liczy się nie metraż, tylko liczba kroków między trzema punktami: miejscem, gdzie się kroi, płytą i zlewem. Jeśli między nimi trzeba się przemieszczać przez całą kuchnię, to każde gotowanie jest o kilkaset kroków dłuższe niż musi być.",
        "Ruch jest jeden i nie kosztuje nic: rzeczy mają leżeć tam, gdzie się ich używa, a nie tam, gdzie akurat było wolne miejsce. Sitko i szczotka przy zlewie. Sól, pieprz i łyżka do mieszania przy płycie. Deska w tej samej szufladzie co nóż, a nie dwa metry dalej. To jedno popołudnie przestawiania i zwykle wystarcza na lata.",
        "Uczciwie o drugiej stronie, bo mała kuchnia wcale nie jest z definicji lepsza. Ma swój własny problem, którego duża nie ma: nie ma gdzie odstawić. Kiedy blat zajmuje deska, garnek i dwie miski, kolejna rzecz nie ma już gdzie stanąć i gotowanie robi się nerwowe. Ciasno nie znaczy sprawnie — znaczy tylko krótko.",
        "I uczciwie o sprzęcie. Thermomix skupia kilka czynności w jednym punkcie — miksowanie, podgrzewanie, ważenie, mieszanie dzieją się w tym samym miejscu, więc skraca drogę w kuchni, w której chodzi się za dużo. Ale zajmuje ten jeden punkt na stałe i nie da się go na chwilę odstawić. W bardzo małej kuchni to bywa za dużo i wolę powiedzieć to przed zakupem, a nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sulmierzycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sulmierzycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Sulmierzyc",
      paragraphs: [
        "Sulmierzyce leżą w powiecie krotoszyńskim i są gminą miejską — jedyną w całym tym powiecie. Liczą 2 729 mieszkańców (GUS, 31.12.2024) na dwudziestu dziewięciu i trzech dziesiątych kilometra kwadratowego, czyli dziewięćdziesiąt trzy i dwie dziesiąte osoby na kilometr kwadratowy. Mają jeden obręb ewidencyjny, jedną miejscowość i ani jednego sołectwa, a w granicach miasta wyodrębniono trzy części: Błonie, Granowice i Nowe Osiedle. Pierwsza wzmianka pochodzi z 1420 roku, a prawa miejskie Sulmierzyce otrzymały w 1457. Na środku Rynku stoi drewniany ratusz z 1743 roku — jedyny zachowany drewniany ratusz w Polsce.",
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

  districtsHeading: "Do których części Sulmierzyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, czyli do całej gminy — Sulmierzyce są gminą miejską i nie ma tu żadnej wsi ani sołectwa. W granicach miasta wyodrębniono trzy części: Błonie, Granowice i Nowe Osiedle. Brzmią jak nazwy wsi, ale osobnymi miejscowościami nie są. Wszędzie bez dopłaty.",
    "Dwie uwagi, bo ta nazwa myli częściej niż jakakolwiek inna w okolicy. Pierwsza: odrębne Sulmierzyce — wieś i siedziba gminy wiejskiej — leżą w powiecie pajęczańskim w województwie łódzkim, a w tamtej gminie jest jeszcze wieś Sulmierzyce-Kolonia. Obie nazwy odmieniają się identycznie, więc sama nazwa niczego nie rozstrzyga; przy umawianiu warto powiedzieć „Sulmierzyce w powiecie krotoszyńskim”. Druga, językowa: nazwa jest w liczbie mnogiej, więc Sulmierzyce leżą, mają i otrzymały — nie „leży” ani „otrzymało” — a dopełniacz brzmi „do Sulmierzyc”, nie „do Sulmierzyców”.",
  ],
  districts: [],

  nearbyHeading: "Poza Sulmierzyce też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Krotoszyna, Zdun, Kobylina, Odolanowa, Ostrowa Wielkopolskiego i Milicza — wszędzie bezpłatnie, tak samo jak w samych Sulmierzycach.",
  ],
  nearbyTowns: ["Krotoszyn", "Zduny", "Kobylin", "Odolanów", "Ostrów Wielkopolski", "Milicz"],

  about: blokOMnie("do Sulmierzyc", "w Sulmierzycach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sulmierzyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — a że Sulmierzyce są gminą miejską, to znaczy do całej gminy; nie ma tu żadnej wsi ani sołectwa. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga przy umawianiu: odrębne Sulmierzyce, wieś i siedziba gminy wiejskiej, leżą w powiecie pajęczańskim w województwie łódzkim, a obie nazwy odmieniają się identycznie. Warto więc powiedzieć „Sulmierzyce w powiecie krotoszyńskim”.",
    },
    ...faqWspolne("w Sulmierzycach"),
    {
      question: "Mam dużą kuchnię, a gotuje mi się w niej niewygodnie. Skąd to się bierze?",
      answer:
        "Najczęściej stąd, że rzeczy używane razem leżą daleko od siebie. Sulmierzyce są tu dobrym obrazem: mają dwadzieścia dziewięć kilometrów kwadratowych, jedną miejscowość i gęstość dziewięćdziesięciu trzech osób na kilometr — powierzchnia duża, zawartość rozproszona. W kuchni liczy się nie metraż, tylko liczba kroków między trzema punktami: miejscem, gdzie kroicie, płytą i zlewem. Ruch jest jeden i nic nie kosztuje: przenieście rzeczy tam, gdzie ich używacie, a nie tam, gdzie akurat było wolne miejsce. Sitko przy zlewie, sól i łyżka przy płycie, deska w tej samej szufladzie co nóż. Jedno popołudnie przestawiania zwykle wystarcza na lata — i mówię tu o przestawianiu rzeczy, nie o przestawianiu ścian.",
    },
    {
      question: "Czy w małej kuchni Thermomix ma sens?",
      answer:
        "Ma, ale pod jednym warunkiem: musi mieć stałe miejsce. Zaletą jest to, że skupia kilka czynności w jednym punkcie — miksowanie, podgrzewanie, ważenie i mieszanie dzieją się tam samo, więc w kuchni, w której chodzi się za dużo, realnie skraca drogę. Wadą jest to, że ten punkt zajmuje na stałe i nie da się go na chwilę odstawić, a mała kuchnia ma swój własny problem: brak miejsca na odstawienie czegokolwiek. Jeśli u Was wąskim gardłem jest właśnie blat, to argument przeciwko zakupowi i wolę go powiedzieć wprost, jeszcze przed prezentacją.",
    },
  ],

  geo: { lat: 51.6059, lng: 17.5307 },
};
