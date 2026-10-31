import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-jadlospis-na-tydzien");

export default function Page() {
  return <PoradnikPage slug="thermomix-jadlospis-na-tydzien" />;
}
