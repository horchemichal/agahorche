# Narzędzia do pilnowania jakości stron miast

Trzy skrypty, które trzeba uruchamiać przy każdej nowej fali stron.
Wszystkie odpalamy **z katalogu głównego repozytorium**.

## 1. `braki-w-wojewodztwie.mjs` — co jeszcze zostało

```
node scripts/braki-w-wojewodztwie.mjs kujawsko-pomorskie.ts
```

Czyta plik województwa z `data/locations/`, zestawia listę miejscowości
z tym, co realnie ma własną treść (`data/locations/cities/*.ts` plus miasta
zdefiniowane wprost w `city-content.ts`), i wypisuje brakujące, posortowane
malejąco po liczbie mieszkańców. To jest pierwszy krok każdej rundy.

## 2. `sprawdz-katy.py` — czy kąt redakcyjny nie jest już zajęty

```
python3 scripts/sprawdz-katy.py "odstęp" "przesiewanie" "moczenie"
```

Dla każdego słowa wypisuje `TAKEN` albo `FREE`, a przy `TAKEN` pokazuje,
które miasta już ten temat zajmują. **To jest krok, który trzeba zrobić
PRZED napisaniem strony, nie po.** Cała idea serwisu opiera się na tym,
że każde miasto ma własny, nigdzie indziej nieużyty kąt.

Skrypt patrzy w dwa miejsca:

1. pełny, wieloliniowy blok `KĄT:` z nagłówka pliku (569 stron),
2. dla stron bez takiego nagłówka — nagłówki i pierwsze akapity sekcji
   niestandardowych oraz blok `culinary` (188 najstarszych stron
   małopolskich, pisanych przed wprowadzeniem konwencji). Trafienia z tej
   drugiej grupy są oznaczone `[z tresci, nie z KAT]`.

⚠ Wcześniejsza wersja czytała **wyłącznie linię zawierającą `KĄT:`**, więc
gubiła opisy przeniesione do kolejnych linii i w ogóle nie widziała tych
188 stron. Przez to przeoczyła m.in. kolizję Łasin ↔ Jastarnia wokół sprzętu
jednozadaniowego. Nie wracać do tamtej wersji.

⚠ Dopasowanie jest po fragmencie tekstu, więc bywają trafienia przypadkowe
(np. „dwa razy” złapie „w widłach dwóch rzek”). Wyniki trzeba przeczytać,
a nie tylko policzyć.

## 3. `sprawdz-strony-miast.mjs` — kontrola techniczna gotowych plików

```
node scripts/sprawdz-strony-miast.mjs                 # cały katalog
node scripts/sprawdz-strony-miast.mjs lipno mrocza    # tylko wskazane
```

Sprawdza m.in.: cyrylicę podstawioną pod łacinkę, niedomknięte polskie
cudzysłowy, wymagane pola, duplikaty slugów, duplikaty i zakres współrzędnych,
miasto wymienione we własnym `nearbyTowns`, spójność numeru telefonu, długość
`seoTitle` i `seoDescription` oraz zdania powtórzone między stronami.

⚠ Poprzednia wersja **ignorowała argumenty z linii poleceń** i zawsze
sprawdzała zaszytą listę dziesięciu plików — więc każde „QA: OK” dla świeżo
napisanego miasta było bez pokrycia. Teraz argumenty działają, a ich brak
oznacza pełny przemiat katalogu.

### Jak czytać wynik „zdanie powtórzone”

Część powtórzeń jest **zamierzona**: wspólny szkielet operacyjny (jak wygląda
prezentacja, dojazd, raty) i zastrzeżenia etyczne o bezpieczeństwie żywności
mają brzmieć wszędzie tak samo. Naprawiać trzeba powtórzenia, które trafiły
do **sekcji z kątem redakcyjnym**, a zwłaszcza te między **sąsiadującymi
miastami** — bo tam czytelnik może zobaczyć obie strony.
