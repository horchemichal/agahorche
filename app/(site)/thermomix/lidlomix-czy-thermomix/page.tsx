import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("lidlomix-czy-thermomix");

export default function Page() {
  return <PoradnikPage slug="lidlomix-czy-thermomix" />;
}
