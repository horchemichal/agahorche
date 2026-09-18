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
 * SULEJÓWEK — miasto w powiecie mińskim, dwadzieścia dwa kilometry
 * od centrum Warszawy, z dworkiem Milusin, który był prezentem.
 *
 * KĄT: CO SIĘ DZIEJE, GDY PREZENT JUŻ ZAMIESZKA — druga połowa sprawy
 * kupowania tego urządzenia komuś innemu. Nie „czy kupować", tylko
 * „co potem": nauka, która trwa tygodnie, cicha presja wdzięczności,
 * miejsce na cudzym blacie i zasada, przy której nie ustępuję.
 *
 * ⚠⚠ ROZGRANICZENIE OBOWIĄZKOWE — PIASECZNO.
 * Kupowanie w prezencie jest tematem DWÓCH stron i to jest podział
 * celowy. Wykryto go dopiero przy analizie zbieżności kątów w całym
 * katalogu; wcześniej obie strony mówiły to samo.
 * TAM (Piaseczno): DECYZJA PRZED ZAKUPEM — prezent dobry kontra fatalny,
 *   dwukrokowa metoda sprawdzenia bez niespodzianki.
 * TUTAJ (Sulejówek): WSZYSTKO, CO ZACZYNA SIĘ PO WRĘCZENIU.
 * ⚠⚠ USUNIĘTO STĄD: argument „część osób usłyszy, że gotowała źle"
 *   oraz opis dwukrokowej metody — jedno i drugie należy do Piaseczna.
 * ⚠ NIE POWTARZAM MATERIAŁU TAMTEJ STRONY.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że moment wręczenia jest najkrótszą częścią historii prezentu,
 *   a Milusin jest tego dowodem: dom, który raz był darem, potem był
 *   jeszcze czterema innymi rzeczami,
 * — że tego prezentu trzeba się NAUCZYĆ i że nauka trwa tygodnie,
 *   a czas na nią poświęca osoba obdarowana, nie płacąca,
 * — że w pierwszych tygodniach obdarowana musi mieć DO KOGO ZADZWONIĆ
 *   SAMA, bez pośrednictwa kupującego,
 * — ⚠⚠ że po drogim prezencie pojawia się CICHA PRESJA, żeby wdzięczność
 *   okazywać używaniem — i że wystarczy pytać zbyt często, żeby z gestu
 *   zrobiło się rozliczenie. Po przekazaniu prezent przestaje być
 *   kupującego; także prawo do pytania, co się z nim dzieje,
 * — że miejsce na blacie to decyzja właściciela kuchni i wolno ją podjąć
 *   po miesiącu, a nie w dniu wręczenia,
 * — jak to robię u siebie: prezentacja jest dla osoby, która będzie
 *   gotować, nawet jeśli płaci ktoś inny. Nie robię niespodzianek
 *   z dostawą pod drzwi,
 * — i granica: nie będę nikogo przekonywać wbrew niemu, nawet jeśli
 *   kupujący bardzo chce.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO NAMAWIANIA ANI ROZGRYWANIA JEDNEJ OSOBY PRZECIW DRUGIEJ.
 *   Jeśli obdarowany nie chce, to koniec rozmowy — i tak to jest
 *   napisane.
 * — ŻADNYCH SUGESTII, że komuś „przyda się", bo źle gotuje.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — O PIŁSUDSKIM tylko jako o fakcie z historii domu, bez polityki
 *   i bez oceniania. Milusin jest tu punktem wyjścia o prezencie,
 *   a nie tematem historycznym.
 *
 * ROZGRANICZENIE. Inna strona mówi o zakupie na spółkę (kilka osób
 * składa się na jeden sprzęt dla siebie), jeszcze inna o domu,
 * w którym jedna osoba chce, a druga nie. Tutaj chodzi o coś trzeciego:
 * KUPUJĘ TO KOMUŚ, KTO NIE JEST ZE MNĄ W TYM DOMU.
 *
 * ODRZUCONE KĄTY:
 * — „miasto-ogród": hipoteza SPRAWDZONA I OBALONA. Żadne źródło nie
 *   stosuje tego określenia do Sulejówka — to termin od Podkowy Leśnej
 *   i Milanówka. Sulejówek powstał jako osada kolejowo-letniskowa,
 * — „remont kuchni / kuchnia tymczasowa" — kąt zajęty przez Wyszków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy 21 536 mieszkańców (GUS, 31.12.2024) na 19,3 km²;
 *   urząd podaje 19 403 zameldowanych na pobyt stały na 31.12.2025 —
 *   różnica wynika z metodologii,
 * — ludność wzrosła o 17,8% w latach 2002–2024, ale WYŁĄCZNIE napływem:
 *   saldo migracji w 2024 r. plus 208 przy ujemnym przyroście
 *   naturalnym minus 78,
 * — przeciętne mieszkanie ma 91,9 m² — dużo, co wskazuje na przewagę
 *   zabudowy jednorodzinnej,
 * — dworek Milusin wzniesiono w 1923 r. jako DAR ŻOŁNIERZY POLSKICH;
 *   Piłsudski mieszkał tam w latach 1923–1926,
 * — po wojnie dworek przejęła ambasada ZSRR, a w latach 1956–2001
 *   mieściło się w nim przedszkole,
 * — Muzeum Józefa Piłsudskiego powołano w 2008 r., otwarto uroczyście
 *   14 sierpnia 2020 r., a regularne zwiedzanie ruszyło 11 listopada
 *   2020 r.,
 * — w mieście są dwie stacje: Miłosna (od 1866 r., dziś Sulejówek
 *   Miłosna) i Sulejówek (od 1910 r.); pociągi Kolei Mazowieckich
 *   i SKM linii S2, dla której Sulejówek Miłosna jest krańcówką,
 * — prawa miejskie 18 lipca 1962 r.; pierwsza wzmianka o wsi „Sulewo”
 *   w 1526 r.,
 * — NIE ZNALAZŁAM produktu z tego miasta na ministerialnej Liście
 *   Produktów Tradycyjnych,
 * — NIE ZNALAZŁAM nazw największych pracodawców — miasto ma ponad
 *   trzy i pół tysiąca podmiotów, w większości mikrofirm.
 */
