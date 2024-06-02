import DashboardLayout from "../DashboardLayout";
import ContactInfo from "../../../../components/contactUs/ContactInfo";

function Contacts() {
  return (
    <DashboardLayout useParticles={false}>
      <ContactInfo />
    </DashboardLayout>
  );
}

export default Contacts;
