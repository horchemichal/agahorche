#!/usr/bin/env python3
"""Generuje 4 poradniki w formacie content/poradniki/*.md (nagłówek JSON + '---' + treść)."""
import json, os

DZIS = "2026-10-31"
OUT = "content/poradniki"

STRONY = []

# ─────────────────────────────────────────────────────────────── 1
STRONY.append(dict(
    slug="thermomix-odstapienie-od-umowy",
    path="/thermomix/odstapienie-od-umowy",
    seoTitle="Odstąpienie od umowy po prezentacji Thermomix — 14 dni",
    seoDescription="Thermomix kupiony na prezentacji w domu można zwrócić w 14 dni bez podania przyczyny. Od kiedy liczyć termin, co z ratami i jak to zgłosić — wyjaśnia przedstawiciel Thermomix.",
    h1="Odstąpienie od umowy po prezentacji Thermomix",
    lead="To pierwsze pytanie, które zadaje sobie rozsądna osoba przed podpisaniem czegokolwiek we własnej kuchni: a jeśli się rozmyślę? Odpowiedź jest prosta i wynika z ustawy, nie z dobrej woli sprzedawcy. Poniżej opisuję ją tak, jak tłumaczę ją na prezentacjach.",
    skrot=[
        "Zakup na prezentacji w domu to umowa zawarta poza lokalem przedsiębiorstwa — masz 14 dni na odstąpienie bez podawania przyczyny.",
        "Przy zakupie urządzenia termin liczy się od dnia, w którym trafiło do Ciebie, a nie od dnia prezentacji.",
        "30 dni dotyczy wizyt nieumówionych; na prezentację się umawiasz, więc co do zasady obowiązuje 14 dni.",
        "Przy ratach z kredytem powiązanym odstąpienie od zakupu działa też na kredyt — bez prowizji i odsetek.",
        "Wystarczy oświadczenie na piśmie albo mailem, wysłane przed upływem terminu.",
    ],
    breadcrumbs=[["Thermomix", "/thermomix"], ["Odstąpienie od umowy", "/thermomix/odstapienie-od-umowy"]],
    keywords=["odstąpienie od umowy thermomix", "zwrot thermomixa", "thermomix 14 dni", "thermomix zwrot po prezentacji",
              "umowa poza lokalem przedsiębiorstwa", "thermomix raty odstąpienie", "czy można zwrócić thermomix"],
    faq=[
        ["Czy muszę podać powód odstąpienia od umowy?",
         "Nie. Prawo odstąpienia od umowy zawartej poza lokalem przedsiębiorstwa nie wymaga uzasadnienia (art. 27 ust. 1 ustawy o prawach konsumenta)."],
        ["Od kiedy liczy się 14 dni na zwrot Thermomixa?",
         "Od dnia, w którym urządzenie trafiło do Ciebie — nie od dnia prezentacji ani złożenia zamówienia (art. 28 ustawy o prawach konsumenta)."],
        ["Czy przy prezentacji w domu przysługuje 30 dni?",
         "Co do zasady nie. 30 dni dotyczy umów zawartych podczas nieumówionej wizyty sprzedawcy albo wycieczki (art. 27 ust. 2). Na prezentację Thermomixa się umawiasz, więc obowiązuje termin 14-dniowy."],
        ["Zakup jest na raty — czy trzeba osobno wypowiadać kredyt?",
         "Jeśli kredyt jest powiązany z zakupem, nie. Odstąpienie od umowy zakupu działa również na umowę kredytu, a kredytodawca nie może żądać prowizji ani odsetek (art. 57 ustawy o kredycie konsumenckim)."],
        ["Czy mogę ugotować coś w Thermomixie przed zwrotem?",
         "Tak, możesz sprawdzić, jak działa. Odpowiadasz jednak za zmniejszenie wartości urządzenia, jeśli korzystasz z niego bardziej, niż potrzeba do sprawdzenia jego charakteru, cech i działania (art. 34 ust. 4)."],
        ["Kto płaci za odesłanie Thermomixa?",
         "Co do zasady bezpośredni koszt odesłania ponosi kupujący, chyba że sprzedawca zgodził się go pokryć."],
        ["Co, jeśli nikt mi nie powiedział o prawie do odstąpienia?",
         "Wtedy termin nie kończy się po 14 dniach, tylko 12 miesięcy po upływie zwykłego terminu (art. 29 ust. 1)."],
    ],
    related=[["Thermomix na raty", "/finansowanie"], ["Jak wygląda prezentacja", "/prezentacja/jak-wyglada"],
             ["Jak kupić Thermomix", "/jak-kupic-thermomix"], ["Czego Thermomix nie zrobi", "/thermomix/czego-nie-zrobi"],
             ["Wady i zalety", "/thermomix/wady-i-zalety"], ["Umów prezentację", "/prezentacja"]],
    body="""## Zanim zaczniesz: zastrzeżenie

**Nie jestem prawnikiem.** Opisuję zasady wynikające z ustawy o prawach konsumenta i ustawy o kredycie konsumenckim tak, jak sama je rozumiem i stosuję u klientów. W konkretnej, spornej sytuacji zapytaj rzecznika konsumentów w swoim powiecie — porada jest bezpłatna.

## Dlaczego to w ogóle Cię dotyczy

Prezentacja Thermomixa odbywa się w Twojej kuchni, a nie w sklepie. Jeśli po niej zamawiasz urządzenie, prawo traktuje to jako **umowę zawartą poza lokalem przedsiębiorstwa**. Dla takich umów ustawa daje prawo wycofania się bez podawania powodu.

To nie jest gest sprzedawcy ani promocja. To ustawowe prawo kupującego i nie da się go wyłączyć w umowie.

## Ile masz czasu: 14 czy 30 dni?

**Co do zasady 14 dni** (art. 27 ust. 1 ustawy o prawach konsumenta).

W internecie trafisz też na informację o 30 dniach. To prawda, ale dotyczy innej sytuacji: ustawa przewiduje 30 dni, gdy umowę zawarto podczas **nieumówionej wizyty** sprzedawcy w domu albo podczas wycieczki (art. 27 ust. 2). Chodzi o sprzedawców, którzy pukają bez zapowiedzi.

Prezentacja Thermomixa to wizyta, na którą się **umawiasz**: wybierasz termin, wiesz, kto przyjdzie i po co. Dlatego przy prezentacji obowiązuje co do zasady termin 14-dniowy. Mówię to wprost, bo lepiej znać realny termin, niż liczyć na dłuższy i się przeliczyć.

## Od kiedy liczyć te 14 dni

To najczęstsze nieporozumienie.

Przy zakupie rzeczy — a Thermomix jest rzeczą — termin biegnie **od dnia, w którym urządzenie trafiło do Ciebie** (art. 28). Nie od dnia prezentacji i nie od dnia złożenia zamówienia.

W praktyce: jeśli zamówienie złożysz w poniedziałek na prezentacji, a kurier przyniesie urządzenie dwa tygodnie później, 14 dni dopiero wtedy się zaczyna.

**Wskazówka:** zapisz datę dostawy. Najprościej zrobić zdjęcie listu przewozowego telefonem.

## Co, jeśli nikt Ci o tym nie powiedział

Sprzedawca ma obowiązek poinformować o prawie odstąpienia przed zawarciem umowy. Jeśli tego nie zrobił, prawo **nie wygasa po 14 dniach**, tylko dopiero **12 miesięcy po upływie** zwykłego terminu (art. 29 ust. 1).

Ja mówię o tym na każdej prezentacji, a informacja jest też w dokumentach zamówienia. Warto jednak wiedzieć, że ta zasada istnieje.

## Jak odstąpić od umowy krok po kroku

- **Krok 1 — oświadczenie.** Złóż je przed upływem terminu, na piśmie albo mailem, tak żeby został ślad. Nie musisz podawać powodu.
- **Krok 2 — adres.** Wyślij je na adres z dokumentów zamówienia. Liczy się data wysłania, a nie doręczenia.
- **Krok 3 — odesłanie urządzenia.** Bez zbędnej zwłoki, najpóźniej w ciągu 14 dni od złożenia oświadczenia. Kompletne, ze wszystkimi elementami.
- **Krok 4 — zwrot pieniędzy.** Sprzedawca ma na to 14 dni od otrzymania oświadczenia. Może wstrzymać zwrot, dopóki nie dostanie urządzenia albo dowodu jego odesłania.

**Kto płaci za odesłanie?** Co do zasady bezpośredni koszt zwrotu ponosi kupujący, chyba że sprzedawca zgodził się go pokryć. Warto o to zapytać przy zamówieniu.

**Karton i wszystkie elementy** zachowaj przez pierwsze tygodnie.

## Raty: co dzieje się z kredytem

To pytanie, o które ludzie boją się zapytać, a ma najprostszą odpowiedź.

Jeśli Thermomix jest kupiony na raty i kredyt jest **powiązany** z zakupem — czyli finansowanie zostało załatwione razem z zamówieniem, a pieniądze trafiły do sprzedawcy — to odstąpienie od umowy zakupu **działa również na umowę kredytu** (art. 57 ustawy o kredycie konsumenckim).

W praktyce: nie trzeba osobno wypowiadać kredytu, a kredytodawca nie może żądać prowizji, opłat ani odsetek za ten kredyt.

**Uwaga:** jeśli pieniądze z kredytu trafiły na Twoje konto i dopiero z niego poszła zapłata za urządzenie, kredyt i zakup są osobnymi umowami. Sprawdź w dokumentach, jak było w Twoim przypadku. Więcej o finansowaniu: [Thermomix na raty](/finansowanie).

## Czy można używać Thermomixa przez te 14 dni?

**Tak, ale z rozsądkiem.**

Urządzenie możesz sprawdzić tak, jak w sklepie: włączyć, zobaczyć, jak działa, ugotować coś na próbę. Odpowiadasz natomiast za zmniejszenie jego wartości, jeśli korzystasz z niego **w sposób wykraczający poza konieczny do stwierdzenia charakteru, cech i funkcjonowania** (art. 34 ust. 4).

Ustawa nie podaje liczby dni ani posiłków. Moja uczciwa rada: jedno, dwa próbne gotowania — tak. Codzienne gotowanie przez dwa tygodnie i odesłanie urządzenia z zarysowanym naczyniem — to już ryzyko, że zwrot zostanie obniżony.

## Moje zdanie jako przedstawiciel

Gdyby z tej strony zapamiętać tylko jedną rzecz, byłaby to ta: **nie musisz decydować na prezentacji.**

Możesz poprosić o czas do namysłu, policzyć raty w domu i oddzwonić. A jeśli zdecydujesz od razu i po tygodniu uznasz, że to nie dla Ciebie — masz prawo się wycofać. Wolę klienta, który kupił spokojnie, niż takiego, który żałuje.

Jeśli masz wątpliwości przed zakupem, zobacz uczciwą listę: [czego Thermomix nie zrobi](/thermomix/czego-nie-zrobi). A jeśli chcesz zobaczyć urządzenie u siebie w kuchni — [umów bezpłatną prezentację](/prezentacja).
""",
))

