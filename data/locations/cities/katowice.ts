import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * KATOWICE — kotwica województwa śląskiego, pierwsza strona spoza Małopolski
 * (wrzesień 2026). Ma dla śląskiego robić to, co Kraków robi dla Małopolski:
 * być najmocniejszą stroną regionu i punktem, z którego linkuje się dalej.
 *
 * O CO TU NAPRAWDĘ CHODZI I CZEGO NIE MA U KONKURENCJI. Katowice są innym
 * miastem niż Kraków w jednym konkretnym, kuchennym sensie: to nie jest
 * miasto jednego centrum, tylko miasto zszyte z dzielnic o zupełnie różnej
 * zabudowie. Prezentacja w familoku na Nikiszowcu, w bloku na Tysiącleciu
 * i w domu w Kostuchnie to trzy różne rozmowy — o miejscu na blacie,
 * o windzie i o tym, ile osób siada do stołu. Strona jest zbudowana wokół
 * tego, a nie wokół „przyjeżdżam do Katowic".
 *
 * DRUGA RZECZ, KTÓRA JEST TYLKO TUTAJ: śląska kuchnia to jedyna regionalna
 * kuchnia w Polsce, której dania mają ustaloną, powtarzalną niedzielną
 * formę — rolada, kluski, modro kapusta. To jest realny punkt zaczepienia
 * do rozmowy o Thermomiksie (kluski i kapusta to najbardziej pracochłonna
 * część tego obiadu), a nie ozdobnik turystyczny.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, administracyjne i powszechnie znane):
 * — Katowice mają 22 dzielnice pogrupowane w pięć jednostek pomocniczych,
 * — Nikiszowiec i Giszowiec to osiedla patronackie z początku XX wieku;
 *   Nikiszowiec jest Pomnikiem Historii, zabudowa to ceglane familoki,
 * — Tysiąclecie i Osiedle Paderewskiego to duże osiedla bloków,
 * — południe miasta (Kostuchna, Podlesie, Zarzecze, Murcki) ma charakter
 *   podmiejski, z przewagą domów jednorodzinnych,
 * — Katowice są rdzeniem Górnośląsko-Zagłębiowskiej Metropolii,
 * — rolada wołowa z kluskami śląskimi i modrą kapustą to klasyczny
 *   niedzielny obiad śląski.
 *
 * CZEGO ŚWIADOMIE NIE MA: liczby mieszkańców podanej jako fakt (zmienna),
 * nazw konkretnych targowisk z godzinami (nie mam potwierdzonych),
 * deklaracji, że Aga jest „przedstawicielką na Śląsk" — przydział regionu
 * nadaje Vorwerk i nie mam potwierdzenia, żeby obejmował śląskie. Jest za
 * to wprost napisane, że dojeżdża.
 */
