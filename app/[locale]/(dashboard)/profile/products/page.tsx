import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout';
import MyProductsList from '../../../../../components/profile/MyProductsList';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("myProductsTitle"),
        description: t("myProductsDescription"),
    }
}

function ProductsPage() {
    return (
        <ProfilePageLayout component={<MyProductsList />} selectedMenuItem="products" />
    )
}

export default ProductsPage;