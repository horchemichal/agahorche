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
 * OLESNO — GMINA WIEJSKA w powiecie dąbrowskim.
 * 7 627 mieszkańców (31.12.2024, GUS) — ⚠️ strona gminy podaje 7 931,
 * rozbieżność. 77,6 km², 99 os./km², mediana wieku 40,7.
 * SPADEK LUDNOŚCI TYLKO 0,9% od 2002 — najstabilniejsza w powiecie.
 * REGON: 521 podmiotów.
 *
 * OŚ STRONY: ZALIPIE — WIEŚ, KTÓRĄ SIĘ MALUJE OD 1948 ROKU.
 * ⚠️ NIE KOLIDUJE z Bobową (koronka klockowa) — inne rzemiosło,
 * inny powiat, inny mechanizm: tam wpis na listę dziedzictwa,
 * tu najdłużej trwający konkurs sztuki ludowej w Polsce.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐⭐ ZALIPIE LEŻY W GMINIE OLESNO — POTWIERDZONE.
 *   Sołectwo o powierzchni 805 HA, 736 MIESZKAŃCÓW, pierwsza
 *   wzmianka 1674 R. (gminaolesno.pl),
 * — ⭐ KONKURS „MALOWANA CHATA” — ORGANIZOWANY OD 1948 R.,
 *   NAJDŁUŻEJ TRWAJĄCY KONKURS SZTUKI LUDOWEJ W POLSCE.
 *   OD 1978 organizuje go muzeum w Tarnowie. 60. EDYCJA W 2024 R.
 *   (58., 59. i 60. udokumentowane na stronie muzeum).
 *   Uczestniczą wsie Powiśla Dąbrowskiego, centrum — Zalipie.
 *   ⚠️ STAŁEGO TERMINU (związku z Bożym Ciałem) NIE POTWIERDZONO;
 *   jedna edycja odbyła się wyjątkowo we wrześniu.
 *   NIE PODAWAĆ MIESIĄCA,
 * — ZAGRODA FELICJI CURYŁOWEJ, Zalipie 135 — ODDZIAŁ MUZEUM ZIEMI
 *   TARNOWSKIEJ. ⚠️ NAZWA ZMIENIONA z „Muzeum Okręgowe w Tarnowie”
 *   — UŻYWAĆ AKTUALNEJ.
 *   FELICJA CURYŁOWA: 1904–1974, jedna z najsłynniejszych malarek
 *   Zalipia, znana już w latach 30. Wnętrze i ŚCIANY ZEWNĘTRZNE
 *   w motywach kwiatowych, CZARNY STROP Z BIAŁYMI WZORAMI Z GLINY,
 *   malowany piec kuchenny, wycinanki. Na terenie także CHAŁUPA
 *   STEFANII ŁĄCZYŃSKIEJ,
 * — ⚠️ „DOM MALAREK” w Zalipiu — wzmiankowany w mediach, ale DATY
 *   POWSTANIA I STATUSU NIE POTWIERDZONO. Nie eksponować,
 * — ⭐ KULINARIA: „ZOLIPSKIE PIROGI” — ⚠️⚠️ TAKA PISOWNIA
 *   W MINISTERIALNEJ LIŚCIE PRODUKTÓW TRADYCYJNYCH (GWAROWA,
 *   NIE „Zalipskie”!). Pierogi Z KAPUSTĄ I KIEŁBASĄ WIEJSKĄ,
 *   OZDOBNIE KARBOWANY BRZEG. Zatwierdzone przez Radę ds. Produktów
 *   Tradycyjnych w marcu 2013; wpis 2013.
 *   ⚠️ DOKŁADNEJ DATY DZIENNEJ NIE POTWIERDZONO (dwa inne produkty
 *   z tej samej szóstki mają 18.07.2013),
 * — 13 SOŁECTW (gminaolesno.pl): Adamierz, Breń, Ćwików, Dąbrówka
 *   Gorzycka, Dąbrówki Breńskie, Niwki, Oleśnica, Olesno,
 *   Pilcza Żelichowska, Podborze, Swarzów, Wielopole, ZALIPIE.
 *   ⚠️ en.wikipedia wymienia 12 (bez Brenia) — UŻYWAĆ LISTY GMINY,
 * — MIKROREGION TYPOWO ROLNICZY, MAŁO ZALESIONY. Turystyczny Szlak
 *   Pieszy Dąbrowa Tarnowska – Ujście Jezuickie. Olesno jako
 *   „naturalny ośrodek usługowy” trzynastu sołectw,
 * — WSPÓŁRZĘDNE (UG, ul. Wł. Jagiełły 1): 50,20091 / 20,928456.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (11,4%, 7 161,93 zł),
 * — RUCHU PASAŻERSKIEGO KOLEJĄ. W całym powiecie go nie ma.
 *
 * PUŁAPKI:
 * — ⚠️⚠️ OLESNO W WOJ. OPOLSKIM to miasto powiatowe i DOMINUJE
 *   W WYNIKACH WYSZUKIWANIA. To zupełnie inna miejscowość.
 *   KONIECZNIE ROZRÓŻNIĆ NA STRONIE,
 * — „ZOLIPSKIE”, NIE „ZALIPSKIE” — pisownia z rejestru.
 */

