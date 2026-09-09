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
 * DĘBLIN — miasto Lotniczej Akademii Wojskowej („Szkoły Orląt”),
 * czternaście i pół tysiąca mieszkańców, silny trend spadkowy.
 * Dwie z siedemnastu dzielnic nazywają się Podchorążych i Lotnisko.
 *
 * KĄT: jedzenie zbiorowe. Miasto, w którym bardzo wiele osób przez
 * lata jadło z instytucjonalnej kuchni — i wraca do gotowania dla
 * siebie. Strona jest o tym, co się wtedy okazuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jedzenie ze stołówki ma jedną cechę, której domowe nie ma:
 *   jest gotowe o określonej godzinie i nikt go nie planuje,
 * — że po powrocie do własnej kuchni trudność nie leży w gotowaniu,
 *   tylko w DECYDOWANIU codziennie od nowa, co,
 * — co realnie pomaga: powtarzalność, jedno naczynie, przepis
 *   prowadzony krok po kroku,
 * — i czego urządzenie NIE robi: nie zaplanuje tygodnia i nie zrobi
 *   zakupów.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO PORÓWNYWANIA „domowe kontra stołówkowe” pod kątem
 *   zdrowia, jakości ani wartości odżywczej. Zasada z Mrągowa:
 *   to byłby komentarz do czyjejś pracy i twierdzenie nie
 *   do udowodnienia. Kuchnie zbiorowe w Dęblinie karmią ludzi
 *   od stu lat i nie mam podstaw ich oceniać.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH WYLICZEŃ oszczędności względem stołówki.
 * — ANI SŁOWA o wojnie, obronności ani polityce. Uczelnia występuje
 *   w tekście wyłącznie jako duży pracodawca i duża kuchnia.
 *
 * ROZGRANICZENIE. Kąt „dom, w którym kogoś regularnie NIE MA
 * (wojsko, poligon, ćwiczenia)” jest zajęty przez inne miasto
 * i tutaj się NIE pojawia — nie ma tu ani słowa o nieobecności.
 * Grajewo mówi o jedzeniu wywożonym z domu do pracy; tutaj jest
 * odwrotnie: o wracaniu do własnej kuchni po latach jedzenia
 * przygotowanego przez kogoś innego.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję liczby posiłków wydawanych w stołówce. Research jej
 *   nie znalazł w żadnym publicznym źródle, a wymyślona liczba
 *   byłaby dokładnie tym błędem, który wcześniej wyłapywałam
 *   w innych plikach,
 * — NIE podaję, jaki procent mieszkańców jest związany z uczelnią
 *   i wojskiem — nie ma na to danych GUS ani wypowiedzi urzędu
 *   z liczbą. Zamiast szacunku jest to, co potwierdzone: nazwy
 *   dzielnic,
 * — NIE piszę, że Dęblin jest miastem o najniższej średniej wieku.
 *   To krążący mit i został OBALONY — Dęblina nie ma w czołówce
 *   żadnego z rankingów opartych na danych GUS. Prawdopodobne
 *   wyjaśnienie: podchorążowie zwykle nie są tu zameldowani,
 * — NIE podaję liczby pociągów dziennie ani liczby pracowników
 *   uczelni — obu nie znalazłam.
 *
 * ODRZUCONE KĄTY:
 * — węzeł kolejowy: zajęty przez Działdowo, a tu w dodatku bez
 *   liczby odjazdów,
 * — lotnisko i lotnicy jako romantyczny motyw — to zdobienie,
 *   nie fakt o kuchni.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — uczelnia nosi nazwę Lotnicza Akademia Wojskowa OD 1 PAŹDZIERNIKA
 *   2018 r. (wcześniej WSOSP); „Szkoła Orląt” to nazwa potoczna,
 *   nie odrębna instytucja — tekst to rozróżnia,
 * — uczy się tam około tysiąca ośmiuset osób (rok akademicki
 *   2025/2026, kierunki wojskowe i cywilne); 303 miejsca to limit
 *   naboru na jeden rok, nie liczba studentów, i tej liczby w tekście
 *   nie ma,
 * — uczelnia ma wyodrębnioną stołówkę studencką; w 2021 r.
 *   przebudowano w niej instalacje technologii kuchni,
 * — zaopatrzenie tej kuchni idzie przez zamówienia publiczne
 *   na żywność liczone w setkach tysięcy złotych rocznie — w tekście
 *   mówię o skali, bez podawania kwot, bo kwoty przetargowe zmieniają
 *   się co roku i szybko by się zdezaktualizowały,
 * — miasto liczyło 14 436 mieszkańców na 31 grudnia 2024 r. (Raport
 *   o stanie Miasta Dęblin), a od 2016 r. ubyło ich blisko półtora
 *   tysiąca,
 * — miasto publikuje wykaz siedemnastu jednostek pomocniczych,
 *   wśród nich Podchorążych, Lotnisko i Stawy,
 * — z Lublina jest tu 73 km, około pięćdziesięciu minut,
 * — działa tu oddział Wojskowych Zakładów Lotniczych nr 1 — używam
 *   NAZWY AKTUALNEJ, mimo że miejski raport z 2024 r. wciąż pisze
 *   „WZL nr 4”.
 */
