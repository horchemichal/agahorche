/**
 * OŚ PLIKU
 * Lista produktów do klikania w module „Co mam w lodówce?" oraz mapowanie
 * ich na nazwy składników, jakimi posługuje się Cookidoo.
 *
 * PROBLEM, KTÓRY TO ROZWIĄZUJE. W przepisach składnik stoi w dopełniaczu
 * i w kilku wariantach naraz: „cebuli", „czerwonej cebuli", „cebuli
 * szalotki", „cebuli dymki". Człowiek otwierający lodówkę widzi jedną
 * cebulę. Każdy produkt ma więc `nazwa` (to, co widać na przycisku,
 * w mianowniku) i `warianty` — wszystkie zapisy z Cookidoo, które się na
 * ten produkt składają.
 *
 * DLACZEGO NIE AUTOMATYCZNIE. Bo automat myli rzeczy, które brzmią
 * podobnie, a są czym innym: „cebula" i „cebula dymka", „papryka
 * czerwona" i „papryka słodka" (ta druga to przyprawa), „mleko"
 * i „mleczko kokosowe". Lista jest pisana ręcznie i sprawdzana skryptem,
 * który wyłapuje literówki (wariant nieistniejący w danych) oraz często
 * występujące składniki, których nikt nie przypisał.
 *
 * DLACZEGO TYLKO PRODUKTY „Z LODÓWKI". Pytanie brzmi „co mam w lodówce",
 * a nie „co mam w kuchni". Sól, pieprz, olej, mąka, cukier i suszone
 * przyprawy siedzą w PODSTAWY i są domyślnie uznane za dostępne —
 * inaczej przy każdym daniu pisalibyśmy „brakuje: woda, sól". Klientka
 * może to odznaczyć jednym kliknięciem i wtedy liczymy wszystko.
 *
 * CZEGO TU NIE MA: zamienników („nie masz śmietany, użyj jogurtu").
 * To byłaby moja porada kulinarna podana jako fakt z przepisu. Jeśli
 * kiedyś ma się pojawić, musi ją napisać Aga.
 */

export interface Produkt {
  id: string;
  /** Napis na przycisku — mianownik, tak jak mówi klientka. */
  nazwa: string;
  grupa: string;
  /** Zapisy z Cookidoo (data/diets/skladniki.ts), które liczą się jako ten produkt. */
  warianty: string[];
}

/**
 * Uznawane za „mam w domu", dopóki klientka nie odznaczy podstaw.
 * Woda, sól, pieprz, tłuszcz, cukier, mąka, suszone przyprawy i ocet —
 * rzeczy, po które nikt nie idzie do sklepu, planując obiad.
 */
