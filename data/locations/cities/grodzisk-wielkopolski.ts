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
 * GRODZISK WIELKOPOLSKI — powiat grodziski (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 15 104 mieszkańców (GUS 31.12.2024), 18,2 km²,
 *   gęstość 829,4 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia powierzchni do 18,21]. PODAJĘ.
 * CAŁA GMINA: 20 355 osób, 134,7 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (151,11 z dzielenia wobec 152 w źródle).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 23.
 * ⚠ Miasto skupia 74,2 % ludności gminy.
 *   ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠⚠ NAZWY RZEKI NIE PODAJĘ — źródła podają dwie
 *   (Letnica / Lednica) i nie rozstrzygają.
 * ⚠ GEO: 52,233 / 16,367. Pojezierze Poznańskie.
 *
 * ⚠⚠⚠ ODMIANA — DWA CZŁONY, OBA SIĘ ODMIENIAJĄ:
 *   D. do GRODZISKA WIELKOPOLSKIEGO ·
 *   Ms. w GRODZISKU WIELKOPOLSKIM ·
 *   N. Grodziskiem Wielkopolskim.
 *   ⚠⚠⚠ BŁĘDY: „w Grodzisku Wielkopolski",
 *   „w Grodzisku Wielkopolskiem". SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM.
 *   Przymiotnik: GRODZISKI (powiat grodziski).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM (jest nieregularna).
 *
 * ⚠⚠⚠ KOLIZJE NAZW — NAJLICZNIEJSZE:
 *   GRODZISKO — wieś w gminie PLESZEW, opisanej
 *     W TEJ SAMEJ FALI ⚠⚠⚠ ROZGRANICZAM W FAQ ·
 *   GRODZISK MAZOWIECKI · rodzina Grodzisk /
 *   Grodzisko / Grodziszcze w całej Polsce.
 *   ⚠ Człon „Wielkopolski" istnieje właśnie po to,
 *   żeby tę kolizję rozbroić. PODAJĘ TO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1257 r., „Grodzisze",
 *     w przywileju Przemysła I — JAKO WIEŚ.
 *     ⚠⚠ ODBIORCY PRZYWILEJU NIE WYMIENIAM —
 *     wyznaniowe.
 *   — PRAWA MIEJSKIE: dokument z 1303 r. POTWIERDZA
 *     wcześniejsze prawa; dokument lokacyjny się nie
 *     zachował [SP]. PISZĘ TO WPROST.
 *     ⚠⚠ ODSTĘPU 1257→1303 NIE ROBIĘ KĄTEM.
 *   — 1932 r. — utrata siedziby powiatu; 1999 r. —
 *     odzyskanie. ⚠⚠ 67 LAT — figura „x lat bez
 *     statusu" zajęta (Szklarska Poręba). GOŁY FAKT.
 *   — RATUSZ: budowa ok. 1830 r., „ostateczny kształt
 *     uzyskał w 1910" [SP — inne źródło: poł. XIX w.].
 *     ⚠⚠⚠ DŁUGIEGO DOKAŃCZANIA NIE ROBIĘ KĄTEM — ta
 *     sama figura jest w Pleszewie (ta sama fala).
 *   — Ród Opalińskich władał miastem 1626–1775 (149 lat).
 *   — Drukarnia Melchiora Neringa: 1579–1581.
 *   ⚠⚠ MENNICY (1306–1314) NIE UŻYWAM — jedno źródło,
 *     niepotwierdzone przez urząd miasta.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DRUGIE MIASTO STO PIĘĆDZIESIĄT
 *   METRÓW DALEJ:
 *   W 1593 r. JAN OSTRORÓG ZAŁOŻYŁ „NOWY GRODZISK"
 *   STO PIĘĆDZIESIĄT METRÓW OD ŚREDNIOWIECZNEGO
 *   CENTRUM.
 *   ⚠⚠⚠ DWA OŚRODKI MIEJSKIE NA DYSTANSIE KRÓTSZYM
 *   NIŻ PIERZEJA RYNKU. To jest cały kąt.
 *   ⚠ Spis z 1593 r.: ok. 1160 mieszkańców.
 *   ⚠⚠ NIE ZNAM POWODÓW TEJ DECYZJI I ICH NIE ZGADUJĘ.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE TO BYŁ BŁĄD — dziś jest to
 *   jedno miasto, więc rozwiązanie w końcu zadziałało.
 *   PISZĘ TO WPROST.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — stadion: 5 383 miejsca; klub sportowy założony
 *   w 1922 r., stadion w 1925 r.
 *   ⚠⚠ RÓŻNICY TRZECH LAT NIE ROBIĘ KĄTEM — figura
 *   „używane wcześniej, zapisane później" zajęta
 *   (Zawidów). GOŁY FAKT.
 *   ⚠⚠ PROPORCJI MIEJSC DO LUDNOŚCI NIE PODAJĘ —
 *   to byłby osobny kąt, a mam już swój.
 * — ⚠⚠⚠ PIWOWARSTWA NIE OPISUJĘ ANI SŁOWEM —
 *   ALKOHOL, WYKLUCZONE BEZWZGLĘDNIE.
 * — ⚠ ODLEGŁOŚCI [NP] — NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: DRUGIE OBOK ZAMIAST NAPRAWY STAREGO
 * — o zakładaniu równoległych systemów w kuchni zamiast
 * naprawiania tych, które już są. Kąt z Grodziska:
 * w 1593 r. postawiono tu drugie miasto sto pięćdziesiąt
 * metrów od pierwszego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1593 r. Jan Ostroróg założył „Nowy Grodzisk"
 *   sto pięćdziesiąt metrów od starego centrum,
 * — ŻE TO JEST DYSTANS KRÓTSZY NIŻ JEDNA PIERZEJA
 *   RYNKU. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE ZNAM POWODÓW I ICH NIE ZGADUJĘ,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY TO CIĄGLE: druga lista
 *   zakupów obok pierwszej, druga półka „na zdrowe
 *   rzeczy", drugi obiad dla dziecka, nowa aplikacja
 *   obok zeszytu, którego się nie używa,
 * — ⚠⚠ ŻE KOSZT JEST ZAWSZE TEN SAM: od tej chwili
 *   utrzymuje się dwa systemy zamiast jednego, i zwykle
 *   żaden nie jest utrzymywany porządnie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim założysz cokolwiek
 *   równoległego, nazwij jedną konkretną rzecz, która
 *   nie działa w tym, co już masz. Potem sprawdź, czy
 *   da się ją naprawić na miejscu,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem starego naprawić
 *   się nie da i sto pięćdziesiąt metrów dalej jest
 *   właściwą odpowiedzią. W Grodzisku to ostatecznie
 *   zrosło się w jedno miasto,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie bardzo często
 *   kupuje się jako system równoległy i wtedy dom
 *   ma dwa sposoby gotowania naraz. MÓWIĘ WPROST,
 *   ŻE RADZĘ ODWROTNIE: przenieść do niego dania,
 *   które już się robi, zamiast zakładać osobną
 *   „kuchnię z urządzenia".
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam dwie części
 *   połączono administracyjnie i nie zrosły się; tu
 *   ktoś świadomie postawił drugą rzecz obok pierwszej,
 *   zamiast naprawiać pierwszą.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO MAŁY DYSTANS, DUŻY KOSZT — kąt zajęty
 *   (Pleszew, TA SAMA FALA). ⚠⚠⚠ TAM CHODZI O KOSZT
 *   POKONYWANIA ODLEGŁOŚCI, TU O SAM FAKT POSTAWIENIA
 *   DRUGIEJ RZECZY. ŻADNEGO WĄTKU „ZA DALEKO, WIĘC
 *   NIEUŻYWANE" W TEJ SEKCJI.
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt zajęty
 *   (Złotów).
 * — ⚠⚠ ZERO RÓWNOLEGŁE POTRZEBUJE PRZEJŚĆ — kąt zajęty
 *   (Jedlina-Zdrój). ⚠⚠⚠ TO BARDZO BLISKO. TAM CHODZI
 *   O ŁĄCZENIE DWÓCH RÓWNOLEGŁYCH RZECZY, TU O TO,
 *   ŻEBY DRUGIEJ W OGÓLE NIE ZAKŁADAĆ. PILNOWAĆ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK I APLIKACJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠ „Półka na zdrowe
 *   rzeczy" to opis zachowania, NIE porada żywieniowa.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO ALKOHOLU I PIWOWARSTWA · ZERO
 *   POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ nazwy rzeki.
 * — NIE ZGADUJĘ powodów założenia Nowego Grodziska
 *   i nie nazywam tego błędem.
 * — NIE PISZĘ o mennicy ani o piwowarstwie.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Grodzisk Wielkopolski jest siedzibą powiatu
 *   grodziskiego i leży na Pojezierzu Poznańskim;
 *   miasto liczy 15 104 mieszkańców (GUS, 31.12.2024)
 *   na 18,2 km², czyli 829,4 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 20 355
 *   osób na 134,7 km² i obejmuje 23 miejscowości,
 * — pierwsza wzmianka pochodzi z 1257 r., w formie
 *   „Grodzisze" i dotyczy wsi; dokument z 1303 r.
 *   potwierdza wcześniejsze prawa miejskie, a sam akt
 *   lokacyjny się nie zachował,
 * — w 1593 r. Jan Ostroróg założył „Nowy Grodzisk"
 *   sto pięćdziesiąt metrów od średniowiecznego centrum;
 *   spis z tego samego roku podaje około 1160
 *   mieszkańców,
 * — ród Opalińskich władał miastem w latach 1626–1775,
 *   a drukarnia Melchiora Neringa działała w latach
 *   1579–1581,
 * — ratusz zaczęto budować około 1830 r. i ostateczny
 *   kształt uzyskał w 1910 r.,
 * — miasto utraciło siedzibę powiatu w 1932 r.
 *   i odzyskało ją w 1999 r.,
 * — miejscowy klub sportowy założono w 1922 r., stadion
 *   w 1925 r., a dziś mieści on 5 383 osoby.
 */
