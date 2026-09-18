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
 * MAKÓW MAZOWIECKI — powiat makowski, woj. mazowieckie.
 * MIASTO 8 890 (GUS 31.12.2024), 10,3 km², 864,8 os./km².
 * Siedziba powiatu makowskiego. Leży nad Orzycem.
 *
 * ⚠⚠ HOMONIM — NAJWAŻNIEJSZA PUŁAPKA TEJ STRONY:
 *   MAKÓW MAZOWIECKI ≠ MAKÓW PODHALAŃSKI (pow. suski,
 *   woj. małopolskie) — MAMY JUŻ STRONĘ makow-podhalanski.ts.
 *   Jest jeszcze Maków w powiecie skierniewickim.
 *   ⚠ SLUG MUSI BYĆ „makow-mazowiecki", NIGDY „makow".
 *   FAQ TO ROZRÓŻNIA — OBOWIĄZKOWO.
 *
 * ⚠ NAZWA MIASTA NIE MA NIC WSPÓLNEGO Z MAKIEM JAKO ROŚLINĄ
 *   w sposób, który mógłbym potwierdzić. NIE ROBIĘ Z TEGO KĄTA,
 *   NIE ŻARTUJĘ Z MAKU, NIE PISZĘ O MAKOWCU.
 *   ⚠ KĄT „mak" JEST ZAJĘTY (lubartow.ts). TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — przywilej z 1421 r. zwalniał makowskich mieszczan
 *   z opłat celnych na Mazowszu,
 * — w XVI w. przez miasto szedł handel tranzytowy: na zachód
 *   futra, skóry i wosk, na wschód tkaniny, klejnoty i wina.
 *   ⚠ WOSK podaję WYŁĄCZNIE jako towar handlowy —
 *   kąt „WOSK W KUCHNI" jest ZAJĘTY (pultusk.ts).
 *   NIE ROZWIJAM TEGO WĄTKU ANI ZDANIEM. TWARDA GRANICA.
 *
 * ⚠ NIE POTWIERDZONO, czy jakikolwiek produkt z gminy Maków
 *   Mazowiecki figuruje na Liście Produktów Tradycyjnych —
 *   NIE WYMIENIAM ŻADNEGO.
 * ⚠ NAZW OSIEDLI NIE USTALONO — districts PUSTE.
 *
 * KĄT: WYMIANA Z SĄSIADEM — co się oddaje i co wraca.
 * Kąt od tranzytowego charakteru miasta: towar szedł tędy
 * w obie strony, a Maków żył z tego, że coś przez niego
 * przechodziło. W kuchni odpowiednikiem jest jedzenie, które
 * krąży między domami — talerz do sąsiadki, słoik do rodziców,
 * garnek na imprezę u kogoś innego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w mniejszym mieście jedzenie krąży między domami
 *   i to jest zupełnie normalny obieg, a nie uprzejmość
 *   od święta,
 * — ŻE NIE KAŻDE DANIE ZNOSI PODRÓŻ — i to jest cała
 *   praktyczna treść tej strony,
 * — CO ZNOSI: rzeczy gęste i zwarte — pasty, smalce roślinne,
 *   musy, zupy kremy, ciasta ucierane, wszystko, co można
 *   zamknąć i postawić,
 * — CZEGO NIE ODDAWAĆ: rzeczy chrupiących i panierowanych
 *   (zmiękną w drodze), sałatek już wymieszanych z sosem,
 *   klusek i makaronu w sosie (skleją się), dań, które muszą
 *   trafić na stół dokładnie w swojej minucie,
 * — ŻE SOS I RESZTA DANIA JADĄ OSOBNO, jeśli to możliwe —
 *   to jedyna rzecz, która ratuje większość potraw,
 * — ŻE ODDAJE SIĘ W NACZYNIU, KTÓRE NIE MUSI WRÓCIĆ —
 *   bo inaczej prezent robi się zobowiązaniem po obu
 *   stronach,
 * — ŻE WARTO NAPISAĆ NA WIECZKU, CO TO JEST I Z CZEGO —
 *   nie z pedanterii, tylko dlatego, że u odbiorcy może być
 *   ktoś, kto czegoś nie je,
 * — ŻE ODDAJE SIĘ PORCJĘ, NIE CAŁOŚĆ — całość stawia
 *   drugą stronę w kłopocie,
 * — CO WRACA: puste naczynie prawie nigdy nie wraca puste,
 *   i to jest właśnie ten obieg,
 * — UCZCIWIE O SPRZĘCIE: tu przewaga jest jedna, za to
 *   konkretna — podwójna porcja kosztuje dokładnie tyle samo
 *   uwagi co pojedyncza, bo urządzenie i tak pracuje samo.
 *   Dołożenie porcji „dla kogoś" przestaje być osobną robotą,
 * — ⚠ ALE TEŻ: pojemność naczynia jest skończona i nie każde
 *   danie da się podwoić — MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI: ile godzin
 *   jedzenie może stać, w jakiej temperaturze wozić, co wolno
 *   odgrzewać. TO JEST DZIEDZINA SANEPIDU, NIE MOJA.
 *   Mówię wyłącznie o SMAKU I KONSYSTENCJI po drodze.
 *   TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD PRZY ALERGIACH I DIETACH LEKARSKICH —
 *   napisanie na wieczku składu to uprzejmość wobec odbiorcy,
 *   NIE porada dla alergika.
 * — ŻADNYCH NAZW FIRM ANI POJEMNIKÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ZERO TEMATU ALKOHOLU — wina z XVI w. to towar handlowy
 *   wymieniony raz, w bloku o mieście.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO sugestii, że ktoś komuś coś jest winien.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „WYPOŻYCZENIE" (Śrem) dotyczy POŻYCZANIA URZĄDZENIA.
 *   TUTAJ chodzi o JEDZENIE krążące między domami.
 * — „RESZTKI Z OBIADU" (Marki) dotyczą TEGO, CO ZOSTAJE
 *   WE WŁASNYM DOMU.
 * — „GOTOWANIE NA WIĘKSZĄ GRUPĘ" i strony o przyjęciach
 *   dotyczą JEDNEGO STOŁU U SIEBIE.
 * — „TARG" (Tuszyn) dotyczy KUPOWANIA.
 * — „PUSTE MIEJSCE PRZY STOLE" (Gogolin) dotyczy WYJAZDÓW.
 * TUTAJ chodzi o DROGĘ, którą jedzenie pokonuje między
 * dwoma domami, i o to, co tej drogi nie przeżywa.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MYLĘ Makowa Mazowieckiego z Makowem Podhalańskim.
 * — NIE WIĄŻĘ nazwy miasta z makiem.
 * — NIE ROZWIJAM wątku wosku.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE DORADZAM nic w sprawie przechowywania i przewożenia
 *   jedzenia od strony bezpieczeństwa.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Maków Mazowiecki liczy 8 890 mieszkańców (GUS,
 *   31.12.2024) na 10,3 km², co daje 864,8 osoby
 *   na kilometr kwadratowy; miasto leży nad Orzycem
 *   i jest siedzibą powiatu makowskiego,
 * — przywilej z 1421 roku zwalniał makowskich mieszczan
 *   z opłat celnych na Mazowszu,
 * — w XVI wieku szedł tędy handel tranzytowy: na zachód
 *   futra, skóry i wosk, na wschód tkaniny, klejnoty i wina.
 */