export const PODSTAWY: string[] = [
  "wody", "woda", "wrząca woda", "wody mineralnej", "kostek lodu",
  "soli", "sól", "łyżeczka soli", "soli morskiej", "soli ziołowej",
  "pieprzu czarnego", "pieprz czarny", "pieprzu", "pieprzu białego", "pieprz biały",
  "pieprzu cayenne", "pieprzu syczuańskiego", "ziaren pieprzu czarnego", "ziaren pieprzu czerwonego",
  "oliwy z oliwek", "oliwa z oliwek", "oleju", "olej", "oleju rzepakowego", "olej rzepakowy",
  "olej słonecznikowy", "olej do smażenia", "oleju kokosowego", "oleju sezamowego",
  "oleju sezamowego z pierwszego tłoczenia", "oleju z chili", "smalcu",
  "cukru", "cukier puder", "cukru pudru", "cukru trzcinowego", "cukru waniliowego", "łyżeczki cukru",
  "erytrytolu", "miodu", "miód", "syropu klonowego", "syropu z agawy",
  "mąki pszennej", "mąka pszenna", "łyżeczka mąki pszennej", "mąki ryżowej", "mąki migdałowej",
  "mąki sojowej", "skrobi kukurydzianej", "skrobi ziemniaczanej", "mączki chleba świętojańskiego",
  "proszku do pieczenia", "łyżeczka proszku do pieczenia", "sody oczyszczonej",
  "octu", "octu ryżowego", "octu balsamicznego", "octu owocowego", "białego octu winnego",
  "czerwonego octu winnego",
  "papryki słodkiej", "papryka słodka", "łyżeczka papryki słodkiej", "papryki ostrej",
  "papryki wędzonej", "suszonych płatków chili", "kminu rzymskiego", "nasion kminu rzymskiego",
  "kminku", "kurkumy", "curry", "żółtej pasty curry", "czerwonej pasty curry", "pasty curry tikka",
  "przyprawy garam masala", "przyprawy kuchni meksykańskiej", "przyprawy kebab-gyros",
  "cynamonu", "laski cynamonu", "gałki muszkatołowej", "gałka muszkatołowa", "goździki",
  "goździków", "kardamonu", "gwiazdki anyżu", "nasion kolendry", "gorczycy", "sumaku",
  "oregano", "łyżeczka oregano", "łodyżek oregano", "tymianku", "łyżeczka tymianku",
  "łodyżki tymianku", "majeranku", "rozmarynu", "łodyżki rozmarynu", "estragon",
  "ziół prowansalskich", "zioła prowansalskie", "ziół włoskich", "mieszane zioła", "zioła",
  "laurowe", "laurowy", "ziaren ziela angielskiego", "ziarna ziela angielskiego",
  "owoców jałowca", "nitek szafranu", "nasion kopru włoskiego", "cebuli suszonej",
  "koncentratu bulionu warzywnego", "łyżeczka koncentratu bulionu warzywnego",
  "łyżkę koncentratu bulionu warzywnego", "koncentratu bulionu drobiowego",
  "łyżeczki koncentratu bulionu drobiowego", "koncentratu bulionu mięsnego",
  "łyżeczka koncentratu bulionu mięsnego", "łyżeczki koncentratu bulionu mięsnego",
  "koncentratu bulionu wegańskiego", "łyżeczka koncentratu bulionu wegańskiego",
  "bulionu warzywnego",
  "ekstraktu z wanilii", "ekstraktu migdałowego", "laski wanilii", "pasty waniliowej",
];

