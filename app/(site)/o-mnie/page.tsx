import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLdScript } from "@/components/seo/json-ld";
import { personSchema } from "@/lib/seo/schema";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Photo, CheckList, Prose, CtaBand, LocalBand } from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "O mnie — Aga Horche, przedstawicielka Thermomix",
  description:
    "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce. Jak pracuję, czego możesz się spodziewać przed zakupem i po nim, gdzie prowadzę prezentacje.",
  path: "/o-mnie",
  keywords: ["aga horche", "przedstawiciel thermomix małopolska", "przedstawiciel thermomix bochnia"],
  ogImage: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
});

/**
 * Treść opisuje sposób pracy i te fakty osobiste, które Aga podała sama
 * (spec §42: nie wymyślamy biografii). Sierpień 2026: doszły zdjęcia Agi
 * z biblioteki Media zamiast zdjęć jedzenia oraz jedno zdanie o dzieciach —
 * Filipie i Liwii — bo to jedyny fragment strony, który mówi, kim ona jest,
 * a nie tylko jak pracuje.
 *
 * Adresy /media/... są celowe: te pliki żyją w bibliotece Media na serwerze,
 * więc Aga może je podmienić z panelu bez wdrożenia. Kopie w public/zdjecia
 * zostały skasowane właśnie po to, żeby nie było dwóch źródeł prawdy.
 *
 * Zdjęcia są kwadratowe (1:1) i mają wtopioną grafikę, więc NIE kadrujemy ich
 * do 3/4 — przycięcie ucinało napis i pół postaci.
 */

const FAQ = [
  {
    question: "Czy prezentacja jest naprawdę bezpłatna?",
    answer:
      "Tak. Nie płacisz za dojazd ani za składniki, a „nie, dziękuję” po spotkaniu jest pełnoprawną odpowiedzią. Zarabiam tylko wtedy, gdy ktoś zdecyduje się na zakup — i właśnie dlatego nie mam interesu w namawianiu osoby, której Thermomix się nie przyda.",
  },
  {
    question: "Gdzie dojeżdżasz?",
    answer:
      "Na miejscu jestem najczęściej w Małopolsce — Bochnia, Brzesko, Kraków, Wieliczka, Niepołomice, Nowy Wiśnicz, Tarnów i okolice. Dalsze miejscowości też są możliwe, po ustaleniu terminu.",
  },
  {
    question: "Co dostaję po zakupie?",
    answer:
      "Pomoc przy pierwszym uruchomieniu, założenie konta Cookidoo, sprawdzone przepisy na start i kontakt, gdy coś nie wychodzi. Pomagam też zgłosić urządzenie do serwisu, gdyby zaszła potrzeba.",
  },
  {
    question: "Czy mogę zadzwonić z pytaniem, zanim cokolwiek ustalimy?",
    answer:
      "Oczywiście. Większość rozmów zaczyna się od pytania o cenę albo raty i kończy bez zamówienia — to normalne i w porządku.",
  },
];

export default function OMniePage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "O mnie", path: "/o-mnie" }]} />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Oficjalna przedstawicielka Thermomix®</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Aga Horche
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Prowadzę prezentacje Thermomixa w Małopolsce — u ludzi w kuchniach, przy prawdziwym
              obiedzie, a nie przy prezentacji ze slajdów.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Umów się ze mną</ButtonLink>
              <ButtonLink href="/opinie" variant="secondary">
                Zobacz opinie
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/media/aga-przedstawiciel-thermomix-e08f7154.webp"
            alt="Aga Horche, oficjalna przedstawicielka Thermomix w Małopolsce, z urządzeniem TM7"
            imgClassName="aspect-square"
            caption="Aga Horche — prezentacje Thermomixa w Małopolsce."
          />
        </div>
      </Section>

      {/* Jedyny fragment strony o tym, KIM ona jest. Krótki celowo: to, co Aga
          podała sama, bez dopisywania historii, której nie potwierdziła. */}
      <Section>
        <Prose>
          <Heading as="h2" size="md">
            Prywatnie
          </Heading>
          <p className="mt-5">
            Jestem mamą dwójki dzieci — Filipa i Liwii. To one sprawiły, że gotowanie przestało
            być u mnie hobby, a stało się codziennym zadaniem do rozwiązania: obiad ma być
            gotowy, ma być zdrowy i ma powstać w czasie, którego nigdy nie ma za dużo.
          </p>
          <p className="mt-4">
            Dlatego na prezentacjach nie pokazuję efektownych dań na jedno zdjęcie, tylko to, co
            faktycznie wraca na stół w środku tygodnia. I dlatego wiem z własnego doświadczenia,
            że najważniejsze pytanie nie brzmi „czy to ładnie wygląda”, tylko „czy zdążę”.
          </p>
        </Prose>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Jak pracuję
            </Heading>
            <div className="mt-6">
              <CheckList
                items={[
                  "przyjeżdżam z urządzeniem i składnikami — gotujemy u Ciebie, nie oglądasz zdjęć",
                  "menu dopasowuję do diety i alergii, także bezglutenowo i wegetariańsko",
                  "mówię wprost, komu Thermomix się nie przyda — i dlaczego",
                  "pokazuję pełny koszt: cenę, promocje i realną ratę, bez gwiazdek",
                  "nie naciskam na decyzję tego samego dnia",
                  "zostaję w kontakcie po zakupie — pierwsze uruchomienie, Cookidoo, przepisy",
                ]}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/media/gotuj-z-dzieckiem-3-f0d591ef.webp"
              alt="Aga Horche z synem i Thermomixem TM7 — gotowanie z dzieckiem i dla dziecka"
              imgClassName="aspect-square"
            />
            <Photo
              src="/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp"
              alt="Aga Horche z Thermomixem TM7 — oficjalna przedstawicielka Thermomix"
              imgClassName="aspect-square"
            />
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Czego możesz się po mnie spodziewać
        </Heading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Konkret zamiast obietnic",
              o: "Aktualna cena, aktualna promocja i uczciwa lista wad — także wtedy, gdy nie pomaga w sprzedaży.",
            },
            {
              t: "Czas po zakupie",
              o: "Najwięcej pytań pojawia się w pierwszym tygodniu. Wtedy jestem najbardziej potrzebna i wtedy odpisuję.",
            },
            {
              t: "Elastyczne terminy",
              o: "Wieczory i weekendy też wchodzą w grę — dopasowuję się do Twojego grafiku.",
            },
          ].map((k) => (
            <Card key={k.t}>
              <h3 className="text-base font-semibold text-neutral-900">{k.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{k.o}</p>
            </Card>
          ))}
        </div>
        <Prose className="mt-8">
          <p>
            Jeśli zastanawiasz się, czy w ogóle warto — przeczytaj{" "}
            <Link
              href="/thermomix/wady-i-zalety"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              wady i zalety Thermomixa
            </Link>
            . Napisałam tam także to, czego zwykle nie mówi się na prezentacji.
          </p>
        </Prose>
      </Section>

      <FaqSection items={FAQ} title="Pytania o współpracę" />

      <LocalBand
        title="Gdzie mnie spotkasz"
        text="Prezentacje prowadzę najczęściej w Małopolsce, a przy dalszych miejscowościach umawiamy się indywidualnie."
      />
      <CtaBand
        title="Napisz albo zadzwoń"
        text="Bez zobowiązań — nawet jeśli na razie chcesz tylko zapytać o cenę."
      />

      <JsonLdScript data={personSchema()} />
    </>
  );
}