# ─────────────────────────────────────────────────────────────── 2
STRONY.append(dict(
    slug="thermomix-jadlospis-na-tydzien",
    path="/thermomix/jadlospis-na-tydzien",
    seoTitle="Jak ułożyć jadłospis na tydzień — metoda krok po kroku",
    seoDescription="Jadłospis na tydzień, którego da się trzymać: zacznij od kalendarza, planuj 4–5 obiadów zamiast 7, dobieraj dania parami i zostaw dzień na resztki. Praktycznie, od przedstawiciela Thermomix.",
    h1="Jak ułożyć jadłospis na tydzień",
    lead="Większość osób, które kupują Thermomix, nie ma problemu z gotowaniem. Ma problem z pytaniem „co dziś na obiad”, które wraca codziennie o 16:30. Jadłospis tygodniowy zamyka to pytanie raz, w niedzielę, na cały tydzień. Poniżej metoda, którą pokazuję po zakupie — wystarczy do niej kartka.",
    skrot=[
        "Zacznij od kalendarza, nie od przepisów: które dni są krótkie, które długie i ile osób je w który dzień.",
        "Planuj 4–5 obiadów, nie 7 — pozostałe dni to resztki i jeden wieczór „co jest w lodówce”.",
        "Dobieraj dania parami, które dzielą składniki — jedna paczka warzyw, dwa obiady.",
        "Jedna lista zakupów na tydzień, ułożona w kolejności, w jakiej chodzisz po sklepie.",
        "Zostaw w planie luz: dania zamienialne i jeden „ratunkowy” obiad z produktów z szafki.",
    ],
    breadcrumbs=[["Thermomix", "/thermomix"], ["Jadłospis na tydzień", "/thermomix/jadlospis-na-tydzien"]],
    keywords=["jak ułożyć jadłospis na tydzień", "jadłospis na tydzień", "plan posiłków na tydzień", "planowanie posiłków",
              "co ugotować na tydzień", "jadłospis tygodniowy thermomix", "lista zakupów na tydzień", "jak nie marnować jedzenia"],
    faq=[
        ["Ile obiadów planować na tydzień?",
         "Cztery do pięciu. Pozostałe dni zostaw na resztki i jeden wieczór „co jest w lodówce”. Plan z siedmioma różnymi obiadami rzadko przetrwa zwykły tydzień."],
        ["Od czego zacząć planowanie jadłospisu?",
         "Od kalendarza: które dni są krótkie, które długie i ile osób je w każdy dzień. Dopiero potem dobierasz dania."],
        ["Czy do planowania potrzebna jest aplikacja?",
         "Nie. Wystarczy kartka. Jeśli korzystasz z Cookidoo, możesz tam układać przepisy w planie tygodnia, ale sama metoda działa bez niego."],
        ["Jak nie marnować jedzenia przy planowaniu na tydzień?",
         "Dobieraj dania parami, które dzielą składniki, zaplanuj dzień na resztki i przed zakupami sprawdź, co już masz."],
        ["Co zrobić, gdy plan się sypie w połowie tygodnia?",
         "Przesuń obiady — dlatego warto planować dania zamienialne. I trzymaj w szafce składniki na jeden „ratunkowy” obiad."],
    ],
    related=[["Gotowanie na zapas", "/thermomix/gotowanie-na-zapas"], ["Gotowe jadłospisy", "/diety"],
             ["Czego Thermomix nie zrobi", "/thermomix/czego-nie-zrobi"], ["Thermomix dla rodziny", "/thermomix/dla-rodziny"],
             ["Cookidoo", "/cookidoo"], ["Umów prezentację", "/prezentacja"]],
    body="""## Krok 1. Zacznij od kalendarza, nie od przepisów

Zanim wybierzesz choć jedno danie, odpowiedz sobie na trzy pytania o najbliższy tydzień:

- **Które dni są krótkie?** Powrót po siedemnastej, zajęcia dzieci, trening. Na te dni potrzebujesz czegoś, co jest gotowe albo robi się samo.
- **Które dni są długie?** Weekend, dzień pracy z domu. Tu mieści się danie, które dłużej się gotuje, albo gotowanie na zapas.
- **Ile osób je w który dzień?** Jeśli w czwartek jesz w pojedynkę, nie ma sensu planować czterech porcji.

Dopiero do tak opisanego tygodnia dobierasz dania. Odwrotna kolejność — najpierw przepisy, potem kalendarz — to najczęstszy powód, dla którego plan pada w środę.

## Krok 2. Planuj 4–5 obiadów, nie siedem

To rada, która najbardziej zaskakuje, a najwięcej zmienia.

Plan na siedem różnych obiadów wygląda ambitnie, ale w praktyce zostają resztki, których nie ma kiedy zjeść, kupujesz za dużo, a pierwszy nieplanowany wieczór poza domem rozwala cały układ.

Lepszy schemat:

| Dzień | Co | Dlaczego |
|---|---|---|
| Poniedziałek | obiad z planu | świeże zakupy, energia na start |
| Wtorek | obiad z planu | |
| Środa | resztki z poniedziałku i wtorku | dzień bez gotowania |
| Czwartek | obiad z planu | |
| Piątek | obiad z planu albo coś szybkiego | |
| Sobota | dłuższe danie lub gotowanie na zapas | jest czas |
| Niedziela | „co jest w lodówce” i plan na kolejny tydzień | nic się nie marnuje |

Dwa dni bez nowego gotowania to nie lenistwo. To bufor, dzięki któremu plan przeżywa zwykły tydzień.

## Krok 3. Dobieraj dania parami

Łatwo myśleć o obiadach pojedynczo. Wygodniej jest myśleć **parami, które dzielą składniki**.

Przykład: jeśli we wtorek robisz danie z warzywami, kup ich tyle, żeby starczyło też na czwartkową zupę krem. Jedna paczka, dwa obiady, nic nie zostaje w szufladzie.

Tak samo z bazami: ryż, kasza, ugotowane mięso — jeśli i tak je robisz, zrób na dwa dni.

## Krok 4. Jedna lista zakupów, ułożona po sklepie

Lista spisana w kolejności przepisów to lista, z którą trzy razy wracasz do tej samej alejki. Ułóż ją tak, jak chodzisz po swoim sklepie:

- warzywa i owoce,
- pieczywo,
- nabiał,
- mięso i ryby,
- produkty suche,
- przyprawy,
- reszta.

Przed wyjściem **sprawdź, co już masz**. Najłatwiej w niedzielę, przy okazji wieczoru „co jest w lodówce”.

## Krok 5. Zostaw w planie luz

Plan, którego nie da się zmienić, nie przetrwa pierwszego zaproszenia na kolację. Pomagają dwie zasady:

- **Dania zamienialne.** Jeśli we wtorek nie dasz rady, wtorkowy obiad przechodzi na czwartek. Na początek tygodnia planuj to, co z natury kupuje się najświeższe.
- **Jeden „ratunkowy” obiad.** Coś, co zrobisz z produktów, które zawsze są w szafce. Kiedy plan się sypie, nie zamawiasz jedzenia — robisz ratunkowy obiad.

## Gdzie Thermomix realnie pomaga w tym planie

Nie zmienia tego, **co** jesz. Zmienia to, **ile musisz przy tym być**.

- W krótkie dni wstawiasz danie i zajmujesz się czymś innym, bo urządzenie samo miesza i pilnuje temperatury.
- Z [Varomą](/akcesoria/varoma) robisz dwa elementy obiadu naraz — na dole zupa albo sos, na górze na parze warzywa czy mięso.
- Przepis prowadzi krok po kroku, więc gotować może też ktoś inny w domu.

Uczciwie: Thermomix nie ułoży planu za Ciebie. To, czy jadłospis zadziała, zależy od kroków 1–5, a nie od urządzenia. Więcej o tym w tekście [czego Thermomix nie zrobi](/thermomix/czego-nie-zrobi).

## Najczęstsze błędy

- **Siedem różnych obiadów** — patrz krok 2.
- **Same nowe przepisy.** Jeden nowy przepis w tygodniu to przygoda, pięć to stres. Mieszaj nowe ze sprawdzonymi.
- **Plan bez kalendarza** — patrz krok 1.
- **Lista zakupów spisana „mniej więcej”.** Wracasz do sklepu w środę i plan się rozjeżdża.
- **Brak dnia na resztki.** Resztki lądują w koszu.

## Gotowe plany, jeśli wolisz nie układać od zera

Jeśli wolisz zacząć od gotowca, zajrzyj do [jadłospisów](/diety) — są ułożone na cały tydzień, z linkami do przepisów w Cookidoo. A gotowanie w krótkie dni ułatwia [gotowanie na zapas](/thermomix/gotowanie-na-zapas).
""",
))

