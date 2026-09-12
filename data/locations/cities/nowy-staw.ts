import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * NOWY STAW — miasto w powiecie malborskim, na Żuławach,
 * 3 952 mieszkańców (31.12.2024, GUS); gmina 6 989. Brief mówił
 * 4 300 — zawyżone.
 *
 * PRAWA MIEJSKIE 1343 r. (prawo chełmińskie), poprzedzone
 * przywilejem osadniczym z 1316 r. od wielkiego mistrza
 * KAROLA Z TREWIRU.
 *
 * OBALONE, WAŻNE: „STOLICA ŻUŁAW" TO NOWY DWÓR GDAŃSKI,
 * A NIE NOWY STAW. Tytuł konsekwentnie stosują wobec Nowego
 * Dworu instytucje powiatowe i metropolitalne. Nowy Staw jest
 * opisywany jako „ośrodek usługowy rolniczych Żuław". NIE
 * UŻYWAM tego tytułu na tej stronie — i to jest ważne także
 * dlatego, że strona Nowego Dworu Gdańskiego już istnieje
 * w serwisie.
 *
 * OBALONE: CUKROWNIA (od 1878 r.) DZIAŁAŁA DO 1996 r.
 * Dziś to zabytek neogotyckiej architektury przemysłowej,
 * nie zakład pracy. Wspominam ją WYŁĄCZNIE jako budynek
 * i historię, bez robienia tła z utraty pracy.
 *
 * OBALONE: główny kościół to KOLEGIATA ŚW. MATEUSZA
 * (budowa od 1400 r.), a NIE św. Mikołaja — ten błąd krąży
 * w przewodnikach.
 *
 * OBALONE: mennonici NIE SĄ udokumentowanym motywem Nowego
 * Stawu. Źródła mówią o gminie luterańskiej od 1565 r.
 * Motyw mennonicki należy do Nowego Dworu Gdańskiego i tam
 * został użyty.
 *
 * PODWÓJNY RYNEK — nietypowy układ urbanistyczny; miasto żyło
 * z cechów rzeźników i tkaczy zaopatrujących zamek w Malborku.
 * 1563 r. — przywilej Zygmunta Augusta na żeglugę rzeką ŚWIĘTĄ
 * (w dolnym biegu TUGĄ) do Gdańska. Rzeka płynie przez centrum.
 * GLEBY NAJŻYŹNIEJSZE NA POMORZU — mady żuławskie.
 *
 * KĄT: BURAKI. Warzywo, które w polskiej kuchni ma najgorszą
 * opinię i najwięcej roboty — i które na madach żuławskich rośnie
 * jak nigdzie. Kąt jest czysty, codzienny i nie dotyka niczego
 * wrażliwego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że buraki to warzywo, którego ludzie unikają wyłącznie
 *   z powodu roboty i bałaganu, nie smaku,
 * — co urządzenie realnie robi: ściera na surowo, gotuje,
 *   przeciera na krem, robi ćwikłę, chłodnik, botwinkę,
 * — że barwnik z buraka potrafi zabarwić uszczelkę i plastik
 *   i że mówię o tym PRZED zakupem, a nie po,
 * — że burak gotowany w skórce i burak obrany to dwie różne
 *   rzeczy,
 * — że barszczu czerwonego na Wigilię i tak nie ugotujecie
 *   „na już" — dobry robi się na zakwasie i to jest osobna
 *   sprawa, o której nie doradzam,
 * — że pole i cukrownia to dwie różne historie: buraki cukrowe
 *   z tych pól nie są tym samym warzywem co burak ćwikłowy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O ZAKWASIE Z BURAKÓW — to fermentacja
 *   i ma własne ryzyko. ODMOWA W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — buraki, „oczyszczanie",
 *   żelazo, ciśnienie, sok z buraka. TO JEST DUŻA POKUSA
 *   I MÓWIĘ NIE.
 * — ŻADNYCH PORAD O PRZETWORACH W SŁOIKACH i pasteryzacji.
 * — ŻADNYCH NAZW FIRM.
 * — NIE ROBIĘ TŁA z likwidacji cukrowni ani z bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Cukier i karmel" (inne
 * miasto) dotyczy składnika, który się przypala — i dlatego
 * na tej stronie NIE piszę o cukrze ani o burakach cukrowych
 * jako o temacie kuchennym. „Kompoty i musy" (Biała) dotyczą
 * owoców. „Chrzan, musztarda i ocet" (Działoszyce) dotyczą
 * ostrych dodatków — ćwikłę wspominam, ale chrzanu nie robię
 * tematem. Tutaj chodzi o JEDNO WARZYWO i o pracę z nim.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Nowego Stawu stolicą Żuław. Nie jest.
 * — NIE PISZĘ, że cukrownia działa. Nie działa od 1996 r.
 * — NIE PISZĘ o kościele św. Mikołaja. To kolegiata
 *   św. Mateusza.
 * — NIE ROBIĘ z mennonitów motywu tego miasta.
 * — NIE PODAJĘ nazwy żadnego pracodawcy — nie ustaliłam.
 * — NIE PODAJĘ listy sołectw ani osiedli — nie ustaliłam.
 * — NIE POWTARZAM twierdzenia, że wieża kolegiaty jest wyższa
 *   od katedry w Kwidzynie — źródło jest niewiarygodne.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych jako
 *   nowostawskiego; wpisy żuławskie są regionalne, a twaróg
 *   żuławski pochodzi z Marzęcina w innej gminie.
 * — districts: PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 3 952 mieszkańców miasta, 6 989 gminy (31.12.2024, GUS),
 * — przywilej osadniczy 1316 r. od Karola z Trewiru, prawa
 *   miejskie 1343 r. na prawie chełmińskim,
 * — podwójny rynek; cechy rzeźników i tkaczy zaopatrywały
 *   zamek w Malborku,
 * — 1563 r. — przywilej Zygmunta Augusta na żeglugę rzeką
 *   Świętą (Tugą) do Gdańska; rzeka płynie przez centrum,
 * — kolegiata św. Mateusza, budowa od 1400 r.,
 * — cukrownia z 1878 r., czynna do 1996 r., dziś zabytek,
 * — mady żuławskie — najżyźniejsze gleby na Pomorzu.
 */
