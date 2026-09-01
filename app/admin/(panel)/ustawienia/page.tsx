import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getFinancingSettingsRepository } from "@/lib/database/repositories/financing-settings-repository";
import { FinancingForm } from "./financing-form";

export const metadata: Metadata = {
  title: "Ustawienia — Aga Admin",
  robots: { index: false, follow: false },
};

/**
 * Ustawienia ogólne panelu. Na razie mieszka tu jedna rzecz —
 * przełącznik dostępności rat 0% — bo to jedyne ustawienie, które
 * naprawdę zmienia się w rytmie promocji Vorwerk i musi być w rękach
 * Agi, a nie w kodzie (patrz financing-settings-repository.ts).
 */
export default async function AdminUstawieniaPage() {
  await requireAdmin();
  const settings = await getFinancingSettingsRepository().get();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-neutral-900">Ustawienia</h1>
        <p className="mt-1 text-sm text-muted">Rzeczy, które zmieniają się rzadko, ale muszą być pod ręką.</p>
      </div>
      <FinancingForm settings={settings} />
    </div>
  );
}
