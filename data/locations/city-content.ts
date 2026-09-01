/**
 * Rozbudowana treść lokalna dla wybranych miast.
 *
 * DLACZEGO OSOBNY PLIK, a nie pola w `Location`:
 * `data/locations/miasta.ts` trzyma FAKTY o jednostce administracyjnej
 * (nazwa, hierarchia, ludność, flagi SEO). To tutaj trzyma TREŚĆ — teksty,
 * dzielnice, pytania. Silnik lokalizacji obsługuje ~20 miast, a realną,
 * napisaną ręcznie treść ma dziś JEDNO (Kraków). `getCityContent()` zwraca
 * `undefined` dla reszty i wtedy route renderuje generyczny
 * `LocationPageTemplate`.
 *
 * TO JEST WARUNEK INDEKSOWANIA. Strona miasta idzie do Google dopiero
 * wtedy, gdy ma własną treść — cienkie szablony z podmienioną nazwą miasta
 * to dokładnie ten błąd, który popełnia konkurencja.
 *
 * WERSJA 2 (sierpień 2026): pełna przebudowa Krakowa na lokalny hub —
 * 19 sekcji, sekcja kosztowa, kontekst kulinarny, blok E-E-A-T,
 * 12 pytań FAQ. Struktura wprost z briefu Agi.
 *
 * WERSJA 3 (27 sierpnia 2026): pogłębienie Krakowa po przebudowie Bochni,
 * która wyprzedziła go objętością i konkretem. Dopisane:
 * — sekcja „Prezentacja w krakowskim mieszkaniu” (kamienica bez windy,
 *   obwód kuchenny, miejsce na blacie) — rzeczy, o które ludzie realnie
 *   pytają przed przyjazdem, a których konkurencja nie porusza wcale,
 * — sekcja „Thermomix dla jednej lub dwóch osób” — najczęstsza obiekcja
 *   akurat w Krakowie, mieście z dużym udziałem gospodarstw jedno-
 *   i dwuosobowych,
 * — opis dzielnic rozbity z 2 na 7 akapitów: podział administracyjny
 *   I–XVIII kontra nazwy potoczne, kamienice Śródmieścia, blokowiska
 *   wschodu, nowe budownictwo zachodu i południa,
 * — 3 nowe pytania FAQ (winda, wynajem, gotowanie dla jednej osoby),
 * — akapit o pierścieniu gmin wokół Krakowa w sekcji obszaru działania.
 *
 * Świadomie NIE dopisywano: liczby studentów w Krakowie (zmienna, nie mam
 * potwierdzonej), numerów podstref parkingowych (zmieniają się), udziału
 * gospodarstw jednoosobowych w procentach (nie mam źródła). Zamiast liczb
 * — opis jakościowy, który nie zestarzeje się na niekorzyść.
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE:
 * — cen Thermomixa (żywe dane z panelu, patrz active-offer-section.tsx),
 * — wymyślonych opinii (prawdziwe: data/testimonials.ts),
 * — biografii Agi, której nie potwierdziła (staż, liczba klientów, adres),
 * — cen restauracji podanych jako fakt (patrz `costs.note`).
 * Dzielnice i miejscowości to publiczne fakty administracyjne.
 */

import { MIASTA_DOPISANE } from "./cities";

export interface CitySection {
  /** Kotwica i klucz Reacta. */
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Linkowanie wewnętrzne w kontekście, nie w oderwanej chmurze linków. */
  links?: { href: string; label: string }[];
  /**
   * Zdjęcie obok tekstu sekcji. Opcjonalne i celowo nie w każdej sekcji —
   * strona miasta ma być czytelna, a nie być galerią. Zdjęcia wstawiamy tam,
   * gdzie coś pokazują: kto poprowadzi spotkanie i jak wygląda gotowanie
   * z dzieckiem. W sekcji o racie zdjęcie niczego nie wnosi.
   */
  photo?: { src: string; alt: string; caption?: string };
  /**
   * Po której stronie tekstu stoi zdjęcie na desktopie. Domyślnie z prawej.
   * Naprzemienne ustawianie („zdjęcie–tekst, tekst–zdjęcie”) rozbija rytm
   * długiej strony — przy pięciu sekcjach pod rząd z tej samej strony oko
   * zaczyna je ignorować. Na telefonie i tak wszystko układa się pionowo.
   */
  photoSide?: "left" | "right";
}

export interface CityContent {
  slug: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  lead: string;
  highlights: { label: string; value: string }[];
  heroPhoto: { src: string; alt: string; caption: string };

  /** Sekcje 1–9 z briefu, w kolejności. */
  sections: CitySection[];

  /**
   * „Domowy obiad czy restauracja” — sekcja edukacyjna. OPCJONALNA.
   * Ma sens tam, gdzie realnie istnieje wybór „gotuję albo jem na mieście”,
   * czyli w dużym mieście. W gminie pod Krakowem to pytanie brzmi inaczej
   * (dowóz bywa ograniczony, a obiad na mieście oznacza zwykle obiad
   * w Krakowie po pracy) i wciskanie tam tej samej tabelki byłoby
   * dopisywaniem treści dla samej objętości.
   */
  costs?: {
    heading: string;
    paragraphs: string[];
    rows: { label: string; home: string; out: string }[];
    note: string;
    closing: string;
  };

  /**
   * „Kraków i gotowanie” — kontekst lokalny, nie treść turystyczna. OPCJONALNA.
   * Dodajemy ją tylko tam, gdzie miasto ma własną, rozpoznawalną kuchnię,
   * o której da się napisać coś prawdziwego. Zmyślona „tradycja kulinarna
   * Skawiny” byłaby dokładnie tym rodzajem wypełniacza, którego unikamy.
   */
  culinary?: { heading: string; paragraphs: string[] };

  /** „Gdzie w Krakowie można umówić prezentację?” */
  districtsHeading: string;
  districtsParagraphs: string[];
  districts: string[];

  /** „Obszar działania przedstawiciela”. */
  nearbyHeading: string;
  nearbyParagraphs: string[];
  nearbyTowns: string[];

  /** E-E-A-T: kto to prowadzi. */
  about: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
    photo: { src: string; alt: string; caption: string };
  };

  faq: { question: string; answer: string }[];
  geo: { lat: number; lng: number };
}

