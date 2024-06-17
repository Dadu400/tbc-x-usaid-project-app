
import Link from "next/link";
import { getUserCart } from "../../helpers/axios";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export interface Cart {
  id: number;
  user_id: number;
  products: {
    [key: string]: number;
  };
  added_on: string;
}

async function getUserCartCount(userId: number) {
  const cart: Cart = await getUserCart(userId);
  const num = cart.products === undefined ? [] : Object.values(cart.products);

  return num.reduce((total: number, quantity: number) => {
    return total + quantity;
  }, 0);
}

export default async function CartIcon({ session }) {
  const totalQuantity = session !== undefined ? getUserCartCount(session.user.id) : 0;

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartOutlinedIcon />
      <span className="absolute bottom-4 left-4 inline-flex items-center justify-center text-[10px] leading-none rounded-full bg-[#EC6652] w-[15px] h-[15px] text-white">
        {totalQuantity}
      </span>
    </Link>
  );
}