export const GRODZISK_WIELKOPOLSKI: CityContent = {
  slug: "grodzisk-wielkopolski",
  h1: "Thermomix Grodzisk Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Grodzisk Wielkopolski — prezentacja i cena",
  seoDescription:
    "Thermomix w Grodzisku Wielkopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grodzisk Wielkopolski — prezentacja w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grodzisku Wielkopolskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grodziska Wielkopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Grodzisk Wielkopolski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Drugie miasto sto pięćdziesiąt metrów od pierwszego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grodzisku Wielkopolskim – jak wygląda prezentacja?",
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
      id: "drugie-obok",
      heading: "Drugie obok zamiast naprawy starego",
      paragraphs: [
        "W 1593 roku Jan Ostroróg założył w Grodzisku nowe miasto. Sto pięćdziesiąt metrów od starego.",
        "Sto pięćdziesiąt metrów to mniej niż jedna pierzeja rynku. Można stanąć w jednym mieście i zobaczyć drugie. Powodów tej decyzji nie znam i nie zamierzam ich zgadywać — zostaje sam fakt, że zamiast przebudowywać to, co było, postawiono obok drugie.",
        "W kuchni robimy dokładnie to samo, tylko taniej i częściej.",
        "Druga lista zakupów, bo pierwsza się nie sprawdziła. Druga półka, ta „na zdrowe rzeczy”, obok normalnej. Drugi obiad dla dziecka, które nie zje tego, co reszta. Nowa aplikacja do planowania posiłków obok zeszytu, którego i tak nikt już nie otwiera.",
        "Koszt jest zawsze ten sam i zawsze pojawia się później: od tej chwili trzeba utrzymywać dwa systemy zamiast jednego. A skoro nie starczało czasu na jeden, to na dwa nie starczy tym bardziej — i po miesiącu żaden nie jest prowadzony porządnie.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch częściach, które połączono administracyjnie, a one i tak się nie zrosły. Tam rzecz działa się bez niczyjej decyzji. Tu ktoś świadomie postawił drugie obok pierwszego — i to jest właśnie ten moment, przy którym warto się zatrzymać.",
        "Ruch jest jeden. Zanim założysz cokolwiek równoległego, nazwij jedną konkretną rzecz, która nie działa w tym, co już masz. Jedną, nie „wszystko”. Potem sprawdź, czy da się ją naprawić na miejscu — bo w dziewięciu przypadkach na dziesięć da się.",
        "Uczciwie o drugiej stronie: czasem starego naprawić się nie da i sto pięćdziesiąt metrów dalej jest właściwą odpowiedzią. Bywa, że cała organizacja kuchni była ułożona pod inny skład domu i inne godziny, i wtedy łatanie jej nie ma sensu. Warto też zauważyć, że w Grodzisku to ostatecznie zrosło się w jedno miasto — więc tamto rozwiązanie w końcu zadziałało.",
        "I uczciwie o sprzęcie. Thermomix bardzo często kupuje się właśnie jako system równoległy: zostaje stare gotowanie i dochodzi „gotowanie z urządzenia”, osobne, z osobnymi przepisami i osobnymi okazjami. Radzę odwrotnie i mówię to na każdej prezentacji: przenieście do niego dania, które i tak robicie co tydzień, zamiast zakładać obok drugą kuchnię.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grodzisku Wielkopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie pięć dań robicie najczęściej. To one trafią na spotkanie — nie żadne osobne menu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grodzisku Wielkopolskim"),
    sekcjaRaty("w Grodzisku Wielkopolskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Grodziska Wielkopolskiego",
      paragraphs: [
        "Grodzisk Wielkopolski jest siedzibą powiatu grodziskiego i leży na Pojezierzu Poznańskim. Samo miasto liczy 15 104 mieszkańców (GUS, 31.12.2024) na 18,2 kilometra kwadratowego, czyli osiemset dwadzieścia dziewięć osób na kilometr, a cała gmina miejsko-wiejska 20 355 osób na 134,7 kilometra i obejmuje dwadzieścia trzy miejscowości; gęstości dla gminy nie podaję, bo liczby ze źródeł się nie domykają. Pierwsza wzmianka pochodzi z 1257 roku, w formie „Grodzisze”, i dotyczy jeszcze wsi. Dokument z 1303 roku potwierdza wcześniejsze prawa miejskie — sam akt lokacyjny się nie zachował, więc roku nadania nie sposób podać. W 1593 roku Jan Ostroróg założył „Nowy Grodzisk”, a spis z tego samego roku wymienia około tysiąca stu sześćdziesięciu mieszkańców. Ród Opalińskich władał miastem w latach 1626–1775, drukarnia Melchiora Neringa działała w latach 1579–1581. Ratusz zaczęto budować około 1830 roku, a ostateczny kształt uzyskał w 1910. Miasto utraciło siedzibę powiatu w 1932 i odzyskało ją w 1999. Klub sportowy założono w 1922, stadion w 1925 — dziś mieści 5 383 osoby.",
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

  districtsHeading: "Do których części Grodziska Wielkopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do starej i nowej części, na osiedla i do centrum — oraz do wszystkich dwudziestu trzech miejscowości w gminie. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę miasta z członem „Wielkopolski”. Ten człon istnieje właśnie po to, żeby nie pomylić go z Grodziskiem Mazowieckim ani z licznymi Grodziskami w Polsce.",
  ],
  districts: [],

  nearbyHeading: "Poza Grodzisk Wielkopolski też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Opalenicy, Nowego Tomyśla, Wolsztyna, Buku i Rakoniewic — wszędzie bezpłatnie, tak samo jak w samym Grodzisku Wielkopolskim.",
  ],
  nearbyTowns: ["Opalenica", "Nowy Tomyśl", "Wolsztyn", "Buk", "Rakoniewice"],

  about: blokOMnie("do Grodziska Wielkopolskiego", "w Grodzisku Wielkopolskim i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grodziska Wielkopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: odmieniają się oba człony nazwy — „do Grodziska Wielkopolskiego”, „w Grodzisku Wielkopolskim”. I warto podawać pełną nazwę, bo Grodzisko to również wieś w gminie Pleszew, a Grodzisk Mazowiecki leży pod Warszawą.",
    },
    ...faqWspolne("w Grodzisku Wielkopolskim"),
    {
      question: "Zaczynam kolejny system planowania posiłków i znowu nie wytrzymuję tygodnia. Co robię źle?",
      answer:
        "Prawdopodobnie zakładasz drugie obok pierwszego, zamiast naprawić pierwsze. W 1593 roku Jan Ostroróg założył w Grodzisku nowe miasto sto pięćdziesiąt metrów od starego — dystans krótszy niż pierzeja rynku. W kuchni to jest druga lista obok pierwszej i druga półka obok tamtej. Koszt zawsze ten sam: od tej chwili trzeba utrzymywać dwa systemy. Zanim założysz kolejny, nazwij jedną konkretną rzecz, która nie działa w obecnym, i sprawdź, czy da się ją poprawić na miejscu.",
    },
    {
      question: "Czy po zakupie trzeba gotować zupełnie inaczej niż dotąd?",
      answer:
        "Nie i odradzam takie podejście. Najczęstszy błąd polega na potraktowaniu urządzenia jako osobnej kuchni — z osobnymi przepisami, osobnymi okazjami i osobnym menu — a wtedy dom prowadzi dwa sposoby gotowania naraz i oba kuleją. Radzę zacząć od przeniesienia pięciu dań, które i tak robicie co tydzień. Dopiero gdy te wejdą w rytm, warto sięgać po nowe. Na prezentacji pokazuję dokładnie tę kolejność.",
    },
  ],

  geo: { lat: 52.233, lng: 16.367 },
};
