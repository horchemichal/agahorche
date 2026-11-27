import { revalidatePath } from "next/cache";
import { getCurrentAdmin } from "@/lib/auth/admin-auth";
import { POLA, OKRES_PRZECHOWYWANIA_GODZ } from "@/lib/raty/pola";
import { pobierzWnioskiRaty, usunWniosekRaty } from "@/lib/raty/zgloszenia";

/**
 * OŚ PLIKU
 * Wnioski „Raty 0%” w Aga Panel (/admin/raty). Tu prowadzi powiadomienie
 * push. Pokazuje tylko wnioski młodsze niż 24 h — starsze baza kasuje.
 * Stronę chroni proxy.ts (/admin/*); usuwanie dodatkowo sprawdza sesję.
 */

export const dynamic = "force-dynamic";

async function usun(formData: FormData) {
  "use server";
  const admin = await getCurrentAdmin();
  if (!admin) return;
  const id = formData.get("id");
  if (typeof id === "string" && id) await usunWniosekRaty(id);
  revalidatePath("/admin/raty");
}

const FORMAT = new Intl.DateTimeFormat("pl-PL", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Warsaw",
});

export default async function WnioskiRaty() {
  const wnioski = await pobierzWnioskiRaty();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Wnioski – raty 0%</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Formularz: /ratyagnieszka (poza menu, na hasło). Wnioski znikają automatycznie po {OKRES_PRZECHOWYWANIA_GODZ}{" "}
          h — przepisz dane do wniosku wcześniej.
        </p>
      </div>

      {wnioski.length === 0 && (
        <p className="rounded-lg border border-dashed px-4 py-8 text-center text-neutral-500">
          Brak wniosków z ostatnich {OKRES_PRZECHOWYWANIA_GODZ} godzin.
        </p>
      )}

      {wnioski.map((w) => (
        <section key={w.id} className="rounded-xl border bg-white p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold">{w.dane.imieNazwisko || "Bez imienia"}</h2>
            <p className="text-xs text-neutral-500">
              wysłano {FORMAT.format(new Date(w.createdAt))} · zniknie {FORMAT.format(new Date(w.wygasaAt))}
            </p>
          </div>
          <dl className="mt-3 divide-y text-sm">
            {POLA.filter((p) => p.typ !== "info" && w.dane[p.klucz]).map((p) => (
              <div key={p.klucz} className="grid gap-1 py-2 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-4">
                <dt className="text-neutral-500">{p.etykieta}</dt>
                <dd className="whitespace-pre-wrap break-words font-medium text-neutral-900">{p.typ === "date" ? w.dane[p.klucz].split("-").reverse().join(".") : w.dane[p.klucz]}</dd>
              </div>
            ))}
          </dl>
          <form action={usun} className="mt-3">
            <input type="hidden" name="id" value={w.id} />
            <button type="submit" className="text-sm text-red-700 underline-offset-2 hover:underline">
              Usuń teraz
            </button>
          </form>
        </section>
      ))}
    </div>
  );
}