export const OLESNO: CityContent = {
  slug: "olesno",
  h1: "Thermomix Olesno (powiat dąbrowski) – prezentacja i zakup",
  seoTitle: "Przedstawiciel Thermomix Olesno k. Dąbrowy Tarnowskiej",
  seoDescription:
    "Thermomix w gminie Olesno w powiecie dąbrowskim: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Olesno — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Olesno koło Dąbrowy Tarnowskiej. Gotujemy razem u Ciebie, dojazd bez dopłat.",

  lead: "Do Olesna, Zalipia i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie trzynaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Olesno – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Konkurs, który trwa od tysiąc dziewięćset czterdziestego ósmego roku",
      paragraphs: [
        "Zalipie jest jednym z trzynastu sołectw gminy Olesno — osiemset pięć hektarów, siedemset trzydzieści sześć mieszkańców, pierwsza wzmianka z tysiąc sześćset siedemdziesiątego czwartego roku. I jest przy tym jedną z najbardziej rozpoznawalnych wsi w Polsce.",
        "Kobiety malują tu domy w kwiaty. Nie tylko wnętrza — także ściany zewnętrzne, piece, studnie, płoty, budy dla psów. Zwyczaj wziął się z konieczności: w chałupach kurnych sadza osiadała na ścianach, więc zamalowywano ją wapnem, a z czasem zamiast zamalowywać zaczęto zdobić.",
        "Najważniejsza jest tu jednak nie sama tradycja, tylko sposób, w jaki ją utrzymano. Konkurs „Malowana Chata” organizuje się nieprzerwanie od tysiąc dziewięćset czterdziestego ósmego roku i jest to najdłużej trwający konkurs sztuki ludowej w Polsce. Od tysiąc dziewięćset siedemdziesiątego ósmego prowadzi go muzeum w Tarnowie, a w dwa tysiące dwudziestym czwartym odbyła się sześćdziesiąta edycja.",
        "Nie podaję stałego terminu, bo go nie ma — jedna z edycji odbyła się wyjątkowo we wrześniu, a informacje o powiązaniu z Bożym Ciałem nie są potwierdzone.",
        "Najsłynniejszą malarką Zalipia była Felicja Curyłowa, żyjąca w latach tysiąc dziewięćset czwartym–siedemdziesiątym czwartym; znano ją już w latach trzydziestych. Jej zagroda działa dziś jako oddział Muzeum Ziemi Tarnowskiej: pomalowane wnętrza i ściany zewnętrzne, czarny strop z białymi wzorami wyklejanymi z gliny, malowany piec kuchenny i wycinanki. Na tym samym terenie stoi chałupa Stefanii Łączyńskiej.",
        "Warto zauważyć, jak to działa mechanicznie, bo to jest ciekawsze niż same kwiaty. Zalipie nie przetrwało dzięki temu, że ktoś je objął ochroną konserwatorską — przetrwało dlatego, że co roku odbywa się konkurs, w którym gospodynie muszą namalować chatę od nowa. Wzory zmywa deszcz, więc malowanie trzeba powtarzać. Tradycja jest tu czynnością, a nie zabytkiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Olesno?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, że chodzi o Olesno w powiecie dąbrowskim, koło Dąbrowy Tarnowskiej. W Polsce jest jeszcze Olesno w województwie opolskim — miasto powiatowe, oddalone o kilkaset kilometrów.",
        "Podaj też sołectwo. Gmina ma ich trzynaście, od Zalipia i Brenia po Swarzów i Podborze; na cenę to nie wpływa, tylko na planowanie trasy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Olesno"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, z której się nie wyjeżdża",
      paragraphs: [
        "Jest tu liczba, która mówi o tej gminie więcej niż cokolwiek innego: od dwa tysiące drugiego roku Olesno straciło mniej niż jeden procent mieszkańców. W powiecie, gdzie Gręboszów stracił blisko czternaście, a Szczucin osiem, to praktycznie stabilność.",
        "Gmina jest przy tym typowo rolnicza i mało zalesiona — pola, gospodarstwa, trzynaście wsi i żadnego miasta. Samo Olesno pełni funkcję ośrodka usługowego dla całej reszty. Zarejestrowanych firm jest pięćset dwadzieścia jeden i są to prawie wyłącznie małe działalności.",
        "W praktyce znaczy to, że w wielu domach dochód składa się z kilku źródeł: gospodarstwo, etat w Dąbrowie Tarnowskiej albo Tarnowie, czasem własna działalność. Dzień jest długi i podzielony między te rzeczy.",
        "Kuchnia dostosowuje się do tego jednym sposobem, znanym w każdym gospodarstwie: gotuje się rzadziej i więcej. Danie jednogarnkowe wstawia się rano i wychodzi w pole albo do pracy; gotuje się bez pilnowania, samo się wyłącza i czeka do wieczora.",
        "Druga rzecz to sezonowość, w gminie rolniczej najważniejsza. Latem i jesienią jest z czego robić przetwory, ale nie ma na to czasu; zimą jest odwrotnie. Urządzenie zmienia tu jedną konkretną rzecz — smażenie powideł, robienie przecierów i musów można zostawić bez pilnowania, bo temperatura jest trzymana i nic nie przywiera.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto wraca wcześniej. W gospodarstwie, gdzie dorośli są zajęci do zmroku, to bywa realnym odciążeniem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Zolipskie pirogi — z kapustą, kiełbasą i karbowanym brzegiem",
    paragraphs: [
      "Ta gmina ma własny wpis na ministerialnej Liście Produktów Tradycyjnych i jest nim potrawa z Zalipia. Nazywa się — i tak właśnie zapisano ją w rejestrze, po miejscowemu — zolipskie pirogi. Nie „zalipskie”, tylko „zolipskie”; gwarowa pisownia trafiła do dokumentu urzędowego i dobrze.",
      "Nadzienie robi się z kapusty i kiełbasy wiejskiej, a brzeg zalepia ozdobnie, karbowany. Ten szczegół nie jest przypadkiem: w wiosce, w której maluje się kwiaty na ścianach domów, także pieróg musi mieć wzór na brzegu. Rada do spraw produktów tradycyjnych zatwierdziła je w marcu dwa tysiące trzynastego roku.",
      "Poza tym gotuje się tu jak w całym Powiślu Dąbrowskim: kapusta, ziemniaki, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z własnego ogrodu. Gmina jest rolnicza i mało zalesiona, więc na stół trafia głównie to, co rośnie w polu.",
      "Przy pierogach urządzenie robi dokładnie dwie rzeczy i warto je nazwać osobno. Pierwsza to ciasto: wyrabianie zajmuje kilka minut zamiast kwadransa pracy rękami i wychodzi za każdym razem tak samo. Druga to farsz: kapustę i kiełbasę rozdrabnia się w kilka sekund, bez maszynki i bez noża.",
      "Czego nie zrobi, mówię wprost i bez owijania: nie ulepi pieroga i nie zrobi karbowanego brzegu. Tego nie zastąpi żadna maszyna, bo to jest właśnie ta część, która czyni z tych pierogów zolipskie pirogi, a nie po prostu pierogi. Zabiera przygotowanie, a rzemiosło zostawia Wam.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Olesno dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu, bez żadnej dopłaty za odległość. Gmina liczy około siedmiu i pół tysiąca mieszkańców na siedemdziesięciu ośmiu kilometrach kwadratowych i jest terenem typowo rolniczym, mało zalesionym.",
    "Sołectwa to: Adamierz, Breń, Ćwików, Dąbrówka Gorzycka, Dąbrówki Breńskie, Niwki, Oleśnica, Olesno, Pilcza Żelichowska, Podborze, Swarzów, Wielopole i Zalipie. Miasta w gminie nie ma — Olesno pełni funkcję ośrodka usługowego dla pozostałych wsi.",
    "Najbardziej znanym miejscem jest oczywiście Zalipie, malowana wieś z konkursem organizowanym nieprzerwanie od tysiąc dziewięćset czterdziestego ósmego roku. Zagroda Felicji Curyłowej pod numerem sto trzydziestym piątym działa jako oddział Muzeum Ziemi Tarnowskiej; obok stoi chałupa Stefanii Łączyńskiej.",
    "Przez gminę prowadzi turystyczny szlak pieszy z Dąbrowy Tarnowskiej do Ujścia Jezuickiego.",
    "Dojazd: kolei pasażerskiej w powiecie dąbrowskim nie ma — linia z Tarnowa do Szczucina straciła ją w dwutysięcznym roku, a zapowiedziana rewitalizacja jest na razie planem. Samochodem najbliżej z Dąbrowy Tarnowskiej i z Tarnowa.",
  ],
  districts: [
    "Olesno",
    "Zalipie",
    "Breń i Dąbrówki Breńskie",
    "Swarzów",
    "Podborze",
    "Oleśnica i Ćwików",
    "Pilcza Żelichowska",
    "Adamierz, Niwki, Wielopole",
  ],

  nearbyHeading: "Dąbrowa Tarnowska, Bolesław i Gręboszów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Dąbrową Tarnowską, Bolesławiem, Gręboszowem i Żabnem. Dojeżdżam do wszystkich gmin powiatu dąbrowskiego bez doliczania kosztu dojazdu; blisko jest też do Tarnowa.",
    "Jedno rozróżnienie na koniec, bo bywa mylące: to Olesno w powiecie dąbrowskim w Małopolsce, a nie Olesno w województwie opolskim.",
  ],
  nearbyTowns: [
    "Dąbrowa Tarnowska",
    "Bolesław",
    "Gręboszów",
    "Mędrzechów",
    "Szczucin",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Olesno", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "To Olesno w Małopolsce czy na Opolszczyźnie?",
      answer:
        "W Małopolsce, w powiecie dąbrowskim, kilka kilometrów od Dąbrowy Tarnowskiej — to ta gmina, do której należy Zalipie. Olesno w województwie opolskim to zupełnie inne miasto, oddalone o kilkaset kilometrów. Wyszukiwarki zwykle pokazują najpierw tamto, więc przy umawianiu warto to doprecyzować.",
    },
    ...faqWspolne("w gminie Olesno"),
    {
      question: "Robimy zolipskie pirogi. Ten sprzęt w tym pomoże?",
      answer:
        "Pomoże przy dwóch rzeczach: wyrobi ciasto w kilka minut zamiast kwadransa pracy rękami i rozdrobni farsz z kapusty i kiełbasy w kilka sekund, bez maszynki. Lepienia i karbowanego brzegu nie zastąpi — i nie będę tego obiecywać, bo to właśnie ten brzeg czyni z nich zolipskie pirogi. Na prezentacji chętnie zrobię ciasto i farsz na Waszym przepisie.",
    },
  ],

  geo: { lat: 50.2009, lng: 20.9285 },
};
