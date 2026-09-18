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
 * TRZCIEL — powiat międzyrzecki, woj. lubuskie.
 * MIASTO 2 213 (GUS 31.12.2024), 3,0 km².
 * Gmina miejsko-wiejska, 177,35 km², 17 wsi.
 *
 * ⚠⚠ HOMONIMY — KLUCZOWE:
 * TRZCIEL ≠ TRZCIANKA ≠ TRZCIANA ≠ TRZCIANNE.
 * FAQ to rozróżnia.
 * ⚠ TRZCIEL ≠ PSZCZEW — to sąsiednia, ODRĘBNA gmina
 *   i odrębna miejscowość z własną stroną w serwisie.
 *   NIE MIESZAM FAKTÓW.
 *
 * HISTORIA:
 * — niektóre prawa miejskie już w 1329 r., PEŁNE PRAWA
 *   MIEJSKIE w 1458 r. od Kazimierza Jagiellończyka,
 * — uprawa chmielu została wyparta w XIX stuleciu przez
 *   wikliniarstwo (strona gminy, potwierdzone odczytem),
 *   ⚠⚠ KĄTA GORYCZOWEGO NIE UŻYWAM — „GORYCZ W KUCHNI"
 *     JEST ZAJĘTA. Chmiel pojawia się WYŁĄCZNIE jako fakt
 *     w bloku o mieście. ZERO PIWA I ALKOHOLU.
 * — ⚠⚠ TRZCIEL ZNANY Z WYROBÓW WIKLINIARSKO-TRZCINIARSKICH
 *   — MEBLI I KOSZY. TO JEST KOTWICA. Sama nazwa miasta
 *   pochodzi od trzciny.
 *   ⚠ KĄTA „PRACA WYKONYWANA W DOMU / wiklinę plecie się"
 *     NIE POWTARZAM — jest zajęty przy innym mieście.
 *     Wiklina jest tu KOTWICĄ PRZEDMIOTOWĄ (kosz jako
 *     pojemnik), nie tematem pracy.
 * — właściciele: Ostrorogowie (XVI–XVII w.), Opalińscy
 *   (XVIII w.),
 * — poczta od 1810 r.; kolej Zbąszyń–Międzychód 1911 r.;
 *   linia do Lutola Suchego otwarta 13 września 1929 r.,
 * — Obra dzieliła miasto na Stare Miasto (wschód) i Nowe
 *   Miasto (zachód); POŁĄCZONO JE W 1888 r.
 *
 * ⚠⚠ SZPARAGÓW NIE ROBIĘ TEMATEM. Trzciel jest nazywany
 * „szparagowym zagłębiem" i jest to fakt potwierdzony,
 * ALE KĄT SZPARAGOWY JEST ZAJĘTY PRZEZ OŚNO LUBUSKIE.
 * W TEKŚCIE SZPARAGI POJAWIAJĄ SIĘ WYŁĄCZNIE JAKO JEDNO
 * ZDANIE FAKTOGRAFICZNE W BLOKU O MIEŚCIE. TWARDA GRANICA.
 *
 * GEOGRAFIA: miasto nad Obrą, między jeziorami MŁYŃSKIM
 * i WIELKIM; Pszczewski Park Krajobrazowy utworzony
 * w 1986 r.; rezerwaty RYBOJADY i CZARNA DROGA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: WARZYWA, KTÓRE NIE POWINNY LEŻEĆ W LODÓWCE —
 * gdzie naprawdę trzymać ziemniaki, cebulę i pomidory.
 * Kąt od koszy i plecionek, z których Trzciel jest znany,
 * i od samej nazwy miasta, wziętej od trzciny — czyli
 * od pojemnika, który przepuszcza powietrze.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że lodówka nie jest uniwersalnym miejscem na warzywa
 *   i owoce, a kilku produktom wręcz szkodzi,
 * — CO TRACI W LODÓWCE:
 *   — ZIEMNIAKI — w zimnie robią się słodkawe i zmieniają
 *     smak po usmażeniu,
 *   — CEBULA I CZOSNEK — miękną i pleśnieją, bo lodówka
 *     jest wilgotna,
 *   — POMIDORY — tracą aromat i robią się mączyste,
 *   — BAZYLIA — czernieje,
 *   — DYNIA, BANANY i AWOKADO przed dojrzeniem,
 * — CO DO LODÓWKI NALEŻY: warzywa liściaste, marchew,
 *   brokuł, kalafior, jagody, twarde zioła w słoiczku
 *   z wodą,
 * — ŻE ZIEMNIAKI I CEBULĘ TRZYMA SIĘ OSOBNO, bo razem
 *   psują się szybciej,
 * — ŻE JABŁKA PRZYSPIESZAJĄ DOJRZEWANIE SĄSIADÓW —
 *   i że można to wykorzystać świadomie, kładąc twarde
 *   awokado obok jabłka,
 * — ŻE WARUNKI SĄ TRZY: ciemno, sucho, przewiewnie —
 *   dlatego kosz albo skrzynka sprawdzają się lepiej
 *   niż zamknięta szafka i znacznie lepiej niż
 *   foliowa torba,
 * — ŻE FOLIA TO WILGOĆ, A WILGOĆ TO PLEŚŃ — pierwsza
 *   rzecz po powrocie z zakupów to wyjęcie warzyw
 *   z torebek,
 * — ŻE ZIELONE ZIEMNIAKI I KIEŁKI TO SYGNAŁ, ŻE STAŁY
 *   W ŚWIETLE — ⚠ PISZĘ WYŁĄCZNIE, ŻE TAKIE MIEJSCA
 *   ODCINAM I ŻE LEPIEJ DO TEGO NIE DOPUSZCZAĆ,
 *   BEZ ŻADNYCH TEZ TOKSYKOLOGICZNYCH. TWARDA GRANICA.
 * — CO Z TEGO WYNIKA PRAKTYCZNIE: skrzynka albo kosz
 *   w najchłodniejszym, najciemniejszym kącie; cebula
 *   i czosnek osobno; pomidory na blacie,
 * — UCZCIWIE: urządzenie niczego nie przechowuje,
 * — ale pomaga w jednej rzeczy: gdy widać, że coś zaraz
 *   przejdzie, w kilka minut robi z tego zupę, przecier
 *   albo pastę, którą da się zamrozić — i to jest
 *   najprostszy sposób, żeby nadmiar nie wylądował
 *   w koszu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I TOKSYKOLOGICZNYCH.
 *   Przy zielonych ziemniakach piszę WYŁĄCZNIE o odcinaniu
 *   i o przechowywaniu. ZERO tez o solaninie, pleśniach
 *   i zatruciach. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO ALKOHOLU I PIWA.
 * — ⚠ ZERO szparagów jako tematu.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ KIRKUT WYMIENIAM WYŁĄCZNIE W NOTATCE, NIE W TEKŚCIE.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „LODÓWKA" dotyczy TEGO, CO W LODÓWCE JEST i jak ją
 *   układać.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy PRODUKTÓW SYPKICH
 *   w szafce.
 * — „KISZONKI I ZAKWAS" dotyczą FERMENTACJI.
 * — „gotowanie na zapas i odkładanie porcji do zamrażarki"
 *   dotyczy GOTOWYCH DAŃ.
 * TUTAJ chodzi WYŁĄCZNIE o ŚWIEŻE WARZYWA I OWOCE POZA
 * LODÓWKĄ — o produkty, którym chłód szkodzi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ areału ani dat uprawy chmielu.
 * — NIE PISZĘ O PIWIE ANI BROWARNICTWIE.
 * — NIE ROBIĘ ZE SZPARAGÓW TEMATU (kąt zajęty).
 * — NIE PODAJĘ przywilejów targowych ani młynów —
 *   nieustalone.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE MYLĘ TRZCIELA z TRZCIANKĄ, TRZCIANĄ ani TRZCIANNEM.
 * — NIE MYLĘ TRZCIELA z PSZCZEWEM.
 * — districts: Stare i Nowe Miasto to historyczne części
 *   połączone w 1888 r. — WYMIENIAM JE W districtsParagraphs,
 *   ale districts zostaje PUSTĄ TABLICĄ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Trzciel otrzymał niektóre prawa miejskie w 1329 r.,
 *   a pełne w 1458 r. od Kazimierza Jagiellończyka,
 * — miasto jest znane z wyrobów wikliniarsko-trzciniarskich
 *   — mebli i koszy; według strony gminy uprawę chmielu
 *   wyparło tu w XIX stuleciu wikliniarstwo; uprawia się
 *   tu również szparagi,
 * — właścicielami miasta byli Ostrorogowie w XVI i XVII w.,
 *   a w XVIII w. Opalińscy,
 * — Obra dzieliła miejscowość na Stare Miasto po stronie
 *   wschodniej i Nowe Miasto po zachodniej; połączono je
 *   w 1888 r.,
 * — poczta działa od 1810 r., kolej ze Zbąszynia
 *   do Międzychodu powstała w 1911 r., a linię do Lutola
 *   Suchego otwarto 13 września 1929 r.,
 * — miasto leży nad Obrą, między jeziorami Młyńskim
 *   i Wielkim; w 1986 r. utworzono Pszczewski Park
 *   Krajobrazowy, a w gminie leżą rezerwaty Rybojady
 *   i Czarna Droga,
 * — kościół pw. św. Wojciecha jest neogotycki, z 1824 r.,
 *   z barokowym wyposażeniem; zachowały się domy szachulcowe
 *   z XVIII i XIX w. oraz grodzisko z połowy XIII w.
 */
