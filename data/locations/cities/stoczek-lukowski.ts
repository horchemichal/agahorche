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
 * STOCZEK ŁUKOWSKI — 2 336 mieszkańców (31.12.2024), spadek o 14,7%
 * od 2002 r., 9,15 km². Działa tu zakład, który produkuje DANIA
 * GOTOWE W SŁOIKACH i dżemy — ok. 1 200 ton dżemów i ok. 6 000 ton
 * dań w słoikach rocznie, w grupie spółki notowanej na giełdzie.
 *
 * KĄT: gotowe danie ze słoika. Miasto, które te słoiki produkuje,
 * jest jedynym uczciwym miejscem na zdanie, którego sprzedawcy AGD
 * nie mówią: czasem słoik jest właściwą odpowiedzią i to urządzenie
 * tego nie zmieni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że są wieczory, kiedy nie ma siły gotować, i że to normalne,
 * — że kupienie gotowego dania nie jest porażką ani lenistwem,
 * — czego urządzenie NIE robi: nie doda energii, nie zaplanuje
 *   tygodnia, nie zrobi zakupów. Jeśli ktoś nie gotuje z braku sił,
 *   a nie z braku sprzętu, to sprzęt tego nie naprawi,
 * — co realnie zmienia: obniża próg wejścia w te dni, kiedy siła
 *   jest, ale mała — bo jedno naczynie i przepis krok po kroku
 *   wymagają mniej decyzji.
 *
 * TWARDE GRANICE:
 * — ŻADNEJ KRYTYKI dań gotowych, słoików ani konkretnych marek.
 *   Zasada z Mrągowa, tu doprowadzona do końca: w mieście, którego
 *   największy zakład robi dania w słoikach, powiedzenie „domowe
 *   jest lepsze" byłoby komentarzem do pracy sąsiadów. Strona jest
 *   po ich stronie.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań składu domowego
 *   i przemysłowego.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH WYLICZEŃ, ile taniej wychodzi gotować samemu.
 * — ŻADNEJ HISTORII WOJENNEJ ANI POWSTAŃCZEJ (bitwa 1831 itd.) —
 *   nie zbierałam nawet materiału.
 * — ŻADNEGO OCENIANIA ludzi, którzy nie gotują.
 *
 * ROZGRANICZENIE — WAŻNE, BO SĄSIEDZTWO BLISKIE:
 * — Ryki mają kąt „czego NIE warto robić w domu" (ser) — tam chodzi
 *   o granicę UMIEJĘTNOŚCI i skali. Tutaj o granicę SIŁ,
 * — Bychawa ma odwrotność Ryk (masło — warto robić samemu),
 * — Międzyrzec ma „zastępuje dwanaście urządzeń",
 * — Janów Lubelski ma „wprawa" (czego nie da się kupić).
 * Ta strona jest o czymś, czego żadna z nich nie mówi: o dniach,
 * w których po prostu nie ma siły, i o tym, że urządzenie nie jest
 * na to lekarstwem.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję roku utraty praw miejskich. Oficjalna strona miasta
 *   podaje 1867, a źródło akademickie 1869 — bez rozstrzygnięcia.
 *   W tekście jest opisowo: „po powstaniu styczniowym". Podaję
 *   pewne: lokacja 1546 r. (przywilej Zygmunta I Starego) i ODZYSKANIE
 *   PRAW W 1916 R., za okupacji niemieckiej — to nietypowa data
 *   i dlatego ją zostawiam,
 * — NIE podaję dnia lokacji (4 albo 5 kwietnia — źródła się różnią),
 * — HIPOTEZA O MALINACH OBALONA. Powiat łukowski NIE jest
 *   udokumentowanym zagłębiem owoców miękkich. Województwo lubelskie
 *   owszem, ale przenoszenie reputacji województwa na konkretny
 *   powiat to dokładnie ten błąd, który tępię gdzie indziej.
 *   W tekście nie ma ani słowa o uprawach,
 * — NIE twierdzę, że zakład przetwarza lokalny surowiec — tego nikt
 *   nie potwierdził,
 * — NIE podaję nazwy zakładu ani nazw marek. Zakład opisuję
 *   rzeczowo („zakład przetwórstwa owocowo-warzywnego"), bo strona
 *   ma być o zjawisku, nie o reklamie czyjejś firmy — a przy tym
 *   struktura właścicielska spółek się zmienia i tekst by się
 *   zestarzał,
 * — dane GUS o podmiotach gospodarczych są z 2019 r. i dlatego ich
 *   NIE UŻYWAM,
 * — dla powiatu łukowskiego NIE POTWIERDZIŁAM żadnego wpisu na
 *   Liście Produktów Tradycyjnych — więc nie ma o nich ani słowa,
 * — miasto NIE publikuje wykazu osiedli, więc districts to PUSTA
 *   TABLICA.
 *
 * PUŁAPKA NAZEWNICZA: miasto Stoczek Łukowski i GMINA WIEJSKA
 * Stoczek Łukowski to dwie odrębne jednostki — gmina ma siedzibę
 * w mieście, ale miasto do niej NIE należy. Rozdzielono je 1 stycznia
 * 1998 r. Jest też osobny STOCZEK w woj. mazowieckim (powiat
 * węgrowski). Każdą liczbę trzeba sprawdzać dwa razy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — zakład przetwórstwa owocowo-warzywnego działa tu od 1965 r.
 *   (produkcja od 1969), dziś w grupie spółki giełdowej; produkuje
 *   ok. 1 200 ton dżemów i ok. 6 000 ton dań w słoikach rocznie,
 * — 2 336 mieszkańców na 31.12.2024, miasto ma 9,15 km²,
 * — lokacja 1546 r., prawa odzyskane w 1916 r.,
 * — do Warszawy ok. 86 km, do Lublina ok. 110 km, do Łukowa ok. 34 km
 *   (odległości orientacyjne; czasów przejazdu NIE ZNALAZŁAM
 *   i ich nie podaję).
 */
export const STOCZEK_LUKOWSKI: CityContent = {
  slug: "stoczek-lukowski",
  h1: "Thermomix Stoczek Łukowski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stoczek Łukowski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Stoczku Łukowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stoczek Łukowski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stoczku Łukowskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stoczka Łukowskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Stoczek Łukowski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są wieczory, kiedy słoik jest właściwą odpowiedzią. Żaden sprzęt tego nie zmieni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stoczku Łukowskim – jak wygląda prezentacja?",
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
      id: "sloik",
      heading: "Miasto, które robi dania w słoikach — i wieczory, kiedy nie ma siły gotować",
      paragraphs: [
        "Stoczek Łukowski ma niecałe dwa i pół tysiąca mieszkańców i zakład przetwórstwa owocowo-warzywnego, który działa tu od lat sześćdziesiątych. Wychodzi z niego rocznie około tysiąca dwustu ton dżemów i sześciu tysięcy ton gotowych dań w słoikach. Sześć tysięcy ton obiadów, z małego miasta, do sklepów w całym kraju.",
        "To jest chyba najbardziej niewygodne miejsce w Polsce na sprzedawanie sprzętu do gotowania — i właśnie dlatego chcę tu napisać rzecz, której w tej branży się nie mówi.",
        "Są wieczory, kiedy nie ma siły gotować. Nie „brakuje pomysłu”, nie „nie ma czasu” — po prostu nie ma siły. Po dwunastu godzinach na nogach, po nieprzespanej nocy z dzieckiem, po dniu, w którym wszystko poszło źle. I w takie wieczory otwarcie słoika jest właściwą odpowiedzią. Nie porażką, nie lenistwem, nie czymś, czego trzeba się wstydzić. Właściwą odpowiedzią.",
        "Nie usłyszycie ode mnie, że domowe jest lepsze od tego, co robi tutejszy zakład. W mieście, w którym połowa znajomych może przy tym pracować, byłoby to komentarzem do cudzej roboty — a poza tym nie mam na to żadnego dowodu.",
        "Skoro tak, to trzeba powiedzieć uczciwie, czego to urządzenie NIE zrobi. Nie doda Wam energii. Nie zaplanuje tygodnia i nie zrobi zakupów. Jeśli ktoś nie gotuje dlatego, że jest wykończony, to sprzęt tego nie naprawi — i sprzedawanie go jako lekarstwa na zmęczenie byłoby po prostu nieuczciwe.",
        "Co więc realnie zmienia? Obniża próg w te dni, kiedy siła jest, ale niewielka. Bo gotowanie kosztuje nie tylko czasu — kosztuje decyzji. Ile czego, w jakiej kolejności, czy już mieszać, czy jeszcze nie, i te trzy garnki do umycia na końcu. Kiedy przepis prowadzi krok po kroku, a wszystko dzieje się w jednym naczyniu, tych decyzji jest po prostu mniej. I wtedy czasem starcza sił, żeby jednak ugotować — a nie zawsze.",
        "To jest cała obietnica i nie mam większej. Kto oczekuje, że urządzenie zmieni go w kogoś, kto gotuje codziennie z uśmiechem, ten się rozczaruje. Kto chce mieć trochę więcej wieczorów, w których gotowanie jest możliwe — u tego to działa.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stoczku Łukowskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Umówmy się na porę, o której naprawdę gotujecie — nie na sobotnie przedpołudnie, kiedy wszystko jest łatwe. Najwięcej zobaczycie w zwykły dzień, po pracy, kiedy sprawdza się to, co ma się sprawdzać codziennie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stoczku Łukowskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla stoczkowskiej rodziny",
      paragraphs: [
        "Stoczek Łukowski liczy nieco ponad dwa tysiące trzysta mieszkańców na dziewięciu kilometrach kwadratowych i od dwóch dekad ich ubywa. Do Warszawy jest stąd bliżej niż do Lublina — jakieś osiemdziesiąt kilka kilometrów wobec stu dziesięciu — więc część osób pracuje daleko i wraca późno.",
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

  districtsHeading: "Do których części Stoczka Łukowskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Stoczek Łukowski też przyjadę",
  nearbyParagraphs: [
    "Łuków, Adamów, Wola Mysłowska, Krzywda i Serokomla są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łuków", "Adamów", "Wola Mysłowska", "Krzywda", "Serokomla", "Garwolin"],

  about: blokOMnie("do Stoczka Łukowskiego", "w Stoczku Łukowskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Stoczka Łukowskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Stoczku Łukowskim"),
    {
      question: "Nie mam siły gotować po pracy. Czy to coś zmieni?",
      answer:
        "Częściowo i wolę powiedzieć to uczciwie. Urządzenie nie doda energii, nie zaplanuje tygodnia i nie zrobi zakupów — jeśli ktoś nie gotuje z wykończenia, sprzęt tego nie naprawi. Obniża natomiast próg w te dni, kiedy siła jest, ale niewielka: przepis prowadzi krok po kroku, wszystko dzieje się w jednym naczyniu, więc decyzji i zmywania jest mniej.",
    },
    {
      question: "Czy domowe jedzenie jest lepsze od gotowego ze słoika?",
      answer:
        "Nie będę tego oceniać — zwłaszcza w Stoczku, gdzie takie dania produkuje największy zakład w mieście. Są wieczory, kiedy otwarcie słoika jest właściwą odpowiedzią i nie ma w tym nic wstydliwego. Uczciwie mogę powiedzieć tylko tyle, że gotując sami, wiecie, co jest w środku, i możecie to zmienić pod siebie.",
    },
  ],

  geo: { lat: 51.9636, lng: 21.9694 },
};
