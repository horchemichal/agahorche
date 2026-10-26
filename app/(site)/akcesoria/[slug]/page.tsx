import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return poradnikMetadata("akcesoria-" + slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PoradnikPage slug={"akcesoria-" + slug} />;
}
