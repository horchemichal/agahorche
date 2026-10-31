import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-odstapienie-od-umowy");

export default function Page() {
  return <PoradnikPage slug="thermomix-odstapienie-od-umowy" />;
}
