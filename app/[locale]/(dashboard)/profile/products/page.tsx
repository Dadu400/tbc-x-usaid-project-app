import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout'
import MyProductsList from '../../../../../components/profile/MyProductsList'

function ProductsPage() {
    return (
        <ProfilePageLayout component={<MyProductsList />} selectedMenuItem="products" />
    )
}

export default ProductsPage;