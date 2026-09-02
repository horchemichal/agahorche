import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAgaClubChallengeRepository } from "@/lib/database/repositories/aga-club-challenge-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "30 dni z Thermomixem — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminChallengePage() {
  await requireAdmin();
  const days = await getAgaClubChallengeRepository().listDays();

  return (
    <>
      <PanelHeader
        title="30 dni z Thermomixem"
        description="Treść wyzwania — zadanie, porada i przepis na każdy dzień. Dni oznaczone „do przepisania” to wgrany plan startowy: warto zastąpić go własnymi słowami."
        action={
          <ButtonLink href="/admin/aga-club" variant="ghost">
            ← Aga Club
          </ButtonLink>
        }
      />

      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((d) => (
          <Card key={d.day} className="!p-4">
            <Link href={`/admin/aga-club/wyzwanie/${d.day}`} className="block">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-medium text-neutral-900">Dzień {d.day}</span>
                <span className="flex gap-1.5">
                  {!d.wlasne && <Badge tone="neutral">do przepisania</Badge>}
                  {d.active ? <Badge>opublikowany</Badge> : <Badge tone="neutral">szkic</Badge>}
                </span>
              </div>
              <p className="truncate text-sm text-muted">{d.task || "— brak treści —"}</p>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
