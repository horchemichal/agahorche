import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("cookidoo");

export default function Page() {
  return <PoradnikPage slug="cookidoo" />;
}
