import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAgaClubMembersRepository } from "@/lib/database/repositories/aga-club-members-repository";
import { getAgaClubChallengeRepository } from "@/lib/database/repositories/aga-club-challenge-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { MemberForm } from "./member-form";
import { MemberDeleteButton } from "./member-delete-button";

export const metadata: Metadata = {
  title: "Aga Club — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminAgaClubPage() {
  await requireAdmin();
  const [members, challengeDays] = await Promise.all([
    getAgaClubMembersRepository().list(),
    getAgaClubChallengeRepository().listDays(),
  ]);
  const activeDays = challengeDays.filter((d) => d.active).length;

  return (
    <>
      <PanelHeader
        title="Aga Club"
        description="Lekkie zarządzanie społecznością — lista członków i treść wyzwania „30 dni z Agą” (spec §16/§21)."
        action={
          <ButtonLink href="/admin/aga-club/wyzwanie" variant="outline">
            Wyzwanie 30 dni ({activeDays}/30 opublikowanych)
          </ButtonLink>
        }
      />

      <div className="mb-6">
        <MemberForm />
      </div>

      <h2 className="mb-3 font-medium text-neutral-900">Członkowie ({members.length})</h2>
      {members.length === 0 ? (
        <EmptyState title="Brak członków" description="Dodaj pierwszego członka powyżej." />
      ) : (
        <div className="space-y-2.5">
          {members.map((member) => (
            <Card key={member.id} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="font-medium text-neutral-900">{member.displayName}</span>
                  <Badge tone={member.tier === "premium" ? "brand" : "neutral"}>{member.tier ?? "free"}</Badge>
                </div>
                <p className="truncate text-sm text-muted">
                  {member.email} · dołączył {new Date(member.createdAt).toLocaleDateString("pl-PL")}
                </p>
              </div>
              <MemberDeleteButton id={member.id} displayName={member.displayName} />
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