export const KATOWICE: CityContent = {
  slug: "katowice",
  h1: "Thermomix Katowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Katowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Katowicach: bezpłatna prezentacja TM7 u Ciebie w domu, we wszystkich dzielnicach. Aktualna cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Katowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Katowicach i całej metropolii. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Katowic z Thermomixem TM7, gotujemy razem w Twojej kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna, dojazd też — także na Nikiszowiec, Tysiąclecie i na południe miasta.",

  highlights: highlightyStandardowe("wszystkie dzielnice Katowic, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Katowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Umawiamy się na termin, który Ci pasuje — również po pracy albo w sobotę. Przyjeżdżam z urządzeniem i ze składnikami, więc nie robisz zakupów i nie sprzątasz kuchni na tę okazję. Potrzebny jest kawałek blatu, gniazdko i godzina spokoju.",
        "Nie ma pokazu slajdów ani prezentacji w salonie. Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co akurat masz w domu. Powiedz mi wcześniej, ile osób siada u Was do stołu i czego nie jecie — dobiorę dania pod Was, bo inaczej wygląda spotkanie u mamy dwójki dzieci, a inaczej u osoby gotującej dla siebie.",
        "Na koniec siadamy do liczb: aktualna cena, promocja i rata przy kilku okresach spłaty. „Muszę to przegadać w domu” jest pełnoprawną odpowiedzią i nic za spotkanie nie płacisz.",
      ],
      bullets: [
        "spotkanie trwa zwykle około dwóch godzin",
        "gotujemy u Ciebie, nie w salonie sprzedaży",
        "możesz zaprosić rodzinę albo koleżanki — w grupie jest ciekawiej",
        "nie musisz decydować tego samego dnia",
      ],
      links: [
        { href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" },
        { href: "/prezentacja/w-domu", label: "Prezentacja u Ciebie w domu" },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "dzielnice-a-kuchnia",
      heading: "Katowice to nie jedna kuchnia, tylko dwadzieścia kilka",
      paragraphs: [
        "Katowice składają się z dwudziestu dwóch dzielnic i to nie jest ciekawostka administracyjna — to realna różnica w tym, jak wygląda prezentacja. W familoku na Nikiszowcu kuchnia bywa wąska, z blatem, na którym trzeba zrobić miejsce świadomie. W bloku na Tysiącleciu albo na Paderewskiego blat jest zwykle nowszy i dłuższy, ale trzeba pomyśleć o windzie i o tym, gdzie urządzenie stanie na stałe. W Kostuchnie czy Podlesiu jesteśmy w domu jednorodzinnym, gdzie miejsce nie jest problemem, ale odległość do centrum owszem — i to zmienia porę spotkania.",
        "Dlatego przy umawianiu pytam nie tylko o adres, ale o to, jak wygląda Twoja kuchnia. Nie z ciekawości: od tego zależy, czy przywiozę mniej naczyń, czy zaproponuję ustawienie urządzenia bliżej gniazdka, i czy w ogóle warto pokazywać Varomę na blacie, czy raczej na stole.",
        "Jedna rzecz jest wspólna dla całych Katowic: to miasto, w którym bardzo wiele osób pracuje zmianowo albo dojeżdża do sąsiedniego miasta metropolii. Obiad rzadko jest wydarzeniem o siedemnastej — częściej jest czymś, co ma być gotowe wtedy, kiedy ktoś wróci.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację Thermomixa w Katowicach?",
      paragraphs: [
        "Najprościej zadzwonić — ustalenie terminu zajmuje zwykle trzy minuty. Możesz też zostawić kontakt w formularzu na dole strony i napisać, kiedy oddzwonić.",
        "Powiedz od razu, w której dzielnicy mieszkasz. Katowice są rozciągnięte z północy na południe i trasa na Murcki to zupełnie inny dojazd niż na Koszutkę — a od tego zależy, jaką porę mogę Ci zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Katowicach"),
    sekcjaRaty(),
    {
      id: "slaski-obiad",
      heading: "Śląski niedzielny obiad a Thermomix",
      paragraphs: [
        "Rolada, kluski śląskie i modro kapusta — mało który region w Polsce ma swój obiad tak ustalony, że wszyscy wiedzą, co powinno być na talerzu. Jest też jednym z najbardziej pracochłonnych: mięso trzeba doglądać, kapustę dusić, a kluski wyrobić i ulepić, zwykle w tym samym czasie, gdy dzieje się wszystko inne.",
        "Thermomix nie zastąpi tu tradycji i nie ma takiej ambicji. Zdejmuje natomiast tę część, która jest zwykłą robotą: ciasto na kluski wyrabia się bez ubrudzenia rąk, kapusta dusi się z ustawioną temperaturą i mieszaniem, więc nie przywiera do dna, a sos można zagęścić bez stania nad garnkiem. Zostaje to, co w tym obiedzie jest najlepsze — czyli formowanie klusek, przy którym i tak zbiera się pół rodziny.",
        "Uczciwie: jeśli robisz taki obiad raz na kwartał, samo to nie jest powodem do zakupu. Powodem bywa raczej to, co dzieje się w pozostałe dni tygodnia — i o tym rozmawiamy na spotkaniu w pierwszej kolejności.",
      ],
      links: [{ href: "/przepisy", label: "Zobacz, co można ugotować" }],
    },
    {
      id: "rodzina",
      heading: "Thermomix dla katowickiej rodziny",
      paragraphs: [
        "W metropolii bardzo często pracuje się w innym mieście niż się mieszka — z Katowic jedzie się do Gliwic, z Gliwic do Katowic, a z Sosnowca w obie strony. Do tego dochodzi praca zmianowa, która wciąż jest tu normalna, a nie wyjątkiem. Efekt w kuchni jest zawsze ten sam: dwie albo trzy różne pory posiłku w jednym domu.",
        "Thermomix radzi sobie z tym nie szybkością, tylko brakiem konieczności pilnowania. Obiad może być gotowy wcześniej i poczekać, albo powstać wtedy, gdy rozpakowujesz zakupy. Gotuje i miksuje w jednym naczyniu, więc nie ma przekładania gorących rzeczy do blendera i nie ma trzech garnków do umycia po zupie.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla reszty domu — bez drugiego garnka i bez drugiego pilnowania.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    {
      id: "male-mieszkanie",
      heading: "Thermomix w małym mieszkaniu i dla jednej osoby",
      paragraphs: [
        "W Katowicach mieszka bardzo dużo osób w jedno- i dwuosobowych gospodarstwach — w kawalerkach w centrum, w mieszkaniach w kamienicach, w małych blokach z lat sześćdziesiątych. Wraca wtedy dwa pytania: czy to się w ogóle zmieści i czy ma sens przy gotowaniu dla jednej osoby.",
        "Na pierwsze odpowiadamy na miejscu — urządzenie stoi na Twoim blacie, a nie na zdjęciu. Zajmuje mniej więcej tyle, co duży czajnik z podstawką, i to jest coś, co lepiej zobaczyć niż przeczytać.",
        "Na drugie odpowiadam uczciwie: przy gotowaniu dla jednej osoby Thermomix zwraca się inaczej niż w rodzinie. Nie oszczędnością na dużych obiadach, tylko tym, że w ogóle zaczynasz gotować zamiast zamawiać — bo nie ma etapu, który zniechęca, czyli stania przy garnku i mycia trzech naczyń. Jeżeli po rozmowie uznam, że u Ciebie to się nie zwróci, powiem to wprost.",
      ],
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Katowice i gotowanie",
    paragraphs: [
      "Śląska kuchnia jest jedną z najlepiej rozpoznawalnych w Polsce i, w odróżnieniu od wielu regionalnych, wciąż żywą — kluski, modro kapusta, żur, wodzionka i krupnioki nie są tu daniem z festynu, tylko czymś, co się robi w domu. To ma znaczenie przy prezentacji, bo można pokazać urządzenie na tym, co i tak gotujesz, zamiast na przepisie z internetu.",
      "Druga rzecz to gotowanie „na potem”. W domach, gdzie ktoś pracuje zmianowo, normalne jest odkładanie porcji na później albo do zabrania. Thermomix wpisuje się w to naturalnie — większa porcja nie oznacza większego pilnowania, a odgrzewanie na parze nie wysusza tego, co się odkłada.",
    ],
  },

  districtsHeading: "Do których dzielnic Katowic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu dwóch, bez dopłaty za dojazd i bez różnicy, czy to Śródmieście, czy Murcki na samym południu.",
    "Katowice mają dwa równoległe układy nazw: oficjalny podział na dzielnice i nazwy, których ludzie używają na co dzień — Nikiszowiec i Giszowiec to formalnie części Janowa-Nikiszowca i Giszowca, ale nikt tak nie mówi przy umawianiu. Możesz podać którąkolwiek wersję, trafię.",
    "Jeżeli mieszkasz na granicy z sąsiednim miastem — a w metropolii to bardzo częste — po prostu powiedz, gdzie dokładnie. Chorzów, Siemianowice czy Mysłowice to dla mnie ta sama trasa.",
  ],
  districts: [
    "Śródmieście",
    "Koszutka",
    "Bogucice",
    "Osiedle Paderewskiego-Muchowiec",
    "Załęże",
    "Osiedle Witosa",
    "Osiedle Tysiąclecia",
    "Dąb",
    "Wełnowiec-Józefowiec",
    "Ligota-Panewniki",
    "Brynów",
    "Załęska Hałda-Brynów",
    "Zawodzie",
    "Dąbrówka Mała",
    "Szopienice-Burowiec",
    "Janów-Nikiszowiec",
    "Giszowiec",
    "Murcki",
    "Piotrowice-Ochojec",
    "Zarzecze",
    "Kostuchna",
    "Podlesie",
  ],

  nearbyHeading: "Cała metropolia, nie tylko Katowice",
  nearbyParagraphs: [
    "Katowice są rdzeniem Górnośląsko-Zagłębiowskiej Metropolii i w praktyce jedna trasa obsługuje kilka miast naraz. Dojeżdżam do sąsiednich miast na tych samych zasadach — bezpłatnie i bez traktowania tego jako wyjątku.",
    "Jeżeli chcesz zaprosić na spotkanie koleżankę z sąsiedniego miasta, to najlepszy możliwy układ: w grupie prezentacja jest ciekawsza, a pytania padają odważniejsze.",
  ],
  nearbyTowns: [
    "Chorzów",
    "Siemianowice Śląskie",
    "Mysłowice",
    "Sosnowiec",
    "Tychy",
    "Ruda Śląska",
    "Świętochłowice",
    "Bytom",
    "Zabrze",
    "Gliwice",
    "Mikołów",
    "Będzin",
  ],

  about: blokOMnie("do Katowic", "w Katowicach i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Katowic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Katowic i sąsiednich miast metropolii jest bezpłatny, tak samo jak sama prezentacja. Mieszkam w Małopolsce, ale na Śląsk jeżdżę regularnie i nie doliczam za to ani złotówki.",
    },
    ...faqWspolne("w Katowicach"),
    {
      question: "Mieszkam w bloku bez windy na czwartym piętrze — to problem?",
      answer:
        "Nie. Urządzenie wnoszę sama i nie jest to nic, czego nie da się wnieść po schodach. Powiedz przy umawianiu, żebym wiedziała, ile czasu zająć na wejście.",
    },
    {
      question: "Czy przyjedziesz na Nikiszowiec albo do Giszowca?",
      answer:
        "Tak, do wszystkich dzielnic. W starszej zabudowie kuchnie bywają węższe — jeśli powiesz o tym wcześniej, przywiozę mniej naczyń i ustawimy wszystko tak, żeby dało się przy tym normalnie stać.",
    },
    {
      question: "Czy Thermomix zrobi kluski śląskie i modro kapustę?",
      answer:
        "Ciasto na kluski wyrabia się w naczyniu, bez ubrudzenia rąk — formowanie zostaje dla Ciebie. Kapustę można dusić z ustawioną temperaturą i mieszaniem, więc nie trzeba pilnować, żeby nie przywarła. Na prezentacji chętnie pokażę to na Twoim przepisie, jeśli go masz.",
    },
    {
      question: "Pracuję zmianowo — czy da się umówić w nietypowej porze?",
      answer:
        "Tak i to częsty przypadek na Śląsku. Umawiam się też przed południem w dni robocze, jeśli akurat wtedy jesteś w domu.",
    },
  ],

  geo: { lat: 50.2649, lng: 19.0238 },
};
