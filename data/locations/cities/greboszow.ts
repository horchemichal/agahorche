import type { CityContent } from "../city-content";
import {
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
 * GRĘBOSZÓW — GMINA WIEJSKA w powiecie dąbrowskim.
 * 3 147 mieszkańców (31.12.2024), 48,5 km².
 * ⚠️ NAJSTARSZA GMINA POWIATU: średni wiek 45,7.
 * SPADEK LUDNOŚCI 13,9% (2002–2024) — największy w powiecie.
 * W 2024: 7 MAŁŻEŃSTW, przyrost naturalny −24.
 * REGON: 212 podmiotów — najmniej w powiecie.
 * 15 SOŁECTW.
 *
 * OŚ STRONY: MOST W BORUSOWEJ (2020) I MJR SUCHARSKI.
 * Gmina, którą Wisła zamykała, dopóki nie stanął most —
 * plus najsłynniejszy rodak.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐⭐ MJR HENRYK SUCHARSKI, DOWÓDCA OBRONY WESTERPLATTE,
 *   URODZIŁ SIĘ 12 LISTOPADA 1898 R. W GRĘBOSZOWIE.
 *   POTWIERDZONE PRZEZ IPN i dzieje.pl. Komendant Wojskowej
 *   Składnicy Tranzytowej na Westerplatte od 3.12.1938 do 7.09.1939.
 *   Zmarł 30 sierpnia 1946 w Neapolu; PROCHY SPROWADZONE
 *   NA WESTERPLATTE W SIERPNIU 1971 R. IZBA PAMIĘCI w szkole
 *   podstawowej, POMNIK ODSŁONIĘTY W 1994 R.,
 * — ⭐ MOST W BORUSOWEJ (2020): PRAWIE 700 M, 13 PRZĘSEŁ, przęsło
 *   nurtowe 130 m, jezdnia 7 m, chodniki i ścieżka rowerowa.
 *   KOSZT PRAWIE 28 MLN ZŁ, dofinansowanie UE ponad 23,5 mln zł.
 *   Łączy BORUSOWĄ (Małopolska) z NOWYM KORCZYNEM (świętokrzyskie).
 *   ⭐ ZASTĄPIŁ PRZEPRAWĘ PROMOWĄ — media opisały to jako koniec ery
 *   przepraw promowych przez Wisłę w tym rejonie,
 * — POŁOŻENIE: Nizina Nadwiślańska. PÓŁNOCNA GRANICA — WISŁA,
 *   ZACHODNIA — DUNAJEC. ⭐ W UJŚCIU JEZUICKIM DUNAJEC WPADA
 *   DO WISŁY. 20 km od Dąbrowy Tarnowskiej, ok. 80 km od Krakowa,
 * — 15 SOŁECTW: Bieniaszowice, Biskupice, Borusowa, Gręboszów,
 *   Hubenice, Karsy, Kozłów, Lubiczko, Okręg, Ujście Jezuickie,
 *   Wola Gręboszowska, Wola Żelichowska, Zapasternicze, Zawierzbie,
 *   Żelichów. Największe: Borusowa (~450), Wola Żelichowska (~410),
 *   Ujście Jezuickie (~390), Gręboszów (>400),
 * — JAKUB BOJKO (ur. 1857 w Gręboszowie) — działacz ludowy,
 *   współzałożyciel Stronnictwa Ludowego. ⚠️ DALSZYCH FUNKCJI
 *   PARLAMENTARNYCH NIE ZWERYFIKOWANO — nie pisać bez sprawdzenia,
 * — 1287 — pierwsza wzmianka, własność Nieczujów; nazwa od imienia
 *   Grembosz/Grębosz. 1650 — barokowy kamienny kościół Wniebowzięcia
 *   NMP, fundacja Franciszka Dembińskiego (zastąpił gotycki
 *   drewniany, istniejący do 1635); portale marmurowe z herbem
 *   Rawicz, witraże z 1920. Cmentarz parafialny z ok. 1850,
 *   KWATERA Z I WOJNY — 212 POCHOWANYCH ŻOŁNIERZY.
 *   1897 — znalezisko 4 monet rzymskich,
 * — I WOJNA: teren działań i CHRZEST BOJOWY 1. PUŁKU PIECHOTY
 *   LEGIONÓW pod dowództwem Józefa Piłsudskiego, walki
 *   17–25 WRZEŚNIA 1914 R.; Piłsudski kwaterował na plebanii,
 * — ⚠️ FESTIWAL SMAKU W WOLI ŻELICHOWSKIEJ — impreza ISTNIEJE
 *   (portal powiatu), ale EDYCJI, ORGANIZATORA I TERMINU
 *   NIE POTWIERDZONO. Wspomnieć ostrożnie albo pominąć.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️ POWODZI I WAŁÓW PRZECIWPOWODZIOWYCH. NIE POTWIERDZONO —
 *   oficjalna historia gminy o nich nie wspomina. NIE DOPISYWAĆ,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (11,4%, 7 161,93 zł).
 *   ⚠️ „Szacunkowa” stopa 6,9% z Polski w Liczbach to SZACUNEK
 *   SERWISU, nie dane GUS. NIE UŻYWAĆ,
 * — RUCHU PASAŻERSKIEGO KOLEJĄ. W całym powiecie go nie ma.
 *
 * PUŁAPKI:
 * — DEMOGRAFIA JEST TU TRUDNA (spadek 13,9%, 7 małżeństw w roku,
 *   przyrost −24). PISAĆ RZECZOWO I BEZ OCEN — to naturalny wątek
 *   „gotowanie dla dwojga i dla seniorów”, a nie powód do lamentu.
 */

export const GREBOSZOW: CityContent = {
  slug: "greboszow",
  h1: "Thermomix Gręboszów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Gręboszów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Gręboszów: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gręboszów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Gręboszów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Gręboszowa, Borusowej, Ujścia Jezuickiego i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gręboszowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Most, który skończył erę promów, i major z Westerplatte",
      paragraphs: [
        "Dwunastego listopada tysiąc osiemset dziewięćdziesiątego ósmego roku urodził się w Gręboszowie Henryk Sucharski — późniejszy major i komendant Wojskowej Składnicy Tranzytowej na Westerplatte, dowódca jej obrony we wrześniu tysiąc dziewięćset trzydziestego dziewiątego. Objął to stanowisko trzeciego grudnia trzydziestego ósmego, niecałe dziesięć miesięcy przed wojną.",
        "Zmarł trzydziestego sierpnia tysiąc dziewięćset czterdziestego szóstego roku w Neapolu, a jego prochy sprowadzono na Westerplatte w sierpniu tysiąc dziewięćset siedemdziesiątego pierwszego. W rodzinnej wsi jest izba pamięci w szkole podstawowej i pomnik odsłonięty w dziewięćdziesiątym czwartym.",
        "Druga historia tej gminy jest zupełnie współczesna i zmieniła codzienność jej mieszkańców bardziej niż cokolwiek innego w ostatnich dekadach. Gręboszów leży w widłach dwóch rzek: od północy zamyka go Wisła, od zachodu Dunajec, a w Ujściu Jezuickim jedna wpada do drugiej. Przez lata na drugą stronę Wisły przeprawiano się promem.",
        "W dwa tysiące dwudziestym roku w Borusowej stanął most: prawie siedemset metrów długości, trzynaście przęseł, przęsło nurtowe o rozpiętości stu trzydziestu metrów, siedmiometrowa jezdnia, chodniki i ścieżka rowerowa. Kosztował blisko dwadzieścia osiem milionów złotych, z czego ponad dwadzieścia trzy dołożyła Unia Europejska.",
        "Media pisały wtedy o końcu ery przepraw promowych przez Wisłę w tym rejonie i nie była to przesada. Most połączył Borusową z Nowym Korczynem po świętokrzyskiej stronie, czyli wieś w Małopolsce z drogą krajową w innym województwie. To dla gminy z trzema tysiącami mieszkańców zmiana porównywalna z wybudowaniem obwodnicy dla miasta.",
        "Sama miejscowość jest znacznie starsza. Pierwsza wzmianka pochodzi z tysiąc dwieście osiemdziesiątego siódmego roku, a nazwa wywodzi się od imienia Grębosz. Barokowy kamienny kościół Wniebowzięcia Najświętszej Maryi Panny ufundował w tysiąc sześćset pięćdziesiątym Franciszek Dembiński; ma marmurowe portale z herbem Rawicz i witraże z tysiąc dziewięćset dwudziestego.",
        "Jest tu też ślad pierwszej wojny. Od siedemnastego do dwudziestego piątego września tysiąc dziewięćset czternastego roku trwały tu walki, w których chrzest bojowy przeszedł Pierwszy Pułk Piechoty Legionów pod dowództwem Józefa Piłsudskiego — sam Piłsudski kwaterował na plebanii. Na cmentarzu parafialnym jest kwatera z dwustu dwunastoma pochowanymi żołnierzami.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gręboszów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma ich piętnaście na czterdziestu ośmiu kilometrach kwadratowych — są niewielkie i leżą blisko siebie, ale nazwa pomaga mi zaplanować trasę.",
        "Jeśli w domu mieszkają dwie osoby albo jesteście po siedemdziesiątce, powiedz to od razu. Wtedy gotujemy inaczej niż na pokaz dla sześciu osób — mniej i realnie, tak jak jecie na co dzień.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Gręboszów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gotowanie dla dwojga",
      paragraphs: [
        "Powiem to wprost, bo liczby są jednoznaczne i mieszkańcy znają je lepiej ode mnie. Gręboszów jest najstarszą demograficznie gminą powiatu — średni wiek wynosi tu blisko czterdzieści sześć lat. W dwa tysiące dwudziestym czwartym roku zawarto tu siedem małżeństw, a ludności od dwa tysiące drugiego ubyło blisko czternaście procent.",
        "To znaczy, że w bardzo wielu domach gotuje się dziś dla dwojga, a nie dla sześciorga. I to jest zupełnie inne zadanie kuchenne, o którym mówi się znacznie rzadziej niż o rodzinie z trójką dzieci.",
        "Problemy są konkretne. Przy dwóch osobach nie opłaca się rozstawiać połowy kuchni na jeden obiad. To, co się ugotuje na zapas, często się marnuje. A do tego dochodzi wysiłek fizyczny — krojenie, tarcie, ucieranie, dźwiganie garnków — który po latach zaczyna przeszkadzać bardziej niż samo stanie przy kuchni.",
        "Pierwsza praktyczna rzecz jest więc taka: całe rozdrabnianie robi maszyna. Warzywa, mięso, mak, orzechy, ciasto — bez tarki, bez noża, bez maszynki. Dla kogoś, kto ma bolące nadgarstki albo słabsze ręce, to jest różnica między gotowaniem a rezygnacją z gotowania.",
        "Druga to porcje. Można ugotować mało i dobrze, a nie tylko dużo. A kiedy przyjeżdżają dzieci albo wnuki — na święta, na weekend — ta sama maszyna robi seriami ciasto, farsz i zupę na dziesięć osób w kilka godzin zamiast w cały dzień.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Gręboszów i gotowanie — kuchnia w widłach dwóch rzek",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Wiem o Festiwalu Smaku w Woli Żelichowskiej, ale nie udało mi się potwierdzić ani terminu, ani organizatora — więc wspominam o nim, nie obiecując szczegółów.",
      "To, co jest tu pewne, wynika z geografii. Gmina leży w widłach Wisły i Dunajca, na Nizinie Nadwiślańskiej, na ziemi żyznej i płaskiej. To kuchnia nizinna i rolnicza: zboża, ziemniaki, kapusta, fasola, warzywa korzeniowe, mleko i to, co daje własne gospodarstwo.",
      "Rzeki dodają do tego rybę. W gospodarstwach nadwiślańskich karp, szczupak i lin bywały na stole częściej niż gdzie indziej, zwłaszcza przy okazjach i na Wigilię.",
      "Warto jednak powiedzieć, co w tej gminie zmienia się najbardziej — i to nie repertuar, tylko skala. Przy średnim wieku bliskim czterdziestu sześciu lat wiele domów gotuje dziś dla dwóch osób. Wielki garnek stoi w szafce, a używa się małego.",
      "Dla urządzenia to nie jest problem, tylko dokładnie ta sytuacja, w której daje najwięcej: całe rozdrabnianie i ucieranie robi maszyna, a ugotować da się mało i dobrze. Czego nie zrobi, mówię wprost: nie oczyści ryby, nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie wysiłkiem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Gręboszów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich piętnastu, bez żadnej dopłaty za odległość. Gmina liczy nieco ponad trzy tysiące mieszkańców na czterdziestu ośmiu kilometrach kwadratowych.",
    "Sołectwa to: Bieniaszowice, Biskupice, Borusowa, Gręboszów, Hubenice, Karsy, Kozłów, Lubiczko, Okręg, Ujście Jezuickie, Wola Gręboszowska, Wola Żelichowska, Zapasternicze, Zawierzbie i Żelichów. Największe to Borusowa, Wola Żelichowska, Ujście Jezuickie i sam Gręboszów — każde po około czterysta osób.",
    "Położenie gminy jest tu najciekawsze: północną granicę wyznacza Wisła, zachodnią Dunajec, a w Ujściu Jezuickim jedna rzeka wpada do drugiej. To najdalej na północ wysunięty skrawek tej części Małopolski.",
    "W Borusowej od dwa tysiące dwudziestego roku stoi most przez Wisłę — prawie siedemset metrów, trzynaście przęseł, blisko dwadzieścia osiem milionów złotych. Zastąpił przeprawę promową i połączył gminę bezpośrednio z Nowym Korczynem w województwie świętokrzyskim.",
    "W samym Gręboszowie warto zobaczyć barokowy kościół z tysiąc sześćset pięćdziesiątego roku z marmurowymi portalami i witrażami z tysiąc dziewięćset dwudziestego, izbę pamięci majora Sucharskiego w szkole podstawowej oraz cmentarną kwaterę z dwustu dwunastoma żołnierzami z pierwszej wojny.",
    "Dojazd: kolei pasażerskiej w powiecie dąbrowskim nie ma. Do Dąbrowy Tarnowskiej jest stąd dwadzieścia kilometrów, do Krakowa około osiemdziesięciu.",
  ],
  districts: [
    "Gręboszów",
    "Borusowa",
    "Ujście Jezuickie",
    "Wola Żelichowska",
    "Żelichów",
    "Bieniaszowice i Biskupice",
    "Karsy, Kozłów, Hubenice",
    "Okręg, Zawierzbie, Lubiczko",
  ],

  nearbyHeading: "Olesno, Bolesław i Dąbrowa Tarnowska też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Oleśnem, Bolesławiem i Dąbrową Tarnowską, a przez Wisłę — po nowym moście — z Nowym Korczynem w województwie świętokrzyskim. Dojeżdżam do wszystkich gmin powiatu dąbrowskiego bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz sołectwo.",
  ],
  nearbyTowns: [
    "Olesno",
    "Bolesław",
    "Dąbrowa Tarnowska",
    "Mędrzechów",
    "Szczucin",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Gręboszów", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "Mieszkam w Borusowej albo Ujściu Jezuickim. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie piętnaście sołectw gminy traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Gręboszów"),
    {
      question: "Jesteśmy we dwoje i mamy swoje lata. Czy to się opłaca?",
      answer:
        "Opłaca się, tylko z innego powodu niż w dużej rodzinie. Przy dwóch osobach nie chodzi o czas, tylko o wysiłek: całe krojenie, tarcie, mielenie i ucieranie robi maszyna, więc bolące ręce przestają być argumentem przeciw gotowaniu. A ugotować da się mało i dobrze, bez rozstawiania połowy kuchni. Na prezentacji zrobię dokładnie tyle, ile realnie zjadacie, a nie pokazową porcję na sześć osób.",
    },
  ],

  geo: { lat: 50.2443, lng: 20.7802 },
};