export const TRZCIEL: CityContent = {
  slug: "trzciel",
  h1: "Thermomix Trzciel – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Trzciel — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Trzcielu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Trzciel — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Trzcielu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Trzciela z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Trzciel"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kilku warzywom lodówka wyraźnie szkodzi — i to te najczęściej kupowane.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzcielu – jak wygląda prezentacja?",
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
      id: "warzywa-poza-lodowka",
      heading: "Miasto koszy i plecionek — czyli o warzywach, które nie powinny leżeć w lodówce",
      paragraphs: [
        "Trzciel bierze nazwę od trzciny i do dziś jest znany z wyrobów wikliniarsko-trzciniarskich — mebli i koszy. Kosz jest przy tym rzeczą, o której w kuchni zapomnieliśmy, a która rozwiązuje konkretny problem: jest pojemnikiem, który przepuszcza powietrze. A powietrze to dokładnie to, czego brakuje warzywom zamkniętym w foliowej torebce w szufladzie lodówki.",
        "Bo lodówka nie jest uniwersalnym miejscem na warzywa i owoce. Kilku produktom — i to akurat tym, które kupujemy najczęściej — wyraźnie szkodzi.",
        "Ziemniaki w zimnie robią się słodkawe. To nie jest wrażenie: zmienia się w nich skrobia i po usmażeniu czuć to od razu, a frytki i placki wychodzą inne niż zwykle. Cebula i czosnek w lodówce miękną i pleśnieją, bo lodówka jest wilgotna, a one potrzebują suchego przewiewu. Pomidory tracą aromat i robią się mączyste — to chyba najbardziej powszechny błąd w polskich kuchniach. Bazylia czernieje w jedną noc. Dynia, banany i niedojrzałe awokado też nie mają w lodówce czego szukać.",
        "Co natomiast do lodówki należy: warzywa liściaste, marchew, brokuł, kalafior, jagody i owoce miękkie, a także twarde zioła — natka, koperek, mięta — wstawione jak kwiaty do słoiczka z wodą.",
        "Dwie zasady, które oszczędzają najwięcej. Pierwsza: ziemniaki i cebulę trzyma się osobno. Razem psują się szybciej, cebula popycha ziemniaki do kiełkowania. Druga: jabłka przyspieszają dojrzewanie wszystkiego, co leży obok. Zwykle to problem — ale można go odwrócić i położyć twarde awokado albo niedojrzałe gruszki obok jabłka, żeby doszły w dwa dni zamiast w tydzień.",
        "Warunki są w gruncie rzeczy trzy: ciemno, sucho i przewiewnie. I właśnie dlatego kosz albo drewniana skrzynka sprawdzają się lepiej niż szczelnie zamknięta szafka, a nieporównanie lepiej niż foliowa torba. Folia oznacza wilgoć, wilgoć oznacza pleśń — dlatego pierwsza rzecz po powrocie z zakupów to wyjęcie warzyw z torebek, a nie wstawienie ich w nich do lodówki.",
        "Zielone plamy i kiełki na ziemniakach to sygnał, że stały w świetle. Takie miejsca się po prostu odcina, ale znacznie prościej jest do tego nie dopuścić — wystarczy najciemniejszy kąt, jaki macie, i coś, co nie przepuszcza światła.",
        "Praktycznie sprowadza się to do kilku ruchów. Skrzynka albo kosz na ziemniaki w najchłodniejszym i najciemniejszym miejscu, byle nie przy piekarniku. Cebula i czosnek osobno, w czymś przewiewnym. Pomidory na blacie, nie w lodówce. Zioła miękkie do wody. Reszta do szuflady, ale bez folii.",
        "Teraz uczciwie o sprzęcie. Thermomix niczego nie przechowuje i w tym temacie nie ma nic do zaoferowania. Warzywa leżą tam, gdzie je położycie.",
        "Pomaga jednak w rzeczy, która jest naturalnym dopełnieniem: kiedy widać, że coś zaraz przejdzie — pomidory zmiękły, cebula zaczyna kiełkować, marchew wiotczeje — w kilka minut robi z tego zupę, przecier albo pastę, którą można zamrozić. To najprostszy sposób, żeby nadmiar wylądował w zamrażarce, a nie w koszu na śmieci. I szczerze mówiąc, to właśnie tutaj urządzenie zwraca się najszybciej: nie na wykwintnych daniach, tylko na tym, co dotąd się marnowało.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Trzcielu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie warzywa, które trzeba zużyć w tym tygodniu — powiedzcie przy umawianiu. Chętnie z nich ugotuję, zamiast przywozić wszystko swoje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Trzcielu"),
    sekcjaRaty("w Trzcielu"),
    {
      id: "rodzina",
      heading: "Thermomix dla trzcielskiej rodziny",
      paragraphs: [
        "Trzciel liczy ponad dwa tysiące dwustu mieszkańców na zaledwie trzech kilometrach kwadratowych, a gmina obejmuje siedemnaście wsi na stu siedemdziesięciu siedmiu kilometrach kwadratowych. Niektóre prawa miejskie Trzciel otrzymał już w 1329 roku, a pełne w 1458 roku od Kazimierza Jagiellończyka. Miasto jest znane z wyrobów wikliniarsko-trzciniarskich — mebli i koszy; według strony gminy uprawę chmielu wyparło tu w XIX stuleciu właśnie wikliniarstwo, a dziś uprawia się w okolicy również szparagi. Właścicielami Trzciela byli Ostrorogowie w XVI i XVII wieku, a w XVIII stuleciu Opalińscy. Obra dzieliła miejscowość na Stare Miasto po stronie wschodniej i Nowe Miasto po zachodniej — połączono je dopiero w 1888 roku. Poczta działa tu od 1810 roku, kolej ze Zbąszynia do Międzychodu powstała w 1911, a linię do Lutola Suchego otwarto 13 września 1929 roku. Miasto leży nad Obrą, między jeziorami Młyńskim i Wielkim; w 1986 roku utworzono Pszczewski Park Krajobrazowy, a w gminie leżą rezerwaty Rybojady i Czarna Droga. Kościół pod wezwaniem świętego Wojciecha jest neogotycki, z 1824 roku, z barokowym wyposażeniem; zachowały się też domy szachulcowe z XVIII i XIX wieku oraz grodzisko z połowy XIII stulecia.",
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

  districtsHeading: "Do których części Trzciela dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Obry, czyli do dawnego Starego i Nowego Miasta, połączonych w 1888 roku. Dojeżdżam też do wsi w gminie: Brójec, Lutola Suchego i Mokrego, Rybojad, Chociszewa, Jabłonki, Panowic, Sierczy, Świdwowca, Żydowa i pozostałych.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Trzciel też przyjadę",
  nearbyParagraphs: [
    "Pszczew, Międzyrzecz, Zbąszynek, Świebodzin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pszczew", "Międzyrzecz", "Zbąszynek", "Świebodzin"],

  about: blokOMnie("do Trzciela", "w Trzcielu", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Trzciela bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta po obu stronach Obry i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Trzciel w powiecie międzyrzeckim, a nie o Trzciankę, Trzcianę czy Trzcianne.",
    },
    ...faqWspolne("w Trzcielu"),
    {
      question: "Których warzyw nie trzymać w lodówce?",
      answer:
        "Ziemniaków (w zimnie robią się słodkawe i inaczej smakują po usmażeniu), cebuli i czosnku (miękną i pleśnieją w wilgoci), pomidorów (tracą aromat i robią się mączyste), bazylii (czernieje) oraz dyni, bananów i niedojrzałych awokado. Do lodówki należą liściaste, marchew, brokuł, kalafior i owoce miękkie.",
    },
    {
      question: "Gdzie trzymać ziemniaki i cebulę?",
      answer:
        "Osobno — razem psują się szybciej, bo cebula popycha ziemniaki do kiełkowania. Oboje potrzebują trzech warunków: ciemno, sucho i przewiewnie. Kosz albo drewniana skrzynka w najchłodniejszym kącie sprawdzają się lepiej niż szczelna szafka i nieporównanie lepiej niż foliowa torba.",
    },
    {
      question: "Dlaczego owoce obok jabłek psują się szybciej?",
      answer:
        "Bo jabłka przyspieszają dojrzewanie wszystkiego, co leży obok. Zwykle to problem, ale można go wykorzystać: twarde awokado czy niedojrzałe gruszki położone obok jabłka dochodzą w dwa dni zamiast w tydzień.",
    },
  ],

  geo: { lat: 52.3649, lng: 15.873 },
};
