import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności",
  description:
    "Kto przetwarza Twoje dane po wypełnieniu formularza na agahorche.pl, po co, jak długo i jakie masz prawa.",
  path: "/polityka-prywatnosci",
});

/**
 * OŚ STRONY
 * Polityka prywatności — obowiązek informacyjny z art. 13 RODO.
 *
 * PO CO (prośba Michała, 4.09.2026: „klauzula RODO na formularz kontaktowy
 * wypełnij mi to"). Do dziś przy checkboxie zgody stał tekst „TODO: pełna
 * treść zgody RODO dostarczona przez Agę", a strony z polityką prywatności
 * nie było w serwisie WCALE. Sam checkbox to za mało: RODO wymaga, żeby
 * osoba, która zostawia dane, mogła się dowiedzieć kto, po co i na jak
 * długo je bierze.
 *
 * TREŚĆ OPISUJE TO, CO SERWIS NAPRAWDĘ ROBI — sprawdzone w kodzie i na
 * serwerze, nie przepisane z szablonu. Stąd np. akapit o cookies mówi, że
 * nie ma tu analityki: `NEXT_PUBLIC_GTM_ID` jest na produkcji nieustawione,
 * więc Google Tag Manager się nie ładuje i nie ma czego zgłaszać. Gdyby
 * kiedyś doszła analityka albo piksel — TRZEBA wrócić do tej strony,
 * dopisać sekcję i dodać baner zgody, bo wtedy cookies przestaną być
 * wyłącznie techniczne.
 *
 * Dane firmy i telefon czytamy z SITE (lib/utils.ts), żeby nie istniały
 * w serwisie w dwóch miejscach i nie rozjechały się przy zmianie.
 */
