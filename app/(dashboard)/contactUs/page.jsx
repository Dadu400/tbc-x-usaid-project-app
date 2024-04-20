import DashboardLayout from "@/app/(dashboard)/DashboardLayout";
import ContactInfo from "@/components/contactUs/ContactInfo";
import ContactBanners from "@/components/contactUs/ContactBanners";

function Contacts() {
  return (
    <DashboardLayout>
      <ContactInfo />
      <ContactBanners />
    </DashboardLayout>
  );
}

export default Contacts;
