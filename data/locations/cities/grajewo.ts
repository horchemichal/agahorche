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
 * GRAJEWO — miasto na styku Mazur, Podlasia i Kurpiowszczyzny,
 * z siedzibą Mlekpolu i dwoma zakładami Pfleiderera. Miasto
 * dwudziestotysięczne z pracodawcami klasy krajowej.
 *
 * KĄT: jedzenie zabierane ze sobą do pracy. Drugie śniadanie, obiad
 * w termosie, kanapki. Temat pomijany na każdym pokazie, bo nie brzmi
 * efektownie, a dotyczy każdego, kto pracuje poza domem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — czego urządzenie NIE robi, i to na początku: nie utrzyma niczego
 *   w cieple, nie jest lodówką ani termosem i nie pojedzie z Wami
 *   do zakładu,
 * — co realnie pomaga: rzeczy robione wieczorem seriami, które dobrze
 *   znoszą przewożenie — pasty kanapkowe, zupy do termosu, pasztety,
 *   sałatki,
 * — dlaczego akurat wieczorem: bo rano nikt tego nie robi,
 * — i granica: nie doradzam nic o tym, jak długo jedzenie wytrzyma
 *   w torbie ani co się jeszcze nadaje do zjedzenia.
 *
 * TWARDE GRANICE — TU BARDZO ISTOTNE:
 * — ŻADNYCH PORAD O PRZECHOWYWANIU, TRANSPORCIE I BEZPIECZEŃSTWIE
 *   ŻYWNOŚCI (zasada ze Skierniewic). Jedzenie wożone w torbie przez
 *   pół dnia to dokładnie ta dziedzina, w której zła rada szkodzi.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań „z domu kontra
 *   ze stołówki".
 * — ŻADNYCH WYLICZEŃ, ile się oszczędza, nie kupując obiadu w pracy
 *   (zasada z Jarocina).
 *
 * ROZGRANICZENIE. Działdowo mówi o śniadaniu jedzonym w domu przed
 * pociągiem o wpół do czwartej, Aleksandrów o gotowaniu przed
 * weekendem, który wypada z kuchni. Tutaj chodzi o JEDZENIE, KTÓRE
 * WYJEŻDŻA Z DOMU RAZEM Z CZŁOWIEKIEM.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE. Research NIE potwierdził
 * ani systemu zmianowego w tutejszych zakładach, ani istnienia
 * stołówek zakładowych, ani liczby zatrudnionych w samym Grajewie
 * (podawane 2 961 i ok. 2 700 dotyczą CAŁEGO Mlekpolu z kilkunastoma
 * zakładami w Polsce, a 1 100 Pfleiderera — trzech zakładów, z których
 * dwa są tutaj). Dlatego w tekście nie ma ani jednej z tych liczb
 * i nie ma słowa „zmiana".
 *
 * ODRZUCONE KĄTY:
 * — Biebrza: park narodowy leży 27 km od miasta i nie ma ŻADNYCH danych
 *   o ruchu turystycznym generowanym w samym Grajewie. Sąsiedztwo
 *   na mapie to za mało,
 * — nabiał, mimo siedziby Mlekpolu — kąt zajęty przez Wieluń.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy około dwudziestu tysięcy siedmiuset mieszkańców
 *   na 19 km²,
 * — Mlekpol ma tu siedzibę, a Pfleiderer dwa zakłady; obaj są
 *   największymi pracodawcami miasta,
 * — przemysł i budownictwo dają w powiecie ok. 27,5% zatrudnienia,
 * — miasto leży na skrzyżowaniu dróg krajowych 61 i 65, na styku
 *   Mazur, Podlasia i Kurpiowszczyzny, w dolinie rzeki Ełk,
 * — pierwsza wzmianka o wsi „Grejwy" w pierwszej połowie XV w.
 *   (podawany jest rok 1426); prawa miejskie w 1540 r. — to dwie różne
 *   daty i tekst ich nie miesza,
 * — kościół Świętej Trójcy zbudowano w 1478 r., a parafię erygowano
 *   rok później; daty konsekracji NIE ZNALAZŁAM i jej nie podaję,
 * — bezrobocie w POWIECIE wynosiło 10,9% w lipcu 2026 r. przy 5,8%
 *   w kraju — w tekście podaję to wyłącznie jako wskaźnik powiatowy,
 * — NIE ZNALAZŁAM produktu z miasta ani powiatu na ministerialnej
 *   Liście Produktów Tradycyjnych.
 */
