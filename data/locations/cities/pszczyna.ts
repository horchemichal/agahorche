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
 * PSZCZYNA — miasto z zamkiem i parkiem, otoczone stawami hodowlanymi.
 * Ziemia pszczyńska bywa nazywana Żabim Krajem właśnie od tych stawów,
 * a karp pszczyński to produkt z chronioną nazwą.
 *
 * KĄT: to jedyne miasto tej fali, gdzie kątem jest KONKRETNY PRODUKT.
 * Ryba jest tu obecna inaczej niż gdzie indziej — nie tylko na Wigilię —
 * i jednocześnie jest tym składnikiem, którego ludzie najczęściej boją się
 * w kuchni: łatwo przesuszyć, łatwo rozgotować, trudno wyczuć moment.
 * Gotowanie na parze z ustawioną temperaturą trafia dokładnie w ten lęk.
 *
 * Uwaga na uczciwość: NIE piszę, że Thermomix „zrobi karpia lepiej niż
 * patelnia". Panierowany smażony karp to patelnia i tyle. Piszę o tym,
 * co urządzenie faktycznie robi z rybą — para, temperatura, farsze, sosy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — ziemia pszczyńska słynie z gospodarki stawowej i hodowli karpia;
 *   karp pszczyński jest produktem o chronionej nazwie,
 * — Zamek w Pszczynie z parkiem to jeden z najlepiej zachowanych zespołów
 *   rezydencjonalnych w Polsce,
 * — w Pszczynie działa pokazowa zagroda żubrów,
 * — miasto jest siedzibą powiatu pszczyńskiego (m.in. Goczałkowice-Zdrój,
 *   Kobiór, Miedźna, Pawłowice, Suszec),
 * — Goczałkowice-Zdrój to uzdrowisko, a zbiornik goczałkowicki zaopatruje
 *   w wodę dużą część aglomeracji.
 *
 * CZEGO NIE MA: danych o produkcji ryb, cen, twierdzeń o wyższości
 * jakiejkolwiek metody przyrządzania.
 */
export const PSZCZYNA: CityContent = {
  slug: "pszczyna",
  h1: "Thermomix Pszczyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Pszczyna — prezentacja i cena",
  seoDescription:
    "Thermomix w Pszczynie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat pszczyński. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pszczyna — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pszczynie i w całym powiecie. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Pszczyny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Starej Wsi, w Ćwiklicach czy Studzienicach. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Pszczyna i cały powiat pszczyński"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pszczynie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "ryba",
      heading: "Ziemia stawów — i składnik, którego najbardziej się boimy",
      paragraphs: [
        "Ziemia pszczyńska to stawy: gospodarka rybacka jest tu od wieków, a karp pszczyński ma chronioną nazwę. Ryba bywa więc na stole częściej niż tylko na Wigilię — i jednocześnie jest tym składnikiem, którego ludzie w kuchni boją się najbardziej. Łatwo ją przesuszyć, łatwo rozgotować, trudno wyczuć moment.",
        "Tu Thermomix ma sens bardzo konkretny, ale ograniczony i lepiej powiedzieć to od razu. Nie zrobi panierowanego smażonego karpia — to patelnia i nic tego nie zastąpi. Robi natomiast to, przy czym najłatwiej się pomylić: gotowanie na parze z ustawioną temperaturą i czasem, więc ryba nie jest „na oko” i nie wysycha przez trzy minuty nieuwagi. Do tego farsze, pasty rybne i sosy — masło ziołowe, chrzanowy, koperkowy — czyli rzeczy, które robi się szybko i w jednym naczyniu.",
        "Jeśli w Waszym domu ryba pojawia się regularnie, powiedz o tym przy umawianiu. Przywiozę składniki właśnie pod to i zobaczymy to na Waszej rybie, a nie na przykładzie z folderu.",
      ],
    },
    {
      id: "powiat",
      heading: "Cały powiat pszczyński",
      paragraphs: [
        "Jeżdżę też do Goczałkowic-Zdroju, Kobióra, Miedźnej, Pawłowic, Suszca i Woli. To w dużej części domy z ogrodami i kuchnie większe niż w mieście, a jednocześnie okolica, z której wiele osób dojeżdża do pracy w Tychach, Żorach albo Jastrzębiu.",
        "Praktycznie oznacza to jedno: obiad częściej robi się z wyprzedzeniem niż na bieżąco. Przy umawianiu wystarczy podać miejscowość — dojazd jest wszędzie bezpłatny, a wpływa tylko na godzinę, którą mogę zaproponować.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pszczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy ugotowali coś konkretnego — rybę, danie, które robisz co tydzień, albo ciasto, które nie wychodzi — powiedz o tym wcześniej, a przywiozę pod to składniki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pszczynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pszczyńskiej rodziny",
      paragraphs: [
        "W Pszczynie i okolicznych gminach rodziny częściej mieszkają w domach, a obiad bywa wciąż jednym wspólnym posiłkiem. Ktoś jednak musi go przygotować na konkretną godzinę, zwykle po powrocie z pracy w innym mieście.",
        "Thermomix zdejmuje z tego stanie przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy robisz coś innego, a większa porcja nie oznacza większego pilnowania. Wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
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
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Pszczyny dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sołectw i dzielnic, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stara Wieś",
    "Piasek",
    "Ćwiklice",
    "Studzienice",
    "Jankowice",
    "Poręba",
    "Rudołtowice",
    "Wisła Wielka",
    "Wisła Mała",
    "Łąka",
    "Brzeźce",
    "Czarków",
    "Studzionka",
  ],

  nearbyHeading: "Cały powiat pszczyński i okolice",
  nearbyParagraphs: [
    "Goczałkowice-Zdrój, Kobiór, Miedźna, Wola, Pawłowice i Suszec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Goczałkowice-Zdrój",
    "Kobiór",
    "Pawłowice",
    "Suszec",
    "Wola",
    "Tychy",
    "Żory",
    "Bieruń",
  ],

  about: blokOMnie("do Pszczyny", "w Pszczynie i całym powiecie pszczyńskim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pszczyny bez dodatkowej opłaty?",
      answer:
        "Tak, do Pszczyny i do całego powiatu pszczyńskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pszczynie"),
    {
      question: "Czy Thermomix przyda się przy rybie?",
      answer:
        "Przy części rzeczy tak, przy części nie — i wolę powiedzieć to wprost. Nie usmaży panierowanego karpia, bo do tego jest patelnia. Gotuje natomiast na parze z ustawioną temperaturą i czasem, więc ryba nie wysycha przez chwilę nieuwagi, a farsze, pasty i sosy robi się w jednym naczyniu w kilka minut.",
    },
    {
      question: "Mieszkam w sołectwie pod Pszczyną — czy przyjedziesz?",
      answer:
        "Tak, do każdej miejscowości w powiecie. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 49.9786, lng: 18.9464 },
};
