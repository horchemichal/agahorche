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
 * MODLIBORZYCE — miasto w powiecie janowskim, 1 408 mieszkańców
 * (31.12.2024, GUS). Przywilej Zygmunta III Wazy z 27 lutego 1631 r.,
 * właściwy akt lokacyjny 1 maja 1642 r. (Stanisław Wioteski, stolnik
 * bełski), na gruntach wsi Słupie. Prawa miejskie utracone w 1869 r.,
 * ODZYSKANE 1 STYCZNIA 2014 r. — po 145 latach jako wieś.
 *
 * KĄT: mielenie mięsa w domu — czyli kiedy warto, a kiedy nie.
 * To jest TRZECIA POZYCJA w rodzinie kątów „robić samemu czy kupić":
 * Ryki mówią NIE (ser), Bychawa mówi TAK (masło), Modliborzyce mówią
 * „zależy — i po czym to poznać". Gmina rolnicza o gospodarstwach
 * średnio 2,78 ha jest właściwym miejscem na taki tekst.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że powodem mielenia w domu NIE jest oszczędność ani „zdrowie",
 *   tylko KONSYSTENCJA: sami wybieracie kawałek, proporcję tłuszczu
 *   i grubość zmielenia,
 * — że przy porcji na obiad urządzenie robi to dobrze, a przy
 *   kilku kilogramach naraz maszynka albo rzeźnik są lepsi,
 *   bo tu miele się partiami,
 * — i twarda odmowa: nic o surowym mięsie, jego przechowywaniu,
 *   temperaturach i bezpieczeństwie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O SUROWYM MIĘSIE: przechowywanie, rozmrażanie,
 *   temperatury, czas, czystość. To dziedzina bezpieczeństwa
 *   żywności. Ta sama rodzina odmów co podroby w Piaskach,
 *   przetwory w Hrubieszowie, mleko surowe w Wieluniu i wędzenie
 *   w Zambrowie.
 * — ŻADNYCH PORAD, JAKIE MIĘSO KUPIĆ ani od kogo. To pytanie
 *   do rzeźnika.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o tłuszczu, ani o mięsie
 *   mielonym ze sklepu.
 * — ŻADNEJ KRYTYKI gotowego mięsa mielonego ani producentów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czego NIE warto robić w domu"
 * (Ryki) i „masło — odwrotność Ryk" (Bychawa) to dwa krańce; tu jest
 * środek i tekst mówi o tym wprost. „Mąka i mielenie" (miasto
 * z młynem) dotyczy ZIARNA, nie mięsa. „Wędzenie i peklowanie"
 * to zupełnie inna obróbka. „Flaki" (Piaski) dotyczą podrobów
 * i długiego gotowania.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — ZAGŁADA społeczności żydowskiej Modliborzyc (ok. 2400 osób,
 *   w tym 1200 przesiedlonych z Wiednia, deportacja do Bełżca
 *   w październiku–listopadzie 1942 r.). Fakt sprawdzony, miasto
 *   upamiętnia go oficjalnie. NIE UŻYWAM GO na stronie o sprzęcie
 *   AGD. Wspominam natomiast neutralnie sam BUDYNEK dawnej
 *   synagogi, bo to dziś działający dom kultury i element
 *   codziennego życia miasta — bez robienia z historii ozdobnika.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZW ZAKŁADÓW PRACY. Portret statystyczny gminy
 *   (GUS) wymienia zakład przetwórstwa mięsnego i zakład pakowania
 *   owoców, ale dane pochodzą sprzed ok. 2019–2020 r. i ich
 *   aktualności na 2026 r. NIE UDAŁO SIĘ POTWIERDZIĆ. Anchor
 *   dla tej strony jest inny i pewny: struktura rolna gminy,
 * — NIE PISZĘ O „ŚWIĘCIE JAGÓD" jako o tradycji ani nie tłumaczę
 *   jego nazwy. Festyn istnieje (edycja 2025: 13 lipca), ale
 *   genezy ani związku z runem leśnym nie udało się potwierdzić —
 *   a zgadywanie etymologii to dokładnie ten błąd, którego
 *   w tym serwisie pilnuję,
 * — NIE PODAJĘ PRAWA LOKACYJNEGO (magdeburskie czy inne). Żadne
 *   źródło nie mówi tego wprost,
 * — NIE PISZĘ o hotelu w Wierzchowiskach ani o żadnej innej firmie
 *   z nazwy. Nie reklamuję cudzych działalności,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Modliborzyc i powiatu janowskiego nie znaleziono wpisu —
 *   traktuję to jako brak potwierdzenia, nie jako pewność,
 * — NIE PODAJĘ nazwiska burmistrza ani żadnej osoby publicznej.
 *   Nie moja rola,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie odzyskane 1 stycznia 2014 r., po 145 latach
 *   jako wieś; utrata w 1869 r.,
 * — miasto zostało miastem przy ok. 1435 mieszkańcach, czyli
 *   poniżej zwyczajowego progu dwóch tysięcy,
 * — przywilej 1631 r., akt lokacyjny 1642 r., na gruntach wsi Słupie,
 * — gospodarstwa rolne w gminie mają średnio 2,78 ha,
 * — dawna synagoga (ok. 1760 r., odbudowana w latach 1957–1965)
 *   mieści dziś Gminny Ośrodek Kultury,
 * — kościół parafialny z lat 1644–1664 i dzwonnica z 1775 r. stoją
 *   i są użytkowane,
 * — na terenie gminy leży Park Krajobrazowy „Lasy Janowskie"
 *   z rezerwatem „Imielty Ług",
 * — 1 408 mieszkańców (31.12.2024).
 */
