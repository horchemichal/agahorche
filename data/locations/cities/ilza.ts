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
 * IŁŻA — powiat radomski, woj. mazowieckie.
 * MIASTO 4 228 (GUS 31.12.2024), 15,8 km², 267,1 os./km².
 * Gmina: 13 490 osób, 256,0 km². Leży nad Iłżanką,
 * na Przedgórzu Iłżeckim, 186 m n.p.m.
 * ⚠ Geoportal podaje dla gminy 13 428 „stan 2026" — to dane
 *   o rok nowsze; przy stanie 31.12.2024 obowiązuje 13 490.
 *
 * ⚠⚠ PUŁAPKI NAZEWNICZE:
 * — IŁŻA ≠ IŁÓW (wieś gminna w powiecie sochaczewskim,
 *   TO SAMO WOJEWÓDZTWO — najgroźniejsza kolizja),
 * — IŁŻA ≠ IŁOWA (lubuskie) ≠ IŁAWA (warm.-mazurskie).
 * — ⚠ Częsty błąd zapisu: „Ilza" bez znaków diakrytycznych.
 *   W TREŚCI ZAWSZE „Iłża". TWARDA GRANICA.
 * ⚠ ODMIANA wg Wielkiego słownika ortograficznego PWN:
 *   D./C./Ms. IŁŻY, B. IŁŻĘ, przym. IŁŻECKI,
 *   mieszkaniec IŁŻANIN. Czyli „do Iłży", „w Iłży".
 *
 * HISTORIA — GARNCARSTWO, PODSTAWA KĄTA:
 * — cech garncarzy od XIV w.; złoty okres XVI–XVII w.,
 *   wyroby eksportowane poza granice kraju,
 * — 1615–1619: 312 TRANSPORTÓW GARNCARSKICH ROCZNIE
 *   do kupców krakowskich,
 * — 1635: 29 garncarzy w Iłży i okolicy; obowiązek
 *   dostarczania na zamek „kopy garnków" rocznie —
 *   1 740 SZTUK,
 * — GLINA: jasna, kremowa, z erozji skał wapiennych;
 *   wydobywana na południe od wsi Błaziny, wzdłuż Traktu
 *   Ostrowieckiego,
 * — ⚠⚠ SIWAKI — naczynia WYPALANE BEZTLENOWO, przez
 *   odcięcie dostępu powietrza przyjmujące barwę
 *   od siwej do ciemnografitowej. TO JEST RDZEŃ KĄTA.
 * — piec garncarski Pastuszkiewiczów — otwarty, w XIX w.
 *   przykryty kamienną kopułą ze względów bezpieczeństwa,
 * — ostatnia mistrzyni cechu: Jadwiga Kosiarska (1912–1994),
 * — XV w. — rozwój kuźni w oparciu o miejscowe bogactwa,
 * — ratusz na rynku z 1576 r.; średniowieczny czworoboczny
 *   rynek z ulicami wybiegającymi z narożników,
 * — 1823 — Lewi Sunderland zakłada fabrykę fajansu,
 *   PRZEBUDOWUJĄC STARY SPICHLERZ ZBOŻOWY; produkcja
 *   wstrzymana 1885, definitywny koniec 1903.
 *   ⚠ PODAJĘ GO WYŁĄCZNIE JAKO PRZEDSIĘBIORCĘ, bez
 *   kontekstu etnicznego. TWARDA GRANICA.
 * — 8 stycznia 2024 „Dom Sunderlanda" wpisany do rejestru
 *   zabytków przez Mazowieckiego Wojewódzkiego Konserwatora
 *   Zabytków,
 * — w ogrodzie Sunderlandów Bolesław Leśmian przebywał
 *   latem 1917 r. i napisał cykl „W malinowym chruśniaku";
 *   w 2017 r. ogród odnowiono.
 *   ⚠ KĄT „TRUSKAWKI I MALINY" JEST ZAJĘTY (urzedow.ts) —
 *   maliny wymieniam wyłącznie przy Leśmianie, jako fakt.
 * ⚠⚠ PRAWA MIEJSKIE: nadanie około 1239 r. jest zgodne
 *   we wszystkich źródłach, ale DATY UTRATY (1867 albo 1869)
 *   I ODZYSKANIA (1924 albo 1964) SĄ SPRZECZNE.
 *   ⚠ NIE PODAJĘ ICH W OGÓLE. TWARDA GRANICA.
 *
 * DZIŚ: gmina rolniczo-leśna — użytki rolne 41%, lasy 42%;
 * 1 624 gospodarstwa, z czego 993 poniżej 5 ha; uprawy:
 * zboża, rzepak, kukurydza, okopowe (gleby klas IV–V);
 * hodowla: krowy, trzoda, drób.
 * ⚠ KĄT „KUKURYDZA" ZAJĘTY (losice.ts) — podaję jako fakt.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK wpisu z gminy Iłża.
 *   Sprawdzone wszystkie kategorie listy mazowieckiej.
 *   ⚠ Najbliższe geograficznie — „chleb wacyński",
 *   „kozienicki ogórek kiszony", „truskawka zwoleńska",
 *   wyroby szydłowieckie — POCHODZĄ Z INNYCH GMIN.
 *   NIE WYMIENIAM ICH.
 * ⚠ OSIEDLI W MIEŚCIE NIE USTALONO (gmina ma 31 sołectw) —
 *   districts PUSTE.
 *
 * KĄT: RUMIENIENIE — kolor, który bierze się z obróbki,
 * a nie z dodatku.
 * Kąt od iłżeckich siwaków: ich barwa nie pochodziła
 * z żadnej domieszki, tylko z tego, że w piecu odcięto
 * dostęp powietrza. W kuchni jest podobnie — brązowy kolor
 * nie jest dosypywany, tylko powstaje. I dokładnie dlatego
 * nie powstaje tam, gdzie warunki mu na to nie pozwalają.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że iłżeccy garncarze robili siwaki, wypalając naczynia
 *   bez dostępu powietrza — barwa od siwej po grafitową
 *   brała się z samego procesu, nie z dodatku,
 * — ŻE W KUCHNI JEST TAK SAMO: brązowy kolor pieczeni,
 *   cebuli, chleba czy ciasta nie jest niczym dosypanym —
 *   powstaje z tego, co już w jedzeniu jest,
 * — ⚠⚠ ŻE RUMIENIENIE POTRZEBUJE DWÓCH RZECZY NARAZ:
 *   WYSOKIEJ TEMPERATURY I SUCHEJ POWIERZCHNI. Jeśli brakuje
 *   którejkolwiek, nie będzie koloru — będzie gotowanie.
 *   TO JEST RDZEŃ CAŁEGO TEKSTU,
 * — ŻE STĄD BIERZE SIĘ NAJCZĘSTSZY ZAWÓD: mokre mięso
 *   z opakowania albo prosto z marynaty wrzucone na patelnię
 *   najpierw odparowuje własną wodę i dopiero potem —
 *   jeśli starczy cierpliwości — zaczyna się rumienić,
 * — ŻE OSUSZENIE POWIERZCHNI PRZED SMAŻENIEM JEST
 *   NAJTAŃSZĄ RZECZĄ, JAKĄ MOŻNA ZROBIĆ DLA SMAKU,
 * — ŻE STŁOCZENIE NA PATELNI DAJE TEN SAM EFEKT CO WODA:
 *   para nie ma gdzie uciec i wszystko się dusi,
 * — ŻE KOLOR TO NIE JEST TYLKO WYGLĄD — razem z nim
 *   powstaje smak, którego bez rumienienia po prostu
 *   w daniu nie ma,
 * — ŻE TO SAMO TŁUMACZY, DLACZEGO JEDNO DANIE Z TYCH SAMYCH
 *   SKŁADNIKÓW BYWA „PŁASKIE", a inne pełne,
 * — ⚠⚠ UCZCIWIE I NAJWAŻNIEJSZE: THERMOMIX NIE RUMIENI
 *   TAK JAK PATELNIA I NIGDY NIE BĘDZIE. W zamkniętym,
 *   mieszanym naczyniu jest wilgotno — czyli dokładnie
 *   odwrotnie niż trzeba. To nie jest wada do naprawienia,
 *   tylko cecha konstrukcji. MÓWIĘ TO WPROST,
 * — ŻE DLATEGO W WIELU PRZEPISACH PIERWSZY KROK ROBI SIĘ
 *   NA PATELNI, a urządzenie przejmuje resztę — i że to
 *   jest normalny podział pracy, a nie porażka sprzętu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI ANI
 *   O TYM, CZY MIĘSO JEST „DOŚĆ ZROBIONE". Mówię wyłącznie
 *   o KOLORZE I SMAKU. TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH O PRZYPIECZONYM
 *   JEDZENIU — ani że szkodzi, ani że nie. To jest temat
 *   medyczny i nie jest mój. TWARDA GRANICA.
 * — ŻADNYCH PRZEPISÓW I PROPORCJI.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ POLEWA OŁOWIOWA na dawnych naczyniach: NIE PISZĘ
 *   O NIEJ W OGÓLE. Piszę o siwakach, które polewy nie mają.
 *   TWARDA GRANICA — żadnej sugestii, że w dawnych
 *   naczyniach da się dziś gotować lub przechowywać
 *   jedzenie.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO utraty praw miejskich i jej przyczyn.
 * — ZERO tematów wojennych i zniszczeń zamku.
 * — ZERO historii społeczności żydowskiej Iłży; założyciela
 *   fabryki fajansu podaję wyłącznie jako przedsiębiorcę.
 * — ZERO wątku najazdów i „Mogiły Tatarskiej".
 * — ZERO bezrobocia, wyludniania i ujemnego przyrostu.
 * — ZERO zakładu górniczo-metalowego w Zębcu.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „KOLOR JEDZENIA" (Konstantynów Łódzki) dotyczy TEGO,
 *   ŻE WARZYWA SZARZEJĄ — czyli koloru TRACONEGO.
 *   TUTAJ chodzi o kolor ZYSKIWANY.
 * — „POWIETRZE I TLEN" (Grójec) dotyczy PRZECHOWYWANIA
 *   JABŁEK W KOMORACH.
 * — „DUSZENIE" (Łagów) dotyczy WOLNEGO GOTOWANIA
 *   POD PRZYKRYCIEM.
 * — „SMAŻENIE W GŁĘBOKIM TŁUSZCZU" (Sulęcin) dotyczy
 *   FRYTOWANIA.
 * — „DNO NACZYNIA" (Dobre Miasto) dotyczy PRZYWIERANIA
 *   I PRZYPALANIA — czyli AWARII, nie techniki.
 * — „NACZYNIA DO PIECZENIA" (Czarna Białostocka) dotyczy
 *   MATERIAŁU FORM.
 * — „ODPAROWANIE" (Przysucha) dotyczy POZBYWANIA SIĘ WODY
 *   Z SOSU. Tutaj woda przeszkadza NA POWIERZCHNI
 *   KAWAŁKA, a nie w garnku.
 * TUTAJ chodzi o BRĄZOWY KOLOR I SMAK, KTÓRY POWSTAJE
 * RAZEM Z NIM.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dat utraty i odzyskania praw miejskich.
 * — NIE PISZĘ o polewie ołowiowej.
 * — NIE MYLĘ Iłży z Iłowem, Iłową ani Iławą.
 * — NIE PISZĘ „Ilza".
 * — NIE ROBIĘ tematu z malin ani z kukurydzy.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE ORZEKAM niczego o zdrowotnych skutkach
 *   przypieczenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Iłża liczy 4 228 mieszkańców (GUS, 31.12.2024)
 *   na 15,8 km², a cała gmina 13 490 osób na 256 km²;
 *   miasto leży nad Iłżanką, na Przedgórzu Iłżeckim,
 *   na wysokości 186 m n.p.m.,
 * — cech garncarzy działał w Iłży od XIV wieku, a jego
 *   złoty okres przypadł na wiek XVI i XVII, kiedy wyroby
 *   wywożono poza granice kraju; w latach 1615–1619
 *   wychodziło stąd 312 transportów garncarskich rocznie
 *   do kupców krakowskich, a w 1635 roku pracowało w Iłży
 *   i okolicy dwudziestu dziewięciu garncarzy, mających
 *   obowiązek dostarczać na zamek kopę garnków rocznie,
 *   czyli tysiąc siedemset czterdzieści sztuk,
 * — glinę — jasną i kremową, powstałą z erozji skał
 *   wapiennych — wydobywano na południe od wsi Błaziny,
 *   wzdłuż Traktu Ostrowieckiego; iłżeckie siwaki wypalano
 *   bez dostępu powietrza, dzięki czemu przyjmowały barwę
 *   od siwej do ciemnografitowej,
 * — ostatnią mistrzynią cechu była Jadwiga Kosiarska
 *   (1912–1994); zachował się piec garncarski
 *   Pastuszkiewiczów, w XIX wieku przykryty kamienną kopułą,
 * — na rynku o średniowiecznym, czworobocznym układzie,
 *   z ulicami wybiegającymi z narożników, stoi ratusz
 *   z 1576 roku,
 * — w 1823 roku Lewi Sunderland założył tu fabrykę fajansu,
 *   przebudowując na nią stary spichlerz zbożowy;
 *   produkcję wstrzymano w 1885, a zakończono w 1903 roku,
 *   8 stycznia 2024 roku budynek wpisano do rejestru
 *   zabytków,
 * — w ogrodzie Sunderlandów Bolesław Leśmian przebywał
 *   latem 1917 roku i napisał tam cykl „W malinowym
 *   chruśniaku"; ogród odnowiono w 2017 roku,
 * — gmina jest rolniczo-leśna — użytki rolne zajmują
 *   czterdzieści jeden procent powierzchni, lasy czterdzieści
 *   dwa; działa tu tysiąc sześćset dwadzieścia cztery
 *   gospodarstwa, z czego blisko tysiąc ma poniżej pięciu
 *   hektarów, a uprawia się zboża, rzepak, kukurydzę
 *   i rośliny okopowe.
 */
