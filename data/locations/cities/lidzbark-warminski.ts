import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * LIDZBARK WARMIŃSKI — gmina MIEJSKA w powiecie lidzbarskim.
 * MIASTO 14 366 (GUS 31.12.2024), 14,4 km².
 * ⚠ ISTNIEJE OSOBNA GMINA WIEJSKA LIDZBARK WARMIŃSKI:
 * 6 430 osób, 372,1 km². Miasto nie ma sołectw.
 *
 * ⚠⚠ NAJGROŹNIEJSZA POMYŁKA W CAŁYM WOJEWÓDZTWIE:
 * LIDZBARK WARMIŃSKI (pow. lidzbarski) to NIE JEST LIDZBARK
 * (pow. działdowski) — dwa odrębne miasta w TYM SAMYM
 * województwie. FAQ MUSI to rozróżniać. Lidzbark dostanie
 * własną stronę.
 *
 * PRAWA MIEJSKIE 12 SIERPNIA 1308 r., biskup warmiński
 * EBERHARD Z NYSY, prawo chełmińskie, zasadźca Jan z Kolonii.
 * 1350 — biskup Jan z Miśni przenosi tu STOLICĘ DIECEZJI
 * WARMIŃSKIEJ (wcześniej Braniewo, od 1341 Orneta).
 * ZAMEK BISKUPÓW WARMIŃSKICH: budowa murowana od 1348 r.
 * (bp Herman z Pragi), ukończona ok. 1401 r. (bp Henryk
 * Sorbom). Jeden z najlepiej zachowanych zamków
 * średniowiecznych w Polsce. DZIAŁA jako oddział Muzeum
 * Warmii i Mazur.
 * OBALONE: zamek NIE JEST krzyżacki — to zamek BISKUPÓW.
 * MIKOŁAJ KOPERNIK mieszkał na zamku OD 1503 r. i napisał tu
 * część „De revolutionibus".
 * Miasto u UJŚCIA SYMSARNY DO ŁYNY.
 * ZABYTKI: kolegiata św. Piotra i Pawła (XIV w.), Wysoka
 * Brama (XV w.), mury obronne (XIV w.), kościół Podwyższenia
 * Krzyża (barok, XVIII w.), ORANŻERIA KRASICKIEGO (XVIII w.),
 * ratusz neogotycki (XIX w.), pałac Grabowskiego.
 * CYKLICZNIE: Wieczory Humoru i Satyry, Starcia Kabaretowe.
 *
 * IGNACY KRASICKI — biskup warmiński, satyryk, autor bajek
 * i „Monachomachii"; po nim oranżeria i pomnik w mieście.
 * DAT JEGO POSŁUGI NIE PODAJĘ — nie potwierdzono.
 *
 * KĄT: SZCZERA OCENA WŁASNEGO GOTOWANIA — jak poprosić
 * domowników o prawdę i co z nią zrobić. Kąt od Krasickiego
 * (satyra) i od miasta, które co roku organizuje przeglądy
 * kabaretowe: miejsca, w którym śmiech z siebie jest
 * instytucją.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że domownicy prawie nigdy nie mówią prawdy o jedzeniu,
 *   bo nie chcą zrobić przykrości — i że „dobre” nie jest
 *   informacją,
 * — że pytanie „smakowało?" jest źle postawione i że lepsze
 *   są pytania rozstrzygalne: czego było za mało, co byś
 *   zmienił, czy zrobić to jeszcze raz,
 * — że najcenniejszą informacją jest to, CZEGO NIE DOJEDZONO
 *   — talerz mówi więcej niż komplement,
 * — że nowe urządzenie zniekształca oceny w obie strony:
 *   przez pierwsze tygodnie rodzina chwali z uprzejmości
 *   albo krytykuje z nieufności,
 * — że własne podniebienie jest sędzią stronniczym, bo
 *   próbowaliście dania dziesięć razy w trakcie,
 * — że warto zapytać jedną osobę spoza domu,
 * — i ODMOWA: nie oceniam cudzego gotowania i nie mówię
 *   nikomu, że gotuje źle.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD dotyczących relacji rodzinnych wykraczających
 *   poza kuchnię — nie jestem od tego.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani niczego o dzieciach
 *   „niejadkach" w kontekście medycznym. ODMOWA W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta. Jest ona dodatkowo
 *   obciążona: pod tą nazwą działała w latach 1933–1945
 *   niemiecka rozgłośnia państwowa.
 * — ZERO roku 1945 i zniszczeń.
 * — ZERO wysiedleń i akcji „Wisła".
 * — BITWA z 1807 r.: o inscenizacji jako wydarzeniu
 *   kulturalnym można, o samej bitwie NIE PISZĘ.
 * — ZERO twierdzeń zdrowotnych o obiektach termalnych;
 *   o samych obiektach też nie piszę, bo nie potwierdzono
 *   ich statusu.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Danie nie wyszło i nie
 * wiadomo dlaczego" dotyczy diagnozy technicznej. „Porady
 * z grup internetowych" dotyczą cudzych opinii w sieci.
 * „Jak to wygląda na zdjęciu, a jak na talerzu" (Frampol)
 * dotyczy wyglądu. „Wprawa" dotyczy nabywania umiejętności.
 * Tutaj chodzi o INFORMACJĘ ZWROTNĄ od ludzi, którzy to jedzą.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ statusu Pomnika Historii dla zamku — brak
 *   potwierdzenia w Dz.U.
 * — NIE PISZĘ o termach ani o rzece „Elmie" (prawdopodobny
 *   błąd w źródłach obcojęzycznych).
 * — NIE PODAJĘ dat posługi Ignacego Krasickiego.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 14 366 mieszkańców; osobna gmina wiejska liczy
 *   6 430 osób,
 * — prawa miejskie 12 sierpnia 1308 r. od biskupa warmińskiego
 *   Eberharda z Nysy, na prawie chełmińskim,
 * — w 1350 r. przeniesiono tu stolicę diecezji warmińskiej,
 * — zamek biskupów warmińskich budowany od 1348 r., ukończony
 *   ok. 1401 r.; jeden z najlepiej zachowanych zamków
 *   średniowiecznych w Polsce; mieści oddział Muzeum Warmii
 *   i Mazur,
 * — Mikołaj Kopernik mieszkał na zamku od 1503 r. i napisał
 *   tu część „De revolutionibus",
 * — miasto leży u ujścia Symsarny do Łyny,
 * — zabytki: kolegiata św. Piotra i Pawła, Wysoka Brama,
 *   mury obronne, oranżeria Krasickiego, ratusz neogotycki,
 * — cyklicznie odbywają się tu Wieczory Humoru i Satyry oraz
 *   Starcia Kabaretowe.
 */
