import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * WOLBÓRZ — gmina miejsko-wiejska w powiecie piotrkowskim.
 * MIASTO 2 266, GMINA 7 826 (GUS 31.12.2024).
 * 22 SOŁECTWA, 38 miejscowości (dane gminy) — piszę
 * „dwadzieścia kilka", bo wykaz może być sprzed 2011 r.
 *
 * PRAWA MIEJSKIE 1273 r., LESZEK CZARNY, prawo średzkie;
 * potwierdzenie 1357 r. na prawie magdeburskim. Część źródeł
 * podaje 1265 — trzymam się wersji gminy (1273).
 * UTRATA 1870. PRZYWRÓCENIE 1 STYCZNIA 2011 r. na mocy
 * ROZPORZĄDZENIA RADY MINISTRÓW Z 27 LIPCA 2010 r.
 * (Dz.U. 2010 nr 138, poz. 929) — UWAGA: 27, nie 28 lipca.
 *
 * ANDRZEJ FRYCZ MODRZEWSKI — urodzony w Wolborzu w 1503 r.,
 * autor „O poprawie Rzeczypospolitej"; wójt Wolborza
 * w latach 1553–1569.
 * KOLEGIATA św. MIKOŁAJA: pierwotny kościół 1148–1215,
 * obecna gotycka prawdopodobnie XV w., wieża 1549–79,
 * przebudowa barokowa 1766. Godność kolegiaty nadana 1544 r.
 * przez abpa Piotra Gamrata, ODEBRANA 1818, PRZYWRÓCONA
 * W 2008 r. dekretem abpa Władysława Ziółka.
 * PAŁAC BISKUPÓW KUJAWSKICH 1768–1773, arch. FRANCISZEK
 * PLACIDI, fundator bp Antoni Ostrowski. DO DZIŚ MIEŚCI SIĘ
 * W NIM SZKOŁA — nazwy nie podaję (zakaz nazw instytucji
 * komercyjnych nie dotyczy szkół, ale nazwa się zmieniła
 * i wolę napisać opisowo).
 * Miasto leży w WIDŁACH WOLBÓRKI I MOSZCZANKI. Wolbórka
 * wymieniona już w dokumencie z 1228 r.
 * Kaplica św. Rocha 1915. Zamek biskupi XIV w., spłonął 1766.
 * DNI WOLBORZA — impreza cykliczna, TERMINU NIE PODAJĘ.
 *
 * KĄT: KOLEJNOŚĆ DODAWANIA SKŁADNIKÓW. Miasto Frycza
 * Modrzewskiego, który napisał książkę o tym, że o całości
 * decyduje porządek części.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w garnku kolejność wynika z tego, co widać; przy
 *   zamkniętym naczyniu trzeba ją znać z góry i to jest
 *   największa zmiana nawyku,
 * — że kolejność w przepisie NIE JEST dekoracją ani stylem
 *   zapisu — jest instrukcją i najczęściej to ona decyduje
 *   o wyniku,
 * — dlaczego twarde idzie przed miękkim, suche przed mokrym,
 *   a to, co ma zostać widoczne — na sam koniec,
 * — że najczęstszy błąd to wrzucenie wszystkiego naraz,
 *   bo „i tak się wymiesza",
 * — że urządzenie nie poprawi złej kolejności i nie ostrzeże,
 * — że zioła, czosnek, śmietana i skrobia mają swoje miejsce
 *   pod koniec i że to jest reguła warta zapamiętania,
 * — i ODMOWA: nie podaję gotowych sekwencji ani ustawień.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH GOTOWYCH SEKWENCJI KROK PO KROKU z liczbami.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE ROBIĘ TŁA z energetyki (bliskość zagłębia).
 * — NIE PISZĘ o synagodze ani o cmentarzu żydowskim.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Wszystko przygotowane
 * przed startem" (Sulejów) dotyczy przygotowania PRZED
 * gotowaniem. „Najpierw zakupy, potem przepis" dotyczy
 * zakupów. „Danie nie wyszło i nie wiadomo dlaczego" dotyczy
 * diagnozy po fakcie. „Nieprecyzyjny język przepisów"
 * (Pelplin) dotyczy sformułowań. Tutaj chodzi o PORZĄDEK
 * WKŁADANIA — o to, co idzie do naczynia i kiedy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ terminu Dni Wolborza.
 * — NIE PRZYPISUJĘ Wolborzowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PISZĘ o rezerwacie Lubiaszów — nie zweryfikowano.
 * — NIE MYLĘ Wolborza z WOLBROMIEM w małopolskim ani
 *   z rzeką Wolbórką.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 266, gmina 7 826 mieszkańców,
 * — prawa miejskie z 1273 r. od Leszka Czarnego, na prawie
 *   średzkim; potwierdzenie w 1357 r. na prawie magdeburskim,
 * — utrata praw w 1870 r., przywrócenie 1 stycznia 2011 r.
 *   na mocy rozporządzenia Rady Ministrów z 27 lipca 2010 r.,
 * — Andrzej Frycz Modrzewski urodził się w Wolborzu w 1503 r.
 *   i był wójtem miasta w latach 1553–1569,
 * — kolegiata świętego Mikołaja: godność kolegiaty nadana
 *   w 1544 r., odebrana w 1818 r., przywrócona w 2008 r.,
 * — pałac biskupów kujawskich z lat 1768–1773, proj. Franciszek
 *   Placidi, fundator biskup Antoni Ostrowski; do dziś mieści
 *   się w nim szkoła,
 * — miasto leży w widłach Wolbórki i Moszczanki; Wolbórka
 *   pojawia się w dokumencie z 1228 r.
 */
