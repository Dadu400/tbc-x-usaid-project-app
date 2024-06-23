import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";
import AddEditProductForm from "../../../../../../components/products/AddEditProductForm";
import { GetSession } from "../../../../../../actions";
import { getProducts } from "../../../../../../helpers/axiosProduct";
import { useParams } from "next/navigation";
import { Product } from "../../../../../../components/products/ProductList";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("editProductTitle"),
        description: t("editProductDescription"),
    }
}

async function EditProductPage() {
    const params = useParams();
    const session = await GetSession();
    const products = await getProducts();
    const product = products.find((p: Product) => p.id === params.id);
    console.log(params);
    console.log(product);

    return (
        <ProfilePageLayout component={<AddEditProductForm product={null} session={session} />} selectedMenuItem="products" />
    )
}

export default EditProductPage;