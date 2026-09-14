import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * SULĘCIN — gmina miejsko-wiejska, siedziba powiatu sulęcińskiego.
 * MIASTO 9 675, GMINA 14 971 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 8,6 km², GMINY 320,1 km².
 * 15 JEDNOSTEK POMOCNICZYCH: 14 SOŁECTW + 1 MIEJSCOWOŚĆ.
 *
 * ⚠⚠ PRAW MIEJSKICH NIE PODAJĘ. Dwa źródła wtórne mówią
 * o 1244 r., ale OFICJALNY SERWIS GMINY TEJ DATY NIE WYMIENIA
 * — podaje 1241 r. jako najstarszą wiadomość, gdy MROCZKO
 * Z POGORZELI osadził tu kolonistów. Obwarowania ok. 1375 r.
 * Piszę o 1241 r. jako o pierwszej wiadomości, bez roku praw.
 *
 * ⚠ JOANNICI władali Sulęcinem 1350–1810, czyli 460 lat.
 * Dom zakonny joannitów 1563 r.
 * ⚠ DOMU JOANNITÓW NIE DATUJĘ — sprzeczność (XVIII w.
 *   kontra 1563 r.; możliwe, że to dwa obiekty).
 * ⚠ SZPITALA JOANNITÓW NIE WYMIENIAM — zero wątków zdrowotnych.
 *
 * GEOGRAFIA: miasto w DOLINIE RZEKI POSTOMII. Okolica zwana
 * „SULĘCIŃSKĄ SZWAJCARIĄ", wzniesienie BUKOWIEC 227 m n.p.m.
 * ⚠ JEZIOR (Buszno, Trześniowskie, Ostrowskie) NIE PRZYPISUJĘ
 *   GMINIE — nie zweryfikowano, czy leżą w jej granicach.
 * Ponad 360 km szlaków rowerowych w gminie.
 *
 * TRADYCYJNE ZAJĘCIA MIASTA: ROLNICTWO, RZEMIOSŁO,
 * BROWARNICTWO I SUKIENNICTWO (dwa źródła zgodnie).
 * ⚠ O BROWARACH nie ma żadnych nazw, dat ani liczb —
 *   wymieniam browarnictwo tylko jako kategorię, JEDNYM
 *   SŁOWEM, bez rozwijania i BEZ ZACHĘTY DO ALKOHOLU.
 *
 * ⚠⚠ IMPREZY — PODSTAWA KĄTA:
 * „BARDZO TŁUSTY CZWARTEK" (marzec) — „spotkanie smakoszy
 * i miłośników pączków", impreza cykliczna. TO JEST KOTWICA.
 * „JESIENNY WIECZÓR DOBREGO SMAKU" (listopad) — konkurs
 * domowych przetworów, organizator Sulęciński Ośrodek Kultury;
 * w edycji z 19.11.2022 mieszkańcy zgłosili m.in. 39 słoiczków
 * dżemów i przetworów, oceniano smak, zapach i wygląd.
 * ⚠ NALEWEK I WIN Z TEGO KONKURSU NIE WYMIENIAM —
 *   ZERO ZACHĘTY DO ALKOHOLU. Piszę tylko o przetworach.
 * ⚠ NUMERU EDYCJI NIE PODAJĘ.
 * POLSKO-NIEMIECKI SULĘCIŃSKI JARMARK KOGUCI — XV edycja
 * 13 kwietnia 2025 r., tradycja od 2008 r.
 * DOŻYNKI GMINNE (sierpień), DNI SULĘCINA od 1994 r.
 * ⚠ „ROCK AND BEER FEST" POMIJAM — alkohol.
 * GOSPODARSTWO PSZCZELARSKIE w Sulęcinie działa od ponad
 * czterdziestu lat i było nagradzane w konkursie „Nasze
 * Kulinarne Dziedzictwo". ⚠ NAZWISK NIE PODAJĘ.
 * ⚠ KĄTA MIODOWEGO NIE UŻYWAM — „miód" ZAJĘTY.
 * ⚠ KĄTA PRZETWOROWEGO NIE UŻYWAM — „dżemy, konfitury
 *   i powidła" ZAJĘTE.
 *
 * ZABYTKI: gotycki kościół św. Mikołaja (XIV w.), mury obronne
 * (XIV w.), kościół św. Henryka (XIX w., neogotycki), RATUSZ
 * z 1851 r. Sulęciński Ośrodek Kultury, Sportu i Rekreacji;
 * Centrum Współpracy Polsko-Niemieckiej w Domu Joannitów.
 *
 * KĄT: SMAŻENIE W GŁĘBOKIM TŁUSZCZU — pączki, faworki
 * i wszystko, co pływa.
 * Kąt od „Bardzo Tłustego Czwartku", cyklicznego spotkania
 * miłośników pączków.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że smażenie w głębokim tłuszczu ma w domach złą sławę
 *   i że powód jest praktyczny, nie kulinarny: zapach,
 *   bałagan i pytanie, co potem zrobić z litrem tłuszczu,
 * — ŻE NAJWAŻNIEJSZA JEST TEMPERATURA TŁUSZCZU i że to
 *   jest jedyna rzecz, którą trzeba kontrolować,
 * — CO SIĘ DZIEJE, GDY JEST ZA ZIMNY: ciasto nasiąka
 *   i wychodzi tłuste — stąd cała zła reputacja pączków,
 * — CO SIĘ DZIEJE, GDY JEST ZA GORĄCY: ciemna skórka,
 *   surowy środek,
 * — ŻE WRZUCENIE ZBYT WIELU SZTUK NARAZ WYCHŁADZA TŁUSZCZ
 *   — i to jest najczęstszy błąd domowy, ważniejszy niż
 *   przepis,
 * — ŻE SMAŻY SIĘ PARTIAMI I TRZEBA NA TO CZASU,
 * — CZYM SMAŻYĆ: tłuszczem neutralnym i odpornym
 *   na wysoką temperaturę, nigdy tym o wyraźnym smaku,
 * — CO ROBIĆ PO: odsączać na kratce, nie na ręczniku
 *   papierowym, bo od spodu robi się para i skórka mięknie,
 * — ŻE FAWORKI, RACUCHY I PĄCZKI TO TA SAMA SZKOŁA i kto
 *   opanuje jedno, zrobi resztę,
 * — UCZCIWIE I MOCNO: ⚠ TO URZĄDZENIE NIE SMAŻY W GŁĘBOKIM
 *   TŁUSZCZU I NIGDY NIE BĘDZIE. Nie jest frytkownicą,
 *   nie jest patelnią i nie ma jak nią zostać,
 * — co natomiast robi w tej samej kuchni: wyrabia ciasto
 *   drożdżowe i przygotowuje nadzienia — czyli całą część
 *   przed smażeniem,
 * — i że uważam za uczciwe powiedzieć o tym wprost przed
 *   zakupem, a nie po.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ PRZY
 *   SMAŻENIU PODWÓJNIE: ZERO stopni Celsjusza, ZERO minut.
 *   Piszę jakościowo: „za zimny", „za gorący", „na tyle
 *   gorący, żeby ciasto od razu zaczęło pracować".
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO kalorii, ZERO cholesterolu, ZERO „smażone szkodzi",
 *   ZERO akrylamidu. Piszę WYŁĄCZNIE o smaku i technice.
 *   TWARDA GRANICA.
 * — ⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE POŻAROWYM
 *   I O GASZENIU TŁUSZCZU — to nie jest strona o tym
 *   i nie będę udzielać instrukcji ratunkowych.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO ZACHĘTY DO ALKOHOLU.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — Joannitów podaję jako fakt historyczno-własnościowy.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Smażyć czy piec" dotyczy
 * wyboru między dwiema obróbkami tej samej masy. „Panierka"
 * dotyczy trzech misek i otoczki. „Ciasto drożdżowe" dotyczy
 * wyrabiania i rozczynu. „Gofry" i „ciasto naleśnikowe”
 * dotyczą innych wypieków. „Oleje: który do czego"
 * (Szepietowo) dotyczą wyboru oleju. Tutaj chodzi o SMAŻENIE
 * W GŁĘBOKIM TŁUSZCZU jako o technikę i o temperaturę
 * tłuszczu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE DATUJĘ Domu Joannitów.
 * — NIE PRZYPISUJĘ gminie jezior.
 * — NIE PODAJĘ numeru edycji Jesiennego Wieczoru Dobrego Smaku.
 * — NIE WYMIENIAM nalewek ani win z tego konkursu.
 * — NIE OPISUJĘ browarów — brak konkretów.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ SULĘCINA z SULĘCZYNEM (pomorskie) ani
 *   z SULEJOWEM (łódzkie). FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko dziesięć tysięcy mieszkańców
 *   na 8,6 km², cała gmina blisko piętnaście tysięcy
 *   na 320,1 km², z czternastoma sołectwami,
 * — najstarsza zachowana wiadomość o Sulęcinie pochodzi
 *   z 1241 r., gdy Mroczko z Pogorzeli osadził tu kolonistów;
 *   obwarowania powstały około 1375 r., a joannici władali
 *   miastem od 1350 do 1810 r.,
 * — miasto leży w dolinie Postomii, a okolicę z powodu
 *   pagórków nazywa się „Sulęcińską Szwajcarią” — najwyższe
 *   wzniesienie, Bukowiec, ma 227 m n.p.m.; w gminie jest
 *   ponad 360 km szlaków rowerowych,
 * — tradycyjne zajęcia miasta to rolnictwo, rzemiosło,
 *   browarnictwo i sukiennictwo,
 * — do cyklicznych imprez należą „Bardzo Tłusty Czwartek”
 *   w marcu, opisywany jako spotkanie smakoszy i miłośników
 *   pączków, listopadowy „Jesienny Wieczór Dobrego Smaku”
 *   — konkurs domowych przetworów organizowany przez
 *   Sulęciński Ośrodek Kultury, w którym w 2022 r. oceniano
 *   trzydzieści dziewięć słoiczków za smak, zapach i wygląd
 *   — Polsko-Niemiecki Sulęciński Jarmark Koguci, urządzany
 *   od 2008 r., którego piętnasta edycja przypadła
 *   na 13 kwietnia 2025 r., sierpniowe dożynki gminne
 *   i Dni Sulęcina organizowane od 1994 r.,
 * — tutejsze gospodarstwo pszczelarskie działa od ponad
 *   czterdziestu lat i było nagradzane w konkursie „Nasze
 *   Kulinarne Dziedzictwo”,
 * — z zabytków: gotycki kościół świętego Mikołaja i mury
 *   obronne z XIV w., neogotycki kościół świętego Henryka
 *   z XIX w. oraz ratusz z 1851 r.; w Domu Joannitów mieści
 *   się Centrum Współpracy Polsko-Niemieckiej.
 */
