import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-co-potrafi");

export default function Page() {
  return <PoradnikPage slug="thermomix-co-potrafi" />;
}