export const LIDZBARK_WARMINSKI: CityContent = {
  slug: "lidzbark-warminski",
  h1: "Thermomix Lidzbark Warmiński – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lidzbark Warmiński — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Lidzbarku Warmińskim: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lidzbark Warmiński — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lidzbarku Warmińskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lidzbarka Warmińskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi wokół niego.",

  highlights: highlightyStandardowe("Lidzbark Warmiński i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Dobre” nie jest informacją. Talerz mówi więcej niż komplement.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lidzbarku Warmińskim – jak wygląda prezentacja?",
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
      id: "szczera-ocena",
      heading: "Miasto satyryka i kabaretów — czyli jak poznać, czy naprawdę smakowało",
      paragraphs: [
        "Lidzbark Warmiński dostał prawa miejskie 12 sierpnia 1308 roku od biskupa warmińskiego Eberharda z Nysy, a w 1350 przeniesiono tu stolicę diecezji warmińskiej. Zamek biskupów — nie krzyżacki, wbrew temu, co powtarza pół przewodników — budowano od 1348 do około 1401 roku i jest dziś jednym z najlepiej zachowanych zamków średniowiecznych w Polsce; mieszkał w nim od 1503 roku Mikołaj Kopernik i napisał tu część swojego dzieła. Po jednym z późniejszych biskupów, Ignacym Krasickim, została w mieście oranżeria — a Krasicki był przede wszystkim satyrykiem. Może dlatego do dziś odbywają się tu Wieczory Humoru i Satyry oraz Starcia Kabaretowe. Miasto, w którym śmiech z samego siebie jest instytucją.",
        "To najlepsze miejsce, żeby napisać o czymś, o czym nie pisze się nigdy: jak dowiedzieć się, czy Wasze gotowanie naprawdę komuś smakuje.",
        "Bo domownicy prawie nigdy nie mówią prawdy. Nie ze złej woli — przeciwnie, z dobrej. Nie chcą zrobić przykrości komuś, kto właśnie spędził godzinę w kuchni. Dlatego mówią „dobre”. A „dobre” nie jest informacją. To uprzejmość, którą można powiedzieć o wszystkim, łącznie z rzeczami, których nikt nie chce dostać po raz drugi.",
        "Problem zaczyna się od pytania. „Smakowało?” to pytanie zamknięte, na które grzeczna odpowiedź jest tylko jedna. Znacznie więcej dowiecie się z pytań, na które nie da się odpowiedzieć uprzejmym skinieniem: czego było za mało? co byś zmienił? gdybyś miał wybierać, wolałbyś to czy tamto? robić to jeszcze raz w tym miesiącu? Ostatnie jest najlepsze, bo jest rozstrzygalne.",
        "Ale najuczciwszą informację i tak dostajecie bez pytania. To talerz. Co zostało, czego nikt nie dobrał, po co sięgnięto pierwsze, a co zostało na sam koniec. Talerze nie są uprzejme i nie oszczędzają niczyich uczuć — dlatego warto na nie patrzeć zamiast pytać.",
        "Nowe urządzenie w kuchni zniekształca te oceny w obie strony i warto o tym wiedzieć zawczasu. Przez pierwsze tygodnie część rodziny będzie chwalić wszystko, bo widzi, że się staracie i że wydaliście na to pieniądze. A część odwrotnie — będzie krytyczna z nieufności do maszyny, bo z góry uznała, że „z maszyny to nie to samo”. Żadna z tych reakcji nie mówi nic o jedzeniu.",
        "Jest jeszcze jeden sędzia stronniczy i to Wy. Kto próbował dania dziesięć razy w trakcie gotowania, ten do niego przywyka: nie czuje już soli, nie czuje, że coś dominuje, nie odbiera pierwszego wrażenia, bo je zużył. Dlatego czasem najlepszą oceną jest zdanie jednej osoby spoza domu, która to je pierwszy raz.",
        "I moja granica: nie ocenię Wam Waszego gotowania i nikomu nie powiem, że gotuje źle. Przyjeżdżam pokazać urządzenie, a nie egzaminować kogoś we własnej kuchni. Jeśli poprosicie mnie o zdanie o konkretnej rzeczy, powiem je szczerze — ale sama z siebie nie zaczynam takiej rozmowy i nie uważam, żeby to była moja rola.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lidzbarku Warmińskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Zaproście na spotkanie tych, którzy będą to jedzenie jeść. Prezentacja przy komplecie ma sens, bo pytanie „czy to nam się przyda” rozstrzyga się przy stole, a nie przy urządzeniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lidzbarku Warmińskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lidzbarskiej rodziny",
      paragraphs: [
        "Miasto liczy ponad czternaście tysięcy mieszkańców; osobną jednostką jest gmina wiejska Lidzbark Warmiński z blisko sześcioma i pół tysiąca osób. Prawa miejskie nadał miastu 12 sierpnia 1308 roku biskup warmiński Eberhard z Nysy, a od 1350 roku była tu stolica diecezji warmińskiej. Miasto leży u ujścia Symsarny do Łyny. Najważniejszy zabytek to zamek biskupów warmińskich z lat 1348–1401, w którym mieści się oddział Muzeum Warmii i Mazur; obok zachowały się kolegiata świętych Piotra i Pawła z czternastego wieku, Wysoka Brama z piętnastego, fragmenty murów obronnych, barokowa oranżeria Krasickiego i neogotycki ratusz.",
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

  districtsHeading: "Do których części Lidzbarka Warmińskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi leżących wokół niego, w gminie wiejskiej Lidzbark Warmiński. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Lidzbark Warmiński też przyjadę",
  nearbyParagraphs: [
    "Orneta, Dobre Miasto, Bartoszyce, Jeziorany, Bisztynek i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Orneta", "Dobre Miasto", "Jeziorany", "Bisztynek", "Górowo Iławeckie"],

  about: blokOMnie("do Lidzbarka Warmińskiego", "w Lidzbarku Warmińskim i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Lidzbarka Warmińskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi wokół niego. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga na bardzo częstą pomyłkę: Lidzbark Warmiński w powiecie lidzbarskim to zupełnie inne miasto niż Lidzbark w powiecie działdowskim, choć oba leżą w województwie warmińsko-mazurskim. Do obu przyjeżdżam, ale to dwie różne trasy.",
    },
    ...faqWspolne("w Lidzbarku Warmińskim"),
    {
      question: "Jak sprawdzić, czy jedzenie naprawdę smakowało domownikom?",
      answer:
        "Nie pytaniem „smakowało?”, bo grzeczna odpowiedź jest tylko jedna. Lepsze są pytania rozstrzygalne: czego było za mało, co byś zmienił, robić to jeszcze raz w tym miesiącu. A najuczciwszą informację i tak daje talerz — co zostało i po co sięgnięto pierwsze.",
    },
    {
      question: "Dlaczego rodzina inaczej ocenia jedzenie po zakupie nowego sprzętu?",
      answer:
        "Bo nowe urządzenie zniekształca oceny w obie strony. Część domowników chwali wszystko, widząc, że się staracie i że wydaliście pieniądze. Część jest odwrotnie krytyczna, bo z góry uznała, że „z maszyny to nie to samo”. Żadna z tych reakcji nie mówi nic o samym jedzeniu.",
    },
    {
      question: "Czy ocenisz moje gotowanie na prezentacji?",
      answer:
        "Nie i nie uważam, żeby to była moja rola. Przyjeżdżam pokazać urządzenie, a nie egzaminować kogoś we własnej kuchni. Jeśli zapytacie mnie wprost o konkretną rzecz, odpowiem szczerze — ale sama takiej rozmowy nie zaczynam.",
    },
  ],

  geo: { lat: 54.1249, lng: 20.586 },
};