export const NOWY_STAW: CityContent = {
  slug: "nowy-staw",
  h1: "Thermomix Nowy Staw – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowy Staw (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowym Stawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Staw — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Stawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Stawu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Nowy Staw i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Burak nikomu nie smakuje mniej. Po prostu wszyscy się boją bałaganu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Stawie – jak wygląda prezentacja?",
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
      id: "buraki",
      heading: "Najżyźniejsze gleby na Pomorzu — czyli o buraku i o bałaganie",
      paragraphs: [
        "Wokół Nowego Stawu leżą mady żuławskie, najżyźniejsze gleby na Pomorzu. Miasto ma nietypowy podwójny rynek, a przez jego środek płynie rzeka Święta — już w 1563 roku Zygmunt August dał tutejszym kupcom przywilej żeglugi nią aż do Gdańska. Cechy rzeźników i tkaczy zaopatrywały zamek w Malborku. Stojąca do dziś neogotycka cukrownia z 1878 roku, zamknięta w 1996, jest dziś zabytkiem architektury przemysłowej, ale przypomina, co z tych pól przez sto lat jechało.",
        "Napiszę więc o buraku. O tym zwykłym, ćwikłowym, a nie o cukrowym z pola — to dwa różne warzywa, choć nazwa je myli.",
        "Burak ma w polskiej kuchni najgorszą opinię ze wszystkich warzyw i moim zdaniem całkowicie niesłusznie. Nikomu nie smakuje mniej niż marchewka. Ludzie unikają go z dwóch powodów: bo trzeba go długo gotować i bo po nim jest bałagan. Deska różowa, ręce różowe, ściereczka do wyrzucenia. To wszystko, żadnej głębszej niechęci.",
        "I dokładnie te dwa problemy sprzęt rozwiązuje, bo są to problemy mechaniczne, a nie kulinarne. Burak surowy startego na surówkę w kilkadziesiąt sekund. Burak gotowany przetarty na krem bez blendera i bez przelewania między naczyniami. Ćwikła. Chłodnik. Botwinka. Zupa krem. Wszystko w jednym zamkniętym naczyniu, więc bałagan po prostu nie wychodzi na blat.",
        "Teraz uczciwe „ale”, bo ono istnieje i wolę je powiedzieć teraz niż wysłuchać za miesiąc. Barwnik z buraka jest agresywny. Potrafi zabarwić silikonową uszczelkę i elementy z tworzywa — nie zawsze, nie od razu, ale potrafi. To nie psuje urządzenia i nie ma wpływu na jedzenie, natomiast jest to ślad, który bywa trwały. Jak dbać o urządzenie i czym je myć — od tego jest instrukcja producenta i tam odsyłam; ja tylko uprzedzam, że taka rzecz się zdarza.",
        "Drugie „ale”: nie doradzę Wam nic o zakwasie z buraków. To jest fermentacja, ma własne zasady i własne ryzyko, i tak samo jak przy kiszeniu nie będę udawać, że się na tym znam. Prawdziwy barszcz na Wigilię robi się na zakwasie nastawionym z wyprzedzeniem — i żadne urządzenie tego nie skróci.",
        "I trzecie, najkrótsze: nie napiszę Wam ani słowa o tym, że buraki są na cokolwiek dobre. Wiem, co się w internecie o nich pisze. Ja sprzedaję sprzęt kuchenny.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Stawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcesz zobaczyć, jak wygląda robota z burakiem bez różowego blatu — powiedz przy umawianiu, przywiozę je ze sobą.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Stawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowostawskiej rodziny",
      paragraphs: [
        "Nowy Staw liczy niecałe cztery tysiące mieszkańców, a cała gmina blisko siedem. Osadnictwo zaczęło się tu od przywileju z 1316 roku, wydanego przez wielkiego mistrza Karola z Trewiru, a prawa miejskie na prawie chełmińskim miasto otrzymało w 1343 roku. Charakterystyczny jest podwójny rynek i kolegiata świętego Mateusza, budowana od 1400 roku — dla porządku, bo przewodniki często się mylą: to nie jest kościół świętego Mikołaja. Przez centrum płynie rzeka Święta, a wokół leżą mady żuławskie, najżyźniejsze gleby na Pomorzu.",
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

  districtsHeading: "Do których części Nowego Stawu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do obu rynków, do zabudowy przy rzece i do osiedli na obrzeżach — oraz do wsi gminy Nowy Staw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowy Staw też przyjadę",
  nearbyParagraphs: [
    "Malbork, Nowy Dwór Gdański, Sztum, Dzierzgoń, Tczew i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Malbork", "Nowy Dwór Gdański", "Sztum", "Dzierzgoń", "Tczew"],

  about: blokOMnie("do Nowego Stawu", "w Nowym Stawie i na Żuławach", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Stawu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Nowy Staw w powiecie malborskim, a nie o wsie o tej nazwie w świętokrzyskim czy lubelskim, ani o Nowy Dwór Gdański.",
    },
    ...faqWspolne("w Nowym Stawie"),
    {
      question: "Czy urządzenie poradzi sobie z burakami?",
      answer:
        "Tak, i to jest jedno z warzyw, przy których widać różnicę najbardziej. Surowy burak starty na surówkę w kilkadziesiąt sekund, gotowany przetarty na krem bez blendera, ćwikła, chłodnik, botwinka — wszystko w jednym zamkniętym naczyniu, więc bałagan nie wychodzi na blat.",
    },
    {
      question: "Czy buraki zabarwią urządzenie?",
      answer:
        "Mogą. Barwnik z buraka potrafi zabarwić silikonową uszczelkę i elementy z tworzywa — nie zawsze i nie od razu, ale potrafi. Nie psuje to urządzenia ani jedzenia, natomiast ślad bywa trwały. Wolę uprzedzić przed zakupem. Jak dbać o sprzęt, mówi instrukcja producenta.",
    },
    {
      question: "Zrobię w nim barszcz na Wigilię?",
      answer:
        "Ugotujecie w nim barszcz, ale prawdziwy robi się na zakwasie nastawionym z wyprzedzeniem i tego żaden sprzęt nie skróci. O samym zakwasie nie doradzę — to fermentacja, ma własne ryzyko i osobną wiedzę.",
    },
  ],

  geo: { lat: 54.1361, lng: 19.0087 },
};
