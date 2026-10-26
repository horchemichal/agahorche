import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";
import { WymianaStatus, WymianaFormularz } from "@/components/wymiana/wymiana-status";
import { OfertyIRaty } from "@/components/marketing/oferty-i-raty";

// Status akcji wymiany i oferty zależą od panelu — strona zawsze świeża.
export const dynamic = "force-dynamic";

export const generateMetadata = () => poradnikMetadata("thermomix-wymiana");

export default function Page() {
  return (
    <PoradnikPage
      slug="thermomix-wymiana"
      wstep={
        <>
          <WymianaStatus wariant="strona" />
          <OfertyIRaty bezWymiany />
        </>
      }
      zakonczenie={<WymianaFormularz />}
    />
  );
}