export const ILZA: CityContent = {
  slug: "ilza",
  h1: "Thermomix Iłża – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Iłża — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Iłży: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Iłża — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Iłży. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Iłży z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Iłża"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Brązowy kolor nie jest dosypywany. Powstaje — albo nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Iłży – jak wygląda prezentacja?",
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
      id: "rumienienie",
      heading: "Kolor, który się nie dosypuje",
      paragraphs: [
        "Iłżeccy garncarze mieli swój cech już w XIV wieku, a w XVI i XVII stuleciu ich wyroby wychodziły poza granice kraju — w latach 1615–1619 szło stąd trzysta dwanaście transportów rocznie do kupców krakowskich. Najbardziej rozpoznawalne były siwaki: naczynia o barwie od siwej po ciemnografitową.",
        "I teraz rzecz, która mnie w tym zatrzymała. Ta barwa nie pochodziła z żadnej domieszki. Glina spod Błazin była jasna, prawie kremowa. Kolor brał się wyłącznie z tego, że w czasie wypału odcięto dostęp powietrza — z samego procesu, nie z niczego dodanego.",
        "W kuchni działa to dokładnie tak samo i jest to jedna z niewielu rzeczy, które warto zrozumieć raz, żeby gotować lepiej już zawsze.",
        "Brązowy kolor pieczeni, podsmażonej cebuli, skórki chleba czy wierzchu ciasta nie jest niczym dosypanym. Powstaje z tego, co w jedzeniu już jest. Nikt go nie dodaje — on się robi albo nie robi.",
        "A robi się tylko wtedy, gdy spełnione są dwa warunki naraz: wysoka temperatura i sucha powierzchnia. Brakuje jednego z nich — nie ma koloru. Jest za to gotowanie, czyli coś zupełnie innego.",
        "Stąd najczęstszy kuchenny zawód, który zna każdy. Mięso wyjęte prosto z opakowania albo z marynaty ląduje na patelni mokre. Zanim cokolwiek zacznie się rumienić, musi odparować własną wodę — a przez ten czas zdąży się już ugotować w środku. Efekt: szare, twardawe, bez smaku, którego się spodziewaliśmy. I nikt nie wie, dlaczego, bo przecież „wszystko było jak zawsze”.",
        "Osuszenie powierzchni przed smażeniem jest w związku z tym najtańszą rzeczą, jaką można zrobić dla smaku dania. Nie kosztuje nic poza ręcznikiem papierowym i trzydziestoma sekundami.",
        "Drugi klasyczny błąd to stłoczenie. Zbyt dużo kawałków naraz na patelni daje ten sam skutek co woda: para nie ma którędy uciec, zbiera się między kawałkami i wszystko zaczyna się dusić zamiast smażyć. Lepiej w dwóch turach niż w jednej.",
        "I rzecz najważniejsza: kolor to nie jest tylko wygląd. Razem z nim powstaje smak — ten głęboki, pełny, „mięsny” albo „pieczony”, którego w daniu po prostu nie ma, jeśli rumienienia nie było. To dlatego dwie zupy z identycznych składników mogą smakować zupełnie inaczej: w jednej warzywa czy mięso podsmażono na początku, w drugiej wrzucono wszystko do wody. Nie brakuje przypraw, brakuje tego etapu.",
        "Teraz uczciwie o sprzęcie, i mówię to wprost, bo lepiej, żebyś usłyszała to ode mnie teraz niż odkryła sama za miesiąc. Thermomix nie rumieni tak jak patelnia i nigdy nie będzie.",
        "Powód jest prosty i wynika z konstrukcji: w zamkniętym naczyniu, w którym wszystko jest mieszane, robi się wilgotno — czyli panują warunki dokładnie odwrotne do tych, których rumienienie potrzebuje. To nie jest usterka do naprawienia w nowszym modelu ani rzecz do obejścia sprytnym ustawieniem.",
        "Dlatego w wielu przepisach pierwszy krok robi się na patelni, a urządzenie przejmuje wszystko, co dalej: duszenie, gotowanie, miksowanie, pilnowanie temperatury i mieszanie, którego nikomu nie chce się robić przez czterdzieści minut. To jest zwyczajny podział pracy, nie porażka sprzętu. Kupuje się go dla tej drugiej części, nie dla pierwszej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Iłży?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz wiedzieć, gdzie to urządzenie naprawdę pomaga, a gdzie patelnia zostaje niezastąpiona — powiedz to przy umawianiu. To dobra rozmowa na spotkanie i nie będę jej omijać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Iłży"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla iłżeckiej rodziny",
      paragraphs: [
        "Iłża liczy nieco ponad cztery tysiące dwieście mieszkańców na blisko szesnastu kilometrach kwadratowych, a cała gmina ponad trzynaście tysięcy osób na dwustu pięćdziesięciu sześciu kilometrach. Miasto leży nad Iłżanką, na Przedgórzu Iłżeckim, na wysokości stu osiemdziesięciu sześciu metrów. Cech garncarzy działał tu od XIV wieku, a jego złoty okres przypadł na wiek XVI i XVII, kiedy wyroby wywożono poza granice kraju; w latach 1615–1619 wychodziło stąd trzysta dwanaście transportów garncarskich rocznie do kupców krakowskich, a w 1635 roku pracowało w Iłży i okolicy dwudziestu dziewięciu garncarzy, zobowiązanych dostarczać na zamek kopę garnków rocznie, czyli tysiąc siedemset czterdzieści sztuk. Glinę — jasną i kremową, powstałą z erozji skał wapiennych — wydobywano na południe od wsi Błaziny, wzdłuż Traktu Ostrowieckiego. Ostatnią mistrzynią cechu była Jadwiga Kosiarska; zachował się też piec garncarski Pastuszkiewiczów, w XIX wieku przykryty kamienną kopułą. Na rynku o średniowiecznym, czworobocznym układzie, z ulicami wybiegającymi z narożników, stoi ratusz z 1576 roku. W 1823 roku Lewi Sunderland założył tu fabrykę fajansu, przebudowując na nią stary spichlerz zbożowy — produkcję wstrzymano w 1885, a zakończono w 1903 roku, zaś 8 stycznia 2024 roku budynek wpisano do rejestru zabytków. W ogrodzie Sunderlandów Bolesław Leśmian przebywał latem 1917 roku i napisał tam cykl „W malinowym chruśniaku”; ogród odnowiono w 2017 roku. Dziś gmina jest rolniczo-leśna: użytki rolne zajmują czterdzieści jeden procent powierzchni, lasy czterdzieści dwa, a spośród ponad tysiąca sześciuset gospodarstw blisko tysiąc ma poniżej pięciu hektarów.",
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

  districtsHeading: "Do których części Iłży dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku z ratuszem po osiedla przy wylotach dróg i domy nad Iłżanką. Dojeżdżam też do wsi w gminie, w tym do Błazin i Jasieńca Iłżeckiego.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Iłżę też przyjadę",
  nearbyParagraphs: [
    "Skaryszew, Kazanów, Sienno, Lipsko, Wierzbica, Szydłowiec, Radom i Starachowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radom", "Lipsko", "Szydłowiec", "Starachowice"],

  about: blokOMnie("do Iłży", "w Iłży", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Iłży bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Iłżę nad Iłżanką w powiecie radomskim — nie o Iłów w powiecie sochaczewskim ani o Iłowę w lubuskiem.",
    },
    ...faqWspolne("w Iłży"),
    {
      question: "Dlaczego mięso na patelni bywa szare zamiast rumiane?",
      answer:
        "Bo rumienienie potrzebuje dwóch rzeczy naraz: wysokiej temperatury i suchej powierzchni. Mięso prosto z opakowania albo z marynaty jest mokre i najpierw musi odparować własną wodę — przez ten czas zdąży się ugotować w środku. Pomaga osuszenie powierzchni przed smażeniem i niestłaczanie kawałków, bo para musi mieć którędy uciec.",
    },
    {
      question: "Czy Thermomix przyrumieni mięso albo cebulę?",
      answer:
        "Nie tak jak patelnia i mówię to wprost. W zamkniętym, mieszanym naczyniu robi się wilgotno, czyli panują warunki odwrotne do tych, jakich rumienienie wymaga — to cecha konstrukcji, nie usterka. Dlatego w wielu przepisach pierwszy krok robi się na patelni, a urządzenie przejmuje duszenie, gotowanie i mieszanie.",
    },
  ],

  geo: { lat: 51.1667, lng: 21.25 },
};
