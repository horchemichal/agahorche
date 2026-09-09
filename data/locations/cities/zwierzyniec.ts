import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * ZWIERZYNIEC — 2 761 mieszkańców (31.12.2024), spadek o 17,8%
 * od 2002 r. Siedziba dyrekcji Roztoczańskiego Parku Narodowego
 * (utworzony 10 maja 1974, 8 482,83 ha, ok. 120 tys. odwiedzających
 * rocznie). Dawna rezydencja Ordynacji Zamojskiej.
 *
 * KĄT: co wygląda na tradycję, a co nią jest. Miasto, w którym
 * zabytkowy browar jest dziś muzeum, a piwo warzy się w nowym
 * zakładzie obok, jest właściwym miejscem na rozmowę o tym, że
 * „tradycyjne gotowanie" i „stary sprzęt" to nie to samo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że tradycją jest PRZEPIS i smak, a nie narzędzie, którym się
 *   go robi,
 * — że większość „babcinych" sprzętów to sprzęt z lat
 *   siedemdziesiątych, a nie z zamierzchłych czasów — narzędzia
 *   zmieniały się zawsze,
 * — że to działa w obie strony: urządzenie nie unowocześni dania
 *   ani go nie popsuje, bo o smaku decyduje przepis,
 * — i uczciwie: są rzeczy, których nie zrobi tak jak garnek,
 *   i wtedy trzeba wziąć garnek.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO WYŚMIEWANIA tradycyjnego gotowania ani „babcinych
 *   metod". Strona ma być po ich stronie, nie przeciw.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ANI SŁOWA O PIWIE jako produkcie ani zachęty do jego picia.
 *   Browar występuje wyłącznie jako budynek i jako przykład
 *   przeniesienia produkcji. To strona o kuchni, nie o alkoholu.
 * — ŻADNEJ HISTORII WOJENNEJ.
 *
 * ROZGRANICZENIE. Kąt „ja lubię gotować i nie chcę, żeby maszyna
 * mi to odebrała" jest ZAJĘTY przez inne miasto — tam chodzi
 * o przyjemność z gotowania. Tutaj o coś innego: o rozdzielenie
 * TRADYCJI od NARZĘDZIA. Zajęty jest też kąt „cmentarzysko sprzętów
 * kuchennych" i tu nie ma listy niepotrzebnych urządzeń.
 * Sekcja `sekcjaTradycyjneGotowanie()` na dole strony jest wspólna
 * dla całego serwisu i mówi o czym innym — ta sekcja jej nie dubluje,
 * bo mówi o narzędziu, nie o metodzie.
 *
 * OSTROŻNIE Z DATAMI — CO JEST NA ILU ŹRÓDŁACH:
 * — browar: zabytkowy budynek NIE PRODUKUJE już piwa, pełni funkcję
 *   muzeum z trasą zwiedzania; warzenie przeniesiono do nowego
 *   zakładu obok. Potwierdzone DWOMA źródłami — i to jest oś tekstu,
 * — prawa miejskie w STYCZNIU 1990 r. — fakt zaskakujący, ale
 *   znaleziony w JEDNYM źródle. Dlatego w tekście jest jednym
 *   zdaniem, jako ciekawostka, a NIE jako argument,
 * — data założenia browaru (1802–1806, fundacja Stanisława Kostki
 *   Zamoyskiego) też pochodzi z jednego źródła — w tekście jest
 *   „na początku XIX wieku", bez konkretnego roku,
 * — kościół „na wodzie" pw. św. Jana Nepomucena: BUDOWA 1741–1747,
 *   fundatorzy Tomasz Antoni Zamoyski i Teresa z Michowskich. Daty
 *   konsekracji ani wpisu do rejestru NIE ZNALAZŁAM i ich nie podaję.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE piszę „stolica Roztocza". To marketingowy przydomek bez
 *   żadnego kryterium porównawczego,
 * — NIE przypisuję miastu 120 tysięcy odwiedzających. Ta liczba
 *   dotyczy PARKU NARODOWEGO, a ruchu w parku nie da się oddzielić
 *   od ruchu w mieście — nie ma takich danych. W tekście liczba jest
 *   opisana jako dotycząca parku,
 * — NIE podaję liczby miejsc noclegowych — nie ma twardych danych,
 * — „Chleb Wiejski Guciów" (Guciów to sołectwo tej gminy) NIE został
 *   potwierdzony jako wpis na ministerialnej Liście Produktów
 *   Tradycyjnych — dlatego nie ma go w tekście,
 * — miasto NIE publikuje wykazu osiedli, więc districts to PUSTA
 *   TABLICA,
 * — listy sąsiednich gmin nie udało się potwierdzić jednym twardym
 *   źródłem, więc w nearbyTowns są tylko miejscowości pewne
 *   geograficznie i sprawdzone przy innych stronach.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Roztoczański Park Narodowy utworzony 10 maja 1974 r.,
 *   8 482,83 ha, dyrekcja w Zwierzyńcu, ok. 120 tys. odwiedzających
 *   rocznie,
 * — zabytkowy browar to dziś trasa muzealna; produkcja w nowym
 *   zakładzie obok,
 * — kościół na wodzie budowany w latach 1741–1747,
 * — 2 761 mieszkańców na 31.12.2024,
 * — do Zamościa ok. 24 km, do Lublina ok. 71 km.
 */