# ─────────────────────────────────────────────────────────────── 3
STRONY.append(dict(
    slug="thermomix-czego-nie-zrobi",
    path="/thermomix/czego-nie-zrobi",
    seoTitle="Czego Thermomix nie zrobi? Uczciwa lista przed zakupem",
    seoDescription="Thermomix nie zastąpi piekarnika, frytkownicy ani patelni do smażenia na płasko, a bez Cookidoo masz tylko część przepisów. Uczciwa lista ograniczeń — od przedstawiciela Thermomix.",
    h1="Czego Thermomix nie zrobi — uczciwa lista",
    lead="Sprzedaję Thermomixy i o tych rzeczach mówię sama, zanim ktoś zapyta. Z prostego powodu: urządzenie kupione z błędnym wyobrażeniem ląduje po miesiącu w szafce, a niezadowolony klient to dla mnie gorsza wiadomość niż niesprzedane urządzenie. Poniżej pełna lista — przy każdym punkcie piszę też, co Thermomix robi zamiast tego.",
    skrot=[
        "Nie zastąpi piekarnika ani frytkownicy — wyrobi ciasto, ale nie upiecze chrupiącej skórki.",
        "Podsmaża (do 160°C), ale nie zastąpi patelni do smażenia na płasko: kotlety i naleśniki to nadal patelnia.",
        "Bez abonamentu Cookidoo masz gotowanie ręczne i ok. 200 przepisów w urządzeniu, ale nie pełną bibliotekę.",
        "Zabiera pilnowanie, nie decyzje — nie zaplanuje za Ciebie, co ugotować.",
        "Nie każdemu się opłaci: przy gotowaniu raz w tygodniu są tańsze drogi.",
    ],
    breadcrumbs=[["Thermomix", "/thermomix"], ["Czego Thermomix nie zrobi", "/thermomix/czego-nie-zrobi"]],
    keywords=["czego thermomix nie zrobi", "thermomix wady", "czy warto kupić thermomix", "czy thermomix zastąpi piekarnik",
              "czy w thermomixie można smażyć", "thermomix bez cookidoo", "komu nie opłaca się thermomix"],
    faq=[
        ["Czy Thermomix zastąpi piekarnik?",
         "Nie. Wyrabia ciasto na chleb czy pizzę, ale samo pieczenie — chrupiąca skórka, zapiekanie — to nadal piekarnik. Nie zastąpi też frytkownicy."],
        ["Czy w Thermomixie można smażyć?",
         "TM7 podsmaża do 160°C, co wystarcza do zeszklenia cebuli czy podsmażenia mięsa na sos. Nie zastąpi jednak patelni do smażenia na płasko: kotlety, naleśniki czy jajecznicę dla kilku osób nadal robisz na patelni."],
        ["Czy Thermomix działa bez Cookidoo?",
         "Tak. Bez abonamentu działa gotowanie ręczne i wszystkie tryby, a w urządzeniu zostaje kolekcja ok. 200 przepisów. Abonament daje dostęp do pełnej biblioteki przepisów prowadzonych krok po kroku."],
        ["Jakie urządzenia zastępuje Thermomix?",
         "Blender, mikser, wagę kuchenną, parowar, maszynkę do mielenia i częściowo robot planetarny. Nie zastępuje piekarnika, frytkownicy, patelni, czajnika ani mikrofalówki."],
        ["Komu Thermomix się nie opłaci?",
         "Osobom, które gotują rzadko, lubią gotować „na oko” bez prowadzenia albo nie mają w kuchni miejsca, żeby urządzenie stało na stałe."],
    ],
    related=[["Wady i zalety", "/thermomix/wady-i-zalety"], ["Co potrafi Thermomix", "/thermomix/co-potrafi"],
             ["Cookidoo — cena i zawartość", "/cookidoo"], ["Odstąpienie od umowy", "/thermomix/odstapienie-od-umowy"],
             ["Thermomix czy tańszy robot", "/thermomix/porownanie"], ["Umów prezentację", "/prezentacja"]],
    body="""## 1. Nie zastąpi piekarnika ani frytkownicy

Thermomix gotuje, miesza, rozdrabnia, gotuje na parze i wyrabia ciasto. Ale **nie piecze** tak, jak piekarnik: nie zrobi chrupiącej skórki chleba, zapiekanki ze złotym serem ani pieczonego kurczaka. Nie zastąpi też frytkownicy.

**Co robi zamiast:** wyrabia ciasto na chleb, pizzę czy bułki — a to najbardziej męcząca część pieczenia. Ciasto przekładasz potem do piekarnika.

## 2. Nie zastąpi patelni do smażenia na płasko

TM7 **podsmaża do 160°C** — to wystarcza, żeby zeszklić cebulę albo podsmażyć mięso na sos. Ale naczynie jest wysokie i wąskie, więc nie da się w nim niczego ułożyć płasko. Kotlety, naleśniki, jajecznica dla czterech osób — to nadal patelnia.

**Co robi zamiast:** sosy, gulasze, risotto i wszystko, co trzeba długo mieszać, żeby się nie przypaliło. To dokładnie ta część gotowania, przy której zwykle się stoi.

Mówię to klientom wprost: większość osób **nie wyrzuca garnków ani patelni**. Przestaje tylko stać przy kuchence przy daniach, które tego wymagały.

## 3. Bez Cookidoo masz tylko część przepisów

To trzeba wiedzieć **przed** zakupem, nie po.

[Cookidoo](/cookidoo) to abonament. Bez niego Thermomix działa: gotujesz ręcznie, ustawiając czas, temperaturę i obroty, a w urządzeniu zostaje kolekcja **ok. 200 przepisów**. Tracisz natomiast pełną bibliotekę przepisów prowadzonych krok po kroku — a to jest to, za co większość ludzi go kupuje.

Uczciwie: jeśli nie planujesz korzystać z abonamentu, policz, czy 200 wbudowanych przepisów Ci wystarczy. Dla części osób wystarcza, dla części nie.

## 4. Nie zaplanuje za Ciebie

Thermomix zabiera **pilnowanie**: mieszanie, stanie przy garnku, sprawdzanie, czy się nie przypala. Nie zabiera **decyzji**: co ugotować, co kupić, kiedy.

Jeśli Twój problem to „co dziś na obiad”, urządzenie nie rozwiąże go samo. Rozwiązuje go plan tygodnia — a Thermomix sprawia, że łatwiej się go trzymać. Jak taki plan ułożyć, piszę w tekście [jak ułożyć jadłospis na tydzień](/thermomix/jadlospis-na-tydzien).

## 5. Nie ugotuje dużej ilości na raz

Naczynie mieści **2,2 l**. Na co dzień dla rodziny wystarcza, ale przy gotowaniu dla dużej grupy albo przetworach na skalę ogrodu część dań trzeba robić w dwóch turach.

**Co pomaga:** [Varoma](/akcesoria/varoma), nadstawka do gotowania na parze. Pozwala zrobić dwa elementy obiadu jednocześnie — na dole zupa albo sos, na górze warzywa czy mięso.

## 6. Nie zastąpi wszystkich urządzeń

Zastępuje kilka: **blender, mikser, wagę kuchenną, parowar, maszynkę do mielenia**, częściowo robot planetarny. Jeśli masz te sprzęty i ich nie lubisz — zwalniasz blat.

Nie zastąpi natomiast: piekarnika, frytkownicy, patelni, czajnika ani mikrofalówki do odgrzewania.

## 7. Nie jest całkiem bezobsługowy przy myciu

Naczynie myje się samo w trybie mycia wstępnego: woda z kroplą płynu i chwila pracy noża. Części, oprócz bazy, można myć w zmywarce. Szczegóły są w tekście [jak myć Thermomix](/thermomix/mycie-i-obsluga).

Uczciwie: najbardziej uciążliwe bywa mycie **Varomy po tłustym mięsie** — tak samo jak każdego innego parowaru.

## 8. Nie każdemu się opłaci

Thermomix to duży wydatek. Opłaca się, kiedy gotujesz **regularnie**, kilka razy w tygodniu, i kiedy męczy Cię pilnowanie, krojenie i mycie kilku naczyń.

**Odpuść, jeśli:**

- gotujesz rzadko, raz w tygodniu albo mniej,
- lubisz gotować „na oko” i nie chcesz, żeby ktoś Cię prowadził,
- nie masz w kuchni miejsca, żeby urządzenie stało na stałe — schowane w szafce przestaje być używane.

**Rozważ, jeśli:**

- gotujesz codziennie dla kilku osób i brakuje Ci czasu,
- nie czujesz się pewnie w kuchni i potrzebujesz prowadzenia,
- masz kilka urządzeń, które chętnie zastąpisz jednym.

## Dlaczego o tym piszę

Bo sama chciałabym przeczytać taką listę przed zakupem.

Na prezentacji pokazuję, co Thermomix robi dobrze — a robi dużo, co opisuję w tekście [co potrafi Thermomix](/thermomix/co-potrafi). Ale decyzja ma być podjęta na prawdziwym obrazie, a nie na reklamie. Jeśli po tej stronie uznasz, że to nie dla Ciebie — to też jest dobra decyzja.

A jeśli chcesz zobaczyć, jak to wygląda w Twojej kuchni, przy Twoich produktach — [umów prezentację](/prezentacja). Bez zobowiązań, a po zakupie obowiązuje [prawo odstąpienia od umowy](/thermomix/odstapienie-od-umowy).
""",
))