const KRAKOW: CityContent = {
  slug: "krakow",
  h1: "Thermomix Kraków – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kraków — prezentacja i cena",
  seoDescription:
    "Thermomix w Krakowie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojeżdżam do wszystkich dzielnic. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kraków — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Krakowie i okolicach. Gotujemy razem u Ciebie, liczymy ratę na miejscu, decyzja należy do Ciebie.",

  lead:
    "Przywożę Thermomix TM7 do Ciebie, gotujemy razem w Twojej kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje — jest po to, żebyś wiedziała, czy to urządzenie ma u Ciebie sens.",

  highlights: [
    { label: "Prezentacja", value: "bezpłatna, u Ciebie w domu" },
    { label: "Dojazd", value: "cały Kraków i okolice, bez dopłat" },
    { label: "Raty", value: "0% — policz ratę w kalkulatorze" },
    { label: "Zakup", value: "u oficjalnej przedstawicielki Vorwerk" },
  ],

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krakowie – jak wygląda prezentacja?",
      paragraphs: [
        "Umawiamy się na termin, który Ci pasuje — również po pracy albo w weekend. Przyjeżdżam z urządzeniem i produktami, więc nie musisz nic kupować ani przygotowywać. Wystarczy blat, gniazdko i godzina spokoju.",
        "Nie robię pokazu slajdów. Gotujemy razem realny posiłek: coś na obiad, coś słodkiego i coś, co pokazuje, jak Thermomix radzi sobie z tym, co jecie na co dzień. Jeśli wcześniej powiesz mi, ile Was jest w domu i co lubicie, dobiorę dania pod Was — inaczej wygląda prezentacja dla mamy dwójki dzieci, a inaczej dla osoby gotującej bezglutenowo.",
        "Na koniec siadamy do liczb: aktualna cena, dostępne promocje i rata, która realnie mieści się w Twoim budżecie. Jeśli powiesz „dziękuję, nie teraz” — to pełnoprawna odpowiedź i nic za spotkanie nie płacisz.",
      ],
      bullets: [
        "spotkanie trwa zwykle około dwóch godzin",
        "gotujemy u Ciebie, a nie w salonie sprzedaży",
        "możesz zaprosić rodzinę albo koleżanki — w grupie jest ciekawiej",
        "nie musisz decydować tego samego dnia",
      ],
      links: [
        { href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" },
        { href: "/prezentacja/w-domu", label: "Prezentacja u Ciebie w domu" },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Dlaczego warto zobaczyć Thermomix TM7 na żywo?",
      paragraphs: [
        "Filmiki w internecie pokazują urządzenie w idealnych warunkach. W Twojej kuchni liczy się co innego: czy zmieści się na blacie, czy hałasuje na tyle, żeby przeszkadzać wieczorem, i czy naprawdę skróci Ci przygotowanie obiadu, czy tylko przeniesie pracę w inne miejsce.",
        "Na prezentacji sprawdzasz to sama. Dotykasz ekranu, sypiesz składniki, próbujesz tego, co wyszło. To też moment, w którym najłatwiej wyłapać rzeczy, o których nikt nie myśli przed zakupem — jak mycie naczynia, ile miejsca zajmuje Varoma albo jak wygląda praca z przepisem krok po kroku.",
        "Uczciwie: jeżeli po prezentacji uznam, że przy Twoim trybie gotowania to urządzenie się nie zwróci, powiem Ci to wprost. Wolę stracić sprzedaż niż mieć klientkę, która po miesiącu żałuje.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety Thermomixa — bez lukru" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację Thermomixa w Krakowie?",
      paragraphs: [
        "Najprościej zadzwonić — zwykle w trzy minuty ustalamy termin. Możesz też zostawić kontakt w formularzu na dole strony, a oddzwonię ja.",
      ],
      bullets: [
        "1. Dzwonisz lub piszesz — mówisz, w jakiej dzielnicy mieszkasz i kiedy Ci pasuje.",
        "2. Pytam, ile osób gotuje w domu i co lubicie jeść — pod to dobieram dania.",
        "3. Przyjeżdżam z urządzeniem i produktami, gotujemy razem.",
        "4. Omawiamy cenę, promocje i raty. Decyzję podejmujesz, kiedy chcesz.",
      ],
      links: [{ href: "/prezentacja", label: "Umów prezentację przez formularz" }],
    },
    {
      id: "tm7",
      heading: "Thermomix TM7 – najważniejsze funkcje",
      paragraphs: [
        "TM7 to aktualny model w regularnej sprzedaży. Gotuje tak samo jak poprzednik, ale kilka rzeczy realnie zmienia codzienną pracę w kuchni — i to te, które widać dopiero przy obiedzie, nie w tabelce.",
      ],
      bullets: [
        "otwarte gotowanie — możesz doprawiać, próbować i odparowywać jak w garnku",
        "większa Varoma — więcej miejsca na gotowanie na parze dla całej rodziny",
        "duży ekran dotykowy — więcej kroków przepisu widocznych bez przewijania",
        "naczynie miksujące z zewnętrzną izolacją",
        "cichsza praca — ma znaczenie, gdy gotujesz wieczorem przy śpiących dzieciach",
        "Cookidoo — ponad 100 tysięcy przepisów prowadzących krok po kroku",
      ],
      links: [
        { href: "/thermomix/tm7", label: "Wszystko o Thermomix TM7" },
        { href: "/thermomix/funkcje", label: "Pełna lista funkcji" },
        { href: "/thermomix/tm7-vs-tm6", label: "Porównanie TM7 i TM6" },
      ],
      photo: {
        src: "/zdjecia/thermomix-tm7-varoma.webp",
        alt: "Thermomix TM7 z nałożoną Varomą i odchylonym ekranem dotykowym",
        caption: "TM7 z Varomą — na parze gotuje się piętro wyżej niż obiad.",
      },
      photoSide: "left",
    },
    {
      id: "cena",
      heading: "Ile kosztuje Thermomix TM7?",
      paragraphs: [
        "Cena Thermomixa jest jedna w całej Polsce — ustala ją Vorwerk, nie przedstawiciel. W Krakowie zapłacisz dokładnie tyle samo, co w Warszawie czy w Bochni, i nie ma żadnych „cen lokalnych” ani dopłat za dojazd.",
        "Aktualną kwotę widzisz w sekcji z ofertą powyżej — pobiera się wprost z mojego panelu, więc nie zdarzy się, że przeczytasz tu cenę sprzed trzech miesięcy. To, co się zmienia i o co naprawdę warto pytać, to promocje: pakiety z akcesoriami, warunki wymiany starego urządzenia i okresowe raty 0,6%.",
        "Thermomixa nie kupisz w sklepie RTV/AGD ani w oficjalnej sprzedaży internetowej — wyłącznie u przedstawiciela Vorwerk. Urządzenia z portali ogłoszeniowych to rynek wtórny: bez gwarancji producenta, bez promocji i bez kogoś, kto odbierze telefon, gdy coś przestanie działać.",
      ],
      links: [
        { href: "/oferta", label: "Aktualna cena i promocje" },
        { href: "/jak-kupic-thermomix", label: "Jak wygląda zakup krok po kroku" },
      ],
    },
    {
      id: "raty",
      heading: "Czy Thermomix można kupić na raty?",
      paragraphs: [
        "Tak. Dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Wysokość raty zależy od okresu spłaty i wkładu własnego; policzysz ją sama w kalkulatorze poniżej.",
        "Wynik kalkulatora jest orientacyjny. Ostateczne warunki zależą od aktualnej oferty finansowania i decyzji instytucji finansującej — potwierdzam je zawsze przed złożeniem zamówienia, żeby nie było niespodzianek.",
      ],
      links: [{ href: "/finansowanie", label: "Więcej o ratach" }],
    },
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Krakowa",
      paragraphs: [
        "Najwięcej zmienia się tam, gdzie gotuje się codziennie dla kilku osób. Zupa, danie główne i coś dla dziecka mogą powstawać równolegle: na dole gotuje się obiad, w Varomie na parze warzywa albo mięso. Przy jednym garnku to samo zajęłoby dwa razy więcej czasu i dwa razy więcej pilnowania.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że urządzenie potrafi jednocześnie ugotować i zmiksować — bez przekładania gorących rzeczy między naczyniami. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi je krok po kroku.",
        "Kraków ma swoją specyfikę: dojazdy przez miasto potrafią zjeść godzinę dziennie, a obiad i tak musi być. To jest ten moment, w którym urządzenie, które gotuje bez pilnowania, przestaje być gadżetem.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Dla początkujących w kuchni" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Gotowanie z dzieckiem to najczęstszy powód, dla którego ludzie dzwonią.",
      },
    },
    {
      id: "krakowskie-mieszkanie",
      heading: "Prezentacja w krakowskim mieszkaniu — blat, gniazdko, winda",
      paragraphs: [
        "Kraków to miasto o bardzo różnej zabudowie i to jedyna rzecz, o którą naprawdę pytam przed przyjazdem. Nie dlatego, że gdzieś nie dam rady — tylko dlatego, że od tego zależy, ile czasu rezerwuję i co pakuję do auta.",
        "W kamienicy na Kazimierzu albo na Starym Mieście windy zwykle nie ma, a klatka bywa wąska i kręta. Urządzenie waży swoje, więc trzecie piętro po schodach to po prostu dwa kursy zamiast jednego. Wystarczy, że powiesz o tym przy umawianiu, a wyjadę odpowiednio wcześniej. Nikt nie musi mi pomagać nosić.",
        "Druga rzecz to instalacja. W przedwojennej kamienicy i w blokach z lat pięćdziesiątych obwód kuchenny bywa zabezpieczony słabiej niż w nowym budownictwie, a Thermomix przy pełnej mocy pobiera około tysiąca pięciuset watów. Rozwiązanie jest banalne: nie włączam go razem z czajnikiem i piekarnikiem. Zdarzyło mi się to raz i od tamtej pory po prostu o tym pamiętam.",
        "Trzecia to blat. Urządzenie zajmuje mniej więcej tyle miejsca co ekspres kolbowy, ale potrzebuje jeszcze przestrzeni obok — na deskę i miski. W wąskiej kuchni w bloku da się to zrobić, tylko warto zawczasu zwolnić jeden kawałek blatu. To zresztą najlepszy test w całej prezentacji: widzisz na własne oczy, czy sprzęt mieści się u Ciebie na stałe, czy będzie wędrował do szafki po każdym użyciu.",
      ],
      bullets: [
        "kamienica bez windy — powiedz przy umawianiu, biorę na to dodatkowy czas",
        "stara instalacja — nie uruchamiam urządzenia razem z czajnikiem i piekarnikiem",
        "potrzebne miejsce: mniej więcej tyle co ekspres, plus kawałek blatu obok",
        "gniazdko przy blacie wystarczy zwykłe, bez przedłużacza przez pół kuchni",
      ],
    },
    {
      id: "jedna-osoba",
      heading: "Thermomix dla jednej lub dwóch osób — czy to ma sens?",
      paragraphs: [
        "To najczęstsze pytanie, jakie słyszę akurat w Krakowie, i rozumiem, skąd się bierze. Thermomix pokazuje się zwykle w reklamach jako sprzęt dla rodziny przy dużym stole, a Kraków jest miastem, w którym mnóstwo osób mieszka samotnie albo we dwoje — studenci, ludzie po studiach, którzy zostali, pary bez dzieci, seniorzy w mieszkaniach po wychowanych już dzieciach.",
        "Odpowiadam uczciwie: dla jednej osoby zmienia się coś innego niż dla rodziny. Rodzinie urządzenie oszczędza pilnowanie garnków. Osobie mieszkającej samotnie oszczędza przede wszystkim decyzję — czyli ten moment o dwudziestej, kiedy wracasz do domu i uznajesz, że nie opłaca się gotować dla siebie jednej, więc zamawiasz albo jesz kanapkę trzeci wieczór z rzędu.",
        "Przy jednej porcji największą pracą nie jest gotowanie, tylko wszystko wokół: pokroić, zetrzeć, umyć trzy naczynia po zupie na dwa talerze. Kiedy to znika, próg wejścia się obniża i częściej wychodzi, że jednak się gotuje. Do tego dochodzi rzecz prozaiczna — porcje da się robić z wyprzedzeniem, a mniejsza ilość składników nie oznacza, że urządzenie pracuje gorzej.",
        "Nie będę jednak udawać, że to dla każdego. Jeśli gotujesz raz w tygodniu i tak Ci pasuje, to prezentacja pokaże Ci to równie dobrze jak wszystko inne — i to też jest wartościowa odpowiedź. Wolę usłyszeć „sprawdziłam i nie” niż sprzedać komuś sprzęt, który po dwóch miesiącach stoi w szafce.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Dla początkujących w kuchni" },
        { href: "/diety", label: "Jadłospisy i listy zakupów — bezpłatny PDF" },
      ],
    },
    {
      id: "co-ugotujesz",
      heading: "Co można przygotować w Thermomixie?",
      paragraphs: [
        "Praktycznie cały codzienny jadłospis, a nie tylko koktajle i zupy krem. Na prezentacji zwykle robimy obiad i deser, żeby było widać oba końce możliwości.",
      ],
      bullets: [
        "zupy — od rosołu po krem, bez pilnowania garnka",
        "dania jednogarnkowe, sosy, risotto, kasze i ryże",
        "gotowanie na parze w Varomie: ryba, mięso, warzywa, pierogi",
        "ciasta, drożdżowe, kremy i lody",
        "chleb — od zagniecenia po wyrośnięcie ciasta",
        "przetwory, masła orzechowe, hummus, pesto",
        "jedzenie dla niemowląt i małych dzieci — ugotowane i zmiksowane w jednym naczyniu",
      ],
      links: [{ href: "/diety", label: "Gotowe jadłospisy i diety — pobierz bezpłatny PDF" }],
    },
    {
      id: "tradycyjne-gotowanie",
      heading: "Thermomix a tradycyjne gotowanie",
      paragraphs: [
        "Thermomix nie zastępuje umiejętności gotowania — zastępuje pilnowanie. Różnica jest taka, że przy garnku musisz być, a przy Thermomixie możesz w tym czasie zrobić coś innego, bo urządzenie samo trzyma temperaturę, miesza i wyłącza się w odpowiednim momencie.",
        "Są rzeczy, w których tradycyjna patelnia wygrywa — porządnie przysmażony stek czy naleśniki nadal robi się szybciej po staremu. Nie ma sensu tego ukrywać. Thermomix zabiera natomiast te czynności, które zjadają czas po cichu: siekanie, tarcie, ucieranie, mieszanie sosu, żeby się nie przypalił.",
        "W praktyce większość osób nie rezygnuje z garnków. Po prostu przestaje gotować „na wtedy, gdy mam dwie godziny” — i zaczyna gotować w dni, w które wcześniej zamawiała jedzenie.",
      ],
    },
  ],

  costs: {
    heading: "Domowy obiad czy restauracja w Krakowie – co bardziej się opłaca?",
    paragraphs: [
      "W Krakowie to pytanie brzmi inaczej niż gdziekolwiek indziej w Małopolsce, bo tutaj alternatywa jest realna i stoi na wyciągnięcie ręki. Lokal z obiadem masz pod blokiem, dowóz przyjeżdża wszędzie i o każdej porze, a w porze lunchu pół miasta je poza domem. Nikt nie rezygnuje z gotowania dlatego, że nie umie — rezygnuje dlatego, że nie musi.",
      "Właśnie dlatego nie da się na to pytanie odpowiedzieć jedną liczbą, ale da się je policzyć — na Twoich cenach i Twoich nawykach, nie na moich. Poniżej szkielet dla czteroosobowej rodziny; podstaw własne kwoty i własną liczbę dni.",
    ],
    rows: [
      { label: "Obiad w środku tygodnia (4 osoby)", home: "koszt składników", out: "4 × cena dania na mieście" },
      { label: "Zamawiane jedzenie z dowozem", home: "—", out: "cena dań + dostawa + napiwek" },
      { label: "Ile razy w miesiącu", home: "policz swoje dni", out: "policz swoje dni" },
      { label: "Czas przygotowania", home: "gotuje bez pilnowania", out: "dojazd lub czekanie na kuriera" },
    ],
    note:
      "Świadomie nie wpisuję tu konkretnych kwot za dania w krakowskich lokalach — zmieniają się z miesiąca na miesiąc i różnią się między dzielnicami, a podana „na sztywno” cena szybko stałaby się nieprawdą. Weź ostatnie trzy paragony i wpisz swoje liczby; wynik będzie wtedy Twój, a nie mój.",
    closing:
      "I jeszcze jedno, bo w Krakowie to ważne: nie obiecuję, że urządzenie „zwróci się po X miesiącach”. Nie znam Twoich nawyków, więc każda taka liczba byłaby zmyślona. Znam za to mechanizm, który widzę u swoich klientek regularnie — kiedy obiad przestaje wymagać stania przy garnku, znikają te dwa, trzy wieczory w tygodniu, w które zamawiało się z bezradności, a nie z ochoty. Oszczędność bierze się z tej zmiany, nie ze sprzętu samego w sobie.",
  },

  culinary: {
    heading: "Kraków i gotowanie",
    paragraphs: [
      "Kraków ma swoją kuchnię i swoje przyzwyczajenia. Obwarzanek z Rynku Głównego czy sernik krakowski to rzeczy, które zna każdy — ale w domach na Kazimierzu, Prądniku czy w Nowej Hucie codziennie gotuje się to samo, co wszędzie w Małopolsce: rosół w niedzielę, żurek na święta, pierogi wtedy, gdy ktoś ma cierpliwość je lepić.",
      "I właśnie przy tych potrawach Thermomix pokazuje, po co jest. Ciasto na pierogi wyrabia się samo, żurek nie wymaga pilnowania, a rosół gotuje się w tle, gdy Ty robisz coś innego. Nie chodzi o to, żeby zastąpić tradycję — chodzi o to, żeby przestała zajmować całą sobotę.",
      "Na prezentacji chętnie ugotuję coś z tej półki, jeśli powiesz mi wcześniej, na czym Ci zależy. Zwykle to lepszy test niż kolejne smoothie.",
    ],
  },

  districtsHeading: "Gdzie w Krakowie można umówić prezentację Thermomixa?",
  districtsParagraphs: [
    "Prezentacja odbywa się u Ciebie w domu lub w mieszkaniu — bo tylko tam widać, jak urządzenie sprawdzi się w Twojej kuchni. Dokładne miejsce i termin ustalamy indywidualnie przez telefon; jeśli wolisz spotkanie u kogoś z rodziny albo u koleżanki, to też nie jest problem.",
    "Dojeżdżam do wszystkich dzielnic Krakowa i nie doliczam za to ani złotówki — niezależnie od tego, czy mieszkasz na Starym Mieście, na Ruczaju, czy na drugim końcu Nowej Huty.",
    "Formalnie Kraków dzieli się na osiemnaście dzielnic oznaczonych numerami od I do XVIII. W rozmowie prawie nikt tych numerów nie używa. Ludzie mówią, że mieszkają na Ruczaju, na Azorach, na Kazimierzu albo „za rondem”, i to są nazwy, którymi sama się posługuję przy umawianiu. Jeśli podasz mi nazwę osiedla, a nie numer dzielnicy, będzie tylko prościej.",
    "Ta różnica ma znaczenie praktyczne, bo Kraków w środku nie jest jednorodny. W Śródmieściu — Stare Miasto, Kazimierz, część Grzegórzek — mieszka się głównie w kamienicach: wysokie sufity, wąskie klatki, rzadko winda, często kuchnia mniejsza niż pokój. Do tego dochodzi strefa płatnego parkowania, która obejmuje ścisłe centrum i część dzielnic wokół niego. Dla Ciebie to bez znaczenia, bo postój to mój koszt, ale dla mnie oznacza, że przy adresach w centrum wyjeżdżam z zapasem.",
    "Wschodnia część miasta to zupełnie inna historia. Nowa Huta, Bieńczyce, Mistrzejowice, Czyżyny i Bieżanów-Prokocim to w większości bloki, a w blokach kuchnia jest zwykle osobnym, niedużym pomieszczeniem. Rozmowa schodzi tam najczęściej na to samo pytanie: gdzie to właściwie postawić. Za to z parkowaniem problemu nie ma prawie nigdy, więc pod adres podjeżdżam bez krążenia.",
    "Zachód i południe to głównie nowe budownictwo. Ruczaj, Kliny, części Bronowic i Prądnika Białego zabudowywano po dwutysięcznym roku i tam kuchnia to zwykle aneks otwarty na salon — najwygodniejszy układ na prezentację, jaki się trafia, bo gotujemy i rozmawiamy w jednym miejscu, zamiast stać do siebie plecami. Zwierzyniec, Swoszowice i dalsze części Podgórza to z kolei domy jednorodzinne i duże kuchnie, gdzie miejsce na blacie w ogóle nie jest tematem.",
    "Dla każdej z osiemnastu dzielnic mam osobną stronę z konkretami — z nazwami osiedli, dojazdem i tym, o co pytają tamtejsi mieszkańcy. Znajdziesz je pod spisem poniżej.",
  ],
  districts: [
    "Stare Miasto",
    "Kazimierz",
    "Grzegórzki",
    "Prądnik Czerwony",
    "Prądnik Biały",
    "Krowodrza",
    "Bronowice",
    "Zwierzyniec",
    "Dębniki",
    "Ruczaj",
    "Łagiewniki-Borek Fałęcki",
    "Swoszowice",
    "Podgórze Duchackie",
    "Bieżanów-Prokocim",
    "Podgórze",
    "Czyżyny",
    "Mistrzejowice",
    "Bieńczyce",
    "Wzgórza Krzesławickie",
    "Nowa Huta",
  ],

  nearbyHeading: "Obszar działania przedstawiciela",
  nearbyParagraphs: [
    "Nie ograniczam się do granic miasta. Mieszkam i pracuję w Małopolsce, więc obszar wokół Krakowa obsługuję na co dzień — od Wieliczki i Niepołomic po Bochnię i Brzesko, a na zachód przez Skawinę, Zabierzów i Krzeszowice aż po Chrzanów.",
    "Jeśli Twojej miejscowości nie ma poniżej, i tak zapytaj. Zwykle da się dopasować termin tak, żeby dojazd miał sens dla nas obu — a przy dalszych trasach po prostu umawiam kilka spotkań w jednym rejonie.",
    "Warto wiedzieć jedno: pierścień gmin wokół Krakowa nie jest dla mnie „dalej” niż samo miasto. Do Zielonek, Michałowic, Mogilan czy Świątnik Górnych jadę często szybciej niż na drugi koniec Nowej Huty. Jeśli wyprowadziłaś się z Krakowa pod miasto, nic się nie zmienia — dojazd nadal jest bezpłatny i nadal przyjeżdżam z urządzeniem i składnikami.",
  ],
  nearbyTowns: [
    "Wieliczka",
    "Niepołomice",
    "Skawina",
    "Zielonki",
    "Zabierzów",
    "Michałowice",
    "Mogilany",
    "Świątniki Górne",
    "Krzeszowice",
    "Chrzanów",
    "Myślenice",
    "Gdów",
    "Dobczyce",
    "Bochnia",
    "Brzesko",
  ],

  about: {
    heading: "Kto poprowadzi Twoją prezentację",
    paragraphs: [
      "Nazywam się Aga Horche i jestem oficjalną przedstawicielką Thermomix® w Małopolsce. To znaczy, że kupujesz u mnie legalnie: z gwarancją producenta, z aktualną promocją i z możliwością zgłoszenia urządzenia do serwisu, gdyby kiedykolwiek zaszła potrzeba.",
      "Pracuję pojedynczo, nie przez call center. Ta sama osoba, która przyjedzie do Ciebie na prezentację, odbierze telefon pół roku później, gdy nie będzie wychodzić ciasto. Uważam, że to jest właściwie cała różnica między zakupem u przedstawiciela a kupnem sprzętu z ogłoszenia.",
    ],
    bullets: [
      "oficjalna przedstawicielka Vorwerk — gwarancja producenta i legalny zakup",
      "prezentacje w domach klientów w Krakowie i całej Małopolsce",
      "pomoc przy pierwszym uruchomieniu i założeniu konta Cookidoo",
      "stały kontakt telefoniczny po zakupie, także przy zgłoszeniu serwisowym",
      "pełne 7-dniowe jadłospisy z listami zakupów dla moich klientek i klientów",
    ],
    photo: {
      src: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
      alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
      caption: "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce.",
    },
  },

  faq: [
    {
      question: "Gdzie kupić Thermomix w Krakowie?",
      answer:
        "Wyłącznie u przedstawiciela Vorwerk — Thermomixa nie ma w sklepach RTV/AGD ani w oficjalnej sprzedaży internetowej. W Krakowie i okolicach możesz umówić się ze mną: przyjeżdżam z urządzeniem, gotujemy i dopiero potem rozmawiamy o zakupie.",
    },
    {
      question: "Ile kosztuje Thermomix TM7?",
      answer:
        "Cenę ustala Vorwerk i jest taka sama w całej Polsce. Aktualną kwotę znajdziesz w sekcji z ofertą na tej stronie — jest pobierana wprost z mojego panelu, więc zawsze jest bieżąca. Promocje zmieniają się co miesiąc, dlatego warto zapytać o te aktualne.",
    },
    {
      question: "Czy można zobaczyć Thermomix przed zakupem?",
      answer:
        "Tak i właśnie po to jest prezentacja. Gotujemy razem u Ciebie w kuchni, więc sprawdzasz urządzenie na swoim blacie, przy swoich potrawach — a nie na filmiku.",
    },
    {
      question: "Czy prezentacja Thermomixa jest bezpłatna?",
      answer:
        "Tak. Nie płacisz za dojazd, za składniki ani za mój czas. Po spotkaniu „nie, dziękuję” jest pełnoprawną odpowiedzią.",
    },
    {
      question: "Czy przedstawiciel Thermomix przyjeżdża do domu?",
      answer:
        "Tak, prezentacja odbywa się u Ciebie. Przywożę urządzenie i produkty — potrzebny jest tylko blat i gniazdko.",
    },
    {
      question: "Czy można kupić Thermomix na raty?",
      answer:
        "Tak, dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Ratę policzysz w kalkulatorze na tej stronie; wynik jest orientacyjny, a ostateczne warunki zależą od aktualnej oferty i decyzji instytucji finansującej.",
    },
    {
      question: "Ile trwa prezentacja Thermomixa?",
      answer:
        "Zwykle około dwóch godzin — tyle, żeby spokojnie ugotować kilka rzeczy i zdążyć na pytania. Jeśli masz mało czasu, powiedz od razu, to skrócę spotkanie.",
    },
    {
      question: "Czy prezentacja jest możliwa w weekend?",
      answer:
        "Tak, weekendy i wieczory to najczęściej wybierane terminy. Ustalamy godzinę przez telefon.",
    },
    {
      question: "Czy można umówić prezentację dla całej rodziny?",
      answer:
        "Jak najbardziej — i nawet do tego zachęcam. Przy większej grupie padają ciekawsze pytania, a decyzja o zakupie i tak zwykle zapada wspólnie.",
    },
    {
      question: "Czy Thermomix sprawdzi się przy małych dzieciach?",
      answer:
        "Tak. Ugotuje i zmiksuje w jednym naczyniu, bez przekładania gorących rzeczy, a gotowanie na parze w Varomie pozwala robić posiłek dla dziecka równolegle z obiadem dla reszty domu.",
    },
    {
      question: "Czy można wymienić starszy model Thermomixa?",
      answer:
        "Warto zapytać o warunki wymiany przy zakupie TM7 — potrafi to zauważalnie obniżyć kwotę do zapłaty. Ile dokładnie, zależy od modelu i stanu urządzenia, więc sprawdzam to indywidualnie zamiast podawać widełki z internetu.",
    },
    {
      question: "Czym różni się TM7 od TM6?",
      answer:
        "Najbardziej: otwartym gotowaniem, większą Varomą, dużym ekranem dotykowym, cichszą pracą i izolowanym naczyniem. Cookidoo i przepisy są wspólne. Na prezentacji mogę pokazać oba modele obok siebie.",
    },
    {
      question: "Mieszkam w kamienicy bez windy. Wniesiesz urządzenie na trzecie piętro?",
      answer:
        "Tak, robię to regularnie — w Śródmieściu i na Kazimierzu to raczej reguła niż wyjątek. Powiedz tylko przy umawianiu, na którym piętrze mieszkasz i czy jest winda, żebym zarezerwowała na to trochę więcej czasu. Nie musisz mi pomagać nosić.",
    },
    {
      question: "Wynajmuję mieszkanie w Krakowie. Czy zakup Thermomixa ma sens?",
      answer:
        "Urządzenie jest Twoje, a nie mieszkania — przy przeprowadzce jedzie razem z Tobą i nie wymaga żadnego montażu ani zgody właściciela. Potrzebuje tylko gniazdka i kawałka blatu. To zresztą jeden z niewielu sprzętów kuchennych, o którym da się to powiedzieć.",
    },
    {
      question: "Gotuję dla siebie jednej. Czy to nie jest przesada?",
      answer:
        "Uczciwie: zmienia się co innego niż w rodzinie. Przy jednej porcji najwięcej pracy jest nie w samym gotowaniu, tylko w krojeniu, tarciu i zmywaniu — i to znika. W praktyce oznacza to, że częściej wychodzi ugotować coś dla siebie zamiast zamówić. Ale jeśli po prezentacji uznasz, że przy Twoim trybie dnia to się nie zwróci, powiem Ci to wprost.",
    },
  ],

  geo: { lat: 50.0614, lng: 19.9366 },
};

