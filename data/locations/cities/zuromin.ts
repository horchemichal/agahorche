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
 * ŻUROMIN — powiat żuromiński, woj. mazowieckie.
 * MIASTO 8 403 (GUS 31.12.2024), 11,2 km², 751,6 os./km².
 * Gmina: 132,9 km², ok. 13 200 mieszkańców, 31 miejscowości,
 * 47,2% pracujących zawodowo w rolnictwie.
 *
 * ⚠ HOMONIMY: ŻUROMIN ≠ ŻUROMINEK ≠ ŻERKÓW.
 *   ⚠ JEZIORO ŻUROMINO to inny obiekt, POZA woj. mazowieckim
 *     — NIE WYMIENIAM GO. FAQ rozróżnia nazwy.
 *
 * HISTORIA:
 * — ⚠ ŻUROMIN NIE JEST STARYM MIASTEM ŚREDNIOWIECZNYM.
 *   PRAWA MIEJSKIE DOPIERO 1765 r.; miasto wyrosło przy
 *   XVIII-wiecznym sanktuarium. NIE TWIERDZĘ INACZEJ.
 * — sanktuarium: lipiec 1704 — obraz trafia do rolnika Blocha;
 *   1706 początek kultu; 1708 kaplica; 1714 kościół drewniany;
 *   jezuici 1718–1773; reformaci — kościół murowany 1786,
 *   klasztor 1797; kasata 1864; parafia 1908; koronacja
 *   obrazu 2000,
 *   ⚠ WĄTKU RELIGIJNEGO NIE ROZWIJAM — wymieniam wyłącznie
 *     jako datowany zespół zabytkowy i przyczynę powstania
 *     miasta. TWARDA GRANICA.
 * — zespół kościoła Świętej Trójcy i klasztoru Reformatów —
 *   barok, 1715–1780, ul. Kościuszki 4; remonty 1969
 *   i 1997–2000.
 *
 * ⚠⚠ GOSPODARKA — PODSTAWA KĄTA:
 * — powiat: 5 374 indywidualne gospodarstwa rolne, ŚREDNIA
 *   POWIERZCHNIA 9,12 ha; grunty orne 48%, łąki i pastwiska
 *   24%, lasy 18%; w produkcji roślinnej dominują zboża,
 *   ziemniaki i buraki cukrowe; ok. 400 FERM DROBIU,
 * — ⚠⚠ „ILOŚĆ PRODUKCJI ZWIERZĘCEJ NA 1 ha STAWIA NAS
 *   NA I MIEJSCU W WOJEWÓDZTWIE" (deklaracja powiatu),
 * — ⚠⚠ TO JEST ZAGŁĘBIE DROBIU **I ŚWIŃ**: ok. 200 TYS. ŚWIŃ
 *   w rejonie żuromińskim w gospodarstwach współpracujących
 *   z jednym tylko integratorem; prasa branżowa pisze,
 *   że „nigdzie w Polsce nie ma tak dużego zagęszczenia
 *   produkcji zwierząt". TO JEST KOTWICA.
 * — przetwórstwo: mleczarstwo (spółdzielnia mleczarska
 *   i zakład przetwórstwa mleka), skup i przetwórstwo drobiu;
 *   poza spożywką — elektronika, odzież, drewno (parkiety),
 *   terrazzo.
 *   ⚠ NAZW FIRM NIE PODAJĘ. TWARDA GRANICA.
 * ⚠⚠ KĄTY „KURCZAK" (Kostrzyn) i „INDYK" (Sława) SĄ ZAJĘTE
 *   — drobiu NIE ROBIĘ TEMATEM. Kąty „mleko i nabiał",
 *   „sery", „twaróg" też ZAJĘTE.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠ NAZW OSIEDLI MIEJSKICH NIE USTALONO — districts PUSTE.
 * ⚠ HISTORII GOSPODARCZEJ SPRZED 1765 r. NIE USTALONO.
 *
 * KĄT: WIEPRZOWINA — najczęściej kupowane mięso w Polsce
 * i najgorzej traktowane.
 * Kąt od tego, że rejon żuromiński jest zagłębiem nie tylko
 * drobiu, ale i trzody: około dwustu tysięcy świń w samych
 * gospodarstwach jednego integratora, przy najwyższym w kraju
 * zagęszczeniu produkcji zwierzęcej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wieprzowina jest w Polsce mięsem domyślnym — kupowanym
 *   najczęściej i jednocześnie najrzadziej przemyślanym,
 * — ⚠⚠ RZECZ NAJWAŻNIEJSZA: „WIEPRZOWINA" TO NIE JEST JEDEN
 *   PRODUKT. Poszczególne części zachowują się w kuchni
 *   zupełnie inaczej i to jest źródło większości nieudanych
 *   obiadów,
 * — SCHAB — najchudszy i najmniej wybaczający; wysycha
 *   w kilka minut, bo nie ma w nim tłuszczu, który by to
 *   maskował; nadaje się do krótkiej obróbki, nie do duszenia,
 * — KARKÓWKA — przerośnięta tłuszczem, więc wybacza prawie
 *   wszystko: piecze się długo, dusi i grilluje,
 * — ŁOPATKA — do duszenia i mielenia, potrzebuje czasu,
 * — BOCZEK — najtłustszy, używany raczej jako dodatek
 *   niż jako danie,
 * — GOLONKA I ŻEBERKA — wymagają długiego, wolnego gotowania
 *   i niczego innego,
 * — ⚠⚠ ZASADA, KTÓRA PORZĄDKUJE CAŁOŚĆ: IM CHUDSZY KAWAŁEK,
 *   TYM KRÓTSZA OBRÓBKA. Odwrotnie niż podpowiada instynkt,
 *   bo chude wydaje się „lżejsze" i kuszące do duszenia,
 * — ŻE SCHAB NA NIEDZIELNY OBIAD JEST NAJCZĘSTSZYM BŁĘDEM
 *   POLSKIEJ KUCHNI: kupuje się go, bo jest „porządny",
 *   a potem piecze godzinę i wychodzi sucho,
 * — ŻE POMAGA SOLENIE Z WYPRZEDZENIEM, ale nie jest cudem
 *   ⚠ BEZ PROPORCJI I BEZ CZASÓW,
 * — ŻE MIĘSO Z KOŚCIĄ JEST PRAWIE ZAWSZE LEPSZE niż to samo
 *   bez kości,
 * — ŻE KUPUJĄC W KAWAŁKU I DZIELĄC SAMEMU, dostaje się
 *   świeższe mięso niż kupując pokrojone
 *   ⚠ ODSYŁAM DO STRONY O TYM, CO PSUJE SIĘ NAJPIERW,
 * — UCZCIWIE: urządzenie nie usmaży kotleta i nie zastąpi
 *   patelni ani piekarnika przy wieprzowinie,
 * — ale sprawdza się przy tej części, która wymaga czasu
 *   i pilnowania: łopatka, golonka i żeberka duszone długo
 *   wychodzą tam bez stania przy garnku, a mielenie własnej
 *   karkówki daje mięso mielone, którego w sklepie
 *   się nie kupi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I DIETETYCZNYCH.
 *   ZERO tez o czerwonym mięsie, tłuszczu nasyconym,
 *   cholesterolu i zaleceniach żywieniowych. TWARDA GRANICA.
 * — ⚠⚠ ZERO TEMATU HODOWLI PRZEMYSŁOWEJ, DOBROSTANU ZWIERZĄT
 *   I UBOJU. Skalę produkcji podaję jako suchy fakt
 *   gospodarczy w bloku o mieście i nic poza tym.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU DROBIU — kąty ZAJĘTE.
 * — ZERO tematu cen mięsa.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ⚠ ZERO WĄTKU RELIGIJNEGO — sanktuarium wyłącznie jako
 *   datowany zabytek i przyczyna powstania miasta.
 *   TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „WOŁOWINA" (Szprotawa) dotyczy WOŁOWINY.
 * — „BARANINA I JAGNIĘCINA" (Kożuchów) dotyczy BARANINY.
 * — „KURCZAK" i „INDYK" dotyczą DROBIU.
 * — „GĘŚ" (Gostynin) dotyczy GĘSI.
 * — „PODROBY" (Sokołów Podlaski) dotyczą WNĘTRZNOŚCI.
 * — „MIELONE MIĘSO I MASZYNKA" (Miastko) dotyczy MIELENIA.
 * — „WIELKOŚĆ KAWAŁKÓW" i „KIERUNEK CIĘCIA" dotyczą KROJENIA.
 * — „ODPOCZYNEK PO UPIECZENIU" dotyczy JEDNEGO ETAPU.
 * TUTAJ chodzi WYŁĄCZNIE O WIEPRZOWINĘ — o to, że jej części
 * zachowują się inaczej i wymagają innej obróbki.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że Żuromin jest starym miastem.
 * — NIE WYMIENIAM jeziora Żuromino.
 * — NIE PODAJĘ nazw firm ani osiedli.
 * — NIE PODAJĘ historii gospodarczej sprzed 1765 r.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE PISZĘ o hodowli przemysłowej ani o uboju.
 * — NIE STAWIAM TEZ ZDROWOTNYCH O MIĘSIE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Żuromin otrzymał prawa miejskie dopiero w 1765 r.,
 *   a miasto wyrosło przy osiemnastowiecznym zespole
 *   klasztornym: kaplica stanęła tu w 1708 r., drewniany
 *   kościół w 1714, murowany w 1786, a klasztor w 1797;
 *   barokowy zespół kościoła Świętej Trójcy i klasztoru
 *   Reformatów przy ulicy Kościuszki powstawał w latach
 *   1715–1780 i był remontowany w 1969 oraz w latach
 *   1997–2000,
 * — w powiecie żuromińskim działa 5374 indywidualnych
 *   gospodarstw rolnych o średniej powierzchni 9,12 ha;
 *   grunty orne zajmują 48% powierzchni, łąki i pastwiska
 *   24%, a lasy 18%; w produkcji roślinnej dominują zboża,
 *   ziemniaki i buraki cukrowe,
 * — powiat podaje, że ilość produkcji zwierzęcej na hektar
 *   stawia go na pierwszym miejscu w województwie; działa tu
 *   około czterystu ferm drobiu, a w rejonie żuromińskim
 *   utrzymuje się również około dwustu tysięcy świń
 *   w gospodarstwach współpracujących z jednym integratorem
 *   — prasa branżowa pisze, że nigdzie w Polsce nie ma tak
 *   dużego zagęszczenia produkcji zwierzęcej,
 * — przetwórstwo obejmuje mleczarstwo oraz skup i przetwórstwo
 *   drobiu; poza branżą spożywczą działają tu elektronika,
 *   odzież, produkcja parkietów i terrazzo,
 * — gmina Żuromin liczy niespełna sto trzydzieści trzy
 *   kilometry kwadratowe i trzydzieści jeden miejscowości,
 *   a w rolnictwie pracuje zawodowo blisko połowa
 *   zatrudnionych.
 */