# ─────────────────────────────────────────────────────────────── 4
STRONY.append(dict(
    slug="thermomix-gotowanie-na-zapas",
    path="/thermomix/gotowanie-na-zapas",
    seoTitle="Gotowanie na zapas z Thermomixem — jak zacząć",
    seoDescription="Gotowanie na zapas bez spędzania całej niedzieli w kuchni: co warto robić hurtem, w jakiej kolejności, jak opisywać pojemniki i czego nie gotować na zapas. Od przedstawiciela Thermomix.",
    h1="Gotowanie na zapas z Thermomixem — od czego zacząć",
    lead="Często słyszę: „chciałabym gotować na zapas, ale nie mam na to całego dnia”. Nie trzeba. Gotowanie na zapas działa najlepiej w małej skali i regularnie, a nie raz na pół roku w formie maratonu. Poniżej organizacja, którą sama stosuję.",
    skrot=[
        "Zacznij od jednej sesji i trzech dań: zupy, sosu albo gulaszu i jednej bazy, np. kaszy.",
        "Najlepiej znoszą to zupy krem, sosy, gulasze i bazy; makaron z sosem czy sałaty — gorzej.",
        "Gotuj od najczystszego do najbrudniejszego, wtedy nie myjesz naczynia między daniami.",
        "Varoma pozwala zrobić dwa elementy obiadu w jednym cyklu.",
        "Opisuj pojemniki: co to jest i kiedy zrobione. Nowe do tyłu, stare do przodu.",
    ],
    breadcrumbs=[["Thermomix", "/thermomix"], ["Gotowanie na zapas", "/thermomix/gotowanie-na-zapas"]],
    keywords=["gotowanie na zapas", "gotowanie na zapas thermomix", "meal prep thermomix", "batch cooking",
              "obiady na kilka dni", "jak gotować na zapas", "co ugotować na zapas"],
    faq=[
        ["Od czego zacząć gotowanie na zapas?",
         "Od jednej sesji i trzech dań: zupy, sosu albo gulaszu i jednej bazy, np. kaszy. Taka skala pokazuje, czy ten sposób gotowania Ci pasuje."],
        ["Jakie dania najlepiej gotować na zapas?",
         "Zupy (zwłaszcza krem), sosy, gulasze i dania duszone oraz bazy, takie jak kasza, ryż czy rozdrobnione warzywa."],
        ["Czego nie gotować na zapas?",
         "Makaronu ugotowanego razem z sosem, sałat z sosem i dań smażonych na chrupko — po odgrzaniu tracą jakość i konsystencję."],
        ["W jakiej kolejności gotować kilka dań w Thermomixie?",
         "Od najczystszego do najbrudniejszego: najpierw rozdrabnianie suchych produktów, potem warzywa, potem dania na wodzie, na końcu sosy i ciasto. Wtedy nie myjesz naczynia między daniami."],
        ["Jak długo można przechowywać jedzenie ugotowane na zapas?",
         "Na to pytanie nie odpowiadam, bo to kwestia bezpieczeństwa żywności, a nie organizacji kuchni. Kieruj się źródłami poświęconymi bezpieczeństwu żywności i informacjami na opakowaniach produktów."],
    ],
    related=[["Jadłospis na tydzień", "/thermomix/jadlospis-na-tydzien"], ["Varoma", "/akcesoria/varoma"],
             ["Czego Thermomix nie zrobi", "/thermomix/czego-nie-zrobi"], ["Thermomix dla rodziny", "/thermomix/dla-rodziny"],
             ["Gotowe jadłospisy", "/diety"], ["Umów prezentację", "/prezentacja"]],
    body="""## Ważne: o czym ta strona jest, a o czym nie

Ta strona jest o **organizacji**: co ugotować, w jakiej kolejności i jak to ułożyć. **Nie piszę o tym, jak długo jedzenie może być przechowywane ani w jakiej temperaturze** — to kwestie bezpieczeństwa żywności, a nie moja specjalność. W tych sprawach kieruj się źródłami poświęconymi bezpieczeństwu żywności i informacjami na opakowaniach.

## Od czego zacząć: jedna sesja, trzy dania

Za pierwszym razem nie planuj więcej niż trzech rzeczy:

- **jedną zupę** — robi się sama, a zupy krem dobrze znoszą odgrzewanie,
- **jeden sos albo gulasz** — baza obiadu, do której dorabiasz tylko ryż czy makaron,
- **jedną bazę** — ugotowaną kaszę, ryż albo rozdrobnione warzywa na kolejne dni.

To wystarczy, żeby w środku tygodnia mieć dwa, trzy obiady z głowy. I żeby sprawdzić, czy ten sposób gotowania w ogóle Ci pasuje, zanim kupisz dwadzieścia pojemników.

## Co dobrze znosi gotowanie na zapas

Z mojego doświadczenia i doświadczenia klientów:

| Dobrze | Dlaczego |
|---|---|
| Zupy, zwłaszcza krem | po odgrzaniu smakują tak samo, czasem lepiej |
| Sosy do makaronu | wystarczy ugotować świeży makaron |
| Gulasze i dania duszone | smaki się przegryzają |
| Kasze i ryż jako baza | oszczędzasz czas w krótkie dni |
| Rozdrobnione warzywa | najdłuższa część przygotowań zrobiona z góry |
| Ciasto na chleb czy pizzę | wyrabiasz raz, używasz w kolejne dni |

## Czego lepiej nie robić na zapas

Tu chodzi o **jakość i smak**, nie o bezpieczeństwo:

| Gorzej | Dlaczego |
|---|---|
| Makaron ugotowany razem z sosem | rozmięka; lepiej osobno, makaron na świeżo |
| Sałaty i surówki z sosem | wiotczeją |
| Dania smażone na chrupko | tracą chrupkość po odgrzaniu |
| Ziemniaki gotowane w kawałkach | zmieniają konsystencję; puree znosi to lepiej |

## Kolejność: od najczystszego do najbrudniejszego

To trik, który najbardziej skraca sesję gotowania na zapas. Jeśli robisz kilka rzeczy w Thermomixie po kolei, ułóż je tak, żeby **nie myć naczynia między daniami**:

- **najpierw to, co suche i czyste** — rozdrabnianie orzechów, przypraw, sera,
- **potem warzywa** — siekanie i rozdrabnianie,
- **potem dania na wodzie** — zupy, kasze,
- **na końcu to, co tłuste i lepkie** — sosy, gulasze, ciasto.

Po każdym etapie wystarczy przepłukać naczynie. Porządnie myjesz raz, na końcu. Jak najszybciej to zrobić, opisuję w tekście [jak myć Thermomix](/thermomix/mycie-i-obsluga).

## Varoma: dwa dania na raz

Najbardziej niedoceniana rzecz przy gotowaniu na zapas. [Varoma](/akcesoria/varoma) to nadstawka do gotowania na parze, która stoi nad naczyniem.

W praktyce: **na dole gotuje się zupa, na górze na parze warzywa albo mięso** na kolejny obiad. Jeden cykl, dwa elementy, jedno urządzenie zamiast dwóch garnków.

## Opisuj pojemniki

Brzmi banalnie, ale to różnica między systemem a chaosem.

Na każdym pojemniku zapisz **co to jest** i **kiedy zostało zrobione**. Taśma malarska i marker wystarczą. Bez tego po trzech tygodniach masz pięć identycznych pudełek z „czymś czerwonym” i nie wiesz, które było pierwsze.

Druga zasada: **nowe do tyłu, stare do przodu**. Najpierw zjadasz to, co zrobione wcześniej.

## Pojemniki — ile ich naprawdę trzeba

Na start wystarczy kilka **w dwóch rozmiarach**: na jedną porcję i na porcję rodzinną. Jeden kształt, który się na siebie układa, oszczędza najwięcej miejsca. Słoiki są dobre do zup i sosów, ale zajmują więcej miejsca niż płaskie pojemniki.

## Ile to zajmuje

Uczciwie: pierwsza sesja trwa dłużej, bo dopiero się uczysz. Kolejne idą szybciej — wiesz już, w jakiej kolejności i ile czego zrobić.

Najważniejsze, że **czas przy Thermomixie to nie jest czas stania przy garnku**. Kiedy gotuje się zupa, możesz kroić warzywa do kolejnego dania albo zająć się czymś zupełnie innym.

## Jak to połączyć z planem tygodnia

Gotowanie na zapas działa najlepiej razem z jadłospisem tygodniowym. Plan mówi, **co** będziesz jeść, a sesja na zapas sprawia, że w krótkie dni **nie musisz gotować**, tylko odgrzać. Jak taki plan ułożyć: [jadłospis na tydzień krok po kroku](/thermomix/jadlospis-na-tydzien).
""",
))


def main():
    os.makedirs(OUT, exist_ok=True)
    for s in STRONY:
        meta = {k: s[k] for k in ["slug", "path", "seoTitle", "seoDescription", "h1", "lead", "skrot"]}
        meta["published"] = DZIS
        meta["updated"] = DZIS
        for k in ["breadcrumbs", "keywords", "faq", "related"]:
            meta[k] = s[k]
        tekst = json.dumps(meta, ensure_ascii=False, indent=2) + "\n---\n" + s["body"].strip() + "\n"
        p = os.path.join(OUT, s["slug"] + ".md")
        open(p, "w", encoding="utf8").write(tekst)
        print(f"{p}: seoTitle {len(s['seoTitle'])} zn., opis {len(s['seoDescription'])} zn., {len(s['body'].split())} słów treści")


if __name__ == "__main__":
    main()
