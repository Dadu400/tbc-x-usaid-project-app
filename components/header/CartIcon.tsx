
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

export default async function CartIcon() {
  const cart: Cart = await getUserCart(1);
  const num = Object.values(cart.products);
  const totalQuantity = num.reduce((total: number, quantity: number) => {
    return total + quantity;
  }, 0);

  return (
    <li className="uppercase relative">
      <Link href="/cart">
        <ShoppingCartOutlinedIcon />
        <span className="absolute bottom-4 left-4 inline-flex items-center justify-center text-[10px] leading-none rounded-full bg-[#EC6652] w-[15px] h-[15px] text-white">
          {totalQuantity}
        </span>
      </Link>
    </li>
  );
}