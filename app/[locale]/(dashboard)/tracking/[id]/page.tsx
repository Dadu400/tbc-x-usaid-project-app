import DashboardLayout from "../../DashboardLayout";
import CourierTracking from "../../../../../components/tracking/CourierTracking";
import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";
import { getOrders } from "../../../../../helpers/axios";
import { Order } from "../../../../../components/profile/OrderHistory";

interface Params {
    id: string;
    locale: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("trackOrderTitle"),
        description: t("trackOrderDescription"),
    }
}

const Map = dynamic(() => import('../../../../../components/tracking/Map'), { ssr: true });

async function CourierTrackingPage({ params }: { params: Params }) {
    const orders: Order[] = await getOrders();
    const currentOrder = orders.find(order => Number(order.id) === Number(params.id));

    return (
        <DashboardLayout>
            {currentOrder ? (
                <>
                    <CourierTracking order={currentOrder} />
                    <Map />
                </>
            ) : (
                <div>Order not found</div>
            )}
        </DashboardLayout>
    );
}

export default CourierTrackingPage;