import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * SĘPÓLNO KRAJEŃSKIE — powiat sępoleński,
 * woj. kujawsko-pomorskie, KRAJNA (część wschodnia).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 8 684 mieszkańców (GUS 31.12.2024), 6,6 km²,
 * gęstość 1 325,8 os./km² — NAJGĘŚCIEJ ZALUDNIONE
 * Z CAŁEJ TEJ FALI.
 * CAŁA GMINA MIEJSKO-WIEJSKA: 15 023 osoby, 229,1 km².
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE: archiwalny serwis gminy podaje 16 250 osób
 *   w gminie i 9 370 w mieście (+8,2% i +7,9% wobec GUS)
 *   oraz powierzchnię miasta 5,79 km². UŻYWAM GUS.
 * ⚠ ODMIANA: D. SĘPÓLNA KRAJEŃSKIEGO,
 *   Ms. W SĘPÓLNIE KRAJEŃSKIM, przym. SĘPOLEŃSKI
 *   (powiat sępoleński — NIE „sępólnieński").
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 *
 * ⚠⚠ PUŁAPKI NAZEWNICZE — WYSOKIE RYZYKO:
 * — SĘPOPOL — inne miasto (warmińsko-mazurskie),
 * — SĘPOLNO — duże osiedle we WROCŁAWIU (jedno „ó" różnicy),
 * — SĘPÓLNO WIELKIE i SĘPÓLNO MAŁE — wsie w okolicy,
 * — KAMIEŃ KRAJEŃSKI, MIASTECZKO KRAJEŃSKIE, KRAJENKA —
 *   inne miasta z tym samym przymiotnikiem regionalnym.
 * ⚠ HISTORIA NAZWY: 1 marca 1937 przyjęto formę
 *   „Sępólno KRAIŃSKIE" (przez „i"); dzisiejsza forma
 *   przez „j" jest późniejsza, DATY PRZEJŚCIA NIE USTALONO.
 *   ⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1359 — pierwsza wzmianka: Hektor z Pakości ufundował
 *   w mieście JEDNOCZEŚNIE KOŚCIÓŁ I MŁYN.
 *   ⚠ WYMIENIAM WYŁĄCZNIE MŁYN, bez wątku fundacji
 *   kościelnej — patrz etyka.
 * — 20 KWIETNIA 1360 R. — Kazimierz Wielki nadał prawo
 *   magdeburskie. ⚠ DATA DZIENNA Z JEDNEGO ŹRÓDŁA,
 *   rok potwierdzony drugim. ⚠ DROBNA SPRZECZNOŚĆ:
 *   strona gminy podaje 1359 jako rok, w którym miasto
 *   „już miało prawa miejskie" — ZAZNACZAM ROZBIEŻNOŚĆ.
 * — RYNEK W KSZTAŁCIE REGULARNEGO TRÓJKĄTA, bo kształt
 *   narzucił brzeg Jeziora Sępoleńskiego; rynek wytyczono
 *   na wyniesieniu terenu, żeby nie zalewało.
 *   ⚠⚠ PODAJĘ WYŁĄCZNIE JAKO FAKT W RYSIE HISTORYCZNYM.
 *   ZERO ROZWIJANIA — KĄT „KSZTAŁT" JEST ZAJĘTY (Szubin).
 *   TWARDA GRANICA.
 * — LICZBY DOMÓW: 1580 — 175 domów drewnianych;
 *   druga połowa XVII w. — 90; 1764 — 150; 1783 — 183.
 *   ⚠⚠ NIE TŁUMACZĘ SPADKU ZE 175 DO 90 — przyczyna
 *   jest w sekcji etycznej. Podaję albo suchą statystykę,
 *   albo wcale.
 * — 1773 — 70 RZEMIEŚLNIKÓW, w tym OŚMIU SUKIENNIKÓW.
 * — koniec XV w. — założenie browaru
 *   ⚠ ZERO ROZWIJANIA, ZERO ZACHĘTY DO ALKOHOLU.
 * — 1894 — linia kolejowa Chojnice–Sępólno–Więcbork–Nakło,
 * — ⚠⚠ RDZEŃ KĄTA: 1 PAŹDZIERNIKA 1909 R. — ODDANO
 *   DO UŻYTKU GAZOWNIĘ MIEJSKĄ. DATA DZIENNA.
 * — 1896 — nowy ratusz i nowa poczta; 1864 — remiza.
 * — GEOGRAFIA: gmina 22 918 ha, wysokości 110–120 m n.p.m.,
 *   pojedyncze wzniesienia ponad 140 m, 147 m na południowy
 *   wschód od miasta; najniżej dolina Sępolenki ok. 102 m;
 *   DENIWELACJA OK. 45 M. Rzeźba młodoglacjalna, uformowana
 *   ok. 16 500 lat temu. Największe jeziora: Sępoleńskie
 *   i Lutowskie.
 * — KRAJNA: granice wyznaczają cztery rzeki — Noteć
 *   od południa, Gwda od zachodu, Brda od wschodu,
 *   Debrzynka i Kamionka od północy. Geograficznie Pomorze,
 *   etnograficznie Wielkopolska.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Sępólno Krajeńskie. Sprawdzono pełną listę
 *   wojewódzką (100 pozycji). Miasto pojawia się
 *   w wyszukiwarce tylko dlatego, że lokalny portal
 *   opublikował listę ogólnowojewódzką — TO NIE JEST
 *   przypisanie produktu. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: REGULACJA PŁOMIENIA — ogień, który da się ściszyć.
 * Kąt od gazowni z 1 października 1909 r.: gaz zmienił
 * gotowanie bardziej niż jakikolwiek garnek, bo po raz
 * pierwszy płomień dawało się podkręcić i zmniejszyć
 * od ręki — bez dokładania i bez wygarniania.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 1 października 1909 roku Sępólno uruchomiło własną
 *   gazownię miejską — z datą dzienną, wcześniej niż wiele
 *   większych miast regionu,
 * — ŻE TO BYŁA WIĘKSZA ZMIANA W KUCHNI NIŻ JAKIKOLWIEK
 *   GARNEK: po raz pierwszy płomień dało się podkręcić
 *   i zmniejszyć w sekundę, jednym ruchem ręki,
 * — ŻE PRZEDTEM REGULACJA ISTNIAŁA, ale polegała na czymś
 *   innym: na dokładaniu, na wygarnianiu, na przesuwaniu
 *   garnka bliżej i dalej od środka płyty
 *   ⚠ BEZ ROZWIJANIA WĄTKU OPAŁU — kąt drewna zajęty,
 * — ⚠⚠ ŻE DZIŚ MAMY REGULACJĘ, A I TAK JEJ NIE UŻYWAMY —
 *   TO JEST RDZEŃ TEKSTU. Większość domowego gotowania
 *   odbywa się na dwóch ustawieniach: „na full" i „wyłączone",
 * — CO SIĘ PRZEZ TO PSUJE, KONKRETNIE:
 *   — ZUPA NA DUŻYM OGNIU BULGOCZE ZAMIAST MRUCZEĆ —
 *     a wtedy mięso się szarpie, warzywa rozpadają,
 *     a płyn ucieka szybciej, niż smak zdąży się wymienić,
 *   — CEBULA NA ZA DUŻYM OGNIU ROBI SIĘ CZARNA NA BRZEGACH,
 *     zanim zmięknie w środku,
 *   — MLEKO I ŚMIETANA NA DUŻYM OGNIU ŚCINAJĄ SIĘ,
 *     bo dno jest znacznie gorętsze niż reszta,
 * — ŻE PŁYTA INDUKCYJNA NIE ROZWIĄZUJE TEGO SAMA Z SIEBIE:
 *   reaguje szybciej niż gaz, ale nadal trzeba chcieć
 *   ją ściszyć,
 * — ⚠⚠ ŻE PRAWDZIWY PROBLEM NIE JEST TECHNICZNY, TYLKO
 *   ORGANIZACYJNY: małego ognia nie używamy nie dlatego,
 *   że nie umiemy, tylko dlatego, że wymaga czekania,
 *   a my stoimy nad garnkiem,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TU JEST SEDNO: to jest
 *   dokładnie ta jedna rzecz, w której urządzenie
 *   z termostatem wygrywa z płytą. Nie dlatego, że grzeje
 *   lepiej — dlatego, że MAŁY OGIEŃ PRZESTAJE KOSZTOWAĆ
 *   STANIA. Danie, które ma się dusić spokojnie przez
 *   godzinę, nie wymaga obecności, więc nagle opłaca się
 *   je tak robić.
 *   ⚠ ALE UCZCIWIE TEŻ: urządzenie nie zrumieni czegoś
 *   na dużym ogniu tak jak patelnia ⚠ ODSYŁAM
 *   DO STRONY O RUMIENIENIU, NIE ROZWIJAM.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO KSZTAŁTU RYNKU JAKO TEMATU — kąt zajęty
 *   (Szubin). Trójkątny rynek WYŁĄCZNIE jako fakt.
 * — ⚠⚠ ZERO OPAŁU, DREWNA I PIEKARNIKA — kąty zajęte.
 * — ⚠ ZERO RUMIENIENIA JAKO TEMATU — kąt zajęty (Iłża).
 *   Odsyłam jednym zdaniem.
 * — ⚠ ZERO PIWA I ZERO ZACHĘTY DO ALKOHOLU.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI I O GAZIE
 *   W DOMU. ⚠⚠ TO JEST WAŻNE: piszę o REGULACJI MOCY
 *   GRZANIA, nigdy o instalacji gazowej, ulatnianiu się
 *   ani bezpieczeństwie. TWARDA GRANICA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ I ZAGŁADY.
 *   Portale poświęcone tej historii wypływają w pierwszej
 *   dziesiątce wyników przy zapytaniach historycznych
 *   o Sępólno. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO DANYCH WYZNANIOWYCH I NARODOWOŚCIOWYCH.
 *   Źródła podają strukturę z 1905 i 1910 r. w procentach.
 *   CAŁY BLOK WYŁĄCZONY.
 * — ⚠⚠ ZERO EPIDEMII Z 1655 R. i okupacji szwedzkiej —
 *   zaraza wygubiła ponad tysiąc mieszkańców. Dlatego
 *   NIE TŁUMACZĘ spadku liczby domów ze 175 do 90.
 * — ⚠⚠ ZERO ZAKŁADU PRZEMYSŁU DRZEWNEGO. W latach 70.
 *   pracowała w nim ponad połowa zatrudnionych w mieście;
 *   dziś zakład nie istnieje. Upadły zakład. TWARDA GRANICA.
 * — ZERO zaboru, germanizacji i niemieckiej nazwy miasta.
 * — ZERO fundacji kościelnej z 1359 r. — wymieniam
 *   wyłącznie młyn.
 * — ZERO wyludniania i bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „RUMIENIENIE" (Iłża) dotyczy KOLORU Z OBRÓBKI.
 *   Odsyłam tam wprost.
 * — „WĄSKIE GARDŁO" (Wąbrzeźno) dotyczy ETAPU, KTÓRY
 *   WSTRZYMUJE OBIAD.
 * — „ŚCIĘTY NAROŻNIK" (Szubin) dotyczy KSZTAŁTU NACZYNIA.
 * — „ZA DUŻE NACZYNIE" (Żnin) dotyczy ROZMIARU NACZYNIA.
 * TUTAJ chodzi o MOC GRZANIA I O TO, ŻE JEJ NIE ŚCISZAMY.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ danych z archiwalnego serwisu gminy.
 * — NIE ROZSTRZYGAM sprzeczności 1359/1360 — zaznaczam ją.
 * — NIE TŁUMACZĘ spadku liczby domów w XVII w.
 * — NIE PISZĘ o zakładzie drzewnym.
 * — NIE UŻYWAM nazwy mieszkańca — nie ustalono.
 * — NIE DORADZAM niczego w sprawie instalacji gazowej.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sępólno Krajeńskie leży na Krajnie, jest siedzibą
 *   powiatu sępoleńskiego i liczy 8 684 mieszkańców
 *   (GUS, 31.12.2024) na 6,6 km², czyli ponad tysiąc
 *   trzysta osób na kilometr kwadratowy; cała gmina
 *   miejsko-wiejska ma 15 023 osoby na 229,1 km²,
 * — pierwsza wzmianka pochodzi z 1359 roku, gdy Hektor
 *   z Pakości ufundował w mieście młyn; prawo magdeburskie
 *   nadał Kazimierz Wielki 20 kwietnia 1360 roku, choć
 *   źródła podają te daty nieco rozbieżnie,
 * — rynek ma kształt regularnego trójkąta, bo wyznaczył
 *   go brzeg Jeziora Sępoleńskiego, a plac wytyczono
 *   na wyniesieniu terenu,
 * — w 1580 roku stało w mieście 175 drewnianych domów,
 *   w 1764 — sto pięćdziesiąt, a w 1783 — sto osiemdziesiąt
 *   trzy; w 1773 roku pracowało tu siedemdziesięciu
 *   rzemieślników, w tym ośmiu sukienników,
 * — w 1894 roku ukończono linię kolejową z Chojnic przez
 *   Sępólno i Więcbork do Nakła, a 1 października 1909
 *   roku oddano do użytku miejską gazownię; ratusz i pocztę
 *   zbudowano w 1896 roku,
 * — gmina zajmuje 22 918 hektarów, leży na wysokości
 *   110–120 metrów nad poziomem morza, a deniwelacja
 *   terenu sięga czterdziestu pięciu metrów; rzeźbę
 *   uformował lądolód około 16 500 lat temu,
 * — granice Krajny wyznaczają cztery rzeki: Noteć
 *   od południa, Gwda od zachodu, Brda od wschodu
 *   oraz Debrzynka i Kamionka od północy; region leży
 *   geograficznie na Pomorzu, a etnograficznie należy
 *   do Wielkopolski.
 */
export const SEPOLNO_KRAJENSKIE: CityContent = {
  slug: "sepolno-krajenskie",
  h1: "Thermomix Sępólno Krajeńskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sępólno Krajeńskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sępólnie Krajeńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sępólno Krajeńskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sępólnie Krajeńskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sępólna Krajeńskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Sępólno Krajeńskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mamy regulację ognia od stu lat i nadal gotujemy na dwóch ustawieniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sępólnie Krajeńskim – jak wygląda prezentacja?",
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
      id: "regulacja-ognia",
      heading: "Pierwszego października 1909 roku",
      paragraphs: [
        "Sępólno uruchomiło własną gazownię miejską 1 października 1909 roku. Z datą dzienną, wcześniej niż niejedno większe miasto w regionie.",
        "To była w kuchni większa zmiana niż jakikolwiek garnek. Po raz pierwszy płomień dało się podkręcić i zmniejszyć w sekundę, jednym ruchem ręki.",
        "Regulacja istniała i przedtem, tylko polegała na czymś zupełnie innym: na dokładaniu, na wygarnianiu, na przesuwaniu garnka bliżej i dalej od najgorętszego miejsca. Każda zmiana mocy była czynnością — zajmowała ręce i trwała.",
        "A teraz rzecz, która mnie w tym zastanawia najbardziej: mamy tę regulację od ponad stu lat i praktycznie z niej nie korzystamy.",
        "Większość domowego gotowania odbywa się na dwóch ustawieniach. Na full i wyłączone. Pokrętło ma dziewięć pozycji, a używamy dwóch.",
        "Widać to po daniach. Zupa na dużym ogniu bulgocze zamiast mruczeć — a wtedy mięso się szarpie, warzywa rozpadają się na strzępy, a płyn ucieka szybciej, niż smaki zdążą się wymienić. Ten sam garnek na małym ogniu daje po godzinie coś zupełnie innego, z tych samych składników.",
        "Cebula na za dużym ogniu robi się czarna na brzegach, zanim zdąży zmięknąć w środku. Mleko i śmietana ścinają się, bo dno jest wtedy znacznie gorętsze niż reszta zawartości — nie chodzi o średnią temperaturę, tylko o to jedno miejsce przy metalu.",
        "Płyta indukcyjna sama tego nie rozwiązuje. Reaguje szybciej niż gaz, owszem, ale nadal trzeba chcieć ją ściszyć.",
        "I tu dochodzimy do sedna, bo problem nie jest techniczny. Jest organizacyjny. Małego ognia nie używamy nie dlatego, że nie umiemy — tylko dlatego, że mały ogień wymaga czekania, a my przy tym garnku stoimy. Duży ogień to sposób na skrócenie własnego stania, a nie na lepsze danie.",
        "I dokładnie w tym jednym miejscu urządzenie z termostatem wygrywa z płytą. Nie dlatego, że grzeje lepiej — dlatego, że mały ogień przestaje kosztować stania. Danie, które ma się dusić spokojnie przez godzinę, nagle nie wymaga obecności, więc nagle opłaca się je tak robić. To jest realna zmiana i mówię o niej bez przesady, bo nie polega na mocy, tylko na tym, że przestaje boleć.",
        "Uczciwie i w drugą stronę: urządzenie nie zrumieni czegoś na ostrym ogniu tak jak patelnia. O samym rumienieniu i o tym, skąd bierze się kolor, pisałam osobno przy innym mieście.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sępólnie Krajeńskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was w domu zupy zwykle się gotują, a nie duszą — powiedz to przy umawianiu. Chętnie pokażę różnicę na jednym garnku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sępólnie Krajeńskim"),
    sekcjaRaty("w Sępólnie Krajeńskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla sępoleńskiej rodziny",
      paragraphs: [
        "Sępólno Krajeńskie leży na Krajnie, jest siedzibą powiatu sępoleńskiego i liczy blisko dziewięć tysięcy mieszkańców na niecałych siedmiu kilometrach kwadratowych — ponad tysiąc trzysta osób na kilometr, najgęściej z okolicznych miast. Cała gmina miejsko-wiejska ma ponad piętnaście tysięcy osób. Pierwsza wzmianka pochodzi z 1359 roku, gdy Hektor z Pakości ufundował tu młyn; prawo magdeburskie nadał Kazimierz Wielki 20 kwietnia 1360 roku, choć źródła podają te daty nieco rozbieżnie. Rynek ma kształt regularnego trójkąta — wyznaczył go brzeg Jeziora Sępoleńskiego, a plac wytyczono na wyniesieniu terenu. W 1580 roku stało w mieście sto siedemdziesiąt pięć drewnianych domów, w 1783 — sto osiemdziesiąt trzy; w 1773 pracowało tu siedemdziesięciu rzemieślników, w tym ośmiu sukienników. W 1894 roku ukończono linię kolejową z Chojnic przez Sępólno i Więcbork do Nakła, a 1 października 1909 oddano do użytku miejską gazownię. Granice Krajny wyznaczają cztery rzeki: Noteć od południa, Gwda od zachodu, Brda od wschodu oraz Debrzynka i Kamionka od północy — region leży geograficznie na Pomorzu, a etnograficznie należy do Wielkopolski.",
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

  districtsHeading: "Do których części Sępólna Krajeńskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od trójkątnego rynku i zabudowy nad jeziorem po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Sępólno Krajeńskie też przyjadę",
  nearbyParagraphs: [
    "Więcbork, Kamień Krajeński, Tuchola, Nakło nad Notecią, Mrocza, Chojnice i Koronowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Więcbork", "Kamień Krajeński", "Tuchola", "Mrocza"],

  about: blokOMnie("do Sępólna Krajeńskiego", "w Sępólnie Krajeńskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sępólna Krajeńskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Sępólno Krajeńskie jest miastem w gminie miejsko-wiejskiej i siedzibą powiatu — przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Sępólnie Krajeńskim"),
    {
      question: "Dlaczego zupa na dużym ogniu wychodzi gorzej?",
      answer:
        "Bo bulgocze zamiast mruczeć. Mięso się wtedy szarpie, warzywa rozpadają się na strzępy, a płyn ucieka szybciej, niż smaki zdążą się wymienić. Ten sam garnek na małym ogniu daje po godzinie coś zupełnie innego z tych samych składników. To samo dotyczy mleka i śmietany — ścinają się, bo dno jest znacznie gorętsze niż reszta zawartości.",
    },
    {
      question: "Czemu tak rzadko gotujemy na małym ogniu?",
      answer:
        "Nie dlatego, że nie umiemy — dlatego, że mały ogień wymaga czekania, a my stoimy przy garnku. Duży ogień to sposób na skrócenie własnego stania, a nie na lepsze danie. W tym jednym miejscu urządzenie z termostatem naprawdę zmienia rachunek: kiedy danie może dusić się samo, mały ogień przestaje kosztować stania.",
    },
  ],

  geo: { lat: 53.4513, lng: 17.5316 },
};
