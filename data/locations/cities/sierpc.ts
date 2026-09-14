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
 * SIERPC — powiat sierpecki, woj. mazowieckie.
 * MIASTO 16 827 (GUS 31.12.2024), 18,6 km², 905,2 os./km².
 * ⚠ BRIEF PODAWAŁ ~18 tys. — GUS mówi 16 827. UŻYWAM GUS.
 *
 * ⚠ HOMONIMY: SIERPC ≠ SIERADZ (łódzkie) ≠ SEROCK
 *   (powiat legionowski). FAQ to rozróżnia.
 *   Rzeka: SIERPIENICA (dopływ Skrwy).
 *
 * HISTORIA:
 * — 1065 — pierwsza wzmianka; 1322 — PRAWA MIEJSKIE;
 *   od XV w. miasto prywatne Sierpskich,
 * — 1509 — sukiennicy sierpeccy wyróżnieni przez Zygmunta
 *   Starego.
 *
 * ⚠⚠ PRZEMYSŁ SPOŻYWCZY — PODSTAWA KĄTA:
 * W mieście działają BROWAR, SŁODOWNIA — JEDNA Z NAJWIĘKSZYCH
 * W POLSCE — oraz spółdzielnia mleczarska produkująca sery
 * twarde.
 * ⚠⚠ NAZW FIRM I MAREK PIWA NIE PODAJĘ. TWARDA GRANICA.
 * ⚠⚠ TEMATEM JEST SŁÓD I KIEŁKOWANIE ZIARNA, NIE PIWO.
 *   ZERO ALKOHOLU W TEKŚCIE. Browar wymieniam wyłącznie
 *   jako jeden z zakładów w bloku o mieście. TWARDA GRANICA.
 * ⚠ KĄTY „sery", „twaróg", „mleko i nabiał" SĄ ZAJĘTE —
 *   mleczarni nie robię tematem.
 *
 * MUZEUM WSI MAZOWIECKIEJ (SKANSEN):
 * ⚠ DATA ZAŁOŻENIA SPORNA — mwmskansen.pl podaje 1975,
 *   mazowsze.travel 1971. PISZĘ „w latach siedemdziesiątych
 *   XX wieku", BEZ ROKU. TWARDA GRANICA.
 * — ok. 80 obiektów na 60,5 ha nad Sierpienicą przy jej
 *   ujściu do Skrwy,
 * — 9–11 zagród włościańskich, zagroda młynarska z wiatrakiem
 *   koźlakiem z Zalesia (czynny w niedziele V–IX), zespół
 *   karczemny z osiemnastowieczną karczmą (Pohulanka),
 *   kuźnia i chałupa kowala, OLEJARNIA, dwór z Uniszek
 *   Zawadzkich (XVIII w.), drewniany kościół,
 * — chałupy malowane na niebiesko ULTRAMARYNĄ,
 * — stałe pokazy: wypiek chleba, wyrób sera, suszenie ziół,
 *   pranie, kiszenie warzyw,
 * — nakręcono tu ponad 50 produkcji filmowych.
 * ⚠ KĄTU „KOLOR JEDZENIA" NIE UŻYWAM — ZAJĘTY, więc
 *   ultramaryna zostaje faktem w bloku o mieście.
 * ⚠ KĄTU KARCZEMNEGO NIE UŻYWAM — „jedzenie na mieście
 *   kontra gotowanie w domu" ZAJĘTE.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠ HASŁA „MIASTO ZE SMAKIEM" NIE UŻYWAM JAKO FAKTU —
 *   to marka miasta bez udokumentowanego uzasadnienia
 *   kulinarnego ani daty przyjęcia. TWARDA GRANICA.
 * ⚠ NAZW OSIEDLI MIEJSKICH NIE USTALONO — districts PUSTE.
 *
 * KĄT: KIEŁKOWANIE — ziarno, któremu każe się ruszyć
 * i w porę przestać.
 * Kąt od słodowni w Sierpcu, jednej z największych w Polsce:
 * słód to ziarno, które celowo doprowadzono do kiełkowania
 * i zatrzymano w ściśle wybranym momencie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kiełkowanie to jedyny proces w kuchni, w którym
 *   składnik ZMIENIA SIĘ SAM, bez ognia, noża i dodatków —
 *   wystarczy woda i czas,
 * — CO SIĘ W ZIARNIE DZIEJE: twarde i mączyste nasiono
 *   robi się słodsze i miękkie, bo rozkłada się skrobia;
 *   ⚠ PISZĘ TO JAKO FAKT SMAKOWY, BEZ CHEMII I BEZ TEZ
 *     ZDROWOTNYCH. TWARDA GRANICA,
 * — ŻE SŁÓD JEST DOKŁADNIE TYM: ziarnem doprowadzonym
 *   do kiełkowania i zatrzymanym suszeniem — stąd słodkawy,
 *   piekarski zapach słodowni,
 * — CO MOŻNA KIEŁKOWAĆ W DOMU I PO CO: rzodkiewka
 *   i rzeżucha (ostre, do kanapki), lucerna i słonecznik
 *   (łagodne, do sałatki), groch i soczewica (chrupiące),
 *   pszenica i żyto (słodkawe),
 * — ŻE KIEŁKI SĄ JEDYNĄ RZECZĄ, KTÓRĄ DA SIĘ „WYHODOWAĆ"
 *   W KUCHNI ZIMĄ — na parapecie, w słoiku, bez ziemi
 *   i bez ogrodu,
 * — ⚠⚠ CZEGO NIE KIEŁKOWAĆ: NASION Z TOREBEK OGRODNICZYCH
 *   — są zaprawiane i nie są przeznaczone do jedzenia.
 *   Kupuje się nasiona opisane jako spożywcze.
 *   ⚠ PISZĘ TO JEDNYM ZDANIEM, BEZ ROZWIJANIA I BEZ TEZ
 *     TOKSYKOLOGICZNYCH. TWARDA GRANICA,
 * — ŻE PODSTAWOWA ZASADA TO PŁUKANIE I ODSĄCZANIE —
 *   stojąca woda jest jedynym realnym problemem hodowli,
 * — ŻE KIEŁKI JE SIĘ ŚWIEŻE, nie przechowuje tygodniami,
 * — ŻE TO SAMO ZJAWISKO WIDAĆ W KUCHNI JAKO PROBLEM:
 *   ziemniaki i cebula, które wypuszczają kiełki, bo dostały
 *   ciepło i światło — czyli dokładnie to, czego chcemy
 *   w słoiku, a nie chcemy w szafce,
 * — UCZCIWIE: urządzenie nie kiełkuje niczego i nie jest
 *   do tego potrzebne,
 * — ale robi jedną rzecz z tej rodziny: mieli ziarno,
 *   więc pozwala trzymać w domu zboże zamiast mąki
 *   — a ziarno to materiał żywy, który trzyma się znacznie
 *   dłużej niż to, co z niego zmielono.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO tez o witaminach, enzymach, „superfoods"
 *   i detoksie. ZERO ostrzeżeń o bakteriach i zatruciach.
 *   Piszę WYŁĄCZNIE o SMAKU I TEKSTURZE. TWARDA GRANICA.
 * — ⚠⚠ ZERO ALKOHOLU I ZERO PIWA. Słód wchodzi wyłącznie
 *   jako produkt zbożowy. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI MAREK.
 * — ZERO porad ogrodniczych (podłoża, nawozy, oświetlenie).
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „NASIONA I ZIARNA" (Lubsko) dotyczą NASION JAKO DODATKU
 *   DO DAŃ I TŁOCZENIA OLEJU.
 * — „DROŻDŻE ŚWIEŻE KONTRA SUSZONE" i „ciasto drożdżowe"
 *   dotyczą DROŻDŻY.
 * — „KISZONKI I ZAKWAS" dotyczą FERMENTACJI.
 * — „MĄKA I MIELENIE" dotyczy PRZEMIAŁU.
 * — „WARZYWNIK PRZY DOMU" (Brody) dotyczy UPRAWY W OGRODZIE.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy PRZECHOWYWANIA
 *   PRODUKTÓW SYPKICH.
 * TUTAJ chodzi o KIEŁKOWANIE — o jeden proces, w którym
 * ziarno zmienia się samo, i o to, że słód jest jego
 * zatrzymaną wersją.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku założenia skansenu (źródła sprzeczne).
 * — NIE UZASADNIAM hasła „Miasto ze smakiem".
 * — NIE PODAJĘ nazw firm, marek ani osiedli miejskich.
 * — NIE PISZĘ O PIWIE.
 * — NIE WYMYŚLAM produktu lokalnego.
 * — NIE MYLĘ SIERPCA z SIERADZEM ani SEROCKIEM.
 * — districts: brak publicznego wykazu. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Sierpcu pochodzi z 1065 r., prawa
 *   miejskie miasto otrzymało w 1322 r., a od XV w. było
 *   własnością Sierpskich; w 1509 r. Zygmunt Stary wyróżnił
 *   tutejszych sukienników,
 * — w mieście działają browar, słodownia — jedna z największych
 *   w Polsce — oraz spółdzielnia mleczarska produkująca sery
 *   twarde,
 * — Muzeum Wsi Mazowieckiej prowadzi park etnograficzny
 *   założony w latach siedemdziesiątych XX w.: około
 *   osiemdziesięciu obiektów na 60,5 ha nad Sierpienicą przy
 *   jej ujściu do Skrwy, z zagrodami włościańskimi, zagrodą
 *   młynarską z wiatrakiem koźlakiem z Zalesia czynnym
 *   w niedziele od maja do września, zespołem karczemnym
 *   z osiemnastowieczną karczmą, kuźnią, olejarnią, dworem
 *   z Uniszek Zawadzkich i drewnianym kościołem,
 * — chałupy w skansenie malowane są na niebiesko ultramaryną,
 *   a muzeum prowadzi stałe pokazy wypieku chleba, wyrobu
 *   sera, suszenia ziół i kiszenia warzyw; nakręcono tu ponad
 *   pięćdziesiąt produkcji filmowych,
 * — w mieście stoją zabytkowy ratusz, sanktuarium Matki Bożej
 *   Sierpeckiej i kościół św. Ducha z gotycką polichromią.
 */
