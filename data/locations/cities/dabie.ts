import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * DĄBIE — powiat kolski, woj. wielkopolskie.
 * ⚠⚠⚠ NAZWA POWTARZALNA W CAŁEJ POLSCE — rejestr
 *   musiał dopisać województwo do adresu karty gminy.
 *   ⚠⚠⚠ KONKRETNYCH INNYCH DĄB NIE WYMIENIAM —
 *   nie zweryfikowano [NP]. MÓWIĘ OGÓLNIE I ZALECAM
 *   DOPISYWANIE POWIATU.
 *   ⚠⚠⚠ FIGURY Z KONIECZNOŚCI DOPISANIA WOJEWÓDZTWA
 *   NIE ROBIĘ — kąt „jedno pole to za mało" ZAJĘTY
 *   (Osieczna). WSPOMINAM TYLKO W SEKCJI ADRESOWEJ.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3009044 / 3009043).
 * MIASTO: 1 694 mieszkańców (GUS 31.12.2024),
 *   8,8 km², gęstość 192,5 os./km².
 *   ⚠ [ZW — 1 694 / 8,8 = 192,50. Różnica 0,00.
 *   DOMKNIĘCIE IDEALNE. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   WYSOKOŚĆ: 91 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 5 687 osób, 130,3 km², gęstość
 *   44 os./km².
 *   ⚠ [ZW — 5 687 / 130,3 = 43,65. Różnica 0,35.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 32. ⚠⚠⚠ LICZBY SOŁECTW NIE USTALONO
 *   [NP] — NIE PODAJĘ I NIE PISZĘ „wszystkie sołectwa".
 *   W LEADZIE I W SEKCJI ADRESOWEJ MÓWIĘ
 *   O MIEJSCOWOŚCIACH.
 *   ⚠⚠ OBRĘBÓW (26) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   ⚠⚠ LESISTOŚCI NIE USTALONO [NP].
 *   MIEJSCOWOŚCI (część): Chełmno, Tarnówka, Grabina
 *   Mała, Grabina Wielka, Zalesie.
 *   ⚠⚠⚠ RÓŻNICY ZAPISÓW MIĘDZY REJESTRAMI
 *   („Chełmno Wieś" / „Chełmno", „Tarnówka Duża" /
 *   „Tarnówka") NIE UŻYWAM — kąt „cztery rejestry,
 *   cztery liczby" ZAJĘTY (Kleczew), a wątek nazw
 *   sąsiaduje z Sompolnem.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * PRAWA MIEJSKIE: 1423 R.
 *   ⚠⚠ STOI NA JEDNYM ŹRÓDLE — PODAJĘ, ale bez
 *   rozwijania i bez nadawcy.
 * RZEKA: NER. ⚠⚠⚠ TO RDZEŃ KĄTA.
 *   Ner wpływa na teren województwa wielkopolskiego
 *   dopiero w tej gminie.
 *   ⚠⚠ URZĄD UŻYWA FORMY „W DĄBIU NAD NEREM",
 *   choć rejestr zna wyłącznie „Dąbie".
 *   ⚠⚠⚠ FIGURY Z TEGO DOPISKU NIE ROBIĘ — kąt
 *   „nazwa nadana przegrała z używaną" ZAJĘTY
 *   (Sompolno). WSPOMINAM JEDNYM ZDANIEM JAKO FAKT.
 * ⚠ GEO: 52,0872 / 18,8224.
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   D. do DĄBIA · Ms. w DĄBIU · N. Dąbiem ·
 *   C. Dąbiu.
 *   ⚠ POTWIERDZENIA: „mieszkańców Dąbia", „w Dąbiu",
 *   „ratusze w Dąbiu, Kłodawie i Przedczu".
 *   ⚠⚠ BŁĘDY: nieodmienianie („do Dąbie"),
 *   „w Dąbiem".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — niepotwierdzony [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ODCINEK, NA KTÓRYM NAPRAWDĘ
 *   DECYDUJESZ:
 *   NER WPŁYWA NA TEREN WIELKOPOLSKI DOPIERO W GMINIE
 *   DĄBIE. Cała droga tej rzeki przed tym punktem
 *   przebiega poza województwem — to, co tu przypływa,
 *   zostało uformowane gdzie indziej.
 *   MIASTO, KTÓRE DO WŁASNEJ NAZWY DOPISUJE „NAD
 *   NEREM", OPISUJE SIĘ WIĘC RZEKĄ, KTÓREJ WIĘKSZOŚĆ
 *   JEST POZA JEGO ZASIĘGIEM.
 *   ⚠⚠ NIE PODAJĘ DŁUGOŚCI NERU ANI PROCENTÓW —
 *   nie ustalono. MÓWIĘ OPISOWO.
 *   ⚠⚠ NIE TWIERDZĘ NICZEGO O JAKOŚCI WODY
 *   ANI O ŚRODOWISKU.
 *
 * KĄT: ODCINEK, NA KTÓRYM NAPRAWDĘ DECYDUJESZ
 * — o tym, że większość tego, co trafia na stół,
 * powstała poza Waszą kuchnią, a wy odpowiadacie
 * za ostatni odcinek. Kąt z Dąbia: rzeka, która
 * wpływa do województwa dopiero tutaj.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Ner wpływa na teren województwa dopiero
 *   w gminie Dąbie, a jego wcześniejsza droga
 *   przebiega poza nim. TO JEST RDZEŃ,
 * — że urząd używa formy „w Dąbiu nad Nerem",
 *   choć rejestr zna samo „Dąbie",
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: mąka jest już
 *   zmielona, mięso porcjowane, warzywa umyte,
 *   przyprawa zmieszana. Kuchnia to ostatni odcinek,
 *   nie cała droga,
 * — ⚠⚠ ŻE TO NIE JEST ZARZUT — tak wygląda każde
 *   normalne gotowanie i nikt nie zaczyna od pola,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wiedzieć, na którym
 *   odcinku naprawdę decydujecie, i tam wkładać
 *   wysiłek. Przy większości dań to jest wybór
 *   składnika, a nie sposób obróbki,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: przesuwanie granicy
 *   „do siebie" ma sens tylko wtedy, gdy różnica jest
 *   odczuwalna. Robienie wszystkiego od zera bywa
 *   pracą dla samej pracy,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie przesuwa tę
 *   granicę — pozwala robić w domu rzeczy kupowane
 *   dotąd gotowe. ⚠⚠⚠ ALE NIE KAŻDE PRZESUNIĘCIE SIĘ
 *   OPŁACA I MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TO, CO ROZSTRZYGA, LEŻY POZA KUCHNIĄ —
 *   kąt zajęty (Obrzycko). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o MOMENT DECYZJI (co kupić); tu o TO, ILE PRACY
 *   zostało już wykonane, zanim produkt trafił
 *   do domu. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ — kąt
 *   zajęty (Sompolno). DLATEGO DOPISEK „NAD NEREM"
 *   PODAJĘ JAKO FAKT, BEZ FIGURY.
 * — ⚠⚠⚠ ZERO JEDNO POLE TO ZA MAŁO — kąt zajęty
 *   (Osieczna).
 * — ⚠⚠ ZERO POŁĄCZONE W JEDEN UKŁAD — kąt zajęty
 *   (Ślesin).
 * — ⚠⚠ ZERO NAJSTARSZY ŚLAD W CUDZYCH PAPIERACH —
 *   kąt zajęty (Raszków).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠⚠⚠ KĄT DOTYCZY
 *   PRODUKTÓW GOTOWYCH — NIE WYMIENIAM ŻADNEJ MARKI
 *   ANI SKLEPU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ TU RYZYKO
 *   PODWYŻSZONE: NIE PISZĘ, ŻE DOMOWE JEST ZDROWSZE
 *   OD KUPNEGO. ANI SŁOWA O SKŁADZIE, DODATKACH
 *   CZY PRZETWORZENIU.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYICHŚ WYBORÓW ZAKUPOWYCH.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW I POWODZI ·
 *   ZERO BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO WĄTKU
 *   ŚRODOWISKOWEGO I JAKOŚCI WODY.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw ani lesistości.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ długości Neru ani żadnych procentów.
 * — NIE PISZĘ o jakości wody ani o środowisku.
 * — NIE WYMIENIAM innych miejscowości o nazwie Dąbie.
 * — NIE OPISUJĘ różnic zapisu nazw między rejestrami.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PISZĘ, że domowe jest lepsze albo zdrowsze
 *   od kupnego.
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Dąbie leży w powiecie kolskim, liczy 1 694
 *   mieszkańców (GUS, 31.12.2024) na 8,8 km², czyli
 *   192,5 osoby na kilometr kwadratowy, i leży 91 m
 *   n.p.m.,
 * — cała gmina miejsko-wiejska to 5 687 osób
 *   na 130,3 km², czyli 44 osoby na kilometr
 *   kwadratowy, przy 32 miejscowościach,
 * — prawa miejskie miasto otrzymało w 1423 r.,
 * — Ner wpływa na teren województwa wielkopolskiego
 *   dopiero w gminie Dąbie,
 * — urząd używa formy „w Dąbiu nad Nerem", choć
 *   rejestr zna wyłącznie nazwę „Dąbie",
 * — w gminie leżą m.in. Chełmno, Tarnówka, Grabina
 *   Mała, Grabina Wielka i Zalesie.
 */
export const DABIE: CityContent = {
  slug: "dabie",
  h1: "Thermomix Dąbie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dąbie — cena i prezentacja",
  seoDescription:
    "Thermomix w Dąbiu w powiecie kolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dąbie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dąbiu nad Nerem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dąbia w powiecie kolskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzydziestu dwóch miejscowości w gminie.",

  highlights: highlightyStandardowe("Dąbie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rzeka wpływa do województwa dopiero tutaj. Reszta drogi jest gdzie indziej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dąbiu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "ostatni-odcinek",
      heading: "Odcinek, na którym naprawdę decydujesz",
      paragraphs: [
        "Ner wpływa na teren województwa wielkopolskiego dopiero w gminie Dąbie. Cała wcześniejsza droga tej rzeki przebiega poza województwem — to, co tu przypływa, zostało uformowane gdzie indziej.",
        "Ciekawe jest to, że miasto samo dopisuje sobie tę rzekę do nazwy. Urząd używa formy „w Dąbiu nad Nerem”, choć rejestr zna wyłącznie „Dąbie”. Miejsce opisuje się więc rzeką, której większość jest poza jego zasięgiem.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że o obiedzie w środę decyduje sobotni koszyk — tam chodziło o moment, w którym zapada decyzja. Tutaj chodzi o coś innego: o to, ile pracy zostało już wykonane, zanim cokolwiek trafiło do Waszego domu.",
        "Piszę o tym, bo kuchnia jest ostatnim odcinkiem, a nie całą drogą, i łatwo o tym zapomnieć.",
        "Mąka jest już zmielona. Mięso porcjowane. Warzywa umyte, a często obrane i pokrojone. Przyprawa zmieszana przez kogoś innego. Bulion odparowany. Zanim cokolwiek stanie na Waszym blacie, ktoś wykonał na tym kilkanaście czynności, których nie widzieliście.",
        "To nie jest zarzut i nie zamierzam z tego robić morału. Tak wygląda każde normalne gotowanie — nikt nie zaczyna obiadu od pola i nie ma powodu, żeby zaczynał. Rzecz w tym, żeby wiedzieć, na którym odcinku naprawdę coś od Was zależy.",
        "A zależy zwykle mniej, niż nam się wydaje, i w innym miejscu. Przy większości domowych dań o wyniku rozstrzyga wybór składnika, a nie sposób obróbki. Jeśli coś ma wyjść lepiej, najczęściej trzeba zmienić to, co kładziecie na blat, a nie to, co potem z tym robicie. Ruch jest więc jeden: włożyć wysiłek w ten jeden odcinek, na którym naprawdę decydujecie, i odpuścić sobie resztę.",
        "Uczciwie o drugiej stronie, bo przesuwanie granicy „do siebie” ma swoje granice. Robienie wszystkiego od zera bywa pracą dla samej pracy — jeśli nie czujecie różnicy, to jej nie ma, i nie ma też powodu, żeby ktokolwiek sobie ją wmawiał. Warto przesuwać tę granicę tylko tam, gdzie różnica jest dla Was odczuwalna.",
        "I uczciwie o sprzęcie, bo Thermomix właśnie tę granicę przesuwa. Pozwala robić w domu część rzeczy, które dotąd kupowaliście gotowe — zmielić, utrzeć, wymieszać, odparować. Ale nie każde takie przesunięcie się opłaca: czasem zajmuje więcej czasu, niż daje, i wtedy mówię o tym wprost, zamiast namawiać. Na prezentacji zwykle pokazuję jedną rzecz z tej kategorii i pytam, czy widzicie sens robić ją u siebie.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dąbiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dąbiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Dąbia",
      paragraphs: [
        "Dąbie leży w powiecie kolskim, liczy 1 694 mieszkańców (GUS, 31.12.2024) na ośmiu i ośmiu dziesiątych kilometra kwadratowego, czyli sto dziewięćdziesiąt dwie i pół osoby na kilometr kwadratowy, i leży dziewięćdziesiąt jeden metrów nad poziomem morza. Cała gmina miejsko-wiejska to 5 687 osób na stu trzydziestu i trzech dziesiątych kilometra kwadratowego, czyli czterdzieści cztery osoby na kilometr, przy trzydziestu dwóch miejscowościach; liczby sołectw nie udało mi się ustalić, więc jej nie podaję. Prawa miejskie miasto otrzymało w 1423 roku. Przez gminę płynie Ner — i to właśnie tutaj rzeka wpływa na teren województwa wielkopolskiego.",
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

  districtsHeading: "Do których części gminy Dąbie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu dwóch miejscowości w gminie — między innymi do Chełmna, Tarnówki, Grabiny Małej, Grabiny Wielkiej i Zalesia. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: nazwa Dąbie powtarza się w Polsce na tyle często, że ogólnopolskie rejestry musiały dopisywać do niej województwo — przy umawianiu najlepiej powiedzieć „Dąbie w powiecie kolskim” albo po prostu „Dąbie nad Nerem”, tak jak mówi o sobie tutejszy urząd. W gminie są też osobno Grabina Mała i Grabina Wielka, a nazwa Zalesie występuje również w sąsiedniej gminie Przedecz. Druga, językowa: to rzeczownik rodzaju nijakiego, więc mówi się „do Dąbia” i „w Dąbiu”, a nie „do Dąbie”.",
  ],
  districts: [],

  nearbyHeading: "Poza Dąbie też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Koła, Kłodawy, Przedcza, Turku, Uniejowa i Sompolna — wszędzie bezpłatnie, tak samo jak w samym Dąbiu.",
  ],
  nearbyTowns: ["Koło", "Kłodawa", "Przedecz", "Turek", "Uniejów", "Sompolno"],

  about: blokOMnie("do Dąbia", "w Dąbiu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dąbia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu dwóch miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga przy umawianiu: nazwa Dąbie powtarza się w Polsce często, więc najlepiej powiedzieć „Dąbie w powiecie kolskim” albo „Dąbie nad Nerem”, tak jak mówi o sobie tutejszy urząd. Językowo: „do Dąbia” i „w Dąbiu”, a nie „do Dąbie”.",
    },
    ...faqWspolne("w Dąbiu"),
    {
      question: "Czy warto robić w domu to, co można kupić gotowe?",
      answer:
        "Tylko tam, gdzie różnica jest dla Was odczuwalna — i to jest cała odpowiedź. Warto pamiętać, że kuchnia jest ostatnim odcinkiem, a nie całą drogą: mąka jest już zmielona, warzywa umyte, przyprawa wymieszana przez kogoś innego. Dąbie jest tu dobrym obrazem, bo Ner wpływa na teren województwa dopiero w tej gminie — a miasto i tak dopisuje sobie tę rzekę do nazwy. Przy większości domowych dań o wyniku rozstrzyga wybór składnika, a nie sposób obróbki, więc tam warto wkładać wysiłek. Robienie wszystkiego od zera bywa natomiast pracą dla samej pracy: jeśli nie czujecie różnicy, to jej nie ma.",
    },
    {
      question: "Które rzeczy naprawdę opłaca się robić w Thermomixie zamiast kupować?",
      answer:
        "Te, które ręcznie zajmują dużo czasu albo wymagają pilnowania — mielenie, ucieranie, dokładne mieszanie przy stałej temperaturze, odparowywanie. Urządzenie przesuwa granicę między tym, co kupujecie gotowe, a tym, co robicie u siebie. Ale nie każde przesunięcie się opłaca i nie będę udawać, że jest inaczej: część rzeczy zajmie Wam więcej czasu, niż da, i wtedy lepiej ich nie przenosić do domu. Na prezentacji zwykle pokazuję jedną taką rzecz i pytam wprost, czy widzicie sens robić ją u siebie — to uczciwszy test niż lista możliwości.",
    },
  ],

  geo: { lat: 52.0872, lng: 18.8224 },
};
