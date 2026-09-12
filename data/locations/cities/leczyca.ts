import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ŁĘCZYCA — gmina miejska w powiecie łęczyckim, 12 976
 * mieszkańców (31.12.2024, GUS). Brief mówił 14 000 — zawyżone.
 * Spadek o 17,5% od 2002 r. Osobno istnieje gmina wiejska
 * Łęczyca z siedzibą w tym samym mieście.
 *
 * PRAWA MIEJSKIE — DATA SPORNA: 1235 (pierwsza lokacja) / 1267 /
 * 1290 na prawie magdeburskim od księcia Kazimierza II
 * (wersja starostwa). W TEKŚCIE PISZĘ „lokowana w XIII wieku"
 * i nie rozstrzygam.
 * OBALONE: prawa miejskie NIE POCHODZĄ od Kazimierza Wielkiego.
 * Kazimierz Wielki zbudował tu ZAMEK w połowie XIV w. i mury
 * obejmujące ok. 9 ha.
 *
 * OBALONE, NAJWAŻNIEJSZA PUŁAPKA TEGO MIASTA: ARCHIKOLEGIATA
 * W TUMIE NIE LEŻY W GMINIE ŁĘCZYCA. Tum jest sołectwem GMINY
 * GÓRA ŚWIĘTEJ MAŁGORZATY, ok. 10 km na wschód. NIE WOLNO pisać
 * „archikolegiata w Łęczycy" ani „w gminie Łęczyca". Poprawnie:
 * „w Tumie pod Łęczycą". Konsekracja 1161 r.
 *
 * OBALONE: Łęczyckie Zakłady Górnicze DZIAŁAŁY W LATACH
 * 1955–1992 i dziś NIE ISTNIEJĄ. W 1979 r. były największym
 * zakładem regionu (1500 pracowników). Wieża szybowa w rejestrze
 * zabytków od 11.06.1994. NIE ROBIĘ Z TEGO SCENOGRAFII —
 * to jest utrata pracy przez tysiąc pięćset osób.
 *
 * DIABEŁ BORUTA: muzeum na zamku ma NAJWIĘKSZĄ W POLSCE
 * KOLEKCJĘ RZEŹBY O TREŚCI DEMONICZNEJ — ponad 400 eksponatów,
 * na wystawie ok. 200. Muzeum działa od 1949 r. Ratusz
 * klasycystyczny 1787–1790, proj. Jakub Kubicki.
 *
 * PRODUKTY Z LISTY PRODUKTÓW TRADYCYJNYCH:
 * — chleb wiejski łęczycki, wpis 26.10.2006,
 * — chleb łęczycki żytni razowy pełnoziarnisty, wpis 26.10.2006
 *   — JEDYNY ZACHOWANY PRODUCENT PIECZE GO W PIECU OPALANYM
 *   DREWNEM JABŁONIOWYM. To jest oś kąta.
 * — miody z doliny rzeki Bzury, wpis 30.11.2017 (ośrodek:
 *   Witonia) — TEGO NIE UŻYWAM, miód ma w serwisie własną stronę.
 * Symbolem rolnym powiatu jest ziemniak — TEGO TEŻ NIE UŻYWAM,
 * ziemniaki mają własne strony.
 *
 * KĄT: PIEC I OGIEŃ — czyli czego to urządzenie nie ma i mieć
 * nie będzie. Kąt bierze się z pieca opalanego drewnem
 * jabłoniowym, w którym pieczony jest chleb łęczycki.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w tym urządzeniu NIE MA OGNIA i nie ma pieca: jest
 *   grzałka w dnie i mieszadło,
 * — że z tego wynikają trzy rzeczy, których nie będzie NIGDY:
 *   skórki, zrumienienia i zapachu dymu,
 * — że chleb wyrobiony w urządzeniu i tak trzeba upiec
 *   w piekarniku, a chleb z pieca na drewnie to jeszcze inna liga,
 * — że sprzedawca, który mówi „upieczesz w nim chleb", myli
 *   wyrabianie z pieczeniem,
 * — że to, co urządzenie robi z ciastem chlebowym, jest realne
 *   i warte swojej ceny: wyrabianie ciężkiego ciasta bez
 *   mordowania rąk i bez mąki po całej kuchni,
 * — i ODMOWA: nic o zakwasie i jego prowadzeniu, nic
 *   o temperaturach.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O ZAKWASIE, jego prowadzeniu i pleśni —
 *   to fermentacja i ma własne ryzyko. ODMOWA W TEKŚCIE.
 * — ŻADNYCH PORAD O OBSŁUDZE PIECA OPALANEGO DREWNEM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o chlebie razowym,
 *   pełnoziarnistym i „bez ulepszaczy". TO JEST TU DUŻA POKUSA
 *   I MÓWIĘ NIE.
 * — ŻADNYCH NAZW FIRM ani piekarni.
 * — ŻADNEJ DATY PRAW MIEJSKICH.
 * — NIE ROBIĘ TŁA z likwidacji zakładów górniczych ani
 *   z wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Chleb. Miasto spichrzów"
 * (inne miasto) dotyczy chleba jako produktu i pieczenia go
 * w domu. „Czerstwy chleb" (Bodzentyn) dotyczy drugiego życia
 * bochenka. „Brak piekarnika" (Zdzieszowice) dotyczy sytuacji,
 * gdy ktoś piekarnika NIE MA. Tutaj chodzi o FIZYCZNĄ GRANICĘ
 * SAMEGO URZĄDZENIA: o to, że nie ma w nim ognia, więc nie
 * będzie skórki, rumienienia ani dymu — i o to, co z tego
 * wynika przy chlebie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że archikolegiata jest w Łęczycy ani w jej gminie.
 * — NIE PODAJĘ daty nadania praw miejskich.
 * — NIE PISZĘ, że prawa miejskie nadał Kazimierz Wielki.
 * — NIE PODAJĘ nazwy piekarni pieczącej chleb łęczycki
 *   ani jej miejscowości jako zaproszenia.
 * — NIE PODAJĘ nazwy żadnego pracodawcy — nie ustalono
 *   zatrudnienia w żadnym zakładzie.
 * — NIE PISZĘ o miodach z doliny Bzury ani o ziemniaku jako
 *   symbolu powiatu — oba tematy mają w serwisie własne strony.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 12 976 mieszkańców (31.12.2024, GUS),
 * — miasto lokowane w XIII w. (data sporna),
 * — zamek wzniesiony przez Kazimierza Wielkiego w poł. XIV w.;
 *   mury miejskie obejmowały ok. 9 ha,
 * — muzeum na zamku działa od 1949 r. i ma największą w Polsce
 *   kolekcję rzeźby o treści demonicznej — ponad 400 eksponatów,
 * — ratusz klasycystyczny 1787–1790, proj. Jakub Kubicki,
 * — archikolegiata w Tumie pod Łęczycą, w gminie Góra Świętej
 *   Małgorzaty, konsekrowana w 1161 r.,
 * — chleb wiejski łęczycki i chleb łęczycki żytni razowy
 *   pełnoziarnisty na Liście Produktów Tradycyjnych od
 *   26 października 2006 r.; ten drugi pieczony jest w piecu
 *   opalanym drewnem jabłoniowym.
 */
