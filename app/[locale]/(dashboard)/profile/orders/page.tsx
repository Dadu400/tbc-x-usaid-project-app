import OrderHistory from "../../../../../components/profile/OrderHistory";
import ProfilePageLayout from "../../../../../components/profile/ProfilePageLayout";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("ordersTitle"),
        description: t("ordersDescription"),
    }
}

function OrderHistoryPage() {
    return (
        <ProfilePageLayout component={<OrderHistory />} selectedMenuItem="orders" />
    )
}

export default OrderHistoryPage;