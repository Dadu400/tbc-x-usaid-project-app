import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";
import AddEditProductForm from "../../../../../../components/products/AddEditProductForm";
import { GetSession } from "../../../../../../actions";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("addProductTitle"),
        description: t("addProductDescription"),
    }
}

async function AddProductPage() {
    const session = await GetSession();

    return (
        <ProfilePageLayout component={<AddEditProductForm product={null} session={session} />} selectedMenuItem="products" />
    )
}

export default AddProductPage;