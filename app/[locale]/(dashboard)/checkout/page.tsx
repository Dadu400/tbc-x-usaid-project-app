import DashboardLayout from "../DashboardLayout";
import CheckoutNavigator from "../../../../components/checkout/CheckoutNavigator";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("checkoutTitle"),
        description: t("checkoutDescription"),
    }
}

function Checkout() {
    return (
        <DashboardLayout useParticles={true}>
            <CheckoutNavigator />
        </DashboardLayout>
    )
}

export default Checkout;