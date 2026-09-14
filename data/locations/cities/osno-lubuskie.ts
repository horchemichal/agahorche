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
 * OŚNO LUBUSKIE — gmina miejsko-wiejska w powiecie słubickim.
 * MIASTO 3 870, GMINA 6 129 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 8,0 km², GMINY 197,7 km².
 * ⚠⚠ LICZBY SOŁECTW NIE PODAJĘ — TRZY RÓŻNE WERSJE
 *   (11 / 13 / 15), a jedno źródło przeczy samo sobie.
 * W rolnictwie pracuje 7,3% zatrudnionych.
 *
 * ⚠ HOMONIMY: OŚNO LUBUSKIE to JEDYNE Ośno z prawami
 * miejskimi. Pozostałe (Ośno w powiecie aleksandrowskim,
 * żnińskim, koło Janowca Wielkopolskiego, Ośno Górne,
 * Ośno Drugie) to WSIE. FAQ to rozróżnia.
 * Nazwa niemiecka: Drossen.
 *
 * PIERWSZA WZMIANKA 1252 r., jako „civitas forensi Osna"
 * (dwa źródła). PRAWA MIEJSKIE 1282 r., nadane przez biskupów
 * lubuskich — pierwszym wójtem był Dzierżko z Chycin.
 * ⚠ Jedno źródło podaje ostrożniejsze „przed 1347" — to nie
 *   jest sprzeczne logicznie. Piszę 1282, za przewagą źródeł.
 * PRAWO BICIA MONETY 1369 r. (dwa źródła). Starostwo krajowe
 * od 1447 r.
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW NIE PODAJĘ — brak wzmianek.
 *
 * GEOGRAFIA: 28 km od granicy. JEZIORO RECZYNEK (40 ha)
 * przylega do miasta od północy i ma ogólnodostępną plażę.
 * W okolicy JEDENAŚCIE JEZIOR POLODOWCOWYCH. Rzeka ŁĘCZA.
 * LASY TO BLISKO POŁOWA POWIERZCHNI GMINY; krajobraz wzgórz
 * morenowych. Obszar chroniony „UROCZYSKO OŚNIAŃSKICH JEZIOR"
 * — 2 305 ha, dziewięć jezior. Okolica nazywana „BŁĘKITNĄ
 * KRAINĄ".
 *
 * ⚠⚠ KONWALIE — PODSTAWA KĄTA:
 * Na przełomie XIX i XX w. Ośno zasłynęło z UPRAWY CEBULEK
 * KONWALII MAJOWEJ. Miasto zyskało przydomek „KONWALIOWEGO
 * MIASTA", a producentów nazywano „KONWALIOWYMI KRÓLAMI".
 * ⚠ LICZBY 6–7 MLN CEBULEK ROCZNIE NIE PODAJĘ — jedno źródło.
 *   Piszę „miliony cebulek rocznie na rynek europejski
 *   i amerykański" — jakościowo.
 * ⚠ NIE TWIERDZĘ, że konwalia jest symbolem miasta ani
 *   że istnieje rezerwat konwalii — niepotwierdzone.
 * ⚠⚠ SZPARAGI I PORZECZKI: przedwojenne Drossen miało też
 * plantacje kwiatów, SZPARAGÓW I PORZECZEK — ⚠ TO JEDNO
 * ŹRÓDŁO. Podaję to Z WYRAŹNYM ZASTRZEŻENIEM („według
 * dostępnych przekazów"), nigdy jako fakt twardy.
 * Historyczna gospodarka: sukiennictwo, tkactwo, piwowarstwo
 * i handel; miasto miało młyny, cegielnie i warsztaty.
 * ⚠⚠ LICZBY „857 WARZELNI PIWA W 1565 r." NIE UŻYWAM —
 *   nieprawdopodobna, jedno źródło. Piszę tylko, że miasto
 *   było ośrodkiem piwowarskim (dwa źródła), BEZ ZACHĘTY
 *   DO ALKOHOLU.
 * ⚠ DAT JARMARKÓW NIE PODAJĘ — źródła przypisują rok 1584
 *   różnym przywilejom.
 *
 * DOŻYNKI GMINNE — edycja 5 września 2026 r. na stadionie
 * przy ul. Sportowej: msza, KOROWÓD RETRO, prezentacje
 * sołectw, STOISKA KÓŁ GOSPODYŃ WIEJSKICH z domowymi
 * pierogami, ciastami, PAJDĄ CHLEBA i wyrobami wędliniarskimi.
 * ⚠ O „DNIACH OŚNA" NIE PISZĘ — brak jakichkolwiek danych.
 *
 * ZABYTKI: KOŚCIÓŁ ŚW. JAKUBA APOSTOŁA — budowę rozpoczęto
 * w 1298 r., najstarszy obiekt miasta; ołtarz renesansowy
 * 1627, ambona 1619, chrzcielnica 1667. MURY OBRONNE
 * długości ok. 1 350 m z dwunastoma basztami.
 * ⚠ DATOWANIA MURÓW NIE PODAJĘ — 1477 kontra ogólne „XV w.".
 * RATUSZ NEOGOTYCKI z lat 1842–1844. KAPLICA ŚW. GERTRUDY.
 * ⚠ KAPLICY NIE DATUJĘ — XIV kontra XV w.
 * Średniowieczne kościoły w Gronowie, Połęcku, Siennie,
 * Świniarach i Radachowie.
 * ⚠ HIPOTEZA UZDROWISKA W OŚNIE — SPRAWDZONA I ODRZUCONA.
 *   ZERO wątków zdrowotnych.
 *
 * KĄT: SZPARAGI — warzywo o najkrótszym sezonie i najgorszej
 * prasie.
 * Kąt od miasta, które żyło z uprawy na eksport — konwalii,
 * a według dostępnych przekazów także szparagów i porzeczek.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że szparagi mają w Polsce opinię warzywa drogiego,
 *   trudnego i „nie dla nas", a wszystkie trzy rzeczy
 *   są nieprawdziwe,
 * — ŻE SEZON JEST KRÓTKI — kilka tygodni wiosną — i że to
 *   jest jedyna prawdziwa trudność,
 * — RÓŻNICA BIAŁE KONTRA ZIELONE: białe rosną pod ziemią,
 *   są łagodniejsze i TRZEBA JE OBRAĆ; zielone rosną
 *   na świetle, mają wyraźniejszy smak i obierania prawie
 *   nie wymagają,
 * — WNIOSEK DLA ZACZYNAJĄCEGO: zacząć od zielonych, bo przy
 *   nich nie da się popełnić głównego błędu,
 * — ŻE GŁÓWNYM BŁĘDEM JEST PRZEGOTOWANIE: szparag gotuje się
 *   bardzo krótko i z jędrnego robi się nijaki w jednej
 *   chwili,
 * — ŻE KOŃCÓWEK SIĘ NIE ODKRAWA NA OKO — łodyga sama pęka
 *   w miejscu, w którym przestaje być łykowata,
 * — ŻE SZPARAG LUBI TRZY RZECZY I NIC WIĘCEJ: tłuszcz,
 *   kwas i jajko; wszystko poza tym mu przeszkadza,
 * — ŻE UPIECZONE SĄ ŁATWIEJSZE NIŻ GOTOWANE i to jest droga
 *   dla kogoś, kto boi się je zepsuć,
 * — ŻE OBIERKI I TWARDE KOŃCE SĄ WARTE WYWARU — to najlepsza
 *   rzecz, jaką można z nich zrobić, a ląduje w koszu,
 * — ŻE KUPUJE SIĘ JE PO ZAPACHU I SZTYWNOŚCI, nie po
 *   grubości — cienkie nie są lepsze od grubych, są po prostu
 *   inne,
 * — UCZCIWIE: urządzenie ich nie obierze, a przy białych
 *   to jest cała robota,
 * — ale gotowanie na parze i sos podawany do szparagów to
 *   dokładnie te dwie rzeczy, w których wypada dobrze —
 *   a przegotowanie, główne zagrożenie, znika, gdy temperatura
 *   jest pilnowana.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠ PRZY SZPARAGACH
 *   KUSI, ŻEBY PODAĆ MINUTY — NIE PODAJĘ. Piszę „bardzo
 *   krótko", „krócej, niż się wydaje".
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO witamin, ZERO
 *   „oczyszczanie", ZERO diety. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI CEN W ZŁOTÓWKACH.
 * — ZERO ZACHĘTY DO ALKOHOLU przy wątku piwowarskim.
 * — ZERO snobizmu — piszę, że to zwykłe warzywo o krótkim
 *   sezonie, nie delikates dla wybranych.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Poza sezonem" dotyczy
 * dziewięciu miesięcy bez konkretnego owocu. „Sezon" dotyczy
 * podziału roku. „Warzywa liściaste" (Drezdenko), „kalafior
 * i brokuł" (Bytom Odrzański) i „warzywa, które wypadły
 * z użycia" (Rzepin) dotyczą innych warzyw. „Gotowanie
 * na parze" (Nowogród Bobrzański) dotyczy obróbki. „Obierki,
 * skórki i łodygi" dotyczą odpadków jako tematu ogólnego.
 * Tutaj chodzi o SZPARAGI: o krótki sezon, o różnicę między
 * białymi a zielonymi i o jeden błąd, który je psuje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ liczby cebulek konwalii ani liczby warzelni.
 * — SZPARAGI I PORZECZKI podaję z zastrzeżeniem „według
 *   dostępnych przekazów".
 * — NIE DATUJĘ murów ani kaplicy świętej Gertrudy.
 * — NIE PISZĘ o „Dniach Ośna" ani o uzdrowisku.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko cztery tysiące mieszkańców na 8 km²,
 *   cała gmina ponad sześć tysięcy na 197,7 km²,
 * — pierwsza wzmianka pochodzi z 1252 r. i brzmi „civitas
 *   forensi Osna”; prawa miejskie nadali w 1282 r. biskupi
 *   lubuscy, a pierwszym wójtem był Dzierżko z Chycin;
 *   w 1369 miasto otrzymało prawo bicia monety, a od 1447
 *   było siedzibą starostwa krajowego,
 * — do miasta przylega od północy Jezioro Reczynek o powierzchni
 *   czterdziestu hektarów, z ogólnodostępną plażą; w okolicy
 *   jest jedenaście jezior polodowcowych, płynie Łęcza, lasy
 *   zajmują blisko połowę powierzchni gminy, a dziewięć jezior
 *   obejmuje obszar chroniony „Uroczysko Ośniańskich Jezior”
 *   liczący 2 305 ha; okolicę nazywa się „Błękitną Krainą”,
 * — na przełomie XIX i XX w. Ośno zasłynęło z uprawy cebulek
 *   konwalii majowej — zyskało przydomek „konwaliowego miasta”,
 *   a tutejszych producentów nazywano „konwaliowymi królami”;
 *   miliony cebulek rocznie trafiały na rynek europejski
 *   i amerykański. Według dostępnych przekazów przed wojną
 *   uprawiano tu także szparagi i porzeczki. Historycznie
 *   miasto żyło z sukiennictwa, tkactwa, piwowarstwa i handlu,
 *   miało młyny, cegielnie i warsztaty rzemieślnicze,
 * — dożynki gminne odbywają się na stadionie przy ulicy
 *   Sportowej — edycja z 5 września 2026 r. obejmowała mszę,
 *   korowód retro, prezentacje sołectw i stoiska kół gospodyń
 *   wiejskich z domowymi pierogami, ciastami, pajdą chleba
 *   i wyrobami wędliniarskimi,
 * — budowę kościoła świętego Jakuba Apostoła rozpoczęto
 *   w 1298 r. — to najstarszy obiekt miasta, z renesansowym
 *   ołtarzem z 1627, amboną z 1619 i chrzcielnicą z 1667;
 *   mury obronne mają około 1 350 metrów długości i dwanaście
 *   baszt, a neogotycki ratusz wzniesiono w latach 1842–1844;
 *   średniowieczne kościoły zachowały się też w Gronowie,
 *   Połęcku, Siennie, Świniarach i Radachowie.
 */
export const OSNO_LUBUSKIE: CityContent = {
  slug: "osno-lubuskie",
  h1: "Thermomix Ośno Lubuskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ośno Lubuskie — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Ośnie Lubuskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ośno Lubuskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ośnie Lubuskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ośna Lubuskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Ośno Lubuskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Szparag przechodzi z jędrnego w nijaki w jednej chwili.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ośnie Lubuskim – jak wygląda prezentacja?",
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
      id: "szparagi",
      heading: "Konwaliowe miasto — czyli o uprawie na eksport i o szparagach",
      paragraphs: [
        "Na przełomie XIX i XX wieku Ośno zasłynęło z czegoś nieoczywistego: z uprawy cebulek konwalii majowej. Miasto zyskało przydomek „konwaliowego”, tutejszych producentów nazywano „konwaliowymi królami”, a miliony cebulek rocznie jechały stąd na rynek europejski i amerykański. Według dostępnych przekazów uprawiano tu przed wojną także kwiaty, szparagi i porzeczki.",
        "Ten ostatni trop jest dla mnie najciekawszy, bo szparag to warzywo, które ma w Polsce najgorszą prasę ze wszystkich. Uchodzi za drogie, trudne i „nie dla nas” — a żadna z tych trzech rzeczy nie jest prawdą.",
        "Prawdziwa trudność jest tylko jedna: sezon trwa kilka tygodni wiosną i tyle. Kto go przegapi, czeka rok. To wszystko, co w szparagach jest naprawdę kłopotliwe.",
        "Zacznijmy od rozróżnienia, które porządkuje resztę. Białe szparagi rosną pod ziemią, przez co są łagodniejsze w smaku — i trzeba je obrać, bo skórka jest łykowata. Zielone rosną na świetle, mają wyraźniejszy, trawiasty smak i obierania praktycznie nie wymagają.",
        "Dla kogoś, kto próbuje pierwszy raz, wniosek jest prosty: zacząć od zielonych. Przy nich nie da się popełnić błędu z obieraniem, a błąd z obieraniem zniechęca najskuteczniej.",
        "Główny błąd jest jednak inny i dotyczy obu rodzajów: przegotowanie. Szparag gotuje się bardzo krótko — krócej, niż podpowiada odruch — i przechodzi z jędrnego w nijaki dosłownie w jednej chwili. Nie ma tu marginesu, do jakiego przyzwyczaiły nas ziemniaki.",
        "Drobiazg, którego uczą wszystkie kuchnie, a którego u nas się nie mówi: twardych końcówek nie odkrawa się na oko. Łodygę wystarczy złapać za oba końce i zgiąć — pęknie sama dokładnie tam, gdzie przestaje być łykowata.",
        "Szparag lubi trzy rzeczy i nic poza nimi: tłuszcz, kwas i jajko. Masło, oliwa, cytryna, jajko w dowolnej postaci. Wszystko inne — mocne przyprawy, ciężkie sosy, dużo czosnku — po prostu go przykrywa, a płaci się za to za dużo, żeby go przykrywać.",
        "Kto boi się je zepsuć, powinien piec, a nie gotować. Upieczone są bardziej wybaczające, a smak robi się głębszy. To najlepsza droga na pierwszy raz.",
        "I rzecz, która idzie do kosza, a nie powinna: obierki i twarde końce są znakomite na wywar. Delikatny, wyraźnie szparagowy — to najlepszy sposób, żeby z drogiego warzywa wyciągnąć wszystko, a kosztuje tylko trochę uwagi.",
        "Przy zakupie warto kierować się zapachem i sztywnością, a nie grubością. Szparag ma być prężny i pachnieć świeżo, a cienki nie jest lepszy od grubego — jest po prostu inny i szybciej się gotuje.",
        "Teraz uczciwie o sprzęcie. Thermomix nie obierze szparagów, a przy białych to jest właściwie cała robota — obieraczka i Twoje ręce, nic więcej.",
        "Robi natomiast dwie rzeczy, które przy tym warzywie liczą się najbardziej. Gotuje na parze w temperaturze, która nie skacze — a ponieważ jedynym realnym zagrożeniem jest tu przegotowanie, pilnowana temperatura znaczy więcej niż cokolwiek innego. I robi sosy: holenderski, maślany, jajeczny — czyli dokładnie to, co szparagom towarzyszy od zawsze.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ośnie Lubuskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy lubicie sosy do warzyw. Jeśli tak, pokażę je na miejscu — to jedna z rzeczy, w których urządzenie wypada najlepiej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ośnie Lubuskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ośnieńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców na ośmiu kilometrach kwadratowych, a cała gmina ponad sześć tysięcy na stu dziewięćdziesięciu siedmiu. Pierwsza wzmianka pochodzi z 1252 roku i brzmi „civitas forensi Osna”; prawa miejskie nadali w 1282 biskupi lubuscy, a pierwszym wójtem był Dzierżko z Chycin. W 1369 miasto otrzymało prawo bicia monety, a od 1447 było siedzibą starostwa krajowego. Do miasta przylega od północy Jezioro Reczynek o powierzchni czterdziestu hektarów, z ogólnodostępną plażą; w okolicy jest jedenaście jezior polodowcowych, płynie Łęcza, lasy zajmują blisko połowę powierzchni gminy, a dziewięć jezior obejmuje obszar chroniony „Uroczysko Ośniańskich Jezior” liczący ponad dwa tysiące trzysta hektarów — okolicę nazywa się „Błękitną Krainą”. Na przełomie XIX i XX wieku Ośno zasłynęło z uprawy cebulek konwalii majowej, zyskując przydomek „konwaliowego miasta”, a miliony cebulek rocznie trafiały na rynek europejski i amerykański; historycznie miasto żyło z sukiennictwa, tkactwa, piwowarstwa i handlu, miało młyny, cegielnie i warsztaty rzemieślnicze. Dożynki gminne odbywają się na stadionie przy ulicy Sportowej, z korowodem retro, prezentacjami sołectw i stoiskami kół gospodyń wiejskich. Budowę kościoła świętego Jakuba Apostoła rozpoczęto w 1298 roku — to najstarszy obiekt miasta, z renesansowym ołtarzem z 1627, amboną z 1619 i chrzcielnicą z 1667; mury obronne mają około tysiąca trzystu pięćdziesięciu metrów i dwanaście baszt, a neogotycki ratusz wzniesiono w latach 1842–1844.",
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

  districtsHeading: "Do których części gminy Ośno Lubuskie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Ośno Lubuskie też przyjadę",
  nearbyParagraphs: [
    "Rzepin, Słubice, Sulęcin, Torzym i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rzepin", "Słubice", "Sulęcin", "Torzym"],

  about: blokOMnie("do Ośna Lubuskiego", "w Ośnie Lubuskim i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ośna Lubuskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa się powtarza: Ośno Lubuskie w powiecie słubickim to jedyne Ośno z prawami miejskimi — pozostałe są wsiami.",
    },
    ...faqWspolne("w Ośnie Lubuskim"),
    {
      question: "Białe czy zielone szparagi?",
      answer:
        "Na początek zielone. Rosną na świetle, mają wyraźniejszy smak i obierania praktycznie nie wymagają, podczas gdy białe rosną pod ziemią, są łagodniejsze i trzeba je obrać. Błąd przy obieraniu zniechęca najskuteczniej, więc lepiej go sobie na starcie oszczędzić.",
    },
    {
      question: "Jak nie zepsuć szparagów?",
      answer:
        "Nie przegotować — to jedyny poważny błąd. Szparag gotuje się bardzo krótko i przechodzi z jędrnego w nijaki w jednej chwili. Twardych końcówek nie odkrawa się przy tym na oko: wystarczy złapać łodygę za oba końce i zgiąć, a pęknie sama tam, gdzie przestaje być łykowata.",
    },
    {
      question: "Co podać do szparagów?",
      answer:
        "Tłuszcz, kwas i jajko — masło, oliwę, cytrynę, jajko w dowolnej postaci. Wszystko inne je przykrywa. A obierek i twardych końców nie warto wyrzucać: robi się z nich delikatny, wyraźnie szparagowy wywar.",
    },
  ],

  geo: { lat: 52.4553, lng: 14.8722 },
};
