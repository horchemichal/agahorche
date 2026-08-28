import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { TrackedPhoneLink } from "@/components/marketing/tracked-phone-link";
import { SITE } from "@/lib/utils";

/**
 * Klocki treści dla podstron tematycznych (TM7, TM7 vs TM6, akcesoria,
 * raty, wady i zalety). Powstały po przeglądzie stron konkurencji: te same
 * elementy, które u nich działają (tabela faktów, porównanie dwóch kolumn,
 * lista plusów i minusów, pasek lokalny), tylko spójne z designem serwisu
 * i z prawdziwymi zdjęciami zamiast stocków.
 *
 * Wszystkie są komponentami serwerowymi — zero JS po stronie klienta.
 */

/* --------------------------------------------------------------- ZDJĘCIA */

/**
 * Zdjęcie z /public/zdjecia. Świadomie `<img>`, a nie `next/image`:
 * reszta serwisu robi tak samo (przejście na next/image to osobny krok A5
 * dla całego serwisu naraz), a te pliki są już przeskalowane i zapisane
 * jako WebP przy dodawaniu do repozytorium.
 */
/**
 * Naturalne wymiary zdjęć serwisu — po to, żeby <img> mógł zarezerwować
 * miejsce ZANIM plik się pobierze. Bez tego przeglądarka nie zna proporcji,
 * układa tekst, a po doczytaniu obrazka przesuwa go w dół. To jest Cumulative
 * Layout Shift i Google liczy go jako jeden z Core Web Vitals.
 *
 * Dlaczego mapa, a nie propsy przy każdym wywołaniu: zdjęć jest kilkanaście,
 * a wywołań <Photo> kilkadziesiąt w kilkunastu plikach treści. Mapa naprawia
 * wszystkie naraz i nie da się jej zapomnieć przy dopisywaniu nowego miasta.
 *
 * Wpisy `/zdjecia/...` są bezpieczne — te pliki leżą w repo i zmieniają się
 * razem z kodem. Wpisy `/media/...` to biblioteka Media, którą Aga może
 * podmienić z panelu: jeśli wgra plik o INNYCH proporcjach, rezerwacja będzie
 * chwilowo nietrafiona. Nic się nie psuje (przeglądarka poprawia układ po
 * pobraniu pliku, bo wysokość zostaje `auto`), ale wtedy warto tu zajrzeć.
 */
const WYMIARY_ZDJEC: Record<string, readonly [number, number]> = {
  "/zdjecia/prezentacja-thermomix-1.webp": [1200, 1600],
  "/zdjecia/prezentacja-thermomix-2.webp": [1500, 2000],
  "/zdjecia/prezentacja-thermomix-3.webp": [1500, 2000],
  "/zdjecia/prezentacja-thermomix-4.webp": [1204, 1606],
  "/zdjecia/prezentacja-thermomix-5.webp": [1500, 2000],
  "/zdjecia/prezentacja-thermomix-6.webp": [1500, 2000],
  "/zdjecia/prezentacja-thermomix-7.webp": [1137, 2000],
  "/zdjecia/thermomix-tm7-varoma.webp": [2000, 1932],
  "/zdjecia/thermomix-tm7-vs-tm6.webp": [2000, 1500],
  "/zdjecia/akcesoria-nakladka-krojaca.webp": [640, 640],
  "/zdjecia/akcesoria-nester.webp": [576, 576],
  "/zdjecia/akcesoria-oslona-noza.webp": [640, 640],
  "/zdjecia/akcesoria-sensor.webp": [640, 640],
  "/media/aga-przedstawiciel-thermomix-e08f7154.webp": [1000, 1000],
  "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp": [1200, 1200],
  "/media/gotuj-z-dzieckiem-1-be78fd1c.webp": [1000, 986],
  "/media/gotuj-z-dzieckiem-2-13135854.webp": [1000, 1000],
  "/media/gotuj-z-dzieckiem-3-f0d591ef.webp": [1000, 1000],
};

