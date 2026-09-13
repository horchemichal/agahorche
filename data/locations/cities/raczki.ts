import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * RACZKI — ⚠⚠ GMINA WIEJSKA w powiecie suwalskim.
 * SIEDZIBĄ JEST WIEŚ, NIE MIASTO. NIGDZIE NIE PISZĘ „MIASTO".
 * GMINA 5 646 (GUS 31.12.2024), 142,2 km², 36 miejscowości.
 * ⚠ Ludność samej wsi znam tylko z NSP 2021 (2 195) —
 *   NIE PODAJĘ JEJ JAKO AKTUALNEJ.
 *
 * ⚠ DAWNE PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE: 1558 / początek
 * XVII w. / 1703. Dwa źródła podają przy 1703 r. „Augusta III",
 * co jest błędem chronologicznym. UTRATA 1867 lub ok. 1870.
 * ⚠⚠ ŻADNEJ Z TYCH DAT NIE PODAJĘ. Piszę ogólnie, że Raczki
 *   były dawniej miastem i prawa utraciły w XIX wieku.
 *
 * GEOGRAFIA: nad ROSPUDĄ, która ma charakter rzeki górskiej —
 * różnica poziomów 16 m, średni spadek 0,94‰, miejscami
 * do 3,5‰. Szlak kajakowy 68 km przez dziewięć jezior,
 * w tym JEZIORO BOLESTY. Wieża widokowa nad Bolestami z 2014 r.
 *
 * PACOWIE OD 1748 r.: garbarnie, ⚠⚠ WYRÓB SERÓW, bielniki
 * lniane i pierwsza w regionie fabryka maszyn rolniczych
 * (sieczkarnie, młockarnie). Pod koniec XVIII w. browary,
 * garbarnie i młynarstwo.
 * KOŚCIÓŁ TRÓJCY PRZENAJŚWIĘTSZEJ 1767–1811, KLASYCYSTYCZNY,
 * 12 KOLUMN JOŃSKICH, dziewięć ołtarzy.
 * RUINY PAŁACU PACÓW W DOWSPUDZIE (po 1815 r.), „ARKADA PACA".
 *
 * ⚠⚠ „PALINOCKA NAD ROSPUDĄ" — PODSTAWA KĄTA:
 * XVII edycja 25 czerwca 2021 r., czyli od ok. 2005 r.
 * Plecenie wianków, skoki przez ogień, puszczanie wianków
 * na Rospudzie i ⚠⚠ DOMOWE JEDZENIE PRZYGOTOWANE PRZEZ
 * MIESZKAŃCÓW. To jest kotwica.
 *
 * ⚠ BUNKRÓW „MAZURSKIEJ POZYCJI GRANICZNEJ" NIE WYMIENIAM.
 *
 * KĄT: GOTOWANIE SKŁADKOWE — GDY KAŻDY PRZYNOSI SWOJE.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że stół, na który wszyscy coś przynoszą, to osobna
 *   dyscyplina i rządzi się innymi prawami niż gotowanie
 *   dla gości u siebie,
 * — GŁÓWNY PROBLEM: nikt się nie umawia, więc przyjeżdża
 *   siedem sałatek i żadnego ciepłego dania,
 * — że rozwiązanie jest banalne i prawie nikt go nie stosuje:
 *   ktoś jeden musi powiedzieć, czego brakuje,
 * — DRUGI PROBLEM: transport. Danie musi przetrwać drogę,
 *   a to eliminuje połowę tego, co dobrze wygląda w domu,
 * — CO SIĘ WOZI DOBRZE: rzeczy gęste, pieczone, w jednym
 *   naczyniu, ciasta bez kremu, pasty i smarowidła,
 * — CO SIĘ WOZI ŹLE: wszystko, co się rozwarstwia, wszystko
 *   polane sosem, wszystko chrupiące,
 * — TRZECI PROBLEM, o którym się nie mówi: temperatura.
 *   Na miejscu zwykle nie ma jak nic odgrzać, więc danie
 *   musi być dobre także letnie,
 * — że to jest właściwe kryterium wyboru: nie „czy smaczne",
 *   tylko „czy smaczne po dwóch godzinach",
 * — CZWARTA RZECZ: ilość. Lepiej mniej i dobrze niż dużo
 *   i byle jak, bo przy siedmiu daniach nikt nie zje
 *   dużej porcji żadnego,
 * — PIĄTA: naczynie musi wrócić do właściciela — banał,
 *   a psuje najwięcej nastrojów,
 * — UCZCIWIE: urządzenie nie pomoże w transporcie i nie
 *   podgrzeje niczego na miejscu,
 * — ale robi to, co przy składkowym liczy się najbardziej:
 *   pozwala zrobić rzecz porządną w dniu, w którym i tak
 *   jest dużo do zrobienia, bez stania nad garnkiem —
 *   a pasty, kremy i ciasta wychodzą powtarzalnie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   w kategoriach zdrowotnych. ZERO bakterii, ZERO zatrucia,
 *   ZERO „ile godzin można trzymać". Piszę o SMAKU
 *   i KONSYSTENCJI po transporcie. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO oceniania cudzych dań i cudzych gospodyń.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, bunkrów, podziemia, powstań.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ⚠ Palinockę opisuję jako imprezę plenerową; ognia
 *   i wianków NIE interpretuję religijnie ani obrzędowo.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie dla ekipy"
 * dotyczy liczby jedzących przy jednym gospodarzu. „Wesele
 * i przyjęcie w domu" dotyczy dużej imprezy u siebie.
 * „Niedzielne popołudnie" dotyczy kawy i ciasta dla gości.
 * „Goście bez zapowiedzi" dotyczą braku czasu. „Jedzenie
 * w drogę" dotyczy jedzenia w podróży. Tutaj chodzi o STÓŁ
 * SKŁADANY Z WIELU DOMÓW, gdzie nikt nie panuje nad całością.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Raczek miastem. To WIEŚ i gmina wiejska.
 * — NIE PODAJĘ dat dawnych praw miejskich.
 * — NIE PODAJĘ liczby mieszkańców samej wsi.
 * — NIE PISZĘ o bunkrach.
 * — NIE MYLĘ RACZEK z RACZKAMI ELBLĄSKIMI ani z RĄCZKAMI.
 *   ⚠ Notatka projektowa zapisała „Rączki" — to BŁĄD,
 *   poprawna nazwa to RACZKI. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina wiejska licząca ponad pięć i pół tysiąca
 *   mieszkańców na 142,2 km², z trzydziestoma sześcioma
 *   miejscowościami; Raczki były dawniej miastem, prawa
 *   utraciły w XIX wieku,
 * — wieś leży nad Rospudą, która ma charakter rzeki górskiej:
 *   szesnaście metrów różnicy poziomów, średni spadek 0,94
 *   promila, miejscami do 3,5; szlak kajakowy liczy 68 km
 *   i prowadzi przez dziewięć jezior, w tym Bolesty, nad
 *   którymi w 2014 r. stanęła wieża widokowa,
 * — od 1748 r. dobra należały do Paców: działały tu garbarnie,
 *   wyrób serów, bielniki lniane i pierwsza w regionie fabryka
 *   maszyn rolniczych produkująca sieczkarnie i młockarnie;
 *   pod koniec XVIII w. browary, garbarnie i młynarstwo,
 * — klasycystyczny kościół Trójcy Przenajświętszej z lat
 *   1767–1811 ma dwanaście kolumn jońskich i dziewięć ołtarzy,
 *   a w Dowspudzie stoją ruiny pałacu Paców wzniesionego
 *   po 1815 r., z „Arkadą Paca”,
 * — „Palinocka nad Rospudą” to impreza plenerowa organizowana
 *   od około 2005 r. — siedemnasta edycja odbyła się 25 czerwca
 *   2021 r. — z pleceniem wianków, puszczaniem ich na rzece
 *   i domowym jedzeniem przygotowanym przez mieszkańców.
 */
