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
 * DOLSK — powiat śremski, woj. wielkopolskie.
 *   ⚠ TEN SAM POWIAT CO KSIĄŻ WIELKOPOLSKI.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3026024 / 3026023).
 * MIASTO: 1 551 mieszkańców (GUS 31.12.2024),
 *   6,2 km², gęstość 250,2 os./km².
 *   ⚠ [ZW — 1 551 / 6,2 = 250,16. Różnica 0,04.
 *   DOMYKA SIĘ. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 5 779 osób, 124,5 km², gęstość
 *   46 os./km².
 *   ⚠ [ZW — 5 779 / 124,5 = 46,42. Różnica 0,42.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 30.
 *   ⚠⚠⚠ LICZBY SOŁECTW NIE USTALONO [NP] —
 *   NIE PODAJĘ I NIE PISZĘ „wszystkie sołectwa".
 *   W LEADZIE I W SEKCJI ADRESOWEJ MÓWIĘ
 *   O MIEJSCOWOŚCIACH.
 *   ⚠⚠ OBRĘBÓW (19) NIE PODAJĘ.
 *   MIEJSCOWOŚCI (część): Międzychód, Ostrowieczno,
 *   Ostrowieczko, Lubiatowo, Lubiatówko, Brześnica,
 *   Drzonek, Małachowo, Mełpin, Nowieczek, Rusocin,
 *   Trąbinek, Wieszczyczyn, Księginki.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 19,2 %. PODAJĘ.
 * JEZIORA: DOLSKIE WIELKIE i DOLSKIE MAŁE. PODAJĘ.
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1136 R.
 *   — PRAWA MIEJSKIE (średzkie): 1359 R.
 *     ⚠⚠ NADAWCY NIE WYMIENIAM — ZERO POSTACI
 *     POLITYCZNYCH.
 *   — RATUSZ: 1981 R., w zachodniej pierzei rynku.
 *     Poprzedni stał na środku rynku i zniknął w XIX w.
 *     ⚠⚠⚠ FIGURY Z PRZENIESIENIA RATUSZA NIE ROBIĘ —
 *     kąty „cztery naroża, sześć ulic" (Miejska Górka)
 *     i „to, co rzuca się w oczy, dobudowano później"
 *     (Czerniejewo) ZAJĘTE. PODAJĘ JAKO FAKT.
 *   — 1866 R.: pierwsze w Wielkopolsce kółko rolnicze.
 *     PODAJĘ JAKO FAKT, BEZ ROZWIJANIA.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 * ⚠ GEO: 51,9818 / 17,0628 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA:
 *   D. do DOLSKA · Ms. w DOLSKU · N. Dolskiem ·
 *   C. Dolskowi.
 *   PRZYMIOTNIK: DOLSKI — potwierdzony nazwami obu
 *   jezior (Dolskie Wielkie, Dolskie Małe).
 *   ⚠⚠⚠ UŻYWAM GO WYŁĄCZNIE W NAZWACH WŁASNYCH —
 *   „dolski" brzmi jak przymiotnik pospolity i poza
 *   nazwą własną jest mylący.
 *   ⚠⚠ BŁĘDY: „w Dolskim", „do Dolskiego".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — RÓŻNI JE WYŁĄCZNIE MIANOWNIK:
 *   W 1136 R. NAZWA BRZMIAŁA „DOLSKO" — RODZAJ NIJAKI.
 *   DZIŚ JEST „DOLSK" — RODZAJ MĘSKI.
 *   ZMIANA RODZAJU GRAMATYCZNEGO JEST DUŻA, A W MOWIE
 *   PRAWIE NIEWIDOCZNA: dopełniacz („Dolska"),
 *   narzędnik („Dolskiem") i miejscownik („w Dolsku")
 *   BRZMIAŁYBY TAK SAMO DLA OBU FORM.
 *   RÓŻNI JE WYŁĄCZNIE MIANOWNIK — jeden przypadek
 *   z siedmiu.
 *   ⚠⚠ NIE PODAJĘ, KIEDY NASTĄPIŁA ZMIANA — nie
 *   ustalono [NP].
 *   ⚠⚠ NIE TWIERDZĘ, ŻE „DOLSKO" BYŁO JEDYNĄ DAWNĄ
 *   FORMĄ.
 *
 * KĄT: ZMIANA WIDOCZNA TYLKO W JEDNYM MIEJSCU
 * — o tym, że po zmianie w kuchni przez tydzień nic
 * nie widać, bo akurat nie robiliście tej jednej
 * rzeczy, na której ta zmiana się ujawnia. Kąt
 * z Dolska: zmiana rodzaju, którą słychać wyłącznie
 * w mianowniku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1136 r. nazwa brzmiała „Dolsko", dziś brzmi
 *   „Dolsk", a w odmianie różni je tylko mianownik.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: zmieniacie coś —
 *   produkt, sposób, sprzęt — i przez tydzień nie
 *   widzicie różnicy, bo akurat nie robiliście dania,
 *   na którym ta różnica wychodzi,
 * — ⚠⚠ ŻE PROWADZI TO DO BŁĘDNEGO WNIOSKU: „nic się
 *   nie zmieniło", choć zmieniło się w jednym miejscu,
 *   do którego nie zajrzeliście,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: testować zmianę na daniu,
 *   którego najmocniej dotyczy, a nie na pierwszym
 *   z brzegu,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: brak różnicy też jest
 *   informacją. Jeśli po zmianie naprawdę nic się nie
 *   zmieniło, zmiana była niepotrzebna i można wrócić
 *   do poprzedniego sposobu bez żalu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO SAMO DOTYCZY ZAKUPU.
 *   Sprawdzajcie urządzenie na daniu, które robicie
 *   najczęściej i które kosztuje najwięcej czasu,
 *   a nie na najbardziej efektownym.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ — kąt
 *   zajęty (Sompolno). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam DWIE NAZWY
 *   KONKUROWAŁY ZE SOBĄ; tu jedna nazwa zmieniła
 *   rodzaj gramatyczny i prawie tego nie widać.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRAWA DOSTAŁA MIEJSCOWOŚĆ O INNEJ NAZWIE
 *   — kąt zajęty (Borek Wielkopolski). Tam nazwa
 *   zmieniła się CAŁA; tu zmieniła się KOŃCÓWKA.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO TO SAMO W INNYM JĘZYKU — kąt zajęty
 *   (Mikstat, ta sama fala).
 * — ⚠⚠ ZERO OBJAŚNIENIE DOPISANE PÓŹNIEJ — kąt zajęty
 *   (Tuliszków).
 * — ⚠⚠ ZERO CZTERY NAROŻA, SZEŚĆ ULIC — kąt zajęty
 *   (Miejska Górka). DLATEGO PRZENIESIENIA RATUSZA
 *   NIE ROBIĘ FIGURĄ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw ani obrębów.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ, kiedy zmieniła się forma nazwy.
 * — NIE TWIERDZĘ, że „Dolsko" było jedyną dawną formą.
 * — NIE WYMIENIAM nadawcy praw miejskich.
 * — NIE ROBIĘ FIGURY z przeniesienia ratusza.
 * — NIE UŻYWAM przymiotnika „dolski" poza nazwami
 *   własnymi.
 * — NIE PODAJĘ największej wsi ani wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Dolsk leży w powiecie śremskim, liczy 1 551
 *   mieszkańców (GUS, 31.12.2024) na 6,2 km², czyli
 *   250,2 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 5 779 osób
 *   na 124,5 km², czyli 46 osób na kilometr
 *   kwadratowy, przy lesistości 19,2 %
 *   i 30 miejscowościach,
 * — przy mieście leżą jeziora Dolskie Wielkie
 *   i Dolskie Małe,
 * — pierwsza wzmianka pochodzi z 1136 r., a nazwa
 *   brzmiała wtedy „Dolsko",
 * — prawa miejskie na prawie średzkim miasto otrzymało
 *   w 1359 r.,
 * — obecny ratusz z 1981 r. stoi w zachodniej pierzei
 *   rynku; poprzedni stał na środku i zniknął w XIX w.,
 * — w 1866 r. powstało tu pierwsze w Wielkopolsce
 *   kółko rolnicze,
 * — w gminie leżą m.in. Międzychód, Ostrowieczno,
 *   Ostrowieczko, Lubiatowo, Lubiatówko, Mełpin,
 *   Wieszczyczyn i Księginki.
 */
export const DOLSK: CityContent = {
  slug: "dolsk",
  h1: "Thermomix Dolsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dolsk — cena i prezentacja",
  seoDescription:
    "Thermomix w Dolsku w powiecie śremskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dolsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dolsku pod Śremem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dolska w powiecie śremskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzydziestu miejscowości w gminie.",

  highlights: highlightyStandardowe("Dolsk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kiedyś Dolsko, dziś Dolsk. Słychać to tylko w jednym przypadku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dolsku – jak wygląda prezentacja?",
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
      id: "jeden-przypadek",
      heading: "Zmiana widoczna tylko w jednym miejscu",
      paragraphs: [
        "W pierwszej wzmiance z 1136 roku nazwa tego miasta brzmiała „Dolsko”. Dziś brzmi „Dolsk”. To zmiana rodzaju gramatycznego — z nijakiego na męski — a więc rzecz, która powinna być dobrze słyszalna.",
        "Tyle że prawie jej nie słychać. Dopełniacz brzmiałby „Dolska” w obu wersjach. Narzędnik — „Dolskiem” w obu. Miejscownik — „w Dolsku” w obu. Różni je wyłącznie mianownik: jeden przypadek z siedmiu. Przez pozostałe sześć nic się nie stało. Kiedy dokładnie zaszła ta zmiana, nie ustaliłam.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, w którym dwie nazwy konkurowały ze sobą, aż jedna wygrała — tam były dwie nazwy naraz. Tutaj nazwa jest jedna i zmieniła się w niej końcówka. I drugie rozróżnienie: pisałam też o mieście, w którym nazwa zmieniła się w całości, przy zachowanych prawach; tu zmieniła się jedna litera na końcu.",
        "Piszę o tym, bo w kuchni zmiany zachowują się dokładnie tak samo i prowadzą nas na manowce.",
        "Zmieniacie coś: inny rodzaj mąki, inny sposób podsmażania, nowy garnek, inny moment dodawania czegoś. Mija tydzień i nic się nie zmieniło. Wszystko smakuje tak samo, wszystko trwa tyle samo. Wniosek nasuwa się sam: to nie miało znaczenia.",
        "A najczęściej miało — tylko w jednym miejscu, do którego akurat nie zajrzeliście. Zmiana mąki nie zmieni naleśników, ale zmieni ciasto drożdżowe. Inny garnek nie zmieni makaronu, ale zmieni wszystko, co się długo dusi. Przez ten tydzień po prostu nie było okazji, żeby różnica się pokazała.",
        "Ruch jest jeden: testować zmianę na daniu, którego najmocniej dotyczy, a nie na pierwszym z brzegu. Jeśli zmieniacie coś, co pracuje przy długim gotowaniu — sprawdźcie na czymś, co się długo gotuje. Jeśli coś, co ma znaczenie przy wyrastaniu — sprawdźcie na cieście. Jeden celowy test mówi więcej niż tydzień przypadkowych obiadów.",
        "Uczciwie o drugiej stronie, bo brak różnicy też jest informacją i to dobrą. Jeśli po celowym sprawdzeniu naprawdę nic się nie zmieniło, to zmiana była niepotrzebna — i można wrócić do poprzedniego sposobu bez żalu, a często i bez kosztu. To jest wynik, a nie porażka.",
        "I uczciwie o sprzęcie, bo dotyczy to także zakupu. Thermomix sprawdzajcie na daniu, które robicie najczęściej i które kosztuje Was najwięcej czasu — a nie na najbardziej efektownym. Efektowne robi wrażenie na prezentacji i nie wraca potem przez rok; codzienne rozstrzyga, czy urządzenie się Wam opłaci. Dlatego zwykle proszę o podanie właśnie takiego dania, zanim przyjadę.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dolsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie robicie najczęściej i które zabiera Wam najwięcej czasu. To najlepszy materiał na prezentację.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dolsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Dolska",
      paragraphs: [
        "Dolsk leży w powiecie śremskim i liczy 1 551 mieszkańców (GUS, 31.12.2024) na sześciu i dwóch dziesiątych kilometra kwadratowego, czyli dwieście pięćdziesiąt i dwie dziesiąte osoby na kilometr kwadratowy. Cała gmina miejsko-wiejska to 5 779 osób na stu dwudziestu czterech i pięciu dziesiątych kilometra kwadratowego, czyli czterdzieści sześć osób na kilometr, przy lesistości dziewiętnastu i dwóch dziesiątych procenta i trzydziestu miejscowościach; liczby sołectw nie udało mi się ustalić, więc jej nie podaję. Przy mieście leżą jeziora Dolskie Wielkie i Dolskie Małe. Pierwsza wzmianka pochodzi z 1136 roku, a prawa miejskie na prawie średzkim miasto otrzymało w 1359. Obecny ratusz z 1981 roku stoi w zachodniej pierzei rynku; poprzedni stał na jego środku i zniknął w XIX wieku. W 1866 roku powstało tu pierwsze w Wielkopolsce kółko rolnicze.",
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

  districtsHeading: "Do których części gminy Dolsk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu miejscowości w gminie. Nazywają się między innymi: Międzychód, Ostrowieczno, Ostrowieczko, Lubiatowo, Lubiatówko, Brześnica, Drzonek, Małachowo, Mełpin, Nowieczek, Rusocin, Trąbinek, Wieszczyczyn i Księginki. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: jedna ze wsi gminy nazywa się Międzychód — tak samo jak miasto powiatowe w zachodniej Wielkopolsce — więc przy umawianiu warto dopowiedzieć „Międzychód w gminie Dolsk”. Osobno są też Ostrowieczno i Ostrowieczko oraz Lubiatowo i Lubiatówko; każda z tych par różni się jedną literą. Druga, językowa: mówi się „do Dolska” i „w Dolsku”, a nie „do Dolskiego” ani „w Dolskim”. Przymiotnik „dolski” brzmi jak zwykłe słowo, więc używam go tylko w nazwach własnych — na przykład jezior Dolskie Wielkie i Dolskie Małe.",
  ],
  districts: [],

  nearbyHeading: "Poza Dolsk też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Śremu, Książa Wielkopolskiego, Krzywinia, Gostynia, Kościana i Borku Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samym Dolsku.",
  ],
  nearbyTowns: ["Śrem", "Książ Wielkopolski", "Krzywiń", "Gostyń", "Kościan", "Borek Wielkopolski"],

  about: blokOMnie("do Dolska", "w Dolsku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dolska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa: jedna ze wsi gminy nazywa się Międzychód, tak samo jak miasto powiatowe w zachodniej Wielkopolsce — warto dopowiedzieć „w gminie Dolsk”. Osobno są też Ostrowieczno i Ostrowieczko oraz Lubiatowo i Lubiatówko. Językowo: „do Dolska” i „w Dolsku”, nie „do Dolskiego”.",
    },
    ...faqWspolne("w Dolsku"),
    {
      question: "Zmieniłam jedną rzecz w gotowaniu i nie widzę żadnej różnicy. Czy to znaczy, że nie miało to sensu?",
      answer:
        "Niekoniecznie — być może różnica jest w miejscu, do którego akurat nie zajrzeliście. Dolsk jest tu dobrym obrazem: w 1136 roku nazwa brzmiała „Dolsko”, dziś brzmi „Dolsk”, czyli zmienił się rodzaj gramatyczny — a w odmianie słychać to wyłącznie w mianowniku, bo „do Dolska”, „w Dolsku” i „Dolskiem” brzmią tak samo dla obu wersji. W kuchni działa to identycznie: inna mąka nie zmieni naleśników, ale zmieni ciasto drożdżowe; inny garnek nie zmieni makaronu, ale zmieni wszystko, co się długo dusi. Ruch jest prosty: sprawdźcie zmianę na daniu, którego najmocniej dotyczy, a nie na pierwszym z brzegu. A jeśli i wtedy nic się nie zmieni — to też jest wynik: zmiana była niepotrzebna i można wrócić do starego sposobu bez żalu.",
    },
    {
      question: "Na czym najlepiej sprawdzić urządzenie przed zakupem?",
      answer:
        "Na daniu, które robicie najczęściej i które kosztuje Was najwięcej czasu — a nie na najbardziej efektownym. Efektowne robi wrażenie na prezentacji i potem nie wraca przez rok; codzienne rozstrzyga, czy zakup się Wam opłaci. Dlatego przy umawianiu proszę zwykle o podanie właśnie takiego dania i to je gotujemy, nawet jeśli wygląda zupełnie zwyczajnie. Jeśli po takim teście stwierdzicie, że różnica jest mała, powiem to razem z Wami — to uczciwszy wynik niż pokaz, który niczego nie sprawdza.",
    },
  ],

  geo: { lat: 51.9818, lng: 17.0628 },
};
