/**
 * Example shopping lists for the two live plans (spec §17). Grouped exactly
 * per spec's category list. Derived from the day-1 (+ alternative) recipes
 * in ./recipes.ts — ingredient names, not nutrition facts, so this is
 * ordinary presentational content rather than data covered by the
 * "nie wymyślaj" rule in types/diet.ts.
 *
 * ETAP 8 (2026-08-19): extended to cover the full 7-day ingredient set
 * (days 2-7 added in ./recipes.ts + ./categories.ts) rather than just day
 * 1, since the client dashboard now shows the whole week's shopping list,
 * not only the public one-day preview.
 */
export interface ShoppingListGroup {
  category: string;
  items: string[];
}

export const SHOPPING_LISTS: Record<string, ShoppingListGroup[]> = {
  "keto-7d-1500": [
    {
      category: "Warzywa",
      items: [
        "Awokado", "Cukinia", "Brokuł", "Szpinak", "Kalafior", "Szczypiorek", "Papryka",
        "Kapusta (świeża i kiszona)", "Szparagi", "Rzodkiewka", "Seler naciowy", "Pomidorki koktajlowe",
      ],
    },
    { category: "Owoce", items: [] },
    {
      category: "Mięso",
      items: [
        "Filet z kurczaka", "Udka z kurczaka", "Schab wieprzowy", "Boczek", "Żeberka wieprzowe",
        "Filet z indyka", "Wołowina (na gulasz/duszona)", "Łopatka wieprzowa",
      ],
    },
    { category: "Ryby", items: ["Łosoś", "Dorsz", "Pstrąg", "Krewetki"] },
    {
      category: "Nabiał",
      items: [
        "Jajka", "Ser feta", "Masło", "Parmezan", "Jogurt kokosowy", "Ser wiejski", "Ser cheddar",
        "Serek śmietankowy", "Mozzarella", "Ser żółty",
      ],
    },
    { category: "Produkty suche", items: ["Masło orzechowe", "Oliwki", "Migdały", "Wiórki kokosowe", "Majonez"] },
    { category: "Przyprawy", items: ["Sól", "Pieprz", "Zioła prowansalskie", "Czosnek", "Musztarda", "Przyprawa curry"] },
    { category: "Pozostałe", items: ["Oliwa z oliwek", "Mleko kokosowe", "Tuńczyk w puszce"] },
  ],
  "wegetarianska-7d-1500": [
    {
      category: "Warzywa",
      items: [
        "Brokuł", "Pomidory", "Szpinak", "Bazylia", "Cebula", "Papryka", "Rzodkiewka",
        "Jarmuż", "Dynia", "Cukinia", "Pieczarki",
      ],
    },
    { category: "Owoce", items: ["Jabłko", "Banan", "Maliny", "Cytryna", "Ananas", "Morele suszone"] },
    { category: "Mięso", items: [] },
    { category: "Ryby", items: [] },
    {
      category: "Nabiał",
      items: ["Jogurt naturalny", "Jogurt grecki", "Ser cheddar", "Mozzarella", "Ser feta", "Twaróg", "Parmezan"],
    },
    {
      category: "Produkty suche",
      items: [
        "Płatki owsiane", "Granola", "Makaron pełnoziarnisty", "Ryż", "Kasza gryczana", "Kasza jaglana",
        "Nasiona chia", "Orzechy", "Ciecierzyca", "Soczewica", "Tofu", "Komosa ryżowa (quinoa)",
        "Kotlety sojowe", "Pesto", "Pestki dyni",
      ],
    },
    { category: "Przyprawy", items: ["Cynamon", "Sól", "Pieprz", "Bazylia suszona", "Przyprawa curry", "Kakao"] },
    { category: "Pozostałe", items: ["Miód", "Pieczywo na grzanki", "Pieczywo pełnoziarniste", "Pierogi z serem"] },
  ],

  // ETAP 9 (2026-08-19) — Dzień 1 (+ alternatywy) dla pozostałych kategorii.
  "odchudzajaca-7d-1500": [
    { category: "Warzywa", items: ["Papryka", "Cukinia", "Marchew", "Mix sałat", "Rzodkiewka", "Pomidor", "Kapusta (na surówkę)"] },
    { category: "Owoce", items: ["Jagody", "Truskawki"] },
    { category: "Mięso", items: ["Pierś z kurczaka"] },
    { category: "Ryby", items: ["Dorsz", "Tuńczyk w puszce"] },
    { category: "Nabiał", items: ["Jogurt naturalny", "Jajka", "Twarożek"] },
    { category: "Produkty suche", items: ["Płatki owsiane", "Otręby", "Kasza bulgur", "Ziemniaki"] },
    { category: "Przyprawy", items: ["Cynamon", "Sól", "Pieprz"] },
    { category: "Pozostałe", items: ["Oliwa z oliwek"] },
  ],
  "niski-ig-7d-1500": [
    { category: "Warzywa", items: ["Brokuł", "Pomidory", "Marchew", "Papryka", "Ogórek"] },
    { category: "Owoce", items: ["Jagody"] },
    { category: "Mięso", items: ["Pierś z indyka", "Filet z kurczaka"] },
    { category: "Ryby", items: [] },
    { category: "Nabiał", items: ["Jogurt naturalny", "Ser feta"] },
    {
      category: "Produkty suche",
      items: ["Płatki górskie", "Orzechy", "Siemię lniane", "Kasza gryczana", "Soczewica", "Ciecierzyca", "Pieczywo pełnoziarniste"],
    },
    { category: "Przyprawy", items: ["Cynamon", "Sól", "Pieprz"] },
    { category: "Pozostałe", items: ["Mleko roślinne", "Hummus (tahini, oliwa)"] },
  ],
  "hashimoto-7d-1500": [
    { category: "Warzywa", items: ["Pomidor", "Marchew", "Warzywa na surówkę", "Batat", "Dynia"] },
    { category: "Owoce", items: ["Banan"] },
    { category: "Mięso", items: ["Indyk", "Kurczak"] },
    { category: "Ryby", items: ["Łosoś"] },
    { category: "Nabiał", items: ["Jajka", "Masło klarowane"] },
    { category: "Produkty suche", items: ["Pieczywo żytnie", "Płatki owsiane", "Orzechy", "Ryż", "Ziemniaki", "Pestki dyni"] },
    { category: "Przyprawy", items: ["Sól", "Pieprz", "Zioła"] },
    { category: "Pozostałe", items: ["Mleko"] },
  ],
  "zamienniki-7d-1500": [
    { category: "Warzywa", items: ["Marchew", "Seler", "Cebula", "Sałata (cezar)", "Warzywa do wrapów", "Fasola"] },
    { category: "Owoce", items: ["Jabłko", "Gruszka"] },
    { category: "Mięso", items: ["Indyk mielony", "Wołowina mielona", "Kurczak"] },
    { category: "Ryby", items: [] },
    { category: "Nabiał", items: ["Parmezan", "Jajka (na pastę)"] },
    { category: "Produkty suche", items: ["Pieczywo", "Makaron spaghetti", "Płatki owsiane", "Tortille pełnoziarniste", "Grzanki"] },
    { category: "Przyprawy", items: ["Sól", "Pieprz", "Papryka słodka", "Chili"] },
    { category: "Pozostałe", items: ["Sos pomidorowy/passata", "Szczypiorek"] },
  ],
  "bezglutenowa-7d-1500": [
    { category: "Warzywa", items: ["Brokuł", "Marchew", "Cukinia", "Pomidory"] },
    { category: "Owoce", items: ["Owoce sezonowe (do jogurtu)"] },
    { category: "Mięso", items: ["Kurczak"] },
    { category: "Ryby", items: ["Łosoś"] },
    { category: "Nabiał", items: ["Jajka", "Jogurt naturalny", "Ser feta"] },
    {
      category: "Produkty suche",
      items: ["Ryż", "Placki ryżowe", "Płatki gryczane", "Komosa ryżowa (quinoa)", "Ziemniaki", "Pestki dyni"],
    },
    { category: "Przyprawy", items: ["Sól", "Pieprz"] },
    { category: "Pozostałe", items: ["Oliwa z oliwek"] },
  ],
  "dla-dzieci-7d": [
    { category: "Warzywa", items: ["Pomidor", "Ogórek"] },
    { category: "Owoce", items: ["Banan", "Owoce (do naleśników)"] },
    { category: "Mięso", items: ["Mięso mielone drobiowe", "Mięso mielone z indyka"] },
    { category: "Ryby", items: [] },
    { category: "Nabiał", items: ["Jajka", "Ser żółty"] },
    { category: "Produkty suche", items: ["Płatki owsiane", "Ryż", "Mąka na naleśniki", "Pieczywo", "Ziemniaki"] },
    { category: "Przyprawy", items: ["Miód", "Sól", "Pieprz"] },
    { category: "Pozostałe", items: ["Sos pomidorowy"] },
  ],
  "kobiety-karmiace-7d": [
    { category: "Warzywa", items: ["Brokuł", "Warzywa do gulaszu", "Warzywa do omletu"] },
    { category: "Owoce", items: ["Owoce (do owsianki i jogurtu)"] },
    { category: "Mięso", items: ["Wołowina (na gulasz)"] },
    { category: "Ryby", items: ["Łosoś", "Wędzony łosoś"] },
    { category: "Nabiał", items: ["Mleko", "Jogurt grecki", "Ser", "Jajka"] },
    { category: "Produkty suche", items: ["Płatki owsiane", "Orzechy", "Siemię lniane", "Granola", "Kasza gryczana", "Ryż", "Pieczywo"] },
    { category: "Przyprawy", items: ["Sól", "Pieprz"] },
    { category: "Pozostałe", items: ["Awokado"] },
  ],
};

export function getShoppingList(planId: string): ShoppingListGroup[] | undefined {
  return SHOPPING_LISTS[planId];
}
