"use client";

import { useActionState, useState } from "react";
import { saveCrmKlientAction } from "./actions";
import { Input, Label, Textarea, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn, SITE } from "@/lib/utils";
import type { CrmKlient, CrmPolecenie } from "@/types/crm";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

/** Duży „kafelek" wyboru — wygodny do klikania kciukiem na telefonie. */
function Wybor({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "flex flex-1 cursor-pointer items-center gap-2.5 rounded-md border px-4 py-3 text-base transition-colors",
        checked ? "border-brand-500 bg-brand-50 text-brand-800" : "border-neutral-300 bg-neutral-0 text-neutral-800",
      )}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="h-4 w-4 accent-brand-600" />
      {children}
    </label>
  );
}

export function CrmForm({ klient }: { klient?: CrmKlient }) {
  const [state, formAction, pending] = useActionState(saveCrmKlientAction, initialState);
  const [polecenie, setPolecenie] = useState<CrmPolecenie | "">(klient?.polecenie ?? "");
  const [kupil, setKupil] = useState<"tak" | "nie" | "">(klient ? (klient.kupil ? "tak" : "nie") : "");
  const [telefon, setTelefon] = useState(klient?.telefon ?? "");
  /*
   * Wszystkie pola sterowane stanem: React po każdej akcji formularza czyści
   * pola niesterowane, więc przy błędzie (np. zły numer) znikałoby wpisane
   * imię i miejscowość. Tak zostają.
   */
  const [imieNazwisko, setImieNazwisko] = useState(klient?.imieNazwisko ?? "");
  const [miejscowosc, setMiejscowosc] = useState(klient?.miejscowosc ?? "");
  const [polecil, setPolecil] = useState(klient?.polecil ?? "");
  const [notatka, setNotatka] = useState(klient?.notatka ?? "");
  const telHref = telefon.replace(/[^\d+]/g, "");
  /*
   * Prośba o opinię (6.11.2026). Po prezentacji zakończonej zakupem Aga
   * jednym kliknięciem otwiera SMS z gotowym tekstem i linkiem do opinii
   * w Google. Prośba o dopisanie miejscowości — bo opinia z nazwą miasta
   * to jedyny uczciwy sposób na „opinie z miejscowościami" na stronach miast.
   */
  const trescSms =
    "Dzień dobry, tu Aga Horche. Dziękuję za zaufanie i zakup Thermomixa! " +
    "Jeśli masz chwilę, napisz proszę kilka słów o prezentacji w Google — i dopisz, z jakiej jesteś miejscowości. " +
    "To bardzo mi pomaga: " +
    (SITE.googleReviewUrl ?? "");
  const smsHref = `sms:${telHref}?&body=${encodeURIComponent(trescSms)}`;

  return (
    <form action={formAction} className="max-w-xl space-y-6">
      {klient && <input type="hidden" name="id" value={klient.id} />}

      <div>
        <Label htmlFor="imieNazwisko">1. Imię i nazwisko</Label>
        <Input id="imieNazwisko" name="imieNazwisko" value={imieNazwisko} onChange={(e) => setImieNazwisko(e.target.value)} autoComplete="off" required />
      </div>

      <div>
        <Label htmlFor="miejscowosc">2. Miejscowość</Label>
        <Input id="miejscowosc" name="miejscowosc" value={miejscowosc} onChange={(e) => setMiejscowosc(e.target.value)} autoComplete="off" required />
      </div>

      <div>
        <Label htmlFor="telefon">3. Numer telefonu</Label>
        <Input
          id="telefon"
          name="telefon"
          type="tel"
          inputMode="tel"
          autoComplete="off"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          required
        />
        {telHref.replace(/\D/g, "").length >= 9 ? (
          <a
            href={`tel:${telHref}`}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-base font-medium text-neutral-0 hover:bg-brand-700"
          >
            <span aria-hidden="true">📞</span> Zadzwoń
          </a>
        ) : (
          <span className="mt-2 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-neutral-100 px-5 py-3 text-base font-medium text-neutral-400">
            <span aria-hidden="true">📞</span> Zadzwoń
          </span>
        )}
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-neutral-700">4. Kto polecił</legend>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Wybor name="polecenie" value="osoba" checked={polecenie === "osoba"} onChange={() => setPolecenie("osoba")}>
            Osoba
          </Wybor>
          <Wybor name="polecenie" value="strona-www" checked={polecenie === "strona-www"} onChange={() => setPolecenie("strona-www")}>
            Strona www
          </Wybor>
        </div>
        {polecenie === "osoba" && (
          <div className="mt-3">
            <Label htmlFor="polecil">Imię i nazwisko osoby polecającej</Label>
            <Input id="polecil" name="polecil" value={polecil} onChange={(e) => setPolecil(e.target.value)} autoComplete="off" required />
          </div>
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-neutral-700">5. Status</legend>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Wybor name="kupil" value="tak" checked={kupil === "tak"} onChange={() => setKupil("tak")}>
            Kupił
          </Wybor>
          <Wybor name="kupil" value="nie" checked={kupil === "nie"} onChange={() => setKupil("nie")}>
            Nie kupił
          </Wybor>
        </div>
        {kupil === "tak" && SITE.googleReviewUrl && telHref.replace(/\D/g, "").length >= 9 && (
          <a
            href={smsHref}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-brand-500 bg-neutral-0 px-5 py-3 text-base font-medium text-brand-700 hover:bg-brand-50"
          >
            <span aria-hidden="true">⭐</span> Poproś o opinię w Google (SMS)
          </a>
        )}
      </fieldset>

      <div>
        <Label htmlFor="notatka">6. Notatka (nieobowiązkowa)</Label>
        <Textarea id="notatka" name="notatka" value={notatka} onChange={(e) => setNotatka(e.target.value)} rows={4} />
      </div>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : klient ? "Zapisz zmiany" : "Dodaj klienta"}
        </Button>
        <ButtonLink href="/admin/crm" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
