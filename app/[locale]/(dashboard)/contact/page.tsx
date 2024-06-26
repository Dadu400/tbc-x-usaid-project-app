import DashboardLayout from "../DashboardLayout";
import ContactInfo from "../../../../components/contactUs/ContactInfo";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MetaData");

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  }
}

function Contacts() {
  return (
    <DashboardLayout useParticles={false}>
      <ContactInfo />
    </DashboardLayout>
  );
}

export default Contacts;
