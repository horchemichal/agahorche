import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * STOPNICA — miasto w powiecie buskim. Prawa miejskie 1362 r.
 * od Kazimierza Wielkiego (przeniesienie na prawo średzkie
 * i zwolnienie z podatków na szesnaście lat), utracone
 * w 1869/1870 r., ODZYSKANE 1 STYCZNIA 2015 r. — po stu
 * czterdziestu pięciu latach. Zamek z ok. 1360 r. spłonął
 * częściowo w 1859 r., został całkowicie zniszczony w 1944 r.
 * i ODBUDOWANY; prace zakończono w GRUDNIU 2010 r. Dziś mieści
 * Gminne Centrum Kultury: salę widowiskową i ekspozycje
 * na parterze, bibliotekę i salę multimedialną na piętrze,
 * kawiarnię w piwnicach.
 *
 * KĄT: gotowanie na zapas i odkładanie porcji do zamrażarki —
 * co się odkłada, a czego odłożyć się nie da. Miasto, które
 * odbudowało zamek z całkowitej ruiny i odzyskało prawa miejskie
 * po stu czterdziestu pięciu latach, jest właściwym miejscem
 * na stronę o tym, co da się odłożyć na później, a co po
 * odłożeniu już nie wraca takie samo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że podwójna porcja kosztuje niemal tyle samo pracy,
 *   co pojedyncza, i to jest realna przewaga tego urządzenia,
 * — że pojemność naczynia ma granicę i przy dużych partiach
 *   trzeba gotować w dwóch turach,
 * — co znosi zamrażarkę dobrze, a co źle,
 * — że miejscem, w którym gotowanie na zapas najczęściej się
 *   sypie, nie jest gotowanie, tylko odgrzewanie,
 * — i NAJWAŻNIEJSZE: że nie obiecam nikomu, że zacznie gotować
 *   w niedzielę na cały tydzień. Większość ludzi tego nie robi
 *   i sprzęt tego nie zmienia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O TYM, JAK DŁUGO JEDZENIE MOŻE BYĆ
 *   PRZECHOWYWANE ANI JAK JE BEZPIECZNIE ROZMRAŻAĆ. To jest
 *   bezpieczeństwo żywności — jedno zdanie odmowy, bez
 *   rozwijania tematu.
 * — ŻADNEJ POJEMNOŚCI W LITRACH. Nie podaję z pamięci liczby,
 *   której nie zweryfikowałam — na stronie jest „pokażę
 *   na spotkaniu".
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ani o mrożeniu, ani
 *   o odgrzewaniu, ani o wartościach odżywczych.
 * — ŻADNYCH OBLICZEŃ OSZCZĘDNOŚCI. Nie policzę nikomu, ile
 *   zaoszczędzi — nie znam cen w jego sklepie ani tego, ile
 *   dziś wyrzuca.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie z mrożonek"
 * (inne miasto) dotyczy produktów KUPIONYCH mrożonych. Tutaj
 * chodzi o WŁASNE jedzenie odkładane do zamrażarki. „Skala
 * i pojemność" dotyczy jednorazowego gotowania dla wielu osób,
 * nie odkładania na kolejne dni. „Resztki" dotyczą tego,
 * co zostało przypadkiem — tutaj chodzi o nadmiar ugotowany
 * CELOWO. „Gotowanie mniejszych porcji" to dokładne
 * przeciwieństwo tej strony.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ LICZBY MIESZKAŃCÓW MIASTA. Znaleziona wartość
 *   (ok. 1 545) nie ma potwierdzonego roku odniesienia, więc
 *   piszę opisowo: „około półtora tysiąca". Dla gminy znana
 *   jest liczba 7 589 z 2019 r. i tak jest opisana — z rokiem.
 * — NIE MYLĘ 2010 z 2015. Rok 2010 to zakończenie odbudowy
 *   zamku, rok 2015 to odzyskanie praw miejskich. Źródła
 *   potrafią to mieszać.
 * — NIE PODAJĘ największego pracodawcy. Brak danych.
 * — NIE PISZĘ o specjalizacji rolniczej gminy. Nie potwierdzono
 *   żadnej.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Stopnicy nic nie potwierdzono.
 * — NIE ROZSTRZYGAM, czy prawa miejskie przepadły w 1869
 *   czy 1870 r. — źródła podają obie daty. Piszę „po powstaniu
 *   styczniowym".
 * — NIE PODAJĘ dat istnienia i zniesienia powiatu stopnickiego.
 *   Sam fakt, że taki powiat istniał i że jego siedzibą była
 *   Stopnica, a nie Busko, jest potwierdzony — i tylko to piszę.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1362 r. od Kazimierza Wielkiego, prawo
 *   średzkie, zwolnienie z podatków na szesnaście lat,
 * — utrata po powstaniu styczniowym, odzyskanie 1 stycznia
 *   2015 r., po stu czterdziestu pięciu latach,
 * — zamek z ok. 1360 r., spalony częściowo 1859, zniszczony
 *   całkowicie 1944, odbudowa zakończona w grudniu 2010 r.,
 * — dziś w zamku Gminne Centrum Kultury: sala widowiskowa
 *   i ekspozycje, biblioteka i sala multimedialna na piętrze,
 *   kawiarnia w piwnicach,
 * — historyczny powiat stopnicki miał siedzibę w Stopnicy;
 *   rolę centrum regionu przejęło później Busko-Zdrój,
 * — gmina liczyła 7 589 mieszkańców w 2019 r. na 125 km².
 */
