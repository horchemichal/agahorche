import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-gotowanie-na-zapas");

export default function Page() {
  return <PoradnikPage slug="thermomix-gotowanie-na-zapas" />;
}