export const SULECIN: CityContent = {
  slug: "sulecin",
  h1: "Thermomix Sulęcin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sulęcin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sulęcinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sulęcin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sulęcinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sulęcina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Sulęcin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tłuste pączki to nie wina przepisu, tylko za zimnego tłuszczu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sulęcinie – jak wygląda prezentacja?",
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
      id: "smazenie",
      heading: "Bardzo Tłusty Czwartek — czyli o smażeniu w głębokim tłuszczu",
      paragraphs: [
        "W sulęcińskim kalendarzu imprez jest pozycja, która mnie rozbraja: „Bardzo Tłusty Czwartek”, opisywany wprost jako spotkanie smakoszy i miłośników pączków. Jest też listopadowy „Jesienny Wieczór Dobrego Smaku”, na którym mieszkańcy przynoszą własne przetwory — w jednej z edycji oceniano trzydzieści dziewięć słoiczków, za smak, zapach i wygląd. Miasto ma do jedzenia stosunek poważny.",
        "Napiszę więc o technice, która w domach ma najgorszą sławę ze wszystkich: o smażeniu w głębokim tłuszczu. Co ciekawe, powody tej złej sławy są praktyczne, a nie kulinarne — zapach w mieszkaniu, bałagan i pytanie, co potem zrobić z litrem tłuszczu.",
        "Kulinarnie sprawa jest bowiem prosta i sprowadza się do jednej rzeczy: do temperatury tłuszczu. To jedyny parametr, który naprawdę trzeba kontrolować, i od niego zależy wszystko.",
        "Kiedy tłuszcz jest za zimny, ciasto nasiąka nim, zanim zdąży się zrumienić. Wychodzi ciężkie i tłuste — i stąd bierze się cała reputacja pączków jako czegoś nieprzyjemnie mokrego od tłuszczu. To nie jest wina przepisu ani mąki. To jest za zimny tłuszcz.",
        "Kiedy jest za gorący, dzieje się odwrotnie: skórka ciemnieje szybciej, niż środek zdąży się upiec. Pączek wygląda gotowy i jest surowy w środku, co człowiek odkrywa dopiero przy pierwszym gryzie.",
        "A teraz najczęstszy domowy błąd, ważniejszy niż jakikolwiek przepis: wrzucanie zbyt wielu sztuk naraz. Zimne ciasto gwałtownie wychładza tłuszcz i nagle smażymy w za zimnym — niezależnie od tego, jak dobrze było na początku. Smaży się więc partiami, po kilka sztuk, i trzeba na to po prostu czasu.",
        "Czym smażyć? Tłuszczem neutralnym w smaku i odpornym na wysoką temperaturę. Nigdy takim, który ma własny wyraźny zapach — on w wysokiej temperaturze i tak zniknie, a po drodze zostawi w cieście coś, czego nikt nie chciał.",
        "Drobiazg po smażeniu, który robi zaskakującą różnicę: odsączać na kratce, a nie na ręczniku papierowym. Na ręczniku pączek stoi we własnej parze i skórka od spodu mięknie w ciągu kilku minut. Na kratce powietrze chodzi dookoła i skórka zostaje taka, jaka była.",
        "I jeszcze jedno: faworki, racuchy i pączki to ta sama szkoła. Kto raz opanuje temperaturę tłuszczu, zrobi wszystkie trzy, bo cała reszta to już tylko różnice w cieście.",
        "Teraz uczciwie o sprzęcie — i tym razem będę bardzo stanowcza. Thermomix nie smaży w głębokim tłuszczu i nigdy nie będzie. Nie jest frytkownicą, nie jest patelnią i nie ma jak nią zostać. Jeśli ktoś Wam powie inaczej, to albo się myli, albo coś sprzedaje.",
        "Co natomiast robi w tej samej kuchni i przy tym samym cieście: wyrabia ciasto drożdżowe i przygotowuje nadzienia. Czyli całą część przed smażeniem — tę, która zajmuje najwięcej czasu i przy której najczęściej brakuje cierpliwości. Samo smażenie zostaje przy garnku i przy Tobie, i uważam za uczciwe powiedzieć to przed zakupem, a nie po.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sulęcinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu ktoś piecze. Jeśli tak, pokażę wyrabianie ciasta drożdżowego — to część, w której sprzęt naprawdę wyręcza.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sulęcinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sulęcińskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dziesięć tysięcy mieszkańców na niecałych dziewięciu kilometrach kwadratowych, a cała gmina blisko piętnaście tysięcy na trzystu dwudziestu, z czternastoma sołectwami. Najstarsza zachowana wiadomość o Sulęcinie pochodzi z 1241 roku, kiedy Mroczko z Pogorzeli osadził tu kolonistów; obwarowania powstały około 1375 roku, a joannici władali miastem od 1350 do 1810, czyli przez czterysta sześćdziesiąt lat. Miasto leży w dolinie Postomii, a okolicę z powodu pagórków nazywa się „Sulęcińską Szwajcarią” — najwyższe wzniesienie, Bukowiec, ma dwieście dwadzieścia siedem metrów; w gminie wytyczono ponad trzysta sześćdziesiąt kilometrów szlaków rowerowych. Tradycyjne zajęcia miasta to rolnictwo, rzemiosło, browarnictwo i sukiennictwo. Z imprez cyklicznych: marcowy „Bardzo Tłusty Czwartek”, listopadowy „Jesienny Wieczór Dobrego Smaku” — konkurs domowych przetworów Sulęcińskiego Ośrodka Kultury, w którym w 2022 roku oceniano trzydzieści dziewięć słoiczków za smak, zapach i wygląd — Polsko-Niemiecki Sulęciński Jarmark Koguci urządzany od 2008 roku, którego piętnasta edycja przypadła na 13 kwietnia 2025, sierpniowe dożynki gminne oraz Dni Sulęcina organizowane od 1994 roku. Tutejsze gospodarstwo pszczelarskie działa od ponad czterdziestu lat i było nagradzane w konkursie „Nasze Kulinarne Dziedzictwo”. Z zabytków zostały gotycki kościół świętego Mikołaja i mury obronne z XIV wieku, neogotycki kościół świętego Henryka oraz ratusz z 1851 roku; w Domu Joannitów mieści się Centrum Współpracy Polsko-Niemieckiej.",
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

  districtsHeading: "Do których części gminy Sulęcin dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Sulęcin też przyjadę",
  nearbyParagraphs: [
    "Torzym, Ośno Lubuskie, Lubniewice, Krzeszyce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Torzym", "Ośno Lubuskie", "Lubniewice", "Krzeszyce"],

  about: blokOMnie("do Sulęcina", "w Sulęcinie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sulęcina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Sulęcin w lubuskiem to nie Sulęczyno na Kaszubach ani Sulejów w łódzkiem.",
    },
    ...faqWspolne("w Sulęcinie"),
    {
      question: "Dlaczego domowe pączki wychodzą tłuste?",
      answer:
        "Bo tłuszcz był za zimny — ciasto nasiąka nim, zanim zdąży się zrumienić. Najczęstsza przyczyna to wrzucenie zbyt wielu sztuk naraz: zimne ciasto gwałtownie wychładza tłuszcz. Smaży się partiami, po kilka sztuk, i trzeba na to czasu.",
    },
    {
      question: "Na czym smażyć i jak odsączać?",
      answer:
        "Na tłuszczu neutralnym w smaku i odpornym na wysoką temperaturę — nigdy na takim o wyraźnym własnym zapachu. Odsączać na kratce, a nie na ręczniku papierowym: na ręczniku pączek stoi we własnej parze i skórka od spodu mięknie w kilka minut.",
    },
    {
      question: "Czy w Thermomixie da się usmażyć pączki?",
      answer:
        "Nie. To urządzenie nie smaży w głębokim tłuszczu i nigdy nie będzie — nie jest frytkownicą ani patelnią. Robi natomiast całą część przed smażeniem: wyrabia ciasto drożdżowe i przygotowuje nadzienia. Samo smażenie zostaje przy garnku.",
    },
  ],

  geo: { lat: 52.4442, lng: 15.1181 },
};
