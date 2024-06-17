import ProfilePageLayout from "../../../../../../../components/profile/ProfilePageLayout";
import AddEditProductForm from "../../../../../../../components/products/AddEditProductForm";
import { GetSession } from "../../../../../../../actions";
import { useParams } from "next/navigation";

async function EditProductPage() {
    const session = await GetSession();

    return (
        <ProfilePageLayout component={<AddEditProductForm isEdit={true} session={session} />} selectedMenuItem="products" />
    )
}

export default EditProductPage;