export const SIERPC: CityContent = {
  slug: "sierpc",
  h1: "Thermomix Sierpc – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sierpc — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sierpcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sierpc — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sierpcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sierpca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Sierpc"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kiełkowanie to jedyny proces, w którym składnik zmienia się sam.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sierpcu – jak wygląda prezentacja?",
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
      id: "kielkowanie",
      heading: "Słodownia w mieście — czyli o ziarnie, któremu każe się ruszyć",
      paragraphs: [
        "W Sierpcu działa jedna z największych słodowni w Polsce. Słód powstaje w sposób, który brzmi jak instrukcja z podręcznika cierpliwości: ziarno moczy się, doprowadza do kiełkowania, a potem — w ściśle wybranym momencie — zatrzymuje suszeniem. Ani chwilę wcześniej, ani później. To jest cała technologia i jednocześnie najkrótszy możliwy opis procesu, który w kuchni domowej prawie nie istnieje, a szkoda.",
        "Kiełkowanie jest bowiem jedynym procesem, w którym składnik zmienia się sam. Bez ognia, bez noża, bez dodatków — wystarczy woda i czas. Twarde, mączyste nasiono w ciągu paru dni robi się miękkie i wyraźnie słodsze, bo rozkłada się w nim skrobia. Ten sam mechanizm daje słodowni jej charakterystyczny, słodkawy, trochę piekarski zapach.",
        "W domu można to zrobić w słoiku na parapecie i jest to chyba jedyna rzecz, którą da się „wyhodować” w kuchni w środku zimy — bez ziemi, bez ogrodu, bez donicy.",
        "Co warto kiełkować i czym się to różni? Rzodkiewka i rzeżucha dają smak ostry, prawie pieprzny — nadają się do kanapki i do jajka. Lucerna i słonecznik są łagodne i miękkie, idą do sałatki. Groch i soczewica są chrupiące i najbardziej sycące z całej tej listy. Pszenica i żyto wychodzą wyraźnie słodkawe — i to one najlepiej pokazują, o co w słodowaniu chodzi.",
        "Jedna rzecz jest ważna i mieści się w jednym zdaniu: nie kiełkuje się nasion z torebek ogrodniczych. Te są zaprawiane i nie są przeznaczone do jedzenia. Kupuje się nasiona wprost opisane jako spożywcze.",
        "Cała technika sprowadza się do płukania i odsączania. Stojąca woda to jedyny realny problem tej hodowli — ziarno ma być wilgotne, a nie zanurzone. Dlatego słoik trzyma się przechylony, siatką do dołu, żeby nadmiar spływał.",
        "Kiełki je się świeże, w ciągu kilku dni. Nie są produktem, który się gromadzi — to raczej coś, co się zaczyna na bieżąco, jak zioła w doniczce.",
        "Zabawne jest to, że dokładnie to samo zjawisko znamy w kuchni jako problem. Ziemniaki, które puszczają kiełki. Cebula i czosnek, które wypuszczają zielony pęd. To nie jest psucie się — to jest to samo kiełkowanie, tylko w niewłaściwym miejscu. Dostały ciepło, wilgoć i światło, czyli dokładnie to, czego chcemy w słoiku, a czego nie chcemy w szafce. Kto raz spojrzy na to w ten sposób, przestaje się dziwić, dlaczego ziemniaki trzeba trzymać w ciemnym i chłodnym miejscu.",
        "Teraz uczciwie o sprzęcie. Thermomix nie kiełkuje niczego i nie jest do tego potrzebny. To jest słoik, woda i cierpliwość.",
        "Robi natomiast jedną rzecz z tej samej rodziny, o której warto wiedzieć. Miele ziarno — a to oznacza, że w domu można trzymać zboże zamiast mąki i mleć na bieżąco. Ziarno jest materiałem żywym, dokładnie tym samym, który w słoiku by wykiełkował, i właśnie dlatego trzyma się w szafce znacznie dłużej niż to, co z niego zmielono. Mąka pełnoziarnista starzeje się szybko; ziarno, z którego powstała, czeka spokojnie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sierpcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć mielenie ziarna na mąkę — powiedzcie przy umawianiu. To jedna z rzeczy, które najlepiej widać na żywo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sierpcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sierpeckiej rodziny",
      paragraphs: [
        "Sierpc liczy blisko siedemnaście tysięcy mieszkańców na osiemnastu i pół kilometra kwadratowego. Pierwsza wzmianka o mieście pochodzi z 1065 roku, prawa miejskie otrzymało w 1322, a od XV wieku było własnością Sierpskich; w 1509 roku Zygmunt Stary wyróżnił tutejszych sukienników. Dziś działają tu browar, słodownia — jedna z największych w Polsce — oraz spółdzielnia mleczarska produkująca sery twarde. Największą osobliwością miasta jest park etnograficzny Muzeum Wsi Mazowieckiej, założony w latach siedemdziesiątych XX wieku: około osiemdziesięciu obiektów na sześćdziesięciu i pół hektara nad Sierpienicą, przy jej ujściu do Skrwy. Stoją tam zagrody włościańskie, zagroda młynarska z wiatrakiem koźlakiem z Zalesia czynnym w niedziele od maja do września, zespół karczemny z osiemnastowieczną karczmą, kuźnia z chałupą kowala, olejarnia, dwór z Uniszek Zawadzkich i drewniany kościół. Chałupy malowane są na niebiesko ultramaryną, a muzeum prowadzi stałe pokazy wypieku chleba, wyrobu sera, suszenia ziół i kiszenia warzyw; nakręcono tu ponad pięćdziesiąt produkcji filmowych. W samym mieście stoją zabytkowy ratusz, sanktuarium Matki Bożej Sierpeckiej i kościół Świętego Ducha z gotycką polichromią.",
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

  districtsHeading: "Do których części Sierpca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Sierpienicy, także w okolice skansenu. Dojeżdżam też do wsi w gminie: Białyszewa, Borkowa Kościelnego i Wielkiego, Goleszyna, Rachocina, Studzieńca, Suska, Sudrag, Żochowa i Gorzewa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Sierpc też przyjadę",
  nearbyParagraphs: [
    "Płock, Żuromin, Raciąż, Lipno i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Płock", "Żuromin", "Raciąż", "Lipno"],

  about: blokOMnie("do Sierpca", "w Sierpcu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sierpca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Sierpc nad Sierpienicą w powiecie sierpeckim, a nie o Sieradz czy Serock.",
    },
    ...faqWspolne("w Sierpcu"),
    {
      question: "Co można kiełkować w domu?",
      answer:
        "Rzodkiewkę i rzeżuchę (ostre, do kanapki), lucernę i słonecznik (łagodne, do sałatki), groch i soczewicę (chrupiące) oraz pszenicę i żyto (słodkawe). Wystarczy słoik, woda i parapet — to jedyna rzecz, którą da się „wyhodować” w kuchni w środku zimy.",
    },
    {
      question: "Jakich nasion nie kiełkować?",
      answer:
        "Nasion z torebek ogrodniczych — są zaprawiane i nie są przeznaczone do jedzenia. Kupuje się nasiona wprost opisane jako spożywcze. Poza tym cała technika sprowadza się do płukania i odsączania: ziarno ma być wilgotne, a nie zanurzone, więc słoik trzyma się przechylony siatką do dołu.",
    },
    {
      question: "Dlaczego ziemniaki puszczają kiełki?",
      answer:
        "Bo dostały ciepło, wilgoć i światło — czyli dokładnie to, czego chcemy w słoiku z kiełkami, a czego nie chcemy w szafce. To nie jest psucie się, tylko to samo kiełkowanie w niewłaściwym miejscu; dlatego ziemniaki trzyma się w miejscu ciemnym i chłodnym.",
    },
  ],

  geo: { lat: 52.8568, lng: 19.6694 },
};
