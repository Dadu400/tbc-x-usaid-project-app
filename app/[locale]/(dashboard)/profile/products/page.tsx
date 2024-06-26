import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout';
import MyProductsList from '../../../../../components/profile/MyProductsList';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";
import { GetSession } from '../../../../../actions';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("myProductsTitle"),
        description: t("myProductsDescription"),
    }
}

async function ProductsPage() {
    const session = await GetSession();

    return (
        <ProfilePageLayout component={<MyProductsList session={session} />} selectedMenuItem="products" />
    )
}

export default ProductsPage;