/**
 * MIASTA SATELICKIE (Wieliczka, Niepołomice, Skawina).
 *
 * Krótsze od Krakowa i celowo INNE, nie skrócone. Kraków jest hubem —
 * odpowiada na „chcę Thermomixa, mieszkam w dużym mieście”. Te trzy strony
 * odpowiadają na coś, czego strona Krakowa nie obsłuży: „mieszkam obok
 * Krakowa, czy ona w ogóle do mnie przyjedzie i czy to nie kosztuje
 * dodatkowo”. To jest realna wątpliwość mieszkańca gminy ościennej i to
 * ona organizuje całą treść.
 *
 * Każde miasto ma własny kąt, wynikający z tego, jak się w nim mieszka:
 *   Wieliczka   — dojazd do pracy w Krakowie i obiad po powrocie,
 *   Niepołomice — praca zmianowa w strefie i gotowanie poza rytmem 9–17,
 *   Skawina     — dom z ogrodem, sezonowe warzywa i przetwory.
 *
 * Nazwy sołectw i osiedli są zweryfikowane w źródłach gminnych i Wikipedii
 * (sierpień 2026). NIE podajemy liczby mieszkańców — dane, które znalazłam,
 * są w części sprzed lat, a nieaktualna liczba na stronie lokalnej to
 * dokładnie ten rodzaj drobiazgu, który mieszkaniec wyłapuje od razu.
 *
 * `costs` i `culinary` są tu pominięte świadomie — patrz komentarze przy
 * tych polach w interfejsie.
 *
 * CO SIĘ TU POWTARZA MIĘDZY MIASTAMI I DLACZEGO TAK ZOSTAJE:
 * zdania faktograficzne — że cenę ustala Vorwerk i jest jednakowa w całym
 * kraju, jak działa kalkulator rat, kim jest Aga. Te akapity są identyczne
 * na wszystkich stronach, bo opisują ten sam fakt. Przepisanie ich na trzy
 * różne sposoby po to, żeby ominąć wykrywanie powtórzeń, byłoby pisaniem
 * pod algorytm zamiast pod czytelnika — a przy okazji trzy wersje jednego
 * faktu to trzy miejsca, które trzeba poprawić, gdy fakt się zmieni.
 * Powtarzać NIE MOGĄ się natomiast akapity opisowe: lead, sekcja z lokalnym
 * kątem, „dla rodziny”, treść o dzielnicach i pierwsze pytania FAQ są pisane
 * osobno dla każdego miasta.
 */

