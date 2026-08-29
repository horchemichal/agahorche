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
 * CHARSZNICA — gmina wiejska, powiat miechowski. 18 sołectw,
 * ok. 7 tys. mieszkańców na 78,28 km².
 *
 * OŚ STRONY: KAPUSTA — i to najlepszy materiał kulinarny w całym
 * serwisie, bo po raz pierwszy oś tożsamości gminy JEST jedzeniem.
 * „Charsznicka kapusta kwaszona” ma wpis na ministerialnej Liście
 * Produktów Tradycyjnych z 28 listopada 2006 r., obejmujący wszystkie
 * 18 miejscowości gminy.
 *
 * ⚠️ ALE STRONA MUSI BYĆ UCZCIWA CO DO SKALI. Tytuł „kapuściana
 * stolica Polski” jest nieformalny, a wg danych areałowych z 2024 r.
 * Charsznica spadła na TRZECIE miejsce w kraju, za Koniuszą
 * i Igołomią-Wawrzeńczycami. Piszę o tradycji i o wpisie, NIE
 * o pierwszym miejscu w czasie teraźniejszym.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — WPIS NA LISTĘ PRODUKTÓW TRADYCYJNYCH MRiRW: „Charsznicka kapusta
 *   kwaszona”, 28 listopada 2006 r., woj. małopolskie, kategoria
 *   warzywa i owoce. Obszar: 18 miejscowości gminy. W opisie
 *   ministerialnym: „Powierzchnia upraw liczy od 2 000 ha do 2 500 ha”,
 * — BRAK OZNACZENIA UNIJNEGO (ChNP/ChOG/GTS). Nie ma. Nie pisać
 *   „chroniona nazwa”,
 * — MUZEUM KAPUŚCIANE: założone przez Marka Gębosza, sołtysa
 *   Miechowa-Charsznicy; otwarte pod koniec lipca 2012 r. Eksponaty:
 *   stuletnie szatkownice, beczki, obrus z 1870 r., dzban z XVII w.
 *   Inwentaryzację prowadziło Muzeum Przypkowskich w Jędrzejowie,
 * — MAŁOPOLSKIE DNI KAPUSTY (dawniej Charsznickie Dni Kapusty):
 *   drugi weekend września, stadion LKS Spartak. Edycja 2025:
 *   13–14 września. Wybór pary królewskiej kapusty i konkurs
 *   na najcięższą główkę — rekord 2025: 20,8 kg, Michał Galon z Jelczy,
 * — KOLEJ: stacja Charsznica, ul. Kolejowa 1, linia nr 8
 *   (Warszawa–Kraków), CZYNNA, dostosowana dla osób o ograniczonej
 *   mobilności. Obsługa: Koleje Małopolskie, relacja
 *   Sędziszów–Miechów–Kraków Główny. Linia otwarta w 1885 r. —
 *   i to ona umożliwiła wywóz kapusty,
 * — DROGA: ok. 45 km do Krakowa, przez DW 783 i dalej DK7/S7,
 * — SOŁECTWA (18): Charsznica, Chodów, Chodowiec, Ciszowice,
 *   Dąbrowiec, Jelcza, Marcinkowice, Miechów-Charsznica, Podlesice,
 *   Pogwizdów, Swojczany, Szarkówka, Tczyca, Uniejów-Kolonia,
 *   Uniejów-Parcela, Uniejów-Rędziny, Wierzbie, Witowice,
 * — POWIERZCHNIA 78,28 km². Ludność 7 038 (GUS 2024) wobec 7 734
 *   podawanych przez starostwo. Spadek 10,8% w latach 2002–2024,
 *   średni wiek 44,1 lat. 604 podmioty REGON, 2 514 mieszkań
 *   o średniej powierzchni 90 m²,
 * — PRZETWÓRSTWO: rodzinne kiszarnie, 50–300 t kwaszonek rocznie
 *   każda,
 * — METRYKA: 1262 r., bulla papieża Urbana IV, zapis „de Karsnicza”,
 *   dziesięciny dla klasztoru w Miechowie.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE CHARSZNICA JEST NAJWIĘKSZYM PRODUCENTEM KAPUSTY
 *   W POLSCE. Wg danych z 2024 r. jest trzecia. Strona pisze
 *   o tradycji i o wpisie, nie o rankingu,
 * — LICZBY „10% PRODUKCJI KRAJOWEJ”. Powtarzana przez portale
 *   turystyczne bez źródła. Nie używam,
 * — POMNIKA KAPUSTY. Krąży po tekstach turystycznych, ale nie
 *   znalazłam żadnego potwierdzenia. Muzeum jest, pomnika nie,
 * — NAZWISKA ROLNIKA, KTÓRY ZACZĄŁ UPRAWĘ TOWAROWĄ. Trop prowadzi
 *   do „pana Machejka” i spółdzielni w Chodowie w latach 60.–70.,
 *   ale bez imienia i bez roku, w źródle publicystycznym,
 * — NUMERU EDYCJI DNI KAPUSTY. Starostwo podaje początek na 1994 r.,
 *   inne źródło sugeruje 1995. Nie podaję numeru,
 * — LICZBY OSÓB PRACUJĄCYCH PRZY KAPUŚCIE. „Ok. 1 000” to szacunek
 *   byłego wójta z dawnego artykułu. Nie podaję,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Potwierdzone jest istnienie
 *   Stowarzyszenia Gospodyń Wiejskich „Pogwizdowianki”, nic więcej.
 *
 * PUŁAPKI:
 * — DWIE ODRĘBNE MIEJSCOWOŚCI: Charsznica ORAZ Miechów-Charsznica.
 *   Obie są na liście MRiRW. Nazwa gminy to „gmina Charsznica”,
 *   NIE „gmina Miechów-Charsznica”,
 * — AREAŁ: dane rozjeżdżają się drastycznie (2 000–2 500 ha wg wpisu
 *   z 2006 r. vs ok. 700 ha wg danych z 2024 r.). To prawdopodobnie
 *   różnica metodyki. Podaję wyłącznie liczbę z wpisu MRiRW,
 *   z datą, i nie zestawiam jej z dzisiejszą,
 * — KAPUSTA CHARSZNICKA TO NIE PRODUKT GMINY MIECHÓW. Sąsiednia
 *   gmina, ten sam powiat. Częsty błąd,
 * — STACJA „TUNEL” leży w tej gminie (Uniejów-Rędziny), ale tunel
 *   kolejowy jest na granicy z gminą Kozłów. Nie przypisywać
 *   go wyłącznie Charsznicy.
 */

