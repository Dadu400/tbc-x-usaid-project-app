import DashboardLayout from "../DashboardLayout";
import CheckoutNavigator from "../../../../components/checkout/CheckoutNavigator";

function Checkout() {
    return (
        <DashboardLayout useParticles={true}>
            <CheckoutNavigator />
        </DashboardLayout>
    )
}

export default Checkout;