const WIELICZKA: CityContent = {
  slug: "wieliczka",
  h1: "Thermomix Wieliczka – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Wieliczka — prezentacja i cena",
  seoDescription:
    "Thermomix w Wieliczce: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wieliczka — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wieliczce lub okolicy. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Wieliczki i całej gminy dojeżdżam na co dzień — bez dopłaty za dojazd i bez traktowania tego jako „wyjazdu poza Kraków”. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje.",

  highlights: [
    { label: "Prezentacja", value: "bezpłatna, u Ciebie w domu" },
    { label: "Dojazd", value: "Wieliczka i cała gmina, bez dopłat" },
    { label: "Termin", value: "też po pracy i w weekend" },
    { label: "Raty", value: "0% — policz ratę w kalkulatorze" },
  ],

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Prezentacja Thermomixa TM7 w domowej kuchni — gotowanie na blacie klientki",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wieliczce – jak wygląda prezentacja?",
      paragraphs: [
        "Umawiamy się na godzinę, która Ci pasuje. W Wieliczce najczęściej jest to wieczór w tygodniu albo sobota przed południem — bo duża część osób, które tu mieszkają, pracuje w Krakowie i wraca do domu po siedemnastej. Przyjeżdżam z urządzeniem i z produktami, więc nie musisz nic kupować ani sprzątać kuchni na wysoki połysk.",
        "Nie ma pokazu slajdów ani sali konferencyjnej. Gotujemy razem realny posiłek u Ciebie na blacie: coś na obiad, coś słodkiego i coś, co pokazuje, jak Thermomix radzi sobie z tym, co jecie na co dzień. Jeśli wcześniej powiesz mi, ile Was jest w domu, dobiorę dania pod Was.",
        "Na koniec siadamy do liczb: aktualna cena, dostępna promocja i rata, która realnie mieści się w budżecie. „Dziękuję, przemyślę” jest pełnoprawną odpowiedzią i nic za spotkanie nie płacisz.",
      ],
      links: [
        { href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Obiad po powrocie z Krakowa",
      paragraphs: [
        "To jest ta część, która w Wieliczce brzmi inaczej niż w samym Krakowie. Jeśli codziennie dojeżdżasz do pracy, wracasz do domu w porze, o której gotowanie od zera oznacza kolację o dwudziestej. I to jest zwykle moment, w którym zamiast obiadu pojawia się coś z zamrażarki albo telefon po dowóz.",
        "Thermomix nie skraca gotowania do zera — skraca pilnowanie. Wsypujesz składniki, ustawiasz i idziesz rozpakować torby, odebrać dziecko z pokoju albo po prostu usiąść. Urządzenie samo trzyma temperaturę, miesza i wyłącza się, kiedy trzeba. Zupa czy jednogarnkowe danie robi się w tle, a nie zamiast odpoczynku.",
        "Druga rzecz, o której warto pomyśleć przy dojazdach: gotowanie na dwa dni przestaje być projektem na niedzielę. Większa porcja to ta sama obsługa co mniejsza, bo to nie Ty stoisz nad garnkiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wieliczce?",
      paragraphs: [
        "Najprościej telefonem — zadzwoń albo napisz SMS, ustalimy termin w minutę. Jeśli wolisz nie dzwonić, wypełnij formularz na dole tej strony, a ja oddzwonię o porze, którą wskażesz.",
        "Powiedz od razu dwie rzeczy: w którym rejonie gminy mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę tak, żeby dojazd był sensowny, drugie — dobrać, co ugotujemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    {
      id: "tm7",
      heading: "Thermomix TM7 – co zobaczysz na spotkaniu",
      paragraphs: [
        "TM7 to najnowszy model. Największe różnice względem TM6 widać od razu: duży ekran dotykowy, izolowane naczynie, wyraźnie cichsza praca i większa Varoma do gotowania na parze. Doszło też otwarte gotowanie, czyli możliwość pracy bez pokrywki — w praktyce oznacza to, że można odparować sos albo podsmażyć cebulę, nie przekładając niczego na patelnię.",
        "Na prezentacji nie opowiadam o funkcjach z listy, tylko pokazuję te, z których faktycznie będziesz korzystać. Jeśli zastanawiasz się nad TM6, mogę pokazać oba modele obok siebie i uczciwie powiedzieć, kiedy starszy wystarczy.",
      ],
      links: [
        { href: "/thermomix/tm7", label: "Wszystko o Thermomix TM7" },
        { href: "/thermomix/tm7-vs-tm6", label: "Porównanie TM7 i TM6" },
      ],
      photo: {
        src: "/zdjecia/thermomix-tm7-varoma.webp",
        alt: "Thermomix TM7 z nałożoną Varomą i odchylonym ekranem dotykowym",
        caption: "TM7 z Varomą — na parze gotuje się piętro wyżej niż obiad.",
      },
      photoSide: "left",
    },
    {
      id: "cena",
      heading: "Ile kosztuje Thermomix TM7?",
      paragraphs: [
        "Cenę ustala Vorwerk i jest identyczna w całej Polsce — w Wieliczce zapłacisz tyle samo, co w Krakowie czy w Warszawie. Aktualna kwota jest w sekcji z ofertą powyżej; pobiera się wprost z mojego panelu, więc nie zdarzy się, że przeczytasz tu cenę sprzed pół roku.",
        "Zmieniają się natomiast promocje i zestawy — co miesiąc wyglądają inaczej. Dlatego zamiast wpisywać w treść kwotę, która za trzy tygodnie będzie nieprawdziwa, proszę o telefon albo o spojrzenie na karty ofert wyżej.",
      ],
      links: [{ href: "/oferta", label: "Aktualna cena i promocje" }],
    },
    {
      id: "raty",
      heading: "Thermomix na raty — jak to policzyć",
      paragraphs: [
        "Dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.",
        "Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji zwykle wracamy do tych samych liczb, tylko z dokładnymi danymi.",
      ],
      links: [{ href: "/finansowanie", label: "Więcej o ratach" }],
    },
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wieliczki",
      paragraphs: [
        "Wieliczka i okoliczne sołectwa to w dużej mierze domy i mieszkania rodzin z dziećmi — sporo tu nowych osiedli, do których ludzie przeprowadzili się z Krakowa. Rytm dnia jest wtedy dość konkretny: przedszkole albo szkoła, praca, powrót, obiad, zajęcia.",
        "Thermomix wchodzi dokładnie w to wąskie gardło między powrotem a kolacją. Ugotuje i zmiksuje w jednym naczyniu, bez przekładania gorących rzeczy, a gotowanie na parze w Varomie pozwala robić posiłek dla młodszego dziecka równolegle z obiadem dla reszty domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem obok Thermomixa TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Ten sam obiad dla dorosłych i dla dziecka, w jednym urządzeniu.",
      },
    },
    {
      id: "co-ugotujesz",
      heading: "Co możesz ugotować?",
      paragraphs: [
        "Zupy, sosy, dania jednogarnkowe, ciasta, pasty kanapkowe, mleka roślinne, kaszę i ryż, jedzenie dla niemowlaka, przetwory. Na Cookidoo są tysiące przepisów krok po kroku, a urządzenie prowadzi przez nie po kolei — to dlatego Thermomix bywa dobrym pomysłem także dla kogoś, kto gotować raczej nie lubi.",
        "Moim klientkom i klientom przygotowuję pełne 7-dniowe jadłospisy z listami zakupów. Jeden dzień z każdej diety możesz pobrać bezpłatnie już teraz, żeby zobaczyć, jak to wygląda w praktyce.",
      ],
      links: [
        { href: "/diety", label: "Gotowe jadłospisy i diety — pobierz bezpłatny PDF" },
        { href: "/thermomix/funkcje", label: "Pełna lista funkcji" },
      ],
    },
    {
      id: "tradycyjne-gotowanie",
      heading: "Czy to zastąpi normalne gotowanie?",
      paragraphs: [
        "Nie i nie udaję, że tak. Porządnie przysmażony schabowy czy naleśniki nadal robi się szybciej na patelni — nie ma sensu tego ukrywać. Thermomix zabiera te czynności, które zjadają czas po cichu: siekanie, tarcie, ucieranie, mieszanie sosu, żeby się nie przypalił.",
        "Większość osób nie wyrzuca garnków. Po prostu przestaje odkładać gotowanie na dzień, w którym „będzie czas”.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety Thermomixa — bez lukru" }],
    },
  ],

  districtsHeading: "Gdzie w gminie Wieliczka dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — i do samego miasta, i do sołectw. Nie dzielę terenu na „bliżej” i „dalej”, bo z perspektywy jednego popołudnia to i tak jest ta sama trasa. Za dojazd nie doliczam ani złotówki.",
    "Jeśli mieszkasz w miejscowości, której nie ma na liście, po prostu zapytaj. Zwykle da się dopasować termin tak, żeby wszystko miało sens — a przy dalszych trasach umawiam po prostu kilka spotkań w jednym rejonie tego samego dnia.",
  ],
  districts: [
    "Wieliczka",
    "Śledziejowice",
    "Kokotów",
    "Węgrzce Wielkie",
    "Czarnochowice",
    "Brzegi",
    "Grabie",
    "Strumiany",
    "Sułków",
    "Zabawa",
    "Lednica Górna",
    "Siercza",
    "Grabówki",
    "Mietniów",
    "Pawlikowice",
    "Koźmice Wielkie",
    "Koźmice Małe",
    "Janowice",
    "Podstolice",
    "Chorągwica",
    "Golkowice",
    "Byszyce",
    "Raciborsko",
    "Sygneczów",
    "Gorzków",
    "Grajów",
    "Dobranowice",
    "Jankówka",
    "Rożnowa",
    "Mała Wieś",
  ],

  nearbyHeading: "Poza gminą też przyjadę",
  nearbyParagraphs: [
    "Wieliczka leży na mojej codziennej trasie, więc miejscowości wokół obsługuję przy okazji: Kraków od strony Bieżanowa i Prokocimia, Niepołomice, Gdów, Świątniki Górne, a dalej Bochnia i Dobczyce.",
  ],
  nearbyTowns: [
    "Kraków",
    "Niepołomice",
    "Gdów",
    "Świątniki Górne",
    "Biskupice",
    "Dobczyce",
    "Bochnia",
    "Skawina",
  ],

  about: {
    heading: "Kto poprowadzi Twoją prezentację",
    paragraphs: [
      "Nazywam się Aga Horche i jestem oficjalną przedstawicielką Thermomix® w Małopolsce. To znaczy, że kupujesz legalnie: z gwarancją producenta, z aktualną promocją i z możliwością zgłoszenia urządzenia do serwisu.",
      "Pracuję pojedynczo, nie przez call center. Ta sama osoba, która przyjedzie do Ciebie do Wieliczki, odbierze telefon pół roku później, gdy nie będzie wychodzić ciasto. To jest właściwie cała różnica między zakupem u przedstawiciela a kupnem sprzętu z ogłoszenia.",
    ],
    bullets: [
      "oficjalna przedstawicielka Vorwerk — gwarancja producenta i legalny zakup",
      "prezentacje w domach klientów w Wieliczce, Krakowie i całej Małopolsce",
      "pomoc przy pierwszym uruchomieniu i założeniu konta Cookidoo",
      "stały kontakt telefoniczny po zakupie, także przy zgłoszeniu serwisowym",
      "pełne 7-dniowe jadłospisy z listami zakupów dla moich klientek i klientów",
    ],
    photo: {
      src: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
      alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
      caption: "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce.",
    },
  },

  faq: [
    {
      question: "Czy przyjeżdżasz do Wieliczki bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Wieliczki i całej gminy jest bezpłatny, tak samo jak sama prezentacja. Nie ma dopłaty za „wyjazd poza Kraków”.",
    },
    {
      question: "Gdzie kupić Thermomix w Wieliczce?",
      answer:
        "Wyłącznie u przedstawiciela Vorwerk — Thermomixa nie ma w sklepach RTV/AGD ani w oficjalnej sprzedaży internetowej. W Wieliczce możesz umówić się ze mną: przyjeżdżam z urządzeniem, gotujemy, a o zakupie rozmawiamy dopiero potem.",
    },
    {
      question: "Czy dojeżdżasz też do sołectw, nie tylko do miasta?",
      answer:
        "Tak, do całej gminy — od Śledziejowic i Kokotowa po Koźmice, Raciborsko czy Sygneczów. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Ile kosztuje Thermomix TM7?",
      answer:
        "Cenę ustala Vorwerk i jest taka sama w całej Polsce. Aktualną kwotę znajdziesz w sekcji z ofertą na tej stronie — pobiera się wprost z mojego panelu, więc zawsze jest bieżąca.",
    },
    {
      question: "Czy prezentacja jest bezpłatna i do czegoś zobowiązuje?",
      answer:
        "Jest bezpłatna i do niczego nie zobowiązuje. Nie płacisz za dojazd, za składniki ani za mój czas. Po spotkaniu „nie, dziękuję” jest pełnoprawną odpowiedzią.",
    },
    {
      question: "Czy można umówić się po pracy albo w weekend?",
      answer:
        "Tak i w Wieliczce to najczęstszy wybór, bo wiele osób dojeżdża do Krakowa. Wieczory w tygodniu i sobotnie przedpołudnia mam otwarte.",
    },
    {
      question: "Ile trwa prezentacja?",
      answer:
        "Zwykle około dwóch godzin — tyle, żeby spokojnie ugotować kilka rzeczy i zdążyć na pytania. Jeśli masz mniej czasu, powiedz od razu, to skrócę spotkanie.",
    },
    {
      question: "Czy można kupić Thermomix na raty?",
      answer:
        "Tak, dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Ratę policzysz w kalkulatorze na tej stronie; wynik jest orientacyjny, a ostateczne warunki zależą od aktualnej oferty i decyzji instytucji finansującej.",
    },
    {
      question: "Czy pomagasz po zakupie?",
      answer:
        "Tak. Pomagam przy pierwszym uruchomieniu, przy koncie Cookidoo i przy zgłoszeniu serwisowym, gdyby kiedykolwiek było potrzebne. Numer telefonu zostaje ten sam.",
    },
  ],

  geo: { lat: 49.9873, lng: 20.0644 },
};

