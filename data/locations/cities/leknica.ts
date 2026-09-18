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
 * ŁĘKNICA — ⚠ GMINA MIEJSKA, powiat żarski, woj. lubuskie.
 * MIASTO 2 217 (GUS 31.12.2024), 16,4 km².
 *
 * ⚠ HOMONIMY: ŁĘKNICA (miasto, powiat żarski) ≠ ŁĘKNO
 * ≠ LIPNICA. FAQ to rozróżnia.
 *
 * ⚠⚠ PRAW MIEJSKICH NIE DATUJĘ.
 * polskawliczbach.pl podaje przy Łęknicy rok 1452 — TO BŁĄD,
 * NIE CYTOWAĆ. Znalezione opracowania mówią o nadaniu praw
 * miejskich dopiero w XX w., ale bez pewnego potwierdzenia.
 * PISZĘ WYŁĄCZNIE: „miasto młode, prawa miejskie otrzymało
 * dopiero w XX wieku". TWARDA GRANICA.
 * Jako Lugknitz wzmiankowana ok. 1505 r.
 *
 * PARK MUŻAKOWSKI:
 * — założony 1 maja 1815 r. (prace od 1811), twórca
 *   Hermann von Pückler-Muskau,
 * — łącznie ponad 700 ha, 522 ha po stronie polskiej,
 * — wpis na listę UNESCO 2 lipca 2004 r.; wpisem objęto
 *   348 ha, w tym 211,90 ha po polskiej stronie,
 * — po stronie polskiej: Wnętrze Centralne, okolice Domku
 *   Angielskiego, Bażanciarnia, Szkółki, Arboretum,
 * — ARBORETUM 55,4 ha, założone 1856–1867 przez Eduarda
 *   Petzolda, ponad 3000 gatunków drzew i krzewów;
 *   Szkółki produkowały materiał roślinny dla parku,
 * — Most Angielski, Most Arkadowy, Domek Angielski.
 * ⚠⚠ ORANŻERIA JEST PO STRONIE NIEMIECKIEJ — NIE PRZYPISUJĘ
 *   JEJ ŁĘKNICY.
 * ⚠⚠ OGRODÓW UŻYTKOWYCH, SADÓW ANI WARZYWNIKÓW PÜCKLERA
 *   PO POLSKIEJ STRONIE NIE POTWIERDZONO W CZTERECH ŹRÓDŁACH
 *   — NIE PISZĘ O NICH. TWARDA GRANICA.
 * ⚠ BAŻANCIARNIA — sam toponim; przeznaczenia i hodowli
 *   NIE OPISUJĘ, bo żadne źródło tego nie podaje.
 *
 * ⚠⚠ ŁUK MUŻAKOWA — PODSTAWA KĄTA:
 * — kopalnia Babina działała 1921–1973; wydobywano węgiel
 *   brunatny, eksploatowano też iły i mułki ałunowe,
 * — w całym Łuku ponad 340 zbiorników antropogenicznych,
 *   ponad 100 o łącznej powierzchni 150 ha po stronie
 *   polskiej,
 * — ⚠⚠ WODY SĄ KWAŚNE. Przyczyną jest ROZKŁAD PIRYTU,
 *   który daje kwas siarkowy. Wody zawierają żelazo,
 *   mangan, wapń, magnez, sód, potas, chlor i siarczany.
 *   RYBY W TYCH JEZIORACH NIE ŻYJĄ.
 * — ⚠⚠ WARTOŚCI pH NIE PODAJĘ. Liczba „3–4" pochodzi
 *   wyłącznie z bloga turystycznego; Lasy Państwowe i PIG
 *   opisują kwasowość jakościowo, bez liczb.
 *   PISZĘ OPISOWO: „wody są kwaśne". TWARDA GRANICA.
 * — Geopark Łuk Mużakowa należy do sieci geoparków
 *   europejskich pod auspicjami UNESCO od 2011 r.,
 * — ścieżka geoturystyczna „Dawna Kopalnia Babina" ok. 4 km,
 *   drewniana wieża widokowa 24 m.
 * ⚠ KOPALNIĘ OPISUJĘ WYŁĄCZNIE JAKO FAKT GEOLOGICZNY
 *   I TURYSTYCZNY, NIGDY JAKO UPADEK PRZEMYSŁU.
 * ⚠ „GŁÓWNY PROBLEM ŚRODOWISKOWY" POMIJAM — to temat
 *   ekologiczno-polityczny. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: KWAS W KUCHNI — ocet, cytryna, kwaśna śmietana:
 * co kwas naprawdę robi z daniem i kiedy go dodać.
 * Kąt od pokopalnianych jeziorek Łuku Mużakowa pod Łęknicą,
 * których woda jest kwaśna od rozkładu pirytu — na tyle,
 * że ryby w nich nie żyją.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kwas jest najrzadziej świadomie używanym smakiem
 *   w polskiej kuchni domowej — sól dosypujemy odruchowo,
 *   kwasu prawie nie,
 * — ŻE „DANIU CZEGOŚ BRAKUJE" BARDZO CZĘSTO ZNACZY
 *   „BRAKUJE KWASU", a nie soli — i że to jest pierwsza
 *   rzecz do sprawdzenia, zanim dosoli się po raz trzeci,
 * — CO KWAS ROBI: podbija pozostałe smaki, przecina tłuszcz,
 *   odświeża danie ciężkie i mdłe, równoważy słodycz,
 * — ŻE ŹRÓDŁA KWASU NIE SĄ WYMIENNE — ocet jest ostry
 *   i płaski, cytryna świeża i aromatyczna, kwaśna śmietana
 *   i jogurt łagodne i kremowe, pomidor i kiszonka wnoszą
 *   kwas razem ze smakiem własnym,
 * — KIEDY DODAWAĆ: kwas z cytryny dodaje się NA KOŃCU, bo
 *   aromat ulatuje przy gotowaniu; ocet może iść wcześniej;
 *   nabiał kwaśny dodaje się do dania, które przestało
 *   wrzeć, żeby się nie zwarzył,
 * — ŻE KWAS SPOWALNIA MIĘKNIĘCIE — fasola i strączki
 *   w kwaśnym płynie długo pozostają twarde, dlatego
 *   pomidory i ocet dodaje się dopiero wtedy, gdy są
 *   już miękkie,
 * — ŻE KWAS ZATRZYMUJE CIEMNIENIE krojonych jabłek,
 *   selera i awokado,
 * — ŻE PRZY ZUPACH I SOSACH DZIAŁA ZASADA MAŁYCH KROKÓW:
 *   dodać odrobinę, wymieszać, spróbować — bo nadmiaru
 *   kwasu nie da się cofnąć,
 * — CO ROBIĆ, GDY PRZESADZIMY: nie neutralizuje się tego
 *   solą, tylko czymś tłustym, słodkim albo po prostu
 *   większą objętością dania,
 * — UCZCIWIE: to jest wiedza, nie funkcja — żadne
 *   urządzenie nie powie Wam, że daniu brakuje kwasu,
 * — ale pomaga w jednej rzeczy: gdy już ustalisz, ile kwasu
 *   danie potrzebuje, powtórzy je dokładnie; przy sosach,
 *   dressingach i zupach, które „raz wychodzą, raz nie",
 *   to jest właśnie cała różnica.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI LICZBOWYCH.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO tez o kwasie
 *   i żołądku, zębach, trawieniu czy wchłanianiu.
 *   TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH LICZB pH — ANI WODY, ANI JEDZENIA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO zachęt do picia ani kosztowania wody z jeziorek.
 *   NIE PISZĘ, że można albo nie można — po prostu
 *   nie poruszam tego.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ⚠⚠ GRANICA I BAD MUSKAU — WYŁĄCZNIE JAKO FAKT
 *   GEOGRAFICZNY PRZY PARKU. TWARDA GRANICA.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ ZAMKNIĘCIE KOPALNI W 1973 r. — SUCHA DATA,
 *   NIGDY JAKO UPADEK.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ostrość" dotyczy
 * papryczek i pieprzu. „Umami" dotyczy smaku mięsnego
 * i glutaminianu. „Kiszonki" dotyczą fermentacji jako procesu.
 * „Cytrusy: skórka kontra sok" dotyczą samych cytrusów
 * jako składnika. Tutaj chodzi o KWAS JAKO NARZĘDZIE
 * DOPRAWIANIA — o to, kiedy i po co się go dodaje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ wartości pH wody w jeziorkach.
 * — NIE PRZYPISUJĘ Łęknicy oranżerii (strona niemiecka).
 * — NIE TWIERDZĘ, że Pückler miał tu ogrody użytkowe.
 * — NIE OPISUJĘ przeznaczenia Bażanciarni.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE MYLĘ ŁĘKNICY z ŁĘKNEM ani LIPNICĄ.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Łęknica jest gminą miejską liczącą ponad dwa tysiące
 *   dwieście mieszkańców na szesnastu kilometrach
 *   kwadratowych; jako Lugknitz wzmiankowana była około
 *   1505 r., a prawa miejskie otrzymała dopiero w XX w.,
 * — Park Mużakowski założył Hermann von Pückler-Muskau
 *   1 maja 1815 r., prace przygotowawcze trwały od 1811 r.;
 *   park liczy ponad 700 ha, z czego 522 ha leży po stronie
 *   polskiej, a 2 lipca 2004 r. wpisano go na listę
 *   światowego dziedzictwa UNESCO — wpisem objęto 348 ha,
 *   w tym blisko 212 ha po stronie polskiej,
 * — po polskiej stronie znajdują się m.in. Wnętrze Centralne,
 *   okolice Domku Angielskiego, Bażanciarnia, Szkółki
 *   i Arboretum o powierzchni 55,4 ha, założone w latach
 *   1856–1867 przez Eduarda Petzolda i liczące ponad
 *   trzy tysiące gatunków drzew i krzewów; Szkółki
 *   produkowały materiał roślinny na potrzeby parku,
 * — kopalnia Babina działała w latach 1921–1973; wydobywano
 *   węgiel brunatny, eksploatowano także iły i mułki
 *   ałunowe, a po wyrobiskach zostało ponad sto zbiorników
 *   wodnych o łącznej powierzchni około 150 ha po polskiej
 *   stronie,
 * — wody tych zbiorników są kwaśne wskutek rozkładu pirytu
 *   i zawierają m.in. żelazo, mangan, wapń, magnez, sód,
 *   potas, chlor i siarczany; ryby w nich nie żyją,
 * — Geopark Łuk Mużakowa należy do sieci geoparków
 *   europejskich pod auspicjami UNESCO od 2011 r., a ścieżka
 *   geoturystyczna „Dawna Kopalnia Babina" liczy około
 *   czterech kilometrów i prowadzi obok drewnianej wieży
 *   widokowej o wysokości dwudziestu czterech metrów.
 */
