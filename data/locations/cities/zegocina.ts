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
 * ŻEGOCINA — najbardziej zwarta gmina w tym zestawie i świadome
 * przeciwieństwo Drwini.
 *
 * Drwinia: 13 sołectw na 109 km², 58 osób na kilometrze, płasko, las.
 * Żegocina: 5 sołectw na 35 km², 159 osób na kilometrze, dolina potoku
 * ściśnięta między wzniesieniami. Wszystko blisko siebie, ale w górę.
 * Do tego gmina, która od 2002 roku urosła o kilkanaście procent —
 * co w gminie górskiej nie jest oczywiste.
 *
 * Drugi wątek, którego nie ma nigdzie indziej w powiecie: rok 2010
 * to tutaj nie powódź, tylko OSUWISKA. Ziemia, nie woda. To zupełnie
 * inne doświadczenie niż w Łapanowie i nie wolno tego mieszać.
 *
 * Trzeci: Żegocina jest gminą, z której w 1995 r. wydzielono Trzcianę.
 * To realny, sprawdzalny związek między dwiema stronami w tym zestawie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 5 sołectw: Bełdno, Bytomsko, Łąkta Górna, Rozdziele, Żegocina
 *   (zegocina.pl/solectwa; Raport o stanie Gminy Żegocina za 2021),
 * — Żegocina to największa wieś gminy (ok. 1 838 mieszkańców w 2021),
 *   Bełdno najmniejsza (ok. 296) — Raport o stanie Gminy 2021,
 * — powierzchnia ok. 35 km², gęstość ok. 159 os./km² — najwyższa
 *   spośród gmin pierścienia bocheńskiego (GUS / polskawliczbach.pl),
 * — wzrost liczby ludności o 13,4% w latach 2002–2024
 *   (polskawliczbach.pl, dane GUS),
 * — położenie „na styku Pogórza Wiśnickiego i Beskidu Wyspowego”
 *   (Raport o stanie Gminy 2021),
 * — wieś leży w dolinie potoku Sanka, otoczona wzniesieniami: Kamionna
 *   801 m, Łopusze ok. 568–661 m, Żarnówka ok. 457 m (zegocina.pl),
 * — odległości podawane przez gminę: Bochnia ok. 20 km, Limanowa
 *   ok. 15 km (zegocina.pl/informacje-ogolne),
 * — główna oś komunikacyjna: droga wojewódzka nr 965 łącząca Bochnię
 *   z Limanową (Raport o stanie Gminy 2021),
 * — czerwiec 2010: liczne osuwiska, największe na pograniczu Żegociny
 *   i Rozdziela, kolejne w Rozdzielu, Żegocinie i Łąkcie Górnej;
 *   zniszczone drogi, mosty i kładki; straty w infrastrukturze
 *   oszacowane przez komisję wojewody na ok. 4 mln zł
 *   (archiwum.zegocina.pl),
 * — źródło wody mineralnej typu „Zuber” w lesie koło Żegociny,
 *   dostępne bezpłatnie, dojście pieszo ok. 30 minut z centrum
 *   (Gazeta Krakowska),
 * — kościół par. św. Mikołaja w Żegocinie: murowany, zbudowany 1895,
 *   konsekrowany 1896; zachowany dzwon „Urban” z 1536 r. oraz gotyckie
 *   rzeźby ze starszej świątyni (zegocina.pl; WUOZ Kraków),
 * — kościół św. Jakuba w Rozdzielu: drewniany, gotycki, konstrukcja
 *   zrębowa, przeniesiony z Królówki i zrekonstruowany w połowie lat 80.;
 *   od 2002 r. na Małopolskim Szlaku Architektury Drewnianej
 *   (zegocina.pl; WUOZ),
 * — cmentarze wojenne z I wojny światowej w Żegocinie i Łąkcie Górnej,
 *   wpisane do rejestru zabytków (WUOZ Kraków, czerwiec 2024).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — słowa „uzdrowisko”. Żegocina NIE MA statusu uzdrowiska ani
 *   potwierdzonych starań o niego. Jest darmowe leśne źródło wody
 *   mineralnej i to zupełnie co innego,
 * — wyciągu narciarskiego „w Żegocinie”. Stacja Laskowa-Kamionna leży
 *   w GMINIE LASKOWA (powiat limanowski), ok. 5 km stąd — mimo że
 *   strona gminy wymienia „wyciągi na Kamionnej” wśród swoich atrakcji,
 * — zdania „najwyższy szczyt gminy Żegocina”. Szczyt Kamionnej leży
 *   w gminie Limanowa; masyw rozciąga się na cztery gminy,
 * — zwiedzania dworu w Łąkcie Górnej — od 2007 r. jest w rękach
 *   prywatnych, dostępności NIE POTWIERDZONO,
 * — „najstarszego nagrobka chłopskiego w Polsce”. To twierdzenie
 *   pochodzi wyłącznie ze strony gminy i nie zostało zweryfikowane
 *   niezależnie,
 * — produktu z ministerialnej Listy Produktów Tradycyjnych. „Żegocińska
 *   trzęsionka” i „miód z Żegociny” figurują na PROMOCYJNEJ liście
 *   starostwa bocheńskiego, która nie jest rejestrem ministerialnym,
 * — dokładnej liczby mieszkańców: GUS podaje 5 527 (2024), gmina 5 569
 *   (2021), a strona informacyjna ponad 5 440 (2016).
 *
 * PUŁAPKA: Łąkta GÓRNA należy do gminy Żegocina, a Łąkta DOLNA
 * do gminy Trzciana. Nie mylić.
 */
