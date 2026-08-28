import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAgaClubChallengeRepository } from "@/lib/database/repositories/aga-club-challenge-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { DayForm } from "../day-form";

export const metadata: Metadata = {
  title: "Edytuj dzień wyzwania — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ day: string }>;
}

export default async function EditChallengeDayPage({ params }: Props) {
  await requireAdmin();
  const { day: dayParam } = await params;
  const day = Number(dayParam);
  if (!Number.isInteger(day) || day < 1 || day > 30) notFound();

  const record = await getAgaClubChallengeRepository().getDay(day);

  return (
    <>
      <PanelHeader title={`Dzień ${day} — 30 dni z Agą`} />
      <DayForm day={record} />
    </>
  );
}
