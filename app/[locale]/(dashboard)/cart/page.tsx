import { GetSession } from "../../../../actions";
import CartContainer from "../../../../components/products/Cart";
import DashboardLayout from "../DashboardLayout";

async function Cart() {
  const session = await GetSession();

  return (
    <DashboardLayout useParticles={false}>
      <CartContainer session={session} />
    </DashboardLayout>
  );
}

export default Cart;