// import CartComponent from "./CartComponent"
// import ContactInfo from "./ContactInfo"
import BillingInfo from "./BillingInfo"
// import Payment from "./Payment"

function CheckoutNavigator() {
    return (
        <div className="w-[60vw] m-auto mt-[20px] flex sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <BillingInfo />
            {/* <CartComponent totalQuantity={0} totalAmount={0} showButton={false} /> */}
        </div>
    )
}

export default CheckoutNavigator;