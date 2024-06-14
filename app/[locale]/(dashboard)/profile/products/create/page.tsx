import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";
import AddEditProductForm from "../../../../../../components/products/AddEditProductForm";

function AddEditProductPage() {
    return (
        <ProfilePageLayout component={<AddEditProductForm product={null} />} selectedMenuItem="products" />
    )
}

export default AddEditProductPage;