export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Polityka prywatności", path: "/polityka-prywatnosci" }]} />
      </Section>

      <Section className="pt-6">
        <Eyebrow>Twoje dane</Eyebrow>
        <Heading as="h1" size="xl" className="max-w-2xl">
          Polityka prywatności
        </Heading>
        <Lead className="mt-5 max-w-2xl">
          Krótko i bez prawniczego żargonu: kto bierze Twoje dane, po co, na jak długo i co możesz
          z tym zrobić.
        </Lead>
      </Section>

      <Section className="!pt-8">
        <div className="tresc-prawna max-w-2xl">
          <h2>Kto przetwarza Twoje dane</h2>
          <p>
            Administratorem Twoich danych osobowych jest <strong>{SITE.legalName}</strong>,{" "}
            {SITE.address}, NIP {SITE.nip} — na stronie i w social mediach występująca jako{" "}
            <strong>Aga Horche</strong>.
          </p>
          <p>
            W sprawach dotyczących swoich danych możesz zadzwonić pod{" "}
            <a href={SITE.phoneHref}>{SITE.phone}</a>, napisać przez Messengera albo listownie na
            adres podany wyżej.
          </p>

          <h2>Skąd Aga ma Twoje dane</h2>
          <p>
            Wyłącznie od Ciebie — z formularza, który wypełniasz na tej stronie, albo z rozmowy,
            którą sama zaczynasz. Aga nie kupuje baz danych ani nie pobiera Twoich danych z innych
            serwisów.
          </p>

          <h2>Jakie dane i po co</h2>

          <h3>Formularz kontaktowy i umówienie prezentacji</h3>
          <p>
            Imię i nazwisko, telefon, adres e-mail, miejscowość, a jeśli je podasz — preferowany
            termin, forma prezentacji i treść wiadomości.
          </p>
          <ul>
            <li>
              <strong>Po co:</strong> żeby oddzwonić, odpowiedzieć na pytanie i umówić prezentację.
            </li>
            <li>
              <strong>Podstawa prawna:</strong> Twoja zgoda — art. 6 ust. 1 lit. a RODO. Możesz ją
              wycofać w każdej chwili; wycofanie nie wpływa na to, co działo się wcześniej.
            </li>
            <li>
              <strong>Jak długo:</strong> rok od ostatniego kontaktu w tej sprawie. Potem dane są
              usuwane. Jeśli dojdzie do zakupu, dokumenty sprzedaży przechowywane są tak długo, jak
              wymagają tego przepisy podatkowe i o rachunkowości.
            </li>
          </ul>

          <h3>Zgoda marketingowa (jeśli ją zaznaczysz)</h3>
          <ul>
            <li>
              <strong>Po co:</strong> żeby wysyłać informacje o promocjach i nowościach Thermomix.
            </li>
            <li>
              <strong>Podstawa prawna:</strong> Twoja zgoda — art. 6 ust. 1 lit. a RODO.
            </li>
            <li>
              <strong>Jak długo:</strong> do wycofania zgody.
            </li>
          </ul>
          <p>
            Ta zgoda jest dobrowolna i <strong>nie jest warunkiem</strong> umówienia prezentacji ani
            zakupu.
          </p>

          <h3>Konto w Strefie Klienta (Aga Club)</h3>
          <p>
            Adres e-mail, imię, opcjonalnie telefon oraz hasło — zapisane wyłącznie w postaci
            nieodwracalnego skrótu. <strong>Nikt, łącznie z Agą, nie jest w stanie odczytać Twojego
            hasła</strong> — można je tylko ustawić na nowe.
          </p>
          <ul>
            <li>
              <strong>Po co:</strong> żeby dać Ci dostęp do pełnych jadłospisów i pozostałych
              materiałów klubu.
            </li>
            <li>
              <strong>Podstawa prawna:</strong> wykonanie umowy o świadczenie usługi drogą
              elektroniczną — art. 6 ust. 1 lit. b RODO.
            </li>
            <li>
              <strong>Jak długo:</strong> dopóki masz konto. Po jego usunięciu dane znikają.
            </li>
          </ul>
          <p>
            Jeśli poprosisz o nowe hasło, serwis zapisuje jednorazowy klucz ważny godzinę — również
            w postaci skrótu, nie wprost. Po użyciu albo po upływie godziny przestaje działać.
          </p>

          <h3>Czat klubu</h3>
          <p>
            W Aga Club jest wspólny czat dla osób z kontem. Zapisujemy to, co sama w nim napiszesz:
            treść wiadomości, dodane zdjęcia i godzinę wysłania.
          </p>
          <p>
            <strong>To jest rozmowa publiczna w obrębie klubu.</strong> Twoje imię, Twoje słowa
            i Twoje zdjęcia widzą wszystkie pozostałe osoby, które mają konto — a Aga, jako
            moderatorka, widzi dodatkowo Twój adres e-mail przy każdej wiadomości. Nie wysyłaj tam
            niczego, czego nie powiedziałabyś przy obcych: numerów telefonu, adresu, dokumentów,
            zdjęć innych osób bez ich zgody ani niczego o swoim zdrowiu.
          </p>
          <ul>
            <li>
              <strong>Po co:</strong> żeby klubowiczki mogły ze sobą rozmawiać — to część usługi
              klubu.
            </li>
            <li>
              <strong>Podstawa prawna:</strong> wykonanie umowy o świadczenie usługi drogą
              elektroniczną — art. 6 ust. 1 lit. b RODO.
            </li>
            <li>
              <strong>Jak długo:</strong> <strong>14 dni</strong>. Po tym czasie wiadomość i jej
              zdjęcie kasują się automatycznie, razem z plikiem na serwerze. Swoją wiadomość możesz
              usunąć wcześniej sama; Aga może usunąć każdą, jeśli łamie zasady albo czyjeś dobra.
            </li>
          </ul>

          <h3>Powiadomienia w aplikacji Aga Club</h3>
          <p>
            Jeśli włączysz powiadomienia o nowych wiadomościach na czacie, zapisujemy adres
            techniczny nadany przez Twoją przeglądarkę oraz klucze potrzebne do zaszyfrowania
            powiadomienia. <strong>Nie jest to numer telefonu ani nic, po czym można Cię
            rozpoznać poza tym jednym urządzeniem.</strong> Zgoda dotyczy konkretnego urządzenia
            — telefon i komputer to dwie osobne zgody.
          </p>
          <ul>
            <li>
              <strong>Po co:</strong> żeby dać Ci znać, że ktoś napisał na czacie klubu. Najwyżej
              raz na pół godziny i nigdy między 22:00 a 7:00.
            </li>
            <li>
              <strong>Podstawa prawna:</strong> Twoja zgoda — art. 6 ust. 1 lit. a RODO.
            </li>
            <li>
              <strong>Jak długo:</strong> do wyłączenia powiadomień. Możesz to zrobić jednym
              kliknięciem pod polem wpisywania w czacie; wtedy zapis znika od razu. Znika też sam,
              gdy odinstalujesz aplikację albo usuniesz konto.
            </li>
          </ul>

          <h2>Komu Aga przekazuje dane</h2>
          <p>
            Aga nie sprzedaje ani nie udostępnia Twoich danych innym firmom w celach handlowych.
            Widzą je wyłącznie podmioty, które technicznie obsługują ten serwis i robią to na jej
            zlecenie:
          </p>
          <ul>
            <li>
              <strong>Hostinger</strong> — hosting serwera, na którym stoi strona i baza danych.
            </li>
            <li>
              <strong>Interia</strong> — skrzynka pocztowa, na którą przychodzi powiadomienie
              o nowym zgłoszeniu.
            </li>
            <li>
              <strong>Google lub Apple</strong> — wyłącznie wtedy, gdy sama włączysz powiadomienia
              w aplikacji Aga Club. Powiadomienie musi przejść przez serwis producenta Twojej
              przeglądarki lub telefonu; nie da się tego ominąć. <strong>Treść powiadomienia jest
              zaszyfrowana</strong> tak, że ani Google, ani Apple nie może jej odczytać — widzą
              tylko, że coś przyszło na to urządzenie.
            </li>
          </ul>
          <p>
            Serwer znajduje się we Frankfurcie, czyli w Unii Europejskiej. Twoje dane nie są
            przekazywane poza Europejski Obszar Gospodarczy — <strong>z jednym wyjątkiem</strong>:
            jeśli włączysz powiadomienia, zaszyfrowane powiadomienie przechodzi przez serwery Google
            albo Apple, czyli firm spoza EOG. Dlatego powiadomienia są dobrowolne i domyślnie
            wyłączone; bez nich Twoje dane nie opuszczają Europy.
          </p>
          <p>
            Jeśli piszesz do Agi przez Messengera, Facebooka albo Instagrama, ta rozmowa odbywa się
            na warunkach Meta i podlega polityce prywatności Meta — Aga nie ma na to wpływu.
          </p>

          <h2>Twoje prawa</h2>
          <p>Masz prawo:</p>
          <ul>
            <li>wiedzieć, jakie dane Aga ma na Twój temat, i dostać ich kopię,</li>
            <li>poprawić dane nieaktualne lub błędne,</li>
            <li>usunąć swoje dane,</li>
            <li>ograniczyć ich przetwarzanie,</li>
            <li>przenieść je do innego administratora,</li>
            <li>wycofać zgodę w dowolnym momencie, bez podawania powodu,</li>
            <li>
              złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193
              Warszawa), jeśli uważasz, że Twoje dane są przetwarzane niezgodnie z prawem.
            </li>
          </ul>
          <p>
            Żeby skorzystać z któregokolwiek z tych praw, wystarczy zadzwonić albo napisać —
            kontakt znajdziesz na początku tej strony.
          </p>

          <h2>Czy musisz podawać dane</h2>
          <p>
            Nie, podanie danych jest dobrowolne. Bez telefonu lub adresu e-mail Aga nie ma jednak
            jak się z Tobą skontaktować i umówić prezentacji.
          </p>

          <h2>Automatyczne decyzje i profilowanie</h2>
          <p>
            Aga nie podejmuje wobec Ciebie żadnych decyzji automatycznie i nie profiluje Cię.
            Zgłoszenia czyta i obsługuje osobiście.
          </p>

          <h2>Pliki cookie</h2>
          <p>
            Ta strona <strong>nie ma reklam, nie śledzi Cię i nie korzysta z narzędzi
            analitycznych</strong> — nie ma tu Google Analytics ani żadnych skryptów śledzących.
            Dlatego nie zobaczysz okienka z pytaniem o zgodę na cookies: nie ma na co pytać.
          </p>
          <p>Serwis używa dwóch plików cookie i oba są niezbędne do jego działania:</p>
          <ul>
            <li>
              <code>aga_client_session</code> — pamięta, że jesteś zalogowana w Strefie Klienta,
            </li>
            <li>
              <code>aga_admin_session</code> — logowanie Agi do jej własnego panelu.
            </li>
          </ul>
          <p>
            Bez nich logowanie nie działałoby wcale, dlatego przepisy nie wymagają zgody na ich
            zapisanie. Znikają, gdy się wylogujesz.
          </p>
          <p>
            Dodatkowo narzędzia klubu (lista Twoich diet, postęp w wyzwaniu 30 dni) zapamiętują
            wybory <strong>w Twojej własnej przeglądarce</strong>. Te dane nie trafiają na serwer —
            nikt poza Tobą ich nie widzi, a wyczyszczenie danych przeglądarki je kasuje.
          </p>

          <h2>Zmiany</h2>
          <p>
            Jeśli ta polityka się zmieni, nowa wersja pojawi się na tej stronie wraz z datą
            aktualizacji.
          </p>
          <p>
            <em>Ostatnia aktualizacja: 4 września 2026.</em>
          </p>
        </div>
      </Section>
    </>
  );
}
