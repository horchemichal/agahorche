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
 * MSZCZONÓW — powiat żyrardowski, woj. mazowieckie.
 * MIASTO 6 065 (GUS 31.12.2024), 8,6 km², 708,5 os./km².
 * Gmina: 11 277 osób, 152,0 km².
 * ⚠ CIEKAWE: miasto traci ludność, GMINA ROŚNIE (+3,3%
 *   w latach 2002–2024) — rzadkość. NIE EKSPONUJĘ SPADKU
 *   W MIEŚCIE.
 *
 * ⚠ NAZWA UNIKALNA W POLSCE — nie znaleziono homonimów.
 *   Uwaga na podstawienia wyszukiwarek:
 *   MSZCZONÓW ≠ MSZANA ≠ MSZANA DOLNA ≠ SZCZUCZYN.
 *   Odmiana: „do Mszczonowa", „w Mszczonowie", „mszczonowski".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — pierwsza wzmianka 1245 (dokument Konrada I Mazowieckiego),
 * — PRAWA MIEJSKIE 22 MARCA 1377 od Siemowita III,
 * — ⚠ MSZCZONÓW NIGDY NIE UTRACIŁ PRAW MIEJSKICH — rzadkość
 *   w tym regionie. TO JEST DOBRY, BEZPIECZNY FAKT.
 * — 1437 potwierdzenie na prawie chełmińskim; kolejne
 *   potwierdzenia: Zygmunt I, Zygmunt August, Jan III Sobieski,
 * — 1776 — Stanisław August zezwala na PIĘĆ JARMARKÓW ROCZNIE,
 * — przez trzy stulecia (XV–XVIII) siedziba powiatu w ziemi
 *   sochaczewskiej; miasto na TRAKCIE WARSZAWA–DREZNO.
 *
 * ⚠⚠ NIE UDAŁO SIĘ POTWIERDZIĆ ŻADNEJ SPECJALIZACJI
 *   CECHOWEJ ANI RZEMIEŚLNICZEJ MSZCZONOWA. Ani izba pamięci,
 *   ani PTTK nie podają cechów, młynów, garbarni ani
 *   sukiennictwa. ⚠ NIE WYMYŚLAM ICH. TWARDA GRANICA.
 *   Kąt stoi na IŁACH I KERAMZYCIE.
 *
 * ⚠⚠ PODSTAWA KĄTA — KOPALNIA IŁÓW:
 *   kopalnia iłów „Budy Mszczonowskie", ok. 20 ha, głębokość
 *   30 m; surowiec to IŁY PSTRE POZNAŃSKIE (kaolinit i illit),
 *   powstałe w trzeciorzędzie w rozległym SŁODKOWODNYM
 *   JEZIORZYSKU. Z iłu wypala się KERAMZYT — kruszywo, które
 *   w wysokiej temperaturze PĘCZNIEJE.
 *
 * DZIŚ (poza iłami): logistyka i magazyny przy skrzyżowaniu
 * S8 z drogą krajową 50; geotermia (odwiert ok. 1700 m, woda
 * 42°C, mineralizacja poniżej 1 g/dm³, zakład od 2000 r.);
 * produkcja światłowodów; termy i obiekty turystyczne.
 * ⚠ KĄT „TWARDA WODA" JEST ZAJĘTY (chelm.ts — wprost „jedyne
 *   miasto w całym serwisie"). GEOTERMIĘ PODAJĘ WYŁĄCZNIE
 *   JAKO FAKT W BLOKU O MIEŚCIE, BEZ ŻADNYCH WNIOSKÓW
 *   KUCHENNYCH O WODZIE. TWARDA GRANICA.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK wpisu z gminy
 *   Mszczonów. ⚠ PUŁAPKA OSTRA: syrop z mniszka (02.09.2021),
 *   napój z kwiatów czarnego bzu (12.06.2019) i herbatka
 *   z czarnego bzu (06.09.2017) pochodzą z gminy PUSZCZA
 *   MARIAŃSKA — tego samego powiatu żyrardowskiego,
 *   ale INNEJ GMINY. NIE WYMIENIAM ICH.
 * ⚠ W SAMYM MIEŚCIE BRAK OSIEDLI JAKO JEDNOSTEK
 *   POMOCNICZYCH (gmina ma 35 sołectw) — districts PUSTE.
 *
 * KĄT: PĘCZNIENIE — co rośnie od wody i ile miejsca zajmie
 * potem.
 * Kąt od keramzytu: iły spod Mszczonowa wypala się tak,
 * żeby kruszywo spęczniało. W kuchni pęcznienie działa
 * zupełnie inaczej — od wody, nie od ognia — i jest
 * najczęstszym powodem, dla którego danie „wyszło dziwne".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pod Mszczonowem wydobywa się ił, z którego wypala się
 *   kruszywo pęczniejące od ciepła — i że w kuchni jest
 *   dokładnie odwrotnie: pęcznieje się od wody,
 * — ŻE TO JEST NAJCZĘSTSZY BŁĄD W SZACOWANIU PORCJI:
 *   surowa garść i ugotowana garść to dwie różne objętości,
 * — KTÓRE SKŁADNIKI PĘCZNIEJĄ NAPRAWDĘ MOCNO: kasze, ryż,
 *   makaron, suche strączki, płatki owsiane, suszone grzyby,
 *   kuskus, siemię i nasiona chia, żelatyna i agar
 *   ⚠ BEZ ŻADNYCH PROPORCJI I KROTNOŚCI — nie podaję
 *   „ile razy", bo to zależy od surowca i od tego, jak długo
 *   stoi. TWARDA GRANICA,
 * — ⚠⚠ ŻE NAJWAŻNIEJSZE JEST TO, CO PĘCZNIEJE PO ZDJĘCIU
 *   Z OGNIA: zupa z makaronem albo z kaszą nazajutrz nie jest
 *   już zupą, bo składnik wypił rosół. TO JEST NAJBARDZIEJ
 *   UŻYTECZNA RZECZ W CAŁYM TEKŚCIE,
 * — ŻE ROZWIĄZANIE JEST PROSTE I STARE: makaron i kaszę
 *   do zupy, która ma stać, gotuje się OSOBNO i dodaje
 *   na talerzu,
 * — ŻE NAMACZANIE NIE JEST OZDOBNIKIEM — suchy strączek
 *   i tak pobierze wodę, pytanie tylko, czy zrobi to przed
 *   gotowaniem, czy w jego trakcie,
 * — ŻE SUSZONE GRZYBY PĘCZNIEJĄ NAJBARDZIEJ ZDRADLIWIE,
 *   bo garść suszu wygląda na nic, a po namoczeniu potrafi
 *   zdominować danie,
 * — UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia fizyki
 *   i nie powstrzyma pęcznienia. Ma jednak NACZYNIE
 *   O SKOŃCZONEJ POJEMNOŚCI, więc przy składnikach, które
 *   rosną, trzeba to policzyć NA POCZĄTKU, a nie w połowie.
 *   MÓWIĘ TO WPROST JAKO OGRANICZENIE.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ⚠⚠ ŻADNYCH PROPORCJI I KROTNOŚCI PĘCZNIENIA.
 *   Kąt „RYŻ — PROPORCJA" jest ZAJĘTY (malogoszcz.ts).
 *   TWARDA GRANICA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI — w tym
 *   ⚠ ZERO porad o namaczaniu strączków od strony
 *   zdrowotnej i o wodzie po namaczaniu. Mówię wyłącznie
 *   o OBJĘTOŚCI I KONSYSTENCJI. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 * — ŻADNYCH WNIOSKÓW KUCHENNYCH O WODZIE GEOTERMALNEJ.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO pożarów miasta, w szczególności pożaru z 1862 r.
 *   i zniszczenia zabudowy. TWARDA GRANICA.
 * — ZERO tematów wojennych i historii społeczności
 *   żydowskiej Mszczonowa; ZERO cmentarza żydowskiego.
 * — ⚠ ZERO tematu planowanych instalacji przetwarzania
 *   odpadów — to lokalnie konfliktowe i katastrofalne
 *   w sąsiedztwie tekstu o gotowaniu. TWARDA GRANICA.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „RYŻ" (Małogoszcz) dotyczy PROPORCJI PRZY JEDNYM
 *   SUROWCU. Tutaj NIE PODAJĘ ŻADNYCH PROPORCJI.
 * — „KASZA" (Dukla) dotyczy KASZY JAKO SUROWCA.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy TRZYMANIA ZAPASÓW
 *   W SZAFCE.
 * — „ZAGĘSZCZANIE" (Barczewo) dotyczy RATOWANIA DANIA,
 *   W KTÓRYM JEST ZA DUŻO PŁYNU.
 * — „CIASTO DROŻDŻOWE" (Wołczyn) i „DROŻDŻE" (Pasym)
 *   dotyczą WYRASTANIA OD DROŻDŻY, nie od wody.
 * TUTAJ chodzi o ZMIANĘ OBJĘTOŚCI od wody i o to,
 * że dzieje się ona także PO UGOTOWANIU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE WYMYŚLAM cechów ani rzemiosł Mszczonowa.
 * — NIE PODAJĘ proporcji ani krotności pęcznienia.
 * — NIE WYCIĄGAM wniosków kuchennych z geotermii.
 * — NIE PRZYPISUJĘ Mszczonowowi produktów z Puszczy
 *   Mariańskiej.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mszczonów liczy 6 065 mieszkańców (GUS, 31.12.2024)
 *   na 8,6 km², a cała gmina 11 277 osób na 152 km²,
 * — pierwsza wzmianka o Mszczonowie pochodzi z 1245 roku,
 *   prawa miejskie nadał mu w 1377 roku Siemowit III,
 *   a miasto nigdy ich nie utraciło; w 1437 roku
 *   potwierdzono je na prawie chełmińskim, a kolejne
 *   potwierdzenia wydawali Zygmunt I, Zygmunt August
 *   i Jan III Sobieski,
 * — w 1776 roku Stanisław August zezwolił na pięć jarmarków
 *   rocznie; przez trzy stulecia miasto było siedzibą
 *   powiatu w ziemi sochaczewskiej i leżało na trakcie
 *   Warszawa–Drezno,
 * — pod miastem działa kopalnia iłów „Budy Mszczonowskie"
 *   o powierzchni około dwudziestu hektarów i głębokości
 *   trzydziestu metrów; wydobywa się w niej iły pstre
 *   poznańskie, powstałe w trzeciorzędzie w rozległym
 *   słodkowodnym jeziorzysku, z których wypala się keramzyt,
 * — miasto ma własny zakład geotermalny, działający
 *   od 2000 roku i korzystający z odwiertu o głębokości
 *   około tysiąca siedmiuset metrów.
 */
