import OrderHistory from "../../../../../components/profile/OrderHistory";
import ProfilePageLayout from "../../../../../components/profile/ProfilePageLayout"

function OrderHistoryPage() {
    return (
        <ProfilePageLayout component={<OrderHistory />} selectedMenuItem="history" />
    )
}

export default OrderHistoryPage;