export function Photo({
  src,
  alt,
  caption,
  className,
  imgClassName,
  priority,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Nadpisuje wpis z WYMIARY_ZDJEC — dla zdjęć spoza mapy. */
  width?: number;
  height?: number;
}) {
  const zMapy = WYMIARY_ZDJEC[src];
  const w = width ?? zMapy?.[0];
  const h = height ?? zMapy?.[1];

  return (
    <figure className={cn("overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- zdjęcie z własnego serwera (/zdjecia/...) */}
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        className={cn("h-auto w-full rounded-lg object-cover shadow-[var(--shadow-card)]", imgClassName)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
      />
      {caption ? (
        <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Ramka „tu wstaw zdjęcie” — używana tam, gdzie treść jest gotowa, a
 * zdjęcia jeszcze nie ma (np. akcesoria). Widoczna dla redaktorki, ale
 * neutralna wizualnie; podmiana to jedna linijka: zamiana na <Photo />.
 */
export function PhotoPlaceholder({
  label,
  ratio = "square",
  className,
}: {
  label: string;
  ratio?: "square" | "wide";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface p-6 text-center",
        ratio === "square" ? "aspect-square" : "aspect-[16/9]",
        className,
      )}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted">Miejsce na zdjęcie</span>
      <span className="text-sm text-neutral-700">{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------ FAKTY / SPEC */

export interface FactRow {
  label: string;
  value: ReactNode;
}

/**
 * Tabela faktów („model, cena, raty, obszar”) — u konkurencji to element,
 * który Google chętnie wyciąga do wyników i który czyta się w 5 sekund.
 */
export function FactsTable({
  rows,
  title,
  footnote,
}: {
  rows: FactRow[];
  title?: string;
  footnote?: ReactNode;
}) {
  return (
    <Card className="!p-0 overflow-hidden">
      {title ? (
        <div className="border-b border-border bg-surface px-5 py-3 text-sm font-semibold text-neutral-900 sm:px-6">
          {title}
        </div>
      ) : null}
      <dl className="divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[13rem_1fr] sm:gap-4 sm:px-6">
            <dt className="text-sm text-muted">{row.label}</dt>
            <dd className="text-sm font-medium text-neutral-900">{row.value}</dd>
          </div>
        ))}
      </dl>
      {footnote ? (
        <p className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted sm:px-6">{footnote}</p>
      ) : null}
    </Card>
  );
}

/* ------------------------------------------------------------- PORÓWNANIE */

export function CompareColumns({
  left,
  right,
}: {
  left: { title: string; subtitle?: string; items: string[]; tone?: "brand" | "neutral" };
  right: { title: string; subtitle?: string; items: string[]; tone?: "brand" | "neutral" };
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {[left, right].map((col) => (
        <Card key={col.title} className="flex flex-col">
          <Badge tone={col.tone ?? "neutral"}>{col.title}</Badge>
          {col.subtitle ? <p className="mt-3 text-sm text-muted">{col.subtitle}</p> : null}
          <ul className="mt-4 flex flex-col gap-2.5">
            {col.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-neutral-800">
                <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}

/** Wiersz porównania cecha-po-cesze; na telefonie składa się w kartę. */
export function CompareTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: { feature: string; a: ReactNode; b: ReactNode }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={cn(
                  "px-4 py-3 font-semibold",
                  i === 0 ? "text-muted" : "text-neutral-900",
                  i === 1 && "bg-brand-50",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-border align-top">
              <th scope="row" className="px-4 py-3 font-normal text-muted">
                {row.feature}
              </th>
              <td className="bg-brand-50/60 px-4 py-3 font-medium text-neutral-900">{row.a}</td>
              <td className="px-4 py-3 text-neutral-800">{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------------------------------- WADY I ZALETY */

export function ProsCons({
  pros,
  cons,
  prosTitle = "Zalety",
  consTitle = "Wady i ograniczenia",
}: {
  pros: string[];
  cons: string[];
  prosTitle?: string;
  consTitle?: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card>
        <h3 className="text-base font-semibold text-brand-700">{prosTitle}</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {pros.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-800">
              <span aria-hidden className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                +
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-base font-semibold text-neutral-900">{consTitle}</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {cons.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-800">
              <span aria-hidden className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-neutral-100 text-xs font-bold text-neutral-600">
                −
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------- KROKI 1-2-3 */

export function StepsRow({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-lg border border-border bg-neutral-0 p-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 font-display text-sm text-neutral-0">
            {index + 1}
          </span>
          <h3 className="mt-3 text-base font-semibold text-neutral-900">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

/* ----------------------------------------------------------- PASEK LOKALNY */

/**
 * Miasta, w których Aga bywa najczęściej. Świadomie tylko Małopolska i
 * tylko miejscowości, w których realnie prowadzi prezentacje — sensu
 * lokalnego SEO nie robi lista 380 miast, tylko zgodność z prawdą.
 */
export const MALOPOLSKA_MIASTA = [
  "Bochnia",
  "Brzesko",
  "Kraków",
  "Wieliczka",
  "Niepołomice",
  "Nowy Wiśnicz",
  "Tarnów",
  "Dobczyce",
  "Limanowa",
  "Myślenice",
  "Nowy Sącz",
  "Gdów",
  "Zakliczyn",
  "Wojnicz",
  "Skawina",
  "Proszowice",
];

export function LocalBand({
  title = "Prezentacje w całej Małopolsce",
  text = "Bochnia, Brzesko, Kraków, Wieliczka, Tarnów i okolice — dojeżdżam z Thermomixem TM7 do Ciebie, a jeśli mieszkasz dalej, umawiamy się indywidualnie.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section tone="surface">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <Heading as="h2" size="md">
            {title}
          </Heading>
          <Lead className="mt-3 max-w-2xl">{text}</Lead>
          <ul className="mt-5 flex flex-wrap gap-2">
            {MALOPOLSKA_MIASTA.map((miasto) => (
              <li key={miasto}>
                <Badge tone="neutral">{miasto}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Nie ma Twojej miejscowości?{" "}
            <Link href="/miasta" className="font-medium text-brand-700 underline underline-offset-4">
              Sprawdź pełną listę miejscowości
            </Link>{" "}
            albo po prostu zadzwoń.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:w-64">
          <ButtonLink href="/prezentacja">Umów bezpłatną prezentację</ButtonLink>
          <TrackedPhoneLink
            placement="local-band"
            className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-neutral-900 hover:border-brand-500 hover:text-brand-700"
            label={`Zadzwoń: ${SITE.phone}`}
          />
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- CTA KOŃCOWE */

export function CtaBand({
  title = "Zobacz Thermomixa TM7 na żywo",
  text = "Prezentacja jest bezpłatna i niezobowiązująca — gotujemy razem u Ciebie w kuchni, a Ty decydujesz w swoim tempie.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section>
      <Card className="flex flex-col gap-5 !p-8 md:flex-row md:items-center md:justify-between md:!p-10">
        <div className="max-w-xl">
          <Heading as="h2" size="sm">
            {title}
          </Heading>
          <p className="mt-2 leading-relaxed text-muted">{text}</p>
        </div>
        <div className="flex flex-none flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <ButtonLink href="/prezentacja">Umów prezentację</ButtonLink>
          <ButtonLink href="/oferta" variant="secondary">
            Sprawdź aktualną ofertę
          </ButtonLink>
        </div>
      </Card>
    </Section>
  );
}

/* ------------------------------------------------------------- PROZA + LISTA */

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4 leading-relaxed text-neutral-800", className)}>
      {children}
    </div>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-800">
          <span aria-hidden className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
