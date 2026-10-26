import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-porownanie");

export default function Page() {
  return <PoradnikPage slug="thermomix-porownanie" />;
}