export const GRAJEWO: CityContent = {
  slug: "grajewo",
  h1: "Thermomix Grajewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Grajewo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Grajewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grajewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grajewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grajewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Grajewo i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Do pracy pojedzie jedzenie, nie urządzenie. Ono zostaje na blacie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grajewie – jak wygląda prezentacja?",
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
      id: "do-pracy",
      heading: "Miasto dużych zakładów — i jedzenie, które wyjeżdża razem z człowiekiem",
      paragraphs: [
        "Grajewo ma dwudziestotysięczne miasto i pracodawców z zupełnie innej półki: siedzibę Mlekpolu i dwa zakłady Pfleiderera, a przemysł z budownictwem dają w powiecie ponad jedną czwartą zatrudnienia. To znaczy, że bardzo wiele osób spędza tu dzień nie w domu, tylko w zakładzie — a jedzenie musi z nimi pojechać.",
        "Napiszę więc o czymś, czego nie ma na żadnym pokazie, bo nie brzmi ładnie: o drugim śniadaniu i o obiedzie w torbie. I zacznę, jak zwykle, od tego, czego to urządzenie nie robi.",
        "Nie utrzyma niczego w cieple. Nie jest ani lodówką, ani termosem, ani podgrzewaczem. I nie pojedzie z Wami do pracy — stoi na blacie w kuchni i tam zostaje. Wszystko, co ma być zjedzone w zakładzie, musi powstać wcześniej i musi samo przetrwać drogę.",
        "Skoro tak, to zostaje pytanie, co się realnie zmienia. Zmienia się wieczór. Bo rano nikt takich rzeczy nie robi — o szóstej się ich nie chce i nie ma na nie czasu. Wieczorem natomiast, przy okazji kolacji, da się zrobić coś jeszcze, jeśli nie trzeba przy tym stać.",
        "Konkretnie sprawdzają się rzeczy, które dobrze znoszą przewożenie i nie wymagają odgrzewania na miejscu. Pasty kanapkowe — z jajek, z ryby, z fasoli, z pieczonych warzyw — bo cała robota polega tam na rozdrobnieniu i wymieszaniu, a to zajmuje minutę. Zupa, która pojedzie w termosie. Pasztet, którego wystarczy na kilka dni kanapek. Sałatka. To jest krótka lista i taką ją podaję, zamiast obiecywać, że urządzenie „przygotuje Wam lunch”.",
        "Praktyczna uwaga, którą słyszę najczęściej: sens ma robienie od razu większej porcji jednej rzeczy, a nie pięciu różnych. Jedna pasta na trzy dni jest mniej efektowna niż pięć rodzajów, ale to ta pierwsza wersja przetrwa w prawdziwym tygodniu.",
        "I granica, przy której nie ustąpię. Nie doradzam, jak długo jedzenie wytrzyma w torbie, w jakiej temperaturze i co się jeszcze nadaje do zjedzenia po ośmiu godzinach. To jest dziedzina, w której zła podpowiedź realnie komuś szkodzi, a ja jestem przedstawicielką handlową, nie technologiem żywności. Od tego są opakowania produktów i ludzie, którzy się na tym znają.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grajewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu ktoś codziennie zabiera jedzenie do pracy, powiedzcie to przy umawianiu — pokażę wtedy właśnie te rzeczy, a nie danie, które ładnie wygląda na pokazie i nigdy nie trafia do żadnej torby.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grajewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla grajewskiej rodziny",
      paragraphs: [
        "Grajewo leży na skrzyżowaniu dwóch dróg krajowych, na styku Mazur, Podlasia i Kurpiowszczyzny. Bezrobocie w powiecie jest wyraźnie wyższe niż średnia krajowa, więc praca, którą się ma, bywa tu pilnowana — a obiad powstaje w oknie między jednym a drugim.",
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

  districtsHeading: "Do których części Grajewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Większość osiedli powstała tu w latach siedemdziesiątych i nazywa się po prostu Centrum, Południe, Północ, Huta, Millennium i Broniewskiego. Przy umawianiu wystarczy podać osiedle albo ulicę.",
  ],
  districts: ["Centrum", "Południe", "Północ", "Huta", "Millennium"],

  nearbyHeading: "Poza Grajewo też przyjadę",
  nearbyParagraphs: [
    "Rajgród, Szczuczyn, Radziłów i Wąsosz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rajgród", "Szczuczyn", "Radziłów", "Wąsosz", "Ełk", "Mońki"],

  about: blokOMnie("do Grajewa", "w Grajewie i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grajewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Grajewie"),
    {
      question: "Przygotuję w tym jedzenie do pracy?",
      answer:
        "Przygotujecie wieczorem, nie rano — i tylko rzeczy, które same przetrwają drogę: pasty kanapkowe, zupę do termosu, pasztet, sałatkę. Urządzenie niczego nie utrzyma w cieple, nie jest lodówką ani termosem i nie pojedzie z Wami do zakładu. Zostaje na blacie w kuchni.",
    },
    {
      question: "Jak długo takie jedzenie wytrzyma w torbie?",
      answer:
        "Nie doradzam tego i nie będę zgadywać. To dziedzina, w której zła podpowiedź komuś realnie szkodzi, a ja jestem przedstawicielką handlową, nie technologiem żywności. Od tego są opakowania produktów i osoby, które się na tym znają.",
    },
  ],

  geo: { lat: 53.6486, lng: 22.4553 },
};
