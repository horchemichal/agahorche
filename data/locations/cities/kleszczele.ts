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
 * KLESZCZELE — gmina miejsko-wiejska w powiecie hajnowskim.
 * MIASTO 1 047, GMINA 2 092 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 46,7 km² (!), GMINY 142,9 km².
 * 16 MIEJSCOWOŚCI. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 1 300 — ZAWYŻONE.
 * ⚠ 46,7 km² to bardzo dużo jak na miasto liczące tysiąc osób
 * — Kleszczele mają rozległe grunty miejskie, głównie leśne
 * i rolne. Gmina to 4,7% ludności powiatu przy 8,8%
 * jego powierzchni.
 *
 * PRAWA MIEJSKIE 1523 r., nadał KRÓL ZYGMUNT STARY.
 * ⚠ NIE PODAJĘ, czy było to prawo magdeburskie — nie ustalono.
 * Pierwsza wzmianka XV w. UTRATA PRAW 1950 r.,
 * ODZYSKANIE 1993 r., z inicjatywy radnych i wójta.
 * ⚠ DOKŁADNEJ DATY DZIENNEJ NIE PODAJĘ.
 * 1581 r. — przywilej na budowę RATUSZA.
 * Kleszczele określane jako „królewskie miasto".
 *
 * ⚠⚠ CHMIEL — PODSTAWA KĄTA:
 * Kleszczele „SŁYNĘŁY Z PLANTACJI CHMIELU, KTÓRY EKSPORTOWANO
 * DO KRÓLEWCA". Mieszkańcy zajmowali się „przeważnie
 * rzemiosłem, handlem oraz SPRZEDAŻĄ CHMIELU".
 * 1758 r. — wzmianka o HUCIE SZKŁA.
 *
 * WĄTEK LEŚNY: gmina leży na RÓWNINIE BIELSKIEJ.
 * LASY I GRUNTY LEŚNE STANOWIĄ OK. 37% POWIERZCHNI GMINY.
 * WSCHODNIE KOMPLEKSY LEŚNE ŁĄCZĄ SIĘ Z PUSZCZĄ BIAŁOWIESKĄ.
 * ⚠ KLESZCZELE NIE LEŻĄ W SAMEJ PUSZCZY — są na jej
 * zachodnim przedpolu. Gmina należy do LGD Puszcza Białowieska.
 * Odległości: 75 km od Białegostoku, 25 km od Hajnówki.
 *
 * HYDROGRAFIA: główna rzeka NURZEC, z dopływem DOBROWÓDKĄ.
 * 79% GMINY W DORZECZU BUGU. ZBIORNIK WODNY W REPCZYCACH —
 * ukończony 2002 r., powierzchnia 10 ha.
 *
 * ZABYTKI: 1544 r. — założenie KOŚCIOŁA PARAFIALNEGO
 * ŚW. ZYGMUNTA, FUNDACJA KRÓLOWEJ BONY. 1910 r. — obecny
 * kościół rzymskokatolicki św. Zygmunta. 1998 r. — kapliczka
 * św. Jerzego (rekonstrukcja).
 * DNI KLESZCZEL — ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ.
 * ⚠ HIPOTEZY O BARTNICTWIE I SMOLARSTWIE ZABITE —
 * potwierdzony profil to chmiel, rzemiosło, handel, huta szkła.
 * KLESZCZELE NIE NALEŻĄ DO CITTASLOW (nie potwierdzono).
 * ⚠ NIE PRZYPISUJĘ Kleszczelom produktu z Listy Produktów
 * Tradycyjnych — nie ma takiego.
 *
 * KĄT: GORYCZ W KUCHNI — piąty smak, którego wszyscy unikają,
 * a bez którego dania są płaskie.
 * Kąt od miasta, które słynęło z plantacji chmielu
 * eksportowanego do Królewca — czyli z uprawy rośliny
 * hodowanej wyłącznie dla goryczy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że chmiel uprawia się WYŁĄCZNIE dla goryczy i aromatu,
 *   i że to jedyna roślina uprawna, o której da się
 *   tak powiedzieć,
 * — że gorycz jest jedynym smakiem, którego uczymy się
 *   nie lubić, i jedynym, który w domowej kuchni jest
 *   traktowany wyłącznie jako błąd,
 * — GDZIE GORYCZ JEST POŻĄDANA: rukola, cykoria, radicchio,
 *   grejpfrut, gorzka czekolada, kawa, herbata, oliwa
 *   z pierwszego tłoczenia, skórka cytrusowa,
 * — CO ROBI W DANIU: przełamuje tłustość i słodycz, sprawia,
 *   że po kęsie chce się następnego,
 * — GDZIE JEST BŁĘDEM I SKĄD SIĘ TAM BIERZE: przypalone dno,
 *   przypieczony czosnek, biała część skórki cytrusa,
 *   przegrzana oliwa, zbyt długo gotowane niektóre zioła,
 * — że rozpoznaje się to po jednym pytaniu: czy gorycz była
 *   w składniku od początku, czy powstała w trakcie,
 * — ŻE GORYCZY NIE DA SIĘ USUNĄĆ, można ją tylko ZRÓWNOWAŻYĆ
 *   — tłuszczem, słodyczą albo solą,
 * — UCZCIWIE: to urządzenie ma z goryczą jeden konkretny
 *   problem — przy długim miksowaniu na wysokich obrotach
 *   rozbija się skórki i pestki, a stamtąd gorycz wychodzi,
 * — dlatego cytrusy, ogórki i niektóre owoce miksuje się
 *   krótko albo obiera przed miksowaniem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — NIC o goryczy
 *   a trawieniu. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ CHMIEL WYMIENIAM WYŁĄCZNIE JAKO ROŚLINĘ UPRAWNĄ
 *   I TOWAR EKSPORTOWY. ZERO piwa jako napoju, ZERO alkoholu,
 *   ZERO zachęty. TWARDA GRANICA.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠ ZERO granicy — Kleszczele leżą w powiecie hajnowskim,
 *   niedaleko granicy państwa. Żadnej wzmianki.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 *   Kleszczele mają silną historię mniejszościową — cerkwi
 *   nie wymieniam wcale, bo nie udało się ich potwierdzić
 *   z datami, a wymienianie „na wyczucie" byłoby błędem.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Równowaga smaków"
 * (Suchowola) obejmuje cztery kierunki naraz i traktuje
 * gorycz jednym akapitem jako skutek uboczny. Tutaj gorycz
 * jest TEMATEM CAŁEJ SEKCJI: skąd się bierze, kiedy jest
 * pożądana i jak ją rozpoznać. „Doprawianie" (Węgorzewo)
 * dotyczy soli. „Przyprawy całe kontra mielone" (Pieniężno)
 * dotyczą postaci przyprawy. „Skórka cytrusowa" jako osobny
 * kąt nie istnieje — tu jest jednym z przykładów.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ, czy prawa z 1523 r. były magdeburskie.
 * — NIE PODAJĘ dokładnej daty odzyskania praw w 1993 r.
 * — NIE PODAJĘ liczby sołectw ani rezerwatów w gminie.
 * — NIE PISZĘ o bartnictwie i smolarstwie.
 * — NIE WYMIENIAM cerkwi — brak potwierdzonych dat.
 * — NIE PISZĘ, że Kleszczele leżą w Puszczy Białowieskiej.
 * — NIE PODAJĘ roku pierwszej edycji Dni Kleszczel.
 * — NIE PRZYPISUJĘ Kleszczelom produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE MYLĘ KLESZCZEL z KLESZCZOWEM (łódzkie) ani
 *   z KLESZCZEWEM. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 047 mieszkańców na 46,7 km² — jak na miasto tej
 *   wielkości bardzo rozległe, z przewagą gruntów leśnych
 *   i rolnych; gmina 2 092 mieszkańców na 142,9 km²,
 *   16 miejscowości,
 * — prawa miejskie nadał w 1523 r. król Zygmunt Stary;
 *   pierwsza wzmianka pochodzi z XV w., w 1581 r. miasto
 *   dostało przywilej na budowę ratusza, prawa utraciło
 *   w 1950 r. i odzyskało w 1993,
 * — Kleszczele słynęły z plantacji chmielu eksportowanego
 *   do Królewca; mieszkańcy żyli z rzemiosła, handlu
 *   i sprzedaży chmielu, a w 1758 r. odnotowano tu hutę szkła,
 * — gmina leży na Równinie Bielskiej; lasy zajmują około 37%
 *   jej powierzchni, a wschodnie kompleksy leśne łączą się
 *   z Puszczą Białowieską; do Hajnówki jest stąd 25 km,
 *   do Białegostoku 75 km,
 * — główną rzeką jest Nurzec z dopływem Dobrowódką, a 79%
 *   gminy leży w dorzeczu Bugu; zbiornik wodny w Repczycach
 *   o powierzchni 10 ha ukończono w 2002 r.,
 * — kościół parafialny świętego Zygmunta założono w 1544 r.
 *   z fundacji królowej Bony; obecny kościół pochodzi
 *   z 1910 r.
 */