export const LECZYCA: CityContent = {
  slug: "leczyca",
  h1: "Thermomix Łęczyca – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łęczyca (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Łęczycy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łęczyca — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łęczycy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łęczycy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicy.",

  highlights: highlightyStandardowe("Łęczyca i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ognia w nim nie ma. Więc skórki też nie będzie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łęczycy – jak wygląda prezentacja?",
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
      id: "piec-i-ogien",
      heading: "Piec opalany drewnem jabłoniowym — czyli o tym, czego w tym urządzeniu nie ma",
      paragraphs: [
        "Chleb łęczycki żytni razowy pełnoziarnisty jest na Liście Produktów Tradycyjnych od 26 października 2006 roku, razem z chlebem wiejskim łęczyckim. Jedyny zachowany producent piecze go w piecu opalanym drewnem jabłoniowym. Nie w piekarniku elektrycznym, nie w piecu gazowym — w piecu, w którym pali się drewno jabłoni.",
        "Trudno o lepszy punkt wyjścia do rozmowy o tym, czego w tym urządzeniu nie ma. A nie ma w nim ognia.",
        "W środku jest grzałka w dnie i mieszadło. To wszystko. I z tego wynikają trzy rzeczy, których nie będzie nigdy, choćby ktoś obiecywał inaczej: nie będzie skórki, nie będzie zrumienienia i nie będzie zapachu dymu. To nie są wady konstrukcji do poprawienia w kolejnym modelu — to jest fizyka. Skórka powstaje wtedy, gdy powierzchnia wysycha i brązowieje w suchym gorącu. W zamkniętym naczyniu z parą nie ma jak.",
        "Dlatego powiem wprost rzecz, którą sprzedawcy mylą, czasem w dobrej wierze: to urządzenie nie piecze chleba. Ono chleb WYRABIA. Ciasto trzeba potem przełożyć do formy i wstawić do piekarnika, a jeśli ktoś ma piec opalany drewnem, to tam wyjdzie jeszcze coś, czego żaden piekarnik elektryczny nie powtórzy. Kto Wam mówi „upieczesz w nim chleb”, myli dwie różne czynności.",
        "A teraz to, co robi naprawdę, i co uważam za warte swojej ceny.",
        "Wyrabia ciężkie ciasto. Ciasto żytnie i razowe jest gęste, lepkie i oporne — wyrabianie go ręką to jest praca, po której bolą nadgarstki, a mąka jest wszędzie. Tutaj to jest zamknięte naczynie i kilka minut, w czasie których można robić coś innego. Dla części osób, zwłaszcza tych, które mają z rękami jakikolwiek kłopot, to jest jedyny argument, jakiego potrzebują — i najuczciwszy ze wszystkich.",
        "Poza tym: miele ziarna i płatki, robi bułkę tartą, rozprowadza i podgrzewa płyny bez grudek.",
        "Dwie granice na koniec. Nie doradzę Wam nic o zakwasie: jak go założyć, jak prowadzić, co zrobić, gdy zapleśnieje. To jest fermentacja, ma własne zasady i własne ryzyko, i po tę wiedzę trzeba pójść do kogoś, kto piecze od lat — a w Łęczycy jest do kogo. I nie napiszę Wam, że chleb razowy albo pełnoziarnisty jest zdrowszy od innego. Wiem, jak często się to powtarza. Ja sprzedaję urządzenie kuchenne, nie zalecenia żywieniowe.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łęczycy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pieczecie w domu chleb — powiedzcie przy umawianiu. Pokażę wyrabianie ciasta żytniego i sami ocenicie, czy to jest ta różnica, o którą Wam chodzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łęczycy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łęczyckiej rodziny",
      paragraphs: [
        "Łęczyca liczy blisko trzynaście tysięcy mieszkańców i została lokowana w trzynastym wieku — dokładnej daty nie podaję, bo źródła podają trzy różne. Zamek wzniósł tu w połowie czternastego wieku Kazimierz Wielki; jego mury miejskie obejmowały około dziewięciu hektarów. W zamku działa od 1949 roku muzeum, które ma największą w Polsce kolekcję rzeźby o treści demonicznej — ponad czterysta eksponatów, bo Łęczyca jest miastem diabła Boruty. Klasycystyczny ratusz z lat 1787–1790 zaprojektował królewski architekt Jakub Kubicki. Warto przy tym wiedzieć — bo mylą się nawet przewodniki — że słynna romańska archikolegiata z 1161 roku stoi w Tumie pod Łęczycą, w sąsiedniej gminie Góra Świętej Małgorzaty, a nie w samej Łęczycy.",
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

  districtsHeading: "Do których części Łęczycy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do starówki w obrębie dawnych murów, pod zamek i na osiedla — a także do wsi gminy wiejskiej Łęczyca. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Łęczycę też przyjadę",
  nearbyParagraphs: [
    "Ozorków, Kutno, Krośniewice, Poddębice, Zgierz, Góra Świętej Małgorzaty i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ozorków", "Kutno", "Krośniewice", "Poddębice", "Zgierz"],

  about: blokOMnie("do Łęczycy", "w Łęczycy i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łęczycy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy wiejskiej Łęczyca — to dwie odrębne gminy o tej samej nazwie i siedzibie, ale przyjeżdżam do obu, a także do Tumu i pozostałych miejscowości gminy Góra Świętej Małgorzaty. Dla porządku: chodzi o Łęczycę w łódzkiem, nie o Łęcznę pod Lublinem ani o Łęczyce w pomorskiem.",
    },
    ...faqWspolne("w Łęczycy"),
    {
      question: "Czy upiekę w nim chleb?",
      answer:
        "Nie. To urządzenie chleb wyrabia, a nie piecze — ciasto trzeba przełożyć do formy i wstawić do piekarnika. W środku jest grzałka w dnie i mieszadło, więc nie będzie ani skórki, ani zrumienienia, ani zapachu dymu. To nie wada konstrukcji, tylko fizyka.",
    },
    {
      question: "To po co używać go do chleba?",
      answer:
        "Bo wyrabia ciężkie ciasto. Ciasto żytnie i razowe jest gęste, lepkie i oporne — ręką wyrabia się je do bólu nadgarstków, a mąka ląduje wszędzie. Tutaj to zamknięte naczynie i kilka minut, w czasie których można robić coś innego. Dla osób, które mają z rękami jakikolwiek kłopot, to często jedyny potrzebny argument.",
    },
    {
      question: "Poradzisz coś o zakwasie?",
      answer:
        "Nie. Zakładanie i prowadzenie zakwasu to fermentacja z własnymi zasadami i własnym ryzykiem — po tę wiedzę trzeba pójść do kogoś, kto piecze od lat. Nie napiszę też, że chleb razowy jest zdrowszy od innego; sprzedaję urządzenie kuchenne, nie zalecenia żywieniowe.",
    },
  ],

  geo: { lat: 52.0596, lng: 19.1997 },
};