export const MSZCZONOW: CityContent = {
  slug: "mszczonow",
  h1: "Thermomix Mszczonów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mszczonów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mszczonowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mszczonów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mszczonowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mszczonowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mszczonów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zupa z makaronem nazajutrz nie jest już zupą — makaron wypił rosół.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mszczonowie – jak wygląda prezentacja?",
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
      id: "pecznienie",
      heading: "Co rośnie od wody — i ile miejsca zajmie potem",
      paragraphs: [
        "Pod Mszczonowem, w kopalni „Budy Mszczonowskie”, wydobywa się z dwudziestu hektarów i z trzydziestu metrów głębokości iły pstre poznańskie — osad, który powstał w trzeciorzędzie na dnie wielkiego słodkowodnego jeziorzyska. Wypala się z nich keramzyt: kruszywo, które w wysokiej temperaturze pęcznieje i dzięki temu jest lekkie.",
        "W kuchni pęcznienie działa dokładnie odwrotnie. Nie od ognia, tylko od wody. I jest to, moim zdaniem, najczęstszy powód, dla którego danie „wyszło dziwne”, choć nikt nie potrafi powiedzieć, co poszło nie tak.",
        "Zaczyna się od szacowania porcji. Surowa garść i ugotowana garść to dwie zupełnie różne objętości, a wyobraźnia podpowiada tę pierwszą. Stąd garnek kaszy, którego nikt nie zje, i makaron wysypujący się z sitka. Nie podam tu żadnych przeliczników, bo one zależą od surowca i od tego, jak długo potem stoi — ale warto raz w życiu zrobić to świadomie i zapamiętać, ile czego rzeczywiście się sypie.",
        "Mocno rosną od wody kasze, ryż, makaron, suche strączki, płatki owsiane, kuskus, suszone grzyby, siemię i nasiona chia. Osobno zachowują się żelatyna i agar, które najpierw wodę pobierają, a potem ją unieruchamiają.",
        "Ale najważniejsze jest co innego i to jest właściwie jedyna rzecz, którą warto z tej strony zapamiętać: pęcznienie nie kończy się w momencie zdjęcia z ognia.",
        "Zupa z makaronem albo z kaszą nazajutrz nie jest już zupą. Składnik przez noc wypił rosół i został gęsty kleik, który trzeba rozcieńczać — a rozcieńczona zupa nigdy nie smakuje tak jak wczoraj, bo razem z wodą wraca się do połowy smaku. To samo dzieje się z ryżem w gulaszu i z płatkami zalanymi mlekiem na później.",
        "Rozwiązanie jest proste i stare jak świat: jeśli zupa ma stać, makaron i kaszę gotuje się osobno i dodaje dopiero na talerzu. Trochę więcej mycia, za to zupa nazajutrz jest tą samą zupą.",
        "Przy suchych strączkach namaczanie też nie jest ozdobnikiem ani tradycją dla tradycji. Suchy strączek i tak pobierze wodę — pytanie brzmi tylko, czy zrobi to spokojnie przed gotowaniem, czy w jego trakcie, kosztem czasu i równości.",
        "A najbardziej zdradliwe są suszone grzyby. Garść suszu wygląda na nic i łatwo sypnąć „trochę więcej”, a po namoczeniu potrafi zdominować całe danie — i objętością, i smakiem, który jest wtedy dużo mocniejszy niż przy świeżych.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zmienia fizyki i niczego nie powstrzyma — to, co ma spęcznieć, spęcznieje tak samo jak w garnku.",
        "Jest natomiast jedna rzecz, o której trzeba wiedzieć wcześniej: naczynie ma skończoną pojemność. Przy składnikach, które rosną, liczy się to na początku, a nie w połowie gotowania, bo w połowie jest już za późno na przekładanie. To nie jest wada urządzenia, tylko cecha każdego naczynia — ale przy garnku widać ją gołym okiem, a tutaj trzeba o niej pomyśleć.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mszczonowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was jedzenie często stoi do następnego dnia, bo domownicy jedzą o różnych porach — powiedzcie to przy umawianiu. Dobiorę dania, które to znoszą.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mszczonowie"),
    sekcjaRaty("w Mszczonowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla mszczonowskiej rodziny",
      paragraphs: [
        "Mszczonów liczy nieco ponad sześć tysięcy mieszkańców na niespełna dziewięciu kilometrach kwadratowych, a cała gmina ponad jedenaście tysięcy osób na stu pięćdziesięciu dwóch kilometrach. Pierwsza wzmianka o mieście pochodzi z 1245 roku, prawa miejskie nadał mu w 1377 roku Siemowit III — i Mszczonów nigdy ich nie utracił, co w tej części Mazowsza jest rzadkością. W 1437 roku potwierdzono je na prawie chełmińskim, a kolejne potwierdzenia wydawali Zygmunt I, Zygmunt August i Jan III Sobieski. W 1776 roku Stanisław August zezwolił na pięć jarmarków rocznie; przez trzy stulecia miasto było siedzibą powiatu w ziemi sochaczewskiej i leżało na trakcie Warszawa–Drezno. Pod miastem działa kopalnia iłów „Budy Mszczonowskie” o powierzchni około dwudziestu hektarów i głębokości trzydziestu metrów, w której wydobywa się iły pstre poznańskie, powstałe w trzeciorzędzie na dnie rozległego słodkowodnego jeziorzyska. Mszczonów ma też własny zakład geotermalny, działający od 2000 roku i korzystający z odwiertu o głębokości około tysiąca siedmiuset metrów.",
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

  districtsHeading: "Do których części Mszczonowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic rynku po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie, w tym do Osuchowa, Wręczy, Lutkówki i Piekar.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mszczonów też przyjadę",
  nearbyParagraphs: [
    "Żyrardów, Radziejowice, Puszcza Mariańska, Grodzisk Mazowiecki, Grójec, Tarczyn i Skierniewice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żyrardów", "Grodzisk Mazowiecki", "Grójec", "Skierniewice"],

  about: blokOMnie("do Mszczonowa", "w Mszczonowie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mszczonowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — od Osuchowa i Wręczy po Lutkówkę i Piekary. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mszczonowie"),
    {
      question: "Dlaczego zupa z makaronem nazajutrz jest gęsta jak kleik?",
      answer:
        "Bo makaron nie przestaje pobierać wody po zdjęciu garnka z ognia — przez noc wypija rosół. Rozcieńczanie nie pomaga, bo razem z wodą wraca się do połowy smaku. Jeśli zupa ma stać, makaron albo kaszę gotuje się osobno i dodaje dopiero na talerzu.",
    },
    {
      question: "Czy Thermomix rozwiązuje problem składników, które rosną?",
      answer:
        "Nie — pęcznienie zachodzi w nim dokładnie tak samo jak w garnku, bo to zwykła fizyka. Trzeba natomiast pamiętać, że naczynie ma skończoną pojemność, więc przy kaszy, ryżu czy strączkach warto policzyć porcję na początku, a nie w połowie gotowania.",
    },
  ],

  geo: { lat: 51.9742, lng: 20.5267 },
};