const NIEPOLOMICE: CityContent = {
  slug: "niepolomice",
  h1: "Thermomix Niepołomice – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Niepołomice — prezentacja i cena",
  seoDescription:
    "Thermomix w Niepołomicach: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Niepołomice — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Niepołomicach lub okolicy. Terminy również poza godzinami 9–17. Bez dopłat i bez zobowiązania.",

  lead:
    "Do Niepołomic i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i liczymy na spokojnie, ile to naprawdę kosztuje — także wtedy, gdy pracujesz zmianowo i „normalne” godziny spotkań u Ciebie nie działają.",

  highlights: [
    { label: "Prezentacja", value: "bezpłatna, u Ciebie w domu" },
    { label: "Dojazd", value: "Niepołomice i cała gmina, bez dopłat" },
    { label: "Termin", value: "elastyczny, także przy pracy zmianowej" },
    { label: "Raty", value: "0% — policz ratę w kalkulatorze" },
  ],

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Prezentacja Thermomixa TM7 w domowej kuchni — gotowanie na blacie klientki",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Niepołomicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam do Ciebie z urządzeniem i z produktami. Nie musisz nic kupować, przygotowywać ani sprzątać — wystarczy blat, gniazdko i godzina spokoju. Termin ustalamy pod Ciebie, nie pod mój grafik.",
        "Gotujemy razem realny posiłek: coś na obiad, coś słodkiego i coś, co pokazuje, jak Thermomix radzi sobie z tym, co jecie na co dzień. Bez slajdów i bez sali konferencyjnej — chodzi o to, żebyś zobaczyła urządzenie na swoim blacie, a nie na filmiku.",
        "Na koniec siadamy do liczb: aktualna cena, dostępna promocja, rata. Jeśli powiesz „nie teraz”, to pełnoprawna odpowiedź i nic za spotkanie nie płacisz.",
      ],
      links: [
        { href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Kiedy dom nie żyje w rytmie 9–17",
      paragraphs: [
        "W Niepołomicach i okolicznych sołectwach sporo osób pracuje w zakładach w strefie gospodarczej, a to często oznacza zmiany. Kiedy jedna osoba w domu wraca po czternastej, a druga po dwudziestej drugiej, wspólny obiad przestaje być oczywisty — i zwykle kończy się tym, że każdy odgrzewa sobie coś osobno.",
        "To akurat sytuacja, w której Thermomix ma sens bardziej niż w domu z regularnymi godzinami. Większa porcja kosztuje tyle samo obsługi co mniejsza, bo to nie Ty stoisz nad garnkiem. Ugotowane raz danie jednogarnkowe albo zupa spokojnie obsługują dwa różne powroty do domu tego samego dnia.",
        "Druga rzecz: gotowanie o nietypowej porze przestaje wymagać energii. Wsypujesz, ustawiasz, siadasz. Po nocnej zmianie to jest realna różnica.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Niepołomicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalimy termin w minutę. Jeśli wolisz nie dzwonić, wypełnij formularz na dole strony i podaj porę, o której mogę oddzwonić.",
        "Przy umawianiu powiedz mi dwie rzeczy: w której części gminy mieszkasz i ile osób będzie na spotkaniu. Jeśli pracujesz zmianowo, powiedz też, jakie godziny w ogóle wchodzą w grę — mam terminy również przed południem w dni robocze, co dla części osób jest wygodniejsze niż wieczór.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    {
      id: "tm7",
      heading: "Thermomix TM7 – co zobaczysz na spotkaniu",
      paragraphs: [
        "TM7 to najnowszy model: duży ekran dotykowy, izolowane naczynie, cichsza praca i większa Varoma do gotowania na parze. Doszło otwarte gotowanie, czyli praca bez pokrywki — można odparować sos albo podsmażyć cebulę bez przekładania czegokolwiek na patelnię.",
        "Pokazuję te funkcje, z których faktycznie będziesz korzystać, a nie całą listę z ulotki. Jeśli rozważasz TM6, mogę pokazać oba modele obok siebie i powiedzieć wprost, kiedy starszy wystarczy.",
      ],
      links: [
        { href: "/thermomix/tm7", label: "Wszystko o Thermomix TM7" },
        { href: "/thermomix/tm7-vs-tm6", label: "Porównanie TM7 i TM6" },
      ],
      photo: {
        src: "/zdjecia/thermomix-tm7-varoma.webp",
        alt: "Thermomix TM7 z nałożoną Varomą i odchylonym ekranem dotykowym",
        caption: "TM7 z Varomą — na parze gotuje się piętro wyżej niż obiad.",
      },
      photoSide: "left",
    },
    {
      id: "cena",
      heading: "Ile kosztuje Thermomix TM7?",
      paragraphs: [
        "Cenę ustala Vorwerk i jest identyczna w całym kraju — w Niepołomicach zapłacisz tyle samo, co w Krakowie. Aktualną kwotę masz w sekcji z ofertą powyżej; pobiera się wprost z mojego panelu, więc nie przeczytasz tu ceny sprzed pół roku.",
        "Zmieniają się natomiast promocje i zestawy — co miesiąc wyglądają inaczej. Dlatego nie wpisuję w treść kwoty, która za trzy tygodnie byłaby nieprawdziwa.",
      ],
      links: [{ href: "/oferta", label: "Aktualna cena i promocje" }],
    },
    {
      id: "raty",
      heading: "Thermomix na raty — jak to policzyć",
      paragraphs: [
        "Dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.",
        "Policz to przed spotkaniem, bez nikogo nad głową. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.",
      ],
      links: [{ href: "/finansowanie", label: "Więcej o ratach" }],
    },
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Niepołomic",
      paragraphs: [
        "Gmina Niepołomice to w większości domy — z kuchnią, w której jest miejsce na sprzęt, i z rodzinami, w których gotuje się na kilka osób. Przy takiej skali najbardziej męczy nie samo gotowanie, tylko to, że trzeba przy nim stać.",
        "Thermomix ugotuje i zmiksuje w jednym naczyniu, bez przekładania gorących rzeczy, a Varoma pozwala robić posiłek dla dziecka równolegle z obiadem dla reszty domu. Przy większej rodzinie to jest oszczędność jednego naczynia i jednego pilnowania naraz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Większa porcja to ta sama obsługa co mniejsza — to się liczy przy zmianach.",
      },
    },
    {
      id: "co-ugotujesz",
      heading: "Co możesz ugotować?",
      paragraphs: [
        "Zupy, sosy, dania jednogarnkowe, ciasta, pasty kanapkowe, mleka roślinne, kaszę i ryż, jedzenie dla niemowlaka, przetwory. Cookidoo prowadzi przez przepisy krok po kroku, więc urządzenie bywa dobrym pomysłem także dla kogoś, kto gotować raczej nie lubi.",
        "Osobno: jeśli macie w domu grzyby z lasu albo warzywa z własnej działki, Thermomix jest wygodny przy przetworach — zupy grzybowe, pasty, przeciery robią się bez pilnowania, a większa porcja nie oznacza większej roboty.",
      ],
      links: [
        { href: "/diety", label: "Gotowe jadłospisy i diety — pobierz bezpłatny PDF" },
        { href: "/thermomix/funkcje", label: "Pełna lista funkcji" },
      ],
    },
    {
      id: "tradycyjne-gotowanie",
      heading: "Czy to zastąpi normalne gotowanie?",
      paragraphs: [
        "Nie. Kotlet na patelni nadal zrobisz szybciej po staremu i nie ma sensu twierdzić inaczej. Thermomix zabiera te czynności, które zjadają czas po cichu: siekanie, tarcie, ucieranie, mieszanie sosu, żeby się nie przypalił.",
        "Większość osób nie rezygnuje z garnków. Przestaje tylko odkładać gotowanie na dzień, w którym „będzie czas”.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety Thermomixa — bez lukru" }],
    },
  ],

  districtsHeading: "Gdzie w gminie Niepołomice dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich sołectw. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz w Niepołomicach, w Woli Batorskiej, czy w Podłężu.",
    "Jeśli Twojej miejscowości nie ma na liście, i tak zapytaj. Zwykle da się dopasować termin, a przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia.",
  ],
  districts: [
    "Niepołomice",
    "Podłęże",
    "Staniątki",
    "Zagórze",
    "Ochmanów",
    "Wola Batorska",
    "Wola Zabierzowska",
    "Zakrzów",
    "Zakrzowiec",
    "Słomiróg",
    "Suchoraba",
    "Chobot",
  ],

  nearbyHeading: "Poza gminą też przyjadę",
  nearbyParagraphs: [
    "Niepołomice leżą blisko mojej codziennej trasy, więc okolicę obsługuję przy okazji: Wieliczka, Kraków od strony Nowej Huty i Bieżanowa, dalej Kłaj, Gdów i Bochnia.",
  ],
  nearbyTowns: ["Wieliczka", "Kraków", "Kłaj", "Gdów", "Bochnia", "Brzesko", "Proszowice"],

  about: {
    heading: "Kto poprowadzi Twoją prezentację",
    paragraphs: [
      "Nazywam się Aga Horche i jestem oficjalną przedstawicielką Thermomix® w Małopolsce. Kupujesz u mnie legalnie: z gwarancją producenta, z aktualną promocją i z możliwością zgłoszenia urządzenia do serwisu.",
      "Pracuję pojedynczo, nie przez call center. Ta sama osoba, która przyjedzie do Ciebie do Niepołomic, odbierze telefon pół roku później, gdy nie będzie wychodzić ciasto.",
    ],
    bullets: [
      "oficjalna przedstawicielka Vorwerk — gwarancja producenta i legalny zakup",
      "prezentacje w domach klientów w Niepołomicach, Krakowie i całej Małopolsce",
      "pomoc przy pierwszym uruchomieniu i założeniu konta Cookidoo",
      "stały kontakt telefoniczny po zakupie, także przy zgłoszeniu serwisowym",
      "pełne 7-dniowe jadłospisy z listami zakupów dla moich klientek i klientów",
    ],
    photo: {
      src: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
      alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
      caption: "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce.",
    },
  },

  faq: [
    {
      question: "Czy przyjeżdżasz do Niepołomic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Niepołomic i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    {
      question: "Gdzie kupić Thermomix w Niepołomicach?",
      answer:
        "Wyłącznie u przedstawiciela Vorwerk — Thermomixa nie ma w sklepach RTV/AGD ani w oficjalnej sprzedaży internetowej. Możesz umówić się ze mną: przyjeżdżam z urządzeniem, gotujemy, a o zakupie rozmawiamy dopiero potem.",
    },
    {
      question: "Czy da się umówić prezentację przy pracy zmianowej?",
      answer:
        "Tak. Mam terminy nie tylko wieczorami — również przed południem w dni robocze, co przy zmianach bywa wygodniejsze. Powiedz przy umawianiu, jakie godziny wchodzą w grę.",
    },
    {
      question: "Czy dojeżdżasz do sołectw, nie tylko do miasta?",
      answer:
        "Tak, do całej gminy — Podłęże, Staniątki, Zagórze, Wola Batorska, Wola Zabierzowska i pozostałe. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Ile kosztuje Thermomix TM7?",
      answer:
        "Cenę ustala Vorwerk i jest taka sama w całej Polsce. Aktualną kwotę znajdziesz w sekcji z ofertą na tej stronie — pobiera się wprost z mojego panelu, więc zawsze jest bieżąca.",
    },
    {
      question: "Czy prezentacja jest bezpłatna?",
      answer:
        "Tak. Nie płacisz za dojazd, za składniki ani za mój czas. Po spotkaniu „nie, dziękuję” jest pełnoprawną odpowiedzią.",
    },
    {
      question: "Ile trwa prezentacja?",
      answer:
        "Zwykle około dwóch godzin. Jeśli masz mniej czasu, powiedz od razu — skrócę spotkanie do tego, co dla Ciebie najważniejsze.",
    },
    {
      question: "Czy można kupić Thermomix na raty?",
      answer:
        "Tak, dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Ratę policzysz w kalkulatorze na tej stronie; wynik jest orientacyjny, a ostateczne warunki zależą od aktualnej oferty i decyzji instytucji finansującej.",
    },
    {
      question: "Czy pomagasz po zakupie?",
      answer:
        "Tak — przy pierwszym uruchomieniu, przy koncie Cookidoo i przy zgłoszeniu serwisowym. Numer telefonu zostaje ten sam.",
    },
  ],

  geo: { lat: 50.0356, lng: 20.2189 },
};

