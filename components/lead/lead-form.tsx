"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { Label, Input, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics/track";
import type { LeadSource, PresentationPreference } from "@/types/lead";

interface Props {
  source: LeadSource;
  /** Optional city name to preselect/label the form context. */
  cityLabel?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * The single lead-capture form component (spec §22), reused everywhere a
 * "Umów prezentację" CTA appears (homepage, /prezentacja, /kontakt, every
 * location page). One component + one API contract keeps validation,
 * analytics and n8n forwarding consistent no matter where the form lives.
 */
export function LeadForm({ source, cityLabel }: Props) {
  const pathname = usePathname();
  const [state, setState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      city: String(formData.get("city") ?? cityLabel ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      message: String(formData.get("message") ?? ""),
      presentationType: (formData.get("presentationType") as PresentationPreference) || undefined,
      consentProcessing: formData.get("consentProcessing") === "on",
      consentMarketing: formData.get("consentMarketing") === "on",
      website: String(formData.get("website") ?? ""), // honeypot
      source,
      sourcePath: pathname,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.issues) {
          const fieldErrors: Record<string, string> = {};
          for (const issue of data.issues) {
            const key = issue.path?.[0];
            if (key) fieldErrors[key] = issue.message;
          }
          setErrors(fieldErrors);
        }
        setState("error");
        return;
      }

      track("submit_lead", { source, sourcePath: pathname, city: payload.city || undefined });
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border border-brand-200 bg-brand-50 p-6 text-brand-800">
        <p className="font-semibold">Dziękuję za zgłoszenie!</p>
        <p className="mt-1 text-sm">Aga skontaktuje się z Tobą, aby ustalić termin prezentacji.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot field — hidden from real users via CSS, not `type="hidden"`,
          so basic bots that skip hidden inputs still get caught. */}
      <div className="hidden" aria-hidden>
        <Label htmlFor="website">Strona internetowa</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <Label htmlFor="name">Imię i nazwisko</Label>
        <Input id="name" name="name" required autoComplete="name" />
        <FieldError>{errors.name}</FieldError>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
          <FieldError>{errors.phone}</FieldError>
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
          <FieldError>{errors.email}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="city">Miejscowość</Label>
        <Input id="city" name="city" required defaultValue={cityLabel} />
        <FieldError>{errors.city}</FieldError>
      </div>

      <div>
        <Label htmlFor="preferredDate">Preferowany termin (opcjonalnie)</Label>
        <Input id="preferredDate" name="preferredDate" placeholder="np. w tym tygodniu wieczorem" />
      </div>

      <div>
        <Label htmlFor="message">Wiadomość (opcjonalnie)</Label>
        <Textarea id="message" name="message" placeholder="Chętnie dowiem się więcej o..." />
      </div>

      <fieldset className="flex flex-col gap-2">
        <Checkbox
          name="consentProcessing"
          required
          label={
            <>
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i umówienia
              prezentacji Thermomix. TODO: pełna treść zgody RODO dostarczona przez Agę.
            </>
          }
        />
        <Checkbox
          name="consentMarketing"
          label="Chcę otrzymywać informacje marketingowe od Agi Horche (opcjonalnie)."
        />
        <FieldError>{errors.consentProcessing}</FieldError>
      </fieldset>

      {state === "error" && !Object.keys(errors).length && (
        <p className="text-sm text-danger">
          Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio.
        </p>
      )}

      <Button type="submit" size="lg" disabled={state === "submitting"}>
        {state === "submitting" ? "Wysyłanie..." : "Umów bezpłatną prezentację"}
      </Button>
    </form>
  );
}