export const MAKOW_MAZOWIECKI: CityContent = {
  slug: "makow-mazowiecki",
  h1: "Thermomix Maków Mazowiecki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Maków Mazowiecki — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Makowie Mazowieckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Maków Mazowiecki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Makowie Mazowieckim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Makowa Mazowieckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Maków Mazowiecki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie każde danie znosi drogę do sąsiadki — sos zawsze jedzie osobno.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Makowie Mazowieckim – jak wygląda prezentacja?",
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
      id: "wymiana",
      heading: "Co się oddaje sąsiadce, a co wraca",
      paragraphs: [
        "Maków przez wieki żył z tego, że coś przez niego przechodziło. Przywilej z 1421 roku zwalniał tutejszych mieszczan z opłat celnych na Mazowszu, a w XVI wieku szedł tędy handel tranzytowy — na zachód futra i skóry, na wschód tkaniny i wina. Miasto nie było celem, tylko drogą.",
        "W kuchni jest dokładnie taki sam obieg i w mniejszym mieście widać go najlepiej. Talerz idzie do sąsiadki, słoik do rodziców, garnek jedzie na imprezę do kogoś innego. To nie jest uprzejmość od święta, tylko normalny ruch — i jak każdy ruch, ma swoje reguły.",
        "Pierwsza i najważniejsza: nie każde danie znosi drogę. To jest właściwie cała treść tej strony, a prawie nikt się nad tym nie zastanawia przed wyjściem z domu.",
        "Drogę znoszą rzeczy gęste i zwarte. Pasty, pasztety warzywne, musy, zupy krem, ciasta ucierane, wszystko, co można zamknąć, postawić i nie myśleć o tym przez pół godziny. Im mniej w daniu wolnego płynu, tym mniej może się zepsuć po drodze.",
        "Drogi nie znoszą rzeczy chrupiące i panierowane — zmiękną, i to nie od czasu, tylko od własnej pary pod przykryciem. Nie znoszą jej sałatki już wymieszane z sosem, bo dojadą mokre. Nie znoszą kluski i makaron w sosie, bo skleją się w jedno. I nie znoszą jej dania, które muszą trafić na stół dokładnie w swojej minucie — takie po prostu je się u siebie.",
        "Jeśli już coś takiego oddajecie, ratuje jedna rzecz: sos jedzie osobno. To pozwala oddać praktycznie wszystko, bo cała szkoda w drodze bierze się ze spotkania mokrego z suchym.",
        "Druga reguła jest towarzyska, nie kuchenna. Oddaje się w naczyniu, które nie musi wrócić. Piękny półmisek zamienia prezent w zobowiązanie — druga strona musi go odwieźć, a wcześniej umyć i znaleźć okazję. Zwykły słoik albo pojemnik bez historii załatwia sprawę i nikogo nie obciąża.",
        "Trzecia: warto napisać na wieczku, co to jest i z czego. Nie z pedanterii — po prostu u odbiorcy może być ktoś, kto czegoś nie je, i lepiej, żeby wiedział, zanim otworzy, niż po pierwszym kęsie.",
        "Czwarta: oddaje się porcję, nie całość. Całość stawia drugą stronę w kłopocie, bo zobowiązuje do zjedzenia, do pochwał i do rewanżu w tej samej skali. Jedna porcja jest prezentem, cały garnek bywa zadaniem.",
        "A co wraca? Puste naczynie prawie nigdy nie wraca puste. To właśnie jest ten obieg — i szczerze mówiąc, w mniejszych miastach trzyma się on lepiej niż niejedna tradycja, o której się mówi więcej.",
        "Teraz uczciwie o sprzęcie, bo przewaga jest tu jedna, za to konkretna. Podwójna porcja kosztuje dokładnie tyle samo uwagi co pojedyncza. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc nie stoję nad nim ani minuty dłużej dlatego, że zrobiłam więcej. Dołożenie porcji „dla kogoś” przestaje być osobną robotą i zaczyna być decyzją podjętą na starcie.",
        "I od razu granica: naczynie ma skończoną pojemność i nie każde danie da się po prostu podwoić. Są potrawy, przy których trzeba zrobić dwie tury — wtedy nic się nie oszczędza poza myciem. Warto o tym wiedzieć wcześniej, a nie w połowie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Makowie Mazowieckim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w planach jakieś rodzinne spotkanie, na które trzeba coś przywieźć — powiedzcie przy umawianiu. Zrobimy podczas prezentacji właśnie coś takiego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Makowie Mazowieckim"),
    sekcjaRaty("w Makowie Mazowieckim"),
    {
      id: "rodzina",
      heading: "Thermomix dla makowskiej rodziny",
      paragraphs: [
        "Maków Mazowiecki liczy blisko dziewięć tysięcy mieszkańców na dziesięciu kilometrach kwadratowych, co daje jedną z wyższych gęstości zaludnienia wśród małych miast Mazowsza — blisko osiemset sześćdziesiąt pięć osób na kilometr kwadratowy. Miasto leży nad Orzycem i jest siedzibą powiatu makowskiego. Przywilej z 1421 roku zwalniał makowskich mieszczan z opłat celnych na Mazowszu, a w XVI wieku szedł tędy handel tranzytowy: na zachód futra, skóry i wosk, na wschód tkaniny, klejnoty i wina.",
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

  districtsHeading: "Do których części Makowa Mazowieckiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic rynku po osiedla przy wylotach dróg i domy nad Orzycem. Dojeżdżam też do wsi w okolicy.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Maków Mazowiecki też przyjadę",
  nearbyParagraphs: [
    "Różan, Krasnosielc, Płoniawy-Bramura, Przasnysz, Ostrołęka i Pułtusk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Przasnysz", "Ostrołęka", "Pułtusk", "Ciechanów"],

  about: blokOMnie("do Makowa Mazowieckiego", "w Makowie Mazowieckim", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Makowa Mazowieckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Maków Mazowiecki nad Orzycem, siedzibę powiatu makowskiego, a nie o Maków Podhalański w Małopolsce — tam mam osobną stronę.",
    },
    ...faqWspolne("w Makowie Mazowieckim"),
    {
      question: "Jakie dania najlepiej znoszą przewiezienie do kogoś?",
      answer:
        "Rzeczy gęste i zwarte: pasty, pasztety warzywne, musy, zupy krem i ciasta ucierane. Im mniej w daniu wolnego płynu, tym mniej może się po drodze zmienić. Najgorzej znoszą drogę rzeczy panierowane i chrupiące oraz sałatki już wymieszane z sosem — jeśli to możliwe, sos zawsze wozi się osobno.",
    },
    {
      question: "Czy da się ugotować podwójną porcję, żeby oddać część rodzinie?",
      answer:
        "Często tak i to jest realna przewaga — podwójna porcja kosztuje tyle samo uwagi co pojedyncza, bo urządzenie pracuje samo. Ale uczciwie: naczynie ma skończoną pojemność i nie każde danie da się po prostu podwoić. Przy niektórych potrawach trzeba zrobić dwie tury i wtedy oszczędza się tylko na myciu.",
    },
  ],

  geo: { lat: 52.8628, lng: 21.1006 },
};
