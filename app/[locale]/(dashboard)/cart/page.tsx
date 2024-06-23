import { GetSession } from "../../../../actions";
import CartContainer from "../../../../components/products/Cart";
import DashboardLayout from "../DashboardLayout";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MetaData");

  return {
    title: t("cartTitle"),
    description: t("cartDescription"),
  }
}

async function Cart() {
  const session = await GetSession();

  return (
    <DashboardLayout useParticles={false}>
      <CartContainer session={session} />
    </DashboardLayout>
  );
}

export default Cart;