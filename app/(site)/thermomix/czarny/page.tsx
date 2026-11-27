import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-czarny");

export default function Page() {
  return <PoradnikPage slug="thermomix-czarny" />;
}
