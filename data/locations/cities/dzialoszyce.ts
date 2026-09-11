import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * DZIAŁOSZYCE — miasto w powiecie pińczowskim, 826 mieszkańców
 * (31.12.2024, GUS); cała gmina 4 536. Prawa miejskie nadane
 * 23 SIERPNIA 1409 r. przywilejem Władysława Jagiełły, na prawie
 * magdeburskim — a przywilej wystawiono W NOWYM KORCZYNIE.
 * Miasto ma najmniejszą powierzchnię w całej okolicy: 1,9 km²
 * przy gęstości 430 osób na kilometr kwadratowy.
 *
 * UWAGA — HOMONIM: DZIAŁOSZYN to miasto w woj. łódzkim (powiat
 * pajęczański), które odzyskało prawa miejskie 1 stycznia 1994 r.
 * Ta data bywa błędnie przypisywana Działoszycom. To INNE miasto.
 *
 * KĄT: chrzan, musztarda, ocet — czyli dodatki, po które trzeba
 * jechać. Miasto liczące osiemset dwadzieścia sześć osób na
 * niecałych dwóch kilometrach kwadratowych jest właściwym
 * miejscem na stronę o drobiazgach, których nie kupuje się
 * po drodze, bo po drodze nie ma czego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to są rzeczy tanie i że nikt nie kupuje urządzenia po to,
 *   żeby zrobić sobie musztardę,
 * — że mimo to w małym mieście mają one konkretną wartość:
 *   nie trzeba po nie jechać,
 * — że chrzan zmielony w zamkniętym naczyniu jest przy otwieraniu
 *   naprawdę nieprzyjemny i trzeba to wiedzieć ZANIM się otworzy,
 * — i że przy małych ilościach ostrza nie chwytają — to jest
 *   realne ograniczenie, nie drobiazg.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o chrzanie, ani o occie,
 *   ani o „domowym kontra sklepowym".
 * — ŻADNYCH PORAD O PRZECHOWYWANIU domowych przetworów ani
 *   o ich trwałości. To bezpieczeństwo żywności.
 * — ŻADNEJ KRYTYKI produktów sklepowych. Nie buduję sprzedaży
 *   na sugerowaniu, że w kupnym jest coś złego.
 * — ŻADNEGO ROBIENIA Z KURCZENIA SIĘ MIASTA ARGUMENTU
 *   SPRZEDAŻOWEGO. Liczba mieszkańców spadła tu o ponad jedną
 *   czwartą od 2002 r. i to jest fakt, ale nie jest to fakt,
 *   na którym wolno budować ofertę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowe danie ze słoika"
 * (inne miasto) dotyczy dań, nie dodatków. „Zakupy z dowozem"
 * dotyczy sposobu robienia zakupów. „Przechowywanie" należy
 * do innego miasta i tu go NIE ruszam. Tutaj chodzi o cztery,
 * pięć konkretnych rzeczy z półki w drzwiach lodówki.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że Działoszyce „nieprzerwanie są miastem
 *   od 1409 r.". Nie ma ich w wykazach miejscowości
 *   zdegradowanych ani w listach nadań po 1900 r. i w 1921 r.
 *   były miastem — ale to argument z milczenia, nie dowód.
 *   Piszę: prawa miejskie od 23 sierpnia 1409 r.
 * — NIE PODAJĘ największego pracodawcy. Nic nie wskazuje,
 *   by taki istniał.
 * — NIE ROZSTRZYGAM liczby sołectw gminy. Źródła podają
 *   43 albo 35. Nie podaję liczby.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Działoszyc nic nie potwierdzono.
 * — NIE PISZĘ o obecnym stanie ruin synagogi. Ostatnie
 *   potwierdzone źródło pochodzi z lutego 2024 r.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA.
 *
 * ŚWIADOMIE POMINIĘTE. Przed wojną Żydzi stanowili tu około
 * osiemdziesięciu trzech procent mieszkańców, a we wrześniu
 * 1942 r. miasto było punktem zbornym dla całej okolicy —
 * wywieziono stąd około dziesięciu tysięcy osób, a około tysiąca
 * pięciuset starszych rozstrzelano na miejscowym cmentarzu.
 * Ruina synagogi z 1852 r. stoi do dziś. To jest prawda o tym
 * mieście i nie zaprzeczam jej — ale strona handlowa o sprzęcie
 * kuchennym nie jest miejscem, w którym wolno tego używać jako
 * tła dla oferty. W tekście jest tylko neutralna wzmianka
 * o zabytkach, bez tej historii.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 23 sierpnia 1409 r., przywilej Władysława
 *   Jagiełły na prawie magdeburskim, wystawiony w Nowym
 *   Korczynie; potwierdzenia: Zygmunt Stary 1520, Zygmunt III
 *   Waza 1615, Michał Korybut Wiśniowiecki 1669, Stanisław
 *   August Poniatowski 1786,
 * — pierwsza wzmianka o miejscowości: 1220 r.,
 * — miasto ma 1,9 km² i gęstość ok. 430 os./km²,
 * — kościół Świętej Trójcy ufundowany w 1222 r. przez biskupa
 *   krakowskiego Iwona Odrowąża,
 * — w 1893 r. Wojciech Kossak i Jan Styka zatrzymali się
 *   w Działoszycach w drodze do Racławic, gdzie szkicowali teren
 *   pod Panoramę Racławicką,
 * — w 1916 r. Austriacy zbudowali kolejkę wąskotorową
 *   Działoszyce–Miechów; dziś miasto nie ma kolei,
 * — miasto leży nad Nidzicą, ok. 15 km od Skalbmierza,
 * — 826 mieszkańców miasta, 4 536 gminy (31.12.2024).
 */