export const PRODUKTY: Produkt[] = [
  // --- WARZYWA ---
  { id: "cebula", nazwa: "Cebula", grupa: "Warzywa", warianty: ["cebuli", "cebula"] },
  { id: "cebula-czerwona", nazwa: "Czerwona cebula", grupa: "Warzywa", warianty: ["czerwonej cebuli"] },
  { id: "szalotka", nazwa: "Szalotka", grupa: "Warzywa", warianty: ["cebuli szalotki"] },
  { id: "dymka", nazwa: "Dymka / zielona cebulka", grupa: "Warzywa", warianty: ["cebuli dymki", "cebula dymka", "zielona cebulka ze szczypiorkiem", "zielone cebulki ze szczypiorkiem"] },
  { id: "czosnek", nazwa: "Czosnek", grupa: "Warzywa", warianty: ["czosnku", "czosnek", "ząbek czosnku", "ząbków czosnku"] },
  { id: "marchewka", nazwa: "Marchewka", grupa: "Warzywa", warianty: ["marchewki"] },
  { id: "ziemniaki", nazwa: "Ziemniaki", grupa: "Warzywa", warianty: ["ziemniaków", "ziemniaka"] },
  { id: "cukinia", nazwa: "Cukinia", grupa: "Warzywa", warianty: ["cukinii", "cukinia", "cukinie"] },
  { id: "papryka-czerwona", nazwa: "Papryka czerwona", grupa: "Warzywa", warianty: ["czerwonej papryki", "czerwona papryka"] },
  { id: "papryka-zielona", nazwa: "Papryka zielona", grupa: "Warzywa", warianty: ["zielonej papryki"] },
  { id: "papryka-zolta", nazwa: "Papryka żółta", grupa: "Warzywa", warianty: ["żółtej papryki", "żółta papryka"] },
  { id: "papryka", nazwa: "Papryka (dowolna)", grupa: "Warzywa", warianty: ["papryki"] },
  { id: "pomidory", nazwa: "Pomidory", grupa: "Warzywa", warianty: ["pomidorów", "pomidor", "pomidora", "pomidorki cherry", "pomidorka koktajlowego", "pomidorków koktajlowych", "włoski pomidor koktajlowy"] },
  { id: "pomidory-puszka", nazwa: "Pomidory z puszki", grupa: "Warzywa", warianty: ["krojonych pomidorów"] },
  { id: "passata", nazwa: "Passata / przecier", grupa: "Warzywa", warianty: ["przecieru pomidorowego"] },
  { id: "koncentrat", nazwa: "Koncentrat pomidorowy", grupa: "Warzywa", warianty: ["koncentratu pomidorowego"] },
  { id: "ogorek", nazwa: "Ogórek", grupa: "Warzywa", warianty: ["ogórka", "ogórków"] },
  { id: "ogorki-kiszone", nazwa: "Ogórki kiszone / konserwowe", grupa: "Warzywa", warianty: ["ogórków kiszonych", "ogórków konserwowych"] },
  { id: "por", nazwa: "Por", grupa: "Warzywa", warianty: ["pora"] },
  { id: "brokul", nazwa: "Brokuł", grupa: "Warzywa", warianty: ["różyczek brokułu", "brokułu", "brokułów"] },
  { id: "kalafior", nazwa: "Kalafior", grupa: "Warzywa", warianty: ["różyczek kalafiora", "kalafiora", "kalafior"] },
  { id: "szpinak", nazwa: "Szpinak", grupa: "Warzywa", warianty: ["liści szpinaku baby", "liści szpinaku"] },
  { id: "dynia", nazwa: "Dynia", grupa: "Warzywa", warianty: ["miąższu dyni", "dyni", "dyni piżmowej", "dyni hokkaido", "purée z dyni"] },
  { id: "bataty", nazwa: "Bataty", grupa: "Warzywa", warianty: ["batatów", "batata"] },
  { id: "seler-naciowy", nazwa: "Seler naciowy", grupa: "Warzywa", warianty: ["selera naciowego"] },
  { id: "warzywa-korzeniowe", nazwa: "Korzeń selera i pietruszki", grupa: "Warzywa", warianty: ["korzenia selera", "korzenia pietruszki", "włoszczyzny do zupy", "warzyw"] },
  { id: "rzodkiewka", nazwa: "Rzodkiewka", grupa: "Warzywa", warianty: ["rzodkiewek"] },
  { id: "buraki", nazwa: "Buraki", grupa: "Warzywa", warianty: ["czerwonych buraków", "botwiny"] },
  { id: "kapusta-kiszona", nazwa: "Kapusta kiszona", grupa: "Warzywa", warianty: ["kapusty kiszonej"] },
  { id: "kapusta", nazwa: "Kapusta", grupa: "Warzywa", warianty: ["czerwonej kapusty", "liści kapusty pekińskiej", "kapusty pak choi"] },
  { id: "salata", nazwa: "Sałata", grupa: "Warzywa", warianty: ["sałaty lodowej", "sałaty", "sałata masłowa", "mieszanki młodych sałat", "roszponka"] },
  { id: "rukola", nazwa: "Rukola", grupa: "Warzywa", warianty: ["rukoli"] },
  { id: "jarmuz", nazwa: "Jarmuż", grupa: "Warzywa", warianty: ["jarmużu"] },
  { id: "groszek", nazwa: "Groszek", grupa: "Warzywa", warianty: ["zielonego groszku", "groszek cukrowy", "strączków groszku cukrowego"] },
  { id: "fasolka", nazwa: "Fasolka szparagowa", grupa: "Warzywa", warianty: ["zielonej fasolki mamut", "zielone fasolki mamut", "zielonej fasolki szparagowej"] },
  { id: "szparagi", nazwa: "Szparagi", grupa: "Warzywa", warianty: ["zielonych szparagów"] },
  { id: "pieczarki", nazwa: "Pieczarki", grupa: "Warzywa", warianty: ["pieczarek", "pieczarki", "pieczarek marynowanych"] },
  { id: "baklazan", nazwa: "Bakłażan", grupa: "Warzywa", warianty: ["bakłażana"] },
  { id: "kukurydza", nazwa: "Kukurydza", grupa: "Warzywa", warianty: ["kukurydzy"] },
  { id: "awokado", nazwa: "Awokado", grupa: "Warzywa", warianty: ["awokado"] },
  { id: "chili", nazwa: "Papryczka chili", grupa: "Warzywa", warianty: ["papryczki chili", "chili", "czerwonej papryczki chili", "czerwona papryczka chili", "czerwone papryczki chili", "papryczek chili", "papryczkę chili", "zielona papryczka chili", "zielone papryczki chili"] },
  { id: "imbir", nazwa: "Imbir", grupa: "Warzywa", warianty: ["korzenia imbiru", "imbiru"] },
  { id: "fenkul", nazwa: "Fenkuł", grupa: "Warzywa", warianty: ["fenkułu"] },
  { id: "oliwki", nazwa: "Oliwki", grupa: "Warzywa", warianty: ["czarnych oliwek", "zielonych oliwek", "oliwek"] },
  { id: "chrzan", nazwa: "Chrzan", grupa: "Warzywa", warianty: ["chrzanu", "chrzanu tartego"] },
  { id: "kapary", nazwa: "Kapary", grupa: "Warzywa", warianty: ["kaparów"] },

  // --- ZIOŁA ŚWIEŻE ---
  { id: "natka", nazwa: "Natka pietruszki", grupa: "Świeże zioła", warianty: ["natki pietruszki", "natka pietruszki", "liści natki pietruszki", "gałązek natki pietruszki", "gałązek liści natki pietruszki", "łodyżki natki pietruszki"] },
  { id: "koperek", nazwa: "Koperek", grupa: "Świeże zioła", warianty: ["koperku", "koperek", "gałązek koperku"] },
  { id: "szczypiorek", nazwa: "Szczypiorek", grupa: "Świeże zioła", warianty: ["szczypiorku", "szczypiorek", "łodyżek szczypiorku"] },
  { id: "kolendra", nazwa: "Kolendra", grupa: "Świeże zioła", warianty: ["kolendry", "kolendra", "gałązek kolendry", "liści kolendry"] },
  { id: "bazylia", nazwa: "Bazylia", grupa: "Świeże zioła", warianty: ["bazylii", "bazylia", "liści bazylii"] },
  { id: "mieta", nazwa: "Mięta", grupa: "Świeże zioła", warianty: ["mięty"] },
  { id: "rzezucha", nazwa: "Rzeżucha", grupa: "Świeże zioła", warianty: ["rzeżucha"] },

  // --- OWOCE ---
  { id: "jablka", nazwa: "Jabłka", grupa: "Owoce", warianty: ["jabłek", "jabłka", "jabłko"] },
  { id: "banany", nazwa: "Banany", grupa: "Owoce", warianty: ["banana", "bananów", "banan", "banany"] },
  { id: "gruszki", nazwa: "Gruszki", grupa: "Owoce", warianty: ["gruszki", "gruszek", "gruszka", "gruszkę"] },
  { id: "cytryna", nazwa: "Cytryna", grupa: "Owoce", warianty: ["soku z cytryny", "cytryna", "cytryny", "skórki z cytryny", "skórka otarta z 1 cytryny", "skórka otarta z ½ cytryny", "sok z ½ cytryny"] },
  { id: "limonka", nazwa: "Limonka", grupa: "Owoce", warianty: ["soku z limonki", "limonki", "skórki otartej z limonki"] },
  { id: "pomarancza", nazwa: "Pomarańcza", grupa: "Owoce", warianty: ["soku z pomarańczy", "pomarańcza", "pomarańcze", "pomarańczy", "klementynek"] },
  { id: "truskawki", nazwa: "Truskawki", grupa: "Owoce", warianty: ["truskawek"] },
  { id: "maliny", nazwa: "Maliny", grupa: "Owoce", warianty: ["malin", "maliny"] },
  { id: "borowki", nazwa: "Borówki", grupa: "Owoce", warianty: ["borówek", "borówek amerykańskich", "borówki"] },
  { id: "owoce-jagodowe", nazwa: "Owoce jagodowe (mieszane)", grupa: "Owoce", warianty: ["owoców jagodowych", "owoce jagodowe", "czerwone owoce jagodowe", "jagód", "jeżyn", "mieszane owoce", "owoców", "żurawiny"] },
  { id: "ananas", nazwa: "Ananas", grupa: "Owoce", warianty: ["ananasa", "kawałków ananasa", "plastrów ananasa"] },
  { id: "mango", nazwa: "Mango", grupa: "Owoce", warianty: ["mango", "miąższu mango"] },
  { id: "kiwi", nazwa: "Kiwi", grupa: "Owoce", warianty: ["kiwi"] },
  { id: "melon", nazwa: "Melon", grupa: "Owoce", warianty: ["melona miodowego"] },
  { id: "brzoskwinie", nazwa: "Brzoskwinie", grupa: "Owoce", warianty: ["brzoskwiń"] },
  { id: "sliwki", nazwa: "Śliwki", grupa: "Owoce", warianty: ["śliwek węgierek", "śliwek suszonych"] },
  { id: "suszone", nazwa: "Morele suszone, rodzynki, daktyle", grupa: "Owoce", warianty: ["moreli suszonych", "rodzynek", "daktyli"] },
  { id: "granat", nazwa: "Granat", grupa: "Owoce", warianty: ["pestek granatu"] },

  // --- MIĘSO I RYBY ---
  { id: "kurczak", nazwa: "Kurczak", grupa: "Mięso i ryby", warianty: ["fileta z piersi kurczaka", "filetów z piersi kurczaka", "piersi z kurczaka", "udek z kurczaka", "nogi z kurczaka"] },
  { id: "indyk", nazwa: "Indyk", grupa: "Mięso i ryby", warianty: ["fileta z piersi indyka", "filetów z piersi indyka", "piersi z indyka", "mięsa z indyka", "udźca z indyka", "polędwiczek drobiowych"] },
  { id: "wolowina", nazwa: "Wołowina", grupa: "Mięso i ryby", warianty: ["mięsa wołowego", "wołowiny", "wołowiny gulaszowej", "udźca wołowego", "polędwicy wołowej"] },
  { id: "cielecina", nazwa: "Cielęcina", grupa: "Mięso i ryby", warianty: ["cielęciny"] },
  { id: "wieprzowina", nazwa: "Schab / wieprzowina", grupa: "Mięso i ryby", warianty: ["schabu wieprzowego", "plastrów schabu wieprzowego", "plastry schabu wieprzowego", "kotletów schabowych", "polędwicy wieprzowej"] },
  { id: "boczek", nazwa: "Boczek", grupa: "Mięso i ryby", warianty: ["boczku wędzonego", "surowego boczku", "kostek boczku", "plastrów boczku parzonego"] },
  { id: "szynka", nazwa: "Szynka", grupa: "Mięso i ryby", warianty: ["szynki", "szynki gotowanej", "plastrów szynki drobiowej", "plastrów szynki długodojrzewającej", "szynki długodojrzewającej"] },
  { id: "kielbasa", nazwa: "Kiełbasa", grupa: "Mięso i ryby", warianty: ["kiełbasy", "kiełbasy chorizo"] },
  { id: "losos", nazwa: "Łosoś", grupa: "Mięso i ryby", warianty: ["fileta z łososia", "filety z łososia", "filetów z łososia", "filet z łososia", "wędzonego łososia", "plastrów wędzonego łososia", "łososia wędzonego na zimno"] },
  { id: "tunczyk", nazwa: "Tuńczyk", grupa: "Mięso i ryby", warianty: ["tuńczyka"] },
  { id: "ryba-biala", nazwa: "Ryba biała", grupa: "Mięso i ryby", warianty: ["fileta z morszczuka", "filetów z ryby o białym mięsie"] },
  { id: "makrela", nazwa: "Makrela", grupa: "Mięso i ryby", warianty: ["makreli", "filety z anchois"] },
  { id: "krewetki", nazwa: "Krewetki", grupa: "Mięso i ryby", warianty: ["krewetek", "krewetki", "krewetek tygrysich"] },
  { id: "tofu", nazwa: "Tofu", grupa: "Mięso i ryby", warianty: ["tofu"] },

  // --- NABIAŁ I JAJA ---
  { id: "jajka", nazwa: "Jajka", grupa: "Nabiał i jaja", warianty: ["jajka", "jajko", "jajek", "jajek ugotowanych na twardo", "jajka ugotowane na twardo", "żółtka"] },
  { id: "mleko", nazwa: "Mleko", grupa: "Nabiał i jaja", warianty: ["mleka", "pełnotłustego mleka"] },
  { id: "smietana", nazwa: "Śmietana", grupa: "Nabiał i jaja", warianty: ["śmietany", "kwaśnej śmietany", "kwaśna śmietana", "łyżki kwaśnej śmietany", "śmietany uht"] },
  { id: "jogurt", nazwa: "Jogurt naturalny", grupa: "Nabiał i jaja", warianty: ["jogurtu naturalnego", "jogurt naturalny", "jogurtu"] },
  { id: "jogurt-grecki", nazwa: "Jogurt grecki", grupa: "Nabiał i jaja", warianty: ["jogurtu greckiego", "jogurt grecki", "jogurtu typu greckiego", "jogurt typu greckiego", "jogurtu typu islandzkiego"] },
  { id: "maslo", nazwa: "Masło", grupa: "Nabiał i jaja", warianty: ["masła", "masło", "masło klarowane", "masła klarowanego", "masła klarowanego (ghee)"] },
  { id: "twarog", nazwa: "Twaróg / serek wiejski", grupa: "Nabiał i jaja", warianty: ["twarogu", "twarogu sernikowego", "serka wiejskiego"] },
  { id: "serek-kremowy", nazwa: "Serek kremowy", grupa: "Nabiał i jaja", warianty: ["serka kremowego", "serek śmietankowy", "serka śmietankowego"] },
  { id: "ser-zolty", nazwa: "Ser żółty", grupa: "Nabiał i jaja", warianty: ["sera żółtego", "sera", "sera cheddar", "ser cheddar", "sera gruyère"] },
  { id: "parmezan", nazwa: "Parmezan", grupa: "Nabiał i jaja", warianty: ["sera parmezan"] },
  { id: "mozzarella", nazwa: "Mozzarella", grupa: "Nabiał i jaja", warianty: ["sera mozzarella", "mozzarelli"] },
  { id: "feta", nazwa: "Feta / ser kozi", grupa: "Nabiał i jaja", warianty: ["sera feta", "sera typu feta", "koziego sera"] },
  { id: "mascarpone", nazwa: "Mascarpone", grupa: "Nabiał i jaja", warianty: ["sera mascarpone"] },
  { id: "gorgonzola", nazwa: "Gorgonzola", grupa: "Nabiał i jaja", warianty: ["sera gorgonzola"] },
  { id: "kefir", nazwa: "Kefir", grupa: "Nabiał i jaja", warianty: ["kefiru"] },
  { id: "napoj-roslinny", nazwa: "Napój roślinny", grupa: "Nabiał i jaja", warianty: ["napoju roślinnego", "napoju migdałowego", "napoju kokosowego", "jogurtu sojowego"] },
  { id: "mleko-kokosowe", nazwa: "Mleko kokosowe", grupa: "Nabiał i jaja", warianty: ["mleczka kokosowego", "mleka kokosowego"] },

  // --- SPIŻARNIA ---
  { id: "makaron", nazwa: "Makaron", grupa: "Spiżarnia", warianty: ["makaronu", "makaron", "makaronu pełnoziarnistego", "makaronu udon", "azjatyckiego makaronu pszennego", "azjatyckiego cienkiego makaronu", "płatów makaronu", "klusek jajecznych", "gnocchi"] },
  { id: "ryz", nazwa: "Ryż", grupa: "Spiżarnia", warianty: ["ryżu białego", "ryżu basmati", "ryżu długoziarnistego", "ryżu do risotto", "ryżu brązowego", "ryżu jaśminowego", "ryżu parboiled", "mieszanki ryżu basmati i dzikiego"] },
  { id: "kasza", nazwa: "Kasza", grupa: "Spiżarnia", warianty: ["kaszy bulgur", "kaszy gryczanej", "kaszy jęczmiennej pęczak", "kasza jęczmienna pęczak", "kaszy manny", "kaszy kuskus"] },
  { id: "platki-owsiane", nazwa: "Płatki owsiane", grupa: "Spiżarnia", warianty: ["płatków owsianych", "otrębów owsianych", "otrębów pszennych", "zarodków pszennych", "płatków kukurydzianych", "płatków ryżowych", "pełnoziarnistych płatków zbożowych", "bezglutenowych płatków zbożowych"] },
  { id: "ciecierzyca", nazwa: "Ciecierzyca", grupa: "Spiżarnia", warianty: ["białej ciecierzycy", "ciecierzycy", "mąki z ciecierzycy"] },
  { id: "soczewica", nazwa: "Soczewica", grupa: "Spiżarnia", warianty: ["czerwonej soczewicy", "zielonej soczewicy"] },
  { id: "fasola", nazwa: "Fasola", grupa: "Spiżarnia", warianty: ["czerwonej fasoli kidney", "białej fasoli"] },
  { id: "bulka-tarta", nazwa: "Bułka tarta", grupa: "Spiżarnia", warianty: ["bułki tartej", "bułka tarta", "krakersów solonych"] },
  { id: "pieczywo", nazwa: "Pieczywo", grupa: "Spiżarnia", warianty: ["pieczywo", "chleb", "chleba", "białego chleba tostowego", "kromek białego chleba", "bagietka", "grzanki", "bułeczki english muffins"] },
  { id: "orzechy", nazwa: "Orzechy i migdały", grupa: "Spiżarnia", warianty: ["orzechów włoskich", "orzechy włoskie", "orzechów laskowych", "orzechów nerkowca", "orzechów pekan", "orzechów pistacjowych", "orzeszków piniowych", "migdałów", "migdały"] },
  { id: "orzeszki-ziemne", nazwa: "Orzeszki ziemne i masło orzechowe", grupa: "Spiżarnia", warianty: ["orzeszków ziemnych", "orzeszek ziemny", "masła orzechowego", "masła migdałowego", "pasty tahini"] },
  { id: "chia", nazwa: "Nasiona chia", grupa: "Spiżarnia", warianty: ["nasion chia"] },
  { id: "siemie", nazwa: "Siemię lniane", grupa: "Spiżarnia", warianty: ["siemienia lnianego", "siemię lniane"] },
  { id: "pestki", nazwa: "Pestki i ziarna", grupa: "Spiżarnia", warianty: ["ziaren słonecznika", "słonecznika łuskanego", "pestek dyni", "mieszanych ziaren", "ziarna", "nasion konopi"] },
  { id: "sezam", nazwa: "Sezam", grupa: "Spiżarnia", warianty: ["ziarna sezamu", "ziaren sezamu"] },
  { id: "kokos", nazwa: "Wiórki kokosowe", grupa: "Spiżarnia", warianty: ["wiórków kokosowych", "płatków kokosa", "płatki kokosowe"] },
  { id: "kakao", nazwa: "Kakao i czekolada", grupa: "Spiżarnia", warianty: ["kakao naturalnego", "gorzkiej czekolady", "surowe ziarna kakaowca"] },
  { id: "drozdze", nazwa: "Drożdże", grupa: "Spiżarnia", warianty: ["suchych drożdży", "świeżych drożdży", "płatków drożdżowych"] },
  { id: "suszone-pomidory", nazwa: "Suszone pomidory", grupa: "Spiżarnia", warianty: ["suszonych pomidorów"] },
  { id: "ciasto-francuskie", nazwa: "Ciasto francuskie", grupa: "Spiżarnia", warianty: ["płaty ciasta francuskiego"] },
  { id: "budyn", nazwa: "Budyń", grupa: "Spiżarnia", warianty: ["budyniu waniliowego"] },
  { id: "bialko", nazwa: "Białko w proszku", grupa: "Spiżarnia", warianty: ["białka w proszku", "białka serwatkowego w proszku"] },
  { id: "wino", nazwa: "Wino / alkohol do gotowania", grupa: "Spiżarnia", warianty: ["białego wina", "czerwonego wina", "wódki", "whisky", "ginu", "koniaku", "spirytusu rektyfikowanego 96%"] },
  /**
   * Osobna pozycja, a nie „mleko" — przepisy na rozszerzanie diety
   * niemowląt wołają o wodę przeznaczoną dla niemowląt i mleko początkowe.
   * Wrzucenie tego do zwykłego mleka podpowiadałoby zamianę, której nikt
   * tu nie zaproponował.
   */
  { id: "niemowlece", nazwa: "Woda i mleko dla niemowląt", grupa: "Spiżarnia", warianty: ["atestowanej wody dla niemowląt", "mleka początkowego (0-6 miesięcy)", "łyżeczka mleka początkowego (0-6 miesięcy)", "mleka w proszku"] },

  // --- SOSY I PASTY ---
  { id: "majonez", nazwa: "Majonez", grupa: "Sosy i pasty", warianty: ["majonezu"] },
  { id: "musztarda", nazwa: "Musztarda", grupa: "Sosy i pasty", warianty: ["musztardy", "musztardy dijon", "musztardy francuskiej"] },
  { id: "sos-sojowy", nazwa: "Sos sojowy", grupa: "Sosy i pasty", warianty: ["sosu sojowego", "sosu sojowego tamari", "pasty sojowej"] },
  { id: "sos-ostry", nazwa: "Sos ostry / sriracha", grupa: "Sosy i pasty", warianty: ["sosu sriracha", "pasty harissa", "pasty chili z bobem", "łyżeczka sosu sambal oelek"] },
  { id: "sos-rybny", nazwa: "Sos rybny", grupa: "Sosy i pasty", warianty: ["sosu rybnego"] },
  { id: "sos-worcester", nazwa: "Sos Worcestershire", grupa: "Sosy i pasty", warianty: ["sosu worcestershire"] },
  { id: "sos-azjatycki", nazwa: "Sos teriyaki / hoisin", grupa: "Sosy i pasty", warianty: ["sosu teriyaki", "sosu hoisin", "mirinu", "wina ryżowego"] },
];