export const ZUROMIN: CityContent = {
  slug: "zuromin",
  h1: "Thermomix Żuromin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żuromin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Żurominie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żuromin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żurominie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żuromina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Żuromin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Im chudszy kawałek wieprzowiny, tym krótsza obróbka. Instynkt mówi odwrotnie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żurominie – jak wygląda prezentacja?",
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
      id: "wieprzowina",
      heading: "Zagłębie nie tylko drobiowe — czyli o wieprzowinie",
      paragraphs: [
        "Powiat żuromiński kojarzy się przede wszystkim z drobiem — działa tu około czterystu ferm. Ale to samo miejsce jest również zagłębiem trzody: w rejonie żuromińskim utrzymuje się około dwustu tysięcy świń w gospodarstwach współpracujących z jednym tylko integratorem, a prasa branżowa pisze wprost, że nigdzie w Polsce nie ma tak dużego zagęszczenia produkcji zwierzęcej. Sam powiat podaje, że ilość produkcji zwierzęcej na hektar stawia go na pierwszym miejscu w województwie. To chyba najbardziej oczywiste miejsce w Polsce, żeby napisać o wieprzowinie.",
        "A wieprzowina jest u nas mięsem domyślnym: kupowanym najczęściej i jednocześnie najrzadziej przemyślanym. Bierze się „kawałek schabu” albo „coś na obiad” i dopiero przy stole okazuje się, że wyszło sucho.",
        "Rzecz najważniejsza brzmi tak: „wieprzowina” nie jest jednym produktem. Poszczególne części zachowują się w kuchni zupełnie inaczej i to jest źródło większości nieudanych obiadów — częściej niż przepis, patelnia czy piekarnik.",
        "Schab jest najchudszy i najmniej wybaczający. Nie ma w nim tłuszczu, który zamaskowałby przesuszenie, więc wysycha w kilka minut i już się tego nie odwróci. Nadaje się do krótkiej obróbki — nie do duszenia i nie do godzinnego pieczenia.",
        "Karkówka jest jego przeciwieństwem: przerośnięta tłuszczem, więc wybacza prawie wszystko. Można ją piec długo, dusić, grillować i zapomnieć o niej na chwilę. Jeśli ktoś dopiero zaczyna, to właśnie od karkówki, a nie od schabu.",
        "Łopatka jest do duszenia i do mielenia i potrzebuje czasu. Boczek jest najtłustszy i sprawdza się raczej jako dodatek nadający smak niż jako danie samo w sobie. Golonka i żeberka wymagają długiego, wolnego gotowania i niczego innego — próba zrobienia ich szybko kończy się zawsze tak samo.",
        "Wszystko to układa się w jedną zasadę, którą warto zapamiętać: im chudszy kawałek, tym krótsza obróbka. Instynkt podpowiada dokładnie odwrotnie, bo chude mięso wydaje się „porządniejsze” i kusi, żeby je długo dusić albo piec. To jest pułapka.",
        "I stąd bierze się chyba najczęstszy błąd polskiej kuchni: schab na niedzielny obiad. Kupuje się go, bo wydaje się najbardziej odpowiedni na okazję, a potem piecze godzinę — i wychodzi sucho. Ta sama godzina i ta sama temperatura z karkówką dałyby coś zupełnie innego.",
        "Dwie rzeczy, które realnie pomagają. Solenie mięsa z wyprzedzeniem, a nie tuż przed obróbką — to nie jest cud, ale różnicę widać. I kupowanie mięsa z kością tam, gdzie się da: karkówka z kością, żeberka, golonka są prawie zawsze lepsze niż to samo mięso bez kości.",
        "Warto też kupować w kawałku i dzielić samemu. Mięso pokrojone w sklepie ma znacznie większą powierzchnię, a to przekłada się wprost na świeżość — pisałam o tym osobno, przy tym, co psuje się najpierw.",
        "Teraz uczciwie o sprzęcie. Thermomix nie usmaży kotleta schabowego i nie upiecze karkówki. Przy wieprzowinie nie zastąpi ani patelni, ani piekarnika — i to jest dość dużo rzeczy naraz.",
        "Sprawdza się natomiast w tej części, która wymaga czasu i pilnowania. Łopatka, golonka i żeberka duszone długo wychodzą w nim bez stania przy garnku i bez ryzyka, że przywrą do dna. A zmielenie własnej karkówki daje mięso mielone, którego w sklepie się nie kupi — bo wiadomo, co w nim jest. To jest podział pracy, w którym każda strona robi to, co potrafi.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żurominie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć mielenie mięsa albo duszenie bez pilnowania — powiedzcie przy umawianiu, zaplanuję prezentację pod to.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żurominie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żuromińskiej rodziny",
      paragraphs: [
        "Żuromin liczy ponad osiem tysięcy mieszkańców na jedenastu kilometrach kwadratowych i jest siedzibą gminy o powierzchni blisko stu trzydziestu trzech kilometrów z trzydziestoma jeden miejscowościami. Prawa miejskie otrzymał dopiero w 1765 roku, a samo miasto wyrosło przy osiemnastowiecznym zespole klasztornym: kaplica stanęła tu w 1708 roku, drewniany kościół w 1714, murowany w 1786, a klasztor w 1797. Barokowy zespół kościoła Świętej Trójcy i klasztoru Reformatów przy ulicy Kościuszki powstawał w latach 1715–1780 i był remontowany w 1969 oraz w latach 1997–2000. W powiecie żuromińskim działa ponad pięć tysięcy trzysta indywidualnych gospodarstw rolnych o średniej powierzchni nieco ponad dziewięciu hektarów; grunty orne zajmują czterdzieści osiem procent powierzchni, łąki i pastwiska dwadzieścia cztery, a lasy osiemnaście, przy czym w produkcji roślinnej dominują zboża, ziemniaki i buraki cukrowe. Powiat podaje, że ilość produkcji zwierzęcej na hektar stawia go na pierwszym miejscu w województwie: działa tu około czterystu ferm drobiu, a w rejonie utrzymuje się również około dwustu tysięcy świń. Przetwórstwo obejmuje mleczarstwo oraz skup i przetwórstwo drobiu, a poza branżą spożywczą działają elektronika, odzież, produkcja parkietów i terrazzo. W rolnictwie pracuje zawodowo blisko połowa zatrudnionych w gminie.",
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

  districtsHeading: "Do których części Żuromina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic klasztoru po osiedla na obrzeżach. Dojeżdżam też do wsi w gminie, między innymi do Białego Błota, Brudnic i Młudzyna.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Żuromin też przyjadę",
  nearbyParagraphs: [
    "Bieżuń, Lutocin, Kuczbork-Osada, Lubowidz, Sierpc i Mława są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bieżuń", "Sierpc", "Mława", "Rypin"],

  about: blokOMnie("do Żuromina", "w Żurominie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żuromina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie, w tym Białego Błota, Brudnic i Młudzyna. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Żuromin w powiecie żuromińskim, a nie o Żurominek.",
    },
    ...faqWspolne("w Żurominie"),
    {
      question: "Dlaczego schab wychodzi suchy?",
      answer:
        "Bo jest najchudszą częścią wieprzowiny i nie ma w nim tłuszczu, który zamaskowałby przesuszenie. Nadaje się do krótkiej obróbki, a nie do duszenia czy godzinnego pieczenia. Zasada, która porządkuje całość, brzmi: im chudszy kawałek, tym krótsza obróbka — instynkt podpowiada odwrotnie.",
    },
    {
      question: "Którą część wieprzowiny wybrać na początek?",
      answer:
        "Karkówkę. Jest przerośnięta tłuszczem, więc wybacza prawie wszystko: można ją piec długo, dusić i grillować. Łopatka jest do duszenia i mielenia, boczek raczej jako dodatek nadający smak, a golonka i żeberka wymagają długiego, wolnego gotowania i niczego innego.",
    },
    {
      question: "Czy warto kupować mięso z kością?",
      answer:
        "Tam, gdzie się da — tak. Karkówka z kością, żeberka i golonka są prawie zawsze lepsze niż to samo mięso bez kości. Warto też kupować w kawałku i dzielić samemu: mięso pokrojone w sklepie ma znacznie większą powierzchnię, a to przekłada się wprost na świeżość.",
    },
  ],

  geo: { lat: 53.0661, lng: 19.909 },
};