export const CHARSZNICA: CityContent = {
  slug: "charsznica",
  h1: "Thermomix Charsznica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Charsznica — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Charsznica: bezpłatna prezentacja TM7 u Ciebie w kuchni — Charsznica, Tczyca, Swojczany, Chodów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Charsznica — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Charsznica. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Charsznica przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich osiemnastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie osiemnaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Charsznica – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Charsznicy, jak w Tczycy, Swojczanach czy Chodowie.",
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
      heading: "Gmina, której produkt ma wpis w ministerialnym rejestrze",
      paragraphs: [
        "Dwudziestego ósmego listopada dwa tysiące szóstego roku charsznicka kapusta kwaszona została wpisana na ministerialną Listę Produktów Tradycyjnych. Wpis obejmuje wszystkie osiemnaście miejscowości gminy. Piszę o tym z pewną satysfakcją, bo na kilkudziesięciu stronach tego serwisu musiałam już wielokrotnie tłumaczyć, że coś jest lokalną specjalnością, ale wpisu nie ma. Tutaj jest.",
        "Kapusta trafiła tu z powodu, który nie ma w sobie nic z folkloru: przez Charsznicę poprowadzono w tysiąc osiemset osiemdziesiątym piątym roku kolej. Nagle dało się wywieźć towar ciężki, tani i psujący się powoli. Ziemia jest tu lessowa, klimat znośny, a wagon stał na miejscu. Reszta wynikła sama.",
        "W opisie ministerialnym z dwa tysiące szóstego roku podano areał upraw na dwa do dwóch i pół tysiąca hektarów. Muszę jednak dodać rzecz, którą wolę powiedzieć niż przemilczeć: dzisiejsze dane areałowe są znacznie niższe, a w zestawieniach z ostatnich lat Charsznica przestała być największym producentem kapusty w Polsce — wyprzedziły ją gminy Koniusza i Igołomia-Wawrzeńczyce. Tytuł „kapuściana stolica” jest nieformalny i dziś opisuje raczej tradycję niż ranking.",
        "To nie znaczy, że kapusty tu nie ma. Nadal działają rodzinne kiszarnie, produkujące po pięćdziesiąt do trzystu ton kwaszonek rocznie każda. Nadal we wrześniu, w drugi weekend, odbywają się Małopolskie Dni Kapusty ze stadionem pełnym ludzi, wyborem pary królewskiej i konkursem na najcięższą główkę — rekord z dwa tysiące dwudziestego piątego roku to dwadzieścia kilogramów i osiemset gramów.",
        "Jest tu nawet Muzeum Kapuściane, otwarte w dwa tysiące dwunastym roku z inicjatywy sołtysa Miechowa-Charsznicy. Zebrano tam stuletnie szatkownice, beczki, obrus z tysiąc osiemset siedemdziesiątego roku i dzban z siedemnastego wieku. Inwentaryzację robiło muzeum z Jędrzejowa, więc to nie jest zbiór przypadkowy.",
        "Powiem od razu, czego Thermomix nie zrobi z kapustą, bo to najuczciwsze wejście w temat: nie ukisi jej. O tym piszę osobno, niżej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Charsznica?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa — jest ich osiemnaście, a nazwy bywają mylące. Sama gmina ma dwie odrębne miejscowości o podobnej nazwie: Charsznicę i Miechów-Charsznicę. Są też trzy Uniejowy: Kolonia, Parcela i Rędziny. Dojazd wszędzie jest bez dopłaty, ale wolę wiedzieć dokładnie, dokąd jadę.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. We wrześniu i październiku, kiedy idzie zbiór, dopasowuję się bez dyskusji — wtedy prezentacja może poczekać, a kapusta nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Charsznica"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Rok podzielony na sezon i resztę",
      paragraphs: [
        "W gminie żyjącej z warzyw rok nie dzieli się na miesiące, tylko na sezon i resztę. Od późnego lata do jesieni jest zbiór, kiszenie i sprzedaż — czyli okres, w którym nikt nie ma czasu, wszyscy są zmęczeni, a w domu i tak trzeba coś zjeść. Potem przychodzi zima, kiedy czasu jest nagle więcej.",
        "To jest zupełnie inny rytm niż w gminie, z której ludzie codziennie dojeżdżają do pracy w mieście, i wymaga innych rzeczy od kuchni. W sezonie liczy się, żeby obiad powstał sam i przetrwał kilka godzin. Poza sezonem — żeby dało się zrobić coś z tego, co się ma, i odłożyć na zapas.",
        "Praktyczna korzyść jest w sezonie bardzo prosta. Wstawiasz danie jednogarnkowe rano, wychodzisz w pole, wracasz i ono jest — gotowe, ciepłe, samo się wyłączyło. Nie trzeba wracać co dziesięć minut zamieszać ani pilnować, żeby nie przywarło. Kiedy dzień zaczyna się o piątej, to nie jest wygoda, tylko warunek, żeby jeść normalnie.",
        "Poza sezonem sprawdza się druga rzecz: przerabianie tego, czego jest dużo. Zupy do zamrożenia, sosy, pasty, powidła, kiszonki do słoików, ciasto na pierogi robione seriami. W domu z gospodarstwem to i tak się dzieje — chodzi tylko o to, żeby zajmowało pół dnia zamiast całego.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a w gospodarstwie, gdzie rodzice bywają zajęci od rana, to potrafi realnie odciążyć.",
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
    heading: "Kapusta i Thermomix — co robi, a czego nie zrobi",
    paragraphs: [
      "Zacznę od tego, czego nie zrobi, bo w gminie z wpisem na Listę Produktów Tradycyjnych za kapustę kwaszoną każde inne otwarcie byłoby nieszczere. Thermomix nie ukisi kapusty. Kiszenie robi sól, czas i temperatura piwnicy — nie urządzenie. Beczka stoi tygodniami i nic w tym procesie nie da się przyspieszyć ani ulepszyć elektrycznie.",
      "To samo mówię o ogórkach na stronie Kalwarii Zebrzydowskiej i mówię to konsekwentnie: gdzie liczy się fermentacja, tam urządzenie nie ma czego szukać. Wolę stracić argument, niż go naciągnąć.",
      "Za to wszystko, co dzieje się z kapustą PO ukiszeniu, wygląda inaczej. Bigos gotuje się godzinami i przez cały ten czas trzeba go pilnować, żeby nie przywarł — a to jest dokładnie ta czynność, którą urządzenie przejmuje w całości. Kapuśniak tak samo. Gołąbki: farsz miele się i miesza bez maszynki, a duszenie idzie w stałej temperaturze.",
      "Praktycznie największą różnicę robi szatkowanie. Surówki, zasmażana, kapusta do pierogów — wszystko zaczyna się od poszatkowania główki, a to przy większej ilości jest po prostu nudną, długą robotą. W Muzeum Kapuścianym stoją stuletnie szatkownice i one też służyły dokładnie temu: żeby nie robić tego nożem.",
      "Warto jeszcze dodać, że kapusta z tej gminy jest naprawdę na ministerialnej liście — od dwudziestego ósmego listopada dwa tysiące szóstego roku, w kategorii warzywa i owoce, dla wszystkich osiemnastu miejscowości. Nie ma natomiast oznaczenia unijnego, więc nie jest to „chroniona nazwa” w sensie europejskim. To dwie różne rzeczy i bywają mylone.",
    ],
  },

  districtsHeading: "Gdzie w gminie Charsznica dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich osiemnastu sołectw, bez żadnej dopłaty za odległość: Charsznicy, Miechowa-Charsznicy, Chodowa, Chodowca, Ciszowic, Dąbrowca, Jelczy, Marcinkowic, Podlesic, Pogwizdowa, Swojczan, Szarkówki, Tczycy, Uniejowa-Kolonii, Uniejowa-Parceli, Uniejowa-Rędzin, Wierzbia i Witowic.",
    "Nazewnictwo bywa tu mylące i warto o tym wiedzieć. Charsznica i Miechów-Charsznica to dwie odrębne miejscowości, a nie dwie nazwy tej samej. Uniejowy są trzy. Przy umawianiu proszę więc o pełną nazwę sołectwa — nie z pedanterii, tylko żeby trafić za pierwszym razem.",
    "Cała gmina zajmuje niecałe siedemdziesiąt dziewięć kilometrów kwadratowych i liczy około siedmiu tysięcy mieszkańców. Metryka sięga tysiąc dwieście sześćdziesiątego drugiego roku, kiedy nazwa pojawiła się w bulli papieża Urbana IV przy okazji dziesięcin dla klasztoru w Miechowie.",
    "Dojazd koleją jest tu dobry i to on w dużej mierze zbudował tę gminę. Stacja Charsznica przy ulicy Kolejowej jest czynna, leży na linii z Warszawy do Krakowa i obsługują ją Koleje Małopolskie na trasie Sędziszów–Miechów–Kraków Główny. Peron jest dostosowany dla osób o ograniczonej mobilności. Samochodem do Krakowa jest stąd około czterdziestu pięciu kilometrów, drogą wojewódzką i dalej krajową numer siedem.",
  ],
  districts: [
    "Charsznica",
    "Miechów-Charsznica",
    "Tczyca",
    "Swojczany",
    "Chodów",
    "Chodowiec",
    "Ciszowice",
    "Dąbrowiec",
    "Jelcza",
    "Marcinkowice",
    "Podlesice",
    "Pogwizdów",
    "Szarkówka",
    "Uniejów-Kolonia",
    "Uniejów-Parcela",
    "Uniejów-Rędziny",
    "Wierzbie",
    "Witowice",
  ],

  nearbyHeading: "Miechów, Kozłów i Książ Wielki też są na mojej trasie",
  nearbyParagraphs: [
    "Do Miechowa mam stąd kilkanaście minut, do Kozłowa i Książa Wielkiego podobnie. Dalej są Gołcza, Słaboszów i Racławice. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jedna uwaga porządkowa, bo bywa mylona: charsznicka kapusta kwaszona jest produktem tej gminy, a nie sąsiedniego Miechowa. Wpis na listę ministerialną dotyczy osiemnastu miejscowości gminy Charsznica i tylko ich.",
  ],
  nearbyTowns: [
    "Miechów",
    "Kozłów",
    "Książ Wielki",
    "Gołcza",
    "Słaboszów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Charsznica", "w powiecie miechowskim"),

  faq: [
    {
      question: "Czy w Thermomixie da się ukisić kapustę?",
      answer:
        "Nie i mówię to wprost, choć piszę to w gminie, która z kiszonej kapusty słynie. Kiszenie robi sól, czas i chłodna piwnica — beczka stoi tygodniami i nie ma tam czego przyspieszać. Urządzenie wchodzi dopiero potem: przy szatkowaniu, przy bigosie, kapuśniaku, farszu do gołąbków i przy wszystkim, co trzeba długo dusić i pilnować, żeby nie przywarło.",
    },
    ...faqWspolne("w gminie Charsznica"),
    {
      question: "Czy charsznicka kapusta ma unijny certyfikat?",
      answer:
        "Nie, i to warto rozróżnić. Charsznicka kapusta kwaszona ma wpis na ministerialną Listę Produktów Tradycyjnych z dwudziestego ósmego listopada dwa tysiące szóstego roku, obejmujący wszystkie osiemnaście miejscowości gminy. To rejestr krajowy. Oznaczenia unijnego, czyli chronionej nazwy pochodzenia albo oznaczenia geograficznego, ta kapusta nie ma.",
    },
    {
      question: "Trwa sezon i mam urwanie głowy. Czy prezentacja musi być teraz?",
      answer:
        "Nie musi i nie będę naciskać. We wrześniu i październiku w tej gminie idzie zbiór — umawiam się wtedy chętnie, ale równie chętnie przekładam na listopad albo zimę. Powiedz po prostu, kiedy masz spokojne dwie godziny. Ja mam tę samą ofertę przez cały rok, a ceny ustala producent, więc nie ma czegoś takiego jak „ostatnia szansa”.",
    },
  ],

  geo: { lat: 50.4147, lng: 19.9425 },
};