export const ZWIERZYNIEC: CityContent = {
  slug: "zwierzyniec",
  h1: "Thermomix Zwierzyniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zwierzyniec — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zwierzyńcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zwierzyniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zwierzyńcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zwierzyńca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Zwierzyniec i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tradycją jest przepis. Garnek to tylko garnek.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zwierzyńcu – jak wygląda prezentacja?",
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
      id: "tradycja-i-narzedzie",
      heading: "Zabytkowy browar, w którym nie warzy się już piwa — czyli co jest tradycją, a co tylko narzędziem",
      paragraphs: [
        "Zwierzyniec był rezydencją Ordynacji Zamojskiej i wygląda dokładnie tak, jak powinno wyglądać takie miejsce: klasycystyczna zabudowa, park, kościół na wodzie z lat 1741–1747, a wokół Roztoczański Park Narodowy z dyrekcją w mieście. Ciekawostka, która wielu zaskakuje: samo miasto jest bardzo młode — prawa miejskie dostało dopiero w 1990 roku.",
        "Ale najciekawszy jest tutaj browar. Ten zabytkowy, piękny, dziewiętnastowieczny budynek, po którym oprowadza przewodnik — i w którym od dawna nie warzy się już piwa. Produkcja przeniosła się do nowoczesnego zakładu obok, na tym samym terenie. Stary budynek jest muzeum. Robota dzieje się gdzie indziej.",
        "Piszę o tym, bo to najlepszy możliwy obraz sporu, który słyszę w co drugiej kuchni: czy takie urządzenie „psuje tradycyjne gotowanie”.",
        "Moim zdaniem to pytanie miesza dwie rzeczy. Tradycją jest PRZEPIS — to, co się robi, w jakiej kolejności, z czym i jak ma smakować. Narzędzie tradycją nie jest. Narzędzia zmieniały się zawsze i nikt się z tego powodu nie obrażał: babcia, której przepisu bronimy, w pewnym momencie przestała mielić mak w makutrze i kupiła maszynkę, a jej matka przeszła z pieca chlebowego na kuchenkę gazową. To, co dziś uchodzi za „sprzęt babci”, to najczęściej sprzęt z lat siedemdziesiątych, a nie z zamierzchłych czasów.",
        "Z tego wynika rzecz, która działa w obie strony i którą mówię wprost. To urządzenie NIE unowocześni Waszego dania. Bigos zrobiony w nim jest dokładnie tym samym bigosem, jeśli przepis jest ten sam — nie stanie się przez to nowoczesny ani „gorszy”. Ale nie stanie się też przez samo urządzenie lepszy. O smaku decyduje przepis i składniki, a nie to, co stoi na blacie.",
        "I uczciwie: są rzeczy, których nie zrobi tak jak garnek. Wszystko, co ma się przysmażyć, przyrumienić, przypiec — to zostaje po stronie patelni i piekarnika, i wtedy po prostu bierze się patelnię. Nie każde danie ma sens w jednym naczyniu i nie będę udawać, że ma.",
        "Więc jeśli ktoś w domu mówi „ja gotuję po staremu i nie chcę tego zmieniać” — ma rację i nikt nie każe mu niczego zmieniać. Pytanie brzmi tylko, czy warto, żeby garnek mieszał się sam, kiedy Wy robicie coś innego. Odpowiedź może brzmieć „nie” i to jest w porządku. Ale warto ją podjąć, patrząc na to, co ta rzecz robi, a nie na to, jak wygląda.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zwierzyńcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Najlepszy test jest taki: powiedzcie przy umawianiu, jakie danie robi się u Was w domu od pokoleń, i zróbmy właśnie je. Nie moje przepisy pokazowe — Wasze. Wtedy sami ocenicie, czy coś się zmieniło w smaku, czy tylko w tym, ile trzeba było przy tym stać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zwierzyńcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zwierzynieckiej rodziny",
      paragraphs: [
        "Zwierzyniec liczy niecałe trzy tysiące mieszkańców, a Roztoczański Park Narodowy odwiedza rocznie około stu dwudziestu tysięcy osób — przy czym to jest liczba dotycząca parku, nie miasta, i nikt tych dwóch strumieni nie rozdzielił. Do Zamościa jest stąd niecałe dwadzieścia pięć kilometrów, do Lublina ponad siedemdziesiąt.",
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

  districtsHeading: "Do których części Zwierzyńca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Zwierzyniec też przyjadę",
  nearbyParagraphs: [
    "Szczebrzeszyn, Krasnobród, Józefów, Tereszpol i Zamość są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szczebrzeszyn", "Krasnobród", "Józefów", "Zamość", "Biłgoraj", "Tomaszów Lubelski"],

  about: blokOMnie("do Zwierzyńca", "w Zwierzyńcu i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Zwierzyńca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zwierzyńcu"),
    {
      question: "Czy to nie psuje tradycyjnego gotowania?",
      answer:
        "Tradycją jest przepis, a nie narzędzie. Narzędzia zmieniały się zawsze — to, co dziś uchodzi za „sprzęt babci”, to najczęściej sprzęt z lat siedemdziesiątych. Danie zrobione według tego samego przepisu jest tym samym daniem; urządzenie go nie unowocześni ani nie popsuje, bo o smaku decyduje przepis i składniki.",
    },
    {
      question: "Czy wszystko da się w tym ugotować?",
      answer:
        "Nie i lepiej wiedzieć to przed zakupem. Wszystko, co ma się przysmażyć, przyrumienić albo przypiec, zostaje po stronie patelni i piekarnika. Nie każde danie ma sens w jednym naczyniu i nie będę udawać, że ma.",
    },
  ],

  geo: { lat: 50.6139, lng: 22.9722 },
};
