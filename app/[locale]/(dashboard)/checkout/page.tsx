import DashboardLayout from "../DashboardLayout";
import BillingInfo from "../../../../components/checkout/Separator";

function Checkout() {
    return (
        <DashboardLayout useParticles={false}>
            <BillingInfo />
        </DashboardLayout>
    )
}

export default Checkout;