export const STOPNICA: CityContent = {
  slug: "stopnica",
  h1: "Thermomix Stopnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stopnica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Stopnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stopnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stopnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stopnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Stopnica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Podwójna porcja kosztuje tyle samo pracy. Reszta zależy od Was.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stopnicy – jak wygląda prezentacja?",
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
      id: "na-zapas",
      heading: "Miasto, które odbudowało zamek z ruiny — czyli o tym, co da się odłożyć na później",
      paragraphs: [
        "Stopnicki zamek postawił Kazimierz Wielki około 1360 roku. Spłonął częściowo w 1859, w 1944 został zniszczony do końca i przez pół wieku był ruiną. Odbudowano go — prace skończyły się w grudniu 2010 roku — i dziś mieści się w nim Gminne Centrum Kultury: sala widowiskowa, biblioteka na piętrze, kawiarnia w piwnicach. Prawa miejskie miasto odzyskało pięć lat później, 1 stycznia 2015 roku, po stu czterdziestu pięciu latach przerwy. To miejsce wie, co znaczy odłożyć coś na później i wrócić do tego po latach.",
        "W kuchni mówimy o skali dużo mniejszej, ale o tej samej zasadzie: co się odkłada, a co po odłożeniu już nie jest tym samym.",
        "Zacznę od tego, co w tym urządzeniu jest naprawdę mocne. Podwójna albo potrójna porcja kosztuje niemal tyle samo Waszej pracy, co pojedyncza — bo pracy jest przy tym garnku tyle, co nastawienie i przelanie. Przy zwykłym gotowaniu podwojenie porcji oznacza większy garnek, więcej mieszania i więcej pilnowania. Tutaj nie oznacza prawie nic. To jest przewaga, o której warto wiedzieć, zanim się zdecydujecie.",
        "Granica też jest i nie będę jej ukrywać: naczynie ma swoją pojemność i przy dużych partiach trzeba zrobić dwie tury. Nie podam tu liczby litrów z pamięci — pokażę Wam naczynie na spotkaniu i ocenicie same.",
        "Co znosi zamrażarkę dobrze: zupy bez ziemniaków, sosy pomidorowe i mięsne, gulasze, przeciery warzywne, pesto, farsze. Co znosi źle: ziemniaki w zupie (robią się mączyste), sosy na śmietanie (potrafią się rozwarstwić), ugotowany makaron i wszystko, co miało zostać chrupiące. To nie są tajemnice — po prostu nikt tego nie mówi przy sprzedaży.",
        "A teraz miejsce, w którym gotowanie na zapas najczęściej się sypie. Nie w gotowaniu. W odgrzewaniu. Urządzenie podgrzewa mieszając, więc sosy i zupy wygrywają na tym podwójnie, ale wszystko, co ma jakąkolwiek strukturę — kawałki mięsa, warzywa w kostkę, kluski — na mieszaniu traci. Jak coś ma wrócić w kawałkach, lepiej odgrzać to na patelni i nie walczyć.",
        "I zdanie, przy którym nie ustąpię, choć psuje mi sprzedaż: nie obiecam Wam, że zaczniecie gotować w niedzielę na cały tydzień. Większość ludzi tego nie robi — ani przed zakupem, ani po. Zaczyna, wytrzymuje trzy tygodnie i wraca do gotowania na bieżąco. Sprzęt tego nie zmienia, bo to nie jest kwestia sprzętu. Zmienia natomiast coś mniejszego i realniejszego: jak już gotujecie, to zrobienie dwa razy więcej nic Was nie kosztuje. I to jest cała prawda o tym temacie.",
        "Czego nie doradzę: jak długo jedzenie może leżeć w zamrażarce ani jak je rozmrażać. To dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową, nie technologiem — po tę wiedzę idźcie do rzetelnego źródła.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stopnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli myślicie o gotowaniu na zapas, powiedzcie to przy umawianiu — ugotujemy coś, co realnie znosi zamrażarkę, i zobaczycie pojemność naczynia na własne oczy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stopnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla stopnickiej rodziny",
      paragraphs: [
        "Stopnica liczy około półtora tysiąca mieszkańców, a cała gmina — 7 589 osób w 2019 roku, rozłożonych na stu dwudziestu pięciu kilometrach kwadratowych. Prawa miejskie nadał jej Kazimierz Wielki w 1362 roku, przenosząc miasto na prawo średzkie i zwalniając je z podatków na szesnaście lat. Warto też wiedzieć rzecz dziś nieoczywistą: to Stopnica, a nie Busko-Zdrój, była kiedyś siedzibą powiatu — rolę centrum regionu Busko przejęło później, wraz z rozwojem uzdrowiska.",
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

  districtsHeading: "Do których części Stopnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — bez dopłaty za dojazd. Gmina jest rozległa, ale to niczego nie zmienia w rozliczeniu.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Stopnicę też przyjadę",
  nearbyParagraphs: [
    "Busko-Zdrój, Staszów, Pińczów, Chmielnik i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Busko-Zdrój", "Staszów", "Pińczów", "Chmielnik", "Połaniec", "Szydłów"],

  about: blokOMnie("do Stopnicy", "w Stopnicy i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stopnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Stopnicy"),
    {
      question: "Czy Thermomix opłaca się przy gotowaniu na zapas?",
      answer:
        "Jego realna przewaga jest taka, że podwójna albo potrójna porcja kosztuje niemal tyle samo pracy, co pojedyncza — bo pracy jest tu tyle, co nastawienie i przelanie. Granica to pojemność naczynia: przy dużych partiach trzeba zrobić dwie tury. Naczynie pokażę na spotkaniu, żeby nie podawać liczb z pamięci.",
    },
    {
      question: "Co dobrze znosi zamrażarkę, a co źle?",
      answer:
        "Dobrze: zupy bez ziemniaków, sosy pomidorowe i mięsne, gulasze, przeciery, pesto, farsze. Źle: ziemniaki w zupie (robią się mączyste), sosy na śmietanie (potrafią się rozwarstwić), ugotowany makaron i wszystko, co miało zostać chrupiące.",
    },
    {
      question: "Czy dzięki temu zacznę gotować raz w tygodniu na cały tydzień?",
      answer:
        "Tego Wam nie obiecam. Większość ludzi tego nie robi — ani przed zakupem, ani po; zaczyna, wytrzymuje trzy tygodnie i wraca do gotowania na bieżąco. To nie jest kwestia sprzętu. Realna zmiana jest mniejsza: jak już gotujecie, zrobienie dwa razy więcej nic Was nie kosztuje.",
    },
  ],

  geo: { lat: 50.4394, lng: 20.9394 },
};