export const SULEJOWEK: CityContent = {
  slug: "sulejowek",
  h1: "Thermomix Sulejówek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sulejówek — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sulejówku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sulejówek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sulejówku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sulejówka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Sulejówek i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jeśli kupujesz to komuś — prezentacja jest dla tej osoby, nie dla Ciebie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sulejówku – jak wygląda prezentacja?",
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
      id: "prezent",
      heading: "Dworek, który był prezentem — i co się dzieje, gdy prezent zamieszka",
      paragraphs: [
        "Najbardziej znany dom w Sulejówku dostał się swojemu właścicielowi w prezencie. Milusin postawiono w tysiąc dziewięćset dwudziestym trzecim roku jako dar żołnierzy polskich dla Józefa Piłsudskiego; mieszkał tam trzy lata. Potem dworek przejęła ambasada radziecka, przez blisko pół wieku mieściło się w nim przedszkole, a od dwa tysiące dwudziestego działa tam muzeum. Dom, który raz był prezentem, potem był jeszcze czterema innymi rzeczami.",
        "Biorę ten dom za punkt wyjścia, bo mówi coś, czego o prezentach zwykle się nie mówi: moment wręczenia jest najkrótszą częścią całej historii. Potem prezent zaczyna żyć — i dopiero to jest jego prawdziwa biografia.",
        "Z tym urządzeniem jest tak samo. O tym, czy w ogóle warto kupować je komuś innemu i jak sprawdzić, czy ta osoba tego chce, pisałam osobno przy innym mieście. Tutaj chcę napisać o części, która zaczyna się później i której nikt nie opisuje: co się dzieje, kiedy prezent już stoi w cudzej kuchni.",
        "Pierwsza rzecz: tego prezentu trzeba się nauczyć, a nauka trwa tygodnie, nie jeden wieczór. Pierwsze dni to zwykle dwa, trzy dania z prowadzeniem krok po kroku; swobodę przychodzi się zwykle po kilku tygodniach regularnego używania. To nie jest dużo, ale to jest czas, który ktoś musi chcieć poświęcić — i tym kimś nie jest osoba płacąca.",
        "Stąd praktyczna konsekwencja, o której warto wiedzieć z góry: w pierwszych tygodniach obdarowana będzie miała pytania. Założenie konta z przepisami, pierwsze uruchomienie, danie, które nie wyszło. To wszystko jest normalne i po to zostawiam swój numer — ale musi mieć do kogo zadzwonić sama, bez pośrednictwa tego, kto kupił.",
        "Druga jest delikatniejsza i mówię o niej wprost, bo widzę ją regularnie. Po drogim prezencie pojawia się cicha presja, żeby wdzięczność okazywać używaniem. Ktoś pyta co niedzielę, czy już coś w tym gotowała — i z miłego gestu robi się rozliczenie. Nie trzeba mieć złych intencji, żeby tak wyszło; wystarczy pytać zbyt często.",
        "Dlatego mówię kupującym jedno zdanie, które zwykle ich zaskakuje: po przekazaniu prezent przestaje być Wasz. Także prawo do pytania, co się w nim dzieje.",
        "Rzecz zupełnie praktyczna: gdzie to stanie. W kuchni, w której blat jest zastawiony, nowe urządzenie oznacza, że coś innego musi zniknąć — a to bywa sprzęt, z którym ktoś jest związany od lat. Decyzja należy do właściciela kuchni, nie do mnie i nie do kupującego, i naprawdę wolno ją podjąć po miesiącu, a nie w dniu wręczenia.",
        "I rzecz ostatnia, przy której nie ustąpię. Jeśli osoba, dla której to kupujecie, mówi, że nie chce, to jest koniec rozmowy. Nie będę jej przekonywać, nie będę wracać do tematu przez kogoś innego i nie będę sugerować, że się rozmyśli. Wolę nie sprzedać, niż sprzedać sprzęt, który przez rok stoi w pudle w garażu — bo takich historii też się nasłuchałam.",
      ],
      links: [{ href: "/prezentacja", label: "Umów prezentację" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sulejówku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli dzwonisz w sprawie kogoś innego, powiedz to od razu. Wtedy umawiam się z tą osobą i to z nią rozmawiam — a Ty decydujesz tylko o tym, czy płacisz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sulejówku"),
    sekcjaRaty("w Sulejówku"),
    {
      id: "rodzina",
      heading: "Thermomix dla sulejowskiej rodziny",
      paragraphs: [
        "Sulejówek rośnie wyłącznie napływem — w dwa tysiące dwudziestym czwartym roku saldo migracji wyniosło plus dwieście osiem osób przy ujemnym przyroście naturalnym. Do tego dwie stacje kolejowe i dwadzieścia dwa kilometry do centrum Warszawy. W praktyce znaczy to, że bardzo wielu mieszkańców codziennie dojeżdża, a obiad powstaje po powrocie.",
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

  districtsHeading: "Do których części Sulejówka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Nazwy Miłosna i Ratajewo są historyczne, a nie urzędowe — Miłosna nazywała się do pięćdziesiątego czwartego roku Cechówką. Przy umawianiu najprościej podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Sulejówek też przyjadę",
  nearbyParagraphs: [
    "Halinów, Wiązowna, Zielonka i warszawska Wesoła są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Halinów", "Wiązowna", "Zielonka", "Warszawa", "Mińsk Mazowiecki", "Ząbki"],

  about: blokOMnie("do Sulejówka", "w Sulejówku i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sulejówka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sulejówku"),
    {
      question: "Chcę kupić to mamie w prezencie. Jak to zrobić?",
      answer:
        "Najlepiej tak, żeby prezentacja odbyła się u niej i to ona decydowała, czy chce — nawet jeśli płacisz Ty. Nie robię niespodzianek z dostawą pod drzwi, bo niespodzianka za kilka tysięcy stawia obdarowanego w niezręcznej sytuacji. Zadzwoń i powiedz wprost, że dzwonisz w czyjejś sprawie; resztę ustalę z nią.",
    },
    {
      question: "A jeśli ta osoba powie, że nie chce?",
      answer:
        "To koniec rozmowy i nie wracam do tematu. Nie będę nikogo przekonywać wbrew niemu ani działać przez kogoś innego. Wolę nie sprzedać, niż sprzedać sprzęt, który przez rok stoi w pudle — takich historii też się nasłuchałam.",
    },
  ],

  geo: { lat: 52.2467, lng: 21.2669 },
};