export const LEKNICA: CityContent = {
  slug: "leknica",
  h1: "Thermomix Łęknica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łęknica — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łęknicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łęknica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łęknicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łęknicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Łęknica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gdy daniu „czegoś brakuje”, najczęściej brakuje kwasu, a nie soli.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łęknicy – jak wygląda prezentacja?",
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
      id: "kwas",
      heading: "Kwaśne jeziorka Łuku Mużakowa — czyli o kwasie w kuchni",
      paragraphs: [
        "Pod Łęknicą, w miejscu dawnej kopalni Babina, która działała w latach 1921–1973, zostało po wyrobiskach ponad sto zbiorników wodnych o łącznej powierzchni około stu pięćdziesięciu hektarów. Ich woda jest kwaśna — to efekt rozkładu pirytu — i jest w niej żelazo, mangan, siarczany i cała reszta pierwiastków, które nadają tym jeziorkom nietypowe barwy. Ryby w nich nie żyją. Trudno o lepszy pretekst, żeby napisać o kwasie, bo w kuchni jest to smak najbardziej niedoceniany ze wszystkich.",
        "Sól dosypujemy odruchowo. Kwasu — prawie nigdy. A prawda jest taka, że kiedy mówimy „daniu czegoś brakuje”, bardzo często brakuje właśnie kwasu, nie soli. Warto to sprawdzić, zanim dosoli się po raz trzeci, bo przesolone danie trudno uratować, a kilka kropel soku z cytryny kosztuje nic.",
        "Co kwas robi? Cztery rzeczy naraz. Podbija pozostałe smaki, tak jak sól, tylko inaczej. Przecina tłuszcz, więc ciężkie danie przestaje kleić się w ustach. Odświeża potrawę mdłą i płaską. I równoważy słodycz — dlatego w sosach pomidorowych z cukrem i w wielu deserach kwas jest obowiązkowy.",
        "Źródła kwasu nie są wymienne, i to jest rzecz, o której warto pamiętać przy przepisach. Ocet jest ostry i właściwie płaski — wnosi kwas i nic poza tym. Cytryna jest świeża i aromatyczna, bo do kwasu dokłada zapach. Kwaśna śmietana i jogurt są łagodne i kremowe, kwas rozkłada się w nich na całe danie. A pomidor i kiszonka wnoszą kwas razem ze swoim własnym, wyraźnym smakiem — i dlatego nie da się ich podmienić na ocet bez zmiany charakteru potrawy.",
        "Moment dodania bywa ważniejszy niż ilość. Sok z cytryny dodaje się na samym końcu, bo jego aromat ulatuje przy gotowaniu — cytryna wrzucona na początku zostawia po sobie tylko kwas, bez zapachu. Ocet może iść wcześniej, bo nie ma czego stracić. A kwaśny nabiał dodaje się do dania, które już przestało wrzeć, żeby się nie zwarzył.",
        "Jest też rzecz, która psuje więcej obiadów, niż się wydaje: kwas spowalnia mięknięcie. Fasola, ciecierzyca i groch w kwaśnym płynie potrafią zostać twarde bardzo długo. Dlatego pomidory, ocet i wino dodaje się do nich dopiero wtedy, gdy są już miękkie — a nie na początku, razem z resztą. Kto raz gotował fasolę w sosie pomidorowym od pierwszej minuty, wie, o czym mówię.",
        "Drobna, ale przydatna rzecz: kwas zatrzymuje ciemnienie. Pokrojone jabłka, seler, karczochy i awokado skropione sokiem z cytryny zostają jasne. To jedyny sposób, który naprawdę działa, i kosztuje pół minuty.",
        "Przy doprawianiu obowiązuje zasada małych kroków. Dodać odrobinę, wymieszać, spróbować, poczekać chwilę i ewentualnie powtórzyć. Nadmiaru kwasu nie da się cofnąć — to nie jest jak z solą, którą można rozcieńczyć ziemniakiem, mimo że i to jest przesadzone.",
        "A jeśli już przesadzicie, to soli nie dodawajcie — ona tego nie zneutralizuje, tylko nałoży drugi problem na pierwszy. Pomaga coś tłustego (śmietana, masło, oliwa), coś słodkiego (odrobina cukru albo miodu) albo po prostu zwiększenie objętości dania — dolanie bulionu, dorzucenie ziemniaka, dołożenie warzyw.",
        "Teraz uczciwie o sprzęcie. To jest wiedza, a nie funkcja. Żadne urządzenie nie powie Wam, że daniu brakuje kwasu — to zostaje po stronie osoby, która próbuje łyżeczką.",
        "Thermomix pomaga natomiast w rzeczy, która przy kwasie jest naprawdę uciążliwa: w powtarzalności. Kiedy już raz ustalicie, ile kwasu potrzebuje Wasz sos, dressing albo zupa, urządzenie odtworzy to dokładnie za każdym razem. Przy potrawach, które „raz wychodzą, a raz nie”, różnica prawie zawsze siedzi właśnie tu — w dwóch kroplach więcej albo mniej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łęknicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie danie, które „raz wychodzi, a raz nie” — powiedzcie przy umawianiu. Zrobimy je razem i poszukamy, gdzie ucieka różnica.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łęknicy"),
    sekcjaRaty("w Łęknicy"),
    {
      id: "rodzina",
      heading: "Thermomix dla łęknickiej rodziny",
      paragraphs: [
        "Łęknica jest gminą miejską liczącą ponad dwa tysiące dwieście mieszkańców na szesnastu kilometrach kwadratowych; jako Lugknitz wzmiankowano ją około 1505 roku, a prawa miejskie otrzymała dopiero w XX wieku. Leży przy Parku Mużakowskim, który Hermann von Pückler-Muskau założył 1 maja 1815 roku po czterech latach przygotowań: park liczy ponad siedemset hektarów, z czego pięćset dwadzieścia dwa leżą po stronie polskiej, a 2 lipca 2004 roku wpisano go na listę światowego dziedzictwa UNESCO — wpisem objęto trzysta czterdzieści osiem hektarów, w tym blisko dwieście dwanaście po polskiej stronie. Po tej stronie znajdują się Wnętrze Centralne, okolice Domku Angielskiego, Bażanciarnia, Szkółki i Arboretum o powierzchni pięćdziesięciu pięciu hektarów, założone w latach 1856–1867 przez Eduarda Petzolda i liczące ponad trzy tysiące gatunków drzew i krzewów; Szkółki produkowały materiał roślinny na potrzeby parku. Drugą osobliwością okolicy jest Łuk Mużakowa: po kopalni Babina, działającej w latach 1921–1973, zostało ponad sto zbiorników wodnych o łącznej powierzchni około stu pięćdziesięciu hektarów, o wodzie kwaśnej wskutek rozkładu pirytu. Geopark Łuk Mużakowa należy do sieci geoparków europejskich pod auspicjami UNESCO od 2011 roku, a ścieżka „Dawna Kopalnia Babina” liczy około czterech kilometrów i prowadzi obok drewnianej wieży widokowej wysokiej na dwadzieścia cztery metry.",
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

  districtsHeading: "Do których części Łęknicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — także do zabudowy przy Parku Mużakowskim. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Łęknicę też przyjadę",
  nearbyParagraphs: [
    "Trzebiel, Tuplice, Przewóz, Żary, Lubsko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Trzebiel", "Tuplice", "Przewóz", "Żary", "Lubsko"],

  about: blokOMnie("do Łęknicy", "w Łęknicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łęknicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Łęknicę w powiecie żarskim, a nie o Łękno czy Lipnicę.",
    },
    ...faqWspolne("w Łęknicy"),
    {
      question: "Skąd wiadomo, że daniu brakuje kwasu, a nie soli?",
      answer:
        "Po tym, że danie jest płaskie i ciężkie mimo doprawienia — a po dosoleniu robi się słone, ale nadal mdłe. Wtedy warto spróbować kilku kropel soku z cytryny albo odrobiny octu: kwas podbija pozostałe smaki, przecina tłuszcz i równoważy słodycz.",
    },
    {
      question: "Kiedy dodawać sok z cytryny, a kiedy ocet?",
      answer:
        "Sok z cytryny na samym końcu, bo jego aromat ulatuje przy gotowaniu — dodany wcześniej zostawia sam kwas, bez zapachu. Ocet może iść wcześniej. Kwaśną śmietanę i jogurt dodaje się do dania, które przestało już wrzeć, żeby się nie zwarzyły.",
    },
    {
      question: "Dlaczego fasola nie mięknie w sosie pomidorowym?",
      answer:
        "Bo kwas spowalnia mięknięcie strączków. Fasolę, ciecierzycę i groch gotuje się najpierw do miękkości, a pomidory, ocet czy wino dodaje dopiero potem. Dodane od pierwszej minuty potrafią zostawić strączki twarde bardzo długo.",
    },
  ],

  geo: { lat: 51.5414, lng: 14.7359 },
};
