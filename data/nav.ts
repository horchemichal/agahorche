/**
 * Primary navigation structure. Kept as data (not hardcoded JSX) so the
 * header/footer/mobile nav all render from one source and stay in sync —
 * and so future CMS-driven nav editing is a drop-in swap.
 */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/**
 * Main nav. Zachowuje układ ustalony z Agą (Prezentacja TM7 / Cena / Diety
 * Thermomix / Raty 0% / Kontakt), ale od sierpnia 2026 dokłada rozwijane
 * menu „Thermomix”. Powód: podstrony /thermomix/tm6, /thermomix/funkcje,
 * /thermomix/dla-rodziny, /thermomix/dla-mamy, /thermomix/dla-poczatkujacych
 * oraz /jak-kupic-thermomix były osieroconymi adresami — istniały i miały
 * treść, ale nie prowadził do nich ani jeden link z serwisu, więc ani
 * użytkownik, ani robot Google nie miał jak do nich trafić.
 *
 * Liczba pozycji pierwszego poziomu celowo zostaje na sześciu — pasek jest
 * widoczny od 1024 px i przy siedmiu pozycjach zaczynał ściskać logo.
 * Dlatego „O mnie”, „Opinie” i „FAQ” siedzą w rozwijanym „Kontakt”,
 * a „Jak kupić Thermomixa” pod „Ceną”.
 *
 * „Akcesoria” celowo są w DWÓCH miejscach: pod „Ceną” (bo to zakup) i pod
 * „Thermomixem” (bo to część urządzenia, i tam ich szukają — prośba Agi,
 * sierpień 2026). Ten sam adres w dwóch grupach jest w porządku: nawigacja
 * ma prowadzić do treści najkrótszą drogą, a nie odwzorowywać jedno
 * „prawidłowe” drzewo.
 *
 * Dwie zmiany klas, które wyszły przy tej okazji i bez tego kontekstu wyglądają
 * na przypadkowe:
 * — header.tsx: linki paska dostały `whitespace-nowrap` i węższy padding do
 *   1279 px, bo przy sześciu pozycjach etykiety łamały się na dwie linie;
 * — footer.tsx: siatka stopki to teraz sześć kolumn od lg (blok kontaktowy
 *   plus pięć grup linków), bo doszła grupa „Dla kogo”.
 */
export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Thermomix",
    href: "/thermomix",
    children: [
      { label: "Thermomix TM7", href: "/thermomix/tm7" },
      { label: "Thermomix TM6", href: "/thermomix/tm6" },
      { label: "TM7 vs TM6 — porównanie", href: "/thermomix/tm7-vs-tm6" },
      { label: "Funkcje Thermomixa", href: "/thermomix/funkcje" },
      { label: "Wady i zalety", href: "/thermomix/wady-i-zalety" },
      { label: "Akcesoria do TM7", href: "/akcesoria" },
      { label: "Thermomix dla rodziny", href: "/thermomix/dla-rodziny" },
      { label: "Thermomix dla mamy", href: "/thermomix/dla-mamy" },
      { label: "Dla początkujących", href: "/thermomix/dla-poczatkujacych" },
    ],
  },
  {
    label: "Prezentacja TM7",
    href: "/prezentacja",
    children: [
      { label: "Umów prezentację", href: "/prezentacja" },
      { label: "Jak wygląda prezentacja", href: "/prezentacja/jak-wyglada" },
      { label: "Prezentacja u Ciebie w domu", href: "/prezentacja/w-domu" },
      { label: "Gdzie dojeżdżam", href: "/miasta" },
    ],
  },
  {
    label: "Cena",
    href: "/oferta",
    children: [
      { label: "Aktualna cena i promocje", href: "/oferta" },
      { label: "Jak kupić Thermomixa", href: "/jak-kupic-thermomix" },
      { label: "Akcesoria", href: "/akcesoria" },
    ],
  },
  {
    label: "Diety Thermomix",
    href: "/diety",
    children: [
      // Wyszukiwarka „Co ugotować dzisiaj?" (1.09.2026). Trafia do menu diet,
      // a nie osobnej pozycji w pasku, bo to ta sama baza przepisów widziana
      // od strony jednego posiłku zamiast całego tygodnia.
      { label: "Co ugotować dzisiaj?", href: "/przepisy" },
      { label: "Co mam w lodówce?", href: "/przepisy/co-mam-w-lodowce" },
      { label: "Poradnik kuchenny", href: "/poradnik" },
      { label: "Keto", href: "/diety/keto" },
      { label: "Wegetariańska", href: "/diety/wegetarianska" },
      { label: "Odchudzająca", href: "/diety/odchudzajaca" },
      { label: "Niski indeks glikemiczny", href: "/diety/niski-ig" },
      { label: "Hashimoto", href: "/diety/hashimoto" },
      { label: "Z zamiennikami", href: "/diety/zamienniki" },
      { label: "Bezglutenowa", href: "/diety/bezglutenowa" },
      { label: "Dla dzieci", href: "/diety/dla-dzieci" },
      { label: "Kobiety karmiące", href: "/diety/kobiety-karmiace" },
      { label: "Rozszerzanie diety niemowląt", href: "/diety/niemowleta" },
    ],
  },
  // Wskazuje na /finansowanie — od sierpnia 2026 to pełna strona „Thermomix
  // na raty 0%” z tym samym kalkulatorem co na stronie głównej (ten sam
  // komponent, ta sama cena z bazy — nie druga kopia wyliczeń) plus FAQ i
  // treść pod frazy „thermomix raty 0”. Kotwica /#kalkulator-rat nie mogła
  // rankować samodzielnie, bo nie jest osobnym adresem.
  { label: "Raty 0%", href: "/finansowanie" },
  {
    label: "Kontakt",
    href: "/kontakt",
    children: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "O mnie", href: "/o-mnie" },
      { label: "Opinie", href: "/opinie" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Thermomix",
    items: [
      { label: "Thermomix", href: "/thermomix" },
      { label: "TM7", href: "/thermomix/tm7" },
      { label: "TM6", href: "/thermomix/tm6" },
      { label: "TM7 vs TM6", href: "/thermomix/tm7-vs-tm6" },
      { label: "Funkcje", href: "/thermomix/funkcje" },
      { label: "Wady i zalety", href: "/thermomix/wady-i-zalety" },
    ],
  },
  {
    title: "Zakup",
    items: [
      { label: "Cena i promocje", href: "/oferta" },
      { label: "Jak kupić Thermomixa", href: "/jak-kupic-thermomix" },
      { label: "Raty 0%", href: "/finansowanie" },
      { label: "Akcesoria", href: "/akcesoria" },
    ],
  },
  {
    title: "Prezentacja",
    items: [
      { label: "Umów prezentację", href: "/prezentacja" },
      { label: "Jak wygląda prezentacja", href: "/prezentacja/jak-wyglada" },
      { label: "Prezentacja w domu", href: "/prezentacja/w-domu" },
      { label: "Gdzie pracuje Aga", href: "/miasta" },
    ],
  },
  {
    title: "Dla kogo",
    items: [
      { label: "Dla rodziny", href: "/thermomix/dla-rodziny" },
      { label: "Dla mamy", href: "/thermomix/dla-mamy" },
      { label: "Dla początkujących", href: "/thermomix/dla-poczatkujacych" },
      { label: "Diety", href: "/diety" },
      { label: "Aga Club", href: "/aga-club" },
    ],
  },
  {
    title: "Informacje",
    items: [
      { label: "O mnie", href: "/o-mnie" },
      { label: "Opinie", href: "/opinie" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Poradnik kuchenny", href: "/poradnik" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];
