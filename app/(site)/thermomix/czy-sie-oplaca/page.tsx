import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-czy-sie-oplaca");

export default function Page() {
  return <PoradnikPage slug="thermomix-czy-sie-oplaca" />;
}
