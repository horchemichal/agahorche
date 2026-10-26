import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-tm7-opinie");

export default function Page() {
  return <PoradnikPage slug="thermomix-tm7-opinie" />;
}
