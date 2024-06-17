import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";
import AddEditProductForm from "../../../../../../components/products/AddEditProductForm";
import { GetSession } from "../../../../../../actions";

async function AddProductPage() {
    const session = await GetSession();

    return (
        <ProfilePageLayout component={<AddEditProductForm product={null} session={session} />} selectedMenuItem="products" />
    )
}

export default AddProductPage;