export const WOLBORZ: CityContent = {
  slug: "wolborz",
  h1: "Thermomix Wolbórz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wolbórz (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wolborzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wolbórz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wolborzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wolborza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Wolbórz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kolejność w przepisie nie jest stylem zapisu. Jest instrukcją.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wolborzu – jak wygląda prezentacja?",
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
      id: "kolejnosc",
      heading: "Miasto Frycza Modrzewskiego — czyli o kolejności dodawania składników",
      paragraphs: [
        "W Wolborzu urodził się w 1503 roku Andrzej Frycz Modrzewski, autor „O poprawie Rzeczypospolitej”, i był tu potem wójtem przez szesnaście lat. Napisał książkę o tym, że o jakości całości decyduje porządek jej części — i to jest jedyny powód, dla którego akurat w tym mieście chcę napisać o kolejności składników. Bo w kuchni ta zależność jest dosłowna.",
        "Zacznę od zmiany, którą odczuwa każdy, kto przesiada się z garnka. W garnku kolejność wynika z tego, co widać: patrzycie, cebula się zeszkliła, więc dorzucacie marchewkę. Przy zamkniętym naczyniu nie widać nic. Kolejność trzeba znać z góry, przed startem, a nie ustalać ją po drodze. To jest naprawdę większa zmiana nawyku niż samo urządzenie.",
        "I dlatego mówię wprost rzecz, którą wielu bierze za drobiazg: kolejność w przepisie nie jest stylem zapisu ani dekoracją. Jest instrukcją. Częściej niż czas i częściej niż temperatura to właśnie ona decyduje, czy wyjdzie.",
        "Reguły, które za nią stoją, są proste i warto je rozumieć, zamiast uczyć się na pamięć. Twarde idzie przed miękkim, bo potrzebuje więcej czasu — marchewka przed cukinią, ziemniak przed pomidorem. Suche przed mokrym, bo w mokrym nic się porządnie nie rozdrobni: parmezan, orzechy, bułka, przyprawy najpierw, płyny potem. A to, co ma zostać widoczne i wyczuwalne, idzie na sam koniec, bo wcześniej po prostu zniknie.",
        "Najczęstszy błąd? Wrzucenie wszystkiego naraz, bo „i tak się wymiesza”. Owszem, wymiesza — ale marchewka zostanie twarda, pomidor rozpadnie się w nic, natka zbrązowieje, a czosnek zgorzknieje. Wszystkie cztery rzeczy naraz, w jednym daniu.",
        "Do tego dochodzi rzecz, która zaskakuje ludzi po zakupie: urządzenie złej kolejności nie poprawi i nie ostrzeże. Ono wykona to, co mu każecie, dokładnie tak, jak każecie. Cała ta decyzja została po Waszej stronie i nie ma tu żadnej automatyki, która by ją wzięła na siebie.",
        "Jedna grupa składników zasługuje na osobne zdanie, bo pomyłki przy niej są najczęstsze: świeże zioła, surowy czosnek, śmietana i wszystko, co zagęszcza, należą do końca. Zioła gotowane długo tracą zapach, czosnek długo gotowany gorzknieje, śmietana nie lubi wysokiej temperatury, a zagęszczacze zaczynają działać dopiero wtedy, gdy reszta jest gotowa. Jeśli zapamiętacie z tej strony jedną rzecz, niech to będzie ta.",
        "I granica: nie podam Wam gotowych sekwencji z minutami i ustawieniami. Kolejność wynika z tego, co konkretnie wkładacie, i chcę, żebyście rozumieli zasadę, a nie przepisywali cudzą listę.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wolborzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli gotujecie z przepisów pisanych na garnek — weźcie jeden na spotkanie. Przejdziemy go razem i pokażę, co w nim zmienić, żeby zadziałał w zamkniętym naczyniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wolborzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wolborskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwa tysiące dwieście mieszkańców, a cała gmina blisko osiem tysięcy, w dwudziestu kilku sołectwach. Prawa miejskie Wolbórz dostał w 1273 roku od Leszka Czarnego, stracił je w 1870 i odzyskał dopiero 1 stycznia 2011 roku, na mocy rozporządzenia Rady Ministrów z 27 lipca 2010 — po stu czterdziestu jeden latach jako wieś. Miasto leży w widłach Wolbórki i Moszczanki; sama Wolbórka pojawia się w dokumencie z 1228 roku. Nad rynkiem stoi kolegiata świętego Mikołaja, która odzyskała godność kolegiaty w 2008 roku, po stu dziewięćdziesięciu latach przerwy, a obok późnobarokowy pałac biskupów kujawskich z lat 1768–1773 projektu Franciszka Placidiego, w którym do dziś mieści się szkoła.",
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

  districtsHeading: "Do których części gminy Wolbórz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Wolbórz też przyjadę",
  nearbyParagraphs: [
    "Piotrków Trybunalski, Tomaszów Mazowiecki, Sulejów, Kamieńsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piotrków Trybunalski", "Sulejów", "Tomaszów Mazowiecki", "Kamieńsk"],

  about: blokOMnie("do Wolborza", "w Wolborzu i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wolborza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłka jest częsta: chodzi o Wolbórz w powiecie piotrkowskim — nie o Wolbrom w małopolskim.",
    },
    ...faqWspolne("w Wolborzu"),
    {
      question: "Czy kolejność wkładania składników ma znaczenie?",
      answer:
        "Ma i częściej decyduje o wyniku niż czas czy temperatura. Twarde idzie przed miękkim, bo potrzebuje więcej czasu. Suche przed mokrym, bo w płynie nic się porządnie nie rozdrobni. A to, co ma zostać wyczuwalne, idzie na koniec — inaczej po prostu zniknie.",
    },
    {
      question: "Co dodawać na samym końcu?",
      answer:
        "Świeże zioła, surowy czosnek, śmietanę i wszystko, co zagęszcza. Zioła gotowane długo tracą zapach, czosnek gorzknieje, śmietana nie lubi wysokiej temperatury, a zagęszczacze mają sens dopiero wtedy, gdy reszta jest już gotowa.",
    },
    {
      question: "Czy urządzenie poprawi złą kolejność?",
      answer:
        "Nie i nie ostrzeże. Wykona dokładnie to, co mu każecie. W garnku kolejność ustala się patrząc, w zamkniętym naczyniu trzeba ją znać przed startem — i to jest największa zmiana nawyku po przesiadce.",
    },
  ],

  geo: { lat: 51.5017, lng: 19.8305 },
};