export const MODLIBORZYCE: CityContent = {
  slug: "modliborzyce",
  h1: "Thermomix Modliborzyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Modliborzyce — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Modliborzycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Modliborzyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Modliborzycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Modliborzyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Modliborzyce i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czasem warto zmielić samemu. Czasem naprawdę nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Modliborzycach – jak wygląda prezentacja?",
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
      id: "mielenie",
      heading: "Gmina drobnych gospodarstw — czyli o mieleniu mięsa w domu",
      paragraphs: [
        "Modliborzyce były wsią przez sto czterdzieści pięć lat. Prawa miejskie straciły w 1869 roku, odzyskały pierwszego stycznia 2014 — i mieszkańcy mówią o tym „odzyskanie”, nie „nadanie”. Gospodarstwa w gminie mają średnio niecałe trzy hektary. To jest okolica, w której słowo „domowe” nie jest hasłem reklamowym, tylko opisem tego, skąd się wzięło jedzenie.",
        "Dlatego napiszę tutaj o mieleniu mięsa — i o tym, że nie zawsze warto. W tym serwisie mam już dwie strony na ten sam temat z przeciwnych stron: przy jednym mieście napisałam wprost, że sera w domu robić nie warto, przy innym — że masła jak najbardziej. Mięso jest trzecim przypadkiem: czasem tak, czasem nie, i da się powiedzieć, po czym to poznać.",
        "Zacznę od tego, co NIE jest powodem. Nie chodzi o oszczędność — gotowe mielone bywa tańsze niż kawałek, z którego byście je zrobili. Nie chodzi też o zdrowie i nie usłyszycie ode mnie ani słowa na ten temat, bo to nie jest pytanie do przedstawicielki handlowej.",
        "Powód jest jeden i całkiem konkretny: konsystencja. Sami wybieracie kawałek, sami decydujecie, ile w tym ma być tłuszczu, i sami ustalacie, czy ma być zmielone grubo czy drobno. Kotlet mielony, pulpety w sosie i farsz do gołąbków chcą trzech różnych rzeczy, a w sklepie jest jedna. Kto to raz porównał, ten wie, o czym mówię.",
        "Kiedy urządzenie się do tego nadaje: przy porcji na obiad albo na dwa. Miele w tym samym naczyniu, w którym potem powstanie sos, więc odpada przekładanie i mycie maszynki — a mycie maszynki do mięsa jest tą częścią, przez którą większość ludzi w ogóle z tego rezygnuje.",
        "Kiedy się NIE nadaje, i mówię to bez zawijania: przy kilku kilogramach naraz. Tu miele się partiami, więc przy dużej ilości stracicie więcej czasu, niż zyskacie. Jeśli robicie zapas na pół roku albo mielicie po świniobiciu, maszynka albo rzeźnik są po prostu lepsi i nie zamierzam udawać inaczej.",
        "I granica, przy której nie ustąpię: nie doradzam nic o surowym mięsie. Ani jak je przechowywać, ani jak długo, ani w jakiej temperaturze, ani co jest bezpieczne. To jest dziedzina bezpieczeństwa żywności, nie moja, a w tej okolicy jest wielu ludzi, którzy wiedzą o tym znacznie więcej ode mnie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Modliborzycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć akurat mielenie — powiedzcie przy umawianiu, do czego. Do kotletów, do pulpetów i do farszu robi się to inaczej i najlepiej pokazać tę różnicę na żywo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Modliborzycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla modliborzyckiej rodziny",
      paragraphs: [
        "Modliborzyce liczą nieco ponad tysiąc czterysta mieszkańców — miastem zostały ponownie przy liczbie niższej niż zwyczajowy próg dwóch tysięcy. Dawna synagoga z osiemnastego wieku mieści dziś gminny dom kultury, a kościół z lat 1644–1664 i dzwonnica z 1775 roku stoją i są używane. Na terenie gminy leży Park Krajobrazowy „Lasy Janowskie”.",
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

  districtsHeading: "Do których części Modliborzyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Modliborzyce też przyjadę",
  nearbyParagraphs: [
    "Janów Lubelski, Kraśnik, Frampol, Urzędów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Janów Lubelski", "Kraśnik", "Frampol", "Urzędów", "Annopol", "Biłgoraj"],

  about: blokOMnie("do Modliborzyc", "w Modliborzycach i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Modliborzyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Modliborzycach"),
    {
      question: "Czy warto mielić mięso samemu w tym urządzeniu?",
      answer:
        "Przy porcji na obiad — tak, i to nie dla oszczędności, tylko dla konsystencji: sami wybieracie kawałek, proporcję tłuszczu i grubość zmielenia, a kotlet, pulpety i farsz chcą trzech różnych rzeczy. Do tego mielicie w tym samym naczyniu, w którym potem powstanie sos, więc nie ma maszynki do mycia. Przy kilku kilogramach naraz — nie. Tu miele się partiami i maszynka albo rzeźnik wypadną lepiej.",
    },
    {
      question: "Jak przechowywać mięso przed zmieleniem?",
      answer:
        "Tego nie doradzę i wolę powiedzieć wprost dlaczego. Przechowywanie surowego mięsa, temperatury i czasy to dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową. Po tę wiedzę idźcie do rzeźnika albo do rzetelnego źródła — w tej okolicy nie brakuje ludzi, którzy wiedzą o tym więcej ode mnie.",
    },
  ],

  geo: { lat: 50.7539, lng: 22.3253 },
};