export const ZEGOCINA: CityContent = {
  slug: "zegocina",
  h1: "Thermomix Żegocina – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Żegocina — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Żegocina: bezpłatna prezentacja TM7 u Ciebie w kuchni — Rozdziele, Bytomsko, Łąkta Górna i Bełdno. Tel. 517 185 691.",
  ogTitle: "Thermomix Żegocina — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Żegocina. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Żegocina przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich pięciu sołectw.",

  highlights: highlightyStandardowe("cała gmina Żegocina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żegocinie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Żegocinie, jak w Rozdzielu wysoko nad doliną.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Pięć wsi w jednej dolinie — najgęstsza gmina w okolicy",
      paragraphs: [
        "Żegocina jest mała i ciasna, i to jest jej największa zaleta. Trzydzieści pięć kilometrów kwadratowych, pięć sołectw, wszystko w dolinie potoku Sanka i na stokach dookoła. Mieszka tu blisko sto sześćdziesiąt osób na kilometrze kwadratowym — prawie trzy razy więcej niż w sąsiedniej Drwini. Ludzie mieszkają blisko siebie i to naprawdę zmienia sposób, w jaki się tutaj pracuje.",
        "Praktycznie znaczy to tyle, że prezentacja w tej gminie rzadko bywa spotkaniem we dwie osoby. Częściej to kuchnia, w której siedzą trzy albo cztery kobiety z jednej wsi, a jedna z nich zaprosiła resztę. Nie mam z tym żadnego problemu, wręcz przeciwnie — wtedy pytania są konkretniejsze, bo ktoś zawsze zada to, którego reszta się nie odważy.",
        "Gmina rośnie i to jest w górach nietypowe: od 2002 roku przybyło tu ponad trzynaście procent mieszkańców. Buduje się na stokach, wraca się z miasta, zostaje po studiach. Dojazd do pracy odbywa się jedną drogą wojewódzką, która łączy Bochnię z Limanową — do Bochni jest stąd około dwudziestu kilometrów, do Limanowej piętnaście.",
        "Warto powiedzieć o czymś, co w tej gminie zostawiło ślad, a co bywa mylone z powodzią. Rok 2010 to tutaj przede wszystkim osuwiska — największe na pograniczu Żegociny i Rozdziela, kolejne w Łąkcie Górnej. Ziemia, nie woda; drogi, mosty i kładki, nie zalane parterowe kuchnie. To zupełnie inne doświadczenie niż w Łapanowie i część dróg dojazdowych do dziś biegnie inaczej niż na starszych mapach.",
        "Poza tym: w lesie nad Żegociną jest źródło wody mineralnej typu Zuber, do którego idzie się pieszo jakieś pół godziny i z którego można nabrać za darmo. Wspominam o tym, bo to jedna z niewielu rzeczy, o które ludzie z zewnątrz pytają, a nie jest ani uzdrowiskiem, ani atrakcją biletowaną — po prostu źródło w lesie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Żegocina?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Przy pięciu wsiach nazwa sołectwa wystarcza mi w zupełności, ale liczba osób jest ważna, bo od niej zależy, ile składników wezmę i co ugotujemy.",
        "Rozdziele i wyższe partie Bytomska mają strome podjazdy, które zimą bywają wymagające. Jeśli droga pod dom jest trudna, powiedz o tym przy umawianiu — pojadę spokojniej i zarezerwuję więcej czasu, ale przyjadę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Żegocina"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny w domu na stoku",
      paragraphs: [
        "W gminie, gdzie buduje się na stokach i mieszka wielopokoleniowo, kuchnia jest zwykle najbardziej używanym pomieszczeniem w domu. Gotuje się w niej codziennie, dla różnej liczby osób i o różnych porach, bo jedni wracają z Bochni, drudzy z Limanowej, a dzieci ze szkoły najwcześniej.",
        "Najbardziej praktyczne bywa to, że zupa albo danie jednogarnkowe może się gotować bez pilnowania i po prostu poczekać, aż wszyscy będą w domu. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać.",
        "W domach, w których mieszkają trzy pokolenia, przydaje się jeszcze gotowanie na parze piętro wyżej: obiad dla dorosłych na dole, delikatniejsza porcja dla dziecka albo dla babci w Varomie, wszystko naraz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Żegocina dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu sołectw i bez żadnej dopłaty za odległość — do Żegociny, Rozdziela, Bytomska, Łąkty Górnej i Bełdna.",
    "To najkrótsza lista w całej mojej okolicy i najprostsza logistycznie: gmina ma trzydzieści pięć kilometrów kwadratowych, więc od jednego końca do drugiego jedzie się kilkanaście minut. Różnica jest w wysokości, nie w odległości — Rozdziele leży wyraźnie wyżej niż dolina i tam dojazd zajmuje najwięcej czasu.",
    "W Żegocinie stoi murowany kościół świętego Mikołaja z końca XIX wieku, w którym zachował się dzwon odlany jeszcze w 1536 roku. W Rozdzielu jest drewniany kościół świętego Jakuba — przeniesiony tu z Królówki i odbudowany, dziś na Małopolskim Szlaku Architektury Drewnianej. Oba są najlepszymi punktami orientacyjnymi w gminie.",
    "Uprzedzam o dwóch rzeczach, bo bywają mylące. Wyciągu narciarskiego w gminie Żegocina nie ma — stacja jest po drugiej stronie, w gminie Laskowa, kilka kilometrów stąd. I podobnie ze szczytem Kamionnej: góra jest widoczna z całej doliny, ale sam wierzchołek z wieżą widokową leży już w gminie Limanowa.",
  ],
  districts: ["Żegocina", "Rozdziele", "Bytomsko", "Łąkta Górna", "Bełdno"],

  nearbyHeading: "Cała droga z Bochni na Limanową jest na mojej trasie",
  nearbyParagraphs: [
    "Żegocina leży w połowie drogi między Bochnią a Limanową i obie strony tej trasy obsługuję. Do Trzciany, Łapanowa, Nowego Wiśnicza i Lipnicy Murowanej mam stąd kilkanaście kilometrów, więc granica gminy nie zmienia niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Trzciana",
    "Łapanów",
    "Lipnica Murowana",
    "Nowy Wiśnicz",
    "Limanowa",
    "Brzesko",
    "Kraków",
  ],

  about: blokOMnie("do Żegociny", "w gminach wokół Bochni"),

  faq: [
    {
      question: "Czy dojeżdżasz do Rozdziela i wyżej położonych domów?",
      answer:
        "Tak, do wszystkich pięciu sołectw i do domów przy stromych podjazdach też. Dojazd jest bezpłatny; proszę tylko o uprzedzenie zimą, jeśli droga pod dom bywa trudna, żebym zarezerwowała więcej czasu.",
    },
    ...faqWspolne("w gminie Żegocina"),
    {
      question: "Czy możemy zaprosić kilka sąsiadek naraz?",
      answer:
        "Jak najbardziej i w tej gminie tak wygląda większość spotkań. Wystarczy, że przy umawianiu podasz liczbę osób — dobiorę przepisy i wezmę więcej składników. Przy większej grupie warto też wybrać kuchnię, w której jest gdzie usiąść.",
    },
    {
      question: "Ile trwa dojazd z Bochni do Żegociny?",
      answer:
        "To około dwudziestu kilometrów drogą wojewódzką w stronę Limanowej. Dla mnie to trasa, którą i tak jeżdżę — dlatego dojazd jest bezpłatny i nie ma żadnego minimum zamówienia.",
    },
    {
      question: "Gotujemy dla trzech pokoleń pod jednym dachem. Czy to urządzenie tu pasuje?",
      answer:
        "Zwykle tak, bo najbardziej ułatwia sprawę tam, gdzie trzeba przygotować kilka rzeczy naraz i o różnych porach. Na prezentacji pokażę gotowanie na dwóch poziomach — obiad w naczyniu i delikatniejsza porcja w Varomie nad nim, w jednym cyklu.",
    },
  ],

  geo: { lat: 49.8133, lng: 20.4197 },
};
