import type { CityContent } from "../city-content";
import {
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
 * PROSZOWICE — najbardziej rolnicza gmina w tym zestawie i jednocześnie ta
 * z najmocniejszym udokumentowanym materiałem kulinarnym. Leży na
 * Płaskowyżu Proszowickim: less, czarnoziemy, prawie brak lasów, warzywa
 * na skalę krajową. Powiat proszowicki od lat jest w ścisłej czołówce
 * Polski pod względem powierzchni upraw kapusty, a giełda rolna
 * w Proszowicach publikuje notowania cen warzyw cytowane przez serwisy
 * branżowe — czyli jest punktem odniesienia, a nie lokalnym targiem.
 *
 * Do tego sześć pozycji na ministerialnej Liście Produktów Tradycyjnych,
 * wszystkie masarskie: głowizna, kaszanka, pasztet, kiełbasa ze słoja,
 * mięso ze słoja i tuszka gołębia rasy Ryś Polski. To rzadki przypadek,
 * gdy sekcja kulinarna nie wymaga żadnego naciągania.
 *
 * UWAGA na pułapkę nazewniczą: „Proszówki” to wieś w gminie Bochnia,
 * a nie Proszowice — produkty z Proszówek NIE należą tutaj.
 *
 * Jednostki pomocnicze miasta mają numery, nie nazwy własne (Osiedle Nr 1
 * do Nr 4) — lista dzielnic mówi o tym wprost, zamiast wymyślać nazwy.
 */
export const PROSZOWICE: CityContent = {
  slug: "proszowice",
  h1: "Thermomix Proszowice – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Proszowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Proszowicach: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Proszowice — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Proszowicach lub w gminie. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Proszowic i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Proszowice i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Paluchy z sezamem i czarnuszką upieczone z ciasta przygotowanego w Thermomixie TM7",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Proszowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Urządzenie i produkty jadą ze mną, naczynia też, gdyby zabrakło. Ty nie kupujesz nic i niczego nie szykujesz — wystarczy wolny kawałek blatu i gniazdko.",
        "Potem po prostu gotujemy. Coś na obiad, coś słodkiego i zwykle coś z tego, co masz akurat pod ręką — a w tej okolicy zwykle znaczy to warzywa, i bardzo dobrze, bo wtedy od razu widać, jak urządzenie radzi sobie z tym, co faktycznie jecie.",
        "Na koniec przechodzimy do liczb: cena, promocja obowiązująca w danym miesiącu i wysokość raty przy kilku okresach spłaty. Nie naciskam na decyzję tego samego dnia, a spotkanie jest bezpłatne bez względu na to, co postanowisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Skrzynka warzyw, której nie ma kto przerobić",
      paragraphs: [
        "Proszowice leżą na Płaskowyżu Proszowickim — na lessach i czarnoziemach, w krajobrazie niemal bez lasów, za to z polami po horyzont. Powiat proszowicki od lat jest w ścisłej czołówce Polski pod względem powierzchni upraw kapusty, a giełda rolna w Proszowicach publikuje notowania cen warzyw, na które powołują się serwisy branżowe z całego kraju.",
        "W praktyce znaczy to tyle, że warzywa są tu tanie, świeże i dostępne w ilościach, jakich w mieście się nie kupuje. Problem nie polega na tym, skąd je wziąć, tylko co z nimi zrobić — kilogram kapusty, worek marchwi czy skrzynka pomidorów to kilka godzin siekania, tarcia i pilnowania garnka.",
        "Thermomix jest w takim domu narzędziem do przerabiania, a nie do robienia koktajli. Sieka i szatkuje w kilkanaście sekund, gotuje zupy krem bez przekładania czegokolwiek do blendera, robi przeciery i pasty z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć. To zmienia sezon z wyścigu w rutynę.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Proszowicach?",
      paragraphs: [
        "Najkrótsza droga to telefon albo SMS — termin ustalamy zwykle w jednej wiadomości. Możesz też skorzystać z formularza na dole strony i wskazać porę, o której mam oddzwonić.",
        "Powiedz od razu, gdzie mieszkasz i ile osób będzie na spotkaniu. Gmina ma dwadzieścia dziewięć sołectw rozrzuconych po płaskowyżu, więc Klimontów czy Kościelec to inny dojazd niż osiedle w mieście. Jeśli masz w domu warzywa, z którymi zwykle jest najwięcej roboty, powiedz o tym — chętnie ugotuję coś właśnie z nich.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Proszowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Proszowic",
      paragraphs: [
        "Proszowice to małe miasto z niewielkimi blokami wokół rynku i szerokim pasem domów jednorodzinnych, a wokół — wsie rozciągnięte wzdłuż dróg. Gotuje się tu zwykle dla większej rodziny i częściej od zera niż z gotowców, bo dobre warzywa są tu tańsze i bliżej niż gdziekolwiek indziej.",
        "Największym pożeraczem czasu jest wtedy obróbka wstępna: obieranie, szatkowanie, tarcie, siekanie. Thermomix zabiera właśnie tę część, a nie samo gotowanie — i dlatego oszczędność czasu jest tu większa niż w domu, który głównie odgrzewa.",
        "Dochodzi jeszcze jedno: sporo osób pracuje w Krakowie i wraca po godzinie jazdy. Obiad, który gotuje się bez nadzoru i czeka gotowy, rozwiązuje dokładnie ten problem. A przy małym dziecku Varoma pozwala zrobić porcję na parze równolegle z obiadem dla reszty domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Warzywa prosto z pola i obiad, którego nie trzeba pilnować.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Proszowice i to, co się tu je",
    paragraphs: [
      "Proszowice mają na ministerialnej Liście Produktów Tradycyjnych sześć pozycji i wszystkie są masarskie: głowizna proszowicka, kaszanka proszowicka, pasztet proszowicki, kiełbasa proszowicka ze słoja, mięso ze słoja z okolic Proszowic i tuszka gołębia rasy Ryś Polski. To ślad po tradycji świniobicia i po konserwowaniu mięsa w słoikach — czyli po kuchni, która robiła wszystko sama, bo nie było innej możliwości.",
      "Drugą nogą jest warzywnictwo. Żyzne gleby płaskowyżu i giełda rolna w Proszowicach sprawiają, że warzywa są tu codziennością w skali, jakiej w mieście się nie zna. Kapusta, marchew, buraki, cebula — to są rzeczy, które przez pół roku trzeba czymś przerobić.",
      "Thermomix wchodzi dokładnie w tę drugą część. Nie zrobi kaszanki ani pasztetu według domowego przepisu zamiast Ciebie, ale przejmie szatkowanie, tarcie, gotowanie kaszy bez przypalania i całą pracę przy przecierach i pastach. Jeśli chcesz, na prezentacji ugotujemy coś z tej półki zamiast standardowego zestawu — z warzyw, które i tak masz w domu.",
    ],
  },

  districtsHeading: "Gdzie w gminie Proszowice dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich dwudziestu dziewięciu sołectw. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz przy rynku, czy w Stogniowicach.",
    "Osiedla w samych Proszowicach mają numery, a nie nazwy własne, więc przy umawianiu najprościej podać ulicę. W sołectwach wystarczy nazwa miejscowości.",
  ],
  districts: [
    "Proszowice — rynek i centrum",
    "Osiedle Nr 1",
    "Osiedle Nr 2",
    "Osiedle Nr 3",
    "Osiedle Nr 4",
    "Bobin",
    "Ciborowice",
    "Czajęczyce",
    "Gniazdowice",
    "Górka Stogniowska",
    "Jakubowice",
    "Jazdowiczki",
    "Kadzice",
    "Klimontów",
    "Koczanów",
    "Kościelec",
    "Kowala",
    "Łaganów",
    "Makocice",
    "Mysławczyce",
    "Opatkowice",
    "Ostrów",
    "Piekary",
    "Posiłów",
    "Przezwody",
    "Stogniowice",
    "Szczytniki",
    "Szczytniki-Kolonia",
    "Szklana",
    "Szreniawa",
    "Teresin",
    "Więckowice",
    "Wolwanowice",
    "Żębocin",
  ],

  nearbyHeading: "Powiat proszowicki i okolica",
  nearbyParagraphs: [
    "Dojeżdżam też do sąsiednich gmin powiatu i w stronę Krakowa. To kierunek, w którym jeżdżę regularnie, więc okolicę obsługuję przy okazji; przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia.",
  ],
  nearbyTowns: [
    "Koniusza",
    "Nowe Brzesko",
    "Koszyce",
    "Pałecznica",
    "Radziemice",
    "Igołomia-Wawrzeńczyce",
    "Słomniki",
    "Niepołomice",
    "Kraków",
  ],

  about: blokOMnie("do Proszowic", "w Proszowicach, Niepołomicach i Krakowie"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Proszowic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Proszowic i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Proszowicach"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład do Klimontowa albo Kościelca?",
      answer:
        "Tak, do wszystkich sołectw gminy. Wystarczy podać przy umawianiu nazwę miejscowości — trasę po płaskowyżu układam z wyprzedzeniem.",
    },
    {
      question: "Mamy dużo warzyw z pola. Czy Thermomix pomoże je przerobić?",
      answer:
        "To jest tu najczęstszy powód zakupu. Szatkuje i sieka w kilkanaście sekund, gotuje zupy krem bez przekładania do blendera, a przeciery i pasty robi z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć.",
    },
    {
      question: "Czy da się na prezentacji ugotować coś z moich produktów?",
      answer:
        "Tak i zwykle to najlepszy pomysł. Powiedz przy umawianiu, co masz w domu i z czym jest najwięcej roboty — składniki i tak przywożę swoje, ale chętnie pokażę urządzenie na tym, co faktycznie jecie.",
    },
  ],

  geo: { lat: 50.1922, lng: 20.2891 },
};