export const DZIALOSZYCE: CityContent = {
  slug: "dzialoszyce",
  h1: "Thermomix Działoszyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Działoszyce — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Działoszycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Działoszyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Działoszycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Działoszyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Działoszyce i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nikt nie kupuje tego dla musztardy. Ale chrzan zmielicie o dwudziestej drugiej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Działoszycach – jak wygląda prezentacja?",
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
      id: "dodatki",
      heading: "Osiemset dwadzieścia sześć osób na dwóch kilometrach — czyli o rzeczach, po które trzeba jechać",
      paragraphs: [
        "Działoszyce mają niecałe dwa kilometry kwadratowe powierzchni i osiemset dwadzieścia sześć mieszkańców. To najciaśniej zbudowane miasteczko w tej części województwa — i jednocześnie takie, w którym po część rzeczy po prostu trzeba gdzieś pojechać.",
        "I to jest jedyny powód, dla którego piszę o czymś tak błahym jak chrzan, musztarda i ocet.",
        "Zacznę od uczciwego zastrzeżenia, bo inaczej ta strona byłaby nieprzyzwoita: nikt nie kupuje urządzenia tej klasy po to, żeby zrobić sobie musztardę. Te rzeczy kosztują kilka złotych i są w każdym sklepie. Gdyby to miał być argument za zakupem, nie warto by go w ogóle wypowiadać.",
        "Wartość jest inna i drobniejsza. Kiedy okazuje się w sobotę wieczorem, że do wędzonki nie ma chrzanu, a najbliższy sklep z tym, czego szukacie, jest kilkanaście kilometrów stąd — to korzeń z ogródka i dwie minuty przy urządzeniu rozwiązują sprawę. To samo z tartym chrzanem do święconki, z zieloną musztardą, z sosem na zimno, z octem smakowym na zalewę. Rzeczy z półki w drzwiach lodówki.",
        "Dwie rzeczy praktyczne, które powiem, bo nikt ich nie mówi.",
        "Pierwsza, poważnie: chrzan zmielony w zamkniętym naczyniu jest przy otwieraniu bardzo nieprzyjemny. Opary idą prosto w oczy i w nos. Wiedzcie o tym, zanim otworzycie pokrywę tuż pod twarzą — odsuńcie się, odwróćcie głowę, otwórzcie przy oknie. To nie jest żart i to jest dokładnie ten rodzaj drobiazgu, którego nie ma w żadnym folderze.",
        "Druga: przy bardzo małych ilościach ostrza po prostu nie chwytają. Pół cebuli, łyżka ziół, jedna mała porcja sosu — to się rozjeżdża po ściankach i nic z tego nie wychodzi. Urządzenie ma swoje minimum i przy takich drobiazgach mały nóż bywa szybszy. Nie sprzedaję Wam maszyny, która robi wszystko.",
        "I to wszystko. Jeśli ktoś Wam próbuje sprzedać sprzęt argumentem, że zaoszczędzicie na musztardzie — nie słuchajcie go.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Działoszycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć, jak to działa na czymś swoim, przygotujcie cokolwiek z ogródka — zrobimy z tego coś na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Działoszycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla działoszyckiej rodziny",
      paragraphs: [
        "Działoszyce liczą osiemset dwadzieścia sześć mieszkańców, a cała gmina ponad cztery i pół tysiąca. Prawa miejskie dostały 23 sierpnia 1409 roku przywilejem Władysława Jagiełły — a dokument wystawiono w Nowym Korczynie, czyli w mieście oddalonym stąd o kilkadziesiąt kilometrów, o którym też piszę. Potwierdzali go potem kolejni królowie, aż po Stanisława Augusta w 1786. Kościół Świętej Trójcy ufundował w 1222 roku biskup krakowski Iwo Odrowąż. Dwie ciekawostki z nowszych czasów: w 1893 roku zatrzymali się tu Wojciech Kossak i Jan Styka w drodze do Racławic, gdzie szkicowali teren pod Panoramę Racławicką, a w 1916 Austriacy zbudowali wąskotorówkę do Miechowa — dziś miasto nie ma już żadnej kolei.",
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

  districtsHeading: "Do których części Działoszyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Sancygniowa, Biedrzykowic, Iżykowic i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Działoszyce też przyjadę",
  nearbyParagraphs: [
    "Skalbmierz, Kazimierza Wielka, Pińczów, Miechów, Proszowice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Skalbmierz", "Kazimierza Wielka", "Pińczów", "Miechów", "Proszowice", "Wiślica"],

  about: blokOMnie("do Działoszyc", "w Działoszycach i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Działoszyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Działoszyce w świętokrzyskim, nie o Działoszyn w łódzkim.",
    },
    ...faqWspolne("w Działoszycach"),
    {
      question: "Czy warto kupować Thermomix, żeby robić własną musztardę i chrzan?",
      answer:
        "Nie. Te rzeczy kosztują kilka złotych i są w każdym sklepie — gdyby to miał być argument za zakupem, nie warto byłoby go wypowiadać. Wartość jest drobniejsza: kiedy w sobotę wieczorem brakuje chrzanu, a sklep jest kilkanaście kilometrów stąd, korzeń z ogródka i dwie minuty załatwiają sprawę.",
    },
    {
      question: "Czy mielenie chrzanu w Thermomixie jest uciążliwe?",
      answer:
        "Tak, przy otwieraniu bardzo. Opary z zamkniętego naczynia idą prosto w oczy i w nos. Odsuńcie się, odwróćcie głowę i otwierajcie przy oknie — to nie jest żart, tylko drobiazg, którego nie ma w żadnym folderze.",
    },
    {
      question: "Czy zmieli bardzo małe ilości?",
      answer:
        "Zwykle nie. Pół cebuli, łyżka ziół, jedna mała porcja sosu — to rozjeżdża się po ściankach i ostrza tego nie chwytają. Urządzenie ma swoje minimum i przy takich drobiazgach mały nóż bywa szybszy.",
    },
  ],

  geo: { lat: 50.3652, lng: 20.3521 },
};