export const RACZKI: CityContent = {
  slug: "raczki",
  h1: "Thermomix Raczki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Raczki — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Raczkach: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Raczki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Raczkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Raczek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy.",

  highlights: highlightyStandardowe("Raczki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na składkowym liczy się to, jak danie smakuje po dwóch godzinach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Raczkach – jak wygląda prezentacja?",
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
      id: "skladkowe",
      heading: "Palinocka nad Rospudą, gdzie jedzenie przynoszą mieszkańcy — czyli o gotowaniu składkowym",
      paragraphs: [
        "„Palinocka nad Rospudą” organizowana tu od blisko dwudziestu lat ma jedną cechę, którą lubię najbardziej: jedzenie przygotowują mieszkańcy i przynoszą je ze sobą. Wianki, rzeka, ogień — a obok stół złożony z kilkunastu domowych kuchni naraz.",
        "Stół składkowy to osobna dyscyplina. Rządzi się zupełnie innymi prawami niż gotowanie dla gości u siebie, a prawie nikt tych praw nikomu nie tłumaczy.",
        "Problem pierwszy i najczęstszy: nikt się nie umawia. Wszyscy myślą podobnie, więc przyjeżdża siedem sałatek, cztery serniki i ani jednego ciepłego dania. Rozwiązanie jest banalne i prawie nigdy niestosowane — wystarczy, że jedna osoba napisze wcześniej, czego brakuje. Nie musi nikomu nic narzucać, wystarczy powiedzieć „mamy dużo słodkiego, przydałoby się coś ciepłego”.",
        "Problem drugi: transport. Danie musi przetrwać drogę i to eliminuje mniej więcej połowę rzeczy, które w domu wyglądają świetnie. Wozi się dobrze wszystko gęste, pieczone, w jednym naczyniu, ciasta bez kremu, pasty i smarowidła. Wozi się źle wszystko, co się rozwarstwia, wszystko polane sosem z góry i wszystko, co ma być chrupiące — bo chrupkość nie przeżywa nawet piętnastu minut pod przykryciem.",
        "Problem trzeci, o którym mówi się najrzadziej: temperatura. Na miejscu zwykle nie ma jak niczego odgrzać, a nawet jeśli jest, to kolejka do jednego mikrofalowego urządzenia zabija cały wieczór. Danie musi być dobre także letnie.",
        "I to jest właściwe kryterium wyboru. Nie „czy to jest smaczne”, tylko „czy to jest smaczne po dwóch godzinach”. Zupełnie inne pytanie i zupełnie inna lista odpowiedzi.",
        "Rzecz czwarta: ilość. Przy siedmiu daniach nikt nie zje dużej porcji żadnego, więc lepiej przywieźć mniej i porządnie zrobione niż dużo i byle jak. Połowa jedzenia na składkowych wraca do domu, a wraca zwykle to, czego było najwięcej.",
        "Rzecz piąta, śmiesznie prozaiczna, a psująca najwięcej nastrojów: naczynie musi wrócić do właściciela. Podpisana taśma na spodzie miski rozwiązuje problem, który potrafi ciągnąć się miesiącami.",
        "Teraz uczciwie o sprzęcie. Thermomix nie pomoże w transporcie, nie utrzyma dania w cieple w drodze i nie podgrzeje niczego na miejscu — to wszystko jest poza jego zasięgiem.",
        "Robi natomiast to, co przy składkowym liczy się najbardziej. Pozwala zrobić rzecz porządną w dniu, w którym i tak jest dużo do zrobienia, bez stania nad garnkiem — bo przygotowanie idzie w tle, gdy Ty się szykujesz. A pasty, kremy, ciasta i wszystko, co się miksuje, wychodzą za każdym razem tak samo, więc nie ma ryzyka, że akurat tym razem nie wyjdzie. Przy jedzeniu, które ma jechać do ludzi, powtarzalność jest warta więcej niż fantazja.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Raczkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy często coś zawozicie na wspólne spotkania. Wtedy pokażę rzeczy, które dobrze znoszą drogę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Raczkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla raczkowskiej rodziny",
      paragraphs: [
        "Gmina Raczki liczy ponad pięć i pół tysiąca mieszkańców na stu czterdziestu dwóch kilometrach kwadratowych i obejmuje trzydzieści sześć miejscowości. Same Raczki były dawniej miastem — prawa utraciły w XIX wieku. Wieś leży nad Rospudą, rzeką o charakterze górskim: szesnaście metrów różnicy poziomów i średni spadek bliski jednemu promilowi, miejscami ponad trzykrotnie większy. Szlak kajakowy liczy tu sześćdziesiąt osiem kilometrów i prowadzi przez dziewięć jezior, w tym Bolesty, nad którymi w 2014 roku stanęła wieża widokowa. Od 1748 roku dobra należały do Paców i za nich działały tu garbarnie, wyrób serów, bielniki lniane oraz pierwsza w regionie fabryka maszyn rolniczych, produkująca sieczkarnie i młockarnie; pod koniec XVIII wieku pracowały browary i młyny. Klasycystyczny kościół Trójcy Przenajświętszej z lat 1767–1811 ma dwanaście kolumn jońskich i dziewięć ołtarzy, a w pobliskiej Dowspudzie stoją ruiny pałacu Paców wzniesionego po 1815 roku, z zachowaną „Arkadą Paca”.",
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

  districtsHeading: "Do których części gminy Raczki dojeżdżam?",
  districtsParagraphs: [
    "Do Raczek i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Raczki też przyjadę",
  nearbyParagraphs: [
    "Suwałki, Augustów, Bakałarzewo, Filipów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Suwałki", "Augustów", "Bakałarzewo", "Filipów"],

  about: blokOMnie("do Raczek", "w Raczkach i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Raczek bez dodatkowej opłaty?",
      answer:
        "Tak, do Raczek i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Raczki w powiecie suwalskim, a nie o Raczki Elbląskie.",
    },
    ...faqWspolne("w Raczkach"),
    {
      question: "Co najlepiej zabrać na spotkanie składkowe?",
      answer:
        "Rzeczy gęste, pieczone, w jednym naczyniu, ciasta bez kremu, pasty i smarowidła. Źle znoszą drogę wszystkie dania, które się rozwarstwiają, polane sosem z góry i wszystko, co ma być chrupiące — chrupkość nie przeżywa nawet kwadransa pod przykryciem.",
    },
    {
      question: "Jak wybrać danie na wspólny stół?",
      answer:
        "Zadając inne pytanie niż zwykle: nie „czy to jest smaczne”, tylko „czy to jest smaczne po dwóch godzinach”. Na miejscu rzadko da się cokolwiek odgrzać, więc danie musi być dobre także letnie. I lepiej przywieźć mniej, ale porządnie zrobione — przy siedmiu potrawach nikt nie zje dużej porcji żadnej.",
    },
    {
      question: "Czy Thermomix pomaga przy takich okazjach?",
      answer:
        "Nie w transporcie i nie w podgrzewaniu na miejscu — to jest poza jego zasięgiem. Pomaga wcześniej: pozwala zrobić rzecz porządną bez stania nad garnkiem w dniu, w którym i tak jest dużo do zrobienia, a pasty, kremy i ciasta wychodzą powtarzalnie, więc nie ma ryzyka, że akurat tym razem nie wyjdzie.",
    },
  ],

  geo: { lat: 53.9906, lng: 22.7669 },
};
