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
 * SZTABIN — ⚠⚠ GMINA WIEJSKA w powiecie augustowskim.
 * SIEDZIBĄ JEST WIEŚ, NIE MIASTO. NIGDZIE NIE PISZĘ „MIASTO".
 * GMINA 4 467 (GUS 31.12.2024), 362,8 km², gęstość 13 os./km²,
 * 39 sołectw (⚠ inne źródło mówi o ponad pięćdziesięciu wsiach —
 * podaję TYLKO liczbę sołectw). Sama wieś ok. 1 000 osób.
 *
 * HISTORIA: pierwotna nazwa OSINKI, pierwsza wzmianka 1598 r.
 * JOACHIM CHREPTOWICZ kupił dobra w 1757 r. i uzyskał
 * KRÓLEWSKI PRZYWILEJ TARGOWY W 1766 r. — wtedy wytyczono
 * REGULARNY RYNEK, który przetrwał do dziś. Przy nim
 * NEOGOTYCKI KOŚCIÓŁ i POPIERSIE CHREPTOWICZA.
 *
 * ⚠⚠ KAROL BRZOSTOWSKI (1796–1854) — PODSTAWA KĄTA.
 * Wnuk Chreptowicza. Przez 35 lat zarządzał 12 831 ha
 * i 27 wsiami z ok. 3 700 poddanymi:
 * — zniósł pańszczyznę, zamieniając ją na czynsz,
 * — ⚠⚠ UWŁASZCZYŁ CHŁOPÓW W 1854 r. — DZIESIĘĆ LAT PRZED
 *   CARSKIM UKAZEM,
 * — założył KASĘ OSZCZĘDNOŚCIOWO-POŻYCZKOWĄ, SZKOŁĘ
 *   i KASĘ LEKARSKĄ,
 * — wprowadził PŁODOZMIAN CZTEROPOLOWY w 1823 r.,
 * — prowadził HUTĘ SZTABIŃSKĄ produkującą maszyny rolnicze,
 * — w 1845 r. zbudował TELEGRAF.
 * Na okolicznych cmentarzach zachowały się ŻELIWNE NAGROBKI
 * z jego huty. Całość nazywano „RZECZPOSPOLITĄ SZTABIŃSKĄ".
 * ⚠⚠ NIE POWTARZAM niepotwierdzonych, jednoźródłowych
 *   twierdzeń, że był pierwszy w Polsce z wódką buraczaną
 *   ani pierwszy w Europie z dojarkami mechanicznymi
 *   i kopaczkami do ziemniaków.
 * ⚠ KASY LEKARSKIEJ NIE ROZWIJAM — zero wątków zdrowotnych.
 *
 * ŚLUZA DĘBOWO — PIERWSZA ŚLUZA KANAŁU AUGUSTOWSKIEGO,
 * na km 0,35, zbudowana 1826–1827, leży w tej gminie.
 * Kanał: 1824–1838, 103,4 km, 18 śluz, gen. IGNACY PRĄDZYŃSKI,
 * Pomnik Historii.
 * BIEBRZAŃSKI PARK NARODOWY (17 września 1993, 59 223 ha,
 * otulina 66 824 ha) obejmuje część gminy.
 * JAGŁOWO — drewniana architektura wiejska.
 *
 * KĄT: PRZEKAZYWANIE UMIEJĘTNOŚCI — JAK SIĘ KOGOŚ UCZY
 * GOTOWANIA. Kąt od człowieka, który zamiast rozdawać,
 * zbudował szkołę i kasę — czyli postawił na to,
 * żeby ludzie umieli sami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to jest tekst z drugiej strony: nie dla kogoś, kto
 *   się uczy, tylko DLA KOGOŚ, KTO UCZY — rodzica, babci,
 *   partnera, starszego rodzeństwa,
 * — ŻE NAJCZĘSTSZY BŁĄD TO POKAZYWANIE ZAMIAST ODDAWANIA:
 *   „odsuń się, ja zrobię szybciej" kończy naukę,
 * — że nauka kosztuje czas i bałagan, i trzeba się na to
 *   zgodzić z góry albo w ogóle nie zaczynać,
 * — CO DZIAŁA: dać jedną całą rzecz do końca zamiast
 *   pięciu fragmentów; własne danie od początku do końca
 *   uczy więcej niż dziesięć razy podawanie składników,
 * — że trzeba pozwolić, żeby nie wyszło — bo dopiero
 *   nieudane danie uczy, dlaczego coś się robi tak, a nie
 *   inaczej,
 * — ŻE NIE WOLNO POPRAWIAĆ PRZY LUDZIACH ANI W TRAKCIE,
 *   jeśli nie chodzi o bezpieczeństwo,
 * — że warto mówić PO CO, nie tylko CO: „mieszamy, żeby
 *   się nie przypaliło" zostaje, samo „mieszaj" nie zostaje,
 * — DOROŚLI UCZĄ SIĘ INACZEJ NIŻ DZIECI: dorosły wstydzi
 *   się nieumiejętności i potrzebuje szybkiego sukcesu,
 *   dziecko potrzebuje udziału,
 * — że przepisy rodzinne przekazuje się przez wspólne
 *   robienie, nie przez zapisanie — zapis jest tylko notatką,
 * — UCZCIWIE: urządzenie nie nauczy nikogo gotować i uczy
 *   raczej obsługi niż kuchni,
 * — ale robi jedną rzecz, która uczeniu bardzo sprzyja:
 *   obniża cenę porażki. Gdy pierwsze samodzielne danie
 *   wychodzi, człowiek robi drugie — a to jest cały
 *   mechanizm.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠ ZERO PORAD PEDAGOGICZNYCH I PSYCHOLOGICZNYCH.
 *   Piszę o KUCHNI, nie o wychowaniu. Bez teorii uczenia się,
 *   bez „etapów rozwoju", bez ocen cudzego rodzicielstwa.
 * — ⚠ ZERO ról płciowych. Nie zakładam, kto w domu uczy
 *   i kto gotuje.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia, powstań.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ⚠ PAŃSZCZYZNĘ I UWŁASZCZENIE PODAJĘ JAKO SUCHE FAKTY
 *   GOSPODARCZE, bez opisu ucisku i bez ocen politycznych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Nauka gotowania od zera"
 * i „nie umiem gotować" są pisane Z PERSPEKTYWY UCZĄCEGO SIĘ.
 * „Kto uczy obsługi" dotyczy wsparcia po zakupie urządzenia.
 * „Trzy pokolenia pod jednym dachem" dotyczy mieszkania razem.
 * „Odtwarzanie przepisu, którego nikt nie zapisał" dotyczy
 * rekonstrukcji. Tutaj chodzi o PERSPEKTYWĘ TEGO, KTO UCZY —
 * i o to, co robi źle.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Sztabina miastem. To WIEŚ i gmina wiejska.
 * — NIE PODAJĘ liczby wsi (sprzeczne źródła) — tylko sołectwa.
 * — NIE POWTARZAM jednoźródłowych twierdzeń o pierwszeństwie
 *   Brzostowskiego w wódce buraczanej, dojarkach i kopaczkach.
 * — NIE ROZWIJAM wątku kasy lekarskiej.
 * — NIE MYLĘ SZTABINA ze SZTUMEM (pomorskie) ani ze SZTABIŃSKĄ
 *   HUTĄ jako osobną miejscowością. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina wiejska licząca blisko cztery i pół tysiąca
 *   mieszkańców na 362,8 km², z gęstością trzynastu osób
 *   na kilometr kwadratowy i trzydziestoma dziewięcioma
 *   sołectwami; sama wieś to około tysiąca osób,
 * — pierwotnie nazywała się Osinki, pierwsza wzmianka
 *   pochodzi z 1598 r.; Joachim Chreptowicz kupił dobra
 *   w 1757 r. i w 1766 uzyskał królewski przywilej targowy,
 *   wtedy wytyczono regularny rynek, który przetrwał do dziś,
 *   z neogotyckim kościołem i popiersiem Chreptowicza,
 * — jego wnuk Karol Brzostowski (1796–1854) przez trzydzieści
 *   pięć lat zarządzał 12 831 hektarami i dwudziestoma
 *   siedmioma wsiami z około trzema tysiącami siedmiuset
 *   poddanymi: zniósł pańszczyznę na rzecz czynszu,
 *   uwłaszczył chłopów w 1854 r. — dziesięć lat przed carskim
 *   ukazem — założył kasę oszczędnościowo-pożyczkową i szkołę,
 *   wprowadził płodozmian czteropolowy w 1823 r., prowadził
 *   Hutę Sztabińską produkującą maszyny rolnicze, a w 1845
 *   zbudował telegraf; na okolicznych cmentarzach zachowały
 *   się żeliwne nagrobki z jego huty, a całość nazywano
 *   „Rzeczpospolitą Sztabińską”,
 * — w gminie leży Śluza Dębowo, pierwsza śluza Kanału
 *   Augustowskiego, na 0,35 kilometrze, zbudowana w latach
 *   1826–1827; kanał powstawał w latach 1824–1838 według
 *   projektu gen. Ignacego Prądzyńskiego, ma 103,4 km
 *   i osiemnaście śluz, i jest Pomnikiem Historii,
 * — część gminy obejmuje Biebrzański Park Narodowy utworzony
 *   17 września 1993 r., liczący 59 223 ha i 66 824 ha otuliny;
 *   w Jagłowie zachowała się drewniana architektura wiejska.
 */
