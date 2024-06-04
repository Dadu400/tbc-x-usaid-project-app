import CartContainer from "../../../../components/products/Cart";
import DashboardLayout from "../DashboardLayout";

function Cart() {
  return (
    <DashboardLayout useParticles={false}>
      <CartContainer />
    </DashboardLayout>
  );
}

export default Cart;