import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { LeadForm } from "@/components/lead/lead-form";
import { aktywnaWymiana, dataPl, OSTATNIA_WYMIANA } from "@/lib/wymiana";

function dzisPl(): string {
  return new Date().toLocaleDateString("pl-PL", { timeZone: "Europe/Warsaw", day: "2-digit", month: "2-digit", year: "numeric" });
}

/** Kafelki z kwotami zniżek ostatniej akcji. */
function Znizki() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
      {OSTATNIA_WYMIANA.znizki.map(([model, kwota]) => (
        <div key={model} className="rounded-xl border border-brand-500/20 bg-brand-50 px-2 py-3 text-center">
          <p className="text-xs text-neutral-600">za {model}</p>
          <p className="mt-0.5 font-display text-lg text-brand-700 sm:text-xl">−{kwota}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Status akcji wymiany: „strona” = karta pod „W skrócie” na /thermomix/wymiana,
 * „miasto” = krótka sekcja na stronie miasta. Formularz nie siedzi już w karcie
 * (23.10.2026 — zajmował pół ekranu): jest niżej, w WymianaFormularz.
 */
export async function WymianaStatus({ wariant, gdzie }: { wariant: "strona" | "miasto"; gdzie?: string }) {
  const akcja = await aktywnaWymiana();
  const doKiedy = akcja ? dataPl(akcja.endsAt) : null;

  if (wariant === "strona") {
    return akcja ? (
      <div className="mt-8 overflow-hidden rounded-2xl border-2 border-brand-500 bg-neutral-0 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2.5 bg-brand-700 px-5 py-3 text-neutral-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-0 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neutral-0" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wide">
            Akcja wymiany trwa{doKiedy ? " do " + doKiedy : ""}
          </p>
        </div>
        <div className="p-5 sm:p-6">
          <p className="font-display text-xl text-neutral-900 sm:text-2xl">{akcja.productName}</p>
          {akcja.description && <p className="mt-2 text-[0.95rem] leading-relaxed text-neutral-700">{akcja.description}</p>}
          {akcja.conditions && <p className="mt-2 text-sm leading-relaxed text-muted">{akcja.conditions}</p>}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#formularz-wymiana" className="justify-center">Umów wymianę</ButtonLink>
            <ButtonLink href="tel:+48517185691" variant="outline" className="justify-center">
              Zadzwoń: 517 185 691
            </ButtonLink>
          </div>
        </div>
      </div>
    ) : (
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-neutral-0 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2.5 border-b border-border bg-surface px-5 py-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-400" />
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-700">Stan na dziś · {dzisPl()}</p>
        </div>
        <div className="p-5 sm:p-6">
          <p className="font-display text-xl text-neutral-900 sm:text-2xl">Teraz nie ma akcji wymiany</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-neutral-700">
            Ostatnia akcja („{OSTATNIA_WYMIANA.nazwa}”) trwała od {OSTATNIA_WYMIANA.od} do {OSTATNIA_WYMIANA.do}. Tyle
            wynosiła zniżka na TM7:
          </p>
          <Znizki />
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Zostaw numer — zadzwonię, gdy tylko Vorwerk ogłosi kolejną wymianę. A jeśli nie chcesz czekać, niżej
            masz aktualne oferty na TM7 i kalkulator rat.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#formularz-wymiana" className="justify-center">Powiadom mnie o wymianie</ButtonLink>
            <ButtonLink href="tel:+48517185691" variant="outline" className="justify-center">
              Zadzwoń: 517 185 691
            </ButtonLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Section>
      <Heading as="h2" size="md" className="mb-3">
        Masz starszego Thermomixa? Wymiana na TM7 {gdzie ?? ""}
      </Heading>
      {akcja ? (
        <div className="max-w-2xl">
          <p className="leading-relaxed text-neutral-700">
            <strong>Teraz trwa akcja wymiany{doKiedy ? " (do " + doKiedy + ")" : ""}:</strong> {akcja.productName}.{" "}
            {akcja.description}
          </p>
          <div className="mt-4">
            <ButtonLink href="/thermomix/wymiana">Sprawdź warunki wymiany</ButtonLink>
          </div>
        </div>
      ) : (
        <p className="max-w-2xl leading-relaxed text-neutral-700">
          Vorwerk co jakiś czas organizuje akcje wymiany: oddajesz TM6, TM5 albo TM31 i kupujesz TM7 ze zniżką — przy
          ostatniej akcji było to do 1 935 zł. Teraz akcji nie ma, ale wymianę {gdzie ?? ""} zorganizuję, gdy tylko wróci.{" "}
          <Link href="/thermomix/wymiana" className="font-medium text-brand-700 underline underline-offset-4">
            Jak działa wymiana Thermomixa
          </Link>
        </p>
      )}
    </Section>
  );
}

/** Formularz na dole treści /thermomix/wymiana (kotwica #formularz-wymiana). */
export async function WymianaFormularz() {
  const akcja = await aktywnaWymiana();
  return (
    <div id="formularz-wymiana" className="mt-12 max-w-2xl scroll-mt-28 rounded-2xl border border-border bg-surface p-5 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {akcja ? "Umów wymianę" : "Powiadomienie o wymianie"}
      </p>
      <h2 className="mt-1 font-display text-2xl text-neutral-900">
        {akcja ? "Zostaw numer — umówimy wymianę na TM7" : "Zostaw numer — zadzwonię, gdy wróci wymiana"}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
        Napisz, jaki masz model (TM31, TM5 czy TM6). Policzę, ile wyjdzie w Twoim przypadku — wymiana, sprzedaż
        samemu czy aktualna promocja.
      </p>
      <div className="mt-6">
        <LeadForm source="thermomix-page" />
      </div>
    </div>
  );
}
