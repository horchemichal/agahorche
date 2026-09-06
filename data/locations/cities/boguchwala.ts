import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * BOGUCHWAŁA — małe miasto tuż przy granicy Rzeszowa, siedziba dużej
 * gminy złożonej głównie ze wsi: Niechobrz, Zgłobień, Lutoryż,
 * Racławówka, Kielanówka, Nosówka, Mogielnica, Wola Zgłobieńska.
 *
 * KĄT: rozjazd między nazwą a rzeczywistością. Samo miasteczko dotyka
 * Rzeszowa tak blisko, że dla mieszkańca praktycznej różnicy nie ma —
 * i uczciwiej to przyznać, niż udawać osobny świat. Ale gmina to nie
 * jest przedmieście: większość mieszkańców żyje we wsiach rozłożonych
 * na pogórzu, kilkanaście minut dalej, i tam wszystko wygląda inaczej.
 * JEDNA GMINA, DWA RÓŻNE ŻYCIA — i strona ma o tym powiedzieć wprost,
 * zamiast pisać o „mieście" tak, jakby było jednorodne.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Boguchwała graniczy bezpośrednio z Rzeszowem i jest siedzibą gminy
 *   miejsko-wiejskiej,
 * — do gminy należą m.in. Niechobrz, Zgłobień, Lutoryż, Racławówka,
 *   Kielanówka, Nosówka, Mogielnica i Wola Zgłobieńska,
 * — w Boguchwale zachował się zespół pałacowy dawnych właścicieli,
 * — teren gminy przechodzi od zabudowy podmiejskiej po wsie na pogórzu.
 *
 * CZEGO NIE MA: czasów dojazdu w minutach, liczby mieszkańców
 * poszczególnych sołectw, danych o zabudowie.
 */
export const BOGUCHWALA: CityContent = {
  slug: "boguchwala",
  h1: "Thermomix Boguchwała – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Boguchwała — prezentacja i cena",
  seoDescription:
    "Thermomix w Boguchwale: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Cena, raty 0%, szybkie terminy. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Boguchwała — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Boguchwale i w sołectwach gminy. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Boguchwały z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Niechobrza, Zgłobnia, Lutoryża, Racławówki i pozostałych sołectw.",

  highlights: highlightyStandardowe("Boguchwała i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Boguchwale – jak wygląda prezentacja?",
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
      id: "jedna-gmina-dwa-zycia",
      heading: "Jedna gmina, dwa zupełnie różne życia",
      paragraphs: [
        "Powiem to od razu, bo inaczej ta strona byłaby nieszczera: samo miasteczko Boguchwała dotyka Rzeszowa tak blisko, że dla mieszkańca praktycznej różnicy prawie nie ma. Jeśli mieszkacie po tej stronie, wszystko, co napisałam o Rzeszowie, dotyczy Was tak samo — z niedzielnym bagażnikiem od rodziców włącznie.",
        "Ale gmina Boguchwała to nie jest przedmieście i sprowadzanie jej do tego byłoby błędem. Większość mieszkańców żyje w sołectwach rozłożonych na pogórzu — w Niechobrzu, Zgłobniu, Lutoryżu, Nosówce — kilkanaście minut dalej, a to już zupełnie inne warunki. Domy z ogrodami zamiast bloków, piwnica zamiast lodówki, i wieczór, w którym po brakujący składnik nie zbiegnie się na dół.",
        "Kuchennie oznacza to dwie różne rozmowy w granicach jednej gminy. Po stronie miejskiej liczy się okno czasowe między pracą a wieczorem. Po stronie wiejskiej — to, żeby dało się ugotować z zapasu i z własnych warzyw, bez poświęcania na to całego popołudnia.",
        "Urządzenie odpowiada na obie rzeczy tym samym: gotuje bez pilnowania, w jednym naczyniu, a większa porcja nie kosztuje więcej pracy. Ale prezentacja wygląda inaczej po jednej i po drugiej stronie — dlatego przy umawianiu pytam, gdzie dokładnie mieszkacie.",
      ],
      links: [{ href: "/thermomix/rzeszow", label: "Thermomix Rzeszów" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Boguchwale?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość — to naprawdę zmienia, co warto Wam pokazać. Boguchwała przy samej granicy Rzeszowa i Nosówka na pogórzu to dwie różne kuchnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Boguchwale"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Boguchwała",
      paragraphs: [
        "W obu częściach gminy wąskie gardło jest w gruncie rzeczy to samo: obiad musi powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — od Boguchwały przy granicy Rzeszowa po wsie na pogórzu.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Boguchwała",
    "Niechobrz",
    "Zgłobień",
    "Lutoryż",
    "Racławówka",
    "Kielanówka",
    "Nosówka",
    "Mogielnica",
    "Wola Zgłobieńska",
    "Zarzecze",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Rzeszów, Strzyżów, Czudec, Tyczyn i Głogów Małopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Rzeszów",
    "Strzyżów",
    "Głogów Małopolski",
    "Łańcut",
    "Ropczyce",
    "Sędziszów Małopolski",
  ],

  about: blokOMnie("do Boguchwały", "w gminie Boguchwała i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Boguchwały bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Boguchwale"),
    {
      question: "Mieszkam praktycznie na granicy Rzeszowa — czy to coś zmienia?",
      answer:
        "Dla mnie nie zmienia nic, bo dojazd i tak jest bezpłatny. Dla Ciebie może zmieniać tyle, że warto zajrzeć też na stronę Rzeszowa — po tej stronie gminy codzienność wygląda po prostu jak w mieście.",
    },
    {
      question: "Mieszkam w sołectwie na pogórzu — czy przyjedziesz?",
      answer:
        "Tak, do każdej miejscowości w gminie. Powiedz przy umawianiu, gdzie dokładnie — od tego zależy nie tylko trasa, ale i to, co warto Wam pokazać.",
    },
  ],

  geo: { lat: 49.9789, lng: 21.9439 },
};
