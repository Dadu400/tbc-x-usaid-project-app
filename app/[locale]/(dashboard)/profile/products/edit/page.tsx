import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";
import AddEditProductForm from "../../../../../../components/products/AddEditProductForm";
import { GetSession } from "../../../../../../actions";
import { getProducts } from "../../../../../../helpers/axiosProduct";
import { useParams, useRouter } from "next/navigation";
import { Product } from "../../../../../../components/products/ProductList";

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