const SKAWINA: CityContent = {
  slug: "skawina",
  h1: "Thermomix Skawina – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Skawina — prezentacja i cena",
  seoDescription:
    "Thermomix w Skawinie: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skawina — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skawinie lub okolicy. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Skawiny i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: [
    { label: "Prezentacja", value: "bezpłatna, u Ciebie w domu" },
    { label: "Dojazd", value: "Skawina i cała gmina, bez dopłat" },
    { label: "Termin", value: "też po pracy i w weekend" },
    { label: "Raty", value: "0% — policz ratę w kalkulatorze" },
  ],

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Prezentacja Thermomixa TM7 w domowej kuchni — gotowanie na blacie klientki",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skawinie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam do Ciebie ze wszystkim, co potrzebne: z urządzeniem, z produktami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i nie przygotowujesz nic — wystarczy wolny kawałek blatu i gniazdko.",
        "Potem po prostu gotujemy. Coś na obiad, coś słodkiego i zwykle coś, co akurat masz w lodówce, bo to najlepiej pokazuje, czy urządzenie pasuje do Waszego jedzenia. Powiedz mi wcześniej, ile osób jest w domu i czego nie jecie — dobiorę dania tak, żeby spotkanie miało sens akurat u Was.",
        "Na koniec siadamy do liczb: aktualna cena, dostępna promocja i rata. „Dziękuję, przemyślę” jest pełnoprawną odpowiedzią i nic za spotkanie nie płacisz.",
      ],
      links: [
        { href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Sezon, działka i przetwory",
      paragraphs: [
        "W gminie Skawina duża część domów ma ogród albo kawałek ziemi, a wsie wokół miasta to wciąż w sporej mierze teren rolniczy. To zmienia sposób, w jaki się tu gotuje: latem i jesienią w kuchni ląduje naraz więcej warzyw i owoców, niż da się zjeść na bieżąco.",
        "Przy przetworach Thermomix pokazuje się z najlepszej strony, bo to jest dokładnie ta robota, która polega na pilnowaniu. Przecier, który trzeba mieszać, żeby się nie przypalił, dżem, który musi dojść do odpowiedniej temperatury, zupa krem z tego, co zostało — urządzenie prowadzi to samo, z ustawioną temperaturą i czasem.",
        "To samo dotyczy zwykłego wtorku. Warzywa z ogrodu przestają czekać na weekend, bo obiad z nich nie wymaga już stania nad garnkiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skawinie?",
      paragraphs: [
        "Najprościej telefonem — zadzwoń albo napisz SMS, ustalimy termin w minutę. Jeśli wolisz nie dzwonić, wypełnij formularz na dole tej strony, a ja oddzwonię o wskazanej porze.",
        "Powiedz od razu, w którym rejonie gminy mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać, co ugotujemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    {
      id: "tm7",
      heading: "Thermomix TM7 – co zobaczysz na spotkaniu",
      paragraphs: [
        "TM7 to najnowszy model: duży ekran dotykowy, izolowane naczynie, cichsza praca i większa Varoma do gotowania na parze. Doszło otwarte gotowanie, czyli praca bez pokrywki — przydaje się przy odparowywaniu sosów i przy przetworach.",
        "Pokazuję funkcje, z których faktycznie będziesz korzystać. Jeśli zastanawiasz się nad TM6, mogę pokazać oba modele obok siebie i uczciwie powiedzieć, kiedy starszy wystarczy.",
      ],
      links: [
        { href: "/thermomix/tm7", label: "Wszystko o Thermomix TM7" },
        { href: "/thermomix/tm7-vs-tm6", label: "Porównanie TM7 i TM6" },
      ],
      photo: {
        src: "/zdjecia/thermomix-tm7-varoma.webp",
        alt: "Thermomix TM7 z nałożoną Varomą i odchylonym ekranem dotykowym",
        caption: "TM7 z Varomą — na parze gotuje się piętro wyżej niż obiad.",
      },
      photoSide: "left",
    },
    {
      id: "cena",
      heading: "Ile kosztuje Thermomix TM7?",
      paragraphs: [
        "Cenę ustala Vorwerk i jest identyczna w całej Polsce — w Skawinie zapłacisz tyle samo, co w Krakowie. Aktualna kwota jest w sekcji z ofertą powyżej; pobiera się wprost z mojego panelu, więc zawsze jest bieżąca.",
        "Zmieniają się natomiast promocje i zestawy — co miesiąc wyglądają inaczej. Dlatego nie wpisuję w treść kwoty, która za trzy tygodnie byłaby nieprawdziwa.",
      ],
      links: [{ href: "/oferta", label: "Aktualna cena i promocje" }],
    },
    {
      id: "raty",
      heading: "Thermomix na raty — jak to policzyć",
      paragraphs: [
        "Dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.",
        "Warto policzyć to przed spotkaniem, na spokojnie. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.",
      ],
      links: [{ href: "/finansowanie", label: "Więcej o ratach" }],
    },
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Skawiny",
      paragraphs: [
        "Skawina jest na tyle blisko Krakowa, że wiele osób stąd dojeżdża tam do pracy, i na tyle osobna, że dom zostaje domem — z własną kuchnią, w której gotuje się na kilka osób. Wąskie gardło jest zwykle to samo: powrót po siedemnastej i obiad, który trzeba zrobić od zera.",
        "Thermomix ugotuje i zmiksuje w jednym naczyniu, bez przekładania gorących rzeczy, a Varoma pozwala robić posiłek dla dziecka równolegle z obiadem dla reszty domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Warzywa z ogrodu i obiad, którego nie trzeba pilnować.",
      },
    },
    {
      id: "co-ugotujesz",
      heading: "Co możesz ugotować?",
      paragraphs: [
        "Zupy, sosy, dania jednogarnkowe, ciasta, pasty kanapkowe, mleka roślinne, kaszę i ryż, jedzenie dla niemowlaka, przetwory. Cookidoo prowadzi przez przepisy krok po kroku — dlatego Thermomix bywa dobrym pomysłem także dla kogoś, kto gotować raczej nie lubi.",
        "Moim klientkom i klientom przygotowuję pełne 7-dniowe jadłospisy z listami zakupów. Jeden dzień z każdej diety możesz pobrać bezpłatnie już teraz.",
      ],
      links: [
        { href: "/diety", label: "Gotowe jadłospisy i diety — pobierz bezpłatny PDF" },
        { href: "/thermomix/funkcje", label: "Pełna lista funkcji" },
      ],
    },
    {
      id: "tradycyjne-gotowanie",
      heading: "Czy to zastąpi normalne gotowanie?",
      paragraphs: [
        "Nie i nie udaję, że tak. Naleśniki czy porządnie przysmażone mięso nadal robi się szybciej na patelni. Thermomix zabiera te czynności, które zjadają czas po cichu: siekanie, tarcie, ucieranie, mieszanie, żeby się nie przypaliło.",
        "Większość osób nie wyrzuca garnków. Przestaje tylko odkładać gotowanie na dzień, w którym „będzie czas”.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety Thermomixa — bez lukru" }],
    },
  ],

  districtsHeading: "Gdzie w gminie Skawina dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do wszystkich osiedli w mieście i do sołectw wokół. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz na Starym Mieście, w Korabnikach, czy w Woli Radziszowskiej.",
    "Jeśli Twojej miejscowości nie ma na liście, po prostu zapytaj. Zwykle da się dopasować termin, a przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia.",
  ],
  districts: [
    "Skawina — Stare Miasto",
    "Osiedle Kościuszki",
    "Osiedle Ogrody",
    "Korabniki",
    "Osiedle Bukowskie",
    "Samborek",
    "Rzepnik",
    "Osiedle Radziszowskie",
    "Radziszów",
    "Wola Radziszowska",
    "Rzozów",
    "Krzęcin",
    "Kopanka",
    "Borek Szlachecki",
    "Jaśkowice",
    "Jurczyce",
    "Wielkie Drogi",
    "Polanka Hallera",
    "Zelczyna",
    "Ochodza",
    "Facimiech",
    "Gołuchowice",
    "Pozowice",
    "Grabie",
  ],

  nearbyHeading: "Poza gminą też przyjadę",
  nearbyParagraphs: [
    "Skawina leży na trasie, którą jeżdżę regularnie, więc okolicę obsługuję przy okazji: Kraków od strony Dębnik i Ruczaju, dalej Mogilany, Świątniki Górne, Czernichów i Myślenice.",
  ],
  nearbyTowns: [
    "Kraków",
    "Mogilany",
    "Świątniki Górne",
    "Czernichów",
    "Myślenice",
    "Krzeszowice",
    "Wieliczka",
  ],

  about: {
    heading: "Kto poprowadzi Twoją prezentację",
    paragraphs: [
      "Nazywam się Aga Horche i jestem oficjalną przedstawicielką Thermomix® w Małopolsce. Kupujesz u mnie legalnie: z gwarancją producenta, z aktualną promocją i z możliwością zgłoszenia urządzenia do serwisu.",
      "Pracuję pojedynczo, nie przez call center. Ta sama osoba, która przyjedzie do Ciebie do Skawiny, odbierze telefon pół roku później, gdy nie będzie wychodzić ciasto.",
    ],
    bullets: [
      "oficjalna przedstawicielka Vorwerk — gwarancja producenta i legalny zakup",
      "prezentacje w domach klientów w Skawinie, Krakowie i całej Małopolsce",
      "pomoc przy pierwszym uruchomieniu i założeniu konta Cookidoo",
      "stały kontakt telefoniczny po zakupie, także przy zgłoszeniu serwisowym",
      "pełne 7-dniowe jadłospisy z listami zakupów dla moich klientek i klientów",
    ],
    photo: {
      src: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
      alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
      caption: "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce.",
    },
  },

  faq: [
    {
      question: "Czy przyjeżdżasz do Skawiny bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Skawiny i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    {
      question: "Gdzie kupić Thermomix w Skawinie?",
      answer:
        "Wyłącznie u przedstawiciela Vorwerk — Thermomixa nie ma w sklepach RTV/AGD ani w oficjalnej sprzedaży internetowej. Możesz umówić się ze mną: przyjeżdżam z urządzeniem, gotujemy, a o zakupie rozmawiamy dopiero potem.",
    },
    {
      question: "Czy dojeżdżasz do Radziszowa i innych sołectw?",
      answer:
        "Tak, do całej gminy — Radziszów, Wola Radziszowska, Krzęcin, Kopanka, Wielkie Drogi i pozostałe. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Ile kosztuje Thermomix TM7?",
      answer:
        "Cenę ustala Vorwerk i jest taka sama w całej Polsce. Aktualną kwotę znajdziesz w sekcji z ofertą na tej stronie — pobiera się wprost z mojego panelu, więc zawsze jest bieżąca.",
    },
    {
      question: "Czy prezentacja jest bezpłatna i do czegoś zobowiązuje?",
      answer:
        "Jest bezpłatna i do niczego nie zobowiązuje. Nie płacisz za dojazd, za składniki ani za mój czas.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów?",
      answer:
        "Tak i to jedno z częstszych zastosowań u osób z ogrodem. Przeciery, dżemy i pasty robią się z ustawioną temperaturą i czasem, bez mieszania i pilnowania, żeby nie przywarło.",
    },
    {
      question: "Czy można umówić się po pracy albo w weekend?",
      answer:
        "Tak. Wieczory w tygodniu i sobotnie przedpołudnia to najczęściej wybierane terminy.",
    },
    {
      question: "Czy można kupić Thermomix na raty?",
      answer:
        "Tak, dostępne jest finansowanie ratalne, z ratą 0,6% miesięcznie. Ratę policzysz w kalkulatorze na tej stronie; wynik jest orientacyjny, a ostateczne warunki zależą od aktualnej oferty i decyzji instytucji finansującej.",
    },
    {
      question: "Czy pomagasz po zakupie?",
      answer:
        "Tak — przy pierwszym uruchomieniu, przy koncie Cookidoo i przy zgłoszeniu serwisowym. Numer telefonu zostaje ten sam.",
    },
  ],

  geo: { lat: 49.9757, lng: 19.8281 },
};

/**
 * Kraków i trzy pierwsze satelity są zdefiniowane wyżej w tym pliku, bo
 * powstały, zanim miast zrobiło się kilkanaście. Kolejne mieszkają
 * w `./cities/` — jeden plik na miasto plus `wspolne.ts` na te fragmenty,
 * które z założenia brzmią wszędzie tak samo (cena, raty, blok o mnie).
 * Import jest typu `import type` po stronie plików miast, więc mimo
 * wzajemnego odwołania nie powstaje cykl w czasie działania aplikacji.
 */
const CITY_CONTENT: CityContent[] = [KRAKOW, WIELICZKA, NIEPOLOMICE, SKAWINA, ...MIASTA_DOPISANE];

/** Zwraca ręcznie napisaną treść miasta albo `undefined` (wtedy: szablon generyczny). */
export function getCityContent(slug: string): CityContent | undefined {
  return CITY_CONTENT.find((c) => c.slug === slug);
}

/** Slugi miast z własną treścią — używane m.in. przy decyzji o indeksowaniu. */
export const CITIES_WITH_CONTENT = CITY_CONTENT.map((c) => c.slug);
