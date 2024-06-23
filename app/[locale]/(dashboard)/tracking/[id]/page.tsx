import DashboardLayout from "../../DashboardLayout";
import CourierTracking from "../../../../../components/tracking/CourierTracking";
import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("trackOrderTitle"),
        description: t("trackOrderDescription"),
    }
}

const Map = dynamic(() => import('../../../../../components/tracking/Map'), { ssr: true });

function CourierTrackingPage() {
    return (
        <DashboardLayout>
            <CourierTracking />
            <Map />
        </DashboardLayout>
    );
}

export default CourierTrackingPage;