export const DEBLIN: CityContent = {
  slug: "deblin",
  h1: "Thermomix Dęblin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dęblin — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dęblinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dęblin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dęblinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dęblina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Dęblin i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najtrudniejsze we własnej kuchni nie jest gotowanie. Jest decydowanie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dęblinie – jak wygląda prezentacja?",
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
      id: "po-stolowce",
      heading: "Miasto, w którym bardzo wielu ludzi jadło z jednej kuchni",
      paragraphs: [
        "Dęblin ma czternaście i pół tysiąca mieszkańców i Lotniczą Akademię Wojskową — od 2018 roku pod tą nazwą, wcześniej Wyższą Szkołę Oficerską Sił Powietrznych, a w mowie od zawsze Szkołę Orląt. Uczy się tam około tysiąca ośmiuset osób. Jak głęboko to siedzi w mieście, widać po nazwach dzielnic: jedna nazywa się Podchorążych, druga Lotnisko.",
        "Uczelnia ma własną stołówkę studencką, remontowaną kilka lat temu razem z całą technologią kuchni, a żywność kupuje przez przetargi publiczne — w skali, o jakiej w domowej kuchni się nie myśli. Nie podam Wam, ile posiłków dziennie stamtąd wychodzi, bo nie znalazłam tej liczby w żadnym publicznym źródle, a zmyślać jej nie będę.",
        "Powiem od razu, czego na tej stronie nie zrobię: nie będę porównywać jedzenia domowego ze stołówkowym. Ani pod kątem zdrowia, ani jakości, ani czegokolwiek innego. Kuchnie zbiorowe karmią tutaj ludzi od stu lat, pracują w nich konkretne osoby i nie mam żadnych podstaw, żeby oceniać ich robotę z pozycji kogoś, kto sprzedaje sprzęt.",
        "Interesuje mnie co innego — coś, co słyszę od klientów w takich miejscach. Jedzenie ze stołówki ma jedną cechę, której domowe nie ma: jest o określonej godzinie i nikt go nie planuje. Nie trzeba wiedzieć w poniedziałek, co się będzie jadło w czwartek. Idzie się i jest.",
        "I dlatego powrót do własnej kuchni — po szkole, po latach służby, po zmianie pracy — bywa zaskakująco trudny, ale nie z tego powodu, z którego się spodziewamy. Trudność nie leży w gotowaniu. Ugotować potrafi prawie każdy. Trudność leży w tym, że trzeba codziennie od nowa DECYDOWAĆ, co, i codziennie od nowa zacząć.",
        "Tu urządzenie faktycznie pomaga, i to w sposób dość przyziemny. Przepis jest prowadzony krok po kroku na ekranie, więc nie trzeba nic wymyślać ani pamiętać — jest lista i się ją wykonuje. Wszystko dzieje się w jednym naczyniu, więc po obiedzie nie stoi wieża naczyń, która skutecznie zniechęca do gotowania nazajutrz. I nie trzeba stać nad garnkiem: danie gotuje się z ustawioną temperaturą i mieszaniem, a Wy w tym czasie robicie coś innego.",
        "Czego nie zrobi: nie zaplanuje tygodnia i nie zrobi zakupów. Decyzja, co się je, dalej należy do Was — urządzenie tylko sprawia, że po podjęciu tej decyzji reszta jest krótka i przewidywalna. To mniej efektowna obietnica niż większość tego, co się o takim sprzęcie mówi, ale sprawdza się w prawdziwym tygodniu.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dęblinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu ktoś dopiero wraca do codziennego gotowania po latach jedzenia poza domem, powiedzcie to przy umawianiu. Pokażę wtedy dania proste i powtarzalne, a nie takie, które ładnie wyglądają na pokazie i nigdy nie powtarza ich nikt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dęblinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dęblińskiej rodziny",
      paragraphs: [
        "Dęblin od lat się wyludnia — od 2016 roku ubyło blisko półtora tysiąca mieszkańców. Domów, w których gotuje się dla czterech osób, jest coraz mniej, a takich, gdzie je się we dwoje albo w pojedynkę, coraz więcej.",
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

  districtsHeading: "Do których części Dęblina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto ma siedemnaście jednostek pomocniczych — przy umawianiu wystarczy podać dzielnicę albo ulicę.",
  ],
  districts: [
    "Starówka",
    "Irena",
    "Lotnisko",
    "Podchorążych",
    "Jagiellońskie",
    "Stawy",
    "Masów",
    "Michalinów",
    "Młynki",
    "Wiślana",
  ],

  nearbyHeading: "Poza Dęblin też przyjadę",
  nearbyParagraphs: [
    "Ryki, Stężyca, Puławy i Sieciechów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ryki", "Puławy", "Stężyca", "Sieciechów", "Kozienice", "Lublin"],

  about: blokOMnie("do Dęblina", "w Dęblinie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Dęblina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dęblinie"),
    {
      question: "Wracam do gotowania po latach jedzenia poza domem. Od czego zacząć?",
      answer:
        "Od kilku dań, które da się powtarzać bez zastanawiania się. Trudność przy takim powrocie zwykle nie leży w gotowaniu, tylko w codziennym decydowaniu, co ugotować — dlatego przepis prowadzony krok po kroku i jedno naczynie do zmywania pomagają bardziej niż efektowne przepisy. Urządzenie nie zaplanuje jednak tygodnia ani nie zrobi zakupów; decyzja zostaje po Waszej stronie.",
    },
    {
      question: "Czy domowe jedzenie jest lepsze od stołówkowego?",
      answer:
        "Nie będę tego oceniać i nie jest to unik. Kuchnie zbiorowe karmią w Dęblinie ludzi od stu lat, pracują w nich konkretne osoby, a ja sprzedaję sprzęt — porównywanie ich pracy z domową kuchnią byłoby komentarzem, na który nie mam podstaw. To, co mogę powiedzieć uczciwie: gotując u siebie, wiecie, co jest w środku, i możecie to zmienić pod siebie.",
    },
  ],

  geo: { lat: 51.5697, lng: 21.8464 },
};