export const KLESZCZELE: CityContent = {
  slug: "kleszczele",
  h1: "Thermomix Kleszczele – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kleszczele — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kleszczelach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kleszczele — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kleszczelach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kleszczel z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Kleszczele i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gorycz to jedyny smak, którego uczymy się nie lubić.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kleszczelach – jak wygląda prezentacja?",
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
      id: "gorycz",
      heading: "Chmiel do Królewca — czyli o goryczy, której wszyscy unikają",
      paragraphs: [
        "Kleszczele dostały prawa miejskie od Zygmunta Starego w 1523 roku, a mieszkańcy żyli tu z rzemiosła, handlu i — to jest ta ciekawa część — ze sprzedaży chmielu. Miasto słynęło z plantacji chmielu eksportowanego do Królewca.",
        "Zatrzymajmy się przy tym na chwilę, bo chmiel jest rośliną szczególną. To bodaj jedyna roślina uprawna na świecie, którą hoduje się wyłącznie dla goryczy i aromatu. Nie dla kalorii, nie dla oleju, nie dla włókna. Dla smaku, którego nikt nie lubi w czystej postaci.",
        "Bo gorycz jest w kuchni sierotą. To jedyny smak, którego uczymy się nie lubić — dzieci odrzucają go odruchowo — i jedyny, który w domowej kuchni traktujemy wyłącznie jako oznakę, że coś poszło nie tak.",
        "A gorycz jest w wielu miejscach pożądana i to zwykle w tych, które lubimy najbardziej. Rukola, cykoria, radicchio, endywia. Grejpfrut. Gorzka czekolada. Kawa. Herbata, zwłaszcza mocno zaparzona. Dobra oliwa z pierwszego tłoczenia, która drapie w gardło. Skórka cytrusowa. Żadna z tych rzeczy nie byłaby sobą bez goryczy.",
        "To, co gorycz robi w daniu, da się opisać jednym zdaniem: przełamuje tłustość i słodycz. Dlatego do tłustej pieczeni podaje się gorzkie warzywa, a do bardzo słodkiego deseru — kawę. Bez tego przełamania po dwóch kęsach robi się mdło i nie chce się jeść dalej. Gorycz jest tym, co sprawia, że po kęsie chce się następnego.",
        "Jest oczywiście również goryczą niechcianą i warto wiedzieć, skąd się bierze, bo to zawsze te same cztery miejsca. Przypalone dno naczynia — wtedy gorzknieje całe danie, nie tylko spód. Czosnek zbyt długo trzymany na gorącym tłuszczu; on gorzknieje bardzo szybko i to jest najczęstszy przypadek. Biała część skórki cytrusa, jeśli tarka zeszła zbyt głęboko. I przegrzana oliwa.",
        "Rozróżnienie jest proste i sprowadza się do jednego pytania: czy gorycz była w składniku od początku, czy powstała w trakcie. Ta pierwsza jest częścią smaku. Ta druga jest błędem.",
        "I rzecz najważniejsza, o której mało kto wie: goryczy nie da się usunąć. Nie ma czegoś takiego jak odgorzczenie dania. Można ją tylko zrównoważyć — tłuszczem, odrobiną słodyczy albo solą. Jeśli więc sos zgorzkniał od przypalonego czosnku, nie ratujcie go dolewaniem wody; to nie rozcieńczy goryczy, tylko rozcieńczy wszystko inne.",
        "Teraz uczciwie o sprzęcie, bo tu ma on jeden bardzo konkretny problem, którego nikt nie tłumaczy. Przy długim miksowaniu na wysokich obrotach rozbija się wszystko, także skórki, błony i pestki — a to właśnie z nich wychodzi gorycz. Dlatego koktajl z cytrusami zmiksowany zbyt długo robi się gorzki, choć te same owoce zjedzone osobno gorzkie nie są. To samo dotyczy ogórka ze skórką i niektórych pestkowych owoców.",
        "Rada jest prosta: cytrusy obierać także z białej błony, ogórki czasem obrać, pestki usuwać, a wszystko, co ma skórkę, miksować krótko. To jest różnica między koktajlem, który się pije, a takim, który stoi na blacie do wieczora.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kleszczelach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli robicie koktajle i zdarza Wam się, że wychodzą gorzkie — powiedzcie o tym przy umawianiu. To akurat problem, który rozwiązuje się w jednym zdaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kleszczelach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kleszczelowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc mieszkańców, ale zajmuje przeszło czterdzieści sześć kilometrów kwadratowych — Kleszczele mają rozległe grunty miejskie, głównie leśne i rolne. Cała gmina to niecałe dwa tysiące sto osób na stu czterdziestu trzech kilometrach i szesnaście miejscowości. Prawa miejskie nadał tu w 1523 roku król Zygmunt Stary, w 1581 miasto otrzymało przywilej na budowę ratusza, a po utracie praw w 1950 roku odzyskało je w 1993. Kleszczele słynęły z plantacji chmielu eksportowanego do Królewca — mieszkańcy żyli z rzemiosła, handlu i sprzedaży chmielu, a w 1758 roku odnotowano tu hutę szkła. Gmina leży na Równinie Bielskiej; lasy zajmują około trzydziestu siedmiu procent jej powierzchni, a wschodnie kompleksy leśne łączą się z Puszczą Białowieską. Główną rzeką jest Nurzec z dopływem Dobrowódką, a zbiornik wodny w Repczycach o powierzchni dziesięciu hektarów ukończono w 2002 roku. Kościół parafialny świętego Zygmunta założono w 1544 roku z fundacji królowej Bony; obecny pochodzi z 1910.",
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

  districtsHeading: "Do których części gminy Kleszczele dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kleszczele też przyjadę",
  nearbyParagraphs: [
    "Hajnówka, Bielsk Podlaski, Orla, Siemiatycze i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Hajnówka", "Bielsk Podlaski", "Orla", "Siemiatycze"],

  about: blokOMnie("do Kleszczel", "w Kleszczelach i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kleszczel bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Kleszczele w powiecie hajnowskim to nie Kleszczów w łódzkiem ani Kleszczewo.",
    },
    ...faqWspolne("w Kleszczelach"),
    {
      question: "Czy gorycz w daniu to zawsze błąd?",
      answer:
        "Nie. Rukola, cykoria, grejpfrut, gorzka czekolada, kawa, dobra oliwa i skórka cytrusowa są tym, czym są, właśnie dzięki goryczy — ona przełamuje tłustość i słodycz i sprawia, że po kęsie chce się następnego. Błędem jest gorycz, która powstała w trakcie gotowania, a nie ta, która była w składniku od początku.",
    },
    {
      question: "Skąd bierze się niechciana gorycz?",
      answer:
        "Prawie zawsze z jednego z czterech miejsc: z przypalonego dna naczynia, z czosnku zbyt długo trzymanego na gorącym tłuszczu, z białej części skórki cytrusa startej zbyt głęboko albo z przegrzanej oliwy. Goryczy nie da się usunąć — można ją tylko zrównoważyć tłuszczem, odrobiną słodyczy albo solą.",
    },
    {
      question: "Dlaczego mój koktajl z Thermomixa wychodzi gorzki?",
      answer:
        "Bo przy długim miksowaniu na wysokich obrotach rozbijają się skórki, błony i pestki, a właśnie z nich wychodzi gorycz. Cytrusy warto obrać także z białej błony, pestki usunąć, ogórka czasem obrać, a wszystko ze skórką miksować krótko.",
    },
  ],

  geo: { lat: 52.5822, lng: 23.3269 },
};