export const SZTABIN: CityContent = {
  slug: "sztabin",
  h1: "Thermomix Sztabin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sztabin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sztabinie: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sztabin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sztabinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sztabina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy.",

  highlights: highlightyStandardowe("Sztabin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najtrudniejsze w uczeniu gotowania jest nie odbierać chochli.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sztabinie – jak wygląda prezentacja?",
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
      id: "uczenie",
      heading: "Człowiek, który zamiast rozdawać zbudował szkołę — czyli jak się kogoś uczy gotować",
      paragraphs: [
        "Karol Brzostowski, wnuk Joachima Chreptowicza, przez trzydzieści pięć lat zarządzał tutaj majątkiem obejmującym dwadzieścia siedem wsi. Zniósł pańszczyznę na rzecz czynszu, uwłaszczył chłopów w 1854 roku — dziesięć lat przed carskim ukazem — założył kasę oszczędnościowo-pożyczkową i szkołę, wprowadził płodozmian czteropolowy, prowadził hutę produkującą maszyny rolnicze, a w 1845 roku postawił telegraf. Wspólnym mianownikiem tego wszystkiego było jedno: żeby ludzie umieli sami.",
        "Dlatego ta strona jest o czymś, o czym prawie się nie pisze — o gotowaniu widzianym z drugiej strony. Nie dla kogoś, kto się uczy, tylko dla kogoś, kto uczy: rodzica, babci, partnera, starszego rodzeństwa.",
        "Najczęstszy błąd jest jeden i popełniają go wszyscy, ja też. Pokazywanie zamiast oddawania. „Odsuń się, ja zrobię szybciej” to zdanie, które kończy naukę — a wypowiada się je z najlepszych pobudek, bo naprawdę zrobimy szybciej.",
        "Trzeba się z góry zgodzić na to, że nauka kosztuje czas i bałagan. Jeśli nie ma się na to zgody, lepiej w ogóle nie zaczynać, bo pół nauki jest gorsze niż żadna — zostawia człowieka z przekonaniem, że sobie nie poradzi.",
        "Co działa naprawdę: dać jedną całą rzecz do końca, zamiast pięciu fragmentów. Jedno własne danie, od zakupów po postawienie na stole, uczy więcej niż dziesięć razy podawanie składników i mieszanie na komendę. Fragmenty nie składają się w umiejętność.",
        "Trzeba też pozwolić, żeby nie wyszło. To jest najtrudniejsze i najważniejsze. Dopiero nieudane danie tłumaczy, dlaczego coś się robi tak, a nie inaczej — kiedy sos się zetnie albo ciasto opadnie, człowiek wreszcie rozumie, po co była ta cała ostrożność, o której mu się mówiło.",
        "Czego nie robić: nie poprawiać w trakcie i nie poprawiać przy ludziach. Wyjątkiem jest tylko bezpieczeństwo — gorący tłuszcz i nóż to nie jest miejsce na pedagogikę. Cała reszta może poczekać do następnego razu.",
        "Warto mówić po co, nie tylko co. „Mieszamy, żeby się nie przypaliło na dnie” zostaje w głowie na zawsze. Samo „mieszaj” nie zostaje na dłużej niż do końca gotowania i trzeba je powtarzać w nieskończoność.",
        "I rzecz, która zaskakuje: dorosły uczy się zupełnie inaczej niż dziecko. Dorosły wstydzi się tego, że czegoś nie umie, więc potrzebuje szybkiego sukcesu — jednego dania, które wyjdzie od razu i które będzie mógł zrobić komuś. Dziecko wstydu nie ma i potrzebuje czegoś innego: udziału, nawet w drobnej rzeczy, i tego, żeby efekt był widoczny.",
        "Przepisy rodzinne to osobna sprawa. One przekazują się przez wspólne robienie, nie przez zapisanie. Zapis jest tylko notatką — użyteczną, ale niepełną, bo nigdy nie zawiera tego, co się poznaje ręką i okiem. Kartka zostaje, umiejętność zostaje tylko wtedy, gdy ktoś stał obok.",
        "Teraz uczciwie o sprzęcie. Thermomix nikogo nie nauczy gotować i to trzeba powiedzieć wprost. Uczy raczej obsługi niż kuchni, a przepis z ekranu prowadzi za rękę tak dokładnie, że można go zrobić, niczego się nie ucząc.",
        "Robi natomiast jedną rzecz, która uczeniu bardzo sprzyja: obniża cenę porażki. Kiedy pierwsze samodzielne danie po prostu wychodzi, człowiek robi drugie, a potem trzecie — i dopiero wtedy zaczyna się prawdziwa nauka, bo zaczyna próbować po swojemu. Cała trudność w nauczeniu kogoś gotować polega na tym, żeby dotrwał do tego momentu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sztabinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy ktoś w domu dopiero zaczyna gotować. Wtedy pokażę raczej rzeczy, które wychodzą za pierwszym razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sztabinie"),
    sekcjaRaty("w Sztabinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla sztabińskiej rodziny",
      paragraphs: [
        "Gmina Sztabin liczy blisko cztery i pół tysiąca mieszkańców na trzystu sześćdziesięciu dwóch kilometrach kwadratowych, co daje trzynaście osób na kilometr, i dzieli się na trzydzieści dziewięć sołectw; sama wieś to około tysiąca osób. Pierwotnie nazywała się Osinki, a pierwsza wzmianka pochodzi z 1598 roku. Joachim Chreptowicz kupił tutejsze dobra w 1757 roku i w 1766 uzyskał królewski przywilej targowy — wtedy wytyczono regularny rynek, który przetrwał do dziś, z neogotyckim kościołem i popiersiem Chreptowicza. Jego wnuk Karol Brzostowski, żyjący w latach 1796–1854, zarządzał przez trzydzieści pięć lat blisko trzynastoma tysiącami hektarów i dwudziestoma siedmioma wsiami: zniósł pańszczyznę na rzecz czynszu, uwłaszczył chłopów w 1854 roku, założył kasę oszczędnościowo-pożyczkową i szkołę, wprowadził w 1823 płodozmian czteropolowy, prowadził Hutę Sztabińską produkującą maszyny rolnicze, a w 1845 zbudował telegraf; na okolicznych cmentarzach stoją żeliwne nagrobki z jego huty, a całe to przedsięwzięcie nazywano „Rzeczpospolitą Sztabińską”. W gminie leży Śluza Dębowo — pierwsza śluza Kanału Augustowskiego, na 0,35 kilometrze, zbudowana w latach 1826–1827; sam kanał powstawał w latach 1824–1838 według projektu generała Ignacego Prądzyńskiego, liczy 103,4 kilometra i osiemnaście śluz, i jest Pomnikiem Historii. Część gminy obejmuje Biebrzański Park Narodowy utworzony 17 września 1993 roku, a w Jagłowie zachowała się drewniana architektura wiejska.",
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

  districtsHeading: "Do których części gminy Sztabin dojeżdżam?",
  districtsParagraphs: [
    "Do Sztabina i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Sztabin też przyjadę",
  nearbyParagraphs: [
    "Augustów, Lipsk, Suchowola, Dąbrowa Białostocka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Augustów", "Lipsk", "Suchowola", "Dąbrowa Białostocka"],

  about: blokOMnie("do Sztabina", "w Sztabinie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sztabina bez dodatkowej opłaty?",
      answer:
        "Tak, do Sztabina i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Sztabin w powiecie augustowskim to nie Sztum w pomorskiem.",
    },
    ...faqWspolne("w Sztabinie"),
    {
      question: "Jak nauczyć kogoś gotować?",
      answer:
        "Dając jedną całą rzecz do końca, zamiast pięciu fragmentów — jedno własne danie od zakupów po stół uczy więcej niż dziesięć razy podawanie składników. Trzeba też pozwolić, żeby nie wyszło, bo dopiero nieudane danie tłumaczy, dlaczego coś się robi tak, a nie inaczej.",
    },
    {
      question: "Jaki jest najczęstszy błąd osoby uczącej?",
      answer:
        "Pokazywanie zamiast oddawania. „Odsuń się, ja zrobię szybciej” kończy naukę, a mówi się to z najlepszych pobudek. Warto też nie poprawiać w trakcie ani przy ludziach — wyjątkiem jest wyłącznie bezpieczeństwo — i mówić po co, a nie tylko co: „mieszamy, żeby się nie przypaliło” zostaje w głowie, samo „mieszaj” nie.",
    },
    {
      question: "Czy Thermomix nauczy gotować?",
      answer:
        "Nie — uczy raczej obsługi niż kuchni, a przepis z ekranu prowadzi za rękę tak dokładnie, że można go zrobić, niczego się nie ucząc. Robi natomiast jedną rzecz, która uczeniu sprzyja: obniża cenę porażki. Gdy pierwsze samodzielne danie wychodzi, człowiek robi drugie — i dopiero wtedy zaczyna próbować po swojemu.",
    },
  ],

  geo: { lat: 53.6303, lng: 23.0997 },
};
