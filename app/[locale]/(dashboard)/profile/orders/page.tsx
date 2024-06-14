import MyProductsList from "../../../../../components/profile/MyProductsList";
import ProfilePageLayout from "../../../../../components/profile/ProfilePageLayout"

function OrderHistoryPage() {
    return (
        <ProfilePageLayout component={<MyProductsList />} selectedMenuItem="history" />
    )
}

export default OrderHistoryPage